import React from "react";
import { useParams } from "react-router-dom";

import portfolioDetails from "../../pages/Home/Portfolio/portfolioDetails";
import Heading from "./Heading/Heading";
import PortfolioItems from "./PortfolioItems/PortfolioItems";
import RelatedPortfolio from "./RelatedPortfolio/RelatedPortfolio";
import PortfolioBackgrounds from "../../components/UI/BackgroundPatterns/PortfolioBackgrounds/PortfolioBackgrounds";

const Portfolio = () => {
  // GET PAGE PARAMETER
  const { slug } = useParams();

  // GET PORFOLIO DETAILS USING PAGE SLUG
  const portfolio = portfolioDetails.find(
    (portfolio) => portfolio.slug === slug
  );

  // GET RELATED OTHER PORTFOLIOS
  const relatedPortfolio = portfolioDetails.filter(
    (portfolio) => portfolio.slug !== slug
  );

  return (
    <>
      {/* RENDER PAGE HEADING */}
      <Heading name={portfolio.name} description={portfolio.description} />

      {/* RENDER PORTFOLIO ITEMS */}
      <PortfolioItems portfolioItems={portfolio.jobs} />

      {/* RENDER RELATED PORTFOLIO */}
      <RelatedPortfolio relatedPortfolio={relatedPortfolio} />

      {/* RENDER PATTERN 1 */}
      <PortfolioBackgrounds />
    </>
  );
};

export default Portfolio;
