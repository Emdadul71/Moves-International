"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Select, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useGetSingleInstituteQuery } from "@/appstore/institution/institution-api";

interface DataType {
  key: React.Key;
  courseName: string;
}

const InstitutionDetails = ({ data: instituteData }: any) => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs: any = useRef([]);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  console.log("test", instituteData);

  const locationData = instituteData?.location;
  const mapData = instituteData?.location?.map((item: any, i: any) => {
    item?.locationName;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition: any = window.scrollY;

      // Iterate through sectionRefs to find the active section

      sectionRefs.current.forEach((ref: any, index: any) => {
        if (ref && ref.offsetTop <= scrollPosition + 300) {
          setActiveSection(index);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const columns: ColumnsType<DataType> = [
    {
      title: "Location Name",
      dataIndex: "courseName",
      render: (_, record: any) => (
        <Link
          href={`/courses?location=${record?.locationName}`}
          className="hover:text-secondary font-medium"
        >
          {record?.locationName}
        </Link>
      ),
    },
    {
      title: "State",
      dataIndex: "courseName",
      render: (_, record: any) => (
        <Link
          href={`/courses?location=${record?.locationName}`}
          className="hover:text-secondary font-medium"
        >
          <span className="uppercase">{record?.city?.state?.slug}</span>
        </Link>
      ),
    },
    {
      title: "Number of Courses",
      render: (_, record: any) => (
        <Link
          href={`/courses?location=${record?.locationName}`}
          className="flex justify-center hover:text-secondary font-medium"
        >
          <span className="uppercase ">{record?._count?.Course}</span>
        </Link>
      ),
    },
  ];
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
            <div className="self-start lg:sticky top-[130px]">
              <Link
                href="#institution_details"
                className={`mb-0 text-primary text-lg font-semibold  ${
                  activeSection === 0 ? "active" : ""
                }`}
              >
                Institution Details
              </Link>

              <div className="bg-primary w-full h-[1px] my-4"></div>

              <Link
                href="#list_of_course"
                className={`mb-0 text-primary text-lg font-semibold  ${
                  activeSection === 1 ? "active" : ""
                }`}
              >
                List of Courses Offered by the Institution
              </Link>

              <div className="bg-primary w-full h-[1px] my-4"></div>
              <Link
                href="#contact_details"
                className={`mb-0 text-primary text-lg font-semibold  ${
                  activeSection === 2 ? "active" : ""
                }`}
              >
                Contact Details
              </Link>
              <div className="bg-primary w-full h-[1px] my-4"></div>
            </div>

            <div>
              <div
                id="institution_details"
                ref={(ref) => (sectionRefs.current[0] = ref)}
                className="pt-[125px] mt-[-125px] mb-[30px]"
              >
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

                  {instituteData?.institutionCapacity && (
                    <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                      <p className="mb-0">
                        Total capacity across all provider's locations:
                      </p>
                      {instituteData?.institutionCapacity && (
                        <p className="mb-0">
                          : {instituteData?.institutionCapacity}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="my-5">
                <iframe
                  className="w-full h-[250px] lg:h-[450px]"
                  src={`https://maps.google.com/maps?q=${instituteData?.institutionName},Australia,&t=&z=4&ie=UTF8&iwloc=&output=embed`}
                />
              </div>

              <div
                id="list_of_course"
                className="pt-[125px] mt-[-125px]"
                ref={(ref) => (sectionRefs.current[1] = ref)}
              >
                <p className="mb-0 text-primary text-lg font-semibold ">
                  List of Courses Offered by the Institution
                </p>
                <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
                <div className="mb-[30px]">
                  <Table
                    columns={columns}
                    dataSource={locationData}
                    pagination={false}
                    size="middle"
                    className="border"
                  />
                </div>
              </div>

              {contactData && (
                <div
                  id="contact_details"
                  className="pt-[125px] mt-[-125px]"
                  ref={(ref) => (sectionRefs.current[2] = ref)}
                >
                  <p className="mb-0 text-primary text-lg font-semibold">
                    Contact Details
                  </p>
                  <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>

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
                        <p className="mb-0 ">Email Address</p>
                        <a
                          href={`mailto:${contactData?.["Email Address"]}`}
                          className="mb-0 !hover:text-primary"
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
                </div>
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
