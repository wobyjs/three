---
name: dv-cli-session-state-bug
description: dv CLI session file doesn't properly track per-profile page selections, causing parallel captures to fail
metadata:
  type: feedback
---

dv CLI has a session state bug: the `.dv-session.json` file stores only one `currentPageId` and one `port`, not per-profile page IDs. When running parallel captures with multiple profiles (4, 5, 6), `dv new` creates a page but `dv screenshot` fails with "No page found" because the session state is shared and the page ID from one profile conflicts with another.

**Why:** The dv CLI session file design assumes single-profile usage but the multi-profile architecture requires per-profile state.

**How to apply:** When using dv CLI for batch operations, use a single profile (profile-6) instead of parallel profiles. For parallel operations, fix dv CLI to store per-profile page IDs in session file, or use direct Chrome DevTools MCP instead of dv CLI wrapper.