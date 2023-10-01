import { clsx } from "@modules/utils/clsx";
import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXHeading2({ children }: ComponentProps) {
  return (
    <h2 className={clsx("leading-6 font-semibold text-lg")}>{children}</h2>
  );
}
