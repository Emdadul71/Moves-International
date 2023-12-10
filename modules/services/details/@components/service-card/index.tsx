import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface propsType {
  data?: any;
}

const ServiceCard = ({ data }: propsType) => {
  return (
    <Link href="#" className="flex flex-col gap-6 group ">
      <div>
        <Image
          src={data?.imgSrc}
          alt="CEO"
          width={270}
          height={290}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5 h-full  rounded-b-md  mt-auto relative">
        <div>
          <h4 className="lg:text-[28px] mb-5 group-hover:text-primary transition-all ">
            {data?.title}
          </h4>
          <p className="mb-0 mt-auto group-hover:text-body line-clamp-4">
            {data?.desc}
          </p>
        </div>
        <div className="relative  mt-auto">
          <div className="flex items-center mt-auto relative">
            <span className="text-secondary">Learn More</span>
            <FiArrowRight className="text-xl text-secondary absolute left-[25%] translate-x-[-50%] absolute group-hover:left-[calc(100%-15px)] transition-all duration-700" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
