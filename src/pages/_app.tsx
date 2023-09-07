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

  const viewPortSettings = useCallback(() => {
    const ViewPort = document.body.offsetWidth;
    document.documentElement.style.setProperty("--vw", `${ViewPort / 100}px`);
  }, []);

  useEffect(() => {
    viewPortSettings();
    router.events.on("routeChangeStart", routerStart);
    window.addEventListener("resize", viewPortSettings);

    return () => {
      router.events.off("routeChangeStart", routerStart);
      window.removeEventListener("resize", viewPortSettings);
    };
  }, [router.events, routerStart, viewPortSettings]);
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
