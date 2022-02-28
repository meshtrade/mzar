import React, { MutableRefObject } from "react";
import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";
import { TrustedBySection } from "./trusted-by-section";

export interface HeroProps {
  // ref: MutableRefObject<HTMLDivElement | null>;
}

export const Hero = (props: HeroProps) => {
  return (
    <div
      // ref={props.ref}
      className="grid w-full h-screen place-content-center font-poppins lg:grid-cols-4"
    >
      {/* BACKGROUND GRAPHICS + TRUSTED BY SECTION */}
      <div className="absolute inset-0 w-full h-screen -z-10 ">
        <div className="grid h-full w-full  lg:grid-rows-[1fr_auto]">
          <div className="relative w-full overflow-hidden bg-red-400 -z-10">
            {/* GRADIENT BACKGROUNDD */}
            <div className="absolute top-0 h-full mesh-gradient -left-36 w-overflow"></div>

            {/* FEATURE BACKGROUND IMAGE */}
            <div className="absolute bottom-0  -translate-x-20 translate-y-7 scale-[4] sm:-translate-x-1 sm:-translate-y-[80%] sm:scale-[3]  md:translate-x-10 md:-translate-y-[85%] md:scale-[2] lg:translate-x-2 lg:-translate-y-[98%] lg:scale-[1.8] xl:translate-x-8 xl:-translate-y-[88%] xl:scale-[1.6] 2xl:scale-[1.5] 3xl:-translate-y-[80%] 3xl:scale-[1.4] 4xl:-translate-y-[75%] 4xl:translate-x-11 4xl:scale-[1.3] 5xl:translate-x-40 5xl:-translate-y-0 5xl:scale-[1.4]">
              <Image
                src={Creative}
                alt={"Mesh mZAR loop design"}
                className={"rotate-14"}
                priority
                quality={50}
                // width={400}
                // height={100}
              ></Image>
            </div>
          </div>
          <div className="hidden w-full lg:block ">
            <TrustedBySection />
          </div>
        </div>
        <div className="w-full lg:hidden ">
          <TrustedBySection />
        </div>
      </div>

      {/* HERO BANNER CONTENT */}
      <div className="grid w-full gap-8 px-10 px-8tracking-wide md:gap- font-poppins lg:col-span-2 lg:mx-20 lg:justify-items-start">
        <div>
          <h1
            className={
              "  text-center text-3xl font-semibold text-white md:text-5xl lg:text-left"
            }
          >
            <a href="https://mesh.trade">Meet mZAR.</a>
          </h1>
          <p className="text-lg text-center text-white md:text-2xl lg:pr-10 lg:text-left">
            A stablecoin to bridge the gap between TradFi and DeFi.
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
        <div id="buy-mzar" className="grid place-content-center lg:pt-0">
          <button className="text-md grid h-12 place-content-center rounded-md bg-[#30B0B0] px-10 font-poppins text-white  shadow-xl hover:bg-[#2CA0A0] md:text-lg">
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
    </div>
  );
};
