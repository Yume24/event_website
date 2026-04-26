import CarouselDisplay from '@/components/carousel/CarouselDisplay';

const COUNT = 138;

export default function Carousel() {
  const images = Array.from(
    { length: COUNT },
    (_, i) => `/static/images/carousel/slideshow${i + 1}.jpg`
  );
  return <CarouselDisplay images={images} />;
}
