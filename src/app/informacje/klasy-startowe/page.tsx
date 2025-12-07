export default function KlasyKonkursowe() {
  const klasy = [
    { code: 'O-1', name: 'Pojazdy cywilne europejskie' },
    { code: 'O-2', name: 'Pojazdy cywilne amerykańskie' },
    { code: 'O-3', name: 'Pojazdy cywilne azjatyckie' },
    { code: 'O-4', name: 'Pojazdy motorsportowe, rajdowe itp.' },
    { code: 'O-5', name: 'Motocykle' },
    { code: 'O-6', name: 'Pojazdy ciężarowe' },
    { code: 'O-7', name: 'Złomki, Rat Style' },
    {
      code: 'O-8',
      name: 'Pojazdy specjalne, dźwigi, techniczne, rolnicze i służb'
    },
    { code: 'O-9', name: 'Pojazdy filmowe' },
    { code: 'O-10', name: 'Pojazdy terenowe' },
    { code: 'O-11', name: 'Pojazdy vintage' },
    { code: 'O-12', name: 'Pojazdy tuningowe' },
    { code: 'O-13', name: 'Dioramy, warsztaty, garaże' },
    {
      code: 'O-14',
      name: 'Wszystko inne co jeździ na kołach a nie znaleźliście w kategoriach'
    },
    { code: 'O-15', name: 'Kategoria Specjalna „Złoty Rycerzyk”' }
  ];

  return (
    <main className="min-h-screen bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Klasy konkursowe
        </h1>

        <ul className="space-y-2 border-l-2 border-primary pl-4">
          {klasy.map((item) => (
            <li key={item.code} className="flex items-start gap-2">
              <span className="font-medium">{item.code}:</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
