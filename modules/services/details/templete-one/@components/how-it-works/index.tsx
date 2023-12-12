import Image from "next/image";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const HowItWorks = ({ data }: any) => {
  const howItWorksData =
    data && data?.sectionHowItWorks && data?.sectionHowItWorks;
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="self-start lg:sticky top-[140px]">
            <Image
              src={howItWorksData?.featureImage}
              alt={howItWorksData?.alt}
              width={630}
              height={540}
            />
          </div>

          <div>
            <div className="mb-5 lg:mb-10">
              {howItWorksData?.title && (
                <h3 className="mb-4 lg:mb-[22px]">{howItWorksData?.title}</h3>
              )}
              {howItWorksData?.shortDesc && (
                <p className="text-base lg:mb-8">{howItWorksData?.shortDesc}</p>
              )}
              {howItWorksData?.listData && (
                <ul className="flex flex-col gap-2">
                  {howItWorksData?.listData?.map((item: any, i: any) => {
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

            <div className="flex flex-col gap-5 lg:gap-[30px] ">
              {howItWorksData?.eligibility?.map((item: any, i: any) => {
                const isLast = i == 2 && howItWorksData?.isLanding;
                return (
                  <>
                    <div
                      className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey"
                      key={i}
                    >
                      <div>
                        <Image
                          src={item?.iconSrc}
                          alt={item?.title}
                          width={60}
                          height={60}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                          {item?.title}
                        </p>
                        <p className="text-lg">{item?.desc}</p>
                      </div>
                    </div>

                    {isLast ? (
                      <div className="flex justify-center items-center ">
                        <p className="mb-0 text-lg text-primary">
                          These outlined requirements ensure that candidates
                          possess the necessary educational background and
                          language skills to actively participate in and benefit
                          from the Professional Year Program, setting them on a
                          path towards successful career development.
                        </p>
                      </div>
                    ) : null}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
