//import type { NextPage } from "next";
import Image from "next/image";
import mZARLogo from "../images/mzar-logo.svg";
import React, { useRef, useState } from "react";
import Link from "next/link";

import { Menu } from "@headlessui/react";

import cn from "classnames";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const ref = useRef<HTMLDivElement | null>(null)
  // const entry = useIntersectionObserver(ref, {})
  // const isVisible = !!entry?.isIntersecting

  // console.log(`Render Section `, { isVisible })
  return (
    <nav
      className={cn(
        props.className,
        "fixed z-10 flex w-full flex-wrap justify-between px-8 py-5 "
      )}
    >
      <div className="z-20 flex items-center gap-4 text-xl font-semibold text-white font-poppins ">
        <Image
          src={mZARLogo}
          alt={"Mesh mZAR token icon"}
          priority
          width={30}
          height={30}
        ></Image>
        <h2>mZAR</h2>
      </div>
      {/* <div className={"justify-items-end "}> */}
      <Menu>
        {({ open }) => (
          <div className={"absolute inset-0 h-full"}>
            <Menu.Button className={"absolute top-5 right-8"}>
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
            </Menu.Button>
            {open && (
              <Menu.Items
                className="grid w-full gap-4 p-4 pt-20 space-y-4 text-center text-white cursor-pointer mesh-secondary-gradient"
              >
                <Menu.Item>
                  <Link href={"#about"}>
                    <a
                      aria-label="What is Mzar?"
                      title="What is Mzar"
                      className={"hover:text-primary"}
                    >
                      What is Mzar?
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <a href="#asset-metadata" className={"hover:text-primary"}>
                    Asset Metadata
                  </a>
                </Menu.Item>

                <Menu.Item>
                  <a
                    className={"hover:text-primary"}
                    href="https://app.mesh.trade/sign-up"
                  >
                    Buy Mzar Now
                  </a>
                </Menu.Item>
              </Menu.Items>
            )}
          </div>
        )}
      </Menu>

      {/* <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded hover:bg-primary focus:bg-primary focus:outline-none "
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
        </button> */}
      {/* {isMenuOpen && (
          <div className={"absolute top-0 right-0 z-50 w-full "}>
            <div className={"mesh-secondary-gradient p-5 shadow-xl "}>
              <div className={"flex place-content-end bg-slate-400"}>
                <div className="self-end bg-red-500">
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className=" p-2 transition duration-200 hover:bg-[#DE1B55]  focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-4 text-white" viewBox="0 0 24 24">
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
                <ul className="space-y-5 align-middle text-white hover:text-[#DE1B55]">
                  <li className="text-white">
                    <Link href="#about">
                      <a
                        aria-label="What is Mzar?"
                        title="What is Mzar"
                        className="tracking-wide text-white  transition-colors duration-200 hover:text-[#DE1B55]"
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
                        className=" tracking-wide transition-colors duration-200 hover:text-[#DE1B55] "
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
                        className=" tracking-wide text-white transition-colors duration-200 hover:text-[#DE1B55]"
                      >
                        Buy Mzar Now
                      </a>
                    </Link>
                  </li>
                </ul>
                {/* Social Icons }
              </nav>
            </div>
          </div>
        )} */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
