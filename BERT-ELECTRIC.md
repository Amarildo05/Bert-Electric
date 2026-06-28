# Bert Electric — Project Changelog & Improvement Tracker

## Project Overview

**Bert Electric** is a business website for an electrical services company based in Albania. It serves as a digital presence and lead-generation tool, showcasing the company's services and product catalog to Albanian-speaking customers.

### Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + React Router DOM v7 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 + PrimeReact v10 |
| Icons | PrimeIcons v7 |
| Contact Form | Formspree |
| Deployment | Vercel |
| Language | JavaScript (ES Modules) |

### Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, services preview, product highlights, contact CTA |
| `/rreth-nesh` | About | Company intro, exclusive products, why choose us |
| `/sherbimet` | Services | Service cards grid |
| `/sherbimet/:slug` | Service Details | Per-service detail page (dynamic) |
| `/produktet` | Products | Brand showcase (Dahua, Hikvision, Ezviz) |
| `/produktet/:brand` | Product Details | Brand-specific product catalog (dynamic) |
| `/kontakt` | Contact | Contact form (Formspree), info, embedded Google Map |

### Services Offered
- Electrical installation
- Security cameras (CCTV)
- Alarm systems
- Audio solutions

### Key Integrations
- **Formspree** — contact form email delivery
- **Google Maps** — embedded location map on contact page
- **Google Fonts** — Titillium Web typeface

---

## Improvement Tracker

### Completed

- [x] **Logo** — replaced 3D PNG with clean flat SVG
- [x] **Typography** — standardized heading font-weight and hero heading scale
- [x] **Section spacing** — standardized `py-12 sm:py-16` rhythm + fixed 2 CSS bugs
- [x] **Product cards** — fixed image heights on single-brand product page
- [x] **Contact form** — better input padding, focus states, responsive submit button
- [x] **Hero sections** — fixed HomepageHero tablet layout bug (`md:` → `lg:`)
- [x] **"Ekskluzive" badge** — replaced stock rubber-stamp PNG with clean inline badge
- [x] **Buttons** — standardized `rounded-md shadow font-semibold` across all primary buttons

### Planned

_Nothing queued — open for future improvements._

---

## Change Log

---

### [Unreleased] — Polish & Consistency Pass

#### Buttons — standardized all primary buttons
- `ProductHighlights` "Shiko më shumë": `rounded` → `rounded-md`, added `shadow`, added `font-semibold`
- `HomepageHero` CTA: `font-medium` → `font-semibold`
- All 4 primary buttons now share: `bg-blue-800 rounded-md shadow font-semibold hover:bg-blue-700 transition`

#### "Ekskluzive" badge — replaced stock PNG with inline badge
- Removed generic distressed rubber-stamp PNG (`Exclusive-logo.png`) from `ProductHighlights`
- Replaced with a clean `<span>` badge: `text-xs font-bold uppercase tracking-widest text-blue-800 border border-blue-800 rounded` — minimal, on-brand, no image dependency

#### Hero — fixed tablet layout bug in HomepageHero
- Image div used `md:w-2/3 md:pb-20 md:pt-10 md:pl-10` but the layout only switches to side-by-side at `lg` (`lg:flex-row`) — at tablet the image was 2/3 width and heavily padded while still stacked vertically
- Changed all `md:` → `lg:` on the image div to match the text div which was already correct

#### Contact form — polish
- Inputs: `py-1.5` → `py-2` for better touch targets
- Added `focus:border-blue-700 transition` for smooth, visible focus state on all inputs and textarea
- Submit button: `w-full` on mobile, `sm:w-auto sm:mx-auto` on desktop

#### Product cards — consistent image height on product detail page
- `ProductsDetails`: image now `h-32 sm:h-36 object-contain` at all breakpoints — dome cameras, bullet cameras, and NVRs no longer produce uneven card heights

#### Section spacing — standardized rhythm + bug fixes
- **Bug fix** `CompanyIntro`: `md:px-p[10%]` → `md:px-[10%]` (typo made medium-breakpoint horizontal padding silently invalid)
- **Bug fix** `BrandCards`: mobile padding `px-14` → `px-6` (56px horizontal padding was squeezing cards on phones)
- `CompanyIntro` vertical: `py-8 sm:py-12` → `py-12 sm:py-16`
- `ContactContent` vertical: `py-10 sm:py-12` → `py-12 sm:py-16`
- `Services` section: `sm:py-14` → `sm:py-16`
- `ExclusiveProducts`: removed `mb-16` (was stacking with `py-16` to create ~128px gap)

#### Typography — targeted consistency fixes
- `WhyChooseUs` h2: `font-semibold` → `font-bold` (matches every other section h2)
- `HomepageHero` h2: removed `md:text-6xl` jump, now caps at `sm:text-5xl`; replaced `leading-10` with `leading-tight`
- `HomepageHero` paragraph: added `leading-relaxed` for multi-line readability

#### Logo — replaced 3D PNG with flat SVG
- Created `public/BertElectric-Logo.svg` — clean flat 2D logo; same circular shape and blue/purple radial gradient, no 3D stripe effect
- Updated `Navbar.jsx`, `Footer.jsx`, and `index.html` (favicon) to use `.svg`
- Fixed pre-existing bug: `index.html` declared `type="image/svg+xml"` but pointed to a `.png`

---

### v1.0.0 — Initial Release

- Full website launched with 7 routes
- Formspree integration for contact form with client-side validation
- Product catalog for Dahua, Hikvision, and Ezviz brands
- Responsive design with Tailwind CSS and PrimeReact
- Vercel deployment with SPA routing rewrites
- Albanian-language content throughout
- SEO meta tags in `index.html`
- Custom CSS animations (slideFadeIn, popFadeIn, fadeUp)
- Google Maps embed on contact page

---

## Known Issues

| # | Description | Priority | Status |
|---|-------------|----------|--------|
| — | No issues logged | — | — |

---

## Notes

- All site content is in **Albanian** (Shqip) — keep consistent for any new pages or components
- Static data lives in `src/data/` — no CMS; content changes require code edits
- Brand colors: deep blue `#14128f` / purple `#413db6`
- Custom font: Titillium Web (via Google Fonts)
- Formspree endpoint is in `.env` as `VITE_FORMSPREE_URL`
- 65 product images across 3 brands in `public/Products/` — future optimization candidate (WebP, lazy loading)
