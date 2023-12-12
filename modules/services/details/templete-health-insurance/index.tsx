import React from "react";
import ServiceHero from "../@components/services-hero";
import CounsellingAndSupport from "../@components/counselling-and-support";
import WhatIsOSHC from "./@components/what-is-oshc";
import CoveredOVHC from "./@components/covered-ovhc";
import BenefitOfOSHC from "./@components/benefit-of-oshc";
import PartnerInHealthCoverage from "./@components/partner-in-health";
import ReadyToGo from "@/modules/@common/ready-to-go";
import LeadForm from "../@components/lead-form";
import OtherService from "../templete-one/@components/other-services";

const ServiceDetailsTempleteHealthInsurance = ({ data, params }: any) => {
  return (
    <>
      <ServiceHero data={data} params={params} />
      <CounsellingAndSupport data={data} />
      <WhatIsOSHC data={data} />
      <CoveredOVHC data={data} />
      <BenefitOfOSHC data={data} />
      <PartnerInHealthCoverage data={data} />
      <LeadForm />
      <OtherService data={data} classes={{ root: `pt-5 lg:pt-[80px]` }} />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsTempleteHealthInsurance;
