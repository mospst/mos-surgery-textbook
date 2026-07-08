// figures-mis.jsx — MIS teaching diagrams (laparoscopic / minimally invasive surgery)
// Same offline-first, theme-aware SVG pattern as figures.jsx.

(function () {
  const INK   = "var(--ink)";
  const MUTE  = "var(--ink-mute)";
  const SOFT  = "var(--ink-soft)";
  const RULE  = "var(--rule-strong)";
  const ACCENT = "var(--accent)";
  const ASOFT = "var(--accent-soft)";
  const WALL  = "var(--bg-tint)";
  const LUMEN = "var(--bg-card)";

  const svgProps = (vb) => ({
    viewBox: vb,
    style: { width: "100%", height: "auto", display: "block" },
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
  });
  const T = (x, y, s, extra) => ({ x, y, fontSize: s, fill: INK, textAnchor: "middle", ...extra });

  // ─────────────────────────────────────────────────────────────────────────
  // 1. Laparoscopic port placement — baseball-diamond ergonomics
  //    Camera at umbilicus, working ports flanking, assistant port lower.
  //    The "baseball-diamond" rule: camera at apex, instruments at base
  //    corners, target in the centre; 15–20 cm between any two ports.
  // ─────────────────────────────────────────────────────────────────────────
  function PortPlacementFig() {
    // Torso outline
    const torsoPath = "M 160 30 Q 110 40 100 120 Q 90 220 100 340 Q 120 410 200 430 Q 260 440 320 430 Q 400 410 420 340 Q 430 220 420 120 Q 410 40 360 30 Z";

    // Port positions (cx, cy, label, note)
    const ports = [
      { cx: 260, cy: 160, label: "Camera", sub: "10–12 mm", kind: "camera" },
      { cx: 160, cy: 240, label: "R working", sub: "5 mm", kind: "work" },
      { cx: 360, cy: 240, label: "L working", sub: "5 mm", kind: "work" },
      { cx: 200, cy: 310, label: "Assistant", sub: "5 mm", kind: "assist" },
      { cx: 320, cy: 310, label: "5th port", sub: "(optional)", kind: "opt" },
    ];

    // Diamond lines connecting camera → working ports
    const lines = [
      [260, 160, 160, 240],
      [260, 160, 360, 240],
      [160, 240, 200, 310],
      [360, 240, 320, 310],
      [200, 310, 320, 310],
      [160, 240, 360, 240],
    ];

    return (
      <svg {...svgProps("0 0 520 480")}>
        {/* Torso */}
        <path d={torsoPath} fill={WALL} stroke={RULE} strokeWidth="1.5" />
        {/* Costal margin hint */}
        <path d="M 130 180 Q 200 150 260 155 Q 320 150 390 180" fill="none" stroke={RULE} strokeWidth="1" strokeDasharray="4 4" />
        <text {...T(160, 143, 10, { fill: MUTE })}>costal margin</text>
        {/* Umbilicus */}
        <ellipse cx={260} cy={258} rx={7} ry={4} fill={LUMEN} stroke={RULE} strokeWidth="1" />
        {/* Diamond guide lines */}
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ACCENT} strokeWidth="1" strokeDasharray="5 4" opacity="0.55" />
        ))}
        {/* Port circles */}
        {ports.map((p) => {
          const r = p.kind === "camera" ? 11 : p.kind === "opt" ? 7 : 8;
          const fill = p.kind === "camera" ? ACCENT : p.kind === "opt" ? LUMEN : ASOFT;
          const stroke = p.kind === "opt" ? SOFT : ACCENT;
          return (
            <g key={p.label}>
              <circle cx={p.cx} cy={p.cy} r={r} fill={fill} stroke={stroke} strokeWidth="2" />
              <text {...T(p.cx, p.cy - r - 6, 11, { fontWeight: p.kind === "camera" ? 700 : 400 })}>{p.label}</text>
              <text {...T(p.cx, p.cy + r + 13, 10, { fill: SOFT })}>{p.sub}</text>
            </g>
          );
        })}
        {/* Distance annotation */}
        <line x1={160} y1={248} x2={360} y2={248} stroke={RULE} strokeWidth="1" markerEnd="url(#arr)" />
        <text {...T(260, 263, 10, { fill: MUTE })}>≥ 15 cm ideal</text>
        {/* Title */}
        <text {...T(260, 458, 12, { fill: SOFT })}>Baseball-diamond port configuration (generic laparoscopy)</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Abdominal access techniques: Veress vs Hasson (open) vs optical trocar
  //    Side-by-side cross-sectional view through the abdominal wall.
  // ─────────────────────────────────────────────────────────────────────────
  function AccessTechniquesFig() {
    // Three columns, each showing layers + technique
    const colW = 200, totalW = 600, layerH = 28;
    const layers = ["Skin", "Subcutaneous fat", "Fascia (linea alba)", "Preperitoneal fat", "Peritoneum"];
    const layerFill = [WALL, ASOFT, RULE, LUMEN, ASOFT];
    const x0 = 20, layerX = x0, layerW = totalW - 2 * x0;

    // Stacked layers across full width — shared anatomy bar
    let ly = 70;
    const layerBands = layers.map((name, i) => {
      const band = (
        <g key={i}>
          <rect x={layerX} y={ly} width={layerW} height={layerH} fill={layerFill[i]} stroke={RULE} strokeWidth="0.8" opacity="0.85" />
          <text x={layerX + 8} y={ly + 18} fontSize="11" fill={INK}>{name}</text>
        </g>
      );
      ly += layerH;
      return band;
    });
    const bottomOfLayers = ly;

    // For each technique, draw the instrument coming down through layers
    const techniques = [
      {
        label: "A — Veress needle",
        x: 100,
        desc: ["Closed technique", "Needle with spring-loaded", "blunt stylet; CO₂ insufflated", "before trocar insertion"],
        drawFn: (cx) => [
          // Needle shaft
          <rect key="shaft" x={cx - 3} y={72} width={6} height={bottomOfLayers - 72} fill={ACCENT} rx="2" />,
          // Needle tip (spring shield)
          <path key="tip" d={`M ${cx} ${bottomOfLayers} l -4 -10 l 8 0 Z`} fill={LUMEN} stroke={ACCENT} strokeWidth="1.5" />,
          // Spring coil symbol
          <path key="spring" d={`M ${cx - 3} ${100} q 4 4 0 8 q -4 4 0 8 q 4 4 0 8`} fill="none" stroke={LUMEN} strokeWidth="1.2" />,
          // Handle
          <ellipse key="hdl" cx={cx} cy={68} rx={14} ry={7} fill={WALL} stroke={INK} strokeWidth="1.5" />,
        ],
      },
      {
        label: "B — Hasson (open)",
        x: 300,
        desc: ["Open technique (Hasson)", "Small incision down to", "peritoneum under direct vision;", "blunt trocar secured with suture"],
        drawFn: (cx) => [
          // Cut lines on fascia and peritoneum
          <line key="f1" x1={cx - 12} y1={70 + 2 * layerH} x2={cx + 12} y2={70 + 2 * layerH} stroke={ACCENT} strokeWidth="2" />,
          <line key="p1" x1={cx - 12} y1={70 + 4 * layerH} x2={cx + 12} y2={70 + 4 * layerH} stroke={ACCENT} strokeWidth="2" />,
          // Blunt trocar
          <rect key="trocar" x={cx - 8} y={74} width={16} height={bottomOfLayers - 74} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" rx="3" />,
          // Blunt tip
          <ellipse key="tip" cx={cx} cy={bottomOfLayers} rx={8} ry={5} fill={WALL} stroke={ACCENT} strokeWidth="1.5" />,
          // Retention suture suggestion
          <line key="su1" x1={cx - 22} y1={70 + 2 * layerH + 6} x2={cx - 8} y2={70 + 2 * layerH + 6} stroke={RULE} strokeWidth="1" strokeDasharray="3 2" />,
          <line key="su2" x1={cx + 8} y1={70 + 2 * layerH + 6} x2={cx + 22} y2={70 + 2 * layerH + 6} stroke={RULE} strokeWidth="1" strokeDasharray="3 2" />,
          <text key="s" x={cx} y={70 + 2 * layerH + 20} fontSize="10" fill={SOFT} textAnchor="middle">stay suture</text>,
          // Handle block
          <rect key="hdl" x={cx - 16} y={65} width={32} height={14} fill={WALL} stroke={INK} strokeWidth="1.5" rx="3" />,
        ],
      },
      {
        label: "C — Optical trocar",
        x: 500,
        desc: ["0° scope inside trocar", "visualises each layer as", "trocar is advanced by", "rotation under direct vision"],
        drawFn: (cx) => [
          // Outer trocar sleeve
          <rect key="outer" x={cx - 10} y={72} width={20} height={bottomOfLayers - 72} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" rx="3" />,
          // Inner scope
          <rect key="scope" x={cx - 4} y={76} width={8} height={bottomOfLayers - 76} fill={LUMEN} stroke={RULE} strokeWidth="1" rx="2" />,
          // Transparent tip
          <path key="tip" d={`M ${cx - 10} ${bottomOfLayers} L ${cx} ${bottomOfLayers + 12} L ${cx + 10} ${bottomOfLayers} Z`} fill={LUMEN} stroke={ACCENT} strokeWidth="1.5" />,
          // Eye symbol at top of scope
          <ellipse key="eye" cx={cx} cy={74} rx={5} ry={4} fill={ACCENT} opacity="0.7" />,
          // Handle
          <rect key="hdl" x={cx - 14} y={64} width={28} height={14} fill={WALL} stroke={INK} strokeWidth="1.5" rx="3" />,
          <text key="vis" x={cx} y={70 + 2 * layerH - 4} fontSize="9" fill={ACCENT} textAnchor="middle" fontWeight="700">VISION</text>,
        ],
      },
    ];

    return (
      <svg {...svgProps("0 0 600 340")}>
        {/* Title row */}
        {techniques.map((t) => (
          <text key={t.label} {...T(t.x, 22, 13, { fontWeight: 700 })}>{t.label}</text>
        ))}
        {/* Shared anatomy layers */}
        {layerBands}
        {/* Technique instruments */}
        {techniques.map((t) => (
          <g key={t.label}>{t.drawFn(t.x)}</g>
        ))}
        {/* Description text per column */}
        {techniques.map((t) => (
          <g key={t.label + "-desc"}>
            {t.desc.map((line, i) => (
              <text key={i} {...T(t.x, bottomOfLayers + 22 + i * 16, 11, { fill: i === 0 ? MUTE : SOFT })}>{line}</text>
            ))}
          </g>
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Energy devices: lateral thermal spread comparison
  //    Monopolar, bipolar, ultrasonic (Harmonic), advanced bipolar (LigaSure)
  //    depicted as cross-sections with thermal spread halos.
  // ─────────────────────────────────────────────────────────────────────────
  function EnergyDevicesFig() {
    const devices = [
      {
        name: "Monopolar",
        sub: "Diathermy",
        spread: 10,    // mm lateral spread
        spreadLabel: "~10 mm",
        color: ACCENT,
        tip: "point",
        note: "Current travels through patient to pad; large spread risk",
      },
      {
        name: "Bipolar",
        sub: "Conventional",
        spread: 4,
        spreadLabel: "3–5 mm",
        color: ACCENT,
        tip: "jaws",
        note: "Current between jaws only; no tissue-sealing mechanism",
      },
      {
        name: "Ultrasonic",
        sub: "(Harmonic)",
        spread: 2,
        spreadLabel: "1–3 mm",
        color: ACCENT,
        tip: "blade",
        note: "Mechanical vibration 55 kHz; coagulation at lower temp (~80°C)",
      },
      {
        name: "Adv. bipolar",
        sub: "(LigaSure / Thunderbeat)",
        spread: 2,
        spreadLabel: "< 2 mm",
        color: ACCENT,
        tip: "fusion",
        note: "Feedback-controlled energy; seals vessels up to 7 mm",
      },
    ];

    const colW = 150, svgW = colW * devices.length, rowY = 80, tissueH = 70;
    const scale = 6; // px per mm of spread

    return (
      <svg {...svgProps(`0 0 ${svgW} 330`)}>
        {/* Header */}
        <text {...T(svgW / 2, 22, 13.5, { fontWeight: 700, fill: INK })}>Lateral thermal spread by energy modality</text>
        {devices.map((d, i) => {
          const cx = i * colW + colW / 2;
          const spreadPx = d.spread * scale;
          const jaws = d.tip === "jaws" || d.tip === "fusion";

          return (
            <g key={d.name}>
              {/* Vertical divider */}
              {i > 0 && <line x1={i * colW} y1={36} x2={i * colW} y2={310} stroke={RULE} strokeWidth="0.8" />}

              {/* Tissue block */}
              <rect x={cx - 32} y={rowY} width={64} height={tissueH} fill={WALL} stroke={RULE} strokeWidth="1" />

              {/* Thermal spread halo (on either side of tissue block) */}
              <ellipse
                cx={cx - 32} cy={rowY + tissueH / 2}
                rx={spreadPx} ry={tissueH * 0.4}
                fill={ASOFT} opacity="0.6"
              />
              <ellipse
                cx={cx + 32} cy={rowY + tissueH / 2}
                rx={spreadPx} ry={tissueH * 0.4}
                fill={ASOFT} opacity="0.6"
              />

              {/* Instrument tip */}
              {jaws ? (
                <g>
                  <rect x={cx - 34} y={rowY - 18} width={68} height={18} fill={INK} rx="3" opacity="0.8" />
                  <rect x={cx - 34} y={rowY + tissueH} width={68} height={10} fill={INK} rx="3" opacity="0.8" />
                </g>
              ) : d.tip === "blade" ? (
                <path d={`M ${cx - 4} ${rowY - 20} L ${cx + 4} ${rowY - 20} L ${cx} ${rowY} Z`} fill={INK} opacity="0.8" />
              ) : (
                /* point electrode */
                <circle cx={cx} cy={rowY - 6} r={5} fill={ACCENT} stroke={INK} strokeWidth="1" />
              )}

              {/* Spread dimension line */}
              <line x1={cx - 32 - spreadPx} y1={rowY + tissueH + 14} x2={cx - 32} y2={rowY + tissueH + 14} stroke={SOFT} strokeWidth="1" />
              <line x1={cx + 32} y1={rowY + tissueH + 14} x2={cx + 32 + spreadPx} y2={rowY + tissueH + 14} stroke={SOFT} strokeWidth="1" />
              <text {...T(cx, rowY + tissueH + 26, 11, { fill: ACCENT, fontWeight: 600 })}>{d.spreadLabel}</text>

              {/* Device name */}
              <text {...T(cx, rowY + tissueH + 46, 13.5, { fontWeight: 700 })}>{d.name}</text>
              <text {...T(cx, rowY + tissueH + 62, 10.5, { fill: MUTE })}>{d.sub}</text>

              {/* Note — wrap manually at ~22 chars */}
              {d.note.match(/.{1,22}(\s|$)/g).map((chunk, k) => (
                <text key={k} {...T(cx, rowY + tissueH + 82 + k * 15, 10, { fill: SOFT })}>{chunk.trim()}</text>
              ))}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Calot's triangle & Critical View of Safety (CVS) for lap chole
  //    Anatomical relationships: cystic duct, cystic artery, CBD, CHD, liver.
  //    CVS = two-structure rule (only two structures enter gallbladder).
  // ─────────────────────────────────────────────────────────────────────────
  function CalotCVSFig() {
    return (
      <svg {...svgProps("0 0 560 420")}>
        {/* ── Left panel: Calot's triangle anatomy ── */}
        {/* Liver undersurface */}
        <path d="M 20 50 Q 100 30 240 40 Q 250 40 260 50 L 260 100 Q 200 90 100 100 Q 50 105 20 120 Z" fill={WALL} stroke={RULE} strokeWidth="1.5" />
        <text {...T(140, 75, 12, { fill: MUTE })}>Liver (seg. IV–V)</text>

        {/* Gallbladder */}
        <ellipse cx={200} cy={155} rx={38} ry={55} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <text {...T(200, 152, 11, { fontWeight: 600 })}>Gall</text>
        <text {...T(200, 167, 11, { fontWeight: 600 })}>bladder</text>

        {/* Cystic duct */}
        <path d="M 200 210 Q 185 240 170 260" fill="none" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" />
        <text {...T(158, 248, 10.5, { fill: ACCENT, textAnchor: "end" })}>Cystic duct</text>

        {/* Cystic artery — branches from right hepatic */}
        <path d="M 80 95 Q 140 130 168 150" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <text {...T(90, 118, 10, { fill: INK, textAnchor: "start" })}>Cystic a.</text>

        {/* CHD */}
        <path d="M 100 100 Q 110 190 115 270" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <text {...T(90, 290, 10.5, { fill: INK, textAnchor: "end" })}>CHD</text>

        {/* CBD (CHD + cystic duct junction) */}
        <path d="M 115 270 Q 140 290 170 260 Q 175 285 160 310" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <text {...T(140, 325, 10.5, { fill: INK })}>CBD</text>

        {/* Calot's triangle fill */}
        <path d="M 200 210 Q 185 240 170 260 Q 140 245 115 230 Q 145 200 168 150 Z" fill={ASOFT} opacity="0.35" />
        <text {...T(158, 215, 10, { fill: ACCENT, fontWeight: 700 })}>Calot's</text>
        <text {...T(158, 228, 10, { fill: ACCENT, fontWeight: 700 })}>triangle</text>

        {/* RHA (right hepatic artery) — hidden danger — shown dashed if aberrant */}
        <path d="M 60 80 Q 110 100 168 150" fill="none" stroke={RULE} strokeWidth="2" strokeDasharray="6 4" />
        <text {...T(28, 62, 9.5, { fill: MUTE, textAnchor: "start" })}>R. hepatic a.</text>

        {/* Panel title */}
        <text {...T(140, 368, 12.5, { fontWeight: 700 })}>Calot's triangle</text>
        <text {...T(140, 385, 10.5, { fill: SOFT })}>Roof: liver; floor: cystic duct;</text>
        <text {...T(140, 400, 10.5, { fill: SOFT })}>left side: CHD/CBD</text>

        {/* Vertical divider */}
        <line x1={280} y1={30} x2={280} y2={410} stroke={RULE} strokeWidth="1" strokeDasharray="6 4" />

        {/* ── Right panel: Critical View of Safety (CVS) ── */}
        <text {...T(420, 45, 13, { fontWeight: 700 })}>Critical View of Safety (CVS)</text>

        {/* Liver plate */}
        <path d="M 290 80 Q 360 60 555 70 L 555 110 Q 420 100 290 115 Z" fill={WALL} stroke={RULE} strokeWidth="1.5" />

        {/* Gallbladder (partially dissected) */}
        <ellipse cx={450} cy={175} rx={45} ry={60} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <text {...T(450, 170, 11, { fontWeight: 600 })}>GB</text>

        {/* Hepatocystic triangle completely cleared — green zone */}
        <path d="M 450 235 Q 420 255 400 280 Q 380 260 395 230 Q 420 210 450 235 Z" fill={LUMEN} stroke={ACCENT} strokeWidth="1" opacity="0.6" />
        <text {...T(408, 254, 9.5, { fill: ACCENT })}>cleared</text>

        {/* Only two structures entering GB */}
        {/* Cystic duct */}
        <path d="M 450 235 Q 432 260 420 285" fill="none" stroke={ACCENT} strokeWidth="4.5" strokeLinecap="round" />
        <text {...T(408, 298, 10.5, { fill: ACCENT, fontWeight: 700 })}>Cystic duct</text>

        {/* Cystic artery */}
        <path d="M 370 140 Q 405 160 430 185" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <text {...T(355, 138, 10.5, { fill: INK, textAnchor: "end" })}>Cystic a.</text>

        {/* CVS tick marks / annotations */}
        <text {...T(420, 330, 10.5, { fill: SOFT })}>CVS criteria (Strasberg 1995):</text>
        {[
          "1. Hepatocystic triangle free of fat/fibrous tissue",
          "2. Lower 1/3 GB separated from liver bed",
          "3. Only 2 structures seen entering GB",
        ].map((line, i) => (
          <text key={i} x={293} y={350 + i * 18} fontSize="10" fill={SOFT} textAnchor="start">{line}</text>
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 5. TEP vs TAPP dissection planes for laparoscopic inguinal hernia repair
  //    Side-by-side sagittal cross-section showing different entry planes.
  // ─────────────────────────────────────────────────────────────────────────
  function TepTappFig() {
    // Common layers (right side cross-section, schematic)
    // y-positions from top
    const layers = [
      { name: "Skin / subcut.", y: 30, h: 28, fill: WALL },
      { name: "Anterior rectus sheath", y: 58, h: 18, fill: ASOFT },
      { name: "Rectus muscle", y: 76, h: 40, fill: WALL },
      { name: "Posterior rectus sheath", y: 116, h: 14, fill: ASOFT },
      { name: "Preperitoneal space", y: 130, h: 30, fill: LUMEN },
      { name: "Peritoneum", y: 160, h: 14, fill: ASOFT },
      { name: "Abdominal cavity", y: 174, h: 36, fill: WALL },
    ];

    const renderLayers = (xOffset, width) =>
      layers.map((L, i) => (
        <g key={i}>
          <rect x={xOffset} y={L.y} width={width} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="0.8" />
          {/* layers 4 "Preperitoneal space" and 5 "Peritoneum" are labelled by panel-specific annotations */}
          {i < 4 && (
            <text x={xOffset + 4} y={L.y + L.h / 2 + 4} fontSize="9.5" fill={SOFT}>{L.name}</text>
          )}
        </g>
      ));

    const colW = 240, gap = 40, x1 = 20, x2 = x1 + colW + gap;

    return (
      <svg {...svgProps("0 0 560 350")}>
        {/* TEP panel */}
        <text {...T(x1 + colW / 2, 22, 14, { fontWeight: 700 })}>TEP</text>
        <text {...T(x1 + colW / 2, 38, 10.5, { fill: SOFT })}>Totally Extraperitoneal</text>
        {renderLayers(x1, colW)}

        {/* TEP: scope stays in preperitoneal space — never enters peritoneum */}
        {/* Layer labels for bands 4 & 5 (right side to avoid trocar) */}
        <text x={x1 + colW / 2 + 55} y={147} fontSize="9.5" fill={SOFT} textAnchor="start">Preperiton. space</text>
        <text x={x1 + colW / 2 + 55} y={170} fontSize="9.5" fill={SOFT} textAnchor="start">Peritoneum</text>
        {/* Balloon dissector in preperitoneal layer */}
        <ellipse cx={x1 + colW / 2} cy={145} rx={50} ry={12} fill={ACCENT} opacity="0.25" stroke={ACCENT} strokeWidth="1.5" />
        <text {...T(x1 + colW / 2, 146, 9.5, { fill: ACCENT, fontWeight: 700 })}>working space</text>
        {/* Trocar path - stops above peritoneum */}
        <line x1={x1 + colW / 2} y1={30} x2={x1 + colW / 2} y2={130} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        <polygon points={`${x1 + colW / 2 - 5},${126} ${x1 + colW / 2 + 5},${126} ${x1 + colW / 2},${140}`} fill={ACCENT} />
        {/* Peritoneum intact — placed below the band (y 174+) */}
        <text x={x1 + 4} y={184} fontSize="9" fill={INK} fontWeight="700">Intact ✓</text>

        {/* TAPP panel */}
        <text {...T(x2 + colW / 2, 22, 14, { fontWeight: 700 })}>TAPP</text>
        <text {...T(x2 + colW / 2, 38, 10.5, { fill: SOFT })}>Transabdominal Preperitoneal</text>
        {renderLayers(x2, colW)}

        {/* TAPP: scope enters peritoneal cavity first, then peritoneum incised */}
        {/* Layer labels for bands 4 & 5 (left margin, clear of trocar) */}
        <text x={x2 + 4} y={147} fontSize="9.5" fill={SOFT}>Preperiton. space</text>
        {/* Peritoneum layer label placed below incision line */}
        <text x={x2 + 4} y={184} fontSize="9.5" fill={SOFT}>Peritoneum</text>
        <line x1={x2 + colW / 2} y1={30} x2={x2 + colW / 2} y2={185} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
        <polygon points={`${x2 + colW / 2 - 5},${181} ${x2 + colW / 2 + 5},${181} ${x2 + colW / 2},${195}`} fill={ACCENT} />
        {/* Peritoneal incision */}
        <line x1={x2 + colW / 2 - 30} y1={160} x2={x2 + colW / 2 + 30} y2={160} stroke={ACCENT} strokeWidth="2.5" strokeDasharray="4 2" />
        {/* "Peritoneum incised" right of trocar, above the incision line */}
        <text x={x2 + colW / 2 + 35} y={157} fontSize="9" fill={ACCENT} fontWeight="700">Perit. incised</text>
        {/* Flap dissected down into preperitoneal space */}
        <path d={`M ${x2 + colW / 2 - 30} 160 Q ${x2 + colW / 2} 155 ${x2 + colW / 2 + 30} 160 L ${x2 + colW / 2 + 30} 130 Q ${x2 + colW / 2} 128 ${x2 + colW / 2 - 30} 130 Z`}
          fill={ASOFT} opacity="0.5" />
        {/* Flap label centred inside the flap shape (y 130–160, mid ~144), two lines */}
        <text {...T(x2 + colW / 2, 139, 9.5, { fill: ACCENT })}>preperi.</text>
        <text {...T(x2 + colW / 2, 152, 9.5, { fill: ACCENT })}>flap</text>

        {/* Comparison table at bottom */}
        {[
          ["Entry plane", "Preperitoneal (extraperitoneal)", "Peritoneal cavity → flap"],
          ["Adhesion risk", "Low — peritoneum never breached", "Present (prior surgery risk)"],
          ["Bilateral repair", "Easy — balloon inflated across midline", "Easy — two separate flaps"],
          ["Learning curve", "Steeper (limited space initially)", "Gentler (familiar view)"],
        ].map(([attr, tep, tapp], i) => {
          const rowY = 225 + i * 28;
          return (
            <g key={i}>
              <rect x={20} y={rowY - 14} width={520} height={26} fill={i % 2 === 0 ? WALL : LUMEN} opacity="0.6" />
              <text x={28} y={rowY + 4} fontSize="10" fill={MUTE} fontWeight="600">{attr}</text>
              <text x={190} y={rowY + 4} fontSize="10" fill={SOFT}>{tep}</text>
              <text x={380} y={rowY + 4} fontSize="10" fill={SOFT}>{tapp}</text>
            </g>
          );
        })}
        {/* Table headers */}
        <text x={28} y={220} fontSize="10.5" fill={INK} fontWeight="700">Feature</text>
        <text x={190} y={220} fontSize="10.5" fill={INK} fontWeight="700">TEP</text>
        <text x={380} y={220} fontSize="10.5" fill={INK} fontWeight="700">TAPP</text>
        <line x1={20} y1={222} x2={540} y2={222} stroke={RULE} strokeWidth="1" />
      </svg>
    );
  }

  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "mis-port-placement": {
      title: "Laparoscopic port placement — baseball-diamond principle",
      caption: "The camera port sits at the apex of a diamond, with two working ports at the base corners flanking the target organ, maintaining ≥ 15 cm between ports. This geometry maximises instrument triangulation and avoids 'sword-fighting'. A 30–45° camera angle toward the target optimises the operative view.",
      ref: "Soper NJ et al. Mastery of Endoscopic and Laparoscopic Surgery, 4th ed. Lippincott, 2014.",
      render: () => <PortPlacementFig />,
    },

    "mis-access-techniques": {
      title: "Abdominal access: Veress vs Hasson vs optical trocar",
      caption: "Veress-needle technique is quick but 'blind'; initial insufflation is confirmed by the 'double-click', saline drop test, and low entry pressure (< 8 mmHg). Hasson open technique is preferred when adhesions are suspected (prior surgery) and confirms peritoneal entry under direct vision. Optical trocars allow layer-by-layer visualisation but require a clear view at each step.",
      ref: "Vilos GA et al. SOGC guideline; J Obstet Gynaecol Can 2007;29(5):433 · SAGES Safe Cholecystectomy Programme 2014.",
      render: () => <AccessTechniquesFig />,
    },

    "mis-energy-devices": {
      title: "Energy device lateral thermal spread comparison",
      caption: "Lateral thermal spread determines safe distance from critical structures. Monopolar diathermy spreads up to 10 mm; conventional bipolar 3–5 mm; both ultrasonic (Harmonic) and advanced bipolar (LigaSure) achieve < 3 mm spread with vessel-sealing capability up to 7 mm diameter. Always identify the structure before activating energy.",
      ref: "Hefermehl LJ et al. Surg Endosc 2014;28:2702 · Landman J et al. J Endourol 2003;17:285.",
      render: () => <EnergyDevicesFig />,
    },

    "mis-calot-cvs": {
      title: "Calot's triangle & Critical View of Safety (CVS)",
      caption: "CVS (Strasberg 1995) requires: (1) the hepatocystic triangle cleared of fat and fibrous tissue, (2) the lower one-third of the gallbladder separated from the liver bed, and (3) only two structures seen entering the gallbladder. Achieving CVS before clipping is the primary strategy to prevent bile-duct injury. A caterpillar (right hepatic) artery can mimic the cystic artery — clip only after CVS is confirmed.",
      ref: "Strasberg SM et al. J Am Coll Surg 1995;180:101 · SAGES Clinical Practice Guideline for Lap Chole 2010.",
      render: () => <CalotCVSFig />,
    },

    "mis-tep-vs-tapp": {
      title: "TEP vs TAPP dissection planes — lap inguinal hernia",
      caption: "Both approaches create a mesh-reinforced preperitoneal pocket covering the myopectineal orifice (direct, indirect, and femoral spaces). TEP never enters the peritoneal cavity, minimising adhesion risk but requiring early balloon development of a limited space. TAPP provides a familiar transabdominal view and easier contralateral inspection, but mandates secure peritoneal closure over the mesh to prevent bowel adhesion.",
      ref: "Miserez M et al. HerniaSurge Group guidelines. Hernia 2018;22:1 · Lau H et al. Surg Endosc 2006;20:998.",
      render: () => <TepTappFig />,
    },

  });
})();
