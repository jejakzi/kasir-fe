import React from "react";

const LogoutIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12.5859 13.6969C12.3276 16.6969 10.7859 17.9219 7.41094 17.9219H7.3026C3.5776 17.9219 2.08594 16.4302 2.08594 12.7052L2.08594 7.27187C2.08594 3.54687 3.5776 2.05521 7.3026 2.05521H7.41094C10.7609 2.05521 12.3026 3.26354 12.5776 6.21354"
        stroke="#E60000"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50104 10L16.9844 10"
        stroke="#E60000"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.1224 12.7891L17.9141 9.9974L15.1224 7.20573"
        stroke="#E60000"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
