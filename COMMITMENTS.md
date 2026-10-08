# Commitments to confirm before launch

**Status: UNCONFIRMED. Do not remove the site-wide `noindex` from `_headers` until
everything in this file is either signed off or struck out.**

The site currently makes specific promises to sponsors, members and form submitters.
None of them came from a brief. They were written to make the copy persuasive, and they
read as settled policy because that is how good copy reads. They are a drafting
proposal, nothing more.

They are not indexed and nobody outside has been sent to the site, so the cost of
changing them now is zero. The cost of leaving them unconfirmed and attaching the real
domain is that they become published positions of an organisation that never agreed
them, which is worse than having no terms at all.

**The one that matters most: there is no written agreement with Klarvant.** Section A
publishes contract terms for a deal that exists informally. If anything in section A is
not what Klarvant understood, the website is where they will find that out, which is the
worst possible way for them to find out.

How to use this: work down each section, mark every row **Confirmed**, **Reworded** or
**Struck**, and send it back. Anything not marked Confirmed gets removed before the
domain is attached.

---

## A. Sponsor terms: needs Klarvant, and whoever holds the relationship

These describe a commercial agreement. Highest risk in the file.

| # | The claim as published | Where | Marked |
|---|---|---|---|
| A1 | "You do not get the membership list. **Not in any tier, not for any amount.**" | `partners.html:143` | |
| A2 | "No editorial control, no member list, no lead generation" (title sponsor tier) | `partners.html:106` | |
| A3 | "You can walk away. **Annual terms, no multi-year lock-in**, and we will say so publicly and without rancour if a partnership ends." | `partners.html:146` | |
| A4 | "You do not get speaking slots by default." | `partners.html:144` | |
| ~~A5~~ | ~~"buys no member list, no editorial control and no guaranteed speaking slots" in the meta description~~ **Removed** when the description was shortened to fit search results (October 2026). The same claims remain in the page body as A1, A2 and A4. | `partners.html` | **Resolved** |
| A6 | "that support buys no editorial control. Guidance published by the community stays vendor-neutral, **including in the categories Klarvant competes in**." | `partners.html:85` | |
| A7 | "Invitation to the annual practitioner roundtable" (title and programme tiers) | `partners.html:105`, `:116` | |
| A8 | "One partner, annual commitment" / "A small number, annual commitment" | `partners.html:101`, `:112` | |
| A9 | "Sponsorship does not buy the membership list, editorial control, or guaranteed speaking slots." | `llms.txt:80` | |

**A5 no longer applies.** The meta description no longer carries sponsor terms, so they no
longer appear in Google results or link previews. They still appear on the page itself.

**A6 names Klarvant specifically** as a company whose products the community will not
endorse. Defensible as an integrity position, and genuinely to their credit if they
agreed to it. Worth checking they know it is there.

**A3 and A8 assert a contract length.** If the arrangement has no agreed term, the site
is inventing one.

**A7 promises an event** that does not yet exist and has no date, budget or venue.

---

## B. Governance and operating norms: needs GTA central, or whoever chairs this

Decisions for the group to take. The website currently announces them as already taken.

| # | The claim as published | Where | Marked |
|---|---|---|---|
| B1 | "Most sessions are practitioner-only and held under **Chatham House rules** so people can speak plainly." | `events.html:65` | |
| B2 | "Chatham House rules by default." | `focus-areas.html:112`, `llms.txt:52` | |
| B3 | "**No selling into the membership.** Sponsors fund the programme. They do not get a list, a lead-gen pipeline, or a speaking slot dressed up as a session." | `about.html:117` | |
| B4 | "**Vendor-neutral by default.** Guidance published by the community names categories and practices rather than products, including our sponsors' products." | `about.html:118` | |
| B5 | "**Practitioners set the agenda.** What the community works on is decided by the people doing the work, not by whoever is funding it that year." | `about.html:119` | |
| B6 | "Periodic" practitioner calls and "Quarterly" deep-dive roundtables (cadence corrected October 2026 from "monthly" and "small and often") | `events.html` timeline, `llms.txt` | |

**B1 and B2 are a confidentiality undertaking**, not a tone-of-voice choice. Chatham
House has a specific meaning and people will rely on it when deciding what to say in a
session. If it is not being enforced, it should not be promised.

**B6 is a delivery commitment** with a stated frequency, for a group that has not yet
run its first event. It is also in the events page meta description, so it travels.

"Give first" on `about.html:116` is **not** in this list. That is GTA's own published
norm and is being repeated rather than invented.

---

## C. Data handling: needs whoever will actually receive the enquiries

