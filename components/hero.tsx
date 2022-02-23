import React from "react";
import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";


export const Hero = () => {
  return (
    <div className="grid h-screen -mt-10 place-content-center font-poppins">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden -z-10">
        <div className="absolute top-0 h-screen mesh-gradient -left-36 w-overflow"></div>
  
       {/* FEATURE BACKGROUND IMAGE */}
       
        <div className="absolute scale-150 -rotate-180 translate-x-1/2 -translate-y-1/2 top-full">
          <Image
            src={Creative}
            alt={"Mesh mZAR token icon"}
            className={"rotate-12 "}
            priority
            // width={400}
            // height={100}
          ></Image>
        </div>
      </div>

      <div className="grid gap-8 px-8 tracking-wide ">
        <div>
          <h1
            className={
              " text-center font-poppins text-3xl font-bold text-white"
            }
          >
            <a href="https://mesh.trade">Meet mZAR.</a>
          </h1>
          <p className="text-[20px] font-[300] text-center text-white">
            A stablecoin to bridge the gap between TradFi and Defi.
          </p>
        </div>
        <div className="grid place-content-center ">
          <Image
            src={mZAR}
            alt={"Mesh mZAR token icon"}
            priority
            width={137}
            height={137}
          ></Image>
        </div>
        <div>
          <p className="z-50 text-center text-md text-gray-300/70 font-[300]">
            Individuals, institutions, wallets, exchanges, crypto hodlrs, and
            market makers can now access the speed, transparency, and trust of
            mZAR. Everyone is invited.
          </p>
        </div>
        <div className="grid pt-12 place-content-center">
          <button className="grid h-12  place-content-center rounded-md bg-[#30B0B0] px-10 font-poppins text-white shadow-xl">
            Buy mZAR NOW
          </button>
        </div>
      </div>

    </div>

  );
};
