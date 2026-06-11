// views.jsx — main view components: Dashboard, Department, Detail, Quiz, Bookmarks, Compare

const { useState: uS, useEffect: uE, useMemo: uM, useRef: uR } = React;

// ─── SRS HOOK ─────────────────────────────────────────────────────────────────
const SRS_INTERVALS = [0, 1, 3, 7, 21, 60]; // days per level 0-5
function useSRS() {
  const [srs, setSrs] = uS(() => {
    try { return JSON.parse(localStorage.getItem("sk_srs") || "{}"); } catch { return {}; }
  });
  uE(() => { try { localStorage.setItem("sk_srs", JSON.stringify(srs)); } catch {} }, [srs]);

  const review = (id, action) => {
    setSrs((prev) => {
      const cur = prev[id] || { level: 0, nextReview: null };
      let next = cur.level;
      if (action === "again") next = Math.max(0, cur.level - 1);
      else if (action === "hard") next = cur.level;
      else if (action === "good") next = Math.min(5, cur.level + 1);
      else if (action === "easy") next = Math.min(5, cur.level + 2);
      const days = SRS_INTERVALS[next];
      const due = new Date(Date.now() + days * 86400000).toISOString();
      return { ...prev, [id]: { level: next, nextReview: due } };
    });
  };

  const isDue = (id) => {
    const s = srs[id];
    if (!s || !s.nextReview) return true;
    return new Date(s.nextReview) <= new Date();
  };
  return { srs, review, isDue };
}

// ─── NOTES HOOK ───────────────────────────────────────────────────────────────
function useNotes() {
  const [notes, setNotes] = uS(() => {
    try { return JSON.parse(localStorage.getItem("sk_notes") || "{}"); } catch { return {}; }
  });
  uE(() => { try { localStorage.setItem("sk_notes", JSON.stringify(notes)); } catch {} }, [notes]);
  const setNote = (id, text) => setNotes((p) => ({ ...p, [id]: text }));
  return { notes, setNote };
}

// ─── SRS WIDGET ───────────────────────────────────────────────────────────────
function SrsWidget({ id, srs, review }) {
  const s = srs[id] || { level: 0, nextReview: null };
  const levelLabel = ["New", "Again", "Learning", "Review", "Mature", "Mastered"][s.level] || "New";
  const dueStr = s.nextReview
    ? (new Date(s.nextReview) <= new Date() ? "Due now" : `Due ${new Date(s.nextReview).toLocaleDateString()}`)
    : "Not started";
  return (
    <div className="srs-widget">
      <div className="srs-head">
        <span className="srs-label">Spaced Repetition</span>
        <span className={`srs-level level-${s.level}`}>{levelLabel}</span>
      </div>
      <div className="srs-due">{dueStr}</div>
      <div className="srs-buttons">
        <button className="srs-btn again"  onClick={() => review(id, "again")}>Again</button>
        <button className="srs-btn hard"   onClick={() => review(id, "hard")}>Hard</button>
        <button className="srs-btn good"   onClick={() => review(id, "good")}>Good</button>
        <button className="srs-btn easy"   onClick={() => review(id, "easy")}>Easy</button>
      </div>
    </div>
  );
}

// ─── NOTES WIDGET ─────────────────────────────────────────────────────────────
function NotesWidget({ id, notes, setNote }) {
  const [open, setOpen] = uS(false);
  const val = notes[id] || "";
  return (
    <div className="notes-widget">
      <button className="notes-toggle" onClick={() => setOpen((p) => !p)}>
        ✎ Personal notes {val ? "●" : ""}
      </button>
      {open && (
        <textarea
          className="notes-area"
          placeholder="Add your study notes here…"
          value={val}
          onChange={(e) => setNote(id, e.target.value)}
        />
      )}
    </div>
  );
}

