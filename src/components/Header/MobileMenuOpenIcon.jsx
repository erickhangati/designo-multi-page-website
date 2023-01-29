import React from "react";

const MobileMenuOpenIcon = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g>
        <rect width="24" height="4" fill="#1D1C1E" />
        <rect y="8" width="24" height="4" fill="#1D1C1E" />
        <rect y="16" width="24" height="4" fill="#1D1C1E" />
      </g>
    </svg>
  );
};

export default MobileMenuOpenIcon;
