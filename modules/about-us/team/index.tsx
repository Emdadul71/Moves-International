import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import Image from "next/image";
import React from "react";
const teamData = [
  {
    name: "Waqas Charania",
    imgSrc: "/misc/team-1.jpg",
    designation: "Managing Director - Visa Services",
  },
  {
    name: "Sahar Sultan",
    imgSrc: "/misc/team-2.png",
    designation: "Admissions Manager",
  },
  {
    name: "Van Phuong Doan",
    imgSrc: "/misc/team-3.png",
    designation: "Educational Consultant",
  },
  {
    name: "Sayra Hasan Juthy",
    imgSrc: "/misc/team-2.png",
    designation: "Business Development Executive",
  },
  {
    name: "Waqas Charania",
    imgSrc: "/misc/team-1.jpg",
    designation: "Managing Director - Visa Services",
  },
  {
    name: "Sahar Sultan",
    imgSrc: "/misc/team-2.png",
    designation: "Admissions Manager",
  },
  {
    name: "Van Phuong Doan",
    imgSrc: "/misc/team-3.png",
    designation: "Educational Consultant",
  },
  {
    name: "Waqas Charania",
    imgSrc: "/misc/team-1.jpg",
    designation: "Managing Director - Visa Services",
  },
  {
    name: "Waqas Charania",
    imgSrc: "/misc/team-1.jpg",
    designation: "Managing Director - Visa Services",
  },
  {
    name: "Sahar Sultan",
    imgSrc: "/misc/team-2.png",
    designation: "Admissions Manager",
  },
  {
    name: "Sahar Sultan",
    imgSrc: "/misc/team-2.png",
    designation: "Admissions Manager",
  },
  {
    name: "Van Phuong Doan",
    imgSrc: "/misc/team-3.png",
    designation: "Educational Consultant",
  },
  {
    name: "Sayra Hasan Juthy",
    imgSrc: "/misc/team-2.png",
    designation: "Business Development Executive",
  },
  {
    name: "Van Phuong Doan",
    imgSrc: "/misc/team-3.png",
    designation: "Educational Consultant",
  },
  {
    name: "Sayra Hasan Juthy",
    imgSrc: "/misc/team-2.png",
    designation: "Business Development Executive",
  },
  {
    name: "Waqas Charania",
    imgSrc: "/misc/team-1.jpg",
    designation: "Managing Director - Visa Services",
  },
];
const Team = () => {
  return (
    <section className="pt-5 lg:pt-[80px]">
      <div className="container">
        <div className="max-w-[613px] w-full mx-auto text-center">
          <h2>Moves International’s Team</h2>
          <p>Experts, Visionaries and ACHIEVERS</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {teamData?.map((item, i) => {
            return (
              <div key={i} className="flex flex-col">
                <Image
                  src={item?.imgSrc}
                  alt="CEO"
                  width={300}
                  height={330}
                  className="w-full"
                />
                <div className="flex flex-col h-full p-5 text-center  border-[0.5px] border-t-0 border-[#D9D9D9] rounded-b-md shadow-[0_10px_26px_0_rgba(0,0,0,0.05)] mt-auto">
                  <h5 className="mb-1">{item?.name}</h5>

                  <p className="mb-0 mt-auto">{item?.designation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
