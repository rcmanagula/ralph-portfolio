# Ralph Christian Managula — Portfolio

Production implementation of the Ralph Managula Portfolio Design System.

**Stack:** Next.js 15 (App Router) · React 18 · Tailwind CSS · Framer Motion · Lucide React

**Modes:** Single app, client-side `data-mode` toggle on `<html>` with 480ms glitch-fade transition between Terminal and Corporate views.

## Run

```bash
cd app
npm install
npm run dev
```

Open <http://localhost:3000>. Use the floating `TERMINAL / CORPORATE` pill (top-center in terminal mode, inside the nav in corporate mode) to switch modes. Preference persists via `localStorage`.

## Structure

```
src/
  app/
    layout.jsx          ← <html data-mode> + ModeProvider
    page.jsx            ← renders <Portfolio />
    globals.css         ← design tokens (terminal + corporate palettes)
  lib/
    resume.js           ← single source of truth for résumé data
    ModeContext.jsx     ← useMode hook + glitch transition state
  components/
    Portfolio.jsx       ← top-level mode switch
    shared/             ← ModeToggle, ModeTransition, BootSequence
    terminal/           ← TerminalApp + CLI components
    corporate/          ← CorporateApp + executive components
public/
  Ralph_Christian_Managula_Resume.pdf
```

## Design rules honored

- Two parallel palettes share semantic CSS variables; nothing reads raw hex.
- Terminal Mode: 0px radii everywhere, no drop shadows, neon-glow elevation only.
- Corporate Mode: 6/10px radii, two-tier shadows, IBM Plex Serif headlines + IBM Plex Sans body, JetBrains Mono retained for tool names.
- All tool names (`Burp Suite`, `Frida`, `Ghidra`, …) sourced verbatim from the résumé.
- No emoji. Unicode glyphs (`▌ ●  ✓`) used as terminal iconography; Lucide stroked icons in Corporate.
- Easing curve `cubic-bezier(0.2, 0.7, 0.2, 1)` on every transition; no springs.
