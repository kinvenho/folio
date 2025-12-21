import Image from "next/image";
import { images } from "@/constants";
import { Heading } from "@/components/ui/Typography";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { LinkButton } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/icon/arrow.icon";

export default function CTA() {
    return (
        <Section className="!min-h-0 py-[120px]">
            <Container width="850px">
                <Stack gap="48px" className="items-center text-center">
                    {/* Profile Image */}
                    <div className="w-[250px] h-[250px]">
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
                        <Heading level="2" className="!text-[32px] !leading-[1.6]">
                            Supercharge your product’s user-centric design
                            —let’s schedule a call to elevate your vision
                            together! ❤️
                        </Heading>
                    </div>

                    {/* Links */}
                    <Stack direction="row" gap="48px">
                        <LinkButton href="#schedule" icon={ArrowUpRightIcon}>
                            Schedule a call
                        </LinkButton>

                        <LinkButton href="https://www.upwork.com" icon={ArrowUpRightIcon}>
                            Hire Me on <span className="text-[#14A800]">Upwork</span>
                        </LinkButton>
                    </Stack>
                </Stack>
            </Container>
        </Section>
    );
}
