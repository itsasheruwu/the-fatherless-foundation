# The Fatherless Foundation

Responsive early-stage website for an initiative exploring support for single mothers and their children.

## Local preview

Run `npm run dev`, then open http://localhost:4173. No build dependencies are needed. Deploy only `public/`.

## Design

`design/homepage-mockup-v2.png` is the implemented imagegen concept: graphite, silver, ice blue, bold type and a three-pillar foundation emblem. The family illustration from the first direction is used in the hero; the founders photo sits in Our Story. `design/archive-v1/` and `design/homepage-mockup.png` remain local reference.

## Behavior and scope

Responsive navigation, native expandable FAQs, copy-link sharing, focus states, reduced-motion support, social metadata and sitemap. No forms collect personal data. There is no donation processing or aid application workflow. Programs are clearly planned. The site makes no registered nonprofit, confirmed partnership or impact claims.

## Deploy

Cloudflare Workers Builds is connected to `itsasheruwu/the-fatherless-foundation`. Every push or merged pull request to `main` automatically deploys `public/` to https://thefatherlessfoundation.com. Other branches do not deploy.

The connection is managed in Cloudflare → Workers & Pages → the-fatherless-foundation → Settings → Builds. It uses the repository root, no build command, and `npx wrangler deploy`; `wrangler.jsonc` selects `public/` as the static assets directory. Deployment credentials are managed by Cloudflare and are not stored in this repository.

Check the build status in Cloudflare or the GitHub commit checks, then verify the live custom domain. A failed build leaves the previous deployment live. Manual fallback: run `npx wrangler deploy` with authorized credentials.

Fonts: Google Fonts, DM Sans and Barlow Condensed, with local fallbacks. Generated artwork is illustrative.
