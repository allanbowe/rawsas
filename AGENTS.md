# AGENTS.md

Guidance for AI agents (and humans) working in this repository.

## Project overview

Personal blog (rawsas.com) built with **Gatsby 5** + TypeScript + SCSS, deployed to
GitHub Pages via GitHub Actions.

## Before committing — always run

```bash
npm run lint   # eslint + prettier --check (CI fails on this!)
npm run build  # gatsby build — verifies pages generate correctly
```

If lint fails, fix with `npx eslint --ext .js,.jsx,.tsx --fix` and
`npx prettier --write .` rather than editing style by hand.

## Key commands

| Command         | Purpose                            |
| --------------- | ---------------------------------- |
| `npm start`     | Local dev server (gatsby develop)  |
| `npm run build` | Production build into `public/`    |
| `npm run lint`  | Code style check (same as CI)      |
| `npm run serve` | Serve the production build locally |

## Content conventions

- Blog posts live in `content/posts/YYYY-MM-DD-slug.md` with frontmatter:
  `title`, `date`, `path` (the URL slug), `previewImg`, `tags`.
- Images go in `content/images/`, PDFs/attachments in `content/resources/`.
- Post meta descriptions come from the remark `excerpt` field (see
  `src/templates/template.tsx`) — do NOT slice raw `html`.
- Page head tags use the Gatsby **Head API** (`export const Head`) via
  `src/components/meta/meta.tsx`. `react-helmet` was removed — do not re-add it.
- `static/CNAME` (`rawsas.com`) must exist — the deploy publishes exactly the
  contents of `public/`; without the CNAME the custom domain is dropped.

## CI/CD

- `.github/workflows/build_and_publish.yml` — on push to `master`: lint, build
  with `--prefix-paths`, deploy `public/` to `gh-pages` via
  `peaceiris/actions-gh-pages`.
- `.github/workflows/build_validation.yaml` — same checks on pull requests
  (no deploy).
- Actions are pinned to current majors (`checkout@v4`, `setup-node@v4`,
  Node 22). Old action versions break when GitHub retires deprecated APIs.

## Gotchas

- `gatsby-plugin-sass` is pinned to sass-loader v10 (legacy Sass API); the
  deprecation warnings are silenced in `gatsby-config.js` `sassOptions`.
  Don't "fix" them by upgrading sass-loader without upgrading the plugin.
- GraphQL queries must use the current sort/aggregation syntax
  (`sort: { frontmatter: { date: DESC } }`, `group(field: { ... })`).
- `src/types/gatsby-types.d.ts` is auto-generated — never edit by hand.
- Never commit `public/` or `.cache/` (build artefacts).
