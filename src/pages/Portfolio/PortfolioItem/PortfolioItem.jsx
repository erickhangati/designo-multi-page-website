import React from "react";

import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({ portfolioItem }) => {
  return (
    <article className={styles["portfolio-item"]}>
      {/* IMAGE */}
      <img src={portfolioItem.image} alt={portfolioItem.title} />

      {/* DESCRIPTION */}
      <div className={styles["portfolio-item__description"]}>
        <h2>{portfolioItem.title}</h2>
        <p>{portfolioItem.description}</p>
      </div>
    </article>
  );
};

export default PortfolioItem;
