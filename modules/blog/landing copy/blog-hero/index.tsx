import BlogCard from "@/modules/@common/blog-card";
import React from "react";

const BlogHero = () => {
  return (
    <section className="pt-5 lg:pt-20">
      <div className="container">
        <div>
          <h1 className="lg:text-[58px] mb-10">Moves International Blogs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_630px_1fr] gap-[30px]">
          {new Array(5).fill(1).map((item: any, i: any) => {
            const isCenter = i == 1;
            return (
              <BlogCard
                key={i}
                isCenter={isCenter}
                classes={{
                  root: `gap-[15px] ${isCenter ? `xl:row-span-2` : ``}`,
                  title: ` ${
                    isCenter
                      ? "text-p1 !leading-7 xl:!text-[40px] xl:!leading-[52px] xl:line-clamp-3"
                      : `!text-p1 !leading-7`
                  }`,
                  category: `${isCenter ? `mb-3` : ``}`,
                  descStyle: `lg:hidden ${isCenter ? `` : ``}`,
                  date: ``,
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
