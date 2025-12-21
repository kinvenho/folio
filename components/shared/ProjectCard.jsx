import React from "react";
import Link from "next/link";
import ReadMore from "@/components/ReadMore";
import Shop from "@/components/Shop";
import ImageWrapper from "@/components/ImageWrapper";

const ProjectCard = ({ project, position }) => {
    const { title, image, link, description, features, action, secondaryAction, slug } = project;

    // Determine border classes based on position (left or right in the grid)
    const borderClass = position === 'left'
        ? "sm:pr-[15px] sm:border-r-[0.2px]"
        : "sm:pl-[15px] sm:border-l-[0.2px] sm:border-t-0 border-t-[0.2px] sm:pt-0 pt-6";

    const CardContent = () => (
        <>
            <div className="w-full h-[288px]">
                <ImageWrapper link={slug ? `/projects/${slug}` : link} image={image} />
            </div>
            <div className="">
                <h2 className="mt-4">{title}</h2>

                {description && description.map((desc, index) => (
                    <p key={index} className="text-xs leading-[19px] mb-2">
                        {desc}
                    </p>
                ))}

                {features && (
                    <ul className="px-6 mt-[15px] mb-5">
                        {features.map((feature, index) => (
                            <li key={index} className="tracking-widest text-xs leading-[19px] list-disc Mono">
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                <section className="flex mt-5 gap-4">
                    {action && (
                        <ReadMore link={action.link} text={action.text} />
                    )}
                    {secondaryAction && (
                        <Shop link={secondaryAction.link} />
                    )}
                </section>
            </div>
        </>
    );

    return (
        <main className={`h-full w-full border-black ${borderClass}`}>
            <CardContent />
        </main>
    );
};

export default ProjectCard;
