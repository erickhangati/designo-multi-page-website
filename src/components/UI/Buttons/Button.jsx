import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = ({ children, to, className, dark }) => {
  const classes = `${styles.link}${className ? ` ${className}` : ""}`;

  return (
    <Link to={to} className={classes}>
      <div className={dark ? styles.dark : undefined}>{children}</div>
    </Link>
  );
};

export default Button;
