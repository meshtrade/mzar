import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";

export const Footer = () => {
  return (
    <div>
      <div className="font-poppins">
        <div className={"mx-8  border-t-[1px] border-[#E4E4E4] pt-4"}>
          <div
            className={
              "flex items-center justify-center bg-white font-sans text-base text-[#171433]"
            }
          >
            <p>Supported Wallets:</p>
          </div>

          <div className={"flex items-center justify-center"}>
            <a href="/">
              <Image src={logo} alt="logo" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={
          " mx-8   border-t-[1px] border-b-[1px] border-[#E4E4E4] py-4 font-poppins "
        }
      >
        <div className={"text-[12px] font-bold"}>
          <ul
            className={
              "flex-wrap justify-between text-center text-[#171433]  lg:flex"
            }
          >
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/PaaS/v1.0.0/MESH_PaaS_30July2021_1.4%20FINAL.pdf"
                target="_blank"
              >
                Platform as a Service Agreement
              </a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Authorised-User-Service/v1.0.0/3.%20MESH_Authorised%20User%20Service%20Agreement.20210730.FINAL.pdf"
                target="_blank"
              >
                Authorised User Service Agreement
              </a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Website-Privacy-Policy/v1.0.0/7.%20MESH_Website%20Privacy%20Policy%20Rev%203.20210730.FINAL.pdf"
                target="_blank"
              >
                Website Privacy Policy
              </a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Support-Services/v1.0.0/4.%20MESH_Support%20Services%20Policy.20210730.FINAL.pdf"
                target="_blank"
              >
                Support Services Policy
              </a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Acceptable-Use-Policy/v1.0.0/5.%20MESH_Acceptable%20Use%20Policy.20210730.FINAL%20(1).pdf"
                target="_blank"
              >
                Acceptable Use Policy
              </a>
            </li>
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Data-Protection-Policy/v1.0.0/6.%20MESH%20BV%20-%20Data%20Protection%20Policy.20200730.FINAL.pdf"
                target="_blank"
              >
                Data Protection Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={" "}>
        <p className={" py-4 px-10 font-poppins text-xs text-[#171433]  "}>
          Copyright 2021 Mesh,Inc. All rights reserved | MESH 87 00-844
          Netherlands Capital 100 000 PLN, NIP:5272870947{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
