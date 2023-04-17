import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXHeading1({ children }: ComponentProps) {
  return (
    <h1 className={inter.className} style={{ lineHeight: 1.5, marginTop: 20 }}>
      {children}
    </h1>
  );
}
