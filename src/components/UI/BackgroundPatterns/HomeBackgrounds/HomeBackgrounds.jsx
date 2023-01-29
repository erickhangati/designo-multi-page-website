import React from "react";
import ReactDOM from "react-dom";

import Pattern1 from "../Patterns/Pattern1";
import Pattern2 from "../Patterns/Pattern2";

import styles from "./HomeBackgrounds.module.scss";

const HomeBackgrounds = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Pattern1 className={styles["pattern-1"]} />,
        document.getElementById("home-background-pattern-1")
      )}
      ,
      {ReactDOM.createPortal(
        <Pattern2 className={styles["pattern-2"]} />,
        document.getElementById("home-background-pattern-2")
      )}
    </>
  );
};

export default HomeBackgrounds;
