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
  // AAST Renal Injury Grade I–V
  // ─────────────────────────────────────────────────────────────────────────
  function AastKidneyFig() {
    const grades = [
      { g: "I",   desc: "Subcapsular hx or\ncontusion; no laceration", draw: "contusion" },
      { g: "II",  desc: "Perirenal hx (Gerota)\nlac <1cm, no extravasation", draw: "perirenal" },
      { g: "III", desc: "Laceration >1cm depth\nno collecting-system injury", draw: "deep-lac" },
      { g: "IV",  desc: "Lac into collecting system\nor main vessel / infarct", draw: "collecting" },
      { g: "V",   desc: "Shattered kidney or\nhilar pedicle avulsion", draw: "shattered" },
    ];

    const cellW = 124, cellH = 185, cols = 5;
    const svgW = cellW * cols;
    const rx = 26, ry = 42;

    const kidneyPath = (cx, cy) =>
      `M ${cx} ${cy - ry} C ${cx - rx * 1.3} ${cy - ry} ${cx - rx * 1.3} ${cy + ry} ${cx} ${cy + ry} C ${cx + rx * 0.75} ${cy + ry} ${cx + rx * 0.95} ${cy + ry * 0.35} ${cx + rx * 0.3} ${cy} C ${cx + rx * 0.95} ${cy - ry * 0.35} ${cx + rx * 0.75} ${cy - ry} ${cx} ${cy - ry} Z`;

    const drawGrade = (kind, cx, cy) => {
      const hilumX = cx + rx * 0.3;
      const base = [];

      if (kind === "perirenal") {
        base.push(
          <ellipse key="gerota" cx={cx - 1} cy={cy} rx={rx * 1.55} ry={ry * 1.14} fill="none" stroke={RULE} strokeWidth="1.3" strokeDasharray="4 3" />
        );
      }

      base.push(<path key="body" d={kidneyPath(cx, cy)} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />);

      if (kind === "contusion") {
        base.push(
          <ellipse key="h" cx={cx - 13} cy={cy - 16} rx={9} ry={6.5} fill={RULE} opacity="0.55" stroke={ACCENT} strokeWidth="1" />
        );
      } else if (kind === "perirenal") {
        base.push(
          <ellipse key="h" cx={cx - 27} cy={cy + 8} rx={10} ry={19} fill={RULE} opacity="0.32" />,
          <line key="l" x1={cx - 9} y1={cy - ry * 0.55} x2={cx + 1} y2={cy - ry * 0.28} stroke={MUTE} strokeWidth="2.6" strokeLinecap="round" />
        );
      } else if (kind === "deep-lac") {
        base.push(
          <line key="l" x1={cx - 15} y1={cy - ry * 0.8} x2={cx + 5} y2={cy + ry * 0.05} stroke={MUTE} strokeWidth="4" strokeLinecap="round" />,
          <ellipse key="h" cx={cx - 17} cy={cy - 8} rx={18} ry={14} fill={RULE} opacity="0.4" />
        );
      } else if (kind === "collecting") {
        base.push(
          <line key="l" x1={cx - 16} y1={cy - ry * 0.75} x2={hilumX + 1} y2={cy - 2} stroke={MUTE} strokeWidth="5" strokeLinecap="round" />,
          <circle key="hv" cx={hilumX + 9} cy={cy} r={5.5} fill={ACCENT} opacity="0.9" />,
          <line key="s1" x1={hilumX + 9} y1={cy + 7} x2={hilumX + 4} y2={cy + 20} stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" />,
          <line key="s2" x1={hilumX + 9} y1={cy + 7} x2={hilumX + 13} y2={cy + 21} stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" />
        );
      } else if (kind === "shattered") {
        [[-15, -30, -2, -8], [4, -24, -13, -4], [-20, -2, -3, 22], [-6, 6, -22, 24]].forEach(([x1, y1, x2, y2], k) => {
          base.push(
            <line key={`c${k}`} x1={cx + x1} y1={cy + y1} x2={cx + x2} y2={cy + y2} stroke={MUTE} strokeWidth="3.2" strokeLinecap="round" />
          );
        });
        base.push(
          <line key="ped1" x1={hilumX - 3} y1={cy - 5} x2={hilumX + 9} y2={cy - 5} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />,
          <line key="ped2" x1={hilumX + 15} y1={cy - 5} x2={hilumX + 27} y2={cy - 5} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        );
      }
      return base;
    };

    return (
      <svg {...svgProps(`0 0 ${svgW} ${cellH}`)}>
        {grades.map((gr, i) => {
          const cx = i * cellW + cellW / 2;
          const cy = 72;
          const lines = gr.desc.split("\n");
          return (
            <g key={gr.g}>
              <text {...T(cx, 18, 17, { fontWeight: 700, fill: ACCENT })}>Grade {gr.g}</text>
              {drawGrade(gr.draw, cx, cy)}
              {lines.map((ln, li) => (
                <text key={li} {...T(cx, 140 + li * 16, 9, { fill: SOFT })}>{ln}</text>
              ))}
              {i > 0 && (
                <line x1={i * cellW} y1={0} x2={i * cellW} y2={cellH} stroke={RULE} strokeWidth="0.8" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Young-Burgess pelvic-ring fracture mechanism classification
  // ─────────────────────────────────────────────────────────────────────────
  function YoungBurgessFig() {
    const panels = [
      {
        key: "lc", label: "LC", sub: "Lateral Compression",
        lines: ["I – ipsilateral sacral buckle", "II – crescent fx / SI injury", "III – + contralateral (windswept)"],
      },
      {
        key: "apc", label: "APC", sub: "Anteroposterior Compression",
        lines: ["I – symphysis gap <2.5cm", "II – “open book”, post. SI intact", "III – complete SI disruption"],
      },
      {
        key: "vs", label: "VS", sub: "Vertical Shear",
        lines: ["Complete ant. + post. disruption", "Vertical / cephalad displacement", "Most unstable — high transfusion"],
      },
      {
        key: "cm", label: "CM", sub: "Combined Mechanism",
        lines: ["Mixed features, ≥ 2 patterns", "e.g. LC + vertical component", "Manage per worst component"],
      },
    ];

    const cellW = 172, cols = 4, svgW = cellW * cols, svgH = 250;
    const cy0 = 112;
    const yTop = cy0 - 28, yLat = cy0 + 6, yBot = cy0 + 36;

    const halfPts = (cx, side, dxTop, dxBot, dy) => {
      const s = side === "L" ? -1 : 1;
      return [
        [cx + s * (8 + dxTop), yTop + dy],
        [cx + s * (32 + dxTop), yTop + dy],
        [cx + s * (40 + (dxTop + dxBot) / 2), yLat + dy],
        [cx + s * (7 + dxBot), yBot + dy],
      ];
    };
    const halfD = (pts) =>
      `M ${pts[0][0]} ${pts[0][1]} L ${pts[1][0]} ${pts[1][1]} L ${pts[2][0]} ${pts[2][1]} L ${pts[3][0]} ${pts[3][1]} Z`;

    const arrowLeft = (xTail, xTip, y, key) => [
      <line key={key + "s"} x1={xTail} y1={y} x2={xTip + 10} y2={y} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />,
      <polygon key={key + "h"} points={`${xTip},${y} ${xTip + 11},${y - 6} ${xTip + 11},${y + 6}`} fill={ACCENT} />,
    ];
    const arrowUp = (yTail, yTip, x, key) => [
      <line key={key + "s"} x1={x} y1={yTail} x2={x} y2={yTip + 10} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />,
      <polygon key={key + "h"} points={`${x},${yTip} ${x - 6},${yTip + 11} ${x + 6},${yTip + 11}`} fill={ACCENT} />,
    ];

    const drawPanel = (p, cx) => {
      let RdxTop = 0, RdxBot = 0, Rdy = 0;
      if (p.key === "apc") { RdxTop = 5; RdxBot = 15; }
      if (p.key === "vs") { Rdy = -15; }
      if (p.key === "cm") { RdxTop = 2; RdxBot = 6; Rdy = -7; }

      const lp = halfPts(cx, "L", 0, 0, 0);
      const rp = halfPts(cx, "R", RdxTop, RdxBot, Rdy);
      const intact = p.key === "lc";

      const els = [];

      if (intact) {
        els.push(
          <path key="sac" d={`M ${lp[0][0]} ${lp[0][1]} L ${rp[0][0]} ${rp[0][1]} L ${cx} ${yTop + 16} Z`} fill={ASOFT} stroke={ACCENT} strokeWidth="1" opacity="0.7" />,
          <line key="symph" x1={lp[3][0]} y1={lp[3][1]} x2={rp[3][0]} y2={rp[3][1]} stroke={RULE} strokeWidth="2" />
        );
      }

      els.push(
        <path key="L" d={halfD(lp)} fill={WALL} stroke={INK} strokeWidth="2" strokeLinejoin="round" />,
        <path key="R" d={halfD(rp)} fill={WALL} stroke={INK} strokeWidth="2" strokeLinejoin="round" />,
        <circle key="acL" cx={lp[2][0] + 8} cy={lp[2][1]} r={3.6} fill={LUMEN} stroke={RULE} strokeWidth="1" />,
        <circle key="acR" cx={rp[2][0] - 8} cy={rp[2][1]} r={3.6} fill={LUMEN} stroke={RULE} strokeWidth="1" />
      );

      if (p.key === "lc") {
        els.push(...arrowLeft(cx + 72, rp[2][0] + 4, rp[2][1], "lc"));
        els.push(<line key="imp" x1={rp[3][0] - 6} y1={rp[3][1] - 6} x2={rp[3][0] + 6} y2={rp[3][1] + 6} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />);
      } else if (p.key === "apc") {
        els.push(...arrowUp(yBot + 34, yBot + 6, cx, "apc"));
      } else if (p.key === "vs") {
        els.push(...arrowUp(yBot + 22, yTop + Rdy - 20, rp[2][0] + 16, "vs"));
        els.push(<line key="ref" x1={rp[2][0] - 4} y1={yLat} x2={rp[2][0] + 12} y2={yLat} stroke={RULE} strokeWidth="1.3" strokeDasharray="2 2" />);
      }

      return els;
    };

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        <text {...T(svgW / 2, 15, 12, { fill: SOFT, fontWeight: 600 })}>Young-Burgess Pelvic-Ring Fracture Patterns (AP-view schematic)</text>
        {panels.map((p, i) => {
          const cx = i * cellW + cellW / 2;
          return (
            <g key={p.key}>
              <text {...T(cx, 42, 16, { fontWeight: 700, fill: ACCENT })}>{p.label}</text>
              <text {...T(cx, 57, 9.5, { fill: SOFT })}>{p.sub}</text>
              {drawPanel(p, cx)}
              {p.lines.map((ln, li) => (
                <text key={li} x={i * cellW + 8} y={192 + li * 15} fontSize="9.2" fill={SOFT} textAnchor="start">{ln}</text>
              ))}
              {i > 0 && <line x1={i * cellW} y1={26} x2={i * cellW} y2={svgH - 6} stroke={RULE} strokeWidth="0.8" />}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Denver Blunt Cerebrovascular Injury (BCVI) Grading Scale I–V
  // ─────────────────────────────────────────────────────────────────────────
  function DenverBcviFig() {
    const grades = [
      { g: "I",   desc: "Wall irregularity /\ndissection, <25%\nnarrowing", draw: "irregular" },
      { g: "II",  desc: "Intramural thrombus/flap\nor ≥25% stenosis", draw: "thrombus" },
      { g: "III", desc: "Pseudoaneurysm", draw: "pseudo" },
      { g: "IV",  desc: "Occlusion", draw: "occluded" },
      { g: "V",   desc: "Transection with\nfree extravasation", draw: "transected" },
    ];

    const cellW = 124, cellH = 185, cols = 5;
    const svgW = cellW * cols;
    const tubeH = 30, tubeY = 62;

    const drawGrade = (kind, cx) => {
      const x1 = cx - 44, x2 = cx + 44;
      const yTop = tubeY, yBot = tubeY + tubeH, yMid = tubeY + tubeH / 2;
      const els = [];

      if (kind === "irregular") {
        els.push(
          <rect key="wall" x={x1} y={yTop} width={x2 - x1} height={tubeH} rx={tubeH / 2} fill={LUMEN} stroke={INK} strokeWidth="2.5" />,
          <path key="irr1" d={`M ${cx - 30} ${yTop + 4} q 8 6 14 0 q 8 -6 16 1 q 9 6 15 -1`} fill="none" stroke={ACCENT} strokeWidth="2" />,
          <path key="irr2" d={`M ${cx - 30} ${yBot - 4} q 8 -6 14 0 q 8 6 16 -1 q 9 -6 15 1`} fill="none" stroke={ACCENT} strokeWidth="2" />
        );
      } else if (kind === "thrombus") {
        els.push(
          <rect key="wall" x={x1} y={yTop} width={x2 - x1} height={tubeH} rx={tubeH / 2} fill={LUMEN} stroke={INK} strokeWidth="2.5" />,
          <path key="th" d={`M ${cx - 16} ${yTop + 2} Q ${cx + 10} ${yTop + 2} ${cx + 16} ${yMid} Q ${cx + 2} ${yMid - 3} ${cx - 16} ${yTop + 2} Z`} fill={ACCENT} opacity="0.85" />
        );
      } else if (kind === "pseudo") {
        els.push(
          <rect key="wall" x={x1} y={yTop} width={x2 - x1} height={tubeH} rx={tubeH / 2} fill={LUMEN} stroke={INK} strokeWidth="2.5" />,
          <path key="neck" d={`M ${cx - 6} ${yTop + 4} L ${cx + 10} ${yTop - 4}`} fill="none" stroke={ACCENT} strokeWidth="7" strokeLinecap="round" opacity="0.55" />,
          <circle key="ps" cx={cx + 8} cy={yTop - 10} r={15} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        );
      } else if (kind === "occluded") {
        els.push(
          <rect key="wall" x={x1} y={yTop} width={x2 - x1} height={tubeH} rx={tubeH / 2} fill={LUMEN} stroke={INK} strokeWidth="2.5" />,
          <rect key="clot" x={x1 + 3} y={yTop + 3} width={x2 - x1 - 6} height={tubeH - 6} rx={(tubeH - 6) / 2} fill={MUTE} opacity="0.85" />
        );
      } else if (kind === "transected") {
        const gap = 20, capR = tubeH / 2;
        const cutL = cx - gap / 2, cutR = cx + gap / 2;
        els.push(
          <path key="wallL" d={`M ${cutL} ${yTop} L ${x1 + capR} ${yTop} A ${capR} ${capR} 0 0 0 ${x1 + capR} ${yBot} L ${cutL} ${yBot} Z`} fill={LUMEN} stroke={INK} strokeWidth="2.5" />,
          <path key="wallR" d={`M ${cutR} ${yTop} L ${x2 - capR} ${yTop} A ${capR} ${capR} 0 0 1 ${x2 - capR} ${yBot} L ${cutR} ${yBot} Z`} fill={LUMEN} stroke={INK} strokeWidth="2.5" />,
          <path key="spurt" d={`M ${cx - 2} ${yMid - 4} q -6 18 3 32 q 9 -14 3 -32 Z`} fill={ACCENT} opacity="0.8" />,
          <circle key="drop" cx={cx + 11} cy={yMid + 30} r={3.6} fill={ACCENT} opacity="0.7" />
        );
      }
      return els;
    };

    return (
      <svg {...svgProps(`0 0 ${svgW} ${cellH}`)}>
        {grades.map((gr, i) => {
          const cx = i * cellW + cellW / 2;
          const lines = gr.desc.split("\n");
          return (
            <g key={gr.g}>
              <text {...T(cx, 22, 17, { fontWeight: 700, fill: ACCENT })}>Grade {gr.g}</text>
              {drawGrade(gr.draw, cx)}
              {lines.map((ln, li) => (
                <text key={li} {...T(cx, 130 + li * 16, 10.5, { fill: SOFT })}>{ln}</text>
              ))}
              {i > 0 && <line x1={i * cellW} y1={0} x2={i * cellW} y2={cellH} stroke={RULE} strokeWidth="0.8" />}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Zones of the Neck I–III (penetrating neck injury)
  // ─────────────────────────────────────────────────────────────────────────
  function NeckZonesFig() {
    const ySkullBase = 96, yMandible = 128, yCricoid = 222, yClavicle = 300;
    const neckXL = 78, neckXR = 142;
    const cx = (neckXL + neckXR) / 2;
    const shoulderXL = 24, shoulderXR = 196;

    const zones = [
      { key: "III", y0: ySkullBase, y1: yMandible,
        structs: ["Distal ICA, vertebral a.", "CN IX–XII, pharynx — hard access"] },
      { key: "II", y0: yMandible, y1: yCricoid,
        structs: ["Carotid & jugular vessels", "Larynx, trachea, esophagus", "Most exposed — explore directly"] },
      { key: "I", y0: yCricoid, y1: yClavicle,
        structs: ["Great vessel origins (subclavian)", "Trachea, esophagus, thoracic duct", "Thoracic outlet — hardest access"] },
    ];

    const boundaries = [
      { y: ySkullBase, label: "skull base" },
      { y: yMandible, label: "angle of mandible" },
      { y: yCricoid, label: "cricoid cartilage" },
      { y: yClavicle, label: "sternal notch / clavicle" },
    ];

    return (
      <svg {...svgProps("0 0 520 320")}>
        <text {...T(260, 16, 13, { fill: SOFT, fontWeight: 600 })}>Zones of the Neck (lateral view)</text>

        {/* Head */}
        <ellipse cx={cx} cy={78} rx={34} ry={44} fill={WALL} stroke={INK} strokeWidth="1.8" />
        <circle cx={128} cy={78} r={5} fill="none" stroke={INK} strokeWidth="1.3" />
        <path d="M 140 86 Q 151 96 137 110" fill="none" stroke={INK} strokeWidth="1.5" />

        {/* Zone bands */}
        <rect x={neckXL} y={ySkullBase} width={neckXR - neckXL} height={yMandible - ySkullBase} fill={LUMEN} stroke={RULE} strokeWidth="1" />
        <rect x={neckXL} y={yMandible} width={neckXR - neckXL} height={yCricoid - yMandible} fill={ASOFT} stroke={RULE} strokeWidth="1" />
        <polygon points={`${neckXL},${yCricoid} ${neckXR},${yCricoid} ${shoulderXR},${yClavicle} ${shoulderXL},${yClavicle}`} fill={WALL} stroke={RULE} strokeWidth="1" />

        {/* silhouette contour */}
        <path d={`M ${neckXL} ${ySkullBase} L ${neckXL} ${yCricoid} L ${shoulderXL} ${yClavicle}`} fill="none" stroke={INK} strokeWidth="1.8" />
        <path d={`M ${neckXR} ${ySkullBase} L ${neckXR} ${yCricoid} L ${shoulderXR} ${yClavicle}`} fill="none" stroke={INK} strokeWidth="1.8" />

        {/* boundary dashed lines + landmark labels */}
        {boundaries.map((b, i) => (
          <g key={i}>
            <line x1={15} y1={b.y} x2={205} y2={b.y} stroke={RULE} strokeWidth="1.2" strokeDasharray="4 3" />
            <text x={18} y={b.y - 4} fontSize="9" fill={SOFT} textAnchor="start">{b.label}</text>
          </g>
        ))}

        {/* zone numerals inside bands */}
        {zones.map((z) => (
          <text key={z.key} {...T(cx, (z.y0 + z.y1) / 2 + 7, 20, { fontWeight: 700, fill: ACCENT })}>{z.key}</text>
        ))}

        {/* structures-at-risk lists */}
        <text x={225} y={ySkullBase - 6} fontSize="11" fill={INK} fontWeight="600" textAnchor="start">Structures at risk</text>
        {zones.map((z) => {
          const ymid = (z.y0 + z.y1) / 2;
          const startY = ymid - ((z.structs.length - 1) * 13) / 2 + 4;
          return (
            <g key={"s" + z.key}>
              {z.structs.map((s, si) => (
                <text key={si} x={225} y={startY + si * 13} fontSize="9.5" fill={SOFT} textAnchor="start">{s}</text>
              ))}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // REBOA aortic occlusion zones I–III
  // ─────────────────────────────────────────────────────────────────────────
  function ReboaZonesFig() {
    const cx = 150, tubeW = 34;
    const yTop = 40, ySubclav = 58, yCeliac = 168, yRenal = 258, yBif = 378, yIliacEnd = 428;

    const brackets = [
      { z: "Zone I", y0: ySubclav, y1: yCeliac, color: ACCENT,
        note: ["Supraceliac aorta", "Deploy: abdominal/", "pelvic hemorrhage"] },
      { z: "Zone II", y0: yCeliac, y1: yRenal, color: MUTE,
        note: ["Paravisceral", "NO-GO — visceral/", "renal ischemia risk"] },
      { z: "Zone III", y0: yRenal, y1: yBif, color: ACCENT,
        note: ["Infrarenal aorta", "Deploy: pelvic/", "junctional hemorrhage"] },
    ];

    const bx = cx + 90;

    return (
      <svg {...svgProps("0 0 520 452")}>
        <text {...T(240, 16, 13, { fill: SOFT, fontWeight: 600 })}>REBOA Aortic Occlusion Zones</text>

        {/* aorta body */}
        <rect x={cx - tubeW / 2} y={yTop} width={tubeW} height={yBif - yTop} fill={LUMEN} stroke={INK} strokeWidth="2.5" />
        {/* common iliac limbs */}
        <path d={`M ${cx - tubeW / 2} ${yBif - 2} L ${cx - tubeW / 2 - 26} ${yIliacEnd} L ${cx - tubeW / 2 - 12} ${yIliacEnd} L ${cx - 3} ${yBif - 2} Z`} fill={LUMEN} stroke={INK} strokeWidth="2" />
        <path d={`M ${cx + tubeW / 2} ${yBif - 2} L ${cx + tubeW / 2 + 26} ${yIliacEnd} L ${cx + tubeW / 2 + 12} ${yIliacEnd} L ${cx + 3} ${yBif - 2} Z`} fill={LUMEN} stroke={INK} strokeWidth="2" />

        {/* zone tints — Zone I and III (deploy) */}
        <rect x={cx - tubeW / 2} y={ySubclav} width={tubeW} height={yCeliac - ySubclav} fill={ASOFT} opacity="0.6" />
        <rect x={cx - tubeW / 2} y={yRenal} width={tubeW} height={yBif - yRenal} fill={ASOFT} opacity="0.6" />

        {/* zone II hatch (no-go) */}
        <clipPath id="reboa-z2-clip">
          <rect x={cx - tubeW / 2} y={yCeliac} width={tubeW} height={yRenal - yCeliac} />
        </clipPath>
        <g clipPath="url(#reboa-z2-clip)">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((k) => (
            <line key={k} x1={cx - tubeW / 2 - 6 + k * 10} y1={yCeliac - 6} x2={cx - tubeW / 2 - 6 + k * 10 + 20} y2={yRenal + 6} stroke={MUTE} strokeWidth="3.4" opacity="0.55" />
          ))}
        </g>

        {/* balloon icons — Zone I and III deploy points */}
        <ellipse cx={cx} cy={(ySubclav + yCeliac) / 2} rx={tubeW / 2 - 1.5} ry={22} fill={ACCENT} opacity="0.85" stroke={ACCENT} strokeWidth="1.5" />
        <ellipse cx={cx} cy={(yRenal + yBif) / 2} rx={tubeW / 2 - 1.5} ry={22} fill={ACCENT} opacity="0.85" stroke={ACCENT} strokeWidth="1.5" />

        {/* no-entry icon — Zone II */}
        <circle cx={cx} cy={(yCeliac + yRenal) / 2} r={15} fill={LUMEN} stroke={MUTE} strokeWidth="3" />
        <line x1={cx - 10} y1={(yCeliac + yRenal) / 2 + 10} x2={cx + 10} y2={(yCeliac + yRenal) / 2 - 10} stroke={MUTE} strokeWidth="3" strokeLinecap="round" />

        {/* branch landmarks — left side */}
        <line x1={cx - tubeW / 2} y1={ySubclav} x2={cx - tubeW / 2 - 20} y2={ySubclav} stroke={INK} strokeWidth="1.6" />
        <text x={cx - tubeW / 2 - 24} y={ySubclav + 4} fontSize="10" fill={MUTE} textAnchor="end">L subclavian a.</text>

        <line x1={cx - tubeW / 2} y1={yCeliac} x2={cx - tubeW / 2 - 20} y2={yCeliac} stroke={INK} strokeWidth="1.6" />
        <text x={cx - tubeW / 2 - 24} y={yCeliac + 4} fontSize="10" fill={MUTE} textAnchor="end">celiac axis</text>

        <line x1={cx - tubeW / 2} y1={yRenal} x2={cx - tubeW / 2 - 20} y2={yRenal} stroke={INK} strokeWidth="1.6" />
        <text x={cx - tubeW / 2 - 24} y={yRenal + 4} fontSize="10" fill={MUTE} textAnchor="end">lowest renal a.</text>
        <line x1={cx + tubeW / 2} y1={yRenal} x2={cx + tubeW / 2 + 14} y2={yRenal} stroke={INK} strokeWidth="1.6" />

        <line x1={cx - tubeW / 2} y1={yBif} x2={cx - tubeW / 2 - 20} y2={yBif} stroke={INK} strokeWidth="1.6" />
        <text x={cx - tubeW / 2 - 24} y={yBif + 4} fontSize="10" fill={MUTE} textAnchor="end">aortic bifurcation</text>

        {/* zone brackets — right side */}
        {brackets.map((z, zi) => {
          const mid = (z.y0 + z.y1) / 2;
          const noteStartY = mid - ((z.note.length - 1) * 12) / 2 + 14;
          return (
            <g key={zi}>
              <line x1={bx} y1={z.y0 + 2} x2={bx} y2={z.y1 - 2} stroke={z.color} strokeWidth="2.5" />
              <line x1={bx - 6} y1={z.y0 + 2} x2={bx} y2={z.y0 + 2} stroke={z.color} strokeWidth="2.5" />
              <line x1={bx - 6} y1={z.y1 - 2} x2={bx} y2={z.y1 - 2} stroke={z.color} strokeWidth="2.5" />
              <text x={bx + 10} y={mid - ((z.note.length - 1) * 12) / 2 - 2} fontSize="13.5" fill={z.color} fontWeight="700" textAnchor="start">{z.z}</text>
              {z.note.map((n, ni) => (
                <text key={ni} x={bx + 10} y={noteStartY + ni * 12} fontSize="9.3" fill={SOFT} textAnchor="start">{n}</text>
              ))}
            </g>
          );
        })}
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

    "trauma-aast-kidney": {
      title: "AAST Renal Injury Grade I–V",
      caption: "AAST grading: I = contusion or subcapsular haematoma without laceration; II = perirenal haematoma confined within Gerota fascia, laceration <1 cm cortical depth without urinary extravasation; III = laceration >1 cm parenchymal depth without collecting-system injury; IV = laceration through the corticomedullary junction into the collecting system (urinary extravasation), main renal artery/vein injury with contained haemorrhage, or segmental infarction; V = shattered kidney or renal pedicle avulsion with devascularisation. Grade I–IV in a haemodynamically stable patient is managed non-operatively ± angioembolisation; urinary extravasation alone is not an indication for surgery, but pedicle avulsion (Grade V) usually mandates urgent exploration.",
      ref: "Moore EE et al., J Trauma 1989;29:1664. AAST Organ Injury Scale (2018 revision).",
      render: () => <AastKidneyFig />,
    },

    "trauma-young-burgess": {
      title: "Young-Burgess Pelvic Fracture Mechanisms",
      caption: "The Young-Burgess system classifies pelvic-ring fractures by the direction of the injuring force. Lateral compression (LC) drives internal rotation of the hemipelvis with rami and sacral/SI injury; anteroposterior compression (APC) drives external rotation with progressive symphyseal and SI-joint diastasis — the 'open-book' pattern from APC-II onward. Vertical shear (VS) causes complete ring disruption with cephalad displacement of a hemipelvis and is the most hemodynamically unstable pattern; combined mechanism (CM) shows features of more than one pattern.",
      ref: "Young JW, Burgess AR et al., Radiology 1986;160:445 (Young-Burgess classification).",
      render: () => <YoungBurgessFig />,
    },

    "trauma-denver-bcvi": {
      title: "Denver BCVI Grading Scale I–V",
      caption: "The Denver scale grades blunt cerebrovascular injury by CT-angiographic appearance and stratifies stroke risk. Grade I (wall irregularity, <25% narrowing) and II (intraluminal thrombus/raised flap, or ≥25% stenosis) are managed with antithrombotic therapy; Grade III (pseudoaneurysm) may need endovascular stenting; Grade IV (occlusion) is usually managed medically; Grade V (transection with free extravasation) requires emergent endovascular or surgical control. Most injuries are clinically silent until they throw an embolic stroke, which is why at-risk patients are screened.",
      ref: "Biffl WL et al., J Trauma 1999;47:845 (Denver BCVI grading scale).",
      render: () => <DenverBcviFig />,
    },

    "trauma-neck-zones": {
      title: "Zones of the Neck I–III",
      caption: "The neck is divided into three zones that guide management of penetrating injury. Zone II (cricoid to angle of mandible) is injured most often and is the most surgically accessible, so stable Zone II wounds can be explored directly. Zone I (thoracic outlet) and Zone III (skull base) structures are difficult to control surgically, so stable injuries there favour CT angiography and endovascular options over exploration. Hard signs — expanding haematoma, uncontrolled bleeding, bruit/thrill, pulse deficit, air through the wound, airway compromise — mandate the operating room regardless of zone.",
      ref: "Roon AJ, Christensen N, J Trauma 1979;19:391 (original zone description).",
      render: () => <NeckZonesFig />,
    },

    "trauma-reboa-zones": {
      title: "REBOA Aortic Occlusion Zones",
      caption: "REBOA balloon position is described by three aortic zones. Zone I (left subclavian artery origin to coeliac axis) occludes for major intra-abdominal haemorrhage; Zone III (lowest renal artery to aortic bifurcation) occludes for pelvic or junctional haemorrhage and is better tolerated because it spares visceral and renal flow. Zone II (coeliac axis to the lowest renal artery) is a no-deploy zone — occlusion here causes visceral and renal ischaemia without a matching haemorrhage-control benefit.",
      ref: "DuBose JJ et al., J Trauma Acute Care Surg 2016;81:409 (AAST AORTA registry); Joint Trauma System REBOA CPG.",
      render: () => <ReboaZonesFig />,
    },

  });
})();
