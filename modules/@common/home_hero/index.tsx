"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const HomeHero = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section className="pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <div className="flex gap-3 items-start">
              <div className="bg-grey inline-block px-4 py-[6px] rounded-full text-sm text-primary">
                Rated 4.9 Stars
              </div>
              <div className="flex gap-2 mt-2">
                {new Array(5).fill(1).map((_, i) => {
                  return (
                    <FaStar className="fill-[#FFAB1A] text-base" key={i} />
                  );
                })}
              </div>
            </div>

            <h1 className="lg:text-[54px] lg:leading-[63px]">
              Your Trusted
              <span className="text-secondary inline-block">
                Education & Migration
              </span>
              Consultants
            </h1>

            <div className="max-w-[470px] w-full">
              <p className="text-lg">
                When you want solutions about your profession, education, visa
                or health insurance, you deserve the best as you try it from
                your soul.
              </p>
            </div>

            <div className="mb-12">
              <Link
                href="/virtual-counselling"
                className="btn btn-primary inline-flex gap-[10px] px-[30px] py-5 rounded-md"
              >
                <span className="text-lg">Book Appointment</span>
                <FaArrowRight />
              </Link>
            </div>

            <div className="max-w-[428px] border-t border-[#DADADA] ">
              <div className="flex gap-11 mt-9">
                <div>
                  <span className="text-black h3">
                    <CountUp
                      start={focus ? 0 : undefined}
                      end={10}
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
                  </span>
                  <p className="text-sm">Year of Exprience</p>
                </div>
                <div>
                  <span className="text-black h3">
                    <CountUp
                      start={focus ? 0 : undefined}
                      end={5000}
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
                  </span>
                  <p className="text-sm">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/misc/home-hero.png"
              alt="Study International Logo"
              width={760}
              height={730}
              blurDataURL="/misc/home-hero.png"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
