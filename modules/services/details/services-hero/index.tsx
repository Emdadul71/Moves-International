import Image from "next/image";
import React from "react";

const ServiceHero = ({ data }: any) => {
  const heroData = data?.sectionHero;
  return (
    <section className="grid grid-cols-1">
      <div className="grid md:grid-cols-2 col-span-full	row-span-full">
        <div className="bg-primary"></div>
        <div className="hidden md:block w-full">
          <Image
            src="/misc/services-hero.jpg"
            alt="Study International Logo"
            width={960}
            height={540}
            blurDataURL="/misc/services-hero.jpg"
            placeholder="blur"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid place-items-center col-span-full	row-span-full	z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-[600px] w-full p-5 lg:p-0">
              <h1 className="text-white lg:text-[58px]">
                {/* Guiding Success: Your
                <span className="text-secondary"> Consultancy</span> Partner */}
                {heroData.title}
              </h1>
              <div className="max-w-[510px]">
                <p className="text-white text-lg">
                  {heroData?.shortDescription}
                </p>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
