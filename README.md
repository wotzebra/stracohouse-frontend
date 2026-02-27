# Straco House Website

Placeholder website for Straco House opening event.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

### Option 1: Direct Upload
```bash
npm run build
npx wrangler pages deploy .output/public
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Build output: `.output/public`

## Assets

Place these images in `public/assets/`:
- `house-sketch.png` - Architectural wireframe
- `straco-logo.png` - Straco logo

These should be the same assets used in the email invitations.

