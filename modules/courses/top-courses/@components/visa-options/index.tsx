import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const VisaOptions = ({ data }: any) => {
  const visaOptionsData =
    data && data?.sectionVisaOptions && data?.sectionVisaOptions;
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="self-start lg:sticky top-[140px]">
            <Image
              src={visaOptionsData?.featureImage}
              alt={visaOptionsData?.alt}
              width={630}
              height={540}
            />
          </div>

          <div>
            {visaOptionsData?.title && (
              <h3 className="mb-4 lg:mb-[22px]">{visaOptionsData?.title}</h3>
            )}
            {visaOptionsData?.shortDesc && (
              <p className="text-lg lg:mb-8">{visaOptionsData?.shortDesc}</p>
            )}

            {visaOptionsData?.visaOptions?.map((item: any, i: any) => {
              return (
                <div key={i}>
                  <p className="text-black font-medium">{item?.title}</p>

                  <ul className="flex flex-col gap-4 mb-4">
                    {item.options?.map((item: any, i: any) => {
                      return (
                        <li key={i}>
                          <div className="flex items-start gap-1.5 ">
                            <MdOutlineArrowForwardIos className="text-base text-secondary shrink-0 mt-1" />
                            <p className="mb-0">{htmlParse(item)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            {visaOptionsData?.visaOptions && (
              <>
                <ul className="flex flex-col gap-2">
                  {visaOptionsData?.visaOptions?.options?.map(
                    (item: any, i: any) => {
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
                    }
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaOptions;
