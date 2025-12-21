import Image from "next/image";

/**
 * Reusable Intro Component for Project Pages
 * Displays project description, process timeline, and optional image
 * Default image ratio: 2376x2560 (intro.png)
 */
export default function Intro({ project, image, imageAlt, imageRatio = "2376/2560" }) {
    return (
        <section className="w-full pb-12 sm:pb-20">
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
                {/* Left Column - Image */}
                <div className="w-full bg-white relative overflow-hidden" style={{ aspectRatio: imageRatio }}>
                    {image && (
                        <Image
                            src={image}
                            alt={imageAlt || project.title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* Right Column - Content */}
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="Mono text-sm sm:text-base leading-relaxed mb-8">
                            {project.detailedDescription}
                        </p>

                        {/* Process Timeline */}
                        <div className="space-y-4">
                            {project.process && project.process.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center pb-4 border-b border-gray-200"
                                >
                                    <span className="Mono text-sm">{item.phase}</span>
                                    <span className="Mono text-sm text-gray-600 italic">{item.duration}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
