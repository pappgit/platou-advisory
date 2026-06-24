# E-post – Cloudflare Email Routing

Videresending av `@platouadv.com` til privat e-post via Cloudflare (gratis).

> **Merk:** Dette er kun *mottak/videresending*. Utsending fra anbud-appen går fortsatt via **Resend** (`noreply@platouadv.com`).

---

## Steg 1 – Aktiver Email Routing

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **platouadv.com**
2. **Email** → **Email Routing**
3. **Get started** / **Onboard domain**
4. **Add records and enable**

Cloudflare legger til MX-poster på `@` automatisk.

---

## Steg 2 – Verifiser mottaker (din private e-post)

1. **Email Routing** → **Destination addresses** → **Add**
2. Skriv inn din private e-post
3. Åpne bekreftelsesmailen fra Cloudflare → **Verify email address**

---

## Steg 3 – Opprett videresendingsregler

For hver adresse du vil bruke:

1. **Routing rules** → **Create routing rule**
2. **Custom address:** f.eks. `post` (blir `post@platouadv.com`)
3. **Action:** Send to an email
4. **Destination:** din verifiserte private e-post
5. **Save**

Anbefalt minimum:
- `post@platouadv.com`
- `kontakt@platouadv.com`

Valgfritt catch-all (alle ukjente adresser):
- **Custom address:** `*` (catch-all)
- **Destination:** samme private e-post

---

## Steg 4 – Sjekk DNS etter aktivering

Under **DNS → Records** skal du se nye poster for `@`, typisk:

| Type | Name | Formål |
|------|------|--------|
| MX | `@` | Mottak via Cloudflare |
| TXT | `@` | SPF for routing |

### Viktig: Resend (utsending) må fortsatt fungere

Du har allerede Resend-poster for **utsending**:

| Post | Formål |
|------|--------|
| `send` MX/TXT | Resend |
| `resend._domainkey` | DKIM utsending |

Hvis Cloudflare **overskriver** SPF på `@`, slå sammen til én SPF-post, f.eks.:

```
v=spf1 include:_spf.mx.cloudflare.net include:amazonses.com ~all
```

(Sjekk nøyaktig `include:` for Resend i [Resend Dashboard → Domains → platouadv.com](https://resend.com/domains).)

**Ikke slett** `resend._domainkey` eller `send`-postene.

---

## Steg 5 – Test

1. Send e-post fra f.eks. Gmail til `post@platouadv.com`
2. Sjekk at den kommer frem til private innboksen (også søppelpost)
3. Test at anbud-appen fortsatt kan sende (Resend)

---

## Svare som post@platouadv.com?

Email Routing videresender **inn** – svar går fra Gmail-adressen din, ikke `post@`.

For å svare *som* `@platouadv.com` senere:
- Gmail → **Send mail as** + Resend SMTP, eller
- Google Workspace

---

## Legge e-post på nettsiden

Når routing fungerer, oppdater `site/kontakt.html` på `site-draft`-branchen med f.eks. `post@platouadv.com`.
