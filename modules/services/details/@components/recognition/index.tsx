import Image from "next/image";
import React from "react";

const Recognition = () => {
  return (
    <section className="bg-grey lg:pt-[80px] pt-5 mb-5 lg:mb-[60px]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[30px] items-center">
          <div>
            <h2 className="mb-5">
              What is Recognition of Prior Learning (RPL)?
            </h2>
            <p className="mb-0 text-lg">
              Recognition of Prior Learning (RPL) is an assessment process used
              by Registered Training Organisations (RTOs) to evaluate a person’s
              skills, knowledge, and experience gained through working and
              learning, in Australia or overseas, against the criteria of the
              courses they offer. This process can lead to a formal
              qualification without the need for additional study if the
              individual’s experience aligns with the standards of the
              qualification. RPL acknowledges the value of learning outside
              formal education and helps individuals obtain qualifications based
              on their real-world experience.
            </p>
          </div>
          <div>
            <Image
              src="/service/recognition.png"
              alt="Recognition"
              width={960}
              height={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
