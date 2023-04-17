import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXHeading2({ children }: ComponentProps) {
  return (
    <h2 className={inter.className} style={{ lineHeight: 1.5, marginTop: 16 }}>
      {children}
    </h2>
  );
}
