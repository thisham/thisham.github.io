import { clsx } from "@modules/utils/clsx";
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
      className={clsx(
        "bg-gray-400/40 dark:bg-gray-600/30",
        "inline-flex gap-1 px-2 w-fit items-center"
      )}
    >
      {props.children}
      <ExternalLink width={16} height={16} />
    </Link>
  );
}
