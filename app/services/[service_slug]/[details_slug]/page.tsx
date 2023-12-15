// Fetching data from the JSON file
import PYPDetails from "@/modules/services/details/templete-two/pyp-details";
import fsPromises from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { pypServiceData } from "@/data/services/professional-year-program/pyp";

// async function getData(params: any) {
//   const filePath = path.join(process.cwd(), "/data/pyp-single-page-data.json");

//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData.toString());

//   const res = objectData.data?.find(
//     (item: { slug: string }) => item.slug === params.details_slug
//   );

//   if (!res) {
//     return notFound();
//   } else {
//     return res;
//   }
// }

const PYPDetailsPage = async ({ params }: any) => {
  const singleData = pypServiceData?.find(
    (d: any) => d?.slug === params?.details_slug
  );
  if (!singleData) {
    notFound();
  }

  return <PYPDetails data={singleData} params={params?.details_slug} />;
};

export default PYPDetailsPage;
