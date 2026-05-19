const OUTFITS = [
  { id:'climber', name:'🧗 Climber',
    shirt:'#a8321c', shirtDark:'#5a1c0c', shirtStyle:'flannel',
    pants:'#3a5a8a', pantsDark:'#1f3458', cuff:'#5a82b8',
    pack:'#7a4a26', packDark:'#3a1f0a', packStyle:'climbing',
    cap:'#3a6ea8', capDark:'#1f4a78', capCuff:'#4d82bc', capStyle:'beanie',
    boot:'#5a2d12', bootDark:'#2a1408',
    hair:'#1a0c04', accessory:null },
  { id:'scientist', name:'🥼 Scientist',
    shirt:'#f5f5f5', shirtDark:'#a0a0a0', shirtStyle:'labcoat',
    pants:'#7a6a4a', pantsDark:'#3a3018', cuff:'#9a8a6a',
    pack:null, packDark:null, packStyle:'clipboard',
    cap:'#aaa', capDark:'#555', capCuff:'#ddd', capStyle:'goggles',
    boot:'#222', bootDark:'#111',
    hair:'#cfcfcf', accessory:null },
  { id:'researcher', name:'📚 Researcher',
    shirt:'#3a4a5a', shirtDark:'#1a2030', shirtStyle:'sweater',
    pants:'#5a4030', pantsDark:'#302010', cuff:'#7a6050',
    pack:'#5a3a20', packDark:'#2a1810', packStyle:'satchel',
    cap:'#2a1a08', capDark:'#1a1008', capCuff:'#3a2a18', capStyle:'bare',
    boot:'#3a2410', bootDark:'#2a1408',
    hair:'#2a1a08', accessory:'glasses' },
  { id:'businessman', name:'💼 Businessman',
    shirt:'#1a2a3a', shirtDark:'#0a1020', shirtStyle:'suit',
    pants:'#1a2030', pantsDark:'#0a1018', cuff:'#2a3040',
    pack:'#3a2418', packDark:'#1a0c04', packStyle:'briefcase',
    cap:'#1a1208', capDark:'#0a0804', capCuff:'#3a2a18', capStyle:'fedora',
    boot:'#1a0c04', bootDark:'#0a0604',
    hair:'#1a0c04', accessory:null },
  { id:'ai', name:'🤖 AI Expert',
    shirt:'#1a1a1a', shirtDark:'#080808', shirtStyle:'hoodie',
    pants:'#1a1a1a', pantsDark:'#080808', cuff:'#2a2a2a',
    pack:'#222', packDark:'#0a0a0a', packStyle:'laptop',
    cap:'#2a2a2a', capDark:'#080808', capCuff:'#3a3a3a', capStyle:'headphones',
    boot:'#1a1a1a', bootDark:'#0a0a0a',
    hair:'#1a0c04', accessory:null },
  { id:'builder', name:'👷 Builder',
    shirt:'#e0c020', shirtDark:'#a08010', shirtStyle:'hivis',
    pants:'#9a8050', pantsDark:'#503018', cuff:'#bfa080',
    pack:'#1a1a1a', packDark:'#0a0a0a', packStyle:'laptop-wires',
    cap:'#e0c020', capDark:'#a08010', capCuff:'#fff', capStyle:'hardhat',
    boot:'#3a2410', bootDark:'#1a0c04',
    hair:'#1a0c04', accessory:null },
  { id:'chef', name:'🧑‍🍳 Chef',
    shirt:'#f8f8f8', shirtDark:'#c0c0c0', shirtStyle:'chef',
    pants:'#888', pantsDark:'#444', cuff:'#aaa',
    pack:null, packDark:null, packStyle:'none',
    cap:'#f8f8f8', capDark:'#c0c0c0', capCuff:'#fff', capStyle:'toque',
    boot:'#1a1a1a', bootDark:'#0a0a0a',
    hair:'#1a0c04', accessory:'apron' },
  { id:'astronaut', name:'🧑‍🚀 Astronaut',
    shirt:'#f0f0f0', shirtDark:'#a0a0a0', shirtStyle:'spacesuit',
    pants:'#f0f0f0', pantsDark:'#a0a0a0', cuff:'#cfcfcf',
    pack:'#cfcfcf', packDark:'#888', packStyle:'oxygen',
    cap:'#cfcfcf', capDark:'#888', capCuff:'#fff', capStyle:'helmet',
    boot:'#cfcfcf', bootDark:'#888',
    hair:'#aaa', accessory:null },
];

