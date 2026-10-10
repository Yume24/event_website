'use client';

import { useLocale } from 'gt-next';

const getTourismGroups = (isEn: boolean) => [
  {
    title: isEn
      ? 'Attractions in Podzamcze (right next to Ogrodzieniec)'
      : 'Atrakcje w Podzamczu (przy samym Ogrodzieńcu)',
    atrakcje: [
      {
        name: isEn ? 'Ogrodzieniec Castle' : 'Zamek Ogrodzieniec',
        href: 'https://maps.google.com/?cid=14418201119339341711',
        desc: isEn
          ? 'The largest and most recognized stronghold on the Trail of the Eagles\' Nests. Impressive, beautifully preserved ruins built into limestone rocks. The castle was also used as a film set for Netflix\'s "The Witcher" and Andrzej Wajda\'s "The Revenge".'
          : 'Największa i najbardziej rozpoznawalna warownia na Szlaku Orlich Gniazd. Imponujące, doskonale zachowane ruiny wkomponowane w wapienne ostańce. Zamek zyskał dodatkową sławę jako plan filmowy m.in. dla serialu „Wiedźmin” od Netflixa oraz „Zemsty” Andrzeja Wajdy.'
      },
      {
        name: isEn ? 'Ogrodzieniec Park' : 'Park Ogrodzieniec',
        href: 'https://maps.google.com/?cid=1502826854785044845',
        desc: isEn
          ? 'Entertainment complex located right next to the castle. Features Miniature Park (1:25 scale reconstructions of Jura castles), Toboggan Track, House of Legends and Fears, and Physics Experience Park. Great for families.'
          : 'Kompleks rozrywkowy zlokalizowany tuż obok zamku. Znajdziesz tam m.in. Park Miniatur (rekonstrukcje zamków jurajskich w skali 1:25), Tor Saneczkowy, Dom Legend i Strachów oraz Park Doświadczeń Fizycznych. Świetne miejsce dla rodzin z dziećmi.'
      },
      {
        name: isEn ? 'Birów Mountain Stronghold' : 'Gród na Górze Birów',
        href: 'https://maps.google.com/?cid=2676570054435686747',
        desc: isEn
          ? 'Reconstructed wooden royal settlement styled as a medieval hill fort, less than 2 km from the castle on a rocky hill with panoramic views. Features archaeological exhibits.'
          : 'Zrekonstruowana, drewniana osada królewska stylizowana na średniowieczne grodzisko. Znajduje się niecałe 2 km od zamku na skalistym wzgórzu, z którego roztacza się piękna panorama okolicy. Na miejscu można zobaczyć wystawy archeologiczne.'
      },
      {
        name: isEn
          ? 'Sanctuary of Our Lady of Skałkowa'
          : 'Sanktuarium Matki Bożej Skałkowej',
        href: 'https://maps.google.com/?cid=16731282377356055081',
        desc: isEn
          ? 'Charming place of worship on the trail between the castle and Mount Birów. The chapel was built directly into a striking limestone monolith.'
          : 'Urokliwe miejsce kultu położone na trasie między zamkiem a Górą Birów. Kapliczka została wbudowana bezpośrednio w efektowny jurajski ostaniec skalny.'
      }
    ]
  },
  {
    title: isEn
      ? 'Top attractions in the close vicinity'
      : 'Najciekawsze atrakcje w bliskiej okolicy',
    atrakcje: [
      {
        name: isEn ? 'Pilcza Castle in Smoleń' : 'Zamek Pilcza w Smoleniu',
        href: 'https://maps.google.com/?cid=17591700359313949419',
        desc: isEn
          ? 'Picturesque ruins of a 13th/14th century castle hidden in a dense nature reserve forest (approx. 10 km from Ogrodzieniec). Climb the cylindrical tower for great views.'
          : 'Malownicze ruiny zamku z XIII/XIV wieku ukryte w gęstym lesie na terenie rezerwatu przyrody (ok. 10 km od Ogrodzieńca). Warto wejść na cylindryczną wieżę, która służy jako doskonały punkt widokowy.'
      },
      {
        name: isEn
          ? 'Okiennik Wielki (Piaseczno)'
          : 'Okiennik Wielki (Piaseczno)',
        href: 'https://maps.google.com/?cid=8960323636799401502',
        desc: isEn
          ? 'One of the most famous and scenic limestone rocks in the Polish Jura, with a natural rock window approx. 5 meters wide. Popular with climbers and photographers.'
          : 'Jeden z najbardziej znanych i widowiskowych ostańców skalnych na całej Jurze Krakowsko-Częstochowskiej, charakteryzujący się ogromnym, naturalnym oknem skalnym o średnicy ok. 5 metrów. Kultowe miejsce dla wspinaczy i fotografów.'
      }
    ]
  },
  {
    title: isEn
      ? 'Attractions slightly further from Ogrodzieniec'
      : 'Atrakcje nieco dalej od Ogrodzieńca',
    atrakcje: [
      {
        name: isEn ? 'Błędów Desert' : 'Pustynia Błędowska',
        href: 'https://maps.google.com/?cid=7687765839042211279',
        desc: isEn
          ? 'Poland\'s largest and one of Europe\'s largest areas of inland shifting sands, known as the "Polish Sahara", with a unique austere landscape.'
          : 'Największy w Polsce i jeden z największych w Europie obszarów lotnych piasków śródlądowych. Nazywana „Polską Saharą”, oferuje niesamowity, surowy krajobraz.'
      },
      {
        name: isEn
          ? 'Wind Rose (Błędów Desert)'
          : 'Róża Wiatrów (Pustynia Błędowska)',
        href: 'https://maps.google.com/?cid=16910030851076839171',
        desc: isEn
          ? 'The most popular viewpoint and wooden boardwalk complex on the Błędów Desert (Klucze side) with educational boards and rest areas.'
          : 'Najpopularniejszy punkt widokowy i kompleks drewnianych pomostów spacerowych na Pustyni Błędowskiej (od strony Klucz). To idealne miejsce na rozpoczęcie zwiedzania, z tablicami edukacyjnymi i infrastrukturą wypoczynkową.'
      },
      {
        name: isEn ? 'Pieskowa Skała Castle' : 'Zamek Pieskowa Skała',
        href: 'http://pieskowaskala.eu/',
        desc: isEn
          ? 'One of Poland\'s most beautiful and best-preserved Renaissance castles, located in Ojców National Park atop a scenic cliff.'
          : 'Jeden z najpiękniejszych i najlepiej zachowanych renesansowych zamków w Polsce, położony na terenie Ojcowskiego Parku Narodowego. Królewska rezydencja na skale robi ogromne wrażenie.'
      },
      {
        name: isEn ? 'Club of Hercules' : 'Maczuga Herkulesa',
        href: 'https://maps.google.com/?cid=17727452261589776555',
        desc: isEn
          ? 'Iconic limestone stack standing beside Pieskowa Skała Castle, the most recognizable symbol of the Polish Jura.'
          : 'Kultowa, charakterystyczna formacja skalna stojąca dumnie tuż obok zamku w Pieskowej Skale. To najbardziej rozpoznawalny symbol całej Jury Krakowsko-Częstochowskiej.'
      }
    ]
  }
];

export default function Turystyka() {
  const locale = useLocale();
  const isEn = locale === 'en';
  const grupy = getTourismGroups(isEn);

  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          {isEn ? 'Tourism' : 'Turystyka'}
        </h1>

        <p className="text-base-content/70 mb-10">
          {isEn
            ? 'Ogrodzieniec lies in the heart of the Kraków-Częstochowa Jurassic Highland. Here are the top attractions worth visiting. Click any name to open in Google Maps.'
            : 'Ogrodzieniec leży w samym sercu Jury Krakowsko-Częstochowskiej. Oto atrakcje, które warto zobaczyć podczas pobytu. Kliknij nazwę miejsca, aby otworzyć je w mapach Google.'}
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
