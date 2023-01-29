import React from "react";

import realDealImgDesktop from "../images/desktop/image-real-deal.jpg";
import realDealImgTablet from "../images/tablet/image-real-deal.jpg";
import realDealImgPhone from "../images/phone/image-real-deal.jpg";

// CARD DETAILS
export const realDealText = {
  title: "The real deal",
  description: [
    "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
    "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
  ],
};

const RealDealDetails = () => {
  return (
    // CARD IMAGE
    <picture>
      <source srcSet={realDealImgDesktop} media="(max-width: 90em)" />
      <source srcSet={realDealImgTablet} media="(max-width: 48em)" />
      <source srcSet={realDealImgPhone} media="(max-width: 28.63em)" />
      <img srcSet={realDealImgDesktop} alt="Wall Pictures" />
    </picture>
  );
};

export default RealDealDetails;
