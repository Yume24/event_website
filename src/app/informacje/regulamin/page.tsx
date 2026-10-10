export default function Regulamin() {
  const categories = [
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
    { code: 'O-24', name: 'Kategoria Specjalna "Złoty Rycerzyk"' },
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
      <article className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-3 border-b-2 border-primary pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Konkurs oraz Wystawa Modelarska
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            REGULAMIN
          </h1>
          <p className="text-lg md:text-xl text-base-content/80 font-medium">
            III Meeting Modelarski Pojazdów Cywilnych – Ogrodzieniec 2027
          </p>
        </header>

        {/* Sekcja I */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>I.</span> Informacje ogólne (cel wystawy i konkursu)
          </h2>
          <div className="border-l-2 border-primary/40 pl-4 space-y-3">
            <h3 className="text-lg font-semibold text-base-content">
              1. Cel wydarzenia
            </h3>
            <p className="leading-relaxed">
              Celem wystawy i konkursu jest popularyzacja modelarstwa
              redukcyjnego, ze szczególnym uwzględnieniem pojazdów cywilnych,
              jako wartościowej formy rozwijania zainteresowań technicznych,
              historycznych i kreatywnych. Wydarzenie promuje modelarstwo jako
              ciekawą formę spędzania wolnego czasu, integrującą miłośników
              modelarstwa z różnych środowisk i pokoleń.
            </p>
          </div>
        </section>

        {/* Sekcja II */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>II.</span> Termin, miejsce oraz program wydarzenia
          </h2>
          <div className="border-l-2 border-primary/40 pl-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-base-content">
                1. Miejsce wydarzenia
              </h3>
              <p className="leading-relaxed">
                Miejsko-Gminny Ośrodek Kultury i Sportu w Ogrodzieńcu
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-base-content">
                2. Termin
              </h3>
              <p className="leading-relaxed font-medium">3 kwietnia 2027 r.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-base-content">
                3. Program wydarzenia
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-base-content/90 mb-2">
                    2 kwietnia 2027 r. (piątek)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-base-content/90">
                    <li>
                      <span className="font-semibold">17:00–19:00</span> –
                      przyjmowanie modeli
                    </li>
                  </ul>
                </div>
                <div>
                  <div>
                    <h4 className="font-medium text-base-content/90 mb-2">
                      3 kwietnia 2027 r. (sobota)
                    </h4>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-base-content/90">
                      <li>
                        <span className="font-semibold">08:30–12:30</span> – przyjmowanie modeli
                      </li>
                      <li>
                        <span className="font-semibold">10:00</span> – oficjalne otwarcie wystawy
                      </li>
                      <li>
                        <span className="font-semibold">10:00–16:00</span> – warsztaty modelarskie dla dzieci
                      </li>
                      <li>
                        <span className="font-semibold">10:00–17:00</span> – zwiedzanie ekspozycji, giełda modelarska
                      </li>
                      <li>
                        <span className="font-semibold">13:00</span> – praca komisji sędziowskich
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-base-content/90 mb-2">
                      4 kwietnia 2027 r. (niedziela)
                    </h4>
                    <ul className="list-disc list-inside space-y-1 pl-2 text-base-content/90">
                      <li>
                        <span className="font-semibold">09:00–13:00</span> – zwiedzanie ekspozycji, giełda modelarska
                      </li>
                      <li>
                        <span className="font-semibold">12:30–13:00</span> – odbiór modeli
                      </li>
                      <li>
                        <span className="font-semibold">13:00</span> – ogłoszenie wyników konkursu i wręczenie nagród
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="alert alert-soft shadow-sm border mt-3 text-sm">
                Organizator zastrzega możliwość zmian w programie z odpowiednim
                wyprzedzeniem za pośrednictwem strony internetowej i mediów
                społecznościowych.
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja III */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>III.</span> Organizator
          </h2>
          <div className="border-l-2 border-primary/40 pl-4">
            <p className="leading-relaxed">
              Grupa Modelarska Scale Masters, Urząd Miasta i Gminy w Ogrodzieńcu,
              Miejsko-Gminny Ośrodek Kultury i Sportu w Ogrodzieńcu
            </p>
          </div>
        </section>

        {/* Sekcja IV */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>IV.</span> Regulamin konkursu
          </h2>

          <div className="border-l-2 border-primary/40 pl-4 space-y-8">
            {/* 1. Zasady ogólne */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-base-content">
                1. Zasady ogólne
              </h3>
              <p className="leading-relaxed">
                Konkurs ma charakter otwarty – mogą w nim uczestniczyć wszystkie
                osoby, które samodzielnie wykonały zgłaszany model.
              </p>
              <div>
                <span className="font-semibold">
                  Kategorie wiekowe uczestników:
                </span>
                <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
                  <li>
                    <span className="font-medium">Młodzik</span> – 0-12 lat
                  </li>
                  <li>
                    <span className="font-medium">Junior</span> – 13-17 lat
                  </li>
                  <li>
                    <span className="font-medium">Senior</span> – 18 i więcej
                    lat
                  </li>
                </ul>
              </div>
              <p className="leading-relaxed text-sm italic">
                Nagrody, które nie zostaną odebrane w trakcie trwania wydarzenia,
                nie będą wysyłane do uczestników w późniejszym terminie.
              </p>
              <div>
                <span className="font-semibold">Zasady uczestnictwa:</span>
                <ul className="list-disc list-inside pl-2 mt-1 space-y-2 text-sm leading-relaxed">
                  <li>
                    Uczestnik może zgłosić maksymalnie 6 modeli w każdej
                    kategorii konkursowej.
                  </li>
                  <li>
                    W danej kategorii konkursowej uczestnik może otrzymać
                    miejsce lub wyróżnienie od komisji sędziowskiej tylko za
                    jeden model (nie dotyczy nagród od sponsorów lub partnerów,
                    którzy sami wybierają model do nagrody).
                  </li>
                  <li>
                    W przypadku wątpliwości co do autorstwa modelu,
                    organizatorzy zastrzegają sobie prawo do przeprowadzenia
                    rozmowy weryfikacyjnej z uczestnikiem.
                  </li>
                  <li>
                    Organizatorzy nie zapewniają ubezpieczenia modeli,
                    uczestników ani osób odwiedzających wydarzenie.
                  </li>
                  <li>
                    Każdy model musi być oznaczony kartą konkursową
                    udostępnioną przez organizatora; jej brak skutkuje
                    dyskwalifikacją modelu.
                  </li>
                  <li>
                    Modele, które zostały wyróżnione w poprzednich edycjach
                    Meetingu Modelarskiego w Ogrodzieńcu, nie mogą brać udziału w
                    regularnych kategoriach konkursowych. Mogą zostać zgłoszone
                    wyłącznie do kategorii specjalnej{' '}
                    <strong>
                      O-25 Pojazdy wyróżnione w poprzedniej edycji „Laureat”
                    </strong>{' '}
                    lub zostać zaprezentowane jako wystawa pozakonkursowa.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Wykluczenia i ekspozycja pozakonkursowa */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-base-content">
                2. Wykluczenia i ekspozycja pozakonkursowa
              </h3>
              <ul className="list-disc list-inside pl-2 space-y-2 leading-relaxed">
                <li>
                  Członkowie komisji sędziowskiej oraz główni organizatorzy
                  (Grupa Scale Masters) nie mogą brać udziału w konkursie głównym
                  ani kategoriach specjalnych jako uczestnicy.
                </li>
                <li>
                  Organizatorzy oraz sędziowie mają prawo do zaprezentowania
                  swoich prac wyłącznie w formie Wystawy Pozakonkursowej
                  (Pokazowej).
                </li>
                <li>
                  Karty startowe modeli sędziów i organizatorów zostaną wyraźnie
                  oznaczone innym kolorem (np. niebieskim).
                </li>
                <li>
                  Modele pozakonkursowe mogą otrzymywać wyłącznie nagrody
                  specjalne i wyróżnienia fundowane przez zewnętrznych
                  sponsorów, partnerów lub inne kluby modelarskie.
                </li>
              </ul>
            </div>

            {/* 3. Rejestracja modeli */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-base-content">
                3. Rejestracja modeli
              </h3>
              <p className="leading-relaxed">
                Modele należy rejestrować wyłącznie online za pośrednictwem
                formularza na stronie:{' '}
                <a
                  href="https://www.meeting-ogrodzieniec.pl"
                  className="link link-primary font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.meeting-ogrodzieniec.pl
                </a>
              </p>
              <div className="alert alert-soft border space-y-1">
                <p className="font-semibold text-sm">
                  Rejestracja trwa do 30 marca 2027 r. do godziny 23:59.
                </p>
                <p className="text-sm">
                  Brak możliwości rejestracji w trakcie trwania wydarzenia.
                </p>
              </div>
              <p className="leading-relaxed">
                Opłata startowa wynosi <strong>20 PLN</strong> lub{' '}
                <strong>5 EURO</strong> od uczestnika (dotyczy tylko seniorów),
                niezależnie od liczby zgłoszonych modeli. Juniorzy i młodzicy
                startują bez opłat.
              </p>
            </div>

            {/* 4. Kategorie konkursowe */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-base-content">
                4. Kategorie konkursowe
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {categories.map((cat) => (
                  <li
                    key={cat.code}
                    className="p-2 rounded bg-base-200/50 flex items-start gap-2 border border-base-content/10"
                  >
                    <span className="font-bold text-primary whitespace-nowrap">
                      {cat.code}:
                    </span>
                    <span>{cat.name}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <div className="alert alert-soft border text-sm">
                  <p>
                    Kategorie O-1 do O-25 przeznaczone są wyłącznie dla
                    kategorii wiekowej Senior. Młodzicy i Juniorzy zgłaszają
                    swoje modele zależnie od materiału: plastik/karton do
                    dedykowanej kategorii od O-26 do O-28.
                  </p>
                </div>
                <div className="alert alert-soft border text-sm">
                  <p>
                    Organizator ma prawo do łączenia kategorii w przypadku
                    niewielkiej ilości modeli w danej kategorii.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Ocena modeli */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-base-content">
                5. Ocena modeli
              </h3>
              <p className="leading-relaxed">
                Komisja sędziowska ocenia modele według zasady „podoba się / nie
                podoba się”, uwzględniając następujące kryteria:
              </p>
              <ul className="list-disc list-inside pl-2 space-y-1 text-sm leading-relaxed">
                <li>staranność wykonania,</li>
                <li>realizm wykonania,</li>
                <li>estetykę malowania i oznaczeń,</li>
                <li>
                  stopień trudności oraz zakres pracy własnej włożonej w
                  wykonanie modelu.
                </li>
              </ul>
              <p className="leading-relaxed text-sm">
                Komisję sędziowską tworzą doświadczeni, profesjonalni modelarze,
                co gwarantuje pełne bezpieczeństwo modeli oraz znajomość procedur
                obchodzenia się z nimi. Sędziowie są uprawnieni do przestawiania
                modeli na stołach wystawowych. Sędziowie oceniają modele bez ich
                dotykania jeżeli nie stoją przymocowane do podstawki. W
                wyjątkowych wypadkach, za zgodą lub w obecności autora, model
                może zostać podniesiony w celu weryfikacji podwozia.
              </p>
              <p className="leading-relaxed text-sm">
                Uczestnik ma możliwość dołączenia dokumentacji fotograficznej
                przedstawiającej proces budowy oraz ewentualną waloryzację
                modelu.
              </p>
              <p className="leading-relaxed text-sm font-medium bg-base-200/60 p-3 rounded border border-base-content/10">
                <span className="text-primary font-bold">Uwaga:</span> W
                przypadku, gdy waloryzacja dotyczy elementów niewidocznych po
                złożeniu modelu (np. wnętrza), uczestnik pragnący zwrócić uwagę
                jury na takie modyfikacje, powinien załączyć dokumentację
                fotograficzną z etapu budowy tych elementów.
              </p>
              <p className="leading-relaxed text-sm italic">
                Wszelkie decyzje komisji sędziowskiej są ostateczne i nie
                podlegają zaskarżeniu.
              </p>
            </div>

            {/* 6. Nagrody */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-base-content">
                6. Nagrody
              </h3>
              <p className="leading-relaxed text-sm">
                W każdej kategorii zostaną przyznane miejsca 1, 2, 3 oraz
                maksymalnie dwa wyróżnienia. Jeżeli w danej kategorii
                wystawiona jest niewielka liczba modeli lub bierze w niej udział
                3 lub mniej modelarzy, komisja sędziowska ma prawo przyznać
                mniejszą liczbę nagród (lub nie przyznawać ich wcale). W
                kategorii „Złoty Rycerzyk” warunkiem przyznania nagrody jest
                udział minimum 3 modelarzy.
              </p>
              <div className="bg-base-200/50 p-4 rounded-lg border border-base-content/10 space-y-2">
                <h4 className="font-bold text-primary">
                  Kategoria O-25 Pojazdy wyróżnione w poprzedniej edycji
                  „Laureat”:
                </h4>
                <p className="text-sm leading-relaxed">
                  Gromadzi modele nagrodzone w poprzednich latach w
                  Ogrodzieńcu. Wszyscy Sędziowie spośród nich wybierają jeden,
                  absolutnie najlepszy model wystawy, który otrzymuje tytuł{' '}
                  <span className="badge badge-primary font-bold">
                    Champion of Champions
                  </span>
                </p>
              </div>
              <p className="leading-relaxed text-sm">
                <span className="font-bold text-primary">Uwaga:</span> Modele
                nagrodzone/wyróżnione przez Organizatora zostaną oznaczone
                odpowiednią pieczątką na karcie startowej podczas pracy komisji.
              </p>
              <p className="leading-relaxed text-sm">
                Organizator, a także partnerzy i sponsorzy wydarzenia,
                zastrzegają sobie prawo do przyznania nagród specjalnych według
                własnego uznania. Wręczenie tych nagród nastąpi podczas
                oficjalnego zakończenia konkursu.
              </p>

              {/* Kategoria specjalna O-24 */}
              <div className="card bg-base-200/70 border border-primary/30 p-5 space-y-3 mt-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="badge badge-primary font-semibold">
                    KATEGORIA SPECJALNA O-24
                  </span>
                  <span className="text-lg font-bold">Złoty Rycerzyk</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Kategoria Specjalna obejmuje motocykle wyścigowe i jest
                  dedykowana replikom jednośladów, których przeznaczeniem jest
                  rywalizacja na torach i trasach całego świata.
                </p>
                <p className="text-sm leading-relaxed">
                  Kategoria obejmuje modele motocykli wyścigowych bez względu na
                  skalę i stopień waloryzacji.
                </p>
                <div>
                  <span className="text-sm font-semibold">
                    Do kategorii kwalifikują się m.in.:
                  </span>
                  <ul className="list-disc list-inside pl-2 mt-1 space-y-1 text-sm">
                    <li>
                      Motocykle z serii MotoGP, 500 cm³, Moto2, Moto3.
                    </li>
                    <li>Maszyny z serii Superbike (WSBK) i Endurance.</li>
                    <li>
                      Legendarnie motocykle z wyścigów drogowych (np. Isle of
                      Man TT).
                    </li>
                    <li>
                      Historyczne i współczesne motocykle crossowe, enduro oraz
                      rajdowe (np. Rajd Dakar).
                    </li>
                  </ul>
                </div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Uwaga:</span> Modele motocykli
                  seryjnych/szosowych bez wyraźnych modyfikacji wyścigowych nie
                  będą klasyfikowane w tej kategorii.
                </p>
                <p className="text-sm leading-relaxed">
                  Każdy uczestnik może zgłosić do tej kategorii maksymalnie dwa
                  modele. Model zgłoszony w kategorii specjalnej nie uczestniczy
                  w konkursie ogólnym.
                </p>
                <p className="text-sm leading-relaxed font-medium">
                  Oceny modeli dokonuje administracja Grupy Modelarskiej Scale
                  Masters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sekcja V */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>V.</span> Regulamin porządkowy
          </h2>
          <div className="border-l-2 border-primary/40 pl-4 space-y-3">
            <p className="leading-relaxed">
              Zwiedzający i uczestnicy zobowiązani są do przestrzegania ogólnych
              zasad bezpieczeństwa obowiązujących na terenie wystawy.
            </p>
            <p className="leading-relaxed">
              Zabronione jest dotykanie modeli, opieranie się o stoły oraz inne
              czynności mogące skutkować ich uszkodzeniem.
            </p>
            <p className="leading-relaxed">
              Dzieci powinny uczestniczyć w wydarzeniu wyłącznie pod opieką
              osoby dorosłej.
            </p>
            <p className="leading-relaxed">
              Organizator nie ponosi odpowiedzialności za rzeczy pozostawione
              bez nadzoru.
            </p>
            <div>
              <span className="font-semibold">
                Organizator ma prawo do odmowy wstępu osobom:
              </span>
              <ul className="list-disc list-inside pl-2 mt-1 space-y-1 text-sm">
                <li>pod wpływem alkoholu lub środków odurzających</li>
                <li>zachowującym się agresywnie</li>
                <li>naruszającym regulamin imprezy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sekcja VI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>VI.</span> Ochrona danych osobowych
          </h2>
          <div className="border-l-2 border-primary/40 pl-4 space-y-4 text-sm leading-relaxed">
            <p>
              Dane uczestników są przetwarzane wyłącznie na potrzeby organizacji
              konkursu zgodnie z RODO.
            </p>
            <p>
              Podanie danych osobowych jest dobrowolne, ale niezbędne do udziału
              w wydarzeniu.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-base-content">
                W związku z przetwarzaniem Państwa danych osobowych informujemy,
                że:
              </p>
              <ul className="list-disc list-inside pl-2 space-y-2 text-base-content/90">
                <li>
                  Administratorem danych osobowych jest Grupa Modelarska Scale
                  Masters.
                </li>
                <li>
                  Państwa dane osobowe są przetwarzane w celach przeprowadzenia,
                  rozstrzygnięcia i rozliczenia III Meetingu Modelarskiego
                  Pojazdów Cywilnych Ogrodzieniec 2027.
                </li>
                <li>
                  Państwa dane osobowe przetwarzamy na podstawie wyrażonej przez
                  Państwa zgody, w związku z wypełnieniem obowiązku prawnego
                  ciążącego na administratorze danych, w tym archiwizacji.
                </li>
                <li>
                  Udział w Festiwalu jest dobrowolny, natomiast niepodanie danych
                  skutkuje brakiem możliwości realizacji celów, dla których są
                  gromadzone.
                </li>
                <li>Przysługuje Państwu prawo do usunięcia danych osobowych.</li>
                <li>
                  Przysługuje Państwu prawo do cofnięcia zgody na przetwarzanie
                  danych osobowych.
                </li>
                <li>
                  Przysługuje Państwu prawo do dostępu do danych osobowych, ich
                  sprostowania lub ograniczenia przetwarzania.
                </li>
                <li>
                  Przysługuje Państwu prawo do wniesienia skargi do organu
                  nadzorczego tj. Prezesa Urzędu Ochrony Danych Osobowych.
                </li>
                <li>
                  Nie przysługuje Państwu prawo do przenoszenia danych
                  osobowych, ponieważ dane nie będą przetwarzane w sposób
                  zautomatyzowany.
                </li>
                <li>
                  Państwa dane osobowe nie będą podlegały zautomatyzowanemu
                  podejmowaniu decyzji oraz nie będą podlegały profilowaniu.
                </li>
                <li>
                  Podane dane osobowe nie będą udostępniane innym podmiotom niż
                  uprawnionym na podstawie nadrzędnych przepisów prawa oraz mogą
                  być udostępnione tylko tym podmiotom, z którymi Administrator
                  Danych zawarł umowę powierzenia przetwarzania danych osobowych
                  zgodnie z art. 28 Rozporządzenia UE.
                </li>
                <li>
                  W przypadku uzyskania tytułu laureata Państwa dane osobowe w
                  zakresie: imię, nazwisko, wizerunek, mogą być podane do
                  publicznej wiadomości.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sekcja VII */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span>VII.</span> Zgoda na wykorzystanie wizerunku i akceptacja
            Regulaminu
          </h2>
          <div className="border-l-2 border-primary/40 pl-4 space-y-3 leading-relaxed">
            <p>
              Zgłoszenie do konkursu jest jednoznaczne z wyrażeniem zgody na
              utrwalenie, przetwarzanie i rozpowszechnianie wizerunku uczestnika
              oraz jego prac we wskazanym zakresie działania i promocji, w tym
              na publiczne odtwarzanie powstałego w trakcie realizacji działań i
              promocji materiału foto, audio lub video, zawierającego wizerunek
              uczestnika i jego prac w celach promocyjnych.
            </p>
            <p className="font-semibold text-primary">
              Zgłoszenie modelu do konkursu jest równoznaczne z akceptacją
              niniejszego regulaminu.
            </p>
            <p className="text-sm italic">
              Organizator nie jest zobowiązany do zapewnienia uczestnikom
              noclegu, wyżywienia ani pokrycia kosztów dojazdu na konkurs.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
