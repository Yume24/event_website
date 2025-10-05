export default function ProgramWydarzenia() {
    return (
        <main className="min-h-screen bg-base-100 text-base-content py-16 px-6 md:px-12">
            <section className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
                    Program wydarzenia
                </h1>

                {/* Friday */}
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">
                        10 kwietnia 2026 r. (piątek)
                    </h2>
                    <ul className="space-y-2 border-l-2 border-primary pl-4">
                        <li className="flex items-start gap-2">
                            <span className="font-medium">17:00–19:00</span>
                            <span>– przyjmowanie modeli (bez wydawania kart)</span>
                        </li>
                    </ul>
                </div>

                {/* Saturday */}
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-2">
                        11 kwietnia 2026 r. (sobota)
                    </h2>
                    <ul className="space-y-2 border-l-2 border-primary pl-4">
                        <li className="flex items-start gap-2">
                            <span className="font-medium">08:00–10:00</span>
                            <span>– przyjmowanie modeli, wydawanie kart startowych</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-medium">10:00</span>
                            <span>– oficjalne otwarcie wystawy</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-medium">10:00–15:00</span>
                            <span>– warsztaty modelarskie dla dzieci</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-medium">10:00–16:00</span>
                            <span>– zwiedzanie ekspozycji, giełda modelarska</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-medium">10:30–14:00</span>
                            <span>– praca komisji sędziowskich</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-medium">16:00</span>
                            <span>– odbiór modeli</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="font-medium">16:30</span>
                            <span>– ogłoszenie wyników konkursu i wręczenie nagród</span>
                        </li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div className="alert alert-soft shadow-md border">
                    <p className="text-sm leading-relaxed">
                        Organizator zastrzega możliwość zmian w programie z odpowiednim
                        wyprzedzeniem za pośrednictwem strony internetowej i mediów
                        społecznościowych.
                    </p>
                </div>
            </section>
        </main>
    );
}
