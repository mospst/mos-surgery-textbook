// ENDOCRINE BATCH 1 — IDs: breast-ca, dcis, phyllodes, thyroid-ca, graves, mng, phpt, shpt
const ENDOCRINE_DISEASES_1 = [
{
  id: "breast-ca",
  dept: "endocrine",
  name: "Breast Cancer",
  latin: "Carcinoma mammae",
  organ: "Breast",
  severity: "high",
  tags: ["oncology","breast","common"],
  hero: "Most common cancer in women. Surgical management pivotal alongside systemic and radiation therapy.",
  keypoints: [
    "Triple assessment: clinical + imaging + histology",
    "Sentinel lymph node biopsy (SLNB) is standard for clinically node-negative disease",
    "BCS + radiotherapy equivalent to mastectomy in early disease",
    "Neoadjuvant therapy converts inoperable → operable and allows BCS",
    "BRCA1/2 mutation → consider risk-reducing mastectomy"
  ],
  differentials: ["Fibroadenoma","Fibrocystic change","Phyllodes tumor","Fat necrosis","Abscess","Lipoma","Metastasis"],
  mnemonics: [
    {name:"Triple Assessment", text:"C-I-H: Clinical + Imaging (US/MMG) + Histology (core biopsy)"},
    {name:"TNM Stage I–IV", text:"I: <2cm N0; II: 2–5cm or N1; III: locally advanced; IV: metastatic"}
  ],
  overview: {
    definition: "Malignant neoplasm arising from breast epithelium; 80% invasive ductal carcinoma (IDC-NST), 10% invasive lobular (ILC).",
    epidemiology: "1 in 8 lifetime risk in women. Peak incidence 50–70 yrs. Leading cause of cancer death in women <50.",
    pathophysiology: "Hormone-driven proliferation (ER/PR+), HER2 overexpression, or triple-negative (TNBC). BRCA1/2 mutations impair DNA repair. 5 intrinsic molecular subtypes drive local + systemic decisions.",
    classification: [
      "Histology: IDC-NST 80%, ILC 10%, medullary 4%, mucinous/papillary/tubular each ~2%",
      "IDC-NST: nodal +ve up to 25% screen-detected, up to 60% symptomatic",
      "ILC – multifocal, bilateral risk",
      "DCIS – non-invasive precursor (LCIS removed from AJCC 8th staging)",
      "Inflammatory – dermal lymphatic invasion (T4d)",
      "Paget disease – chronic eczematous nipple; underlying DCIS ± invasion; CEA+ (vs S-100+ melanoma)",
      "Molecular subtypes: Luminal A (ER+/low Ki67, best prognosis), Luminal B, HER2-enriched, Basal-like/TNBC, Normal-like"
    ]
  },
  diagnosis: {
    history: [
      "Painless lump (most common presentation)",
      "Nipple discharge (blood-stained suspicious)",
      "Nipple inversion, skin changes (peau d'orange, tethering)",
      "Family history BRCA, previous chest radiation",
      "Axillary lymphadenopathy",
      "Bone pain, dyspnea, hepatomegaly (metastatic)"
    ],
    examination: [
      "Inspect: asymmetry, skin dimpling, nipple changes",
      "Palpate lump: hard, irregular, fixed, non-tender",
      "Axillary, supraclavicular, infraclavicular nodes",
      "Liver size, spinal tenderness (metastatic)"
    ],
    investigations: [
      {name:"Bilateral mammography", role:"First-line imaging >35 yrs; microcalcifications suggest DCIS"},
      {name:"Ultrasound breast", role:"<35 yrs or dense breasts; characterize mass; guide biopsy"},
      {name:"MRI breast", role:"BRCA carriers, lobular cancers, implants, pre-op planning"},
      {name:"Core needle biopsy", role:"Histology + ER/PR/HER2 + Ki67 — mandatory before surgery"},
      {name:"Staging CT CAP", role:"If locally advanced or suspicious metastatic features"},
      {name:"Bone scan / PET-CT", role:"Symptomatic bone disease or stage III+"},
      {name:"BRCA1/2 testing", role:"Young (<45), bilateral, family history, TNBC"}
    ]
  },
  criteria: {
    title: "AJCC 8th ed TNM (anatomic)",
    items: [
      {k:"T1", v:"T1mi ≤1mm; T1a >1–5mm; T1b >5–10mm; T1c >10–20mm"},
      {k:"T2 / T3", v:"T2 >20–50mm; T3 >50mm"},
      {k:"T4", v:"T4a chest wall; T4b skin ulceration/peau d'orange; T4c both; T4d inflammatory"},
      {k:"N1mi", v:"Micrometastasis ~200 cells / >0.2–2mm"},
      {k:"Nottingham grade (SBR)", v:"Tubules + pleomorphism + mitoses (each 1–3): G1 3–5, G2 6–7, G3 8–9"}
    ]
  },
  scoring: [
    {name:"AJCC 8th ed Anatomic Stage Grouping", items:[
      "Stage 0: Tis N0 (DCIS)",
      "IA: T1 N0; IB: T0–1 N1mi",
      "IIA: T0–1 N1 or T2 N0; IIB: T2 N1 or T3 N0",
      "IIIA: N2 disease or T3 N1; IIIB: T4 N0–2; IIIC: any T N3",
      "IV: M1. Prognostic staging additionally incorporates grade + ER/PR/HER2"
    ]}
  ],
  management: {
    conservative: [
      "Multidisciplinary team (MDT) decision mandatory",
      "Neoadjuvant chemotherapy for HER2+, TNBC, large tumors",
      "Neoadjuvant endocrine therapy for ER+ postmenopausal",
      "Annual surveillance mammography post-treatment"
    ],
    medical: [
      "Adjuvant chemotherapy: anthracycline/taxane regimens (AC-T)",
      "Test HER2 by IHC or FISH; trastuzumab + chemo → 40–50% reduction in recurrence, ~⅓ reduction in mortality vs chemo alone",
      "Trastuzumab (Herceptin) × 12 months if HER2+",
      "Tamoxifen 5–10 yrs (premenopausal ER+) or aromatase inhibitor (postmenopausal)",
      "CDK4/6 inhibitors (palbociclib) for metastatic luminal",
      "Olaparib for BRCA-mutated metastatic"
    ],
    surgical: [
      {name:"Breast-conserving surgery (BCS)", when:"Early disease (T1–2, favorable location)", notes:"Invasive margin = 'no ink on tumor' (SSO-ASTRO); wider margins do not lower recurrence. Adjuvant whole-breast RT mandatory"},
      {name:"Mastectomy (simple/modified radical/skin- or nipple-sparing)", when:"Large tumor, multifocal, patient preference, BRCA, post-BCS re-excision failure; BCT contraindications", notes:"BCT absolute CI: prior chest/breast RT, persistent +margins after re-excision, multicentric, scleroderma/SLE (BRCA relative). Skin-/nipple-sparing a poor candidate if postmastectomy RT planned"},
      {name:"Sentinel lymph node biopsy (SLNB)", when:"Clinically/radiologically node-negative — standard of care", notes:"Dual technique (blue dye + radioisotope). SLNB alone acceptable if 1–2 +nodes, T1-2 cN0, BCS + whole-breast RT, no neoadjuvant — ACOSOG Z0011"},
      {name:"Axillary lymph node dissection (ALND)", when:"Positive SLNB (selected patients), inflammatory breast cancer, clinically node-positive pre-treatment", notes:"Levels I–III; risks: lymphedema, nerve injury, seroma"},
      {name:"Immediate breast reconstruction", when:"Post-mastectomy if patient desires; oncoplastic BCS for moderate defects", notes:"Implant (tissue expander → implant) or autologous (TRAM, DIEP, latissimus dorsi)"},
      {name:"Risk-reducing mastectomy", when:"BRCA1/2 carriers, >30% lifetime risk", notes:"Reduces risk ~95%; bilateral with/without reconstruction"}
    ]
  },
  technique: {
    title: "Sentinel Lymph Node Biopsy (SLNB)",
    prep: [
      "Inject radioisotope (99mTc nanocolloid) periareolar, previous day",
      "Lymphoscintigraphy to map drainage",
      "Intraoperative: inject Patent Blue V periareolar at induction"
    ],
    steps: [
      {n:1, t:"Incision", d:"Oblique incision in lower axillary hairline over area of gamma probe activity"},
      {n:2, t:"Dissection", d:"Follow blue-stained lymphatics to blue and/or hot node"},
      {n:3, t:"Node identification", d:"Count ex vivo with gamma probe: >10% of hottest node = SLN"},
      {n:4, t:"Excision", d:"Remove all blue + hot nodes (usually 1–3); clip remaining lymphatics"},
      {n:5, t:"Pathology", d:"Intraoperative touch imprint or frozen section (some centers); formal H&E ± IHC"},
      {n:6, t:"Decision", d:"If macro-metastasis: proceed to ALND or plan axillary RT per protocol"}
    ],
    pearls: [
      "Dual technique (isotope + blue dye) improves detection rate to >95%",
      "If no SLN found: low axillary dissection to level I",
      "Z0011: OS 91.9% (ALND) vs 92.5% (SLN-only), no difference at 10yr; lymphedema 13% vs 2% — ALND may be omitted if 1–2 +SLN with BCS + whole-breast RT",
      "IBCSG 23-01: ALND may be omitted for SLN micrometastases (companion to Z0011)"
    ]
  },
  guidelines: [
    {src:"NICE NG101: Early and locally advanced breast cancer diagnosis and management"},
    {src:"St Gallen Consensus 2023: Primary therapy of early breast cancer"},
    {src:"ASCO/SSO: SLNB for early-stage breast cancer guidelines"},
    {src:"NCCN Breast Cancer v4.2024"},
    {src:"AJCC Cancer Staging Manual, 8th ed (2017)"},
    {src:"SSO-ASTRO margins consensus (invasive: 'no ink on tumor')"},
    {src:"ACOSOG Z0011 / Z0010; NSABP B-32; IBCSG 23-01; ALMANAC"}
  ],
  pearls: [
    "Palpable lump in woman >35 → mammogram + ultrasound + core biopsy (triple assessment)",
    "DCIS management: BCS + RT or mastectomy; no SLNB unless mastectomy/high-risk DCIS",
    "Occult primary (axillary met, no breast mass): MRI + biopsy → treat as stage II breast cancer",
    "Inflammatory breast cancer: neoadjuvant chemo → mastectomy (NOT BCS) → RT",
    "Paget disease: chronic eczematous nipple with underlying DCIS ± invasion; CEA+ (vs S-100+ melanoma); lumpectomy or mastectomy per extent",
    "Lymphedema risk after ALND: lifelong; patient education critical"
  ],
  mistakes: [
    "Performing BCS without ensuring clear margins — re-excision or mastectomy required",
    "Forgetting adjuvant RT after BCS — significantly increases local recurrence if omitted",
    "SLNB in previously axillary-operated patients — lymphatic mapping unreliable",
    "Missing synchronous contralateral breast cancer — always image bilateral",
    "Omitting oncoplastic planning for large excisions — poor cosmetic outcome"
  ]
},
{
  id: "dcis",
  dept: "endocrine",
  name: "DCIS",
  latin: "Carcinoma ductale in situ",
  organ: "Breast",
  severity: "moderate",
  tags: ["oncology","breast","pre-invasive"],
  hero: "Non-invasive breast cancer confined to ducts. Raises subsequent invasive-cancer risk ~5-fold (ipsilateral, same quadrant) if untreated.",
  keypoints: [
    "Often detected by screening mammogram (microcalcifications)",
    "No metastatic potential while truly in situ",
    "BCS + RT is standard; mastectomy for extensive/multifocal DCIS",
    "SLNB only if mastectomy or high-grade/large DCIS (occult invasion risk)",
    "Van Nuys Prognostic Index guides treatment intensity"
  ],
  differentials: ["Invasive ductal carcinoma","Lobular carcinoma in situ (LCIS)","Atypical ductal hyperplasia","Fibrocystic change with calcification","Fat necrosis"],
  mnemonics: [
    {name:"Van Nuys Index", text:"Size + Margin + Grade + Age → low (4–6) watch, high (10–12) mastectomy"},
    {name:"DCIS vs LCIS", text:"DCIS: E-cadherin+, unilateral, microcalcifications, precursor. LCIS: E-cadherin NEGATIVE, bilateral, no imaging signs, RISK MARKER not precursor"}
  ],
  overview: {
    definition: "Clonal proliferation of malignant epithelial cells confined within ducts, with intact basement membrane. Precursor of invasive cancer.",
    epidemiology: "In-situ disease rose to ~45% of cancers after screening (14-fold rise); DCIS now >2:1 over LCIS; ~7% of all biopsy specimens.",
    pathophysiology: "Loss of cell polarity, E-cadherin preserved (unlike LCIS). Necrosis → calcification (comedo subtype). Progression requires basement membrane breach.",
    classification: [
      "Grade by nuclear grade + necrosis: low, intermediate, high",
      "Architectural progression: papillary → cribriform → solid → comedo (necrosis → Ca²⁺)",
      "Comedo-type: central necrosis, high grade, worse prognosis",
      "LCIS (distinct entity): E-cadherin NEGATIVE, risk marker not precursor, 25–35% subsequent invasive (bilateral, often ductal), removed from AJCC 8th staging; pleomorphic LCIS managed like DCIS",
      "Van Nuys Prognostic Index: size + margin + grade + age"
    ]
  },
  diagnosis: {
    history: [
      "Usually asymptomatic — screen-detected",
      "Nipple discharge (serous/blood-stained) in some",
      "Rarely palpable mass (large/comedo type)",
      "Previous atypical hyperplasia on biopsy"
    ],
    examination: [
      "Usually no palpable abnormality",
      "Nipple discharge if present",
      "Rarely: small firm area"
    ],
    investigations: [
      {name:"Mammography", role:"Characteristic pleomorphic or linear microcalcifications (ductal distribution)"},
      {name:"Ultrasound", role:"Rarely helpful unless mass lesion; used to guide biopsy"},
      {name:"MRI breast", role:"Extent assessment; non-mass enhancement in ducts"},
      {name:"Stereotactic vacuum-assisted core biopsy", role:"Standard for calcification-only lesions; wide-bore (11–14G)"},
      {name:"Clip placement at biopsy", role:"Essential to localize lesion if calcifications removed by biopsy"}
    ]
  },
  criteria: {
    title: "Excision-alone eligibility & VNPI",
    items: [
      {k:"ECOG 5194 (low/int grade)", v:"≤2.5cm + ≥3mm margin → in-breast recurrence 6.1%"},
      {k:"ECOG 5194 (high grade)", v:"≤1cm + ≥3mm margin → 15.3% (unacceptable)"},
      {k:"RTOG 9804 (good-risk)", v:"5-yr local recurrence 0.4% (RT) vs 3.2% (no RT)"},
      {k:"VNPI 4–6 / 7–9 / 10–12", v:"Excision alone / excision + RT / mastectomy"},
      {k:"VNPI parameters", v:"Size (≤15/16–40/>40mm), Margin (<1/1–9/≥10mm), Grade, Age (<40/40–60/>60)"}
    ]
  },
  scoring: [
    {name:"Oncotype DX DCIS Score", items:[
      "12-gene RT-PCR assay (derived from ECOG 5194)",
      "Stratifies low / intermediate / high recurrence risk",
      "Guides omission of radiotherapy after excision"
    ]}
  ],
  management: {
    conservative: [
      "Active surveillance (low-grade, small, elderly patient): emerging evidence from LORIS/LORD trials",
      "Annual mammography post-BCS for ≥5 years",
      "Tamoxifen reduces ipsilateral recurrence risk (both DCIS and invasive) by ~40%"
    ],
    medical: [
      "NSABP B-24: 5 yr tamoxifen significantly cut local recurrence in ER+ DCIS",
      "Tamoxifen 5 yrs (ER+, premenopausal): reduces risk of ipsilateral + contralateral events",
      "Aromatase inhibitors (anastrozole/exemestane) for postmenopausal ER+ DCIS"
    ],
    surgical: [
      {name:"Breast-conserving surgery (wide local excision)", when:"Unifocal DCIS, achievable clear margins (≥2mm for DCIS with whole-breast RT vs 'no ink on tumor' for invasive)", notes:"NSABP B-17: RT cut both invasive + non-invasive recurrence; ~45% of recurrences invasive if RT omitted. Wire/ROLL/SAVI Scout localization for impalpable lesions"},
      {name:"Mastectomy", when:"Multifocal/diffuse DCIS, inability to achieve clear margins, patient preference, BRCA mutation", notes:"Local recurrence + mortality <2% (gold standard); no ALND unless invasive component found"},
      {name:"SLNB", when:"Mastectomy for DCIS (occult invasion ~20% on final path); high-grade/large DCIS at BCS", notes:"Not routinely required for all DCIS — only if invasive upstaging likely"}
    ]
  },
  technique: {
    title: "Wire-guided / ROLL Localization for Impalpable DCIS",
    prep: [
      "Radiologist places hookwire or injects radioactive seed (ROLL) in mammographic calcifications",
      "Specimen X-ray in theater to confirm calcification excision"
    ],
    steps: [
      {n:1, t:"Incision", d:"Plan over calcification site; periareolar or radial incision for cosmesis"},
      {n:2, t:"Excision", d:"Excise tissue around wire/seed with ≥10mm margin all sides"},
      {n:3, t:"Specimen X-ray", d:"Confirm microcalcifications present and central in specimen"},
      {n:4, t:"Orientation", d:"Mark specimen with clips/sutures in ≥3 planes for pathologist"},
      {n:5, t:"Frozen section / intraop cavity shaving", d:"Some centers shave cavity margins to reduce re-excision rate"},
      {n:6, t:"Closure", d:"Consider oncoplastic reshaping if large volume excised"}
    ],
    pearls: [
      "Always send specimen X-ray — do not close without confirming calcifications in specimen",
      "ROLL technique uses gamma probe intraoperatively (same as SLNB) — dual use if concurrent SLNB",
      "Positive margins for DCIS: re-excision or completion mastectomy required"
    ]
  },
  guidelines: [
    {src:"NICE NG101: DCIS management"},
    {src:"SSO-ASTRO-ASCO Margins in DCIS 2016 guideline (2mm)"},
    {src:"NSABP B-17 (RT); NSABP B-24 (tamoxifen)"},
    {src:"ECOG 5194; RTOG 9804; Oncotype DX DCIS Score"},
    {src:"LORIS/LORD trials: active surveillance for low-risk DCIS (ongoing)"}
  ],
  pearls: [
    "DCIS raises invasive-cancer risk ~5-fold (ipsilateral, same quadrant) — it is the invasion that kills; reassure appropriately",
    "Margin adequacy critical: 2mm margin for DCIS with whole-breast RT",
    "SLNB not routinely needed for BCS DCIS — only if mastectomy or high-grade/large (occult invasion ~20% at mastectomy)",
    "LCIS is a risk marker, not a precursor: E-cadherin negative, bilateral, no imaging signs; pleomorphic LCIS managed like DCIS",
    "Paget disease of nipple: DCIS or invasive cancer in underlying ducts — requires mammography + punch biopsy of nipple"
  ],
  mistakes: [
    "Omitting specimen X-ray — cannot confirm calcifications excised",
    "Performing ALND for pure DCIS — not indicated (no invasion = no nodal spread)",
    "Failing to counsel on tamoxifen for risk reduction in ER+ DCIS",
    "Not informing patient that 'DCIS' is not 'just precancer' — requires definitive treatment"
  ]
},
{
  id: "phyllodes",
  dept: "endocrine",
  name: "Phyllodes Tumor",
  latin: "Tumor phyllodes mammae",
  organ: "Breast",
  severity: "moderate",
  tags: ["oncology","breast","rare","stromal"],
  hero: "Rare fibroepithelial tumor of breast stroma. Wide local excision with clear margins is key — malignant variant metastasises hematogenously.",
  keypoints: [
    "Classified: benign, borderline, malignant by histology; borderline carries greater local-recurrence potential",
    "Wide local excision with ≥1cm clear margins (or mastectomy if large)",
    "Axillary node dissection NOT indicated — metastases via bloodstream",
    "Malignant phyllodes: lung most common metastatic site; heterologous elements typically liposarcomatous/rhabdomyosarcomatous",
    "Stroma always monoclonal — a molecular differentiator from fibroadenoma",
    "High local recurrence risk if margins inadequate"
  ],
  differentials: ["Fibroadenoma","Breast sarcoma","Invasive breast carcinoma","Lipoma","Abscess"],
  mnemonics: [
    {name:"Phyllodes vs Fibroadenoma", text:"Phyllodes = rapidly GROWING, older woman, LEAF-like architecture; stroma always MONOCLONAL (vs fibroadenoma poly/monoclonal)"}
  ],
  overview: {
    definition: "Fibroepithelial neoplasm with biphasic epithelial and cellular stromal components in leaf-like pattern. Spectrum: benign (60%), borderline (15%), malignant (25%).",
    epidemiology: "Rare: <1% of breast neoplasms. Median age 45 yrs (older than fibroadenoma). Commonest in Asian women.",
    pathophysiology: "Stromal cells always monoclonal (diagnostic distinguisher from fibroadenoma). Usually sharply demarcated, compressing/distorting adjacent tissue; mixed gelatinous/solid/cystic (cystic areas = infarction/necrosis → leaf-like cut surface). Malignant variant = breast sarcoma with hematogenous metastasis; heterologous elements typically liposarcomatous or rhabdomyosarcomatous.",
    classification: [
      "Benign: mild stromal cellularity, <5 mitoses/10HPF, no overgrowth",
      "Borderline: moderate cellularity, 5–9 mitoses/10HPF; greater local-recurrence potential",
      "Malignant: >10 mitoses/10HPF, stromal overgrowth, heterologous (lipo-/rhabdomyosarcomatous) elements"
    ]
  },
  diagnosis: {
    history: [
      "Rapidly enlarging painless breast mass (key distinguishing feature from fibroadenoma)",
      "Large size at presentation (often >3cm)",
      "May have previous fibroadenoma (phyllodes can arise in fibroadenoma)",
      "Age >35 yrs more typical"
    ],
    examination: [
      "Smooth, mobile, bosselated (lobulated) mass",
      "Skin stretched over large mass, dilated veins",
      "Usually no axillary adenopathy"
    ],
    investigations: [
      {name:"Ultrasound", role:"Large complex mass with cystic clefts; Doppler shows vascularity"},
      {name:"Mammography", role:"Dense circumscribed mass with lobulated margins; calcifications + necrosis do NOT distinguish benign vs borderline vs malignant"},
      {name:"Core needle biopsy", role:"Mandatory — distinguishes from fibroadenoma; assess stromal cellularity"},
      {name:"CT chest", role:"Staging for malignant/borderline phyllodes (pulmonary metastases)"}
    ]
  },
  criteria: {
    title: "WHO Classification (2019)",
    items: [
      {k:"Benign", v:"Pushing margins, mild cellularity, <5 mit/10HPF, no overgrowth, no atypia"},
      {k:"Borderline", v:"Intermediate features, 5–9 mit/10HPF"},
      {k:"Malignant", v:"Infiltrating margins, marked atypia, ≥10 mit/10HPF, stromal overgrowth"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Surveillance after excision: 6-monthly US for 2 years, then annual",
      "No role for chemotherapy in benign/borderline phyllodes"
    ],
    medical: [
      "Adjuvant ifosfamide-based chemotherapy for malignant phyllodes with metastases (same as soft tissue sarcoma)",
      "No role for endocrine therapy (unlike breast carcinoma)"
    ],
    surgical: [
      {name:"Wide local excision (WLE)", when:"All grades; aim ≥1cm margin all sides", notes:"Mastectomy if tumor:breast ratio unfavorable or margins unachievable"},
      {name:"Mastectomy", when:"Large tumor (>5cm), recurrent disease, diffuse involvement", notes:"No need for ALND regardless of tumor grade — hematogenous spread"},
      {name:"Re-excision", when:"Positive or close (<1cm) margins", notes:"Local recurrence risk directly proportional to margin adequacy"}
    ]
  },
  technique: {
    title: "Wide Local Excision with 1cm Margin",
    prep: [
      "Mark skin with 1cm radius around palpable/imaged tumor margin",
      "Consider oncoplastic reshaping if volume significant"
    ],
    steps: [
      {n:1, t:"Incision", d:"Periareolar or radial; place incision to allow re-excision or mastectomy if needed"},
      {n:2, t:"Dissection", d:"Excise en-bloc with 1cm healthy breast tissue on all surfaces including deep pectoral fascia if posteriorly located"},
      {n:3, t:"Orientation", d:"Orient specimen in ≥3 planes with clips/sutures for pathologist"},
      {n:4, t:"Hemostasis", d:"Thorough hemostasis; closed suction drain if large cavity"},
      {n:5, t:"Cavity closure", d:"Advance tissue or use oncoplastic technique to avoid deformity"}
    ],
    pearls: [
      "Never shell out (enucleate) phyllodes — always wide excision",
      "Frozen section unreliable for margin assessment — wait formal histology",
      "If histology shows benign phyllodes with <1mm margin: re-excision recommended"
    ]
  },
  guidelines: [
    {src:"NCCN Soft Tissue Sarcoma: phyllodes section"},
    {src:"WHO Classification of Breast Tumors 2019"},
    {src:"Tan et al. Int J Surg 2016: Management of phyllodes tumors"}
  ],
  pearls: [
    "Rapidly growing breast mass in a 40+ year-old woman — think phyllodes, not fibroadenoma",
    "Do NOT perform ALND — axillary nodes not involved even in malignant phyllodes",
    "Malignant phyllodes: 5-year survival ~60% if localized; pulmonary metastases common",
    "Previous excision with shelling technique is inadequate — re-excision with margins required"
  ],
  mistakes: [
    "Shelling out the tumor (enucleation) — high local recurrence rate",
    "Performing ALND — not indicated, wastes morbidity",
    "Not warning patient of local recurrence risk and need for surveillance"
  ]
},
{
  id: "thyroid-ca",
  dept: "endocrine",
  name: "Thyroid Cancer",
  latin: "Carcinoma glandulae thyreoideae",
  organ: "Thyroid",
  severity: "moderate",
  tags: ["oncology","thyroid","endocrine"],
  hero: "Most common endocrine malignancy. Papillary thyroid cancer has excellent prognosis; medullary and anaplastic are more aggressive.",
  keypoints: [
    "Papillary (PTC) 80%: 'Orphan Annie' nuclei, psammoma bodies, excellent prognosis",
    "Lobectomy OR total acceptable for 1–4cm cN0 PTC without ETE — 2015 ATA; total for FTC/MTC/ATC",
    "Central neck dissection (level VI) for clinically positive nodes",
    "Radioiodine (RAI) ablation post-thyroidectomy for high-risk PTC (all gross ETE/M1); not routine for low-risk or microcarcinoma",
    "MTC: screen family for RET mutation; screen for phaeochromocytoma before surgery"
  ],
  differentials: ["Multinodular goitre","Thyroid adenoma","Thyroid cyst","Parathyroid adenoma","Lymph node metastasis","Lymphoma"],
  mnemonics: [
    {name:"Types PAIN", text:"Papillary-Anaplastic-Insular(poorly diff)-Medullary vs Follicular: P-F-M-A by frequency"},
    {name:"MTC workup", text:"Before surgery: RET gene + calcitonin + urine catecholamines (exclude phaeochromocytoma first!)"}
  ],
  overview: {
    definition: "Malignant thyroid neoplasms. Derived from follicular cells (PTC, FTC, ATC) or parafollicular C-cells (MTC).",
    epidemiology: "3rd most common endocrine cancer. F:M = 3:1. PTC incidence rising (detection bias). MTC 5%, ATC <1% but fatal.",
    pathophysiology: "PTC: BRAF V600E (40–60%, predicts recurrence/mortality even early-stage), RET/PTC rearrangements; TERT promoter → poor DFS/OS. FTC: RAS mutations, PAX8-PPARγ. MTC: RET mutations (25% hereditary — MEN2A/2B, FMTC). ATC: dedifferentiation from PTC/FTC.",
    classification: [
      "Papillary thyroid carcinoma (PTC) — 80%",
      "Follicular thyroid carcinoma (FTC) — 10%",
      "Hürthle cell carcinoma — ~3% (FTC subtype): multifocal/bilateral 30%, poor RAI uptake ~5%, nodal mets 25%; managed like FTC",
      "Medullary thyroid carcinoma (MTC) — 5%",
      "Anaplastic thyroid carcinoma (ATC) — <1%",
      "NIFTP: encapsulated non-invasive follicular-variant PTC — reclassified as non-malignant neoplasm",
      "Thyroid lymphoma (<1%, non-Hodgkin B-cell) arises in Hashimoto's — CHOP ± RT, surgery only for airway",
      "Familial non-medullary: Cowden (PTEN), FAP (APC), Werner, Carney complex, DICER1"
    ]
  },
  diagnosis: {
    history: [
      "Incidentally discovered thyroid nodule (most common)",
      "Palpable neck mass — painless, lower neck",
      "Hoarseness (RLN invasion), dysphagia (esophageal involvement)",
      "Rapid growth suggests anaplastic",
      "Family history MTC, MEN2, or previous neck irradiation",
      "Diarrhea in MTC (calcitonin effect)"
    ],
    examination: [
      "Thyroid nodule: size, consistency (hard = suspicious), fixation, tenderness",
      "Cervical lymphadenopathy (central VI, lateral II–V)",
      "Voice assessment (hoarseness → RLN involvement)",
      "Stridor (tracheal compression/invasion)"
    ],
    investigations: [
      {name:"Thyroid ultrasound", role:"First line; TIRADS classification; assess nodes — hypoechoic, microcalcification, irregular margin, taller-than-wide"},
      {name:"Fine needle aspiration cytology (FNAC)", role:"Bethesda classification I–VI; Bethesda IV-VI → surgery"},
      {name:"TSH, free T4, T3", role:"Thyroid function; suppressed TSH → autonomous nodule (rarely malignant)"},
      {name:"Serum calcitonin", role:"Elevated in MTC; high sensitivity if >100 pg/mL"},
      {name:"CEA", role:"Elevated in MTC; combined with calcitonin for monitoring"},
      {name:"RET mutation analysis", role:"All MTC patients; family screening if positive"},
      {name:"24h urine catecholamines/metadrenalines", role:"Exclude phaeochromocytoma before MTC surgery"},
      {name:"CT neck/chest/abdomen", role:"Locally advanced disease, large nodes, suspected metastases"},
      {name:"Laryngoscopy", role:"Pre-op vocal cord assessment — especially if hoarse"}
    ]
  },
  criteria: {
    title: "Bethesda System (malignancy risk + action)",
    items: [
      {k:"I: Non-diagnostic (1–4%)", v:"Repeat FNAC"},
      {k:"II: Benign (60–70% of FNAs, false-neg ≤3%)", v:"Follow-up US"},
      {k:"III: AUS/FLUS (5–15%)", v:"Repeat FNAC or molecular testing or lobectomy"},
      {k:"IV: Follicular neoplasm (15–35%)", v:"Lobectomy (can't distinguish adenoma from FTC on cytology)"},
      {k:"V: Suspicious (60–75%)", v:"Lobectomy OR near-total/total thyroidectomy"},
      {k:"VI: Malignant (97–99%)", v:"Total thyroidectomy ± CND"}
    ]
  },
  scoring: [
    {name:"AJCC 8th ed DTC staging (pivots on age 55)", items:[
      "<55yr: any T/N M0 = Stage I; M1 = Stage II",
      "≥55yr: T1–2 N0 = I; N1 or T3 = II; T4a = III; T4b = IVA; M1 = IVB",
      "T3b = ETE into strap muscles only; minimal ETE no longer upstages"
    ]},
    {name:"ATA recurrence-risk stratification", items:[
      "Low: intrathyroidal, ≤5 N1 micromets <0.2cm, no vascular invasion — recurrence 1–2%",
      "Intermediate: microscopic ETE, aggressive histology (tall cell/columnar), vascular invasion, >5 N1 or clinical N1",
      "High: gross ETE, incomplete resection, M1, N1 ≥3cm, FTC >4 foci vascular invasion — recurrence >50%"
    ]}
  ],
  management: {
    conservative: [
      "Active surveillance for papillary microcarcinoma (<1cm, cN0, no ETE): supported by 2 Japanese trials; lobectomy if surgery chosen",
      "Levothyroxine suppression therapy post-thyroidectomy (TSH <0.1 for high-risk, 0.1–0.5 low-risk)",
      "Thyroglobulin + neck US at 6–12 months post-op surveillance"
    ],
    medical: [
      "Radioiodine (I-131): recommended for all high-risk (gross ETE/M1); considered for intermediate; NOT routine for low-risk or any papillary microcarcinoma; treats >70% micromets but <10% macromets",
      "Lenvatinib/sorafenib: RAI-refractory differentiated thyroid cancer",
      "Vandetanib/cabozantinib: first-line for symptomatic advanced/progressive MTC (prolong PFS, lower calcitonin/CEA)",
      "Dabrafenib + trametinib: BRAF V600E mutant ATC (rarely curative)"
    ],
    surgical: [
      {name:"Total thyroidectomy", when:"PTC >4cm or gross ETE/cN1, FTC >4cm (older men — cancer risk 50%), MTC (all), ATC (if resectable)", notes:"Mandatory laryngoscopy pre-op; meticulous RLN and parathyroid identification; drain optional"},
      {name:"Thyroid lobectomy (hemithyroidectomy)", when:"1–4cm cN0 PTC without ETE (lobectomy OR total — 2015 ATA); solitary Bethesda IV follicular neoplasm (70–80% benign adenoma)", notes:"Completion thyroidectomy if final histology shows intermediate/high-risk features"},
      {name:"Central neck dissection (level VI)", when:"Clinically positive central nodes (cN1a); prophylactic CND for T3/T4 PTC; routine bilateral prophylactic CND for MTC", notes:"MTC: add lateral dissection if calcitonin >500 or nodal/primary ≥1.5cm. Risk: bilateral RLN injury; permanent hypoparathyroidism"},
      {name:"Lateral neck dissection (levels II–V)", when:"Clinically or radiologically positive lateral nodes (cN1b)", notes:"Compartment-oriented dissection — not 'berry picking'"},
      {name:"Tracheostomy", when:"ATC with impending airway compromise", notes:"Palliative in most ATC — disease-specific survival <6 months"}
    ]
  },
  technique: {
    title: "Total Thyroidectomy",
    prep: [
      "Pre-op laryngoscopy to document vocal cord function",
      "Position: supine, neck extended with shoulder roll",
      "Kocher collar incision 1–2cm above sternal notch, 5–8cm in natural skin crease"
    ],
    steps: [
      {n:1, t:"Incision & subplatysmal flaps", d:"Raise superior and inferior flaps in avascular subplatysmal plane"},
      {n:2, t:"Midline division", d:"Divide strap muscles in midline; retract laterally"},
      {n:3, t:"Superior pole", d:"Individually ligate superior thyroid vessels near the thyroid capsule (preserve external branch of SLN)"},
      {n:4, t:"RLN identification", d:"Identify RLN in tracheo-esophageal groove; trace to Berry's ligament. Use nerve monitor if available"},
      {n:5, t:"Parathyroid identification", d:"Identify and preserve superior and inferior parathyroids with their pedicles; auto-transplant if devascularized"},
      {n:6, t:"Inferior thyroid artery", d:"Ligate branches of ITA close to thyroid (not main trunk) to preserve parathyroid blood supply"},
      {n:7, t:"Berry's ligament", d:"Divide carefully — RLN enters larynx here; highest risk zone"},
      {n:8, t:"Tracheal division", d:"Divide isthmus and remove lobe; repeat contralateral side"},
      {n:9, t:"Hemostasis and closure", d:"Meticulous hemostasis; reapproximate strap muscles; drain optional; subcuticular closure"}
    ],
    pearls: [
      "Nerve monitor: use throughout but do not rely solely — tactile identification essential",
      "Parathyroid auto-transplant: mince into 1mm³ pieces, implant in sternocleidomastoid pocket",
      "Post-op: check Ca²⁺ at 6 and 24 hours; supplement if symptomatic or Ca²⁺ <2.0mmol/L"
    ]
  },
  guidelines: [
    {src:"ATA 2015 Differentiated Thyroid Cancer Guidelines (Haugen)"},
    {src:"ATA 2015 Medullary Thyroid Carcinoma Guidelines; ATA Anaplastic Guidelines"},
    {src:"AJCC Cancer Staging Manual, 8th ed (2017)"},
    {src:"Bethesda System for Reporting Thyroid Cytopathology (Cibas & Ali)"},
    {src:"NICE DG41: Thyroid cancer (gene expression classifier)"},
    {src:"BTA Guidelines 2014: Differentiated thyroid cancer management"}
  ],
  pearls: [
    "PTC with positive nodes does NOT worsen disease-specific survival in low-risk patients",
    "FNA cannot distinguish follicular adenoma from carcinoma — Dx = capsular/vascular invasion on histology; molecular panels for indeterminate nodules (Afirma GEC 'rule out' NPV 94%; ThyroSeq v2 sens 90%/spec 93%)",
    "Complete neck US mandatory after any FNA-proven cancer; distant mets ultimately in ~20% (lung>bone>liver>brain)",
    "Always exclude phaeochromocytoma before operating on MTC (cardiovascular crisis otherwise)",
    "Prophylactic thyroidectomy timing: MEN2B <1yr; MEN2A codon 634 high-risk <5yr",
    "Chylous fistula after lateral neck dissection: medium-chain triglyceride diet ± reoperation"
  ],
  mistakes: [
    "Not checking vocal cords pre-op — post-op hoarseness attribution unclear",
    "Ligating main inferior thyroid artery trunk — devascularizes parathyroids",
    "Operating on MTC without first excluding phaeochromocytoma — anesthetic catastrophe",
    "Berry picking lateral neck nodes — must do formal compartment dissection"
  ]
},
{
  id: "graves",
  dept: "endocrine",
  name: "Graves' Disease",
  latin: "Morbus Basedow-Graves",
  organ: "Thyroid",
  severity: "moderate",
  tags: ["endocrine","thyroid","autoimmune"],
  hero: "Autoimmune hyperthyroidism from TSH-receptor stimulating antibodies. Surgery (total thyroidectomy) is curative for recurrent/large goitre or ophthalmopathy.",
  keypoints: [
    "TSH-receptor antibodies (TRAb) are diagnostic",
    "Three treatment options: antithyroid drugs (ATD), radioiodine, thyroidectomy",
    "Total/near-total thyroidectomy (now preferred over subtotal) for: large goitre, severe ophthalmopathy, ATD failure/relapse, coexistent nodule",
    "Make euthyroid before surgery with ATD ± Lugol's iodine (3 drops BD, 7–10 days pre-op)",
    "Thyroid storm: life-threatening; treat with beta-blocker + ATD + steroids + Lugol's"
  ],
  differentials: ["Toxic multinodular goitre","Toxic adenoma","Subacute thyroiditis","Factitious hyperthyroidism","Struma ovarii"],
  mnemonics: [
    {name:"Graves features", text:"GOITRE: Goitre + Ophthalmopathy + Increased metabolism + TSH↓ + TRAb+ + Eye disease"},
    {name:"Thyroid storm Tx", text:"BBBSS: Beta-blocker + Block (ATD) + Block release (Lugol) + Steroids + Supportive"}
  ],
  overview: {
    definition: "Organ-specific autoimmune disease with TSH-receptor stimulating antibodies (TRAb/TSI) causing hyperthyroidism, diffuse goitre and extrathyroidal manifestations.",
    epidemiology: "Most common cause of hyperthyroidism (60–80%). F:M = 5:1. Peak age 40–60 yrs. Associated with HLA-DQA1*0501 (Caucasian), HLA-B8/DR3; HLA-DRB1*0701 protective.",
    pathophysiology: "TRAb binds TSH receptor → constitutive thyroid stimulation → T3/T4 overproduction. IL-1, IGF-1 in orbital fibroblasts → glycosaminoglycan deposition → exophthalmos.",
    classification: [
      "Graves hyperthyroidism",
      "Graves ophthalmopathy (GO) — active vs inactive, mild/moderate/severe",
      "Graves dermopathy (pretibial myxedema) — rare",
      "Graves acropachy — very rare"
    ]
  },
  diagnosis: {
    history: [
      "Weight loss with increased appetite, heat intolerance, sweating",
      "Palpitations, tremor, anxiety, insomnia",
      "Neck swelling (goitre)",
      "Eye symptoms: grittiness, diplopia, proptosis, periorbital edema",
      "Diarrhea, oligomenorrhea",
      "Family history of autoimmune thyroid disease"
    ],
    examination: [
      "Diffuse smooth goitre with bruit",
      "Proptosis, lid lag, lid retraction, chemosis (Graves ophthalmopathy)",
      "Tremor, proximal myopathy, hyperreflexia",
      "AF, tachycardia",
      "Pretibial myxedema (non-pitting edema over shins)"
    ],
    investigations: [
      {name:"TSH, free T4, free T3", role:"Suppressed TSH + elevated fT4/fT3 confirms hyperthyroidism"},
      {name:"TRAb (TSH receptor antibodies)", role:"Elevated in >95% Graves — confirms diagnosis; important pre-surgery to predict relapse post-ATD"},
      {name:"Thyroid peroxidase antibodies (TPO)", role:"Elevated in 70%; less specific than TRAb"},
      {name:"Thyroid ultrasound + Doppler", role:"Diffusely enlarged hyperechoic gland with increased vascularity ('thyroid inferno')"},
      {name:"Radioiodine uptake scan (RAIU)", role:"Diffusely increased uptake confirms Graves vs factitious/subacute thyroiditis"},
      {name:"Eye examination / orbital MRI", role:"Active ophthalmopathy assessment; EUGOGO classification"}
    ]
  },
  criteria: {
    title: "Burch-Wartofsky Score (Thyroid Storm)",
    items: [
      {k:"≥45 points", v:"Thyroid storm"},
      {k:"25–44 points", v:"Impending storm"},
      {k:"<25 points", v:"Storm unlikely"},
      {k:"Parameters scored", v:"Temperature, CNS effects, GI-hepatic dysfunction, HR, AF, precipitant history"}
    ]
  },
  scoring: [
    {name:"Three-option treatment comparison (ATD vs RAI vs surgery)", items:[
      "ATD: non-invasive, relapse 40–80%; curative-intent reserved for small (<40g) non-toxic goitre, mild elevation, low TRAb",
      "RAI: ~50% euthyroid at 6mo then progressive hypothyroidism; worsens GO (33%, esp. smokers); CI in pregnancy",
      "Surgery: rapid cure, best GO outcome; needs euthyroid prep; risks RLN/parathyroid injury + lifelong thyroxine"
    ]}
  ],
  management: {
    conservative: [
      "Beta-blocker (propranolol/atenolol) for immediate symptom control",
      "ATD (carbimazole 20–40mg/day or PTU) for 12–18 months; 40–80% relapse; block-replace option adds T4 0.05–0.1mg to ATD",
      "Ophthalmopathy: selenium, IV steroids for active moderate-severe; radiotherapy; orbital decompression"
    ],
    medical: [
      "Methimazole 10–30mg (long t½, once-daily) or carbimazole; agranulocytosis risk (warn to stop if fever/sore throat); relapse 40–80% after 1–2yr course",
      "PTU 100–300mg TDS: blocks peripheral T4→T3 (favored in storm); preferred 1st-trimester pregnancy; hepatotoxicity risk",
      "Propranolol 20–40mg QDS decreases T4→T3 (CCB if β-blocker contraindicated)",
      "Radioiodine (I-131): 8–12 mCi orally after preliminary scan; only ~50% euthyroid at 6mo, ~2.5%/yr hypothyroid thereafter; GO progression 33% (vs 16% post-surgery, worse in smokers); absolute CI pregnancy/breastfeeding/conception <6mo; contraindicated in active moderate-severe ophthalmopathy",
      "Lugol's iodine (potassium iodide): 3 drops twice daily × 7–10 days pre-op — reduces vascularity and thyroid hormone release",
      "Urgent/allergic prep when cannot render euthyroid: β-blocker + potassium iodide ± steroids"
    ],
    surgical: [
      {name:"Total / near-total thyroidectomy", when:"ATA procedure of choice; large goitre >80g with compression; severe active ophthalmopathy (better than RAI for GO); ATD failure/intolerance; confirmed/suspicious cancer; wish to conceive <6mo; patient preference", notes:"Make euthyroid first (best in 2nd trimester if pregnant); avoid thyroid storm intra/post-op; life-long thyroxine replacement"},
      {name:"Subtotal thyroidectomy (Hartley-Dunhill)", when:"Historic variant (total lobectomy one side + subtotal other) — largely superseded; subtotal risks recurrence", notes:"Bilaterally leave 4–7g thyroid remnant; needs re-entry of only one side if recurrence"}
    ]
  },
  technique: {
    title: "Pre-operative Preparation for Total Thyroidectomy in Graves'",
    prep: [
      "Render euthyroid: carbimazole 4–6 weeks pre-op (until TFTs normal)",
      "Lugol's iodine 3 drops twice daily for 7–10 days pre-op (reduces vascularity)",
      "Beta-blocker continued until morning of surgery",
      "Anesthetic team alert to thyroid storm risk"
    ],
    steps: [
      {n:1, t:"Positioning", d:"Supine with extended neck; shoulder roll; table anti-Trendelenburg 15°"},
      {n:2, t:"Kocher incision", d:"2 finger-breadths above sternal notch; 5–6cm; in skin crease"},
      {n:3, t:"Superior pole first", d:"Large Graves gland: superior pedicle ligation close to thyroid to preserve SLN-external branch"},
      {n:4, t:"Vascularity management", d:"Highly vascular; control bleeding meticulously — Graves goitres bleed significantly"},
      {n:5, t:"RLN and parathyroid", d:"Routine identification — essential given enlarged gland distorts anatomy"},
      {n:6, t:"Total excision", d:"Remove all thyroid tissue to prevent recurrent hyperthyroidism"},
      {n:7, t:"Drain", d:"Consider drain in large Graves goitres — hematoma risk"}
    ],
    pearls: [
      "Largest goitres bleed most — Lugol's iodine pre-op is essential",
      "Ophthalmopathy may worsen post-RAI but stabilizes or improves post-surgery",
      "Post-op: start thyroxine 100mcg immediately; check TSH at 6 weeks"
    ]
  },
  guidelines: [
    {src:"ATA 2016 Hyperthyroidism/Thyrotoxicosis Guidelines"},
    {src:"ETA/EUGOGO 2016: Graves' orbitopathy"},
    {src:"NICE NG145: Thyroid disease assessment and management"}
  ],
  pearls: [
    "Radioiodine contraindicated in active moderate-severe Graves ophthalmopathy — worsens GO",
    "PTU preferred over carbimazole in first trimester pregnancy and thyroid storm",
    "Thyroid storm: remove trigger (infection, surgery, RAI) + propranolol + PTU + Lugol's + hydrocortisone + cooling",
    "Toxic MNG (Plummer) & toxic adenoma: extrathyroidal signs ABSENT; Jod-Basedow from iodine/amiodarone; toxic adenoma from TSH-R/gsp somatic mutations in younger patients; RAI needs larger doses (lower uptake)"
  ],
  mistakes: [
    "Operating on a hyperthyroid patient — risk of thyroid storm intraoperatively",
    "Using RAI in active ophthalmopathy without IV steroid cover",
    "Stopping carbimazole without TFT confirmation of euthyroid status"
  ]
},
{
  id: "mng",
  dept: "endocrine",
  name: "Multinodular Goitre",
  latin: "Struma nodosa",
  organ: "Thyroid",
  severity: "low",
  tags: ["thyroid","goitre","endocrine"],
  hero: "Commonest thyroid disorder worldwide. Most are benign; surgery indicated for compressive symptoms, substernal extension, or suspicious nodule.",
  keypoints: [
    "Most MNG are euthyroid; toxic MNG causes autonomous hyperthyroidism",
    "Thyroid US + TFT + FNAC of dominant/suspicious nodule",
    "Indications for surgery: symptoms (dysphagia, stridor), substernal extension, suspected malignancy, cosmesis",
    "Total thyroidectomy preferred over bilateral subtotal — eliminates recurrence",
    "Urgent airway management if tracheal compression causing stridor"
  ],
  differentials: ["Graves disease","Hashimoto thyroiditis","Thyroid cyst","Thyroid cancer","Lymphoma","Parathyroid adenoma"],
  mnemonics: [
    {name:"MNG Surgery Indications", text:"COMPASS: Compressive symptoms + Obstructive (substernal) + Malignancy suspect + Patient preference + Aesthetic + Suspected toxicity"}
  ],
  overview: {
    definition: "Multiple thyroid nodules of varying size arising from benign follicular hyperplasia; may be euthyroid, hypothyroid, or hyperthyroid (toxic MNG).",
    epidemiology: "15–20% adults on ultrasound; clinically palpable in 4–7%. Endemic in iodine-deficient areas. F:M = 4:1.",
    pathophysiology: "Recurrent cycles of hyperplasia and involution. Autonomous foci → toxic MNG; Jod-Basedow (iodine/contrast/amiodarone-induced) hyperthyroidism. Risk of malignancy in dominant nodule ~5% (hyperfunctioning nodule ~1%).",
    classification: [
      "Euthyroid MNG (most common)",
      "Toxic MNG (Plummer disease): autonomous hyperthyroidism from hot nodules",
      "Toxic adenoma: single autonomous hyperfunctioning nodule",
      "Simple/colloid MNG",
      "Substernal/intrathoracic goitre (>50% below thoracic inlet)"
    ]
  },
  diagnosis: {
    history: [
      "Long-standing neck swelling, often slow-growing",
      "Compressive symptoms: dysphagia (esophageal), stridor (tracheal), voice change (RLN)",
      "Symptoms of hyperthyroidism (toxic MNG)",
      "Rapid enlargement suggests hemorrhage into cyst or malignancy",
      "Pemberton's sign history: facial flushing/venous congestion when arms raised (substernal goitre)"
    ],
    examination: [
      "Palpate: multinodular, moves with swallowing",
      "Tracheal deviation",
      "Pemberton's sign (arms raised): facial suffusion, venous distension, stridor",
      "Auscultate for bruit (Graves vs toxic MNG — less bruit)",
      "Assess for retrosternal extension (can't get below it)"
    ],
    investigations: [
      {name:"TSH ± fT4/fT3", role:"Assess thyroid function; toxic MNG: suppressed TSH"},
      {name:"Thyroid ultrasound", role:"Number, size, TIRADS classification of all nodules; identify dominant/suspicious"},
      {name:"FNAC dominant/suspicious nodule", role:"Bethesda system; mandatory if ≥1cm with suspicious US features"},
      {name:"Thyroid cyst aspiration", role:"Aspirate simple cysts; lobectomy if recurs ×3, >4cm, or complex (complex cysts ~15% malignant)"},
      {name:"CT neck/chest", role:"Substernal extension, tracheal deviation/compression, relationship to great vessels"},
      {name:"Radioiodine uptake scan", role:"Toxic MNG: heterogeneous uptake with hot nodules; helps distinguish from Graves"},
      {name:"CXR", role:"Tracheal deviation, substernal component"}
    ]
  },
  criteria: {
    title: "Indications for Surgery in MNG",
    items: [
      {k:"Compressive symptoms", v:"Dysphagia, stridor, hoarseness, SVC obstruction"},
      {k:"Substernal/retrosternal extension", v:"Especially if >50% below thoracic inlet"},
      {k:"Toxic MNG uncontrolled", v:"RAI failure or contraindicated"},
      {k:"Suspicious/malignant FNAC", v:"Bethesda V–VI"},
      {k:"Cosmetic deformity", v:"Patient preference"},
      {k:"Rapid growth", v:"Concern for malignancy or hemorrhage"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Asymptomatic small MNG: annual TFT + US surveillance",
      "Iodine supplementation in endemic (deficient) areas to prevent further growth",
      "Thyroxine suppression not recommended: <25% of benign nodules shrink >50% in iodine-replete populations; cardiovascular risks outweigh benefit"
    ],
    medical: [
      "Carbimazole for toxic MNG pre-operatively",
      "Radioiodine for toxic MNG (elderly, poor surgical candidates without airway compression) — reduces volume 30–50%; larger doses needed (uptake lower than Graves); RAI-thyroiditis can cause acute airway swelling"
    ],
    surgical: [
      {name:"Total thyroidectomy", when:"Definitive treatment for large symptomatic MNG; suspected malignancy; first choice to prevent recurrence", notes:"Life-long thyroxine replacement; bilateral RLN and parathyroid risk"},
      {name:"Bilateral subtotal thyroidectomy", when:"Rarely used; leaves small bilateral remnants — high risk of recurrence (avoided in modern practice)", notes:"Remnant left to preserve parathyroids — but remnant may regrow"},
      {name:"Completion thyroidectomy", when:"Previous lobectomy with contralateral MNG; malignancy found on lobectomy specimen", notes:"More difficult second operation — RLN and parathyroid risk higher"},
      {name:"Substernal goitre: cervical approach", when:"Most substernal goitres (>90%) can be delivered through neck incision", notes:"Thoracic inlet widened by blunt dissection; lower pole freed from mediastinum"},
      {name:"Sternotomy", when:"Truly primary intrathoracic goitre (<10%); dense mediastinal adhesions; vascular involvement", notes:"Cardiothoracic surgical input needed"}
    ]
  },
  technique: {
    title: "Delivery of Substernal Goitre via Cervical Approach",
    prep: [
      "CT chest to plan — identify tracheal relationship, vascular anatomy",
      "Ensure render euthyroid if toxic MNG",
      "Standby for median sternotomy — surgeon must be prepared to extend"
    ],
    steps: [
      {n:1, t:"Extended Kocher incision", d:"Slightly longer incision; divide strap muscles if needed for exposure"},
      {n:2, t:"Mobilize superior lobe", d:"Divide superior pedicle first; free upper lobe and contralateral lobe"},
      {n:3, t:"Blunt finger dissection", d:"Index finger behind sternum; break down avascular mediastinal attachments to free substernal component"},
      {n:4, t:"Deliver substernal lobe", d:"Gentle traction + blunt dissection delivers lobe into neck; ligate inferior thyroid veins"},
      {n:5, t:"RLN identification", d:"Distorted anatomy — careful at inferior edge of substernal mass"},
      {n:6, t:"Parathyroids", d:"Inferior parathyroids often displaced into mediastinum — identify and preserve or auto-transplant"}
    ],
    pearls: [
      "Never pull hard on substernal component — risk of RLN avulsion or vascular tear",
      "RLN may run laterally/anterior over a nodule in nodular goitre — identify early",
      "If sternotomy needed: incision extends from Kocher to angle of Louis",
      "Post-op airway: tracheomalacia rare but watch for in long-standing compression"
    ]
  },
  guidelines: [
    {src:"ATA 2015 Thyroid Nodule/DTC Guidelines"},
    {src:"Bethesda System for Reporting Thyroid Cytopathology"},
    {src:"BTA Guidelines: Management of thyroid nodule and goitre"},
    {src:"European Thyroid Association 2019: Multinodular goitre guidelines"}
  ],
  pearls: [
    "Pemberton's sign positive = substernal goitre until proven otherwise — get CT",
    "Toxic MNG with airway compression: prefer near-total/total; avoid RAI (RAI-thyroiditis can cause acute airway swelling)",
    "Jod-Basedow: iodine/contrast/amiodarone can precipitate hyperthyroidism in autonomous MNG",
    "Tracheomalacia post-thyroidectomy: rare but life-threatening; keep patient intubated and trial extubation",
    "Contralateral RLN palsy post-thyroidectomy = indication for tracheostomy if bilateral"
  ],
  mistakes: [
    "Not imaging the chest before operating on a goitre that can't be gotten below — substernal surprise",
    "Subtotal thyroidectomy for MNG — recurrence rate high, re-operation dangerous",
    "Omitting pre-operative laryngoscopy — especially for large/substernal goitres"
  ]
},
{
  id: "phpt",
  dept: "endocrine",
  name: "Primary Hyperparathyroidism",
  latin: "Hyperparathyroidismus primarius",
  organ: "Parathyroid",
  severity: "moderate",
  tags: ["endocrine","parathyroid","calcium"],
  hero: "Most common cause of hypercalcemia in outpatients. Single parathyroid adenoma in 85%. Minimally invasive parathyroidectomy is curative in >95%.",
  keypoints: [
    "Classic presentation: 'bones, stones, groans, moans' (now mostly asymptomatic)",
    "Single adenoma 85%, multigland disease 15%, carcinoma <1%",
    "MIBI scan + US for localization before focused parathyroidectomy",
    "Intraoperative PTH (ioPTH): drop >50% from baseline = cure",
    "MEN1 and MEN2A: multigland disease — 3.5 gland resection"
  ],
  differentials: ["Malignancy-associated hypercalcemia (PTHrP-mediated; commonest in inpatients)","Sarcoidosis","Vitamin D toxicity","Thiazide diuretics","Familial hypocalciuric hypercalcemia (FHH)","Secondary HPT"],
  mnemonics: [
    {name:"Symptoms", text:"Bones (osteitis fibrosa cystica) + Stones (renal calculi) + Groans (GI: nausea, constipation) + Moans (psycho: depression, fatigue)"},
    {name:"FHH exclusion", text:"Urine calcium:creatinine clearance ratio <0.01 = FHH (avoid surgery in FHH!)"}
  ],
  overview: {
    definition: "Autonomous overproduction of PTH from one or more hyperfunctioning parathyroid glands causing hypercalcemia.",
    epidemiology: "Prevalence 1 in 500–1000. F:M = 3:1. Peak incidence post-menopause. 3rd most common endocrine disorder after diabetes and thyroid disease.",
    pathophysiology: "Single adenoma (85%): monoclonal expansion of chief cells; PTH drives osteoclastic bone resorption, renal tubular Ca²⁺ reabsorption, intestinal absorption via Vit D activation.",
    classification: [
      "Sporadic (most common)",
      "MEN1 (parathyroid + pituitary + pancreas): MENIN mutation; recurrence 15% at 2yr, 67% at 8yr",
      "MEN2A (parathyroid + MTC + phaeochromocytoma): RET mutation",
      "Familial isolated HPT; neonatal severe HPT (homozygous CASR) → urgent total parathyroidectomy",
      "Normocalcemic PHPT: high PTH, normal Ca after excluding vit-D deficiency/renal leak; 19% become hypercalcemic in 3yr, 57% osteoporosis",
      "Parathyroid carcinoma (~1%): Ca >14mg/dL, PTH >5× normal, palpable mass; HRPT2/CDC73 mutation; 15% nodal / 33% distant mets"
    ]
  },
  diagnosis: {
    history: [
      "Often asymptomatic — incidental hypercalcemia",
      "Renal: nephrolithiasis, nephrocalcinosis, polyuria, polydipsia",
      "Skeletal: bone pain, fragility fractures",
      "GI: nausea, vomiting, constipation, peptic ulcer (Zollinger-Ellison in MEN1)",
      "Neuropsychiatric: depression, cognitive impairment, weakness",
      "Hypertension, shortened QT interval (ECG)"
    ],
    examination: [
      "Usually no specific findings",
      "Band keratopathy (slit lamp — calcium corneal deposits)",
      "Bone tenderness, pathological fractures",
      "Neck mass if parathyroid carcinoma"
    ],
    investigations: [
      {name:"Serum corrected calcium", role:"Elevated >2.6mmol/L on two occasions; correct for albumin"},
      {name:"Intact PTH (iPTH)", role:"Elevated or inappropriately normal in PHPT; does not cross-react PTHrP (differentiates humoral hypercalcemia of malignancy)"},
      {name:"24-hour urine calcium", role:"Elevated (~60%) in PHPT; UCCR >0.02; FHH <0.01 and 24h Ca <100mg/d (do NOT operate)"},
      {name:"Serum phosphate / chloride", role:"Low phosphate (~50%); hyperchloremic metabolic acidosis (80%); chloride:phosphate ratio >33"},
      {name:"Vitamin D (25-OH-D3)", role:"Replete Vit D before surgery — masking exacerbation"},
      {name:"Tc-99m sestamibi (MIBI) scan", role:"Single photon emission CT (SPECT) for localization — sensitivity >80% (~65% for single-gland lateralization)"},
      {name:"Neck ultrasound", role:"Localization; complementary to MIBI; sensitivity >75% (experienced); concordant MIBI+US → correct gland ~95%"},
      {name:"4D-CT parathyroid", role:"Sensitivity 88% for lateralization (vs MIBI 65%, US 57%); 4D-CT+US PPV 92% single-gland; failed prior localization / reoperative HPT"},
      {name:"DEXA scan", role:"Bone mineral density — L-spine, hip, radius; guides surgical indication"}
    ]
  },
  criteria: {
    title: "Surgical Indications in Asymptomatic PHPT (NIH Consensus 2014)",
    items: [
      {k:"Serum calcium", v:">1 mg/dL (≈0.25mmol/L) above upper limit of normal"},
      {k:"T-score", v:"≤ −2.5 at radius/spine/hip OR vertebral fracture on imaging"},
      {k:"Creatinine clearance / GFR", v:"<60 mL/min"},
      {k:"24h urine calcium", v:">400mg/day (>10mmol/d) with increased stone risk"},
      {k:"Renal imaging", v:"Nephrolithiasis or nephrocalcinosis"},
      {k:"Age", v:"<50 years"}
    ]
  },
  scoring: [
    {name:"Asymptomatic PHPT natural history", items:[
      "~27% develop a new surgical indication over 10yr",
      "60% lose >10% BMD over 15yr",
      "Age <50 predicts progression"
    ]}
  ],
  management: {
    conservative: [
      "Asymptomatic without surgical criteria: annual Ca²⁺, annual creatinine, DEXA every 1–2 years",
      "Adequate hydration, avoid thiazides, immobilization",
      "Cinacalcet (calcimimetic) for hypercalcemia control if not surgical candidate"
    ],
    medical: [
      "Cinacalcet: lowers Ca²⁺ and PTH but NOT BMD — reserved for poor operative risk/refusal",
      "Bisphosphonates / HRT: improve BMD but do not reduce Ca²⁺/PTH",
      "Vitamin D repletion: replete to >50nmol/L before surgery (deficiency may mask extent)"
    ],
    surgical: [
      {name:"Minimally invasive parathyroidectomy (MIP/focused parathyroidectomy)", when:"Concordant localization (MIBI + US agree); single gland disease", notes:"Parathyroidectomy >95% cure (only curative option); improves BMD 6–8% yr1; unilateral neck exploration + ioPTH; local/GA; day case"},
      {name:"Bilateral neck exploration (BNE)", when:"Failed/discordant localization; MEN1/2A; familial HPT; reoperative HPT; suspected multigland disease", notes:"All 4 glands identified and assessed; abnormal glands removed"},
      {name:"3.5-gland parathyroidectomy", when:"MEN1 (all 4 glands usually enlarged) — subtotal parathyroidectomy", notes:"Leave 50mg vascularized remnant in sternocleidomastoid; mark with clip"},
      {name:"4-gland parathyroidectomy + auto-transplant", when:"MEN1 or severe multigland disease; forearm transplant", notes:"Implant into non-dominant forearm brachioradialis; allows monitoring and re-excision if recurrent"}
    ]
  },
  technique: {
    title: "Minimally Invasive Parathyroidectomy with ioPTH",
    prep: [
      "Concordant MIBI + US localization pre-op",
      "Baseline iPTH taken at induction",
      "Position as for thyroidectomy; local anesthetic infiltration"
    ],
    steps: [
      {n:1, t:"Incision", d:"Small (2–3cm) incision over localized adenoma; oblique over medial SCM border"},
      {n:2, t:"Exposure", d:"Dissect through lateral to strap muscles (Miami approach) or medial to muscles"},
      {n:3, t:"Adenoma identification", d:"Identify enlarged hypervascular parathyroid; confirm intraoperatively with gamma probe if radio-guided (MIRP)"},
      {n:4, t:"Excision", d:"Excise adenoma; clip pedicle; send for rapid frozen section (confirms parathyroid tissue)"},
      {n:5, t:"ioPTH at 10 min post-excision", d:"Miami criterion: PTH drops ≥50% at 10 min from highest pre-removal value AND into normal range (5-min optional)"},
      {n:6, t:"Decision", d:"Successful ioPTH drop → close; inadequate drop → bilateral exploration for multigland disease"}
    ],
    pearls: [
      "ioPTH half-life: 3–5 minutes; Miami endpoint = ≥50% drop at 10 min (5-min sample optional)",
      "If ioPTH fails to drop: ectopic gland (mediastinum, thymus, intrathyroidal, intravasal) or multigland disease",
      "'Hungry bone syndrome' post-op: severe hypocalcemia from rapid bone remineralisation after prolonged PHPT"
    ]
  },
  guidelines: [
    {src:"NIH Consensus on Asymptomatic PHPT 2014 (4th International Workshop, Bilezikian)"},
    {src:"AAES Guidelines: Definitive Management of Primary HPT 2016"},
    {src:"NICE NG132: Hyperparathyroidism (primary)"}
  ],
  pearls: [
    "FHH mimics PHPT biochemically — always calculate UCCR before listing for surgery (FHH 24h urine Ca <100mg/d)",
    "PHPT + malignancy = >90% of all hypercalcemia; PHPT commonest in outpatients, malignancy in inpatients",
    "Hungry bone syndrome: after long-standing HPT, aggressive IV calcium post-op required",
    "Parathyroid carcinoma: hard fixed mass, Ca >14mg/dL, PTH >5× normal — en-bloc excision + ipsilateral thyroid lobe; cinacalcet for refractory hypercalcemia",
    "Hypercalcemic crisis (Ca 16–20mg/dL): 0.9% saline (UO >100cc/h) → furosemide → bisphosphonate/calcitonin → dialysis",
    "Persistent/recurrent HPT — ectopic sites: paraesophageal 28%, mediastinal 26%, intrathymic 24%, intrathyroidal 11%, carotid sheath 9%; redo cure 80–90%"
  ],
  mistakes: [
    "Not excluding FHH — operating on FHH is futile and harmful",
    "Not checking ioPTH — missing multigland disease leads to persistent/recurrent HPT",
    "Omitting Vit D before surgery — 'hungry bone' risk underestimated"
  ]
},
{
  id: "shpt",
  dept: "endocrine",
  name: "Secondary / Tertiary Hyperparathyroidism",
  latin: "Hyperparathyroidismus secundarius et tertiarius",
  organ: "Parathyroid",
  severity: "moderate",
  tags: ["endocrine","parathyroid","renal","dialysis"],
  hero: "Parathyroid hyperplasia secondary to chronic renal failure. Tertiary HPT: autonomous hyperfunction post-transplant. Surgery: 3.5-gland or 4-gland + forearm transplant.",
  keypoints: [
    "Secondary HPT: hypocalcemia/hyperphosphatemia → PTH elevation; multigland hyperplasia",
    "Tertiary HPT: post-renal transplant autonomous hyperfunction — surgical if persistent >12 months",
    "Surgery: subtotal (leave ~50mg) or total + forearm autotransplant + cryopreservation",
    "Parathyroidectomy also indicated if glands >1cm (>500mm³) = nodular, medically refractory",
    "Cinacalcet ± Vit D analogues first-line before surgery",
    "Hungry bone syndrome post-op — aggressive Ca²⁺ replacement"
  ],
  differentials: ["Primary HPT","FHH","Malignancy-associated hypercalcemia (tertiary)","Vitamin D toxicity"],
  mnemonics: [
    {name:"Secondary vs Tertiary", text:"Secondary = Ca²⁺LOW, PTH HIGH (reactive); Tertiary = Ca²⁺HIGH, PTH HIGH (autonomous = like primary now)"}
  ],
  overview: {
    definition: "Secondary HPT: appropriate but excessive PTH secretion in response to hypocalcemia in CKD. Tertiary: autonomous PTH overproduction persisting after renal transplant.",
    epidemiology: "Secondary HPT: present in >70% CKD patients on dialysis. Tertiary HPT: ~25% renal transplant recipients with persistent hypercalcemia.",
    pathophysiology: "CKD → low 1,25-Vit D (impaired renal 1α-hydroxylation) + high PO₄²⁻ + low Ca intake/absorption + abnormal parathyroid Ca/vit-D sensing → all 4 glands hyperplasia → renal osteodystrophy (aluminium-hydroxide binders contribute to osteomalacia). Tertiary: monoclonal expansion → autonomous excess PTH.",
    classification: [
      "Secondary HPT: CKD-MBD (mineral and bone disorder)",
      "Tertiary HPT: post-transplant autonomous hyperfunction"
    ]
  },
  diagnosis: {
    history: [
      "CKD on dialysis (hemodialysis or peritoneal dialysis)",
      "Bone pain, pathological fractures",
      "Pruritus (metastatic calcification)",
      "Calciphylaxis: ischemic skin ulceration (severe — life-threatening)",
      "Post-renal transplant: hypercalcemia persisting >12 months"
    ],
    examination: [
      "Bone tenderness, deformity",
      "Periarticular calcification, calciphylaxis lesions",
      "Ectopic calcification: eyes, vessels, joints"
    ],
    investigations: [
      {name:"Calcium, phosphate, PTH", role:"Secondary: Ca²⁺ low/normal, PO₄ high, PTH very high (>500pg/mL); Tertiary: Ca²⁺ high, PTH high"},
      {name:"ALP", role:"Elevated in bone disease"},
      {name:"25-OH Vitamin D3", role:"Deficient in most CKD patients"},
      {name:"Parathyroid US + MIBI", role:"Localization; secondary HPT usually multigland — helps plan approach"},
      {name:"Hand/wrist X-ray", role:"Subperiosteal resorption (pathognomonic of HPT), rugger-jersey spine"}
    ]
  },
  criteria: {
    title: "Indications for Surgery in Secondary/Tertiary HPT",
    items: [
      {k:"Medical failure (KDOQI)", v:"PTH persistently >800pg/mL despite maximal cinacalcet + Vit D analogue"},
      {k:"Enlarged gland", v:">1cm (>500mm³) on US = nodular hyperplasia, medically refractory"},
      {k:"Traditional criteria", v:"Ca×PO4 product ≥70, Ca >11 with high PTH, tumoral calcinosis despite max medical Rx"},
      {k:"Calciphylaxis", v:"Life-threatening — urgent parathyroidectomy"},
      {k:"Severe bone disease", v:"Fractures, pain uncontrolled; progressive renal osteodystrophy"},
      {k:"Refractory pruritis or ectopic calcification", v:""},
      {k:"Tertiary HPT", v:"Persistent hypercalcemia >12 months post-renal transplant"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Dietary phosphate restriction",
      "Phosphate binders (calcium carbonate, sevelamer)",
      "Active Vitamin D analogues (alfacalcidol, calcitriol)",
      "Cinacalcet (calcimimetic) — reduces PTH and Ca²⁺; EVOLVE trial"
    ],
    medical: [
      "Cinacalcet 30–90mg daily: reduces PTH by 30–50%; may delay surgery",
      "Calcimimetics improve achievement of goal PTH (≤300pg/mL), Ca, PO4, Ca×PO4; reduce fractures/CV events; have reduced parathyroidectomy rates",
      "Etelcalcetide (IV calcimimetic): for hemodialysis patients"
    ],
    surgical: [
      {name:"Subtotal parathyroidectomy (3.5-gland)", when:"Secondary HPT; multigland hyperplasia", notes:"Remove 3.5 glands; leave ~50mg of most normal-looking gland; routine upper (cervical) thymectomy (15–20% intrathymic/perithymic gland); mark remnant with clip"},
      {name:"Total parathyroidectomy + forearm autotransplant", when:"Secondary or tertiary HPT; preferred by many centers as allows future monitoring and re-excision under local anesthetic", notes:"Implant 30–60mg minced tissue into brachioradialis forearm pocket + cryopreservation; mark with clip; monitor PTH from draining arm"},
      {name:"Total parathyroidectomy without autotransplant", when:"Lower recurrence but CONTRAINDICATED if patient is a renal-transplant candidate (permanent hypoparathyroidism)", notes:"Permanent hypocalcemia — aggressive lifelong Ca²⁺ + Vit D supplementation"}
    ]
  },
  technique: {
    title: "Total Parathyroidectomy + Forearm Autotransplant",
    prep: [
      "Dialysis session day before surgery",
      "Identify all 4 parathyroids by pre-op imaging",
      "Prepare forearm pocket (non-dominant brachioradialis)"
    ],
    steps: [
      {n:1, t:"Bilateral neck exploration", d:"Identify all 4 parathyroids; note sizes and positions"},
      {n:2, t:"Select best gland", d:"Choose least enlarged/most normal-appearing gland for transplantation"},
      {n:3, t:"Excise remaining 3.5 glands", d:"Remove enlarged glands; send for frozen section to confirm parathyroid"},
      {n:4, t:"Mince transplant tissue", d:"Mince selected gland on ice into 1mm³ fragments in saline"},
      {n:5, t:"Forearm pocket preparation", d:"Small incision in non-dominant forearm; blunt dissection into brachioradialis"},
      {n:6, t:"Implantation", d:"Place 30–60mg (10–20 fragments) into muscle; mark with hemoclip and non-absorbable suture at skin"},
      {n:7, t:"Post-op calcium", d:"Monitor Ca²⁺ 4-hourly; aggressive IV Ca²⁺ gluconate for hungry bone syndrome"}
    ],
    pearls: [
      "Ectopic parathyroids (10%): intrathymic, retroesophageal, carotid bifurcation — must find all 4",
      "If only 3 glands found: explore thymus (4th gland usually intrathymic if missing)",
      "Cryopreserve additional parathyroid tissue for potential future re-implantation if persistent hypoparathyroidism"
    ]
  },
  guidelines: [
    {src:"KDOQI (NKF) parathyroidectomy indications; KDIGO CKD-MBD 2017"},
    {src:"AAES Guidelines: Renal (Secondary/Tertiary) HPT 2016"},
    {src:"NICE NG203: Chronic kidney disease"}
  ],
  pearls: [
    "Calciphylaxis is a surgical emergency — urgent parathyroidectomy (not waiting for medical optimization)",
    "Not all calciphylaxis has high PTH — do NOT operate without documented HPT",
    "Tertiary HPT operative debate: excise-enlarged-only vs subtotal — limited excision risks up to 5× recurrence",
    "Hungry bone syndrome worse after bilateral total parathyroidectomy — anticipate severe hypocalcemia",
    "Mark forearm transplant site clearly — future PTH gradient sampling needed to confirm function"
  ],
  mistakes: [
    "Not finding all 4 glands — remnant disease is most common cause of recurrent HPT",
    "Not cryopreserving extra tissue — cannot re-implant if patient develops permanent hypocalcemia",
    "Operating without pre-op dialysis optimization — coagulopathy and fluid overload complicate surgery"
  ]
}
];
