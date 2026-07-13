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

  // ─────────────────────────────────────────────────────────────────────────
  // Fundoplication wraps — Nissen vs Toupet vs Dor (axial at the GEJ)
  // ─────────────────────────────────────────────────────────────────────────
  function FundoplicationWrapsFig() {
    const wraps = [
      { t: "Nissen", deg: "360° complete", kind: "full" },
      { t: "Toupet", deg: "270° posterior", kind: "post" },
      { t: "Dor", deg: "180° anterior", kind: "ant" },
    ];
    const pw = 210;
    const rad = (d) => d * Math.PI / 180;
    const pt = (cx, cy, r, a) => [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))];
    const sector = (cx, cy, ri, ro, a0, a1) => {
      const [x1, y1] = pt(cx, cy, ro, a0), [x2, y2] = pt(cx, cy, ro, a1);
      const [x3, y3] = pt(cx, cy, ri, a1), [x4, y4] = pt(cx, cy, ri, a0);
      const large = (a1 - a0) > 180 ? 1 : 0;
      return `M ${x1} ${y1} A ${ro} ${ro} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${ri} ${ri} 0 ${large} 0 ${x4} ${y4} Z`;
    };
    const Panel = (w, i) => {
      const ox = i * pw + 60, cx = ox + 46, cy = 110, ri = 22, ro = 42;
      const e = [<text key="ant" {...T(cx, 60, 8, { fill: MUTE })}>anterior ↑</text>];
      if (w.kind === "full") e.push(<circle key="w" cx={cx} cy={cy} r={ro} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />);
      else if (w.kind === "post") e.push(<path key="w" d={sector(cx, cy, ri, ro, -45, 225)} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />);
      else e.push(<path key="w" d={sector(cx, cy, ri, ro, 180, 360)} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />);
      e.push(<circle key="oe" cx={cx} cy={cy} r={ri} fill={WALL} stroke={INK} strokeWidth="1.8" />);
      e.push(<text key="oel" {...T(cx, cy + 3, 8, { fill: SOFT })}>oes.</text>);
      return (
        <g key={w.t}>
          {i > 0 && <line x1={ox - 14} y1={54} x2={ox - 14} y2={198} stroke={RULE} strokeWidth="1" />}
          {e}
          <text {...T(cx, 178, 12, { fontWeight: 700 })}>{w.t}</text>
          <text {...T(cx, 194, 9, { fill: SOFT })}>{w.deg}</text>
        </g>
      );
    };
    return (
      <svg {...svgProps("0 0 660 228")}>
        <text {...T(330, 24, 14, { fontWeight: 700 })}>Fundoplication wraps (axial view at the GEJ)</text>
        {wraps.map((w, i) => Panel(w, i))}
        <text {...T(330, 216, 8.5, { fill: MUTE })}>Partial wraps (Toupet/Dor) cause less dysphagia — favoured with impaired oesophageal motility</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Balloon tamponade — Sengstaken-Blakemore / Minnesota tube
  // ─────────────────────────────────────────────────────────────────────────
  function BalloonTamponadeFig() {
    const tx = 250;
    return (
      <svg {...svgProps("0 0 640 320")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>Balloon tamponade — Sengstaken-Blakemore tube</text>
        {/* oesophagus walls */}
        <line x1={tx - 18} y1={52} x2={tx - 18} y2={196} stroke={INK} strokeWidth="1.6" />
        <line x1={tx + 18} y1={52} x2={tx + 18} y2={196} stroke={INK} strokeWidth="1.6" />
        {/* stomach */}
        <path d={`M ${tx - 18} 196 Q ${tx - 70} 210 ${tx - 60} 258 Q ${tx - 48} 296 ${tx + 20} 292 Q ${tx + 80} 288 ${tx + 78} 244 Q ${tx + 76} 208 ${tx + 18} 196`} fill={WALL} stroke={INK} strokeWidth="1.6" />
        {/* tube */}
        <line x1={tx} y1={40} x2={tx} y2={268} stroke={INK} strokeWidth="3" />
        {/* gastric balloon */}
        <ellipse cx={tx + 4} cy={250} rx={44} ry={28} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <text {...T(tx + 4, 248, 9, { fill: ACCENT, fontWeight: 700 })}>gastric</text>
        <text {...T(tx + 4, 260, 8, { fill: SOFT })}>250–500 mL</text>
        {/* oesophageal balloon */}
        <rect x={tx - 14} y={100} width={28} height={64} rx={13} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <text x={tx + 26} y={130} fontSize="9" fill={ACCENT} fontWeight="700" textAnchor="start">oesophageal</text>
        <text x={tx + 26} y={142} fontSize="8.5" fill={SOFT} textAnchor="start">balloon</text>
        {/* traction */}
        <line x1={tx} y1={40} x2={tx} y2={16} stroke={ACCENT} strokeWidth="2" />
        <polygon points={`${tx},14 ${tx - 5},26 ${tx + 5},26`} fill={ACCENT} />
        <text x={tx + 10} y={44} fontSize="9" fill={ACCENT} textAnchor="start">traction</text>
        {/* ports */}
        <text x={420} y={80} fontSize="10.5" fill={INK} fontWeight="700" textAnchor="start">Lumens</text>
        {["gastric aspiration", "gastric balloon inflation", "oesophageal balloon inflation", "Minnesota adds an oesophageal", "aspiration port (4 lumens)"].map((s, i) => (
          <text key={i} x={420} y={102 + i * 18} fontSize="9" fill={SOFT} textAnchor="start">· {s}</text>
        ))}
        <text x={40} y={306} fontSize="8.5" fill={MUTE} textAnchor="start">Temporising bridge (&lt; 24 h) · deflate periodically · risks: mucosal necrosis, aspiration, migration/asphyxia</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // POEM — per-oral endoscopic myotomy steps
  // ─────────────────────────────────────────────────────────────────────────
  function PoemStepsFig() {
    const steps = [
      { n: 1, t: "Mucosotomy", d: "2 cm mucosal entry" },
      { n: 2, t: "Submucosal tunnel", d: "down across the GEJ" },
      { n: 3, t: "Myotomy", d: "divide circular muscle" },
      { n: 4, t: "Close", d: "clip the mucosotomy" },
    ];
    const pw = 160;
    const Panel = (s, i) => {
      const ox = i * pw + 24, x = ox, w = 126, ly = 62;
      const layers = [
        { h: 16, fill: WALL }, { h: 18, fill: ASOFT }, { h: 16, fill: WALL }, { h: 12, fill: WALL },
      ];
      let yy = ly;
      const bands = layers.map((L) => { const y = yy; yy += L.h; return { ...L, y }; });
      const e = bands.map((L, k) => <rect key={"b" + k} x={x} y={L.y} width={w} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="0.8" />);
      if (s.n === 1) e.push(<line key="m" x1={x + 34} y1={ly} x2={x + 44} y2={ly + 16} stroke={ACCENT} strokeWidth="2.5" />);
      if (s.n === 2) e.push(<rect key="t" x={x + 26} y={bands[1].y} width={w - 44} height={bands[1].h} fill={ACCENT} opacity="0.35" />);
      if (s.n === 3) { e.push(<rect key="t" x={x + 26} y={bands[1].y} width={w - 44} height={bands[1].h} fill={ACCENT} opacity="0.2" />); e.push(<line key="my" x1={x + 44} y1={bands[2].y - 1} x2={x + 92} y2={bands[2].y + 16} stroke={ACCENT} strokeWidth="3" />); }
      if (s.n === 4) { e.push(<circle key="cl" cx={x + 40} cy={ly - 1} r={3} fill={ACCENT} />); e.push(<line key="c1" x1={x + 34} y1={ly + 5} x2={x + 40} y2={ly - 1} stroke={INK} strokeWidth="1.6" />); e.push(<line key="c2" x1={x + 46} y1={ly + 5} x2={x + 40} y2={ly - 1} stroke={INK} strokeWidth="1.6" />); }
      return (
        <g key={s.n}>
          {i > 0 && <line x1={ox - 17} y1={52} x2={ox - 17} y2={170} stroke={RULE} strokeWidth="1" />}
          {e}
          <text {...T(x + w / 2, 158, 11, { fontWeight: 700 })}>{s.n}. {s.t}</text>
          <text {...T(x + w / 2, 172, 8.5, { fill: SOFT })}>{s.d}</text>
        </g>
      );
    };
    return (
      <svg {...svgProps("0 0 660 200")}>
        <text {...T(330, 24, 14, { fontWeight: 700 })}>POEM — per-oral endoscopic myotomy steps</text>
        <text {...T(330, 44, 8, { fill: MUTE })}>oesophageal wall in cross-section — lumen above, muscle below</text>
        {steps.map((s, i) => Panel(s, i))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PEG — pull technique & bumper apposition
  // ─────────────────────────────────────────────────────────────────────────
  function PegPullFig() {
    return (
      <svg {...svgProps("0 0 640 290")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>PEG — pull technique &amp; bumper apposition</text>
        <text x={64} y={62} fontSize="9" fill={SOFT} textAnchor="start">skin / abdominal wall</text>
        <rect x={60} y={68} width={230} height={24} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <path d="M 60 150 Q 175 132 290 150 L 290 174 Q 175 156 60 174 Z" fill={ASOFT} stroke={INK} strokeWidth="1.5" />
        <text x={64} y={200} fontSize="9" fill={SOFT} textAnchor="start">stomach wall (gastropexy)</text>
        <rect x={168} y={44} width={14} height={128} fill={LUMEN} stroke={INK} strokeWidth="1.8" />
        <rect x={150} y={58} width={50} height={10} rx={3} fill={MUTE} />
        <text x={206} y={66} fontSize="8.5" fill={SOFT} textAnchor="start">external bolster</text>
        <path d="M 158 174 L 192 174 L 184 189 L 166 189 Z" fill={ACCENT} opacity="0.85" />
        <text x={206} y={186} fontSize="8.5" fill={SOFT} textAnchor="start">internal bumper</text>
        <line x1={320} y1={44} x2={320} y2={214} stroke={RULE} strokeWidth="1" />
        <text x={342} y={62} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">Pull technique</text>
        {["Endoscopy → transilluminate +", "   finger-indent the gastric wall", "Needle puncture → pass a guidewire", "Snare the wire, pull it out the mouth", "Attach the PEG, pull down until the", "   internal bumper apposes mucosa"].map((s, i) => (
          <text key={i} x={342} y={86 + i * 19} fontSize="9.5" fill={SOFT} textAnchor="start">{s}</text>
        ))}
        <text x={60} y={244} fontSize="8.5" fill={MUTE} textAnchor="start">Bumper too tight → buried-bumper syndrome · don't replace a dislodged tube early (tract immature &lt; 2–4 wk)</text>
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

    "mis-fundoplication-wraps": {
      title: "Fundoplication wraps — Nissen vs Toupet vs Dor",
      caption:
        "The three common anti-reflux wraps differ in how far the gastric fundus is brought around the distal oesophagus. Nissen is a 360° complete wrap; Toupet is a 270° posterior partial wrap; Dor is a ~180° anterior partial wrap. Partial wraps (Toupet/Dor) generate less resistance and cause less post-operative dysphagia, so they are favoured when oesophageal motility is impaired; the complete Nissen gives the most durable reflux control.",
      ref: "Stefanidis D et al., Surg Endosc 2010 (SAGES GERD guideline).",
      render: () => <FundoplicationWrapsFig />,
    },

    "mis-balloon-tamponade": {
      title: "Balloon tamponade — Sengstaken-Blakemore tube",
      caption:
        "A balloon tamponade tube is a temporising rescue for exsanguinating variceal haemorrhage when endoscopy fails or is unavailable. The gastric balloon (250–500 mL) is inflated in the stomach and pulled up under traction to tamponade gastro-oesophageal junction varices; an oesophageal balloon can compress oesophageal varices. The Sengstaken-Blakemore tube has three lumens; the Minnesota tube adds an oesophageal aspiration port (four lumens). It is a bridge (<24 h) with real risks — mucosal necrosis, aspiration, and fatal airway obstruction if it migrates.",
      ref: "Garcia-Tsao G et al., Hepatology 2017 (AASLD) · UK BSG variceal guideline.",
      render: () => <BalloonTamponadeFig />,
    },

    "mis-poem-steps": {
      title: "POEM — per-oral endoscopic myotomy",
      caption:
        "POEM is an incisionless endoscopic myotomy for achalasia. After a short mucosal incision (mucosotomy), a submucosal tunnel is created down across the gastro-oesophageal junction; a selective myotomy then divides the circular muscle, and the mucosotomy is closed with clips. Because the tunnel length is adjustable, POEM is especially suited to type III (spastic) achalasia where a longer myotomy is needed; the main trade-off versus a Heller is a higher rate of post-procedure reflux.",
      ref: "Inoue H et al., Endoscopy 2010;42:265 · Werner YB et al., N Engl J Med 2019.",
      render: () => <PoemStepsFig />,
    },

    "mis-peg-pull": {
      title: "PEG — pull technique & bumper apposition",
      caption:
        "In the pull technique, the endoscope transilluminates the abdominal wall and a finger indentation confirms a safe window; a needle is passed into the stomach, a guidewire is snared and drawn out through the mouth, and the PEG tube is then pulled down until its internal bumper apposes the gastric mucosa against the abdominal wall (a gastropexy). Over-tightening the bumper risks buried-bumper syndrome, and a tube dislodged before the tract matures (~2–4 weeks) must not be blindly replaced.",
      ref: "Gauderer MW et al., J Pediatr Surg 1980;15:872 (original) · ESGE PEG guideline 2021.",
      render: () => <PegPullFig />,
    },

  });
})();
