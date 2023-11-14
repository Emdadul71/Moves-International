import React from "react";
import Hero from "./@components/hero";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const LifeInAustralia = () => {
  return (
    <>
      <Hero />
      {new Array(5).fill(1).map((_, i) => {
        return (
          <section key={i}>
            <div className="container">
              <div className="max-w-[1070px] w-auto mx-auto">
                <div className="grid lg:grid-cols-2 gap-[30px] items-center">
                  <div className={`${i % 2 == 0 ? `` : `order-1`}`}>
                    <h2 className="mb-5">Lorem ipsum</h2>
                    <p className="mb-5 text-lg">
                      Lorem ipsum dolor sit amet consectetur. Convallis posuere
                      amet fringilla aliquam etiam nunc. Sem sit porttitor et
                      fringilla fringilla nec et. Eget dictum orci placerat
                      risus convallis. Volutpat dictum at sodales cursus fusce
                      faucibus. Diam ultrices semper elementum id feugiat elit
                      sagittis. Massa proin nullam aliquam elit. Vestibulum nibh
                      proin nibh vitae suscipit lorem eget. Sagittis consequat
                      amet lectus tempor.
                    </p>
                    <button className="flex items-center btn btn-primary rounded-md">
                      Learn More
                      <FiArrowRight />
                    </button>
                  </div>
                  <div className="rounded-md">
                    <Image
                      src="/misc/life-in-austalia.png"
                      alt="Study International Logo"
                      width={520}
                      height={520}
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default LifeInAustralia;
