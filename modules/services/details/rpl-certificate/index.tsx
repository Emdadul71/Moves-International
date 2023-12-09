import Image from "next/image";
import React from "react";

const RPLCertificate = ({ data }: any) => {
  const rplCertificateData =
    data && data?.rplCertificate && data?.rplCertificate;

  const lenth = rplCertificateData.length;

  return (
    <section>
      <div className="container">
        <div className="max-w-[1070px] mx-auto grid lg:grid-cols-[340px_1fr] gap-[100px]">
          <div className="self-start lg:sticky top-[140px]">
            <h2>How to get RPL Certificate</h2>
          </div>

          <div className="flex flex-col gap-5 lg:gap-[30px] border-l  border-l-[#DBDBDB] pl-[60px] relative">
            <div className="absolute top-0 -left-[1px] w-[1px] h-[50px] bg-white z-10"></div>
            {rplCertificateData?.map((item: any, i: any) => {
              const isBorder = i + 1;

              return (
                <>
                  <div
                    className="flex flex-col gap-[22px] p-4 lg:p-[30px] bg-grey relative"
                    key={i}
                  >
                    <div className="absolute top-[50px] right-[100%] w-[60px] h-[1px] bg-[#DBDBDB]"></div>

                    <div
                      className={`w-[80px] h-[80px] flex justify-center items-center rounded-full !bg-[${item?.iconBg}] z-50 relative`}
                    >
                      <Image
                        src={item?.iconSrc}
                        alt="Study International Logo"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div>
                      <p className="mb-0 text-[26px] font-semibold text-black mb-3">
                        {item?.title}
                      </p>
                      <p className="text-lg">{item?.desc}</p>
                    </div>
                    {lenth == isBorder && (
                      <div className="absolute bottom-0 -left-[61px] w-[1px] h-[calc(100%-14%)] bg-white z-10 "></div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPLCertificate;
