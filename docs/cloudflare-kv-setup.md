# Cloudflare KV for shared threads + emails

Save & share / Recent / email capture need a KV namespace bound as **`BLOG2THREAD_DATA`**.

Without it, those APIs fall back to in-memory storage (lost on cold start / across isolates).

## Required: put the binding in `wrangler.jsonc`

Dashboard-only bindings can be dropped or ignored on the next Git/Workers Builds deploy. The durable fix is declaring the namespace in config:

Declared in `wrangler.jsonc` (do not rename the binding — code reads `BLOG2THREAD_DATA`):

```jsonc
"kv_namespaces": [
  { "binding": "BLOG2THREAD_DATA", "id": "b7f3e06914d647c69d623a9d91980e81" }
]
```

If you recreate the namespace, update the `id` and redeploy. Dashboard-only bindings without this block can be wiped on the next Git deploy.

## Verify

1. Generate a thread on the homepage
2. Click **Save & share link**
3. Open the returned `/thread/{id}/` URL in a private window
4. Homepage **Recent threads** should list it after refresh
