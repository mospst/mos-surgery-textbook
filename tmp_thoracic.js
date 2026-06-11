// THORACIC DEPARTMENT — IDs: lung-cancer, pneumothorax, empyema, mesothelioma, thymoma, oesophageal-perforation, haemothorax, lung-abscess, mediastinal-mass, chest-wall-tumour, pectus, lung-carcinoid
const THORACIC_DISEASES = [
{
  id: "lung-cancer",
  dept: "thoracic",
  name: "Lung Cancer",
  latin: "Carcinoma pulmonis",
  organ: "Lung",
  severity: "high",
  tags: ["oncology","lung","thoracic","common"],
  hero: "Leading cause of cancer death worldwide. Surgical resection is curative for early-stage NSCLC. Only 20–25% of patients are resectable at presentation. Lobectomy is the gold standard.",
  keypoints: [
    "NSCLC (85%): adenocarcinoma (most common), squamous, large-cell; SCLC (15%): extensive spread at diagnosis",
    "TNM staging: stage I–IIIA = potentially resectable NSCLC; stage IIIB+ = chemoradiation; SCLC rarely surgical",
    "Lobectomy: gold standard resection; anatomic segmentectomy for poor pulmonary reserve",
    "Pre-op fitness assessment: FEV₁ and DLCO post-op prediction; FEV₁ppo >40% and DLCOppo >40% = operable",
    "VATS lobectomy: equivalent oncological outcomes, less morbidity than open thoracotomy"
  ],
  differentials: ["Pulmonary metastasis","Pulmonary carcinoid","Lung abscess","TB/fungal granuloma","Atypical carcinoid","Lymphoma","Hamartoma"],
  mnemonics: [
    {name:"Pancoast syndrome", text:"Superior sulcus tumour: Horner's (ptosis+miosis+anhidrosis) + Brachial plexus (C8/T1) pain + Rib destruction"},
    {name:"NSCLC staging resectability", text:"Stage I/II/IIIA: surgery ± adjuvant; IIIB+: chemoradiation; IV: systemic therapy/palliative"}
  ],
  overview: {
    definition: "Malignant neoplasm arising from the bronchial epithelium (carcinoma) or lung parenchyma, classified as NSCLC (adenocarcinoma, squamous cell, large-cell) or SCLC.",
    epidemiology: "50,000 new cases/year UK; 35,000 deaths/year. Leading cancer killer. 5-year survival overall: 10–15%. Stage I: >70% with resection. Smoking causes 85–90%.",
    pathophysiology: "Carcinogens (tobacco, asbestos, radon) → DNA damage → p53, KRAS, EGFR mutations → malignant transformation. SCLC: neuroendocrine, aggressive, early widespread metastasis. NSCLC: actionable mutations (EGFR, ALK, ROS1, PD-L1) guide targeted therapy.",
    classification: [
      "NSCLC: adenocarcinoma (40%), squamous cell (30%), large-cell (10%)",
      "SCLC (15%): limited (ipsilateral chest) vs extensive disease",
      "Carcinoid: low-grade neuroendocrine (separate entry)",
      "TNM 8th edition staging: T1–T4; N0–N3; M0–M1a/b/c"
    ]
  },
  diagnosis: {
    history: [
      "Persistent cough (new or changed pattern), haemoptysis",
      "Dyspnoea, chest pain, weight loss, fatigue",
      "Hoarseness (left RLN — aortopulmonary window nodes)",
      "Superior vena cava (SVC) obstruction: facial oedema, distended neck veins",
      "Pancoast syndrome: shoulder/arm pain, Horner's syndrome (superior sulcus tumour)",
      "Paraneoplastic: Cushing's (SCLC — ACTH), SIADH, Lambert-Eaton (SCLC), hypercalcaemia (PTHrP, squamous)"
    ],
    examination: [
      "Clubbing (10% NSCLC)",
      "Signs of SVC obstruction, pleural effusion, consolidation",
      "Lymphadenopathy: supraclavicular, axillary",
      "Horner's syndrome (ptosis, miosis, anhidrosis): superior sulcus/Pancoast",
      "Neurological deficit: brain metastases (focal neurology)"
    ],
    investigations: [
      {name:"CXR", role:"Initial: mass, hilar lymphadenopathy, pleural effusion, atelectasis; not sufficient alone"},
      {name:"CT chest/abdomen/pelvis (contrast)", role:"Staging: tumour characteristics (size, location, lobar involvement), mediastinal nodes, pleural/pericardial effusion, liver/adrenal metastases"},
      {name:"PET-CT", role:"Functional staging: N2/N3 nodes, distant metastases; sensitivity/specificity for nodal staging >85%"},
      {name:"MRI brain", role:"Staging for NSCLC stage II+; SCLC all stages; brain metastases"},
      {name:"Bronchoscopy + BAL/biopsy", role:"Central lesions: cytology + histology; EBUS for mediastinal nodes (N2/N3 staging)"},
      {name:"CT-guided needle biopsy", role:"Peripheral lesions; histology + molecular profiling (EGFR, ALK, ROS1, KRAS, PD-L1)"},
      {name:"EBUS-TBNA (endobronchial US)", role:"Mediastinal node sampling (N2/N3); avoids mediastinoscopy in many cases"},
      {name:"Pulmonary function tests (FEV₁, FVC, DLCO)", role:"Pre-op fitness assessment; predicted post-op FEV₁ppo and DLCOppo >40% = safe for lobectomy"}
    ]
  },
  criteria: {
    title: "Surgical Candidacy Criteria",
    items: [
      {k:"Stage I–IIIA NSCLC", v:"Potentially resectable; MDT review"},
      {k:"FEV₁ppo >40%", v:"Safe for lobectomy; 30–40% = segmentectomy; <30% = unresectable"},
      {k:"DLCOppo >40%", v:"Safe for lobectomy"},
      {k:"Cardiac fitness", v:"No unrevascularised CAD; ECHO if clinical concern"},
      {k:"Performance status", v:"WHO PS 0–1 for resection; PS 2 selected cases; PS 3–4 non-surgical"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Staging CT + PET-CT + MRI brain at MDT before treatment decision",
      "SABR (stereotactic ablative radiotherapy): for stage I–II patients unfit for surgery — 90% local control"
    ],
    medical: [
      "Adjuvant chemotherapy: cisplatin-based for stage II–IIIA after resection (stage IA: no benefit; IB: selected)",
      "Adjuvant osimertinib: EGFR-mutant stage IB–IIIA; significantly improves disease-free survival (ADAURA trial)",
      "Neoadjuvant chemoimmunotherapy (nivolumab + chemo): stage II–IIIA — improves pCR and event-free survival (CheckMate816)",
      "First-line NSCLC stage IV: EGFR+ → osimertinib; ALK+ → alectinib; PD-L1 ≥50% → pembrolizumab; others → chemoimmunotherapy",
      "SCLC limited: concurrent chemoradiation (cisplatin/etoposide + RT); prophylactic cranial irradiation (PCI)"
    ],
    surgical: [
      {name:"Lobectomy (VATS or open)", when:"Stage I–II NSCLC; selected stage IIIA; anatomically feasible; adequate pulmonary reserve", notes:"VATS preferred (less pain, shorter hospital stay, equivalent oncological outcomes); anatomical resection; systematic mediastinal lymph node dissection (MLND)"},
      {name:"Segmentectomy (anatomical)", when:"Stage IA (<2cm); poor pulmonary reserve (FEV₁ppo 30–40%); peripheral lesions", notes:"Non-inferior to lobectomy for stage IA tumours (JCOG0802/WJOG4607L trials); anatomical segmentectomy only (not wedge resection for curative intent)"},
      {name:"Pneumonectomy", when:"Centrally located tumour requiring right or left pneumonectomy; invasion of main pulmonary artery/vein; stage IIIA selected", notes:"High morbidity: mortality 3–5%; right pneumonectomy higher risk than left; bronchopleural fistula 3–5%"},
      {name:"Sleeve lobectomy", when:"Central lesion involving main bronchus; preserves lung parenchyma vs pneumonectomy", notes:"Bronchial sleeve resection + re-anastomosis; preferred over pneumonectomy if technically feasible"},
      {name:"Video-assisted mediastinoscopy (VAM) or mediastinotomy (Chamberlain)", when:"N2/N3 staging when EBUS-TBNA non-diagnostic", notes:"Gold standard for tissue diagnosis of mediastinal nodes pre-surgery"}
    ]
  },
  technique: {
    title: "VATS Lobectomy (Right Upper Lobe)",
    prep: [
      "Double-lumen ET tube (single-lung ventilation)",
      "Lateral decubitus position; table flexed",
      "3–4 ports: utility port + camera port + 2 working ports"
    ],
    steps: [
      {n:1, t:"Port placement", d:"4th ICS anterior axillary line (utility); 8th ICS mid-axillary (camera); +1–2 working ports"},
      {n:2, t:"Pleural adhesions", d:"Lyse any adhesions; assess pleural cavity for effusion/deposits"},
      {n:3, t:"Pulmonary vein first (vein-first technique)", d:"Identify and dissect right superior pulmonary vein; apply vascular stapler (2.5mm load)"},
      {n:4, t:"Pulmonary artery", d:"Dissect interlobar pulmonary artery; individual segmental artery branches to RUL; staple individually"},
      {n:5, t:"Bronchus", d:"Dissect RUL bronchus; ensure no tumour at bronchial margin; apply linear stapler (4.8mm load) at bronchial origin"},
      {n:6, t:"Fissure completion", d:"Complete major and minor fissures with stapler; ensure complete lobar separation"},
      {n:7, t:"Lymph node dissection", d:"Systematic MLND: stations 2R, 4R, 7, 8, 9 (right side); essential for accurate staging"},
      {n:8, t:"Specimen retrieval", d:"Withdraw lobe in specimen bag via utility port"},
      {n:9, t:"Chest drain and closure", d:"28Fr apical drain; check air leak; close ports"}
    ],
    pearls: [
      "Vein-first technique: divides pulmonary vein before artery — theoretically reduces cancer cell shedding during manipulation",
      "Intraoperative frozen section of bronchial margin: ensures R0 resection at bronchial stump",
      "MLND (mediastinal lymph node dissection): mandatory — upgrades stage in 15–20% of apparent N0 disease"
    ]
  },
  guidelines: [
    {src:"NICE NG122: Lung cancer diagnosis and management"},
    {src:"ESMO Clinical Practice Guidelines 2023: NSCLC"},
    {src:"BTS Guidelines: Selection of patients with lung cancer for surgery"},
    {src:"NCCN Non-Small Cell Lung Cancer v6.2024"}
  ],
  pearls: [
    "Stage IIIA (N2): multidisciplinary decision — some resectable after neoadjuvant; PET + EBUS to confirm single station N2",
    "EGFR mutation: screen all non-squamous NSCLC regardless of smoking; osimertinib adjuvant dramatically improves DFS",
    "Bronchopleural fistula post-pneumonectomy: empyema + air-fluid level on CXR; bronchoscopy confirms; treat with irrigation ± thoracostomy ± Clagett procedure"
  ],
  mistakes: [
    "Not performing EBUS/PET staging before resection — undiagnosed N2 disease leads to inappropriate surgery",
    "Wedge resection for curative intent in stage I disease — segmentectomy is the minimum anatomical resection",
    "Not profiling molecular biomarkers — EGFR/ALK/ROS1/PD-L1 critical for systemic therapy selection"
  ]
},
{
  id: "pneumothorax",
  dept: "thoracic",
  name: "Pneumothorax",
  latin: "Pneumothorax",
  organ: "Pleural cavity",
  severity: "moderate",
  tags: ["thoracic","lung","pleura","emergency"],
  hero: "Air in the pleural space. Primary spontaneous (young, tall, thin male, bleb rupture) vs secondary (COPD, asthma, CF). Tension PTX = clinical emergency — immediate needle decompression.",
  keypoints: [
    "Tension pneumothorax: clinical diagnosis — do NOT wait for CXR; immediate 2nd ICS midclavicular needle decompression",
    "Primary spontaneous PTX (PSP): young tall males; apical blebs; recurrence rate 30% after first, 50% after second",
    "BTS algorithm: size (rim <2cm vs ≥2cm on CXR) + symptoms determine management",
    "VATS pleurodesis (pleurectomy or talc poudrage): after second PSP or persistent air leak",
    "Secondary spontaneous PTX (SSP): underlying lung disease; ICD always; higher mortality"
  ],
  differentials: ["Tension pneumothorax","Haemothorax","Pleural effusion","Bullous emphysema (looks like PTX on CXR)","Pneumomediastinum"],
  mnemonics: [
    {name:"Tension PTX treatment", text:"NEEDLE FIRST, CHEST DRAIN AFTER: 2nd ICS MCL needle → hear/feel air → convert to ICD 4th/5th ICS MAL"}
  ],
  overview: {
    definition: "Presence of air in the pleural space, separating the visceral and parietal pleura, causing partial or complete lung collapse.",
    epidemiology: "PSP: 18–28/100,000/year in men; 6/100,000 women. Tall young males. SSP: >45 yrs with underlying lung disease. Traumatic: any age post-trauma.",
    pathophysiology: "PSP: rupture of subpleural apical blebs/bullae → air enters pleural space → lung recoil causes collapse. SSP: underlying disease weakens lung parenchyma. Tension: one-way valve → progressive PTX → mediastinal shift → cardiac tamponade physiology.",
    classification: [
      "Primary spontaneous (PSP): no underlying lung disease",
      "Secondary spontaneous (SSP): underlying lung disease (COPD, asthma, CF, TB, PCP)",
      "Traumatic: blunt or penetrating chest trauma",
      "Iatrogenic: post-procedure (CVL, pleural biopsy, thoracocentesis, PPV)",
      "Tension pneumothorax: haemodynamically compromising"
    ]
  },
  diagnosis: {
    history: [
      "Acute onset pleuritic chest pain and breathlessness",
      "Young tall male (PSP); pre-existing lung disease (SSP)",
      "Post-procedure (iatrogenic)",
      "Trauma (traumatic PTX)",
      "Tension: rapidly progressive breathlessness + haemodynamic collapse"
    ],
    examination: [
      "Tachycardia, tachypnoea, reduced SpO₂",
      "Reduced breath sounds on affected side",
      "Hyper-resonance on percussion",
      "Tension: tracheal deviation (late), hypotension, JVP elevation, absent breath sounds",
      "Small PSP: may have normal examination"
    ],
    investigations: [
      {name:"CXR (PA erect)", role:"Visible visceral pleural line; size assessment (rim >2cm = large); mediastinal shift in tension"},
      {name:"eFAST (lung sliding)", role:"Loss of lung sliding = pneumothorax; useful in trauma/ED; dynamic assessment"},
      {name:"CT chest", role:"Confirms diagnosis in equivocal CXR; distinguishes bullae from PTX; identifies underlying disease; staging for surgical planning"},
      {name:"Tension PTX", role:"CLINICAL DIAGNOSIS ONLY — do not delay for imaging"}
    ]
  },
  criteria: {
    title: "BTS 2023 Management Algorithm",
    items: [
      {k:"Tension PTX", v:"Immediate needle decompression: 2nd ICS MCL OR 4th ICS MAL → ICD"},
      {k:"Small PSP (<2cm rim) + minimal symptoms", v:"Discharge with safety-net advice; review 2–4 weeks"},
      {k:"Large PSP (≥2cm) or symptomatic", v:"Aspiration (needle) first; if fails → ICD"},
      {k:"SSP (any size)", v:"Immediate ICD; admission; consider early surgery if persistent air leak"},
      {k:"Persistent air leak >5 days", v:"VATS / surgical intervention"},
      {k:"Second episode PSP", v:"Offer VATS pleurodesis"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Observation: small PSP (<2cm, minimal symptoms); supplemental O₂ increases reabsorption 4× compared to air-breathing",
      "Discharge with clear written instructions: avoid air travel (until fully resolved + confirmed radiologically); avoid diving"
    ],
    medical: [
      "High-flow O₂: accelerates air reabsorption; 10L/min via face mask while managing PTX"
    ],
    surgical: [
      {name:"Needle aspiration (large-bore)", when:"Large PSP or symptomatic — first-line attempt before ICD; BTS recommends aspiration first", notes:"16G needle or Seldinger drain (8–14Fr); aspiration of air; CXR after; if successful → observe 4h → discharge"},
      {name:"Intercostal drain (ICD)", when:"SSP (all); failed aspiration; tension PTX (after needle decompression); haemopneumothorax; mechanical ventilation; bilateral PTX", notes:"4th/5th ICS MAL; 20–24Fr; connect to underwater seal; daily CXR; do NOT clamp; remove when lung expanded + air leak stopped for ≥24h"},
      {name:"VATS pleurodesis (pleurectomy or poudrage)", when:"Second episode PSP; persistent air leak >5 days; bilateral PTX; high-risk occupation (pilots, divers)", notes:"VATS: apical bullae resection + pleurectomy (parietal) or talc poudrage; 95–98% recurrence prevention; preferred over open; early intervention in SSP if air leak persists"},
      {name:"Chemical pleurodesis (talc slurry via ICD)", when:"Recurrent PTX unsuitable for VATS; malignant pleural effusion with pneumothorax component", notes:"Talc 4–5g in 50mL saline via ICD; clamp 1h; rotate patient; drain; less effective than surgical pleurodesis"}
    ]
  },
  technique: {
    title: "Intercostal Drain (ICD) Insertion",
    prep: [
      "Position: supine with ipsilateral arm behind head; lateral decubitus acceptable",
      "4th/5th ICS mid-axillary line (safe triangle: anterior border of latissimus dorsi + lateral border pectoralis major + below axilla)",
      "Sterile technique; local anaesthetic (10–15mL lidocaine)"
    ],
    steps: [
      {n:1, t:"Anaesthesia", d:"Infiltrate skin, subcutaneous tissue, intercostal muscle and parietal pleura with lidocaine"},
      {n:2, t:"Incision", d:"2cm transverse incision over the superior border of the rib below (avoids neurovascular bundle on inferior rib)"},
      {n:3, t:"Blunt dissection", d:"Blunt haemostat through intercostal muscles; 'pop' through parietal pleura; sweep finger to confirm pleural space and exclude adhesions"},
      {n:4, t:"Drain insertion", d:"Guide drain with finger into pleural cavity; direct posteriorly for fluid (haemothorax), apically for PTX; advance until all holes are intrathoracic"},
      {n:5, t:"Connection", d:"Connect to underwater seal drain (UWS); confirm swinging and bubbling"},
      {n:6, t:"Secure and CXR", d:"Suture with 1 silk; post-insertion CXR to confirm position and lung expansion"}
    ],
    pearls: [
      "Never clamp an underwater seal for PTX — risk of tension pneumothorax",
      "Persistent bubbling = ongoing air leak (lung parenchyma or bronchopleural fistula)",
      "Subcutaneous emphysema post-ICD: holes outside pleura — reposition drain"
    ]
  },
  guidelines: [
    {src:"BTS Guidelines 2023: Management of spontaneous pneumothorax"},
    {src:"BTS Guidelines 2010: ICD insertion"},
    {src:"NICE: Pneumothorax management"}
  ],
  pearls: [
    "Tension PTX is a clinical diagnosis — decompress first, CXR after (never delay treatment for imaging)",
    "PSP: 30% recurrence after first, 50% after second — offer VATS after second episode",
    "Catamenial pneumothorax: cyclical PTX in women occurring within 72h of menstruation = endometriosis on diaphragm/visceral pleura"
  ],
  mistakes: [
    "Waiting for CXR to treat tension pneumothorax — patient will deteriorate; treat clinically",
    "Clamping ICD in PTX — risk of tension; only clamp briefly when changing bottle",
    "Discharging SSP without ICD — all secondary spontaneous PTX require ICD and admission"
  ]
},
{
  id: "empyema",
  dept: "thoracic",
  name: "Pleural Empyema",
  latin: "Empyema pleurae",
  organ: "Pleural cavity",
  severity: "high",
  tags: ["thoracic","infection","pleura","abscess"],
  hero: "Infected pleural fluid (frank pus, organisms on culture, or pH <7.2). Progresses from exudative → fibrinopurulent → organising. Early drainage ± intrapleural fibrinolytics; organised empyema requires VATS decortication.",
  keypoints: [
    "Most common causes: parapneumonic (post-pneumonia), post-thoracic surgery, oesophageal perforation, haematogenous",
    "Light's criteria: exudate; pH <7.2 = always drain",
    "Three phases: exudative (drainage alone), fibrinopurulent (drainage + fibrinolytics), organising (VATS/open decortication)",
    "Intrapleural fibrinolytic therapy (tPA + DNase): reduces need for surgery in fibrinopurulent phase (MIST2 trial)",
    "VATS decortication: gold standard for fibrinopurulent/early organising; open for organised empyema"
  ],
  differentials: ["Malignant pleural effusion","Transudative pleural effusion (heart failure, cirrhosis)","Haemothorax","Chylothorax","Tuberculous pleuritis"],
  mnemonics: [
    {name:"MIST2 fibrinolytic regimen", text:"tPA 10mg + DNase 5mg twice daily × 3 days = MIST2 protocol; tPA breaks fibrin, DNase liquefies viscous DNA from dead PMNs"}
  ],
  overview: {
    definition: "Collection of infected fluid in the pleural space, arising from parapneumonic spread, trauma, surgery, oesophageal perforation, or haematogenous seeding.",
    epidemiology: "80,000 cases/year USA; 30% in-hospital mortality. Most common: parapneumonic (post-pneumonia). 50–70% of pneumonia patients develop parapneumonic effusion; 10% progress to empyema.",
    pathophysiology: "Phase 1 (Exudative/simple parapneumonic): fluid accumulates from capillary leak; sterile; drains easily. Phase 2 (Fibrinopurulent): bacterial invasion; pH falls; glucose falls; LDH rises; fibrin deposits; septations form. Phase 3 (Organising/organised): fibroblast ingrowth; fibrous peel encases lung; lung trapped; impaired expansion.",
    classification: [
      "Phase 1: simple parapneumonic (exudative) — pH >7.2, glucose normal, no organisms",
      "Phase 2: complicated parapneumonic/early empyema — pH 7.0–7.2, glucose <2.2, organisms",
      "Phase 3: frank pus; fibrinopurulent/organising — dense septations, loculated"
    ]
  },
  diagnosis: {
    history: [
      "Recent pneumonia, chest surgery, aspiration, oesophageal procedure",
      "Persistent fever despite antibiotics (parapneumonic empyema)",
      "Pleuritic chest pain, breathlessness",
      "Weight loss, night sweats (subacute/chronic)",
      "Haemoptysis preceding: lung abscess with empyema"
    ],
    examination: [
      "Fever, tachycardia, toxic appearance",
      "Dull to percussion, reduced breath sounds (effusion)",
      "Mediastinal shift (large effusion)",
      "Stony dull + bronchial breathing over upper fluid level (consolidation above effusion)"
    ],
    investigations: [
      {name:"CXR", role:"Effusion; loculated pleural fluid; pleural thickening"},
      {name:"Ultrasound-guided pleural aspiration", role:"Sample pleural fluid — send for pH, protein, LDH, glucose, MC&S, cytology"},
      {name:"Pleural fluid analysis", role:"pH <7.2 = drain; pH <7.0 = urgent drainage; LDH, protein (Light's criteria for exudate); Gram stain/culture/AFB; cytology"},
      {name:"CT chest with contrast", role:"Confirms empyema; assesses loculation, peel thickness, lung entrapment, mediastinal involvement, associated abscess"},
      {name:"Blood cultures + FBC/CRP", role:"Identify causative organism; gauge severity"}
    ]
  },
  criteria: {
    title: "BTS Pleural Disease Guideline — Pleural Fluid Categories",
    items: [
      {k:"Category 1: low risk", v:"Simple free-flowing; pH normal; drain if large or symptomatic; no antibiotics"},
      {k:"Category 2: moderate risk", v:"Loculated; pH 7.0–7.2 or glucose <3.4; drain required"},
      {k:"Category 3: high risk — drain always", v:"Frank pus (empyema); pH <7.0; positive culture/Gram stain"},
      {k:"Category 4: free-flowing exudate", v:"Low risk — monitor; may not need drainage"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Physiotherapy: breathing exercises to encourage lung re-expansion post-drainage",
      "Nutritional support: high-protein diet",
      "Prolonged antibiotics: 4–6 weeks typically; tailor to culture"
    ],
    medical: [
      "IV antibiotics: co-amoxiclav + metronidazole (broad coverage including anaerobes); adjust per culture",
      "Intrapleural fibrinolytics (MIST2 protocol): tPA 10mg + DNase 5mg BD × 3 days via ICD; dissolves fibrin + liquefies pus; 37% reduction in need for surgery (MIST2 trial)",
      "Pleural fluid pH guided management: pH <7.2 = drain; pH <7.0 = urgent ICD"
    ],
    surgical: [
      {name:"Image-guided ICD (ultrasound-guided)", when:"All empyemas requiring drainage; 28–32Fr large-bore tube for frank pus", notes:"US-guided; aim at most dependent portion; consider multiple drains for multiloculated; instil fibrinolytics via drain"},
      {name:"VATS decortication", when:"Fibrinopurulent empyema (phase 2–3) not responding to ICD + fibrinolytics; within 4–6 weeks of onset", notes:"Remove all fibrin and peel from visceral pleura; deloculate pleural space; achieve lung re-expansion; early VATS (within 6 weeks) has >90% success rate"},
      {name:"Open thoracotomy and decortication", when:"Organised empyema >6 weeks; VATS not possible (extensive adhesions, dense peel); failed VATS", notes:"Posterolateral thoracotomy; parietal and visceral pleurectomy (decortication); significant blood loss; longer recovery"},
      {name:"Open window thoracostomy (Eloesser/Clagett)", when:"Chronic empyema in frail patient unfit for decortication; bronchopleural fistula", notes:"Rib resection; marsupialization of pleural cavity to skin; open drainage; obliterate cavity slowly over weeks-months with packing"},
      {name:"Thoracoplasty", when:"Obliterate residual pleural space when lung cannot expand; chronic empyema space", notes:"Rib resection to allow chest wall to collapse onto lung/pleural space; rarely performed"}
    ]
  },
  technique: {
    title: "Intrapleural Fibrinolytic Therapy (MIST2 Protocol)",
    prep: [
      "ICD already in situ; confirm position on CXR/US",
      "Mix: tPA 10mg in 30mL saline + DNase 5mg in 30mL saline (instilled separately)"
    ],
    steps: [
      {n:1, t:"tPA instillation", d:"Instil tPA 10mg in 30mL saline via ICD; clamp drain for 1 hour"},
      {n:2, t:"DNase instillation", d:"30–60 minutes after tPA: instil DNase 5mg in 30mL saline; clamp for 1 hour"},
      {n:3, t:"Unclamp and drain", d:"Unclamp ICD; allow free drainage; measure output; note character (pus, fibrin, clot)"},
      {n:4, t:"Repeat BD for 3 days", d:"Total 6 doses (3 days twice daily); US reassessment after 3 days"},
      {n:5, t:"Assess response", d:"US: reduction in loculation and fluid; clinical improvement (temperature, CRP); if no improvement after 3 days → VATS"}
    ],
    pearls: [
      "tPA + DNase combination (MIST2) superior to either agent alone",
      "Timing matters: fibrinolytics most effective in phase 2 (fibrinopurulent) — less effective in organised phase 3",
      "BPF (bronchopleural fistula): fibrinolytics contraindicated — risk of air embolism and worsening BPF"
    ]
  },
  guidelines: [
    {src:"BTS Pleural Disease Guidelines 2023: Pleural infection/empyema"},
    {src:"MIST2 trial: Rahman et al. NEJM 2011"},
    {src:"NICE: Empyema pleural infection management"}
  ],
  pearls: [
    "MIST2 fibrinolytics reduce surgery need by 37% — administer before declaring VATS failure",
    "VATS within 6 weeks of onset: most successful; after 6 weeks peel is organised → open decortication",
    "Bronchopleural fistula: bubbling ICD + cavity on CXR after pneumonectomy; urgent bronchoscopy + Clagett/thoracostomy"
  ],
  mistakes: [
    "Using small-bore drain (8–12Fr) for frank pus — blocks rapidly; use 28–32Fr for empyema",
    "Fibrinolytics via small drain — must be free-draining; verify ICD position and patency",
    "Delaying VATS beyond 6 weeks — organised peel cannot be removed by VATS; requires painful open decortication"
  ]
},
{
  id: "oesophageal-perforation",
  dept: "thoracic",
  name: "Oesophageal Perforation",
  latin: "Perforatio oesophagi",
  organ: "Oesophagus",
  severity: "high",
  tags: ["thoracic","emergency","oesophagus","mediastinitis"],
  hero: "Highest mortality of any GI perforation (20–40%). Boerhaave's syndrome (spontaneous) is most severe. Early diagnosis and treatment is critical. Time to surgery <24h significantly reduces mortality.",
  keypoints: [
    "Boerhaave's syndrome: spontaneous full-thickness tear, distal left posterolateral oesophagus; post-vomiting; Mackler's triad",
    "Iatrogenic: most common overall (instrumentation, dilation, endoscopy)",
    "Mackler's triad: vomiting + chest pain + subcutaneous emphysema = Boerhaave until proven otherwise",
    "Immediate CT oesophagus with oral contrast (water-soluble); NOT barium initially",
    "Treatment: primary repair ± pleural drainage for early (<24h) contained; oesophagectomy or exclusion/diversion for late/necrotic"
  ],
  differentials: ["Aortic dissection","Myocardial infarction","Acute pancreatitis","Peptic ulcer perforation","Haemothorax","Spontaneous pneumothorax"],
  mnemonics: [
    {name:"Mackler's triad (Boerhaave's)", text:"Vomiting (effort) + Chest pain (lower left) + Subcutaneous emphysema (crepitus neck/chest) = Boerhaave until proven otherwise"},
    {name:"Oesophageal perforation location by cause", text:"Instrumentation: posterior pharynx (Killian's dehiscence area), lower oesophagus; Spontaneous (Boerhaave): distal left posterolateral; Foreign body: PES or cricopharyngeus"}
  ],
  overview: {
    definition: "Full-thickness disruption of the oesophageal wall allowing luminal contents (saliva, food, gastric acid) to leak into the mediastinum or pleural cavity, causing mediastinitis.",
    epidemiology: "Rare but lethal: 3.1/million/year. Mortality: iatrogenic (15–20%), spontaneous (30–40%), delayed (>24h: up to 60%). Iatrogenic most common (75%).",
    pathophysiology: "Gastric contents (acid, enzymes, organisms) contaminate mediastinum → chemical + bacterial mediastinitis → rapidly fatal. Distal oesophageal perforation → left pleural contamination (mediastinal pleura thinner on left). Mediastinitis = systemic inflammatory response → multi-organ failure.",
    classification: [
      "Iatrogenic: endoscopy, dilation, intubation, surgery",
      "Spontaneous (Boerhaave's): distal left posterolateral; post-vomiting",
      "Foreign body/external trauma",
      "Tumour perforation",
      "Contained vs non-contained (free mediastinal leak)"
    ]
  },
  diagnosis: {
    history: [
      "Boerhaave's: sudden severe chest/epigastric pain after forceful vomiting; radiation to back",
      "Subcutaneous emphysema: crepitus in neck and chest (Mackler's triad)",
      "Iatrogenic: pain/dysphagia after oesophageal instrumentation (endoscopy, dilation, intubation)",
      "Haematemesis (associated Mallory-Weiss or concurrent)",
      "Fever, dyspnoea (mediastinitis/pleural effusion)"
    ],
    examination: [
      "Subcutaneous emphysema: crepitus on palpation of neck and upper chest",
      "Hamman's sign: mediastinal crunch on auscultation (air in mediastinum)",
      "Septic: tachycardia, fever, hypotension",
      "Pleural effusion signs (left more common — Boerhaave's)"
    ],
    investigations: [
      {name:"CXR", role:"Mediastinal widening; left pleural effusion; pneumomediastinum; hydropneumothorax; subcutaneous emphysema"},
      {name:"CT chest with oral water-soluble contrast (Gastrografin)", role:"Diagnostic: extraluminal contrast leakage; mediastinal air/fluid; pleural contamination; size and location of perforation; contained vs free leak"},
      {name:"Barium swallow", role:"NOT first line (barium mediastinitis lethal); use if water-soluble contrast negative but high suspicion"},
      {name:"Upper GI endoscopy", role:"Careful — confirm and characterise perforation (size, location); plan endoscopic or surgical management; use only in stable patients; risk of worsening contamination with air insufflation"},
      {name:"FBC, CRP, lactate, blood cultures", role:"Assess severity; bacteraemia common with established mediastinitis"}
    ]
  },
  criteria: {
    title: "Pittsburgh Perforation Severity Score",
    items: [
      {k:"Points assigned for:", v:"Age >75, tachycardia, leucocytosis, pleural effusion, early (<24h), cancer, oesophageal cause"},
      {k:"Score 0–2", v:"Low risk — endoscopic/conservative management feasible"},
      {k:"Score 3–5", v:"Intermediate — early surgery or endoscopic stent"},
      {k:"Score >5", v:"High risk — surgery; mortality >40%"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Contained small perforation (<1cm, early, no mediastinal contamination): nil-by-mouth + broad-spectrum IV antibiotics + PPI + drainage of any collections",
      "Endoscopic management: clipping (small iatrogenic <1cm), self-expanding metal stent (SEMS) for larger contained perforations"
    ],
    medical: [
      "Broad-spectrum IV antibiotics: piperacillin-tazobactam + fluconazole (mediastinal contamination — mixed organisms including candida)",
      "IV PPI: reduce acid leakage",
      "Vasopressors: noradrenaline for septic shock",
      "NPO + NGT decompression; TPN or post-pyloric feeding"
    ],
    surgical: [
      {name:"Primary repair + tissue reinforcement", when:"Early presentation (<24h); viable tissue; contained contamination", notes:"Thoracotomy (left for Boerhaave's — left 6th ICS posterolateral); debride perforation edges; 2-layer interrupted closure (mucosa + muscularis/adventitia) with absorbable suture; reinforce with pleural flap, intercostal muscle, or omentum; drain mediastinum and pleural space; T-tube oesophagostomy if tissue poor quality"},
      {name:"Oesophageal exclusion and diversion", when:"Late presentation (>24h); non-viable tissue; extensive contamination; primary repair not possible", notes:"Cervical oesophagostomy (controlled fistula) + gastrostomy/jejunostomy for feeding; oesophagus excluded from circuit; delayed reconstruction 6–12 months when sepsis controlled"},
      {name:"Oesophagectomy", when:"Perforation associated with carcinoma; large segment necrosis; after failed repair", notes:"Technically very demanding in contaminated/septic field; high mortality; consider staged approach"},
      {name:"T-tube oesophagostomy", when:"Repair at risk of breakdown; elderly/frail; early but delayed viable tissue", notes:"T-tube placed through perforation; controlled fistula heals spontaneously when tube removed"},
      {name:"Endoscopic SEMS", when:"Contained perforation; poor surgical candidate; bridge to surgery; early iatrogenic perforation <2cm", notes:"Covered self-expanding metal stent; excludes perforation from luminal contents; drain any external collection percutaneously"}
    ]
  },
  technique: {
    title: "Primary Repair of Boerhaave's Oesophageal Perforation",
    prep: [
      "Left posterolateral thoracotomy (6th ICS) — Boerhaave's: distal left posterolateral",
      "Double-lumen ET tube; right lateral decubitus",
      "IV antibiotics, large-bore IV, central line, arterial line"
    ],
    steps: [
      {n:1, t:"Mediastinum access", d:"Open mediastinal pleura over lower oesophagus; drain all contaminated pleural fluid and food debris"},
      {n:2, t:"Perforation identification", d:"Identify tear (often muscle has split longer than mucosa — extend muscle incision to expose full mucosal tear)"},
      {n:3, t:"Debridement", d:"Excise devitalised oesophageal edges; fresh viable tissue for repair"},
      {n:4, t:"Mucosal closure", d:"2/0 Vicryl interrupted sutures closing mucosa; test with gentle insufflation and saline"},
      {n:5, t:"Muscular layer closure", d:"2/0 Vicryl interrupted sutures; do NOT tie too tightly — tension causes breakdown"},
      {n:6, t:"Tissue reinforcement", d:"Wrap repair with: intercostal muscle flap (pedicled on neurovascular bundle) OR parietal pleura OR omentum (via diaphragmatic window)"},
      {n:7, t:"Drain and close", d:"Wide-bore drain to mediastinum and left pleural space; nasogastric tube above repair; feeding jejunostomy"}
    ],
    pearls: [
      "Oesophageal mucosa extends FURTHER than muscle tear — always extend muscular incision to expose full mucosal extent before repair",
      "Tissue reinforcement is essential — bare suture repair in contaminated field fails in 30–50%",
      "Post-op swallow test (Gastrografin) at day 5–7 before oral feeding — confirm no leak"
    ]
  },
  guidelines: [
    {src:"ESGE/EACTS Guidelines 2019: Management of oesophageal perforations, Mallory-Weiss, and Boerhaave"},
    {src:"AUGIS: UK oesophageal perforation management guidelines"},
    {src:"Schweigert et al.: Oesophageal perforation — algorithm for management"}
  ],
  pearls: [
    "Mackler's triad should prompt immediate CT oesophagus — Boerhaave's is immediately life-threatening",
    "Endoscopic treatment (SEMS) increasingly used for contained perforations — avoids morbid thoracotomy in selected patients",
    "Always open muscle to full extent of mucosal tear: underestimating perforation length leads to repair failure"
  ],
  mistakes: [
    "Using barium as first contrast agent for swallow — if perforation present, barium mediastinitis is fatal",
    "Closing muscle layer without identifying full mucosal extent — incompletely repaired mucosal defect leads to leak",
    "Delaying diagnosis by attributing chest pain post-vomiting to Mallory-Weiss or MI — Boerhaave's is the diagnosis to exclude first"
  ]
},
{
  id: "haemothorax",
  dept: "thoracic",
  name: "Haemothorax",
  latin: "Haemothorax",
  organ: "Pleural cavity",
  severity: "high",
  tags: ["thoracic","trauma","blood","pleura"],
  hero: "Blood in the pleural space. Most commonly from trauma. Massive haemothorax (>1500mL): immediate ICD + consider thoracotomy. Retained haemothorax: VATS within 7–10 days.",
  keypoints: [
    "Massive haemothorax: >1500mL blood (half total blood volume) — haemodynamic shock + absent breath sounds + dull percussion",
    "ICD (28–32Fr): immediate drainage of haemothorax; cell salvage if auto-transfusion available",
    "Thoracotomy: >1500mL immediate drainage OR >200mL/hr × 3h OR persistent haemodynamic instability",
    "Retained haemothorax: undrained blood → fibrothorax/empyema; VATS within 7–10 days",
    "Clotted haemothorax: ICD inadequate — VATS drainage"
  ],
  differentials: ["Pleural effusion (non-haemorrhagic)","Empyema","Chylothorax","Rupture of thoracic aortic aneurysm","Haemopneumothorax"],
  mnemonics: [
    {name:"Massive haemothorax definition", text:"Massive = >1500mL acute drainage OR >200mL/hr × 3 hours = thoracotomy criteria"}
  ],
  overview: {
    definition: "Presence of blood in the pleural space, most commonly from trauma (intercostal vessels, pulmonary parenchyma, great vessels) or iatrogenic causes.",
    epidemiology: "Haemothorax in 40% of major chest trauma patients. Massive haemothorax (>1500mL): 3–5% of chest trauma. Delayed haemothorax: presents 2–7 days after trauma.",
    pathophysiology: "Blood in pleural space: from intercostal vessels (most common), pulmonary vessels, intrathoracic great vessels, or aorta. Fibrinolytic activity of pleural mesothelium delays clotting → haemothorax usually unclotted acutely. Retained haemothorax → fibrothorax (trapped lung) or infected (empyema).",
    classification: [
      "Simple haemothorax (<500mL): often self-limiting",
      "Moderate haemothorax (500–1000mL): ICD",
      "Massive haemothorax (>1500mL): emergency",
      "Retained/clotted haemothorax",
      "Traumatic vs non-traumatic (spontaneous — coagulopathy, vascular malformation)"
    ]
  },
  diagnosis: {
    history: [
      "Chest trauma: blunt or penetrating",
      "After thoracic procedures (post-operative)",
      "Anticoagulation or coagulopathy (spontaneous haemothorax)",
      "Breathlessness and chest pain after trauma",
      "Haemodynamic instability (massive)"
    ],
    examination: [
      "Dull to percussion (fluid)",
      "Reduced/absent breath sounds",
      "Haemodynamic instability (massive haemothorax)",
      "Signs of associated pneumothorax (hyper-resonance + dullness = haemopneumothorax)"
    ],
    investigations: [
      {name:"eFAST", role:"Bedside: free pleural fluid; sensitivity 75–90% for haemothorax"},
      {name:"CXR", role:"Opacification of hemithorax; ≥200mL to be visible; supine CXR less sensitive (layering)"},
      {name:"CT chest", role:"Stable patients: confirms haemothorax, quantifies volume, identifies source, associated injuries"},
      {name:"Pleural fluid haematocrit", role:"Haemothorax if pleural fluid haematocrit >50% of peripheral blood haematocrit"}
    ]
  },
  criteria: {
    title: "Thoracotomy Indications for Haemothorax",
    items: [
      {k:">1500mL immediate ICD output", v:"Massive haemothorax — thoracotomy"},
      {k:">200mL/hr × 3 hours", v:"Ongoing arterial haemorrhage — thoracotomy"},
      {k:"Persistent haemodynamic instability", v:"Haemorrhage source in chest — thoracotomy"},
      {k:"Clotted retained haemothorax", v:"VATS within 7–10 days"},
      {k:"VATS-inaccessible retained haemothorax", v:"Open thoracotomy if VATS fails or too late"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Small haemothorax (<500mL): supplemental O₂, monitoring, repeat CXR",
      "Correct coagulopathy if spontaneous haemothorax"
    ],
    medical: [
      "IV resuscitation: blood products (1:1:1 DCR); avoid excess crystalloid",
      "TXA 1g IV within 3h of injury"
    ],
    surgical: [
      {name:"Intercostal drain (ICD)", when:"Haemothorax >500mL or symptomatic; mandatory before mechanical ventilation", notes:"Large-bore 28–32Fr; 4th/5th ICS MAL; cell salvage/auto-transfusion if available; measure initial output; continue monitoring drainage rate"},
      {name:"Thoracotomy", when:"Massive haemothorax criteria met; ongoing haemorrhage; haemodynamic instability from chest", notes:"Posterolateral or anterolateral approach based on injury side; identify and control bleeding source (intercostal vessel ligation, pulmonary tractotomy, lobectomy, vessel repair)"},
      {name:"VATS for retained haemothorax", when:"Undrained clotted haemothorax or retained haemothorax >7 days — prevents fibrothorax", notes:"Within 7–10 days of injury: best results; evacuate clot, deloculate, ensure lung re-expansion; converts to open if bleeding or dense adhesions"},
      {name:"Pulmonary tractotomy", when:"Through-and-through lung injury with haemorrhage", notes:"Staple across injury tract parallel to vessels and bronchi; controls haemorrhage from deep parenchymal injuries without lobectomy"},
      {name:"Intercostal vessel ligation", when:"Persistent haemothorax from intercostal vessel", notes:"Ligate both ends of vessel (proximal and distal to perforation — both ends bleed due to collateral flow)"}
    ]
  },
  technique: {
    title: "VATS Evacuation of Retained Haemothorax",
    prep: [
      "Double-lumen ET tube; lateral decubitus",
      "3–4 ports; camera + working ports"
    ],
    steps: [
      {n:1, t:"Pleural space assessment", d:"Evacuate liquid blood with suction; assess clot burden"},
      {n:2, t:"Clot removal", d:"Use graspers, suction, irrigation to break up and remove organised clot; avoid tearing lung or diaphragm"},
      {n:3, t:"Decortication", d:"If fibrin peel present: remove from visceral pleura to allow lung re-expansion"},
      {n:4, t:"Haemostasis", d:"Identify any ongoing bleeding source; ligate or cauterise"},
      {n:5, t:"Lung expansion", d:"Confirm lung fills pleural space with sustained inflation pressure; no residual space"},
      {n:6, t:"Drain placement", d:"28–32Fr ICD; allow post-op drainage"}
    ],
    pearls: [
      "VATS for retained haemothorax best within 10 days — after 3–4 weeks, clot organises into inoperable fibrothorax",
      "Fibrothorax prevention: early drainage + complete evacuation + lung re-expansion",
      "Auto-transfusion (cell salvage): collect chest drain output into cell saver if available — re-infuse washed red cells"
    ]
  },
  guidelines: [
    {src:"EAST Practice Management Guidelines: Haemothorax"},
    {src:"BTS Guidelines 2010: Intercostal chest drain insertion"},
    {src:"ATLS 10th Edition: Chest trauma — massive haemothorax"}
  ],
  pearls: [
    "Intercostal vessels bleed from BOTH proximal and distal ends — ligate BOTH for haemostasis",
    "Delayed haemothorax: 2–7 days post-trauma; rib fragment erodes vessel; always monitor trauma patients serially",
    "Fibrothorax: organised haemothorax (untreated) → trapped lung → reduced lung function; open decortication required"
  ],
  mistakes: [
    "Small ICD for haemothorax — 16–20Fr blocks with clot; use 28–32Fr",
    "Not measuring initial ICD output for massive haemothorax — miss indication for thoracotomy",
    "Delaying VATS for retained haemothorax — organised fibrothorax after 3–4 weeks requires morbid open decortication"
  ]
},
{
  id: "mesothelioma",
  dept: "thoracic",
  name: "Mesothelioma",
  latin: "Mesothelioma pleurae",
  organ: "Pleura",
  severity: "high",
  tags: ["oncology","asbestos","pleura","thoracic"],
  hero: "Aggressive malignancy of pleural mesothelial cells, invariably linked to asbestos exposure. Median survival 12–18 months. Platinum + pemetrexed ± bevacizumab/immunotherapy is standard systemic therapy. Surgery (EPP or P/D) in selected fit patients.",
  keypoints: [
    "Asbestos exposure in 80%: latent period 20–50 years",
    "Epithelioid histotype: best prognosis; sarcomatoid: worst",
    "CT-guided pleural biopsy via VATS: diagnostic; BAP1/MTAP immunohistochemistry",
    "Talc pleurodesis: palliative — controls effusion in >85%",
    "Immune checkpoint inhibitors (nivolumab + ipilimumab): first-line systemic therapy (CheckMate743)"
  ],
  differentials: ["Malignant pleural effusion from lung cancer/breast cancer","Benign asbestos-related pleural disease","Pleural fibrous tumour","Adenocarcinoma of lung with pleural involvement"],
  mnemonics: [
    {name:"Mesothelioma 3 histotypes", text:"Epithelioid (50%) best prognosis; Biphasic (35%) intermediate; Sarcomatoid (15%) worst — EPB = Excellent → Poor → Bad"}
  ],
  overview: {
    definition: "Malignant tumour arising from the pleural mesothelial cells, associated with asbestos fibre exposure, presenting with progressive pleural effusion and encasement of the lung.",
    epidemiology: "2,500 cases/year UK (peak from 1990s asbestos use). F:M = 1:5. Median diagnosis age 70–75 yrs. Median survival 12–18 months. Latent period 20–50 years from exposure.",
    pathophysiology: "Crocidolite (blue asbestos) most carcinogenic fibre type. Fibres impacted in pleura → reactive oxygen species → DNA damage → p16/CDKN2A, NF2, BAP1 mutations → malignant transformation. Tumour grows as sheets encasing lung (rind).",
    classification: [
      "Epithelioid (50%): glandular pattern; best prognosis (MST 18–24 months)",
      "Sarcomatoid (15%): spindle cells; worst prognosis (MST 6–8 months)",
      "Biphasic/mixed (35%): intermediate prognosis",
      "TNM staging: T1–T4; N0–N2; M0–M1"
    ]
  },
  diagnosis: {
    history: [
      "Occupational asbestos exposure (shipbuilding, construction, insulation, naval workers): latent 20–50 years",
      "Progressive breathlessness (pleural effusion)",
      "Chest wall pain (parietal pleural infiltration)",
      "Constitutional symptoms: weight loss, fatigue",
      "Rarely: peritoneal mesothelioma — abdominal pain and ascites"
    ],
    examination: [
      "Pleural effusion signs: dullness, reduced breath sounds",
      "Chest wall fixation and reduced chest expansion (tumour encasing)",
      "Clubbing (uncommon)",
      "Weight loss, cachexia"
    ],
    investigations: [
      {name:"CXR", role:"Pleural effusion; pleural thickening; reduced hemithorax volume"},
      {name:"CT chest/abdomen/pelvis", role:"Circumferential pleural thickening; nodular pleural disease; encasement; lymphadenopathy; peritoneal involvement"},
      {name:"VATS pleural biopsy", role:"Gold standard diagnostic; obtains adequate tissue for histology + IHC (calretinin+, WT1+, CK5/6+, EMA+; TTF-1-, CEA- distinguishes from adenocarcinoma)"},
      {name:"CT-guided pleural biopsy", role:"For patients unfit for VATS; adequate for cytology but less tissue than VATS"},
      {name:"PET-CT", role:"Staging; differentiate active disease from prior plaques; assesses N stage"},
      {name:"Pulmonary function tests", role:"Pre-surgical assessment; predict post-operative reserve"}
    ]
  },
  criteria: {
    title: "IMIG Staging (TNM-based) for Mesothelioma",
    items: [
      {k:"Stage I", v:"T1N0M0: localised ipsilateral pleural disease only"},
      {k:"Stage II", v:"T2N0M0: involving ipsilateral lung, diaphragm, or pericardium"},
      {k:"Stage III", v:"T3N0M0 or T1–3N1–2M0: locally advanced or nodal involvement"},
      {k:"Stage IV", v:"T4 or M1: unresectable local invasion or distant metastases"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "All mesothelioma: specialist MDT review",
      "Palliative care integration from diagnosis",
      "Surveillance CT 3-monthly for monitoring treatment response"
    ],
    medical: [
      "First-line: nivolumab + ipilimumab (CheckMate743) — improved OS vs chemotherapy (18.1 vs 14.1 months)",
      "Alternative first-line: cisplatin + pemetrexed ± bevacizumab (Mesothelioma Avastin Cisplatin Pemetrexed Study — MAPS)",
      "Folic acid + B12 supplementation with pemetrexed — reduces haematological toxicity",
      "Radiotherapy: prophylactic tract irradiation (prevent port-site metastases after pleural biopsy in some protocols)"
    ],
    surgical: [
      {name:"Talc pleurodesis", when:"Recurrent symptomatic pleural effusion in non-surgical candidates; first-line palliative procedure", notes:"Via VATS or bedside talc slurry via ICD; >85% success for effusion control; most important palliative surgical procedure"},
      {name:"Indwelling pleural catheter (IPC)", when:"Trapped lung (non-expandable) where pleurodesis will fail; repeated drainage at home", notes:"Tunnelled silicone catheter; outpatient drainage 2–3 × weekly; auto-pleurodesis in 50% over time"},
      {name:"Extrapleural pneumonectomy (EPP)", when:"Selected epithelioid stage I–II; young; fit; multimodality approach (induction chemo + EPP + hemithoracic RT); specialist centre only", notes:"Removes entire lung + parietal pleura + ipsilateral diaphragm + pericardium; very high morbidity (40–50%) and mortality (3–5%); OS benefit vs non-surgical controversial"},
      {name:"Pleurectomy/decortication (P/D)", when:"Lung-sparing surgery; selected epithelioid; better functional reserve than EPP; may improve quality of life and local control", notes:"Remove parietal and visceral pleura without pneumonectomy; lower morbidity; not curative"}
    ]
  },
  technique: {
    title: "VATS Pleural Biopsy + Talc Pleurodesis",
    prep: [
      "GA; double-lumen ET tube for lung deflation",
      "Lateral decubitus; 3 ports"
    ],
    steps: [
      {n:1, t:"Drainage", d:"Drain all pleural fluid; send for cytology and protein/LDH/pH"},
      {n:2, t:"Pleural assessment", d:"Inspect entire pleural cavity; identify distribution of tumour (localised vs diffuse rind)"},
      {n:3, t:"Biopsies", d:"Multiple full-thickness pleural biopsies from suspicious areas (minimum 6 sites); include diaphragmatic, mediastinal, and lateral pleura"},
      {n:4, t:"Lung re-expansion", d:"Confirm lung can expand (free pleural space = pleurodesis will work)"},
      {n:5, t:"Talc poudrage", d:"Atomise 4g sterile talc via insufflator over entire pleural surface; thorough coating required"},
      {n:6, t:"ICD and closure", d:"28Fr ICD in dependent position; close ports; CXR post-op; drain until <150mL/day"}
    ],
    pearls: [
      "Trapped lung assessment: if lung does not expand → pleurodesis futile → IPC instead",
      "Port site seeding: consider low-dose prophylactic RT to port/biopsy sites (national guideline controversy — PIT trial: no benefit)",
      "Talc pleurodesis success rate: 85% free-flowing effusion; <50% if trapped lung"
    ]
  },
  guidelines: [
    {src:"BTS Guidelines 2018: Mesothelioma"},
    {src:"ESMO Clinical Practice Guidelines 2020: Mesothelioma"},
    {src:"CheckMate743: Nivolumab + ipilimumab vs chemotherapy in mesothelioma"},
    {src:"MAPS trial: Bevacizumab + cisplatin/pemetrexed in mesothelioma"}
  ],
  pearls: [
    "Asbestos-exposed workers: 20–50 year latency — mesothelioma may present decades after exposure cessation",
    "All newly diagnosed mesothelioma: MDT review at specialist centre; tissue diagnosis mandatory",
    "IPC is preferred over pleurodesis for trapped lung — pleurodesis fails if lung cannot expand"
  ],
  mistakes: [
    "Pleurodesis for trapped lung — fails (no apposition), wasted procedure; use IPC",
    "Not obtaining adequate tissue via VATS — cytology alone insufficient for subtyping; VATS biopsy required",
    "Delaying specialist referral — systemic therapy options more limited with disease progression"
  ]
},
{
  id: "thymoma",
  dept: "thoracic",
  name: "Thymoma / Thymic Tumour",
  latin: "Thymoma",
  organ: "Thymus",
  severity: "moderate",
  tags: ["thoracic","mediastinum","thymus","oncology"],
  hero: "Most common anterior mediastinal tumour in adults. Associated with myasthenia gravis (30%). Complete resection is the only curative treatment. WHO classification guides prognosis.",
  keypoints: [
    "Most common anterior mediastinal mass in adults (40%)",
    "Myasthenia gravis (MG) in 30–50% of thymoma patients; conversely, 15% of MG patients have thymoma",
    "Complete resection (R0): key prognostic factor",
    "WHO classification A/AB/B1/B2/B3/C (thymic carcinoma) — invasiveness increases A→C",
    "Minimally invasive (VATS/robotic) thymectomy: equivalent oncological outcomes to open for stage I–II"
  ],
  differentials: ["Germ cell tumour (teratoma)","Lymphoma (anterior mediastinum)","Thyroid goitre substernal","Parathyroid adenoma","Lipoma","Cyst (thymic, pericardial)"],
  mnemonics: [
    {name:"Anterior mediastinal masses (4 Ts)", text:"Thymoma + Teratoma + Terrible lymphoma + Thyroid (substernal) = 4 Ts of anterior mediastinum"},
    {name:"Thymoma and MG", text:"MG + anterior mediastinal mass → thymoma in 15% of MG patients; 50% thymoma patients have MG — always screen for MG before thymectomy"}
  ],
  overview: {
    definition: "Epithelial tumour of the thymus, arising from the anterior mediastinum, classified by WHO based on the proportion of epithelial cells to lymphocytes and degree of atypia.",
    epidemiology: "0.13/100,000/year. Peak age 50–60 yrs. No gender predilection. 30–50% associated with myasthenia gravis, 5% with red cell aplasia, 3% with hypogammaglobulinaemia.",
    pathophysiology: "Abnormal thymic epithelial cells proliferate; paraneoplastic syndromes from autoimmune sensitisation of thymic lymphocytes (MG: anti-AChR antibodies, anti-MuSK).",
    classification: [
      "WHO Type A: spindle cell; lowest invasiveness",
      "WHO Type AB: mixed",
      "WHO Type B1: lymphocyte-rich; low invasiveness",
      "WHO Type B2: mixed; intermediate",
      "WHO Type B3: predominantly epithelial; locally invasive",
      "WHO Type C: thymic carcinoma (squamous, NEC, etc.) — most aggressive",
      "Masaoka staging: I (intact capsule) → IV (haematogenous metastases)"
    ]
  },
  diagnosis: {
    history: [
      "Often incidental (anterior mediastinal mass on CXR/CT)",
      "Chest pain, cough, breathlessness (compressive symptoms)",
      "SVC syndrome (superior vena cava obstruction: facial plethora, arm oedema)",
      "Myasthenia gravis symptoms: diplopia, ptosis, dysphagia, proximal muscle weakness, respiratory compromise (MG crisis)",
      "Paraneoplastic: pure red cell aplasia, hypogammaglobulinaemia"
    ],
    examination: [
      "Anterior mediastinal mass — may not be palpable",
      "SVC obstruction signs if advanced",
      "Ptosis, diplopia, Tensilon (edrophonium) test positive (MG)"
    ],
    investigations: [
      {name:"CT chest with contrast", role:"Anterior mediastinal mass; encapsulated vs invasive; relationship to great vessels/pericardium; size"},
      {name:"MRI chest", role:"Better assessment of vascular/pericardial invasion; identifies intrathymic cysts"},
      {name:"AChR antibodies / MuSK antibodies", role:"Myasthenia gravis diagnosis — all thymoma patients screened"},
      {name:"Neurological assessment + pulmonary function tests", role:"Pre-op assessment for MG; respiratory reserve in MG patients critical for anaesthesia"},
      {name:"CT-guided biopsy", role:"If lymphoma suspected (requires tissue for classification); thymoma can usually be diagnosed post-resection without biopsy"},
      {name:"PET-CT", role:"Staging for thymic carcinoma; assess invasiveness; distant metastases"}
    ]
  },
  criteria: {
    title: "Masaoka-Koga Staging",
    items: [
      {k:"Stage I", v:"Macroscopically and microscopically encapsulated"},
      {k:"Stage II", v:"Microscopic transcapsular invasion (IIa) or macroscopic pericapsular invasion (IIb)"},
      {k:"Stage III", v:"Macroscopic invasion of pericardium, great vessels, or lung"},
      {k:"Stage IVa", v:"Pleural or pericardial dissemination"},
      {k:"Stage IVb", v:"Lymphogenous or haematogenous metastases"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "All thymomas: complete surgical resection is the primary treatment goal"
    ],
    medical: [
      "Pre-op MG optimisation: pyridostigmine + steroids; plasmapheresis if severe MG pre-surgery",
      "Adjuvant radiotherapy: stage III; Masaoka IIb with positive margins; after incomplete resection",
      "Chemotherapy (cisplatin + doxorubicin + cyclophosphamide): induction for stage III unresectable; adjuvant thymic carcinoma"
    ],
    surgical: [
      {name:"VATS/robotic thymectomy", when:"Stage I–II thymoma; early thymic carcinoma; myasthenia gravis without thymoma (MG thymectomy)", notes:"Unilateral or bilateral VATS; transcervical approach also possible; equivalent oncological outcomes to sternotomy for early disease; lower morbidity"},
      {name:"Trans-sternal thymectomy (median sternotomy)", when:"Larger thymomas (>5cm); stage III; invaded pericardium or great vessels; bilateral VATS not feasible", notes:"Standard open approach; en-bloc removal of thymus + anterior mediastinal fat; phrenic nerve preservation unless invaded"},
      {name:"Extended thymectomy + resection of involved structures", when:"Stage III with pericardial, lung, or great vessel invasion", notes:"Partial pericardectomy ± pulmonary resection ± vascular reconstruction (SVC replacement with Gore-Tex); R0 resection goal"},
      {name:"Thymectomy for MG (without thymoma)", when:"All patients with MG <60 yrs with generalised disease; MGTX trial confirms benefit", notes:"Complete thymectomy including mediastinal fat; VATS or sternotomy; long-term immunosuppression titration post-op"}
    ]
  },
  technique: {
    title: "Trans-sternal Thymectomy via Median Sternotomy",
    prep: [
      "Pre-op MG management: stable neurologically; pyridostigmine held on morning of surgery",
      "ICU plan post-op for MG patients (respiratory monitoring)",
      "Median sternotomy: supine; arms by sides"
    ],
    steps: [
      {n:1, t:"Sternotomy", d:"Midline skin incision; divide sternum with sternal saw; sternal retractor"},
      {n:2, t:"Thymus identification", d:"Thymus in anterior mediastinum anterior to pericardium; identify both lobes; identify phrenic nerves bilaterally"},
      {n:3, t:"Superior dissection", d:"Trace thymus to cervical extensions; divide superior thymic horns at thoracic inlet"},
      {n:4, t:"Inferior dissection", d:"Dissect thymus from pericardium; control thymic veins draining to left innominate vein (staple or ligate)"},
      {n:5, t:"En-bloc removal", d:"Remove thymus + all anterior mediastinal fat in one piece; phrenic nerves preserved unless invaded"},
      {n:6, t:"Pericardial/vascular involvement", d:"If stage III: partial pericardectomy; SVC reconstruction if invaded; vascular surgery assistance"},
      {n:7, t:"Closure", d:"Sternal wires × 6; pericardial/pleural drains; standard chest closure"}
    ],
    pearls: [
      "Complete thymectomy includes ALL anterior mediastinal fat (ectopic thymic tissue in fat) — incomplete removal leaves ectopic tissue",
      "MG post-op: neurology team assessment; ICU for first 24h; watch for MG crisis; cholinesterase inhibitor dose adjustment",
      "Phrenic nerve: if invaded — consult patient on risk; unilateral phrenic palsy tolerated; bilateral = ventilator-dependent"
    ]
  },
  guidelines: [
    {src:"ITMIG (International Thymic Malignancy Interest Group): Thymoma management guidelines"},
    {src:"ESMO Clinical Practice Guidelines 2021: Thymic epithelial tumours"},
    {src:"MGTX trial: Thymectomy for non-thymomatous MG (NEJM 2016)"}
  ],
  pearls: [
    "MG thymectomy: MGTX trial — significant improvement in QST and prednisone requirement; recommend thymectomy for all MG patients <60 yrs",
    "Thymic carcinoma (Type C): aggressive; adjuvant chemoradiation; 5-year survival <40%",
    "Seropositive MG (AChR+): thymectomy benefit established; seronegative (AChR-): less evidence"
  ],
  mistakes: [
    "Not screening thymoma patients for MG pre-op — unrecognised MG causes post-op respiratory crisis",
    "Incomplete thymectomy leaving mediastinal fat — ectopic thymic tissue → recurrent MG or thymoma",
    "Biopsy before resection for suspected thymoma — risks capsule breach and Masaoka upstaging; resect directly"
  ]
},
{
  id: "mediastinal-mass",
  dept: "thoracic",
  name: "Mediastinal Mass",
  latin: "Tumor mediastini",
  organ: "Mediastinum",
  severity: "moderate",
  tags: ["thoracic","mediastinum","diagnosis","oncology"],
  hero: "Location defines differential: anterior (4Ts: thymoma/teratoma/lymphoma/thyroid), middle (lymphoma/cyst/tracheal), posterior (neurogenic tumours). CT + biopsy guide diagnosis.",
  keypoints: [
    "Anterior (4Ts): thymoma, teratoma/GCT, terrible lymphoma, thyroid/parathyroid",
    "Middle: lymphoma, pericardial cyst, bronchogenic cyst, tracheal lesions",
    "Posterior: neurogenic tumours (schwannoma, neurofibroma, PNET), vertebral masses",
    "CT-guided biopsy for lymphoma (requires tissue typing); excision biopsy for suspected thymoma/GCT",
    "Do NOT biopsy anterior mediastinal mass suspected to be thymoma — breach capsule = Masaoka upstaging"
  ],
  differentials: ["Thymoma","Teratoma/Germ cell tumour","Lymphoma","Substernal thyroid","Aortic aneurysm","Bronchogenic cyst","Neurogenic tumour","Oesophageal duplication cyst"],
  mnemonics: [
    {name:"Mediastinal compartments", text:"SALT: Superior (thyroid/thymus) + Anterior (4Ts) + Lower posterior (neurogenic) + Transverse (middle: lymphoma/cysts)"}
  ],
  overview: {
    definition: "Any abnormal tissue in the mediastinum identified on chest imaging, requiring characterisation and tissue diagnosis in most cases.",
    epidemiology: "Mediastinal tumours: ~30–50% in anterior compartment, 20–30% middle, 25–30% posterior. Adults: most common malignant = lymphoma; most common overall = thymoma/GCT. Children: most common = lymphoma, neuroblastoma.",
    pathophysiology: "Depends on histotype. Neurogenic tumours (posterior): from dorsal nerve roots/sympathetic chain. Germ cell tumours (anterior): misplaced primordial germ cells. Lymphoma: mediastinal lymph node involvement.",
    classification: [
      "Anterior compartment: thymoma, GCT (teratoma/seminoma/NSGCT), lymphoma (Hodgkin's), substernal goitre, parathyroid, lipoma",
      "Middle compartment: lymphoma, tracheal tumour, bronchogenic cyst, pericardial cyst, cardiac tumour",
      "Posterior compartment: schwannoma, neurofibroma, ganglioneuroma, neuroblastoma (children), PNET, vertebral tumour, thoracic duct cyst"
    ]
  },
  diagnosis: {
    history: [
      "Many incidental (on CXR/CT for other reasons)",
      "SVC syndrome: anterior large mass — facial oedema, arm swelling, dilated neck veins",
      "Airway compression: stridor, dyspnoea, orthopnoea",
      "Dysphagia: oesophageal compression (posterior)",
      "MG symptoms (thymoma)",
      "B symptoms (lymphoma): fever, night sweats, weight loss",
      "Back pain, radicular symptoms (posterior neurogenic tumours)"
    ],
    examination: [
      "SVC obstruction signs",
      "Tracheal deviation",
      "Vocal cord palsy (hoarseness — mediastinal LN compressing RLN)",
      "Horner's syndrome (posterior tumour)",
      "Pleural effusion signs",
      "Lymphadenopathy (lymphoma)"
    ],
    investigations: [
      {name:"CT chest with contrast", role:"First-line; defines compartment, relationship to structures, enhancement pattern, calcification; CT density (lipid, calcification, enhancement)"},
      {name:"MRI", role:"Superior for posterior compartment (spinal cord involvement); vascular involvement; cystic vs solid; teratoma fat/calcification"},
      {name:"AFP + beta-hCG", role:"Germ cell tumour markers; NSGCT: AFP or hCG elevated; pure seminoma: hCG only; teratoma: both negative"},
      {name:"LDH", role:"Lymphoma marker; elevated with bulky disease"},
      {name:"CT-guided biopsy", role:"Lymphoma (requires adequate tissue for subtyping); sarcoma; carcinoma — DO NOT biopsy suspected thymoma (upstaging risk)"},
      {name:"Mediastinoscopy or VATS biopsy", role:"Definitive tissue diagnosis for mediastinal lymphoma or equivocal anterior masses"},
      {name:"PET-CT", role:"Lymphoma staging; assess treatment response; distinguish GCT from thymoma"}
    ]
  },
  criteria: {
    title: "Biopsy vs Direct Excision by Diagnosis",
    items: [
      {k:"Suspected thymoma", v:"Direct surgical excision (VATS/sternotomy) — do NOT biopsy (risk capsule breach)"},
      {k:"Suspected lymphoma", v:"Core needle biopsy or excision biopsy for histological subtyping — surgery is NOT treatment for lymphoma"},
      {k:"GCT (AFP/hCG elevated)", v:"Chemotherapy (BEP) first if non-seminomatous; surgical excision of residual mass post-chemo"},
      {k:"Posterior neurogenic", v:"Surgical excision via VATS (posterior) ± spinal surgery if extending into foramina (dumbbell tumour)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [],
    medical: [
      "Lymphoma: RCHOP (Hodgkin's ABVD; DLBCL RCHOP); mediastinal RT if bulky",
      "GCT (NSGCT): BEP chemotherapy (bleomycin+etoposide+cisplatin); surgical resection of residual mass",
      "Seminoma: cisplatin-based chemotherapy ± RT"
    ],
    surgical: [
      {name:"VATS or robotic resection", when:"Anterior mediastinal tumours (<6cm, suspected thymoma/GCT, cysts); posterior neurogenic (schwannoma)", notes:"Minimally invasive; adequate for most small anterior masses; VATS posterior approach for schwannoma"},
      {name:"Median sternotomy", when:"Larger thymomas; en-bloc resection required; suspected invasion; cardiac involvement", notes:"Best exposure for anterior mediastinum; en-bloc with adjacent structures"},
      {name:"Clamshell thoracotomy (bilateral anterior)", when:"Very large anterior mediastinal mass requiring bilateral access", notes:"Bilateral anterior thoracotomy + transverse sternotomy"},
      {name:"VATS posterior (or thoracoscopy)", when:"Posterior neurogenic tumours (schwannoma, ganglioneuroma)", notes:"Posterior VATS; spine surgeon for dumbbell tumours extending into foramina"},
      {name:"Resection of residual GCT post-chemotherapy", when:"Residual mass after BEP chemotherapy (NSGCT); distinguishes teratoma (viable, resect) from necrosis/fibrosis", notes:"Bilateral retroperitoneal LN dissection if residual retroperitoneal disease; right posterolateral thoracotomy for thoracic residual"}
    ]
  },
  technique: {
    title: "Assessment Algorithm for Anterior Mediastinal Mass",
    prep: [
      "CT + MRI characterisation first",
      "AFP/bHCG/LDH",
      "Screen for MG (AChR antibodies)"
    ],
    steps: [
      {n:1, t:"AFP/bHCG elevation?", d:"Yes → GCT → BEP chemotherapy first (NSGCT) or direct surgery (seminoma); No → proceed"},
      {n:2, t:"Lymphoma features?", d:"Bilateral/mediastinal only mass + B symptoms + LDH elevated → CT-guided or excision biopsy for subtyping → chemotherapy"},
      {n:3, t:"Thymoma features?", d:"Encapsulated anterior mass + MG symptoms + CT characteristics → surgical resection (VATS or sternotomy) without prior biopsy"},
      {n:4, t:"Substernal thyroid?", d:"Continuity with thyroid + CT features → thyroid scintigraphy → thyroidectomy via cervical approach ± sternotomy"},
      {n:5, t:"Cystic mass?", d:"Bronchogenic or pericardial cyst → VATS excision; dermoid cyst → resection"}
    ],
    pearls: [
      "SVC syndrome from mediastinal mass: systemic steroids may temporarily relieve (lymphoma); urgent stenting or bypass may be needed for vascular compromise",
      "Dumbbell tumour (posterior neurogenic extending into spinal foramina): combined thoracic + spinal surgery in same session",
      "Cystic teratoma: calcification + fat + soft tissue = characteristic CT appearance"
    ]
  },
  guidelines: [
    {src:"ITMIG: Mediastinal staging classification and management"},
    {src:"ESMO: Germ cell tumour guidelines"},
    {src:"BTS/BTOG: Mediastinal staging and biopsy guidelines"}
  ],
  pearls: [
    "Compartment location is the most useful single piece of information for determining differential diagnosis",
    "Do NOT biopsy thymoma — upstages via capsule breach; resect directly",
    "GCT with elevated AFP is always non-seminomatous (NSGCT); pure seminoma never elevates AFP"
  ],
  mistakes: [
    "Biopsy of anterior mediastinal mass assumed to be thymoma — capsule breach changes stage and outcome",
    "Treating lymphoma surgically — surgery is biopsy/staging only; lymphoma is treated with chemotherapy",
    "Resecting posterior mass without spine imaging — dumbbell extension into foramina unrecognised"
  ]
},
{
  id: "lung-abscess",
  dept: "thoracic",
  name: "Lung Abscess",
  latin: "Abscessus pulmonis",
  organ: "Lung",
  severity: "high",
  tags: ["thoracic","infection","abscess","lung"],
  hero: "Cavitating lung infection with pus. Most common: aspiration of oral flora in obtunded patients. Medical management (antibiotics ± bronchoscopic drainage) is first-line; surgery for failed medical treatment.",
  keypoints: [
    "Primary lung abscess: aspiration of oral flora (Bacteroides, Peptostreptococcus, microaerophilic Streptococcus)",
    "Secondary: underlying disease (carcinoma, foreign body, immunosuppression)",
    "CT-guided percutaneous drainage: preferred if peripheral; bronchoscopic drainage for central",
    "Surgery (lobectomy/wedge): failure of medical treatment (>4 weeks), large abscess >6cm, complication (haemoptysis, empyema)",
    "Postural drainage: physiotherapy important adjunct"
  ],
  differentials: ["Cavitating lung cancer","Tuberculosis (cavitary)","Aspergilloma","Cystic bronchiectasis","Hydatid cyst","Wegener's granulomatosis (ANCA)","Pulmonary infarction (cavitation)"],
  mnemonics: [
    {name:"Risk factors for aspiration lung abscess", text:"ABCDE Aspiration: Alcoholism + Bulbar palsy/stroke + Consciousness↓ (GA, seizure) + Dental caries/gingivitis + Elderly/bedridden"}
  ],
  overview: {
    definition: "Focal area of suppurative necrosis of lung parenchyma forming a pus-filled cavity, most commonly from aspiration of oropharyngeal bacteria.",
    epidemiology: "Most common in males, alcoholics, epileptics, patients with neurological swallowing dysfunction. Common sites: posterior segment RUL and superior segment of both lower lobes (aspiration positions).",
    pathophysiology: "Aspiration of oral bacteria → pneumonitis → tissue necrosis → cavity formation. Gram-positive cocci (Staphylococcus aureus) in haematogenous abscess. Polymicrobial in aspiration. Secondary: cavitation of underlying tumour or granuloma.",
    classification: [
      "Primary (aspiration): no underlying pulmonary pathology; anaerobic/mixed organisms",
      "Secondary: underlying disease (carcinoma, foreign body, immunosuppression, pulmonary infarction)",
      "Acute: <6 weeks",
      "Chronic: >6 weeks"
    ]
  },
  diagnosis: {
    history: [
      "Risk factors for aspiration: alcohol, altered consciousness, stroke, bulbar palsy, dental disease",
      "Sub-acute onset: fever, cough, pleuritic chest pain, night sweats, weight loss",
      "Putrid sputum (hallmark of anaerobic infection): foul-smelling cough productive of copious purulent sputum",
      "Haemoptysis (in 15–20%)",
      "Failure to respond to standard pneumonia antibiotics"
    ],
    examination: [
      "Fever, tachycardia, toxic appearance",
      "Localised area of dullness, bronchial breathing, coarse crackles",
      "Clubbing in chronic cases",
      "Putrid halitosis",
      "Poor dental hygiene"
    ],
    investigations: [
      {name:"CXR", role:"Thick-walled cavity with air-fluid level; opacification; pleural effusion/empyema"},
      {name:"CT chest", role:"Defines size, location, wall thickness; relationship to bronchus; pleural involvement; distinguish from tumour cavitation"},
      {name:"Bronchoscopy + BAL", role:"Collect specimens (BAL culture/cytology); exclude tumour or foreign body; allow bronchoscopic drainage of central abscess"},
      {name:"Sputum culture + blood culture (if bacteraemic)", role:"Identify organism; AFB + TB culture; fungi"},
      {name:"CT-guided percutaneous drain", role:"Accessible peripheral abscess; diagnostic + therapeutic drainage"}
    ]
  },
  criteria: {
    title: "Indications for Surgical Management",
    items: [
      {k:"Failure of medical treatment >4–6 weeks", v:"Antibiotic ± drainage failure"},
      {k:"Large abscess >6cm", v:"Less likely to resolve with antibiotics alone"},
      {k:"Massive haemoptysis", v:"Emergency surgical intervention"},
      {k:"Tension lung abscess", v:"Ball-valve mechanism causing compressive physiology"},
      {k:"Empyema formation", v:"Abscess with pleural involvement"},
      {k:"Suspected underlying carcinoma", v:"Resection both diagnostic and therapeutic"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Postural drainage: position patient for dependent drainage (gravity-assisted)",
      "Physiotherapy and percussion",
      "Smoking cessation; optimise nutrition"
    ],
    medical: [
      "Prolonged IV antibiotics (6–8 weeks minimum): co-amoxiclav; or metronidazole + benzylpenicillin; or clindamycin (excellent anaerobic coverage)",
      "Adjust based on BAL/sputum cultures",
      "Bronchoscopy: remove obstructing foreign body; lavage; facilitate drainage of central abscess"
    ],
    surgical: [
      {name:"CT-guided percutaneous drainage", when:"Large accessible peripheral abscess; failed antibiotics alone; patient not fit for surgery", notes:"16–18Fr drain via safe percutaneous route; avoid traversing pleural space if possible — risk of empyema"},
      {name:"Bronchoscopic drainage", when:"Central abscess communicating with bronchus; foreign body removal", notes:"Guided lavage and aspiration via flexible bronchoscopy; can be repeated"},
      {name:"Pulmonary resection (lobectomy/segmentectomy)", when:"Failed medical treatment; large abscess >6cm; haemoptysis; suspected carcinoma; chronic abscess >6 weeks not resolving", notes:"VATS or open; anatomical resection; great care not to spill contaminated abscess contents into pleural cavity — may pack with gauze; double-lumen ET tube protects contralateral lung"}
    ]
  },
  technique: {
    title: "VATS Lobectomy for Chronic Lung Abscess",
    prep: [
      "Pre-op: optimise nutrition; antibiotics to reduce infectious burden",
      "Double-lumen ET tube — critical to protect contralateral lung from spillage",
      "Position: lateral decubitus; VATS ports"
    ],
    steps: [
      {n:1, t:"Adhesiolysis", d:"Abscess often densely adherent to parietal pleura; careful blunt dissection — risk of abscess rupture"},
      {n:2, t:"Vascular control", d:"Divide vessels first (vein-first technique); early hilar control prevents rupture during manipulation"},
      {n:3, t:"Bronchial control", d:"Divide bronchus; complete lobar excision with abscess en-bloc"},
      {n:4, t:"Contamination prevention", d:"If abscess appears about to rupture: pack with gauze; suck out contents; do NOT allow free spillage into pleural cavity"},
      {n:5, t:"Specimen retrieval", d:"Large endobag; remove carefully via extended utility port"},
      {n:6, t:"Lavage and drain", d:"Thorough pleural lavage; drain × 2"}
    ],
    pearls: [
      "Double-lumen tube is mandatory: if abscess ruptures during surgery, contralateral lung protected",
      "Postural drainage pre-op: reduce abscess cavity volume before surgery",
      "Chronic abscess with calcified walls: consider open thoracotomy if VATS inadequate — calcified peel may require formal decortication"
    ]
  },
  guidelines: [
    {src:"BTS Guidelines 2023: Community-acquired pneumonia (including lung abscess)"},
    {src:"ATS/IDSA: Pneumonia and lung abscess management"},
    {src:"NICE: Lung abscess management"}
  ],
  pearls: [
    "Putrid sputum is virtually diagnostic of anaerobic lung infection/abscess — start anaerobic antibiotics immediately",
    "Prolonged antibiotic therapy (≥6 weeks) required — most resolve without surgery",
    "Secondary lung abscess in non-aspiration risk group: suspect malignancy — bronchoscopy + CT always"
  ],
  mistakes: [
    "Short-course antibiotics for lung abscess — relapse nearly certain; minimum 6 weeks treatment",
    "Not protecting contralateral lung with double-lumen tube during resection — aspiration of pus → bilateral pneumonia",
    "Not excluding underlying carcinoma in patients without risk factors for aspiration"
  ]
},
{
  id: "chest-wall-tumour",
  dept: "thoracic",
  name: "Chest Wall Tumour",
  latin: "Tumor parietes thoracis",
  organ: "Chest wall",
  severity: "moderate",
  tags: ["thoracic","oncology","chest-wall","rare"],
  hero: "Primary chest wall tumours are rare. Benign (osteochondroma, fibrous dysplasia) vs malignant (chondrosarcoma, Ewing's sarcoma, synovial sarcoma). Core biopsy + CT/MRI before surgery. En-bloc resection ± reconstruction.",
  keypoints: [
    "60% of chest wall tumours are malignant; 40% benign",
    "Most common malignant: chondrosarcoma (most common primary chest wall malignancy), Ewing's sarcoma (children/young adults), osteosarcoma, MFH/UPS",
    "Most common benign: osteochondroma, chondroma, fibrous dysplasia",
    "Wide en-bloc resection: ≥4cm bony margins; reconstruct chest wall with prosthesis or bioprosthetic mesh",
    "Resect >3 consecutive ribs: rigid prosthesis needed to prevent paradoxical chest wall movement"
  ],
  differentials: ["Metastatic disease to chest wall (lung, breast, kidney most common)","Rib fracture","Costal chondritis","Plasmacytoma","Lymphoma of chest wall","Rib osteomyelitis"],
  mnemonics: [
    {name:"Chest wall malignancy rate", text:"60% malignant (chondrosarcoma > Ewing's > osteosarcoma > MFH); 40% benign (osteochondroma most common benign)"}
  ],
  overview: {
    definition: "Primary neoplasm arising from the bony, cartilaginous, or soft tissue elements of the chest wall, classified as benign or malignant based on histology.",
    epidemiology: "Rare: 1–2% of all tumours. Metastatic disease to chest wall (lung/breast/kidney primary) far more common than primary chest wall tumours. Primary: chondrosarcoma 20%, followed by Ewing's sarcoma 15%, osteosarcoma 10%.",
    pathophysiology: "Chondrosarcoma: from costal cartilage or rib cartilaginous growth plate; slow-growing; locally invasive; haematogenous spread to lung. Ewing's sarcoma: small round blue cells; EWSR1-FLI1 translocation; aggressive; chemosensitive. Osteosarcoma: sclerotic/osteolytic; adolescents.",
    classification: [
      "Benign: osteochondroma, chondroma, fibrous dysplasia, Langerhans histiocytosis, desmoid",
      "Malignant primary: chondrosarcoma, Ewing's sarcoma, osteosarcoma, MFH/UPS, synovial sarcoma",
      "Malignant secondary (metastases): lung, breast, kidney, thyroid"
    ]
  },
  diagnosis: {
    history: [
      "Palpable chest wall mass: painless (benign); painful/growing (malignant)",
      "Chest pain: mass expansion, rib involvement",
      "Growing mass over weeks-months suggests malignancy",
      "B symptoms (fever, weight loss) in Ewing's or lymphoma",
      "Previous cancer history (metastatic disease)"
    ],
    examination: [
      "Palpable firm chest wall mass",
      "Assess fixation to ribs, soft tissue, pleura",
      "Size, consistency (bony vs soft tissue)",
      "Regional lymphadenopathy"
    ],
    investigations: [
      {name:"CT chest with bone windows", role:"Defines cortical destruction, matrix calcification (chondrosarcoma: ring and arc pattern), periosteal reaction (osteosarcoma), Codman's triangle (Ewing's), soft tissue extent"},
      {name:"MRI chest wall", role:"Best soft tissue characterisation; intramedullary extent; neurovascular involvement; soft tissue vs bone"},
      {name:"PET-CT", role:"Staging malignant chest wall tumours; exclude distant metastases; response to neoadjuvant"},
      {name:"CT-guided core biopsy", role:"Essential for histological diagnosis before surgery; plan at surgical site to facilitate en-bloc excision biopsy site"},
      {name:"CT chest", role:"Lung metastases assessment (chondrosarcoma/osteosarcoma)"}
    ]
  },
  criteria: {
    title: "Resection Margins for Malignant Chest Wall Tumours",
    items: [
      {k:"Bony margins", v:"≥4cm from radiological tumour edge (each rib/sternum)"},
      {k:"Soft tissue margins", v:"Adequate surrounding soft tissue/muscle cuff"},
      {k:"≤2 consecutive ribs resected", v:"May not need rigid reconstruction"},
      {k:"≥3 consecutive ribs or posterior chest wall >5cm", v:"Rigid prosthesis needed (methylmethacrylate + polypropylene or Gore-Tex patch)"},
      {k:"Full-thickness chest wall resection", v:"Always requires reconstruction to prevent paradoxical movement"}
    ]
  },
  scoring: [],
  management: {
    conservative: [],
    medical: [
      "Ewing's sarcoma: neoadjuvant chemotherapy (VAC-IE: vincristine/actinomycin/cyclophosphamide alternating with ifosfamide/etoposide) before surgery; adjuvant RT",
      "Osteosarcoma: neoadjuvant cisplatin/doxorubicin + methotrexate; surgery then adjuvant",
      "Chondrosarcoma: chemotherapy-resistant; surgery only"
    ],
    surgical: [
      {name:"En-bloc wide local excision", when:"All primary chest wall malignant tumours; wide margins mandatory", notes:"Remove tumour + ≥4cm bony margin + soft tissue cuff; intercostal muscles, parietal pleura, lung parenchyma if involved; chest wall reconstruction immediately"},
      {name:"Chest wall reconstruction", when:"All full-thickness defects >5cm; anterior chest wall defects; ≥3 ribs resected; sternum", notes:"Biologic/synthetic mesh (Prolene/Gore-Tex) for pleural seal + rigid prosthesis (PTFE/methylmethacrylate) for structural integrity; muscle flap (latissimus dorsi, serratus, pectoralis) for soft tissue coverage"},
      {name:"Sternal resection + reconstruction", when:"Chondrosarcoma or tumour involving sternum", notes:"Partial or total sternectomy; titanium sternal plates or PEEK prosthesis + muscle/skin flap coverage"},
      {name:"Metastasectomy for lung/chest wall metastases", when:"Solitary/oligometastatic disease; controlled primary; good performance status; resectable", notes:"Resect chest wall metastases with 2cm soft tissue margin; adjacent rib may need resection"}
    ]
  },
  technique: {
    title: "Chest Wall Resection and Reconstruction",
    prep: [
      "CT + MRI: measure tumour extent and plan resection margins (draw on CT)",
      "Plastic surgery: plan muscle flap coverage",
      "Custom prosthesis: titanium rib plate system or PEEK cage pre-ordered"
    ],
    steps: [
      {n:1, t:"Skin incision", d:"Wide ellipse encompassing biopsy site + skin paddle for flap if needed"},
      {n:2, t:"Muscle division", d:"Divide muscles in continuity with specimen; preserve flap vasculature if for reconstruction"},
      {n:3, t:"Rib resection", d:"Divide ribs ≥4cm from tumour; periosteal elevator + rib cutter; haemostasis of intercostal vessels"},
      {n:4, t:"Pleural entry and lung assessment", d:"Parietal pleura divided; assess lung involvement; pulmonary resection (wedge/lobectomy) if invaded"},
      {n:5, t:"Mesh reconstruction", d:"Polypropylene mesh cut to defect + 2cm overlap; suture to rib/sternal edges; taut to prevent paradox"},
      {n:6, t:"Rigid prosthesis (if ≥3 ribs)", d:"Methylmethacrylate moulded behind mesh or titanium plate system; fixed to remaining ribs with screws"},
      {n:7, t:"Soft tissue closure", d:"Advance local muscle flap over mesh; drain; skin closure; ± free flap for large defects"}
    ],
    pearls: [
      "Biopsy site inclusion in resection specimen: mandatory — seeded biopsy tract not excised = R1 margin",
      "Chondrosarcoma: chemotherapy and RT resistant — surgery alone is the treatment; wide margins essential",
      "Posterior chest wall defects (scapula coverage): less symptomatic — smaller defects may not need rigid reconstruction"
    ]
  },
  guidelines: [
    {src:"ESMO: Soft tissue sarcoma guidelines — chest wall section"},
    {src:"ESTS: European Society of Thoracic Surgeons — chest wall resection guidelines"},
    {src:"NCCN: Bone cancer — Ewing's and chondrosarcoma"}
  ],
  pearls: [
    "Chondrosarcoma: low-grade, slow-growing, but chemotherapy-RESISTANT — surgery with wide margins is the only treatment",
    "Ewing's sarcoma: highly chemosensitive — always neoadjuvant before surgery; assesses response",
    "Titanium implants for sternal/chest wall reconstruction: CAD-designed patient-specific prostheses increasingly available"
  ],
  mistakes: [
    "Not including biopsy site in en-bloc resection — seeded tract = microscopically positive margin",
    "Inadequate margins for chondrosarcoma — local recurrence is the main cause of death",
    "Not planning chest wall reconstruction before surgery — insufficient flap tissue available post-resection"
  ]
},
{
  id: "pectus",
  dept: "thoracic",
  name: "Pectus Excavatum / Carinatum",
  latin: "Pectus excavatum / carinatum",
  organ: "Chest wall",
  severity: "low",
  tags: ["thoracic","chest-wall","congenital","cosmetic"],
  hero: "Congenital chest wall deformity. Pectus excavatum (funnel chest — most common) causes cardiopulmonary compression. Surgical repair: Nuss procedure (minimally invasive) or Ravitch repair.",
  keypoints: [
    "Pectus excavatum: anterior chest wall depression; M:F = 3:1; 1 in 400 births",
    "Haller index (CT): sternum-to-vertebra distance / transverse diameter; >3.25 = surgical indication",
    "Nuss procedure: retrosternal metal bar insertion without bone/cartilage resection; minimally invasive; 90% success",
    "Ravitch repair: open subchondral cartilage resection + sternal osteotomy; rarely used now",
    "Pectus carinatum (pigeon chest): bracing orthosis preferred; surgery if brace fails"
  ],
  differentials: ["Scoliosis-related chest deformity","Marfan syndrome chest deformity","Osteogenesis imperfecta","Costochondritis","Poland syndrome"],
  mnemonics: [
    {name:"Nuss procedure principle", text:"Retrosternal bar inserted from lateral thoracotomy → passed posterior to sternum → flipped to push sternum anteriorly → held in place by bilateral plate fixators"}
  ],
  overview: {
    definition: "Pectus excavatum: congenital anterior chest wall depression from abnormal growth of the lower costal cartilages causing posterior displacement of the sternum. Pectus carinatum: anterior protrusion.",
    epidemiology: "Pectus excavatum: most common congenital chest deformity (1/400 births); M:F = 3:1; often worsens during puberty growth spurt. Associated with Marfan syndrome, homocystinuria, EDS.",
    pathophysiology: "Abnormal chondrocyte proliferation and growth of costal cartilages → sternal displacement. Posterior displacement compresses heart (right ventricular outflow tract obstruction) and lungs (reduced FVC). Psychological impact significant.",
    classification: [
      "Pectus excavatum: symmetric vs asymmetric; localised vs diffuse",
      "Haller index: >3.25 = moderate; >3.5 = severe",
      "Pectus carinatum: chondrogladiolar (lower sternum) vs chondromanubrial (upper sternum)"
    ]
  },
  diagnosis: {
    history: [
      "Visible chest deformity noted at birth or worsening at puberty",
      "Exertional dyspnoea, exercise intolerance (cardiopulmonary compression)",
      "Palpitations (cardiac compression)",
      "Psychological impact: body image, social isolation",
      "Connective tissue features (Marfan syndrome: tall, long limbs, arachnodactyly)"
    ],
    examination: [
      "Visible sternal depression (excavatum) or protrusion (carinatum)",
      "Asymmetric deformity often present",
      "Assess cardiac shift (compressed heart displaced to left)",
      "Auscultate: murmurs from cardiac compression (MVP in 15–20% pectus)"
    ],
    investigations: [
      {name:"CT chest (Haller index)", role:"Measure Haller index (transverse thoracic diameter / AP sternal-vertebral distance); >3.25 = moderate; operative planning"},
      {name:"ECHO", role:"Assess cardiac compression, RVOTO, MVP; ejection fraction"},
      {name:"Pulmonary function tests", role:"FVC, FEV₁; restrictive pattern in severe deformity"},
      {name:"ECG", role:"Right bundle branch block, right axis deviation from cardiac compression"},
      {name:"Genetic review", role:"If features of Marfan syndrome — echocardiography, ophthalmology, FBN1 mutation testing"}
    ]
  },
  criteria: {
    title: "Surgical Indications for Pectus Excavatum",
    items: [
      {k:"Haller index ≥3.25", v:"Moderate-severe deformity"},
      {k:"Cardiopulmonary compromise", v:"Objective: PFT (FVC/FEV₁ <80% predicted), ECHO (RVOTO/MVP), exercise testing"},
      {k:"Psychological distress", v:"Significant body image issues affecting quality of life"},
      {k:"Progression during puberty", v:"Active deformity worsening"},
      {k:"Optimal age for Nuss", v:"9–18 years (cartilage flexible); adult Nuss possible but requires longer bar and higher complication rate"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Pectus carinatum: dynamic compression orthosis brace (18–24 hours/day × 1–2 years); success rate 80–90% in adolescents",
      "Physiotherapy: breathing exercises; postural training; improves symptoms but does not correct deformity",
      "Pectus excavatum vacuum bell: suction device worn ≥30 min/day; modest correction in mild cases"
    ],
    medical: [],
    surgical: [
      {name:"Nuss procedure (MIRPE — Minimally Invasive Repair of Pectus Excavatum)", when:"Standard surgical treatment for pectus excavatum; Haller index ≥3.25 with symptoms/criteria", notes:"One or two bilateral retrosternal curved titanium bars inserted via bilateral lateral thoracic incisions under thoracoscopic guidance; bar passed posterior to sternum; flipped to push sternum anteriorly; plates secured to ribs bilaterally; bar removed after 2–3 years (2nd GA required)"},
      {name:"Ravitch procedure", when:"Pectus carinatum (brace failure); complex asymmetric deformity; older patients with calcified cartilage unsuitable for Nuss", notes:"Open subchondral resection of cartilage + sternal osteotomy + sternal repositioning with struts; longer recovery; less cosmetic than Nuss"},
      {name:"Pectus carinatum surgical repair", when:"Failed orthotic bracing; older patient; very severe deformity", notes:"Modified Ravitch: resect abnormally long cartilages; sternal repositioning; or MITE (minimally invasive technique)"}
    ]
  },
  technique: {
    title: "Nuss Procedure (MIRPE)",
    prep: [
      "GA; supine",
      "Pre-bent stainless steel/titanium bar to specific chest curvature",
      "Right lateral thoracoscopy port for visual guidance"
    ],
    steps: [
      {n:1, t:"Bilateral lateral incisions", d:"3–4cm incisions bilaterally at lateral chest wall at level of deepest depression"},
      {n:2, t:"Thoracoscope insertion", d:"Right lateral 5mm port; visualise mediastinum and anterior chest wall"},
      {n:3, t:"Introducer passage", d:"Pectus introducer (Lorenz forceps) inserted from right incision; passed anterior to pericardium and posterior to sternum; brought out left incision — under thoracoscopic guidance"},
      {n:4, t:"Bar insertion", d:"Tie umbilical tape to forceps; pull pre-bent bar from right to left (concave side forward)"},
      {n:5, t:"Bar flip", d:"Rotate bar 180° to flip convex side anteriorly — immediately pushes sternum outward; dramatic appearance correction"},
      {n:6, t:"Stabiliser plates", d:"Bilateral metal stabiliser plates affixed over bar at lateral chest wall to prevent rotation; fix to ribs with sutures/wire"},
      {n:7, t:"Closure", d:"Close incisions; post-op CXR; epidural analgesia for pain management; restrict activity × 6 weeks"}
    ],
    pearls: [
      "Thoracoscopic guidance: mandatory for safe retrosternal passage — prevents cardiac injury",
      "Pain management: thoracic epidural for 3–4 days post-op; Nuss is painful due to chest wall tension",
      "Bar removal: 2–3 years later (day-case procedure under GA); cartilage has remodelled by this time"
    ]
  },
  guidelines: [
    {src:"ESTS: Pectus excavatum management guidelines"},
    {src:"Nuss et al.: Original Nuss procedure description and long-term outcomes"},
    {src:"CHWA (Children's Hospital of Wisconsin): Pectus outcomes data"}
  ],
  pearls: [
    "Nuss procedure: immediate cosmetic correction; 90% patient satisfaction; 2-year bar retention required",
    "Optimal age: 9–15 years — chest wall more pliable; adults can have Nuss but longer bar, more analgesia needed",
    "Marfan syndrome with pectus: aortic root screening mandatory before surgery"
  ],
  mistakes: [
    "Not using thoracoscopic guidance for bar passage — cardiac perforation risk",
    "Bar inserted without lateral stabiliser plates — bar rotation causes deformity recurrence",
    "Carinatum treated with Nuss — Nuss is for excavatum only; carinatum needs orthosis or Ravitch"
  ]
},
{
  id: "lung-carcinoid",
  dept: "thoracic",
  name: "Pulmonary Carcinoid",
  latin: "Tumor carcinoides pulmonis",
  organ: "Lung",
  severity: "moderate",
  tags: ["thoracic","neuroendocrine","lung","rare"],
  hero: "Low-grade neuroendocrine tumour of the lung. Typical carcinoid (TC): 85%, excellent prognosis. Atypical carcinoid (AC): 15%, intermediate prognosis. Surgical resection is curative for most patients.",
  keypoints: [
    "Typical carcinoid (TC): <2 mitoses/2mm², no necrosis; 10-year survival >90%",
    "Atypical carcinoid (AC): 2–10 mitoses/2mm² OR necrosis; 10-year survival 50–70%",
    "Often presents with recurrent haemoptysis, recurrent pneumonia (central), or incidental peripheral nodule",
    "Octreotide scan (68Ga-DOTATATE PET): high sensitivity for somatostatin receptor expression",
    "Lobectomy preferred for central lesions; sleeve resection/segmentectomy for peripheral to preserve lung tissue"
  ],
  differentials: ["Non-small cell lung cancer","Small cell lung cancer","Carcinoid tumour of GI tract","Atypical carcinoid (LCNEC)","Bronchial hamartoma","Metastatic carcinoid"],
  mnemonics: [
    {name:"TC vs AC", text:"TC: Typical = <2 mitoses/2mm² + No necrosis = excellent prognosis; AC: Atypical = 2–10 mitoses OR necrosis = worse prognosis; LCNEC and SCLC are high-grade"}
  ],
  overview: {
    definition: "Well-differentiated neuroendocrine neoplasm of the bronchial epithelium, classified as typical (TC) or atypical (AC) carcinoid based on mitotic rate and necrosis.",
    epidemiology: "1–2% of all lung tumours. Mean age 55 yrs (TC younger than AC). F:M = 1:1. Central (TC) vs peripheral (AC). Carcinoid syndrome rare with pulmonary carcinoid (<5%).",
    pathophysiology: "Arise from Kulchitsky (neuroendocrine) cells in bronchial epithelium. Express somatostatin receptors (68Ga-DOTATATE positive). Local invasion, lymph node spread, and distant metastases rare in TC; more common in AC.",
    classification: [
      "Typical carcinoid (TC): Grade 1; <2 mitoses/2mm²; no necrosis",
      "Atypical carcinoid (AC): Grade 2; 2–10 mitoses/2mm² OR focal necrosis",
      "Large-cell neuroendocrine carcinoma (LCNEC): Grade 3 (distinct, separate entity)",
      "SCLC: Grade 3 (distinct)"
    ]
  },
  diagnosis: {
    history: [
      "Central TC: recurrent haemoptysis, post-obstructive pneumonia, chronic cough",
      "Peripheral TC/AC: incidental finding on CXR/CT",
      "Carcinoid syndrome (rare): flushing, diarrhoea, wheeze (usually from liver metastases — uncommon with pulmonary primary)",
      "Cushing syndrome: ACTH secretion (ectopic ACTH from AC) — 3% of cases"
    ],
    examination: [
      "Normal or reduced breath sounds (post-obstructive atelectasis)",
      "Wheeze (endobronchial tumour)",
      "Flushing (carcinoid syndrome — rare)"
    ],
    investigations: [
      {name:"CT chest (with IV contrast)", role:"Centrally enhancing well-defined mass (high vascularity); peripheral nodule; calcification in 25%"},
      {name:"68Ga-DOTATATE PET-CT", role:"SSR scintigraphy: high sensitivity for TC/AC; staging; detect metastases; monitor post-treatment"},
      {name:"Bronchoscopy ± biopsy", role:"Central tumours: visualise (pink, vascular, endobronchial mass); biopsy (risk of haemorrhage — have suction and adrenaline ready); histology + IHC (chromogranin+, synaptophysin+, Ki-67 <5%)"},
      {name:"Serum chromogranin A, 24h urine 5-HIAA", role:"Functional marker; elevated in carcinoid syndrome (5-HIAA) and aggressive carcinoids"},
      {name:"CT abdomen/pelvis", role:"Staging — liver metastases, lymph nodes"}
    ]
  },
  criteria: {
    title: "WHO Classification of Pulmonary NETs",
    items: [
      {k:"Typical carcinoid (TC)", v:"<2 mitoses/2mm² AND no necrosis; Ki-67 <5%"},
      {k:"Atypical carcinoid (AC)", v:"2–10 mitoses/2mm² OR focal necrosis; Ki-67 5–20%"},
      {k:"LCNEC", v:">10 mitoses/2mm² + neuroendocrine morphology/IHC; Ki-67 >40%"},
      {k:"SCLC", v:">10 mitoses/2mm² + SCLC morphology; Ki-67 >50–80%"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Small peripheral TC (<1cm): can observe in elderly/poor surgical candidates; very slow growth",
      "Post-operative surveillance: CT 6-monthly × 2 years then annual × 5 years for AC; less intensive for TC"
    ],
    medical: [
      "Octreotide LAR (somatostatin analogue): for carcinoid syndrome (symptom control); antiproliferative effect in metastatic disease",
      "Everolimus + octreotide: for progressive metastatic carcinoid (RADIANT-4 trial — improved PFS)",
      "Chemotherapy (streptozocin/doxorubicin): limited activity in typical carcinoid; more in atypical/LCNEC",
      "PRRT (177Lu-DOTATATE): SSTR2-expressing metastatic carcinoid — improved PFS (NETTER-1 trial)"
    ],
    surgical: [
      {name:"Lobectomy + systematic mediastinal lymph node dissection", when:"Standard for most pulmonary carcinoids; central TC/AC; adequate pulmonary reserve", notes:"MLND essential for staging and oncological clearance; even TC can have nodal involvement (12–15%)"},
      {name:"Sleeve lobectomy", when:"Central endobronchial TC/AC; preserves additional lung parenchyma vs pneumonectomy", notes:"Bronchial sleeve resection + re-anastomosis; TSV (tumour-sparing vascular resection) if PA involvement"},
      {name:"Anatomical segmentectomy or wedge resection", when:"Peripheral TC <2cm in poor pulmonary reserve; carefully selected", notes:"Less lymph node dissection — MLND still required for staging"},
      {name:"Endobronchial resection (bronchoscopic)", when:"Very selected central TC: pedunculated lesion; high surgical risk; palliative airway clearance", notes:"Nd:YAG laser, cryotherapy, electrocautery; high local recurrence risk — surgical sleeve lobectomy preferred for curative intent"}
    ]
  },
  technique: {
    title: "Sleeve Lobectomy for Central Pulmonary Carcinoid",
    prep: [
      "Double-lumen ET tube; lateral decubitus",
      "Posterolateral thoracotomy (VATS sleeve increasingly performed in specialist centres)"
    ],
    steps: [
      {n:1, t:"Hilar dissection", d:"Expose and control pulmonary artery and veins of affected lobe; divide vessels"},
      {n:2, t:"Bronchial assessment", d:"Identify exact bronchial extent of tumour with frozen section at margins; plan resection level"},
      {n:3, t:"Proximal bronchial division", d:"Divide main bronchus proximal to tumour with ≥5mm clearance (frozen section negative margin)"},
      {n:4, t:"Distal bronchial division", d:"Divide remaining lobar bronchi; ensure all tumour removed"},
      {n:5, t:"Broncho-bronchial anastomosis", d:"Interrupted 3-0 PDS sutures; posterior wall first (continuous), then anterior wall interrupted; ensure tension-free; airway toilet before closure"},
      {n:6, t:"Test anastomosis", d:"Submerge in saline; ventilate; no bubbles = airtight; pericardial flap around anastomosis for reinforcement"},
      {n:7, t:"Chest drain and closure", d:"Standard closure; drain × 2"}
    ],
    pearls: [
      "Bronchoscopic biopsy of central carcinoid: very vascular — have suction, adrenaline, and bronchial blocker ready for haemorrhage",
      "Carcinoid syndrome: somatostatin analogue pre-op (octreotide) to prevent carcinoid crisis during anaesthesia",
      "Ki-67: most important IHC marker distinguishing TC (<5%) from AC (5–20%) from LCNEC (>40%)"
    ]
  },
  guidelines: [
    {src:"ENETS 2022: Bronchopulmonary neuroendocrine neoplasms guidelines"},
    {src:"ESMO 2020: Neuroendocrine neoplasm guidelines — lung section"},
    {src:"WHO Classification of Tumours of the Lung 2021"}
  ],
  pearls: [
    "Pulmonary carcinoid does NOT usually cause carcinoid syndrome unless liver metastases — a useful distinguishing feature",
    "TC has >90% 10-year survival with surgical resection alone — excellent prognosis after R0",
    "DOTATATE PET: superior to OctreoScan; identifies lesions and guides PRRT eligibility"
  ],
  mistakes: [
    "Biopsying highly vascular central carcinoid without haemorrhage preparation — significant bleeding risk",
    "Wedge resection without systematic lymph node dissection — under-stages nodal involvement",
    "Confusing LCNEC with typical carcinoid — LCNEC is high-grade and requires aggressive systemic therapy like SCLC"
  ]
}
];
