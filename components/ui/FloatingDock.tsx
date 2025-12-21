"use client";

import React, { useRef, useState } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    FaWhatsapp,
    FaDribbble,
    FaBehance,
    FaLinkedin,
    FaXTwitter
} from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
import { links } from "@/constants/links";

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const FloatingDock = ({
    desktopClassName,
    mobileClassName
}: {
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    // Define the navigation items
    // We combine app routes with social links
    const navItems = [
        {
            title: "Home",
            icon: (
                <Image
                    src="/images/nav-home.svg"
                    width={20}
                    height={20}
                    alt="Home"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/",
            fullSize: true
        },
        {
            title: "About",
            icon: (
                <Image
                    src="/images/nav-about.svg"
                    width={20}
                    height={20}
                    alt="About"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/about",
            fullSize: true
        },
        {
            title: "Playground",
            icon: (
                <Image
                    src="/images/nav-playground.svg"
                    width={20}
                    height={20}
                    alt="Playground"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/playground",
            fullSize: true
        },
        {
            title: "Showreel",
            icon: (
                <Image
                    src="/images/nav-showreel.svg"
                    width={20}
                    height={20}
                    alt="Showreel"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/showreel",
            fullSize: true
        },
        {
            title: "Seven",
            icon: (
                <Image
                    src="/images/nav-seven.svg"
                    width={20}
                    height={20}
                    alt="Seven"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/seven",
            fullSize: true
        },
        {
            title: "Chatroom",
            icon: (
                <Image
                    src="/images/nav-chatroom.svg"
                    width={20}
                    height={20}
                    alt="Chatroom"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/chatroom",
            fullSize: true
        },
        {
            title: "F1",
            icon: (
                <Image
                    src="/images/nav-f1.svg"
                    width={20}
                    height={20}
                    alt="F1"
                    className="h-full w-full object-cover"
                />
            ),
            href: "/f1",
            fullSize: true
        },

        // Map social links (excluding all - WhatsApp, X/Twitter, Dribbble, Behance, LinkedIn)
        ...links
            .filter((link: any) => {
                const name = link.name.toLowerCase();
                return !name.includes("whatsapp") &&
                    name !== "x" &&
                    !name.includes("twitter") &&
                    !name.includes("dribble") &&
                    !name.includes("behance") &&
                    !name.includes("linkedin");
            })
            .map((link: any) => {
                return {
                    title: link.name,
                    icon: <FaBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
                    href: link.link,
                    target: "_blank"
                };
            })
    ];

    return (
        <>
            <FloatingDockDesktop items={navItems} className={desktopClassName} />
            <FloatingDockMobile items={navItems} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string; target?: string; fullSize?: boolean }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cn("relative block md:hidden", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    target={item.target}
                                    key={item.title}
                                    className="h-10 w-10 rounded-xl bg-gray-50 dark:bg-neutral-900 flex items-center justify-center border border-gray-200 dark:border-neutral-800 shadow-sm"
                                >
                                    <div className="h-4 w-4">{item.icon}</div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center border border-gray-200 dark:border-neutral-800 shadow-sm"
            >
                <LuLayoutGrid className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string; target?: string; fullSize?: boolean }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-white/40 dark:bg-neutral-900/40 border border-white/20 dark:border-neutral-800/20 px-4 pb-3 backdrop-blur-xl shadow-lg",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
    target,
    fullSize
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
    target?: string;
    fullSize?: boolean;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href} target={target}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-xl bg-gray-200/80 dark:bg-neutral-800/80 flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: fullSize ? "100%" : "40%", height: fullSize ? "100%" : "40%" }}
                    className={cn("flex items-center justify-center", fullSize && "rounded-xl overflow-hidden")}
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}
