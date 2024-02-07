import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthorBook from "./authorBook";
import DownloadButton from "./downloadButton";
import { Button } from "@/components/ui/button";

const GetData = async (id) => {
  const fetchData = await fetch(`${process.env.BASE_URL}api/books/${id}`);
  const res = await fetchData.json();
  return res.result;
};
const GetAllBooks = async () => {
  const response = await fetch(`${process.env.BASE_URL}api/books`, { next: { revalidate: 10 } });
  const data = await response.json();
  return data.result;
};


const Page = async ({ params }) => {

  const oneBook = GetData(params.id);
  const allBook = GetAllBooks();

  const [oneBookData,allBookData] = await Promise.all([oneBook,allBook])

  return (
    <div className="flex justify-center">
      <div className="w-11/12 px-5 mt-5">
        <Link href="/features/books/All/Hindi">
          <Button variant="own">Back</Button>
        </Link>
        <div className="w-full my-4 h-auto flex flex-col sm:flex-row justify-between overflow-hidden shadow-md bg-[#FFFFFF] divide-x rounded-lg ">
          <div className="w-full h-fit sm:w-[45%] overflow-hidden flex flex-col items-center justify-center bg-[#FCECDD] ">
            <Image className="mt-6" src={oneBookData.cover} alt={oneBookData.id + oneBookData.publisher} width={200} height={200} />
            <div className="w-full text-center my-2">
              <p className="text-sm font-semibold text-[#374246]">
                {oneBookData.author[0]}
              </p>
              <p className="text-[#5e5e5e]">Publisher: {oneBookData.publisher}</p>
            </div>
            <DownloadButton url={oneBookData.url}/>
          </div>
          <div className="w-full pb-3 sm:w-[55%] text-sm sm:text-[15px] md:text-base leading-loose md:leading-8 pl-4">
            <p className="text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Title:</span> {oneBookData.title}
            </p>
            {oneBookData.author.length > 1 ? (
              oneBookData.author.map((item, index) => (
                <p className="text-[#5e5e5e]" key={index}>
                  Author{index + 1}: {item}
                </p>
              ))
            ) : (
              <p className="text-[#5e5e5e]">
                <span className="font-semibold text-[#374246]">Author:</span>{" "}
                {oneBookData.author}
              </p>
            )}

            <p className="text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Publisher:</span>{" "}
              {oneBookData.publisher}
            </p>
            <p className="text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Publish Year: </span>
              {oneBookData.publishYear}
            </p>
            <p className="text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Language: </span>
              {oneBookData.language}
            </p>
            <p>
              <span className="font-semibold text-[#374246]">Category:</span>{" "}
              {oneBookData.category}
            </p>
            <p className="text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Page: </span>
              {oneBookData.page}
            </p>
            <p className="text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Size: </span>
              {oneBookData.size}
            </p>
            <p className="leading-normal text-[#5e5e5e]">
              <span className="font-semibold text-[#374246]">Description: </span>
              {oneBookData.description}
            </p>
          </div>
        </div>
        <p className="font-bold text-xl my-5 text-[#374246]">Author&apos;s Other Books/Magazines</p>
        <div className="w-[80%]  mx-auto">
          <AuthorBook name={oneBookData.author[0]} id={oneBookData.id} bookInfo={allBookData} />
        </div>
      </div>
    </div>
  );
};

export default Page;
