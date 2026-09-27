// figures-skin.jsx — original SVG teaching diagrams for Skin & Soft Tissue surgery.
//
// Figures rendered inline within the offline surgical-study app.
// All colours use CSS custom-property variables so light/dark mode work automatically.
// No external image dependencies; draws from scratch.

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

  // ──────────────────────────────────────────────────────────────────────────
  // 1. Melanoma Breslow excision-margin ladder
  //    Breslow thickness bands → recommended surgical margin
  // ──────────────────────────────────────────────────────────────────────────
  function MelanomaMarginFig() {
    // Each row: breslow description, surgical margin, row colour weight
    const rows = [
      { breslow: "In situ",    thick: "(0 mm)",   margin: "0.5 cm",  shade: LUMEN },
      { breslow: "≤ 1.0 mm",  thick: "thin",      margin: "1 cm",    shade: WALL  },
      { breslow: "> 1–2 mm",  thick: "intermediate", margin: "1–2 cm", shade: ASOFT },
      { breslow: "> 2 mm",    thick: "thick",     margin: "2 cm",    shade: ASOFT },
    ];

    const W = 600, rowH = 64, hdrH = 40, x0 = 20;
    const col1 = 200, col2 = 380; // x-start of each column content
    const col1W = col2 - x0, col2W = W - col2 + x0;

    return (
      <svg {...svgProps(`0 0 ${W} ${hdrH + rowH * rows.length + 20}`)}>
        {/* Header row */}
        <rect x={x0} y={10} width={col2 - x0 - 4} height={hdrH - 6} rx="4" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text {...T((x0 + col2) / 2 - 2, 10 + 22, 13, { fontWeight: 700, fill: SOFT })}>Breslow thickness</text>
        <rect x={col2} y={10} width={W - col2 - x0} height={hdrH - 6} rx="4" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text {...T(col2 + (W - col2 - x0) / 2, 10 + 22, 13, { fontWeight: 700, fill: SOFT })}>Excision margin</text>

        {rows.map((r, i) => {
          const y = hdrH + 10 + i * rowH;
          const midY = y + rowH / 2;
          // Thickness bar — visual proportional width (in situ=0, ≤1mm=1, 1-2mm=2, >2mm=3)
          const barLens = [0, 1, 2, 3];
          const barMaxW = 68, barH = 12;
          const bLen = barLens[i] * (barMaxW / 3);

          return (
            <g key={r.breslow}>
              {/* Left cell */}
              <rect x={x0} y={y + 2} width={col2 - x0 - 4} height={rowH - 4} rx="3"
                fill={r.shade} stroke={RULE} strokeWidth="1" />
              {/* Lesion label */}
              <text {...T(x0 + 70, midY - 8, 14, { fontWeight: 700 })}>{r.breslow}</text>
              <text {...T(x0 + 70, midY + 10, 11, { fill: SOFT })}>{r.thick}</text>
              {/* Visual depth bar (thickness indicator) */}
              {bLen > 0 && (
                <rect x={x0 + 142} y={midY - barH / 2} width={bLen} height={barH} rx="2"
                  fill={ACCENT} opacity="0.7" />
              )}
              {bLen === 0 && (
                <line x1={x0 + 142} y1={midY} x2={x0 + 148} y2={midY}
                  stroke={ACCENT} strokeWidth="2" strokeDasharray="3 3" />
              )}

              {/* Right cell — margin */}
              <rect x={col2} y={y + 2} width={W - col2 - x0} height={rowH - 4} rx="3"
                fill={r.shade} stroke={RULE} strokeWidth="1" />
              <text {...T(col2 + (W - col2 - x0) / 2, midY + 6, 19, { fontWeight: 800, fill: ACCENT })}>{r.margin}</text>
            </g>
          );
        })}

        {/* Legend label */}
        <text {...T(x0 + 142 + 34 + 8, hdrH + 10 + rowH * 1 + rowH / 2 + 10 + 6, 10, { fill: SOFT, textAnchor: "start" })}>depth bar</text>

        {/* Arrow showing increasing thickness */}
        <line x1={x0 + 6} y1={hdrH + 10 + rowH * 0.5} x2={x0 + 6} y2={hdrH + 10 + rowH * rows.length - rowH * 0.3}
          stroke={MUTE} strokeWidth="1.5" />
        <polygon points={`${x0 + 6},${hdrH + 10 + rowH * rows.length - rowH * 0.3 + 8} ${x0 + 2},${hdrH + 10 + rowH * rows.length - rowH * 0.3} ${x0 + 10},${hdrH + 10 + rowH * rows.length - rowH * 0.3}`}
          fill={MUTE} />
        <text {...T(x0 + 6, hdrH + 10 + rowH * 0.3, 10, { fill: MUTE, textAnchor: "middle" })}>thinner</text>
        <text {...T(x0 + 6, hdrH + 10 + rowH * rows.length, 10, { fill: MUTE, textAnchor: "middle" })}>thicker</text>
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 2. Skin-layer cross-section: Clark levels + Breslow depth ruler
  //    Shows anatomy (epidermis → subcutaneous fat) with Clark level
  //    annotations on the left and a Breslow mm ruler on the right.
  // ──────────────────────────────────────────────────────────────────────────
  function ClarkBreslowFig() {
    // Skin layer bands (top = surface)
    const layers = [
      { label: "Epidermis",        sub: "keratinocytes",  h: 38,  fill: ASOFT  },
      { label: "Papillary dermis", sub: "loose collagen", h: 46,  fill: WALL   },
      { label: "Reticular dermis", sub: "dense collagen", h: 66,  fill: WALL   },
      { label: "Subcutaneous fat", sub: "hypodermis",     h: 58,  fill: LUMEN  },
    ];

    // Layout: Clark column (left) | skin layers (centre) | Breslow+margin column (right)
    const clarkW = 138; // width reserved for Clark annotations on the left
    const x0 = clarkW + 8; // left edge of skin-layer bands
    const layerW = 240;
    let yy = 40;
    // Pre-compute y positions
    const computed = layers.map((L) => {
      const obj = { ...L, y: yy };
      yy += L.h + 3;
      return obj;
    });
    const totalH = yy + 20;

    // Clark levels (I–V): dash lines point LEFT from layer bands to Clark column
    const clarkLevels = [
      { level: "I",   desc: "In situ",         y: computed[0].y + computed[0].h / 2 },
      { level: "II",  desc: "Pap. dermis",      y: computed[1].y + 14 },
      { level: "III", desc: "Fills pap. derm.", y: computed[1].y + computed[1].h - 8 },
      { level: "IV",  desc: "Retic. dermis",    y: computed[2].y + 22 },
      { level: "V",   desc: "Subcutis",         y: computed[3].y + 18 },
    ];

    // Breslow ruler — right side of layer bands
    const rX = x0 + layerW + 28;
    const rTopY = computed[0].y;  // skin surface
    const mmToY = (mm) => rTopY + mm * (computed[2].y + computed[2].h - rTopY) / 4;
    const rulerMarks = [0, 1, 2, 3, 4];

    // Margin labels sit further right of ruler ticks (no overlap with ruler)
    const mLabelX = rX + 46; // x start of margin text
    const totalW = mLabelX + 72; // viewBox width

    return (
      <svg {...svgProps(`0 0 ${totalW} ${totalH}`)}>
        {/* Title */}
        <text {...T(x0 + layerW / 2, 24, 13, { fill: SOFT })}>Clark levels / Breslow depth</text>

        {/* Layer bands */}
        {computed.map((L, i) => (
          <g key={i}>
            <rect x={x0} y={L.y} width={layerW} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" rx="2" />
            <text x={x0 + 10} y={L.y + L.h / 2 - (L.sub ? 5 : 0)} fontSize="12" fill={INK} fontWeight="700">{L.label}</text>
            {L.sub && <text x={x0 + 10} y={L.y + L.h / 2 + 10} fontSize="10" fill={SOFT}>{L.sub}</text>}
          </g>
        ))}

        {/* Clark level annotations — LEFT of layer bands */}
        {clarkLevels.map((cl) => {
          const lineEndX = x0;           // right end of dash = left edge of layer
          const lineStartX = 10;         // left end of dash = near left viewBox edge
          const labelX = lineStartX + 2; // text starts at left
          return (
            <g key={cl.level}>
              <line x1={lineStartX} y1={cl.y} x2={lineEndX} y2={cl.y}
                stroke={ACCENT} strokeWidth="1.5" strokeDasharray="3 3" />
              <text x={labelX} y={cl.y - 3} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="start">
                {"Lvl " + cl.level}
              </text>
              <text x={labelX} y={cl.y + 10} fontSize="9.5" fill={SOFT} textAnchor="start">{cl.desc}</text>
            </g>
          );
        })}

        {/* Breslow ruler — RIGHT of layer bands */}
        <line x1={rX} y1={rTopY} x2={rX} y2={mmToY(4)} stroke={INK} strokeWidth="2" />
        {rulerMarks.map((mm) => {
          const ry = mmToY(mm);
          return (
            <g key={mm}>
              <line x1={rX} y1={ry} x2={rX + 8} y2={ry} stroke={INK} strokeWidth="1.8" />
              <text x={rX + 11} y={ry + 4} fontSize="11" fill={INK} textAnchor="start">{mm} mm</text>
            </g>
          );
        })}
        <text x={rX} y={rTopY - 10} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">Breslow</text>

        {/* Surgical margin reference lines — further right, no overlap with ruler ticks */}
        <line x1={mLabelX - 10} y1={mmToY(1)} x2={mLabelX - 2} y2={mmToY(1)} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 2" />
        <text x={mLabelX} y={mmToY(1) + 4} fontSize="10" fill={ACCENT} textAnchor="start">1 cm</text>
        <line x1={mLabelX - 10} y1={mmToY(2)} x2={mLabelX - 2} y2={mmToY(2)} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 2" />
        <text x={mLabelX} y={mmToY(2) + 4} fontSize="10" fill={ACCENT} textAnchor="start">1–2 cm</text>
        <line x1={mLabelX - 10} y1={mmToY(2.2)} x2={mLabelX - 2} y2={mmToY(2.2)} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 2" />
        <text x={mLabelX} y={mmToY(2.2) + 16} fontSize="10" fill={ACCENT} textAnchor="start">2 cm</text>
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 3. ABCDE melanoma recognition — 5-panel visual series
  // ──────────────────────────────────────────────────────────────────────────
  function AbcdeFig() {
    const panels = [
      { letter: "A", word: "Asymmetry",  draw: "asymm"   },
      { letter: "B", word: "Border",     draw: "border"  },
      { letter: "C", word: "Colour",     draw: "colour"  },
      { letter: "D", word: "Diameter",   draw: "diam"    },
      { letter: "E", word: "Evolution",  draw: "evolve"  },
    ];

    const cellW = 120, cellH = 170, R = 34;
    // cy=55: lesion centre; letter row at cellH-30=140; word row at cellH-10=160
    // lesion bottom ≈ cy+R = 89; scale bar at 99; sub-label at 113 → gap to letter = 27

    const lesion = (kind, cx, cy) => {
      switch (kind) {
        case "asymm":
          // Left half normal rounded, right half irregular bump
          return [
            <path key="l" d={`M ${cx} ${cy - R} Q ${cx - R * 1.2} ${cy - R} ${cx - R} ${cy} Q ${cx - R * 1.2} ${cy + R} ${cx} ${cy + R} Z`}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2" />,
            <path key="r" d={`M ${cx} ${cy - R} Q ${cx + R * 0.6} ${cy - R * 1.5} ${cx + R * 1.3} ${cy - R * 0.2} Q ${cx + R * 0.4} ${cy + R * 0.4} ${cx + R * 0.9} ${cy + R} Q ${cx + R * 0.5} ${cy + R} ${cx} ${cy + R} Z`}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2" />,
            // Axis line
            <line key="ax" x1={cx} y1={cy - R - 6} x2={cx} y2={cy + R + 6} stroke={RULE} strokeWidth="1.5" strokeDasharray="4 3" />,
          ];
        case "border":
          // Notched, irregular outline
          return [
            <path key="p" d={`M ${cx} ${cy - R}
              L ${cx + R * 0.5} ${cy - R * 0.9}
              L ${cx + R * 1.1} ${cy - R * 0.3}
              L ${cx + R * 0.8} ${cy + R * 0.3}
              L ${cx + R * 0.9} ${cy + R * 0.8}
              L ${cx} ${cy + R}
              L ${cx - R * 0.7} ${cy + R * 0.9}
              L ${cx - R * 1.1} ${cy + R * 0.3}
              L ${cx - R} ${cy - R * 0.3}
              L ${cx - R * 0.4} ${cy - R * 1.1}
              Z`}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />,
          ];
        case "colour":
          // Concentric zones of different fills
          return [
            <circle key="c1" cx={cx} cy={cy} r={R} fill={ACCENT} opacity="0.25" stroke={ACCENT} strokeWidth="1.5" />,
            <circle key="c2" cx={cx - 8} cy={cy - 8} r={R * 0.55} fill={ACCENT} opacity="0.55" />,
            <circle key="c3" cx={cx + 6} cy={cy + 4} r={R * 0.28} fill={INK} opacity="0.7" />,
          ];
        case "diam":
          // Lesion with a 6 mm scale bar underneath
          return [
            <circle key="c" cx={cx} cy={cy} r={R * 0.85} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />,
            // 6 mm bar (scaled to R) — sits just below lesion
            <line key="b" x1={cx - R * 0.85} y1={cy + R + 8} x2={cx + R * 0.85} y2={cy + R + 8} stroke={INK} strokeWidth="2" />,
            <line key="bl" x1={cx - R * 0.85} y1={cy + R + 4} x2={cx - R * 0.85} y2={cy + R + 12} stroke={INK} strokeWidth="1.5" />,
            <line key="br" x1={cx + R * 0.85} y1={cy + R + 4} x2={cx + R * 0.85} y2={cy + R + 12} stroke={INK} strokeWidth="1.5" />,
            // "≥ 6 mm" placed clearly below scale bar, well above letter row
            <text key="t" {...T(cx, cy + R + 22, 10, { fill: SOFT })}>≥ 6 mm</text>,
          ];
        case "evolve":
          // Two circles: smaller/lighter (past) → larger/darker (present)
          // Sub-labels placed immediately below each circle, above the letter row
          return [
            <circle key="old" cx={cx - 14} cy={cy + 6} r={16} fill={WALL} stroke={MUTE} strokeWidth="1.5" strokeDasharray="4 3" />,
            <circle key="now" cx={cx + 14} cy={cy - 4} r={R * 0.75} fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />,
            // Labels sit between lesion bottom and the letter row
            <text key="tl" {...T(cx - 14, cy + R + 10, 9, { fill: MUTE })}>before</text>,
            <text key="tn" {...T(cx + 14, cy + R + 10, 9, { fill: ACCENT })}>now</text>,
          ];
        default:
          return null;
      }
    };

    return (
      <svg {...svgProps(`0 0 ${cellW * panels.length} ${cellH}`)}>
        {panels.map((p, i) => {
          const cx = i * cellW + cellW / 2;
          const cy = 55;
          return (
            <g key={p.letter}>
              {i > 0 && <line x1={i * cellW} y1={10} x2={i * cellW} y2={cellH - 10} stroke={RULE} strokeWidth="1" />}
              {lesion(p.draw, cx, cy)}
              {/* Letter at cellH-30=140, word at cellH-10=160 */}
              <text {...T(cx, cellH - 30, 22, { fontWeight: 900, fill: ACCENT })}>{p.letter}</text>
              <text {...T(cx, cellH - 10, 12, { fill: SOFT })}>{p.word}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 4. BCC vs SCC — skin-layer origin cross-section
  //    Shows the anatomical depth of origin and invasion pattern for each.
  // ──────────────────────────────────────────────────────────────────────────
  function BccSccOriginFig() {
    // Layers: epidermis, papillary dermis, reticular dermis, subcutis
    // Layer labels: right-aligned inside band to avoid collision with centred pathology labels
    const x0 = 20, layerW = 480;
    const layers = [
      { label: "Epidermis",        sub: "basal layer", h: 44, fill: ASOFT  },
      { label: "Papillary dermis", sub: null,          h: 44, fill: WALL   },
      { label: "Reticular dermis", sub: null,          h: 60, fill: WALL   },
      { label: "Subcutis",         sub: null,          h: 50, fill: LUMEN  },
    ];

    let yy = 46;
    const comp = layers.map((L) => {
      const obj = { ...L, y: yy };
      yy += L.h + 3;
      return obj;
    });
    const totalH = yy + 40;

    // BCC: centred at x≈120 (well left of centre)
    const bccX = x0 + 90;
    const epidY = comp[0].y + comp[0].h; // bottom of epidermis

    // SCC: centred at x≈310
    const sccX = x0 + 310;

    return (
      <svg {...svgProps(`0 0 ${x0 + layerW + 20} ${totalH}`)}>
        <text {...T(x0 + layerW / 2, 26, 13, { fill: SOFT })}>Skin-tumour origin by layer</text>

        {/* Layer bands — label right-aligned to keep left/centre free for pathology */}
        {comp.map((L, i) => (
          <g key={i}>
            <rect x={x0} y={L.y} width={layerW} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" rx="2" />
            <text x={x0 + layerW - 8} y={L.y + L.h / 2 + (L.sub ? 0 : 5)}
              fontSize="12" fill={INK} fontWeight="600" textAnchor="end">{L.label}</text>
            {L.sub && (
              <text x={x0 + layerW - 8} y={L.y + L.h / 2 + 14}
                fontSize="10" fill={SOFT} textAnchor="end">{L.sub}</text>
            )}
          </g>
        ))}

        {/* BCC — nests from basal layer budding downward */}
        {[0, 1, 2].map((k) => {
          const nx = bccX - 28 + k * 28;
          const ny = epidY + 4 + k * 10;
          return (
            <g key={"bcc-nest-" + k}>
              <line x1={nx + 10} y1={epidY} x2={nx + 10} y2={ny} stroke={ACCENT} strokeWidth="1.5" opacity="0.6" />
              <ellipse cx={nx + 10} cy={ny + 14} rx={12} ry={8} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
            </g>
          );
        })}
        {/* BCC label inside epidermis band — left zone, clear of layer label on right */}
        <text {...T(bccX + 10, comp[0].y + 16, 13, { fontWeight: 800, fill: ACCENT })}>BCC</text>
        <text {...T(bccX + 10, epidY + 56, 10, { fill: SOFT })}>basal nests</text>
        <text {...T(bccX + 10, epidY + 68, 10, { fill: SOFT })}>pushing border</text>

        {/* SCC — dysplastic keratinocytes invading through BM */}
        <path d={`M ${sccX - 38} ${comp[0].y + 6}
          Q ${sccX} ${comp[0].y - 6} ${sccX + 38} ${comp[0].y + 6}
          Q ${sccX + 42} ${comp[0].y + comp[0].h - 4} ${sccX + 28} ${epidY + 8}
          Q ${sccX + 10} ${epidY + 30} ${sccX - 10} ${epidY + 12}
          Q ${sccX - 36} ${comp[0].y + comp[0].h - 2} ${sccX - 38} ${comp[0].y + 6} Z`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
        {/* Infiltrating strands into dermis */}
        <path d={`M ${sccX - 8} ${epidY + 10} Q ${sccX - 14} ${epidY + 36} ${sccX - 20} ${epidY + 50}`}
          fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d={`M ${sccX + 6} ${epidY + 8} Q ${sccX + 12} ${epidY + 34} ${sccX + 18} ${epidY + 52}`}
          fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        {/* SCC label inside epidermis band — centre zone, clear of layer label on right */}
        <text {...T(sccX, comp[0].y + 16, 13, { fontWeight: 800, fill: ACCENT })}>SCC</text>
        <text {...T(sccX, epidY + 56, 10, { fill: SOFT })}>keratinising mass</text>
        <text {...T(sccX, epidY + 68, 10, { fill: SOFT })}>infiltrating strands</text>

        {/* Basement membrane label */}
        <line x1={x0 + 2} y1={epidY} x2={x0 + layerW - 2} y2={epidY} stroke={MUTE} strokeWidth="1.2" strokeDasharray="6 4" />
        <text x={x0 + layerW - 4} y={epidY - 4} fontSize="9.5" fill={MUTE} textAnchor="end">basement membrane</text>
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 5. Hurley staging I–III for hidradenitis suppurativa
  //    Cross-sectional follicular unit showing progression of disease.
  // ──────────────────────────────────────────────────────────────────────────
  function HurleyFig() {
    const stages = [
      {
        stage: "I",
        desc: "Single abscess(es)",
        sub: "No sinus tracts or scarring",
      },
      {
        stage: "II",
        desc: "Recurrent abscesses",
        sub: "Sinus tract(s) + scarring,\nseparated lesions",
      },
      {
        stage: "III",
        desc: "Diffuse involvement",
        sub: "Multiple tracts,\nconfluent scarring",
      },
    ];

    const cellW = 200, cellH = 220, skinY = 60, dermH = 90;

    // Draw a schematic skin cross-section for each stage
    const stageDrawing = (s, ox) => {
      const cx = ox + cellW / 2;
      const skinBot = skinY + 20;  // bottom of epidermis strip
      const dermBot = skinBot + dermH;

      const elements = [];

      // Epidermis strip
      elements.push(
        <rect key="epi" x={ox + 16} y={skinY} width={cellW - 32} height={20}
          fill={ASOFT} stroke={RULE} strokeWidth="1" rx="2" />
      );
      // Dermis / subcutis block
      elements.push(
        <rect key="derm" x={ox + 16} y={skinBot} width={cellW - 32} height={dermH}
          fill={WALL} stroke={RULE} strokeWidth="1" rx="2" />
      );

      if (s === "I") {
        // Single abscess cavity in dermis
        elements.push(
          <ellipse key="abs" cx={cx} cy={skinBot + dermH * 0.38} rx={22} ry={18}
            fill={LUMEN} stroke={ACCENT} strokeWidth="2.5" />
        );
        // Pus dots
        elements.push(<circle key="p1" cx={cx - 7} cy={skinBot + dermH * 0.38} r={3} fill={ACCENT} opacity="0.5" />);
        elements.push(<circle key="p2" cx={cx + 5} cy={skinBot + dermH * 0.38 + 4} r={2.5} fill={ACCENT} opacity="0.5" />);
      } else if (s === "II") {
        // Two abscess cavities + a sinus tract linking them
        const a1y = skinBot + dermH * 0.28, a2y = skinBot + dermH * 0.68;
        const a1x = cx - 24, a2x = cx + 22;
        elements.push(
          <ellipse key="a1" cx={a1x} cy={a1y} rx={18} ry={14}
            fill={LUMEN} stroke={ACCENT} strokeWidth="2" />
        );
        elements.push(
          <ellipse key="a2" cx={a2x} cy={a2y} rx={18} ry={12}
            fill={LUMEN} stroke={ACCENT} strokeWidth="2" />
        );
        // Sinus tract
        elements.push(
          <path key="tract" d={`M ${a1x + 14} ${a1y + 8} Q ${cx} ${skinBot + dermH * 0.5} ${a2x - 12} ${a2y - 8}`}
            fill="none" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="5 3" />
        );
        // Scar hatching
        elements.push(
          <line key="sc1" x1={cx - 10} y1={skinBot + 4} x2={cx + 10} y2={skinBot + 4}
            stroke={MUTE} strokeWidth="1.5" />
        );
      } else if (s === "III") {
        // Multiple confluent abscesses + extensive sinus network + scar
        const abscesses = [
          { x: cx - 30, y: skinBot + dermH * 0.22, rx: 15, ry: 11 },
          { x: cx,      y: skinBot + dermH * 0.32, rx: 20, ry: 14 },
          { x: cx + 30, y: skinBot + dermH * 0.28, rx: 14, ry: 11 },
          { x: cx - 18, y: skinBot + dermH * 0.65, rx: 17, ry: 12 },
          { x: cx + 20, y: skinBot + dermH * 0.72, rx: 15, ry: 11 },
        ];
        abscesses.forEach((a, k) =>
          elements.push(
            <ellipse key={"a" + k} cx={a.x} cy={a.y} rx={a.rx} ry={a.ry}
              fill={LUMEN} stroke={ACCENT} strokeWidth="1.8" />
          )
        );
        // Sinus tracts crisscrossing
        elements.push(
          <path key="t1" d={`M ${cx - 16} ${skinBot + dermH * 0.32} Q ${cx + 6} ${skinBot + dermH * 0.5} ${cx - 4} ${skinBot + dermH * 0.62}`}
            fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="4 3" />
        );
        elements.push(
          <path key="t2" d={`M ${cx + 16} ${skinBot + dermH * 0.30} Q ${cx - 4} ${skinBot + dermH * 0.52} ${cx + 16} ${skinBot + dermH * 0.64}`}
            fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="4 3" />
        );
        // Confluent scar — hatching across top of dermis
        for (let k = 0; k < 5; k++) {
          const hx = ox + 18 + k * (cellW - 36) / 4;
          elements.push(
            <line key={"sc" + k} x1={hx - 6} y1={skinBot + 3} x2={hx + 6} y2={skinBot + 14}
              stroke={MUTE} strokeWidth="1.5" />
          );
        }
        elements.push(
          <text key="sc-lbl" {...T(cx, skinBot + 20, 9, { fill: MUTE })}>confluent scar</text>
        );
      }

      return elements;
    };

    return (
      <svg {...svgProps(`0 0 ${cellW * stages.length} ${cellH}`)}>
        {stages.map((s, i) => {
          const ox = i * cellW;
          return (
            <g key={s.stage}>
              {i > 0 && <line x1={ox} y1={10} x2={ox} y2={cellH - 10} stroke={RULE} strokeWidth="1" />}
              {/* Stage badge */}
              <circle cx={ox + cellW / 2} cy={30} r={18} fill={ACCENT} />
              <text {...T(ox + cellW / 2, 35, 16, { fontWeight: 900, fill: LUMEN })}>{"I".repeat(parseInt(s.stage, 10))}</text>
              {stageDrawing(s.stage, ox)}
              {/* Labels */}
              <text {...T(ox + cellW / 2, cellH - 38, 13, { fontWeight: 700 })}>{s.desc}</text>
              {s.sub.split("\n").map((line, li) => (
                <text key={li} {...T(ox + cellW / 2, cellH - 22 + li * 13, 10.5, { fill: SOFT })}>{line}</text>
              ))}
            </g>
          );
        })}
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 6. FNCLCC grade + margins — soft-tissue sarcoma (liposarcoma, leiomyosarcoma)
  //    Panel A: 3-factor grading table. Panel B: pseudocapsule/margin anatomy.
  // ──────────────────────────────────────────────────────────────────────────
  function FnclccMarginFig() {
    const W = 600;
    const col0X = 20, col0W = 118;
    const colW = 150;
    const cols = [col0X + col0W, col0X + col0W + colW, col0X + col0W + colW * 2];
    const headerY = 30, headerH = 22;
    const rowH = 44;
    // Necrosis is scored 0–2 (not 1–3) — that's why the minimum total is 2.
    const rows = [
      { label: "Differentiation", scores: [1, 2, 3], cells: [["Resembles", "normal tissue"], ["Definite", "histologic type"], ["Synovial/undiff.", "/doubtful type"]] },
      { label: "Mitotic count", sub: "per 10 HPF", scores: [1, 2, 3], cells: ["0–9", "10–19", "≥ 20"] },
      { label: "Necrosis", sub: "scored 0–2", scores: [0, 1, 2], cells: ["None", "< 50%", "≥ 50%"] },
    ];
    const rowsTop = headerY + headerH + 4;
    const tableBottom = rowsTop + rowH * rows.length;

    const barY = tableBottom + 26, barH = 46;
    const chips = [
      { grade: "Grade 1", sum: "sum 2–3", tone: WALL },
      { grade: "Grade 2", sum: "sum 4–5", tone: ASOFT },
      { grade: "Grade 3", sum: "sum 6–8", tone: ASOFT },
    ];
    const chipW = 184, chipGap = 8;

    const panelBY0 = barY + barH + 30;
    const ringCx = 170, ringCy = panelBY0 + 128;
    const legendX = 340;
    const legendRows = [
      { name: "Tumour", sub: "gross mass", swatch: "solid" },
      { name: "Pseudocapsule", sub: "compressed tissue — not a true capsule", swatch: "ring" },
      { name: "Satellite nodules", sub: "microscopic tumour beyond the visible edge", swatch: "dot" },
      { name: "Reactive zone", sub: "oedema/inflammation — may hide satellites", swatch: "dash" },
      { name: "Resection margin", sub: "cuff of normal tissue taken in WLE", swatch: "solidring" },
    ];
    const legendRowH = 40;
    const totalH = ringCy + 85 + 15;

    return (
      <svg {...svgProps(`0 0 ${W} ${totalH}`)}>
        <text {...T(W / 2, 18, 12.5, { fill: SOFT, fontWeight: 700 })}>FNCLCC grade — sum three scores (liposarcoma, leiomyosarcoma)</text>

        <rect x={cols[0]} y={headerY} width={colW * 3 - 4} height={headerH} fill={WALL} stroke={RULE} strokeWidth="1" rx="3" />
        <text {...T(cols[0] + (colW * 3 - 4) / 2, headerY + 15, 10.5, { fontWeight: 700, fill: SOFT })}>less aggressive → more aggressive (circled number = points)</text>

        {rows.map((r, ri) => {
          const y = rowsTop + ri * rowH;
          const cy2 = y + rowH / 2 - 2;
          return (
            <g key={r.label}>
              <rect x={col0X} y={y} width={col0W - 4} height={rowH - 4} fill={LUMEN} stroke={RULE} strokeWidth="1" rx="3" />
              <text {...T(col0X + (col0W - 4) / 2, y + (r.sub ? 18 : 24), 11, { fontWeight: 700 })}>{r.label}</text>
              {r.sub && <text {...T(col0X + (col0W - 4) / 2, y + 32, 9, { fill: SOFT })}>{r.sub}</text>}
              {r.cells.map((c, ci) => {
                const lines = Array.isArray(c) ? c : [c];
                const tx = cols[ci] + 28 + (colW - 4 - 28) / 2;
                return (
                  <g key={ci}>
                    <rect x={cols[ci]} y={y} width={colW - 4} height={rowH - 4} fill={ci === 2 ? ASOFT : LUMEN} stroke={RULE} strokeWidth="1" rx="3" />
                    <circle cx={cols[ci] + 15} cy={cy2} r={9} fill={ACCENT} />
                    <text {...T(cols[ci] + 15, cy2 + 3.5, 10, { fontWeight: 800, fill: LUMEN })}>{r.scores[ci]}</text>
                    {lines.length === 1
                      ? <text {...T(tx, cy2 + 3, 9.5)}>{lines[0]}</text>
                      : <>
                          <text {...T(tx, cy2 - 5, 9.5)}>{lines[0]}</text>
                          <text {...T(tx, cy2 + 8, 9.5)}>{lines[1]}</text>
                        </>}
                  </g>
                );
              })}
            </g>
          );
        })}

        <text {...T(W / 2, tableBottom + 16, 10.5, { fill: SOFT })}>sum the three scores ↓</text>
        {chips.map((c, i) => {
          const x = col0X + i * (chipW + chipGap);
          return (
            <g key={c.grade}>
              <rect x={x} y={barY} width={chipW} height={barH} rx="6" fill={c.tone} stroke={RULE} strokeWidth="1" />
              <text {...T(x + chipW / 2, barY + 19, 12.5, { fontWeight: 800, fill: ACCENT })}>{c.grade}</text>
              <text {...T(x + chipW / 2, barY + 35, 10, { fill: SOFT })}>{c.sum}</text>
            </g>
          );
        })}

        <line x1={20} y1={panelBY0 - 12} x2={W - 20} y2={panelBY0 - 12} stroke={RULE} strokeWidth="1" />
        <text {...T(W / 2, panelBY0 + 14, 12.5, { fill: SOFT, fontWeight: 700 })}>Why margins matter: pseudocapsule &amp; reactive zone</text>

        <ellipse cx={ringCx} cy={ringCy} rx={105} ry={85} fill="none" stroke={ACCENT} strokeWidth="2.5" />
        <ellipse cx={ringCx} cy={ringCy} rx={78} ry={63} fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="4 3" />
        <ellipse cx={ringCx} cy={ringCy} rx={56} ry={45} fill="none" stroke={INK} strokeWidth="2" />
        <ellipse cx={ringCx} cy={ringCy} rx={45} ry={36} fill={ACCENT} opacity="0.6" />
        <circle cx={ringCx + 50} cy={ringCy - 32} r={4.5} fill={ACCENT} opacity="0.7" />
        <circle cx={ringCx - 48} cy={ringCy + 34} r={4} fill={ACCENT} opacity="0.7" />
        <circle cx={ringCx + 18} cy={ringCy + 50} r={4} fill={ACCENT} opacity="0.7" />

        {legendRows.map((l, i) => {
          const y = panelBY0 + 30 + i * legendRowH;
          const sx = legendX;
          return (
            <g key={l.name}>
              {l.swatch === "solid" && <circle cx={sx + 8} cy={y - 4} r={7} fill={ACCENT} opacity="0.6" />}
              {l.swatch === "ring" && <circle cx={sx + 8} cy={y - 4} r={7} fill="none" stroke={INK} strokeWidth="2" />}
              {l.swatch === "dot" && <circle cx={sx + 8} cy={y - 4} r={4} fill={ACCENT} opacity="0.7" />}
              {l.swatch === "dash" && <circle cx={sx + 8} cy={y - 4} r={7} fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="3 2" />}
              {l.swatch === "solidring" && <circle cx={sx + 8} cy={y - 4} r={7} fill="none" stroke={ACCENT} strokeWidth="2.5" />}
              <text x={sx + 22} y={y - 1} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">{l.name}</text>
              <text x={sx + 22} y={y + 12} fontSize="9" fill={SOFT} textAnchor="start">{l.sub}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 7. DFSP — infiltrative "tentacle" extension beyond the visible nodule
  // ──────────────────────────────────────────────────────────────────────────
  function DfspInfiltrativeFig() {
    const W = 620, H = 280;
    const bandX = 20, bandW = 430;
    const epiY = 44, epiH = 12;
    const dermY = epiY + epiH, dermH = 94;
    const fatY = dermY + dermH, fatH = 96;

    return (
      <svg {...svgProps(`0 0 ${W} ${H}`)}>
        <text {...T(W / 2, 16, 12.5, { fill: SOFT, fontWeight: 700 })}>DFSP: visible nodule vs microscopic reach</text>

        <rect x={bandX} y={epiY} width={bandW} height={epiH} fill={ASOFT} stroke={RULE} strokeWidth="1" />
        <rect x={bandX} y={dermY} width={bandW} height={dermH} fill={WALL} stroke={RULE} strokeWidth="1" />
        <rect x={bandX} y={fatY} width={bandW} height={fatH} fill={LUMEN} stroke={RULE} strokeWidth="1" />
        <text x={bandX + bandW - 8} y={epiY + 9} fontSize="9" fill={SOFT} textAnchor="end">epidermis</text>
        <text x={bandX + bandW - 8} y={dermY + 16} fontSize="9" fill={SOFT} textAnchor="end">dermis</text>
        <text x={bandX + bandW - 8} y={fatY + 16} fontSize="9" fill={SOFT} textAnchor="end">subcutaneous fat</text>

        <rect x={140} y={26} width={210} height={228} rx="16" fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="6 4" />

        <ellipse cx={230} cy={52} rx={40} ry={28} fill={ACCENT} opacity="0.55" stroke={ACCENT} strokeWidth="2" />

        <path d="M 205 72 Q 175 122 195 176" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M 218 76 Q 210 150 225 208" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M 250 76 Q 285 142 300 196" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M 260 70 Q 320 132 362 208" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 235 80 Q 240 160 240 232" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />

        <circle cx={470} cy={70} r={7} fill={ACCENT} opacity="0.55" stroke={ACCENT} strokeWidth="2" />
        <text x={484} y={68} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">Visible nodule</text>
        <text x={484} y={80} fontSize="9" fill={SOFT} textAnchor="start">the gross "protuberans"</text>

        <line x1={463} y1={128} x2={477} y2={128} stroke={ACCENT} strokeWidth="2" />
        <text x={484} y={126} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">Fibrous tentacles</text>
        <text x={484} y={138} fontSize="9" fill={SOFT} textAnchor="start">reach far past the edge</text>

        <rect x={463} y={180} width={14} height={14} rx="3" fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="3 2" />
        <text x={484} y={188} fontSize="11" fill={INK} fontWeight="700" textAnchor="start">Standard WLE margin</text>
        <text x={484} y={200} fontSize="9" fill={SOFT} textAnchor="start">a tentacle tip can still</text>
        <text x={484} y={213} fontSize="9" fill={SOFT} textAnchor="start">extend past it → recurrence</text>
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 8. Kaposi's sarcoma — four HHV-8-driven clinical subtypes
  // ──────────────────────────────────────────────────────────────────────────
  function KaposiSubtypesFig() {
    const W = 640;
    const col0X = 20, col0W = 110;
    const colW = 126;
    const cols = [col0X + col0W, col0X + col0W + colW, col0X + col0W + colW * 2, col0X + col0W + colW * 3];
    const names = ["Classic", "Endemic\n(African)", "Iatrogenic", "Epidemic\n(AIDS)"];

    const bannerY = 30, bannerH = 22;
    const headerY = bannerY + bannerH + 4, headerH = 34;
    const rowsTop = headerY + headerH;
    const rowH = 62;
    const rows = [
      { label: "Population", cells: [
        ["Elderly men,", "Mediterranean/E.Europe"],
        ["Sub-Saharan Africa,", "incl. children"],
        ["Transplant /", "immunosuppressed"],
        ["HIV-positive,", "low CD4 count"],
      ] },
      { label: "Distribution", cells: [
        ["Distal lower limb", "(ankles, feet), skin"],
        ["Skin + nodes;", "nodal form in children"],
        ["Skin ±", "visceral"],
        ["Widespread skin,", "mucosa, GI, lung"],
      ] },
      { label: "Course", cells: [
        ["Indolent —", "local Rx often enough"],
        ["Variable — nodal", "form more aggressive"],
        ["Regresses if", "immunosuppression ↓"],
        ["Aggressive —", "responds to ART"],
      ] },
    ];
    const tableBottom = rowsTop + rowH * rows.length;
    const H = tableBottom + 20;

    return (
      <svg {...svgProps(`0 0 ${W} ${H}`)}>
        <text {...T(W / 2, 18, 12.5, { fill: SOFT, fontWeight: 700 })}>Kaposi's sarcoma — four clinical subtypes</text>

        <rect x={20} y={bannerY} width={W - 40} height={bannerH} rx="4" fill={ASOFT} stroke={RULE} strokeWidth="1" />
        <text {...T(W / 2, bannerY + 15, 10.5, { fontWeight: 700 })}>All four are driven by HHV-8 (KSHV) infection</text>

        <rect x={col0X} y={headerY} width={col0W - 4} height={headerH} fill={WALL} stroke={RULE} strokeWidth="1" rx="3" />
        {cols.map((cx, i) => {
          const lines = names[i].split("\n");
          return (
            <g key={i}>
              <rect x={cx} y={headerY} width={colW - 4} height={headerH} fill={WALL} stroke={RULE} strokeWidth="1" rx="3" />
              {lines.length === 1
                ? <text {...T(cx + (colW - 4) / 2, headerY + 21, 11.5, { fontWeight: 800, fill: ACCENT })}>{lines[0]}</text>
                : <>
                    <text {...T(cx + (colW - 4) / 2, headerY + 13, 11.5, { fontWeight: 800, fill: ACCENT })}>{lines[0]}</text>
                    <text {...T(cx + (colW - 4) / 2, headerY + 26, 11.5, { fontWeight: 800, fill: ACCENT })}>{lines[1]}</text>
                  </>}
            </g>
          );
        })}

        {rows.map((r, ri) => {
          const y = rowsTop + ri * rowH;
          const cy2 = y + rowH / 2 - 2;
          return (
            <g key={r.label}>
              <rect x={col0X} y={y} width={col0W - 4} height={rowH - 4} fill={LUMEN} stroke={RULE} strokeWidth="1" rx="3" />
              <text {...T(col0X + (col0W - 4) / 2, cy2 + 3, 10.5, { fontWeight: 700 })}>{r.label}</text>
              {r.cells.map((c, ci) => (
                <g key={ci}>
                  <rect x={cols[ci]} y={y} width={colW - 4} height={rowH - 4} fill={LUMEN} stroke={RULE} strokeWidth="1" rx="3" />
                  <text {...T(cols[ci] + (colW - 4) / 2, cy2 - 5, 9)}>{c[0]}</text>
                  <text {...T(cols[ci] + (colW - 4) / 2, cy2 + 8, 9)}>{c[1]}</text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 9. Merkel cell carcinoma — AEIOU clinical features + management pathway
  // ──────────────────────────────────────────────────────────────────────────
  function MerkelCellAeiouFig() {
    const cellW = 124, topH = 148;
    const letters = [
      { L: "A", word: "Asymptomatic", sub: "painless" },
      { L: "E", word: "Expanding", sub: "rapid, weeks" },
      { L: "I", word: "Immuno-", sub: "suppressed" },
      { L: "O", word: "Older", sub: "> 50 years" },
      { L: "U", word: "UV-exposed", sub: "fair skin site" },
    ];

    const boxes = [
      ["Biopsy", "(CK20+, neurofilament+)"],
      ["Wide local excision", "(1–2 cm margin)"],
      ["Sentinel node", "biopsy"],
      ["Adjuvant RT", "(very radiosensitive)"],
    ];
    const boxW = 140, boxH = 56, boxGap = 14, arrowW = 18;
    const totalBoxesW = boxes.length * boxW + (boxes.length - 1) * (boxGap + arrowW);
    const W = Math.max(cellW * letters.length, totalBoxesW + 20);
    const pathStartX = (W - totalBoxesW) / 2;
    const pathTop = topH + 34;
    const H = pathTop + boxH + 20;
    const letterOffset = (W - cellW * letters.length) / 2;

    return (
      <svg {...svgProps(`0 0 ${W} ${H}`)}>
        {letters.map((p, i) => {
          const cx = letterOffset + i * cellW + cellW / 2;
          const cy = 46;
          return (
            <g key={p.L}>
              {i > 0 && <line x1={letterOffset + i * cellW} y1={10} x2={letterOffset + i * cellW} y2={topH - 14} stroke={RULE} strokeWidth="1" />}
              <circle cx={cx} cy={cy} r={26} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
              <text {...T(cx, cy + 9, 24, { fontWeight: 900, fill: ACCENT })}>{p.L}</text>
              <text {...T(cx, topH - 44, 12, { fontWeight: 700 })}>{p.word}</text>
              <text {...T(cx, topH - 28, 10, { fill: SOFT })}>{p.sub}</text>
            </g>
          );
        })}

        <line x1={20} y1={topH - 4} x2={W - 20} y2={topH - 4} stroke={RULE} strokeWidth="1" />
        <text {...T(W / 2, pathTop - 12, 11, { fill: SOFT, fontWeight: 700 })}>≥ 3 of 5 AEIOU features in ~90% at diagnosis → work-up pathway</text>

        {boxes.map((b, i) => {
          const x = pathStartX + i * (boxW + boxGap + arrowW);
          return (
            <g key={i}>
              <rect x={x} y={pathTop} width={boxW} height={boxH} rx="6" fill={i % 2 === 0 ? WALL : ASOFT} stroke={RULE} strokeWidth="1" />
              <text {...T(x + boxW / 2, pathTop + 24, 10.5, { fontWeight: 700 })}>{b[0]}</text>
              <text {...T(x + boxW / 2, pathTop + 40, 9.5, { fill: SOFT })}>{b[1]}</text>
              {i < boxes.length - 1 && (
                <>
                  <line x1={x + boxW + 4} y1={pathTop + boxH / 2} x2={x + boxW + boxGap + arrowW - 6} y2={pathTop + boxH / 2} stroke={MUTE} strokeWidth="1.5" />
                  <polygon points={`${x + boxW + boxGap + arrowW - 6},${pathTop + boxH / 2 - 4} ${x + boxW + boxGap + arrowW},${pathTop + boxH / 2} ${x + boxW + boxGap + arrowW - 6},${pathTop + boxH / 2 + 4}`} fill={MUTE} />
                </>
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 10. Desmoid tumour — anatomic sites + modern (surveillance-first) pathway
  // ──────────────────────────────────────────────────────────────────────────
  function DesmoidPathwayFig() {
    const W = 600;
    const siteY = 34, siteH = 70, siteW = 180, siteGap = 10;
    const sites = [
      { name: "Abdominal wall", sub1: "rectus sheath", sub2: "often post-partum" },
      { name: "Intra-abdominal", sub1: "mesenteric", sub2: "FAP / Gardner-associated" },
      { name: "Extra-abdominal", sub1: "limb girdle, chest wall,", sub2: "head/neck" },
    ];
    const sitesTotalW = siteW * 3 + siteGap * 2;
    const sitesX0 = (W - sitesTotalW) / 2;

    const flowTop = siteY + siteH + 40;
    const boxW = 260, boxH = 44;
    const box1Y = flowTop;
    const box2Y = box1Y + boxH + 30;
    const forkY = box2Y + boxH + 40;
    const box3W = 240, box3H = 58;
    const forkGap = 30;
    const box3LX = W / 2 - forkGap / 2 - box3W;
    const box3RX = W / 2 + forkGap / 2;
    const H = forkY + box3H + 20;

    return (
      <svg {...svgProps(`0 0 ${W} ${H}`)}>
        <text {...T(W / 2, 18, 12.5, { fill: SOFT, fontWeight: 700 })}>Desmoid — where it arises</text>
        {sites.map((s, i) => {
          const x = sitesX0 + i * (siteW + siteGap);
          return (
            <g key={s.name}>
              <rect x={x} y={siteY} width={siteW} height={siteH} rx="6" fill={WALL} stroke={RULE} strokeWidth="1" />
              <text {...T(x + siteW / 2, siteY + 24, 11.5, { fontWeight: 700 })}>{s.name}</text>
              <text {...T(x + siteW / 2, siteY + 44, 9.5, { fill: SOFT })}>{s.sub1}</text>
              <text {...T(x + siteW / 2, siteY + 58, 9.5, { fill: SOFT })}>{s.sub2}</text>
            </g>
          );
        })}

        <line x1={20} y1={siteY + siteH + 16} x2={W - 20} y2={siteY + siteH + 16} stroke={RULE} strokeWidth="1" />
        <text {...T(W / 2, flowTop - 16, 11, { fill: SOFT, fontWeight: 700 })}>Modern management — surveillance first</text>

        <rect x={W / 2 - boxW / 2} y={box1Y} width={boxW} height={boxH} rx="6" fill={LUMEN} stroke={RULE} strokeWidth="1" />
        <text {...T(W / 2, box1Y + 27, 10.5, { fontWeight: 700 })}>Diagnosis confirmed</text>

        <line x1={W / 2} y1={box1Y + boxH} x2={W / 2} y2={box2Y - 6} stroke={MUTE} strokeWidth="1.5" />
        <polygon points={`${W / 2 - 5},${box2Y - 6} ${W / 2 + 5},${box2Y - 6} ${W / 2},${box2Y}`} fill={MUTE} />

        <rect x={W / 2 - boxW / 2} y={box2Y} width={boxW} height={boxH} rx="6" fill={ASOFT} stroke={RULE} strokeWidth="1" />
        <text {...T(W / 2, box2Y + 18, 11, { fontWeight: 800, fill: ACCENT })}>Active surveillance (1st line)</text>
        <text {...T(W / 2, box2Y + 33, 9.5, { fill: SOFT })}>serial MRI, 3–6-monthly at first</text>

        <line x1={W / 2} y1={box2Y + boxH} x2={W / 2} y2={box2Y + boxH + 14} stroke={MUTE} strokeWidth="1.5" />
        <line x1={box3LX + box3W / 2} y1={box2Y + boxH + 14} x2={box3RX + box3W / 2} y2={box2Y + boxH + 14} stroke={MUTE} strokeWidth="1.5" />
        <line x1={box3LX + box3W / 2} y1={box2Y + boxH + 14} x2={box3LX + box3W / 2} y2={forkY - 6} stroke={MUTE} strokeWidth="1.5" />
        <line x1={box3RX + box3W / 2} y1={box2Y + boxH + 14} x2={box3RX + box3W / 2} y2={forkY - 6} stroke={MUTE} strokeWidth="1.5" />
        <polygon points={`${box3LX + box3W / 2 - 5},${forkY - 6} ${box3LX + box3W / 2 + 5},${forkY - 6} ${box3LX + box3W / 2},${forkY}`} fill={MUTE} />
        <polygon points={`${box3RX + box3W / 2 - 5},${forkY - 6} ${box3RX + box3W / 2 + 5},${forkY - 6} ${box3RX + box3W / 2},${forkY}`} fill={MUTE} />

        <rect x={box3LX} y={forkY} width={box3W} height={box3H} rx="6" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text {...T(box3LX + box3W / 2, forkY + 20, 10.5, { fontWeight: 700 })}>Stable / regressing</text>
        <text {...T(box3LX + box3W / 2, forkY + 36, 9.5, { fill: SOFT })}>continue surveillance</text>
        <text {...T(box3LX + box3W / 2, forkY + 49, 9.5, { fill: SOFT })}>(many regress spontaneously)</text>

        <rect x={box3RX} y={forkY} width={box3W} height={box3H} rx="6" fill={ASOFT} stroke={RULE} strokeWidth="1" />
        <text {...T(box3RX + box3W / 2, forkY + 20, 10.5, { fontWeight: 700 })}>Progressive / symptomatic</text>
        <text {...T(box3RX + box3W / 2, forkY + 36, 9.5, { fill: SOFT })}>systemic therapy or surgery</text>
        <text {...T(box3RX + box3W / 2, forkY + 49, 9.5, { fill: SOFT })}>(RT if unresectable/recurrent)</text>
      </svg>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // Register all figures
  // ──────────────────────────────────────────────────────────────────────────
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {
    "skin-melanoma-breslow-margins": {
      title: "Melanoma: Breslow thickness → excision margin",
      caption: "Recommended surgical excision margins are determined by Breslow thickness (measured in mm from the granular layer of the epidermis to the deepest tumour cell). Melanoma in situ requires a 0.5 cm margin; tumours ≤1 mm → 1 cm; >1–2 mm → 1–2 cm; >2 mm → 2 cm. These are the evidence-based minimum margins; wider margins do not improve survival.",
      ref: "AJCC Cancer Staging Manual, 8th ed. · Scolyer RA et al., Ann Surg Oncol 2013 · Melanoma Institute Australia / BAD guidelines 2022",
      render: () => <MelanomaMarginFig />,
    },
    "skin-clark-breslow-anatomy": {
      title: "Clark levels & Breslow depth — skin anatomy",
      caption: "Clark levels describe invasion anatomically (I = epidermis only; II = into papillary dermis; III = fills papillary dermis; IV = into reticular dermis; V = into subcutis). Breslow depth is a direct mm measurement from granular layer to deepest tumour cell and is the dominant prognostic variable used in modern staging (Clark level is now a minor criterion in AJCC 8th edition, used only for T1a tumour classification).",
      ref: "Clark WH et al., Cancer Res 1969;29:705 · Breslow A, Ann Surg 1970;182:572 · AJCC 8th ed.",
      render: () => <ClarkBreslowFig />,
    },
    "skin-abcde-melanoma": {
      title: "ABCDE early melanoma recognition",
      caption: "The ABCDE mnemonic encodes the five clinical warning signs of early melanoma: Asymmetry (one half unlike the other), Border irregularity (notched, scalloped, or poorly defined), Colour variation (multiple shades of tan, brown, black, red), Diameter ≥6 mm (about the size of a pencil eraser), and Evolution (any change in size, shape, colour, or new symptom). The 'E' criterion — evolution — is the most important: any changing lesion warrants excision regardless of other features.",
      ref: "Rigel DS et al., J Am Acad Dermatol 2005;52:717 · Friedman RJ, CA Cancer J Clin 1985;35:130",
      render: () => <AbcdeFig />,
    },
    "skin-bcc-scc-origin": {
      title: "BCC vs SCC — skin-layer origin",
      caption: "Basal cell carcinoma (BCC) arises from pluripotent basal keratinocytes at the deepest layer of the epidermis, forming compact nests that push (rather than infiltrate) into the dermis — hence its typically slow, locally invasive behaviour and negligible metastatic risk. Squamous cell carcinoma (SCC) arises from suprabasal keratinocytes and invades through the basement membrane with irregular infiltrating strands, conferring a higher (though still low) risk of nodal and distant metastasis.",
      ref: "Karia PS et al., J Clin Oncol 2013 · WHO Classification of Skin Tumours, 4th ed. 2018",
      render: () => <BccSccOriginFig />,
    },
    "skin-hurley-staging": {
      title: "Hurley staging — hidradenitis suppurativa",
      caption: "Hurley staging guides treatment intensity. Stage I: single or multiple isolated abscesses without sinus tracts or scarring — treated medically (antiseptics, antibiotics, intralesional corticosteroids). Stage II: recurrent abscesses with one or more sinus tracts and scarring, lesions are separated — requires long-term systemic therapy (biologics, dapsone) ± limited surgical drainage. Stage III: diffuse or near-diffuse involvement with multiple interconnected tracts and extensive confluent scarring — wide surgical excision with healing by secondary intention or flap/graft reconstruction.",
      ref: "Hurley HJ, Dermatol Surg 1989 (chapter) · Zouboulis CC et al., J Eur Acad Dermatol 2015 (S1 guidelines)",
      render: () => <HurleyFig />,
    },
    "skin-sts-grade-margins": {
      title: "FNCLCC grade & the pseudocapsule — why margins matter",
      caption: "FNCLCC grade sums three independently scored factors — differentiation (1–3), mitotic count per 10 high-power fields (1–3) and tumour necrosis (0 = none, 1 = < 50%, 2 = ≥ 50%) — into grade 1 (sum 2–3), grade 2 (4–5) or grade 3 (6–8); grade is the strongest predictor of metastasis in soft-tissue sarcoma. Grossly the tumour looks encapsulated, but this pseudocapsule is compressed tumour and reactive tissue, not a true barrier: microscopic satellite nodules can sit in the surrounding reactive zone. 'Shelling out' along the pseudocapsule leaves disease behind — wide local excision must take a cuff of normal tissue beyond the reactive zone.",
      ref: "Trojani M et al., Int J Cancer 1984;33:37 (FNCLCC grading) · Coindre JM et al., Cancer 2001;91:1914 · Enneking WF et al., Clin Orthop Relat Res 1980;153:106 · NCCN Guidelines: Soft Tissue Sarcoma",
      render: () => <FnclccMarginFig />,
    },
    "skin-dfsp-infiltrative-margins": {
      title: "DFSP — the visible nodule undersells the tumour",
      caption: "Dermatofibrosarcoma protuberans grows as a slow, painless dermal nodule but sends thin, finger-like fibrous projections through the subcutaneous fat well beyond the palpable edge. This is why fixed-margin wide local excision (even 2–3 cm) can leave residual disease and recur, whereas Mohs micrographic surgery or margin-mapped (CCPDMA) excision follows the projections directly and achieves much lower recurrence. The COL1A1–PDGFB fusion, t(17;22), also makes unresectable or metastatic DFSP responsive to imatinib.",
      ref: "Gloster HM Jr, J Am Acad Dermatol 1996;35:355 · Farma JM et al., Ann Surg Oncol 2010;17:2112 · NCCN Guidelines: Dermatofibrosarcoma Protuberans",
      render: () => <DfspInfiltrativeFig />,
    },
    "skin-kaposi-subtypes": {
      title: "Kaposi's sarcoma — four clinical subtypes, one virus",
      caption: "Every clinical form of Kaposi's sarcoma is driven by HHV-8 (Kaposi's sarcoma-associated herpesvirus), but epidemiology and behaviour differ sharply. Classic: elderly men of Mediterranean or Eastern European descent, indolent lesions on the distal lower limb. Endemic: sub-Saharan Africa, including an aggressive lymphadenopathic form in children. Iatrogenic: transplant recipients and other immunosuppressed patients — often regresses when immunosuppression is reduced. Epidemic (AIDS-associated): widespread skin, mucosal and visceral disease that improves with antiretroviral therapy. Identifying the subtype guides management more than the appearance of the lesion.",
      ref: "Chang Y et al., Science 1994;266:1865 (identification of HHV-8) · Antman K, Chang Y, N Engl J Med 2000;342:1027",
      render: () => <KaposiSubtypesFig />,
    },
    "skin-merkel-cell-aeiou": {
      title: "Merkel cell carcinoma — AEIOU features & work-up",
      caption: "AEIOU — Asymptomatic, Expanding rapidly, Immunosuppressed, Older than 50, UV-exposed site on fair skin — comes from a 195-patient diagnostic cohort in which most tumours showed three or more of these features. Merkel cell carcinoma is an aggressive cutaneous neuroendocrine tumour (CK20 and neurofilament positive). Surgical work-up parallels melanoma — wide local excision with 1–2 cm margins plus sentinel lymph node biopsy — but because the tumour is markedly radiosensitive, adjuvant radiotherapy is used far more often than in melanoma.",
      ref: "Heath M et al., J Am Acad Dermatol 2008;58:375 (AEIOU features) · NCCN Guidelines: Merkel Cell Carcinoma",
      render: () => <MerkelCellAeiouFig />,
    },
    "skin-desmoid-pathway": {
      title: "Desmoid tumour — sites & the surveillance-first pathway",
      caption: "Desmoid-type fibromatosis arises at three characteristic sites: the abdominal wall (often post-partum), intra-abdominal/mesenteric (associated with FAP and Gardner syndrome), and extra-abdominal soft tissue (limb girdle, chest wall, head and neck). It is locally aggressive but does not metastasise. Management has moved away from upfront surgery: active surveillance with serial MRI is first-line for asymptomatic or stable disease because a substantial proportion stabilise or regress spontaneously. Systemic therapy or surgery is reserved for progressive or symptomatic disease, with radiotherapy an option for unresectable or recurrent tumours.",
      ref: "Desmoid Tumor Working Group, Eur J Cancer 2020;127:96 (global consensus guideline)",
      render: () => <DesmoidPathwayFig />,
    },
  });
})();
