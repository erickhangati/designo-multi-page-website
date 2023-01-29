import React from "react";

import Card from "../../../components/UI/Card/Card";

const PortfolioCard = ({ portfolio, className }) => {
  return (
    // RENDER PORTFOLIO CARD
    <Card
      className={className}
      name={portfolio.name}
      to={`/portfolio/${portfolio.slug}`}
    />
  );
};

export default PortfolioCard;
