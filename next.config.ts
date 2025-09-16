import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], // Add Google host
  },
};

module.exports = {
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounce 1s ease-in-out',
      },
    },
  },
  plugins: [],
}


export default nextConfig;
