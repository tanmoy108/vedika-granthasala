import Link from "next/link";
import React from "react";

const Footer = () => {
    const backgroundStyle = {
        backgroundImage: `url("/footer.png")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:"500px",
    };
  return (
    <>
    <div className="m-0 md:mt-5" style={backgroundStyle} ></div>
    <div className="bg-[#FFF0CE]">
      <div className="mx-auto w-full max-w-screen-xl px-7 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#5e5e5e]">
                Vedika Granthasala
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#374246] uppercase">
                Services
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/features/posters" className="hover:underline">
                    Designs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/features/books/All/Hindi"
                    className="hover:underline"
                  >
                    Books
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/features/gita" className="hover:underline">
                    Gita
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/features/blogs" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#374246] uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/tanmoy108"
                    target="_blank"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <Link href={`${process.env.BASE_URL}`} className="hover:underline">
              Vedika Granthasala™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/shtanmoy108/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a
              href="https://github.com/tanmoy108"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
