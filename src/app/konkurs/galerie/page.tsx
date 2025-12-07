export default function Galerie() {
  const events = [
    'Meeting Modelarski Ogrodzieniec',
    'Ogólnopolski Konkurs Modeli Redukcyjnych Strzelec',
    'Rybnicki Festiwal Modelarski HOYM MODEL FEST',
    'Inowrocławski Konkurs Modelarski',
    'Międzynarodowy Konkurs Modeli Kartonowych i Plastikowych Radków',
    'XV Bałtycki Festiwal Modelarski',
    'XVII Festiwal Modelarski Jaworzno',
    'XIV Szczeciński Festiwal Modelarski Paprykarz',
    'XXV Konkurs Modeli Redukcyjnych Łambinowice'
  ];

  return (
    <main className="min-h-screen bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Galerie
        </h1>

        <ul className="space-y-2 border-l-2 border-primary pl-4">
          {events.map((event, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-medium">•</span>
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
