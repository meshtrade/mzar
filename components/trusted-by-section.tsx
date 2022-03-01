import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";

export const TrustedBySection = () => {
  return (
    <div className={" bg-white border-b-[1px] pt-4 pb-2 border-[#707070]"}>
      <div
        className={
          "flex items-center justify-center font-sans text-base text-[#171433]"
        }
      >
        <p>Trusted by:</p>
      </div>

      <div className={"flex items-center justify-center"}>
        <a href="https://www.mesh.trade/" target="_blank" rel="noopener noreferrer">
          <Image placeholder={"blur"} src={logo} alt="logo" />
        </a>
      </div>
    </div>
  );
};
