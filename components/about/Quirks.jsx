import Image from "next/image";
import { images } from "@/constants";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";

export default function Quirks() {
    return (
        <Section>
            <Container width="850px">
                {/* Centered Heading */}
                <div className="text-center mb-16">
                    <Heading level="1" className="mb-1">
                        Fun, Love, joy,
                    </Heading>
                    <Heading level="1">
                        Excitement
                    </Heading>
                </div>

                {/* Centered Container with Left-Justified Text */}
                <div className="max-w-[750px] mx-auto">
                    <Stack gap="32px" className="mb-16">
                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Whilst I pursue success, I make time to enjoy the best things in life. Fun should never be neglected, no matter how tough your current situation might be. You have to truly enjoy the journey for it to be considered success.
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Formula 1. Pumped for the 2025 season, my favorite driver at my most favored team—what a time to be alive. Sir Lewis Hamilton, Mr. Hammer Time, and the Tifosi, a combo almost as perfect as Batman and Robin.
                        </Text>
                    </Stack>

                    {/* F1 Image - No Border Radius */}
                    <div className="mb-16">
                        <Image
                            src={images.aboutF1}
                            alt="Formula 1"
                            width={750}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Closing Paragraph */}
                    <Text size="body" className="text-[#666666] leading-relaxed">
                        Fueled by greatness, on a journey to conquer and rewrite what is possible. I'm currently a 20-year-old Nigerian; I will edit this in 4 years when my impact hits globally. My legacy is to be the best; I strive and yearn for greatness. And I can.
                    </Text>
                </div>
            </Container>
        </Section>
    );
}
