import React from "react";
import Library from "../../library";
import Filter from "../../filter";

const GetAllBooks = async () => {
  const response = await fetch(`${process.env.BASE_URL}api/books`,{next:{revalidate:30}});
  const data = await response.json();
  return data.result;
};

const Page =async ({params}) => {
  const bookInfo = await GetAllBooks();
const {category,langauge,pageno} = params;
  return (
    <div className="text-center mt-5">
      <h1 className="text-4xl font-extrabold text-[#374246]">Library</h1>
      <div>
        <Filter cate={category} lang={langauge}/>
       <div>
       <p className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mr-2">{category}</p>
        <p className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{langauge}</p>
       </div>
        <div className="flex flex-col">
          <Library cat={category} lan={langauge} books = {bookInfo} />
        </div>
      </div>
    </div>
  );
};

export default Page;
