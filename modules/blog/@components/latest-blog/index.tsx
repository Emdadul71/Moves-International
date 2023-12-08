import API from "@/helpers/api";
import BlogCard from "@/modules/@common/blog-card";
import Skeleton from "@/modules/@common/skeleton";
import { log } from "console";
import React, { useEffect, useState } from "react";

const LatestBlog = ({ serverData, pageStart, postLimit }: any) => {
  const limit = postLimit ? postLimit : 6;
  const [data, setData] = useState(serverData ? serverData : []);
  const [page, setPage] = useState(pageStart ? pageStart : 1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res: any = await API.get(
          `/public/blogs?status=ACTIVE&blogFor=BANGLADESH&limit=${limit}&page=${page}`
        );
        console.log("res", res);
        if (!res.error && !res.message) {
          setData((prev: any) => {
            const dataNew = [...prev, ...res?.data];
            let uniqueArr = dataNew?.filter(
              (obj, index, self) =>
                index ===
                self?.findIndex(
                  (t) => t?.id === obj?.id && t?.title === obj?.title
                )
            );
            return uniqueArr;
          });
          setIsLoading(false);
          setNextPage(res.nextPage);
        }
        if (res.error || res.message) {
          throw new Error(res.error || res.message);
        }
      } catch (error: any) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="h3 mb-0 text-primary">Latest Blogs</h2>
          <p className="mb-0">View All</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-[30px]">
          {data?.map((item: any, i: any) => {
            const isSmall = i == 2 || i == 3 || i == 4 || i == 5;
            return (
              <>
                <BlogCard
                  key={i}
                  data={item}
                  classes={{
                    root: `${
                      i > 5
                        ? `lg:grid-cols-[410px_1fr] lg:col-span-2 items-center `
                        : ``
                    } ${
                      isSmall
                        ? `lg:grid-cols-[146px_1fr] col-span-1 gap-5 items-center `
                        : ``
                    }`,

                    title: `text-p1 leading-7 lg:text-[28px] ${
                      isSmall ? `lg:text-sm lg:!leading-5 !mb-[2px]` : ``
                    } `,
                    category: `${isSmall ? `text-xs !mb-1` : ``}`,
                    descStyle: `${i < 6 ? "lg:hidden" : ""}`,
                    date: `${isSmall ? `text-sm !leading-5` : ``}`,
                  }}
                />
                {i == 5 && <div className="h-[20px]"></div>}
              </>
            );
          })}
        </div>
        {isLoading && (
          <div className="grid lg:grid-cols-[410px_1fr] gap-4 lg:gap-[20px] mt-[30px]">
            {new Array(6).fill(1).map((_, i) => {
              return (
                <div className="h-full grid grid-cols-[410px_1fr] " key={i}>
                  <Skeleton className={"h-[230px] dark:!bg-neutral-800"} />
                  <Skeleton className={"h-[230px]  dark:!bg-neutral-800"} />
                </div>
              );
            })}
          </div>
        )}
        {nextPage ? (
          <div className="flex justify-center mt-10">
            <button
              className="btn btn-primary"
              onClick={() => {
                setPage((prev: any) => prev + 1);
              }}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LatestBlog;
