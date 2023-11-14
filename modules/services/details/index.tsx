import React from "react";
import ServiceHero from "./services-hero";
import CounsellingAndSupport from "./counselling-and-support";
import LeadForm from "./lead-form";
import HowItWorks from "./how-it-works";
import ServiceMore from "./service-more";
import ReadyToGo from "@/modules/@common/ready-to-go";

const ServiceDetails = () => {
  return (
    <>
      <ServiceHero />
      <CounsellingAndSupport />
      <LeadForm />
      <HowItWorks />
      <ServiceMore />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetails;
