const grupy = [
  {
    title: 'Atrakcje w Podzamczu (przy samym Ogrodzieńcu)',
    atrakcje: [
      {
        name: 'Zamek Ogrodzieniec',
        href: 'https://maps.google.com/?cid=14418201119339341711',
        desc: 'Największa i najbardziej rozpoznawalna warownia na Szlaku Orlich Gniazd. Imponujące, doskonale zachowane ruiny wkomponowane w wapienne ostańce. Zamek zyskał dodatkową sławę jako plan filmowy m.in. dla serialu „Wiedźmin” od Netflixa oraz „Zemsty” Andrzeja Wajdy.'
      },
      {
        name: 'Park Ogrodzieniec',
        href: 'https://maps.google.com/?cid=1502826854785044845',
        desc: 'Kompleks rozrywkowy zlokalizowany tuż obok zamku. Znajdziesz tam m.in. Park Miniatur (rekonstrukcje zamków jurajskich w skali 1:25), Tor Saneczkowy, Dom Legend i Strachów oraz Park Doświadczeń Fizycznych. Świetne miejsce dla rodzin z dziećmi.'
      },
      {
        name: 'Gród na Górze Birów',
        href: 'https://maps.google.com/?cid=2676570054435686747',
        desc: 'Zrekonstruowana, drewniana osada królewska stylizowana na średniowieczne grodzisko. Znajduje się niecałe 2 km od zamku na skalistym wzgórzu, z którego roztacza się piękna panorama okolicy. Na miejscu można zobaczyć wystawy archeologiczne.'
      },
      {
        name: 'Sanktuarium Matki Bożej Skałkowej',
        href: 'https://maps.google.com/?cid=16731282377356055081',
        desc: 'Urokliwe miejsce kultu położone na trasie między zamkiem a Górą Birów. Kapliczka została wbudowana bezpośrednio w efektowny jurajski ostaniec skalny.'
      }
    ]
  },
  {
    title: 'Najciekawsze atrakcje w bliskiej okolicy',
    atrakcje: [
      {
        name: 'Zamek Pilcza w Smoleniu',
        href: 'https://maps.google.com/?cid=17591700359313949419',
        desc: 'Malownicze ruiny zamku z XIII/XIV wieku ukryte w gęstym lesie na terenie rezerwatu przyrody (ok. 10 km od Ogrodzieńca). Warto wejść na cylindryczną wieżę, która służy jako doskonały punkt widokowy.'
      },
      {
        name: 'Okiennik Wielki (Piaseczno)',
        href: 'https://maps.google.com/?cid=8960323636799401502',
        desc: 'Jeden z najbardziej znanych i widowiskowych ostańców skalnych na całej Jurze Krakowsko-Częstochowskiej, charakteryzujący się ogromnym, naturalnym oknem skalnym o średnicy ok. 5 metrów. Kultowe miejsce dla wspinaczy i fotografów.'
      }
    ]
  },
  {
    title: 'Atrakcje nieco dalej od Ogrodzieńca',
    atrakcje: [
      {
        name: 'Pustynia Błędowska',
        href: 'https://maps.google.com/?cid=7687765839042211279',
        desc: 'Największy w Polsce i jeden z największych w Europie obszarów lotnych piasków śródlądowych. Nazywana „Polską Saharą”, oferuje niesamowity, surowy krajobraz.'
      },
      {
        name: 'Róża Wiatrów (Pustynia Błędowska)',
        href: 'https://maps.google.com/?cid=16910030851076839171',
        desc: 'Najpopularniejszy punkt widokowy i kompleks drewnianych pomostów spacerowych na Pustyni Błędowskiej (od strony Klucz). To idealne miejsce na rozpoczęcie zwiedzania, z tablicami edukacyjnymi i infrastrukturą wypoczynkową.'
      },
      {
        name: 'Zamek Pieskowa Skała',
        href: 'http://pieskowaskala.eu/',
        desc: 'Jeden z najpiękniejszych i najlepiej zachowanych renesansowych zamków w Polsce, położony na terenie Ojcowskiego Parku Narodowego. Królewska rezydencja na skale robi ogromne wrażenie.'
      },
      {
        name: 'Maczuga Herkulesa',
        href: 'https://maps.google.com/?cid=17727452261589776555',
        desc: 'Kultowa, charakterystyczna formacja skalna stojąca dumnie tuż obok zamku w Pieskowej Skale. To najbardziej rozpoznawalny symbol całej Jury Krakowsko-Częstochowskiej.'
      }
    ]
  }
];

export default function Turystyka() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Turystyka
        </h1>

        <p className="text-base-content/70 mb-10">
          Ogrodzieniec leży w samym sercu Jury Krakowsko-Częstochowskiej. Oto
          atrakcje, które warto zobaczyć podczas pobytu. Kliknij nazwę miejsca,
          aby otworzyć je w mapach Google.
        </p>

        {grupy.map((grupa) => (
          <div key={grupa.title} className="mb-10">
            <h2 className="text-xl font-semibold mb-4">{grupa.title}</h2>
            <ul className="space-y-5 border-l-2 border-primary pl-4">
              {grupa.atrakcje.map((atrakcja) => (
                <li key={atrakcja.name}>
                  <a
                    href={atrakcja.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-hover font-medium text-primary"
                  >
                    {atrakcja.name}
                  </a>
                  <p className="text-sm text-base-content/70 mt-1">
                    {atrakcja.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
