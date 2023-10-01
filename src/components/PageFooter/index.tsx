import { clsx } from "@modules/utils/clsx";
import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className={clsx("h-12", "flex items-center justify-center")}>
      <p>
        &copy; 2021 - {new Date().getFullYear()} by{" "}
        <Link
          href={"/"}
          className={clsx("bg-gray-200 dark:bg-gray-800 px-2 py-0.5")}
        >
          Hamdan
        </Link>
      </p>
    </footer>
  );
}
