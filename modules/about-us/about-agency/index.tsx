import Image from "next/image";
import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { RiArrowRightLine } from "react-icons/ri";

const AboutAgency = () => {
  return (
    <section className="pt-5 lg:pt-[100px] bg-grey">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
          <div className="flex flex-col gap-[22px] self-start border border-dashed lg:py-[35.5px] lg:px-[50px]">
            <div className="flex items-center gap-[22px]">
              <Image
                src="/misc/flag.png"
                alt="Study International Logo"
                width={24}
                height={24}
                blurDataURL="/misc/flag.png"
                placeholder="blur"
              />

              <p className="text-p1 mb-0 text-primary font-medium">Our Story</p>
            </div>
            <h2 className="mb-0">
              <span className="text-secondary ">Moves International</span> was
              founded on the vital premise
            </h2>
            <p className="text-p1 mb-0">
              At Moves International, we believe our potential is independent of
              our nation’s potential, and that we have the right to separate our
              trajectory from that of our birthplace. We are the true ‘masters
              of our fate, the captains of our souls.’ We control and determine
              our destinies, not our birthplaces.
            </p>
            <div className="flex justify-start items-center btn px-0 text-secondary hover:text-primary mt-auto transition-all">
              <span className="text-base"> Read More</span>
              <RiArrowRightLine className="text-base" />
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="relative cursor-pointer">
              <div>
                <Image
                  src="/misc/about-agency.jpg"
                  alt="Moves International "
                  width={960}
                  height={540}
                  blurDataURL="/misc/about-agency.jpg"
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-white absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]">
                <BsPlayFill className="text-[28px] text-secondary" />
              </div>
            </div>

            <div className="grid lg:grid-cols-[auto_1px_auto_1px_auto] gap-[55px] py-5 px-[60px] border border-dashed max-w-[632px]">
              <div className="flex flex-col gap-4 justify-center items-center">
                <Image
                  src="/home/achievement.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-[28px] font-semibold text-black">
                    2009
                  </div>
                  <div className="text-sm">Established In</div>
                </div>
              </div>
              <div className="border-l border-dashed hidden md:block"></div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <Image
                  src="/home/rate.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-[28px] font-semibold text-black">
                    175k+
                  </div>
                  <div className="text-sm">Satisfied Clients</div>
                </div>
              </div>
              <div className="border-l border-dashed hidden md:block"></div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <Image
                  src="/home/bussiness-man.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-[28px] font-semibold text-black">
                    50+
                  </div>
                  <div className="text-sm">RMA Agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
