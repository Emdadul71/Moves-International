import React from "react";
import MigrationDetails from "@/modules/migration/details";
import { notFound } from "next/navigation";

import fsPromises from "fs/promises";
import path from "path";

// const fetchData = async (params: { details_slug: string }) => {
//   try {
//     const file = await fsPromises.readFile(
//       process.cwd() + "/data/migration-sub-pages.json",
//       "utf8"
//     );

//     const data = JSON.parse(file);
//     const dataSingle = data?.data?.find(
//       (item: any) => item?.slug === params?.details_slug
//     );

//     if (dataSingle == undefined || dataSingle.id == undefined) {
//       return notFound();
//     }

//     return dataSingle;
//   } catch (error) {
//     return notFound();
//   }
// };

async function getData(params: any) {
  const filePath = path.join(process.cwd(), "/data/migration-sub-pages.json");

  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const dataSingle = objectData?.data?.find(
    (item: any) => item?.slug === params?.details_slug
  );

  if (!dataSingle) {
    return notFound();
  } else {
    return dataSingle;
  }
}
const MigrationDetailsPage = async ({ params }: any) => {
  // const data = await fetchData(params);
  const data = await getData(params);

  return <MigrationDetails data={data} />;
};

export default MigrationDetailsPage;
