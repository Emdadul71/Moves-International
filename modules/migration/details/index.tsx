import React from "react";
import MigrationHero from "../@components/migration-hero";
import MigrationDetailInfo from "../@components/migration-detail-info";
import KeyAdvantage from "../../services/details/@components/key-advantage";
import Faq from "@/modules/@common/faq";
import ReadyToGo from "@/modules/@common/ready-to-go";
import Benefits from "../@components/benefit";
import Process from "../@components/application-process";
import ExpertAdmission from "@/modules/home/expert-admission";
import LeadForm from "@/modules/services/details/@components/lead-form";
import Eligibility from "@/modules/@common/eligibility";
import ApplicationProcess from "../@components/application-process";

const MigrationDetails = ({ data, params }: any) => {
  return (
    <>
      <MigrationHero data={data} params={params} />
      <MigrationDetailInfo data={data} />
      <Benefits data={data} />
      <ApplicationProcess data={data} />
      {/* <KeyAdvantage data={data} /> */}
      <LeadForm />
      <Faq data={data} />
      <ReadyToGo />
    </>
  );
};

export default MigrationDetails;
