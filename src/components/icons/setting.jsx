import React from "react";

const SettingIcon = ({ size = 26, color = "#C4C4C4", className, ...props }) => {
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
        d="M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.16797 13.9522V12.0456C2.16797 10.9189 3.0888 9.98725 4.2263 9.98725C6.18714 9.98725 6.9888 8.60058 6.00297 6.89975C5.43964 5.92475 5.77547 4.65725 6.7613 4.09391L8.63547 3.02141C9.4913 2.51225 10.5963 2.81558 11.1055 3.67141L11.2246 3.87725C12.1996 5.57808 13.803 5.57808 14.7888 3.87725L14.908 3.67141C15.4171 2.81558 16.5221 2.51225 17.378 3.02141L19.2521 4.09391C20.238 4.65725 20.5738 5.92475 20.0105 6.89975C19.0246 8.60058 19.8263 9.98725 21.7871 9.98725C22.9138 9.98725 23.8455 10.9081 23.8455 12.0456V13.9522C23.8455 15.0789 22.9246 16.0106 21.7871 16.0106C19.8263 16.0106 19.0246 17.3972 20.0105 19.0981C20.5738 20.0839 20.238 21.3406 19.2521 21.9039L17.378 22.9764C16.5221 23.4856 15.4171 23.1822 14.908 22.3264L14.7888 22.1206C13.8138 20.4197 12.2105 20.4197 11.2246 22.1206L11.1055 22.3264C10.5963 23.1822 9.4913 23.4856 8.63547 22.9764L6.7613 21.9039C5.77547 21.3406 5.43964 20.0731 6.00297 19.0981C6.9888 17.3972 6.18714 16.0106 4.2263 16.0106C3.0888 16.0106 2.16797 15.0789 2.16797 13.9522Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingIcon;
