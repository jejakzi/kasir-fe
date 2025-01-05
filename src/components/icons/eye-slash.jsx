import React from "react";

const EyeSlashIcon = ({
  size = 26,
  color = "#C4C4C4",
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M14.5319 9.46992L9.47188 14.5299C8.82188 13.8799 8.42188 12.9899 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C12.9919 8.41992 13.8819 8.81992 14.5319 9.46992Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42188 19.5297C9.56187 20.0097 10.7719 20.2697 12.0019 20.2697C15.5319 20.2697 18.8219 18.1897 21.1119 14.5897C22.0119 13.1797 22.0119 10.8097 21.1119 9.39969C20.7819 8.87969 20.4219 8.38969 20.0519 7.92969"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5114 12.6992C15.2514 14.1092 14.1014 15.2592 12.6914 15.5192"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47 14.5293L2 21.9993"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0013 2L14.5312 9.47"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeSlashIcon;
