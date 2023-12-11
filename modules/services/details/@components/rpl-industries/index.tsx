import RplIndustryCard from "@/modules/@common/rpl-industry-card";
import React from "react";
interface propTypes {
  data?: any;
}
const RplIndustries = ({ data }: any) => {
  const rplIndustryData = data && data?.rplIndustries && data?.rplIndustries;
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-center max-w-[710px] w-full mx-auto mb-[40px]">
          <h2 className="h3 mb-5 text-center">{rplIndustryData?.title}</h2>
          <p className="mb-0 text-center text-xl">
            {rplIndustryData?.shortDesc}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          {rplIndustryData?.rplServices?.map((item: any, i: any) => {
            return <RplIndustryCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RplIndustries;
