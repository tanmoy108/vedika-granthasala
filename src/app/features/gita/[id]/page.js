import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/lib/constant";

export const getAllChapters = async () => {
  const fetchBlog = await fetch(`${BASE_URL}/api/gitas/chapters`);
  const data = await fetchBlog.json();
  return data.result;
};

const Details = async (id) => {
  if (!BASE_URL) {
    return null;
  }
  try {
    const response = await fetch(`${BASE_URL}/api/gitas/chapters/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Page = async ({ params }) => {
  if (parseInt(params.id) > 18 || parseInt(params.id) < 1) notFound();
  const chapterDetails = await Details(params.id);

  return (
    <div className="w-full h-full">
      <div className="mx-auto w-[80%] mt-20 ">
        <Link href="/features/gita">
          <Button variant="own">Back</Button>
        </Link>
        <div className="text-center grid gap-4 py-5 border-b-4 mt-6">
          <p className="text-md font-semibold text-[#ff933b]">
            Chapter {chapterDetails?.chapter_number}
          </p>
          <p className="text-2xl font-black text-[#374246]">
            {" "}
            {chapterDetails.name_translated}
          </p>
          <p className="text-md text-left text-[#5e5e5e]">
            {" "}
            {chapterDetails.chapter_summary}
          </p>
        </div>
        <div className="my-5">
          <p className="text-md text-left">
            <span className="font-semibold text-[#374246]">Name Meaning:</span>{" "}
            {chapterDetails.name_meaning}
          </p>
          <p className="text-md text-left">
            <span className="font-semibold text-[#374246]">Verses Number:</span>{" "}
            {chapterDetails.verses_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  try {
    const list = await getAllChapters();
    const chapters = list || [];

    return chapters.map((item) => ({
      id: item?.chapter_number.toString(),
    }));
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return []; // or throw an error, depending on your needs
  }
}
