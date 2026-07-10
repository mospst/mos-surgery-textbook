// TRAUMA BATCH 1 — IDs: trauma-laparotomy, acs, necrotizing-fasciitis, splenic-trauma, liver-trauma, bowel-trauma, diaphragm-rupture, pelvic-fracture
const TRAUMA_DISEASES_1 = [
{
  id: "trauma-laparotomy",
  dept: "trauma",
  name: "Damage Control Laparotomy",
  latin: "Laparotomia controlus damni",
  organ: "Abdomen",
  severity: "high",
  tags: ["trauma","damage-control","hemorrhage","critical"],
  hero: "Life-saving strategy for exsanguinating abdominal trauma: abbreviated surgery to control hemorrhage and contamination, temporary closure, resuscitation in ICU, planned re-look at 24–48 hours.",
  keypoints: [
    "Damage control surgery (DCS): hemorrhage control + contamination control + temporary closure — NOT definitive repair",
    "Indications: lethal triad (hypothermia <35°C, acidosis pH <7.2, coagulopathy INR >1.5), massive hemorrhage",
    "Packing > anatomical repair in instability — pack all 4 quadrants",
    "REBOA (Resuscitative Endovascular Balloon Occlusion of Aorta) as bridge to laparotomy",
    "Planned relook at 24–48h after ICU resuscitation and correction of coagulopathy"
  ],
  differentials: ["Hemorrhagic shock from pelvic fracture","Ruptured aortic aneurysm","Mesenteric ischemia","Spontaneous intra-abdominal hemorrhage"],
  mnemonics: [
    {name:"Lethal Triad", text:"Hypothermia + Acidosis + Coagulopathy = The Triangle of Death → DCS not definitive repair"},
    {name:"DCS stages", text:"DCS-0: ER resuscitation; DCS-1: OR hemorrhage control; DCS-2: ICU resuscitation; DCS-3: planned relook; DCS-4: definitive repair"}
  ],
  overview: {
    definition: "Staged operative approach to life-threatening abdominal trauma prioritising physiological survival over anatomical perfection, with planned return to theater for definitive repair.",
    epidemiology: "Applies to ~10% of trauma laparotomies. Mortality in exsanguinating abdominal trauma without DCS: >90%. With DCS: 50–70% survival in otherwise fatal injuries.",
    pathophysiology: "Major trauma → hemorrhage → hypothermia → impairs clotting enzymes (temp-dependent) → coagulopathy → ongoing bleeding → metabolic acidosis → worsening coagulopathy → lethal triad. Early DCS breaks this cycle.",
    classification: [
      "DCS-0: ER phase — damage control resuscitation (1:1:1 blood:FFP:platelets, permissive hypotension SBP 80–90mmHg)",
      "DCS-1: Operative phase — abbreviated surgery (30–60 min max)",
      "DCS-2: ICU phase — resuscitation, rewarming, correction of coagulopathy",
      "DCS-3: Planned relook at 24–48h — remove packs, reassess, staged repair",
      "DCS-4: Definitive repair and abdominal closure"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: high-energy blunt trauma (RTA, fall), penetrating injury (stab, gunshot)",
      "Evidence of hemodynamic instability despite initial resuscitation",
      "Massive hemorrhage — transfusion requirement >10 units pRBC in 24h",
      "Known or suspected intra-abdominal injury with shock"
    ],
    examination: [
      "ATLS Primary Survey: Airway, Breathing, Circulation, Disability, Exposure",
      "Circulatory: HR >120, SBP <90, cool peripheries, altered consciousness",
      "Abdominal: distension, bruising (seatbelt sign, Gray Turner, Cullen), evisceration",
      "FAST (Focused Assessment with Sonography in Trauma): free fluid in Morrison's pouch, splenorenal, pelvis, pericardium",
      "Temperature: hypothermia indicates massive transfusion/shock"
    ],
    investigations: [
      {name:"FAST exam", role:"Bedside US — identifies free intra-abdominal fluid; positive FAST + hemodynamic instability = immediate laparotomy"},
      {name:"Extended FAST (eFAST)", role:"Adds bilateral chest views for pneumo/hemothorax"},
      {name:"Trauma CT (pan-scan: head/chest/abdomen/pelvis)", role:"Hemodynamically stable patients ONLY; identifies injuries, grade solid organ injuries, extravasation of contrast"},
      {name:"ABG", role:"pH, lactate, base excess — assess metabolic acidosis; lactate >5 = severe shock"},
      {name:"CBC, coagulation, TEG/ROTEM", role:"Baseline + guides massive transfusion protocol; ROTEM guides fibrinogen/FFP/platelets"},
      {name:"Diagnostic peritoneal aspirate (DPA)", role:"Rapid (<5 min) if FAST equivocal and patient too unstable for CT; >10mL frank blood = laparotomy"},
      {name:"Pelvic X-ray", role:"ATLS primary survey — pelvic ring disruption; pelvic binder application if fracture"}
    ]
  },
  criteria: {
    title: "Damage Control Laparotomy Indications",
    items: [
      {k:"pH <7.2", v:"Severe metabolic acidosis"},
      {k:"Temperature <35°C", v:"Hypothermia impairing coagulation"},
      {k:"INR >1.5 / fibrinogen <1.5", v:"Coagulopathy — hemostatic failure"},
      {k:">10 units pRBC in <24h", v:"Massive transfusion requirement"},
      {k:"Unstable pelvis + abdominal exsanguination", v:"Combined injury, cannot achieve hemostasis"},
      {k:"Surgeon decision", v:"'No time to fix it properly' — abbreviated surgery saves life"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Damage control resuscitation (DCR): concurrent with DCS",
      "1:1:1 ratio: pRBC:FFP:platelets (or whole blood if available)",
      "Tranexamic acid (TXA) 1g IV within 3 hours of injury (CRASH-2 trial) then 1g over 8h",
      "Permissive hypotension: SBP 80–90mmHg until hemorrhage control (NOT in TBI)",
      "Avoid crystalloid — worsens dilutional coagulopathy"
    ],
    medical: [
      "Calcium (CaCl₂ 1g IV): hypocalcemia from massive transfusion — impairs myocardial function and coagulation",
      "Fibrinogen concentrate or cryoprecipitate: fibrinogen <1.5g/L",
      "Vasopressors (noradrenaline): if vasodilatory shock component after volume",
      "Warm all fluids and blood products — rewarming"
    ],
    surgical: [
      {name:"Emergency laparotomy — damage control phase (DCS-1)", when:"Hemodynamic instability + positive FAST, or penetrating abdominal trauma with instability", notes:"Midline incision xiphoid to pubis; manual compression/packing first; identify and control hemorrhage; control GI contamination; temporary closure"},
      {name:"Definitive laparotomy (DCS-4)", when:"After ICU resuscitation: pH >7.35, temp >36°C, coagulopathy corrected", notes:"Remove packs; definitive bowel anastomosis; vascular repair; abdominal wall closure"},
      {name:"REBOA (Zone I or III)", when:"Hemorrhagic shock from abdominal/pelvic injury; bridge to laparotomy", notes:"Zone I (descending thoracic aorta) for abdominal hemorrhage; Zone III (infrarenal) for pelvic hemorrhage"},
      {name:"Open abdomen (OA) management", when:"Cannot close fascia (bowel edema, abdominal compartment syndrome risk, planned relook)", notes:"Bogotá bag, ABThera (negative pressure wound therapy); plan closure within 7–10 days; delayed primary closure preferred"}
    ]
  },
  technique: {
    title: "Damage Control Laparotomy — Step-by-Step",
    prep: [
      "Notify OR team, anesthetics, blood bank — activate massive transfusion protocol",
      "Supine; abdomen prepped from chin to knees (including chest for thoracotomy if needed)",
      "Two large-bore IVs, arterial line, central line — all while prepping"
    ],
    steps: [
      {n:1, t:"Long midline incision", d:"Xiphisternum to pubis; enter peritoneum; immediately control hemorrhage manually"},
      {n:2, t:"Four-quadrant packing", d:"Pack all 4 quadrants with large dry laparotomy packs; apply manual pressure; allow anesthetics to catch up with resuscitation"},
      {n:3, t:"Aortic compression", d:"If exsanguination: manual compression of aorta at diaphragmatic hiatus while packs applied"},
      {n:4, t:"Systematic assessment", d:"Sequentially remove packs quadrant by quadrant; identify source of hemorrhage"},
      {n:5, t:"Hemorrhage control", d:"Hepatic: perihepatic packing; splenic: splenectomy; mesenteric vessel: ligate/repair; major vessel: shunt (Argyle/Javid) — NOT definitive repair in DCS"},
      {n:6, t:"GI contamination control", d:"Staple or ligate perforated bowel; skin staples or TAs; do NOT anastomose in DCS phase"},
      {n:7, t:"Temporary abdominal closure (TAC)", d:"ABThera (NPT) or Bogotá bag; fascia NOT closed; skin NOT closed; suction drains to collect blood/fluid"},
      {n:8, t:"Document injury map", d:"Accurate operative note of all injuries found, controlled, deferred — essential for relook team"}
    ],
    pearls: [
      "Pack first, ask questions later — identify source after hemorrhage controlled, not before",
      "Hepatic veins: if injury near IVC/hepatic veins → Pringle maneuver + packing; NOT extensive hepatic resection in DCS",
      "Relook at 24–48h: re-explore in reverse — packs removed, anastomoses fashioned, closure if possible",
      "Abdominal compartment syndrome (ACS): IAP >20mmHg with organ dysfunction — requires decompressive laparotomy"
    ]
  },
  guidelines: [
    {src:"ATLS 10th Edition: Abdominal and pelvic trauma"},
    {src:"EAST Practice Management Guidelines: Damage control surgery"},
    {src:"WSES Jerusalem Guidelines 2020: Penetrating abdominal trauma"},
    {src:"CRASH-2 trial: Tranexamic acid in hemorrhagic shock"}
  ],
  pearls: [
    "TXA within 3 hours saves lives — do not delay (CRASH-2); after 3h it may worsen outcomes",
    "Hypothermia worsens coagulopathy: warm theater, warm fluids, Bair hugger — temperature management is resuscitation",
    "FAST negative + hemodynamic instability = think pelvic fracture (retroperitoneal bleed) or cardiac tamponade"
  ],
  mistakes: [
    "Crystalloid resuscitation in hemorrhagic shock — worsens dilutional coagulopathy and acidosis",
    "Attempting definitive repair in the presence of the lethal triad — patient will die on the table",
    "Forgetting TXA — given within 3 hours it significantly reduces mortality",
    "Delaying laparotomy to obtain CT in an unstable patient — FAST positive + unstable = go to OR"
  ]
},
{
  id: "acs",
  dept: "trauma",
  name: "Abdominal Compartment Syndrome",
  latin: "Syndroma compartimentale abdominis",
  organ: "Abdomen",
  severity: "high",
  tags: ["trauma","critical","icu","compartment"],
  hero: "Intra-abdominal pressure >20mmHg with new organ dysfunction. Medical decompression first; surgical decompressive laparotomy is definitive treatment.",
  keypoints: [
    "IAP >12mmHg = intra-abdominal hypertension (IAH); IAP >20mmHg + organ dysfunction = ACS",
    "Measure IAP via urinary bladder (transduced via Foley catheter) — gold standard",
    "Primary ACS: abdominal injury/surgery; secondary ACS: massive fluid resuscitation",
    "Graded management: medical (optimize position, NGT, diuresis, neuromuscular blockade) → surgical decompression",
    "Open abdomen after decompression: TAC until swelling resolves, then closure"
  ],
  differentials: ["Acute bowel obstruction","Ileus","Pneumoperitoneum","Intra-abdominal hematoma","Generalized peritonitis"],
  mnemonics: [
    {name:"ACS criteria", text:"IAP >20 + At least ONE new organ failure (renal, respiratory, cardiovascular)"},
    {name:"WSACS grades", text:"I: 12–15 | II: 16–20 | III: 21–25 | IV: >25 mmHg"}
  ],
  overview: {
    definition: "Sustained intra-abdominal pressure >20mmHg associated with new organ dysfunction/failure, most commonly renal, respiratory, and cardiovascular.",
    epidemiology: "IAH in 30–50% ICU patients; ACS in 5–8%. High mortality (50–75%) if unrecognized. Occurs after major abdominal surgery, trauma with massive resuscitation, or packing.",
    pathophysiology: "↑IAP → diaphragm elevation → ↑intrathoracic pressure → ↓venous return → ↓CO; renal vein compression → ↓GFR + oliguria; bowel wall edema → mesenteric ischemia; ↑ICP via ↑intrathoracic pressure.",
    classification: [
      "Primary ACS: direct abdominal pathology (hemoperitoneum, bowel distension, packing)",
      "Secondary ACS: no abdominal injury; massive resuscitation, sepsis, capillary leak",
      "Recurrent ACS: develops after previously treated ACS",
      "WSACS Grades I–IV by IAP level"
    ]
  },
  diagnosis: {
    history: [
      "Recent major abdominal surgery or trauma with massive resuscitation",
      "Massive fluid resuscitation (>10L in 24h)",
      "Damage control packing in situ",
      "Burns (>40% TBSA)",
      "Intra-abdominal hemorrhage or peritonitis"
    ],
    examination: [
      "Tense, rigid abdomen (may be masked by sedation/neuromuscular blockade)",
      "Oliguria/anuria despite adequate filling",
      "Elevated peak airway pressures on ventilator",
      "Hemodynamic instability",
      "New renal failure (rising creatinine, oliguria)"
    ],
    investigations: [
      {name:"Intra-vesical pressure (bladder IAP)", role:"Gold standard: instil 25mL saline, transduce via Foley at end-expiration, supine; correlates with IAP; measure 4-6 hourly in at-risk patients"},
      {name:"ABG", role:"Hypoxia (respiratory failure), metabolic acidosis, elevated lactate"},
      {name:"Creatinine/urine output", role:"Oliguria <0.5mL/kg/hr despite adequate resuscitation is cardinal feature"},
      {name:"CT abdomen", role:"If stable: bowel wall thickening, rounded abdomen, IVC compression, bilateral renal compression"}
    ]
  },
  criteria: {
    title: "WSACS Definitions",
    items: [
      {k:"Normal IAP", v:"5–7 mmHg in critically ill adults"},
      {k:"IAH Grade I–IV", v:"12–15 / 16–20 / 21–25 / >25 mmHg"},
      {k:"ACS", v:"IAP >20mmHg + new organ dysfunction"},
      {k:"Primary ACS", v:"Abdominal or pelvic region injury/surgery"},
      {k:"Secondary ACS", v:"Conditions not originating in abdominal region"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Head of bed ≤20° (Trendelenburg worsens IAP)",
      "Nasogastric + rectal decompression",
      "Judicious diuresis/hemofiltration if volume overloaded",
      "Neuromuscular blockade: reduces abdominal wall tension by 10–15mmHg",
      "Percutaneous drainage: ascites/hematoma contributing to IAP"
    ],
    medical: [
      "Neuromuscular blockade (cisatracurium infusion): temporary 1–2h reduction in IAP; buys time for other measures",
      "CVVH/hemofiltration: removes excess fluid in secondary ACS"
    ],
    surgical: [
      {name:"Decompressive laparotomy", when:"ACS (IAP >20 + organ failure) not responding to medical management within 1–2h", notes:"Midline laparotomy — immediate release of IAP; often dramatic improvement in hemodynamics and ventilator pressures; temporary abdominal closure (TAC)"},
      {name:"Temporary abdominal closure (TAC) post-decompression", when:"After decompressive laparotomy — fascia cannot be closed due to bowel edema", notes:"ABThera negative pressure wound therapy (preferred); Bogotá bag; Wittmann patch for staged closure; aim to close within 7–10 days"},
      {name:"Fascia closure / abdominal wall reconstruction", when:"Edema resolved, organs recovering (usually day 5–10)", notes:"Progressive fascial traction with Wittmann patch; if delayed fascial closure not possible — split skin graft over granulating bowel + delayed component separation"}
    ]
  },
  technique: {
    title: "Bladder Pressure Measurement",
    prep: [
      "Supine position, head of bed flat",
      "Standard urinary catheter in situ"
    ],
    steps: [
      {n:1, t:"Clamp catheter", d:"Clamp drainage tubing distal to bladder instillation port"},
      {n:2, t:"Instil saline", d:"Inject 25mL warm normal saline into bladder via catheter port"},
      {n:3, t:"Transducer zeroing", d:"Zero pressure transducer at iliac crest (mid-axillary line) with patient supine"},
      {n:4, t:"Measure", d:"Read pressure at end-expiration in mmHg; normal 5–7mmHg; IAH ≥12mmHg; ACS threshold ≥20mmHg"},
      {n:5, t:"Frequency", d:"Repeat 4-6 hourly in at-risk ICU patients; continuously if IAH present"}
    ],
    pearls: [
      "IAP measurement is only meaningful if: supine, end-expiration, no active contraction of abdominal wall",
      "Decompressive laparotomy causes immediate drop in peak airway pressure and urine output improvement — confirms diagnosis",
      "Primary fascial closure at first attempt should not be forced — dehiscence and enterocutaneous fistula rates are very high"
    ]
  },
  guidelines: [
    {src:"WSACS (World Society of the Abdominal Compartment Syndrome): Consensus definitions and clinical practice guidelines 2013"},
    {src:"EAST Practice Management Guidelines: ACS"},
    {src:"Kirkpatrick et al. Intensive Care Med 2013"}
  ],
  pearls: [
    "ACS is diagnosed clinically + IAP — do not wait for CT to treat a deteriorating patient",
    "Open abdomen after DCS or decompression: NPT reduces bowel edema and facilitates closure",
    "Fascial closure rates of >80% achievable with early planned re-laparotomy strategy and NPT"
  ],
  mistakes: [
    "Measuring IAP with head of bed elevated — falsely elevated values",
    "Delayed decompression waiting for CT in deteriorating patient — laparotomy is both diagnostic and therapeutic",
    "Forcing primary fascial closure in edematous bowel — catastrophic dehiscence"
  ]
},
{
  id: "necrotising-fasciitis",
  dept: "trauma",
  name: "Necrotizing Fasciitis",
  latin: "Fasciitis necrotisans",
  organ: "Soft tissue",
  severity: "high",
  tags: ["infection","soft-tissue","emergency","critical"],
  hero: "Rapidly progressive life-threatening soft tissue infection with fascial necrosis. Requires immediate aggressive surgical debridement — the only curative treatment. Time to surgery is the key prognostic factor.",
  keypoints: [
    "NF = surgical emergency — debridement within hours of diagnosis, not hours after admission",
    "LRINEC score helps risk-stratify but clinical diagnosis; do NOT delay surgery for imaging",
    "Type I: polymicrobial (most common, perineum/abdomen); Type II: Group A Strep (limbs, young/healthy)",
    "Fournier's gangrene = NF of perineum/scrotum",
    "Mortality 20–40% even with surgery; higher with delay, diabetes, immunosuppression"
  ],
  differentials: ["Severe cellulitis","Gas gangrene (Clostridial myonecrosis)","Pyomyositis","Calciphylaxis","Purpura fulminans","DVT with skin changes"],
  mnemonics: [
    {name:"LRINEC Score", text:"CRP + WBC + Na + Glucose + Creatinine + Hemoglobin — score ≥6 = high risk NF"},
    {name:"NF hallmarks", text:"SNAPP: Severe pain disproportionate to skin appearance + Necrosis + Anesthesia (skin) + Purple/gray discoloration + Palpable crepitus"}
  ],
  overview: {
    definition: "Rapidly spreading necrotizing infection of the superficial fascia and subcutaneous tissue, with sparing of muscle initially. Bacterial toxins cause vascular thrombosis, tissue necrosis, and systemic toxin-mediated shock.",
    epidemiology: "0.4/100,000/year. Mortality 20–40%. Risk factors: diabetes (most common), obesity, immunosuppression, chronic renal failure, alcoholism, malignancy, recent surgery or trauma.",
    pathophysiology: "Bacteria (streptococcal exotoxins, endotoxins from polymicrobial) → vascular thrombosis of small subcutaneous vessels → ischemia → fascial necrosis → gas production (CO₂/H₂) → crepitus. Toxin-mediated shock (TSS from GAS) can develop rapidly.",
    classification: [
      "Type I: Polymicrobial — mixed aerobic/anaerobic (Bacteroides, Clostridium, Enterobacteriaceae, Streptococcus); truncal, perineal; elderly/diabetic",
      "Type II: Monomicrobial — Group A Streptococcus (pyogenes) or MRSA; limbs; young, previously healthy; most virulent",
      "Type III: Vibrio vulnificus — salt water exposure; high mortality",
      "Type IV: Candidal — immunocompromised",
      "Fournier's gangrene: perineal NF — Type I; urological/rectal source"
    ]
  },
  diagnosis: {
    history: [
      "Severe, disproportionate pain at site of infection (pain out of proportion to visible skin changes = cardinal feature)",
      "Skin may look deceptively normal early — erythema, edema, induration",
      "Rapid progression over hours",
      "Diabetes, immunosuppression, recent minor trauma, insect bite, perianal abscess",
      "Fever, malaise, confusion (systemic toxemia)",
      "Late: skin discoloration (gray/purple), bullae, crepitus, skin necrosis, anesthesia"
    ],
    examination: [
      "Systemic: fever, tachycardia, hypotension (septic shock in advanced cases)",
      "Local: erythema with woody induration beyond erythema margins",
      "Crepitus on palpation (gas in tissues) — pathognomonic but present late",
      "Skin discoloration: bluish-gray with hemorrhagic bullae",
      "Anesthesia of overlying skin (cutaneous nerve destruction)",
      "Fascial plane tracking: erythema/edema spreading rapidly in subcutaneous plane"
    ],
    investigations: [
      {name:"LRINEC Score", role:"CRP >150 (4pts) + WBC >15 (1pt), >25 (2pts) + Na <135 (2pts) + Glucose >10 (1pt) + Cr >141 (2pts) + Hb <11 (2pts); ≥6 = high risk (NPV 96%); do NOT rely on low score to exclude NF"},
      {name:"CBC, electrolytes/BUN-Cr, CRP, LFTs, lactate", role:"Leukocytosis, elevated CRP, hyponatremia, elevated creatinine, high lactate — severe sepsis markers"},
      {name:"CT soft tissue (with IV contrast)", role:"Gas tracking along fascial planes (pathognomonic); fascia thickening; abscess; defines extent; sensitivity 90%; do NOT delay surgery for CT if diagnosis clear clinically"},
      {name:"Wound swabs and blood cultures", role:"Before antibiotics; guide targeted therapy; often polymicrobial"},
      {name:"Tissue biopsy at surgery", role:"Send necrotic tissue for histology (thrombosis of vessels, PMN infiltration) and MC&S"}
    ]
  },
  criteria: {
    title: "LRINEC Score",
    items: [
      {k:"CRP (mg/L)", v:"<150=0; ≥150=4 points"},
      {k:"WBC (×10⁹/L)", v:"<15=0; 15–25=1; >25=2 points"},
      {k:"Hemoglobin (g/dL)", v:">13.5=0; 11–13.5=1; <11=2 points"},
      {k:"Sodium (mmol/L)", v:"≥135=0; <135=2 points"},
      {k:"Creatinine (μmol/L)", v:"≤141=0; >141=2 points"},
      {k:"Glucose (mmol/L)", v:"≤10=0; >10=1 point"},
      {k:"Interpretation", v:"Score ≥6 = high risk NF; ≥8 = strongly suggestive (NPV 96%, but do NOT use alone to exclude)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "ICU admission: aggressive resuscitation, broad-spectrum IV antibiotics, organ support",
      "Nutritional support: high protein enteral nutrition — wound healing",
      "Hyperbaric oxygen (HBO): adjunct only; do not delay surgery for HBO; evidence weak"
    ],
    medical: [
      "Broad-spectrum IV antibiotics immediately: piperacillin-tazobactam + clindamycin + vancomycin (covers polymicrobial + GAS + MRSA)",
      "Clindamycin: protein synthesis inhibitor — reduces streptococcal toxin production regardless of penicillin sensitivity",
      "IVIG: adjunct for streptococcal toxic shock syndrome",
      "Vasopressors: noradrenaline for septic shock; vasopressin adjunct"
    ],
    surgical: [
      {name:"Emergency surgical debridement", when:"NF diagnosed or clinically suspected — IMMEDIATE; time is the single most important prognostic factor", notes:"Wide excision of all necrotic tissue until viable bleeding margins; do NOT close; return to theater every 24–48h for re-look + further debridement until wound clean"},
      {name:"Relook debridement (24–48 hourly)", when:"After initial debridement — reassess wound; NF spreads despite initial surgery", notes:"Continue debridements until no further necrotic tissue; culture-directed antibiotic change"},
      {name:"Reconstruction", when:"After 2–3 negative relooks with clean granulating wound", notes:"Split-thickness skin graft (STSG), VAC therapy, flap reconstruction if defect large; colostomy for perineal NF contamination"},
      {name:"Amputation", when:"Limb NF with extensive muscle involvement, uncontrolled sepsis, or irreversible vascular compromise", notes:"Life-saving; primary limb-sparing attempts may prolong sepsis and worsen mortality in extremis"}
    ]
  },
  technique: {
    title: "Emergency Surgical Debridement for Necrotizing Fasciitis",
    prep: [
      "IV access, resuscitation, blood cultures, antibiotics started",
      "GA; supine (or lithotomy for perineal NF)",
      "Full exposure of affected area; mark extent of skin changes"
    ],
    steps: [
      {n:1, t:"Skin incision", d:"Generous incision over area of maximal involvement; extend well beyond visible skin changes"},
      {n:2, t:"Fascial assessment", d:"Fascia is gray, necrotic, non-bleeding — pathognomonic; dissects easily with finger ('dishwater fluid' — thin gray-brown fluid, no true pus)"},
      {n:3, t:"Radical excision", d:"Excise ALL necrotic fascia and subcutaneous tissue; take margins until reaching healthy, bleeding tissue that resists blunt dissection"},
      {n:4, t:"Fascial plane assessment", d:"Explore all fascial planes extending from visible wound — NF spreads far beyond skin changes"},
      {n:5, t:"Tissue samples", d:"Send necrotic tissue for histology and MC&S"},
      {n:6, t:"Open wound management", d:"Leave wound completely open; VAC (negative pressure wound therapy) or moist dressings; mark wound edges with marker pen to track progression"},
      {n:7, t:"Relook at 24–48h", d:"Return to theater; reassess; excise any further necrotic tissue; repeat until wound clean"}
    ],
    pearls: [
      "The fascial plane must be explored — skin may look normal while fascia is necrotic 10cm away",
      "'Dishwater fluid' = hallmark of NF at surgery; send for cultures",
      "Finger test: if finger sweeps easily through subcutaneous tissue with no resistance — NF confirmed",
      "Fournier's: divert fecal stream (loop colostomy) if rectal source or perineal contamination"
    ]
  },
  guidelines: [
    {src:"IDSA 2014: Skin and soft tissue infection guidelines — NF section"},
    {src:"WSES 2018: Management of skin and soft tissue infections"},
    {src:"NICE NG125: Soft tissue infections"}
  ],
  pearls: [
    "The only treatment that saves lives is surgery — antibiotics and ICU alone will not cure NF",
    "Do not be reassured by normal-looking overlying skin early in disease — fascia is necrotic beneath",
    "Fournier's gangrene: suprapubic cystostomy if urethral involvement; colostomy if rectal/anal source"
  ],
  mistakes: [
    "Waiting for culture results or imaging before taking to theater — every hour's delay worsens mortality",
    "Inadequate initial debridement ('conservative' excision) — NF will progress overnight",
    "Not returning for planned relook — further necrosis occurs after initial debridement"
  ]
},
{
  id: "splenic-trauma",
  dept: "trauma",
  name: "Splenic Trauma",
  latin: "Trauma lienis",
  organ: "Spleen",
  severity: "high",
  tags: ["trauma","spleen","hemorrhage","blunt"],
  hero: "Most commonly injured solid organ in blunt abdominal trauma. Non-operative management (NOM) is now standard for hemodynamically stable patients. Preserve the spleen where possible — prevent OPSI.",
  keypoints: [
    "AAST Grade I–V; Grade I–III stable patients → NOM (ICU monitoring + serial examination)",
    "NOM failure rate ~5% in modern series (up to 15–20% needed early splenectomy in older series); indications for intervention: hemodynamic instability, failed NOM, Grade IV–V",
    "Physiology-driven splenectomy: consider for any >Grade II injury with coagulopathy or multiple life-threatening injuries — not grade alone",
    "Transfusion requirement within the first 12 h is an early-intervention trigger (favours angioembolization or splenectomy over continued NOM)",
    "Angioembolization: for blush on CT, Grade III–V — avoids splenectomy",
    "Splenectomy: for hemodynamic instability or failed embolization",
    "Post-splenectomy: OPSI risk — vaccinate against encapsulated organisms (pneumococcus, meningococcus, Hib)"
  ],
  differentials: ["Left renal trauma","Left adrenal hematoma","Pancreatic tail injury","Left lower rib fractures","Mesenteric hematoma"],
  mnemonics: [
    {name:"OPSI organisms", text:"Some People Have Meningitis: S.pneumoniae + Pneumococcus + H.influenzae + N.meningitidis"},
    {name:"AAST Grade", text:"I: subcapsular hematoma <10%; II: hematoma 10–50%; III: >50% or laceration >3cm; IV: laceration involving hilar vessels; V: shattered/devascularized"}
  ],
  overview: {
    definition: "Parenchymal injury to the spleen from blunt or penetrating trauma, ranging from subcapsular hematoma to complete disruption.",
    epidemiology: "Most common solid organ injury in blunt abdominal trauma. RTA most common mechanism. Mortality from isolated splenic injury <1% with NOM, 5–10% requiring splenectomy.",
    pathophysiology: "Blunt force → capsule/parenchyma laceration → hemoperitoneum or subcapsular hematoma. Delayed rupture: subcapsular hematoma expands days to weeks post-injury.",
    classification: [
      "AAST Splenic Injury Scale Grades I–V",
      "Grade I: subcapsular hematoma <10% surface area; laceration <1cm deep",
      "Grade II: hematoma 10–50%; laceration 1–3cm",
      "Grade III: hematoma >50% or expanding; laceration >3cm",
      "Grade IV: laceration involving segmental or hilar vessels",
      "Grade V: shattered spleen or hilar devascularization"
    ]
  },
  diagnosis: {
    history: [
      "Blunt abdominal trauma: RTA (especially seatbelt), fall, direct blow",
      "Left upper quadrant pain, left shoulder tip pain (Kehr's sign — diaphragmatic irritation from hemoperitoneum)",
      "Lower left rib fractures (associated in 30%)",
      "Penetrating trauma: stab or GSW to left flank/abdomen"
    ],
    examination: [
      "ATLS assessment: hemodynamic status (HR, BP, capillary refill)",
      "Abdominal tenderness: LUQ, generalized if hemoperitoneum",
      "FAST: free fluid in LUQ (splenorenal/perisplenic) and pelvis",
      "Left lower rib tenderness (associated fractures)",
      "Signs of delayed rupture: well initially then deteriorates hours/days later"
    ],
    investigations: [
      {name:"FAST exam", role:"Rapid: free fluid LUQ or pelvis; unstable → direct to OR if positive"},
      {name:"CT abdomen with IV contrast (portal venous phase)", role:"Hemodynamically STABLE patients; grades injury; identifies active extravasation (blush), pseudoaneurysm, vascular injury; sensitivity >95%"},
      {name:"Vascular phase CT (arterial)", role:"Identifies active arterial blush — indication for angioembolization"},
      {name:"CBC, coagulation, crossmatch", role:"Baseline hemoglobin; coagulopathy assessment; type and screen/crossmatch"}
    ]
  },
  criteria: {
    title: "AAST Splenic Injury Scale",
    items: [
      {k:"Grade I", v:"Subcapsular hematoma <10% surface area; capsular laceration <1cm parenchymal depth"},
      {k:"Grade II", v:"Subcapsular hematoma 10–50%; intraparenchymal hematoma <5cm; laceration 1–3cm"},
      {k:"Grade III", v:"Subcapsular hematoma >50% or expanding; intraparenchymal hematoma >5cm; laceration >3cm"},
      {k:"Grade IV", v:"Laceration involving segmental or hilar vessels with >25% devascularization"},
      {k:"Grade V", v:"Completely shattered spleen; hilar vascular injury devascularizes entire spleen"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NOM: Grade I–III stable patients (and selected Grade IV–V with angioembolization)",
      "ICU admission for Grade III–V NOM; step-down ward for Grade I–II",
      "Bed rest, serial abdominal examinations, Hb monitoring every 4–6h for 24–48h",
      "Activity restriction 4–6 weeks (Grade I–III); 6–12 weeks (Grade IV–V) before contact sports",
      "NPO initially; advance diet with stability"
    ],
    medical: [
      "Blood transfusion if Hb <70g/L or symptomatic anemia",
      "TXA 1g IV if active hemorrhage (within 3 hours of injury)"
    ],
    surgical: [
      {name:"Angioembolization (proximal or selective)", when:"Grade III–V with active blush on CT; high-grade injury even without blush; NOM failure with stable enough for IR suite", notes:"Proximal embolization (main splenic artery) reduces perfusion pressure while preserving ~70% splenic function via collaterals; selective embolization for specific arterial bleeding"},
      {name:"Splenorrhaphy (splenic repair)", when:"Intraoperative finding of Grade I–II injury; superficial lacerations amenable to repair", notes:"Topical hemostatic agents + argon beam coagulation; pledgeted sutures; mesh wrap (polyglactin mesh wrapping spleen)"},
      {name:"Splenectomy", when:"Hemodynamic instability + positive FAST (immediate); failed NOM; Grade IV–V with hilar injury; failed angioembolization; contaminated field (bowel injury)", notes:"Control splenic hilum first; divide short gastrics; divide splenorenal, splenocolic, splenophrenic ligaments; ligate splenic artery and vein at hilum"},
      {name:"Splenic autotransplantation", when:"Young patients requiring splenectomy WITHOUT enteric/contamination injury — implant parenchymal fragments into an omental pouch", notes:"Aims to preserve partial immunocompetence; benefit debated but low-risk in the clean trauma setting"},
      {name:"Post-splenectomy vaccination", when:"All splenectomy patients — elective: 2 weeks BEFORE surgery; emergent: postoperatively (optimally >14 days post-injury, once acute immunosuppression settles)", notes:"Pneumococcus (Prevnar 13 + Pneumovax 23), Meningococcus ACWY + B, Hemophilus influenzae type b; annual influenza (54% reduced death in asplenics); penicillin V prophylaxis (2 years minimum or lifelong if high-risk); revaccinate pneumococcus every 5–10 years as titres wane"}
    ]
  },
  technique: {
    title: "Emergency Splenectomy",
    prep: [
      "GA, supine, left lateral tilt optional",
      "Midline incision (allows full abdominal exploration) or left subcostal",
      "Blood available; cell salvage if available"
    ],
    steps: [
      {n:1, t:"Incision and access", d:"Midline laparotomy; manually compress splenic hilum immediately if active hemorrhage; pack LUQ"},
      {n:2, t:"Splenic mobilization", d:"Divide splenocolic ligament (inferiorly); divide splenorenal ligament (posterolaterally); divide splenophrenic ligament (superiorly)"},
      {n:3, t:"Short gastric vessels", d:"Divide short gastric vessels between clips/ties — preserve greater curve of stomach"},
      {n:4, t:"Hilum control", d:"Identify splenic artery and vein; double-ligate splenic artery (prevents further hemorrhage); ligate splenic vein separately"},
      {n:5, t:"Specimen removal", d:"Deliver spleen; check for accessory spleens (10% have them; irrelevant in trauma)"},
      {n:6, t:"Hemostasis", d:"Inspect splenic bed; spleen bed bleeding common — pack or cauterise; drain optional"}
    ],
    pearls: [
      "Spleen can deliver 1–2L blood into peritoneum rapidly — compress hilum immediately on entry",
      "Warm ischemia time: spleen can be preserved while completing bowel repairs before finalising splenic management",
      "Tail of pancreas: close to splenic hilum — identify and preserve to avoid post-op pancreatic fistula"
    ]
  },
  guidelines: [
    {src:"EAST 2012: Practice Management Guidelines for Non-operative Management of Blunt Splenic Injury"},
    {src:"WSES Jerusalem Guidelines 2017: Splenic Trauma"},
    {src:"British Committee for Standards in Hematology: Guidelines for OPSI prevention"}
  ],
  pearls: [
    "Delayed splenic rupture: subcapsular hematoma expands → rupture 2–28 days post-injury — warn patients",
    "NOM failure: rising transfusion requirement, hemodynamic deterioration, peritonitis — do not persist",
    "OPSI risk highest in first 2 years post-splenectomy but lifelong (highest in children and after splenectomy for haematologic disease; lowest after trauma/iatrogenic) — patient education critical",
    "OPSI microbiology: S. pneumoniae >50%; also H. influenzae, N. meningitidis, Capnocytophaga canimorsus (dog bites), Babesia/Plasmodium (ticks/malaria); gram-negatives now ~45–50% of asplenic sepsis",
    "Post-splenectomy blood film: Howell-Jolly bodies and siderocytes confirm asplenia/functional hyposplenism",
    "After POD5, WBC >15,000 with platelet:WBC ratio <20 suggests post-splenectomy sepsis; watch for portal/splenic vein thrombosis (highest with splenomegaly + myeloproliferative disease)"
  ],
  mistakes: [
    "NOM in hemodynamically unstable patient — must operate; stability is non-negotiable criterion",
    "Forgetting post-splenectomy vaccinations — OPSI is often fatal if untreated (lifetime risk <1–5%, higher in children)",
    "Pancreatic tail injury during splenectomy — stay close to splenic hilum, not to pancreas"
  ]
},
{
  id: "liver-trauma",
  dept: "trauma",
  name: "Liver Trauma",
  latin: "Trauma hepatis",
  organ: "Liver",
  severity: "high",
  tags: ["trauma","liver","hemorrhage","blunt"],
  hero: "Most common solid organ injury overall. 80% managed non-operatively. High-grade injuries (IV–V) may require angioembolization or damage-control hepatic packing.",
  keypoints: [
    "AAST Grade I–VI; Grade I–III stable → NOM; Grade IV–V → angioembolization or surgery",
    "Perihepatic packing is the primary surgical hemostatic maneuver — not formal hepatic resection",
    "Pringle maneuver: compress hepatoduodenal ligament to control inflow (safe for 60min warm ischemia; release intermittently to reduce hepatocellular injury)",
    "Bleeding that continues DESPITE a Pringle maneuver implies retrohepatic IVC or hepatic vein injury — not portal inflow; plan for packing/atriocaval shunt, not more dissection",
    "NOM failure rate 5–10%; hepatic arterial blush on CT → angioembolization",
    "Bile leak (biloma), hemobilia, hepatic abscess: late complications of high-grade injury"
  ],
  differentials: ["Splenic injury","Right renal trauma","Adrenal hematoma","Biliary tract injury","Hollow viscus injury"],
  mnemonics: [
    {name:"Pringle maneuver", text:"Thumb + index finger compress hepatoduodenal ligament = portal triad control (artery + portal vein + bile duct)"}
  ],
  overview: {
    definition: "Hepatic parenchymal injury from blunt or penetrating trauma, ranging from superficial lacerations to major stellate injuries with hepatic vein/IVC involvement.",
    epidemiology: "Most common solid organ injury in penetrating abdominal trauma; 2nd most common in blunt trauma after spleen. Mortality: Grade I–III <1%; Grade IV–V 15–25%; Grade VI near 100%.",
    pathophysiology: "Blunt: compressive force → parenchymal fracture along lobar/segmental lines, often following hepatic vein pattern. Penetrating: direct laceration. Venous hemorrhage (hepatic veins/IVC) is rapidly exsanguinating.",
    classification: [
      "Grade I: hematoma <10% surface area; laceration <1cm",
      "Grade II: hematoma 10–50%; laceration 1–3cm deep",
      "Grade III: hematoma >50%; laceration >3cm; ruptured hematoma",
      "Grade IV: parenchymal disruption 25–75% of hepatic lobe or 1–3 Couinaud segments",
      "Grade V: >75% of hepatic lobe or major hepatic vein/retrohepatic IVC involvement",
      "Grade VI: hepatic avulsion"
    ]
  },
  diagnosis: {
    history: [
      "Blunt trauma: RTA, fall from height, direct blow to RUQ/lower thorax",
      "RUQ pain, right shoulder tip pain (diaphragmatic irritation)",
      "Lower right rib fractures (associated)",
      "Penetrating: GSW/stab to RUQ, lower thorax"
    ],
    examination: [
      "ATLS: hemodynamic assessment",
      "FAST: free fluid RUQ (Morrison's pouch), perisplenic, pelvis",
      "RUQ tenderness, peritonism",
      "Right lower rib tenderness"
    ],
    investigations: [
      {name:"FAST exam", role:"Free fluid in Morrison's pouch (hepatorenal space); unstable + FAST positive → OR"},
      {name:"CT abdomen IV contrast (portal phase + delayed)", role:"Grades injury; identifies arterial blush (embolization target); portal vein injury; bile duct injury; detects associated injuries"},
      {name:"ERCP/MRCP", role:"Delayed — if bile leak or biloma on follow-up imaging; ERCP allows biliary stenting"},
      {name:"Angiography (CT angiogram or formal)", role:"If arterial blush: confirms and facilitates transcatheter embolization"}
    ]
  },
  criteria: {
    title: "AAST Liver Injury Scale",
    items: [
      {k:"Grade I–II", v:"Hematoma ≤50% surface area; laceration ≤3cm depth → NOM if stable"},
      {k:"Grade III", v:"Laceration >3cm depth; hematoma >50% → NOM ± angioembolization"},
      {k:"Grade IV", v:"25–75% lobar disruption → angioembolization or packing if unstable"},
      {k:"Grade V", v:">75% lobe disruption OR hepatic vein/IVC injury → packing; high mortality"},
      {k:"Grade VI", v:"Hepatic avulsion → near-universally fatal"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NOM: Grade I–III stable; ICU monitoring, serial exam, Hb monitoring",
      "NPO until stable; gradual dietary advancement",
      "Follow-up CT at 48–72h for Grade III–IV",
      "Activity restriction 4–8 weeks; aviation restriction if pneumothorax coexistent"
    ],
    medical: [
      "TXA 1g IV within 3h of injury",
      "Targeted transfusion; FFP for coagulopathy",
      "Antibiotics: prophylactic in penetrating trauma"
    ],
    surgical: [
      {name:"Perihepatic packing (damage control)", when:"Hemodynamic instability; high-grade injury; massive hemorrhage; part of DCS laparotomy", notes:"Pack all 4 surfaces (superior, anterior, posterior, right lateral) with large laparotomy packs; do NOT attempt anatomic resection in DCS; TAC; relook at 24–48h"},
      {name:"Pringle maneuver", when:"Active hepatic parenchymal hemorrhage requiring control during hepatic repair", notes:"Manual compression or hepatoduodenal ligament clamp (hemostatic bulldog); safe up to 60 min warm ischemia; intermittent Pringle during repair reduces ischemia"},
      {name:"Angioembolization (hepatic artery)", when:"Arterial blush on CT in stable/stabilized patient; NOM failure with arterial source; Grade III–IV with blush", notes:"Selective or lobar embolization; risk: ischemic cholangiopathy, hepatic necrosis — surveillance"},
      {name:"Topical hemostasis and suture ligation", when:"Actively bleeding parenchymal lacerations during laparotomy", notes:"Argon beam coagulation, hemostatic agent (TachoComb, Surgicel, fibrin glue); horizontal mattress sutures for deep lacerations"},
      {name:"Formal hepatic resection", when:"Devitalised lobe; failed packing/embolization; elective setting for late complications (biloma, necrosis)", notes:"AVOID in acute trauma setting unless resection is required for hemostasis (very rare); anatomic resection after physiological recovery"}
    ]
  },
  technique: {
    title: "Perihepatic Packing for Damage Control",
    prep: [
      "Midline laparotomy; identify and gain rapid access to liver",
      "Large laparotomy packs (count accurately — retained pack catastrophic)"
    ],
    steps: [
      {n:1, t:"Initial compression", d:"Manual compression of liver between both hands — immediate hemorrhage control while packs prepared"},
      {n:2, t:"Superior packing", d:"Pack between liver dome and diaphragm on right; also subhepatic space; compress both sides"},
      {n:3, t:"Right lateral packing", d:"Pack to right of liver (between liver and right abdominal wall)"},
      {n:4, t:"Inferior packing", d:"Pack subhepatic space (Morrison's pouch) with packs compressing liver superiorly toward diaphragm"},
      {n:5, t:"Pringle if needed", d:"If parenchymal arterial bleeding persists with packing: add Pringle clamp during inspection"},
      {n:6, t:"TAC and ICU", d:"Do NOT attempt hepatic repair; close with TAC; document pack count; relook 24–48h when physiology corrected"}
    ],
    pearls: [
      "Retrohepatic IVC injury: most lethal liver injury; avoid mobilizing liver if hemostasis achieved with packing — retrolilvers IVC repair has near-100% mortality if attempted without cardiopulmonary bypass",
      "Bile leak post-NOM: common in Grade III–IV; ERCP + biliary stenting curative in most; PTBD for failed ERCP",
      "Pack count essential — always document number inserted AND removed"
    ]
  },
  guidelines: [
    {src:"EAST 2012: Non-operative management of blunt hepatic injury"},
    {src:"WSES 2020: Liver trauma management guidelines"},
    {src:"AAST: Organ injury scaling — liver"}
  ],
  pearls: [
    "80% of liver injuries are managed non-operatively — resist the urge to operate on stable patients",
    "Angioembolization is the most important adjunct for high-grade injuries — reduces splenectomy equivalent for liver",
    "Hemobilia: arteriovenous fistula → GI bleed; Quinke's triad: UGI bleed + jaundice + RUQ pain — treat with angioembolization"
  ],
  mistakes: [
    "Operative exploration of stable Grade III injury without CT — may convert to unstable with surgical hemorrhage",
    "Attempting formal hepatectomy in DCS phase — too morbid; pack first",
    "Mobilizing liver with retrohepatic IVC injury — removes tamponade effect, causes catastrophic hemorrhage"
  ]
},
{
  id: "bowel-trauma",
  dept: "trauma",
  name: "Hollow Viscus / Bowel Trauma",
  latin: "Trauma viscerum cavorum",
  organ: "Small/Large bowel",
  severity: "high",
  tags: ["trauma","bowel","perforation","blunt"],
  hero: "Missed hollow viscus injury causes peritonitis and death. CT has 85–90% sensitivity — re-examine at 4–6h if initial CT negative with high suspicion. Seatbelt sign and lumbar vertebral fracture = high-risk combination.",
  keypoints: [
    "Blunt small bowel injury: often missed on initial CT; free fluid without solid organ injury = bowel injury until proven otherwise",
    "Seatbelt sign (abdominal bruising) + lumbar spine fracture (Chance fracture) = Chance triad — bowel injury in 40–50%",
    "Penetrating: every GSW through peritoneum = mandatory laparotomy; stab wounds with evisceration or peritonism = laparotomy",
    "Primary repair (simple closure) for small lacerations, <50% circumference; resection and anastomosis for larger injuries",
    "Damage control: staple bowel perforations, delay anastomosis until physiology corrected"
  ],
  differentials: ["Mesenteric hematoma without bowel injury","Solid organ injury","Retroperitoneal hematoma","Traumatic pancreatitis","Bladder injury"],
  mnemonics: [
    {name:"Chance triad", text:"Seat belt sign + Lumbar fracture (Chance vertebral fracture) + Bowel injury = high index of suspicion for bowel perforation"},
    {name:"Free fluid without solid organ injury", text:"= Bowel/mesenteric injury until proven otherwise — serial examination and low threshold for laparotomy"}
  ],
  overview: {
    definition: "Full-thickness or mesenteric injury to any segment of the gastrointestinal tract from blunt or penetrating abdominal trauma.",
    epidemiology: "5–15% of blunt trauma laparotomies. Small bowel most common (50%); colon 30%; stomach 10%; duodenum 10%. Mortality increases with delayed diagnosis (>8h): 40% vs <5% if repaired early.",
    pathophysiology: "Blunt: burst injury at fixed points (duodenojejunal flexure, terminal ileum near ileocecal valve, mobile loops against spine); shearing of mesentery causing devascularization. Penetrating: direct laceration.",
    classification: [
      "AAST Small Bowel Injury Scale: Grade I (contusion/hematoma <50% circumference) to Grade V (segmental devascularization >2 vessels)",
      "Colon: Grade I–V similarly",
      "Duodenal: Grades I–IV (Grade IV = complex involving papilla)"
    ]
  },
  diagnosis: {
    history: [
      "High-energy blunt abdominal trauma; seatbelt mechanism (lower seatbelt across abdomen, not pelvis)",
      "Penetrating abdominal trauma (any GSW; stab wound with peritonism/evisceration)",
      "Initial period of minimal symptoms then progressive peritonism 4–8h post-injury",
      "Delay in presentation (>6h): increasing pain, fever, nausea, vomiting"
    ],
    examination: [
      "Seatbelt sign: transverse bruising across lower abdomen (pathognomonic for mechanism)",
      "Peritonism: guarding and rebound (may be delayed — re-examine at 4–6h)",
      "Free intraperitoneal air on erect CXR (uncommon — bowel injuries often sealed initially)",
      "Evisceration: bowel visible through wound = mandatory laparotomy"
    ],
    investigations: [
      {name:"CT abdomen/pelvis with IV contrast", role:"Free fluid without solid organ injury (suspicious); mesenteric stranding; pneumoperitoneum; bowel wall thickening; mesenteric hematoma; sensitivity 85–90% for bowel injury"},
      {name:"FAST exam", role:"Free fluid — non-specific; less useful than CT for hollow viscus; FAST negative does NOT exclude bowel injury"},
      {name:"Serial abdominal examination", role:"Most important tool when CT equivocal; re-examine every 2–4h; clinical deterioration = laparotomy"},
      {name:"Diagnostic laparoscopy", role:"Equivocal CT + hemodynamically stable; can be converted to laparotomy if injury found"},
      {name:"Erect CXR", role:"Free air under diaphragm confirms hollow viscus perforation"},
      {name:"Lumbar spine X-ray/CT", role:"Chance fracture: flexion-distraction injury L1–3; high association with bowel injury"}
    ]
  },
  criteria: {
    title: "Indications for Laparotomy in Bowel Trauma",
    items: [
      {k:"Hemodynamic instability", v:"Any penetrating or blunt trauma — mandatory"},
      {k:"Peritonitis", v:"Clinical signs of peritonism at any time point"},
      {k:"Evisceration", v:"Bowel or omentum visible through wound"},
      {k:"Pneumoperitoneum", v:"Free air on imaging"},
      {k:"GSW traversing peritoneal cavity", v:"Mandatory laparotomy"},
      {k:"Seatbelt sign + free fluid", v:"High suspicion; laparotomy unless serial exams reassuring"},
      {k:"Increasing symptoms at serial exam", v:"Clinical deterioration = laparotomy"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Selected Grade I–II small bowel/colon contusions without full-thickness perforation: serial observation",
      "Small mesenteric hematoma without bowel devascularization: conservative management with close monitoring"
    ],
    medical: [
      "IV antibiotics: broad-spectrum including anaerobic cover (metronidazole + cefuroxime or piperacillin-tazobactam)",
      "Analgesia, NGT decompression, IV fluids"
    ],
    surgical: [
      {name:"Primary repair (simple closure)", when:"Laceration <50% circumference; no devascularization; clean wound edges; no peritonitis/fecal contamination", notes:"2-layer closure in transverse orientation (reduces stricture); ensure well-vascularized edges"},
      {name:"Segmental resection and primary anastomosis", when:"Laceration >50% circumference; devascularized segment; multiple adjacent injuries; 12–24h after trauma if delayed presentation with controlled peritonitis", notes:"Avoid in DCS phase — staple or loop both ends; return for anastomosis at relook"},
      {name:"Damage control — stapled ends/defunctioning", when:"Part of DCS; physiological compromise (lethal triad); extensive contamination", notes:"Staple/close ends without anastomosis; leave in abdomen or bring as stoma; anastomose at relook 24–48h"},
      {name:"Diverting stoma (loop colostomy/ileostomy)", when:"Left colon injuries with high contamination, delayed presentation, extensive devascularization; anastomosis not safe", notes:"Hartmann's procedure for sigmoid/rectal injuries with peritonitis; later reversal"},
      {name:"Duodenal repair", when:"Grade I–III: primary repair ± pyloric exclusion; Grade IV: complex reconstruction involving pancreas", notes:"Pyloric exclusion: staple pylorus closed + gastrojejunostomy to divert; protects duodenal repair while healing"}
    ]
  },
  technique: {
    title: "Systematic Bowel Inspection at Trauma Laparotomy",
    prep: [
      "After hemorrhage control and packing — systematic bowel inspection",
      "Two assistants retract bowel; surgeon inspects from Treitz to rectum"
    ],
    steps: [
      {n:1, t:"Stomach and duodenum", d:"Inspect anterior and posterior stomach; Kocherise duodenum to inspect D1–D2; look for bile staining (duodenal/biliary injury)"},
      {n:2, t:"Small bowel — systematic", d:"Begin at DJ flexure; run entire small bowel to ileocecal valve; inspect mesenteric border (most common missed injury location)"},
      {n:3, t:"Colon", d:"Inspect entire colon; retroperitoneal colon (ascending, descending): mobilize to inspect posterior wall if injury suspected"},
      {n:4, t:"Rectum", d:"Inspect rectum; rigid sigmoidoscopy if extraperitoneal rectal injury suspected"},
      {n:5, t:"Mesentery", d:"Inspect for mesenteric hematoma, vascular injury, devascularized bowel (gray, non-peristaltic, no visible mesenteric pulse)"},
      {n:6, t:"Document all injuries", d:"Systematic documentation of location, grade, and management of each injury; essential for relook team"}
    ],
    pearls: [
      "Mesenteric border injuries are the easiest to miss — palpate and inspect the mesenteric attachment of every loop",
      "Retroperitoneal duodenal perforation: bile/gas in retroperitoneum on CT; Kocherise duodenum intraoperatively",
      "Rectal injury below peritoneal reflection: drain presacral space (Penrose drain in Waldeyer's fascia); divert stoma; washout"
    ]
  },
  guidelines: [
    {src:"EAST Practice Management Guidelines: Blunt intestinal injury"},
    {src:"WSES 2019: Penetrating abdominal trauma"},
    {src:"AAST: Hollow viscus injury grading"}
  ],
  pearls: [
    "Free fluid without solid organ injury on CT is a bowel injury until proven otherwise — low threshold for laparotomy",
    "Delayed presentation >8h = gross fecal contamination = cover-defect stoma, not primary anastomosis",
    "Penetrating trauma: negative DPL (>100,000 RBC/mL) does not exclude retroperitoneal bowel injury"
  ],
  mistakes: [
    "Relying on single CT to exclude bowel injury — serial examination is essential with equivocal findings",
    "Primary anastomosis in a contaminated, hypoperfused bowel in DCS setting — anastomotic failure rate very high",
    "Missing posterior duodenal injury — must Kocherise duodenum at every trauma laparotomy"
  ]
},
{
  id: "diaphragm-rupture",
  dept: "trauma",
  name: "Traumatic Diaphragm Rupture",
  latin: "Ruptura diaphragmatis traumatica",
  organ: "Diaphragm",
  severity: "high",
  tags: ["trauma","diaphragm","thoracic","blunt"],
  hero: "Often missed on initial imaging; CXR has poor sensitivity. Left-sided 75%. May present acutely (herniated stomach/bowel → strangulation) or be discovered incidentally years later. Surgical repair mandatory.",
  keypoints: [
    "Left-sided in 75% (right protected by liver); penetrating in 30%",
    "CXR findings: elevated hemi-diaphragm, intrathoracic bowel gas, NGT above diaphragm",
    "CT sensitivity 70–90%; MRI best for delayed/chronic",
    "Repair: abdominal approach acutely (reduce herniated contents + repair); thoracic approach for chronic/adhesions",
    "Delayed diagnosis: classic chronic symptoms — postprandial pain, dyspnea, respiratory distress from strangulated herniated viscera"
  ],
  differentials: ["Left pleural effusion/hemothorax","Tension pneumothorax","Phrenic nerve palsy (elevated hemidiaphragm)","Congenital diaphragmatic hernia","Subphrenic abscess"],
  mnemonics: [
    {name:"Diaphragm rupture CXR", text:"NGT above diaphragm + Bowel gas in chest + Irregular hemi-diaphragm contour = rupture until proven otherwise"}
  ],
  overview: {
    definition: "Full-thickness disruption of the diaphragm from blunt or penetrating trauma allowing herniation of abdominal viscera into the thoracic cavity.",
    epidemiology: "0.8–8% of major blunt abdominal trauma. Left-sided in 75% (right protected by liver). Penetrating in 30% (smaller defects but still require repair). Mortality from associated injuries: 30–35%.",
    pathophysiology: "Sudden increase in intra-abdominal pressure (blunt) or direct laceration (penetrating) → diaphragm tear → abdominal-thoracic pressure gradient drives viscera through defect → compression of ipsilateral lung + mediastinal shift → respiratory and hemodynamic compromise.",
    classification: [
      "Acute: diagnosed within 24h of injury",
      "Subacute: 24h to 30 days",
      "Chronic/delayed: >30 days; high risk of obstruction/strangulation of herniated viscera"
    ]
  },
  diagnosis: {
    history: [
      "High-energy blunt abdominal/thoracic trauma (RTA, fall from height)",
      "Penetrating left lower thorax or upper abdomen",
      "Acute: respiratory distress, hypotension, abdominal pain",
      "Chronic: vague postprandial pain, dyspnea, recurrent nausea/vomiting",
      "Acute on chronic: sudden strangulation of herniated viscera — emergency"
    ],
    examination: [
      "Decreased breath sounds on left (herniated stomach/bowel)",
      "Bowel sounds in left chest (pathognomonic)",
      "Respiratory distress, tachycardia",
      "Abdominal tenderness (may be minimal acutely)",
      "Mediastinal shift (trachea displaced right)"
    ],
    investigations: [
      {name:"CXR", role:"Sensitivity 27–62%; findings: elevated/irregular left hemidiaphragm; intrathoracic stomach gas; NGT curling above diaphragm; lower thorax opacity"},
      {name:"CT chest/abdomen", role:"Sensitivity 70–90%; detects diaphragmatic defect; herniated organs; 'collar sign' (hourglass constriction of herniated organ); reconstructions improve sensitivity"},
      {name:"MRI", role:"Best for subacute/chronic; direct visualization of diaphragmatic defect; no radiation"},
      {name:"Diagnostic laparoscopy/thoracoscopy", role:"If CT equivocal; can be both diagnostic and therapeutic if expertise available"},
      {name:"Upper GI contrast study", role:"Stomach or colon in thorax confirms diagnosis; may demonstrate collar sign"}
    ]
  },
  criteria: {
    title: "Indications for Repair",
    items: [
      {k:"All traumatic diaphragm ruptures", v:"Require surgical repair — no conservative management; risk of strangulation if unrepaired"},
      {k:"Acute presentation", v:"Abdominal approach — reduce herniated viscera, repair defect"},
      {k:"Chronic presentation", v:"Thoracic or combined approach — adhesions prevent abdominal reduction"},
      {k:"Emergency (strangulated viscera)", v:"Immediate laparotomy — resect non-viable bowel, repair diaphragm"}
    ]
  },
  scoring: [],
  management: {
    conservative: [],
    medical: [
      "Resuscitation, intubation if respiratory failure",
      "NGT decompression (decompress herniated stomach)",
      "Avoid positive pressure ventilation if suspected — worsens herniation"
    ],
    surgical: [
      {name:"Laparotomy + diaphragm repair (acute)", when:"All acute traumatic diaphragm ruptures; preferred approach for acute injury (other abdominal injuries common)", notes:"Reduce herniated viscera into abdomen; assess viability (strangulated bowel → resect); repair diaphragm with non-absorbable sutures (interrupted or continuous); mesh if large defect (>5cm) cannot be closed primarily"},
      {name:"Thoracotomy or VATS (chronic/delayed)", when:"Delayed/chronic diaphragm rupture (adhesions from chronic herniation); thoracic approach facilitates lysis of intrathoracic adhesions", notes:"VATS increasingly used for chronic; convert to thoracotomy if adhesions dense; reduce viscera via thorax, repair defect with suture ± mesh"},
      {name:"Combined abdominal + thoracic approach", when:"Large defects; extensive adhesions; damage to both thoracic and abdominal structures simultaneously", notes:"Thoracoabdominal incision or laparotomy + thoracotomy sequentially"}
    ]
  },
  technique: {
    title: "Laparoscopic Diaphragm Repair (Elective/Delayed Small Defect)",
    prep: [
      "General anesthesia; double-lumen ET tube for selective lung ventilation (optional)",
      "Position: supine slight left lateral tilt",
      "Ports: camera port + 2–3 working ports"
    ],
    steps: [
      {n:1, t:"Identify defect", d:"Systematically inspect left and right hemi-diaphragm; defect usually posterior-lateral"},
      {n:2, t:"Reduce herniated viscera", d:"Gently reduce stomach, colon, spleen into abdomen; assess viability"},
      {n:3, t:"Defect assessment", d:"Measure defect size; assess tissue quality for primary repair vs mesh"},
      {n:4, t:"Primary repair", d:"Non-absorbable sutures (0-Ethibond/Prolene); interrupted horizontal mattress; full-thickness diaphragm bites"},
      {n:5, t:"Mesh reinforcement", d:"If defect >5cm or tissue quality poor: PTFE or biological mesh; anchor with sutures or tacks"},
      {n:6, t:"Chest drain", d:"Always insert chest drain post-diaphragm repair — pneumothorax from peritoneal gas entry into chest inevitable"}
    ],
    pearls: [
      "ALWAYS insert chest drain after diaphragm repair — gas enters pleural space through defect",
      "Strangulated bowel: non-viable segment must be resected before repair; vascularity improves after reduction sometimes — wait 5–10 min before deciding",
      "Right-sided diaphragm rupture: often missed; liver occupies defect (no bowel herniation); CT diagnosis; repair same principles"
    ]
  },
  guidelines: [
    {src:"EAST Practice Management Guidelines: Traumatic diaphragm injury"},
    {src:"WSES 2017: Diaphragmatic injuries"},
    {src:"AAST: Diaphragm injury grading scale"}
  ],
  pearls: [
    "NGT tip visible above diaphragm on CXR = intrathoracic stomach = diaphragm rupture until proven otherwise",
    "All diaphragm injuries require repair — no defect is too small to herniate and strangulate viscera eventually",
    "Penetrating thoracoabdominal injuries: below nipple line anteriorly or below tip of scapula posteriorly → assume diaphragm injury"
  ],
  mistakes: [
    "Dismissing CXR finding as hemothorax/pleural effusion without considering diaphragm rupture",
    "Not inserting chest drain after diaphragm repair — pneumothorax from laparoscopic CO₂ entry",
    "Conservative management of known diaphragm rupture — all require repair"
  ]
},
{
  id: "pelvic-fracture",
  dept: "trauma",
  name: "Pelvic Fracture (Hemorrhage Control)",
  latin: "Fractura pelvis cum haemorrhagia",
  organ: "Pelvis",
  severity: "high",
  tags: ["trauma","pelvis","hemorrhage","orthopedic"],
  hero: "Unstable pelvic fractures can lose 3–5L blood retroperitoneally. Pelvic binder → preperitoneal pelvic packing + angioembolization + external fixation. Do NOT open the retroperitoneum at laparotomy — releases tamponade.",
  keypoints: [
    "Pelvic binder/sheet immediately for suspected unstable pelvic fracture (closes volume, reduces hemorrhage)",
    "Hemorrhage sources: venous plexus (85%) + arterial (15%) — angioembolization for arterial",
    "REBOA Zone III (zone III = infrarenal aorta/iliac): bridge to hemorrhage control in extremis",
    "Preperitoneal pelvic packing (PPP): surgical packing of presacral space without opening peritoneum",
    "Never open retroperitoneum at laparotomy in pelvic fracture — tamponade released → catastrophic hemorrhage"
  ],
  differentials: ["Intra-abdominal hemorrhage (FAST positive)","Femoral artery injury","Urethral/bladder rupture","Retroperitoneal hematoma from aortic/iliac vessel injury"],
  mnemonics: [
    {name:"C-ABCDE for pelvic fracture", text:"C = Catastrophic hemorrhage control (pelvic binder) BEFORE airway in hemorrhagic pelvic fracture"}
  ],
  overview: {
    definition: "Fractures of the pelvic ring, often from high-energy mechanisms, associated with major hemorrhage from disrupted pelvic venous plexus and iliac vessels.",
    epidemiology: "Mortality: stable pelvic fractures 5%; unstable (open book, vertical shear) 20–50%. Occurs in 10% of major blunt trauma. Most deaths from hemorrhage.",
    pathophysiology: "Unstable pelvic ring disruption → pelvic volume expands up to 4× → venous sinuses bleed freely into retroperitoneum → unconstrained hemorrhage. Arterial injury (superior gluteal, internal iliac branches) in 15% — requires embolization.",
    classification: [
      "Young-Burgess Classification: LC (lateral compression), APC (anteroposterior compression), VS (vertical shear), CM (combined mechanism)",
      "APC Type II/III (open book): unstable — large pelvic volume increase; major hemorrhage risk",
      "VS: most unstable — complete disruption anterior + posterior pelvic ring",
      "Tile classification — A: stable; B: rotationally unstable but vertically stable (open-book/lateral compression); C: rotationally AND vertically unstable"
    ]
  },
  diagnosis: {
    history: [
      "High-energy mechanism: RTA (pedestrian, motorcyclist), fall from height, industrial crush",
      "Hypotension without obvious thoracic/abdominal source",
      "Pelvic pain, instability, lower extremity shortening/rotation",
      "Hematuria (urethral/bladder injury), blood at urethral meatus"
    ],
    examination: [
      "Pelvic instability: single gentle AP compression test (if unstable pelvis — do once only, binder immediately after)",
      "Lower limb leg length discrepancy, external rotation",
      "Scrotal/labial hematoma, perineal bruising",
      "Blood at urethral meatus (urethral injury — do NOT catheterize until urethrogram)",
      "Rectal/vaginal examination: open fracture, lacerations"
    ],
    investigations: [
      {name:"Pelvic X-ray (ATLS primary survey)", role:"Immediate — identifies pelvic ring disruption; unstable pattern = binder before further imaging"},
      {name:"FAST exam", role:"Assesses concurrent intra-abdominal hemorrhage; pelvic FAST (suprapubic) for pelvic fluid"},
      {name:"CT pelvis (with IV contrast — arterial + portal phase)", role:"Define fracture pattern; identify arterial blush (embolization target); bladder/urethral injury; associated pelvic injuries"},
      {name:"Retrograde urethrogram", role:"Before Foley catheter if blood at urethral meatus or high-riding prostate"},
      {name:"CT cystogram", role:"Bladder injury assessment (intraperitoneal vs extraperitoneal rupture)"}
    ]
  },
  criteria: {
    title: "Hemorrhage Control Algorithm for Unstable Pelvic Fracture",
    items: [
      {k:"Step 1", v:"Pelvic binder/sheet (immediate, prehospital or ER)"},
      {k:"Step 2", v:"DCR: 1:1:1 blood:FFP:platelets + TXA"},
      {k:"Step 3a (if FAST negative)", v:"Angioembolization if arterial blush on CT; preperitoneal pelvic packing (PPP) if no IR"},
      {k:"Step 3b (if FAST positive)", v:"Laparotomy first (intra-abdominal bleeding > retroperitoneal usually); PPP at end of laparotomy"},
      {k:"Step 4", v:"External fixation (C-clamp for posterior ring; anterior external fixator)"},
      {k:"Step 5", v:"Definitive internal fixation (ORIF) when physiologically stable — typically day 3–5"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Stable pelvic fractures (LC-I, isolated pubic rami): conservative — analgesia, mobilize with crutches",
      "Hemodynamically stable: CT angiogram + selective angioembolization if blush"
    ],
    medical: [
      "Pelvic binder: immediate reduction of pelvic volume — reduces venous hemorrhage",
      "DCR: 1:1:1 blood products; TXA within 3 hours; calcium supplementation",
      "Vasopressors (noradrenaline) if hemorrhage control incomplete"
    ],
    surgical: [
      {name:"Preperitoneal pelvic packing (PPP)", when:"Persistent hemodynamic instability from pelvic fracture; no IR available; or after laparotomy for concurrent abdominal injury", notes:"Pfannenstiel incision; enter preperitoneal (Retzius) space WITHOUT entering peritoneum; 3 packs each side into presacral/lateral pelvic spaces; temporary closure; relook 24–48h"},
      {name:"Angioembolization", when:"Arterial blush on CT + hemodynamic stability sufficient for IR; first-line for arterial pelvic hemorrhage", notes:"Bilateral internal iliac embolization (with gelfoam — temporary) if no defined bleeding point; selective embolization if point identified; pelvic ischemia rare due to extensive collaterals"},
      {name:"External fixation (C-clamp/anterior frame)", when:"Acute hemorrhage control; posterior ring stabilization (C-clamp for VS/APC III); anterior frame for APC II+", notes:"Orthopedic team; reduces pelvic volume and stabilizes fracture; improves tamponade of venous bleeding"},
      {name:"Laparotomy — avoid retroperitoneal entry", when:"Concurrent intra-abdominal injury requiring laparotomy; PPP can be added at end of laparotomy", notes:"CRITICAL: Do NOT open retroperitoneal hematoma from pelvic fracture — releases tamponade and causes exsanguination; only open if rapidly expanding or aortic/iliac injury suspected"}
    ]
  },
  technique: {
    title: "Preperitoneal Pelvic Packing (PPP)",
    prep: [
      "GA; Foley catheter in situ (if urethrogram clear) OR suprapubic catheter",
      "Supine position",
      "Pelvic binder or external fixator in situ to reduce pelvic volume before packing"
    ],
    steps: [
      {n:1, t:"Pfannenstiel incision", d:"7–10cm transverse incision 2cm above pubic symphysis; divide anterior rectus sheath"},
      {n:2, t:"Enter preperitoneal space", d:"Retract rectus muscles superiorly; develop avascular preperitoneal (Retzius) space bluntly; DO NOT enter peritoneal cavity"},
      {n:3, t:"Pelvic packing", d:"Insert 3 large laparotomy packs on each side into presacral space and lateral pelvic wall spaces (6 packs total)"},
      {n:4, t:"Tamponade", d:"Packs compress against fixed pelvic bones — mechanical tamponade of venous plexus"},
      {n:5, t:"Closure", d:"Close rectus sheath only; skin clips or skin closure; leave packs in situ; label clearly (number)"},
      {n:6, t:"Post-op angiography", d:"After PPP: CT angiogram or direct angiography to identify arterial bleeding; embolize if blush present"},
      {n:7, t:"Relook 24–48h", d:"Remove packs in ICU when physiology corrected; definitive fracture fixation planned"}
    ],
    pearls: [
      "PPP is faster than angioembolization (15–20 min vs 60–90 min) — first-line if hemodynamically crashing",
      "PPP + angioembolization are complementary — PPP stops venous; angioembolization stops arterial",
      "REBOA Zone III: infrarenal or iliac occlusion — bridge to PPP/angioembolization in extremis; escalate to REBOA if SBP <80 despite binder + resuscitation",
      "Angiography threshold: pursue if >4 units RBC transfused from a pelvic source with corrected coagulation over 12 h — implies ongoing arterial bleeding"
    ]
  },
  guidelines: [
    {src:"EAST Practice Management Guidelines: Pelvic fracture hemorrhage control"},
    {src:"WSES 2020: Major hemorrhage in pelvic trauma"},
    {src:"ATLS 10th Edition: Pelvic trauma"},
    {src:"AO Foundation: Pelvic ring injuries management"}
  ],
  pearls: [
    "Pelvic binder must be applied at level of greater trochanters (NOT iliac crests) to close open book fracture",
    "Urethral blood: retrograde urethrogram before catheterization — urethral injury in 10% of anterior pelvic fractures",
    "Do NOT open retroperitoneal hematoma in pelvic fracture at laparotomy — always packs + angioembolization"
  ],
  mistakes: [
    "Applying pelvic binder too high (at iliac crest) — does not reduce pelvic volume in open book fracture",
    "Opening retroperitoneal hematoma at laparotomy — catastrophic hemorrhage",
    "Inserting Foley catheter before excluding urethral injury — urethral transection results"
  ]
}
];
