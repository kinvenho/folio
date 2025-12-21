import Image from "next/image";
import { images } from "@/constants";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";

export default function AboutHero() {
    return (
        <Section>
            <Container width="850px">
                {/* Main Title - Centered */}
                <div className="text-center mb-8">
                    <Heading level="1" className="mb-1">
                        Designer, Builder,
                    </Heading>
                    <Heading level="1">
                        Problem Solver
                    </Heading>
                </div>

                {/* Subheading - Centered */}
                <div className="text-center mb-16">
                    <Text size="body" className="text-[#666666]">
                        Oyefeso, My legacy
                    </Text>
                </div>

                {/* Profile Image - Centered */}
                <div className="flex justify-center mb-12">
                    <div className="w-full max-w-[728px] h-auto">
                        <Image
                            src={images.aboutHero}
                            alt="Oyefeso Afolabi"
                            width={728}
                            height={728}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Bio Description - Centered */}
                <div className="max-w-[650px] mx-auto text-center">
                    <Text size="body" className="text-[#666666] leading-relaxed">
                        Designing has always been my greatest medium of self-expression. My prowess relies on creating intuitive experiences in the simplest representations.
                    </Text>
                </div>
            </Container>
        </Section>
    );
}
