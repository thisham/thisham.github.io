import styles from "@modules/styles/Home2.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <p className={inter.className}>
        &copy; 2021 - {new Date().getFullYear()} by Hamdan
      </p>
    </footer>
  );
}
