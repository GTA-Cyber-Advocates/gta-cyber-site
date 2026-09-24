# gta-cyber.org

Static site for GTA Cyber, the cybersecurity community of practice within
Global Tech Advocates.
Plain HTML and CSS, no build step, no framework, no third-party requests.

Live: https://gta-cyber.org
Defensive domain: gta-cyber.com, 301s to the apex above
LinkedIn: https://www.linkedin.com/company/gta-cyber

## Structure

```
├── index.html            Home
├── about.html            The model and principles
├── focus-areas.html      Four subjects, two mechanisms, and what it will not do
├── events.html           Programme and rhythm
├── partners.html         Sponsorship tiers and terms
├── get-involved.html     Enquiry form
├── security-policy.html  Vulnerability disclosure policy
├── 404.html
├── robots.txt            Search engines and AI answer engines welcomed
├── sitemap.xml           Submit to Google Search Console
├── llms.txt              Plain-language summary for AI answer engines
├── _redirects            301s, including legacy and convenience paths
├── _headers              Security headers, caching, no-transform
├── .well-known/
│   └── security.txt      Expires 21 Sep 2027, set a calendar reminder for July
├── brand/                Supplied logo artwork, not served
└── assets/
    ├── styles.css
    ├── site.js           Nav, year, ?interest= deep link, form, reveals
    ├── gta-cyber-logo.png        Dark lockup, header
    ├── gta-cyber-logo-light.png  Light lockup, footer
    ├── og-image.png              1200x630 social card
    ├── favicon.ico / -32 / -512 / apple-touch-icon
    └── partners/klarvant.png     Self-hosted sponsor logo
```

## Outstanding

**REMOVE THE SITE-WIDE NOINDEX BEFORE LAUNCH.** `_headers` currently begins:

```
/*
  X-Robots-Tag: noindex
```

That line exists only so the temporary `*.pages.dev` address stays out of search
results. **Delete it the moment `gta-cyber.org` is attached**, or the real site will
never be indexed and nobody will notice for months.


**The contact form has no endpoint.** `get-involved.html` posts to
`https://formspree.io/f/REPLACE_WITH_ENDPOINT`. Create a Formspree form for this site
and replace that string. Do not reuse the endpoints belonging to vivatgroup.net,
techfloridaadvocates.org or vivatpower.com: separate endpoints keep notification
addresses and the 50-submission monthly free tier from overlapping.

Everything else is in place: logo, favicons, og-image, copy, security policy.

## Colour

Taken from the supplied logo artwork and computed for WCAG 2.1 AA.

| Token | Hex | Contrast | Use |
|---|---|---|---|
| `--ink` | `#1D1D1B` | 15.62:1 on paper | Text, dark sections, primary buttons |
| `--yellow` | `#FDD400` | 11.73:1 with ink on it | Accents, rules, buttons **with ink text** |
| `--paper` | `#F7F6F3` | page background | Default background |
| `--sand` | `#EDEBE5` | alternating band | Section separation |
| `--muted` | `#55544F` | 7.02:1 on paper | Secondary text |

**Yellow is 1.42:1 on white.** It must never carry text or a hairline on a light
background. It appears as text in exactly three places, all of them on ink: the hero
eyebrow, the eyebrow in dark sections, and footer link hover. Everywhere else it is a
background with ink text on top, or a decorative rule.

Lowest contrast anywhere on the site is 6.37:1, against an AA requirement of 4.5.

## Canonical form

The **apex is canonical**, matching the rest of the estate. There is no www variant in
the code. If a www record is ever added it must 301 to the apex, and `rel=canonical`,
`og:url`, `sitemap.xml`, the `Sitemap:` line in `robots.txt` and the `Canonical` and
`Policy` fields in `security.txt` all have to move together.

## Rules that are easy to break

**No comments in served files.** CSS carries a one-line header. HTML and JavaScript
carry none. Nothing in the output should reference internal notes or tooling.

**No third-party requests.** Fonts are the system stack. The Klarvant sponsor logo is
self-hosted in `assets/partners/`, not hotlinked. The only external origin the browser
contacts is `formspree.io`, and only on form submission.

**`no-transform` on every HTML route** in `_headers`. It stops Cloudflare injecting its
JS Detections script into the served markup. The site uses extensionless URLs, so each
route needs its own entry; `/*.html` alone does not cover `/about`.

