# Platou Advisory

Enkel og ren nettside for Platou Advisory – rådgivning innen forretningsutvikling, analyser og prosessforbedringer.

## Struktur

```
├── index.html          # Offentlig forside (under utvikling)
├── site/               # Utkast – ikke indeksert (noindex)
├── docs/               # Intern dokumentasjon – ikke indeksert
├── css/styles.css      # Designsystem
├── js/main.js          # Navigasjon og header
└── assets/
    ├── brand/            # Logoer og favicon (SVG)
    └── images/           # Fotografier
```

## Lokal forhåndsvisning

Åpne `index.html` direkte i nettleseren, eller kjør en enkel lokal server:

```bash
python3 -m http.server 8000
```

Gå til [http://localhost:8000](http://localhost:8000).

## Publisering på GitHub Pages

1. Opprett et nytt repository på GitHub (f.eks. `platou-advisory`).
2. Push koden:

```bash
git init
git add .
git commit -m "Legg til Platou Advisory nettside"
git branch -M main
git remote add origin git@github.com:<brukernavn>/platou-advisory.git
git push -u origin main
```

3. Gå til **Settings → Pages** i repositoryet.
4. Under **Build and deployment**, velg **Deploy from a branch**.
5. Velg branch `main` og mappe `/ (root)`.
6. Lagre. Nettsiden blir tilgjengelig på `https://<brukernavn>.github.io/platou-advisory/`.

## Design

Farger og typografi følger designbriefen:

| Element | Farge |
|---------|-------|
| Marine (primær) | `#143C8C` |
| Aksent blå | `#2E5FD0` |
| Bakgrunn | `#F8F9FC` |
| Tekst | `#0B1F47` |

Font: [Archivo](https://fonts.google.com/specimen/Archivo) (overskrifter) og [Inter](https://fonts.google.com/specimen/Inter) (brødtekst)

## Tilpasning

- **Kontaktinfo**: Legges til i `site/kontakt.html` ved lansering.
- **Bilder**: Hero og seksjonsbilder lastes fra Unsplash. Bytt til egne bilder ved å erstatte URL-ene i HTML-filene.
- **Tekst**: All innholdstekst ligger direkte i HTML-filene og kan redigeres der.
