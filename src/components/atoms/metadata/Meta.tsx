import React, { FC } from "react";
import Head from "next/head";
import { metadata } from "./metadata";
import thumbnailImage from "../../../../public/portfolioSite.jpg";

type Props = {
  title?: string;
  description?: string;
  imageSrc?: string;
};

const Meta: FC<Props> = ({ title, description, imageSrc }) => {
  const pageTitle = title ? `${metadata.title} | ${title}` : metadata.title;
  const pageDescription = description ? description : metadata.description;
  const pageImage = imageSrc ? imageSrc : thumbnailImage.src;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.siteurl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="description" content={pageDescription} />
    </Head>
  );
};

export default Meta;
