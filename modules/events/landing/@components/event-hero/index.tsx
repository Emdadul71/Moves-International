import Link from "next/link";
import React from "react";

const EventHero = () => {
  return (
    <section className="pt-5 lg:py-[150px] bg-primary">
      <div className="container">
        <div>
          <h1 className="mb-3 text-white text-center">
            Moves International Events
          </h1>
          <div className="flex justify-center gap-2 text-center text-white ">
            <Link href="/" className=" hover:text-secondary">
              Home
            </Link>{" "}
            / <span>Events</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
