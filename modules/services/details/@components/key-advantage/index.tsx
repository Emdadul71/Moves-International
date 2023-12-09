import React from "react";
import AdvantageCard from "../../../../migration/@components/advantage-card";

const KeyAdvantage = ({ data }: any) => {
  const advantageData = data?.keyAdvantage;
  return (
    <section>
      <div className="container">
        <div className="max-w-[600px] mx-auto mb-5 lg:mb-[60px]">
          <h2 className="text-center mb-0">{advantageData?.title}</h2>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mb-5 lg:mb-10">
          {advantageData?.advantage?.map((item: any, i: any) => {
            const isOdd = i % 2;
            return <AdvantageCard key={i} data={item} isOdd={isOdd} />;
          })}
        </div>
        <div className="max-w-[850px] mx-auto">
          <p className="text-lg text-center text-primary">
            The Professional Year Program, with its multifaceted benefits, not
            only facilitates your integration into the Australian professional
            landscape but also positions you as a competitive candidate for
            future career opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantage;
