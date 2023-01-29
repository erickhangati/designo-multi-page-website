import React from "react";
import ReactDOM from "react-dom";

import Pattern1 from "../Patterns/Pattern1";

import styles from "./PortfolioBackgrounds.module.scss";

const PortfolioBackgrounds = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Pattern1 className={styles["pattern-1"]} />,
        document.getElementById("portfolio-background-pattern")
      )}
    </>
  );
};

export default PortfolioBackgrounds;
