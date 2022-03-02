import React from "react";
import Image from "next/image";
import logo from "../images/mesh-logo.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <div>
      <div className="font-poppins">
        <div className={"mx-8  border-t-[1px] border-[#707070] py-4"}>
          <div
            className={
              "flex items-center justify-center font-sans text-base text-[#171433] "
            }
          >
            <p>Supported Wallets:</p>
          </div>

          <div className={"flex items-center justify-center"}>
            <Link href={"/"} passHref>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={
          " mx-8   border-t-[1px]  border-[#707070] py-4 font-poppins xl:py-2 "
        }
      >
        <div className={"text-xs font-bold"}>
          <ul
            className={
              "flex-wrap grid gap-4 2xl:gap-8 text-center text-[#171433]  lg:flex lg:text-left  xl:pt-2"
            }
          >
            <li className={"hover:text-[#DE1B55]"}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/PaaS/v1.0.0/MESH_PaaS_30July2021_1.4%20FINAL.pdf"
                rel="noreferrer"
              >
                Platform as a Service Agreement
              </a>
            </li>
            <li className={"hover:text-[#DE1B55] "}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Authorised-User-Service/v1.0.0/3.%20MESH_Authorised%20User%20Service%20Agreement.20210730.FINAL.pdf"
                rel="noreferrer"
              >
                Authorised User Service Agreement
              </a>
            </li>
            <li className={"hover:text-[#DE1B55] "}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Website-Privacy-Policy/v1.0.0/7.%20MESH_Website%20Privacy%20Policy%20Rev%203.20210730.FINAL.pdf"
                rel="noreferrer"
              >
                Website Privacy Policy
              </a>
            </li>
            <li className={"hover:text-[#DE1B55] "}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Support-Services/v1.0.0/4.%20MESH_Support%20Services%20Policy.20210730.FINAL.pdf"
                rel="noreferrer"
              >
                Support Services Policy
              </a>
            </li>
            <li className={"hover:text-[#DE1B55] "}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Acceptable-Use-Policy/v1.0.0/5.%20MESH_Acceptable%20Use%20Policy.20210730.FINAL%20(1).pdf"
                rel="noreferrer"
              >
                Acceptable Use Policy
              </a>
            </li>
            <li className={"hover:text-[#DE1B55] "}>
              <a
                href="https://storage.googleapis.com/mesh-terms-and-conditions-documents/Data-Protection-Policy/v1.0.0/6.%20MESH%20BV%20-%20Data%20Protection%20Policy.20200730.FINAL.pdf"
                rel="noreferrer"
              >
                Data Protection Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p
          className={
            " mb-2 px-10 font-poppins text-xs text-center text-[#171433] dark:text-[#707070] md:py-4 md:text-center lg:text-left xl:py-2 xl:px-8 "
          }
        >
           {`Copyright ${new Date().getFullYear()} Mesh,Inc. All rights reserved | MESH 87 00-844
          Netherlands Capital 100 000 PLN, NIP:5272870947`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
