# JARVIS HUD V5.5 — Data Layer Foundation

V5.5 keeps the V5.4.6 visual design but separates changing content from presentation.

## What changed
- One normalized `window.JARVIS_DATA` object drives the HUD.
- Today Important, weather, kids, calendar, sports, tips and weekend are rendered from the data layer.
- Dylan's hockey is intentionally NOT part of today's Kids data on Friday 02.10.2026.
- Hockey belongs to the Saturday Weekend module.
- The UI no longer needs hard-coded business data for these sections.
- `jarvis-data-layer-v5_5.js` documents the normalized gateway contract for the future live adapter.

## Next architecture step
A live gateway can replace `window.JARVIS_DATA` with fresh normalized data without changing the HUD components.
Do not put connector credentials or private tokens in the PWA.
