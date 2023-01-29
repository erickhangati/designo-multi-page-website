import React from "react";

import Container from "../../../components/UI/Container/Container";

import styles from "./Heading.module.scss";

const Heading = ({ name, description }) => {
  return (
    <Container className={styles.heading}>
      <h2>{name}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default Heading;
