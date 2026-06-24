# Google Analytics (GA4) for platouadv.com

Dette er en enkel sjekkliste for å måle trafikk på nettsiden. **Search Console** (i `GOOGLE-SEO.md`) viser søkeytelse; **Analytics** viser besøk, sidevisninger og hvor brukerne kommer fra.

---

## Steg 1 – Opprett GA4-konto og property

1. Gå til [analytics.google.com](https://analytics.google.com)
2. **Admin** (tannhjul nederst til venstre)
3. **Create account** (hvis du ikke har konto)
   - Kontonavn: f.eks. *Platou Advisory*
4. **Create property**
   - Property name: *platouadv.com*
   - Tidssone: *Oslo*
   - Valuta: *NOK*
5. Velg **Web** som datastrøm
6. Nettside-URL: `https://platouadv.com`
7. Stream name: f.eks. *Platou Advisory nettside*
8. Noter **Measurement ID** – den starter med `G-`, f.eks. `G-XXXXXXXXXX`

---

## Steg 2 – Legg inn sporingskode på nettsiden

Kopier Measurement ID og si fra – da kan den legges inn i `<head>` på alle sider.

Koden ser slik ut (bytt ut `G-XXXXXXXXXX`):

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Hvor:** rett etter `<head>` på `index.html` (og senere alle sider når full nettside lanseres).

---

## Steg 3 – Test at det fungerer

1. I GA4: **Admin → Data streams →** klikk web-strømmen → **View tag instructions**
2. Installer [Google Tag Assistant](https://tagassistant.google.com/) (Chrome-utvidelse), eller
3. Gå til **Reports → Realtime** i GA4
4. Åpne https://platouadv.com i et annet vindu
5. Du skal se minst **1 active user** innen et par minutter

---

## Steg 4 – Koble til Search Console (anbefalt)

1. GA4: **Admin → Product links → Search Console links**
2. **Link** → velg Search Console-property for `platouadv.com`
3. Da får du søkedata og nettsidedata samlet

*(Search Console må være satt opp først – se `GOOGLE-SEO.md`.)*

---

## Steg 5 – Nyttige rapporter å sjekke

| Rapport | Hva den viser |
|---------|----------------|
| **Realtime** | Besøk akkurat nå |
| **Reports → Acquisition → Traffic acquisition** | Google, direkte, LinkedIn osv. |
| **Reports → Engagement → Pages and screens** | Mest besøkte sider |
| **Reports → Demographics** | Land og enheter |

For en liten B2B-side er **ukentlig sjekk av trafikk og landingssider** mer enn nok i starten.

---

## Personvern (Norge / GDPR)

Nettsiden er en enkel bedriftsside uten innlogging. Likevel bør du:

1. **Informere** i personvernerklæring (når den finnes) at du bruker Google Analytics
2. Vurdere **cookie-banner** hvis du vil være streng på GDPR – mange små B2B-sider bruker GA4 uten banner, men det er et juridisk valg
3. I GA4: **Admin → Data settings → Data collection** – vurder å slå av Google Signals hvis du ikke trenger demografiske data

Google tilbyr også [Consent Mode](https://developers.google.com/tag-platform/security/guides/consent) hvis du legger inn cookie-løsning senere.

---

## Hva du *ikke* trenger nå

- **Universal Analytics (UA)** – avviklet; bruk kun **GA4**
- **Google Ads-kobling** – kun hvis du kjører annonser
- **E-commerce-sporing** – ikke relevant for denne siden

---

## Oppsummert rekkefølge

1. Opprett GA4 property → få `G-XXXXXXXXXX`
2. Legg inn gtag på nettsiden
3. Test med Realtime
4. Koble Search Console
5. Sjekk trafikk ukentlig

Send Measurement ID når du har den, så legges koden inn og pushes til GitHub Pages.
