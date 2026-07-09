// HPB diseases — batch 1 of 3 (ap, cholecystitis, cholangitis, hcc, choledocholithiasis, pancreatic-cancer, chronic-pancreatitis)
window._TMP_HPB = [
{
  id:"ap", dept:"hpb", name:"Acute Pancreatitis", latin:"Pancreatitis acuta", organ:"Pancreas",
  severity:"high", tags:["pancreas","gallstones","alcohol","amylase","lipase","SIRS"],
  hero:"Acute inflammatory process of the pancreas with varying degrees of regional and remote organ involvement.",
  keypoints:[
    "80% mild (interstitial); 20% severe (necrotizing) — mortality ~1% mild to ~30% severe with persistent organ failure; infected necrosis + persistent organ failure ~36–50%",
    "Gallstones and alcohol together account for ~60–80% of cases (split varies: biliary predominant in women, alcohol in middle-aged men); ~10% miscellaneous, up to 30% idiopathic",
    "Diagnosis: characteristic pain + amylase/lipase ≥3× ULN ± CT findings",
    "Two-phase disease with biphasic mortality: early deaths (<2 wk) from SIRS/multiorgan failure; late deaths from infected necrosis/sepsis",
    "Amylase normal on admission in up to ~19%; lipase more sensitive/specific and stays elevated longer",
    "Revised Atlanta 2012: mild / moderately severe / severe based on organ failure duration",
    "CECT at 72–96 h if diagnosis uncertain or deterioration; CT severity index guides prognosis"
  ],
  differentials:["Perforated peptic ulcer","Acute cholecystitis","Mesenteric ischemia","Aortic dissection","Inferior MI"],
  mnemonics:[{name:"GET SMASHED",text:"Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion sting, Hyperlipidemia/Hypercalcemia, ERCP, Drugs"}],
  overview:{
    definition:"Acute inflammatory process of the pancreas initiated by premature intracinar activation of digestive enzymes.",
    epidemiology:"Incidence rising (wide reported range ~5–100/100 000/year; commonly 15–45); upward trend driven by obesity and gallstone prevalence; male = female for gallstone; male predominance for alcohol.",
    pathophysiology:"Premature trypsinogen activation → autodigestion → acinar cell necrosis → local and systemic inflammatory cascade (cytokine storm, SIRS, MODS). Biliary AP: transient ampullary obstruction by a migrating gallstone (passage more important than impaction) → raised pancreatic-duct pressure → juice extravasation → acinar injury. Alcohol: toxic metabolites (acetaldehyde, fatty-acid ethyl esters) destabilize zymogen granules/lysosomes → intracellular trypsinogen activation via cathepsin B; sustained intracellular Ca²⁺ rise → necrosis; requires a second hit (genetic/environmental, e.g. smoking). Hypertriglyceridemia: pancreatic lipase liberates free fatty acids → micellar detergent injury + ischemia (usually needs TG >10 mmol/L).",
    classification:[
      {label:"Interstitial edematous vs necrotizing",note:"The two morphologic types per Revised Atlanta"},
      {label:"Mild AP",note:"No organ failure, no local/systemic complications; resolves within 1 week"},
      {label:"Moderately severe AP",note:"Organ failure that resolves within 48 h (transient ≤48 h) and/or local/systemic complications without persistent organ failure"},
      {label:"Severe AP",note:"Persistent organ failure (>48 h), single or multi-organ"},
      {label:"Critical AP (determinant-based)",note:"4th tier: infected necrosis + persistent organ failure. DBC mortality: mild 0% / moderate 3.6% / severe 33.8% / critical 87.5%; determinants = (peri)pancreatic necrosis (sterile vs infected) + organ failure (transient vs persistent)"}
    ]
  },
  diagnosis:{
    history:["Epigastric pain radiating to back, constant, 10/10","Nausea/vomiting","Alcohol intake / recent fatty meal","Prior biliary colic or gallstones","Medications (steroids, thiazides, azathioprine)","Consider tumor (IPMN, ampullary, adenocarcinoma) as cause if first episode age >40, especially with weight loss, anorexia, or new diabetes","Post-ERCP as a specific iatrogenic cause (PEP: ~1–3% diagnostic, 2–5% therapeutic ERCP)"],
    examination:["Epigastric tenderness ± guarding","Gray-Turner sign (flank bruising) — hemorrhagic AP","Cullen sign (periumbilical bruising) — hemorrhagic AP","Cullen/Grey Turner signs reflect exudate tracking along falciform ligament/retroperitoneum in necrotizing (hemorrhagic) disease — late and uncommon","Fever, tachycardia if SIRS","Absent bowel sounds (ileus)","Signs of intraabdominal hypertension / abdominal compartment syndrome in severe AP (tense distension)"],
    investigations:[
      {name:"Serum lipase",role:"More sensitive/specific than amylase; ≥3× ULN diagnostic"},
      {name:"Serum amylase",role:"Rises quickly, falls within 3–5 days; also elevated in other abdominal emergencies"},
      {name:"CBC, CRP",role:"CRP peaks late (72–96 h), so cutoff 150 mg/L is a 48 h marker not an early-triage tool; WBC elevated in SIRS"},
      {name:"LFTs, bilirubin",role:"ALP/bilirubin rise suggests gallstone etiology"},
      {name:"Serum calcium, triglycerides",role:"Exclude hypercalcemia and hypertriglyceridemia as cause"},
      {name:"Procalcitonin",role:"Predicts infected necrosis (cutoff ~1.8 ng/mL, sens/spec >90% in one series); distinguishes infection from sterile inflammation"},
      {name:"Hematocrit / hemoconcentration",role:"Hct >44% on admission (or no fall at 24 h) predicts necrosis/organ failure; guides fluid aggressiveness"},
      {name:"BUN",role:"Admission value and rise over first 24 h correlate with mortality"},
      {name:"US abdomen",role:"First-line: identifies gallstones, CBD dilation; poor pancreas visualization in AP"},
      {name:"CECT abdomen (IV contrast)",role:"Detects necrosis (~87% sensitivity; necrosis may not appear until 72 h so CT before 72 h discouraged); NOT routine on admission (predictive accuracy no better than clinical scores). Reserve for diagnostic uncertainty, persistent organ failure/SIRS/sepsis, failure to improve by 6–10 days, or suspected infected necrosis. CTSI ≥3 predicts complications"},
      {name:"MRCP",role:"Preferred over ERCP for suspected choledocholithiasis without cholangitis"}
    ]
  },
  criteria:{
    title:"Revised Atlanta Classification 2012",
    items:[
      {k:"Mild",v:"No organ failure; no local/systemic complications"},
      {k:"Moderately severe",v:"Organ failure that resolves within 48 h (transient ≤48 h) and/or local complications (APFC, ANC, pseudocyst, WON) without persistent organ failure"},
      {k:"Severe",v:"Persistent organ failure >48 h (cardiovascular, respiratory, or renal)"},
      {k:"Organ failure definition",v:"Modified Marshall score ≥2 in ANY of 3 systems (respiratory PaO2/FiO2, renal serum creatinine, cardiovascular systolic BP); SOFA ≥2 an accepted alternative"},
      {k:"Local collection morphology",v:"APFC and pseudocyst (no/minimal necrosis) vs ANC and WON (necrosis-containing); pseudocyst/WON require >4 wk maturation. <4 wk without necrosis = APFC; <4 wk with necrosis = ANC; >4 wk without necrosis = pseudocyst (rare after AP); >4 wk with necrosis = walled-off necrosis (WON). Each may be sterile or infected; true pseudocyst uncommon — most persistent collections contain some necrosis"},
      {k:"Infected necrosis",v:"Diagnosed by gas within collection on CECT OR positive image-guided FNA/culture"}
    ]
  },
  scoring:[
    {name:"Ranson's Criteria",items:["On admission: age >55, WBC >16,000, glucose >200 mg/dL, LDH >350 IU/L, AST >250 IU/L","At 48 h: hematocrit fall >10%, BUN rise >5 mg/dL, Ca <8 mg/dL, PaO2 <60 mmHg, base deficit >4 mEq/L, fluid sequestration >6 L","Score ≥3 = severe; mortality 15–20% with score 5–6"]},
    {name:"BISAP Score",items:["BUN >25, Impaired mental status, SIRS ≥2 criteria, Age >60, Pleural effusion","Score ≥3 = severe AP; validated predictor of mortality"]},
    {name:"Modified Glasgow (Imrie)",items:["8–9 variables; prognostic accuracy similar to Ranson"]},
    {name:"APACHE II",items:["Usable on admission and recalculable daily; ≥8 historically = severe"]},
    {name:"CTSI / Modified CTSI (Balthazar)",items:["CTSI ≥7 predicts high morbidity/mortality; CTSI 0–3 mortality ~3% vs >7 ~92%"]},
    {name:"SIRS and HAPS (Harmless AP Score)",items:["Simple early triage tools"]},
    {name:"Caveat",items:["Existing scores plateau at ~80% accuracy; IAP/APA, ACG, AGA do NOT recommend routine scoring-system use (only Japanese 2015 guideline does)"]}
  ],
  management:{
    conservative:["Goal-directed IV fluid resuscitation ~5–10 mL/kg/h (possible initial ~20 mL/kg bolus); avoid >4 L in first 24 h (linked to more respiratory complications, ACS, persistent organ failure, higher mortality); reassess in first 12–24 h with urinary catheter ± arterial/central line","Lactated Ringer's reduces SIRS in first 24 h but no difference in SIRS/mortality at 48 h; AGA makes no firm LR-vs-NS recommendation and favors goal-directed therapy; large-volume NS risks hyperchloraemic metabolic acidosis","Start early oral/enteral nutrition within 24–72 h (hypercatabolic state); mild AP can resume normal diet without extra support","Enteral > parenteral: EN maintains gut integrity, reduces bacterial translocation, lowers infected-necrosis/organ-failure/mortality vs PN","NG feeding tolerated in up to ~85% — try NG before NJ (easier, cheaper)","Analgesia: opioids (morphine IV) ± paracetamol; NSAIDs if renal function adequate","Antiemetics (metoclopramide, ondansetron)","Monitor urine output (target >0.5 mL/kg/h), blood glucose, electrolytes"],
    medical:["Antibiotics NOT routine; use only for infected necrosis (meropenem or imipenem — good pancreatic penetration)","Prophylactic antibiotics do NOT reduce mortality or infection rate in sterile necrosis","No effective drug therapy prevents organ failure (glucagon, gabexate, somatostatin, lexipafant all failed in RCTs)","No role for probiotics; PERT only if proven exocrine insufficiency (low fecal elastase / steatorrhea)","Glutamine supplementation beneficial when PN is required","Analgesia: opioids safe — the historical 'morphine causes sphincter of Oddi spasm, avoid it' teaching is not evidence-supported; PCA for severe pain; epidural investigational","PPI/H2RA for stress ulcer prophylaxis","DVT prophylaxis (LMWH) once hemorrhage excluded"],
    surgical:[
      {name:"ERCP + sphincterotomy",when:"Urgent ERCP (<24 h) ONLY for gallstone AP WITH cholangitis; abnormal LFTs alone ≠ indication",notes:"APEC trial: early ERCP+sphincterotomy in severe biliary AP WITHOUT cholangitis did NOT improve organ failure/necrosis/mortality"},
      {name:"Cholecystectomy",when:"After resolution of mild AP before discharge; within same admission if possible",notes:"Reduces recurrence from 30% to <3%"},
      {name:"Necrosectomy (step-up approach)",when:"Infected necrotizing pancreatitis confirmed on CT or FNA; delay ≥4 weeks ideal for walled-off encapsulation — intervention in first 2 weeks carries high morbidity/mortality and is avoided except for specific complications (bleeding, ischemia)",notes:"Step-up (PANTER): drainage first (percutaneous OR endoscopic) is first-line for infected necrosis — ~35% resolve with drainage alone without debridement; escalate to VARD/endoscopic necrosectomy only if no improvement; open if failed"},
      {name:"Open necrosectomy",when:"Failed minimally invasive approach; hemorrhage; bowel fistula",notes:"High morbidity; laparostomy may be required"},
      {name:"Abdominal compartment syndrome decompression",when:"IAP sustained >20 mmHg + new organ failure; medical measures first (NG/rectal decompression, fluid/volume optimization); invasive decompression only if refractory IAP >25 mmHg after MDT discussion",notes:"Options: percutaneous ascites drainage, laparostomy, subcutaneous linea alba fasciotomy. ACS in ~15% of severe AP, ~49% mortality when present"},
      {name:"Disconnected pancreatic duct syndrome",when:"Necrosis transecting body/tail isolates viable distal gland (late complication of necrotizing AP)",notes:"Options: transpapillary stent, transmural EUS drainage, or salvage distal pancreatectomy ± splenectomy"}
    ]
  },
  technique:{
    title:"Step-Up Approach for Infected Pancreatic Necrosis",
    prep:["CT-guided drainage: image-guided percutaneous drain placement into collection","Delay intervention ≥4 weeks from onset (allows walled-off necrosis formation)","Cross-sectional imaging to plan drain trajectory"],
    steps:[
      {n:1,t:"Percutaneous drain placement",d:"Image-guided (US or CT) retroperitoneal drain; 14–20 Fr; irrigate with saline 50 mL q8h"},
      {n:2,t:"Assess response at 72 h",d:"If clinical improvement: continue drainage; serial imaging. If no improvement: proceed to VARD"},
      {n:3,t:"VARD (Video-Assisted Retroperitoneal Debridement)",d:"Enlarge drain tract; introduce 0° laparoscope; blunt debridement with Babcock forceps; irrigate copiously"},
      {n:4,t:"Open necrosectomy if VARD fails",d:"Midline laparotomy; lesser sac entry; finger/sponge debridement; closed continuous irrigation or open packing"}
    ],
    pearls:["Infected necrosis: FNA or CT features (gas bubbles in collection) — do not delay treatment if gas present","PANTER-defined step-up: image-guided percutaneous OR endoscopic drainage first → escalate to VARD/endoscopic necrosectomy only if no improvement; ~35% avoid debridement entirely","Route (percutaneous vs endoscopic) driven by collection position relative to stomach/colon/liver/spleen/kidney; endoscopic (EUS-guided, LAMS) increasingly primary where feasible","MIRP detail: guidewire → balloon dilate to 30 Fr → Amplatz sheath → nephroscope debridement → 8 Fr + 24 Fr drain for continuous lavage (~250 mL/h warmed saline)","Post-intervention SIRS/bacteremia common in first 12–24 h — often needs critical-care observation","Hemorrhage from pseudoaneurysm: 'herald bleed' precedes massive bleed; CT angiogram → angio-embolization first-line (endoscopy usually nondiagnostic)","Late pseudocyst (>4 cm, symptomatic): endoscopic cystogastrostomy preferred"]
  },
  guidelines:[{src:"IAP/APA Evidence-Based Guidelines 2013"},{src:"ACG Clinical Guideline 2013"},{src:"BSG Guidelines on AP 2023"},{src:"Revised Atlanta Classification 2012 (Banks et al., Gut 2013)"},{src:"Determinant-Based Classification of AP Severity (Dellinger et al., Ann Surg 2012)"},{src:"PANTER trial (Dutch Pancreatitis Study Group)"},{src:"TENSION trial"},{src:"APEC trial"},{src:"AGA Institute Guideline on initial management of AP (2018)"},{src:"Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed (2017)"}],
  pearls:["Lactated Ringer's reduces SIRS compared to normal saline — preferred resuscitation fluid","Early oral/enteral feeding (within 24–48 h) reduces infectious complications","ERCP indicated ONLY for concurrent cholangitis or persistent biliary obstruction in gallstone AP","Prophylactic antibiotics have no role in sterile necrosis (multiple RCTs)"],
  mistakes:["Over-using ERCP without cholangitis or obstruction","Delayed cholecystectomy allowing recurrent AP episodes","Routine prophylactic antibiotics in mild/moderate AP — increases resistant organisms","Early necrosectomy before 4 weeks — high mortality; undrained walled-off tissue","Inadequate fluid resuscitation in first 24–48 h"]
},
{
  id:"biliary-colic", dept:"hpb", name:"Symptomatic Cholelithiasis (Biliary Colic)", latin:"Cholelithiasis symptomatica", organ:"Gallbladder",
  severity:"low", tags:["gallbladder","gallstones","RUQ","biliary colic","elective","cholecystectomy"],
  hero:"Intermittent right-upper-quadrant pain from transient cystic-duct obstruction by a gallstone, without inflammation or infection — the earliest symptomatic point on the gallstone-disease spectrum.",
  keypoints:[
    "Distinct from cholecystitis: pain is self-limiting (<6 h) with NO fever, NO leukocytosis, NEGATIVE Murphy's sign",
    "Only 20% of gallstones ever become symptomatic; asymptomatic stones are NOT an indication for surgery",
    "Ultrasound is first-line and confirms stones with >95% sensitivity",
    "Definitive treatment is ELECTIVE laparoscopic cholecystectomy — timing is the key decision (see criteria)",
    "Once symptomatic, recurrence is ~70% within 2 years and 1–2% per year develop a complication (cholecystitis, pancreatitis, choledocholithiasis)"
  ],
  differentials:["Acute cholecystitis (inflamed — persistent pain, fever, +Murphy's)","Peptic ulcer disease / GORD","Acute pancreatitis","Functional dyspepsia","Right-sided renal colic"],
  mnemonics:[{name:"5 Fs",text:"Fat, Female, Fertile, Forty, Fair — classic risk profile (males and thin patients also affected)"},{name:"Colic ≠ Colicky",text:"Biliary 'colic' is a misnomer — the pain is CONSTANT for 1–6 h then subsides, not truly waxing/waning"}],
  overview:{
    definition:"Symptomatic gallstone disease in which a calculus transiently impacts the cystic duct or Hartmann's pouch, causing episodic biliary-type pain that resolves once the stone falls back — without the sustained obstruction, inflammation, or infection that define cholecystitis.",
    epidemiology:"Gallstones present in 10–15% of Western adults; F:M = 2–3:1; incidence rises with age, obesity, rapid weight loss, pregnancy, and haemolytic disease. Only ~2–4% of stone carriers become symptomatic each year.",
    pathophysiology:"Cholesterol supersaturation, gallbladder hypomotility, and cholesterol crystal nucleation form stones. A stone intermittently obstructing the cystic duct raises intraluminal pressure → gallbladder wall tension and visceral pain. When the stone disimpacts, pressure falls and pain resolves — no wall inflammation occurs (differentiating it from cholecystitis).",
    classification:[
      {label:"Asymptomatic cholelithiasis",note:"Incidental stones, no symptoms — expectant management; surgery only for specific high-risk groups (see criteria)"},
      {label:"Biliary colic (uncomplicated symptomatic)",note:"Episodic biliary pain, normal bloods, normal gallbladder wall — elective cholecystectomy"},
      {label:"Complicated gallstone disease",note:"Cholecystitis, choledocholithiasis, gallstone pancreatitis, cholangitis, gallstone ileus, Mirizzi — see dedicated entries"}
    ]
  },
  diagnosis:{
    history:["Episodic RUQ or epigastric pain, constant for 30 min–6 h then resolving","Radiation to right scapula tip or interscapular region","Often postprandial, especially after fatty meals; may wake patient at night","Nausea; bloating; NO fever or rigors","Prior similar self-limiting episodes"],
    examination:["Usually normal between attacks","Mild RUQ tenderness during an attack","Murphy's sign NEGATIVE (positive = cholecystitis)","No fever, no jaundice — their presence signals a complication"],
    investigations:[
      {name:"Transabdominal US",role:"First-line: mobile echogenic foci with posterior acoustic shadowing; NORMAL wall thickness (<3 mm) and NO pericholecystic fluid — sensitivity >95% for stones"},
      {name:"LFTs",role:"Should be NORMAL; elevated ALP/bilirubin suggests CBD stone (choledocholithiasis)"},
      {name:"CBC, CRP",role:"Normal WBC/CRP confirm absence of inflammation — distinguishes from cholecystitis"},
      {name:"Amylase/lipase",role:"Exclude gallstone pancreatitis if pain atypical or severe"},
      {name:"MRCP",role:"If deranged LFTs or dilated CBD on US — non-invasively excludes choledocholithiasis before cholecystectomy"},
      {name:"Endoscopic US (EUS)",role:"Highly sensitive for small CBD stones / microlithiasis when MRCP equivocal"}
    ]
  },
  criteria:{
    title:"Timing & Indications for Elective Cholecystectomy",
    items:[
      {k:"Golden window (symptomatic)",v:"Offer elective laparoscopic cholecystectomy promptly after first biliary-colic presentation — do NOT wait for a complication (NICE CG188)"},
      {k:"Index-admission surgery",v:"If admitted with biliary colic, same-admission or early (within 6 weeks) lap chole reduces readmission and progression to cholecystitis/pancreatitis"},
      {k:"After gallstone pancreatitis",v:"Cholecystectomy during the SAME admission once mild pancreatitis has settled — delay raises recurrence to ~30%"},
      {k:"Asymptomatic — operate anyway if",v:"Porcelain gallbladder, gallbladder polyp ≥10 mm, stones >3 cm, haemolytic anaemia (e.g. spherocytosis), or transplant/bariatric candidate"},
      {k:"Reasons to DELAY",v:"Active pregnancy (prefer 2nd trimester or defer to postpartum if mild), unfit/high anaesthetic risk, uncontrolled comorbidity, or need to first clear a CBD stone (ERCP/MRCP)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Analgesia during attack: NSAID (e.g. diclofenac IM/PO) first-line — as effective as opioids and may reduce progression to cholecystitis","Antiemetic for nausea","Low-fat dietary advice reduces attack frequency but does NOT cure — not a substitute for surgery","Reassure asymptomatic incidental stones need no intervention"],
    medical:["Ursodeoxycholic acid: only for small radiolucent cholesterol stones in patients unfit for surgery — slow, low efficacy, high recurrence off-treatment","No role for antibiotics (no infection present)"],
    surgical:[
      {name:"Elective laparoscopic cholecystectomy",when:"First-line for symptomatic stones; offer promptly after presentation — index admission or early elective list within ~6 weeks",notes:"Day-case in most fit patients; critical view of safety mandatory; on-table cholangiogram if any suspicion of CBD stone"},
      {name:"Cholecystectomy + intraoperative CBD clearance",when:"Concurrent CBD stone on imaging — single-stage lap CBD exploration OR two-stage ERCP then lap chole",notes:"Choice depends on local expertise; single-stage avoids a second procedure"},
      {name:"Open cholecystectomy",when:"Conversion for dense adhesions, unclear anatomy, or bile-duct injury concern",notes:"Not a failure — a safe decision; subtotal cholecystectomy if Calot's triangle unsafe"},
      {name:"Expectant (no surgery)",when:"Asymptomatic incidental stones without high-risk features; or patient unfit/declines",notes:"Safety-net advice: return with fever, jaundice, or persistent pain (signals a complication)"}
    ]
  },
  technique:{
    title:"Elective Day-Case Laparoscopic Cholecystectomy",
    prep:["Confirm normal LFTs and US; exclude CBD stone (MRCP if any doubt)","General anaesthesia; supine, reverse Trendelenburg with left tilt","4-port technique: 10 mm umbilical (camera), 10 mm epigastric, two 5 mm right subcostal","Antibiotic prophylaxis not routine for uncomplicated elective cases"],
    steps:[
      {n:1,t:"Establish pneumoperitoneum and ports",d:"Open (Hasson) umbilical entry; insufflate to 12–14 mmHg; place working ports under vision"},
      {n:2,t:"Retract the gallbladder",d:"Fundus retracted cephalad over the liver; Hartmann's pouch retracted laterally to open Calot's triangle"},
      {n:3,t:"Dissect the hepatocystic triangle",d:"Clear peritoneum and fibrofatty tissue; expose cystic duct and cystic artery"},
      {n:4,t:"Achieve Critical View of Safety",d:"Only two structures entering the gallbladder, lower third separated from the liver bed — MANDATORY before any clip"},
      {n:5,t:"Clip and divide cystic duct and artery",d:"Consider on-table cholangiogram if CBD stone suspected; clip and divide once anatomy confirmed"},
      {n:6,t:"Detach gallbladder and retrieve",d:"Diathermy off the liver bed; haemostasis; retrieve in a bag; deflate and close; discharge same day if well"}
    ],
    pearls:["Elective setting is the safest time to operate — inflammation makes later surgery harder and more dangerous","Always achieve the Critical View of Safety before clipping — prevents bile-duct injury","Low threshold for intra-operative cholangiogram if LFTs were ever deranged","Warn the patient ~10–15% have persistent dyspepsia unrelated to stones (manage expectations pre-op)"]
  },
  guidelines:[{src:"NICE CG188 Gallstone Disease 2014"},{src:"SAGES Guidelines for Cholecystectomy 2022"},{src:"World Society of Emergency Surgery (WSES) Gallstone Guidelines 2016"}],
  pearls:["Biliary colic = pain WITHOUT inflammation; normal WBC/CRP and negative Murphy's separate it from cholecystitis","Symptomatic stones warrant surgery even between attacks — recurrence and complication risk are high","Asymptomatic stones are generally left alone — surgery only for defined high-risk features","Deranged LFTs before cholecystectomy demand CBD imaging (MRCP/EUS) to avoid a retained duct stone"],
  mistakes:["Operating on asymptomatic incidental stones without a high-risk indication","Labelling inflamed gallbladder (fever, +Murphy's, raised WBC) as 'colic' and delaying — that is cholecystitis","Missing a CBD stone by not checking LFTs before elective surgery","Endless dietary/medical temporising in a fit symptomatic patient — delays definitive cure and invites complications"],
  related:[
    {id:"cholecystitis", note:"The inflamed progression — persistent pain, fever, positive Murphy's; needs early (not elective) surgery"},
    {id:"choledocholithiasis", note:"Stone migrates to the CBD — jaundice and deranged LFTs; needs ERCP/CBD clearance"},
    {id:"ap", note:"Gallstone pancreatitis — a complication mandating same-admission cholecystectomy after recovery"}
  ]
},
{
  id:"cholecystitis", dept:"hpb", name:"Acute Cholecystitis", latin:"Cholecystitis acuta", organ:"Gallbladder",
  severity:"medium", tags:["gallbladder","gallstones","RUQ","Murphy","laparoscopy"],
  hero:"Acute inflammation of the gallbladder wall, almost always due to cystic duct obstruction by calculi.",
  keypoints:[
    "95% calculous; 5% acalculous (ICU, post-major surgery, TPN, burns)",
    "Tokyo Guidelines 2018: Grade I/II/III based on local and systemic severity",
    "Murphy's sign positive in >90%; US diagnostic (thickened wall, pericholecystic fluid, sonographic Murphy)",
    "Early laparoscopic cholecystectomy (<72 h) superior to delayed: shorter stay, fewer complications",
    "Percutaneous cholecystostomy for Grade III or operative risk too high"
  ],
  differentials:["Acute pancreatitis","Choledocholithiasis/cholangitis","Peptic ulcer disease","Hepatitis (acute)","Right lower lobe pneumonia"],
  mnemonics:[{name:"5 Fs",text:"Fat, Female, Fertile, Forty, Fair — classic cholecystitis risk profile (though males and thin patients get it too)"}],
  overview:{
    definition:"Acute inflammation of the gallbladder most commonly due to obstruction of the cystic duct by a calculus.",
    epidemiology:"Gallstones in 15% Western population; 1–3% develop acute cholecystitis per year; F:M = 2:1.",
    pathophysiology:"Cystic duct obstruction → bile stasis → mucosal injury by concentrated bile salts → secondary bacterial infection (E. coli, Klebsiella, Enterococcus) → wall edema, ischemia, necrosis if untreated.",
    classification:[
      {label:"Grade I (Mild)",note:"No organ dysfunction; mild local inflammation; low surgical risk"},
      {label:"Grade II (Moderate)",note:"WBC >18, symptom duration >72 h, palpable mass, marked local inflammation; higher surgical difficulty"},
      {label:"Grade III (Severe)",note:"Organ dysfunction (cardiovascular, neurological, respiratory, renal, hepatic, hematological)"}
    ]
  },
  diagnosis:{
    history:["RUQ/epigastric pain >30 min (vs biliary colic <6 h)","Nausea, vomiting, fever","Prior biliary colic episodes","Positive Murphy's (stops inspiration on palpation of RUQ)"],
    examination:["Murphy's sign — sensitivity 65%, specificity 87%","RUQ tenderness, palpable mass (empyema/phlegmon)","Fever, tachycardia","Jaundice if Mirizzi syndrome or cholangitis"],
    investigations:[
      {name:"CBC",role:"WBC >12 in 60–70%"},
      {name:"LFTs",role:"Mildly elevated; marked elevation suggests choledocholithiasis or cholangitis"},
      {name:"CRP",role:">40 mg/L supports diagnosis"},
      {name:"US abdomen",role:"Gold standard: gallstones, thickened wall (>4 mm), pericholecystic fluid, sonographic Murphy — sensitivity 88%, specificity 80%"},
      {name:"HIDA scan",role:"If US equivocal; non-filling of gallbladder = positive; sensitivity 97%, specificity 90%"},
      {name:"CT abdomen",role:"Complications: perforation, abscess, emphysematous cholecystitis (gas in wall)"}
    ]
  },
  criteria:{
    title:"Tokyo Guidelines 2018 Diagnostic Criteria",
    items:[
      {k:"Local signs",v:"Murphy's sign, RUQ tenderness/mass/pain"},
      {k:"Systemic signs",v:"Fever, elevated CRP, elevated WBC"},
      {k:"Imaging",v:"Characteristic US/CT/MRI findings"},
      {k:"Diagnosis",v:"One local + one systemic sign, or characteristic imaging — sensitivity 91.2%, specificity 96.9%"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV fluids, NBM","Analgesia: NSAIDs (diclofenac) reduce prostaglandin-mediated inflammation; opioids if severe","Antiemetics","Antibiotics: Grade II/III — piperacillin-tazobactam or cefuroxime + metronidazole; GRADE I elective only"],
    medical:["Antibiotics for Grade II/III or immunocompromised","Ursodeoxycholic acid: only for cholesterol gallstone dissolution in non-surgical candidates — low efficacy"],
    surgical:[
      {name:"Laparoscopic cholecystectomy (early)",when:"Within 72 h of symptom onset; Grade I and most Grade II — evidence supports superior outcomes",notes:"Dissection in hepatocystic triangle; critical view of safety before clipping; fundus-first if obscured"},
      {name:"Open cholecystectomy",when:"Failed laparoscopic approach; dense adhesions; Mirizzi; perforation; bile duct injury",notes:"Subcostal (Kocher) incision; subtotal cholecystectomy if Calot's triangle unsafe"},
      {name:"Subtotal cholecystectomy",when:"Cannot safely identify cystic duct (frozen Calot's, Mirizzi, severe inflammation)",notes:"Leave posterior wall attached to liver; oversew cystic duct stump; drain — prevents bile duct injury"},
      {name:"Percutaneous cholecystostomy",when:"Grade III or ASA IV–V operative risk; bridge to definitive surgery",notes:"US-guided transhepatic or transperitoneal; 8–10 Fr drain; remove after 6–8 weeks when tract mature"}
    ]
  },
  technique:{
    title:"Laparoscopic Cholecystectomy — Critical View of Safety",
    prep:["General anesthesia, supine or French position","4-port technique: umbilical 10 mm, epigastric 5 mm, two right hypochondrial 5 mm","30° laparoscope; patient in reverse Trendelenburg, left tilt"],
    steps:[
      {n:1,t:"Retract gallbladder fundus",d:"Grasper on fundus, retract superolaterally over liver edge"},
      {n:2,t:"Open peritoneum of hepatocystic triangle",d:"Hook or scissors; divide anterior and posterior peritoneal leaves; dissect fibrofatty tissue"},
      {n:3,t:"Achieve Critical View of Safety",d:"Two structures only entering gallbladder; lower 1/3 of gallbladder separated from liver bed — MANDATORY before clipping"},
      {n:4,t:"Clip and divide cystic duct and artery",d:"3 clips on duct (2 patient side, 1 specimen); 2 clips on artery; divide between clips"},
      {n:5,t:"Dissect gallbladder from liver bed",d:"Hook diathermy along avascular plane; hemostasis; retrieve in bag"},
      {n:6,t:"Check for bleeding/bile leak",d:"Irrigate and inspect; consider IOC or laparoscopic US if anatomy uncertain"}
    ],
    pearls:["Never clip until Critical View of Safety achieved — prevents bile duct injury","If doubt: convert, subtotal, or on-table cholangiogram","Fundus-first dissection useful when severe inflammation at Calot's","Rouviere's sulcus: liver fissure posterior to gallbladder — keep dissection anterior to it"]
  },
  guidelines:[{src:"Tokyo Guidelines 2018 (TG18)"},{src:"SAGES Guidelines for Cholecystectomy 2022"},{src:"NICE CG188 Gallstone Disease 2014"}],
  pearls:["Critical View of Safety is mandatory before any clipping — prevents 70% of bile duct injuries","Early lap chole (<72 h) reduces hospital stay by 4 days vs delayed","Subtotal cholecystectomy is a deliberate safe step, not a failure","HIDA scan if US equivocal and clinical suspicion remains high"],
  mistakes:["Clipping before Critical View of Safety achieved","Misidentifying CBD as cystic duct — classic bile duct injury","Delaying surgery unnecessarily in Grade I–II — increases conversion rate and adhesions","Inadequate drain position in percutaneous cholecystostomy — use imaging guidance"]
},
{
  id:"cholangitis", dept:"hpb", name:"Acute Cholangitis", latin:"Cholangitis acuta", organ:"Bile duct",
  severity:"high", tags:["bile duct","Charcot","Reynold","ERCP","sepsis","stones"],
  hero:"Bacterial infection of the biliary tract due to biliary obstruction, ranging from mild to life-threatening suppurative cholangitis.",
  keypoints:[
    "Charcot's triad: fever + RUQ pain + jaundice — present in only 50–70%",
    "Reynolds' pentad adds altered consciousness + hypotension — suggests suppurative cholangitis (mortality >50% untreated)",
    "Most common cause: choledocholithiasis (60%); others: stricture, stent occlusion, malignancy",
    "Tokyo Guidelines 2018: Grade I/II/III — urgent biliary decompression for Grade II–III",
    "ERCP with stone extraction/stenting is definitive treatment"
  ],
  differentials:["Acute cholecystitis","Hepatic abscess","Ascending pyelonephritis","Acute pancreatitis","Perforated viscus"],
  mnemonics:[{name:"Charcot's Triad → Reynolds' Pentad",text:"RUQ Pain + Fever + Jaundice → ADD Hypotension + AMS = Suppurative cholangitis (emergency decompression)"}],
  overview:{
    definition:"Acute bacterial infection of the biliary tract caused by biliary obstruction with resulting bacterobilia and systemic sepsis.",
    epidemiology:"80% occur in setting of choledocholithiasis; common in 6th–7th decade; M=F.",
    pathophysiology:"Biliary obstruction → bile stasis → bacterial overgrowth (E. coli 50%, Klebsiella, Enterococcus, Bacteroides) → bacteremia and endotoxemia → SIRS → shock.",
    classification:[
      {label:"Grade I (Mild)",note:"Responds to initial medical therapy; no organ dysfunction"},
      {label:"Grade II (Moderate)",note:"Fails to respond to medical therapy within 24 h; local complications"},
      {label:"Grade III (Severe)",note:"Organ dysfunction (same criteria as TG18 severe cholecystitis)"}
    ]
  },
  diagnosis:{
    history:["Fever with rigors (most common symptom)","RUQ/epigastric pain","Jaundice (may be absent)","Prior biliary surgery, ERCP, or known gallstones","Altered consciousness (severe)"],
    examination:["RUQ tenderness (less marked than cholecystitis)","Jaundice","Fever >38°C","Hypotension (Grade III)","Confusion (Grade III)"],
    investigations:[
      {name:"CBC",role:"WBC elevated; neutrophilia; thrombocytopenia in severe disease"},
      {name:"LFTs",role:"ALP/GGT markedly elevated; bilirubin elevated; transaminases moderately elevated"},
      {name:"Blood cultures",role:"Positive in 21–71%; take BEFORE antibiotics; guides definitive therapy"},
      {name:"Coagulation",role:"Prolonged PT in severe disease or liver failure"},
      {name:"US abdomen",role:"CBD dilation (>6 mm or >8 mm post-cholecystectomy) ± stone; identifies etiology"},
      {name:"CT abdomen",role:"Better delineation of obstruction level; identifies malignancy, complications"},
      {name:"MRCP",role:"Non-invasive biliary imaging; confirms CBD stones before therapeutic ERCP"}
    ]
  },
  criteria:{
    title:"Tokyo Guidelines 2018 Diagnostic Criteria",
    items:[
      {k:"A — Systemic inflammation",v:"Fever/rigors; CRP ≥1 mg/dL; WBC <4 or >10×10⁹/L"},
      {k:"B — Cholestasis",v:"Jaundice (bilirubin ≥2 mg/dL); ALP/GGT/ALP >1.5× ULN"},
      {k:"C — Imaging",v:"Biliary dilation; or evidence of etiology on imaging"},
      {k:"Suspected diagnosis",v:"One item from A + one from B or C"},
      {k:"Definite diagnosis",v:"One from A + one from B + one from C"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NBM, IV fluids, resuscitation","Analgesia","Monitor urine output, blood pressure, lactate"],
    medical:["IV antibiotics: piperacillin-tazobactam (Grade II/III); cefuroxime + metronidazole (Grade I)","Duration: 4–7 days after decompression for uncomplicated; longer if bacteremia","Antifungals if Candida on cultures or immunocompromised"],
    surgical:[
      {name:"ERCP + sphincterotomy ± stone extraction",when:"Grade I within 72 h; Grade II within 24 h; Grade III urgent (<12 h)",notes:"Biliary stent if stones cannot be fully cleared; plastic or SEMS for malignant obstruction"},
      {name:"Percutaneous transhepatic cholangiography (PTC)",when:"Failed ERCP; surgically altered anatomy (Roux-en-Y); malignant hilar obstruction",notes:"External biliary drain initially; can place internal-external drain"},
      {name:"Endoscopic ultrasound-guided biliary drainage (EUS-BD)",when:"Failed ERCP; growing evidence for choledochoduodenostomy or hepaticogastrostomy",notes:"Requires expert center"},
      {name:"Surgical drainage",when:"Failed endoscopic/percutaneous; rare; requires hepaticojejunostomy or choledochoduodenostomy",notes:"High morbidity in acute setting; prefer when anatomy already disrupted"}
    ]
  },
  technique:{
    title:"ERCP for Cholangitis",
    prep:["Patient in prone or left-lateral position","Conscious sedation or GA for unwell patients","Prophylactic antibiotics (already on treatment antibiotics)","Fluoroscopy available"],
    steps:[
      {n:1,t:"Cannulate bile duct",d:"Side-viewing duodenoscope; identify papilla; selective CBD cannulation with sphincterotome and guidewire"},
      {n:2,t:"Cholangiogram",d:"Inject contrast gently (high pressure → bacteremia); identify filling defects, strictures, dilation"},
      {n:3,t:"Sphincterotomy",d:"10–15 mm cut at 11 o'clock; expands papilla; allows stone passage"},
      {n:4,t:"Stone extraction",d:"Balloon catheter or Dormia basket; balloon sweep; lithotripsy if stones >15 mm (mechanical or electrohydraulic)"},
      {n:5,t:"Stent placement if stones not cleared",d:"7 or 10 Fr plastic stent; straight or pigtail; bridges to repeat ERCP or surgery"},
      {n:6,t:"Post-procedure",d:"Monitor for pancreatitis, bleeding, perforation; CXR if perforation suspected"}
    ],
    pearls:["Decompress first in Grade III — even simple stent or drain is life-saving","Avoid overfilling bile duct with contrast in active cholangitis — worsens bacteremia","Cholecystectomy after resolution — typically within same admission for stones"]
  },
  guidelines:[{src:"Tokyo Guidelines 2018 (TG18)"},{src:"ESGE Guideline on CBD Stones 2019"},{src:"BSG Guideline on ERCP 2020"}],
  pearls:["Grade III: resuscitate + urgent decompression within 12 h — do not wait for full stabilization","Blood cultures before antibiotics — changes therapy in 30% of cases","MRCP before ERCP avoids unnecessary endoscopy if CBD stone not confirmed","After successful ERCP: interval cholecystectomy reduces recurrent cholangitis from 20% to <1%"],
  mistakes:["Diagnosing only on Charcot's triad — 50% do not have all three features","Delaying decompression in Grade III for further investigation","High-pressure contrast injection in active cholangitis — bacteremic shock","Not performing cholecystectomy after resolution — 20% recurrence within 1 year"]
},
{
  id:"hcc", dept:"hpb", name:"Hepatocellular Carcinoma", latin:"Carcinoma hepatocellulare", organ:"Liver",
  severity:"high", tags:["liver","cirrhosis","AFP","Barcelona","ablation","resection","transplant"],
  hero:"Primary malignancy of hepatocytes, arising in >90% of cases in the setting of chronic liver disease or cirrhosis.",
  keypoints:[
    "4th leading cause of cancer death and 6th most common neoplasia worldwide; male:female = 3:1",
    "Major risk factors: HBV, HCV, alcohol-related cirrhosis, MAFLD (metabolic dysfunction-associated fatty liver disease — fastest-growing cause in Western transplant candidates), aflatoxin B1",
    "One-third of cirrhotics develop HCC over their lifetime; annual incidence 1–8% by etiology; overall 5-yr survival poor at 5–15%",
    "HBV can cause HCC without cirrhosis in 20–30% (viral genome integration); HCV DAA SVR reduces but does not eliminate risk — cirrhotics still need surveillance",
    "Barcelona Clinic Liver Cancer (BCLC) staging guides treatment allocation",
    "Surveillance: US ± AFP every 6 months in all cirrhotic patients",
    "Diagnostic: arterial hyperenhancement + venous washout on CECT/MRI in nodule >1 cm = HCC without biopsy"
  ],
  differentials:["Cholangiocarcinoma (ICC)","Hepatic metastases","Hepatic hemangioma","Focal nodular hyperplasia","Hepatic adenoma"],
  mnemonics:[{name:"BCLC Stages",text:"0=Very early (single<2cm) → A=Early (single any size OR up to 3 nodules≤3cm) → B=Intermediate (multinodular) → C=Advanced (PVI/N1/M1) → D=End-stage"}],
  overview:{
    definition:"Primary hepatocellular malignancy arising from hepatocytes, occurring predominantly in cirrhotic livers.",
    epidemiology:"~800 000 deaths/year globally; 6th most common neoplasia; 4th leading cause of cancer death. 80% of cases in sub-Saharan Africa/West Asia (HBV + aflatoxin B1); HCV predominates in Japan/Europe/US, now being overtaken by MAFLD and alcohol.",
    pathophysiology:"Repeated hepatocyte injury → regenerative nodule → dysplastic nodule → HCC (via Wnt/β-catenin, TP53, Ras-MAPK pathways). Vascular invasion and arterialisation are hallmarks. Key driver alterations: TERT promoter (telomerase), CTNNB1/Wnt-β-catenin, TP53, MAP-kinase signaling. Two molecular classes: proliferative (RAS/FGF, HBV, poor prognosis) vs non-proliferative (Wnt-β-catenin, HCV). Aflatoxin B1 induces a specific p53 mutation.",
    classification:[
      {label:"BCLC 0",note:"Very early: single <2 cm, preserved liver function, PS 0"},
      {label:"BCLC A",note:"Early: single lesion of any size OR up to 3 nodules each ≤3 cm, preserved liver function, no vascular invasion, no symptoms — curative intent"},
      {label:"BCLC B",note:"Intermediate: multinodular, no PVI/metastases, Child-Pugh A–B, PS 0 — TACE"},
      {label:"BCLC C",note:"Advanced: PVI, N1, or M1, Child-Pugh A–B, PS 1–2 — sorafenib/atezolizumab+bev"},
      {label:"BCLC D",note:"End-stage: Child-Pugh C, PS 3–4 — best supportive care"}
    ]
  },
  diagnosis:{
    history:["Often asymptomatic until advanced — detected on surveillance","RUQ pain, weight loss, anorexia (advanced)","Background cirrhosis symptoms: ascites, jaundice, encephalopathy","Sudden decompensation in previously stable cirrhosis → investigate for HCC (portal/hepatic-vein invasion causing new ascites or variceal bleed)","Paraneoplastic: hypoglycemia, erythrocytosis, hypercalcemia"],
    examination:["Hepatomegaly with or without a palpable mass","Signs of chronic liver disease: spider naevi, palmar erythema, caput medusae","Ascites, jaundice (advanced)","Hepatic bruit (highly specific for HCC)","Multidisciplinary reference-center management (hepatologist, surgeon, interventional radiologist, pathologist, radiation/medical oncologist)"],
    investigations:[
      {name:"AFP (alpha-fetoprotein)",role:"Suboptimal for surveillance — often normal in small tumors, raised by underlying liver disease, and elevated in cholangiocarcinoma; per EASL/AASLD its use in screening is optional; >400 ng/mL highly suggestive"},
      {name:"AFP-L3, DCP/PIVKA-II, glypican-3",role:"Additional biomarkers under study; AFP-L3 (lectin fraction) >10% indicates HCC"},
      {name:"CECT abdomen (dynamic, triphasic)",role:"Typical arterial uptake + washout sens ~80%/spec ≥90% in nodules >2 cm; in cirrhosis a single dynamic technique diagnostic for nodules >1 cm; nodules <1 cm → repeat imaging in 3–4 months (>60% non-malignant)"},
      {name:"MRI liver with hepatobiliary contrast",role:"More sensitive for small nodules and satellite lesions; LIRADS classification"},
      {name:"Biopsy",role:"Only if atypical imaging or non-cirrhotic liver; NOT 100% sensitive — a negative result does not exclude HCC; IHC panel raises specificity (glypican-3 + HSP-70 + glutamine synthetase)"},
      {name:"Non-cirrhotic liver mass",role:"Diagnosis by histology — imaging criteria are not valid outside cirrhosis"},
      {name:"Ultrasound screening",role:"Sensitivity 60–80%, specificity >90%"},
      {name:"Child-Pugh / MELD score",role:"Quantify liver function — determines treatment eligibility"},
      {name:"Staging CT chest/abdomen/pelvis",role:"Assess for extrahepatic disease, portal vein invasion, lymph nodes"}
    ]
  },
  criteria:{
    title:"LI-RADS Classification (CECT/MRI)",
    items:[
      {k:"LR-1",v:"Definitely benign"},
      {k:"LR-2",v:"Probably benign"},
      {k:"LR-3",v:"Intermediate probability for HCC"},
      {k:"LR-4",v:"Probably HCC"},
      {k:"LR-5",v:"Definitely HCC — arterial hyperenhancement + washout ± capsule; treat as HCC"},
      {k:"LR-M",v:"Probably malignant but not HCC-specific"}
    ]
  },
  scoring:[
    {name:"Child-Pugh Score",items:["Albumin >3.5 / 2.8–3.5 / <2.8 g/dL; Bilirubin <2 / 2–3 / >3 mg/dL; INR <1.7 / 1.8–2.3 / >2.3; ascites absent/slight/moderate; encephalopathy none / I–II / III–IV","A (5–6): good liver function; B (7–9): moderate; C (10–15): poor — not suitable for resection"]},
    {name:"ALBI score (albumin-bilirubin)",items:["Objective 2-variable liver-function grade; sub-stratifies Child-Pugh A into prognostically distinct groups; avoids subjective ascites/encephalopathy"]},
    {name:"CLIP score",items:["Child-Pugh + tumor morphology + portal-vein thrombosis + AFP (≥400); score 4–6 → median survival ~3.2 mo"]},
    {name:"Okuda system",items:["Albumin, bilirubin, ascites, tumor >/<50% of liver"]},
    {name:"Clinically significant portal hypertension",items:["HVPG ≥10 mmHg (catheter) OR surrogates — thrombocytopenia, varices, ascites, splenomegaly, or elastography; predicts post-resection decompensation"]},
    {name:"Screening threshold",items:["AASLD/EASL: surveil when annual HCC risk ≥1.5%; risk scores PAGE-B, Toronto-THRI identify high-risk non-cirrhotic HBV"]},
    {name:"Chemoprevention signals",items:["Statins, aspirin, coffee associated with reduced HCC risk (observational)"]}
  ],
  management:{
    conservative:["Surveillance: US ± AFP every 6 months in cirrhotics","Treat underlying liver disease: antivirals for HBV/HCV, alcohol abstinence","Nutritional support, manage cirrhosis complications"],
    medical:["First-line: atezolizumab + bevacizumab (IMbrave150; median OS not reached vs 13.2 mo sorafenib, HR 0.58; PFS 6.8 vs 4.3 mo; ORR 27% vs 12%; requires treated varices, Child-Pugh A) — new standard","First-line alternatives if immunotherapy contraindicated: sorafenib (SHARP OS 10.7 vs 7.9 mo; Asia-Pacific 6.5 vs 4.2 mo) or lenvatinib (REFLECT non-inferior, OS 13.6 vs 12.3 mo, higher ORR)","First-line alternative: durvalumab + single-dose tremelimumab (HIMALAYA/STRIDE) — OS superior to sorafenib; durvalumab monotherapy non-inferior to sorafenib","Second-line (post-sorafenib): regorafenib (RESORCE OS 10.6 vs 7.8 mo; sorafenib→regorafenib sequence OS ~26 mo), cabozantinib (CELESTIAL OS 10.2 vs 8.0 mo), ramucirumab (REACH-2, restricted to AFP ≥400 ng/mL: OS 8.5 vs 7.3 mo)","Sorafenib dose-adjust for hyperbilirubinemia: 400 mg BD if bili <ULN; 200 mg BD if ≤1.5×ULN; 200 mg OD if 1.5–3×ULN; avoid if >3×ULN","Cytotoxic chemotherapy ineffective (doxorubicin, PIAF, FOLFOX4 — no meaningful survival benefit; FOLFOX4 approved only in China)","Hand-foot syndrome under sorafenib/regorafenib correlates with better outcome — do not reflexively interrupt","Combination TKI + checkpoint (lenvatinib + pembrolizumab, KEYNOTE-524, ORR ~50%) under phase III evaluation (LEAP-002)","Best supportive care for BCLC D"],
    surgical:[
      {name:"Hepatic resection",when:"Treatment of choice for HCC in a non-cirrhotic liver. In cirrhosis: normal bilirubin + no clinically significant portal hypertension; single lesion optimal (selected 2–3 nodules considered); tumor size not a limit but larger = higher recurrence; segmental/macrovascular invasion → generally systemic therapy",notes:"5-yr survival 70–80% in optimally selected patients (normal bilirubin, no significant portal hypertension); falls to ~50% if portal hypertension present. Intraoperative US mandatory to detect occult 0.5–1 cm satellites and guide anatomical (segment-oriented) resection. Laparoscopic/robotic comparable survival with less morbidity (Louisville 2008, Morioka 2014, Southampton 2017 consensus). No adjuvant therapy proven to reduce recurrence; 'ab initio' transplant listing if adverse pathology (microvascular invasion, satellites, poor differentiation)"},
      {name:"Liver transplantation",when:"Milan criteria: single ≤5 cm or ≤3 nodules each ≤3 cm, no PVI, no metastases — curative for HCC and cirrhosis",notes:"5-yr survival 60–80%, recurrence <15% within Milan; expanded criteria (UCSF, Up-to-7) at some centers. AFP >1000 ng/mL → high recurrence risk (AFP-model refines Milan). Bridging (TACE/ablation) when waitlist >6 months to prevent dropout; downstaging to within Milan possible (up to ~90% with strict criteria); living-donor LT reduces dropout/waiting time, restrict to expert centers for donor safety"},
      {name:"Radiofrequency / microwave ablation (RFA/MWA)",when:"Best in solitary tumors <2 cm (necrosis + recurrence comparable to resection); 2–3 cm or ≤3 nodules also treatable; not surgical candidate; MWA preferred >3 cm or near major vessels (less heat-sink)",notes:"Percutaneous, laparoscopic, or intraoperative; ethanol injection for subcapsular/perivascular/near-gallbladder lesions; SURF trial suggests resection not superior to ablation ≤3 cm"},
      {name:"TACE (trans-arterial chemoembolization)",when:"BCLC B (intermediate); bridge to transplant; can downstage to Milan",notes:"DEB-TACE ≈ conventional lipiodol-TACE (DEB less toxic); both > bland embolization; median survival ~30 mo (may exceed 40). Absolute contraindications: decompensated cirrhosis, main/segmental portal-vein thrombosis or severely reduced portal flow. Reassess liver function each cycle; failure/untreatable progression → stage migration to systemic"},
      {name:"TARE / SIRT (radioembolization, Y-90)",when:"Portal vein invasion (BCLC C); failed TACE; downstaging; Child-Pugh A",notes:"Comparable tumor control to TACE but not superior to sorafenib in BCLC C (SARAH, SIRveNIB) and no added benefit combined with sorafenib (SORAMIC); role still being defined"}
    ]
  },
  technique:{
    title:"Right Hepatectomy for HCC",
    prep:["CT volumetry: FLR must be ≥20% (healthy liver) or ≥40% (cirrhotic)","Portal vein embolization if FLR borderline (wait 4–6 weeks)","ICG clearance test (especially in Asian centers) — R15 <14% required","Patient supine; epidural analgesia"],
    steps:[
      {n:1,t:"Incision",d:"Rooftop (chevron) or J-shaped; thoracoabdominal if large right lobe tumor"},
      {n:2,t:"Mobilization",d:"Divide right triangular and coronary ligaments; expose retrohepatic IVC"},
      {n:3,t:"Cholecystectomy",d:"Remove gallbladder; expose hepatoduodenal ligament"},
      {n:4,t:"Hilar dissection",d:"Selective ligation of right hepatic artery and right portal vein after anatomical identification; confirm with intraoperative US"},
      {n:5,t:"Parenchymal transection",d:"CUSA/harmonic scalpel along Cantlie's line (Makuuchi technique); maintain CVP <5 cmH2O; Pringle maneuver (intermittent) if bleeding"},
      {n:6,t:"Right hepatic vein division",d:"Staple or suture right hepatic vein; check hemostasis; biliary leak test"},
      {n:7,t:"Closure",d:"Drain placement; close in layers"}
    ],
    pearls:["Pringle maneuver: Hepatoduodenal ligament clamp; limit to 15 min continuous or 30 min cumulative in cirrhosis","Keep CVP <5 cmH2O during transection — reduces blood loss","Always mark resection line with intraoperative US before cutting","R0 margin ≥1 mm — recurrence correlates with margin status"]
  },
  guidelines:[{src:"BCLC Strategy 2022 (Reig et al., J Hepatol)"},{src:"EASL Clinical Practice Guidelines HCC 2018"},{src:"AASLD HCC Guidance 2023"},{src:"Milan criteria (Mazzaferro et al., N Engl J Med 1996)"},{src:"UCSF expanded criteria (Yao et al., Hepatology 2001)"},{src:"LI-RADS (Mitchell et al., Hepatology 2015; ACR)"},{src:"IMbrave150 — atezolizumab + bevacizumab (Finn et al., N Engl J Med 2020)"},{src:"HIMALAYA — durvalumab + tremelimumab (Abou-Alfa et al., J Clin Oncol 2022)"},{src:"SHARP — sorafenib (Llovet et al., N Engl J Med 2008)"},{src:"REFLECT — lenvatinib (Kudo et al., Lancet 2018)"},{src:"RESORCE — regorafenib (Bruix et al., Lancet 2017)"},{src:"CELESTIAL — cabozantinib (Abou-Alfa et al., N Engl J Med 2018)"},{src:"REACH-2 — ramucirumab, AFP ≥400 (Zhu et al., Lancet Oncol 2019)"},{src:"Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed (2017)"}],
  pearls:["Surveillance every 6 months with US ± AFP in all cirrhotics — detects resectable disease","Milan criteria transplantation: 5-year survival 60–80%, recurrence <15%","Atezolizumab + bevacizumab now first-line (OS superior to sorafenib in IMbrave150)","Portal hypertension (HVPG ≥10 mmHg or varices) predicts post-resection liver failure","Stage migration: when a stage-appropriate therapy fails or is contraindicated, migrate to the next stage's option rather than staying in-stage","Tertiary prevention: post-treatment surveillance for recurrence (much still curable) plus ongoing cirrhosis-complication screening"],
  mistakes:["Resecting without assessing FLR — post-hepatectomy liver failure","Using Child-Pugh C liver for resection — prohibitive mortality","Missing satellite nodules on pre-op imaging — mandates MRI with hepatobiliary contrast","Biopsying imaging-typical LR-5 lesion — seeding risk; not needed for diagnosis"]
},
{
  id:"choledocholithiasis", dept:"hpb", name:"Choledocholithiasis", latin:"Choledocholithiasis", organ:"Bile duct",
  severity:"medium", tags:["CBD stones","ERCP","jaundice","biliary","MRCP"],
  hero:"Presence of gallstones within the common bile duct, causing obstruction and risk of cholangitis, pancreatitis, or secondary biliary cirrhosis.",
  keypoints:[
    "Present in 10–15% of patients with symptomatic gallstones; increases with age",
    "Primary CBD stones (de novo) vs secondary (migrated from gallbladder) — most are secondary",
    "Triad: RUQ pain, jaundice, fever — complete triad suggests cholangitis",
    "MRCP: sensitivity 93%, specificity 97% for CBD stones; preferred non-invasive imaging",
    "ERCP + sphincterotomy ± stone extraction: definitive treatment; combine with laparoscopic CBD exploration or cholecystectomy"
  ],
  differentials:["Cholangitis","HCC/cholangiocarcinoma (stricture)","Primary sclerosing cholangitis","Biliary stricture post-cholecystectomy","Ampullary carcinoma"],
  mnemonics:[{name:"MRCP first, ERCP if therapeutic needed",text:"MRCP diagnoses; ERCP treats — avoid diagnostic ERCP (risk of pancreatitis 3–5%)"}],
  overview:{
    definition:"Stones within the common bile duct causing partial or complete obstruction of biliary flow.",
    epidemiology:"Prevalence 10–15% in patients presenting for cholecystectomy; higher in elderly (30%).",
    pathophysiology:"Secondary stones: cholesterol or mixed stones migrate from gallbladder. Primary stones: pigment stones form de novo in dilated duct (biliary stasis, infection, foreign bodies including sutures).",
    classification:[
      {label:"Secondary CBD stones",note:"Migrated from gallbladder; most common; cholesterol/mixed; associated with gallbladder stones"},
      {label:"Primary CBD stones",note:"Form in bile duct itself; brown pigment; associated with biliary infection, stasis, stricture"},
      {label:"Residual CBD stones",note:"Missed at time of cholecystectomy; present within 2 years"},
      {label:"Recurrent CBD stones",note:"Develop >2 years after cholecystectomy; often primary type"}
    ]
  },
  diagnosis:{
    history:["RUQ or epigastric pain, colicky","Jaundice (intermittent or persistent)","Dark urine, pale stools, pruritus","Fever with rigors (suggests cholangitis)","Prior cholecystectomy"],
    examination:["Jaundice","RUQ tenderness (less marked than cholecystitis)","Mild hepatomegaly","Murphy's negative (differentiates from cholecystitis usually)"],
    investigations:[
      {name:"LFTs",role:"Obstructive pattern: elevated ALP, GGT, bilirubin; mild AST/ALT rise"},
      {name:"US abdomen",role:"CBD dilation (>6 mm; >8 mm post-cholecystectomy); gallstones; poor sensitivity for CBD stones (25–58%)"},
      {name:"MRCP",role:"Gold standard non-invasive: sensitivity 93%, specificity 97%; no radiation; no sedation"},
      {name:"EUS (endoscopic US)",role:"Sensitivity 95% for CBD stones; preferred if MRCP unavailable or body habitus poor; can proceed to ERCP at same sitting"},
      {name:"ERCP",role:"Therapeutic: direct visualization + sphincterotomy + stone extraction; reserve for high-probability cases or when therapy planned"},
      {name:"IOC (intraoperative cholangiogram)",role:"At time of cholecystectomy to screen for CBD stones before duct clearance or laparoscopic CBD exploration"}
    ]
  },
  criteria:{
    title:"ASGE Predictors of Choledocholithiasis",
    items:[
      {k:"Very strong predictors (any one → ERCP)",v:"CBD stone on US; clinical ascending cholangitis; bilirubin >4 mg/dL"},
      {k:"Strong predictors",v:"Dilated CBD on US (>6 mm); bilirubin 1.8–4 mg/dL"},
      {k:"Moderate predictors",v:"Abnormal LFTs other than bilirubin; age >55; clinical gallstone pancreatitis"},
      {k:"High probability",v:"Any very strong predictor — proceed directly to ERCP"},
      {k:"Intermediate probability",v:"1–2 strong predictors or any moderate — MRCP or EUS first"},
      {k:"Low probability",v:"No predictors — no further biliary workup needed before cholecystectomy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Analgesia, antiemetics","IV antibiotics if cholangitis suspected: piperacillin-tazobactam","IV fluids"],
    medical:["Ursodeoxycholic acid: not effective for CBD stones — only for cholesterol gallbladder stones dissolution"],
    surgical:[
      {name:"ERCP + sphincterotomy + stone extraction",when:"Pre-operative (majority); cholangitis; failed laparoscopic exploration",notes:"Balloon or basket extraction; lithotripsy for large stones; stent if clearance incomplete"},
      {name:"Laparoscopic common bile duct exploration (LCBDE)",when:"At time of cholecystectomy; experienced laparoscopic surgeon; facilities available",notes:"Transcystic route (preferred, <8 mm stones) or choledochotomy; T-tube or primary closure; 85% stone clearance"},
      {name:"Open CBD exploration + choledochotomy",when:"Failed ERCP + LCBDE; complex anatomy; Mirizzi type III–IV",notes:"Choledochotomy; Fogarty catheter; choledochoscopy; T-tube drainage; primary closure if duct healthy"},
      {name:"Hepaticojejunostomy",when:"Dilated duct with multiple stones; stricture; primary stones; failed repeated ERCP",notes:"Biliary bypass; Roux-en-Y; good long-term results for primary CBD stones"}
    ]
  },
  technique:{
    title:"ERCP + Biliary Sphincterotomy",
    prep:["Prone or left lateral; fluoroscopy; side-viewing duodenoscope","Conscious sedation or GA","Check coagulation — stop antiplatelet/anticoagulants if safe","Prophylactic rectal indomethacin 100 mg post-procedure reduces post-ERCP pancreatitis"],
    steps:[
      {n:1,t:"Selective CBD cannulation",d:"Sphincterotome with guidewire; aspirate bile to confirm CBD (not PD)"},
      {n:2,t:"Cholangiogram",d:"Inject dilute contrast; identify stones, dilation, strictures; count stones"},
      {n:3,t:"Sphincterotomy",d:"10–15 mm cut at 11 o'clock position; expose distal CBD"},
      {n:4,t:"Stone extraction",d:"Balloon sweep for small stones; Dormia basket for larger stones; confirm clearance with final cholangiogram"},
      {n:5,t:"Mechanical lithotripsy",d:"If stone >15 mm: crush with mechanical lithotripter basket before extraction"},
      {n:6,t:"Stent if incomplete clearance",d:"Temporary plastic stent (7–10 Fr) + return in 4–6 weeks for repeat ERCP"}
    ],
    pearls:["Rectal indomethacin or diclofenac 100 mg post-procedure reduces PEP by 50%","Confirm guidewire in CBD (not PD) before sphincterotomy","Final balloon sweep confirms duct clearance","Post-ERCP pancreatitis: commonest complication (3–5%); bleeding 1–2%; perforation 0.3–0.6%"]
  },
  guidelines:[{src:"ESGE Guideline: CBD Stones 2019"},{src:"ASGE Guideline: Choledocholithiasis 2019"},{src:"BSG: Management of CBD Stones 2020"}],
  pearls:["MRCP before ERCP for intermediate-probability cases avoids unnecessary ERCP in 50%","Laparoscopic CBD exploration at time of cholecystectomy avoids two-stage procedure — equally effective as sequential ERCP","Post-ERCP pancreatitis prevention: rectal NSAID, pancreatic duct stent in high-risk cases","T-tube post-choledochotomy: leave 6 weeks; T-tube cholangiogram before removal"],
  mistakes:["Diagnostic ERCP when MRCP/EUS preferred — 3–5% pancreatitis risk for no therapeutic benefit","Incomplete stone clearance without stent placement","Neglecting post-ERCP pancreatitis prophylaxis with rectal NSAID","Not scheduling interval cholecystectomy after ERCP — 20% biliary events within 1 year"]
},
{
  id:"pancreatic-cancer", dept:"hpb", name:"Pancreatic Ductal Adenocarcinoma", latin:"Adenocarcinoma ductale pancreaticum", organ:"Pancreas",
  severity:"high", tags:["pancreas","head","Whipple","jaundice","CA19-9","resectable"],
  hero:"Aggressive exocrine pancreatic malignancy with 5-year survival <12%; most patients present with locally advanced or metastatic disease.",
  keypoints:[
    "Pancreatic head (75%): obstructive jaundice, Courvoisier's sign, weight loss — earlier presentation than body/tail",
    "Only 15–20% resectable at presentation; 5-year survival after R0 resection up to 30–40% in select patients on modern adjuvant therapy",
    "CA 19-9 elevated in 80% — not diagnostic alone; use for monitoring and predicting recurrence",
    "Borderline resectable: portal vein/SMV abutment ≤180° — neoadjuvant therapy + reassessment",
    "FOLFIRINOX or gemcitabine + nab-paclitaxel: first-line for metastatic/locally advanced disease"
  ],
  differentials:["Ampullary carcinoma (better prognosis)","Distal cholangiocarcinoma","Duodenal carcinoma","Autoimmune pancreatitis (IgG4)","Pancreatic neuroendocrine tumor"],
  mnemonics:[{name:"Courvoisier's Law",text:"Painless jaundice + non-tender palpable gallbladder = malignant obstruction (not gallstones — gallstones cause fibrosis, no dilation)"}],
  overview:{
    definition:"Malignant tumor arising from ductal epithelium of the pancreas; 90% are ductal adenocarcinomas.",
    epidemiology:"12th commonest cancer; 4th commonest cancer death; 5-year survival 12%. Male ≈ female; 7th–8th decade peak, median age at diagnosis 71 y (death 73 y, SEER), >60% age 65–84. Highest incidence in Black Americans (17.2/100k men, 14.2/100k women), lowest in Asian/Pacific Islander. Non-O blood group (A/B/AB) confers higher risk (13–19% of PDAC attributable, ABO SNP rs505922). Smoking causes 25–35% of PDAC (~74% increased risk in current/former smokers; normalises after >13 y cessation). <3% truly hereditary; 5–10% have a family history (~9-fold risk); genome data suggest 10–20% carry an inherited component. Risk factors: smoking (×2), obesity, T2DM, chronic pancreatitis, BRCA1/2, PRSS1.",
    pathophysiology:"KRAS mutation (>90%) → CDKN2A, SMAD4, TP53 inactivation → unchecked proliferation; all four currently NON-targetable (KRAS-G12C sotorasib emerging); desmoplastic stroma impairs drug delivery; perineurial invasion → pain; early hematogenous and lymphatic spread. HRD (homologous-recombination deficiency) in 15–20% (BRCA1/2, PALB2, ATM, FANCA) → platinum-sensitive. KRAS wild-type = 6–8% overall (16–18% if <50 y) → rare targetable fusions (NRG-1, NTRK1-3, ALK, ROS1, RET). New-onset insulin-dependent diabetes after age 60 carries a 1–2% incidence of occult pancreatic cancer.",
    classification:[
      {label:"Resectable (NCCN v2.2021)",note:"No arterial contact (CA, SMA, CHA); ≤180° SMV/PV contact without vein distortion"},
      {label:"Borderline — venous",note:"SMV/PV contact >180°, OR ≤180° with vein distortion/thrombosis but reconstructable proximal + distal vessel; OR tumour contact with IVC"},
      {label:"Borderline — arterial (head/uncinate)",note:"CHA contact without CA/bifurcation extension (reconstructable); SMA contact ≤180°; contact with variant arterial anatomy"},
      {label:"Borderline — arterial (body/tail)",note:"CA contact ≤180°"},
      {label:"Locally advanced (unresectable)",note:"Unreconstructable SMV/PV occlusion; head/uncinate SMA >180° or CA >180°; body/tail SMA or CA >180°, or CA + aortic involvement"},
      {label:"Metastatic",note:"Peritoneal, liver, lung metastases — M1 disease"},
      {label:"Abutment vs encasement",note:"AHPBA/SSO/SSAT convention: abutment = <180°, encasement = ≥180° of vessel circumference"}
    ]
  },
  diagnosis:{
    history:["Painless progressive jaundice (head)","Weight loss, anorexia, cachexia","Dull epigastric/back pain (body/tail — late)","New-onset diabetes (recent, unexplained)","Steatorrhea (exocrine insufficiency)","Thromboembolic events (Trousseau syndrome)"],
    examination:["Jaundice, scratch marks (pruritus)","Courvoisier's sign: palpable non-tender gallbladder","Epigastric mass (advanced)","Cachexia","Virchow's node (left supraclavicular — M1)","Sister Mary Joseph nodule (periumbilical — M1)"],
    investigations:[
      {name:"CA 19-9",role:"Elevated >37 U/mL in 80%; monitor response; 15–20% of patients cannot synthesise CA19-9 (Lewis-negative non-secretors); unreliable in jaundice (raised by benign biliary obstruction); post-decompression/post-resection fall predicts survival; CA19-9 <180 U/mL was a PRODIGE-24 eligibility threshold — markedly elevated = negative prognostic/selection factor"},
      {name:"CEA",role:"Elevated in 40–45%; lower sensitivity than CA 19-9"},
      {name:"CECT pancreas (dual phase)",role:"Gold standard staging: pancreatic protocol (arterial + portal venous); assesses resectability (vessel involvement, metastases); PDAC is hypoenhancing on arterial, hypo/isointense on venous phase"},
      {name:"MRI/MRCP",role:"Ductal anatomy; distinguishes PDAC from IPMN/PNET; liver metastases"},
      {name:"EUS ± FNA",role:"Tissue diagnosis; T-staging; samples periportal nodes; 90% sensitivity for mass lesion; false-negative rate 10–20% (dense fibrosis, low cellularity); biopsy not mandatory before upfront resection but IS required before neoadjuvant therapy"},
      {name:"Percutaneous biopsy",role:"Tract seeding rare (~0.1%); prefer biopsying a metastatic site if one exists"},
      {name:"PET-CT",role:"Limited utility — 10–30% of PDAC are FDG-PET negative (fail to take up tracer) and benign inflammation causes false positives; best for indeterminate lesions only"},
      {name:"Diagnostic laparoscopy",role:"Historically peritoneal disease in 20–30% thought resectable on CT, but with modern CT the yield is now <10%; use selectively for large (T3/T4) tumours, indeterminate liver lesions, or markedly elevated CA19-9"}
    ]
  },
  criteria:{
    title:"Resectability Criteria (NCCN v2.2021)",
    items:[
      {k:"Resectable",v:"No arterial tumor contact (SMA, celiac, common hepatic); SMV/PV ≤180° contact without contour irregularity"},
      {k:"Borderline resectable",v:"SMV/PV >180° contact or contour irregularity; SMA ≤180° contact; short-segment CHA involvement; reconstructable SMV/PV occlusion"},
      {k:"Locally advanced",v:"SMA/celiac >180° abutment; unreconstructable SMV/PV; aortic involvement"},
      {k:"Metastatic",v:"M1 disease (liver, lung, peritoneum, distant nodes)"},
      {k:"Abutment vs encasement (AHPBA/SSO/SSAT)",v:"Abutment = <180°, encasement = ≥180° of vessel circumference"}
    ]
  },
  scoring:[
    {name:"AJCC 8th ed (2016) — size-based T",items:["T1 <2 cm; T2 2–4 cm; T3 >4 cm; T4 = CA or SMA involvement (T4 no longer automatically unresectable)","N1 = 1–3 positive nodes; N2 = ≥4 positive nodes (N2 upstages to Stage III); Stage III now includes any T4 OR N2"]},
    {name:"5-yr actuarial survival by stage",items:["IA ~40%, IB ~30%, IIA ~25%, IIB ~13%, III ~10%"]}
  ],
  management:{
    conservative:["Preop metal (not plastic) biliary stent for neoadjuvant candidates — plastic stents need swapping every 2–3 mo, metal wall stents last through the neoadjuvant window","Routine preop biliary drainage NOT supported for resectable jaundiced patients going to early surgery — increases postoperative surgical infection (enteric seeding)","Nutritional support; creon (pancreatic enzyme replacement)","Pain management: celiac plexus block for intractable pain","Surgical palliation ('double bypass' — gastrojejunostomy + choledochojejunostomy) now largely replaced by endoscopic/percutaneous biliary wall stents and endoluminal duodenal stents; surgical GJ reserved for unstentable duodenal obstruction"],
    medical:["Resectable/borderline: consider neoadjuvant FOLFIRINOX ± CRT then reassess; neoadjuvant renders 30–60% of borderline (and 20–30% of locally advanced) resectable — resected responders achieve survival comparable to primarily resectable disease","Adjuvant mFOLFIRINOX = standard for fit (WHO PS 0–1) patients: OS 54.4 vs 35.0 mo gemcitabine (PRODIGE-24/ACCORD/CCTG PA.6); DFS 21.6 vs 12.8 mo; grade 3–4 AEs 75.9% vs 52.9%","Adjuvant GemCap (ESPAC-4): OS 28 vs 25.5 mo (updated 30.2 vs 27.9), HR 0.82 — option for older / PS >1 patients","Adjuvant single-agent gemcitabine (CONKO-001): DFS 13.4 vs 6.9 mo; 5-yr OS 22.5% vs 11.5% vs observation; ESPAC-3 showed gemcitabine = 5-FU/LV for OS but less toxic → preferred single agent","APACT (adjuvant gem/nab-paclitaxel): DFS 19.5 vs 18.8 mo (NS) — remains investigational","Completing all 6 cycles of adjuvant chemo is an independent prognostic factor; delaying initiation up to 12 wk post-op acceptable (ESPAC-3 subanalysis)","Metastatic first-line: FOLFIRINOX (PRODIGE-4/ACCORD-11) OS 11.1 vs 6.8 mo vs gemcitabine — for PS 0–1, age ≤75, bilirubin ≤1.5× ULN","Metastatic: gem/nab-paclitaxel (MPACT) OS 8.5 vs 6.7 mo — allows age >75 and ECOG 2","Second-line: nanoliposomal irinotecan + 5-FU/LV (NAPOLI-1) OS 6.1 vs 4.1 mo after gemcitabine failure","Maintenance olaparib (POLO) for germline BRCA1/2 after ≥4 mo platinum: PFS 7.4 vs 3.8 mo (no OS benefit); ~5–7% of PDAC are germline BRCA1/2","Pembrolizumab only for MMR-deficient/MSI-H — <1% of PDAC","Germline + somatic profiling now standard of care in ALL patients (matched targeted therapy → OS 2.58 vs 1.51 y, 'Know Your Tumor')"],
    surgical:[
      {name:"Pancreaticoduodenectomy (Whipple)",when:"Resectable pancreatic head/neck/uncinate tumors; R0 intent",notes:"Standard or pylorus-preserving; PV/SMV resection if involved (segment resection + reconstruction); drain amylase day 3 to predict POPF"},
      {name:"Distal pancreatectomy ± splenectomy",when:"Body/tail tumors; R0 margins; no major vessel involvement",notes:"RAMPS (radical antegrade modular pancreatosplenectomy) for oncological clearance; minimally invasive approach increasingly used"},
      {name:"Total pancreatectomy",when:"Multifocal disease; positive pancreatic neck margin; IPMN with synchronous invasive cancer throughout",notes:"Obligate IDDM + exocrine insufficiency; islet cell autotransplantation at specialist centers"},
      {name:"Modified Appleby (DP-CAR)",when:"Locally advanced body tumours contacting proximal celiac axis",notes:"En-bloc celiac + CHA resection relies on retrograde GDA flow to liver; liver failure is a major risk; arterial 'supercharge' bypass graft can reduce it"},
      {name:"Arterial resection/reconstruction (SMA/celiac)",when:"Highly selected post-neoadjuvant cases at expert centres only",notes:"High-morbidity, non-standard, generally NOT recommended (historic 'regional pancreatectomy' — Fortner/Sindelar — had high mortality and few long-term survivors)"},
      {name:"Palliative bypass",when:"Unresectable; biliary obstruction ± gastric outlet obstruction",notes:"Hepaticojejunostomy + gastrojejunostomy; laparoscopic or open; duodenal stent alternative for gastric outlet"},
      {name:"MIS pancreatectomy (laparoscopic/robotic)",when:"Comparable short-term outcomes to open",notes:"Long-term oncologic equivalence not firmly established"}
    ]
  },
  technique:{
    title:"Pancreaticoduodenectomy (Kausch-Whipple Procedure)",
    prep:["Pancreas protocol CT confirms resectability","Biliary stenting only if obstructive jaundice with cholangitis or bilirubin >250; otherwise no pre-op stent","Bowel prep not required; epidural analgesia","High-volume center (≥20/year associated with lower mortality)"],
    steps:[
      {n:1,t:"Exploration and staging",d:"Laparotomy; assess for peritoneal disease, liver metastases, fixation to major vessels"},
      {n:2,t:"Kocher maneuver",d:"Mobilize duodenum and pancreatic head off IVC; assess SMA/PV involvement from right"},
      {n:3,t:"Hepatic artery / portal dissection",d:"Cholecystectomy; divide right gastric and gastroduodenal arteries; confirm hepatic artery anatomy (aberrant RHA in 15%)"},
      {n:4,t:"Divide stomach/duodenum, bile duct, jejunum",d:"Divide at pylorus/antrum; divide CBD above pancreatic head; divide jejunum 15 cm below Treitz"},
      {n:5,t:"Tunnel behind SMV/PV",d:"Create portal vein tunnel — most critical step; separates specimen from SMV/PV; if adherent: segmental resection + graft"},
      {n:6,t:"Divide pancreatic neck",d:"Ensure frozen section R0; control main pancreatic duct; hemostasis"},
      {n:7,t:"Reconstruction (Child's method)",d:"Pancreaticojejunostomy (duct-to-mucosa), hepaticojejunostomy, gastrojejunostomy; drains near panc anastomosis"},
    ],
    pearls:["No-touch technique: early ligation of SMV tributaries reduces tumor embolization","Pancreaticojejunostomy leak (POPF): drain amylase day 3; Grade B/C — early CT, drain management","Delayed gastric emptying (most common complication, 30%): prokinetics, NG suction","Aberrant right hepatic artery from SMA — identify before dividing GDA"]
  },
  guidelines:[{src:"NCCN Pancreatic Adenocarcinoma Guidelines, Version 2.2021"},{src:"ESMO Clinical Practice Guidelines 2020"},{src:"ISGPS Definitions: POPF, DGE, PPH 2016"},{src:"AHPBA/SSO/SSAT consensus + MD Anderson classification (endorsed by ISGPS)"},{src:"AJCC Cancer Staging Manual, 8th ed (2017)"},{src:"PRODIGE-24 / ACCORD / CCTG PA.6 — adjuvant mFOLFIRINOX"},{src:"ESPAC-4 — adjuvant gemcitabine + capecitabine"},{src:"ESPAC-3 — gemcitabine vs 5-FU/LV adjuvant"},{src:"CONKO-001 — adjuvant gemcitabine vs observation"},{src:"ESPAC-1 — adjuvant chemo benefit; chemoradiation harmful"},{src:"JASPAC-01 — S-1 vs gemcitabine (Japan)"},{src:"APACT — adjuvant gem/nab-paclitaxel"},{src:"PREOPANC / PREOPANC-2 — neoadjuvant chemoradiation vs up-front surgery"},{src:"PRODIGE-4 / ACCORD-11 (Conroy 2011) — metastatic FOLFIRINOX"},{src:"MPACT (Von Hoff 2013) — metastatic gem/nab-paclitaxel"},{src:"NAPOLI-1 — second-line nanoliposomal irinotecan + 5-FU/LV"},{src:"POLO trial — maintenance olaparib in germline BRCA1/2"},{src:"LAP07 / Alliance A021501 / FFCD-SFRO — chemoradiation in locally advanced disease"},{src:"NRG/RTOG-0848 — adjuvant radiation question"},{src:"Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed (2017)"}],
  pearls:["Pylorus-preserving vs standard Whipple: equivalent oncological outcomes","Preoperative biliary drainage increases infective complications — avoid unless cholangitis/severe jaundice","Adjuvant mFOLFIRINOX: 54.4-month median OS vs 35.0 months gemcitabine (PRODIGE 24)","5-year survival after R0 resection up to 30–40% in select patients on modern adjuvant therapy (ESPAC-4 R0+GemCap arm median OS 39 mo, 5-yr >40%); after R1 lower","Post-neoadjuvant imaging CANNOT reliably distinguish residual viable tumour from treatment scar around vessels — low threshold to proceed to surgical exploration in borderline/locally-advanced responders; RECIST cannot judge neoadjuvant response in PDAC","Adjuvant chemoradiation NOT standard — reduces local recurrence (EORTC-40013: 11% vs 24%) but no OS benefit and adds toxicity; used regionally in North America for R1 margins pending NRG/RTOG-0848","Chemoradiation NOT superior to chemotherapy alone in locally advanced disease (LAP07; Alliance A021501 closed its RT arm early for futility)"],
  mistakes:["Proceeding to Whipple without adequate staging CT (pancreas protocol)","Overlooking aberrant right hepatic artery — injury → hepatic ischemia","Pre-op biliary stenting routinely — increases ERCP-related complications and wound infection","Not checking drain amylase day 3 — misses early POPF diagnosis"]
},
{
  id:"chronic-pancreatitis", dept:"hpb", name:"Chronic Pancreatitis", latin:"Pancreatitis chronica", organ:"Pancreas",
  severity:"medium", tags:["pancreas","alcohol","pain","calcification","ERCP","surgery"],
  hero:"Progressive fibroinflammatory disease of the pancreas leading to irreversible parenchymal damage, exocrine/endocrine insufficiency, and chronic pain.",
  keypoints:[
    "Alcohol (70%) and smoking are major risk factors; CFTR mutations, autoimmune, tropical (cassava) are less common",
    "Cambridge Classification (ERCP/CT) grades morphological severity: equivocal to severe",
    "Triad: recurrent or constant abdominal pain + exocrine insufficiency (steatorrhea) + endocrine insufficiency (diabetes)",
    "Pain management: stepwise — analgesics → celiac plexus block → endoscopic drainage → surgery",
    "Total pancreatectomy with islet autotransplantation (TPIAT) for refractory pain with preserved islet mass"
  ],
  differentials:["Pancreatic ductal adenocarcinoma (mass-forming)","Autoimmune pancreatitis (IgG4)","Pancreatic pseudocyst","Groove pancreatitis","Mesenteric ischemia"],
  mnemonics:[{name:"TIGAR-O Classification",text:"Toxic-metabolic (alcohol/smoking), Idiopathic, Genetic (CFTR/PRSS1/SPINK1), Autoimmune, Recurrent/severe AP, Obstructive"}],
  overview:{
    definition:"Chronic inflammatory disease of the pancreas characterized by irreversible parenchymal fibrosis and loss of exocrine and endocrine function.",
    epidemiology:"Prevalence 50/100 000; incidence 5–10/100 000/year; male predominance; alcohol accounts for 70%.",
    pathophysiology:"Repeated episodes of acute inflammation → acinar cell loss → fibrosis (stellate cell activation) → ductal stricturing and dilation → calcification (SPINK1/CFTR variants predispose) → progressive exocrine/endocrine failure.",
    classification:[
      {label:"Cambridge Grade I (Normal)",note:"No changes on ERCP/CT"},
      {label:"Cambridge Grade II (Equivocal)",note:"Mild: <3 abnormal branches"},
      {label:"Cambridge Grade III (Mild)",note:"≥3 abnormal side branches; main duct normal"},
      {label:"Cambridge Grade IV (Moderate)",note:"Abnormal main duct plus ≥3 abnormal branches"},
      {label:"Cambridge Grade V (Severe)",note:"Abnormal main duct plus ≥3 abnormal branches PLUS one/more of: cyst, stricture, filling defects, dilation, obstruction"}
    ]
  },
  diagnosis:{
    history:["Recurrent or continuous epigastric/back pain — may decrease as gland burns out","Weight loss, malnutrition","Steatorrhea: pale, bulky, offensive stools (fat malabsorption)","Diabetes mellitus (pancreatogenic — brittle, labile)","History of heavy alcohol use and/or smoking"],
    examination:["Mid-epigastric tenderness","Weight loss, muscle wasting","Jaundice (biliary stricture complication)","Signs of malnutrition"],
    investigations:[
      {name:"Serum lipase/amylase",role:"Often normal in end-stage; elevated in acute flares"},
      {name:"Fecal elastase-1",role:"<200 μg/g stool = exocrine insufficiency; <100 = severe; low specificity for mild disease"},
      {name:"72-hour fecal fat",role:"Gold standard for malabsorption; >7 g/day = steatorrhea; cumbersome"},
      {name:"HbA1c / OGTT",role:"Pancreatogenic diabetes screening"},
      {name:"IgG4",role:"Elevated in autoimmune pancreatitis (AIP Type 1); IgG4 >2× ULN = AIP"},
      {name:"CT abdomen",role:"Pancreatic calcification (pathognomonic); ductal dilation; atrophy; pseudocysts"},
      {name:"MRCP",role:"Ductal anatomy — 'chain of lakes' appearance; strictures; filling defects; non-invasive"},
      {name:"EUS",role:"Rosemont criteria: parenchymal (lobularity, stranding, cysts, echogenic foci) and ductal changes (dilation, irregular contour, stones); most sensitive for early disease"}
    ]
  },
  criteria:{
    title:"Rosemont EUS Criteria for Chronic Pancreatitis",
    items:[
      {k:"Major A features",v:"Hyperechoic foci with shadowing; main pancreatic duct (MPD) calculi"},
      {k:"Major B features",v:"Lobularity with honeycombing"},
      {k:"Minor features",v:"Cysts, dilated ducts (≥3.5 mm), irregular MPD contour, dilated side branches, hyperechoic MPD margin, stranding, non-shadowing hyperechoic foci"},
      {k:"Consistent with CP",v:"≥1 Major A + ≥3 minor; or ≥1 Major A + Major B; or ≥2 Major A"},
      {k:"Suggestive",v:"1 Major A + <3 minor; or 1 Major B + ≥3 minor; or ≥5 minor alone"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Complete alcohol and smoking cessation (most important — slows progression)","Pancreatic enzyme replacement therapy (PERT): creon 25 000–80 000 units with each meal; reduces steatorrhea, improves nutrition","Fat-soluble vitamin supplementation (A, D, E, K)","Diabetes: insulin (avoid sulfonylureas — risk of hypoglycemia in brittle diabetes)","Nutritional support: MCT-enriched diet; nasojejunal feeding if severe malnutrition"],
    medical:["Analgesia step-up: paracetamol → NSAIDs → weak opioids → strong opioids (tramadol, morphine)","Pregabalin/gabapentin for neuropathic component","Antioxidants (vitamin C, E, selenium): limited evidence","Octreotide: reduces ductal pressure; limited clinical benefit","Celiac plexus block (EUS-guided): temporary relief; more effective in alcoholic CP (70% respond)"],
    surgical:[
      {name:"ERCP + stone extraction ± ESWL",when:"Ductal stones causing obstruction; strictures amenable to stenting",notes:"ESWL first for large stones >5 mm; stent for strictures; less durable than surgery but less invasive"},
      {name:"Lateral pancreaticojejunostomy (Puestow/Partington-Rochelle)",when:"Dilated duct (>7 mm); diffuse disease; no dominant head mass",notes:"Duct decompression; Partington-Rochelle (modification — side-to-side, no pancreatectomy); pain relief 80% at 2 years"},
      {name:"Frey procedure",when:"Dilated duct + enlarged fibrotic head (≤4 cm; no suspected malignancy)",notes:"Limited head excavation + lateral pancreatojejunostomy; superior to Puestow for head-dominant disease (RCT evidence)"},
      {name:"Berne modification (Büchler)",when:"Head mass; similar to Frey but more conservative head coring; less vascular injury",notes:"Avoids duodenum and CBD if not involved"},
      {name:"Whipple / pylorus-preserving pancreaticoduodenectomy",when:"Suspected malignancy in head; failed decompressive procedures; duodenal/biliary obstruction",notes:"Highest morbidity; most complete pain relief (85%)"},
      {name:"TPIAT (Total Pancreatectomy + Islet Autotransplantation)",when:"Refractory pain; small duct disease not amenable to drainage; PRSS1/SPINK1 mutations; before diabetes develops",notes:"Pain-free in 40–70%; insulin-independent in 30–40%; specialist centers only"}
    ]
  },
  technique:{
    title:"Frey Procedure",
    prep:["MRCP confirms dilated duct and enlarged head","EUS-FNA if head mass to exclude malignancy","Nutritional optimization pre-op; glucose control"],
    steps:[
      {n:1,t:"Exposure",d:"Kocher maneuver; enter lesser sac; expose pancreas"},
      {n:2,t:"Longitudinal ductotomy",d:"Open MPD from head to tail along anterior surface; Bakes dilator confirms lumen"},
      {n:3,t:"Head coring",d:"Core out fibrotic pancreatic head anterior to CBD and portal vein; remove calculi; leave 5–10 mm rim anterior to CBD"},
      {n:4,t:"Roux limb preparation",d:"Divide jejunum 40 cm from Treitz; retrocolic Roux limb 60 cm"},
      {n:5,t:"Lateral pancreatojejunostomy",d:"Side-to-side anastomosis of opened duct + cored head to Roux limb; 2-layer running absorbable suture"},
      {n:6,t:"Closure",d:"Drains; close abdomen"}
    ],
    pearls:["Leave posterior rim of pancreatic head over portal vein — avoid portal vein injury","If CBD involved: add biliary-enteric anastomosis to same Roux limb","Compare to Puestow: Frey adds head coring — better for head-dominant disease (van Loo RCT 2001)","Pain relief durable: 80% at 5 years vs 50% endoscopic therapy (ESCAPE trial)"]
  },
  guidelines:[{src:"EPC/HaPanEU Guidelines for Chronic Pancreatitis 2017"},{src:"AGA Clinical Practice Guideline 2020"},{src:"IAP Guidelines on Management of Pain in CP 2018"}],
  pearls:["Fecal elastase is the simplest screening test for exocrine insufficiency — treat if <200 μg/g","PERT: 50 000 units lipase per meal minimum — underdosing is common","Celiac plexus block: 70% short-term pain relief in alcoholic CP; not as good as surgery long-term (ESCAPE trial)","Pancreatogenic diabetes: insulin required; avoid sulfonylureas; prone to hypoglycemia"],
  mistakes:["Under-dosing pancreatic enzyme replacement — patient remains malnourished","Not screening for and treating pancreatogenic diabetes","Proceeding to surgery without excluding malignancy (EUS-FNA, CA19-9) in head mass","Delaying surgery in favor of repeated endoscopic attempts — surgery more durable (ESCAPE/EORTC trials)"]
},
{
  id: "central-pancreatectomy", dept: "hpb",
  name: "Central (Middle-Segment) Pancreatectomy",
  latin: "Pancreatectomia centralis",
  organ: "Pancreatic neck / body",
  severity: "high",
  tags: ["pancreas","parenchyma-sparing","central pancreatectomy","benign","neuroendocrine","MIS"],
  hero: "A parenchyma-sparing resection of the mid-pancreas that removes a benign or low-grade lesion of the neck/body while preserving both the tail and the spleen — trading a higher fistula risk for far better long-term endocrine and exocrine function.",
  keypoints: [
    "Removes only the central segment (neck/proximal body) and preserves the distal pancreas and spleen — the alternative, an extended distal pancreatectomy, would needlessly sacrifice normal gland",
    "Reserved for benign or low-malignant-potential lesions of the neck/body: small neuroendocrine tumours (insulinoma), mucinous cystic neoplasm, branch-duct IPMN, solid-pseudopapillary tumour — NOT for adenocarcinoma",
    "The whole point is functional preservation: it markedly lowers the risk of new endocrine (diabetes) and exocrine insufficiency compared with distal or extended resection",
    "Creates two cut pancreatic surfaces — the proximal stump is oversewn, the distal stump is drained by a pancreaticojejunostomy (or pancreaticogastrostomy)",
    "The price is the pancreas surgery world's highest postoperative pancreatic fistula rate (often 30–60%) because two soft, normal, non-dilated gland ends are in play",
    "Choose it only when the lesion is genuinely benign AND enough distal remnant (roughly ≥ 5 cm) can be preserved to justify the extra fistula risk"
  ],
  differentials: [
    "Distal pancreatectomy (± splenectomy) — simpler, one stump, but sacrifices the tail and often the spleen",
    "Enucleation — for very small, superficial, duct-remote lesions; least parenchymal loss, but not safe when the lesion abuts the main duct",
    "Pancreaticoduodenectomy (Whipple) — for lesions of the head/uncinate or any malignancy",
    "Total pancreatectomy — extensive multifocal disease (e.g. main-duct IPMN); guarantees brittle diabetes",
    "Surveillance — small low-risk cystic lesions may be watched rather than resected"
  ],
  overview: {
    definition: "A limited pancreatic resection removing the central portion of the gland (neck and proximal body) for benign or low-grade lesions, preserving the pancreatic head, the distal body/tail and the spleen, with reconstruction of the distal remnant by an anastomosis to bowel or stomach.",
    epidemiology: "An uncommon, elective, supra-specialist operation performed in high-volume HPB units for carefully selected central lesions where organ preservation outweighs the fistula risk.",
    pathophysiology: "The endocrine islet mass and exocrine acinar tissue are distributed throughout the gland, so wide resections (distal/extended) remove functioning parenchyma and precipitate diabetes and steatorrhoea. Central pancreatectomy excises only the segment bearing the lesion, conserving both ends; but because both remnants are soft, normal-textured gland with small non-dilated ducts — the classic high-risk anatomy for anastomotic failure — the pancreatic fistula rate is high.",
    classification: [
      {label:"Proximal stump", note:"Head-side cut surface — closed/oversewn (suture or stapler), duct ligated"},
      {label:"Distal remnant reconstruction", note:"Tail-side stump drained by pancreaticojejunostomy (Roux loop) or pancreaticogastrostomy"},
      {label:"Open vs MIS", note:"Increasingly performed laparoscopically or robotically in expert hands for these benign lesions"},
      {label:"Spleen preservation", note:"The splenic vessels and spleen are preserved — a key advantage over distal pancreatectomy with splenectomy"}
    ]
  },
  criteria: {
    title: "Selection & Risk Trade-off",
    items: [
      { k: "Ideal lesion", v: "Benign/low-grade neck or proximal-body lesion: small NET (e.g. insulinoma), MCN, branch-duct IPMN, solid-pseudopapillary tumour" },
      { k: "Anatomical requirement", v: "Adequate distal remnant preservable (roughly ≥ 5 cm of tail); lesion not amenable to safe enucleation (too close to main duct)" },
      { k: "Absolute contraindication", v: "Any adenocarcinoma or lesion needing a formal oncological lymphadenectomy — do a Whipple or distal resection instead" },
      { k: "Main risk", v: "Postoperative pancreatic fistula 30–60% (two soft stumps) — counsel the patient and plan drainage accordingly" },
      { k: "Payoff", v: "Substantially lower rates of new-onset diabetes and exocrine insufficiency than distal/extended resection" }
    ]
  },
  technique: {
    title: "Central Pancreatectomy — Segmental Resection & Reconstruction",
    prep: [
      "Cross-sectional imaging (pancreatic-protocol CT/MRI) ± EUS-FNA to confirm benign/low-grade histology and duct relationship",
      "Confirm adequate distal remnant length and spleen/splenic-vessel anatomy",
      "Supine; open, laparoscopic or robotic approach; wide drains planned for the anticipated fistula risk"
    ],
    steps: [
      { n: 1, t: "Expose the gland", d: "Open the lesser sac, divide the gastrocolic ligament and expose the pancreatic neck/body; identify the superior mesenteric/portal vein behind the neck" },
      { n: 2, t: "Develop the retropancreatic tunnel", d: "Create the plane between the neck and the SMV/portal vein to allow safe transection" },
      { n: 3, t: "Transect the central segment", d: "Divide the gland proximal and distal to the lesion, preserving the splenic vessels and enough tail; remove the central specimen" },
      { n: 4, t: "Close the proximal stump", d: "Oversew/staple the head-side cut surface and ligate its main duct to minimise leak from that end" },
      { n: 5, t: "Reconstruct the distal remnant", d: "Anastomose the tail-side stump to a Roux limb (pancreaticojejunostomy) or to the posterior stomach (pancreaticogastrostomy)" },
      { n: 6, t: "Drain & close", d: "Place drains at both stumps; monitor drain amylase for fistula; abdomen closed" }
    ],
    pearls: [
      "Reserve central pancreatectomy for genuinely benign disease — the moment malignancy is a concern, switch to an oncological resection",
      "Both stumps are soft normal gland: expect and prepare for a fistula rather than being surprised by one",
      "Preserving the spleen and its vessels is a major functional and immunological gain over distal pancreatectomy with splenectomy"
    ]
  },
  guidelines: [
    { src: "IHPBA / ISGPS — parenchyma-sparing pancreatic resection and pancreatic fistula definitions" },
    { src: "European guidelines on cystic pancreatic neoplasms (IPMN/MCN management)" },
    { src: "ENETS — small pancreatic neuroendocrine tumour management" }
  ],
  pearls: [
    "Central pancreatectomy is a functional-preservation operation — its justification is the diabetes/steatorrhoea it prevents, not the tissue it removes",
    "The distal-stump anastomosis is the make-or-break step; treat it like any high-risk soft-gland pancreatic anastomosis",
    "Do not use it as a shortcut for a tail lesion that a straightforward distal pancreatectomy would handle"
  ],
  mistakes: [
    "Selecting a malignant lesion for central pancreatectomy — inadequate margins and no lymphadenectomy",
    "Under-draining and under-counselling for the high fistula rate",
    "Choosing it when enucleation would suffice (needless second stump) or when distal resection is clearly better",
    "Injuring the splenic vessels and losing the spleen — negating the operation's main advantage"
  ],
  related: [
    { id: "pan-net",             note: "Small body/neck neuroendocrine tumours (e.g. insulinoma) are the classic indication" },
    { id: "ipmn",                note: "Branch-duct IPMN of the neck/body may be resected with parenchymal sparing" },
    { id: "pancreatic-cancer",   note: "A contraindication — adenocarcinoma needs formal oncological resection" },
    { id: "insulinoma",          note: "A benign functioning NET well suited to parenchyma-sparing central resection" }
  ]
}
];
