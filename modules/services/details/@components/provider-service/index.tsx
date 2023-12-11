import Image from "next/image";
import React from "react";
interface propTypes {
  classes?: {
    root?: any;
  };
}

const partnerData = [
  {
    imgSrc: "/misc/navitas.png",
    link: "https://www.newcastle.edu.au/",
  },
  {
    imgSrc: "/misc/eca.png",
    link: "https://www.westernsydney.edu.au/",
  },
  {
    imgSrc: "/misc/performance.png",
    link: "https://www.deakin.edu.au/",
  },
  {
    imgSrc: "/misc/stanley.png",
    link: "https://www.westernsydney.edu.au/",
  },
];

const ProviderService = ({ classes }: propTypes) => {
  return (
    <section className={`${classes?.root ? classes.root : ""}`}>
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-[50px] gap-4 max-w-[450px] mx-auto">
          <h2 className="mb-0 text-primary">Provider</h2>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {partnerData?.map((item: any, i: any) => {
            return (
              <div
                className="border rounded bg-white hover:shadow-two hover:border-transparent transition-all"
                key={i}
              >
                <a
                  href="#"
                  rel="nofollow"
                  target="_blank"
                  className="flex items-center justify-center w-full h-full p-4"
                >
                  <Image
                    src={item?.imgSrc}
                    alt="Moves International"
                    width={180}
                    height={93}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProviderService;
