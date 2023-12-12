import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

const PartnerInHealthCoverage = ({ data }: any) => {
  const partnerInHealthData =
    data && data?.partnerInHealth && data?.partnerInHealth;
  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] w-full mx-auto grid lg:grid-cols-2 gap-[30px] items-center">
          <div>
            <h3 className="mb-5">{partnerInHealthData?.title}</h3>
            <div className="mb-0 text-lg">
              {htmlParse(partnerInHealthData?.shortDesc)}
            </div>
          </div>
          <div>
            <Image
              src={partnerInHealthData?.imageSrc}
              alt={partnerInHealthData?.title}
              width={630}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInHealthCoverage;
