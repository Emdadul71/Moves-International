import CourseLanding from "@/modules/courses/landing";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getData() {
  const limit = 10;
  try {
    const res: any = await fetch(
      `${apiUrl}/public/course/all?&page=1&limit=${limit}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Faild to Fetch Data");
    }
    return res.json();
  } catch (error) {
    return notFound();
  }
}

const CoursePage = async () => {
  const data = await getData();
  const totalCount = data && data?.totalCount;

  return <CourseLanding data={totalCount} />;
};

export default CoursePage;
