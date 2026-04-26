import Carousel from '@/components/carousel/Carousel';

export default function Hero() {
  return (
    <header>
      <div className="hero h-150 border-neutral border-b-3">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center bg-neutral/90 p-5 md:p-15">
          <div className="max-w-xl">
            <h1 className="mb-10 text-2xl lg:text-5xl font-bold">
              Meeting Modelarski Pojazdów Cywilnych
            </h1>
            <div className="sm:divider sm:divider-primary m-5">
              <h2 className="text-md lg:text-2xl font-bold">
                Scale Masters – Ogrodzieniec
              </h2>
            </div>
            <p className="mb-5">
              Coroczne spotkanie modelarzy skupione na redukcyjnych modelach
              pojazdów cywilnych. Wystawy, konkursy i warsztaty pod murami
              jurajskiego zamku w Ogrodzieńcu.
            </p>
          </div>
        </div>
        <Carousel />
      </div>
    </header>
  );
}
