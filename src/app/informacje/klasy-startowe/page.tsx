'use client';

import { useLocale } from 'gt-next';

export default function KlasyKonkursowe() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const klasy = [
    {
      code: 'O-1',
      name: isEn ? 'European civilian vehicles' : 'Pojazdy cywilne europejskie'
    },
    {
      code: 'O-2',
      name: isEn ? 'American civilian vehicles' : 'Pojazdy cywilne amerykańskie'
    },
    {
      code: 'O-3',
      name: isEn ? 'Asian civilian vehicles' : 'Pojazdy cywilne azjatyckie'
    },
    {
      code: 'O-4',
      name: isEn
        ? 'Formula 1 – scales smaller than 1/12 (e.g. 1/20, 1/24, 1/43)'
        : 'Formuła 1 – skale mniejsze niż 1/12 (np. 1/20, 1/24, 1/43)'
    },
    {
      code: 'O-5',
      name: isEn
        ? 'Formula 1 – scale 1/12 and larger (e.g. 1/12, 1/8)'
        : 'Formuła 1 – skala 1/12 i większe (np. 1/12, 1/8)'
    },
    {
      code: 'O-6',
      name: isEn ? 'Rally cars' : 'Samochody rajdowe'
    },
    {
      code: 'O-7',
      name: isEn
        ? 'Track racing cars – Prototypes and GT class (Hypercars, LMP1/2/3, LMDh, GT1, GT2, GT3, GTE – endurance racing, Le Mans, IMSA)'
        : 'Samochody wyścigowe torowe – Prototypy i klasa GT (Hypercars, LMP1/2/3, LMDh, GT1, GT2, GT3, GTE – wyścigi długodystansowe, Le Mans, IMSA)'
    },
    {
      code: 'O-8',
      name: isEn
        ? 'Modified production race cars – Touring and silhouette series (DRM, DTM, WTCR, BTCC, NASCAR, Trans-Am)'
        : 'Samochody wyścigowe seryjne modyfikowane – Seria turystyczna i sylwetkowa (DRM, DTM, WTCR, BTCC, NASCAR, Trans-Am)'
    },
    {
      code: 'O-9',
      name: isEn ? 'Japanese Drift and Tuning (JDM)' : 'Drift i Tuning japoński (JDM)'
    },
    {
      code: 'O-10',
      name: isEn ? 'Sports dioramas (racing, rallies)' : 'Dioramy o tematyce sportowej (wyścigi, rajdy)'
    },
    {
      code: 'O-11',
      name: isEn ? 'Tuning vehicles (excluding JDM)' : 'Pojazdy tuningowe (z wyłączeniem JDM)'
    },
    {
      code: 'O-12',
      name: isEn ? 'Motorcycles' : 'Motocykle'
    },
    {
      code: 'O-13',
      name: isEn ? 'Wrecks, Rat Style' : 'Złomki, Wrecks, Rat Style'
    },
    {
      code: 'O-14',
      name: isEn ? 'American trucks (including Australian)' : 'Pojazdy ciężarowe amerykańskie (również australijskie)'
    },
    {
      code: 'O-15',
      name: isEn ? 'European trucks' : 'Pojazdy ciężarowe europejskie'
    },
    {
      code: 'O-16',
      name: isEn ? 'Special vehicles (emergency, technical, construction, agricultural)' : 'Pojazdy specjalne (służby ratunkowe, techniczne, budowlane, rolnicze)'
    },
    {
      code: 'O-17',
      name: isEn ? 'Movie and Sci-Fi vehicles' : 'Pojazdy filmowe i SF'
    },
    {
      code: 'O-18',
      name: isEn ? 'Off-road and SUV vehicles (civilian)' : 'Pojazdy terenowe i SUV (cywilne)'
    },
    {
      code: 'O-19',
      name: isEn ? 'Vintage / classic vehicles (up to 1960)' : 'Pojazdy vintage / klasyczne (do 1960 r.)'
    },
    {
      code: 'O-20',
      name: isEn ? 'Dioramas, workshops, garages (civilian and utility)' : 'Dioramy, warsztaty, garaże (tematyka cywilna i użytkowa)'
    },
    {
      code: 'O-21',
      name: isEn ? 'Diecast vehicles (ready/metal) – modified, changes documentation required' : 'Pojazdy Diecast (gotowe/metalowe) – zmodyfikowane, wymagana dokumentacja zmian'
    },
    {
      code: 'O-22',
      name: isEn ? 'Civilian card models – Senior' : 'Pojazdy cywilne kartonowe – Senior'
    },
    {
      code: 'O-23',
      name: isEn ? 'Everything else with wheels that does not fit into above categories (Open)' : 'Wszystko inne, co porusza się na kołach, a nie pasuje do powyższych kategorii (Open)'
    },
    {
      code: 'O-24',
      name: isEn ? 'Special Category "Golden Knight"' : 'Kategoria Specjalna „Złoty Rycerzyk”'
    },
    {
      code: 'O-25',
      name: isEn ? 'Vehicles awarded in previous edition "Laureate"' : 'Pojazdy wyróżnione w poprzedniej edycji „Laureat”'
    },
    {
      code: 'O-26',
      name: isEn ? 'Civilian plastic vehicles all models and scales Junior' : 'Pojazdy cywilne plastikowe wszystkie modele i skale Junior'
    },
    {
      code: 'O-27',
      name: isEn ? 'Civilian plastic vehicles all models and scales Youth' : 'Pojazdy cywilne plastikowe wszystkie modele i skale Młodzik'
    },
    {
      code: 'O-28',
      name: isEn ? 'Civilian card models – Junior, Youth' : 'Pojazdy cywilne kartonowe – Junior, Młodzik'
    }
  ];

  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          {isEn ? 'Competition Classes' : 'Klasy konkursowe'}
        </h1>

        <ul className="space-y-2 border-l-2 border-primary pl-4">
          {klasy.map((item) => (
            <li key={item.code} className="flex items-start gap-2">
              <span className="font-medium whitespace-nowrap">
                {item.code}:
              </span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-4">
          <div className="alert alert-soft shadow-md border">
            <p className="text-sm leading-relaxed">
              {isEn
                ? 'Categories O-1 to O-25 are intended exclusively for the Senior age category. Youth and Juniors enter their models depending on the material: plastic/cardboard into dedicated categories from O-26 to O-28.'
                : 'Kategorie O-1 do O-25 przeznaczone są wyłącznie dla kategorii wiekowej Senior. Młodzicy i Juniorzy zgłaszają swoje modele zależnie od materiału: plastik/karton do dedykowanej kategorii od O-26 do O-28.'}
            </p>
          </div>
          <div className="alert alert-soft shadow-md border">
            <p className="text-sm leading-relaxed">
              {isEn
                ? 'The organizer reserves the right to combine categories in case of a small number of entries in a given category.'
                : 'Organizator ma prawo do łączenia kategorii w przypadku niewielkiej ilości modeli w danej kategorii.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
