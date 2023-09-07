import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>LeafField</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
