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
  hero: "Catecholamine-secreting tumor of adrenal medulla. 'Rule of 10s'. Pre-operative alpha-blockade mandatory — failure to do so is potentially fatal.",
  keypoints: [
    "Rule of 10s: ~10% bilateral, extra-adrenal (paraganglioma), familial, pediatric — but true malignancy 12–29%, higher than the classic 10%",
    "Triad: headache + sweating + palpitations (paroxysmal hypertension)",
    "Biochemistry FIRST: 24h urine metadrenalines or plasma metadrenalines",
    "Alpha-block BEFORE beta-block — beta-blockade alone causes paradoxical hypertension",
    "Laparoscopic adrenalectomy preferred for tumors <5cm"
  ],
  differentials: ["Essential hypertension","Anxiety/panic disorder","Hyperthyroidism","Carcinoid","Neuroblastoma (children)","Drug interactions (tyramine, cocaine)"],
  mnemonics: [
    {name:"Rule of 10s", text:"10% bilateral, malignant, extra-adrenal, pediatric, familial"},
    {name:"Pre-op prep order", text:"Alpha FIRST (phenoxybenzamine) → then Beta (atenolol) → then volume replete"}
  ],
  overview: {
    definition: "Catecholamine-secreting neoplasm of chromaffin cells of adrenal medulla (phaeochromocytoma) or extra-adrenal sympathetic ganglia (paraganglioma).",
    epidemiology: "1 in 100,000 per year. Found in 0.1–0.6% of hypertensive patients. Mean age 40–50 yrs. ~10% familial overall; ~50% of MEN2A/2B carriers develop pheochromocytoma. Susceptibility genes: VHL, SDHA/B/C/D (SDH5), RET, NF1, MAX, TMEM127.",
    pathophysiology: "Excess catecholamine secretion → α1-mediated vasoconstriction, β1-mediated tachycardia, hyperglycemia. Adrenal (medullary) tumors express PNMT → secrete adrenaline; extra-adrenal paragangliomas lack PNMT → secrete predominantly noradrenaline. Paroxysmal crises triggered by manipulation, micturition (bladder paraganglioma), or medications.",
    classification: [
      "Unilateral adrenal (80%)",
      "Bilateral adrenal (10%)",
      "Extra-adrenal paraganglioma (10%): organ of Zuckerkandl, bladder, head/neck",
      "Hereditary syndromes: MEN2A/B (RET), VHL, SDH-B/C/D, NF1 — SDHB mutations predict extra-adrenal location and malignant behavior"
    ]
  },
  diagnosis: {
    history: [
      "Paroxysmal headache, sweating, palpitations (classic triad in 50%)",
      "Hypertension: sustained (50%) or paroxysmal (50%)",
      "Weight loss, anxiety, hyperglycemia",
      "Hematuria/micturition-triggered crises (bladder paraganglioma)",
      "Family history of MEN2, VHL, phaeochromocytoma, paraganglioma"
    ],
    examination: [
      "Hypertension (labile, paroxysmal crisis possible during exam)",
      "Pallor (not flushing — contrast with carcinoid)",
      "Tachycardia, sweating, tremor during paroxysm",
      "Café-au-lait spots, neurofibromas (NF1)"
    ],
    investigations: [
      {name:"24-hour urine metadrenalines (metanephrines)", role:"Sensitivity ~98%, specificity ~98%; collect during or after episode; first-line biochemical test"},
      {name:"Plasma metadrenalines (free)", role:"Sensitivity 96–100% but specificity only 85–89% (77% in elderly) — reserve for high pre-test probability; fasting supine, avoid caffeine/paracetamol interference"},
      {name:"Chromogranin A", role:"Sensitivity 83%, specificity 96%; adjunct marker"},
      {name:"Clonidine suppression test", role:"Normal response = catecholamines fall <500 pg/mL at 2–3h; distinguishes tumor from sympathetic overactivity"},
      {name:"CT adrenal/abdomen", role:"Sensitivity 85–95%; use non-contrast to avoid precipitating crisis; image from diaphragm to aortic bifurcation to catch organ of Zuckerkandl"},
      {name:"MRI adrenal", role:"T2 bright signal ('light bulb' sign); preferred in pregnancy, children, paraganglioma"},
      {name:"MIBG scintigraphy (I-123)", role:"Sensitivity 77–89%; functional imaging for metastatic or extra-adrenal disease; whole body assessment"},
      {name:"FDG/DOPA-PET", role:"Sensitive for SDH-B paraganglioma and metastatic disease"},
      {name:"Genetic testing", role:"All patients <45 yrs, bilateral, extra-adrenal, or family history"}
    ]
  },
  criteria: {
    title: "Pre-operative Alpha-blockade Protocol",
    items: [
      {k:"Phenoxybenzamine", v:"Start 10mg BD, up-titrate to 300–400mg/day; begin 1–3 weeks pre-op"},
      {k:"Beta-blocker timing", v:"Propranolol 10–40mg q6–8h added only 3–4 days pre-op, AFTER alpha-blockade established"},
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
      "Alpha-blockade (phenoxybenzamine 10mg BD up-titrated to 300–400mg/d, or doxazosin) started 1–3 weeks pre-op",
      "Beta-blockade (propranolol/atenolol) only 3–4 days pre-op, after alpha established — never before",
      "Nicardipine (calcium-channel blocker) alone is as effective as α/β-blockade peri-operatively",
      "Metyrosine (α-methyl-p-tyrosine, inhibits catecholamine synthesis) if blockade poorly tolerated",
      "Hypertensive crisis intraoperatively: IV phentolamine or sodium nitroprusside; esmolol for arrhythmia",
      "Avoid fentanyl, ketamine and morphine intra-op (provoke catecholamine release)",
      "Post-excision hypotension: IV fluid + noradrenaline; often dramatic drop in BP"
    ],
    surgical: [
      {name:"Laparoscopic adrenalectomy (transperitoneal/retroperitoneal)", when:"Standard for tumors <5cm; most unilateral phaeochromocytomas", notes:"Minimal tumor manipulation; early ligation of adrenal vein; experienced team; anesthetic standby for crisis management"},
      {name:"Open adrenalectomy", when:"Large tumors (>5cm), suspected malignancy, paraganglioma with local invasion", notes:"Flank or anterior transperitoneal approach"},
      {name:"Cortical-sparing adrenalectomy", when:"Bilateral phaeochromocytoma (e.g. MEN2A, VHL) — preserve cortex to prevent Addisonian crisis", notes:"Leave ≥30% adrenal cortex; MEN-syndrome pheos are rarely malignant. Ipsilateral recurrence after cortical-sparing: VHL ~20% (mean 40mo), MEN2 ~33% (54–88mo)"}
    ]
  },
  technique: {
    title: "Laparoscopic Transperitoneal Adrenalectomy (Right Side)",
    prep: [
      "Confirmed adequate alpha-blockade — BP target met for ≥10 days",
      "Position: lateral decubitus (left lateral for right adrenal), beanbag, table broken",
      "IV phenoxybenzamine available for intraoperative crisis",
      "Anesthesia: invasive BP monitoring, central line access"
    ],
    steps: [
      {n:1, t:"Port placement", d:"4 ports for right: just below costal margin; camera 5cm below subcostal midclavicular, working ports medially and laterally"},
      {n:2, t:"Liver mobilization", d:"Divide triangular ligament; retract liver medially to expose IVC/adrenal area"},
      {n:3, t:"Adrenal vein", d:"Identify short right adrenal vein entering IVC; double clip and divide EARLY to prevent catecholamine surge"},
      {n:4, t:"Adrenal dissection", d:"Blunt dissection in avascular plane superior, medial, inferior to adrenal; minimal grasping of gland"},
      {n:5, t:"Specimen retrieval", d:"Place in endobag; remove via largest port (enlarge if needed); avoid spillage (risk of implantation if malignant)"},
      {n:6, t:"Hemostasis", d:"Inspect adrenal bed; left adrenal vein (drains to left renal vein) — handle similarly on left side"}
    ],
    pearls: [
      "Ligate adrenal vein early — reduces catecholamine surge during dissection",
      "Avoid squeezing/manipulating tumor — can provoke crisis",
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
    "Post-adrenalectomy hypoglycemia: loss of catecholamine-mediated glycogenolysis — monitor glucose",
    "Screen all phaeochromocytoma for hereditary syndrome regardless of family history",
    "True malignancy rate is 12–29% — higher than the classic 'rule of 10s'; SDHB mutation predicts extra-adrenal and malignant disease"
  ],
  mistakes: [
    "Starting beta-blockade before alpha-blockade — paradoxical hypertensive crisis",
    "Not performing biochemical confirmation before imaging-guided intervention",
    "Not warning anesthetics team about diagnosis — uncontrolled intraoperative crisis"
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
    "Hypertension + hypokalemia + suppressed renin → measure aldosterone:renin ratio",
    "Screen: PAC:PRA ratio (plasma aldosterone concentration : plasma renin activity) elevated (≈1:25 to 30, i.e. ARR ≥20–30) with aldosterone >15ng/dL",
    "Up to 40% of aldosteronomas are normokalemic pre-op — do not exclude PA on normal potassium",
    "CT adrenal: tumor (adenoma) vs bilateral hyperplasia",
    "Adrenal vein sampling (AVS): mandatory to lateralize before surgery — CT alone misleading",
    "Unilateral adrenalectomy curative if lateralized unilateral adenoma"
  ],
  differentials: ["Essential hypertension","Secondary hyperaldosteronism (renal artery stenosis, CCF)","Cushing syndrome","Licorice ingestion","Liddle syndrome"],
  mnemonics: [
    {name:"Conn's triad", text:"Hypertension + Hypokalemia + Suppressed renin (3H: HBP + HypoK + Hyporenin)"}
  ],
  overview: {
    definition: "Autonomous aldosterone overproduction independent of renin-angiotensin system, causing sodium retention, hypertension, and hypokalemia.",
    epidemiology: "5–10% of hypertensive patients; 20% of resistant hypertension. Aldosterone-producing adenoma (APA) 35%, bilateral adrenal hyperplasia (BAH) 65%.",
    pathophysiology: "Autonomous aldosterone → ENaC activation → Na⁺ retention + K⁺/H⁺ excretion → volume expansion → hypertension + hypokalemia + metabolic alkalosis. Somatic KCNJ5 mutation found in up to 40% of aldosterone-producing adenomas; also ATP1A1, ATP2B3, CACNA1D, CTNNB1.",
    classification: [
      "Unilateral aldosterone-producing adenoma (APA) — Conn's adenoma",
      "Bilateral adrenal hyperplasia (BAH / idiopathic hyperaldosteronism)",
      "Unilateral adrenal hyperplasia (rare)",
      "Aldosterone-producing adrenocortical carcinoma (very rare)",
      "Familial hyperaldosteronism: FH-I (glucocorticoid-remediable, CYP11B1/CYP11B2 chimeric gene), FH-II, FH-III (KCNJ5 germline)"
    ]
  },
  diagnosis: {
    history: [
      "Resistant hypertension on ≥3 antihypertensives",
      "Spontaneous serum K <3.2 mmol/L (or <3 on diuretic) raises suspicion — but up to 40% are normokalemic",
      "Young-onset hypertension",
      "Hypertension + adrenal incidentaloma",
      "Family history of early hypertension or PA"
    ],
    examination: [
      "Hypertension (often severe, resistant)",
      "Usually no distinctive signs",
      "Proximal muscle weakness if severe hypokalemia"
    ],
    investigations: [
      {name:"Aldosterone:renin ratio (ARR / PAC:PRA)", role:"Screening: PAC:PRA elevated (≈1:25 to 30, ARR ≥20–30) + aldosterone >15ng/dL while on ARR-safe antihypertensive (amlodipine, doxazosin); hold spironolactone/β-blocker/ACEi/ARB first"},
      {name:"Confirmatory testing (saline/salt loading)", role:"Post-load plasma aldosterone <5 ng/dL, or 24h urine aldosterone <14 µg, EXCLUDES primary aldosteronism; failure to suppress confirms it"},
      {name:"CT adrenal (thin-slice, 0.5cm cuts)", role:"Sensitivity ~90%; unilateral 0.5–2cm nodule with normal contralateral gland = aldosteronoma; lipid-rich adenoma <10HU; often misleading — cannot replace AVS"},
      {name:"Adrenal vein sampling (AVS)", role:"Gold standard lateralization: selectivity index >2 (success); lateralization index >4 = unilateral; ACTH stimulation improves accuracy"},
      {name:"NP-59 scintigraphy", role:"Alternative to AVS if not available; less sensitive"}
    ]
  },
  criteria: {
    title: "Adrenal Vein Sampling (AVS) Interpretation",
    items: [
      {k:"Selectivity index", v:"Adrenal vein cortisol / IVC cortisol >2 (or >3 with ACTH) = successful cannulation"},
      {k:"Lateralization index", v:"Higher side aldosterone:cortisol / lower side aldosterone:cortisol >4 = unilateral disease"},
      {k:"Contralateral suppression", v:"Suppressed side <1 = unilateral; bilateral elevation = BAH"},
      {k:"BAH diagnosis", v:"Lateralization index <3 = bilateral hyperplasia → treat with spironolactone, NOT surgery"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "BAH: lifelong spironolactone (MRA) ± amiloride; target BP <130/80mmHg",
      "Post-adrenalectomy: antihypertensives often still needed (fixed hypertension in long-standing disease)"
    ],
    medical: [
      "Spironolactone 25–100mg daily (MRA of choice); side effects: gynecomastia, impotence",
      "Eplerenone (selective MRA): fewer side effects but less effective",
      "Amiloride: potassium-sparing diuretic; second-line",
      "Glucocorticoid-remediable aldosteronism (FH-I): treat with exogenous dexamethasone",
      "Potassium supplementation if hypokalemic"
    ],
    surgical: [
      {name:"Laparoscopic unilateral adrenalectomy", when:"Confirmed unilateral disease on AVS; adenoma or unilateral hyperplasia", notes:">90% cure of hypokalemia/HTN in unilateral disease; only 20–30% of bilateral hyperplasia benefit from surgery (multiple nodules least likely). Transient post-op hypoaldosteronism may need fludrocortisone (higher pre-op aldosterone predicts this); stop spironolactone 2 weeks pre-op to unmask BP response"},
      {name:"Open adrenalectomy", when:"Suspected malignancy (large, irregular), adrenocortical carcinoma", notes:"Rarely needed for Conn's adenoma"}
    ]
  },
  technique: {
    title: "Laparoscopic Retroperitoneoscopic Adrenalectomy",
    prep: [
      "Correct hypokalemia pre-op with spironolactone/potassium",
      "Optimize blood pressure",
      "Position: prone or lateral decubitus; retroperitoneal approach avoids bowel"
    ],
    steps: [
      {n:1, t:"Port placement (retroperitoneal)", d:"Lateral decubitus; initial port below 12th rib; balloon dissection creates retroperitoneal space; 2–3 further ports"},
      {n:2, t:"Identify adrenal", d:"Fat-encased adrenal identified by yellow color and lobulated surface"},
      {n:3, t:"Adrenal vein", d:"Identify and clip adrenal vein (left: longer, to left renal vein; right: short, direct IVC entry)"},
      {n:4, t:"Blunt dissection", d:"Develop plane between adrenal and kidney superiorly; take all periglandular fat with adenoma"},
      {n:5, t:"Hemostasis and removal", d:"Retrieve in bag; check hemostasis; close ports"}
    ],
    pearls: [
      "Retroperitoneoscopic approach: less ileus, faster recovery — preferred by many high-volume centers",
      "Transperitoneal approach: better orientation for beginners, easier for large lesions",
      "Normalization of BP may take 6–12 months post-adrenalectomy"
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
    pathophysiology: "Autonomous cortisol → bilateral adrenocortical atrophy, suppressed ACTH. Excess glucocorticoid → hyperglycemia, centripetal fat deposition, protein catabolism, immune suppression, osteoporosis. Induces a hypercoagulable state (↑factor VIII, ↑vWF, impaired fibrinolysis) → increased VTE and infection risk.",
    classification: [
      "ACTH-dependent (80%): pituitary Cushing's disease, ectopic ACTH",
      "ACTH-independent (20%): adrenal adenoma, adrenocortical carcinoma, bilateral hyperplasia — PPNAD (primary pigmented nodular adrenocortical disease: small <5mm black nodules, may be part of Carney complex) and ACTH-independent macronodular hyperplasia"
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
      {name:"Plasma ACTH", role:"Low (<10pg/mL) in adrenal tumors; 15–500pg/mL in Cushing disease; high/very high in ectopic ACTH — distinguishes ACTH-dependent vs independent"},
      {name:"High-dose DST + urinary cortisol", role:"With plasma ACTH, separates ACTH-dependent from ACTH-independent disease"},
      {name:"CRH stimulation test (ovine, 1µg/kg)", role:"Pituitary source responds with ACTH/cortisol rise; adrenal and ectopic sources blunted"},
      {name:"CT adrenal", role:"Adenoma (<6cm, lipid-rich), carcinoma (>6cm, heterogeneous, calcification), bilateral nodularity"},
      {name:"MRI pituitary", role:"If ACTH-dependent: identify pituitary microadenoma (Cushing disease); contrast MRI only 33–67% sensitive, head CT only ~22%"},
      {name:"Bilateral inferior petrosal sinus sampling (BIPSS/IPSS)", role:"Petrosal:peripheral ACTH ratio >2 basal or >3 post-CRH ≈100% sensitive for a pituitary source; use if ACTH elevated but pituitary MRI negative to differentiate pituitary from ectopic"}
    ]
  },
  criteria: {
    title: "Localization Summary",
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
      "'Medical adrenalectomy' (ketoconazole / metyrapone / aminoglutethimide) for failed pituitary surgery",
      "Mifepristone (glucocorticoid receptor antagonist): for inoperable/metastatic",
      "Osilodrostat or pasireotide (LAR): Cushing disease"
    ],
    surgical: [
      {name:"Laparoscopic unilateral adrenalectomy", when:"Adrenal adenoma — definitive treatment; normalizes cortisol in >90%", notes:"Pre-op hydrocortisone cover; post-op continuation for 6–18 months until contralateral axis recovers"},
      {name:"Bilateral laparoscopic adrenalectomy", when:"Bilateral Cushing's (PPNAD, AIMAH), failed pituitary surgery, ectopic ACTH unresectable — curative for primary adrenal hyperplasia", notes:"Permanent Addisonian — lifelong hydrocortisone (10–20mg AM + 5–10mg PM) + fludrocortisone 0.05–0.1mg/d; risk of Nelson syndrome (pituitary tumor growth) post-bilat adrenalectomy"},
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
      {n:3, t:"Weeks 2–6", d:"Taper toward maintenance hydrocortisone 10–20mg AM + 5–10mg PM (+ fludrocortisone 0.05–0.1mg/d after bilateral adrenalectomy)"},
      {n:4, t:"Recovery", d:"Guide taper by ACTH-stimulation (synacthen) test at 6-monthly intervals; exogenous steroid may be needed up to 2 years (indefinitely after bilateral adrenalectomy); stop when morning cortisol >500nmol/L post-stimulation"},
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
    "Any adrenal mass >4cm suspicious; >6cm high malignancy risk (~92% of ACCs are >6cm)",
    "~50% non-functioning (local mass effects); of secretors: cortisol 30%, androgens 20%, estrogens 10%, aldosterone 2%, multiple hormones 35%",
    "CT malignant features: >6cm, irregular, heterogeneous, >10HU, calcification",
    "Open adrenalectomy with en-bloc resection — laparoscopy contraindicated for suspected ACC",
    "Mitotane (adrenolytic) adjuvant/palliative; poor chemotherapy response"
  ],
  differentials: ["Adrenal adenoma","Phaeochromocytoma","Adrenal metastasis","Myelolipoma","Adrenal hematoma","Neuroblastoma (children)"],
  mnemonics: [
    {name:"Weiss Criteria malignancy", text:"≥3 of: High mitotic rate + Atypical mitoses + Venous invasion + Capsular invasion + Necrosis + Diffuse architecture + Low % clear cells + Nuclear pleomorphism + Sinusoidal invasion"}
  ],
  overview: {
    definition: "Malignant tumor of adrenocortical cells. Bimodal age distribution: children <5 and adults 40–50 yrs. Often large at presentation.",
    epidemiology: "~2/million/year. Bimodal age (children <5 and adults 40–50 yrs). Associated with Li-Fraumeni (TP53), MEN1 (MENIN), Lynch, Beckwith-Wiedemann (11p), Carney complex (2p).",
    pathophysiology: "Somatic TP53 mutation in ~33% (germline in Li-Fraumeni), LOH >85%, IGF-2 overexpressed in ~90%, β-catenin (CTNNB1) mutation ~30%, ZNRF3. Functional tumors: excess cortisol, androgens, estrogens, or mixed.",
    classification: [
      "TNM staging (AJCC/UICC): T1 ≤5cm, T2 >5cm, T3 local invasion, T4 adjacent-organ invasion; up to 70% present as stage III/IV",
      "(App also uses ENSAT: I <5cm confined, II >5cm confined, III local invasion/N+, IV distant metastasis)",
      "Functional vs non-functional",
      "Pediatric: usually virilizing (androgens)"
    ]
  },
  diagnosis: {
    history: [
      "Rapid weight gain, cushingoid features (50% functional)",
      "Virilization in women (hirsutism, deepened voice, clitoromegaly)",
      "Flank/back pain, abdominal mass (non-functional — presents late)",
      "Incidentaloma worked up revealing ACC"
    ],
    examination: [
      "Cushingoid features or virilization",
      "Palpable abdominal/flank mass (large tumors)",
      "Hypertension, glucose intolerance"
    ],
    investigations: [
      {name:"Hormonal workup", role:"24h UFC, dexamethasone suppression, DHEAS, testosterone, 17-OH-progesterone, aldosterone:renin, urine metadrenalines"},
      {name:"CT adrenal (thin-slice, 3-phase)", role:"Size, density (>10HU pre-contrast), washout <40% at 15min, irregular/heterogeneous margins. Size predicts malignancy: ≥4cm sens 96%/spec 51%; ≥6cm sens 90%/spec 78%"},
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
      "Multidisciplinary endocrine tumor board review mandatory",
      "Mitotane surveillance levels: therapeutic range 14–20mg/L",
      "Advanced ACC: clinical trial participation recommended"
    ],
    medical: [
      "Adjuvant mitotane (o,p′-DDD): recommended for R0 resection, Ki67>10%, stage III/IV; effective dose 2–6 g/d, monitor blood levels (FIRM-ACT: EDP-M superior to streptozocin+mitotane)",
      "Mitotane side effects: adrenal insufficiency (must replace steroids), GI toxicity, hepatotoxicity",
      "EDP-M (etoposide+doxorubicin+cisplatin + mitotane): first-line systemic for advanced ACC",
      "Capsular/vascular invasion is the most reliable sign of malignancy; Ki67 is a key proliferation marker; metastasizes to liver, lung and bone",
      "Lurbinectedin/pembrolizumab: emerging therapies for refractory ACC"
    ],
    surgical: [
      {name:"Open radical adrenalectomy", when:"ACC — mandatory open approach for tumors >6cm or with malignant features", notes:"Complete R0 resection is the key survival predictor: R0 5-yr survival 32–48% vs incomplete median <1yr. Generous subcostal or thoraco-abdominal (right) approach; en-bloc resection of adrenal + periadrenal fat ± diaphragm/kidney/pancreas/liver/IVC if invaded"},
      {name:"Laparoscopic approach", when:"Contraindicated for suspected ACC — risk of incomplete resection, capsule rupture, positive margins, peritoneal implantation", notes:"If incidental ACC found on laparoscopic specimen: completion open re-resection of adrenal bed recommended"},
      {name:"Debulking/resection of metastases", when:"Selected patients with complete debulking possible; liver metastases; response to mitotane", notes:"Prolonged disease-free survival in some series"}
    ]
  },
  technique: {
    title: "Open Radical Adrenalectomy (Right-sided ACC)",
    prep: [
      "Functional tumor: pre-op steroid coverage for cortisol-secreting",
      "Position: supine; large anterior midline or bilateral subcostal incision",
      "Anesthesia: central venous access, invasive monitoring"
    ],
    steps: [
      {n:1, t:"Incision", d:"Bilateral subcostal (chevron) or midline laparotomy for large ACC"},
      {n:2, t:"Right colon and duodenum mobilization", d:"Kocherize duodenum and right colon to expose retroperitoneum and IVC"},
      {n:3, t:"IVC control", d:"Identify tumor-IVC relationship; control IVC proximal and distal if tumor thrombus present"},
      {n:4, t:"Adrenal vein", d:"Ligate right adrenal vein at IVC origin under direct vision"},
      {n:5, t:"En-bloc resection", d:"Excise adrenal with periadrenal fat; take adjacent structures if invaded (kidney, hepatic segment); avoid capsule breach"},
      {n:6, t:"Lymphadenectomy", d:"Remove ipsilateral lymph nodes along IVC/aorta — improves staging"}
    ],
    pearls: [
      "IVC tumor thrombus (right-sided ACC): may require IVC clamping or cardiopulmonary bypass for level III/IV thrombus",
      "Never biopsy adrenal mass pre-op if ACC suspected — risk of seeding; confirm diagnosis on excision specimen",
      "Pathology: Weiss score ≥3 = ACC (WHO/most texts; Weiss's original cutoff was ≥4)"
    ]
  },
  guidelines: [
    {src:"ENSAT 2023: Adrenocortical carcinoma guidelines"},
    {src:"Fassnacht et al. ESMO Guidelines 2018: ACC"},
    {src:"AACE 2019: Adrenal incidentaloma guideline"},
    {src:"AJCC Cancer Staging Manual, 8th ed (2017)"}
  ],
  pearls: [
    "Never laparoscope suspected ACC — capsule rupture = upstaging and worse outcome",
    "Mitotane causes adrenal insufficiency — patients need 2–3× normal hydrocortisone dose",
    "Pediatric ACC: virilizing, often localized — resection has better prognosis than adult",
    "Sex-steroid-secreting cortical tumors: virilizing (↑DHEA/17-KS) or feminizing (↑estrogen, gynecomastia/impotence in men) — treated by adrenalectomy"
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
    "Found on 0.4–4.4% of abdominal CT scans; increases with age",
    "Evaluate ALL for: (1) malignancy risk (size/imaging) and (2) hormonal function",
    "CT density <10HU (Hounsfield units) = lipid-rich adenoma = benign; >18HU is the stated cancer threshold",
    "Cancer risk by size: 2% if <4cm, 6% if 4–6cm, ~25% if >6cm",
    "Exclude phaeochromocytoma FIRST before biopsy or surgery",
    "AACE/AAES: surgery if ≥4cm, or functional, or suspicious imaging (except subclinical Cushing's — controversial)"
  ],
  differentials: ["Adrenal adenoma (non-functioning)","Phaeochromocytoma","Adrenocortical carcinoma","Adrenal metastasis","Myelolipoma","Adrenal cyst","Hematoma","Ganglioneuroma"],
  mnemonics: [
    {name:"Incidentaloma workup", text:"CAMP: Cortisol (1mg DST) + Aldosterone:renin ratio + Metadrenalines (urine/plasma) + Pheo excluded before proceeding"}
  ],
  overview: {
    definition: "Adrenal mass ≥1cm discovered incidentally on imaging performed for a non-adrenal indication.",
    epidemiology: "Prevalence 0.4–4.4% on CT; increases with age. 80% benign non-functioning adenomas. 5% phaeochromocytoma, 5% ACC, 2% metastasis. In patients with known cancer and a unilateral adrenal mass, 32–73% are metastases.",
    pathophysiology: "Increased imaging leads to more incidental discovery. Most adenomas are lipid-rich (cholesterol-rich cells). HU <10 on unenhanced CT = high specificity for benign adenoma; adenoma <10HU, ACC >18HU. Subclinical Cushing's ~8%; 5–20% of 'nonfunctioning' adenomas have subtle cortisol excess.",
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
      "Blood pressure (hypertension suggests hormonal tumor)",
      "Clinical features of Cushing's, virilization",
      "Signs of primary malignancy (lymphadenopathy, lung mass)"
    ],
    investigations: [
      {name:"Unenhanced CT adrenal density", role:"<10HU = lipid-rich adenoma (benign); >18HU = cancer threshold; intermediate needs further characterization"},
      {name:"CT washout (15-min delayed)", role:"Absolute washout >60% = adenoma; <40% = malignant/phaeochromocytoma"},
      {name:"MRI chemical shift", role:"Loss of signal on opposed phase = adenoma; persistent signal = malignancy/phaeochromocytoma. Mass:liver signal ratio — adenoma <1.4, ACC/mets 1.2–2.8, phaeochromocytoma >3"},
      {name:"1mg overnight dexamethasone suppression", role:"Functional screen in all incidentalomas (add 17-KS if virilizing); cortisol >50nmol/L = autonomous cortisol secretion"},
      {name:"24h urine/plasma metadrenalines", role:"Functional screen in all incidentalomas; exclude phaeochromocytoma before any intervention"},
      {name:"Aldosterone:renin ratio", role:"Functional screen if hypertensive (± hypokalemic)"},
      {name:"PET-FDG", role:"For inconclusive densitometry or known malignancy: high uptake = metastasis; caution over false positives/negatives"},
      {name:"FNAB / biopsy (CT-guided)", role:"CANNOT distinguish adenoma from ACC, but PPV ~100% for metastasis in known cancer (false-negative up to 33%); ONLY after phaeochromocytoma excluded"}
    ]
  },
  criteria: {
    title: "ESE/ENSAT 2023 Management Algorithm",
    items: [
      {k:"≤4cm, <10HU, no hormone excess", v:"No further imaging needed; annual cortisol screen × 5 years"},
      {k:">4cm or >10HU or growth >0.8cm/yr", v:"Discuss surgery"},
      {k:"Any size with malignant features", v:"Surgery (open if suspected ACC)"},
      {k:"Phaeochromocytoma (any size)", v:"Surgery after alpha-blockade"},
      {k:"Aldosteronoma + confirmed lateralization", v:"Laparoscopic adrenalectomy"},
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
      {name:"Laparoscopic adrenalectomy", when:"AACE/AAES: functional tumor, suspicious imaging, or ≥4cm; non-op follow-up if <4cm + benign imaging. Also phaeochromocytoma (after alpha-blockade); aldosteronoma (after AVS); functioning Cushing's adenoma", notes:"Retroperitoneal or transperitoneal; minimally invasive for benign lesions. Subclinical Cushing's: operate if suppressed ACTH + raised urinary cortisol, or worsening HTN/glucose/osteoporosis"},
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
      {n:2, t:"Local anesthesia", d:"Infiltrate skin and track"},
      {n:3, t:"Core needle biopsy", d:"18G core needle; 2–3 passes"},
      {n:4, t:"Post-biopsy CT", d:"Check for hematoma, pneumothorax"},
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
  tags: ["endocrine","pancreas","neuroendocrine","hypoglycemia"],
  hero: "Most common functioning pancreatic NET. Whipple's triad: hypoglycemic symptoms + glucose <2.5mmol/L + relief with glucose. 90% benign, 90% solitary, 90% within pancreas.",
  keypoints: [
    "Whipple's triad: symptoms + BG <2.5mmol/L + relief with glucose administration",
    "72-hour supervised fast: gold standard diagnostic",
    "90% benign, 90% solitary, 10% MEN1 (multiple, malignant more common)",
    "Localize with EUS (most sensitive) + CT/MRI; intraoperative US essential",
    "Enucleation if superficial; distal pancreatectomy if body/tail; Whipple if head adherent to duct"
  ],
  differentials: ["Reactive hypoglycemia","Factitious hypoglycemia (exogenous insulin/sulfonylureas)","Non-islet cell tumor hypoglycemia","Adrenal insufficiency","Hepatic failure","MEN1 (multiple insulinomas)"],
  mnemonics: [
    {name:"Whipple's Triad", text:"Symptoms of hypoglycemia + BG <2.5mmol/L + Relief with glucose"},
    {name:"Rule of 90s", text:"90% benign + 90% solitary + 90% intrapancreatic + 90% <2cm"}
  ],
  overview: {
    definition: "Neoplasm of insulin-secreting β-cells of the pancreatic islets causing autonomous insulin overproduction and fasting hypoglycemia.",
    epidemiology: "1–4/million/year. Most common functional pancreatic NET. Peak age 40–60 yrs. MEN1 in 10% (usually multiple, recurrent).",
    pathophysiology: "Autonomous insulin secretion independent of glucose → fasting hypoglycemia; counter-regulatory hormones impaired. Brain glucose-dependent: neuroglycopenic symptoms predominate.",
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
      "Family history MEN1 (parathyroid tumors, pituitary adenomas)"
    ],
    examination: [
      "Often normal interictally",
      "During attack: confusion, focal neurology, diaphoresis",
      "Obesity (compensatory eating)"
    ],
    investigations: [
      {name:"72-hour supervised fast", role:"Gold standard: document BG, insulin, C-peptide, proinsulin, β-hydroxybutyrate at hypoglycemia onset; terminate when BG <2.2mmol/L with symptoms"},
      {name:"Insulin:glucose ratio during hypoglycemia", role:"Insulin >3μU/mL with BG <2.5mmol/L = inappropriate insulin = insulinoma or exogenous insulin"},
      {name:"C-peptide", role:"Elevated with BG <2.5 = endogenous insulin (insulinoma or sulfonylurea); absent = exogenous insulin"},
      {name:"Sulfonylurea screen (urine/plasma)", role:"Exclude factitious hypoglycemia"},
      {name:"EUS (endoscopic US)", role:"Most sensitive (>90%) for small intrapancreatic tumors; localizes body/tail lesions"},
      {name:"CT pancreas (triple-phase)", role:"Pancreatic protocol; insulinoma = hypervascular in arterial phase"},
      {name:"68Ga-DOTATATE PET", role:"Useful if EUS + CT inconclusive; SSR-positive insulinomas"},
      {name:"Calcium stimulation angiography (ASVS)", role:"Selective arterial Ca²⁺ injection → portal venous insulin sampling; regionalises to head/body/tail when other imaging fails"},
      {name:"Intraoperative US", role:"Essential during surgery — finds non-palpable tumors"}
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
      {k:"Sulfonylurea screen", v:"Negative"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Medical treatment: diazoxide (inhibits insulin secretion) for inoperable/metastatic",
      "Frequent small meals to prevent hypoglycemia during workup period"
    ],
    medical: [
      "Diazoxide 150–300mg/day (opens K-ATP channels → inhibits insulin) for inoperable cases",
      "Everolimus + somatostatin analogues for malignant/metastatic insulinoma",
      "Streptozocin-based chemotherapy for malignant insulinoma"
    ],
    surgical: [
      {name:"Enucleation", when:"Superficial tumor (≤3cm, >3mm from main PD, no ductal involvement); body or tail of pancreas", notes:"Intraoperative US mandatory; palpate entire pancreas; drain always placed; pancreatic fistula risk 30%"},
      {name:"Distal pancreatectomy (± splenectomy)", when:"Body/tail insulinoma; multiple tumors in body/tail; duct proximity", notes:"Laparoscopic preferred; spleen preserved if possible"},
      {name:"Whipple (PPPD)", when:"Head insulinoma adherent to PD; unable to safely enucleate", notes:"Higher morbidity — avoid if enucleation feasible"},
      {name:"Total pancreatectomy", when:"MEN1 with multiple insulinomas; diffuse disease", notes:"Permanent brittle diabetes; rarely first choice"}
    ]
  },
  technique: {
    title: "Intraoperative Ultrasound (IOUS) for Insulinoma",
    prep: [
      "Glucose infusion running intraoperatively to prevent hypoglycemia",
      "Expose entire pancreas: divide gastrocolic ligament, Kocherize head, mobilize spleen/distal pancreas",
      "High-frequency (7.5–10MHz) intraoperative ultrasound probe"
    ],
    steps: [
      {n:1, t:"Systematic palpation", d:"Palpate entire pancreas surface — insulinomas are often firm hypervascular nodules"},
      {n:2, t:"IOUS scan", d:"Scan systematically from head to tail; insulinoma appears hypoechoic, well-defined, hypervascular on Doppler"},
      {n:3, t:"Duct relationship", d:"Define relationship of tumor to main pancreatic duct — critical for planning enucleation vs resection"},
      {n:4, t:"Enucleation", d:"If confirmed >3mm from duct: blunt enucleation with hemostatic technique; avoid PD injury"},
      {n:5, t:"IOP glucose", d:"Check BG every 15 minutes; rise after tumor excision confirms successful resection"},
      {n:6, t:"Drain placement", d:"Always place drain near enucleation/anastomosis — pancreatic fistula common"}
    ],
    pearls: [
      "IOP glucose rise >20mg/dL after excision suggests correct tumor found",
      "If no tumor found by IOUS: ASVS pre-op to regionalise; selective PD ligation not recommended",
      "MEN1: inspect entire pancreas; multiple tumors — remove all palpable tumors, leave >20% for exocrine function"
    ]
  },
  guidelines: [
    {src:"ENETS 2022: Consensus guidelines for neuroendocrine neoplasms of the pancreas — insulinoma"},
    {src:"Endocrine Society 2018: Diagnosis and management of hypoglycemia in adults"},
    {src:"AAES: Pancreatic neuroendocrine tumor surgical guidelines"}
  ],
  pearls: [
    "EUS is the most sensitive preoperative localization test for insulinoma",
    "Intraoperative US is mandatory — 10% of insulinomas are not felt on palpation alone",
    "MEN1 insulinoma: enucleate all visible lesions + distal pancreatectomy for body/tail microtumors"
  ],
  mistakes: [
    "Not excluding factitious hypoglycemia (exogenous insulin/sulfonylurea) before 72h fast",
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
    "Diagnostic: 2 of 3 classic tumors OR 1 with known MEN1 family history",
    "Parathyroid adenomas: multigland disease (3.5-gland or 4-gland parathyroidectomy)",
    "Pancreatic NETs: gastrinoma most common (Zollinger-Ellison syndrome) → PPI ± surgery",
    "Pituitary adenoma: prolactinoma most common → dopamine agonist",
    "Annual biochemical screening from age 5 for mutation carriers"
  ],
  differentials: ["Sporadic PHPT","Sporadic pancreatic NET","Sporadic pituitary adenoma","MEN2A","MEN4 (CDKN1B mutations)","Familial isolated PHPT"],
  mnemonics: [
    {name:"MEN1 = 3 Ps", text:"Parathyroid (95%) + Pituitary (30%) + Pancreas/duodenum NETs (50%)"},
    {name:"MEN1 gene MENIN", text:"MENIN = tumor suppressor; loss → uncontrolled cell proliferation in endocrine tissues"}
  ],
  overview: {
    definition: "Autosomal dominant cancer predisposition syndrome caused by germline MENIN gene mutations, characterized by multiglandular endocrine tumors.",
    epidemiology: "1 in 30,000. MENIN gene (chromosome 11q13). Nearly 100% penetrance by age 50. Equally affects men and women.",
    pathophysiology: "MENIN = tumor suppressor (chromatin remodelling). Loss of function → uncontrolled proliferation of parathyroid, pituitary, and enteropancreatic neuroendocrine cells (two-hit hypothesis).",
    classification: [
      "Parathyroid: all 4 glands (95%); most common initial manifestation",
      "Pituitary: prolactinoma (60%), GH-oma (25%), non-functioning (15%)",
      "Pancreatic/duodenal NETs: gastrinoma (40%), insulinoma (10%), VIPoma, glucagonoma, PPoma",
      "Other: adrenal cortical tumors (40%), carcinoids, skin tumors (lipoma, angiofibroma)"
    ]
  },
  diagnosis: {
    history: [
      "Nephrolithiasis, bone disease, fatigue (PHPT — often the first manifestation)",
      "Peptic ulcer disease, diarrhea (ZES — gastrinoma)",
      "Fasting hypoglycemia (insulinoma)",
      "Headache, visual field defects (pituitary tumor)",
      "Family history MEN1 or unexplained endocrine tumors"
    ],
    examination: [
      "Band keratopathy (PHPT)",
      "Bitemporal hemianopia (pituitary tumor)",
      "Lipomata, facial angiofibromas (cutaneous MEN1 features)",
      "Features of Cushing's, acromegaly, or galactorrhea"
    ],
    investigations: [
      {name:"MENIN germline mutation testing", role:"Confirms diagnosis; guides family screening; >600 pathogenic variants"},
      {name:"Corrected serum calcium + PTH", role:"Annual screen; PHPT almost universal by age 50"},
      {name:"Fasting gastrin + secretin stimulation", role:"Gastrinoma: gastrin >1000pg/mL or >200pg/mL rise post-secretin"},
      {name:"Fasting glucose + insulin + C-peptide", role:"Insulinoma screening annually"},
      {name:"Chromogranin A + pancreatic polypeptide", role:"Tumor markers for pancreatic NETs"},
      {name:"MRI pituitary", role:"Prolactin, GH, IGF-1, ACTH if pituitary symptoms"},
      {name:"CT/MRI abdomen", role:"Pancreatic NETs; EUS most sensitive for small lesions (<1cm)"},
      {name:"68Ga-DOTATATE PET", role:"Somatostatin receptor scintigraphy for NET staging"}
    ]
  },
  criteria: {
    title: "MEN1 Diagnostic Criteria",
    items: [
      {k:"Clinical MEN1", v:"2 or more of: parathyroid adenoma(s), pituitary adenoma, pancreatic/duodenal NET"},
      {k:"Familial MEN1", v:"1 MEN1 tumor + 1st degree relative with MEN1"},
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
      {name:"Pancreatic resection for large NET or insulinoma", when:"Insulinoma: any size; non-functioning NET >2cm; glucagonoma/VIPoma any size (aggressive behavior)", notes:"Distal pancreatectomy ± enucleation of head tumors; Whipple for head; often leave duodenal gastrinoma"},
      {name:"Surgery for MEN1 gastrinoma (ZES)", when:"Controversial — gastrinomas in MEN1 often multiple, duodenal, and unresectable; surgery rarely curative", notes:"Some centers perform duodenectomy/Whipple for localized gastrinoma; cure rate <30%; PPI management preferred"},
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
      {n:2, t:"Ectopic gland search", d:"MEN1: 10% have supernumerary or ectopic glands (thymus, retroesophageal) — explore thymus via cervical approach"},
      {n:3, t:"Selection for transplant", d:"Choose smallest/most normal-appearing gland for forearm transplant"},
      {n:4, t:"Total parathyroidectomy", d:"Remove remaining 3.5 glands; frozen section to confirm parathyroid"},
      {n:5, t:"Forearm autotransplant", d:"As described in secondary HPT technique — brachioradialis pocket"},
      {n:6, t:"Cryopreservation", d:"Mince and cryopreserve additional tissue — for future reimplantation if recurrent hypocalcemia"}
    ],
    pearls: [
      "Recurrence rate after parathyroidectomy in MEN1: 50% at 10 years — lifelong follow-up",
      "Forearm autotransplant enables monitoring of PTH gradient (transplant arm vs systemic) to confirm function and detect recurrence",
      "Re-operative parathyroidectomy via forearm under local anesthetic if recurrent HPT"
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
    "MEN2A: medullary thyroid cancer + phaeochromocytoma (~50% of carriers) + PHPT (20%); codon 634 most associated with pheo + PHPT",
    "MEN2B: MTC (aggressive) + phaeochromocytoma + marfanoid + mucosal neuromas (no PHPT); RET codon 918 (M918T)",
    "RET codon map: MEN2A/FMTC exon 10 (609/611/618/620) + exon 11 (634); MEN2B 918/M918T; FMTC also 768/790/791/804",
    "Prophylactic thyroidectomy timing: MEN2B <1 year of life, MEN2A by age 5 (highest-risk RET) to age 10",
    "Pheo-first rule: if a phaeochromocytoma is present, operate on it BEFORE thyroid/parathyroid surgery",
    "RET codon determines risk category and prophylactic surgery timing"
  ],
  differentials: ["MEN1","Sporadic MTC","Familial MTC (FMTC)","VHL syndrome","NF1"],
  mnemonics: [
    {name:"MEN2A vs MEN2B", text:"MEN2A: 3 Ps — Parafollicular (MTC) + Phaeochromocytoma + Parathyroid; MEN2B: MTC + Pheo + Marfanoid + mucosal Neuromas (no Parathyroid)"}
  ],
  overview: {
    definition: "Autosomal dominant syndrome caused by gain-of-function RET proto-oncogene mutations, causing MTC (100% penetrance), phaeochromocytoma (50%), and PHPT (20% in MEN2A).",
    epidemiology: "1 in 30,000–40,000. RET gene (chromosome 10q11.2). MEN2A (80%), MEN2B (15%), FMTC (5%).",
    pathophysiology: "RET (chromosome 10) = receptor tyrosine kinase binding GDNF/neurturin. Gain-of-function mutation → constitutive activation → C-cell and chromaffin cell proliferation; somatic RET mutations occur in ~30% of sporadic MTC and phaeochromocytomas. C-cell hyperplasia is the premalignant precursor. ~10% of familial MTC/MEN2A cases arise from de novo RET mutations.",
    classification: [
      "MEN2A (Sipple syndrome): MTC + phaeochromocytoma (~50%) + PHPT (20%); may have cutaneous lichen amyloidosis; codons 609/618/620 associated with Hirschsprung disease",
      "MEN2B: MTC (most aggressive, early onset) + phaeochromocytoma + mucocutaneous ganglioneuromatosis (mucosal neuromas) + marfanoid + intestinal ganglioneuromatosis (codon 918/M918T)",
      "Familial MTC (FMTC): MTC only, no phaeochromocytoma",
      "RET risk categories: Highest (C634, M918T) → High (C609-611-618-620, C630-634) → Moderate (all others)"
    ]
  },
  diagnosis: {
    history: [
      "Neck mass (MTC — painless)",
      "Diarrhea (calcitonin secretion — functional marker of tumor burden)",
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
      {name:"RET gene sequencing", role:"All MTC patients; confirms diagnosis, determines risk category, guides prophylactic surgery timing; has largely replaced pentagastrin/calcium-stimulated calcitonin testing"},
      {name:"Serum calcitonin", role:"Most sensitive marker for MTC; elevated in C-cell hyperplasia and MTC; annual surveillance"},
      {name:"Stimulated calcitonin (pentagastrin/Ca²⁺ test)", role:"Historic test for early C-cell hyperplasia; superseded by RET testing"},
      {name:"CEA", role:"Elevated in MTC; poor prognosis if very elevated; combined with calcitonin"},
      {name:"24h urine metadrenalines/plasma metadrenalines", role:"Exclude phaeochromocytoma before ALL surgeries — biochemical not imaging"},
      {name:"Corrected calcium + PTH", role:"PHPT workup (MEN2A)"},
      {name:"CT neck/chest/abdomen + MRI liver", role:"Staging for MTC; identify nodal and distant metastases"},
      {name:"DOPA-PET or MIBG + 68Ga-DOTATATE", role:"Metastatic MTC localization"}
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
      {name:"Total thyroidectomy + bilateral prophylactic central (level VI) node dissection", when:"Established MTC (calcitonin elevated, palpable disease) — MTC is >50% bilateral/multicentric", notes:"Exclude phaeochromocytoma first; meticulous parathyroid preservation; add lateral neck dissection (levels IIA/III/IV/V) if nodes positive; calcitonin >500 pg/mL prompts extended imaging"},
      {name:"Laparoscopic adrenalectomy for phaeochromocytoma", when:"Pheo-first rule: operate on the phaeochromocytoma BEFORE thyroid/parathyroid surgery when concurrent", notes:"Cortical-sparing adrenalectomy in bilateral disease; alpha-blockade mandatory; MEN2 = bilateral phaeochromocytoma risk (rarely malignant)"},
      {name:"Parathyroidectomy for PHPT in MEN2A", when:"Symptomatic PHPT or meets asymptomatic criteria — treat at the time of thyroidectomy", notes:"Often single adenoma (unlike MEN1 which is multiglandular); focused approach ± intraoperative PTH"}
    ]
  },
  technique: {
    title: "Prophylactic Total Thyroidectomy in Child with MEN2B",
    prep: [
      "Exclude phaeochromocytoma biochemically before induction",
      "Pediatric anesthesia team",
      "Plan parathyroid autotransplant in all 4 glands in young children (safest approach)"
    ],
    steps: [
      {n:1, t:"Small Kocher incision", d:"Pediatric: 3–4cm; magnification (loupes) essential for small structures"},
      {n:2, t:"Strap muscles", d:"Divide midline raphe; retract strap muscles laterally"},
      {n:3, t:"Total thyroidectomy", d:"Meticulous RLN identification (bilateral); superior pedicle ligation close to capsule (preserve SLN external branch)"},
      {n:4, t:"Parathyroid identification", d:"All 4 parathyroids identified; preserve vascular pedicles where possible; if devascularized → auto-transplant"},
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
    "Single adenoma resection for MEN2A PHPT without recognizing multigland risk",
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
    "Most common: puerperal (lactational) — S. aureus AND Streptococcus (staph → localized/deep abscess, strep → diffuse superficial cellulitis)",
    "Non-puerperal: subareolar (Zuska's disease) — mixed/anaerobic organisms, smokers",
    "Sporadic puerperal mastitis: antibiotics + breast emptying give a satisfactory outcome in >95% of cases",
    "Incision and drainage: large (>3cm) or failed aspiration",
    "Continue breastfeeding in sporadic/mild puerperal disease — but STOP in epidemic MRSA puerperal mastitis"
  ],
  differentials: ["Inflammatory breast carcinoma","Mastitis without abscess","Galactocele","Sebaceous cyst","Mondor's disease (superficial thrombophlebitis)","Mycotic abscess (blastomycosis/sporotrichosis, peri-areolar, from suckling infant)","Hidradenitis suppurativa (Montgomery/axillary glands — mimics Paget/cancer)"],
  mnemonics: [
    {name:"Abscess types", text:"Puerperal = Lactation + S. aureus; Periductal = Non-lactating + Smoker + Zuska's = mixed organisms"}
  ],
  overview: {
    definition: "Localized collection of pus within breast parenchyma, most commonly arising from mastitis progression in lactating women or periductal mastitis in non-lactating.",
    epidemiology: "Lactational abscess: 0.1–3% breastfeeding women. Peak: 2nd–3rd week postpartum. Sporadic (nonepidemic) puerperal mastitis is the usual form. Epidemic puerperal mastitis = virulent MRSA transmitted via the suckling neonate, with substantial morbidity and occasional mortality. Non-lactational: subareolar (Zuska disease), peripheral (immunosuppressed, diabetes).",
    pathophysiology: "Lactational: S. aureus or Streptococcus colonizes nipple → ascending ductal infection → mastitis → abscess. Non-lactational: periductal mastitis → squamous metaplasia → abscess. MRSA increasingly prevalent.",
    classification: [
      "Puerperal (lactational) — sporadic vs epidemic MRSA",
      "Anatomic spread of staphylococcal infection: subcutaneous, subareolar, interlobular (periductal), retromammary — unicentric or multicentric",
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
      "Tender fluctuant breast lump with overlying erythema and edema",
      "Nipple discharge (pus from duct in periductal abscess)",
      "Systemic features: pyrexia, tachycardia",
      "Check for skin necrosis (necrotizing infection rare but serious)"
    ],
    investigations: [
      {name:"Ultrasound breast", role:"Confirms abscess (hypoechoic loculated collection with posterior enhancement); guides aspiration; rules out malignancy"},
      {name:"CBC, CRP", role:"Leukocytosis; CRP elevated — assess severity"},
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
      "Clindamycin: penicillin-allergic patients",
      "Non-lactational: send culture in transport medium for anaerobes; empiric polymicrobial cover while awaiting results"
    ],
    surgical: [
      {name:"Ultrasound-guided needle aspiration", when:"First line for abscesses <3cm; can be repeated ×2–3; 90% success rate", notes:"18–16G needle; aspirate pus to dryness; send for MC&S; repeat US at 48–72h to confirm resolution"},
      {name:"Incision and drainage (I&D)", when:"Large abscess >3cm; failed aspiration; skin necrosis; multiloculated; patient systemically unwell", notes:"Radial or circumareolar incision; thorough cavity washout; break down loculations; loosely pack with ribbon gauze; daily dressing changes"},
      {name:"Fistulectomy vs total duct excision (recurrent subareolar / Zuska's sepsis)", when:"Recurrent non-puerperal periductal abscess", notes:"Fistulectomy if disease small/one segment, mild nipple inversion, younger, no prior operation. Total duct excision (Hadfield) if >50% of areolar circumference involved, marked nipple inversion, multiple ectatic ducts, or recurrence after prior fistulectomy. Smoking cessation essential"}
    ]
  },
  technique: {
    title: "Incision and Drainage of Breast Abscess",
    prep: [
      "GA or local anesthesia",
      "US guidance ideally to confirm location",
      "Position: supine, arm extended"
    ],
    steps: [
      {n:1, t:"Incision", d:"Radial incision over most superficial/dependent part of abscess; circumareolar if subareolar"},
      {n:2, t:"Cavity entry", d:"Blunt hemostat into abscess cavity; collect pus for MC&S"},
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
    {src:"ABM Clinical Protocol #36: Abscess and mastitis in breastfeeding"},
    {src:"Dixon JM. Outpatient treatment of non-lactational breast abscesses. Br J Surg (1992)"},
    {src:"Mansel & Webster, Benign Disorders and Diseases of the Breast"}
  ],
  pearls: [
    "US-guided aspiration avoids scar and GA — always try before open I&D in small abscesses",
    "Inflammatory breast cancer can mimic mastitis/abscess — if no response to antibiotics in 2 weeks, biopsy the abscess cavity wall",
    "Continuing breastfeeding is safe in sporadic/mild puerperal disease — but STOP breastfeeding in epidemic MRSA puerperal mastitis"
  ],
  mistakes: [
    "Open I&D as first line for small abscess — US aspiration preferred (better cosmesis, equally effective)",
    "Not excluding inflammatory carcinoma in non-lactating women — delayed diagnosis",
    "Forgetting Zuska's disease management requires duct excision — aspiration/I&D alone → recurrence"
  ]
},
{
  id: "mivat", dept: "endocrine",
  name: "Minimally Invasive Video-Assisted Thyroidectomy (MIVAT)",
  latin: "Thyroidectomia videoadiuvata minime invasiva",
  organ: "Thyroid gland",
  severity: "moderate",
  tags: ["thyroid","MIVAT","video-assisted","minimally invasive","endocrine","cosmesis"],
  hero: "A small (~1.5–2 cm) central-neck incision through which a thyroid lobe is removed under endoscopic magnification with gasless retraction — the best-validated minimal-access thyroidectomy for small, low-risk glands.",
  keypoints: [
    "A minimal-access, gasless technique done through a single tiny central incision with a 30° endoscope for magnified vision — not the same as a remote-access (axillary/transoral) approach that hides the scar elsewhere",
    "Strict selection is what makes it safe: small gland (thyroid volume < ~25 mL), small nodule (< ~35 mm), no thyroiditis, no prior neck surgery/irradiation, and a benign or low-risk small papillary cancer",
    "Endoscopic magnification actually improves identification of the recurrent laryngeal nerve and parathyroids compared with the naked eye in a small field",
    "Delivers better cosmesis, less postoperative pain and faster recovery than conventional thyroidectomy, with equivalent complication rates in trained hands",
    "Conversion to a conventional collar incision is a sensible outcome, not a failure, if the gland is larger/more adherent than expected",
    "Not suitable for large multinodular goitres, Graves', substantial substernal extension or bulky/aggressive cancer — those need conventional or open extended surgery"
  ],
  differentials: [
    "Conventional (open Kocher collar) thyroidectomy — the reference standard; no size limit, larger scar",
    "Remote-access endoscopic thyroidectomy (transaxillary, BABA, transoral TOETVA) — moves the scar off the neck; longer dissection, different risk profile",
    "Robotic thyroidectomy — a remote-access variant using a robot; high cost",
    "Radiofrequency/ablation of benign nodules — non-surgical alternative for selected benign nodules",
    "Active surveillance — for very low-risk papillary microcarcinoma in appropriate patients"
  ],
  overview: {
    definition: "A minimally invasive thyroidectomy performed through a single small (~1.5–2 cm) central cervical incision using endoscopic visualisation and external (gasless) retraction, keeping the operation in the anatomical central-neck plane while reducing incision length.",
    epidemiology: "Developed by Miccoli and colleagues; the most extensively validated minimal-access thyroidectomy, used electively in high-volume endocrine units for carefully selected small, low-risk glands.",
    pathophysiology: "For small benign or low-risk thyroid disease the morbidity of conventional surgery is driven partly by the incision and tissue handling. A short central incision with endoscopic magnification allows the same central-compartment dissection — controlling the superior/inferior thyroid vessels and protecting the recurrent laryngeal nerve and parathyroids — with less trauma and a smaller scar, provided the gland is small enough to deliver through the tiny opening.",
    classification: [
      {label:"Central minimal-access (MIVAT)", note:"Single small central incision, gasless, endoscope-assisted — the technique described here"},
      {label:"Remote-access (transaxillary/BABA)", note:"Incision moved to axilla/breast to avoid a neck scar — a different, longer approach"},
      {label:"Transoral (TOETVA)", note:"Scarless, via a lower-lip vestibular approach — an alternative remote-access route"},
      {label:"Extent", note:"Applicable to lobectomy or, in selected cases, total thyroidectomy"}
    ]
  },
  criteria: {
    title: "Selection Criteria & Limits",
    items: [
      { k: "Gland/nodule size", v: "Thyroid volume < ~25–30 mL and dominant nodule < ~35 mm — the incision cannot deliver a larger gland" },
      { k: "Pathology", v: "Benign nodule, indeterminate nodule for diagnostic lobectomy, or low-risk small (< ~20 mm) papillary carcinoma without extrathyroidal spread or nodal disease" },
      { k: "Contraindications", v: "Thyroiditis (Hashimoto/Graves), previous neck surgery or irradiation, substernal/substantial goitre, bulky or aggressive malignancy, lateral nodal disease" },
      { k: "Conversion trigger", v: "Unexpected size, adhesions, bleeding or nerve concern → convert to conventional collar incision (a judgement, not a complication)" },
      { k: "Benefit profile", v: "Better cosmesis, less pain, quicker recovery; complication rates equivalent to open when selection is respected" }
    ]
  },
  technique: {
    title: "MIVAT — Endoscope-Assisted Lobectomy",
    prep: [
      "US ± FNA to confirm size and benign/low-risk cytology; laryngoscopy to document baseline cord function",
      "Supine, neck slightly extended (less hyperextension than open); no CO₂ insufflation (gasless)",
      "Set up a 30° 5 mm endoscope, small retractors and energy device"
    ],
    steps: [
      { n: 1, t: "Small central incision", d: "~1.5–2 cm incision ~2 cm above the sternal notch; divide the linea alba between strap muscles" },
      { n: 2, t: "Create the space", d: "Retract the strap muscles laterally with external retractors (gasless) and introduce the endoscope for a magnified view of the thyroid lobe" },
      { n: 3, t: "Divide the superior pedicle", d: "Under endoscopic magnification, seal and divide the superior thyroid vessels close to the gland, protecting the external branch of the superior laryngeal nerve" },
      { n: 4, t: "Identify RLN & parathyroids", d: "Use magnification to trace the recurrent laryngeal nerve and preserve the parathyroids with their blood supply (± intra-operative nerve monitoring)" },
      { n: 5, t: "Mobilise & deliver", d: "Divide the middle and inferior vessels, free the lobe from the trachea and deliver it through the incision under direct vision" },
      { n: 6, t: "Haemostasis & closure", d: "Confirm haemostasis, check cords/parathyroids, and close the strap muscles and skin for an inconspicuous scar" }
    ],
    pearls: [
      "Respect the selection limits absolutely — MIVAT is safe because of who you choose, not because of the instruments",
      "Use the magnification to your advantage: RLN and parathyroid identification is often better than with the naked eye in a small field",
      "Convert early and without ego if the gland is bigger or more adherent than the scans suggested"
    ]
  },
  guidelines: [
    { src: "Miccoli et al. — original MIVAT technique and outcome series" },
    { src: "ETA / AAES — statements on minimally invasive and remote-access thyroidectomy selection" },
    { src: "British Association of Endocrine & Thyroid Surgeons (BAETS) standards" }
  ],
  pearls: [
    "MIVAT keeps the operation in the normal central plane — it shortens the scar without lengthening the dissection the way remote-access routes do",
    "Equivalent safety to open surgery depends entirely on strict patient selection",
    "Endoscopic magnification is a genuine oncological/safety aid, not just a cosmetic gimmick"
  ],
  mistakes: [
    "Attempting MIVAT on a large goitre, Graves' or a previously operated/irradiated neck — the classic selection error",
    "Persisting with the minimal-access approach when conversion is clearly the safer course",
    "Under-appreciating superior laryngeal nerve injury during pedicle division despite the magnified view",
    "Treating bulky or nodal-positive cancer with a technique that cannot deliver an adequate compartment clearance"
  ],
  related: [
    { id: "thyroid-ca", note: "Selected small, low-risk papillary cancers are eligible for MIVAT" },
    { id: "mng",        note: "Large multinodular goitre is a contraindication — needs conventional surgery" },
    { id: "graves",     note: "Thyroiditis/Graves' precludes MIVAT" },
    { id: "phpt",       note: "The same minimal-access, endoscope-assisted philosophy is applied to parathyroidectomy" }
  ]
},
{
  id: "nipple-sparing-mastectomy", dept: "endocrine",
  name: "Nipple-Sparing Mastectomy",
  latin: "Mastectomia conservans complexum areolo-papillarem",
  organ: "Breast",
  severity: "high",
  tags: ["breast","mastectomy","nipple-sparing","oncoplastic","reconstruction","risk-reducing"],
  hero: "Total removal of the breast parenchyma while preserving the entire skin envelope AND the nipple-areola complex — the most cosmetically favourable mastectomy, for the right tumour and the right breast.",
  keypoints: [
    "Removes all breast tissue but keeps the whole skin envelope and the nipple-areola complex (NAC), giving the best reconstructive cosmesis of any mastectomy",
    "Two main uses: risk-reducing mastectomy in high-risk women (e.g. BRCA carriers) and selected breast cancers that are not close to the nipple",
    "The oncological crux is the retroareolar (sub-nipple) margin — a frozen-section or defined-margin biopsy from behind the nipple must be tumour-free; a positive result mandates excising the NAC",
    "Selection favours a peripheral tumour ≥ ~2 cm from the nipple, no clinical/radiological nipple involvement, no inflammatory cancer and no skin involvement",
    "NAC necrosis is the signature complication — driven by incision choice, flap thickness and smoking; an inframammary or lateral radial incision preserves nipple blood supply better than a periareolar one",
    "Immediate reconstruction (implant or autologous) is the norm because the preserved envelope and nipple only pay off with a well-supported mound"
  ],
  differentials: [
    "Skin-sparing mastectomy — preserves the skin envelope but removes the NAC (used when the nipple is involved/too close)",
    "Simple (total) mastectomy — removes breast, NAC and excess skin; no immediate reconstruction assumed",
    "Modified radical mastectomy — total mastectomy plus axillary clearance for node-positive disease",
    "Breast-conserving surgery (wide local excision) + radiotherapy — for suitable single tumours; preserves most of the breast",
    "Risk-reducing surgery vs surveillance/chemoprevention — the non-surgical alternative in high-risk women"
  ],
  overview: {
    definition: "A mastectomy that excises the entire breast parenchyma while preserving the skin envelope and the nipple-areola complex, almost always combined with immediate reconstruction, performed for risk reduction or for appropriately selected breast cancer.",
    epidemiology: "Increasingly offered as reconstructive techniques and oncological evidence have matured; particularly common in BRCA1/2 and other high-risk carriers undergoing bilateral risk-reducing surgery.",
    pathophysiology: "The residual cancer risk after mastectomy comes from breast tissue left behind, including ducts within the nipple. Preserving the NAC therefore requires that the retroareolar ducts be free of tumour (assessed by intra-operative margin sampling) and that the case be selected so occult nipple involvement is unlikely. Nipple viability depends on the dermal and subdermal plexus, so incision placement and flap thickness determine the risk of NAC ischaemia and necrosis.",
    classification: [
      {label:"Indication — risk-reducing", note:"Prophylactic (e.g. BRCA carriers); bilateral, with the lowest oncological constraint on nipple preservation"},
      {label:"Indication — therapeutic", note:"Selected cancer ≥ ~2 cm from the nipple, no NAC/skin involvement, not inflammatory"},
      {label:"Incision", note:"Inframammary or lateral radial preferred for nipple perfusion; periareolar carries higher NAC-necrosis risk"},
      {label:"Reconstruction", note:"Immediate implant-based (pre-/subpectoral) or autologous (e.g. DIEP) under the preserved envelope"}
    ]
  },
  criteria: {
    title: "Patient/Tumour Selection & Margin Rule",
    items: [
      { k: "Oncological eligibility", v: "Peripheral tumour ≥ ~2 cm from the nipple, no clinical/imaging nipple involvement, no skin involvement, not inflammatory; or a risk-reducing indication" },
      { k: "Retroareolar margin", v: "Intra-operative sub-nipple (retroareolar) biopsy must be tumour-free — a positive margin means excising the NAC and converting to skin-sparing" },
      { k: "Perfusion risk factors", v: "Smoking, prior radiotherapy, very large/ptotic breast, periareolar incision and thin flaps all raise NAC-necrosis risk" },
      { k: "Reconstruction plan", v: "Immediate reconstruction (implant or autologous) is standard to fill the preserved envelope" },
      { k: "Contraindications", v: "Nipple discharge/Paget's, tumour <2 cm from or involving the nipple, inflammatory carcinoma, extensive skin involvement" }
    ]
  },
  technique: {
    title: "Nipple-Sparing Mastectomy with Immediate Reconstruction",
    prep: [
      "MRI/US to confirm tumour-to-nipple distance and exclude nipple involvement; multidisciplinary and reconstructive planning",
      "Mark the incision (inframammary or lateral radial preferred) and counsel on NAC-necrosis and sensory-loss risk",
      "Supine with arm abducted; joint oncoplastic/plastics team where reconstruction is complex"
    ],
    steps: [
      { n: 1, t: "Incision & flaps", d: "Through the chosen incision, raise skin flaps in the subcutaneous plane at an even, oncologically safe thickness, preserving the subdermal plexus that feeds the nipple" },
      { n: 2, t: "Retroareolar sampling", d: "Core out the tissue directly beneath the nipple and send it for frozen-section/defined margin — proceed only if tumour-free" },
      { n: 3, t: "Complete the mastectomy", d: "Dissect the breast parenchyma off the pectoral fascia, removing all glandular tissue while keeping the envelope and NAC" },
      { n: 4, t: "Axillary staging", d: "Perform sentinel lymph node biopsy (or clearance if node-positive) for cancer cases" },
      { n: 5, t: "Reconstruct", d: "Immediate reconstruction — pre-/subpectoral implant ± mesh, or autologous flap (e.g. DIEP) — to support the preserved skin and nipple" },
      { n: 6, t: "Assess NAC perfusion", d: "Check nipple viability (clinical ± ICG angiography); close over a drain and monitor the flap and NAC postoperatively" }
    ],
    pearls: [
      "The retroareolar margin decides whether the nipple can stay — never keep a NAC with a positive sub-nipple biopsy",
      "Incision choice is a perfusion decision: inframammary/lateral radial protect the nipple far better than periareolar",
      "Even, adequate flap thickness balances oncological safety against NAC/skin necrosis — too thin devascularises, too thick leaves breast tissue"
    ]
  },
  guidelines: [
    { src: "NCCN / ASBrS — breast cancer surgery and nipple-sparing mastectomy selection" },
    { src: "NICE / ABS (Association of Breast Surgery) — early breast cancer and risk-reducing surgery" },
    { src: "NICE CG164 — familial breast cancer risk management (BRCA)" }
  ],
  pearls: [
    "Nipple-sparing mastectomy gives the best cosmetic result of any mastectomy — but only when the retroareolar margin and tumour position allow it",
    "It is the operation of choice for many risk-reducing (BRCA) cases where there is no tumour constraining nipple preservation",
    "Warn patients the preserved nipple usually loses sensation and may not respond as before"
  ],
  mistakes: [
    "Preserving the NAC despite a positive retroareolar margin or clinical nipple involvement — leaves disease behind",
    "Using a periareolar incision or over-thin flaps in a smoker — predictable nipple necrosis",
    "Offering it for inflammatory or skin-involving cancer",
    "Failing to plan immediate reconstruction, wasting the preserved skin/nipple envelope"
  ],
  related: [
    { id: "breast-ca", note: "The therapeutic indication — selected cancers away from the nipple" },
    { id: "dcis",      note: "Extensive DCIS may require mastectomy; NAC preservation depends on nipple/retroareolar involvement" },
    { id: "men1",      note: "Genetic/high-risk context parallels BRCA risk-reducing surgery decision-making" }
  ]
}
];
