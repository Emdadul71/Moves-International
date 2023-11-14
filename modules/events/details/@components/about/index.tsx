import { htmlParse } from "@/helpers/utils";
import React from "react";

const EventAbout = ({ data, locationRef, booknowRef }: any) => {
  const scrollTolocation = () => {
    locationRef.current.scrollIntoView({ behavior: "smooth", offsetTop: 500 });
  };
  const scrollToBooknow = () => {
    booknowRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <div className="container">
        <div className="max-w-[970px] mx-auto from_texteditor_wrapper">
          <div className="from_texteditor_wrapper">
            {htmlParse(data?.content)}
          </div>

          <div className="flex items-center justify-center gap-4 pt-[25px]">
            <button
              onClick={scrollToBooknow}
              type="button"
              className="btn btn-primary px-[30px]"
            >
              Book Now
            </button>
            <button
              onClick={scrollTolocation}
              type="button"
              className="btn btn-white font-bold border border-greylight  hover:bg-primary hover:text-white hover:border-primary"
            >
              View Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;
