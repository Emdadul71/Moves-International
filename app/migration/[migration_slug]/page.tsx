import MigrationList from "@/modules/migration/list";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";

const fetchData = async (params: { migration_slug: string }) => {
  try {
    const file = await fs.readFile(
      process.cwd() + "/data/mirgration-pages.json",
      "utf8"
    );
    const data = JSON.parse(file);
    const dataSingle = data?.data?.find(
      (item: any) => item?.slug == params?.migration_slug
    );
    if (!dataSingle) {
      return notFound();
    }
    return dataSingle;
  } catch (error) {
    return notFound();
  }
};

const MigrationListPage = async ({ params }: any) => {
  const data = await fetchData(params);

  return <MigrationList data={data} />;
};

export default MigrationListPage;
