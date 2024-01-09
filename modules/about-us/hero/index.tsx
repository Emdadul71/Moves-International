import Image from "next/image";
import React from "react";

const AboutUsHero = () => {
  return (
    <section className="bg-primary pt-5 lg:pt-[70px]">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_520px] items-center lg:gap-[110px]">
          <div>
            <h1 className="mb-3 text-white font-semibold">
              <span className="block">Best Migration</span> Agents &
              <span className="text-secondary"> EDUCATION</span> Consultants
            </h1>
            <div className="max-w-[598px]">
              <p className="text-white text-lg">
                We are registered migration agents & education consultants in
                Australia. We have 5k+ Satisfied Clients.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/misc/about-us-hero.png"
              alt="Moves International"
              width={960}
              height={540}
              blurDataURL="/misc/about-us-hero.png"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
