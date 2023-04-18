import styles from "@modules/styles/Home2.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <p className={inter.className}>
        &copy; 2021 - {new Date().getFullYear()} by{" "}
        <Link
          href={"/"}
          style={{
            backgroundColor: "#2c2c2c",
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Hamdan YM. Wijaya
        </Link>
      </p>
    </footer>
  );
}
