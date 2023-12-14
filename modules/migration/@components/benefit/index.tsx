import Image from "next/image";
import React from "react";

const Benefits = ({ data }: any) => {
  const benefitsData = data?.sectionBenefits;
  return (
    <section className="pt-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="self-start lg:sticky top-[140px]">
            <Image
              src={benefitsData?.imgSrc}
              alt="Study International Logo"
              width={630}
              height={540}
              blurDataURL="/misc/engage.png"
              placeholder="blur"
            />
          </div>
          <div>
            <h2 className="h3">{benefitsData?.title}</h2>
            <div className="flex flex-col gap-5 lg:gap-[30px] ">
              {benefitsData?.benefits?.map((item: any, i: any) => {
                return (
                  <div
                    className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey"
                    key={i}
                  >
                    <div>
                      <Image
                        src={item?.iconSrc}
                        alt="Study International Logo"
                        width={60}
                        height={60}
                        blurDataURL="/misc/engage.png"
                        placeholder="blur"
                      />
                    </div>
                    <div>
                      <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                        {item?.title}
                      </p>
                      <p className="text-lg">{item?.desc}</p>
                    </div>
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

export default Benefits;
