# Platou Advisory

Nettside for Platou Advisory – rådgivning innen forretningsutvikling, analyser og prosessforbedringer.

**Live:** https://platouadv.com (viser «under utvikling»)

Den komplette nettsiden ligger på branchen **`site-draft`** og kan lanseres på nytt ved behov.

## Struktur (main – offentlig)

```
├── index.html          # Under utvikling-forside
├── css/construction.css
└── assets/brand/       # Logoer og favicon
```

## Lokal forhåndsvisning

```bash
python3 -m http.server 8000
```

## Forhåndsvisning av full nettside

```bash
git checkout site-draft
python3 -m http.server 8000
# Åpne http://localhost:8000/site/
```

## Publisering

Nettsiden deployes automatisk via **GitHub Pages** fra `main`-branchen til `platouadv.com`.

## Dokumentasjon

- `docs/GOOGLE-SEO.md` – Search Console og indeksering
- `docs/GOOGLE-ANALYTICS.md` – GA4-oppsett
- `docs/EMAIL-ROUTING.md` – E-post via Cloudflare
