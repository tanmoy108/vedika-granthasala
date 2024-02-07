import React from "react";
export const GetAllPoster = async () => {
  const posters = await fetch(`${process.env.BASE_URL}api/designs`,{next:{revalidate:10}});
  const data = await posters.json();
  return data.result;
};

const Page = async () => {
  const mapPoster = await GetAllPoster();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-5 lg:max-w-7xl lg:px-8">
        <p className="text-4xl font-extrabold text-center text-[#374246] my-8">All Designs</p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.isArray(mapPoster) &&
            mapPoster.length > 0 &&
            mapPoster.map((product) => (
              <a key={product.id} href={product.url} className="group">
                <div className="aspect-h-1 h-80 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.url}
                    alt={product.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-[#5e5e5e]">{product.title}</h3>
                
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
