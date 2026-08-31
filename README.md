# Blog2Thread.com

Free AI Twitter/X thread generator — turn blog posts into ready-to-post threads.

## Stack

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS
- OpenAI-compatible API via APIMart
- Cloudflare Workers via `@opennextjs/cloudflare`

## Setup

```bash
npm install
cp .env.example .env.local
# set OPENAI_API_KEY + OPENAI_BASE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
OPENAI_API_KEY=your_apimart_key
OPENAI_BASE_URL=https://api.apimart.ai/v1
OPENAI_MODEL=gpt-4o-mini
```

## Cloudflare Workers (OpenNext)

### Local Workers preview

```bash
npm run preview
```

### Deploy from CLI

```bash
npx wrangler login
npm run deploy
```

### Workers Builds (GitHub connected)

In Cloudflare → Workers → blog2thread → Settings → Build:

| Field | Value |
|------|--------|
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx opennextjs-cloudflare deploy` |
| Non-production deploy | `npx opennextjs-cloudflare upload` |

**Do not** use plain `npm run build` + `npx wrangler deploy` alone.

### Production secrets / env vars

In Cloudflare Worker settings → Variables and Secrets, add:

- `OPENAI_API_KEY`
- `OPENAI_BASE_URL` = `https://api.apimart.ai/v1`
- `OPENAI_MODEL` = `gpt-4o-mini` (optional)

Do **not** set `HTTPS_PROXY` on Cloudflare (local-only).

## Pages

| Path | Purpose |
|------|---------|
| `/` | Twitter Thread Generator |
| `/blog-to-tweet` | Single tweet from blog |
| `/ai-thread-generator` | Thread from topic |
| `/blog-to-twitter-thread` | Brand exact-match page |
| `/tools/thread-to-pdf` | PDF/Markdown export |
| `/guides/how-to-make-a-thread-on-twitter` | SEO guide |
