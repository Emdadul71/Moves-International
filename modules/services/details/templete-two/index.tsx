import React from "react";
import ServiceHero from "../@components/services-hero";
import ServiceDetailInfo from "../@components/service-detail-info";
import Eligibility from "@/modules/@common/eligibility";
import KeyAdvantage from "../@components/key-advantage";
import Faq from "@/modules/@common/faq";
import Provider from "../@components/provider-service";
import ProviderService from "../@components/provider-service";
import ServiceSection from "../@components/services-section";
import LeadForm from "../@components/lead-form";
import ReadyToGo from "@/modules/@common/ready-to-go";

const ServiceDetailsTempleteTwo = ({ data, params }: any) => {
  return (
    <>
      <ServiceHero data={data} params={params} />
      <ServiceDetailInfo data={data} />
      <Eligibility data={data} />
      <KeyAdvantage data={data} />
      <ProviderService />
      <ServiceSection data={data} />
      <LeadForm />
      <Faq data={data} classes={{ root: `pt-5 lg:pt-[80px]` }} />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsTempleteTwo;
