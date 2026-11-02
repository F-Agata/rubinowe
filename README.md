# Rubinowe

Website of Rubinowe Sp. z o.o., a software house. Next.js with static export. Polish is the main version at `/`, English is at `/en/`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000 (PL) and http://localhost:3000/en/ (EN)
npm run build    # static site in out/
```

## Where things live

- `lib/content.ts`: all copy in both languages, plus the contact email.
- `app/(pl)/` and `app/(en)/en/`: one root layout and page per language (route groups, so Polish stays at `/`).
- `components/site/HomePage.tsx`: page structure, shared by both languages.
- `components/site/Document.tsx`: `<html>` shell, fonts and metadata.
- `app/globals.css`: the whole visual system (paper, ruby, ink), layout and motion.
- `components/papercut/`: the papercut motifs. `motifs.tsx` generates the cut art, `Fold.tsx` folds it along its axis, and `FoldObserver.tsx` is the scroll fallback for browsers without scroll-driven animations.

## Deploy

Upload `out/` to any static host, e.g. Vercel, Netlify or plain hosting.
