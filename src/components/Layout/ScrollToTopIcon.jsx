import React from "react";

import styles from "./ScrollToTopIcon.module.scss";

const ScrollToTopIcon = ({ onClick }) => {
  return (
    <svg
      fill="#e7816b"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      id="up-arrow-circle"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className={styles["scroll-to-top-icon"]}
      onClick={onClick}
    >
      <circle
        id="primary"
        cx="12"
        cy="12"
        r="10"
        // style={{ fill: "rgb(231, 129, 107)" }}
      ></circle>
      <path
        id="secondary"
        d="M14.83,9.5,12.69,6.38a.82.82,0,0,0-1.38,0L9.17,9.5A1,1,0,0,0,9.86,11H11v6a1,1,0,0,0,2,0V11h1.14A1,1,0,0,0,14.83,9.5Z"
        style={{ fill: "rgb(255, 255, 255)" }}
      ></path>
    </svg>
  );
};

export default ScrollToTopIcon;
