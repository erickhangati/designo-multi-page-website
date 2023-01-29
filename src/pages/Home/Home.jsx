import React from "react";

import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";
import Features from "./Features/Features";
import HomeBackgrounds from "../../components/UI/BackgroundPatterns/HomeBackgrounds/HomeBackgrounds";

const Home = () => {
  return (
    <>
      {/* RENDER HERO */}
      <Hero />

      {/* RENDER PORTFOLIO SECTION*/}
      <Portfolio />

      {/* RENDER FEATURES SECTION*/}
      <Features />

      {/* RENDER BACKGROUND PATTERN */}
      <HomeBackgrounds />
    </>
  );
};

export default Home;
