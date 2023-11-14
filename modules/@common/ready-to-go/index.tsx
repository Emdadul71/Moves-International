import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ReadyToGo = () => {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[496px_1fr] justify-between gap-8 lg:gap-[130px] bg-secondary py-5 lg:py-[60px] px-5 lg:px-[94px] lg:mb-[-140px] z-50 relative rounded-md">
          <div className="flex flex-col items-center lg:items-start gap-[30px] order-1 lg:order-0">
            <div>
              <h2 className="text-white lg:text-[45px] mb-3 text-center lg:text-start">
                Ready to go for higher education opportunity?
              </h2>
              <p className="mb-0 text-white text-center lg:text-start">
                <span className="block">
                  Interested in studying in Australia?
                </span>{" "}
                Enter your details and we'll call you back when it suits you.
              </p>
            </div>
            <div>
              <Link
                href="/virtual-counselling"
                className="btn btn-white inline-flex gap-[10px] px-[30px] py-5 rounded-md"
              >
                <span className="text-lg">Book Appointment</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="order-0 lg:order-1">
            <Image
              src="/misc/ready-to-go.png"
              alt="Moves International"
              width={960}
              height={540}
              blurDataURL="/misc/logo-dark.png"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGo;
