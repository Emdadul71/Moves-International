import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary pt-5 lg:pt-[90px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-[30px]">
          <div className="max-w-[480px] w-full">
            <h1 className="mb-3 text-white">
              Virtual <span className="text-secondary">Counselling</span>
            </h1>
            <div className="max-w-[556px]">
              <p className="text-white text-lg">
                Connect to our skilled counsellors from the comfort of your
                home. Book a virtual session today.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/misc/virtual-counselling-hero.png"
              alt="Moves International"
              width={960}
              height={540}
              blurDataURL="/misc/virtual-counselling-hero.png"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
