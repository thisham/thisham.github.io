import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@modules/styles/Home2.module.css";
import { BrandGithub, BrandTwitter, Home2, Search } from "tabler-icons-react";
import Link from "next/link";
import ProfileImage from "@modules/assets/profile.jpg";
import PageHeader from "@modules/components/PageHeader";
import PageMeta from "@modules/components/PageMeta";
import PageFooter from "@modules/components/PageFooter";

const inter = Inter({ subsets: ["latin"] });

type EntryItemProps = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export default function Home() {
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
          <BrandTwitter width={16} height={16} />
          <span className={inter.className}>Twiter</span>
        </Link>
        <Link
          href={"https://github.com/hamdanym"}
          className={styles.button_like}
        >
          <BrandGithub width={16} height={16} />
          <span className={inter.className}>Github</span>
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
      <PageMeta pageTitle="Kanjimashita" />

      <div className={styles.content}>
        <div className={styles.container}>
          <PageHeader />

          <main className={styles.main}>
            <ProfileSection />

            <div className={styles.entry_container}>
              <h2 className={inter.className}>Kakimono</h2>

              <EntryItem
                slug={"/test/lorem-ipsum"}
                title={"Lorem Ipsum Dolor sit Amet"}
                date={new Date("4/17/2023, 5:06:00 AM").toLocaleString()}
                summary={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis doloremque, ducimus eligendi repellat hic suscipit maxime reprehenderit voluptates molestiae sapiente numquam at modi veritatis aspernatur, laudantium praesentium necessitatibus veniam similique."
                }
              />

              <EntryItem
                slug={"/test/lorem-ipsum"}
                title={"Lorem Ipsum Dolor sit Amet"}
                date={new Date("4/17/2023, 5:06:00 AM").toLocaleString()}
                summary={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis doloremque, ducimus eligendi repellat hic suscipit maxime reprehenderit voluptates molestiae sapiente numquam at modi veritatis aspernatur, laudantium praesentium necessitatibus veniam similique."
                }
              />
            </div>
          </main>

          <PageFooter />
        </div>
      </div>
    </>
  );
}
