import Image from "next/image";

/**
 * Layout 2: Large image on left, Title/Description on right
 * Used for: Customisation, Personalisation
 * Image: 3288x2996 (layout2.png)
 * Grid ratio: Image is larger, content is smaller
 * Heading width: 198px
 * Body width: 390px
 */
export default function ContentLayout2({
    title,
    description,
    image,
    alt,
    imageOnRight = false,
    headingWidth = "198px",
    bodyWidth = "390px",
    imageRatio = "3288/2996"
}) {
    return (
        <section className="w-full py-12 sm:py-20">
            {/* Grid with custom ratio - image takes more space */}
            <div className={`grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-8 sm:gap-16`}>
                {/* Image - larger portion */}
                <div className={`w-full bg-white relative overflow-hidden ${imageOnRight ? 'sm:order-2' : 'sm:order-1'}`}
                    style={{ aspectRatio: imageRatio }}>
                    {image && (
                        <Image
                            src={image}
                            alt={alt || title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* Content - smaller portion, aligned to bottom */}
                <div className={`flex flex-col justify-end ${imageOnRight ? 'sm:order-1' : 'sm:order-2'}`}>
                    <h2
                        className="text-2xl sm:text-4xl font-normal mb-6"
                        style={{ maxWidth: headingWidth }}
                    >
                        {title}
                    </h2>
                    <p
                        className="Mono text-sm sm:text-base leading-relaxed"
                        style={{ maxWidth: bodyWidth }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
