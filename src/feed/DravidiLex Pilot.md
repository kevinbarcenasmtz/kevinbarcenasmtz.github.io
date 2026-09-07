---
share: true
upload: src/feed
title: DravidiLex Pilot
date: 2026-09-02
description: A somewhat reflection of the work done to get a pilot version of DravidiLex running
---

DravidiLex is a collection of lexicons for the Dravidian language family of South Asia. This post won't be about the subject matter but rather the methodology of how we got the pilot up and running. The project was initially spearheaded by a colleague of mine in the Linguistic Research Center at UT Austin. Later on, I joined to help the development of the lexical data and collection of resources.

Part of why I'm writing this post is to discuss the ethics of using coding tools like Claude Code and Cursor CLI to contribute to language archiving and lexicography. I see it as a little backwards and as a tradeoff situation because while the usage of these tools allows for a productivity boost such as attesting dictionary entries from one source against another source (similar to a [data crosswalk](https://en.wikipedia.org/wiki/Schema_crosswalk)), the energy cost of that AI usage comes at the expense of the Global South and minority groups, the very communities we hope to serve by building these archives and lexicons. Honestly, I'm not sure if I'm writing this as a *discussion* or as a way to cope with the reality of the matter. Either way it's on my mind and I think it's better to write it down than to let it sit in my head for the upcoming days.

