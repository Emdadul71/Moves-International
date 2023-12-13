import BlogCategory from "@/modules/blog/category";
const apiUrl = process.env.NEXT_PUBLIC_API_URI;

const limit = 20;

async function getData(catSlug: any) {
  try {
    const res = await fetch(
      `${apiUrl}/public/blogs?limit=${limit}&page=1&blogFor=BANGLADESH&status=ACTIVE&category=${catSlug}`,
      {
        cache: "no-store",
      }
    );
    console.log("res abc", res);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return null;
  }
}

const BlogCategoryPage = async ({ params }: any) => {
  const limit = 3;
  const catSlug = params.category_slug;
  const data = await getData(catSlug);

  const dataArray = data?.data;
  const total = data?.totalCount - limit;
  const excludeBlogIds = dataArray && dataArray?.map((item: any) => item.id);
  return (
    <BlogCategory
      data={dataArray}
      catSlug={catSlug}
      total={total}
      excludeBlogIds={excludeBlogIds}
    />
  );
};

export default BlogCategoryPage;
