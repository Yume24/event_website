const noclegi = [
  {
    name: 'SKALNY apartamenty, pokoje',
    href: 'https://www.google.com/travel/search?q=SKALNY+apartamenty,+pokoje&qs=MhRDZ3NJenVIMmg3ZXJrZlM4QVJBQg&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Agroturystyka na Jurze',
    href: 'https://www.google.com/travel/search?q=Agroturystyka+na+Jurze&qs=MhRDZ3NJN18tZjRPTHF4Zk9yQVJBQg&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Centuria Hotel & Natural SPA',
    href: 'https://www.google.com/travel/search?q=Centuria+Hotel%26Natural+SPA&qs=MhRDZ3NJdTlHRW9zcXE4Y0daQVJBQg&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Ranczo Czerwony Młyn & SPA',
    href: 'https://www.google.com/travel/search?q=Ranczo+Czerwony+M%C5%82yn+%26+SPA+-Apartamenty+z+saun%C4%85+i+jacuzzi&qs=MhRDZ3NJX2ZySzlvU1A3WVdqQVJBQg&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Noclegi w Gościńcu w Ratuszu',
    href: 'https://www.google.com/travel/search?q=Noclegi+w+Go%C5%9Bci%C5%84cu+w+Ratuszu&qs=MhRDZ3NJaE9mR3NNeUZ0ZG1mQVJBQg&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Willa Pod Zamczyskiem',
    href: 'https://www.google.com/travel/search?q=Willa+Pod+Zamczyskiem&qs=MhNDZ29JNWMtZDJZckl5ZDVJRUFF&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Gościniec Pod Lilijką',
    href: 'https://www.google.com/travel/search?q=Go%C5%9Bciniec+Pod+Lilijk%C4%85&qs=MhRDZ3NJaWFISmhKemtzS2JzQVJBQg&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYASoHCgU6A1BMTg'
  },
  {
    name: 'Pokoje gościnne Pod Zamkiem',
    href: 'https://www.google.com/travel/search?q=Pokoje+go%C5%9Bcinne+Pod+Zamkiem&qs=MhNDZ29JaGZDcHZwSzZrZG9kRUFF&ts=CAESABoWEhQSEgoHCOoPEAUYHxIHCOoPEAYYAQ'
  },
  {
    name: 'Całorocznik Skała & Apartamenty (Ryczów k. Ogrodzieńca)',
    href: 'https://maps.google.com/?cid=5090080959023549927'
  }
];

export default function Noclegi() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Noclegi
        </h1>

        <p className="text-base-content/70 mb-8">
          Poniżej znajdziesz wybrane miejsca noclegowe w Ogrodzieńcu i okolicy.
          Kliknij nazwę obiektu, aby zobaczyć szczegóły i opinie w mapach
          Google.
        </p>

        <ul className="space-y-3 border-l-2 border-primary pl-4">
          {noclegi.map((item) => (
            <li key={item.name} className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
