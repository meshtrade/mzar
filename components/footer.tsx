import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";

export const Footer = () => {
  return (
    <div>
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
      {/* Desktop version footer */}
      <div className={"mx-10  border-t-2 border-[#E4E4E4] py-4"}>
        <div className={"bold  text-sm font-bold "}>
          {/* <div>Platform as a Service Agreement</div>
          <div>Authorised User Service Agreement</div>
          <div>Website Privacy Policy</div>
          <div>Support Services Policy</div>
          <div>Acceptable Use Policy</div>
          <div>Data Protection Policy</div> */}
          <ul className={"flex flex-wrap justify-between"}>
            <li className={"hover:text-[#DE1B55]"}>
              <a href="">Platform as a Service Agreement</a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a href="">Authorised User Service Agreement</a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a href="">Website Privacy Policy</a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a href="">Support Services Policy</a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a href="">Acceptable Use Policy</a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a href="">Data Protection Policy</a>
            </li>
          </ul>
        </div>
        <p className={"py-4 text-xs text-[#171433]"}>
          Copyright 2021 Mesh,Inc. All rights reserved | MESH 87 00-844
          Netherlands Capital 100 000 PLN, NIP:5272870947{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
