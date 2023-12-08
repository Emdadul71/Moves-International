import React from "react";
import { promises as fs } from "fs";
import MigrationDetails from "@/modules/migration/details";
import { notFound } from "next/navigation";

// const fetchData = async (params: { details_slug: string }) => {
//   try {
//     const file = await fs.readFile(
//       process.cwd() + "/data/mirgration-sub-pages.json",
//       "utf8"
//     );
//     const data = JSON.parse(file);
//     const dataSingle = data?.data?.find(
//       (item: any) => item?.slug === params?.details_slug
//     );
//     if (!dataSingle) {
//       return notFound();
//     }
//     return dataSingle;
//   } catch (error) {
//     return notFound();
//   }
// };

async function getData(params: any) {
  const file = await fs.readFile(
    process.cwd() + "/data/mirgration-sub-pages.json",
    "utf8"
  );

  const data = JSON.parse(file);
  const dataSingle = data?.data?.find(
    (item: any) => item?.slug === params?.details_slug
  );

  if (!dataSingle) {
    return notFound();
  } else {
    return dataSingle;
  }
}
const MigrationDetailsPage = async ({ params }: any) => {
  console.log("params", params);

  const data = await getData(params);

  return <MigrationDetails data={data} />;
};

export default MigrationDetailsPage;
