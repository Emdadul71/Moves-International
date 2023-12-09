import React from "react";
import ServiceHero from "../services-hero";
import CounsellingAndSupport from "../counselling-and-support";
import LeadForm from "../lead-form";
import HowItWorks from "../how-it-works";
import ServiceMore from "../service-more";
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
