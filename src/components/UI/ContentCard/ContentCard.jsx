import React from "react";

import styles from "./ContentCard.module.scss";

const ContentCard = ({
  children,
  title,
  description,
  className,
  cardDescription,
}) => {
  // CARD CLASSES
  const classes = `${styles["content-card"]}${
    className ? ` ${className}` : ""
  }`;

  // DESCRIPTION CLASSES
  const descriptionClasses = `${styles["content-card__description"]}${
    cardDescription ? ` ${cardDescription}` : ""
  }`;

  return (
    <article className={classes}>
      {/* RENDER CHILDREN ELEMENTS */}
      {children}

      {/* RENDER DESCRIPTION */}
      <div className={descriptionClasses}>
        <h2>{title}</h2>
        <div className={styles["content-card__text"]}>
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ContentCard;
