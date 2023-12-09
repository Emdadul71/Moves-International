import React from "react";
import ServiceHero from "../@components/services-hero";
import CounsellingAndSupport from "../@components/counselling-and-support";
import LeadForm from "../@components/lead-form";
import HowItWorks from "../@components/how-it-works";
import ServiceMore from "../@components/service-more";
import ReadyToGo from "@/modules/@common/ready-to-go";

const ServiceDetailsTempleteOne = ({ data }: any) => {
  return (
    <>
      <ServiceHero data={data} />
      <CounsellingAndSupport data={data} />
      <LeadForm />
      <HowItWorks data={data} />
      <ServiceMore />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsTempleteOne;
