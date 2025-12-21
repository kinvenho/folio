import Image from "next/image";

/**
 * Layout 1: Header/Description on top, Two images side by side below
 * Used for: Gecko HR (Fields)
 * Equal width and height for both images
 * Spacing between images: 16px
 * Body content width: 560px
 */
export default function ContentLayout1({
    title,
    description,
    image1,
    image2,
    alt1,
    alt2,
    bodyWidth = "560px"
}) {
    return (
        <section className="w-full py-12 sm:py-20">
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 mb-8 sm:mb-12">
                {/* Left - Title */}
                <div>
                    <h2 className="text-2xl sm:text-4xl font-normal">{title}</h2>
                </div>

                {/* Right - Description */}
                <div>
                    <p className="Mono text-sm sm:text-base leading-relaxed" style={{ maxWidth: bodyWidth }}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Two Images Side by Side - Equal width and height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full h-full bg-white">
                    {image1 && (
                        <Image
                            src={image1}
                            alt={alt1 || title}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
                <div className="w-full h-full bg-white">
                    {image2 && (
                        <Image
                            src={image2}
                            alt={alt2 || title}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
