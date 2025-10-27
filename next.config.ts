import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {protocol: 'https', hostname:'cdn.pixabay.com'},
      {protocol: 'https', hostname:'localhost:3000'}
    ]
  }
};

export default nextConfig;
