"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading, Text } from "@/components/ui/Typography";
import { Section, Container } from "@/components/ui/Layout";

// Placeholder data structure - you'll provide the real data
const workHistory = [
    {
        id: 1,
        company: "Apple",
        role: "PD&M Design",
        period: "(2023+)",
        description: "Leading design initiatives for product development and management, focusing on user-centered solutions and innovative design systems.",
        isExpanded: false
    },
    {
        id: 2,
        company: "Amazon",
        role: "A. Design Director",
        period: "(2021 — 2023)",
        description: "Brand building all new to world hardware and features for fitness brand Amazon Halo. Leading creative development of projects across marketing, product and content studio.",
        isExpanded: false
    },
    {
        id: 3,
        company: "Cruise",
        role: "Brand Design Lead",
        period: "(2019 — 2021)",
        description: "Led brand design strategy and execution for autonomous vehicle experiences, creating cohesive visual systems across digital and physical touchpoints.",
        isExpanded: false
    },
    {
        id: 4,
        company: "Uber",
        role: "Design Lead",
        period: "(2018 — 2019)",
        description: "Directed design efforts for core product features, collaborating with cross-functional teams to deliver seamless user experiences at scale.",
        isExpanded: false
    }
];

export default function WorkHistory() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="w-full px-[120px] py-[80px]">
            <Container width="970px" className="mx-auto">
                {/* Work History List */}
                <div className="space-y-0">
                    {workHistory.map((work, index) => (
                        <WorkItem
                            key={work.id}
                            work={work}
                            isExpanded={expandedId === work.id}
                            onToggle={() => toggleExpand(work.id)}
                            isLast={index === workHistory.length - 1}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function WorkItem({ work, isExpanded, onToggle, isLast }) {
    return (
        <div className={`border-t border-black ${!isLast ? '' : 'border-b'} py-8`}>
            <div
                className="flex items-start justify-between cursor-pointer group"
                onClick={onToggle}
            >
                {/* Left: Company Name */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-normal tracking-tight">
                        {work.company}
                    </h2>
                </div>

                {/* Right: Role, Period, and Toggle */}
                <div className="flex-1 flex flex-col items-end text-right">
                    <p className="text-base mb-1 text-neutral-600">{work.period}</p>
                    <div className="flex items-center gap-4">
                        <p className="text-lg tracking-wide">{work.role}</p>
                        <button
                            className="w-6 h-6 flex items-center justify-center text-2xl transition-transform duration-300"
                            style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Expandable Description */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-6 max-w-xl ml-auto text-right">
                            <p className="text-base leading-relaxed text-neutral-700">
                                {work.description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
