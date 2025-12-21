import Image from "next/image";
import { images } from "@/constants";
import { Text } from "@/components/ui/Typography";
import { Section, Container } from "@/components/ui/Layout";

export default function AboutIntro() {
    return (
        <Section>
            <Container width="850px">
                {/* Centered Content */}
                <div className="flex flex-col items-center text-center">
                    {/* Stopwatch Icon */}
                    <div className="mb-8">
                        <Image
                            src={images.stopwatch}
                            alt="Stopwatch"
                            width={200}
                            height={200}
                            className="w-auto h-auto"
                        />
                    </div>

                    {/* Text Content */}
                    <Text size="body" className="text-[#666666]">
                        The Day it all Began | Born to write a generational playbook
                    </Text>
                </div>
            </Container>
        </Section>
    );
}
