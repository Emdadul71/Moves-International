import { excerpt, htmlParse } from "@/helpers/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { lazy } from "react";

interface propTypes {
  classes?: {
    root?: string;
    title?: string;
    imageWrapper?: string;
    imageStyle?: string;
    category?: string;
    description?: string;
    descStyle?: string;
    date?: string;
  };
  isCenter?: boolean;
  isFalse?: any;
  data?: any;
}

const BlogCard = ({ classes, isCenter, data }: propTypes) => {
  const cat = data?.categories?.length > 0 && data?.categories[0];
  const catLink = `/blog/category/${cat?.slug}`;
  return (
    <div
      className={`grid gap-5
       ${classes?.root ? classes.root : ""}`}
    >
      <Link
        href={`/blog/${data?.slug}`}
        className={`block w-full ${
          classes?.imageWrapper ? classes.imageWrapper : ""
        }`}
      >
        <Image
          src={data?.featureImage}
          width={635}
          height={360}
          alt="Testimonial"
          className={`object-cover w-full rounded ${
            classes?.imageStyle ? classes.imageStyle : ""
          }`}
        />
      </Link>

      <div>
        <Link
          href={catLink}
          className={`inline-block rounded transition-all mb-1.5  ${
            classes?.category ? classes.category : ""
          }`}
        >
          {cat?.title}
        </Link>
        <Link href={`/blog/${data?.slug}`}>
          <h3
            className={`line-clamp-2 text-[28px] lg:leading-[36px] mb-0 hover:text-secondary transition-all mb-2 ${
              classes?.title ? classes.title : ""
            }`}
          >
            {data?.title}
          </h3>
          <p
            className={`leading-[28px] mb-3 line-clamp-3 ${
              classes?.descStyle ? classes.descStyle : ""
            }`}
          >
            {excerpt(data?.content, 500)}
          </p>
          <span
            className={` ${isCenter ? "mt-[16px] block" : "block"} ${
              classes?.date ? classes.date : ""
            }`}
          >
            Admin - {moment(data?.publishedAt).format("LL")}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
