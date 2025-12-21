import Image from "next/image";

/**
 * Reusable Hero Component for Project Pages
 * Displays hero image with project title and date overlay
 */
export default function Hero({ project, heroImage, heroImageAlt }) {
    return (
        <section className="w-full py-12 sm:py-20">
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] relative overflow-hidden bg-white">
                {heroImage && (
                    <Image
                        src={heroImage}
                        alt={heroImageAlt || project.title}
                        fill
                        className="object-cover"
                    />
                )}

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="Mono text-xs sm:text-sm mb-2 text-white drop-shadow-lg">{project.date}</p>
                        <h1 className="text-3xl sm:text-5xl font-normal text-white drop-shadow-lg">{project.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
