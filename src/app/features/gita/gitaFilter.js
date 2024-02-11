"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

export const getSlokhaNumber = [
  {
    "chapter": 1,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47,
    ],
  },
  {
    "chapter": 2,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
    ],
  },
  {
    "chapter": 3,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43,
    ],
  },
  {
    "chapter": 4,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42,
    ],
  },
  {
    "chapter": 5,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29,
    ],
  },
  {
    "chapter": 6,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47,
    ],
  },
  {
    "chapter": 7,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
  },
  {
    "chapter": 8,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
  },
  {
    "chapter": 9,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    ],
  },
  {
    "chapter": 10,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42,
    ],
  },
  {
    "chapter": 11,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    ],
  },
  {
    "chapter": 12,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    "chapter": 13,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    ],
  },
  {
    "chapter": 14,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27,
    ],
  },
  {
    "chapter": 15,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
  {
    "chapter": 16,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
  },
  {
    "chapter": 17,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
  },
  {
    "chapter": 18,
    "verse": [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78,
    ],
  },
];


const GitaFilter = () => {
  const [chapter, setchapter] = useState(null);
  const [shloka, setshloka] = useState(null);

  const getChapter = (e) => {
    e.target.value !== "chapter" &&
      e.target.value !== chapter &&
      setchapter(e.target.value);
  };

  const getVerse = (e) => {
    e.target.value !== "shloka" &&
      e.target.value !== shloka &&
      setshloka(e.target.value);
     
  };
  return (
    <div>
      <div className="block md:inline-flex mt-5 mx-2">
        <select
          name="chapter"
          className="w-40 border-2 border-gray-300 rounded-md text-gray-600 font-semibold h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none "
          onChange={getChapter}
        >
          <option value="chapter">Chapter</option>
          {getSlokhaNumber.length > 0
            ? getSlokhaNumber.map((item) => {
                return (
                  <option key={item.chapter} value={item.chapter}>
                    {item.chapter}
                  </option>
                );
              })
            : null}
        </select>
      </div>
      <div className="block md:inline-flex my-5 mx-2">
        <select
          name="shloka"
          className="w-40 border-2 border-gray-300 rounded-md text-gray-600 font-semibold h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none "
          onChange={getVerse}
        >
          <option value="shloka">Slokha</option>
          {getSlokhaNumber.length
            ? getSlokhaNumber
                .filter((item) => item.chapter === Number(chapter))
                .map((chapterItem) =>
                  chapterItem.verse.map((verseNumber) => (
                    <option key={verseNumber} value={`${verseNumber}`}>
                      {verseNumber}
                    </option>
                  ))
                )
            : null}
        </select>
      </div>
      <Link href={`/features/gita/chapters/${chapter}/verses/${shloka}`}>
        <Button variant="own" size="lg">GetVerse</Button>
      </Link>
    </div>
  );
};

export default GitaFilter;
