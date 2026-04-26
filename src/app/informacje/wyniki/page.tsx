type Result = { name: string; model: string; city: string; country: string };
type Category = { title: string; results: Result[] };

const SENIOR: Category[] = [
  {
    title: 'O-1: Pojazdy cywilne europejskie',
    results: [
      { name: 'Piotr Chyziak', model: 'Ferrari SP2', city: 'Warszawa', country: 'PL' },
      { name: 'Arek Krzysiak', model: 'Ferrari 328 GTB', city: 'Nowy Dwór Mazowiecki', country: 'PL' },
      { name: 'Piotr Górski', model: 'BMW 318i', city: 'Łódź', country: 'PL' },
      { name: 'Árpád Vereb', model: 'Ferrari SF90', city: 'Abasár', country: 'HUN' },
      { name: 'Wojtek Sułek', model: '911 GT3 RS trackday edition', city: 'Katowice', country: 'PL' },
      { name: 'Kamil Kawa', model: 'Porsche 911 GT3 RS (992)', city: 'Tarnów', country: 'PL' },
      { name: 'Mihály Dobrai', model: 'Mclaren Senna', city: 'Mosonmagyaróvár', country: 'HUN' }
    ]
  },
  {
    title: 'O-2: Pojazdy cywilne amerykańskie',
    results: [
      { name: 'Marcin Trojanowski', model: 'Ford Mustang GT4', city: 'Warszawa', country: 'PL' },
      { name: 'Arek Krzysiak', model: '1968 Chevrolet El Camino SS', city: 'Nowy Dwór Mazowiecki', country: 'PL' },
      { name: 'Bartłomiej Podwysocki', model: 'Ford Mustang Fastback', city: 'Łódź', country: 'PL' }
    ]
  },
  {
    title: 'O-3: Pojazdy cywilne azjatyckie',
    results: [
      { name: 'Sławek Radek', model: 'Toyota Supra mk5', city: 'Klucze', country: 'PL' },
      { name: 'Łukasz Hajnrych', model: 'Honda Civic Mugen RR', city: 'Sieradz', country: 'PL' },
      { name: 'Tomasz Szulc', model: 'Mazda Cosmo', city: 'Legionowo', country: 'PL' },
      { name: 'Mihály Dobrai', model: 'Subaru BRZ ZD8', city: 'Mosomagyaróvár', country: 'HUN' },
      { name: 'Mihály Dobrai', model: 'Honda SNX', city: 'Mosomagyaróvár', country: 'HUN' },
      { name: 'Piotr Górski', model: 'Lexus IS350', city: 'Łódź', country: 'PL' },
      { name: 'Marcin Trojanowski', model: 'Toyota Supra Mk.4', city: 'Warszawa', country: 'PL' }
    ]
  },
  {
    title: 'O-4: Pojazdy motorsportowe rajdowe itp.',
    results: [
      { name: 'Hubert Pawlikowski', model: 'Honda RA272', city: 'Warszawa', country: 'PL' },
      { name: 'Tomasz Zamiara', model: 'McLaren MP4/6', city: 'Witkowo', country: 'PL' },
      { name: 'Sławomir Mulka', model: 'Renault Megane MAXI', city: 'IPMS Świdnica', country: 'PL' },
      { name: 'Marcin Trojanowski', model: 'BMW 2002 Tii', city: 'Warszawa', country: 'PL' },
      { name: 'Sławomir Grębowiec', model: 'Mitsubishi Lancer GSR Evolution III', city: 'Tarnobrzeg', country: 'PL' },
      { name: 'Árpád Vereb', model: 'Lanicia 037', city: 'Abasár', country: 'HUN' },
      { name: 'Piotr Łępa', model: 'Williams FW14b', city: 'Wrocław', country: 'PL' },
      { name: 'Bartłomiej Podwysocki', model: 'Maclaren Mercedes Mp4/13', city: 'Łódź', country: 'PL' },
      { name: 'Piotr Łępa', model: 'Williams FW16', city: 'Wrocław', country: 'PL' },
      { name: 'Zbigniew Kłos', model: "Subaru Impreza WRC Monte Carlo '05", city: 'Łódź / Scale Masters', country: 'PL' },
      { name: 'Jiří Ohlídal', model: 'Lotus 77 GP Japan 1976', city: 'Prostějov', country: 'CZE' },
      { name: 'Michał Majewski', model: 'Nissan GT-R BNR32 Taisan STP', city: 'Warszawa', country: 'PL' },
      { name: 'Piotr Chyziak', model: 'Porsche 911 GT3R', city: 'Warszawa', country: 'PL' }
    ]
  },
  {
    title: 'O-5: Motocykle',
    results: [
      { name: 'Sławomir Grębowiec', model: 'Honda RC213V', city: 'Tarnobrzeg', country: 'PL' },
      { name: 'Wojciech Bryński', model: 'BMW HP4 RACE', city: 'Bytom', country: 'PL' },
      { name: 'Grzegorz Kilian', model: 'Yamaha YZF-R1M', city: 'Tarnobrzeg', country: 'PL' }
    ]
  },
  {
    title: 'O-6: Pojazdy ciężarowe',
    results: [
      { name: 'Jiří Hübner', model: 'Mack AC', city: 'Modelkit Kladno', country: 'CZE' },
      { name: 'Marcin Durman', model: 'Bedford OSBT', city: 'Biskupice', country: 'PL' },
      { name: 'Jan Sklenička', model: 'Scania 143M 500', city: 'Modelkit Kladno', country: 'CZE' }
    ]
  },
  {
    title: 'O-7: Złomki, Rat Style',
    results: [
      { name: 'Łukasz Jarosiński', model: 'Mercedes Benz 170 V Lieferwagen', city: 'Częstochowa', country: 'PL' },
      { name: 'Wojciech Bryński', model: 'Fiat 595 Abarth "Rust style"', city: 'Bytom', country: 'PL' },
      { name: 'Rafał Grabałowski', model: 'Volkswagen T2', city: 'Częstochowa', country: 'PL' },
      { name: 'Tomasz Szulc', model: 'Porsche 911 Carrera 3.2 Targa', city: 'Legionowo', country: 'PL' }
    ]
  },
  {
    title: 'O-8: Pojazdy specjalne, dźwigi, techniczne, rolnicze i służb',
    results: [
      { name: 'Sławomir Grębowiec', model: 'Man Tgm', city: 'Tarnobrzeg', country: 'PL' },
      { name: 'Mateusz Lasek', model: 'Bizon Z056', city: 'Niepołomice', country: 'PL' }
    ]
  },
  {
    title: 'O-9: Pojazdy filmowe',
    results: [
      { name: 'Arek Krzysiak', model: 'De Lorean Back To The Future', city: 'Nowy Dwór Mazowiecki', country: 'PL' },
      { name: 'Mirosław Matuszak', model: 'VW Beetle "Herbie"', city: 'Poznań', country: 'PL' },
      { name: 'Robert Misztal', model: 'FIAT 125P DeAgostini 1:8', city: 'Trzebinia', country: 'PL' }
    ]
  },
  {
    title: 'O-10: Pojazdy terenowe',
    results: [
      { name: 'Piotr Szweda', model: 'Toyota Hilux', city: 'Czechowice-Dziedzice', country: 'PL' },
      { name: 'Jiří Hübner', model: 'Jeep', city: 'Modelkit Kladno', country: 'CZE' },
      { name: 'Bartłomiej Podwysocki', model: 'Kamaz 43509', city: 'Łódź', country: 'PL' }
    ]
  },
  {
    title: 'O-11: Pojazdy vintage',
    results: [
      { name: 'Marcin Trojanowski', model: 'Mercedes 300 SL Speedster', city: 'Warszawa', country: 'PL' },
      { name: 'Bartłomiej Podwysocki', model: 'Alfa Romeo GTA', city: 'Łódź', country: 'PL' },
      { name: 'Piotr Chyziak', model: 'Ferrari 275 Spyder N.A.R.T.', city: 'Warszawa', country: 'PL' }
    ]
  },
  {
    title: 'O-12: Pojazdy tuningowe i modyfikowane',
    results: [
      { name: 'Sławek Radek', model: 'ToyoTank', city: 'Klucze', country: 'PL' },
      { name: 'Łukasz Hajnrych', model: 'Mazda RX-7 VeilSide D1-GT', city: 'Sieradz', country: 'PL' },
      { name: 'Arek Krzysiak', model: 'Nissan Silvia S15', city: 'Nowy Dwór Mazowiecki', country: 'PL' }
    ]
  },
  {
    title: 'O-13: Dioramy, warsztaty, garaże',
    results: [
      { name: 'Marcin Trojanowski', model: 'Mercedes 300 SL', city: 'Warszawa', country: 'PL' }
    ]
  },
  {
    title: 'O-15: Kategoria Specjalna „Złoty Rycerzyk"',
    results: [
      { name: 'Sławomir Mulka', model: 'Toyota Celica ST185', city: 'IPMS Świdnica', country: 'PL' }
    ]
  }
];

