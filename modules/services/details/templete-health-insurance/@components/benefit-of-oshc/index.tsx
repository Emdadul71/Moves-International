import Image from "next/image";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const BenefitOfOSHC = ({ data }: any) => {
  const benefitOfOSHCData = data && data?.benefitOfOSHC;
  return (
    <section className="bg-grey lg:pt-[80px] mb-5 lg:mb-[80px]">
      <div className="container">
        <div className="max-w-[1070px] mx-auto w-full ">
          <div className="grid lg:grid-cols-2 gap-[30px] items-center mb-5 lg:mb-9">
            <div>
              <Image
                src={benefitOfOSHCData?.featureImage}
                alt={benefitOfOSHCData?.alt}
                width={630}
                height={540}
              />
            </div>

            <div>
              <div className="mb-4">
                {benefitOfOSHCData?.title && (
                  <h3 className="mb-4 lg:mb-[22px]">
                    {benefitOfOSHCData?.title}
                  </h3>
                )}
                {benefitOfOSHCData?.shortDesc && (
                  <p className="text-base lg:mb-8">
                    {benefitOfOSHCData?.shortDesc}
                  </p>
                )}
                {benefitOfOSHCData?.listData && (
                  <ul className="flex flex-col gap-2">
                    {benefitOfOSHCData?.listData?.map((item: any, i: any) => {
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
            </div>
          </div>
          <div className="max-w-[850px] mx-auto w-full">
            <p className="mb-0 text-center">
              Maintaining optimal health is crucial for your academic success.
              Unexpected medical costs and paperwork can be overwhelming, making
              health insurance an indispensable aspect of your student life.
              While unforeseen circumstances are not expected, a cautious
              approach with proper health coverage ensures you can focus on your
              studies without unnecessary hassles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitOfOSHC;
