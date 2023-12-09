import React from "react";
import ServiceCard from "../service-card";
const serviceCard = [
  {
    imgSrc: "/service/other-professional.png",
    title: "Express Entry Program",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/service/other-professional-1.png",
    title: "Work Permit in Canada ",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
  {
    imgSrc: "/service/other-professional-2.png",
    title: "Higher study in Canada",
    desc: "There are many pathways to Canadian immigration: Express Entry, Provincial Nomination, Family Class, and Business Immigration. Find out more about the many options for moving to Canada permanently!",
  },
];
const ServiceSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {serviceCard?.map((item: any, i: any) => {
            return <ServiceCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
