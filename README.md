# Platou Advisory

Enkel og ren nettside for Platou Advisory – rådgivning innen forretningsutvikling, analyser og prosessforbedringer.

## Struktur

```
├── index.html          # Forside
├── tjenester.html      # Tjenester
├── tilnaerming.html    # Vår tilnærming
├── om-oss.html         # Om oss
├── kontakt.html        # Kontakt
├── css/styles.css      # Designsystem
├── js/main.js          # Navigasjon og header
└── assets/images/      # Logo og favicons
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
| Marine (primær) | `#1C2F4A` |
| Sand/beige (aksent) | `#B8ADA2` |
| Bakgrunn | `#F8F7F4` |
| Tekst | `#2E3135` |

Font: [Inter](https://fonts.google.com/specimen/Inter)

## Tilpasning

- **Kontaktinfo**: Oppdater telefon, e-post og adresse i `kontakt.html`.
- **Bilder**: Hero og seksjonsbilder lastes fra Unsplash. Bytt til egne bilder ved å erstatte URL-ene i HTML-filene.
- **Tekst**: All innholdstekst ligger direkte i HTML-filene og kan redigeres der.
