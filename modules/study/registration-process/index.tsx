"use client";
import { Collapse, CollapseProps, theme } from "antd";
import Image from "next/image";
import React, { CSSProperties } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const data = [
  {
    title: "Option: A",
    desc: "Certification Substantially Equivalent",
    bgColor: "#FFF07D",
    steps: [
      {
        title: "Step 1",
        desc: "Orientation Part 1 & 2",
      },
      {
        title: "Step 2",
        desc: "Registration",
      },
    ],
  },
  {
    title: "Option: B",
    desc: "Relevant but not Substantially Equivalent",
    bgColor: "#B7F598",
    steps: [
      {
        title: "Step 1",
        desc: "Outcome Based Assess Part 1 (MCQ)",
      },
      {
        title: "Step 2",
        desc: "Outcome Based Assess Part 2",
      },
      {
        title: "Step 3",
        desc: "Registration",
      },
    ],
  },
  {
    title: "Option: C",
    desc: "Qualification not substantially equivalent",
    bgColor: "#82DBF7",
    steps: [
      {
        title: "Step 1",
        desc: "Complete NMBA Approved program of study",
      },
      {
        title: "Step 2",
        desc: "Registration",
      },
    ],
  },
];

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "NMBA/AHPRA 4 Mandatory Registration Criteria",
    children: (
      <ol className="list-decimal	px-[15px] leading-[30px] text-base">
        <li>English Language proficiency</li>
        <li>Recency of practice</li>
        <li>Criminal History check</li>
        <li>Professional Indemnity Insurance</li>
      </ol>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "NMBA/AHPRA 4 Qualification Criteria",
    children: (
      <ol>
        <li>English Language proficiency</li>
        <li>Recency of practice</li>
        <li>Criminal History check</li>
        <li>Professional Indemnity Insurance</li>
      </ol>
    ),
    style: panelStyle,
  },
];

const RegistrationProcess = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 16,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <section className="pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-[50px] gap-4 max-w-[634px] mx-auto">
          <h2 className="mb-0">Registration Process</h2>
          <p className="mb-0 text-lg text-center">
            Registration Process For Internationally Qualified Nurses And
            Midwives (Iqnm)
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="border border-dashed p-5 lg:p-[50px] self-start">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <div className="flex ">
                  <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
                    Internationally qualified nurses and midwives
                  </div>
                </div>
                <h2 className="mb-0">
                  (IQNMs) - Wanting to Register in Australia
                </h2>
                <p className="mb-0">
                  Many internationally qualified nurses and midwives (IQNM) may
                  be questioning whether in Australia they can get their nursing
                  registration. Well If you are Internationally Qualified Nurse
                  Here we are going to take you through some steps to get your
                  nursing registration in Australia that you need to pursue.
                  First You will need to be registered within the Registration
                  Bodies namely:
                </p>
              </div>
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 border border-dashed max-w-[632px] py-5 w-full bg-grey">
                <div className="flex flex-col gap-4 justify-center items-center  mx-auto h-full border-r-0 sm:border-r border-dashed  px-[50px]">
                  <FaCircleCheck className="text-[48px] text-[#00AD64]" />
                  <div className="text-center flex flex-col h-full">
                    <div className="text-[24px] font-semibold text-black mb-[10px]">
                      NMBA
                    </div>
                    <div className="text-sm mb-0">
                      (Nursing & Midwifery Board of Australia)
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center mx-auto px-[50px]">
                  <FaCircleCheck className="text-[48px] text-[#00AD64]" />

                  <div className="text-center flex flex-col h-full">
                    <div className="text-[24px] font-semibold text-black mb-[10px]">
                      AHPRA
                    </div>
                    <div className="text-sm">
                      (Australian Health Practitioners Regulation Agency)
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Collapse
                  defaultActiveKey={["1"]}
                  onChange={onChange}
                  expandIconPosition="end"
                  accordion={true}
                  style={{ background: token.colorBgContainer }}
                  items={getItems(panelStyle)}
                  bordered={false}
                  className="registration_process"
                />
              </div>
            </div>
          </div>
          <div className="max-w-[520px]">
            <div className="flex flex-col gap-8">
              {data?.map((item: any, i: any) => {
                return (
                  <div className="flex flex-col gap-8 border-l" key={i}>
                    <div className="grid lg:grid-cols-[110px_1fr]">
                      <div className="left grid place-items-center relative">
                        <div className="w-[2px] h-[50%] absolute left-[-1px] top-0 bg-white z-2"></div>
                        <span className="border-b w-full h-[1px]"></span>
                      </div>
                      <div
                        className={`right px-5 py-4 bg-[${item?.bgColor}] rounded-md`}
                      >
                        <h5 className="mb-[10px] text-black">{item?.title}</h5>
                        <p className="text-black mb-0">{item?.desc}</p>
                      </div>
                    </div>
                    {item?.steps?.map((step: any, i: any) => {
                      const last = item?.steps.length - 1 == i;

                      return (
                        <div className="grid grid-cols-[110px_1fr]" key={i}>
                          <div className="left grid place-items-center relative">
                            {last && (
                              <div className="w-[2px] h-[50%] absolute left-[-1px] bottom-0 bg-white z-2"></div>
                            )}
                            <span className="border-b w-full h-[1px]"></span>
                          </div>
                          <div className="right border px-5 py-4">
                            <h5 className="mb-[10px] text-primary">
                              {step?.title}
                            </h5>
                            <p className="mb-0">{step?.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;
