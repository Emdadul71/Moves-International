import moment from "moment";
import Image from "next/image";
import styles from "./detail_hero.module.scss";

const EventDetailHero = ({ data, booknowRef }: any) => {
  const scrollTolocation = () => {
    booknowRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`pt-[30px] pb-[20px] mb-[30px] lg:pt-[90px] lg:pb-[100px] lg:mb-[80px] ${styles.wrapper}`}
    >
      <div className="container">
        <div className="grid grid-cols-1fr lg:grid-cols-[520px_1fr] gap-[30px] lg:gap-[50px] items-center">
          <div>
            <h1 className="text-[36px] lg:text-[30px] leading-[40px] mb-5 text-white">
              {data?.title}
            </h1>
            <div className="mb-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-[15px]  mb-6">
                <div
                  className="flex items-center gap-[10px] min-w-[245px] bg-white p-[15px] rounded-md "
                  style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <div>
                    <Image
                      src="/icons/calendar.png"
                      width={40}
                      height={40}
                      alt="location"
                    />
                  </div>
                  {data?.eventDate && (
                    <div>
                      <span className="text-lg text-primary font-bold block leading-5 mb-[2px]">
                        {moment(data?.eventDate).format("MMM Do")}
                      </span>
                      <span className="text-lg text-primary block leading-5">
                        {moment(data?.eventDate).format("dddd, YYYY")}
                      </span>
                    </div>
                  )}
                </div>

                <div
                  className="flex items-center gap-[10px] min-w-[245px] bg-white p-[15px] rounded-md"
                  style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <div>
                    <Image
                      src="/icons/watch.png"
                      width={40}
                      height={40}
                      alt="location"
                    />
                  </div>
                  {data?.eventDate && (
                    <div>
                      <span className="text-lg shrink-0 text-primary font-bold block leading-5 whitespace-nowrap">
                        {moment(data?.eventDate).format("LT")} -{" "}
                        {moment(data?.eventEndDate).format("LT")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <ul className="flex flex-col gap-5">
                <li className="grid grid-cols-[24px_1fr] gap-3">
                  <Image
                    src="/icons/event-detail-location.png"
                    width={24}
                    height={24}
                    alt="location"
                  />
                  <span className="text-white">{data?.address}</span>
                </li>
              </ul>
            </div>
            <button
              onClick={scrollTolocation}
              type="button"
              className="btn btn-secondary hover:btn-white hover:text-primary"
            >
              Join Now
            </button>
          </div>
          <div className={styles.imageWrapper}>
            <div className="relative">
              <Image
                src={data?.featureImage}
                alt="Virtual Event"
                width={600}
                height={340}
                className="rounded-md h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailHero;
