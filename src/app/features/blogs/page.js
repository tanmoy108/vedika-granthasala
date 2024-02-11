import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/lib/constant";

export const metadata = {
  title: "Blog - Vedika Granthasala",
  description: "Hinduism Blog, vedas, gita, scriptures",
};


export const getAllBlogs = async () => {
  const fetchBlog = await fetch(`${BASE_URL}/api/blogs`, {
    next: { revalidate: 10 },
  });
  const data = await fetchBlog.json();
  return data.result;
};
const Page = async () => {
  if(!BASE_URL)
  {
    return null
  }
  let arr = await getAllBlogs();
  let newFilteredarr = arr && Array.isArray(arr) && arr.filter(blog=>blog.pending===false)

  return (
    <div className="w-[90vw] mx-auto">
      <div>
        <p className="text-4xl font-extrabold text-center text-[#374246] my-8">Blogs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
          {newFilteredarr  && Array.isArray(newFilteredarr) && newFilteredarr .length > 0 ? (
            newFilteredarr .map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm h-[300px] overflow-hidden border border-gray-200 rounded-lg shadow bg-[#FCECDD]"
                >
                  <Link href={`/features/blogs/${item.id}`}>
                    <div className="overflow-hidden h-[60%] clipingcss">
                      <Image
                        className="rounded-t-lg h-full opacity-90"
                        src={item?.blogimage}
                        alt={item?.title}
                        width={700}
                        height={500}
                      />
                    </div>
                    <div className="p-3 h-[50%] flex flex-col">
                      <div className="h-[90%] overflow-hidden">
                      <h5 className="mb-2 md:text-lg font-semibold tracking-tight text-[#374246]">
                        {item?.title}
                      </h5>
                      </div>
                      {/* <p className="text-sm text-[#4d4d4d]">
                        {item?.userId?.name || "User Name"}
                      </p> */}
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>Blogs will be here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
