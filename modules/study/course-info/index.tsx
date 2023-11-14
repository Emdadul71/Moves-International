"use client";
import { Tabs, TabsProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const CourseInfo = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Job Outcomes",
      children: (
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
              <span className="text-lg ">Perioperative n Theatres Nurse</span>
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
      ),
    },
    {
      key: "2",
      label: "Learning Outcomes",
      children: (
        <ul className="flex flex-col gap-2.5">
          <li>
            <div className="flex gap-1.5 items-center">
              <FiChevronRight className="text-secondary text-lg" />
              <span className="text-lg ">Perioperative n Theatres Nurse</span>
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
      ),
    },
  ];
  return (
    <section className="pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
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
              <h5 className="mb-0">Overview</h5>
              <div className="w-full h-[1px] bg-[#DBDBDB] mt-2 mb-4"></div>
              <p>
                The course is ideal for those who want to work across a broad
                range of specialisations and health care environments.
              </p>
              <p className="mb-0">
                This course will allow registered Nurses to proceed their career
                with Advanced Practice which will align to a range of
                professional Pathways. It offers Advanced Nursing Concept in the
                Chosen field of specialization through the applications of
                Theoretical Knowledge and Critical thinking Skills
              </p>
            </div>
            <div>
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h5 className="mb-0">Overview</h5>
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
                        Successfully completed an Australian Year 12 or a formal
                        English language test and have achieved numeracy skills
                        that align to Level 3 of the Australian Core Skills
                        Framework (ACSF).
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
                        International English Language Testing System (IELTS)
                        Academic test. Applicants must achieve a minimum overall
                        score of 7 and a minimum score of 7 in each of the four
                        components - listening, reading, writing and speaking.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-start">
                      <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                      <span className="text-lg ">
                        Occupational English Test (OET) for nurses. Applicants
                        must achieve a minimum score of B in each of the four
                        components - listening, reading, writing and speaking.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-start">
                      <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                      <span className="text-lg ">
                        Pearson Test of English (PTE) Academic. Applicants must
                        achieve a minimum overall score of 65 AND a minimum
                        score of 65 in each of the four communicative skills -
                        listening, reading, writing and speaking.
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-start">
                      <FiChevronRight className="text-secondary text-lg shrink-0 mt-2" />
                      <span className="text-lg ">
                        Test of English as a Foreign Language (TOEFL) iBT.
                        Applicants must achieve a minimum total score of 94 AND
                        the following minimum score in each section of the test
                        - 24 listening, 24 reading, 27 writing, 23 speaking
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:gap-[50px]">
            <div>
              <div className="flex flex-col gap-[16px] max-w-[471px] mx-auto">
                <div className="flex justify-center ">
                  <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
                    Diploma / Bachelor / Master Courses Available
                  </div>
                </div>
                <div className="max-w-[330px] mx-auto w-full">
                  <h3 className="text-center font-bold text-primary">
                    All there is to Know about Nursing
                  </h3>
                </div>
                <p className="text-center">
                  Nurses are in high demand globally and in Australia, and
                  consistently feature in the skills shortage list for
                  Australian PR.
                </p>
              </div>
              <div className="flex flex-col gap-4 max-w-[397px] mx-auto w-full">
                <Link
                  href="#"
                  className="btn btn-secondary w-full rounded-full"
                >
                  Diploma Of Nursing
                </Link>
                <Link
                  href="#"
                  className="btn w-full rounded-full hover:bg-secondary hover:text-white"
                >
                  Bachelor Of Nursing (Graduate Entry)
                </Link>
                <Link
                  href="#"
                  className="btn w-full rounded-full hover:bg-secondary hover:text-white"
                >
                  Bachelor Of Nursing
                </Link>
                <Link
                  href="#"
                  className="btn w-full rounded-full hover:bg-secondary hover:text-white"
                >
                  Masters Of Nursing
                </Link>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-0 lg:gap-[10px] py-5 px-5 lg:px-[60px] border border-dashed lg:max-w-[632px] w-full">
              <div className="flex flex-col gap-4 border-r-0 sm:border-r border-dashed items-center py-[10px] px-1">
                <Image
                  src="/home/achievement.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-lg lg:text-p1 font-semibold text-black mb-[10px] font-semibold">
                    Average Fees:
                  </div>
                  <div className="text-sm">20,000 - 30,000 AUD Per year</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-r-0 sm:border-r border-dashed items-center py-[10px] px-1">
                <Image
                  src="/home/rate.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-lg lg:text-p1 font-semibold text-black mb-[10px] font-semibold">
                    Course Duration:
                  </div>
                  <div className="text-sm">16 to 24 Months</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center items-center py-[10px] px-1">
                <Image
                  src="/home/bussiness-man.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-lg lg:text-p1 font-semibold text-black mb-[10px] font-semibold">
                    Course Intake:
                  </div>
                  <div className="text-sm">FEB | JULY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
