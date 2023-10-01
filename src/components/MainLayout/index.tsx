import { PropsWithChildren } from "react";
import styles from "./style.module.css";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import { clsx } from "@modules/utils/clsx";

export default function MainLayout({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={clsx(
        "relative",
        "text-gray-950 dark:text-gray-50",
        "bg-slate-50 dark:bg-slate-950"
      )}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 h-screen w-full",
          "background-grid background-grid--fade-out"
        )}
      ></div>

      <div className={clsx("w-full min-h-screen", "flex flex-col")}>
        <PageHeader />

        <main
          className={clsx(
            "w-full mb-auto flex-1 flex flex-col",
            className ?? ""
          )}
        >
          {children}
        </main>

        <PageFooter />
      </div>
    </div>
  );
}
