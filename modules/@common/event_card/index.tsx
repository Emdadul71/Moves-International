import Image from "next/image";
import Link from "next/link";
// import moment from "moment";
import CountdownTimer from "../countdown_timer";
import moment from "moment";
// import { staticAsset } from "@/helpers/utils";

export const EventCard = ({ item }: any) => {
  return (
    <Link
      href={`/events/${item?.slug}`}
      className="hover:text-inherit border border-greylight rounded-md overflow-hidden hover:shadow-md bg-[#FFFFFF]"
    >
      <div className="h-[220px] relative">
        <Image
          src={item?.featureImage}
          alt={item?.title}
          width={500}
          height={220}
          blurDataURL="/images/misc/image-placeholder-big.webp"
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-[30px] py-4 bg-white">
        <div className="flex justify-center mb-4">
          <CountdownTimer
            customClasses={{ root: "!bg-secondary py-[2px] px-2 text-white" }}
            targetDate={item?.eventDate}
            targetEndDate={item?.eventEndDate}
          />
        </div>

        <div>
          <div>
            <h5 className="mb-2 hover:text-secondary transition-all text-lg">
              Study in Australia Virtual Event 2023
            </h5>
            <ul className="flex flex-col gap-2">
              <li className="grid grid-cols-[20px_1fr] gap-2">
                <Image
                  src="/icons/clock.png"
                  alt="Event time"
                  width={20}
                  height={20}
                />
                <span className="">
                  {moment(new Date()).format("Do MMMM, YYYY")} |{" "}
                  {moment(item?.eventDate).format("LT")} -{" "}
                  {moment(item?.eventEndDate).format("LT")}
                </span>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-2">
                <Image
                  src="/icons/location.png"
                  alt="Event time"
                  width={20}
                  height={20}
                />
                <span className="text-sm">
                  4517 Washington Ave. Manchester, Kentucky 39495
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
