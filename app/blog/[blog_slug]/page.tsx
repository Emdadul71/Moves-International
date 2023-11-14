import BlogDetails from "@/modules/blog/details";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export async function generateMetadata({ params }: any) {
//   const data = await fetch(`${apiUrl}/public/blogs/${params.blog_slug}`).then(
//     (res) => res.json()
//   );
//   return {
//     title: data?.title,
//     keywords: data?.metaKeyword,
//     description: data?.metaDescription,
//     openGraph: {
//       url: `${baseUrl}/blog/${data?.slug}`,
//       siteName: "Moves International",
//       title: data?.metaTitle,
//       description: data?.metaDescription,
//       images: [data?.featuredImage],
//       locale: "en_US",
//       type: "article",
//     },
//   };
// }

async function getData(params: any) {
  try {
    const res: any = await fetch(`${apiUrl}/public/blogs/${params.blog_slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to Fetch Data");
    }

    return res.json();
  } catch (error) {
    return notFound();
  }
}
const BlogDetailsPage = async ({ params }: any) => {
  const data = await getData(params);

  return <BlogDetails data={data} />;
};

export default BlogDetailsPage;
