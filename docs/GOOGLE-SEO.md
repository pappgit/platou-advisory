# Google-indeksering for platouadv.com

## Steg 1 – Google Search Console

1. Gå til [search.google.com/search-console](https://search.google.com/search-console)
2. Klikk **Add property**
3. Velg **Domain** og skriv inn: `platouadv.com`
4. Verifiser via **DNS** (anbefalt):
   - Google gir en TXT-post, f.eks. `google-site-verification=...`
   - Legg den inn i **Cloudflare → DNS → Add record**:
     - Type: **TXT**
     - Name: `@`
     - Content: (verifiseringskoden fra Google)
     - Proxy: DNS only
5. Klikk **Verify** i Google

## Steg 2 – Send inn sitemap

1. I Search Console: **Sitemaps** (venstremeny)
2. Skriv inn: `sitemap.xml`
3. Klikk **Submit**

Sitemap-URL: https://platouadv.com/sitemap.xml

## Steg 3 – Be om indeksering

1. Gå til **URL Inspection** (øverst)
2. Skriv inn: `https://platouadv.com/`
3. Klikk **Request indexing**

## Steg 4 – Google Business Profile (valgfritt, anbefalt)

Opprett eller oppdater bedriftsprofil på [business.google.com](https://business.google.com) med:
- Navn: Platou Advisory
- Nettside: https://platouadv.com
- Kategori: Rådgivning / Management consulting
- Beskrivelse med ord som *forretningsutvikling* og *forretningsutvikler*

## Hva er lagt inn på nettsiden

- SEO-tittel og meta-beskrivelse med relevante søkeord
- `sitemap.xml` og `robots.txt`
- Strukturert data (Schema.org) for ProfessionalService
- Open Graph for deling i sosiale medier

## Viktig å vite

- Siden viser «kommer snart» – Google kan indeksere den, men rangering på konkurransetunge ord som *forretningsutvikling* krever mer innhold.
- Når den fulle nettsiden lanseres (fra `site-draft`-branchen), bør sitemap utvides og indeksering be om på nytt.
- Indeksering tar typisk **noen dager til flere uker**.
