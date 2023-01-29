import React from "react";
import ReactDOM from "react-dom";

import Menus from "./Menus";

import styles from "./MobileMenuOverlay.module.scss";

// BACKDROP OVERLAY
const Backdrop = () => <div className={styles.backdrop} />;

// MOBILE MENU
const ModalOverlay = ({ mobileMenuClickHandler }) => {
  return (
    <div className={styles["modal-overlay"]}>
      <Menus
        className={styles["modal-overlay__menus"]}
        mobileMenuClickHandler={mobileMenuClickHandler}
      />
    </div>
  );
};

// MODAL OVERLAY
const MobileMenuOverlay = ({ mobileMenuClickHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay mobileMenuClickHandler={mobileMenuClickHandler} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default MobileMenuOverlay;
