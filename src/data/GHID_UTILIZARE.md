# Ghid de Adăugare Evenimente - Super Aventura

Deoarece site-ul nu este conectat la o bază de date externă complexă, adăugarea evenimentelor se face simplu, editând un singur fișier.

## Pasul 1: Deschide Fișierul de Evenimente
Navighează în folderul proiectului la:
`src/data/events.js`

## Pasul 2: Adaugă un Eveniment Nou
În acest fișier vei găsi o listă (un array) cu evenimente. Pentru a adăuga unul nou, copiază modelul de mai jos și adaugă-l la începutul sau sfârșitul listei:

```javascript
    {
        _id: 'un-id-unic-aici', // Poate fi orice text unic, ex: 'concurs-2025'
        title: 'Titlul Evenimentului Tău',
        date: '2025-06-15T10:00:00Z', // Format: An-Luna-Zi T Ora:Minut:00Z
        description: 'Descrierea evenimentului. Aici poți scrie detaliile...',
        image: '/poze/eveniment-nou.jpg' // Vezi Pasul 3 pentru imagini
    },
```

## Pasul 3: Adăugarea Imaginilor (Opțional)
Dacă vrei ca evenimentul să aibă o poză:
1. Pune poza ta în folderul `public/poze/` din proiect.
2. În fișierul `events.js`, la câmpul `image`, pune calea: `'/poze/numele-pozei-tale.jpg'`.

Dacă lași `image: null`, se va afișa o iconiță standard.

## Exemplu Complet

Dacă vrei să adaugi un "Concurs de Caiac" pe 1 Mai 2025:

1. Pui poza `caiac.jpg` în `public/poze/`.
2. Adaugi în `src/data/events.js`:

```javascript
    {
        _id: 'caiac-2025',
        title: 'Concurs de Caiac',
        date: '2025-05-01T09:00:00Z',
        description: 'Vino să te întreci pe lacul Suplacu de Barcău!',
        image: '/poze/caiac.jpg'
    },
```

Salvează fișierul și site-ul se va actualiza instantaneu!
