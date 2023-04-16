import styles from "@modules/styles/Home2.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Home2, Search } from "tabler-icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Home2 width={24} height={24} />
      </Link>
      <h3 className={inter.className}>{"_this"}</h3>
      <Link href={"/search"}>
        <Search width={24} height={24} />
      </Link>
    </header>
  );
}
