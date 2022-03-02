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
        "mb-24 -mt-44 flex items-center justify-center px-10 sm:px-4 md:-mt-48 lg:-mt-56 lg:px-0 xl:-mt-60 2xl:-mt-64"
      }
    >
      <div></div>
      <div className={"lg:w-[600px]"}>
        <div className={"md:py-10 lg:py-8"}>
          <div
            className={
              " pb-8 text-center font-poppins  text-4xl text-primary  lg:pb-0"
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
              " flex  flex-wrap justify-between border-b border-primary  py-2 font-medium mx-0 sm:mx-40 md:mx-56 lg:mx-36  "
            }
          >
            <Tab
              className={({ selected }) =>
                selected
                  ? " font-poppins  text-sm font-medium tracking-wide text-primary underline decoration-2 underline-offset-[11px] focus:outline-none "
                  : " font-poppins text-sm font-medium tracking-wide text-text text-opacity-30 "
              }
            >
              ORGANIZATION METADATA
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? " font-poppins  text-sm font-medium tracking-wide text-primary underline decoration-2 underline-offset-[11px] focus:outline-none "
                  : " font-poppins text-sm font-medium tracking-wide text-text text-opacity-30"
              }
            >
              CURRENCY
            </Tab>
          </Tab.List>

          <div
            className={
              "absolute right-0 hidden w-80 animate-blob xl:-mt-10 xl:block"
            }
          >
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
                  "grid justify-items-center  gap-2 px-4 tracking-wide md:px-20 lg:grid-cols-2 lg:justify-items-start lg:px-10"
                }
              >
                <h2
                  className={
                    "text-right  text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Organisation Name
                </h2>
                <p className={"font-roboto text-lg  font-normal text-text"}>
                  {props.orgDocumentation?.ORG_NAME ?? "-"}
                </p>

                <p
                  className={
                    "text-right  text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Website
                </p>
                <p className={"font-roboto text-lg font-normal text-text"}>
                  {props.orgDocumentation?.ORG_URL ?? "-"}
                </p>

                <p
                  className={
                    " text-right  text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg  font-normal text-text  lg:text-left"
                  }
                >
                  {props.orgDocumentation?.ORG_DESCRIPTION ?? "-"}
                </p>
                <p
                  className={
                    "text-right  text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Twitter Account
                </p>
                <p
                  className={
                    "cursor-pointer font-roboto text-lg font-normal  text-secondary"
                  }
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:underline"
                    href={`https://mobile.twitter.com/${props.orgDocumentation?.ORG_TWITTER}`}
                  >
                    {props.orgDocumentation?.ORG_TWITTER ?? "-"}
                  </a>
                </p>
                <p
                  className={
                    " text-right text-lg  font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Official Email
                </p>
                <a
                  href={`mailto:${
                    props.orgDocumentation?.ORG_OFFICIAL_EMAIL ??
                    "hello@mesh.trade"
                  }`}
                  className={"text-lg text-secondary  hover:underline"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.orgDocumentation?.ORG_OFFICIAL_EMAIL ??
                    "hello@mesh.trade"}
                </a>
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
                  "grid justify-items-center gap-2 px-4 tracking-wide md:grid-cols-1 md:px-20 lg:grid-cols-2 lg:justify-items-start lg:px-10"
                }
              >
                <p
                  className={
                    " text-right  text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Asset Code
                </p>
                <p className={"font-roboto text-lg font-normal text-text "}>
                  {props.currency?.code ?? "-"}
                </p>
                <p
                  className={
                    "flex-wrap text-center text-lg font-bold text-primary lg:w-full lg:pr-4 lg:text-right "
                  }
                >
                  Issuer Address
                </p>
                <p
                  className={
                    " break-all text-center font-roboto text-lg font-normal text-text hover:text-secondary lg:text-left"
                  }
                >
                  <a
                    href={`https://stellar.expert/explorer/public/account/${props.issuerAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    {props.issuerAddress ?? "-"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-5 h-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </p>

                <p
                  className={
                    " text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Friendly Name
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-text "
                  }
                >
                  {props.currency?.name ?? "-"}
                </p>
                <p
                  className={
                    " text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-text lg:text-left"
                  }
                >
                  {props.currency?.desc ?? "-"}
                </p>
                <p
                  className={
                    " text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Anchored Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-text "
                  }
                >
                  {props.currency?.is_asset_anchored.toString().toUpperCase() ??
                    "-"}
                </p>
                <p
                  className={
                    " text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Anchored Asset Type
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-text "
                  }
                >
                  {props.currency?.anchor_asset_type.toUpperCase() ?? "-"}
                </p>
                <p
                  className={
                    "text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Anchor Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-text "
                  }
                >
                  {props.currency?.anchor_asset ?? "-"}
                </p>
                <p
                  className={
                    "text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Redemption Instructions
                </p>
                <p
                  className={
                    "text-center font-roboto text-lg font-normal text-text lg:text-left"
                  }
                >
                  {props.currency?.redemption_instructions ?? "-"}
                </p>
                <p
                  className={
                    "text-right text-lg font-bold text-primary lg:w-full lg:pr-4"
                  }
                >
                  Attestation_of_reserve
                </p>
                <a
                  className="text-lg font-normal tracking-wide text-center text-secondary decoration-2 underline-offset-2 hover:underline md:text-left"
                  href={props.currency?.attestation_of_reserve ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
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
