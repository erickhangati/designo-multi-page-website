import React from "react";

import portfolioDetails from "./portfolioDetails";
import PortfolioCard from "./PortfolioCard";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      {/* LOOP PORTFOLIO DETAILS TO RENDER PORTFOLIO CARDS */}
      {portfolioDetails.map((portfolio, index) => (
        <PortfolioCard
          key={index}
          portfolio={portfolio}
          className={styles[`${portfolio.slug}`]}
        />
      ))}
    </section>
  );
};

export default Portfolio;
