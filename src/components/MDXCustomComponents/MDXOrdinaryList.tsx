import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXOrdinaryList({ children }: ComponentProps) {
  return (
    <ol
      className={inter.className}
      style={{
        lineHeight: 2,
        marginBottom: 4,
        textAlign: "justify",
        marginLeft: 32,
      }}
    >
      {children}
    </ol>
  );
}
