import React from "react";
import ServiceHero from "../services-hero";
import ServiceDetailInfo from "../service-detail-info";
import Eligibility from "@/modules/@common/eligibility";
import KeyAdvantage from "../key-advantage";
import Faq from "@/modules/@common/faq";
import Provider from "../provider-service";
import ProviderService from "../provider-service";
import ServiceSection from "../services-section";

const ServiceDetailsTempleteTwo = ({ data }: any) => {
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

export default ServiceDetailsTempleteTwo;
