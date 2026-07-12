// figures-hpb.jsx — original SVG teaching diagrams for HPB & Spleen.
// Drawn from scratch; renders offline; theme-aware via CSS custom properties.
// Every figure maps to authoritative guidelines (Tokyo / Atlanta / AJCC / etc.)

(function () {
  // Theme-aware palette — never hard-code hex.
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
  // Couinaud liver segments (simplified schematic, anterior view)
  // Eight segments arranged around the right / left lobe + caudate (I)
  // ─────────────────────────────────────────────────────────────────────────
  function CouinaudFig() {
    // The liver is drawn as two main lobes with Couinaud segments labelled.
    // Right lobe: segments V–VIII; Left lobe: segments II–IV; Caudate: I
    // We use a stylised polygon / ellipse approach, not photorealistic.

    // Outer liver silhouette — roughly rounded trapezoid
    const liverPath = "M 60 110 Q 60 40 200 30 Q 380 20 480 70 Q 560 100 540 200 Q 520 280 420 310 Q 320 330 200 310 Q 100 290 60 200 Q 50 160 60 110 Z";

    // Dividing lines (approximate anatomical planes):
    // Cantlie's line (IHC fissure): roughly vertical from GB fossa to IVC
    // Left intersegmental fissure (falciform): left of midline
    // Right intersegmental fissure: right of midline
    // Transverse (portal): horizontal band

    // We'll draw segment boundaries as lines within the silhouette.
    // All coordinates are within the 600×360 viewBox.

    // Segment label positions (cx, cy) after visual partition
    const segs = [
      { id: "I",    cx: 300, cy: 290, note: "Caudate" },
      { id: "II",   cx: 115, cy: 105, note: "Post-sup L" },
      { id: "III",  cx: 115, cy: 195, note: "Ant-inf L" },
      { id: "IVa",  cx: 235, cy:  85, note: "Med L sup" },
      { id: "IVb",  cx: 235, cy: 185, note: "Med L inf" },
      { id: "V",    cx: 370, cy: 220, note: "Ant-inf R" },
      { id: "VI",   cx: 470, cy: 220, note: "Post-inf R" },
      { id: "VII",  cx: 470, cy: 120, note: "Post-sup R" },
      { id: "VIII", cx: 370, cy: 100, note: "Ant-sup R" },
    ];

    // Internal dividing lines
    const divLines = [
      // Cantlie's line (midplane) — near vertical
      { d: "M 300 35 Q 302 160 300 290" },
      // Left intersegmental fissure (falciform / round ligament)
      { d: "M 170 32 L 170 280" },
      // Right intersegmental fissure
      { d: "M 430 50 L 430 295" },
      // Transverse fissure (portal plane) — horizontal ~y=160
      { d: "M 75 155 Q 300 145 530 155" },
    ];

    return (
      <svg {...svgProps("0 0 600 360")}>
        {/* Liver silhouette */}
        <path d={liverPath} fill={WALL} stroke={INK} strokeWidth="2.5" />

        {/* IVC notch at top (caudate) */}
        <ellipse cx={300} cy={290} rx={55} ry={22} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />

        {/* Gallbladder fossa (small ellipse right of midline at base) */}
        <ellipse cx={317} cy={260} rx={20} ry={10} fill={LUMEN} stroke={RULE} strokeWidth="1.2" />
        <text {...T(317, 258, 9, { fill: SOFT })}>GB</text>

        {/* Dividing planes */}
        {divLines.map((l, i) => (
          <path key={i} d={l.d} fill="none" stroke={RULE} strokeWidth="1.8" strokeDasharray="6 4" />
        ))}

        {/* Segment shading: alternate ASOFT tint for easy reading */}
        {/* Right lobe upper half (VII, VIII) subtle tint */}
        <path d="M 300 35 Q 380 30 480 70 Q 560 100 530 155 L 300 145 Z" fill={ASOFT} stroke="none" opacity="0.35" />
        <path d="M 430 50 Q 480 70 530 155 L 430 155 Z" fill={ASOFT} stroke="none" opacity="0.25" />

        {/* Segment labels */}
        {segs.map((s) => (
          <g key={s.id}>
            <circle cx={s.cx} cy={s.cy} r={19} fill={s.id === "I" ? ASOFT : LUMEN} stroke={ACCENT} strokeWidth="1.5" opacity="0.9" />
            <text {...T(s.cx, s.cy + 5, 14, { fontWeight: 700 })}>{s.id}</text>
          </g>
        ))}

        {/* Legend: segment names at bottom */}
        <text {...T(300, 340, 10, { fill: SOFT })}>
          I = Caudate · II–III = Lat L · IVa/b = Med L · V–VIII = Right lobe (Couinaud)
        </text>

        {/* Cantlie line label */}
        <text x={308} y={70} fontSize={10} fill={MUTE} textAnchor="start">Cantlie</text>

        {/* Falciform label */}
        <text x={175} y={42} fontSize={10} fill={MUTE} textAnchor="start">Falciform</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Bismuth-Corlette classification of hilar cholangiocarcinoma (Klatskin tumour)
  // Types I, II, IIIa, IIIb, IV — schematic biliary confluence
  // ─────────────────────────────────────────────────────────────────────────
  function BismuthFig() {
    // Draw 5 mini biliary-tree panels in a row.
    // Each panel: CHD + confluence + RHD + LHD + secondary ducts
    // Tumour (block) shown as filled accent rectangle.

    const panelW = 124, panelH = 200, panels = 5;
    const W = panelW * panels;

    // Helper: draw a biliary confluence tree in a panel with a tumour block
    // type: 'I' | 'II' | 'IIIa' | 'IIIb' | 'IV'
    const BiPanel = ({ type, ox }) => {
      const mx  = ox + panelW / 2;  // midpoint x
      // Anatomy Y coords
      const chd_top = 28;            // top of CHD
      const conf    = 90;            // confluence Y
      const rhd_y   = 56;           // right duct endpoint Y
      const lhd_y   = 56;
      const rsec_y  = 32;           // right secondary duct Y
      const lsec_y  = 32;
      const rhd_x   = ox + panelW * 0.72;  // right duct X
      const lhd_x   = ox + panelW * 0.28;  // left duct X
      const rsec_x  = ox + panelW * 0.85;
      const lsec_x  = ox + panelW * 0.15;

      // Tumour block helpers — returns rect element(s)
      const tumorRect = (x, y, w, h) => (
        <rect x={x} y={y} width={w} height={h} fill={ACCENT} rx="3" />
      );

      // CHD — common hepatic duct (vertical bar below confluence)
      const chd = <line x1={mx} y1={conf} x2={mx} y2={conf + 60} stroke={INK} strokeWidth="5" strokeLinecap="round" />;
      // Confluence bar (horizontal)
      const confBar = <line x1={lhd_x} y1={conf} x2={rhd_x} y2={conf} stroke={INK} strokeWidth="5" strokeLinecap="round" />;
      // LHD
      const lhd = <line x1={lhd_x} y1={conf} x2={lhd_x} y2={lhd_y} stroke={INK} strokeWidth="4" strokeLinecap="round" />;
      // RHD
      const rhd = <line x1={rhd_x} y1={conf} x2={rhd_x} y2={rhd_y} stroke={INK} strokeWidth="4" strokeLinecap="round" />;
      // Secondary right duct
      const rsec = <line x1={rhd_x} y1={rhd_y} x2={rsec_x} y2={rsec_y} stroke={INK} strokeWidth="3" strokeLinecap="round" />;
      // Secondary left duct
      const lsec = <line x1={lhd_x} y1={lhd_y} x2={lsec_x} y2={lsec_y} stroke={INK} strokeWidth="3" strokeLinecap="round" />;

      // Tumour blocks per type
      let tumors = null;
      const tH = 14, tW = 12;
      if (type === "I") {
        // CHD only, below confluence
        tumors = tumorRect(mx - 7, conf + 18, 14, tH);
      } else if (type === "II") {
        // At confluence
        tumors = tumorRect(mx - 7, conf - 7, 14, 14);
      } else if (type === "IIIa") {
        // Confluence + RHD
        tumors = [
          tumorRect(mx - 7, conf - 7, 14, 14),
          tumorRect(rhd_x - 6, rhd_y - 4, 12, tH),
        ].map((el, i) => React.cloneElement(el, { key: i }));
      } else if (type === "IIIb") {
        // Confluence + LHD
        tumors = [
          tumorRect(mx - 7, conf - 7, 14, 14),
          tumorRect(lhd_x - 6, lhd_y - 4, 12, tH),
        ].map((el, i) => React.cloneElement(el, { key: i }));
      } else if (type === "IV") {
        // Confluence + both RHD and LHD, extends into secondaries
        tumors = [
          tumorRect(mx - 7, conf - 7, 14, 14),
          tumorRect(rhd_x - 6, rsec_y - 4, 12, tH),
          tumorRect(lhd_x - 6, lsec_y - 4, 12, tH),
        ].map((el, i) => React.cloneElement(el, { key: i }));
      }

      return (
        <g>
          {chd}
          {confBar}
          {lhd}
          {rhd}
          {rsec}
          {lsec}
          {tumors}
          {/* Label */}
          <text {...T(mx, 130, 17, { fontWeight: 700 })}>{type}</text>
          {/* Resectability note */}
          <text {...T(mx, 150, 10, { fill: type === "IV" ? ACCENT : SOFT })}>
            {type === "I" ? "Resectable" : type === "II" ? "Resectable" : type === "IIIa" ? "R±RH" : type === "IIIb" ? "R±LH" : "Palliative/Px"}
          </text>
        </g>
      );
    };

    const types = ["I", "II", "IIIa", "IIIb", "IV"];

    return (
      <svg {...svgProps(`0 0 ${W} 210`)}>
        {/* Legend bar */}
        <rect x={8} y={172} width={16} height={10} rx="2" fill={ACCENT} />
        <text x={28} y={181} fontSize={10} fill={SOFT} textAnchor="start">= tumour</text>

        {types.map((tp, i) => (
          <g key={tp}>
            {i > 0 && <line x1={i * panelW} y1={10} x2={i * panelW} y2={200} stroke={RULE} strokeWidth="1" />}
            <BiPanel type={tp} ox={i * panelW} />
          </g>
        ))}

        {/* Resectability axis */}
        <text {...T(W / 2, 200, 10, { fill: MUTE })}>
          I–II = CHD/confluence · IIIa/b = unilateral hepatic duct · IV = bilateral secondaries
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Atlanta 2012 classification of acute pancreatitis fluid collections
  // Timeline: < 4 weeks vs ≥ 4 weeks; Interstitial vs Necrotising AP
  // ─────────────────────────────────────────────────────────────────────────
  function AtlantaFig() {
    // 2×2 grid:
    //           Interstitial AP    |   Necrotising AP
    // < 4 wk   APFC               |   ANC
    // ≥ 4 wk   Pseudocyst         |   WON

    const colW = 260, rowH = 140, x0 = 30, y0 = 50;

    const cells = [
      { r: 0, c: 0, name: "APFC", full: "Acute peripancreatic\nfluid collection", shape: "fluid", notes: ["No wall · fluid"] },
      { r: 0, c: 1, name: "ANC",  full: "Acute necrotic\ncollection",           shape: "necrosis", notes: ["No wall · necrosis"] },
      { r: 1, c: 0, name: "Pseudocyst", full: "Pancreatic pseudocyst",           shape: "cyst",    notes: ["Defined wall · fluid"] },
      { r: 1, c: 1, name: "WON",  full: "Walled-off necrosis",                  shape: "won",     notes: ["Thick wall · necrosis"] },
    ];

    // Shape drawings inside cells
    const drawShape = (shape, cx, cy) => {
      if (shape === "fluid") {
        // Simple irregular fluid blob (no wall)
        return (
          <g>
            <ellipse cx={cx} cy={cy} rx={52} ry={34} fill={ASOFT} stroke={SOFT} strokeWidth="1.5" strokeDasharray="5 4" />
            <text {...T(cx, cy + 4, 11, { fill: ACCENT })}>fluid</text>
          </g>
        );
      } else if (shape === "necrosis") {
        // Irregular blob with dots inside representing necrosis
        return (
          <g>
            <ellipse cx={cx} cy={cy} rx={52} ry={34} fill={WALL} stroke={SOFT} strokeWidth="1.5" strokeDasharray="5 4" />
            {[[-18, -8], [6, -12], [20, 4], [-6, 10], [-26, 8], [14, -4]].map(([dx, dy], i) => (
              <circle key={i} cx={cx + dx} cy={cy + dy} r={4} fill={ACCENT} opacity="0.6" />
            ))}
          </g>
        );
      } else if (shape === "cyst") {
        // Well-defined circle with thin wall
        return (
          <g>
            <circle cx={cx} cy={cy} r={38} fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />
            <text {...T(cx, cy + 4, 11, { fill: ACCENT })}>fluid</text>
          </g>
        );
      } else if (shape === "won") {
        // Thick-walled circle with necrotic fill
        return (
          <g>
            <circle cx={cx} cy={cy} r={38} fill={WALL} stroke={ACCENT} strokeWidth="5" />
            {[[-14, -8], [8, -14], [18, 6], [-4, 12], [-20, 8]].map(([dx, dy], i) => (
              <circle key={i} cx={cx + dx} cy={cy + dy} r={4} fill={ACCENT} opacity="0.65" />
            ))}
          </g>
        );
      }
      return null;
    };

    return (
      <svg {...svgProps(`0 0 ${x0 * 2 + colW * 2} ${y0 + rowH * 2 + 50}`)}>
        {/* Column headers */}
        <text {...T(x0 + colW / 2, 22, 12, { fontWeight: 700 })}>Interstitial AP</text>
        <text {...T(x0 + colW + colW / 2, 22, 12, { fontWeight: 700 })}>Necrotising AP</text>
        {/* Row headers — placed inside the viewBox left edge */}
        <text x={x0 + 8} y={y0 + rowH / 2 + 5} fontSize={10} fill={MUTE} textAnchor="start">{"< 4 wk"}</text>
        <text x={x0 + 8} y={y0 + rowH + rowH / 2 + 5} fontSize={10} fill={MUTE} textAnchor="start">{"≥ 4 wk"}</text>

        {/* Grid lines */}
        <rect x={x0} y={y0} width={colW * 2} height={rowH * 2} fill="none" stroke={RULE} strokeWidth="1.5" />
        <line x1={x0 + colW} y1={y0} x2={x0 + colW} y2={y0 + rowH * 2} stroke={RULE} strokeWidth="1.5" />
        <line x1={x0} y1={y0 + rowH} x2={x0 + colW * 2} y2={y0 + rowH} stroke={RULE} strokeWidth="1.5" />

        {cells.map((cell) => {
          const cx = x0 + cell.c * colW + colW / 2;
          const cy = y0 + cell.r * rowH + rowH * 0.36;
          const labelY = y0 + cell.r * rowH + rowH * 0.72;
          const notesY = y0 + cell.r * rowH + rowH * 0.87;
          return (
            <g key={cell.name}>
              {drawShape(cell.shape, cx, cy)}
              <text {...T(cx, labelY, 14, { fontWeight: 700 })}>{cell.name}</text>
              <text {...T(cx, notesY, 9.5, { fill: SOFT })}>{cell.notes.join(" · ")}</text>
            </g>
          );
        })}

        {/* Footer */}
        <text {...T(x0 + colW, y0 + rowH * 2 + 30, 10, { fill: MUTE })}>
          Atlanta Revised Classification 2012 (Banks et al.)
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Strasberg bile duct injury classification (A–E)
  // Each type shown as schematic biliary anatomy with injury site marked
  // ─────────────────────────────────────────────────────────────────────────
  function StrasbergFig() {
    // 5 mini panels: A, B, C, D, E1-4 (E shown as single representative panel)
    // Panel structure: same as Bismuth — liver + CBD + duodenum

    const PW = 118, PH = 240, N = 5;

    const Panel = ({ type, ox }) => {
      const mx = ox + PW / 2;
      // Anatomy (simplified vertical duct tree)
      const liv_top = 20, conf = 70, chd_bot = 140, duo_y = 160;
      const rhd_x = ox + PW * 0.68, lhd_x = ox + PW * 0.32;

      // Duct lines
      const ducts = [
        <line key="lhd"  x1={lhd_x} y1={conf} x2={lhd_x} y2={liv_top}  stroke={INK} strokeWidth="3.5" strokeLinecap="round" />,
        <line key="rhd"  x1={rhd_x} y1={conf} x2={rhd_x} y2={liv_top}  stroke={INK} strokeWidth="3.5" strokeLinecap="round" />,
        <line key="conf" x1={lhd_x} y1={conf} x2={rhd_x} y2={conf}     stroke={INK} strokeWidth="3.5" strokeLinecap="round" />,
        <line key="chd"  x1={mx} y1={conf}     x2={mx}    y2={chd_bot}  stroke={INK} strokeWidth="4"   strokeLinecap="round" />,
        // Duodenum box — moved up so panel letter clears it
        <rect key="duo" x={ox + 18} y={duo_y} width={PW - 36} height={20} rx="5" fill={WALL} stroke={RULE} strokeWidth="1.2" />,
        <text key="dut" {...T(mx, duo_y + 13, 9, { fill: MUTE })}>D2</text>,
      ];

      // Mark injury by type
      let injury = null;
      const X = (x, y) => (
        <g>
          <line x1={x - 7} y1={y - 7} x2={x + 7} y2={y + 7} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          <line x1={x + 7} y1={y - 7} x2={x - 7} y2={y + 7} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );

      if (type === "A") {
        // Cystic duct leak (small lateral mark on cystic duct area)
        injury = (
          <g>
            <circle cx={mx + 14} cy={chd_bot - 28} r={7} fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="3 2" />
            <text {...T(mx + 14, chd_bot - 24, 9, { fill: ACCENT })}>leak</text>
          </g>
        );
      } else if (type === "B") {
        // Occlusion of aberrant right sectoral duct — clip on RHD
        injury = (
          <g>
            <rect x={rhd_x - 7} y={conf - 26} width={14} height={8} rx="2" fill={ACCENT} />
            <text {...T(rhd_x, conf - 36, 9, { fill: ACCENT })}>clip</text>
          </g>
        );
      } else if (type === "C") {
        // Transection of aberrant right sectoral duct (divided, cut end)
        injury = (
          <g>
            {X(rhd_x, conf - 22)}
            <text {...T(rhd_x + 16, conf - 30, 9, { fill: ACCENT, textAnchor: "start" })}>div</text>
          </g>
        );
      } else if (type === "D") {
        // Lateral injury to CHD (not complete transection)
        injury = (
          <g>
            <circle cx={mx + 5} cy={chd_bot - 50} r={8} fill="none" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="3 2" />
            <text {...T(mx + 5, chd_bot - 46, 9, { fill: ACCENT })}>tear</text>
          </g>
        );
      } else if (type === "E") {
        // Complete transection of CHD at various levels — show E1–4 range
        const ty = chd_bot - 50;
        injury = (
          <g>
            {X(mx, ty)}
            <line x1={ox + 24} y1={ty} x2={ox + PW - 24} y2={ty} stroke={ACCENT} strokeWidth="2" strokeDasharray="4 3" />
            <text {...T(mx, ty - 12, 9, { fill: ACCENT })}>E1–E4</text>
          </g>
        );
      }

      // Panel letter + description below duodenum box (bottom at duo_y+20 = 180)
      return (
        <g>
          {ducts}
          {injury}
          <text {...T(mx, 200, 16, { fontWeight: 700 })}>{type}</text>
          <text {...T(mx, 216, 9.5, { fill: SOFT })}>
            {type === "A" ? "Cystic leak"
              : type === "B" ? "Occluded sectoral"
              : type === "C" ? "Divided sectoral"
              : type === "D" ? "Lateral CHD"
              : "Transected CHD"}
          </text>
        </g>
      );
    };

    const types = ["A", "B", "C", "D", "E"];

    return (
      <svg {...svgProps(`0 0 ${PW * N} ${PH + 10}`)}>
        {types.map((tp, i) => (
          <g key={tp}>
            {i > 0 && <line x1={i * PW} y1={5} x2={i * PW} y2={PH} stroke={RULE} strokeWidth="1" />}
            <Panel type={tp} ox={i * PW} />
          </g>
        ))}
        <text {...T(PW * N / 2, PH + 4, 9.5, { fill: MUTE })}>
          Strasberg: A–D = partial/aberrant injury · E = CHD transection
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Tokyo Guidelines 2018 — severity grading for acute cholecystitis
  // AND acute cholangitis (two stacked ladders)
  // ─────────────────────────────────────────────────────────────────────────
  function TokyoFig() {
    // Cholecystitis grades I–III (mild / moderate / severe)
    const ccGrades = [
      {
        g: "Grade I", sub: "Mild", col: ASOFT,
        criteria: ["No organ dysfn", "Local inflam only"],
        mgmt: "Early LC ≤72 h",
      },
      {
        g: "Grade II", sub: "Moderate", col: WALL,
        criteria: ["WBC >18 or <4", ">72 h / mass"],
        mgmt: "Drain → LC",
      },
      {
        g: "Grade III", sub: "Severe", col: ASOFT,
        criteria: ["Organ dysfn ≥1", "(CV/neuro/renal/", "hepatic/haem/resp)"],
        mgmt: "ICU + urgent drain",
      },
    ];

    // Cholangitis grades I–III (Charcot / Reynolds pentad markers)
    const caGrades = [
      {
        g: "Grade I", sub: "Mild", col: ASOFT,
        criteria: ["No organ dysfn", "Responds to Abx"],
        mgmt: "Abx; ERCP elective",
      },
      {
        g: "Grade II", sub: "Moderate", col: WALL,
        criteria: ["≥2 of: fever >39°C", "WBC abnl, age >75,", "bili↑, albumin↓"],
        mgmt: "Early ERCP",
      },
      {
        g: "Grade III", sub: "Severe", col: ASOFT,
        criteria: ["Organ dysfn ≥1", "(CV/neuro/renal/", "hepatic/haem/resp)"],
        mgmt: "ICU + urgent ERCP",
      },
    ];

    const cW = 190, gH = 118, x0 = 10, top = 30;
    const section = (grades, sx, title) => {
      const items = grades.map((g, i) => {
        const x = sx + i * cW, y = top;
        const accentStrip = i === 2; // Grade III gets accent border
        return (
          <g key={g.g}>
            {i > 0 && <line x1={x} y1={top - 6} x2={x} y2={top + gH + 2} stroke={RULE} strokeWidth="1" />}
            <rect x={x + 4} y={y} width={cW - 8} height={gH} rx="5"
              fill={g.col} stroke={accentStrip ? ACCENT : RULE}
              strokeWidth={accentStrip ? 2 : 1} />
            <text {...T(x + cW / 2, y + 16, 12, { fontWeight: 700 })}>{g.g}</text>
            <text {...T(x + cW / 2, y + 30, 11, { fill: ACCENT, fontWeight: 600 })}>{g.sub}</text>
            {g.criteria.map((cr, ci) => (
              <text key={ci} {...T(x + cW / 2, y + 46 + ci * 13, 9, { fill: MUTE })}>{cr}</text>
            ))}
            <text {...T(x + cW / 2, y + gH - 8, 9.5, { fill: INK, fontWeight: 600 })}>{g.mgmt}</text>
          </g>
        );
      });
      return (
        <g>
          <text x={sx + 4} y={top - 10} fontSize={12} fill={INK} fontWeight="700" textAnchor="start">{title}</text>
          <rect x={sx} y={top - 4} width={cW * 3} height={gH + 8} rx="6" fill="none" stroke={RULE} strokeWidth="1.5" />
          {items}
        </g>
      );
    };

    const totalW = x0 * 2 + cW * 3;
    const secGap = gH + 52;

    return (
      <svg {...svgProps(`0 0 ${totalW} ${secGap * 2 + 20}`)}>
        {/* Cholecystitis section */}
        <g transform={`translate(${x0}, 14)`}>
          {section(ccGrades, 0, "Acute Cholecystitis")}
        </g>
        {/* Cholangitis section */}
        <g transform={`translate(${x0}, ${14 + secGap})`}>
          {section(caGrades, 0, "Acute Cholangitis")}
        </g>
        <text {...T(totalW / 2, secGap * 2 + 14, 9.5, { fill: MUTE })}>
          Tokyo Guidelines 2018 (TG18) — severity grading
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Biliary tree anatomy with CBD stone at ampulla
  // ─────────────────────────────────────────────────────────────────────────
  function BiliaryAnatomyFig() {
    // Schematic: liver block at top, gallbladder on right, CBD descending
    // into pancreatic head, ampulla of Vater with stone.

    return (
      <svg {...svgProps("0 0 560 400")}>
        {/* ── Liver block ── */}
        <path d="M 80 30 Q 80 10 200 10 Q 350 10 420 40 Q 460 60 440 100 Q 420 130 350 140 Q 240 150 160 140 Q 90 130 80 90 Z"
          fill={WALL} stroke={INK} strokeWidth="2" />
        <text {...T(260, 82, 14, { fontWeight: 700 })}>LIVER</text>

        {/* ── Left & Right hepatic ducts ── */}
        {/* LHD */}
        <line x1={185} y1={140} x2={185} y2={170} stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {/* RHD */}
        <line x1={315} y1={140} x2={315} y2={170} stroke={INK} strokeWidth="5" strokeLinecap="round" />
        {/* Confluence bar */}
        <line x1={185} y1={170} x2={315} y2={170} stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <text x={160} y={167} fontSize={10} fill={SOFT} textAnchor="end">LHD</text>
        <text x={318} y={167} fontSize={10} fill={SOFT} textAnchor="start">RHD</text>

        {/* ── Common hepatic duct (CHD) ── */}
        <line x1={250} y1={170} x2={250} y2={215} stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <text x={254} y={196} fontSize={10} fill={SOFT} textAnchor="start">CHD</text>

        {/* ── Gallbladder ── */}
        <ellipse cx={360} cy={192} rx={48} ry={28} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />
        <text {...T(360, 196, 11, { fontWeight: 600 })}>Gallbladder</text>
        {/* Cystic duct joining CHD */}
        <path d="M 316 192 Q 283 200 250 215" fill="none" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <text x={278} y={210} fontSize={10} fill={SOFT} textAnchor="middle">CD</text>

        {/* ── Common bile duct (CBD) ── */}
        <line x1={250} y1={215} x2={250} y2={320} stroke={INK} strokeWidth="6" strokeLinecap="round" />
        <text x={254} y={268} fontSize={10} fill={SOFT} textAnchor="start">CBD</text>

        {/* ── Pancreatic head (ellipse) ── */}
        <ellipse cx={250} cy={335} rx={80} ry={46} fill={WALL} stroke={RULE} strokeWidth="1.5" />
        <text {...T(250, 338, 11, { fill: MUTE })}>Pancreatic head</text>
        {/* Main pancreatic duct meeting ampulla */}
        <line x1={170} y1={335} x2={242} y2={335} stroke={RULE} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 3" />
        <text x={168} y={332} fontSize={9.5} fill={SOFT} textAnchor="end">MPD</text>

        {/* ── Ampulla of Vater ── */}
        <circle cx={250} cy={360} r={12} fill={LUMEN} stroke={ACCENT} strokeWidth="2" />
        <text {...T(250, 364, 9.5, { fill: ACCENT, fontWeight: 600 })}>AoV</text>

        {/* ── CBD Stone (ACCENT filled circle on CBD) ── */}
        <circle cx={250} cy={308} r={11} fill={ACCENT} />
        <text {...T(250, 312, 9, { fill: LUMEN, fontWeight: 700 })}>●</text>
        {/* Arrow pointing to stone */}
        <line x1={284} y1={295} x2={263} y2={306} stroke={ACCENT} strokeWidth="1.5" />
        <text x={288} y={293} fontSize={11} fill={ACCENT} fontWeight="700" textAnchor="start">CBD stone</text>

        {/* ── Duodenum ── */}
        <path d="M 238 372 Q 238 390 260 395 Q 340 398 345 360 Q 348 330 330 320"
          fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <text x={355} y={358} fontSize={10} fill={SOFT} textAnchor="start">D2</text>

        {/* ── Key labels ── */}
        <text {...T(280, 390, 10, { fill: MUTE })}>
          Stone impacted at CBD → obstructive jaundice / cholangitis / pancreatitis
        </text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Pancreatic cancer — resectability by vessel contact (NCCN)
  // ─────────────────────────────────────────────────────────────────────────
  function PancResectabilityFig() {
    const cols = [
      { t: "Resectable", op: 0.14 },
      { t: "Borderline", op: 0.34 },
      { t: "Locally advanced", op: 0.62 },
    ];
    const rows = [
      { h: "SMA / coeliac", cells: [["No contact"], ["≤ 180° contact"], ["> 180° contact"]] },
      { h: "Common hepatic a.", cells: [["No contact"], ["Contact, no", "coeliac extension"], ["Unreconstructable"]] },
      { h: "SMV / portal vein", cells: [["≤ 180°,", "normal contour"], ["> 180° or irregular,", "reconstructable"], ["Occluded /", "unreconstructable"]] },
    ];
    const x0 = 22, hw = 116, cw = 168, y0 = 84, rh = 70;
    return (
      <svg {...svgProps("0 0 660 320")}>
        <text {...T(330, 24, 14, { fontWeight: 700 })}>Pancreatic cancer — resectability by vessel contact</text>
        <text {...T(330, 42, 9.5, { fill: SOFT })}>tumour–vessel relationship on CT (NCCN criteria)</text>
        {cols.map((c, i) => (
          <g key={i}>
            <rect x={x0 + hw + cw * i} y={y0 - 26} width={cw} height={24} fill={ACCENT} opacity={c.op} stroke={RULE} strokeWidth="1" />
            <text {...T(x0 + hw + cw * i + cw / 2, y0 - 9, 10.5, { fontWeight: 700 })}>{c.t}</text>
          </g>
        ))}
        {rows.map((row, r) => (
          <g key={r}>
            <rect x={x0} y={y0 + rh * r} width={hw} height={rh} fill={WALL} stroke={RULE} strokeWidth="1" />
            <text x={x0 + 9} y={y0 + rh * r + rh / 2 + 4} fontSize="9.5" fill={INK} fontWeight="600" textAnchor="start">{row.h}</text>
            {row.cells.map((lines, c) => (
              <g key={c}>
                <rect x={x0 + hw + cw * c} y={y0 + rh * r} width={cw} height={rh} fill="none" stroke={RULE} strokeWidth="1" />
                {lines.map((ln, k) => (
                  <text key={k} {...T(x0 + hw + cw * c + cw / 2, y0 + rh * r + rh / 2 - (lines.length - 1) * 7 + k * 14 + 4, 9.5, { fill: SOFT })}>{ln}</text>
                ))}
              </g>
            ))}
          </g>
        ))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Chronic pancreatitis — drainage vs resection operations
  // ─────────────────────────────────────────────────────────────────────────
  function ChronicPancOpsFig() {
    const ops = [
      { t: "Puestow", d: ["Lateral pancreatico-", "jejunostomy (drainage)"], kind: "puestow" },
      { t: "Frey", d: ["Head coring +", "lateral PJ (hybrid)"], kind: "frey" },
      { t: "Beger", d: ["Duodenum-preserving", "head resection"], kind: "beger" },
      { t: "Whipple", d: ["Pancreatoduodenectomy", "(mass / ?malignancy)"], kind: "whipple" },
    ];
    const pw = 170;
    const Panel = (op, i) => {
      const ox = i * pw, cx = ox + pw / 2, cy = 96;
      const gl = `M ${ox + 24} ${cy} Q ${ox + 70} ${cy - 20} ${ox + 116} ${cy - 10} Q ${ox + 148} ${cy - 4} ${ox + 148} ${cy + 16} Q ${ox + 148} ${cy + 38} ${ox + 114} ${cy + 32} Q ${ox + 70} ${cy + 24} ${ox + 24} ${cy + 6} Z`;
      const e = [<path key="gl" d={gl} fill={WALL} stroke={INK} strokeWidth="1.8" />];
      if (op.kind === "puestow" || op.kind === "frey") {
        e.push(<path key="duct" d={`M ${ox + 30} ${cy + 2} L ${ox + 138} ${cy + 8}`} fill="none" stroke={ACCENT} strokeWidth="3" strokeDasharray="3 3" />);
        e.push(<path key="roux" d={`M ${ox + 40} ${cy + 26} Q ${cx} ${cy + 52} ${ox + 132} ${cy + 26}`} fill="none" stroke={INK} strokeWidth="1.8" />);
      }
      if (op.kind === "frey")
        e.push(<circle key="core" cx={ox + 126} cy={cy + 12} r={11} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" strokeDasharray="2 2" />);
      if (op.kind === "beger") {
        e.push(<line key="div" x1={ox + 108} y1={cy - 16} x2={ox + 108} y2={cy + 36} stroke={ACCENT} strokeWidth="2" strokeDasharray="3 2" />);
        e.push(<path key="head" d={`M ${ox + 116} ${cy - 10} Q ${ox + 148} ${cy - 4} ${ox + 148} ${cy + 16} Q ${ox + 148} ${cy + 38} ${ox + 114} ${cy + 32}`} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />);
      }
      if (op.kind === "whipple") {
        e.push(<line key="cut" x1={ox + 102} y1={cy - 18} x2={ox + 102} y2={cy + 40} stroke={ACCENT} strokeWidth="2" strokeDasharray="3 2" />);
        e.push(<path key="rm" d={`M ${ox + 110} ${cy - 10} Q ${ox + 148} ${cy - 4} ${ox + 148} ${cy + 16} Q ${ox + 148} ${cy + 38} ${ox + 110} ${cy + 32}`} fill="none" stroke={MUTE} strokeWidth="1.3" strokeDasharray="2 3" />);
        e.push(<text key="x" {...T(ox + 130, cy + 4, 13, { fill: ACCENT, fontWeight: 700 })}>✕</text>);
      }
      return (
        <g key={op.t}>
          {i > 0 && <line x1={ox} y1={44} x2={ox} y2={158} stroke={RULE} strokeWidth="1" />}
          {e}
          <text {...T(cx, 172, 12, { fontWeight: 700 })}>{op.t}</text>
          {op.d.map((ln, k) => <text key={k} {...T(cx, 188 + k * 13, 9, { fill: SOFT })}>{ln}</text>)}
        </g>
      );
    };
    return (
      <svg {...svgProps("0 0 680 226")}>
        <text {...T(340, 24, 14, { fontWeight: 700 })}>Chronic pancreatitis — drainage vs resection</text>
        {ops.map((op, i) => Panel(op, i))}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // IPMN — main-duct vs branch-duct + Fukuoka features
  // ─────────────────────────────────────────────────────────────────────────
  function IpmnTypesFig() {
    const gland = (ox, oy) => `M ${ox} ${oy} Q ${ox + 40} ${oy - 16} ${ox + 90} ${oy - 8} Q ${ox + 122} ${oy - 2} ${ox + 122} ${oy + 14} Q ${ox + 122} ${oy + 32} ${ox + 88} ${oy + 24} Q ${ox + 40} ${oy + 16} ${ox} ${oy} Z`;
    return (
      <svg {...svgProps("0 0 660 320")}>
        <text {...T(330, 24, 14, { fontWeight: 700 })}>IPMN — main-duct vs branch-duct</text>

        <path d={gland(34, 84)} fill={WALL} stroke={INK} strokeWidth="1.8" />
        <path d="M 40 86 L 150 92" fill="none" stroke={ACCENT} strokeWidth="7" />
        <text x={34} y={132} fontSize="10.5" fill={INK} fontWeight="700" textAnchor="start">Main-duct</text>
        <text x={34} y={146} fontSize="9" fill={SOFT} textAnchor="start">MPD ≥ 5 mm · high risk → resect</text>

        <path d={gland(34, 208)} fill={WALL} stroke={INK} strokeWidth="1.8" />
        <path d="M 40 210 L 150 216" fill="none" stroke={MUTE} strokeWidth="2.5" />
        <circle cx={98} cy={192} r={15} fill={ASOFT} stroke={ACCENT} strokeWidth="1.8" />
        <line x1={98} y1={207} x2={98} y2={212} stroke={ACCENT} strokeWidth="2" />
        <text x={34} y={256} fontSize="10.5" fill={INK} fontWeight="700" textAnchor="start">Branch-duct</text>
        <text x={34} y={270} fontSize="9" fill={SOFT} textAnchor="start">communicates with MPD · lower risk</text>

        <line x1={286} y1={54} x2={286} y2={286} stroke={RULE} strokeWidth="1" />

        <text x={302} y={72} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="start">Worrisome features</text>
        {["cyst ≥ 3 cm", "thick enhancing walls", "MPD 5–9 mm", "non-enhancing mural nodule", "abrupt duct-calibre change", "lymphadenopathy"].map((s, i) => (
          <text key={i} x={312} y={92 + i * 17} fontSize="9.5" fill={SOFT} textAnchor="start">· {s}</text>
        ))}
        <text x={302} y={218} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="start">High-risk stigmata → resect</text>
        {["obstructive jaundice + head cyst", "enhancing mural nodule ≥ 5 mm", "MPD ≥ 10 mm"].map((s, i) => (
          <text key={i} x={312} y={238 + i * 17} fontSize="9.5" fill={SOFT} textAnchor="start">· {s}</text>
        ))}
        <text x={34} y={302} fontSize="9" fill={MUTE} textAnchor="start">Fukuoka / international consensus (2017)</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Gallbladder cancer — T-stage by wall depth
  // ─────────────────────────────────────────────────────────────────────────
  function GbCancerTStageFig() {
    const layers = [
      { t: "Lumen", h: 28, fill: LUMEN },
      { t: "Mucosa / lamina propria", h: 26, fill: WALL },
      { t: "Muscularis", h: 24, fill: ASOFT },
      { t: "Perimuscular conn. tissue", h: 30, fill: WALL },
      { t: "Serosa", h: 14, fill: ASOFT },
      { t: "Liver / adjacent organ", h: 38, fill: WALL },
    ];
    const x0 = 40, w = 290, y0 = 62;
    let yy = y0;
    const bands = layers.map((L) => { const y = yy; yy += L.h; return { ...L, y }; });
    const stages = [
      { s: "Tis", y: y0 + 6, txt: "in situ (epithelium)" },
      { s: "T1a", y: bands[1].y + 13, txt: "lamina propria → simple cholecystectomy" },
      { s: "T1b", y: bands[2].y + 12, txt: "muscularis → radical cholecystectomy" },
      { s: "T2", y: bands[3].y + 15, txt: "perimuscular (T2a periton. / T2b hepatic)" },
      { s: "T3", y: bands[5].y + 6, txt: "through serosa / into liver or 1 organ" },
      { s: "T4", y: bands[5].y + 26, txt: "portal vein / hepatic a. or ≥ 2 organs" },
    ];
    return (
      <svg {...svgProps("0 0 660 300")}>
        <text {...T(330, 24, 14, { fontWeight: 700 })}>Gallbladder cancer — T-stage by wall depth</text>
        {bands.map((L, i) => (
          <g key={i}>
            <rect x={x0} y={L.y} width={w} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" />
            <text x={x0 + w / 2} y={L.y + L.h / 2 + 3.5} fontSize="9" fill={MUTE} textAnchor="middle">{L.t}</text>
          </g>
        ))}
        {stages.map((st, i) => (
          <g key={i}>
            <text x={x0 + w + 16} y={st.y + 4} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="start">{st.s}</text>
            <text x={x0 + w + 50} y={st.y + 4} fontSize="9.5" fill={SOFT} textAnchor="start">{st.txt}</text>
          </g>
        ))}
        <text x={x0} y={272} fontSize="9.5" fill={ACCENT} fontWeight="600" textAnchor="start">Threshold: T1a → simple cholecystectomy · T1b+ → radical (extended) cholecystectomy + portal LND</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Hydatid cyst — WHO (WHO-IWGE) ultrasound classification
  // ─────────────────────────────────────────────────────────────────────────
  function HydatidWhoFig() {
    const cysts = [
      { id: "CL", x: 92 }, { id: "CE1", x: 208 }, { id: "CE2", x: 324 },
      { id: "CE3", x: 440 }, { id: "CE4", x: 548 }, { id: "CE5", x: 640 },
    ];
    const cy = 116, r = 36;
    const draw = (id, x) => {
      const e = [<circle key="c" cx={x} cy={cy} r={r} fill={WALL} stroke={INK} strokeWidth={id === "CE5" ? 5 : 2} />];
      if (id === "CE1") for (let k = 0; k < 8; k++) { const a = k / 8 * 6.283; e.push(<circle key={"s" + k} cx={x + Math.cos(a) * 15} cy={cy + Math.sin(a) * 15} r={1.8} fill={MUTE} />); }
      if (id === "CE2") [[-14, -12], [14, -12], [-14, 14], [14, 14], [0, 1]].forEach((p, k) => e.push(<circle key={"d" + k} cx={x + p[0]} cy={cy + p[1]} r={9} fill={LUMEN} stroke={ACCENT} strokeWidth="1.4" />));
      if (id === "CE3") e.push(<path key="wl" d={`M ${x - 24} ${cy + 4} Q ${x - 8} ${cy - 8} ${x + 4} ${cy + 5} Q ${x + 16} ${cy + 16} ${x + 24} ${cy + 3}`} fill="none" stroke={ACCENT} strokeWidth="2" />);
      if (id === "CE4") e.push(<path key="ht" d={`M ${x - 18} ${cy - 8} q 9 8 0 16 q 9 8 0 16 M ${x + 2} ${cy - 15} q 9 12 0 24 M ${x + 18} ${cy - 9} q -8 10 0 18`} fill="none" stroke={MUTE} strokeWidth="1.5" />);
      return e;
    };
    return (
      <svg {...svgProps("0 0 700 240")}>
        <text {...T(350, 24, 14, { fontWeight: 700 })}>Hydatid cyst — WHO (WHO-IWGE) ultrasound stages</text>
        {cysts.map((c) => (
          <g key={c.id}>
            {draw(c.id, c.x)}
            <text {...T(c.x, cy + r + 20, 12, { fill: ACCENT, fontWeight: 700 })}>{c.id}</text>
          </g>
        ))}
        <text {...T(92, cy + r + 42, 9, { fill: MUTE })}>undifferentiated</text>
        <text {...T(266, cy + r + 42, 9, { fill: SOFT })}>Active (viable) → treat</text>
        <text {...T(440, cy + r + 42, 9, { fill: SOFT })}>Transitional</text>
        <text {...T(594, cy + r + 42, 9, { fill: SOFT })}>Inactive → observe</text>
        <text {...T(350, 226, 9, { fill: MUTE })}>CE1 sand · CE2 daughter cysts · CE3 water-lily · CE4 heterogeneous · CE5 calcified</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Register all figures
  // ─────────────────────────────────────────────────────────────────────────
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "hpb-couinaud-segments": {
      title: "Couinaud liver segments",
      caption:
        "The liver is divided into eight functionally independent segments by the hepatic veins and portal pedicles (Couinaud, 1957). Segment I (caudate) drains directly to the IVC. Cantlie's line (from the gallbladder fossa to the IVC) separates the true right and left lobes — this plane has no surface marking but guides resection. Each segment can be resected independently, forming the anatomical basis for segmentectomy, sectionectomy, and hemihepatectomy.",
      ref: "Couinaud C. Le Foie. Paris, 1957 · IHPBA Brisbane 2000 Terminology.",
      render: () => React.createElement(CouinaudFig),
    },

    "hpb-bismuth-corlette": {
      title: "Bismuth-Corlette classification (hilar cholangiocarcinoma)",
      caption:
        "Defines the proximal extent of a Klatskin tumour within the biliary confluence. Type I: confined to CHD. Type II: reaches confluence. Type IIIa/b: extends into right or left hepatic duct respectively — resection requires ipsilateral hepatectomy. Type IV: involves secondary ducts bilaterally; resection rarely curative. Classification guides resectability assessment and the extent of hepatectomy required.",
      ref: "Bismuth H & Corlette MB. Am J Surg 1975;130:624 · NCCN Hepatobiliary v2.2024.",
      render: () => React.createElement(BismuthFig),
    },

    "hpb-atlanta-collections": {
      title: "Atlanta 2012 — acute pancreatitis fluid collections",
      caption:
        "The revised Atlanta classification (2012) distinguishes four collection types by two axes: the underlying pancreatitis type (interstitial vs necrotising) and time from onset (< 4 weeks vs ≥ 4 weeks). APFC (acute peripancreatic fluid collection): no defined wall, sterile fluid, mostly resolves spontaneously. ANC (acute necrotic collection): no defined wall, contains necrotic tissue ± fluid, risk of infection. Pseudocyst: well-defined wall, pure fluid content, forms ≥4 weeks after interstitial AP. WON (walled-off necrosis): thick enhancing wall enclosing necrotic material, forms ≥4 weeks after necrotising AP — highest morbidity and most likely to need intervention.",
      ref: "Banks PA et al. Gut 2013;62:102 (Revised Atlanta Classification 2012).",
      render: () => React.createElement(AtlantaFig),
    },

    "hpb-strasberg-bdi": {
      title: "Strasberg bile duct injury classification",
      caption:
        "The Strasberg–Bismuth classification extends Bismuth's scheme to include laparoscopic cholecystectomy injuries. Each panel shows the biliary confluence (hepatic ducts above, common hepatic duct below, D2 = second part of duodenum). Type A: cystic duct or minor duct leak — manageable endoscopically (stent ± sphincterotomy). Types B/C: aberrant right sectoral duct occluded (B) or divided (C) — often missed intraoperatively. Type D: lateral/tangential injury to the CHD without complete transection. Type E (E1–E4): complete circumferential transection at increasing proximity to the confluence — the most serious injuries, requiring hepaticojejunostomy Roux-en-Y repair.",
      ref: "Strasberg SM et al. J Am Coll Surg 1995;180:101.",
      render: () => React.createElement(StrasbergFig),
    },

    "hpb-tokyo-severity": {
      title: "Tokyo Guidelines 2018 — severity grades",
      caption:
        "TG18 severity grades govern timing and urgency of intervention. Cholecystitis — Grade I (mild): no organ dysfunction, mild local inflammation → early laparoscopic cholecystectomy ≤72 h. Grade II (moderate): WBC >18×10⁹/L or <4, palpable mass, duration >72 h, or marked local inflammation → biliary drainage then interval cholecystectomy. Grade III (severe): ≥1 organ dysfunction (cardiovascular, neurological, renal, hepatic, haematological, respiratory) → ICU + urgent drainage. Cholangitis — Grade II criteria: any 2 of: WBC abnormal, fever >39 °C, age >75, bilirubin >85 µmol/L, albumin <0.7× lower normal limit → early ERCP. Grade III: organ dysfunction ≥1 → ICU + urgent ERCP or PTC.",
      ref: "Miura F et al. J Hepatobiliary Pancreat Sci 2018;25:17 · Kiriyama S et al. ibid;25:31 (TG18).",
      render: () => React.createElement(TokyoFig),
    },

    "hpb-biliary-anatomy-stone": {
      title: "Biliary tree anatomy & CBD stone",
      caption:
        "CBD stones arise from the gallbladder (secondary) or form de novo in the duct (primary). A stone at the distal CBD / ampulla of Vater obstructs bile flow causing conjugated hyperbilirubinaemia; simultaneous pancreatic duct obstruction precipitates gallstone pancreatitis. The anatomical landmark for surgical exploration is the common bile duct at the hepatoduodenal ligament, where it lies anterior to the portal vein and medial to the hepatic artery.",
      ref: "Strasberg SM. N Engl J Med 2008;358:2804 · ESGE CBD stone guideline 2019.",
      render: () => React.createElement(BiliaryAnatomyFig),
    },

    "hpb-panc-resectability": {
      title: "Pancreatic cancer — resectability by vessel contact",
      caption:
        "Resectability of pancreatic ductal adenocarcinoma is defined by the tumour's relationship to the coeliac axis, SMA, common hepatic artery, and SMV/portal vein on CT. Resectable disease has no arterial contact and ≤180° venous contact with a normal contour; borderline disease has limited arterial contact (≤180°) or reconstructable venous involvement and is offered neoadjuvant therapy first; locally advanced disease has >180° arterial encasement or an unreconstructable vein and is unresectable. Degrees of contact, not size, drive the decision.",
      ref: "NCCN Guidelines — Pancreatic Adenocarcinoma · Al-Hawary MM et al., Radiology 2014 (consensus).",
      render: () => React.createElement(PancResectabilityFig),
    },

    "hpb-chronic-panc-ops": {
      title: "Chronic pancreatitis — drainage vs resection",
      caption:
        "Operations are chosen by ductal anatomy and whether an inflammatory head mass is present. A dilated main duct without a mass is drained by a Puestow (lateral pancreaticojejunostomy); a head-predominant 'inflammatory mass' is addressed by resection or a hybrid — Frey (head coring + lateral PJ), Beger (duodenum-preserving pancreatic head resection), or a Whipple when malignancy cannot be excluded. Drainage preserves parenchyma; resection tackles the pacemaker of pain in the head.",
      ref: "Frey CF, Smith GJ, Pancreas 1987 · Beger HG et al., Ann Surg 1999 · AGA/IAP guidance.",
      render: () => React.createElement(ChronicPancOpsFig),
    },

    "hpb-ipmn-types": {
      title: "IPMN — main-duct vs branch-duct & Fukuoka features",
      caption:
        "Main-duct IPMN (segmental or diffuse MPD dilation ≥5 mm without another cause) carries a high risk of malignancy and is generally resected. Branch-duct IPMN is a cyst communicating with a non-dilated main duct and is lower-risk, so it is stratified by 'worrisome features' (which prompt EUS) and 'high-risk stigmata' — obstructive jaundice with a cystic head lesion, an enhancing mural nodule ≥5 mm, or MPD ≥10 mm — which mandate resection.",
      ref: "Tanaka M et al., Pancreatology 2017 (revised Fukuoka/international consensus).",
      render: () => React.createElement(IpmnTypesFig),
    },

    "hpb-gb-cancer-tstage": {
      title: "Gallbladder cancer — T-stage & the re-resection threshold",
      caption:
        "T-stage is defined by depth of invasion through the gallbladder wall. The pivotal threshold is T1a (lamina propria) versus T1b (muscularis): a T1a tumour found incidentally after cholecystectomy is cured by the cholecystectomy alone, whereas T1b and beyond require radical (extended) cholecystectomy — resection of liver segments IVb/V and a portal lymphadenectomy. T2b (hepatic-side) tumours carry a worse prognosis than T2a (peritoneal-side).",
      ref: "AJCC Cancer Staging Manual 8th ed · Aloia TA et al., HPB 2015 (expert consensus).",
      render: () => React.createElement(GbCancerTStageFig),
    },

    "hpb-hydatid-who": {
      title: "Hydatid cyst — WHO ultrasound classification (CE1–CE5)",
      caption:
        "The WHO-IWGE classification groups hepatic hydatid (Echinococcus granulosus) cysts by activity on ultrasound. CE1 (unilocular with hydatid sand) and CE2 (multivesicular, daughter cysts) are ACTIVE and viable; CE3 (detached membrane — the 'water-lily' sign) is transitional; CE4 (heterogeneous, degenerated) and CE5 (calcified wall) are INACTIVE. Active cysts warrant treatment (albendazole plus PAIR or surgery), whereas inactive CE4/CE5 cysts can often simply be observed.",
      ref: "WHO Informal Working Group on Echinococcosis, Acta Trop 2003;85:253.",
      render: () => React.createElement(HydatidWhoFig),
    },

  });
})();
