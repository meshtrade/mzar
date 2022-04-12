import cx from "classnames";
import { useRef } from "react";
import { useHover } from "usehooks-ts";

interface Props {
  year: number;
  month: string;
  href: string;
}

export const AttestationOfReservesCircle = (props: Props) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <a
      href={props.href}
      target={"_blank"}
      ref={hoverRef}
      className={"relative"}
    >

      <div
        className={cx(
          "mesh-circle-gradient absolute -z-10 m-2 h-24 w-24 rounded-full duration-200",
          { "scale-125": isHover }
        )}
      ></div>

      <div className="grid content-center w-24 h-24 m-2 text-xl text-center text-white align-middle rounded-full ">
        <p>
          <strong>{props.year}</strong>
        </p>
        <p className="text-sm uppercase ">{props.month}</p>
      </div>
    </a>
  );
};
