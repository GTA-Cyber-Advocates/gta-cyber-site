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
results. **Delete it when `gta-cyber.org` is attached**, or the real site will never be
indexed and nobody will notice for months.

**But not before `COMMITMENTS.md` is signed off.** The site publishes specific promises
to sponsors, members and form submitters, none of which came from a brief and none of
which anyone has agreed. They were written to make the copy persuasive. While the
noindex is in place they are a draft; the moment it comes off they are published
positions of an organisation that never agreed them. `COMMITMENTS.md` lists every one
with its exact location and who needs to sign it. Clear that first, then the noindex.


**There is no agreement with Klarvant in writing.** Section A of `COMMITMENTS.md`
publishes contract terms (annual, no lock-in, no member list, no guaranteed speaking
slots) for a relationship that exists informally. Treat those as the highest-risk copy
on the site.


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

### Dark surfaces are gradients, not flat ink

Three tokens in `:root` drive every dark surface, so they read as one material rather
than three separate blocks:

| Token | Used by | Brightest stop |
|---|---|---|
| `--grad-hero` | `.hero` | `#283039` |
| `--grad-band` | `.on-ink` (sponsor band, dark CTAs on deep pages) | `#232A32` |
| `--grad-foot` | `.site-footer` | `#212830` |

All three are radial glows anchored to the upper right, in a cool neutral blue-grey.
The hero is the strongest; the band and footer are deliberately fainter, because they
sit next to lighter sections and a strong glow there reads as a rendering fault rather
than a design.

**Change them together or not at all.** They are a family. A gradient hero above a flat
charcoal footer looks like one of them failed to load.

`background-color:var(--ink)` is kept alongside each `background-image` as a fallback,
so anything that cannot render the gradient still gets the right dark surface and the
contrast figures below still hold.

Contrast at the brightest point of each surface, which is the worst case: white 13.36:1,
body text 8.83:1, yellow eyebrow 9.28:1 on the hero, and higher on the other two.

The cool tone was a deliberate choice against the warm ink of the rest of the palette.
It was picked over a warm monochrome lift and a yellow-tinted glow. If it ever needs
revisiting, the argument against it is that cool grey over warm near-black can read
slightly muddy on uncalibrated screens, and that it sits closer to the palette other GTA
group sites use.

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

The site says **working group**, never "guild" and no longer "community of practice".

Working group is GTA's own word. The parent site states GTA runs more than 42 working
groups, and sibling sites brand themselves "A Global Tech Advocates working group" in
the eyebrow, the logo lockup and the footer. Conforming to the parent organisation's
language matters more here than terminological precision, because the audience already
knows what a GTA working group is.

An earlier version used **community of practice** and the README argued that "working
group" should be avoided because GTA already runs 42 of them. That reasoning was
backwards: being one of the 42 is the point. The substance was kept, though. Most GTA
working groups are organised around a place or a sector; this one is organised around a
discipline, which is why it runs across the others rather than beside them. That
sentence is the load-bearing idea and should survive any future renaming.

It is deliberately **not** a Centre of Excellence. A CoE is formal, funded, top-down and
carries structural authority. GTA Cyber is volunteer-led, unfunded in headcount terms
and practitioner-driven, so CoE language would promise governance the group does not
have.

## Homepage structure

The home page is a **long scroll narrative**, matching the pattern used by sibling GTA
working group sites such as gtainnovationfunding.org. It tells the whole story in one
pass: hero, sponsor, stats, about, the model, focus areas, how we work, what we will not
do, events, partners, ways in, FAQ.

**The deep pages still exist and are still canonical for their own subject.** This is
deliberate and is the one thing not to undo. The reference site is a single page with
nothing behind it, which gives it one URL, one title and one meta description for all of
its content. Ours keeps `/focus-areas`, `/events`, `/partners`, `/about` and
`/get-involved` as separate indexable pages, so someone searching for post-quantum
readiness can land on the page about it. The home page summarises; the deep pages are
the detail, and each summary block ends with a link through to its page.

