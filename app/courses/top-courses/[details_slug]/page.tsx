// Fetching data from the JSON file
import PYPDetails from "@/modules/services/details/templete-two/pyp-details";
import fsPromises from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import TopCoursesDetails from "@/modules/courses/top-courses/details";

async function getData(params: any) {
  try {
    const filePath = path.join(
      process.cwd(),
      "/data/top-courses-single-data.json"
    );
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    const res = objectData.data?.find(
      (item: { slug: string }) => item.slug === params.details_slug
    );

    if (!res) {
      throw new Error("Faild to Fetch Data");
    }

    return res;
  } catch (error) {
    return notFound();
  }
}

const TopCoursesDetailsPage = async ({ params }: any) => {
  const data = await getData(params);

  return <TopCoursesDetails data={data} params={params?.details_slug} />;
};

export default TopCoursesDetailsPage;
