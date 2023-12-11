import ServiceDetailsTempleteOne from "@/modules/services/details/templete-one";
import { notFound } from "next/navigation";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import ServiceDetailsTempleteTwo from "@/modules/services/details/templete-two";
import ServiceDetailsTempleteRPL from "@/modules/services/details/templete-rpl";
import PYPDetails from "@/modules/services/details/templete-two/pyp-details";

async function getData(params: any) {
  const filePath = path.join(process.cwd(), "/data/pyp-single-page-data.json");

  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const res = objectData.data?.find(
    (item: { slug: string }) => item.slug === params.details_slug
  );

  if (!res) {
    return notFound();
  } else {
    return res;
  }
}

const PYPDetailsPage = async ({ params }: any) => {
  const data = await getData(params);

  return <PYPDetails data={data} params={params?.details_slug} />;
};

export default PYPDetailsPage;
