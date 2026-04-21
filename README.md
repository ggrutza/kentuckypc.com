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

## Things to swap in before launch

1. **Real photos** — replace the gradient placeholder blocks in `gallery.html`
   and the split-section `.image` divs with `<img>` tags pointing at files in
   `assets/img/`.
2. **Phone number & address** — search the repo for "coming soon" and
   "Kentucky, USA" to fill in real contact details.
3. **Email addresses** — `info@kentuckypc.com` and `quotes@kentuckypc.com` are
   placeholders; confirm these mailboxes exist or change them.
4. **Form handler** — `quote.html` and `contact.html` currently have inert
   forms (`onsubmit="return false;"`). Wire them to Formspree, Netlify Forms,
   Basin, or a custom backend before going live.
5. **Capability stats** on the home hero (oven size, part size, spec) — update
   once the shop is operational.
6. **Favicon / OG image** — add a `favicon.ico` and social share image.
