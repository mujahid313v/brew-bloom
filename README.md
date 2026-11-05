# Brew & Bloom — Sample Restaurant Website

A warm, mobile-first single-page website for a fictional café called **Brew & Bloom**.
Built as a sample project: the copy, photos and reservation flow are all fictional.

## Design

- **Stack:** Vite + React 19 + Tailwind CSS v4
- **Style:** warm editorial
- **Colors:** cream `#FAF5EC`, espresso `#2B1B12`, terracotta `#C65D3B`, olive `#6B7A3A`
  (exposed as CSS variables via Tailwind v4 `@theme`)
- **Fonts:** Fraunces (headings) + DM Sans (body), loaded from Google Fonts
- **Layout:** mobile-first, responsive, single column on small screens

## Sections

1. Hero — large headline, food photo, “Reserve a table” / “View menu” buttons
2. Our story
3. Menu — Coffee / Breakfast / Mains / Desserts category tabs that filter items
4. Signature dishes — bento grid
5. Gallery
6. Hours and location
7. Reservation form — name, date, time, guests, client-side validation, success message
8. Footer — “Sample project by Mujahid. Not a real business.”

Extras: sticky Reserve bar on mobile, sticky Reserve button on desktop, subtle
fade-in on scroll, image hover zoom, `prefers-reduced-motion` support, alt text on
all images, visible focus states, good color contrast, lazy-loaded WebP images.

## Getting started

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Image credits

All photos are from Unsplash (via `images.unsplash.com`), served as WebP with
`auto=format&fit=crop`.

| Dish / area | Photo | Notes |
| --- | --- | --- |
| Hero — café interior | `photo-1495474472287-4d71bcdd2085` | Baristas at work |
| Our story — interior | `photo-1511920170033-f8396924c348` |  |
| Signatures — pour-over | `photo-1461023058943-07fcbe16d735` |  |
| Signatures — lavender latte | `photo-1534778101976-62847782c213` | Latte art |
| Signatures — espresso cake | `photo-1551024506-0bccd828d307` | Dessert |
| Signatures — burrata | `photo-1490645935967-10de6ba17061` |  |
| Gallery — interior | `photo-1495474472287-4d71bcdd2085` |  |
| Gallery — beans | `photo-1447933601403-0c6688de566e` |  |
| Gallery — burger | `photo-1568901346375-23c9450c58cd` |  |
| Gallery — salad | `photo-1512621776951-a57141f2eefd` |  |
| Gallery — dessert | `photo-1551024506-0bccd828d307` |  |
| Gallery — kitchen | `photo-1414235077428-338989a2e8c0` |  |

Unsplash photo IDs sourced from the public Unsplash photo library.

## Notes

- No backend: the reservation form validates and confirms entirely on the client.
- No real business, reviews or brand assets were used; all copy and imagery are
  sample content.
- Never open, print or modify any `.env` file.
- Do not run `git push`.
