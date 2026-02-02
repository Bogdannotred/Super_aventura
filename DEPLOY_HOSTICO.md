# Cum să postezi site-ul pe Hostico.ro

Site-ul tău este compus din două părți:
1. **Website-ul Principal** (ceea ce văd vizitatorii).
2. **Sanity Studio** (unde te loghezi tu să modifici conținutul).

Trebuie să le tratezi puțin diferit.

---

## Partea 1: Website-ul Principal (Frontend)

Hostico oferă găzduire clasică (cPanel), care este perfectă pentru site-ul tău.

### Pasul 1: Construiește versiunea "de producție"
În terminalul proiectului principal (`SuperAventura`), rulează:

```bash
npm run build
```

Asta va crea un folder nou numit `dist`. Aici se află tot site-ul tău optimizat și gata de pus pe net.

### Pasul 2: Urcă fișierele pe Hostico
1. Intră în **cPanel** la Hostico (sau folosește un program FTP gen FileZilla).
2. Mergi în **File Manager** -> **public_html**.
3. Șterge ce e acolo (dacă e gol sau are doar fișiere default).
4. Urcă **conținutul** folderului `dist` (nu folderul în sine, ci fișierele din el: `index.html`, `assets`, etc.).

Acum site-ul tău ar trebui să se încarce dacă accesezi domeniul tău (ex: `superaventura.ro`).

---

## Partea 2: Sanity Studio (Admin)

Ai două opțiuni aici. Recomand Opțiunea A pentru că e cea mai simplă.

### Opțiunea A: Găzduire gratuită la Sanity (Recomandat)
Sanity îți oferă hosting gratuit pentru partea de administrare.

1. Deschide un terminal în folderul studio (`cd studio`).
2. Rulează:
   ```bash
   npx sanity deploy
   ```
3. Alege un nume (ex: `superaventura`).
4. Studio-ul tău va fi accesibil la: `https://superaventura.sanity.studio`.
Te vei loga acolo ca să adaugi evenimente.

### Opțiunea B: Pe Hostico (Subfolder)
Dacă vrei neapărat să fie pe `site-ul-tau.ro/studio`:

1. În folderul `studio`, rulează `npm run build`.
2. Se va crea un folder `dist` (în interiorul `studio`).
3. Pe Hostico, în `public_html`, creează un folder nou `studio`.
4. Urcă conținutul din `studio/dist` în `public_html/studio`.

---

## IMPORTANT: Setări Finale (CORS)

După ce site-ul e online, imaginile și evenimentele **NU vor apărea** până nu faci asta:

1. Trebuie să spui Sanity că domeniul tău e sigur.
2. Mergi la [Sanity Dashboard > API > CORS](https://www.sanity.io/manage/personal/project/t3jgdmda/api#cors).
3. Adaugă domeniul tău real (ex: `https://www.superaventura.ro`).
4. Bifează **Allow credentials**.

Dacă ai ales Opțiunea B pentru Studio, adaugă și `https://www.superaventura.ro/studio`.

Gata! Site-ul e online.
