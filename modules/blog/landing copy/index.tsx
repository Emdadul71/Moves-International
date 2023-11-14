"use client";
import { Select } from "antd";
import { FiChevronRight } from "react-icons/fi";
import BlogHero from "./blog-hero";
import BlogCard from "@/modules/@common/blog-card";
import ReadyToGo from "@/modules/@common/ready-to-go";

const BlogLanding = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <BlogHero />
      <section>
        <div className="container">
          <div className="grid md:grid-cols-[1fr_370px] gap-[30px]">
            <div>
              <div className="flex justify-between items-center mb-[40px]">
                <h2 className="h3 mb-0 text-primary">Latest Blogs</h2>
                <p className="mb-0">View All</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-[30px]">
                {new Array(20).fill(1).map((item: any, i: any) => {
                  const isSmall = i == 2 || i == 3 || i == 4 || i == 5;
                  return (
                    <>
                      <BlogCard
                        key={i}
                        classes={{
                          root: `${
                            i > 5
                              ? `lg:grid-cols-[410px_1fr] lg:col-span-2 items-center `
                              : ``
                          } ${
                            isSmall
                              ? `lg:grid-cols-[146px_1fr] col-span-1 gap-5 items-center `
                              : ``
                          }`,
                          title: `text-p1 leading-7 lg:text-[28px] ${
                            isSmall ? `lg:text-sm lg:!leading-5 !mb-[2px]` : ``
                          } `,
                          category: `${isSmall ? `text-xs !mb-1` : ``}`,
                          descStyle: `${i < 6 ? "lg:hidden" : ""}`,
                          date: `${isSmall ? `text-sm !leading-5` : ``}`,
                        }}
                      />
                      {i == 5 && <div className="h-[20px]"></div>}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-[26px] p-4 lg:px-[30px] lg:py-[50px] border border-dashed self-start md:sticky top-[130px]">
              <div className="max-w-[496px] w-full">
                <h2 className="mb-3 h3">Premium Expert Admission Guidance</h2>
                <p className="mb-0">
                  As your education consultant and migration agent, we'll help
                  you optimize your educational experience by finding the right
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

export default BlogLanding;
