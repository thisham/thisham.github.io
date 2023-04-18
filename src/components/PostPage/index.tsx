import { PropsWithChildren } from "react";
import PageMeta from "../PageMeta";
import { Inter } from "next/font/google";
import Image from "next/image";
import ProfileImage from "@modules/assets/profile.jpg";

type TPostHeading = {
  title: string;
  description: string;
  date: string;
  lang: "ID" | "EN" | "JP";
  author: string;
  readingSeconds: number;
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
      <h1 className={inter.className} style={{ marginBottom: 24 }}>
        {p.title}
      </h1>

      <div style={{ display: "flex", columnGap: 16, alignItems: "center" }}>
        <Image
          src={ProfileImage}
          alt={"Profile Picture"}
          width={40}
          height={40}
          style={{ borderRadius: "100%" }}
        />

        <div style={{ display: "flex", flexDirection: "column", rowGap: 4 }}>
          <span className={inter.className} style={{ fontSize: "small" }}>
            {p.author}
          </span>
          <span className={inter.className} style={{ fontSize: "small" }}>
            {new Date(p.date).toLocaleString()} &sdot;{" "}
            {Math.floor(p.readingSeconds / 60)} min{" "}
            {Math.floor(p.readingSeconds % 60)} seconds read
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <PageMeta
        title={props.front.title}
        description={props.front.description}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 36,
        }}
      >
        <PostHeading {...props.front} />
        <>{props.children}</>
      </div>
    </>
  );
}
