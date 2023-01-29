import React from "react";

import ErorIllustration from "./ErrorIllustration";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/UI/Buttons/Button";

import styles from "./Error.module.scss";

const Error = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.error}>
          <div className={styles["error__description"]}>
            <h1>Page Not Found</h1>
            <p>
              You must have accessed a URL that does not exist on this website.
            </p>
            <Button to="/">Go To Homepage</Button>
          </div>
          <div className={styles["error__illustration"]}>
            <ErorIllustration />
            <h2>404</h2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error;
