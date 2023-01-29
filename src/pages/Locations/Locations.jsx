import React from "react";

import locationDetails from "./locationDetails";
import LocationItem from "./LocationItem/LocationItem";

import styles from "./Locations.module.scss";

const Locations = () => {
  return (
    <section className={styles.locations}>
      {/* LOOP TO RENDER LOCATION ITEMS */}
      {locationDetails.map((location, index) => (
        <LocationItem
          key={location.id}
          location={location}
          position={index + 1}
        />
      ))}
    </section>
  );
};

export default Locations;
