import React from "react";

import heroDetais from "./heroDetails";
import Hero from "../../../components/UI/Hero/Hero";
import ContactForm from "../ContactForm/ContactForm";

import styles from "./ContactHero.module.scss";

const ContactHero = () => {
  return (
    <section className={styles["contact-hero"]}>
      <Hero title={heroDetais.title} description={heroDetais.description}>
        {/* CONTACT FORM */}
        <ContactForm />
      </Hero>
    </section>
  );
};

export default ContactHero;
