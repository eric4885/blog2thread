# Cloudflare KV for shared threads + emails

Save & share / Recent / email capture need a KV namespace bound as **`BLOG2THREAD_DATA`**.

Without it, those APIs fall back to in-memory storage (lost on cold start / across isolates).

## One-time setup

1. Cloudflare Dashboard → **Workers & Pages** → **KV** → **Create a namespace**  
   Name e.g. `blog2thread-data`
2. Open Worker **`blog2thread`** → **Settings** → **Bindings** → **Add** → **KV Namespace**
   - Variable name: `BLOG2THREAD_DATA`
   - Namespace: the one you created
3. Save, then **redeploy** the Worker (push to Git or trigger build)
4. Optional: put the namespace id into `wrangler.jsonc`:

```jsonc
"kv_namespaces": [
  { "binding": "BLOG2THREAD_DATA", "id": "your_namespace_id" }
]
```

## Verify

1. Generate a thread on the homepage  
2. Click **Save & share link**  
3. Open the returned `/thread/{id}/` URL in a private window  
4. Homepage **Recent threads** should list it after refresh  
