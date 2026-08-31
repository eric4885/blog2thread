import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/blog-to-tweet",
    "/ai-thread-generator",
    "/blog-to-twitter-thread",
    "/tools/thread-to-pdf",
    "/guides/how-to-make-a-thread-on-twitter"
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route.includes("guides") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("guides") ? 0.9 : 0.8
  }));
}
