import React from "react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import design from "../images/left-design.png";

export const About = () => {
  return (
    <div className={"grid lg:grid-cols-2  font-poppins"}>
      <div className={"inset-y-0 -left-12 mt-9 w-64"}>
        <Image src={design} className="" alt="Mesh-loop" />
      </div>
      <div className={"px-8 lg:py-32 -mt-14"}>
        <h1
          className={
            "flex justify-center text-[35px] font-bold text-[#DE1B55] lg:justify-start tracking-wide "
          }
        >
          About
        </h1>
        <div className={"flex justify-center lg:justify-start"}>
          <div className={" flex justify-center py-7 font-[300] text-[22px] text-[#DE1B55]"}>
            What is <strong className="pl-1 text-[22px]">mZAR?</strong>
          </div>
         
        </div>

        <p className={"py-2 pt-4 text-[18px] text-[#55517B] font-roboto font-[300]"}>
          We have created mZAR to bridge the gap between TradFi and DeFi, to
          bring the power of blockchain to ZAR. Creating a movement towards a
          more transparent and open financial market.
        </p>
        <p className={"py-2 pt-4 text-[18px] text-[#55517B] font-roboto font-[300]"}>
          mZAR is a fully collaterized South African ZAR stablecoin, based on
          the open fiat stablecoin framework of Mesh. mZAR is fully reedemable
          for ZAR held in an account managed by Mesh.{" "}
          <h2 className={"py-4 text-[18px] font-[600] font-poppins"}>
            1 mZAR equals 1 ZAR. At all times
          </h2>
        </p>
        <div className={"flex items-center justify-center py-8"}>
          <a href="/">
            <Image
              src={circle}
              alt="full-circle"
              width={"200px"}
              height={"200px"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
