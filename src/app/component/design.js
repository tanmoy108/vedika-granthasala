import React from 'react'
import { GetAllPoster } from '../features/posters/page';
import Link from 'next/link';
import Image from 'next/image';
import { BASE_URL } from '@/lib/constant';

const Design =async () => {
  if(!BASE_URL)
  {
    return null
  }
    const mapPoster = await GetAllPoster();
  return (
    <div className='w-11/12 mx-auto'>
     <p className="text-4xl font-extrabold text-center text-[#374246] my-8">Designs</p>
     <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.isArray(mapPoster) &&
            mapPoster.length > 0 &&
            mapPoster.slice(0, 3).map((product) => (
              <Link key={product.id} href={product.url} className="group">
                <div className="aspect-h-1 h-80 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={product.url}
                    alt={product.title}
                    width={500}
                    height={800}
                    className="h-full w-full object-cover object-center opacity-85 group-hover:opacity-70"
                  />
                </div>
                <h3 className="mt-4 text-sm text-[#5e5e5e]">{product.title}</h3>
              </Link>
            ))}
            <Link href="/features/posters" >
            <div className="flex justify-center items-center aspect-h-1 h-80 px-5 aspect-w-1 w-full overflow-hidden rounded-lg bg-[#fdf2d8] xl:aspect-h-8 xl:aspect-w-7">
                  <p className='text-2xl text-[#5e5e5e] font-semibold text-center'>
                    Click For More
                  </p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Design