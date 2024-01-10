import { staticAsset } from "@/helpers/utils";
import Image from "next/image";
import React from "react";

const OfficeAddress = () => {
  return (
    <section className="bg-secondarylight">
      <div className="container">
        <div className="max-w-[870px] mx-auto pt-[40px] lg:pt-[80px]">
          <h3 className="text-center mb-[40px]">Our Office Address</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src="/misc/bangladesh.png"
                  width={50}
                  height={50}
                  alt="bangladesh office"
                />
              </div>
              <p className="m-0 text-lg font-bold text-black mt-[30px]">
                Bangladesh Office
              </p>
              <p className="m-0 text-center mt-3">
                2/A, Mir Noor Square (12 Floor), Dhanmondi, Dhaka 1209,
                Bangladesh
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src="/misc/sydney.png"
                  width={50}
                  height={50}
                  alt="bangladesh office"
                />
              </div>
              <p className="m-0 text-lg  text-black mt-[30px]">
                <span className="font-bold">Sydney Office </span>
              </p>
              <p className="m-0 text-center mt-3">
                Level 2/251 Elizabeth St, Sydney NSW 2000
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <Image
                  src="/misc/perth.png"
                  width={50}
                  height={50}
                  alt="bangladesh office"
                />
              </div>
              <p className="m-0 text-lg text-black mt-[30px] whitespace-nowrap">
                <span className="font-bold">Perth Office </span>
              </p>
              <p className="m-0 text-center mt-3">
                Suite: 1, 15 Delawney, Balcatta, Western Australia-6021,
                Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeAddress;
