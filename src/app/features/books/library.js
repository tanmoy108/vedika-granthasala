"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Library = ({ books, cat, lan }) => {
  const bookInfo = books;
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const filterbookInfo =
    bookInfo.length > 0 &&
    bookInfo.filter(
      (item) =>
        (!cat || item.category === cat) && (!lan || item.language === lan)
    );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems =
    filterbookInfo.length > 0 &&
    filterbookInfo.slice(indexOfFirstItem, indexOfLastItem);

  const wholeItems =
    !filterbookInfo.length && bookInfo.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filterbookInfo.length / itemsPerPage);
  const total = Math.ceil(bookInfo.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="flex mt-3 justify-center gap-x-3 gap-y-8 flex-wrap">
        {currentItems.length > 0
          ? currentItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-60 h-96  border-2 rounded-md bg-[#FCECDD] flex justify-center flex-col overflow-hidden"
                >
                  <Link
                    href={`/features/books/author/${item.id}`}
                    className="hover:bg-gray-100"
                  >
                    <Image
                      src={item.cover}
                      alt={item.title}
                      width={400}
                      height={0}
                      style={{ objectFit: "cover" }}
                      className=" opacity-90"
                    />
                    <div className="flex justify-between">
                      <p className="text-sm font-semibold p-2 text-[#ff933b]">
                        {item.language}
                      </p>
                      <p className="text-sm font-semibold p-2 text-[#ff933b]">
                        {item.category}
                      </p>
                    </div>
                    <p className="font-semibold px-2 text-[#374246]">{item.title}</p>
                    <p className="px-1 pb-10  text-sm text-[#5e5e5e]">{item.author[0]}</p>
                  </Link>
                </div>
              );
            })
          : wholeItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-60 h-96 border-2 rounded-md bg-[#FCECDD] flex justify-center flex-col overflow-hidden"
                >
                  <Link
                    href={`/features/books/author/${item.id}`}
                    className="hover:bg-gray-100"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.cover}
                      alt={item.title}
                      width={400}
                      height={80}
                      style={{ objectFit: "cover" }}
                      className="opacity-90"
                    />
                    <div className="flex justify-between">
                      <p className="text-sm font-semibold p-2 text-[#ff933b]">
                        {item.language}
                      </p>
                      <p className="text-sm font-semibold p-2 text-[#ff933b]">
                        {item.category}
                      </p>
                    </div>
                    <p className="font-semibold px-2 text-[#374246]">{item.title}</p>
                    <p className="px-1 pb-10  text-sm text-[#5e5e5e]">{item.author[0]}</p>
                  </Link>
                </div>
              );
            })}
      </div>
      <div className="flex justify-center mt-5">
        <ul className="flex">
          {Array.from({
            length: filterbookInfo.length > 0 ? totalPages : total,
          }).map((_, index) => (
            <li
              key={index}
              className={`mx-2 px-4 py-2 bg-[#ffcd9f]/80 rounded-sm cursor-pointer ${
                currentPage === index + 1 ? "bg-[#FFC288]" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Library;
