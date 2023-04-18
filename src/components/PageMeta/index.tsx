import Head from "next/head";

export type MetaProps = {
  title: string;
  description: string;
};

export default function PageMeta(props: MetaProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
