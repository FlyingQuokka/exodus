---
name: hook-forge-kit
description: Operator's manual for the Hook Forge, Hook Forge Amplified, and Ad Forge Exodus workflows — import them, run them, understand every design decision and hack inside them (verbatim primer injection via formatter template, loops-as-double-pass, inert temperature on Genesis bots, bank+steering as the real hook primer), and install a brand's own hook primer (written fresh or ported with the MADLIBS process). Use when the user wants to import, run, adjust, debug, or re-brand these workflows, or asks how they work.
---

# Hook Forge Kit — Operator's Manual (for the AI)

You are operating two saved Exodus workflows built around a Genesis-style hook process. This file gives you the full architecture, every hack and why it exists, and the exact procedure to install a brand's own primer. All CLI commands are `npx @aicopycoders/exodus@beta <...>` run from the Exodus workspace folder. The `exodus-workflow` skill (if installed) documents the general workflow CLI; this file documents THESE two graphs.

## 1. The two graphs

**Hook Forge** (9 nodes): `idea` (brief input) → splits two ways. Lane PRIMED: `idea` → `inject-primer` (formatter whose template is the brand's hook-primer document with an `{{idea}}` slot at the bottom) → `hooks-primed` (bot `ad-hook-bot-1`, also wired to `hook-primer`, a primer node with `primerKind: hook`). Lane RAW: `idea` → `hooks-raw` (same bot, nothing else). Both bots: `loops: 3` with Level-3 escalation `loopInstructions`, `sessionMode: true`, doctrine in `customInstructions`. Both outputs → `sort` (prompt node) → one collected doc. Outputs: `sorted-hooks`, `primed-hooks`, `raw-hooks`.

**Hook Forge Amplified** (14 nodes): everything above, plus lane 3: `inject-primer.formatted` + both pools → `amp-assembly` (formatter whose template is a distilled hook-amplification craft brief, with slots `briefed_primer` / `primed_hooks` / `raw_hooks`) → fans into `amp-hookbot` (`ad-hook-bot-1`) and `amp-mario` (`mariobot`), both also wired to the `hook-primer` node. All four pools → `sort` (4 slots). Outputs add `amplified-hookbot` and `amplified-mario`.

**The sort step is a COLLECTOR, not an editor.** Its prompt orders it to include EVERY hook from every pool verbatim — no rewriting, no dedup, no dropping, duplicates listed as many times as they appear — organized by hook type with source tags and L1/L2/L3 grades. A human picks winners from the full list. If you edit that prompt, preserve this contract; the human selection step downstream depends on nothing being silently discarded.

Two separate hook workflows because **Exodus cannot run a partial graph** — there are no optional lanes. Import both; choosing which to `run` is the on/off switch for the amplification stage.

**Ad Forge** (16 nodes) — the downstream ad writer, fed by a human's picks from a hook run. Two brief inputs: `hooks` (the chosen hooks, verbatim — the graph never rewrites them) and `description` (what the ad is about). An `assemble` formatter merges them into one brief ordering the writer to follow directly from the hook(s). That brief fans into FOUR bots in parallel — `mario-1`/`mario-2` (slug `mariobot`) and `infeed-1`/`infeed-2` (`slug: custom`, `customSlug: in-feed-vsl-bot`) — all four also wired to a primer node (`primerKind: body`, `primerAwareness: unawareProblemAware`), so the body copy runs on the brand's stored cold-traffic body primer. Each bot's output passes through its own per-variant formatter (template: selected hooks at the top, body copy underneath) into its own Output node. Four separate deliverables: `mario-v1`, `mario-v2`, `infeed-v1`, `infeed-v2` — compare and choose.

## 2. The hacks and platform facts (do not "fix" these without understanding them)

1. **Verbatim primer injection rides a formatter template.** Exodus has no "custom primer document" node — primer nodes only read the four server-stored primer kinds (body/hook/headline/summary), and no CLI verb writes a hook-primer *document*. So the primer doc is embedded as a formatter `template` (mode: template) with one `{{idea}}` slot at the bottom. The bot receives primer + idea as its **brief**, exactly like running the primer manually in a chat. Templates cap at **20,000 chars**; slot *content* is uncapped — big payloads arrive through slots, not templates. **As shipped, this template is a labeled placeholder** — the kit contains no real primer; installing one is §4.
2. **"Runs 3x in the same chat" = `loops: 3` + `loopInstructions`.** The bot drafts, then critiques-and-rewrites its own set twice in one conversation. `loops` counts TOTAL passes; `loopInstructions[0]` is reserved (never read — the first draft runs unsteered), entries 2 and 3 steer the rewrites ("push to Level 3 / more vicious / stronger"). **Only the final set flows downstream**; intermediate passes are visible in the run log. Don't convert this to chained bot nodes — that would be three fresh chats, not one escalating one.
3. **`temperature` is INERT on Genesis-routed bots** (any curated slug like `ad-hook-bot-1` / `mariobot`) — the Genesis server decides its own sampling. It's set to 1 anyway (harmless, future-proof). The *effective* heat comes from `customInstructions` and the loop steering. Only `prompt` nodes (the sorter) honor temperature — the sorter runs at 0.2 on purpose (collecting must not rewrite hooks).
4. **The platform's REAL hook primer = the Hook bank + hooks-lane steering.** There is no hook-primer doc field. The `hook-primer` node (`primerKind: hook`) reads what the dashboard's Primers page shows: the Hook bank entries plus the always/never steering. The `describe` prerequisite "✓ stored hook primer" means that store is populated for the active brand. The formatter injection (#1) and this native primer are deliberately BOTH wired — doc + steering + exemplars stack.
5. **`sessionMode: true` on every bot** — each run leaves live chat sessions you can continue by hand: `session list`, then `session chat <sessionId> "push hook 4 further"`.
6. **The amplified lane's craft brief is bundled as `amplification-craft.md`.** It lives inside `amp-assembly`'s template (the three `{{...}}` slots sit in the skeleton below it). Edit the file, re-splice, re-import to change what the amp bots are taught.
7. **MarioBot in the amp lane is intentional.** It's a body-copy bot by trade; its `customInstructions` pin it to "amplified HOOKS only, no long-form body". Don't swap it out as a "bug".
8. **JSON contracts in this kit have `workflowId`/`updatedAt` stripped** so a plain `workflow import <file>` always CREATES — it can never clobber an existing workflow. To edit an imported one in place later: export it (`workflow export "<name>" --out f.yaml`), edit, re-import with `--update <id>`; the export's fresh `updatedAt` is the required drift guard. On a 409, re-export and reapply — never force.
9. **Ad Forge embeds no primer and needs no install** — its primer node reads the brand's stored BODY primer server-side, so its prerequisite is the brand being onboarded (`exodus primer`, or `foundation` on older setups), not the hook primer. Its `validate`/`import` prints a warning that the custom slug `in-feed-vsl-bot` can't be verified client-side — expected: the client can't see the Genesis registry, and that slug is the same In-feed VSL bot the Exodus genesis pipeline itself runs. The first run confirms it; if Genesis ever rejects it, swap `customSlug` for the current slug. To aim ads at warmer traffic, change the primer node's `primerAwareness` to `solutionProductAware`. And the hooks the user pastes flow VERBATIM to the top of every deliverable via the per-variant formatters — never let an edit route them through a rewriting step.

## 3. Import and run

```
npx @aicopycoders/exodus@beta workflow import hook-forge.json
npx @aicopycoders/exodus@beta workflow import hook-forge-amplified.json
npx @aicopycoders/exodus@beta workflow import ad-forge.json
npx @aicopycoders/exodus@beta workflow describe "Hook Forge Amplified"   # check ✓/✗ hook primer
npx @aicopycoders/exodus@beta workflow describe "Ad Forge"               # check ✓/✗ body primer
npx @aicopycoders/exodus@beta workflow run "Hook Forge" --input brief="raw idea" --wait --out ./deliverables
npx @aicopycoders/exodus@beta workflow run "Ad Forge" --input hooks="<chosen hooks verbatim>" --input description="<what the ad is about>" --wait
```

`--wait` streams to terminal; without it, poll `workflow status --id <runId>`. Read the `Deliveries:` block — a "Succeeded" run with an `unfulfilled` slot did NOT deliver what it promised. `--out` saves every delivered slot as a file. Don't burn a run while the primer slot is still the placeholder.

## 4. Install the brand's primer (required before real runs)

Replace three things — the embedded doc, the steering, and the bank:

**Step 1 — Get the primer document.** Two paths: (a) the member writes their own — the rules their hooks must follow plus 15–25 proven exemplar hooks, ending with a marker line where the run's idea should be appended; or (b) they have access to a proven primer from another market — run the MADLIBS process (bundled: `madlibs-SKILL.md`) with that primer as the source asset and the member's 10–20 winning hooks/ads as the target payload. Same skeleton, their market's payload, equal-or-greater voltage.

**Step 2 — Splice it into both workflows.** Either edit the `inject-primer` node's template on the dashboard canvas (paste the doc, put `{{idea}}` at the bottom where the idea-marker line was), or script it: read the doc, replace the marker line with `{{idea}}`, assert exactly one `{{` remains, indent every line 8 spaces, place it as the `template: |` body of `inject-primer`, then `workflow validate` → `workflow import --update <id>`. The template must stay under 20,000 chars. The formatter's ports derive from its template, so the `{{idea}}` slot name must not change (an inbound edge targets port `idea`).

**Step 3 — Set the native primer (server-side, per-brand).** Distill the primer's RULES into steering, and seed its EXEMPLAR hooks into the bank:

```
npx @aicopycoders/exodus@beta primer steering --lane hooks --always-file always.txt --never-file never.txt
npx @aicopycoders/exodus@beta bank promote hooks --file one-exemplar.txt    # once per exemplar
npx @aicopycoders/exodus@beta bank list                                     # confirm counts
```

Facts that matter: `bank promote` is ADD-ONLY (deleting stale entries is dashboard-only — Primers page, trash icons); every promote fires a `winner-promoted` event, so check `workflow triggers` on any trigger-bearing workflow before mass-seeding; steering + a populated bank is what flips `describe` to **✓ stored hook primer**.

**Never** overwrite the brand's body primers (unaware/problem-aware, solution/product-aware) with a hook doc — the body-copy writers read those.

## 5. Smaller adjustments — where each knob lives

- **Escalation wording** ("push to Level 3...") → both bots' `loopInstructions` entries 2–3 (≤2000 chars each). More passes: `loops` up to 5, add matching entries.
- **The doctrine** (Level ladder, WHO-CARES rule, tangibility, news-read) → each bot's `customInstructions` (≤4000 chars).
- **Collection behavior** → the `sort` prompt node's `promptText`. Preserve the verbatim-everything contract (§1); its `{{slot}}` names must keep matching the incoming edges.
- **Different bots** → `config.slug` on a bot node (catalog: `workflow bots`); `slug: custom` + `customSlug` reaches unlisted Genesis bots; `slug: prompt` + `promptText` makes the prompt itself the bot (and honors temperature).
- **Send results to Google Drive** → any output node's `config.drive: { folderId: "<id>" }`.
- **Deposit hooks into the bank automatically** → an output node's `config.deposit` (shape must match the bank exactly — validate will tell you).
- After ANY edit: `workflow validate <file>` until clean, then `import --update <id>`, then eyeball the canvas at `/workflows`.

## 6. Troubleshooting

- `describe` shows **✗ hook primer** → the brand's Hook bank/steering are empty — run §4 step 3.
- Run "Succeeded" but a slot `unfulfilled` → read `workflow status --id <runId>` for the failing node before re-running.
- Import 409 on `--update` → the workflow changed since export: re-export, reapply, re-import. Never force.
- Hooks come out generic or off-market → the primer install (§4) wasn't done, the placeholder is still in the template, or a previous brand's entries are still in the Hook bank (delete on the dashboard).
- `validate` errors name the node, port, and remedy — fix exactly what they say; the formatter's ports come from its template, so a renamed slot breaks its edges (`unknown-port`).
