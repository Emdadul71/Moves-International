import React from "react";
import ServiceCard from "../service-card";

const ServiceSection = ({ data }: any) => {
  const otherPYData =
    data &&
    data?.sectionOtherProfessionalYear &&
    data?.sectionOtherProfessionalYear;

  return (
    <section>
      <div className="container">
        <div className="max-w-[750px] mx-auto mb-5 lg:mb-10">
          <h2 className="text-center">{otherPYData?.title} </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {otherPYData?.services?.map((item: any, i: any) => {
            return <ServiceCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
