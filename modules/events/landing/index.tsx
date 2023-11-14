import React from "react";
import EventHero from "./@components/event-hero";
import EventSection from "./@components/event-section";
import AboutMovesInt from "@/modules/home/about-moves-int";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import WebStories from "@/modules/home/web-stories";
import ReadyToGo from "@/modules/@common/ready-to-go";

const EventsLanding = () => {
  return (
    <>
      <EventHero />
      <EventSection />
      <AboutMovesInt />
      <QualityAndPrestigious classes={{ root: `pt-5 lg:pt-[80px]` }} />
      <WebStories />
      <ReadyToGo />
    </>
  );
};

export default EventsLanding;
