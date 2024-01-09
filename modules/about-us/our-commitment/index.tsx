import Image from "next/image";
import React from "react";

const OurCommitment = () => {
  return (
    <section className="lg:pt-[80px] pt-5 mb-5 lg:mb-[60px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px] items-center">
          <div>
            <Image
              src="/service/rpl-recognition.png"
              alt="Recognition"
              width={960}
              height={540}
            />
          </div>
          <div className="from_texteditor_wrapper">
            <div className="flex items-center gap-[22px] mb-3">
              <Image
                src="/misc/flag.png"
                alt="Study International Logo"
                width={24}
                height={24}
                blurDataURL="/misc/flag.png"
                placeholder="blur"
              />

              <p className="text-p1 mb-0 text-primary font-medium">
                Our Commitment
              </p>
            </div>
            <h2 className="mb-5">
              <span className="text-secondary">
                Paving Your Pathway to Success:{" "}
              </span>
              100% Growth, Student-Centric Support, and Unwavering Integrity
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="font-semibold">Proven Track Record:</span> We
                have a proud history of helping countless international students
                achieve their dreams in Australia. Our 100% growth rate in the
                past two years speaks volumes about our dedication and success.
              </li>
              <li>
                <span className="font-semibold">Student-Centric Approach:</span>{" "}
                We believe in personalized service and prioritize your
                individual needs above all else. We are committed to providing
                unique solutions and exceeding your expectations.
              </li>
              <li>
                <span className="font-semibold">Professional Integrity:</span>{" "}
                We maintain the highest ethical standards and foster strong
                partnerships with educational institutions, ensuring accurate
                information and exceptional service.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
