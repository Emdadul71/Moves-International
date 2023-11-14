import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  classes?: {
    root?: any;
  };
}

const WebStoriesCard = ({ data, classes }: any) => {
  return (
    <Link href="#" className={`${classes?.root ? classes.root : ""} block`}>
      <div className="relative ">
        <Image
          src={data?.imgSrc}
          alt="Moves Int"
          width={760}
          height={730}
          blurDataURL="/misc/web-stories-1.jpg"
          placeholder="blur"
        />
        <div className="absolute bottom-0 left-0 px-[25px] pb-[30px]">
          <p className="mb-0 text-lg font-medium text-center text-white">
            {data?.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WebStoriesCard;
