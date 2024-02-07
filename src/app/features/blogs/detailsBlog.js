import Image from "next/image";
import React from "react";

const DetailsBlog = ({ blog }) => {
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
  const readableTime = date.toLocaleDateString("en-US", options);
  return (
    <div
      onmousedown="return false"
      onselectstart="return false"
      className="bg-gray-100"
    >
      <div className="bg-gray-100 w-[80%] mx-auto min-h-screen p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
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
              className="mb-4 rounded-md shadow-lg"
              width={500}
              height={300}
            />
          </div>
          <p
            className="text-justify"
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
    </div>
  );
};

export default DetailsBlog;
