"use client";
import Image from "next/image";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const OurStory = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section className="pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="max-w-[854px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[494px_1fr] gap-5 lg:gap-[54px]">
          <div className="flex flex-col gap-[22px] self-start lg:sticky top-[200px]">
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
            <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
              <h2 className="text-secondary mb-[6px]">
                <CountUp
                  start={focus ? 0 : undefined}
                  end={20000}
                  duration={2}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <VisibilitySensor
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setFocus(true);
                          }
                        }}
                      >
                        <span>+</span>
                      </VisibilitySensor>
                    </div>
                  )}
                </CountUp>
              </h2>
              <p className="text-lg font-medium">best-fit Student</p>
            </div>
            <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
              <h2 className="text-secondary mb-[6px]">
                <CountUp
                  start={focus ? 0 : undefined}
                  end={50}
                  duration={2}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <VisibilitySensor
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setFocus(true);
                          }
                        }}
                      >
                        <span>+</span>
                      </VisibilitySensor>
                    </div>
                  )}
                </CountUp>
              </h2>
              <p className="text-lg font-medium">University Partners</p>
            </div>
            <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
              <h2 className="text-secondary mb-[6px]">
                <CountUp
                  start={focus ? 0 : undefined}
                  end={2}
                  duration={2}
                  redraw={true}
                  suffix=" Million"
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <VisibilitySensor
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setFocus(true);
                          }
                        }}
                      >
                        <span>+</span>
                      </VisibilitySensor>
                    </div>
                  )}
                </CountUp>
              </h2>
              <p className="text-lg font-medium">Student Counselling's</p>
            </div>
            <div className="px-[27px] py-[44px] text-center bg-grey rounded-md">
              <h2 className="text-secondary mb-[6px]">
                {" "}
                <CountUp
                  start={focus ? 0 : undefined}
                  end={80}
                  duration={2}
                  redraw={true}
                  suffix=" Million"
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <VisibilitySensor
                        onChange={(isVisible: any) => {
                          if (isVisible) {
                            setFocus(true);
                          }
                        }}
                      >
                        <span>+</span>
                      </VisibilitySensor>
                    </div>
                  )}
                </CountUp>
              </h2>
              <p className="text-lg font-medium">Website Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
