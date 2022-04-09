import React from "react";
import Image from "next/image";
import right from "../images/right-side.png";

export const Transparency = () => {
  return (
    <div id="transparency">
      <div
        className={"2xl:py-30 -mt-32  px-8   lg:px-0 lg:py-36 xl:py-40 "}
      >
        <h1
          className={
            "flex  justify-center py-8 pb-4 text-4xl font-bold tracking-wide text-primary lg:justify-center"
          }
        >
          Transparency
        </h1>
        <div className={"flex flex-wrap justify-center"}>
          <div className="w-[670px] items-center">
            <p
              className={
                " justify-center pt-4 text-center text-lg font-normal text-text "
              }
            >
              All Mesh assets are pegged at 1-to-1 with a matching fiat currency
              and are backed 100% by Mesh's reserves.
            </p>
            <p
              className={
                "justify-center pt-4 text-center  font-roboto text-lg font-normal text-text "
              }
            >
              The value of our reserves is updated and pubished at least once
              per month.
            </p>
          </div>
        </div>

        {/* Attestation of Reserves section */}
        <div>
          <div
            className={
              " flex justify-center pt-10 pb-2 font-light text-primary "
            }
          >
            <p>
              <strong className="text-xl font-bold">
                Attestation of Reserves
              </strong>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center my-5 ">
         
          <div className="grid content-center w-24 h-24 m-2 text-xl text-center text-white align-middle rounded-full align-t font-extrab old mesh-circle-gradient">
            <p>
              <strong>2022</strong>
            </p>
            <p className="text-sm uppercase">October</p>
          </div>
          <div className="grid content-center w-24 h-24 m-2 text-xl text-center text-white align-middle rounded-full align-t font-extrab old mesh-circle-gradient">
            <p>
              <strong>2022</strong>
            </p>
            <p className="text-sm uppercase">October</p>
          </div>
          <div className="grid content-center w-24 h-24 m-2 text-xl text-center text-white align-middle rounded-full align-t font-extrab old mesh-circle-gradient">
            <p>
              <strong>2022</strong>
            </p>
            <p className="text-sm uppercase">October</p>
          </div>
          <div className="content-center hidden w-24 h-24 m-2 text-xl text-center text-white align-middle rounded-full md:grid align-t font-extrab old mesh-circle-gradient">
            <p>
              <strong>2022</strong>
            </p>
            <p className="text-sm uppercase">October</p>
          </div>
          <div className="content-center hidden w-24 h-24 m-2 text-xl text-center text-white align-middle rounded-full lg:grid align-t font-extrab old mesh-circle-gradient">
            <p>
              <strong>2022</strong>
            </p>
            <p className="text-sm uppercase">October</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center text-xs text-text">
          <p>Download reports here.</p>
        </div>
      </div>
    </div>
  );
};
