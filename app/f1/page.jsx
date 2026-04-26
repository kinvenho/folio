import Image from "next/image";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { Text } from "@/components/ui/Typography";
import { GlyphWord } from "@/components/ui/GlyphWord";

export default function F1Page() {
    return (
        <Section>
            <Container width="970px" className="mx-auto">
                <Stack gap="48px">
                    {/* Car image */}
                    <div className="w-full max-w-[720px]">
                        <Image
                            src="/images/2025ferraricar.png"
                            alt="2025 Ferrari F1 Car"
                            width={720}
                            height={163}
                            className="w-full h-auto"
                            priority
                        />
                    </div>

                    {/* Copy */}
                    <Stack gap="32px">
                        <Text size="body">
                            <GlyphWord>Formula 1</GlyphWord> is the pinnacle of human daring — where engineering
                            obsession meets split-second instinct at 300 kilometres per hour. There is no sport
                            quite like it.
                        </Text>

                        <Text size="body">
                            This section is currently under construction, but anticipate greatness. The kind
                            that echoes through grandstands, that smells like burning rubber and ambition, that
                            makes your chest tight on the final lap.{" "}
                            The <GlyphWord>Tifosi</GlyphWord> shall rise once more.{" "}
                            <GlyphWord>Constructors, 2026.</GlyphWord>
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Section>
    );
}
