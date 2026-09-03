# Yifan Sun — Academic Homepage Redesign

This branch contains a restrained, publication-first redesign of
[yifansun99.github.io](https://yifansun99.github.io), built from the open-source
[PRISM](https://github.com/xyjoey/PRISM) academic homepage starter.

## Status

The redesign is intentionally isolated from the current production homepage.
The GitHub Pages workflow is manual-only, so pushing this branch does not replace
the live site. Production deployment should happen only after visual review and
explicit approval.

## Local preview

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
```

The static site is exported to `out/` and can be hosted by GitHub Pages. When the
redesign is approved, it can replace the source on `main` while keeping the same
`yifansun99.github.io` domain.

## Content

- `content/config.toml` — identity, links, navigation, and site metadata
- `content/bio.md` — homepage biography
- `content/publications.bib` — publications and selected work
- `content/news.toml` — recent news
- `content/experience.toml` — industry and education
- `content/awards.toml` — honors and awards
- `content/services.toml` — academic service

## License

The underlying PRISM code remains available under its MIT license; see
[`LICENSE`](LICENSE).
