import Image from "next/image";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { htmlParse, staticAsset } from "@/helpers/utils";

interface propTypes {
  classes?: {
    root?: string;
    overlay?: string;
  };
  data?: any;
}

const TestimonialCard = ({ classes, data }: propTypes) => {
  const yellowStar = parseInt(data.rating);
  const greyStar = 5 - data.rating;

  return (
    <div
      className={`flex flex-col bg-white rounded-md ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="flex items-center gap-5 mb-[30px]">
        <div className="w-[52px] h-[52px]">
          <Image
            src={`${data?.picture}`}
            width={52}
            height={52}
            alt="Testimonial"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-sm text-black font-bold m-0">{data?.name}</p>
          <p className="text-sm m-0">{data?.country}</p>
        </div>
      </div>

      <div className="text-lg font-normal mb-4 min-h-[220px] max-h-[220px] overflow-auto scrollbar show_hide">
        {htmlParse(data?.message)}
      </div>

      <div className="flex items-center gap-1 mt-auto">
        {new Array(yellowStar).fill(1).map((_, i) => {
          return <MdOutlineStar key={i} className="text-secondary" />;
        })}
        {new Array(greyStar).fill(1).map((_, i) => {
          return <MdOutlineStar key={i} className="text-greylight" />;
        })}
      </div>
    </div>
  );
};

export default TestimonialCard;
