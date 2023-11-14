import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px]">
          <div className="border border-dashed p-5 lg:p-[50px] rounded-xl self-start lg:sticky top-[140px]">
            <div className="max-w-[165px]">
              <h2>
                How it <span className="text-secondary">Works?</span>
              </h2>
            </div>
            <div className="max-w-[495px] ">
              <p className="mb-0 text-p1">
                Lorem ipsum dolor sit amet consectetur. Mauris id ipsum sed sed.
                Vestibulum vel egestas pharetra maecenas tincidunt lacinia. Ut
                nunc turpis tellus posuere sed molestie odio. Etiam praesent
                rhoncus amet eu tempor cras lectus ipsum vitae. Non tempus hac
                fermentum eu tristique tellus diam enim. Risus nisi tortor fusce
                non dui bibendum. Pretium ac venenatis.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:gap-[30px] ">
            <div className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey">
              <div>
                <Image
                  src="/misc/book-a-consultation.png"
                  alt="Study International Logo"
                  width={60}
                  height={60}
                  blurDataURL="/misc/book-a-consultation.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                  Book a Consultation with Us
                </p>
                <p className="text-lg">
                  We'll determine your visa possibilities after a thorough
                  discussion of your situation. We provide a variety of
                  consultation alternatives so that you may obtain the finest
                  advice that is personalized to your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey">
              <div>
                <Image
                  src="/misc/engage.png"
                  alt="Study International Logo"
                  width={60}
                  height={60}
                  blurDataURL="/misc/engage.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                  Engage Us to Lodge Your Visa Application
                </p>
                <p className="text-lg">
                  When you sign up for our services, you will be assigned to a
                  Registered Migration Agent who will assist you throughout the
                  application process.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey">
              <div>
                <Image
                  src="/misc/loadge-liaise.png"
                  alt="Study International Logo"
                  width={60}
                  height={60}
                  blurDataURL="/misc/loadge-liaise.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                  We Prepare, Lodge & Liaise On Your Behalf
                </p>
                <p className="text-lg">
                  We will request the necessary proof and information from you
                  so that we can prepare and lodge the most effective
                  application and submissions possible. Every step of the way,
                  we keep you informed.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey">
              <div>
                <Image
                  src="/misc/visa-granted.png"
                  alt="Study International Logo"
                  width={60}
                  height={60}
                  blurDataURL="/misc/visa-granted.png"
                  placeholder="blur"
                />
              </div>
              <div>
                <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                  Your Visa Gets Granted! Welcome To Australia!
                </p>
                <p className="text-lg">
                  Apart from the celebrations (which we enjoy as much as you),
                  you and your partner can now relax and look forward to your
                  wonderful future together in Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
