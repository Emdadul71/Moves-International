import Image from "next/image";
import React from "react";

const WhoUseCard = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-4 p-[30px] border border-[#DBDBDB]">
      <div>
        <Image src={data?.iconSrc} alt="" width={62} height={62} />
      </div>
      <h4 className="lg:text-[28px] mb-0">{data?.title}</h4>
      <p className="mb-0">{data?.desc}</p>
    </div>
  );
};

export default WhoUseCard;
