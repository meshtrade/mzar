import React from "react";
import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";

export const Hero = () => {
  return (
    <div className="grid h-screen px-10 md:px-20 place-content-center font-poppins lg:grid-cols-4">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden -z-10">
        <div className="absolute top-0 h-screen mesh-gradient -left-36 w-overflow"></div>

        {/* FEATURE BACKGROUND IMAGE */}

        <div className="absolute top-full -translate-x-[35%] -translate-y-[100%]  scale-[4.9] sm:-translate-x-1 sm:-translate-y-[80%] sm:scale-[3]  md:translate-x-10 md:-translate-y-[85%] md:scale-[2] lg:translate-x-2 lg:-translate-y-[98%] lg:scale-[1.8] xl:translate-x-8 xl:-translate-y-[88%] xl:scale-[1.6] 2xl:scale-[1.5]">
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

      {/* HERO BANNER CONTENT */}

      <div className="grid gap-8 -mt-24 tracking-wide lg:-mt-32 md:gap-10 font-poppins lg:col-span-2 lg:justify-items-start lg:ml-20">
        <div>
          <h1
            className={
              "  text-center text-4xl md:text-5xl font-semibold text-white lg:text-left"
            }
          >
            <a href="https://mesh.trade">Meet mZAR.</a>
          </h1>
          <p className="text-xl text-center text-white md:text-2xl lg:pr-10 lg:text-left">
            A stablecoin to bridge the gap between TradFi and Defi.
          </p>
        </div>
        <div className="grid place-content-center lg:hidden">
          <Image
            src={mZAR}
            alt={"Mesh mZAR token icon"}
            priority
            width={137}
            height={137}
          ></Image>
        </div>
        <div>
          <p className="z-50 text-center lg:hidden md:text-lg text-md text-gray-300/70 lg:text-left">
            Individuals, institutions, wallets, exchanges, crypto hodlrs, and
            market makers can now access the speed, transparency, and trust of
            mZAR. Everyone is invited.
          </p>
          <p className="z-50 text-center lg:block md:text-lg text-md text-gray-300/70 lg:text-left">
            Individuals, institutions, wallets, exchanges, crypto hodlrs, and
            market makers can now access the speed, transparency, and trust of
            mZAR. <br/><br/>Everyone is invited.
          </p>
        </div>
        <div id="buy-mzar" className="grid pt-5 lg:pt-0 place-content-center">
          <button className="grid h-12 px-10 place-content-center md:text-lg text-md rounded-md bg-[#30B0B0]  font-poppins text-white shadow-xl">
            Buy mZAR NOW
          </button>
        </div>
      </div>
      <div
        className={
          " hidden w-40	 justify-items-center lg:absolute  lg:top-[25%] lg:left-1/2  lg:grid lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform  "
        }
      >
        <div>
          <Image src={mZAR} alt={"Mesh mZAR token icon"} priority></Image>
        </div>
      </div>
      <div></div>
    </div>
  );
};
