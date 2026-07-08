// figures-hernia.jsx — original SVG teaching diagrams for Hernia & Abdominal Wall.
// Renders offline, theme-aware via CSS custom properties (light + dark mode).
// Add figureId to a disease's `figures:[]` array to display inline in DetailView.

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
  // 1. Myopectineal orifice of Fruchaud — groin hernia sites
  //    Shows the single weak fascial area through which ALL groin hernias pass,
  //    divided by the inguinal ligament into inguinal (above) and femoral (below)
  //    regions, and by the inferior epigastric vessels into direct (medial) and
  //    indirect (lateral) zones.
  // ─────────────────────────────────────────────────────────────────────────
  function FruchaudFig() {
    // Overall orifice: an oval representing the myopectineal orifice
    const OX = 80, OY = 60, OW = 400, OH = 260;
    const CX = OX + OW / 2; // 280

    // Inguinal ligament splits the oval horizontally ~55% from top
    const IL_Y = OY + 150;

    // Inferior epigastric vessels (IEV) run obliquely from ~60% across the top
    // to ~50% across at the inguinal ligament
    const IEV_TOP_X = OX + 240;
    const IEV_BOT_X = OX + 220;

    // Femoral vein position (right of femoral canal)
    const FV_X = OX + 280;

    return (
      <svg {...svgProps("0 0 560 360")}>
        {/* Title */}
        <text {...T(280, 24, 15, { fontWeight: 700 })}>Myopectineal Orifice of Fruchaud</text>
        <text {...T(280, 42, 11.5, { fill: SOFT })}>single fascial weak zone — all groin hernias pass through here</text>

        {/* Outer orifice oval */}
        <ellipse cx={CX} cy={OY + OH / 2} rx={OW / 2} ry={OH / 2}
          fill={WALL} stroke={RULE} strokeWidth="2.5" />

        {/* ── Inguinal ligament dividing line ── */}
        <line x1={OX + 6} y1={IL_Y} x2={OX + OW - 6} y2={IL_Y}
          stroke={INK} strokeWidth="2.5" strokeDasharray="8 3" />
        <text x={OX + OW + 10} y={IL_Y + 4} fontSize="11" fill={MUTE} textAnchor="start">Inguinal lig.</text>

        {/* ── Inferior epigastric vessels — oblique line ── */}
        <line x1={IEV_TOP_X} y1={OY + 8} x2={IEV_BOT_X} y2={IL_Y - 2}
          stroke={ACCENT} strokeWidth="2.5" />
        {/* arrowhead at top */}
        <polygon points={`${IEV_TOP_X - 6},${OY + 20} ${IEV_TOP_X + 6},${OY + 20} ${IEV_TOP_X},${OY + 8}`}
          fill={ACCENT} />
        <text x={IEV_TOP_X + 12} y={OY + 34} fontSize="10.5" fill={ACCENT} textAnchor="start">Inf. epigastric</text>
        <text x={IEV_TOP_X + 12} y={OY + 48} fontSize="10.5" fill={ACCENT} textAnchor="start">vessels</text>

        {/* ══ ZONE labels in upper half ══ */}
        {/* Direct (Hesselbach) zone — medial to IEV, above IL */}
        <rect x={OX + 14} y={OY + 60} width={IEV_BOT_X - OX - 28} height={70}
          rx="6" fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" opacity="0.65" />
        <text {...T(OX + (IEV_BOT_X - OX) / 2, OY + 100, 13.5, { fontWeight: 700 })}>Direct</text>
        <text {...T(OX + (IEV_BOT_X - OX) / 2, OY + 116, 11, { fill: SOFT })}>Hesselbach's △</text>
        <text {...T(OX + (IEV_BOT_X - OX) / 2, OY + 130, 10.5, { fill: MUTE })}>medial to IEV</text>

        {/* Indirect zone — lateral to IEV, above IL */}
        <rect x={IEV_TOP_X + 4} y={OY + 60} width={OX + OW - IEV_TOP_X - 18} height={70}
          rx="6" fill={LUMEN} stroke={RULE} strokeWidth="1.5" opacity="0.9" />
        <text {...T((IEV_TOP_X + OX + OW) / 2, OY + 100, 13.5, { fontWeight: 700 })}>Indirect</text>
        <text {...T((IEV_TOP_X + OX + OW) / 2, OY + 116, 11, { fill: SOFT })}>deep ring</text>
        <text {...T((IEV_TOP_X + OX + OW) / 2, OY + 130, 10.5, { fill: MUTE })}>lateral to IEV</text>

        {/* ══ ZONE labels in lower half (below IL) ══ */}
        {/* Femoral canal zone */}
        <rect x={OX + 130} y={IL_Y + 14} width={120} height={68}
          rx="6" fill={ASOFT} stroke={MUTE} strokeWidth="1.5" opacity="0.55" />
        <text {...T(OX + 190, IL_Y + 52, 13.5, { fontWeight: 700 })}>Femoral</text>
        <text {...T(OX + 190, IL_Y + 68, 10.5, { fill: SOFT })}>femoral canal</text>

        {/* Femoral vessels annotation */}
        {/* Femoral artery */}
        <circle cx={FV_X - 20} cy={IL_Y + 48} r={11} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />
        <text {...T(FV_X - 20, IL_Y + 52, 9.5, { fill: ACCENT, fontWeight: 600 })}>FA</text>
        {/* Femoral vein */}
        <circle cx={FV_X} cy={IL_Y + 48} r={11} fill={WALL} stroke={RULE} strokeWidth="1.5" />
        <text {...T(FV_X, IL_Y + 52, 9.5, { fill: MUTE })}>FV</text>
        <text x={FV_X + 18} y={IL_Y + 40} fontSize="10" fill={SOFT} textAnchor="start">FA  FV</text>
        <text x={FV_X + 18} y={IL_Y + 54} fontSize="9.5" fill={MUTE} textAnchor="start">Femoral</text>
        <text x={FV_X + 18} y={IL_Y + 66} fontSize="9.5" fill={MUTE} textAnchor="start">sheath</text>

        {/* ABOVE / BELOW labels */}
        <text x={OX + 14} y={IL_Y - 8} fontSize="10.5" fill={MUTE} textAnchor="start">above inguinal ligament → inguinal hernias</text>
        <text x={OX + 14} y={IL_Y + 12} fontSize="10.5" fill={MUTE} textAnchor="start">below → femoral hernia</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Hesselbach's triangle — direct vs indirect inguinal hernia
  // ─────────────────────────────────────────────────────────────────────────
  function HesselbachFig() {
    // Three borders of Hesselbach's triangle:
    //   - Medial: lateral edge of rectus abdominis (vertical, left)
    //   - Inferior: inguinal ligament (oblique line, bottom)
    //   - Lateral: inferior epigastric vessels (oblique line, right)
    const BX = 60, BY = 50;

    // triangle vertices
    const A = [BX + 30, BY + 240];    // medial-inferior (pubic tubercle)
    const B = [BX + 300, BY + 180];   // lateral-inferior (deep ring level)
    const C = [BX + 30, BY + 20];     // medial-superior

    // deep inguinal ring position (lateral to IEV)
    const RING_X = BX + 320;
    const RING_Y = BY + 120;

    return (
      <svg {...svgProps("0 0 560 358")}>
        <text {...T(280, 24, 15, { fontWeight: 700 })}>Hesselbach's Triangle</text>
        <text {...T(280, 42, 11, { fill: SOFT })}>Direct hernia passes medial to inferior epigastric vessels, through the triangle</text>

        {/* Posterior abdominal wall background */}
        <rect x={BX} y={BY} width={420} height={270} rx="8" fill={WALL} stroke={RULE} strokeWidth="1.5" />

        {/* Hesselbach triangle fill */}
        <polygon points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" strokeLinejoin="round" />

        {/* Label inside triangle */}
        <text {...T(BX + 115, BY + 165, 12, { fontWeight: 700, fill: ACCENT })}>Hesselbach's</text>
        <text {...T(BX + 115, BY + 182, 12, { fontWeight: 700, fill: ACCENT })}>triangle</text>

        {/* Border labels */}
        {/* Lateral border = IEV */}
        <text x={B[0] - 10} y={B[1] - 20} fontSize="11" fill={ACCENT} textAnchor="end" fontWeight="600">Inf. epigastric</text>
        <text x={B[0] - 10} y={B[1] - 7} fontSize="11" fill={ACCENT} textAnchor="end" fontWeight="600">vessels (lateral)</text>
        {/* Inferior border = inguinal lig */}
        <text {...T((A[0] + B[0]) / 2 + 20, A[1] + 20, 11, { fill: INK })}>Inguinal ligament (inferior)</text>
        {/* Medial border = rectus */}
        <text x={A[0] - 10} y={(A[1] + C[1]) / 2} fontSize="11" fill={MUTE} textAnchor="end">Rectus</text>
        <text x={A[0] - 10} y={(A[1] + C[1]) / 2 + 14} fontSize="11" fill={MUTE} textAnchor="end">abdominis</text>
        <text x={A[0] - 10} y={(A[1] + C[1]) / 2 + 28} fontSize="11" fill={MUTE} textAnchor="end">(medial)</text>

        {/* Direct hernia arrow — through triangle */}
        <circle cx={BX + 130} cy={BY + 140} r={28} fill={LUMEN} stroke={ACCENT} strokeWidth="2.5" strokeDasharray="5 3" />
        <text {...T(BX + 130, BY + 137, 11, { fontWeight: 600 })}>DIRECT</text>
        <text {...T(BX + 130, BY + 152, 10.5, { fill: SOFT })}>through △</text>

        {/* Deep ring — lateral */}
        <ellipse cx={RING_X} cy={RING_Y} rx={22} ry={30}
          fill={LUMEN} stroke={RULE} strokeWidth="2" strokeDasharray="4 3" />
        <text {...T(RING_X, RING_Y - 40, 11, { fill: MUTE })}>Deep</text>
        <text {...T(RING_X, RING_Y - 26, 11, { fill: MUTE })}>inguinal ring</text>

        {/* Indirect hernia arrow — through deep ring */}
        <circle cx={RING_X} cy={RING_Y} r={20} fill={ASOFT} stroke={RULE} strokeWidth="2" opacity="0.7" />
        <text {...T(RING_X, RING_Y - 3, 10.5, { fontWeight: 600 })}>INDIRECT</text>
        <text {...T(RING_X, RING_Y + 11, 10, { fill: SOFT })}>lat. to IEV</text>

        {/* Pubic tubercle marker */}
        <circle cx={A[0]} cy={A[1]} r={5} fill={INK} />
        <text x={A[0] + 8} y={A[1] + 4} fontSize="10" fill={MUTE} textAnchor="start">Pubic tubercle</text>

        {/* Key reminder */}
        <text {...T(280, BY + 295, 11, { fill: SOFT })}>Deep ring lateral to IEV → indirect   |   Through △ medial to IEV → direct</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Nyhus classification of inguinal hernias (grading ladder)
  // ─────────────────────────────────────────────────────────────────────────
  function NyhusFig() {
    const rows = [
      { type: "Type I",   desc: "Indirect · normal deep ring · (infant/child)", mgmt: "Ring repair only", col: LUMEN },
      { type: "Type II",  desc: "Indirect · dilated deep ring · floor intact",  mgmt: "Ring + floor reinforced", col: LUMEN },
      { type: "Type IIIa", desc: "Direct · posterior wall defect",              mgmt: "Floor repair", col: ASOFT },
      { type: "Type IIIb", desc: "Indirect · large / pantaloon · floor weakened", mgmt: "Floor repair + ring", col: ASOFT },
      { type: "Type IIIc", desc: "Femoral hernia",                              mgmt: "Femoral canal closure", col: ASOFT },
      { type: "Type IV",  desc: "Recurrent (any type)",                         mgmt: "Mesh preferred", col: WALL },
    ];
    const RH = 46, W = 560, PY = 50;

    return (
      <svg {...svgProps(`0 0 ${W} ${PY + rows.length * RH + 40}`)}>
        <text {...T(W / 2, 24, 15, { fontWeight: 700 })}>Nyhus Classification — Inguinal Hernia</text>
        <text {...T(W / 2, 42, 11, { fill: SOFT })}>based on size of deep ring and integrity of posterior inguinal wall</text>

        {/* Column headers */}
        {[["Type", 70], ["Description", 270], ["Repair principle", 460]].map(([h, x]) => (
          <text key={h} x={x} y={PY + 14} fontSize="12" fill={MUTE} fontWeight="700" textAnchor="middle">{h}</text>
        ))}
        <line x1={16} y1={PY + 20} x2={W - 16} y2={PY + 20} stroke={RULE} strokeWidth="1.5" />

        {rows.map((r, i) => {
          const y = PY + 24 + i * RH;
          return (
            <g key={r.type}>
              <rect x={16} y={y} width={W - 32} height={RH - 4} rx="5" fill={r.col} />
              <text x={70} y={y + RH / 2 + 5} fontSize="13.5" fill={INK} fontWeight="700" textAnchor="middle">{r.type}</text>
              <line x1={130} y1={y + 6} x2={130} y2={y + RH - 8} stroke={RULE} strokeWidth="1" />
              <text x={270} y={y + RH / 2 + 5} fontSize="12" fill={INK} textAnchor="middle">{r.desc}</text>
              <line x1={395} y1={y + 6} x2={395} y2={y + RH - 8} stroke={RULE} strokeWidth="1" />
              <text x={460} y={y + RH / 2 + 5} fontSize="11.5" fill={ACCENT} fontWeight="600" textAnchor="middle">{r.mgmt}</text>
            </g>
          );
        })}

        <text {...T(W / 2, PY + rows.length * RH + 36, 11, { fill: SOFT })}>
          Types I–II = indirect (small); IIIa–c = all large/complex; IV = recurrent
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Abdominal wall layers cross-section with hernia protrusion
  //    Shows all layers from skin → peritoneum with a hernia sac pushing
  //    through a defect in the musculo-aponeurotic layer.
  // ─────────────────────────────────────────────────────────────────────────
  function AbdWallLayersFig() {
    // Layers drawn left→right (representing a cross-section, medial portion)
    // We'll draw horizontally stacked bands, hernia sac protrudes downward
    const layers = [
      { label: "Skin",                      h: 22, fill: ASOFT },
      { label: "Subcutaneous fat (Camper's fascia)", h: 42, fill: WALL },
      { label: "Scarpa's fascia",           h: 14, fill: RULE },
      { label: "Ext. oblique aponeurosis",  h: 18, fill: MUTE },
      { label: "Int. oblique / transversus", h: 30, fill: WALL },
      { label: "Transversalis fascia",      h: 14, fill: RULE },
      { label: "Preperitoneal fat",         h: 20, fill: LUMEN },
      { label: "Peritoneum",                h: 12, fill: ASOFT },
    ];

    const X0 = 20, W = 460, GAP = 3;
    let y = 40;
    const DEFECT_X = 200, DEFECT_W = 120;  // defect in musculo-aponeurotic layers

    // Record y positions
    const bands = [];
    layers.forEach((L, i) => {
      L._y = y;
      bands.push({ ...L, y });
      y += L.h + GAP;
    });
    const totalH = y;

    // Hernia sac: protrudes through defect in layers 3-4 (ext/int oblique)
    // sac starts at bottom of transversalis fascia and extends below peritoneum
    const sacTop = bands[5]._y + bands[5].h; // bottom of transversalis fascia
    const sacBot = totalH + 50;
    const sacCX = X0 + DEFECT_X + DEFECT_W / 2;

    return (
      <svg {...svgProps(`0 0 560 ${totalH + 90}`)}>
        <text {...T(280, 22, 15, { fontWeight: 700 })}>Abdominal Wall Layers & Hernia Protrusion</text>

        {bands.map((L, i) => {
          // For defect layers (ext/int oblique, transversalis) split the band to show defect
          const isDefect = i >= 3 && i <= 5;
          if (isDefect) {
            return (
              <g key={i}>
                {/* Left of defect */}
                <rect x={X0} y={L.y} width={DEFECT_X} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" />
                {/* Right of defect */}
                <rect x={X0 + DEFECT_X + DEFECT_W} y={L.y} width={W - DEFECT_X - DEFECT_W} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" />
                {/* Label on the right portion */}
                <text x={X0 + DEFECT_X + DEFECT_W + 10} y={L.y + L.h / 2 + 4} fontSize="11" fill={INK} textAnchor="start">{L.label}</text>
              </g>
            );
          }
          return (
            <g key={i}>
              <rect x={X0} y={L.y} width={W} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" />
              <text x={X0 + 10} y={L.y + L.h / 2 + 4} fontSize="11" fill={INK} textAnchor="start">{L.label}</text>
            </g>
          );
        })}

        {/* Hernia sac — the peritoneal outpouching */}
        {/* Neck at top (width of defect) */}
        <path
          d={`M ${X0 + DEFECT_X} ${sacTop} L ${X0 + DEFECT_X} ${sacTop + 28} Q ${sacCX} ${sacBot} ${X0 + DEFECT_X + DEFECT_W} ${sacTop + 28} L ${X0 + DEFECT_X + DEFECT_W} ${sacTop}`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
        <text {...T(sacCX, sacBot - 18, 12, { fontWeight: 700, fill: ACCENT })}>Hernia sac</text>
        <text {...T(sacCX, sacBot - 4, 10.5, { fill: ACCENT })}>(peritoneal protrusion)</text>

        {/* Defect bracket annotation */}
        <line x1={X0 + DEFECT_X} y1={bands[3]._y - 4} x2={X0 + DEFECT_X + DEFECT_W} y2={bands[3]._y - 4}
          stroke={ACCENT} strokeWidth="1.5" />
        <line x1={X0 + DEFECT_X} y1={bands[3]._y - 10} x2={X0 + DEFECT_X} y2={bands[3]._y - 2}
          stroke={ACCENT} strokeWidth="1.5" />
        <line x1={X0 + DEFECT_X + DEFECT_W} y1={bands[3]._y - 10} x2={X0 + DEFECT_X + DEFECT_W} y2={bands[3]._y - 2}
          stroke={ACCENT} strokeWidth="1.5" />
        <text {...T(sacCX, bands[3]._y - 12, 10.5, { fill: ACCENT })}>fascial defect</text>

        {/* Skin surface label */}
        <text x={X0 + W + 8} y={bands[0]._y + 14} fontSize="10" fill={SOFT} textAnchor="start">surface ↑</text>

        {/* Mesh planes annotation (right side) */}
        <text x={X0 + W + 8} y={bands[3]._y + 10} fontSize="10" fill={MUTE} textAnchor="start">onlay</text>
        <text x={X0 + W + 8} y={bands[4]._y + 10} fontSize="10" fill={MUTE} textAnchor="start">sublay</text>
        <text x={X0 + W + 8} y={bands[5]._y + 10} fontSize="10" fill={MUTE} textAnchor="start">(Rives)</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 5. Femoral canal anatomy & strangulation risk
  //    Shows the femoral canal borders (lacunar ligament medially, femoral
  //    vein laterally, inguinal ligament superiorly, pectineal ligament
  //    posteriorly) and why the rigid medial border (lacunar lig.) prevents
  //    reduction and causes strangulation.
  // ─────────────────────────────────────────────────────────────────────────
  function FemoralCanalFig() {
    // Viewed from below (inferior view of femoral ring)
    // Draw as a cross-section box: inguinal lig on top, pectineal lig on bottom
    // Lacunar lig on medial side (right in standard orientation), femoral vein lateral
    const BX = 80, BY = 60, BW = 360, BH = 200;
    const CX = BX + BW / 2, CY = BY + BH / 2;

    // Femoral canal — small oval in medial portion
    const FC_X = BX + 70, FC_Y = CY, FC_RX = 32, FC_RY = 28;

    // Femoral vein
    const FV_X = BX + 150, FV_Y = CY;

    // Femoral artery
    const FA_X = BX + 230, FA_Y = CY;

    return (
      <svg {...svgProps("0 0 560 395")}>
        <text {...T(280, 24, 15, { fontWeight: 700 })}>Femoral Canal Anatomy</text>
        <text {...T(280, 42, 11, { fill: SOFT })}>inferior (axial) view — femoral ring</text>

        {/* Outer frame representing femoral sheath / femoral triangle */}
        <rect x={BX} y={BY} width={BW} height={BH} rx="12"
          fill={WALL} stroke={RULE} strokeWidth="2" />

        {/* ── Border labels ── */}
        {/* Superior = Inguinal ligament */}
        <text {...T(CX, BY - 8, 11.5, { fontWeight: 600 })}>Inguinal ligament (superior)</text>

        {/* Inferior = Pectineal (Cooper's) ligament */}
        <text {...T(CX, BY + BH + 18, 11.5, { fontWeight: 600 })}>Pectineal (Cooper's) ligament (posterior/inferior)</text>

        {/* Medial = Lacunar ligament — RIGHT side in standard anatomical orientation */}
        <rect x={BX} y={BY} width={FC_X - BX + FC_RX - 10} height={BH}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2" rx="10" opacity="0.4" />
        <text x={BX + 18} y={BY + BH / 2 - 18} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="middle"
          transform={`rotate(-90, ${BX + 18}, ${BY + BH / 2})`}>Lacunar lig.</text>
        <text x={BX + 18} y={BY + BH / 2 + 18} fontSize="10" fill={ACCENT} fontWeight="700" textAnchor="middle"
          transform={`rotate(-90, ${BX + 18}, ${BY + BH / 2})`}>MEDIAL</text>

        {/* Lateral label */}
        <text x={BX + BW + 14} y={CY} fontSize="11" fill={MUTE}
          transform={`rotate(90, ${BX + BW + 14}, ${CY})`} textAnchor="middle">LATERAL</text>

        {/* Femoral canal (empty space) */}
        <ellipse cx={FC_X} cy={FC_Y} rx={FC_RX} ry={FC_RY}
          fill={LUMEN} stroke={ACCENT} strokeWidth="2.5" />
        <text {...T(FC_X, FC_Y - 3, 11, { fontWeight: 700, fill: ACCENT })}>Femoral</text>
        <text {...T(FC_X, FC_Y + 12, 11, { fontWeight: 700, fill: ACCENT })}>canal</text>

        {/* Cloquet's node annotation */}
        <text {...T(FC_X, FC_Y + 56, 10, { fill: MUTE })}>Cloquet's node</text>
        <line x1={FC_X} y1={FC_Y + 48} x2={FC_X} y2={FC_Y + FC_RY + 4}
          stroke={MUTE} strokeWidth="1" strokeDasharray="3 2" />

        {/* Femoral vein */}
        <circle cx={FV_X} cy={FV_Y} r={28} fill={LUMEN} stroke={RULE} strokeWidth="2" />
        <text {...T(FV_X, FV_Y - 4, 12, { fontWeight: 600 })}>FV</text>
        <text {...T(FV_X, FV_Y + 12, 10.5, { fill: MUTE })}>vein</text>

        {/* Femoral artery */}
        <circle cx={FA_X} cy={FA_Y} r={22} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <text {...T(FA_X, FA_Y - 4, 12, { fontWeight: 600 })}>FA</text>
        <text {...T(FA_X, FA_Y + 12, 10.5, { fill: MUTE })}>artery</text>

        {/* Femoral nerve - lateral (outside sheath) */}
        <ellipse cx={BX + 320} cy={CY} rx={18} ry={22}
          fill={WALL} stroke={RULE} strokeWidth="1.5" strokeDasharray="5 3" />
        <text {...T(BX + 320, CY - 3, 11, { fill: MUTE })}>FN</text>
        <text {...T(BX + 320, CY + 12, 9.5, { fill: MUTE })}>nerve</text>
        <text {...T(BX + 320, CY + 42, 9.5, { fill: SOFT })}>(outside sheath)</text>

        {/* Mnemonic */}
        <rect x={80} y={BY + BH + 34} width={400} height={48} rx="6" fill={ASOFT} opacity="0.4" />
        <text {...T(280, BY + BH + 52, 12, { fontWeight: 700 })}>NAVEL  ←  lateral to medial</text>
        <text {...T(280, BY + BH + 68, 11, { fill: MUTE })}>Nerve · Artery · Vein · Empty space (canal) · Lacunar ligament</text>

        {/* Why strangulation callout */}
        <text {...T(280, BY + BH + 96, 11.5, { fill: ACCENT, fontWeight: 600 })}>Rigid lacunar lig. → irreducible</text>
        <text {...T(280, BY + BH + 113, 11, { fill: ACCENT })}>Highest strangulation rate</text>
      </svg>
    );
  }

  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "hernia-fruchaud-orifice": {
      title: "Myopectineal orifice of Fruchaud",
      caption: "All groin hernias — indirect inguinal, direct inguinal, and femoral — originate through the single myopectineal orifice. The inguinal ligament separates the inguinal (above) from femoral (below) compartments; the inferior epigastric vessels separate direct (medial) from indirect (lateral) sites.",
      ref: "Fruchaud H, Anatomie Chirurgicale des Hernies de l'Aine, 1956 · Miserez M et al., Hernia 2014;18:151",
      render: () => React.createElement(FruchaudFig),
    },

    "hernia-hesselbach-triangle": {
      title: "Hesselbach's triangle — direct vs indirect hernia",
      caption: "Direct inguinal hernias protrude through Hesselbach's triangle (bounded by the inferior epigastric vessels laterally, the rectus sheath medially, and the inguinal ligament inferiorly). Indirect hernias enter the deep ring lateral to the inferior epigastric vessels and travel within the spermatic cord.",
      ref: "Hesselbach FC, Arch Physiol 1814 · Skandalakis LJ et al., Am Surg 2006;72:496",
      render: () => React.createElement(HesselbachFig),
    },

    "hernia-nyhus-classification": {
      title: "Nyhus classification of inguinal hernias",
      caption: "The Nyhus system grades hernias by deep-ring size and posterior-wall integrity. Types I–II are indirect with an intact floor; Type III (a/b/c) includes all hernias with floor weakness or femoral involvement; Type IV denotes recurrence. Higher Nyhus type correlates with greater risk of recurrence and generally mandates mesh.",
      ref: "Nyhus LM, Surg Clin North Am 1993;73:487 · HerniaSurge Group, Hernia 2018;22:1",
      render: () => React.createElement(NyhusFig),
    },

    "hernia-abdominal-wall-layers": {
      title: "Abdominal wall layers & hernia protrusion",
      caption: "A hernia sac is a peritoneal outpouching driven through a defect in the musculo-aponeurotic and transversalis fascial layers. Mesh can be placed in three planes: onlay (above the fascia), sublay/retromuscular (Rives–Stoppa, between muscle and peritoneum), or intraperitoneal (IPOM). The sublay plane is preferred as it uses intra-abdominal pressure to hold the mesh.",
      ref: "Rives J, Chirurgie 1987;113:272 · EHS guidelines, Hernia 2015;19:1",
      render: () => React.createElement(AbdWallLayersFig),
    },

    "hernia-femoral-canal-anatomy": {
      title: "Femoral canal anatomy & strangulation risk",
      caption: "Inferior (axial) view of the femoral ring. The femoral canal is the medial empty compartment of the femoral sheath, bounded superiorly by the inguinal ligament, posteriorly by the pectineal (Cooper's) ligament, and medially by the rigid lacunar (Gimbernat's) ligament. This unyielding medial border prevents spontaneous reduction, explaining why femoral hernias have the highest strangulation rate (≈40%) of all groin hernias. Remember NAVEL from lateral to medial: Nerve–Artery–Vein–Empty canal–Lacunar ligament.",
      ref: "Skandalakis JE, Surgical Anatomy 2004 · HerniaSurge Group, Hernia 2018;22:1",
      render: () => React.createElement(FemoralCanalFig),
    },

  });
})();
