import React from "react";
import ServiceHero from "../@components/services-hero";
import Eligibility from "@/modules/@common/eligibility";
import CounsellingAndSupport from "../@components/counselling-and-support";
import Recognition from "../@components/recognition";
import LeadForm from "../@components/lead-form";
import OtherService from "../templete-one/@components/other-services";
import ReadyToGo from "@/modules/@common/ready-to-go";

const ServiceDetailsCareerCounselling = ({ data, params }: any) => {
  return (
    <>
      <ServiceHero data={data} params={params} />
      <CounsellingAndSupport data={data} />
      <Eligibility data={data} />
      <Recognition />
      <LeadForm classes={{ root: `!bg-white` }} />
      <OtherService data={data} />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsCareerCounselling;
