import { PropsWithChildren } from "react";
import PageMeta from "../PageMeta";
import styles from "@modules/styles/Home2.module.css";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <PageHeader />

          <main className={styles.main}>{children}</main>

          <PageFooter />
        </div>
      </div>
    </>
  );
}
