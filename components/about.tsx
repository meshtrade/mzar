import React from "react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import design from "../images/left-design.png";

export const About = () => {
  return (
    <div>
      <div className={"absolute left-0 w-3/4 py-8"}>
        <a href="/">
          <Image src={design} alt="left-design" />
        </a>
      </div>
      <div className={" h-auto px-8 pt-80"}>
        <h1
          className={"flex justify-center  text-5xl font-bold text-[#DE1B55]"}
        >
          About
        </h1>
        <div className={"flex justify-center py-6"}>
          <div className={" flex justify-center py-2 text-3xl  text-[#DE1B55]"}>
            What is
          </div>
          <div
            className={
              "flex justify-center py-2 px-2 text-3xl font-bold text-[#DE1B55]"
            }
          >
            mZAR?
          </div>
        </div>

        <p className={"py-2 pt-4 text-lg text-[#55517B]"}>
          We have created mZAR to bridge the gap between TradFi and DeFi, to
          bring the power of blockchain to ZAR.Creating a movement towards a
          more transparent and open financial market.
        </p>
        <p className={"py-4 text-lg text-[#55517B]"}>
          mZAR is a fully collaterized South African ZAR stablecoin, based on
          the open fiat stablecoin framework of Mesh. mZAR is fully reedemable
          for ZAR held in an account managed by Mesh.{" "}
          <p className={"py-4 text-lg font-bold"}>
            1 mZAR equals 1 ZAR. At all times
          </p>
        </p>
        <div className={"flex items-center justify-center py-4"}>
          <a href="/">
            <Image
              src={circle}
              alt="full-circle"
              width={"120px"}
              height={"120px"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
