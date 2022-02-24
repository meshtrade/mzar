import React from "react";
import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";

export const Hero = () => {
  return (
    <div className="-mt-10 grid h-screen place-content-center font-poppins">
      <div className="absolute inset-0 -z-10 h-screen w-screen overflow-hidden">
        <div className="mesh-gradient absolute top-0 -left-36 h-screen w-overflow"></div>

        {/* FEATURE BACKGROUND IMAGE */}

        <div className="absolute top-full translate-x-1/2 -translate-y-1/2 -rotate-180 scale-150">
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
        <div id="buy-mzar" className="grid place-content-center pt-12">
          <button className="grid h-12  place-content-center rounded-md bg-[#30B0B0] px-10 font-poppins text-white shadow-xl">
            Buy mZAR NOW
          </button>
        </div>
      </div>
    </div>
  );
};
