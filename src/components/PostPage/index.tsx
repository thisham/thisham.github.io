import { PropsWithChildren } from "react";
import PageMeta from "../PageMeta";
import { PostMeta } from "@modules/utils/posts";
import { Inter } from "next/font/google";

type TPostHeading = {
  title: string;
  date: string;
  lang: "ID" | "EN" | "JP";
  author: string;
};

type PostHeadingProps = TPostHeading;

const inter = Inter({ subsets: ["latin"] });

export default function PostPage(
  props: PropsWithChildren<{ front: TPostHeading }>
) {
  const PostHeading = (p: PostHeadingProps) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 24,
        marginBottom: 36,
      }}
    >
      <h1 className={inter.className} style={{ marginBottom: 12 }}>
        {p.title}
      </h1>
      <span className={inter.className}>
        {new Date(p.date).toLocaleString()} | {p.author}
      </span>
    </div>
  );

  return (
    <>
      <PageMeta pageTitle={props.front.title} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <PostHeading {...props.front} />
        <>{props.children}</>
      </div>
    </>
  );
}
