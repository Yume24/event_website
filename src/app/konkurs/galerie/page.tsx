import Link from 'next/link';

const events: { name: string; href?: string }[] = [
  { name: 'Meeting Modelarski Ogrodzieniec', href: '/galeria/ii-meeting' },
  {
    name: 'Ogólnopolski Konkurs Modeli Redukcyjnych Strzelec',
    href: '/galeria/strzelec-2026'
  },
  { name: 'Rybnicki Festiwal Modelarski HOYM MODEL FEST' },
  { name: 'Inowrocławski Konkurs Modelarski' },
  { name: 'Międzynarodowy Konkurs Modeli Kartonowych i Plastikowych Radków' },
  { name: 'XV Bałtycki Festiwal Modelarski' },
  { name: 'XVII Festiwal Modelarski Jaworzno' },
  { name: 'XIV Szczeciński Festiwal Modelarski Paprykarz' },
  { name: 'XXV Konkurs Modeli Redukcyjnych Łambinowice' }
];

export default function Galerie() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Galerie
        </h1>

        <ul className="space-y-2 border-l-2 border-primary pl-4">
          {events.map((event, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-medium">•</span>
              {event.href ? (
                <Link href={event.href} className="hover:text-primary transition-colors">
                  {event.name}
                </Link>
              ) : (
                <span>{event.name}</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
