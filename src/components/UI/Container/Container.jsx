import React from "react";

import styles from "./Container.module.scss";

const Container = ({ children, className }) => {
  const classes = `${styles.container}${className ? ` ${className}` : ""}`;
  return <article className={classes}>{children}</article>;
};

export default Container;
