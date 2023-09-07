import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../store";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { humbargerToggle } = useStore();

  const routerStart = useCallback(() => {
    humbargerToggle(false);
  }, [humbargerToggle]);

  useEffect(() => {
    router.events.on("routeChangeStart", routerStart);

    return () => {
      router.events.off("routeChangeStart", routerStart);
    };
  }, [router.events, routerStart]);
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
