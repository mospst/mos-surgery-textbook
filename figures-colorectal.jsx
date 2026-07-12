// figures-colorectal.jsx — original SVG teaching diagrams for the Colorectal department.
// Rendered inline by the app (offline, theme-aware). Do NOT edit figures.jsx.

(function () {
  const INK   = "var(--ink)";
  const MUTE  = "var(--ink-mute)";
  const SOFT  = "var(--ink-soft)";
  const RULE  = "var(--rule-strong)";
  const ACCENT = "var(--accent)";
  const ASOFT  = "var(--accent-soft)";
  const WALL   = "var(--bg-tint)";
  const LUMEN  = "var(--bg-card)";

  const svgProps = (vb) => ({
    viewBox: vb,
    style: { width: "100%", height: "auto", display: "block" },
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
  });
  const T = (x, y, s, extra) => ({ x, y, fontSize: s, fill: INK, textAnchor: "middle", ...extra });

  // ─────────────────────────────────────────────────────────────────────────
  // Hinchey classification of perforated diverticulitis (I–IV)
  // ─────────────────────────────────────────────────────────────────────────
  function HincheyFig() {
    // Each panel: a schematic sigmoid loop with an abscess or free perforation indicated.
    // ViewBox: 4 panels across, each 160 wide × 200 tall.
    const stages = [
      {
        grade: "I",
        label: "Pericolic abscess",
        desc: "Confined to pericolic / mesenteric fat",
        // abscess: small blob adjacent to colon wall
        drawExtra: (ox) => [
          <ellipse key="abs" cx={ox + 120} cy={105} rx={22} ry={16}
            fill={ASOFT} stroke={ACCENT} strokeWidth="2" strokeDasharray="4 2" />,
          <text key="at" {...T(ox + 120, 102, 9.5, { fill: ACCENT })}>abscess</text>,
        ],
      },
      {
        grade: "II",
        label: "Pelvic abscess",
        desc: "Distant (pelvic / retroperitoneal) abscess",
        drawExtra: (ox) => [
          <ellipse key="abs" cx={ox + 80} cy={170} rx={28} ry={18}
            fill={ASOFT} stroke={ACCENT} strokeWidth="2" strokeDasharray="4 2" />,
          <text key="at" {...T(ox + 80, 167, 9.5, { fill: ACCENT })}>pelvic abscess</text>,
          // dashed tract to colon
          <line key="tr" x1={ox + 80} y1={130} x2={ox + 80} y2={152}
            stroke={ACCENT} strokeWidth="1.5" strokeDasharray="3 3" />,
        ],
      },
      {
        grade: "III",
        label: "Purulent peritonitis",
        desc: "Free rupture of pericolic abscess — no faecal contamination",
        drawExtra: (ox) => {
          const pts = [
            [ox + 30, 55], [ox + 140, 50], [ox + 150, 175], [ox + 20, 180],
          ];
          const d = `M ${pts[0].join(" ")} L ${pts[1].join(" ")} L ${pts[2].join(" ")} L ${pts[3].join(" ")} Z`;
          return [
            <path key="pus" d={d} fill={ASOFT} fillOpacity="0.45"
              stroke={ACCENT} strokeWidth="1.5" strokeDasharray="5 3" />,
            <text key="t" {...T(ox + 88, 80, 9.5, { fill: ACCENT })}>free pus</text>,
          ];
        },
      },
      {
        grade: "IV",
        label: "Faecal peritonitis",
        desc: "Free perforation with faecal contamination — highest mortality",
        drawExtra: (ox) => {
          const pts = [
            [ox + 28, 52], [ox + 142, 48], [ox + 152, 178], [ox + 18, 182],
          ];
          const d = `M ${pts[0].join(" ")} L ${pts[1].join(" ")} L ${pts[2].join(" ")} L ${pts[3].join(" ")} Z`;
          return [
            <path key="fc" d={d} fill={WALL} stroke={ACCENT} strokeWidth="2" strokeDasharray="5 3" />,
            // stool dots
            ...[
              [ox + 55, 90], [ox + 110, 75], [ox + 80, 120], [ox + 125, 140], [ox + 45, 150],
            ].map((p, k) => (
              <circle key={k} cx={p[0]} cy={p[1]} r={5}
                fill={ACCENT} opacity="0.55" />
            )),
            <text key="t" {...T(ox + 88, 165, 9.5, { fill: ACCENT })}>faecal contamination</text>,
          ];
        },
      },
    ];

    const cellW = 165, cellH = 210;
    // Shared sigmoid colon drawing at ox
    const sigmoid = (ox) => {
      const path = `M ${ox + 40} 55 Q ${ox + 130} 55 ${ox + 130} 100
                    Q ${ox + 130} 130 ${ox + 80} 130
                    Q ${ox + 30} 130 ${ox + 30} 160`;
      return [
        // lumen fill
        <path key="lumen" d={path}
          fill="none" stroke={LUMEN} strokeWidth="26" strokeLinecap="round" />,
        // wall
        <path key="wall" d={path}
          fill="none" stroke={RULE} strokeWidth="28" strokeLinecap="round" />,
        <path key="lumen2" d={path}
          fill="none" stroke={LUMEN} strokeWidth="22" strokeLinecap="round" />,
        // perforation mark on stage III/IV handled by drawExtra
      ];
    };

    return (
      <svg {...svgProps(`0 0 ${cellW * 4} ${cellH}`)}>
        {stages.map((s, i) => {
          const ox = i * cellW;
          return (
            <g key={s.grade}>
              {sigmoid(ox)}
              {s.drawExtra(ox)}
              <text {...T(ox + cellW / 2, cellH - 38, 17, { fontWeight: 700, fill: ACCENT })}>
                {`Stage ${s.grade}`}
              </text>
              <text {...T(ox + cellW / 2, cellH - 18, 12.5, { fontWeight: 600 })}>{s.label}</text>
              {i > 0 && (
                <line x1={ox} y1={20} x2={ox} y2={cellH - 10}
                  stroke={RULE} strokeWidth="1" />
              )}
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Goligher grading of haemorrhoids (I–IV)
  // ─────────────────────────────────────────────────────────────────────────
  function GoligherFig() {
    // Sagittal schematic of anal canal. Haemorrhoid bulk shown at different prolapse stages.
    const cellW = 160, cellH = 220;

    // Represents internal haemorrhoid (pink bulge) relative to anal verge line.
    // prolapse: "none" | "in-canal" | "reduces" | "permanent"
    const panel = (ox, grade, title, desc, prolapse) => {
      const analY = 145; // y of anal verge
      const canalTop = 65;

      // canal walls
      const leftX = ox + 50, rightX = ox + 110;

      const haem = () => {
        if (prolapse === "none") {
          // bulge inside canal, visible above verge
          return (
            <ellipse cx={ox + 80} cy={analY - 30} rx={20} ry={14}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
          );
        } else if (prolapse === "in-canal") {
          // larger bulge descending into lower canal
          return (
            <ellipse cx={ox + 80} cy={analY - 14} rx={22} ry={18}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
          );
        } else if (prolapse === "reduces") {
          // protrudes beyond verge
          return (
            <ellipse cx={ox + 80} cy={analY + 18} rx={24} ry={15}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
          );
        } else {
          // permanent prolapse, larger
          return (
            <ellipse cx={ox + 80} cy={analY + 26} rx={28} ry={18}
              fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
          );
        }
      };

      return (
        <g key={grade}>
          {/* canal */}
          <rect x={leftX} y={canalTop} width={rightX - leftX}
            height={analY - canalTop} fill={LUMEN} stroke={RULE} strokeWidth="1.5" />
          {/* anal verge line */}
          <line x1={ox + 28} y1={analY} x2={ox + 132} y2={analY}
            stroke={INK} strokeWidth="2.5" />
          <text {...T(ox + 80, analY + 12, 9, { fill: SOFT })}>anal verge</text>

          {/* haemorrhoid */}
          {haem()}

          {/* dentate line dashed */}
          <line x1={leftX} y1={analY - 40} x2={rightX} y2={analY - 40}
            stroke={SOFT} strokeWidth="1" strokeDasharray="3 3" />
          <text x={rightX + 3} y={analY - 37} fontSize="8.5" fill={SOFT} textAnchor="start">dentate</text>

          {/* grade label */}
          <text {...T(ox + 80, cellH - 32, 18, { fontWeight: 700, fill: ACCENT })}>{`Grade ${grade}`}</text>
          <text {...T(ox + 80, cellH - 12, 12, { fontWeight: 600 })}>{title}</text>

          {grade > 1 && (
            <line x1={ox} y1={12} x2={ox} y2={cellH - 4} stroke={RULE} strokeWidth="1" />
          )}
        </g>
      );
    };

    return (
      <svg {...svgProps(`0 0 ${cellW * 4} ${cellH}`)}>
        {panel(cellW * 0, 1, "No prolapse",          "", "none")}
        {panel(cellW * 1, 2, "Reduces spontaneously","", "in-canal")}
        {panel(cellW * 2, 3, "Manual reduction",     "", "reduces")}
        {panel(cellW * 3, 4, "Permanently prolapsed","", "permanent")}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Parks classification of anal fistula
  // ─────────────────────────────────────────────────────────────────────────
  function ParksFistulaFig() {
    // Cross-section of anal canal showing 4 fistula tracks relative to
    // internal sphincter (IS) and external sphincter (ES).
    // Layout: 4 panels, each 160 × 220.
    const cellW = 165, cellH = 220;

    // Concentric ellipse cross-section drawing helpers.
    // Centre of canal cross-section in panel:
    const cx0 = (ox) => ox + 82;
    const cy0 = 105;
    const isR = 30; // internal sphincter radius
    const esR = 52; // external sphincter outer radius

    const crossSection = (ox) => {
      const cx = cx0(ox);
      return [
        // lumen
        <ellipse key="lumen" cx={cx} cy={cy0} rx={14} ry={14}
          fill={LUMEN} stroke={RULE} strokeWidth="1" />,
        // internal sphincter band
        <ellipse key="is" cx={cx} cy={cy0} rx={isR} ry={isR}
          fill={WALL} stroke={INK} strokeWidth="2" />,
        <ellipse key="lumen2" cx={cx} cy={cy0} rx={14} ry={14}
          fill={LUMEN} stroke={RULE} strokeWidth="1" />,
        // external sphincter band
        <ellipse key="es-outer" cx={cx} cy={cy0} rx={esR} ry={esR}
          fill="none" stroke={INK} strokeWidth="3" />,
        // inter-sphincteric space (shading between IS and ES)
        <ellipse key="intersphinc" cx={cx} cy={cy0} rx={esR - 10} ry={esR - 10}
          fill={WALL} fillOpacity="0.4" stroke="none" />,
        <ellipse key="is2" cx={cx} cy={cy0} rx={isR} ry={isR}
          fill={WALL} stroke={INK} strokeWidth="2" />,
        <ellipse key="lumen3" cx={cx} cy={cy0} rx={14} ry={14}
          fill={LUMEN} />,
        // Labels
        <text key="l-lumen" {...T(cx, cy0 + 5, 8.5, { fill: SOFT })}>lumen</text>,
        <text key="l-is" x={cx + isR + 3} y={cy0 - 3} fontSize="8" fill={INK}
          textAnchor="start">IS</text>,
        <text key="l-es" x={cx + esR + 3} y={cy0 - 3} fontSize="8" fill={INK}
          textAnchor="start">ES</text>,
      ];
    };

    const panels = [
      {
        name: "Intersphincteric",
        desc: "~70% of fistulas",
        // track stays between IS and ES, exits at perianal skin below ES
        pathFn: (cx, cy) => `M ${cx + 14} ${cy} L ${cx + isR + 5} ${cy} L ${cx + isR + 8} ${cy + 50}`,
        extDot: (cx, cy) => [cx + isR + 8, cy + 55],
      },
      {
        name: "Transsphincteric",
        desc: "~25% of fistulas",
        pathFn: (cx, cy) => `M ${cx + 14} ${cy} L ${cx + isR + 5} ${cy - 12} L ${cx + esR + 14} ${cy - 26}`,
        extDot: (cx, cy) => [cx + esR + 16, cy - 30],
      },
      {
        name: "Suprasphincteric",
        desc: "Uncommon",
        pathFn: (cx, cy) => `M ${cx + 14} ${cy} L ${cx + 4} ${cy - 42} L ${cx + esR + 10} ${cy - 50} L ${cx + esR + 14} ${cy + 30}`,
        extDot: (cx, cy) => [cx + esR + 15, cy + 36],
      },
      {
        name: "Extrasphincteric",
        desc: "Rare; high incontinence risk",
        pathFn: (cx, cy) => `M ${cx} ${cy - 14} L ${cx - 12} ${cy - 72} L ${cx + esR + 18} ${cy - 68} L ${cx + esR + 20} ${cy + 30}`,
        extDot: (cx, cy) => [cx + esR + 20, cy + 37],
      },
    ];

    return (
      <svg {...svgProps(`0 0 ${cellW * 4} ${cellH}`)}>
        {/* Header row */}
        <text {...T(cellW * 2, 16, 11, { fill: SOFT })}>IS = internal sphincter · ES = external sphincter</text>
        {panels.map((p, i) => {
          const ox = i * cellW;
          const cx = cx0(ox);
          const [exX, exY] = p.extDot(cx, cy0);
          return (
            <g key={p.name}>
              {i > 0 && (
                <line x1={ox} y1={12} x2={ox} y2={cellH - 4}
                  stroke={RULE} strokeWidth="1" />
              )}
              {crossSection(ox)}
              <path d={p.pathFn(cx, cy0)}
                fill="none" stroke={ACCENT} strokeWidth="3"
                strokeDasharray="6 3" strokeLinecap="round" />
              {/* internal opening */}
              <circle cx={cx + 14} cy={cy0} r={4.5} fill={ACCENT} />
              {/* external opening */}
              <circle cx={exX} cy={exY} r={4.5} fill={ACCENT} />
              <text {...T(ox + 82, cellH - 32, 12, { fontWeight: 700 })}>{p.name}</text>
              <text {...T(ox + 82, cellH - 14, 10, { fill: SOFT })}>{p.desc}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Haggitt levels — malignant pedunculated polyp submucosal invasion
  // ─────────────────────────────────────────────────────────────────────────
  function HaggittFig() {
    // Single schematic of a pedunculated polyp in cross-section showing
    // 4 invasion levels + the sessile lesion level 4 equivalence note.
    // ViewBox 560 × 300
    const vw = 560, vh = 310;
    const cx = 280;

    // Bowel wall: submucosa band runs across the figure
    const wallTop = 210, wallH = 40;
    const smTop = wallTop - 55, smH = 55; // submucosa above muscularis

    // Muscularis propria band
    const mpTop = wallTop, mpH = wallH;

    // Stalk of pedunculated polyp
    const stalkBase = smTop;
    const stalkTop = smTop - 90;
    const headCy = stalkTop - 34;
    const headRx = 74, headRy = 50;

    // Dashed invasion-depth lines at Haggitt Levels 1–4
    const levels = [
      { lv: 1, y: headCy + 12,  note: "Head" },
      { lv: 2, y: headCy + headRy - 8, note: "Neck" },
      { lv: 3, y: stalkTop + 30, note: "Stalk" },
      { lv: 4, y: smTop + smH - 6, note: "Bowel-wall SM" },
    ];

    return (
      <svg {...svgProps(`0 0 ${vw} ${vh}`)}>
        {/* Muscularis propria */}
        <rect x={40} y={mpTop} width={vw - 80} height={mpH}
          fill={WALL} stroke={RULE} strokeWidth="1.5" />
        <text x={48} y={mpTop + mpH / 2 + 5} fontSize="12" fill={SOFT}>Muscularis propria</text>

        {/* Submucosa */}
        <rect x={40} y={smTop} width={vw - 80} height={smH}
          fill={LUMEN} stroke={RULE} strokeWidth="1.5" />
        <text x={48} y={smTop + smH / 2 + 5} fontSize="12" fill={SOFT}>Submucosa</text>

        {/* Mucosa layer (thin strip above submucosa) */}
        <rect x={40} y={smTop - 14} width={vw - 80} height={14}
          fill={ASOFT} stroke={RULE} strokeWidth="1" />
        <text x={48} y={smTop - 3} fontSize="10" fill={SOFT}>Mucosa</text>

        {/* Stalk */}
        <rect x={cx - 14} y={stalkTop} width={28} height={stalkBase - stalkTop}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2" rx="4" />

        {/* Head of polyp */}
        <ellipse cx={cx} cy={headCy} rx={headRx} ry={headRy}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
        <text {...T(cx, headCy, 12, { fill: INK, fontWeight: 600 })}>Polyp head</text>

        {/* Level markers */}
        {levels.map(({ lv, y, note }) => {
          const lineX1 = cx + headRx + 10, lineX2 = vw - 90;
          return (
            <g key={lv}>
              <line x1={40} y1={y} x2={cx + headRx + 6} y2={y}
                stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
              <line x1={lineX1} y1={y} x2={lineX2} y2={y}
                stroke={ACCENT} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
              <text x={lineX2 + 4} y={y + 4} fontSize="12" fill={ACCENT}
                fontWeight="700" textAnchor="start">{`L${lv}`}</text>
              <text x={lineX2 + 20} y={y + 4} fontSize="10" fill={SOFT}
                textAnchor="start">{note}</text>
            </g>
          );
        })}

        {/* Sessile note — kept short */}
        <text {...T(cx, vh - 20, 11, { fill: SOFT })}>Sessile lesion = Level 4</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Anal canal zones & dentate line (for anal cancer staging / anatomy)
  // ─────────────────────────────────────────────────────────────────────────
  function AnalCanalZonesFig() {
    // Sagittal schematic of the anal canal with zones labelled.
    // vw=560, vh=320
    const vw = 560, vh = 320;

    // Y coordinates (top = proximal / rectum)
    const rectumBottom = 70;
    const anorectalJunction = 100; // dentate line proxy
    const dentate = 165;
    const analVerge = 250;
    const skinEnd = 290;

    const leftX = 170, rightX = 390;

    // Zones as coloured bands between those Y coordinates
    const zones = [
      { label: "Rectum", y1: 30, y2: rectumBottom, fill: LUMEN, textY: 56 },
      { label: "Anal canal — above dentate line", sublabel: "columnar/transitional epithelium",
        y1: rectumBottom, y2: dentate, fill: ASOFT, textY: 130 },
      { label: "Anal canal — below dentate line", sublabel: "squamous epithelium",
        y1: dentate, y2: analVerge, fill: WALL, textY: 207 },
      { label: "Anal margin / perianal skin", sublabel: "keratinised squamous",
        y1: analVerge, y2: skinEnd, fill: LUMEN, textY: 272 },
    ];

    return (
      <svg {...svgProps(`0 0 ${vw} ${vh}`)}>
        <text {...T(vw / 2, 16, 14, { fontWeight: 700 })}>Anal canal zones & dentate line</text>

        {zones.map((z, i) => (
          <g key={i}>
            <rect x={leftX} y={z.y1} width={rightX - leftX} height={z.y2 - z.y1}
              fill={z.fill} stroke={RULE} strokeWidth="1" />
            <text {...T(vw / 2, z.textY - (z.sublabel ? 8 : 0), 12.5, { fontWeight: 600 })}>{z.label}</text>
            {z.sublabel && (
              <text {...T(vw / 2, z.textY + 10, 10.5, { fill: SOFT })}>{z.sublabel}</text>
            )}
          </g>
        ))}

        {/* Dentate line annotation */}
        <line x1={leftX - 60} y1={dentate} x2={rightX + 60} y2={dentate}
          stroke={ACCENT} strokeWidth="2.5" />
        <text x={rightX + 65} y={dentate + 5} fontSize="12" fill={ACCENT}
          fontWeight="700" textAnchor="start">Dentate line</text>

        {/* Anal verge annotation */}
        <line x1={leftX - 40} y1={analVerge} x2={rightX + 40} y2={analVerge}
          stroke={INK} strokeWidth="2" strokeDasharray="5 3" />
        <text x={rightX + 45} y={analVerge + 5} fontSize="11" fill={INK}
          textAnchor="start">Anal verge</text>

        {/* Bracket: total anal canal length */}
        <line x1={leftX - 20} y1={rectumBottom} x2={leftX - 20} y2={analVerge}
          stroke={MUTE} strokeWidth="1.5" />
        <line x1={leftX - 20} y1={rectumBottom} x2={leftX - 10} y2={rectumBottom}
          stroke={MUTE} strokeWidth="1.5" />
        <line x1={leftX - 20} y1={analVerge} x2={leftX - 10} y2={analVerge}
          stroke={MUTE} strokeWidth="1.5" />
        <text x={leftX - 22} y={(rectumBottom + analVerge) / 2 + 4}
          fontSize="10" fill={SOFT} textAnchor="end">~4 cm</text>

        {/* Lymphatic drainage annotation */}
        <text {...T(vw / 2, vh - 18, 10.5, { fill: SOFT })}>
          Above dentate → inferior mesenteric/internal iliac nodes; Below → inguinal nodes
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Volvulus schematic — sigmoid coffee-bean vs caecal
  // ─────────────────────────────────────────────────────────────────────────
  function VolvulusSchematicFig() {
    // Two side-by-side radiographic schematics.
    const vw = 560, vh = 280;
    const halfW = vw / 2;

    // ── Left panel: Sigmoid coffee-bean sign ──
    const SigmoidPanel = () => {
      const pcx = halfW / 2, pcy = 130;
      // Coffee-bean = two parallel large loops pointing towards RUQ
      // Outer bean shape
      return (
        <g>
          <text {...T(pcx, 22, 13, { fontWeight: 700 })}>Sigmoid volvulus</text>
          <text {...T(pcx, 38, 10.5, { fill: SOFT })}>"Coffee-bean" / omega loop</text>
          {/* left loop */}
          <ellipse cx={pcx - 28} cy={pcy} rx={40} ry={74}
            fill={LUMEN} stroke={INK} strokeWidth="2.5" />
          {/* right loop */}
          <ellipse cx={pcx + 28} cy={pcy} rx={40} ry={74}
            fill={LUMEN} stroke={INK} strokeWidth="2.5" />
          {/* central "crease" line — the folded wall between the two loops */}
          <line x1={pcx} y1={pcy - 68} x2={pcx} y2={pcy + 68}
            stroke={INK} strokeWidth="3" />
          {/* Haustra marks on left loop */}
          {[-40, -10, 20, 50].map((dy, k) => (
            <line key={k} x1={pcx - 64} y1={pcy + dy} x2={pcx - 54} y2={pcy + dy}
              stroke={INK} strokeWidth="1.5" />
          ))}
          {/* Haustra marks on right loop */}
          {[-40, -10, 20, 50].map((dy, k) => (
            <line key={k} x1={pcx + 54} y1={pcy + dy} x2={pcx + 64} y2={pcy + dy}
              stroke={INK} strokeWidth="1.5" />
          ))}
          {/* twist point at pelvis */}
          <ellipse cx={pcx} cy={pcy + 82} rx={22} ry={10}
            fill={WALL} stroke={ACCENT} strokeWidth="2" />
          <text {...T(pcx, pcy + 96, 9.5, { fill: ACCENT })}>twist / LLQ</text>
          {/* directional arrow: RUQ — placed above the bean loops, clear of subtitle */}
          <text {...T(pcx, pcy - 76, 10, { fill: SOFT })}>↑ points to RUQ</text>
          {/* label */}
          <text {...T(pcx, vh - 12, 11, { fill: SOFT })}>Dilated loop to right upper quadrant</text>
        </g>
      );
    };

    // ── Right panel: Caecal volvulus ──
    const CaecalPanel = () => {
      const pcx = halfW + halfW / 2, pcy = 130;
      return (
        <g>
          <line x1={halfW} y1={10} x2={halfW} y2={vh - 10}
            stroke={RULE} strokeWidth="1.5" />
          <text {...T(pcx, 22, 13, { fontWeight: 700 })}>Caecal volvulus</text>
          <text {...T(pcx, 38, 10.5, { fill: SOFT })}>AXR: kidney-shaped loop — LUQ</text>

          {/* Single large kidney/bean shape displaced to LUQ */}
          <path d={`M ${pcx - 10} ${pcy - 80}
                    C ${pcx + 70} ${pcy - 90} ${pcx + 80} ${pcy + 40} ${pcx + 10} ${pcy + 80}
                    C ${pcx - 40} ${pcy + 90} ${pcx - 70} ${pcy + 20} ${pcx - 60} ${pcy - 30}
                    C ${pcx - 55} ${pcy - 70} ${pcx - 40} ${pcy - 76} ${pcx - 10} ${pcy - 80} Z`}
            fill={LUMEN} stroke={INK} strokeWidth="2.5" />
          {/* Internal gas pattern lines */}
          {[-40, -10, 20, 50].map((dy, k) => (
            <line key={k} x1={pcx - 30} y1={pcy + dy} x2={pcx + 40} y2={pcy + dy}
              stroke={INK} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.6" />
          ))}
          {/* twist point RLQ */}
          <ellipse cx={pcx + 30} cy={pcy + 90} rx={18} ry={9}
            fill={WALL} stroke={ACCENT} strokeWidth="2" />
          <text {...T(pcx + 30, pcy + 104, 9.5, { fill: ACCENT })}>twist / RLQ</text>
          {/* Empty RLQ note */}
          <text x={pcx - 45} y={pcy + 50} fontSize="9.5" fill={SOFT}
            textAnchor="middle">empty RLQ fossa</text>
          <text {...T(pcx, vh - 12, 11, { fill: SOFT })}>Absent caecum in right iliac fossa</text>
        </g>
      );
    };

    return (
      <svg {...svgProps(`0 0 ${vw} ${vh}`)}>
        <SigmoidPanel />
        <CaecalPanel />
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Colonic resections & vascular ligation
  // ─────────────────────────────────────────────────────────────────────────
  function ColonicResectionExtentsFig() {
    // Shared colon centreline, defined as named segments so the same
    // coordinates drive both the full-size anatomy map and the scaled-down
    // resection-extent panels below (via a <g transform="... scale(...)">).
    const seg = {
      ileum:      "M 548 318 L 508 302",
      ascending:  "M 497 288 L 497 120",
      hepaticFx:  "M 497 120 Q 495 64 445 60",
      transProx:  "M 445 60 Q 385 84 320 84",
      transDist:  "M 320 84 Q 255 84 195 60",
      splenicFx:  "M 195 60 Q 145 64 140 120",
      descending: "M 140 120 L 140 266",
      sigmoid:    "M 140 266 Q 111 300 155 313 Q 206 327 234 300",
      rectum:     "M 234 300 L 259 336",
    };
    const order = ["ascending", "hepaticFx", "transProx", "transDist", "splenicFx", "descending", "sigmoid", "rectum"];
    const fullPath = order.map((k) => seg[k]).join(" ");

    // Triple-stroke "tube" look — matches the Hinchey sigmoid technique already in this file.
    const tube = (d, key, w1, w2, w3) => [
      <path key={key + "a"} d={d} fill="none" stroke={LUMEN} strokeWidth={w1} strokeLinecap="round" />,
      <path key={key + "b"} d={d} fill="none" stroke={RULE} strokeWidth={w2} strokeLinecap="round" />,
      <path key={key + "c"} d={d} fill="none" stroke={LUMEN} strokeWidth={w3} strokeLinecap="round" />,
    ];

    // ── Anatomy map (top): colon frame + named SMA / IMA branches ──
    const AnatomyMap = () => (
      <g>
        <text {...T(320, 16, 13.5, { fontWeight: 700 })}>Named vessels &amp; colon segments</text>

        {tube(fullPath, "wall", 19, 21, 15)}
        {tube(seg.ileum, "ileumT", 11, 13, 9)}
        <ellipse cx={500} cy={296} rx={15} ry={12} fill={LUMEN} stroke={RULE} strokeWidth={10} />

        {/* segment labels */}
        <text x={508} y={205} fontSize="10.5" fill={SOFT} textAnchor="start">Ascending</text>
        <text x={132} y={205} fontSize="10.5" fill={SOFT} textAnchor="end">Descending</text>
        <text {...T(478, 44, 9.5, { fill: SOFT })}>Hepatic flexure</text>
        <text {...T(320, 34, 11, { fill: SOFT, fontWeight: 600 })}>Transverse colon</text>
        <text {...T(163, 44, 9.5, { fill: SOFT })}>Splenic flexure</text>
        <text {...T(500, 326, 9.5, { fill: SOFT })}>Caecum</text>
        <text x={552} y={302} fontSize="9" fill={SOFT} textAnchor="start">Term.</text>
        <text x={552} y={313} fontSize="9" fill={SOFT} textAnchor="start">ileum</text>
        <text {...T(246, 355, 9.5, { fill: SOFT })}>Sigmoid</text>
        <text x={266} y={340} fontSize="9" fill={SOFT} textAnchor="start">Rectum</text>

        {/* Aorta stub */}
        <rect x={288} y={352} width={18} height={100} rx={4} fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text x={282} y={406} fontSize="10" fill={SOFT} textAnchor="end">Aorta</text>

        {/* SMA trunk + branches */}
        <path d="M 297 352 Q 370 300 418 262" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        <text x={352} y={288} fontSize="9.5" fill={INK} fontWeight="700" textAnchor="middle">SMA</text>
        <line x1={418} y1={262} x2={487} y2={290} stroke={INK} strokeWidth="2" />
        <line x1={418} y1={262} x2={497} y2={178} stroke={INK} strokeWidth="2" />
        <line x1={418} y1={262} x2={348} y2={82} stroke={INK} strokeWidth="2" />
        <circle cx={418} cy={262} r={3} fill={INK} />
        <text x={472} y={286} fontSize="9.5" fill={INK} textAnchor="end">Ileocolic a.</text>
        <text x={470} y={170} fontSize="9.5" fill={INK} textAnchor="end">Right colic a.</text>
        <text x={343} y={70} fontSize="9.5" fill={INK} textAnchor="middle">Middle colic a.</text>

        {/* IMA trunk + sequential branches (shows high-tie vs low-tie) */}
        <path d="M 297 452 L 245 405" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 245 405 L 205 362" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        <path d="M 205 362 L 250 322" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
        <text x={297} y={467} fontSize="9.5" fill={INK} fontWeight="700" textAnchor="middle">IMA</text>
        <circle cx={245} cy={405} r={3} fill={INK} />
        <line x1={245} y1={405} x2={144} y2={205} stroke={INK} strokeWidth="2" />
        <text x={219} y={288} fontSize="9.5" fill={INK} textAnchor="start">Left colic a.</text>
        <circle cx={205} cy={362} r={3} fill={INK} />
        <line x1={205} y1={362} x2={166} y2={313} stroke={INK} strokeWidth="2" />
        <text x={178} y={347} fontSize="9" fill={INK} textAnchor="start">Sigmoidal aa.</text>
        <text x={233} y={349} fontSize="9" fill={INK} textAnchor="start">Superior rectal a.</text>

        {/* High tie / low tie markers */}
        <circle cx={289} cy={445} r={5} fill={ACCENT} stroke={INK} strokeWidth="1" />
        <text x={265} y={434} fontSize="9.5" fill={ACCENT} fontWeight="700" textAnchor="end">High tie</text>
        <text x={265} y={447} fontSize="8.5" fill={SOFT} textAnchor="end">(at aortic origin)</text>
        <circle cx={235} cy={394} r={5} fill={ACCENT} stroke={INK} strokeWidth="1" />
        <text x={207} y={383} fontSize="9.5" fill={ACCENT} fontWeight="700" textAnchor="end">Low tie</text>
        <text x={207} y={396} fontSize="8.5" fill={SOFT} textAnchor="end">(distal to left colic)</text>
      </g>
    );

    // ── Resection-extent panels (bottom): 4 mini colons, shared shape, scaled ──
    const ops = [
      {
        name: "Right hemicolectomy", nameSize: 12,
        resect: ["Term. ileum → hepatic flexure"],
        vessels: ["Ileocolic + right colic"],
        highlight: [seg.ileum, seg.ascending, seg.hepaticFx],
        margins: [[548, 318], [445, 60]],
      },
      {
        name: "Extended right hemi.", nameSize: 11,
        resect: ["Term. ileum → distal transv."],
        vessels: ["Ileocolic + right colic +", "middle colic at root"],
        highlight: [seg.ileum, seg.ascending, seg.hepaticFx, seg.transProx, seg.transDist],
        margins: [[548, 318], [195, 60]],
      },
      {
        name: "Left hemicolectomy", nameSize: 12,
        resect: ["Distal transverse/splenic", "flexure → descending"],
        vessels: ["Left colic ± IMA at root"],
        highlight: [seg.transDist, seg.splenicFx, seg.descending],
        margins: [[320, 84], [140, 266]],
      },
      {
        name: "Sigmoid colectomy", nameSize: 12,
        resect: ["Sigmoid colon"],
        vessels: ["Sigmoidal + sup. rectal aa."],
        note: "± high or low tie (IMA)",
        highlight: [seg.sigmoid, seg.rectum],
        margins: [[140, 266], [259, 336]],
      },
    ];

    const panelW = 160, panelsY = 500;
    const scale = 0.30; // shrinks the ~437×276 colon shape to fit a 160-wide panel column

    const Panel = (op, i) => {
      const ox = i * panelW;
      return (
        <g key={op.name}>
          {i > 0 && <line x1={ox} y1={panelsY - 8} x2={ox} y2={710} stroke={RULE} strokeWidth="1" />}
          <g transform={`translate(${ox - 19} ${panelsY - 7}) scale(${scale})`}>
            {/* grey context (full colon, incl. terminal ileum + caecum) */}
            <path d={fullPath} fill="none" stroke={RULE} strokeWidth={9} strokeLinecap="round" />
            <path d={seg.ileum} fill="none" stroke={RULE} strokeWidth={9} strokeLinecap="round" />
            <circle cx={500} cy={296} r={15} fill="none" stroke={RULE} strokeWidth={9} />
            {/* resected span, highlighted */}
            {op.highlight.map((d, k) => (
              <path key={k} d={d} fill="none" stroke={ACCENT} strokeWidth={13} strokeLinecap="round" />
            ))}
            {/* transection margins */}
            {op.margins.map(([mx, my], k) => (
              <circle key={k} cx={mx} cy={my} r={9} fill={INK} stroke={LUMEN} strokeWidth={3} />
            ))}
          </g>
          <text {...T(ox + panelW / 2, panelsY + 108, op.nameSize, { fontWeight: 700 })}>{op.name}</text>
          {op.resect.map((line, k) => (
            <text key={"r" + k} {...T(ox + panelW / 2, panelsY + 124 + k * 13, 9, { fill: SOFT })}>{line}</text>
          ))}
          {op.vessels.map((line, k) => (
            <text key={"v" + k} {...T(ox + panelW / 2, panelsY + 124 + op.resect.length * 13 + 4 + k * 13, 9, { fill: ACCENT, fontWeight: 600 })}>{line}</text>
          ))}
          {op.note && (
            <text {...T(ox + panelW / 2, panelsY + 124 + op.resect.length * 13 + 4 + op.vessels.length * 13 + 14, 8.5, { fill: SOFT })}>{op.note}</text>
          )}
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 640 700")}>
        <AnatomyMap />
        <line x1={0} y1={482} x2={640} y2={482} stroke={RULE} strokeWidth="1" strokeDasharray="4 4" />
        <text {...T(320, 500 - 8, 12.5, { fontWeight: 700 })}>Resection extent by operation</text>
        {ops.map((op, i) => Panel(op, i))}
        <text {...T(320, 692, 10, { fill: SOFT })}>
          Grey = whole colon &middot; thick accent = resected segment &middot; dark dots = transection margins
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Rectal prolapse — perineal vs abdominal repair options
  // ─────────────────────────────────────────────────────────────────────────
  function RectalProlapseRepairsFig() {
    // Shared "prolapsed rectum" motif: a short canal above the verge and a
    // telescoped (concentric-ringed) tube protruding below it.
    const prolapse = (ox, cy, key) => {
      const verge = cy;
      return (
        <g key={key}>
          <rect x={ox - 16} y={verge - 46} width={32} height={46} fill={LUMEN} stroke={RULE} strokeWidth="1.3" />
          <line x1={ox - 34} y1={verge} x2={ox + 34} y2={verge} stroke={INK} strokeWidth="2" />
          <path d={`M ${ox - 30} ${verge} Q ${ox - 40} ${verge + 66} ${ox} ${verge + 78} Q ${ox + 40} ${verge + 66} ${ox + 30} ${verge}`}
            fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
          <path d={`M ${ox - 17} ${verge + 38} Q ${ox} ${verge + 50} ${ox + 17} ${verge + 38}`}
            fill="none" stroke={ACCENT} strokeWidth="1.3" opacity="0.7" />
          <path d={`M ${ox - 9} ${verge + 58} Q ${ox} ${verge + 65} ${ox + 9} ${verge + 58}`}
            fill="none" stroke={ACCENT} strokeWidth="1.3" opacity="0.7" />
        </g>
      );
    };

    // ── Left: perineal options ──
    const Altemeier = (ox) => {
      const verge = 96;
      return (
        <g key="alt">
          {prolapse(ox, verge, "alt-shape")}
          {/* full-thickness transection near the base */}
          <line x1={ox - 32} y1={verge + 8} x2={ox + 32} y2={verge + 8} stroke={ACCENT} strokeWidth="2" strokeDasharray="5 3" />
          {[-24, -8, 8, 24].map((d, k) => (
            <line key={k} x1={ox + d} y1={verge + 3} x2={ox + d} y2={verge + 13} stroke={ACCENT} strokeWidth="1.6" />
          ))}
          <text {...T(ox, verge + 100, 12, { fontWeight: 700 })}>Altemeier's</text>
          <text {...T(ox, verge + 116, 9, { fill: SOFT })}>Full-thickness perineal</text>
          <text {...T(ox, verge + 128, 9, { fill: SOFT })}>rectosigmoidectomy</text>
          <text {...T(ox, verge + 140, 9, { fill: SOFT })}>+ coloanal anastomosis</text>
          <text {...T(ox, verge + 154, 8.5, { fill: ACCENT, fontWeight: 600 })}>Recurrence up to ~20%</text>
        </g>
      );
    };

    const Delorme = (ox) => {
      const verge = 96;
      return (
        <g key="del">
          {prolapse(ox, verge, "del-shape")}
          {/* mucosal sleeve scored just under the surface */}
          <path d={`M ${ox - 22} ${verge + 10} Q ${ox} ${verge + 20} ${ox + 22} ${verge + 10}`}
            fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="4 3" />
          {/* plication pleats lower on the muscular tube */}
          {[0, 1, 2].map((k) => (
            <path key={k} d={`M ${ox - 14 + k * 2} ${verge + 46 + k * 8} l 8 -6 l 8 6`}
              fill="none" stroke={ACCENT} strokeWidth="1.6" />
          ))}
          <text {...T(ox, verge + 100, 12, { fontWeight: 700 })}>Delorme's</text>
          <text {...T(ox, verge + 116, 9, { fill: SOFT })}>Mucosal sleeve resection</text>
          <text {...T(ox, verge + 128, 9, { fill: SOFT })}>+ muscular plication</text>
          <text {...T(ox, verge + 140, 9, { fill: SOFT })}>&nbsp;</text>
          <text {...T(ox, verge + 154, 8.5, { fill: ACCENT, fontWeight: 600 })}>Recurrence ~16–30%</text>
        </g>
      );
    };

    // ── Right: ventral mesh rectopexy ──
    const VentralMesh = () => {
      const ox = 480, topY = 55, botY = 230;
      const rectumPath = `M ${ox} ${topY} Q ${ox + 6} ${(topY + botY) / 2} ${ox - 4} ${botY}`;
      return (
        <g>
          {/* rectum tube */}
          <path d={rectumPath} fill="none" stroke={RULE} strokeWidth="24" strokeLinecap="round" />
          <path d={rectumPath} fill="none" stroke={LUMEN} strokeWidth="18" strokeLinecap="round" />
          <text x={ox + 30} y={(topY + botY) / 2} fontSize="10.5" fill={SOFT} textAnchor="start">Rectum</text>

          {/* sacral promontory fixation point */}
          <circle cx={ox - 70} cy={topY + 6} r={5} fill={WALL} stroke={INK} strokeWidth="1.5" />
          <text x={ox - 78} y={topY - 2} fontSize="9.5" fill={SOFT} textAnchor="end">Sacral</text>
          <text x={ox - 78} y={topY + 10} fontSize="9.5" fill={SOFT} textAnchor="end">promontory</text>

          {/* mesh strip: anterior (ventral) surface only, fixed proximally to the sacral point */}
          <path d={`M ${ox - 65} ${topY + 8} Q ${ox - 40} ${(topY + botY) / 2} ${ox - 18} ${botY - 26}`}
            fill="none" stroke={ACCENT} strokeWidth="7" strokeDasharray="2 3" strokeLinecap="round" opacity="0.85" />
          <text x={ox - 100} y={(topY + botY) / 2 + 10} fontSize="10" fill={ACCENT} fontWeight="700" textAnchor="end">Mesh</text>

          {/* suture marks onto anterior rectal wall */}
          {[0.55, 0.72, 0.88].map((f, k) => {
            const py = topY + (botY - topY) * f;
            return <circle key={k} cx={ox - 12} cy={py} r={2.6} fill={INK} />;
          })}

          <text {...T(ox - 10, botY + 30, 12, { fontWeight: 700 })}>Ventral mesh rectopexy</text>
          <text {...T(ox - 10, botY + 46, 9.5, { fill: SOFT })}>Anterior dissection only —</text>
          <text {...T(ox - 10, botY + 58, 9.5, { fill: SOFT })}>posterior/lateral nerves spared</text>
          <text {...T(ox - 10, botY + 70, 9.5, { fill: SOFT })}>(± sigmoid resection = resection rectopexy)</text>
          <text {...T(ox - 10, botY + 86, 8.5, { fill: ACCENT, fontWeight: 600 })}>Recurrence ~5–15%; best function</text>
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 640 470")}>
        <text {...T(320, 18, 14, { fontWeight: 700 })}>Rectal prolapse — repair options</text>

        <line x1={320} y1={34} x2={320} y2={410} stroke={RULE} strokeWidth="1.3" strokeDasharray="5 4" />

        <text {...T(160, 42, 12.5, { fontWeight: 700 })}>Perineal approach</text>
        <text {...T(160, 57, 10, { fill: SOFT })}>frail / high-risk · avoids laparotomy</text>
        {Altemeier(85)}
        {Delorme(235)}

        <text {...T(480, 42, 12.5, { fontWeight: 700 })}>Abdominal approach</text>
        <text {...T(480, 57, 10, { fill: SOFT })}>fitter patients · lower recurrence</text>
        <VentralMesh />

        <line x1={20} y1={420} x2={620} y2={420} stroke={RULE} strokeWidth="1" />
        <text {...T(320, 438, 10.5, { fill: MUTE })}>Perineal: quicker, better tolerated, but recurs more.</text>
        <text {...T(320, 454, 10.5, { fill: MUTE })}>Abdominal: laparotomy/laparoscopy, but more durable.</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Lynch syndrome universal tumour-screening algorithm
  // ─────────────────────────────────────────────────────────────────────────
  function LynchMmrAlgorithmFig() {
    const arrow = (x1, y1, x2, y2, key) => (
      <line key={key} x1={x1} y1={y1} x2={x2} y2={y2} stroke={RULE} strokeWidth="1.5" markerEnd="url(#cr-lynch-arr)" />
    );

    const box = (x, y, w, h, lines, fill, key, opts) => {
      const cx = x + w / 2;
      const titleSize = (opts && opts.titleSize) || 12;
      const subSize = (opts && opts.subSize) || 9.5;
      const subFill = (opts && opts.subFill) || SOFT;
      const titleFill = (opts && opts.titleFill) || INK;
      const nLines = lines.length - 1;
      const startY = y + h / 2 - (nLines * (subSize + 3.5)) / 2 + 3;
      return (
        <g key={key}>
          <rect x={x} y={y} width={w} height={h} rx="6" fill={fill} stroke={RULE} strokeWidth="1.2" />
          <text {...T(cx, startY, titleSize, { fontWeight: 700, fill: titleFill })}>{lines[0]}</text>
          {lines.slice(1).map((ln, i) => (
            <text key={i} {...T(cx, startY + (i + 1) * (subSize + 3.5), subSize, { fill: subFill })}>{ln}</text>
          ))}
        </g>
      );
    };

    return (
      <svg {...svgProps("0 0 640 545")}>
        <defs>
          <marker id="cr-lynch-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 Z" fill={RULE} />
          </marker>
        </defs>

        <text {...T(320, 16, 13.5, { fontWeight: 700 })}>Lynch syndrome — universal tumour-screening algorithm</text>

        {box(190, 26, 260, 40, ["CRC or endometrial cancer", "newly diagnosed — test all"], ASOFT, "b1")}
        {arrow(320, 66, 320, 84, "a1")}

        {box(160, 84, 320, 46, ["Universal tumour testing", "MMR IHC (MLH1·MSH2·MSH6·PMS2)", "and / or MSI-PCR"], WALL, "b2", { titleSize: 11.5, subSize: 9 })}

        {arrow(320, 130, 320, 147, "a2")}
        {arrow(320, 147, 150, 147, "a2L")}
        {arrow(150, 147, 150, 168, "a2Lb")}
        {arrow(320, 147, 470, 147, "a2R")}
        {arrow(470, 147, 470, 168, "a2Rb")}

        {box(20, 168, 260, 40, ["MLH1 + PMS2 loss", "(~70% of dMMR — often sporadic)"], LUMEN, "b3", { titleSize: 11.5, subSize: 9 })}
        {box(340, 168, 260, 40, ["MSH2 / MSH6 / isolated PMS2 loss", "(rarely sporadic)"], LUMEN, "b6", { titleSize: 11, subSize: 9 })}

        {arrow(150, 208, 150, 226, "a3")}
        {arrow(470, 208, 470, 226, "a6")}

        {box(20, 226, 260, 54, ["Reflex testing", "BRAF V600E mutation and/or", "MLH1 promoter methylation"], WALL, "b4", { titleSize: 11.5, subSize: 9 })}
        {box(340, 226, 260, 54, ["Germline testing", "of the implicated MMR gene", "(no BRAF/methylation reflex needed)"], ASOFT, "b7", { titleSize: 11.5, subSize: 9 })}

        {arrow(150, 280, 150, 296, "a4")}
        {arrow(150, 296, 90, 296, "a4L")}
        {arrow(90, 296, 90, 312, "a4Lb")}
        {arrow(150, 296, 255, 296, "a4R")}
        {arrow(255, 296, 255, 312, "a4Rb")}

        {box(15, 312, 150, 56, ["Likely sporadic", "MLH1 hypermethylation", "— Lynch unlikely"], WALL, "b5a", { titleSize: 11, subSize: 8.5, titleFill: SOFT })}
        <text {...T(90, 380, 8, { fill: SOFT })}>(no further Lynch workup)</text>

        {box(180, 312, 150, 56, ["Germline MLH1", "mutation test", "confirms / excludes"], ASOFT, "b5b", { titleSize: 11, subSize: 8.5 })}

        {arrow(255, 368, 255, 400, "a5")}
        {arrow(255, 400, 295, 400, "a5b")}
        {arrow(295, 400, 295, 430, "a5c")}
        {arrow(470, 280, 470, 400, "a7")}
        {arrow(470, 400, 400, 400, "a7b")}
        {arrow(400, 400, 400, 430, "a7c")}

        {box(180, 430, 280, 54, ["Germline MMR mutation confirmed", "Lynch syndrome — cascade family", "testing + enhanced surveillance"], ASOFT, "b8", { titleSize: 11.5, subSize: 9 })}

        <text {...T(320, 512, 10, { fill: SOFT })}>IHC = immunohistochemistry &middot; MSI = microsatellite instability &middot; dMMR = mismatch-repair deficient</text>
        <text {...T(320, 528, 10, { fill: SOFT })}>~70% of dMMR is sporadic (MLH1 hypermethylation); the rest is germline Lynch syndrome.</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Goodsall's rule — anal fistula external-opening → tract prediction
  // ─────────────────────────────────────────────────────────────────────────
  function GoodsallRuleFig() {
    const cx = 280, cy = 200, r = 42;
    const internalPost = [cx, cy + r]; // posterior-midline internal opening
    const internalAntL = [cx - 26, cy - r + 8];
    const internalAntR = [cx + 26, cy - r + 8];

    const dot = (p, key, fillC) => <circle key={key} cx={p[0]} cy={p[1]} r={4.5} fill={fillC || ACCENT} stroke={INK} strokeWidth="1" />;

    return (
      <svg {...svgProps("0 0 560 420")}>
        <text {...T(280, 18, 13.5, { fontWeight: 700 })}>Goodsall's rule</text>
        <text {...T(280, 34, 10, { fill: SOFT })}>Perineum viewed with patient in lithotomy</text>

        {/* transverse (Goodsall's) line + anus */}
        <line x1={65} y1={cy} x2={495} y2={cy} stroke={INK} strokeWidth="2" strokeDasharray="6 4" />
        <text x={70} y={cy - 8} fontSize="10" fill={MUTE} textAnchor="start">Transverse line</text>

        <circle cx={cx} cy={cy} r={r} fill={LUMEN} stroke={INK} strokeWidth="2.5" />
        <text {...T(cx, cy + 4, 9, { fill: SOFT })}>anus</text>

        <text {...T(cx, 62, 13, { fontWeight: 700 })}>Anterior</text>
        <text {...T(cx, 78, 10, { fill: SOFT })}>short, straight (radial) tract</text>

        <text {...T(cx, 388, 13, { fontWeight: 700 })}>Posterior</text>
        <text {...T(cx, 404, 10, { fill: SOFT })}>curved tract → posterior midline</text>

        {/* anterior: short radial tracts to nearest crypt */}
        {dot([215, 108], "eA1")}
        <line x1={215} y1={108} x2={internalAntL[0]} y2={internalAntL[1]} stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" />
        {dot(internalAntL, "iA1", INK)}

        {dot([345, 108], "eA2")}
        <line x1={345} y1={108} x2={internalAntR[0]} y2={internalAntR[1]} stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" />
        {dot(internalAntR, "iA2", INK)}

        <text x={205} y={98} fontSize="9" fill={SOFT} textAnchor="end">ext. opening</text>

        {/* posterior: curved tracts converge on one posterior-midline crypt */}
        {dot([148, 328], "eP1")}
        <path d={`M 148 328 Q 88 258 ${internalPost[0]} ${internalPost[1]}`} fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" />

        {dot([412, 328], "eP2")}
        <path d={`M 412 328 Q 472 258 ${internalPost[0]} ${internalPost[1]}`} fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" />

        {dot(internalPost, "iPost", INK)}
        <text x={cx} y={cy + r + 24} fontSize="9" fill={SOFT} textAnchor="middle">single posterior crypt</text>

        <text x={145} y={343} fontSize="9" fill={SOFT} textAnchor="middle">ext. opening</text>

        {/* exception: distant anterior opening curving posteriorly */}
        {dot([465, 122], "eEx")}
        <path d={`M 465 122 Q 530 200 ${internalPost[0]} ${internalPost[1]}`} fill="none" stroke={MUTE} strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
        <text x={470} y={108} fontSize="9" fill={MUTE} textAnchor="middle">exception</text>

        <text {...T(280, 372, 9.5, { fill: MUTE })}>
          Exception: an anterior opening far from the verge may still curve posteriorly.
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Peritoneal Cancer Index (PCI) — 13-region tumour-burden map
  // ─────────────────────────────────────────────────────────────────────────
  function PeritonealCancerIndexFig() {
    const cellW = 110, cellH = 85, gx = 60, gy = 50;
    const grid = [
      [{ n: 1, name: "Right upper" }, { n: 2, name: "Epigastrium" }, { n: 3, name: "Left upper" }],
      [{ n: 8, name: "Right flank" }, { n: 0, name: "Central" }, { n: 4, name: "Left flank" }],
      [{ n: 7, name: "Right lower" }, { n: 6, name: "Pelvis" }, { n: 5, name: "Left lower" }],
    ];

    const cell = (row, col, r) => {
      const x = gx + col * cellW, y = gy + row * cellH;
      const isCentral = r.n === 0;
      return (
        <g key={`${row}-${col}`}>
          <rect x={x} y={y} width={cellW} height={cellH} fill={isCentral ? ASOFT : WALL} stroke={RULE} strokeWidth="1.2" />
          <text {...T(x + cellW / 2, y + 38, 21, { fontWeight: 700, fill: ACCENT })}>{r.n}</text>
          <text {...T(x + cellW / 2, y + 60, 10, { fill: SOFT })}>{r.name}</text>
        </g>
      );
    };

    const sbW = 82, sbY = 335, sbH = 62;
    const smallBowel = [
      { n: "9", name: "Upper jejunum" },
      { n: "10", name: "Lower jejunum" },
      { n: "11", name: "Upper ileum" },
      { n: "12", name: "Lower ileum" },
    ];

    const legendRows = [
      { code: "LS-0", desc: "No tumour seen", fill: LUMEN },
      { code: "LS-1", desc: "< 0.5 cm", fill: ASOFT },
      { code: "LS-2", desc: "0.5–5 cm", fill: ACCENT, opacity: 0.55 },
      { code: "LS-3", desc: "> 5 cm or confluent", fill: ACCENT },
    ];

    return (
      <svg {...svgProps("0 0 620 500")}>
        <text {...T(310, 18, 13.5, { fontWeight: 700 })}>Peritoneal Cancer Index — 13 regions</text>
        <text {...T(310, 34, 10, { fill: SOFT })}>Central abdomen (0–8) + small bowel (9–12), each scored by lesion size</text>

        {grid.map((row, r) => row.map((c, ci) => cell(r, ci, c)))}

        <text x={gx} y={sbY - 12} fontSize="11" fill={SOFT} textAnchor="start">Small bowel (proximal → distal)</text>
        {smallBowel.map((b, i) => {
          const x = gx + i * sbW;
          return (
            <g key={b.n}>
              <rect x={x} y={sbY} width={sbW - 6} height={sbH} fill={WALL} stroke={RULE} strokeWidth="1.2" />
              <text {...T(x + (sbW - 6) / 2, sbY + 28, 17, { fontWeight: 700, fill: ACCENT })}>{b.n}</text>
              <text {...T(x + (sbW - 6) / 2, sbY + 48, 9, { fill: SOFT })}>{b.name}</text>
            </g>
          );
        })}

        {/* Lesion-size legend */}
        <text x={430} y={50} fontSize="11.5" fill={INK} fontWeight="700" textAnchor="start">Lesion Size (LS) score</text>
        {legendRows.map((L, i) => {
          const y = 66 + i * 30;
          return (
            <g key={L.code}>
              <rect x={430} y={y} width={18} height={18} fill={L.fill} opacity={L.opacity || 1} stroke={RULE} strokeWidth="1" />
              <text x={456} y={y + 13} fontSize="10.5" fill={INK} fontWeight="600" textAnchor="start">{L.code}</text>
              <text x={492} y={y + 13} fontSize="9.5" fill={SOFT} textAnchor="start">{L.desc}</text>
            </g>
          );
        })}

        <line x1={30} y1={420} x2={590} y2={420} stroke={RULE} strokeWidth="1" />
        <text {...T(310, 442, 11, { fill: MUTE })}>Score all 13 regions 0–3 by Lesion Size, then sum → PCI (maximum 39).</text>
        <text {...T(310, 460, 10, { fill: SOFT })}>Higher PCI = greater tumour burden and lower likelihood of complete cytoreduction.</text>
      </svg>
    );
  }

  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "hinchey-classification": {
      title: "Hinchey classification — perforated diverticulitis",
      caption:
        "Stage I: abscess confined to pericolic/mesenteric fat. Stage II: distant (pelvic/retroperitoneal) abscess. Stage III: free rupture of pericolic abscess — purulent peritonitis, no faecal contamination. Stage IV: free perforation with faecal contamination — highest mortality. Stages I–II are often managed with antibiotics ± percutaneous drainage; laparoscopic lavage may suit selected Stage III. Stage IV requires urgent laparotomy (Hartmann's or primary resection-anastomosis).",
      ref: "Hinchey EJ et al., Adv Surg 1978;12:85 · ASCRS Practice Parameters 2020",
      render: () => <HincheyFig />,
    },

    "goligher-grade": {
      title: "Goligher grading of internal haemorrhoids",
      caption:
        "Grade I: bleeds, does not prolapse. Grade II: prolapses on straining but reduces spontaneously. Grade III: prolapses and requires digital replacement. Grade IV: permanently prolapsed; may be irreducible/strangulated. Grade determines treatment: I–II respond to diet and office procedures (banding, sclerotherapy). Grade III may need banding or haemorrhoidectomy. Grade IV requires operative haemorrhoidectomy or emergency surgery if strangulated.",
      ref: "Goligher JC. Surgery of the Anus, Rectum and Colon, 5th ed. 1984.",
      render: () => <GoligherFig />,
    },

    "parks-anal-fistula": {
      title: "Parks classification of anal fistula",
      caption:
        "Intersphincteric (~70%): track between internal and external sphincter. Transsphincteric (~25%): crosses the external sphincter. Suprasphincteric (uncommon): loops over puborectalis. Extrasphincteric (rare): bypasses both sphincters — highest incontinence risk. Intersphincteric and low transsphincteric tracks can usually be laid open. Suprasphincteric and extrasphincteric tracks require staged seton, LIFT procedure, or advancement flap.",
      ref: "Parks AG et al., Br J Surg 1976;63:1.",
      render: () => <ParksFistulaFig />,
    },

    "haggitt-levels": {
      title: "Haggitt levels — pedunculated malignant polyp",
      caption:
        "L1: invasion into head of polyp. L2: invasion into neck. L3: invasion into stalk at any level. L4: invasion into submucosa of bowel wall itself. Levels 1–3 are favourable for endoscopic cure if margins are clear and there is no lymphovascular invasion or poor differentiation. Level 4 carries ~10% nodal metastasis risk and usually warrants oncological resection. All sessile lesions with submucosal invasion are Level 4 by definition.",
      ref: "Haggitt RC et al., Gastroenterology 1985;89:328.",
      render: () => <HaggittFig />,
    },

    "anal-canal-zones": {
      title: "Anal canal zones & dentate line anatomy",
      caption:
        "The dentate line (pectinate line) marks the embryological junction of endoderm and ectoderm. Above it, mucosa is columnar/transitional and pain-insensitive; below, it is squamous and exquisitely sensitive. Lymphatics drain cranially above the dentate line (to mesenteric/iliac nodes) and to inguinal nodes below — critical for anal cancer staging and spread.",
      ref: "AJCC Cancer Staging Manual 8th ed. · Gordon & Nivatvongs, Principles of Surgery of Colon, Rectum and Anus 3rd ed.",
      render: () => <AnalCanalZonesFig />,
    },

    "volvulus-schematic": {
      title: "Sigmoid vs caecal volvulus — AXR schematic",
      caption:
        "Sigmoid volvulus produces a classic 'coffee-bean' (omega loop) on plain film pointing to the right upper quadrant with the apex above T10; the twist is at the rectosigmoid junction. Caecal volvulus displaces a kidney-shaped gas-filled caecum to the left upper quadrant with an empty right iliac fossa — CT confirms. Urgent colonoscopic detorsion is first-line for sigmoid; caecal volvulus requires operative intervention.",
      ref: "Perrot L et al., J Visc Surg 2016 · ACR Appropriateness Criteria: Large Bowel Obstruction",
      render: () => <VolvulusSchematicFig />,
    },

    "colonic-resection-extents": {
      title: "Colonic resections & vascular ligation",
      caption:
        "Each colectomy is defined by which named vessels are ligated. Right hemicolectomy takes the ileocolic and right colic (± right branch of middle colic) to the hepatic flexure; extended right additionally ligates middle colic at its root to clear the transverse colon. Left hemicolectomy ligates the left colic (± IMA); sigmoid colectomy takes the sigmoidal and superior rectal vessels. For left-sided cancer, 'high tie' (IMA at its aortic origin) gives a wider node harvest than 'low tie' (distal to the left colic origin), which preserves left-colic inflow to the anastomosis.",
      ref: "ASCRS Textbook of Colon & Rectal Surgery, 4th ed. · Netter's Atlas of Human Anatomy",
      render: () => <ColonicResectionExtentsFig />,
    },

    "rectal-prolapse-repairs": {
      title: "Rectal prolapse — perineal vs abdominal repair",
      caption:
        "Perineal repairs (Altemeier's full-thickness rectosigmoidectomy or Delorme's mucosal sleeve resection + plication) avoid a laparotomy and suit frail, high-risk patients, but recur more often. Abdominal repair — ventral mesh rectopexy, with autonomic-nerve-sparing anterior dissection only, ± sigmoid resection — gives the lowest recurrence and best functional outcome but requires a fitter patient. The choice is driven by patient fitness, not prolapse severity.",
      ref: "ASCRS Clinical Practice Guidelines for Rectal Prolapse, Dis Colon Rectum 2017 · D'Hoore A et al., Br J Surg 2004",
      render: () => <RectalProlapseRepairsFig />,
    },

    "lynch-mmr-algorithm": {
      title: "Lynch syndrome — tumour-screening algorithm",
      caption:
        "All new colorectal and endometrial cancers undergo universal testing (MMR immunohistochemistry and/or MSI-PCR). MLH1/PMS2 loss triggers reflex BRAF V600E and/or MLH1-promoter-methylation testing: if either is present the cause is almost always sporadic hypermethylation; if neither is present, germline MLH1 testing follows. Loss of MSH2, MSH6, or isolated PMS2 is rarely sporadic and goes straight to germline testing of the implicated gene. A confirmed germline mutation defines Lynch syndrome and triggers cascade testing of relatives.",
      ref: "NCCN Guidelines: Genetic/Familial High-Risk Assessment — Colorectal · Giardiello FM et al., Gastroenterology 2014",
      render: () => <LynchMmrAlgorithmFig />,
    },

    "goodsall-rule": {
      title: "Goodsall's rule",
      caption:
        "With the anus bisected by an imaginary transverse line, a fistula's external opening predicts its internal opening: anterior openings track in a short, straight (radial) line to the nearest crypt, while posterior openings — even from openings on both sides — curve through a curved tract to a single internal opening at the posterior midline. Exception: an anterior opening more than 3–4 cm from the anal verge may still curve posteriorly, behaving like a posterior tract.",
      ref: "Goodsall DH & Miles WE, Diseases of the Anus and Rectum, 1900 · ASCRS Clinical Practice Guidelines for Anal Fistula, Dis Colon Rectum 2022",
      render: () => <GoodsallRuleFig />,
    },

    "peritoneal-cancer-index": {
      title: "Peritoneal Cancer Index (PCI)",
      caption:
        "The abdomen and pelvis are divided into 13 regions — a central region (0) plus 8 surrounding regions (1–8) mapped like a tic-tac-toe grid, plus 4 small-bowel regions (9–12, proximal jejunum to distal ileum). Each region is scored 0–3 by the size of its largest deposit (Lesion Size: none, <0.5 cm, 0.5–5 cm, or >5 cm/confluent), for a maximum PCI of 39. A higher PCI reflects greater peritoneal tumour burden and a lower likelihood that complete cytoreduction (CC-0/CC-1) is achievable — a key input to patient selection for CRS/HIPEC.",
      ref: "Jacquet P & Sugarbaker PH, Cancer Treat Res 1996;82:359",
      render: () => <PeritonealCancerIndexFig />,
    },

  });
})();
