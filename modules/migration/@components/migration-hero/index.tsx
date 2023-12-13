import { htmlParse } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MigrationHero = ({ data, params }: any) => {
  const sectionHeroData = data && data?.sectionHero && data?.sectionHero;
  return (
    <section className="bg-primary py-5 lg:pt-[100px] mb-5 lg:mb-[80px]">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-[30px] pb-20">
          <div className="flex flex-col justify-between h-full max-w-[620px] w-full ">
            <div className="flex flex-col items-start justify-center ">
              <h1 className="text-white lg:text-[64px] pt-20">
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

          <div>
            <Image
              src={
                sectionHeroData?.featuredImage || `/misc/life-in-austalia.png`
              }
              alt={sectionHeroData?.title}
              width={570}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
