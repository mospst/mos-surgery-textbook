// figures-uppergi.jsx — Upper GI & Small Bowel SVG teaching diagrams.
// Rendered inline by the app (offline, theme-aware via CSS custom properties).

(function () {
  const INK   = "var(--ink)";
  const MUTE  = "var(--ink-mute)";
  const SOFT  = "var(--ink-soft)";
  const RULE  = "var(--rule-strong)";
  const ACCENT= "var(--accent)";
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
  // Hiatus hernia types I–IV
  // Shows sagittal cross-section schematic for all four types,
  // emphasising GEJ position relative to the diaphragm.
  // ─────────────────────────────────────────────────────────────────────────
  function HiatusHerniaFig() {
    // Each panel: 160 wide × 260 tall, 4 panels across
    const panelW = 160, panelH = 260, cols = 4;
    const diagY = 120; // diaphragm Y within each panel
    const hiatus = 28; // half-width of hiatus opening

    // Draws one schematic panel
    // type: 1 = sliding, 2 = rolling, 3 = mixed, 4 = upside-down
    function Panel({ idx, label, sublabel }) {
      const ox = idx * panelW;
      const cx = ox + panelW / 2;

      // Thoracic cavity (above diaphragm)
      const thoraxTop = 40;
      // Abdominal cavity (below diaphragm)
      const abdBottom = panelH - 20;

      // ─── diaphragm as two arches left and right of hiatus ───
      const diaph = [
        // left arch
        <path key="dl"
          d={`M ${ox + 8} ${diagY} Q ${cx - hiatus - 18} ${diagY - 18} ${cx - hiatus} ${diagY}`}
          fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />,
        // right arch
        <path key="dr"
          d={`M ${cx + hiatus} ${diagY} Q ${cx + hiatus + 18} ${diagY - 18} ${ox + panelW - 8} ${diagY}`}
          fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />,
      ];

      // Shared: oesophagus coming down from top
      // GEJ and stomach vary by type
      let oesophagusBottom; // where oesophagus tube ends
      let gejY;             // y of gastro-oesophageal junction
      let stomachEl;        // JSX for stomach blob

      if (idx === 0) {
        // Type I – sliding: GEJ slides above diaphragm, stomach below
        oesophagusBottom = diagY - 8;
        gejY = diagY - 8;
        stomachEl = (
          <g key="st">
            {/* cardia above diaphragm */}
            <ellipse cx={cx} cy={diagY - 22} rx={18} ry={14}
              fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
            {/* stomach body below */}
            <path d={`M ${cx - 22} ${diagY + 10} Q ${cx - 36} ${diagY + 70} ${cx} ${diagY + 100} Q ${cx + 32} ${diagY + 70} ${cx + 22} ${diagY + 10}`}
              fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
            {/* GEJ marker */}
            <line x1={cx - 24} y1={gejY} x2={cx + 24} y2={gejY} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" />
            <text {...T(cx, gejY - 6, 9, { fill: ACCENT })}>GEJ</text>
          </g>
        );
      } else if (idx === 1) {
        // Type II – rolling (pure paraoesophageal): GEJ stays below, fundus rolls up alongside
        oesophagusBottom = diagY + 14;
        gejY = diagY + 14;
        stomachEl = (
          <g key="st">
            {/* fundus herniated up beside oesophagus */}
            <ellipse cx={cx + 24} cy={diagY - 28} rx={20} ry={22}
              fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
            <text {...T(cx + 24, diagY - 28, 9, { fill: ACCENT })}>fundus</text>
            {/* stomach body below */}
            <path d={`M ${cx - 22} ${diagY + 20} Q ${cx - 30} ${diagY + 68} ${cx} ${diagY + 92} Q ${cx + 22} ${diagY + 68} ${cx + 20} ${diagY + 20}`}
              fill={WALL} stroke={INK} strokeWidth="1.5" />
            {/* GEJ stays subdiaphragmatic */}
            <line x1={cx - 20} y1={gejY} x2={cx + 14} y2={gejY} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" />
            <text {...T(cx - 8, gejY + 12, 9, { fill: ACCENT })}>GEJ ✓</text>
          </g>
        );
      } else if (idx === 2) {
        // Type III – mixed: GEJ and fundus both above diaphragm
        oesophagusBottom = diagY - 14;
        gejY = diagY - 14;
        stomachEl = (
          <g key="st">
            {/* GEJ above */}
            <ellipse cx={cx} cy={diagY - 28} rx={16} ry={12}
              fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
            {/* fundus beside and above */}
            <ellipse cx={cx + 22} cy={diagY - 44} rx={16} ry={18}
              fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
            <text {...T(cx + 22, diagY - 44, 9, { fill: ACCENT })}>fundus</text>
            {/* remaining stomach below */}
            <path d={`M ${cx - 20} ${diagY + 12} Q ${cx - 28} ${diagY + 62} ${cx} ${diagY + 88} Q ${cx + 22} ${diagY + 62} ${cx + 20} ${diagY + 12}`}
              fill={WALL} stroke={INK} strokeWidth="1.5" />
            <line x1={cx - 20} y1={gejY} x2={cx + 20} y2={gejY} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" />
            <text {...T(cx, gejY - 6, 9, { fill: ACCENT })}>GEJ</text>
          </g>
        );
      } else {
        // Type IV – large defect: entire stomach (± other viscera) in chest
        oesophagusBottom = diagY - 20;
        gejY = diagY - 20;
        stomachEl = (
          <g key="st">
            {/* large intrathoracic stomach */}
            <path d={`M ${cx - 32} ${diagY - 70} Q ${cx - 42} ${diagY - 10} ${cx} ${diagY - 8} Q ${cx + 42} ${diagY - 10} ${cx + 30} ${diagY - 70}`}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
            <text {...T(cx, diagY - 44, 9, { fill: ACCENT })}>stomach</text>
            <text {...T(cx, diagY - 30, 8.5, { fill: SOFT })}>(+/− colon)</text>
            <line x1={cx - 20} y1={gejY} x2={cx + 20} y2={gejY} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" />
          </g>
        );
      }

      // Oesophagus tube from top down to gejY
      const oesoTop = thoraxTop + 10;

      return (
        <g key={idx}>
          {/* background shading: thorax */}
          <rect x={ox} y={thoraxTop} width={panelW} height={diagY - thoraxTop} fill={LUMEN} />
          {/* abdominal area */}
          <rect x={ox} y={diagY} width={panelW} height={abdBottom - diagY} fill={WALL} />
          {/* divider between panels */}
          {idx > 0 && <line x1={ox} y1={thoraxTop} x2={ox} y2={abdBottom} stroke={RULE} strokeWidth="1" />}

          {/* Labels: thorax / abdomen */}
          {idx === 0 && <text {...T(ox + 36, thoraxTop + 14, 9, { fill: MUTE })}>thorax</text>}
          {idx === 0 && <text {...T(ox + 36, diagY + 18, 9, { fill: MUTE })}>abdomen</text>}

          {/* Oesophagus */}
          <rect x={cx - 8} y={oesoTop} width={16} height={oesophagusBottom - oesoTop}
            fill={LUMEN} stroke={INK} strokeWidth="1.8" />

          {/* Diaphragm */}
          {diaph}

          {/* Stomach & GEJ per type */}
          {stomachEl}

          {/* Panel label */}
          <text {...T(cx, panelH - 34, 15, { fontWeight: 700 })}>{label}</text>
          <text {...T(cx, panelH - 16, 10.5, { fill: SOFT })}>{sublabel}</text>
        </g>
      );
    }

    const types = [
      { label: "Type I", sublabel: "Sliding (95%)" },
      { label: "Type II", sublabel: "Pure paraoesophageal" },
      { label: "Type III", sublabel: "Mixed" },
      { label: "Type IV", sublabel: "Giant / other viscera" },
    ];

    return (
      <svg {...svgProps(`0 0 ${panelW * cols} ${panelH}`)}>
        <text {...T(panelW * cols / 2, 20, 13, { fill: SOFT })}>
          Dashed line = gastro-oesophageal junction (GEJ)
        </text>
        {types.map((t, i) => (
          <Panel key={i} idx={i} label={t.label} sublabel={t.sublabel} />
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Forrest classification of bleeding peptic ulcer
  // Visual ladder: stigmata from highest to lowest rebleed risk
  // ─────────────────────────────────────────────────────────────────────────
  function ForrestFig() {
    // rows: label, stigmata description, rebleed %, colour intensity
    const rows = [
      { code: "Ia",  stigma: "Active spurting",         rebleed: "~90%", bar: 1.0,  group: "Active" },
      { code: "Ib",  stigma: "Active oozing",           rebleed: "~55%", bar: 0.85, group: "Active" },
      { code: "IIa", stigma: "Non-bleeding visible vessel", rebleed: "~50%", bar: 0.78, group: "Recent" },
      { code: "IIb", stigma: "Adherent clot",           rebleed: "~30%", bar: 0.50, group: "Recent" },
      { code: "IIc", stigma: "Flat pigmented spot",     rebleed: "~8%",  bar: 0.18, group: "Recent" },
      { code: "III", stigma: "Clean base (no stigmata)", rebleed: "~3%",  bar: 0.06, group: "Clean" },
    ];

    const rowH = 46, x0 = 20, labelW = 48, descW = 210, barMaxW = 160, numW = 58;
    const headerH = 36;
    const totalH = headerH + rows.length * rowH + 28;
    const totalW = 560;

    // Ulcer schematic mini icons
    function UlcerIcon({ code, cx, cy }) {
      const r = 14;
      // base ulcer crater
      const base = [
        <ellipse key="mu" cx={cx} cy={cy + 4} rx={r + 4} ry={8} fill={WALL} stroke={INK} strokeWidth="1.2" />,
        <ellipse key="crater" cx={cx} cy={cy + 4} rx={r} ry={6} fill={LUMEN} stroke={RULE} strokeWidth="1" />,
      ];
      if (code === "Ia") {
        // spurting jet
        return [...base,
          <path key="jet" d={`M ${cx} ${cy - 2} Q ${cx + 8} ${cy - 18} ${cx + 4} ${cy - 32}`}
            fill="none" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />,
          <path key="drop" d={`M ${cx + 4} ${cy - 32} q 4 -6 8 -2 q 2 6 -4 6 z`}
            fill={ACCENT} />,
        ];
      } else if (code === "Ib") {
        return [...base,
          <ellipse key="ooze" cx={cx} cy={cy + 4} rx={8} ry={4} fill={ACCENT} opacity="0.75" />,
        ];
      } else if (code === "IIa") {
        // visible vessel bump
        return [...base,
          <ellipse key="vv" cx={cx} cy={cy + 2} rx={6} ry={5} fill={ACCENT} stroke={INK} strokeWidth="1" />,
        ];
      } else if (code === "IIb") {
        // adherent dark clot
        return [...base,
          <ellipse key="clot" cx={cx} cy={cy + 3} rx={10} ry={6} fill={MUTE} opacity="0.7" />,
        ];
      } else if (code === "IIc") {
        // flat pigmented spot — small dark dot
        return [...base,
          <ellipse key="spot" cx={cx} cy={cy + 4} rx={4} ry={3} fill={SOFT} />,
        ];
      } else {
        // clean base — just the ulcer
        return base;
      }
    }

    const groupColour = { Active: ACCENT, Recent: MUTE, Clean: SOFT };

    return (
      <svg {...svgProps(`0 0 ${totalW} ${totalH}`)}>
        {/* Column headers */}
        <text {...T(x0 + labelW / 2, headerH - 8, 11, { fill: SOFT, fontWeight: 600 })}>Class</text>
        <text x={x0 + labelW + 44} y={headerH - 8} fontSize="11" fill={SOFT} fontWeight="600">Stigma</text>
        <text {...T(x0 + labelW + descW + 44, headerH - 8, 11, { fill: SOFT, fontWeight: 600 })}>Rebleed risk</text>
        <line x1={x0} y1={headerH} x2={totalW - 10} y2={headerH} stroke={RULE} strokeWidth="1" />

        {rows.map((r, i) => {
          const y = headerH + i * rowH;
          const midY = y + rowH / 2;
          const iconCx = x0 + labelW + 20;
          const barX = x0 + labelW + descW + 20;
          const barW = r.bar * barMaxW;
          const gc = groupColour[r.group];

          return (
            <g key={r.code}>
              {/* Row separator */}
              <line x1={x0} y1={y + rowH} x2={totalW - 10} y2={y + rowH} stroke={RULE} strokeWidth="0.6" />

              {/* Class code */}
              <text {...T(x0 + labelW / 2, midY + 5, 14, { fontWeight: 700, fill: gc })}>{r.code}</text>

              {/* Mini ulcer icon */}
              <UlcerIcon code={r.code} cx={iconCx} cy={midY} />

              {/* Stigma description */}
              <text x={iconCx + 28} y={midY + 5} fontSize="12" fill={INK}>{r.stigma}</text>

              {/* Rebleed bar */}
              <rect x={barX} y={midY - 8} width={barW} height={16} rx="3"
                fill={gc} opacity={0.28 + r.bar * 0.55} />
              <text x={barX + barW + 8} y={midY + 5} fontSize="12.5" fill={gc} fontWeight="600">{r.rebleed}</text>
            </g>
          );
        })}

        {/* Group brace labels */}
        <text x={x0 + labelW / 2 - 8} y={headerH + 1 * rowH - 4} fontSize="9" fill={SOFT}
          textAnchor="start" transform={`rotate(-90, ${x0 - 4}, ${headerH + 1 * rowH})`}>Active</text>
        <text x={x0 + labelW / 2 - 8} y={headerH + 4 * rowH - 4} fontSize="9" fill={SOFT}
          textAnchor="start" transform={`rotate(-90, ${x0 - 4}, ${headerH + 4 * rowH})`}>Recent</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Los Angeles (LA) grading of reflux oesophagitis, Grade A–D
  // Shows endoscopic mucosal break patterns on simplified oesophageal lumen views
  // ─────────────────────────────────────────────────────────────────────────
  function LosAngelesFig() {
    const grades = [
      { grade: "A", desc: "≥1 mucosal break, ≤5 mm, not between folds", folds: 2, joined: false, confluent: false },
      { grade: "B", desc: ">5 mm break, not between folds", folds: 2, joined: false, confluent: false },
      { grade: "C", desc: "Break extends between ≥2 folds, <75% circumference", folds: 3, joined: true, confluent: false },
      { grade: "D", desc: "Break ≥75% of circumference", folds: 4, joined: true, confluent: true },
    ];

    const cellW = 160, cellH = 200, cols = 4;
    const lumenR = 52; // radius of oesophageal lumen circle

    function LumenView({ g, ox }) {
      const cx = ox + cellW / 2;
      const cy = 70;

      // Longitudinal folds as radial lines inside the lumen
      const foldEls = [];
      const numFolds = 6; // always draw 6 folds for anatomy
      for (let f = 0; f < numFolds; f++) {
        const angle = (f / numFolds) * Math.PI * 2 - Math.PI / 2;
        const innerR = 14;
        const outerR = lumenR - 6;
        foldEls.push(
          <line key={`fold-${f}`}
            x1={cx + Math.cos(angle) * innerR}
            y1={cy + Math.sin(angle) * innerR}
            x2={cx + Math.cos(angle) * outerR}
            y2={cy + Math.sin(angle) * outerR}
            stroke={RULE} strokeWidth="1.4" />
        );
      }

      // Mucosal breaks — represented as accent-coloured segments
      const breakEls = [];

      if (g.grade === "A") {
        // Small break on one fold tip
        breakEls.push(
          <ellipse key="b" cx={cx} cy={cy - lumenR + 10} rx={5} ry={8}
            fill={ACCENT} opacity="0.85" />
        );
      } else if (g.grade === "B") {
        // Longer break on one fold
        breakEls.push(
          <rect key="b" x={cx - 6} y={cy - lumenR + 6} width={12} height={18} rx="3"
            fill={ACCENT} opacity="0.85" />
        );
      } else if (g.grade === "C") {
        // Breaks on multiple folds connected by a bridge, < 75% circumference
        // Arc from ~-90° to ~90° (half the circle)
        const startAngle = -Math.PI * 0.9;
        const endAngle = Math.PI * 0.15;
        const sweepR = lumenR - 10;
        const sx = cx + Math.cos(startAngle) * sweepR;
        const sy = cy + Math.sin(startAngle) * sweepR;
        const ex = cx + Math.cos(endAngle) * sweepR;
        const ey = cy + Math.sin(endAngle) * sweepR;
        breakEls.push(
          <path key="arc"
            d={`M ${sx} ${sy} A ${sweepR} ${sweepR} 0 1 1 ${ex} ${ey}`}
            fill="none" stroke={ACCENT} strokeWidth="8" strokeLinecap="round" opacity="0.75" />
        );
      } else if (g.grade === "D") {
        // Near-circumferential — almost full ring
        const r2 = lumenR - 9;
        breakEls.push(
          <circle key="ring" cx={cx} cy={cy} r={r2}
            fill="none" stroke={ACCENT} strokeWidth="10" opacity="0.7"
            strokeDasharray={`${Math.PI * 2 * r2 * 0.88} ${Math.PI * 2 * r2 * 0.12}`}
            strokeDashoffset="0" />
        );
      }

      return (
        <g key={g.grade}>
          {ox > 0 && <line x1={ox} y1={20} x2={ox} y2={cellH - 10} stroke={RULE} strokeWidth="1" />}
          {/* Lumen circle */}
          <circle cx={cx} cy={cy} r={lumenR} fill={LUMEN} stroke={INK} strokeWidth="2" />
          {/* Folds */}
          {foldEls}
          {/* Mucosal breaks */}
          {breakEls}
          {/* Grade label */}
          <text {...T(cx, cy + lumenR + 28, 22, { fontWeight: 700, fill: ACCENT })}>Grade {g.grade}</text>
          {/* Description — wrap into two lines manually */}
          <foreignObject x={ox + 6} y={cy + lumenR + 36} width={cellW - 12} height={56}>
            <div xmlns="http://www.w3.org/1999/xhtml"
              style={{ fontSize: "10.5px", color: "var(--ink-soft)", textAlign: "center", lineHeight: "1.4" }}>
              {g.desc}
            </div>
          </foreignObject>
        </g>
      );
    }

    return (
      <svg {...svgProps(`0 0 ${cellW * cols} ${cellH}`)}>
        <text {...T(cellW * cols / 2, 18, 12, { fill: SOFT })}>
          End-on lumen view · red = mucosal break
        </text>
        {grades.map((g, i) => (
          <LumenView key={g.grade} g={g} ox={i * cellW} />
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Achalasia Chicago Classification v4.0 — Types I, II, III
  // High-resolution manometry (HRM) schematic: pressure tracings over time
  // ─────────────────────────────────────────────────────────────────────────
  function AchalasiaFig() {
    // Each panel shows a simplified HRM space-time plot:
    // Y-axis = distance along oesophagus (top=proximal, bottom=distal/LOS)
    // X-axis = time (one swallow)
    // Colour intensity = pressure (white=low, ACCENT=high)

    const panelW = 190, panelH = 250, cols = 3, pad = 14;
    const plotX = pad + 28, plotY = 36, plotW = panelW - plotX - pad, plotH = 120;
    const losH = 22; // height of LOS band at bottom of plot

    function Panel({ idx, typeLabel, subtitle, features }) {
      const ox = idx * panelW;
      const px = ox + plotX;
      const losY = plotY + plotH - losH;

      // IBS = integrated basal segment, peristalsis indicators
      const { losPressure, peristalsis, pan } = features;

      // LOS band — higher pressure = more accent fill
      const losOpacity = losPressure === "high" ? 0.85 : losPressure === "mod" ? 0.5 : 0.2;

      // Oesophageal body — pressurisation style
      let bodyEl;
      if (peristalsis === "absent") {
        // Type I: no pressurisation at all — blank/lumen pressure only
        bodyEl = (
          <rect x={px} y={plotY} width={plotW} height={plotH - losH}
            fill={WALL} stroke={RULE} strokeWidth="0.8" />
        );
      } else if (peristalsis === "pan") {
        // Type II: pan-oesophageal pressurisation — entire column lights up mid-swallow
        bodyEl = (
          <g>
            <rect x={px} y={plotY} width={plotW} height={plotH - losH}
              fill={WALL} stroke={RULE} strokeWidth="0.8" />
            {/* pressurisation block in middle time slice */}
            <rect x={px + plotW * 0.3} y={plotY + 4} width={plotW * 0.4} height={plotH - losH - 8}
              fill={ACCENT} opacity="0.45" rx="4" />
            <text {...T(px + plotW * 0.5, plotY + (plotH - losH) / 2 + 4, 9, { fill: ACCENT })}>pan-oes.</text>
          </g>
        );
      } else if (peristalsis === "spasm") {
        // Type III: spastic / premature contractions — oblique bands
        bodyEl = (
          <g>
            <rect x={px} y={plotY} width={plotW} height={plotH - losH}
              fill={WALL} stroke={RULE} strokeWidth="0.8" />
            {/* spastic contractions as steep oblique high-pressure bands */}
            {[0.2, 0.55].map((t, k) => {
              const x1 = px + plotW * t;
              const x2 = px + plotW * (t + 0.14);
              return (
                <polygon key={k}
                  points={`${x1},${plotY + 4} ${x2},${plotY + 4} ${x2 - 2},${losY - 4} ${x1 - 2},${losY - 4}`}
                  fill={ACCENT} opacity="0.5" />
              );
            })}
            <text {...T(px + plotW / 2, plotY + (plotH - losH) / 2 + 14, 9, { fill: ACCENT })}>spastic</text>
          </g>
        );
      }

      return (
        <g key={idx}>
          {idx > 0 && <line x1={ox} y1={16} x2={ox} y2={panelH - 8} stroke={RULE} strokeWidth="1" />}

          {bodyEl}

          {/* LOS high-pressure zone */}
          <rect x={px} y={losY} width={plotW} height={losH}
            fill={ACCENT} opacity={losOpacity} />
          <text x={px - 4} y={losY + losH / 2 + 4} fontSize="9" fill={SOFT} textAnchor="end">LOS</text>

          {/* Axis labels */}
          <text x={px - 4} y={plotY + 6} fontSize="8" fill={SOFT} textAnchor="end">prox</text>
          <text x={px - 4} y={losY - 4} fontSize="8" fill={SOFT} textAnchor="end">dist</text>
          {/* "time →" sits just below the plot; "IRP" below that, both above panel title */}
          <text {...T(px + plotW / 2, plotY + plotH + 10, 8.5, { fill: SOFT })}>time →</text>
          <text {...T(px + plotW / 2, plotY + plotH + 22, 8, { fill: ACCENT })}>IRP ≥ 15 mmHg</text>

          {/* Panel title */}
          <text {...T(ox + panelW / 2, panelH - 46, 15.5, { fontWeight: 700 })}>{typeLabel}</text>
          <text {...T(ox + panelW / 2, panelH - 28, 10.5, { fill: MUTE })}>{subtitle}</text>
        </g>
      );
    }

    const types = [
      {
        typeLabel: "Type I",
        subtitle: "Classic (minimal pressurise.)",
        features: { losPressure: "high", peristalsis: "absent", pan: false },
      },
      {
        typeLabel: "Type II",
        subtitle: "Pan-oesophageal pressurisation",
        features: { losPressure: "high", peristalsis: "pan", pan: true },
      },
      {
        typeLabel: "Type III",
        subtitle: "Spastic / premature contraction",
        features: { losPressure: "high", peristalsis: "spasm", pan: false },
      },
    ];

    return (
      <svg {...svgProps(`0 0 ${panelW * cols} ${panelH}`)}>
        <text {...T(panelW * cols / 2, 18, 12, { fill: SOFT })}>
          HRM space-time plot (one swallow) · colour intensity = pressure
        </text>
        {types.map((t, i) => (
          <Panel key={i} idx={i} {...t} />
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Bariatric anatomy: Sleeve gastrectomy vs Roux-en-Y gastric bypass (RYGB)
  // Side-by-side simplified abdominal anatomy schematics
  // ─────────────────────────────────────────────────────────────────────────
  function BariatricFig() {
    const W = 600, H = 320;
    const halfW = W / 2;

    // Shared oesophagus path helper
    const oesoPath = (cx, topY, bottomY) =>
      `M ${cx - 10} ${topY} L ${cx - 10} ${bottomY} L ${cx + 10} ${bottomY} L ${cx + 10} ${topY}`;

    // ── LEFT: Sleeve gastrectomy ──
    function SleeveSide() {
      const cx = halfW / 2;
      const oesoBottom = 70;
      const sleeveTop = oesoBottom;
      const sleeveBottom = 220;
      const duoTop = sleeveBottom;

      return (
        <g>
          {/* Title */}
          <text {...T(cx, 22, 13.5, { fontWeight: 700 })}>Sleeve Gastrectomy</text>

          {/* Oesophagus */}
          <path d={oesoPath(cx, 30, oesoBottom)} fill={WALL} stroke={INK} strokeWidth="1.8" />
          <text {...T(cx, 46, 9, { fill: SOFT })}>oesophagus</text>

          {/* Gastric sleeve — narrow tube */}
          <path d={`M ${cx - 14} ${sleeveTop} L ${cx - 18} ${sleeveBottom} L ${cx + 18} ${sleeveBottom} L ${cx + 14} ${sleeveTop} Z`}
            fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
          <text {...T(cx, (sleeveTop + sleeveBottom) / 2, 10, { fill: ACCENT, fontWeight: 600 })}>sleeve</text>
          <text {...T(cx, (sleeveTop + sleeveBottom) / 2 + 16, 9, { fill: SOFT })}>~80% resected</text>

          {/* Resected fundus ghost (dashed outline to left) */}
          <path d={`M ${cx - 18} ${sleeveTop + 20} Q ${cx - 70} ${sleeveTop + 40} ${cx - 60} ${sleeveTop + 110} Q ${cx - 30} ${sleeveTop + 140} ${cx - 18} ${sleeveTop + 130}`}
            fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={cx - 68} y={sleeveTop + 72} fontSize="9" fill={MUTE} textAnchor="middle">resected</text>
          <text x={cx - 68} y={sleeveTop + 84} fontSize="9" fill={MUTE} textAnchor="middle">fundus</text>

          {/* Duodenum continues normally */}
          <rect x={cx - 12} y={duoTop} width={24} height={40} fill={WALL} stroke={INK} strokeWidth="1.5" />
          <text {...T(cx, duoTop + 56, 9, { fill: SOFT })}>duodenum intact</text>

          {/* Pylorus indicator */}
          <ellipse cx={cx} cy={duoTop} rx={14} ry={6} fill={WALL} stroke={INK} strokeWidth="2" />
          <text {...T(cx, duoTop - 10, 9, { fill: SOFT })}>pylorus</text>
        </g>
      );
    }

    // ── RIGHT: Roux-en-Y gastric bypass ──
    function RYGBSide() {
      const cx = halfW + halfW / 2;
      const oesoBottom = 70;
      const pouchBottom = 120;
      const pouchTop = oesoBottom;

      // Roux limb goes down from pouch
      const rouxTopX = cx;
      const rouxTopY = pouchBottom;
      const rouxBottomX = cx + 10;
      const rouxBottomY = 240;

      // Biliopancreatic limb: remnant stomach → duodenum → jejunum joining Roux
      const bpJoinY = rouxTopY + 80; // Y of jejuno-jejunostomy

      return (
        <g>
          {/* Title */}
          <text {...T(cx, 22, 13.5, { fontWeight: 700 })}>Roux-en-Y Gastric Bypass</text>

          {/* Oesophagus */}
          <path d={oesoPath(cx, 30, oesoBottom)} fill={WALL} stroke={INK} strokeWidth="1.8" />

          {/* Small gastric pouch */}
          <path d={`M ${cx - 18} ${pouchTop} Q ${cx - 28} ${pouchTop + 30} ${cx - 16} ${pouchBottom} L ${cx + 16} ${pouchBottom} Q ${cx + 28} ${pouchTop + 30} ${cx + 18} ${pouchTop} Z`}
            fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
          <text {...T(cx, (pouchTop + pouchBottom) / 2 + 4, 9.5, { fill: ACCENT, fontWeight: 600 })}>pouch ~30 ml</text>

          {/* Roux (alimentary) limb */}
          <path d={`M ${cx - 10} ${rouxTopY} L ${cx - 12} ${rouxBottomY} L ${cx + 8} ${rouxBottomY} L ${cx + 8} ${rouxTopY}`}
            fill={WALL} stroke={INK} strokeWidth="1.5" />
          <text {...T(cx - 28, rouxTopY + 50, 9, { fill: SOFT, textAnchor: "middle" })}>alimentary</text>
          <text {...T(cx - 28, rouxTopY + 62, 9, { fill: SOFT, textAnchor: "middle" })}>(Roux) limb</text>

          {/* Remnant stomach (bypassed, dashed) */}
          <path d={`M ${cx + 18} ${pouchTop + 10} Q ${cx + 60} ${pouchTop + 20} ${cx + 65} ${pouchTop + 70} Q ${cx + 60} ${pouchTop + 100} ${cx + 20} ${pouchTop + 100}`}
            fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={cx + 68} y={pouchTop + 48} fontSize="8.5" fill={MUTE} textAnchor="start">bypassed</text>
          <text x={cx + 68} y={pouchTop + 60} fontSize="8.5" fill={MUTE} textAnchor="start">stomach</text>

          {/* Biliopancreatic limb line */}
          <path d={`M ${cx + 22} ${pouchTop + 100} Q ${cx + 40} ${bpJoinY + 10} ${cx + 8} ${bpJoinY}`}
            fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="5 4" />
          <text x={cx + 34} y={bpJoinY - 22} fontSize="8.5" fill={MUTE} textAnchor="middle">biliopancreatic</text>
          <text x={cx + 34} y={bpJoinY - 10} fontSize="8.5" fill={MUTE} textAnchor="middle">limb</text>

          {/* Jejuno-jejunostomy marker */}
          <circle cx={cx + 8} cy={bpJoinY} r={6} fill={ACCENT} opacity="0.8" />
          <text x={cx + 18} y={bpJoinY + 16} fontSize="8.5" fill={ACCENT} textAnchor="start">JJ anastomosis</text>

          {/* Common channel label */}
          <text {...T(cx - 2, rouxBottomY + 18, 9, { fill: SOFT })}>common channel</text>
        </g>
      );
    }

    return (
      <svg {...svgProps(`0 0 ${W} ${H}`)}>
        {/* Divider */}
        <line x1={halfW} y1={10} x2={halfW} y2={H - 10} stroke={RULE} strokeWidth="1" strokeDasharray="6 4" />
        <SleeveSide />
        <RYGBSide />
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Zenker's diverticulum — Killian's triangle anatomy
  // Shows posterior view of pharyngo-oesophageal junction
  // ─────────────────────────────────────────────────────────────────────────
  function ZenkerFig() {
    const W = 520, H = 300;
    const cx = W / 2;

    // Pharyngeal constrictors (as converging arches)
    const cPhTop = 60; // inferior constrictor top
    const cPhBot = 150; // inferior constrictor bottom
    const criTop = 155; // cricopharyngeus top
    const criBot = 200; // cricopharyngeus bottom
    const oesTop = 200;

    return (
      <svg {...svgProps(`0 0 ${W} ${H}`)}>
        <text {...T(cx, 20, 13, { fill: SOFT })}>Posterior view — pharyngo-oesophageal junction</text>

        {/* Inferior pharyngeal constrictor — two wings meeting centrally */}
        <path d={`M ${cx - 100} ${cPhTop} Q ${cx - 80} ${cPhTop + 10} ${cx} ${cPhTop + 18} Q ${cx + 80} ${cPhTop + 10} ${cx + 100} ${cPhTop} L ${cx + 100} ${cPhBot} Q ${cx + 80} ${cPhBot - 8} ${cx} ${cPhBot - 14} Q ${cx - 80} ${cPhBot - 8} ${cx - 100} ${cPhBot} Z`}
          fill={WALL} stroke={INK} strokeWidth="1.8" />
        <text {...T(cx - 118, cPhTop + 48, 10, { fill: INK, textAnchor: "end" })}>Inferior</text>
        <text {...T(cx - 118, cPhTop + 62, 10, { fill: INK, textAnchor: "end" })}>pharyngeal</text>
        <text {...T(cx - 118, cPhTop + 76, 10, { fill: INK, textAnchor: "end" })}>constrictor</text>

        {/* Killian's triangle — the dehiscence between constrictor fibres */}
        {/* Triangle apex at cPhBot, base widens down to criTop */}
        <polygon
          points={`${cx},${cPhBot - 14} ${cx - 28},${criTop} ${cx + 28},${criTop}`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2" strokeDasharray="5 3" />
        <text {...T(cx + 72, (cPhBot + criTop) / 2, 10, { fill: ACCENT, fontWeight: 600 })}>Killian's</text>
        <text {...T(cx + 72, (cPhBot + criTop) / 2 + 14, 10, { fill: ACCENT })}>triangle</text>
        <line x1={cx + 28} y1={(cPhBot + criTop) / 2} x2={cx + 50} y2={(cPhBot + criTop) / 2} stroke={ACCENT} strokeWidth="1.2" />

        {/* Cricopharyngeus muscle — thicker band */}
        <path d={`M ${cx - 90} ${criTop} Q ${cx - 60} ${criTop + 6} ${cx - 28} ${criTop} L ${cx + 28} ${criTop} Q ${cx + 60} ${criTop + 6} ${cx + 90} ${criTop} L ${cx + 90} ${criBot} Q ${cx + 60} ${criBot - 6} ${cx} ${criBot - 4} Q ${cx - 60} ${criBot - 6} ${cx - 90} ${criBot} Z`}
          fill={WALL} stroke={INK} strokeWidth="2.5" />
        <text {...T(cx + 108, criTop + 24, 10, { fill: INK, textAnchor: "start" })}>Cricopharyngeus</text>
        <text {...T(cx + 108, criTop + 38, 10, { fill: SOFT, textAnchor: "start" })}>(upper oesophageal sphincter)</text>

        {/* Oesophagus continuing down */}
        <rect x={cx - 22} y={oesTop} width={44} height={60} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(cx, oesTop + 76, 10, { fill: SOFT })}>oesophagus</text>

        {/* Diverticulum pouch bulging posteriorly to left */}
        <path d={`M ${cx - 28} ${criTop + 6} Q ${cx - 80} ${criTop + 10} ${cx - 90} ${criTop + 50} Q ${cx - 80} ${criTop + 80} ${cx - 28} ${criTop + 60}`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
        <text {...T(cx - 90, criTop + 40, 9.5, { fill: ACCENT, textAnchor: "end", fontWeight: 600 })}>Zenker's</text>
        <text {...T(cx - 90, criTop + 54, 9.5, { fill: ACCENT, textAnchor: "end" })}>diverticulum</text>
        <line x1={cx - 70} y1={criTop + 46} x2={cx - 52} y2={criTop + 40} stroke={ACCENT} strokeWidth="1.2" />
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Register all figures
  // ─────────────────────────────────────────────────────────────────────────
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "ugi-hiatus-hernia-types": {
      title: "Hiatus hernia classification (Types I–IV)",
      caption: "Type I (sliding) accounts for ~95% of cases; the GEJ migrates above the diaphragm but the stomach remains in the abdomen. Types II–IV involve the gastric fundus or other viscera herniating alongside an intact (II) or displaced (III/IV) GEJ. Type IV is the giant hernia with ≥50% of the stomach intrathoracic and risk of volvulus.",
      ref: "Kohn GP et al., Surg Endosc 2013;27:2165 (SAGES guidelines); NICE CG184 2014",
      render: () => React.createElement(HiatusHerniaFig),
    },

    "ugi-forrest-classification": {
      title: "Forrest classification of bleeding peptic ulcers",
      caption: "Endoscopic stigmata of recent haemorrhage (SRH) predict rebleeding risk and guide therapy. Classes Ia–IIa carry high rebleed rates (50–90%) and mandate endoscopic haemostasis (dual therapy: injection + thermal/clip). IIb (adherent clot) requires cold-water irrigation and treatment of underlying vessel. IIc/III can be managed medically after high-dose PPI.",
      ref: "Forrest JAH et al., Lancet 1974;2:394 · ESGE Guideline, Endoscopy 2021;53:300",
      render: () => React.createElement(ForrestFig),
    },

    "ugi-los-angeles-grade": {
      title: "Los Angeles (LA) classification of reflux oesophagitis",
      caption: "Grade is determined by the extent of mucosal breaks visible at endoscopy. Grade A/B indicates mild-to-moderate oesophagitis responsive to PPI; Grade C/D indicates severe oesophagitis with higher risk of Barrett's, stricture, and PPI dependence. LA grade C/D fulfils one criterion for 'erosive oesophagitis' in GERD guidelines.",
      ref: "Armstrong D et al., Am J Gastroenterol 1996;91:1582 · Lyons Lyon Workshop 1994",
      render: () => React.createElement(LosAngelesFig),
    },

    "ugi-achalasia-chicago": {
      title: "Achalasia — Chicago Classification v4.0 (Types I–III)",
      caption: "All three subtypes share incomplete LOS relaxation (IRP ≥ 15 mmHg on HRM). Type II (pan-oesophageal pressurisation on ≥20% of swallows) has the best response to all therapies including POEM and Heller myotomy. Type III (spastic, premature DL < 4.5 s) responds best to POEM, which extends the myotomy to include spastic body. Type I (no pressurisation) has intermediate outcomes.",
      ref: "Yadlapati R et al., Neurogastroenterol Motil 2021;33:e14058 (CCv4.0)",
      render: () => React.createElement(AchalasiaFig),
    },

    "ugi-bariatric-anatomy": {
      title: "Bariatric surgery anatomy: Sleeve vs RYGB",
      caption: "Sleeve gastrectomy removes ~80% of the gastric greater curvature, preserving the pylorus and normal intestinal continuity — purely restrictive. Roux-en-Y gastric bypass creates a small (~30 ml) proximal gastric pouch anastomosed to a Roux (alimentary) limb, bypassing the remnant stomach, duodenum, and proximal jejunum — both restrictive and malabsorptive. RYGB has greater %EWL and T2DM remission but higher nutritional deficiency risk.",
      ref: "IFSO 2019 position statement; Mechanick JI et al., Obesity 2020;28:S1",
      render: () => React.createElement(BariatricFig),
    },

    "ugi-zenker-anatomy": {
      title: "Zenker's diverticulum — Killian's triangle",
      caption: "Zenker's is a posterior pharyngeal (pulsion) diverticulum arising through Killian's dehiscence — the anatomical weak point between the oblique fibres of the inferior pharyngeal constrictor (thyropharyngeus) and the transverse cricopharyngeus fibres. Raised hypopharyngeal pressure from cricopharyngeal dysfunction drives mucosa through this triangle. Endoscopic (Dohlman/stapler) or transcervical cricopharyngeal myotomy is the definitive treatment.",
      ref: "Watemberg S et al., Surg Endosc 1996;10:164 · SAGES 2021 guideline",
      render: () => React.createElement(ZenkerFig),
    },

  });
})();
