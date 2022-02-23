import type { NextPage } from "next";
import Image from "next/image";
import mZARLogo from "../images/mzar-logo.png";


export const Navbar = () => {
    return (
        <nav className="flex flex-wrap justify-between px-8 py-4 bg-transparent ">
        <div className="">
          <Image src={mZARLogo} alt={"Mesh mZAR token icon"} priority></Image>
        </div>
        <div className="pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    );
  };
  