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
      style={{
        width: "100%",
        height: "min-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          width: "80%",
          position: "relative",
          overflow: "scroll",
          objectFit: "contain",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.src ?? ""}
          alt={props.alt ?? ""}
          style={{ width: props.width ?? "100%" }}
        />
      </div>
      <small className={inter.className}>{props.alt}</small>
    </div>
  );
}
