import Faq from "@/modules/@common/faq";
import Process from "@/modules/migration/@components/application-process";
import Recognition from "../@components/recognition";
import RplHero from "../@components/rpl-hero";
import RplIndustries from "../@components/rpl-industries";
import RPLKeyAdvantage from "../@components/rpl-key-advantage";
import WhoUse from "../@components/who-use";
import RPLCertificate from "../rpl-certificate";
import ReadyToGo from "@/modules/@common/ready-to-go";
import LeadForm from "../@components/lead-form";

const ServiceDetailsTempleteRPL = ({ data, params }: any) => {
  return (
    <>
      <RplHero data={data} params={params} />
      <RPLCertificate data={data} />
      <Recognition />
      <Process data={data} />
      <RPLKeyAdvantage data={data} />
      <WhoUse data={data} />
      <RplIndustries data={data} />
      <LeadForm />
      <Faq data={data} />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsTempleteRPL;
