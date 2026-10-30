# Design QA — SAMPLE One Piece Card Break Proposal

## Source and scope

- Selected visual source: `/Users/sunghyunkwan/Desktop/raredrop-onepiece-card-sample-concept.png`
- Scope: responsive proposal-only main page.
- Local card assets: four card images visibly provided in `https://onepiece-cardgame.kr/cardlist.do` on 2026-10-30. Their original SAMPLE watermarks remain intact.

## Verified

- Desktop: black/red hero, live status, card fan, four live-break cards, and proposal-only footer match the selected visual direction.
- Mobile: 390 × 844 layout keeps the header, hero CTA, readable live panel, and stacked product cards.
- Interaction: a slot purchase decrements local slot state, increments CART, and presents a status message.
- Navigation polish: the header user icon exposes visual-only 마이페이지/로그인 entries; the YouTube floating control links to `https://www.youtube.com`; CTA arrows use shared SVG chevron-right icons.
- Motion: duplicated ticker groups animate continuously with linear `transform` marquee motion; computed transforms changed over a 700ms check. Reduced-motion preference pauses the movement.
- Browser console: no errors.

## Result

Passed for local proposal preview. This is not connected to authentication, payment, inventory, shipping, or a live-stream backend.
