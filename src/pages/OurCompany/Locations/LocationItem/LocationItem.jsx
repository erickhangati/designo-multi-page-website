import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Button from "../../../../components/UI/Buttons/Button";

import styles from "./LocationItem.module.scss";

const LocationItem = ({ location }) => {
  const navigate = useNavigate();

  return (
    <article className={styles["location-item"]}>
      {/* ILLUSTRATION */}
      <location.illustration />

      {/* CTA */}
      <div className={styles["location-item__cta"]}>
        <h2>{location.title}</h2>

        <HashLink
          to={location.path}
          scroll={(el) => el.scrollIntoView({ block: "center" })}
        >
          See Location
        </HashLink>
      </div>
    </article>
  );
};

export default LocationItem;
