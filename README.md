# offlinemetaeditor.github.io

Documentation of Offline Meta Editor, in English and Brazilian Portuguese, published at
<https://offlinemetaeditor.github.io>. Built with [Astro Starlight](https://starlight.astro.build).

## Where things are

| Path | What it is |
|---|---|
| `src/content/docs/` | English pages (served at `/`) |
| `src/content/docs/pt-br/` | The same pages in Portuguese (served at `/pt-br/`), with the same file names |
| `src/content/i18n/` | Extra interface strings (the footer note) per language |
| `src/config.ts` | The download link (`RELEASES_URL`) |
| `src/components/` | Footer, download button and the map of the editor's window |
| `src/assets/`, `public/` | Logo, favicons |
| `astro.config.mjs` | Site title, languages and sidebar |

A page added in English needs its Portuguese twin at the same path under `pt-br/`, and an entry in the
sidebar in `astro.config.mjs`. Until the twin exists, `/pt-br/` shows the English page with a notice.
Links inside Portuguese pages start with `/pt-br/`.

## Work on it

```powershell
npm install
npm run dev       # http://localhost:4321, reloads on save
npm run build     # the site in dist/, with the search index
npm run preview   # serve dist/ to check the build
```

## Publish

The repository must be named `offlinemetaeditor.github.io`, under the GitHub account or organization
`offlinemetaeditor`.

1. Push this folder to the repository's `main` branch.
2. In the repository, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site (`.github/workflows/deploy.yml`). The Actions tab shows
   each run.

Downloads: attach `mae-gui.exe` and `mae.exe` to a release of this repository (Releases → Draft a new
release). The pages link to the latest release; change `RELEASES_URL` in `src/config.ts` to point elsewhere.
