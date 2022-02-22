import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import circle from "../images/full-circle.png";
//import { Fragment } from "react";

export const Metadata = () => {
  return (
    <div className={"h-auto py-10 "}>
      <h1
        className={"flex justify-center py-2 text-4xl font-bold text-[#DE1B55]"}
      >
        Asset Metadata
      </h1>

      <div className={"h-auto py-6"}>
        <Tab.Group>
          <Tab.List>
            <Tab className={"px-6"}>ORGANIZATION METADATA</Tab>
            <Tab>CURRENCY</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={"h-auto px-10"}>
              <div className={"flex items-center justify-center py-4"}>
                <a href="/">
                  <Image
                    src={circle}
                    alt="full-circle"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
              </div>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Organisation Name
              </p>
              <p className={"flex justify-center py-6"}>
                {" "}
                Mesh Trade South Africa (Pty) Ltd{" "}
              </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Website
              </p>
              <p className={"flex justify-center text-center "}>
                https://mzar.mesh.trade
              </p>

              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Description
              </p>
              <p className={"flex justify-center  text-center"}>
                Mesh is a multi-sided, cross- asset platform that provides
                universal, direct access for all participants to a trusted
                global capital marketplace. Mesh makes it possible to Create,
                Issue, Trade, and Own tokenized digital assets over their full
                Lifecycle giving everyone access to grow their wealth.
              </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Twitter Account
              </p>
              <p className={"flex justify-center  "}> @mesh_trade</p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Official Email
              </p>
              <p className={"flex justify-center  "}> hello@mesh.trade</p>
            </Tab.Panel>
            <Tab.Panel className={"h-auto px-10"}>
              <div className={"flex items-center justify-center py-4"}>
                <a href="/">
                  <Image
                    src={circle}
                    alt="full-circle"
                    width={"50px"}
                    height={"50px"}
                  />
                </a>
              </div>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Asset Code
              </p>
              <p className={"flex justify-center  "}> mZAR </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Issuer Address
              </p>
              <p className={"flex justify-center text-center "}>
                GCBNWTCCMC32UHZ5OC C2PNMFDGXRVPA7MFFBF FTCVW77SX5PMRB7Q4BY
              </p>

              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Friendly Name{" "}
              </p>
              <p className={"flex justify-center  "}>ZAR Mesh </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Description
              </p>
              <p className={"flex justify-center  text-center"}>
                mZAR is a fully collateralized South African ZAR stablecoin,
                based on the open fiat stablecoin framework of Mesh. mZAR is
                fully redeemable for ZAR held in an account managed by Mesh.
              </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Anchored Asset
              </p>
              <p className={"flex justify-center  "}> true </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Anchored Asset Type{" "}
              </p>
              <p className={"flex justify-center  "}> fiat</p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Anchor Asset{" "}
              </p>
              <p className={"flex justify-center  "}>ZAR </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Redemption Instructions
              </p>
              <p className={"flex justify-center text-center "}>
                {" "}
                Redeemable through a Mesh account at mesh.trade
              </p>
              <p
                className={
                  "flex justify-center  text-xl font-bold text-[#DE1B55]"
                }
              >
                Attestation_of_reserve
              </p>
              <p className={"flex justify-center  "}> mzar.mesh.trade </p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Metadata;