**The home page must never quote the deep pages verbatim.** This is the rule that keeps
the structure honest, and it was broken on the first attempt: 22 sentences appeared
word-for-word in both places. Two things go wrong when that happens. The copies drift, so
the site ends up contradicting itself; and the home page competes with the deep page for
the same queries, which the home page wins on authority, suppressing the page that
actually holds the detail. Every home page block is now a teaser written in its own
words, ending in a link through. Measured overlap is zero sentences. Re-check it after
any edit:

```
python3 - <<'EOF'
import re
def s(f):
    t=open(f).read(); t=re.sub(r'<(script|style|head)[^>]*>.*?</\1>',' ',t,flags=re.S)
    t=re.sub(r'<[^>]+>',' ',t); t=re.sub(r'&[a-z]+;',"'",t)
    return {x.strip() for x in re.split(r'(?<=[.!?])\s+',re.sub(r'\s+',' ',t)) if len(x.split())>6}
h=s('index.html')
for f in ['about.html','focus-areas.html','events.html','partners.html','get-involved.html']:
    print(f, len(h & s(f)))
EOF
```

**The primary nav points at anchors on the home page and at pages everywhere else.**
`index.html` uses `#about`, `#focus`, `#events`, `#partners`, `#join`; every other page
uses `/about`, `/focus-areas` and so on. If you add a nav item, change it in both forms.

`site.js` runs a scrollspy that sets `aria-current` on the nav link for whichever
section is in view, using IntersectionObserver with a `-45% 0px -50% 0px` root margin, so
the highlight changes when a section reaches the middle of the viewport rather than the
top. The static `aria-current="page"` was removed from Home on `index.html` only,
because otherwise it competes with the scrollspy for the underline.

**Reveal animations make full-page screenshots look broken.** Sections below the fold
sit at `opacity:0` until IntersectionObserver fires, so a full-page capture shows them as
blank bands. This is a capture artifact, not a fault. Scroll the page before judging it.

## Members grid

`#people` on the home page. Square cards: a photograph with a name bar, and a hover or
focus state that swaps in a short bio. The last card is a dashed "Your name here" tile
linking to the enquiry form, so a thin list reads as an invitation rather than an
absence.

**The grid uses `auto-fit`, not `auto-fill`.** With `auto-fill` and two cards you get a
four-column grid with two empty tracks, which looks like something failed to load.
`auto-fit` collapses the empty tracks, so two cards sit as a deliberate pair. It lives
inside `.wrap--narrow`, which is what keeps those two cards at a sensible 355px rather
than stretching them across the full width. Add members and it reflows to three across
without any change.

**Touch devices get a stacked card, not the hover overlay.** An earlier version simply
hid the bio at `@media(hover:none)`, which meant every phone and tablet visitor saw a
name and nothing else: the bio was unreachable, not just hidden. The media query now
restacks the card so the photo, name, role and full bio all render in flow. Two traps if
you edit it: `.person img` must get `height:auto` there, because the base `height:100%`
resolves circularly once the card stops being a fixed square and the image paints over
the text; and backgrounds must be set to `transparent` explicitly, since the base card is
dark and the stacked version is white.

**Headless browsers lie about `hover`.** Chromium's headless shell reported
`(hover:none)` at desktop widths and `(hover:hover)` at 390px, so neither path can be
tested by viewport alone. Test the touch layout with a context created using
`has_touch=True, is_mobile=True`, and test the hover layout by checking computed styles
after `page.hover()` rather than by screenshotting, since `element.screenshot()` scrolls
and drops the hover state.

Lowest contrast in this component is 7.59:1, against an AA requirement of 4.5.

Publishing someone's photograph and career history is a commitment about a real person.
See section D of `COMMITMENTS.md`.

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
permission as title sponsor, taken from their published brand assets.
