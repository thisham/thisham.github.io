import MDXCustomComponents from "@modules/components/MDXCustomComponents";
import PostPage from "@modules/components/PostPage";
import { clsx } from "@modules/utils/clsx";
import { getAllPostMeta, getPostMeta } from "@modules/utils/posts";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type BlogPostProps = {
  post: {
    content: string;
    data: {
      title: string;
      lang: "ID" | "EN" | "JP";
      date: string;
      author: string;
      description: string;
    };
  };
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
};

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className={clsx("mt-8")}>
      <PostPage
        front={{
          ...props.post.data,
          readingSeconds: Math.ceil(
            (props.post.content.split(" ").length / 183) * 60
          ),
        }}
      >
        <MDXRemote {...props.source} components={MDXCustomComponents} />
      </PostPage>
    </div>
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
