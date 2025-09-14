import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this line 👇
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['res.cloudinary.com'], // Add your image host here
  },
  // other config options here
};

export default nextConfig;
