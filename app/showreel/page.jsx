"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp, FaChevronDown, FaPlay, FaPause } from "react-icons/fa6";
import Image from "next/image";

// Placeholder showreel data - you'll replace with actual media
const showreels = [
    {
        id: 1,
        type: "video",
        src: "/videos/reel-1.mp4",
        thumbnail: "/images/reel-1-thumb.jpg",
        title: "Project Showcase 1",
        description: "Design exploration for modern interfaces"
    },
    {
        id: 2,
        type: "image",
        src: "/images/reel-2.jpg",
        title: "Visual Design 2",
        description: "Brand identity work"
    },
    {
        id: 3,
        type: "video",
        src: "/videos/reel-3.mp4",
        thumbnail: "/images/reel-3-thumb.jpg",
        title: "Animation Study 3",
        description: "Motion design experiments"
    }
];

export default function Showreel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < showreels.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsPlaying(false);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setIsPlaying(false);
        }
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                handlePrev();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    // Handle swipe gestures
    const handleDragEnd = (event, info) => {
        const swipeThreshold = 50;
        if (info.offset.y > swipeThreshold) {
            handlePrev();
        } else if (info.offset.y < -swipeThreshold) {
            handleNext();
        }
    };

    const currentReel = showreels[currentIndex];

    return (
        <div className="fixed inset-0 bg-[#F8F8F8] flex items-center justify-center overflow-hidden">
            {/* Container with arrows on the side */}
            <div className="flex items-center gap-8">
                {/* Up Arrow - Left Side */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`hidden w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentIndex === 0
                        ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                        : "bg-white text-neutral-800 hover:bg-neutral-50"
                        }`}
                >
                    <FaChevronUp className="text-xl" />
                </button>

                {/* Main Player Container */}
                <motion.div
                    className="relative w-[400px] h-[75vh] bg-white rounded-3xl overflow-hidden"
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                >
                    {/* Media Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center bg-neutral-100"
                        >
                            {currentReel.type === "video" ? (
                                <div className="relative w-full h-full">
                                    <video
                                        ref={videoRef}
                                        src={currentReel.src}
                                        poster={currentReel.thumbnail}
                                        className="w-full h-full object-cover"
                                        loop
                                        playsInline
                                    />
                                    {/* Play/Pause Overlay */}
                                    <button
                                        onClick={togglePlayPause}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                                    >
                                        <motion.div
                                            key={isPlaying ? "pause" : "play"}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {isPlaying ? (
                                                <FaPause className="text-white text-2xl" />
                                            ) : (
                                                <FaPlay className="text-white text-2xl" />
                                            )}
                                        </motion.div>
                                    </button>
                                </div>
                            ) : (
                                <Image
                                    src={currentReel.src}
                                    alt={currentReel.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white z-10">
                        <h3 className="text-xl font-normal mb-1">{currentReel.title}</h3>
                        <p className="text-sm text-white/80">{currentReel.description}</p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                        {showreels.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 rounded-full transition-all ${index === currentIndex
                                    ? "w-8 bg-white"
                                    : "w-1 bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Down Arrow - Right Side */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex === showreels.length - 1}
                    className={`hidden w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentIndex === showreels.length - 1
                        ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                        : "bg-white text-neutral-800 hover:bg-neutral-50"
                        }`}
                >
                    <FaChevronDown className="text-xl" />
                </button>
            </div>
        </div >
    );
}
