"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutMovesInt = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section className="bg-grey pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.48fr] items-end gap-5 lg:gap-[50px]">
          <div className="drop-shadow-[0_18px_37px_rgba(0,0,0,0.25)] flex justify-center">
            <div>
              <Image
                src="/home/about-moves-int-home.png"
                alt="Study International Logo"
                width={490}
                height={340}
                blurDataURL="/misc/logo.png"
                placeholder="blur"
              />
            </div>
          </div>
          <div>
            <h2>
              <span className="text-[28px] block font-normal">About</span> Moves
              International
            </h2>
            <div className="max-w-[565px] w-full">
              <p className="font-semibold mb-1">
                WELCOME TO MOVES INTERNATIONAL THE TRUSTED EDUCATION CONSULTENCY
                SYDNEY YOU NEED NOW
              </p>
            </div>
            <p>
              When you want solutions about your profession, education, visa or
              health insurance, you deserve the best as you try it from your
              soul. In this tough and troublesome journey, we are with you.
            </p>
            <div className="grid grid-cols-3 gap-0 lg:gap-[10px] py-5 px-5 lg:px-[60px] border border-dashed lg:max-w-[632px] w-full">
              <div className="flex flex-col gap-4 border-r border-dashed items-center py-[10px] px-1">
                <Image
                  src="/home/achievement.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-lg lg:text-[28px] font-semibold text-black">
                    <CountUp
                      start={focus ? 2000 : undefined}
                      end={2009}
                      duration={2}
                      redraw={true}
                      separator=""
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
                          ></VisibilitySensor>
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <div className="text-[13px]">Established In</div>
                </div>
              </div>

              <div className="flex flex-col gap-4  border-r border-dashed items-center py-[10px] px-1">
                <Image
                  src="/home/rate.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-lg lg:text-[28px] font-semibold text-black">
                    <CountUp
                      start={focus ? 0 : undefined}
                      end={175}
                      duration={2}
                      redraw={true}
                      suffix="K"
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
                  </div>
                  <div className="text-[13px]">Satisfied Clients</div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center items-center py-[10px] px-1">
                <Image
                  src="/home/bussiness-man.png"
                  alt="Study International Logo"
                  width={50}
                  height={50}
                  blurDataURL="/misc/logo.png"
                  placeholder="blur"
                />
                <div className="text-center">
                  <div className="text-lg lg:text-[28px] font-semibold text-black">
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
                  </div>
                  <div className="text-[13px]">RMA Agents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovesInt;
