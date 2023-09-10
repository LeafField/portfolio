import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../lib/client";
import PageTop from "../../components/atoms/page-top/PageTop";
import CardLine from "../../components/portfolio-page/CardLine";
import { EndPoints } from "../../../types/cms-types";
import { blurGenerator } from "../../lib/blurGenerator";
import { motion } from "framer-motion";
import Meta from "../../components/atoms/metadata/Meta";

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
    console.error(err.message);
    console.log("portfolioページのエラー");
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PortfolioPage: NextPage<Props> = ({ posts }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Meta title="ポートフォリオ一覧" />
      <PageTop title="Portfolio" />
      <CardLine posts={posts} />
    </motion.div>
  );
};

export default PortfolioPage;
