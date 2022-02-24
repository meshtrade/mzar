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

        <div className="absolute top-full -translate-x-[32%] -translate-y-[90%]  scale-[4.8] sm:-translate-x-1 sm:-translate-y-[80%] sm:scale-[3]  md:translate-x-10 md:-translate-y-[85%] md:scale-[2] lg:scale-[1.7] lg:translate-x-8 lg:-translate-y-[90%]">
          <Image
            src={Creative}
            alt={"Mesh mZAR token icon"}
            className={"rotate-14 "}
            priority
            // width={400}
            // height={100}
          ></Image>
        </div>
      </div>

      <div className="grid gap-8 px-8 -mt-2 tracking-wide">
        <div>
          <h1
            className={
              " text-center font-poppins text-3xl font-bold text-white"
            }
          >
            <a href="https://mesh.trade">Meet mZAR.</a>
          </h1>
          <p className="text-center text-[20px] font-[300] text-white">
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
          <p className="text-md z-50 text-center font-[300] text-gray-300/70">
            Individuals, institutions, wallets, exchanges, crypto hodlrs, and
            market makers can now access the speed, transparency, and trust of
            mZAR. Everyone is invited.
          </p>
        </div>
        <div id="buy-mzar" className="grid pt-12 place-content-center">
          <button className="grid h-12  place-content-center rounded-md bg-[#30B0B0] px-10 font-poppins text-white shadow-xl">
            Buy mZAR NOW
          </button>
        </div>
      </div>
    </div>
  );
};
