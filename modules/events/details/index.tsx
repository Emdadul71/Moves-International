"use client";
import React from "react";
import EventDetailHero from "./@components/details-hero";
import { useRef } from "react";
import EventAbout from "./@components/about";
import ParticipantForm from "./@components/participant-form";
import EventMap from "./@components/map";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import RecentEvent from "@/modules/@common/recent_event";
import WebStories from "@/modules/home/web-stories";
import ReadyToGo from "@/modules/@common/ready-to-go";

const EventsDetails = ({ data }: any) => {
  const locationRef = useRef(null);
  const booknowRef = useRef(null);
  return (
    <>
      <EventDetailHero booknowRef={booknowRef} data={data} />
      <EventAbout
        data={data}
        locationRef={locationRef}
        booknowRef={booknowRef}
      />
      <ParticipantForm data={data} booknowRef={booknowRef} />
      <EventMap data={data} locationRef={locationRef} />
      <QualityAndPrestigious classes={{ root: `pt-5 lg:pt-[80px]` }} />
      <RecentEvent classes={{ root: "!bg-white !mb-0" }} />
      <WebStories />
      <ReadyToGo />
    </>
  );
};

export default EventsDetails;
