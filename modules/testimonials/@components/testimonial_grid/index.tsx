"use client";
import { useGetTestimonialsQuery } from "@/appstore/testimonials/testimonials_api";
import Skeleton from "@/modules/@common/skeleton";
import TestimonialCard from "@/modules/@common/testimonial_card";
import React, { useState } from "react";

const TestimonialGrid = () => {
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetTestimonialsQuery<any>({
    page: page,
    limit: limit,
  });

  const count = data?.data?.length;

  return (
    <section className="pt-[60px]">
      <div className="container">
        {!isLoading ? (
          <>
            {count > 0 ? (
              <>
                <div
                  className={`${count == 1 ? "max-w-[450px]" : ""} ${
                    count == 2 ? "max-w-[930px]" : ""
                  } w-full mx-auto`}
                >
                  <div className="grid place-items-center">
                    <div>
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                          count < 3 ? count : "3"
                        } gap-[30px]`}
                      >
                        {data?.data?.map((item: any, i: any) => {
                          return (
                            <>
                              <div
                                key={i}
                                className="border border-greylight rounded-lg"
                              >
                                <TestimonialCard
                                  classes={{
                                    root: "mr-3 lg:m-[15px] p-5 lg:p-[20px]",
                                  }}
                                  data={item}
                                />
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {count > 9 && (
                    <div className="flex justify-center mt-6">
                      <button
                        className="btn btn-grey"
                        onClick={() => setLimit(limit + 3)}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="min-h-[300px] flex justify-center items-center">
                  <p className="text-3xl">No Testimonial found !</p>
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className={`${count == 1 ? "max-w-[450px]" : ""} ${
              count == 2 ? "max-w-[930px]" : ""
            } w-full mx-auto`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[30px]">
              {new Array(6).fill(1).map((_, i) => {
                return (
                  <div className="h-[300px]" key={i}>
                    <Skeleton className={"h-[300px] dark:!bg-neutral-800"} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialGrid;
