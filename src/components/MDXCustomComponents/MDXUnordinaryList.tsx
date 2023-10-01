import { clsx } from "@modules/utils/clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export default function MDXUnordinaryList({ children }: ComponentProps) {
  return (
    <ul className={clsx("leading-8 mb-4 text-justify ml-8 list-disc")}>
      {children}
    </ul>
  );
}
