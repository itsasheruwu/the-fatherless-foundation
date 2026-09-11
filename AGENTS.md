# Project guidance

- Work directly in this saved local project. Do not create worktrees.
- The deployable website is `public/`. Preview with `npm run dev`. Keep the graphite, white, and ice-blue design and write concise, natural copy.
- Describe programs as planned until confirmed. Do not invent nonprofit status, partnerships, impact, or working donations.
- Verify affected interactions and desktop/mobile layouts before publishing. A deployment is complete only after checking the live custom domain.

## Git synchronization

- Treat a feature, completed fix, or meaningful design/content update as a substantial change.
- Before substantial work, and immediately after completing a substantial change, fetch and pull the latest `origin/main`. Preserve all local work, including untracked files: use a named stash when needed, rebase onto `origin/main`, then restore it. Keep the stash until restoration is verified. Resolve conflicts without discarding local or upstream changes.
- Once the substantial change is synchronized and verified, immediately commit its relevant files and push to `main`. Do not wait for another request. Keep unrelated local work out of the commit.
- Never force-push, hard-reset, or clean away local files. If a push is rejected, fetch and integrate the new upstream changes, verify, and retry.
