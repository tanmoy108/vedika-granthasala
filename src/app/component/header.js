import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative bg-gradient-to-l from-[#ffedc5] rounded-3xl my-5 mx-3 lg:mx-10 px-0 lg:px-10 py-5 md:py-10 ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 mt-10 md:w-6/12 ">
              <div className="hero-content">
                <h1 className="mb-5 text-3xl font-black text-[#374246] !leading-[1.208] sm:text-[32px] lg:text-[30px] xl:text-4xl">
                  Namaste, We Provide Holistic Posters, Sacred Scriptures, and
                  Enlightened Blogs
                </h1>
                <p className="mb-8 max-w-[480px] sm:max-w-full text-base text-[#5e5e5e] text-justify">
                  Discover harmony in our holistic posters, delve into the
                  timeless wisdom of sacred scriptures, and explore enlightened
                  blogs that illuminate the essence of Hindu philosophy. Welcome
                  to a space where art, spirituality, and wisdom converge to
                  inspire and uplift.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                  <div>
                    <Link
                      href="/features/books/All/Bengali"
                      className="inline-flex items-center justify-center rounded-md bg-[#fc9541] py-3 text-center text-base font-medium text-white hover:bg-[#fc9541]/90 px-4 lg:px-9"
                    >
                      Get Books
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/features/gita"
                      className="inline-flex items-center justify-center ml-0 sm:ml-3 py-5 text-center text-base text-[#fc9541] font-bold hover:underline"
                    >
                      Get Gita Verses
                      <svg
                        className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Image
                    src="/om2.jpeg"
                    alt="Aum photo"
                    width={1000}
                    height={2000}
                    className="max-w-full lg:ml-auto opacity-80 overflow-hidden"
                    placeholder="blur"
                    blurDataURL="/library2.jpg"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#fc9541" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#fc9541" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#fc9541" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#fc9541" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#fc9541" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#fc9541" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#fc9541" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#fc9541" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#fc9541" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#fc9541" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#fc9541" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#fc9541" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#fc9541" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#fc9541" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#fc9541" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#fc9541" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#fc9541" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#fc9541" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#fc9541" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#fc9541" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#fc9541" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#fc9541" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#fc9541" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#fc9541" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#fc9541" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // #EEF9F8
  );
};

export default Header;
