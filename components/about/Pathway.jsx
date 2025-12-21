import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";

export default function Pathway() {
    return (
        <Section>
            <Container width="850px">
                {/* Centered Heading */}
                <div className="text-center mb-16">
                    <Heading level="1" className="mb-1">
                        Work, Startup's,
                    </Heading>
                    <Heading level="1">
                        Building
                    </Heading>
                </div>

                {/* Centered Container with Mixed Text Alignment */}
                <div className="max-w-[750px] mx-auto">
                    <Stack gap="32px" className="mb-16">
                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Yes, the pathway to success is long. The greatest minds ask the right questions. Every day, I ponder the validity of ideas: Why would people want this? This idea feels basic. Other people have done this – why pursue it too? Validation has never been a prowess I exhibit; I go all out instead. Yes, that's a dangerous trait, but guess what? If I fail, I can go again. There is nobody to stop me, is there?
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed text-center">
                            Start – Lose | Try again | Restart – Lose | Try again | Start – Win
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed">
                            Currently building Tetra, a financial service company focused on cashless payment systems and products. Also building Redacto, an AI document generator SaaS product. On a quest to make enough bands to pursue products that may not get funding as fast as I would want.
                        </Text>

                        <Text size="body" className="text-[#666666] leading-relaxed text-center">
                            Forbes 30 under 30 | Forbes Billionaires
                        </Text>
                    </Stack>
                </div>
            </Container>
        </Section>
    );
}
