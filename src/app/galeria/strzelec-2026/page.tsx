import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function GaleriaStrzelec() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Ogólnopolski Konkurs Modeli Redukcyjnych Strzelec 2026
        </h1>
        <GalleryGrid folder="Strzelce opolskie 2026" count={28} />
      </section>
    </main>
  );
}
