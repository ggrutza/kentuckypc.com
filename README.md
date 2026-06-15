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
3. **Drop in the real logo** — save the KPC logo as
   `assets/img/logo.png` (ideally a tightly-cropped version, transparent
   background or navy background matching `#0a1a6e`, ~800px wide). Until then
   the site shows an SVG placeholder (`assets/img/logo-placeholder.svg`) that
   approximates the logo — `main.js` swaps to it automatically if `logo.png`
   is missing.
4. **Real photos** — replace the gradient placeholder blocks in `gallery.html`
   and the split-section `.image` divs with `<img>` tags pointing at files in
   `assets/img/`. Gallery copy currently frames items as "the kind of work we
   take on" rather than completed jobs — update once you have real project shots.
5. **Form handler** — `quote.html` and `contact.html` currently have inert
   forms (`onsubmit="return false;"`). Wire them to Formspree, Netlify Forms,
   Basin, or a custom backend before going live.
6. **Verify capability claims** — service/equipment descriptions are written
   conservatively for a new shop. Adjust them to match your actual equipment
   and processes (e.g. oven size, blast media, certifications).
7. **Favicon / OG image** — add a `favicon.ico` and social share image.
