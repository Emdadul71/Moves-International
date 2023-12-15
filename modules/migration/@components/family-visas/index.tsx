import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FamilyVisas = ({ data }: any) => {
  const familyVisaData =
    data && data?.sectionFamilyVisas && data?.sectionFamilyVisas;
  return (
    <>
      {familyVisaData ? (
        <section className="lg:pt-[60px]">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-[30px] items-center">
              <div>
                <Image
                  src={familyVisaData?.imgSrc}
                  alt="Eligibility Criteria"
                  width={960}
                  height={540}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-[30px]">
                <h2 className="mb-0">{familyVisaData?.title}</h2>
                <div>
                  <ul className="flex flex-col gap-4">
                    {familyVisaData?.subclasses?.map((item: any, i: any) => {
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
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default FamilyVisas;
