import ServiceDetailsTempleteOne from "@/modules/services/details/templete-one";
import { notFound } from "next/navigation";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import ServiceDetailsTempleteTwo from "@/modules/services/details/templete-two";
import ServiceDetailsTempleteRPL from "@/modules/services/details/templete-rpl";
import ServiceDetailsCareerCounselling from "@/modules/services/details/templete-career";
import ServiceDetailsTempleteMigration from "@/modules/services/details/templete-migration";
import ServiceDetailsTempleteHealthInsurance from "@/modules/services/details/templete-health-insurance";

const render = (data: any, params: any) => {
  if (data.type == "professional") {
    return (
      <ServiceDetailsTempleteTwo data={data} params={params?.service_slug} />
    );
  }
  if (data.type == "rpl") {
    return (
      <ServiceDetailsTempleteRPL data={data} params={params?.service_slug} />
    );
  }
  if (data.type == "career-counselling") {
    return (
      <ServiceDetailsCareerCounselling
        data={data}
        params={params?.service_slug}
      />
    );
  }
  if (data.type == "migration") {
    return (
      <ServiceDetailsTempleteMigration
        data={data}
        params={params?.service_slug}
      />
    );
  }
  if (data.type == "health") {
    return (
      <ServiceDetailsTempleteHealthInsurance
        data={data}
        params={params?.service_slug}
      />
    );
  }
  return (
    <ServiceDetailsTempleteOne data={data} params={params?.service_slug} />
  );
};

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

  return <> {render(data, params)}</>;
};

export default ServiceDetailPage;
