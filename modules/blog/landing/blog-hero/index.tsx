import BlogCard from "@/modules/@common/blog-card";
import React from "react";

const BlogHero = ({ data }: any) => {
  const len = data && data?.length;

  const maxWidth = () => {
    if (len == 1) {
      return "xsm:max-w-[410px] grid-cols-1";
    } else if (len == 2) {
      return "xsm:max-w-[820px] grid-cols-1 xsm:grid-cols-2";
    } else if (len == 3) {
      return "lg:max-w-[1290px] grid-cols-1 xsm:grid-cols-2 md:grid-cols-3";
    } else if (len == 4) {
      return "lg:max-w-[1280px] grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 ";
    } else {
      return "lg:max-w-[1600px] grid-cols-1 xsm:grid-cols-2 md:grid-cols-[1fr_630px_1fr]";
    }
  };

  return (
    <section className="pt-5 lg:pt-20 pb-0">
      <div className="container">
        <div>
          <h1 className="lg:text-[58px] mb-10">Moves International Blogs</h1>
        </div>
        <div className={`grid ${maxWidth()}  gap-[30px]`}>
          {data?.map((item: any, i: any) => {
            const isCenter = i == 1 && len > 4;
            const isForth = i == 0 && len == 4;
            return (
              <BlogCard
                key={i}
                data={item}
                isCenter={isCenter}
                classes={{
                  root: `gap-[15px] ${isCenter ? `xl:row-span-2` : ``} ${
                    isForth
                      ? `lg:grid-cols-[1fr_1fr] lg:col-span-3 lg:gap-[30px] items-center`
                      : ``
                  }`,
                  title: ` ${
                    isCenter
                      ? "!text-p1 !leading-7 xl:!text-[40px] xl:!leading-[52px] xl:line-clamp-3"
                      : `!text-p1 !leading-7`
                  } ${
                    isForth
                      ? `lg:!text-[40px] lg:!leading-[52px] lg:line-clamp-4`
                      : ``
                  }`,
                  category: `${isCenter ? `mb-3` : ``}`,
                  descStyle: `lg:hidden ${isCenter ? `` : ``}`,
                  date: `${isCenter ? `` : ``}`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
