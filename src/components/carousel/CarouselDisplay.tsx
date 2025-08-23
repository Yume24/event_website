import type {Image as ImageType} from "@/types/types";
import Image from "next/image";

export default function CarouselDisplay({images, currentSlide}: { images: ImageType[], currentSlide: number }) {
    return (<div className="overflow-hidden h-full relative -z-1">
        <div className="flex flex-row h-full transition-transform duration-1000 ease-in-out"
             style={{transform: `translateX(-${currentSlide * 100}%)`}}>
            {images.map((image, index) => (
                <div
                    className="flex-shrink-0 w-full"
                    key={image.src}
                >
                    <Image
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        className="object-cover object-center w-full h-full"
                        alt={`slideshow image ${index + 1}`}
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    </div>)
}