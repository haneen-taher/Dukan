import React from "react";
import HeroImg from "./HeroImg";
import AboutSlider from "./AboutSlider";
import CategoryCard from "./CategoryCard";
import EventsCard from "./Events";
import AboutCard from "./AboutSlider";
import Gallery from "./Gallery";
import ImageFocus from "./GalaryFocus";
function Home() {
  return (
    <>
      <HeroImg />
      <CategoryCard />
      <AboutCard />
      <EventsCard />
      <Gallery />
    </>
  );
}

export default Home;
