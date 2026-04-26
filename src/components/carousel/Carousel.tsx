import fs from 'fs';
import path from 'path';
import CarouselDisplay from '@/components/carousel/CarouselDisplay';

export default function Carousel() {
  const dir = path.join(process.cwd(), 'public/static/images/carousel');
  const images = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? '0');
      const numB = parseInt(b.match(/\d+/)?.[0] ?? '0');
      return numA - numB;
    })
    .map((f) => `/static/images/carousel/${f}`);

  return <CarouselDisplay images={images} />;
}
