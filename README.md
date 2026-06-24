# kentuckypc.com

Marketing website for **Kentucky Powder Coating** — a static HTML/CSS/JS site
you can host on any static host (GitHub Pages, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

## Pages

- `index.html` — Home
- `about.html` — About
- `gallery.html` — Gallery (with category filters)
- `quote.html` — Request a Quote (form)
- `contact.html` — Contact (info + form)

## Structure

```
kentuckypc.com/
├── index.html
├── about.html
├── gallery.html
├── quote.html
├── contact.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/               (add real project photos here)
```

## Local preview

No build step — open `index.html` directly, or run a quick local server:

```sh
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Business details

- **Address:** 679 Parker Drive, Maysville, KY 41056 (live across the site,
  including a Google Maps embed on `contact.html` and `LocalBusiness`
  structured data on `index.html`).
- **Hours:** Mon–Fri, 7:30 AM – 5:00 PM ET.

## Things to swap in before launch

1. **Phone number** — still shown as "coming soon" on `contact.html`. Add the
   real number there, in the footer contact block on every page, and in the
   `LocalBusiness` JSON-LD in `index.html` (`"telephone"` field).
2. **Email addresses** — `info@kentuckypc.com` and `quotes@kentuckypc.com` are
   placeholders; confirm these mailboxes exist or change them.
3. **Real photos** — replace the gradient placeholder blocks in `gallery.html`
   and the split-section `.image` divs with `<img>` tags pointing at files in
   `assets/img/`. Gallery copy currently frames items as "the kind of work we
   take on" rather than completed jobs — update once you have real project shots.
4. **Form handler** — `quote.html` and `contact.html` currently have inert
   forms (`onsubmit="return false;"`). Wire them to Formspree, Netlify Forms,
   Basin, or a custom backend before going live.
5. **Favicon / OG image** — add a `favicon.ico` and social share image.

## Photography (IMPORTANT — placeholders)

The home page is **photo-led** (Enerfab-style): a full-bleed hero, a "Markets
We Serve" photo-card grid, and a full-width cure-oven feature band. Those
images are **AI-generated stand-ins**, hotlinked from an image-generation CDN
because this build environment can't download them into the repo. Before
launch, **download each image into `assets/img/photos/` (or replace with real
shop photos) and update the `background-image` URLs in `index.html`** — the
hotlinked CDN URLs are not guaranteed to be permanent.

Current placeholder image URLs (all on `d8j0ntlcm91z4.cloudfront.net/...`):

| Slot | File |
|------|------|
| Hero | `hf_20260616_200846_9010126b-...png` |
| Market · Industrial | `hf_20260616_200916_625a69d8-...png` |
| Market · Automotive | `hf_20260616_201051_7290ff67-...png` |
| Market · Architectural | `hf_20260616_201118_8e51a9a8-...png` |
| Market · Agricultural | `hf_20260616_201144_b6227ef4-...png` |
| Feature · Cure oven | `hf_20260616_201203_d98044de-...png` |

## Built for agents too (machine-readability)

The site is structured so AI assistants and crawlers can read the business
reliably, not just render it:

- **`llms.txt`** — llmstxt.org-style markdown brief of the business + page map.
- **`robots.txt`** — explicitly allows major AI crawlers (ClaudeBot, GPTBot,
  PerplexityBot, Google-Extended, etc.) and links the sitemap.
- **`sitemap.xml`** — all five pages.
- **JSON-LD** on the home page: an enriched `LocalBusiness` (address, geo,
  area served, hours, service `OfferCatalog`) plus a `FAQPage`.
- **FAQ section** — semantic `<details>` accordion (no JS), the human-readable
  twin of the FAQ schema.

Verify before launch: the `geo` coordinates in the `LocalBusiness` JSON-LD are
**approximate (Maysville city center)** — replace with the exact shop
coordinates. Add `telephone` to the JSON-LD and `llms.txt` once a number exists.

## Brand & logo

- **Logo:** the real KPC logo is in place — `assets/img/logo.png` (white
  knockout, for the navy header/footer) and `assets/img/logo-color.png`
  (full-color navy/steel, for light backgrounds), both transparent PNGs
  extracted from the supplied artwork.
- **Typography:** IBM Plex superfamily — **Sans Condensed** for uppercase
  display headlines, **Sans** for body, and **Mono** for all spec/label text
  (eyebrows, form labels, RAL codes, ruler scale, stat labels). The mono layer
  gives the site a fab-shop "traveler / spec-sheet" character.
- **Hero concept:** "raw steel in → flawless finish out." The headline enacts
  it (outlined "raw" line → solid color "finished" line), and a steel **plate
  animates from bare/rusted to a glossy cured coat** on load via a clip-path
  cure-line sweep (`.hero-plate`, respects `prefers-reduced-motion`). A
  fab-drawing **title-block** rail under the hero carries location / capacity /
  scope / hours in mono.
- **Signature elements:** a dimensional **40-ft ruler** in the capacity band
  (tick marks + labeled scale) and a **finish swatch wall** on the home page
  showing real RAL powder-coat colors with finish-type tags.
- **Icons & social:** `favicon.ico`, `apple-touch-icon.png`, `assets/img/icon-*.png`,
  and an Open Graph share image (`assets/img/og-image.png`) are generated from
  the KPC mark; favicon + OG tags are wired into every page.
- **Colors:** brand navy `#0a1470` and steel gray `#7d8288` come from the
  logo; industrial **safety orange** `#ff6a13` and **hazard yellow** `#ffce26`
  are accents. Hazard-stripe strips, the `40 FT` capacity callouts, the
  steel-plate feature band, and color-coded service cards carry the
  heavy-industrial theme.
- **40-foot capacity** is featured throughout (hero badge, stat strip, a
  dedicated steel band, services, and About). Confirmed accurate.
