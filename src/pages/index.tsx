import { InferGetStaticPropsType, NextPage } from "next";
import { getPlaiceholder } from "plaiceholder";

import { client } from "../lib/client";

import Hero from "../components/top-page/hero/Hero";
import PortfolioSection from "../components/top-page/portfolio-section/PortfolioSection";
import Skills from "../components/top-page/skills/Skills";

import { EndPoints } from "../../types/cms-types";
import { blurGenerator } from "../lib/blurGenerator";

import { motion } from "framer-motion";

export const getStaticProps = async () => {
  try {
    const res = await client.get<EndPoints["gets"]["portfolio"]>({
      endpoint: "portfolio",
    });
    const posts = await blurGenerator(res.contents);

    return {
      props: {
        posts,
      },
    };
  } catch (err: any) {
    console.error(err);
    console.log("トップページのエラー");
    throw new Error(err.message);
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Skills />
      <PortfolioSection posts={posts} />
    </motion.div>
  );
};

export default Home;
