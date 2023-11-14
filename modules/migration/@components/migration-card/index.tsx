import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  data?: any;
}
const MigrationCard = ({ data }: propTypes) => {
  return (
    <Link
      href={data?.link}
      className="flex flex-col items-center justify-center gap-4 px-4 py-[30px] border rounded-md hover:shadow-[0_5px_15px_0px_rgba(0,0,0,0.10)] transition-all group h-full"
    >
      <div className="flex items-center justify-center w-[60px] h-[60px] rounded-[10px] bg-primary group-hover:bg-secondary transition-all">
        <Image
          src={data?.iconSrc || ""}
          alt={data?.alt}
          width={34}
          height={34}
        />
      </div>
      <h5 className="mb-0 text-lg font-medium text-center mb-auto">
        {data?.title}
      </h5>
    </Link>
  );
};

export default MigrationCard;
