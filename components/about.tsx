import React from "react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import design from "../images/left-design.png";

export const About = () => {
  return (
    <div id="about" className={"py-10 pb-20"}>
      {/* <div
        className={
          " inset-y-0 -left-12 mt-9 w-64 md:w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[50%]"
        }
      >
        <Image src={design} className="" alt="Mesh-loop" />
      </div> */}
      <div
        className={
          " -left-12 w-64 md:w-[400px]  lg:absolute lg:w-[500px] lg:py-32  xl:w-[550px] 2xl:absolute  2xl:w-[40%]"
        }
      >
        <Image src={design} className="" alt="Mesh-loop" />
      </div>
      <div
        className={
          "2xl:py-30 -mt-20  px-8 md:-mt-28  md:px-20 lg:px-0 lg:py-32 xl:py-40 "
        }
      >
        <h1
          className={
            "flex  justify-center py-8 pb-4 text-4xl font-bold tracking-wide text-[#DE1B55] lg:justify-center"
          }
        >
          About
        </h1>

        <div className={"flex justify-center lg:justify-center"}>
          <div
            className={
              " flex justify-center pb-8 text-2xl font-light text-[#DE1B55]   lg:justify-center"
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
          <div className={""}></div>
          <div className={"col-span-2"}>
            <p
              className={
                "flex py-2 pt-4 font-roboto text-lg font-normal text-[#55517B]  md:pr-8 lg:pr-32  "
              }
            >
              We have created mZAR to bridge the gap between TradFi and DeFi, to
              bring the power of blockchain to ZAR. Creating a movement towards
              a more transparent and open financial market.
            </p>
            <p
              className={
                "py-2 pt-4 font-roboto text-lg font-normal text-[#55517B] lg:pr-32"
              }
            >
              mZAR is a fully collaterized South African ZAR stablecoin, based
              on the open fiat stablecoin framework of Mesh. mZAR is fully
              reedemable for ZAR held in an account managed by Mesh.{" "}
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
