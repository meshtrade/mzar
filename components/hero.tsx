import React from "react";
import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";

export const Hero = () => {
  return (
    <div className="grid h-screen px-10 place-content-center font-poppins md:px-20 lg:grid-cols-4">
      <div className="absolute inset-0 w-screen h-screen overflow-hidden -z-10">
        <div className="absolute top-0 h-screen mesh-gradient -left-36 w-overflow"></div>

        {/* FEATURE BACKGROUND IMAGE */}

        <div className="absolute top-full -translate-x-[35%] -translate-y-[100%]  scale-[4.9] sm:-translate-x-1 sm:-translate-y-[80%] sm:scale-[3]  md:translate-x-10 md:-translate-y-[85%] md:scale-[2] lg:translate-x-2 lg:-translate-y-[98%] lg:scale-[1.8] xl:translate-x-8 xl:-translate-y-[88%] xl:scale-[1.6] 2xl:scale-[1.5] 3xl:scale-[1.4] 3xl:-translate-y-[80%] 4xl:scale-[1.3] 4xl:-translate-y-[75%] 4xl:translate-x-11 5xl:scale-[1.4] 5xl:translate-x-40 5xl:-translate-y-[75%]">
          <Image
            src={Creative}
            alt={"Mesh mZAR loop design"}
            className={"rotate-14 "}
            priority
            quality={20}
            // width={400}
            // height={100}
          ></Image>
        </div>
      </div>

      {/* HERO BANNER CONTENT */}

      <div className="grid gap-8 -mt-24 tracking-wide font-poppins md:gap-10 lg:col-span-2 lg:mx-20 lg:-mt-32 lg:justify-items-start">
        <div>
          <h1
            className={
              "  text-center text-3xl font-semibold text-white md:text-5xl lg:text-left"
            }
          >
            <a href="https://mesh.trade">Meet mZAR.</a>
          </h1>
          <p className="text-lg text-center text-white md:text-2xl lg:pr-10 lg:text-left">
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
          <p className="text-center text-md text-gray-300/70 md:text-lg lg:hidden lg:text-left">
            Individuals, institutions, wallets, exchanges, crypto hodlrs, and
            market makers can now access the speed, transparency, and trust of
            mZAR. Everyone is invited.
          </p>
          <p className="hidden text-center text-md text-gray-300/70 md:text-lg lg:block lg:text-left">
            Individuals, institutions, wallets, exchanges, crypto hodlrs, and
            market makers can now access the speed, transparency, and trust of
            mZAR. <br />
            <br />
            Everyone is invited.
          </p>
        </div>
        <div id="buy-mzar" className="grid pt-5 place-content-center lg:pt-0">
          <button className="text-md grid h-12 place-content-center rounded-md bg-[#30B0B0] hover:bg-[#2CA0A0] px-10 font-poppins  text-white shadow-xl md:text-lg">
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
