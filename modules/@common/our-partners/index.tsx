import Image from "next/image";
import Link from "next/link";
import React from "react";
interface propTypes {
  classes?: {
    root?: any;
  };
}

const partnerData = [
  {
    imgSrc: "/misc/partner/univ-of-melbour.png",
    link: "/the-university-of-melbourne-unimelb",
  },
  {
    imgSrc: "/misc/partner/unsw-uni.png",
    link: "/the-university-of-new-south-wales-unsw",
  },
  {
    imgSrc: "/misc/partner/sydney-university.png",
    link: "/the-university-of-sydney",
  },
  {
    imgSrc: "/misc/partner/aun.png",
    link: "/australian-national-university",
  },
  {
    imgSrc: "/misc/partner/monash-uni.png",
    link: "/monash-university-monash",
  },
  {
    imgSrc: "/misc/partner/queensland.png",
    link: "/the-university-of-queensland",
  },
  {
    imgSrc: "/misc/partner/uni-of-western-aus.png",
    link: "/the-university-of-western-australia-uwa",
  },
  {
    imgSrc: "/misc/partner/university-of-adelide.png",
    link: "/the-university-of-adelaide-adelaide",
  },
  {
    imgSrc: "/misc/partner/uts.png",
    link: "/university-of-technology-sydney-uts",
  },
  {
    imgSrc: "/misc/partner/macquarie.png",
    link: "/macquarie-university-macquarie",
  },
  {
    imgSrc: "/misc/partner/rmit.png",
    link: "/rmit-training-pty-ltd",
  },
  {
    imgSrc: "/misc/partner/wollongong.png",
    link: "/university-of-wollongong-uow",
  },
  {
    imgSrc: "/misc/partner/university-of-newcastle.png",
    link: "/the-university-of-newcastle-uon",
  },
  {
    imgSrc: "/misc/partner/curtin-university.png",
    link: "/curtin-university",
  },
  {
    imgSrc: "/misc/partner/deakin.png",
    link: "/deakin-university-deakin",
  },
  {
    imgSrc: "/misc/partner/queensland-uni-of-tech.png",
    link: "/queensland-university-of-technology-qut",
  },
  {
    imgSrc: "/misc/partner/la-trobe.png",
    link: "/la-trobe-university-la-trobe",
  },
  {
    imgSrc: "/misc/partner/griffith.png",
    link: "/griffith-university",
  },
  {
    imgSrc: "/misc/partner/swinburne.png",
    link: "/swinburne-university-of-technology",
  },
  {
    imgSrc: "/misc/partner/university-of-tasmania.png",
    link: "/university-of-tasmania-utas",
  },
  {
    imgSrc: "/misc/partner/university-of-south-australia.png",
    link: "/university-of-south-australia-unisa",
  },
  {
    imgSrc: "/misc/partner/western-sydney.png",
    link: "/western-sydney-university",
  },
  {
    imgSrc: "/misc/partner/flinders-uni.png",
    link: "/flinders-university",
  },
  {
    imgSrc: "/misc/partner/uni-of-southern-queensland.png",
    link: "/university-of-southern-queensland",
  },
  {
    imgSrc: "/misc/partner/james-cook-university.png",
    link: "/james-cook-university",
  },
  {
    imgSrc: "/misc/partner/university-of-canberra.png",
    link: "/university-of-canberra",
  },
  {
    imgSrc: "/misc/partner/murdoch-university.png",
    link: "/murdoch-university-murdoch",
  },
  {
    imgSrc: "/misc/partner/australia-ecu.png",
    link: "/edith-cowan-university",
  },
  {
    imgSrc: "/misc/partner/bond-university.png",
    link: "/bond-university",
  },
  {
    imgSrc: "/misc/partner/charles-darwin-university.png",
    link: "/charles-darwin-university-cdu",
  },
  // {
  //   imgSrc: "/misc/partner/uni-australia.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/charles-darwin-university.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/southern-cross-university.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/victoria-university.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/charles-sturt-uni.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/une.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/university-of-sunshine-coast.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
  // {
  //   imgSrc: "/misc/partner/university-notre-dame.png",
  //   link: "https://www.newcastle.edu.au/",
  // },
];

const OurPartners = ({ classes }: propTypes) => {
  return (
    <section className={`${classes?.root ? classes.root : ""}`}>
      <div className="flex flex-col justify-center items-center mb-[50px] gap-4 max-w-[700px] mx-auto">
        <h2 className="mb-0 text-center">
          Find the best universities in Australia
        </h2>
        <p className="mb-0 text-center">Top university in Australia</p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-[30px]">
        {partnerData?.map((item: any, i: any) => {
          return (
            <div
              className="relative border rounded bg-white hover:shadow-two hover:border-transparent transition-all"
              key={i}
            >
              <Link
                href={`/institutions${item?.link}`}
                className="flex items-center justify-center w-full h-full p-4"
              >
                <Image
                  src={item?.imgSrc}
                  alt="Moves International"
                  width={70}
                  height={40}
                  className=""
                />
                {/* 
                <div className="absolute bottom-[6px] right-[6px]">
                  <Image
                    src="/misc/navitas.png"
                    alt="Moves International"
                    width={36}
                    height={16}
                    blurDataURL="/misc/navitas.png"
                  />
                </div> */}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurPartners;
