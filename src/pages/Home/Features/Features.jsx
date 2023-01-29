import React from "react";

import featuresDetails from "./featuredDetails";
import FeatureItem from "./FeatureItem";

import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section className={styles.features}>
      {featuresDetails.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </section>
  );
};

export default Features;
