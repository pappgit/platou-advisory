# Platou Advisory

Nettside for Platou Advisory – rådgivning innen forretningsutvikling, analyser og prosessforbedringer.

**Live:** https://platouadv.com

## Struktur

```
├── index.html          # Forside
├── tjenester.html      # Tjenester
├── tilnaerming.html    # Tilnærming
├── om-oss.html         # Om oss
├── kontakt.html        # Kontakt
├── css/styles.css      # Designsystem
├── js/main.js          # Navigasjon og header
└── assets/
    ├── brand/          # Logoer og favicon (SVG)
    └── images/         # Fotografier
```

## Lokal forhåndsvisning

```bash
python3 -m http.server 8000
```

Gå til [http://localhost:8000](http://localhost:8000).

## Publisering

Nettsiden deployes automatisk via **GitHub Pages** fra `main`-branchen til `platouadv.com` (Cloudflare DNS).

## Design

| Element | Farge |
|---------|-------|
| Marine (primær) | `#143C8C` |
| Aksent blå | `#2E5FD0` |
| Bakgrunn | `#F8F9FC` |
| Tekst | `#0B1F47` |

Font: [Archivo](https://fonts.google.com/specimen/Archivo) (overskrifter) og [Inter](https://fonts.google.com/specimen/Inter) (brødtekst)

## Dokumentasjon

- `docs/GOOGLE-SEO.md` – Search Console og indeksering
- `docs/GOOGLE-ANALYTICS.md` – GA4-oppsett
- `docs/EMAIL-ROUTING.md` – E-post via Cloudflare
