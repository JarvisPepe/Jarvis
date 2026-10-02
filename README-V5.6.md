# JARVIS HUD V5.6.0

V5.6 introduces the Live Gateway interface while preserving the V5.4/V5.5 visual design.

## What changed
- UI remains presentation-only.
- Normalized JARVIS data contract remains the single source for rendering.
- Added explicit LIVE / SYNC / SNAPSHOT state.
- Added refresh control.
- Added configurable HTTPS `liveEndpoint`.
- Live payload is normalized before rendering.
- If the gateway is unavailable, JARVIS safely falls back to the local snapshot.
- No credentials, tokens or private connector secrets are stored in the PWA.

## Gateway contract
Set `JARVIS_CONFIG.liveEndpoint` in `index.html` to an HTTPS endpoint returning either the normalized object directly or `{ "data": { ... } }`.

The endpoint should provide:
`meta`, `todayImportant`, `weather`, `kids`, `calendar`, `weekend`, `sports`, `tips`, `sourceStatus`.

## Important
The PWA cannot directly access ChatGPT's private connectors. The live endpoint is therefore a separate trusted gateway that must be hosted by the user and explicitly supplied with permitted data.
