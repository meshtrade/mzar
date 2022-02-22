import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";

export const Footer = () => {
  return (
    <div className={"mx-10  border-t-2 border-[#E4E4E4] py-4"}>
      <div
        className={
          "flex items-center justify-center bg-white py-2 font-sans text-base text-[#171433]"
        }
      >
        <p>Supported Wallets:</p>
      </div>
      <div className={"flex items-center justify-center"}>
        <a href="/">
          <Image
            placeholder={"blur"}
            src={logo}
            alt="logo"
            width={100}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
