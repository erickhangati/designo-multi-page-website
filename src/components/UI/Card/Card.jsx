import React from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

const Card = ({ name, to, className }) => {
  const classes = `${styles.card}${className ? ` ${className}` : ""}`;

  return (
    <article className={classes}>
      <h2>{name}</h2>
      <Link to={to}>
        <span>View Projects</span>
      </Link>
    </article>
  );
};

export default Card;
