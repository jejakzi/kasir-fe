import React from "react";

const MinusIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M14.9062 27.5C21.7812 27.5 27.4062 21.875 27.4062 15C27.4062 8.125 21.7812 2.5 14.9062 2.5C8.03125 2.5 2.40625 8.125 2.40625 15C2.40625 21.875 8.03125 27.5 14.9062 27.5Z"
        stroke={color}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.90625 15H19.9062"
        stroke={color}
        strokeWidth="1.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
