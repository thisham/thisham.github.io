import { clsx } from "@modules/utils/clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export default function MDXSmall({ children }: ComponentProps) {
  return (
    <small className={clsx("leading-6 mb-1 text-justify")}>{children}</small>
  );
}
