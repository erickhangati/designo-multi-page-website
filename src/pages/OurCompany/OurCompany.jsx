import React from "react";

import Hero from "../../components/UI/Hero/Hero";
import HeroDetails, { HeroDetailsText } from "./HeroDetails";
import Locations from "./Locations/Locations";
import WorldClassTarget from "./WorldClassTalent/WorldClassTarget";
import RealDeal from "./RealDeal/RealDeal";
import AboutBackgrounds from "../../components/UI/BackgroundPatterns/AboutBackgrounds/AboutBackgrounds";

import styles from "./OurCompany.module.scss";

const OurCompany = () => {
  return (
    <section className={styles["our-company"]}>
      {/* RENDER HERO */}
      <Hero
        title={HeroDetailsText.title}
        description={HeroDetailsText.description}
        className={styles["our-company__hero"]}
      >
        {/* HERO IMAGE */}
        <HeroDetails />
      </Hero>

      {/* WORLD CLASS TARGET SECTION */}
      <WorldClassTarget />

      {/* LOCATIONS SECTION */}
      <Locations />

      {/* REAL DEAL SECTION */}
      <RealDeal />

      <AboutBackgrounds />
    </section>
  );
};

export default OurCompany;
