---
name: exodus-setup
description: Set up, organize, extend, or audit an Exodus workspace — the recommended folder architecture (ONE workspace per person, brand subfolders inside it, dashboard as the source of truth). Handles fresh installs on a new machine, adding a brand folder, setting up the user's OWN custom skills and per-brand rules alongside the exodus-* pack, deciding whether something needs a new brief / brand / workspace / account, migrating a legacy single-brand layout, and health-checking an existing folder. Only invoke when the user has explicitly invoked Exodus: they said "exodus" in the request ("exodus, set up my workspace", "set up exodus on this machine", "exodus, add a brand", "exodus, where do my custom skills go", "exodus, should this be a new brand or a new folder", "exodus, check my folder setup"), named this skill or /exodus-setup, ran an `npx @aicopycoders/exodus@beta` command, or the `exodus` hub skill routed here. Never claim generic folder-organization or project-scaffolding requests ("organize my folders", "set up my project") — in shared folders those may belong to the user's other tools; if the user did not say exodus, this skill is not for them. This skill owns the LOCAL folder architecture only: brand switching/inspection belongs to `exodus-brand`, and brand onboarding content (primers, foundations) belongs to `exodus-primer` / `exodus-foundation`.
---

# Exodus Workspace Setup

The architecture in one line: **the dashboard is the truth, the workspace is the machine, brand folders are the fuel.**

| Layer | Holds | Lives |
|---|---|---|
| **Account** | Brands, primers, run history, creative library | Exodus dashboard (server) |
| **Workspace** | Skills, frameworks, keys, CLI state | ONE folder per operator |
| **Brand folder** | Profile mirror, operator notes, outputs | Subfolder per brand, cheap, unlimited |

The rule that settles every layout question: **workspaces follow people; brands are data.** One person (or one team sharing everything) = one workspace holding all their brands. Never one install per brand.

## The target layout

```
Exodus/                          ← the workspace (stable home, e.g. ~/Exodus)
├── CLAUDE.md                    ← vendor-managed (rewritten by init/update)
├── CLAUDE.local.md              ← user's standing instructions — never touched by Exodus
├── PIPELINES.md                 ← vendor-managed cheat sheet
├── .env                         ← keys (gitignored, never printed, never synced/shared)
├── .exodus/state.json           ← CLI state + active-brand pointer
├── .claude/skills/
│   ├── exodus-*                 ← vendor skills — READ-ONLY, refreshed by update
│   └── <user-named>/            ← the user's own skills — anything NOT prefixed exodus-
├── references/                  ← vendor framework library
└── <brand-slug>/                ← one per brand, marked by .exodus-brand.json
    ├── CLAUDE.md                ← optional: that brand's house rules (user-owned)
    ├── state/brand-profile.md   ← dashboard mirror above the boundary marker · user notes below
    └── output/
```

Invariants you are setting up or restoring:

- Exactly one workspace per operator; every brand is a subfolder with `.exodus-brand.json`.
- `exodus-*` skills, `references/`, `CLAUDE.md`, `PIPELINES.md` are vendor territory — never hand-edited.
- User customization goes in user-named skills, `CLAUDE.local.md`, per-brand `CLAUDE.md`, and below-the-marker profile notes.
- **Voice lives in the dashboard, process lives in the folder**: brand voice/steering belongs in the brand's primer (server-side, via `exodus-primer` / `exodus-foundation`), so every pipeline and teammate inherits it. Local files customize how the *operator* works, never how the *brand* sounds.
- Secrets exist only in `.env`, which stays gitignored.

## Step 0 — read the situation before touching anything

Read-only recon, then route. Don't ask the user what the folder can tell you.

1. `ls -a` the current directory. Look for: `.exodus/state.json` (you're at a workspace root), `.exodus-brand.json` (you're *inside* a brand folder — the workspace is the parent), `.claude/skills/exodus-*` (skill pack present), root-level `state/` + `output/` next to brand subfolders (legacy leftovers).
2. If a workspace exists: `npx @aicopycoders/exodus@beta brand current` and `brand list` to see what the CLI sees. `npx @aicopycoders/exodus@beta doctor` if anything looks off.
3. Ask ONE thing the disk can't tell you, only when relevant: "any other Exodus folders on this machine?" (Never go scanning the user's drive for them.)

Then route: no workspace → **Path A**. Workspace exists, user wants a brand → **Path B**. User wants their own skills/prompts wired in → **Path C**. "Is my setup right?" → **Path D**. "Should X be a new folder/brand?" → **Path E**.

## Path A — fresh machine

