import React from "react";

export type IconProps = {
  stroke?: string;
  size?: number;
  className?: string;
};

export const ShareIcon: React.FC<IconProps> = ({
  stroke = "#292929",
  size = 32,
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
      <g clipPath="url(#clip0_1_1722)">
        <path
          d="M12.9999 4V8C6.42494 9.028 3.97994 14.788 2.99994 20C2.96294 20.206 8.38394 14.038 12.9999 14V18L20.9999 11L12.9999 4Z"
          fill={stroke}
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1722">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CopyIcon: React.FC<IconProps> = ({
  stroke = "#888888",
  size = 24,
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
      <g clipPath="url(#clip0_346_4385)">
        <path
          d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.012 16.737C3.70534 16.5622 3.45027 16.3095 3.27258 16.0045C3.09488 15.6995 3.00085 15.353 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_346_4385">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

