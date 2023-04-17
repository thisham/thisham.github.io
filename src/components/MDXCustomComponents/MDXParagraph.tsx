import { Inter } from "next/font/google";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type ComponentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXParagraph({ children }: ComponentProps) {
  return (
    <p className={inter.className} style={{ lineHeight: 2, marginBottom: 4 }}>
      {children}
    </p>
  );
}
