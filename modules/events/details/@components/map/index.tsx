import Image from "next/image";
import styles from "./map.module.scss";
import { htmlParse, staticAsset } from "@/helpers/utils";
import moment from "moment";
import { log } from "console";

const EventMap = ({ locationRef, data }: any) => {
  return (
    <section className="bg-grey">
      <div className="container pt-[100px]" ref={locationRef}>
        <div className="grid grid-cols-1 lg:grid-cols-[410px_1fr] gap-8 lg:gap-[95px]">
          <div>
            <h3 className="mb-6">Get Direction to the Conference Hall</h3>
            <div className="mb-6">
              <ul className="flex flex-col gap-5">
                <li className="grid grid-cols-[24px_1fr] gap-5">
                  <Image
                    src="/icons/office-building.png"
                    width={24}
                    height={24}
                    alt="location"
                  />
                  <span>{data?.address}</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-5">
                  <Image
                    src="/icons/calender-outline.png"
                    width={24}
                    height={24}
                    alt="location"
                  />
                  <span>{moment(data?.eventDate).format("MMM Do YYYY")}</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] gap-5">
                  <Image
                    src="/icons/clock-outline.png"
                    width={24}
                    height={24}
                    alt="location"
                  />

                  <span className=" shrink-0">
                    {moment(data?.eventDate).format("LT")} -{" "}
                    {moment(data?.eventEndDate).format("LT")}
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="https://goo.gl/maps/gkwzgK3BaLoz3mFZ7"
              target="_blank"
              type="button"
              className="btn btn-primary"
            >
              Get Direction
            </a>
          </div>
          {data?.googleMap && (
            <div className={styles.map_wrapper}>
              {htmlParse(data?.googleMap)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventMap;
