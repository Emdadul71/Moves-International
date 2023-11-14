import EventsDetails from "@/modules/events/details";
import { notFound } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: any) {
  const data = await fetch(`${apiUrl}/public/events/${params.event_slug}`).then(
    (res) => res.json()
  );
  return {
    title: data?.title,
    keywords: data?.metaKeyword,
    description: data?.metaDescription,
    openGraph: {
      url: `${baseUrl}/blog/${data?.slug}`,
      siteName: "World University Hub",
      title: data?.metaTitle,
      description: data?.metaDescription,
      images: [data?.featuredImage],
      locale: "en_US",
      type: "article",
    },
  };
}

async function getData(params: any) {
  try {
    const res = await fetch(`${apiUrl}/public/events/${params.event_slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return notFound();
  }
}

const EventDetailPge = async ({ params }: any) => {
  const data = await getData(params);
  return <EventsDetails data={data} />;
};

export default EventDetailPge;
