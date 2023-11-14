"use client";
import { Checkbox, Select } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "next/link";
import React from "react";

const LeadForm = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <section className="bg-grey pt-5 lg:pt-[80px]">
      <div className="container">
        <div className="flex flex-col gap-7 max-w-[850px] mx-auto w-full bg-white p-5 lg:p-[50px]">
          <div className="max-w-[355px] mx-auto">
            <h2 className="mb-3 text-center">Get 100% FREE Consultation!</h2>
            <p className="mb-3 text-center">
              Applicable for International Students only
            </p>
          </div>
          <div>
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
                  defaultValue="Nearest Moves International’s Office"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "sydney", label: "Sydney" }]}
                />
              </div>
              <div>
                <Select
                  defaultValue="IELTS or PTE Score"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "6.5", label: "6.5" }]}
                />
              </div>
              <div>
                <Select
                  defaultValue="Preferred level of study"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[
                    { value: "graduation", label: "Graduation" },
                    { value: "underGrade", label: "Under Grade" },
                  ]}
                />
              </div>
              <div>
                <Select
                  defaultValue="Select your course of study"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "nursing", label: "Nursing" }]}
                />
              </div>
              <div>
                <Select
                  defaultValue="Select your preferred intake"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "january", label: "January" }]}
                />
              </div>
              <div>
                <Select
                  defaultValue="Your current location (optional)"
                  style={{ width: "100%" }}
                  className="ant_selector_custom"
                  size="large"
                  onChange={handleChange}
                  options={[{ value: "Perth", label: "Perth" }]}
                />
              </div>
              <div>
                <textarea
                  placeholder="Comment (if any)"
                  className="w-full border px-[15px] py-[8px] focus:outline-none rounded-[2px]"
                  rows={4}
                />
              </div>
              <div className="flex flex-col gap-[15px]">
                <p className="mb-0">
                  Moves International will not share your details with others
                  without your permission:
                </p>
                <div>
                  <Checkbox onChange={onChange}>
                    <span className="text-base">
                      I agree to Moves International{" "}
                      <Link href="#" className="hover:text-secondary">
                        {" "}
                        Terms{" "}
                      </Link>
                      and{" "}
                      <Link href="#" className="hover:text-secondary">
                        privacy policy
                      </Link>
                    </span>
                  </Checkbox>
                </div>
                <div>
                  <Checkbox onChange={onChange}>
                    <span className="text-base ">
                      Please contact me by phone, email or SMS to assist with my
                      enquiry
                    </span>
                  </Checkbox>
                </div>
                <div>
                  <Checkbox onChange={onChange}>
                    <span className="text-base">
                      I would like to receive updates and offers from Moves
                      International
                    </span>
                  </Checkbox>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">Help me Study Abroad</button>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
