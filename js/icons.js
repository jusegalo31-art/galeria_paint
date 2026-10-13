/**
 * Biblioteca de Iconos y Gráficos SVG para «El laboratorio de Paint»
 * Todos los gráficos están generados en SVG nativo, vectoriales y adaptables.
 */

const ICONS = {
  // Herramientas de Paint
  rect: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  triangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"/></svg>`,
  bucket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 2-3 2-3s2 1.4 2 3Z"/></svg>`,
  eyedropper: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 2 4 4L6.5 17.5a2 2 0 0 1-1.4.6H3v-2.1c0-.5.2-1 .6-1.4L14 2Z"/><path d="m18 6 3 3"/><path d="m2 22 3-3"/></svg>`,
  brush: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 1.02 3.5 1.02 2.22 0 4-1.77 4-4a2.99 2.99 0 0 0-2.5-2.06Z"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.2 0-.9.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.3-10-9.3Z"/></svg>`,
  line: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L20 4"/></svg>`,
  curve: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18C7 6 17 6 21 18"/></svg>`,
  circle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/></svg>`,
  shapes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2 2 12h13L8.5 2z"/><rect x="11" y="11" width="11" height="11" rx="1"/><circle cx="6" cy="18" r="3.5"/></svg>`,
  outline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`,
  eraser: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>`,
  zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`,
  text: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,

  // Iconos UI de la interfaz
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  museum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"/><path d="M4 18v-7"/><path d="M9 18v-7"/><path d="M15 18v-7"/><path d="M20 18v-7"/><path d="M12 2 2 8h20L12 2z"/><path d="M2 18h20"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 4H6v6c0 3.31 2.69 6 6 6s6-2.69 6-6V4Z"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  soundOn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
  soundOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  open: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  paintWin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="9" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="6" r="1" fill="currentColor"/></svg>`
};

/**
 * Ilustraciones temáticas para las tarjetas de cada reto
 */
