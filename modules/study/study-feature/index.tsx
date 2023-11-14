import Image from "next/image";
import React from "react";

const StudyFeature = () => {
  return (
    <section className="pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-[30px]">
          <div className="flex flex-col gap-[30px] p-5 lg:px-[30px] lg:py-[40px] border border-[0.5] border-[#D9D9D9] bg-[#F8F9FA] rounded-md hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.05)] ">
            <div>
              <Image
                src="/study/stable-occupation.png"
                alt="Study International Logo"
                width={110}
                height={110}
                blurDataURL="/study/stable-occupation.png"
                placeholder="blur"
              />
            </div>
            <div>
              <h5 className="text-[28px] text-primary">Stable Occupation</h5>
              <p className="text-lg mb-0">
                Nursing is a career with plenty of good. designations. It is
                known for being a secure profession that provides opportunities
                for growth and success, and for being la rewarding job that is
                more than just a paycheck.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] p-5 lg:px-[30px] lg:py-[40px] border border-[0.5] border-[#D9D9D9] bg-[#F8F9FA] rounded-md hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.05)] ">
            {" "}
            <div>
              <Image
                src="/study/nurse.png"
                alt="Study International Logo"
                width={110}
                height={110}
                blurDataURL="/study/nurse.png"
                placeholder="blur"
              />
            </div>
            <div>
              <h5 className="text-[28px] text-primary">PR Pathway Course</h5>
              <p className="text-lg mb-0">
                Enlisted in MLTSSL(Medium and Long-term Strategic Skills List)
                for the longest time and now enlisted in 17 Prime Occupation,
                Nursing has more potential PR visas to apply for.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] p-5 lg:px-[30px] lg:py-[40px] border border-[0.5] border-[#D9D9D9] bg-[#F8F9FA] rounded-md hover:shadow-[0_10px_20px_0_rgba(0,0,0,0.05)] ">
            <div>
              <Image
                src="/study/australia.png"
                alt="Study International Logo"
                width={110}
                height={110}
                blurDataURL="/study/australia.png"
                placeholder="blur"
              />
            </div>
            <div>
              <h5 className="text-[28px] text-primary">Nursing in Australia</h5>
              <p className="text-lg mb-0">
                With Good Career progression and high Employment Opportunity
                Nursing is one of the top Profession for international Students
                in Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyFeature;
