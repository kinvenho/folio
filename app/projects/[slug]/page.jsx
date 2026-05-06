import { notFound } from "next/navigation";
import { projects } from "@/lib";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { Heading, Text } from "@/components/ui/Typography";
import { LinkButton } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/icon/arrow.icon";
import { GlyphWord } from "@/components/ui/GlyphWord";

import { content as myHomeEtalContent } from "@/lib/content/my-home-etal";
import { content as geckoContent } from "@/lib/content/gecko-hr";
import { content as clubberaContent } from "@/lib/content/clubbera";
import { content as poblarcContent } from "@/lib/content/poblarc";
import { content as redactoContent } from "@/lib/content/redacto";
import { content as renprofileContent } from "@/lib/content/renprofile";

const contentMap = {
    "my-home-etal": myHomeEtalContent,
    "Gecko-HR": geckoContent,
    "clubbera": clubberaContent,
    "poblarc": poblarcContent,
    "redacto": redactoContent,
    "renprofile": renprofileContent,
};

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    const content = contentMap[project.slug];

    const TitleRow = () => (
        <div className="flex items-center gap-4 mb-8">
            <Heading level="1">{content?.title ?? project.title}</Heading>
            {project.link && (
                <LinkButton href={project.link} icon={ArrowUpRightIcon} target="_blank">
                    <GlyphWord style={{ color: "inherit", textDecorationColor: "inherit" }}>Visit Site</GlyphWord>
                </LinkButton>
            )}
        </div>
    );

    if (content?.comingSoon) {
        return (
            <main className="min-h-screen w-full">
                <Section>
                    <Container width="970px">
                        <Stack gap="48px">
                            <TitleRow />
                            <Text size="body">{content.intro}</Text>
                        </Stack>
                    </Container>
                </Section>
            </main>
        );
    }

    if (content) {
        return (
            <main className="min-h-screen w-full">
                <Section>
                    <Container width="970px">
                        <Stack gap="48px">
                            <div>
                                <TitleRow />
                                <Stack gap="32px">
                                    {content.paragraphs.map((p, i) => (
                                        <Text key={i} size="body">{p}</Text>
                                    ))}
                                </Stack>
                            </div>
                            {content.sections.map((section, i) => (
                                <Stack key={i} gap="24px">
                                    {section.heading && (
                                        <Text size="body" className="font-medium" color="#292929">
                                            {section.heading}
                                        </Text>
                                    )}
                                    <Stack gap="24px">
                                        {Array.isArray(section.body)
                                            ? section.body.map((para, j) => <Text key={j} size="body">{para}</Text>)
                                            : section.body.split("\n\n").map((para, j) => <Text key={j} size="body">{para}</Text>)
                                        }
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>
                    </Container>
                </Section>
            </main>
        );
    }

    return (
        <main className="min-h-screen w-full">
            <Section>
                <Container width="970px">
                    <Stack gap="32px">
                        <Heading level="1">{project.title}</Heading>
                        <Text size="body">{project.detailedDescription}</Text>
                    </Stack>
                </Container>
            </Section>
        </main>
    );
}

