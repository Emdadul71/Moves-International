import React from "react";
import MigrationHero from "../@components/migration-hero";
import MigrationDetailInfo from "../@components/migration-detail-info";
import Eligibility from "../@components/eligibility";
import KeyAdvantage from "../@components/key-advantage";
import Faq from "@/modules/@common/faq";
import ReadyToGo from "@/modules/@common/ready-to-go";

const MigrationDetails = ({ data }: any) => {
  return (
    <>
      <MigrationHero data={data} />
      <MigrationDetailInfo data={data} />
      <Eligibility data={data} />
      <KeyAdvantage data={data} />
      <Faq />
      <ReadyToGo />
    </>
  );
};

export default MigrationDetails;
