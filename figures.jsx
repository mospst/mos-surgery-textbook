// figures.jsx — original SVG teaching diagrams embedded directly in the app.
//
// WHY this exists: external "open image atlas" links are useless for real study
// (they need internet and dump you into another app). These diagrams are drawn
// from scratch, so they render offline, adapt to light/dark theme via CSS custom
// properties, and carry ZERO copyright dependency. Every figure still lists an
// authoritative reference so the classification can be credited/verified.
//
// A disease opts in with `figures:["paris-classification", ...]`; DetailView looks
// each id up in window.SK_FIGURES and renders the SVG inline near the top of the page.

(function () {
  // Theme-aware colours (resolve against :root / dark-mode variables at paint time).
  const INK = "var(--ink)";
  const MUTE = "var(--ink-mute)";
  const SOFT = "var(--ink-soft)";
  const RULE = "var(--rule-strong)";
  const ACCENT = "var(--accent)";
  const ASOFT = "var(--accent-soft)";
  const WALL = "var(--bg-tint)";
  const LUMEN = "var(--bg-card)";

  const svgProps = (vb) => ({
    viewBox: vb,
    style: { width: "100%", height: "auto", display: "block" },
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
  });
  const T = (x, y, s, extra) => ({ x, y, fontSize: s, fill: INK, textAnchor: "middle", ...extra });

  // ─────────────────────────────────────────────────────────────────────────
  // Paris endoscopic classification of superficial (type 0) colorectal lesions
  // ─────────────────────────────────────────────────────────────────────────
  function ParisFig() {
    const cells = [
      { code: "0–Ip", name: "Pedunculated", kind: "ip" },
      { code: "0–Is", name: "Sessile", kind: "is" },
      { code: "0–IIa", name: "Slightly elevated", kind: "iia" },
      { code: "0–IIb", name: "Completely flat", kind: "iib" },
      { code: "0–IIc", name: "Slightly depressed", kind: "iic" },
      { code: "0–III", name: "Excavated (ulcer)", kind: "iii" },
    ];
    const cellW = 240, cellH = 175, cols = 3;

    const wall = (ox, base) => [
      <rect key="w" x={ox + 22} y={base} width={196} height={30} fill={WALL} stroke={RULE} strokeWidth="1" />,
      <line key="mm" x1={ox + 22} y1={base + 12} x2={ox + 218} y2={base + 12} stroke={RULE} strokeWidth="1" strokeDasharray="3 3" />,
      <line key="s" x1={ox + 22} y1={base} x2={ox + 218} y2={base} stroke={INK} strokeWidth="2" />,
    ];

    const lesion = (kind, cx, base) => {
      switch (kind) {
        case "ip":
          return [
            <rect key="st" x={cx - 6} y={base - 30} width={12} height={30} fill={ASOFT} stroke={ACCENT} strokeWidth="1.5" />,
            <circle key="hd" cx={cx} cy={base - 46} r={20} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />,
          ];
        case "is":
          return [<path key="d" d={`M ${cx - 42} ${base} Q ${cx} ${base - 56} ${cx + 42} ${base} Z`} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />];
        case "iia":
          return [<path key="d" d={`M ${cx - 52} ${base} Q ${cx} ${base - 22} ${cx + 52} ${base} Z`} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />];
        case "iib":
          return [<rect key="d" x={cx - 55} y={base - 7} width={110} height={7} rx={3} fill={ASOFT} stroke={ACCENT} strokeWidth="2" />];
        case "iic":
          return [
            <path key="fill" d={`M ${cx - 48} ${base} Q ${cx} ${base + 20} ${cx + 48} ${base} L ${cx + 48} ${base} Z`} fill={LUMEN} />,
            <path key="d" d={`M ${cx - 48} ${base} Q ${cx} ${base + 20} ${cx + 48} ${base}`} fill="none" stroke={ACCENT} strokeWidth="2.5" />,
          ];
        case "iii":
          return [
            <path key="fill" d={`M ${cx - 40} ${base} L ${cx - 20} ${base + 34} Q ${cx} ${base + 46} ${cx + 20} ${base + 34} L ${cx + 40} ${base} Z`} fill={LUMEN} stroke={ACCENT} strokeWidth="2.5" />,
          ];
        default:
          return null;
      }
    };

    return (
      <svg {...svgProps(`0 0 ${cellW * cols} ${cellH * 2}`)}>
        {cells.map((c, i) => {
          const col = i % cols, row = Math.floor(i / cols);
          const ox = col * cellW, oy = row * cellH;
          const cx = ox + cellW / 2, base = oy + 82;
          return (
            <g key={c.code}>
              {wall(ox, base)}
              {lesion(c.kind, cx, base)}
              <text {...T(cx, oy + 140, 17, { fontWeight: 600 })}>{c.code}</text>
              <text {...T(cx, oy + 160, 12.5, { fill: SOFT })}>{c.name}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Layers of the bowel wall mapped to T-stage
  // ─────────────────────────────────────────────────────────────────────────
  function BowelWallFig() {
    const layers = [
      { label: "Mucosa", sub: "epithelium · lamina propria · muscularis mucosae", h: 46, fill: ASOFT },
      { label: "Submucosa", sub: "vessels · lymphatics (Sm1/2/3)", h: 40, fill: WALL },
      { label: "Muscularis propria", sub: "inner circular + outer longitudinal", h: 52, fill: WALL },
      { label: "Subserosa / pericolic fat", sub: "", h: 34, fill: LUMEN },
      { label: "Serosa (peritoneum)", sub: "", h: 22, fill: ASOFT },
    ];
    const x0 = 40, w = 430;
    let y = 30;
    const bands = layers.map((L, i) => {
      const band = (
        <g key={i}>
          <rect x={x0} y={y} width={w} height={L.h} fill={L.fill} stroke={RULE} strokeWidth="1" />
          <text x={x0 + 14} y={y + (L.sub ? L.h / 2 - 2 : L.h / 2 + 5)} fontSize="14.5" fill={INK} fontWeight="600">{L.label}</text>
          {L.sub && <text x={x0 + 14} y={y + L.h / 2 + 15} fontSize="11.5" fill={SOFT}>{L.sub}</text>}
        </g>
      );
      L._y = y; L._mid = y + L.h / 2;
      y += L.h + 4;
      return band;
    });
    const totalBottom = y - 4;

    // T-stage depth brackets on the right.
    const bx = x0 + w + 26;
    const stages = [
      { t: "T1", to: layers[1]._y + layers[1].h, note: "into submucosa" },
      { t: "T2", to: layers[2]._y + layers[2].h, note: "into muscularis propria" },
      { t: "T3", to: layers[3]._y + layers[3].h, note: "through into pericolic fat" },
      { t: "T4", to: totalBottom, note: "breaches serosa / adjacent organ" },
    ];
    const top = layers[0]._y;
    const brackets = stages.map((s, i) => {
      const x = bx + i * 44;
      return (
        <g key={s.t}>
          <line x1={x} y1={top} x2={x} y2={s.to} stroke={ACCENT} strokeWidth="2" />
          <line x1={x} y1={s.to} x2={x - 7} y2={s.to} stroke={ACCENT} strokeWidth="2" />
          <text x={x + 5} y={top + 12} fontSize="13" fill={ACCENT} fontWeight="700" textAnchor="start">{s.t}</text>
        </g>
      );
    });

    return (
      <svg {...svgProps(`0 0 720 ${totalBottom + 30}`)}>
        <text {...T(x0 + w / 2, 20, 12.5, { fill: SOFT })}>lumen ↑</text>
        {bands}
        {brackets}
        <text x={bx} y={totalBottom + 22} fontSize="11.5" fill={SOFT} textAnchor="start">deeper T-stage →</text>
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Kudo pit pattern (chromoendoscopy surface crypt openings)
  // ─────────────────────────────────────────────────────────────────────────
  function KudoFig() {
    const pits = [
      { code: "I", hist: "Normal", draw: "round" },
      { code: "II", hist: "Hyperplastic", draw: "star" },
      { code: "IIIS", hist: "Depressed adenoma", draw: "smalltube" },
      { code: "IIIL", hist: "Tubular adenoma", draw: "largetube" },
      { code: "IV", hist: "Villous adenoma", draw: "branch" },
      { code: "V", hist: "Invasive cancer", draw: "irregular" },
    ];
    const R = 42, cols = 3, cellW = 240, cellH = 130;

    const pattern = (kind, cx, cy) => {
      const out = [];
      const clip = `kudo-${kind}`;
      out.push(<clipPath key="cp" id={clip}><circle cx={cx} cy={cy} r={R - 3} /></clipPath>);
      const inner = [];
      if (kind === "round") {
        for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++)
          inner.push(<circle key={`${a}-${b}`} cx={cx - 34 + a * 14} cy={cy - 34 + b * 14} r={3.6} fill="none" stroke={ACCENT} strokeWidth="1.4" />);
      } else if (kind === "star") {
        for (let a = 0; a < 5; a++) for (let b = 0; b < 5; b++) {
          const px = cx - 32 + a * 16, py = cy - 32 + b * 16;
          inner.push(<path key={`${a}-${b}`} d={`M ${px} ${py - 5} L ${px + 1.5} ${py - 1.5} L ${px + 5} ${py} L ${px + 1.5} ${py + 1.5} L ${px} ${py + 5} L ${px - 1.5} ${py + 1.5} L ${px - 5} ${py} L ${px - 1.5} ${py - 1.5} Z`} fill={ACCENT} />);
        }
      } else if (kind === "smalltube") {
        for (let a = 0; a < 7; a++) for (let b = 0; b < 7; b++)
          inner.push(<line key={`${a}-${b}`} x1={cx - 36 + a * 12} y1={cy - 36 + b * 12} x2={cx - 33 + a * 12} y2={cy - 33 + b * 12} stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />);
      } else if (kind === "largetube") {
        for (let a = 0; a < 4; a++) for (let b = 0; b < 5; b++)
          inner.push(<ellipse key={`${a}-${b}`} cx={cx - 26 + a * 18} cy={cy - 32 + b * 16} rx={6} ry={3.4} fill="none" stroke={ACCENT} strokeWidth="1.6" transform={`rotate(35 ${cx - 26 + a * 18} ${cy - 32 + b * 16})`} />);
      } else if (kind === "branch") {
        for (let b = 0; b < 5; b++)
          inner.push(<path key={b} d={`M ${cx - 36} ${cy - 30 + b * 15} q 12 -8 24 0 q 12 8 24 0 q 12 -8 24 0`} fill="none" stroke={ACCENT} strokeWidth="2" />);
      } else if (kind === "irregular") {
        const seed = [[-28, -22], [-6, -30], [18, -18], [30, -2], [-30, 4], [-10, 6], [12, 14], [28, 22], [-22, 26], [2, -6], [-16, -10], [20, 0]];
        seed.forEach((p, k) => inner.push(<path key={k} d={`M ${cx + p[0]} ${cy + p[1]} l ${4 + (k % 3)} ${2 - (k % 2) * 5} l ${-3} ${5} z`} fill={ACCENT} opacity="0.85" />));
      }
      out.push(<g key="in" clipPath={`url(#${clip})`}>{inner}</g>);
      out.push(<circle key="ring" cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth="2" />);
      return out;
    };

    return (
      <svg {...svgProps(`0 0 ${cellW * cols} ${cellH * 2 + 20}`)}>
        {pits.map((p, i) => {
          const col = i % cols, row = Math.floor(i / cols);
          const cx = col * cellW + cellW / 2, cy = row * cellH + 60;
          return (
            <g key={p.code}>
              {pattern(p.draw, cx, cy)}
              <text {...T(cx, cy + R + 22, 16, { fontWeight: 700 })}>Type {p.code}</text>
              <text {...T(cx, cy + R + 40, 12, { fill: SOFT })}>{p.hist}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // JNET (NBI) vessel & surface pattern classification
  // ─────────────────────────────────────────────────────────────────────────
  function JnetFig() {
    const cols = [
      { type: "Type 1", hist: "Hyperplastic / SSL", mgmt: "Leave / resect", draw: "faint" },
      { type: "Type 2A", hist: "Low-grade adenoma", mgmt: "Endoscopic", draw: "regular" },
      { type: "Type 2B", hist: "High-grade / shallow SM", mgmt: "En-bloc ESD", draw: "irregular" },
      { type: "Type 3", hist: "Deep submucosal cancer", mgmt: "Surgery", draw: "sparse" },
    ];
    const cw = 180, x0 = 0, boxY = 44, boxH = 96;

    const vessels = (kind, x) => {
      const cx = x + cw / 2, cy = boxY + boxH / 2;
      const cp = `jnet-${kind}`;
      const clip = <clipPath id={cp}><rect x={x + 14} y={boxY + 8} width={cw - 28} height={boxH - 16} rx="6" /></clipPath>;
      const items = [];
      if (kind === "faint") {
        for (let k = 0; k < 6; k++) items.push(<circle key={k} cx={x + 40 + (k % 3) * 45} cy={cy - 18 + Math.floor(k / 3) * 34} r={3} fill="none" stroke={SOFT} strokeWidth="1.2" />);
      } else if (kind === "regular") {
        for (let k = 0; k < 3; k++) {
          const yy = cy - 26 + k * 26;
          items.push(<path key={k} d={`M ${x + 18} ${yy} q 24 -14 48 0 q 24 14 48 0 q 24 -14 48 0`} fill="none" stroke={ACCENT} strokeWidth="2" />);
        }
      } else if (kind === "irregular") {
        for (let k = 0; k < 4; k++) {
          const yy = cy - 28 + k * 20;
          const wobble = k % 2 ? 3.4 : 1.4;
          items.push(<path key={k} d={`M ${x + 16} ${yy} q 18 ${-16 - k * 3} 40 ${k * 2} q 20 12 44 ${-6}`} fill="none" stroke={ACCENT} strokeWidth={wobble} />);
        }
      } else if (kind === "sparse") {
        items.push(<path key="a" d={`M ${x + 20} ${cy - 20} q 30 10 20 40`} fill="none" stroke={ACCENT} strokeWidth="3.4" strokeLinecap="round" />);
        items.push(<path key="b" d={`M ${x + 110} ${cy - 24} q -12 22 26 34`} fill="none" stroke={ACCENT} strokeWidth="1.4" strokeDasharray="4 5" />);
        items.push(<text key="av" {...T(cx, cy + 4, 11, { fill: SOFT })}>avascular areas</text>);
      }
      return (
        <g key={"v" + kind}>
          {clip}
          <rect x={x + 14} y={boxY + 8} width={cw - 28} height={boxH - 16} rx="6" fill={LUMEN} stroke={RULE} strokeWidth="1" />
          <g clipPath={`url(#${cp})`}>{items}</g>
        </g>
      );
    };

    return (
      <svg {...svgProps(`0 0 ${cw * 4} 250`)}>
        <text x={x0 + 8} y={22} fontSize="12.5" fill={SOFT} textAnchor="start">NBI microvessel pattern</text>
        {cols.map((c, i) => {
          const x = x0 + i * cw;
          return (
            <g key={c.type}>
              {i > 0 && <line x1={x} y1={36} x2={x} y2={224} stroke={RULE} strokeWidth="1" />}
              {vessels(c.draw, x)}
              <text {...T(x + cw / 2, boxY + boxH + 30, 15.5, { fontWeight: 700 })}>{c.type}</text>
              <text {...T(x + cw / 2, boxY + boxH + 50, 11.5, { fill: MUTE })}>{c.hist}</text>
              <text {...T(x + cw / 2, boxY + boxH + 68, 11.5, { fill: ACCENT, fontWeight: 600 })}>{c.mgmt}</text>
            </g>
          );
        })}
      </svg>
    );
  }

  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, {
    "paris-classification": {
      title: "Paris classification of superficial lesions",
      caption: "Morphology of type-0 lesions predicts submucosal invasion risk. Height cut-off between 0–IIa and 0–Is is 2.5 mm (a closed biopsy-forceps cup). Depressed (IIc) and excavated (III) types carry the highest risk of deep invasion.",
      ref: "Paris workshop, Gastrointest Endosc 2003;58(Suppl):S3 · ESGE 2017",
      render: () => <ParisFig />,
    },
    "bowel-wall-layers": {
      title: "Layers of the bowel wall & T-stage",
      caption: "Tumour (T) stage is defined by the deepest layer invaded. Endoscopic resection is appropriate while a lesion is confined to the mucosa/superficial submucosa (T1 Sm1); deeper invasion raises nodal-metastasis risk and favours surgery.",
      ref: "AJCC Cancer Staging Manual, 8th ed.",
      render: () => <BowelWallFig />,
    },
    "kudo-pit-pattern": {
      title: "Kudo pit pattern (chromoendoscopy)",
      caption: "Crypt-opening (pit) pattern on magnified chromoendoscopy predicts histology. Types I–II are non-neoplastic; III–IV are adenomatous; type V (irregular / non-structural) signals submucosal invasive cancer.",
      ref: "Kudo S et al., Gastrointest Endosc 1996;44:8 · ESGE 2019",
      render: () => <KudoFig />,
    },
    "jnet-classification": {
      title: "JNET vessel & surface classification (NBI)",
      caption: "Narrow-band-imaging microvessel pattern guides the resect-vs-refer decision. Type 2B warrants en-bloc resection for accurate staging; Type 3 (sparse, avascular areas) indicates deep submucosal cancer and referral for surgery.",
      ref: "Sano Y et al., Dig Endosc 2016;28:526",
      render: () => <JnetFig />,
    },
  });
})();
