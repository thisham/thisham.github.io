import { Inter } from "next/font/google";
import Link from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { ExternalLink } from "tabler-icons-react";

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
    <Link
      href={props.href}
      className={inter.className}
      style={{
        backgroundColor: "#2c2c2c",
        display: "inline-flex",
        columnGap: "4px",
        paddingLeft: "8px",
        paddingRight: "8px",
        width: "fit-content",
        alignItems: "center",
      }}
    >
      {props.children}
      <ExternalLink width={16} height={16} />
    </Link>
  );
}
