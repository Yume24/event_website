import Hero from '@/components/hero/Hero';
import Sponsors from '@/components/sponsors/Sponsors';
import Patrons from '@/components/sponsors/Patrons';

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="mx-32 py-16 space-y-6 text-base-content">
          <p>
            Nasza inicjatywa narodziła się z autentycznej pasji do motoryzacji w skali mikro.
            Wszystko zaczęło się w 2025 roku – to wtedy zorganizowaliśmy pierwszą edycję, która
            miała formę uroczystej wystawy połączonej ze zlotem klasyków w skali 1:1. Już wtedy
            pod murami ogrodzienieckiego zamku pojawili się modelarze z najdalszych zakątków
            Polski, by wesprzeć nasz start.
          </p>
          <p>
            Sukces inauguracyjnej wystawy dał nam jasny sygnał: czas wrzucić wyższy bieg.
            W 2026 roku odbyła się pierwsza pełnoprawna edycja konkursowa, która przyciągnęła
            twórców specjalizujących się w idealnym odwzorowaniu rzeczywistości. Nasz konkurs
            od początku stawia na modele redukcyjne z plastiku i materiałów pokrewnych, dbając
            o najwyższy poziom detali.
          </p>
          <p>
            Druga edycja Meetingu to wydarzenie otwarte dla wszystkich, nie tylko dla
            profesjonalistów. Przygotowaliśmy bogaty program towarzyszący:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>Giełda Modelarska:</strong> Raj dla kolekcjonerów i hobbystów. To tutaj
              znajdziesz rzadkie zestawy, specjalistyczne narzędzia, farby oraz akcesoria, które
              pozwolą Ci zacząć przygodę z tym hobby.
            </li>
            <li>
              <strong>Warsztaty dla Dzieci i Młodzieży:</strong> Pod okiem doświadczonych
              instruktorów najmłodsi mogli spróbować swoich sił w montażu pierwszych
              miniaturowych konstrukcji. To świetna okazja, by „złapać bakcyla" i rozwinąć
              zdolności manualne oraz cierpliwość.
            </li>
          </ul>
          <p>
            Obecnie przygotowujemy trzecią edycję Meetingu – to nie tylko kontynuacja tradycji,
            ale przede wszystkim rozwój. Rozszerzamy formułę o nowe podkategorie i nagrody
            specjalne, by uczynić ją jeszcze bardziej atrakcyjną zarówno dla doświadczonych
            modelarzy, jak i zwiedzających.
          </p>
          <p className="italic border-l-4 border-primary pl-4">
            <strong>Nasza misja:</strong> W Ogrodzieńcu pasja spotyka się z kunsztem. To tutaj
            lśniący lakier, precyzyjne detale i wspólna idea modelarstwa łączą ludzi z całej
            Polski w cieniu jurajskich skał.
          </p>
        </section>
        <div className="divider divider-neutral opacity-50 w-1/2 m-auto"></div>
        <section>
          <h2 className="text-4xl m-10 text-center">Nasi Sponsorzy:</h2>
          <Sponsors />
        </section>
        <div className="divider divider-neutral opacity-50 w-1/2 m-auto"></div>
        <section>
          <h2 className="text-4xl m-10 text-center">Patroni Medialni:</h2>
          <Patrons />
        </section>
      </main>
    </>
  );
}
