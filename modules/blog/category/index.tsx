"use client";
import BlogCard from "@/modules/@common/blog-card";
import ReadyToGo from "@/modules/@common/ready-to-go";
import { Select } from "antd";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const BlogCategory = ({ data, catSlug, total, excludeBlogIds }: any) => {
  const dataSingle = data && data[0];
  const catName = dataSingle?.categories?.find(
    (item: any) => item.slug == catSlug
  );

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <section className="pt-5 lg:pt-[100px]">
        <div className="container">
          <h3>{catName?.title}</h3>
          <div className="grid grid-cols-1  lg:grid-cols-[1fr_410px] gap-[30px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-[30px]">
              {data?.map((item: any, i: any) => {
                return (
                  <>
                    <BlogCard
                      key={i}
                      data={item}
                      classes={{
                        root: `
                       lg:grid-cols-[410px_1fr] items-center `,
                      }}
                    />
                  </>
                );
              })}
            </div>

            <div className="flex flex-col gap-[26px] p-4 lg:px-[30px] lg:py-[50px] border border-dashed self-start md:sticky top-[130px]">
              <div className="max-w-[496px] w-full">
                <h2 className="mb-3 h3">Premium Expert Admission Guidance</h2>
                <p className="mb-0">
                  {`As your education consultant and migration agent, we'll help
                  you optimize your educational experience by finding the right
                  universities and courses for you.`}
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
                <button className="btn btn-primary w-full rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReadyToGo />
    </>
  );
};

export default BlogCategory;
