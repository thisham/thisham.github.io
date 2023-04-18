import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXUnordinaryList({ children }: ComponentProps) {
  return (
    <ul
      className={inter.className}
      style={{
        lineHeight: 2,
        marginBottom: 4,
        textAlign: "justify",
        marginLeft: 32,
      }}
    >
      {children}
    </ul>
  );
}
