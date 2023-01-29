import React from "react";

import Container from "../../UI/Container/Container";
import Button from "../../UI/Buttons/Button";

import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <Container className={styles.cta}>
      {/* CTA DESCRIPTION */}
      <h2>Let’s talk about your project</h2>
      <p>
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>

      {/* CTA BUTTON */}
      <Button to="/contact">Get In Touch</Button>
    </Container>
  );
};

export default CTA;
