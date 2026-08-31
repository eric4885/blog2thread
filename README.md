# Blog2Thread.com

Free AI Twitter/X thread generator — turn blog posts into ready-to-post threads.

## Stack

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS
- OpenAI-compatible Chat Completions API

## Setup

```bash
npm install
cp .env.example .env.local
# set OPENAI_API_KEY=...
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional:

```bash
OPENAI_BASE_URL=https://api.openai.com
OPENAI_MODEL=gpt-4.1-mini
HTTPS_PROXY=http://127.0.0.1:7890
```

## Pages

| Path | Purpose |
|------|---------|
| `/` | Twitter Thread Generator (homepage) |
| `/blog-to-tweet` | Single tweet from blog |
| `/ai-thread-generator` | Thread from topic |
| `/blog-to-twitter-thread` | Brand exact-match page |
| `/tools/thread-to-pdf` | PDF/Markdown export explainer |
| `/guides/how-to-make-a-thread-on-twitter` | Content SEO guide |

## Deploy

Deploy to Vercel/Cloudflare. Set `OPENAI_API_KEY` in project env. Point `blog2thread.com` DNS to the host, then submit `https://blog2thread.com/sitemap.xml` in Google Search Console.
