import React from "react";
import { IconProps } from "./mail.icon";

export const ArrowUpRightIcon: React.FC<IconProps> = ({
    stroke = "#B0B0B0",
    size = 20,
    className = "",
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke={stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
