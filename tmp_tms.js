// TeachMeSurgery reference additions — 10 new entries
// Covers: Presentations (acute-abdomen, dysphagia, goo, bowel-perforation, melena, rectal-bleeding)
//         Esophageal (gord), Colorectal (pseudo-obstruction, angiodysplasia, small-bowel-tumors)
window._TMP_TMS = [

// ─────────────────────────────────────────────────────────────────────
// 1. ACUTE ABDOMEN
// ─────────────────────────────────────────────────────────────────────
{
  id:"acute-abdomen", dept:"uppergi", name:"Acute Abdomen", latin:"Abdomen acutum", organ:"Abdomen",
  severity:"high", tags:["acute abdomen","peritonitis","laparotomy","ABG","lactate","erect CXR"],
  hero:"Sudden severe abdominal pain requiring urgent assessment; first question is 'is the patient critically unwell?'; life-threatening causes include ruptured AAA, perforated viscus, and mesenteric ischemia.",
  keypoints:[
    "First-pass assessment: critically unwell (immediate resuscitation + theater) vs. needs investigation — this single decision drives everything",
    "Ruptured AAA: tachycardia + hypotension ± pulsatile mass — activate major hemorrhage protocol, straight to CT/theater",
    "Mesenteric ischemia: 'pain out of proportion to clinical signs' — classic teaching; normal exam does NOT exclude ischemia; CT angiogram urgently",
    "Perforated viscus: rigid abdomen + peritonism; erect CXR (subdiaphragmatic free air); CT chest/abdomen with IV contrast is gold standard",
    "Bloods: CBC, electrolytes/BUN-Cr, LFT, CRP, amylase/lipase, ABG with lactate, G&S; elevated lactate + metabolic acidosis = ischemia until proven otherwise",
    "ECG in all — posterior MI can mimic acute abdomen; also pre-operative baseline"
  ],
  differentials:[
    "Ruptured AAA (pulsatile mass, hemodynamic compromise)",
    "Perforated peptic ulcer (sudden onset, board-like abdomen)",
    "Mesenteric ischemia (AF, pain out of proportion, raised lactate)",
    "Acute pancreatitis (epigastric radiating to back, raised lipase/amylase)",
    "Ruptured ectopic pregnancy (reproductive-age women, LIF pain, hemodynamic instability)",
    "Acute appendicitis (periumbilical pain migrating to RIF, Rovsing's sign)",
    "Biliary colic (RUQ, colicky, Murphy's, post-fatty meal)",
    "Ureteric colic (loin to groin, hematuria, renal angle tenderness)",
    "Strangulated hernia (obstructed hernia + systemic sepsis)",
    "DKA / Addisonian crisis (medical mimic — always check glucose and cortisol if no clear surgical cause)"
  ],
  mnemonics:[
    {name:"SOCRATES",text:"Site, Onset, Character, Radiation, Associated symptoms, Time/duration, Exacerbating/relieving factors, Severity — structured pain history for every acute abdomen"},
    {name:"Abdominal quadrants",text:"RUQ: liver/GB/duodenum. LUQ: spleen/stomach/pancreas. RIF: appendix/cecum/right ovary. LIF: sigmoid/left ovary. Epigastric: stomach/aorta/pancreas. Periumbilical: small bowel/AAA"}
  ],
  overview:{
    definition:"A clinical syndrome of sudden-onset severe abdominal pain requiring urgent assessment to identify conditions needing immediate intervention vs. those requiring further investigation.",
    epidemiology:"Accounts for ~50% of emergency surgical admissions. Most common causes: appendicitis, biliary disease, bowel obstruction, pancreatitis, and hernias in the Western world.",
    pathophysiology:"Pain arises from: (1) visceral peritoneum — poorly localized, colicky, midline (hollow viscus distension/ischemia); (2) parietal peritoneum — well-localized, sharp, worse with movement (peritonitis, perforation); (3) referred pain — cardiac, pulmonary, renal.",
    classification:[
      {label:"Critically unwell — immediate intervention",note:"Ruptured AAA, ruptured ectopic pregnancy, perforated viscus with septic shock, massive hemorrhage → A-E resuscitation; theater without delay"},
      {label:"Urgent — needs investigation first",note:"Acute appendicitis, biliary sepsis, small bowel obstruction, mesenteric ischemia → stabilize, image, then decide"},
      {label:"Semi-urgent — admitted for observation",note:"Uncomplicated diverticulitis, biliary colic, renal colic, early SBO → blood tests, imaging, analgesia, serial examination"}
    ]
  },
  diagnosis:{
    history:[
      "Onset: sudden ('like a knife') = perforation/ruptured vessel; gradual = inflammatory",
      "Character: colicky (biliary, ureteric, bowel obstruction) vs. constant (peritonitis, ischemia)",
      "Radiation: RUQ to right shoulder tip (biliary); epigastric to back (pancreatic); loin to groin (ureteric)",
      "Associated: vomiting, fever, absolute constipation (obstruction), hematemesis, melena, PR bleed",
      "PMH: previous abdominal surgery (adhesions), AF (mesenteric), AAA, PUD, IBD",
      "Medications: NSAIDs (PUD), anticoagulants, steroids (mask peritonism)"
    ],
    examination:[
      "End-of-bed assessment: pale/clammy = hemorrhage; flushed/sweaty = sepsis",
      "Vital signs: HR, BP, RR, SpO2, temperature — hemodynamic compromise = immediate priority",
      "Inspection: distension (obstruction), guarding, visible peristalsis, scars, hernias",
      "Palpation: site of maximal tenderness; rebound (peritonitis); Murphy's (cholecystitis); Rovsing's (appendicitis); pulsatile mass (AAA)",
      "Percussion: dullness (ascites, mass); loss of hepatic dullness (free air)",
      "Auscultation: tinkling bowel sounds (obstruction); absent (ileus/peritonitis)",
      "DRE: mandatory — tenderness (appendicitis, pelvic sepsis); blood (ischemia, cancer); masses"
    ],
    investigations:[
      {name:"ABG with lactate",role:"Immediate: pH, pO2, HCO3-, lactate; lactate >2 = tissue ischemia; rapid hemoglobin"},
      {name:"Urine dipstick ± bHCG",role:"Nitrites/leukocytes (UTI); hematuria (ureteric stone); bHCG all reproductive-age women"},
      {name:"CBC, electrolytes/BUN-Cr, LFT, CRP, lipase/amylase, G&S",role:"Baseline; cross-match if theater anticipated; raised lipase: pancreatitis; raised bilirubin: biliary"},
      {name:"ECG",role:"Exclude posterior MI (referred epigastric pain); pre-operative baseline"},
      {name:"Erect CXR",role:"Free intra-abdominal air (perforation); lower lobe collapse/effusion; pneumonia"},
      {name:"USS abdomen",role:"First-line for RUQ (gallstones, CBD dilation, Murphy's USS); AAA screening; renal tract"},
      {name:"CT abdomen/pelvis (IV contrast)",role:"Gold standard for most acute surgical pathology; confirms perforation, obstruction, ischemia, AAA; CT angiogram for vascular"}
    ]
  },
  criteria:{
    title:"Causes by Urgency",
    items:[
      {k:"Immediate theater",v:"Ruptured AAA, ruptured ectopic, perforated viscus (unstable), type III mesenteric ischemia"},
      {k:"Urgent (<6 h)",v:"Strangulated hernia, volvulus with ischemia, gangrenous bowel, Boerhaave"},
      {k:"Semi-urgent (<24 h)",v:"Appendicitis, cholecystitis (complicated), biliary sepsis, ischemic colitis"},
      {k:"Admit and observe",v:"Uncomplicated diverticulitis, early SBO (trial conservative), biliary colic, renal colic"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV access (two large-bore); aggressive IV fluid resuscitation","Analgesia (do NOT withhold — does not mask diagnosis; IV morphine + antiemetic)","NBM; NG tube if obstruction/vomiting","Urine output monitoring (IDC); strict fluid balance","Serial abdominal examination — clinical deterioration mandates CT ± theater"],
    medical:["IV broad-spectrum antibiotics if peritonitis, sepsis, or perforation suspected (pip-tazo or cefuroxime + metronidazole)","VTE prophylaxis once surgical plan made","PPI if GI bleed suspected","Correct coagulopathy before theater if feasible"],
    surgical:[
      {name:"Emergency laparotomy",when:"Ruptured AAA, perforated viscus (unstable), mesenteric infarction, ruptured ectopic",notes:"Midline laparotomy; damage control principle if hemodynamically unstable; source control + washout"},
      {name:"Laparoscopy",when:"Stable patients: appendicitis, perforated PUD (contained), diagnostic uncertainty in young women",notes:"Laparoscopic appendectomy; laparoscopic washout ± Graham patch PUD; convert if necessary"},
      {name:"IR intervention",when:"GI hemorrhage (variceal, diverticular, angiodysplasia); contained aortic rupture",notes:"Embolization, TIPS, endovascular stent-graft; multidisciplinary decision"}
    ]
  },
  technique:{
    title:"Diagnostic Laparoscopy for the Equivocal Acute Abdomen",
    prep:[
      "Only in the hemodynamically stable patient — instability mandates a laparotomy, not laparoscopy",
      "GA; decompress the stomach (NG) and bladder (catheter) to reduce entry-injury risk",
      "Supine, able to tilt the table; consent for proceeding to a therapeutic procedure or conversion to open"
    ],
    steps:[
      {n:1,t:"Establish pneumoperitoneum",d:"Open (Hasson) umbilical entry is safest, especially after previous surgery; insufflate CO2 to 12–15 mmHg"},
      {n:2,t:"Camera port and initial survey",d:"Inspect the entry site for injury; take a panoramic look at all four quadrants before adding working ports"},
      {n:3,t:"Working ports under vision",d:"Site additional ports directly, aimed toward the suspected pathology"},
      {n:4,t:"Systematic inspection",d:"Liver, gallbladder, stomach, the whole small bowel from DJ flexure to cecum, colon, appendix, pelvis and adnexa; note free fluid, pus or blood"},
      {n:5,t:"Sample",d:"Aspirate and send fluid for microscopy/culture; peritoneal washings for cytology if malignancy is suspected; biopsy suspicious deposits"},
      {n:6,t:"Treat or convert",d:"Proceed to definitive treatment if feasible (e.g. appendectomy, perforation repair) or convert to open if unsafe or beyond laparoscopic control"}
    ],
    pearls:[
      "In reproductive-age women it reliably separates appendicitis from ovarian/tubal pathology — always inspect the adnexa",
      "Run the entire small bowel so a second pathology is not missed",
      "Converting to open is sound surgical judgement, not a failure"
    ]
  },
  guidelines:[
    {src:"WSES Guidelines on Acute Abdomen 2020",url:"https://wjes.biomedcentral.com/"},
    {src:"NICE CG134: Acute Abdominal Pain"},
    {src:"RCS England Emergency Surgery Standards 2021"}
  ],
  pearls:[
    "Never withhold analgesia — IV morphine titrated does not mask diagnosis and improves patient cooperation",
    "Lactate >4 mmol/L + peritonitis = theater without delay; don't wait for CT",
    "Elderly patients and those on steroids may have blunted peritonism — a soft abdomen does NOT exclude perforation",
    "Mesenteric ischemia: if you think of it and CT shows no other cause, take to theater — delay is lethal"
  ],
  mistakes:[
    "Delaying analgesia 'to avoid masking the diagnosis' — evidence shows morphine does NOT impair clinical assessment",
    "Not doing bHCG in reproductive-age women — missed ectopic is a leading cause of maternal death",
    "Missing posterior MI — ECG is mandatory in all acute abdomens",
    "Normal lactate does NOT exclude mesenteric ischemia (normal in ~25% early on)"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 2. DYSPHAGIA
// ─────────────────────────────────────────────────────────────────────
{
  id:"dysphagia", dept:"uppergi", name:"Dysphagia", latin:"Dysphagia", organ:"Esophagus/Pharynx",
  severity:"medium", tags:["dysphagia","EGD","esophageal cancer","achalasia","manometry","Plummer-Vinson"],
  hero:"Difficulty swallowing — treat as upper GI malignancy until proven otherwise; EGD is the first investigation; progressive solid-then-liquid dysphagia = mechanical obstruction; pure liquid dysphagia = motility disorder.",
  keypoints:[
    "Treat as upper GI malignancy until proven otherwise — any new dysphagia needs urgent EGD",
    "Solids only → progressive to liquids: mechanical obstruction (cancer, stricture, Schatzki ring)",
    "Liquids = solids, or liquids worse: motility disorder (achalasia, DES, neurological)",
    "Oropharyngeal dysphagia (difficulty initiating swallow, coughing, nasal regurgitation): neurological cause — involve SALT and neurology",
    "Plummer-Vinson (Patterson-Kelly-Brown) syndrome: iron-deficiency anemia + post-cricoid web + koilonychia — risk factor for post-cricoid cancer",
    "Pharyngeal pouch (Zenker's diverticulum): regurgitation of undigested food, halitosis, gurgling neck mass"
  ],
  differentials:[
    "Esophageal carcinoma (progressive solids → liquids, weight loss, >50 y)",
    "Achalasia (failure of LOS relaxation, bird-beak on barium swallow)",
    "Benign peptic stricture (long-standing GERD history)",
    "Pharyngeal pouch / Zenker's diverticulum (regurgitation, gurgling)",
    "Esophageal web / Schatzki ring (intermittent solid dysphagia)",
    "Extrinsic compression: thyroid goitre, mediastinal mass, lung cancer, vascular ring",
    "Eosinophilic esophagitis (young men, atopy, food impaction)",
    "Diffuse esophageal spasm (chest pain + dysphagia, corkscrew esophagus)",
    "CVA / neurological (bulbar palsy, MS, MND, Parkinson's — liquids worse than solids)"
  ],
  mnemonics:[
    {name:"Causes of Dysphagia — IN THE WALL",text:"Intraluminal (foreign body, food bolus impaction) → IN the wall (tumor, stricture, achalasia, web) → Outside the wall (goitre, mediastinal mass, vascular anomaly)"}
  ],
  overview:{
    definition:"Difficulty in swallowing resulting from abnormal transit of liquids or solids during the oropharyngeal or esophageal phases of swallowing.",
    epidemiology:"Affects ~8% of the general population; increases with age (25–40% of elderly). Most common cause in elderly: oropharyngeal dysphagia from neurological disease.",
    pathophysiology:"Normal swallowing: oropharyngeal phase (voluntary, <1 s) → esophageal phase (involuntary peristalsis). Dysphagia arises from: (1) luminal obstruction (mechanical); (2) wall disease (motility, inflammation); (3) extrinsic compression; (4) neurological failure of the oropharyngeal phase.",
    classification:[
      {label:"Oropharyngeal",note:"Difficulty initiating swallow; coughing, choking, nasal regurgitation; neurological cause; SALT referral"},
      {label:"Esophageal — mechanical",note:"Progressive solids then liquids; cancer, stricture, web, Schatzki ring; EGD urgent"},
      {label:"Esophageal — motility",note:"Liquids = solids (often liquids worse); achalasia, DES, scleroderma; manometry diagnostic"}
    ]
  },
  diagnosis:{
    history:[
      "Duration and progression — acute (foreign body, food impaction) vs. progressive (cancer, achalasia)",
      "Solids only, liquids only, or both — key discriminator (see above)",
      "Level of hold-up: throat vs. retrosternal vs. epigastric",
      "Associated: weight loss, odynophagia (pain on swallowing), hoarse voice, cough, regurgitation, reflux",
      "Referred ear/neck pain: suggest pharyngeal/proximal esophageal pathology",
      "PMH: GERD, Barrett's, previous radiotherapy, systemic sclerosis, neurological disease"
    ],
    examination:[
      "General: cachexia, weight loss (malignancy)",
      "Neck: cervical lymphadenopathy (metastatic); thyroid enlargement (extrinsic compression); gurgling neck mass (Zenker's)",
      "Neurological: dysarthria, dysphonia, tremor, cranial nerve palsy (bulbar palsy)",
      "Mouth: oral candidiasis (immunocompromised); dentition",
      "Abdomen: hepatomegaly, epigastric mass (advanced esophageal/gastric cancer)"
    ],
    investigations:[
      {name:"EGD (upper GI endoscopy)",role:"First-line for all dysphagia; excludes malignancy; biopsy suspicious lesions; therapeutic (dilation, stenting)"},
      {name:"Barium swallow",role:"Motility disorders (achalasia: bird-beak), pharyngeal pouch, webs/rings; good oropharyngeal assessment when EGD limited"},
      {name:"CT chest/abdomen/pelvis",role:"Staging of esophageal malignancy; extrinsic compression (mediastinal mass, lung cancer)"},
      {name:"Esophageal manometry",role:"Gold standard for motility disorders; measures LOS pressure, peristalsis amplitude; Chicago classification"},
      {name:"24-hour pH/impedance study",role:"Quantifies reflux; guides surgical candidacy for fundoplication"},
      {name:"CBC, TFTs, iron studies",role:"Anemia (Plummer-Vinson, malignancy); thyroid function (goitre)"}
    ]
  },
  criteria:{
    title:"2-Week-Wait Referral Criteria (NICE NG12)",
    items:[
      {k:"Dysphagia any age",v:"2-week wait upper GI cancer referral"},
      {k:"Age ≥55 + weight loss + upper abdominal pain/dyspepsia/reflux",v:"2-week wait referral"},
      {k:"Odynophagia",v:"Urgent investigation — suggests active esophageal inflammation or malignancy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Dietitian assessment: texture modification, supplementary nutrition","SALT (speech and language therapy): oropharyngeal dysphagia — swallowing techniques, exercises","Treat GERD: PPI (benign peptic stricture)","Food impaction: Buscopan 20 mg IV ± fizzy drinks; EGD if fails"],
    medical:["Achalasia: calcium channel blockers (diltiazem) or nitrates — temporizing only","Eosinophilic esophagitis: swallowed steroids (fluticasone), dietary elimination (six-food elimination)","Neurological: MDT management with neurology; PEG if severe aspiration risk"],
    surgical:[
      {name:"EGD + dilatation",when:"Benign peptic stricture, Schatzki ring, eosinophilic stricture",notes:"Balloon or bougie dilation under endoscopic/fluoroscopic guidance; may need repeated sessions"},
      {name:"Pneumatic dilation / POEM / Heller myotomy",when:"Achalasia",notes:"Pneumatic dilation: 80% success at 5 years; POEM (per-oral endoscopic myotomy): newer, equivalent results; laparoscopic Heller + Dor fundoplication: surgical gold standard"},
      {name:"Endoscopic stent (SEMS)",when:"Malignant esophageal stricture — palliation or bridge to surgery",notes:"Self-expanding metal stent; relief in 80%; risk: migration, perforation, tumor ingrowth"},
      {name:"Esophagectomy",when:"Resectable esophageal/GOJ cancer",notes:"Ivor Lewis (mid-lower esophagus); McKeown (upper third); minimally invasive preferred where available"},
      {name:"Pharyngeal pouch repair",when:"Symptomatic Zenker's diverticulum",notes:"Endoscopic stapling (Dohlman procedure) preferred; open transcervical diverticulectomy if large"}
    ]
  },
  technique:{
    title:"Upper GI Endoscopy (EGD) for Dysphagia",
    prep:[
      "Confirm fasted ≥6 h; consent including the risk of perforation",
      "Left lateral position; pulse oximetry and capnography; throat spray ± conscious sedation (midazolam ± fentanyl)",
      "If a pharyngeal pouch (Zenker's) is suspected, obtain a barium swallow first — blind scope passage can perforate the pouch"
    ],
    steps:[
      {n:1,t:"Intubate the esophagus under vision",d:"Pass the scope through the cricopharyngeus as the patient swallows; never push blindly against resistance"},
      {n:2,t:"Assess the level and nature of hold-up",d:"Note stricture, mass, ring or extrinsic compression; record the distance from the incisors"},
      {n:3,t:"Biopsy suspicious lesions",d:"Take 6–8 biopsies from the edge of any tumor or ulcer; take mid-esophageal biopsies for eosinophilic esophagitis even if the mucosa looks normal"},
      {n:4,t:"Assess stomach and duodenum",d:"Retroflex to view the fundus and GOJ; exclude a co-existing gastric or duodenal cause"},
      {n:5,t:"Therapeutic step for benign stricture",d:"Balloon or bougie dilatation of a confirmed benign peptic/anastomotic stricture under direct or fluoroscopic vision"},
      {n:6,t:"Plan onward",d:"A malignant stricture needs staging CT/EUS before any dilatation or stenting — do not dilate a resectable tumor"}
    ],
    pearls:[
      "Barium swallow before the scope if Zenker's is suspected — the scope can perforate the pouch",
      "Do not dilate a malignant stricture before staging — contraindicated in a resectable tumor",
      "Take mid-esophageal biopsies in a young atopic male even if the mucosa looks normal — eosinophilic esophagitis"
    ]
  },
  guidelines:[
    {src:"NICE NG12: Suspected Cancer Referral Guidelines",url:"https://www.nice.org.uk/guidance/ng12"},
    {src:"BSG Dysphagia Guidelines 2021"},
    {src:"ACG Achalasia Guidelines 2020"}
  ],
  pearls:[
    "All new dysphagia = 2-week wait EGD referral until cancer excluded",
    "Oropharyngeal dysphagia in the elderly is neurological until proven otherwise — SALT before endoscopy",
    "Achalasia untreated for years → megaesophagus and 16x increased risk of esophageal squamous cell carcinoma",
    "Plummer-Vinson syndrome: treat iron deficiency first — web may resolve; female, middle-aged, iron-deficient"
  ],
  mistakes:[
    "Attributing dysphagia to anxiety or stress without EGD — malignancy must be excluded first",
    "Dilating a malignant stricture without staging CT — contraindicated in resectable tumor",
    "Missing Zenker's diverticulum on EGD — scope can perforate into pouch; barium swallow first if suspected"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 3. GASTRIC OUTLET OBSTRUCTION
// ─────────────────────────────────────────────────────────────────────
{
  id:"gastric-outlet-obstruction", dept:"uppergi", name:"Gastric Outlet Obstruction", latin:"Obstructio pylorica", organ:"Stomach/Duodenum",
  severity:"high", tags:["GOO","pyloric obstruction","succussion splash","hypochloremic alkalosis","gastrojejunostomy","Bouveret"],
  hero:"Mechanical obstruction at the pylorus or proximal duodenum; presents with profuse vomiting of undigested food, succussion splash, and hypochloremic hypokalemic metabolic alkalosis — the classic biochemical derangement.",
  keypoints:[
    "Classic biochemistry: hypochloremic, hypokalemic metabolic alkalosis — vomiting loses HCl; kidneys compensate by retaining H+ and excreting K+",
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
    {name:"GOO alkalosis",text:"Vomiting → lose H+ and Cl- → hypochloremia → kidney compensates: Na+/H+ exchanger retains Na+ and excretes H+ → paradoxical aciduria with systemic alkalosis; K+ lost in urine → hypokalemia"}
  ],
  overview:{
    definition:"Mechanical obstruction of the proximal GI tract at or distal to the gastric pylorus, causing inability of the stomach to empty into the duodenum.",
    epidemiology:"Incidence declining as PUD managed medically. Malignant GOO (gastric/pancreatic cancer) now more common than benign (PUD) in most series.",
    pathophysiology:"Obstruction leads to gastric distension and repeated vomiting of gastric contents (high in HCl). Loss of HCl → metabolic alkalosis; concurrent loss of K+ (vomiting + aldosterone-driven renal wasting) → hypokalemia; Cl- depletion → hypochloremia. Severe cases: uremia from dehydration.",
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
      {name:"CBC, electrolytes/BUN-Cr, LFT, Ca2+, clotting, G&S",role:"Metabolic profile: hypochloremic, hypokalemic alkalosis; uremia; raised creatinine (dehydration)"},
      {name:"AXR",role:"Dilated stomach with air-fluid level; absence of distal bowel gas suggests high obstruction"},
      {name:"CT abdomen/pelvis with IV contrast",role:"Identifies site, cause, and extent of obstruction; staging if malignancy; identifies fistula (Bouveret)"},
      {name:"EGD (upper GI endoscopy)",role:"Confirms obstruction, biopsies mass/ulcer, assesses for H. pylori; potentially therapeutic (dilation, stenting)"},
      {name:"Barium/Gastrografin swallow",role:"If EGD contraindicated; outlines anatomy; demonstrates delayed gastric emptying"}
    ]
  },
  criteria:{
    title:"Metabolic Derangement in GOO",
    items:[
      {k:"Na+",v:"Low-normal to low (dilutional)"},
      {k:"K+",v:"Low (hypokalemia — vomiting + renal wasting)"},
      {k:"Cl-",v:"Low (hypochloremia — loss of HCl)"},
      {k:"HCO3-",v:"High (metabolic alkalosis — compensating for H+ loss)"},
      {k:"pH",v:"High (alkalotic)"},
      {k:"Urea/Creatinine",v:"Elevated (dehydration/pre-renal uremia)"},
      {k:"Urine",v:"Paradoxical aciduria (kidney excretes H+ to retain Na+ in alkalosis)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NG tube drainage (free drainage + regular aspiration) — decompress stomach","IV 0.9% NaCl ± KCl replacement — correct hypochloremia and hypokalemia first","IV PPI (e.g. omeprazole 40 mg BD) — treat concurrent PUD/inflammation","Nil by mouth; monitor electrolytes 6-hourly until corrected","IDC: monitor urine output"],
    medical:["H. pylori eradication if positive (triple therapy) — may resolve inflammatory stricture","Nutritional support: TPN or NJ tube feeding if prolonged obstruction"],
    surgical:[
      {name:"Endoscopic balloon dilation",when:"Benign stricture (PUD, anastomotic) in fit patient",notes:"Through-the-scope balloon dilation; 80–90% success for PUD stricture; repeat if needed; antibiotics post-H. pylori eradication first"},
      {name:"Endoscopic stenting (SEMS)",when:"Malignant GOO — palliation when surgery not feasible",notes:"Self-expanding metal stent; rapid symptom relief; oral intake in 80%; bridging to surgery in some"},
      {name:"Gastrojejunostomy (GJ bypass)",when:"Malignant obstruction not amenable to stenting; failed endoscopy; anticipated long survival",notes:"Laparoscopic or open; anastomosis between posterior gastric wall and jejunum; bypasses obstruction; antecolic or retrocolic"},
      {name:"Resection (gastrectomy or Whipple)",when:"Resectable gastric or pancreatic cancer",notes:"Subtotal/total gastrectomy for gastric cancer; pancreaticoduodenectomy if pancreatic head cancer; curative intent only"}
    ]
  },
  technique:{
    title:"Laparoscopic Gastrojejunostomy (Bypass for Gastric Outlet Obstruction)",
    prep:[
      "Correct the hypochloremic hypokalemic metabolic alkalosis and dehydration FIRST — never operate on an unresuscitated GOO patient",
      "NG decompression of the dilated stomach; GA; supine",
      "Confirm cause and resectability on CT/EGD — bypass is for unresectable malignant obstruction, or benign disease unfit for resection"
    ],
    steps:[
      {n:1,t:"Access and exposure",d:"Laparoscopic ports (or an upper midline if open); expose the antrum and greater curve and lift the transverse colon to find the DJ flexure"},
      {n:2,t:"Select a jejunal loop",d:"Choose a proximal jejunal loop ~20–40 cm from the DJ flexure that reaches the stomach without tension (antecolic route is usual)"},
      {n:3,t:"Approximate stomach and jejunum",d:"Bring the loop to the dependent greater-curve antrum; align isoperistaltically; place stay sutures"},
      {n:4,t:"Create the anastomosis",d:"Enterotomy and gastrotomy; wide (≥4 cm) side-to-side stapled or hand-sewn anastomosis, sited dependently so the atonic stomach drains"},
      {n:5,t:"Close the common enterotomy",d:"Close the stapler-insertion defect in one or two layers; check staple-line hemostasis"},
      {n:6,t:"Test and finish",d:"Check for leak and tension; a Braun entero-enterostomy can reduce bile reflux; NG down, no routine drain"}
    ],
    pearls:[
      "Metabolic alkalosis must be corrected before anesthesia — it impairs cardiac conduction and respiratory drive",
      "Make the anastomosis wide and dependent so the dilated, atonic stomach empties",
      "For malignant GOO with short life expectancy, an endoscopic duodenal SEMS may be preferable to surgery"
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
    "Giving saline without KCl — correcting alkalosis without K+ replacement worsens hypokalemia",
    "Proceeding to surgery without correcting metabolic alkalosis — increases anesthetic and cardiac risk",
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
    "Four-quadrant peritonitis: generalized peritonitis with rigidity — emergency laparotomy/laparoscopy; no role for conservative management",
    "Hinchey classification (diverticular perforation): stages I–IV guide management"
  ],
  differentials:[
    "Perforated peptic ulcer (sudden epigastric pain, board-like abdomen, air under diaphragm)",
    "Perforated diverticulitis (LIF pain, elderly, known diverticulosis)",
    "Perforated appendix (RIF, younger patient, delayed presentation)",
    "Perforated colorectal cancer (elderly, change in bowel habit, weight loss)",
    "Iatrogenic (post-colonoscopy, post-EGD — onset within hours of procedure)",
    "Toxic megacolon with perforation (UC, Crohn's, C. difficile — very unwell, distended colon on AXR)",
    "Boerhaave syndrome (esophageal — vomiting, chest pain, surgical emphysema)"
  ],
  mnemonics:[
    {name:"Hinchey Classification",text:"I = pericolic abscess; II = pelvic/distant abscess; III = purulent peritonitis (no stool); IV = fecal peritonitis — III and IV require emergency surgery"}
  ],
  overview:{
    definition:"Full-thickness disruption of the GI tract wall resulting in contamination of the peritoneal or mediastinal cavity with luminal contents.",
    epidemiology:"Perforated PUD: 5–10/100,000/year; mortality 10–40% depending on delay. Perforated diverticulitis: 4/100,000/year. Iatrogenic colonoscopy perforation: 0.1–0.3%.",
    pathophysiology:"Luminal contents (gastric acid, feces, bacteria) contaminate the peritoneum → chemical peritonitis (immediate) → bacterial peritonitis (within hours) → sepsis → multi-organ failure. Upper GI perforation initially chemical (sterile gastric acid); lower GI immediately fecal/bacterial.",
    classification:[
      {label:"Hinchey I",note:"Pericolic abscess — percutaneous drainage ± antibiotics if stable"},
      {label:"Hinchey II",note:"Pelvic or distant abscess — percutaneous drainage ± antibiotics if stable"},
      {label:"Hinchey III",note:"Generalized purulent peritonitis — laparoscopic washout or Hartmann's"},
      {label:"Hinchey IV",note:"Generalized fecal peritonitis — emergency Hartmann's procedure; highest mortality"}
    ]
  },
  diagnosis:{
    history:[
      "Sudden onset severe abdominal pain (perforation is instantaneous for PUD)",
      "Site: epigastric (PUD), LIF (diverticular), RIF (appendix), diffuse (generalized peritonitis)",
      "Worsening pain with movement (peritonism)",
      "Fever, rigors (established peritonitis or abscess)",
      "Previous history: PUD/NSAID use, diverticulosis, IBD, malignancy, recent endoscopy"
    ],
    examination:[
      "Hemodynamic: tachycardia, hypotension, fever (sepsis) or hypothermia (severe sepsis/shock)",
      "Rigid, board-like abdomen — generalized peritonitis (loss of peritoneal elasticity due to muscle guarding)",
      "Localized peritonism: tenderness + guarding + rebound at site of perforation",
      "Loss of hepatic dullness (free air displaces liver)",
      "Absent bowel sounds (ileus/peritonitis)"
    ],
    investigations:[
      {name:"Erect CXR",role:"Free air under right hemidiaphragm in ~70% of perforations; must be erect for 10 min prior"},
      {name:"CT abdomen/pelvis with IV contrast",role:"Gold standard — >95% sensitivity; identifies free air, site of perforation, abscess, underlying cause (cancer)"},
      {name:"CBC, electrolytes/BUN-Cr, CRP, lactate, G&S",role:"Baseline; WBC elevated; lactate + metabolic acidosis = severity marker; cross-match if theater planned"},
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
    conservative:["NBM; NG tube decompression","IV broad-spectrum antibiotics immediately (pip-tazo or cefuroxime + metronidazole)","IV fluid resuscitation; IDC; monitor lactate","IV PPI if upper GI source","Selected stable patients with sealed/localized perforation (CT-confirmed): antibiotics + observation is acceptable — requires daily review"],
    medical:["Sepsis Six bundle: oxygen, cultures, IV antibiotics, IV fluids, blood glucose, lactate monitoring","Analgesia: IV morphine + antiemetic","Correct coagulopathy (FFP, Vit K) before theater"],
    surgical:[
      {name:"Laparoscopic washout ± Graham patch",when:"Perforated PUD (Boey 0–1); fit patient; <24 h",notes:"Most common approach; thorough peritoneal washout (5–10 L warm saline); Graham patch: omentum secured over perforation; repair if <2 cm"},
      {name:"Hartmann's procedure",when:"Perforated sigmoid diverticulitis (Hinchey III/IV); perforated left colon cancer",notes:"Sigmoid resection + end sigmoid colostomy + oversewn rectal stump; colostomy reversal 3–6 months later (50–60% never reversed)"},
      {name:"Right hemicolectomy ± primary anastomosis",when:"Perforated cecal/right colon (cancer, Hinchey I/II)",notes:"Primary anastomosis acceptable in right colon with minimal contamination; on-table lavage"},
      {name:"Laparoscopic peritoneal washout",when:"Purulent peritonitis (Hinchey III) in selected fit patients",notes:"Controversial vs. Hartmann's — SCANDIV and LOLA trials did not show superiority; use selectively"}
    ]
  },
  technique:{
    title:"Emergency Laparotomy for Bowel Perforation (Source Control)",
    prep:[
      "Resuscitate in parallel — IV access, fluids, broad-spectrum antibiotics and cross-match; do not delay antibiotics for imaging",
      "GA; supine; catheter and NG; consent for a stoma and a possible relook",
      "Prophylactic antibiotics on induction; warm the patient and the fluids"
    ],
    steps:[
      {n:1,t:"Midline laparotomy",d:"Generous midline incision for access to all four quadrants; send peritoneal fluid for culture"},
      {n:2,t:"Identify the source",d:"Systematic inspection to localize the perforation (stomach/duodenum, small bowel, colon); control gross contamination with packs"},
      {n:3,t:"Source control — upper GI",d:"Perforated peptic ulcer: omental (Graham) patch over the defect, or primary repair if small; biopsy a gastric ulcer to exclude malignancy"},
      {n:4,t:"Source control — colon",d:"Perforated diverticulitis or left colon cancer: Hartmann's (resect, end colostomy, close rectal stump) in fecal peritonitis; primary anastomosis only in a clean, stable field"},
      {n:5,t:"Peritoneal lavage",d:"Copious warm saline washout (5–10 L) until the effluent is clear; remove all debris"},
      {n:6,t:"Drains and closure",d:"Place drains near the repair as indicated; mass closure of the abdomen; leave a laparostomy for damage-control if the patient is unstable"}
    ],
    pearls:[
      "In fecal peritonitis (Hinchey IV) avoid a primary anastomosis — the leak rate in a contaminated field is very high",
      "Always send peritoneal fluid for culture and biopsy a gastric ulcer edge",
      "Choose damage-control (leave the abdomen open, relook in 24–48 h) over a long definitive operation if the patient is unstable or coagulopathic"
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
    "Boey score predicts PUD mortality — Boey 3 has >90% mortality; involve ICU/anesthetics early",
    "Iatrogenic perforation post-colonoscopy: small, early, no peritonitis → trial conservative with antibiotics; any peritonitis → theater"
  ],
  mistakes:[
    "Waiting for bowel sounds to 'come back' before re-examining — serial examination is essential in conservatively managed cases",
    "Primary anastomosis in Hinchey IV fecal peritonitis — extremely high leak rate in contaminated field",
    "Using barium for upper GI contrast study if perforation suspected — water-soluble contrast (Gastrografin) only"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 5. MELENA
// ─────────────────────────────────────────────────────────────────────
{
  id:"melena", dept:"uppergi", name:"Melena", latin:"Melaena", organ:"Upper GI tract",
  severity:"high", tags:["melena","upper GI bleed","Glasgow-Blatchford","EGD","variceal","Rockall"],
  hero:"Passage of black tarry stools from degradation of blood by intestinal enzymes — almost always upper GI bleeding (>90%); Glasgow-Blatchford Score ≤1 = safe early discharge; urgent EGD within 24 h.",
  keypoints:[
    "Glasgow-Blatchford Score (GBS): stratifies need for intervention; GBS 0 = very low risk (outpatient EGD); GBS ≥7 = high risk",
    "Elevated urea:creatinine ratio (>100:1 in mmol/L) suggests upper GI source — blood protein absorbed in small bowel raises urea",
    "EGD within 24 h (UK standard); within 12 h for suspected variceal bleed — terlipressin + prophylactic antibiotics before scope",
    "Variceal melena: terlipressin (2 mg IV QDS), prophylactic ceftriaxone (SBP prevention), octreotide; urgent banding",
    "Rockall score (post-endoscopy): predicts re-bleeding and mortality; score <3 = low risk",
    "Transfusion trigger: Hb <80 g/L (non-variceal); Hb <80 g/L (variceal) — avoid over-transfusion in varices (portal hypertension worsens)"
  ],
  differentials:[
    "Peptic ulcer disease (most common — 35–50% of UGIB; raised urea, NSAID/H. pylori history)",
    "Esophageal varices (stigmata of liver disease; spider naevi, ascites, jaundice)",
    "Mallory-Weiss tear (vomiting then hematemesis; classically post-alcohol binge; usually self-limiting)",
    "Upper GI malignancy (weight loss, dysphagia, older patient)",
    "Angiodysplasia (older patient, no obvious cause; Heyde's syndrome: AS + angiodysplasia)",
    "Hemobilia (trauma, hepatic artery aneurysm — Quincke's triad: RUQ pain + hemobilia + jaundice)",
    "Aortoenteric fistula (previous aortic graft + GI bleed = fistula until proved otherwise)"
  ],
  mnemonics:[
    {name:"Glasgow-Blatchford Score key items",text:"BUN ≥6.5 + Hb drop + SBP <110 + pulse ≥100 + melena + syncope + liver disease + cardiac failure = higher risk; GBS 0 = outpatient; GBS ≥7 = high risk intervention needed"}
  ],
  overview:{
    definition:"Black, tarry, offensive-smelling stools resulting from degradation of hemoglobin by intestinal bacteria as blood transits the GI tract; requires ≥50–100 mL blood loss.",
    epidemiology:"Upper GI bleeding: incidence 50–170/100,000/year; mortality 5–10% (in-hospital). Mortality highest in: age >60, hemodynamic compromise, variceal source, Rockall ≥8.",
    pathophysiology:"Blood in upper GI tract (above ligament of Treitz) undergoes chemical alteration by gastric acid and intestinal bacteria. Hemoglobin → hematin (black pigment) → melanotic stool. Takes ≥8 h transit time; rapid upper GI bleeding can cause hematochezia (bright red PR) — marker of massive hemorrhage.",
    classification:[
      {label:"Variceal",note:"Portal hypertension (cirrhosis, portal vein thrombosis); high risk re-bleed; terlipressin + banding/TIPSS"},
      {label:"Non-variceal peptic ulcer",note:"Forrest classification guides endoscopic therapy: Ia (spurting) and IIa (visible vessel) = definitive endotherapy"},
      {label:"Other upper GI",note:"Mallory-Weiss, esophagitis, Dieulafoy's lesion, upper GI cancer, angiodysplasia"}
    ]
  },
  diagnosis:{
    history:[
      "Stool character: black, tarry, 'like tar', sticky, offensive — vs. iron supplement (formed black stool) vs. dark red (lower GI)",
      "Associated hematemesis (confirms upper GI source)",
      "Medications: NSAIDs, aspirin, anticoagulants (warfarin, NOACs), clopidogrel, steroids",
      "PMH: known PUD, cirrhosis/liver disease, previous GI bleed, previous variceal banding",
      "Alcohol intake, NSAID use",
      "Syncope, dizziness on standing (hemodynamic compromise)"
    ],
    examination:[
      "Hemodynamic: tachycardia (HR >100), hypotension (SBP <100) = significant hemorrhage; postural hypotension = 15–20% volume loss",
      "Pallor, cool peripheries",
      "Stigmata of liver disease: jaundice, spider naevi, caput medusae, ascites, hepatosplenomegaly, leukonychia — variceal source",
      "Epigastric tenderness (PUD)",
      "DRE: confirm melena (black tarry stool on glove); exclude rectal cancer"
    ],
    investigations:[
      {name:"CBC, electrolytes/BUN-Cr, LFT, coagulation, G&S",role:"Hb baseline (may be normal acutely — hemodilution takes 24–72 h); elevated urea:creatinine >100; cross-match if unstable; INR/PT (liver disease)"},
      {name:"Glasgow-Blatchford Score",role:"GBS: BUN, Hb, SBP, pulse, melena, syncope, hepatic disease, cardiac failure — GBS 0–1 = outpatient; GBS ≥7 = high-risk; guides admission/scope urgency"},
      {name:"EGD (emergency gastroscopy)",role:"Within 24 h (NICE/BSG standard); within 12 h for suspected varices/hemodynamic instability; diagnostic + therapeutic (adrenaline injection, clips, banding)"},
      {name:"CT angiogram",role:"Active bleeding suspected but EGD unavailable or inconclusive; identifies source; guides IR embolization"},
      {name:"ECG",role:"Tachycardia/ischemia; pre-procedure baseline"}
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
      {k:"GBS 0",v:"Very low risk — outpatient EGD acceptable"},
      {k:"GBS 1–2",v:"Low risk — consider early discharge with urgent outpatient EGD"},
      {k:"GBS ≥7",v:"High risk — inpatient EGD, likely needs endoscopic intervention"}
    ]
  },
  scoring:[],
  management:{
    conservative:["2× large-bore IV access; type and cross-match","IV crystalloid resuscitation; target MAP >65 mmHg","Transfuse if Hb <80 g/L (>80 g/L if cardiovascular disease)","Correct coagulopathy: FFP if INR >1.5; platelets if <50; Vit K if warfarinised","Avoid over-resuscitation in varices — worsens portal pressure"],
    medical:["IV PPI (omeprazole 80 mg bolus → 8 mg/h infusion) for non-variceal bleed (pre-endoscopy PPI reduces need for endotherapy)","Variceal: terlipressin 2 mg IV QDS (up to 5 days); prophylactic ceftriaxone 1 g IV OD; octreotide infusion","Stop NSAIDs/anticoagulants; consider NOAC reversal (andexanet alfa, idarucizumab) if actively bleeding"],
    surgical:[
      {name:"Endoscopic hemostasis (EGD)",when:"Active bleeding (Forrest Ia, Ib) or visible vessel (Forrest IIa) on EGD",notes:"Dual therapy: adrenaline injection + thermal (heater probe/APC) or clips; endoscopic banding for varices; OTSC clips for large vessels"},
      {name:"Interventional radiology embolization",when:"Failed endoscopic therapy or endoscopy not possible",notes:"CT angiogram first to localize; super-selective embolization of culprit vessel (GDA for duodenal ulcer)"},
      {name:"Emergency surgery",when:"Failed endoscopy + IR; ongoing hemodynamic instability",notes:"Duodenotomy + oversewing bleeding vessel (DU); partial gastrectomy (GU); associated H. pylori eradication post-discharge"},
      {name:"TIPSS",when:"Recurrent variceal bleeding not controlled with banding/terlipressin",notes:"Transjugular intrahepatic portosystemic shunt; reduces portal pressure; hepatic encephalopathy risk"}
    ]
  },
  technique:{
    title:"Endoscopic Hemostasis for Upper GI Bleeding (EGD)",
    prep:[
      "Resuscitate first (two large-bore cannulae, transfuse toward Hb ≥70 g/L, correct coagulopathy); protect the airway in a massive or variceal bleed",
      "Pre-endoscopy: IV PPI for a suspected ulcer; terlipressin + prophylactic ceftriaxone if variceal bleeding is suspected",
      "EGD within 24 h — within 12 h and only after resuscitation if unstable or variceal"
    ],
    steps:[
      {n:1,t:"Identify the source",d:"Systematic scope of esophagus, stomach and duodenum; wash clots; grade an ulcer by the Forrest classification"},
      {n:2,t:"Non-variceal — dual therapy",d:"For Forrest Ia/Ib/IIa: adrenaline injection to slow bleeding PLUS a second modality — mechanical (clips/OTSC) or thermal (heater probe/coagulation). Adrenaline alone is never enough"},
      {n:3,t:"Variceal — band ligation",d:"Esophageal varices: band-ligate each column; gastric varices: cyanoacrylate glue per local protocol"},
      {n:4,t:"Confirm hemostasis",d:"Ensure bleeding has stopped; document the lesion and therapy for the next team"},
      {n:5,t:"Post-procedure",d:"High-dose IV PPI for 72 h for high-risk ulcers; continue terlipressin/antibiotics for varices; plan H. pylori eradication"},
      {n:6,t:"Escalate if it fails",d:"Rebleed → one repeat endoscopy, then IR embolization (e.g. GDA for a duodenal ulcer) or surgery; TIPSS for uncontrolled variceal bleeding"}
    ],
    pearls:[
      "Adrenaline injection alone has a high rebleed rate — always add a mechanical or thermal method",
      "Start terlipressin and ceftriaxone BEFORE the scope if varices are suspected — it saves lives",
      "Do not over-transfuse a variceal bleeder (target Hb ~70–80 g/L) — higher targets raise portal pressure and rebleeding"
    ]
  },
  guidelines:[
    {src:"BSG Acute Upper GI Bleeding Guidelines 2021"},
    {src:"NICE CG141: Upper GI Bleeding",url:"https://www.nice.org.uk/guidance/cg141"},
    {src:"ESGE Upper GI Hemorrhage Guidelines 2021",url:"https://www.esmo.org/guidelines"}
  ],
  pearls:[
    "GBS 0 = very low risk; can be discharged safely for outpatient EGD — prevents unnecessary admission",
    "Hematochezia (bright red PR) from an upper GI source = massive hemorrhage (>1000 mL); urgent resuscitation and EGD",
    "Forrest classification guides endotherapy: Ia (spurting artery) = mandatory dual endotherapy; Forrest III (clean base ulcer) = no endotherapy",
    "Variceal bleeding: terlipressin + ceftriaxone should be started before endoscopy; saves lives in RCTs"
  ],
  mistakes:[
    "Not correcting coagulopathy before EGD in variceal bleeding — INR >2 significantly impairs hemostasis",
    "Over-transfusing variceal bleeders to Hb >100 g/L — increases portal pressure and re-bleeding risk",
    "Prescribing NSAIDs post-discharge without gastroprotection after peptic ulcer bleed — high re-bleed risk"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 6. RECTAL BLEEDING
// ─────────────────────────────────────────────────────────────────────
{
  id:"rectal-bleeding", dept:"colorectal", name:"Rectal Bleeding (Hematochezia)", latin:"Haematochezia", organ:"Lower GI tract",
  severity:"medium", tags:["rectal bleeding","lower GI bleed","Oakland score","colonoscopy","diverticular","hematochezia"],
  hero:"Passage of fresh blood per rectum — 95% resolve spontaneously; use Oakland Score to risk-stratify; colonoscopy is definitive investigation; always exclude colorectal malignancy in older patients.",
  keypoints:[
    "Oakland Score ≤8 = low risk (95% of these can be safely discharged with outpatient colonoscopy)",
    "Most common cause of acute lower GI bleed: diverticular disease (~40%); most common in Western countries",
    "Diverticular bleed: painless; massive; spontaneously stops in 70–80%; 25% re-bleed within 4 years",
    "Always perform DRE — hemorrhoids diagnosed on DRE/proctoscopy; rectal cancer felt on DRE",
    "Hemorrhoid bleeding: on the surface of stool or dripping into toilet pan; bright red; typically painless unless thrombosed",
    "Transfusion trigger: Hb <70 g/L (non-cardiovascular) or <80 g/L (cardiovascular disease)"
  ],
  differentials:[
    "Diverticular disease (painless massive bleed, older patient, known diverticulosis)",
    "Hemorrhoids (on surface of stool/toilet pan; after defecation; pruritus, prolapse)",
    "Colorectal carcinoma (change in bowel habit, weight loss, mucus, ≥50 y — always exclude)",
    "Inflammatory bowel disease (UC: bloody diarrhea; Crohn's: less common frank bleed)",
    "Angiodysplasia (older patient, recurrent, cecum/ascending colon, Heyde's syndrome)",
    "Ischemic colitis (acute post-aortic surgery or low-flow state; LIF pain + rectal bleed)",
    "Infective colitis (acute onset, fever, travel history, stool culture positive)",
    "Radiation proctitis (pelvic radiotherapy — recurrent bleeding, telangiectasia on scope)"
  ],
  mnemonics:[
    {name:"Oakland Score",text:"Age + sex + previous lower GI bleed admission + DRE findings + heart rate + SBP + Hb — score ≤8 = 95% safe for discharge; >8 = needs admission"}
  ],
  overview:{
    definition:"Passage of fresh (bright red or dark red) blood per rectum, typically originating from the lower gastrointestinal tract (distal to the ligament of Treitz).",
    epidemiology:"Incidence: 20–27/100,000/year. Mortality ~4% overall; much higher (15–20%) in elderly with comorbidities. 95% stop spontaneously. Commonest cause: diverticular disease (40%), hemorrhoids (20%), colorectal cancer (10%), IBD (10%).",
    pathophysiology:"Lower GI bleeding results from mucosal erosion, vascular ectasia, diverticular artery rupture, or neoplastic ulceration. Blood remains relatively unaltered (no acid) → fresh red color. Bright red = anal/rectal source; dark red = sigmoid/right colon or massive upper GI bleed.",
    classification:[
      {label:"Mild (outpatient)",note:"Oakland ≤8; hemodynamically stable; small volume; most hemorrhoids — discharge + outpatient colonoscopy"},
      {label:"Moderate (admission)",note:"Oakland >8; hemodynamically stable; requires colonoscopy within 24–72 h"},
      {label:"Severe (resuscitation needed)",note:"Hemodynamic compromise; active ongoing bleed; CT angiography and possible IR intervention"}
    ]
  },
  diagnosis:{
    history:[
      "Volume: spots (hemorrhoids) vs. clots/toilet bowl full (diverticular)",
      "Color: bright red (anorectal/distal sigmoid) vs. dark red/plum (right colon or massive upper GI)",
      "Relationship to stool: on the surface (hemorrhoids) vs. mixed in stool (cancer, IBD)",
      "Associated symptoms: pain (fissure, ischemic colitis, IBD); altered bowel habit, weight loss (cancer); mucus (IBD, cancer)",
      "Dizziness, syncope, hemodynamic compromise (significant blood loss)",
      "Family history: colorectal cancer, IBD, polyposis syndromes"
    ],
    examination:[
      "Hemodynamic assessment: HR, BP, postural hypotension — dictates urgency",
      "Abdominal examination: tenderness (IBD, ischemia), mass (malignancy)",
      "Perianal inspection: hemorrhoids (grade I–IV), fissure, skin tags, fistula openings",
      "DRE (digital rectal examination): mandatory — blood, mass, hard stool impaction; rectal tenderness",
      "Proctoscopy: hemorrhoids (grade, bleeding), rectal polyp/mass"
    ],
    investigations:[
      {name:"CBC, electrolytes/BUN-Cr, LFT, coagulation, G&S",role:"Hb (acute bleed: normal initially; check for chronic anemia); urea normal or low (lower GI source — unlike UGIB); INR"},
      {name:"Oakland Score",role:"Risk stratification: age, sex, previous LGIB admission, DRE findings, HR, SBP, Hb — guides discharge vs. admission"},
      {name:"Stool cultures",role:"Infective colitis: bloody diarrhea + fever + travel history — C. diff PCR if recent antibiotics"},
      {name:"Colonoscopy",role:"Gold standard — identifies source, biopsies lesions, therapeutic (clips, APC for diverticular/angiodysplasia); perform after resuscitation"},
      {name:"CT angiography",role:"Active bleeding (≥0.5 mL/min detectable) — identifies 'blush'; guides IR embolization"},
      {name:"EGD",role:"If colonoscopy negative — exclude upper GI source (massive UGIB can present as bright red PR bleeding)"}
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
    conservative:["Most (95%) resolve spontaneously with supportive care","IV access; fluid resuscitation if hemodynamically compromised","Blood transfusion: Hb <70 g/L (or <80 g/L with cardiovascular disease)","Reverse anticoagulation with hematology guidance","Oakland ≤8: safe to discharge with urgent outpatient colonoscopy"],
    medical:["Infective colitis: appropriate antibiotics (avoid in EHEC/STEC — increases HUS risk)","IBD flare: steroids (UC: IV hydrocortisone 100 mg QDS); biologics in refractory","Radiation proctitis: sucralfate enemas, APC endotherapy, hyperbaric oxygen"],
    surgical:[
      {name:"Colonoscopic hemostasis",when:"Active bleeding lesion identified on colonoscopy",notes:"Adrenaline injection + APC or clips for diverticular; APC for angiodysplasia; band ligation for hemorrhoids"},
      {name:"IR embolization (mesenteric angiography)",when:"Active bleeding 'blush' on CT angiogram",notes:"Super-selective catheterization; embolize culprit artery; 80% success; bowel ischemia risk ~5%"},
      {name:"Emergency surgery",when:"Failed endoscopy + IR; ongoing instability requiring >6 units pRBC",notes:"Segment resection if source localized; subtotal colectomy if source not identified (avoid; high morbidity)"},
      {name:"Hemorrhoid treatment",when:"Grade III/IV hemorrhoids causing significant bleeding",notes:"Rubber band ligation (outpatient — grade I-III); hemorrhoidectomy (grade III-IV or failed banding)"}
    ]
  },
  technique:{
    title:"Colonoscopy and Endoscopic Hemostasis for Lower GI Bleeding",
    prep:[
      "Resuscitate and risk-stratify (Oakland score); most (95%) settle spontaneously",
      "Bowel preparation for a planned colonoscopy once the patient is stable; unstable or actively bleeding → CT angiography first, not colonoscopy",
      "Reverse anticoagulation with hematology guidance before intervention"
    ],
    steps:[
      {n:1,t:"Rule out an upper source",d:"Hematochezia with hemodynamic compromise: exclude a massive upper GI bleed (EGD) first — brisk UGIB can present as fresh PR blood"},
      {n:2,t:"Intubate to the cecum",d:"Complete colonoscopy with careful washing; identify the bleeding point (diverticulum, angiodysplasia, tumor, post-polypectomy)"},
      {n:3,t:"Diverticular bleed",d:"Through-the-scope clips to the culprit diverticulum, or adrenaline injection plus a clip; band ligation is an alternative"},
      {n:4,t:"Angiodysplasia",d:"Argon plasma coagulation (APC) — non-contact thermal coagulation of the vascular tuft"},
      {n:5,t:"Anorectal source",d:"Rubber-band ligation of bleeding grade I–III hemorrhoids seen on proctoscopy; refer for hemorrhoidectomy if grade III–IV or banding fails"},
      {n:6,t:"Escalate if it fails",d:"Ongoing bleeding with a CT-angiogram blush → IR super-selective embolization; failed endoscopy + IR with instability → segmental resection (subtotal colectomy only if the source is unlocalized)"}
    ],
    pearls:[
      "Do not colonoscope during a massive active bleed — views are poor; CT angiography then IR is the pathway",
      "Always exclude colorectal cancer in a patient >45 with rectal bleeding",
      "Reverse anticoagulation before any endoscopic hemostasis to reduce procedural bleeding"
    ]
  },
  guidelines:[
    {src:"BSG Acute Lower GI Bleeding Guidelines 2019"},
    {src:"ACPGBI Colorectal Cancer Referral Pathway"},
    {src:"NICE NG12: 2-Week Wait Referral",url:"https://www.nice.org.uk/guidance/ng12"}
  ],
  pearls:[
    "Always exclude colorectal cancer in patients >45 with rectal bleeding — 2-week wait referral if no obvious benign cause",
    "Oakland Score ≤8 = safe discharge; this tool saves unnecessary hospitalization for low-risk patients",
    "Diverticular bleed: massive, painless, self-limiting — if it stops, colonoscopy when bowel prepared; if ongoing, CT angiogram",
    "Hematochezia with hemodynamic compromise = suspect massive UGIB (>1 L blood) — EGD first, not colonoscopy"
  ],
  mistakes:[
    "Attributing all rectal bleeding to hemorrhoids without colonoscopy in patients >45 — colorectal cancer missed",
    "Performing colonoscopy during active massive bleed — poor views; CT angiogram first then IR",
    "Not reversing anticoagulation before endoscopic intervention — significantly increases procedural bleeding risk"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 7. GERD (GASTRO-ESOPHAGEAL REFLUX DISEASE)
// ─────────────────────────────────────────────────────────────────────
{
  id:"gord", dept:"uppergi", name:"Gastro-Esophageal Reflux Disease (GERD)", latin:"Morbus refluxus gastro-oesophagealis", organ:"Esophagus/LOS",
  severity:"low", tags:["GERD","reflux","PPI","fundoplication","Los Angeles","Barrett's","heartburn"],
  hero:"Pathological reflux of gastric contents into the esophagus; affects ~25% of the population; PPIs are highly effective first-line; Nissen fundoplication reserved for refractory or complicated disease; Barrett's surveillance mandatory.",
  keypoints:[
    "Los Angeles Classification: Grade A–D based on mucosal break extent; Grade C/D = significant esophagitis",
    "Gold standard investigation: 24-hour ambulatory pH monitoring — quantifies reflux burden; Demeester score >14.72 = pathological",
    "Barrett's esophagus complicates ~10% at initial endoscopy — 0.5%/year risk of adenocarcinoma; endoscopic surveillance essential",
    "Nissen fundoplication (360° posterior wrap): more effective than long-term PPI for symptom control and quality of life; laparoscopic preferred",
    "Red flags requiring urgent EGD: dysphagia, weight loss, early satiety, age >55 with new symptoms — exclude malignancy",
    "DeMeester score >14.72 on 24 h pH study = pathological reflux (>4.2% of total time pH <4)"
  ],
  differentials:[
    "Esophageal adenocarcinoma (progressive dysphagia, weight loss, Barrett's background)",
    "Peptic ulcer disease (epigastric pain, worse with hunger/empty stomach, relieved by food)",
    "Achalasia (dysphagia liquids = solids, regurgitation, bird-beak on barium)",
    "Coronary artery disease (exertional, radiation to arm/jaw, ECG changes — always exclude in atypical chest pain)",
    "Eosinophilic esophagitis (young male, atopy, food impaction, dysphagia)",
    "Functional dyspepsia (normal EGD, no pH evidence of reflux)",
    "Biliary colic (RUQ, post-fatty meal, Murphy's sign)"
  ],
  mnemonics:[
    {name:"Los Angeles Classification",text:"A: breaks ≤5 mm; B: breaks >5 mm; C: breaks between ≥2 folds <75% circumference; D: circumferential ≥75% — C and D = severe; indication for surgery discussion"}
  ],
  overview:{
    definition:"Condition in which reflux of gastric contents into the esophagus causes troublesome symptoms and/or complications, including esophagitis, stricture, and Barrett's metaplasia.",
    epidemiology:"Prevalence ~20–25% in Western countries; affects men twice as commonly as women. Incidence of Barrett's-associated adenocarcinoma rising 500% since 1970s. GERD accounts for ~4% of all primary care consultations in the UK.",
    pathophysiology:"Lower esophageal sphincter (LOS) pressure normally >15 mmHg. In GERD: transient LOS relaxations (tLOSRs) occur more frequently; hiatus hernia disrupts the angle of His; reduced esophageal acid clearance. Acid (and bile in duodenogastro-esophageal reflux) causes epithelial injury → esophagitis → metaplasia (Barrett's) → dysplasia → adenocarcinoma.",
    classification:[
      {label:"Non-erosive GERD (NERD)",note:"Symptoms without esophagitis on EGD (~60% of GERD); abnormal pH study; good PPI response"},
      {label:"Erosive esophagitis",note:"LA Grade A–D on EGD; PPI heals most; Grade C/D needs long-term maintenance PPI"},
      {label:"Barrett's esophagus",note:"Columnar metaplasia ≥1 cm above GOJ; mandates endoscopic surveillance; EET for HGD/early cancer"}
    ]
  },
  diagnosis:{
    history:[
      "Heartburn: retrosternal burning worse after meals, lying flat, bending forward; partially relieved by antacids",
      "Acid regurgitation: bitter/sour taste, water brash (reflex salivation)",
      "Atypical: nocturnal cough, laryngitis, hoarse voice, asthma exacerbations (micro-aspiration)",
      "Precipitants: fatty food, coffee, alcohol, chocolate, smoking, large meals, tight clothing",
      "Red flags: dysphagia, odynophagia, weight loss, early satiety, anemia — refer urgently"
    ],
    examination:[
      "Usually unremarkable",
      "BMI >30: major risk factor; weight loss target",
      "Signs of anemia (chronic esophagitis, Barrett's with erosion)",
      "Abdominal: epigastric tenderness; exclude alternative pathology"
    ],
    investigations:[
      {name:"Trial of PPI (empirical therapy)",role:"4–8 week trial of full-dose PPI (omeprazole 20–40 mg OD) — response supports diagnosis; most patients managed without EGD"},
      {name:"EGD (upper GI endoscopy)",role:"Recommended if: age >55, red flags, PPI failure >4 weeks, family history of GI malignancy; assesses LA grade, Barrett's, malignancy"},
      {name:"24-hour ambulatory pH monitoring",role:"Gold standard; quantifies acid exposure (Demeester score); performed off PPI (at least 7 days); guides surgical candidacy"},
      {name:"Esophageal manometry (HRM)",role:"Before fundoplication — exclude achalasia/severe dysmotility (relative contraindication to total fundoplication); measure LOS pressure"},
      {name:"Barium swallow",role:"Hiatus hernia size; reflux demonstration; esophageal transit (not preferred over endoscopy)"}
    ]
  },
  criteria:{
    title:"Los Angeles Classification of Esophagitis",
    items:[
      {k:"Grade A",v:"One or more mucosal breaks, each ≤5 mm"},
      {k:"Grade B",v:"One or more mucosal breaks, at least one >5 mm, not extending between mucosal folds"},
      {k:"Grade C",v:"Mucosal breaks extending between ≥2 mucosal folds but <75% of circumference"},
      {k:"Grade D",v:"Mucosal breaks involving ≥75% of esophageal circumference"},
      {k:"Grade C/D",v:"Indication for long-term PPI maintenance; discuss fundoplication; high Barrett's risk"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Weight loss (BMI target <25)","Elevate head of bed 15–20 cm","Avoid: coffee, alcohol, chocolate, fatty foods, smoking, carbonated drinks","Avoid lying flat within 3 hours of eating","Small, frequent meals; loose-fitting clothing"],
    medical:["PPIs first-line: omeprazole 20–40 mg OD; 4–8 week course; 70–80% symptom control","Maintenance PPI at lowest effective dose for recurrent/complicated disease","Alginate (Gaviscon): adjunct for post-prandial reflux; forms raft at GOJ","H2-receptor antagonists: nocturnal reflux; on-demand use; less effective than PPIs","Prokinetics (metoclopramide, domperidone): adjunct for gastroparesis component"],
    surgical:[
      {name:"Laparoscopic Nissen fundoplication (360° posterior wrap)",when:"PPI failure; patient preference (avoid lifelong medication); complicated GERD (Barrett's, stricture); respiratory complications",notes:"Gold standard surgical procedure; mobilize gastric fundus; wrap 360° around distal esophagus; close crura; hiatus hernia repair concurrent; 85–90% patient satisfaction at 5 years"},
      {name:"Laparoscopic Toupet fundoplication (270° posterior partial wrap)",when:"Significant esophageal dysmotility (weak peristalsis on manometry)",notes:"Less dysphagia/gas-bloat than Nissen; slightly lower reflux control; preferred in dysmotility"},
      {name:"LINX Magnetic Sphincter Augmentation",when:"PPI-dependent GERD without large hiatus hernia",notes:"Magnetic titanium bead ring placed laparoscopically at GOJ; preserves natural swallowing; reversible; avoid in Barrett's HGD"},
      {name:"Endoscopic therapy (Stretta, TIF)",when:"Mild-moderate GERD; avoid surgery; limited evidence",notes:"Stretta: radiofrequency ablation of LOS; TIF (transoral incisionless fundoplication) — outpatient; inferior to surgical fundoplication long-term"}
    ]
  },
  technique:{
    title:"Laparoscopic Nissen Fundoplication (360° Wrap)",
    prep:[
      "Confirm pathological reflux objectively (24-h pH / DeMeester) and exclude achalasia with manometry BEFORE surgery",
      "GA; supine, split-legs / reverse Trendelenburg; surgeon between the legs",
      "Five upper-abdominal ports; liver retractor on the left lobe"
    ],
    steps:[
      {n:1,t:"Expose the hiatus",d:"Retract the left liver lobe; divide the gastrohepatic ligament; identify both crura and the anterior/posterior vagus nerves"},
      {n:2,t:"Mobilize the esophagus",d:"Dissect the esophagus circumferentially into the mediastinum to gain ≥2–3 cm of intra-abdominal length; preserve the vagi"},
      {n:3,t:"Divide short gastric vessels",d:"Take the short gastrics along the greater curve to fully mobilize the fundus for a tension-free wrap"},
      {n:4,t:"Crural repair",d:"Approximate the crura posteriorly with non-absorbable sutures, calibrating the hiatus over a bougie"},
      {n:5,t:"Create the wrap",d:"Pass the fundus behind the esophagus; 'shoeshine' maneuver to confirm it slides freely; construct a short (1.5–2 cm), floppy 360° wrap over the bougie"},
      {n:6,t:"Secure and check",d:"Two or three sutures including esophageal muscle; ensure the wrap is loose and not twisted; hemostasis; remove the bougie"}
    ],
    pearls:[
      "Always calibrate the wrap over a bougie — a wrap that is too tight or too long causes dysphagia and gas-bloat",
      "Manometry first: an unrecognized achalasia plus a total Nissen produces severe dysphagia",
      "For significant dysmotility choose a partial (Toupet 270°) wrap instead of a Nissen"
    ]
  },
  guidelines:[
    {src:"BSG GERD and Barrett's Esophagus Guidelines 2021"},
    {src:"NICE NG12: Suspected Cancer (red flags)",url:"https://www.nice.org.uk/guidance/ng12"},
    {src:"SAGES Fundoplication Guidelines 2021"}
  ],
  pearls:[
    "Demeester score >14.72 = pathological reflux on 24-h pH study — objective confirmation before surgery",
    "Always do manometry before fundoplication — undiagnosed achalasia + total Nissen = severe dysphagia",
    "Barrett's esophagus: surveillance EGD every 2–3 years (no dysplasia); radiofrequency ablation (RFA) for low-grade dysplasia; EET/esophagectomy for high-grade dysplasia",
    "Nissen fundoplication has higher long-term effectiveness than PPIs — but side effects (dysphagia, gas-bloat) occur in ~10%"
  ],
  mistakes:[
    "Not doing EGD before fundoplication in patients >55 — Barrett's or early cancer may be present",
    "Total Nissen in patient with severe esophageal dysmotility — causes severe dysphagia and re-operation",
    "Treating Barrett's without surveillance — 0.5%/year adenocarcinoma risk is significant in younger patients"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 8. PSEUDO-OBSTRUCTION (OGILVIE'S SYNDROME)
// ─────────────────────────────────────────────────────────────────────
{
  id:"pseudo-obstruction", dept:"colorectal", name:"Pseudo-Obstruction (Ogilvie's Syndrome)", latin:"Pseudo-obstructio coli acuta", organ:"Colon",
  severity:"high", tags:["Ogilvie","pseudo-obstruction","neostigmine","cecal diameter","colonic dilatation","colonoscopic decompression"],
  hero:"Acute colonic dilatation without mechanical obstruction (Ogilvie's syndrome); treat underlying cause + neostigmine 2 mg IV in HDU monitoring; colonoscopic decompression if neostigmine fails; cecal diameter >12 cm = perforation risk.",
  keypoints:[
    "Cecal diameter >12 cm = high perforation risk; >9 cm + failure to improve = escalate management",
    "Neostigmine 2 mg IV slowly over 3–5 min in HDU: 80–90% response rate; monitor ECG for bradycardia; atropine at bedside",
    "CT abdomen/pelvis (with rectal contrast if available): confirms colonic dilatation, excludes mechanical obstruction, identifies perforation",
    "Colonoscopic decompression: 75–90% success; recurrence 40% (flatus tube/repeated colonoscopy may be needed)",
    "Correct precipitating factors: electrolytes (K+, Mg2+, Ca2+, Na+), medications (opioids, anticholinergics), hypothyroidism",
    "Surgery (Hartmann's or cecostomy) reserved for: perforation, ischemia, failed all conservative measures"
  ],
  differentials:[
    "Mechanical large bowel obstruction (CT: transition point, distended proximal bowel only; vs. pseudo-obstruction: entire colon dilated)",
    "Toxic megacolon (IBD or C. difficile; fever, tachycardia, leukocytosis, transverse colon >6 cm; emergency colectomy)",
    "Sigmoid volvulus (AXR: coffee bean sign; endoscopic decompression first)",
    "Cecal volvulus (CT: cecum displaced to LUQ; usually needs surgery)",
    "Paralytic ileus (post-surgery, sepsis — both small and large bowel dilated; no specific treatment; resolve spontaneously)"
  ],
  mnemonics:[
    {name:"Causes of Pseudo-obstruction — POEM",text:"Pharmacological (opioids, Ca-channel blockers, antidepressants) + Operative/post-surgical + Electrolyte imbalance (K, Mg, Ca, Na) + Medical illness (trauma, sepsis, cardiac, neurological)"}
  ],
  overview:{
    definition:"Acute massive dilatation of the colon in the absence of a mechanical obstructing lesion; also termed Ogilvie's syndrome after Sir William Heneage Ogilvie who described it in 1948.",
    epidemiology:"Typically affects elderly hospitalized patients; median age 60. Risk: post-operative (especially orthopedic/cardiac surgery), severe illness, prolonged immobility. Perforation occurs in 3–15% if untreated; mortality with perforation >50%.",
    pathophysiology:"Disruption of autonomic nervous supply to the colon — imbalance between parasympathetic (pro-motility) and sympathetic (inhibitory) drive → colonic smooth muscle fails to contract → progressive dilatation → ischemia → perforation. Cecum at greatest risk (largest diameter, highest wall tension — law of Laplace).",
    classification:[
      {label:"Mild (cecum <9 cm)",note:"Conservative: mobilize, correct electrolytes, reduce opioids, observe"},
      {label:"Moderate (cecum 9–12 cm)",note:"Neostigmine 2 mg IV if no contraindications; colonoscopic decompression if neostigmine fails"},
      {label:"Severe (cecum >12 cm) or ischemia/perforation",note:"Urgent surgery — cecostomy or Hartmann's/subtotal colectomy"}
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
      "Peritonism (tenderness, rebound, guarding) = ischemia or perforation — emergency",
      "DRE: empty rectum (not obstructed distally) — helps differentiate from low rectal obstruction",
      "Hemodynamic status: tachycardia/hypotension = sepsis from ischemia"
    ],
    investigations:[
      {name:"AXR",role:"Massive colonic dilatation (±entire colon); cecal diameter measured; no transition point (unlike mechanical obstruction)"},
      {name:"CT abdomen/pelvis",role:"Confirms diagnosis; excludes mechanical obstruction (no transition point); measures cecal diameter; identifies pneumatosis (ischemia) or free air (perforation)"},
      {name:"CBC, electrolytes/BUN-Cr, Ca2+, Mg2+, TFTs, CRP",role:"Electrolyte correction (K+, Mg2+, Ca2+) is part of treatment; hypothyroid screen; CRP elevated in ischemia"},
      {name:"Flexible sigmoidoscopy",role:"Uncertain cases; direct visualization excludes distal obstruction; therapeutic decompression with flatus tube placement"},
      {name:"Water-soluble contrast enema",role:"If CT equivocal — confirms absence of mechanical obstruction; water-soluble only (not barium)"}
    ]
  },
  criteria:{
    title:"Management Thresholds by Cecal Diameter",
    items:[
      {k:"Cecal diameter <9 cm",v:"Conservative: correct triggers, mobilize, reduce opioids, rectal tube"},
      {k:"Cecal diameter 9–12 cm",v:"Neostigmine 2 mg IV (HDU monitoring); colonoscopic decompression if fails"},
      {k:"Cecal diameter >12 cm",v:"High perforation risk — escalate urgently; consider decompression/surgery"},
      {k:"Neostigmine contraindications",v:"HR <60, SBP <90, bowel obstruction, recent MI, severe asthma, peptic ulcer"},
      {k:"Neostigmine response",v:"80–90% response within 30 min; atropine 0.6 mg IV at bedside for bradycardia"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Correct electrolytes (K+, Mg2+, Ca2+) aggressively","Mobilize patient (walking if possible; knee-chest position aids decompression)","Stop precipitating medications (opioids, anticholinergics)","NGT if vomiting; urethral catheter; strict fluid balance","Rectal tube with 3-way tap: decompresses sigmoid/rectum","Regular abdominal girth measurement and AXR every 12–24 h"],
    medical:["Neostigmine 2 mg IV over 3–5 min (anticholinesterase — increases acetylcholine → colonic motility)","Monitoring: continuous ECG; BP every 5 min for 30 min; atropine 0.6 mg IV prepared","Polyethylene glycol laxative (Movicol): maintenance once resolved","Correct hypothyroidism if present (thyroxine replacement)"],
    surgical:[
      {name:"Colonoscopic decompression",when:"Failed neostigmine (≥2 doses); cecum >12 cm with contraindications to neostigmine",notes:"Per-colonoscopic decompression + flatus tube placed to splenic flexure; 75–90% success; recurrence 40% in 24–72 h; may need repeat"},
      {name:"Percutaneous cecostomy",when:"Not fit for surgery or colonoscopy; cecum >12 cm",notes:"Radiological or laparoscopic tube cecostomy; decompresses cecum; good for recurrent cases"},
      {name:"Hartmann's / Subtotal colectomy",when:"Perforation, ischemia, gangrenous bowel, failed all other measures",notes:"Hartmann's for sigmoid/left colon involvement; subtotal colectomy + end ileostomy if pancolonic ischemia; high mortality"}
    ]
  },
  technique:{
    title:"Colonoscopic Decompression for Acute Colonic Pseudo-Obstruction",
    prep:[
      "First exclude mechanical obstruction and perforation on CT; correct K+/Mg2+/Ca2+ and stop opioids and anticholinergics",
      "Try conservative measures ± IV neostigmine (with cardiac monitoring and atropine to hand) before scoping",
      "Reserve decompression for cecum >12 cm, failure of neostigmine, or a contraindication to neostigmine"
    ],
    steps:[
      {n:1,t:"Minimal-prep colonoscopy",d:"No oral bowel prep (obstructive picture); scope carefully with minimal insufflation — use CO2 to limit further distension"},
      {n:2,t:"Aspirate as you advance",d:"Continuously suction gas and liquid stool to decompress; advance as far as safely possible (ideally to the cecum or hepatic flexure)"},
      {n:3,t:"Inspect the mucosa",d:"Look for ischemia (dusky or black mucosa) — if present, stop and refer for surgery"},
      {n:4,t:"Place a decompression tube",d:"Leave a flatus/decompression tube over a guidewire to the right colon or splenic flexure to keep the colon decompressed"},
      {n:5,t:"Confirm decompression",d:"Post-procedure AXR to confirm a reduced cecal diameter; secure the tube on free drainage"},
      {n:6,t:"Monitor for recurrence",d:"Serial abdominal girth and AXR; recurrence (~40%) may need repeat decompression; escalate to cecostomy or surgery if it fails or ischemia/perforation develops"}
    ],
    pearls:[
      "Suction far more than you insufflate — and use CO2; the goal is to decompress, not distend",
      "Dusky mucosa means ischemia: abandon decompression and go to surgery",
      "Recurrence is common; a left-in decompression tube reduces it"
    ]
  },
  guidelines:[
    {src:"ASCRS Pseudo-obstruction Clinical Practice Guidelines 2021"},
    {src:"ESCP/ACPGBI Acute Colorectal Conditions Guidelines"},
    {src:"BSG Acute Colonic Pseudo-obstruction 2020"}
  ],
  pearls:[
    "Distinguish from toxic megacolon: pseudo-obstruction = no fever/leukocytosis + not IBD/C.diff; toxic mega = fever + leukocytosis + IBD/C.diff cause",
    "Neostigmine works in 80% — if it fails, colonoscopic decompression next; surgery for perforation/ischemia only",
    "Atropine must be at bedside before neostigmine — bradycardia occurs in ~10% (usually transient)",
    "Law of Laplace: tension = pressure × radius → cecum (widest) is at greatest risk of ischemia and perforation"
  ],
  mistakes:[
    "Giving neostigmine without HDU monitoring or atropine ready — risk of severe bradycardia/bronchospasm",
    "Operating for pseudo-obstruction without CT scan — surgical bowel prep and mechanical obstruction exclusion mandatory",
    "Not correcting electrolytes before neostigmine — hypokalemia or hypomagnesemia reduces colonic response"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 9. ANGIODYSPLASIA
// ─────────────────────────────────────────────────────────────────────
{
  id:"angiodysplasia", dept:"colorectal", name:"Angiodysplasia", latin:"Angiodysplasia gastrointestinalis", organ:"GI tract (cecum/ascending colon)",
  severity:"medium", tags:["angiodysplasia","AVM","argon plasma coagulation","capsule endoscopy","Heyde syndrome","occult GI bleed"],
  hero:"Most common GI vascular malformation; responsible for ~6% of lower GI bleeds and ~8% of upper GI bleeds; most common location = cecum and ascending colon; APC endotherapy is first-line treatment.",
  keypoints:[
    "Heyde's syndrome: aortic stenosis + angiodysplasia → GI bleeding; von Willebrand multimers destroyed by turbulent flow across stenotic valve → hemostatic failure",
    "Majority present with occult bleeding (iron-deficiency anemia); only 10–15% present with acute hematochezia",
    "Argon plasma coagulation (APC): first-line endoscopic treatment — 'safe and cost-effective'; non-contact thermal coagulation",
    "Capsule endoscopy: gold standard for small bowel angiodysplasia — identifies lesions missed by EGD and colonoscopy",
    "Re-bleeding after APC is common (30–40%) — expectant management for recurrence; consider repeat APC",
    "Octreotide: useful in recurrent bleeding not amenable to endoscopy (reduces splanchnic blood flow)"
  ],
  differentials:[
    "Diverticular disease (painless massive bleed in elderly; right-sided diverticula can cause major hemorrhage)",
    "Colorectal cancer (change in bowel habit, weight loss, iron-deficiency anemia)",
    "IBD (UC: bloody diarrhea; Crohn's: less commonly frank bleed)",
    "Hemorrhoids (anorectal; on surface of stool; proctoscopy confirms)",
    "Ischemic colitis (sudden LIF pain + PR blood; after cardiac surgery or low-flow state)",
    "GAVE (gastric antral vascular ectasia — 'watermelon stomach'; upper GI source; APC treatment)",
    "Portal hypertensive gastropathy/colopathy (liver disease; diffuse mucosal changes)"
  ],
  mnemonics:[
    {name:"Heyde Syndrome",text:"Aortic Stenosis → shear stress destroys vWF multimers → acquired vWD type 2A → angiodysplasia bleeds → GI hemorrhage — treat AS (TAVR/AVR) to resolve bleeding"}
  ],
  overview:{
    definition:"Acquired vascular ectasias consisting of abnormal, thin-walled, tortuous submucosal and mucosal vessels that are prone to bleeding; the most common vascular abnormality of the GI tract.",
    epidemiology:"Prevalence 1–2% in general population; increases with age. Responsible for 6% of lower GI bleeds, 8% of upper GI bleeds. Most lesions are <5 mm; often multiple. Most common in cecum/ascending colon (80%).",
    pathophysiology:"Chronic colonic wall contraction → increased intraluminal pressure → submucosal venous drainage impaired → dilated submucosal veins → precapillary sphincter incompetence → small AVMs. Congenital form: hereditary hemorrhagic telangiectasia (HHT/Rendu-Osler-Weber syndrome) — multiple mucocutaneous telangiectasias, epistaxis, family history.",
    classification:[
      {label:"Acquired (idiopathic)",note:"Most common; elderly; cecum/right colon; associated with AS, CKD, vWD"},
      {label:"Hereditary (HHT)",note:"Autosomal dominant; ENG or ACVRL1 gene; multiple telangiectasias in GI, skin, lungs, brain"},
      {label:"GAVE (gastric antral vascular ectasia)",note:"Separate entity; 'watermelon stomach' appearance; portal hypertension or autoimmune; APC treatment"}
    ]
  },
  diagnosis:{
    history:[
      "Occult GI bleed: iron-deficiency anemia, fatigue, exertional dyspnea — no visible bleeding",
      "Intermittent hematochezia (10–15%) — typically self-limiting, recurrent",
      "Hematemesis or melena if upper GI/small bowel location",
      "Background: age >60, aortic stenosis (Heyde's), CKD, cirrhosis, anticoagulation",
      "HHT: epistaxis, telangiectasias on lips/tongue/fingers, family history of GI bleeding"
    ],
    examination:[
      "Pallor, tachycardia, systolic murmur (aortic stenosis — Heyde's)",
      "Telangiectasias on lips, tongue, fingers, face (HHT)",
      "Hemodynamic stability assessment (most are stable)",
      "Abdominal examination usually unremarkable"
    ],
    investigations:[
      {name:"CBC, iron studies, reticulocytes",role:"Iron-deficiency anemia (low Hb, MCV, ferritin; raised TIBC); active bleed: normal Hb initially"},
      {name:"Colonoscopy",role:"First-line for colonic angiodysplasia — visualizes lesions (cherry-red flat vascular tufts); biopsy not required; APC therapeutic"},
      {name:"EGD (upper GI endoscopy)",role:"Upper GI location; also identifies GAVE; exclude PUD/malignancy as co-existing cause"},
      {name:"Capsule endoscopy",role:"Gold standard for small bowel lesions; detects in 50–70% of obscure GI bleed after negative EGD + colonoscopy; non-therapeutic"},
      {name:"CT angiography",role:"Active bleeding ≥0.5 mL/min; identifies 'blush'; guides IR embolization"},
      {name:"Mesenteric angiography",role:"Identifies vascular tuft; super-selective embolization if CT confirms active bleed"}
    ]
  },
  criteria:{
    title:"Endoscopic Appearance and Treatment",
    items:[
      {k:"Cherry-red flat vascular tufts",v:"Classic angiodysplasia appearance on colonoscopy/EGD — spider-like or flat, ≤5 mm"},
      {k:"APC (argon plasma coagulation)",v:"First-line endoscopic treatment; non-contact; 85% initial hemostasis; 30–40% re-bleed rate"},
      {k:"Capsule endoscopy indication",v:"Obscure GI bleed after negative EGD + colonoscopy — detects small bowel angiodysplasia in 50–70%"},
      {k:"Heyde's syndrome treatment",v:"Aortic valve replacement (surgical AVR or TAVR) resolves GI bleeding in 90% by restoring vWF multimers"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Iron replacement (IV or oral) for iron-deficiency anemia","Monitor Hb; most acute bleeds self-terminate","Stable, low-risk patients: outpatient investigation after resuscitation","Optimize anticoagulation/antiplatelet management with hematology"],
    medical:["Octreotide (somatostatin analogue): reduces splanchnic blood flow; effective in HHT and recurrent bleed not amenable to endoscopy","Thalidomide/bevacizumab: anti-angiogenic; emerging evidence in refractory HHT-related GI angiodysplasia","Estrogen-progesterone therapy: historical; limited evidence; not routinely recommended"],
    surgical:[
      {name:"Endoscopic APC (argon plasma coagulation)",when:"Active bleeding or identified lesion on colonoscopy/EGD/enteroscopy",notes:"Non-contact thermal therapy; argon gas + electrical current coagulates vessels; 85% initial hemostasis; outpatient or inpatient; repeat for recurrence"},
      {name:"Balloon-assisted enteroscopy + APC",when:"Small bowel angiodysplasia identified on capsule endoscopy",notes:"Single or double-balloon enteroscopy allows therapeutic access to small bowel; APC or clips"},
      {name:"IR embolization",when:"Active bleed with angiographic 'blush'; failed endoscopy",notes:"Super-selective catheterization; coil or particle embolization; bowel ischemia risk ~5%"},
      {name:"Surgical resection",when:"Recurrent large-volume bleed; multiple lesions; failed endoscopy and IR",notes:"Right hemicolectomy for cecal/ascending colon lesions; segmental resection if localized; intra-operative enteroscopy to localize small bowel lesions"}
    ]
  },
  technique:{
    title:"Endoscopic Argon Plasma Coagulation (APC) of Angiodysplasia",
    prep:[
      "Localize the lesion (colonoscopy / EGD; capsule ± enteroscopy for the small bowel); correct anemia and coagulopathy",
      "Consent for perforation and bleeding; APC is a non-contact thermal therapy",
      "Standard endoscopy set-up with an APC unit, argon supply and a grounding pad on the patient"
    ],
    steps:[
      {n:1,t:"Identify the lesion",d:"Find the cherry-red flat vascular tuft; clean the field so the target is clearly seen"},
      {n:2,t:"Position the probe",d:"Advance the APC catheter to within a few millimeters of the lesion — non-contact; do not touch the mucosa"},
      {n:3,t:"Apply argon coagulation",d:"Short pulses of argon-plasma energy paint the lesion white; work from the periphery toward the center of larger lesions"},
      {n:4,t:"Avoid deep injury",d:"Keep pulses brief and superficial, especially in the thin-walled cecum and right colon, to avoid a transmural burn or perforation"},
      {n:5,t:"Treat all lesions",d:"Systematically treat every visible lesion — angiodysplasia is often multiple"},
      {n:6,t:"Aftercare and follow-up",d:"Continue iron replacement; warn of a 30–40% rebleed rate; repeat APC if bleeding recurs; consider octreotide/thalidomide or valve replacement for Heyde's in refractory disease"}
    ],
    pearls:[
      "Keep it non-contact and superficial — the right colon wall is thin and perforates easily",
      "Treat every lesion; missing additional lesions is a common cause of rebleeding",
      "In aortic stenosis with recurrent bleeding (Heyde's), aortic valve replacement stops the bleeding"
    ]
  },
  guidelines:[
    {src:"BSG Obscure Gastrointestinal Bleeding Guidelines 2021"},
    {src:"ESGE Small Bowel Endoscopy Guidelines 2020"},
    {src:"ACG Lower GI Bleeding Guidelines 2023"}
  ],
  pearls:[
    "Always consider Heyde's syndrome in elderly patients with aortic stenosis and recurrent GI bleed — AVR/TAVR stops the bleeding",
    "Capsule endoscopy is the most effective investigation for small bowel angiodysplasia — use after negative EGD + colonoscopy",
    "APC is safe, effective, and repeatable — most patients require multiple treatment sessions",
    "Iron-deficiency anemia in an elderly patient without obvious cause = obscure GI bleed workup (capsule endoscopy)"
  ],
  mistakes:[
    "Not investigating elderly patients with unexplained iron-deficiency anemia — occult angiodysplasia is a treatable cause",
    "Performing surgical resection without intra-operative enteroscopy — missing additional small bowel lesions leads to re-operation",
    "Not addressing Heyde's syndrome — GI bleeding persists until aortic valve is replaced"
  ]
},

// ─────────────────────────────────────────────────────────────────────
// 10. SMALL BOWEL TUMORS
// ─────────────────────────────────────────────────────────────────────
{
  id:"small-bowel-tumours", dept:"colorectal", name:"Small Bowel Tumors", latin:"Neoplasma intestini tenuis", organ:"Small bowel",
  severity:"medium", tags:["small bowel tumor","adenocarcinoma","GIST","Whipple","duodenum","imatinib","small bowel obstruction"],
  hero:"Rare tumors accounting for <5% of GI cancers despite representing 90% of mucosal surface; most arise in the duodenum; adenocarcinoma and NETs each account for ~40%; Whipple's for resectable duodenal adenocarcinoma; imatinib for GIST.",
  keypoints:[
    "Small bowel tumors are rare but diagnosis is often delayed — 'great masquerader' of GI disease; mean symptom-to-diagnosis delay 6–12 months",
    "Adenocarcinoma most common in duodenum (55–80% of small bowel adenocarcinomas); GIST and NET more common in jejunum/ileum",
    "p53 and KRAS mutations involved in >50% of small bowel adenocarcinomas — same pathway as colorectal cancer",
    "Risk factors: Crohn's disease (150× increased risk), celiac disease, FAP (duodenal adenoma), Lynch syndrome, Peutz-Jeghers syndrome",
    "Whipple's (pancreaticoduodenectomy) for resectable periampullary/duodenal adenocarcinoma; segmental resection for jejunoileal",
    "GIST: imatinib (tyrosine kinase inhibitor targeting c-KIT) — neoadjuvant to downsize or adjuvant for high-risk lesions"
  ],
  differentials:[
    "Crohn's disease stricture (IBD history, skip lesions, transmural inflammation — may co-exist with adenocarcinoma)",
    "Adhesional small bowel obstruction (prior surgery, CT shows transition point at adhesion site)",
    "External hernia causing obstruction (check hernial orifices)",
    "Meckel's diverticulum (heterotopic gastric mucosa, intussusception lead point in children)",
    "Carcinoid / NET (flush, diarrhea, elevated 5-HIAA, serotonin — appendix most common site)",
    "Lymphoma (often jejunoileal; constitutional symptoms; CT shows bulky mesenteric lymphadenopathy)",
    "Duodenal ulcer (PUD history; PPIs; Helicobacter pylori positive)"
  ],
  mnemonics:[
    {name:"Small Bowel Tumor Types — GALS",text:"GIST + Adenocarcinoma + Lymphoma + NET (carcinoid) + Sarcoma — adenocarcinoma and NETs each 40%; GIST 10–15%; lymphoma 10%"}
  ],
  overview:{
    definition:"Primary neoplasms arising from the small intestinal mucosa, submucosa, or wall; includes adenocarcinoma, gastrointestinal stromal tumors (GIST), neuroendocrine tumors (NET), lymphoma, and sarcoma.",
    epidemiology:"UK incidence 2–3/100,000/year; <5% of GI cancers. Despite representing >90% of mucosal surface and 75% of GI length. Most common site: duodenum (55–80%). Mean age at diagnosis: 66 years. 35% present with metastatic disease.",
    pathophysiology:"Adenocarcinoma: adenoma-carcinoma sequence (similar to colorectal) involving APC, KRAS, p53. GIST: activating mutations in c-KIT (80%) or PDGFRA (10%) → uncontrolled receptor tyrosine kinase signalling. NET: arise from enterochromaffin cells → serotonin production → carcinoid syndrome if hepatic metastases present. Lymphoma: mostly MALT-type; associated with celiac disease (EATL).",
    classification:[
      {label:"Adenocarcinoma (~40%)",note:"Duodenum most common; Whipple's if resectable; poor prognosis (5-year survival 20–30%)"},
      {label:"NET / Carcinoid (~40%)",note:"Ileum most common for functioning NETs; somatostatin analogues; resect if localized"},
      {label:"GIST (~10–15%)",note:"CD117/c-KIT positive; imatinib neoadjuvant/adjuvant; surgical resection first-line"},
      {label:"Lymphoma (~10%)",note:"Usually jejunoileal; chemotherapy ± surgery for obstruction/perforation"}
    ]
  },
  diagnosis:{
    history:[
      "Vague, non-specific abdominal pain — often delayed diagnosis",
      "Intermittent partial small bowel obstruction: colicky pain, distension, vomiting, resolution",
      "GI bleeding: hematochezia, melena, or iron-deficiency anemia",
      "Weight loss, anorexia, cachexia (advanced disease)",
      "Jaundice (periampullary/duodenal tumor obstructing CBD)",
      "Carcinoid syndrome: flushing, diarrhea, wheeze, right heart disease (only with hepatic metastases)",
      "Background: Crohn's disease, celiac disease, FAP, Lynch syndrome"
    ],
    examination:[
      "Palpable abdominal mass (25% of cases at presentation)",
      "Signs of intestinal obstruction: distension, tinkling bowel sounds",
      "Jaundice + palpable gallbladder (Courvoisier's — periampullary tumor)",
      "Hepatomegaly (metastatic disease)",
      "Cachexia, peripheral lymphadenopathy (lymphoma)"
    ],
    investigations:[
      {name:"EGD (upper GI endoscopy)",role:"Duodenal tumors — direct visualization, biopsy; periampullary assessment; EUS for depth/nodal staging"},
      {name:"CT chest/abdomen/pelvis with IV contrast",role:"Primary tumor, local invasion, mesenteric nodes, hepatic metastases, peritoneal disease — TNM staging"},
      {name:"MRI enterography / CT enterography",role:"Mucosal detail of entire small bowel; best for Crohn's vs. tumor differentiation; jejunal/ileal lesions"},
      {name:"Capsule endoscopy",role:"Occult GI bleed + negative EGD/colonoscopy — detects small mucosal lesions; contraindicated if obstruction risk"},
      {name:"Balloon-assisted enteroscopy",role:"Direct visualization and biopsy of jejunoileal lesions; therapeutic (stenting, hemostasis)"},
      {name:"Serum 5-HIAA, chromogranin A, gut hormones",role:"NETs: 24-h urinary 5-HIAA (serotonin metabolite); CgA elevated; specific hormone assay for functional tumors"},
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
    conservative:["Nutritional support: nutritional optimization pre-operatively (oral supplements, NJ feeding if obstructed)","Symptom management in palliative setting: octreotide for carcinoid syndrome/bowel obstruction","Stent: duodenal self-expanding stent for unresectable duodenal/periampullary obstruction"],
    medical:["Adjuvant chemotherapy: node-positive adenocarcinoma — FOLFOX or CAPOX (extrapolated from colorectal data)","Imatinib (Glivec): GIST — adjuvant for high-risk (>5 cm, >5 mitoses/50 HPF, rupture); neoadjuvant to downsize borderline-resectable GIST","Somatostatin analogues (octreotide/lanreotide): NETs — symptom control and anti-proliferative; monthly depot injection","Chemotherapy for lymphoma: CHOP-based regimens; surgery for obstruction/perforation only","Pembrolizumab: mismatch repair-deficient small bowel adenocarcinoma — high response rates"],
    surgical:[
      {name:"Segmental small bowel resection",when:"Jejunoileal adenocarcinoma, GIST, localized NET",notes:"5–10 cm margins; mesenteric node clearance; primary anastomosis; laparoscopic if feasible"},
      {name:"Pancreaticoduodenectomy (Whipple's)",when:"Resectable duodenal or periampullary adenocarcinoma",notes:"Removes duodenum + head of pancreas + distal stomach + gallbladder + CBD; reconstruction: hepaticojejunostomy + pancreaticojejunostomy + gastrojejunostomy; pancreatic fistula is most serious complication"},
      {name:"Endoscopic mucosal/submucosal resection (EMR/ESD)",when:"Small (<2 cm), superficial duodenal adenoma or early T1 adenocarcinoma",notes:"Endoscopic resection via EGD; close endoscopic surveillance after; avoid if submucosal invasion"},
      {name:"Right hemicolectomy (for terminal ileum NET)",when:"Terminal ileal carcinoid/NET with mesenteric nodal involvement",notes:"Includes right colon + terminal ileum + mesenteric nodes; primary anastomosis"},
      {name:"Cytoreductive surgery + hepatic resection",when:"NET with liver metastases — debulking if ≥90% tumor burden can be removed",notes:"Improves carcinoid syndrome; hormonal control; combined with PRRT in selected cases"}
    ]
  },
  technique:{
    title:"Segmental Small Bowel Resection with Anastomosis",
    prep:[
      "Staging CT and histology where possible; optimize nutrition; mark a stoma site if there is any risk of a stoma",
      "GA; supine; catheter and NG; prophylactic antibiotics and VTE prophylaxis",
      "Laparoscopic or open depending on tumor size, location and surgeon experience"
    ],
    steps:[
      {n:1,t:"Explore and localize",d:"Run the whole small bowel from DJ flexure to cecum; identify the tumor and any second lesion; assess liver and peritoneum for metastases"},
      {n:2,t:"Plan the resection",d:"Choose proximal and distal transection points with adequate margins (~5–10 cm) and a wedge of mesentery for the draining nodes"},
      {n:3,t:"Divide the mesentery",d:"Score the mesentery and ligate/seal vessels down to the bowel wall, taking the lymphovascular pedicle for oncological clearance"},
      {n:4,t:"Resect the segment",d:"Divide the bowel proximally and distally (linear staplers or clamps) and remove the specimen; orient it for pathology"},
      {n:5,t:"Anastomosis",d:"Restore continuity with a tension-free, well-perfused stapled or hand-sewn anastomosis; close the mesenteric defect to prevent internal herniation"},
      {n:6,t:"Match operation to tumor",d:"Confirm hemostasis and anastomotic integrity; a terminal-ileal NET needs a right hemicolectomy, and a duodenal/periampullary adenocarcinoma needs a pancreaticoduodenectomy (Whipple's), not a segmental resection"}
    ],
    pearls:[
      "Take the mesenteric lymphovascular pedicle — nodal clearance matters for staging and cure",
      "Close the mesenteric defect to prevent an internal hernia",
      "Match the operation to the tumor: terminal-ileal NET → right hemicolectomy; duodenal adenocarcinoma → Whipple's"
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
    "Not biopsying duodenal lesions on EGD — visual appearance is unreliable; histology mandatory",
    "Imatinib resistance assumed to be primary failure — check for c-KIT exon 9 mutation (requires higher dose 800 mg/day) or PDGFRA D842V (avapritinib)"
  ]
}

]; // end window._TMP_TMS
