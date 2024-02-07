import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AuthorBook = ({ name, id, bookInfo }) => {
  const filterBook =
    bookInfo.length > 0 &&
    bookInfo.filter((item) => item.author.includes(name) && item.id != id);
  return (
    <div>
      {filterBook && filterBook.length > 0 ? (
        <Carousel>
          <CarouselContent>
            {filterBook.map((item, index) => {
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Link
                    href={`/features/books/author/${item.id}`}
                    className="group"
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={item.cover}
                        alt={item.title}
                        width={500}
                        height={0}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-[#374246]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-md font-medium text-[#ff933b]">
                      {item.language}
                    </p>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p className="text-[#374246] text-center font-semibold">
          Author has no other book
        </p>
      )}
    </div>
  );
};

export default AuthorBook;
