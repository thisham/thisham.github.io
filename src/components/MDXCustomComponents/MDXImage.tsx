import { clsx } from "@modules/utils/clsx";
import { Inter } from "next/font/google";
import Image, { ImageProps } from "next/image";
import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";

type ComponentProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  height?: number;
  width?: number;
};

const inter = Inter({ subsets: ["latin"] });

export default function MDXImage(props: ComponentProps) {
  return (
    <div
      className={clsx(
        "w-full min-h-fit mb-4",
        "flex flex-col items-center gap-2"
      )}
    >
      <div className={clsx("w-[80%] relative object-contain")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.src ?? ""}
          alt={props.alt ?? ""}
          style={{ width: props.width ?? "100%" }}
        />
      </div>
      <small className={clsx("text-sm")}>{props.alt}</small>
    </div>
  );
}
