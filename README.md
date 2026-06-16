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

## Brand & logo

- **Logo:** the real KPC logo is in place — `assets/img/logo.png` (white
  knockout, for the navy header/footer) and `assets/img/logo-color.png`
  (full-color navy/steel, for light backgrounds), both transparent PNGs
  extracted from the supplied artwork.
- **Typography:** IBM Plex superfamily — **Sans Condensed** for uppercase
  display headlines, **Sans** for body, and **Mono** for all spec/label text
  (eyebrows, form labels, RAL codes, ruler scale, stat labels). The mono layer
  gives the site a fab-shop "traveler / spec-sheet" character.
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
