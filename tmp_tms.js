// TeachMeSurgery reference additions — 10 new entries
// Covers: Presentations (acute-abdomen, dysphagia, goo, bowel-perforation, melena, rectal-bleeding)
//         Oesophageal (gord), Colorectal (pseudo-obstruction, angiodysplasia, small-bowel-tumours)
window._TMP_TMS = [

// ─────────────────────────────────────────────────────────────────────
// 1. ACUTE ABDOMEN
// ─────────────────────────────────────────────────────────────────────
{
  id:"acute-abdomen", dept:"uppergi", name:"Acute Abdomen", latin:"Abdomen acutum", organ:"Abdomen",
  severity:"high", tags:["acute abdomen","peritonitis","laparotomy","ABG","lactate","erect CXR"],
  hero:"Sudden severe abdominal pain requiring urgent assessment; first question is 'is the patient critically unwell?'; life-threatening causes include ruptured AAA, perforated viscus, and mesenteric ischaemia.",
  keypoints:[
    "First-pass assessment: critically unwell (immediate resuscitation + theatre) vs. needs investigation — this single decision drives everything",
    "Ruptured AAA: tachycardia + hypotension ± pulsatile mass — activate major haemorrhage protocol, straight to CT/theatre",
    "Mesenteric ischaemia: 'pain out of proportion to clinical signs' — classic teaching; normal exam does NOT exclude ischaemia; CT angiogram urgently",
    "Perforated viscus: rigid abdomen + peritonism; erect CXR (subdiaphragmatic free air); CT chest/abdomen with IV contrast is gold standard",
    "Bloods: FBC, U&E, LFT, CRP, amylase/lipase, ABG with lactate, G&S; elevated lactate + metabolic acidosis = ischaemia until proven otherwise",
    "ECG in all — posterior MI can mimic acute abdomen; also pre-operative baseline"
  ],
  differentials:[
    "Ruptured AAA (pulsatile mass, haemodynamic compromise)",
    "Perforated peptic ulcer (sudden onset, board-like abdomen)",
    "Mesenteric ischaemia (AF, pain out of proportion, raised lactate)",
    "Acute pancreatitis (epigastric radiating to back, raised lipase/amylase)",
    "Ruptured ectopic pregnancy (reproductive-age women, LIF pain, haemodynamic instability)",
    "Acute appendicitis (periumbilical pain migrating to RIF, Rovsing's sign)",
    "Biliary colic (RUQ, colicky, Murphy's, post-fatty meal)",
    "Ureteric colic (loin to groin, haematuria, renal angle tenderness)",
    "Strangulated hernia (obstructed hernia + systemic sepsis)",
    "DKA / Addisonian crisis (medical mimic — always check glucose and cortisol if no clear surgical cause)"
  ],
  mnemonics:[
    {name:"SOCRATES",text:"Site, Onset, Character, Radiation, Associated symptoms, Time/duration, Exacerbating/relieving factors, Severity — structured pain history for every acute abdomen"},
    {name:"Abdominal quadrants",text:"RUQ: liver/GB/duodenum. LUQ: spleen/stomach/pancreas. RIF: appendix/caecum/right ovary. LIF: sigmoid/left ovary. Epigastric: stomach/aorta/pancreas. Periumbilical: small bowel/AAA"}
  ],
  overview:{
    definition:"A clinical syndrome of sudden-onset severe abdominal pain requiring urgent assessment to identify conditions needing immediate intervention vs. those requiring further investigation.",
    epidemiology:"Accounts for ~50% of emergency surgical admissions. Most common causes: appendicitis, biliary disease, bowel obstruction, pancreatitis, and hernias in the Western world.",
    pathophysiology:"Pain arises from: (1) visceral peritoneum — poorly localised, colicky, midline (hollow viscus distension/ischaemia); (2) parietal peritoneum — well-localised, sharp, worse with movement (peritonitis, perforation); (3) referred pain — cardiac, pulmonary, renal.",
    classification:[
      {label:"Critically unwell — immediate intervention",note:"Ruptured AAA, ruptured ectopic pregnancy, perforated viscus with septic shock, massive haemorrhage → A-E resuscitation; theatre without delay"},
      {label:"Urgent — needs investigation first",note:"Acute appendicitis, biliary sepsis, small bowel obstruction, mesenteric ischaemia → stabilise, image, then decide"},
      {label:"Semi-urgent — admitted for observation",note:"Uncomplicated diverticulitis, biliary colic, renal colic, early SBO → blood tests, imaging, analgesia, serial examination"}
    ]
  },
  diagnosis:{
    history:[
      "Onset: sudden ('like a knife') = perforation/ruptured vessel; gradual = inflammatory",
      "Character: colicky (biliary, ureteric, bowel obstruction) vs. constant (peritonitis, ischaemia)",
      "Radiation: RUQ to right shoulder tip (biliary); epigastric to back (pancreatic); loin to groin (ureteric)",
      "Associated: vomiting, fever, absolute constipation (obstruction), haematemesis, melena, PR bleed",
      "PMH: previous abdominal surgery (adhesions), AF (mesenteric), AAA, PUD, IBD",
      "Medications: NSAIDs (PUD), anticoagulants, steroids (mask peritonism)"
    ],
    examination:[
      "End-of-bed assessment: pale/clammy = haemorrhage; flushed/sweaty = sepsis",
      "Vital signs: HR, BP, RR, SpO2, temperature — haemodynamic compromise = immediate priority",
      "Inspection: distension (obstruction), guarding, visible peristalsis, scars, hernias",
      "Palpation: site of maximal tenderness; rebound (peritonitis); Murphy's (cholecystitis); Rovsing's (appendicitis); pulsatile mass (AAA)",
      "Percussion: dullness (ascites, mass); loss of hepatic dullness (free air)",
      "Auscultation: tinkling bowel sounds (obstruction); absent (ileus/peritonitis)",
      "DRE: mandatory — tenderness (appendicitis, pelvic sepsis); blood (ischaemia, cancer); masses"
    ],
    investigations:[
      {name:"ABG with lactate",role:"Immediate: pH, pO2, HCO3-, lactate; lactate >2 = tissue ischaemia; rapid haemoglobin"},
      {name:"Urine dipstick ± bHCG",role:"Nitrites/leucocytes (UTI); haematuria (ureteric stone); bHCG all reproductive-age women"},
      {name:"FBC, U&E, LFT, CRP, lipase/amylase, G&S",role:"Baseline; cross-match if theatre anticipated; raised lipase: pancreatitis; raised bilirubin: biliary"},
      {name:"ECG",role:"Exclude posterior MI (referred epigastric pain); pre-operative baseline"},
      {name:"Erect CXR",role:"Free intra-abdominal air (perforation); lower lobe collapse/effusion; pneumonia"},
      {name:"USS abdomen",role:"First-line for RUQ (gallstones, CBD dilation, Murphy's USS); AAA screening; renal tract"},
      {name:"CT abdomen/pelvis (IV contrast)",role:"Gold standard for most acute surgical pathology; confirms perforation, obstruction, ischaemia, AAA; CT angiogram for vascular"}
    ]
  },
  criteria:{
    title:"Causes by Urgency",
    items:[
      {k:"Immediate theatre",v:"Ruptured AAA, ruptured ectopic, perforated viscus (unstable), type III mesenteric ischaemia"},
      {k:"Urgent (<6 h)",v:"Strangulated hernia, volvulus with ischaemia, gangrenous bowel, Boerhaave"},
      {k:"Semi-urgent (<24 h)",v:"Appendicitis, cholecystitis (complicated), biliary sepsis, ischaemic colitis"},
      {k:"Admit and observe",v:"Uncomplicated diverticulitis, early SBO (trial conservative), biliary colic, renal colic"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV access (two large-bore); aggressive IV fluid resuscitation","Analgesia (do NOT withhold — does not mask diagnosis; IV morphine + antiemetic)","NBM; NG tube if obstruction/vomiting","Urine output monitoring (IDC); strict fluid balance","Serial abdominal examination — clinical deterioration mandates CT ± theatre"],
    medical:["IV broad-spectrum antibiotics if peritonitis, sepsis, or perforation suspected (pip-tazo or cefuroxime + metronidazole)","VTE prophylaxis once surgical plan made","PPI if GI bleed suspected","Correct coagulopathy before theatre if feasible"],
    surgical:[
      {name:"Emergency laparotomy",when:"Ruptured AAA, perforated viscus (unstable), mesenteric infarction, ruptured ectopic",notes:"Midline laparotomy; damage control principle if haemodynamically unstable; source control + washout"},
      {name:"Laparoscopy",when:"Stable patients: appendicitis, perforated PUD (contained), diagnostic uncertainty in young women",notes:"Laparoscopic appendicectomy; laparoscopic washout ± Graham patch PUD; convert if necessary"},
      {name:"IR intervention",when:"GI haemorrhage (variceal, diverticular, angiodysplasia); contained aortic rupture",notes:"Embolisation, TIPS, endovascular stent-graft; multidisciplinary decision"}
    ]
  },
  guidelines:[
    {src:"WSES Guidelines on Acute Abdomen 2020",url:"https://wjes.biomedcentral.com/"},
    {src:"NICE CG134: Acute Abdominal Pain"},
    {src:"RCS England Emergency Surgery Standards 2021"}
  ],
  pearls:[
    "Never withhold analgesia — IV morphine titrated does not mask diagnosis and improves patient cooperation",
    "Lactate >4 mmol/L + peritonitis = theatre without delay; don't wait for CT",
    "Elderly patients and those on steroids may have blunted peritonism — a soft abdomen does NOT exclude perforation",
    "Mesenteric ischaemia: if you think of it and CT shows no other cause, take to theatre — delay is lethal"
  ],
  mistakes:[
    "Delaying analgesia 'to avoid masking the diagnosis' — evidence shows morphine does NOT impair clinical assessment",
    "Not doing bHCG in reproductive-age women — missed ectopic is a leading cause of maternal death",
    "Missing posterior MI — ECG is mandatory in all acute abdomens",
    "Normal lactate does NOT exclude mesenteric ischaemia (normal in ~25% early on)"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 2. DYSPHAGIA
// ─────────────────────────────────────────────────────────────────────
{
  id:"dysphagia", dept:"uppergi", name:"Dysphagia", latin:"Dysphagia", organ:"Oesophagus/Pharynx",
  severity:"medium", tags:["dysphagia","OGD","oesophageal cancer","achalasia","manometry","Plummer-Vinson"],
  hero:"Difficulty swallowing — treat as upper GI malignancy until proven otherwise; OGD is the first investigation; progressive solid-then-liquid dysphagia = mechanical obstruction; pure liquid dysphagia = motility disorder.",
  keypoints:[
    "Treat as upper GI malignancy until proven otherwise — any new dysphagia needs urgent OGD",
    "Solids only → progressive to liquids: mechanical obstruction (cancer, stricture, Schatzki ring)",
    "Liquids = solids, or liquids worse: motility disorder (achalasia, DES, neurological)",
    "Oropharyngeal dysphagia (difficulty initiating swallow, coughing, nasal regurgitation): neurological cause — involve SALT and neurology",
    "Plummer-Vinson (Patterson-Kelly-Brown) syndrome: iron-deficiency anaemia + post-cricoid web + koilonychia — risk factor for post-cricoid cancer",
    "Pharyngeal pouch (Zenker's diverticulum): regurgitation of undigested food, halitosis, gurgling neck mass"
  ],
  differentials:[
    "Oesophageal carcinoma (progressive solids → liquids, weight loss, >50 y)",
    "Achalasia (failure of LOS relaxation, bird-beak on barium swallow)",
    "Benign peptic stricture (long-standing GORD history)",
    "Pharyngeal pouch / Zenker's diverticulum (regurgitation, gurgling)",
    "Oesophageal web / Schatzki ring (intermittent solid dysphagia)",
    "Extrinsic compression: thyroid goitre, mediastinal mass, lung cancer, vascular ring",
    "Eosinophilic oesophagitis (young men, atopy, food impaction)",
    "Diffuse oesophageal spasm (chest pain + dysphagia, corkscrew oesophagus)",
    "CVA / neurological (bulbar palsy, MS, MND, Parkinson's — liquids worse than solids)"
  ],
  mnemonics:[
    {name:"Causes of Dysphagia — IN THE WALL",text:"Intraluminal (foreign body, food bolus impaction) → IN the wall (tumour, stricture, achalasia, web) → Outside the wall (goitre, mediastinal mass, vascular anomaly)"}
  ],
  overview:{
    definition:"Difficulty in swallowing resulting from abnormal transit of liquids or solids during the oropharyngeal or oesophageal phases of swallowing.",
    epidemiology:"Affects ~8% of the general population; increases with age (25–40% of elderly). Most common cause in elderly: oropharyngeal dysphagia from neurological disease.",
    pathophysiology:"Normal swallowing: oropharyngeal phase (voluntary, <1 s) → oesophageal phase (involuntary peristalsis). Dysphagia arises from: (1) luminal obstruction (mechanical); (2) wall disease (motility, inflammation); (3) extrinsic compression; (4) neurological failure of the oropharyngeal phase.",
    classification:[
      {label:"Oropharyngeal",note:"Difficulty initiating swallow; coughing, choking, nasal regurgitation; neurological cause; SALT referral"},
      {label:"Oesophageal — mechanical",note:"Progressive solids then liquids; cancer, stricture, web, Schatzki ring; OGD urgent"},
      {label:"Oesophageal — motility",note:"Liquids = solids (often liquids worse); achalasia, DES, scleroderma; manometry diagnostic"}
    ]
  },
  diagnosis:{
    history:[
      "Duration and progression — acute (foreign body, food impaction) vs. progressive (cancer, achalasia)",
      "Solids only, liquids only, or both — key discriminator (see above)",
      "Level of hold-up: throat vs. retrosternal vs. epigastric",
      "Associated: weight loss, odynophagia (pain on swallowing), hoarse voice, cough, regurgitation, reflux",
      "Referred ear/neck pain: suggest pharyngeal/proximal oesophageal pathology",
      "PMH: GORD, Barrett's, previous radiotherapy, systemic sclerosis, neurological disease"
    ],
    examination:[
      "General: cachexia, weight loss (malignancy)",
      "Neck: cervical lymphadenopathy (metastatic); thyroid enlargement (extrinsic compression); gurgling neck mass (Zenker's)",
      "Neurological: dysarthria, dysphonia, tremor, cranial nerve palsy (bulbar palsy)",
      "Mouth: oral candidiasis (immunocompromised); dentition",
      "Abdomen: hepatomegaly, epigastric mass (advanced oesophageal/gastric cancer)"
    ],
    investigations:[
      {name:"OGD (upper GI endoscopy)",role:"First-line for all dysphagia; excludes malignancy; biopsy suspicious lesions; therapeutic (dilation, stenting)"},
      {name:"Barium swallow",role:"Motility disorders (achalasia: bird-beak), pharyngeal pouch, webs/rings; good oropharyngeal assessment when OGD limited"},
      {name:"CT chest/abdomen/pelvis",role:"Staging of oesophageal malignancy; extrinsic compression (mediastinal mass, lung cancer)"},
      {name:"Oesophageal manometry",role:"Gold standard for motility disorders; measures LOS pressure, peristalsis amplitude; Chicago classification"},
      {name:"24-hour pH/impedance study",role:"Quantifies reflux; guides surgical candidacy for fundoplication"},
      {name:"FBC, TFTs, iron studies",role:"Anaemia (Plummer-Vinson, malignancy); thyroid function (goitre)"}
    ]
  },
  criteria:{
    title:"2-Week-Wait Referral Criteria (NICE NG12)",
    items:[
      {k:"Dysphagia any age",v:"2-week wait upper GI cancer referral"},
      {k:"Age ≥55 + weight loss + upper abdominal pain/dyspepsia/reflux",v:"2-week wait referral"},
      {k:"Odynophagia",v:"Urgent investigation — suggests active oesophageal inflammation or malignancy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Dietitian assessment: texture modification, supplementary nutrition","SALT (speech and language therapy): oropharyngeal dysphagia — swallowing techniques, exercises","Treat GORD: PPI (benign peptic stricture)","Food impaction: Buscopan 20 mg IV ± fizzy drinks; OGD if fails"],
    medical:["Achalasia: calcium channel blockers (diltiazem) or nitrates — temporising only","Eosinophilic oesophagitis: swallowed steroids (fluticasone), dietary elimination (six-food elimination)","Neurological: MDT management with neurology; PEG if severe aspiration risk"],
    surgical:[
      {name:"OGD + dilatation",when:"Benign peptic stricture, Schatzki ring, eosinophilic stricture",notes:"Balloon or bougie dilation under endoscopic/fluoroscopic guidance; may need repeated sessions"},
      {name:"Pneumatic dilation / POEM / Heller myotomy",when:"Achalasia",notes:"Pneumatic dilation: 80% success at 5 years; POEM (per-oral endoscopic myotomy): newer, equivalent results; laparoscopic Heller + Dor fundoplication: surgical gold standard"},
      {name:"Endoscopic stent (SEMS)",when:"Malignant oesophageal stricture — palliation or bridge to surgery",notes:"Self-expanding metal stent; relief in 80%; risk: migration, perforation, tumour ingrowth"},
      {name:"Oesophagectomy",when:"Resectable oesophageal/GOJ cancer",notes:"Ivor Lewis (mid-lower oesophagus); McKeown (upper third); minimally invasive preferred where available"},
      {name:"Pharyngeal pouch repair",when:"Symptomatic Zenker's diverticulum",notes:"Endoscopic stapling (Dohlman procedure) preferred; open transcervical diverticulectomy if large"}
    ]
  },
  guidelines:[
    {src:"NICE NG12: Suspected Cancer Referral Guidelines",url:"https://www.nice.org.uk/guidance/ng12"},
    {src:"BSG Dysphagia Guidelines 2021"},
    {src:"ACG Achalasia Guidelines 2020"}
  ],
  pearls:[
    "All new dysphagia = 2-week wait OGD referral until cancer excluded",
    "Oropharyngeal dysphagia in the elderly is neurological until proven otherwise — SALT before endoscopy",
    "Achalasia untreated for years → megaoesophagus and 16x increased risk of oesophageal squamous cell carcinoma",
    "Plummer-Vinson syndrome: treat iron deficiency first — web may resolve; female, middle-aged, iron-deficient"
  ],
  mistakes:[
    "Attributing dysphagia to anxiety or stress without OGD — malignancy must be excluded first",
    "Dilating a malignant stricture without staging CT — contraindicated in resectable tumour",
    "Missing Zenker's diverticulum on OGD — scope can perforate into pouch; barium swallow first if suspected"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 3. GASTRIC OUTLET OBSTRUCTION
// ─────────────────────────────────────────────────────────────────────
{
  id:"gastric-outlet-obstruction", dept:"uppergi", name:"Gastric Outlet Obstruction", latin:"Obstructio pylorica", organ:"Stomach/Duodenum",
  severity:"high", tags:["GOO","pyloric obstruction","succussion splash","hypochloraemic alkalosis","gastrojejunostomy","Bouveret"],
  hero:"Mechanical obstruction at the pylorus or proximal duodenum; presents with profuse vomiting of undigested food, succussion splash, and hypochloraemic hypokalaemic metabolic alkalosis — the classic biochemical derangement.",
  keypoints:[
    "Classic biochemistry: hypochloraemic, hypokalaemic metabolic alkalosis — vomiting loses HCl; kidneys compensate by retaining H+ and excreting K+",
    "Succussion splash: sloshing sound on shaking the abdomen — retained gastric contents; pathognomonic of GOO or gastroparesis",
    "Most common malignant cause: gastric cancer (antrum/pylorus); most common benign cause: peptic ulcer disease stricturing",
    "Bouveret syndrome: gallstone impacted at pylorus or duodenum — rare but classic board question",
    "Immediate management: NG tube decompression + aggressive IV fluid resuscitation + IV PPI + electrolyte replacement",
    "Endoscopy: confirms diagnosis, excludes malignancy (biopsy), can be therapeutic (balloon dilation for benign stricture)"
  ],
  differentials:[
    "Gastric cancer (antrum/pylorus) — most common malignant cause",
    "Peptic ulcer disease with stricturing — most common benign cause",
    "Pancreatic cancer / pancreatic pseudocyst — extrinsic compression",
    "Gastroparesis — functional (diabetes, post-vagotomy); no mechanical obstruction on imaging",
    "Bouveret syndrome — gallstone at pylorus (rare)",
    "GIST or lymphoma — intramural",
    "Anastomotic stricture post-gastrectomy"
  ],
  mnemonics:[
    {name:"GOO alkalosis",text:"Vomiting → lose H+ and Cl- → hypochloraemia → kidney compensates: Na+/H+ exchanger retains Na+ and excretes H+ → paradoxical aciduria with systemic alkalosis; K+ lost in urine → hypokalaemia"}
  ],
  overview:{
    definition:"Mechanical obstruction of the proximal GI tract at or distal to the gastric pylorus, causing inability of the stomach to empty into the duodenum.",
    epidemiology:"Incidence declining as PUD managed medically. Malignant GOO (gastric/pancreatic cancer) now more common than benign (PUD) in most series.",
    pathophysiology:"Obstruction leads to gastric distension and repeated vomiting of gastric contents (high in HCl). Loss of HCl → metabolic alkalosis; concurrent loss of K+ (vomiting + aldosterone-driven renal wasting) → hypokalaemia; Cl- depletion → hypochloraemia. Severe cases: uraemia from dehydration.",
    classification:[
      {label:"Intraluminal",note:"Gallstone (Bouveret), gastric bezoar, foreign body"},
      {label:"Intramural",note:"Gastric/duodenal cancer, PUD stricture, GIST, anastomotic stricture"},
      {label:"Extraluminal",note:"Pancreatic cancer, pancreatic pseudocyst, extrinsic compression"}
    ]
  },
  diagnosis:{
    history:[
      "Profuse vomiting — large volume, undigested food (no bile = proximal to ampulla)",
      "Early satiety, epigastric fullness, post-prandial vomiting",
      "Weight loss, anorexia (malignancy)",
      "Previous PUD history, NSAID use, H. pylori treatment",
      "Absolute constipation (obstructive)"
    ],
    examination:[
      "Signs of dehydration: dry mucous membranes, reduced skin turgor, hypotension, tachycardia, oliguria",
      "Epigastric distension and tenderness",
      "Succussion splash (sensitivity ~55%; highly specific for retained gastric contents)",
      "Visible peristalsis (L to R) in thin patients",
      "Cachexia, lymphadenopathy (malignancy)"
    ],
    investigations:[
      {name:"FBC, U&E, LFT, Ca2+, clotting, G&S",role:"Metabolic profile: hypochloraemic, hypokalaemic alkalosis; uraemia; raised creatinine (dehydration)"},
      {name:"AXR",role:"Dilated stomach with air-fluid level; absence of distal bowel gas suggests high obstruction"},
      {name:"CT abdomen/pelvis with IV contrast",role:"Identifies site, cause, and extent of obstruction; staging if malignancy; identifies fistula (Bouveret)"},
      {name:"OGD (upper GI endoscopy)",role:"Confirms obstruction, biopsies mass/ulcer, assesses for H. pylori; potentially therapeutic (dilation, stenting)"},
      {name:"Barium/Gastrografin swallow",role:"If OGD contraindicated; outlines anatomy; demonstrates delayed gastric emptying"}
    ]
  },
  criteria:{
    title:"Metabolic Derangement in GOO",
    items:[
      {k:"Na+",v:"Low-normal to low (dilutional)"},
      {k:"K+",v:"Low (hypokalaemia — vomiting + renal wasting)"},
      {k:"Cl-",v:"Low (hypochloraemia — loss of HCl)"},
      {k:"HCO3-",v:"High (metabolic alkalosis — compensating for H+ loss)"},
      {k:"pH",v:"High (alkalotic)"},
      {k:"Urea/Creatinine",v:"Elevated (dehydration/pre-renal uraemia)"},
      {k:"Urine",v:"Paradoxical aciduria (kidney excretes H+ to retain Na+ in alkalosis)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NG tube drainage (free drainage + regular aspiration) — decompress stomach","IV 0.9% NaCl ± KCl replacement — correct hypochloraemia and hypokalaemia first","IV PPI (e.g. omeprazole 40 mg BD) — treat concurrent PUD/inflammation","Nil by mouth; monitor electrolytes 6-hourly until corrected","IDC: monitor urine output"],
    medical:["H. pylori eradication if positive (triple therapy) — may resolve inflammatory stricture","Nutritional support: TPN or NJ tube feeding if prolonged obstruction"],
    surgical:[
      {name:"Endoscopic balloon dilation",when:"Benign stricture (PUD, anastomotic) in fit patient",notes:"Through-the-scope balloon dilation; 80–90% success for PUD stricture; repeat if needed; antibiotics post-H. pylori eradication first"},
      {name:"Endoscopic stenting (SEMS)",when:"Malignant GOO — palliation when surgery not feasible",notes:"Self-expanding metal stent; rapid symptom relief; oral intake in 80%; bridging to surgery in some"},
      {name:"Gastrojejunostomy (GJ bypass)",when:"Malignant obstruction not amenable to stenting; failed endoscopy; anticipated long survival",notes:"Laparoscopic or open; anastomosis between posterior gastric wall and jejunum; bypasses obstruction; antecolic or retrocolic"},
      {name:"Resection (gastrectomy or Whipple)",when:"Resectable gastric or pancreatic cancer",notes:"Subtotal/total gastrectomy for gastric cancer; pancreaticoduodenectomy if pancreatic head cancer; curative intent only"}
    ]
  },
  guidelines:[
    {src:"BSG Benign Gastric Outlet Obstruction Guidelines"},
    {src:"ESMO Gastric Cancer Guidelines 2022",url:"https://www.esmo.org/guidelines"},
    {src:"WSES Gastric Emergencies Guidelines 2021",url:"https://wjes.biomedcentral.com/"}
  ],
  pearls:[
    "Correct electrolytes before any surgical or endoscopic intervention — alkalosis impairs cardiac conduction",
    "Succussion splash + large-volume bilious vomiting = GOO until proven otherwise; NG tube immediately",
    "Malignant vs. benign GOO: CT chest/abdomen/pelvis is mandatory before endoscopy to guide management",
    "Gastroparesis (functional): no mechanical obstruction on CT; treat medically (metoclopramide, erythromycin); no surgery"
  ],
  mistakes:[
    "Giving saline without KCl — correcting alkalosis without K+ replacement worsens hypokalaemia",
    "Proceeding to surgery without correcting metabolic alkalosis — increases anaesthetic and cardiac risk",
    "Diagnosing gastroparesis without CT scan — malignant cause must be excluded first"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 4. BOWEL PERFORATION
// ─────────────────────────────────────────────────────────────────────
{
  id:"bowel-perforation", dept:"colorectal", name:"Bowel Perforation", latin:"Perforatio intestini", organ:"GI tract",
  severity:"high", tags:["perforation","peritonitis","pneumoperitoneum","Graham patch","Hartmann","sepsis"],
  hero:"Full-thickness breach of the GI tract wall, releasing luminal contents into the peritoneal cavity; erect CXR shows subdiaphragmatic free air; CT is gold standard; surgery is almost always required.",
  keypoints:[
    "Erect CXR: free air under diaphragm (pneumoperitoneum) — present in ~70% of perforations; CT detects >95%",
    "Most common cause: diverticular disease (sigmoid) in UK adults; PUD perforation accounts for ~5% of PUD cases",
    "Graham patch (omentoplasty): covers perforated peptic ulcer with a pedicle of omentum — first described 1937, still used",
    "Hartmann's procedure: sigmoid resection + end colostomy + oversewn rectal stump — for perforated diverticulitis or left colon cancer; avoids high-risk primary anastomosis in contaminated field",
    "Four-quadrant peritonitis: generalised peritonitis with rigidity — emergency laparotomy/laparoscopy; no role for conservative management",
    "Hinchey classification (diverticular perforation): stages I–IV guide management"
  ],
  differentials:[
    "Perforated peptic ulcer (sudden epigastric pain, board-like abdomen, air under diaphragm)",
    "Perforated diverticulitis (LIF pain, elderly, known diverticulosis)",
    "Perforated appendix (RIF, younger patient, delayed presentation)",
    "Perforated colorectal cancer (elderly, change in bowel habit, weight loss)",
    "Iatrogenic (post-colonoscopy, post-OGD — onset within hours of procedure)",
    "Toxic megacolon with perforation (UC, Crohn's, C. difficile — very unwell, distended colon on AXR)",
    "Boerhaave syndrome (oesophageal — vomiting, chest pain, surgical emphysema)"
  ],
  mnemonics:[
    {name:"Hinchey Classification",text:"I = pericolic abscess; II = pelvic/distant abscess; III = purulent peritonitis (no stool); IV = faecal peritonitis — III and IV require emergency surgery"}
  ],
  overview:{
    definition:"Full-thickness disruption of the GI tract wall resulting in contamination of the peritoneal or mediastinal cavity with luminal contents.",
    epidemiology:"Perforated PUD: 5–10/100,000/year; mortality 10–40% depending on delay. Perforated diverticulitis: 4/100,000/year. Iatrogenic colonoscopy perforation: 0.1–0.3%.",
    pathophysiology:"Luminal contents (gastric acid, faeces, bacteria) contaminate the peritoneum → chemical peritonitis (immediate) → bacterial peritonitis (within hours) → sepsis → multi-organ failure. Upper GI perforation initially chemical (sterile gastric acid); lower GI immediately faecal/bacterial.",
    classification:[
      {label:"Hinchey I",note:"Pericolic abscess — percutaneous drainage ± antibiotics if stable"},
      {label:"Hinchey II",note:"Pelvic or distant abscess — percutaneous drainage ± antibiotics if stable"},
      {label:"Hinchey III",note:"Generalised purulent peritonitis — laparoscopic washout or Hartmann's"},
      {label:"Hinchey IV",note:"Generalised faecal peritonitis — emergency Hartmann's procedure; highest mortality"}
    ]
  },
  diagnosis:{
    history:[
      "Sudden onset severe abdominal pain (perforation is instantaneous for PUD)",
      "Site: epigastric (PUD), LIF (diverticular), RIF (appendix), diffuse (generalised peritonitis)",
      "Worsening pain with movement (peritonism)",
      "Fever, rigors (established peritonitis or abscess)",
      "Previous history: PUD/NSAID use, diverticulosis, IBD, malignancy, recent endoscopy"
    ],
    examination:[
      "Haemodynamic: tachycardia, hypotension, fever (sepsis) or hypothermia (severe sepsis/shock)",
      "Rigid, board-like abdomen — generalised peritonitis (loss of peritoneal elasticity due to muscle guarding)",
      "Localised peritonism: tenderness + guarding + rebound at site of perforation",
      "Loss of hepatic dullness (free air displaces liver)",
      "Absent bowel sounds (ileus/peritonitis)"
    ],
    investigations:[
      {name:"Erect CXR",role:"Free air under right hemidiaphragm in ~70% of perforations; must be erect for 10 min prior"},
      {name:"CT abdomen/pelvis with IV contrast",role:"Gold standard — >95% sensitivity; identifies free air, site of perforation, abscess, underlying cause (cancer)"},
      {name:"FBC, U&E, CRP, lactate, G&S",role:"Baseline; WCC elevated; lactate + metabolic acidosis = severity marker; cross-match if theatre planned"},
      {name:"AXR",role:"Free air (Rigler's sign: both sides of bowel wall visible); less sensitive than erect CXR"},
      {name:"Urinalysis ± bHCG (women)",role:"Exclude UTI mimic; bHCG mandatory in reproductive-age women (ruptured ectopic)"}
    ]
  },
  criteria:{
    title:"Boey Score (Perforated PUD Mortality)",
    items:[
      {k:"Shock on admission (SBP <90 mmHg)",v:"1 point"},
      {k:"ASA score ≥3 (major comorbidity)",v:"1 point"},
      {k:"Symptom duration >24 hours",v:"1 point"},
      {k:"Score 0",v:"Mortality ~1%"},
      {k:"Score 1",v:"Mortality ~10%"},
      {k:"Score 2",v:"Mortality ~45%"},
      {k:"Score 3",v:"Mortality >90%"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NBM; NG tube decompression","IV broad-spectrum antibiotics immediately (pip-tazo or cefuroxime + metronidazole)","IV fluid resuscitation; IDC; monitor lactate","IV PPI if upper GI source","Selected stable patients with sealed/localised perforation (CT-confirmed): antibiotics + observation is acceptable — requires daily review"],
    medical:["Sepsis Six bundle: oxygen, cultures, IV antibiotics, IV fluids, blood glucose, lactate monitoring","Analgesia: IV morphine + antiemetic","Correct coagulopathy (FFP, Vit K) before theatre"],
    surgical:[
      {name:"Laparoscopic washout ± Graham patch",when:"Perforated PUD (Boey 0–1); fit patient; <24 h",notes:"Most common approach; thorough peritoneal washout (5–10 L warm saline); Graham patch: omentum secured over perforation; repair if <2 cm"},
      {name:"Hartmann's procedure",when:"Perforated sigmoid diverticulitis (Hinchey III/IV); perforated left colon cancer",notes:"Sigmoid resection + end sigmoid colostomy + oversewn rectal stump; colostomy reversal 3–6 months later (50–60% never reversed)"},
      {name:"Right hemicolectomy ± primary anastomosis",when:"Perforated caecal/right colon (cancer, Hinchey I/II)",notes:"Primary anastomosis acceptable in right colon with minimal contamination; on-table lavage"},
      {name:"Laparoscopic peritoneal washout",when:"Purulent peritonitis (Hinchey III) in selected fit patients",notes:"Controversial vs. Hartmann's — SCANDIV and LOLA trials did not show superiority; use selectively"}
    ]
  },
  guidelines:[
    {src:"WSES Guidelines on Perforated Diverticulitis 2020",url:"https://wjes.biomedcentral.com/"},
    {src:"NICE NG117: Diverticular Disease",url:"https://www.nice.org.uk/guidance/ng147"},
    {src:"ESCP Diverticular Disease Guidelines 2020",url:"https://www.escp.eu.com/guidelines"}
  ],
  pearls:[
    "Start IV antibiotics and resuscitation before CT — don't delay antibiotics waiting for imaging",
    "Graham patch repair failure rate ~5% — always send fluid for culture; eradicate H. pylori post-operatively",
    "Boey score predicts PUD mortality — Boey 3 has >90% mortality; involve ICU/anaesthetics early",
    "Iatrogenic perforation post-colonoscopy: small, early, no peritonitis → trial conservative with antibiotics; any peritonitis → theatre"
  ],
  mistakes:[
    "Waiting for bowel sounds to 'come back' before re-examining — serial examination is essential in conservatively managed cases",
    "Primary anastomosis in Hinchey IV faecal peritonitis — extremely high leak rate in contaminated field",
    "Using barium for upper GI contrast study if perforation suspected — water-soluble contrast (Gastrografin) only"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 5. MELENA
// ─────────────────────────────────────────────────────────────────────
{
  id:"melena", dept:"uppergi", name:"Melena", latin:"Melaena", organ:"Upper GI tract",
  severity:"high", tags:["melena","upper GI bleed","Glasgow-Blatchford","OGD","variceal","Rockall"],
  hero:"Passage of black tarry stools from degradation of blood by intestinal enzymes — almost always upper GI bleeding (>90%); Glasgow-Blatchford Score ≤1 = safe early discharge; urgent OGD within 24 h.",
  keypoints:[
    "Glasgow-Blatchford Score (GBS): stratifies need for intervention; GBS 0 = very low risk (outpatient OGD); GBS ≥7 = high risk",
    "Elevated urea:creatinine ratio (>100:1 in mmol/L) suggests upper GI source — blood protein absorbed in small bowel raises urea",
    "OGD within 24 h (UK standard); within 12 h for suspected variceal bleed — terlipressin + prophylactic antibiotics before scope",
    "Variceal melena: terlipressin (2 mg IV QDS), prophylactic ceftriaxone (SBP prevention), octreotide; urgent banding",
    "Rockall score (post-endoscopy): predicts re-bleeding and mortality; score <3 = low risk",
    "Transfusion trigger: Hb <80 g/L (non-variceal); Hb <80 g/L (variceal) — avoid over-transfusion in varices (portal hypertension worsens)"
  ],
  differentials:[
    "Peptic ulcer disease (most common — 35–50% of UGIB; raised urea, NSAID/H. pylori history)",
    "Oesophageal varices (stigmata of liver disease; spider naevi, ascites, jaundice)",
    "Mallory-Weiss tear (vomiting then haematemesis; classically post-alcohol binge; usually self-limiting)",
    "Upper GI malignancy (weight loss, dysphagia, older patient)",
    "Angiodysplasia (older patient, no obvious cause; Heyde's syndrome: AS + angiodysplasia)",
    "Haemobilia (trauma, hepatic artery aneurysm — Quincke's triad: RUQ pain + haemobilia + jaundice)",
    "Aortoenteric fistula (previous aortic graft + GI bleed = fistula until proved otherwise)"
  ],
  mnemonics:[
    {name:"Glasgow-Blatchford Score key items",text:"BUN ≥6.5 + Hb drop + SBP <110 + pulse ≥100 + melena + syncope + liver disease + cardiac failure = higher risk; GBS 0 = outpatient; GBS ≥7 = high risk intervention needed"}
  ],
  overview:{
    definition:"Black, tarry, offensive-smelling stools resulting from degradation of haemoglobin by intestinal bacteria as blood transits the GI tract; requires ≥50–100 mL blood loss.",
    epidemiology:"Upper GI bleeding: incidence 50–170/100,000/year; mortality 5–10% (in-hospital). Mortality highest in: age >60, haemodynamic compromise, variceal source, Rockall ≥8.",
    pathophysiology:"Blood in upper GI tract (above ligament of Treitz) undergoes chemical alteration by gastric acid and intestinal bacteria. Haemoglobin → haematin (black pigment) → melanotic stool. Takes ≥8 h transit time; rapid upper GI bleeding can cause haematochezia (bright red PR) — marker of massive haemorrhage.",
    classification:[
      {label:"Variceal",note:"Portal hypertension (cirrhosis, portal vein thrombosis); high risk re-bleed; terlipressin + banding/TIPSS"},
      {label:"Non-variceal peptic ulcer",note:"Forrest classification guides endoscopic therapy: Ia (spurting) and IIa (visible vessel) = definitive endotherapy"},
      {label:"Other upper GI",note:"Mallory-Weiss, oesophagitis, Dieulafoy's lesion, upper GI cancer, angiodysplasia"}
    ]
  },
  diagnosis:{
    history:[
      "Stool character: black, tarry, 'like tar', sticky, offensive — vs. iron supplement (formed black stool) vs. dark red (lower GI)",
      "Associated haematemesis (confirms upper GI source)",
      "Medications: NSAIDs, aspirin, anticoagulants (warfarin, NOACs), clopidogrel, steroids",
      "PMH: known PUD, cirrhosis/liver disease, previous GI bleed, previous variceal banding",
      "Alcohol intake, NSAID use",
      "Syncope, dizziness on standing (haemodynamic compromise)"
    ],
    examination:[
      "Haemodynamic: tachycardia (HR >100), hypotension (SBP <100) = significant haemorrhage; postural hypotension = 15–20% volume loss",
      "Pallor, cool peripheries",
      "Stigmata of liver disease: jaundice, spider naevi, caput medusae, ascites, hepatosplenomegaly, leukonychia — variceal source",
      "Epigastric tenderness (PUD)",
      "DRE: confirm melena (black tarry stool on glove); exclude rectal cancer"
    ],
    investigations:[
      {name:"FBC, U&E, LFT, coagulation, G&S",role:"Hb baseline (may be normal acutely — haemodilution takes 24–72 h); elevated urea:creatinine >100; cross-match if unstable; INR/PT (liver disease)"},
      {name:"Glasgow-Blatchford Score",role:"GBS: BUN, Hb, SBP, pulse, melena, syncope, hepatic disease, cardiac failure — GBS 0–1 = outpatient; GBS ≥7 = high-risk; guides admission/scope urgency"},
      {name:"OGD (emergency gastroscopy)",role:"Within 24 h (NICE/BSG standard); within 12 h for suspected varices/haemodynamic instability; diagnostic + therapeutic (adrenaline injection, clips, banding)"},
      {name:"CT angiogram",role:"Active bleeding suspected but OGD unavailable or inconclusive; identifies source; guides IR embolisation"},
      {name:"ECG",role:"Tachycardia/ischaemia; pre-procedure baseline"}
    ]
  },
  criteria:{
    title:"Glasgow-Blatchford Score (GBS)",
    items:[
      {k:"BUN 6.5–7.9 mmol/L",v:"2 pts"},
      {k:"BUN 8.0–9.9 mmol/L",v:"3 pts"},
      {k:"BUN 10.0–24.9 mmol/L",v:"4 pts"},
      {k:"BUN ≥25 mmol/L",v:"6 pts"},
      {k:"Hb 12–12.9 g/dL (men) or 10–11.9 g/dL (women)",v:"1 pt"},
      {k:"Hb 10–11.9 g/dL (men)",v:"3 pts"},
      {k:"Hb <10 g/dL (men or women)",v:"6 pts"},
      {k:"SBP 100–109 mmHg",v:"1 pt"},
      {k:"SBP 90–99 mmHg",v:"2 pts"},
      {k:"SBP <90 mmHg",v:"3 pts"},
      {k:"Pulse ≥100 bpm",v:"1 pt"},
      {k:"Melena present",v:"1 pt"},
      {k:"Syncope",v:"2 pts"},
      {k:"Hepatic disease",v:"2 pts"},
      {k:"Cardiac failure",v:"2 pts"},
      {k:"GBS 0",v:"Very low risk — outpatient OGD acceptable"},
      {k:"GBS 1–2",v:"Low risk — consider early discharge with urgent outpatient OGD"},
      {k:"GBS ≥7",v:"High risk — inpatient OGD, likely needs endoscopic intervention"}
    ]
  },
  scoring:[],
  management:{
    conservative:["2× large-bore IV access; type and cross-match","IV crystalloid resuscitation; target MAP >65 mmHg","Transfuse if Hb <80 g/L (>80 g/L if cardiovascular disease)","Correct coagulopathy: FFP if INR >1.5; platelets if <50; Vit K if warfarinised","Avoid over-resuscitation in varices — worsens portal pressure"],
    medical:["IV PPI (omeprazole 80 mg bolus → 8 mg/h infusion) for non-variceal bleed (pre-endoscopy PPI reduces need for endotherapy)","Variceal: terlipressin 2 mg IV QDS (up to 5 days); prophylactic ceftriaxone 1 g IV OD; octreotide infusion","Stop NSAIDs/anticoagulants; consider NOAC reversal (andexanet alfa, idarucizumab) if actively bleeding"],
    surgical:[
      {name:"Endoscopic haemostasis (OGD)",when:"Active bleeding (Forrest Ia, Ib) or visible vessel (Forrest IIa) on OGD",notes:"Dual therapy: adrenaline injection + thermal (heater probe/APC) or clips; endoscopic banding for varices; OTSC clips for large vessels"},
      {name:"Interventional radiology embolisation",when:"Failed endoscopic therapy or endoscopy not possible",notes:"CT angiogram first to localise; super-selective embolisation of culprit vessel (GDA for duodenal ulcer)"},
      {name:"Emergency surgery",when:"Failed endoscopy + IR; ongoing haemodynamic instability",notes:"Duodenotomy + oversewing bleeding vessel (DU); partial gastrectomy (GU); associated H. pylori eradication post-discharge"},
      {name:"TIPSS",when:"Recurrent variceal bleeding not controlled with banding/terlipressin",notes:"Transjugular intrahepatic portosystemic shunt; reduces portal pressure; hepatic encephalopathy risk"}
    ]
  },
  guidelines:[
    {src:"BSG Acute Upper GI Bleeding Guidelines 2021"},
    {src:"NICE CG141: Upper GI Bleeding",url:"https://www.nice.org.uk/guidance/cg141"},
    {src:"ESGE Upper GI Haemorrhage Guidelines 2021",url:"https://www.esmo.org/guidelines"}
  ],
  pearls:[
    "GBS 0 = very low risk; can be discharged safely for outpatient OGD — prevents unnecessary admission",
    "Haematochezia (bright red PR) from an upper GI source = massive haemorrhage (>1000 mL); urgent resuscitation and OGD",
    "Forrest classification guides endotherapy: Ia (spurting artery) = mandatory dual endotherapy; Forrest III (clean base ulcer) = no endotherapy",
    "Variceal bleeding: terlipressin + ceftriaxone should be started before endoscopy; saves lives in RCTs"
  ],
  mistakes:[
    "Not correcting coagulopathy before OGD in variceal bleeding — INR >2 significantly impairs haemostasis",
    "Over-transfusing variceal bleeders to Hb >100 g/L — increases portal pressure and re-bleeding risk",
    "Prescribing NSAIDs post-discharge without gastroprotection after peptic ulcer bleed — high re-bleed risk"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 6. RECTAL BLEEDING
// ─────────────────────────────────────────────────────────────────────
{
  id:"rectal-bleeding", dept:"colorectal", name:"Rectal Bleeding (Haematochezia)", latin:"Haematochezia", organ:"Lower GI tract",
  severity:"medium", tags:["rectal bleeding","lower GI bleed","Oakland score","colonoscopy","diverticular","haematochezia"],
  hero:"Passage of fresh blood per rectum — 95% resolve spontaneously; use Oakland Score to risk-stratify; colonoscopy is definitive investigation; always exclude colorectal malignancy in older patients.",
  keypoints:[
    "Oakland Score ≤8 = low risk (95% of these can be safely discharged with outpatient colonoscopy)",
    "Most common cause of acute lower GI bleed: diverticular disease (~40%); most common in Western countries",
    "Diverticular bleed: painless; massive; spontaneously stops in 70–80%; 25% re-bleed within 4 years",
    "Always perform DRE — haemorrhoids diagnosed on DRE/proctoscopy; rectal cancer felt on DRE",
    "Haemorrhoid bleeding: on the surface of stool or dripping into toilet pan; bright red; typically painless unless thrombosed",
    "Transfusion trigger: Hb <70 g/L (non-cardiovascular) or <80 g/L (cardiovascular disease)"
  ],
  differentials:[
    "Diverticular disease (painless massive bleed, older patient, known diverticulosis)",
    "Haemorrhoids (on surface of stool/toilet pan; after defaecation; pruritus, prolapse)",
    "Colorectal carcinoma (change in bowel habit, weight loss, mucus, ≥50 y — always exclude)",
    "Inflammatory bowel disease (UC: bloody diarrhoea; Crohn's: less common frank bleed)",
    "Angiodysplasia (older patient, recurrent, caecum/ascending colon, Heyde's syndrome)",
    "Ischaemic colitis (acute post-aortic surgery or low-flow state; LIF pain + rectal bleed)",
    "Infective colitis (acute onset, fever, travel history, stool culture positive)",
    "Radiation proctitis (pelvic radiotherapy — recurrent bleeding, telangiectasia on scope)"
  ],
  mnemonics:[
    {name:"Oakland Score",text:"Age + sex + previous lower GI bleed admission + DRE findings + heart rate + SBP + Hb — score ≤8 = 95% safe for discharge; >8 = needs admission"}
  ],
  overview:{
    definition:"Passage of fresh (bright red or dark red) blood per rectum, typically originating from the lower gastrointestinal tract (distal to the ligament of Treitz).",
    epidemiology:"Incidence: 20–27/100,000/year. Mortality ~4% overall; much higher (15–20%) in elderly with comorbidities. 95% stop spontaneously. Commonest cause: diverticular disease (40%), haemorrhoids (20%), colorectal cancer (10%), IBD (10%).",
    pathophysiology:"Lower GI bleeding results from mucosal erosion, vascular ectasia, diverticular artery rupture, or neoplastic ulceration. Blood remains relatively unaltered (no acid) → fresh red colour. Bright red = anal/rectal source; dark red = sigmoid/right colon or massive upper GI bleed.",
    classification:[
      {label:"Mild (outpatient)",note:"Oakland ≤8; haemodynamically stable; small volume; most haemorrhoids — discharge + outpatient colonoscopy"},
      {label:"Moderate (admission)",note:"Oakland >8; haemodynamically stable; requires colonoscopy within 24–72 h"},
      {label:"Severe (resuscitation needed)",note:"Haemodynamic compromise; active ongoing bleed; CT angiography and possible IR intervention"}
    ]
  },
  diagnosis:{
    history:[
      "Volume: spots (haemorrhoids) vs. clots/toilet bowl full (diverticular)",
      "Colour: bright red (anorectal/distal sigmoid) vs. dark red/plum (right colon or massive upper GI)",
      "Relationship to stool: on the surface (haemorrhoids) vs. mixed in stool (cancer, IBD)",
      "Associated symptoms: pain (fissure, ischaemic colitis, IBD); altered bowel habit, weight loss (cancer); mucus (IBD, cancer)",
      "Dizziness, syncope, haemodynamic compromise (significant blood loss)",
      "Family history: colorectal cancer, IBD, polyposis syndromes"
    ],
    examination:[
      "Haemodynamic assessment: HR, BP, postural hypotension — dictates urgency",
      "Abdominal examination: tenderness (IBD, ischaemia), mass (malignancy)",
      "Perianal inspection: haemorrhoids (grade I–IV), fissure, skin tags, fistula openings",
      "DRE (digital rectal examination): mandatory — blood, mass, hard stool impaction; rectal tenderness",
      "Proctoscopy: haemorrhoids (grade, bleeding), rectal polyp/mass"
    ],
    investigations:[
      {name:"FBC, U&E, LFT, coagulation, G&S",role:"Hb (acute bleed: normal initially; check for chronic anaemia); urea normal or low (lower GI source — unlike UGIB); INR"},
      {name:"Oakland Score",role:"Risk stratification: age, sex, previous LGIB admission, DRE findings, HR, SBP, Hb — guides discharge vs. admission"},
      {name:"Stool cultures",role:"Infective colitis: bloody diarrhoea + fever + travel history — C. diff PCR if recent antibiotics"},
      {name:"Colonoscopy",role:"Gold standard — identifies source, biopsies lesions, therapeutic (clips, APC for diverticular/angiodysplasia); perform after resuscitation"},
      {name:"CT angiography",role:"Active bleeding (≥0.5 mL/min detectable) — identifies 'blush'; guides IR embolisation"},
      {name:"OGD",role:"If colonoscopy negative — exclude upper GI source (massive UGIB can present as bright red PR bleeding)"}
    ]
  },
  criteria:{
    title:"Oakland Score",
    items:[
      {k:"Age <40",v:"0 pts"},
      {k:"Age 40–69",v:"1 pt"},
      {k:"Age ≥70",v:"2 pts"},
      {k:"Sex: female",v:"0 pts"},
      {k:"Sex: male",v:"1 pt"},
      {k:"Previous LGIB admission",v:"1 pt (yes)"},
      {k:"DRE: no blood",v:"0 pts"},
      {k:"DRE: blood present",v:"1 pt"},
      {k:"Heart rate <70",v:"0 pts"},
      {k:"Heart rate 70–89",v:"1 pt"},
      {k:"Heart rate 90–109",v:"2 pts"},
      {k:"Heart rate ≥110",v:"3 pts"},
      {k:"SBP ≥160 mmHg",v:"0 pts"},
      {k:"SBP 130–159",v:"1 pt"},
      {k:"SBP 110–129",v:"2 pts"},
      {k:"SBP 90–109",v:"3 pts"},
      {k:"SBP <90",v:"4 pts"},
      {k:"Hb ≥160 g/L",v:"0 pts"},
      {k:"Hb 130–159",v:"1 pt"},
      {k:"Hb 100–129",v:"2 pts"},
      {k:"Hb 70–99",v:"3 pts"},
      {k:"Hb <70",v:"4 pts"},
      {k:"Score ≤8",v:"Safe discharge — outpatient colonoscopy within 14 days"},
      {k:"Score >8",v:"Admission — inpatient colonoscopy/CT angiography"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Most (95%) resolve spontaneously with supportive care","IV access; fluid resuscitation if haemodynamically compromised","Blood transfusion: Hb <70 g/L (or <80 g/L with cardiovascular disease)","Reverse anticoagulation with haematology guidance","Oakland ≤8: safe to discharge with urgent outpatient colonoscopy"],
    medical:["Infective colitis: appropriate antibiotics (avoid in EHEC/STEC — increases HUS risk)","IBD flare: steroids (UC: IV hydrocortisone 100 mg QDS); biologics in refractory","Radiation proctitis: sucralfate enemas, APC endotherapy, hyperbaric oxygen"],
    surgical:[
      {name:"Colonoscopic haemostasis",when:"Active bleeding lesion identified on colonoscopy",notes:"Adrenaline injection + APC or clips for diverticular; APC for angiodysplasia; band ligation for haemorrhoids"},
      {name:"IR embolisation (mesenteric angiography)",when:"Active bleeding 'blush' on CT angiogram",notes:"Super-selective catheterisation; embolise culprit artery; 80% success; bowel ischaemia risk ~5%"},
      {name:"Emergency surgery",when:"Failed endoscopy + IR; ongoing instability requiring >6 units pRBC",notes:"Segment resection if source localised; subtotal colectomy if source not identified (avoid; high morbidity)"},
      {name:"Haemorrhoid treatment",when:"Grade III/IV haemorrhoids causing significant bleeding",notes:"Rubber band ligation (outpatient — grade I-III); haemorrhoidectomy (grade III-IV or failed banding)"}
    ]
  },
  guidelines:[
    {src:"BSG Acute Lower GI Bleeding Guidelines 2019"},
    {src:"ACPGBI Colorectal Cancer Referral Pathway"},
    {src:"NICE NG12: 2-Week Wait Referral",url:"https://www.nice.org.uk/guidance/ng12"}
  ],
  pearls:[
    "Always exclude colorectal cancer in patients >45 with rectal bleeding — 2-week wait referral if no obvious benign cause",
    "Oakland Score ≤8 = safe discharge; this tool saves unnecessary hospitalisation for low-risk patients",
    "Diverticular bleed: massive, painless, self-limiting — if it stops, colonoscopy when bowel prepared; if ongoing, CT angiogram",
    "Haematochezia with haemodynamic compromise = suspect massive UGIB (>1 L blood) — OGD first, not colonoscopy"
  ],
  mistakes:[
    "Attributing all rectal bleeding to haemorrhoids without colonoscopy in patients >45 — colorectal cancer missed",
    "Performing colonoscopy during active massive bleed — poor views; CT angiogram first then IR",
    "Not reversing anticoagulation before endoscopic intervention — significantly increases procedural bleeding risk"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 7. GORD (GASTRO-OESOPHAGEAL REFLUX DISEASE)
// ─────────────────────────────────────────────────────────────────────
{
  id:"gord", dept:"uppergi", name:"Gastro-Oesophageal Reflux Disease (GORD)", latin:"Morbus refluxus gastro-oesophagealis", organ:"Oesophagus/LOS",
  severity:"low", tags:["GORD","reflux","PPI","fundoplication","Los Angeles","Barrett's","heartburn"],
  hero:"Pathological reflux of gastric contents into the oesophagus; affects ~25% of the population; PPIs are highly effective first-line; Nissen fundoplication reserved for refractory or complicated disease; Barrett's surveillance mandatory.",
  keypoints:[
    "Los Angeles Classification: Grade A–D based on mucosal break extent; Grade C/D = significant oesophagitis",
    "Gold standard investigation: 24-hour ambulatory pH monitoring — quantifies reflux burden; Demeester score >14.72 = pathological",
    "Barrett's oesophagus complicates ~10% at initial endoscopy — 0.5%/year risk of adenocarcinoma; endoscopic surveillance essential",
    "Nissen fundoplication (360° posterior wrap): more effective than long-term PPI for symptom control and quality of life; laparoscopic preferred",
    "Red flags requiring urgent OGD: dysphagia, weight loss, early satiety, age >55 with new symptoms — exclude malignancy",
    "DeMeester score >14.72 on 24 h pH study = pathological reflux (>4.2% of total time pH <4)"
  ],
  differentials:[
    "Oesophageal adenocarcinoma (progressive dysphagia, weight loss, Barrett's background)",
    "Peptic ulcer disease (epigastric pain, worse with hunger/empty stomach, relieved by food)",
    "Achalasia (dysphagia liquids = solids, regurgitation, bird-beak on barium)",
    "Coronary artery disease (exertional, radiation to arm/jaw, ECG changes — always exclude in atypical chest pain)",
    "Eosinophilic oesophagitis (young male, atopy, food impaction, dysphagia)",
    "Functional dyspepsia (normal OGD, no pH evidence of reflux)",
    "Biliary colic (RUQ, post-fatty meal, Murphy's sign)"
  ],
  mnemonics:[
    {name:"Los Angeles Classification",text:"A: breaks ≤5 mm; B: breaks >5 mm; C: breaks between ≥2 folds <75% circumference; D: circumferential ≥75% — C and D = severe; indication for surgery discussion"}
  ],
  overview:{
    definition:"Condition in which reflux of gastric contents into the oesophagus causes troublesome symptoms and/or complications, including oesophagitis, stricture, and Barrett's metaplasia.",
    epidemiology:"Prevalence ~20–25% in Western countries; affects men twice as commonly as women. Incidence of Barrett's-associated adenocarcinoma rising 500% since 1970s. GORD accounts for ~4% of all primary care consultations in the UK.",
    pathophysiology:"Lower oesophageal sphincter (LOS) pressure normally >15 mmHg. In GORD: transient LOS relaxations (tLOSRs) occur more frequently; hiatus hernia disrupts the angle of His; reduced oesophageal acid clearance. Acid (and bile in duodenogastro-oesophageal reflux) causes epithelial injury → oesophagitis → metaplasia (Barrett's) → dysplasia → adenocarcinoma.",
    classification:[
      {label:"Non-erosive GORD (NERD)",note:"Symptoms without oesophagitis on OGD (~60% of GORD); abnormal pH study; good PPI response"},
      {label:"Erosive oesophagitis",note:"LA Grade A–D on OGD; PPI heals most; Grade C/D needs long-term maintenance PPI"},
      {label:"Barrett's oesophagus",note:"Columnar metaplasia ≥1 cm above GOJ; mandates endoscopic surveillance; EET for HGD/early cancer"}
    ]
  },
  diagnosis:{
    history:[
      "Heartburn: retrosternal burning worse after meals, lying flat, bending forward; partially relieved by antacids",
      "Acid regurgitation: bitter/sour taste, water brash (reflex salivation)",
      "Atypical: nocturnal cough, laryngitis, hoarse voice, asthma exacerbations (micro-aspiration)",
      "Precipitants: fatty food, coffee, alcohol, chocolate, smoking, large meals, tight clothing",
      "Red flags: dysphagia, odynophagia, weight loss, early satiety, anaemia — refer urgently"
    ],
    examination:[
      "Usually unremarkable",
      "BMI >30: major risk factor; weight loss target",
      "Signs of anaemia (chronic oesophagitis, Barrett's with erosion)",
      "Abdominal: epigastric tenderness; exclude alternative pathology"
    ],
    investigations:[
      {name:"Trial of PPI (empirical therapy)",role:"4–8 week trial of full-dose PPI (omeprazole 20–40 mg OD) — response supports diagnosis; most patients managed without OGD"},
      {name:"OGD (upper GI endoscopy)",role:"Recommended if: age >55, red flags, PPI failure >4 weeks, family history of GI malignancy; assesses LA grade, Barrett's, malignancy"},
      {name:"24-hour ambulatory pH monitoring",role:"Gold standard; quantifies acid exposure (Demeester score); performed off PPI (at least 7 days); guides surgical candidacy"},
      {name:"Oesophageal manometry (HRM)",role:"Before fundoplication — exclude achalasia/severe dysmotility (relative contraindication to total fundoplication); measure LOS pressure"},
      {name:"Barium swallow",role:"Hiatus hernia size; reflux demonstration; oesophageal transit (not preferred over endoscopy)"}
    ]
  },
  criteria:{
    title:"Los Angeles Classification of Oesophagitis",
    items:[
      {k:"Grade A",v:"One or more mucosal breaks, each ≤5 mm"},
      {k:"Grade B",v:"One or more mucosal breaks, at least one >5 mm, not extending between mucosal folds"},
      {k:"Grade C",v:"Mucosal breaks extending between ≥2 mucosal folds but <75% of circumference"},
      {k:"Grade D",v:"Mucosal breaks involving ≥75% of oesophageal circumference"},
      {k:"Grade C/D",v:"Indication for long-term PPI maintenance; discuss fundoplication; high Barrett's risk"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Weight loss (BMI target <25)","Elevate head of bed 15–20 cm","Avoid: coffee, alcohol, chocolate, fatty foods, smoking, carbonated drinks","Avoid lying flat within 3 hours of eating","Small, frequent meals; loose-fitting clothing"],
    medical:["PPIs first-line: omeprazole 20–40 mg OD; 4–8 week course; 70–80% symptom control","Maintenance PPI at lowest effective dose for recurrent/complicated disease","Alginate (Gaviscon): adjunct for post-prandial reflux; forms raft at GOJ","H2-receptor antagonists: nocturnal reflux; on-demand use; less effective than PPIs","Prokinetics (metoclopramide, domperidone): adjunct for gastroparesis component"],
    surgical:[
      {name:"Laparoscopic Nissen fundoplication (360° posterior wrap)",when:"PPI failure; patient preference (avoid lifelong medication); complicated GORD (Barrett's, stricture); respiratory complications",notes:"Gold standard surgical procedure; mobilise gastric fundus; wrap 360° around distal oesophagus; close crura; hiatus hernia repair concurrent; 85–90% patient satisfaction at 5 years"},
      {name:"Laparoscopic Toupet fundoplication (270° posterior partial wrap)",when:"Significant oesophageal dysmotility (weak peristalsis on manometry)",notes:"Less dysphagia/gas-bloat than Nissen; slightly lower reflux control; preferred in dysmotility"},
      {name:"LINX Magnetic Sphincter Augmentation",when:"PPI-dependent GORD without large hiatus hernia",notes:"Magnetic titanium bead ring placed laparoscopically at GOJ; preserves natural swallowing; reversible; avoid in Barrett's HGD"},
      {name:"Endoscopic therapy (Stretta, TIF)",when:"Mild-moderate GORD; avoid surgery; limited evidence",notes:"Stretta: radiofrequency ablation of LOS; TIF (transoral incisionless fundoplication) — outpatient; inferior to surgical fundoplication long-term"}
    ]
  },
  guidelines:[
    {src:"BSG GORD and Barrett's Oesophagus Guidelines 2021"},
    {src:"NICE NG12: Suspected Cancer (red flags)",url:"https://www.nice.org.uk/guidance/ng12"},
    {src:"SAGES Fundoplication Guidelines 2021"}
  ],
  pearls:[
    "Demeester score >14.72 = pathological reflux on 24-h pH study — objective confirmation before surgery",
    "Always do manometry before fundoplication — undiagnosed achalasia + total Nissen = severe dysphagia",
    "Barrett's oesophagus: surveillance OGD every 2–3 years (no dysplasia); radiofrequency ablation (RFA) for low-grade dysplasia; EET/oesophagectomy for high-grade dysplasia",
    "Nissen fundoplication has higher long-term effectiveness than PPIs — but side effects (dysphagia, gas-bloat) occur in ~10%"
  ],
  mistakes:[
    "Not doing OGD before fundoplication in patients >55 — Barrett's or early cancer may be present",
    "Total Nissen in patient with severe oesophageal dysmotility — causes severe dysphagia and re-operation",
    "Treating Barrett's without surveillance — 0.5%/year adenocarcinoma risk is significant in younger patients"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 8. PSEUDO-OBSTRUCTION (OGILVIE'S SYNDROME)
// ─────────────────────────────────────────────────────────────────────
{
  id:"pseudo-obstruction", dept:"colorectal", name:"Pseudo-Obstruction (Ogilvie's Syndrome)", latin:"Pseudo-obstructio coli acuta", organ:"Colon",
  severity:"high", tags:["Ogilvie","pseudo-obstruction","neostigmine","caecal diameter","colonic dilatation","colonoscopic decompression"],
  hero:"Acute colonic dilatation without mechanical obstruction (Ogilvie's syndrome); treat underlying cause + neostigmine 2 mg IV in HDU monitoring; colonoscopic decompression if neostigmine fails; caecal diameter >12 cm = perforation risk.",
  keypoints:[
    "Caecal diameter >12 cm = high perforation risk; >9 cm + failure to improve = escalate management",
    "Neostigmine 2 mg IV slowly over 3–5 min in HDU: 80–90% response rate; monitor ECG for bradycardia; atropine at bedside",
    "CT abdomen/pelvis (with rectal contrast if available): confirms colonic dilatation, excludes mechanical obstruction, identifies perforation",
    "Colonoscopic decompression: 75–90% success; recurrence 40% (flatus tube/repeated colonoscopy may be needed)",
    "Correct precipitating factors: electrolytes (K+, Mg2+, Ca2+, Na+), medications (opioids, anticholinergics), hypothyroidism",
    "Surgery (Hartmann's or caecostomy) reserved for: perforation, ischaemia, failed all conservative measures"
  ],
  differentials:[
    "Mechanical large bowel obstruction (CT: transition point, distended proximal bowel only; vs. pseudo-obstruction: entire colon dilated)",
    "Toxic megacolon (IBD or C. difficile; fever, tachycardia, leucocytosis, transverse colon >6 cm; emergency colectomy)",
    "Sigmoid volvulus (AXR: coffee bean sign; endoscopic decompression first)",
    "Caecal volvulus (CT: caecum displaced to LUQ; usually needs surgery)",
    "Paralytic ileus (post-surgery, sepsis — both small and large bowel dilated; no specific treatment; resolve spontaneously)"
  ],
  mnemonics:[
    {name:"Causes of Pseudo-obstruction — POEM",text:"Pharmacological (opioids, Ca-channel blockers, antidepressants) + Operative/post-surgical + Electrolyte imbalance (K, Mg, Ca, Na) + Medical illness (trauma, sepsis, cardiac, neurological)"}
  ],
  overview:{
    definition:"Acute massive dilatation of the colon in the absence of a mechanical obstructing lesion; also termed Ogilvie's syndrome after Sir William Heneage Ogilvie who described it in 1948.",
    epidemiology:"Typically affects elderly hospitalised patients; median age 60. Risk: post-operative (especially orthopaedic/cardiac surgery), severe illness, prolonged immobility. Perforation occurs in 3–15% if untreated; mortality with perforation >50%.",
    pathophysiology:"Disruption of autonomic nervous supply to the colon — imbalance between parasympathetic (pro-motility) and sympathetic (inhibitory) drive → colonic smooth muscle fails to contract → progressive dilatation → ischaemia → perforation. Caecum at greatest risk (largest diameter, highest wall tension — law of Laplace).",
    classification:[
      {label:"Mild (caecum <9 cm)",note:"Conservative: mobilise, correct electrolytes, reduce opioids, observe"},
      {label:"Moderate (caecum 9–12 cm)",note:"Neostigmine 2 mg IV if no contraindications; colonoscopic decompression if neostigmine fails"},
      {label:"Severe (caecum >12 cm) or ischaemia/perforation",note:"Urgent surgery — caecostomy or Hartmann's/subtotal colectomy"}
    ]
  },
  diagnosis:{
    history:[
      "Abdominal distension — often dramatic; may be painless initially",
      "Absolute constipation (no flatus or stool)",
      "Nausea and vomiting (late — distal obstruction)",
      "Recent surgery, immobility, ICU admission",
      "Medications: opioids, anticholinergics, antipsychotics, calcium channel blockers",
      "Background: Parkinson's, hypothyroidism, spinal cord injury"
    ],
    examination:[
      "Massively distended abdomen — tympanic on percussion (gas-filled colon)",
      "Absent or reduced bowel sounds",
      "Peritonism (tenderness, rebound, guarding) = ischaemia or perforation — emergency",
      "DRE: empty rectum (not obstructed distally) — helps differentiate from low rectal obstruction",
      "Haemodynamic status: tachycardia/hypotension = sepsis from ischaemia"
    ],
    investigations:[
      {name:"AXR",role:"Massive colonic dilatation (±entire colon); caecal diameter measured; no transition point (unlike mechanical obstruction)"},
      {name:"CT abdomen/pelvis",role:"Confirms diagnosis; excludes mechanical obstruction (no transition point); measures caecal diameter; identifies pneumatosis (ischaemia) or free air (perforation)"},
      {name:"FBC, U&E, Ca2+, Mg2+, TFTs, CRP",role:"Electrolyte correction (K+, Mg2+, Ca2+) is part of treatment; hypothyroid screen; CRP elevated in ischaemia"},
      {name:"Flexible sigmoidoscopy",role:"Uncertain cases; direct visualisation excludes distal obstruction; therapeutic decompression with flatus tube placement"},
      {name:"Water-soluble contrast enema",role:"If CT equivocal — confirms absence of mechanical obstruction; water-soluble only (not barium)"}
    ]
  },
  criteria:{
    title:"Management Thresholds by Caecal Diameter",
    items:[
      {k:"Caecal diameter <9 cm",v:"Conservative: correct triggers, mobilise, reduce opioids, rectal tube"},
      {k:"Caecal diameter 9–12 cm",v:"Neostigmine 2 mg IV (HDU monitoring); colonoscopic decompression if fails"},
      {k:"Caecal diameter >12 cm",v:"High perforation risk — escalate urgently; consider decompression/surgery"},
      {k:"Neostigmine contraindications",v:"HR <60, SBP <90, bowel obstruction, recent MI, severe asthma, peptic ulcer"},
      {k:"Neostigmine response",v:"80–90% response within 30 min; atropine 0.6 mg IV at bedside for bradycardia"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Correct electrolytes (K+, Mg2+, Ca2+) aggressively","Mobilise patient (walking if possible; knee-chest position aids decompression)","Stop precipitating medications (opioids, anticholinergics)","NGT if vomiting; urethral catheter; strict fluid balance","Rectal tube with 3-way tap: decompresses sigmoid/rectum","Regular abdominal girth measurement and AXR every 12–24 h"],
    medical:["Neostigmine 2 mg IV over 3–5 min (anticholinesterase — increases acetylcholine → colonic motility)","Monitoring: continuous ECG; BP every 5 min for 30 min; atropine 0.6 mg IV prepared","Polyethylene glycol laxative (Movicol): maintenance once resolved","Correct hypothyroidism if present (thyroxine replacement)"],
    surgical:[
      {name:"Colonoscopic decompression",when:"Failed neostigmine (≥2 doses); caecum >12 cm with contraindications to neostigmine",notes:"Per-colonoscopic decompression + flatus tube placed to splenic flexure; 75–90% success; recurrence 40% in 24–72 h; may need repeat"},
      {name:"Percutaneous caecostomy",when:"Not fit for surgery or colonoscopy; caecum >12 cm",notes:"Radiological or laparoscopic tube caecostomy; decompresses caecum; good for recurrent cases"},
      {name:"Hartmann's / Subtotal colectomy",when:"Perforation, ischaemia, gangrenous bowel, failed all other measures",notes:"Hartmann's for sigmoid/left colon involvement; subtotal colectomy + end ileostomy if pancolonic ischaemia; high mortality"}
    ]
  },
  guidelines:[
    {src:"ASCRS Pseudo-obstruction Clinical Practice Guidelines 2021"},
    {src:"ESCP/ACPGBI Acute Colorectal Conditions Guidelines"},
    {src:"BSG Acute Colonic Pseudo-obstruction 2020"}
  ],
  pearls:[
    "Distinguish from toxic megacolon: pseudo-obstruction = no fever/leucocytosis + not IBD/C.diff; toxic mega = fever + leucocytosis + IBD/C.diff cause",
    "Neostigmine works in 80% — if it fails, colonoscopic decompression next; surgery for perforation/ischaemia only",
    "Atropine must be at bedside before neostigmine — bradycardia occurs in ~10% (usually transient)",
    "Law of Laplace: tension = pressure × radius → caecum (widest) is at greatest risk of ischaemia and perforation"
  ],
  mistakes:[
    "Giving neostigmine without HDU monitoring or atropine ready — risk of severe bradycardia/bronchospasm",
    "Operating for pseudo-obstruction without CT scan — surgical bowel prep and mechanical obstruction exclusion mandatory",
    "Not correcting electrolytes before neostigmine — hypokalaemia or hypomagnesaemia reduces colonic response"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 9. ANGIODYSPLASIA
// ─────────────────────────────────────────────────────────────────────
{
  id:"angiodysplasia", dept:"colorectal", name:"Angiodysplasia", latin:"Angiodysplasia gastrointestinalis", organ:"GI tract (caecum/ascending colon)",
  severity:"medium", tags:["angiodysplasia","AVM","argon plasma coagulation","capsule endoscopy","Heyde syndrome","occult GI bleed"],
  hero:"Most common GI vascular malformation; responsible for ~6% of lower GI bleeds and ~8% of upper GI bleeds; most common location = caecum and ascending colon; APC endotherapy is first-line treatment.",
  keypoints:[
    "Heyde's syndrome: aortic stenosis + angiodysplasia → GI bleeding; von Willebrand multimers destroyed by turbulent flow across stenotic valve → haemostatic failure",
    "Majority present with occult bleeding (iron-deficiency anaemia); only 10–15% present with acute haematochezia",
    "Argon plasma coagulation (APC): first-line endoscopic treatment — 'safe and cost-effective'; non-contact thermal coagulation",
    "Capsule endoscopy: gold standard for small bowel angiodysplasia — identifies lesions missed by OGD and colonoscopy",
    "Re-bleeding after APC is common (30–40%) — expectant management for recurrence; consider repeat APC",
    "Octreotide: useful in recurrent bleeding not amenable to endoscopy (reduces splanchnic blood flow)"
  ],
  differentials:[
    "Diverticular disease (painless massive bleed in elderly; right-sided diverticula can cause major haemorrhage)",
    "Colorectal cancer (change in bowel habit, weight loss, iron-deficiency anaemia)",
    "IBD (UC: bloody diarrhoea; Crohn's: less commonly frank bleed)",
    "Haemorrhoids (anorectal; on surface of stool; proctoscopy confirms)",
    "Ischaemic colitis (sudden LIF pain + PR blood; after cardiac surgery or low-flow state)",
    "GAVE (gastric antral vascular ectasia — 'watermelon stomach'; upper GI source; APC treatment)",
    "Portal hypertensive gastropathy/colopathy (liver disease; diffuse mucosal changes)"
  ],
  mnemonics:[
    {name:"Heyde Syndrome",text:"Aortic Stenosis → shear stress destroys vWF multimers → acquired vWD type 2A → angiodysplasia bleeds → GI haemorrhage — treat AS (TAVR/AVR) to resolve bleeding"}
  ],
  overview:{
    definition:"Acquired vascular ectasias consisting of abnormal, thin-walled, tortuous submucosal and mucosal vessels that are prone to bleeding; the most common vascular abnormality of the GI tract.",
    epidemiology:"Prevalence 1–2% in general population; increases with age. Responsible for 6% of lower GI bleeds, 8% of upper GI bleeds. Most lesions are <5 mm; often multiple. Most common in caecum/ascending colon (80%).",
    pathophysiology:"Chronic colonic wall contraction → increased intraluminal pressure → submucosal venous drainage impaired → dilated submucosal veins → precapillary sphincter incompetence → small AVMs. Congenital form: hereditary haemorrhagic telangiectasia (HHT/Rendu-Osler-Weber syndrome) — multiple mucocutaneous telangiectasias, epistaxis, family history.",
    classification:[
      {label:"Acquired (idiopathic)",note:"Most common; elderly; caecum/right colon; associated with AS, CKD, vWD"},
      {label:"Hereditary (HHT)",note:"Autosomal dominant; ENG or ACVRL1 gene; multiple telangiectasias in GI, skin, lungs, brain"},
      {label:"GAVE (gastric antral vascular ectasia)",note:"Separate entity; 'watermelon stomach' appearance; portal hypertension or autoimmune; APC treatment"}
    ]
  },
  diagnosis:{
    history:[
      "Occult GI bleed: iron-deficiency anaemia, fatigue, exertional dyspnoea — no visible bleeding",
      "Intermittent haematochezia (10–15%) — typically self-limiting, recurrent",
      "Haematemesis or melena if upper GI/small bowel location",
      "Background: age >60, aortic stenosis (Heyde's), CKD, cirrhosis, anticoagulation",
      "HHT: epistaxis, telangiectasias on lips/tongue/fingers, family history of GI bleeding"
    ],
    examination:[
      "Pallor, tachycardia, systolic murmur (aortic stenosis — Heyde's)",
      "Telangiectasias on lips, tongue, fingers, face (HHT)",
      "Haemodynamic stability assessment (most are stable)",
      "Abdominal examination usually unremarkable"
    ],
    investigations:[
      {name:"FBC, iron studies, reticulocytes",role:"Iron-deficiency anaemia (low Hb, MCV, ferritin; raised TIBC); active bleed: normal Hb initially"},
      {name:"Colonoscopy",role:"First-line for colonic angiodysplasia — visualises lesions (cherry-red flat vascular tufts); biopsy not required; APC therapeutic"},
      {name:"OGD (upper GI endoscopy)",role:"Upper GI location; also identifies GAVE; exclude PUD/malignancy as co-existing cause"},
      {name:"Capsule endoscopy",role:"Gold standard for small bowel lesions; detects in 50–70% of obscure GI bleed after negative OGD + colonoscopy; non-therapeutic"},
      {name:"CT angiography",role:"Active bleeding ≥0.5 mL/min; identifies 'blush'; guides IR embolisation"},
      {name:"Mesenteric angiography",role:"Identifies vascular tuft; super-selective embolisation if CT confirms active bleed"}
    ]
  },
  criteria:{
    title:"Endoscopic Appearance and Treatment",
    items:[
      {k:"Cherry-red flat vascular tufts",v:"Classic angiodysplasia appearance on colonoscopy/OGD — spider-like or flat, ≤5 mm"},
      {k:"APC (argon plasma coagulation)",v:"First-line endoscopic treatment; non-contact; 85% initial haemostasis; 30–40% re-bleed rate"},
      {k:"Capsule endoscopy indication",v:"Obscure GI bleed after negative OGD + colonoscopy — detects small bowel angiodysplasia in 50–70%"},
      {k:"Heyde's syndrome treatment",v:"Aortic valve replacement (surgical AVR or TAVR) resolves GI bleeding in 90% by restoring vWF multimers"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Iron replacement (IV or oral) for iron-deficiency anaemia","Monitor Hb; most acute bleeds self-terminate","Stable, low-risk patients: outpatient investigation after resuscitation","Optimise anticoagulation/antiplatelet management with haematology"],
    medical:["Octreotide (somatostatin analogue): reduces splanchnic blood flow; effective in HHT and recurrent bleed not amenable to endoscopy","Thalidomide/bevacizumab: anti-angiogenic; emerging evidence in refractory HHT-related GI angiodysplasia","Oestrogen-progesterone therapy: historical; limited evidence; not routinely recommended"],
    surgical:[
      {name:"Endoscopic APC (argon plasma coagulation)",when:"Active bleeding or identified lesion on colonoscopy/OGD/enteroscopy",notes:"Non-contact thermal therapy; argon gas + electrical current coagulates vessels; 85% initial haemostasis; outpatient or inpatient; repeat for recurrence"},
      {name:"Balloon-assisted enteroscopy + APC",when:"Small bowel angiodysplasia identified on capsule endoscopy",notes:"Single or double-balloon enteroscopy allows therapeutic access to small bowel; APC or clips"},
      {name:"IR embolisation",when:"Active bleed with angiographic 'blush'; failed endoscopy",notes:"Super-selective catheterisation; coil or particle embolisation; bowel ischaemia risk ~5%"},
      {name:"Surgical resection",when:"Recurrent large-volume bleed; multiple lesions; failed endoscopy and IR",notes:"Right hemicolectomy for caecal/ascending colon lesions; segmental resection if localised; intra-operative enteroscopy to localise small bowel lesions"}
    ]
  },
  guidelines:[
    {src:"BSG Obscure Gastrointestinal Bleeding Guidelines 2021"},
    {src:"ESGE Small Bowel Endoscopy Guidelines 2020"},
    {src:"ACG Lower GI Bleeding Guidelines 2023"}
  ],
  pearls:[
    "Always consider Heyde's syndrome in elderly patients with aortic stenosis and recurrent GI bleed — AVR/TAVR stops the bleeding",
    "Capsule endoscopy is the most effective investigation for small bowel angiodysplasia — use after negative OGD + colonoscopy",
    "APC is safe, effective, and repeatable — most patients require multiple treatment sessions",
    "Iron-deficiency anaemia in an elderly patient without obvious cause = obscure GI bleed workup (capsule endoscopy)"
  ],
  mistakes:[
    "Not investigating elderly patients with unexplained iron-deficiency anaemia — occult angiodysplasia is a treatable cause",
    "Performing surgical resection without intra-operative enteroscopy — missing additional small bowel lesions leads to re-operation",
    "Not addressing Heyde's syndrome — GI bleeding persists until aortic valve is replaced"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 10. SMALL BOWEL TUMOURS
// ─────────────────────────────────────────────────────────────────────
{
  id:"small-bowel-tumours", dept:"colorectal", name:"Small Bowel Tumours", latin:"Neoplasma intestini tenuis", organ:"Small bowel",
  severity:"medium", tags:["small bowel tumour","adenocarcinoma","GIST","Whipple","duodenum","imatinib","small bowel obstruction"],
  hero:"Rare tumours accounting for <5% of GI cancers despite representing 90% of mucosal surface; most arise in the duodenum; adenocarcinoma and NETs each account for ~40%; Whipple's for resectable duodenal adenocarcinoma; imatinib for GIST.",
  keypoints:[
    "Small bowel tumours are rare but diagnosis is often delayed — 'great masquerader' of GI disease; mean symptom-to-diagnosis delay 6–12 months",
    "Adenocarcinoma most common in duodenum (55–80% of small bowel adenocarcinomas); GIST and NET more common in jejunum/ileum",
    "p53 and KRAS mutations involved in >50% of small bowel adenocarcinomas — same pathway as colorectal cancer",
    "Risk factors: Crohn's disease (150× increased risk), coeliac disease, FAP (duodenal adenoma), Lynch syndrome, Peutz-Jeghers syndrome",
    "Whipple's (pancreaticoduodenectomy) for resectable periampullary/duodenal adenocarcinoma; segmental resection for jejunoileal",
    "GIST: imatinib (tyrosine kinase inhibitor targeting c-KIT) — neoadjuvant to downsize or adjuvant for high-risk lesions"
  ],
  differentials:[
    "Crohn's disease stricture (IBD history, skip lesions, transmural inflammation — may co-exist with adenocarcinoma)",
    "Adhesional small bowel obstruction (prior surgery, CT shows transition point at adhesion site)",
    "External hernia causing obstruction (check hernial orifices)",
    "Meckel's diverticulum (heterotopic gastric mucosa, intussusception lead point in children)",
    "Carcinoid / NET (flush, diarrhoea, elevated 5-HIAA, serotonin — appendix most common site)",
    "Lymphoma (often jejunoileal; constitutional symptoms; CT shows bulky mesenteric lymphadenopathy)",
    "Duodenal ulcer (PUD history; PPIs; Helicobacter pylori positive)"
  ],
  mnemonics:[
    {name:"Small Bowel Tumour Types — GALS",text:"GIST + Adenocarcinoma + Lymphoma + NET (carcinoid) + Sarcoma — adenocarcinoma and NETs each 40%; GIST 10–15%; lymphoma 10%"}
  ],
  overview:{
    definition:"Primary neoplasms arising from the small intestinal mucosa, submucosa, or wall; includes adenocarcinoma, gastrointestinal stromal tumours (GIST), neuroendocrine tumours (NET), lymphoma, and sarcoma.",
    epidemiology:"UK incidence 2–3/100,000/year; <5% of GI cancers. Despite representing >90% of mucosal surface and 75% of GI length. Most common site: duodenum (55–80%). Mean age at diagnosis: 66 years. 35% present with metastatic disease.",
    pathophysiology:"Adenocarcinoma: adenoma-carcinoma sequence (similar to colorectal) involving APC, KRAS, p53. GIST: activating mutations in c-KIT (80%) or PDGFRA (10%) → uncontrolled receptor tyrosine kinase signalling. NET: arise from enterochromaffin cells → serotonin production → carcinoid syndrome if hepatic metastases present. Lymphoma: mostly MALT-type; associated with coeliac disease (EATL).",
    classification:[
      {label:"Adenocarcinoma (~40%)",note:"Duodenum most common; Whipple's if resectable; poor prognosis (5-year survival 20–30%)"},
      {label:"NET / Carcinoid (~40%)",note:"Ileum most common for functioning NETs; somatostatin analogues; resect if localised"},
      {label:"GIST (~10–15%)",note:"CD117/c-KIT positive; imatinib neoadjuvant/adjuvant; surgical resection first-line"},
      {label:"Lymphoma (~10%)",note:"Usually jejunoileal; chemotherapy ± surgery for obstruction/perforation"}
    ]
  },
  diagnosis:{
    history:[
      "Vague, non-specific abdominal pain — often delayed diagnosis",
      "Intermittent partial small bowel obstruction: colicky pain, distension, vomiting, resolution",
      "GI bleeding: haematochezia, melena, or iron-deficiency anaemia",
      "Weight loss, anorexia, cachexia (advanced disease)",
      "Jaundice (periampullary/duodenal tumour obstructing CBD)",
      "Carcinoid syndrome: flushing, diarrhoea, wheeze, right heart disease (only with hepatic metastases)",
      "Background: Crohn's disease, coeliac disease, FAP, Lynch syndrome"
    ],
    examination:[
      "Palpable abdominal mass (25% of cases at presentation)",
      "Signs of intestinal obstruction: distension, tinkling bowel sounds",
      "Jaundice + palpable gallbladder (Courvoisier's — periampullary tumour)",
      "Hepatomegaly (metastatic disease)",
      "Cachexia, peripheral lymphadenopathy (lymphoma)"
    ],
    investigations:[
      {name:"OGD (upper GI endoscopy)",role:"Duodenal tumours — direct visualisation, biopsy; periampullary assessment; EUS for depth/nodal staging"},
      {name:"CT chest/abdomen/pelvis with IV contrast",role:"Primary tumour, local invasion, mesenteric nodes, hepatic metastases, peritoneal disease — TNM staging"},
      {name:"MRI enterography / CT enterography",role:"Mucosal detail of entire small bowel; best for Crohn's vs. tumour differentiation; jejunal/ileal lesions"},
      {name:"Capsule endoscopy",role:"Occult GI bleed + negative OGD/colonoscopy — detects small mucosal lesions; contraindicated if obstruction risk"},
      {name:"Balloon-assisted enteroscopy",role:"Direct visualisation and biopsy of jejunoileal lesions; therapeutic (stenting, haemostasis)"},
      {name:"Serum 5-HIAA, chromogranin A, gut hormones",role:"NETs: 24-h urinary 5-HIAA (serotonin metabolite); CgA elevated; specific hormone assay for functional tumours"},
      {name:"PET-CT (Ga-68 DOTATATE)",role:"NET staging: most sensitive for NET with somatostatin receptors; guides PRRT eligibility"},
      {name:"CD117 (c-KIT) immunohistochemistry",role:"GIST diagnosis: >95% CD117 positive; CD34 positive in 60–70%"}
    ]
  },
  criteria:{
    title:"TNM Staging (Small Bowel Adenocarcinoma)",
    items:[
      {k:"T1",v:"Invades lamina propria or submucosa"},
      {k:"T2",v:"Invades muscularis propria"},
      {k:"T3",v:"Invades subserosa/mesentery/retroperitoneum ≤2 cm"},
      {k:"T4",v:"Perforates peritoneum or invades other organs"},
      {k:"N0",v:"No regional nodes"},
      {k:"N1",v:"1–2 positive nodes"},
      {k:"N2",v:"≥3 positive nodes"},
      {k:"5-year survival T1N0",v:"~70%; T4N2 ~5–10%"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Nutritional support: nutritional optimisation pre-operatively (oral supplements, NJ feeding if obstructed)","Symptom management in palliative setting: octreotide for carcinoid syndrome/bowel obstruction","Stent: duodenal self-expanding stent for unresectable duodenal/periampullary obstruction"],
    medical:["Adjuvant chemotherapy: node-positive adenocarcinoma — FOLFOX or CAPOX (extrapolated from colorectal data)","Imatinib (Glivec): GIST — adjuvant for high-risk (>5 cm, >5 mitoses/50 HPF, rupture); neoadjuvant to downsize borderline-resectable GIST","Somatostatin analogues (octreotide/lanreotide): NETs — symptom control and anti-proliferative; monthly depot injection","Chemotherapy for lymphoma: CHOP-based regimens; surgery for obstruction/perforation only","Pembrolizumab: mismatch repair-deficient small bowel adenocarcinoma — high response rates"],
    surgical:[
      {name:"Segmental small bowel resection",when:"Jejunoileal adenocarcinoma, GIST, localised NET",notes:"5–10 cm margins; mesenteric node clearance; primary anastomosis; laparoscopic if feasible"},
      {name:"Pancreaticoduodenectomy (Whipple's)",when:"Resectable duodenal or periampullary adenocarcinoma",notes:"Removes duodenum + head of pancreas + distal stomach + gallbladder + CBD; reconstruction: hepaticojejunostomy + pancreaticojejunostomy + gastrojejunostomy; pancreatic fistula is most serious complication"},
      {name:"Endoscopic mucosal/submucosal resection (EMR/ESD)",when:"Small (<2 cm), superficial duodenal adenoma or early T1 adenocarcinoma",notes:"Endoscopic resection via OGD; close endoscopic surveillance after; avoid if submucosal invasion"},
      {name:"Right hemicolectomy (for terminal ileum NET)",when:"Terminal ileal carcinoid/NET with mesenteric nodal involvement",notes:"Includes right colon + terminal ileum + mesenteric nodes; primary anastomosis"},
      {name:"Cytoreductive surgery + hepatic resection",when:"NET with liver metastases — debulking if ≥90% tumour burden can be removed",notes:"Improves carcinoid syndrome; hormonal control; combined with PRRT in selected cases"}
    ]
  },
  guidelines:[
    {src:"ENETS Consensus Guidelines for Small Bowel NETs 2021",url:"https://www.enets.org/guidelines.html"},
    {src:"ESMO Small Bowel Cancer Guidelines 2023",url:"https://www.esmo.org/guidelines"},
    {src:"NICE NG151: Colorectal Cancer Surveillance",url:"https://www.nice.org.uk/guidance/ng151"},
    {src:"NCCN Small Bowel Adenocarcinoma Guidelines 2023"}
  ],
  pearls:[
    "Crohn's disease increases small bowel adenocarcinoma risk 150-fold — any change in pain pattern, obstruction, or new mass in Crohn's patient warrants urgent imaging",
    "GIST: always check c-KIT/PDGFRA mutational status — PDGFRA D842V mutation is imatinib-resistant (use avapritinib)",
    "Carcinoid syndrome only develops with hepatic metastases (bypasses hepatic serotonin metabolism)",
    "FAP patients need 3-yearly duodenoscopy — Spigelman stage IV duodenal polyposis = prophylactic Whipple's indicated"
  ],
  mistakes:[
    "Performing capsule endoscopy in a patient with obstructive small bowel symptoms — capsule can impact at the stenosis",
    "Not biopsying duodenal lesions on OGD — visual appearance is unreliable; histology mandatory",
    "Imatinib resistance assumed to be primary failure — check for c-KIT exon 9 mutation (requires higher dose 800 mg/day) or PDGFRA D842V (avapritinib)"
  ]
}

]; // end window._TMP_TMS
