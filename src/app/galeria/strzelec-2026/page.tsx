import Image from 'next/image';

const FOLDER = 'Strzelce opolskie 2026';
const COUNT = 28;

export default function GaleriaStrzelec() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Ogólnopolski Konkurs Modeli Redukcyjnych Strzelec 2026
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: COUNT }, (_, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`/static/images/gallery/${FOLDER}/zdj${i + 1}.jpg`}
                alt={`Zdjęcie ${i + 1}`}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
