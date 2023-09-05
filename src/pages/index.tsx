import { GetStaticProps, InferGetStaticPropsType } from "next";

import { client } from "../lib/client";

import Hero from "../components/top-page/hero/Hero";
import PortfolioSection from "../components/top-page/portfolio-section/PortfolioSection";
import Skills from "../components/top-page/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <PortfolioSection />
    </>
  );
}
