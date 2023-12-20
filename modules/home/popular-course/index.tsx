"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import data from "@/data/courses.json";

interface propTypes {
  data?: any;
}

const PopularCourse = () => {
  return (
    <section className="bg-grey pt-5 lg:pt-[50px]">
      <div className="container">
        <div className="flex flex-col items-center gap-4 pb-5 lg:pb-[50px]">
          <h2 className="mb-0">Popular Courses</h2>
          <p className="text-lg text-center mb-0">
            what Moves International Australia can help with you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] h-full">
          {data?.data?.map((item: any, i: any) => {
            return (
              <Link
                href={item?.slug}
                key={i}
                className="flex flex-col h-full hover:shadow-[0_10px_16px_rgba(0,0,0,0.15)] rounded-md group/coursecard"
              >
                <Image
                  src={item?.imgSrc}
                  alt="Study International Logo"
                  width={960}
                  height={180}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="flex flex-col h-full p-5 border border-[#D9D9D9] rounded-b-md group-hover/coursecard:border-transparent">
                  <div className="mb-4 h-full">
                    <h5 className="hover:text-secondary mb-[10px] line-clamp-2">
                      {item?.name}
                    </h5>
                    <p className="mb-0">{item?.shortDesc}</p>
                    <div className="w-full h-[1px] bg-[#D9D9D9] my-[15px]"></div>
                    <ul className="flex flex-col gap-1">
                      {item?.category?.map((cat: any, i: any) => {
                        return (
                          <li key={i}>
                            <div className="flex items-center gap-[10px]">
                              <IoIosArrowDroprightCircle className="text-secondary text-base" />
                              <p className="mb-0 text-black">{cat}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="flex justify-start items-center btn px-0 text-secondary group/courselink mt-auto">
                    <span> Find out More</span>
                    <div className="w-full h-[18px] relative">
                      <RiArrowRightLine className="text-lg  left-0 top-[1px] absolute group-hover/courselink:left-[calc(100%-135px)] transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
