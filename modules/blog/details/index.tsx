"use client";
import { htmlParse, readingTime } from "@/helpers/utils";
import BlogCard from "@/modules/@common/blog-card";
import ReadyToGo from "@/modules/@common/ready-to-go";
import SocialShare from "@/modules/@common/social_share";
import { Select } from "antd";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import LatestBlog from "../@components/latest-blog";
import moment from "moment";

const BlogDetails = ({ data }: any) => {
  const catName = data?.categories[0];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <section className="pt-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_30px] max-w-[1130px] gap-[30px] mb-[40px]">
            <div className="flex flex-col gap-[26px] p-4 lg:px-[20px] lg:py-[30px] border border-dashed self-start lg:sticky top-[130px] bg-grey">
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

            <div>
              <ul className="flex gap-4 mb-3">
                {catName?.title && (
                  <li>
                    <div className="px-2 py-1 bg-[#f860111a] rounded-full text-xs text-secondary">
                      {catName?.title}
                    </div>
                  </li>
                )}
                <li className="border-r pr-4">
                  <div>
                    {/* <span> {moment(data?.publishedAt).format("LL")}</span> */}
                    <span>
                      {" "}
                      {moment(data?.publishedAt).format("YYYY/MM/DD")}{" "}
                    </span>
                    {/* <span>{moment(data?.publishedAt).format("LT")}</span> */}
                  </div>
                </li>
                <li>
                  <div className="border-r pr-4">Admin</div>
                </li>
                <li>
                  {data?.content && (
                    <div>{readingTime(data?.content)} Min Read</div>
                  )}
                </li>
              </ul>
              <div className="from_texteditor_wrapper">
                <h1 className="h2 mb-6">{data?.title}</h1>
                <div className="mb-7">
                  <Image
                    src={data?.featureImage}
                    width={740}
                    height={416}
                    alt="Testimonial"
                  />
                </div>

                {data?.content && <div>{htmlParse(data?.content)}</div>}
              </div>
            </div>

            <div className="sticky top-[340px] left-0 self-start">
              <SocialShare sharedUrl="#" />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[300px_850px] max-w-[1150px] ">
            <div></div>
            <LatestBlog />
          </div>
        </div>
      </section>
      <ReadyToGo />
    </>
  );
};

export default BlogDetails;
