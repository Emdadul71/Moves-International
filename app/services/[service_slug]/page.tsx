import ServiceDetails from "@/modules/services/details";
import { notFound } from "next/navigation";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";

async function getData(params: any) {
  const filePath = path.join(
    process.cwd(),
    "/data/services-single-page-data.json"
  );

  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const res = objectData.data?.find(
    (item: { slug: string }) => item.slug === params.service_slug
  );

  if (!res) {
    return notFound();
  } else {
    return res;
  }
}

const ServiceDetailPage = async ({ params }: any) => {
  const data = await getData(params);

  return <ServiceDetails data={data} />;
};

export default ServiceDetailPage;
