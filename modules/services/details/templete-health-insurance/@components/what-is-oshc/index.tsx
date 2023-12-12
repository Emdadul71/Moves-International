import Image from "next/image";
import React from "react";

const WhatIsOSHC = ({ data }: any) => {
  const whatIsOSHCData = data && data?.whatIsOSHC && data?.whatIsOSHC;
  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] w-full mx-auto grid lg:grid-cols-2 gap-[30px] items-center">
          <div>
            <Image
              src={whatIsOSHCData?.imageSrc}
              alt={whatIsOSHCData?.title}
              width={630}
              height={540}
            />
          </div>
          <div>
            <h3 className="mb-5">{whatIsOSHCData?.title}</h3>
            <p className="mb-0 text-lg">{whatIsOSHCData?.shortDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsOSHC;
