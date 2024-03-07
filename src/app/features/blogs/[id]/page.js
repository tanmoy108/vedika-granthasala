import React from "react";
import dynamic from "next/dynamic";
import DetailsBlog from "../detailsBlog";
import { BASE_URL } from "@/lib/constant";

// export const generateMetadata = async ({ params }) => {
//   const blog = await GetSpecificBlog(params.id);
//   return {
//     title: `${blog?.title}`,
//     description: `Information of ${blog?.title}`,
//   };
// };

export const GetSpecificBlog = async (id) => {
  const fetchBlog = await fetch(`${BASE_URL}/api/blogs/specific/${id}`, {
    next: { revalidate: 5 },
  });
  const data = await fetchBlog.json();
  return data.result;
};

const Page = async ({ params }) => {
  if (!BASE_URL) {
    return null;
  }
  const blog = await GetSpecificBlog(params.id);
  return (
    <>
      <head>
        <title>{blog?.title || "Blog Title"}</title>
        <meta name="description" content={blog?.description || "Description"} />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={blog?.title || "Blog Title"} />
        <meta
          property="og:description"
          content={blog?.description || "Description"}
        />
        <meta property="og:image" content={blog?.blogimage} />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/features/blogs/${blog?.id}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Vedika Granthasala" />
      </head>
      <DetailsBlog blog={blog} />
    </>
  );
};
export default dynamic(() => Promise.resolve(Page), { ssr: false });
// export default Page;
