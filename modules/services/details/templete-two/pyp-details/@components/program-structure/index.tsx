import AdvantageCard from "@/modules/migration/@components/advantage-card";
import React from "react";

const ProgramStructure = ({ data }: any) => {
  const programStructureData =
    data && data?.sectionProgramStructure && data?.sectionProgramStructure;
  return (
    <>
      {programStructureData ? (
        <section>
          <div className="container">
            <div className="max-w-[800px] mx-auto mb-5 lg:mb-[60px]">
              <h2 className="text-center">{programStructureData?.title}</h2>
              <p className="mb-0 text-center">
                {programStructureData?.shortDesc}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[30px] mb-5 lg:mb-10">
              {programStructureData?.cardData?.map((item: any, i: any) => {
                const isOdd = i % 2;
                return <AdvantageCard key={i} data={item} isOdd={isOdd} />;
              })}
            </div>
            <div className="max-w-[850px] mx-auto">
              <p className="text-lg text-center text-primary">
                {programStructureData?.endDesc}
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ProgramStructure;
