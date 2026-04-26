import Image from "next/image";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { Text } from "@/components/ui/Typography";
import { GlyphWord } from "@/components/ui/GlyphWord";

export default function PlaygroundPage() {
    return (
        <Section>
            <Container width="970px">
                <Stack gap="48px">
                    {/* Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/images/playground.png"
                            alt="Playground"
                            width={320}
                            height={320}
                            priority
                        />
                    </div>

                    {/* Copy */}
                    <Stack gap="32px">
                        <Text size="body">
                            This is where the constraints disappear. No briefs, no timelines, no client
                            feedback. Just code, pixels, and the occasional 3am idea that probably
                            shouldn't work but does.
                        </Text>

                        <Text size="body">
                            The <GlyphWord>playground</GlyphWord> is where experiments live — interactive
                            components, design explorations, UI concepts too weird for production and too
                            good to throw away. Think of it as the sketchbook you're not supposed to see
                            yet. Check back soon. Something is being built in the{" "}
                            <GlyphWord>dark.</GlyphWord>
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Section>
    );
}
