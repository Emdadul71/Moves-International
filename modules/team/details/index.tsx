"use client";
import React from "react";
import TeamDetailsHero from "./@components/team-details-hero";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import WebStories from "@/modules/home/web-stories";
import ReadyToGo from "@/modules/@common/ready-to-go";
import { Select } from "antd";
import { FiChevronRight } from "react-icons/fi";
import { BiSolidEnvelope } from "react-icons/bi";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import SocialLinks from "@/modules/@common/social_links";
import { htmlParse } from "@/helpers/utils";

const TeamDetails = ({ data }: any) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <TeamDetailsHero data={data} />
      <section className="pt-5 lg:pt-[100px]">
        <div className="container">
          <div className="max-w-[1180px] grid lg:grid-cols-[1fr_410px] gap-[30px] ml-auto">
            <div className="flex flex-col gap-[30px]">
              <div className="grid md:grid-cols-[330px_1fr]">
                <div>
                  <Image
                    src={data?.profileImage}
                    alt="CEO"
                    width={330}
                    height={363}
                    blurDataURL="/misc/team-1.jpg"
                    placeholder="blur"
                    className="w-full"
                  />
                </div>
                <div className="bg-grey px-5 lg:pl-[40px] lg:pr-[80px] py-5 lg:py-[50px] ">
                  <h4 className="text-[26px]">Contact Details</h4>

                  <div className="flex flex-col gap-[10px] mb-[30px]">
                    <div className="flex items-center gap-[10px]">
                      <FaPhoneAlt className="text-secondary" />
                      <div className="text-black">{data?.mobile}</div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <BiSolidEnvelope className="text-secondary" />
                      <div className="text-black">{data?.email}</div>
                    </div>
                    <div className="flex items-start gap-[10px]">
                      <IoMdPin className="text-secondary text-lg" />
                      <div className="text-black">{data?.location}</div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 text-primary mb-[10px]">
                      Social Profiles
                    </p>
                    <SocialLinks
                      classes={{
                        root: `justify-start `,
                        iconStyle: `text-black`,
                      }}
                      data={data}
                    />
                  </div>
                </div>
              </div>
              <div>{htmlParse(data?.description)}</div>
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
      <QualityAndPrestigious />
      <WebStories />
      <ReadyToGo />
    </>
  );
};

export default TeamDetails;
