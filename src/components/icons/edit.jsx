import React from "react";

const EditIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.83958 2.4047L3.36624 8.19804C3.15958 8.41804 2.95958 8.85137 2.91958 9.15137L2.67291 11.3114C2.58624 12.0914 3.14624 12.6247 3.91958 12.4914L6.06624 12.1247C6.36624 12.0714 6.78624 11.8514 6.99291 11.6247L12.4662 5.83137C13.4129 4.83137 13.8396 3.69137 12.3662 2.29804C10.8996 0.918035 9.78624 1.4047 8.83958 2.4047Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.92969 3.36719C8.21635 5.20719 9.70969 6.61385 11.563 6.80052"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14.6641H14"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
