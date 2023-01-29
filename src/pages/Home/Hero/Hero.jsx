import React from "react";

import Button from "../../../components/UI/Buttons/Button";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <article className={styles.hero}>
      {/* RENDER HERO DESCRIPTIONS */}
      <div className={styles["hero__description"]}>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button to="our-company">Learn More</Button>
      </div>

      {/* RENDER HERO IMAGE */}
      <picture className={styles["hero__image"]}>
        <source
          srcSet="/src/pages/Home/Hero/hero-phone.png 1x"
          media="(max-width: 90em)"
        />
        <img srcSet="/src/pages/Home/Hero/hero-phone.png" />
      </picture>
    </article>
  );
};

export default Hero;
