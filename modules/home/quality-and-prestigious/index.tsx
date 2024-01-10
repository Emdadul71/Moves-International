"use client";
import { useGetTestimonialsQuery } from "@/appstore/testimonials/testimonials_api";
import { excerpt } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";
import React from "react";
import { BsShieldCheck } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";
interface propTypes {
  classes?: {
    root?: any;
  };
}
const QualityAndPrestigious = ({ classes }: propTypes) => {
  const limit = 4;
  const { data, isLoading } = useGetTestimonialsQuery<any>({ limit });
  const total = data?.totalCount;
  const length = data?.data?.length;
  const dataArray = data && data?.data;

  return (
    <>
      {isLoading ? (
        <section>
          <div className="container">
            <div className="grid lg:grid-cols-[400px_1fr] items-center gap-5 lg:gap-[40px]">
              <Skeleton className="h-[265px]" />
              <div className="grid md:grid-cols-2 place-content-start	gap-[30px]">
                {new Array(4).fill(1).map((_, i) => {
                  return <Skeleton className="h-[265px]" key={i} />;
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {length > 0 ? (
            <section
              className={`bg-[url('/misc/quality-bg-img-.png')] bg-no-repeat bg-[left_top_30%] bg-contain ${
                classes?.root ? classes.root : ""
              }`}
            >
              <div className="container">
                <div className="grid lg:grid-cols-[400px_1fr] items-center gap-5 lg:gap-[40px]">
                  <div className="flex flex-col lg:gap-[40px] p-5 lg:p-[30px] bg-white">
                    <div>
                      <div className="bg-grey inline-block px-4 py-[6px] rounded-full text-sm text-primary mb-3">
                        Rated 4.9 Stars
                      </div>
                      <h3 className="mb-3">
                        High Quality & Prestigious Brands
                      </h3>
                      <p className="mb-3">
                        Advanced services combined with a large experience and
                        fast performance.
                      </p>
                    </div>
                    <div className="lg:px-5 py-[10px]">
                      <Link
                        href="#"
                        className="flex items-center gap-2 mb-0 text-sm text-primary hover:text-secondary"
                      >
                        <BsShieldCheck className="text-secondary" />
                        View all reviews
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {dataArray?.map((item: any, i: any) => {
                      const yellowStar = parseInt(item?.rating);
                      const greyStar = 5 - item?.rating;
                      return (
                        <div key={i}>
                          <div
                            className={`flex flex-col gap-[15px]  items-center p-5 lg:p-9 shadow-[0_1px_5px_0_rgba(0,0,0,0.05)] rounded-md border border-[#F3F3F3] bg-white `}
                          >
                            <p className="mb-0 text-lg text-center">
                              {excerpt(item?.message)}
                            </p>
                            <div className="flex items-center gap-2 bg-[#FFF6E8] px-2 py-2 rounded-md">
                              {new Array(yellowStar).fill(1).map((_, i) => {
                                return (
                                  <MdOutlineStar
                                    key={i}
                                    className="text-secondary"
                                  />
                                );
                              })}
                              {new Array(greyStar).fill(1).map((_, i) => {
                                return (
                                  <MdOutlineStar
                                    key={i}
                                    className="text-greylight"
                                  />
                                );
                              })}
                            </div>
                            <div className="text-center">
                              <h6 className="mb-0">{item?.name}</h6>
                              <p className="mb-0">{item?.designation}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {total > limit && (
                      <div className="md:col-span-2 flex justify-center">
                        <Link href="/testimonials" className="btn btn-primary ">
                          View All
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
    </>
  );
};

export default QualityAndPrestigious;
