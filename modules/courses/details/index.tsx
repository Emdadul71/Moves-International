"use client";
import { Select, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";

interface DataType {
  data?: any;
  key: React.Key;
  course: string;
  offsetTop: any;
}

const CourseDetails = ({ data: courseData }: any) => {
  console.log("courseData", courseData);

  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs: any = useRef([]);

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
  const locationData = courseData?.locations;

  const columns: ColumnsType<DataType> = [
    {
      title: "Course Locations",
      dataIndex: "courseName",
      render: (_, record: any) => (
        <Link
          href={`/courses?location=${record?.locationName}`}
          className="flex gap-2 hover:text-secondary font-medium"
        >
          <span className="uppercase">{record?.city?.state?.slug} -</span>
          <span>{record?.locationName}</span>
          {/* <span>Location owned and operated by provider</span> */}
        </Link>
      ),
    },
  ];
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <section className="pt-5 lg:pt-[100px] bg-primary">
        <div className="container">
          <div>
            <h1 className="h3 text-white mb-0">{courseData?.courseName}</h1>
          </div>
        </div>
      </section>
      <section className="pt-10">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr_300px] gap-[30px]">
            <div className="self-start lg:sticky top-[130px]">
              <Link
                href="#course_details"
                className={`mb-0 text-primary text-lg  ${
                  activeSection === 0 ? "active" : ""
                }`}
              >
                Course Details
              </Link>
              <div className="bg-primary w-full h-[1px] my-4"></div>
              <Link
                href="#field_of_education"
                className={`mb-0 text-lg  ${
                  activeSection === 1 ? "active" : ""
                }`}
              >
                Field of Education- 1st Qualification
              </Link>
              <div className="bg-primary w-full h-[1px] my-4"></div>
              <Link
                href="#course_location"
                className={`mb-0  text-lg ${
                  activeSection === 2 ? "active" : ""
                }`}
              >
                Course Location
              </Link>
              <div className="bg-primary w-full h-[1px] my-4"></div>
              <Link
                href="#institution_details"
                className={`mb-0  text-lg  ${
                  activeSection === 3 ? "active" : ""
                }`}
              >
                Institution Details
              </Link>
              <div className="bg-primary w-full h-[1px] my-4"></div>
              <Link
                href="#contact_details"
                className={`mb-0  text-lg  ${
                  activeSection === 4 ? "active" : ""
                }`}
              >
                Contact Details
              </Link>
              <div className="bg-primary w-full h-[1px] my-4"></div>
            </div>

            <div>
              <div
                id="course_details"
                className="pt-[125px] mt-[-125px] mb-[30px]"
                ref={(ref) => (sectionRefs.current[0] = ref)}
              >
                <p className="mb-0 text-primary text-lg font-semibold">
                  Course Details
                </p>
                <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Course Name</p>
                    <p className="mb-0">: {courseData?.courseName}</p>
                  </div>
                  {/* <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Course Sector</p>
                    <p className="mb-0">: Higher Education</p>
                  </div> */}
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">CRICOS Course Code</p>
                    <p className="mb-0">: {courseData?.courseCode}</p>
                  </div>
                  {/* <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Course Sector</p>
                    <p className="mb-0">: No</p>
                  </div> */}
                </div>
              </div>

              <div
                id="field_of_education"
                className="flex flex-col gap-3 pt-[125px] mt-[-125px]"
                ref={(ref) => (sectionRefs.current[1] = ref)}
              >
                <p className="text-black font-semibold my-2 ">
                  Field of Education- 1st Qualification
                </p>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Broad Field</p>
                  <p className="mb-0">: {courseData?.fieldOfEdu1Broad}</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Narrow Field</p>
                  <p className="mb-0">: {courseData?.fieldOfEdu1Narrow}</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Detailed Field</p>
                  <p className="mb-0">: {courseData?.fieldOfEdu1Detailed}</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Course Level</p>
                  <p className="mb-0">
                    : {courseData?.course_courseLevelId_fkey?.name}
                  </p>
                </div>
                {courseData?.foundationStudies ? (
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Foundation Studies</p>
                    <p className="mb-0">: {courseData?.foundationStudies}</p>
                  </div>
                ) : null}
                {courseData?.workComponent ? (
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Work Component</p>
                    <p className="mb-0">: {courseData?.workComponent}</p>
                  </div>
                ) : null}
                {courseData?.workComponentHours_Week ? (
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Work Component Hours/Week</p>
                    <p className="mb-0">
                      : {courseData?.workComponentHours_Week}
                    </p>
                  </div>
                ) : null}

                {courseData?.workComponentTotalHours ? (
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Work Component Total Hours</p>
                    <p className="mb-0">
                      : {courseData?.workComponentTotalHours}
                    </p>
                  </div>
                ) : null}
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Course Language</p>
                  <p className="mb-0">: {courseData?.courseLanguage}</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Duration (Weeks)</p>
                  <p className="mb-0">: {courseData?.durationWeeks}</p>
                </div>
                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Tuition Fee</p>
                  <p className="mb-0">: $AU {courseData?.tuitionFee}</p>
                </div>
                {courseData?.nonTuitionFee != null &&
                courseData?.nonTuitionFee != undefined ? (
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Non Tuition Fee</p>
                    <p className="mb-0">: $AU {courseData?.nonTuitionFee}</p>
                  </div>
                ) : null}

                <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                  <p className="mb-0">Estimated Total Course Cost</p>
                  <p className="mb-0">
                    : $AU {courseData?.estimatedTotalCourseCost}
                  </p>
                </div>
                <div className="my-5">
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2818364065456!2d90.38491307589682!3d23.737327089277105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1698222569472!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    style={{ border: `0px` }}
                    loading="lazy"
                  ></iframe> */}

                  <iframe
                    className="w-full h-[250px] lg:h-[450px]"
                    src={`https://maps.google.com/maps?q=${courseData?.institution?.institutionName},Australia,&t=&z=4&ie=UTF8&iwloc=&output=embed`}
                  />
                </div>
              </div>

              <div
                id="course_location"
                className="pt-[125px] mt-[-125px]"
                ref={(ref) => (sectionRefs.current[2] = ref)}
              >
                <p className="mb-0 text-primary text-lg font-semibold ">
                  Course Location
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

              <div
                id="institution_details"
                className="pt-[125px] mt-[-125px]"
                ref={(ref) => (sectionRefs.current[3] = ref)}
              >
                <div className=" pt-[125px] mt-[-125px]">
                  <p className="mb-0 text-primary text-lg font-semibold">
                    Institution Details
                  </p>
                  <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
                </div>
                <div className="flex flex-col gap-3 mb-[30px]">
                  {courseData?.providerCode ? (
                    <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                      <p className="mb-0">CRICOS Provider Code</p>
                      <p className="mb-0">: {courseData?.providerCode}</p>
                    </div>
                  ) : null}
                  {courseData?.institution?.institutionName ? (
                    <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                      <p className="mb-0">Institution Name</p>
                      <p className="mb-0">
                        : {courseData?.institution?.institutionName}
                      </p>
                    </div>
                  ) : null}
                  <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                    <p className="mb-0">Institution Type</p>
                    <p className="mb-0">: Private</p>
                  </div>
                  {courseData?.institution?.institutionCapacity ? (
                    <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                      <p className="mb-0">
                        Total capacity across all provider's locations
                      </p>
                      <p className="mb-0">
                        : {courseData?.institution?.institutionCapacity}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              {courseData?.institution?.contacts &&
                courseData?.institution?.contacts.length > 0 && (
                  <div
                    id="contact_details"
                    className="pt-[125px] mt-[-125px]"
                    ref={(ref) => (sectionRefs.current[4] = ref)}
                  >
                    <div className="my-[30px] pt-[125px] mt-[-125px]">
                      <p className="mb-0 text-primary text-lg font-semibold">
                        Contact Details
                      </p>
                      <div className="bg-[#DBDADE] w-full h-[1px] mt-2 mb-6"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                      {courseData?.institution?.contacts?.[0]?.Name ? (
                        <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                          <p className="mb-0">Name</p>
                          <p className="mb-0">
                            : {courseData?.institution?.contacts?.[0]?.Name}{" "}
                          </p>
                        </div>
                      ) : null}

                      {courseData?.institution?.contacts?.[0]?.Title ? (
                        <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                          <p className="mb-0">Title</p>
                          <p className="mb-0">
                            : {courseData?.institution?.contacts?.[0]?.Title}
                          </p>
                        </div>
                      ) : null}

                      {courseData?.institution?.contacts?.[0]?.[
                        "Phone Number"
                      ] ? (
                        <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                          <p className="mb-0">Phone Number</p>
                          <p className="mb-0">
                            :{" "}
                            {
                              courseData?.institution?.contacts?.[0]?.[
                                "Phone Number"
                              ]
                            }
                          </p>
                        </div>
                      ) : null}

                      {courseData?.institution?.contacts?.[0]?.[
                        "Facsimile Number"
                      ] ? (
                        <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                          <p className="mb-0">Facsimile Number</p>
                          <p className="mb-0">
                            :{" "}
                            {
                              courseData?.institution?.contacts?.[0]?.[
                                "Facsimile Number"
                              ]
                            }
                          </p>
                        </div>
                      ) : null}

                      {courseData?.institution?.contacts?.[0]?.[
                        "Email Address"
                      ] ? (
                        <div className="grid grid-cols-[1fr_1.5fr] gap-[30px]">
                          <p className="mb-0">Email Address</p>
                          <p className="mb-0">
                            :{" "}
                            {
                              courseData?.institution?.contacts?.[0]?.[
                                "Email Address"
                              ]
                            }
                          </p>
                        </div>
                      ) : null}
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

export default CourseDetails;
