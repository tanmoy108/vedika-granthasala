"use client";
import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { SelectStatus, setIsOpen } from "./navbarSlice";

const barContent = [
    {
        item:"Gita",
        url:"/features/gita"
    },
    {
        item:"Books",
        url:"/features/books/All/Hindi"
    },
    {
        item:"Designs",
        url:"/features/posters"
    },
    {
        item:"Blogs",
        url:"/features/blogs"
    },
    {
        item:"About us",
        url:"/features/about"
    },
    {
        item:"Admin",
        url:"/features/admin"
    },
];
const BarLayout = () => {
    const open = useSelector(SelectStatus)
    const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  function closeModal() {
    dispatch(setIsOpen())
  }
    const handleLinkClick = () => {
        dispatch(setIsOpen());
    };
  return (
    <div className="overlay z-30">
      <div className="barlayout rounded-md bg-[#FCECDD]/90 w-3/4 p-8">
        <div className="text-right mb-10">
          <button onClick={closeModal}>
            <XMarkIcon className="h-7 w-7 hover:text-[#FF6701]" />
          </button>
        </div>
        <div className="text-center">
          {barContent.map((item, index) => {
            return (
              <p key={index} className="p-2 m-2 tracking-widest hover:border-x-4 border-[#FF6701]">
                    <Link onClick={handleLinkClick} href={item.url} >{item.item}</Link>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BarLayout;
