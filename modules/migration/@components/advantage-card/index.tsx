import React from "react";

const AdvantageCard = ({ isOdd, data }: any) => {
  return (
    <div className={`${isOdd ? `bg-[#FFFBF9]` : `bg-[#F4FAFC]`} p-[30px]`}>
      <h4 className="lg:text-[28px]">{data?.title}</h4>
      <p className="mb-0">{data?.desc}</p>
    </div>
  );
};

export default AdvantageCard;
