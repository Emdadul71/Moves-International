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
          {data?.path ? (
            <div className="flex">
              <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
                {data?.path}
              </div>
            </div>
          ) : null}

          <h2 className="h3  mb-0 lg:leading-[48px]">
            {CounsellingAndSupportData?.title}
          </h2>
          <p className="mb-0 ">{CounsellingAndSupportData?.shortDescription}</p>
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
              {CounsellingAndSupportData?.nativeService?.title}
            </h2>

            <p className="mb-0 text-p1">
              This is just a simple text made for Essentials.
            </p>
            <div>
              <ul className="flex flex-col gap-3.5">
                {CounsellingAndSupportData?.nativeService?.services?.map(
                  (item: any, i: any) => {
                    return (
                      <li key={i}>
                        <div className="flex gap-1.5 items-center">
                          <FiChevronRight className="text-secondary text-lg" />
                          <span className="text-lg font-medium text-primary">
                            {item}
                          </span>
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingAndSupport;
