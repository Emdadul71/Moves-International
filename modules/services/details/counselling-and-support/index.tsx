import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";

const CounsellingAndSupport = ({ data }: any) => {
  const CounsellingAndSupportData = data && data?.SectionCounsellingAndSupport;
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4 max-w-[830px] mx-auto w-full mb-[100px]">
          <div className="flex justify-center ">
            <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
              Diploma / Bachelor / Master Courses Available
            </div>
          </div>
          <h2 className="h3 text-center mb-0 lg:leading-[48px]">
            {CounsellingAndSupportData?.title}
          </h2>
          <p className="mb-0 text-center">
            {CounsellingAndSupportData?.shortDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-[630px_1fr] items-center gap-[45px] mb-[60px]">
          <div className="rounded-md ">
            <Image
              src="/misc/native-features.jpg"
              alt="Study International Logo"
              width={960}
              height={550}
              blurDataURL="/misc/native-features.jpg"
              placeholder="blur"
              className="rounded-md"
            />
          </div>

          <div className="flex flex-col gap-[22px]">
            <div>
              <span className="inline-block bg-[#FEEFE7] px-4 py-[6px] rounded-full text-secondary">
                Native Features
              </span>
            </div>

            <h2 className="mb-0 lg:leading-[55px]">
              Create stunning websites and landing pages in minutes!
            </h2>

            <p className="mb-0 text-p1">
              This is just a simple text made for Essentials.
            </p>

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
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-[30px]">
          <div className="flex flex-col gap-4">
            <p className="mb-0 text-primary font-semibold text-[28px]">
              Easy to use features
            </p>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>
            <div className="flex justify-start items-center btn px-0 text-secondary group/courselink mt-auto ">
              <span> Find out More</span>
              <div className="w-full h-[18px] relative">
                <RiArrowRightLine className="text-lg  left-0 top-[1px] absolute group-hover/courselink:left-[calc(100%-290px)] transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="mb-0 text-primary font-semibold text-[28px]">
              Premium products
            </p>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>
            <div className="flex justify-start items-center btn px-0 text-secondary group/courselink mt-auto ">
              <span> Find out More</span>
              <div className="w-full h-[18px] relative">
                <RiArrowRightLine className="text-lg  left-0 top-[1px] absolute group-hover/courselink:left-[calc(100%-290px)] transition-all duration-300" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="mb-0 text-primary font-semibold text-[28px]">
              Unlimited Possibilities
            </p>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>
            <div className="flex justify-start items-center btn px-0 text-secondary group/courselink mt-auto ">
              <span> Find out More</span>
              <div className="w-full h-[18px] relative">
                <RiArrowRightLine className="text-lg  left-0 top-[1px] absolute group-hover/courselink:left-[calc(100%-290px)] transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingAndSupport;
