import CallToAction from "@/modules/@common/call_to_action";
import ReadyToGo from "@/modules/@common/ready-to-go";
import CounsellingAndSupport from "../@components/counselling-and-support";
import LeadForm from "../@components/lead-form";
import ServiceHero from "../@components/services-hero";
import HowItWorks from "./@components/how-it-works";
import OtherService from "./@components/other-services";
import ReadyToBegin from "./@components/ready-to-begin";

const ServiceDetailsTempleteOne = ({ data, params }: any) => {
  return (
    <>
      <ServiceHero data={data} params={params} />
      <CounsellingAndSupport data={data} />
      <CallToAction />
      <HowItWorks data={data} />
      <ReadyToBegin data={data} />
      <LeadForm />
      <OtherService data={data} classes={{ root: `pt-5 lg:pt-[80px]` }} />
      <ReadyToGo />
    </>
  );
};

export default ServiceDetailsTempleteOne;
