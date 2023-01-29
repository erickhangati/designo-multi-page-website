import React from "react";

import PortfolioItem from "../PortfolioItem/PortfolioItem";

import styles from "./PortfolioItems.module.scss";

const PortfolioItems = ({ portfolioItems }) => {
  return (
    <section className={styles["portfolio-items"]}>
      {/* LOOP PORTFOLIO ITEMS TO RENDER EACH ITEM */}
      {portfolioItems.map((portfolioItem, index) => (
        <PortfolioItem key={index} portfolioItem={portfolioItem} />
      ))}
    </section>
  );
};

export default PortfolioItems;
