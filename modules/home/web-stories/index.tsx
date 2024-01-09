"use client";
import WebStoriesCard from "@/modules/@common/web-stories-card";
import React from "react";
import Slider from "react-slick";

const dataLocal = [
  {
    title: "Why study in Australia",
    imgSrc: "/misc/web-stories/why-study-in-australia.png",
  },
  {
    title: "Top university in Australia",
    imgSrc: "/misc/web-stories/top-university.png",
  },
  {
    title: "5 Star Review",
    imgSrc: "/misc/web-stories/5-star-review.png",
  },
  {
    title: "Our Services",
    imgSrc: "/misc/web-stories/our-services.png",
  },
  {
    title: "Migration services",
    imgSrc: "/misc/web-stories/Migration-services.png",
  },
  {
    title: "Top courses",
    imgSrc: "/misc/web-stories/top-courses-in-australia.png",
  },
  {
    title: "RPL",
    imgSrc: "/misc/web-stories/RPL.png",
  },

  {
    title: "Professional Year",
    imgSrc: "/misc/web-stories/professional-year.png",
  },
  {
    title: "University Admission",
    imgSrc: "/misc/web-stories/university-admission.png",
  },
  {
    title: "OSHC and OVHC",
    imgSrc: "/misc/web-stories/OSHC-and-OVHC.png",
  },
  {
    title: "Team",
    imgSrc: "/misc/web-stories/Our-Team.png",
  },
];
const WebStories = () => {
  const settings = {
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    centerMode: false,
    centerPadding: "20",
    rows: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="web_stories overflow-hidden">
      <div className="container py-5 lg:py-[50px]">
        <div className="max-w-[280px] mx-auto text-center">
          <h2>Web Stories</h2>
          <p>Explore Visual Stories</p>
        </div>
      </div>
      <Slider {...settings}>
        {dataLocal?.map((item: any, i: any) => {
          return (
            <WebStoriesCard key={i} data={item} classes={{ root: `mx-2` }} />
          );
        })}
      </Slider>
    </section>
  );
};

export default WebStories;
