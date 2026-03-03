# Straco House - Placeholder Website

"Coming Soon" placeholder website for stracohouse.be.

## Live Site

- **Production**: https://stracohouse.be
- **Workers URL**: https://stracohouse-frontend.suppliers-f48.workers.dev

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Deploy

### Automatic (via GitHub)
Push to `main` branch triggers automatic deployment via Cloudflare Workers.

```bash
git add -A
git commit -m "Your changes"
git push
```

### Manual Deploy
```bash
npm run build
npx wrangler deploy
```

## Project Structure

```
site/
├── app/
│   ├── app.vue
│   ├── pages/
│   │   └── index.vue      # Main placeholder page
│   └── assets/
│       └── css/main.css
├── public/
│   ├── assets/
│   │   ├── house-sketch.svg  # Architectural drawing
│   │   └── straco-logo.svg   # Straco logo
│   ├── favicon.svg
│   └── favicon.png
├── nuxt.config.ts
└── wrangler.toml
```

## Tech Stack

- **Framework**: Nuxt 4
- **Hosting**: Cloudflare Workers
- **Repository**: github.com/wotzebra/stracohouse-frontend

## Design

- Full black background (#000000)
- Architectural house sketch (SVG)
- "COMING SOON" text
- "STRACO HOUSE" text
- "October 2026" date
- Straco logo footer

Matches the email invitation design.
