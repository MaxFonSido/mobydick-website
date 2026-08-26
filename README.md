# Moby Dick House of Kabob — Website

A Next.js (App Router) + Tailwind CSS site with a full EN/FA bilingual toggle, modeled on the
Moby Dick House of Kabob design reference (navy/teal/saffron palette, glass navigation,
flame-grilled kabob menu rail, brand story timeline, catering/app split, and a locations
directory).

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (theme tokens defined in `app/globals.css` via `@theme`)
- **next/font** — Space Grotesk, Inter, IBM Plex Mono (Latin) and Vazirmatn (Farsi)

## Bilingual toggle

- `lib/i18n.ts` holds every string as `{ en, fa }` pairs plus the locations list.
- `lib/LanguageContext.tsx` is a client context (`useLang()`) that tracks the active
  language, persists it to `localStorage`, and flips `document.documentElement`'s
  `lang`/`dir` attributes (`rtl` for Farsi).
- Components read `dict.section.key[lang]` directly; RTL-specific layout flips are handled
  with the `.flip` / `.rtl-text-right` utility classes in `globals.css`.
- The switch lives in the header (`EN` / `فارسی`) and is mirrored in the mobile menu.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Dish, story, and catering photography currently link to the original
  `mobyskabob.com` media URLs from the design reference. Swap the `src` values in
  `components/Menu.tsx`, `components/Story.tsx`, `components/Values.tsx`, and
  `components/CateringApp.tsx` for your own hosted images before launch.
- The locations grid (`lib/i18n.ts` → `locationList`) is a static list with a working
  client-side search/filter; wire it up to a real store locator when available.
