import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ReadyToBegin = ({ data }: any) => {
  const readyToBeingData = data && data?.readyToBeing && data?.readyToBeing;
  return (
    <section>
      <div className="container">
        <div className="max-w-[1170px] mx-auto grid grid-cols-2 items-center gap-[30px]">
          <div>
            <Image
              src={readyToBeingData?.imageSrc}
              width={635}
              height={360}
              alt="Ready To Being"
              className={`object-cover w-full rounded-md`}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="mb-0">{readyToBeingData?.title}</h3>
            <p className="text-lg">{readyToBeingData?.shortDesc}</p>
            <div>
              <Link
                scroll={false}
                href="/contact-us"
                className="inline-flex gap-3 btn btn-secondary rounded-md"
              >
                <span> Contact Us</span>
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBegin;
