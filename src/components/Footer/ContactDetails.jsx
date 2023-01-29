import React from "react";

import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";

import styles from "./ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <div className={styles["contact-details"]}>
      {/* RENDER CONTACT DETAILS */}
      <div className={styles["contact-details__contacts"]}>
        <h2>Designo Central Office</h2>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>
      <div className={styles["contact-details__contacts"]}>
        <h2>Contact Us (Central Office)</h2>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </div>

      {/* RENDER SOCIAL MEDIA ICONS */}
      <SocialMediaIcons className={styles["contact-details__icons"]} />
    </div>
  );
};

export default ContactDetails;
