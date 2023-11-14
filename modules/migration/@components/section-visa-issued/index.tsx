import Image from "next/image";
import React from "react";

const SectionVisaIssued = ({ data }: any) => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] w-full mx-auto grid grid-cols-2 gap-[30px] items-center">
          <div className="migration">
            <h2>{data?.sectionVisaIssued?.title}</h2>
            <p className="text-lg">
              {data?.sectionVisaIssued?.shortDescription}
            </p>
            <ul className="flex flex-col gap-[14px] ">
              {data?.sectionVisaIssued?.visaList?.map((item: any, i: any) => {
                return (
                  <li className="text-lg text-primary font-medium" key={i}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Image
              src="/migration/visa-issued.png"
              alt=""
              width={960}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionVisaIssued;
