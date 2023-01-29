import React from "react";

import ContentCard from "../../../components/UI/ContentCard/ContentCard";
import WorldClassTargetDetails, {
  worldClassTargetText,
} from "./WorldClassTargetDetails";

import styles from "./WorldClassTarget.module.scss";

const WorldClassTarget = () => {
  return (
    <section className={styles["world-class-target"]}>
      <ContentCard
        title={worldClassTargetText.title}
        description={worldClassTargetText.description}
      >
        <WorldClassTargetDetails />
      </ContentCard>
    </section>
  );
};

export default WorldClassTarget;
