import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const EligibilityCriteria = ({ data }: any) => {
  const eligibilityCriteriaData =
    data && data?.eligibilityCriteria && data?.eligibilityCriteria;
  return (
    <section className="lg:pt-[60px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="flex flex-col gap-[30px]">
            <h2 className="mb-0">Eligibility Criteria</h2>
            <div>
              <p>{eligibilityCriteriaData?.shortDesc}</p>
              <ul className="flex flex-col gap-4">
                {eligibilityCriteriaData?.criteria?.map((item: any, i: any) => {
                  return (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        <FaArrowRight />
                        <p className="mb-0 text-lg text-primary">{item}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Link href="" className="btn btn-primary rounded-md">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={eligibilityCriteriaData?.imageSrc}
              alt="Eligibility Criteria"
              width={960}
              height={540}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
