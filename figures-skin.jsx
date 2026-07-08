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
  });
})();
