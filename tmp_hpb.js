// HPB diseases — batch 1 of 3 (ap, cholecystitis, cholangitis, hcc, choledocholithiasis, pancreatic-cancer, chronic-pancreatitis)
window._TMP_HPB = [
{
  id:"ap", dept:"hpb", name:"Acute Pancreatitis", latin:"Pancreatitis acuta", organ:"Pancreas",
  severity:"high", tags:["pancreas","gallstones","alcohol","amylase","lipase","SIRS"],
  hero:"Acute inflammatory process of the pancreas with varying degrees of regional and remote organ involvement.",
  keypoints:[
    "80% mild (interstitial); 20% severe (necrotizing) — mortality up to 30% in infected necrotizing pancreatitis",
    "Gallstones (45%) and alcohol (35%) account for >80% of cases",
    "Diagnosis: characteristic pain + amylase/lipase ≥3× ULN ± CT findings",
    "Revised Atlanta 2012: mild / moderately severe / severe based on organ failure duration",
    "CECT at 72–96 h if diagnosis uncertain or deterioration; CT severity index guides prognosis"
  ],
  differentials:["Perforated peptic ulcer","Acute cholecystitis","Mesenteric ischemia","Aortic dissection","Inferior MI"],
  mnemonics:[{name:"GET SMASHED",text:"Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion sting, Hyperlipidemia/Hypercalcemia, ERCP, Drugs"}],
  overview:{
    definition:"Acute inflammatory process of the pancreas initiated by premature intracinar activation of digestive enzymes.",
    epidemiology:"Incidence 20–40/100 000/year; male = female for gallstone; male predominance for alcohol.",
    pathophysiology:"Premature trypsinogen activation → autodigestion → acinar cell necrosis → local and systemic inflammatory cascade (cytokine storm, SIRS, MODS).",
    classification:[
      {label:"Mild AP",note:"No organ failure, no local/systemic complications; resolves within 1 week"},
      {label:"Moderately severe AP",note:"Transient organ failure (<48 h) or local complications without persistent organ failure"},
      {label:"Severe AP",note:"Persistent organ failure (>48 h), single or multi-organ"}
    ]
  },
  diagnosis:{
    history:["Epigastric pain radiating to back, constant, 10/10","Nausea/vomiting","Alcohol intake / recent fatty meal","Prior biliary colic or gallstones","Medications (steroids, thiazides, azathioprine)"],
    examination:["Epigastric tenderness ± guarding","Gray-Turner sign (flank bruising) — hemorrhagic AP","Cullen sign (periumbilical bruising) — hemorrhagic AP","Fever, tachycardia if SIRS","Absent bowel sounds (ileus)"],
    investigations:[
      {name:"Serum lipase",role:"More sensitive/specific than amylase; ≥3× ULN diagnostic"},
      {name:"Serum amylase",role:"Rises quickly, falls within 3–5 days; also elevated in other abdominal emergencies"},
      {name:"CBC, CRP",role:"CRP >150 at 48 h predicts severity; WBC elevated in SIRS"},
      {name:"LFTs, bilirubin",role:"ALP/bilirubin rise suggests gallstone etiology"},
      {name:"Serum calcium, triglycerides",role:"Exclude hypercalcemia and hypertriglyceridemia as cause"},
      {name:"US abdomen",role:"First-line: identifies gallstones, CBD dilation; poor pancreas visualization in AP"},
      {name:"CECT abdomen (IV contrast)",role:"CT severity index (Balthazar + necrosis score); perform at 72–96 h; CTSI ≥3 predicts complications"},
      {name:"MRCP",role:"Preferred over ERCP for suspected choledocholithiasis without cholangitis"}
    ]
  },
  criteria:{
    title:"Revised Atlanta Classification 2012",
    items:[
      {k:"Mild",v:"No organ failure; no local/systemic complications"},
      {k:"Moderately severe",v:"Transient organ failure (<48 h) OR local complications (APFC, ANC, pseudocyst, WON)"},
      {k:"Severe",v:"Persistent organ failure >48 h (cardiovascular, respiratory, or renal)"},
      {k:"Organ failure definition",v:"Modified Marshall score ≥2 for respiratory (PaO2/FiO2), renal (creatinine), or cardiovascular (systolic BP)"}
    ]
  },
  scoring:[
    {name:"Ranson's Criteria",items:["On admission: age >55, WBC >16, glucose >11, LDH >350, AST >250","At 48 h: hematocrit fall >10%, BUN rise >1.8, Ca <2, PaO2 <60, base deficit >4, fluid >6L","Score ≥3 = severe; mortality 15–20% with score 5–6"]},
    {name:"BISAP Score",items:["BUN >25, Impaired mental status, SIRS ≥2 criteria, Age >60, Pleural effusion","Score ≥3 = severe AP; validated predictor of mortality"]}
  ],
  management:{
    conservative:["Aggressive IV fluid resuscitation: lactated Ringer's preferred (1250–1500 mL/h initially); reassess hourly","Nil by mouth initially; early enteral nutrition (within 24–48 h) via NGT/NJT if tolerated — reduces infections vs parenteral","Analgesia: opioids (morphine IV) ± paracetamol; NSAIDs if renal function adequate","Antiemetics (metoclopramide, ondansetron)","Monitor urine output (target >0.5 mL/kg/h), blood glucose, electrolytes"],
    medical:["Antibiotics NOT routine; use only for infected necrosis (meropenem or imipenem — good pancreatic penetration)","Prophylactic antibiotics do NOT reduce mortality or infection rate in sterile necrosis","PPI/H2RA for stress ulcer prophylaxis","DVT prophylaxis (LMWH) once hemorrhage excluded"],
    surgical:[
      {name:"ERCP + sphincterotomy",when:"Gallstone AP with concurrent cholangitis or persistent biliary obstruction; within 24 h for cholangitis",notes:"Not indicated in mild AP without biliary obstruction"},
      {name:"Cholecystectomy",when:"After resolution of mild AP before discharge; within same admission if possible",notes:"Reduces recurrence from 30% to <3%"},
      {name:"Necrosectomy (step-up approach)",when:"Infected necrotizing pancreatitis confirmed on CT or FNA; delay at least 4 weeks for demarcation",notes:"Step-up: percutaneous drain → minimally invasive retroperitoneal debridement (VARD/MIPD) → open if failed"},
      {name:"Open necrosectomy",when:"Failed minimally invasive approach; hemorrhage; bowel fistula",notes:"High morbidity; laparostomy may be required"}
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
    pearls:["Infected necrosis: FNA or CT features (gas bubbles in collection) — do not delay treatment if gas present","Hemorrhage from pseudoaneurysm: interventional radiology embolization first-line","Late pseudocyst (>4 cm, symptomatic): endoscopic cystogastrostomy preferred"]
  },
  guidelines:[{src:"IAP/APA Evidence-Based Guidelines 2013"},{src:"ACG Clinical Guideline 2013"},{src:"BSG Guidelines on AP 2023"}],
  pearls:["Lactated Ringer's reduces SIRS compared to normal saline — preferred resuscitation fluid","Early oral/enteral feeding (within 24–48 h) reduces infectious complications","ERCP indicated ONLY for concurrent cholangitis or persistent biliary obstruction in gallstone AP","Prophylactic antibiotics have no role in sterile necrosis (multiple RCTs)"],
  mistakes:["Over-using ERCP without cholangitis or obstruction","Delayed cholecystectomy allowing recurrent AP episodes","Routine prophylactic antibiotics in mild/moderate AP — increases resistant organisms","Early necrosectomy before 4 weeks — high mortality; undrained walled-off tissue","Inadequate fluid resuscitation in first 24–48 h"]
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
    "Third most common cause of cancer death worldwide; male:female = 3:1",
    "Major risk factors: HBV, HCV, alcohol-related cirrhosis, NAFLD/NASH, aflatoxin B1",
    "Barcelona Clinic Liver Cancer (BCLC) staging guides treatment allocation",
    "Surveillance: US ± AFP every 6 months in all cirrhotic patients",
    "Diagnostic: arterial hyperenhancement + venous washout on CECT/MRI in nodule >1 cm = HCC without biopsy"
  ],
  differentials:["Cholangiocarcinoma (ICC)","Hepatic metastases","Hepatic hemangioma","Focal nodular hyperplasia","Hepatic adenoma"],
  mnemonics:[{name:"BCLC Stages",text:"0=Very early (single<2cm) → A=Early (up to 3 nodules≤3cm) → B=Intermediate (multinodular) → C=Advanced (PVI/N1/M1) → D=End-stage"}],
  overview:{
    definition:"Primary hepatocellular malignancy arising from hepatocytes, occurring predominantly in cirrhotic livers.",
    epidemiology:"860 000 new cases/year globally; 5th commonest cancer; 3rd commonest cancer death. HBV endemic in Asia/Africa; HCV in Europe/Americas.",
    pathophysiology:"Repeated hepatocyte injury → regenerative nodule → dysplastic nodule → HCC (via Wnt/β-catenin, TP53, Ras-MAPK pathways). Vascular invasion and arterialisation are hallmarks.",
    classification:[
      {label:"BCLC 0",note:"Very early: single <2 cm, preserved liver function, PS 0"},
      {label:"BCLC A",note:"Early: single or up to 3 nodules ≤3 cm, Child-Pugh A–B, PS 0 — curative intent"},
      {label:"BCLC B",note:"Intermediate: multinodular, no PVI/metastases, Child-Pugh A–B, PS 0 — TACE"},
      {label:"BCLC C",note:"Advanced: PVI, N1, or M1, Child-Pugh A–B, PS 1–2 — sorafenib/atezolizumab+bev"},
      {label:"BCLC D",note:"End-stage: Child-Pugh C, PS 3–4 — best supportive care"}
    ]
  },
  diagnosis:{
    history:["Often asymptomatic until advanced — detected on surveillance","RUQ pain, weight loss, anorexia (advanced)","Background cirrhosis symptoms: ascites, jaundice, encephalopathy","Paraneoplastic: hypoglycemia, erythrocytosis, hypercalcemia"],
    examination:["Hepatomegaly with or without a palpable mass","Signs of chronic liver disease: spider naevi, palmar erythema, caput medusae","Ascites, jaundice (advanced)","Hepatic bruit (highly specific for HCC)"],
    investigations:[
      {name:"AFP (alpha-fetoprotein)",role:"Marker: >400 ng/mL highly suggestive; normal in 40% HCC; used in surveillance"},
      {name:"AFP-L3, DCP (des-gamma-carboxyprothrombin)",role:"More specific markers; AFP-L3 >10% indicates HCC"},
      {name:"CECT abdomen (dynamic, triphasic)",role:"Arterial hyperenhancement + portal venous washout = LR-5 (diagnostic for HCC) in nodule ≥1 cm"},
      {name:"MRI liver with hepatobiliary contrast",role:"More sensitive for small nodules and satellite lesions; LIRADS classification"},
      {name:"Biopsy",role:"Only if imaging non-diagnostic or atypical; risk of tract seeding (~0.8%)"},
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
    {name:"Child-Pugh Score",items:["Bilirubin, albumin, PT/INR, ascites, encephalopathy","A (5–6): good liver function; B (7–9): moderate; C (10–15): poor — not suitable for resection"]}
  ],
  management:{
    conservative:["Surveillance: US ± AFP every 6 months in cirrhotics","Treat underlying liver disease: antivirals for HBV/HCV, alcohol abstinence","Nutritional support, manage cirrhosis complications"],
    medical:["BCLC C: sorafenib (first-line TKI) or atezolizumab + bevacizumab (superior PFS — IMbrave150 trial)","Second-line: lenvatinib, regorafenib, cabozantinib, ramucirumab (AFP >400)","Best supportive care for BCLC D"],
    surgical:[
      {name:"Hepatic resection",when:"BCLC 0/A; single tumor; no portal hypertension; adequate future liver remnant (FLR >20–30%)",notes:"Anatomical resection preferred; FLR assessment by volumetry; portal vein embolization if FLR borderline"},
      {name:"Liver transplantation",when:"Milan criteria: single ≤5 cm or ≤3 nodules each ≤3 cm, no PVI, no metastases — curative for HCC and cirrhosis",notes:"Bridge therapy (RFA/TACE) to prevent dropout while awaiting transplant; expanded criteria (UCSF, Up-to-7) at some centers"},
      {name:"Radiofrequency ablation (RFA)",when:"BCLC 0/A; ≤3 cm; not surgical candidate; or combined with resection for additional nodules",notes:"Percutaneous, laparoscopic, or intraoperative; 5-year survival 50–70% for small tumors"},
      {name:"Microwave ablation (MWA)",when:"Similar to RFA; preferred for >3 cm or near major vessels (less heat-sink effect)",notes:"Larger ablation zone, faster; fewer sessions"},
      {name:"TACE (trans-arterial chemoembolization)",when:"BCLC B (intermediate); bridge to transplant; can downstage to Milan",notes:"Conventional TACE (Lipiodol + doxorubicin) or DEB-TACE; repeat every 6–8 weeks; Child-Pugh A–B only"},
      {name:"TARE / SIRT (radioembolization)",when:"Portal vein invasion (BCLC C); failed TACE; downstaging; Child-Pugh A",notes:"Y-90 microspheres; tumor absorbed dose >200 Gy → tumor necrosis"}
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
  guidelines:[{src:"BCLC Strategy 2022 (Reig et al., J Hepatol)"},{src:"EASL Clinical Practice Guidelines HCC 2018"},{src:"AASLD HCC Guidance 2023"}],
  pearls:["Surveillance every 6 months with US ± AFP in all cirrhotics — detects resectable disease","Milan criteria transplantation: 5-year survival 70–75%, recurrence <10%","Atezolizumab + bevacizumab now first-line for BCLC C (superior to sorafenib in IMbrave150)","Portal hypertension (HVPG >10 mmHg or varices) predicts post-resection liver failure"],
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
    "Only 15–20% resectable at presentation; 5-year survival after R0 Whipple = 20–25%",
    "CA 19-9 elevated in 80% — not diagnostic alone; use for monitoring and predicting recurrence",
    "Borderline resectable: portal vein/SMV abutment ≤180° — neoadjuvant therapy + reassessment",
    "FOLFIRINOX or gemcitabine + nab-paclitaxel: first-line for metastatic/locally advanced disease"
  ],
  differentials:["Ampullary carcinoma (better prognosis)","Distal cholangiocarcinoma","Duodenal carcinoma","Autoimmune pancreatitis (IgG4)","Pancreatic neuroendocrine tumor"],
  mnemonics:[{name:"Courvoisier's Law",text:"Painless jaundice + non-tender palpable gallbladder = malignant obstruction (not gallstones — gallstones cause fibrosis, no dilation)"}],
  overview:{
    definition:"Malignant tumor arising from ductal epithelium of the pancreas; 90% are ductal adenocarcinomas.",
    epidemiology:"12th commonest cancer; 4th commonest cancer death; 5-year survival 12%. Male ≈ female; peak 65–75 years. Risk factors: smoking (×2), obesity, T2DM, chronic pancreatitis, BRCA1/2, PRSS1.",
    pathophysiology:"KRAS mutation (>90%) → CDKN2A, SMAD4, TP53 inactivation → unchecked proliferation; desmoplastic stroma impairs drug delivery; perineurial invasion → pain; early hematogenous and lymphatic spread.",
    classification:[
      {label:"Resectable",note:"No arterial contact; portal vein/SMV contact ≤180° without deformity; no metastases"},
      {label:"Borderline resectable",note:"SMV/PV contact >180°, short-segment SMA contact ≤180°, common hepatic artery short-segment involvement"},
      {label:"Locally advanced (unresectable)",note:"SMA/celiac axis involvement >180°; unreconstructable SMV/PV; N2 nodes"},
      {label:"Metastatic",note:"Peritoneal, liver, lung metastases — M1 disease"}
    ]
  },
  diagnosis:{
    history:["Painless progressive jaundice (head)","Weight loss, anorexia, cachexia","Dull epigastric/back pain (body/tail — late)","New-onset diabetes (recent, unexplained)","Steatorrhea (exocrine insufficiency)","Thromboembolic events (Trousseau syndrome)"],
    examination:["Jaundice, scratch marks (pruritus)","Courvoisier's sign: palpable non-tender gallbladder","Epigastric mass (advanced)","Cachexia","Virchow's node (left supraclavicular — M1)","Sister Mary Joseph nodule (periumbilical — M1)"],
    investigations:[
      {name:"CA 19-9",role:"Elevated >37 U/mL in 80%; monitor response; limited by Lewis antigen negativity (10%)"},
      {name:"CEA",role:"Elevated in 40–45%; lower sensitivity than CA 19-9"},
      {name:"CECT pancreas (dual phase)",role:"Gold standard staging: pancreatic protocol (arterial + portal venous); assesses resectability (vessel involvement, metastases)"},
      {name:"MRI/MRCP",role:"Ductal anatomy; distinguishes PDAC from IPMN/PNET; liver metastases"},
      {name:"EUS ± FNA",role:"Tissue diagnosis; T-staging; samples periportal nodes; 90% sensitivity for mass lesion"},
      {name:"PET-CT",role:"Detects occult metastases before major resection in borderline resectable"},
      {name:"Diagnostic laparoscopy",role:"Before Whipple in borderline/locally advanced; identifies peritoneal disease in 10–30% thought resectable on CT"}
    ]
  },
  criteria:{
    title:"Resectability Criteria (NCCN 2023)",
    items:[
      {k:"Resectable",v:"No arterial tumor contact (SMA, celiac, common hepatic); SMV/PV ≤180° contact without contour irregularity"},
      {k:"Borderline resectable",v:"SMV/PV >180° contact or contour irregularity; SMA ≤180° contact; short-segment CHA involvement; reconstructable SMV/PV occlusion"},
      {k:"Locally advanced",v:"SMA/celiac >180° abutment; unreconstructable SMV/PV; aortic involvement"},
      {k:"Metastatic",v:"M1 disease (liver, lung, peritoneum, distant nodes)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Biliary decompression: ERCP + stent (metal preferred for resectable) before Whipple if jaundice","Nutritional support; creon (pancreatic enzyme replacement)","Pain management: celiac plexus block for intractable pain","Palliative biliary bypass (hepaticojejunostomy) for unresectable with jaundice"],
    medical:["Resectable/borderline: consider neoadjuvant FOLFIRINOX ± CRT then reassess","Adjuvant: modified FOLFIRINOX (PRODIGE 24) or gemcitabine + capecitabine (ESPAC-4)","Metastatic: FOLFIRINOX (fit patients) or gemcitabine + nab-paclitaxel","BRCA1/2 mutation: olaparib maintenance post-platinum","MSI-H: pembrolizumab"],
    surgical:[
      {name:"Pancreaticoduodenectomy (Whipple)",when:"Resectable pancreatic head/neck/uncinate tumors; R0 intent",notes:"Standard or pylorus-preserving; PV/SMV resection if involved (segment resection + reconstruction); drain amylase day 3 to predict POPF"},
      {name:"Distal pancreatectomy ± splenectomy",when:"Body/tail tumors; R0 margins; no major vessel involvement",notes:"RAMPS (radical antegrade modular pancreatosplenectomy) for oncological clearance; minimally invasive approach increasingly used"},
      {name:"Total pancreatectomy",when:"Multifocal disease; positive pancreatic neck margin; IPMN with synchronous invasive cancer throughout",notes:"Obligate IDDM + exocrine insufficiency; islet cell autotransplantation at specialist centers"},
      {name:"Palliative bypass",when:"Unresectable; biliary obstruction ± gastric outlet obstruction",notes:"Hepaticojejunostomy + gastrojejunostomy; laparoscopic or open; duodenal stent alternative for gastric outlet"}
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
  guidelines:[{src:"NCCN Guidelines Pancreatic Adenocarcinoma 2023"},{src:"ESMO Clinical Practice Guidelines 2020"},{src:"ISGPS Definitions: POPF, DGE, PPH 2016"}],
  pearls:["Pylorus-preserving vs standard Whipple: equivalent oncological outcomes (PACS-01)","Preoperative biliary drainage increases infective complications — avoid unless cholangitis/severe jaundice","Adjuvant mFOLFIRINOX: 54-month median OS vs 35 months gemcitabine (PRODIGE 24)","5-year survival after R0 Whipple = 20–25%; after R1 = 10%"],
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
}
];
