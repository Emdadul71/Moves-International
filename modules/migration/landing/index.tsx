import React from "react";
import MigrationHero from "../@components/migration-hero";
import AustraliaImmigration from "../@components/australia-immigration";
import ReadyToGo from "@/modules/@common/ready-to-go";
import MigrationLandingHero from "../@components/migration-landing-hero";

const MigrationLanding = () => {
  return (
    <>
      <MigrationLandingHero />
      <section>
        <div className="container">
          <div className="max-w-[850px] w-full mx-auto">
            <p className="text-center mb-5">
              Moves International is the one-stop solution provider for numerous
              kinds of immigration services and Australian visas. Our
              knowledgeable team of registered migration agents is well-versed
              in all legalities, protocols, procedures, practices and
              immigration process for Australia Permanent Residency. They guide
              aspirants through every stage of the journey of immigration with
              customised solutions.
            </p>
            <p className="text-center">
              We also provide Student Visa services for Australia, enabling them
              to pursue their education in eminent colleges across the globe.
              Moves International has made its name over the years in the
              immigration industry by providing stellar services consistently,
              year after year, and by always exceeding customer expectations. It
              is the ultimate destination for those who want to MIGRATE TO
              AUSTRALIA or work or settle down there.Note: Migration Lawyer
              Australia offers precise legal counsel on immigration matters. For
              expert visa guidance, turn to our Visa Consultants Australia.
            </p>
          </div>
        </div>
      </section>
      <AustraliaImmigration />
      <ReadyToGo />
    </>
  );
};

export default MigrationLanding;
