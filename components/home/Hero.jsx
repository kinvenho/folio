import Image from "next/image";
import { MailIcon, PhoneIcon } from "@/icon/mail.icon";
import { images } from "@/constants";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
    return (
        <Section>
            <Container width="970px" className="mx-auto">
                {/* Profile Image */}
                <div className="w-[140px] h-[140px] mb-16">
                    <Image
                        src={images.oyefeso}
                        alt="Oyefeso"
                        width={140}
                        height={140}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '24px' }}
                    />
                </div>

                {/* Title */}
                <div className="mb-16">
                    <Heading level="1" className="mb-1">
                        Everything
                    </Heading>
                    <Heading level="1">
                        Oyefeso{' '}
                        <span className="text-[#287AFF] italic">(Zero)</span>
                        {' · '}
                        <span className="font-normal text-[32px] inline-block align-baseline">Product Engineer</span>
                    </Heading>
                </div>

                {/* Bio Paragraphs */}
                <Stack gap="32px" className="mb-16 max-w-[970px]">
                    <Text size="body">
                        I'm Zero (ゼロ), embodying the concept that from emptiness comes infinite creativity.
                        As a product designer, I create scalable interfaces that address everyday challenges,
                        inspired by the imaginative worlds of Anime, the narratives of Movies, and the
                        expressiveness of Art.
                    </Text>

                    <Text size="body">
                        Through a user-centered lens, I merge technical precision with artistic flair to
                        design interfaces that are intuitive, efficient, and visually striking.
                    </Text>
                </Stack>

                {/* Contact Links */}
                <Stack direction="row" gap="48px">
                    <LinkButton href="mailto:your@email.com" icon={MailIcon}>
                        Email Me
                    </LinkButton>

                    <LinkButton href="#schedule" icon={PhoneIcon}>
                        Schedule Call
                    </LinkButton>
                </Stack>
            </Container>
        </Section>
    );
}
