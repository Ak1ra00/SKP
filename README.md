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

The form is built and validated but inert until you pick a delivery service.
Your email address never appears in the page source either way — it lives with
the provider.

Set both values in `src/data/site.ts`:

```ts
form: {
  provider: 'web3forms',   // or 'formspree'
  key: '...',
},
```

### Option A — Web3Forms (no account, recommended)

1. Go to <https://web3forms.com>
2. Enter the email address where you want messages delivered
3. They email you an **access key** (a UUID)
4. Set `provider: 'web3forms'` and paste the key into `key`

Free, unlimited submissions, nothing to sign up for.

### Option B — Formspree

1. Create a free form at <https://formspree.io>
2. Copy the endpoint, e.g. `https://formspree.io/f/xkgvabcd`
3. Set `provider: 'formspree'` and paste the **whole URL** into `key`

Free tier allows 50 submissions per month.

### What the form already does

- Validates name, email and message before sending, and moves focus to the
  first field that needs fixing
- Announces status through `aria-live`, so screen readers hear the result
- Disables the button and shows "Sending…" while in flight
- Carries two hidden honeypot fields (`_gotcha`, `botcheck`) that catch most
  spam bots
- Reports provider-side rejections and network errors distinctly

Whichever provider you choose receives every submission and the sender's
address. That is the trade for not publishing your own address.

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
