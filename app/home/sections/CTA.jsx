"use client";

import Image from "next/image";
import { images } from "@/constants";
import { Heading } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { LinkButton } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/icon/arrow.icon";
import { GlyphWord } from "@/components/ui/GlyphWord";

export default function CTA() {
    return (
        <Section className="!min-h-0 pt-[60px] md:pt-[120px] pb-[100px] md:pb-[200px]">
            <Container width="850px" className="mx-auto">
                <Stack gap="48px" className="items-center text-center">
                    {/* Profile Image */}
                    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
                        <Image
                            src={images.ctaMe}
                            alt="Oyefeso"
                            width={250}
                            height={250}
                            className="w-full h-full object-cover grayscale"
                            style={{ borderRadius: '40px' }}
                        />
                    </div>

                    {/* Heading */}
                    <div className="max-w-[516px]">
                        <Heading level="2" className="!leading-[1.6]">
                            Supercharge your product's user-centric design
                            —let's schedule a call to elevate your vision
                            together.
                        </Heading>
                    </div>

                    {/* Links */}
                    <Stack direction="row" gap="32px">
                        <LinkButton href="#schedule" icon={ArrowUpRightIcon}>
                            <GlyphWord style={{ color: "inherit", textDecorationColor: "transparent" }}>Schedule a call</GlyphWord>
                        </LinkButton>

                        <LinkButton href="https://www.upwork.com" icon={ArrowUpRightIcon}>
                            <GlyphWord style={{ color: "inherit", textDecorationColor: "transparent" }}>Hire Me on Upwork</GlyphWord>
                        </LinkButton>
                    </Stack>
                </Stack>
            </Container>
        </Section>
    );
}
