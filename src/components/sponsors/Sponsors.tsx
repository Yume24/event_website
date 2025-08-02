import type {Image as ImageType} from "@/types/types";
import Image from "next/image"

const images: ImageType[] = [
    {src: "/static/images/sponsors/acsm.jpg", height: 720, width: 960, alt: "logo acsm"},
    {src: "/static/images/sponsors/eastmodels.jpg", height: 1146, width: 2048, alt: "logo east models"},
    {src: "/static/images/sponsors/kagero.png", height: 200, width: 200, alt: "logo kagero"},
    {src: "/static/images/sponsors/maxhobby.jpg", height: 509, width: 509, alt: "logo max hobby"},
    {src: "/static/images/sponsors/mojehobby.jpg", height: 440, width: 400, alt: "logo moje hobby"},
]
export default function Sponsors() {
    return (
        <div className="my-10 flex justify-center items-center gap-20 flex-wrap">
            {images.map(image => (
                <Image key={image.src} className="w-40" src={image.src} width={image.width} height={image.height} alt={image.alt}/>
            ))}
        </div>
    );
}