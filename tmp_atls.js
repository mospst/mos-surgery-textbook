// tmp_atls.js — ATLS 11th Edition (2023) core protocols
// 4 entries: primary survey, haemorrhagic shock, spinal trauma, trauma airway
const ATLS_DISEASES = [

{
  id: "atls-primary-survey",
  dept: "trauma",
  name: "ATLS Primary Survey (X-ABCDE)",
  latin: "Exploratio primaria traumae",
  organ: "Whole patient — systematic trauma assessment",
  severity: "high",
  tags: ["ATLS","primary survey","X-ABCDE","XABCDE","trauma","resuscitation"],
  flagship: false,
  hero: "X-ABCDE: X = eXsanguinating external haemorrhage controlled first (tourniquet/wound packing), then A–Airway, B–Breathing, C–Circulation, D–Disability, E–Exposure. Used in PHTLS, TCCC, and UK trauma courses. ATLS 10/11 uses the equivalent <C>ABCDE notation where <C> = catastrophic haemorrhage pre-step.",
  keypoints: [
    "X-ABCDE: X = eXsanguinating/external haemorrhage (tourniquet, wound packing) BEFORE airway — same concept as ATLS <C>ABCDE",
    "Notation: PHTLS/TCCC/UK courses = X-ABCDE; ATLS 10/11 = <C>ABCDE (angle brackets = pre-step before formal survey); both mean haemorrhage first",
    "A = Airway + C-spine; B = Breathing; C = Circulation (IVs, FAST, MTP); D = Disability (GCS, pupils); E = Exposure + Environment",
    "Permissive hypotension: SBP 80–90 mmHg target for haemorrhagic shock WITHOUT TBI; contraindicated in TBI (SBP ≥110 mmHg)",
    "Two large-bore peripheral IVs (≥18G) or intraosseous access — IO is first-line when IV access fails",
    "FAST exam (extended): pericardial + 4 abdominal windows + bilateral thoracic — performed during 'C' assessment",
    "Massive transfusion protocol (MTP): activate early; 1:1:1 ratio (pRBC:FFP:platelets); TXA within 3 hours of injury"
  ],
  differentials: [
    "Haemorrhagic shock vs. neurogenic shock (bradycardia + hypotension; no blood loss)",
    "Obstructive shock: tension pneumothorax or cardiac tamponade (treat during 'B' and 'C')",
    "Distributive (septic) shock — rare in acute trauma setting",
    "Traumatic cardiac arrest — reversible causes: 4H+4T"
  ],
  mnemonics: [
    { name: "X-ABCDE vs <C>ABCDE", text: "X-ABCDE (PHTLS/TCCC/UK): X = eXsanguinating haemorrhage; C retains original meaning = Circulation. ATLS <C>ABCDE: same concept, angle brackets = pre-step. Both = haemorrhage control FIRST." },
    { name: "Reversible causes of traumatic arrest (4H+4T)", text: "Hypoxia, Hypovolaemia, Hypothermia, H+ (acidosis) | Tension PTX, Tamponade, Toxins, Thromboembolism" },
    { name: "GCS", text: "Eyes 1–4 (None/Pain/Voice/Spontaneous), Verbal 1–5 (None/Sounds/Words/Confused/Oriented), Motor 1–6 (None/Extension/Flexion/Withdrawal/Localise/Obeys). Min 3, Max 15. Severe TBI ≤8." }
  ],
  overview: {
    definition: "The ATLS primary survey is a structured simultaneous assessment and resuscitation protocol for trauma patients. The 11th edition (2023) prioritises Catastrophic external haemorrhage control before Airway management — the C-ABCDE sequence. Life-threatening conditions are identified and treated in order of immediacy.",
    epidemiology: "Trauma is the leading cause of death in ages 1–44 worldwide. Haemorrhage accounts for 30–40% of trauma deaths, of which 25–35% are preventable with early intervention. The golden hour concept underpins ATLS: early systematic assessment prevents the lethal triad of coagulopathy, hypothermia, and acidosis.",
    pathophysiology: "Haemorrhagic shock: loss of circulating volume → decreased preload → reduced cardiac output → impaired organ perfusion → cellular hypoxia → anaerobic metabolism → lactic acidosis. Concurrent hypothermia impairs coagulation (enzymes dysfunctional below 35°C). Dilutional coagulopathy from crystalloid resuscitation worsens haemostatic failure. The lethal triad (coagulopathy + hypothermia + acidosis) is self-perpetuating.",
    classification: [
      "Class I haemorrhagic shock: <15% blood loss (<750mL); normal HR/BP/RR; no treatment beyond fluid",
      "Class II: 15–30% (750–1500mL); HR 100–120; SBP maintained; narrowed pulse pressure; crystalloid resuscitation",
      "Class III: 30–40% (1500–2000mL); HR >120; SBP falling; confused; blood transfusion required",
      "Class IV: >40% (>2000mL); HR >140; SBP <90; unconscious; massive transfusion protocol + immediate surgery"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism of injury: blunt (velocity, deceleration) vs. penetrating (GSW vs. stab — trajectory, calibre)",
      "Time of injury — crucial for TXA window (<3 hours from injury)",
      "Pre-hospital vital signs and interventions (tourniquet, intubation, fluids given)",
      "AMPLE: Allergies, Medications, Past medical history, Last meal, Events leading to injury",
      "Loss of consciousness at scene — duration, witnessed?"
    ],
    examination: [
      "C: Expose and control all external compressible haemorrhage — tourniquet, wound packing, direct pressure",
      "A: Open airway (jaw thrust + C-spine inline); assess patency; GCS <8 or obstructed = definitive airway",
      "B: Expose chest; assess respiratory rate, symmetry, tracheal position, percussion, auscultation; treat tension PTX and open chest wounds immediately",
      "C: Assess pulse rate + quality; skin colour, temperature, capillary refill; 2 large-bore IVs + bloods; FAST; pelvic spring test (once only)",
      "D: GCS (E+V+M), pupils (size, equality, reactivity), AVPU score, blood glucose",
      "E: Log-roll + full posterior examination; PR exam for sphincter tone, high-riding prostate; temperature — active warming"
    ],
    investigations: [
      { name: "FAST / extended FAST (eFAST)", role: "Pericardial window + 4 abdominal windows + bilateral pleural — done during 'C'; sensitive for haemoperitoneum >200mL and haemopneumothorax" },
      { name: "Trauma series: CXR + AP pelvis", role: "Identify pneumothorax, haemothorax, rib fractures, pelvic ring disruption — often done simultaneously during resuscitation" },
      { name: "VBG / arterial lactate", role: "Base deficit (BD) and lactate: BD <−6 = severe shock; lactate >4 = tissue hypoperfusion. Serial measurements guide resuscitation" },
      { name: "FBC, coagulation (incl. TEG/ROTEM), crossmatch, urine hCG", role: "Baseline haematology; TEG/ROTEM guides targeted transfusion (FFP vs. cryoprecipitate vs. platelets); hCG in all females" },
      { name: "CT whole body (pan-scan)", role: "After primary survey + initial stabilisation — not for haemodynamically unstable patients. Gold standard for injury identification" }
    ]
  },
  criteria: {
    title: "ATLS 11 — Immediate Life Threats (treat during primary survey)",
    items: [
      { k: "C — Catastrophic haemorrhage", v: "Tourniquet for limb; wound packing + direct pressure for junctional. Target SBP 80–90 (no TBI); TXA within 3h of injury" },
      { k: "A — Airway obstruction", v: "Jaw thrust + suction; nasopharyngeal/oropharyngeal airway; RSI if GCS ≤8 or obstruction; surgical airway if failed intubation" },
      { k: "B — Tension pneumothorax", v: "Clinical diagnosis (↓breath sounds + tracheal deviation + shock) → immediate needle decompression (2nd ICS MCL) → chest drain" },
      { k: "B — Open chest wound", v: "3-sided occlusive dressing → chest drain; do NOT seal completely initially" },
      { k: "B — Massive haemothorax", v: "≥1500mL on drain insertion → thoracotomy if ongoing >200mL/h for 2–4h" },
      { k: "C — Cardiac tamponade", v: "Beckʼs triad (hypotension + muffled heart sounds + JVP↑) → pericardiocentesis bridge → surgical drainage (thoracotomy/pericardial window)" },
      { k: "Permissive hypotension target (no TBI)", v: "SBP 80–90 mmHg until surgical haemostasis achieved; do NOT target normotension with fluids" },
      { k: "Permissive hypotension CONTRAINDICATED in TBI", v: "SBP ≥110 mmHg mandatory when suspected TBI to maintain cerebral perfusion pressure" }
    ]
  },
  scoring: ["gcs","rts"],
  management: {
    conservative: [
      "Active external warming: remove wet clothing, warm blankets, warmed IV fluids, Bear Hugger — prevent hypothermia (target >36°C)",
      "Analgesia: IV ketamine (0.2–0.5mg/kg bolus) preferred in trauma — analgesic + maintains BP; avoid opioids if haemodynamically unstable",
      "Non-compressible haemorrhage: REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta) zone I or III as bridge to surgical control"
    ],
    medical: [
      "Tranexamic acid (TXA): 1g IV over 10 min within 3h of injury + 1g over 8h; reduces mortality from haemorrhage (CRASH-2 trial); do NOT give after 3h (increases thrombosis risk)",
      "Massive transfusion protocol (1:1:1): pRBC:FFP:platelets + cryoprecipitate (fibrinogen <2g/L); goal: Hb >70, platelets >50, fibrinogen >2, PT <1.5×normal",
      "Calcium supplementation: ionised calcium falls with massive transfusion (citrate chelation); give 10mL 10% calcium chloride per 4 units pRBC",
      "Vasopressors: noradrenaline for neurogenic shock (not hypovolaemic); vasopressin 0.03 units/min for catecholamine-refractory shock"
    ],
    surgical: [
      { name: "Damage control resuscitation (DCR)", when: "Haemorrhagic shock class III–IV; coagulopathy; hypothermia; acidosis", notes: "Prioritise haemostasis over anatomy restoration. Avoid crystalloid — balanced blood product resuscitation (1:1:1). Correct lethal triad before definitive repair." },
      { name: "Damage control surgery (DCS)", when: "Life-threatening haemorrhage or contamination; physiologically exhausted patient (pH <7.2, temp <35°C, coag failure)", notes: "Stage 1: abbreviated surgery — haemostasis + contamination control + temporary closure. Stage 2: ICU resuscitation 24–48h. Stage 3: planned relook + definitive repair." },
      { name: "Resuscitative thoracotomy", when: "Traumatic arrest or peri-arrest: penetrating trauma <10 min downtime, blunt <5 min", notes: "Left anterolateral thoracotomy + pericardiotomy + internal cardiac massage + aortic cross-clamping. Survival penetrating 15%; blunt <2%." },
      { name: "Surgical airway (cricothyroidotomy)", when: "Cannot intubate, cannot oxygenate (CICO)", notes: "Scalpel-finger-bougie technique (ATLS 11 preferred). 4cm vertical skin incision; stab cricothyroid membrane; insert bougie; railroad 6.0 ETT. Formal tracheostomy within 24–72h." }
    ]
  },
  technique: {
    title: "Trauma Bay Sequence — ATLS 11 C-ABCDE",
    prep: [
      "Team leader designated; roles assigned (airway, IV access, documentation, FAST operator)",
      "Trauma activation: level I (highest) for haemodynamic instability, airway compromise, GCS ≤8, penetrating neck/torso",
      "Equipment ready: RSI drugs drawn, chest drain trays, FAST machine, MTP cooler"
    ],
    steps: [
      { n: 1, t: "X — eXsanguinating haemorrhage", d: "Tourniquet applied proximal to wound (limb) — note time. Wound packing + direct pressure for junctional bleed. Call for MTP if suspected class III–IV. (ATLS notation: <C> pre-step; PHTLS/UK: X step)" },
      { n: 2, t: "A — Airway", d: "Jaw thrust + inline C-spine stabilisation. Clear airway. Assess: phonation, stridor, obstruction. GCS ≤8 or obstructed → RSI (ketamine 1.5mg/kg + suxamethonium 1.5mg/kg). Video laryngoscopy preferred." },
      { n: 3, t: "B — Breathing", d: "Expose chest. Rate + effort + symmetry. Tracheal position. Auscultate. Percuss. Life threats: tension PTX (needle → drain) + open wound (3-sided dressing) + massive HTX (drain). SpO₂ target ≥95%." },
      { n: 4, t: "C — Circulation", d: "2× large-bore IV or IO access. Bloods including crossmatch, TEG/ROTEM, VBG. FAST exam. Pelvic binder if open-book fracture. Activate MTP for class III–IV. TXA if <3h from injury. Target SBP 80–90 (no TBI) or ≥110 (TBI)." },
      { n: 5, t: "D — Disability", d: "GCS (E+V+M). Pupils: size, symmetry, reactivity. AVPU. Blood glucose (treat hypoglycaemia). Lateralising signs → urgent neurosurgical review." },
      { n: 6, t: "E — Exposure", d: "Full exposure (scissors cut all clothing). Log-roll: posterior exam + PR. Temperature: warm blankets + warmed IV fluids immediately." },
      { n: 7, t: "Adjuncts", d: "After primary survey: ECG + SpO₂ + end-tidal CO₂ (if intubated). Urinary catheter (if no urethral injury). NGT/OGT. Portable CXR + pelvis AXR. Decision: CT pan-scan (if stable) or direct to theatre." }
    ],
    pearls: [
      "ATLS 11 key change: Catastrophic haemorrhage control is STEP 1 — tourniquet first, then manage airway",
      "Never remove a tourniquet in the trauma bay — document time of application; reassess in theatre",
      "TXA efficacy drops sharply after 3 hours — give early or not at all (harmful if delayed)",
      "Permissive hypotension (SBP 80–90) ONLY applies when there is NO brain injury — maintain SBP ≥110 for TBI",
      "TEG/ROTEM guides transfusion targets: goal-directed rather than empirical 1:1:1 ratio in resource-rich settings"
    ]
  },
  guidelines: [
    { src: "ATLS 11th Edition — American College of Surgeons, 2023", url: "https://www.facs.org/quality-programs/trauma/atls/" },
    { src: "NICE NG39 — Major trauma: assessment and initial management, 2016", url: "https://www.nice.org.uk/guidance/ng39" },
    { src: "EAST — Practice Management Guidelines for Haemorrhagic Shock", url: "https://www.east.org/education/practice-management-guidelines" },
    { src: "CRASH-2 trial — TXA in trauma haemorrhage (Lancet 2010)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(10)60835-5/fulltext" }
  ],
  pearls: [
    "ATLS 11: C-ABCDE — Catastrophic haemorrhage is now Step 1, before airway",
    "TXA within 3 hours: 1g IV bolus + 1g over 8h (CRASH-2). After 3h = harm, not benefit",
    "Permissive hypotension (SBP 80–90) is CONTRAINDICATED if TBI — maintain SBP ≥110"
  ],
  mistakes: [
    "Targeting normal BP with crystalloid in haemorrhagic shock — worsens coagulopathy and hypothermia",
    "Giving TXA after 3 hours from injury — significantly increases mortality",
    "Removing tourniquet in resus bay — do not; only reassess in theatre under controlled conditions",
    "Failing to activate MTP early enough — activate on clinical suspicion, not after labs confirm coagulopathy"
  ]
},

{
  id: "atls-haemorrhagic-shock",
  dept: "trauma",
  name: "Haemorrhagic Shock (ATLS 11 Classification)",
  latin: "Shock haemorrhagicus",
  organ: "Cardiovascular system — acute circulatory failure",
  severity: "high",
  tags: ["ATLS","haemorrhagic shock","transfusion","MTP","permissive hypotension","TXA"],
  hero: "ATLS 11th ed. revises shock classification to 4 classes based on HR, SBP, RR, GCS, and base deficit. Haemorrhage is the leading preventable cause of trauma death. Treatment = source control + damage control resuscitation (1:1:1 blood products, not crystalloid).",
  keypoints: [
    "Class I (<15% volume, <750mL): HR <100, normal BP — no transfusion needed; crystalloid only if symptomatic",
    "Class II (15–30%, 750–1500mL): HR 100–120, pulse pressure narrowed — crystalloid ± type-specific blood",
    "Class III (30–40%, 1500–2000mL): HR >120, SBP <90, confused — activate MTP, blood products required",
    "Class IV (>40%, >2000mL): HR >140, SBP <70, unconscious — immediate surgery + MTP; lethal without intervention",
    "ATLS 11 update: base deficit and lactate now incorporated into classification (replaces urine output as primary marker)",
    "1:1:1 MTP ratio (pRBC:FFP:platelets) + early TXA + calcium + fibrinogen replacement — NOT crystalloid-led resuscitation"
  ],
  differentials: [
    "Neurogenic shock: hypotension + bradycardia (not tachycardia) + warm vasodilated skin; spinal cord injury",
    "Cardiogenic shock: hypotension + elevated JVP + pulmonary oedema; cardiac contusion or pre-existing",
    "Obstructive shock: tension PTX or cardiac tamponade — treat with needle decompression or pericardiocentesis",
    "Distributive (septic) shock: unlikely in pure acute trauma; suspect in delayed presentations"
  ],
  mnemonics: [
    { name: "ATLS 11 Shock Classes (simplified)", text: "Class I: Normal everything. Class II: Tachycardic, normal BP. Class III: Tachycardic + Hypotensive + Confused. Class IV: Dying — immediate surgery." },
    { name: "Lethal Triad", text: "Coagulopathy + Hypothermia + Acidosis — each worsens the others; all three together = death without damage control" },
    { name: "MTP targets (ROTEM/TEG guided)", text: "Hb >70; Platelets >50 (>100 if TBI); Fibrinogen >2g/L; PT/APTT <1.5×normal; Temp >36°C; pH >7.35; iCa >1.1mmol/L" }
  ],
  overview: {
    definition: "Haemorrhagic shock is inadequate tissue perfusion due to acute blood loss. ATLS 11th edition classifies it into 4 classes based on estimated volume loss, haemodynamic parameters, neurological status, and metabolic markers (base deficit, lactate). Haemorrhage accounts for 30–40% of trauma deaths, of which 25–35% are preventable.",
    epidemiology: "1.35 million trauma deaths/year worldwide (WHO). 80% of intraoperative deaths from haemorrhage are preventable. Penetrating trauma causes haemorrhage more rapidly than blunt; retroperitoneal haemorrhage from pelvic fractures can be massive and occult. MTP activation within 30 minutes of arrival improves survival.",
    pathophysiology: "Acute blood loss → decreased venous return → reduced preload → fall in cardiac output → compensatory tachycardia and vasoconstriction → maintained SBP until >30% volume lost. Progressive oxygen debt → cellular hypoxia → anaerobic metabolism → lactic acidosis → mitochondrial dysfunction. Hypothermia impairs coagulation factors and platelet function. Haemodilution from crystalloid resuscitation worsens coagulopathy. The lethal triad (acidosis + hypothermia + coagulopathy) becomes self-perpetuating without correction.",
    classification: [
      "Class I: ≤750 mL (≤15% TBV); HR <100; SBP normal; RR 14–20; GCS 14–15; BD 0 to −2; urine >30 mL/h",
      "Class II: 750–1500 mL (15–30%); HR 100–120; SBP normal; narrowed PP; RR 20–30; GCS 13–14; BD −2 to −6; urine 20–30 mL/h",
      "Class III: 1500–2000 mL (30–40%); HR >120; SBP <90; RR 30–40; GCS 11–13; BD −6 to −10; urine 5–15 mL/h",
      "Class IV: >2000 mL (>40%); HR >140; SBP <70; RR >40; GCS <10; BD <−10; urine <5 mL/h or anuric"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: penetrating (rate of loss faster) vs. blunt (occult haemorrhage common)",
      "Time from injury — determines TXA eligibility",
      "Pre-hospital fluids given — crystalloid dilutes coagulation factors",
      "Anticoagulant/antiplatelet medications — warfarin, NOACs, aspirin, clopidogrel"
    ],
    examination: [
      "HR, SBP, pulse pressure, capillary refill time (>2s = shock until proven otherwise)",
      "Skin: pale + cold + clammy = catecholamine surge (compensated Class II–III)",
      "Neurological status: confusion (Class III) or obtundation (Class IV)",
      "Identify haemorrhage source: external wounds, abdominal tenderness (FAST), pelvic instability, long bone fractures (femur = 1.5L, pelvis = 3–5L)"
    ],
    investigations: [
      { name: "VBG — base deficit and lactate", role: "Immediate: BD >−6 = significant shock; lactate >4mmol/L = anaerobic metabolism; serial measurements guide resuscitation endpoint" },
      { name: "TEG / ROTEM", role: "Viscoelastic whole-blood coagulation test — identifies specific coagulation defect (fibrinogen deficiency, hyperfibrinolysis, platelet dysfunction) for targeted product administration" },
      { name: "FBC, coagulation screen, fibrinogen, crossmatch", role: "Baseline; repeat every 30–60 min in active haemorrhage; fibrinogen <2g/L = cryoprecipitate" },
      { name: "eFAST", role: "Identifies haemoperitoneum, haemothorax, tamponade during primary survey" },
      { name: "CT angiogram (if stable)", role: "Identifies source for angioembolisation (pelvic, hepatic, splenic bleeding)" }
    ]
  },
  criteria: {
    title: "Massive Transfusion Protocol (MTP) Activation Criteria",
    items: [
      { k: "Clinical: shock index >1 (HR/SBP)", v: "Shock index >1.0 = significant haemorrhage; >1.8 = severe; triggers MTP consideration" },
      { k: "ABC score ≥2", v: "Assessment of Blood Consumption: penetrating mechanism (1) + HR >120 (1) + SBP <90 (1) + +FAST (1); ≥2 = MTP activated" },
      { k: "TASH score ≥16", v: "Trauma-Associated Severe Haemorrhage score; multivariate; >99% probability MTP needed" },
      { k: "Clinical judgement", v: "Class III–IV haemorrhagic shock + non-compressible haemorrhage = immediate MTP activation regardless of score" },
      { k: "MTP 1:1:1 ratio targets", v: "pRBC:FFP:Platelets in 1:1:1 ratio; supplement with cryoprecipitate (fibrinogen <2g/L), Ca²⁺ (per 4u pRBC), and TXA" }
    ]
  },
  scoring: ["shock-index","abc-score"],
  management: {
    conservative: [
      "Permissive hypotension: SBP 80–90 mmHg until surgical haemostasis (ATLS 11) — avoids coagulopathy from overresuscitation; CONTRAINDICATED in TBI",
      "Haemostatic resuscitation: blood products first (avoid crystalloid); warm all products (Level 1 rapid infuser)",
      "External haemorrhage: tourniquet (limb) + wound packing with haemostatic gauze (junctional) + direct pressure — do not remove until theatre"
    ],
    medical: [
      "TXA (tranexamic acid): 1g IV over 10 min + 1g over 8h; within 3 hours of injury; antifibrinolytic (CRASH-2 trial: 1500 deaths prevented per 10,000 treated)",
      "Fibrinogen concentrate / cryoprecipitate: first-line coagulation product; target fibrinogen >2g/L; cryoprecipitate 2 pools (10 units) or fibrinogen concentrate 4g",
      "Calcium chloride 10mL 10% per 4 units pRBC: prevents ionised hypocalcaemia from citrate in blood products — essential in massive transfusion",
      "Prothrombin complex concentrate (PCC): 25–50 units/kg for warfarin reversal or NOAC reversal; faster than FFP for factor replacement",
      "Vasopressors: only after adequate volume replacement; noradrenaline first-line; vasopressin for catecholamine-refractory shock"
    ],
    surgical: [
      { name: "Source control", when: "Compressible haemorrhage (external) — tourniquet + packing; non-compressible (solid organ, pelvic, retroperitoneal) — surgery or angioembolisation", notes: "REBOA (zone I for solid organ/abdominal aorta; zone III for pelvic) as bridge to surgery in arrest/peri-arrest" },
      { name: "Damage control surgery", when: "Class III–IV shock; physiological exhaustion; lethal triad", notes: "Abbreviated surgery: haemostasis + contamination control + temporary closure. Definitive repair only after physiological restoration in ICU (24–48h)" },
      { name: "Pelvic packing / angioembolisation", when: "Pelvic ring fracture with haemodynamic instability", notes: "External fixator / pelvic binder → pre-peritoneal packing (PPP) + bilateral iliac angioembolisation for arterial bleeding (posterior — superior gluteal; anterior — obturator)" }
    ]
  },
  technique: {
    title: "Massive Transfusion Protocol — Activation to Administration",
    prep: [
      "MTP cooler: prepared in blood bank with 6 pRBC + 6 FFP + 1 pool platelets (UK standard) or 10+10+2 in high-demand centres",
      "Allocate team member solely to documentation of products given + timings",
      "Senior surgeon + anaesthetist to bedside; OR notified to prepare emergency theatre"
    ],
    steps: [
      { n: 1, t: "Activate MTP", d: "Call blood bank: MTP activated. Blood group: O-negative pRBC immediately if unknown; type-specific as soon as ABO confirmed (5–10 min)." },
      { n: 2, t: "TXA immediately", d: "1g IV over 10 min. Set up second infusion of 1g over 8h. Document time of injury vs. time of TXA — must be within 3h." },
      { n: 3, t: "First MTP pack (0–30 min)", d: "6 pRBC + 6 FFP warm and infuse simultaneously via rapid infuser. 1 pool platelets if available. Aim to complete first pack within 30 min of activation." },
      { n: 4, t: "Check fibrinogen", d: "TEG/ROTEM or laboratory fibrinogen: if <2g/L give cryoprecipitate 2 pools or fibrinogen concentrate 4g IV. Repeat every 30–60 min." },
      { n: 5, t: "Calcium supplementation", d: "10mL calcium chloride 10% IV after every 4 units of pRBC — prevent ionised hypocalcaemia." },
      { n: 6, t: "Monitor endpoints", d: "Lactate (target <2), BE (target >−6), temperature (target >36°C), pH (>7.35), SpO₂. Reassess haemorrhage source every 15 min." },
      { n: 7, t: "Deactivate MTP", d: "When haemostasis achieved + haemodynamic stability + TEG/ROTEM normalising. Switch to standard haematology review." }
    ],
    pearls: [
      "Give TXA before starting surgery — antifibrinolysis is most effective before surgical trauma activates fibrinolysis",
      "Calcium is the forgotten part of MTP — ionised hypocalcaemia causes cardiac depression and coagulopathy",
      "1:1:1 is a floor, not a ceiling — goal-directed (TEG/ROTEM) can reduce FFP/platelets if clotting is adequate",
      "Class II shock can present with normal SBP — narrow pulse pressure (PP = SBP−DBP <30) is the early warning sign"
    ]
  },
  guidelines: [
    { src: "ATLS 11th Edition — American College of Surgeons, 2023", url: "https://www.facs.org/quality-programs/trauma/atls/" },
    { src: "CRASH-2 trial — Tranexamic acid in trauma (Lancet 2010)", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(10)60835-5/fulltext" },
    { src: "EAST Guidelines — Blood transfusion in trauma", url: "https://www.east.org/education/practice-management-guidelines" },
    { src: "NICE NG39 — Major trauma: assessment and initial management", url: "https://www.nice.org.uk/guidance/ng39" }
  ],
  pearls: [
    "Narrow pulse pressure (PP <30 mmHg) in Class II shock — SBP maintained but PP narrows early",
    "TXA window is HARD: after 3 hours it increases mortality — give early or not at all",
    "Calcium chloride (not gluconate) in MTP: chloride form gives 3× more ionised calcium per mL"
  ],
  mistakes: [
    "Resuscitating Class III–IV shock with crystalloid — worsens coagulopathy, hypothermia, dilutes clotting factors",
    "Missing narrow pulse pressure in Class II — SBP still 'normal' but patient is in significant shock",
    "Forgetting TXA time limit — check time of injury on every trauma patient; 3-hour rule is absolute",
    "Not giving calcium during MTP — ionised hypocalcaemia impairs cardiac contractility and coagulation"
  ]
},

{
  id: "atls-spinal-trauma",
  dept: "trauma",
  name: "Spinal Cord Injury (ATLS 11)",
  latin: "Trauma medullae spinalis",
  organ: "Spinal cord, vertebral column",
  severity: "high",
  tags: ["ATLS","spinal cord injury","NEXUS","C-spine clearance","neurogenic shock","ASIA"],
  hero: "ATLS 11 replaces 'full spinal immobilisation' with 'spinal motion restriction' (SMR). NEXUS criteria and Canadian C-Spine Rule guide C-spine clearance. Complete vs. incomplete cord syndromes have very different prognoses. Neurogenic shock = hypotension + bradycardia — must NOT be treated as haemorrhagic shock.",
  keypoints: [
    "ATLS 11 change: 'Spinal motion restriction' (SMR) replaces blanket immobilisation — collar only when clinically indicated (NEXUS/CCR criteria)",
    "NEXUS low-risk criteria (all 5 must be present to clear C-spine clinically): No posterior midline tenderness, No focal neuro deficit, Normal alertness, No intoxication, No distracting injury",
    "Neurogenic shock: hypotension + BRADYCARDIA (not tachycardia) + warm/dry skin — due to loss of sympathetic outflow (T1–T4)",
    "ASIA Impairment Scale: A = complete; B = sensory only below; C = motor preserved but weak (>50% key muscles grade <3); D = useful motor function (>50% grade ≥3); E = normal",
    "Incomplete cord syndromes: Central (most common — weak arms>legs; elderly + hyperextension); Anterior (loss of motor + pain/temp; proprioception preserved); Brown-Séquard (ipsilateral motor + contralateral pain/temp)",
    "High-dose methylprednisolone: NOT recommended in ATLS 11 (no mortality benefit; infectious complications)"
  ],
  differentials: [
    "Neurogenic shock vs. haemorrhagic shock (tachycardia vs. bradycardia; warm vs. cold peripheries)",
    "Incomplete cord syndrome vs. complete — must distinguish within 72h (prognosis differs markedly)",
    "Spinal shock: transient physiological disruption (not circulatory); bulbocavernosus reflex return = end of spinal shock",
    "Pre-existing cervical myelopathy: exacerbated by minor trauma"
  ],
  mnemonics: [
    { name: "NEXUS 5 criteria (C-spine clearance)", text: "No Midline tenderness, No Neuro deficit, Normal Alertness, No iNtoxication, No diStracting injury — all 5 NEGATIVE = clinically clear, no imaging needed" },
    { name: "ASIA grades", text: "A = Absent (complete), B = Barely (sensory only), C = Could but Can't (motor <3/5), D = Doable (motor ≥3/5 majority), E = Everything Normal" },
    { name: "Cord syndromes", text: "Central = Elderly + Hyperextension = Hands worse than feet. Anterior = No motor + No pain but Proprioception Preserved. Brown-Séquard = Same side motor loss + Opposite pain/temp loss" }
  ],
  overview: {
    definition: "Traumatic spinal cord injury (tSCI) results from fracture-dislocation, burst fracture, or ligamentous disruption causing cord compression, contusion, or transaction. ATLS 11th edition updates management to spinal motion restriction (SMR) rather than full immobilisation, guided by validated clinical clearance tools.",
    epidemiology: "280,000 SCI patients in USA; 17,000 new cases/year. Mean age 43 (shifting older). Most common cause: road traffic accidents (38%), falls (31%), violence (14%). Cervical injury: 55%; thoracic: 15%; lumbosacral: 20%. Complete cord injury (ASIA A): 30%. Significant burden: lifetime costs up to $5 million.",
    pathophysiology: "Primary injury: mechanical disruption at time of impact (laceration, contusion, compression, stretching). Secondary injury: vascular disruption → ischaemia; oedema → further compression; glutamate excitotoxicity; free radical cascade; apoptosis. Secondary injury cascade peaks at 6–24 hours — window for neuroprotection. Neurogenic shock (T6 and above): loss of descending sympathetic control → unopposed vagal tone → bradycardia + hypotension + vasodilation.",
    classification: [
      "Complete (ASIA A): no motor or sensory function below injury level including S4–S5 sacral segments",
      "Incomplete (ASIA B–D): preserved function below; prognosis much better than complete",
      "Central cord syndrome (most common incomplete): UL > LL weakness; bladder dysfunction; elderly + cervical spondylosis + hyperextension",
      "Anterior cord syndrome: bilateral motor + pain/temp loss; proprioception + vibration preserved (dorsal columns intact); vascular injury",
      "Brown-Séquard syndrome (cord hemitransection): ipsilateral motor/proprioception loss + contralateral pain/temp loss; best prognosis of incomplete syndromes"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: hyperflexion (facet dislocation), hyperextension (central cord in elderly), axial loading (burst fracture), rotation",
      "Immediate neurological symptoms at scene vs. delayed (lucid interval then deterioration = evolving cord oedema or haematoma)",
      "Pre-existing cervical disease (spondylosis): minor trauma can cause significant injury",
      "Level of last known normal sensation — document carefully for ASIA classification"
    ],
    examination: [
      "Motor examination: key ASIA muscles (C5=elbow flexors, C6=wrist extensors, C7=elbow extensors, C8=finger flexors, T1=finger abductors, L2=hip flexors, L3=knee extensors, L4=ankle dorsiflexors, L5=toe extensors, S1=ankle plantarflexors)",
      "Sensory examination: pinprick (spinothalamic) + light touch (dorsal column) at each dermatome bilateral",
      "Sacral sparing: S4–S5 perianal sensation + voluntary anal contraction + bulbocavernosus reflex = incomplete injury",
      "Bulbocavernosus reflex: glans squeeze → anal sphincter contraction; return of reflex = end of spinal shock (24–48h)"
    ],
    investigations: [
      { name: "CT C-spine (full spine in high-energy trauma)", role: "Sensitivity 99% for bony injuries; faster and more sensitive than plain X-ray; replace plain films in high-energy trauma" },
      { name: "MRI spine", role: "Gold standard for cord, disc, ligament, and epidural haematoma assessment; essential for incomplete cord injury, neurological deterioration, or clinical suspicion without CT findings" },
      { name: "NEXUS criteria application", role: "All 5 criteria met = clinically clear (no imaging); any criterion positive = CT C-spine. Canadian C-Spine Rule: more specific, reduces imaging further in stable patients" },
      { name: "Plain X-rays C-spine (AP + lateral + open-mouth)", role: "Now superseded by CT in trauma; still used in resource-limited settings (sensitivity 52–85% for fracture vs. CT 99%)" }
    ]
  },
  criteria: {
    title: "C-spine Clearance — NEXUS vs. Canadian C-Spine Rule",
    items: [
      { k: "NEXUS low-risk: all 5 = clear", v: "1. No midline C-spine tenderness. 2. No focal neuro deficit. 3. Normal alertness. 4. No intoxication. 5. No distracting injury. Sensitivity 99.6%, specificity 12.9%" },
      { k: "Canadian C-Spine Rule (higher specificity)", v: "Any high-risk factor (age ≥65, dangerous mechanism, paraesthesia)? → image. Any low-risk factor allowing active ROM? → range of motion test. Able to rotate 45° L + R? → clear" },
      { k: "ASIA Impairment Scale", v: "A=complete (no motor/sensory below); B=sensory only; C=motor <3/5 in >50% key muscles; D=motor ≥3/5 in >50%; E=normal. A→E classification at 72h post injury" },
      { k: "Spinal motion restriction — ATLS 11", v: "SMR (not full immobilisation): collar for suspected C-spine; firm stretcher; log-roll. Remove collar after clearance — prolonged collars cause pressure sores, ↑ICP, aspiration risk" },
      { k: "Neurogenic shock management", v: "MAP target 85–90 mmHg for 7 days post-injury (NASCIS III). Vasopressors (noradrenaline) + atropine for bradycardia. Do NOT give large fluid boluses — causes pulmonary oedema" }
    ]
  },
  scoring: ["asia"],
  management: {
    conservative: [
      "Spinal motion restriction (SMR): semi-rigid cervical collar + firm stretcher; remove collar once imaging/clinical clearance obtained",
      "MAP target 85–90 mmHg for first 7 days post tSCI: vasopressors (noradrenaline) preferred over crystalloid boluses",
      "Neurogenic shock: atropine 0.5–1mg IV for bradycardia; temporary pacing for sustained HR <40",
      "Pressure area care from admission — high-risk for skin breakdown due to immobility",
      "DVT prophylaxis: LMWH within 72h of injury (not earlier due to haemorrhage risk)"
    ],
    medical: [
      "High-dose methylprednisolone: NOT recommended in ATLS 11 (no neurological benefit, increased pneumonia/sepsis risk — withdrawn from ATLS guidelines 2013)",
      "Neuropathic pain: gabapentin/pregabalin first-line post-injury",
      "Autonomic dysreflexia (T6 and above): uncontrolled reflex hypertension (full bladder/bowel/pressure sore as trigger) — sit patient up, identify trigger, GTN patch/oral nifedipine"
    ],
    surgical: [
      { name: "Surgical decompression + stabilisation", when: "Incomplete cord injury with neural compression, unstable fracture, progressive neurological deterioration", notes: "Early decompression (<24h): improves neurological outcomes in incomplete injuries (STASCIS trial: 2-grade ASIA improvement). Posterior fixation for ligamentous instability; anterior approach for burst fracture with cord compression." },
      { name: "Closed reduction (cervical facet dislocation)", when: "Cervical fracture-dislocation with incomplete cord injury in alert patient without disc herniation", notes: "Halo traction with incremental weights under neurological monitoring. Contraindicated if MRI shows disc herniation at injury level (risk of cord injury during reduction)." }
    ]
  },
  technique: {
    title: "Log-Roll — Spinal Motion Restriction in Trauma",
    prep: [
      "Minimum 4 staff: leader at head (maintains inline stabilisation + calls movement), 3 for body",
      "Semi-rigid cervical collar applied before log-roll",
      "Transfer board / scoop stretcher prepared alongside"
    ],
    steps: [
      { n: 1, t: "Leader takes head", d: "One person at head maintains manual inline stabilisation of C-spine — both hands cradle occiput and mandible. Leader counts and directs." },
      { n: 2, t: "Position assistants", d: "Person 1: near shoulder + upper chest. Person 2: near hip + thigh. Person 3: near knee + lower leg. All face the patient." },
      { n: 3, t: "Arms preparation", d: "Patient's top arm placed at side; bottom arm extended at 90° or placed on chest." },
      { n: 4, t: "Controlled roll", d: "Leader counts: 'Rolling on 3 — 1, 2, 3.' Roll patient as a unit toward assistants (≈90°). Maintain spinal alignment throughout." },
      { n: 5, t: "Posterior examination", d: "Rapidly inspect and palpate entire posterior spine and skin. PR examination for sphincter tone and sensation if indicated." },
      { n: 6, t: "Board placement + roll back", d: "Place transfer board flush against patient's back. Roll back onto board on leader's count. Pad bony prominences." }
    ],
    pearls: [
      "The LEADER at the head controls the log-roll — no one moves until the leader says '3'",
      "Cervical collar does NOT immobilise the C-spine — manual inline stabilisation is the critical intervention",
      "Long spine boards: ATLS 11 recommends removing from transport boards quickly — prolonged use causes pressure sores",
      "Paediatric C-spine: children have relatively large heads — padding under torso (not head) needed to maintain neutral alignment"
    ]
  },
  guidelines: [
    { src: "ATLS 11th Edition — American College of Surgeons, 2023", url: "https://www.facs.org/quality-programs/trauma/atls/" },
    { src: "NASCIS III — Methylprednisolone in spinal cord injury", url: "https://jamanetwork.com/journals/jama/article-abstract/414840" },
    { src: "STASCIS trial — Early surgery for cervical SCI (Spine 2012)", url: "https://journals.lww.com/spinejournal/Abstract/2012/03150/Timing_of_Decompressive_Surgery_of_Spinal_Cord.8.aspx" },
    { src: "NICE NG41 — Spinal injury: assessment and initial management, 2016", url: "https://www.nice.org.uk/guidance/ng41" }
  ],
  pearls: [
    "ATLS 11: 'spinal motion restriction' not 'immobilisation' — remove collar after clearance to prevent pressure sores and ↑ICP",
    "Neurogenic shock = bradycardia + hypotension + warm peripheries — do NOT treat with large fluid boluses",
    "Sacral sparing (S4–S5 sensation + anal contraction) = incomplete injury = much better prognosis"
  ],
  mistakes: [
    "Treating neurogenic shock as haemorrhagic shock — fluid overload causes pulmonary oedema; use vasopressors",
    "Giving high-dose methylprednisolone — no neurological benefit and increases pneumonia/sepsis: NOT recommended ATLS 11",
    "Leaving cervical collar on longer than needed — causes occipital pressure sores and raises ICP in TBI patients"
  ]
},

{
  id: "atls-airway",
  dept: "trauma",
  name: "Trauma Airway Management (ATLS 11)",
  latin: "Gestio viae aereae in trauma",
  organ: "Upper airway, trachea",
  severity: "high",
  tags: ["ATLS","airway","RSI","cricothyroidotomy","CICO","surgical airway","intubation"],
  hero: "ATLS 11 airway algorithm: attempt oxygenation first → RSI (video laryngoscopy preferred) → if failed → supraglottic airway device (LMA) → if CICO → surgical cricothyroidotomy (scalpel-finger-bougie). C-spine inline stabilisation throughout. Front-of-neck access (FONA) is the life-saving last resort.",
  keypoints: [
    "GCS ≤8, respiratory rate <10 or >29, SpO₂ <90 on O₂, facial fractures/burns/inhalation injury = indication for early definitive airway",
    "RSI in trauma: ketamine 1–2mg/kg IV (haemodynamically stable: propofol; unstable: ketamine) + suxamethonium 1.5mg/kg OR rocuronium 1.2mg/kg",
    "ATLS 11 strongly endorses video laryngoscopy (VL) as preferred technique for trauma intubation — superior glottis view, maintained C-spine alignment",
    "Cannot Intubate Cannot Oxygenate (CICO): immediately proceed to scalpel-finger-bougie cricothyroidotomy — do NOT attempt >3 laryngoscopy attempts",
    "Nasopharyngeal airway contraindicated in confirmed/suspected base of skull fracture (CSF rhinorrhoea, raccoon eyes, Battle's sign, haemotympanum)",
    "Surgical cricothyroidotomy technique: vertical skin incision → horizontal stab through cricothyroid membrane → finger to confirm → bougie → 6.0 cuffed ETT"
  ],
  differentials: [
    "Upper airway obstruction: tongue (GCS↓), blood/secretions (suction), foreign body, haematoma, oedema, laryngeal fracture",
    "Difficult airway predictors: LEMON — Look (anatomy), Evaluate (3-3-2 rule), Mallampati, Obstruction, Neck mobility",
    "Burns inhalation airway: progressive oedema — intubate EARLY before oedema closes airway (cannot use tracheostomy in burned neck)",
    "Laryngotracheal injury: subcutaneous emphysema + dysphonia + haemoptysis — very difficult airway, prepare for surgical airway at outset"
  ],
  mnemonics: [
    { name: "Indications for definitive airway (ATLS)", text: "A = Airway obstruction; B = Breathing inadequate (RR <10 or >29, SpO₂ <90%); C = Need for intubation for procedures; D = GCS ≤8 (cannot protect airway)" },
    { name: "LEMON difficult airway assessment", text: "L = Look externally (short neck, obesity, trauma); E = Evaluate 3-3-2 (mouth opening 3 fingers, chin-to-hyoid 3 fingers, hyoid-to-thyroid 2 fingers); M = Mallampati; O = Obstruction/Obesity; N = Neck mobility (C-spine)" },
    { name: "CICO algorithm (ATLS 11)", text: "Can't Intubate Can't Oxygenate → immediately FONA: Scalpel vertical skin incision → Finger into trachea → Bougie → 6.0 cuffed tube. No hesitation." }
  ],
  overview: {
    definition: "Airway management in trauma requires establishing and maintaining a patent airway while protecting the cervical spine. ATLS 11 emphasises early recognition of airway compromise, the use of video laryngoscopy for RSI, and rapid escalation to surgical airway (cricothyroidotomy) in the CICO scenario. The 'ABCDE' A-step remains a simultaneous action with C-spine inline stabilisation.",
    epidemiology: "Airway compromise is responsible for 15–30% of preventable trauma deaths. 1–3% of trauma intubations result in CICO. Predicted difficult airway in 10% of trauma patients (obesity, facial fractures, burns, blood in airway). Failed airway accounts for 28% of anaesthetic deaths in trauma. Early surgical airway is life-saving; delay kills.",
    pathophysiology: "Upper airway obstruction: tongue falls back (GCS↓); blood/vomit/foreign body; oedema from burns/anaphylaxis; haematoma from maxillofacial fractures or anterior neck injury. C-spine injury: neutral alignment essential during intubation — manual inline stabilisation (MILS) reduces C-spine movement vs. uncontrolled laryngoscopy; removes collar but replaces with MILS. RSI drugs: ketamine maintains BP (sympathomimetic), analgesic; suxamethonium: fastest offset if intubation fails but CONTRAINDICATED in burns >48h, denervation injuries, crush, hyperkalaemia.",
    classification: [
      "Definitive airway: cuffed tube distal to cords (ETT or surgical airway) — gold standard in trauma",
      "Supraglottic airway device (i-gel, LMA): temporary oxygenation bridge — not definitive; cannot use with vomiting/facial trauma",
      "Surgical airway: cricothyroidotomy (emergency) or tracheostomy (elective/prolonged); ATLS 11 = scalpel-finger-bougie technique",
      "Needle cricothyroidotomy: oxygenation only (not ventilation); bridge <30–45 min; not suitable for obese necks"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: facial fractures, blast injury, penetrating neck, burns/smoke inhalation",
      "Symptoms: stridor, dysphonia, inability to swallow, progressive dyspnoea",
      "Pre-hospital: oxygen given + response, suction performed, attempts at airway"
    ],
    examination: [
      "Look: agitation (hypoxia), cyanosis, facial fractures, neck haematoma, soot/singed hair (burns), subcutaneous emphysema",
      "Listen: stridor (partial obstruction), gurgling (fluid), silence (complete obstruction or apnoea)",
      "Feel: subcutaneous emphysema (tracheal injury), tracheal deviation (tension PTX)",
      "LEMON assessment: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility — predict difficulty before induction"
    ],
    investigations: [
      { name: "Pulse oximetry (SpO₂)", role: "Continuous monitoring; SpO₂ <90% on high-flow O₂ = critical threshold for immediate intervention" },
      { name: "End-tidal CO₂ (capnography)", role: "Post-intubation confirmation of ETT position — waveform capnography more reliable than SpO₂ in low-perfusion states" },
      { name: "Chest X-ray (post-intubation)", role: "Confirm ETT tip position (2–4cm above carina); exclude right main bronchus intubation (right lower lobe collapse)" },
      { name: "CT neck/face/chest", role: "After stabilisation: identifies laryngotracheal injury, haematoma, retropharyngeal haematoma" }
    ]
  },
  criteria: {
    title: "Indications for Definitive Airway in Trauma",
    items: [
      { k: "Airway obstruction", v: "Any cause — clear with suction/jaw thrust first; if persists → RSI" },
      { k: "GCS ≤8", v: "Cannot protect airway; intubate to prevent aspiration and manage ICP (hyperventilate if herniation signs)" },
      { k: "SpO₂ <90% despite high-flow O₂", v: "Immediate RSI; identify concurrent tension PTX (treat first — relieves hypoxia without intubation)" },
      { k: "Respiratory rate <10 or >29", v: "Inadequate ventilatory effort; proceeding to ventilatory failure" },
      { k: "Anticipated difficult/deteriorating airway", v: "Burns, inhalation, evolving haematoma, facial fractures — intubate early before oedema progresses" },
      { k: "For procedures", v: "CT, operative intervention, prolonged transport — secure airway before patient leaves resus bay" },
      { k: "CICO → immediate cricothyroidotomy", v: "Scalpel-finger-bougie: vertical 4cm skin incision, stab through CTM, finger confirms, bougie in, 6.0 cuffed ETT, inflate, confirm with ETCO₂" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Positioning: upright (if no C-spine injury) improves airway and FRC",
      "High-flow O₂ (15L/min via non-rebreathe mask): pre-oxygenation before RSI — 3 min normal breathing or 8 maximal breaths increases safe apnoea time",
      "Jaw thrust + chin lift: preferred in trauma (jaw thrust does not extend C-spine); suction any blood/vomit",
      "Nasopharyngeal airway (NPA): well tolerated awake; CONTRAINDICATED in base of skull fracture"
    ],
    medical: [
      "RSI — induction agent: Ketamine 1.5–2mg/kg IV (haemodynamically unstable preferred — catecholamine release maintains BP); propofol 1–2mg/kg (haemodynamically stable only); etomidate 0.3mg/kg (adrenal suppression concern in major trauma)",
      "RSI — neuromuscular blockade: Suxamethonium 1.5mg/kg IV (fastest onset/offset, ideal for RSI; CONTRAINDICATED: burns >48h, denervation, hyperkalaemia, crush); Rocuronium 1.2mg/kg (alternative — reversal with sugammadex 16mg/kg available)",
      "Post-intubation sedation: propofol + fentanyl infusion; ketamine + midazolam in haemodynamically unstable"
    ],
    surgical: [
      { name: "Surgical cricothyroidotomy (scalpel-finger-bougie)", when: "CICO — failed intubation + failed oxygenation; immediate, without delay", notes: "Scalpel vertical skin incision (4cm) over CTM → stabilise larynx → horizontal stab incision through CTM (scalpel blade horizontal) → insert finger to confirm airway entry → bougie guided into trachea → railroad 6.0 cuffed ETT over bougie → inflate cuff → confirm ETCO₂. Convert to formal tracheostomy within 24–72h." },
      { name: "Fibreoptic intubation (awake)", when: "Predicted difficult airway in cooperative patient (trauma rare); suspected C5-6 fracture with incomplete SCI requiring airway", notes: "Requires patient cooperation and topical anaesthesia; rarely possible in acute trauma. If time permits for stable predicted difficult airway." },
      { name: "Emergency surgical airway via neck", when: "Laryngotracheal trauma with destroyed anatomy; CICO in burns patient", notes: "Direct tracheal intubation through wound or formal tracheostomy under local anaesthetic if anatomy disrupted. Involves ENT/thoracic surgeon if available." }
    ]
  },
  technique: {
    title: "Rapid Sequence Intubation (RSI) in Trauma",
    prep: [
      "Pre-oxygenation: 15L O₂ via NRM for 3 min or 8 vital capacity breaths",
      "Equipment check: video laryngoscope (Glidescope/McGrath) primary + direct laryngoscope backup; 10mL syringe, cuff inflated test; ETT 7.0 (female) or 7.5 (male) + 6.0 backup; bougie at bedside; ETCO₂ connected",
      "Drugs drawn: induction agent + NMB; post-intubation sedation ready",
      "Suction: Yankauer functioning and at hand",
      "Surgical airway kit: open and at bedside before RSI begins (scalpel, bougie, 6.0 ETT)"
    ],
    steps: [
      { n: 1, t: "Pre-oxygenation", d: "3 min high-flow O₂ via tight-fitting NRM. Patient upright if possible. Target SpO₂ >95% before induction." },
      { n: 2, t: "Positioning", d: "Supine. C-spine inline stabilisation (MILS) — remove front of collar, assistant holds head from below table. Optimal sniffing position blocked by MILS — prepare for potential difficulty." },
      { n: 3, t: "Induction", d: "Ketamine 1.5mg/kg IV push (or propofol if haemodynamically stable). Wait 30–60 seconds for LOC." },
      { n: 4, t: "NMB", d: "Suxamethonium 1.5mg/kg IV (or rocuronium 1.2mg/kg). Wait for fasciculations to cease (45–60 sec)." },
      { n: 5, t: "Laryngoscopy", d: "Video laryngoscope as primary. Apply BURP if grade III view. Maximum 3 attempts. Maintain SpO₂ >90% — if desaturating, stop and oxygenate via BVM." },
      { n: 6, t: "Intubation", d: "Advance ETT under direct vision through cords. Inflate cuff with 10mL air. Release MILS only after ETT confirmed." },
      { n: 7, t: "Confirmation", d: "ETCO₂ waveform (gold standard) + bilateral auscultation + CXR. Secure ETT at 21–22cm at teeth. Start post-intubation sedation immediately." },
      { n: 8, t: "Failed airway → CICO", d: "After 3 failed attempts: declare CICO, call for help, insert i-gel LMA for bridge oxygenation → proceed immediately to scalpel-finger-bougie cricothyroidotomy." }
    ],
    pearls: [
      "Declare CICO after 3 failed attempts — hesitation kills; go to surgical airway",
      "Video laryngoscopy in trauma: better view, less C-spine movement than direct laryngoscopy — always use as first choice",
      "Ketamine is the induction agent of choice in haemodynamic instability — it maintains BP by catecholamine release",
      "Surgical airway kit must be OPEN at bedside before every RSI in trauma — not retrieved from a drawer after failure",
      "Burns: intubate EARLY — airway oedema progresses rapidly and surgical airway becomes impossible through burned tissues"
    ]
  },
  guidelines: [
    { src: "ATLS 11th Edition — American College of Surgeons, 2023", url: "https://www.facs.org/quality-programs/trauma/atls/" },
    { src: "DAS/RCoA Difficult Airway Guidelines 2015", url: "https://www.das.uk.com/guidelines/das_intubation_guidelines" },
    { src: "NICE NG39 — Major trauma: assessment and initial management, 2016", url: "https://www.nice.org.uk/guidance/ng39" }
  ],
  pearls: [
    "CICO: scalpel-finger-bougie cricothyroidotomy after 3 failed attempts — no further laryngoscopy attempts",
    "Ketamine for trauma RSI: maintains haemodynamics, analgesic, bronchodilator — preferred in shocked patient",
    "Suxamethonium CONTRAINDICATED after 48h burns, denervation, hyperkalaemia, or crush injury — use rocuronium"
  ],
  mistakes: [
    "More than 3 laryngoscopy attempts — stops oxygenation and delays surgical airway",
    "Not having surgical airway kit open at bedside during RSI — fatal delay when CICO occurs",
    "Using suxamethonium in burns (>48h), crush, or denervation — can trigger lethal hyperkalaemic cardiac arrest",
    "Removing cervical collar without manual inline stabilisation — not neutral C-spine alignment"
  ]
}

]; // end ATLS_DISEASES

if (typeof module !== 'undefined') module.exports = { ATLS_DISEASES };
