import BlogLanding from "@/modules/blog/landing";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function getData() {
  const limit = 10;
  try {
    const res = await fetch(
      `${apiUrl}/public/blogs?status=ACTIVE&blogFor=BANGLADESH&limit=${limit}&page=1`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const BlogLandingPage = async () => {
  const data = await getData();
  const dataArray = data?.data;
  return <BlogLanding data={dataArray} />;
};

export default BlogLandingPage;
