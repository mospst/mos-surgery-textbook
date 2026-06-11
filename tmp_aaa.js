// tmp_aaa.js — AAA flagship entry (preserved from original data.jsx)
const AAA_DISEASE = [
{
  id: "aaa", dept: "vascular",
  name: "Abdominal Aortic Aneurysm",
  latin: "Aneurysma aortae abdominalis",
  organ: "Aorta, infrarenal",
  severity: "high",
  tags: ["aneurysm","EVAR","rupture","screening"],
  hero: "Permanent focal dilation of the abdominal aorta ≥3.0 cm or >50% of expected diameter.",
  flagship: true,
  keypoints: [
    "Screening: UK NHS AAA Screening Programme offers one-time USS to all men aged 65",
    "Repair threshold: ≥5.5 cm (men) or ≥5.0 cm (women) or expansion >1 cm/year or symptomatic",
    "EVAR: lower 30-day mortality than open (1.4% vs 4.3%) but higher re-intervention rate",
    "Ruptured AAA: permissive hypotension (SBP 70–90 mmHg) until proximal aortic control",
    "After EVAR: lifelong CT/USS surveillance for endoleak — type II most common, type I most dangerous",
    "AAA screening in women: threshold is 5.0 cm not 5.5 cm (rupture at smaller diameters)"
  ],
  differentials: [
    "Retroperitoneal mass (lymphoma, sarcoma)",
    "Tortuous aorta (not truly aneurysmal)",
    "Renal colic (ruptured AAA classic mimic)",
    "Acute pancreatitis",
    "Musculoskeletal back pain",
    "Aortoenteric fistula (graft patient with GI bleed)"
  ],
  mnemonics: [
    { name: "AAA rupture triad", text: "Hypotension + Back/flank pain + Pulsatile abdominal mass — only 50% present with all three" },
    { name: "EVAR vs Open", text: "EVAR = Early advantage (lower 30-day mortality); Open = long-term durability (equivalent by 8 years, no ongoing surveillance burden)" }
  ],
  overview: {
    definition: "A true aneurysm involving all three layers of the aortic wall, most commonly infrarenal. Defined as aortic diameter ≥3.0 cm or >150% of the expected adjacent normal segment.",
    epidemiology: "Prevalence 4–8% in men >65 yrs; 0.5–1.5% in women. M:F ≈ 4:1. Smoking is the strongest modifiable risk factor (OR ≈ 5). UK NHS AAA screening (men age 65) has reduced AAA-related mortality by 50%.",
    pathophysiology: "Medial degeneration with elastin and collagen breakdown driven by MMP-2/9, chronic inflammation, and oxidative stress. Genetic predisposition (1st-degree relative ↑ risk 2×). Wall stress follows Laplace's law (T = P × r), accelerating expansion as diameter grows.",
    classification: [
      // By anatomical location (determines EVAR eligibility)
      {label:"Infrarenal",             note:"≥10 mm infrarenal neck below renal arteries; ≥85% of all AAAs; suitable for standard EVAR or open repair"},
      {label:"Juxtarenal",             note:"No adequate infrarenal neck; renal arteries involved in proximal seal zone; fenestrated EVAR (FEVAR) or open suprarenal clamp"},
      {label:"Pararenal",              note:"Arises at or involves renal artery origins; complex branched EVAR or open repair required"},
      {label:"Suprarenal / Type IV TAAA", note:"Extends above SMA/coeliac; classified as Type IV thoracoabdominal aortic aneurysm; complex hybrid or open repair"},
      // By presentation (drives urgency)
      {label:"Intact",                 note:"Incidental or surveillance finding; manage by size thresholds and growth rate"},
      {label:"Symptomatic",            note:"Back/flank pain or tenderness without haemodynamic compromise; urgent repair regardless of diameter"},
      {label:"Ruptured",               note:"Haemodynamic compromise ± pulsatile mass; emergency EVAR or open laparotomy; mortality 40–50% in those reaching hospital"},
      // By morphology
      {label:"Fusiform",               note:"Symmetrical circumferential dilatation of full aortic wall; most common type"},
      {label:"Saccular",               note:"Eccentric focal outpouching; higher rupture risk relative to diameter; repair recommended regardless of size"}
    ]
  },
  diagnosis: {
    history: [
      "Often asymptomatic — incidental on imaging or screening",
      "Classic triad of rupture (≈50%): hypotension + back/flank pain + pulsatile abdominal mass",
      "Distal embolisation: 'blue toe' syndrome",
      "Aortocaval fistula: high-output cardiac failure + bruit",
      "Aortoenteric fistula: 'herald' upper GI bleed (post-graft)"
    ],
    examination: [
      "Pulsatile, expansile epigastric mass (sensitivity ↓ with BMI >25)",
      "Auscultate for bruits (renal, iliac, femoral)",
      "Full peripheral pulse exam — document baseline pre-op",
      "Cullen / Grey-Turner signs in late retroperitoneal rupture"
    ],
    investigations: [
      { name: "Bedside USS / FAST", role: "First-line; sensitivity ~99% for diameter, poor for rupture" },
      { name: "CT angiogram", role: "Gold standard — sizing, neck anatomy, EVAR planning" },
      { name: "MRA", role: "Alternative if contrast contraindicated" },
      { name: "FBC, U&E, coag, group & save (×6 if rupture)", role: "Pre-op work-up" }
    ]
  },
  criteria: {
    title: "Diagnostic & repair thresholds (SVS / ESVS 2024)",
    items: [
      { k: "Diagnosis", v: "Infrarenal aortic diameter ≥ 3.0 cm" },
      { k: "Surveillance 3.0–3.9 cm", v: "Annual USS" },
      { k: "Surveillance 4.0–4.9 cm", v: "6-monthly USS" },
      { k: "Surveillance 5.0–5.4 cm", v: "3-monthly USS/CT" },
      { k: "Repair — men", v: "≥ 5.5 cm, expansion > 1.0 cm/yr, or symptomatic" },
      { k: "Repair — women", v: "≥ 5.0 cm (lower wall stress threshold)" },
      { k: "Emergent repair", v: "Any ruptured or symptomatic AAA regardless of size" }
    ]
  },
  scoring: ["glasgow-aneurysm","hardman"],
  management: {
    conservative: [
      "Smoking cessation — single greatest modifiable factor (HR 0.6 for expansion)",
      "Statin therapy regardless of lipids — anti-inflammatory wall effect",
      "BP control to <130/80 mmHg (β-blockade preferred where tolerated)",
      "Aspirin 75 mg OD unless contraindicated",
      "Cardiopulmonary optimisation if planning repair"
    ],
    medical: [
      "No medication shown to halt expansion definitively",
      "Trials of doxycycline (MMP inhibition) — neutral results (N-TA³CT)"
    ],
    surgical: [
      { name: "EVAR", when: "Suitable neck (≥10 mm, <60° angulation, <32 mm), favourable iliacs", notes: "Lower 30-day mortality (1.4% vs 4.3% open) but higher reintervention (EVAR-1, DREAM)" },
      { name: "Open repair", when: "Hostile neck, young fit patients, connective tissue disease", notes: "Durable; equivalent long-term survival to EVAR by 8 years" },
      { name: "F/B-EVAR", when: "Juxta- or suprarenal anatomy in unfit patients", notes: "High-volume aortic centres only" }
    ]
  },
  technique: {
    title: "Open infrarenal AAA repair — transperitoneal approach",
    prep: [
      "GA + epidural; arterial line, CVC, large-bore access ×2, cell-salvage primed",
      "Cross-match 6 units; activate massive transfusion if rupture",
      "Supine, arms out; full abdomen + groins prepped",
      "Pre-op IV antibiotics (cefuroxime + metronidazole)"
    ],
    steps: [
      { n: 1, t: "Midline laparotomy", d: "Xiphoid to pubis. Self-retaining retractor (Omnitract/Bookwalter)." },
      { n: 2, t: "Expose retroperitoneum", d: "Pack small bowel to right; mobilise ligament of Treitz; identify left renal vein." },
      { n: 3, t: "Proximal control", d: "Dissect aortic neck below left renal vein. Avoid lumbar veins. Pass tape." },
      { n: 4, t: "Distal control", d: "Expose both common iliacs. Beware ureters crossing anteriorly." },
      { n: 5, t: "Heparinise", d: "70–100 U/kg IV; ACT >250 sec before clamping." },
      { n: 6, t: "Cross-clamp", d: "Apply distal clamps first then proximal. Watch for hypertension; vasodilate." },
      { n: 7, t: "Open sac & evacuate", d: "Longitudinal aortotomy; remove thrombus; oversew patent lumbars from within." },
      { n: 8, t: "Inlay graft", d: "Dacron tube or bifurcated graft. 3-0 Prolene continuous to healthy aortic cuff." },
      { n: 9, t: "Distal anastomosis", d: "Tube to aortic bifurcation, or limbs to iliacs/femorals as required." },
      { n: 10, t: "Restore flow", d: "Flush; release distal clamp first, then slowly release proximal. Anticipate declamping shock." },
      { n: 11, t: "Haemostasis & closure", d: "Close aneurysm sac over graft; close retroperitoneum; mass closure of abdomen." }
    ],
    pearls: [
      "Always palpate femoral pulses post-declamping",
      "If oliguria post-op, consider colonic ischaemia from IMA sacrifice",
      "Re-implant IMA if poor back-bleeding or compromised SMA"
    ]
  },
  guidelines: [
    { src: "ESVS 2024 — European Society for Vascular Surgery Clinical Practice Guidelines" },
    { src: "SVS 2018 — Society for Vascular Surgery care of the patient with AAA" },
    { src: "NICE NG156 2020 — Abdominal aortic aneurysm: diagnosis and management" }
  ],
  pearls: [
    "Repair threshold in women is 5.0 cm — they rupture at smaller diameters",
    "After EVAR, lifelong CT/USS surveillance mandatory (endoleak)",
    "30-day mortality ruptured AAA reaching theatre ≈ 40% open / 25% EVAR"
  ],
  mistakes: [
    "Failing to consider ruptured AAA in elderly with renal colic-like pain",
    "Aggressive fluid resuscitation in suspected rupture (permissive hypotension SBP 70–90)",
    "Missing aortoenteric fistula in graft patient with GI bleed"
  ]
}
];

if (typeof module !== 'undefined') module.exports = { AAA_DISEASE };
