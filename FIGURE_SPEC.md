# Figure authoring spec (read this fully before writing any code)

You are authoring **original, hand-drawn SVG teaching diagrams** for a single-file
offline React surgical-study app. These render INSIDE the app (no internet, no
external images). The user already approved the visual style of the reference
file `figures.jsx` — match it exactly.

## Hard rules
1. **Read `figures.jsx` first.** Copy its structure precisely: one IIFE, the same
   palette constants, the same `svgProps` and `T` helpers, function components
   returning `<svg>`, and a final `window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, { ... })`.
2. Write ONLY your own new file `figures-<dept>.jsx`. **Do NOT edit any other file**
   (not figures.jsx, not build.js, not combine.js, not any tmp_*.js).
3. All colours MUST be the theme CSS variables via the palette consts (INK, MUTE,
   SOFT, RULE, ACCENT, ASOFT, WALL, LUMEN). **Never** hard-code a hex colour — the
   app has light AND dark mode and hard-coded colours break in one of them.
4. Every figure id must be globally unique and kebab-case, e.g. `nyha-shock-class`,
   `ann-arbor-thymoma`. Prefix with a short topic hint to avoid collisions with
   other departments.
5. Each `window.SK_FIGURES` entry needs: `title` (short), `caption` (2–3 sentences
   of teaching value — what the learner should take away), `ref` (a real,
   authoritative source: guideline / classic paper / AJCC / staging system), and
   `render: () => <YourFig />`.
6. **Accuracy is paramount** — this is for a surgeon's self-study. Get numbers,
   grades, thresholds, and anatomy correct. If unsure about a specific cut-off,
   omit that detail rather than guess.
7. JSX must compile with esbuild (jsx-factory React.createElement). Keep it simple:
   `<svg>`, `<g>`, `<rect>`, `<circle>`, `<ellipse>`, `<line>`, `<path>`, `<text>`,
   `<polygon>`, `<clipPath>`. Use `strokeWidth`, `strokeDasharray`, `textAnchor`,
   `fontSize`, `fontWeight`, `fill` as JSX props (camelCase). Return arrays with
   `key` props like the reference does.

## What makes a topic "picture-critical" (only draw these)
A diagram earns its place ONLY if a **visual/spatial classification, staging
schematic, anatomical relationship, grading ladder, or zone/pattern map** is
genuinely how the topic is learned. Examples of good figure subjects:
- Grading/staging ladders (T-stage depth, Hinchey, Forrest, Nyhus, LARS zones)
- Anatomical maps (anal fistula Parks tracks, hernia orifices/myopectineal orifice,
  segment/zone anatomy, triangle of safety, mediastinal compartments)
- Morphology series (Paris, pit patterns), classification grids (shock class table
  drawn as a visual ladder), pattern schematics.
DO NOT draw a figure just to have one. A plain prose list is NOT a figure. Aim for
QUALITY over quantity: typically **3–6 excellent figures** for your department,
attached to the highest-yield topics. A shared figure can be reused on several
diseases (list it under each in your mapping).

## Deliverables — return BOTH:
1. The file `figures-<dept>.jsx` written to the project root.
2. In your final text response, a JSON block mapping diseaseId → [figureId,...],
   e.g.:
   ```json
   { "diverticulitis": ["hinchey-classification"], "haemorrhoids": ["goligher-grade"] }
   ```
   Use ONLY diseaseIds from the list you were given, and figureIds you defined.

## Palette preamble to copy verbatim into your file
```jsx
(function () {
  const INK = "var(--ink)";
  const MUTE = "var(--ink-mute)";
  const SOFT = "var(--ink-soft)";
  const RULE = "var(--rule-strong)";
  const ACCENT = "var(--accent)";
  const ASOFT = "var(--accent-soft)";
  const WALL = "var(--bg-tint)";
  const LUMEN = "var(--bg-card)";
  const svgProps = (vb) => ({ viewBox: vb, style: { width: "100%", height: "auto", display: "block" }, role: "img", xmlns: "http://www.w3.org/2000/svg" });
  const T = (x, y, s, extra) => ({ x, y, fontSize: s, fill: INK, textAnchor: "middle", ...extra });
  // ... your figure components ...
  window.SK_FIGURES = Object.assign(window.SK_FIGURES || {}, { /* your entries */ });
})();
```
Keep viewBox widths around 520–720 and label font-sizes 11–17 so they read well on a phone.
