import React from "react";

import locationDetails from "./LocationsDetails";
import LocationItem from "./LocationItem/LocationItem";

import styles from "./Locations.module.scss";

const Locations = () => {
  return (
    <section className={styles.locations}>
      {/* LOOP LOCATION DETAILS TO RENDER LOCATION ITEMS */}
      {locationDetails.map((location, index) => (
        <LocationItem key={index} location={location} />
      ))}
    </section>
  );
};

export default Locations;
