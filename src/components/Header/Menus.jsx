import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Menus.module.scss";

const Menus = ({ className, mobileMenuClickHandler }) => {
  const classes = `${styles.menus}${className ? ` ${className}` : ""}`;

  // RENDER MENU LINKS
  return (
    <ul className={classes}>
      <li>
        <NavLink
          to="/our-company"
          className={(isActive) => (isActive ? styles.active : undefined)}
          onClick={mobileMenuClickHandler}
        >
          OUR COMPANY
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/locations"
          className={(isActive) => (isActive ? styles.active : undefined)}
          onClick={mobileMenuClickHandler}
        >
          LOCATIONS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={(isActive) => (isActive ? styles.active : undefined)}
          onClick={mobileMenuClickHandler}
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
};

export default Menus;
