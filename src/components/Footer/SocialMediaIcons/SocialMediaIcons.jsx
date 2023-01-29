import React from "react";

import { Link } from "react-router-dom";

import FacebookIcon from "./FacebookIcon";
import YouTubeIcon from "./YouTubeIcon";
import TwitterIcon from "./TwitterIcon";
import PinterestIcon from "./PinterestIcon";
import InstagramIcon from "./InstagramIcon";

import styles from "./SocialMediaIcons.module.scss";

const SocialMediaIcons = ({ className }) => {
  const classes = `${styles["social-media-icons"]}${
    className ? ` ${className}` : ""
  }`;

  return (
    <div className={classes}>
      {/* RENDER SOCIAL ICONS */}

      <a href="https://www.facebook.com/" target="_blank">
        <FacebookIcon />
      </a>

      <a href="https://www.youtube.com/" target="_blank">
        <YouTubeIcon />
      </a>

      <a href="https://www.twitter.com/" target="_blank">
        <TwitterIcon />
      </a>

      <a href="https://www.pinterest.com/" target="_blank">
        <PinterestIcon />
      </a>

      <a href="https://www.instagram.com/" target="_blank">
        <InstagramIcon />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
