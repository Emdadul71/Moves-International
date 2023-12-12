import React from "react";
import ServiceHero from "../@components/services-hero";
import CounsellingAndSupport from "../@components/counselling-and-support";
import AustraliaImmigration from "./@components/australia-immigration";
import LeadForm from "../@components/lead-form";
import OtherService from "../templete-one/@components/other-services";
import ReadyToGo from "@/modules/@common/ready-to-go";

const ServiceDetailsTempleteMigration = ({ data, params }: any) => {
  return (
    <>
      <ServiceHero data={data} params={params} />
      <CounsellingAndSupport data={data} />
      <AustraliaImmigration data={data} />
      <LeadForm classes={{ root: `!bg-white` }} />
      <OtherService data={data} />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsTempleteMigration;
