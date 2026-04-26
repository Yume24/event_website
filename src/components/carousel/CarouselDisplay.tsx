'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const INTERVAL = 10_000;
const DURATION = 1000;

export default function CarouselDisplay({ images }: { images: string[] }) {
  const count = images.length;
  // triple[0]=prev, triple[1]=current, triple[2]=next
  const [triple, setTriple] = useState([count - 1, 0, 1 % count]);
  const [sliding, setSliding] = useState(false);
  const slidingRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slidingRef.current) return;
      slidingRef.current = true;
      setSliding(true);
      setTimeout(() => {
        setTriple(([, cur, nxt]) => [cur, nxt, (nxt + 1) % count]);
        setSliding(false);
        slidingRef.current = false;
      }, DURATION);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="overflow-hidden h-full w-full relative -z-1">
      <div
        className={`flex flex-row h-full${sliding ? ' transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(${sliding ? '-200%' : '-100%'})` }}
      >
        {triple.map((imgIndex, position) => (
          <div className="shrink-0 w-full h-full relative" key={position}>
            <Image
              src={images[imgIndex]}
              fill
              sizes="100vw"
              className="object-cover object-center"
              alt={`slideshow image ${imgIndex + 1}`}
              priority={position === 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
