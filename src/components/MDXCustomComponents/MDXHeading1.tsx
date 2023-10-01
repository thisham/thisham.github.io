import { clsx } from "@modules/utils/clsx";
import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export default function MDXHeading1({ children }: ComponentProps) {
  return <h1 className={clsx("leading-6 font-bold text-2xl")}>{children}</h1>;
}
