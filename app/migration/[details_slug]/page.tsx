import React from "react";
import { promises as fs } from "fs";
import MigrationDetails from "@/modules/migration/details";
import { notFound } from "next/navigation";

const fetchData = async (params: { details_slug: string }) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/data/mirgration-sub-pages.json",
      "utf8"
    );
    const data = JSON.parse(file);
    const dataSingle = data?.data?.find(
      (item: any) => item?.slug == params?.details_slug
    );
    if (!dataSingle) {
      return notFound();
    }
    return dataSingle;
  } catch (error) {
    return notFound();
  }
};
const MigrationDetailsPage = async ({ params }: any) => {
  const data = await fetchData(params);

  console.log("params", params);
  console.log("data", data);

  return <MigrationDetails data={data} />;
};

export default MigrationDetailsPage;
