# Blog2Thread

Free AI **Twitter / X thread generator** — paste a blog URL or text, get a ready-to-post thread.

→ **Try it free:** [https://blog2thread.com](https://blog2thread.com)

No login for drafts. Copy, Markdown, or PDF when you are ready to publish.

## What it does

| Input | Output |
|------|--------|
| Blog URL or pasted article | Numbered X thread |
| Topic / angle | Fresh thread draft |
| Same source, single-tweet mode | One post under 280 chars |

Useful pages:

- [Live generator](https://blog2thread.com)
- [Blog → Twitter thread](https://blog2thread.com/blog-to-twitter-thread/)
- [Blog → single tweet](https://blog2thread.com/blog-to-tweet/)
- [Best AI thread generators compared](https://blog2thread.com/best-ai-twitter-thread-generator/)
- [How to make a thread on Twitter/X](https://blog2thread.com/guides/how-to-make-a-thread-on-twitter/)

> Secrets stay out of git: copy `.env.example` → `.env.local` and set keys only on your machine / Cloudflare.

## Stack

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS
- OpenAI-compatible API (APIMart)
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
| Install command | `npm install --no-fund --no-audit` (if the field exists; avoids strict `npm ci` lock drift) |
| Build command | `npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion` |
| Deploy command | `npx opennextjs-cloudflare deploy -- --keep-vars` |
| Non-production deploy | `npx opennextjs-cloudflare upload -- --keep-vars` |

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
| `/best-ai-twitter-thread-generator` | Comparison hub |
| `/tools/thread-to-pdf` | PDF/Markdown export |
| `/guides/*` | SEO playbooks (how-to, length, thread vs single, …) |

## License

Source in this repo is provided as-is for the Blog2Thread product. See the live site for the product terms.
