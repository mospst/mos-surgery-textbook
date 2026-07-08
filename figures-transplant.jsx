// figures-transplant.jsx — original SVG teaching diagrams for the Transplant department.
// Renders inline (offline). Colours resolve via CSS custom properties for light/dark mode.

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
  // Renal transplant — graft in right iliac fossa, anastomoses
  // ─────────────────────────────────────────────────────────────────────────
  function RenalTxAnatomyFig() {
    // Pelvis outline (simplified bony landmarks)
    const iliacCrest = "M 60 80 Q 180 20 300 60 Q 350 70 380 120 L 380 260 Q 340 300 300 310 Q 240 320 200 330 Q 160 340 120 330 Q 80 310 60 260 Z";

    return (
      <svg {...svgProps("0 0 640 440")}>
        {/* title row */}
        <text {...T(320, 22, 14, { fontWeight: 700 })}>Renal Transplant — Right Iliac Fossa</text>

        {/* ── pelvic outline ── */}
        <path d={iliacCrest} fill={WALL} stroke={RULE} strokeWidth="1.5" />

        {/* bladder */}
        <ellipse cx={200} cy={295} rx={58} ry={42} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />
        <text {...T(200, 299, 11, { fill: ACCENT, fontWeight: 600 })}>Bladder</text>

        {/* ── Iliac vessels (right side) ── */}
        {/* External iliac artery */}
        <path d="M 320 100 L 330 200 L 325 270" fill="none" stroke={ACCENT} strokeWidth="7" strokeLinecap="round" />
        {/* External iliac vein — lateral to artery */}
        <path d="M 355 105 L 362 200 L 356 270" fill="none" stroke={MUTE} strokeWidth="9" strokeLinecap="round" />

        <text {...T(370, 136, 10.5, { fill: ACCENT, fontWeight: 600, textAnchor: "start" })}>Ext. iliac A.</text>
        <text {...T(370, 160, 10.5, { fill: MUTE, fontWeight: 600, textAnchor: "start" })}>Ext. iliac V.</text>

        {/* ── Graft kidney (retroperitoneal, right iliac fossa) ── */}
        {/* kidney body */}
        <ellipse cx={200} cy={185} rx={52} ry={68} fill={LUMEN} stroke={INK} strokeWidth="2" />
        {/* hilum notch */}
        <path d="M 248 175 Q 262 185 248 198" fill="none" stroke={INK} strokeWidth="2" />
        <text {...T(197, 180, 11, { fontWeight: 600 })}>Graft</text>
        <text {...T(197, 196, 10, { fill: SOFT })}>kidney</text>

        {/* ── Renal artery anastomosis (end-to-side on ext iliac A) ── */}
        {/* renal artery from hilum to iliac */}
        <path d="M 250 175 Q 282 168 322 178" fill="none" stroke={ACCENT} strokeWidth="3.5" strokeLinecap="round" />
        {/* anastomosis dot */}
        <circle cx={323} cy={178} r={5} fill={ACCENT} />
        <text {...T(288, 162, 10, { fill: ACCENT })}>Renal A. (end-to-side)</text>

        {/* ── Renal vein anastomosis (end-to-side on ext iliac V) ── */}
        <path d="M 250 195 Q 290 205 353 204" fill="none" stroke={MUTE} strokeWidth="5" strokeLinecap="round" />
        <circle cx={354} cy={204} r={6} fill={MUTE} />
        <text {...T(300, 220, 10, { fill: MUTE })}>Renal V. (end-to-side)</text>

        {/* ── Ureteroneocystostomy ── */}
        {/* ureter from lower pole to bladder (Lich-Gregoir) */}
        <path d="M 175 248 Q 180 272 185 282" fill="none" stroke={INK} strokeWidth="2.5" strokeDasharray="5 3" strokeLinecap="round" />
        <circle cx={185} cy={283} r={4} fill={INK} />
        <text {...T(147, 268, 10, { fill: SOFT, textAnchor: "start" })}>Ureter</text>
        <text {...T(136, 282, 10, { fill: SOFT, textAnchor: "start" })}>(ureteroneocystostomy)</text>

        {/* ── Native kidneys (small, retroperitoneal, high) ── */}
        <ellipse cx={100} cy={110} rx={22} ry={30} fill={WALL} stroke={RULE} strokeWidth="1.2" />
        <text {...T(100, 114, 9, { fill: SOFT })}>Native L</text>
        <ellipse cx={310} cy={80} rx={20} ry={28} fill={WALL} stroke={RULE} strokeWidth="1.2" />
        <text {...T(310, 84, 9, { fill: SOFT })}>Native R</text>

        {/* Legend */}
        <rect x={430} y={200} width={190} height={118} rx="5" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text {...T(525, 218, 11, { fontWeight: 700 })}>Legend</text>
        <line x1={445} y1={232} x2={475} y2={232} stroke={ACCENT} strokeWidth="4" />
        <text x={482} y={236} fontSize="10.5" fill={INK}>Iliac / Renal A.</text>
        <line x1={445} y1={252} x2={475} y2={252} stroke={MUTE} strokeWidth="6" />
        <text x={482} y={256} fontSize="10.5" fill={INK}>Iliac / Renal V.</text>
        <line x1={445} y1={272} x2={475} y2={272} stroke={INK} strokeWidth="2.5" strokeDasharray="5 3" />
        <text x={482} y={276} fontSize="10.5" fill={INK}>Ureter</text>
        <circle cx={460} cy={293} r={5} fill={ACCENT} />
        <text x={482} y={297} fontSize="10.5" fill={INK}>Anastomosis site</text>

        <text {...T(320, 430, 11, { fill: SOFT })}>Graft placed retroperitoneally; native kidneys left in situ</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Liver transplant — Classical (caval replacement) vs Piggyback technique
  // ─────────────────────────────────────────────────────────────────────────
  function LiverTxTechniqueFig() {
    // Helper: draw a schematic liver block with IVC and PV
    // ox, oy = top-left origin of the panel (panel is 270 wide, 288 tall)
    const Panel = ({ ox, oy, label, technique }) => {
      const lx = ox + 22, ly = oy + 60;
      const lw = 200, lh = 120;
      // IVC vertical bar sits toward the right (posterior), clear of the liver label
      const ivcX = ox + 158;
      // portal-triad label baseline and the three vessel x-positions
      const triadY = ly + lh + 52;
      const pvX = lx + 30;      // portal vein  (left of IVC bar)
      const haX = lx + 78;      // hepatic artery (left of IVC bar)
      const bdX = lx + 168;     // bile duct    (right of IVC bar)
      return (
        <g>
          {/* panel background */}
          <rect x={ox} y={oy} width={270} height={288} rx="6" fill={LUMEN} stroke={RULE} strokeWidth="1" />
          <text {...T(ox + 135, oy + 22, 13.5, { fontWeight: 700 })}>{label}</text>

          {/* Liver graft block */}
          <rect x={lx} y={ly} width={lw} height={lh} rx="10" fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
          {/* label placed left of the IVC bar so the bar never overlaps it */}
          <text {...T(lx + 58, ly + lh / 2 - 6, 12, { fill: ACCENT, fontWeight: 600 })}>Liver</text>
          <text {...T(lx + 58, ly + lh / 2 + 12, 10.5, { fill: ACCENT })}>Graft</text>

          {technique === "classical" ? (
            <g>
              {/* Supra-hepatic IVC — graft IVC replaces host IVC end-to-end */}
              <rect x={ivcX - 12} y={oy + 28} width={24} height={32} fill={MUTE} stroke={INK} strokeWidth="1.5" />
              <text {...T(ivcX + 18, oy + 46, 9, { fill: MUTE, textAnchor: "start" })}>Supra-IVC</text>
              {/* IVC through graft */}
              <rect x={ivcX - 12} y={ly} width={24} height={lh} fill={MUTE} stroke={INK} strokeWidth="1.5" />
              {/* Infra-hepatic IVC */}
              <rect x={ivcX - 12} y={ly + lh} width={24} height={36} fill={MUTE} stroke={INK} strokeWidth="1.5" />
              <text {...T(ivcX + 18, ly + lh + 22, 9, { fill: MUTE, textAnchor: "start" })}>Infra-IVC</text>
              {/* anastomosis markers */}
              <circle cx={ivcX} cy={ly + 2} r={5} fill={ACCENT} />
              <circle cx={ivcX} cy={ly + lh - 2} r={5} fill={ACCENT} />
              <text {...T(ivcX + 18, ly + lh / 2, 9, { fill: ACCENT, textAnchor: "start" })}>ETE × 2</text>
              {/* Portal vein */}
              <line x1={pvX} y1={ly + lh} x2={pvX} y2={ly + lh + 38} stroke={INK} strokeWidth="5" />
              <circle cx={pvX} cy={ly + lh + 2} r={5} fill={ACCENT} />
              <text {...T(pvX, triadY, 9, { fill: INK })}>Portal V.</text>
              {/* Hepatic artery */}
              <line x1={haX} y1={ly + lh} x2={haX} y2={ly + lh + 38} stroke={ACCENT} strokeWidth="3.5" />
              <circle cx={haX} cy={ly + lh + 2} r={5} fill={ACCENT} />
              <text {...T(haX, triadY, 9, { fill: ACCENT })}>Hepatic A.</text>
              {/* Bile duct — right of the IVC bar */}
              <line x1={bdX} y1={ly + lh} x2={bdX} y2={ly + lh + 38} stroke={SOFT} strokeWidth="2.5" strokeDasharray="4 2" />
              <circle cx={bdX} cy={ly + lh + 2} r={4} fill={SOFT} />
              <text {...T(bdX, triadY, 9, { fill: SOFT })}>Bile duct</text>
              <text {...T(ox + 135, oy + 272, 10, { fill: SOFT })}>IVC clamped; venovenous bypass often used</text>
            </g>
          ) : (
            <g>
              {/* Piggyback: recipient IVC preserved; hepatic veins joined as hood */}
              {/* Host IVC — continuous vertical bar */}
              <rect x={ivcX - 12} y={oy + 28} width={24} height={188} fill={MUTE} stroke={INK} strokeWidth="1.5" />
              <text {...T(ivcX + 18, oy + 44, 9, { fill: MUTE, textAnchor: "start" })}>Host IVC</text>
              <text {...T(ivcX + 18, oy + 56, 9, { fill: MUTE, textAnchor: "start" })}>(preserved)</text>
              {/* Outflow: graft supra-hepatic IVC → side of host IVC (or hepatic vein hood) */}
              <line x1={lx + 92} y1={ly + 18} x2={ivcX - 12} y2={ly + 18} stroke={MUTE} strokeWidth="7" />
              <circle cx={ivcX - 12} cy={ly + 18} r={6} fill={ACCENT} />
              <text {...T(lx + 58, ly + 10, 9, { fill: ACCENT })}>Outflow (S–S)</text>
              {/* infra-hepatic IVC oversewn on graft */}
              <line x1={ivcX} y1={ly + lh + 4} x2={ivcX} y2={ly + lh + 22} stroke={MUTE} strokeWidth="4" strokeLinecap="round" />
              <line x1={ivcX - 12} y1={ly + lh + 22} x2={ivcX + 12} y2={ly + lh + 22} stroke={MUTE} strokeWidth="3" />
              <text {...T(ivcX + 18, ly + lh + 20, 9, { fill: MUTE, textAnchor: "start" })}>IVC oversewn</text>
              {/* Portal vein */}
              <line x1={pvX} y1={ly + lh} x2={pvX} y2={ly + lh + 38} stroke={INK} strokeWidth="5" />
              <circle cx={pvX} cy={ly + lh + 2} r={5} fill={ACCENT} />
              <text {...T(pvX, triadY, 9, { fill: INK })}>Portal V.</text>
              {/* Hepatic artery */}
              <line x1={haX} y1={ly + lh} x2={haX} y2={ly + lh + 38} stroke={ACCENT} strokeWidth="3.5" />
              <circle cx={haX} cy={ly + lh + 2} r={5} fill={ACCENT} />
              <text {...T(haX, triadY, 9, { fill: ACCENT })}>Hepatic A.</text>
              {/* Bile duct */}
              <line x1={bdX} y1={ly + lh} x2={bdX} y2={ly + lh + 38} stroke={SOFT} strokeWidth="2.5" strokeDasharray="4 2" />
              <circle cx={bdX} cy={ly + lh + 2} r={4} fill={SOFT} />
              <text {...T(bdX, triadY, 9, { fill: SOFT })}>Bile duct</text>
              <text {...T(ox + 135, oy + 272, 10, { fill: SOFT })}>No caval clamping; haemodynamically stable</text>
            </g>
          )}
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 620 340")}>
        <text {...T(310, 18, 14, { fontWeight: 700 })}>Liver Tx — Caval Techniques</text>
        <Panel ox={10} oy={34} label="Classical (IVC replace)" technique="classical" />
        <Panel ox={340} oy={34} label="Piggyback (IVC preserve)" technique="piggyback" />
        <line x1={330} y1={44} x2={330} y2={318} stroke={RULE} strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Rejection timeline — hyperacute / acute cellular / chronic
  // ─────────────────────────────────────────────────────────────────────────
  function RejectionTimelineFig() {
    // Time axis: minutes → hours → days → months → years (log-like mapping)
    // x positions for key time points
    const ax0 = 60, axEnd = 620, axY = 210;
    const timePoints = [
      { label: "0", x: ax0 },
      { label: "Minutes", x: 110 },
      { label: "Hours", x: 180 },
      { label: "Days\n1–7", x: 270 },
      { label: "Weeks\n1–4", x: 370 },
      { label: "Months\n3–12", x: 470 },
      { label: "Years", x: 580 },
    ];

    const rejTypes = [
      {
        key: "ha",
        label: "Hyperacute",
        sub: "Ab + complement",
        mech: "Pre-formed Ab → thrombosis, graft necrosis (minutes)",
        x1: ax0, x2: 160,
        y: 60, h: 44,
        fill: ASOFT, stroke: ACCENT,
      },
      {
        key: "ac",
        label: "Acute Cellular",
        sub: "T-cell / Banff grade",
        mech: "Days 7–90; reversible with steroids / ATG",
        x1: 240, x2: 430,
        y: 120, h: 44,
        fill: WALL, stroke: INK,
      },
      {
        key: "amb",
        label: "Acute AMR",
        sub: "DSA + C4d",
        mech: "Weeks–months; Rx plasmapheresis + IVIG + rituximab",
        x1: 310, x2: 500,
        y: 60, h: 44,
        fill: WALL, stroke: MUTE,
      },
      {
        key: "ch",
        label: "Chronic Dysfunction",
        sub: "IF/TA + DSA",
        mech: "Months–years; progressive, largely irreversible",
        x1: 430, x2: axEnd,
        y: 120, h: 44,
        fill: LUMEN, stroke: SOFT,
      },
    ];

    return (
      <svg {...svgProps("0 0 680 432")}>
        <text {...T(340, 20, 14, { fontWeight: 700 })}>Transplant Rejection — Types &amp; Timeline</text>

        {/* Time axis */}
        <line x1={ax0} y1={axY} x2={axEnd} y2={axY} stroke={INK} strokeWidth="2" />
        <polygon points={`${axEnd},${axY - 5} ${axEnd + 10},${axY} ${axEnd},${axY + 5}`} fill={INK} />

        {/* Time labels */}
        {timePoints.map((tp) => (
          <g key={tp.label}>
            <line x1={tp.x} y1={axY - 5} x2={tp.x} y2={axY + 5} stroke={INK} strokeWidth="1.5" />
            <text {...T(tp.x, axY + 18, 9.5, { fill: SOFT })}>{tp.label.split("\n")[0]}</text>
            {tp.label.includes("\n") && <text {...T(tp.x, axY + 30, 9.5, { fill: SOFT })}>{tp.label.split("\n")[1]}</text>}
          </g>
        ))}
        <text {...T(axEnd + 6, axY + 4, 10, { fill: SOFT, textAnchor: "start" })}>Time</text>

        {/* Rejection bars */}
        {rejTypes.map((r) => (
          <g key={r.key}>
            {/* bar with gradient effect via opacity */}
            <rect x={r.x1} y={r.y} width={r.x2 - r.x1} height={r.h} rx="5"
              fill={r.fill} stroke={r.stroke} strokeWidth="1.8" />
            {/* arrow to timeline */}
            <line x1={(r.x1 + r.x2) / 2} y1={r.y + r.h}
              x2={(r.x1 + r.x2) / 2} y2={axY - 2}
              stroke={r.stroke} strokeWidth="1.2" strokeDasharray="3 3" />
            <text {...T((r.x1 + r.x2) / 2, r.y + 16, 11, { fontWeight: 700, fill: r.stroke })}>{r.label}</text>
            <text {...T((r.x1 + r.x2) / 2, r.y + 30, 9, { fill: SOFT })}>{r.sub}</text>
          </g>
        ))}

        {/* Mechanism key below axis */}
        <text {...T(340, axY + 52, 11, { fontWeight: 700 })}>Key mechanisms</text>
        {rejTypes.map((r, i) => (
          <g key={r.key + "k"}>
            <rect x={40} y={axY + 64 + i * 36} width={12} height={12} rx="2" fill={r.fill} stroke={r.stroke} strokeWidth="1.5" />
            <text x={60} y={axY + 76 + i * 36} fontSize="10.5" fill={INK} textAnchor="start" fontWeight="600">{r.label}:</text>
            <text x={60} y={axY + 89 + i * 36} fontSize="9.5" fill={SOFT} textAnchor="start">{r.mech}</text>
          </g>
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Couinaud liver segments — basis for living-donor right lobe hepatectomy
  // ─────────────────────────────────────────────────────────────────────────
  function CouinaudFig() {
    // Liver outline — stylised, hepatocyte-textured appearance
    // Segments arranged anatomically (anterior view):
    //   Left lateral: II (superior), III (inferior)
    //   Left medial: IV (a superior, b inferior)
    //   Right anterior: V (inferior), VIII (superior)
    //   Right posterior: VI (inferior), VII (superior)
    //   Caudate: I (posterior, not split)
    //
    // Coordinate map (viewBox 600 x 380)
    // MHV = Middle Hepatic Vein (splits right/left at ~x=310)
    // RHV = Right Hepatic Vein (splits ant/post right at ~x=430)
    // LHV = Left Hepatic Vein (splits II/III vs IV at ~x=210)
    // Rex-Cantlie line (surgical plane right donor hepatectomy) = MHV

    const segs = [
      // [id, label, cx, cy, w, h, highlight]
      ["I",    "I",    310, 310, 70,  40,  false],  // caudate (posterior inferior)
      ["II",   "II",   140, 110, 100, 90,  false],  // left lateral superior
      ["III",  "III",  150, 220, 90,  90,  false],  // left lateral inferior
      ["IVa",  "IVa",  252, 110, 100, 80,  false],  // left medial superior
      ["IVb",  "IVb",  252, 205, 100, 80,  false],  // left medial inferior
      ["V",    "V",    370, 230, 100, 90,  true ],  // right anterior inferior  ← RIGHT LOBE GRAFT
      ["VI",   "VI",   488, 240, 95,  90,  true ],  // right posterior inferior
      ["VII",  "VII",  488, 130, 95,  100, true ],  // right posterior superior
      ["VIII", "VIII", 370, 115, 100, 95,  true ],  // right anterior superior
    ];

    return (
      <svg {...svgProps("0 0 620 400")}>
        <text {...T(310, 20, 14, { fontWeight: 700 })}>Couinaud Liver Segments</text>
        <text {...T(310, 36, 10.5, { fill: SOFT })}>Shaded = right lobe graft (V–VIII)</text>

        {/* Liver outer outline */}
        <path d="M 85 100 Q 80 60 160 50 Q 260 30 370 40 Q 490 42 545 100 Q 580 150 565 250 Q 550 320 480 340 Q 380 370 280 360 Q 180 355 130 320 Q 80 285 85 220 Z"
          fill={LUMEN} stroke={INK} strokeWidth="2.5" />

        {/* Segment cells */}
        {segs.map(([id, label, cx, cy, w, h, hl]) => (
          <g key={id}>
            <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h}
              fill={hl ? ASOFT : WALL}
              stroke={hl ? ACCENT : RULE}
              strokeWidth={hl ? 2 : 1}
              rx="4"
              opacity="0.85"
            />
            <text {...T(cx, cy - 4, 15, { fontWeight: 700, fill: hl ? ACCENT : INK })}>{label}</text>
          </g>
        ))}

        {/* Hepatic vein lines (dashed dividers) */}
        {/* Middle hepatic vein / Rex-Cantlie plane */}
        <line x1={310} y1={50} x2={310} y2={355} stroke={ACCENT} strokeWidth="2.5" strokeDasharray="6 4" />
        <text {...T(310, 44, 9.5, { fill: ACCENT, fontWeight: 600 })}>MHV / Rex-Cantlie line</text>

        {/* Right hepatic vein */}
        <line x1={428} y1={55} x2={428} y2={350} stroke={INK} strokeWidth="1.8" strokeDasharray="5 4" />
        <text {...T(436, 46, 9, { fill: MUTE, textAnchor: "start" })}>RHV</text>

        {/* Left hepatic vein */}
        <line x1={210} y1={55} x2={210} y2={300} stroke={INK} strokeWidth="1.8" strokeDasharray="5 4" />
        <text {...T(202, 46, 9, { fill: MUTE, textAnchor: "end" })}>LHV</text>

        {/* Horizontal fissure (portal plane) */}
        <line x1={90} y1={175} x2={535} y2={175} stroke={RULE} strokeWidth="1.2" strokeDasharray="4 4" />
        <text x={92} y={170} fontSize="9" fill={SOFT} textAnchor="start">Portal plane (sup / inf)</text>

        {/* Caudate label clarification */}
        <text {...T(310, 318, 9, { fill: SOFT })}>Segment I — Caudate (both lobes)</text>

        {/* Right lobe legend */}
        <rect x={14} y={340} width={14} height={14} rx="3" fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />
        <text x={34} y={352} fontSize="10.5" fill={INK} textAnchor="start">Right lobe graft (V–VIII ≈ 60–65% liver volume)</text>
        <rect x={14} y={360} width={14} height={14} rx="3" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text x={34} y={372} fontSize="10.5" fill={INK} textAnchor="start">Left lobe remnant (II–IV; donor safety margin)</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Register figures
  // ─────────────────────────────────────────────────────────────────────────
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "tx-renal-anatomy": {
      title: "Renal transplant surgical anatomy",
      caption: "The graft is placed retroperitoneally in the right iliac fossa. The renal artery and vein are anastomosed end-to-side to the external iliac vessels; the ureter is implanted into the bladder (ureteroneocystostomy, Lich-Gregoir technique). Native kidneys are routinely left in situ.",
      ref: "Morris PJ. Kidney Transplantation: Principles and Practice. 6th ed. Saunders, 2008.",
      render: () => React.createElement(RenalTxAnatomyFig),
    },

    "tx-liver-caval-technique": {
      title: "Liver transplant — classical vs piggyback IVC technique",
      caption: "Classical technique excises the retrohepatic IVC and requires two caval anastomoses plus venovenous bypass. The piggyback technique preserves the recipient IVC with a side-to-side or end-to-side caval outflow, avoiding caval clamping and the haemodynamic instability of the anhepatic phase.",
      ref: "Tzakis A et al. 'Venous jump grafts for liver transplantation in patients with portal vein thrombosis.' Transplantation 1989;48:530 · Belghiti J et al., J Am Coll Surg 1992.",
      render: () => React.createElement(LiverTxTechniqueFig),
    },

    "tx-rejection-timeline": {
      title: "Transplant rejection — types and timeline",
      caption: "Hyperacute rejection (pre-formed antibodies, minutes to hours) is now rare with crossmatch testing. Acute cellular rejection peaks at weeks 1–4 and responds to high-dose steroids. Antibody-mediated rejection (DSA-driven, C4d positive) may occur acutely or later. Chronic allograft dysfunction (IF/TA) is the leading cause of late graft loss and is largely irreversible.",
      ref: "Banff Working Group. Am J Transplant 2018;18:293 (Banff 2017 Classification).",
      render: () => React.createElement(RejectionTimelineFig),
    },

    "tx-couinaud-segments": {
      title: "Couinaud liver segments & living-donor hepatectomy planes",
      caption: "Couinaud's 8 functional segments each have independent portal pedicle and hepatic venous drainage. Living-donor right hepatectomy harvests segments V–VIII along the Rex-Cantlie plane (middle hepatic vein), providing ~60–65% of liver volume while leaving the donor with a safe left-lobe remnant (≥30% of estimated total liver volume).",
      ref: "Couinaud C. Le Foie: Études Anatomiques et Chirurgicales. Masson, 1957 · Lo CM et al., Ann Surg 1997;226:261.",
      render: () => React.createElement(CouinaudFig),
    },

  });
})();
