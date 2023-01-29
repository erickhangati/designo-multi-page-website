import React from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import marker from "./markerIcon.svg";
import styles from "./LocationItem.module.scss";

const LocationItem = ({ location, position }) => {
  // CREATING CUSTOM MARKER
  const markerIcon = new L.Icon({
    iconUrl: marker,
  });

  return (
    <article
      id={location.id}
      className={`${styles["location-item"]}${
        position % 2 === 0 ? ` ${styles.even}` : ""
      }`}
    >
      {/* DETAILS */}
      <div className={styles["location-item__details"]}>
        <h2>{location.name}</h2>

        {/* ADDRESS */}
        <div className={styles["location-item__address"]}>
          <h3>{location.title}</h3>
          <p>{location.address.street}</p>
          <p>{location.address.number}</p>
        </div>

        {/* CONTACTS */}
        <div className={styles["location-item__address"]}>
          <h3>Contact</h3>
          <p>P: {location.contacts.phone}</p>
          <p>M: {location.contacts.email}</p>
        </div>
      </div>

      {/* MAP */}
      <MapContainer
        center={location.coords}
        zoom="12"
        className={styles["location-item__map"]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {/* PIN */}
        <Marker position={location.coords} icon={markerIcon} />
      </MapContainer>
    </article>
  );
};

export default LocationItem;
