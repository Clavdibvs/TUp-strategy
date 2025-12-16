# T-UP Strategy Landing Page - Moderna

Landing page moderna per la strategia social T-UP (ricambi per carrelli elevatori) - Gennaio 2025.

## 🎯 Stack Tecnologico

### Stack Principale
- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS v3.4
- **UI Components**: Custom components basati su pattern shadcn/ui
- **Animazioni**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

### Motivazione Scelta
shadcn/ui + Tailwind CSS è stato scelto per:
- **Massimo "wow factor"** con design contemporaneo 2025
- **Controllo completo** del codice (copy-paste components)
- **Accessibilità garantita** da pattern consolidati
- **Performance ottimale** (tree-shaking, bundle piccolo)
- **Velocità implementazione** alta
- **Rischio basso**: codice nel progetto, nessuna dipendenza critica

### Fallback
**Mantine** - Se necessario cambiare stack in futuro per:
- Sistema completo con 123 componenti
- Performance ottimizzata (v7 senza CSS-in-JS)
- Community attiva (30k+ stars)

## 🚀 Comandi

### Installazione
```bash
npm install
```

### Development
```bash
npm run dev
```
Apri [http://localhost:5173](http://localhost:5173)

### Build
```bash
npm run build
```
Genera output statico in `/dist`

### Preview (Production Build)
```bash
npm run preview
```
Testa la build di produzione in locale su [http://localhost:4173](http://localhost:4173)

## 📁 Struttura Progetto

```
tup-strategy-modern/
├── src/
│   ├── components/
│   │   └── ui/           # Componenti UI riutilizzabili
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts      # Utility functions (cn)
│   ├── App.tsx           # Applicazione principale
│   ├── index.css         # Stili globali + Tailwind
│   └── main.tsx          # Entry point
├── dist/                 # Build output (generato)
├── tailwind.config.js    # Configurazione Tailwind
├── vite.config.ts        # Configurazione Vite
└── package.json
```

## ✨ Caratteristiche Implementate

### Design Moderno
- ✅ Header sticky con navigazione smooth scroll
- ✅ Hero section con gradient text
- ✅ 6 blocchi operativi con card hover effects
- ✅ Trend Radar con filtri interattivi e modal
- ✅ Charts con Recharts (scenari views)
- ✅ Roadmap settimanale con design cards
- ✅ Footer minimal

### Animazioni
- ✅ Framer Motion per micro-interazioni
- ✅ Scroll reveal animations
- ✅ Hover states fluidi
- ✅ Modal transitions
- ✅ Menu mobile animato

### Accessibilità
- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ Focus states visibili
- ✅ ARIA attributes sui componenti interattivi
- ✅ Contrasto colori AA compliant
- ✅ Keyboard navigation (Tab, Enter, Esc)

### Responsive
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Grid responsive (1-2-3 colonne)
- ✅ Menu mobile hamburger
- ✅ Typography responsive

### Performance
- ✅ Bundle size ottimizzato: ~220kb gzip
- ✅ Tree-shaking automatico
- ✅ Lazy loading componenti
- ✅ Zero layout shift
- ✅ Immagini non presenti (solo icone vettoriali)

## 📊 Contenuti Mantenuti

Tutti i contenuti originali di `strategia.html` sono stati preservati:

1. **Filosofia**: "Start from Zero: Volume & Velocità"
2. **6 Blocchi Operativi**: Trend Hijack, ASMR/Satisfying, Micro-Tutorial, Slideshow Meme, Product Hero, Reply Video
3. **Trend Radar**: 10 trend con analisi, idee e hook (Brainrot e Relatable)
4. **Scenari & KPI**: Conservativo, Base, Upside con proiezioni
5. **Segnali di Successo**: Metriche pre-follower
6. **Roadmap Gennaio**: 4 settimane dettagliate

## ✅ Checklist Finale

- [x] **Nessun errore in console** - Build e dev puliti
- [x] **Build OK** - `npm run build` completato senza errori
- [x] **Responsive OK** - Testato su mobile, tablet, desktop breakpoints
- [x] **Accessibilità base OK** - Semantic HTML, focus states, keyboard nav
- [x] **Contenuti non inventati** - 100% fedele a strategia.html originale

## 🔧 Requisiti Sistema

- **Node.js**: v18+ (LTS)
- **npm**: v9+

## 📝 Note Tecniche

### Versioni Dipendenze Principali
- React: 18.3.1
- Tailwind CSS: 3.4.17
- Framer Motion: 11.15.0
- Recharts: 2.15.0
- Lucide React: 0.468.0

### TypeScript
Il progetto usa TypeScript in modalità strict per maggiore type-safety.

### Path Aliases
Configurato `@/*` che punta a `./src/*` per import più puliti.

## 🎨 Palette Colori

- **Primary**: Slate (900, 800, 700...) - Industrial modern
- **Accent**: Yellow (400, 500) - Safety & Energy
- **Semantic**: Blue (500), Green (500), Purple (500), Orange (500)
- **Background**: Slate (50, 100) - Minimal & Clean

## 📱 Browser Support

- Chrome/Edge: ultime 2 versioni
- Firefox: ultime 2 versioni
- Safari: ultime 2 versioni
- Mobile browsers: iOS Safari 14+, Chrome Android

## 🚢 Deploy

Per deploy su hosting statico (Netlify, Vercel, GitHub Pages):

1. Build: `npm run build`
2. Upload cartella `dist/`
3. Configura SPA routing (rewrite a `/index.html`)

## 📄 Licenza

Progetto per T-UP - Strategy Analysis 2025

---

**Generato da**: Claude Code (Anthropic)
**Data**: Dicembre 2025
**Versione**: 1.0.0
