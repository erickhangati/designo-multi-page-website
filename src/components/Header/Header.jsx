import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoDark from "../Logo/LogoDark";
import MobileMenuOpenIcon from "./MobileMenuOpenIcon";
import MobileMenuCloseIcon from "./MobileMenuCloseIcon";
import MobileMenuOverlay from "./MobileMenuOverlay";
import Menus from "./Menus";

import styles from "./Header.module.scss";

const Header = () => {
  // OPEN/CLOSE MOBILE MENU STATE
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // TOGGLE MOBILE MENU
  const mobileMenuClickHandler = () =>
    setOpenMobileMenu((previousState) => !previousState);

  return (
    <header className={styles.header}>
      {/* RENDER LOGO */}
      <Link to="/">
        <LogoDark />
      </Link>

      {/* RENDER MENU LINKS */}
      <Menus />

      {/* RENDER OPEN MOBILE MENU ICON */}
      {!openMobileMenu && (
        <MobileMenuOpenIcon
          className={styles["open-icon"]}
          onClick={mobileMenuClickHandler}
        />
      )}

      {/* RENDER CLOSE MOBILE MENU ICON */}
      {openMobileMenu && (
        <MobileMenuCloseIcon
          className={styles["close-icon"]}
          onClick={mobileMenuClickHandler}
        />
      )}

      {/* RENDER MOBILE MENU OVERLAY */}
      {openMobileMenu && (
        <MobileMenuOverlay mobileMenuClickHandler={mobileMenuClickHandler} />
      )}
    </header>
  );
};

export default Header;
