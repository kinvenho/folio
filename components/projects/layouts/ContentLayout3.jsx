import Image from "next/image";

/**
 * Layout 3: Title/Description on top, Full-width image below, Optional caption
 * Used for: Linking Calendar
 * Image: 5728x2996 (layout3.png)
 * Body width: 560px
 */
export default function ContentLayout3({
    title,
    description,
    image,
    alt,
    caption,
    bodyWidth = "560px",
    imageRatio = "5728/2996"
}) {
    return (
        <section className="w-full py-12 sm:py-20">
            {/* Header and Description */}
            <div className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-4xl font-normal mb-6">{title}</h2>
                <p className="Mono text-sm sm:text-base leading-relaxed" style={{ maxWidth: bodyWidth }}>
                    {description}
                </p>
            </div>

            {/* Full Width Image */}
            <div className="w-full bg-white relative overflow-hidden" style={{ aspectRatio: imageRatio }}>
                {image && (
                    <Image
                        src={image}
                        alt={alt || title}
                        fill
                        className="object-cover"
                    />
                )}

                {/* Optional Caption */}
                {caption && (
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded">
                        <p className="Mono text-xs sm:text-sm">{caption}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
