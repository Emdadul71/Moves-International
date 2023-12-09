import React from "react";
import ServiceHero from "../@components/services-hero";
import ServiceDetailInfo from "../@components/service-detail-info";
import Eligibility from "@/modules/@common/eligibility";
import KeyAdvantage from "../@components/key-advantage";
import Faq from "@/modules/@common/faq";
import Provider from "../@components/provider-service";
import ProviderService from "../@components/provider-service";
import ServiceSection from "../@components/services-section";

const ServiceDetailsTempleteRPL = ({ data }: any) => {
  return (
    <>
      <ServiceHero data={data} />
      <ServiceDetailInfo data={data} />
      <Eligibility data={data} />
      <KeyAdvantage data={data} />
      <ProviderService />
      <ServiceSection />
      <Faq data={data} />
    </>
  );
};

export default ServiceDetailsTempleteRPL;
