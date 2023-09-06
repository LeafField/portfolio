import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

export default withPlaiceholder(nextConfig);
