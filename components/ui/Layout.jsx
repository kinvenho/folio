import React from "react";

export const Section = ({ children, className = "" }) => {
    return (
        <section
            className={`w-full flex items-center min-h-screen px-[120px] py-[80px] ${className}`}
        >
            {children}
        </section>
    );
};

export const Container = ({ children, width = "850px", className = "" }) => {
    return (
        <div className={`w-full max-w-[${width}] ${className}`}>
            {children}
        </div>
    );
};

export const Stack = ({ children, gap = "16px", direction = "col", className = "" }) => {
    const dirClass = direction === "row" ? "flex-row items-center" : "flex-col";
    return (
        <div className={`flex ${dirClass} ${className}`} style={{ gap }}>
            {children}
        </div>
    );
};