// ─── OPERATION SAFETY CHECKLIST ───────────────────────────────────────────────
function SafetyChecklist({ proc, compact = false }) {
  const sections = proc?.safetyChecklist || [];
  const storageKey = proc ? `sk_safety_${proc.id}` : "sk_safety_none";
  const [checked, setChecked] = uS(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { return {}; }
  });

  uE(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(checked)); } catch {}
  }, [storageKey, checked]);

  if (!proc || sections.length === 0) return null;

  const keys = sections.flatMap((section) => section.items.map((_, i) => `${section.phase}:${i}`));
  const done = keys.filter(k => checked[k]).length;
  const pct = keys.length ? Math.round((done / keys.length) * 100) : 0;
  const toggle = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className={`safety-checklist ${compact ? "compact" : ""}`}>
      <div className="safety-head">
        <div>
          <div className="safety-kicker">Operation safety checklist</div>
          <h4>{proc.name}</h4>
        </div>
        <button className="safety-reset" onClick={() => setChecked({})}>Reset checklist</button>
      </div>
      <div className="safety-progress">
        <div className="safety-progress-fill" style={{ width: `${pct}%` }} />
        <span>{done}/{keys.length} checked</span>
      </div>
      <div className="safety-grid">
        {sections.map((section) => (
          <div key={section.phase} className="safety-phase">
            <h5>{section.phase}</h5>
            {section.items.map((item, i) => {
              const key = `${section.phase}:${i}`;
              return (
                <label key={key} className={`safety-item ${checked[key] ? "checked" : ""}`}>
                  <input type="checkbox" checked={!!checked[key]} onChange={() => toggle(key)} />
                  <span>{item}</span>
                </label>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ goto, progress, bookmarks, srs }) {
  const { DEPARTMENTS, DISEASES, PROCEDURES, IMAGE_QUIZ_BANK, ALGORITHMS } = window.SK_DATA;
  const totalQ = window.SK_DATA.QUIZ_BANK.length;
  const correct = Object.values(progress).filter((v) => v === "correct").length;
  const attempted = Object.keys(progress).length;
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
  const masteredCount = Object.values(srs).filter((s) => s.level >= 4).length;
  const dueCount = DISEASES.filter((d) => {
    const s = srs[d.id];
    if (!s) return false;
    return new Date(s.nextReview) <= new Date();
  }).length;

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Compendium · 2026 Edition</div>
        <h1 className="page-title">Surgical knowledge,<br /><em>by department.</em></h1>
        <p className="page-sub">
          A reference and revision atlas for surgical trainees. Diagnosis, criteria, scoring systems, technique, guidelines and assessment — organised by surgical department, cross-linked by organ and pathology.
        </p>
      </div>

      <div className="stat-grid">
        <div className="stat">
          <div className="lbl">Departments</div>
          <div className="val">{DEPARTMENTS.length}</div>
          <div className="note">surgical specialties</div>
        </div>
        <div className="stat">
          <div className="lbl">Diseases</div>
          <div className="val">{DISEASES.length}</div>
          <div className="note">indexed entries</div>
        </div>
        <div className="stat" onClick={() => goto({ view: "procedures" })} style={{ cursor: "pointer" }}>
          <div className="lbl">Procedures</div>
          <div className="val">{PROCEDURES.length}</div>
          <div className="note">operation cards</div>
        </div>
        <div className="stat" onClick={() => goto({ view: "algorithms" })} style={{ cursor: "pointer" }}>
          <div className="lbl">Algorithms</div>
          <div className="val">{ALGORITHMS.length}</div>
          <div className="note">decision pathways</div>
        </div>
        <div className="stat" onClick={() => goto({ view: "imageQuiz" })} style={{ cursor: "pointer" }}>
          <div className="lbl">Image Quiz</div>
          <div className="val">{IMAGE_QUIZ_BANK.length}</div>
          <div className="note">recognition drills</div>
        </div>
        <div className="stat">
          <div className="lbl">Quiz accuracy</div>
          <div className="val">{accuracy}<span style={{ fontSize: 18, color: "var(--ink-soft)" }}>%</span></div>
          <div className="note">{correct} / {attempted} attempted</div>
        </div>
        <div className="stat">
          <div className="lbl">SRS Mastered</div>
          <div className="val">{masteredCount}</div>
          <div className="note">{dueCount} due for review</div>
        </div>
      </div>

      {dueCount > 0 && (
        <div className="due-banner" onClick={() => goto({ view: "study" })}>
          <span>⟳  {dueCount} card{dueCount !== 1 ? "s" : ""} due for review</span>
          <span className="arrow">Start review →</span>
        </div>
      )}

      <HRAnat>Index of Departments</HRAnat>

      <div className="dept-grid">
        {DEPARTMENTS.map((d) => {
          const count = DISEASES.filter((x) => x.dept === d.id).length;
          const mastered = DISEASES.filter((x) => x.dept === d.id && (srs[x.id]?.level || 0) >= 4).length;
          return (
            <div key={d.id} className="dept-card" data-dept={d.id} onClick={() => goto({ view: "dept", deptId: d.id })}>
              <div className="dept-glyph">{d.name.split(" ")[0].slice(0, 2).toUpperCase().replace(/&/g, "")}</div>
              <div className="title">{d.name}</div>
              <div className="latin">{d.subtitle || `${count} indexed conditions`}</div>
              <div className="meta">
                <span><b>{count}</b> diseases</span>
                {mastered > 0 && <span className="mastered-badge">{mastered} mastered</span>}
                <span className="arrow">Browse →</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── DEPARTMENT VIEW ──────────────────────────────────────────────────────────
function DeptView({ deptId, goto, bookmarks, toggle, srs }) {
  const { DEPARTMENTS, DISEASES } = window.SK_DATA;
  const dept = DEPARTMENTS.find((d) => d.id === deptId);
  const diseases = DISEASES.filter((d) => d.dept === deptId);
  const [filter, setFilter] = uS("all");

  const filtered = uM(() => {
    if (filter === "all") return diseases;
    if (filter === "high") return diseases.filter((d) => d.severity === "high");
    if (filter === "bookmarked") return diseases.filter((d) => bookmarks.includes(d.id));
    if (filter === "due") return diseases.filter((d) => { const s = srs[d.id]; return !s || new Date(s.nextReview) <= new Date(); });
    return diseases;
  }, [filter, diseases, bookmarks, srs]);

  const dueCount = diseases.filter((d) => { const s = srs[d.id]; return !s || new Date(s.nextReview) <= new Date(); }).length;

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Department</div>
        <h1 className="page-title">{dept.name}</h1>
        {dept.subtitle && <p className="page-sub">{dept.subtitle}</p>}
        <p className="page-sub">{diseases.length} indexed diseases · scoring systems, surgical techniques, and assessment.</p>
      </div>

      <div className="filter-bar">
        <button className={`chip ${filter==="all"?"active":""}`} onClick={() => setFilter("all")}>All ({diseases.length})</button>
        <button className={`chip ${filter==="high"?"active":""}`} onClick={() => setFilter("high")}>High severity</button>
        <button className={`chip ${filter==="bookmarked"?"active":""}`} onClick={() => setFilter("bookmarked")}>Bookmarked</button>
        {dueCount > 0 && <button className={`chip due ${filter==="due"?"active":""}`} onClick={() => setFilter("due")}>Due review ({dueCount})</button>}
      </div>

      <div className="disease-list">
        {filtered.length === 0 && <div className="empty">No diseases match the current filter.</div>}
        {filtered.map((d, i) => {
          const srsData = srs[d.id] || { level: 0 };
          const due = !srsData.nextReview || new Date(srsData.nextReview) <= new Date();
          return (
            <div key={d.id} className="disease-row with-srs" onClick={() => goto({ view: "detail", diseaseId: d.id, deptDiseases: diseases.map(x => x.id) })}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div className="name">
                {d.name}
                {d.latin && <span className="latin">{d.latin}</span>}
              </div>
              <div className="organ">{d.organ}</div>
              <div className={`srs-dot level-${srsData.level}`} title={["New","Again","Learning","Review","Mature","Mastered"][srsData.level]} />
              <div className={`severity ${d.severity}`}>{d.severity}</div>
              <Bookmark id={d.id} bookmarks={bookmarks} toggle={toggle} />
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── DETAIL VIEW ──────────────────────────────────────────────────────────────
function DetailView({ diseaseId, goto, bookmarks, toggle, progress, recordAns, srs, review, notes, setNote, deptDiseases }) {
  const { DISEASES, DEPARTMENTS, PROCEDURES, SCORING, QUIZ_BANK } = window.SK_DATA;
  const d = DISEASES.find((x) => x.id === diseaseId);
  const dept = DEPARTMENTS.find((dp) => dp.id === d.dept);
  const proc = PROCEDURES.find((p) => p.diseaseId === diseaseId);
  const [activeStep, setActiveStep] = uS(null);
  const [activeSec, setActiveSec] = uS("overview");
  const [present, setPresent] = uS([]);     // sections that actually rendered
  const [tocOpen, setTocOpen] = uS(false);  // mobile "On this page" panel
  const [navBar, setNavBar] = uS({ top: 0, height: 0 }); // sliding accent-bar geometry
  const [scrolling, setScrolling] = uS(false); // true briefly while the page scrolls
  const navListRef = uR(null);              // desktop rail list
  const mobileListRef = uR(null);           // iPhone panel list

  const deptList = deptDiseases || DISEASES.filter((x) => x.dept === d.dept).map((x) => x.id);
  const curIdx = deptList.indexOf(diseaseId);
  const prevId = curIdx > 0 ? deptList[curIdx - 1] : null;
  const nextId = curIdx < deptList.length - 1 ? deptList[curIdx + 1] : null;

  const sections = [
    ["overview",    "01 Overview"],
    ["diagnosis",   "02 Diagnosis"],
    ["criteria",    "03 Criteria"],
    ["scoring",     "04 Scoring"],
    ["management",  "05 Management"],
    ["procedure",   "06 Procedure"],
    ["technique",   "07 Technique"],
    ["guidelines",  "08 Guidelines"],
    ["mnemonics",   "09 Mnemonics"],
    ["anatomy",     "10 Anatomy"],
    ["videos",      "11 Videos"],
    ["quiz",        "12 Quiz"],
  ];

  uE(() => {
    const ids = sections.map(([id]) => id);
    let hideTimer;
    const handler = () => {
      for (const id of ids) {
        const el = document.getElementById("sec-" + id);
        if (el && el.getBoundingClientRect().top < 120) setActiveSec(id);
      }
      // Reveal the section pill while scrolling, retract ~1s after it stops.
      setScrolling(true);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setScrolling(false), 1100);
    };
    const c = document.querySelector(".content");
    window.addEventListener("scroll", handler, true);
    if (c) c.addEventListener("scroll", handler);
    return () => { clearTimeout(hideTimer); window.removeEventListener("scroll", handler, true); if (c) c.removeEventListener("scroll", handler); };
  }, [diseaseId]);

  uE(() => { setActiveSec("overview"); setActiveStep(null); setTocOpen(false); }, [diseaseId]);

  // Build the "On this page" list from the sections that actually rendered, so we
  // never link to an absent section (e.g. a disease with no scoring block).
  uE(() => {
    setPresent(sections.filter(([id]) => document.getElementById("sec-" + id)));
  }, [diseaseId]);

  // Slide the accent bar to the active link (Apple-docs style). Measure whichever
  // list is visible: the desktop rail, or the iPhone panel on narrow screens.
  uE(() => {
    const onPhone = typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches;
    const list = onPhone ? mobileListRef.current : navListRef.current;
    if (!list) return;
    const el = list.querySelector(`a[data-sec="${activeSec}"]`);
    if (el && el.offsetParent) setNavBar({ top: el.offsetTop, height: el.offsetHeight });
  }, [activeSec, present, tocOpen]);

  // Lock body scroll while the mobile panel is open so the page doesn't slide
  // behind it (matches the nav-drawer behaviour).
  uE(() => {
    if (tocOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [tocOpen]);

  const scrollToSec = (id) => {
    const el = document.getElementById("sec-" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSec(id);
    setTocOpen(false);
  };

  // Label shown in the floating pill — the section currently in view.
  const curLabel = (present.find(([id]) => id === activeSec) || [null, "Contents"])[1];

  const diseaseQs = QUIZ_BANK.filter((q) => q.disease === diseaseId);
  const deptQs = QUIZ_BANK.filter((q) => q.dept === d.dept && q.disease !== diseaseId);
  const detailQuizQs = [...diseaseQs, ...deptQs];
  const deptName = DEPARTMENTS.find((x) => x.id === d.dept)?.name || d.dept;
  const o = d.overview || {};
  const dx = d.diagnosis || {};
  const cr = d.criteria || {};
  const mg = d.management || {};
  const tc = d.technique || {};

  return (
    <div className="detail">
      <div>
        {/* HEADER */}
        <div className="page-head">
          <div className="eyebrow">{dept.name} · {d.organ}</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 className="page-title" style={{ marginBottom: 6 }}>{d.name}</h1>
              {d.latin && <div style={{ fontSize: 18, color: "var(--ink-soft)", letterSpacing: "-0.014em", marginBottom: 18, lineHeight: 1.2, fontWeight: 400 }}>{d.latin}</div>}
            </div>
            <Bookmark id={d.id} bookmarks={bookmarks} toggle={toggle} />
          </div>
          <p className="lede">{d.hero}</p>
          <div>{(d.tags || []).map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div>

        {/* STUDY MODE NAV */}
        {(prevId || nextId) && (
          <div className="study-nav">
            {prevId ? (
              <button className="study-nav-btn" onClick={() => goto({ view: "detail", diseaseId: prevId, deptDiseases: deptList })}>
                ← {DISEASES.find(x=>x.id===prevId)?.name}
              </button>
            ) : <div />}
            <span className="study-nav-pos">{curIdx+1} / {deptList.length}</span>
            {nextId ? (
              <button className="study-nav-btn primary" onClick={() => goto({ view: "detail", diseaseId: nextId, deptDiseases: deptList })}>
                {DISEASES.find(x=>x.id===nextId)?.name} →
              </button>
            ) : <div />}
          </div>
        )}

        {/* KEY POINTS */}
        {d.keypoints && d.keypoints.length > 0 && (
          <div className="keypoints-card" id="sec-keypoints">
            <div className="keypoints-head">⚡ Key Points</div>
            <ul className="keypoints-list">
              {d.keypoints.map((k, i) => <li key={i}>{k}</li>)}
            </ul>
          </div>
        )}

        {/* DIFFERENTIALS */}
        {d.differentials && d.differentials.length > 0 && (
          <div className="differentials-card">
            <div className="diff-head">Differential Diagnoses</div>
            <div className="diff-list">
              {d.differentials.map((dd, i) => <span key={i} className="diff-item">{dd}</span>)}
            </div>
          </div>
        )}

        {/* OVERVIEW */}
        {(o.definition || o.epidemiology || o.pathophysiology) && (
          <div className="detail-section" id="sec-overview">
            <SectionHead num="01" title="Overview" />
            {o.definition && <p style={{ fontSize: 14.5, lineHeight: 1.65, marginBottom: 18 }}>{o.definition}</p>}
            {o.epidemiology && <>
              <h4 className="subsec-head">Epidemiology</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-mute)", marginBottom: 14 }}>{o.epidemiology}</p>
            </>}
            {o.pathophysiology && <>
              <h4 className="subsec-head">Pathophysiology</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-mute)", marginBottom: 18 }}>{o.pathophysiology}</p>
            </>}
            {o.classification && o.classification.length > 0 && <>
              <h4 className="subsec-head">Classification</h4>
              <div className="def-table">
                {o.classification.map((c, i) => (
                  <React.Fragment key={i}>
                    <div className="k">{c.label}</div>
                    <div className="v">{c.note}</div>
                  </React.Fragment>
                ))}
              </div>
            </>}
          </div>
        )}

        {/* DIAGNOSIS */}
        {(dx.history?.length || dx.examination?.length || dx.investigations?.length) ? (
          <div className="detail-section" id="sec-diagnosis">
            <SectionHead num="02" title="Diagnosis & Workup" />
            <div className="workup">
              {dx.history?.length > 0 && (
                <div className="workup-col">
                  <h4>History</h4>
                  <ul className="clean">{dx.history.map((h, i) => <li key={i}>{h}</li>)}</ul>
                </div>
              )}
              {dx.examination?.length > 0 && (
                <div className="workup-col">
                  <h4>Examination</h4>
                  <ul className="clean">{dx.examination.map((h, i) => <li key={i}>{h}</li>)}</ul>
                </div>
              )}
              {dx.investigations?.length > 0 && (
                <div className="workup-col">
                  <h4>Investigations</h4>
                  <ul className="clean">{dx.investigations.map((h, i) => <li key={i}><b>{h.name}</b><i>{h.role}</i></li>)}</ul>
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* CRITERIA */}
        {cr.items?.length > 0 && (
          <div className="detail-section" id="sec-criteria">
            <SectionHead num="03" title="Diagnostic Criteria" />
            {cr.title && <p style={{ fontSize: 13.5, color: "var(--ink-soft)", marginBottom: 16, fontWeight: 500, letterSpacing: "-0.005em" }}>{cr.title}</p>}
            <div className="def-table">
              {cr.items.map((c, i) => (
                <React.Fragment key={i}>
                  <div className="k">{c.k}</div>
                  <div className="v">{c.v}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* SCORING */}
        {d.scoring && d.scoring.length > 0 && (
          <div className="detail-section" id="sec-scoring">
            <SectionHead num="04" title="Scoring Systems" />
            {d.scoring.map((sId) => SCORING[sId] && <ScoreCalc key={sId} score={SCORING[sId]} />)}
          </div>
        )}

        {/* MANAGEMENT */}
        {(mg.conservative?.length || mg.medical?.length || mg.surgical?.length) ? (
          <div className="detail-section" id="sec-management">
            <SectionHead num="05" title="Management" />
            {mg.conservative?.length > 0 && (
              <div className="tier conservative">
                <div className="tier-label">Conservative</div>
                <ul className="clean">{mg.conservative.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
            )}
            {mg.medical?.length > 0 && (
              <div className="tier medical">
                <div className="tier-label">Medical</div>
                <ul className="clean">{mg.medical.map((m, i) => <li key={i}>{m}</li>)}</ul>
              </div>
            )}
            {mg.surgical?.length > 0 && (
              <div className="tier surgical">
                <div className="tier-label">Surgical</div>
                {mg.surgical.map((s, i) => (
                  <div key={i} className="surg-option">
                    <div className="name">{s.name}</div>
                    <div className="when">When: {s.when}</div>
                    <div className="notes">{s.notes}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* PROCEDURE SNAPSHOT */}
        {proc && (
          <div className="detail-section" id="sec-procedure">
            <SectionHead num="06" title="Procedure Snapshot" />
            <div className="procedure-snapshot">
              <div className="procedure-snapshot-head">
                <div>
                  <div className="procedure-kicker">{dept.name} · vertical procedure link</div>
                  <h3>{proc.name}</h3>
                  <p>{proc.summary}</p>
                </div>
                <button className="topbar-btn primary" onClick={() => goto({ view: "procedures", procedureId: proc.id })}>
                  Open in Procedure Mode →
                </button>
              </div>

              <div className="procedure-snapshot-grid">
                {proc.indications?.length > 0 && (
                  <div className="procedure-snapshot-block">
                    <h4>When to operate</h4>
                    <ul className="procedure-list-clean">
                      {proc.indications.slice(0, 4).map((x, i) => (
                        <li key={i}><b>{x.name}</b>{x.when ? ` — ${x.when}` : ""}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {proc.anatomyFocus?.length > 0 && (
                  <div className="procedure-snapshot-block">
                    <h4>Anatomy focus</h4>
                    <ul className="procedure-list-clean">{proc.anatomyFocus.slice(0, 4).map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                )}
                {proc.pitfalls?.length > 0 && (
                  <div className="procedure-snapshot-block danger">
                    <h4>Do not miss</h4>
                    <ul className="procedure-list-clean">{proc.pitfalls.slice(0, 4).map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                )}
              </div>

              <SafetyChecklist key={proc.id} proc={proc} compact />

              {proc.steps?.length > 0 && (
                <div className="procedure-snapshot-steps">
                  {proc.steps.slice(0, 6).map((s, i) => (
                    <div key={i} className="procedure-snapshot-step">
                      <span>{s.n || i + 1}</span>
                      <b>{s.t}</b>
                    </div>
                  ))}
                  {proc.steps.length > 6 && <div className="procedure-snapshot-more">+{proc.steps.length - 6} more steps in Procedure Mode</div>}
                </div>
              )}

              <div className="procedure-snapshot-links">
                {proc.imageResources?.[0] && <a href={proc.imageResources[0].url} target="_blank" rel="noopener noreferrer">Open anatomy images ↗</a>}
                {proc.videoResources?.[0] && <a href={proc.videoResources[0].url} target="_blank" rel="noopener noreferrer">Open operation video library ↗</a>}
              </div>
            </div>
          </div>
        )}

        {/* TECHNIQUE */}
        {(tc.title || tc.steps?.length > 0) && (
          <div className="detail-section" id="sec-technique">
            <SectionHead num="07" title="Surgical Technique" />
            <div className="technique">
              {tc.title && <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 20px", letterSpacing: "-0.018em" }}>{tc.title}</h3>}
              {tc.prep?.length > 0 && (
                <div className="tech-prep">
                  <h5>Preparation</h5>
                  <ul>{tc.prep.map((p, i) => <li key={i}>— {p}</li>)}</ul>
                </div>
              )}
              {tc.steps?.map((s) => (
                <div key={s.n} className={`tech-step ${activeStep === s.n ? "active" : ""}`} onClick={() => setActiveStep(activeStep === s.n ? null : s.n)}>
                  <div className="n">{String(s.n).padStart(2, "0")}.</div>
                  <div>
                    <div className="t">{s.t}</div>
                    <div className="d">{s.d}</div>
                  </div>
                </div>
              ))}
              {tc.pearls?.length > 0 && (
                <div className="tech-pearls">
                  <h5>Operative Pearls</h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {tc.pearls.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* GUIDELINES + PEARLS */}
        {(d.guidelines?.length > 0 || d.pearls?.length > 0 || d.mistakes?.length > 0) && (
          <div className="detail-section" id="sec-guidelines">
            <SectionHead num="08" title="Guidelines & Pearls" />
            {d.guidelines?.length > 0 && (
              <div className="def-table" style={{ marginBottom: 24 }}>
                {d.guidelines.map((g, i) => (
                  <React.Fragment key={i}>
                    <div className="k">{g.src}</div>
                    <div className="v">
                      {g.url
                        ? <a href={g.url} target="_blank" rel="noopener noreferrer" style={{color:"var(--accent)",textDecoration:"none",wordBreak:"break-all"}}>{g.url}</a>
                        : null}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
            {(d.pearls?.length > 0 || d.mistakes?.length > 0) && (
              <div className="pearl-grid">
                {d.pearls?.length > 0 && (
                  <div className="pearl-block pearls">
                    <h4>Clinical Pearls</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {d.pearls.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                )}
                {d.mistakes?.length > 0 && (
                  <div className="pearl-block mistakes">
                    <h4>Common Mistakes</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {d.mistakes.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* MNEMONICS */}
        {d.mnemonics?.length > 0 && (
          <div className="detail-section" id="sec-mnemonics">
            <SectionHead num="09" title="Mnemonics & Aids" />
            <div className="mnemonic-grid">
              {d.mnemonics.map((m, i) => (
                <div key={i} className="mnemonic-card">
                  <div className="mnemonic-name">{m.name}</div>
                  <div className="mnemonic-text">{m.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANATOMY & IMAGES */}
        {d.anatomyResources?.length > 0 && (
          <div className="detail-section" id="sec-anatomy">
            <SectionHead num="10" title="Anatomy & Images" />
            <div className="image-resource-grid">
              {d.anatomyResources.map((v, i) => (
                <a key={i} className="image-resource-card" href={v.url} target="_blank" rel="noopener noreferrer">
                  <div className="image-resource-source">{v.source}</div>
                  <div className="image-resource-title">{v.title}</div>
                  {v.query && <div className="image-resource-query">Search: {v.query}</div>}
                  {v.tags?.length > 0 && (
                    <div className="image-resource-tags">
                      {v.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* OPERATION VIDEOS */}
        {d.videoResources?.length > 0 && (
          <div className="detail-section" id="sec-videos">
            <SectionHead num="11" title="Operation Videos" />
            <div className="video-resource-grid">
              {d.videoResources.map((v, i) => (
                <a key={i} className="video-resource-card" href={v.url} target="_blank" rel="noopener noreferrer">
                  <div className="video-resource-source">{v.source}</div>
                  <div className="video-resource-title">{v.title}</div>
                  {v.query && <div className="video-resource-query">Search: {v.query}</div>}
                  {v.tags?.length > 0 && (
                    <div className="video-resource-tags">
                      {v.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* QUIZ */}
        <div className="detail-section" id="sec-quiz">
          <SectionHead num="12" title="Self Assessment" />
          <QuizModule
            questions={detailQuizQs}
            progress={progress}
            recordAns={recordAns}
            focusDisease={diseaseId}
            scopeLabel={`${d.name} + ${deptName}`}
          />
        </div>
      </div>

      {/* RIGHT SIDEBAR — sticky "On this page" rail (desktop / wide screens) */}
      <aside className="section-nav">
        <div className="section-nav-head">On this page</div>
        <nav className="section-nav-list" ref={navListRef}>
          <span className="section-nav-bar" style={{ transform: `translateY(${navBar.top}px)`, height: navBar.height + "px", opacity: navBar.height ? 1 : 0 }} />
          {present.map(([id, lbl]) => (
            <a key={id} data-sec={id} className={"section-nav-link" + (activeSec === id ? " active" : "")} onClick={() => scrollToSec(id)}>{lbl}</a>
          ))}
        </nav>
        <div style={{ marginTop: 20 }}>
          <SrsWidget id={d.id} srs={srs} review={review} />
        </div>
        <div style={{ marginTop: 12 }}>
          <NotesWidget id={d.id} notes={notes} setNote={setNote} />
        </div>
      </aside>

      {/* iPHONE — floating "Contents" tab + right-side TOC panel. Overlays the
          page (doesn't push it) so the article keeps full reading width. */}
      <button
        className={"toc-fab" + (tocOpen ? " hidden" : (scrolling ? " peek" : ""))}
        aria-label={"On this page — currently " + curLabel}
        onClick={() => setTocOpen(true)}
      >
        <span className="toc-fab-icon">≣</span>
        <span className="toc-fab-label">{curLabel}</span>
      </button>
      <div className={"toc-sheet-backdrop" + (tocOpen ? " show" : "")} onClick={() => setTocOpen(false)} />
      <aside className={"toc-sheet" + (tocOpen ? " open" : "")} role="dialog" aria-label="On this page">
        <div className="toc-sheet-head">
          <span>On this page</span>
          <button className="toc-sheet-close" aria-label="Close" onClick={() => setTocOpen(false)}>✕</button>
        </div>
        <nav className="section-nav-list" ref={mobileListRef}>
          <span className="section-nav-bar" style={{ transform: `translateY(${navBar.top}px)`, height: navBar.height + "px", opacity: navBar.height ? 1 : 0 }} />
          {present.map(([id, lbl]) => (
            <a key={id} data-sec={id} className={"section-nav-link" + (activeSec === id ? " active" : "")} onClick={() => scrollToSec(id)}>{lbl}</a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

// ─── QUIZ MODULE ──────────────────────────────────────────────────────────────
function makeQuizSession(items, size, seed, focusDisease) {
  const limit = size === "all" ? items.length : Math.min(size, items.length);
  const focus = focusDisease ? items.filter((item) => item.disease === focusDisease) : [];
  const rest = focusDisease ? items.filter((item) => item.disease !== focusDisease) : items;
  const shuffled = rest
    .map((item, idx) => {
      const x = Math.sin((idx + 1) * 999 + seed * 37) * 10000;
      return { item, score: x - Math.floor(x) };
    })
    .sort((a, b) => a.score - b.score)
    .map((x) => x.item);
  return [...focus, ...shuffled].slice(0, limit);
}

function makePracticeBank() {
  const { QUIZ_BANK, IMAGE_QUIZ_BANK } = window.SK_DATA;
  return [
    ...QUIZ_BANK.map(q => ({ ...q, practiceType: "Text Quiz" })),
    ...IMAGE_QUIZ_BANK.map(q => ({ ...q, format: "image", practiceType: "Image Quiz" }))
  ];
}

function QuizModule({ questions, progress, recordAns, deptFilter, focusDisease, scopeLabel }) {
  const all = questions || window.SK_DATA.QUIZ_BANK;
  const filtered = deptFilter ? all.filter((q) => q.dept === deptFilter) : all;
  const [sessionSize, setSessionSize] = uS(10);
  const [sessionSeed, setSessionSeed] = uS(1);
  const [i, setI] = uS(0);
  const [picked, setPicked] = uS(null);
  const [flipped, setFlipped] = uS(false);
  const [answers, setAnswers] = uS({});
  const filterKey = filtered.map((q) => q.id).join("|");
  const session = uM(() => makeQuizSession(filtered, sessionSize, sessionSeed, focusDisease), [filterKey, sessionSize, sessionSeed, focusDisease]);
  const sessionCorrect = Object.values(answers).filter((v) => v === "correct").length;
  const sessionAnswered = Object.keys(answers).length;
  const isFinished = session.length > 0 && sessionAnswered === session.length;

  uE(() => {
    setI(0);
    setPicked(null);
    setFlipped(false);
    setAnswers({});
  }, [filterKey, sessionSize]);

  uE(() => { setPicked(null); setFlipped(false); }, [i, sessionSeed, deptFilter]);

  if (filtered.length === 0) {
    return <div className="empty">No questions yet for this selection.</div>;
  }

  const q = session[i % session.length];
  const next = () => setI((x) => Math.min(x + 1, session.length - 1));
  const prev = () => setI((x) => Math.max(x - 1, 0));
  const startNew = () => {
    setSessionSeed((x) => x + 1);
    setI(0);
    setPicked(null);
    setFlipped(false);
    setAnswers({});
  };
  const SessionControls = () => (
    <div className="quiz-session-panel">
      <div>
        <div className="quiz-session-title">Session</div>
        <div className="quiz-session-sub">
          {scopeLabel ? `${scopeLabel} · ` : ""}{sessionAnswered}/{session.length} answered · {sessionCorrect}/{sessionAnswered || 0} correct
        </div>
      </div>
      <div className="quiz-size-group">
        {[5, 10, 20, "all"].map((n) => {
          const disabled = n !== "all" && filtered.length < n;
          return (
            <button key={n} className={`quiz-size ${sessionSize===n ? "active" : ""}`} disabled={disabled} onClick={() => setSessionSize(n)}>
              {n === "all" ? "All" : n}
            </button>
          );
        })}
      </div>
      <button className="topbar-btn" onClick={startNew}>Refresh questions</button>
    </div>
  );

  const Summary = () => (
    <div className="quiz-summary">
      <div className="quiz-summary-score">{sessionCorrect}/{session.length}</div>
      <div>
        <h4>Session complete</h4>
        <p>{Math.round((sessionCorrect / session.length) * 100)}% correct. Start a new session to reshuffle the same filter.</p>
      </div>
    </div>
  );

  if (q.format === "flashcard") {
    const markReviewed = () => {
      setAnswers((prev) => ({ ...prev, [q.id]: "correct" }));
      recordAns(q.id, "correct");
    };
    return (
      <>
        <SessionControls />
        {isFinished && <Summary />}
        <div className="quiz-meta" style={{ maxWidth: 760 }}>
          <span>Flashcard · {q.dept}</span>
          <span>{i + 1} / {session.length}</span>
        </div>
        <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
          <div className="flashcard-inner">
            <div className="flashcard-face">
              <div className="corner">Front · click to flip</div>
              <div className="text">{q.front}</div>
            </div>
            <div className="flashcard-face back">
              <div className="corner">Back</div>
              <div className="text" style={{ fontWeight: 300 }}>{q.back}</div>
            </div>
          </div>
        </div>
        <div className="quiz-controls" style={{ maxWidth: 760 }}>
          <button className="topbar-btn" onClick={prev} disabled={i === 0}>← Previous</button>
          <button className="topbar-btn" onClick={markReviewed} disabled={answers[q.id] === "correct"}>Mark reviewed</button>
          <button className="topbar-btn primary" onClick={next} disabled={i === session.length - 1}>Next →</button>
        </div>
      </>
    );
  }

  const onPick = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    const result = idx === q.answer ? "correct" : "incorrect";
    setAnswers((prev) => ({ ...prev, [q.id]: result }));
    recordAns(q.id, result);
  };

  return (
    <>
      <SessionControls />
      {isFinished && <Summary />}
      <div className="quiz-card">
        <div className="quiz-meta">
          <span>{q.format === "vignette" ? "Clinical Vignette" : "MCQ"} · {q.dept}</span>
          <span>Question {i + 1} / {session.length}</span>
        </div>
        <div className="quiz-stem">{q.stem}</div>
        <div className="quiz-options">
          {q.options.map((opt, idx) => {
            let cls = "quiz-opt";
            if (picked !== null) {
              if (idx === q.answer) cls += " correct";
              else if (idx === picked) cls += " incorrect";
            }
            return (
              <button key={idx} className={cls} onClick={() => onPick(idx)} disabled={picked !== null}>
                <span className="letter">{String.fromCharCode(65 + idx)}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
        {picked !== null && (
          <div className="quiz-explain">
            <h5>{picked === q.answer ? "✦ Correct" : "✕ Not quite"} · Explanation</h5>
            <p>{q.explanation}</p>
          </div>
        )}
        <div className="quiz-controls">
          <button className="topbar-btn" onClick={prev} disabled={i === 0}>← Previous</button>
          <button className="topbar-btn primary" onClick={next} disabled={i === session.length - 1}>Next →</button>
        </div>
      </div>
    </>
  );
}

// ─── WRONG ANSWER REVIEW ─────────────────────────────────────────────────────
function WrongAnswerReview({ goto, progress, recordAns }) {
  const bank = uM(() => makePracticeBank(), []);
  const wrongNow = bank.filter(q => progress[q.id] === "incorrect");
  const [queueIds, setQueueIds] = uS(() => wrongNow.map(q => q.id));
  const [idx, setIdx] = uS(0);
  const [picked, setPicked] = uS(null);

  const refreshQueue = () => {
    const ids = bank.filter(q => progress[q.id] === "incorrect").map(q => q.id);
    setQueueIds(ids);
    setIdx(0);
    setPicked(null);
  };

  const queue = queueIds.map(id => bank.find(q => q.id === id)).filter(Boolean);
  const q = queue[idx] || queue[0];
  const disease = q ? window.SK_DATA.DISEASES.find(d => d.id === q.disease) : null;
  const deptName = q ? window.SK_DATA.DEPARTMENTS.find(d => d.id === q.dept)?.name : "";

  const removeCurrent = () => {
    if (!q) return;
    setQueueIds(prev => {
      const next = prev.filter(id => id !== q.id);
      setIdx(i => Math.min(i, Math.max(0, next.length - 1)));
      return next;
    });
    setPicked(null);
  };

  const next = () => {
    if (!q) return;
    if (picked === q.answer) removeCurrent();
    else {
      setIdx(i => Math.min(i + 1, queue.length - 1));
      setPicked(null);
    }
  };

  const onPick = (choice) => {
    if (picked !== null || !q) return;
    setPicked(choice);
    recordAns(q.id, choice === q.answer ? "correct" : "incorrect");
  };

  if (!queue.length) {
    return (
      <>
        <div className="page-head">
          <div className="eyebrow">Weak-point loop</div>
          <h1 className="page-title">Wrong Answers</h1>
          <p className="page-sub">No wrong answers are waiting. Missed text questions and image drills will appear here automatically.</p>
        </div>
        <div className="empty">Answer a quiz question incorrectly, then return here to review it.</div>
      </>
    );
  }

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Weak-point loop · {idx + 1} / {queue.length}</div>
        <h1 className="page-title">Wrong Answers</h1>
        <p className="page-sub">Retry saved mistakes. A correctly answered item is removed from this review queue; an incorrect retry stays for another pass.</p>
      </div>

      <div className="wrong-review-layout">
        <div className="wrong-review-list">
          <div className="wrong-review-head">
            <span>{queue.length} active</span>
            <button onClick={refreshQueue}>Refresh queue</button>
          </div>
          {queue.map((item, n) => {
            const itemDisease = window.SK_DATA.DISEASES.find(d => d.id === item.disease);
            return (
              <button key={item.id} className={`wrong-review-row ${n === idx ? "active" : ""}`} onClick={() => { setIdx(n); setPicked(null); }}>
                <span>{item.practiceType}</span>
                <b>{item.diseaseName || itemDisease?.name || item.disease}</b>
                <em>{window.SK_DATA.DEPARTMENTS.find(d => d.id === item.dept)?.name}</em>
              </button>
            );
          })}
        </div>

        <div className="wrong-review-card">
          <div className="quiz-meta">
            <span>{q.practiceType} · {deptName}</span>
            <span>{idx + 1} / {queue.length}</span>
          </div>

          {q.format === "image" && (
            <div className="image-quiz-source">
              <div>
                <div className="image-quiz-label">{q.source}</div>
                <h3>{q.query}</h3>
                <p>{q.prompt}</p>
              </div>
              <a className="topbar-btn primary" href={q.url} target="_blank" rel="noopener noreferrer">Open images ↗</a>
            </div>
          )}

          <div className="quiz-stem">{q.stem || q.prompt}</div>
          <div className="quiz-options">
            {q.options.map((opt, choice) => {
              let cls = "quiz-opt";
              if (picked !== null) {
                if (choice === q.answer) cls += " correct";
                else if (choice === picked) cls += " incorrect";
              }
              return (
                <button key={choice} className={cls} onClick={() => onPick(choice)} disabled={picked !== null}>
                  <span className="letter">{String.fromCharCode(65 + choice)}</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className="quiz-explain">
              <h5>{picked === q.answer ? "✦ Correct — remove from queue" : "✕ Still needs review"} · Explanation</h5>
              <p>{q.explanation}</p>
            </div>
          )}

          <div className="quiz-controls">
            <button className="topbar-btn" onClick={() => { setIdx(i => Math.max(0, i - 1)); setPicked(null); }} disabled={idx === 0}>← Previous</button>
            <div style={{ display: "flex", gap: 10 }}>
              {disease && <button className="topbar-btn" onClick={() => goto({ view: "detail", diseaseId: disease.id })}>Open disease</button>}
              {picked === q.answer && <button className="topbar-btn" onClick={removeCurrent}>Remove now</button>}
              <button className="topbar-btn primary" onClick={next} disabled={picked === null}>
                {picked === q.answer ? "Remove & next →" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── BOOKMARKS ────────────────────────────────────────────────────────────────
function BookmarksView({ goto, bookmarks, toggle }) {
  const { DISEASES } = window.SK_DATA;
  const items = DISEASES.filter((d) => bookmarks.includes(d.id));
  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Personal · Starred</div>
        <h1 className="page-title">Bookmarks</h1>
        <p className="page-sub">{items.length} diseases starred for revision.</p>
      </div>
      {items.length === 0 ? (
        <div className="empty">Star any disease (☆) to add it here.</div>
      ) : (
        <div className="disease-list">
          {items.map((d, i) => (
            <div key={d.id} className="disease-row" onClick={() => goto({ view: "detail", diseaseId: d.id })}>
              <div className="num">{String(i + 1).padStart(2, "0")}</div>
              <div className="name">{d.name}<span className="latin">{d.organ}</span></div>
              <div className="organ">{window.SK_DATA.DEPARTMENTS.find((x) => x.id === d.dept)?.name}</div>
              <div className={`severity ${d.severity}`}>{d.severity}</div>
              <Bookmark id={d.id} bookmarks={bookmarks} toggle={toggle} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// ─── COMPARE ─────────────────────────────────────────────────────────────────
function CompareView({ goto }) {
  const { DISEASES } = window.SK_DATA;
  const [a, setA] = uS("appendicitis");
  const [b, setB] = uS("diverticulitis");
  const da = DISEASES.find((x) => x.id === a);
  const db = DISEASES.find((x) => x.id === b);

  const Sel = ({ value, onChange }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="topbar-btn"
      style={{ minWidth: 220, padding: "10px 14px", fontSize: 13.5 }}>
      {DISEASES.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
    </select>
  );

  const row = (label, va, vb) => (
    <>
      <div className="row-h">{label}</div>
      <div>{va || "—"}</div>
      <div>{vb || "—"}</div>
    </>
  );

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Side-by-Side</div>
        <h1 className="page-title">Compare diagnoses</h1>
        <p className="page-sub">Place two conditions side by side — useful for differentials.</p>
      </div>
      <div className="compare-picker" style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "center" }}>
        <Sel value={a} onChange={setA} />
        <span className="compare-vs" style={{ color: "var(--ink-soft)", fontWeight: 500 }}>vs</span>
        <Sel value={b} onChange={setB} />
      </div>
      <div className="compare-grid" style={{ "--cols": 2 }}>
        <div className="head">Attribute</div>
        <div className="head">{da.name}</div>
        <div className="head">{db.name}</div>
        {row("Organ", da.organ, db.organ)}
        {row("Severity", da.severity, db.severity)}
        {row("Summary", da.hero, db.hero)}
        {row("Department", window.SK_DATA.DEPARTMENTS.find((x) => x.id === da.dept)?.name, window.SK_DATA.DEPARTMENTS.find((x) => x.id === db.dept)?.name)}
        {row("Definition", da.overview?.definition, db.overview?.definition)}
        {row("Epidemiology", da.overview?.epidemiology, db.overview?.epidemiology)}
        {row("Pathophysiology", da.overview?.pathophysiology, db.overview?.pathophysiology)}
        {row("Key management", (da.management?.surgical || []).map(s => s.name).join(", "), (db.management?.surgical || []).map(s => s.name).join(", "))}
        {row("Scoring systems", (da.scoring || []).map((s) => window.SK_DATA.SCORING[s]?.name).join(", "), (db.scoring || []).map((s) => window.SK_DATA.SCORING[s]?.name).join(", "))}
        {row("Differentials", (da.differentials || []).join(", "), (db.differentials || []).join(", "))}
        {row("Tags", (da.tags || []).join(", "), (db.tags || []).join(", "))}
      </div>
    </>
  );
}

// ─── DECISION ALGORITHMS ─────────────────────────────────────────────────────
function AlgorithmMode({ goto }) {
  const { ALGORITHMS, DISEASES } = window.SK_DATA;
  const [q, setQ] = uS("");
  const [urgency, setUrgency] = uS("all");
  const [selectedId, setSelectedId] = uS(ALGORITHMS[0]?.id);
  const detailRef = uR(null);
  // True only on a user tap, so we scroll exactly when they expect it.
  const scrollOnSelect = uR(false);

  // On a phone the list stacks above the detail; tapping a row should bring the
  // detail into view rather than leaving the user parked on the list.
  const selectAlgo = (id) => {
    scrollOnSelect.current = true;
    setSelectedId(id);
  };

  uE(() => {
    if (!scrollOnSelect.current) return;
    scrollOnSelect.current = false;
    if (!window.matchMedia("(max-width: 820px)").matches) return;
    const el = detailRef.current;
    if (!el) return;
    const topbar = document.querySelector(".topbar");
    const offset = (topbar ? topbar.offsetHeight : 0) + 8;
    const y = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [selectedId]);

  const filtered = uM(() => {
    const term = q.trim().toLowerCase();
    return ALGORITHMS.filter((a) => {
      const urgencyOk = urgency === "all" || a.urgency === urgency;
      const textOk = !term ||
        a.title.toLowerCase().includes(term) ||
        a.presentation.toLowerCase().includes(term) ||
        a.scope.toLowerCase().includes(term) ||
        (a.tags || []).some(t => t.toLowerCase().includes(term));
      return urgencyOk && textOk;
    });
  }, [ALGORITHMS, q, urgency]);

  uE(() => {
    if (!filtered.some(a => a.id === selectedId)) setSelectedId(filtered[0]?.id);
  }, [filtered.map(a => a.id).join("|")]);

  const selected = ALGORITHMS.find(a => a.id === selectedId) || filtered[0];
  const linked = selected ? selected.linkedDiseaseIds.map(id => DISEASES.find(d => d.id === id)).filter(Boolean) : [];
  const urgencyLabels = {
    immediate: "Immediate",
    "time-critical": "Time-critical",
    urgent: "Urgent",
    "urgent if septic": "Urgent if septic",
    "urgent cancer pathway if suspicious": "Cancer pathway",
    "urgent if airway, aggressive cancer, or sepsis": "Airway/cancer/sepsis",
    "urgent if obstructed, perforated, or bleeding": "Emergency if complicated"
  };

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Decision Algorithms</div>
        <h1 className="page-title">Presentation to action</h1>
        <p className="page-sub">Fast structured pathways for common general-surgery presentations. Use them to organise first assessment, red flags, imaging, intervention, and escalation.</p>
      </div>

      <div className="filter-bar">
        <button className={`chip ${urgency==="all"?"active":""}`} onClick={() => setUrgency("all")}>All ({ALGORITHMS.length})</button>
        {[...new Set(ALGORITHMS.map(a => a.urgency))].map(u => (
          <button key={u} className={`chip ${urgency===u?"active":""}`} onClick={() => setUrgency(u)}>
            {urgencyLabels[u] || u}
          </button>
        ))}
      </div>

      <input
        className="procedure-search"
        placeholder="Search presentation, red flag, imaging, intervention..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="algorithm-layout">
        <div className="algorithm-list">
          {filtered.length === 0 && <div className="empty">No algorithms match this filter.</div>}
          {filtered.map(a => (
            <button key={a.id} className={`algorithm-row ${selected?.id === a.id ? "active" : ""}`} onClick={() => selectAlgo(a.id)}>
              <span>{urgencyLabels[a.urgency] || a.urgency}</span>
              <b>{a.title}</b>
              <em>{a.scope}</em>
            </button>
          ))}
        </div>

        {selected && (
          <div className="algorithm-detail" ref={detailRef}>
            <div className="algorithm-kicker">{selected.scope} · {urgencyLabels[selected.urgency] || selected.urgency}</div>
            <h2>{selected.title}</h2>
            <p className="algorithm-presentation">{selected.presentation}</p>
            <div className="procedure-tags">{selected.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>

            <div className="algorithm-redflags">
              <h3>Red flags</h3>
              <div>{selected.redFlags.map((r, i) => <span key={i}>{r}</span>)}</div>
            </div>

            <div className="algorithm-flow">
              {selected.steps.map((s, i) => (
                <React.Fragment key={s.n}>
                  <div className="algorithm-step">
                    <div className="algorithm-step-num">{s.n}</div>
                    <div>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                      {s.actions?.length > 0 && (
                        <ul>
                          {s.actions.map((a, n) => <li key={n}>{a}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                  {i < selected.steps.length - 1 && <div className="algorithm-connector" />}
                </React.Fragment>
              ))}
            </div>

            {linked.length > 0 && (
              <div className="algorithm-linked">
                <h3>Linked disease pages</h3>
                <div>
                  {linked.map(d => (
                    <button key={d.id} className="topbar-btn" onClick={() => goto({ view: "detail", diseaseId: d.id })}>
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

// ─── PROCEDURE MODE ───────────────────────────────────────────────────────────
function ProcedureMode({ goto, initialProcedureId }) {
  const { DEPARTMENTS, PROCEDURES, DISEASES } = window.SK_DATA;
  const [dept, setDept] = uS(null);
  const [q, setQ] = uS("");
  const validInitialId = PROCEDURES.some((p) => p.id === initialProcedureId) ? initialProcedureId : null;
  const [selectedId, setSelectedId] = uS(validInitialId || PROCEDURES[0]?.id);
  const detailRef = uR(null);
  // Set true only when the user taps a list row (not on initial mount, filter
  // changes, or deep-links) so we scroll exactly when they expect it.
  const scrollOnSelect = uR(false);

  // On a phone the picker list sits *above* the detail, so tapping a row would
  // otherwise leave you parked on the list with the (now-changed) detail far
  // below. Auto-scroll the detail into view so the user doesn't have to. Only
  // on mobile — on desktop the detail is already visible beside the list.
  const selectProc = (id) => {
    scrollOnSelect.current = true;
    setSelectedId(id);
  };

  // Runs after React commits the new detail content, so the measurement below
  // reflects the procedure the user just tapped.
  uE(() => {
    if (!scrollOnSelect.current) return;
    scrollOnSelect.current = false;
    if (!window.matchMedia("(max-width: 820px)").matches) return;
    const el = detailRef.current;
    if (!el) return;
    const topbar = document.querySelector(".topbar");
    const offset = (topbar ? topbar.offsetHeight : 0) + 8;
    const y = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [selectedId]);

  const filtered = uM(() => {
    const term = q.trim().toLowerCase();
    return PROCEDURES.filter((p) => {
      const deptOk = !dept || p.dept === dept;
      const textOk = !term ||
        p.name.toLowerCase().includes(term) ||
        p.disease.toLowerCase().includes(term) ||
        (p.organ || "").toLowerCase().includes(term) ||
        (p.tags || []).some(t => t.toLowerCase().includes(term));
      return deptOk && textOk;
    });
  }, [PROCEDURES, dept, q]);

  uE(() => {
    if (!filtered.some((p) => p.id === selectedId)) setSelectedId(filtered[0]?.id);
  }, [filtered.map(p => p.id).join("|")]);

  uE(() => {
    if (!validInitialId) return;
    setDept(null);
    setQ("");
    setSelectedId(validInitialId);
  }, [validInitialId]);

  const selected = PROCEDURES.find((p) => p.id === selectedId) || filtered[0];
  const disease = selected ? DISEASES.find((d) => d.id === selected.diseaseId) : null;
  const deptName = selected ? DEPARTMENTS.find((d) => d.id === selected.dept)?.name : "";
  const resourceCard = (r, i, type) => (
    <a key={`${type}-${i}`} className={`${type}-resource-card compact`} href={r.url} target="_blank" rel="noopener noreferrer">
      <div className={`${type}-resource-source`}>{r.source}</div>
      <div className={`${type}-resource-title`}>{r.title}</div>
      {r.query && <div className={`${type}-resource-query`}>Search: {r.query}</div>}
    </a>
  );

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Procedure Mode</div>
        <h1 className="page-title">Operation atlas</h1>
        <p className="page-sub">Procedure-focused revision built from the operative technique sections: indications, anatomy danger zones, steps, pitfalls, and linked image/video references.</p>
      </div>

      <div className="filter-bar">
        <button className={`chip ${dept===null?"active":""}`} onClick={() => setDept(null)}>All ({PROCEDURES.length})</button>
        {DEPARTMENTS.map((d) => {
          const c = PROCEDURES.filter((p) => p.dept === d.id).length;
          return c ? <button key={d.id} className={`chip ${dept===d.id?"active":""}`} onClick={() => setDept(d.id)}>{d.name} ({c})</button> : null;
        })}
      </div>

      <input
        className="procedure-search"
        placeholder="Search operation, disease, organ, tag..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="procedure-layout">
        <div className="procedure-list">
          {filtered.length === 0 && <div className="empty">No procedures match this filter.</div>}
          {filtered.map((p) => (
            <button key={p.id} className={`procedure-row ${selected?.id === p.id ? "active" : ""}`} onClick={() => selectProc(p.id)}>
              <span className="procedure-row-dept">{DEPARTMENTS.find((d) => d.id === p.dept)?.name}</span>
              <span className="procedure-row-name">{p.name}</span>
              <span className="procedure-row-disease">{p.disease}</span>
            </button>
          ))}
        </div>

        {selected && (
          <div className="procedure-detail" ref={detailRef}>
            <div className="procedure-kicker">{deptName} · {selected.organ}</div>
            <h2>{selected.name}</h2>
            <p className="procedure-summary">{selected.summary}</p>
            <div className="procedure-tags">{(selected.tags || []).slice(0, 7).map(t => <Tag key={t}>{t}</Tag>)}</div>

            <div className="procedure-actions">
              <button className="topbar-btn primary" onClick={() => goto({ view: "detail", diseaseId: selected.diseaseId })}>Open disease entry →</button>
              {selected.videoResources?.[0] && <a className="topbar-btn" href={selected.videoResources[0].url} target="_blank" rel="noopener noreferrer">Open video library</a>}
              {selected.imageResources?.[0] && <a className="topbar-btn" href={selected.imageResources[0].url} target="_blank" rel="noopener noreferrer">Open anatomy images</a>}
            </div>

            <SafetyChecklist key={selected.id} proc={selected} />

            {selected.indications?.length > 0 && (
              <div className="procedure-block">
                <h3>Indications</h3>
                <div className="procedure-mini-grid">
                  {selected.indications.map((s, i) => (
                    <div key={i} className="procedure-mini-card">
                      <b>{s.name}</b>
                      {s.when && <span>{s.when}</span>}
                      {s.notes && <em>{s.notes}</em>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selected.anatomyFocus?.length > 0 && (
              <div className="procedure-block">
                <h3>Anatomy danger zones</h3>
                <ul className="procedure-list-clean">{selected.anatomyFocus.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
            )}

            {selected.prep?.length > 0 && (
              <div className="procedure-block">
                <h3>Preparation</h3>
                <ul className="procedure-list-clean">{selected.prep.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
            )}

            {selected.steps?.length > 0 && (
              <div className="procedure-block">
                <h3>Operative steps</h3>
                <div className="procedure-steps">
                  {selected.steps.map((s, i) => (
                    <div key={i} className="procedure-step">
                      <span>{s.n || i + 1}</span>
                      <div><b>{s.t}</b><p>{s.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="procedure-two-col">
              {selected.pearls?.length > 0 && (
                <div className="procedure-block">
                  <h3>Pearls</h3>
                  <ul className="procedure-list-clean">{selected.pearls.map((x, i) => <li key={i}>{x}</li>)}</ul>
                </div>
              )}
              {selected.pitfalls?.length > 0 && (
                <div className="procedure-block danger">
                  <h3>Pitfalls</h3>
                  <ul className="procedure-list-clean">{selected.pitfalls.map((x, i) => <li key={i}>{x}</li>)}</ul>
                </div>
              )}
            </div>

            <div className="procedure-two-col">
              {selected.imageResources?.length > 0 && (
                <div className="procedure-block">
                  <h3>Anatomy/images</h3>
                  <div className="procedure-resource-stack">{selected.imageResources.map((r, i) => resourceCard(r, i, "image"))}</div>
                </div>
              )}
              {selected.videoResources?.length > 0 && (
                <div className="procedure-block">
                  <h3>Operation videos</h3>
                  <div className="procedure-resource-stack">{selected.videoResources.map((r, i) => resourceCard(r, i, "video"))}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── IMAGE QUIZ MODE ─────────────────────────────────────────────────────────
function ImageQuizMode({ goto, progress, recordAns }) {
  const { DEPARTMENTS, IMAGE_QUIZ_BANK, DISEASES } = window.SK_DATA;
  const [dept, setDept] = uS(null);
  const [seed, setSeed] = uS(1);
  const [i, setI] = uS(0);
  const [picked, setPicked] = uS(null);

  const filtered = uM(() => {
    const qs = dept ? IMAGE_QUIZ_BANK.filter((q) => q.dept === dept) : IMAGE_QUIZ_BANK;
    return makeQuizSession(qs, "all", seed);
  }, [dept, seed]);

  uE(() => { setI(0); setPicked(null); }, [dept, seed]);
  uE(() => setPicked(null), [i]);

  if (!filtered.length) return <div className="empty">No image quiz cards for this selection.</div>;

  const q = filtered[i % filtered.length];
  const disease = DISEASES.find((d) => d.id === q.disease);
  const deptName = DEPARTMENTS.find((d) => d.id === q.dept)?.name;
  const onPick = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    recordAns(q.id, idx === q.answer ? "correct" : "incorrect");
  };

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Image Quiz</div>
        <h1 className="page-title">Recognition drills</h1>
        <p className="page-sub">Open the linked image set, inspect the anatomy or pathology, then answer. This keeps the app copyright-clean while still training visual diagnosis and intervention planning.</p>
      </div>

      <div className="filter-bar">
        <button className={`chip ${dept===null?"active":""}`} onClick={() => setDept(null)}>All ({IMAGE_QUIZ_BANK.length})</button>
        {DEPARTMENTS.map((d) => {
          const c = IMAGE_QUIZ_BANK.filter((q) => q.dept === d.id).length;
          return c ? <button key={d.id} className={`chip ${dept===d.id?"active":""}`} onClick={() => setDept(d.id)}>{d.name} ({c})</button> : null;
        })}
      </div>

      <div className="image-quiz-card">
        <div className="quiz-meta">
          <span>{deptName} · {q.source}</span>
          <span>{i + 1} / {filtered.length}</span>
        </div>
        <div className="image-quiz-source">
          <div>
            <div className="image-quiz-label">Reference image set</div>
            <h3>{q.query}</h3>
            <p>{q.prompt}</p>
            <div className="image-resource-tags">{(q.tags || []).map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <a className="topbar-btn primary" href={q.url} target="_blank" rel="noopener noreferrer">Open images ↗</a>
        </div>

        <div className="quiz-stem">{q.stem}</div>
        <div className="quiz-options">
          {q.options.map((opt, idx) => {
            let cls = "quiz-opt";
            if (picked !== null) {
              if (idx === q.answer) cls += " correct";
              else if (idx === picked) cls += " incorrect";
            }
            return (
              <button key={idx} className={cls} onClick={() => onPick(idx)} disabled={picked !== null}>
                <span className="letter">{String.fromCharCode(65 + idx)}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className="quiz-explain">
            <h5>{picked === q.answer ? "✦ Correct" : "✕ Not quite"} · Recognition point</h5>
            <p>{q.explanation}</p>
            {q.anatomyFocus?.length > 0 && (
              <ul className="procedure-list-clean" style={{ marginTop: 12 }}>
                {q.anatomyFocus.map((x, n) => <li key={n}>{x}</li>)}
              </ul>
            )}
          </div>
        )}

        <div className="quiz-controls">
          <button className="topbar-btn" onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0}>← Previous</button>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="topbar-btn" onClick={() => setSeed((x) => x + 1)}>Refresh questions</button>
            {disease && <button className="topbar-btn" onClick={() => goto({ view: "detail", diseaseId: disease.id })}>Open disease</button>}
            <button className="topbar-btn primary" onClick={() => setI((x) => Math.min(filtered.length - 1, x + 1))} disabled={i === filtered.length - 1}>Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── QUIZ HUB ─────────────────────────────────────────────────────────────────
function QuizHub({ goto, progress, recordAns, resetProgress }) {
  const { DEPARTMENTS, QUIZ_BANK, IMAGE_QUIZ_BANK } = window.SK_DATA;
  const [dept, setDept] = uS(null);
  const [format, setFormat] = uS(null);

  const filtered = uM(() => {
    let qs = QUIZ_BANK;
    if (dept) qs = qs.filter((q) => q.dept === dept);
    if (format) qs = qs.filter((q) => q.format === format);
    return qs;
  }, [dept, format]);

  const correct = Object.values(progress).filter((v) => v === "correct").length;
  const total = Object.keys(progress).length;
  const wrong = Object.values(progress).filter((v) => v === "incorrect").length;

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Self-assessment</div>
        <h1 className="page-title">Quiz</h1>
        <p className="page-sub">
          {QUIZ_BANK.length} text questions plus {IMAGE_QUIZ_BANK.length} image-recognition drills. Filter by department or take the full mixed bank.
        </p>
        {total > 0 && (
          <div className="quiz-progress-wrap">
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${Math.round((correct/total)*100)}%` }} />
              <span>{correct}/{total} correct ({Math.round((correct/total)*100)}%)</span>
            </div>
            <button className="quiz-progress-reset" onClick={resetProgress}>Reset progress</button>
          </div>
        )}
      </div>
      {wrong > 0 && (
        <div className="due-banner wrong-review-banner" onClick={() => goto({ view: "wrongAnswers" })}>
          <span>!  {wrong} wrong answer{wrong !== 1 ? "s" : ""} ready for review</span>
          <span className="arrow">Review mistakes →</span>
        </div>
      )}
      <div className="filter-bar">
        <button className={`chip ${dept===null&&format===null?"active":""}`} onClick={() => { setDept(null); setFormat(null); }}>All ({QUIZ_BANK.length})</button>
        {DEPARTMENTS.map((d) => {
          const c = QUIZ_BANK.filter((q) => q.dept === d.id).length;
          if (c === 0) return null;
          return <button key={d.id} className={`chip ${dept===d.id?"active":""}`} onClick={() => setDept(d.id)}>{d.name} ({c})</button>;
        })}
      </div>
      <div className="filter-bar" style={{ marginTop: -8 }}>
        {["mcq","vignette","flashcard"].map(f => (
          <button key={f} className={`chip ${format===f?"active":""}`} onClick={() => setFormat(format===f ? null : f)}>
            {f.charAt(0).toUpperCase()+f.slice(1)}
          </button>
        ))}
      </div>
      <QuizModule deptFilter={null} questions={filtered} progress={progress} recordAns={recordAns} />
    </>
  );
}

// ─── STUDY MODE (SRS review) ──────────────────────────────────────────────────
function StudyView({ goto, srs, review }) {
  const { DISEASES } = window.SK_DATA;
  const due = DISEASES.filter((d) => {
    const s = srs[d.id];
    return !s || !s.nextReview || new Date(s.nextReview) <= new Date();
  });
  const [idx, setIdx] = uS(0);
  const [revealed, setRevealed] = uS(false);

  uE(() => setRevealed(false), [idx]);

  if (due.length === 0) {
    return (
      <>
        <div className="page-head">
          <div className="eyebrow">Spaced Repetition</div>
          <h1 className="page-title">All caught up!</h1>
          <p className="page-sub">No cards are due for review. Come back later or browse the index.</p>
        </div>
        <button className="topbar-btn primary" onClick={() => goto({ view: "home" })}>Back to index</button>
      </>
    );
  }

  const d = due[idx % due.length];
  const s = srs[d.id] || { level: 0 };
  const levelLabel = ["New","Again","Learning","Review","Mature","Mastered"][s.level] || "New";

  const act = (action) => {
    review(d.id, action);
    setIdx((i) => (i + 1) % due.length);
  };

  return (
    <>
      <div className="page-head">
        <div className="eyebrow">Spaced Repetition · {idx + 1} / {due.length} due</div>
        <h1 className="page-title">Study Mode</h1>
      </div>
      <div className="study-card">
        <div className="study-card-dept">{window.SK_DATA.DEPARTMENTS.find(x=>x.id===d.dept)?.name} · {d.organ}</div>
        <div className="study-card-name">{d.name}</div>
        {d.latin && <div className="study-card-latin">{d.latin}</div>}
        <div className="study-card-level">{levelLabel}</div>
        {!revealed ? (
          <button className="study-reveal-btn" onClick={() => setRevealed(true)}>Show summary</button>
        ) : (
          <>
            <p className="study-card-hero">{d.hero}</p>
            {d.keypoints?.length > 0 && (
              <ul className="study-card-points">
                {d.keypoints.slice(0, 3).map((k, i) => <li key={i}>{k}</li>)}
              </ul>
            )}
            {d.mnemonics?.length > 0 && (
              <div className="study-card-mnemonic">{d.mnemonics[0].name}: {d.mnemonics[0].text}</div>
            )}
            <div className="study-srs-row">
              <button className="srs-btn again"  onClick={() => act("again")}>Again</button>
              <button className="srs-btn hard"   onClick={() => act("hard")}>Hard</button>
              <button className="srs-btn good"   onClick={() => act("good")}>Good</button>
              <button className="srs-btn easy"   onClick={() => act("easy")}>Easy</button>
            </div>
            <button className="study-detail-btn" onClick={() => goto({ view: "detail", diseaseId: d.id })}>Full entry →</button>
          </>
        )}
      </div>
    </>
  );
}

Object.assign(window, { Dashboard, DeptView, DetailView, QuizModule, WrongAnswerReview, BookmarksView, CompareView, AlgorithmMode, ProcedureMode, ImageQuizMode, QuizHub, StudyView, useSRS, useNotes, SrsWidget, NotesWidget, SafetyChecklist });
