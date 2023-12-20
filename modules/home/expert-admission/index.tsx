"use client";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
import { useInView } from "framer-motion";

const expertData = [
  {
    imgSrc: "/home/university-admission.png",
    link: "/services/university-and-college-admissions",
    title: "University Admission",
  },
  {
    imgSrc: "/home/education-and-career.jpg",
    link: "/services/education-and-career-counselling",
    title: "Education & Career Counselling",
  },
  {
    imgSrc: "/home/professional-year-admission.png",
    link: "/services/professional-year-program",
    title: "Professional Year Admission",
  },
  {
    imgSrc: "/home/student-visa-extension.png",
    link: "/services/migration-advice-and-visa-application",
    title: "Migration Advice & Visa Application",
  },
  {
    imgSrc: "/home/485-visa-application.png",
    link: "/services/rpl",
    title: "RPL",
  },
  {
    imgSrc: "/home/OSHC-OVHC.png",
    link: "/services/health-insurance-oshc-ovhc",
    title: "OSHC & OVHC",
  },
];
const ExpertAdmission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <section className="pt-5 lg:pt-[50px]" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-[630px_1fr] gap-[30px]">
          <div className="flex flex-col gap-[26px] p-4 lg:p-[50px] border border-dashed self-start lg:sticky top-[130px]">
            <div className="max-w-[496px] w-full">
              <h2 className="mb-3">Premium Expert Admission Guidance</h2>
              <p className="mb-0">
                As your education consultant and migration agent, we'll help you
                optimize your educational experience by finding the right
                universities and courses for you.
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <div className="flex gap-1.5 items-center">
                    <FiChevronRight className="text-secondary text-lg" />
                    <span className="text-lg font-medium text-primary">
                      Application Fee Waiver
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1.5 items-center">
                    <FiChevronRight className="text-secondary text-lg" />
                    <span className="text-lg font-medium text-primary">
                      Up to 100% Scholarship on Admit
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1.5 items-center">
                    <FiChevronRight className="text-secondary text-lg" />
                    <span className="text-lg font-medium text-primary">
                      SOP & LOR Preparation
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1.5 items-center">
                    <FiChevronRight className="text-secondary text-lg" />
                    <span className="text-lg font-medium text-primary">
                      Education Loan
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1.5 items-center">
                    <FiChevronRight className="text-secondary text-lg" />
                    <span className="text-lg font-medium text-primary">
                      Visa Assistance
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                />
              </div>
              <div>
                <Select
                  defaultValue="Service Type"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "studentVisa", label: "Student Visa" }]}
                />
              </div>
              <div>
                <Select
                  defaultValue="Country of Passpost"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "bangladesh", label: "Bangladesh" }]}
                />
              </div>
              <div>
                <textarea
                  placeholder="Enquiry in Short"
                  className="w-full border px-[15px] py-[8px] focus:outline-none rounded-[2px]"
                  rows={4}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-primary w-full rounded">Submit</button>
            </div>
          </div>

          <div
            className="flex flex-col gap-5"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {expertData?.map((item, i) => {
              return (
                <Link href={item?.link} key={i}>
                  <Image
                    src={item?.imgSrc}
                    alt="Study International Logo"
                    width={960}
                    height={420}
                    blurDataURL="/misc/logo.png"
                    placeholder="blur"
                  />
                  <div className="flex justify-between items-center px-[30px] py-[20px] shadow-one rounded-b-md">
                    <p className="mb-0 font-semibold text-black text-lg">
                      {item?.title}
                    </p>
                    <FiChevronRight className="text-lg text-black" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAdmission;
