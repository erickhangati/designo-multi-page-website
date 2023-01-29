import React from "react";
import ReactDom from "react-dom";

import Pattern1 from "../Patterns/Pattern1";
import Pattern3 from "../Patterns/Pattern3";

import styles from "./AboutBackgrounds.module.scss";

const AboutBackgrounds = () => {
  return (
    <>
      {ReactDom.createPortal(
        <Pattern1 className={styles["pattern-1"]} />,
        document.getElementById("about-background-pattern-1")
      )}
      ,
      {ReactDom.createPortal(
        <Pattern3 className={styles["pattern-2"]} />,
        document.getElementById("about-background-pattern-2")
      )}
    </>
  );
};

export default AboutBackgrounds;
