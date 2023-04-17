import MDXCustomComponents from "@modules/components/MDXCustomComponents";
import PostPage from "@modules/components/PostPage";
import { PostMeta, getPostMeta } from "@modules/utils/posts";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { AppContext } from "next/app";
import { useRouter } from "next/router";
import path from "path";
import { useMemo } from "react";

type BlogPostProps = {
  post: {
    content: string;
    data: {
      title: string;
      lang: "ID" | "EN" | "JP";
      date: string;
      author: string;
    };
  };
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

export default function BlogPost(props: BlogPostProps) {
  return (
    <PostPage front={props.post.data}>
      {/* <div
        dangerouslySetInnerHTML={{ __html: marked(props.post.content) }}
      ></div> */}
      <MDXRemote {...props.source} components={MDXCustomComponents} />
    </PostPage>
  );
}

export async function getServerSideProps(ctx: any) {
  const post = getPostMeta(String(ctx.query.slug));
  const source = await serialize(post.content);

  return { props: { post, source } };
}
