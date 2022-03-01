import React from "react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import design from "../images/left-design.png";

export const About = () => {
  return (
    <div id="about" className={"my-32 pb-20"}>
      <div
        className={
          "  -ml-10 w-60 animate-blob pt-12 sm:w-[390px]  sm:pt-20 md:w-[380px] lg:absolute  lg:w-[500px] lg:pt-44 2xl:w-[550px]  4xl:w-[700px] 5xl:w-[800px] "
        }
      >
        <Image src={design} className="" alt="Mesh-loop" />
      </div>
      <div
        className={
          "2xl:py-30 -mt-32  px-8 md:-mt-36  md:px-20 lg:px-0 lg:py-32 xl:py-40 "
        }
      >
        <h1
          className={
            "flex  justify-center py-8 pb-4 text-4xl font-bold tracking-wide text-primary lg:justify-center"
          }
        >
          About
        </h1>

        <div className={"flex justify-center lg:justify-center"}>
          <div
            className={
              " flex justify-center pb-8 text-2xl font-light text-primary   lg:justify-center"
            }
          >
            <p>
              What is
              <strong className="pl-2 text-2xl font-bold">mZAR</strong>?
            </p>
          </div>
        </div>

        <div className={"grid lg:grid-cols-4"}>
          <div></div>
          <div></div>
          <div className={"col-span-2 lg:pr-32"}>
            <p
              className={
                "flex py-2 pt-4 font-roboto  text-lg font-normal text-text "
              }
            >
              We have created mZAR to bridge the gap between TradFi and DeFi, to
              bring the power of blockchain to ZAR. Creating a movement towards
              a more transparent and open financial market.
            </p>
            <p
              className={"py-2 pt-4 font-roboto text-lg font-normal text-text "}
            >
              mZAR is a fully collaterized South African ZAR stablecoin, based
              on the open fiat stablecoin framework of Mesh. mZAR is fully
              reedemable for ZAR held in an account managed by Mesh.
              <h2 className={"py-4 font-poppins text-lg font-semibold"}>
                1 mZAR equals 1 ZAR. At all times
              </h2>
            </p>
          </div>
        </div>
        <div
          className={
            "visible flex animate-blob items-center justify-center py-8 md:flex lg:hidden "
          }
        >
          <Image
            src={circle}
            alt="full-circle"
            width={"200px"}
            height={"200px"}
          />
        </div>
      </div>
    </div>
  );
};
