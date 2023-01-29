import React, { useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";
import ScrollToTopIcon from "./ScrollToTopIcon";

const Layout = () => {
  const { pathname } = useLocation();

  // SROLL TO THE TOP ICON CLICK HANDLER
  const scrollToTopHandler = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  // SCROLL TO TOP WHEN LINKING TO DIFFERENT ROUTE
  useEffect(() => {
    scrollToTopHandler();
  }, [pathname, scrollToTopHandler]);

  return (
    <div className={styles.layout}>
      {/* RENDER HEADER */}
      <Header />

      {/* RENDER PAGE CONTENT/CHILDREN */}
      <main>
        <Outlet />
      </main>

      {/* RENDER FOOTER */}
      <Footer />

      {/* RENDER SCROLL TO TOP ICON */}
      <ScrollToTopIcon onClick={scrollToTopHandler} />
    </div>
  );
};

export default Layout;
