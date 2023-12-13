import Image from "next/image";
import React from "react";

const KeyReasons = ({ data }: any) => {
  const keyReasonData =
    data && data?.sectionKeyReasons && data?.sectionKeyReasons;
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="self-start lg:sticky top-[140px]">
            <Image
              src={keyReasonData?.featureImage}
              alt={keyReasonData?.alt}
              width={630}
              height={540}
            />
          </div>

          <div>
            {keyReasonData?.title && (
              <h3 className="mb-4 lg:mb-[22px]">{keyReasonData?.title}</h3>
            )}
            {keyReasonData?.shortDesc && (
              <p className="text-lg lg:mb-8">{keyReasonData?.shortDesc}</p>
            )}

            <div className="flex flex-col gap-5 lg:gap-[30px] ">
              {keyReasonData?.eligibility?.map((item: any, i: any) => {
                const isLast = i == 2 && keyReasonData?.isLanding;
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

export default KeyReasons;
