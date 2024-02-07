"use client";
import { Tabs, TabsProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const CourseInfo = ({ data }: any) => {
  const courseInfoData =
    data && data?.sectionCourseInfo && data?.sectionCourseInfo;

  const [courseLevel, setCourseLevel] = useState("Certificate IV");

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Job Outcomes",
      children: (
        <>
          {courseLevel == "Certificate IV" && (
            <ul className="flex flex-col gap-2.5">
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Acute Care Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Paediatrics' Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Mental Health Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Perioperative n Theatres Nurse
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Disability and Rehabilitation Nurse
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Aged Care Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Nurse Educator</span>
                </div>
              </li>
            </ul>
          )}
          {courseLevel == "Bachelor Of Nursing" && (
            <ul className="flex flex-col gap-2.5">
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Critical Care Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Emergency Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Midwife</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Neonatal Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Nurse Educator</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Nurse Practitioner</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Public Health Nurse</span>
                </div>
              </li>
            </ul>
          )}
          {courseLevel == "Master of Nursing" && (
            <ul className="flex flex-col gap-2.5">
              <li>
                <div className="flex gap-1.5 items-center mb-1">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Advanced Clinical Practice:</span>
                </div>
                <ul className="pl-6 flex flex-col gap-2">
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Nurse practitioner</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">
                        Clinical nurse specialist
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Midwife</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Critical care nurse</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Emergency nurse</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex gap-1.5 items-center mb-1">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Leadership & Management:</span>
                </div>
                <ul className="pl-6 flex flex-col gap-2">
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Nurse manager</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Director of nursing</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Chief nursing officer</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Healthcare administrator</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="flex gap-1.5 items-center mb-1">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Research & Education:</span>
                </div>
                <ul className="pl-6 flex flex-col gap-2">
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Nurse researcher</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Nurse educator</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Academic researcher</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg ">Consultant</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: "Learning Outcomes",
      children: (
        <>
          {courseLevel == "Certificate IV" && (
            <ul className="flex flex-col gap-2.5">
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Community health</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Mental health care services</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Disability services</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Rehabilitation services</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Aged care services</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Aged Care Nurse</span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">Research and Education</span>
                </div>
              </li>
            </ul>
          )}
          {courseLevel == "Bachelor Of Nursing" && (
            <ul className="flex flex-col gap-2.5">
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Advanced clinical skills and procedures
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Leadership and management skills
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Research and critical thinking skills
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Cultural competency and ethical considerations
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Communication and interpersonal skills
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Pharmacology and medication administration
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Pathophysiology and human anatomy
                  </span>
                </div>
              </li>
            </ul>
          )}
          {courseLevel == "Master of Nursing" && (
            <ul className="flex flex-col gap-2.5">
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Advanced knowledge and expertise in a chosen field of
                    nursing
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Strong research and critical thinking skills
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Effective leadership and management capabilities
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Advanced clinical skills and decision-making abilities
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Ability to translate research evidence into practice
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Enhanced communication and collaboration skills
                  </span>
                </div>
              </li>
              <li>
                <div className="flex gap-1.5 items-center">
                  <FiChevronRight className="text-secondary text-lg" />
                  <span className="text-lg ">
                    Strong ethical and professional values
                  </span>
                </div>
              </li>
            </ul>
          )}
        </>
      ),
    },
  ];
  return (
    <section className="pt-5 lg:pt-[100px] bg-grey">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="flex flex-col gap-5 lg:gap-[50px] self-start lg:sticky top-[160px]">
            <div>
              <div className="flex flex-col gap-[16px] max-w-[471px] mx-auto">
                <div className="max-w-[330px] mx-auto w-full">
                  <h3 className="text-center font-bold text-primary">
                    {courseInfoData?.title}
                  </h3>
                </div>
                <p className="text-center">{courseInfoData?.shortDesc}</p>
              </div>
              <div className="flex flex-col gap-4 max-w-[397px] mx-auto w-full">
                <div
                  className={`btn  w-full rounded-full ${
                    courseLevel == "Certificate IV" ? "btn-secondary" : ""
                  }`}
                  onClick={() => setCourseLevel("Certificate IV")}
                >
                  Nursing or Certificate IV
                </div>
                <div
                  className={`btn w-full rounded-full  ${
                    courseLevel == "Bachelor Of Nursing" ? "btn-secondary" : ""
                  }`}
                  onClick={() => setCourseLevel("Bachelor Of Nursing")}
                >
                  Bachelor Of Nursing
                </div>
                <div
                  className={`btn w-full rounded-full ${
                    courseLevel == "Master of Nursing" ? "btn-secondary" : ""
                  }`}
                  onClick={() => setCourseLevel("Master of Nursing")}
                >
                  Master of Nursing
                </div>
              </div>
            </div>

            {
              courseInfoData?.courseInfoByLevel?.map((item: any, i: any) => {
                return (
                  <>
                    {item?.level == courseLevel && (
                      <div
                        className="grid sm:grid-cols-3 gap-0 lg:gap-[10px] py-5 px-5 lg:px-[60px] border border-dashed lg:max-w-[632px] w-full"
                        key={i}
                      >
                        {item?.level == courseLevel ? (
                          <>
                            {item?.info?.map((item: any, i: any) => {
                              return (
                                <div
                                  className="flex flex-col gap-4 border-r-0 sm:border-r border-dashed items-center py-[10px] px-1"
                                  key={i}
                                >
                                  <Image
                                    src={item?.iconSrc}
                                    alt="Study International Logo"
                                    width={50}
                                    height={50}
                                  />
                                  <div className="text-center">
                                    <div className="text-lg lg:text-p1 font-semibold text-black mb-[10px] font-semibold">
                                      {item?.title}
                                    </div>
                                    <div className="text-sm">
                                      {item?.shortDesc}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </>
                        ) : null}
                      </div>
                    )}
                  </>
                );
              })

              /* 
            {courseLevel == "Certificate IV" ? (
              <>
                <div className="grid sm:grid-cols-3 gap-0 lg:gap-[10px] py-5 px-5 lg:px-[60px] border border-dashed lg:max-w-[632px] w-full">
                  {courseInfoData?.courseInfo?.map((item: any, i: any) => {
                    return (
                      <div
                        className="flex flex-col gap-4 border-r-0 sm:border-r border-dashed items-center py-[10px] px-1"
                        key={i}
                      >
                        <Image
                          src={item?.iconSrc}
                          alt="Study International Logo"
                          width={50}
                          height={50}
                          blurDataURL="/misc/logo.png"
                          placeholder="blur"
                        />
                        <div className="text-center">
                          <div className="text-lg lg:text-p1 font-semibold text-black mb-[10px] font-semibold">
                            {item?.title}
                          </div>
                          <div className="text-sm">{item?.shortDesc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null} */
            }
          </div>

          {courseLevel == "Certificate IV" ? (
            <>
              <div className="flex flex-col gap-[30px]">
                <div>
                  <Image
                    src="/study/course-info.jpg"
                    alt="Course Info"
                    width={960}
                    height={540}
                    blurDataURL="/study/course-info.jpg"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h5 className="mb-0">
                    Embark on your rewarding nursing career with a Diploma of
                    Nursing or Certificate IV!
                  </h5>
                  <div className="w-full h-[1px] bg-[#DBDBDB] mt-2 mb-4"></div>
                  <p>
                    This program equips you with the essential knowledge,
                    skills, and competencies to become a registered Enrolled
                    Nurse in Australia within 18-24 months. It's the perfect
                    entry point for individuals seeking a faster route into the
                    healthcare workforce and a fulfilling career in nursing.
                  </p>
                  <p>
                    With a Diploma or Certificate IV, you'll gain the confidence
                    to work in a variety of nurse settings, from hospitals and
                    aged care facilities to community health centers. You'll
                    receive comprehensive training in patient care,
                    communication, clinical skills, and professional ethics,
                    preparing you to make a real difference in people's lives.
                  </p>
                  <p className="mb-0">
                    This program is also flexible and affordable, offering
                    online, on-campus, and blended learning options to suit your
                    individual needs and preferences. Whether you're just
                    starting your nursing journey or looking to upskill for
                    career advancement, a Diploma or Certificate IV can be the
                    perfect stepping stone to achieve your goals.
                  </p>
                </div>
                <div>
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <h5 className="mb-0">Eligibility</h5>
                    <div className="w-full h-[1px] bg-[#DBDBDB] mt-2"></div>
                  </div>
                  <div>
                    <p className="mb-6 font-medium text-black">
                      Academic Requirements
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Successfully completed an Australian Year 12 or a
                            formal English language test and have achieved
                            numeracy skills that align to Level 3 of the
                            Australian Core Skills Framework (ACSF).
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Demonstrate that you meet the requirements of the
                            Nursing and Midwifery Board of Australia’s (NMBA)
                            English language skills registration standard
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-6 font-medium text-black">
                      English Requirements
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            International English Language Testing System
                            (IELTS) Academic test. Applicants must achieve a
                            minimum overall score of 7 and a minimum score of 7
                            in each of the four components - listening, reading,
                            writing and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Occupational English Test (OET) for nurses.
                            Applicants must achieve a minimum score of B in each
                            of the four components - listening, reading, writing
                            and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Pearson Test of English (PTE) Academic. Applicants
                            must achieve a minimum overall score of 65 AND a
                            minimum score of 65 in each of the four
                            communicative skills - listening, reading, writing
                            and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Test of English as a Foreign Language (TOEFL) iBT.
                            Applicants must achieve a minimum total score of 94
                            AND the following minimum score in each section of
                            the test - 24 listening, 24 reading, 27 writing, 23
                            speaking
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {courseLevel == "Bachelor Of Nursing" ? (
            <>
              <div className="flex flex-col gap-[30px]">
                <div>
                  <Image
                    src="/study/course-info.jpg"
                    alt="Course Info"
                    width={960}
                    height={540}
                    blurDataURL="/study/course-info.jpg"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h5 className="mb-0">
                    Unlock a World of Opportunity with a Bachelor of Nursing
                  </h5>
                  <div className="w-full h-[1px] bg-[#DBDBDB] mt-2 mb-4"></div>
                  <p>
                    Are you passionate about helping others and making a
                    positive impact on their lives? Do you seek a career that
                    offers intellectual challenge, diverse opportunities, and a
                    stable future? If so, then the Bachelor of Nursing might be
                    your ideal calling.
                  </p>
                  <p>
                    This internationally recognized degree equips you with the
                    knowledge, skills, and professional values to become a
                    registered nurse, opening doors to a rewarding and
                    fulfilling career in a variety of settings.
                  </p>
                  <p className="mb-0">
                    Embark on a journey of learning and discovery, exploring the
                    complexities of human health and disease, mastering clinical
                    skills, and developing your communication and critical
                    thinking abilities. With a Bachelor of Nursing, you'll be
                    prepared to make a real difference in the lives of
                    individuals and communities, while paving the way for
                    exciting career progression and leadership roles.
                  </p>
                </div>
                <div>
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <h5 className="mb-0">
                      Bachelor of Nursing Course Eligibility
                    </h5>
                    <div className="w-full h-[1px] bg-[#DBDBDB] mt-2"></div>
                  </div>
                  <div>
                    <p className="mb-6 font-medium text-black">Education</p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Successfully completed an Australian Year 12 or
                            equivalent qualification
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Met the English language skills requirements of the
                            Nursing and Midwifery Board of Australia (NMBA)
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Demonstrated academic achievement through a
                            recognized selection process
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-6 font-medium text-black">
                      English Requirements:
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            International English Language Testing System
                            (IELTS) Academic test. Applicants must achieve a
                            minimum overall score of 7 and a minimum score of 7
                            in each of the four components - listening, reading,
                            writing and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Occupational English Test (OET) for nurses.
                            Applicants must achieve a minimum score of B in each
                            of the four components - listening, reading, writing
                            and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Pearson Test of English (PTE) Academic. Applicants
                            must achieve a minimum overall score of 65 AND a
                            minimum score of 65 in each of the four
                            communicative skills - listening, reading, writing
                            and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            • Test of English as a Foreign Language (TOEFL) iBT.
                            Applicants must achieve a minimum total score of 94
                            AND the following minimum score in each section of
                            the test - 24 listening, 24 reading, 27 writing, 23
                            speaking
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {courseLevel == "Master of Nursing" ? (
            <>
              <div className="flex flex-col gap-[30px]">
                <div>
                  <Image
                    src="/study/course-info.jpg"
                    alt="Course Info"
                    width={960}
                    height={540}
                    blurDataURL="/study/course-info.jpg"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h5 className="mb-0">
                    Elevate Your Nursing Career with a Master of Nursing
                  </h5>
                  <div className="w-full h-[1px] bg-[#DBDBDB] mt-2 mb-4"></div>
                  <p>
                    Are you a registered nurse seeking to advance your
                    knowledge, skills, and expertise? Do you aspire to take on
                    leadership roles, delve deeper into specialized areas of
                    practice, or contribute to nursing research? Consider
                    pursuing a Master of Nursing, a postgraduate program
                    designed to equip you with the tools and knowledge to excel
                    in your chosen field.
                  </p>
                  <p>
                    This advanced degree offers a multitude of benefits beyond
                    clinical practice. Embark on a journey of intellectual
                    exploration, delving into advanced nursing theory,
                    conducting research, and honing your leadership and critical
                    thinking abilities. With a Master of Nursing, you'll be
                    prepared to become a leading expert in your chosen
                    specialty, contribute to the advancement of the nursing
                    profession, and make a significant impact on the healthcare
                    landscape.
                  </p>
                  <p className="mb-0">
                    Embrace the challenge of graduate-level study and unlock a
                    world of opportunities. Explore the diverse range of Master
                    of Nursing programs available and discover the exciting
                    possibilities that await you in the ever-evolving field of
                    nursing.
                  </p>
                </div>
                <div>
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <h5 className="mb-0">Eligibility</h5>
                    <div className="w-full h-[1px] bg-[#DBDBDB] mt-2"></div>
                  </div>
                  <div>
                    <p className="mb-6 font-medium text-black">
                      Academic Requirements
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            A completed Bachelor of Nursing or equivalent
                            qualification from a recognized university
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Registered nurse status with the Nursing and
                            Midwifery Board of Australia (NMBA)
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Demonstrated academic achievement through a
                            recognized selection process
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Meet the English language skills requirements of the
                            NMBA
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-6 font-medium text-black">
                      English Requirements
                    </p>
                    <ul className="flex flex-col gap-4">
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            International English Language Testing System
                            (IELTS) Academic test. Applicants must achieve a
                            minimum overall score of 7 and a minimum score of 7
                            in each of the four components - listening, reading,
                            writing and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Occupational English Test (OET) for nurses.
                            Applicants must achieve a minimum score of B in each
                            of the four components - listening, reading, writing
                            and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Pearson Test of English (PTE) Academic. Applicants
                            must achieve a minimum overall score of 65 AND a
                            minimum score of 65 in each of the four
                            communicative skills - listening, reading, writing
                            and speaking.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1.5 items-start">
                          <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                          <span className="text-lg ">
                            Test of English as a Foreign Language (TOEFL) iBT.
                            Applicants must achieve a minimum total score of 94
                            AND the following minimum score in each section of
                            the test - 24 listening, 24 reading, 27 writing, 23
                            speaking
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
