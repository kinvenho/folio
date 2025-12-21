import Image from "next/image";
import Link from "next/link";

function ImageWrapper({ image, link }) {
    return (
        <Link href={link}>
            <Image
                src={image}
                alt=""
                className="h-full cursor-pointer bluri w-full object-cover"
            />
        </Link>
    );
}

export default ImageWrapper;
