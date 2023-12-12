import Image from "next/image";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const AustraliaImmigration = ({ data }: any) => {
  const ausImmigrationData = data && data?.ausImmigration;
  return (
    <section className="bg-grey lg:pt-[80px]">
      <div className="container">
        <div className="max-w-[1070px] mx-auto w-full grid lg:grid-cols-2 gap-[30px]">
          <div>
            <div className="mb-5 lg:mb-10">
              {ausImmigrationData?.title && (
                <h3 className="mb-4 lg:mb-[22px]">
                  {ausImmigrationData?.title}
                </h3>
              )}
              {ausImmigrationData?.shortDesc && (
                <p className="text-base lg:mb-8">
                  {ausImmigrationData?.shortDesc}
                </p>
              )}
              {ausImmigrationData?.listData && (
                <ul className="flex flex-col gap-2">
                  {ausImmigrationData?.listData?.map((item: any, i: any) => {
                    return (
                      <li key={i}>
                        <div className="flex items-center gap-1.5">
                          <MdOutlineArrowForwardIos className="text-lg text-secondary" />
                          <p className="mb-0 text-lg font-medium text-primary">
                            {item}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <div>
            <Image
              src={ausImmigrationData?.featureImage}
              alt={ausImmigrationData?.alt}
              width={630}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustraliaImmigration;
