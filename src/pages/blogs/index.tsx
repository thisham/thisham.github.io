import PageMeta from "@modules/components/PageMeta";
import { clsx } from "@modules/utils/clsx";
import { PostMeta, getAllPostMeta } from "@modules/utils/posts";
import Link from "next/link";

type EntryItemProps = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  readingSeconds: number;
};

type HomeProps = { posts: PostMeta[] };

export default function BlogList({ posts }: HomeProps): JSX.Element {
  const EntryItem = (p: EntryItemProps) => (
    <Link
      href={p.slug}
      className={clsx(
        "flex flex-col",
        "hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150",
        "border rounded-md py-2 px-4",
        "hover:bg-gray-50/30 dark:hover:bg-gray-700/50 active:bg-gray-50/70 active:dark:bg-gray-700/70",
        "border-gray-300 dark:border-gray-800"
      )}
    >
      <div className={clsx("font-semibold text-lg")}>{p.title}</div>
      <small className={clsx("text-xs lg:text-sm mb-4")}>
        {new Intl.DateTimeFormat(["nl"], {
          dateStyle: "short",
          timeStyle: "short",
        }).format(new Date(p.date))}{" "}
        &sdot; {Math.floor(p.readingSeconds / 60)} min{" "}
        {Math.floor(p.readingSeconds % 60)} seconds read
      </small>
      <div>{p.summary}</div>
    </Link>
  );

  const EmptyItem = () => <p className={clsx("italic")}>No Content.</p>;

  return (
    <>
      <PageMeta
        title={"Mijn Posten"}
        description={
          "A platform of an FS enjinier, who willing to share his projects, toughts and biscuits."
        }
      />

      <section
        className={clsx(
          "min-h-[40rem] w-full px-8 pb-8 pt-16 md:px-24 lg:px-36"
        )}
      >
        <h3 className={clsx("text-2xl mb-8")}>Mijn Posten</h3>

        <div className={clsx("flex flex-col gap-4")}>
          {posts.length ? (
            posts.map((post, index) => (
              <EntryItem
                key={index}
                slug={`/blogs/${post.slug}`}
                title={post.data["title"]}
                date={post.data["date"]}
                summary={`${post.content.substring(0, 160)}...`}
                readingSeconds={(post.content.split(" ").length / 183) * 60}
              />
            ))
          ) : (
            <EmptyItem />
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostMeta();

  return { props: { posts } };
}
