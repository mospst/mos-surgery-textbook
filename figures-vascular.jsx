// figures-vascular.jsx — original SVG teaching diagrams for vascular surgery.
//
// Renders offline, theme-aware via CSS custom properties (light + dark mode).
// No external images or internet required. All classifications are accurate
// and sourced from current guidelines.

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
  // AAA diameter / repair threshold ladder
  // ─────────────────────────────────────────────────────────────────────────
  function AaaLadderFig() {
    // Each rung: diameter label, right-side note, fill (LUMEN = bland, ASOFT = highlight)
    const rungs = [
      { d: "< 3.0 cm",     label: "Normal / ectatic",          fill: LUMEN,  accent: false },
      { d: "3.0 – 3.9 cm", label: "Small AAA — 3-yrly scan",   fill: WALL,   accent: false },
      { d: "4.0 – 4.9 cm", label: "Moderate AAA — 6-mth scan", fill: WALL,   accent: false },
      { d: "5.0 – 5.4 cm", label: "3-mth scan | repair ♀",     fill: ASOFT, accent: true  },
      { d: "≥ 5.5 cm",     label: "Elective repair ♂",          fill: ASOFT, accent: true  },
      { d: "> 1 cm/yr",    label: "Rapid growth → repair",      fill: ASOFT, accent: true  },
    ];

    const x0 = 14, dW = 146, noteX = x0 + dW + 18;
    const rowH = 38, topY = 44;

    return (
      <svg {...svgProps("0 0 620 310")}>
        {/* Column headers */}
        <text {...T(x0 + dW / 2, 28, 12, { fill: SOFT, fontWeight: 600, textAnchor: "middle" })}>Diameter</text>
        <text x={noteX} y={28} fontSize="12" fill={SOFT} fontWeight="600" textAnchor="start">Clinical action</text>

        {rungs.map((r, i) => {
          const y = topY + i * rowH;
          return (
            <g key={r.d}>
              {/* Diameter box */}
              <rect x={x0} y={y} width={dW} height={rowH - 4} rx="4"
                fill={r.fill} stroke={r.accent ? ACCENT : RULE} strokeWidth={r.accent ? 1.8 : 1} />
              <text {...T(x0 + dW / 2, y + rowH / 2 + 1, 13.5, { fontWeight: r.accent ? 700 : 500, fill: r.accent ? ACCENT : INK })}>
                {r.d}
              </text>
              {/* Action note */}
              <text x={noteX} y={y + rowH / 2 + 5} fontSize="12.5" fill={r.accent ? ACCENT : MUTE}
                textAnchor="start" fontWeight={r.accent ? 600 : 400}>{r.label}</text>
              {/* Connector tick */}
              <line x1={x0 + dW} y1={y + (rowH - 4) / 2} x2={noteX - 6} y2={y + (rowH - 4) / 2}
                stroke={r.accent ? ACCENT : RULE} strokeWidth="1" strokeDasharray="3 3" />
            </g>
          );
        })}

        {/* Arrow on left suggesting increasing size */}
        <line x1={x0 - 10} y1={topY} x2={x0 - 10} y2={topY + rungs.length * rowH - 8}
          stroke={SOFT} strokeWidth="1.5" />
        <polygon points={`${x0 - 14},${topY + rungs.length * rowH - 8} ${x0 - 6},${topY + rungs.length * rowH - 8} ${x0 - 10},${topY + rungs.length * rowH + 2}`}
          fill={SOFT} />
        <text x={x0 + 2} y={topY - 6} fontSize="10" fill={SOFT} textAnchor="middle">size</text>

        {/* Footnote — split across two lines to stay within viewBox width */}
        <text x={x0} y={topY + rungs.length * rowH + 20} fontSize="10.5" fill={SOFT} textAnchor="start">
          ♀ women ≥5.0 cm · ♂ men ≥5.5 cm · Normal infrarenal aorta ~2.0 cm
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Aortic dissection — Stanford A/B + DeBakey I/II/III anatomy
  // ─────────────────────────────────────────────────────────────────────────
  function AorticDissectionFig() {
    // Aortic silhouette: ascending, arch, descending (schematic side view)
    // Drawn as a simplified aorta outline with a false-lumen shading overlay.

    // viewBox 660 × 310
    const aortaColor = WALL;
    const flColor = ASOFT;      // false lumen
    const flStroke = ACCENT;

    // Ascending aorta region x: 80–210, arch top ~60, descending x: 340–440
    // We'll draw left panel (Type A / DeBakey I & II) and right panel (Type B / DeBakey III)

    const panel = (ox, label, subLabel, classLabel, classColor, tearX, extendDesc) => {
      // Outer aorta wall (simplified)
      const ascX1 = ox + 30, ascX2 = ox + 80;
      const archTopY = 50;
      const descX1 = ox + 160, descX2 = ox + 210;
      const botY = 270;

      // Aorta outline path (ascending → arch → descending)
      const outerPath = `
        M ${ascX1} ${botY}
        L ${ascX1} ${archTopY + 30}
        Q ${ascX1} ${archTopY} ${(ascX1 + ascX2) / 2} ${archTopY}
        Q ${ascX2} ${archTopY} ${ascX2} ${archTopY + 30}
        L ${ascX2} ${archTopY + 60}
        Q ${ascX2 + 40} ${archTopY + 30} ${descX1} ${archTopY + 60}
        L ${descX1} ${botY}
        Z
      `;
      const innerAscX1 = ascX1 + 14, innerAscX2 = ascX2 - 14;
      const innerDescX1 = descX1 + 14, innerDescX2 = descX2 - 14;

      // True lumen (inner tube)
      const innerPath = `
        M ${innerAscX1} ${botY}
        L ${innerAscX1} ${archTopY + 36}
        Q ${innerAscX1} ${archTopY + 14} ${(innerAscX1 + innerAscX2) / 2} ${archTopY + 14}
        Q ${innerAscX2} ${archTopY + 14} ${innerAscX2} ${archTopY + 36}
        L ${innerAscX2} ${archTopY + 58}
        Q ${innerAscX2 + 28} ${archTopY + 34} ${innerDescX1} ${archTopY + 60}
        L ${innerDescX1} ${botY}
        Z
      `;

      // False lumen region — ascending only, or ascending+descending
      const flAscPath = `
        M ${ascX1 + 2} ${botY}
        L ${ascX1 + 2} ${archTopY + 32}
        Q ${ascX1 + 2} ${archTopY + 2} ${(ascX1 + ascX2) / 2} ${archTopY + 2}
        Q ${ascX2 - 2} ${archTopY + 2} ${ascX2 - 2} ${archTopY + 32}
        L ${innerAscX2} ${archTopY + 36}
        Q ${innerAscX2} ${archTopY + 14} ${(innerAscX1 + innerAscX2) / 2} ${archTopY + 14}
        Q ${innerAscX1} ${archTopY + 14} ${innerAscX1} ${archTopY + 36}
        L ${innerAscX1} ${botY}
        Z
      `;

      const flDescPath = `
        M ${descX1 + 2} ${archTopY + 62}
        L ${descX1 + 2} ${botY}
        L ${innerDescX1} ${botY}
        L ${innerDescX1} ${archTopY + 62}
        Z
      `;

      return (
        <g key={label}>
          {/* Aorta wall fill */}
          <path d={outerPath} fill={aortaColor} stroke={INK} strokeWidth="2" />
          {/* True lumen */}
          <path d={innerPath} fill={LUMEN} stroke={RULE} strokeWidth="1" />
          {/* False lumen — ascending */}
          <path d={flAscPath} fill={flColor} stroke={flStroke} strokeWidth="1.5" strokeDasharray="5 3" />
          {/* False lumen — descending if needed */}
          {extendDesc && <path d={flDescPath} fill={flColor} stroke={flStroke} strokeWidth="1.5" strokeDasharray="5 3" />}
          {/* Tear mark */}
          <line x1={tearX} y1={archTopY + 40} x2={tearX + 18} y2={archTopY + 55}
            stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          <line x1={tearX + 18} y1={archTopY + 55} x2={tearX} y2={archTopY + 70}
            stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          {/* Labels */}
          <text {...T(ox + 120, 20, 14.5, { fontWeight: 700 })}>{label}</text>
          <text {...T(ox + 120, 36, 11, { fill: SOFT })}>{subLabel}</text>
          <text {...T(ox + 120, 52, 11, { fill: ACCENT, fontWeight: 600 })}>{classLabel}</text>
        </g>
      );
    };

    // DeBakey II — ascending only (no arch/descending extension of false lumen)
    const panelDebakey2 = (ox) => {
      const ascX1 = ox + 30, ascX2 = ox + 80;
      const archTopY = 50;
      const descX1 = ox + 160, descX2 = ox + 210;
      const botY = 270;
      const innerAscX1 = ascX1 + 14, innerAscX2 = ascX2 - 14;
      const innerDescX1 = descX1 + 14, innerDescX2 = descX2 - 14;
      const outerPath = `M ${ascX1} ${botY} L ${ascX1} ${archTopY+30} Q ${ascX1} ${archTopY} ${(ascX1+ascX2)/2} ${archTopY} Q ${ascX2} ${archTopY} ${ascX2} ${archTopY+30} L ${ascX2} ${archTopY+60} Q ${ascX2+40} ${archTopY+30} ${descX1} ${archTopY+60} L ${descX1} ${botY} Z`;
      const innerPath = `M ${innerAscX1} ${botY} L ${innerAscX1} ${archTopY+36} Q ${innerAscX1} ${archTopY+14} ${(innerAscX1+innerAscX2)/2} ${archTopY+14} Q ${innerAscX2} ${archTopY+14} ${innerAscX2} ${archTopY+36} L ${innerAscX2} ${archTopY+58} Q ${innerAscX2+28} ${archTopY+34} ${innerDescX1} ${archTopY+60} L ${innerDescX1} ${botY} Z`;
      const flAscOnly = `M ${ascX1+2} ${botY} L ${ascX1+2} ${archTopY+32} Q ${ascX1+2} ${archTopY+2} ${(ascX1+ascX2)/2} ${archTopY+2} Q ${ascX2-2} ${archTopY+2} ${ascX2-2} ${archTopY+32} L ${innerAscX2} ${archTopY+36} Q ${innerAscX2} ${archTopY+14} ${(innerAscX1+innerAscX2)/2} ${archTopY+14} Q ${innerAscX1} ${archTopY+14} ${innerAscX1} ${archTopY+36} L ${innerAscX1} ${botY} Z`;
      const tearX = ascX2 - 6;
      return (
        <g key="db2">
          <path d={outerPath} fill={aortaColor} stroke={INK} strokeWidth="2" />
          <path d={innerPath} fill={LUMEN} stroke={RULE} strokeWidth="1" />
          <path d={flAscOnly} fill={flColor} stroke={flStroke} strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1={tearX} y1={archTopY+40} x2={tearX+14} y2={archTopY+52} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          <line x1={tearX+14} y1={archTopY+52} x2={tearX} y2={archTopY+64} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          <text {...T(ox+120, 20, 14.5, { fontWeight: 700 })}>DeBakey II</text>
          <text {...T(ox+120, 36, 11, { fill: SOFT })}>Ascending only</text>
          <text {...T(ox+120, 52, 11, { fill: ACCENT, fontWeight: 600 })}>Stanford A — surgery</text>
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 680 320")}>
        {/* Legend */}
        <rect x={14} y={290} width={16} height={10} fill={ASOFT} stroke={ACCENT} strokeWidth="1.2" strokeDasharray="4 2" />
        <text x={34} y={299} fontSize="10.5" fill={SOFT} textAnchor="start">False lumen</text>
        <rect x={110} y={290} width={16} height={10} fill={LUMEN} stroke={RULE} strokeWidth="1" />
        <text x={130} y={299} fontSize="10.5" fill={SOFT} textAnchor="start">True lumen</text>

        {/* Panel 1: DeBakey I = Stanford A (ascending + arch + descending) */}
        {panel(14, "DeBakey I", "Asc + arch + desc", "Stanford A — surgery", ACCENT, 75, true)}

        {/* Panel 2: DeBakey II = Stanford A (ascending only) */}
        {panelDebakey2(240)}

        {/* Panel 3: DeBakey III = Stanford B (descending only) */}
        {panel(466, "DeBakey III", "Descending only", "Stanford B — medical/TEVAR", ACCENT, 620, false)}
        {/* For DeBakey III we need descending false lumen, not ascending */}
        {/* Overlay: suppress ascending false lumen painted in panel(), redraw desc */}
        {(() => {
          const ox = 466;
          const ascX1 = ox + 30, ascX2 = ox + 80, archTopY = 50, descX1 = ox + 160, botY = 270;
          const innerAscX1 = ascX1 + 14, innerAscX2 = ascX2 - 14;
          const innerDescX1 = descX1 + 14;
          // blank the ascending false lumen drawn by panel()
          const blankAsc = `M ${ascX1+1} ${botY} L ${ascX1+1} ${archTopY+33} Q ${ascX1+1} ${archTopY+3} ${(ascX1+ascX2)/2} ${archTopY+3} Q ${ascX2-3} ${archTopY+3} ${ascX2-3} ${archTopY+33} L ${innerAscX2-1} ${archTopY+37} Q ${innerAscX2-1} ${archTopY+15} ${(innerAscX1+innerAscX2)/2} ${archTopY+15} Q ${innerAscX1+1} ${archTopY+15} ${innerAscX1+1} ${archTopY+37} L ${innerAscX1+1} ${botY} Z`;
          const descFL = `M ${descX1+2} ${archTopY+62} L ${descX1+2} ${botY} L ${innerDescX1} ${botY} L ${innerDescX1} ${archTopY+62} Z`;
          return (
            <g key="db3-overlay">
              <path d={blankAsc} fill={LUMEN} stroke="none" />
              <path d={descFL} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="5 3" />
            </g>
          );
        })()}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // NASCET carotid stenosis measurement schematic
  // ─────────────────────────────────────────────────────────────────────────
  function NascetFig() {
    // Schematic CCA → bifurcation → ICA with plaque narrowing
    // NASCET = (1 - residual/distal-normal) × 100 %
    // ECST  = (1 - residual/local-bulb-diam) × 100 %

    const ccaX1 = 120, ccaX2 = 200; // CCA lumen x bounds
    const bifY = 190;
    // ICA goes upper-right, ECA upper-left (schematic)
    const icaX1 = 152, icaX2 = 220; // ICA lumen (with stenosis)
    const ecaX1 = 80, ecaX2 = 135;

    // Plaque region in ICA bulb: y 150–70, narrowing residual = 8 px
    const stenosisTopY = 70, stenosisY = 150;
    const plaqueLeft = icaX1 + 10; // residual lumen starts here
    const plaqueRight = icaX2 - 10;
    const residualLeft = (icaX1 + icaX2) / 2 - 8;
    const residualRight = (icaX1 + icaX2) / 2 + 8;

    // Normal ICA above plaque (y < 70)
    const normalIcaX1 = icaX1 + 8, normalIcaX2 = icaX2 - 8;
    const normalDiam = normalIcaX2 - normalIcaX1;
    const residualDiam = residualRight - residualLeft;

    return (
      <svg {...svgProps("0 0 580 360")}>
        {/* CCA */}
        <rect x={ccaX1} y={bifY} width={ccaX2 - ccaX1} height={120} fill={LUMEN} stroke={INK} strokeWidth="2" />
        <text {...T((ccaX1 + ccaX2) / 2, bifY + 140, 11.5, { fill: SOFT })}>CCA</text>

        {/* ECA (left fork) */}
        <path d={`M ${ccaX1} ${bifY} L ${ecaX1} ${bifY - 80} L ${ecaX2} ${bifY - 80} L ${ccaX2 - 5} ${bifY} Z`}
          fill={LUMEN} stroke={INK} strokeWidth="2" />
        <text {...T((ecaX1 + ecaX2) / 2, bifY - 92, 11.5, { fill: SOFT })}>ECA</text>

        {/* ICA lower (bulb) */}
        <path d={`M ${ccaX2 - 10} ${bifY} L ${icaX1} ${stenosisY} L ${icaX2} ${stenosisY} L ${ccaX2} ${bifY} Z`}
          fill={LUMEN} stroke={INK} strokeWidth="2" />

        {/* Plaque — fills ICA bulb around stenosis */}
        <path d={`M ${icaX1} ${stenosisY} L ${plaqueLeft} ${stenosisTopY + 40} L ${residualLeft} ${stenosisTopY} L ${residualRight} ${stenosisTopY} L ${plaqueRight} ${stenosisTopY + 40} L ${icaX2} ${stenosisY} Z`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />
        <text {...T((icaX1 + icaX2) / 2, (stenosisY + stenosisTopY) / 2 + 10, 10.5, { fill: ACCENT, fontWeight: 600 })}>Plaque</text>

        {/* ICA above plaque (normal distal lumen) */}
        <rect x={normalIcaX1} y={14} width={normalDiam} height={stenosisTopY} fill={LUMEN} stroke={INK} strokeWidth="2" />
        <text {...T((normalIcaX1 + normalIcaX2) / 2, 10, 11.5, { fill: SOFT })}>ICA (distal normal)</text>

        {/* ── NASCET measurement arrows ── */}
        {/* Residual lumen bracket */}
        <line x1={residualLeft} y1={stenosisTopY + 20} x2={residualRight} y2={stenosisTopY + 20}
          stroke={ACCENT} strokeWidth="2" markerEnd="none" />
        <line x1={residualLeft} y1={stenosisTopY + 14} x2={residualLeft} y2={stenosisTopY + 26} stroke={ACCENT} strokeWidth="1.8" />
        <line x1={residualRight} y1={stenosisTopY + 14} x2={residualRight} y2={stenosisTopY + 26} stroke={ACCENT} strokeWidth="1.8" />
        <text {...T((residualLeft + residualRight) / 2, stenosisTopY + 38, 10, { fill: ACCENT, fontWeight: 600 })}>residual</text>

        {/* Normal ICA diam bracket (right side) */}
        <line x1={normalIcaX2 + 18} y1={14} x2={normalIcaX2 + 18} y2={stenosisTopY}
          stroke={INK} strokeWidth="1.6" />
        <line x1={normalIcaX2 + 12} y1={14} x2={normalIcaX2 + 24} y2={14} stroke={INK} strokeWidth="1.6" />
        <line x1={normalIcaX2 + 12} y1={stenosisTopY} x2={normalIcaX2 + 24} y2={stenosisTopY} stroke={INK} strokeWidth="1.6" />
        <text x={normalIcaX2 + 30} y={stenosisTopY / 2 + 5} fontSize="10" fill={MUTE} textAnchor="start">distal</text>
        <text x={normalIcaX2 + 30} y={stenosisTopY / 2 + 17} fontSize="10" fill={MUTE} textAnchor="start">normal</text>

        {/* Formula box */}
        <rect x={300} y={30} width={258} height={80} rx="6" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text {...T(429, 52, 12.5, { fontWeight: 700 })}>NASCET % stenosis</text>
        <text {...T(429, 72, 13, { fill: ACCENT, fontWeight: 600 })}>= (1 – residual ÷ distal) × 100</text>
        <text {...T(429, 92, 10.5, { fill: SOFT })}>Uses normal distal ICA as denominator</text>

        <rect x={300} y={125} width={258} height={66} rx="6" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text {...T(429, 146, 12.5, { fontWeight: 700 })}>Intervention thresholds</text>
        <text {...T(429, 164, 11.5, { fill: MUTE })}>Symptomatic ≥ 50–69%: CEA recommended</text>
        <text {...T(429, 180, 11.5, { fill: ACCENT, fontWeight: 600 })}>Symptomatic ≥ 70–99%: CEA strongly rec.</text>

        {/* Rutherford Fontaine note box */}
        <rect x={300} y={205} width={258} height={56} rx="6" fill={LUMEN} stroke={RULE} strokeWidth="1" />
        <text {...T(429, 225, 11, { fill: SOFT })}>Asymptomatic ≥ 60–70%: CEA if</text>
        <text {...T(429, 240, 11, { fill: SOFT })}>operator risk &lt; 3% + life expectancy &gt; 5 yr</text>
        <text {...T(429, 254, 10, { fill: MUTE })}>NASCET method (not ECST — different denominators)</text>

        {/* ICA label */}
        <text x={icaX2 + 6} y={stenosisY + 10} fontSize="11.5" fill={SOFT} textAnchor="start">ICA</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Rutherford PAD classification ladder (with Fontaine equivalents)
  // ─────────────────────────────────────────────────────────────────────────
  function RutherfordFig() {
    const rows = [
      { rut: "0 / 0",   font: "I",    symptom: "Asymptomatic",                     cli: false },
      { rut: "I / 1",   font: "IIa",  symptom: "Mild claudication",                cli: false },
      { rut: "I / 2",   font: "IIa",  symptom: "Moderate claudication",            cli: false },
      { rut: "I / 3",   font: "IIb",  symptom: "Severe claudication",              cli: false },
      { rut: "II / 4",  font: "III",  symptom: "Rest pain",                        cli: true  },
      { rut: "III / 5", font: "IV",   symptom: "Minor tissue loss (ulcer/gangrene)", cli: true },
      { rut: "III / 6", font: "IV",   symptom: "Major tissue loss (above TM)",     cli: true  },
    ];

    const x0 = 14, rutW = 80, fontW = 58, rowH = 34, noteX = x0 + rutW + fontW + 14;
    const topY = 52;

    return (
      <svg {...svgProps("0 0 620 326")}>
        {/* Headers */}
        <text {...T(x0 + rutW / 2, 28, 11, { fill: SOFT, fontWeight: 600 })}>Rutherford</text>
        <text {...T(x0 + rutW / 2, 42, 10, { fill: SOFT })}>Cat / Grade</text>
        <text {...T(x0 + rutW + fontW / 2, 35, 11, { fill: SOFT, fontWeight: 600 })}>Fontaine</text>
        <text x={noteX} y={38} fontSize="11" fill={SOFT} fontWeight="600" textAnchor="start">Symptom</text>

        {/* CLI label */}
        <text x={520} y={topY + 3 * rowH + 12} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="middle">CLTI</text>
        <line x1={510} y1={topY + 3 * rowH + 2} x2={510} y2={topY + 7 * rowH - 4}
          stroke={ACCENT} strokeWidth="2" />

        {rows.map((r, i) => {
          const y = topY + i * rowH;
          const bg = r.cli ? ASOFT : LUMEN;
          const border = r.cli ? ACCENT : RULE;
          const fw = r.cli ? 600 : 400;
          const textColor = r.cli ? ACCENT : INK;
          return (
            <g key={r.rut}>
              <rect x={x0} y={y} width={rutW} height={rowH - 2} rx="3"
                fill={bg} stroke={border} strokeWidth={r.cli ? 1.6 : 1} />
              <text {...T(x0 + rutW / 2, y + rowH / 2 + 4, 12.5, { fontWeight: fw, fill: textColor })}>{r.rut}</text>

              <rect x={x0 + rutW} y={y} width={fontW} height={rowH - 2} rx="3"
                fill={bg} stroke={border} strokeWidth={r.cli ? 1.6 : 1} />
              <text {...T(x0 + rutW + fontW / 2, y + rowH / 2 + 4, 12.5, { fontWeight: fw, fill: textColor })}>{r.font}</text>

              <text x={noteX} y={y + rowH / 2 + 4} fontSize="12" fill={r.cli ? ACCENT : MUTE}
                textAnchor="start" fontWeight={fw}>{r.symptom}</text>
            </g>
          );
        })}

        <text x={x0} y={topY + rows.length * rowH + 20} fontSize="10.5" fill={SOFT} textAnchor="start">
          CLTI = Chronic Limb-Threatening Ischaemia (Rutherford 4–6 / Fontaine III–IV) · TM = transmetatarsal
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Acute mesenteric ischaemia — SMA embolus vs thrombosis anatomy
  // ─────────────────────────────────────────────────────────────────────────
  function MesentericIschFig() {
    // Schematic aorta (vertical) with SMA origin, jejunal & ileocolic branches
    // Left panel = embolus (lodges 3–10 cm from SMA origin, sparing first jejunal)
    // Right panel = thrombosis (occludes at SMA ostium — total territory)

    const aX = 90, aW = 40; // aorta rect
    const smaOriginY = 100; // SMA origin on aorta
    const smaTipY = 280;
    const smaX = aX + aW + 10; // SMA runs right then down

    const panel = (ox, title, subtitle, blockY, blockLabel, color) => {
      // Aorta
      const ax = ox + 10, aw = 34;
      const smaOX = ax + aw + 6;
      const smaOY = smaOriginY;
      const smaTY = smaTipY;

      // SMA trunk goes right then down (simplified)
      const smaPath = `M ${smaOX} ${smaOY} Q ${smaOX + 60} ${smaOY + 10} ${smaOX + 55} ${smaOY + 60} L ${smaOX + 55} ${smaTY}`;

      // Branches off SMA trunk
      const branches = [
        { name: "Middle colic", y: smaOY + 30,  x: smaOX + 50, bx: smaOX + 130 },
        { name: "Right colic",  y: smaOY + 90,  x: smaOX + 55, bx: smaOX + 120 },
        { name: "Ileocolic",    y: smaOY + 150, x: smaOX + 55, bx: smaOX + 115 },
        { name: "Jejunal",      y: smaOY + 50,  x: smaOX + 53, bx: smaOX + 20, dir: "left" },
      ];

      const isBlocked = (by) => blockY !== null && by >= blockY;
      const blockYAbs = blockY !== null ? smaOY + blockY : null;

      return (
        <g key={title}>
          {/* Aorta */}
          <rect x={ax} y={60} width={aw} height={260} rx="6" fill={WALL} stroke={INK} strokeWidth="2" />
          <text {...T(ax + aw / 2, 50, 11, { fill: SOFT })}>Aorta</text>

          {/* SMA trunk */}
          <path d={smaPath} fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />

          {/* Branches */}
          {branches.map((b) => {
            const branchBlocked = blockYAbs !== null && b.y >= blockYAbs;
            const branchColor = branchBlocked ? SOFT : INK;
            const branchStroke = branchBlocked ? "4 3" : null;
            if (b.dir === "left") {
              return (
                <g key={b.name}>
                  <line x1={smaOX + 52} y1={b.y} x2={b.bx} y2={b.y - 14}
                    stroke={branchColor} strokeWidth="2.2" strokeDasharray={branchStroke || ""} />
                  <text x={b.bx - 2} y={b.y - 22} fontSize="10" fill={branchBlocked ? SOFT : MUTE} textAnchor="end">{b.name}</text>
                </g>
              );
            }
            return (
              <g key={b.name}>
                <line x1={smaOX + 55} y1={b.y} x2={b.bx} y2={b.y - 10}
                  stroke={branchColor} strokeWidth="2.2" strokeDasharray={branchStroke || ""} />
                <text x={b.bx + 4} y={b.y - 16} fontSize="10" fill={branchBlocked ? SOFT : MUTE} textAnchor="start">{b.name}</text>
              </g>
            );
          })}

          {/* Occlusion marker */}
          {blockYAbs !== null && (
            <g>
              <ellipse cx={smaOX + 55} cy={blockYAbs} rx={12} ry={8}
                fill={color} stroke={ACCENT} strokeWidth="2" opacity="0.9" />
              <text {...T(smaOX + 85, blockYAbs + 4, 10, { fill: ACCENT, fontWeight: 700, textAnchor: "start" })}>{blockLabel}</text>
            </g>
          )}

          {/* Title */}
          <text {...T(ox + 130, 22, 13.5, { fontWeight: 700 })}>{title}</text>
          <text {...T(ox + 130, 38, 11, { fill: SOFT })}>{subtitle}</text>
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 660 340")}>
        {/* Left: embolus — lodges ~3-10 cm distal to SMA origin, spares first jejunal branch */}
        {panel(0, "Embolus", "AF / valve → lodges 3–10 cm distal to ostium", 55, "Embolus", ACCENT)}

        {/* Divider */}
        <line x1={330} y1={20} x2={330} y2={320} stroke={RULE} strokeWidth="1" strokeDasharray="6 4" />

        {/* Right: thrombosis — at SMA ostium, entire SMA territory */}
        {panel(330, "Thrombosis", "Atherosclerosis → occludes at SMA ostium", 5, "Thrombus", ASOFT)}

        {/* Legend */}
        <line x1={14} y1={315} x2={40} y2={315} stroke={SOFT} strokeWidth="2.2" strokeDasharray="4 3" />
        <text x={46} y={319} fontSize="10" fill={SOFT} textAnchor="start">Ischaemic territory</text>
        <text x={14} y={332} fontSize="10" fill={SOFT} textAnchor="start">Embolus spares proximal jejunum (collaterals from celiac); thrombosis = total SMA territory</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CEAP clinical classes of chronic venous disease (C0–C6)
  // ─────────────────────────────────────────────────────────────────────────
  function CeapFig() {
    const rows = [
      { c: "C0", d: "No visible or palpable signs of venous disease", op: 0.08 },
      { c: "C1", d: "Telangiectasia or reticular veins", op: 0.16 },
      { c: "C2", d: "Varicose veins (≥ 3 mm)", op: 0.26 },
      { c: "C3", d: "Oedema", op: 0.36 },
      { c: "C4", d: "Skin changes — C4a pigmentation/eczema · C4b lipodermatosclerosis", op: 0.5 },
      { c: "C5", d: "Healed venous ulcer", op: 0.64 },
      { c: "C6", d: "Active venous ulcer", op: 0.82 },
    ];
    const x0 = 30, y0 = 56, rh = 34, chipW = 50;
    return (
      <svg {...svgProps("0 0 640 330")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>CEAP — clinical classes of chronic venous disease</text>
        {rows.map((r, i) => {
          const y = y0 + i * rh;
          return (
            <g key={r.c}>
              <rect x={x0} y={y} width={chipW} height={rh - 8} rx={4} fill={ACCENT} opacity={r.op} stroke={RULE} strokeWidth="1" />
              <text {...T(x0 + chipW / 2, y + (rh - 8) / 2 + 4, 12, { fontWeight: 700 })}>{r.c}</text>
              <text x={x0 + chipW + 16} y={y + (rh - 8) / 2 + 4} fontSize="10" fill={INK} textAnchor="start">{r.d}</text>
            </g>
          );
        })}
        <text x={x0} y={y0 + 7 * rh + 10} fontSize="9" fill={MUTE} textAnchor="start">Full CEAP also encodes Etiology · Anatomy · Pathophysiology (reflux vs obstruction).</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Shamblin classification of carotid body tumours (I–III)
  // ─────────────────────────────────────────────────────────────────────────
  function ShamblinFig() {
    const panels = [
      { t: "Shamblin I", d: ["small · minimal", "vessel attachment"], enc: 0 },
      { t: "Shamblin II", d: ["larger · partially", "encircles vessels"], enc: 1 },
      { t: "Shamblin III", d: ["encases carotids ·", "may need graft"], enc: 2 },
    ];
    const pw = 200;
    const Panel = (p, i) => {
      const ox = i * pw + 40, cy = 104;
      const tumR = [16, 25, 33][p.enc];
      return (
        <g key={p.t}>
          {i > 0 && <line x1={ox - 40} y1={54} x2={ox - 40} y2={196} stroke={RULE} strokeWidth="1" />}
          <circle cx={ox + 62} cy={cy - 2} r={tumR} fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
          <path d={`M ${ox + 62} ${cy + 66} L ${ox + 62} ${cy + 8}`} fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
          <path d={`M ${ox + 62} ${cy + 8} Q ${ox + 50} ${cy - 22} ${ox + 42} ${cy - 54}`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <path d={`M ${ox + 62} ${cy + 8} Q ${ox + 76} ${cy - 22} ${ox + 86} ${cy - 54}`} fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
          <text {...T(ox + 62, 176, 12, { fontWeight: 700 })}>{p.t}</text>
          {p.d.map((ln, k) => <text key={k} {...T(ox + 62, 192 + k * 13, 9, { fill: SOFT })}>{ln}</text>)}
        </g>
      );
    };
    return (
      <svg {...svgProps("0 0 640 230")}>
        <text {...T(320, 22, 14, { fontWeight: 700 })}>Shamblin classification — carotid body tumour</text>
        <text {...T(320, 42, 9, { fill: SOFT })}>ICA (left) &amp; ECA (right) arise from the common carotid; encasement rises I→III</text>
        {panels.map((p, i) => Panel(p, i))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Thoracic outlet syndrome — anatomy & subtypes
  // ─────────────────────────────────────────────────────────────────────────
  function ThoracicOutletFig() {
    return (
      <svg {...svgProps("0 0 660 300")}>
        <text {...T(330, 24, 14, { fontWeight: 700 })}>Thoracic outlet syndrome — anatomy &amp; subtypes</text>
        <path d="M 40 96 Q 150 84 250 100" fill="none" stroke={INK} strokeWidth="10" strokeLinecap="round" />
        <text x={92} y={80} fontSize="9" fill={SOFT} textAnchor="middle">clavicle</text>
        <path d="M 46 196 Q 150 214 254 190" fill="none" stroke={INK} strokeWidth="9" strokeLinecap="round" />
        <text x={150} y={232} fontSize="9" fill={SOFT} textAnchor="middle">1st rib</text>
        <path d="M 152 62 L 204 62 L 208 190 L 150 192 Z" fill={ASOFT} opacity="0.5" />
        <line x1={150} y1={44} x2={146} y2={198} stroke={MUTE} strokeWidth="6" strokeLinecap="round" />
        <line x1={206} y1={44} x2={210} y2={196} stroke={MUTE} strokeWidth="6" strokeLinecap="round" />
        <text x={150} y={40} fontSize="8" fill={MUTE} textAnchor="middle">ant.</text>
        <text x={208} y={40} fontSize="8" fill={MUTE} textAnchor="middle">mid.</text>
        <line x1={120} y1={56} x2={122} y2={198} stroke={ACCENT} strokeWidth="3" />
        <line x1={168} y1={56} x2={172} y2={196} stroke={ACCENT} strokeWidth="3" />
        <line x1={184} y1={56} x2={190} y2={196} stroke={INK} strokeWidth="1.6" />
        <text x={38} y={130} fontSize="8.5" fill={INK} textAnchor="end">SC vein</text>
        <line x1={42} y1={127} x2={118} y2={122} stroke={RULE} strokeWidth="0.8" />
        <text x={286} y={72} fontSize="9" fill={ACCENT} fontWeight="700" textAnchor="start">interscalene triangle</text>
        <line x1={282} y1={68} x2={200} y2={104} stroke={RULE} strokeWidth="0.8" />
        <text x={286} y={158} fontSize="9" fill={ACCENT} fontWeight="700" textAnchor="start">costoclavicular space</text>
        <line x1={282} y1={154} x2={214} y2={150} stroke={RULE} strokeWidth="0.8" />
        <line x1={430} y1={56} x2={430} y2={252} stroke={RULE} strokeWidth="1" />
        <text x={452} y={72} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">Subtypes</text>
        {[
          ["Neurogenic (~95%)", "lower brachial plexus (C8–T1)"],
          ["Venous", "Paget-Schroetter (effort thrombosis)"],
          ["Arterial", "subclavian artery · cervical rib"],
        ].map((r, i) => (
          <g key={i}>
            <text x={452} y={102 + i * 46} fontSize="10.5" fill={ACCENT} fontWeight="700" textAnchor="start">{r[0]}</text>
            <text x={452} y={118 + i * 46} fontSize="9.5" fill={SOFT} textAnchor="start">{r[1]}</text>
          </g>
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Renal artery stenosis — atherosclerotic vs fibromuscular dysplasia
  // ─────────────────────────────────────────────────────────────────────────
  function RenalArteryStenosisFig() {
    const Panel = (ox, title, sub, kind) => {
      const aortaX = ox + 34, ry = 108;
      const e = [
        <rect key="ao" x={aortaX} y={44} width={22} height={140} fill={WALL} stroke={INK} strokeWidth="1.8" />,
        <path key="kid" d={`M ${ox + 214} ${ry - 34} C ${ox + 254} ${ry - 40} ${ox + 260} ${ry + 40} ${ox + 216} ${ry + 34} C ${ox + 198} ${ry + 30} ${ox + 202} ${ry + 12} ${ox + 216} ${ry} C ${ox + 202} ${ry - 12} ${ox + 198} ${ry - 30} ${ox + 214} ${ry - 34} Z`} fill={WALL} stroke={INK} strokeWidth="1.8" />,
      ];
      if (kind === "athero") {
        e.push(<path key="ra" d={`M ${aortaX + 22} ${ry} L ${ox + 214} ${ry}`} fill="none" stroke={ACCENT} strokeWidth="7" />);
        e.push(<circle key="pl" cx={aortaX + 30} cy={ry} r={9} fill={INK} opacity="0.82" />);
        e.push(<text key="pll" x={aortaX + 30} y={ry - 16} fontSize="8.5" fill={ACCENT} textAnchor="middle">ostial plaque</text>);
      } else {
        e.push(<path key="ra" d={`M ${aortaX + 22} ${ry} L ${ox + 214} ${ry}`} fill="none" stroke={ACCENT} strokeWidth="4" />);
        [132, 152, 172, 192].forEach((bx, k) => e.push(<circle key={"b" + k} cx={ox + bx} cy={ry} r={7} fill="none" stroke={ACCENT} strokeWidth="2.5" />));
        e.push(<text key="sbl" x={ox + 162} y={ry - 16} fontSize="8.5" fill={ACCENT} textAnchor="middle">string of beads</text>);
      }
      return (
        <g key={title}>
          <text {...T(ox + 140, 26, 12, { fontWeight: 700 })}>{title}</text>
          {e}
          <text x={aortaX + 11} y={200} fontSize="8.5" fill={SOFT} textAnchor="middle">aorta</text>
          {sub.map((ln, k) => <text key={k} {...T(ox + 140, 222 + k * 13, 9, { fill: SOFT })}>{ln}</text>)}
        </g>
      );
    };
    return (
      <svg {...svgProps("0 0 660 268")}>
        <line x1={330} y1={16} x2={330} y2={210} stroke={RULE} strokeWidth="1" />
        {Panel(0, "Atherosclerotic (~90%)", ["ostial / proximal narrowing", "older · CV risk factors"], "athero")}
        {Panel(330, "Fibromuscular dysplasia (~10%)", ["mid–distal 'string of beads'", "younger women"], "fmd")}
        <text {...T(330, 258, 9, { fill: MUTE })}>Both → renovascular hypertension via RAAS activation</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Wells score — clinical probability of DVT
  // ─────────────────────────────────────────────────────────────────────────
  function DvtWellsFig() {
    const items = [
      "Active cancer (treatment within 6 months)",
      "Paralysis / paresis / recent leg immobilisation",
      "Bedridden > 3 days or major surgery < 12 weeks",
      "Localised tenderness along the deep veins",
      "Entire leg swollen",
      "Calf > 3 cm larger than the asymptomatic side",
      "Pitting oedema (symptomatic leg only)",
      "Collateral superficial (non-varicose) veins",
      "Previously documented DVT",
    ];
    const x0 = 36, y0 = 56, rh = 20;
    return (
      <svg {...svgProps("0 0 620 350")}>
        <text {...T(310, 24, 14, { fontWeight: 700 })}>Wells score — clinical probability of DVT</text>
        {items.map((s, i) => (
          <g key={i}>
            <text x={x0} y={y0 + i * rh} fontSize="10" fill={INK} textAnchor="start">{s}</text>
            <text x={572} y={y0 + i * rh} fontSize="10" fill={ACCENT} fontWeight="700" textAnchor="end">+1</text>
          </g>
        ))}
        <text x={x0} y={y0 + 9 * rh} fontSize="10" fill={INK} textAnchor="start">Alternative diagnosis at least as likely as DVT</text>
        <text x={572} y={y0 + 9 * rh} fontSize="10" fill={MUTE} fontWeight="700" textAnchor="end">−2</text>
        <line x1={x0} y1={y0 + 9 * rh + 12} x2={572} y2={y0 + 9 * rh + 12} stroke={RULE} strokeWidth="1" />
        <text x={x0} y={y0 + 9 * rh + 34} fontSize="10.5" fill={ACCENT} fontWeight="700" textAnchor="start">Probability:  ≤ 0 low  ·  1–2 moderate  ·  ≥ 3 high</text>
        <text x={x0} y={y0 + 9 * rh + 56} fontSize="9" fill={SOFT} textAnchor="start">Proximal (popliteal &amp; above) DVT → higher PE risk, anticoagulate ·</text>
        <text x={x0} y={y0 + 9 * rh + 69} fontSize="9" fill={SOFT} textAnchor="start">isolated distal (calf) DVT → may serially survey with ultrasound</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Register all figures
  // ─────────────────────────────────────────────────────────────────────────
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "vasc-aaa-size-ladder": {
      title: "AAA size thresholds & repair criteria",
      caption: "The infrarenal aorta is aneurysmal at ≥ 3.0 cm (normal ~2.0 cm). Elective repair is recommended at ≥ 5.5 cm in men and ≥ 5.0 cm in women, or for rapid growth > 1 cm/year regardless of absolute size. Surveillance interval shortens as diameter increases.",
      ref: "SVS Clinical Practice Guidelines for AAA, J Vasc Surg 2018;67(1):2–77",
      render: () => <AaaLadderFig />,
    },

    "vasc-aortic-dissection-stanford-debakey": {
      title: "Aortic dissection: Stanford & DeBakey classification",
      caption: "Stanford type A (DeBakey I & II) involves the ascending aorta and is a surgical emergency — untreated mortality ~1–2%/hour. Stanford type B (DeBakey III) is confined to the descending thoracic aorta and is managed medically with aggressive blood pressure control; endovascular repair (TEVAR) for complicated cases.",
      ref: "ESC Guidelines on aortic diseases, Eur Heart J 2024;45:3148 · Daily et al., J Thorac Cardiovasc Surg 1970",
      render: () => <AorticDissectionFig />,
    },

    "vasc-nascet-carotid-stenosis": {
      title: "NASCET carotid stenosis measurement",
      caption: "NASCET measures residual lumen against the normal distal ICA (not the bulb), giving lower percentages than the ECST method for the same lesion. Symptomatic stenosis ≥ 70–99% has the greatest benefit from CEA; ≥ 50–69% has moderate benefit. Asymptomatic stenosis ≥ 60–70% may benefit if surgical risk is < 3%.",
      ref: "NASCET Collaborators, NEJM 1991;325:445 · ECST Collaborators, Lancet 1998;351:1379",
      render: () => <NascetFig />,
    },

    "vasc-rutherford-pad-stages": {
      title: "Rutherford & Fontaine PAD classification",
      caption: "Rutherford categories 0–3 (Fontaine I–IIb) represent haemodynamically significant but non-limb-threatening disease managed by risk-factor modification and supervised exercise. Categories 4–6 (Fontaine III–IV) define Chronic Limb-Threatening Ischaemia (CLTI) requiring urgent revascularisation to prevent amputation.",
      ref: "Rutherford RB et al., J Vasc Surg 1997;26:517 · Global Vascular Guidelines on CLTI, J Vasc Surg 2019;69(6S)",
      render: () => <RutherfordFig />,
    },

    "vasc-mesenteric-isch-anatomy": {
      title: "Acute mesenteric ischaemia: embolus vs thrombosis",
      caption: "SMA embolus (50–60% of cases) typically lodges 3–10 cm distal to the SMA ostium, often sparing the proximal jejunum via collaterals from the coeliac axis — a key clinical clue. SMA thrombosis occludes at the ostium on a background of severe atherosclerosis, causing total SMA territory ischaemia. Early CT angiography and embolectomy/revascularisation within the 'golden 6 hours' are critical.",
      ref: "Brandt LJ & Boley SJ, Gastroenterol Clin North Am 2003 · ESVS Guidelines, Eur J Vasc Endovasc Surg 2017;53(4):460",
      render: () => <MesentericIschFig />,
    },

    "vasc-ceap-classification": {
      title: "CEAP clinical classification of chronic venous disease",
      caption:
        "The clinical (C) axis of CEAP grades chronic venous disease from C0 (no signs) through varicose veins (C2), oedema (C3) and skin changes (C4) to healed (C5) and active (C6) venous ulceration. It standardises severity and drives management — from compression for early classes to intervention for symptomatic reflux and ulceration. The full CEAP additionally records Etiology, Anatomy and Pathophysiology (reflux vs obstruction).",
      ref: "Lurie F et al., J Vasc Surg Venous Lymphat Disord 2020;8:342 (CEAP 2020 revision).",
      render: () => <CeapFig />,
    },

    "vasc-shamblin": {
      title: "Shamblin classification — carotid body tumour",
      caption:
        "Shamblin grade describes how far a carotid body (paraganglioma) tumour encases the carotid bifurcation and predicts operative difficulty and vascular risk. Group I tumours are small and easily dissected off the vessels; Group II tumours partially surround and adhere to the carotids; Group III tumours encase the vessels and may require carotid resection and reconstruction. Higher grade means greater blood loss and cranial-nerve/vascular injury risk.",
      ref: "Shamblin WR et al., Am J Surg 1971;122:732.",
      render: () => <ShamblinFig />,
    },

    "vasc-thoracic-outlet": {
      title: "Thoracic outlet syndrome — anatomy & subtypes",
      caption:
        "The neurovascular bundle can be compressed in the interscalene triangle, the costoclavicular space, or beneath pectoralis minor. Neurogenic TOS is by far the commonest (~95%), affecting the lower brachial plexus (C8–T1). Venous TOS causes subclavian-vein 'effort thrombosis' (Paget-Schroetter), and arterial TOS — the rarest but most dangerous — involves the subclavian artery and is strongly associated with a cervical rib.",
      ref: "Illig KA et al., J Vasc Surg 2016;64:e23 (SVS reporting standards).",
      render: () => <ThoracicOutletFig />,
    },

    "vasc-renal-artery-stenosis": {
      title: "Renal artery stenosis — atherosclerotic vs FMD",
      caption:
        "Around 90% of renal artery stenosis is atherosclerotic — an ostial or proximal narrowing in older patients with cardiovascular risk factors. Most of the remainder is fibromuscular dysplasia, a mid-to-distal 'string of beads' typically in younger women. Both reduce renal perfusion and activate the renin–angiotensin–aldosterone system, causing renovascular hypertension; FMD responds well to angioplasty, whereas atherosclerotic lesions are usually managed medically.",
      ref: "Lao D et al., Circulation 2011 · ACC/AHA PAD guideline.",
      render: () => <RenalArteryStenosisFig />,
    },

    "vasc-dvt-wells": {
      title: "Wells score — clinical probability of DVT",
      caption:
        "The Wells score stratifies pre-test probability of a deep vein thrombosis and directs the work-up: a low score (≤0) with a negative D-dimer effectively excludes DVT, while a higher score prompts compression ultrasound. Proximal DVT (popliteal vein and above) carries a substantial pulmonary-embolism risk and is anticoagulated, whereas an isolated distal (calf) DVT may instead be followed with serial ultrasound in selected low-risk patients.",
      ref: "Wells PS et al., N Engl J Med 2003;349:1227.",
      render: () => <DvtWellsFig />,
    },

  });
})();
