// TRAUMA BATCH 2 — IDs: wound-dehiscence, penetrating-abdominal, chest-trauma, burns, compartment-limb, renal-trauma, traumatic-brain
const TRAUMA_DISEASES_2 = [
{
  id: "wound-dehiscence",
  dept: "trauma",
  name: "Wound Dehiscence / Burst Abdomen",
  latin: "Dehiscentia vulneris abdominalis",
  organ: "Abdominal wall",
  severity: "high",
  tags: ["wound","complication","abdominal-wall","post-op"],
  hero: "Complete burst abdomen (evisceration) is a surgical emergency. Primary reclosure under tension with mass closure technique. Identify and address underlying cause.",
  keypoints: [
    "Burst abdomen: fascial dehiscence with or without evisceration; distinct from superficial wound dehiscence",
    "Classic: pink serous fluid leak from wound (salmon-coloured discharge) on day 5–8 post-op — sign of underlying fascial dehiscence",
    "Risk factors: obesity, malnutrition, steroids, diabetes, wound infection, closure technique error, raised IAP",
    "Evisceration = surgical emergency: cover bowel with warm saline-soaked gauze, IV antibiotics, urgent return to OR",
    "Repair: mass closure with loop PDS or nylon (all layers together); tension sutures if severely malnourished"
  ],
  differentials: ["Superficial wound dehiscence (skin only)","Incisional hernia (late)","Wound infection with sinus","Enterocutaneous fistula"],
  mnemonics: [
    {name:"Salmon sign", text:"Pink/salmon-coloured serous discharge from midline wound day 5–8 = burst abdomen until proven otherwise — return to OR"}
  ],
  overview: {
    definition: "Disruption of the fascial layer of an abdominal closure, with or without skin opening and evisceration of abdominal contents.",
    epidemiology: "Incidence 1–3% of laparotomies. Mortality 20–45% (from associated sepsis/pulmonary complications). Most common days 5–8 post-op.",
    pathophysiology: "Failure of fascial closure due to technical factors (too tight/loose sutures, inadequate bites), infection (tissue destruction), impaired healing (malnutrition, steroids, jaundice), increased IAP, or patient factors (coughing, obesity).",
    classification: [
      "Superficial wound dehiscence: skin and subcutaneous tissue only — fascia intact",
      "Deep dehiscence: fascial layer disrupted — skin may be intact",
      "Complete dehiscence / burst abdomen: full thickness disruption with or without evisceration",
      "Latent dehiscence: fascial failure without skin opening → incisional hernia later"
    ]
  },
  diagnosis: {
    history: [
      "Salmon-coloured serous discharge from midline wound on day 5–8 post-op (pathognomonic)",
      "Patient reports 'something giving way' — sudden 'pop' with wound opening",
      "Evisceration visible",
      "Recent laparotomy (especially emergency, contaminated, re-operation)",
      "Risk factors: obesity, malnutrition, steroids, chest infection causing coughing, anastomotic leak, ileus"
    ],
    examination: [
      "Visible fascial defect or evisceration",
      "Salmon/pink discharge: test with ward dip — not urine or exudate",
      "Palpate closure with gloved finger — if wound opens easily = fascial dehiscence",
      "Bowel viable or strangulated (if eviscerated — assess colour, peristalsis)"
    ],
    investigations: [
      {name:"Clinical diagnosis", role:"Salmon discharge + wound assessment = usually sufficient; do not delay treatment for imaging"},
      {name:"Wound swab", role:"MC&S to guide antibiotic therapy; wound infection common precipitant"},
      {name:"Nutritional markers: albumin, pre-albumin", role:"Assess nutritional status; hypoalbuminaemia <30g/L = high-risk for reclosure failure"},
      {name:"CT abdomen", role:"If uncertain diagnosis or concern for anastomotic leak causing dehiscence; assesses for intra-abdominal pathology driving IAP"}
    ]
  },
  criteria: {
    title: "Risk Factors for Burst Abdomen (WOUND Score equivalent)",
    items: [
      {k:"Technical", v:"Suture bites <1cm from edge, suture:wound length ratio <4:1, excess tension, knot failure"},
      {k:"Infection", v:"Wound SSI, anastomotic leak, fistula — most common precipitant"},
      {k:"Patient factors", v:"BMI >30, malnutrition (albumin <30), steroids/immunosuppression, diabetes, jaundice"},
      {k:"Mechanical", v:"Raised IAP (ileus, ACS, coughing), haematoma"},
      {k:"Timing", v:"Day 5–8 most common — inflammatory phase peak, suture under max stress"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Superficial wound dehiscence (skin only, fascia intact): wound care, moist dressings, allow secondary intention healing or delayed primary closure",
      "Clinically stable, small fascial defect without evisceration: consider conservative VAC therapy + urgent reassessment; rare indication"
    ],
    medical: [
      "IV broad-spectrum antibiotics (cover skin flora + GI organisms if contamination)",
      "Nutritional support: high-protein enteral/parenteral nutrition pre-operatively if elective reclosure planned",
      "Treat underlying cause: drain anastomotic leak, control sepsis"
    ],
    surgical: [
      {name:"Emergency reclosure (evisceration)", when:"Evisceration — immediate return to OR", notes:"Cover bowel with warm saline-soaked gauze immediately; assess bowel viability at OR; reduce bowel; mass closure (loop PDS or nylon) with all fascial layers; no skin closure if infected"},
      {name:"Planned reclosure (no evisceration)", when:"Fascial dehiscence without evisceration — semi-urgent return to OR within 12–24h", notes:"Nutritional optimisation where possible; mass closure technique; consider retention sutures if malnourished"},
      {name:"Mass closure technique", when:"Standard for all burst abdomen repair", notes:"Loop 1 PDS or 1 nylon; bites 1cm from edge, 1cm apart; suture:wound length ratio 4:1; avoid strangulating bites; near-near, far-far tension sutures if very high tension"},
      {name:"Biological mesh repair", when:"Contaminated field; multiple previous closures; infected wound; unable to close fascia primarily", notes:"Non-absorbable mesh (IPOM) contraindicated in contaminated field; biological mesh (Permacol/Strattice) allows repair in contaminated/infected settings"}
    ]
  },
  technique: {
    title: "Mass Closure for Burst Abdomen",
    prep: [
      "GA; thorough wound lavage with warm saline",
      "Mobilise fascial edges (if adherent bowel or omentum — gently free)",
      "Assess bowel viability if eviscerated"
    ],
    steps: [
      {n:1, t:"Wound preparation", d:"Debride devitalised fascial edges; copious lavage; count bowel loops returned to abdomen"},
      {n:2, t:"Suture selection", d:"Loop 1 PDS (polydioxanone) or loop 1 nylon (mass closure — all layers except skin)"},
      {n:3, t:"Bites", d:"Full-thickness bites including peritoneum + posterior rectus sheath + anterior rectus sheath; 1cm from edge; 1cm apart"},
      {n:4, t:"Suture:wound ratio", d:"Ensure ≥4:1 suture length to wound length ratio as suturing proceeds — prevents tension"},
      {n:5, t:"Knot security", d:"Aberdeen termination knot or 6 throws; bury knot if possible"},
      {n:6, t:"Retention sutures", d:"If closure under high tension or severely malnourished: far-far retention sutures of 1 nylon through skin + fascia (bolstered with buttons to prevent cutting through); remove at 3 weeks"},
      {n:7, t:"Skin", d:"If clean wound: close skin; if infected: leave open for secondary intention/delayed primary closure"}
    ],
    pearls: [
      "The most common technical error: suture bites too small (<1cm) and too far apart (>1cm) — inadequate tissue purchase",
      "Suture:wound ratio is the single most important technical factor — measure as you go (Jenkins rule: 4:1 SWR)",
      "Omentum between bowel and fascia reduces risk of enterocutaneous fistula — place omental flap if available"
    ]
  },
  guidelines: [
    {src:"NICE: Surgical site infection prevention and management"},
    {src:"IMPROVE trial: Mass closure vs layered closure of midline laparotomy"},
    {src:"Jenkins et al.: The law of the midline laparotomy closure"}
  ],
  pearls: [
    "Salmon-coloured discharge = burst abdomen until proven otherwise — return to OR, do not just redress wound",
    "The NICE/IMPROVE recommendation: mass closure with loop PDS for midline laparotomy reduces dehiscence",
    "Retention sutures: ugly but life-saving in malnourished, immunosuppressed, or contaminated closures"
  ],
  mistakes: [
    "Reassuring patient that pink discharge is 'normal wound healing' — salmon discharge = fascial dehiscence",
    "Skin-only closure of burst abdomen without fascial reclosure — immediate re-dehiscence",
    "Non-absorbable mesh in infected field — mesh infection, fistulation, excision needed"
  ]
},
{
  id: "penetrating-abdominal",
  dept: "trauma",
  name: "Penetrating Abdominal Trauma",
  latin: "Trauma penetrans abdominis",
  organ: "Abdomen",
  severity: "high",
  tags: ["trauma","penetrating","stab","gunshot"],
  hero: "GSW through peritoneal cavity = mandatory laparotomy. Stab wounds: selective non-operative management based on haemodynamic status, peritonism, and local wound exploration. Damage control principles apply.",
  keypoints: [
    "GSW (gunshot wounds): unpredictable trajectory — mandatory laparotomy if peritoneal cavity traversed",
    "Stab wounds: 40% do not penetrate peritoneum; selective NOM if stable, no peritonism, no evisceration",
    "Local wound exploration under LA to confirm fascial breach is a key decision tool",
    "Mandatory laparotomy indications: haemodynamic instability, peritonism, evisceration, blood on DPL/FAST, GSW",
    "Diagnostic laparoscopy: can confirm/exclude peritoneal penetration in selected stable stab wounds"
  ],
  differentials: ["Blunt abdominal trauma with hollow viscus injury","Retroperitoneal haematoma","Non-abdominal wound with referred pain"],
  mnemonics: [
    {name:"Stab wound management", text:"HEPIS: Haemodynamic instability + Evisceration + Peritonism + Impalement + Stab to back/flank → mandatory laparotomy; otherwise → selective NOM with LWE"}
  ],
  overview: {
    definition: "Abdominal injury from a penetrating object (knife, gunshot, shrapnel, impalement) that may or may not breach the peritoneum and injure intra-abdominal viscera.",
    epidemiology: "GSW: high mortality (10–20%); 95%+ require laparotomy. Stab wounds: lower mortality (<1%); only 30–40% require laparotomy. Leading cause of preventable trauma death in young men.",
    pathophysiology: "GSW: cavitation effect (temporary + permanent cavitation) causes wide zone of tissue destruction beyond bullet track. Stab wounds: direct laceration only; no cavitation; single track.",
    classification: [
      "Stab wounds: anterior abdomen, flank, back, thoracoabdominal (below nipple/scapula tip)",
      "GSW: low-velocity handgun vs high-velocity rifle (vastly different wounding patterns)",
      "Shotgun: close range = high-velocity; distant range = multiple low-velocity pellets",
      "Impalement: leave impaling object in situ until OR (prevents tamponade loss)"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: stab (single vs multiple wounds), GSW (weapon calibre/distance)",
      "Time since injury, first aid, prehospital vital signs",
      "Haemodynamic status, symptoms: abdominal pain, shoulder tip pain, rectal bleeding",
      "Entry and exit wounds (GSW trajectory estimation)",
      "Location of wounds: anterior abdomen, flank, thoracoabdominal"
    ],
    examination: [
      "ATLS primary survey: haemodynamic assessment",
      "ALL wounds identified: include back, perineum, axillae — log roll mandatory",
      "Evisceration (bowel or omentum through wound)",
      "Peritonism (guarding, rebound tenderness) — mandates laparotomy",
      "FAST: free fluid",
      "Rectal examination: blood = rectal injury"
    ],
    investigations: [
      {name:"FAST exam", role:"Free fluid = laparotomy in unstable; in stable stab wound informs decision"},
      {name:"CT abdomen/pelvis with IV contrast", role:"Stable patients: trajectory assessment for GSW; identifies free air, free fluid, organ injuries, retroperitoneal injury; do NOT delay for unstable patients"},
      {name:"Local wound exploration (LWE)", role:"Anterior abdominal stab wounds: explore under LA in ER; if fascia intact → NOM; if fascia breached → CT/DPL/laparoscopy/laparotomy decision"},
      {name:"Diagnostic peritoneal lavage (DPL)", role:"If FAST equivocal + stable; RBC >100,000/mL or WBC >500/mL or bile/faeces = laparotomy; less used since CT availability"},
      {name:"Diagnostic laparoscopy", role:"Selective stable stab wounds to anterior abdomen or thoracoabdominal region — confirms peritoneal breach; can diagnose and sometimes repair injuries"}
    ]
  },
  criteria: {
    title: "Mandatory Laparotomy Indications",
    items: [
      {k:"Haemodynamic instability", v:"Any penetrating abdominal trauma"},
      {k:"Peritonitis", v:"Signs of peritonism (involuntary guarding, rebound)"},
      {k:"Evisceration", v:"Bowel or omentum through wound"},
      {k:"GSW traversing peritoneum", v:"Mandatory regardless of initial stability"},
      {k:"Positive FAST + instability", v:"Immediate laparotomy"},
      {k:"Free air on imaging", v:"Hollow viscus injury confirmed"},
      {k:"Positive DPL", v:"Gross blood, bile, faeces on aspiration"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Selected stable stab wounds: observation 12–24h with serial examination if fascia intact on LWE",
      "No peritonism, no evisceration, no haemodynamic instability, no evidence of visceral injury"
    ],
    medical: [
      "IV broad-spectrum antibiotics at laparotomy (single pre-op dose for clean penetrating; extended for contamination)",
      "TXA 1g IV if haemorrhage within 3h of injury",
      "DCR: 1:1:1 blood products if massive haemorrhage"
    ],
    surgical: [
      {name:"Exploratory laparotomy (immediate)", when:"Mandatory laparotomy criteria met; haemodynamic instability; peritonism; evisceration; GSW", notes:"Midline incision; systematic exploration; damage control principles if physiologically compromised"},
      {name:"Damage control laparotomy", when:"Haemodynamic compromise + lethal triad; multiple injuries", notes:"As per trauma-laparotomy: haemorrhage control + contamination control + TAC; relook 24–48h"},
      {name:"Diagnostic laparoscopy (selected)", when:"Stable stab wound; equivocal clinical exam; thoracoabdominal stab wound to assess diaphragm", notes:"Can confirm/exclude peritoneal penetration; laparoscopic repair of diaphragm injury; convert to laparotomy if solid organ or bowel injury"},
      {name:"Impalement injuries", when:"Leave impaling object in situ; remove only in OR with proximal vascular control", notes:"Immobilise object; transport to OR; teamwork (general surgery + vascular + orthopaedics as needed)"}
    ]
  },
  technique: {
    title: "Systematic Exploration at Penetrating Abdominal Laparotomy",
    prep: [
      "Midline incision from xiphisternum to pubis",
      "Four-quadrant packing if haemoperitoneum",
      "Systematic organ-by-organ exploration"
    ],
    steps: [
      {n:1, t:"Haemorrhage control", d:"Pack all 4 quadrants; identify and control haemorrhage before detailed inspection"},
      {n:2, t:"Stomach", d:"Inspect anterior and posterior wall (open lesser sac via gastrocolic ligament)"},
      {n:3, t:"Small bowel", d:"Run entire small bowel from Treitz to ileocaecal valve — palpate and inspect both surfaces including mesenteric border"},
      {n:4, t:"Colon", d:"Inspect entire colon; mobilise ascending and descending colon if posterior wall injury suspected"},
      {n:5, t:"Duodenum", d:"Kocherise; inspect D1–D4; retroperitoneal bile = duodenal injury"},
      {n:6, t:"Solid organs", d:"Liver, spleen, kidney; manage per organ-specific principles"},
      {n:7, t:"Vascular", d:"Inspect aorta, IVC, mesenteric vessels — retroperitoneal haematoma assessment"},
      {n:8, t:"Pelvis and bladder", d:"Inspect rectovesical space; bladder integrity; rectal palpation"},
      {n:9, t:"Diaphragm", d:"Inspect both hemi-diaphragms from below; repair any defects (1 PDS sutures)"},
      {n:10, t:"Document all injuries", d:"Clear intraoperative note of all findings, injuries, and management"}
    ],
    pearls: [
      "Posterior gastric wall injury: always open lesser sac in penetrating epigastric trauma",
      "Knife in situ: do NOT remove prehospital; in OR — have vascular control before removal",
      "Tangential GSW to flank: may have retroperitoneal trajectory only — CT essential in stable patient to assess need for laparotomy"
    ]
  },
  guidelines: [
    {src:"WSES 2019: Penetrating abdominal trauma management guidelines"},
    {src:"EAST: Practice management guidelines for penetrating abdominal trauma"},
    {src:"ATLS 10th Edition: Penetrating abdominal trauma"}
  ],
  pearls: [
    "Negative mandatory laparotomy rate for stab wounds with selective NOM: <5% with proper patient selection",
    "Tangential GSW to abdomen: CT trajectory assessment in stable patient often avoids unnecessary laparotomy",
    "Back stab wounds with retroperitoneal haematoma: explore retroperitoneum — ureteric/renal/vascular injury possible"
  ],
  mistakes: [
    "Sending haemodynamically unstable penetrating abdominal trauma patient for CT — go directly to OR",
    "Leaving bowel in eviscerated position for imaging — cover and go to OR",
    "Missing posterior gastric wall injury — always open lesser sac in epigastric penetrating trauma"
  ]
},
{
  id: "chest-trauma",
  dept: "trauma",
  name: "Chest Trauma (Surgical Perspective)",
  latin: "Trauma thoracis",
  organ: "Chest",
  severity: "high",
  tags: ["trauma","thoracic","pneumothorax","haemothorax"],
  hero: "85% of chest injuries managed with intercostal drain insertion alone. Indications for thoracotomy: massive haemothorax (>1.5L immediate or >200mL/hr × 3h), cardiac tamponade, great vessel injury, open chest wound, or ER thoracotomy for penetrating trauma arrest.",
  keypoints: [
    "ATLS: identify and treat immediately life-threatening chest injuries — Tension PTX, Open PTX, Massive Haemothorax, Flail Chest, Cardiac Tamponade",
    "Intercostal drain (ICD): 4th/5th intercostal space, mid-axillary line — principal treatment for PTX and haemothorax",
    "Massive haemothorax: >1500mL immediate drainage OR >200mL/hr × 3h = thoracotomy",
    "ER thoracotomy: penetrating trauma with arrest or severe haemodynamic instability — survival up to 35% for penetrating cardiac; <1% for blunt",
    "Flail chest: paradoxical movement of ≥3 rib fractures in ≥2 places — pulmonary contusion is the lethal component"
  ],
  differentials: ["Pneumothorax (spontaneous)","Aortic dissection","Pulmonary contusion without rib fracture","Cardiac contusion","Oesophageal perforation"],
  mnemonics: [
    {name:"ATOMFC (immediately life-threatening)", text:"Airway obstruction + Tension pneumothorax + Open pneumothorax + Massive haemothorax + Flail chest + Cardiac tamponade"},
    {name:"Beck's triad (cardiac tamponade)", text:"Hypotension + Raised JVP + Muffled heart sounds"}
  ],
  overview: {
    definition: "Injuries to the thoracic cage and/or its contents from blunt or penetrating trauma, including rib fractures, pneumothorax, haemothorax, pulmonary contusion, and vascular or cardiac injury.",
    epidemiology: "Chest trauma accounts for 25% of trauma deaths. 85% managed non-operatively. Blunt chest trauma: RTA, falls. Penetrating: GSW, stab.",
    pathophysiology: "Rib fractures → pain → splinting → atelectasis → pneumonia. Tension PTX: one-way valve → progressive lung collapse + mediastinal shift → cardiac tamponade physiology. Haemothorax: massive = intercostal artery + pulmonary vessel injury.",
    classification: [
      "Immediately life-threatening (ATOMFC — treat in primary survey)",
      "Potentially life-threatening (secondary survey): pulmonary contusion, blunt cardiac injury, traumatic aortic injury, tracheobronchial injury, oesophageal injury, diaphragm rupture",
      "Simple rib fractures, simple pneumothorax, haemothorax",
      "Flail chest: paradoxical movement; ≥3 ribs each fractured in ≥2 places"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: RTA (steering wheel, seatbelt), fall, direct blow (assault), penetrating",
      "Respiratory distress, chest pain, haemoptysis",
      "Prehospital: SBP, GCS, SpO₂",
      "Penetrating location: thoracoabdominal = diaphragm injury risk"
    ],
    examination: [
      "Tension PTX: tracheal deviation away, absent breath sounds, hypotension, raised JVP, distended neck veins — CLINICAL DIAGNOSIS, immediate needle decompression",
      "Open PTX: sucking chest wound — immediately seal (3-sided occlusive dressing)",
      "Massive haemothorax: dull percussion, absent breath sounds, haemodynamic instability",
      "Cardiac tamponade: Beck's triad (hypotension + raised JVP + muffled heart sounds); pulsus paradoxus >10mmHg; FAST pericardial fluid"
    ],
    investigations: [
      {name:"CXR (supine ATLS)", role:"Pneumothorax (apical lucency), haemothorax (opacification), widened mediastinum (aortic injury), rib fractures, mediastinal shift"},
      {name:"FAST exam", role:"Pericardial fluid (cardiac tamponade); pleural fluid (haemothorax); eFAST adds lung sliding (PTX)"},
      {name:"CT chest with IV contrast", role:"Stable patients: detailed assessment of pulmonary contusion, rib fractures, aortic injury, diaphragm rupture, tracheal injury"},
      {name:"CT aortography", role:"Widened mediastinum, aortic contour abnormality — blunt thoracic aortic injury (BTAI)"},
      {name:"Bronchoscopy", role:"Suspected tracheobronchial injury (haemoptysis + persistent air leak after ICD)"},
      {name:"Oesophagoscopy/contrast swallow", role:"Suspected oesophageal injury (mechanism + surgical emphysema + left pneumothorax/haemothorax without rib fractures)"}
    ]
  },
  criteria: {
    title: "Indications for Thoracotomy in Chest Trauma",
    items: [
      {k:"Massive haemothorax", v:">1500mL immediate ICD drainage OR >200mL/hr × 3h"},
      {k:"Cardiac tamponade", v:"Not decompressible by pericardiocentesis; penetrating cardiac injury"},
      {k:"Great vessel injury", v:"Aortic, subclavian, pulmonary artery injury with haemodynamic compromise"},
      {k:"Tracheobronchial injury", v:"Persistent large air leak; bronchoscopy-confirmed main bronchus injury"},
      {k:"Oesophageal injury", v:"Mediastinitis developing; failed conservative management"},
      {k:"Diaphragm rupture", v:"Open approach for thoracoabdominal — combined injury"},
      {k:"ER thoracotomy", v:"Penetrating trauma: cardiac arrest or peri-arrest; blunt trauma: very rare benefit"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Simple rib fractures: adequate analgesia (epidural preferred for ≥4 fractures); physiotherapy; chest physiotherapy",
      "Simple PTX <2cm: O₂ + observation; >2cm or symptomatic: ICD",
      "Small haemothorax: ICD if >300mL, symptomatic, or not resolving",
      "Pulmonary contusion: O₂, fluid restriction, early physiotherapy; mechanical ventilation if failing"
    ],
    medical: [
      "Thoracic epidural analgesia: gold standard for rib fractures — improves respiratory function",
      "IV or epidural morphine; paracetamol; NSAIDs (avoid in renal impairment)",
      "High-flow O₂, CPAP/BiPAP for respiratory failure without intubation in selected patients"
    ],
    surgical: [
      {name:"Intercostal drain (ICD) insertion", when:"Tension PTX (after needle decompression), symptomatic pneumothorax, haemothorax, empyema", notes:"5th ICS mid-axillary line; blunt dissection over rib superior border (avoid neurovascular bundle on inferior rib); 28–32Fr for haemothorax; directed posteriorly and superiorly"},
      {name:"Video-assisted thoracoscopic surgery (VATS)", when:"Retained haemothorax (failed ICD); recurrent PTX; empyema thoracis post-trauma; selected thoracic injuries", notes:"Evacuates retained blood, prevents fibrothorax/empyema; most effective within 10 days"},
      {name:"Thoracotomy (emergency)", when:"Massive haemothorax; cardiac tamponade not responding; great vessel injury; ER thoracotomy criteria", notes:"Posterolateral or anterolateral thoracotomy; ER thoracotomy = clamshell (bilateral anterior thoracotomy + transverse sternotomy) for rapid access"},
      {name:"ER thoracotomy", when:"Penetrating trauma: witnessed arrest or SBP <50 with no response to resuscitation; last resort", notes:"Clamshell incision; release cardiac tamponade; repair cardiac laceration (digital, Foley balloon, suture); cross-clamp descending aorta; internal cardiac massage; survival 15–35% penetrating cardiac; <1% blunt"},
      {name:"TEVAR (thoracic endovascular aortic repair)", when:"Blunt thoracic aortic injury (BTAI) Grade II–IV with haemodynamic stability", notes:"Open repair reserved for very proximal injuries or TEVAR not feasible; 30-day mortality significantly lower with TEVAR"}
    ]
  },
  technique: {
    title: "Emergency Room Thoracotomy (Penetrating Cardiac Injury)",
    prep: [
      "Last resort: penetrating trauma, peri-arrest, no response to resuscitation",
      "Left anterolateral thoracotomy (right or bilateral clamshell if needed)",
      "No time for full prep — rapid cut-to-chest"
    ],
    steps: [
      {n:1, t:"Left anterolateral thoracotomy", d:"4th ICS; left inframammary fold; cut skin, intercostal muscles; open pleura; rib spreader inserted"},
      {n:2, t:"Cardiac tamponade release", d:"Identify pericardium anterior to phrenic nerve; incise pericardium longitudinally; release blood clot; expose heart"},
      {n:3, t:"Cardiac laceration control", d:"Digital pressure on laceration; Foley balloon catheter (inflate in ventricle); horizontal mattress 3-0 Prolene sutures avoiding coronary arteries"},
      {n:4, t:"Internal cardiac massage", d:"Bimanual compression; 60 compressions/min; avoid ventricular laceration"},
      {n:5, t:"Aortic cross-clamp", d:"Identify descending thoracic aorta behind left lung; cross-clamp to redistribute circulation to heart and brain"},
      {n:6, t:"Proceed to OR", d:"Transfer immediately to OR for definitive repair; ER thoracotomy is bridge, not definitive treatment"}
    ],
    pearls: [
      "Clamshell thoracotomy (bilateral anterior): best exposure for penetrating cardiac injury; extend left anterolateral through sternum to right",
      "Foley balloon control: insert Foley through cardiac laceration, inflate balloon to tamponade — bridge to suture repair",
      "Right pneumonectomy survival: 50% mortality; avoid if possible; pulmonary hilar cross-clamp first"
    ]
  },
  guidelines: [
    {src:"ATLS 10th Edition: Thoracic trauma"},
    {src:"EAST: Practice management guidelines for chest trauma"},
    {src:"WSES 2018: Blunt and penetrating chest trauma guidelines"},
    {src:"AAST: Thoracic aortic injury management (TEVAR)"}
  ],
  pearls: [
    "Tension pneumothorax is a CLINICAL diagnosis — decompress immediately with needle; do NOT wait for CXR",
    "Sucking chest wound: 3-sided occlusive dressing immediately; not full occlusion (prevents tension PTX from developing)",
    "Flail chest: the lung contusion underneath kills the patient, not the paradoxical chest wall movement"
  ],
  mistakes: [
    "Ordering CXR for suspected tension PTX — decompress immediately (2nd ICS midclavicular or 4th/5th ICS MAL)",
    "ICD insertion below 5th ICS — enters abdominal cavity (diaphragm higher than expected in supine position)",
    "ER thoracotomy for blunt trauma arrest — survival so poor it is almost never indicated"
  ]
},
{
  id: "burns",
  dept: "trauma",
  name: "Burns",
  latin: "Combustio",
  organ: "Skin/systemic",
  severity: "high",
  tags: ["trauma","burns","fluid","critical"],
  hero: "Immediate priorities: stop the burning process, airway assessment, fluid resuscitation (Parkland formula), wound care. Early excision and grafting within 48–72h improves survival in major burns.",
  keypoints: [
    "Rule of Nines: head 9%, each arm 9%, each leg 18%, trunk front 18%, trunk back 18%, perineum 1%",
    "Parkland formula: 4 × weight (kg) × %TBSA burned = mL Hartmann's in 24h; half in first 8h from injury",
    "Inhalation injury: intubate early — airway oedema can close airway within hours",
    "Circumferential full-thickness burns: escharotomy to release compartment syndrome",
    "Early excision and skin grafting (48–72h): reduces mortality, infection, ICU stay"
  ],
  differentials: ["Toxic epidermal necrolysis (TEN)","Stevens-Johnson syndrome","Necrotising fasciitis","Chemical burn","Radiation burn","Non-accidental injury (children)"],
  mnemonics: [
    {name:"Parkland formula", text:"4 × kg × %TBSA = mL Hartmann's in 24h; give HALF in FIRST 8h, remaining HALF in next 16h (timing from TIME OF BURN not hospital arrival)"},
    {name:"Rule of 9s", text:"Head 9 + each Arm 9 + Chest 9 + Abdomen 9 + Upper back 9 + Lower back 9 + each Thigh 9 + each Lower leg 9 + Genitalia 1 = 100%"}
  ],
  overview: {
    definition: "Tissue injury from thermal, chemical, electrical, or radiation energy causing protein denaturation and cell death, classified by depth and total body surface area (TBSA).",
    epidemiology: "200,000 hospital admissions/year in UK; 300 deaths/year. Major burns (>20% TBSA): specialist burns centre referral. Children and elderly: higher mortality at lower %TBSA.",
    pathophysiology: "Zone of coagulation (central necrosis) → zone of stasis (ischaemic, salvageable with early resuscitation) → zone of hyperaemia (inflammatory, full recovery). Systemic: massive capillary leak → hypovolaemia; immunosuppression; hypermetabolism (REE ×2); inhalation injury → ARDS.",
    classification: [
      "Superficial (1st degree): epidermis only; erythema; painful; heals without grafting",
      "Partial thickness — superficial dermal: blistering; very painful; heals <14 days",
      "Partial thickness — deep dermal: pale, insensate; may need grafting if not healed by 21 days",
      "Full thickness (3rd degree): leathery, insensate, no blanching; always requires grafting",
      "Sub-dermal (4th degree): bone/tendon/muscle involved; amputation/flap reconstruction"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: flame, scald, contact, chemical, electrical, radiation",
      "Duration of exposure (prolonged contact worsens depth)",
      "Enclosed space fire (inhalation injury risk)",
      "Loss of consciousness (CO poisoning)",
      "Time of injury (crucial for Parkland timing)",
      "First aid applied (cooling — reduces depth if applied within 20 min)"
    ],
    examination: [
      "Airway: singed nasal hairs, facial burns, carbonaceous sputum, hoarseness, stridor — intubate early",
      "Burn assessment: surface area (Rule of Nines or Lund & Browder chart) + depth (colour, blistering, sensation, blanching)",
      "Circumferential burns: assess for compartment syndrome (palpable tension, distal pulses, SpO₂)",
      "Chemical burns: identify agent, pH of wound (neutralise — NOT with alkaline if acid, and vice versa)",
      "Electrical burns: entry/exit wounds; cardiac monitoring (arrhythmia); deep tissue necrosis disproportionate to surface appearance"
    ],
    investigations: [
      {name:"COHb (carboxyhaemoglobin)", role:"CO poisoning in enclosed space fire; >25% = severe; treatment: 100% O₂ for ≥6h; SpO₂ unreliable"},
      {name:"CXR", role:"Inhalation injury; aspiration; mediastinal assessment"},
      {name:"Fibreoptic bronchoscopy", role:"Confirms inhalation injury (erythema, oedema, carbonaceous deposits in airways); assess level of injury"},
      {name:"ECG/cardiac monitoring", role:"Electrical burns: arrhythmias; ventricular fibrillation; prolonged QT"},
      {name:"Urine myoglobin/CK", role:"Electrical burns: rhabdomyolysis — aggressive fluid resuscitation to maintain UO >1mL/kg/hr"},
      {name:"FBC, U&E, LFTs, coagulation, blood cultures", role:"Baseline; monitor electrolytes during resuscitation; sepsis screen"}
    ]
  },
  criteria: {
    title: "Burns Centre Referral Criteria (ABA / NBCRE)",
    items: [
      {k:">10% TBSA partial thickness", v:"Adult; >5% in child or elderly"},
      {k:"Any full-thickness burn", v:""},
      {k:"Burns to face, hands, feet, genitalia, perineum, major joints", v:""},
      {k:"Circumferential burns", v:"Limb or chest"},
      {k:"Inhalation injury", v:"Chemical burns"},
      {k:"Electrical burns", v:"Lightning injury"},
      {k:"Burns with significant comorbidity", v:"Paediatric, elderly, pregnancy, immunosuppressed"},
      {k:"Suspected non-accidental injury", v:"Children"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Minor burns (<10% TBSA, partial thickness, not special area): outpatient wound care; moist non-adherent dressings (Mepitel, mepilex); change every 3–5 days",
      "Cooling: cool running water 20 min within 20 min of injury (reduces depth); do NOT use ice",
      "Elevate burned limbs; analgesia"
    ],
    medical: [
      "Parkland formula: 4 × kg × %TBSA = mL Hartmann's in 24h; give half in first 8h from TIME OF BURN (not arrival); UO target 0.5–1mL/kg/hr",
      "Colloid (5% albumin): add at 12–24h in large burns to reduce total crystalloid volume (Modified Parkland/Muir-Barclay)",
      "High-protein enteral nutrition via NGT within 6–12h of injury: burns are most hypermetabolic injuries",
      "Prophylactic antibiotics: NOT recommended routinely; treat sepsis when occurs",
      "Tetanus prophylaxis"
    ],
    surgical: [
      {name:"Escharotomy", when:"Circumferential full-thickness burn to limb (compartment syndrome) or chest (restrictive ventilation)", notes:"Incise eschar longitudinally along medial and lateral limb (not crossing joint lines perpendicularly); chest: bilateral anterior axillary lines + transverse subcostal; does not require anaesthesia in full-thickness burn (insensate)"},
      {name:"Early tangential excision and skin grafting (STSG)", when:"Deep partial-thickness and full-thickness burns; perform at 48–72h (early excision); reduces infection, sepsis, ICU stay", notes:"Tangential shaving until capillary bleeding; apply split-thickness skin graft (0.25–0.4mm) from donor site (thigh, scalp); meshed 1.5:1 or 2:1; VAC over graft × 5 days"},
      {name:"Temporary wound coverage", when:"Massive burns (>40% TBSA) where donor sites insufficient", notes:"Allografts (cadaveric skin) as biological dressing; xenografts (porcine); Biobrane/Integra — scaffold for later autografting"},
      {name:"Fasciotomy", when:"Electrical burns or circumferential burns with compartment syndrome below eschar", notes:"Full compartment releases of forearm, hand, lower leg as required; neurovascular examination before and after"}
    ]
  },
  technique: {
    title: "Limb Escharotomy",
    prep: [
      "No anaesthesia needed for full-thickness burns (insensate)",
      "Sterile field; scalpel or electrocautery",
      "Doppler probe to assess distal pulses pre and post"
    ],
    steps: [
      {n:1, t:"Medial limb incision", d:"Longitudinal incision from proximal to distal burn margin along medial aspect of limb"},
      {n:2, t:"Lateral limb incision", d:"Parallel longitudinal incision along lateral aspect — sufficient to release constriction"},
      {n:3, t:"Depth", d:"Full thickness through eschar to viable subcutaneous fat; oedematous fat should bulge through incision confirming decompression"},
      {n:4, t:"Hand escharotomy", d:"If hands involved: dorsal longitudinal incisions between metacarpals; medial + lateral digital incisions for fingers"},
      {n:5, t:"Chest escharotomy", d:"Bilateral anterior axillary lines + transverse subcostal (forming H-pattern); allows chest wall movement for ventilation"},
      {n:6, t:"Haemostasis", d:"Suture tie or cauterise visible bleeders in viable tissue; pack loosely; non-adherent dressings"}
    ],
    pearls: [
      "Do NOT cross joints perpendicularly — longitudinal cuts avoid joint contracture",
      "Chest escharotomy improves ventilator compliance dramatically in circumferential chest burns",
      "Fasciotomy may be needed in addition to escharotomy if muscle compartment pressure elevated"
    ]
  },
  guidelines: [
    {src:"NBCRE (National Burn Care Review): Standards and strategy for burn care"},
    {src:"ISBI Practice Guidelines for Burn Care 2016"},
    {src:"ABA: American Burn Association guidelines"}
  ],
  pearls: [
    "Airway burns: intubate early — oedema can close airway within 2–4 hours making intubation impossible",
    "Parkland formula is a GUIDE — titrate to urine output 0.5–1mL/kg/hr; over-resuscitation causes ACS and pulmonary oedema",
    "Electrical burns: deep tissue destruction is far more extensive than surface burns suggest — plan for extensive debridement"
  ],
  mistakes: [
    "Using Parkland timing from hospital arrival, not time of injury — underresuscitates patients with delayed presentation",
    "Ice application to burns — causes vasoconstriction and worsens depth",
    "Delaying airway intubation in facial burns + hoarseness — oedema makes late intubation impossible"
  ]
},
{
  id: "compartment-limb",
  dept: "trauma",
  name: "Acute Compartment Syndrome (Limb)",
  latin: "Syndroma compartimentale acutum membri",
  organ: "Extremity",
  severity: "high",
  tags: ["trauma","orthopaedic","vascular","emergency"],
  hero: "Rising pressure within closed fascial compartment causes ischaemia. Diagnosis is clinical. Irreversible ischaemia after 6–8 hours. Emergent fasciotomy is the only treatment.",
  keypoints: [
    "Compartment pressure >30mmHg (or within 30mmHg of diastolic BP) = fasciotomy",
    "Classic 6 Ps: Pain (out of proportion) + Pressure + Paresis + Paraesthesia + Pallor + Pulselessness (late)",
    "Pain on passive STRETCH of muscles in compartment = earliest and most reliable sign",
    "Do NOT wait for absent pulses — loss of pulses is late and indicates completed ischaemia",
    "Complete 4-compartment lower leg fasciotomy: 2 incisions (medial + lateral)"
  ],
  differentials: ["Deep vein thrombosis","Peripheral vascular disease","Cellulitis","Arterial injury with ischaemia","Rhabdomyolysis without compartment syndrome"],
  mnemonics: [
    {name:"6 Ps (in order of appearance)", text:"Pain (passive stretch) → Pressure → Paraesthesia → Paresis → Pallor → Pulselessness (LATE — 6th sign, ischaemia already complete)"}
  ],
  overview: {
    definition: "Elevated pressure within a closed fascial compartment that compromises tissue perfusion, causing ischaemia, nerve and muscle damage if untreated.",
    epidemiology: "Tibial fractures most common cause (40%). Also: crush injury, burns, reperfusion after ischaemia, tight dressings/casts, prolonged limb compression (positional). Annual incidence 7.3/100,000. Forearm ACS also common (Colles fracture, crush).",
    pathophysiology: "Trauma/oedema/haemorrhage → ↑compartment pressure → venous pressure exceeded → reduced arteriovenous gradient → tissue ischaemia → further oedema → escalating pressure cycle. Muscle necrosis from 4–6h ischaemia; nerve ischaemia from 2h.",
    classification: [
      "Acute: surgical emergency; hours to days from initial injury",
      "Subacute: slow-onset, less clear timing",
      "Lower leg: 4 compartments (anterior, lateral, deep posterior, superficial posterior)",
      "Forearm: 3 compartments (volar, dorsal, mobile wad)",
      "Thigh: 3 compartments (anterior, posterior, medial)",
      "Foot: 9 compartments",
      "Gluteal: rare; prolonged positional compression"
    ]
  },
  diagnosis: {
    history: [
      "Tibial or forearm fracture (most common precipitant)",
      "Crush injury or prolonged compression",
      "Reperfusion after arterial injury/embolectomy",
      "Burns, tight cast, exertional (athletes)",
      "Rapidly increasing, severe pain in affected limb — out of proportion to injury"
    ],
    examination: [
      "Pain on passive stretch of muscles in compartment — most sensitive early sign",
      "Tense, 'woody' feel of affected compartment on palpation",
      "Paraesthesia: tingling/numbness in distribution of nerves in affected compartment",
      "Paresis: weakness of muscles in compartment",
      "Pallor and pulselessness are LATE signs — indicate completed ischaemia, not early warning"
    ],
    investigations: [
      {name:"Compartment pressure measurement", role:"Stryker pressure monitor or arterial line transducer; absolute threshold >30mmHg OR delta P (diastolic – compartment pressure) <30mmHg = fasciotomy"},
      {name:"CK (creatine kinase)", role:"Elevated in rhabdomyolysis; very high CK (>5000) suggests significant muscle necrosis"},
      {name:"Urine myoglobin", role:"Cola-coloured urine; myoglobinuria; aggressive IV fluids to maintain UO >1mL/kg/hr"},
      {name:"Doppler/duplex USS", role:"Assess arterial flow — loss of distal pulses indicates completed ischaemia; do NOT rely on this to diagnose early ACS"}
    ]
  },
  criteria: {
    title: "Fasciotomy Threshold",
    items: [
      {k:"Absolute compartment pressure", v:">30mmHg → fasciotomy"},
      {k:"Delta P (diastolic BP – compartment pressure)", v:"<30mmHg → fasciotomy (more physiological threshold)"},
      {k:"Clinical diagnosis", v:"Classic signs present = fasciotomy regardless of measured pressure"},
      {k:"Obtunded/unconscious patient", v:"Lower threshold — cannot assess pain; measure pressure more liberally"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Remove all external compressive dressings/casts IMMEDIATELY (can reduce pressure 30–65%)",
      "Elevate limb to HEART level only (not above — reduces arterial inflow)",
      "High-flow O₂",
      "Rhabdomyolysis: aggressive IV fluids (1–2L/h initially) to maintain UO >1mL/kg/hr; sodium bicarbonate (urinary alkalinisation)"
    ],
    medical: [
      "IV mannitol: osmotic diuresis; may reduce compartment pressure slightly; NOT a substitute for fasciotomy",
      "Analgesia: IV opioid; do not mask pain with excessive analgesia before diagnosis confirmed"
    ],
    surgical: [
      {name:"4-compartment lower leg fasciotomy", when:"All lower leg ACS — emergency, within 6h of diagnosis for best outcome", notes:"2 incisions: lateral (anterior + lateral compartments) and medial (superficial + deep posterior compartments); 15–20cm skin incisions; full fascial release; leave skin open; return at 48–72h for wound reassessment"},
      {name:"Forearm volar + dorsal fasciotomy", when:"Forearm ACS (Colles fracture, crush, IV extravasation)", notes:"Extended carpal tunnel release → volar fasciotomy (mobile wad + volar compartment); dorsal fasciotomy if both affected; leave wounds open"},
      {name:"Delayed primary closure / split skin graft", when:"After compartment swelling resolved (3–5 days); wound clean", notes:"Shoelace technique (vessel loop) for progressive closure; STSG if cannot close primarily"},
      {name:"Debridement of necrotic muscle", when:"Delayed presentation (>6–8h) with established muscle necrosis; at fasciotomy or relook", notes:"Non-viable muscle: dark, does not bleed, does not contract to electrocautery — excise; reduces rhabdomyolysis and sepsis burden"}
    ]
  },
  technique: {
    title: "4-Compartment Lower Leg Fasciotomy",
    prep: [
      "GA or spinal; tourniquet optional",
      "Supine; leg prepared to hip"
    ],
    steps: [
      {n:1, t:"Lateral incision", d:"10–15cm longitudinal incision over fibula (between 2cm anterior fibula for anterior compartment and 2cm posterior fibula for lateral); skin and subcutaneous tissue"},
      {n:2, t:"Anterior compartment release", d:"Identify anterior compartment fascia anterior to fibula; longitudinal fasciotomy full length of incision with scissors"},
      {n:3, t:"Lateral compartment release", d:"Identify lateral compartment fascia posterior to fibula; open longitudinally; identify and protect common peroneal nerve near fibular head"},
      {n:4, t:"Medial incision", d:"2cm posterior to tibia; 15cm longitudinal; skin and subcutaneous tissue"},
      {n:5, t:"Superficial posterior release", d:"Fasciotomy of superficial posterior compartment (gastrocnemius/soleus)"},
      {n:6, t:"Deep posterior release", d:"Identify and divide fascia deep to FDL; release deep posterior compartment (tibialis posterior, FHL, FDL) — most missed compartment!"},
      {n:7, t:"Open wounds", d:"Leave all wounds completely open; non-adherent moist dressings; VAC therapy if available; plantar fasciotomy if foot ACS also suspected"}
    ],
    pearls: [
      "Deep posterior compartment: most commonly inadequately released — ensure it is specifically opened",
      "Common peroneal nerve: protect at lateral fibular head during lateral compartment release",
      "Delayed presentation (>12h): extensive debridement of necrotic muscle required; may need amputation in extreme cases"
    ]
  },
  guidelines: [
    {src:"BOAST (British Orthopaedic Association Standards for Trauma): ACS management"},
    {src:"EAST Practice Management Guidelines: Acute compartment syndrome"},
    {src:"McQueen & Court-Brown: Compartment monitoring in tibial fractures"}
  ],
  pearls: [
    "Passive stretch pain is the earliest and most reliable sign — do not wait for Ps 4–6",
    "Never elevate limb above heart in ACS — reduces arterial inflow below already compromised threshold",
    "Fasciotomy wounds are left open — PRIMARY closure under tension recreates compartment syndrome"
  ],
  mistakes: [
    "Waiting for pulse loss before fasciotomy — this is the 6th P and indicates completed ischaemia",
    "Incomplete fasciotomy — missing the deep posterior compartment is the most common technical error",
    "Elevating limb above heart — reduces distal perfusion pressure in an already ischaemic limb"
  ]
},
{
  id: "renal-trauma",
  dept: "trauma",
  name: "Renal Trauma",
  latin: "Trauma renis",
  organ: "Kidney",
  severity: "moderate",
  tags: ["trauma","kidney","haematuria","blunt"],
  hero: "Most renal injuries (95%) managed non-operatively. Haematuria is the cardinal sign but does not correlate with injury severity. CT urogram is the investigation of choice.",
  keypoints: [
    "Blunt trauma: 80%; most common solid organ injury after spleen and liver",
    "Haematuria present in 95% but does NOT correlate with injury grade",
    "AAST Grade I–III: NOM; Grade IV–V: angioembolisation ± surgery",
    "Grade V vascular injuries (renal artery avulsion): urgent surgery; warm ischaemia time critical (<4–6h for reconstruction)",
    "Urinary extravasation alone is NOT an indication for surgery — most resolve with ureteral stenting"
  ],
  differentials: ["Splenic trauma","Adrenal haematoma","Retroperitoneal haematoma","Renal cell carcinoma (incidental finding)","Bladder injury"],
  mnemonics: [
    {name:"Renal trauma NOM", text:"Grade I–III = NOM always; Grade IV = NOM ± embolisation; Grade V = surgery (renal artery avulsion = nephrectomy likely)"}
  ],
  overview: {
    definition: "Injury to the renal parenchyma, collecting system, or renal vascular pedicle from blunt or penetrating trauma.",
    epidemiology: "10–17% of abdominal trauma patients. Blunt: 80% (RTA, fall). Penetrating: 20% (GSW, stab — higher grade injuries). Kidneys vulnerable due to retroperitoneal location + mobile pedicle.",
    pathophysiology: "Blunt: parenchymal fracture, perirenal haematoma, devascularisation of segments. Vascular pedicle injury: sudden deceleration → intimal tear → thrombosis. Penetrating: direct laceration of parenchyma/vessels.",
    classification: [
      "AAST Grade I: contusion or subcapsular haematoma without parenchymal laceration",
      "Grade II: non-expanding haematoma; laceration <1cm depth without urinary extravasation",
      "Grade III: laceration >1cm depth without collecting system or urinary extravasation",
      "Grade IV: laceration through cortex, medulla, collecting system; main renal artery/vein injury",
      "Grade V: completely shattered kidney; renal pedicle avulsion"
    ]
  },
  diagnosis: {
    history: [
      "Blunt flank/back trauma, rib fractures, lumbar vertebral fractures",
      "Gross haematuria (most common presentation) — but microscopic haematuria in Grade I–II",
      "Flank pain, flank bruising, 11th/12th rib tenderness",
      "Haemodynamic instability with retroperitoneal haematoma"
    ],
    examination: [
      "Flank bruising, Grey Turner's sign (delayed)",
      "Flank tenderness, palpable mass (large haematoma)",
      "Haemodynamic assessment (retroperitoneal can contain large volume)",
      "Urinalysis: gross vs microscopic haematuria"
    ],
    investigations: [
      {name:"Urinalysis (dipstick)", role:"Haematuria present in 95%; but Grade V vascular pedicle injury may have NO haematuria (complete occlusion)"},
      {name:"CT urogram (3-phase: non-contrast + arterial + delayed excretory)", role:"Gold standard: grades injury; identifies vascular injury (absent nephrogram = vascular), collecting system injury (extravasation on delayed phase), associated injuries"},
      {name:"CT angiogram", role:"Grade IV–V injuries: renal artery/vein assessment; identifies arterial blush for embolisation"},
      {name:"IVU (intravenous urogram)", role:"Rarely used now; intraoperative one-shot IVU: confirms contralateral kidney function before nephrectomy"}
    ]
  },
  criteria: {
    title: "AAST Renal Injury Scale and Management",
    items: [
      {k:"Grade I–III", v:"NOM: bed rest, hydration, serial Hb; analgesia; serial urine output"},
      {k:"Grade IV with blush", v:"Angioembolisation (selective); consider stent if collecting system injury"},
      {k:"Grade IV vascular", v:"Angioembolisation or surgical repair depending on haemodynamics"},
      {k:"Grade V — pedicle avulsion", v:"Urgent surgery: nephrectomy vs revascularisation (warm ischaemia time <6h for reconstruction)"},
      {k:"Urinary extravasation alone", v:"NOT indication for surgery — percutaneous drainage + ureteral stent; most resolve"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Grade I–III NOM: bed rest until haematuria clears; serial FBC; analgesia",
      "Discharge when macrohaematuria resolves; return if worsening haematuria or fever",
      "Follow-up imaging at 4–6 weeks for Grade III+ injuries"
    ],
    medical: [
      "IV fluids and blood transfusion as needed",
      "IV antibiotics if collecting system injury (prevent perinephric abscess)"
    ],
    surgical: [
      {name:"Angioembolisation", when:"Grade III–IV with arterial blush; active haemorrhage not controlled with NOM; arteriovenous fistula; pseudoaneurysm", notes:"Selective embolisation preferred (preserves renal function); proximal main renal artery embolisation as last resort before nephrectomy"},
      {name:"Nephrectomy", when:"Grade V pedicle injury beyond repair; uncontrolled haemorrhage; non-salvageable kidney; after failed embolisation", notes:"Confirm contralateral kidney function first (one-shot IVU intraoperatively); rapid nephrectomy in damage control setting"},
      {name:"Renal reconstruction", when:"Pedicle injury with warm ischaemia <4–6h; young patient; single kidney; bilateral injuries", notes:"Renal artery repair or bypass graft; complex vascular surgery; success rate higher if reperfusion within 4h"},
      {name:"Collecting system repair / ureteral stenting", when:"Grade IV with persistent urinary extravasation not resolving within 4 weeks", notes:"Percutaneous drainage of urinoma; retrograde ureteral stent; delayed surgical repair if stent fails"}
    ]
  },
  technique: {
    title: "Retroperitoneal Approach for Renal Trauma (Nephrectomy)",
    prep: [
      "Confirm contralateral kidney function: one-shot IVU (2mL/kg IV contrast, KUB X-ray at 10 min)",
      "Lateral or flank approach OR midline transperitoneal",
      "Midline if associated abdominal injuries"
    ],
    steps: [
      {n:1, t:"Renal pedicle control", d:"Transperitoneal: incise posterior peritoneum at base of mesentery medial to kidney; identify and control renal artery and vein before mobilising kidney (reduces blood loss)"},
      {n:2, t:"Gerota's fascia entry", d:"Open Gerota's fascia; evacuate haematoma; assess kidney viability"},
      {n:3, t:"Decision: repair vs nephrectomy", d:"Viable segments, intact pedicle, controlable haemorrhage → repair; shattered, devascularised, uncontrollable haemorrhage → nephrectomy"},
      {n:4, t:"Nephrectomy", d:"Ligate renal artery and vein separately; divide ureter; remove kidney; haemostasis of renal bed"},
      {n:5, t:"Drain placement", d:"Closed suction drain near renal bed; essential if collecting system disruption"}
    ],
    pearls: [
      "Medial vascular control BEFORE opening Gerota's fascia prevents loss of retroperitoneal tamponade and massive haemorrhage",
      "Intraoperative IVU takes 10 minutes — perform while team is preparing OR to avoid unnecessary nephrectomy",
      "Zone I retroperitoneal haematoma (central, above aortic bifurcation): always explore — vascular injury likely"
    ]
  },
  guidelines: [
    {src:"EAST Practice Management Guidelines: Renal trauma"},
    {src:"EAU Guidelines 2023: Urological trauma"},
    {src:"AAST: Renal injury organ scaling"}
  ],
  pearls: [
    "Grade V renal artery avulsion: no haematuria (complete occlusion); CT shows absent nephrogram on affected side",
    "95% of renal injuries managed non-operatively — resist operative intervention unless haemodynamically compromised",
    "Delayed haemorrhage (days to weeks): pseudoaneurysm or AV fistula → angioembolisation"
  ],
  mistakes: [
    "Nephrectomy without confirming contralateral kidney function — post-operative anuria and renal failure",
    "Operating for urinary extravasation alone — most resolve with stenting and/or drainage",
    "Not controlling renal pedicle before opening Gerota's fascia in unstable bleeding kidney"
  ]
},
{
  id: "traumatic-brain",
  dept: "trauma",
  name: "Traumatic Brain Injury (Surgical Perspective)",
  latin: "Laesio encephali traumatica",
  organ: "Brain",
  severity: "high",
  tags: ["trauma","neurosurgery","brain","haematoma"],
  hero: "General surgeon must recognise surgical TBI requiring urgent neurosurgical intervention. An expanding extradural haematoma can be rapidly fatal — classic lucid interval followed by herniation. Neurosurgical emergency.",
  keypoints: [
    "Extradural haematoma (EDH): temporal, arterial (middle meningeal artery), lucid interval → deterioration; CT: biconvex hyperdense; emergency craniotomy",
    "Subdural haematoma (SDH): bridging vein injury, often in elderly/alcoholics; crescentic CT appearance; acute = emergency evacuation",
    "Primary survey: maintain ABCs — hypotension + hypoxia doubly lethal in TBI",
    "Target: SBP >90mmHg, SpO₂ >95%, normocapnia (PaCO₂ 35–45mmHg)",
    "ICP management: HOB 30°, osmotherapy (mannitol/hypertonic saline), avoid hypercapnia; definitive = neurosurgery"
  ],
  differentials: ["Extradural haematoma","Acute subdural haematoma","Intracerebral haematoma","Diffuse axonal injury","Cerebral contusion","Subarachnoid haemorrhage"],
  mnemonics: [
    {name:"EDH vs SDH", text:"EDH = biconvex (lens-shaped) + lucid interval + arterial (MMA); SDH = crescent + bridging veins + no lucid interval typically + elderly"},
    {name:"Cushing's triad (impending herniation)", text:"Hypertension + Bradycardia + Irregular respiration = brain herniation; herniation = immediately contact neurosurgeons"}
  ],
  overview: {
    definition: "Injury to the brain from external mechanical force, classified as primary (direct) or secondary (hypoxia, hypotension, oedema, raised ICP). General surgeons must identify neurosurgical emergencies.",
    epidemiology: "1.5 million TBI presentations/year in UK. GCS-based severity: mild (13–15), moderate (9–12), severe (3–8). TBI cause 40% of trauma deaths. EDH: 2–3% of head injuries but up to 90% survival with rapid surgery.",
    pathophysiology: "Primary injury: cortical laceration, axonal stretching. Secondary injury: raised ICP → ↓CPP (CPP = MAP – ICP) → ischaemia. Herniation: uncal (CN III palsy + ipsilateral hemiparesis) → Duret haemorrhage → death.",
    classification: [
      "Mild TBI: GCS 13–15; brief LOC; CT normal or minor abnormality",
      "Moderate TBI: GCS 9–12; amnesia; CT abnormality",
      "Severe TBI: GCS 3–8; unable to follow commands",
      "EDH: biconvex haematoma, arterial (MMA), temporal",
      "Acute SDH: crescentic, bridging veins, high-density acute; elderly, alcoholic, anticoagulated",
      "Chronic SDH: low-density crescent; elderly; minor trauma, anticoagulants",
      "Contusion, ICH, DAI (diffuse axonal injury)"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: fall, RTA, assault, direct blow",
      "Loss of consciousness: duration",
      "Lucid interval followed by deterioration = EDH until proven otherwise",
      "Deteriorating GCS post-injury",
      "Anticoagulants, alcohol (alter presentation and prognosis)",
      "Vomiting, seizures"
    ],
    examination: [
      "GCS: eyes (1–4) + verbal (1–5) + motor (1–6); document and trend",
      "Pupils: unilateral dilatation + fixed = ipsilateral herniation (ipsilateral EDH → compression CN III); bilateral fixed/dilated = bilateral herniation",
      "Cushing's triad: hypertension + bradycardia + irregular breathing = impending herniation; call neurosurgeons IMMEDIATELY",
      "Scalp lacerations, boggy temporal swelling (EDH)",
      "Battle's sign (mastoid bruising), raccoon eyes (base of skull fracture)"
    ],
    investigations: [
      {name:"CT head (non-contrast)", role:"First line; identifies haematoma (hyperdense acute blood), midline shift, effacement of sulci, hydrocephalus, skull fracture; perform immediately in GCS <15, lucid interval, focal neurology"},
      {name:"CT C-spine", role:"All significant head trauma; cervical spine injury in 5–10% of head trauma"},
      {name:"CT angiogram", role:"If vascular injury suspected (carotid/vertebral artery dissection)"},
      {name:"ABG", role:"Ensure normoxia (PaO₂ >13kPa), normocapnia (PaCO₂ 35–45); hypercapnia dilates cerebral vessels → ↑ICP"}
    ]
  },
  criteria: {
    title: "Neurosurgical Intervention Thresholds",
    items: [
      {k:"EDH", v:"Any EDH >30mL volume OR >15mm thickness OR >5mm midline shift → urgent craniotomy regardless of GCS; any deterioration in GCS"},
      {k:"Acute SDH", v:">10mm thickness OR >5mm midline shift → urgent craniotomy; GCS decline of >2 points"},
      {k:"ICP", v:">20mmHg sustained: escalate medical management; >25mmHg refractory = decompressive craniectomy"},
      {k:"Decompressive craniectomy", v:"Refractory raised ICP not controlled medically; malignant MCA infarct with herniation"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "ABCDE resuscitation: maintain SBP >90mmHg (cerebral perfusion), SpO₂ >95%, normoglycaemia",
      "Head of bed 30° (reduces ICP without reducing CPP significantly)",
      "Avoid hyperthermia (worsens secondary injury), control seizures (phenytoin/levetiracetam)",
      "Mild/moderate TBI: CT head; observation; neuro obs every 30 min"
    ],
    medical: [
      "Mannitol 0.25–1g/kg IV: acute reduction of ICP; osmotic dehydration; avoid in haemorrhagic shock (worsens haemodynamic instability)",
      "Hypertonic saline (3%): alternative to mannitol; preferred in haemodynamic instability",
      "Hyperventilation (target PaCO₂ 30–35mmHg): temporary measure only in acute herniation — causes cerebral vasoconstriction; do NOT use prophylactically",
      "Reverse anticoagulation urgently: FFP/PCC/vitamin K for warfarin; andexanet alpha for rivaroxaban; idarucizumab for dabigatran"
    ],
    surgical: [
      {name:"Emergency craniotomy (EDH)", when:"Any EDH meeting criteria (>30mL, >15mm, midline shift >5mm, or GCS deterioration)", notes:"Neurosurgical emergency; time-to-surgery critical; temporal craniotomy; evacuation of clot; control of middle meningeal artery; mortality drops from 60% to <5% with rapid surgery"},
      {name:"Craniotomy for acute SDH", when:"Acute SDH >10mm or midline shift >5mm or GCS decline ≥2 points", notes:"Frontoparietotemporal craniotomy; evacuate haematoma; brain often very swollen — may need decompressive craniectomy"},
      {name:"Decompressive craniectomy", when:"Refractory raised ICP (>25mmHg) not controlled medically; large contusion with impending herniation; malignant swelling post-evacuation", notes:"Bifrontal or unilateral hemispheric craniectomy; duraplasty; bone flap preserved for later cranioplasty; evidence from RESCUEicp trial"},
      {name:"Burr hole for life-threatening EDH without CT", when:"Pupil-dilating herniation in extremis without CT availability; surgical field closest to dilated pupil (ipsilateral side to EDH)", notes:"Last resort; temporal burr hole; convert to craniotomy when feasible — used in resource-limited or extreme circumstances"}
    ]
  },
  technique: {
    title: "Initial Resuscitation Before Neurosurgical Transfer",
    prep: [
      "General surgeon's role: stabilise before neurosurgery",
      "Call neurosurgeons EARLY — concurrent management"
    ],
    steps: [
      {n:1, t:"Airway", d:"GCS ≤8 = intubate (neuroprotective intubation: preload with lidocaine 1.5mg/kg, rocuronium + propofol/ketamine); avoid hypoxia during intubation"},
      {n:2, t:"Breathing", d:"Target SpO₂ >95%, PaO₂ >13kPa; normocapnia PaCO₂ 35–45mmHg; gentle ventilation; avoid PEEP >5cmH₂O"},
      {n:3, t:"Circulation", d:"Target SBP >90mmHg (110–120 if TBI alone); use noradrenaline NOT excessive fluids; correct haemorrhagic shock with blood products"},
      {n:4, t:"Herniation management", d:"Pupil dilatation + Cushing's = herniation; mannitol 1g/kg IV + brief hyperventilation + immediate CT then OR; neurosurgeons in theatre"},
      {n:5, t:"Monitoring", d:"Serial GCS every 30 min; arterial line; ICP monitoring (bolt) once neurosurgery involved"},
      {n:6, t:"Transfer", d:"Maintain monitoring en route; anaesthesia accompanies for interhospital transfer"}
    ],
    pearls: [
      "CPP = MAP – ICP: target CPP >60mmHg; both SBP and ICP are modifiable",
      "Secondary insults kill TBI patients: hypotension, hypoxia, hyperthermia, hyperglycaemia, seizures — prevent all",
      "Lucid interval: patient speaks, then deteriorates = EDH until proven otherwise — CT immediately, neurosurgeons on standby"
    ]
  },
  guidelines: [
    {src:"Brain Trauma Foundation: Guidelines for management of severe TBI 4th edition 2016"},
    {src:"NICE CG176: Head injury assessment and early management"},
    {src:"ATLS 10th Edition: Head trauma"},
    {src:"RESCUEicp trial: Decompressive craniectomy in TBI"}
  ],
  pearls: [
    "Any deteriorating GCS after head injury = CT head immediately; not 'wait and see'",
    "Bilateral fixed dilated pupils post-head injury: not always hopeless — treat reversible causes first (hypoxia, hypotension, herniation drugs)",
    "Penetrating head trauma with object in situ: leave it; neurosurgical removal in controlled OR environment"
  ],
  mistakes: [
    "Allowing hypotension in head-injured patient — SBP <90 doubles mortality in severe TBI",
    "Prophylactic hyperventilation — causes ischaemia; only use for acute herniation as bridge to surgery",
    "Delaying CT for GCS 14–15 patient with amnesia, vomiting, or focal signs — NICE criteria are broad"
  ]
}
];
