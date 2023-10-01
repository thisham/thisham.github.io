import { clsx } from "@modules/utils/clsx";
import { JetBrains_Mono, Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { Search, SunHigh } from "tabler-icons-react";

const jbMono = JetBrains_Mono({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function PageHeader() {
  const { pathname } = useRouter();

  return (
    <header
      className={clsx(
        poppins.className,
        "flex justify-between items-center",
        "h-12 px-4 lg:px-16 z-10"
      )}
    >
      <div className={clsx("flex gap-8 items-center")}>
        <Link href={"/"}>
          <h3 className={jbMono.className}>{"_this"}</h3>
        </Link>

        <div className={clsx("flex items-center gap-2")}>
          <Link
            href={"/blogs"}
            className={clsx(
              "text-gray-950 dark:text-gray-50 bg-transparent",
              pathname.includes("blogs")
                ? "bg-indigo-400/70 dark:bg-indigo-600/60"
                : "",
              "text-sm rounded-md py-1 px-4"
            )}
          >
            Blogen
          </Link>
        </div>
      </div>
      {/* <div className={clsx("flex gap-4")}>
        <button type="button">
          <SunHigh width={24} height={24} />
        </button>
        <Link href={"/search"}>
          <Search width={24} height={24} />
        </Link>
      </div> */}
    </header>
  );
}