const JUNIOR: { name: string; country: string }[] = [
  { name: 'Marcel Maniszewski', country: 'PL' },
  { name: 'Antoni Jodłowski', country: 'PL' },
  { name: 'Jędrzej Marzec', country: 'PL' },
  { name: 'Sebastian Woś', country: 'PL' },
  { name: 'Leon Łapiński', country: 'PL' }
];

export default function Wyniki() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Wyniki – II Meeting Modelarski Ogrodzieniec 2026
        </h1>

        <h2 className="text-2xl font-bold mb-6">SENIOR – wyróżnienia</h2>

        {SENIOR.map((cat) => (
          <div key={cat.title} className="mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2 border-l-4 border-primary pl-3">
              {cat.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="table table-sm w-full">
                <thead>
                  <tr>
                    <th>Imię i nazwisko</th>
                    <th>Model</th>
                    <th>Miasto</th>
                    <th>Kraj</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.results.map((r, i) => (
                    <tr key={i} className="hover">
                      <td>{r.name}</td>
                      <td>{r.model}</td>
                      <td>{r.city}</td>
                      <td>{r.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="divider divider-neutral opacity-50 my-8"></div>

        <h2 className="text-2xl font-bold mb-6">JUNIOR – wyróżnienia</h2>
        <div className="overflow-x-auto">
          <table className="table table-sm w-full max-w-sm">
            <thead>
              <tr>
                <th>Imię i nazwisko</th>
                <th>Kraj</th>
              </tr>
            </thead>
            <tbody>
              {JUNIOR.map((r, i) => (
                <tr key={i} className="hover">
                  <td>{r.name}</td>
                  <td>{r.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
