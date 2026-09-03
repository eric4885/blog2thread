import type { MetadataRoute } from "next";
import { GUIDE_SLUGS } from "@/lib/guides/slugs";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const guideRoutes = GUIDE_SLUGS.map((slug) => `/guides/${slug}/`);

  const routes = [
    "/",
    "/blog-to-tweet/",
    "/ai-thread-generator/",
    "/blog-to-twitter-thread/",
    "/tools/thread-to-pdf/",
    "/guides/",
    ...guideRoutes,
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
        : route === "/guides/"
          ? 0.85
          : route.includes("guides")
            ? 0.9
            : route === "/privacy/" || route === "/terms/" || route === "/about/"
              ? 0.3
              : 0.8
  }));
}
