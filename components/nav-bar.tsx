import Image from "next/image";
import mZARLogo from "../images/mzar-logo.svg";
import React, { useRef, useState } from "react";
import Link from "next/link";

import { Menu } from "@headlessui/react";

import cn from "classnames";

export interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  return (
    <nav
      className={cn(
        props.className,
        "fixed z-30 flex w-full flex-wrap justify-between px-8 py-5 "
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
                      What is mZAR?
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy mZAR Now
                  </a>
                </Menu.Item>
              </Menu.Items>
            )}
          </div>
        )}
      </Menu>
    </nav>
  );
};

export default Navbar;
