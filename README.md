# Nocturna

Un quiz de personalitate Halloween în română, cu 22 de întrebări, 24 de creaturi originale și rezultate explicabile. Funcționează integral în browser, fără cont sau backend.

## Pornire

Necesită Node.js 22.12+ și pnpm 11+.

```bash
pnpm install
pnpm dev
```

Deschide adresa afișată de Vite, de obicei `http://localhost:5173`.

## Verificare și versiune de producție

```bash
pnpm test
pnpm build
pnpm preview
```

După build, fișierele pentru publicare sunt în `dist/`. Publică-le la rădăcina unui domeniu pe un server static cu HTTPS. Instalarea PWA și accesul offline devin disponibile după prima încărcare online. Poți instala aplicația din meniul browserului.

`preview.png` arată ecranul de pornire pe desktop.

## Cum funcționează

- Fiecare variantă adaugă puncte la două sau trei dintre cele șapte trăsături: curaj, empatie, mister, libertate, rațiune, ambiție și umor.
- Scorurile sunt așezate pe o scară de la 0 la 10 și comparate cu profilurile creaturilor. Cele două trăsături definitorii ale fiecărei creaturi au pondere 1,7×. Potrivirea este o asemănare de joc, nu un test psihologic.
- Progresul și răspunsurile sunt codificate în URL și salvate și în `localStorage` pentru reluare. Nu se transmit către un server. URL-ul curent poate dezvălui răspunsurile celui care îl primește; butonul „Distribuie rezultatul” creează un link separat cu doar creatura și procentul.
- Întrebările și creaturile sunt în `src/data.ts`, iar calculul este în `src/scoring.ts`.

## Ilustrații

Cele 24 de portrete din `public/creatures-atlas.png` și `public/creatures-atlas-2.png` au fost create pentru acest proiect. Primul atlas folosește cele cinci imagini oferite de utilizator drept referință de atmosferă; al doilea păstrează aceeași familie vizuală. Personajele și numele sunt originale. Ilustrațiile sunt servite local, inclusiv offline după prima încărcare.

Interfața folosește [MedievalSharp](https://fontsource.org/fonts/medievalsharp/about) (SIL OFL 1.1) și [Game Icons](https://game-icons.net/) (CC BY 3.0, autori Lorc, Delapouite și colaboratorii proiectului). Iconițele sunt folosite prin `react-icons/gi`.

## Tehnologie

React, TypeScript, Vite, Tailwind CSS 4, DaisyUI 5 și vite-plugin-pwa. Tema `nocturna` este definită în `src/style.css`; starea URL în `src/url-state.ts`.
