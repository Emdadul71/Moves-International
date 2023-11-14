"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const featureData = [
  {
    title: "Virtual Counselling",
    imgSrc: "/misc/virtual-counselling.png",
    shortDesc:
      "Connect to our skilled counsellors from the comfort of your home. Book a virtual session today.",
    bgColor: "bg-[#FFF07D]",
    link: "/virtual-counselling",
  },
  {
    title: "Speak to us today",
    imgSrc: "/misc/speak-to-us.png",
    shortDesc:
      "Get FREE education counselling and migration consultation from our experts. Reserve your spot",
    bgColor: "bg-[#B7F598]",
    link: "#",
  },
  {
    title: "Our offices are open",
    imgSrc: "/misc/our-office.png",
    shortDesc:
      "Talk to our counsellors face to face at our office. Book an appointment today.",
    bgColor: "bg-[#82DBF7]",
    link: "#",
  },
];

const Featured = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div className="container">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[30px] max-w-[1280px] mx-auto"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {featureData?.map((item, i) => {
            return (
              <Link
                href={item?.link}
                className={`${item?.bgColor} flex flex-col items-center p-[40px] gap-[45px] test_class rounded-md`}
                key={i}
              >
                <div className="max-w-[180px] w-full mx-auto">
                  <h3 className="h4 text-center mb-0">{item?.title}</h3>
                </div>
                <Image
                  src={item?.imgSrc}
                  alt="Study International Logo"
                  width={222}
                  height={180}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="max-w-[254px] mx-auto mt-auto">
                  <p className="text-sm text-center mb-0">{item?.shortDesc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Featured;
