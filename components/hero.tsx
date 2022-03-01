import Image from "next/image";
import mZAR from "../images/mZAR-coin.png";
import Creative from "../images/mesh-creative.png";
import { TrustedBySection } from "./trusted-by-section";

export const Hero = () => {
  return (
    <div className="grid w-full h-screen place-content-center font-poppins lg:grid-cols-4">
      <div className="absolute inset-0 w-full h-screen -z-10 ">
        <div className="grid h-full w-full  lg:grid-rows-[1fr_auto]">
          <div className="relative w-full overflow-hidden -z-10">
            <div className="absolute top-0 h-full mesh-gradient -left-36 w-overflow"></div>

            <div className="md:-translate-x-34 absolute bottom-0 -translate-x-14 translate-y-10 scale-[4] sm:-translate-x-10 sm:translate-y-14 sm:scale-[3.3] md:translate-y-28 md:scale-[3]  lg:translate-x-10 lg:translate-y-10 lg:scale-[1.7] xl:translate-x-10 xl:translate-y-32  xl:scale-[1.5] 2xl:translate-y-64 2xl:scale-[1.4] 3xl:translate-y-[27%]   3xl:translate-x-36 3xl:scale-[1.4] 4xl:translate-x-20  4xl:translate-y-[26%] 4xl:scale-[1.4] 5xl:translate-x-28 5xl:translate-y-[28%] 5xl:scale-[1.3]">
              <Image
                src={Creative}
                alt={"Mesh mZAR loop design"}
                className={"rotate-[-5deg]"}
                priority
                quality={50}
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

      <div className="grid w-full gap-8 px-10 mt-8 tracking-wide md:gap-18 font-poppins sm:px-24 md:mt-0 md:px-28 lg:col-span-2 lg:mx-0 lg:-mt-20 lg:justify-items-start lg:px-20 xl:px-32">
        <div>
          <h1
            className={
              "  text-center text-3xl font-semibold text-white md:text-4xl xl:text-5xl lg:text-left 2xl:text-6xl"
            }
          >
            Meet mZAR.
          </h1>
          <p className="text-lg text-center text-white md:text-xl lg:pr-10 lg:text-left">
            A stablecoin to bridge the gap between TradFi and DeFi.
          </p>
        </div>
        <div className="grid place-content-center lg:hidden">
          <Image
            src={mZAR}
            alt={"Mesh mZAR token icon"}
            priority
            width={130}
            height={130}
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
        <div id="buy-mzar" className="grid pt-4 place-content-center lg:pt-0">
          <button className="text-md grid h-12 cursor-pointer place-content-center rounded-md bg-secondary px-10 font-poppins text-white  shadow-xl hover:bg-[#2CA0A0] md:text-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.mesh.trade/sign-up"
            >
              Buy mZAR NOW
            </a>
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
