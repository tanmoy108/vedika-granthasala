import Image from "next/image";
import React from "react";
import { getAllBlogs } from "./page";
import Link from "next/link";
import { BASE_URL } from "@/lib/constant";
import Head from "next/head";

const DetailsBlog = async ({ blog }) => {
  if (!BASE_URL) {
    return null;
  }
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  let arr = await getAllBlogs();
  let newFilteredarr =
    arr && Array.isArray(arr) && arr.filter((blog) => blog.pending === false);

  const shuffledBlogs = shuffleArray(newFilteredarr);
  const date = new Date(blog?.date);

  // Options for formatting
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  // Convert to readable time
  const readableTime = date.toLocaleDateString("en-BD", options);
  return (
    <div>
      <Head>
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
      </Head>

      <div className="bg-gray-100 w-[90%] mx-auto min-h-screen p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#374246]">
            {blog?.title || "Blog Title"}
          </h1>
          <p className="text-gray-500 mt-2">Published on {readableTime}</p>
        </header>

        {/* Blog Content */}
        <article className="prose max-w-full">
          <div className="flex justify-center">
            <Image
              src={blog?.blogimage}
              alt={blog?.title}
              className="mb-4 rounded-md shadow-lg opacity-90"
              width={500}
              height={300}
            />
          </div>
          <p
            className=" text-[#5e5e5e] text-wrap"
            dangerouslySetInnerHTML={{
              __html: blog?.description || "Description",
            }}
          />
        </article>

        {/* Author Info */}
        {/* <section className="mt-8">
          <div className="flex items-center">
            <Image
              src={blog?.blogimage}
              alt="Author Avatar"
              width={0}
              height={0}
              className="w-8 h-8 rounded-full mr-2"
            /> */}
        {/* <div>
              <p className="text-gray-800 font-semibold">
                {blog?.userId?.name}
              </p>
              <p className="text-gray-500">Published by {blog?.userId?.name}</p>
            </div> */}
        {/* </div>
        </section> */}
      </div>

      <div className="w-11/12 mx-auto">
        <p className="text-4xl font-extrabold text-center text-[#374246] my-8">
          Other Blogs
        </p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.isArray(shuffledBlogs) &&
            shuffledBlogs.length > 0 &&
            shuffledBlogs
              .filter((item) => item.id !== blog.id)
              .slice(0, 4)
              .map((product) => (
                <Link
                  key={product.id}
                  href={`/features/blogs/${product.id}`}
                  className="group"
                >
                  <div className="aspect-h-1 h-80 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      src={product?.blogimage}
                      alt={product.title}
                      width={700}
                      height={800}
                      className="h-full w-full object-cover object-center opacity-85 group-hover:opacity-70"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-[#5e5e5e] font-semibold">
                    {product.title}
                  </h3>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsBlog;
