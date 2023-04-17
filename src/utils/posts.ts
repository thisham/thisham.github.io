import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

const root = path.join(process.cwd(), "src", "posts");

export type PostMeta = {
  slug: string;
  data: {
    [key: string]: any;
  };
  content: string;
  excerpt?: string | undefined;
  language: string;
  matter: string;
  stringify(lang: string): string;
};

export function getPostMeta(slug: string): PostMeta {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(root, `${realSlug}.mdx`);
  const content = readFileSync(filePath, { encoding: "utf-8" });
  const data = matter(content);
  const { orig: _, ...dataWithoutOrig } = data;

  return { ...dataWithoutOrig, slug: realSlug };
}

export function getAllPostMeta() {
  const slugs = readdirSync(root);
  return slugs.map((slug) => getPostMeta(slug));
}
