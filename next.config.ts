import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], // Add Google host
  },
};

export default nextConfig;
