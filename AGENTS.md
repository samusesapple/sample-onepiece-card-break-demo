# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Design contract

- This is a proposal-only responsive main page. Keep the visible brand as `SAMPLE`; do not present it as a real store.
- The black/red live-card-break concept in `raredrop-onepiece-card-sample-concept.png` is the selected visual source.
- Use the locally stored official-card images only for the proposal. Preserve their SAMPLE watermarks and retain the footer scope note.
- Do not add authentication, payment, inventory, or live-stream integrations to this demo.
- Keep the YouTube floating button linked to `https://www.youtube.com`; user-menu entries are visual-only and must not add real authentication routes.
- The service ticker scrolls continuously with a linear CSS marquee and remains static for reduced-motion preferences.
- Use Pretendard Variable for all body, navigation, and product information. Keep the Impact display face only for the brand, hero/section headings, and live ticker.
- GitHub Pages builds with `BASE_PATH=/sample-onepiece-card-break-demo/` and deploys only `dist/client` through `.github/workflows/deploy-pages.yml`.