const CHALLENGE_ILLUSTRATIONS = {
  1: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#e0f2fe"/></linearGradient>
        <linearGradient id="g1-house" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
        <linearGradient id="g1-roof" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g1-sky)"/>
      <circle cx="130" cy="28" r="16" fill="#facc15"/>
      <rect x="0" y="90" width="160" height="30" fill="#4ade80"/>
      <!-- Casa -->
      <polygon points="80,26 40,56 120,56" fill="url(#g1-roof)"/>
      <rect x="46" y="56" width="68" height="44" rx="2" fill="url(#g1-house)"/>
      <rect x="72" y="74" width="16" height="26" rx="2" fill="#fef08a"/>
      <circle cx="84" cy="87" r="1.8" fill="#854d0e"/>
      <rect x="52" y="64" width="14" height="14" rx="2" fill="#ffffff" opacity="0.9"/>
      <rect x="94" y="64" width="14" height="14" rx="2" fill="#ffffff" opacity="0.9"/>
      <!-- Arbolito -->
      <rect x="22" y="80" width="6" height="18" fill="#92400e"/>
      <circle cx="25" cy="74" r="12" fill="#22c55e"/>
    </svg>
  `,
  2: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dcfce7"/><stop offset="100%" stop-color="#86efac"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g2-bg)"/>
      <!-- Flores -->
      <g transform="translate(40, 60)">
        <path d="M0,0 Q-4,25 0,45" stroke="#15803d" stroke-width="3" fill="none"/>
        <circle cx="-12" cy="0" r="8" fill="#f43f5e"/>
        <circle cx="12" cy="0" r="8" fill="#f43f5e"/>
        <circle cx="0" cy="-12" r="8" fill="#f43f5e"/>
        <circle cx="0" cy="12" r="8" fill="#f43f5e"/>
        <circle cx="0" cy="0" r="6" fill="#facc15"/>
      </g>
      <g transform="translate(110, 50)">
        <path d="M0,0 Q3,25 0,55" stroke="#15803d" stroke-width="3" fill="none"/>
        <circle cx="-10" cy="0" r="7" fill="#a855f7"/>
        <circle cx="10" cy="0" r="7" fill="#a855f7"/>
        <circle cx="0" cy="-10" r="7" fill="#a855f7"/>
        <circle cx="0" cy="10" r="7" fill="#a855f7"/>
        <circle cx="0" cy="0" r="5" fill="#fef08a"/>
      </g>
      <!-- Mariposa -->
      <g transform="translate(80, 30)">
        <ellipse cx="-8" cy="-4" rx="7" ry="5" fill="#38bdf8" transform="rotate(-20 -8 -4)"/>
        <ellipse cx="8" cy="-4" rx="7" ry="5" fill="#38bdf8" transform="rotate(20 8 -4)"/>
        <ellipse cx="-6" cy="4" rx="5" ry="4" fill="#67e8f9"/>
        <ellipse cx="6" cy="4" rx="5" ry="4" fill="#67e8f9"/>
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#1e293b" stroke-width="2"/>
      </g>
      <!-- Pincelito flotante -->
      <g transform="translate(132, 18) rotate(45)">
        <rect x="-3" y="-14" width="6" height="24" rx="2" fill="#d97706"/>
        <rect x="-3" y="10" width="6" height="5" fill="#94a3b8"/>
        <path d="M-3,15 C-3,21 3,21 3,15 Z" fill="#ec4899"/>
      </g>
    </svg>
  `,
  3: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g4-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fde68a"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g4-bg)"/>
      <!-- Robot -->
      <!-- Antena -->
      <line x1="80" y1="20" x2="80" y2="30" stroke="#475569" stroke-width="3"/>
      <circle cx="80" cy="18" r="5" fill="#ef4444"/>
      <!-- Cabeza -->
      <rect x="62" y="30" width="36" height="26" rx="4" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
      <circle cx="72" cy="42" r="4" fill="#ffffff"/><circle cx="72" cy="42" r="2" fill="#0f172a"/>
      <circle cx="88" cy="42" r="4" fill="#ffffff"/><circle cx="88" cy="42" r="2" fill="#0f172a"/>
      <rect x="74" y="49" width="12" height="3" rx="1" fill="#0284c7"/>
      <!-- Cuerpo -->
      <rect x="56" y="58" width="48" height="40" rx="5" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
      <!-- Pantalla en pecho -->
      <rect x="65" y="66" width="30" height="18" rx="3" fill="#0f172a"/>
      <polyline points="68,75 73,72 78,78 84,70 91,75" stroke="#4ade80" stroke-width="2" fill="none"/>
      <!-- Brazos -->
      <rect x="42" y="65" width="12" height="6" rx="2" fill="#64748b"/>
      <circle cx="39" cy="68" r="4" fill="#f59e0b"/>
      <rect x="106" y="65" width="12" height="6" rx="2" fill="#64748b"/>
      <circle cx="121" cy="68" r="4" fill="#f59e0b"/>
      <!-- Piernas -->
      <rect x="66" y="99" width="10" height="15" fill="#475569"/>
      <rect x="84" y="99" width="10" height="15" fill="#475569"/>
    </svg>
  `,
  4: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g10-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fde047"/></linearGradient>
        <linearGradient id="g10-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g10-bg)"/>
      <!-- Marco Dorado -->
      <rect x="24" y="14" width="112" height="92" rx="6" fill="#ffffff" stroke="url(#g10-gold)" stroke-width="6"/>
      <!-- Cuadro adentro -->
      <rect x="34" y="24" width="92" height="72" rx="2" fill="#1e1b4b"/>
      <!-- Planeta y estrellas -->
      <circle cx="80" cy="56" r="20" fill="#38bdf8"/>
      <ellipse cx="80" cy="56" rx="30" ry="7" fill="none" stroke="#f472b6" stroke-width="3" transform="rotate(-15 80 56)"/>
      <polygon points="52,36 54,41 59,41 55,44 57,49 52,46 47,49 49,44 45,41 50,41" fill="#fef08a"/>
      <polygon points="106,72 107,76 111,76 108,79 109,83 106,80 102,83 104,79 101,76 105,76" fill="#fef08a"/>
      <!-- Corona sobre el marco -->
      <polygon points="80,4 72,16 88,16" fill="#eab308"/>
      <circle cx="80" cy="3" r="2.5" fill="#ef4444"/>
    </svg>
  `,
  5: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g5-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fce7f3"/><stop offset="100%" stop-color="#fbcfe8"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g5-bg)"/>
      <!-- Criatura fantástica -->
      <!-- Alas -->
      <path d="M50,55 Q20,30 35,65 Q25,80 50,75 Z" fill="#a78bfa" opacity="0.85"/>
      <path d="M110,55 Q140,30 125,65 Q135,80 110,75 Z" fill="#a78bfa" opacity="0.85"/>
      <!-- Cuerpo -->
      <ellipse cx="80" cy="70" rx="28" ry="24" fill="#ec4899"/>
      <!-- Manchas -->
      <circle cx="72" cy="65" r="4" fill="#facc15"/>
      <circle cx="88" cy="74" r="5" fill="#38bdf8"/>
      <circle cx="78" cy="80" r="3.5" fill="#4ade80"/>
      <!-- Cabeza -->
      <circle cx="80" cy="44" r="16" fill="#f43f5e"/>
      <circle cx="74" cy="42" r="3" fill="#ffffff"/><circle cx="74" cy="42" r="1.5" fill="#000"/>
      <circle cx="86" cy="42" r="3" fill="#ffffff"/><circle cx="86" cy="42" r="1.5" fill="#000"/>
      <!-- Sonrisa -->
      <path d="M76,49 Q80,53 84,49" stroke="#ffffff" stroke-width="2" fill="none"/>
      <!-- Cuernitos / orejas -->
      <polygon points="70,30 75,37 66,37" fill="#fbbf24"/>
      <polygon points="90,30 94,37 85,37" fill="#fbbf24"/>
    </svg>
  `,
  6: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g6-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cffafe"/><stop offset="100%" stop-color="#a5f3fc"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g6-bg)"/>
      <!-- Héroe Gamer -->
      <!-- Capa -->
      <path d="M68,52 L50,95 L110,95 L92,52 Z" fill="#ef4444"/>
      <!-- Cuerpo -->
      <rect x="68" y="52" width="24" height="28" rx="4" fill="#0284c7"/>
      <polygon points="80,56 84,64 76,64" fill="#fbbf24"/>
      <!-- Cabeza con casco -->
      <rect x="66" y="24" width="28" height="26" rx="6" fill="#f59e0b"/>
      <rect x="70" y="32" width="20" height="9" rx="2" fill="#0f172a"/>
      <rect x="73" y="35" width="4" height="3" fill="#38bdf8"/>
      <rect x="83" y="35" width="4" height="3" fill="#38bdf8"/>
      <!-- Escudo / Espada -->
      <polygon points="112,46 122,62 112,78 102,62" fill="#10b981"/>
      <circle cx="112" cy="62" r="4" fill="#ffffff"/>
      <!-- Piernas -->
      <rect x="70" y="80" width="8" height="24" rx="2" fill="#1e293b"/>
      <rect x="82" y="80" width="8" height="24" rx="2" fill="#1e293b"/>
    </svg>
  `,
  7: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g7-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e0e7ff"/><stop offset="100%" stop-color="#c7d2fe"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g7-bg)"/>
      <!-- Corazon Pixel Art -->
      <g transform="translate(48, 26)">
        <!-- Fila 1 -->
        <rect x="12" y="0" width="12" height="12" fill="#ef4444"/>
        <rect x="24" y="0" width="12" height="12" fill="#ef4444"/>
        <rect x="44" y="0" width="12" height="12" fill="#ef4444"/>
        <rect x="56" y="0" width="12" height="12" fill="#ef4444"/>
        <!-- Fila 2 -->
        <rect x="0" y="12" width="12" height="12" fill="#ef4444"/>
        <rect x="12" y="12" width="12" height="12" fill="#fca5a5"/>
        <rect x="24" y="12" width="12" height="12" fill="#ef4444"/>
        <rect x="36" y="12" width="12" height="12" fill="#ef4444"/>
        <rect x="48" y="12" width="12" height="12" fill="#ef4444"/>
        <rect x="60" y="12" width="12" height="12" fill="#ef4444"/>
        <!-- Fila 3 -->
        <rect x="0" y="24" width="12" height="12" fill="#ef4444"/>
        <rect x="12" y="24" width="12" height="12" fill="#ef4444"/>
        <rect x="24" y="24" width="12" height="12" fill="#ef4444"/>
        <rect x="36" y="24" width="12" height="12" fill="#ef4444"/>
        <rect x="48" y="24" width="12" height="12" fill="#ef4444"/>
        <rect x="60" y="24" width="12" height="12" fill="#ef4444"/>
        <!-- Fila 4 -->
        <rect x="12" y="36" width="12" height="12" fill="#dc2626"/>
        <rect x="24" y="36" width="12" height="12" fill="#dc2626"/>
        <rect x="36" y="36" width="12" height="12" fill="#dc2626"/>
        <rect x="48" y="36" width="12" height="12" fill="#dc2626"/>
        <!-- Fila 5 -->
        <rect x="24" y="48" width="12" height="12" fill="#b91c1c"/>
        <rect x="36" y="48" width="12" height="12" fill="#b91c1c"/>
        <!-- Fila 6 -->
        <rect x="30" y="60" width="12" height="12" fill="#991b1b"/>
      </g>
    </svg>
  `,
  8: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g8-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ccfbf1"/><stop offset="100%" stop-color="#99f6e4"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g8-bg)"/>
      <!-- Cartel -->
      <rect x="30" y="16" width="100" height="88" rx="8" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>
      <rect x="38" y="24" width="84" height="16" rx="4" fill="#0d9488"/>
      <!-- Letras simuladas -->
      <text x="80" y="36" fill="#ffffff" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle">¡CUIDA TUS DATOS!</text>
      <!-- Escudo con check -->
      <path d="M80,48 L98,54 C98,72 80,82 80,82 C80,82 62,72 62,54 Z" fill="#14b8a6"/>
      <polyline points="72,64 78,70 88,58" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="92" r="3" fill="#f59e0b"/>
      <circle cx="116" cy="92" r="3" fill="#f59e0b"/>
    </svg>
  `,
  9: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g9-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe4e6"/><stop offset="100%" stop-color="#fecdd3"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g9-bg)"/>
      <!-- Tarjeta festiva -->
      <rect x="25" y="16" width="110" height="88" rx="8" fill="#ffffff" stroke="#f43f5e" stroke-width="2"/>
      <!-- Moño / cinta -->
      <rect x="74" y="16" width="12" height="88" fill="#fb7185"/>
      <circle cx="80" cy="46" r="18" fill="#f43f5e"/>
      <polygon points="80,34 83,43 92,43 85,49 87,57 80,52 73,57 75,49 68,43 77,43" fill="#fef08a"/>
      <!-- Borde de estrellas / confeti -->
      <circle cx="40" cy="32" r="4" fill="#38bdf8"/>
      <circle cx="120" cy="32" r="4" fill="#fbbf24"/>
      <circle cx="40" cy="88" r="4" fill="#34d399"/>
      <circle cx="120" cy="88" r="4" fill="#a855f7"/>
      <text x="80" y="86" fill="#be123c" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle">¡GRACIAS!</text>
    </svg>
  `,
  10: `
    <svg viewBox="0 0 160 120" class="card-art-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g10-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#fde047"/></linearGradient>
        <linearGradient id="g10-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
      </defs>
      <rect width="160" height="120" rx="14" fill="url(#g10-bg)"/>
      <!-- Marco Dorado -->
      <rect x="24" y="14" width="112" height="92" rx="6" fill="#ffffff" stroke="url(#g10-gold)" stroke-width="6"/>
      <!-- Cuadro adentro -->
      <rect x="34" y="24" width="92" height="72" rx="2" fill="#1e1b4b"/>
      <!-- Planeta y estrellas -->
      <circle cx="80" cy="56" r="20" fill="#38bdf8"/>
      <ellipse cx="80" cy="56" rx="30" ry="7" fill="none" stroke="#f472b6" stroke-width="3" transform="rotate(-15 80 56)"/>
      <polygon points="52,36 54,41 59,41 55,44 57,49 52,46 47,49 49,44 45,41 50,41" fill="#fef08a"/>
      <polygon points="106,72 107,76 111,76 108,79 109,83 106,80 102,83 104,79 101,76 105,76" fill="#fef08a"/>
      <!-- Corona sobre el marco -->
      <polygon points="80,4 72,16 88,16" fill="#eab308"/>
      <circle cx="80" cy="3" r="2.5" fill="#ef4444"/>
    </svg>
  `
};

/**
 * Gráficos para el tutorial paso a paso de exportación desde Paint
 */
const TUTORIAL_STEPS_SVGS = [
  // Paso 1: Termina tu dibujo
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="0" y="0" width="200" height="24" fill="#0284c7" rx="8 8 0 0"/>
    <text x="12" y="16" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif">Paint - Mi dibujo terminado</text>
    <rect x="20" y="36" width="160" height="80" rx="4" fill="#ffffff" stroke="#94a3b8"/>
    <polygon points="100,50 70,75 130,75" fill="#f87171"/>
    <rect x="75" y="75" width="50" height="30" fill="#60a5fa"/>
    <circle cx="145" cy="55" r="10" fill="#facc15"/>
    <circle cx="165" cy="100" r="14" fill="#22c55e"/>
    <path d="M159 100 l4 4 l8 -8" stroke="#ffffff" stroke-width="3" fill="none"/>
  </svg>`,

  // Paso 2: Menú Archivo -> Guardar como
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="0" y="0" width="200" height="24" fill="#0284c7" rx="8 8 0 0"/>
    <rect x="8" y="4" width="50" height="16" rx="3" fill="#0369a1"/>
    <text x="33" y="16" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">Archivo</text>
    <!-- Menú desplegable -->
    <rect x="8" y="24" width="105" height="96" rx="4" fill="#ffffff" stroke="#cbd5e1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
    <text x="16" y="42" fill="#475569" font-size="11" font-family="sans-serif">Nuevo</text>
    <text x="16" y="60" fill="#475569" font-size="11" font-family="sans-serif">Abrir</text>
    <text x="16" y="78" fill="#475569" font-size="11" font-family="sans-serif">Guardar</text>
    <rect x="10" y="85" width="101" height="22" rx="3" fill="#e0f2fe"/>
    <text x="16" y="100" fill="#0284c7" font-size="11" font-weight="bold" font-family="sans-serif">Guardar como ▶</text>
  </svg>`,

  // Paso 3: Selecciona formato PNG
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="15" y="15" width="170" height="100" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <rect x="25" y="25" width="150" height="34" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="35" y="42" fill="#065f46" font-size="12" font-weight="bold" font-family="sans-serif">Imagen PNG (*.png)</text>
    <text x="35" y="54" fill="#047857" font-size="9" font-family="sans-serif">Guarda con alta calidad para tu museo</text>
    <circle cx="160" cy="42" r="8" fill="#10b981"/>
    <path d="M156 42 l3 3 l5 -5" stroke="#ffffff" stroke-width="2" fill="none"/>
    <rect x="25" y="66" width="150" height="20" rx="3" fill="#f1f5f9"/>
    <text x="35" y="80" fill="#64748b" font-size="10" font-family="sans-serif">Imagen JPEG (*.jpg)</text>
    <rect x="25" y="90" width="150" height="20" rx="3" fill="#f1f5f9"/>
    <text x="35" y="103" fill="#64748b" font-size="10" font-family="sans-serif">Imagen BMP (*.bmp)</text>
  </svg>`,

  // Paso 4: Nombre del archivo
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <text x="16" y="32" fill="#334155" font-size="11" font-weight="bold" font-family="sans-serif">Nombre de archivo:</text>
    <rect x="16" y="42" width="168" height="32" rx="5" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <text x="24" y="62" fill="#0f172a" font-size="11" font-family="monospace">Reto_01_Mi_primera_casa.png</text>
    <rect x="16" y="86" width="100" height="24" rx="4" fill="#f1f5f9"/>
    <text x="22" y="102" fill="#475569" font-size="10" font-family="sans-serif">Tipo: PNG (*.png)</text>
  </svg>`,

  // Paso 5: Guardar en Escritorio o carpeta
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="20" y="20" width="60" height="85" rx="5" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="30" y="42" fill="#2563eb" font-size="10" font-weight="bold" font-family="sans-serif">Escritorio</text>
    <text x="30" y="65" fill="#64748b" font-size="10" font-family="sans-serif">Imágenes</text>
    <text x="30" y="88" fill="#64748b" font-size="10" font-family="sans-serif">Documentos</text>
    <rect x="90" y="35" width="90" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6"/>
    <text x="135" y="58" fill="#1d4ed8" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">Carpeta Paint</text>
    <rect x="120" y="88" width="60" height="24" rx="4" fill="#0284c7"/>
    <text x="150" y="104" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">Guardar</text>
  </svg>`,

  // Paso 6: Sube el dibujo al laboratorio
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="20" y="20" width="160" height="90" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" stroke-dasharray="6 4"/>
    <circle cx="100" cy="50" r="16" fill="#22c55e"/>
    <path d="M100 42 v16 M92 50 l8 -8 l8 8" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <text x="100" y="80" fill="#15803d" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">Arrastra tu PNG aquí</text>
    <text x="100" y="95" fill="#166534" font-size="9" font-family="sans-serif" text-anchor="middle">o haz clic para buscar tu archivo</text>
  </svg>`,

  // Paso 7: Comprueba la vista previa
  `<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <rect x="25" y="15" width="90" height="65" rx="5" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <polygon points="70,25 45,45 95,45" fill="#f87171"/>
    <rect x="52" y="45" width="36" height="25" fill="#60a5fa"/>
    <circle cx="35" cy="25" r="5" fill="#facc15"/>
    <rect x="125" y="25" width="55" height="18" rx="4" fill="#dcfce7"/>
    <text x="152" y="38" fill="#15803d" font-size="9" font-weight="bold" font-family="sans-serif" text-anchor="middle">✓ PNG Válido</text>
    <rect x="35" y="90" width="130" height="26" rx="6" fill="#22c55e"/>
    <text x="100" y="107" fill="#ffffff" font-size="11" font-weight="bold" font-family="sans-serif" text-anchor="middle">¡Completar Reto! ★</text>
  </svg>`
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICONS, CHALLENGE_ILLUSTRATIONS, TUTORIAL_STEPS_SVGS };
}
