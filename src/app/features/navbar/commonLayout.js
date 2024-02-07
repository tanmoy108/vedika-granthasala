"use client";
import { BookOpenIcon, Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import BarLayout from "./barLayout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { SelectStatus, setIsOpen } from "./navbarSlice";
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
      <nav className="bg-[#fc9541]/90 py-6 px-8 flex items-center justify-between">
        <div
          className="flex space-x-2"
          onClick={returnHome}
          style={{ cursor: "pointer" }}
        >
          <BookOpenIcon className="h-7 w-7 text-white" />
          <h1 className="text-white text-xl font-semibold">Vedic Library</h1>
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
