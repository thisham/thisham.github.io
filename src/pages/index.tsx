import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@modules/styles/Home2.module.css";
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  Mail,
} from "tabler-icons-react";
import Link from "next/link";
import ProfileImage from "@modules/assets/profile.jpg";
import PageMeta from "@modules/components/PageMeta";
import { PostMeta, getAllPostMeta } from "@modules/utils/posts";

const inter = Inter({ subsets: ["latin"] });

type EntryItemProps = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

type HomeProps = { posts: PostMeta[] };

export default function Home({ posts }: HomeProps) {
  const ProfileSection = () => (
    <div className={styles.profile_container}>
      <Image
        src={ProfileImage}
        alt={"Profile Picture"}
        className={styles.profile_picture}
      />
      <h1 className={inter.className}>Hamdan YM. Wijaya</h1>
      <p className={inter.className}>Web Developer, nyambi jadi mobdev.</p>

      <div className={styles.actions_container}>
        <Link
          href={"https://twitter.com/hamdanym_"}
          className={styles.button_like}
        >
          <BrandTwitter className={styles.button_like_icon} />
        </Link>
        <Link
          href={"https://github.com/thisham"}
          className={styles.button_like}
        >
          <BrandGithub className={styles.button_like_icon} />
        </Link>
        <Link
          href={"https://linkedin.com/in/hamdanymwijaya"}
          className={styles.button_like}
        >
          <BrandLinkedin className={styles.button_like_icon} />
        </Link>
        <Link
          href={"mailto:hamdanym.wijaya@gmail.com"}
          className={styles.button_like}
        >
          <Mail className={styles.button_like_icon} />
        </Link>
      </div>
    </div>
  );

  const EntryItem = (p: EntryItemProps) => (
    <div className={styles.entry_item}>
      <Link href={p.slug}>
        <h3 className={inter.className}>{p.title}</h3>
      </Link>
      <small className={inter.className}>{p.date}</small>
      <p className={inter.className}>{p.summary}</p>
    </div>
  );

  const EmptyItem = () => <p className={inter.className}>No Content.</p>;

  return (
    <>
      <PageMeta
        title={"Hamdan YM. Wijaya - FS Enjinier"}
        description={
          "A platform of an FS enjinier, who willing to share his projects, toughts and biscuits."
        }
      />

      <div className={styles.main_content}>
        <ProfileSection />

        <div className={styles.entry_container}>
          <h2 className={inter.className}>Kakimono</h2>

          {posts.length ? (
            posts.map((post, index) => (
              <EntryItem
                key={index}
                slug={`/blogs/${post.slug}`}
                title={post.data["title"]}
                date={new Date(post.data["date"]).toLocaleString()}
                summary={`${post.content.substring(0, 160)} ...`}
              />
            ))
          ) : (
            <EmptyItem />
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPostMeta();

  return { props: { posts } };
}
