"use client";
import { BookOpenIcon, Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import BarLayout from "./barLayout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { SelectStatus, setIsOpen } from "./navbarSlice";
import logo from "../../../../public/logo.png"
import Image from "next/image";
export default function CommonLayout() {
  const isOpen = useSelector(SelectStatus);
  const dispatch = useDispatch();
  const router = useRouter();

  function openModal() {
    dispatch(setIsOpen());
  }
  const returnHome = () => {
    router.push("/");
  };

  return (
    <>
      {isOpen && <BarLayout isOpen={isOpen} />}
      <nav className="bg-[#fc9541]/90 py-6 px-7 flex items-center justify-between">
        <div
          className="flex space-x-2 w-40 md:w-48"
          onClick={returnHome}
          style={{ cursor: "pointer" }}
        >
          <Image src={logo} alt="logo" width={1000} height={200} />
          {/* <BookOpenIcon className="h-7 w-7 text-white" />
          <h1 className="text-white text-xl font-semibold">Vedikha Granthasala</h1> */}
        </div>
        <div className="flex items-center space-x-4">
          <button type="button" onClick={openModal}>
            <Bars3CenterLeftIcon className="h-7 w-7 text-white" />
          </button>
        </div>
      </nav>
    </>
  );
}
