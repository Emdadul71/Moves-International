import React from "react";
import WhoUseCard from "@/modules/@common/who-use-card";

const ApplicationProcess = ({ data }: any) => {
  const processData = data && data?.sectionProcess && data?.sectionProcess;

  return (
    <section className="bg-grey  pt-5 lg:pt-[80px] lg:mb-[80px]">
      <div className="container">
        <div className="max-w-[790px] w-full mx-auto mb-5 lg:mb-[60px]">
          <h2 className="text-center mb-5">{processData?.title}</h2>
          {processData?.shortDesc ? (
            <p className="text-center text-xl">{processData?.shortDesc}</p>
          ) : null}
        </div>
        <div className="grid lg:grid-cols-4 gap-[30px] mb-5 lg:mb-10">
          {processData?.useCardData?.map((item: any, i: any) => {
            return <WhoUseCard key={i} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
