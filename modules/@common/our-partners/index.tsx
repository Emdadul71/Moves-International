import Image from "next/image";
import React from "react";
interface propTypes {
  classes?: {
    root?: any;
  };
}

const partnerData = [
  {
    imgSrc: "/misc/new-castle.png",
    link: "https://www.newcastle.edu.au/",
  },
  {
    imgSrc: "/misc/western-sydney.png",
    link: "https://www.westernsydney.edu.au/",
  },
  {
    imgSrc: "/misc/deakin.png",
    link: "https://www.deakin.edu.au/",
  },
  {
    imgSrc: "/misc/western-sydney.png",
    link: "https://www.westernsydney.edu.au/",
  },
  {
    imgSrc: "/misc/canberra.png",
    link: "https://www.canberra.edu.au/",
  },
  {
    imgSrc: "/misc/western-sydney.png",
    link: "https://www.westernsydney.edu.au/",
  },
  {
    imgSrc: "/misc/canberra.png",
    link: "https://www.canberra.edu.au/",
  },
  {
    imgSrc: "/misc/deakin.png",
    link: "https://www.deakin.edu.au/",
  },
  {
    imgSrc: "/misc/canberra.png",
    link: "https://www.canberra.edu.au/",
  },
  {
    imgSrc: "/misc/deakin.png",
    link: "https://www.deakin.edu.au/",
  },
  {
    imgSrc: "/misc/western-sydney.png",
    link: "https://www.westernsydney.edu.au/",
  },
  {
    imgSrc: "/misc/deakin.png",
    link: "https://www.deakin.edu.au/",
  },
];

const OurPartners = ({ classes }: propTypes) => {
  return (
    <section className={`${classes?.root ? classes.root : ""}`}>
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-[50px] gap-4 max-w-[450px] mx-auto">
          <h2 className="mb-0">Our Partners</h2>
          <p className="mb-0 text-center">
            Study at Australia's leading universities & colleges
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[30px]">
          {partnerData?.map((item: any, i: any) => {
            return (
              <div
                className="relative border rounded bg-white hover:shadow-two hover:border-transparent transition-all"
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
                    width={80}
                    height={58}
                    blurDataURL="/misc/new-castle.png"
                  />

                  <div className="absolute bottom-[6px] right-[6px]">
                    <Image
                      src="/misc/navitas.png"
                      alt="Moves International"
                      width={36}
                      height={16}
                      blurDataURL="/misc/navitas.png"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
