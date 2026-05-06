"use client";

import Image from "next/image";
import { MailIcon, PhoneIcon } from "@/icon/mail.icon";
import { images } from "@/constants";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { LinkButton } from "@/components/ui/Button";
import { GlyphWord } from "@/components/ui/GlyphWord";

export default function Hero() {
    return (
        <Section>
            <Container width="970px" className="mx-auto">
                {/* Profile Image */}
                <div className="w-[140px] h-[140px] mb-8 md:mb-16">
                    <Image
                        src={images.oyefeso}
                        alt="Oyefeso"
                        width={140}
                        height={140}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '24px' }}
                        priority
                    />
                </div>

                {/* Title */}
                <div className="mb-8 md:mb-16">
                    <Heading level="1" className="mb-1">
                        Everything
                    </Heading>
                    <Heading level="1">
                        Oyefeso{' '}
                        <span className="text-[#287AFF] italic" style={{ display: "inline" }}>
                            <GlyphWord style={{ color: "#287AFF", textDecorationColor: "transparent", display: "inline", width: "auto" }}>(Zero)</GlyphWord>
                        </span>
                        <span className="hidden md:inline mx-4">·</span>
                        <span className="hidden md:inline font-normal text-[32px]" style={{ verticalAlign: "15%" }}>Product Engineer</span>
                    </Heading>
                    <Heading level="1" className="md:hidden font-normal !text-[28px]">
                        Product Engineer
                    </Heading>
                </div>

                {/* Bio Paragraphs */}
                <Stack gap="24px" className="mb-8 md:mb-16 max-w-[970px]">
                    <Text size="body">
                        I'm Zero (ゼロ), embodying the concept that from emptiness comes infinite creativity.
                        As a product engineer, I design and build scalable products that address real-world challenges,
                        inspired by the imaginative worlds of{' '}
                        <GlyphWord href="https://myanimelist.net" target="_blank">Anime</GlyphWord>, the narratives of{' '}
                        <GlyphWord href="https://letterboxd.com/iamoyefeso" target="_blank">Movies</GlyphWord>, and the
                        expressiveness of Art.
                    </Text>

                    <Text size="body">
                        Through a user-centered lens, I merge technical precision with artistic flair to
                        create interfaces that are intuitive, efficient, and visually striking.
                    </Text>
                </Stack>

                {/* Contact Links */}
                <div className="flex flex-row items-center gap-6 md:gap-12">
                    <LinkButton href="mailto:oyefesoafolabiteniola@gmail.com" icon={MailIcon}>
                        <GlyphWord style={{ color: "inherit", textDecorationColor: "transparent" }}>Email Me</GlyphWord>
                    </LinkButton>

                    <LinkButton href="#schedule" icon={PhoneIcon}>
                        <GlyphWord style={{ color: "inherit", textDecorationColor: "transparent" }}>Schedule Call</GlyphWord>
                    </LinkButton>
                </div>
            </Container>
        </Section>
    );
}
