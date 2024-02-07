import Image from "next/image";
import welcome from "../../public/welcome.png";
import {
  BookOpenIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import SlideBar from "./component/slideBar";
import Header from "./component/header";

const services = [
  {
    icon: <BookOpenIcon className=" h-12 w-15 my-2 text-[#ffaf64]" />,
    name: "Gita",
    des: "10+ translation and commentaries",
  },
  {
    icon: <BuildingLibraryIcon className=" h-12 w-15 my-2  text-[#ffaf64]" />,
    name: "Books",
    des: "100+ Books without any cost",
  },
  {
    icon: (
      <ClipboardDocumentCheckIcon className=" h-12 w-15 my-2 text-[#ffaf64]" />
    ),
    name: "Blog",
    des: "Resolving various concerns",
  },
];

export default function Home() {
  return (
    <>
      <Header/>
      <SlideBar />
      <div className="flex justify-center my-8">
        <Image src={welcome} width={900} alt="welcome_banner" />
      </div>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 text-center text-[#312626]">
        OUR SERVICES
      </p>
      <div className="w-[80%] mx-auto flex flex-col sm:flex-row gap-3 justify-around items-center">
        {services.map((item, index) => {
          return (
            <div
              className="bg-[#fffefd] hover:bg-[#FF6701] text-[#1a1313] hover:text-[#ffff] overflow-hidden rounded-lg xs:w-[200px] md:w-[300px] h-[200px] p-5 shadow-lg flex flex-col justify-center items-center"
              key={index}
            >
              {item.icon}
              <p className="text-center text-lg font-semibold">{item.name}</p>
              <p className="text-center text-sm">{item.des}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
