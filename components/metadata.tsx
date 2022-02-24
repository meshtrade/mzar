import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import right from "../images/right-side.png";
import { Fragment } from "react";
import mZAR from "../images/mZAR-coin.png";

export const Metadata = () => {
  return (
    <div
      id="asset-metadata"
      className={"mb-24 px-4 lg:px-0 flex items-center justify-center lg:-mt-32 xl:-mt-52 2xl:-mt-70 "}
    >
      <div className={""}></div>
      <div className={"lg:w-[600px]"}>
        <div className={"md:py-10 lg:py-8"}>
          <div
            className={
              " pb-8 lg:pb-0 text-center  font-poppins text-4xl  text-[#DE1B55]"
            }
          >
            <h2 className="font-light">
              Asset<strong className="pl-2 font-bold">Metadata</strong>
            </h2>
          </div>
        </div>
        <Tab.Group>
          <Tab.List
            className={
              "mx-10 flex  flex-wrap justify-between border-b font-medium  border-[#DE1B55] py-2 2xl:mx-28 md:mx-32 sm:mx-40 "
            }
          >
            <Tab
              className={({ selected }) =>
                selected
                  ? " font-poppins  text-sm  tracking-wide text-[#DE1B55] underline decoration-2 underline-offset-[11px] focus:outline-none "
                  : " font-poppins text-sm tracking-wide text-[#55517B] text-opacity-30 dark:text-opacity-40 dark:text-[#707070]"
              }
            >
              ORGANIZATION METADATA
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? " font-poppins text-sm  tracking-wide text-[#DE1B55] underline decoration-2 underline-offset-[11px]"
                  : " font-poppins text-sm tracking-wide text-[#55517B] text-opacity-30 dark:text-opacity-40 dark:text-[#707070]"
              }
            >
              CURRENCY
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className={"flex items-center justify-center py-8  md:pt-12"}>
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
                  "grid justify-items-center gap-2 px-4 tracking-wide md:grid-cols-1 lg:grid-cols-2 lg:justify-items-start"
                }
              >
                <h2 className={"text-lg  font-bold text-[#DE1B55]"}>
                  Organisation Name
                </h2>
                <p
                  className={
                    "font-roboto text-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  Mesh Trade South Africa (Pty) Ltd
                </p>

                <p className={"text-lg font-bold text-[#DE1B55]"}>Website</p>
                <p
                  className={
                    "font-roboto text-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  https://mzar.mesh.trade
                </p>

                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg  font-normal text-[#55517B] lg:text-left dark:text-white"
                  }
                >
                  Mesh is a multi-sided, cross-asset platform that provides
                  universal, direct access for all participants to a trusted
                  global capital marketplace. Mesh makes it possible to Create,
                  Issue, Trade, and Own tokenized digital assets over their full
                  Lifecycle giving everyone access to grow their wealth.
                </p>
                <p className={"text-lg font-bold text-[#DE1B55]"}>
                  Twitter Account
                </p>
                <p
                  className={
                    "font-roboto text-lg font-normal  text-[#55517B] dark:text-white"
                  }
                >
                  @mesh_trade
                </p>
                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Official Email
                </p>
                <a
                  href="mailto:hello@mesh.trade"
                  className="cursor-pointer font-roboto text-lg font-normal text-[#55517B] hover:text-[#30B0B0] dark:text-white"
                >
                  hello@mesh.trade
                </a>
              </div>
            </Tab.Panel>
            <Tab.Panel>
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
                  "grid justify-items-center gap-2 px-4 tracking-wide md:grid-cols-1 lg:grid-cols-2 lg:justify-items-start"
                }
              >
                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Asset Code
                </p>
                <p
                  className={
                    "font-roboto text-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  mZAR
                </p>
                <p className={"text-center text-lg font-bold text-[#DE1B55]"}>
                  Issuer Address
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] lg:text-left dark:text-white"
                  }
                >
                  GCBNWTCCMC32UHZ5OC C2PNMFDGXRVPA7MFFBF FTCVW77SX5PMRB7Q4BY
                </p>

                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Friendly Name
                </p>
                <p
                  className={
                    "text-center font-robototext-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  ZAR Mesh
                </p>
                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] lg:text-left dark:text-white"
                  }
                >
                  mZAR is a fully collateralized South African ZAR stablecoin,
                  based on the open fiat stablecoin framework of Mesh. mZAR is
                  fully redeemable for ZAR held in an account managed by Mesh.
                </p>
                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Anchored Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  true
                </p>
                <p className={" text-lg font-bold text-[#DE1B55]"}>
                  Anchored Asset Type
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  fiat
                </p>
                <p className={"text-lg font-bold text-[#DE1B55]"}>
                  Anchor Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] dark:text-white"
                  }
                >
                  ZAR
                </p>
                <p className={"text-lg font-bold text-[#DE1B55]"}>
                  Redemption Instructions
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] lg:text-left dark:text-white"
                  }
                >
                  Redeemable through a Mesh account at{" "}
                  <a
                    className="tracking-wide text-[#30B0B0] underline decoration-2 underline-offset-2"
                    href="https://www.mesh.trade/"
                  >
                    mesh.trade
                  </a>
                </p>
                <p className={"text-lg font-bold text-[#DE1B55]"}>
                  Attestation_of_reserve
                </p>
                <a
                  className="text-lg font-normal tracking-wide text-[#30B0B0] underline decoration-2 underline-offset-2"
                  href="#"
                >
         
                  mzar.mesh.trade
                </a>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className={"absolute right-0 hidden w-80 xl:block xl:-mt-10"}>
        <Image src={right} alt="full-circle" />
      </div>
    </div>
  );
};

export default Metadata;
