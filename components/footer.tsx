import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";

export const Footer = () => {
  return (
    <div className={"mt-96 border-t-2 border-black py-10"}>
      <div
        className={
          "flex items-center justify-center bg-white font-sans text-lg"
        }
      >
        <p>Supported Wallets:</p>
      </div>
      <div className={"flex items-center justify-center py-4"}>
        <a href="/">
          <Image
            placeholder={"blur"}
            src={logo}
            alt="logo"
            width={130}
            height={50}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