| # | The claim as published | Where | Marked |
|---|---|---|---|
| ~~C1~~ | ~~"We do not add anyone to a mailing list without asking, and we do not pass details to sponsors."~~ **Struck and replaced.** | `get-involved.html` | **Resolved** |
| C2 | "We keep a GTA Cyber register, separate from other Global Tech Advocates lists. What you send may be used in accordance with the Global Tech Advocates privacy policy." | `get-involved.html:144` | |

**C1 is resolved.** It was an invented promise made by an entity with no privacy policy.
It has been replaced with the pattern GTA Innovation Funding uses: point at the central
Global Tech Advocates privacy policy, and state that this group's register is kept
separate from other GTA lists. That is the parent organisation's own approach, so it
needs no separate sign-off from anyone here, and it stops the site inventing data policy.

**C2 still needs one confirmation**, and it is a small one: that a GTA Cyber register
genuinely will be kept separate from other GTA lists, and that whoever receives the
enquiries knows the central privacy policy is the one being pointed at. If GTA central
would rather these went onto a shared list, the sentence needs to say so instead.

The form collects name, email, organisation, GTA network, area of interest and free
text: identifiable information about named security practitioners at named employers.
That is why the destination matters more here than on a normal contact form, and why
the form backend is still an open decision. As it stands the form posts to a
third-party processor (Formspree, endpoint not yet created) which would store those
submissions on its own infrastructure.

---

## D. A named individual: needs Luis, and nobody else

The members grid on the home page publishes a real person's photograph, career history
and LinkedIn link. That is personal data about an identifiable individual, put on a
public website, so it belongs in this file even though it is the least contentious item
in it.

| # | The claim as published | Where | Marked |
|---|---|---|---|
| D1 | Photograph of Luis Novella, self-hosted at `assets/people/luis-novella.jpg` | `index.html` | |
| D2 | "Thirty years across energy, cybersecurity, insurance, FinTech and consulting... Senior roles at KPMG, Accenture, The Hackett Group and Areva. Chartered Director and FIoD." | `index.html` | |
| D3 | The role label **"Founding member"** | `index.html` | |
| D4 | Link to his personal LinkedIn profile | `index.html` | |

**D1 needs to be his to give.** The image came from his LinkedIn profile. If a
photographer holds the copyright, LinkedIn's terms do not transfer a licence to us.
Easiest fix if in doubt: ask him to send the file he wants used.

**D3 is a different kind of claim from the Klarvant one.** "Founding title sponsor" was
struck because it described contract terms nobody had agreed. "Founding member" is a
statement of fact about who was there at the start, and if that is true it can stay. It
is worth a moment's thought only because he is currently the *only* named member, which
makes the label carry more weight than it would in a list of ten.

**Nothing here needs GTA central.** This one is a conversation with one person.

## E. Summit photographs: needs the photographer, and a nod from Russ

| # | The claim as published | Where | Marked |
|---|---|---|---|
| E1 | Two photographs from the GTA Global Summit, Istanbul, 7 October 2026 | `/news`, home page `#news`, social card | |
| E2 | Russ Shaw CBE named and pictured, captioned as founder of Global Tech Advocates | `/news`, home page `#news` | |
| E3 | "GTA Cyber launched in Istanbul on 7 October 2026" (banner) and "founding member Luis Novella" (article) | `index.html`, `news.html` | |

**E1: who took them?** They arrived via WhatsApp, so the photographer is unknown here. If it
was the summit's official photographer or HİB's team, they may want a credit line, and the
organisers may have their own approved set. A credit in the caption is a one-line change.

**E2 is low risk** (a public figure, on stage, at a public event, captioned factually), but
he is the person you are sending this site to, so it costs nothing to mention it.

**E3 replaced an earlier unconfirmed claim.** The banner previously said "launched in
September 2026", which nobody had confirmed. It now uses the Istanbul date, which the
published programme supports.

## What to do with each outcome

**Confirmed**: leave as is. Note who confirmed it and when, at the bottom of this file,
so the next person does not reopen it.

**Reworded**: send the replacement wording. Several of these appear in two or three
places including meta descriptions and `llms.txt`, so every change has to be applied
everywhere at once or the site contradicts itself. The Where column lists all locations.

**Struck**: the copy is removed. Removing a promise does not leave a hole: the
sponsorship page still works if it says what sponsors get and stays quiet on what they
do not, and it is straightforward to add the firewall language later, once it is real
and someone has agreed to enforce it.

---

## Sign-off

| Section | Owner | Date | Notes |
|---|---|---|---|
| A. Sponsor terms | | | |
| B. Governance | | | |
| C. Data handling | | | |
| D. Luis Novella's details | | | |
| E. Summit photographs | | | |

Once all three are signed, delete the `X-Robots-Tag: noindex` block from `_headers` and
this gate is cleared.
