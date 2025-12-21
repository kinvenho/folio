"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/config/projects";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container } from "@/components/ui/Layout";
import { FaArrowRight } from "react-icons/fa6";

export default function Featured() {
    const containerRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <section className="w-full py-20 overflow-hidden">
            <div className="flex flex-col items-center mb-8 px-5">
                <Heading level="2" className="text-center mb-2 text-[42px]">Featured Work</Heading>
            </div>

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-8 px-[50vw] pb-20 pt-10 scrollbar-hide snap-x snap-center"
                style={{
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {projects.map((project, index) => (
                    <Card
                        key={project.id}
                        project={project}
                        index={index}
                        total={projects.length}
                        scrollXProgress={scrollXProgress}
                    />
                ))}
            </div>
        </section>
    );
}

function Card({ project, index, total, scrollXProgress }) {
    const position = index / (total - 1);
    const range = [position - 0.2, position, position + 0.2];

    const rotate = useTransform(scrollXProgress, range, [-10, 0, 10]);
    const scale = useTransform(scrollXProgress, range, [0.9, 1, 0.9]);
    const opacity = useTransform(scrollXProgress, range, [0.6, 1, 0.6]);
    const y = useTransform(scrollXProgress, range, [20, 0, 20]);

    return (
        <motion.div
            style={{
                rotate,
                scale,
                opacity,
                y
            }}
            className="min-w-[258px] md:min-w-[387px] snap-center relative group perspective-1000"
        >
            <Link href={`/projects/${project.slug}`} className="block">
                <div
                    className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 transition-shadow duration-300"
                    style={{
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                    }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                        <p className="text-white/80 text-sm mb-2">{project.subtitle}</p>
                        <h3 className="text-white text-2xl">{project.title}</h3>
                        <div className="mt-4 flex items-center gap-2 text-white text-sm">
                            View Project <FaArrowRight />
                        </div>
                    </div>
                </div>

                {/* Mobile Title */}
                <div className="mt-6 text-center md:hidden">
                    <h3 className="text-xl">{project.title}</h3>
                    <p className="text-neutral-500 text-sm">{project.subtitle}</p>
                </div>
            </Link>
        </motion.div>
    );
}
