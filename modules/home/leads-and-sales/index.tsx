import Image from "next/image";
import React from "react";
import { RiPhoneFill } from "react-icons/ri";

const LeadsAndSales = () => {
  return (
    <section className="pt-5 lg:pt-[60px] lg:sticky top-[62px] z-[60] ">
      <div className="container">
        <div className="px-6 lg:px-[60px] py-[26px] grid lg:grid-cols-[298px_350px_auto] justify-center lg:justify-between items-center gap-[20px] shadow-[0_20px_30px_0_rgba(0,0,0,0.04)] rounded-md bg-white">
          <div className="flex justify-center items-center gap-5">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/misc/user-2.jpg"
                alt="Moves International"
                width={80}
                height={80}
                blurDataURL="/misc/logo.png"
                placeholder="blur"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="mb-0 font-medium text-black">Sandy Reiff</p>
              <p className="mb-0 text-sm">Marketing Consultant Expert</p>
            </div>
          </div>
          <div>
            <h5 className="text-[26px] text-center leading-[33px] mb-0">
              Drive Leads and Sales with Moves International
            </h5>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-[10px] bg-[#FEEFE7] px-[30px] py-4 rounded-md">
              <RiPhoneFill className="text-secondary" />
              <a href="tel:880 0280689051" className="block text-secondary">
                (02) 8068 9051
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsAndSales;