1. **Pick the home.** Default `~/Exodus` (or the user's preferred name). Requirements: a stable path, NOT inside another project's repo, and warn if it sits in a cloud-synced location (Dropbox/Drive folders; on macOS, Desktop and Documents often sync via iCloud) — synced workspaces cause pointer fights and secret sprawl if shared.
2. **Prereqs.** `node -v` works; the user has their `EXODUS_API_KEY` from the dashboard (Settings → Claude Code walks them through install and keys). If they don't have it, send them there — never ask them to paste a key into chat.
3. **Initialize.** From the workspace folder: `npx @aicopycoders/exodus@beta init` — pulls the skill pack, docs, and a subfolder for every brand the account owns. Then `npx @aicopycoders/exodus@beta keys pull` to sync provider/image keys into `.env`.
4. **Verify.** `npx @aicopycoders/exodus@beta doctor`, then `brand current`. Confirm the tree matches the target layout above.
5. **Optional but recommended:** `git init` the workspace (the shipped `.gitignore` already excludes `.env` and outputs). Versioning makes every `update` auditable via diff and protects the user's own skills and notes.
6. **Create `CLAUDE.local.md`** if absent, seeded with one line inviting the user's standing instructions. Tour the layout in two sentences; offer to write `WORKSPACE-GUIDE.md` (the plain-English explainer) into the root for their team.

## Path B — add a brand

- New brand: `npx @aicopycoders/exodus@beta brand create "<name>"` — creates it server-side, switches to it, scaffolds its subfolder. Created on the dashboard instead? Run `npx @aicopycoders/exodus@beta init` to pull its subfolder down.
- Confirm the subfolder + `.exodus-brand.json` exist and `brand current` resolves to it.
- Remind: commands run from inside the subfolder target that brand automatically — the folder wins over the pointer.
- Content onboarding (winning ads → primer) is NOT this skill: hand off to `exodus-primer` (or `exodus-foundation` when there are no winning ads yet).
- Never create a brand folder by hand-copying another brand's folder — profiles and markers will lie about what they contain.

## Path C — the user's own layer (custom skills, prompts, rules)

Where user-built things go, by scope:

| The user wants to… | Put it in |
|---|---|
| Add their own repeatable workflow ("my client report format") | `.claude/skills/<their-name>/SKILL.md` — any name NOT starting `exodus-` |
| Give Claude standing personal instructions | `CLAUDE.local.md` |
| Set house rules for ONE brand ("never mention price for Glow") | that brand folder's `CLAUDE.md`, or notes below the marker in its `brand-profile.md` |
| Change how a brand SOUNDS (voice, steering, dos/don'ts) | the brand's **primer on the dashboard** — route to `exodus-primer` / `exodus-foundation`, not a local file |
| Team-shared automation | dashboard Workflows — route to `exodus-workflow` |

Rules to enforce while building:

- **Extend, don't fork.** A user skill should *invoke* vendor skills ("run /exodus-genesis, then apply my format") rather than copy their internals — forks silently stop receiving updates. Editing an `exodus-*` skill in place is always wrong; if the user already did, move their changes into an own-named skill and restore the vendor copy with `update`.
- Scaffold their first skill for them: `.claude/skills/<name>/SKILL.md` with a frontmatter `name` + `description` (the description is what makes it trigger) and their process as the body.
- If a "customization" is really brand voice, say so plainly and route it to the primer.

## Path D — audit an existing setup

Walk this checklist, report findings, fix with consent:

| Symptom | Fix |
|---|---|
| Multiple Exodus installs on one machine (user confirms) | Consolidate: keep one home, run `init` there, move user-named skills + below-marker notes over, retire the others. Brands need no migration — they're on the dashboard. |
| Root-level `state/` + `output/` alongside brand subfolders | Legacy leftovers. If empty, offer to delete; if not, move contents into the right brand folder first. |
| Hand-edited `exodus-*` skill or `CLAUDE.md` | Extract their edits to an own-named skill / `CLAUDE.local.md`, then `update` to restore vendor files. |
| Brand voice rules in local files | Move to that brand's primer (`exodus-primer`), leave a pointer note. |
| `.env` committed, copied around, or in a shared/synced folder | Stop the bleeding: gitignore it, remove copies, advise rotating keys on the dashboard. |
| Workspace shared between two people via file sync | Split: each operator gets their own workspace + key; the dashboard is the shared layer. |
| Stale pack | `npx @aicopycoders/exodus@beta update` — but FIRST check `CLAUDE.md` for user-added content and move it to `CLAUDE.local.md`, because update rewrites `CLAUDE.md`. |

Always run `doctor` at the end and report clean/remaining items.

## Path E — "should this be a new folder?"

Answer from the ladder, with conviction:

| What's actually new | Verdict |
|---|---|
| Product, offer, angle | **Neither** — it's a brief parameter on the next run |
| Voice or audience | **New brand** (`brand create`) — if a "product" has its own voice and audience, it's secretly a brand |
| A person/client who must not see other brands, a sandbox, or a separate account | **New workspace** |
| Company, billing | **New account** |

"I have lots of brands" never justifies a new workspace. Split on people and permissions, not on brand count.

## Hard rules (every path)

1. Never edit, rename, or delete anything under `exodus-*` skills, `references/`, or vendor docs — customization goes through Path C.
2. Never print, paste, or relocate key values; `.env` is written only by `keys pull` or the user.
3. Never delete a brand folder, outputs, or below-marker notes without explicit confirmation — show what will happen first.
4. One workspace per operator. When someone asks you to wire two people into one folder, route them to two workspaces + the shared dashboard instead, and say why.
5. State which situation you detected and what you're doing; don't quiz the user about things `ls` and `brand current` already answered.
