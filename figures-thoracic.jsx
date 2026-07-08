// figures-thoracic.jsx — original SVG teaching diagrams for Thoracic Surgery.
// Rendered inline, offline, theme-aware. Do NOT edit figures.jsx.

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
  // Mediastinal compartments (Shields / Carter 3-zone model)
  // Anterior / Middle / Posterior with classic mass differentials
  // ─────────────────────────────────────────────────────────────────────────
  function MediastinalCompartmentsFig() {
    // Schematic chest cross-section, viewed from the right side (lateral chest X-ray orientation)
    // Zones drawn as vertical columns within the mediastinum

    const svgW = 640, svgH = 420;

    // Outer chest silhouette (rough oval)
    const chestPath = "M 70 60 Q 70 20 320 20 Q 570 20 570 60 L 570 360 Q 570 400 320 400 Q 70 400 70 360 Z";

    // Pericardium / heart silhouette inside middle
    const heartPath = "M 285 130 Q 240 120 230 170 Q 220 230 285 280 Q 320 300 355 280 Q 420 230 410 170 Q 400 120 355 130 Q 340 110 320 115 Q 305 110 285 130 Z";

    // Zone boundary x-coordinates
    const antRight = 240; // right edge of anterior zone
    const postLeft = 400; // left edge of posterior zone
    const topY = 40, botY = 390;

    // Vertebral body hint (posterior)
    const vertX = 470, vertY = 200;

    // Trachea / main bronchi hint (middle)
    const tracheaPath = "M 320 55 L 320 145 M 320 145 Q 295 155 275 175 M 320 145 Q 345 155 365 175";

    const items = [
      // Anterior zone (left of antRight)
      { zone: "ant", x: 140, y: 180, label: "ANTERIOR" },
      // Middle zone
      { zone: "mid", x: 320, y: 200, label: "MIDDLE" },
      // Posterior zone (right of postLeft)
      { zone: "post", x: 505, y: 180, label: "POSTERIOR" },
    ];

    const antDiffs = ["Thymoma / thymolipoma", "Teratoma / germ-cell", "Thyroid goitre", "Lymphoma (Hodgkin)"];
    const midDiffs = ["Pericardial cyst", "Lymphoma (NHL)", "Bronchogenic cyst", "Aortic aneurysm"];
    const postDiffs = ["Neurogenic tumour", "(schwannoma, NF)", "Oesophageal tumour", "Thoracic aorta", "aneurysm"];

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        {/* chest silhouette */}
        <path d={chestPath} fill={WALL} stroke={RULE} strokeWidth="2" />

        {/* zone fills */}
        <clipPath id="tho-chest-clip">
          <path d={chestPath} />
        </clipPath>
        <rect x={70} y={topY} width={antRight - 70} height={botY - topY} fill={ASOFT} opacity="0.38" clipPath="url(#tho-chest-clip)" />
        <rect x={antRight} y={topY} width={postLeft - antRight} height={botY - topY} fill={LUMEN} opacity="0.5" clipPath="url(#tho-chest-clip)" />
        <rect x={postLeft} y={topY} width={570 - postLeft} height={botY - topY} fill={WALL} opacity="0.55" clipPath="url(#tho-chest-clip)" />

        {/* zone boundary lines */}
        <line x1={antRight} y1={topY + 14} x2={antRight} y2={botY - 10} stroke={RULE} strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1={postLeft} y1={topY + 14} x2={postLeft} y2={botY - 10} stroke={RULE} strokeWidth="1.5" strokeDasharray="6 4" />

        {/* heart */}
        <path d={heartPath} fill={LUMEN} stroke={INK} strokeWidth="1.5" />
        <text {...T(320, 215, 10.5, { fill: SOFT })}>Heart</text>
        <text {...T(320, 228, 10, { fill: SOFT })}>Pericardium</text>

        {/* trachea */}
        <path d={tracheaPath} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />

        {/* vertebral body hint */}
        <rect x={vertX - 24} y={vertY - 22} width={48} height={44} rx="5" fill={WALL} stroke={INK} strokeWidth="1.5" />
        <text {...T(vertX, vertY + 4, 10, { fill: SOFT })}>Spine</text>

        {/* zone labels */}
        <text {...T(140, 68, 13.5, { fontWeight: 700, fill: ACCENT })}>ANTERIOR</text>
        <text {...T(320, 68, 13.5, { fontWeight: 700, fill: INK })}>MIDDLE</text>
        <text {...T(500, 68, 13.5, { fontWeight: 700, fill: MUTE })}>POSTERIOR</text>

        {/* differentials — anterior */}
        {antDiffs.map((d, i) => (
          <text key={i} {...T(138, 290 + i * 17, 10.5, { fill: INK })}>{d}</text>
        ))}

        {/* differentials — middle */}
        {midDiffs.map((d, i) => (
          <text key={i} {...T(320, 310 + i * 17, 10.5, { fill: INK })}>{d}</text>
        ))}

        {/* differentials — posterior */}
        {postDiffs.map((d, i) => (
          <text key={i} {...T(502, 290 + i * 17, 10, { fill: INK })}>{d}</text>
        ))}

        {/* divider between zones and differentials */}
        <line x1={80} y1={275} x2={565} y2={275} stroke={RULE} strokeWidth="1" strokeDasharray="3 3" />
        <text {...T(svgW / 2, 270, 10, { fill: SOFT })}>Classic mass differentials per compartment</text>

        {/* "4 Ts" hint */}
        <text {...T(138, 278, 9.5, { fill: SOFT, fontStyle: "italic" })}>"4 Ts" mnemonic</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Masaoka-Koga staging of thymoma (I → IVb)
  // Cross-section of thymus / capsule layers showing invasion depth
  // ─────────────────────────────────────────────────────────────────────────
  function MasakokaFig() {
    // Horizontal ladder — each stage shown as concentric zone invaded

    const svgW = 620, svgH = 360;
    const cx = 220, cy = 165;

    // Concentric ellipses: thymus, capsule, mediastinal fat, pleura/pericardium, great vessels
    // Radii (rx, ry)
    const zones = [
      { rx: 60, ry: 44, fill: ASOFT, label: "Thymus\n(tumour)" },
      { rx: 80, ry: 60, fill: WALL, label: "Capsule" },
      { rx: 110, ry: 80, fill: LUMEN, label: "Mediastinal fat" },
      { rx: 145, ry: 106, fill: WALL, label: "Pleura / pericardium" },
    ];

    // Stages as ladder on the right
    const stages = [
      { id: "I",   desc: "Encapsulated; intact capsule", color: INK },
      { id: "IIA", desc: "Microscopic transcapsular invasion", color: INK },
      { id: "IIB", desc: "Macroscopic capsule invasion /\nadherent pleura (intact)", color: INK },
      { id: "III", desc: "Invasion: pericardium, lung,\nor great vessels", color: ACCENT },
      { id: "IVa", desc: "Pleural/pericardial dissemination", color: ACCENT },
      { id: "IVb", desc: "Lymphatic/haematogenous mets", color: ACCENT },
    ];

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        {/* concentric zones drawn largest first */}
        {[...zones].reverse().map((z, i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={z.rx} ry={z.ry} fill={z.fill} stroke={RULE} strokeWidth="1.2" />
        ))}

        {/* zone labels — left side spokes */}
        {zones.map((z, i) => {
          const angle = 200 + i * 12; // degrees, fanning down-left
          const rad = (angle * Math.PI) / 180;
          const lx = cx + (z.rx + 8) * Math.cos(rad);
          const ly = cy + (z.ry + 8) * Math.sin(rad);
          return (
            <text key={i} x={lx - 4} y={ly} fontSize="9.5" fill={SOFT} textAnchor="end">{z.label}</text>
          );
        })}

        {/* Title */}
        <text {...T(cx, 18, 13, { fontWeight: 700 })}>Masaoka-Koga Thymoma Staging</text>
        <text {...T(cx, 295, 10.5, { fill: SOFT })}>Cross-section of thymus + surrounding structures</text>

        {/* invasion arrows for stage III */}
        <path d={`M ${cx + 75} ${cy - 20} L ${cx + 130} ${cy - 20}`} fill="none" stroke={ACCENT} strokeWidth="2" markerEnd="url(#arr-tho)" />
        <text x={cx + 102} y={cy - 26} fontSize="9" fill={ACCENT} textAnchor="middle">Stage III</text>

        {/* Stage ladder — right panel */}
        <line x1={355} y1={35} x2={355} y2={320} stroke={RULE} strokeWidth="1" />
        <text {...T(490, 30, 12, { fontWeight: 700 })}>Stage ladder</text>
        {stages.map((s, i) => {
          const y = 55 + i * 43;
          const isAdvanced = s.color === ACCENT;
          const lines = s.desc.split("\n");
          return (
            <g key={s.id}>
              <rect x={363} y={y - 18} width={248} height={36} rx="4"
                fill={isAdvanced ? ASOFT : WALL} stroke={isAdvanced ? ACCENT : RULE} strokeWidth="1.2" />
              <text x={378} y={y - 2} fontSize="13" fill={s.color} fontWeight="700">{s.id}</text>
              <text x={410} y={y - 2} fontSize="10" fill={INK} textAnchor="start">{lines[0]}</text>
              {lines[1] && (
                <text x={410} y={y + 12} fontSize="10" fill={INK} textAnchor="start">{lines[1]}</text>
              )}
            </g>
          );
        })}

        {/* arrow marker def */}
        <defs>
          <marker id="arr-tho" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill={ACCENT} />
          </marker>
        </defs>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Pneumothorax types + tension physiology
  // ─────────────────────────────────────────────────────────────────────────
  function PneumothoraxFig() {
    const svgW = 660, svgH = 380;

    // Helper: draw one lung in a panel (collapsed or full)
    const lungOutline = (ox, oy, collapsed) => {
      const w = collapsed ? 44 : 90, h = collapsed ? 130 : 170;
      const x = ox + (collapsed ? 38 : 14);
      return (
        <path
          d={`M ${x + w / 2} ${oy + 10} Q ${x} ${oy + 20} ${x} ${oy + h / 2} Q ${x} ${oy + h} ${x + w / 2} ${oy + h + 10} Q ${x + w} ${oy + h} ${x + w} ${oy + h / 2} Q ${x + w} ${oy + 20} ${x + w / 2} ${oy + 10} Z`}
          fill={ASOFT} stroke={ACCENT} strokeWidth="2"
        />
      );
    };

    const chestWall = (ox, oy, w, h) => (
      <rect x={ox} y={oy} width={w} height={h} rx="8" fill="none" stroke={INK} strokeWidth="2.5" />
    );

    // Three panels: primary spontaneous, secondary/traumatic, tension
    const panels = [
      { label: "Primary\nSpontaneous", sub: "Apical bleb rupture\nyoung, tall, thin male", collapsed: false, tension: false, ox: 30 },
      { label: "Secondary /\nTraumatic", sub: "Underlying lung disease\nor penetrating trauma", collapsed: true, tension: false, ox: 240 },
      { label: "Tension", sub: "One-way valve: air enters,\ncannot exit → mediastinal shift", collapsed: true, tension: true, ox: 450 },
    ];

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        <text {...T(svgW / 2, 22, 14, { fontWeight: 700 })}>Pneumothorax Types</text>

        {panels.map((p) => {
          const oy = 48;
          const panW = 180, panH = 230;
          return (
            <g key={p.label}>
              {/* chest box */}
              {chestWall(p.ox, oy, panW, panH)}

              {/* air in pleural space */}
              {p.collapsed && (
                <rect x={p.ox + 4} y={oy + 4} width={panW - 8} height={panH - 8} rx="6"
                  fill={LUMEN} stroke="none" />
              )}

              {/* lung */}
              {lungOutline(p.ox, oy + 30, p.collapsed)}

              {/* trachea + mediastinum */}
              {!p.tension && (
                <line x1={p.ox + panW / 2} y1={oy} x2={p.ox + panW / 2} y2={oy + 30}
                  stroke={INK} strokeWidth="2" strokeLinecap="round" />
              )}
              {p.tension && (
                /* shifted trachea */
                <path d={`M ${p.ox + panW / 2 - 20} ${oy} L ${p.ox + panW / 2 - 14} ${oy + 30}`}
                  fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
              )}

              {/* tension arrows */}
              {p.tension && (
                <g>
                  <path d={`M ${p.ox + 100} ${oy + 110} L ${p.ox + 60} ${oy + 110}`}
                    fill="none" stroke={ACCENT} strokeWidth="2.5" markerEnd="url(#arr-tho2)" />
                  <text x={p.ox + 92} y={oy + 100} fontSize="9.5" fill={ACCENT} textAnchor="end">Mediastinal</text>
                  <text x={p.ox + 92} y={oy + 113} fontSize="9.5" fill={ACCENT} textAnchor="end">shift</text>
                  {/* elevated hemi-diaphragm arrow */}
                  <path d={`M ${p.ox + 90} ${oy + 215} L ${p.ox + 90} ${oy + 185}`}
                    fill="none" stroke={ACCENT} strokeWidth="2" markerEnd="url(#arr-tho2)" />
                  <text x={p.ox + 92} y={oy + 228} fontSize="9.5" fill={ACCENT} textAnchor="middle">Depressed</text>
                  <text x={p.ox + 92} y={oy + 239} fontSize="9.5" fill={ACCENT} textAnchor="middle">diaphragm</text>
                  {/* air entry arrow from outside — label sits above arrow, anchored end so it stays inside viewBox */}
                  <path d={`M ${p.ox + 175} ${oy + 60} L ${p.ox + 155} ${oy + 60}`}
                    fill="none" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="4 3" markerEnd="url(#arr-tho2)" />
                  <text x={p.ox + 174} y={oy + 55} fontSize="9" fill={ACCENT} textAnchor="end">air in</text>
                </g>
              )}

              {/* free air label */}
              {p.collapsed && (
                <text {...T(p.ox + panW / 2 + 28, oy + 90, 9.5, { fill: SOFT })}>free</text>
              )}
              {p.collapsed && (
                <text {...T(p.ox + panW / 2 + 28, oy + 103, 9.5, { fill: SOFT })}>air</text>
              )}

              {/* panel title */}
              {p.label.split("\n").map((line, li) => (
                <text key={li} {...T(p.ox + panW / 2, oy + panH + 24 + li * 16, 12.5, { fontWeight: 700 })}>{line}</text>
              ))}
              {p.sub.split("\n").map((line, li) => (
                <text key={li} {...T(p.ox + panW / 2, oy + panH + 60 + li * 14, 10, { fill: SOFT })}>{line}</text>
              ))}
            </g>
          );
        })}

        <defs>
          <marker id="arr-tho2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill={ACCENT} />
          </marker>
        </defs>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Triangle of Safety — chest drain insertion site
  // Borders: ANTERIOR = lateral edge of pectoralis major
  //          POSTERIOR = anterior edge of latissimus dorsi
  //          INFERIOR = horizontal line at nipple / 5th ICS
  // ─────────────────────────────────────────────────────────────────────────
  function TriangleSafetyFig() {
    const svgW = 560, svgH = 480;

    // Simplified chest wall silhouette from front, arm raised (to show axilla)
    // Torso outline
    const torsoPath = "M 160 30 Q 120 40 110 100 L 100 420 Q 100 450 180 460 L 380 460 Q 460 450 460 420 L 450 100 Q 440 40 400 30 Z";

    // Left arm raised (patient's left = viewer's right on diagram, but we draw viewer's left side to show axilla)
    const armPath = "M 110 100 Q 70 80 50 50 Q 40 30 60 24 Q 80 18 100 50 Q 115 78 110 100";

    // Pectoralis major lateral edge: runs from ~(175, 90) down to (175, 280)
    const pectLateralX = 178;

    // Latissimus dorsi anterior edge: runs from roughly (290, 130) down to (305, 300)
    const latAnteriorX = 300;

    // Nipple line y ~ 260 (5th ICS)
    const nippleY = 262;

    // Triangle vertices
    const triTop   = { x: pectLateralX, y: 130 };   // superior-anterior corner
    const triTopR  = { x: latAnteriorX, y: 130 };   // superior-posterior corner
    const triBotL  = { x: pectLateralX, y: nippleY };
    const triBotR  = { x: latAnteriorX, y: nippleY };

    // Actual triangle (pect lateral, lat anterior, nipple line)
    const triPoints = `${triTop.x},${triTop.y} ${triTopR.x},${triTopR.y} ${triBotR.x},${triBotR.y} ${triBotL.x},${triBotL.y}`;

    // Ribs hint — a few arcs across the torso
    const ribsY = [140, 180, 220, 262];

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        {/* torso */}
        <path d={torsoPath} fill={WALL} stroke={INK} strokeWidth="2" />
        {/* arm */}
        <path d={armPath} fill={WALL} stroke={INK} strokeWidth="2" />

        {/* ribs */}
        {ribsY.map((ry, i) => (
          <path key={i}
            d={`M 108 ${ry} Q 200 ${ry - 10} 260 ${ry} Q 320 ${ry + 10} 450 ${ry}`}
            fill="none" stroke={RULE} strokeWidth="1" strokeDasharray="4 3" />
        ))}

        {/* nipple markers */}
        <circle cx={192} cy={nippleY} r={5} fill={INK} />
        <text x={185} y={nippleY - 10} fontSize="10" fill={SOFT} textAnchor="middle">Nipple</text>
        <text x={185} y={nippleY - 22} fontSize="10" fill={SOFT} textAnchor="middle">(5th ICS)</text>

        {/* Triangle of Safety fill */}
        <polygon points={triPoints} fill={ASOFT} stroke={ACCENT} strokeWidth="2.5" />

        {/* Drain insertion point */}
        <circle cx={(pectLateralX + latAnteriorX) / 2} cy={(130 + nippleY) / 2 + 10} r={7}
          fill={ACCENT} />
        <line
          x1={(pectLateralX + latAnteriorX) / 2} y1={(130 + nippleY) / 2 + 17}
          x2={(pectLateralX + latAnteriorX) / 2} y2={(130 + nippleY) / 2 + 44}
          stroke={ACCENT} strokeWidth="2.5" />
        <text {...T((pectLateralX + latAnteriorX) / 2, (130 + nippleY) / 2 + 58, 10.5, { fill: ACCENT, fontWeight: 700 })}>Drain site</text>
        <text {...T((pectLateralX + latAnteriorX) / 2, (130 + nippleY) / 2 + 71, 9.5, { fill: ACCENT })}>(4th–5th ICS)</text>

        {/* border labels */}
        {/* Anterior = lateral edge of pect major */}
        <line x1={pectLateralX - 2} y1={130} x2={pectLateralX - 2} y2={nippleY}
          stroke={INK} strokeWidth="1.5" strokeDasharray="5 3" />
        <text x={pectLateralX - 10} y={195} fontSize="10.5" fill={INK} textAnchor="end" fontWeight="600">Ant. border:</text>
        <text x={pectLateralX - 10} y={208} fontSize="10" fill={MUTE} textAnchor="end">Lat. edge</text>
        <text x={pectLateralX - 10} y={220} fontSize="10" fill={MUTE} textAnchor="end">pect. major</text>

        {/* Posterior = ant. edge of lat. dorsi */}
        <line x1={latAnteriorX + 2} y1={130} x2={latAnteriorX + 2} y2={nippleY}
          stroke={INK} strokeWidth="1.5" strokeDasharray="5 3" />
        <text x={latAnteriorX + 10} y={195} fontSize="10.5" fill={INK} textAnchor="start" fontWeight="600">Post. border:</text>
        <text x={latAnteriorX + 10} y={208} fontSize="10" fill={MUTE} textAnchor="start">Ant. edge</text>
        <text x={latAnteriorX + 10} y={220} fontSize="10" fill={MUTE} textAnchor="start">lat. dorsi</text>

        {/* Inferior = nipple line */}
        <line x1={pectLateralX} y1={nippleY + 2} x2={latAnteriorX} y2={nippleY + 2}
          stroke={INK} strokeWidth="1.5" strokeDasharray="5 3" />
        <text x={(pectLateralX + latAnteriorX) / 2} y={nippleY + 22}
          fontSize="10.5" fill={INK} textAnchor="middle" fontWeight="600">Inf. border: nipple level (5th ICS)</text>

        <text {...T(svgW / 2, 22, 14, { fontWeight: 700 })}>Triangle of Safety — Chest Drain</text>
        <text {...T(svgW / 2, 440, 10.5, { fill: SOFT })}>Always insert over the superior rib margin to avoid neurovascular bundle</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Diaphragmatic hernia: Bochdalek (posterolateral) vs Morgagni (anterior)
  // Inferior view of diaphragm showing defect locations
  // ─────────────────────────────────────────────────────────────────────────
  function DiaphragmaticHerniaFig() {
    const svgW = 600, svgH = 400;
    const cx = 300, cy = 175;

    // Diaphragm dome — ellipse
    const dRx = 220, dRy = 130;

    // Central tendon ellipse
    const ctRx = 80, ctRy = 50;

    // Key foramina / openings
    // Oesophageal hiatus ~ (cx, cy - 20)
    // Aortic hiatus ~ (cx, cy + 30)
    // IVC ~ (cx + 50, cy - 30)

    // Bochdalek defect: posterolateral, typically LEFT side
    // In inferior view: posterior = bottom, left = right on diagram (anatomic left)
    const bochL = { x: cx + 90, y: cy + 68 };  // left posterolateral (anatomic left = viewer's right)
    const bochR = { x: cx - 90, y: cy + 68 };  // right posterolateral (usually patent foramen of Bochdalek, rare hernia)

    // Morgagni defect: anterior parasternal
    const morgL = { x: cx + 55, y: cy - 90 };  // right Morgagni (more common)
    const morgR = { x: cx - 55, y: cy - 90 };

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        {/* diaphragm main body */}
        <ellipse cx={cx} cy={cy} rx={dRx} ry={dRy} fill={WALL} stroke={INK} strokeWidth="2.5" />

        {/* central tendon */}
        <ellipse cx={cx} cy={cy} rx={ctRx} ry={ctRy} fill={LUMEN} stroke={RULE} strokeWidth="1.5" />
        <text {...T(cx, cy + 5, 10, { fill: SOFT })}>Central tendon</text>

        {/* Hiatus labels */}
        {/* Oesophageal hiatus */}
        <circle cx={cx} cy={cy - 18} r={7} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />
        <text x={cx + 12} y={cy - 14} fontSize="9.5" fill={SOFT} textAnchor="start">Oesoph. hiatus</text>

        {/* Aortic hiatus — label anchored end (leftward) to avoid collision with Bochdalek label */}
        <circle cx={cx} cy={cy + 30} r={6} fill={ASOFT} stroke={RULE} strokeWidth="1.5" />
        <text x={cx - 10} y={cy + 34} fontSize="9.5" fill={SOFT} textAnchor="end">Aortic hiatus</text>

        {/* IVC */}
        <circle cx={cx + 52} cy={cy - 28} r={5} fill={ASOFT} stroke={RULE} strokeWidth="1.5" />
        <text x={cx + 60} y={cy - 24} fontSize="9.5" fill={SOFT} textAnchor="start">IVC</text>

        {/* Bochdalek defect — LEFT (anatomic), posterolateral */}
        <ellipse cx={bochL.x} cy={bochL.y} rx={26} ry={18} fill={ACCENT} opacity="0.28" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="6 3" />
        <text {...T(bochL.x, bochL.y - 28, 11, { fontWeight: 700, fill: ACCENT })}>Bochdalek</text>
        <text {...T(bochL.x, bochL.y - 15, 9.5, { fill: ACCENT })}>(posterolateral)</text>
        <text {...T(bochL.x, bochL.y + 32, 9.5, { fill: MUTE })}>Left &gt; right</text>
        <text {...T(bochL.x, bochL.y + 44, 9.5, { fill: MUTE })}>85–90% of CDH</text>

        {/* Morgagni defect — typically RIGHT parasternal */}
        <ellipse cx={morgL.x} cy={morgL.y} rx={22} ry={14} fill={MUTE} opacity="0.2" stroke={MUTE} strokeWidth="2" strokeDasharray="5 3" />
        <text {...T(morgL.x, morgL.y - 22, 11, { fontWeight: 700, fill: MUTE })}>Morgagni</text>
        <text {...T(morgL.x, morgL.y - 10, 9.5, { fill: MUTE })}>(anterior/parasternal)</text>
        <text {...T(morgL.x, morgL.y + 28, 9.5, { fill: SOFT })}>Right &gt; left; ~5%</text>
        <text {...T(morgL.x, morgL.y + 40, 9.5, { fill: SOFT })}>Usually colon/liver</text>

        {/* Orientation: terse label to clear title (y=22) above and Morgagni labels below */}
        <text {...T(cx, cy - dRy - 6, 10, { fill: SOFT })}>Anterior</text>
        <text {...T(cx, cy + dRy + 18, 11, { fill: SOFT })}>Posterior (spine)</text>
        <text x={cx - dRx - 10} y={cy + 5} fontSize="10.5" fill={SOFT} textAnchor="end">R</text>
        <text x={cx + dRx + 12} y={cy + 5} fontSize="10.5" fill={SOFT} textAnchor="start">L</text>
        <text x={cx - dRx - 10} y={cy + 18} fontSize="9.5" fill={SOFT} textAnchor="end">(pt.)</text>
        <text x={cx + dRx + 12} y={cy + 18} fontSize="9.5" fill={SOFT} textAnchor="start">(pt.)</text>

        <text {...T(svgW / 2, 22, 14, { fontWeight: 700 })}>Congenital Diaphragmatic Hernia — Defect Locations</text>
        <text {...T(svgW / 2, 370, 10.5, { fill: SOFT })}>Inferior view of diaphragm. Bochdalek = posterolateral; Morgagni = anterolateral/parasternal.</text>
        <text {...T(svgW / 2, 385, 10, { fill: SOFT })}>Left Bochdalek hernia: stomach, small bowel, spleen herniate into left thorax → lung hypoplasia.</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Lung cancer TNM nodal station map (IASLC 2009 map — simplified)
  // ─────────────────────────────────────────────────────────────────────────
  function LungCancerNodalFig() {
    const svgW = 580, svgH = 500;

    // Schematic trachea / carina / bronchi
    const tracheaX = 290, tracheaTop = 30, tracheaBot = 200;
    const carinaY = 200;
    const lMainBxEnd = { x: 180, y: 270 };
    const rMainBxEnd = { x: 400, y: 260 };

    // Node station definitions [station, label, cx, cy, n-stage note]
    const stations = [
      // Superior mediastinal
      { n: "1", label: "Highest mediastinal", cx: 290, cy: 60,  side: "mid" },
      { n: "2R", label: "Upper paratracheal R", cx: 355, cy: 90,  side: "r" },
      { n: "2L", label: "Upper paratracheal L", cx: 225, cy: 90,  side: "l" },
      { n: "4R", label: "Lower paratracheal R", cx: 360, cy: 145, side: "r" },
      { n: "4L", label: "Lower paratracheal L", cx: 220, cy: 145, side: "l" },
      // Aortic
      { n: "5", label: "Subaortic (A-P window)", cx: 155, cy: 185, side: "l" },
      { n: "6", label: "Para-aortic (ascending)", cx: 130, cy: 155, side: "l" },
      // Inferior mediastinal
      { n: "7", label: "Subcarinal", cx: 290, cy: 240, side: "mid" },
      { n: "8", label: "Paraesophageal", cx: 290, cy: 295, side: "mid" },
      { n: "9", label: "Pulmonary ligament", cx: 290, cy: 345, side: "mid" },
      // Hilar / interlobar / lobar
      { n: "10R", label: "Hilar R", cx: 408, cy: 220, side: "r" },
      { n: "10L", label: "Hilar L", cx: 172, cy: 225, side: "l" },
      { n: "11", label: "Interlobar", cx: 420, cy: 280, side: "r" },
    ];

    const stationColor = (side) => side === "mid" ? INK : side === "r" ? ACCENT : MUTE;

    // N-stage summary table at bottom
    const nStages = [
      { n: "N0", desc: "No regional node mets" },
      { n: "N1", desc: "Ipsilateral hilar / intrapulmonary (stations 10–14)" },
      { n: "N2", desc: "Ipsilateral mediastinal / subcarinal (stations 1–9)" },
      { n: "N3", desc: "Contralateral mediastinal, hilar, or supraclavicular" },
    ];

    return (
      <svg {...svgProps(`0 0 ${svgW} ${svgH}`)}>
        <text {...T(svgW / 2, 20, 14, { fontWeight: 700 })}>Lung Cancer — IASLC Nodal Stations (Simplified)</text>

        {/* trachea */}
        <rect x={tracheaX - 14} y={tracheaTop + 20} width={28} height={tracheaBot - tracheaTop - 10}
          rx="7" fill={LUMEN} stroke={INK} strokeWidth="2" />
        <text {...T(tracheaX, tracheaTop + 14, 9.5, { fill: SOFT })}>Trachea</text>

        {/* carina */}
        <circle cx={tracheaX} cy={carinaY} r={5} fill={INK} />
        <text {...T(tracheaX, carinaY + 16, 9, { fill: SOFT })}>Carina</text>

        {/* main bronchi */}
        <path d={`M ${tracheaX} ${carinaY} Q ${lMainBxEnd.x + 30} ${carinaY + 10} ${lMainBxEnd.x} ${lMainBxEnd.y}`}
          fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
        <path d={`M ${tracheaX} ${carinaY} Q ${rMainBxEnd.x - 30} ${carinaY + 10} ${rMainBxEnd.x} ${rMainBxEnd.y}`}
          fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />

        {/* Left / Right labels */}
        <text x={145} y={270} fontSize="11" fill={MUTE} fontWeight="700">L main</text>
        <text x={390} y={260} fontSize="11" fill={ACCENT} fontWeight="700" textAnchor="end">R main</text>

        {/* Node stations */}
        {stations.map((s) => {
          const col = stationColor(s.side);
          return (
            <g key={s.n}>
              <circle cx={s.cx} cy={s.cy} r={11} fill={ASOFT} stroke={col} strokeWidth="1.8" />
              <text {...T(s.cx, s.cy + 4, 9.5, { fill: col, fontWeight: 700 })}>{s.n}</text>
            </g>
          );
        })}

        {/* Legend side labels */}
        <circle cx={48} cy={360} r={7} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5"  /><text x={60} y={364} fontSize="10" fill={ACCENT}>Right-sided</text>
        <circle cx={48} cy={378} r={7} fill={ASOFT} stroke={MUTE}   strokeWidth="1.5"  /><text x={60} y={382} fontSize="10" fill={MUTE}>Left-sided</text>
        <circle cx={48} cy={396} r={7} fill={ASOFT} stroke={INK}    strokeWidth="1.5"  /><text x={60} y={400} fontSize="10" fill={INK}>Midline</text>

        {/* N-stage table */}
        <line x1={20} y1={415} x2={svgW - 20} y2={415} stroke={RULE} strokeWidth="1" />
        <text {...T(svgW / 2, 428, 11, { fontWeight: 700 })}>N-stage summary</text>
        {nStages.map((ns, i) => (
          <g key={ns.n}>
            <text x={32} y={445 + i * 14} fontSize="11" fill={ACCENT} fontWeight="700">{ns.n}</text>
            <text x={58} y={445 + i * 14} fontSize="10.5" fill={INK}>{ns.desc}</text>
          </g>
        ))}
      </svg>
    );
  }

  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {

    "tho-mediastinal-compartments": {
      title: "Mediastinal compartments & mass differentials",
      caption: "The 3-zone model divides the mediastinum into anterior, middle, and posterior compartments. Knowing which compartment a mass occupies immediately narrows the differential: the 'four Ts' (thymoma, teratoma, thyroid, terrible lymphoma) occupy the anterior zone; neurogenic tumours are almost exclusively posterior.",
      ref: "Shields TW (ed). General Thoracic Surgery, 7th ed. 2009 · Carter BW et al., Radiographics 2017;37:413",
      render: () => <MediastinalCompartmentsFig />,
    },

    "tho-masaoka-koga-thymoma": {
      title: "Masaoka-Koga staging of thymoma",
      caption: "Stage I and IIA thymomas are fully resected with excellent prognosis (>90% 10-year survival). Stage IVb disease adds lymphatic or haematogenous spread. The key surgical landmark is capsular integrity: even microscopic breach (IIA) is prognostically distinct from macroscopic invasion (IIB).",
      ref: "Masaoka A et al., Cancer 1981;48:2485 · Koga K et al., J Surg Oncol 1994 · WHO/ITMIG consensus 2014",
      render: () => <MasakokaFig />,
    },

    "tho-pneumothorax-types": {
      title: "Pneumothorax types & tension physiology",
      caption: "Tension pneumothorax develops when a one-way valve mechanism allows progressive air accumulation, causing ipsilateral lung collapse, mediastinal shift, contralateral lung compression, and impaired venous return — a immediately life-threatening emergency requiring needle decompression before imaging. Primary spontaneous pneumothorax occurs in young healthy individuals; secondary (SSP) carries higher morbidity due to underlying lung disease.",
      ref: "BTS Pleural Disease Guideline, Thorax 2010;65(Suppl 2):ii18 · Leigh-Smith S, BMJ 2005",
      render: () => <PneumothoraxFig />,
    },

    "tho-triangle-of-safety": {
      title: "Triangle of Safety — chest drain insertion",
      caption: "The triangle of safety minimises risk of inadvertent injury to breast tissue, subcutaneous fat, or the long thoracic nerve. Its borders are: ANTERIOR — lateral edge of pectoralis major; POSTERIOR — anterior edge of latissimus dorsi; INFERIOR — horizontal line at the nipple (5th intercostal space). The drain is inserted over the superior rib margin to avoid the neurovascular bundle running under each rib.",
      ref: "Laws D et al., Thorax 2003;58(Suppl 2):ii53 · ATLS 10th ed. · Havelock T, Thorax 2010;65(Suppl 2):ii61",
      render: () => <TriangleSafetyFig />,
    },

    "tho-cdh-locations": {
      title: "Congenital diaphragmatic hernia — Bochdalek vs Morgagni",
      caption: "Bochdalek hernias occur through the posterolateral pleuroperitoneal canal (left > right, 85–90% of CDH) and allow herniation of midgut, stomach, and spleen into the thorax, causing ipsilateral pulmonary hypoplasia. Morgagni hernias are anterior parasternal defects (right > left, ~5%) and typically contain omentum or colon; they usually present later and are less severe.",
      ref: "Pober BR, Am J Med Genet 2007;145C:85 · Stege G, Pediatrics 2003;111:e594",
      render: () => <DiaphragmaticHerniaFig />,
    },

    "tho-lung-cancer-nodal": {
      title: "Lung cancer — IASLC nodal stations & N-stage",
      caption: "The IASLC nodal map defines stations 1–14. N1 disease (hilar/intrapulmonary, stations 10–14) is potentially resectable; N2 (ipsilateral mediastinal, stations 1–9) requires multidisciplinary assessment and often induction therapy; N3 (contralateral or supraclavicular) is generally inoperable. Preoperative staging uses EBUS-TBNA for stations 2, 4, and 7.",
      ref: "Rusch VW et al., J Thorac Oncol 2009;4:568 (IASLC nodal map) · AJCC 8th ed.",
      render: () => <LungCancerNodalFig />,
    },

  });
})();
