'use client'
import { useState, useEffect, } from "react";
import Image from "next/image";
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

type Image = {
    src: string;
    width: number;
    height: number
}
const images: Image[] = [
    {src: "/static/images/carousel/slideshow1.jpg", width: 4080, height: 2296 },
    {src: "/static/images/carousel/slideshow2.jpg", width: 2048, height: 1536 },
    {src: "/static/images/carousel/slideshow3.jpg", width: 2048, height: 1536 },
    {src: "/static/images/carousel/slideshow4.jpg", width: 4080, height: 2296 },
    {src: "/static/images/carousel/slideshow5.jpg", width: 4080, height: 2296 },
    {src: "/static/images/carousel/slideshow6.jpg", width: 2048, height: 1365 },
    {src: "/static/images/carousel/slideshow7.jpg", width: 1620, height: 1080 },
    {src: "/static/images/carousel/slideshow8.jpg", width: 1599, height: 1066 },
    {src: "/static/images/carousel/slideshow9.jpg", width: 2048, height: 1148 },
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

        const interval = setInterval(() => next(), 3000);
        return () => {
            clearInterval(interval);
        }
    }, [currentSlide]);

    return (
        <div className="relative w-vw h-full overflow-hidden -z-10">
            <AnimatePresence mode="popLayout">
                <motion.div
                className="w-full h-full"
                initial={{ x: 1725, }}
                animate={{ x: 0, }}
                exit={{ x: -1725, }}
                key={images[currentSlide].src}
                transition={{ duration: 1 }}
                >
                    <Image
                    src={images[currentSlide].src}
                    width={images[currentSlide].width}
                    height={images[currentSlide].height}
                    className="object-cover object-center w-dvw h-full" alt="slideshow image" priority={true} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}