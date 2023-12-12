import ServiceCard from "@/modules/@common/service-card";
import React from "react";
interface propTypes {
  classes?: {
    root?: any;
  };
  data?: any;
}
const OtherService = ({ data, classes }: propTypes) => {
  const otherServiceData =
    data && data?.sectionOtherService && data?.sectionOtherService;
  return (
    <section className={` ${classes?.root ? classes.root : ``}`}>
      <div className="container">
        <div className="max-w-[540px] mx-auto mb-5 lg:mb-10">
          <h2 className="mb-0 text-center">Other Services</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {otherServiceData?.services?.map((item: any, i: any) => {
            return <ServiceCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherService;
