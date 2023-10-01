import { clsx } from "@modules/utils/clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default function MDXParagraph({ children }: ComponentProps) {
  return <p className={clsx("leading-8 mb-4 text-justify")}>{children}</p>;
}
