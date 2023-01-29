import React from "react";

import styles from "./Patterns.module.scss";

// BACKGROUND PATTERN COMPONENT
const Pattern2 = ({ className }) => {
  const classes = `${styles.pattern}${className ? ` ${className}` : ""}`;

  return (
    <svg
      width="1006"
      height="594"
      viewBox="0 0 1006 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        opacity="0.502255"
        d="M1006 297C1006 461.029 873.029 594 709 594H297C132.971 594 0 461.029 0 297C0 132.971 132.971 0 297 0H1006V297Z"
        fill="#F1F3F5"
      />
    </svg>
  );
};

export default Pattern2;