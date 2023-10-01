import { PropsWithChildren } from "react";
import PageMeta from "../PageMeta";
import { Inter } from "next/font/google";
import Image from "next/image";
import ProfileImage from "@modules/assets/profile.jpg";
import { clsx } from "@modules/utils/clsx";

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
    <div className={clsx("flex flex-col mt-8 mb-4")}>
      <h1 className={clsx("text-2xl font-semibold mb-4")}>{p.title}</h1>

      <div className={clsx("flex gap-4 items-center")}>
        <Image
          src={ProfileImage}
          alt={"Profile Picture"}
          width={40}
          height={40}
          className={"rounded-full object-cover object-center aspect-square"}
        />

        <div className={clsx("flex flex-col gap-1")}>
          <span className={clsx("text-sm")}>{p.author}</span>
          <span className={clsx("text-sm")}>
            {new Intl.DateTimeFormat(["nl"], {
              dateStyle: "short",
              timeStyle: "short",
            }).format(new Date(p.date))}{" "}
            &sdot; {Math.floor(p.readingSeconds / 60)} min{" "}
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
        className={clsx(
          "flex flex-col gap-4 mb-12 z-10 px-8",
          "md:px-24 lg:px-36"
        )}
      >
        <PostHeading {...props.front} />
        <>{props.children}</>
      </div>
    </>
  );
}
