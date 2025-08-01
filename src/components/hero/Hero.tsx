import Carousel from "@/components/carousel/Carousel";

export default function Hero() {
    return (
        <header>
            <div className="hero h-150 border-neutral border-b-3">
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center bg-neutral/90 p-5 md:p-15">
                    <div className="max-w-xl">
                        <h1 className="mb-10 text-2xl lg:text-5xl font-bold">II Meeting Modelarski Pojazdów Cywilnych
                            Ogrodzieniec 2026</h1>
                        <div className="sm:divider sm:divider-primary m-5"><h2
                            className="text-md lg:text-2xl font-bold">11 kwietnia 2026r. 8:00 - 17:00</h2></div>
                        <p className="mb-5">
                            Celem wystawy i konkursu jest popularyzacja modelarstwa redukcyjnego ze szczególnym
                            uwzględnieniem pojazdów
                            cywilnych jako wartościowej formy rozwijania zainteresowań technicznych, historycznych i
                            kreatywnych.
                        </p>
                        <button className="btn btn-lg btn-primary">Rejestracja</button>
                    </div>
                </div>
                <Carousel/>
            </div>
        </header>
    );
}