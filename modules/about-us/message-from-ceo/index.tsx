import Image from "next/image";
import React from "react";
import { HiEnvelope } from "react-icons/hi2";
import { RiPhoneFill } from "react-icons/ri";

const MessageFromCeo = () => {
  return (
    <section className="pt-[80px]">
      <div className="container">
        <div className="max-w-[1070px] w-full mx-auto grid lg:grid-cols-[550px_1fr] gap-5 lg:gap-[78px] items-center">
          <div>
            <div className="relative">
              <Image
                src="/misc/ceos-message.png"
                alt="CEO"
                width={354}
                height={506}
                blurDataURL="/misc/ceos-message.png"
                placeholder="blur"
              />
              <div className="max-w-[292px] flex flex-col gap-[18px] px-[30px] py-[15px] bg-white shadow-[0_20px_40px_-15px_rgba(2,48,71,0.06)] rounded-md absolute right-0 bottom-[28px]">
                <div>
                  <h5 className="text-primary mb-1">Shakil Shikdar</h5>
                  <p className="mb-0">CEO at Moves International</p>
                </div>
                <div>
                  <div className="flex mb-[6px]">
                    <div className="inline-flex items-center gap-[10px]  rounded-md">
                      <RiPhoneFill className="text-secondary" />
                      <a href="tel:+61 434 051 189" className="block">
                        +61 434 051 189
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="inline-flex items-center gap-[10px]  rounded-md">
                      <HiEnvelope className="text-secondary" />
                      <a
                        href="mailto:shakil@mieducation.com.au"
                        className="block text-sm"
                      >
                        shakil@mieducation.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-[319px] w-full">
              <h2 className="mb-3 lg:mb-[26px]">
                Message From <span className="text-secondary">Our CEO</span>
              </h2>
            </div>
            <p className="text-lg">
              I started this for all those who dream of studying or migrating to
              beautiful Australia. Therefore, we have started building a strong
              bond with so many Australian universities for a long time. The
              purpose is to ensure the right info with the interested
              candidates, turn their dream into reality, and ultimately allow
              them to reach their future goals. of Australia and your visa is
              expired, you will need to wait for the arrival of the visa before
              entering Australia. Call us for any further queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromCeo;
