"use client";

import React from "react";
import { Section, Container, Stack } from "@/components/ui/Layout";
import { Text } from "@/components/ui/Typography";
import { GlyphWord } from "@/components/ui/GlyphWord";

export default function Summary() {
    return (
        <Section className="!py-[60px] md:!py-[80px]">
            <Container width="970px" className="mx-auto">
                <Stack gap="32px">
                    <Text size="body">
                        That philosophy has shown up in every room I've walked into. Early in my career,
                        I had the pleasure of working alongside visionaries at the start of building
                        something real. From my time at{" "}
                        <GlyphWord href="/projects/my-home-etal">MyHomeEtal</GlyphWord>, a Lagos-based ecommerce store,
                        to contracting with <GlyphWord href="https://nesismedia.com" target="_blank">Nesis Media</GlyphWord>{" "}
                        — those experiences shaped how I think about design and how I approach bringing
                        ideas to life.
                    </Text>

                    <Text size="body">
                        At <GlyphWord href="https://nesismedia.com" target="_blank">Nesis Media</GlyphWord>, I got to work on products
                        I'm genuinely proud of: <GlyphWord href="/projects/clubbera">Clubbera</GlyphWord>, a community building platform,
                        and <GlyphWord href="/projects/poblarc">Poblarc</GlyphWord>, a luxury ecommerce store,
                        among others. Outside contracted work, I poured time into passion projects —{" "}
                        <GlyphWord href="/projects/redacto">Redacto</GlyphWord>, an AI document generator,{" "}
                        <GlyphWord href="/projects/Gecko-HR">Gecko HR</GlyphWord>, a human resource management
                        platform, and Jungle, an e-learning platform. Each one taught me something
                        different about people, systems, and the space between them.
                    </Text>

                    <Text size="body">
                        The most challenging and rewarding of everything on this list is what I'm
                        building now. At my startup, I designed and engineered{" "}
                        <GlyphWord href="/projects/renprofile">Renprofile</GlyphWord> — a helpdesk built specifically
                        for SaaS teams. It's the project that has pushed me the furthest, and the one
                        I'm most proud of.
                    </Text>
                </Stack>
            </Container>
        </Section>
    );
}
