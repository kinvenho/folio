import Image from "next/image";
import Link from "next/link";

function ImageWrapper({ image, link, width = 600, height = 400, alt = "", priority = false }) {
    return (
        <Link href={link} className="block w-full h-full relative overflow-hidden">
            <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="cursor-pointer object-cover"
                priority={priority}
            />
        </Link>
    );
}

export default ImageWrapper;
