"use client";

import React, { useEffect, useState } from "react";

import { useGetEventsQuery } from "@/appstore/events/event_api";
import EventCard from "@/modules/@common/event_card";
import Skeleton from "@/modules/@common/skeleton";
import Spinner from "@/modules/@common/loading_spinner";

interface propTypes {
  classes?: object | any;
  showItem?: number;
  isRecent?: boolean;
}

const EventSection = ({ classes }: propTypes) => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState<any>([]);
  const { data: eventList, isLoading } = useGetEventsQuery<any>({
    page: page,
    limit: limit,
  });

  const count = moreData && moreData?.length;

  const dataArray = eventList?.data;
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (moreData && moreData.length > 0) {
      setMoreData((prev: any) => [...prev, ...dataArray]);
    } else {
      setMoreData(dataArray);
    }
  }, [dataArray]);
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
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {new Array(6).fill(1).map((_, i) => {
              return (
                <div className="h-full" key={i}>
                  <Skeleton className={"h-[240px] dark:!bg-neutral-800"} />
                  <Skeleton className={"h-[110px] mt-4 dark:!bg-neutral-800"} />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            {moreData?.length > 0 ? (
              <div
                className={`${count == 1 ? "max-w-[450px]" : ""} ${
                  count == 2 ? "max-w-[930px]" : ""
                } w-full mx-auto`}
              >
                <div className="grid place-items-center">
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                      count < 3 ? count : "3"
                    } gap-[30px]`}
                  >
                    {moreData.map((item: any, i: number) => {
                      return <EventCard item={item} key={i} />;
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="min-h-[300px] flex justify-center items-center">
                <p className="text-3xl">No event found !</p>
              </div>
            )}
          </>
        )}

        {moreData?.length > 5 && (
          <div
            onClick={handleLoadMore}
            className="flex col-span-4 justify-center mt-[40px]"
          >
            <button className={`btn btn-grey ${isLoading ? "disabled" : ""}`}>
              {isLoading && <Spinner height="20px" />}
              <span> Load More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventSection;
