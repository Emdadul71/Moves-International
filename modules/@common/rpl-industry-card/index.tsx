import Image from "next/image";
import React from "react";

interface propTypes {
  data?: any;
}
const RplIndustryCard = ({ data }: propTypes) => {
  return (
    <div className="flex flex-col ">
      <div className="rounded-t-md">
        <Image
          src={data?.imgSrc}
          alt=""
          width={960}
          height={540}
          className="rounded-t-md"
        />
      </div>
      <div className="flex flex-col h-full p-6 border border-t-0 rounded-b-md">
        <h5 className="mb-0 ">{data?.title}</h5>
      </div>
    </div>
  );
};

export default RplIndustryCard;
