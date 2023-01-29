import React from "react";

import styles from "./Patterns.module.scss";

// BACKGROUND PATTERN COMPONENT
const Pattern2 = ({ className }) => {
  const classes = `${styles.pattern}${className ? ` ${className}` : ""}`;

  return (
    <svg
      width="610"
      height="594"
      viewBox="0 0 610 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        opacity="0.502255"
        d="M0 297C0 132.971 132.971 0 297 0H709C873.029 0 1006 132.971 1006 297V297C1006 461.029 873.029 594 709 594H0V297Z"
        fill="#F1F3F5"
      />
    </svg>
  );
};

export default Pattern2;
