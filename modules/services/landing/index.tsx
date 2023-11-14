import React from "react";
import ServiceLandingHero from "./service-landing-hero";
import OurPartners from "@/modules/@common/our-partners";
import LeadsAndSales from "@/modules/home/leads-and-sales";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import WebStories from "@/modules/home/web-stories";
import ReadyToGo from "@/modules/@common/ready-to-go";
import ExpertConsultency from "./expert-consultency";

const ServiceLanding = () => {
  return (
    <>
      <ServiceLandingHero />
      <ExpertConsultency />
      <OurPartners classes={{ root: `bg-grey pt-5 lg:pt-[50px]` }} />
      <LeadsAndSales />
      <QualityAndPrestigious />
      <WebStories />
      <ReadyToGo />
    </>
  );
};

export default ServiceLanding;
