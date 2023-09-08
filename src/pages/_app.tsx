import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>LeafField</title>
      </Head>
      <Component key={router.asPath} {...pageProps} />
    </Layout>
  );
}
