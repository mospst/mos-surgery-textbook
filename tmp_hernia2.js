// tmp_hernia2.js — Missing hernia disease (1 disease)
// ID: epigastric-hernia

const HERNIA2_DISEASES = [

{
  id: "epigastric-hernia",
  dept: "hernia",
  name: "Epigastric Hernia",
  latin: "Hernia epigastrica",
  organ: "Anterior abdominal wall (linea alba)",
  severity: "minor",
  tags: ["hernia","linea-alba","repair","mesh"],
  hero: "Protrusion through a defect in the linea alba between xiphisternum and umbilicus; most contain pre-peritoneal fat (not peritoneal sac); repair by suture (small) or mesh (≥1 cm or symptomatic recurrence).",
  keypoints: [
    "Epigastric hernias occur through defects in the linea alba above the umbilicus, between the xiphoid and umbilicus",
    "Most contain pre-peritoneal fat only — strangulation risk low; incarcerated omentum more common than bowel strangulation",
    "Small (<1 cm), asymptomatic: may be observed; symptomatic or ≥1 cm defect: repair recommended",
    "Primary suture repair: suitable for small defects (<1 cm) with low recurrence risk; mesh for larger defects",
    "Laparoscopic mesh repair (IPOM): for recurrent, large, or multiple linea alba defects",
    "In obese patients: always consider incisional hernia vs true epigastric hernia (previous surgery history key)"
  ],
  differentials: [
    "Umbilical hernia (at umbilicus, not above)",
    "Incisional hernia (previous surgical scar)",
    "Lipoma of linea alba",
    "Diastasis recti (widening of linea alba — not a true hernia; no peritoneal defect)",
    "Rectus sheath haematoma",
    "Metastatic umbilical/epigastric nodule (Sister Mary Joseph nodule)"
  ],
  mnemonics: [
    { name: "Epigastric vs umbilical hernia", text: "EpigAstric = Above the navel (A for Above); UmbilicAl = At the navel — location determines name" },
    { name: "Diastasis recti distinction", text: "Diastasis: wide central ridge when tensing — but NO fascial defect palpable at edge; diffuse widening not a discrete ring. Epigastric hernia: discrete fascial defect with reducible bulge" }
  ],
  overview: {
    definition: "Hernia through a defect in the linea alba between the xiphoid process and umbilicus. The linea alba is formed by the interdigitation of anterior and posterior rectus sheath aponeuroses. Defects most commonly occur in the upper third of the linea alba where the posterior aponeurotic contributions are thinner.",
    epidemiology: "Prevalence: ~1–5% of population. M:F = 3:1. Peak incidence 20–50 years. Most are small (<1 cm). Multiple epigastric hernias occur in 20% of cases. Risk factors: increased intra-abdominal pressure (obesity, chronic cough, constipation, pregnancy), heavy lifting.",
    pathophysiology: "The linea alba transmits highest tensile forces in the upper portion (wider, less reinforced). Small perforating vessels from the epigastric arteries penetrate the linea alba, creating potential points of weakness. Increased intra-abdominal pressure → pre-peritoneal fat herniates through these points → progressively enlarges → eventually a true peritoneal sac develops. At the hernia ring, strangulation of fat (diverticula cutis) causes pain disproportionate to hernia size.",
    classification: [
      "Pre-peritoneal fat hernia (70–80%) — no true peritoneal sac; pre-peritoneal fat only through fascial defect",
      "True peritoneal sac hernia (20–30%) — peritoneal sac with or without visceral contents (omentum > stomach > small bowel — very rare)",
      "By size: small <1 cm; medium 1–3 cm; large >3 cm"
    ]
  },
  diagnosis: {
    history: [
      "Epigastric lump or bulge between xiphoid and umbilicus",
      "Intermittent epigastric pain, especially after meals or with straining (localised pain from incarcerated fat)",
      "Pain may be severe relative to small hernia size — strangulated pre-peritoneal fat",
      "May be asymptomatic and found incidentally",
      "Symptoms worsening with increased intra-abdominal pressure (coughing, exercise)",
      "Multiple hernias may be present — check entire linea alba"
    ],
    examination: [
      "Palpable lump in midline between xiphoid and umbilicus",
      "May be reducible; tender when strangulated fat is present",
      "Cough impulse: small hernia may only be palpable on straining or Valsalva",
      "Palpate the entire linea alba: multiple defects in 20%",
      "Assess for diastasis recti: ask patient to perform sit-up — widening of central ridge without discrete defect = diastasis (not a true hernia)",
      "Auscultation: bowel sounds over defect if visceral content"
    ],
    investigations: [
      { name: "Clinical diagnosis", role: "Sufficient for typical epigastric hernia with palpable defect and cough impulse" },
      { name: "USS abdomen/linea alba", role: "Useful for small or uncertain hernia; confirms fascial defect, content (fat vs fluid vs viscus), size; assess during Valsalva" },
      { name: "CT abdomen", role: "Obese patient (clinical palpation unreliable); suspicion of incisional vs epigastric hernia; multiple defects; atypical presentation" }
    ]
  },
  criteria: {
    title: "Epigastric Hernia — Indications for Repair",
    items: [
      { k: "Symptomatic (pain, discomfort)", v: "Surgical repair — even small hernia; pain from incarcerated fat disproportionate to size" },
      { k: "Defect ≥1 cm", v: "Repair recommended to prevent enlargement and strangulation" },
      { k: "Irreducible/incarcerated", v: "Urgent repair — non-reducible fat or viscus" },
      { k: "Asymptomatic, small (<1 cm)", v: "Observation acceptable; repair if symptomatic or on patient preference" },
      { k: "Diastasis recti", v: "NOT a true hernia — no mesh repair indicated unless discrete defect; manage conservatively; physiotherapy" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Asymptomatic small epigastric hernia: observation and annual review",
      "Weight loss: reduces intra-abdominal pressure and may improve symptoms",
      "Diastasis recti: physiotherapy (deep abdominal exercises, Pilates); no mesh repair for diastasis alone"
    ],
    medical: [],
    surgical: [
      { name: "Primary suture repair", when: "Small defect ≤1 cm, first occurrence, no obesity, simple anatomy", notes: "Mass closure of fascial defect with interrupted non-absorbable sutures (0-Prolene or 0-Nylon). Vertical or transverse closure of defect. Recurrence rate 10–15% for suture repair alone (higher in obese or multiple defects)." },
      { name: "Open mesh repair (preperitoneal or onlay)", when: "Defect >1 cm, recurrent, obese patient, multiple defects", notes: "Preperitoneal: place flat polypropylene mesh (>3 cm overlap on all sides) in preperitoneal plane — lower recurrence than suture alone. Onlay: mesh placed over primary suture repair above fascia; fixation with sutures/tacks; seroma risk higher than preperitoneal." },
      { name: "Laparoscopic IPOM (intraperitoneal onlay mesh)", when: "Multiple linea alba defects, recurrent hernia, obesity, large defect", notes: "Composite mesh (PTFE/polypropylene with anti-adhesive layer) placed intraperitoneally with minimum 3 cm overlap. Fixed with tacks or sutures. Risk: bowel adhesion to mesh if non-composite; requires anti-adhesive coating." },
      { name: "Laparoscopic eTEP (enhanced-view totally extraperitoneal) or MILOS", when: "Preferred approach for linea alba defects in centres with expertise — avoids intraperitoneal mesh", notes: "Extraperitoneal dissection creates space for retromuscular mesh placement; excellent view of all linea alba defects; avoids intraperitoneal complications." }
    ]
  },
  technique: {
    title: "Open Preperitoneal Mesh Repair for Epigastric Hernia",
    prep: [
      "GA or local anaesthetic (small hernia) + sedation",
      "Mark hernia site pre-operatively with patient supine — hernia may reduce under GA",
      "Prepare lightweight polypropylene mesh (e.g., Prolene soft, Ultrapro) cut to 5 × 5 cm"
    ],
    steps: [
      { n: 1, t: "Incision", d: "Transverse or midline incision directly over defect. Expose linea alba. Identify defect edges circumferentially." },
      { n: 2, t: "Hernia sac assessment", d: "Identify hernia sac/pre-peritoneal fat. Reduce content. If fat necrotic (incarcerated): excise. If peritoneal sac: open, examine contents (reduce or excise), close sac." },
      { n: 3, t: "Create preperitoneal space", d: "Develop preperitoneal plane beyond defect edges — at least 3 cm in all directions using finger/dissector." },
      { n: 4, t: "Mesh placement", d: "Place lightweight mesh flat in preperitoneal space. Ensure >3 cm overlap beyond defect in all directions. Mesh should lie flat without folding." },
      { n: 5, t: "Close fascia over mesh", d: "Suture fascial defect closed over mesh with 0-Prolene interrupted sutures — reduces seroma risk and secures mesh position." },
      { n: 6, t: "Close wound", d: "Subcutaneous closure. Skin closure. No drain required for small hernia repair." }
    ],
    pearls: [
      "Mark the hernia site before GA — it may completely reduce and become impalpable under anaesthesia, making finding the defect difficult",
      "Pre-peritoneal fat — do not excise unless necrotic; simply reduce and reposition; over-enthusiastic excision bleeds",
      "Multiple defects: palpate the entire linea alba under GA — finding and repairing all defects at the same operation",
      "Diastasis recti is NOT repaired with mesh unless there is an associated discrete fascial defect — mesh repair of diastasis alone leads to complications without benefit"
    ]
  },
  guidelines: [
    { src: "EHS Guidelines: Management of epigastric hernias 2021 (HerniaSurge Group)" },
    { src: "HerniaSurge International Guidelines: Primary Abdominal Wall Hernias 2018" },
    { src: "NICE Guideline: Surgical Management of Inguinal and Other Hernias 2018" }
  ],
  pearls: [
    "Pain disproportionate to hernia size is characteristic of epigastric hernia — incarcerated pre-peritoneal fat causes severe localised pain even from a tiny defect",
    "Multiple epigastric defects in 20% — inspect entire linea alba at operation; repair all defects at same procedure",
    "Diastasis recti is not a hernia — patients need to understand this; physiotherapy not surgery is first-line",
    "Recurrence after suture repair alone is 10–15%; mesh repair is recommended for defects >1 cm to reduce recurrence"
  ],
  mistakes: [
    "Repairing diastasis recti as if it were a hernia — diastasis has no discrete fascial defect; mesh repair causes complications without benefit",
    "Not marking the hernia pre-operatively — hernia reduces under GA and becomes impalpable",
    "Missing multiple defects — palpate entire linea alba; 20% have multiple epigastric defects",
    "Suture repair alone for defects >1 cm in obese patients — high recurrence rate; mesh is standard"
  ]
}

]; // end HERNIA2_DISEASES

if (typeof module !== 'undefined') module.exports = { HERNIA2_DISEASES };
