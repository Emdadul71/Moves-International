import Faq from "@/modules/@common/faq";
import Process from "@/modules/migration/@components/process";
import KeyAdvantage from "../@components/key-advantage";
import ProviderService from "../@components/provider-service";
import ServiceHero from "../@components/services-hero";
import ServiceSection from "../@components/services-section";
import RPLKeyAdvantage from "../@components/rpl-key-advantage";
import WhoUse from "../@components/who-use";
import Recognition from "../@components/recognition";
import RPLCertificate from "../rpl-certificate";

const ServiceDetailsTempleteRPL = ({ data }: any) => {
  return (
    <>
      <ServiceHero data={data} />
      <RPLCertificate data={data} />
      <Recognition />
      <Process data={data} />
      <RPLKeyAdvantage data={data} />
      <WhoUse data={data} />
      {/* <ProviderService />
      <ServiceSection /> */}
      <Faq data={data} />
    </>
  );
};

export default ServiceDetailsTempleteRPL;
