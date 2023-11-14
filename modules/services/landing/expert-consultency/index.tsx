import ServiceCard from "@/modules/@common/service-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const serviceData = [
  {
    title: "Student Consultancy",
    imgSrc: "/service/sudent-consultancy.png",
    shortDesc: "Your Student Consultancy Partner",
  },
  {
    title: "Professional Year Admission",
    imgSrc: "/service/professional-year-admission.png",
    shortDesc: "Your Career: Professional Year",
  },
  {
    title: "485 Visa Application",
    imgSrc: "/service/485-visa-application.png",
    shortDesc: "Your Future: 485 Visa Pathway",
  },
  {
    title: "University Admission",
    imgSrc: "/service/university-admission.png",
    shortDesc: "Your Future is Starts Here",
  },
  {
    title: "Student Visa Extension",
    imgSrc: "/service/visa-extension.png",
    shortDesc: "Extending Your Student Visa: Simplified",
  },
  {
    title: "OSHC & OVHC",
    imgSrc: "/service/oshc-ovhc.png",
    shortDesc: "Health Cover, Your Safety Net",
  },
];
const ExpertConsultency = () => {
  return (
    <section className="pt-5 lg:pt-[80px] z-20 bg-white relative">
      <div className="container">
        <div className="grid lg:grid-cols-[410px_1fr] gap-[30px]">
          <div className="p-4 lg:p-[30px] border border-dashed rounded-md self-start lg:sticky top-[140px]">
            <div className="max-w-[275px] w-full">
              <h2 className="text-primary mb-[22px]">Expert Consultancy</h2>
            </div>
            <p className="text-lg mb-0">
              Embark on educational journeys and seamless migrations with our
              expert consultancy. We navigate admissions, visas, and
              settlements, ensuring your global aspirations turn into thriving
              realities.
            </p>
          </div>
          <div className="sm:columns-2 gap-[30px]">
            {serviceData?.map((item: any, i: any) => {
              return <ServiceCard key={i} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertConsultency;
