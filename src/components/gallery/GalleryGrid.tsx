'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type Dims = { w: number; h: number };

function fitToViewport({ w, h }: Dims): Dims {
  const maxW = window.innerWidth * 0.9;
  const maxH = window.innerHeight * 0.88;
  const ratio = w / h;
  if (w > maxW) { w = maxW; h = w / ratio; }
  if (h > maxH) { h = maxH; w = h * ratio; }
  return { w: Math.round(w), h: Math.round(h) };
}

export default function GalleryGrid({ folder, count }: { folder: string; count: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [display, setDisplay] = useState<Dims>({ w: 400, h: 300 });
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedRef = useRef<number | null>(null);
  const dimsCache = useRef<Map<number, Dims>>(new Map());

  const navigateTo = useCallback((i: number) => {
    selectedRef.current = i;
    setSelected(i);
    const cached = dimsCache.current.get(i);
    if (cached) {
      setDisplay(fitToViewport(cached));
      setLoading(false);
    } else {
      setLoading(true);
      // keep current display dims so the box doesn't jump during load
    }
  }, []);

  const open = useCallback((i: number) => {
    navigateTo(i);
    dialogRef.current?.showModal();
  }, [navigateTo]);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const prev = useCallback(() => {
    if (selectedRef.current === null) return;
    navigateTo((selectedRef.current - 1 + count) % count);
  }, [count, navigateTo]);

  const next = useCallback(() => {
    if (selectedRef.current === null) return;
    navigateTo((selectedRef.current + 1) % count);
  }, [count, navigateTo]);

  const onImgLoad = useCallback((idx: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    dimsCache.current.set(idx, { w, h });
    if (idx === selectedRef.current) {
      // rAF ensures the loading-state render is committed to the DOM first,
      // so the browser has a reference layout to transition from
      requestAnimationFrame(() => {
        setDisplay(fitToViewport({ w, h }));
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedRef.current === null) return;
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: count }, (_, i) => (
          <button key={i} className="relative aspect-square" onClick={() => open(i)}>
            <Image
              src={`/static/images/gallery/${folder}/zdj${i + 1}.jpg`}
              alt={`Zdjęcie ${i + 1}`}
              fill
              className="object-cover rounded hover:brightness-90 transition-[filter]"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="modal"
        onClose={() => {
          setSelected(null);
          setLoading(false);
          selectedRef.current = null;
        }}
      >
        <div
          className="modal-box bg-black p-0 overflow-hidden relative"
          style={{
            width: display.w,
            height: display.h,
            maxWidth: '90vw',
            maxHeight: '88vh',
            transition: 'width 300ms ease-in-out, height 300ms ease-in-out',
          }}
        >
          {selected !== null && (
            <Image
              key={selected}
              src={`/static/images/gallery/${folder}/zdj${selected + 1}.jpg`}
              alt={`Zdjęcie ${selected + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              onLoad={e => onImgLoad(selected, e)}
              style={{
                opacity: loading ? 0 : 1,
                transition: 'opacity 200ms ease-in-out',
              }}
              priority
            />
          )}

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="loading loading-spinner loading-lg text-white" />
            </div>
          )}

          <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full pointer-events-none select-none">
            {selected !== null && `${selected + 1} / ${count}`}
          </span>

          <button
            className="absolute top-2 right-2 btn btn-sm btn-circle bg-black/60 hover:bg-black/80 text-white border-none"
            onClick={close}
          >
            ✕
          </button>

          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 btn btn-lg btn-circle bg-black/60 hover:bg-black/80 text-white border-none shadow-lg"
            onClick={prev}
          >
            ❮
          </button>

          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-lg btn-circle bg-black/60 hover:bg-black/80 text-white border-none shadow-lg"
            onClick={next}
          >
            ❯
          </button>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
