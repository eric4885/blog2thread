# Cloudflare AI Crawl / GEO checklist (blog2thread.com)

Site `robots.txt` lives at `public/robots.txt` (includes Content-Signal).  
**Keep Cloudflare「托管 robots.txt」OFF** — when ON, CF prepends Disallow for GPTBot/ClaudeBot/CCBot and kills GEO.

## Goal

- **Content-Signal**: `search=yes, ai-train=no, use=reference`
- **Allow** AI search / citation crawlers (GEO)
- Optionally block Amazonbot / meta-externalagent

## Dashboard

1. AI Crawl Control → Overview → **托管 robots.txt** = **OFF**
2. Security crawler list: do **not** hard-block GPTBot / ClaudeBot / CCBot / PerplexityBot / Applebot-Extended / Bytespider
3. Open https://blog2thread.com/robots.txt — no `# BEGIN Cloudflare Managed content`
4. GSC: re-fetch robots.txt

## Verify

```bash
curl -s https://blog2thread.com/robots.txt | findstr /i "Content-Signal GPTBot ClaudeBot CCBot Disallow Allow"
```
