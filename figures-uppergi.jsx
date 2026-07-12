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
  // Siewert classification of GEJ adenocarcinoma (Types I–III)
  // ─────────────────────────────────────────────────────────────────────────
  function SiewertFig() {
    const cx = 150, gejY = 180, cm = 18;
    const yAt = (c) => gejY - c * cm;         // +c above GEJ, -c below
    const stomach =
      `M ${cx - 22} ${gejY} `
      + `C ${cx - 74} ${gejY + 6} ${cx - 96} ${gejY + 66} ${cx - 60} ${gejY + 116} `
      + `C ${cx - 28} ${gejY + 158} ${cx + 44} ${gejY + 150} ${cx + 54} ${gejY + 92} `
      + `C ${cx + 60} ${gejY + 52} ${cx + 40} ${gejY + 18} ${cx + 22} ${gejY} Z`;

    const zones = [
      { key: "I",   top: yAt(5),  bot: yAt(1),  label: "Siewert I",   line: "1–5 cm above GEJ  →  oesophagectomy" },
      { key: "II",  top: yAt(1),  bot: yAt(-2), label: "Siewert II",  line: "1 cm above – 2 cm below  →  individualise" },
      { key: "III", top: yAt(-2), bot: yAt(-5), label: "Siewert III", line: "2–5 cm below GEJ  →  total gastrectomy" },
    ];

    return (
      <svg {...svgProps("0 0 640 400")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>Siewert classification — GEJ adenocarcinoma</text>

        <rect x={cx - 22} y={44} width={44} height={gejY - 44} fill={WALL} stroke={INK} strokeWidth="2" />
        <path d={stomach} fill={WALL} stroke={INK} strokeWidth="2" />

        {/* tumour-centre zone bands over the tube */}
        {zones.map((z) => (
          <rect key={z.key} x={cx - 22} y={z.top} width={44} height={z.bot - z.top}
            fill={ACCENT} opacity={z.key === "II" ? 0.28 : 0.16} />
        ))}

        <line x1={cx - 72} y1={gejY} x2={cx + 84} y2={gejY} stroke={ACCENT} strokeWidth="2" strokeDasharray="5 3" />
        <text x={cx - 76} y={gejY + 4} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="end">GEJ</text>

        {[5, 2, 0, -2, -5].map((c) => (
          <g key={c}>
            <line x1={cx + 24} y1={yAt(c)} x2={cx + 32} y2={yAt(c)} stroke={MUTE} strokeWidth="1.1" />
            <text x={cx + 38} y={yAt(c) + 3} fontSize="9" fill={MUTE} textAnchor="start">{c > 0 ? "+" + c : c} cm</text>
          </g>
        ))}

        {zones.map((z) => {
          const bx = 300, midY = (z.top + z.bot) / 2;
          return (
            <g key={z.key}>
              <path d={`M ${bx} ${z.top + 3} h 9 v ${z.bot - z.top - 6} h -9`} fill="none" stroke={ACCENT} strokeWidth="1.6" />
              <text x={bx + 20} y={midY - 4} fontSize="13" fill={ACCENT} fontWeight="700" textAnchor="start">{z.label}</text>
              <text x={bx + 20} y={midY + 12} fontSize="10.5" fill={SOFT} textAnchor="start">{z.line}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Gastric cancer — resection extent + D1 vs D2 lymphadenectomy
  // ─────────────────────────────────────────────────────────────────────────
  function GastricD2Fig() {
    // stomach body
    const stomach =
      "M 300 78 C 250 78 232 120 236 168 C 240 220 268 260 330 264 "
      + "C 392 268 430 238 430 210 C 430 196 412 194 404 208 "
      + "C 392 236 350 246 330 244 C 286 240 264 210 262 168 "
      + "C 260 128 276 98 312 98 C 336 98 344 112 356 112 Z";
    const node = (x, y, n, key) => (
      <g key={key}>
        <circle cx={x} cy={y} r={9} fill={ACCENT} stroke={LUMEN} strokeWidth="1.5" />
        <text x={x} y={y + 3.2} fontSize="9" fill={LUMEN} fontWeight="700" textAnchor="middle">{n}</text>
      </g>
    );

    return (
      <svg {...svgProps("0 0 640 400")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>Gastric cancer — D1 vs D2 lymphadenectomy</text>

        {/* D1 perigastric halo */}
        <path d={stomach} fill={ASOFT} stroke="none" transform="translate(0 0) scale(1)" opacity="0.5" />
        <path d={stomach} fill={WALL} stroke={INK} strokeWidth="2" />
        {/* perigastric (D1) nodes hugging the curves */}
        {[[356, 108], [330, 92], [252, 150], [246, 196], [330, 258], [396, 218]].map((p, i) =>
          <circle key={"pg" + i} cx={p[0]} cy={p[1]} r={6} fill={MUTE} stroke={LUMEN} strokeWidth="1.2" />)}
        <text x={452} y={120} fontSize="11" fill={MUTE} fontWeight="700" textAnchor="start">D1 = perigastric</text>
        <text x={452} y={135} fontSize="9.5" fill={SOFT} textAnchor="start">nodes (stations 1–7)</text>

        {/* coeliac trunk + 3 named branches (D2 tier) */}
        <path d="M 300 344 L 300 300" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M 300 300 Q 250 300 190 300" fill="none" stroke={INK} strokeWidth="2.4" />
        <path d="M 300 300 Q 360 300 420 300" fill="none" stroke={INK} strokeWidth="2.4" />
        <path d="M 300 300 Q 300 280 316 262" fill="none" stroke={INK} strokeWidth="2.4" />
        <path d="M 420 300 Q 430 272 430 250" fill="none" stroke={INK} strokeWidth="2.4" />
        <text x={300} y={360} fontSize="9.5" fill={SOFT} textAnchor="middle">coeliac axis</text>

        {node(300, 300, 9, "n9")}
        {node(316, 262, 7, "n7")}
        {node(370, 300, 8, "n8")}
        {node(430, 250, 12, "n12")}
        {node(228, 300, 11, "n11")}
        {node(174, 300, 10, "n10")}

        {/* legend */}
        <text x={44} y={330} fontSize="10.5" fill={ACCENT} fontWeight="700" textAnchor="start">D2 = D1 + named-artery nodes:</text>
        <text x={44} y={346} fontSize="9.5" fill={SOFT} textAnchor="start">8 common hepatic · 9 coeliac · 10 splenic hilum ·</text>
        <text x={44} y={360} fontSize="9.5" fill={SOFT} textAnchor="start">11 splenic a. · 12 hepatoduodenal</text>
        <text x={44} y={384} fontSize="9.5" fill={MUTE} textAnchor="start">Distal third → subtotal · proximal/diffuse → total gastrectomy. D2 = standard curative extent.</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // GIST risk stratification (Miettinen/AFIP) — size × mitotic rate
  // ─────────────────────────────────────────────────────────────────────────
  function GistRiskFig() {
    const sizes = ["≤ 2 cm", "> 2–5 cm", "> 5–10 cm", "> 10 cm"];
    // risk level 0 none,1 very low,2 low,3 moderate,4 high
    const rows = [
      { rate: "≤ 5 / 5 mm²", cells: [[0, "None"], [1, "Very low"], [2, "Low"], [3, "Moderate"]] },
      { rate: "> 5 / 5 mm²", cells: [[1, "Very low*"], [3, "Moderate"], [4, "High"], [4, "High"]] },
    ];
    const tint = (lvl) => lvl === 0 ? WALL : ACCENT;
    const op = (lvl) => [0, 0.12, 0.22, 0.45, 0.78][lvl];
    const x0 = 150, y0 = 92, cw = 110, ch = 62;

    return (
      <svg {...svgProps("0 0 640 320")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>GIST risk of progression — gastric GIST</text>
        <text {...T(320, 42, 10, { fill: SOFT })}>by tumour size × mitotic rate (Miettinen/AFIP)</text>

        {/* column headers */}
        {sizes.map((s, c) => (
          <text key={"h" + c} {...T(x0 + cw * c + cw / 2, y0 - 8, 10.5, { fontWeight: 700 })}>{s}</text>
        ))}
        <text x={x0 - 10} y={y0 - 8} fontSize="10.5" fontWeight="700" fill={INK} textAnchor="end">Mitoses</text>

        {rows.map((row, r) => (
          <g key={"r" + r}>
            <text x={x0 - 10} y={y0 + ch * r + ch / 2 + 4} fontSize="10" fill={INK} textAnchor="end">{row.rate}</text>
            {row.cells.map(([lvl, txt], c) => (
              <g key={c}>
                <rect x={x0 + cw * c} y={y0 + ch * r} width={cw} height={ch}
                  fill={tint(lvl)} opacity={op(lvl)} stroke={RULE} strokeWidth="1" />
                <rect x={x0 + cw * c} y={y0 + ch * r} width={cw} height={ch}
                  fill="none" stroke={RULE} strokeWidth="1" />
                <text {...T(x0 + cw * c + cw / 2, y0 + ch * r + ch / 2 + 4, 10.5,
                  { fill: lvl >= 3 ? INK : SOFT, fontWeight: lvl === 4 ? 700 : 600 })}>{txt}</text>
              </g>
            ))}
          </g>
        ))}

        <text x={x0} y={y0 + ch * 2 + 26} fontSize="9.5" fill={MUTE} textAnchor="start">*≤2 cm with high mitotic rate: few data.</text>
        <text x={x0} y={y0 + ch * 2 + 42} fontSize="9.5" fill={ACCENT} fontWeight="600" textAnchor="start">Small-bowel GIST behaves worse than gastric at the same size &amp; mitotic rate.</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Gastric volvulus — organoaxial vs mesenteroaxial
  // ─────────────────────────────────────────────────────────────────────────
  function GastricVolvulusFig() {
    const Panel = ({ ox, title, sub, axis }) => {
      const cx = ox + 150;
      return (
        <g>
          <text {...T(cx, 46, 12.5, { fontWeight: 700 })}>{title}</text>
          <text {...T(cx, 62, 9.5, { fill: SOFT })}>{sub}</text>
          {/* schematic stomach */}
          <path d={`M ${cx - 60} 110 C ${cx - 96} 130 ${cx - 96} 200 ${cx - 52} 210 C ${cx - 8} 220 ${cx + 40} 214 ${cx + 62} 176 C ${cx + 78} 148 ${cx + 60} 118 ${cx + 30} 116 C ${cx + 4} 114 ${cx - 6} 128 ${cx - 22} 122 C ${cx - 36} 116 ${cx - 44} 106 ${cx - 60} 110 Z`}
            fill={WALL} stroke={INK} strokeWidth="2" />
          {/* rotation axis */}
          {axis === "long"
            ? <line x1={cx - 78} y1={164} x2={cx + 82} y2={150} stroke={ACCENT} strokeWidth="1.6" strokeDasharray="6 4" />
            : <line x1={cx + 2} y1={92} x2={cx - 6} y2={230} stroke={ACCENT} strokeWidth="1.6" strokeDasharray="6 4" />}
          {/* rotation arrow */}
          <path d={`M ${cx + 70} 232 A 40 40 0 1 1 ${cx + 34} 250`} fill="none" stroke={ACCENT} strokeWidth="2" />
          <polygon points={`${cx + 34},250 ${cx + 44},244 ${cx + 42},256`} fill={ACCENT} />
          <text {...T(cx, 200, 9, { fill: ACCENT, fontWeight: 700 })}>{axis === "long" ? "long axis" : "short axis"}</text>
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 640 340")}>
        <text {...T(320, 22, 14, { fontWeight: 700 })}>Gastric volvulus — axis of rotation</text>
        <line x1={320} y1={40} x2={320} y2={276} stroke={RULE} strokeWidth="1" />

        <Panel ox={0} title="Organoaxial" sub="rotation about the long (cardio-pyloric) axis" axis="long" />
        <Panel ox={320} title="Mesenteroaxial" sub="rotation about the short axis" axis="short" />

        <text x={18} y={286} fontSize="9" fill={SOFT} textAnchor="start">Greater curve flips up · para-oesophageal</text>
        <text x={18} y={300} fontSize="9" fill={SOFT} textAnchor="start">hernia · higher strangulation · commoner</text>
        <text x={338} y={286} fontSize="9" fill={SOFT} textAnchor="start">Antrum flips up over the GEJ ·</text>
        <text x={338} y={300} fontSize="9" fill={SOFT} textAnchor="start">often intermittent</text>
        <text {...T(320, 326, 10, { fill: ACCENT, fontWeight: 700 })}>Borchardt's triad: epigastric pain · retching without vomiting · cannot pass an NGT</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Meckel's diverticulum — rule of 2s + antimesenteric anatomy
  // ─────────────────────────────────────────────────────────────────────────
  function MeckelFig() {
    return (
      <svg {...svgProps("0 0 640 360")}>
        <text {...T(320, 24, 14, { fontWeight: 700 })}>Meckel's diverticulum — anatomy &amp; the rule of 2s</text>

        {/* ileal loop (two walls) */}
        <path d="M 40 190 C 90 150 190 150 240 190" fill="none" stroke={INK} strokeWidth="2" />
        <path d="M 40 236 C 100 210 180 210 240 236" fill="none" stroke={INK} strokeWidth="2" />
        <path d="M 40 190 L 40 236" fill="none" stroke={INK} strokeWidth="2" />
        <path d="M 240 190 L 240 236" fill="none" stroke={INK} strokeWidth="2" />
        {/* lumen tint */}
        <path d="M 44 192 C 100 158 184 158 236 192 L 236 232 C 180 208 100 208 44 232 Z" fill={WALL} opacity="0.7" />

        {/* diverticulum on the ANTIMESENTERIC (upper) border */}
        <path d="M 120 168 C 116 128 100 112 108 92 C 116 108 132 120 140 160 Z" fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <line x1={126} y1={108} x2={188} y2={92} stroke={ACCENT} strokeWidth="1" />
        <text x={192} y={95} fontSize="10.5" fill={ACCENT} fontWeight="700" textAnchor="start">Meckel's diverticulum</text>
        <text x={192} y={109} fontSize="9" fill={SOFT} textAnchor="start">true (all layers) · antimesenteric</text>

        {/* mesentery on lower border */}
        <path d="M 70 244 L 90 286 M 130 246 L 140 288 M 190 244 L 196 286" stroke={MUTE} strokeWidth="1.4" />
        <text x={140} y={302} fontSize="9.5" fill={MUTE} textAnchor="middle">mesenteric border</text>

        {/* arrow to ileocaecal valve */}
        <line x1={244} y1={214} x2={300} y2={214} stroke={INK} strokeWidth="1.4" strokeDasharray="4 3" />
        <polygon points="300,214 291,209 291,219" fill={INK} />
        <text x={272} y={205} fontSize="9" fill={SOFT} textAnchor="middle">~2 ft → ICV</text>

        {/* rule-of-2s panel */}
        <rect x={368} y={70} width={240} height={214} rx={8} fill={WALL} stroke={RULE} strokeWidth="1" />
        <text x={388} y={94} fontSize="12" fill={ACCENT} fontWeight="700" textAnchor="start">The rule of 2s</text>
        {[
          "2 % of the population",
          "2 : 1 male predominance",
          "~2 feet proximal to the ICV",
          "~2 inches long",
          "2 ectopic tissue types (gastric,",
          "     pancreatic)",
          "often symptomatic by age 2",
        ].map((ln, i) => (
          <text key={i} x={388} y={116 + i * 22} fontSize="10.5" fill={INK} textAnchor="start">{ln}</text>
        ))}

        <text x={40} y={334} fontSize="9.5" fill={SOFT} textAnchor="start">Omphalomesenteric (vitelline) duct remnant · ectopic gastric mucosa → painless bleed · 99mTc-pertechnetate "Meckel scan"</text>
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

    "ugi-siewert-classification": {
      title: "Siewert classification of GEJ adenocarcinoma",
      caption: "Adenocarcinoma of the gastro-oesophageal junction is typed by the position of the tumour CENTRE relative to the anatomical GEJ. Type I (1–5 cm above) arises in the distal oesophagus and is treated like oesophageal cancer (oesophagectomy); Type III (2–5 cm below) is subcardial gastric cancer treated by extended/total gastrectomy; Type II (1 cm above to 2 cm below — the true cardia) is individualised. The type dictates the resection and the lymphadenectomy fields.",
      ref: "Siewert JR, Stein HJ, Br J Surg 1998;85:1457 · AJCC 8th ed (GEJ staging)",
      render: () => React.createElement(SiewertFig),
    },

    "ugi-gastric-d2-lymphadenectomy": {
      title: "Gastric cancer — D1 vs D2 lymphadenectomy",
      caption: "D1 clears the perigastric nodes (stations 1–7) along the lesser and greater curves. D2 adds the nodes along the named branches of the coeliac axis — 8 common hepatic, 9 coeliac, 10 splenic hilum, 11 splenic artery, 12 hepatoduodenal ligament. D2 is the standard lymphadenectomy for curative resection; distal-third tumours need only a subtotal gastrectomy, while proximal or diffuse tumours require a total gastrectomy.",
      ref: "Japanese Gastric Cancer Association, Gastric Cancer 2021 (5th ed) · Songun I et al., Lancet Oncol 2010;11:439 (Dutch D1D2 trial)",
      render: () => React.createElement(GastricD2Fig),
    },

    "ugi-gist-risk": {
      title: "GIST — risk of progression (size × mitotic rate)",
      caption: "Prognosis of a gastrointestinal stromal tumour is driven by tumour size, mitotic rate, and site. Risk rises across both axes: a >10 cm or a >5-mitoses/5 mm² tumour is high-risk and warrants adjuvant imatinib. Crucially, for the SAME size and mitotic rate a small-bowel GIST behaves worse than a gastric one, so anatomical site must be factored into the estimate and the decision to give adjuvant therapy.",
      ref: "Miettinen M, Lasota J, Semin Diagn Pathol 2006;23:70 (AFIP) · NCCN GIST guideline",
      render: () => React.createElement(GistRiskFig),
    },

    "ugi-gastric-volvulus": {
      title: "Gastric volvulus — organoaxial vs mesenteroaxial",
      caption: "Organoaxial volvulus rotates the stomach about its long (cardio-pyloric) axis so the greater curvature flips upward; it is the commoner type, is associated with para-oesophageal/diaphragmatic defects, and carries the higher strangulation risk. Mesenteroaxial volvulus rotates about the short axis so the antrum folds up over the GEJ and is often intermittent. Borchardt's triad — epigastric pain, retching without vomiting, and inability to pass a nasogastric tube — signals acute strangulating volvulus needing urgent decompression and surgery.",
      ref: "Borchardt M, 1904 · Rashid F et al., World J Emerg Surg 2010;5:18",
      render: () => React.createElement(GastricVolvulusFig),
    },

    "ugi-meckel-rule-of-2s": {
      title: "Meckel's diverticulum — anatomy & the rule of 2s",
      caption: "Meckel's is the commonest congenital anomaly of the GI tract — a true diverticulum (containing all bowel wall layers) on the ANTIMESENTERIC border of the ileum, a remnant of the omphalomesenteric (vitelline) duct. The rule of 2s captures its epidemiology (2% of people, 2:1 male, ~2 feet from the ileocaecal valve, ~2 inches long, 2 ectopic tissue types, often symptomatic by age 2). Ectopic gastric mucosa causes painless lower-GI bleeding and is imaged with a 99mTc-pertechnetate 'Meckel scan'.",
      ref: "Park JJ et al., Ann Surg 2005;241:529 (Mayo series) · Sagar J et al., J R Soc Med 2006;99:501",
      render: () => React.createElement(MeckelFig),
    },

  });
})();