// Build the SVG sprite for a given outfit. Switches shirt and cap shapes via
// per-style branches; other parts swap by color only.
function buildCharSvg(o) {
  const skin = '#d8a878', skinDark = '#7a4a2a', neckSkin = '#a87850';

  // --- SHIRT shapes ---
  let shirt = '';
  if (o.shirtStyle === 'labcoat') {
    // Longer lab coat extending past the waist, with lapels and pocket
    shirt = `
      <path d="M-24 -23 Q-26 -12 -25 4 L-22 28 L22 28 L25 4 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <path d="M-5 -23 L-2 0" stroke="${o.shirtDark}" stroke-width="1" fill="none"/>
      <path d="M5 -23 L2 0" stroke="${o.shirtDark}" stroke-width="1" fill="none"/>
      <rect x="6" y="2" width="9" height="9" fill="none" stroke="${o.shirtDark}" stroke-width="0.7"/>`;
  } else if (o.shirtStyle === 'suit') {
    shirt = `
      <path d="M-24 -23 Q-26 -12 -24 2 L-18 17 L18 17 L24 2 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <path d="M-8 -22 L0 -10 L8 -22" fill="#f0f0f0" stroke="${o.shirtDark}" stroke-width="0.6"/>
      <path d="M-2 -10 L-3 14 L3 14 L2 -10 Z" fill="#a83020" stroke="#5a1810" stroke-width="0.6"/>`;
  } else if (o.shirtStyle === 'hoodie') {
    shirt = `
      <path d="M-24 -23 Q-26 -12 -24 2 L-18 17 L18 17 L24 2 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <ellipse cx="0" cy="-23" rx="14" ry="4" fill="${o.shirtDark}" stroke="${o.shirtDark}" stroke-width="0.8"/>
      <rect x="-7" y="3" width="14" height="10" fill="none" stroke="${o.shirtDark}" stroke-width="0.8" rx="1"/>
      <text x="0" y="-3" text-anchor="middle" font-family="monospace" font-size="6" font-weight="900" fill="#5070d0">λ</text>`;
  } else if (o.shirtStyle === 'hivis') {
    shirt = `
      <path d="M-24 -23 Q-26 -12 -24 2 L-18 17 L18 17 L24 2 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <rect x="-23" y="-6" width="46" height="2.5" fill="#f0f0f0"/>
      <rect x="-22" y="6" width="44" height="2.5" fill="#f0f0f0"/>`;
  } else if (o.shirtStyle === 'chef') {
    shirt = `
      <path d="M-24 -23 Q-26 -12 -24 2 L-18 17 L18 17 L24 2 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <path d="M-7 -22 L-3 17" stroke="${o.shirtDark}" stroke-width="0.7" fill="none"/>
      <path d="M7 -22 L3 17" stroke="${o.shirtDark}" stroke-width="0.7" fill="none"/>
      <circle cx="-5" cy="-10" r="0.8" fill="${o.shirtDark}"/>
      <circle cx="5" cy="-10" r="0.8" fill="${o.shirtDark}"/>
      <circle cx="-4" cy="0" r="0.8" fill="${o.shirtDark}"/>
      <circle cx="4" cy="0" r="0.8" fill="${o.shirtDark}"/>
      <circle cx="-3.5" cy="10" r="0.8" fill="${o.shirtDark}"/>
      <circle cx="3.5" cy="10" r="0.8" fill="${o.shirtDark}"/>`;
  } else if (o.shirtStyle === 'spacesuit') {
    shirt = `
      <path d="M-24 -23 Q-26 -12 -25 8 L-21 26 L-12 28 L-12 46 L-4 46 L-4 21 L4 21 L4 46 L12 46 L12 28 L21 26 L25 8 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <rect x="-12" y="-6" width="24" height="12" fill="${o.pack}" stroke="${o.shirtDark}" stroke-width="0.7" rx="1"/>
      <rect x="-10" y="-4" width="6" height="3" fill="#3a6ea8"/>
      <rect x="-10" y="1" width="6" height="3" fill="#a83020"/>
      <rect x="4" y="-3" width="6" height="6" fill="#222"/>
      <circle cx="7" cy="0" r="1.4" fill="#5070d0"/>`;
  } else if (o.shirtStyle === 'sweater') {
    shirt = `
      <path d="M-24 -23 Q-26 -12 -24 2 L-18 17 L18 17 L24 2 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <ellipse cx="0" cy="-21" rx="9" ry="3" fill="${o.shirtDark}"/>
      <line x1="-22" y1="-5" x2="22" y2="-5" stroke="${o.shirtDark}" stroke-width="0.6" opacity="0.5"/>
      <line x1="-23" y1="6" x2="23" y2="6" stroke="${o.shirtDark}" stroke-width="0.6" opacity="0.5"/>`;
  } else {
    // Default: flannel with plaid stripes
    shirt = `
      <path d="M-24 -23 Q-26 -12 -24 2 L-18 17 L18 17 L24 2 Q26 -12 24 -23 Q15 -26 0 -26 Q-15 -26 -24 -23 Z"
            fill="${o.shirt}" stroke="${o.shirtDark}" stroke-width="1.4"/>
      <line x1="-20" y1="-20" x2="-20" y2="15" stroke="${o.shirtDark}" stroke-width="0.7" opacity="0.5"/>
      <line x1="20" y1="-20" x2="20" y2="15" stroke="${o.shirtDark}" stroke-width="0.7" opacity="0.5"/>
      <line x1="-23" y1="-8" x2="23" y2="-8" stroke="${o.shirtDark}" stroke-width="0.6" opacity="0.4"/>
      <line x1="-24" y1="4" x2="24" y2="4" stroke="${o.shirtDark}" stroke-width="0.6" opacity="0.4"/>`;
  }

  // --- CAP shapes (bigger and more distinctive silhouettes) ---
  let cap = '';
  if (o.capStyle === 'fedora') {
    // Wide-brim hat with crown
    cap = `
      <ellipse cx="0" cy="-32" rx="18" ry="3" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.1"/>
      <ellipse cx="0" cy="-32" rx="18" ry="3" fill="${o.capDark}" opacity="0.25"/>
      <path d="M-11 -33 Q-12 -45 0 -46 Q12 -45 11 -33 Z" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.2"/>
      <rect x="-11" y="-37" width="22" height="2.5" fill="${o.capDark}"/>
      <rect x="6" y="-37" width="3" height="2.5" fill="${o.capCuff}"/>`;
  } else if (o.capStyle === 'hardhat') {
    // Construction hardhat: big rounded dome with a brim sticking forward
    cap = `
      <ellipse cx="0" cy="-32" rx="15" ry="3" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.1"/>
      <path d="M-13 -33 Q-14 -49 0 -50 Q14 -49 13 -33 Z" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.3"/>
      <path d="M-13 -42 L-2 -42 M2 -42 L13 -42" stroke="${o.capDark}" stroke-width="1"/>
      <rect x="-2" y="-50" width="4" height="14" fill="${o.capDark}" opacity="0.4"/>`;
  } else if (o.capStyle === 'toque') {
    // Tall chef hat — extra height & puffy
    cap = `
      <rect x="-10" y="-36" width="20" height="3" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.1"/>
      <path d="M-11 -36 Q-15 -58 -6 -60 Q-1 -58 0 -60 Q1 -58 6 -60 Q15 -58 11 -36 Z"
            fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.3"/>
      <ellipse cx="-5" cy="-52" rx="4" ry="5" fill="${o.capDark}" opacity="0.18"/>
      <ellipse cx="5" cy="-54" rx="4" ry="5" fill="${o.capDark}" opacity="0.18"/>
      <ellipse cx="0" cy="-48" rx="3" ry="4" fill="${o.capDark}" opacity="0.15"/>`;
  } else if (o.capStyle === 'helmet') {
    // Bubble astronaut helmet — full clear dome over the head
    cap = `
      <circle cx="0" cy="-32" r="15" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.4"/>
      <rect x="-12" y="-37" width="24" height="6" fill="#222" rx="1"/>
      <rect x="-10" y="-36" width="20" height="4" fill="#3a4a8a" opacity="0.7"/>
      <ellipse cx="-5" cy="-36" rx="3" ry="1.5" fill="#fff" opacity="0.6"/>
      <circle cx="0" cy="-32" r="15" fill="none" stroke="${o.capCuff}" stroke-width="0.8" opacity="0.6"/>`;
  } else if (o.capStyle === 'goggles') {
    // Safety goggles pushed up on forehead + scientist gray hair
    cap = `
      <path d="M-10 -36 Q-11 -45 0 -46 Q11 -45 10 -36 L10 -32 L-10 -32 Z" fill="${o.hair}"/>
      <path d="M-9 -38 Q-2 -42 0 -39 Q2 -42 9 -38 L9 -34 Q5 -36 0 -35 Q-5 -36 -9 -34 Z" fill="${o.capDark}"/>
      <ellipse cx="-5" cy="-37" rx="4.5" ry="3" fill="${o.capCuff}" stroke="${o.capDark}" stroke-width="1" opacity="0.9"/>
      <ellipse cx="5" cy="-37" rx="4.5" ry="3" fill="${o.capCuff}" stroke="${o.capDark}" stroke-width="1" opacity="0.9"/>
      <rect x="-1.5" y="-37" width="3" height="1.5" fill="${o.capDark}"/>`;
  } else if (o.capStyle === 'headphones') {
    // Big over-ear headphones — wide headband, large cups
    cap = `
      <path d="M-9 -36 Q-10 -45 0 -46 Q10 -45 9 -36 L9 -32 L-9 -32 Z" fill="${o.hair}"/>
      <path d="M-15 -40 Q0 -52 15 -40" fill="none" stroke="${o.cap}" stroke-width="4" stroke-linecap="round"/>
      <path d="M-15 -40 Q0 -52 15 -40" fill="none" stroke="${o.capCuff}" stroke-width="1.5" stroke-linecap="round"/>
      <ellipse cx="-15" cy="-33" rx="4.5" ry="5.5" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1"/>
      <ellipse cx="15" cy="-33" rx="4.5" ry="5.5" fill="${o.cap}" stroke="${o.capDark}" stroke-width="1"/>
      <ellipse cx="-15" cy="-33" rx="2.5" ry="3" fill="${o.capCuff}"/>
      <ellipse cx="15" cy="-33" rx="2.5" ry="3" fill="${o.capCuff}"/>
      <circle cx="-15" cy="-33" r="0.8" fill="#5070d0"/>
      <circle cx="15" cy="-33" r="0.8" fill="#5070d0"/>`;
  } else if (o.capStyle === 'bare') {
    // No hat — just visible hair around the head
    cap = `
      <path d="M-11 -37 Q-12 -46 0 -47 Q12 -46 11 -37 L10 -32 L-10 -32 Z" fill="${o.hair}"/>
      <path d="M-9 -33 Q-8 -27 0 -27 Q8 -27 9 -33 L9 -34 L-9 -34 Z" fill="${o.hair}"/>`;
  } else {
    // Default: beanie with knit knob
    cap = `
      <path d="M-10 -35 Q-11 -48 0 -49 Q11 -48 10 -35 L10 -31 L-10 -31 Z"
            fill="${o.cap}" stroke="${o.capDark}" stroke-width="1.2"/>
      <path d="M10 -35 L10 -31 L4 -31 L4 -46 Q9 -46 10 -35 Z" fill="${o.capDark}" opacity="0.35"/>
      <rect x="-10" y="-33" width="20" height="2.8" fill="${o.capCuff}" stroke="${o.capDark}" stroke-width="0.6"/>
      <ellipse cx="0" cy="-50" rx="2.4" ry="2" fill="${o.cap}" stroke="${o.capDark}" stroke-width="0.7"/>`;
  }

  // --- PACK / what's on the back ---
  let pack = '';
  if (o.packStyle === 'climbing') {
    // Trapezoidal climbing pack with center buckle (default)
    pack = `
      <path d="M-20 -19 Q-21 -17 -20 -14 L-14 17 Q-14 19 -12 19 L12 19 Q14 19 14 17 L20 -14 Q21 -17 20 -19 Q14 -20 9 -20 L-9 -20 Q-14 -20 -20 -19 Z"
            fill="${o.pack}" stroke="${o.packDark}" stroke-width="1.4"/>
      <path d="M20 -14 L14 17 Q14 19 12 19 L9 19 L9 -19 L20 -19 Q21 -17 20 -14 Z" fill="${o.packDark}" opacity="0.45"/>
      <line x1="0" y1="-19" x2="0" y2="18" stroke="${o.packDark}" stroke-width="1.1"/>
      <circle cx="0" cy="0" r="5" fill="#dcc89c" stroke="${o.packDark}" stroke-width="0.9"/>
      <circle cx="0" cy="0" r="1.7" fill="${o.packDark}"/>
      <rect x="-20" y="-6" width="5" height="2" fill="${o.packDark}"/>
      <rect x="15" y="-6" width="5" height="2" fill="${o.packDark}"/>
      <rect x="-17" y="9" width="5" height="2" fill="${o.packDark}"/>
      <rect x="12" y="9" width="5" height="2" fill="${o.packDark}"/>
      <path d="M-20 -2 L-16 15 Q-16 17 -14 17 L-11 17 L-14 -2 Z" fill="${o.packDark}" stroke="${o.packDark}" stroke-width="0.7"/>
      <path d="M20 -2 L16 15 Q16 17 14 17 L11 17 L14 -2 Z" fill="${o.packDark}" stroke="${o.packDark}" stroke-width="0.7"/>
      <rect x="-11" y="-20.5" width="22" height="3" rx="1.2" fill="${o.packDark}" stroke="${o.packDark}" stroke-width="0.7"/>`;
  } else if (o.packStyle === 'clipboard') {
    // Scientist: clipboard tucked under arm + flask peeking out
    pack = `
      <rect x="14" y="-8" width="10" height="14" fill="#dcc89c" stroke="#3a1f0a" stroke-width="1"/>
      <rect x="16" y="-9" width="6" height="1.5" fill="#888"/>
      <line x1="15.5" y1="-5" x2="22.5" y2="-5" stroke="#3a1f0a" stroke-width="0.4"/>
      <line x1="15.5" y1="-2" x2="22.5" y2="-2" stroke="#3a1f0a" stroke-width="0.4"/>
      <line x1="15.5" y1="1" x2="22.5" y2="1" stroke="#3a1f0a" stroke-width="0.4"/>
      <line x1="15.5" y1="4" x2="22.5" y2="4" stroke="#3a1f0a" stroke-width="0.4"/>
      <rect x="-22" y="-2" width="4" height="6" fill="#a8b8e0" stroke="#3a1f0a" stroke-width="0.8" opacity="0.85"/>
      <rect x="-21.5" y="-4" width="3" height="2" fill="#888"/>`;
  } else if (o.packStyle === 'satchel') {
    // Researcher: messenger bag slung across the shoulder
    pack = `
      <path d="M-15 -3 L-17 18 Q-17 20 -15 20 L-3 20 Q-1 20 -1 18 L-3 -3 Z"
            fill="${o.pack}" stroke="${o.packDark}" stroke-width="1.1"/>
      <path d="M-15 -3 Q-14 -22 0 -22" fill="none" stroke="${o.packDark}" stroke-width="1.5"/>
      <rect x="-13" y="4" width="10" height="6" fill="${o.packDark}" opacity="0.4" rx="0.8"/>
      <rect x="-10" y="6" width="4" height="2" fill="#c8a060"/>`;
  } else if (o.packStyle === 'briefcase') {
    // Businessman: briefcase carried at the side
    pack = `
      <rect x="14" y="2" width="10" height="14" fill="${o.pack}" stroke="${o.packDark}" stroke-width="1.1" rx="0.6"/>
      <rect x="14" y="2" width="10" height="2" fill="${o.packDark}" opacity="0.45"/>
      <rect x="17" y="0" width="4" height="2.5" fill="${o.pack}" stroke="${o.packDark}" stroke-width="0.9" rx="0.4"/>
      <rect x="18.5" y="9" width="1" height="3" fill="#c8a060"/>
      <line x1="14" y1="7" x2="24" y2="7" stroke="${o.packDark}" stroke-width="0.5"/>`;
  } else if (o.packStyle === 'laptop') {
    // AI Expert: slim laptop sleeve on the back
    pack = `
      <rect x="-15" y="-8" width="30" height="22" rx="1.5" fill="${o.pack}" stroke="${o.packDark}" stroke-width="1.2"/>
      <rect x="-13" y="-6" width="26" height="2" fill="${o.packDark}" opacity="0.7"/>
      <text x="0" y="6" text-anchor="middle" font-family="monospace" font-weight="900" font-size="9" fill="#5070d0">λ</text>`;
  } else if (o.packStyle === 'laptop-wires') {
    // Builder: a chunky laptop strapped on the back with tangled wires
    // and cables coming out in every direction
    pack = `
      <!-- Tangled cables/wires looping out around the pack body -->
      <path d="M-18 -10 Q-26 -4 -22 6 Q-18 14 -10 8" fill="none" stroke="#a83020" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M18 -8 Q26 -2 22 8 Q18 16 8 10" fill="none" stroke="#3a6ea8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M-14 16 Q-20 22 -10 24" fill="none" stroke="#5070d0" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M14 14 Q22 18 12 22" fill="none" stroke="#50d070" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M-8 -16 Q0 -22 8 -14" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Laptop body strapped on the back (chunky black rectangle, slightly tilted) -->
      <rect x="-16" y="-14" width="32" height="22" rx="1.5" fill="${o.pack}" stroke="${o.packDark}" stroke-width="1.4"/>
      <!-- Laptop hinge line (suggests the lid is closed/strapped) -->
      <line x1="-16" y1="-3" x2="16" y2="-3" stroke="${o.packDark}" stroke-width="1"/>
      <!-- Laptop screen surface on top half (dimly visible) -->
      <rect x="-14" y="-12" width="28" height="8" fill="#1a3050"/>
      <!-- A tiny green status LED + brand logo blink -->
      <circle cx="12" cy="-8" r="1" fill="#50d070"/>
      <circle cx="-12" cy="-8" r="0.8" fill="#a83020"/>
      <!-- "λ" or generic logo at the lid center -->
      <text x="0" y="-6" text-anchor="middle" font-family="monospace" font-size="6" font-weight="900" fill="#fff">{}</text>
      <!-- Cable plug ends sticking out the bottom -->
      <rect x="-6" y="8" width="3" height="3" fill="#222"/>
      <rect x="3" y="8" width="3" height="3" fill="#222"/>
      <!-- Cross-shoulder strap holding the laptop on (visible behind the body silhouette) -->
      <path d="M-18 -14 Q-22 -8 -16 5" fill="none" stroke="${o.packDark}" stroke-width="2.5"/>
      <path d="M18 -14 Q22 -8 16 5" fill="none" stroke="${o.packDark}" stroke-width="2.5"/>`;
  } else if (o.packStyle === 'oxygen') {
    // Astronaut: chunky oxygen tank pack
    pack = `
      <rect x="-13" y="-13" width="26" height="25" rx="3" fill="${o.pack}" stroke="${o.packDark}" stroke-width="1.4"/>
      <rect x="-13" y="-13" width="26" height="3" fill="${o.packDark}" opacity="0.5"/>
      <rect x="-9" y="-9" width="5" height="18" rx="1.5" fill="#cfcfcf" stroke="${o.packDark}" stroke-width="0.7"/>
      <rect x="4" y="-9" width="5" height="18" rx="1.5" fill="#cfcfcf" stroke="${o.packDark}" stroke-width="0.7"/>
      <circle cx="-6.5" cy="-10.5" r="1.4" fill="#a83020"/>
      <circle cx="6.5" cy="-10.5" r="1.4" fill="#3a6ea8"/>`;
  }
  // 'none' = nothing on the back (chef, etc.)

  // --- ACCESSORIES (drawn AFTER head so they layer on top) ---
  let accessory = '';
  if (o.accessory === 'glasses') {
    accessory = `
      <circle cx="-3" cy="-30" r="3" fill="rgba(255,255,255,0.25)" stroke="#222" stroke-width="0.9"/>
      <circle cx="3" cy="-30" r="3" fill="rgba(255,255,255,0.25)" stroke="#222" stroke-width="0.9"/>
      <line x1="0" y1="-30" x2="0" y2="-30" stroke="#222" stroke-width="0.8"/>`;
  } else if (o.accessory === 'nasa') {
    accessory = `<text x="-12" y="2" font-family="sans-serif" font-size="3.5" font-weight="900" fill="#a83020">NASA</text>`;
  } else if (o.accessory === 'apron') {
    // Chef apron over the white coat — taupe color with strings
    accessory = `
      <path d="M-16 -8 L-15 17 L15 17 L16 -8 Q12 -10 0 -10 Q-12 -10 -16 -8 Z" fill="#dcc89c" stroke="#8a6a3a" stroke-width="0.9"/>
      <path d="M-16 -8 Q-22 -14 -20 -20" fill="none" stroke="#8a6a3a" stroke-width="1"/>
      <path d="M16 -8 Q22 -14 20 -20" fill="none" stroke="#8a6a3a" stroke-width="1"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-36 -54 72 108">
    <!-- BOOTS -->
    <ellipse cx="-10" cy="50" rx="7" ry="3.4" fill="${o.bootDark}"/>
    <ellipse cx="10" cy="50" rx="7" ry="3.4" fill="${o.bootDark}"/>
    <ellipse cx="-10" cy="48" rx="6.5" ry="3" fill="${o.boot}" stroke="${o.bootDark}" stroke-width="0.6"/>
    <ellipse cx="10" cy="48" rx="6.5" ry="3" fill="${o.boot}" stroke="${o.bootDark}" stroke-width="0.6"/>
    <!-- PANTS (omitted entirely for spacesuit since the suit covers them) -->
    ${o.shirtStyle === 'spacesuit' ? '' : `
      <path d="M-12 21 L-11 46 L-4 46 L-4 21 Z" fill="${o.pants}" stroke="${o.pantsDark}" stroke-width="0.9"/>
      <path d="M12 21 L11 46 L4 46 L4 21 Z" fill="${o.pants}" stroke="${o.pantsDark}" stroke-width="0.9"/>
      <rect x="-12" y="42" width="8.5" height="3.6" fill="${o.cuff}" stroke="${o.pantsDark}" stroke-width="0.5"/>
      <rect x="3.5" y="42" width="8.5" height="3.6" fill="${o.cuff}" stroke="${o.pantsDark}" stroke-width="0.5"/>
      <line x1="-7" y1="23" x2="-7" y2="42" stroke="${o.pantsDark}" stroke-width="0.7"/>
      <line x1="7" y1="23" x2="7" y2="42" stroke="${o.pantsDark}" stroke-width="0.7"/>
    `}
    <!-- BELT (skip for lab coat / spacesuit / chef coat) -->
    ${(o.shirtStyle === 'labcoat' || o.shirtStyle === 'spacesuit' || o.shirtStyle === 'chef') ? '' : `
      <rect x="-16" y="17" width="32" height="4" fill="#3a1f0a" stroke="#1a0c04" stroke-width="0.5"/>
      <rect x="-3" y="17" width="6" height="4" fill="#c8a060"/>
    `}
    <!-- SHIRT / OUTERWEAR -->
    ${shirt}
    <!-- PACK / what's on/around the back, profession-specific -->
    ${pack}
    <!-- NECK -->
    <rect x="-4" y="-26" width="8" height="6" fill="${neckSkin}" stroke="${skinDark}" stroke-width="0.5"/>
    <!-- HEAD -->
    <path d="M-9 -36 Q-10 -30 -8 -24 L-4 -21 L4 -21 L8 -24 Q10 -30 9 -36 Z"
          fill="${skin}" stroke="${skinDark}" stroke-width="0.9"/>
    <path d="M-7 -26 L-4 -21 L4 -21 L7 -26 L5 -24 L-5 -24 Z" fill="${neckSkin}" opacity="0.4"/>
    <!-- HAIR (hidden by most caps; shown at the hairline for beanie/fedora/etc.) -->
    <path d="M-8 -27 Q-7 -23 0 -23 Q7 -23 8 -27 L8 -30 L-8 -30 Z" fill="${o.hair}"/>
    <!-- CAP / HEADWEAR -->
    ${cap}
    <!-- ACCESSORY (glasses, NASA patch, etc.) -->
    ${accessory}
  </svg>`;
}
