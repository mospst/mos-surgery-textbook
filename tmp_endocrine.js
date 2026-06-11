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
  differentials: ["Fibroadenoma","Fibrocystic change","Phyllodes tumour","Fat necrosis","Abscess","Lipoma","Metastasis"],
  mnemonics: [
    {name:"Triple Assessment", text:"C-I-H: Clinical + Imaging (US/MMG) + Histology (core biopsy)"},
    {name:"TNM Stage I–IV", text:"I: <2cm N0; II: 2–5cm or N1; III: locally advanced; IV: metastatic"}
  ],
  overview: {
    definition: "Malignant neoplasm arising from breast epithelium; 80% invasive ductal carcinoma (IDC), 10% invasive lobular (ILC).",
    epidemiology: "1 in 8 lifetime risk in women. Peak incidence 50–70 yrs. Leading cause of cancer death in women <50.",
    pathophysiology: "Hormone-driven proliferation (ER/PR+), HER2 overexpression, or triple-negative (TNBC). BRCA1/2 mutations impair DNA repair.",
    classification: [
      "IDC (NST) – most common",
      "ILC – multifocal, bilateral risk",
      "DCIS – non-invasive precursor",
      "Inflammatory – dermal lymphatic invasion",
      "Paget disease – nipple involvement",
      "Receptor subtypes: Luminal A/B, HER2-enriched, TNBC"
    ]
  },
  diagnosis: {
    history: [
      "Painless lump (most common presentation)",
      "Nipple discharge (blood-stained suspicious)",
      "Nipple inversion, skin changes (peau d'orange, tethering)",
      "Family history BRCA, previous chest radiation",
      "Axillary lymphadenopathy",
      "Bone pain, dyspnoea, hepatomegaly (metastatic)"
    ],
    examination: [
      "Inspect: asymmetry, skin dimpling, nipple changes",
      "Palpate lump: hard, irregular, fixed, non-tender",
      "Axillary, supraclavicular, infraclavicular nodes",
      "Liver size, spinal tenderness (metastatic)"
    ],
    investigations: [
      {name:"Bilateral mammography", role:"First-line imaging >35 yrs; microcalcifications suggest DCIS"},
      {name:"Ultrasound breast", role:"<35 yrs or dense breasts; characterise mass; guide biopsy"},
      {name:"MRI breast", role:"BRCA carriers, lobular cancers, implants, pre-op planning"},
      {name:"Core needle biopsy", role:"Histology + ER/PR/HER2 + Ki67 — mandatory before surgery"},
      {name:"Staging CT CAP", role:"If locally advanced or suspicious metastatic features"},
      {name:"Bone scan / PET-CT", role:"Symptomatic bone disease or stage III+"},
      {name:"BRCA1/2 testing", role:"Young (<45), bilateral, family history, TNBC"}
    ]
  },
  criteria: {
    title: "Nottingham Grading System (SBR)",
    items: [
      {k:"Tubule formation", v:"1–3 points"},
      {k:"Nuclear pleomorphism", v:"1–3 points"},
      {k:"Mitotic count", v:"1–3 points"},
      {k:"Grade 1 (well)", v:"3–5 total"},
      {k:"Grade 2 (moderate)", v:"6–7 total"},
      {k:"Grade 3 (poorly)", v:"8–9 total"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Multidisciplinary team (MDT) decision mandatory",
      "Neoadjuvant chemotherapy for HER2+, TNBC, large tumours",
      "Neoadjuvant endocrine therapy for ER+ postmenopausal",
      "Annual surveillance mammography post-treatment"
    ],
    medical: [
      "Adjuvant chemotherapy: anthracycline/taxane regimens (AC-T)",
      "Trastuzumab (Herceptin) × 12 months if HER2+",
      "Tamoxifen 5–10 yrs (premenopausal ER+) or aromatase inhibitor (postmenopausal)",
      "CDK4/6 inhibitors (palbociclib) for metastatic luminal",
      "Olaparib for BRCA-mutated metastatic"
    ],
    surgical: [
      {name:"Breast-conserving surgery (BCS)", when:"Early disease (T1–2, favourable location); requires clear margins (≥1mm NST)", notes:"Followed by adjuvant whole-breast radiotherapy mandatory"},
      {name:"Mastectomy (simple/modified radical)", when:"Large tumour, multifocal, patient preference, BRCA mutation, post-BCS re-excision failure", notes:"Modified radical includes axillary clearance level I–III"},
      {name:"Sentinel lymph node biopsy (SLNB)", when:"Clinically/radiologically node-negative — standard of care", notes:"Use blue dye + radioisotope (dual technique); if ≥1 macro-metastasis → ALND vs. adjuvant RT decision"},
      {name:"Axillary lymph node dissection (ALND)", when:"Positive SLNB (selected patients), inflammatory breast cancer, clinically node-positive pre-treatment", notes:"Levels I–III; risks: lymphoedema, nerve injury, seroma"},
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
      {n:5, t:"Pathology", d:"Intraoperative touch imprint or frozen section (some centres); formal H&E ± IHC"},
      {n:6, t:"Decision", d:"If macro-metastasis: proceed to ALND or plan axillary RT per protocol"}
    ],
    pearls: [
      "Dual technique (isotope + blue dye) improves detection rate to >95%",
      "If no SLN found: low axillary dissection to level I",
      "ACOSOG Z0011: ALND may be omitted if 1–2 SLN macro-metastases with BCS + whole breast RT"
    ]
  },
  guidelines: [
    {src:"NICE NG101: Early and locally advanced breast cancer diagnosis and management"},
    {src:"St Gallen Consensus 2023: Primary therapy of early breast cancer"},
    {src:"ASCO/SSO: SLNB for early-stage breast cancer guidelines"},
    {src:"NCCN Breast Cancer v4.2024"}
  ],
  pearls: [
    "Palpable lump in woman >35 → mammogram + ultrasound + core biopsy (triple assessment)",
    "DCIS management: BCS + RT or mastectomy; no SLNB unless mastectomy/high-risk DCIS",
    "Occult primary (axillary met, no breast mass): MRI + biopsy → treat as stage II breast cancer",
    "Inflammatory breast cancer: neoadjuvant chemo → mastectomy (NOT BCS) → RT",
    "Lymphoedema risk after ALND: lifelong; patient education critical"
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
  hero: "Non-invasive breast cancer confined to ducts. Risk of progression to invasive cancer ~30% over 10 years without treatment.",
  keypoints: [
    "Often detected by screening mammogram (microcalcifications)",
    "No metastatic potential while truly in situ",
    "BCS + RT is standard; mastectomy for extensive/multifocal DCIS",
    "SLNB only if mastectomy or high-grade/large DCIS (occult invasion risk)",
    "Van Nuys Prognostic Index guides treatment intensity"
  ],
  differentials: ["Invasive ductal carcinoma","Lobular carcinoma in situ (LCIS)","Atypical ductal hyperplasia","Fibrocystic change with calcification","Fat necrosis"],
  mnemonics: [
    {name:"Van Nuys Index", text:"Size + Margin + Grade + Age → low (4–6) watch, high (10–12) mastectomy"}
  ],
  overview: {
    definition: "Clonal proliferation of malignant epithelial cells confined within ducts, with intact basement membrane. Obligate precursor of invasive cancer.",
    epidemiology: "20–25% of all screen-detected breast cancers. Incidence increased 5-fold post-mammographic screening.",
    pathophysiology: "Loss of cell polarity, E-cadherin preserved (unlike LCIS). Necrosis → calcification (comedo subtype). Progression requires basement membrane breach.",
    classification: [
      "Grade: low, intermediate, high",
      "Architecture: comedo, cribriform, micropapillary, papillary, solid",
      "Comedo-type: central necrosis, high grade, worse prognosis",
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
      {name:"Clip placement at biopsy", role:"Essential to localise lesion if calcifications removed by biopsy"}
    ]
  },
  criteria: {
    title: "Van Nuys Prognostic Index (USC/VNPI)",
    items: [
      {k:"Score 4–6", v:"Excision alone (low recurrence risk)"},
      {k:"Score 7–9", v:"Excision + radiotherapy"},
      {k:"Score 10–12", v:"Mastectomy recommended"},
      {k:"Parameters", v:"Size (≤15mm/16–40mm/>40mm), Margin (<1/1–9/≥10mm), Grade (low/int/high), Age (<40/40–60/>60)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance (low-grade, small, elderly patient): emerging evidence from LORIS/LORD trials",
      "Annual mammography post-BCS for ≥5 years",
      "Tamoxifen reduces ipsilateral recurrence risk (both DCIS and invasive) by ~40%"
    ],
    medical: [
      "Tamoxifen 5 yrs (ER+, premenopausal): reduces risk of ipsilateral + contralateral events",
      "Aromatase inhibitors (anastrozole/exemestane) for postmenopausal ER+ DCIS"
    ],
    surgical: [
      {name:"Breast-conserving surgery (wide local excision)", when:"Unifocal DCIS, achievable clear margins (≥2mm for DCIS vs ≥1mm for invasive)", notes:"Wire/ROLL/SAVI Scout localisation for impalpable lesions"},
      {name:"Mastectomy", when:"Multifocal/diffuse DCIS, inability to achieve clear margins, patient preference, BRCA mutation", notes:"Simple mastectomy (no ALND needed unless invasive component found)"},
      {name:"SLNB", when:"Mastectomy for DCIS (occult invasion ~10–15%); high-grade/large DCIS at BCS", notes:"Not routinely required for all DCIS — only if invasive upstaging likely"}
    ]
  },
  technique: {
    title: "Wire-guided / ROLL Localisation for Impalpable DCIS",
    prep: [
      "Radiologist places hookwire or injects radioactive seed (ROLL) in mammographic calcifications",
      "Specimen X-ray in theatre to confirm calcification excision"
    ],
    steps: [
      {n:1, t:"Incision", d:"Plan over calcification site; periareolar or radial incision for cosmesis"},
      {n:2, t:"Excision", d:"Excise tissue around wire/seed with ≥10mm margin all sides"},
      {n:3, t:"Specimen X-ray", d:"Confirm microcalcifications present and central in specimen"},
      {n:4, t:"Orientation", d:"Mark specimen with clips/sutures in ≥3 planes for pathologist"},
      {n:5, t:"Frozen section / intraop cavity shaving", d:"Some centres shave cavity margins to reduce re-excision rate"},
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
    {src:"SSO-ASTRO-ASCO Margins in DCIS 2016 guideline"},
    {src:"LORIS/LORD trials: active surveillance for low-risk DCIS (ongoing)"}
  ],
  pearls: [
    "DCIS cannot metastasise — it is the invasion that kills; reassure patients appropriately",
    "Margin adequacy critical: 2mm radial margin reduces local recurrence regardless of RT",
    "SLNB not routinely needed for BCS DCIS — only if mastectomy or high-grade/large (risk of occult invasion)",
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
  name: "Phyllodes Tumour",
  latin: "Tumor phyllodes mammae",
  organ: "Breast",
  severity: "moderate",
  tags: ["oncology","breast","rare","stromal"],
  hero: "Rare fibroepithelial tumour of breast stroma. Wide local excision with clear margins is key — malignant variant metastasises haematogenously.",
  keypoints: [
    "Classified: benign, borderline, malignant by histology",
    "Wide local excision with ≥1cm clear margins (or mastectomy if large)",
    "Axillary node dissection NOT indicated — metastases via bloodstream",
    "Malignant phyllodes: lung most common metastatic site",
    "High local recurrence risk if margins inadequate"
  ],
  differentials: ["Fibroadenoma","Breast sarcoma","Invasive breast carcinoma","Lipoma","Abscess"],
  mnemonics: [
    {name:"Phyllodes vs Fibroadenoma", text:"Phyllodes = rapidly GROWING, older woman, LEAF-like architecture on histology"}
  ],
  overview: {
    definition: "Fibroepithelial neoplasm with biphasic epithelial and cellular stromal components in leaf-like pattern. Spectrum: benign (60%), borderline (15%), malignant (25%).",
    epidemiology: "Rare: <1% of breast neoplasms. Median age 45 yrs (older than fibroadenoma). Commonest in Asian women.",
    pathophysiology: "Stromal overgrowth with variable cellularity and mitotic activity. Malignant variant = breast sarcoma with haematogenous metastasis.",
    classification: [
      "Benign: mild stromal cellularity, <5 mitoses/10HPF, no overgrowth",
      "Borderline: moderate cellularity, 5–9 mitoses/10HPF",
      "Malignant: >10 mitoses/10HPF, stromal overgrowth, heterologous elements"
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
      {name:"Mammography", role:"Dense circumscribed mass; may show lobulated margins"},
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
      {name:"Wide local excision (WLE)", when:"All grades; aim ≥1cm margin all sides", notes:"Mastectomy if tumour:breast ratio unfavourable or margins unachievable"},
      {name:"Mastectomy", when:"Large tumour (>5cm), recurrent disease, diffuse involvement", notes:"No need for ALND regardless of tumour grade — haematogenous spread"},
      {name:"Re-excision", when:"Positive or close (<1cm) margins", notes:"Local recurrence risk directly proportional to margin adequacy"}
    ]
  },
  technique: {
    title: "Wide Local Excision with 1cm Margin",
    prep: [
      "Mark skin with 1cm radius around palpable/imaged tumour margin",
      "Consider oncoplastic reshaping if volume significant"
    ],
    steps: [
      {n:1, t:"Incision", d:"Periareolar or radial; place incision to allow re-excision or mastectomy if needed"},
      {n:2, t:"Dissection", d:"Excise en-bloc with 1cm healthy breast tissue on all surfaces including deep pectoral fascia if posteriorly located"},
      {n:3, t:"Orientation", d:"Orient specimen in ≥3 planes with clips/sutures for pathologist"},
      {n:4, t:"Haemostasis", d:"Thorough haemostasis; closed suction drain if large cavity"},
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
    {src:"WHO Classification of Breast Tumours 2019"},
    {src:"Tan et al. Int J Surg 2016: Management of phyllodes tumours"}
  ],
  pearls: [
    "Rapidly growing breast mass in a 40+ year-old woman — think phyllodes, not fibroadenoma",
    "Do NOT perform ALND — axillary nodes not involved even in malignant phyllodes",
    "Malignant phyllodes: 5-year survival ~60% if localised; pulmonary metastases common",
    "Previous excision with shelling technique is inadequate — re-excision with margins required"
  ],
  mistakes: [
    "Shelling out the tumour (enucleation) — high local recurrence rate",
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
    "Total thyroidectomy for >1cm PTC or any FTC/MTC/ATC",
    "Central neck dissection (level VI) for clinically positive nodes",
    "Radioiodine (RAI) ablation post-thyroidectomy for high-risk PTC",
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
    pathophysiology: "PTC: BRAF V600E (40–60%), RET/PTC rearrangements. FTC: RAS mutations, PAX8-PPARγ. MTC: RET mutations (25% hereditary — MEN2A/2B, FMTC). ATC: dedifferentiation from PTC/FTC.",
    classification: [
      "Papillary thyroid carcinoma (PTC) — 80%",
      "Follicular thyroid carcinoma (FTC) — 10%",
      "Medullary thyroid carcinoma (MTC) — 5%",
      "Anaplastic thyroid carcinoma (ATC) — <1%",
      "Lymphoma, squamous cell carcinoma (rare)"
    ]
  },
  diagnosis: {
    history: [
      "Incidentally discovered thyroid nodule (most common)",
      "Palpable neck mass — painless, lower neck",
      "Hoarseness (RLN invasion), dysphagia (oesophageal involvement)",
      "Rapid growth suggests anaplastic",
      "Family history MTC, MEN2, or previous neck irradiation",
      "Diarrhoea in MTC (calcitonin effect)"
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
    title: "Bethesda System for Thyroid Cytopathology",
    items: [
      {k:"I: Non-diagnostic", v:"Repeat FNAC"},
      {k:"II: Benign", v:"Follow-up US"},
      {k:"III: AUS/FLUS", v:"Repeat FNAC or molecular testing or lobectomy"},
      {k:"IV: Follicular neoplasm", v:"Lobectomy (can't distinguish adenoma from FTC on cytology)"},
      {k:"V: Suspicious malignancy", v:"Total thyroidectomy"},
      {k:"VI: Malignant", v:"Total thyroidectomy ± CND"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance for low-risk papillary microcarcinoma (<1cm, no invasion, elderly): ATA guideline option",
      "Levothyroxine suppression therapy post-thyroidectomy (TSH <0.1 for high-risk, 0.1–0.5 low-risk)",
      "Thyroglobulin + neck US at 6–12 months post-op surveillance"
    ],
    medical: [
      "Radioiodine (I-131) ablation: high-risk PTC post-thyroidectomy; remnant ablation + treatment of metastases",
      "Lenvatinib/sorafenib: RAI-refractory differentiated thyroid cancer",
      "Vandetanib/cabozantinib: advanced/metastatic MTC",
      "Dabrafenib + trametinib: BRAF V600E mutant ATC (rarely curative)"
    ],
    surgical: [
      {name:"Total thyroidectomy", when:"PTC >1cm, FTC (all), MTC (all), ATC (if resectable)", notes:"Mandatory laryngoscopy pre-op; meticulous RLN and parathyroid identification; drain optional"},
      {name:"Thyroid lobectomy (hemithyroidectomy)", when:"Low-risk PTC <1cm, solitary Bethesda IV follicular neoplasm", notes:"Completion thyroidectomy if final histology shows intermediate/high-risk features"},
      {name:"Central neck dissection (level VI)", when:"Clinically positive central nodes (cN1a); prophylactic CND for T3/T4 PTC or MTC", notes:"Risk: bilateral RLN injury; permanent hypoparathyroidism"},
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
      {n:4, t:"RLN identification", d:"Identify RLN in tracheo-oesophageal groove; trace to Berry's ligament. Use nerve monitor if available"},
      {n:5, t:"Parathyroid identification", d:"Identify and preserve superior and inferior parathyroids with their pedicles; auto-transplant if devascularised"},
      {n:6, t:"Inferior thyroid artery", d:"Ligate branches of ITA close to thyroid (not main trunk) to preserve parathyroid blood supply"},
      {n:7, t:"Berry's ligament", d:"Divide carefully — RLN enters larynx here; highest risk zone"},
      {n:8, t:"Tracheal division", d:"Divide isthmus and remove lobe; repeat contralateral side"},
      {n:9, t:"Haemostasis and closure", d:"Meticulous haemostasis; reapproximate strap muscles; drain optional; subcuticular closure"}
    ],
    pearls: [
      "Nerve monitor: use throughout but do not rely solely — tactile identification essential",
      "Parathyroid auto-transplant: mince into 1mm³ pieces, implant in sternocleidomastoid pocket",
      "Post-op: check Ca²⁺ at 6 and 24 hours; supplement if symptomatic or Ca²⁺ <2.0mmol/L"
    ]
  },
  guidelines: [
    {src:"ATA 2015 Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer"},
    {src:"NICE DG41: Thyroid cancer (gene expression classifier)"},
    {src:"BTA Guidelines 2014: Differentiated thyroid cancer management"}
  ],
  pearls: [
    "PTC with positive nodes does NOT worsen disease-specific survival in low-risk patients",
    "Always exclude phaeochromocytoma before operating on MTC (cardiovascular crisis otherwise)",
    "Prophylactic thyroidectomy timing in MEN2B: within months of birth; MEN2A: by age 5",
    "Chylous fistula after lateral neck dissection: medium-chain triglyceride diet ± reoperation"
  ],
  mistakes: [
    "Not checking vocal cords pre-op — post-op hoarseness attribution unclear",
    "Ligating main inferior thyroid artery trunk — devascularises parathyroids",
    "Operating on MTC without first excluding phaeochromocytoma — anaesthetic catastrophe",
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
    "Total thyroidectomy for: large goitre, severe ophthalmopathy, ATD failure/relapse, coexistent nodule",
    "Make euthyroid before surgery with ATD ± Lugol's iodine (5–10 days pre-op)",
    "Thyroid storm: life-threatening; treat with beta-blocker + ATD + steroids + Lugol's"
  ],
  differentials: ["Toxic multinodular goitre","Toxic adenoma","Subacute thyroiditis","Factitious hyperthyroidism","Struma ovarii"],
  mnemonics: [
    {name:"Graves features", text:"GOITRE: Goitre + Ophthalmopathy + Increased metabolism + TSH↓ + TRAb+ + Eye disease"},
    {name:"Thyroid storm Tx", text:"BBBSS: Beta-blocker + Block (ATD) + Block release (Lugol) + Steroids + Supportive"}
  ],
  overview: {
    definition: "Organ-specific autoimmune disease with TSH-receptor stimulating antibodies (TRAb/TSI) causing hyperthyroidism, diffuse goitre and extrathyroidal manifestations.",
    epidemiology: "Most common cause of hyperthyroidism (60–80%). F:M = 7:1. Peak age 20–50 yrs. Associated with HLA-DR3, HLA-B8.",
    pathophysiology: "TRAb binds TSH receptor → constitutive thyroid stimulation → T3/T4 overproduction. IL-1, IGF-1 in orbital fibroblasts → glycosaminoglycan deposition → exophthalmos.",
    classification: [
      "Graves hyperthyroidism",
      "Graves ophthalmopathy (GO) — active vs inactive, mild/moderate/severe",
      "Graves dermopathy (pretibial myxoedema) — rare",
      "Graves acropachy — very rare"
    ]
  },
  diagnosis: {
    history: [
      "Weight loss with increased appetite, heat intolerance, sweating",
      "Palpitations, tremor, anxiety, insomnia",
      "Neck swelling (goitre)",
      "Eye symptoms: grittiness, diplopia, proptosis, periorbital oedema",
      "Diarrhoea, oligomenorrhoea",
      "Family history of autoimmune thyroid disease"
    ],
    examination: [
      "Diffuse smooth goitre with bruit",
      "Proptosis, lid lag, lid retraction, chemosis (Graves ophthalmopathy)",
      "Tremor, proximal myopathy, hyperreflexia",
      "AF, tachycardia",
      "Pretibial myxoedema (non-pitting oedema over shins)"
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
  scoring: [],
  management: {
    conservative: [
      "Beta-blocker (propranolol/atenolol) for immediate symptom control",
      "ATD (carbimazole 20–40mg/day or PTU) for 12–18 months; 50% relapse rate",
      "Ophthalmopathy: selenium, IV steroids for active moderate-severe; radiotherapy; orbital decompression"
    ],
    medical: [
      "Carbimazole: agranulocytosis risk (warn to stop if fever/sore throat)",
      "PTU: preferred in pregnancy 1st trimester; hepatotoxicity risk",
      "Radioiodine (I-131): contraindicated in active moderate-severe ophthalmopathy (worsens GO)",
      "Lugol's iodine (potassium iodide): 5 drops TDS for 10 days pre-op — reduces vascularity and thyroid hormone release"
    ],
    surgical: [
      {name:"Total thyroidectomy", when:"Large goitre; severe active ophthalmopathy (definitive control — better than RAI for GO); ATD failure/intolerance; patient preference; suspicious nodule", notes:"Make euthyroid first; avoid thyroid storm intra/post-op; life-long thyroxine replacement"},
      {name:"Subtotal thyroidectomy", when:"Rarely used now — risk of recurrent hyperthyroidism; near-total preferred if not bilateral total", notes:"Bilaterally leave <3g thyroid remnant to reduce recurrence"}
    ]
  },
  technique: {
    title: "Pre-operative Preparation for Total Thyroidectomy in Graves'",
    prep: [
      "Render euthyroid: carbimazole 4–6 weeks pre-op (until TFTs normal)",
      "Lugol's iodine 0.1–0.2mL TDS for 10 days pre-op (reduces vascularity)",
      "Beta-blocker continued until morning of surgery",
      "Anaesthetic team alert to thyroid storm risk"
    ],
    steps: [
      {n:1, t:"Positioning", d:"Supine with extended neck; shoulder roll; table anti-Trendelenburg 15°"},
      {n:2, t:"Kocher incision", d:"2 finger-breadths above sternal notch; 5–6cm; in skin crease"},
      {n:3, t:"Superior pole first", d:"Large Graves gland: superior pedicle ligation close to thyroid to preserve SLN-external branch"},
      {n:4, t:"Vascularity management", d:"Highly vascular; control bleeding meticulously — Graves goitres bleed significantly"},
      {n:5, t:"RLN and parathyroid", d:"Routine identification — essential given enlarged gland distorts anatomy"},
      {n:6, t:"Total excision", d:"Remove all thyroid tissue to prevent recurrent hyperthyroidism"},
      {n:7, t:"Drain", d:"Consider drain in large Graves goitres — haematoma risk"}
    ],
    pearls: [
      "Largest goitres bleed most — Lugol's iodine pre-op is essential",
      "Ophthalmopathy may worsen post-RAI but stabilises or improves post-surgery",
      "Post-op: start thyroxine 100mcg immediately; check TSH at 6 weeks"
    ]
  },
  guidelines: [
    {src:"ETA/EUGOGO Guidelines 2018: Management of Graves hyperthyroidism"},
    {src:"ATA 2016: Hyperthyroidism and other causes of thyrotoxicosis"},
    {src:"NICE NG145: Thyroid disease assessment and management"}
  ],
  pearls: [
    "Radioiodine contraindicated in active moderate-severe Graves ophthalmopathy — worsens GO",
    "PTU preferred over carbimazole in first trimester pregnancy and thyroid storm",
    "Thyroid storm: remove trigger (infection, surgery, RAI) + propranolol + PTU + Lugol's + hydrocortisone + cooling"
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
    pathophysiology: "Recurrent cycles of hyperplasia and involution. Autonomous foci → toxic MNG. Risk of malignancy in dominant nodule ~5%.",
    classification: [
      "Euthyroid MNG (most common)",
      "Toxic MNG (Plummer disease): autonomous hyperthyroidism from hot nodules",
      "Simple/colloid MNG",
      "Substernal/intrathoracic goitre (>50% below thoracic inlet)"
    ]
  },
  diagnosis: {
    history: [
      "Long-standing neck swelling, often slow-growing",
      "Compressive symptoms: dysphagia (oesophageal), stridor (tracheal), voice change (RLN)",
      "Symptoms of hyperthyroidism (toxic MNG)",
      "Rapid enlargement suggests haemorrhage into cyst or malignancy",
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
      {k:"Rapid growth", v:"Concern for malignancy or haemorrhage"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Asymptomatic small MNG: annual TFT + US surveillance",
      "Iodine supplementation in endemic areas to prevent further growth",
      "Thyroxine suppression not recommended (cardiovascular risks outweigh benefit)"
    ],
    medical: [
      "Carbimazole for toxic MNG pre-operatively",
      "Radioiodine for toxic MNG (elderly, poor surgical candidates) — reduces volume 30–50%"
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
      {n:2, t:"Mobilise superior lobe", d:"Divide superior pedicle first; free upper lobe and contralateral lobe"},
      {n:3, t:"Blunt finger dissection", d:"Index finger behind sternum; break down avascular mediastinal attachments to free substernal component"},
      {n:4, t:"Deliver substernal lobe", d:"Gentle traction + blunt dissection delivers lobe into neck; ligate inferior thyroid veins"},
      {n:5, t:"RLN identification", d:"Distorted anatomy — careful at inferior edge of substernal mass"},
      {n:6, t:"Parathyroids", d:"Inferior parathyroids often displaced into mediastinum — identify and preserve or auto-transplant"}
    ],
    pearls: [
      "Never pull hard on substernal component — risk of RLN avulsion or vascular tear",
      "If sternotomy needed: incision extends from Kocher to angle of Louis",
      "Post-op airway: tracheomalacia rare but watch for in long-standing compression"
    ]
  },
  guidelines: [
    {src:"BTA Guidelines: Management of thyroid nodule and goitre"},
    {src:"European Thyroid Association 2019: Multinodular goitre guidelines"},
    {src:"ATA 2015: Thyroid nodule management"}
  ],
  pearls: [
    "Pemberton's sign positive = substernal goitre until proven otherwise — get CT",
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
  hero: "Most common cause of hypercalcaemia in outpatients. Single parathyroid adenoma in 85%. Minimally invasive parathyroidectomy is curative in >95%.",
  keypoints: [
    "Classic presentation: 'bones, stones, groans, moans' (now mostly asymptomatic)",
    "Single adenoma 85%, multigland disease 15%, carcinoma <1%",
    "MIBI scan + US for localisation before focused parathyroidectomy",
    "Intraoperative PTH (ioPTH): drop >50% from baseline = cure",
    "MEN1 and MEN2A: multigland disease — 3.5 gland resection"
  ],
  differentials: ["Malignancy-associated hypercalcaemia","Sarcoidosis","Vitamin D toxicity","Thiazide diuretics","Familial hypocalciuric hypercalcaemia (FHH)","Secondary HPT"],
  mnemonics: [
    {name:"Symptoms", text:"Bones (osteitis fibrosa cystica) + Stones (renal calculi) + Groans (GI: nausea, constipation) + Moans (psycho: depression, fatigue)"},
    {name:"FHH exclusion", text:"Urine calcium:creatinine clearance ratio <0.01 = FHH (avoid surgery in FHH!)"}
  ],
  overview: {
    definition: "Autonomous overproduction of PTH from one or more hyperfunctioning parathyroid glands causing hypercalcaemia.",
    epidemiology: "Prevalence 1 in 500–1000. F:M = 3:1. Peak incidence post-menopause. 3rd most common endocrine disorder after diabetes and thyroid disease.",
    pathophysiology: "Single adenoma (85%): monoclonal expansion of chief cells; PTH drives osteoclastic bone resorption, renal tubular Ca²⁺ reabsorption, intestinal absorption via Vit D activation.",
    classification: [
      "Sporadic (most common)",
      "MEN1 (parathyroid + pituitary + pancreas): MENIN mutation",
      "MEN2A (parathyroid + MTC + phaeochromocytoma): RET mutation",
      "Familial isolated HPT",
      "Parathyroid carcinoma (<1%)"
    ]
  },
  diagnosis: {
    history: [
      "Often asymptomatic — incidental hypercalcaemia",
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
      {name:"Intact PTH (iPTH)", role:"Elevated or inappropriately normal in PHPT; low in malignancy-associated"},
      {name:"24-hour urine calcium", role:"Elevated in PHPT; low in FHH (UCCR <0.01 = FHH — do NOT operate)"},
      {name:"Serum phosphate", role:"Low-normal in PHPT"},
      {name:"Vitamin D (25-OH-D3)", role:"Replete Vit D before surgery — masking exacerbation"},
      {name:"Tc-99m sestamibi (MIBI) scan", role:"Single photon emission CT (SPECT) for localisation — sensitivity 80%"},
      {name:"Neck ultrasound", role:"Localisation; complementary to MIBI; detects 75%"},
      {name:"4D-CT parathyroid", role:"Failed previous localisation; secondary/tertiary HPT; rapid phase contrast CT"},
      {name:"DEXA scan", role:"Bone mineral density — L-spine, hip, radius; guides surgical indication"}
    ]
  },
  criteria: {
    title: "Surgical Indications in Asymptomatic PHPT (4th International Workshop 2022)",
    items: [
      {k:"Serum calcium", v:">0.25mmol/L above upper limit of normal"},
      {k:"T-score", v:"≤ −2.5 at any site OR vertebral fracture"},
      {k:"Creatinine clearance", v:"<60 mL/min"},
      {k:"24h urine calcium", v:">400mg/day with increased stone risk"},
      {k:"Renal imaging", v:"Nephrolithiasis or nephrocalcinosis"},
      {k:"Age", v:"<50 years"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Asymptomatic without surgical criteria: annual Ca²⁺, annual creatinine, DEXA every 1–2 years",
      "Adequate hydration, avoid thiazides, immobilisation",
      "Cinacalcet (calcimimetic) for hypercalcaemia control if not surgical candidate"
    ],
    medical: [
      "Cinacalcet: reduces PTH and Ca²⁺ but does not improve BMD significantly",
      "Bisphosphonates: improve BMD but do not reduce Ca²⁺",
      "Vitamin D repletion: replete to >50nmol/L before surgery (deficiency may mask extent)"
    ],
    surgical: [
      {name:"Minimally invasive parathyroidectomy (MIP/focused parathyroidectomy)", when:"Concordant localisation (MIBI + US agree); single gland disease", notes:"Unilateral neck exploration + ioPTH confirmation; local/GA; day case"},
      {name:"Bilateral neck exploration (BNE)", when:"Failed/discordant localisation; MEN1/2A; familial HPT; reoperative HPT; suspected multigland disease", notes:"All 4 glands identified and assessed; abnormal glands removed"},
      {name:"3.5-gland parathyroidectomy", when:"MEN1 (all 4 glands usually enlarged) — subtotal parathyroidectomy", notes:"Leave 50mg vascularised remnant in sternocleidomastoid; mark with clip"},
      {name:"4-gland parathyroidectomy + auto-transplant", when:"MEN1 or severe multigland disease; forearm transplant", notes:"Implant into non-dominant forearm brachioradialis; allows monitoring and re-excision if recurrent"}
    ]
  },
  technique: {
    title: "Minimally Invasive Parathyroidectomy with ioPTH",
    prep: [
      "Concordant MIBI + US localisation pre-op",
      "Baseline iPTH taken at induction",
      "Position as for thyroidectomy; local anaesthetic infiltration"
    ],
    steps: [
      {n:1, t:"Incision", d:"Small (2–3cm) incision over localised adenoma; oblique over medial SCM border"},
      {n:2, t:"Exposure", d:"Dissect through lateral to strap muscles (Miami approach) or medial to muscles"},
      {n:3, t:"Adenoma identification", d:"Identify enlarged hypervascular parathyroid; confirm intraoperatively with gamma probe if radio-guided (MIRP)"},
      {n:4, t:"Excision", d:"Excise adenoma; clip pedicle; send for rapid frozen section (confirms parathyroid tissue)"},
      {n:5, t:"ioPTH at 5 and 10 min post-excision", d:"Miami criterion: PTH drops >50% from highest pre-excision value AND into normal range"},
      {n:6, t:"Decision", d:"Successful ioPTH drop → close; inadequate drop → bilateral exploration for multigland disease"}
    ],
    pearls: [
      "ioPTH half-life: 3–5 minutes; measure at 5 and 10 min post-excision",
      "If ioPTH fails to drop: ectopic gland (mediastinum, thymus, intrathyroidal, intravasal) or multigland disease",
      "'Hungry bone syndrome' post-op: severe hypocalcaemia from rapid bone remineralisation after prolonged PHPT"
    ]
  },
  guidelines: [
    {src:"4th International Workshop on Asymptomatic PHPT 2022"},
    {src:"NICE NG132: Hyperparathyroidism (primary)"},
    {src:"AAES Endocrine Surgery Guidelines: Primary HPT 2016"}
  ],
  pearls: [
    "FHH mimics PHPT biochemically — always calculate UCCR before listing for surgery",
    "Hungry bone syndrome: after long-standing HPT, aggressive IV calcium post-op required",
    "Parathyroid carcinoma: hard fixed mass, very high Ca²⁺ (>3.5), very high PTH (>5× normal) — en-bloc resection"
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
    "Secondary HPT: hypocalcaemia/hyperphosphataemia → PTH elevation; multigland hyperplasia",
    "Tertiary HPT: post-renal transplant autonomous hyperfunction — surgical if persistent >12 months",
    "Surgery: subtotal (3.5-gland) or total + forearm autotransplant",
    "Cinacalcet ± Vit D analogues first-line before surgery",
    "Hungry bone syndrome post-op — aggressive Ca²⁺ replacement"
  ],
  differentials: ["Primary HPT","FHH","Malignancy-associated hypercalcaemia (tertiary)","Vitamin D toxicity"],
  mnemonics: [
    {name:"Secondary vs Tertiary", text:"Secondary = Ca²⁺LOW, PTH HIGH (reactive); Tertiary = Ca²⁺HIGH, PTH HIGH (autonomous = like primary now)"}
  ],
  overview: {
    definition: "Secondary HPT: appropriate but excessive PTH secretion in response to hypocalcaemia in CKD. Tertiary: autonomous PTH overproduction persisting after renal transplant.",
    epidemiology: "Secondary HPT: present in >70% CKD patients on dialysis. Tertiary HPT: ~25% renal transplant recipients with persistent hypercalcaemia.",
    pathophysiology: "CKD → low 1,25-Vit D (impaired 1α-hydroxylation) → low Ca²⁺ + high PO₄²⁻ → PTH → all 4 glands hyperplasia → bone disease (renal osteodystrophy). Tertiary: monoclonal expansion → autonomous excess PTH.",
    classification: [
      "Secondary HPT: CKD-MBD (mineral and bone disorder)",
      "Tertiary HPT: post-transplant autonomous hyperfunction"
    ]
  },
  diagnosis: {
    history: [
      "CKD on dialysis (haemodialysis or peritoneal dialysis)",
      "Bone pain, pathological fractures",
      "Pruritus (metastatic calcification)",
      "Calciphylaxis: ischaemic skin ulceration (severe — life-threatening)",
      "Post-renal transplant: hypercalcaemia persisting >12 months"
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
      {name:"Parathyroid US + MIBI", role:"Localisation; secondary HPT usually multigland — helps plan approach"},
      {name:"Hand/wrist X-ray", role:"Subperiosteal resorption (pathognomonic of HPT), rugger-jersey spine"}
    ]
  },
  criteria: {
    title: "Indications for Surgery in Secondary/Tertiary HPT",
    items: [
      {k:"Medical failure", v:"PTH persistently >800pg/mL despite maximal cinacalcet + Vit D analogue"},
      {k:"Calciphylaxis", v:"Life-threatening — urgent parathyroidectomy"},
      {k:"Severe bone disease", v:"Fractures, pain uncontrolled"},
      {k:"Refractory pruritis or ectopic calcification", v:""},
      {k:"Tertiary HPT", v:"Persistent hypercalcaemia >12 months post-renal transplant"}
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
      "Etelcalcetide (IV calcimimetic): for haemodialysis patients"
    ],
    surgical: [
      {name:"Subtotal parathyroidectomy (3.5-gland)", when:"Secondary HPT; multigland hyperplasia", notes:"Remove 3.5 glands; leave 50mg of most normal-looking gland; mark remnant with clip/non-absorbable suture"},
      {name:"Total parathyroidectomy + forearm autotransplant", when:"Secondary or tertiary HPT; preferred by many centres as allows future monitoring and re-excision under local anaesthetic", notes:"Implant 30–60mg minced tissue into brachioradialis forearm pocket; mark with clip; monitor PTH from draining arm"},
      {name:"Total parathyroidectomy without autotransplant", when:"Rarely indicated — permanent hypoparathyroidism; only if risk of recurrence outweighs benefit (e.g. no likely transplant)", notes:"Permanent hypocalcaemia — aggressive lifelong Ca²⁺ + Vit D supplementation"}
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
      {n:6, t:"Implantation", d:"Place 30–60mg (10–20 fragments) into muscle; mark with haemoclip and non-absorbable suture at skin"},
      {n:7, t:"Post-op calcium", d:"Monitor Ca²⁺ 4-hourly; aggressive IV Ca²⁺ gluconate for hungry bone syndrome"}
    ],
    pearls: [
      "Ectopic parathyroids (10%): intrathymic, retrooesophageal, carotid bifurcation — must find all 4",
      "If only 3 glands found: explore thymus (4th gland usually intrathymic if missing)",
      "Cryopreserve additional parathyroid tissue for potential future re-implantation if persistent hypoparathyroidism"
    ]
  },
  guidelines: [
    {src:"KDIGO CKD-MBD Guideline 2017: Secondary HPT management"},
    {src:"NICE NG203: Chronic kidney disease"},
    {src:"AAES Guidelines: Secondary and Tertiary HPT 2016"}
  ],
  pearls: [
    "Calciphylaxis is a surgical emergency — urgent parathyroidectomy (not waiting for medical optimisation)",
    "Hungry bone syndrome worse after bilateral total parathyroidectomy — anticipate severe hypocalcaemia",
    "Mark forearm transplant site clearly — future PTH gradient sampling needed to confirm function"
  ],
  mistakes: [
    "Not finding all 4 glands — remnant disease is most common cause of recurrent HPT",
    "Not cryopreserving extra tissue — cannot re-implant if patient develops permanent hypocalcaemia",
    "Operating without pre-op dialysis optimisation — coagulopathy and fluid overload complicate surgery"
  ]
}
];