The main repository is [LRC-Lexicography](https://github.com/kevinbarcenasmtz/LRC-Lexicography). It's my own personal repo where I store Python scraper scripts (alongside general Python files), Jupyter Notebooks, datafiles of WIP lexicons, and docs (.md files that get stale pretty fast). 

For DravidiLex the initial step was to scrape two main sources:

1. [Dravidian Family Starling DB - Sergei Anatolyevich Starostin](https://starlingdb.org/cgi-bin/response.cgi?root=config&morpho=0&basename=%2Fdata%2Fdrav%2Fsdret&first=1&off=&sort=proto)
2. [A Dravidian Etymological Dictionary, Revised - Burrow, T and M. B. Emeneau](https://dsal.uchicago.edu/dictionaries/burrow/#gsc.tab=0)

Essentially the Starling source proposes possible Proto-forms and etymologies and the Dravidian Etymological Dictionary (DEDR) acts as the attestation, i.e. for a proto-form in Starling, do all the reflexes exist in DEDR. This tree-like validation was the main work of this pilot. With about 2,000 etyma to review and over 30,000 reflexes to attest, the work starts to seem a little daunting for a team of 2 with 1 project manager. That's essentially why the LRC-Lexicography exists, to try to automate as much validation possible between two sources. 

Attached below is a diagram I made for a poster session surrounding undergraduate research at my alma mater. It displays the methodology behind creating lexicons with the Linguistics Research Center. So far this pipeline has been used for DravidiLex, MayaLex, NahuatLex, and more to come most likely. 

![DravidiLex Pilot-1788595213256.webp](DravidiLex%20Pilot-1788595213256.webp)

The main pain point of this diagram lies at the **Validate** step - which is where the [triage-ded](https://github.com/kevinbarcenasmtz/LRC-Lexicography/blob/main/.claude/skills/triage-ded/SKILL.md) skill attempts to automate. Essentially, at this step the skill acts as a guided session that triages the mismatches between DEDR and Starling DB. Which surfaces issues that can arise among various areas: raw html scrape issue, and the parsing of that html to create xlsx entries. For the scrape of the DEDR (Burrow) corpus there is a `burrow_corpus.cleaned.json`, a ~5,700-entry JSON file that stores the parsed output of the Burrow DEDR (Dravidian Etymological Dictionary, Revised) HTML: for each DEDR entry, which languages/reflexes were extracted and what their attested forms are.

Below in the diagram there is a "regeneration" step which means re-running the parser over the raw scraped HTML (`burrow_corpus.json`) from scratch and overwriting the cleaned corpus file with the result. This step is only needed when a fix changes **what the parser extracts**, for example, fixing a regex pattern that was missing a language abbreviation, or handling an HTML markup quirk that caused a reflex to be dropped.

The `triage-ded` skill draws a specific distinction here:

- **Parser-side fix** (changes what gets pulled out of the raw HTML) → the corpus is now stale and **does** need regenerating, because the old cleaned file doesn't reflect the fix.
- **Matcher-side fix** (changes only how already-parsed Starling forms are compared against the DEDR corpus, e.g. normalization rules) → the corpus itself hasn't changed at all, so regenerating it would be a no-op ("zero-diff") and is explicitly skipped.

![DravidiLex Pilot 2026-09-05 01.07.36.svg](DravidiLex%20Pilot%202026-09-05%2001.07.36.svg)

I wanted to walk through a real skill invocation. In this example, two rows were flagged as mismatches during validation.
 
For the first row, after comparing the raw HTML (ground truth), the stored corpus entry, and a reparse of that entry, we concluded these two forms should actually be treated as a match. There's a transliteration difference between the Starling form and the DEDR form, but under our criteria that's not enough to count as a genuine divergence: it's a known transliteration convention, not a real mismatch. This is a matcher-side fix. It changes how forms are compared, not what gets extracted from the HTML, so it doesn't trigger a corpus regeneration. Concretely, we added a rule to our convention mapping: if two forms differ by exactly one character, and that character is a known convention-equivalent pair (like ẓ/r̤), we no longer flag it as a mismatch. That reduces the mismatch count on the next validation run.
 
The second row is a genuine divergence. After the same comparison (raw HTML, stored entry, reparse) there's no code fix that would let us treat these forms as the same. So we log it as a genuine divergence and move on for specialist review.
 
*Figure 1*

| DEDR # | Language  | Starling form | DEDR form | Resolution                                          |
| ------ | --------- | ------------- | --------- | --------------------------------------------------- |
| 84     | Malayalam | aṭa-maẓa      | aṭa-mar̤a | transliteration convention — reconciled             |
| 83     | Konda     | aḍi- (-t-)    | aṛk-      | genuine divergence — retained for specialist review |



All this said, the main use of AI in the development of DravidiLex falls under the **Validate** step. Anything that isn't able to be automated is then reviewed manually - especially between sessions of the skill invocations. There was a moment in the creation of the pilot where I felt the organization and orchestration of the python scripts was redundant and bloated. So, there's several commits where with AI, I refactored some scripts so there is a cleaner code repository. 

To keep track of the results and continuity, there is a running log of every fix, match-rate delta, and dead-ends across weeks of sessions. This is done by writing a proposed draft that's reviewed by me then written to the log. Additionally, the skill explicitly treats `genuine_divergence` entries as real findings worth keeping "for the thesis," so if any of these entries are used in academic scholarship, there's a transparent record of how they were identified and resolved.

There's also a different type of AI usage in this codebase: semantic tagging, which in the context of a lexicon refers to the semantic categories that words or forms fall into. Look below for an example.

*Figure 2*

| Etymon | Gloss         | LLM           | Embedding 1   | Embedding 2   | Review Priority         |
| ------ | ------------- | ------------- | ------------- | ------------- | ----------------------- |
| *ac-   | Mould (n.)    | To Mold, Form | To Mold, Form | To Mold, Form | Spot-check (unanimous)  |
| *ac-   | Thorn; to cut | To Cut        | Spear         | Sword         | Full review (LLM alone) |


This is something unique to our lexicon itself. This is not something from Starling DB or DEDR, which is why we needed to do this on our own. The semantic tag feature allows you to browse the lexicon thematically (all the words related to farming, kinship, weather, etc.). The nice part is that tags attach at the etymon level, not the individual reflex level, so the actual task is classifying about 2,211 reconstructed glosses rather than all 30,000+ attested forms. (This is due to the infrastructure of our website/application - while not perfect, it serves a purpose to allow semantic browsing.)

We ran three zero-shot passes over those glosses, each assigning a semantic field from Buck's _A Dictionary of Selected Synonyms in the Principal Indo-European Languages_ (1949):

- **v1**, a `all-MiniLM-L6-v2` sentence-transformer, embedding just the Starling proto gloss
- **v2**, a stronger `all-mpnet-base-v2` sentence-transformer, embedding both the gloss and an enriched document built from reflex meanings and Burrow DED attestation glosses
- **v3**, `claude-haiku-4-5`, classifying glosses generatively rather than by embedding similarity

The orchestration of these passes might make it seem like v1 and v2 are independent, but in reality v2 is explicitly built to load v1's prior choices and flag every row where the two disagree, so review effort concentrates there first. So it's less three blind judges and more two staged embedding generations, where the newer one diffs against the older, plus one separate LLM pass that stands apart from that lineage.

Also these predefined tags come from Buck's scheme mainly so DravidiLex lines up with IELex (our Indo-European lexicon) and the other lexicons in progress, not because it's the only or best option; future versions will likely support other tagging schemes.

All that said, I think any AI usage in a project or initiative should be transparent about it, especially now, when authenticity feels harder to trust than ever, between AI-generated videos, software, flyers, and everything else. That matters even more when the work involves low-resource or historically underserved communities. I've strayed a bit from the original topic of this post, but using AI right now feels like a double-edged sword. It may optimize and increase efficiency, but at the same time is that really needed in the digital humanities? There's a capitalistic instinct/nature to see metrics like efficiency and optimization go up, and people use them to justify AI use almost anywhere. I don't think that justification holds up in academia or the humanities, where projects and research are supposed to take the time they take. Some would argue the humanities should be exempt from productivity metrics altogether, and I agree.

And yet, everything I just described in this post is exactly that: using AI to move faster through work that would otherwise take a small team years. I don't think I've resolved that contradiction for myself, and I'm not sure this post is meant to resolve it either. I think it's meant to just say it out loud: I used these tools, here's exactly where and how, and I don't think that fact should be hidden or softened just because it complicates the argument I actually believe in.

---

For those curious about the [DravidiLex Pilot](https://lrc-test.la.utexas.edu/lexicon/dravidilex_pilot)

---

Listened to while writing this:
- [Habibi Funk // حبيبي فنك : All Women Artist Mix (Women's Day, 08.03.2022 )](https://youtu.be/JC4_FsfwSSA?si=unIaA6KreieUZ9NR)
- [The Roots of Chicha Vol2](https://www.youtube.com/watch?v=EmB8kp0jt-c)
- [Sheinbaum's Second State of the Union: Why It Matters - Ep 122](https://www.youtube.com/watch?v=K2K_79AbTmk)