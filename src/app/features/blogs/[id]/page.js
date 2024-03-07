import React from "react";
import dynamic from "next/dynamic";
import DetailsBlog from "../detailsBlog";
import { BASE_URL } from "@/lib/constant";

export const generateMetadata = async ({ params }) => {
  const blog = await GetSpecificBlog(params.id);
  return {
    title: `${blog?.title}`,
    description: `${blog?.description}`,
    openGraph: {
      images: `${blog?.blogimage}`,
      title: `${blog?.title}`,
      description: `${blog?.description}`,
    },
  };
};

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
      <DetailsBlog blog={blog} />
    </>
  );
};
export default dynamic(() => Promise.resolve(Page), { ssr: false });
// export default Page;
