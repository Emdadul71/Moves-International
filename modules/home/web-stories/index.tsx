"use client";
import WebStoriesCard from "@/modules/@common/web-stories-card";
import React from "react";
import Slider from "react-slick";

const dataLocal = [
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-1.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-22.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-1.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-3.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-44.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-1.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-55.jpg",
  },

  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-1.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-22.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-1.jpg",
  },
  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-3.jpg",
  },

  {
    title: "STEM vs Non-STEM courses: an insightful comparison",
    imgSrc: "/misc/web-stories-1.jpg",
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
