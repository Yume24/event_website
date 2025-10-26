import type { Image as ImageType } from '@/types/types';
import Image from 'next/image';

const images: ImageType[] = [
  {
    src: '/static/images/patrons/eastmodels.jpg',
    width: 2048,
    height: 1146,
    alt: 'logo eastmodels'
  },
  {
    src: '/static/images/patrons/kagero.png',
    width: 200,
    height: 200,
    alt: 'logo kagero'
  },
  {
    src: '/static/images/patrons/minfo.jpg',
    width: 1000,
    height: 1000,
    alt: 'logo minfo'
  },
  {
    src: '/static/images/patrons/spi.jpg',
    width: 500,
    height: 500,
    alt: 'logo spi'
  }
];
export default function Patrons() {
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
