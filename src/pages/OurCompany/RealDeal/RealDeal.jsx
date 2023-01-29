import React from "react";

import ContentCard from "../../../components/UI/ContentCard/ContentCard";
import RealDetails, { realDealText } from "./RealDealDetails";

import styles from "./RealDeal.module.scss";

const RealDeal = () => {
  return (
    <section className={styles["real-deal"]}>
      <ContentCard
        title={realDealText.title}
        description={realDealText.description}
        cardDescription={styles["real-deal__description"]}
        className={styles["real-deal__card"]}
      >
        <RealDetails />
      </ContentCard>
    </section>
  );
};

export default RealDeal;
