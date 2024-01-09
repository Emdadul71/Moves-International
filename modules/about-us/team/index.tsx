"use client";
import { useGetTeamQuery } from "@/appstore/team/team_api";
import Skeleton from "@/modules/@common/skeleton";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import TeamCard from "@/modules/team/@component/team-card";
import Image from "next/image";
import React from "react";

const Team = () => {
  const { data, isLoading, isError } = useGetTeamQuery({ page: 1, limit: 10 });
  const dataArray = data && data?.data;
  return (
    <>
      <section className="pb-5">
        <div className="container">
          <div className="max-w-[613px] w-full mx-auto text-center">
            <h2>Moves International’s Team</h2>
            <p>Experts, Visionaries and ACHIEVERS</p>
          </div>
        </div>
      </section>
      {isLoading && !isError ? (
        <>
          <section className="pt-5">
            <div className="container">
              <>
                <Skeleton className={"h-[40px] w-[300px] mx-auto mb-[50px] "} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                  {new Array(8).fill(1).map((_, i) => {
                    return (
                      <div className="h-full" key={i}>
                        <Skeleton className={"h-[330px] "} />
                        <Skeleton
                          className={"h-[100px] mt-2 dark:!bg-neutral-800"}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            </div>
          </section>
        </>
      ) : (
        <section className="pt-5">
          <div className="container">
            {dataArray?.map((item: any, i: any) => {
              const teams = item?.teams;
              const len = teams?.length;

              const maxWidth = () => {
                if (len == 1) {
                  return "sm:max-w-[300px] mx-auto grid-cols-1";
                } else if (len == 2) {
                  return "sm:max-w-[630px] mx-auto grid-cols-1 sm:grid-cols-2";
                } else if (len == 3) {
                  return "lg:max-w-[960px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
                } else {
                  return "lg:max-w-[1290px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
                }
              };

              return (
                <div key={i} className="mb-10">
                  {item?.teams?.length > 0 && item?.name && (
                    <h3 className="text-center mb-8 lg:mb-[50px]">
                      {item?.name}
                    </h3>
                  )}

                  {teams?.length > 0 && (
                    <div className={`grid  ${maxWidth()} gap-[30px]`}>
                      {teams?.map((tm: any, i: any) => {
                        return <TeamCard data={tm} key={i} />;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
