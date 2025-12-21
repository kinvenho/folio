import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";

export default function CursiveMind() {
    return (
        <Section>
            <Container width="850px">
                {/* Centered Heading */}
                <div className="text-center mb-16">
                    <Heading level="1" className="mb-1">
                        Drive, Zone,
                    </Heading>
                    <Heading level="1">
                        Cursive Mind
                    </Heading>
                </div>

                {/* Centered Container with Left-Justified Paragraphs */}
                <div className="max-w-[750px] mx-auto">
                    <Stack gap="32px" className="mb-16">
                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Inspired by the greatest, my mind has been set on my goal for as long as I can remember. I admire Lewis Hamilton's perseverance, regardless of how stacked the odds might be against him; Lebron James's sheer ability to stay focused while everyone around him breaks down; Donald Trump Jr.'s gravitational pull, bringing people of collective mindset and prowess to help in building a dream; and many more.
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Enlightened, self-taught, and self-motivated, my growth has always been due to my innate ability to block out distractions. I cancel what was and focus on what can be. My mind works like no other; I ponder deeply while factoring in every possible alternative. My ability to think has been one of my greatest strengths in designing and driving a vision for a large group of people. Leaders are molded over a period of time.
                        </Text>
                    </Stack>

                    {/* Centered Closing Line */}
                    <div className="text-center">
                        <Text size="body" className="text-[#666666] italic">
                            Journeying through life one thought a time
                        </Text>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
