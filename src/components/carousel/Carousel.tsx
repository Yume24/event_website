'use client'
import { useState, useEffect, } from "react";
import Image from "next/image";

type Image = {
    src: string;
    width: number;
    height: number
}
const images: Image[] = [
    {src: "/static/images/carousel/slideshow1.jpg", width: 4080, height: 2296 },
    {src: "/static/images/carousel/slideshow2.jpg", width: 4080, height: 2296 },
    {src: "/static/images/carousel/slideshow3.jpg", width: 4080, height: 2296 },
];

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const next = () => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            }
            else {
                setCurrentSlide((prevState) => prevState + 1);
            }
        };

        const interval = setInterval(() => next(), 10000);
        return () => {
            clearInterval(interval);
        }
    }, [currentSlide]);

    return (
        <div className="carousel h-full">
            <div className="carousel-item">
                <Image width={images[currentSlide].width} height={images[currentSlide].height} src={images[currentSlide].src}
                       className="object-cover object-center w-dvw" alt="slideshow image" priority={true} />
            </div>
        </div>
    );
}