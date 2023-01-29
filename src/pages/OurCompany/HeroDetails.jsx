import React from "react";

// HERO DETAILS
export const HeroDetailsText = {
  title: "About Us",
  description:
    "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
};

const HeroDetails = () => {
  return (
    <picture>
      <source
        srcSet="/src/pages/OurCompany/images/desktop/image-about-hero.jpg"
        media="(max-width: 90em)"
      />

      <source
        srcSet="/src/pages/OurCompany/images/tablet/image-about-hero.jpg"
        media="(max-width: 48em)"
      />

      <source
        srcSet="/src/pages/OurCompany/images/phone/image-about-hero.jpg"
        media="(max-width: 28.63em)"
      />

      <img
        srcSet="/src/pages/OurCompany/images/desktop/image-about-hero.jpg"
        alt="Boadroom Meeting"
      />
    </picture>
  );
};

export default HeroDetails;
