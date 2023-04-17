import { MDXProvider } from "@mdx-js/react";
import MDXCustomComponents from "@modules/components/MDXCustomComponents";
import MainLayout from "@modules/components/MainLayout";
import "@modules/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getLayout(
  page: ReactElement,
  component: NextPageWithLayout
): ReactNode {
  if (component.getLayout) return component.getLayout(page);

  return <MainLayout>{page}</MainLayout>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <MDXProvider components={MDXCustomComponents}>
      {getLayout(<Component {...pageProps} />, Component)}
    </MDXProvider>
  );
}
