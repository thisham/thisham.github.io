import { clsx } from "@modules/utils/clsx";
import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXOrdinaryList({ children }: ComponentProps) {
  return (
    <ol className={clsx("leading-8 mb-4 text-justify ml-8")}>{children}</ol>
  );
}
