import React from "react";

const TrashIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
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
        d="M7.91406 12.0859L7.91406 9.58594"
        stroke={color}
        strokeWidth="0.833333"
        strokeLinecap="round"
      />
      <path
        d="M12.0859 12.0859L12.0859 9.58594"
        stroke={color}
        strokeWidth="0.833333"
        strokeLinecap="round"
      />
      <path
        d="M2.5 5.41406H17.5V5.41406C16.3296 5.41406 15.7444 5.41406 15.324 5.69495C15.1421 5.81654 14.9858 5.9728 14.8642 6.15478C14.5833 6.57515 14.5833 7.16034 14.5833 8.33073V12.9141C14.5833 14.4854 14.5833 15.2711 14.0952 15.7592C13.607 16.2474 12.8213 16.2474 11.25 16.2474H8.75C7.17865 16.2474 6.39298 16.2474 5.90482 15.7592C5.41667 15.2711 5.41667 14.4854 5.41667 12.9141V8.33073C5.41667 7.16034 5.41667 6.57515 5.13578 6.15478C5.01419 5.9728 4.85793 5.81654 4.67595 5.69495C4.25558 5.41406 3.67039 5.41406 2.5 5.41406V5.41406Z"
        stroke={color}
        strokeWidth="0.833333"
        strokeLinecap="round"
      />
      <path
        d="M7.91927 2.91947C7.91927 2.91947 8.33594 2.08594 10.0026 2.08594C11.6693 2.08594 12.0859 2.91927 12.0859 2.91927"
        stroke={color}
        strokeWidth="0.833333"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TrashIcon;
