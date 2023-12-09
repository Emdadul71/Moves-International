import React from "react";
import Hero from "./hero";
import ReadyToGo from "../@common/ready-to-go";
import LeadForm from "../services/details/@components/lead-form";

const VirtualCounselling = () => {
  return (
    <>
      <Hero />
      <LeadForm />
      <ReadyToGo />
    </>
  );
};

export default VirtualCounselling;
