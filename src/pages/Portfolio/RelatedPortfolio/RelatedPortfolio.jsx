import React from "react";

import Card from "../../../components/UI/Card/Card";

import styles from "./RelatedPortfolio.module.scss";

const RelatedPortfolio = ({ relatedPortfolio }) => {
  return (
    <section className={styles["related-portfolio"]}>
      {relatedPortfolio.map((portfolio, index) => (
        <Card
          key={index}
          name={portfolio.name}
          to={`/portfolio/${portfolio.slug}`}
          className={styles[`${portfolio.slug}`]}
        />
      ))}
    </section>
  );
};

export default RelatedPortfolio;
