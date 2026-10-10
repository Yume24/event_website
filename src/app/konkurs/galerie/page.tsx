'use client';

import Link from 'next/link';
import { useLocale } from 'gt-next';

const getEvents = (isEn: boolean): { name: string; href?: string }[] => [
  {
    name: isEn
      ? 'Ogrodzieniec Modeling Meeting'
      : 'Meeting Modelarski Ogrodzieniec',
    href: '/galeria/ii-meeting'
  },
  {
    name: isEn
      ? 'National Scale Model Competition Strzelec'
      : 'Ogólnopolski Konkurs Modeli Redukcyjnych Strzelec',
    href: '/galeria/strzelec-2026'
  },
  {
    name: isEn
      ? 'Rybnik Modeling Festival HOYM MODEL FEST'
      : 'Rybnicki Festiwal Modelarski HOYM MODEL FEST',
    href: '/galeria/hoym-model-fest'
  },
  {
    name: isEn
      ? 'Inowrocław Modeling Competition'
      : 'Inowrocławski Konkurs Modelarski'
  },
  {
    name: isEn
      ? 'International Cardboard and Plastic Model Competition Radków'
      : 'Międzynarodowy Konkurs Modeli Kartonowych i Plastikowych Radków'
  },
  {
    name: isEn
      ? '15th Baltic Modeling Festival'
      : 'XV Bałtycki Festiwal Modelarski'
  },
  {
    name: isEn
      ? '17th Jaworzno Modeling Festival'
      : 'XVII Festiwal Modelarski Jaworzno'
  },
  {
    name: isEn
      ? '14th Szczecin Modeling Festival Paprykarz'
      : 'XIV Szczeciński Festiwal Modelarski Paprykarz'
  },
  {
    name: isEn
      ? '25th Scale Model Competition Łambinowice'
      : 'XXV Konkurs Modeli Redukcyjnych Łambinowice'
  }
];

export default function Galerie() {
  const locale = useLocale();
  const isEn = locale === 'en';
  const events = getEvents(isEn);

  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          {isEn ? 'Galleries' : 'Galerie'}
        </h1>

        <ul className="space-y-2 border-l-2 border-primary pl-4">
          {events.map((event, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-medium">•</span>
              {event.href ? (
                <Link
                  href={event.href}
                  className="hover:text-primary transition-colors"
                >
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
