import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import right from "../images/right-side.png";
import mZAR from "../images/mZAR-coin.png";
import { Currency, OrgDocumentation } from "../lib/stellar";

export interface MetaDataProps {
  orgDocumentation?: OrgDocumentation;
  currency?: Currency;
  issuerAddress?: string;
}

export const Metadata = (props: MetaDataProps) => {
  return (
    <div
      id="asset-metadata"
      className={
        "2xl:-mt-40 mb-24 -mt-44 md:-mt-48 flex items-center justify-center px-10 sm:px-4 lg:-mt-56 lg:px-0 xl:-mt-60 "
      }
    >
      <div></div>
      <div className={"lg:w-[600px]"}>
        <div className={"md:py-10 lg:py-8"}>
          <div
            className={
              " pb-8 text-center font-poppins  text-4xl text-[#DE1B55]  lg:pb-0"
            }
          >
            <h2 className="text-2xl font-light">
              Asset<strong className="pl-2 font-bold">Metadata</strong>
            </h2>
          </div>
        </div>
        <Tab.Group>
          <Tab.List
            className={
              " flex  flex-wrap justify-between border-b border-[#DE1B55]  py-2 font-medium sm:mx-40 md:mx-64 lg:mx-32 2xl:mx-28 "
            }
          >
            <Tab
              className={({ selected }) =>
                selected
                  ? " font-poppins  text-sm  tracking-wide text-[#DE1B55] underline decoration-2 underline-offset-[11px] focus:outline-none "
                  : " font-poppins text-sm font-medium tracking-wide text-[#55517B] text-opacity-30 dark:text-[#707070] dark:text-opacity-40"
              }
            >
              ORGANIZATION METADATA
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? " font-poppins  text-sm  tracking-wide text-[#DE1B55] underline decoration-2 underline-offset-[11px] focus:outline-none "
                  : " font-poppins text-sm font-medium tracking-wide text-[#55517B] text-opacity-30 dark:text-[#707070] dark:text-opacity-40"
              }
            >
              CURRENCY
            </Tab>
          </Tab.List>

      <div className={"absolute right-0 hidden w-80 xl:-mt-10 xl:block animate-blob"}>
        <Image src={right} alt="full-circle" />
      </div>
          <Tab.Panels>
            {/* Organisation MetaData */}
            <Tab.Panel>
              <div
                className={
                  "flex items-center justify-center py-8 px-10  md:pt-12"
                }
              >
                <Image
                  src={mZAR}
                  alt={"Mesh mZAR token icon"}
                  priority
                  width={70}
                  height={70}
                />
              </div>
              <div
                className={
                  "grid justify-items-center  gap-2 px-4 md:px-20 lg:px-10 tracking-wide lg:grid-cols-2 lg:justify-items-start"
                }
              >
                <h2 className={"text-lg  lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Organisation Name
                </h2>
                <p className={"font-roboto text-lg  font-normal text-[#55517B]"}>
                  {props.orgDocumentation?.ORG_NAME ?? "-"}
                </p>

                <p className={"text-lg  lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>Website</p>
                <p className={"font-roboto text-lg font-normal text-[#55517B]"}>
                  {props.orgDocumentation?.ORG_URL ?? "-"}
                </p>

                <p className={" text-lg  lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg  font-normal text-[#55517B]  lg:text-left"
                  }
                >
                  {props.orgDocumentation?.ORG_DESCRIPTION ?? "-"}
                </p>
                <p className={"text-lg cursor-pointer  lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Twitter Account
                </p>
                <p
                  className={"font-roboto text-lg font-normal  text-[#30B0B0]"}
                >
                  {props.orgDocumentation?.ORG_TWITTER ?? "-"}
                </p>
                <p className={" text-lg font-bold  lg:w-full lg:pr-4 text-right text-[#DE1B55]"}>
                  Official Email
                </p>
                <a
                  href={`mailto:${props.orgDocumentation?.ORG_OFFICIAL_EMAIL ?? "hello@mesh.trade"}`}
                  className="cursor-pointer font-roboto  text-lg  font-normal  text-[#30B0B0] hover:text-[#30B0B0]"
                  target="_blank"
                >{props.orgDocumentation?.ORG_OFFICIAL_EMAIL ?? "hello@mesh.trade"}</a>
              </div>
            </Tab.Panel>
            {/* Currency */}
            <Tab.Panel>
              <div
                className={
                  "flex items-center justify-center py-8 px-10 md:pt-12  "
                }
              >
                <Image
                  src={mZAR}
                  alt={"Mesh mZAR token icon"}
                  priority
                  width={70}
                  height={70}
                />
              </div>
              <div
                className={
                  "grid justify-items-center gap-2 px-4 md:px-20 lg:px-10 tracking-wide md:grid-cols-1 lg:grid-cols-2 lg:justify-items-start"
                }
              >
                <p className={" text-lg  lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Asset Code
                </p>
                <p
                  className={"font-roboto text-lg font-normal text-[#55517B] "}
                >
                  {props.currency?.code ?? "-"}
                </p>
                <p
                  className={
                    "flex-wrap text-center lg:w-full lg:pr-4 text-right text-lg font-bold text-[#DE1B55] "
                  }
                >
                  Issuer Address
                </p>
                <p
                  className={
                    "break-all text-center  font-roboto text-lg font-normal text-[#55517B] lg:text-left"
                  }
                >
                  {props.issuerAddress ?? "-"}
                </p>

                <p className={" text-lg lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Friendly Name
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] "
                  }
                >
                  {props.currency?.name ?? "-"}
                </p>
                <p className={" text-lg lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] lg:text-left"
                  }
                >
                  {props.currency?.desc ?? "-"}
                </p>
                <p className={" text-lg lg:w-full lg:pr-4 text-right font-bold text-[#DE1B55]"}>
                  Anchored Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] "
                  }
                >
                  {props.currency?.is_asset_anchored.toString().toUpperCase() ??
                    "-"}
                </p>
                <p className={" text-lg font-bold lg:w-full lg:pr-4 text-right text-[#DE1B55]"}>
                  Anchored Asset Type
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] "
                  }
                >
                  {props.currency?.anchor_asset_type.toUpperCase() ?? "-"}
                </p>
                <p className={"text-lg font-bold lg:w-full lg:pr-4 text-right text-[#DE1B55]"}>
                  Anchor Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] "
                  }
                >
                  {props.currency?.anchor_asset ?? "-"}
                </p>
                <p className={"text-lg font-bold lg:w-full lg:pr-4 text-right text-[#DE1B55]"}>
                  Redemption Instructions
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-[#55517B] lg:text-left"
                  }
                >
                  {props.currency?.redemption_instructions ?? "-"}
                </p>
                <p className={"text-lg font-bold lg:w-full lg:pr-4 text-right text-[#DE1B55]"}>
                  Attestation_of_reserve
                </p>
                <a
                  className="text-lg font-normal tracking-wide text-center md:text-left text-[#30B0B0] underline decoration-2 underline-offset-2"
                  href={props.currency?.attestation_of_reserve ?? "#"}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  {props.currency?.attestation_of_reserve ?? "-"}
                </a>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

    </div>
  );
};

export default Metadata;
