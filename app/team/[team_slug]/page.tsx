import TeamDetails from "@/modules/team/details";
import { notFound } from "next/navigation";

import React from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
async function getData(params: any) {
  try {
    const res: any = await fetch(`${apiUrl}/public/team/${params.team_slug}`, {
      cache: "no-store",
    });

    console.log("res", res);

    if (!res.ok) {
      throw new Error("Faild to Fetch Data");
    }

    return res.json();
  } catch (error) {
    return notFound();
  }
}
const TeamDetailsPage = async ({ params }: any) => {
  const data = await getData(params);

  return <TeamDetails data={data} />;
};

export default TeamDetailsPage;
