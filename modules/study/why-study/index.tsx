import Image from "next/image";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const WhyStudy = () => {
  return (
    <section className="bg-grey pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[54px]">
          <div className="flex flex-col gap-[22px] self-start max-w-[494px] w-full lg:sticky top-[140px]">
            <div className="flex items-center gap-[22px]">
              <Image
                src="/study/nursing-logo.png"
                alt="Study International Logo"
                width={24}
                height={24}
                blurDataURL="/study/nursing-logo.png"
                placeholder="blur"
              />

              <p className="text-p1 mb-0 text-primary font-medium">
                Study in Nursing
              </p>
            </div>
            <h2 className="mb-0">
              <span className="block"> Why Study</span>
              <span className="text-secondary"> Nursing </span> Now ?
            </h2>
            <p className="text-p1 mb-0">
              Australia will experience a shortfall of nurses in 10 years,
              meaning a high demand will rise for nursing graduate students. The
              increasing need for registered nurses and nurse specialists is due
              to the higher dependence on the healthcare system in general,
              driven by an ageing population, the rising cost of treatment, and
              rising consumer expectations. More importantly, the healthcare
              industry has been evolving with new knowledge and practices needed
              to apply. Work as an Enrolled Nurse anywhere in Australia with a
              Diploma of Nursing for international students. Get a chance to
              enter the workforce and learn the skills to work as a nurse for 18
              to 24 months! You will experience working in various nurse
              settings and continue studying to complete your Bachelors of
              Nursing.
            </p>
            <div className="flex justify-start items-center btn px-0 text-secondary hover:text-primary mt-auto transition-all">
              <span className="text-lg"> Read More</span>
              <RiArrowRightLine className="text-base mt-[2px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-[30px]">
            <div className="flex flex-col gap-[22px] p-5 lg:p-[30px] bg-white rounded-md">
              <div>
                <Image
                  src="/study/salary.png"
                  alt="salary"
                  width={60}
                  height={60}
                  blurDataURL="/study/salary.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="text-secondary mb-3 text-black text-2xl font-semibold">
                  High Salary
                </p>
                <p className="text-lg font-medium mb-0">
                  Estimated average salary for a registered nurse is around
                  $75,332 per annum.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] p-5 lg:p-[30px] bg-white rounded-md">
              <div>
                <Image
                  src="/study/career.png"
                  alt="career"
                  width={60}
                  height={60}
                  blurDataURL="/study/career.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="text-secondary mb-3 text-black text-2xl font-semibold">
                  High Salary
                </p>
                <p className="text-lg font-medium mb-0">
                  Estimated average salary for a registered nurse is around
                  $75,332 per annum.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] p-5 lg:p-[30px] bg-white rounded-md">
              <div>
                <Image
                  src="/study/pathway.png"
                  alt="pathway"
                  width={60}
                  height={60}
                  blurDataURL="/study/pathway.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="text-secondary mb-3 text-black text-2xl font-semibold">
                  High Salary
                </p>
                <p className="text-lg font-medium mb-0">
                  Estimated average salary for a registered nurse is around
                  $75,332 per annum.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] p-5 lg:p-[30px] bg-white rounded-md">
              <div>
                <Image
                  src="/study/high-demand.png"
                  alt="High demand"
                  width={60}
                  height={60}
                  blurDataURL="/study/high-demand.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="text-secondary mb-3 text-black text-2xl font-semibold">
                  High Salary
                </p>
                <p className="text-lg font-medium mb-0">
                  Estimated average salary for a registered nurse is around
                  $75,332 per annum.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] p-5 lg:p-[30px] bg-white rounded-md">
              <div>
                <Image
                  src="/study/affordable.png"
                  alt="Affordable"
                  width={60}
                  height={60}
                  blurDataURL="/study/affordable.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="text-secondary mb-3 text-black text-2xl font-semibold">
                  High Salary
                </p>
                <p className="text-lg font-medium mb-0">
                  Estimated average salary for a registered nurse is around
                  $75,332 per annum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
