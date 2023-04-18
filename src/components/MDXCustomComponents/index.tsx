import type { MDXComponents } from "mdx/types";
import MDXParagraph from "./MDXParagraph";
import MDXLink from "./MDXLink";
import MDXHeading1 from "./MDXHeading1";
import MDXHeading2 from "./MDXHeading2";
import MDXHeading3 from "./MDXHeading3";
import MDXImage from "./MDXImage";
import MDXSmall from "./MDXSmall";
import MDXUnordinaryList from "./MDXUnordinaryList";
import MDXOrdinaryList from "./MDXOrdinaryList";

const MDXCustomComponents: MDXComponents = {
  p: MDXParagraph,
  a: MDXLink,
  h1: MDXHeading1,
  h2: MDXHeading2,
  h3: MDXHeading3,
  small: MDXSmall,
  ul: MDXUnordinaryList,
  ol: MDXOrdinaryList,
  MDXImage,
};

export default MDXCustomComponents;
