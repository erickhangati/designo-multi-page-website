import React from "react";

import ContactHero from "./ContactHero/ContactHero";
import Locations from "../OurCompany/Locations/Locations";
import { useActionData } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <ContactHero />

      {/* LOCATIONS SECTION */}
      <Locations />
    </>
  );
};

export default Contact;
