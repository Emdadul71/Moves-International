import Image from "next/image";
import React from "react";

const StudyLandingHero = () => {
  return (
    <section className="bg-primary pt-8 lg:pt-[70px]">
      <div className="container">
        <div className="grid lg:grid-cols-[598px_1fr] items-center gap-5 lg:gap-[94px]">
          <div className="flex flex-col gap-5">
            <div className="flex ">
              <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full text-sm lg:text-base">
                Diploma / Bachelor / Master Courses Available
              </div>
            </div>

            <h1 className="mb-0 text-white font-semibold">
              Studying
              <span className="text-secondary"> Nursing</span> Courses in
              Australia
            </h1>

            <div className="max-w-[598px]">
              <p className="text-white text-lg">
                Nurses are in high demand globally and in Australia, and
                consistently feature in the skills shortage list for Australian
                PR.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/study/study-hero.png"
              alt="Moves International"
              width={960}
              height={540}
              blurDataURL="/study/study-hero.png"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyLandingHero;
