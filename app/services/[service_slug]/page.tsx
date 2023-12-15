import ServiceDetailsTempleteOne from "@/modules/services/details/templete-one";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import ServiceDetailsTempleteTwo from "@/modules/services/details/templete-two";
import ServiceDetailsTempleteRPL from "@/modules/services/details/templete-rpl";
import ServiceDetailsCareerCounselling from "@/modules/services/details/templete-career";
import ServiceDetailsTempleteMigration from "@/modules/services/details/templete-migration";
import ServiceDetailsTempleteHealthInsurance from "@/modules/services/details/templete-health-insurance";
import { notFound } from "next/navigation";
import { ServiceData } from "@/data/services";

const render = (data: any, params: any) => {
  if (data?.type == "professional") {
    console.log("data?.type", data?.type);
    return (
      <ServiceDetailsTempleteTwo data={data} params={params?.service_slug} />
    );
  }

  if (data?.type == "rpl") {
    return (
      <ServiceDetailsTempleteRPL data={data} params={params?.service_slug} />
    );
  }

  if (data?.type == "career") {
    return (
      <ServiceDetailsCareerCounselling
        data={data}
        params={params?.service_slug}
      />
    );
  }

  if (data?.type == "migration") {
    return (
      <ServiceDetailsTempleteMigration
        data={data}
        params={params?.service_slug}
      />
    );
  }

  if (data?.type == "health") {
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

const ServiceDetailPage = async ({ params }: any) => {
  const singleData = ServiceData?.find(
    (d: any) => d.slug == params.service_slug
  );
  if (!singleData) {
    return notFound();
  }
  return <> {render(singleData, params)}</>;
};

export default ServiceDetailPage;
