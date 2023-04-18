import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXSmall({ children }: ComponentProps) {
  return (
    <small
      className={inter.className}
      style={{ lineHeight: 1.5, marginBottom: 4, textAlign: "justify" }}
    >
      {children}
    </small>
  );
}
