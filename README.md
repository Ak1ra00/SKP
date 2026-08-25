# soufianekh.space

Single-page professional site. Astro, hand-written CSS, no UI framework and no
runtime dependencies. The built page makes zero external network requests.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Requires Node 22.12 or newer.

## Editing content

All copy lives in `src/data/site.ts`. The components read from it, so ordinary
updates never touch markup.

| What | Where |
| --- | --- |
| Name, role, statement, location | `src/data/site.ts` |
| The three capability cards | `site.capabilities` |
| Years-of-experience badge | `site.yearsExperience` (set to `null` to hide) |
| Contact form endpoint | `site.formEndpoint` |
| Colours, spacing, type | `src/styles/global.css` (tokens at the top) |

**This page is public.** Keep it general — no employers, dates, or internal
process and programme names. Specifics belong in the resume you send directly.

## Connecting the contact form

The form is inert until it has an endpoint:

1. Create a free form at <https://formspree.io>
2. Copy the endpoint (`https://formspree.io/f/xxxxxxxx`)
3. Paste it into `formEndpoint` in `src/data/site.ts`

Submissions then arrive by email without your address ever appearing on the
page. Formspree receives each submission and the sender's address. A hidden
honeypot field (`_gotcha`) catches most spam bots.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages.

One-time repo setup: **Settings → Pages → Build and deployment → Source: GitHub
Actions**, then set the custom domain to `soufianekh.space` and enable *Enforce
HTTPS* once the certificate is issued.

### DNS

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ak1ra00.github.io.` |

`public/CNAME` holds the domain and is copied into `dist/` on every build, so
Pages keeps the custom domain across deploys.

## Image credit

The hero photograph is a NASA image (`jsc2022e045646`), in the public domain.
It has been cropped to remove third-party signage, and colour graded. NASA does
not endorse this site.
