import React from "react";
import TopCoursesHero from "../@components/top-courses-hero";
import CounsellingAndSupport from "@/modules/services/details/@components/counselling-and-support";
import KeyReasons from "../@components/key-reasons";
import LeadForm from "@/modules/services/details/@components/lead-form";
import ReadyToGo from "@/modules/@common/ready-to-go";
import Faq from "@/modules/@common/faq";
import VisaOptions from "../@components/visa-options";
import CourseInfo from "../@components/course-info";

interface propTypes {
  data?: any;
  params?: any;
}
const TopCoursesDetails = ({ data, params }: propTypes) => {
  return (
    <>
      <TopCoursesHero data={data} params={params} />
      <CounsellingAndSupport data={data} params={params} />
      <KeyReasons data={data} />
      <CourseInfo data={data} />
      <VisaOptions data={data} />
      <LeadForm classes={{ root: "mb-5 lg:mb-[80px]" }} />
      <Faq data={data} />
      <ReadyToGo />
    </>
  );
};

export default TopCoursesDetails;
