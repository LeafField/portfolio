import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { humbargerToggle } = useStore();

  const routerStart = () => {
    humbargerToggle(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", routerStart);

    return () => {
      router.events.off("routeChangeStart", routerStart);
    };
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
