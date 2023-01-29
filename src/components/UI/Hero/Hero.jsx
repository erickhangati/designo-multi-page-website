import React from "react";

import styles from "./Hero.module.scss";

const Hero = ({ children, title, description, className }) => {
  const classes = `${styles.hero}${className ? ` ${className}` : ""}`;

  return (
    <article className={classes}>
      {/* HERO DESRIPTION TEXT */}
      <div className={styles["hero__description"]}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {/* OTHER ELEMENTS */}
      {children}
    </article>
  );
};

export default Hero;
