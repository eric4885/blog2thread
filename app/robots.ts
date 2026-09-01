import type { MetadataRoute } from "next";

/**
 * Cloudflare may prepend managed AI directives to this file.
 * Keep Search/Agent crawlers allowed here; set AI Crawl Control in
 * the Cloudflare dashboard so managed Disallow lines do not block GEO.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const };

  return {
    rules: [
      {
        userAgent: "*",
        ...allowAll
      },
      // AI search / citation crawlers — must stay allowed for GEO
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-SearchBot", ...allowAll },
      { userAgent: "Claude-User", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Perplexity-User", ...allowAll },
      { userAgent: "CCBot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "Bytespider", ...allowAll },
      // Optional: keep noisy scrapers blocked in our file (CF may also manage these)
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "meta-externalagent", disallow: "/" }
    ],
    sitemap: "https://blog2thread.com/sitemap.xml"
  };
}
