import Image from "next/image";
import React from "react";

const Eligibility = ({ data }: any) => {
  const eligibilityData = data?.sectionEligibility;
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="self-start lg:sticky top-[140px]">
            <Image
              src="/migration/eligibility.jpg"
              alt="Study International Logo"
              width={630}
              height={540}
              blurDataURL="/misc/engage.png"
              placeholder="blur"
            />
          </div>

          <div>
            {eligibilityData?.title && (
              <h2 className="mb-4 lg:mb-[22px]">{eligibilityData?.title}</h2>
            )}
            {eligibilityData?.shortDesc && (
              <p className="text-lg lg:mb-8">{eligibilityData?.shortDesc}</p>
            )}

            <div className="flex flex-col gap-5 lg:gap-[30px] ">
              {eligibilityData?.eligibility?.map((item: any, i: any) => {
                const isLast = i == 2 && eligibilityData?.isLanding;
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
                          RPL is a valuable tool for anyone who has developed
                          competencies through practical experience and wants to
                          receive formal recognition without undergoing
                          additional training or education. It’s especially
                          beneficial for those aiming to meet specific industry
                          standards or seeking to validate their expertise for
                          career progression.
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

export default Eligibility;
