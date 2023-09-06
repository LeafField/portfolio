import React from "react";
import { InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../lib/client";
import PageTop from "../../components/atoms/page-top/PageTop";
import CardLine from "../../components/portfolio-page/CardLine";
import { EndPoints } from "../../../types/cms-types";
import { blurGenerator } from "../../lib/blurGenerator";

export const getStaticProps = async () => {
  const res = await client.get<EndPoints["gets"]["portfolio"]>({
    endpoint: "portfolio",
  });
  const posts = await blurGenerator(res.contents);

  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PortfolioPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <PageTop title="Portfolio" />
      <CardLine posts={posts} />
    </>
  );
};

export default PortfolioPage;
