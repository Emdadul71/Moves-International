"use client";

import { useGetEventsQuery } from "@/appstore/events/event_api";
import EventCard from "../event_card";
import Skeleton from "../skeleton";
interface propTypes {
  classes?: object | any;
  showItem?: number;
  isRecent?: boolean;
}
const RecentEvent = ({ classes }: propTypes) => {
  const {
    data: eventList,
    isLoading,
    isError,
  } = useGetEventsQuery<any>({ page: 1, limit: 3 });

  const count = eventList && eventList?.data?.length;

  if (isLoading && !isError) {
    return (
      <section
        className={`pt-8 mb-8 lg:pt-[80px] lg:mb-[80px] bg-secondarylight ${
          classes?.root ? classes?.root : ""
        }`}
      >
        <div className="container">
          <div className="max-w-[700px] mx-auto mb-[40px] text-center">
            <h2 className="mb-2">Upcoming Events</h2>
            <p>
              Your dream study abroad opportunity awaits - connect with
              universities in key destinations around the world and explore your
              options as a future international student.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[30px]">
            {new Array(3).fill(1).map((_, i) => {
              return (
                <div className="h-full" key={i}>
                  <Skeleton className={"h-[240px] dark:!bg-neutral-800"} />
                  <Skeleton className={"h-[110px] mt-4 dark:!bg-neutral-800"} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else if (!isLoading && !isError && eventList?.data.length !== 0) {
    return (
      <section
        className={`pt-8 mb-8 lg:pt-[80px] lg:mb-[80px] bg-secondarylight ${
          classes?.root ? classes?.root : ""
        }`}
      >
        <div className="max-w-[1350px] mx-auto px-5">
          <div className="max-w-[700px] mx-auto mb-[40px] text-center">
            <h2 className="mb-2">Upcoming Events</h2>
            <p>
              Your dream study abroad opportunity awaits - connect with
              universities in key destinations around the world and explore your
              options as a future international student.
            </p>
          </div>
          <div
            className={`${count == 1 ? "max-w-[450px]" : ""} ${
              count == 2 ? "max-w-[930px]" : ""
            } w-full mx-auto`}
          >
            <div className="grid place-items-center">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                  count < 3 ? count : "3"
                } gap-[30px] `}
              >
                <>
                  {eventList?.data?.map((item: any, i: number) => {
                    return <EventCard item={item} key={i} />;
                  })}
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default RecentEvent;
