import React from "react";
import Image from "next/image";
import right from "../images/right-side.png";
import { AttestationOfReservesCircle } from "./attestation-of-reserves-circle";

export const Transparency = () => {
  return (
    <div id="transparency" className="py-20 lg:pt-32">
      <div className={"  px-8 "}>
        <h1
          className={
            "flex  justify-center pb-8 text-4xl font-bold tracking-wide text-primary lg:justify-center"
          }
        >
          Transparency
        </h1>
        <div className={"flex flex-wrap justify-center"}>
          <div className="w-[670px] items-center">
            <p
              className={
                " justify-center pt-4 text-center text-lg font-normal text-text "
              }
            >
              All Mesh assets are pegged at 1-to-1 with a matching fiat currency
              and are backed 100% by Mesh's reserves.
            </p>
            <p
              className={
                "justify-center pt-4 text-center  font-roboto text-lg font-normal text-text "
              }
            >
              The value of our reserves is updated and published at least once
              per month.
            </p>
          </div>
        </div>

        {/* Attestation of Reserves section */}
        <div>
          <div
            className={
              " flex justify-center py-8 font-light text-primary "
            }
          >
            <p>
              <strong className="text-xl font-bold">
                Attestation of Reserves
              </strong>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          <AttestationOfReservesCircle
            year={2022}
            month="April"
            href="assets/to-do-list.pdf"
          />

          <AttestationOfReservesCircle
            year={2022}
            month="March"
            href="assets/to-do-list.pdf"
          />
          <AttestationOfReservesCircle
            year={2022}
            month="February"
            href="assets/to-do-list.pdf"
          />
          <AttestationOfReservesCircle
            year={2022}
            month="January"
            href="assets/to-do-list.pdf"
          />
          <AttestationOfReservesCircle
            year={2021}
            month="December"
            href="assets/to-do-list.pdf"
          />
          <AttestationOfReservesCircle
            year={2021}
            month="November"
            href="assets/to-do-list.pdf"
          />
          <AttestationOfReservesCircle
            year={2021}
            month="October"
            href="assets/to-do-list.pdf"
          />
        </div>
      </div>
    </div>
  );
};
