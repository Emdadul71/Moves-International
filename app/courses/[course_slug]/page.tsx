import CourseDetails from "@/modules/courses/details";
import React from "react";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getData(params: any) {
  try {
    const res: any = await fetch(
      `${apiUrl}/public/course/find-one/${params.course_slug}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Faild to Fetch Data");
    }

    return res.json();
  } catch (error) {
    return notFound();
  }
}

const CourseDetailsPage = async ({ params }: any) => {
  const data = await getData(params);
  return <CourseDetails data={data} />;
};

export default CourseDetailsPage;
