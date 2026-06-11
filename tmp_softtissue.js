// tmp_softtissue.js — Soft Tissue department (9 diseases)
// IDs: melanoma, bcc, scc-skin, hidradenitis, liposarcoma, leiomyosarcoma, desmoid, merkel-cell, kaposi

const SOFTTISSUE_DISEASES = [

{
  id: "melanoma",
  dept: "soft-tissue",
  name: "Melanoma",
  latin: "Melanoma malignum",
  organ: "Skin",
  severity: "critical",
  tags: ["skin","oncology","sentinel-node","immunotherapy"],
  hero: "Wide local excision with sentinel lymph node biopsy; adjuvant immunotherapy/targeted therapy for stage III–IV.",
  keypoints: [
    "Breslow thickness is the single most important prognostic factor",
    "SLNB indicated for Breslow ≥0.8 mm or any ulcerated melanoma",
    "WLE margins: in situ 5 mm; <1 mm 1 cm; 1–2 mm 1–2 cm; >2 mm 2 cm",
    "Stage III: adjuvant pembrolizumab (KEYNOTE-054) or nivolumab; BRAF+MEK inhibitors if BRAF V600 mutant",
    "Stage IV: ipilimumab + nivolumab (CheckMate-067) or pembrolizumab (KEYNOTE-006); BRAF/MEK for rapid progression",
    "Never shave-biopsy a pigmented lesion — full excision biopsy with 2 mm margin required for Breslow measurement",
    "Desmoplastic melanoma: high local recurrence, post-op RT reduces it; SLNB often negative despite deep invasion"
  ],
  differentials: [
    "Benign naevus",
    "Seborrhoeic keratosis (stuck-on, milia)",
    "Pigmented basal cell carcinoma",
    "Dermatofibroma",
    "Blue naevus",
    "Subungual haematoma (nail melanoma mimic)",
    "Spitz naevus (children)",
    "Amelanotic melanoma (mimics pyogenic granuloma)"
  ],
  mnemonics: [
    { name: "ABCDE criteria", text: "Asymmetry, Border irregularity, Colour variation, Diameter >6 mm, Evolution (change over time)" },
    { name: "Breslow margins", text: "In situ: 5 mm | <1 mm: 1 cm | 1–2 mm: 1–2 cm | >2 mm: 2 cm — 'Half-One-Two rule'" },
    { name: "Ugly Duckling Sign", text: "The lesion that looks different from all others on that patient deserves biopsy" }
  ],
  overview: {
    definition: "Malignant neoplasm of melanocytes, most commonly arising in skin but also mucosa, uvea, and meninges. Arises de novo (70%) or from pre-existing naevus (30%).",
    epidemiology: "UK: ~16,000 new cases/year; incidence rising; M:F ~1:1; peak age 50–60 years; highest incidence in Australia/NZ. Risk: UV exposure, fair skin (Fitzpatrick I–II), family history, >50 melanocytic naevi, immunosuppression, CDKN2A/CDK4 mutations.",
    pathophysiology: "UV-induced DNA damage → BRAF V600E (50%), NRAS (20%), NF1 (15%), KIT (acral/mucosal) mutations → MAPK pathway activation → uncontrolled proliferation. Lymphatic spread to regional nodes (SN first), then systemic.",
    classification: [
      "Superficial spreading melanoma (SSM) — most common 70%; radial growth phase first",
      "Nodular melanoma — 15%; purely vertical growth; rapid progression",
      "Lentigo maligna melanoma (LMM) — 10%; elderly; sun-damaged face; slow growing",
      "Acral lentiginous melanoma (ALM) — palms/soles/subungual; more common in darker skin",
      "Desmoplastic melanoma — rare; fibrous stroma; perineural invasion; high local recurrence",
      "Mucosal melanoma — anorectal, vaginal, oral; poor prognosis",
      "Uveal melanoma — distinct biology; liver metastases predominate"
    ]
  },
  diagnosis: {
    history: [
      "Changing pigmented lesion: growing, bleeding, crusting, ulceration",
      "New nodule in previously stable area",
      "Itching in a pigmented lesion (late feature)",
      "Previous melanoma, multiple naevi, family history",
      "Immunosuppression (transplant, HIV, chronic steroids)",
      "Sun exposure history, solarium use, sunburns in childhood",
      "Systemic symptoms: weight loss, fatigue, neurological symptoms, bone pain (stage IV)"
    ],
    examination: [
      "Assess lesion with ABCDE criteria and dermoscopy",
      "Measure lesion dimensions clinically",
      "Examine regional lymph node basins (axilla, groin, neck depending on site)",
      "Full skin examination for synchronous melanomas and satellite lesions",
      "Assess for in-transit metastases (dermal deposits between primary and regional nodes)",
      "Abdominal palpation for hepatomegaly (metastatic disease)",
      "Neurological examination if symptoms suggest CNS involvement"
    ],
    investigations: [
      { name: "Excision biopsy (2 mm margin)", role: "Gold standard — allows full Breslow thickness measurement; never shave biopsy" },
      { name: "Dermoscopy", role: "Increases diagnostic accuracy vs naked eye; specific patterns: atypical pigment network, regression, blue-white veil" },
      { name: "SLNB", role: "Breslow ≥0.8 mm or ulcerated; staging procedure; not therapeutic" },
      { name: "BRAF/NRAS/KIT mutation testing", role: "All stage III–IV; guides targeted therapy selection" },
      { name: "CT chest/abdomen/pelvis", role: "Stage III (node-positive) and IV staging; baseline for systemic therapy" },
      { name: "MRI brain", role: "Stage IV; brain metastases present in 20% at diagnosis; affects treatment" },
      { name: "PET-CT", role: "Stage III–IV; detects occult nodal or distant metastases beyond CT" },
      { name: "LDH", role: "Independent prognostic marker in stage IV; elevated = worse prognosis (AJCC 8th ed M1d)" },
      { name: "PD-L1 expression / tumour mutational burden (TMB)", role: "Optional; may guide immunotherapy response but not required for selection" }
    ]
  },
  criteria: {
    title: "AJCC 8th Edition Melanoma Staging (T stage)",
    items: [
      { k: "Tis", v: "Melanoma in situ" },
      { k: "T1a", v: "<0.8 mm, no ulceration" },
      { k: "T1b", v: "<0.8 mm with ulceration, OR 0.8–1.0 mm ± ulceration" },
      { k: "T2a", v: "1.01–2.0 mm, no ulceration" },
      { k: "T2b", v: "1.01–2.0 mm with ulceration" },
      { k: "T3a", v: "2.01–4.0 mm, no ulceration" },
      { k: "T3b", v: "2.01–4.0 mm with ulceration" },
      { k: "T4a", v: ">4.0 mm, no ulceration" },
      { k: "T4b", v: ">4.0 mm with ulceration" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance only for melanoma in situ after adequate WLE — no further surgery",
      "UV protection counselling for all patients",
      "Regular follow-up: clinical exam q3–6 months × 5 years (risk stratified)"
    ],
    medical: [
      "Stage III adjuvant: pembrolizumab 200 mg q3w × 1 year (KEYNOTE-054) or nivolumab 3 mg/kg q2w × 1 year; reduces recurrence ~40%",
      "Stage III BRAF V600 mutant: adjuvant dabrafenib + trametinib × 1 year (COMBI-AD) — 53% vs 36% 5-year RFS",
      "Stage IV first-line: ipilimumab 3 mg/kg + nivolumab 1 mg/kg q3w × 4 → nivolumab maintenance (CheckMate-067); 5-year OS 52%",
      "Stage IV first-line PD-L1 low: pembrolizumab 200 mg q3w (KEYNOTE-006); 5-year OS 43%",
      "Stage IV BRAF V600 mutant: vemurafenib + cobimetinib OR dabrafenib + trametinib — rapid response for high tumour burden",
      "T-VEC (talimogene laherparepvec): intralesional oncolytic virus for unresectable stage IIIB–IV; response 26%",
      "CNS metastases: ipilimumab + nivolumab has intracranial activity (CheckMate-204); stereotactic radiosurgery for limited lesions",
      "Anti-PD-1 for high-risk resected stage IIB/IIC: pembrolizumab (KEYNOTE-716) approved 2022"
    ],
    surgical: [
      { name: "Wide local excision (WLE)", when: "All invasive melanoma", notes: "Margins by Breslow: in situ 5 mm; <1 mm 1 cm; 1–2 mm 1–2 cm; >2 mm 2 cm. Include subcutaneous fat to deep fascia (do not excise fascia unless involved)" },
      { name: "Sentinel lymph node biopsy (SLNB)", when: "Breslow ≥0.8 mm or any ulcerated T1b+", notes: "Combined lymphoscintigraphy + blue dye + gamma probe. Map all drainage basins preoperatively. Remove all hot/blue nodes. Completion LND not required (DeCOG-SLT, MSLT-II)" },
      { name: "Completion lymph node dissection (CLND)", when: "Positive SLN in selected cases only — NOT routine (MSLT-II and DeCOG-SLT showed no OS benefit)", notes: "Consider for clinical recurrence in nodal basin or high-risk SLN features (>1 positive SN, extracapsular extension)" },
      { name: "Therapeutic lymph node dissection", when: "Clinically palpable nodal disease confirmed by FNA/core biopsy", notes: "Axillary dissection levels I–III, groin dissection (superficial ± deep femoral/iliac depending on Cloquet's node), neck dissection (modified radical)" },
      { name: "Isolated limb perfusion (ILP) / infusion (ILI)", when: "Unresectable in-transit metastases confined to limb", notes: "Melphalan ± actinomycin D; response rate ~50%; preserves limb; can repeat" },
      { name: "Metastasectomy", when: "Oligometastatic stage IV — selected cases with good PS, resectable disease, long disease-free interval", notes: "Survival benefit shown in retrospective series; best for solitary lung/bowel/skin metastases" }
    ]
  },
  technique: {
    title: "Wide Local Excision + SLNB Technique",
    prep: [
      "Preoperative lymphoscintigraphy (Tc-99m nanocolloid injection around primary scar/lesion) to map SN basin",
      "Mark SN basin(s) on skin",
      "General anaesthesia; position to allow access to primary site AND all potential nodal basins",
      "Patent blue V dye injection (1 mL intradermally around lesion/scar) 5–15 minutes before incision"
    ],
    steps: [
      { n: 1, t: "WLE first", d: "Elliptical excision centred on biopsy scar or lesion with measured margins (use ruler). Orient along Langer's lines for closure. Excise to deep fascia (include fat, stop at fascia unless invaded)." },
      { n: 2, t: "Close primary wound", d: "Direct closure where possible; skin graft or local flap if large defect. Close before SLNB to avoid disrupting lymphatics." },
      { n: 3, t: "Locate sentinel node", d: "Identify SN basin from lymphoscintigraphy. Use gamma probe to locate hot spot through skin. Mark incision over hottest area." },
      { n: 4, t: "Dissection to SN", d: "Incise skin and deepen with careful blunt dissection. Protect blue-stained afferent lymphatic channels — follow them to blue/hot node." },
      { n: 5, t: "Confirm SN identity", d: "Node is SN if: >10× background radioactivity (ex vivo), blue-stained, or has blue afferent lymphatic. Remove all hot AND blue nodes." },
      { n: 6, t: "Count ex vivo", d: "Check each removed node with probe. Remove additional nodes if residual activity >10% of hottest SN. Send all SNs as separate specimens for H&E + S100/HMB45/MelanA IHC." },
      { n: 7, t: "Wound check", d: "Check nodal bed activity — should be <10% original. Irrigate, achieve haemostasis, close in layers." }
    ],
    pearls: [
      "Perform lymphoscintigraphy SAME DAY as surgery if possible — maps to surgeon before incision",
      "Blue dye can cause anaphylaxis (1:1000) — have adrenaline ready; warn patient skin/urine will be blue temporarily",
      "For head/neck melanoma, drainage is unpredictable — always follow the scan, not anatomy",
      "If SLNB after previous WLE: re-inject around scar, not residual lesion",
      "Positive SLNB does not mandate CLND (MSLT-II): offer adjuvant systemic therapy instead",
      "Desmoplastic melanoma: SLNB often negative even with deep tumours — RT to primary site reduces local recurrence"
    ]
  },
  guidelines: [
    { src: "UK: NICE NG14 (2015, updated 2022) — Melanoma: assessment and management" },
    { src: "BAD/BSSD Guidelines for management of melanoma 2022" },
    { src: "ESMO Clinical Practice Guidelines: Cutaneous melanoma 2022" },
    { src: "ASCO: Adjuvant therapy for melanoma 2022 update" },
    { src: "CheckMate-067: Larkin et al. NEJM 2015 — ipi+nivo vs mono" },
    { src: "KEYNOTE-054: Eggermont et al. NEJM 2018 — adjuvant pembro" },
    { src: "MSLT-II: Faries et al. NEJM 2017 — CLND not required" }
  ],
  pearls: [
    "Breslow thickness is the single most important prognostic factor — never shave-biopsy a suspicious pigmented lesion",
    "Ulceration upstages T category and worsens prognosis — histological finding, not macroscopic",
    "SLNB is a staging procedure, not therapeutic — positive SLN → systemic adjuvant therapy, not CLND",
    "BRAF status must be known before starting stage IV treatment — BRAF/MEK inhibitors work faster but resistance at ~12 months",
    "In-transit metastases can develop years after primary treatment — educate patients on self-examination",
    "Ocular melanoma does NOT express BRAF V600E — different biology, different treatment",
    "Anorectal melanoma presents as haemorrhoids — always send rectal polyps/nodules for histology"
  ],
  mistakes: [
    "Shave biopsy of a pigmented lesion — prevents Breslow measurement, contraindicated",
    "Inadequate excision margins — measure with ruler intraoperatively, not by eye",
    "Omitting SLNB for Breslow 0.8–1.0 mm — T1b indication is Breslow ≥0.8 mm OR ulceration",
    "CLND for positive SLN (MSLT-II/DeCOG-SLT showed no OS benefit) — transition to adjuvant systemic therapy instead",
    "Delaying BRAF mutation testing for stage IV — must know before first-line treatment decision",
    "Missing satellite or in-transit metastases — examine entire limb between primary and regional nodes",
    "Assuming negative SLNB means no risk — still 20% recurrence risk for T3–T4 with negative SLN"
  ]
},

{
  id: "bcc",
  dept: "soft-tissue",
  name: "Basal Cell Carcinoma",
  latin: "Carcinoma basocellulare",
  organ: "Skin",
  severity: "moderate",
  tags: ["skin","bcc","mohs","excision"],
  hero: "Most common human cancer; locally aggressive but rarely metastasises; excision with 4 mm margins or Mohs surgery for high-risk/face tumours.",
  keypoints: [
    "Most common cancer in humans; >90% on head and neck (sun-exposed areas)",
    "Standard excision: 4 mm margin for well-defined low-risk; Mohs micrographic surgery for high-risk (face, recurrent, morphoeic)",
    "Nodular BCC: pearly, rolled border, telangiectasia — most common subtype",
    "Morphoeic/infiltrative BCC: scar-like, ill-defined — highest risk of inadequate margins",
    "Vismodegib (Hedgehog pathway inhibitor) for locally advanced/metastatic BCC not amenable to surgery/RT",
    "Gorlin syndrome (PTCH1 mutation): multiple BCCs from childhood, odontogenic keratocysts, calcified falx — lifetime surveillance"
  ],
  differentials: [
    "Squamous cell carcinoma (more indurated, ulcerated, no rolled border)",
    "Sebaceous hyperplasia (central umbilication, multiple lobules)",
    "Dermal naevus",
    "Molluscum contagiosum",
    "Trichoepithelioma",
    "Merkel cell carcinoma (red-purple nodule, fast-growing)",
    "Amelanotic melanoma"
  ],
  mnemonics: [
    { name: "BCC border", text: "Pearly Rolled Nodule with Telangiectasia — 'PRNT' for the classic nodular BCC appearance" },
    { name: "High-risk BCC (Mohs)", text: "FILM: Face (H-zone), Infiltrative/morphoeic histology, Large (>2cm trunk/limbs, >6mm face), Margins unclear or recurrent" }
  ],
  overview: {
    definition: "Malignant neoplasm of basal keratinocytes of the epidermis/follicular epithelium. Locally invasive with perineural/perivascular spread but rarely metastasises (<0.1%).",
    epidemiology: "Most common cancer in humans (>2 million cases/year in USA). UK: ~100,000/year. M:F 2:1. Incidence rising. Risk: cumulative UV exposure, fair skin (Fitzpatrick I–II), ionising radiation, immunosuppression, arsenic exposure, PTCH1/PTCH2 mutation (Gorlin syndrome).",
    pathophysiology: "UV-induced mutation in PTCH1 tumour suppressor gene (chromosome 9q22) → constitutive Hedgehog (Hh) signalling via smoothened (SMO) → uncontrolled basal cell proliferation. Gorlin syndrome: germline PTCH1 mutation → multiple BCCs from early adulthood.",
    classification: [
      "Nodular (60%) — pearly translucent papule, rolled border, telangiectasia; most common",
      "Superficial (15%) — flat, erythematous, scaly; trunk and limbs",
      "Morphoeic/sclerosing/infiltrative (10%) — scar-like, waxy, ill-defined; highest local recurrence",
      "Pigmented — nodular with melanin; mimics melanoma",
      "Basosquamous — mixed features; higher metastatic potential",
      "Fibroepithelioma of Pinkus — rare; back; benign-looking"
    ]
  },
  diagnosis: {
    history: [
      "Non-healing lesion on sun-exposed skin, especially face/scalp",
      "Slowly growing pearly or translucent papule, often years of history",
      "Bleeding or crusting on minor trauma",
      "History of other skin cancers, extensive UV exposure, sunburns",
      "Immunosuppression (organ transplant → BCC risk 10× higher)",
      "Family history of multiple skin cancers (Gorlin syndrome — also ask about jaw cysts, rib anomalies)"
    ],
    examination: [
      "Nodular: pearly papule/nodule, rolled edges, central ulceration ('rodent ulcer'), surface telangiectasia",
      "Morphoeic: flat, scar-like plaque, ill-defined, waxy surface",
      "Superficial: erythematous scaly patch with fine translucent border",
      "Dermoscopy: arborising vessels, blue-grey ovoid nests, leaf-like structures, spoke-wheel areas",
      "Assess for perineural invasion: paraesthesia or facial nerve deficit in periorbital/facial BCC",
      "Document size and proximity to free margins (eyelid, lip, ear, nose)"
    ],
    investigations: [
      { name: "Clinical diagnosis + dermoscopy", role: "Sufficient for classic nodular BCC; dermoscopy improves accuracy" },
      { name: "Punch or incision biopsy", role: "For uncertain diagnosis, large/morphoeic/recurrent lesion before planning major reconstruction" },
      { name: "MRI face/orbits", role: "Perineural invasion suspected; deep invasion near orbit/skull base" },
      { name: "CT orbits/skull base", role: "Bone invasion suspected; periorbital or scalp BCC" },
      { name: "PTCH1/PTCH2 testing", role: "Multiple BCCs in young patient — Gorlin syndrome screening" }
    ]
  },
  criteria: {
    title: "High-Risk BCC Features (requiring Mohs or wider margins)",
    items: [
      { k: "Location H-zone", v: "Central face, periorbital, perinasal, perioral, ears, temples — highest recurrence risk" },
      { k: "Size", v: ">6 mm on face; >10 mm on neck/scalp/hands; >20 mm on trunk/limbs" },
      { k: "Histology", v: "Morphoeic, infiltrative, micronodular, basosquamous subtypes" },
      { k: "Recurrent", v: "Previously treated BCC — field change, satellites" },
      { k: "Margins", v: "Ill-defined clinically" },
      { k: "Perineural invasion", v: "PNI on histology or clinical symptoms" },
      { k: "Immunosuppressed patient", v: "Higher recurrence, more aggressive behaviour" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Photodynamic therapy (PDT): superficial BCC only; 5-aminolaevulinic acid (5-ALA); 90% clearance; good cosmesis",
      "Imiquimod 5% cream: superficial BCC, <2 cm; 80% histological clearance at 12 weeks; daily × 6 weeks",
      "Topical 5-fluorouracil: superficial BCC; twice daily × 3–6 weeks",
      "Cryotherapy: superficial/nodular BCC <1 cm; liquid nitrogen; 90% cure at 5 years for small lesions",
      "Wait-and-scan policy: elderly frail patient with small superficial BCC — annual review acceptable"
    ],
    medical: [
      "Vismodegib (Hedgehog inhibitor/SMO antagonist): locally advanced or metastatic BCC not amenable to surgery or RT; 43% RR; continuous dosing; side effects: muscle cramps, hair loss, dysgeusia, amenorrhoea",
      "Sonidegib: alternative Hh inhibitor; 200 mg daily; similar efficacy",
      "Cemiplimab (anti-PD-1): FDA approved 2021 for locally advanced BCC after Hh inhibitor failure or not suitable; ORR 31%"
    ],
    surgical: [
      { name: "Standard surgical excision", when: "Low-risk BCC (well-defined, not on H-zone, <2 cm)", notes: "4 mm clinical margin for well-defined BCC; verify with complete peripheral margin assessment (CPMA) or standard bread-loaf sections; 95% cure rate" },
      { name: "Mohs micrographic surgery (MMS)", when: "High-risk BCC: H-zone face, morphoeic, recurrent, ill-defined, large, perineural invasion", notes: "Sequential horizontal tissue sections with 100% margin mapping; highest cure rate (99% primary, 94% recurrent); tissue-sparing — ideal for face" },
      { name: "Debulk + curettage (C&E)", when: "Small, superficial, well-defined BCC on trunk — not face", notes: "Curettage × 3 cycles followed by electrodesiccation; 90% cure at 5 years for selected lesions; leaves scar" }
    ]
  },
  technique: {
    title: "Standard Excision with Primary Closure",
    prep: [
      "Mark 4 mm clinical margin with skin marker before infiltration anaesthesia (adrenaline blanches tumour margins)",
      "Plan elliptical excision along Langer's lines (3:1 length-to-width ratio)",
      "Consider reconstructive options if on face — local flap vs skin graft planning"
    ],
    steps: [
      { n: 1, t: "Mark margins", d: "With pen, mark 4 mm around visible tumour boundary before injecting local anaesthetic. Use calipers." },
      { n: 2, t: "Excise ellipse", d: "Excise with scalpel perpendicular to skin at 90°; include subcutaneous fat. Orient specimen with suture (e.g. long stitch = lateral)." },
      { n: 3, t: "Orient specimen", d: "Pin specimen on card and draw orientation diagram before sending to pathology. Critical for re-excision localisation if margins involved." },
      { n: 4, t: "Achieve haemostasis", d: "Bipolar diathermy; inspect for deep extension before closing." },
      { n: 5, t: "Repair defect", d: "Primary closure, local advancement flap, or split-skin graft depending on site and size. Minimise tension on facial closures." },
      { n: 6, t: "Pathology review", d: "Await margins result. If involved: re-excise to clear or refer for Mohs. Clear margin at standard excision = 1 mm." }
    ],
    pearls: [
      "Mark margins BEFORE injecting local anaesthetic — adrenaline blanches skin and obscures tumour boundary",
      "Orient the specimen carefully — unclear orientation is the most common reason re-excision cannot be targeted",
      "For periorbital BCC: always get MRI before surgery — orbital invasion changes the operation completely",
      "Morphoeic BCC extends 5–15 mm beyond visible edge — standard 4 mm margin will be inadequate; use Mohs",
      "Gorlin syndrome patients need regular 6-monthly surveillance and vitamin D supplementation (sun avoidance)"
    ]
  },
  guidelines: [
    { src: "BAD Guidelines for management of BCC 2021" },
    { src: "NICE NG12: Suspected cancer recognition and referral 2015 (updated 2023)" },
    { src: "EDF/EADO/EORTC Guidelines: BCC 2019" },
    { src: "NCCN Guidelines: Basal Cell Skin Cancer 2023" }
  ],
  pearls: [
    "Morphoeic BCC has subclinical extension 7–15 mm beyond clinical margins — always consider Mohs for this subtype",
    "BCC in organ transplant recipients is more aggressive, more likely to be multifocal — reduce immunosuppression if possible",
    "Perineural invasion (PNI) — may be asymptomatic; MRI mandatory before surgery in periorbital/facial BCC with pain or nerve symptoms",
    "Gorlin syndrome (naevoid BCC syndrome): PTCH1; also odontogenic keratocysts, bifid ribs, calcified falx, medulloblastoma (childhood) — refer clinical genetics"
  ],
  mistakes: [
    "Inadequate margins for morphoeic BCC — standard 4 mm insufficient; use Mohs or wider excision",
    "Not orienting the specimen — makes re-excision impossible to target",
    "Treating H-zone BCC without considering Mohs — H-zone has highest recurrence rate with standard excision",
    "Missing perineural invasion — ask about facial paraesthesia; get MRI if any concern",
    "Imiquimod for nodular BCC — only evidence-based for superficial subtype"
  ]
},

{
  id: "scc-skin",
  dept: "soft-tissue",
  name: "Squamous Cell Carcinoma (Skin)",
  latin: "Carcinoma spinocellulare cutis",
  organ: "Skin",
  severity: "major",
  tags: ["skin","scc","excision","sentinel-node"],
  hero: "Second most common skin cancer; significant metastatic potential (~5%); excise with 4–6 mm margins; high-risk features require SLNB and adjuvant RT.",
  keypoints: [
    "Arises from keratinocytes; major risk is cumulative UV; immunosuppressed patients have 100× increased risk",
    "High-risk SCC: >2 cm, >4 mm thick, poorly differentiated, perineural invasion, recurrent, immunosuppressed — 25–40% nodal metastasis rate",
    "Excision margins: 4 mm for low-risk; 6 mm for high-risk; Mohs MMS for high-risk head/neck",
    "SLNB controversial but recommended for high-risk SCC by BAD/NCCN — positivity rate ~5–10%",
    "Cemiplimab (anti-PD-1): first-line for locally advanced or metastatic SCC not amenable to surgery/RT",
    "Marjolin's ulcer: SCC arising in chronic wound/burn scar — aggressive behaviour, nodal mets in 30–50%"
  ],
  differentials: [
    "Keratoacanthoma (rapid growth, central keratin plug — may spontaneously resolve, but treat as SCC)",
    "Basal cell carcinoma (pearly, rolled border)",
    "Amelanotic melanoma",
    "Merkel cell carcinoma (red-purple dome, face/limbs)",
    "Bowen's disease (SCC in situ — erythematous scaly patch)",
    "Actinic keratosis (precursor lesion)",
    "Viral wart",
    "Pyoderma gangrenosum (ulcer — but look for associated IBD)"
  ],
  mnemonics: [
    { name: "High-risk SCC features", text: "DEPTH: Diameter >2cm, Extra-cutaneous extension, Poorly differentiated, T-cell immunosuppressed, HPV-related/High-risk location (ear, lip, genitalia)" },
    { name: "SCC vs BCC", text: "SCC: Scab/Crust, Crusted ulcer, Indurated. BCC: Beautiful Pearl, Rolled border, Telangiectasia" }
  ],
  overview: {
    definition: "Malignant neoplasm of epidermal keratinocytes. Arises from actinic keratosis (AK) or de novo. Capable of regional lymph node and distant metastasis (unlike BCC).",
    epidemiology: "Second most common skin cancer (~200,000 new cases/year UK). Incidence doubles every decade after age 40. Risk: cumulative UV, fair skin, immunosuppression (transplant recipients: 100× risk; 50% develop SCC within 20 years), HPV (genital/oral), chronic wounds, arsenic, carcinogens (tar, mineral oils), radiotherapy fields, PUVA therapy.",
    pathophysiology: "UV-B → TP53 mutation → failure of apoptosis → keratinocyte clonal expansion. In immunosuppressed: HPV-16/18 → E6/E7 oncoproteins inhibit p53/Rb. Progression: normal skin → field cancerisation → actinic keratosis (AK) → SCC in situ (Bowen's) → invasive SCC → nodal/distant metastasis.",
    classification: [
      "Well-differentiated (grade 1) — keratinisation, low metastatic risk",
      "Moderately differentiated (grade 2)",
      "Poorly differentiated (grade 3) — highest metastatic risk, often spindle cell",
      "Adenosquamous — mucin-producing, more aggressive",
      "Acantholytic/adenoid — pseudoglandular spaces",
      "Verrucous carcinoma — locally invasive, well-differentiated, low metastatic potential",
      "Marjolin's ulcer — SCC in chronic wound/burn scar; 30–50% nodal mets"
    ]
  },
  diagnosis: {
    history: [
      "Non-healing, crusted, or ulcerated lesion on sun-exposed skin (scalp, ear, lip, dorsum of hand)",
      "Rapidly growing indurated nodule",
      "Bleeding, discharge, or crusting",
      "History of actinic keratoses (field cancerisation)",
      "Organ transplant recipient or other immunosuppression",
      "Chronic wound, burn scar, sinus tract (Marjolin's ulcer)",
      "HPV-related: anogenital SCC — history of HPV, HIV",
      "Pain or paraesthesia suggesting perineural invasion"
    ],
    examination: [
      "Indurated, keratinised, or ulcerated plaque/nodule with irregular border",
      "Bleeding or crusted surface; central ulceration in advanced lesions",
      "Measure lesion in two dimensions; note depth of infiltration clinically",
      "Assess for surrounding field change (multiple AKs)",
      "Palpate regional lymph nodes — parotid/neck for facial SCC, groin for lower limb",
      "Assess for facial nerve involvement (perineural invasion — auricular/parotid SCC)",
      "Examine lip/oral mucosa for oral SCC extension"
    ],
    investigations: [
      { name: "Excision biopsy / deep punch biopsy", role: "Histological confirmation; Breslow thickness equivalent; must include subcutis to assess depth" },
      { name: "CT neck/parotid", role: "Clinical or radiological lymphadenopathy; parotid involvement in ear/facial SCC" },
      { name: "CT chest/abdomen/pelvis", role: "Stage IV staging — metastatic disease (uncommon; primarily lung mets)" },
      { name: "MRI face/skull base", role: "Perineural invasion suspected; orbital/skull base involvement" },
      { name: "SLNB", role: "High-risk SCC (>2 cm or depth >4 mm or PNI or poorly differentiated); detects occult nodal disease; BAD recommends discussion at MDT" },
      { name: "FNA lymph node", role: "Palpable lymph node — FNA or core biopsy before therapeutic lymph node dissection" }
    ]
  },
  criteria: {
    title: "High-Risk SCC Features (BWH / NCCN / BAD)",
    items: [
      { k: "Diameter", v: ">2 cm (trunk/extremity); >1 cm (face, ear, lip)" },
      { k: "Depth/thickness", v: ">4 mm, invasion beyond dermis into subcutis" },
      { k: "Differentiation", v: "Poorly differentiated (grade 3)" },
      { k: "Perineural invasion", v: "Histological PNI ≥0.1 mm calibre nerve" },
      { k: "Vascular invasion", v: "Lymphovascular invasion on histology" },
      { k: "Immunosuppression", v: "Transplant, HIV, haematological malignancy" },
      { k: "Location", v: "Ear, lip, anogenital, non-sun-exposed sites" },
      { k: "Recurrent", v: "Previously treated SCC at same site" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Field therapy for actinic keratosis (precursor): 5-FU 5% cream, imiquimod 5%, ingenol mebutate, PDT",
      "Cryotherapy: for AK and small SCC in situ (Bowen's disease)",
      "Photodynamic therapy: Bowen's disease and superficial SCC"
    ],
    medical: [
      "Cemiplimab (anti-PD-1): first-line for locally advanced/metastatic cutaneous SCC; ORR 47% (EMPOWER-CSCC-1); pembrolizumab alternative",
      "Adjuvant RT: positive or close margins not amenable to re-excision; perineural invasion; extensive nodal disease (≥2 nodes or extracapsular extension)",
      "Platinum-based chemotherapy: palliative setting; carboplatin + paclitaxel; poor response rates",
      "EGFR inhibitors (cetuximab, erlotinib): modest activity; not first-line"
    ],
    surgical: [
      { name: "Wide local excision", when: "All invasive SCC", notes: "Low-risk: 4 mm margins; high-risk: 6 mm margins to fascia. Verify histological margins — clear = ≥1 mm." },
      { name: "Mohs micrographic surgery", when: "High-risk SCC: H-zone face, perineural invasion, recurrent, ill-defined margins", notes: "100% margin mapping; preserves tissue; 97% cure rate for primary, 90% recurrent" },
      { name: "SLNB", when: "High-risk SCC at MDT decision — T2b or higher (BWH staging)", notes: "Controversially recommended; ~5–10% SN positivity in unselected high-risk SCC; no RCT data on survival benefit" },
      { name: "Therapeutic lymph node dissection", when: "Palpable/radiologically confirmed nodal metastasis", notes: "Parotidectomy (superficial) + neck dissection for ear/temporal/forehead SCC; inguinofemoral dissection for lower limb; postop RT if ≥2 nodes or ECE" },
      { name: "Amputation", when: "Marjolin's ulcer on digit/extremity with deep invasion not otherwise resectable", notes: "Aggressive histology requires wide margins; consider limb-sparing alternatives first" }
    ]
  },
  technique: {
    title: "Excision with Margin Assessment for High-Risk SCC",
    prep: [
      "Mark margins before local anaesthetic injection",
      "Plan reconstruction — may require plastic surgery input for face/ear",
      "Discuss SLNB if high-risk features identified preoperatively"
    ],
    steps: [
      { n: 1, t: "Mark and excise", d: "6 mm margin for high-risk; include subcutaneous fat to deep fascia. Perpendicular cuts ensure accurate margin assessment." },
      { n: 2, t: "Orient specimen", d: "Ink or suture orientation. Draw diagram. Pin to card if sending for standard sections; pin and flatten for Mohs frozen sections." },
      { n: 3, t: "Frozen section (optional)", d: "Intraoperative frozen sections for critical margins (periorbital, perineural) — reduces re-excision rate." },
      { n: 4, t: "Wound repair", d: "Primary closure, flap, or graft. Consider reconstructive delay if margin status uncertain." },
      { n: 5, t: "MDT review", d: "All high-risk SCC to skin MDT: margins, adjuvant RT decision, SLNB discussion, surveillance plan." }
    ],
    pearls: [
      "Perineural invasion changes the operation — get MRI, widen margins, consider nerve sacrifice",
      "Parotid gland invasion from auricular SCC: superficial parotidectomy required, not just lymph node dissection",
      "Marjolin's ulcer: biopsy first — SCC in scar has 30–50% nodal met rate; plan therapeutic node dissection if confirmed",
      "Immunosuppressed patients: inform transplant team — immunosuppression reduction (switch to mTOR inhibitor) reduces SCC rate"
    ]
  },
  guidelines: [
    { src: "BAD Guidelines for management of cutaneous SCC 2021" },
    { src: "NCCN Guidelines: Squamous Cell Skin Cancer 2023" },
    { src: "EMPOWER-CSCC-1: Migden et al. NEJM 2018 — cemiplimab" },
    { src: "ESMO Clinical Practice Guidelines: Cutaneous SCC 2022" }
  ],
  pearls: [
    "Actinic keratoses are a marker of field change — treat the field, not just the lesion",
    "SCC on the lip/ear has 2× higher metastatic rate than other sites — treat as high-risk",
    "Transplant-related SCC: reverse the Fitzpatrick rule — more common on non-sun-exposed areas; often more aggressive",
    "Squamous cell carcinoma on chronic wound/ulcer (Marjolin's) has 30–50% nodal metastasis rate — think SLNB or therapeutic dissection"
  ],
  mistakes: [
    "Treating Marjolin's ulcer as a benign chronic wound — always biopsy a non-healing ulcer in a scar",
    "Inadequate depth of excision — SCC requires fascial plane, not just skin and superficial fat",
    "Missing perineural invasion on small punch biopsy — need deeper/wider sample",
    "Failing to examine parotid nodes for auricular SCC",
    "Imiquimod or PDT for invasive SCC — only appropriate for Bowen's disease (in situ)"
  ]
},

{
  id: "hidradenitis",
  dept: "soft-tissue",
  name: "Hidradenitis Suppurativa",
  latin: "Hidradenitis suppurativa",
  organ: "Skin/Apocrine glands",
  severity: "major",
  tags: ["skin","HS","flap","reconstruction","chronic"],
  hero: "Chronic inflammatory follicular disease of apocrine gland-bearing skin; medical management first; radical wide excision with primary closure or flap for Hurley III.",
  keypoints: [
    "Follicular occlusion — NOT primary apocrine infection — causes HS; apocrine involvement is secondary",
    "Hurley staging guides management: I (conservative/biologics) → II (local excision) → III (radical excision)",
    "Adalimumab (anti-TNF) is the only FDA/NICE-approved biologic — reduces flares in Hurley I–II",
    "Radical wide excision to healthy subcutaneous tissue beyond apparent disease borders — 1 cm minimum",
    "Axillary HS: excise to but not through deep fascia; protect neurovascular bundles",
    "Perianal HS can mimic Crohn's disease — examine for Crohn's features (skin tags, fistulae)"
  ],
  differentials: [
    "Crohn's disease perianal involvement",
    "Pilonidal disease (midline, sacrococcygeal)",
    "Bartholin's gland abscess",
    "Furunculosis/carbuncle (Staphylococcal)",
    "Actinomycosis (sulfur granules)",
    "Lymphogranuloma venereum (inguinal)",
    "Cat-scratch disease",
    "Sebaceous cyst infection"
  ],
  mnemonics: [
    { name: "Hurley stages", text: "I = Isolated (one abscess, no sinus), II = Intermittent (recurrent, sinus tracts, separated by normal skin), III = Intractable (diffuse, multiple interconnected tracts)" },
    { name: "HS triggers", text: "SOAPS: Smoking, Obesity, Androgens, Perspiration/friction, Stress — all worsen HS" }
  ],
  overview: {
    definition: "Chronic, recurrent, inflammatory skin condition characterised by painful nodules, abscesses, sinus tracts, and scarring in apocrine gland-bearing areas (axillae, groin, perineum, inframammary). Classified as follicular occlusion disease, not primary apocrine pathology.",
    epidemiology: "Prevalence 0.4–1% of population. F:M = 3:1 for axillary; M:F = 1:2 for perianal. Onset puberty to 40 years. Risk: smoking (80% of patients), obesity (BMI >30), family history (30% — autosomal dominant inheritance), friction, hyperandrogenism. Associated with metabolic syndrome, IBD, arthropathy, SAPHO syndrome.",
    pathophysiology: "Follicular hyperkeratosis → follicular occlusion → follicular rupture → dermal inflammatory reaction → secondary bacterial colonisation (Staphylococci, anaerobes, Gram-negatives) → abscess formation → sinus tract development → dermal fibrosis. Predominantly Th17/IL-17 inflammatory pathway. NOT a primary infection — antibiotics do not cure.",
    classification: [
      "Hurley Stage I — single or multiple abscesses, no sinus tracts or scarring",
      "Hurley Stage II — recurrent abscesses, one or more sinus tracts and scars, separated by normal skin",
      "Hurley Stage III — diffuse or near-diffuse involvement, multiple interconnected sinus tracts covering entire area"
    ]
  },
  diagnosis: {
    history: [
      "Painful recurrent nodules/abscesses in axillae, groin, perineum, inframammary fold",
      "Onset puberty; exacerbated by sweating, friction, hormonal changes",
      "Multiple GP consultations for 'boils' — often delayed diagnosis (mean 7 years to diagnosis)",
      "Prior incision and drainage procedures — temporary relief only",
      "Family history of similar condition",
      "Smoking history (ask specifically)",
      "Perianal involvement: distinguish from Crohn's fistulating disease"
    ],
    examination: [
      "Hurley staging: document number of lesions, presence of sinus tracts, extent of normal skin between lesions",
      "IHS4 score (International HS Severity Score): 2× abscesses + 4× draining tunnels + 1× nodules = score (mild <3, moderate 4–10, severe >10)",
      "Axillae, groin, perineum, inframammary regions systematically",
      "Look for double-headed comedones (pathognomonic) and blackheads",
      "Probe sinus tracts with blunt probe — defines extent",
      "Examine for perianal fistulae, skin tags (Crohn's features)",
      "BMI, metabolic assessment"
    ],
    investigations: [
      { name: "Clinical diagnosis", role: "HS is a clinical diagnosis — no specific investigation required" },
      { name: "Swab culture (wound)", role: "Bacterial/fungal culture of discharge — guides antibiotic selection but does not confirm HS" },
      { name: "Transperineal/transrectal US", role: "Delineates sinus tract anatomy in perianal HS; helps plan surgical approach" },
      { name: "MRI perineum", role: "Complex perianal HS; differentiates from Crohn's fistula; maps extent of disease to sphincter complex" },
      { name: "Colonoscopy", role: "Perianal HS with Crohn's features — exclude IBD; up to 50% perianal HS has co-existing Crohn's" },
      { name: "Fasting glucose, HbA1c, lipid profile", role: "Metabolic syndrome screening — associated condition" }
    ]
  },
  criteria: {
    title: "Hurley Staging and Treatment Recommendations",
    items: [
      { k: "Stage I", v: "Abscesses only, no sinus tracts — topical/oral antibiotics, weight loss, smoking cessation, biologics" },
      { k: "Stage II", v: "Recurrent abscesses + sinus tracts, separated by normal skin — biologics (adalimumab), local excision of individual tracts" },
      { k: "Stage III", v: "Diffuse involvement, interconnected tracts — radical wide excision, biological cover peri-operatively" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Lifestyle: weight loss (BMI reduction), smoking cessation, reduce friction (loose-fitting clothes), antibacterial wash (chlorhexidine)",
      "Topical: clindamycin 1% solution BD — Hurley I",
      "Oral antibiotics: tetracycline 500 mg BD × 3 months (mild–moderate); rifampicin 300 mg BD + clindamycin 300 mg BD × 3 months (moderate — combination more effective than monotherapy)",
      "Intralesional triamcinolone (10 mg/mL): individual acutely inflamed nodules — immediate relief",
      "Hormonal therapy (females): combined OCP (not progesterone-only — worsens HS); spironolactone 100–200 mg/day",
      "Zinc gluconate: anti-inflammatory; 90 mg/day",
      "Deroofing procedure: unroof sinus tract with probe + scissors under local anaesthetic; leaves defect to heal by secondary intention; low recurrence for individual tracts"
    ],
    medical: [
      "Adalimumab (Humira): only NICE/FDA-approved biologic; 160 mg week 0, 80 mg week 2, then 40 mg every week; IHS4 response 50% at 16 weeks (PIONEER I/II); continue long-term for responders",
      "Secukinumab (anti-IL-17A): positive Phase III (SUNSHINE/SUNRISE); approved EU 2023",
      "Bimekizumab (anti-IL-17A/F): PIONEER-1 positive trial; emerging data",
      "Infliximab: off-label; used in Crohn's-associated HS",
      "Metformin: in metabolic syndrome-associated HS — indirect evidence",
      "Isotretinoin: limited evidence for HS specifically; may help comedone component",
      "Prednisolone: short courses for acute flares — not long-term"
    ],
    surgical: [
      { name: "Incision and drainage (I&D)", when: "ONLY for acute, tense, fluctuant abscess for immediate pain relief", notes: "NOT a treatment for HS — provides temporary relief only; does not prevent recurrence; informs patient that definitive surgery is the long-term solution" },
      { name: "Deroofing / STEEP procedure (Skin-Tissue-Sparing Excision with Electrosurgical Peeling)", when: "Hurley II — individual sinus tracts", notes: "Probe tract, unroof with scissors or electrocautery, curette base; heal by secondary intention; recurrence rate ~15–20% for individual tracts" },
      { name: "Wide local excision", when: "Hurley II–III limited areas, recurrence after deroofing", notes: "Excise 1 cm beyond apparent disease; include all sinus tracts; to level of subcutaneous fat; primary closure if possible" },
      { name: "Radical excision", when: "Hurley III — diffuse disease", notes: "Excise all affected tissue including 1–2 cm margin into clinically normal skin; to level of deep fascia (not through) in axilla; primary closure, skin graft, or flap reconstruction" },
      { name: "Flap reconstruction after radical excision", when: "Large defects after axillary/groin/perineal radical excision", notes: "Axilla: lateral thoracic/thoracodorsal perforator flap; groin: medial/lateral thigh advancement; perineum: gracilis flap or lotus petal flap for perianal defects" }
    ]
  },
  technique: {
    title: "Radical Wide Excision — Axillary HS",
    prep: [
      "Mark out disease extent preoperatively — probe all sinus tracts, mark all involved skin",
      "Mark 1–2 cm margin beyond apparent disease",
      "Mark important neurovascular structures to protect (intercostobrachial nerve, medial cutaneous nerve of arm)",
      "Consider perioperative adalimumab (hold 1 week before surgery if on biologic — reduces bleeding risk, discuss with rheumatologist/dermatologist)"
    ],
    steps: [
      { n: 1, t: "Excision", d: "Elliptical excision encompassing all marked disease. Depth: include skin, subcutaneous fat, apocrine gland-bearing tissue. Stop AT the investing fascia of axilla — do not violate deep fascia or axillary contents." },
      { n: 2, t: "Haemostasis", d: "Meticulous haemostasis — axillary wound bleeds significantly. Avoid clips near axillary vessels. Bipolar diathermy preferred near nerve." },
      { n: 3, t: "Assess defect size", d: "Measure defect. <5 cm: consider primary closure with undermining. 5–10 cm: consider split-skin graft or local flap. >10 cm: perforator-based local flap or distant flap." },
      { n: 4, t: "Reconstruction", d: "Primary closure if achievable without tension. SSG (meshed 1.5:1) for large defects — graft take excellent in non-infected field. Perforator flap for complex reconstruction — better cosmesis, allows arm abduction." },
      { n: 5, t: "Drain", d: "Suction drain to dead space. Bolster dressing over graft if SSG." },
      { n: 6, t: "Postoperative", d: "Arm immobilised in abducted position if SSG axilla × 5–7 days for graft take. Early physiotherapy after healing." }
    ],
    pearls: [
      "Mark disease extent before GA — becomes impossible to see under drapes once patient positioned",
      "Intercostobrachial nerve (from T2 intercostal) traverses the axilla — identify and preserve to avoid permanent arm numbness",
      "In perianal HS: stay above sphincter complex; MRI mapping essential; do not sacrifice sphincters — staged reconstruction if needed",
      "Perioperative biologic therapy: most guidelines suggest holding adalimumab 1–2 weeks before major excision, resume when wound healed (2–4 weeks post-op)",
      "HS surgery should not be performed in an acutely infected field — settle with antibiotics first; operate in quiescent phase"
    ]
  },
  guidelines: [
    { src: "British Association of Dermatologists (BAD) HS guidelines 2019" },
    { src: "European HS Foundation (EHSF) guidelines 2019" },
    { src: "NICE Technology Appraisal TA392: Adalimumab for HS" },
    { src: "PIONEER I/II trials: Kimball et al. NEJM 2016 — adalimumab" }
  ],
  pearls: [
    "HS is NOT primarily a skin infection — antibiotics control but do not cure; surgery is the only cure for advanced disease",
    "Hurley staging drives treatment — Stage I: medical; Stage II: biologics ± local surgery; Stage III: radical excision",
    "Smoking cessation is the single most important lifestyle modification — smokers have 4× higher recurrence after surgery",
    "Perianal HS is frequently misdiagnosed as Crohn's — 50% have co-existing Crohn's; colonoscopy if any GI symptoms"
  ],
  mistakes: [
    "Repeated I&D as 'treatment' for HS — delays definitive surgery, worsens fibrosis",
    "Operating in acutely infected field — wait for quiescent phase",
    "Inadequate excision margins — HS disease extends beyond visible involvement; 1 cm into normal skin minimum",
    "Violating axillary contents during excision — fascia is the limit",
    "Not counselling on lifestyle modification (smoking, obesity) before surgery — high recurrence without behavioural change"
  ]
},

{
  id: "liposarcoma",
  dept: "soft-tissue",
  name: "Liposarcoma",
  latin: "Liposarcoma",
  organ: "Soft tissue/Retroperitoneum",
  severity: "critical",
  tags: ["sarcoma","retroperitoneum","oncology","resection"],
  hero: "Most common retroperitoneal sarcoma; surgery is the only curative modality; aim for R0 resection; dedifferentiated subtype has worst prognosis.",
  keypoints: [
    "Most common retroperitoneal soft tissue sarcoma (40–45% of all retroperitoneal STS)",
    "Retroperitoneal liposarcoma often huge at presentation (median >15 cm) — adjacent organs frequently involved",
    "Well-differentiated/dedifferentiated (WD/DD) subtype: MDM2/CDK4 amplification on chromosome 12q — confirm by FISH/IHC",
    "Surgery is the only curative treatment — aim R0 but R1 accepted for major vessel proximity",
    "En-bloc resection of involved adjacent organs (kidney, colon) is standard — multivisceral resection improves local control",
    "Dedifferentiated liposarcoma (DDLPS): 80% local recurrence even after R0; multiple resections may be required",
    "Adjuvant RT reduces local recurrence in extremity sarcoma; limited evidence in retroperitoneum (EORTC 62092 STRASS trial: no OS benefit)"
  ],
  differentials: [
    "Well-differentiated liposarcoma vs benign lipoma (size >5 cm, deep location, heterogeneity → FISH for MDM2)",
    "Other retroperitoneal sarcomas: leiomyosarcoma (IVC involvement), MPNST, undifferentiated pleomorphic sarcoma",
    "Retroperitoneal lymphoma",
    "Renal cell carcinoma (distinct origin on imaging)",
    "Adrenal cortical carcinoma",
    "Teratoma/germ cell tumour",
    "Retroperitoneal fibrosis (benign)"
  ],
  mnemonics: [
    { name: "Liposarcoma subtypes by behaviour", text: "WD = Well Done (low grade, good prognosis), DD = Deadly Dedifferentiated (high grade, 80% local recurrence), Myx = Myxoid (intermediate, translocation), Pleomorphic = Poorest (high grade, mets)" },
    { name: "MDM2/CDK4 amplification", text: "Think '12 chromosomes': chromosome 12q13-15 amplification in WD/DD liposarcoma — confirm with FISH for MDM2" }
  ],
  overview: {
    definition: "Malignant mesenchymal neoplasm showing adipocytic differentiation. The most common soft tissue sarcoma in adults. Locations: retroperitoneum (most common), extremities (thigh), and rarely other sites.",
    epidemiology: "~20% of all soft tissue sarcomas. Peak incidence 50–70 years. M = F. Retroperitoneal liposarcoma median presentation size 15–20 cm. Extremity liposarcoma typically smaller, better prognosis. No defined environmental risk factors for sporadic cases.",
    pathophysiology: "Well-differentiated/dedifferentiated (WD/DD): amplification of chromosome 12q13-15 containing MDM2 (inhibits p53) and CDK4 (promotes cell cycle). Myxoid liposarcoma: FUS-DDIT3 (FUS-CHOP) translocation t(12;16) → aberrant lipogenesis and mesenchymal differentiation block. Pleomorphic: complex karyotype, TP53 and RB mutations.",
    classification: [
      "Well-differentiated liposarcoma (WDLPS) — low grade; MDM2/CDK4 amplification; large, adipocytic, atypical cells; no metastasis but local recurrence",
      "Dedifferentiated liposarcoma (DDLPS) — high grade; non-adipocytic area within WDLPS; 15–20% metastasis; MDM2/CDK4 amplified; worst prognosis",
      "Myxoid liposarcoma — intermediate grade; FUS-DDIT3; characteristic round cell component worsens prognosis; chemo-sensitive",
      "Pleomorphic liposarcoma — high grade; 30–40% metastasis; worst prognosis; complex karyotype",
      "Myxoid pleomorphic liposarcoma — rare variant; children/young adults; DICER1 mutation"
    ]
  },
  diagnosis: {
    history: [
      "Slowly growing retroperitoneal or thigh mass — often months to years before diagnosis",
      "Abdominal fullness, early satiety, constipation (retroperitoneal compression)",
      "Leg oedema or varicocele (IVC/gonadal vein compression)",
      "Back pain from neural/bone involvement",
      "Extremity: painless slowly enlarging deep thigh mass",
      "Prior history of liposarcoma (retroperitoneal — high recurrence rate)"
    ],
    examination: [
      "Retroperitoneal: large palpable abdominal/flank mass; may be ballotable; cannot get above it",
      "Assess for associated lymphoedema, leg oedema (IVC compression)",
      "Extremity: deep mass in thigh; assess size, mobility, attachment to underlying structures",
      "Neurovascular assessment: sensation, motor, pulses distal to mass",
      "Baseline assessment of adjacent organ function (renal function — pre-op nephrectomy planning)"
    ],
    investigations: [
      { name: "CT chest/abdomen/pelvis with IV contrast", role: "Primary staging; fat attenuation within mass (CT HU negative values) strongly suggests liposarcoma; non-fatty/solid components suggest DD component; assess organ involvement" },
      { name: "MRI abdomen/retroperitoneum", role: "Defines fascial planes, vascular involvement, extent of disease with more accuracy than CT; essential for surgical planning" },
      { name: "Core needle biopsy (CT-guided)", role: "Histological confirmation and subtype classification; MDM2/CDK4 IHC ± FISH; mandatory before systemic therapy; may not change surgical approach for large, clearly resectable retroperitoneal mass" },
      { name: "MDM2 FISH / CDK4 IHC", role: "Distinguishes WDLPS/DDLPS from benign lipoma and other sarcomas; positive MDM2 amplification = liposarcoma" },
      { name: "FDG-PET-CT", role: "Optional; high FDG uptake indicates DD component; identifies distant metastasis" },
      { name: "Renal function (eGFR, nuclear medicine DTPA scan)", role: "Pre-operative nephrectomy planning — confirm contralateral kidney function adequate" }
    ]
  },
  criteria: {
    title: "FNCLCC Sarcoma Grading (applies to liposarcoma subtype allocation)",
    items: [
      { k: "Grade 1", v: "Well-differentiated liposarcoma — total score 2–3; <5% necrosis; <2 mitoses/10 HPF" },
      { k: "Grade 2", v: "Myxoid liposarcoma — total score 4–5; 5–50% necrosis; 2–19 mitoses/10 HPF" },
      { k: "Grade 3", v: "Dedifferentiated/Pleomorphic — total score 6–8; >50% necrosis; ≥20 mitoses/10 HPF" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance for elderly/frail patients with WDLPS — slow growth, no metastasis; serial CT every 6 months",
      "Palliation for unresectable recurrence — pain management, bowel/urinary support"
    ],
    medical: [
      "Neoadjuvant chemotherapy: selected high-grade, large extremity sarcomas — doxorubicin + ifosfamide; aim tumour downstaging to allow limb-sparing surgery",
      "First-line systemic therapy (metastatic): doxorubicin 75 mg/m² — response rate 15–25%",
      "Trabectedin: approved for L-type sarcomas (liposarcoma/leiomyosarcoma) — second-line; PFS benefit; ORR 6–10%",
      "Eribulin: approved FDA for DDLPS/liposarcoma second-line (EORTC 62062); OS benefit vs dacarbazine",
      "Palbociclib (CDK4/6 inhibitor): for WDLPS/DDLPS with CDK4 amplification — Phase II data; emerging treatment",
      "Neoadjuvant RT: retroperitoneal sarcoma (25 Gy × 5 fractions or 50 Gy) — reduces local recurrence after R0 in selected series; STRASS trial showed no OS benefit overall"
    ],
    surgical: [
      { name: "En-bloc multivisceral resection", when: "Retroperitoneal liposarcoma — primary or recurrence", notes: "Standard approach: resect tumour en bloc with adherent organs (ipsilateral kidney, adrenal, colon, psoas muscle, retroperitoneal fat). Aim R0; R1 acceptable at vascular margins. Do not shell out from adjacent structures — leaves microsatellite disease." },
      { name: "Wide local excision", when: "Extremity/truncal liposarcoma", notes: "Limb-sparing if achievable: 1–2 cm soft tissue margin; if not possible adjacent to NV bundle, peel off epineurium/adventitia (R1 preferred over amputation). Compartmentectomy for compartment-confined tumour." },
      { name: "Inferior vena cava resection and reconstruction", when: "IVC involvement — leiomyosarcoma of IVC more common; can occur in retroperitoneal sarcoma", notes: "Below renal veins: resection without reconstruction if adequate collaterals; above renal veins: PTFE graft reconstruction; total hepatic exclusion if suprarenal" },
      { name: "Repeated resection for local recurrence", when: "WDLPS/DDLPS recurrence — median DFS after primary resection ~18 months", notes: "Repeated resection improves survival over palliation alone; quality of life acceptable; discuss at specialist sarcoma MDT" }
    ]
  },
  technique: {
    title: "Retroperitoneal Liposarcoma Resection",
    prep: [
      "Multidisciplinary review: sarcoma surgeon, vascular surgery on standby, urology (nephrectomy), hepatobiliary (liver involvement)",
      "Pre-operative ureteric stent placement (controversial but helps identify ureter intraoperatively)",
      "Adequate bowel prep if colonic resection anticipated",
      "Consent for multivisceral resection including nephrectomy"
    ],
    steps: [
      { n: 1, t: "Access and exposure", d: "Midline laparotomy or extended transverse/retroperitoneal approach. Full exploration: assess extent, adhesion, organ involvement, major vessel proximity." },
      { n: 2, t: "Vascular control first", d: "Identify and control aorta, IVC, iliac vessels before mobilising tumour. Loop vessels proximally. Assess tumour-vessel interface — can usually peel off adventitia (R1) safely." },
      { n: 3, t: "Medial mobilisation", d: "Medial visceral rotation (Mattox manoeuvre for left-sided, Cattel-Braasch for right) to expose retroperitoneal contents. Follow retroperitoneal fatty plane." },
      { n: 4, t: "En-bloc resection", d: "Do NOT shell out tumour. Resect en bloc with: ipsilateral kidney/adrenal (left > right), mesocolon/colon if adherent, psoas muscle if involved, diaphragm if adherent. Pass specimen as one piece." },
      { n: 5, t: "Assess margins", d: "Mark specimen for orientation. Intraoperative frozen section of close/suspicious margins. R0: no tumour at inked margin; R1: tumour cells at margin microscopically." },
      { n: 6, t: "Reconstruction and closure", d: "Colorectal anastomosis (primary or defunctioning stoma). Retroperitonealise the wound. Place surgical clips at tumour bed to guide adjuvant RT planning. Ensure haemostasis. Close abdomen." }
    ],
    pearls: [
      "Never shell out a retroperitoneal sarcoma — en-bloc resection is standard; leaving tumour on adherent organs causes local recurrence in satellite deposits",
      "Left-sided retroperitoneal liposarcoma: Gerota's fascia, left kidney, adrenal, and colonic mesentery removed en bloc — do not try to preserve these unless completely uninvolved",
      "Intraoperative ureteric identification: stent placed pre-op, or palpate stent in situ — prevents ureteric injury during medial dissection",
      "Vascular surgeons on standby for IVC involvement — controlled venorrhaphy or patch repair preferable to reconstruction"
    ]
  },
  guidelines: [
    { src: "TARPSWG (Trans-Atlantic Retroperitoneal Sarcoma Working Group) Guidelines 2018" },
    { src: "ESMO Clinical Practice Guidelines: Soft tissue and visceral sarcomas 2021" },
    { src: "STRASS trial: Gronchi et al. Lancet Oncol 2020 — neoadjuvant RT in retroperitoneal sarcoma" },
    { src: "NCCN Soft Tissue Sarcoma Guidelines 2023" }
  ],
  pearls: [
    "MDM2 amplification distinguishes WDLPS from benign lipoma — all deep lipomas >5 cm need MDM2 FISH testing",
    "Retroperitoneal WDLPS does NOT metastasise but has 80% local recurrence — death from local disease not distant mets",
    "Dedifferentiated area within a WDLPS completely changes prognosis and management — sample non-adipocytic areas at biopsy",
    "Myxoid liposarcoma is the only sarcoma subtype that metastasises to unusual sites: fat-containing sites (retroperitoneum, paraspinal, other fat deposits) rather than lung"
  ],
  mistakes: [
    "Shelling out a retroperitoneal liposarcoma — microsatellite deposits in adjacent fat cause inevitable local recurrence",
    "Not planning for multivisceral resection — incomplete consent and preparation leads to suboptimal oncological resection",
    "Biopsy of apparent lipoma >5 cm without MDM2 testing — benign lipoma does not become liposarcoma but deep lipomas may be liposarcomas",
    "Adjuvant RT for retroperitoneal sarcoma as routine — STRASS trial showed no OS benefit; discuss at MDT"
  ]
},

{
  id: "leiomyosarcoma",
  dept: "soft-tissue",
  name: "Leiomyosarcoma",
  latin: "Leiomyosarcoma",
  organ: "Soft tissue/Vascular",
  severity: "critical",
  tags: ["sarcoma","IVC","vascular","oncology"],
  hero: "Malignant smooth muscle tumour; retroperitoneal or IVC origin most challenging; complete resection with vascular reconstruction where needed is the only curative option.",
  keypoints: [
    "Retroperitoneal LMS is distinct from uterine LMS — worse prognosis, different molecular profile",
    "IVC leiomyosarcoma: three segments (infra/supra-renal, renal, suprahepatic) — segment determines operability and complexity",
    "Retroperitoneal LMS less amenable to multivisceral resection than liposarcoma — more adherent to major vessels",
    "High metastatic potential (liver and lung predominantly) — baseline CT chest essential",
    "Gemcitabine + docetaxel: most active regimen for LMS (especially uterine) — ORR 36% (Maki et al.)",
    "Trabectedin approved for L-type sarcomas (lipo + leio) — alternative second-line"
  ],
  differentials: [
    "Liposarcoma (fat attenuation on CT distinguishes WD type; MDM2 FISH)",
    "GIST (CD117/DOG1 positive; spindle cells; gastric origin common)",
    "Dedifferentiated liposarcoma (MDM2 amplification)",
    "Solitary fibrous tumour",
    "Undifferentiated pleomorphic sarcoma",
    "Malignant PEComa",
    "Angiosarcoma (IVC origin rare but possible)"
  ],
  mnemonics: [
    { name: "IVC LMS segments", text: "Level I = below renals, Level II = renal segment, Level III = suprahepatic to right atrium — 'I Renals IIIatrium'" },
    { name: "LMS markers", text: "SMA (smooth muscle actin), Desmin, H-caldesmon — all positive in LMS; CD117 negative distinguishes from GIST" }
  ],
  overview: {
    definition: "Malignant neoplasm of smooth muscle differentiation. Arises from smooth muscle of blood vessel walls (especially IVC), retroperitoneal soft tissue, uterus, and GI tract. High-grade tumour with significant metastatic potential.",
    epidemiology: "Second most common retroperitoneal sarcoma after liposarcoma. F:M = 2:1 for uterine; M = F for retroperitoneal. Peak incidence 50–60 years. IVC LMS: one of the rarest large-vessel tumours (~300 cases reported).",
    pathophysiology: "Complex karyotype with multiple chromosomal losses (10q, 13q, RB1) and gains (1q21, 5p). RB1 pathway inactivation central to pathogenesis. No specific translocations unlike myxoid liposarcoma/Ewing sarcoma. High-grade: mitotic index >15/10 HPF, coagulative necrosis, marked pleomorphism.",
    classification: [
      "Retroperitoneal LMS — de novo smooth muscle; aggressive; high distant metastasis rate",
      "IVC LMS — segment I (infrahepatic/intrarenal): most common; segment II (renal level); segment III (suprahepatic/intracardiac): highest complexity",
      "Uterine LMS — distinct entity; better response to gemcitabine + docetaxel",
      "GI LMS — distinct from GIST (CD117 negative); stomach, small bowel; resection ± adjuvant therapy"
    ]
  },
  diagnosis: {
    history: [
      "Retroperitoneal mass: back/flank pain, abdominal fullness — same as liposarcoma but tends to be more adherent to major vessels",
      "IVC LMS: Budd-Chiari syndrome (suprahepatic level), leg oedema/varicocele (infrarenal), nephrotic syndrome/renal impairment (renal level)",
      "Uterine LMS: postmenopausal bleeding, rapidly growing uterine mass",
      "Systemic symptoms: weight loss, fatigue — more common than in WDLPS"
    ],
    examination: [
      "Palpable abdominal/retroperitoneal mass",
      "IVC involvement: bilateral leg oedema, dilated abdominal veins, Budd-Chiari signs (jaundice, ascites, liver tenderness)",
      "Varicocele (often left-sided) — left gonadal vein compressed by IVC LMS at renal level"
    ],
    investigations: [
      { name: "CT chest/abdomen/pelvis with IV contrast", role: "Retroperitoneal/IVC mass assessment; lung and liver metastases; IVC enhancement pattern (intraluminal vs mural)" },
      { name: "MRI abdomen", role: "IVC LMS: defines intraluminal extent, atrial involvement; superior soft tissue contrast for surgical planning" },
      { name: "Echocardiography", role: "IVC LMS extending to right atrium — extent of cardiac involvement; assess right heart function" },
      { name: "Core needle biopsy", role: "Histological confirmation; SMA, desmin, h-caldesmon IHC positive; CD117 negative (distinguishes from GIST); Ki67 for grade" },
      { name: "Venogram (IVC)", role: "Defines IVC involvement extent, collateral circulation — guides reconstruction planning" },
      { name: "PET-CT", role: "Staging; identifies occult metastases; FDG avid tumours have worse prognosis" }
    ]
  },
  criteria: {
    title: "IVC LMS — Surgical Segments and Approach",
    items: [
      { k: "Level I", v: "Below renal veins — IVC resection without reconstruction if adequate collaterals; or PTFE patch/tube graft" },
      { k: "Level II", v: "At renal vein level — most complex; may require renal autotransplantation or temporary dialysis; reconstruction mandatory" },
      { k: "Level III", v: "Suprahepatic to RA — hepatic exclusion; cardiopulmonary bypass may be required for right atrium involvement" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance inappropriate for LMS — surgical resection required unless metastatic/unresectable"
    ],
    medical: [
      "Neoadjuvant chemotherapy: selected cases to downstage — doxorubicin + ifosfamide OR gemcitabine + docetaxel (especially uterine LMS)",
      "First-line metastatic: doxorubicin 75 mg/m² — ORR 15–25%",
      "Gemcitabine + docetaxel: particularly effective for uterine LMS; ORR 36% (Maki); less effective for retroperitoneal LMS",
      "Trabectedin: second-line L-type sarcomas; PFS benefit vs best supportive care",
      "Pazopanib (VEGFR/PDGFR/KIT inhibitor): second-line non-adipocytic sarcoma; PFS benefit (PALETTE trial)"
    ],
    surgical: [
      { name: "Complete excision of retroperitoneal LMS", when: "Resectable disease — primary treatment", notes: "R0 resection aim; less amenable to en-bloc multivisceral resection than liposarcoma due to vascular adherence; IVC/aorta involvement may limit R0" },
      { name: "IVC resection and reconstruction", when: "Level I IVC LMS — primary approach", notes: "Isolate IVC above and below tumour with vascular clamps; lateral venorrhaphy for partial involvement; circumferential resection with PTFE 20 mm tube graft; anticoagulate peri-op" },
      { name: "IVC reconstruction with hepatic exclusion", when: "Level III IVC LMS", notes: "Portal hepatis dissection and clamping; outflow via temporary cavopulmonary shunt or veno-venous bypass; IVC excision and PTFE graft; high morbidity/mortality" },
      { name: "Cardiopulmonary bypass for right atrial extension", when: "IVC LMS extending into right atrium", notes: "Cardiac surgery team involvement; CPB + deep hypothermic circulatory arrest for tumour extraction from RA" }
    ]
  },
  technique: {
    title: "IVC Level I LMS Resection with Reconstruction",
    prep: [
      "Vascular surgery co-surgeon for IVC involvement",
      "PTFE 20 mm graft prepared on back table",
      "Adequate venous access and haematology (massive transfusion protocol on standby)",
      "Bilateral leg venous pressure monitoring for IVC clamping tolerance"
    ],
    steps: [
      { n: 1, t: "Exposure", d: "Midline laparotomy. Right medial visceral rotation (Cattell-Braasch) to expose entire retroperitoneal IVC from iliac confluence to right atrium." },
      { n: 2, t: "Vascular control", d: "Apply vascular clamps above and below tumour on IVC. Test with clamp — assess haemodynamic tolerance. Clamp lumbar veins entering IVC in operative field." },
      { n: 3, t: "IVC excision", d: "Excise involved IVC segment with tumour en bloc. Preserve renal veins if possible; if right renal vein sacrifice needed, ensure left renal vein provides adequate drainage (± right nephrectomy)." },
      { n: 4, t: "Reconstruction", d: "End-to-end anastomosis with 20 mm ringed PTFE graft; 5-0 Prolene continuous suture; proximal anastomosis first. Or patch repair if partial wall involvement." },
      { n: 5, t: "De-clamp and check", d: "Flush graft before final suture to exclude air. De-clamp slowly. Check distal venous pressures. Anticoagulate (heparin intraoperatively, warfarin for 3–6 months post-op)." }
    ],
    pearls: [
      "IVC clamping below the renal veins is well-tolerated haemodynamically in most patients — above renal veins is not",
      "Right-sided IVC LMS: may sacrifice right renal vein if short — IVC provides drainage directly. Never sacrifice left renal vein (only drainage for left kidney) without planned nephrectomy",
      "PTFE grafts for IVC reconstruction: ringed PTFE prevents kinking; long-term patency 70–80% at 5 years with anticoagulation"
    ]
  },
  guidelines: [
    { src: "ESMO Clinical Practice Guidelines: Soft tissue and visceral sarcomas 2021" },
    { src: "TARPSWG Guidelines 2018" },
    { src: "PALETTE trial: van der Graaf et al. Lancet 2012 — pazopanib" },
    { src: "Maki et al: gemcitabine + docetaxel in uterine LMS, JCO 2007" }
  ],
  pearls: [
    "IVC LMS is rare but surgically complex — always involve vascular surgery; segment determines reconstruction requirements",
    "Uterine LMS responds better to gemcitabine + docetaxel than other soft tissue LMS — subtype matters for systemic therapy choice",
    "Retroperitoneal LMS has higher distant metastasis rate than retroperitoneal liposarcoma — lung and liver metastases predominate",
    "R0 resection is the most important prognostic factor — but for IVC LMS, R0 is technically challenging; vascular reconstruction enables R0"
  ],
  mistakes: [
    "Attempting IVC LMS resection without vascular surgery — IVC reconstruction is a vascular operation",
    "Failing to assess contralateral renal drainage before sacrificing right renal vein",
    "Not anticoagulating IVC graft — PTFE graft thrombosis leads to Budd-Chiari or bilateral leg oedema",
    "Confusing LMS with GIST on IHC — LMS: SMA+/CD117−; GIST: CD117+/DOG1+"
  ]
},

{
  id: "desmoid",
  dept: "soft-tissue",
  name: "Desmoid Tumour",
  latin: "Tumor desmoides / Fibromatosis aggressiva",
  organ: "Soft tissue/Mesentery",
  severity: "major",
  tags: ["sarcoma","FAP","APC","mesentery","active-surveillance"],
  hero: "Locally aggressive fibromatosis with no metastatic potential; paradigm shift to active surveillance first; surgery for progressors; sorafenib for FAP-related intra-abdominal desmoids.",
  keypoints: [
    "Desmoid tumours do NOT metastasize — mortality from local complications (bowel obstruction, fistula, vascular compression)",
    "Active surveillance first: 50% spontaneously stabilise or regress — avoid surgery as first-line",
    "Sporadic: beta-catenin (CTNNB1) mutation; FAP-associated: APC mutation (chromosome 5q21)",
    "FAP-related: intra-abdominal mesenteric desmoids — can be lethal despite no metastasis; sorafenib is treatment of choice (NEXTGEN trial)",
    "Sorafenib: ORR 33%, disease control 81% (Alliance A091105 trial) — now first-line systemic therapy",
    "Surgery: reserved for R0 achievable without functional loss or major morbidity; margins status less prognostic than previously thought"
  ],
  differentials: [
    "Retroperitoneal fibrosis (IgG4-related or drug-induced — no mass effect, diffuse)",
    "Low-grade fibrosarcoma",
    "Solitary fibrous tumour",
    "Mesenteric fibromatosis vs mesenteric carcinoid tumour",
    "Nodular fasciitis (rapid growth, self-limiting)",
    "Gardner fibroma (children, FAP-associated)"
  ],
  mnemonics: [
    { name: "Desmoid treatment ladder", text: "WANS: Watch (active surveillance) → Anti-hormonals/NSAIDs → Non-cytotoxic (sorafenib) → Surgery (last resort)" },
    { name: "FAP + Desmoid", text: "FAP patients who smoke, are female, or have family history of desmoids have highest risk — 'Female Smoker FAP = Desmoid risk'" }
  ],
  overview: {
    definition: "Locally aggressive monoclonal fibroblastic proliferation arising from musculoaponeurotic structures. Classified as intermediate (locally aggressive) soft tissue tumour. No metastatic potential but significant local morbidity from invasion. Formally known as aggressive fibromatosis.",
    epidemiology: "Rare: ~5–6 per million per year. Bimodal: young women (15–40 years, hormonal association) and FAP patients. FAP: 10–20% develop desmoids; risk gene (APC position beyond codon 1310), triggers include surgery and pregnancy. Sporadic: CTNNB1 mutation in >85%.",
    pathophysiology: "Two genetic pathways: (1) APC mutation (FAP) → constitutive beta-catenin nuclear signalling → fibroblastic proliferation. (2) Sporadic: somatic CTNNB1 mutation (encodes beta-catenin) → same downstream Wnt signalling activation. Oestrogen may promote growth (anti-oestrogen therapy used historically). Myofibroblastic phenotype: positive for SMA, negative for S100/CD34/CD117.",
    classification: [
      "Intra-abdominal/mesenteric — FAP-associated; worst prognosis due to local complications",
      "Extra-abdominal — chest wall, shoulder girdle, extremity; sporadic; better outcome",
      "Abdominal wall — young women, post-pregnancy or post-surgery; sporadic",
      "Multifocal — rare; FAP-associated"
    ]
  },
  diagnosis: {
    history: [
      "Slowly growing firm mass — abdominal wall, extremity, or incidentally found on CT",
      "Previous abdominal surgery (especially for FAP — 80% of intra-abdominal desmoids follow laparotomy)",
      "Known FAP or family history (APC mutation)",
      "Pregnancy or recent childbirth (hormonal trigger for sporadic desmoids)",
      "Abdominal symptoms: pain, bloating, bowel obstruction (mesenteric desmoid)",
      "Young woman with abdominal wall mass post-Caesarean section (abdominal wall desmoid)"
    ],
    examination: [
      "Firm, non-tender, fixed mass — consistency like cicatricial tissue",
      "Abdominal wall: firm, integrated with rectus/oblique muscles — move with muscle contraction",
      "Assess for FAP stigmata: polyps (colonoscopy), osteomas, lipomas, epidermoid cysts (Gardner syndrome)",
      "Mesenteric desmoid: palpable mass, bowel obstruction signs, ureteric obstruction"
    ],
    investigations: [
      { name: "MRI (preferred)", role: "Characterises extent; heterogeneous T2, band-like T1 dark areas (collagen); infiltrative margins; key for surgical planning" },
      { name: "CT abdomen/pelvis", role: "Mesenteric desmoid: assess bowel/ureteric involvement, vessel encasement, extent" },
      { name: "Core needle biopsy", role: "Histological confirmation (spindle cells, bland fibroblasts, no necrosis, no mitoses); beta-catenin nuclear staining (IHC); CTNNB1 mutation testing" },
      { name: "Colonoscopy / APC genetic testing", role: "All patients with intra-abdominal desmoid — exclude FAP; 10–20% of intra-abdominal desmoids are FAP-related" }
    ]
  },
  criteria: {
    title: "EORTC/ESMO Desmoid Progression Criteria (Active Surveillance)",
    items: [
      { k: "Stable/regression", v: "Continue surveillance; no intervention required" },
      { k: "Asymptomatic progression <20%", v: "Continue close surveillance; consider intervention if approaching critical structure" },
      { k: "Symptomatic OR progression >20% (RECIST)", v: "Initiate systemic therapy (sorafenib first-line) or MDT discussion for surgery" },
      { k: "Rapid progression / critical location", v: "Sorafenib + early surgical planning; avoid emergency surgery if possible" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance: MRI at 1, 3, 6, 12, 18, 24 months then annually; ~50% stabilise/regress — avoid surgery as first-line for most desmoids",
      "NSAIDs: sulindac 150 mg BD — anti-fibrotic, modest effect; used in FAP-related desmoids as adjunct",
      "Anti-oestrogen therapy (historical): tamoxifen 40–120 mg/day; toremifene; modest response; mainly for high oestrogen state (pregnancy, OCP)"
    ],
    medical: [
      "Sorafenib (multikinase inhibitor): first-line systemic therapy; 400 mg BD; ORR 33%, disease control 81% (Alliance A091105 RCT); now standard for progressive/symptomatic desmoid — proven superior to placebo",
      "Imatinib (PDGFR inhibitor): second-line option; ORR 6–10%; PFS benefit (Mace)",
      "Doxorubicin + dacarbazine (DTIC): chemotherapy for rapidly progressive, life-threatening disease; ORR 30–40%; significant toxicity",
      "Liposomal doxorubicin: better-tolerated alternative for chemotherapy approach",
      "Pazopanib: case series data; second/third-line option"
    ],
    surgical: [
      { name: "R0 resection", when: "Progressive despite sorafenib, symptomatic (bowel obstruction, fistula, ureteric obstruction), abdominal wall location where R0 achievable without major morbidity", notes: "Wide margins (1–2 cm) ideally; R0 preferred but R1 with negative microscopic margins acceptable (local recurrence not reliably reduced by wider margins — margin status less prognostic than previously thought in CTNNB1 T45S/S45F mutation)" },
      { name: "Bowel resection for obstruction/fistula", when: "Mesenteric desmoid with bowel complication", notes: "Staged approach preferred; defunctioning stoma first if acute; definitive resection after optimisation; may require complex reconstruction" },
      { name: "Radiotherapy", when: "Extremity/truncal desmoid not amenable to surgery with adequate margins; R1 resection; recurrence after surgery", notes: "50–56 Gy external beam RT; local control 70–80%; avoid in children (growth plate); avoid intra-abdominal (radiation enteritis risk)" }
    ]
  },
  technique: {
    title: "Abdominal Wall Desmoid Resection with Mesh Reconstruction",
    prep: [
      "MRI delineation of extent — desmoid infiltrates muscle layers",
      "Plan skin/fascia involvement — flap may be needed if skin involved",
      "Biological mesh available for complex reconstruction"
    ],
    steps: [
      { n: 1, t: "Mark margins", d: "Mark 1–2 cm clinical margin around MRI extent. Plan elliptical excision." },
      { n: 2, t: "Excise full thickness", d: "Include all involved muscle (rectus, oblique as appropriate) and posterior sheath. Check peritoneal involvement — may need to enter abdomen." },
      { n: 3, t: "Orient specimen", d: "Mark orientation; send for frozen sections at margins if critical." },
      { n: 4, t: "Reconstruction", d: "Small defects (<3 cm): primary closure with overlapping fascial flaps. Larger: lightweight polypropylene or biological mesh (underlay or bridging). Avoid tight closure — mesh bridges gap without tension." },
      { n: 5, t: "Drain", d: "Closed suction drain to dead space. Monitor for haematoma." }
    ],
    pearls: [
      "Active surveillance first — 50% of desmoids stabilise; avoid surgery for asymptomatic stable disease",
      "Sorafenib is now first-line systemic therapy for progressive desmoid — try before surgery for intra-abdominal disease",
      "Mesenteric desmoid in FAP: involves superior mesenteric vessels — unresectable in ~50%; medical treatment is primary approach",
      "R0 margins are important but do not guarantee non-recurrence — desmoid recurs even after R0, especially CTNNB1 T45S mutation"
    ]
  },
  guidelines: [
    { src: "ESMO Clinical Practice Guidelines: Desmoid tumour 2022 (Kasper et al.)" },
    { src: "Alliance A091105 trial: Gounder et al. NEJM 2018 — sorafenib vs placebo" },
    { src: "BSG/ACPGBI FAP Guidelines 2020 — desmoid management in FAP" }
  ],
  pearls: [
    "Desmoid does not metastasise — death from local bowel/vascular complications, not distant spread",
    "Active surveillance is the standard first approach — 50% of desmoids regress or stabilise without treatment",
    "Sorafenib changed the treatment landscape in 2018 — first-line medical therapy for progressive desmoid",
    "Mesenteric desmoid in FAP patients: life-threatening; sorafenib + MDT; surgical resection rarely curative due to SMA involvement"
  ],
  mistakes: [
    "Surgery as first-line without trial of active surveillance — 50% of desmoids do not need treatment",
    "Not testing for FAP in all intra-abdominal desmoid patients — changes surveillance and management",
    "Incomplete resection of mesenteric desmoid by non-specialist — better left to specialist sarcoma centre",
    "Using RT for intra-abdominal desmoid — radiation enteritis risk is unacceptable"
  ]
},

{
  id: "merkel-cell",
  dept: "soft-tissue",
  name: "Merkel Cell Carcinoma",
  latin: "Carcinoma cellulare Merkel",
  organ: "Skin",
  severity: "critical",
  tags: ["skin","MCC","neuroendocrine","immunotherapy","SLNB"],
  hero: "Rare but aggressive cutaneous neuroendocrine carcinoma; Merkel cell polyomavirus (MCPyV) in 80%; excellent response to immunotherapy (avelumab/pembrolizumab).",
  keypoints: [
    "Merkel cell carcinoma (MCC): red/violet dome-shaped rapidly growing nodule; head/neck or extremities in elderly or immunosuppressed",
    "MCPyV-positive (80%): viral oncoprotein T-antigen; better prognosis; better immunotherapy response",
    "MCPyV-negative (20%): UV-induced TP53/RB1 mutations; worse prognosis; higher mutational burden but less immunotherapy response",
    "SLNB mandatory for clinically node-negative MCC — 25–35% SN positivity rate",
    "Wide excision: 1–2 cm margins; adjuvant RT to primary site standard of care",
    "Avelumab (anti-PD-L1): first-line for metastatic/unresectable MCC; ORR 62% treatment-naive (JAVELIN Merkel 200); pembrolizumab alternative",
    "Immune checkpoint inhibitor response durable in MCPyV+ — long-term remissions reported"
  ],
  differentials: [
    "Basal cell carcinoma (pearly, slower-growing)",
    "Squamous cell carcinoma (keratinised, crusted)",
    "Lymphoma (B-cell cutaneous — CD20 positive)",
    "Small cell lung carcinoma metastasis (CK20 negative, TTF-1 positive — opposite of MCC)",
    "Amelanotic melanoma (S100/HMB45 positive)",
    "Glomus tumour (subungual, smaller, painful)",
    "Pyogenic granuloma (history of trauma, bleeds easily)"
  ],
  mnemonics: [
    { name: "MCC clinical features AEIOU", text: "Asymptomatic, Expanding rapidly, Immune suppressed patient, Older age (>50), UV-exposed site — all increase MCC likelihood" },
    { name: "MCC IHC", text: "CK20 positive (dot-like paranuclear staining) + TTF-1 negative = MCC. TTF-1 positive = small cell lung met, not MCC. 'Twenty dot, no TTF'" }
  ],
  overview: {
    definition: "Rare primary cutaneous neuroendocrine carcinoma arising from Merkel cells (mechanoreceptors) in the basal epidermis. Aggressive behaviour with high rates of nodal and distant metastasis. Disproportionately high mortality relative to incidence.",
    epidemiology: "~3,000 cases/year in USA; rare in UK (~500/year). Incidence rising (3-fold increase since 1990). Elderly (median 75 years). Risk: immunosuppression (HIV, transplant: 10× increased risk), UV exposure, Merkel cell polyomavirus (MCPyV) infection, CLL (concurrent in 5% of MCC cases), white skin. M:F = 2:1.",
    pathophysiology: "MCPyV (80%): viral integration into genome → large T-antigen expression → Rb and p53 pathway inactivation → cell transformation. UV-induced (MCPyV-negative, 20%): TP53 somatic mutations, RB1 loss, high tumour mutational burden (TMB). Neuroendocrine phenotype: CK20+, synaptophysin+, chromogranin+, TTF-1−.",
    classification: [
      "Stage I: <2 cm, node-negative — 80% 5-year survival",
      "Stage II: ≥2 cm, node-negative — 60% 5-year survival",
      "Stage III: regional nodal disease — 40% 5-year survival",
      "Stage IV: distant metastasis — <15% 5-year survival"
    ]
  },
  diagnosis: {
    history: [
      "Rapidly expanding red/violet/flesh-coloured skin nodule — often described as 'appeared and doubled in size over weeks'",
      "Head/neck (50%) or extremities; sun-exposed areas",
      "Elderly patient (>70 years) or immunosuppressed",
      "History of CLL, organ transplant, HIV",
      "Rapidly growing, non-tender — atypical for infection",
      "May follow skin injury or scar"
    ],
    examination: [
      "Solitary dome-shaped nodule, firm, red/violet, shiny surface, telangiectasia",
      "Typically non-tender (distinguishes from infected cyst/abscess)",
      "Size at presentation: median 1.5–2 cm",
      "Regional lymph nodes: palpate carefully — 25% have synchronous nodal disease",
      "Complete skin examination",
      "Systemic examination for NHL/CLL (lymphadenopathy, splenomegaly)"
    ],
    investigations: [
      { name: "Excision biopsy", role: "Histological diagnosis: CK20 (paranuclear dot pattern) + synaptophysin/chromogranin; TTF-1 negative (excludes small cell lung met)" },
      { name: "MCPyV antibody titre (serum)", role: "MCPyV LT antibody: elevated at diagnosis, falling titre = recurrence surveillance marker; negative = MCPyV-negative tumour" },
      { name: "SLNB", role: "All clinically node-negative MCC after WLE — 25–35% SN positivity rate; staging and prognostic information" },
      { name: "CT chest/abdomen/pelvis", role: "Staging — lymph node and distant metastases (liver, lung, bone)" },
      { name: "FDG-PET-CT", role: "More sensitive than CT for nodal and distant staging; recommended in NCCN guidelines for stage II–IV" },
      { name: "PD-L1 expression", role: "Does NOT predict immunotherapy response in MCC — unlike other tumours; use ICI regardless of PD-L1" }
    ]
  },
  criteria: {
    title: "MCC AJCC 8th Edition — Key T Stage",
    items: [
      { k: "T1", v: "Maximum tumour diameter ≤2 cm" },
      { k: "T2", v: "Maximum tumour diameter 2–5 cm" },
      { k: "T3", v: "Maximum tumour diameter >5 cm" },
      { k: "T4", v: "Invasion of bone, muscle, fascia, or cartilage" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Active surveillance not appropriate for MCC — all cases require active treatment"
    ],
    medical: [
      "Adjuvant RT to primary site: standard after WLE, especially positive/close margins, lymphovascular invasion, immunosuppressed — 50–54 Gy in 25–27 fractions; reduces local recurrence from 40% to <10%",
      "Adjuvant RT to nodal basin: positive SLNB or therapeutic LND with ECE; 46–50 Gy to nodal basin",
      "Avelumab (anti-PD-L1): first-line metastatic/unresectable MCC; ORR 62% treatment-naive, 33% second-line (JAVELIN Merkel 200); FDA-approved 2017",
      "Pembrolizumab (anti-PD-1): KEYNOTE-017 — ORR 56% first-line; durable responses",
      "Nivolumab: second-line data; option",
      "Chemotherapy (carboplatin/etoposide or cyclophosphamide/doxorubicin/vincristine): historically used; ORR 55% but responses not durable; now reserved for ICI failure or contraindication"
    ],
    surgical: [
      { name: "Wide local excision", when: "All primary MCC", notes: "1–2 cm margins; include subcutaneous fat to deep fascia. Mohs MMS for H-zone face. Adjuvant RT standard after WLE." },
      { name: "SLNB", when: "All clinically node-negative MCC", notes: "25–35% SN positivity; guides adjuvant treatment; positive SLNB → nodal RT (completion LND not required by NCCN for MCC)" },
      { name: "Therapeutic lymph node dissection", when: "Clinically palpable nodal disease confirmed by FNA", notes: "Complete regional dissection; postop RT to nodal basin standard" }
    ]
  },
  technique: {
    title: "WLE + SLNB for Merkel Cell Carcinoma",
    prep: [
      "Lymphoscintigraphy and blue dye mapping (same technique as melanoma SLNB)",
      "Plan for adjuvant RT — inform radiation oncology before WLE so surgical clips placed at tumour bed"
    ],
    steps: [
      { n: 1, t: "WLE", d: "1–2 cm margins; depth to deep fascia. Place surgical clips at margins of excision bed for RT planning." },
      { n: 2, t: "SLNB", d: "Standard technique with gamma probe + blue dye. All hot/blue nodes sent for histology. SN H&E + CK20 IHC." },
      { n: 3, t: "Reconstruction", d: "Primary closure, skin graft, or local flap. Allow 4–6 weeks healing before RT." },
      { n: 4, t: "Adjuvant RT", d: "RT to primary site ± regional nodes after WLE. Discuss at MDT: immunosuppressed patients at high risk, always RT; node-positive, always RT." }
    ],
    pearls: [
      "MCC grows very rapidly — biopsy any red rapidly-growing skin nodule in an elderly person promptly",
      "Immunotherapy response is excellent — avelumab ORR 62% is far superior to any soft tissue sarcoma; immunotherapy is standard for advanced disease",
      "MCPyV antibody titre: rises at diagnosis, useful for surveillance — falling titre after treatment suggests remission; rising titre suggests recurrence",
      "RT to primary site is standard even after R0 excision — local recurrence without RT is 40%"
    ]
  },
  guidelines: [
    { src: "NCCN Guidelines: Merkel Cell Carcinoma 2023" },
    { src: "JAVELIN Merkel 200: Kaufman et al. Lancet Oncol 2018 — avelumab" },
    { src: "KEYNOTE-017: Nghiem et al. JCO 2019 — pembrolizumab" },
    { src: "BAD Guidelines: MCC 2019" }
  ],
  pearls: [
    "MCC has an excellent immunotherapy response — far better than most other skin cancers or sarcomas",
    "PD-L1 expression does NOT predict response to ICI in MCC — use ICI regardless of PD-L1 status",
    "MCPyV antibody monitoring: a useful blood test for recurrence surveillance after treatment",
    "MCC in an immunosuppressed patient: consider reducing immunosuppression (transplant team involvement)"
  ],
  mistakes: [
    "Treating as benign cyst or pyogenic granuloma — biopsy rapidly growing skin nodule in elderly, especially on sun-exposed sites",
    "Omitting adjuvant RT after WLE — local recurrence 40% without RT; standard to irradiate primary site",
    "Omitting SLNB — 25–35% SN positivity rate; not performing SLNB understages and undertreats patients",
    "Using chemotherapy as first-line for metastatic MCC — immunotherapy (avelumab/pembrolizumab) is far superior and should be first-line"
  ]
},

{
  id: "kaposi",
  dept: "soft-tissue",
  name: "Kaposi's Sarcoma",
  latin: "Sarcoma Kaposi",
  organ: "Skin/Mucosa/Viscera",
  severity: "major",
  tags: ["skin","HHV8","HIV","immunosuppression","oncology"],
  hero: "HHV-8 driven vascular tumour; primarily a medical disease — treat the underlying immunosuppression; systemic chemotherapy for advanced disease.",
  keypoints: [
    "All forms driven by HHV-8 (KSHV — Kaposi's Sarcoma-associated Herpesvirus) infection",
    "Four epidemiological types: Classic, Endemic (African), Iatrogenic (transplant), AIDS-associated",
    "AIDS-KS: most common AIDS-defining malignancy; treat HIV with ART first — KS may regress with immune reconstitution",
    "Surgery has limited role — biopsy for diagnosis only; palliative excision for isolated skin lesions",
    "Systemic therapy: liposomal doxorubicin (pegylated) first-line for advanced AIDS-KS or transplant-KS",
    "Classic KS: elderly men of Mediterranean/Eastern European Jewish origin; indolent; often treated with RT alone",
    "Endemic KS: Sub-Saharan Africa; aggressive nodal and visceral form in children"
  ],
  differentials: [
    "Pyogenic granuloma (rapid growth, bleeds, single lesion)",
    "Bacillary angiomatosis (Bartonella — cat scratch exposure, looks identical to AIDS-KS on skin — differentiate by biopsy)",
    "Angiosarcoma (face/scalp in elderly — ecchymotic purple patch vs KS nodule)",
    "Glomus tumour",
    "Haemangioma",
    "Haematoma or purpura (non-neoplastic)",
    "Dermatofibrosarcoma protuberans"
  ],
  mnemonics: [
    { name: "KS types — 4 Cs", text: "Classic (Mediterranean elderly men), Common in Africa (endemic), ChemoRT immunosuppression (iatrogenic), Counts low = AIDS (AIDS-KS)" },
    { name: "HHV-8 = KSHV", text: "Kaposi's Sarcoma Herpesvirus — latent infection in endothelial cells; immune suppression triggers viral reactivation and tumour development" }
  ],
  overview: {
    definition: "Multifocal low-grade vascular tumour of endothelial cell origin, driven by HHV-8 (KSHV) infection. Not a true sarcoma despite the name — behaves as a multicentric vascular neoplasm rather than a solitary solid tumour.",
    epidemiology: "Classic KS: rare; Mediterranean/Eastern European Jewish/Middle Eastern elderly men. Endemic KS: Sub-Saharan Africa; 30–50% of all soft tissue tumours in some regions; includes aggressive lymphadenopathic childhood form. Iatrogenic KS: organ transplant recipients (most common in renal Tx); 200–500× increased risk; regresses with immunosuppression reduction. AIDS-KS: most common AIDS-defining malignancy; pre-ART era: ~30% AIDS patients; ART era: <5%; CD4 <200 most at risk.",
    pathophysiology: "HHV-8 infects endothelial cells → LANA (latency-associated nuclear antigen) protein inhibits p53 and Rb → vLIPS (viral IL-6) and vFLIP → NF-κB activation and anti-apoptosis → spindle cell proliferation and aberrant angiogenesis. In immunosuppressed hosts, viral reactivation unopposed → KS development. ART reconstitutes CD4 → immune surveillance → KS regression in ~40%.",
    classification: [
      "Classic KS — purple/red plaques and nodules lower limbs; indolent; elderly Mediterranean men; HHV-8 seroprevalence 30–50% in endemic areas",
      "Endemic/African KS — nodular, florid, or lymphadenopathic (children) forms; aggressive",
      "Iatrogenic/transplant-associated KS — regresses with reduction of calcineurin inhibitors; mTOR inhibitor switch (sirolimus) protective and therapeutic",
      "AIDS-associated KS — most aggressive; mucocutaneous + visceral (GI, lung); epidemic form"
    ]
  },
  diagnosis: {
    history: [
      "HIV-positive patient with skin lesions — always consider KS",
      "Known low CD4 count; not on or poor adherence to ART",
      "Purple/red non-blanching macules, plaques, or nodules on skin",
      "Oral cavity lesions (palate, gums) — seen in AIDS-KS",
      "Dyspnoea, haemoptysis (pulmonary KS — rare but high mortality)",
      "Abdominal pain, bleeding PR, obstruction (GI KS — often asymptomatic but can present with GI complications)",
      "Transplant recipient with new skin lesions on calcineurin inhibitor"
    ],
    examination: [
      "Skin: violaceous (purple/red) macules, plaques, nodules — classical appearance; follow dermatomal distribution on extremities",
      "Lymphoedema of legs/genitalia (lymph node involvement)",
      "Oral: palatal KS lesions — check in all HIV+ patients with skin KS",
      "Assess for visceral involvement: respiratory examination, abdominal palpation",
      "Document T stage (extent of tumour), I stage (immune), S stage (systemic illness) — AIDS-KS TIS staging (ACTG)"
    ],
    investigations: [
      { name: "Skin biopsy", role: "Histological confirmation: spindle cells, slit-like vascular spaces, extravasated red cells, haemosiderin; IHC: CD31, CD34 (endothelial), HHV-8 LANA (nuclear staining — pathognomonic)" },
      { name: "HIV viral load and CD4 count", role: "Baseline immune status; guides ART optimisation; CD4 <200 = highest KS risk" },
      { name: "HHV-8 serology", role: "Confirms HHV-8 exposure; used in transplant screening" },
      { name: "CT chest/abdomen/pelvis", role: "Assess visceral (pulmonary, GI) involvement; staging in AIDS-KS" },
      { name: "Upper/lower GI endoscopy", role: "GI KS: red/violaceous submucosal nodules; biopsy confirms; present in 40% of AIDS-KS; mostly asymptomatic" },
      { name: "Bronchoscopy", role: "Pulmonary KS suspected (dyspnoea, haemoptysis): endobronchial cherry-red lesions; biopsy high-risk (bleeding)" }
    ]
  },
  criteria: {
    title: "AIDS-KS ACTG TIS Staging System",
    items: [
      { k: "T0 (good risk)", v: "Confined to skin/lymph nodes/minimal oral disease (flat only on palate)" },
      { k: "T1 (poor risk)", v: "Tumour-associated oedema/ulceration, extensive oral, GI KS, visceral KS" },
      { k: "I0 (good risk)", v: "CD4 ≥150 cells/μL" },
      { k: "I1 (poor risk)", v: "CD4 <150 cells/μL" },
      { k: "S0 (good risk)", v: "No history of OI, thrush; no B symptoms; KPS ≥70" },
      { k: "S1 (poor risk)", v: "History of OI, B symptoms, or KPS <70" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Classic KS (elderly, indolent): observation if asymptomatic; local RT for symptomatic lesions (8–20 Gy) — excellent response",
      "Intralesional vinblastine: individual small KS lesions; 0.1 mg/cm² per lesion; effective for cosmetically troublesome lesions",
      "Alitretinoin 0.1% gel: topical retinoid for cutaneous AIDS-KS — FDA-approved; ORR 35%"
    ],
    medical: [
      "ART (antiretroviral therapy): FIRST treatment for AIDS-KS; immune reconstitution leads to KS regression in ~40% of T0/I0/S0 patients — start ART and observe for 2–3 months before adding chemotherapy in mild disease",
      "Immunosuppression reduction for transplant-KS: reduce calcineurin inhibitor dose; regression in 30–50%; switch to mTOR inhibitor (sirolimus/rapamycin) — anti-KS activity AND immunosuppressive effect",
      "Pegylated liposomal doxorubicin (Caelyx/Doxil): first-line systemic for advanced AIDS-KS (T1) or transplant-KS unresponsive to IS reduction; 20 mg/m² q3w; ORR 59%; preferred over conventional doxorubicin (less cardiotoxic)",
      "Paclitaxel: second-line; ORR 59–71%; q3w or weekly; active in liposomal doxorubicin-refractory disease",
      "BVD regimen (bleomycin + vincristine + liposomal doxorubicin): used in resource-limited settings (Sub-Saharan Africa)",
      "Pomalidomide (immunomodulatory agent): Phase II data; active against KS via anti-angiogenic and immunomodulatory mechanisms",
      "Temsirolimus/mTOR inhibitors: therapeutic effect in transplant KS — switch from calcineurin inhibitor to sirolimus recommended"
    ],
    surgical: [
      { name: "Excision biopsy", when: "Diagnosis confirmation for atypical lesions", notes: "Not used as primary treatment — KS is a multifocal disease, local excision does not prevent disease progression" },
      { name: "Palliative excision", when: "Isolated painful or ulcerated nodule causing functional impairment (e.g., plantar lesion)", notes: "Adequate margin for symptom control; anticipate high rate of new lesions elsewhere" },
      { name: "Lymph node dissection", when: "NOT performed — lymphadenopathic KS treated medically", notes: "Surgical lymph node dissection has no role in KS; lymphoedema managed conservatively (compression, elevation)" }
    ]
  },
  technique: {
    title: "Punch/Excision Biopsy for KS Diagnosis",
    prep: [
      "Sterile field; gloves (HHV-8 not transmitted by routine surgical contact but HIV precautions)",
      "Select a representative, accessible, non-ulcerated lesion"
    ],
    steps: [
      { n: 1, t: "Select lesion", d: "Choose a raised, non-necrotic nodular lesion — representative of active disease. Avoid ulcerated or necrotic areas (poor diagnostic yield)." },
      { n: 2, t: "Anaesthesia", d: "Local infiltration 1% lidocaine + adrenaline." },
      { n: 3, t: "Punch biopsy (4–6 mm) or excision", d: "Full-thickness 4–6 mm punch biopsy including subcutis for HHV-8 LANA immunohistochemistry. Include full lesion depth — superficial samples may miss pathognomonic features." },
      { n: 4, t: "Haemostasis", d: "KS lesions bleed easily — pressure and silver nitrate or direct suture." },
      { n: 5, t: "Processing", d: "Formalin-fixed paraffin-embedded. Request: H&E, CD31, CD34, HHV-8 LANA IHC. LANA nuclear staining = confirmatory for HHV-8." }
    ],
    pearls: [
      "Bacillary angiomatosis (Bartonella henselae) looks IDENTICAL to AIDS-KS clinically and histologically can be confused — LANA IHC confirms HHV-8; Warthin-Starry stain shows bacilli in bacillary angiomatosis",
      "Do not perform SLNB for KS — multifocal disease; nodal involvement is systemic, not sentinel",
      "Mucosal KS (palate) has lower biopsy yield due to highly vascular tissue — send for HHV-8 LANA specifically",
      "Transplant-KS: inform transplant team immediately — mTOR switch decision is time-sensitive; early IS reduction prevents visceral progression"
    ]
  },
  guidelines: [
    { src: "BHIVA Guidelines: Management of AIDS-associated KS 2021" },
    { src: "EORTC soft tissue sarcoma group: KS guidelines 2019" },
    { src: "ACTG TIS staging: Krown et al. JCO 1989 (revised 2007)" },
    { src: "British HIV Association (BHIVA) ART guidelines 2022" }
  ],
  pearls: [
    "ART is the treatment for AIDS-KS — start immediately; KS may regress with immune reconstitution; add chemotherapy only if T1 or ART non-responsive",
    "Bacillary angiomatosis mimics KS — LANA IHC differentiates; Bartonella can be treated with doxycycline",
    "Transplant-KS: switch calcineurin inhibitor to sirolimus (mTOR inhibitor) — antineoplastic AND immunosuppressive dual benefit",
    "Classic KS in elderly Mediterranean men: indolent — local RT or intralesional vinblastine; rarely life-threatening"
  ],
  mistakes: [
    "Starting chemotherapy in AIDS-KS without starting ART first — immune reconstitution alone causes regression in mild disease",
    "Mistaking bacillary angiomatosis for KS clinically — culture Bartonella, treat with doxycycline if confirmed",
    "Performing therapeutic lymph node dissection for lymphadenopathic KS — systemic medical disease, surgery has no benefit",
    "Missing pulmonary KS — check CT chest in all AIDS-KS patients with respiratory symptoms; pulmonary KS has poor prognosis and changes management"
  ]
}

]; // end SOFTTISSUE_DISEASES

if (typeof module !== 'undefined') module.exports = { SOFTTISSUE_DISEASES };
