import React from "react";

const ArchiveIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.875 7.98438H7.125"
        stroke={color}
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.15625V9.90625"
        stroke={color}
        strokeWidth="1.125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6172 1.5H5.38719C3.78969 1.5 2.49219 2.805 2.49219 4.395V14.9625C2.49219 16.3125 3.45969 16.8825 4.64469 16.23L8.30469 14.1975C8.69469 13.98 9.32469 13.98 9.70719 14.1975L13.3672 16.23C14.5522 16.89 15.5197 16.32 15.5197 14.9625V4.395C15.5122 2.805 14.2147 1.5 12.6172 1.5Z"
        stroke={color}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArchiveIcon;
