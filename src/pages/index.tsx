import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  Icon,
  Mail,
} from "tabler-icons-react";
import Link from "next/link";
import PageMeta from "@modules/components/PageMeta";
import { PostMeta, getAllPostMeta } from "@modules/utils/posts";
import { clsx } from "@modules/utils/clsx";

type EntryItemProps = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

type HomeProps = { posts: PostMeta[] };

export default function Home({ posts }: HomeProps) {
  const ProfileLink = (p: { icon: Icon; href: string }) => (
    <Link
      href={p.href}
      className={clsx(
        "p-2 rounded-md basic-transition",
        "hover:bg-slate-400/20 active:bg-slate-300",
        "dark:hover:bg-slate-600/20 dark:active:bg-slate-700/70",
        "stroke-gray-950 dark:stroke-gray-50"
      )}
    >
      <p.icon className={clsx("h-6 w-6")} />
    </Link>
  );

  const ProfileSection = () => (
    <div
      className={clsx(
        "relative flex flex-col",
        "w-full pt-48 md:pt-56 lg:pt-56"
      )}
    >
      <div className={clsx("flex flex-col justify-center", "p-4")}>
        <span className={clsx("text-lg md:text-3xl")}>Hoi! Ik ben</span>
        <h1 className={"text-[3rem] md:text-[6rem] -mt-2 mb-2 md:mb-0"}>
          hamdan.
        </h1>
        <p className={clsx("text-base md:text-xl")}>
          Een frontend engineer die tevreden in de backend.
        </p>
      </div>

      <div className={clsx("flex flex-col lg:flex-row gap-4 px-4")}>
        <Link
          href={
            "https://docs.google.com/document/d/1e2qa0QdOyXO633zWwXn9AXyPyeHTzW9Ps_1LXseCxZg"
          }
          className={clsx(
            "h-10 px-4 rounded-md font-semibold basic-transition whitespace-nowrap w-fit",
            "flex items-center",
            "bg-indigo-500 text-gray-50 hover:bg-indigo-400 active:bg-indigo-600",
            "dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:active:bg-indigo-800"
          )}
          rel={"noopener noreferrer"}
          target={"_blank"}
        >
          {"Mijn Resume"}
        </Link>

        <div className={clsx("flex gap-2")}>
          <ProfileLink
            href={"https://twitter.com/hnswid"}
            icon={BrandTwitter}
          />
          <ProfileLink href={"https://github.com/thisham"} icon={BrandGithub} />
          <ProfileLink
            href={"https://linkedin.com/in/hamdanymwijaya"}
            icon={BrandLinkedin}
          />
          <ProfileLink href={"mailto:hamdanym.wijaya@gmail.com"} icon={Mail} />
        </div>
      </div>
    </div>
  );

  const EntryItem = (p: EntryItemProps) => (
    <div
      className={clsx(
        "flex flex-col",
        "border rounded-md py-2 px-4",
        "border-gray-300 dark:border-gray-800"
      )}
    >
      <Link href={p.slug} className={clsx("font-semibold text-lg")}>
        {p.title}
      </Link>
      <small className={clsx("text-xs lg:text-sm mb-4")}>
        {new Intl.DateTimeFormat(["nl"], {
          dateStyle: "full",
          timeStyle: "long",
        }).format(new Date(p.date))}
      </small>
      <div>{p.summary}</div>
    </div>
  );

  const EmptyItem = () => <p className={clsx("italic")}>No Content.</p>;

  return (
    <>
      <PageMeta
        title={"Hamdan YM. Wijaya - FS Enjinier"}
        description={
          "A platform of an FS enjinier, who willing to share his projects, toughts and biscuits."
        }
      />

      <section
        className={clsx(
          "flex flex-col justify-center",
          "h-fit w-full px-8 md:px-24 lg:px-36",
          "relative z-0 opacity-100"
        )}
      >
        <ProfileSection />
      </section>

      {/* <section
        className={clsx("min-h-[40rem] w-full px-8 py-8 md:px-24 lg:px-36")}
      >
        <h3 className={clsx("text-2xl mb-8")}>Mijn Posten</h3>
        {posts.length ? (
          posts.map((post, index) => (
            <EntryItem
              key={index}
              slug={`/blogs/${post.slug}`}
              title={post.data["title"]}
              date={post.data["date"]}
              summary={`${post.content.substring(0, 160)}...`}
            />
          ))
        ) : (
          <EmptyItem />
        )}
      </section> */}
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostMeta();

  return { props: { posts } };
}
