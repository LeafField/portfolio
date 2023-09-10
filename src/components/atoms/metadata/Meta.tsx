import React, { FC } from "react";
import Head from "next/head";
import { metadata } from "./metadata";
import thumbnailImage from "../../../../public/portfolioSite.jpeg";

type Props = {
  title?: string;
};

const Meta: FC<Props> = ({ title }) => {
  const pageTitle = title ? `${metadata.title} | ${title}` : metadata.title;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={metadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${metadata.siteurl}/`} />
      <meta
        property="og:image"
        content={`${metadata.siteurl}${thumbnailImage.src}`}
      />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="description" content={metadata.description} />
    </Head>
  );
};

export default Meta;
