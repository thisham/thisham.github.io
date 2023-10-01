import { MDXProvider } from "@mdx-js/react";
import MDXCustomComponents from "@modules/components/MDXCustomComponents";
import MainLayout from "@modules/components/MainLayout";
import "@modules/styles/globals.css";
import { clsx } from "@modules/utils/clsx";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const selectionFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getLayout(
  page: ReactElement,
  component: NextPageWithLayout
): ReactNode {
  if (component.getLayout) return component.getLayout(page);

  return <MainLayout className={selectionFont.className}>{page}</MainLayout>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <MDXProvider components={MDXCustomComponents}>
      {getLayout(<Component {...pageProps} />, Component)}
    </MDXProvider>
  );
}
