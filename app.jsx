// app.jsx — root, routing, sidebar, search, tweaks panel

const { useState: uSt, useEffect: uEf, useMemo: uMem, useRef: uRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "serif": "Newsreader",
  "accent": "vital",
  "showAnatLines": true
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  vital: "oklch(52% 0.16 25)",
  indigo: "oklch(45% 0.10 260)",
  sage: "oklch(45% 0.08 145)",
  amber: "oklch(58% 0.14 75)",
};

function useLocalState(key, initial) {
  const [v, setV] = uSt(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial; }
    catch { return initial; }
  });
  uEf(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key, v]);
  return [v, setV];
}

function App() {
  const [t, setT] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = uSt({ view: "home" });
  const [bookmarks, setBookmarks] = useLocalState("sk_bookmarks", ["aaa", "ap"]);
  const [progress, setProgress] = useLocalState("sk_progress", {});
  const [searchOpen, setSearchOpen] = uSt(false);
  const [searchQ, setSearchQ] = uSt("");
  const [navOpen, setNavOpen] = uSt(false); // mobile off-canvas sidebar drawer
  const { srs, review, isDue } = useSRS();
  const { notes, setNote } = useNotes();

  uEf(() => {
    document.documentElement.style.setProperty("--vital", ACCENT_MAP[t.accent] || ACCENT_MAP.vital);
    document.documentElement.style.setProperty("--serif", `'${t.serif}', Georgia, serif`);
    document.documentElement.style.setProperty("--content-pad", t.density === "compact" ? "24px" : t.density === "comfy" ? "48px" : "36px");
  }, [t.accent, t.serif, t.density]);

  const toggleBookmark = (id) =>
    setBookmarks((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));

  const recordAns = (qId, result) =>
    setProgress((p) => ({ ...p, [qId]: result }));

  const resetProgress = () => setProgress({});

  const goto = (r) => {
    setRoute(r);
    setSearchOpen(false);
    setSearchQ("");
    setNavOpen(false); // close the mobile drawer when navigating
    setTimeout(() => {
      const c = document.querySelector(".content");
      if (c) c.scrollTo(0, 0);
      window.scrollTo(0, 0);
    }, 0);
  };

  uEf(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("global-search")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const { DEPARTMENTS, DISEASES, ALGORITHMS } = window.SK_DATA;

  const dueCount = DISEASES.filter((d) => isDue(d.id) && (srs[d.id]?.level || 0) > 0).length;
  const wrongCount = Object.values(progress).filter((v) => v === "incorrect").length;

  const searchResults = uMem(() => {
    if (!searchQ.trim()) return [];
    const q = searchQ.toLowerCase();
    return DISEASES.filter((d) =>
      d.name.toLowerCase().includes(q) ||
      (d.organ || "").toLowerCase().includes(q) ||
      (d.tags || []).some((tg) => tg.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [searchQ]);

  const crumb = (() => {
    if (route.view === "home") return [["Home", null]];
    if (route.view === "dept") {
      const d = DEPARTMENTS.find((x) => x.id === route.deptId);
      return [["Home", { view: "home" }], [d?.name, null]];
    }
    if (route.view === "detail") {
      const d = DISEASES.find((x) => x.id === route.diseaseId);
      const dept = DEPARTMENTS.find((x) => x.id === d?.dept);
      return [["Home", { view: "home" }], [dept?.name, { view: "dept", deptId: dept?.id }], [d?.name, null]];
    }
    if (route.view === "quiz") return [["Home", { view: "home" }], ["Quiz", null]];
    if (route.view === "algorithms") return [["Home", { view: "home" }], ["Algorithms", null]];
    if (route.view === "procedures") return [["Home", { view: "home" }], ["Procedures", null]];
    if (route.view === "imageQuiz") return [["Home", { view: "home" }], ["Image Quiz", null]];
    if (route.view === "wrongAnswers") return [["Home", { view: "home" }], ["Wrong Answers", null]];
    if (route.view === "bookmarks") return [["Home", { view: "home" }], ["Bookmarks", null]];
    if (route.view === "compare") return [["Home", { view: "home" }], ["Compare", null]];
    if (route.view === "study") return [["Home", { view: "home" }], ["Study", null]];
    return [];
  })();

  return (
    <div className="app">
      {/* Mobile drawer backdrop — tap to close */}
      <div
        className={`nav-backdrop ${navOpen ? "show" : ""}`}
        onClick={() => setNavOpen(false)}
      />
      {/* SIDEBAR */}
      <aside className={`sidebar ${navOpen ? "open" : ""}`}>
        <div className="brand" onClick={() => goto({ view: "home" })} style={{ cursor: "pointer" }}>
          <div className="brand-mark">S</div>
          <div className="brand-text">
            <span className="t1">Surgical Knowledge</span>
            <span className="t2">Compendium · 2026</span>
          </div>
        </div>

        <div className="nav-section">Library</div>
        <button className={`nav-item ${route.view === "home" ? "active" : ""}`} onClick={() => goto({ view: "home" })}>
          <span className="nav-glyph">❦</span>
          <span className="nav-label">Index</span>
        </button>
        <button className={`nav-item ${route.view === "study" ? "active" : ""}`} onClick={() => goto({ view: "study" })}>
          <span className="nav-glyph">⟳</span>
          <span className="nav-label">Study</span>
          {dueCount > 0 && <span className="nav-count due">{dueCount}</span>}
        </button>
        <button className={`nav-item ${route.view === "compare" ? "active" : ""}`} onClick={() => goto({ view: "compare" })}>
          <span className="nav-glyph">⇆</span>
          <span className="nav-label">Compare</span>
        </button>
        <button className={`nav-item ${route.view === "algorithms" ? "active" : ""}`} onClick={() => goto({ view: "algorithms" })}>
          <span className="nav-glyph">⌘</span>
          <span className="nav-label">Algorithms</span>
          <span className="nav-count">{ALGORITHMS?.length || 0}</span>
        </button>
        <button className={`nav-item ${route.view === "procedures" ? "active" : ""}`} onClick={() => goto({ view: "procedures" })}>
          <span className="nav-glyph">⌁</span>
          <span className="nav-label">Procedures</span>
          <span className="nav-count">{window.SK_DATA.PROCEDURES?.length || 0}</span>
        </button>
        <button className={`nav-item ${route.view === "bookmarks" ? "active" : ""}`} onClick={() => goto({ view: "bookmarks" })}>
          <span className="nav-glyph">★</span>
          <span className="nav-label">Bookmarks</span>
          <span className="nav-count">{bookmarks.length}</span>
        </button>
        <button className={`nav-item ${route.view === "imageQuiz" ? "active" : ""}`} onClick={() => goto({ view: "imageQuiz" })}>
          <span className="nav-glyph">◫</span>
          <span className="nav-label">Image Quiz</span>
          <span className="nav-count">{window.SK_DATA.IMAGE_QUIZ_BANK?.length || 0}</span>
        </button>
        <button className={`nav-item ${route.view === "quiz" ? "active" : ""}`} onClick={() => goto({ view: "quiz" })}>
          <span className="nav-glyph">?</span>
          <span className="nav-label">Quiz</span>
          <span className="nav-count">{Object.keys(progress).length}</span>
        </button>
        <button className={`nav-item ${route.view === "wrongAnswers" ? "active" : ""}`} onClick={() => goto({ view: "wrongAnswers" })}>
          <span className="nav-glyph">!</span>
          <span className="nav-label">Wrong Answers</span>
          <span className={`nav-count ${wrongCount > 0 ? "due" : ""}`}>{wrongCount}</span>
        </button>

        <div className="nav-section">Departments</div>
        {DEPARTMENTS.map((d) => {
          const count = DISEASES.filter((x) => x.dept === d.id).length;
          return (
            <button
              key={d.id}
              className={`nav-item ${route.view === "dept" && route.deptId === d.id ? "active" : ""}`}
              onClick={() => goto({ view: "dept", deptId: d.id })}
            >
              <span className="nav-glyph">{d.glyph}</span>
              <span className="nav-label">{d.name}</span>
              <span className="nav-count">{count}</span>
            </button>
          );
        })}

        <div className="sidebar-foot">
          <div className="row"><span>Edition</span><b>2026.04</b></div>
          <div className="row"><span>Sources</span><b>Schwartz · NICE · ESVS</b></div>
          <div className="row"><span>For revision use</span><b>—</b></div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="main">
        <div className="topbar">
          <button
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => setNavOpen((o) => !o)}
          >
            ☰
          </button>
          <div className="crumbs">
            {crumb.map(([label, target], i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="sep">/</span>}
                <span className={target ? "" : "here"} onClick={() => target && goto(target)}>{label}</span>
              </React.Fragment>
            ))}
          </div>

          <div className="search-wrap">
            <span className="search-icon">⌕</span>
            <input
              id="global-search"
              className="search"
              placeholder="Search diseases, organs, tags…"
              value={searchQ}
              onChange={(e) => { setSearchQ(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setTimeout(() => setSearchOpen(false), 180)}
            />
            <span className="kbd">⌘K</span>
            {searchOpen && searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((d) => {
                  const dept = DEPARTMENTS.find((x) => x.id === d.dept);
                  return (
                    <div key={d.id} className="row" onMouseDown={() => goto({ view: "detail", diseaseId: d.id })}>
                      <span className="nm">{d.name}</span>
                      <span className="dp">{dept?.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <button className="topbar-btn" onClick={() => goto({ view: "quiz" })}>Start quiz</button>
        </div>

        <div className="content">
          {route.view === "home"      && <Dashboard goto={goto} progress={progress} bookmarks={bookmarks} srs={srs} />}
          {route.view === "dept"      && <DeptView deptId={route.deptId} goto={goto} bookmarks={bookmarks} toggle={toggleBookmark} srs={srs} />}
          {route.view === "detail"    && <DetailView diseaseId={route.diseaseId} goto={goto} bookmarks={bookmarks} toggle={toggleBookmark} progress={progress} recordAns={recordAns} srs={srs} review={review} notes={notes} setNote={setNote} deptDiseases={route.deptDiseases} />}
          {route.view === "algorithms" && <AlgorithmMode goto={goto} />}
          {route.view === "procedures" && <ProcedureMode goto={goto} initialProcedureId={route.procedureId} />}
          {route.view === "imageQuiz"  && <ImageQuizMode goto={goto} progress={progress} recordAns={recordAns} />}
          {route.view === "quiz"      && <QuizHub goto={goto} progress={progress} recordAns={recordAns} resetProgress={resetProgress} />}
          {route.view === "wrongAnswers" && <WrongAnswerReview goto={goto} progress={progress} recordAns={recordAns} />}
          {route.view === "bookmarks" && <BookmarksView goto={goto} bookmarks={bookmarks} toggle={toggleBookmark} />}
          {route.view === "compare"   && <CompareView goto={goto} />}
          {route.view === "study"     && <StudyView goto={goto} srs={srs} review={review} />}
        </div>
      </div>

      <TweaksPanel>
        <TweakSection label="Typography" />
        <TweakSelect
          label="Serif" value={t.serif}
          options={["Newsreader", "Source Serif 4", "Crimson Pro", "EB Garamond"]}
          onChange={(v) => setT("serif", v)}
        />
        <TweakRadio
          label="Density" value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setT("density", v)}
        />
        <TweakSection label="Accent" />
        <TweakRadio
          label="Anatomical accent" value={t.accent}
          options={["vital", "indigo", "sage", "amber"]}
          onChange={(v) => setT("accent", v)}
        />
        <TweakSection label="Atlas" />
        <TweakToggle
          label="Decorative dividers" value={t.showAnatLines}
          onChange={(v) => setT("showAnatLines", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
