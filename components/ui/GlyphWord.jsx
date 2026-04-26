"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function GlyphWord({ children, className = "", style = {} }) {
    const [display, setDisplay] = useState(children);
    const intervalRef = useRef(null);
    const spanRef = useRef(null);
    const [lockedWidth, setLockedWidth] = useState(null);
    const original = children;

    useEffect(() => {
        if (spanRef.current) {
            setLockedWidth(spanRef.current.getBoundingClientRect().width);
        }
    }, []);

    const scramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDisplay(
                original.split("").map((char, i) => {
                    if (char === " ") return "\u00A0";
                    if (i < iteration) return original[i];
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join("")
            );
            if (iteration >= original.length) {
                clearInterval(intervalRef.current);
                setDisplay(original);
            }
            iteration += 0.5;
        }, 30);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setDisplay(original);
    };

    useEffect(() => () => clearInterval(intervalRef.current), []);

    return (
        <span
            ref={spanRef}
            className={`underline underline-offset-4 cursor-pointer inline-block ${className}`}
            style={{
                color: "#454545",
                textDecorationColor: "#454545",
                width: lockedWidth ? `${lockedWidth}px` : undefined,
                textAlign: "left",
                ...style,
            }}
            onMouseEnter={scramble}
            onMouseLeave={reset}
        >
            {display}
        </span>
    );
}
