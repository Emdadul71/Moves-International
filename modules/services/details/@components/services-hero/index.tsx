import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceHero = ({ data, params }: any) => {
  const sectionHeroData = data && data?.sectionHero && data?.sectionHero;

  return (
    <section className="grid grid-cols-1 h-full">
      <div className="grid md:grid-cols-2 col-span-full	row-span-full">
        <div className="bg-primary h-full"></div>

        <div className="hidden md:block w-full">
          <Image
            src={sectionHeroData?.featuredImage || `/misc/life-in-austalia.png`}
            alt={sectionHeroData?.title}
            width={960}
            height={540}
            className="w-full"
          />
        </div>
      </div>
      <div className="grid place-items-center col-span-full	row-span-full	z-10">
        <div className="container h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
            <div className="flex flex-col justify-between h-full max-w-[620px] w-full p-5 lg:pb-20">
              <div className="flex flex-col items-start justify-center h-full">
                <h1 className="text-white lg:text-[64px]">
                  {htmlParse(data?.sectionHero?.title)}
                </h1>
                <div className="max-w-[510px]">
                  <p className="text-white text-lg">
                    {data?.sectionHero?.shortDescription}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Link
                  href="/"
                  className="text-white text-lg hover:text-secondary"
                >
                  Home
                </Link>
                <span className="w-[4px] h-[4px] bg-grey rounded-full"></span>
                <Link
                  href="/services"
                  className="text-white text-lg hover:text-secondary"
                >
                  Service
                </Link>
                {data?.parentPath ? (
                  <>
                    <span className="w-[4px] h-[4px] bg-grey rounded-full"></span>

                    <Link
                      href={`${data?.parentSlug}`}
                      className={`text-lg hover:text-secondary text-white`}
                    >
                      {data?.parentPath}
                    </Link>
                  </>
                ) : null}
                {data?.path ? (
                  <>
                    <span className="w-[4px] h-[4px] bg-grey rounded-full"></span>

                    <Link
                      href=""
                      className={`text-lg hover:text-secondary ${
                        data?.slug == params ? `text-secondary` : ``
                      }`}
                    >
                      {data?.path}
                    </Link>
                  </>
                ) : null}
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
