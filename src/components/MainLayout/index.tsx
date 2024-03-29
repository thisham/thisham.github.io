import { PropsWithChildren, useEffect } from "react";
import styles from "./style.module.css";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import { clsx } from "@modules/utils/clsx";

export default function MainLayout({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector("#header-section");
    if (!header) return;
    const scrollTop = window.scrollY;
    scrollTop >= 24
      ? header.classList.add("glassmorph-header")
      : header.classList.remove("glassmorph-header");
  };

  return (
    <div
      className={clsx(
        "relative h-fit",
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

      <div className={clsx("relative w-full min-h-screen", "flex flex-col")}>
        <div className={clsx("w-full fixed z-20")} id={"header-section"}>
          <PageHeader />
        </div>

        <main className={clsx("mb-auto flex-1 flex flex-col", className ?? "")}>
          {children}
        </main>

        <PageFooter />
      </div>
    </div>
  );
}
