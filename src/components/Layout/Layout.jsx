import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./Layout.module.scss";

const Layout = () => {
  const { pathname } = useLocation();

  // SCROLL TO TOP WHEN LINKING TO DIFFERENT ROUTE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    </div>
  );
};

export default Layout;
