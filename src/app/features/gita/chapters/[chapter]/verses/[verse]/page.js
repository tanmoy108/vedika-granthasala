import GitaFilter from "@/app/features/gita/gitaFilter";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BASE_URL } from "@/lib/constant";

export const generateMetadata = ({ params }) => {
  const { chapter, verse } = params;
  return {
    title: `ShrimadBhagwat Geeta chapter ${chapter} verse ${verse}`,
    description: `Information of gita chapter no ${chapter} gita verse no ${verse} of Shrimad Bhagwat Geeta`,
  };
};

const getReferences = async () => {
  const fetchReference = await fetch(`${BASE_URL}/api/gitas/references`);
  const data = await fetchReference.json();
  return data.result;
};

const GetSpecificVerse = async (chapter, verse) => {
  // const response = await fetch(
  //   `${BASE_URL}/api/gitas/chapters/${chapter}/verses/${verse}`
  // );
  // const data = await response.json();

  // return data.result;
  const response = await fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter}/verses/${verse}/`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
    }
  );
  const data = await response.json();
  return data;
};

const Page = async ({ params }) => {
  if (!BASE_URL) {
    return null;
  }
  const { chapter, verse } = params;
  const GetVerse = await GetSpecificVerse(chapter, verse);

  return (
    <div className="text-center mt-5">
      <GitaFilter />
      <div className="flex flex-col items-center justify-center divide-y">
        {GetVerse && GetVerse.chapter_number ? (
          <>
            <div className="mb-4 xs:px-2 sm:px-6 py-5 w-3/4 bg-[#ffcd9f]/80 rounded-md text-left">
              <p className="xs:inline-box sm:inline">
                Chapter Number: {GetVerse.chapter_number}
              </p>
              <p className="xs:inline-box sm:inline xs:p-0 sm:px-3">
                Slokha Number: {GetVerse.verse_number}
              </p>
              <p className="font-bold text-center mt-5 py-10 text-[#362f24]">
                {GetVerse.text}
              </p>
            </div>
            <div className=" w-full flex justify-center items-center flex-col gap-3">
              <p className="text-3xl font-semibold my-4 text-[#374246]">
                Translations
              </p>
              {GetVerse.translations.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-3/4 xs:px-2 sm:px-6 py-3 border-2 rounded-md"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          {item.author_name} : {item.language}
                        </AccordionTrigger>
                        <AccordionContent>{item.description}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                );
              })}
            </div>
            <div className=" w-full flex justify-center items-center flex-col gap-3">
              <p className="text-3xl font-semibold my-4 text-[#374246]">
                Commentaries
              </p>
              {GetVerse.commentaries.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-3/4 xs:px-2 sm:px-6 py-3 border-2 rounded-md"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          {item.author_name} : {item.language}
                        </AccordionTrigger>
                        <AccordionContent>{item.description}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="font-extrabold"> Please Select Chapter and Shloka </p>
        )}
      </div>
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  if (!BASE_URL) {
    return null;
  }else{
  try {
    const gitaNumber = await getReferences();
    if (!gitaNumber) {
      return null;
    }

    return gitaNumber
      .filter(item => item && item.verse)
      .flatMap((item) =>
        item.verse.map((slok) => ({
          chapter: item?.chapter?.toString(),
          verse: slok?.toString(),
        }))
      );
  } catch (error) {
    console.log(error)
    return []; 
  }
}
}
