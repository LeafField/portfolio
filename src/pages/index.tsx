import { InferGetStaticPropsType, NextPage } from "next";
import { getPlaiceholder } from "plaiceholder";

import { client } from "../lib/client";

import Hero from "../components/top-page/hero/Hero";
import PortfolioSection from "../components/top-page/portfolio-section/PortfolioSection";
import Skills from "../components/top-page/skills/Skills";

import { EndPoints } from "../../types/cms-types";
import { blurGenerator } from "../lib/blurGenerator";

export const getStaticProps = async () => {
  try {
    const res = await client.get<EndPoints["gets"]["portfolio"]>({
      endpoint: "portfolio",
    });
    const posts = res.contents;
    await blurGenerator(posts);

    return {
      props: {
        posts,
      },
    };
  } catch (err: any) {
    console.error(err);
    throw new Error(err.message);
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Hero />
      <Skills />
      <PortfolioSection posts={posts} />
    </>
  );
};

export default Home;
