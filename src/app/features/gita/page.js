import React from "react";
import GitaFilter from "./gitaFilter";
import Link from "next/link";
import { BASE_URL } from "@/lib/constant";

export const metadata = {
  title: "Shrimad Bhagwat Geeta Vedika Granthasala",
  description: "Shrimad Bhagwat Geeta Page of Vedika Granthasala",
};

export const getAllChapters = async () => {
  const fetchBlog = await fetch(`${BASE_URL}/api/gitas/chapters`);
  const data = await fetchBlog.json();
  return data.result;
};

const Gita = async () => {
  if (!BASE_URL) {
    return null;
  }
  const chapters = await getAllChapters();
  return (
    <div className="w-[80%] mx-auto mt-5">
      <p className="text-4xl font-extrabold text-center text-[#374246]">Gita</p>
      <div className="text-center">
        <GitaFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapters.length > 0 &&
            chapters.map((item, index) => {
              return (
                <Link
                  href={`/features/gita/${item?.chapter_number}`}
                  key={index}
                >
                  <div className="w-[100%] h-50 bg-white/70  p-5 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-[#ffcd9f]/60">
                    <p className="text-md font-bold mb-2 text-left text-[#ff933b]">
                      Chapter {item?.chapter_number}
                    </p>
                    <p className="text-lg font-bold mb-2 text-left antialiased text-[#374246]">
                      {item.name_translated}
                    </p>
                    <p className="text-sm text-left text-gray-600 clamp-lines-3">
                      {item.chapter_summary}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Gita;
