import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib";

// Import project-specific components
import { GeckoHero, GeckoIntro, GeckoFields, GeckoCustomisation, GeckoCalendar } from "@/components/projects/gecko-hr";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Component mapping for each project
const projectComponents = {
    "Gecko-HR": {
        Hero: GeckoHero,
        Intro: GeckoIntro,
        Fields: GeckoFields,
        Customisation: GeckoCustomisation,
        Calendar: GeckoCalendar,
    },
    // Add other projects here as they are created
};

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    // Get project-specific components or use default
    const ProjectComponents = projectComponents[project.slug];

    return (
        <main className="min-h-screen px-5 sm:px-[70px] flex flex-col items-start w-full bg-white">
            {ProjectComponents ? (
                <>
                    {/* Use project-specific components */}
                    <ProjectComponents.Hero project={project} />
                    <ProjectComponents.Intro project={project} />
                    {ProjectComponents.Fields && <ProjectComponents.Fields />}
                    {ProjectComponents.Customisation && <ProjectComponents.Customisation />}
                    {ProjectComponents.Calendar && <ProjectComponents.Calendar />}
                </>
            ) : (
                <>
                    {/* Default/Fallback layout for projects without custom components */}
                    <section className="w-full py-12 sm:py-20">
                        <div className="w-full border-[3px] border-[#1010FF] aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center bg-white mb-12">
                            <div className="text-center">
                                <p className="Mono text-xs sm:text-sm mb-2">{project.date}</p>
                                <h1 className="text-3xl sm:text-5xl font-normal">{project.title}</h1>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
                            {/* Left Column - Image Placeholder */}
                            <div className="w-full aspect-square bg-white"></div>

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

                                {/* Back Link */}
                                <Link
                                    href="/"
                                    className="mt-8 inline-flex items-center Mono text-sm underline hover:text-[#1010FF] transition-colors"
                                >
                                    ← Back to projects
                                </Link>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}
