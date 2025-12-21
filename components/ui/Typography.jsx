import React from "react";

export const Heading = ({ children, level = "1", className = "" }) => {
    const styles = {
        "1": "text-[48px] leading-tight font-normal",
        "2": "text-[32px] leading-tight font-normal",
    };

    const Tag = `h${level}`;

    return (
        <Tag className={`${styles[level]} text-[#292929] ${className}`}>
            {children}
        </Tag>
    );
};

export const Text = ({ children, size = "body", className = "", color = "#292929" }) => {
    const styles = {
        body: "text-[22px] leading-[1.8]",
        small: "text-[16px] leading-relaxed",
    };

    return (
        <p className={`${styles[size]} font-normal ${className}`} style={{ color }}>
            {children}
        </p>
    );
};
