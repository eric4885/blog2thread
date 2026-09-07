/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }]
      },
      {
        source: "/sitemap.xml",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }]
      }
    ];
  }
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
