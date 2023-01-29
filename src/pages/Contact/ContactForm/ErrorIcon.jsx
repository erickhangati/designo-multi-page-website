import React from "react";

const ErrorIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="10" cy="10" r="10" fill="white" />
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z"
            fill="#E7816B"
          />
        </g>
      </g>
    </svg>
  );
};

export default ErrorIcon;
