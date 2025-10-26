'use client';
import { useEffect, useState } from 'react';
import CarouselDisplay from '@/components/carousel/CarouselDisplay';
import type { Image } from '@/types/types';

const images: Image[] = [
  { src: '/static/images/carousel/slideshow1.jpg', width: 4080, height: 2296 },
  { src: '/static/images/carousel/slideshow2.jpg', width: 2048, height: 1536 },
  { src: '/static/images/carousel/slideshow3.jpg', width: 2048, height: 1536 },
  { src: '/static/images/carousel/slideshow4.jpg', width: 4080, height: 2296 },
  { src: '/static/images/carousel/slideshow5.jpg', width: 4080, height: 2296 },
  { src: '/static/images/carousel/slideshow6.jpg', width: 2048, height: 1365 },
  { src: '/static/images/carousel/slideshow7.jpg', width: 1620, height: 1080 },
  { src: '/static/images/carousel/slideshow8.jpg', width: 1599, height: 1066 },
  { src: '/static/images/carousel/slideshow9.jpg', width: 2048, height: 1148 }
];
const intervalTime = 10_000;
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const next = () => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prevState) => prevState + 1);
      }
    };

    const interval = setInterval(() => next(), intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return <CarouselDisplay images={images} currentSlide={currentSlide} />;
}
