import React from "react";
import AdvantageCard from "../advantage-card";

const KeyAdvantage = ({ data }: any) => {
  const benefitsData = data?.sectionBenefits;
  return (
    <section>
      <div className="container">
        <div className="max-w-[600px] mx-auto mb-5 lg:mb-[60px]">
          <h2 className="text-center mb-0">{benefitsData?.title}</h2>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          {benefitsData?.benefits?.map((item: any, i: any) => {
            const isOdd = i % 2;
            return <AdvantageCard key={i} data={item} isOdd={isOdd} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantage;
