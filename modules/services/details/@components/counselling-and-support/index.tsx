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
        <div className="flex flex-col gap-4 max-w-[830px] mx-auto w-full ">
          {data?.path ? (
            <div className="flex">
              <div className="bg-[#FEEFE7] text-secondary px-4 py-[6px] rounded-full">
                {data?.path}
              </div>
            </div>
          ) : null}

          <h2 className="h3  mb-0 lg:leading-[48px]">
            {CounsellingAndSupportData?.title}
          </h2>
          <p className="mb-0 ">{CounsellingAndSupportData?.shortDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default CounsellingAndSupport;
