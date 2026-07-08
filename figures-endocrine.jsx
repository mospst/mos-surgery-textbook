// figures-endocrine.jsx — Breast & Endocrine SVG teaching diagrams
// Authoring rules: see FIGURE_SPEC.md. Matches style of figures.jsx exactly.

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
  // Breast quadrants + axillary lymph node levels I / II / III
  // ─────────────────────────────────────────────────────────────────────────
  function BreastAxillaryFig() {
    // Breast circle centred at (200, 240), radius 130
    const bx = 200, by = 240, br = 130;
    // Pectoralis minor: sits between levels I and II/III
    // drawn as a muscle ribbon from ~(330,130) to (420,230)
    const pmTop = [[330, 100], [365, 95], [395, 110], [420, 140]];
    const pmBot = [[420, 180], [390, 168], [360, 158], [330, 160]];

    // Level boundaries (relative to pec minor origin)
    // Level I: lateral to lateral border of pec minor
    // Level II: behind pec minor
    // Level III: medial to medial border of pec minor (infraclavicular)

    const pmPath = `M ${pmTop.map(p => p.join(",")).join(" L ")} L ${pmBot.map(p => p.join(",")).join(" L ")} Z`;

    // Lymph node dots
    const nodes = [
      // Level I — lateral to pec minor
      { x: 295, y: 185, lv: 1 }, { x: 310, y: 215, lv: 1 }, { x: 305, y: 245, lv: 1 },
      { x: 295, y: 270, lv: 1 }, { x: 318, y: 290, lv: 1 },
      // Level II — posterior to pec minor
      { x: 358, y: 185, lv: 2 }, { x: 375, y: 208, lv: 2 }, { x: 370, y: 232, lv: 2 },
      // Level III — medial / infraclavicular
      { x: 430, y: 120, lv: 3 }, { x: 450, y: 140, lv: 3 }, { x: 455, y: 162, lv: 3 },
    ];
    const lvColour = { 1: ACCENT, 2: MUTE, 3: SOFT };
    const lvLabel = { 1: "I", 2: "II", 3: "III" };

    // Quadrant lines (through nipple ~ bx, by)
    const q = { x: bx, y: by };

    return (
      <svg {...svgProps("0 0 620 420")}>
        {/* Title row */}
        <text {...T(310, 22, 13, { fill: SOFT })}>Right breast — anterior view (patient facing you)</text>

        {/* Breast outline */}
        <circle cx={bx} cy={by} r={br} fill={ASOFT} stroke={INK} strokeWidth="2" />
        {/* Nipple */}
        <circle cx={bx} cy={by} r={8} fill={WALL} stroke={INK} strokeWidth="1.5" />

        {/* Quadrant dividers */}
        <line x1={bx} y1={by - br} x2={bx} y2={by + br} stroke={RULE} strokeWidth="1.5" strokeDasharray="5 4" />
        <line x1={bx - br} y1={by} x2={bx + br} y2={by} stroke={RULE} strokeWidth="1.5" strokeDasharray="5 4" />

        {/* Quadrant labels */}
        <text {...T(bx - 52, by - 46, 12, { fill: INK, fontWeight: 600 })}>UO</text>
        <text {...T(bx + 52, by - 46, 12, { fill: INK, fontWeight: 600 })}>UI</text>
        <text {...T(bx - 52, by + 52, 12, { fill: INK, fontWeight: 600 })}>LO</text>
        <text {...T(bx + 52, by + 52, 12, { fill: INK, fontWeight: 600 })}>LI</text>
        {/* Quadrant full names */}
        <text {...T(bx - 52, by - 32, 10, { fill: SOFT })}>Upper outer</text>
        <text {...T(bx + 52, by - 32, 10, { fill: SOFT })}>Upper inner</text>
        <text {...T(bx - 52, by + 64, 10, { fill: SOFT })}>Lower outer</text>
        <text {...T(bx + 52, by + 64, 10, { fill: SOFT })}>Lower inner</text>

        {/* Axilla label */}
        <text {...T(380, 50, 13, { fill: INK, fontWeight: 700 })}>Axilla</text>
        <line x1={380} y1={56} x2={380} y2={80} stroke={RULE} strokeWidth="1" />

        {/* Chest wall / rib suggestion */}
        <line x1={230} y1={120} x2={500} y2={80} stroke={RULE} strokeWidth="1.5" strokeDasharray="6 5" />
        <text x={490} y={76} fontSize={10} fill={SOFT} textAnchor="start">clavicle / chest wall</text>

        {/* Pectoralis minor muscle */}
        <path d={pmPath} fill={WALL} stroke={RULE} strokeWidth="2" opacity="0.8" />
        <text {...T(373, 132, 10.5, { fill: MUTE, fontWeight: 600 })}>Pec. minor</text>

        {/* Level bracket lines */}
        {/* Level I lateral border of pec minor */}
        <line x1={330} y1={300} x2={330} y2={312} stroke={RULE} strokeWidth="1" />
        {/* Level boundaries label */}
        <text x={232} y={326} fontSize={11} fill={MUTE} textAnchor="start">← Lat. border pec. minor</text>
        <line x1={330} y1={322} x2={330} y2={334} stroke={RULE} strokeWidth="1" strokeDasharray="3 3" />
        <text x={232} y={348} fontSize={11} fill={MUTE} textAnchor="start">← Med. border pec. minor</text>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <ellipse cx={n.x} cy={n.y} rx={9} ry={6.5} fill={lvColour[n.lv]} stroke={INK} strokeWidth="1.2" />
          </g>
        ))}

        {/* Level legend */}
        {[1, 2, 3].map((lv, i) => {
          const lx = 490, ly = 280 + i * 36;
          return (
            <g key={lv}>
              <ellipse cx={lx} cy={ly} rx={10} ry={7} fill={lvColour[lv]} stroke={INK} strokeWidth="1.2" />
              <text x={lx + 18} y={ly + 4} fontSize={12} fill={INK} textAnchor="start">
                Level {lvLabel[lv]}
              </text>
            </g>
          );
        })}
        <text x={490} y={262} fontSize={11} fill={SOFT} textAnchor="start">Node levels</text>

        {/* Sentinel node arrow */}
        <line x1={bx + 70} y1={by - 50} x2={305} y2={248} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" />
        <text {...T(bx + 22, by - 78, 10.5, { fill: ACCENT })}>sentinel node</text>
        <text {...T(bx + 22, by - 65, 10.5, { fill: ACCENT })}>(usu. Level I)</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Bethesda System for thyroid cytology — risk-of-malignancy ladder
  // ─────────────────────────────────────────────────────────────────────────
  function BethesdaFig() {
    const cats = [
      { num: "I",   name: "Non-diagnostic / Unsatisfactory", rom: "5–10%",  romLo: 5,  romHi: 10,  action: "Repeat FNA",        fill: WALL  },
      { num: "II",  name: "Benign",                          rom: "0–3%",   romLo: 0,  romHi: 3,   action: "Follow-up",          fill: LUMEN },
      { num: "III", name: "Atypia of undetermined signif.",  rom: "10–30%", romLo: 10, romHi: 30,  action: "FNA / molecular",    fill: ASOFT },
      { num: "IV",  name: "Follicular neoplasm / SFN",       rom: "15–30%", romLo: 15, romHi: 30,  action: "Diag. lobectomy",    fill: ASOFT },
      { num: "V",   name: "Suspicious for malignancy",       rom: "50–75%", romLo: 50, romHi: 75,  action: "Near-total Tx",      fill: ACCENT },
      { num: "VI",  name: "Malignant",                       rom: "97–99%", romLo: 97, romHi: 99,  action: "Thyroidectomy",      fill: ACCENT },
    ];

    const rowH = 52, x0 = 16, W = 600, textX = 112, barX = 300, barW = 160;
    const totalH = rowH * cats.length + 64;

    return (
      <svg {...svgProps(`0 0 ${W + 20} ${totalH}`)}>
        {/* Column headers */}
        <text x={x0 + 38} y={26} fontSize={11} fill={SOFT} textAnchor="middle">Cat.</text>
        <text x={textX + 60} y={26} fontSize={11} fill={SOFT} textAnchor="middle">Diagnosis</text>
        <text x={barX + barW / 2} y={26} fontSize={11} fill={SOFT} textAnchor="middle">Risk of malignancy</text>
        <text x={W + 12} y={26} fontSize={11} fill={SOFT} textAnchor="end">Management</text>
        <line x1={x0} y1={30} x2={W + 16} y2={30} stroke={RULE} strokeWidth="1" />

        {cats.map((c, i) => {
          const y = 32 + i * rowH;
          const mid = y + rowH / 2;
          const isBold = i >= 4; // V and VI are high-risk — highlight
          const barFill = isBold ? ACCENT : (i >= 2 ? MUTE : SOFT);
          const romPct = c.romHi; // use upper bound to size bar
          const filledW = Math.round((romPct / 100) * barW);

          return (
            <g key={c.num}>
              <rect x={x0} y={y + 2} width={W + 4} height={rowH - 4} fill={i % 2 === 0 ? LUMEN : WALL} rx="3" />
              {/* Category number badge */}
              <rect x={x0 + 2} y={y + 8} width={54} height={rowH - 18} rx="4"
                fill={isBold ? ACCENT : ASOFT} opacity={isBold ? 1 : 0.7} />
              <text {...T(x0 + 29, mid + 5, 14, { fontWeight: 700, fill: isBold ? LUMEN : INK })}>
                {c.num}
              </text>
              {/* Diagnosis name */}
              <text x={textX} y={mid - 5} fontSize={11.5} fill={INK} fontWeight={isBold ? "600" : "400"} textAnchor="start">{c.name}</text>
              {/* ROM bar track */}
              <rect x={barX} y={mid - 8} width={barW} height={14} rx="4" fill={WALL} stroke={RULE} strokeWidth="0.8" />
              <rect x={barX} y={mid - 8} width={filledW} height={14} rx="4" fill={barFill} opacity="0.75" />
              <text x={barX + barW + 6} y={mid + 4} fontSize={11} fill={INK} textAnchor="start">{c.rom}</text>
              {/* Action */}
              <text x={W + 14} y={mid + 4} fontSize={10.5} fill={isBold ? ACCENT : SOFT}
                textAnchor="end" fontWeight={isBold ? "600" : "400"}>{c.action}</text>
            </g>
          );
        })}
        {/* Bottom note */}
        <text x={x0} y={totalH - 6} fontSize={10} fill={SOFT} textAnchor="start">
          ROM = risk of malignancy (resection-confirmed). ATA 2023 / Bethesda 2023.
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Parathyroid gland anatomy — embryology origins & ectopic locations
  // ─────────────────────────────────────────────────────────────────────────
  function ParathyroidAnatomyFig() {
    // Schematic: thyroid lobes + trachea centred, glands placed anatomically
    // Superior glands (from 4th pouch) — constant, posterior to upper thyroid
    // Inferior glands (from 3rd pouch with thymus) — variable, wider range

    const cx = 300, ty = 80; // top of thyroid

    // Thyroid lobes (2 rectangles + isthmus)
    const lobeW = 80, lobeH = 180, lobeRx = 20;
    const leftLx = cx - lobeW - 22, rightLx = cx + 22;

    // Trachea
    const tracheaRings = Array.from({ length: 8 }, (_, i) => i);

    return (
      <svg {...svgProps("0 0 620 480")}>
        <text {...T(310, 22, 13, { fill: SOFT })}>Parathyroid glands — anatomy & ectopic locations</text>

        {/* Trachea */}
        {tracheaRings.map(i => (
          <rect key={i} x={cx - 26} y={ty + 40 + i * 26} width={52} height={20}
            rx="10" fill={WALL} stroke={RULE} strokeWidth="1.2" />
        ))}
        <text {...T(cx, ty + 310, 10.5, { fill: SOFT })}>Trachea</text>

        {/* Thyroid lobes */}
        <rect x={leftLx} y={ty} width={lobeW} height={lobeH} rx={lobeRx}
          fill={ASOFT} stroke={INK} strokeWidth="2" />
        <rect x={rightLx} y={ty} width={lobeW} height={lobeH} rx={lobeRx}
          fill={ASOFT} stroke={INK} strokeWidth="2" />
        {/* Isthmus */}
        <rect x={cx - 22} y={ty + 56} width={44} height={30} rx="6"
          fill={ASOFT} stroke={INK} strokeWidth="1.5" />
        <text {...T(leftLx + lobeW / 2, ty + lobeH / 2, 12, { fill: INK })}>Left</text>
        <text {...T(rightLx + lobeW / 2, ty + lobeH / 2, 12, { fill: INK })}>Right</text>
        <text {...T(cx, ty - 14, 12.5, { fill: INK, fontWeight: 600 })}>Thyroid</text>

        {/* Superior glands (4th pouch — constant position) */}
        {/* Left sup */}
        <ellipse cx={leftLx - 14} cy={ty + 44} rx={11} ry={8} fill={ACCENT} stroke={INK} strokeWidth="1.5" />
        <text x={leftLx - 60} y={ty + 30} fontSize={11} fill={ACCENT} textAnchor="start">Sup. L</text>
        <line x1={leftLx - 40} y1={ty + 38} x2={leftLx - 14} y2={ty + 44} stroke={ACCENT} strokeWidth="1" />
        {/* Right sup */}
        <ellipse cx={rightLx + lobeW + 14} cy={ty + 44} rx={11} ry={8} fill={ACCENT} stroke={INK} strokeWidth="1.5" />
        <text x={rightLx + lobeW + 28} y={ty + 30} fontSize={11} fill={ACCENT} textAnchor="start">Sup. R</text>
        <line x1={rightLx + lobeW + 28} y1={ty + 36} x2={rightLx + lobeW + 14} y2={ty + 44} stroke={ACCENT} strokeWidth="1" />

        {/* Inferior glands (3rd pouch — variable position) */}
        {/* Left inf — typical */}
        <ellipse cx={leftLx - 18} cy={ty + 148} rx={11} ry={8} fill={MUTE} stroke={INK} strokeWidth="1.5" />
        <text x={leftLx - 66} y={ty + 134} fontSize={11} fill={MUTE} textAnchor="start">Inf. L</text>
        <line x1={leftLx - 40} y1={ty + 144} x2={leftLx - 18} y2={ty + 148} stroke={MUTE} strokeWidth="1" />
        {/* Right inf — typical */}
        <ellipse cx={rightLx + lobeW + 18} cy={ty + 148} rx={11} ry={8} fill={MUTE} stroke={INK} strokeWidth="1.5" />
        <text x={rightLx + lobeW + 32} y={ty + 134} fontSize={11} fill={MUTE} textAnchor="start">Inf. R</text>
        <line x1={rightLx + lobeW + 32} y1={ty + 140} x2={rightLx + lobeW + 18} y2={ty + 148} stroke={MUTE} strokeWidth="1" />

        {/* Embryology origin labels */}
        <rect x={16} y={64} width={108} height={34} rx="4" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text x={70} y={80} fontSize={10.5} fill={INK} textAnchor="middle" fontWeight="600">Superior glands</text>
        <text x={70} y={93} fontSize={10} fill={SOFT} textAnchor="middle">4th pharyngeal pouch</text>

        <rect x={16} y={136} width={108} height={34} rx="4" fill={WALL} stroke={RULE} strokeWidth="1" />
        <text x={70} y={152} fontSize={10.5} fill={INK} textAnchor="middle" fontWeight="600">Inferior glands</text>
        <text x={70} y={165} fontSize={10} fill={SOFT} textAnchor="middle">3rd pharyngeal pouch</text>

        {/* Dividing line for ectopic section */}
        <line x1={16} y1={290} x2={604} y2={290} stroke={RULE} strokeWidth="1" strokeDasharray="5 4" />
        <text x={310} y={282} fontSize={11} fill={SOFT} textAnchor="middle">— Ectopic locations (inferior > superior) —</text>

        {/* Ectopic sites */}
        {[
          { label: "Intrathyroidal",         x: 68,  y: 320 },
          { label: "Carotid sheath",          x: 68,  y: 356 },
          { label: "Retrooesophageal",        x: 68,  y: 392 },
          { label: "Superior mediastinum",    x: 68,  y: 428 },
          { label: "Anterior mediastinum",    x: 310, y: 320 },
          { label: "(thymic / aortopulm.)",   x: 310, y: 336 },
          { label: "Thyrothymic ligament",    x: 310, y: 372 },
          { label: "Intrathymic",             x: 310, y: 408 },
          { label: "Undescended (high neck)", x: 500, y: 344 },
        ].map((e, i) => (
          <g key={i}>
            <circle cx={e.x - 52} cy={e.y - 4} r={4} fill={SOFT} stroke={INK} strokeWidth="1" />
            <text x={e.x - 44} y={e.y} fontSize={11} fill={INK} textAnchor="start">{e.label}</text>
          </g>
        ))}

        {/* Frequency note */}
        <text {...T(310, 464, 10.5, { fill: SOFT })}>
          ~80% of inferior glands found in thyrothymic ligament or anterior mediastinum when ectopic
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Adrenal incidentaloma workup — size & functional algorithm
  // ─────────────────────────────────────────────────────────────────────────
  function AdrenalIncidentalomaFig() {
    // Flow: discovery → functional screen (always) → size/imaging criteria → management
    // Boxes drawn as rect + text; arrows as lines with arrowheads

    const arrow = (x1, y1, x2, y2, key) => (
      <g key={key}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={RULE} strokeWidth="1.5" markerEnd="url(#arr)" />
      </g>
    );

    const box = (x, y, w, h, label, sub, bgFill, key) => (
      <g key={key}>
        <rect x={x} y={y} width={w} height={h} rx="6" fill={bgFill || WALL} stroke={RULE} strokeWidth="1.2" />
        <text {...T(x + w / 2, y + (sub ? h / 2 - 2 : h / 2 + 5), 12, { fontWeight: 600 })}>{label}</text>
        {sub && <text {...T(x + w / 2, y + h / 2 + 14, 10.5, { fill: SOFT })}>{sub}</text>}
      </g>
    );

    return (
      <svg {...svgProps("0 0 620 520")}>
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill={RULE} />
          </marker>
        </defs>

        <text {...T(310, 20, 13.5, { fill: INK, fontWeight: 700 })}>Adrenal Incidentaloma — Workup Algorithm</text>

        {/* Discovery */}
        {box(205, 34, 210, 36, "Adrenal mass", "found on CT / MRI", ASOFT, "disc")}
        {arrow(310, 70, 310, 98, "a1")}

        {/* Functional screen — always */}
        {box(150, 98, 320, 44, "Hormonal screen", "metanephrines · DST · K⁺/aldosterone", WALL, "func")}
        {arrow(310, 142, 310, 168, "a2")}

        {/* Functional positive? */}
        {box(150, 168, 320, 34, "Functional?", undefined, LUMEN, "fq")}

        {/* Yes → treat */}
        {arrow(150, 185, 96, 185, "ay")}
        {arrow(96, 185, 96, 240, "ayb")}
        {box(16, 240, 160, 68,
          "Resect (lap.)",
          "Phaeochro. · Conn's · Cushing's",
          ASOFT, "res1")}

        {/* No → size / imaging */}
        {arrow(470, 185, 524, 185, "an")}
        {arrow(524, 185, 524, 240, "anb")}

        {/* Size + imaging criteria */}
        {box(150, 220, 320, 34, "Assess imaging features", undefined, WALL, "imgq")}
        {arrow(310, 254, 310, 280, "a3")}

        {/* CT HU criteria */}
        {box(16, 280, 186, 72,
          "HU ≤ 10, < 4 cm",
          "Likely adenoma → surveillance",
          LUMEN, "hube")}

        {box(218, 280, 186, 72,
          "HU > 10 / > 4 cm",
          "Chemical shift MRI or washout CT",
          ASOFT, "husus")}

        {box(420, 280, 184, 72,
          "Size ≥ 6 cm",
          "Adrenalectomy (ACC ~25%)",
          ACCENT, "huge")}

        {/* Bottom arrows */}
        {arrow(109, 352, 109, 390, "b1")}
        {arrow(311, 352, 311, 390, "b2")}
        {arrow(512, 352, 512, 390, "b3")}

        {box(30, 390, 158, 36, "Surveillance imaging", "repeat at 6–12 months × 2 yrs", LUMEN, "surv")}
        {box(218, 390, 186, 36, "Chem. shift / surgery", "if indeterminate", WALL, "chems")}
        {box(420, 390, 184, 36, "Laparoscopic adrenalectomy", undefined, ASOFT, "lap")}

        {/* Growth note */}
        <text x={30} y={448} fontSize={10.5} fill={SOFT} textAnchor="start">
          Growth &gt; 1 cm/yr on follow-up → resect regardless of HU
        </text>
        <text x={30} y={462} fontSize={10.5} fill={SOFT} textAnchor="start">
          DST = 1 mg overnight dexamethasone suppression test  ·  HU = Hounsfield units
        </text>
        <text x={30} y={476} fontSize={10.5} fill={SOFT} textAnchor="start">
          ACC = adrenocortical carcinoma
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MEN1 vs MEN2 organ-involvement map
  // ─────────────────────────────────────────────────────────────────────────
  function MenSyndromesFig() {
    // Two columns: MEN1 (left) and MEN2 (right, subdivided 2A vs 2B)
    // Rows = organ systems. Filled circle = involved; empty = not.

    const MEN1_colour = ACCENT;
    const MEN2A_colour = MUTE;
    const MEN2B_colour = SOFT;

    const rows = [
      { organ: "Pituitary (prolactinoma, GH, ACTH)",    m1: true,  m2a: false, m2b: false },
      { organ: "Parathyroids (PHPT — multiglandular)",  m1: true,  m2a: true,  m2b: false },
      { organ: "Pancreas / duodenum (gastrinoma etc.)", m1: true,  m2a: false, m2b: false },
      { organ: "Thyroid — MTC",                         m1: false, m2a: true,  m2b: true  },
      { organ: "Phaeochromocytoma",                     m1: false, m2a: true,  m2b: true  },
      { organ: "Mucosal neuromas",                      m1: false, m2a: false, m2b: true  },
      { organ: "Marfanoid habitus",                     m1: false, m2a: false, m2b: true  },
      { organ: "Foregut carcinoids",                    m1: true,  m2a: false, m2b: false },
      { organ: "Adrenocortical tumours",                m1: true,  m2a: false, m2b: false },
    ];

    const col = { lbl: 20, m1: 348, m2a: 432, m2b: 516 };
    const rowH = 40, hdrY = 54, y0 = 68;
    const W = 600, totalH = y0 + rows.length * rowH + 72;

    const dot = (x, y, filled, colour) =>
      filled
        ? <circle cx={x} cy={y} r={10} fill={colour} stroke={INK} strokeWidth="1.2" />
        : <circle cx={x} cy={y} r={10} fill="none" stroke={RULE} strokeWidth="1.2" />;

    return (
      <svg {...svgProps(`0 0 ${W} ${totalH}`)}>
        <text {...T(W / 2, 22, 14, { fontWeight: 700 })}>MEN Syndromes — Organ Involvement</text>

        {/* Column headers */}
        <text {...T(col.m1, hdrY, 13, { fontWeight: 700, fill: MEN1_colour })}>MEN 1</text>
        <text {...T((col.m2a + col.m2b) / 2, hdrY - 10, 13, { fontWeight: 700, fill: MEN2A_colour })}>MEN 2</text>
        <text {...T(col.m2a, hdrY + 6, 11, { fill: MEN2A_colour })}>2A</text>
        <text {...T(col.m2b, hdrY + 6, 11, { fill: MEN2B_colour })}>2B</text>

        <line x1={col.lbl} y1={y0 - 2} x2={W - 16} y2={y0 - 2} stroke={RULE} strokeWidth="1" />

        {rows.map((r, i) => {
          const y = y0 + i * rowH + rowH / 2;
          return (
            <g key={i}>
              <rect x={col.lbl} y={y0 + i * rowH} width={W - col.lbl - 16} height={rowH}
                fill={i % 2 === 0 ? LUMEN : WALL} />
              <text x={col.lbl + 8} y={y + 5} fontSize={11.5} fill={INK} textAnchor="start">{r.organ}</text>
              {dot(col.m1,  y, r.m1,  MEN1_colour)}
              {dot(col.m2a, y, r.m2a, MEN2A_colour)}
              {dot(col.m2b, y, r.m2b, MEN2B_colour)}
              <line x1={col.lbl} y1={y0 + (i + 1) * rowH} x2={W - 16} y2={y0 + (i + 1) * rowH}
                stroke={RULE} strokeWidth="0.6" />
            </g>
          );
        })}

        {/* Legend */}
        <circle cx={col.lbl + 10} cy={totalH - 44} r={8} fill={ACCENT} stroke={INK} strokeWidth="1" />
        <text x={col.lbl + 24} y={totalH - 40} fontSize={11} fill={INK} textAnchor="start">Involved</text>
        <circle cx={col.lbl + 100} cy={totalH - 44} r={8} fill="none" stroke={RULE} strokeWidth="1.2" />
        <text x={col.lbl + 114} y={totalH - 40} fontSize={11} fill={INK} textAnchor="start">Not involved</text>
        <text x={col.lbl} y={totalH - 24} fontSize={10} fill={SOFT} textAnchor="start">
          MTC = medullary thyroid carcinoma · PHPT = primary hyperparathyroidism
        </text>
        <text x={col.lbl} y={totalH - 10} fontSize={10} fill={SOFT} textAnchor="start">
          Gene: MEN1 → menin (11q13) · MEN2A/2B → RET (10q11)
        </text>
      </svg>
    );
  }

  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "breast-axillary-levels": {
      title: "Breast quadrants & axillary lymph node levels",
      caption: "The four breast quadrants are defined by lines through the nipple. Axillary nodes are classified by position relative to pectoralis minor: Level I is lateral, Level II is posterior, Level III is medial/infraclavicular. SLNB typically samples Level I–II nodes first.",
      ref: "AJCC Cancer Staging Manual 8th ed. · NICE NG101 Early and Locally Advanced Breast Cancer (2018)",
      render: () => <BreastAxillaryFig />,
    },

    "bethesda-thyroid": {
      title: "Bethesda System for thyroid cytology (ROM ladder)",
      caption: "Six-tier classification of thyroid FNA cytology with risk-of-malignancy (ROM) ranges based on resection-confirmed studies. Category V carries 50–75% ROM and typically warrants near-total thyroidectomy. Category VI is ~97–99% malignant. Category IV (follicular neoplasm) has 15–30% ROM, managed with diagnostic lobectomy.",
      ref: "Cibas ES & Ali SZ. JAMA Oncol 2017;3:1190 · ATA Thyroid Nodule Guidelines 2023",
      render: () => <BethesdaFig />,
    },

    "parathyroid-anatomy": {
      title: "Parathyroid gland embryology & ectopic sites",
      caption: "Superior glands (4th pouch) are constant in position — posterior to the upper thyroid. Inferior glands (3rd pouch, shared with thymus) travel further and are far more variable — they account for ~80% of ectopic glands. Knowledge of ectopic sites is essential for re-operative PHPT surgery.",
      ref: "Weller RO et al. (eds) Gray's Anatomy 42nd ed. · Delellis RA, WHO Parathyroid Tumours 2004",
      render: () => <ParathyroidAnatomyFig />,
    },

    "adrenal-incidentaloma-workup": {
      title: "Adrenal incidentaloma — management algorithm",
      caption: "Functional screen is mandatory in ALL adrenal incidentalomas. HU ≤ 10 on unenhanced CT is the key imaging threshold for adenoma (lipid-rich). Size ≥ 6 cm carries ~25% risk of adrenocortical carcinoma and warrants resection regardless of HU. Growth > 1 cm/year on surveillance is also an indication for surgery.",
      ref: "ESE/ENSAT Adrenal Incidentaloma Guidelines, Eur J Endocrinol 2023 · EAU/EANM 2022",
      render: () => <AdrenalIncidentalomaFig />,
    },

    "men-syndromes-map": {
      title: "MEN1 vs MEN2A vs MEN2B — organ involvement",
      caption: "MEN1 (menin gene, 11q13) classically involves parathyroids, pituitary, and pancreatic/duodenal neuroendocrine tumours. MEN2 (RET proto-oncogene, 10q11) always involves medullary thyroid carcinoma; MEN2A adds phaeochromocytoma and PHPT; MEN2B adds mucosal neuromas and marfanoid habitus but rarely causes PHPT.",
      ref: "Thakker RV et al., J Clin Endocrinol Metab 2012;97:2990 · Wells SA et al., Thyroid 2015;25:567",
      render: () => <MenSyndromesFig />,
    },

  });
})();
