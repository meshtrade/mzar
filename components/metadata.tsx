import React from "react";
import {Tab} from "@headlessui/react";
import Image from "next/image";
import right from "../images/right-side.png";
import mZAR from "../images/mZAR-coin.png";
import {Currency, OrgDocumentation, StellarTOML} from "../lib/stellar";

export interface MetaDataProps {
  orgDocumentation?: OrgDocumentation,
  currency?: Currency,
  issuerAddress?: string,
}

export const Metadata = (props: MetaDataProps) => {
  return (
    <div id="asset-metadata" className={"mb-20  grid px-4 lg:grid-cols-4"}>
      <div className={""}></div>
      <div className={"lg:w-[600px]"}>
        <div className={"lg:py-8"}>
          <div
            className={
              " pb-8 text-center font-poppins text-3xl  text-[#DE1B55]"
            }
          >
            <h2>
              Asset<strong className="pl-2">Metadata</strong>
            </h2>
          </div>
        </div>
        <Tab.Group>
          <Tab.List
            className={
              "mx-6 flex  flex-wrap justify-between border-b  border-[#DE1B55] py-2 "
            }
          >
            <Tab
              className={({selected}) =>
                selected
                  ? " font-poppins  text-[14px] font-[500] tracking-wide text-[#DE1B55] underline decoration-2 underline-offset-[4px] focus:outline-none md:underline-offset-[11px]"
                  : " font-poppins text-[14px] font-[500] tracking-wide text-[#55517B] text-opacity-30 "
              }
            >
              ORGANIZATION METADATA
            </Tab>
            <Tab
              className={({selected}) =>
                selected
                  ? " font-poppins  text-[14px] font-[500] tracking-wide text-[#DE1B55] underline decoration-2 underline-offset-[4px] md:underline-offset-[11px]"
                  : " font-poppins text-[14px] font-[500] tracking-wide text-[#55517B] text-opacity-30"
              }
            >
              CURRENCY
            </Tab>
          </Tab.List>
          <Tab.Panels>
            {/* Organisation MetaData */}
            <Tab.Panel>
              <div className={"flex items-center justify-center py-8"}>
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
                  "grid justify-items-center gap-2 px-4 tracking-wide md:grid-cols-1 lg:grid-cols-2 lg:justify-items-start"
                }
              >
                <h2 className={"text-xl  font-bold text-[#DE1B55]"}>
                  Organisation Name
                </h2>
                <p
                  className={
                    "font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.orgDocumentation?.ORG_NAME ?? "-"}
                </p>

                <p className={"text-xl font-bold text-[#DE1B55]"}>Website</p>
                <p
                  className={
                    "font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.orgDocumentation?.ORG_URL ?? "-"}
                </p>

                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px]  font-[300] text-[#55517B] lg:text-left"
                  }
                >
                  {props.orgDocumentation?.ORG_DESCRIPTION ?? "-"}
                </p>
                <p className={"text-xl font-bold text-[#DE1B55]"}>
                  Twitter Account
                </p>
                <p
                  className={
                    "font-roboto text-[18px] font-[300]  text-[#55517B]"
                  }
                >
                  {props.orgDocumentation?.ORG_TWITTER ?? "-"}
                </p>
                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Official Email
                </p>
                <a
                  href="mailto:hello@mesh.trade"
                  className="cursor-pointer font-roboto font-[300] text-[#55517B] hover:text-[#30B0B0]"
                >
                  {props.orgDocumentation?.ORG_OFFICIAL_EMAIL ?? "-"}
                </a>
              </div>
            </Tab.Panel>
            {/* Currency */}
            <Tab.Panel className={""}>
              <div className={"flex items-center justify-center  py-8"}>
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
                  "grid justify-items-center gap-2 px-4 tracking-wide md:grid-cols-1 lg:grid-cols-2 lg:justify-items-start"
                }
              >
                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Asset Code
                </p>
                <p
                  className={
                    "font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.currency?.code ?? "-"}
                </p>
                <p className={"text-center text-xl font-bold text-[#DE1B55]"}>
                  Issuer Address
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B] lg:text-left"
                  }
                >
                  {props.issuerAddress ?? "-"}
                </p>

                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Friendly Name
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.currency?.name ?? "-"}
                </p>
                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Description
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B] lg:text-left"
                  }
                >
                  {props.currency?.desc ?? "-"}
                </p>
                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Anchored Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.currency?.is_asset_anchored.toString().toUpperCase() ?? "-"}
                </p>
                <p className={" text-xl font-bold text-[#DE1B55]"}>
                  Anchored Asset Type
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.currency?.anchor_asset_type.toUpperCase() ?? "-"}
                </p>
                <p className={"text-xl font-bold text-[#DE1B55]"}>
                  Anchor Asset
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B]"
                  }
                >
                  {props.currency?.anchor_asset ?? "-"}
                </p>
                <p className={"text-xl font-bold text-[#DE1B55]"}>
                  Redemption Instructions
                </p>
                <p
                  className={
                    "text-center font-roboto text-[18px] font-[300] text-[#55517B] lg:text-left"
                  }
                >
                  {props.currency?.redemption_instructions ?? "-"}
                </p>
                <p className={"text-xl font-bold text-[#DE1B55]"}>
                  Attestation_of_reserve
                </p>
                <a
                  className="text-[18px] font-[300] tracking-wide text-[#30B0B0] underline decoration-2 underline-offset-2"
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

      <div className={"absolute right-0 hidden xl:block"}>
        <Image src={right} alt="full-circle" width={"400px"} height={"600px"}/>
      </div>
    </div>
  );
};

export default Metadata;
