# Cloudflare AI Crawl / GEO checklist (blog2thread.com)

Cloudflare **prepends** managed robots rules. Editing only `app/robots.ts` is not enough.

## Goal

- Keep **Content-Signal**: `search=yes`, `ai-train=no` (or Training = Disallow / no-train)
- **Allow** crawlers used for AI search & citation (GEO)
- Optionally keep blocking pure scrapers (Amazonbot, meta-externalagent)

## Dashboard steps

1. Cloudflare → **网站** → `blog2thread.com`
2. Open **AI Crawl Control** (or **AI / Bot** related settings; name may vary by plan)
3. Per crawler, set **Allow** for at least:
   - OAI-SearchBot, ChatGPT-User, GPTBot
   - ClaudeBot, Claude-SearchBot, Claude-User
   - PerplexityBot, Perplexity-User
   - CCBot (Common Crawl — used by many AI indexes)
   - Applebot-Extended, Bytespider (if listed)
4. Training-only preference: keep **ai-train = no** / Training disallow where the UI separates Search vs Training
5. Save, then open https://blog2thread.com/robots.txt
6. Confirm those bots are **not** `Disallow: /` in the Cloudflare Managed block
7. In GSC, re-fetch robots.txt / wait for recrawl

## Verify

```bash
curl -s https://blog2thread.com/robots.txt | findstr /i "GPTBot ClaudeBot CCBot Disallow Allow"
```
