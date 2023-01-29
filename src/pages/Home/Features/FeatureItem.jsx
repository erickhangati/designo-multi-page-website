import React from "react";

import styles from "./FeatureItem.module.scss";

const FeatureItem = ({ feature }) => {
  return (
    <article className={styles["feature-item"]}>
      <feature.illustration />
      <div className={styles["feature-item__description"]}>
        <h2>{feature.name}</h2>
        <p>{feature.description}</p>
      </div>
    </article>
  );
};

export default FeatureItem;
