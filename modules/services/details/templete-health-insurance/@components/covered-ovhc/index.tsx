import Image from "next/image";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const CoveredOVHC = ({ data }: any) => {
  const coveredOBHCData = data && data?.coveredOBHC;
  return (
    <section className="bg-grey lg:pt-[80px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px] items-center max-w-[1070px] mx-auto w-full ">
          <div>
            <div className="mb-4">
              {coveredOBHCData?.title && (
                <h3 className="mb-4 lg:mb-[22px]">{coveredOBHCData?.title}</h3>
              )}
              {coveredOBHCData?.shortDesc && (
                <p className="text-base lg:mb-8">
                  {coveredOBHCData?.shortDesc}
                </p>
              )}
              {coveredOBHCData?.listData && (
                <ul className="flex flex-col gap-2">
                  {coveredOBHCData?.listData?.map((item: any, i: any) => {
                    return (
                      <li key={i}>
                        <div className="flex items-center gap-1.5">
                          <MdOutlineArrowForwardIos className="text-lg text-secondary" />
                          <p className="mb-0 text-lg font-medium text-primary">
                            {item}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <p>
              If you've recently completed your graduate program and applied for
              a temporary visa (subclass 485), we can efficiently assist you in
              transitioning from OSHC to OVHC.
            </p>
          </div>
          <div>
            <Image
              src={coveredOBHCData?.featureImage}
              alt={coveredOBHCData?.alt}
              width={630}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoveredOVHC;
