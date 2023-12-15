import React from "react";
import AdvantageCard from "../advantage-card";

const EligibilityRequirements = ({ data }: any) => {
  const eligibilityData =
    data && data?.sectionEligibility && data?.sectionEligibility;
  return (
    <>
      {eligibilityData ? (
        <section>
          <div className="container">
            <div className="max-w-[910px] w-full mx-auto mb-5 lg:mb-[60px]">
              <h2 className="text-center mb-5">{eligibilityData?.title}</h2>
              {eligibilityData?.shortDesc ? (
                <p className="text-center text-xl">
                  {eligibilityData?.shortDesc}
                </p>
              ) : null}
            </div>
            <div className="grid lg:grid-cols-4 gap-[30px] mb-5 lg:mb-10">
              {eligibilityData?.eligibility?.map((item: any, i: any) => {
                const isOdd = i % 2;
                return <AdvantageCard key={i} data={item} isOdd={isOdd} />;
              })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default EligibilityRequirements;
