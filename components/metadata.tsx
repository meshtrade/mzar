import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import right from "../images/right-side.png";
import { Fragment } from "react";
import mZAR from "../images/mZAR-coin.png";

export const Metadata = () => {
  return (
    <div className={"grid  lg:grid-cols-4 px-4 mb-20"}>
      <div className={"lg:col-span-2"}>
        <div className={"lg:py-8"}>
          <div className={" font-poppins text-center pb-8 text-3xl  text-[#DE1B55]"}>
           <h2>Asset<strong className="pl-2">Metadata</strong></h2> 
          </div>
        </div>
        <Tab.Group>
          <Tab.List className={"mx-6 border-b border-[#DE1B55] flex flex-wrap justify-between  py-2 "}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                      ? " text-[14px]  font-poppins font-[500] tracking-wide text-[#DE1B55] underline underline-offset-[11px] decoration-2"
                      : " text-[#55517B] text-opacity-30 font-[500] font-poppins text-[14px] tracking-wide ;"
                  }
                >
                  ORGANIZATION METADATA
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected
                    ? " text-[14px]  font-poppins font-[500] tracking-wide text-[#DE1B55] underline underline-offset-[11px] decoration-2"
                    : " text-[#55517B] text-opacity-30 font-[500] font-poppins text-[14px] tracking-wide ;"
                  }
                >
                  CURRENCY
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className={"flex items-center justify-center py-8"}>
                <Image
                  src={mZAR}
                  alt={"Mesh mZAR token icon"}
                  priority
                  width={70}
                  height={70}
                ></Image>
              </div>
              <div
                className={
                  "grid gap-2 justify-items-center md:grid-cols-1 px-4 lg:grid-cols-2 lg:justify-items-start tracking-wide"
                }
              >
                <h2 className={"text-xl  font-bold text-[#DE1B55]"}>
                  Organisation Name
                </h2>
                <p className={"text-[#55517B] text-[18px] font-roboto font-[300]"}>
             
                  Mesh Trade South Africa (Pty) Ltd
                </p>

                <p
                  className={
                    "text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Website
                </p>
                <p className={"text-[#55517B] text-[18px] font-roboto font-[300]"}>
                  https://mzar.mesh.trade
                </p>

                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Description
                </p>
                <p className={" text-[#55517B] text-[18px]  font-roboto font-[300] text-center"}>
                  Mesh is a multi-sided, cross-asset platform that provides
                  universal, direct access for all participants to a trusted
                  global capital marketplace. Mesh makes it possible to Create,
                  Issue, Trade, and Own tokenized digital assets over their full
                  Lifecycle giving everyone access to grow their wealth.
                </p>
                <p
                  className={
                    "text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Twitter Account
                </p>
                <p className={"text-[#55517B] font-roboto text-[18px]  font-[300]"}>
                  @mesh_trade
                </p>
                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Official Email
                </p>
                <a href="mailto:hello@mesh.trade" className="text-[#55517B] font-roboto font-[300] cursor-pointer hover:text-[#30B0B0]">hello@mesh.trade</a>
  
              </div>
            </Tab.Panel>
            <Tab.Panel className={""}>
            <div className={"flex items-center justify-center  py-8"}>
                <Image
                  src={mZAR}
                  alt={"Mesh mZAR token icon"}
                  priority
                  width={70}
                  height={70}
                ></Image>
              </div>
              <div
                className={
                  "grid gap-2 justify-items-center md:grid-cols-1 lg:grid-cols-2 lg:justify-items-start tracking-wide px-4"
                }
              >
                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Asset Code
                </p>
                <p className={"text-[#55517B] font-roboto font-[300]"}> mZAR </p>
                <p
                  className={
                    "text-center text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Issuer Address
                </p>
                <p className={"text-[#55517B] text-center text-[18px] font-roboto font-[300]"}>
                  GCBNWTCCMC32UHZ5OC C2PNMFDGXRVPA7MFFBF FTCVW77SX5PMRB7Q4BY
                </p>

                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Friendly Name
                </p>
                <p className={"text-[#55517B] text-center text-[18px] font-roboto font-[300]"}>
                  ZAR Mesh
                </p>
                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Description
                </p>
                <p className={" text-[#55517B] text-center text-[18px] font-roboto font-[300]"}>
                  mZAR is a fully collateralized South African ZAR stablecoin,
                  based on the open fiat stablecoin framework of Mesh. mZAR is
                  fully redeemable for ZAR held in an account managed by Mesh.
                </p>
                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Anchored Asset
                </p>
                <p className={"text-[#55517B] text-center text-[18px] font-roboto font-[300]"}> true </p>
                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Anchored Asset Type
                </p>
                <p className={"text-[#55517B] text-center text-[18px] font-roboto font-[300]"}> fiat</p>
                <p
                  className={
                    "text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Anchor Asset
                </p>
                <p className={"text-[#55517B] text-center text-[18px] font-roboto font-[300]"}>ZAR </p>
                <p
                  className={
                    " text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Redemption Instructions
                </p>
                <p className={"text-[#55517B] text-center text-[18px] font-roboto font-[300]"}>
                  Redeemable through a Mesh account at <a className="tracking-wide text-[#30B0B0] underline underline-offset-2 decoration-2" href="https://www.mesh.trade/"> mesh.trade</a>
                </p>
                <p
                  className={
                    "text-xl font-bold text-[#DE1B55]"
                  }
                >
                  Attestation_of_reserve
                </p>
                <a className="tracking-wide text-[#30B0B0] text-[18px] font-[300] underline underline-offset-2 decoration-2" href="#"> mzar.mesh.trade</a>

              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className={""}>
        {/* <div className={"absolute right-0"}>
          <a href="/">
            <Image
              src={right}
              alt="full-circle"
              width={"400px"}
              height={"600px"}
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Metadata;
