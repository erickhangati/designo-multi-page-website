import React from "react";

import worldClassTargetImgDesktop from "../images/desktop/image-world-class-talent.jpg";
import worldClassTargetImgTablet from "../images/tablet/image-world-class-talent.jpg";
import worldClassTargetImgPhone from "../images/phone/image-world-class-talent.jpg";

// CARD DETAILS
export const worldClassTargetText = {
  title: "World-class talent",
  description: [
    "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
    "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
  ],
};

const WorldClassTargetDetails = () => {
  return (
    // CARD IMAGE
    <picture>
      <source srcSet={worldClassTargetImgDesktop} media="(max-width: 90em)" />
      <source srcSet={worldClassTargetImgTablet} media="(max-width: 48em)" />
      <source srcSet={worldClassTargetImgPhone} media="(max-width: 28.63em)" />
      <img srcSet={worldClassTargetImgDesktop} alt="Wall Pictures" />
    </picture>
  );
};

export default WorldClassTargetDetails;
