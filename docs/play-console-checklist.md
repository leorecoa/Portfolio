# Play Console Publishing Checklist

Checklist for preparing the Leorecoa Dev Portfolio PWA to be packaged as an Android app using Trusted Web Activity/Bubblewrap and published through Google Play Console.

## Current status

* [x] `AGENTS.md` added to guide safe AI-assisted changes
* [x] PWA manifest added
* [x] SVG app icons added
* [x] PNG app icons added
* [x] Maskable icons added
* [x] Public privacy policy page added
* [x] Vercel production deployment active

## Production URLs

* Portfolio: `https://portfolio-vert-alpha-h2mwblh056.vercel.app/`
* Manifest: `https://portfolio-vert-alpha-h2mwblh056.vercel.app/manifest.json`
* Privacy policy: `https://portfolio-vert-alpha-h2mwblh056.vercel.app/privacy.html`

## PWA requirements

* [x] `public/manifest.json`
* [x] `start_url`
* [x] `scope`
* [x] `display: standalone`
* [x] `theme_color`
* [x] `background_color`
* [x] PNG icon 192x192
* [x] PNG icon 512x512
* [x] Maskable PNG icon 192x192
* [x] Maskable PNG icon 512x512
* [x] Privacy policy URL

## Android/TWA preparation

* [ ] Install Bubblewrap locally
* [ ] Initialize the TWA project from the production manifest
* [ ] Review generated Android project metadata
* [ ] Configure app name
* [ ] Configure package name
* [ ] Configure launcher icons
* [ ] Configure signing key
* [ ] Generate Android App Bundle `.aab`
* [ ] Test generated app locally if possible

## Suggested app information

### App name

`Leorecoa Dev Portfolio`

### Short description

`Portfólio profissional com projetos, stack técnica e links de Leandro Jessé.`

### Full description

`Leorecoa Dev Portfolio apresenta o portfólio profissional de Leandro Jessé, com projetos de desenvolvimento web, stack técnica, links profissionais e informações de contato. O app reúne experiências em React, TypeScript, FastAPI, Supabase, PostgreSQL e aplicações orientadas a produto.`

## Google Play Console checklist

* [ ] Create app in Play Console
* [ ] Select default language: Portuguese (Brazil)
* [ ] Select app type: App
* [ ] Select free app
* [ ] Add app name
* [ ] Add short description
* [ ] Add full description
* [ ] Add app icon
* [ ] Add feature graphic
* [ ] Add phone screenshots
* [ ] Add privacy policy URL
* [ ] Complete Data Safety form
* [ ] Complete Content Rating questionnaire
* [ ] Define target audience
* [ ] Add contact email
* [ ] Upload `.aab`
* [ ] Create internal test release
* [ ] Review warnings and policy requirements
* [ ] Submit for review

## Data Safety notes

Current app behavior:

* No first-party login
* No first-party payments
* No direct personal data collection
* No first-party tracking cookies
* Contains external links to GitHub, LinkedIn, Vercel and published projects

If analytics, forms, authentication, payments or tracking are added in the future, both the privacy policy and Play Console Data Safety answers must be updated.

## Validation commands

```bash
npm run build
```

Expected result:

```txt
build completed successfully
```

## Next step

Generate the Android/TWA project with Bubblewrap after confirming that the production manifest and privacy policy URL are accessible.