**One `Cache-Control` rule per asset.** Cloudflare *combines* matching `_headers` rules
and joins duplicate header names with a comma rather than letting the narrower rule
win. Two matching rules produce a mangled header with two `max-age` values.

**Browser Cache TTL must be "Respect Existing Headers"** in Cloudflare under Caching →
Configuration. The 4-hour default silently overwrites the `max-age=0` set on CSS and
JS, so deploys take hours to reach returning visitors.

**Edge features that rewrite output must stay off**, and none are visible in this repo:
managed `robots.txt` (AI Crawl Control → Signals), Block AI bots, Bot Fight Mode, AI
Labyrinth, and email address obfuscation. Verify by diffing a live page against the
repo file; they should be byte-identical.

## Terminology

The site says **community of practice**, never "guild". Spotify's model uses squads,
tribes, chapters and guilds, and its guild is defined as a voluntary cross-tribe
*community of practice*. Community of practice is the business-generic term for the
same thing: a group of subject matter experts organised around a craft, sitting across
business units, divisions and locations rather than inside any one of them.

It is deliberately **not** a Centre of Excellence. A CoE is formal, funded, top-down
and carries structural authority. GTA Cyber is volunteer-led, unfunded in headcount
terms, and practitioner-driven, which is a community of practice by definition. Using
CoE language would promise governance the group does not have.

"Working group" was also avoided: GTA already runs 42 of them, and the distinction
would confuse rather than clarify.

## Launch banner

The yellow strip above the hero on the home page (`.launch`) announces that the group
is newly established. It exists for two reasons: it is genuine news, and it reframes
the thin sponsor and member lists as "early" rather than "empty". **Remove it once the
group is no longer new**, or it starts reading as an excuse rather than an invitation.

## Focus areas

Four subjects, revised September 2026:

1. **Post-quantum readiness** (leads, and is the only one with fixed dates)
2. Orchestrated digital governance
3. The convergence of AI and cybersecurity
4. Data sovereignty, viewed through a security lens

A philanthropic strand on the grey digital divide was drafted and then dropped. If it
returns, the argument was that digital exclusion and fraud victimisation reinforce each
other, which makes inclusion a security problem rather than charity.

Practitioner exchange and expertise on call are **not** focus areas. They are standing
mechanisms and live in a separate "How we work" section. Conflating the two was an
earlier version's mistake.

### Checking the PQC copy before you edit it

This is the one page where stale facts would be embarrassing, because the audience are
practitioners. Two things were verified at the time of writing and should be re-checked
if the copy is revised:

- NIST finalised the post-quantum standards in **August 2024**: ML-KEM (FIPS 203) for
  key establishment, ML-DSA (FIPS 204) and SLH-DSA (FIPS 205) for signatures.
- Migration deadlines have been **brought forward**, not pushed back. Do not publish a
  specific year without re-confirming it, and be careful about presenting a single
  jurisdiction's deadline as if it were global: the audience is international.

The copy deliberately avoids quoting one country's dates for that reason.

## Events

The first session is a **webinar on post-quantum readiness, early December 2026**, with
date, speakers and registration to be announced. It appears in three places that must be
kept in step: the launch banner on the home page, the "Our first session" block on
`/events`, and `llms.txt`. Update all three, or the site contradicts itself.

## The hero motif

The node graph in the hero is inline SVG in `index.html`, styled by `.hero__deco`. It
echoes the connected-node mark in the logo rather than reproducing it. It is
`aria-hidden`, sits bottom-right so it cannot collide with the headline at any width,
and drops to 20% opacity below 1000px.

## Deployment

Repository: `GTA-Cyber-Advocates/gta-cyber-site`, deliberately in its own GitHub
organisation rather than under Vivat, so management of the guild can be handed over
without untangling the repo from an unrelated org. Transferring a repository between
orgs severs the Cloudflare Pages connection and it has to be reconnected by hand, so
starting in the right place avoids that entirely.

Cloudflare Pages, connected to this repository, building from the root with no build
command. Custom domains `gta-cyber.org` added through the Pages **Custom domains** UI
so Pages creates the DNS records itself. Never hand-build the CNAME; doing so without
registering the domain in Pages first produces a 522.

`gta-cyber.com` is a defensive registration and redirects to the apex of `.org` via a
Cloudflare redirect rule. It serves no content and sends no mail.

## Attribution

Logo artwork supplied by Global Tech Advocates. The Klarvant wordmark is used with
permission as founding title sponsor, taken from their published brand assets.
