import Image from "next/image";
import React from "react";

const TeamHero = () => {
  return (
    <section className="pt-5 lg:pt-[100px] bg-primary">
      <div className="container">
        <div className="max-w-[650px] w-full mx-auto">
          <h1 className="text-center text-white">Meet Our Team</h1>
          <p className="text-center text-p1 text-white">
            Dynamic team of diverse experts collaborating innovatively, driven
            by passion, creativity, and a shared commitment to excellence and
            impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
