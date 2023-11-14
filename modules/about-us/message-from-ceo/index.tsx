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
                      <a href="tel:880 0280689051" className="block">
                        (02) 8068 9051
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="inline-flex items-center gap-[10px]  rounded-md">
                      <HiEnvelope className="text-secondary" />
                      <a
                        href="mailto:michelle.rivera@example.com"
                        className="block text-sm"
                      >
                        michelle.rivera@example.com
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
              Embark on a transformative journey with us at Moves International!
              Our passion is guiding you towards world-class education in
              Australia. Experience cultural diversity, academic excellence, and
              unforgettable memories. Your global future starts here, as we
              ensure your study abroad dreams become a successful reality.
              Welcome to boundless opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromCeo;
