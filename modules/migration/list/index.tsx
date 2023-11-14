import React from "react";
import MigrationHero from "../@components/migration-hero";
import SectionVisaIssued from "../@components/section-visa-issued";
import MoreInfo from "../@components/more-info";
import LeadsAndSales from "@/modules/home/leads-and-sales";
import ReadyToGo from "@/modules/@common/ready-to-go";

const MigrationList = ({ data }: any) => {
  return (
    <>
      <MigrationHero data={data} />
      <SectionVisaIssued data={data} />
      <LeadsAndSales />
      <MoreInfo data={data} />
      <ReadyToGo />
    </>
  );
};

export default MigrationList;
