import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PartnerVisas = ({ data }: any) => {
  const partnerVisaData =
    data && data?.sectionPartnerVisas && data?.sectionPartnerVisas;
  return (
    <>
      {partnerVisaData ? (
        <section className="lg:pt-[60px]">
          <div className="container">
            <div className="grid grid-cols-2 gap-[30px] items-center">
              <div className="flex flex-col gap-[30px]">
                <h2 className="mb-0">{partnerVisaData?.title}</h2>
                <div>
                  <ul className="flex flex-col gap-4">
                    {partnerVisaData?.subclasses?.map((item: any, i: any) => {
                      return (
                        <li key={i}>
                          <div className="flex items-start gap-3">
                            <FaArrowRight className="mt-1.5 shrink-0	" />
                            <p className="mb-0 text-lg text-primary">
                              {htmlParse(item)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* <div>
          <Link href="" className="btn btn-primary rounded-md">
            Learn More
          </Link>
        </div> */}
              </div>
              <div>
                <Image
                  src={partnerVisaData?.imgSrc}
                  alt="Eligibility Criteria"
                  width={960}
                  height={540}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PartnerVisas;
