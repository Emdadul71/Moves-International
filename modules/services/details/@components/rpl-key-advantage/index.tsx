import React from "react";
import AdvantageCard from "../../../../migration/@components/advantage-card";

const RPLKeyAdvantage = ({ data }: any) => {
  const advantageData = data?.keyAdvantage;
  return (
    <section>
      <div className="container">
        <div className="max-w-[910px] w-full mx-auto mb-5 lg:mb-[60px]">
          <h2 className="text-center mb-5">{advantageData?.title}</h2>
          {advantageData?.shortDesc ? (
            <p className="text-center text-xl">{advantageData?.shortDesc}</p>
          ) : null}
        </div>
        <div className="grid lg:grid-cols-3 gap-[30px] mb-5 lg:mb-10">
          {advantageData?.advantage?.map((item: any, i: any) => {
            const isOdd = i % 2;
            return <AdvantageCard key={i} data={item} isOdd={isOdd} />;
          })}
        </div>
        <div className="max-w-[850px] mx-auto">
          <p className="text-lg text-center text-primary">
            Overall, RPL is a pathway that recognizes the value of learning
            outside formal education and helps individuals gain formal
            qualifications based on their real-world experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RPLKeyAdvantage;
