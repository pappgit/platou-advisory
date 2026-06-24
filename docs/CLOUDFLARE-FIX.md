# Cloudflare – fiks redirect til anbud

## Problemet

`www.platouadv.com` og lenker som `/kontakt.html` på rotdomenet havner på **anbud.platouadv.com**.

**Årsak:** Det ligger sannsynligvis en **Redirect Rule** i Cloudflare som sender all trafikk på `platouadv.com` og `www.platouadv.com` til anbud-appen.

---

## Steg 1 – Slett gammel redirect (viktigst)

1. Logg inn på [dash.cloudflare.com](https://dash.cloudflare.com)
2. Velg **platouadv.com**
3. Gå til **Rules** → **Redirect Rules** (eller **Bulk Redirects**)
4. Finn regelen som ligner på:
   - **When:** `platouadv.com` eller `www.platouadv.com`
   - **Then:** Redirect til `https://anbud.platouadv.com`
5. **Slett** eller **deaktiver** den regelen

Sjekk også **Rules** → **Page Rules** (eldre kontoer) for tilsvarende redirect.

---

## Steg 2 – Bekreft DNS (skal se slik ut)

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | `@` | `185.199.108.153` (+ .109, .110, .111) | DNS only (grå sky) |
| CNAME | `www` | `pappgit.github.io` | DNS only |
| CNAME | `anbud` | `pappgit.github.io` | DNS only |

**Ikke rør** `send` / `resend._domainkey` (e-post).

---

## Steg 3 – Valgfritt: send www til rotdomenet

Etter at gammel redirect er borte, kan du legge til en **ny** regel:

| Felt | Verdi |
|------|-------|
| When | `www.platouadv.com` |
| Type | Dynamic eller Static |
| URL | `https://platouadv.com` |
| Status | 301 |

Da vil `www.platouadv.com` vise samme side som `platouadv.com`.

---

## Steg 4 – Test (etter 5–15 min)

| URL | Skal vise |
|-----|-----------|
| https://platouadv.com | «Ny nettside kommer snart» |
| https://www.platouadv.com | Samme (eller redirect til apex) |
| https://anbud.platouadv.com | Anbud-verktøyet (uendret) |
| https://platouadv.com/kontakt.html | 404 (siden er flyttet til `/site/`) |

---

## Merk

- Forsiden (`index.html`) har **ingen** Kontakt-lenke – kun «kommer snart»-melding.
- Hvis du fortsatt ser gammel side med meny: hard refresh (**Cmd+Shift+R**) eller prøv inkognito.
