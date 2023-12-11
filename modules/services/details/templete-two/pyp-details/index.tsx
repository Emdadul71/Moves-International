import React from "react";
import ServiceHero from "../../@components/services-hero";
import ServiceDetailInfo from "../../@components/service-detail-info";
import Eligibility from "@/modules/@common/eligibility";
import Faq from "@/modules/@common/faq";
import ProviderService from "../../@components/provider-service";
import EligibilityCriteria from "./@components/eligibility-criteria";
import ProgramStructure from "./@components/program-structure";
import ReadyToGo from "@/modules/@common/ready-to-go";
import LeadForm from "../../@components/lead-form";

const PYPDetails = ({ data, params }: any) => {
  return (
    <>
      <ServiceHero data={data} params={params} />
      <ServiceDetailInfo data={data} />
      <Eligibility data={data} />
      <EligibilityCriteria data={data} />
      <ProgramStructure data={data} />
      <ProviderService />
      <LeadForm />
      <Faq data={data} classes={{ root: `pt-5 lg:pt-[80px]` }} />
      <ReadyToGo />
    </>
  );
};

export default PYPDetails;
