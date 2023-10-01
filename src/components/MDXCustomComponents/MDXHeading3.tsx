import { clsx } from "@modules/utils/clsx";
import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXHeading3({ children }: ComponentProps) {
  return <h3 className={clsx("leading-6 font-semibold")}>{children}</h3>;
}
