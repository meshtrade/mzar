//import type { NextPage } from "next";
import Image from "next/image";
import mZARLogo from "../images/mzar-logo.png";
import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-50 flex flex-wrap justify-between px-8 py-5 bg-transparent ">
      <div className="">
        <Image src={mZARLogo} alt={"Mesh mZAR token icon"} priority></Image>
      </div>
      <div className={"justify-items-end"}>
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:shadow-outline hover:bg-primary focus:bg-primary focus:outline-none "
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <g id="ic_menu_24px" transform="translate(-8929 165)">
              <rect
                id="Rectangle_3694"
                data-name="Rectangle 3694"
                width="24"
                height="24"
                transform="translate(8929 -165)"
                fill="none"
              />
              <path
                id="ic_menu_24px-2"
                data-name="ic_menu_24px"
                d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z"
                transform="translate(8929 -165)"
                fill="#fff"
              />
            </g>
          </svg>
        </button>
        {isMenuOpen && (
          <div className={"absolute z-50 top-0 left-0 w-full"}>
            <div className={"rounded border bg-white opacity-20 p-5 shadow-sm"}>
              <div className={"flex items-center justify-between"}>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-[#DE1B55] focus:bg-gray-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-black" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <nav
                className={
                  "sm:text-s items-center justify-center text-center md:text-lg"
                }
              >
                <ul className="space-y-4 align-middle hover:text-[#DE1B55]">
                  <li>
                    <Link href="#about">
                      <a
                        aria-label="What is Mzar?"
                        title="What is Mzar"
                        className="tracking-wide text-[#55517B] transition-colors duration-200 hover:text-[#DE1B55]"
                      >
                        What is Mzar?
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#asset-metadata">
                      <a
                        aria-label="Asset Metadata"
                        title="Asset Metadata"
                        className=" tracking-wide text-[#55517B] transition-colors duration-200 hover:text-[#DE1B55] "
                      >
                        Asset Metadata
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#buy-mzar">
                      <a
                        aria-label="Buy Mzar Now"
                        title="Buy Mzar Now"
                        className=" tracking-wide text-[#55517B] transition-colors duration-200 hover:text-[#DE1B55]"
                      >
                        Buy Mzar Now
                      </a>
                    </Link>
                  </li>
                </ul>
                {/* Social Icons */}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
