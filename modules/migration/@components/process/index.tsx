import Image from "next/image";
import React from "react";

const Process = ({ data }: any) => {
  const processData = data?.sectionProcess;
  return (
    <section className="pt-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="self-start lg:sticky top-[140px]">
            <Image
              src={processData?.imgSrc}
              alt="Process"
              width={630}
              height={540}
              blurDataURL="/misc/engage.png"
              placeholder="blur"
            />
          </div>
          <div>
            <h2>{processData?.title}</h2>
            {processData?.shortDesc ? (
              <>
                <p className="text-xl">{processData?.shortDesc}</p>
              </>
            ) : null}
            <div className="flex flex-col gap-5 lg:gap-[30px] ">
              {processData?.process?.map((item: any, i: any) => {
                return (
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
