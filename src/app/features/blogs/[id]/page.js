import React from "react";
import dynamic from "next/dynamic";
import DetailsBlog from "../detailsBlog";

export const GetSpecificBlog = async (id) => {
  const fetchBlog = await fetch(
    `${process.env.BASE_URL}api/blogs/specific/${id}`,
    { next: { revalidate: 10 } }
  );
  const data = await fetchBlog.json();
  return data.result;
};

const Page = async ({ params }) => {
  const blog = await GetSpecificBlog(params.id);
  return (
    <DetailsBlog blog={blog}/>
  );
};
export default dynamic(() => Promise.resolve(Page), { ssr: false });
// export default Page;
