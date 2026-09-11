# The Fatherless Foundation

Responsive early-stage website for an initiative exploring support for single mothers and their children.

## Local preview

Run `npm run dev`, then open http://localhost:4173. No build dependencies are needed. Deploy only `public/`.

## Design

`design/homepage-mockup-v2.png` is the implemented imagegen concept: graphite, silver, ice blue, bold type and a three-pillar foundation emblem. `public/assets/foundation-pillars.jpg` is the generated standalone hero artwork. The rejected initial direction is preserved in `design/archive-v1/` and `design/homepage-mockup.png` for local reference and is not deployed.

## Behavior and scope

Responsive navigation, native expandable FAQs, copy-link sharing, focus states, reduced-motion support, social metadata and sitemap. No forms collect personal data. There is no donation processing or aid application workflow. Programs are clearly planned. The site makes no registered nonprofit, confirmed partnership or impact claims.

## Deploy

Cloudflare Workers Static Assets. Upload the contents of `public/` in the Cloudflare dashboard, or run `npx wrangler deploy` with authorized credentials. Custom domain: https://thefatherlessfoundation.com.

Fonts: Google Fonts, DM Sans and Barlow Condensed, with local fallbacks. Generated artwork is illustrative.
