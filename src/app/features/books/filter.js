"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const category = [
  {
    id: 1,
    name: "Book",
  },
  {
    id: 2,
    name: "Magazine",
  },
];

const language = [
  {
    id: 1,
    name: "Hindi",
  },
  {
    id: 2,
    name: "English",
  },
  {
    id: 3,
    name: "Bengali",
  },
];

const Filter = ({ cate, lang }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(cate);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleLanguageChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
  };

  const ApplyFilter = () => {
    router.push(`/features/books/${selectedCategory}/${selectedLanguage}`);
  };

  return (
    <>
      <div className="block md:inline-flex mt-5 mx-2">
        <select
          name="category"
          className="w-40 border-2 border-gray-300 rounded-md text-gray-600 font-semibold h-10 pl-5 pr-5 bg-white hover:border-gray-400 focus:outline-none "
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="All">All</option>
          {category.length > 0 &&
            category.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div className="block md:inline-flex my-5 mx-2">
        <select
          name="language"
          className="w-40 border-2 border-gray-300 rounded-md text-gray-600 font-semibold h-10 pl-5 pr-5 bg-white hover:border-gray-400 focus:outline-none "
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          {language.length > 0 &&
            language.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <Button variant="own" size="lg"  onClick={ApplyFilter}>FILTER</Button>
    </>
  );
};

export default Filter;
