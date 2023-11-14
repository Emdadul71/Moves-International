import Image from "next/image";
import React from "react";
import AboutUsHero from "./hero";
import OurStory from "./our-story";
import AboutAgency from "./about-agency";
import MessageFromCeo from "./message-from-ceo";
import Team from "./team";
import WebStories from "../home/web-stories";
import OurPartners from "../@common/our-partners";
import ReadyToGo from "../@common/ready-to-go";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <OurStory />
      <AboutAgency />
      <MessageFromCeo />
      <Team />
      <WebStories />
      <OurPartners />
      <ReadyToGo />
    </>
  );
};

export default AboutUs;
