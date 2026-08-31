import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/blog-to-tweet/",
    "/ai-thread-generator/",
    "/blog-to-twitter-thread/",
    "/tools/thread-to-pdf/",
    "/guides/how-to-make-a-thread-on-twitter/",
    "/about/",
    "/privacy/",
    "/terms/"
  ];

  return routes.map((route) => ({
    url: route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency:
      route === "/" || route.includes("guides") ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.includes("guides")
          ? 0.9
          : route === "/privacy/" || route === "/terms/" || route === "/about/"
            ? 0.3
            : 0.8
  }));
}
