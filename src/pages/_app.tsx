import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import useStore from "../store";
import { AnimatePresence } from "framer-motion";
import Opening from "../components/atoms/opening/Opening";

export default function App({ Component, pageProps, router }: AppProps) {
  const { humbargerToggle } = useStore();
  const humbargerClose = useCallback(() => {
    humbargerToggle(false);
  }, [humbargerToggle]);

  useEffect(() => {
    router.events.on("beforeHistoryChange", humbargerClose);
    return () => {
      router.events.off("beforeHistoryChange", humbargerClose);
    };
  }, [router.events, humbargerClose]);
  return (
    <>
      <Opening />
      <Layout>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          <title>LeafField</title>
        </Head>
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}
