export default function KlasyKonkursowe() {
  const klasy = [
    { code: 'O-1', name: 'Pojazdy cywilne europejskie' },
    { code: 'O-2', name: 'Pojazdy cywilne amerykańskie' },
    { code: 'O-3', name: 'Pojazdy cywilne azjatyckie' },
    {
      code: 'O-4',
      name: 'Formuła 1 – skale mniejsze niż 1/12 (np. 1/20, 1/24, 1/43)'
    },
    { code: 'O-5', name: 'Formuła 1 – skala 1/12 i większe (np. 1/12, 1/8)' },
    { code: 'O-6', name: 'Samochody rajdowe' },
    {
      code: 'O-7',
      name: 'Samochody wyścigowe torowe – Prototypy i klasa GT (Hypercars, LMP1/2/3, LMDh, GT1, GT2, GT3, GTE – wyścigi długodystansowe, Le Mans, IMSA)'
    },
    {
      code: 'O-8',
      name: 'Samochody wyścigowe seryjne modyfikowane – Seria turystyczna i sylwetkowa (DRM, DTM, WTCR, BTCC, NASCAR, Trans-Am)'
    },
    { code: 'O-9', name: 'Drift i Tuning japoński (JDM)' },
    { code: 'O-10', name: 'Dioramy o tematyce sportowej (wyścigi, rajdy)' },
    { code: 'O-11', name: 'Pojazdy tuningowe (z wyłączeniem JDM)' },
    { code: 'O-12', name: 'Motocykle' },
    { code: 'O-13', name: 'Złomki, Wrecks, Rat Style' },
    {
      code: 'O-14',
      name: 'Pojazdy ciężarowe amerykańskie (również australijskie)'
    },
    { code: 'O-15', name: 'Pojazdy ciężarowe europejskie' },
    {
      code: 'O-16',
      name: 'Pojazdy specjalne (służby ratunkowe, techniczne, budowlane, rolnicze)'
    },
    { code: 'O-17', name: 'Pojazdy filmowe i SF' },
    { code: 'O-18', name: 'Pojazdy terenowe i SUV (cywilne)' },
    { code: 'O-19', name: 'Pojazdy vintage / klasyczne (do 1960 r.)' },
    {
      code: 'O-20',
      name: 'Dioramy, warsztaty, garaże (tematyka cywilna i użytkowa)'
    },
    {
      code: 'O-21',
      name: 'Pojazdy Diecast (gotowe/metalowe) – zmodyfikowane, wymagana dokumentacja zmian'
    },
    { code: 'O-22', name: 'Pojazdy cywilne kartonowe – Senior' },
    {
      code: 'O-23',
      name: 'Wszystko inne, co porusza się na kołach, a nie pasuje do powyższych kategorii (Open)'
    },
    { code: 'O-24', name: 'Kategoria Specjalna „Złoty Rycerzyk”' },
    { code: 'O-25', name: 'Pojazdy wyróżnione w poprzedniej edycji „Laureat”' },
    {
      code: 'O-26',
      name: 'Pojazdy cywilne plastikowe wszystkie modele i skale Junior'
    },
    {
      code: 'O-27',
      name: 'Pojazdy cywilne plastikowe wszystkie modele i skale Młodzik'
    },
    { code: 'O-28', name: 'Pojazdy cywilne kartonowe – Junior, Młodzik' }
  ];

  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Klasy konkursowe
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

        <div className="alert alert-soft shadow-md border mt-10 flex-col items-start gap-2">
          <p className="text-sm leading-relaxed">
            Kategorie O-1 do O-25 przeznaczone są wyłącznie dla kategorii
            wiekowej Senior. Młodzicy i Juniorzy zgłaszają swoje modele zależnie
            od materiału: plastik/karton do dedykowanej kategorii od O-26 do
            O-28.
          </p>
          <p className="text-sm leading-relaxed">
            Organizator ma prawo do łączenia kategorii w przypadku niewielkiej
            ilości modeli w danej kategorii.
          </p>
        </div>
      </section>
    </main>
  );
}
