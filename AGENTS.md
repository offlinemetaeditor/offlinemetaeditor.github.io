## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## This site

Documentation of Offline Meta Editor (the Windows apps `mae-gui.exe` and `mae.exe`), in English and Brazilian
Portuguese, published on GitHub Pages at https://offlinemetaeditor.github.io.

- English pages are in `src/content/docs/`, Portuguese twins at the same path under `src/content/docs/pt-br/`.
  Change both. A new page also needs a sidebar entry in `astro.config.mjs`.
- Links in Portuguese pages start with `/pt-br/`. Anchors follow the translated headings.
- The app's interface is English only: button, menu and window names stay in English in both languages.
- No em dashes or en dashes as punctuation; plain, short sentences.
- The download link is `RELEASES_URL` in `src/config.ts`.
- `npm run build` must pass before publishing; a push to `main` publishes (`.github/workflows/deploy.yml`).
