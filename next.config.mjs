import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  experimental: {
    scrollRestoration: false,
  },
};

export default withPlaiceholder(nextConfig);
