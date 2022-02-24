import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";

export const Mesh = () => {
  return (
    <div className={"mx-8  border-b-[1px] border-[#707070]"}>
      <div
        className={
          "flex items-center justify-center font-sans text-base text-[#171433] dark:text-white"
        }
      >
        <p>Trusted by:</p>
      </div>

      <div className={"flex items-center justify-center pb-4"}>
        <a href="https://www.mesh.trade/">
          <Image placeholder={"blur"} src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
};
