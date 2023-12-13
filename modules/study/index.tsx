import React from "react";
import StudyLandingHero from "./hero";
import OurPartners from "../@common/our-partners";
import LeadForm from "../services/details/@components/lead-form";
import WebStories from "../home/web-stories";
import ReadyToGo from "../@common/ready-to-go";
import StudyFeature from "./study-feature";
import WhyStudy from "./why-study";
import CourseInfo from "../courses/top-courses/@components/course-info";
import RegistrationProcess from "./registration-process";
import SectionFaq from "./section-faq";

const Study = () => {
  return (
    <>
      <StudyLandingHero />
      <StudyFeature />
      <WhyStudy />
      <CourseInfo />
      <OurPartners classes={{ root: `bg-grey pt-[50px]` }} />
      <RegistrationProcess />
      <LeadForm />
      <WebStories />
      <SectionFaq />
      <ReadyToGo />
    </>
  );
};

export default Study;
