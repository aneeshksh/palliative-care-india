# Palliative Care India

A simple, static information site about palliative care in India: what it is, common myths, the current picture, where to find help, and tips for caregivers.

Plain HTML + CSS. No build step, no dependencies.

## Run locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select this repository.
3. Build settings: Framework preset **None**, build command **empty**, output directory **`/`**.
4. Deploy. Every push to `main` redeploys automatically.

## Disclaimer

General information only, not medical advice.
