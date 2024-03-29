import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard = ({ data }: any) => {
  return (
    <Link href={`/team/${data?.slug}`} className="flex flex-col h-full">
      <div className="w-[300px] h-[300px]">
        <Image
          src={
            data?.profileImage ||
            "https://api.studyinternational.net.au/uploads/media/rectangle-705.jpg"
          }
          alt="CEO"
          width={960}
          height={540}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col h-full p-5 text-center  border-[0.5px] border-t-0 border-[#D9D9D9] rounded-b-md shadow-[0_10px_26px_0_rgba(0,0,0,0.05)] mt-auto">
        {data?.name && (
          <h5 className="mb-1 hover:text-secondary transition-all">
            {data?.name}
          </h5>
        )}
        {data?.designation && <p className="mb-0">{data?.designation?.name}</p>}
      </div>
    </Link>
  );
};

export default TeamCard;
