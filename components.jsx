// components.jsx — shared small components

const { useState, useEffect, useRef, useMemo } = React;

const Bookmark = ({ id, bookmarks, toggle }) => {
  const on = bookmarks.includes(id);
  return (
    <button
      className={`bookmark-btn ${on ? "active" : ""}`}
      onClick={(e) => { e.stopPropagation(); toggle(id); }}
      title={on ? "Remove bookmark" : "Bookmark"}
    >
      {on ? "★" : "☆"}
    </button>
  );
};

const HRAnat = ({ children = "❦" }) => (
  <div className="hr-anat"><span className="hr-anat-mark">{children}</span></div>
);

const SectionHead = ({ num, title, id }) => (
  <div className="section-head" id={id}>
    <span className="section-num">§ {num}</span>
    <h2 className="section-title">{title}</h2>
  </div>
);

const Tag = ({ children }) => <span className="tag">{children}</span>;

const ScoreCalc = ({ score }) => {
  const [vals, setVals] = useState({});
  if (score.display) {
    return (
      <div className="score-card">
        <div className="score-head">
          <div>
            <div className="name">{score.name}</div>
            <div className="use">{score.use}</div>
          </div>
          <div className="score-result">
            <div className="tier" style={{ background: "var(--bg-warm)", color: "var(--ink-soft)" }}>Reference</div>
          </div>
        </div>
      </div>
    );
  }
  const total = score.compute ? score.compute(vals) : 0;
  const interp = score.interpret ? score.interpret(total) : null;
  const set = (k, v) => setVals((p) => ({ ...p, [k]: v }));

  return (
    <div className="score-card">
      <div className="score-head">
        <div>
          <div className="name">{score.name}</div>
          <div className="use">{score.use}</div>
        </div>
        <div className="score-result">
          <div className="num">{total}</div>
          {interp && <div className={`tier ${interp.tone}`}>{interp.tier}</div>}
          {interp && <div className="note">{interp.note}</div>}
        </div>
      </div>
      <div className="score-fields">
        {score.fields.map((f) => {
          if (f.type === "bool") {
            return (
              <div key={f.id} className={`score-field ${vals[f.id] ? "on" : ""}`} onClick={() => set(f.id, !vals[f.id])}>
                <div className="label">{f.label}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-soft)" }}>+{f.weight}</div>
                <div className="toggle" />
              </div>
            );
          }
          if (f.type === "select") {
            return (
              <div key={f.id} className="score-field">
                <div className="label">{f.label}</div>
                <select value={vals[f.id] || ""} onChange={(e) => set(f.id, e.target.value)}>
                  <option value="">—</option>
                  {f.options.map(([lbl, w]) => <option key={lbl} value={w}>{lbl} (+{w})</option>)}
                </select>
              </div>
            );
          }
          if (f.type === "number") {
            return (
              <div key={f.id} className="score-field">
                <div className="label">{f.label}</div>
                <input
                  type="number" min={f.min} max={f.max}
                  value={vals[f.id] ?? f.default}
                  onChange={(e) => set(f.id, e.target.value)}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
      {score.formula && <div className="score-formula">ƒ  {score.formula}</div>}
    </div>
  );
};

Object.assign(window, { Bookmark, HRAnat, SectionHead, Tag, ScoreCalc });
