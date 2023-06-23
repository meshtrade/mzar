import React from "react";
import Image from "next/image";
import right from "../images/right-side.png";
import { AttestationOfReservesCircle } from "./attestation-of-reserves-circle";

export const Transparency = () => {
  return (
    <div id="transparency" className="py-20 lg:pt-40 lg:pb-20">
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
              and are backed 100% by Mesh&apos;s reserves.
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
          <div className={" flex justify-center py-8 font-light text-primary "}>
            <p>
              <strong className="text-xl font-bold">
                Attestation of Reserves
              </strong>
            </p>
          </div>
        </div>

        {/* Attestation Reports PDFS */}
        <div className="flex flex-wrap items-center justify-center gap-4 ">

        <AttestationOfReservesCircle
            year={2023}
            month="May"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-may-23.pdf"
          />
        <AttestationOfReservesCircle
            year={2023}
            month="April"
            href="assets/mesh-trade-south-africa-reserve-acc-report-30-apr-23.pdf"
          />
     
      <AttestationOfReservesCircle
            year={2023}
            month="March"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-mar-23.pdf"
          />
      <AttestationOfReservesCircle
            year={2023}
            month="February"
            href="assets/mesh-trade-south-africa-reserve-acc-report-28-feb-23.pdf"
          />

        <AttestationOfReservesCircle
            year={2023}
            month="January"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-jan-23.pdf"
          />


        <AttestationOfReservesCircle
            year={2022}
            month="December"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-dec-22.pdf"
          />

        <AttestationOfReservesCircle
            year={2022}
            month="November"
            href="assets/mesh-trade-south-africa-reserve-acc-report-30-nov-22.pdf"
          />

        <AttestationOfReservesCircle
            year={2022}
            month="October"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-oct-22.pdf"
          />

        <AttestationOfReservesCircle
            year={2022}
            month="September"
            href="assets/mesh-trade-south-africa-reserve-acc-report-30-sep-22.pdf"
          />

        <AttestationOfReservesCircle
            year={2022}
            month="August"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-aug-22.pdf"
          />

        <AttestationOfReservesCircle
            year={2022}
            month="July"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-july-22.pdf"
          />

          <AttestationOfReservesCircle
            year={2022}
            month="June"
            href="assets/mesh-trade-south-africa-reserve-acc-report-30-june-22.pdf"
          />

          <AttestationOfReservesCircle
            year={2022}
            month="May"
            href="assets/mesh-trade-south-africa-reserve-acc-report-31-may-22.pdf"
          />
        </div>
      </div>
    </div>
  );
};
