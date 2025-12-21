import Image from "next/image";
import { images } from "@/constants";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";

export default function Pursuit() {
    return (
        <Section>
            <Container width="850px">
                {/* Centered Heading */}
                <div className="text-center mb-16">
                    <Heading level="1" className="mb-1">
                        Reality, Allies,
                    </Heading>
                    <Heading level="1">
                        Divinity
                    </Heading>
                </div>

                {/* Centered Container with Left-Justified Text */}
                <div className="max-w-[750px] mx-auto">
                    <Stack gap="32px" className="mb-16">
                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Making the impossible absolute comes with a heavy toll. Reality can be daunting, asking everything from us. In my pursuit of success, a few things have become clear to me: allies are important, but most of all, the journey has to be savored.
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed text-center">
                            You need a backup plan; believing in yourself is a mistake.
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed">
                            People are overly reliant on their past experiences. I can say for a fact that 80% of people hate speaking in absolutes; they don't want to be in control but rather be controlled by people who are no smarter than them.
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed text-center">
                            Steve Jobs did an amazing job representing his mind to the world. Why not me?
                        </Text>
                    </Stack>

                    {/* Image */}
                    <div className="mb-8">
                        <Image
                            src={images.aboutPursuit}
                            alt="Oyefeso at 20"
                            width={750}
                            height={750}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Image Caption - Centered */}
                    <div className="text-center">
                        <Text size="body" className="text-[#666666]">
                            Oyefeso @ 20 (2024) | Still Pondering a pathway to Success
                        </Text>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
