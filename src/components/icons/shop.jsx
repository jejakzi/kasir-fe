import React from "react";

const ShopIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3.26172 12.1562V17.0204C3.26172 21.8846 5.21172 23.8346 10.0759 23.8346H15.9151C20.7792 23.8346 22.7292 21.8846 22.7292 17.0204V12.1562"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0018 12.9993C14.9843 12.9993 16.4468 11.3852 16.2518 9.40268L15.5368 2.16602H10.4777L9.75182 9.40268C9.55682 11.3852 11.0193 12.9993 13.0018 12.9993Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8364 12.9993C22.0247 12.9993 23.628 11.2227 23.4114 9.04518L23.108 6.06602C22.718 3.24935 21.6347 2.16602 18.7964 2.16602H15.4922L16.2505 9.76018C16.4347 11.5477 18.0489 12.9993 19.8364 12.9993Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.11024 12.9993C7.89774 12.9993 9.51191 11.5477 9.68524 9.76018L9.92357 7.36602L10.4436 2.16602H7.13941C4.30107 2.16602 3.21774 3.24935 2.82774 6.06602L2.53524 9.04518C2.31857 11.2227 3.92191 12.9993 6.11024 12.9993Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0013 18.416C11.1921 18.416 10.293 19.3152 10.293 21.1243V23.8327H15.7096V21.1243C15.7096 19.3152 14.8105 18.416 13.0013 18.416Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShopIcon;
