import { Inter } from "next/font/google";
import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type ComponentProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const inter = Inter({ subsets: ["latin"] });

export default function MDXLink(props: ComponentProps) {
  if (!props.href) {
    return <span>{props.children}</span>;
  }

  return (
    <Link href={props.href} className={inter.className}>
      {props.children}
    </Link>
  );
}
