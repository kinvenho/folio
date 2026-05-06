import React from "react";

export const LinkButton = ({ href, icon: Icon, children, className = "", target, rel }) => {
    return (
        <a
            href={href}
            target={target}
            rel={target === "_blank" ? rel ?? "noopener noreferrer" : rel}
            className={`flex items-center group transition-colors ${className}`}
            style={{ gap: "12px" }}
        >
            {Icon && (
                <Icon
                    size={20}
                    stroke="#B0B0B0"
                    className="group-hover:stroke-[#287AFF] transition-colors shrink-0"
                />
            )}
            <span
                className="text-[18px] md:text-[24px] text-[#292929] group-hover:text-[#287AFF] transition-colors whitespace-nowrap"
            >
                {children}
            </span>
        </a>
    );
};
