import React from "react";
import { Link } from "react-router-dom";

import LogoLight from "../Logo/LogoLight";
import Menus from "../Header/Menus";
import ContactDetails from "./ContactDetails";
import CTA from "./CTA/CTA";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        {/* RENDER CTA */}
        <CTA />

        <div className={styles["footer__header"]}>
          {/* RENDER FOOTER LOGO */}
          <Link to="/">
            <LogoLight />
          </Link>

          {/* RENDER HORIZONTAL RULE */}
          <hr />

          {/* RENDER FOOTER MENUS */}
          <Menus className={styles["footer__menus"]} />
        </div>

        {/* RENDER CONTACT DETAILS */}
        <ContactDetails />
      </footer>
    </div>
  );
};

export default Footer;
