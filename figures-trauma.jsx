// figures-trauma.jsx — SVG teaching diagrams for Trauma & Acute Care Surgery
//
// Figures included:
//   trauma-haemorrhagic-shock-classes  — ATLS Class I–IV vitals ladder
//   trauma-aast-spleen                 — AAST splenic injury grades I–V
//   trauma-aast-liver                  — AAST liver injury grades I–V
//   trauma-burns-rule-of-nines         — Rule of nines body map + burn depth cross-section
//   trauma-triangle-of-safety          — Chest-drain triangle of safety (tube thoracostomy)

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
  // ATLS Haemorrhagic Shock Classification I–IV  (visual vitals ladder)
  // ─────────────────────────────────────────────────────────────────────────
  function HaemorrhagicShockFig() {
    // Each row = one class; each column = one parameter
    const classes = [
      {
        cls: "I",   blood: "≤750 mL",  pct: "≤15%",
        hr: "<100", bp: "Normal",    pp: "Normal / ↑",
        rr: "14–20", uop: ">30",    gcs: "Normal",
        color: LUMEN,
      },
      {
        cls: "II",  blood: "750–1500", pct: "15–30%",
        hr: "100–120", bp: "Normal", pp: "↓",
        rr: "20–30", uop: "20–30",  gcs: "Anxious",
        color: ASOFT,
      },
      {
        cls: "III", blood: "1500–2000", pct: "30–40%",
        hr: "120–140", bp: "↓",     pp: "↓",
        rr: "30–40", uop: "5–15",   gcs: "Confused",
        color: WALL,
      },
      {
        cls: "IV",  blood: ">2000 mL", pct: ">40%",
        hr: ">140", bp: "↓↓",      pp: "↓↓",
        rr: ">35",  uop: "None",    gcs: "Lethargy/↓",
        color: MUTE,   // darkest row — still theme-safe
      },
    ];

    const headers = ["Class", "Blood loss", "% EBV", "HR (bpm)", "Systolic BP", "Pulse pressure", "RR", "UOP (mL/hr)", "Mental status"];
    const colW = [52, 76, 58, 68, 76, 80, 44, 72, 80];
    const totalW = colW.reduce((a, b) => a + b, 0);  // 606
    const rowH = 38;
    const headerH = 32;
    const topY = 28;

    // X positions for each column (left edges)
    let xPos = [0];
    for (let i = 0; i < colW.length - 1; i++) xPos.push(xPos[i] + colW[i]);

    const cx = (i) => xPos[i] + colW[i] / 2;

    return (
      <svg {...svgProps(`0 0 ${totalW} ${topY + headerH + classes.length * rowH + 16}`)}>
        {/* Title */}
        <text {...T(totalW / 2, 18, 13, { fill: SOFT, fontWeight: 600 })}>
          ATLS Haemorrhagic Shock Classification (70 kg adult; EBV ≈ 5 L)
        </text>

        {/* Header row */}
        <rect x={0} y={topY} width={totalW} height={headerH} fill={RULE} />
        {headers.map((h, i) => (
          <text key={h} {...T(cx(i), topY + headerH / 2 + 5, 11, { fill: LUMEN, fontWeight: 700 })}>
            {h}
          </text>
        ))}

        {/* Data rows */}
        {classes.map((c, ri) => {
          const y = topY + headerH + ri * rowH;
          const cells = [c.cls, c.blood, c.pct, c.hr, c.bp, c.pp, c.rr, c.uop, c.gcs];
          return (
            <g key={c.cls}>
              <rect x={0} y={y} width={totalW} height={rowH} fill={c.color} stroke={RULE} strokeWidth="0.5" />
              {/* left accent bar for class */}
              <rect x={0} y={y} width={colW[0]} height={rowH} fill={ACCENT} opacity={0.18 + ri * 0.14} />
              {cells.map((val, ci) => (
                <text
                  key={ci}
                  {...T(cx(ci), y + rowH / 2 + 5, ci === 0 ? 15 : 11.5, {
                    fill: ci === 0 ? ACCENT : INK,
                    fontWeight: ci === 0 ? "700" : "400",
                  })}
                >
                  {val}
                </text>
              ))}
              {/* column dividers */}
              {xPos.slice(1).map((x, k) => (
                <line key={k} x1={x} y1={y} x2={x} y2={y + rowH} stroke={RULE} strokeWidth="0.5" />
              ))}
            </g>
          );
        })}

        {/* Bottom note */}
        <text
          x={4}
          y={topY + headerH + classes.length * rowH + 13}
          fontSize="10"
          fill={SOFT}
          textAnchor="start"
        >
          EBV = estimated blood volume. UOP = urine output. RR = respiratory rate. PP = pulse pressure.
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // AAST Splenic Injury Grade I–V
  // Simplified cross-section of spleen outline per grade
  // ─────────────────────────────────────────────────────────────────────────
  function AastSpleenFig() {
    const grades = [
      {
        g: "I",
        desc: "Subca. haematoma\n<10%; lac <1 cm",
        draw: "haematoma-small",
      },
      {
        g: "II",
        desc: "Subca. hx 10–50%\nlac 1–3 cm",
        draw: "haematoma-medium",
      },
      {
        g: "III",
        desc: "Subca. hx >50%\nlac >3 cm",
        draw: "laceration-deep",
      },
      {
        g: "IV",
        desc: "Hilar vessels\n>25% devascularised",
        draw: "hilar",
      },
      {
        g: "V",
        desc: "Shattered spleen\nhilar injury",
        draw: "shattered",
      },
    ];

    const cellW = 124, cellH = 185, cols = 5;
    const svgW = cellW * cols;
    const svgH = cellH;

    // Draw a simplified spleen shape: oval with a notch at top-left
    // Each grade overlaid with injury pattern
    const spleenPath = (ox, oy, rx, ry) =>
      `M ${ox} ${oy - ry * 0.4} C ${ox - rx * 1.1} ${oy - ry * 1.0} ${ox - rx * 1.1} ${oy + ry * 0.9} ${ox} ${oy + ry * 0.9} C ${ox + rx * 1.1} ${oy + ry * 0.9} ${ox + rx * 1.1} ${oy - ry * 1.0} ${ox} ${oy - ry * 0.4}`;

    const drawGrade = (kind, cx, cy) => {
      const rx = 46, ry = 38;
      const base = [
        <path key="body" d={spleenPath(cx, cy, rx, ry)} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />,
      ];

      if (kind === "haematoma-small") {
        base.push(
          <ellipse key="h" cx={cx - 22} cy={cy - 20} rx={10} ry={7}
            fill={RULE} opacity="0.55" stroke={ACCENT} strokeWidth="1" />
        );
      } else if (kind === "haematoma-medium") {
        base.push(
          <ellipse key="h" cx={cx - 18} cy={cy - 18} rx={20} ry={14}
            fill={RULE} opacity="0.55" stroke={ACCENT} strokeWidth="1.5" />
        );
      } else if (kind === "laceration-deep") {
        base.push(
          <line key="l" x1={cx - 10} y1={cy - ry * 0.9} x2={cx + 8} y2={cy + ry * 0.5}
            stroke={MUTE} strokeWidth="4" strokeLinecap="round" />,
          <ellipse key="h" cx={cx - 28} cy={cy - 10} rx={24} ry={18}
            fill={RULE} opacity="0.5" stroke={ACCENT} strokeWidth="1.5" />
        );
      } else if (kind === "hilar") {
        // segmental laceration + hilar vessels
        base.push(
          <line key="l1" x1={cx - 5} y1={cy - ry * 0.95} x2={cx + 15} y2={cy + ry * 0.75}
            stroke={MUTE} strokeWidth="5" strokeLinecap="round" />,
          <line key="l2" x1={cx + 20} y1={cy - ry * 0.5} x2={cx - 15} y2={cy + ry * 0.6}
            stroke={MUTE} strokeWidth="3" strokeLinecap="round" />,
          // hilar vessel dot
          <circle key="hv" cx={cx + rx * 0.85} cy={cy - 2} r={6}
            fill={ACCENT} opacity="0.9" />
        );
      } else if (kind === "shattered") {
        // Multiple cracks
        [[-12, -30, 10, 10], [5, -20, -10, 25], [-22, 0, 20, 18], [8, -32, 2, 30]].forEach(([x1, y1, x2, y2], k) => {
          base.push(
            <line key={`c${k}`}
              x1={cx + x1} y1={cy + y1} x2={cx + x2} y2={cy + y2}
              stroke={MUTE} strokeWidth="3.5" strokeLinecap="round" />
          );
        });
        base.push(
          <ellipse key="pool" cx={cx} cy={cy + ry * 1.25} rx={32} ry={10}
            fill={RULE} opacity="0.4" />
        );
      }
      return base;
    };

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        {grades.map((gr, i) => {
          const cx = i * cellW + cellW / 2;
          const cy = 68;
          const lines = gr.desc.split("\n");
          return (
            <g key={gr.g}>
              {/* Grade label at top */}
              <text {...T(cx, 18, 17, { fontWeight: 700, fill: ACCENT })}>Grade {gr.g}</text>
              {/* Spleen drawing */}
              {drawGrade(gr.draw, cx, cy)}
              {/* Description lines */}
              {lines.map((ln, li) => (
                <text key={li} {...T(cx, 136 + li * 17, 10, { fill: SOFT })}>{ln}</text>
              ))}
              {/* column divider */}
              {i > 0 && (
                <line x1={i * cellW} y1={0} x2={i * cellW} y2={svgH}
                  stroke={RULE} strokeWidth="0.8" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // AAST Liver Injury Grade I–V
  // ─────────────────────────────────────────────────────────────────────────
  function AastLiverFig() {
    const grades = [
      {
        g: "I",
        desc: "Subca. hx <10%\nlac <1 cm deep",
        draw: "hx-small",
      },
      {
        g: "II",
        desc: "Subca. hx 10–50%\nlac 1–3 cm",
        draw: "hx-medium",
      },
      {
        g: "III",
        desc: "Subca. hx >50%\nlac >3 cm",
        draw: "lac-deep",
      },
      {
        g: "IV",
        desc: "Lac 25–75% lobe\n1–3 segments",
        draw: "lobe-partial",
      },
      {
        g: "V",
        desc: "Lac >75% lobe\njuxtahepatic veins",
        draw: "shattered",
      },
    ];

    const cellW = 124, cellH = 185, svgW = cellW * 5;

    // Liver silhouette: right lobe dominant
    const liverPath = (ox, cy) => {
      const r = `M ${ox - 50} ${cy + 10} C ${ox - 52} ${cy - 42} ${ox - 10} ${cy - 48} ${ox + 18} ${cy - 36} C ${ox + 52} ${cy - 22} ${ox + 52} ${cy + 28} ${ox + 20} ${cy + 34} C ${ox - 10} ${cy + 40} ${ox - 50} ${cy + 36} ${ox - 50} ${cy + 10} Z`;
      return r;
    };

    const drawGrade = (kind, cx, cy) => {
      const base = [
        <path key="body" d={liverPath(cx, cy)} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />,
        // falciform ligament hint
        <line key="fal" x1={cx - 4} y1={cy - 42} x2={cx - 8} y2={cy + 34}
          stroke={RULE} strokeWidth="1" strokeDasharray="3 2" />,
      ];

      if (kind === "hx-small") {
        base.push(
          <ellipse key="h" cx={cx - 26} cy={cy - 22} rx={10} ry={7}
            fill={RULE} opacity="0.5" stroke={ACCENT} strokeWidth="1" />
        );
      } else if (kind === "hx-medium") {
        base.push(
          <ellipse key="h" cx={cx - 20} cy={cy - 20} rx={22} ry={14}
            fill={RULE} opacity="0.5" stroke={ACCENT} strokeWidth="1.5" />
        );
      } else if (kind === "lac-deep") {
        base.push(
          <line key="l" x1={cx + 30} y1={cy - 30} x2={cx + 5} y2={cy + 28}
            stroke={MUTE} strokeWidth="5" strokeLinecap="round" />,
          <ellipse key="h" cx={cx - 16} cy={cy - 14} rx={24} ry={16}
            fill={RULE} opacity="0.45" />
        );
      } else if (kind === "lobe-partial") {
        base.push(
          <line key="l1" x1={cx + 24} y1={cy - 36} x2={cx + 10} y2={cy + 34}
            stroke={MUTE} strokeWidth="7" strokeLinecap="round" />,
          <line key="l2" x1={cx + 42} y1={cy - 14} x2={cx + 16} y2={cy + 32}
            stroke={MUTE} strokeWidth="4" strokeLinecap="round" />
        );
      } else if (kind === "shattered") {
        [[-30, -30, -10, 10], [5, -28, -8, 22], [20, -18, 40, 20], [-20, 0, 10, 32], [30, -38, 22, 26]].forEach(([x1, y1, x2, y2], k) => {
          base.push(
            <line key={`c${k}`}
              x1={cx + x1} y1={cy + y1} x2={cx + x2} y2={cy + y2}
              stroke={MUTE} strokeWidth="3.5" strokeLinecap="round" />
          );
        });
        // IVC / hepatic vein indicator
        base.push(
          <ellipse key="ivc" cx={cx - 4} cy={cy + 44} rx={8} ry={5}
            fill={ACCENT} opacity="0.7" />,
          <text key="ivc-lbl" {...T(cx - 4, cy + 58, 9, { fill: SOFT })}>IVC</text>
        );
      }
      return base;
    };

    return (
      <svg {...svgProps(`0 0 ${svgW} ${cellH}`)}>
        {grades.map((gr, i) => {
          const cx = i * cellW + cellW / 2;
          const cy = 68;
          const lines = gr.desc.split("\n");
          return (
            <g key={gr.g}>
              <text {...T(cx, 18, 17, { fontWeight: 700, fill: ACCENT })}>Grade {gr.g}</text>
              {drawGrade(gr.draw, cx, cy)}
              {lines.map((ln, li) => (
                <text key={li} {...T(cx, 136 + li * 17, 10, { fill: SOFT })}>{ln}</text>
              ))}
              {i > 0 && (
                <line x1={i * cellW} y1={0} x2={i * cellW} y2={cellH}
                  stroke={RULE} strokeWidth="0.8" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Burns — Rule of Nines (anterior view) + Depth cross-section
  // ─────────────────────────────────────────────────────────────────────────
  function BurnsFig() {
    // Left panel: anterior body map with % labels
    // Right panel: skin depth cross-section (superficial / partial / full)

    // --- Body map (schematic stick-figure + zones) ---
    // SVG coords: body centred at x=190, head top y=30

    // Colour codes for burn zones
    const ZONE_ORANGE = ACCENT;  // 9% zones

    const bodyMap = () => (
      <g>
        {/* Head 9% */}
        <ellipse cx={190} cy={52} rx={28} ry={32} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(190, 55, 11, { fontWeight: 600 })}> 9%</text>
        <text {...T(190, 68, 9, { fill: SOFT })}>Head + neck</text>

        {/* Neck connector */}
        <rect x={182} y={83} width={16} height={12} fill={WALL} stroke={INK} strokeWidth="1" />

        {/* Trunk anterior 18% (chest 9 + abdomen 9) */}
        <rect x={152} y={94} width={76} height={86} rx={4} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />
        <text {...T(190, 124, 14, { fontWeight: 700, fill: ACCENT })}>18%</text>
        <text {...T(190, 142, 10, { fill: SOFT })}>Anterior trunk</text>
        <text {...T(190, 156, 9, { fill: SOFT })}>(chest 9 + abd 9)</text>

        {/* Left arm 4.5% (each arm = 9%; front = 4.5%) */}
        <rect x={108} y={96} width={44} height={74} rx={14} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(130, 133, 11, { fontWeight: 600 })}>4.5%</text>
        <text {...T(130, 147, 9, { fill: SOFT })}>Arm (ant.)</text>

        {/* Right arm */}
        <rect x={228} y={96} width={44} height={74} rx={14} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(250, 133, 11, { fontWeight: 600 })}>4.5%</text>
        <text {...T(250, 147, 9, { fill: SOFT })}>Arm (ant.)</text>

        {/* Perineum 1% */}
        <rect x={174} y={178} width={32} height={14} rx={3} fill={RULE} opacity="0.45" stroke={RULE} strokeWidth="1" />
        <text {...T(190, 190, 9, { fill: SOFT })}>Perineum 1%</text>

        {/* Left thigh / leg 9% (front) */}
        <rect x={154} y={192} width={34} height={96} rx={10} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(171, 244, 11, { fontWeight: 600 })}>9%</text>
        <text {...T(171, 258, 9, { fill: SOFT })}>Leg (ant.)</text>

        {/* Right thigh / leg 9% (front) */}
        <rect x={192} y={192} width={34} height={96} rx={10} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(209, 244, 11, { fontWeight: 600 })}>9%</text>
        <text {...T(209, 258, 9, { fill: SOFT })}>Leg (ant.)</text>

        {/* Panel label */}
        <text {...T(190, 310, 12, { fill: SOFT })}>Anterior view</text>
        <text {...T(190, 326, 10.5, { fill: MUTE })}>Total body surface area (TBSA)</text>
        <text {...T(190, 341, 10.5, { fill: MUTE })}>Posterior = mirror image (+18% trunk, +9% each leg)</text>
      </g>
    );

    // --- Depth cross-section ---
    // Layers stacked, with burn depth brackets on right
    const xD = 420;
    const layers = [
      { label: "Epidermis",       sub: "",                    h: 22, fill: ASOFT },
      { label: "Papillary dermis",sub: "",                    h: 28, fill: WALL  },
      { label: "Reticular dermis",sub: "(adnexal structures)", h: 40, fill: WALL  },
      { label: "Subcutaneous fat",sub: "",                    h: 44, fill: LUMEN },
    ];
    const lx = xD + 20, lw = 200;
    let ly = 48;
    const bandEls = [];
    const layerMeta = [];
    layers.forEach((L, i) => {
      bandEls.push(
        <g key={i}>
          <rect x={lx} y={ly} width={lw} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" />
          <text x={lx + 7} y={ly + L.h / 2 + (L.sub ? -3 : 5)} fontSize="12" fill={INK} fontWeight="600">{L.label}</text>
          {L.sub && <text x={lx + 7} y={ly + L.h / 2 + 12} fontSize="9.5" fill={SOFT}>{L.sub}</text>}
        </g>
      );
      layerMeta.push({ y0: ly, y1: ly + L.h });
      ly += L.h + 3;
    });
    const totalH = ly;

    // Burn-depth brackets — one vertical bar per depth, label at mid-span
    // Each bracket is offset rightward so labels don't collide
    const depths = [
      { label: "Superficial", sub: "1st°",    to: layerMeta[0].y1, color: ACCENT },
      { label: "Superf. ptl", sub: "2nd°",    to: layerMeta[1].y1, color: ACCENT },
      { label: "Deep ptl",    sub: "2nd° deep", to: layerMeta[2].y1, color: ACCENT },
      { label: "Full thick.", sub: "3rd°",    to: layerMeta[3].y1, color: MUTE   },
    ];
    const bx0 = lx + lw + 10;
    const topYref = layerMeta[0].y0;
    const bracketEls = depths.map((d, i) => {
      const bx = bx0 + i * 40;
      // Place label at vertical midpoint of the bracket span
      const midY = topYref + (d.to - topYref) / 2;
      return (
        <g key={d.label + i}>
          <line x1={bx} y1={topYref} x2={bx} y2={d.to} stroke={d.color} strokeWidth="2" />
          <line x1={bx} y1={d.to} x2={bx - 6} y2={d.to} stroke={d.color} strokeWidth="2" />
          <text x={bx + 4} y={midY - 4} fontSize="9" fill={d.color} fontWeight="700" textAnchor="start">{d.label}</text>
          <text x={bx + 4} y={midY + 7} fontSize="8" fill={SOFT} textAnchor="start">{d.sub}</text>
        </g>
      );
    });

    const depthPanel = (
      <g>
        <text {...T(xD + 170, 30, 12.5, { fill: SOFT, fontWeight: 600 })}>Burn depth (cross-section)</text>
        {bandEls}
        {bracketEls}
        <text x={lx} y={totalH + 16} fontSize="10" fill={SOFT} textAnchor="start">
          Sensation lost in full-thickness (3rd degree) burns.
        </text>
      </g>
    );

    return (
      <svg {...svgProps("0 0 820 360")}>
        {bodyMap()}
        {depthPanel}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Chest-drain Triangle of Safety (tube thoracostomy / thoracocentesis)
  //
  // Borders (corrected):
  //   Anterior  = lateral edge of pectoralis major
  //   Posterior = anterior edge of latissimus dorsi
  //   Inferior  = horizontal line at level of nipple (5th ICS)
  //   Apex      = below axilla
  // ─────────────────────────────────────────────────────────────────────────
  function TriangleOfSafetyFig() {
    // Right lateral chest view, schematic
    // We'll draw a torso outline and overlay the triangle

    // Torso right-lateral silhouette (simplified)
    const torsoPath = "M 200 40 C 200 28 280 24 320 38 C 370 56 380 100 376 180 C 374 240 360 300 340 340 C 320 370 200 370 180 340 C 160 300 144 240 142 180 C 138 100 150 56 200 40 Z";

    // Pectoralis major lateral edge: runs from ~(200,60) down to ~(190,230)
    const pectPath = "M 205 62 C 196 100 188 160 186 232";
    // Latissimus dorsi anterior edge: runs from ~(330,80) down to ~(330,280)
    const latPath = "M 326 78 C 328 140 330 200 330 280";

    // Nipple level (5th ICS) ≈ y=240 on this schematic
    const nippleY = 240;

    // Triangle vertices
    // Anterior border at nipple level: pec edge ≈ x=186, y=232 → project to y=240: ~x=185
    // Posterior border at nipple level: lat edge x≈330
    // Apex below axilla ~(258, 100)
    const apex = [258, 102];
    const antBase = [186, nippleY];
    const postBase = [330, nippleY];

    return (
      <svg {...svgProps("0 0 520 400")}>
        {/* Torso outline */}
        <path d={torsoPath} fill={WALL} stroke={INK} strokeWidth="2" />

        {/* Axilla region */}
        <ellipse cx={258} cy={90} rx={36} ry={14} fill={LUMEN} stroke={RULE} strokeWidth="1" strokeDasharray="4 3" />
        <text {...T(258, 90, 10, { fill: SOFT })}>Axilla</text>

        {/* Pectoralis major lateral edge */}
        <path d={pectPath} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <text x={162} y={152} fontSize="10" fill={MUTE} textAnchor="end">Lat. edge</text>
        <text x={162} y={164} fontSize="10" fill={MUTE} textAnchor="end">pec. major</text>

        {/* Latissimus dorsi anterior edge */}
        <path d={latPath} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <text x={340} y={150} fontSize="10" fill={MUTE} textAnchor="start">Ant. edge</text>
        <text x={340} y={162} fontSize="10" fill={MUTE} textAnchor="start">lat. dorsi</text>

        {/* 5th ICS horizontal line */}
        <line x1={150} y1={nippleY} x2={360} y2={nippleY} stroke={RULE} strokeWidth="1.5" strokeDasharray="5 4" />
        <text x={362} y={nippleY + 4} fontSize="10" fill={SOFT} textAnchor="start">5th ICS</text>
        <text x={362} y={nippleY + 16} fontSize="9.5" fill={SOFT} textAnchor="start">(nipple level)</text>

        {/* Triangle of safety — filled polygon */}
        <polygon
          points={`${apex[0]},${apex[1]} ${antBase[0]},${antBase[1]} ${postBase[0]},${postBase[1]}`}
          fill={ACCENT}
          opacity="0.18"
          stroke={ACCENT}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* "Safe zone" label inside triangle */}
        <text {...T(258, 200, 13, { fill: ACCENT, fontWeight: 700 })}>Triangle</text>
        <text {...T(258, 216, 13, { fill: ACCENT, fontWeight: 700 })}>of Safety</text>

        {/* Drain insertion dot */}
        <circle cx={248} cy={190} r={7} fill={ACCENT} opacity="0.85" />
        <text {...T(248, 175, 9.5, { fill: ACCENT })}>Insert here</text>

        {/* Nipple indicator */}
        <circle cx={200} cy={nippleY} r={5} fill={SOFT} opacity="0.6" />
        <text {...T(200, nippleY + 16, 9, { fill: SOFT })}>Nipple</text>

        {/* Title and annotations */}
        <text {...T(260, 26, 14, { fontWeight: 700 })}>Triangle of Safety</text>
        <text {...T(260, 42, 11, { fill: SOFT })}>Right lateral view — tube thoracostomy / thoracocentesis</text>

        {/* Border callout lines & labels at bottom */}
        <text x={14} y={372} fontSize="10.5" fill={INK} textAnchor="start">Borders:</text>
        <text x={14} y={386} fontSize="10" fill={SOFT} textAnchor="start">Anterior = lateral edge of pectoralis major</text>
        <text x={260} y={372} fontSize="10" fill={SOFT} textAnchor="start">Posterior = anterior edge of latissimus dorsi</text>
        <text x={260} y={386} fontSize="10" fill={SOFT} textAnchor="start">Inferior = 5th intercostal space (nipple level)</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Register all figures
  // ─────────────────────────────────────────────────────────────────────────
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "trauma-haemorrhagic-shock-classes": {
      title: "ATLS Haemorrhagic Shock Classification I–IV",
      caption: "The four ATLS shock classes stratify blood loss by physiological response in a 70 kg adult with an estimated blood volume of 5 L. Class I–II can be managed with crystalloid alone; Class III requires blood products; Class IV is immediately life-threatening and mandates damage-control resuscitation. Mental status deterioration is a late and ominous sign.",
      ref: "ATLS Student Course Manual, 10th ed. American College of Surgeons Committee on Trauma, 2018.",
      render: () => <HaemorrhagicShockFig />,
    },

    "trauma-aast-spleen": {
      title: "AAST Splenic Injury Grade I–V",
      caption: "AAST grading: I = subcapsular haematoma <10% surface area, capsular laceration <1 cm parenchymal depth; II = subcapsular haematoma 10–50%, laceration 1–3 cm parenchymal not involving trabecular vessels; III = subcapsular haematoma >50% or expanding, laceration >3 cm or involving trabecular vessels; IV = laceration involving segmental or hilar vessels with >25% devascularisation; V = shattered spleen or hilar vascular injury with total devascularisation. Grades I–III in stable patients are candidates for non-operative management (NOM); Grade IV–V or haemodynamic instability usually require angioembolisation or operative intervention.",
      ref: "Moore EE et al., J Trauma 1989;29:1664. AAST Organ Injury Scale (2018 revision).",
      render: () => <AastSpleenFig />,
    },

    "trauma-aast-liver": {
      title: "AAST Liver Injury Grade I–V",
      caption: "AAST grading: I = subcapsular haematoma <10% surface area, laceration <1 cm parenchymal depth; II = subcapsular haematoma 10–50%, laceration 1–3 cm depth <10 cm length; III = subcapsular haematoma >50% or expanding, laceration >3 cm parenchymal depth; IV = laceration involving 25–75% of hepatic lobe or 1–3 Couinaud segments; V = laceration >75% of hepatic lobe or juxtahepatic venous injury. Grades I–III are amenable to NOM in 80–90% of stable patients; grade IV–V often require angioembolisation or damage-control laparotomy with perihepatic packing.",
      ref: "Moore EE et al., J Trauma 1989;29:1664. AAST Organ Injury Scale (2018 revision).",
      render: () => <AastLiverFig />,
    },

    "trauma-burns-rule-of-nines": {
      title: "Burns — Rule of Nines & Burn Depth",
      caption: "The Rule of Nines (Wallace) divides body surface into 11 regions each approximating 9% TBSA (perineum = 1%), enabling rapid estimation of total burn area for fluid-resuscitation calculations (Parkland formula: 4 mL × kg × %TBSA, half in first 8 h). Burn depth determines healing potential: superficial partial-thickness heals without surgery; deep partial and full-thickness require excision and grafting.",
      ref: "Wallace AB, Lancet 1951;1:501. ABA Practice Guidelines for Burn Care, 2018.",
      render: () => <BurnsFig />,
    },

    "trauma-triangle-of-safety": {
      title: "Triangle of Safety — Tube Thoracostomy",
      caption: "The triangle of safety defines the preferred site for chest-drain insertion to minimise risk to breast tissue, pectoralis major, and long thoracic nerve. Its anterior border is the lateral edge of pectoralis major, posterior border is the anterior edge of latissimus dorsi, and inferior border is a horizontal line at the 5th intercostal space (nipple level in males). Drains are inserted in the 4th or 5th ICS, mid-axillary line.",
      ref: "Laws D et al., Thorax 2003;58(Suppl II):ii53. Primary Trauma Care Manual (ATLS concordant).",
      render: () => <TriangleOfSafetyFig />,
    },

  });
})();
