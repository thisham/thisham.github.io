import MDXCustomComponents from "@modules/components/MDXCustomComponents";
import PostPage from "@modules/components/PostPage";
import { PostMeta, getAllPostMeta, getPostMeta } from "@modules/utils/posts";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths } from "next";
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
      <MDXRemote {...props.source} components={MDXCustomComponents} />
    </PostPage>
  );
}

type TStaticPaths = {
  paths: { params: { slug: string } }[];
  fallback: boolean;
};

export async function getStaticProps({ params }: TStaticPaths["paths"][0]) {
  const post = getPostMeta(String(params.slug));
  const source = await serialize(post.content);

  return { props: { post, source } };
}

export async function getStaticPaths() {
  const posts = getAllPostMeta();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
