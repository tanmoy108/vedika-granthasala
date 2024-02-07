import Link from "next/link";
import React from "react";
import { getAllChapters } from "../page";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const Details = async (id) => {
    try {
      const response = await fetch(
        `${process.env.BASE_URL}api/gitas/chapters/${id}`
      );
  
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
    if(parseInt(params.id)>18  || parseInt(params.id) < 1 ) notFound()
  const chapterDetails = await Details(params.id);

  const backgroundStyle = {
    backgroundImage: `url("/gitastyle.jpg")`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'100%',
};
  return (
    <div className="w-full h-full" style={backgroundStyle}>
      <div className="mx-auto w-[80%] mt-20 ">
      <Link href="/features/gita">
        <Button variant="own">Back</Button>
      </Link>
      <div className="text-center grid gap-4 py-5 border-b-4 mt-6">
        <p className="text-md font-semibold text-[#ff933b]">
          Chapter {chapterDetails.chapter_number}
        </p>
        <p className="text-2xl font-black text-[#374246]"> {chapterDetails.name_translated}</p>
        <p className="text-md text-left"> {chapterDetails.chapter_summary}</p>
      </div>
      <div className="my-5">
        <p className="text-md text-left">
          <span className="font-semibold">Name Meaning:</span>{" "}
          {chapterDetails.name_meaning}
        </p>
        <p className="text-md text-left">
          <span className="font-semibold">Verses Number:</span>{" "}
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
        id: item.chapter_number.toString(),
      }));
    } catch (error) {
      console.error("Error fetching chapters:", error);
      return []; // or throw an error, depending on your needs
    }
  }
  