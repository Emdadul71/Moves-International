import React from "react";
import MigrationHero from "../@components/migration-hero";
import MigrationDetailInfo from "../@components/migration-detail-info";
import KeyAdvantage from "../../services/details/@components/key-advantage";
import Faq from "@/modules/@common/faq";
import ReadyToGo from "@/modules/@common/ready-to-go";
import Benefits from "../@components/benefit";
import Process from "../@components/process";
import ExpertAdmission from "@/modules/home/expert-admission";
import LeadForm from "@/modules/services/details/@components/lead-form";
import Eligibility from "@/modules/@common/eligibility";

const MigrationDetails = ({ data }: any) => {
  return (
    <>
      <MigrationHero data={data} />
      <MigrationDetailInfo data={data} />
      <Eligibility data={data} />
      <Benefits data={data} />
      <Process data={data} />
      {/* <KeyAdvantage data={data} /> */}
      <LeadForm />
      <Faq data={data} />
      <ReadyToGo />
    </>
  );
};

export default MigrationDetails;
