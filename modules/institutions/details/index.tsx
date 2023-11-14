"use client";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Select, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useGetSingleInstituteQuery } from "@/appstore/institution/institution-api";

interface DataType {
  key: React.Key;
  courseName: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Course Locations",
    dataIndex: "courseName",
    render: (_, record) => (
      <Link
        href="/courses/courses-name"
        className="hover:text-secondary font-medium"
      >
        {record?.courseName}
      </Link>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    courseName: "UniLink Bridging Program (Business)",
  },
  {
    key: "1",
    courseName: "UniLink Bridging Program (Business)",
  },
  {
    key: "1",
    courseName: "UniLink Bridging Program (Business)",
  },
  {
    key: "1",
    courseName: "UniLink Bridging Program (Business)",
  },
  {
    key: "1",
    courseName: "UniLink Bridging Program (Business)",
  },
];
const InstitutionDetails = ({ data: instituteData }: any) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  console.log("instituteData", instituteData);
  const contactData =
    instituteData && instituteData?.contacts && instituteData?.contacts?.[0];
  console.log("contactData", contactData ? true : false);

  return (
    <>
      <section className="pt-5 lg:pt-[100px] bg-primary">
        <div className="container">
          {instituteData?.institutionName && (
            <div>
              <h1 className="h3 text-white mb-0">
                {instituteData?.institutionName}
              </h1>
            </div>
          )}
        </div>
      </section>
      <section className="pt-10">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr_300px] gap-[30px]">
            <div>
              <p className="mb-0 text-primary text-lg font-semibold">
                Institution Details
              </p>
              <div className="bg-primary w-full h-[1px] my-4"></div>

              <p className="mb-0  text-lg text-black">Contact Details</p>
              <div className="bg-primary w-full h-[1px] my-4"></div>
            </div>
            <div>
              <p className="mb-0 text-primary text-lg font-semibold">
                Institution Details
              </p>
              <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Institution Name</p>
                  {instituteData?.institutionName && (
                    <p className="mb-0">: {instituteData?.institutionName}</p>
                  )}
                </div>

                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Institution Type</p>
                  <p className="mb-0">: {instituteData?.institutionType}</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">CRICOS Provider Code</p>
                  {instituteData?.providerCode && (
                    <p className="mb-0">: {instituteData?.providerCode}</p>
                  )}
                </div>
                {/*
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Course Sector</p>
                  <p className="mb-0">: No</p>
                </div>
                <p className="text-black font-semibold my-2">
                  Field of Education- 1st Qualification
                </p>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Broad Field</p>
                  <p className="mb-0">
                    : 05 - Agriculture, Environmental and Related Studies
                  </p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Narrow Field</p>
                  <p className="mb-0">: 0501 - Agriculture</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Detailed Field</p>
                  <p className="mb-0">: 050199 - Agriculture, n.e.c</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Course Level</p>
                  <p className="mb-0">: Advanced Diploma</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Foundation Studies</p>
                  <p className="mb-0">: No</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Work Component</p>
                  <p className="mb-0">: Yes</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Work Component Hours/Week</p>
                  <p className="mb-0">: 38.00</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Work Component Total Hours</p>
                  <p className="mb-0">: 4</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Course Language</p>
                  <p className="mb-0">: English</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Duration (Weeks)</p>
                  <p className="mb-0">: 36</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Tuition Fee</p>
                  <p className="mb-0">: $AU 51,060</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Non Tuition Fee</p>
                  <p className="mb-0">: $AU 23,060</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Estimated Total Course Cost</p>
                  <p className="mb-0">: $AU 74,060</p>
                </div>
                <div className="my-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2818364065456!2d90.38491307589682!3d23.737327089277105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1698222569472!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    style={{ border: `0px` }}
                    loading="lazy"
                  ></iframe>
                </div>
                <p className="mb-0 text-primary text-lg font-semibold">
                  Course Location
                </p>
                <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  size="middle"
                  className="border"
                /> */}
              </div>
              {/* <div className="my-[30px]">
                <p className="mb-0 text-primary text-lg font-semibold">
                  Institution Details
                </p>
                <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">CRICOS Provider Code</p>
                  <p className="mb-0">: 00306D</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Institution Name</p>
                  <p className="mb-0">: Marcus Oldham College</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Institution Type</p>
                  <p className="mb-0">: Private</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">
                    Total capacity across all provider's locations
                  </p>
                  <p className="mb-0">: 30</p>
                </div>
              </div> */}

              {contactData && (
                <>
                  <div className="my-[30px]">
                    <p className="mb-0 text-primary text-lg font-semibold">
                      Contact Details
                    </p>
                    <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {contactData?.Name && (
                      <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                        <p className="mb-0">Name</p>
                        <p className="mb-0">: {contactData?.Name}</p>
                      </div>
                    )}
                    {contactData?.Title && (
                      <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                        <p className="mb-0">Title</p>
                        <p className="mb-0">: {contactData?.Title}</p>
                      </div>
                    )}
                    {contactData?.["Phone Number"] && (
                      <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                        <p className="mb-0">Phone Number</p>
                        <p className="mb-0">
                          : {contactData?.["Phone Number"]}
                        </p>
                      </div>
                    )}
                    {contactData?.["Facsimile Number"] && (
                      <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                        <p className="mb-0">Facsimile Number</p>
                        <p className="mb-0">
                          : {contactData?.["Facsimile Number"]}
                        </p>
                      </div>
                    )}
                    {contactData?.["Email Address"] && (
                      <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                        <p className="mb-0">Email Address</p>
                        <a
                          href={`mailto:${contactData?.["Email Address"]}`}
                          className="mb-0"
                        >
                          : {contactData?.["Email Address"]}
                        </a>
                      </div>
                    )}
                    {instituteData?.postaladdressline1 && (
                      <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                        <p className="mb-0">Address</p>
                        <div className="mb-0">
                          : {instituteData?.postaladdressline1},
                          <div>
                            {instituteData?.postalCity?.name && (
                              <span className="inline-block pl-2">
                                {instituteData?.postalCity?.name},
                              </span>
                            )}
                            {instituteData?.postalCity?.state?.name && (
                              <span className="inline-block pl-2">
                                {instituteData?.postalCity?.state?.name}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default InstitutionDetails;
