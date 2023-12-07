import ServiceDetails from "@/modules/services/details";
import { notFound } from "next/navigation";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";

const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getData(params: any) {
  console.log("params", params.service_slug);

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
  console.log("ServiceDetailPage", data);

  return <ServiceDetails data={data} />;
};

export default ServiceDetailPage;
