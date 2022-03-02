import Image from "next/image";
import mZARLogo from "../images/mzar-logo.svg";
import Creative from "../images/mesh-creative.png";
import Link from "next/link";

export const Error = () => {
  return (
    <div className="grid w-full h-screen place-content-center font-poppins lg:grid-cols-4">
      <div className="absolute inset-0 w-full h-screen -z-10 ">
        <div className="grid h-full w-full  lg:grid-rows-[1fr_auto]">
          <div className="relative w-full overflow-hidden -z-10">
            <div className="absolute top-0 h-full mesh-gradient -left-36 w-overflow"></div>

            <div className="md:-translate-x-34 3xl:translate-x-30 absolute bottom-0 -translate-x-20 translate-y-8 scale-[4] sm:-translate-x-10 sm:translate-y-14 sm:scale-[3.3] md:translate-y-28  md:scale-[3] lg:translate-x-0 lg:translate-y-14 lg:scale-[1.5] xl:translate-x-0   xl:translate-y-20 2xl:translate-y-40  2xl:translate-x-36   3xl:translate-y-[5%] 4xl:translate-x-0 4xl:translate-y-40  4xl:scale-[1.4]  5xl:translate-x-24 5xl:translate-y-[20%]">
              <Image
                src={Creative}
                alt={"Mesh mZAR loop design"}
                className={"rotate-[-5deg]"}
                priority
                quality={50}
              ></Image>
            </div>
          </div>
          <div className="hidden w-full lg:block "></div>
        </div>
        <div className="w-full lg:hidden "></div>
      </div>

      <div className="grid w-full gap-8 px-10 tracking-wide font-poppins sm:px-24 md:px-20 lg:col-span-3 lg:mx-10">
        <div>
          <h1
            className={
              "  pb-4 text-center  text-4xl font-semibold text-white md:text-5xl lg:text-left xl:text-5xl 2xl:text-6xl"
            }
          >
            404 Page Not Found
          </h1>
          <p className="text-lg text-center text-white md:text-2xl lg:pr-10 lg:text-left">
            Sorry, we can’t seem to find the page you were looking for.
          </p>
        </div>
        <div>
          <p className="text-center text-md text-gray-300/70 md:text-lg lg:text-left">
            Please click here to go back

            <Link href="/">
                        <a
                          aria-label="home"
                          title="mZAR"
                          className="mx-2 font-semibold cursor-pointer text-secondary hover:underline"
                        >
                          Home
                        </a>
                      </Link>

            Or
            <a
              className="mx-2 font-semibold cursor-pointer text-secondary hover:underline"
              href="https://mesh.trade/"
            >
              Go to Mesh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
