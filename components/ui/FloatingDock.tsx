"use client";

import React, { useRef, useState } from "react";
import { MotionValue, motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { FaBehance } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
// import { links } from "@/constants/links";

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

        // {
        //     title: "Showreel",
        //     icon: <Image src="/images/nav-showreel.svg" width={20} height={20} alt="Showreel" className="h-full w-full object-cover" />,
        //     href: "/showreel",
        //     fullSize: true
        // },
        // {
        //     title: "Seven",
        //     icon: <Image src="/images/nav-seven.svg" width={20} height={20} alt="Seven" className="h-full w-full object-cover" />,
        //     href: "/seven",
        //     fullSize: true
        // },
        // {
        //     title: "Chatroom",
        //     icon: <Image src="/images/nav-chatroom.svg" width={20} height={20} alt="Chatroom" className="h-full w-full object-cover" />,
        //     href: "/chatroom",
        //     fullSize: true
        // },
        // ...links.filter(...).map(...)
    ];

    return (
        <>
            <FloatingDockDesktop items={navItems} className={desktopClassName} />
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
                                    className="h-10 w-10 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg flex items-center justify-center"
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
                className="h-10 w-10 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg flex items-center justify-center"
            >
                <LuLayoutGrid className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
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
                "mx-auto flex h-16 gap-4 items-end rounded-2xl bg-white/40 dark:bg-neutral-900/40 px-4 pb-3 backdrop-blur-xl",
                "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/30 before:to-transparent before:pointer-events-none",
                "relative",
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
                style={{ width, height, borderRadius: "16px" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs shadow-lg" style={{ backgroundColor: "#888888" }}
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
