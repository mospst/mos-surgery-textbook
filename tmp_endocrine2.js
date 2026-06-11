// ENDOCRINE BATCH 2 — IDs: phaeochromocytoma, conns, cushings-adrenal, adrenocortical-ca, adrenal-incidentaloma, insulinoma, men1, men2, breast-abscess
const ENDOCRINE_DISEASES_2 = [
{
  id: "phaeochromocytoma",
  dept: "endocrine",
  name: "Phaeochromocytoma",
  latin: "Phaeochromocytoma glandulae suprarenalis",
  organ: "Adrenal",
  severity: "high",
  tags: ["endocrine","adrenal","catecholamines","mne"],
  hero: "Catecholamine-secreting tumour of adrenal medulla. 'Rule of 10s'. Pre-operative alpha-blockade mandatory — failure to do so is potentially fatal.",
  keypoints: [
    "Rule of 10s: 10% malignant, 10% bilateral, 10% extra-adrenal (paraganglioma), 10% familial, 10% in children",
    "Triad: headache + sweating + palpitations (paroxysmal hypertension)",
    "Biochemistry FIRST: 24h urine metadrenalines or plasma metadrenalines",
    "Alpha-block BEFORE beta-block — beta-blockade alone causes paradoxical hypertension",
    "Laparoscopic adrenalectomy preferred for tumours <6cm"
  ],
  differentials: ["Essential hypertension","Anxiety/panic disorder","Hyperthyroidism","Carcinoid","Neuroblastoma (children)","Drug interactions (tyramine, cocaine)"],
  mnemonics: [
    {name:"Rule of 10s", text:"10% bilateral, malignant, extra-adrenal, paediatric, familial"},
    {name:"Pre-op prep order", text:"Alpha FIRST (phenoxybenzamine) → then Beta (atenolol) → then volume replete"}
  ],
  overview: {
    definition: "Catecholamine-secreting neoplasm of chromaffin cells of adrenal medulla (phaeochromocytoma) or extra-adrenal sympathetic ganglia (paraganglioma).",
    epidemiology: "1 in 100,000 per year. Found in 0.1–0.6% of hypertensive patients. Mean age 40–50 yrs. Hereditary in 30–40% (VHL, SDH, RET, NF1, MAX).",
    pathophysiology: "Excess catecholamine secretion (noradrenaline > adrenaline) → α1-mediated vasoconstriction, β1-mediated tachycardia, hyperglycaemia. Paroxysmal crises triggered by manipulation, micturition (bladder paraganglioma), or medications.",
    classification: [
      "Unilateral adrenal (80%)",
      "Bilateral adrenal (10%)",
      "Extra-adrenal paraganglioma (10%): organ of Zuckerkandl, bladder, head/neck",
      "Hereditary syndromes: MEN2A/B (RET), VHL, SDH-B/C/D, NF1"
    ]
  },
  diagnosis: {
    history: [
      "Paroxysmal headache, sweating, palpitations (classic triad in 50%)",
      "Hypertension: sustained (50%) or paroxysmal (50%)",
      "Weight loss, anxiety, hyperglycaemia",
      "Haematuria/micturition-triggered crises (bladder paraganglioma)",
      "Family history of MEN2, VHL, phaeochromocytoma, paraganglioma"
    ],
    examination: [
      "Hypertension (labile, paroxysmal crisis possible during exam)",
      "Pallor (not flushing — contrast with carcinoid)",
      "Tachycardia, sweating, tremor during paroxysm",
      "Café-au-lait spots, neurofibromas (NF1)"
    ],
    investigations: [
      {name:"24-hour urine metadrenalines (metanephrines)", role:"Sensitivity 98%; collect during or after episode; first-line biochemical test"},
      {name:"Plasma metadrenalines (free)", role:"Sensitivity 99%; can be done fasting supine; avoid caffeine/paracetamol interference"},
      {name:"CT adrenal/abdomen", role:"Localise tumour; CT density >10 HU pre-contrast suggests phaeochromocytoma"},
      {name:"MRI adrenal", role:"T2 bright signal ('light bulb' sign); preferred in pregnancy, children, paraganglioma"},
      {name:"MIBG scintigraphy (I-123)", role:"Functional imaging for metastatic or extra-adrenal disease; whole body assessment"},
      {name:"FDG/DOPA-PET", role:"Sensitive for SDH-B paraganglioma and metastatic disease"},
      {name:"Genetic testing", role:"All patients <45 yrs, bilateral, extra-adrenal, or family history"}
    ]
  },
  criteria: {
    title: "Pre-operative Alpha-blockade Protocol",
    items: [
      {k:"Phenoxybenzamine", v:"10mg BD, increasing by 10mg every 2–3 days to 1mg/kg/day for 10–14 days"},
      {k:"Target BP", v:"<130/80mmHg seated; allow mild postural drop (adequate alpha-blockade)"},
      {k:"Beta-blockade", v:"Add atenolol ONLY after adequate alpha-blockade (to prevent reflex tachycardia)"},
      {k:"High-salt diet + fluid intake", v:"Counteract α-blockade-induced volume contraction"},
      {k:"Avoid", v:"Tricyclics, dopamine antagonists, glucocorticoids (can precipitate crisis)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Hereditary phaeochromocytoma in elderly: observe if small and asymptomatic",
      "Malignant/metastatic: MIBG therapy, sunitinib, chemotherapy (CVD regimen)"
    ],
    medical: [
      "Alpha-blockade (phenoxybenzamine or doxazosin) mandatory pre-op × 10–14 days",
      "Beta-blockade (atenolol/propranolol) after alpha established — never before",
      "Hypertensive crisis intraoperatively: IV phentolamine or sodium nitroprusside",
      "Post-excision hypotension: IV fluid + noradrenaline; often dramatic drop in BP"
    ],
    surgical: [
      {name:"Laparoscopic adrenalectomy (transperitoneal/retroperitoneal)", when:"Standard for tumours <6cm; most unilateral phaeochromocytomas", notes:"Minimal tumour manipulation; early ligation of adrenal vein; experienced team; anaesthetic standby for crisis management"},
      {name:"Open adrenalectomy", when:"Large tumours (>6cm), suspected malignancy, paraganglioma with local invasion", notes:"Flank or anterior transperitoneal approach"},
      {name:"Cortical-sparing adrenalectomy", when:"Bilateral phaeochromocytoma (e.g. MEN2A, VHL) — preserve cortex to prevent Addisonian crisis", notes:"Leave ≥30% adrenal cortex; risk of local recurrence acceptable vs. permanent steroid dependence"}
    ]
  },
  technique: {
    title: "Laparoscopic Transperitoneal Adrenalectomy (Right Side)",
    prep: [
      "Confirmed adequate alpha-blockade — BP target met for ≥10 days",
      "Position: lateral decubitus (left lateral for right adrenal), beanbag, table broken",
      "IV phenoxybenzamine available for intraoperative crisis",
      "Anaesthesia: invasive BP monitoring, central line access"
    ],
    steps: [
      {n:1, t:"Port placement", d:"4 ports for right: just below costal margin; camera 5cm below subcostal midclavicular, working ports medially and laterally"},
      {n:2, t:"Liver mobilisation", d:"Divide triangular ligament; retract liver medially to expose IVC/adrenal area"},
      {n:3, t:"Adrenal vein", d:"Identify short right adrenal vein entering IVC; double clip and divide EARLY to prevent catecholamine surge"},
      {n:4, t:"Adrenal dissection", d:"Blunt dissection in avascular plane superior, medial, inferior to adrenal; minimal grasping of gland"},
      {n:5, t:"Specimen retrieval", d:"Place in endobag; remove via largest port (enlarge if needed); avoid spillage (risk of implantation if malignant)"},
      {n:6, t:"Haemostasis", d:"Inspect adrenal bed; left adrenal vein (drains to left renal vein) — handle similarly on left side"}
    ],
    pearls: [
      "Ligate adrenal vein early — reduces catecholamine surge during dissection",
      "Avoid squeezing/manipulating tumour — can provoke crisis",
      "Post-excision: dramatic BP drop expected — volume loading and noradrenaline standby"
    ]
  },
  guidelines: [
    {src:"Endocrine Society Clinical Practice Guideline 2014: Phaeochromocytoma/Paraganglioma"},
    {src:"European Society of Endocrinology 2020: Clinical practice guidelines"},
    {src:"ENETS 2016: Phaeochromocytoma and paraganglioma"}
  ],
  pearls: [
    "NEVER beta-block first — unopposed alpha leads to severe hypertensive crisis",
    "Post-adrenalectomy hypoglycaemia: loss of catecholamine-mediated glycogenolysis — monitor glucose",
    "Screen all phaeochromocytoma for hereditary syndrome regardless of family history — 30–40% genetic"
  ],
  mistakes: [
    "Starting beta-blockade before alpha-blockade — paradoxical hypertensive crisis",
    "Not performing biochemical confirmation before imaging-guided intervention",
    "Not warning anaesthetics team about diagnosis — uncontrolled intraoperative crisis"
  ]
},
{
  id: "conns",
  dept: "endocrine",
  name: "Conn's Syndrome",
  latin: "Hyperaldosteronismus primarius",
  organ: "Adrenal",
  severity: "moderate",
  tags: ["endocrine","adrenal","hypertension","aldosterone"],
  hero: "Primary aldosteronism is the most common surgically correctable cause of hypertension. Adrenal vein sampling mandatory before unilateral adrenalectomy.",
  keypoints: [
    "Hypertension + hypokalaemia + suppressed renin → measure aldosterone:renin ratio",
    "Screen: ARR >30 (aldosterone pg/mL / renin ng/mL/hr) with aldosterone >15ng/dL",
    "CT adrenal: tumour (adenoma) vs bilateral hyperplasia",
    "Adrenal vein sampling (AVS): mandatory to lateralise before surgery — CT alone misleading",
    "Unilateral adrenalectomy curative if lateralised unilateral adenoma"
  ],
  differentials: ["Essential hypertension","Secondary hyperaldosteronism (renal artery stenosis, CCF)","Cushing syndrome","Licorice ingestion","Liddle syndrome"],
  mnemonics: [
    {name:"Conn's triad", text:"Hypertension + Hypokalaemia + Suppressed renin (3H: HBP + HypoK + Hyporenin)"}
  ],
  overview: {
    definition: "Autonomous aldosterone overproduction independent of renin-angiotensin system, causing sodium retention, hypertension, and hypokalaemia.",
    epidemiology: "5–10% of hypertensive patients; 20% of resistant hypertension. Aldosterone-producing adenoma (APA) 35%, bilateral adrenal hyperplasia (BAH) 65%.",
    pathophysiology: "Autonomous aldosterone → ENaC activation → Na⁺ retention + K⁺/H⁺ excretion → volume expansion → hypertension + hypokalaemia + metabolic alkalosis.",
    classification: [
      "Unilateral aldosterone-producing adenoma (APA) — Conn's adenoma",
      "Bilateral adrenal hyperplasia (BAH / idiopathic hyperaldosteronism)",
      "Unilateral adrenal hyperplasia (rare)",
      "Aldosterone-producing adrenocortical carcinoma (very rare)",
      "Familial hyperaldosteronism types I–IV (glucocorticoid-remediable)"
    ]
  },
  diagnosis: {
    history: [
      "Resistant hypertension on ≥3 antihypertensives",
      "Hypokalaemia (may be asymptomatic or muscle weakness, cramps, polyuria)",
      "Young-onset hypertension",
      "Hypertension + adrenal incidentaloma",
      "Family history of early hypertension or PA"
    ],
    examination: [
      "Hypertension (often severe, resistant)",
      "Usually no distinctive signs",
      "Proximal muscle weakness if severe hypokalaemia"
    ],
    investigations: [
      {name:"Aldosterone:renin ratio (ARR)", role:"Screening: ARR >30 (some centres >50) + aldosterone >15ng/dL while on ARR-safe antihypertensive (amlodipine, doxazosin)"},
      {name:"Confirmatory testing", role:"Oral sodium loading test, fludrocortisone suppression, saline infusion test — confirm non-suppressible aldosterone"},
      {name:"CT adrenal (thin-slice)", role:"Identify adenoma (lipid-rich: <10HU) vs bilateral hyperplasia; often misleading — cannot replace AVS"},
      {name:"Adrenal vein sampling (AVS)", role:"Gold standard lateralisation: selectivity index >2 (success); lateralisation index >4 = unilateral; ACTH stimulation improves accuracy"},
      {name:"NP-59 scintigraphy", role:"Alternative to AVS if not available; less sensitive"}
    ]
  },
  criteria: {
    title: "Adrenal Vein Sampling (AVS) Interpretation",
    items: [
      {k:"Selectivity index", v:"Adrenal vein cortisol / IVC cortisol >2 (or >3 with ACTH) = successful cannulation"},
      {k:"Lateralisation index", v:"Higher side aldosterone:cortisol / lower side aldosterone:cortisol >4 = unilateral disease"},
      {k:"Contralateral suppression", v:"Suppressed side <1 = unilateral; bilateral elevation = BAH"},
      {k:"BAH diagnosis", v:"Lateralisation index <3 = bilateral hyperplasia → treat with spironolactone, NOT surgery"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "BAH: lifelong spironolactone (MRA) ± amiloride; target BP <130/80mmHg",
      "Post-adrenalectomy: antihypertensives often still needed (fixed hypertension in long-standing disease)"
    ],
    medical: [
      "Spironolactone 25–100mg daily (MRA of choice); side effects: gynaecomastia, impotence",
      "Eplerenone (selective MRA): fewer side effects but less effective",
      "Amiloride: potassium-sparing diuretic; second-line",
      "Potassium supplementation if hypokalaemic"
    ],
    surgical: [
      {name:"Laparoscopic unilateral adrenalectomy", when:"Confirmed unilateral disease on AVS; adenoma or unilateral hyperplasia", notes:"90% cure of hypokalaemia; 50% cure of hypertension (rest improved); stop spironolactone 2 weeks pre-op to unmask BP response"},
      {name:"Open adrenalectomy", when:"Suspected malignancy (large, irregular), adrenocortical carcinoma", notes:"Rarely needed for Conn's adenoma"}
    ]
  },
  technique: {
    title: "Laparoscopic Retroperitoneoscopic Adrenalectomy",
    prep: [
      "Correct hypokalaemia pre-op with spironolactone/potassium",
      "Optimise blood pressure",
      "Position: prone or lateral decubitus; retroperitoneal approach avoids bowel"
    ],
    steps: [
      {n:1, t:"Port placement (retroperitoneal)", d:"Lateral decubitus; initial port below 12th rib; balloon dissection creates retroperitoneal space; 2–3 further ports"},
      {n:2, t:"Identify adrenal", d:"Fat-encased adrenal identified by yellow colour and lobulated surface"},
      {n:3, t:"Adrenal vein", d:"Identify and clip adrenal vein (left: longer, to left renal vein; right: short, direct IVC entry)"},
      {n:4, t:"Blunt dissection", d:"Develop plane between adrenal and kidney superiorly; take all periglandular fat with adenoma"},
      {n:5, t:"Haemostasis and removal", d:"Retrieve in bag; check haemostasis; close ports"}
    ],
    pearls: [
      "Retroperitoneoscopic approach: less ileus, faster recovery — preferred by many high-volume centres",
      "Transperitoneal approach: better orientation for beginners, easier for large lesions",
      "Normalisation of BP may take 6–12 months post-adrenalectomy"
    ]
  },
  guidelines: [
    {src:"Endocrine Society Clinical Practice Guideline 2016: Primary Aldosteronism"},
    {src:"NICE: Secondary hypertension investigation"},
    {src:"AACE/ACE Algorithm for Adrenal Incidentaloma 2019"}
  ],
  pearls: [
    "ARR screening requires stopping spironolactone, amiloride, eplerenone ≥4 weeks before",
    "AVS failure rate 20–30% — ensure operator experienced (>25/year); ACTH stimulation helps",
    "Young patient (<35) with unilateral APA and typical appearance: AVS may be omitted per some guidelines"
  ],
  mistakes: [
    "Operating without AVS — 30–40% of CT-apparent adenomas are bilateral disease",
    "Starting beta-blocker or ACE inhibitor during workup — suppresses renin, skews ARR",
    "Not checking ARR while patient on spironolactone — will always be abnormal"
  ]
},
{
  id: "cushings-adrenal",
  dept: "endocrine",
  name: "Cushing's Syndrome (Adrenal)",
  latin: "Syndroma Cushingi suprarenale",
  organ: "Adrenal",
  severity: "moderate",
  tags: ["endocrine","adrenal","cortisol","cushing"],
  hero: "ACTH-independent hypercortisolism from adrenal adenoma or carcinoma. Adrenal Cushing's: unilateral adrenalectomy curative. Pre-op steroid coverage essential.",
  keypoints: [
    "Classify ACTH-dependent vs ACTH-independent first",
    "ACTH-independent = adrenal cause (adenoma, carcinoma, bilateral hyperplasia)",
    "Low-dose dexamethasone suppression test + ACTH level = initial screen",
    "Adrenal adenoma: laparoscopic adrenalectomy curative",
    "Bilateral adrenal hyperplasia: bilateral adrenalectomy + lifelong steroid replacement"
  ],
  differentials: ["Pituitary Cushing's (Cushing disease)","Ectopic ACTH (small cell, carcinoid)","Pseudo-Cushing's (alcoholism, depression)","Adrenocortical carcinoma","Exogenous steroid use"],
  mnemonics: [
    {name:"Cushing features", text:"BUFFALO HUMP: Buffalo hump + Urinary cortisol raised + Fatigue + Fat redistribution + Acne + Loss of libido + Osteoporosis + Hypertension + Ulcers (peptic) + Myopathy + Purple striae"}
  ],
  overview: {
    definition: "Chronic hypercortisolism causing metabolic, cardiovascular, psychiatric and cutaneous effects. Adrenal Cushing's = ACTH-independent autonomous cortisol overproduction.",
    epidemiology: "Cushing syndrome incidence 2–3/million/year. Adrenal cause in 20–30% (excluding iatrogenic). Adrenal adenoma most common adrenal cause.",
    pathophysiology: "Autonomous cortisol → bilateral adrenocortical atrophy, suppressed ACTH. Excess glucocorticoid → hyperglycaemia, centripetal fat deposition, protein catabolism, immune suppression, osteoporosis.",
    classification: [
      "ACTH-dependent (80%): pituitary Cushing's disease, ectopic ACTH",
      "ACTH-independent (20%): adrenal adenoma, adrenocortical carcinoma, bilateral hyperplasia (PPNAD, ACTH-independent macronodular hyperplasia)"
    ]
  },
  diagnosis: {
    history: [
      "Weight gain (centripetal), moon face, buffalo hump",
      "Proximal muscle weakness, easy bruising, thin skin, poor wound healing",
      "Purple striae, acne, hirsutism (in women)",
      "Menstrual irregularity, reduced libido",
      "Diabetes, hypertension, depression, insomnia",
      "Exogenous steroid use (most common cause of Cushingoid features)"
    ],
    examination: [
      "Moon face, plethora",
      "Buffalo hump, supraclavicular fat pads",
      "Central obesity, thin limbs (muscle wasting)",
      "Purple striae (>1cm wide — pathological)",
      "Proximal myopathy, easy bruising",
      "Hypertension, glucose intolerance"
    ],
    investigations: [
      {name:"24h urinary free cortisol (UFC)", role:"Elevated in Cushing's (>3× upper limit); simple screen; repeat × 3"},
      {name:"Late-night salivary cortisol (×2)", role:"Loss of diurnal cortisol rhythm; sensitive screen"},
      {name:"1mg overnight dexamethasone suppression test", role:"Failure to suppress cortisol <50nmol/L = screen positive"},
      {name:"Plasma ACTH", role:"Low (<10pg/mL) in adrenal Cushing's; elevated in ACTH-dependent"},
      {name:"CT adrenal", role:"Adenoma (<6cm, lipid-rich), carcinoma (>6cm, heterogeneous, calcification), bilateral nodularity"},
      {name:"MRI pituitary", role:"If ACTH-dependent: identify pituitary microadenoma (Cushing disease)"},
      {name:"Bilateral inferior petrosal sinus sampling (BIPSS)", role:"If ACTH elevated but pituitary MRI negative — differentiates pituitary from ectopic ACTH source"}
    ]
  },
  criteria: {
    title: "Localisation Summary",
    items: [
      {k:"ACTH <10 + adrenal lesion on CT", v:"Adrenal Cushing's → adrenalectomy"},
      {k:"ACTH elevated + pituitary lesion", v:"Cushing disease → transsphenoidal surgery"},
      {k:"ACTH elevated + no pituitary lesion", v:"Ectopic ACTH → chest/abdo CT for source"},
      {k:"Bilateral adrenal nodularity + ACTH low", v:"PPNAD or AIMAH → bilateral adrenalectomy"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Pre-op metyrapone or ketoconazole to reduce cortisol and improve wound healing",
      "Treat complications: antihypertensives, anticoagulation (high VTE risk), antidiabetic therapy",
      "Post-op steroid cover: contralateral adrenal suppressed — prolonged steroid replacement"
    ],
    medical: [
      "Metyrapone (11β-hydroxylase inhibitor): rapid cortisol reduction pre-op or palliative",
      "Ketoconazole: antifungal with adrenal steroidogenesis inhibition",
      "Mifepristone (glucocorticoid receptor antagonist): for inoperable/metastatic",
      "Osilodrostat or pasireotide (LAR): Cushing disease"
    ],
    surgical: [
      {name:"Laparoscopic unilateral adrenalectomy", when:"Adrenal adenoma — definitive treatment; normalises cortisol in >90%", notes:"Pre-op hydrocortisone cover; post-op continuation for 6–18 months until contralateral axis recovers"},
      {name:"Bilateral laparoscopic adrenalectomy", when:"Bilateral Cushing's (PPNAD, AIMAH), failed pituitary surgery, ectopic ACTH unresectable", notes:"Permanent Addisonian — lifelong hydrocortisone + fludrocortisone; risk of Nelson syndrome (pituitary tumour growth) post-bilat adrenalectomy"},
      {name:"Open adrenalectomy", when:"Suspected adrenocortical carcinoma — size >6cm, malignant features", notes:"Do not rupture capsule; retroperitoneal LN dissection; avoid laparoscopic if malignant"}
    ]
  },
  technique: {
    title: "Post-operative Steroid Management After Unilateral Adrenalectomy for Cushing's",
    prep: [
      "Give hydrocortisone 100mg IV at induction",
      "Contralateral adrenal suppressed — requires post-op replacement"
    ],
    steps: [
      {n:1, t:"Day 0–1", d:"Hydrocortisone 100mg IV TDS; convert to oral when tolerating diet"},
      {n:2, t:"Day 1–3", d:"Hydrocortisone 20mg AM + 10mg PM (physiological replacement)"},
      {n:3, t:"Weeks 2–6", d:"Taper by 5mg/month to maintenance dose of 10mg AM + 5mg PM"},
      {n:4, t:"Recovery", d:"SST (synacthen stimulation test) at 6-monthly intervals; stop replacement when morning cortisol >500nmol/L post-stimulation"},
      {n:5, t:"Patient education", d:"Sick day rules: double dose for illness/surgery; medic alert bracelet; IM hydrocortisone kit"}
    ],
    pearls: [
      "Recovery of HPA axis: 6–24 months post-adrenalectomy for Cushing's adenoma",
      "Nelson syndrome: after bilateral adrenalectomy — pituitary ACTH adenoma enlarges (loss of cortisol feedback); MRI surveillance annually"
    ]
  },
  guidelines: [
    {src:"Endocrine Society Clinical Practice Guideline 2015: Diagnosis and treatment of Cushing's"},
    {src:"ENSAT/AAES Guidelines 2022: Adrenal Cushing's"},
    {src:"NICE NG73: Cushing's syndrome"}
  ],
  pearls: [
    "High VTE risk in Cushing's — prophylactic anticoagulation extended post-op",
    "Wound healing impaired — conservative wound management; steroids slow healing",
    "Nelson syndrome risk after bilateral adrenalectomy for Cushing disease — annual pituitary MRI"
  ],
  mistakes: [
    "Not giving steroid cover perioperatively — Addisonian crisis post-adrenalectomy",
    "Laparoscopic adrenalectomy for suspected ACC — risk of incomplete excision and port-site implantation",
    "Not testing for Cushing's in all adrenal incidentalomas — autonomous cortisol secretion in 30% of incidentalomas"
  ]
},
{
  id: "adrenocortical-ca",
  dept: "endocrine",
  name: "Adrenocortical Carcinoma",
  latin: "Carcinoma corticis glandulae suprarenalis",
  organ: "Adrenal",
  severity: "high",
  tags: ["oncology","adrenal","rare"],
  hero: "Rare but aggressive malignancy. Complete resection (R0) is the only potentially curative treatment. Avoid laparoscopic approach for large/malignant lesions.",
  keypoints: [
    "Any adrenal mass >4cm suspicious; >6cm high malignancy risk",
    "50% functional (Cushing's, virilisation, mixed); 50% non-functional (local mass effects)",
    "CT malignant features: >6cm, irregular, heterogeneous, >10HU, calcification",
    "Open adrenalectomy with en-bloc resection — laparoscopy contraindicated for suspected ACC",
    "Mitotane (adrenolytic) adjuvant/palliative; poor chemotherapy response"
  ],
  differentials: ["Adrenal adenoma","Phaeochromocytoma","Adrenal metastasis","Myelolipoma","Adrenal haematoma","Neuroblastoma (children)"],
  mnemonics: [
    {name:"Weiss Criteria malignancy", text:"≥3 of: High mitotic rate + Atypical mitoses + Venous invasion + Capsular invasion + Necrosis + Diffuse architecture + Low % clear cells + Nuclear pleomorphism + Sinusoidal invasion"}
  ],
  overview: {
    definition: "Malignant tumour of adrenocortical cells. Bimodal age distribution: children <5 and adults 40–50 yrs. Often large at presentation.",
    epidemiology: "1–2/million/year. 60% women. Associated with Li-Fraumeni (TP53), MEN1, Lynch, Beckwith-Wiedemann syndrome.",
    pathophysiology: "TP53 mutations most common. IGF-2 overexpression, chromosomal losses. Functional tumours: excess cortisol, androgens, or mixed.",
    classification: [
      "ENSAT Staging: I (<5cm confined), II (>5cm confined), III (local invasion/N+), IV (distant metastasis)",
      "Functional vs non-functional",
      "Paediatric: usually virilising (androgens)"
    ]
  },
  diagnosis: {
    history: [
      "Rapid weight gain, cushingoid features (50% functional)",
      "Virilisation in women (hirsutism, deepened voice, clitoromegaly)",
      "Flank/back pain, abdominal mass (non-functional — presents late)",
      "Incidentaloma worked up revealing ACC"
    ],
    examination: [
      "Cushingoid features or virilisation",
      "Palpable abdominal/flank mass (large tumours)",
      "Hypertension, glucose intolerance"
    ],
    investigations: [
      {name:"Hormonal workup", role:"24h UFC, dexamethasone suppression, DHEAS, testosterone, 17-OH-progesterone, aldosterone:renin, urine metadrenalines"},
      {name:"CT adrenal (thin-slice, 3-phase)", role:"Size, density (>10HU pre-contrast), washout <40% at 15min, irregular/heterogeneous margins"},
      {name:"MRI adrenal", role:"Chemical shift imaging — loss of signal on opposed phase = lipid-rich adenoma; no signal loss = ACC/metastasis"},
      {name:"PET-FDG", role:"High FDG uptake in ACC; excludes metastases; cannot use MIBG (not chromaffin cells)"},
      {name:"CT chest/abdomen/pelvis", role:"Staging — lung (most common metastatic site), liver, peritoneum"}
    ]
  },
  criteria: {
    title: "ENSAT Staging",
    items: [
      {k:"Stage I", v:"T1 (≤5cm), N0, M0"},
      {k:"Stage II", v:"T2 (>5cm), N0, M0"},
      {k:"Stage III", v:"T3–4 (local invasion) or N1, M0"},
      {k:"Stage IV", v:"M1 (distant metastases)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Multidisciplinary endocrine tumour board review mandatory",
      "Mitotane surveillance levels: therapeutic range 14–20mg/L",
      "Advanced ACC: clinical trial participation recommended"
    ],
    medical: [
      "Adjuvant mitotane: recommended for R0 resection, Ki67>10%, stage III/IV (FIRM-ACT evidence)",
      "Mitotane side effects: adrenal insufficiency (must replace steroids), GI toxicity, hepatotoxicity",
      "EDP-M (etoposide+doxorubicin+cisplatin + mitotane): first-line systemic for advanced ACC",
      "Lurbinectedin/pembrolizumab: emerging therapies for refractory ACC"
    ],
    surgical: [
      {name:"Open radical adrenalectomy", when:"ACC — mandatory open approach for tumours >6cm or with malignant features", notes:"Anterior transperitoneal or thoraco-abdominal; en-bloc resection of adrenal + periadrenal fat ± ipsilateral kidney/liver segment if invaded"},
      {name:"Laparoscopic approach", when:"Contraindicated for suspected ACC — risk of incomplete resection, capsule rupture, positive margins, peritoneal implantation", notes:"If incidental ACC found on laparoscopic specimen: completion open re-resection of adrenal bed recommended"},
      {name:"Debulking/resection of metastases", when:"Selected patients with complete debulking possible; liver metastases; response to mitotane", notes:"Prolonged disease-free survival in some series"}
    ]
  },
  technique: {
    title: "Open Radical Adrenalectomy (Right-sided ACC)",
    prep: [
      "Functional tumour: pre-op steroid coverage for cortisol-secreting",
      "Position: supine; large anterior midline or bilateral subcostal incision",
      "Anaesthesia: central venous access, invasive monitoring"
    ],
    steps: [
      {n:1, t:"Incision", d:"Bilateral subcostal (chevron) or midline laparotomy for large ACC"},
      {n:2, t:"Right colon and duodenum mobilisation", d:"Kocherize duodenum and right colon to expose retroperitoneum and IVC"},
      {n:3, t:"IVC control", d:"Identify tumour-IVC relationship; control IVC proximal and distal if tumour thrombus present"},
      {n:4, t:"Adrenal vein", d:"Ligate right adrenal vein at IVC origin under direct vision"},
      {n:5, t:"En-bloc resection", d:"Excise adrenal with periadrenal fat; take adjacent structures if invaded (kidney, hepatic segment); avoid capsule breach"},
      {n:6, t:"Lymphadenectomy", d:"Remove ipsilateral lymph nodes along IVC/aorta — improves staging"}
    ],
    pearls: [
      "IVC tumour thrombus (right-sided ACC): may require IVC clamping or cardiopulmonary bypass for level III/IV thrombus",
      "Never biopsy adrenal mass pre-op if ACC suspected — risk of seeding; confirm diagnosis on excision specimen",
      "Pathology: Weiss score ≥3 = ACC"
    ]
  },
  guidelines: [
    {src:"ENSAT 2023: Adrenocortical carcinoma guidelines"},
    {src:"Fassnacht et al. ESMO Guidelines 2018: ACC"},
    {src:"AACE 2019: Adrenal incidentaloma guideline"}
  ],
  pearls: [
    "Never laparoscope suspected ACC — capsule rupture = upstaging and worse outcome",
    "Mitotane causes adrenal insufficiency — patients need 2–3× normal hydrocortisone dose",
    "Paediatric ACC: virilising, often localized — resection has better prognosis than adult"
  ],
  mistakes: [
    "Laparoscopic approach for large (>6cm) adrenal mass without excluding malignancy",
    "Pre-operative biopsy of suspected ACC — seeding and unnecessary morbidity",
    "Forgetting steroid replacement in mitotane-treated patients"
  ]
},
{
  id: "adrenal-incidentaloma",
  dept: "endocrine",
  name: "Adrenal Incidentaloma",
  latin: "Incidentaloma glandulae suprarenalis",
  organ: "Adrenal",
  severity: "low",
  tags: ["endocrine","adrenal","incidental","imaging"],
  hero: "Adrenal mass found incidentally. Framework: exclude malignancy and exclude hormone excess. Most are benign non-functioning adenomas requiring surveillance only.",
  keypoints: [
    "Found in 4–5% of abdominal CT scans",
    "Evaluate ALL for: (1) malignancy risk (size/imaging) and (2) hormonal function",
    "CT density <10HU (Hounsfield units) = lipid-rich adenoma = benign",
    "Exclude phaeochromocytoma FIRST before biopsy or surgery",
    "Surgery if >4cm, or malignant features, or hormonal excess (except sub-clinical Cushing's — controversial)"
  ],
  differentials: ["Adrenal adenoma (non-functioning)","Phaeochromocytoma","Adrenocortical carcinoma","Adrenal metastasis","Myelolipoma","Adrenal cyst","Haematoma","Ganglioneuroma"],
  mnemonics: [
    {name:"Incidentaloma workup", text:"CAMP: Cortisol (1mg DST) + Aldosterone:renin ratio + Metadrenalines (urine/plasma) + Pheo excluded before proceeding"}
  ],
  overview: {
    definition: "Adrenal mass ≥1cm discovered incidentally on imaging performed for a non-adrenal indication.",
    epidemiology: "Prevalence 4–7% on CT; increases with age. 80% benign non-functioning adenomas. 5% phaeochromocytoma, 5% ACC, 2% metastasis.",
    pathophysiology: "Increased imaging leads to more incidental discovery. Most adenomas are lipid-rich (cholesterol-rich cells). HU <10 on unenhanced CT = high specificity for benign adenoma.",
    classification: [
      "Non-functioning adenoma (most common)",
      "Subclinical Cushing's/autonomous cortisol secretion (30%)",
      "Phaeochromocytoma",
      "Primary aldosteronism (Conn's)",
      "ACC",
      "Metastasis (lung, breast, colorectal most common)"
    ]
  },
  diagnosis: {
    history: [
      "Incidental finding — often no symptoms attributable to adrenal",
      "Ask: symptoms of Cushing's, hypertension (aldosteronoma), palpitations/headache/sweating (phaeochromocytoma)",
      "Known malignancy (metastasis risk)",
      "Family history MEN, PHPT, phaeochromocytoma"
    ],
    examination: [
      "Blood pressure (hypertension suggests hormonal tumour)",
      "Clinical features of Cushing's, virilisation",
      "Signs of primary malignancy (lymphadenopathy, lung mass)"
    ],
    investigations: [
      {name:"Unenhanced CT adrenal density", role:"<10HU = lipid-rich adenoma (benign); >10HU requires further characterisation"},
      {name:"CT washout (15-min delayed)", role:"Absolute washout >60% = adenoma; <40% = malignant/phaeochromocytoma"},
      {name:"MRI chemical shift", role:"Loss of signal on opposed phase = adenoma; persistent signal = malignancy/phaeochromocytoma"},
      {name:"1mg overnight dexamethasone suppression", role:"All incidentalomas; cortisol >50nmol/L = autonomous cortisol secretion"},
      {name:"Urine/plasma metadrenalines", role:"All incidentalomas; exclude phaeochromocytoma before any intervention"},
      {name:"Aldosterone:renin ratio", role:"If hypertensive or hypokalaemic"},
      {name:"PET-FDG", role:"Known malignancy: high uptake = metastasis (high sensitivity/specificity)"},
      {name:"Biopsy (CT-guided)", role:"ONLY after phaeochromocytoma excluded; only if histology will change management (e.g. known primary cancer)"}
    ]
  },
  criteria: {
    title: "ESE/ENSAT 2023 Management Algorithm",
    items: [
      {k:"≤4cm, <10HU, no hormone excess", v:"No further imaging needed; annual cortisol screen × 5 years"},
      {k:">4cm or >10HU or growth >0.8cm/yr", v:"Discuss surgery"},
      {k:"Any size with malignant features", v:"Surgery (open if suspected ACC)"},
      {k:"Phaeochromocytoma (any size)", v:"Surgery after alpha-blockade"},
      {k:"Aldosteronoma + confirmed lateralisation", v:"Laparoscopic adrenalectomy"},
      {k:"Subclinical Cushing's + complications", v:"Consider surgery (controversial)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Most adenomas <4cm with no hormone excess: follow-up CT at 12 months; hormone workup annually",
      "Stable at 12 months with benign features: discharge from follow-up per ESE 2023 guideline (previous guideline required 5-year follow-up)"
    ],
    medical: [
      "Treat associated complications: hypertension, diabetes, osteoporosis (autonomous cortisol)"
    ],
    surgical: [
      {name:"Laparoscopic adrenalectomy", when:">4cm or growing; phaeochromocytoma (after alpha-blockade); aldosteronoma (after AVS); functioning Cushing's adenoma", notes:"Retroperitoneal or transperitoneal; minimally invasive for benign lesions"},
      {name:"Open adrenalectomy", when:"Suspected ACC (>6cm, malignant features)", notes:"Never laparoscope suspected ACC"}
    ]
  },
  technique: {
    title: "CT-guided Adrenal Biopsy (when indicated)",
    prep: [
      "Phaeochromocytoma MUST be excluded biochemically before biopsy",
      "Check coagulation; correct anticoagulation",
      "Prone or lateral position"
    ],
    steps: [
      {n:1, t:"CT guidance", d:"Plan approach — posterior retroperitoneal approach preferred; avoid transgressing organs"},
      {n:2, t:"Local anaesthesia", d:"Infiltrate skin and track"},
      {n:3, t:"Core needle biopsy", d:"18G core needle; 2–3 passes"},
      {n:4, t:"Post-biopsy CT", d:"Check for haematoma, pneumothorax"},
      {n:5, t:"Monitor", d:"4-hour observation; monitor BP (phaeochromocytoma crisis despite exclusion — rare but possible"}
    ],
    pearls: [
      "Biopsy cannot distinguish adrenal adenoma from well-differentiated ACC — Weiss criteria require surgical specimen",
      "Biopsy useful for: confirming adrenal metastasis in known cancer; lymphoma diagnosis"
    ]
  },
  guidelines: [
    {src:"ESE/ENSAT Clinical Practice Guideline 2023: Adrenal Incidentaloma"},
    {src:"AACE/AAES 2019: Algorithm for management of adrenal incidentaloma"},
    {src:"NICE: Adrenal incidentaloma guidance"}
  ],
  pearls: [
    "HU <10 on unenhanced CT is highly specific for benign adenoma — no further workup if no hormone excess",
    "Metadrenalines must be normal before biopsy — phaeochromocytoma biopsy causes hypertensive crisis",
    "ESE 2023: most incidentalomas can be discharged after 1-year stable follow-up if benign features"
  ],
  mistakes: [
    "Biopsying before excluding phaeochromocytoma — catastrophic hypertensive crisis",
    "Unnecessary long-term follow-up for clear benign adenoma — ESE 2023 simplifies algorithm",
    "Laparoscopy for large (>6cm) malignant-appearing lesion — risk of incomplete resection"
  ]
},
{
  id: "insulinoma",
  dept: "endocrine",
  name: "Insulinoma",
  latin: "Insulinoma pancreatis",
  organ: "Pancreas",
  severity: "moderate",
  tags: ["endocrine","pancreas","neuroendocrine","hypoglycaemia"],
  hero: "Most common functioning pancreatic NET. Whipple's triad: hypoglycaemic symptoms + glucose <2.5mmol/L + relief with glucose. 90% benign, 90% solitary, 90% within pancreas.",
  keypoints: [
    "Whipple's triad: symptoms + BG <2.5mmol/L + relief with glucose administration",
    "72-hour supervised fast: gold standard diagnostic",
    "90% benign, 90% solitary, 10% MEN1 (multiple, malignant more common)",
    "Localise with EUS (most sensitive) + CT/MRI; intraoperative US essential",
    "Enucleation if superficial; distal pancreatectomy if body/tail; Whipple if head adherent to duct"
  ],
  differentials: ["Reactive hypoglycaemia","Factitious hypoglycaemia (exogenous insulin/sulphonylureas)","Non-islet cell tumour hypoglycaemia","Adrenal insufficiency","Hepatic failure","MEN1 (multiple insulinomas)"],
  mnemonics: [
    {name:"Whipple's Triad", text:"Symptoms of hypoglycaemia + BG <2.5mmol/L + Relief with glucose"},
    {name:"Rule of 90s", text:"90% benign + 90% solitary + 90% intrapancreatic + 90% <2cm"}
  ],
  overview: {
    definition: "Neoplasm of insulin-secreting β-cells of the pancreatic islets causing autonomous insulin overproduction and fasting hypoglycaemia.",
    epidemiology: "1–4/million/year. Most common functional pancreatic NET. Peak age 40–60 yrs. MEN1 in 10% (usually multiple, recurrent).",
    pathophysiology: "Autonomous insulin secretion independent of glucose → fasting hypoglycaemia; counter-regulatory hormones impaired. Brain glucose-dependent: neuroglycopenic symptoms predominate.",
    classification: [
      "Sporadic (90%): single, benign, <2cm",
      "MEN1-associated (10%): multiple, often malignant",
      "Malignant insulinoma (<10%): lymph node or distant metastases"
    ]
  },
  diagnosis: {
    history: [
      "Neuroglycopenic: confusion, diplopia, personality change, seizures, coma",
      "Adrenergic: sweating, tremor, palpitations, hunger",
      "Symptoms relieved by eating or glucose — patients may gain weight",
      "Symptoms worse with fasting, exercise, morning",
      "Family history MEN1 (parathyroid tumours, pituitary adenomas)"
    ],
    examination: [
      "Often normal interictally",
      "During attack: confusion, focal neurology, diaphoresis",
      "Obesity (compensatory eating)"
    ],
    investigations: [
      {name:"72-hour supervised fast", role:"Gold standard: document BG, insulin, C-peptide, proinsulin, β-hydroxybutyrate at hypoglycaemia onset; terminate when BG <2.2mmol/L with symptoms"},
      {name:"Insulin:glucose ratio during hypoglycaemia", role:"Insulin >3μU/mL with BG <2.5mmol/L = inappropriate insulin = insulinoma or exogenous insulin"},
      {name:"C-peptide", role:"Elevated with BG <2.5 = endogenous insulin (insulinoma or sulphonylurea); absent = exogenous insulin"},
      {name:"Sulphonylurea screen (urine/plasma)", role:"Exclude factitious hypoglycaemia"},
      {name:"EUS (endoscopic US)", role:"Most sensitive (>90%) for small intrapancreatic tumours; localises body/tail lesions"},
      {name:"CT pancreas (triple-phase)", role:"Pancreatic protocol; insulinoma = hypervascular in arterial phase"},
      {name:"68Ga-DOTATATE PET", role:"Useful if EUS + CT inconclusive; SSR-positive insulinomas"},
      {name:"Calcium stimulation angiography (ASVS)", role:"Selective arterial Ca²⁺ injection → portal venous insulin sampling; regionalises to head/body/tail when other imaging fails"},
      {name:"Intraoperative US", role:"Essential during surgery — finds non-palpable tumours"}
    ]
  },
  criteria: {
    title: "Diagnostic Criteria for Insulinoma (72h Fast)",
    items: [
      {k:"Glucose", v:"<2.2mmol/L (<40mg/dL) at time of symptoms"},
      {k:"Insulin", v:">3μIU/mL (inappropriate elevation)"},
      {name:"C-peptide", v:"≥0.2nmol/L"},
      {k:"Proinsulin", v:"≥5pmol/L"},
      {k:"β-hydroxybutyrate", v:"≤2.7mmol/L (insulin suppresses ketogenesis)"},
      {k:"Sulphonylurea screen", v:"Negative"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Medical treatment: diazoxide (inhibits insulin secretion) for inoperable/metastatic",
      "Frequent small meals to prevent hypoglycaemia during workup period"
    ],
    medical: [
      "Diazoxide 150–300mg/day (opens K-ATP channels → inhibits insulin) for inoperable cases",
      "Everolimus + somatostatin analogues for malignant/metastatic insulinoma",
      "Streptozocin-based chemotherapy for malignant insulinoma"
    ],
    surgical: [
      {name:"Enucleation", when:"Superficial tumour (≤3cm, >3mm from main PD, no ductal involvement); body or tail of pancreas", notes:"Intraoperative US mandatory; palpate entire pancreas; drain always placed; pancreatic fistula risk 30%"},
      {name:"Distal pancreatectomy (± splenectomy)", when:"Body/tail insulinoma; multiple tumours in body/tail; duct proximity", notes:"Laparoscopic preferred; spleen preserved if possible"},
      {name:"Whipple (PPPD)", when:"Head insulinoma adherent to PD; unable to safely enucleate", notes:"Higher morbidity — avoid if enucleation feasible"},
      {name:"Total pancreatectomy", when:"MEN1 with multiple insulinomas; diffuse disease", notes:"Permanent brittle diabetes; rarely first choice"}
    ]
  },
  technique: {
    title: "Intraoperative Ultrasound (IOUS) for Insulinoma",
    prep: [
      "Glucose infusion running intraoperatively to prevent hypoglycaemia",
      "Expose entire pancreas: divide gastrocolic ligament, Kocherize head, mobilise spleen/distal pancreas",
      "High-frequency (7.5–10MHz) intraoperative ultrasound probe"
    ],
    steps: [
      {n:1, t:"Systematic palpation", d:"Palpate entire pancreas surface — insulinomas are often firm hypervascular nodules"},
      {n:2, t:"IOUS scan", d:"Scan systematically from head to tail; insulinoma appears hypoechoic, well-defined, hypervascular on Doppler"},
      {n:3, t:"Duct relationship", d:"Define relationship of tumour to main pancreatic duct — critical for planning enucleation vs resection"},
      {n:4, t:"Enucleation", d:"If confirmed >3mm from duct: blunt enucleation with haemostatic technique; avoid PD injury"},
      {n:5, t:"IOP glucose", d:"Check BG every 15 minutes; rise after tumour excision confirms successful resection"},
      {n:6, t:"Drain placement", d:"Always place drain near enucleation/anastomosis — pancreatic fistula common"}
    ],
    pearls: [
      "IOP glucose rise >20mg/dL after excision suggests correct tumour found",
      "If no tumour found by IOUS: ASVS pre-op to regionalise; selective PD ligation not recommended",
      "MEN1: inspect entire pancreas; multiple tumours — remove all palpable tumours, leave >20% for exocrine function"
    ]
  },
  guidelines: [
    {src:"ENETS 2022: Consensus guidelines for neuroendocrine neoplasms of the pancreas — insulinoma"},
    {src:"Endocrine Society 2018: Diagnosis and management of hypoglycaemia in adults"},
    {src:"AAES: Pancreatic neuroendocrine tumour surgical guidelines"}
  ],
  pearls: [
    "EUS is the most sensitive preoperative localisation test for insulinoma",
    "Intraoperative US is mandatory — 10% of insulinomas are not felt on palpation alone",
    "MEN1 insulinoma: enucleate all visible lesions + distal pancreatectomy for body/tail microtumours"
  ],
  mistakes: [
    "Not excluding factitious hypoglycaemia (exogenous insulin/sulphonylurea) before 72h fast",
    "Omitting intraoperative US — small insulinomas missed by palpation alone",
    "Closing without drain after enucleation — pancreatic fistula rate 30%, drain essential"
  ]
},
{
  id: "men1",
  dept: "endocrine",
  name: "MEN1 (Multiple Endocrine Neoplasia Type 1)",
  latin: "Neoplasia endocrina multiplex typus I",
  organ: "Multi-organ",
  severity: "high",
  tags: ["endocrine","genetics","mne","parathyroid","pituitary","pancreas"],
  hero: "Autosomal dominant syndrome: parathyroid (95%) + pituitary (30%) + pancreatic/duodenal NETs (50%). MENIN gene. Surgical approach must address multiglandular disease.",
  keypoints: [
    "Diagnostic: 2 of 3 classic tumours OR 1 with known MEN1 family history",
    "Parathyroid adenomas: multigland disease (3.5-gland or 4-gland parathyroidectomy)",
    "Pancreatic NETs: gastrinoma most common (Zollinger-Ellison syndrome) → PPI ± surgery",
    "Pituitary adenoma: prolactinoma most common → dopamine agonist",
    "Annual biochemical screening from age 5 for mutation carriers"
  ],
  differentials: ["Sporadic PHPT","Sporadic pancreatic NET","Sporadic pituitary adenoma","MEN2A","MEN4 (CDKN1B mutations)","Familial isolated PHPT"],
  mnemonics: [
    {name:"MEN1 = 3 Ps", text:"Parathyroid (95%) + Pituitary (30%) + Pancreas/duodenum NETs (50%)"},
    {name:"MEN1 gene MENIN", text:"MENIN = tumour suppressor; loss → uncontrolled cell proliferation in endocrine tissues"}
  ],
  overview: {
    definition: "Autosomal dominant cancer predisposition syndrome caused by germline MENIN gene mutations, characterised by multiglandular endocrine tumours.",
    epidemiology: "1 in 30,000. MENIN gene (chromosome 11q13). Nearly 100% penetrance by age 50. Equally affects men and women.",
    pathophysiology: "MENIN = tumour suppressor (chromatin remodelling). Loss of function → uncontrolled proliferation of parathyroid, pituitary, and enteropancreatic neuroendocrine cells (two-hit hypothesis).",
    classification: [
      "Parathyroid: all 4 glands (95%); most common initial manifestation",
      "Pituitary: prolactinoma (60%), GH-oma (25%), non-functioning (15%)",
      "Pancreatic/duodenal NETs: gastrinoma (40%), insulinoma (10%), VIPoma, glucagonoma, PPoma",
      "Other: adrenal cortical tumours (40%), carcinoids, skin tumours (lipoma, angiofibroma)"
    ]
  },
  diagnosis: {
    history: [
      "Nephrolithiasis, bone disease, fatigue (PHPT — often the first manifestation)",
      "Peptic ulcer disease, diarrhoea (ZES — gastrinoma)",
      "Fasting hypoglycaemia (insulinoma)",
      "Headache, visual field defects (pituitary tumour)",
      "Family history MEN1 or unexplained endocrine tumours"
    ],
    examination: [
      "Band keratopathy (PHPT)",
      "Bitemporal hemianopia (pituitary tumour)",
      "Lipomata, facial angiofibromas (cutaneous MEN1 features)",
      "Features of Cushing's, acromegaly, or galactorrhoea"
    ],
    investigations: [
      {name:"MENIN germline mutation testing", role:"Confirms diagnosis; guides family screening; >600 pathogenic variants"},
      {name:"Corrected serum calcium + PTH", role:"Annual screen; PHPT almost universal by age 50"},
      {name:"Fasting gastrin + secretin stimulation", role:"Gastrinoma: gastrin >1000pg/mL or >200pg/mL rise post-secretin"},
      {name:"Fasting glucose + insulin + C-peptide", role:"Insulinoma screening annually"},
      {name:"Chromogranin A + pancreatic polypeptide", role:"Tumour markers for pancreatic NETs"},
      {name:"MRI pituitary", role:"Prolactin, GH, IGF-1, ACTH if pituitary symptoms"},
      {name:"CT/MRI abdomen", role:"Pancreatic NETs; EUS most sensitive for small lesions (<1cm)"},
      {name:"68Ga-DOTATATE PET", role:"Somatostatin receptor scintigraphy for NET staging"}
    ]
  },
  criteria: {
    title: "MEN1 Diagnostic Criteria",
    items: [
      {k:"Clinical MEN1", v:"2 or more of: parathyroid adenoma(s), pituitary adenoma, pancreatic/duodenal NET"},
      {k:"Familial MEN1", v:"1 MEN1 tumour + 1st degree relative with MEN1"},
      {k:"Genetic MEN1", v:"MENIN pathogenic variant without clinical criteria (yet)"},
      {k:"Surveillance start age", v:"Annual biochemical + MRI from age 5 in mutation carriers"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Long-term PPI for ZES — symptom control (preferred primary therapy for MEN1 gastrinoma)",
      "Annual surveillance: calcium, PTH, gastrin, fasting glucose/insulin, prolactin, MRI pituitary/abdomen",
      "Genetic counselling — family screening of first-degree relatives"
    ],
    medical: [
      "Prolactinoma: dopamine agonist (cabergoline/bromocriptine) — first line",
      "GH-secreting pituitary adenoma: somatostatin analogues (octreotide) ± surgery",
      "ZES: high-dose PPI (omeprazole 60–100mg/day); surgery rarely curative in MEN1",
      "Somatostatin analogues (octreotide LAR): symptom control + antiproliferative for pancreatic NETs"
    ],
    surgical: [
      {name:"3.5-gland parathyroidectomy OR total + forearm autotransplant", when:"PHPT in MEN1 — all 4 glands always involved; never single adenoma resection", notes:"Cryopreserve additional parathyroid; high recurrence rate — re-operation possible via forearm if autotransplant"},
      {name:"Pancreatic resection for large NET or insulinoma", when:"Insulinoma: any size; non-functioning NET >2cm; glucagonoma/VIPoma any size (aggressive behavior)", notes:"Distal pancreatectomy ± enucleation of head tumours; Whipple for head; often leave duodenal gastrinoma"},
      {name:"Surgery for MEN1 gastrinoma (ZES)", when:"Controversial — gastrinomas in MEN1 often multiple, duodenal, and unresectable; surgery rarely curative", notes:"Some centres perform duodenectomy/Whipple for localised gastrinoma; cure rate <30%; PPI management preferred"},
      {name:"Pituitary surgery (transsphenoidal)", when:"Large non-functioning pituitary adenoma with mass effect; dopamine agonist failure in prolactinoma", notes:"Neurosurgical referral"}
    ]
  },
  technique: {
    title: "4-Gland Parathyroidectomy + Forearm Autotransplant in MEN1",
    prep: [
      "Same as secondary HPT technique above",
      "MEN1 patients: all 4 glands enlarged; concurrent thyroid pathology possible"
    ],
    steps: [
      {n:1, t:"Bilateral neck exploration", d:"Identify all 4 parathyroids; assess size and morphology of each"},
      {n:2, t:"Ectopic gland search", d:"MEN1: 10% have supernumerary or ectopic glands (thymus, retrooesophageal) — explore thymus via cervical approach"},
      {n:3, t:"Selection for transplant", d:"Choose smallest/most normal-appearing gland for forearm transplant"},
      {n:4, t:"Total parathyroidectomy", d:"Remove remaining 3.5 glands; frozen section to confirm parathyroid"},
      {n:5, t:"Forearm autotransplant", d:"As described in secondary HPT technique — brachioradialis pocket"},
      {n:6, t:"Cryopreservation", d:"Mince and cryopreserve additional tissue — for future reimplantation if recurrent hypocalcaemia"}
    ],
    pearls: [
      "Recurrence rate after parathyroidectomy in MEN1: 50% at 10 years — lifelong follow-up",
      "Forearm autotransplant enables monitoring of PTH gradient (transplant arm vs systemic) to confirm function and detect recurrence",
      "Re-operative parathyroidectomy via forearm under local anaesthetic if recurrent HPT"
    ]
  },
  guidelines: [
    {src:"Thakker et al. JCE&M 2012: MEN1 Clinical Practice Guidelines"},
    {src:"Wells et al. AAES: MEN Surgery Guidelines"},
    {src:"ENETS 2022: MEN1-associated NETs"},
    {src:"NICE NG23: MEN syndromes"}
  ],
  pearls: [
    "Single parathyroid adenoma removal in MEN1 will always recur — multigland resection mandatory",
    "ZES in MEN1: surgery rarely curative; PPI + SSA control symptoms; surgery for large primaries",
    "Insulinoma in MEN1: surgical — but explore entire pancreas carefully for synchronous lesions"
  ],
  mistakes: [
    "Single adenoma resection for MEN1 parathyroid — recurrence inevitable (all 4 glands involved)",
    "Not screening first-degree relatives — MEN1 is autosomal dominant, 50% inheritance risk",
    "Operating on MEN1 gastrinoma with curative intent — low success rate, high morbidity"
  ]
},
{
  id: "men2",
  dept: "endocrine",
  name: "MEN2 (Multiple Endocrine Neoplasia Type 2)",
  latin: "Neoplasia endocrina multiplex typus II",
  organ: "Multi-organ",
  severity: "high",
  tags: ["endocrine","genetics","thyroid","phaeochromocytoma","parathyroid","rET"],
  hero: "RET proto-oncogene mutation. MEN2A: MTC + phaeochromocytoma + PHPT. MEN2B: MTC + phaeochromocytoma + marfanoid + mucosal neuromas (most aggressive). Prophylactic thyroidectomy is life-saving.",
  keypoints: [
    "MEN2A: medullary thyroid cancer + phaeochromocytoma (50%) + PHPT (20%)",
    "MEN2B: MTC (aggressive) + phaeochromocytoma + marfanoid + mucosal neuromas (no PHPT)",
    "Prophylactic thyroidectomy age: MEN2B <6 months, MEN2A by age 5 (highest-risk RET) to age 10",
    "Always exclude phaeochromocytoma before thyroid/parathyroid surgery",
    "RET codon determines risk category and prophylactic surgery timing"
  ],
  differentials: ["MEN1","Sporadic MTC","Familial MTC (FMTC)","VHL syndrome","NF1"],
  mnemonics: [
    {name:"MEN2A vs MEN2B", text:"MEN2A: 3 Ps — Parafollicular (MTC) + Phaeochromocytoma + Parathyroid; MEN2B: MTC + Pheo + Marfanoid + mucosal Neuromas (no Parathyroid)"}
  ],
  overview: {
    definition: "Autosomal dominant syndrome caused by gain-of-function RET proto-oncogene mutations, causing MTC (100% penetrance), phaeochromocytoma (50%), and PHPT (20% in MEN2A).",
    epidemiology: "1 in 30,000–40,000. RET gene (chromosome 10q11.2). MEN2A (80%), MEN2B (15%), FMTC (5%).",
    pathophysiology: "RET = tyrosine kinase receptor. Gain-of-function mutation → constitutive activation → C-cell and chromaffin cell proliferation. C-cell hyperplasia precedes MTC.",
    classification: [
      "MEN2A (Sipple syndrome): MTC + phaeochromocytoma (50%) + PHPT (20%)",
      "MEN2B: MTC (most aggressive, early onset) + phaeochromocytoma + mucosal neuromas + marfanoid + intestinal ganglioneuromatosis",
      "Familial MTC (FMTC): MTC only, no phaeochromocytoma",
      "RET risk categories: Highest (C634, M918T) → High (C609-611-618-620, C630-634) → Moderate (all others)"
    ]
  },
  diagnosis: {
    history: [
      "Neck mass (MTC — painless)",
      "Diarrhoea (calcitonin secretion — functional marker of tumour burden)",
      "Hypertension, headache, sweating (phaeochromocytoma)",
      "Family history of MTC, phaeochromocytoma, or MEN2",
      "MEN2B: childhood constipation (ganglioneuromatosis), marfanoid habitus, lip/tongue neuromas"
    ],
    examination: [
      "Thyroid nodule/mass",
      "Cervical lymphadenopathy (MTC often presents with nodal disease)",
      "Hypertension (phaeochromocytoma)",
      "Mucosal neuromas on lips/tongue (MEN2B pathognomonic)",
      "Marfanoid habitus, skeletal deformities (MEN2B)"
    ],
    investigations: [
      {name:"RET gene sequencing", role:"Confirms diagnosis; determines risk category; guides prophylactic surgery timing"},
      {name:"Serum calcitonin", role:"Most sensitive marker for MTC; elevated in C-cell hyperplasia and MTC; annual surveillance"},
      {name:"Stimulated calcitonin (pentagastrin/Ca²⁺ test)", role:"Detects early C-cell hyperplasia before calcitonin elevated at rest"},
      {name:"CEA", role:"Elevated in MTC; poor prognosis if very elevated; combined with calcitonin"},
      {name:"24h urine metadrenalines/plasma metadrenalines", role:"Exclude phaeochromocytoma before ALL surgeries — biochemical not imaging"},
      {name:"Corrected calcium + PTH", role:"PHPT workup (MEN2A)"},
      {name:"CT neck/chest/abdomen + MRI liver", role:"Staging for MTC; identify nodal and distant metastases"},
      {name:"DOPA-PET or MIBG + 68Ga-DOTATATE", role:"Metastatic MTC localisation"}
    ]
  },
  criteria: {
    title: "ATA Risk Stratification and Prophylactic Thyroidectomy Timing",
    items: [
      {k:"Highest risk (D): M918T (MEN2B)", v:"Thyroidectomy within first 6 months of life"},
      {k:"High risk (C): C634F/G/R/S/W/Y, C609S/G, C611S/G, C618S/G, C620S/G", v:"Thyroidectomy by age 5 years"},
      {k:"Moderate risk (B): other RET variants", v:"Thyroidectomy by age 5–10 based on calcitonin/family history"},
      {k:"Pre-op phaeochromocytoma screen", v:"Mandatory urine/plasma metadrenalines before ANY MEN2 surgery"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Hereditary MTC mutation carrier: annual calcitonin + annual urine metadrenalines from birth",
      "Post-thyroidectomy: annual calcitonin + CEA for surveillance",
      "Inoperable/metastatic MTC: palliative intent"
    ],
    medical: [
      "Vandetanib or cabozantinib: first-line TKI for progressive/metastatic MTC (RET-targeted therapy)",
      "Selpercatinib or pralsetinib: highly selective RET inhibitors for metastatic MTC/phaeochromocytoma",
      "Alpha-blockade before any phaeochromocytoma surgery (as above)"
    ],
    surgical: [
      {name:"Prophylactic total thyroidectomy", when:"Based on RET risk category and age guidelines (see above); prior to calcitonin elevation ideally", notes:"Central neck dissection (prophylactic CND level VI) if calcitonin elevated or thyroid nodule present; parathyroid preservation critical in young patients"},
      {name:"Total thyroidectomy + CND ± lateral neck dissection", when:"Established MTC (calcitonin elevated, palpable disease)", notes:"Exclude phaeochromocytoma first; meticulous parathyroid preservation; lateral neck dissection if lateral nodes involved"},
      {name:"Laparoscopic adrenalectomy for phaeochromocytoma", when:"Identified biochemically + imaging; operate before thyroid surgery if concurrent", notes:"Cortical-sparing adrenalectomy in bilateral disease; alpha-blockade 10–14 days mandatory; MEN2 = bilateral phaeochromocytoma risk"},
      {name:"Parathyroidectomy for PHPT in MEN2A", when:"Symptomatic PHPT or meets asymptomatic criteria", notes:"Often single adenoma (unlike MEN1 which is multiglandular); focused approach ± intraoperative PTH"}
    ]
  },
  technique: {
    title: "Prophylactic Total Thyroidectomy in Child with MEN2B",
    prep: [
      "Exclude phaeochromocytoma biochemically before induction",
      "Paediatric anaesthesia team",
      "Plan parathyroid autotransplant in all 4 glands in young children (safest approach)"
    ],
    steps: [
      {n:1, t:"Small Kocher incision", d:"Paediatric: 3–4cm; magnification (loupes) essential for small structures"},
      {n:2, t:"Strap muscles", d:"Divide midline raphe; retract strap muscles laterally"},
      {n:3, t:"Total thyroidectomy", d:"Meticulous RLN identification (bilateral); superior pedicle ligation close to capsule (preserve SLN external branch)"},
      {n:4, t:"Parathyroid identification", d:"All 4 parathyroids identified; preserve vascular pedicles where possible; if devascularised → auto-transplant"},
      {n:5, t:"Specimen", d:"Send for frozen section + calcitonin immunohistochemistry"},
      {n:6, t:"Post-op", d:"Monitor Ca²⁺ 4 and 12 hours; thyroxine replacement started next day"}
    ],
    pearls: [
      "Parathyroid preservation paramount in children — lifelong hypoparathyroidism severely impairs quality of life",
      "Start levothyroxine suppression post-operatively; monitor TSH",
      "Calcitonin should be undetectable post-op — persistent elevation = residual/metastatic MTC"
    ]
  },
  guidelines: [
    {src:"ATA 2015: Medullary thyroid cancer management guidelines"},
    {src:"Kloos et al. AAES: MEN2 guidelines"},
    {src:"ENETS 2016: MEN2 and hereditary MTC"},
    {src:"NICE: Familial cancer guidance"}
  ],
  pearls: [
    "Always exclude phaeochromocytoma biochemically (not just by imaging) before any MEN2 surgery",
    "MEN2B child: mucosal neuromas on lips/tongue are pathognomonic — refer for RET testing immediately",
    "Calcitonin doubling time <6 months = aggressive MTC; poor prognosis"
  ],
  mistakes: [
    "Operating on MTC without excluding phaeochromocytoma — intraoperative catecholamine crisis",
    "Single adenoma resection for MEN2A PHPT without recognising multigland risk",
    "Delayed prophylactic thyroidectomy in MEN2B (highest-risk) — these children develop MTC in infancy"
  ]
},
{
  id: "breast-abscess",
  dept: "endocrine",
  name: "Breast Abscess",
  latin: "Abscessus mammae",
  organ: "Breast",
  severity: "low",
  tags: ["breast","infection","lactation"],
  hero: "Loculated breast infection most common in lactating women. Ultrasound-guided aspiration + antibiotics preferred over open incision and drainage.",
  keypoints: [
    "Most common: puerperal (lactational) — S. aureus (including MRSA)",
    "Non-puerperal: subareolar (Zuska's disease) — mixed/anaerobic organisms, smokers",
    "US-guided aspiration ± antibiotics: first-line (90% resolution in <3cm abscess)",
    "Incision and drainage: large (>3cm) or failed aspiration",
    "Continue breastfeeding or pumping — does not worsen and aids drainage"
  ],
  differentials: ["Inflammatory breast carcinoma","Mastitis without abscess","Galactocele","Sebaceous cyst","Mondor's disease (superficial thrombophlebitis)"],
  mnemonics: [
    {name:"Abscess types", text:"Puerperal = Lactation + S. aureus; Periductal = Non-lactating + Smoker + Zuska's = mixed organisms"}
  ],
  overview: {
    definition: "Localised collection of pus within breast parenchyma, most commonly arising from mastitis progression in lactating women or periductal mastitis in non-lactating.",
    epidemiology: "Lactational abscess: 0.1–3% breastfeeding women. Peak: 2nd–3rd week postpartum. Non-lactational: subareolar (Zuska disease), peripheral (immunosuppressed, diabetes).",
    pathophysiology: "Lactational: S. aureus colonises nipple → ascending ductal infection → mastitis → abscess. Non-lactational: periductal mastitis → squamous metaplasia → abscess. MRSA increasingly prevalent.",
    classification: [
      "Puerperal (lactational)",
      "Non-puerperal subareolar (Zuska's disease): periductal mastitis; associated with smoking, mammary duct ectasia",
      "Non-puerperal peripheral",
      "Neonatal breast abscess"
    ]
  },
  diagnosis: {
    history: [
      "Painful, swollen, red breast area",
      "Lactating woman or periareolar in non-lactating",
      "Fever, systemic upset",
      "Failed oral antibiotic treatment for mastitis",
      "Previous subareolar abscess (recurrent Zuska's)"
    ],
    examination: [
      "Tender fluctuant breast lump with overlying erythema and oedema",
      "Nipple discharge (pus from duct in periductal abscess)",
      "Systemic features: pyrexia, tachycardia",
      "Check for skin necrosis (necrotising infection rare but serious)"
    ],
    investigations: [
      {name:"Ultrasound breast", role:"Confirms abscess (hypoechoic loculated collection with posterior enhancement); guides aspiration; rules out malignancy"},
      {name:"FBC, CRP", role:"Leucocytosis; CRP elevated — assess severity"},
      {name:"Pus culture and sensitivity", role:"Guide antibiotic therapy; identify MRSA"},
      {name:"Core biopsy/FNA wall", role:"If thick wall, or does not resolve normally — exclude inflammatory carcinoma"}
    ]
  },
  criteria: {
    title: "Management Algorithm by Abscess Size",
    items: [
      {k:"<3cm, first episode", v:"US-guided aspiration + oral co-amoxiclav (or clindamycin if MRSA risk) ± repeat aspiration"},
      {k:">3cm or failed aspiration ×2", v:"Incision and drainage ± wound packing"},
      {k:"Skin necrosis/large multiloculated", v:"Open I&D with thorough debridement"},
      {k:"Non-puerperal subareolar", v:"I&D + excision of fistula/affected duct to prevent recurrence"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Continue breastfeeding or regular pumping — aids drainage and reduces engorgement",
      "Adequate analgesia (paracetamol + ibuprofen)",
      "Warm compresses"
    ],
    medical: [
      "Co-amoxiclav (Augmentin) 625mg TDS: first-line for lactational abscess",
      "Flucloxacillin: if confirmed S. aureus non-MRSA",
      "Co-trimoxazole or vancomycin (IV): if MRSA confirmed",
      "Clindamycin: penicillin-allergic patients"
    ],
    surgical: [
      {name:"Ultrasound-guided needle aspiration", when:"First line for abscesses <3cm; can be repeated ×2–3; 90% success rate", notes:"18–16G needle; aspirate pus to dryness; send for MC&S; repeat US at 48–72h to confirm resolution"},
      {name:"Incision and drainage (I&D)", when:"Large abscess >3cm; failed aspiration; skin necrosis; multiloculated; patient systemically unwell", notes:"Radial or circumareolar incision; thorough cavity washout; break down loculations; loosely pack with ribbon gauze; daily dressing changes"},
      {name:"Subareolar duct excision (Hadfield's operation)", when:"Recurrent non-puerperal periductal abscess (Zuska's disease)", notes:"Excise affected periductal tissue + fistula + subareolar ducts; high recurrence without definitive duct excision; smoking cessation essential"}
    ]
  },
  technique: {
    title: "Incision and Drainage of Breast Abscess",
    prep: [
      "GA or local anaesthesia",
      "US guidance ideally to confirm location",
      "Position: supine, arm extended"
    ],
    steps: [
      {n:1, t:"Incision", d:"Radial incision over most superficial/dependent part of abscess; circumareolar if subareolar"},
      {n:2, t:"Cavity entry", d:"Blunt haemostat into abscess cavity; collect pus for MC&S"},
      {n:3, t:"Finger sweep", d:"Break down all loculations digitally to create single unified cavity"},
      {n:4, t:"Washout", d:"Irrigate with copious warm saline until clear"},
      {n:5, t:"Packing", d:"Loosely pack with ribbon gauze (leave end for removal); avoid tight packing"},
      {n:6, t:"Dressings", d:"Daily dressing changes + gradual removal of gauze; cavity heals by secondary intention"}
    ],
    pearls: [
      "Do NOT close I&D primarily — heals by secondary intention",
      "In Zuska's disease: if only I&D performed without duct excision, recurrence nearly universal",
      "Core biopsy wall tissue if abscess in non-lactating woman >40 — inflammatory carcinoma mimics abscess"
    ]
  },
  guidelines: [
    {src:"NICE: Mastitis and breast abscess management in breastfeeding"},
    {src:"Association of Breast Surgery (ABS): Guidelines for benign breast conditions"},
    {src:"ABM Clinical Protocol #36: Abscess and mastitis in breastfeeding"}
  ],
  pearls: [
    "US-guided aspiration avoids scar and GA — always try before open I&D in small abscesses",
    "Inflammatory breast cancer can mimic mastitis/abscess — if no response to antibiotics in 2 weeks, biopsy",
    "Continuing breastfeeding during abscess treatment is safe and beneficial — reassure mothers"
  ],
  mistakes: [
    "Open I&D as first line for small abscess — US aspiration preferred (better cosmesis, equally effective)",
    "Not excluding inflammatory carcinoma in non-lactating women — delayed diagnosis",
    "Forgetting Zuska's disease management requires duct excision — aspiration/I&D alone → recurrence"
  ]
}
];
