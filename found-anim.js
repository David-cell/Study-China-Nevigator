// Foundation-lesson concept animations.
// Honest label in UI: "动画演示（交互式 SVG 动画 · 非录制视频）".
// Each entry is a self-animating SVG (SMIL) — no JS, no external libs.
const FOUND_ANIM = {
  // ── Math ──
  "fml-algebra": `<svg viewBox="0 0 220 190" class="anim-svg" role="img" aria-label="(a+b) squared area model">
    <rect x="10" y="10" width="200" height="170" fill="none" stroke="#cbd5e1"/>
    <rect x="10" y="10" width="80" height="80" fill="#dbeafe" stroke="#3b82f6"/>
    <rect x="90" y="10" width="120" height="80" fill="#bfdbfe" stroke="#3b82f6"/>
    <rect x="10" y="90" width="80" height="90" fill="#93c5fd" stroke="#3b82f6"/>
    <rect x="90" y="90" width="120" height="90" fill="#60a5fa" stroke="#3b82f6"/>
    <text x="40" y="58" font-size="22" fill="#1e40af" text-anchor="middle">a²</text>
    <text x="150" y="55" font-size="18" fill="#1e40af" text-anchor="middle">ab</text>
    <text x="40" y="142" font-size="18" fill="#1e40af" text-anchor="middle">ab</text>
    <text x="150" y="142" font-size="22" fill="#1e40af" text-anchor="middle">b²</text>
  </svg>`,

  "fml-coord": `<svg viewBox="0 0 220 190" class="anim-svg" role="img" aria-label="plot point and distance">
    <line x1="20" y1="170" x2="205" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="25" y1="15" x2="25" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="8" y="185" font-size="12" fill="#64748b">O</text>
    <circle cx="25" cy="170" r="4" fill="#3b82f6"/>
    <circle cx="160" cy="55" r="6" fill="#ef4444">
      <animate attributeName="cx" values="25;160" dur="2s" fill="freeze" repeatCount="indefinite"/>
      <animate attributeName="cy" values="170;55" dur="2s" fill="freeze" repeatCount="indefinite"/>
    </circle>
    <line x1="25" y1="170" x2="160" y2="55" stroke="#10b981" stroke-width="2">
      <animate attributeName="x2" values="25;160" dur="2s" fill="freeze" repeatCount="indefinite"/>
      <animate attributeName="y2" values="170;55" dur="2s" fill="freeze" repeatCount="indefinite"/>
    </line>
    <text x="80" y="120" font-size="14" fill="#059669">d = 5</text>
  </svg>`,

  "fml-realnum": `<svg viewBox="0 0 220 110" class="anim-svg" role="img" aria-label="number line and absolute value">
    <line x1="15" y1="55" x2="205" y2="55" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="110" cy="55" r="3" fill="#334155"/>
    <text x="104" y="74" font-size="12" fill="#64748b">0</text>
    <circle cx="160" cy="55" r="5" fill="#ef4444">
      <animate attributeName="cx" values="160;45;160" dur="3s" repeatCount="indefinite"/>
    </circle>
    <line x1="160" y1="55" x2="160" y2="35" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3">
      <animate attributeName="x1" values="160;45;160" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="160;45;160" dur="3s" repeatCount="indefinite"/>
    </line>
    <text x="120" y="28" font-size="13" fill="#ef4444">|−2| = 2</text>
  </svg>`,

  // ── Physics ──
  "fpl-vector": `<svg viewBox="0 0 220 160" class="anim-svg" role="img" aria-label="vector tip-to-tail addition">
    <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="#334155"/></marker></defs>
    <line x1="20" y1="120" x2="95" y2="60" stroke="#3b82f6" stroke-width="3" marker-end="url(#ah)"/>
    <line x1="95" y1="60" x2="175" y2="100" stroke="#8b5cf6" stroke-width="3" marker-end="url(#ah)"/>
    <line x1="20" y1="120" x2="175" y2="100" stroke="#ef4444" stroke-width="3" stroke-dasharray="5" marker-end="url(#ah)">
      <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite"/>
    </line>
    <text x="35" y="108" font-size="14" fill="#3b82f6">a</text>
    <text x="115" y="56" font-size="14" fill="#8b5cf6">b</text>
    <text x="95" y="145" font-size="14" fill="#ef4444">a + b</text>
  </svg>`,

  "fpl-unit": `<svg viewBox="0 0 220 120" class="anim-svg" role="img" aria-label="dimensional analysis F equals ma">
    <rect x="15" y="35" width="44" height="40" rx="5" fill="#dbeafe"/><text x="27" y="60" font-size="14" fill="#1e40af">[M]</text>
    <rect x="68" y="35" width="44" height="40" rx="5" fill="#dcfce7"/><text x="80" y="60" font-size="14" fill="#166534">[L]</text>
    <rect x="121" y="35" width="44" height="40" rx="5" fill="#fee2e2"/><text x="123" y="60" font-size="13" fill="#991b1b">[T⁻²]</text>
    <rect x="174" y="35" width="40" height="40" rx="5" fill="#fef9c3">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
      <text x="184" y="60" font-size="14" fill="#854d0e">[F]</text>
    </rect>
    <text x="15" y="100" font-size="14" fill="#334155">F = ma → [M][L][T⁻²] = [F]</text>
  </svg>`,

  "fpl-instrument": `<svg viewBox="0 0 220 120" class="anim-svg" role="img" aria-label="sliding vernier scale">
    <line x1="15" y1="35" x2="205" y2="35" stroke="#64748b" stroke-width="2"/>
    <g stroke="#334155" stroke-width="1.5">
      <line x1="30" y1="35" x2="30" y2="24"/><line x1="60" y1="35" x2="60" y2="24"/><line x1="90" y1="35" x2="90" y2="24"/><line x1="120" y1="35" x2="120" y2="24"/><line x1="150" y1="35" x2="150" y2="24"/><line x1="180" y1="35" x2="180" y2="24"/>
    </g>
    <g>
      <rect x="30" y="35" width="70" height="7" fill="#475569">
        <animateTransform attributeName="transform" type="translate" values="0,0; 45,0; 0,0" dur="4s" repeatCount="indefinite"/>
      </rect>
      <line x1="30" y1="52" x2="100" y2="52" stroke="#475569" stroke-width="1.5"/>
      <g stroke="#64748b" stroke-width="1">
        <line x1="30" y1="52" x2="30" y2="60"/><line x1="44" y1="52" x2="44" y2="60"/><line x1="58" y1="52" x2="58" y2="60"/><line x1="72" y1="52" x2="72" y2="60"/><line x1="86" y1="52" x2="86" y2="60"/>
      </g>
    </g>
    <text x="30" y="85" font-size="12" fill="#475569">游标滑动 → 读数随之变化</text>
  </svg>`,

  // ── Chemistry ──
  "fcl-atom": `<svg viewBox="0 0 200 200" class="anim-svg" role="img" aria-label="atom nucleus and orbiting electron">
    <ellipse cx="100" cy="100" rx="82" ry="34" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
    <ellipse cx="100" cy="100" rx="34" ry="82" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
    <circle cx="100" cy="100" r="16" fill="#ef4444"/>
    <text x="93" y="104" font-size="13" fill="#fff">+</text>
    <g>
      <circle cx="182" cy="100" r="6" fill="#3b82f6"/>
      <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="3s" repeatCount="indefinite"/>
    </g>
  </svg>`,

  "fcl-bond": `<svg viewBox="0 0 200 200" class="anim-svg" role="img" aria-label="VSEPR bent shape with two lone pairs">
    <circle cx="100" cy="100" r="18" fill="#8b5cf6"/>
    <line x1="100" y1="100" x2="45" y2="65" stroke="#334155" stroke-width="3"/>
    <line x1="100" y1="100" x2="155" y2="65" stroke="#334155" stroke-width="3"/>
    <line x1="100" y1="100" x2="72" y2="160" stroke="#ef4444" stroke-width="3"/>
    <line x1="100" y1="100" x2="128" y2="160" stroke="#ef4444" stroke-width="3"/>
    <circle cx="45" cy="65" r="6" fill="#334155"/><circle cx="155" cy="65" r="6" fill="#334155"/>
    <circle cx="72" cy="160" r="6" fill="#ef4444"/><circle cx="128" cy="160" r="6" fill="#ef4444"/>
    <text x="70" y="188" font-size="13" fill="#334155">2 孤对 → 折线形 (V)</text>
  </svg>`,

  "fcl-balance": `<svg viewBox="0 0 220 140" class="anim-svg" role="img" aria-label="balancing atoms conserved">
    <text x="15" y="45" font-size="15" fill="#334155">3 Fe + 2 O₂</text>
    <text x="15" y="95" font-size="15" fill="#334155">→ Fe₃O₄</text>
    <circle cx="150" cy="40" r="10" fill="#fb923c"/>
    <circle cx="178" cy="40" r="10" fill="#fb923c"/>
    <circle cx="164" cy="95" r="10" fill="#fb923c"><animate attributeName="cx" values="164;164;150" dur="3s" repeatCount="indefinite"/></circle>
    <text x="120" y="128" font-size="12" fill="#64748b">原子守恒：Fe 3，O 4</text>
  </svg>`
};
