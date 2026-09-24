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

## A. Sponsor terms — needs Klarvant, and whoever holds the relationship

These describe a commercial agreement. Highest risk in the file.

| # | The claim as published | Where | Marked |
|---|---|---|---|
| A1 | "You do not get the membership list. **Not in any tier, not for any amount.**" | `partners.html:143` | |
| A2 | "No editorial control, no member list, no lead generation" (title sponsor tier) | `partners.html:106` | |
| A3 | "You can walk away. **Annual terms, no multi-year lock-in**, and we will say so publicly and without rancour if a partnership ends." | `partners.html:146` | |
| A4 | "You do not get speaking slots by default." | `partners.html:144` | |
| A5 | "buys no member list, no editorial control and **no guaranteed speaking slots**" | `partners.html:7` and `:12` | |
| A6 | "that support buys no editorial control. Guidance published by the community stays vendor-neutral, **including in the categories Klarvant competes in**." | `partners.html:85` | |
| A7 | "Invitation to the annual practitioner roundtable" (title and programme tiers) | `partners.html:105`, `:116` | |
| A8 | "One partner, annual commitment" / "A small number, annual commitment" | `partners.html:101`, `:112` | |
| A9 | "Sponsorship does not buy the membership list, editorial control, or guaranteed speaking slots." | `llms.txt:80` | |

**A5 is the urgent one.** It is the meta description, so it is what appears in Google
results and in the preview card when anyone shares the partners page in Slack, LinkedIn
or email. It reaches people who never open the page.

**A6 names Klarvant specifically** as a company whose products the community will not
endorse. Defensible as an integrity position, and genuinely to their credit if they
agreed to it. Worth checking they know it is there.

**A3 and A8 assert a contract length.** If the arrangement has no agreed term, the site
is inventing one.

**A7 promises an event** that does not yet exist and has no date, budget or venue.

---

## B. Governance and operating norms — needs GTA central, or whoever chairs this

Decisions for the group to take. The website currently announces them as already taken.

| # | The claim as published | Where | Marked |
|---|---|---|---|
| B1 | "Most sessions are practitioner-only and held under **Chatham House rules** so people can speak plainly." | `events.html:65` | |
| B2 | "Chatham House rules by default." | `focus-areas.html:112`, `llms.txt:52` | |
| B3 | "**No selling into the membership.** Sponsors fund the programme. They do not get a list, a lead-gen pipeline, or a speaking slot dressed up as a session." | `about.html:117` | |
| B4 | "**Vendor-neutral by default.** Guidance published by the community names categories and practices rather than products, including our sponsors' products." | `about.html:118` | |
| B5 | "**Practitioners set the agenda.** What the community works on is decided by the people doing the work, not by whoever is funding it that year." | `about.html:119` | |
| B6 | "monthly practitioner calls, quarterly deep-dive roundtables" | `llms.txt:67`, `events.html:7`, `:12` | |

**B1 and B2 are a confidentiality undertaking**, not a tone-of-voice choice. Chatham
House has a specific meaning and people will rely on it when deciding what to say in a
session. If it is not being enforced, it should not be promised.

**B6 is a delivery commitment** with a stated frequency, for a group that has not yet
run its first event. It is also in the events page meta description, so it travels.

"Give first" on `about.html:116` is **not** in this list. That is GTA's own published
norm and is being repeated rather than invented.

---

## C. Data handling — needs whoever will actually receive the enquiries

| # | The claim as published | Where | Marked |
|---|---|---|---|
| C1 | "We do not add anyone to a mailing list without asking, and **we do not pass details to sponsors**." | `get-involved.html:144` | |

The form collects name, email, organisation, GTA network, area of interest and free
text. That is identifiable information about named security practitioners at named
employers.

C1 is a privacy representation made by an entity with no privacy policy, about a form
with no agreed destination and no decided retention period. It is also currently
inaccurate in spirit: the form posts to a third-party processor (Formspree, endpoint not
yet created) which stores submissions on its own infrastructure.

Three things need deciding together, and the wording follows from them, not the other
way round:

1. Where submissions go, and who can read them.
2. How long they are kept.
3. Whether a privacy notice is needed at all, which depends on 1 and 2.

Until then C1 should either be removed or narrowed to something demonstrably true, such
as naming the processor.

---

## What to do with each outcome

**Confirmed** — leave as is. Note who confirmed it and when, at the bottom of this file,
so the next person does not reopen it.

**Reworded** — send the replacement wording. Several of these appear in two or three
places including meta descriptions and `llms.txt`, so every change has to be applied
everywhere at once or the site contradicts itself. The Where column lists all locations.

**Struck** — the copy is removed. Removing a promise does not leave a hole: the
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

Once all three are signed, delete the `X-Robots-Tag: noindex` block from `_headers` and
this gate is cleared.
