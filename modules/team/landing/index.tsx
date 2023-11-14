"use client";
import React from "react";
import TeamHero from "./team-hero";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import WebStories from "@/modules/home/web-stories";
import ReadyToGo from "@/modules/@common/ready-to-go";
import { useGetTeamQuery } from "@/appstore/team/team_api";
import TeamCard from "../@component/team-card";
import Skeleton from "@/modules/@common/skeleton";

const TeamLanding = () => {
  const { data, isLoading, isError } = useGetTeamQuery({ page: 1, limit: 1 });
  const dataArray = data && data?.data;

  return (
    <>
      <TeamHero />
      {isLoading && !isError ? (
        <>
          <section className="pt-5 lg:pt-[80px]">
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
        <section className="pt-5 lg:pt-[80px]">
          <div className="container">
            {dataArray?.map((item: any, i: any) => {
              const teams = item?.teams;
              const len = teams?.length;

              const maxWidth = () => {
                if (len == 1) {
                  return "sm:max-w-[300px] mx-auto grid-cols-1";
                } else if (len == 2) {
                  return "sm:max-w-[600px] mx-auto grid-cols-1 sm:grid-cols-2";
                } else if (len == 3) {
                  return "lg:max-w-[900px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
                } else {
                  return "lg:max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
                }
              };

              return (
                <div key={i}>
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

      <QualityAndPrestigious />
      <WebStories />
      <ReadyToGo />
    </>
  );
};

export default TeamLanding;
