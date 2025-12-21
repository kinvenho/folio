import React from "react";

export const LinkButton = ({ href, icon: Icon, children, className = "" }) => {
    return (
        <a
            href={href}
            className={`flex items-center group transition-colors ${className}`}
            style={{ gap: "12px" }}
        >
            {Icon && (
                <Icon
                    size={20}
                    stroke="#B0B0B0"
                    className="group-hover:stroke-[#287AFF] transition-colors"
                />
            )}
            <span
                className="text-[24px] text-[#292929] group-hover:text-[#287AFF] transition-colors"
            >
                {children}
            </span>
        </a>
    );
};
