import type { MDXComponents } from "mdx/types";
import MDXParagraph from "./MDXParagraph";
import MDXLink from "./MDXLink";
import MDXHeading1 from "./MDXHeading1";
import MDXHeading2 from "./MDXHeading2";
import MDXHeading3 from "./MDXHeading3";

const MDXCustomComponents: MDXComponents = {
  p: MDXParagraph,
  a: MDXLink,
  h1: MDXHeading1,
  h2: MDXHeading2,
  h3: MDXHeading3,
};

export default MDXCustomComponents;
