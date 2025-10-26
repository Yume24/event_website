import type { Image as ImageType } from '@/types/types';
import Image from 'next/image';

const images: ImageType[] = [
  {
    src: '/static/images/sponsors/mojehobby.jpg',
    width: 400,
    height: 440,
    alt: 'logo moje hobby'
  },
  {
    src: '/static/images/sponsors/paint-forge-napis.bmp',
    width: 1706,
    height: 2565,
    alt: 'logo paint forge'
  },
  {
    src: '/static/images/sponsors/umig-ogrodzieniec.jpg',
    width: 496,
    height: 572,
    alt: 'logo UMIG Ogrodzieniec'
  },
  {
    src: '/static/images/sponsors/yamamoto.png',
    width: 549,
    height: 595,
    alt: 'logo yamamoto'
  },
  {
    src: '/static/images/sponsors/acsm.jpg',
    width: 960,
    height: 720,
    alt: 'logo ACSM'
  },
  {
    src: '/static/images/sponsors/banzai.jpg',
    width: 1920,
    height: 1920,
    alt: 'logo Banzai'
  },
  {
    src: '/static/images/sponsors/DetalHobby.jpg',
    width: 1200,
    height: 1200,
    alt: 'logo DetalHobby'
  },
  {
    src: '/static/images/sponsors/fundacja-bonera.jpg',
    width: 820,
    height: 820,
    alt: 'logo Fundacja Bonera'
  },
  {
    src: '/static/images/sponsors/logo_1_big.png',
    width: 775,
    height: 300,
    alt: 'logo system'
  },
  {
    src: '/static/images/sponsors/maxhobby.jpg',
    width: 509,
    height: 509,
    alt: 'logo MaxHobby'
  }
];
export default function Sponsors() {
  return (
    <div className="my-10 flex justify-center items-center gap-20 flex-wrap">
      {images.map((image) => (
        <Image
          key={image.src}
          className="w-40"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt || 'logo'}
        />
      ))}
    </div>
  );
}
