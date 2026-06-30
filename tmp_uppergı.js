// Upper GI diseases (18 diseases)
window._TMP_UPPGI = [
{
  id:"peptic-ulcer", dept:"uppergı", name:"Perforated Peptic Ulcer", latin:"Ulcus pepticum perforatum", organ:"Stomach/Duodenum",
  severity:"high", tags:["ulcer","perforation","peritonitis","Helicobacter","Graham patch","omental patch"],
  hero:"Free perforation of a gastric or duodenal ulcer causing sudden-onset peritonitis; a surgical emergency with mortality 5–10% if treated promptly.",
  keypoints:[
    "Duodenal perforation (70%) > gastric perforation (30%); posterior DU bleeds (GDA), anterior DU perforates",
    "Sudden-onset severe epigastric pain → generalized peritonitis; erect CXR: free air under diaphragm (75%)",
    "CT abdomen is gold standard if CXR equivocal: free air, peri-duodenal fluid, fat stranding",
    "Graham (omental) patch repair: primary closure with omental patch; laparoscopic or open; H. pylori eradication",
    "Non-operative management (Taylor method): selected patients with contained leak; high failure rate"
  ],
  differentials:["Acute pancreatitis","Perforated colon (diverticulitis)","Mesenteric ischemia","Ruptured AAA","Perforated gastric cancer"],
  mnemonics:[{name:"Anterior vs Posterior DU",text:"Anterior duodenal ulcer PERFORATES (peritoneum in front). Posterior duodenal ulcer BLEEDS (gastroduodenal artery behind). Same for gastric ulcers on lesser curve"}],
  overview:{
    definition:"Full-thickness breach of the gastric or duodenal wall allowing spillage of contents into the peritoneal cavity.",
    epidemiology:"Incidence 5–14/100 000/year; decreasing with H. pylori eradication and PPIs. M:F = 2:1. NSAID use and H. pylori major risk factors.",
    pathophysiology:"H. pylori infection or NSAID use → mucosal defense impairment → ulceration → full-thickness erosion → perforation → chemical peritonitis initially (gastric acid) → bacterial peritonitis (6–12 h). Posterior wall ulcers penetrate into pancreas causing pancreatitis.",
    classification:[
      {label:"Duodenal ulcer perforation",note:"Anterior first part duodenum; most common; peritoneum free; omental patch repair"},
      {label:"Gastric ulcer perforation",note:"Lesser curve; must exclude malignancy (biopsy edge); subtotal gastrectomy if malignant"},
      {label:"Giant ulcer (>2 cm)",note:"Higher failure rate of primary repair; resection may be required"},
      {label:"Posterior penetration (not perforation)",note:"Penetrates into pancreas; presents as pancreatitis; no free air"}
    ]
  },
  diagnosis:{
    history:["Sudden-onset severe epigastric pain (worst of life)","Rapid generalization to whole abdomen","Previous ulcer symptoms, NSAID use, smoking, alcohol","Rigid abdomen — guarding, rebound","Relative improvement after 6 h (chemical → bacterial peritonitis)"],
    examination:["Board-like rigidity of abdomen","Generalized tenderness, rebound","Tachycardia, low-grade fever initially","Absent bowel sounds","Shoulder tip pain (diaphragmatic irritation)"],
    investigations:[
      {name:"Erect CXR",role:"Free air under diaphragm in 75%; absent in 25% (small perforation, patient in left lateral)"},
      {name:"CT abdomen/pelvis (IV contrast)",role:"Gold standard: free air (even small amounts), peri-gastric/duodenal fluid, fat stranding, site of perforation; exclude other causes"},
      {name:"CBC, CRP, amylase, lactate",role:"Amylase up to 3× ULN in perforation (absorbed from peritoneum); WBC elevated; lactate if septic shock"},
      {name:"Erect AXR",role:"Subdiaphragmatic free air; less sensitive than CT; supplement with CT"}
    ]
  },
  criteria:{
    title:"Boey Score (Operative Risk Stratification)",
    items:[
      {k:"Confounding medical illness",v:"1 point"},
      {k:"Preoperative shock (SBP <90 mmHg)",v:"1 point"},
      {k:"Perforation >24 hours duration",v:"1 point"},
      {k:"Score 0",v:"Mortality <1%; all surgical approaches appropriate"},
      {k:"Score 1",v:"Mortality 10%"},
      {k:"Score 2",v:"Mortality 45%"},
      {k:"Score 3",v:"Mortality >100% — best supportive care vs damage control"}
    ]
  },
  scoring:[{name:"Boey Score",items:["Confounding illness + Shock + >24 h → score 0-3; guides mortality prediction and operative approach"]}],
  management:{
    conservative:["IV fluid resuscitation","IV PPI: omeprazole 40 mg BD","IV antibiotics: piperacillin-tazobactam","NG decompression","Urinary catheter; close monitoring"],
    medical:["H. pylori testing (CLO test or histology at time of surgery or post-op serology)","H. pylori eradication: triple therapy post-operatively","PPI maintenance indefinitely for NSAID-associated ulcers"],
    surgical:[
      {name:"Laparoscopic Graham patch (omental patch) repair",when:"Most perforated DU; perforation <2 cm; experienced laparoscopic surgeon; no massive contamination",notes:"Irrigate; close perforation with absorbable sutures (or leave open with omental plug); reinforce with omental pedicle; washout; drain; H. pylori eradication post-op"},
      {name:"Open Graham patch repair",when:"Laparoscopy not available/suitable; large perforation; massive contamination; hemodynamic instability",notes:"Kocher maneuver; identify perforation; two-layer closure; omental reinforce; thorough washout; drain"},
      {name:"Gastric resection (partial gastrectomy / Billroth I/II)",when:"Large gastric perforation; gastric malignancy suspected; failed primary repair",notes:"Biopsy all gastric perforations — exclude malignancy; if malignant: formal oncological resection"},
      {name:"Non-operative (Taylor method)",when:"Contained perforation; abscess on CT; fit patient, no generalized peritonitis; evolving rarely",notes:"NG decompression; IV antibiotics; PPI; serial CT; 30% failure rate requiring delayed surgery"}
    ]
  },
  technique:{
    title:"Laparoscopic Graham Patch Repair",
    prep:["GA; supine; 3–4 ports: umbilical camera, epigastric working, LUQ working, optional right lateral","Thorough IV antibiotics; NG tube","Head-up position"],
    steps:[
      {n:1,t:"Peritoneal lavage",d:"Aspirate all contaminated fluid; 5–6 L warm saline washout systematically"},
      {n:2,t:"Identify perforation",d:"Locate in anterior first part of duodenum; measure size; assess surrounding tissue quality"},
      {n:3,t:"Closure",d:"2-0 absorbable interrupted sutures (Vicryl); 2–3 sutures across perforation; do not tie yet"},
      {n:4,t:"Omental plug",d:"Mobilize omental pedicle; place over defect; tie sutures over omentum (not tight)"},
      {n:5,t:"Test repair",d:"Ask anesthetist to inject air via NG tube with suction on abdomen — test for leak"},
      {n:6,t:"Final washout and drain",d:"Systematic right and left upper quadrant and pelvis washout; drain near repair; deflate and close"}
    ],
    pearls:["Large perforation (>2 cm): consider open or T-tube duodenostomy; primary repair + omentum may fail","Gastric perforation: always biopsy — 10% are gastric cancer; frozen section if possible","H. pylori eradication: test and treat — reduces recurrence from 60% to <5%","Washout quality correlates with infection complications — minimum 5 L of warm saline"]
  },
  guidelines:[{src:"WSES Perforated Peptic Ulcer Guidelines 2020"},{src:"NICE PU CG184 2014 (updated)"},{src:"BSG H. pylori Guidelines 2019"}],
  pearls:["Laparoscopic repair equivalent to open for perforation <2 cm (RCT evidence)","H. pylori eradication post-op: reduces recurrence from 60% to <5% — mandatory testing","Boey score 0 = <1% mortality; score 3 = >100% — inform families and consider palliation in frail patients","Gastric ulcer: always biopsy edges — cancer in 10%; failure to biopsy = missed diagnosis"],
  mistakes:["Not biopsying gastric ulcer perforation — 10% are malignant","Not testing and eradicating H. pylori post-repair — 60% recurrence without it","Tight omental suture causing omental ischemia — tie loosely over omentum","Inadequate peritoneal washout — infected fluid in Morrison's pouch and pelvis causes abscesses"]
},
{
  id:"gastric-cancer", dept:"uppergı", name:"Gastric Cancer", latin:"Carcinoma ventriculi", organ:"Stomach",
  severity:"high", tags:["stomach","adenocarcinoma","Helicobacter","D2","total gastrectomy","FLOT","Lauren"],
  hero:"Adenocarcinoma of the stomach, often presenting at advanced stage in Western countries; D2 lymphadenectomy and perioperative FLOT chemotherapy are standard of care.",
  keypoints:[
    "5th most common cancer globally; H. pylori accounts for 70% of non-cardia gastric cancer",
    "Lauren classification: intestinal type (differentiated, better prognosis, antrum, H. pylori) vs diffuse type (poorly differentiated, linitis plastica, younger, worse prognosis)",
    "CT staging + staging laparoscopy (for T3/T4) mandatory before surgery — peritoneal disease in 10–20%",
    "Perioperative FLOT (docetaxel + oxaliplatin + leucovorin + 5-FU) superior to ECF/ECX (FLOT4 trial): 5-year OS 45% vs 36%",
    "D2 lymphadenectomy: minimum 16 nodes; reduces locoregional recurrence; mandatory in curative intent surgery"
  ],
  differentials:["GIST (gastrointestinal stromal tumor — submucosal, CD117+)","Gastric lymphoma (MALToma)","Metastatic cancer to stomach (melanoma, breast)","Benign gastric ulcer","Menetrier disease"],
  mnemonics:[{name:"Lauren Classification",text:"Intestinal: H. pylori, antrum, differentiated, better prognosis. Diffuse: signet ring cells, linitis plastica, younger women, worse prognosis, not H. pylori driven. Diffuse = Dreaded prognosis"}],
  overview:{
    definition:"Malignant epithelial tumor arising from the gastric mucosa; 90–95% adenocarcinoma.",
    epidemiology:"5th commonest cancer worldwide; 3rd commonest cancer death. High incidence: East Asia, South America, Eastern Europe. H. pylori in 70%; EBV in 10%; smoking, salt-preserved food.",
    pathophysiology:"H. pylori chronic gastritis → intestinal metaplasia → dysplasia → intestinal-type adenocarcinoma (Correa cascade). Diffuse type: CDH1 (E-cadherin) mutation → loss of cell adhesion → diffuse infiltration → linitis plastica. HER2 overexpression in 15–20%.",
    classification:[
      {label:"Lauren intestinal",note:"Glandular, cohesive; antrum; associated with H. pylori and intestinal metaplasia; better prognosis; responds to surgery"},
      {label:"Lauren diffuse",note:"Poorly cohesive signet ring cells; infiltrating; linitis plastica; CDH1 mutation; poor prognosis; chemo response lower"},
      {label:"Proximal (cardia) cancer",note:"Adenocarcinoma of gastro-esophageal junction or cardia; associated with Barrett's, obesity, reflux; different staging (Siewert)"}
    ]
  },
  diagnosis:{
    history:["Dysphagia (proximal)","Early satiety (linitis plastica)","Weight loss, anorexia, cachexia","Epigastric pain","Dyspepsia unresponsive to PPI","Iron-deficiency anemia, melena"],
    examination:["Epigastric mass (palpable in advanced disease)","Cachexia","Virchow node (left supraclavicular — M1)","Sister Mary Joseph nodule (periumbilical)","Blumer's shelf (rectal shelf on DRE — peritoneal M1)","Krukenberg tumor (ovarian metastasis)"],
    investigations:[
      {name:"EGD + biopsy",role:"Histological diagnosis; location; depth (early vs advanced); HER2 IHC; CLO test for H. pylori"},
      {name:"CT chest/abdomen/pelvis",role:"Primary staging: T, N, M; ascites; liver metastases; peri-aortic nodes"},
      {name:"EUS",role:"T1–T2 tumors: accurate T and N staging; guides early cancer endoscopic resection vs surgery"},
      {name:"PET-CT",role:"Detects M1 disease (metabolically active lesions); intestinal type responds better; false negative in diffuse/mucinous"},
      {name:"Staging laparoscopy + cytology",role:"T3–T4 tumors: peritoneal disease in 10–20% undetected by CT; positive peritoneal cytology (CY1) = M1"},
      {name:"HER2 testing (IHC ± ISH)",role:"HER2 positive (3+): eligible for trastuzumab (ToGA trial); done on all advanced/metastatic cases"},
      {name:"MSI/MMR testing",role:"MSI-H gastric cancer: pembrolizumab ± chemotherapy (KEYNOTE-811)"}
    ]
  },
  criteria:{
    title:"Siewert Classification (GEJ Tumors)",
    items:[
      {k:"Siewert I",v:"Adenocarcinoma of distal esophagus (epicenter 1–5 cm above GEJ); treated as esophageal cancer"},
      {k:"Siewert II",v:"True cardia tumor (epicenter 1 cm above to 2 cm below GEJ); total gastrectomy ± lower esophagectomy"},
      {k:"Siewert III",v:"Subcardial gastric cancer (epicenter 2–5 cm below GEJ); total gastrectomy + D2"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Nutritional support: enteral if possible; jejunostomy feeding if gastric outlet obstruction","H. pylori eradication if not already done"],
    medical:["Perioperative FLOT: 4 cycles pre-op + 4 cycles post-op; 5-year OS 45% (FLOT4 trial)","Metastatic: FLOT or FOLFOX + trastuzumab (HER2+); pembrolizumab + chemo (PD-L1 CPS ≥5 — KEYNOTE-811)","Second-line: ramucirumab + paclitaxel; irinotecan","TRASTUZUMAB: HER2 IHC 3+ or ISH amplified; adds 2.7 months OS (ToGA)"],
    surgical:[
      {name:"Total gastrectomy + D2 lymphadenectomy",when:"Middle and proximal tumors; T2–T4; curative intent",notes:"D2: resect perigastric (D1) + hepatic artery, left gastric artery, celiac axis, splenic artery nodes; ≥16 nodes; Roux-en-Y reconstruction; spleen preservation if possible"},
      {name:"Subtotal (distal) gastrectomy + D2",when:"Distal third tumor with adequate proximal margin (5 cm intestinal, 2 cm diffuse)",notes:"5 cm proximal margin for intestinal; 2 cm may be inadequate for diffuse — frozen section margin mandatory; Billroth II or Roux-en-Y reconstruction"},
      {name:"Endoscopic mucosal resection (EMR) / ESD",when:"Early gastric cancer (EGC): T1a N0; well/moderately differentiated; <2 cm; no lymphovascular invasion",notes:"Curative in selected EGC; ESD preferred for larger lesions; pathological staging mandatory post-resection"},
      {name:"Palliative gastrectomy",when:"Locally advanced unresectable; bleeding not controlled endoscopically; gastric outlet obstruction",notes:"Reduces bleeding, improves nutrition; evidence for survival benefit in selected (REGATTA trial — no OS benefit in Japanese RCT but still practiced in West for symptom control"}
    ]
  },
  technique:{
    title:"Total Gastrectomy + D2 Lymphadenectomy",
    prep:["FLOT × 4 cycles completed; CT restaging","Nutritional optimization; jejunal feeding tube consideration","GA; epidural; supine; midline or upper midline incision"],
    steps:[
      {n:1,t:"Staging laparoscopy",d:"Exclude peritoneal disease before laparotomy — change to open only if no M1 disease"},
      {n:2,t:"D2 lymphadenectomy",d:"Systematic en bloc dissection: lesser and greater curvature (D1) + hepatoduodenal ligament, left gastric artery, celiac axis, splenic hilum (D2 nodes)"},
      {n:3,t:"Mobilization",d:"Divide short gastric vessels; spleen-preserving (preferred); ligate left gastric artery at root"},
      {n:4,t:"Proximal division",d:"Divide esophagus 5 cm above GOJ or to proximal margin; send frozen section"},
      {n:5,t:"Distal division",d:"Divide duodenum 2–3 cm below pylorus; staple"},
      {n:6,t:"Roux-en-Y reconstruction",d:"40–50 cm Roux limb; esophagojejunostomy (circular stapler or hand-sewn); Braun enteroenterostomy 40 cm distal"}
    ],
    pearls:["D2 without splenopancreatectomy: lower morbidity with equivalent oncological outcome (Dutch D1D2 trial)","Frozen section proximal margin: if positive → extend resection (pharyngo-laryngectomy if needed)","Esophagojejunostomy leak: most serious complication (3–5%); test all anastomoses before closure","Jejunal feeding tube: placed intra-operatively for post-op nutritional support if prolonged recovery expected"]
  },
  guidelines:[{src:"ESMO Gastric Cancer Guidelines 2022"},{src:"NCCN Gastric Cancer 2023"},{src:"FLOT4 Trial: Al-Batran et al., Lancet 2019"}],
  pearls:["FLOT4 trial: perioperative FLOT superior to ECF — now standard of care in fit patients","Staging laparoscopy: 10–20% have peritoneal disease not seen on CT — avoid futile laparotomy","D2 lymphadenectomy: minimum 16 nodes; reduces locoregional recurrence (Dutch trial)","HER2 testing mandatory in advanced disease — trastuzumab adds 2.7 months OS (ToGA trial)"],
  mistakes:["Not doing staging laparoscopy for T3–T4 disease — 10–20% have occult peritoneal disease","Only performing D1 lymphadenectomy — inadequate staging and locoregional control","Not testing and treating H. pylori — primary prevention of metachronous gastric cancer","Not checking proximal margin on frozen section — R1 proximal margin is common in diffuse-type cancer"]
},
{
  id:"gerd", dept:"uppergı", name:"Gastro-esophageal Reflux Disease", latin:"Morbus refluxus gastro-oesophagealis", organ:"Esophagus",
  severity:"low", tags:["GERD","reflux","Barrett","Nissen","fundoplication","manometry","pH study"],
  hero:"Pathological reflux of gastric contents into the esophagus causing heartburn, regurgitation, and risk of Barrett's esophagus and adenocarcinoma.",
  keypoints:[
    "Mechanism: transient lower esophageal sphincter relaxation (TLOSR) is primary cause, not just LOS incompetence",
    "Barrett's esophagus: columnar metaplasia of distal esophagus; intestinal metaplasia = Barrett's; progresses to dysplasia → adenocarcinoma (0.2–0.5%/year)",
    "Investigation: EGD (grade reflux esophagitis, biopsy Barrett's); 24-h pH-impedance study (off PPI) for diagnosis confirmation; manometry pre-fundoplication",
    "Nissen fundoplication: 360° wrap; effective for GERD; requires normal esophageal motility; Toupet (270°) if esophageal dysmotility",
    "LINX device: magnetic sphincter augmentation; reversible alternative to fundoplication"
  ],
  differentials:["Achalasia (dysphagia, regurgitation, dilated esophagus)","Esophageal cancer","Peptic ulcer disease","Functional heartburn (normal pH study)","Eosinophilic esophagitis"],
  mnemonics:[{name:"Los Angeles Classification",text:"A=erosions <5mm; B=erosions >5mm; C=confluent erosions <75% circumference; D=confluent erosions ≥75% circumference. C/D = severe; consider surgery if medically refractory"}],
  overview:{
    definition:"Condition in which reflux of gastric contents into the esophagus causes troublesome symptoms and/or complications.",
    epidemiology:"Prevalence 10–20% of Western adults; highest in obesity, hiatus hernia, pregnancy. Barrett's esophagus in 10–15% of GERD patients.",
    pathophysiology:"Transient LOS relaxations (vagal reflex) → gastric acid and bile reflux → esophageal mucosal injury. Hiatus hernia impairs anti-reflux mechanism (crural diaphragm, angle of His, LOS). Prolonged exposure → squamous → columnar metaplasia (Barrett's) → intestinal metaplasia → dysplasia → adenocarcinoma.",
    classification:[
      {label:"Non-erosive GERD (NERD)",note:"Typical symptoms; no mucosal injury on EGD (60%); symptoms may not correlate with pH"},
      {label:"Erosive esophagitis (LA A–D)",note:"Mucosal erosions; severity correlates with treatment response"},
      {label:"Barrett's esophagus",note:"≥1 cm columnar-lined esophagus with intestinal metaplasia; premalignant; surveillance required"}
    ]
  },
  diagnosis:{
    history:["Heartburn (substernal burning, worse post-prandial)","Regurgitation of acid/food","Dysphagia (stricture, cancer, dysmotility)","Atypical: cough, hoarseness, dental erosion, asthma","Alarm symptoms: dysphagia, weight loss, anemia, vomiting → EGD urgently"],
    examination:["Usually normal","Obese; dental erosions (chronic reflux)"],
    investigations:[
      {name:"EGD + biopsy",role:"Grades reflux esophagitis (LA A–D); identifies Barrett's (biopsy 4-quadrant every 2 cm); excludes malignancy"},
      {name:"24-h pH-impedance monitoring (off PPI × 7 days)",role:"Gold standard for acid exposure quantification; DeMeester score >14.72; identifies non-acid reflux (impedance)"},
      {name:"Esophageal manometry (HRM — high-resolution manometry)",role:"Mandatory pre-fundoplication: identifies esophageal dysmotility (contraindication to Nissen); measures LOS pressure; exclude achalasia"},
      {name:"Barium swallow",role:"Hiatus hernia morphology; stricture; anatomy pre-surgery"},
      {name:"Gastric emptying study",role:"Delayed emptying (gastroparesis) causes GERD; modifies surgical plan"}
    ]
  },
  criteria:{
    title:"Barrett's Esophagus Surveillance",
    items:[
      {k:"No dysplasia",v:"EGD + 4-quadrant biopsy every 2 cm: 2-yearly (long segment ≥3 cm); 3–5 yearly (short segment <3 cm)"},
      {k:"Low-grade dysplasia (LGD)",v:"Expert pathologist confirmation; 6-monthly EGD ± ablation (RFA)"},
      {k:"High-grade dysplasia (HGD)",v:"Expert center; endoscopic mucosal resection (EMR) of visible lesion; ablation (RFA) of flat HGD"},
      {k:"T1a intramucosal cancer",v:"EMR ± ablation if resection margins R0 and no LVI; T1b → surgery or chemoradiotherapy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Lifestyle: weight loss, elevate head of bed, avoid late meals, reduce alcohol/caffeine/fatty food","Small frequent meals; avoid tight clothing"],
    medical:["PPI (omeprazole 20–40 mg OD, taken 30 min before breakfast): first-line; heals 80–90% of erosive esophagitis","H2 receptor antagonists: for breakthrough or nighttime symptoms","Alginate (Gaviscon): mechanical barrier; adjunct","Long-term PPI: Barrett's surveillance on PPI; lowest effective dose"],
    surgical:[
      {name:"Laparoscopic Nissen fundoplication (360°)",when:"Proven GERD on pH study; PPI-dependent; side effects of PPI; patient preference; hiatus hernia causing reflux",notes:"Complete wrap of stomach around lower esophagus; 2–3 cm wrap; crural repair; manometry required pre-op; dysphagia/gas bloat 10–20%"},
      {name:"Laparoscopic Toupet fundoplication (270° posterior wrap)",when:"GERD + esophageal dysmotility or weak peristalsis on manometry (to reduce dysphagia risk)",notes:"Partial posterior wrap; lower dysphagia rate; slightly higher reflux recurrence"},
      {name:"LINX magnetic sphincter augmentation",when:"Mild-moderate GERD; small hiatus hernia; reversible option",notes:"Magnetic titanium bead bracelet around LOS; strengthens existing LOS; reversible; avoids gas bloating of Nissen"},
      {name:"RFA (radiofrequency ablation) for Barrett's",when:"Flat LGD/HGD Barrett's; ablates columnar epithelium → squamous regeneration",notes:"Halo360 balloon catheter; ≥80% complete eradication of intestinal metaplasia; repeat sessions at 3-monthly intervals; ongoing surveillance required"},
      {name:"EMR / ESD for early cancer in Barrett's",when:"Visible lesion in Barrett's; T1a; post-staging confirmation",notes:"Endoscopic mucosal resection or endoscopic submucosal dissection; curative for T1a, N0; pathological staging mandatory"}
    ]
  },
  technique:{
    title:"Laparoscopic Nissen Fundoplication",
    prep:["Manometry confirms normal peristalsis; 24-h pH confirms acid reflux","GA; supine; 5 ports; liver retractor; steep reverse Trendelenburg"],
    steps:[
      {n:1,t:"Hiatal dissection",d:"Divide phreno-esophageal membrane; mobilize distal esophagus 3–4 cm into mediastinum; define right and left crus"},
      {n:2,t:"Short gastric vessels",d:"Divide upper short gastric vessels (harmonic) to provide floppy wrap — prevents tension"},
      {n:3,t:"Posterior cruroplasty",d:"Repair hiatal defect with 2–3 non-absorbable sutures (2-0 Ethibond); leave 1 finger breadth gap"},
      {n:4,t:"Create window",d:"Pass right hemifundus behind esophagus ('shoeshine' test — moves freely)"},
      {n:5,t:"Floppy wrap construction",d:"3 non-absorbable sutures through fundus–esophagus–fundus; 56 Fr bougie in esophagus during wrap; wrap 2–3 cm; floppy (shoe-shine test)"},
      {n:6,t:"Check wrap",d:"Advance scope — wrap should open freely; no tight sensation"}
    ],
    pearls:["Floppy wrap: shoe-shine test confirms loose wrap — reduces gas bloat syndrome","Bougie placement prevents tight wrap — 56–60 Fr for Nissen","Short gastric vessels: divide if tension on wrap — prevents wrap slippage and herniation","Posterior cruroplasty: essential in hiatus hernia repair — reduces recurrence from 40% to 10%"]
  },
  guidelines:[{src:"NICE CG184 GERD 2014 (updated 2023)"},{src:"ESGE Barrett's Esophagus Guidelines 2022"},{src:"BSG GERD Guidelines 2019"}],
  pearls:["Manometry before fundoplication: esophageal dysmotility (aperistalsis) → Toupet; normal → Nissen","Barrett's without dysplasia: 2-yearly surveillance; LGD + HGD → RFA ablation","LINX: reversible; avoids gas bloat; contraindicated with MRI exposure (now newer MRI-compatible devices available)","Short gastric vessel division: reduces risk of herniation and gas bloat in Nissen"],
  mistakes:["Nissen fundoplication in esophageal dysmotility — severe dysphagia; Toupet is safer","Not confirming GERD objectively before surgery — functional heartburn will not respond to surgery","Not dividing short gastric vessels — tension on wrap causes herniation","Operating on Barrett's without biopsy confirmation of intestinal metaplasia — not all columnar-lined esophagus is Barrett's"]
},
{
  id:"oesophageal-cancer", dept:"uppergı", name:"Esophageal Cancer", latin:"Carcinoma oesophagi", organ:"Esophagus",
  severity:"high", tags:["esophagus","dysphagia","adenocarcinoma","SCC","Ivor Lewis","McKeown","FLOT","CRT"],
  hero:"Two main histological types — SCC (proximal/mid, smoking/alcohol) and adenocarcinoma (lower third/GEJ, Barrett's/obesity); only 25–30% resectable at presentation.",
  keypoints:[
    "SCC: mid/proximal esophagus; smoking, alcohol, achalasia, caustic stricture, Plummer-Vinson; chemoradiotherapy can cure",
    "Adenocarcinoma: lower third/GEJ; Barrett's, GERD, obesity; rising incidence in Western world; perioperative chemotherapy standard",
    "Ivor Lewis esophagectomy: right thoracotomy + laparotomy; intrathoracic anastomosis; gold standard for lower third/GEJ",
    "McKeown (3-hole): cervical anastomosis + thoracic + abdominal; for mid/upper esophagus",
    "Neoadjuvant FLOT (adenocarcinoma) or CROSS (CRT: carboplatin/paclitaxel + RT) followed by surgery improves OS"
  ],
  differentials:["Benign esophageal stricture (peptic, caustic)","Achalasia","Esophageal GIST","Mediastinal lymphoma","Pharyngeal pouch"],
  mnemonics:[{name:"SCC vs Adenocarcinoma",text:"SCC: upper/mid, Smoking/alcohol, Squamous cells, Stricture (caustic/achalasia). Adenocarcinoma: lower third, Barrett's/GERD/Obesity, Adenocarcinoma, rising incidence (reversed epidemiology)"}],
  overview:{
    definition:"Malignant epithelial tumor of the esophagus — adenocarcinoma (lower third, associated with Barrett's) or squamous cell carcinoma (upper/mid, associated with smoking/alcohol).",
    epidemiology:"SCC: commonest globally (Asia, Africa, Eastern Europe); adenocarcinoma: rising rapidly in West (now 65% of UK esophageal cancers); overall 5-year survival 15–25%.",
    pathophysiology:"SCC: chronic mucosal injury (smoking, alcohol, achalasia) → squamous dysplasia → SCC. Adenocarcinoma: H. pylori, GERD → Barrett's (intestinal metaplasia) → LGD → HGD → T1a → T1b → invasive adenocarcinoma (CDH1, TP53 mutations).",
    classification:[
      {label:"Siewert I",note:"Lower esophageal adenocarcinoma (1–5 cm above GEJ); treat as esophageal cancer"},
      {label:"Siewert II",note:"Cardia adenocarcinoma (1 cm above to 2 cm below GEJ); Ivor Lewis + extended D2 or total gastrectomy"},
      {label:"Siewert III",note:"Subcardial gastric cancer (2–5 cm below GEJ); total gastrectomy + D2"}
    ]
  },
  diagnosis:{
    history:["Progressive dysphagia (solids → liquids)","Weight loss (>10% = significant)","Odynophagia","Regurgitation","Cough (tracheo-esophageal fistula)","Known Barrett's","Smoking, alcohol, caustic injury"],
    examination:["Cachexia, weight loss","Cervical lymphadenopathy (N3 — unresectable)","Hepatomegaly (M1)","Supraclavicular nodes (Virchow)"],
    investigations:[
      {name:"EGD + biopsy",role:"Tissue diagnosis; location (cm from incisor); length; Barrett's changes"},
      {name:"CT chest/abdomen/pelvis",role:"T, N, M staging; aortic/tracheal invasion; celiac/M1 nodes; liver/lung metastases"},
      {name:"EUS",role:"T and N staging; most accurate for T1–T3; FNA of suspicious nodes; guides resectability"},
      {name:"PET-CT",role:"M1 staging; detects occult nodal disease; response assessment post-CROSS"},
      {name:"Bronchoscopy",role:"Mid-esophageal SCC: assess trachea-bronchial invasion (contraindication to resection)"},
      {name:"Staging laparoscopy",role:"GEJ/cardia tumors: peritoneal disease; positive cytology = M1"},
      {name:"Nutritional assessment, PFTs, cardiac",role:"Operability assessment — Ivor Lewis requires fit patient; FEV1 >1.5 L"}
    ]
  },
  criteria:{
    title:"Resectability Criteria",
    items:[
      {k:"Resectable",v:"T1–T4a, N0–N3, M0; no aortic/tracheal invasion; fit patient (pulmonary, cardiac, nutritional)"},
      {k:"Unresectable",v:"T4b (aorta, trachea, heart); M1 (liver, lung, peritoneal); cervical SCC — CRT preferred"},
      {k:"Borderline",v:"Involved M nodes (celiac for lower third); neoadjuvant then reassess"},
      {k:"SCC cervical/upper third",v:"Definitive CRT preferred over surgery (FFCD 9901)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Nutritional support: jejunostomy or PEJ for neoadjuvant course","Dysphagia palliation: SEMS (self-expanding metal stent); brachytherapy","ERAS protocol for surgery"],
    medical:["Adenocarcinoma: FLOT × 4 cycles pre-op + 4 cycles post-op (FLOT4)","SCC: CROSS protocol — carboplatin + paclitaxel × 5 cycles + RT 41.4 Gy; then surgery (CROSS trial)","SCC cervical/upper: definitive CRT (50.4 Gy + concurrent cisplatin/5-FU) — surgery salvage only","Advanced: FOLFOX ± nivolumab (CheckMate 649); pembrolizumab (PD-L1 CPS ≥10 — KEYNOTE-590)"],
    surgical:[
      {name:"Ivor Lewis esophagectomy",when:"Lower third adenocarcinoma; Siewert I/II; most common approach",notes:"Laparotomy (gastric conduit) + right thoracotomy (esophageal dissection + intrathoracic anastomosis); 2-field lymphadenectomy; 5 cm margins"},
      {name:"McKeown (3-hole) esophagectomy",when:"Mid/upper esophageal SCC; long tumor requiring high resection; cervical anastomosis",notes:"Right thoracotomy + laparotomy + left cervical incision; 3-field lymphadenectomy (cervical + mediastinal + abdominal)"},
      {name:"Minimally invasive esophagectomy (MIO)",when:"All resectable esophageal cancers; thoracoscopy + laparoscopy or robotic; equivalent oncology",notes:"Lower pulmonary complications; faster recovery; hybrid (laparoscopic + open thoracotomy) acceptable; TIME trial"},
      {name:"Palliative SEMS",when:"Unresectable; dysphagia palliation",notes:"Self-expanding metal stent; uncovered for malignant fistula; covered elsewhere; improves swallowing in 90%; perforation risk 1–3%"}
    ]
  },
  technique:{
    title:"Ivor Lewis Esophagectomy",
    prep:["CROSS/FLOT completed; CT/PET restaging","Nutritional optimization; jejunostomy tube pre-operatively if significant weight loss","FEV1 assessment; cardiac review","Two-stage procedure: abdominal (gastric conduit) + thoracic (resection + anastomosis)"],
    steps:[
      {n:1,t:"Abdominal phase",d:"Laparotomy or laparoscopy; mobilize stomach on right gastroepiploic artery; divide short gastrics, left gastric; Kocher maneuver; pyloromyotomy/pyloroplasty; form 3–4 cm wide gastric conduit"},
      {n:2,t:"Thoracic phase",d:"Right posterolateral thoracotomy (5th intercostal space) or VATS; mobilize esophagus; 5 cm proximal margin; 2-field lymphadenectomy"},
      {n:3,t:"Anastomosis",d:"Pull gastric conduit into chest; divide esophagus; circular stapler (25 mm) or hand-sewn esophagogastrostomy; drain anastomosis"},
      {n:4,t:"Chest drainage",d:"2 drains; check lung expansion; intercostal nerve block or thoracic epidural"},
      {n:5,t:"Post-op",d:"ICU; day 7 contrast swallow to confirm anastomotic integrity before oral feeding; jejunostomy feeds early"}
    ],
    pearls:["Anastomotic leak: most serious complication (5–10%); day 7 contrast swallow; if early small leak → chest drain; if large → redo or stent","Conduit ischemia: tip of gastric conduit most vulnerable; pyloroplasty reduces drainage time","Chylothorax: injury to thoracic duct; diet (medium-chain triglycerides) → re-exploration if >1 L/day","Recurrent laryngeal nerve injury: 2–3%; hoarseness; risk higher in McKeown (cervical dissection)"]
  },
  guidelines:[{src:"ESMO Esophageal Cancer Guidelines 2022"},{src:"NCCN Esophageal Cancer 2023"},{src:"CROSS Trial: van Hagen et al., NEJM 2012"}],
  pearls:["CROSS trial: neoadjuvant CRT + surgery vs surgery alone — 5-year OS 47% vs 34% (both SCC and adenocarcinoma)","FLOT vs ECF for GEJ adenocarcinoma: FLOT4 trial — 5-year OS 45% vs 36%","Minimally invasive esophagectomy: fewer pulmonary complications; equivalent oncological outcomes (TIME trial)","SCC cervical: definitive CRT equivalent survival to surgery (FFCD 9901) with preservation of esophagus"],
  mistakes:["Not assessing pulmonary function before Ivor Lewis — thoracotomy in poor FEV1 causes respiratory failure","Gastric conduit too narrow — ischemia; too wide — redundant, regurgitation; aim 3–4 cm width","Not performing pyloromyotomy/pyloroplasty — delayed gastric emptying causes aspiration","Anastomosis under tension — most common cause of anastomotic leak; ensure adequate gastric conduit length"]
},
{
  id:"achalasia", dept:"uppergı", name:"Achalasia", latin:"Achalasia oesophagi", organ:"Esophagus",
  severity:"medium", tags:["esophagus","achalasia","dysphagia","LOS","Heller","POEM","manometry"],
  hero:"Progressive neurodegenerative loss of esophageal peristalsis and failure of LOS relaxation; functional obstruction causing dysphagia, regurgitation, and aspiration.",
  keypoints:[
    "Primary achalasia: idiopathic loss of Auerbach plexus myenteric neurons; ganglion cell depletion → aperistalsis + incomplete LOS relaxation",
    "Chicago classification (HRM): Type I (classic — absent peristalsis); Type II (pan-esophageal pressurization — best response to treatment); Type III (spastic — worst prognosis)",
    "Timed barium swallow: simple assessment; esophageal emptying quantified at 1 and 5 min; monitors treatment",
    "POEM (per-oral endoscopic myotomy): equivalent to Heller myotomy; higher GERD rate without fundoplication",
    "Laparoscopic Heller myotomy + Dor fundoplication: gold standard surgical treatment; 90% 5-year relief"
  ],
  differentials:["Pseudoachalasia (malignant — paraneoplastic or infiltrating; acute onset in elderly)","Esophageal cancer","Chagas disease (South America)","Diffuse esophageal spasm","Scleroderma esophagus"],
  mnemonics:[{name:"Chicago Classification Types",text:"Type I: Classic — absent peristalsis, minimal pressurization. Type II: Pan-esophageal pressurization — BEST response to treatment. Type III: Spastic — premature contractions — WORST. All: incomplete LOS relaxation (IRP >15 mmHg)"}],
  overview:{
    definition:"Primary esophageal motility disorder characterized by failure of the LOS to relax and absence of peristalsis in the esophageal body.",
    epidemiology:"Incidence 1–2/100 000/year; prevalence 10/100 000; equal sex; peak onset 20–40 years and 70–80 years.",
    pathophysiology:"Autoimmune destruction of Auerbach plexus inhibitory neurons (NO and VIP) → loss of inhibitory control → LOS hypertonia + incomplete relaxation + aperistalsis. Esophageal dilation and sigmoid deformation in advanced disease.",
    classification:[
      {label:"Chicago Type I",note:"Classic achalasia: aperistalsis; minimal pressurization; 3–5 mmHg above gastric baseline"},
      {label:"Chicago Type II",note:"Pan-esophageal pressurization ≥20%: best response to treatment"},
      {label:"Chicago Type III",note:"Spastic achalasia (vigorous): premature spastic contractions >20%; poorest prognosis; POEM preferred"}
    ]
  },
  diagnosis:{
    history:["Dysphagia to both solids AND liquids (early distinction from mechanical obstruction)","Regurgitation of undigested food (no acid taste — not reflux)","Weight loss","Nocturnal cough, aspiration","Chest pain (spasms in Type III)","Prolonged gradual onset (years — vs pseudoachalasia: weeks)"],
    examination:["Usually normal","Halitosis (esophageal retention)","Weight loss in advanced disease"],
    investigations:[
      {name:"EGD",role:"Dilated esophagus; retained saliva; 'pop' at GEJ as scope passes; exclude malignancy/pseudoachalasia"},
      {name:"Barium swallow",role:"Bird-beak appearance (smooth tapering at GEJ); esophageal dilation; corkscrew (Type III)"},
      {name:"High-resolution esophageal manometry (HRM)",role:"Gold standard: elevated IRP (integrated relaxation pressure >15 mmHg); aperistalsis; Chicago classification; essential before treatment"},
      {name:"CT chest/abdomen",role:"Exclude pseudoachalasia (GEJ mass or mediastinal adenopathy)"},
      {name:"Timed barium swallow",role:"Column height at 1 and 5 minutes; monitors treatment response"}
    ]
  },
  criteria:{
    title:"Chicago Classification IRP Thresholds",
    items:[
      {k:"Elevated IRP (>15 mmHg)",v:"Impaired EGJ outflow — key diagnostic criterion"},
      {k:"Absent peristalsis (Type I/II)",v:"All swallows failed; Type II adds pan-esophageal pressurization ≥20%"},
      {k:"Spastic achalasia (Type III)",v:"≥20% premature contractions (DL<4.5 s)"},
      {k:"EGJ outflow obstruction",v:"Elevated IRP + preserved/weak peristalsis — may progress to achalasia or secondary cause"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Supportive: eat slowly; upright position; carbonated beverages (belching aids)","Not curative; all achalasia requires definitive treatment"],
    medical:["Calcium channel blockers (nifedipine) / nitrates: reduce LOS pressure; temporary; 50–70% symptom improvement; not durable","Botulinum toxin injection: endoscopic injection into LOS; 80% initial response; 50% at 6 months; recurrence nearly universal; for elderly/high-risk surgical candidates"],
    surgical:[
      {name:"Pneumatic balloon dilation (PD)",when:"Good surgical risk but patient preference for non-surgical; Type I/II; repeat dilations feasible",notes:"30–40 mm balloon; 1–3 sessions; 80% initial response; 50% remain symptom-free at 5 years; 1–5% perforation risk; GERD occurs"},
      {name:"Laparoscopic Heller myotomy + Dor fundoplication",when:"Definitive surgical treatment; Type I/II achalasia; failure of PD; young patient",notes:"6 cm esophageal myotomy + 2 cm gastric extension; Dor (anterior 180°) partial fundoplication reduces GERD; 85–90% success at 5 years"},
      {name:"POEM (per-oral endoscopic myotomy)",when:"Type III (spastic); failed Heller; any type in expert hands; equal efficacy to Heller",notes:"Endoscopic submucosal tunnel; division of inner circular muscle; no fundoplication → higher GERD (50%) → mandatory PPI + pH follow-up; growing first-line evidence (European Achalasia Trial II)"},
      {name:"Esophagectomy",when:"End-stage achalasia (massively dilated sigmoid esophagus); failed multiple treatments; malignant transformation",notes:"Ivor Lewis or transhiatal; high morbidity; last resort; long segment Barrett's/cancer complicating achalasia"}
    ]
  },
  technique:{
    title:"Laparoscopic Heller Myotomy + Dor Fundoplication",
    prep:["HRM confirms diagnosis and type","EGD excludes malignancy","GA; supine or Lloyd-Davies; 5 ports; 30° scope"],
    steps:[
      {n:1,t:"Hiatal dissection",d:"Open gastrohepatic ligament; retract left lobe of liver; expose GOJ; avoid vagal branches"},
      {n:2,t:"Esophageal mobilization",d:"Mobilize lower 6 cm of esophagus; protect both vagal trunks"},
      {n:3,t:"Myotomy",d:"Hook/harmonic; incise longitudinal then circular muscle; 6 cm up esophagus + 2 cm on gastric side; achieve full mucosal protrusion — LOS divided completely"},
      {n:4,t:"Confirm complete myotomy",d:"Intraoperative endoscopy: 'Z-line' visible; scope passes without resistance"},
      {n:5,t:"Dor anterior fundoplication",d:"Anterior 180° wrap; suture fundus to left and right myotomy edges; covers myotomy; reduces GERD"},
      {n:6,t:"Post-op",d:"Day 1 contrast swallow; liquids 24 h; soft diet 2 weeks; PPI"}
    ],
    pearls:["2 cm gastric extension mandatory — incomplete gastric myotomy is the most common cause of failure","Mucosal perforation: occurs in 5%; repair immediately; test with intraoperative endoscopy — scope should pass freely","POEM vs Heller: equal efficacy; POEM — no fundoplication → more GERD; Heller + Dor → less GERD","Sigmoid esophagus: POEM or Heller may not help — consider esophagectomy"]
  },
  guidelines:[{src:"ESGE/ESSO/ESGENA Guidelines on Achalasia 2020"},{src:"ACG Clinical Guideline: Achalasia 2020"},{src:"European Achalasia Trial II: Ponds et al., Lancet 2019"}],
  pearls:["Type II achalasia: best response to any treatment; Type III: POEM preferred (longer myotomy possible)","Heller myotomy: 85–90% success at 5 years; must extend 2 cm onto stomach or will fail","POEM: equal to Heller; mandatory post-op pH monitoring and PPI; growing evidence as first-line","Pseudoachalasia: always exclude malignancy (GEJ cancer, lymphoma) before treating as primary achalasia"],
  mistakes:["Incomplete gastric myotomy (insufficient 2 cm extension) — most common cause of recurrent dysphagia","POEM without subsequent pH monitoring — 50% develop GERD; untreated leads to Barrett's","Not excluding pseudoachalasia (malignancy) before treatment — delayed diagnosis of GEJ cancer","Balloon dilation in Type III — poor response; POEM preferred for spastic achalasia"]
},
{
  id:"hiatus-hernia", dept:"uppergı", name:"Hiatus Hernia", latin:"Hernia hiatus oesophagei", organ:"Diaphragm",
  severity:"low", tags:["hiatus","hernia","sliding","paraesophageal","fundoplication","strangulation"],
  hero:"Herniation of abdominal contents through the esophageal hiatus of the diaphragm; Type I (sliding) in 95%; giant paraesophageal hernia risks strangulation.",
  keypoints:[
    "Type I (sliding, 95%): GEJ slides above hiatus; associated with GERD; most asymptomatic",
    "Type II (true paraesophageal, rare): fundus herniates alongside fixed GEJ — risk of strangulation/volvulus",
    "Type III (mixed, most 'paraesophageal' in practice): GEJ + fundus herniate — most requiring surgery",
    "Type IV: other organs (colon, spleen, small bowel) herniate through hiatus",
    "Elective repair for symptomatic giant hernias; emergency repair for gastric volvulus/strangulation"
  ],
  differentials:["GERD (Type I hiatus hernia — causally related)","Achalasia","Esophageal cancer","Diaphragmatic hernia (traumatic/congenital — Bochdalek)","Pulmonary mass (mimics large hernia on CXR)"],
  mnemonics:[{name:"Type I vs Paraesophageal",text:"Type I=Sliding: GEJ moves up with stomach (slips through hiatus); Type II=True paraesophageal: GEJ fixed, fundus herniates; Type III=Mixed (GEJ + fundus = most surgical cases); Type IV=All organs up"}],
  overview:{
    definition:"Protrusion of part of the stomach (and sometimes other abdominal organs) through the esophageal hiatus of the diaphragm into the posterior mediastinum.",
    epidemiology:"Prevalence 10–80% (increases with age); small Type I in 50% of adults; giant hernias in 5%. F>M. Obesity and pregnancy are risk factors.",
    pathophysiology:"Laxity of phrenesophageal membrane → widened hiatus → stomach slides cephalad (Type I) or fundus herniates (Type II/III). Giant hernias: inversion of stomach into chest → potential for gastric volvulus (organoaxial or mesenteroaxial) → ischemia.",
    classification:[
      {label:"Type I (Sliding)",note:"GEJ above diaphragm; most common; associated with GERD; usually managed medically"},
      {label:"Type II (True paraesophageal)",note:"GEJ below diaphragm; fundus/body herniates; rare; risk of volvulus"},
      {label:"Type III (Mixed)",note:"GEJ + gastric body in chest; most 'paraesophageal hernias' in practice; surgical repair recommended if symptomatic"},
      {label:"Type IV",note:"Colon, spleen, small bowel also herniated"}
    ]
  },
  diagnosis:{
    history:["Asymptomatic (Type I small — incidental on CXR)","Heartburn, regurgitation (Type I + GERD)","Postprandial fullness, early satiety, dysphagia (giant hernia)","Anemia (Cameron erosions — linear erosions at diaphragm)","Acute: acute dysphagia, vomiting, chest pain (gastric volvulus)"],
    examination:["Chest — decreased air entry left base (large hernia)","CXR: retrocardiac air-fluid level"],
    investigations:[
      {name:"CXR",role:"Retrocardiac air-fluid level; pneumomediastinum; obliteration of left heart border"},
      {name:"Barium swallow/meal",role:"Classifies hernia type; gastric volvulus; defines GEJ position; esophageal emptying"},
      {name:"EGD",role:"Cameron erosions; hiatus hernia grade; concurrent esophagitis/Barrett's; exclude malignancy"},
      {name:"CT chest/abdomen",role:"Exact anatomy; visceral contents; planning complex repair; complications (ischemia, volvulus)"},
      {name:"Manometry + pH study",role:"Pre-operative if fundoplication planned; motility assessment"}
    ]
  },
  criteria:{
    title:"Surgical Indications",
    items:[
      {k:"Symptomatic giant PEH (Type III/IV)",v:"Postprandial pain, dysphagia, anemia — elective repair; risk of volvulus 0.8%/year"},
      {k:"Gastric volvulus",v:"Emergency repair; may need NGT decompression initially"},
      {k:"Type I + refractory GERD",v:"Fundoplication ± hiatal repair if PPI-refractory or patient choice"},
      {k:"Asymptomatic giant PEH",v:"Controversial; older literature recommends prophylactic repair; current evidence — watch and wait with counselling for elderly"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Small Type I: PPI; lifestyle; observation","Asymptomatic giant hernias in elderly: selective repair vs surveillance"],
    medical:["PPI for GERD-component (Type I)","Iron supplementation for Cameron erosion anemia"],
    surgical:[
      {name:"Laparoscopic hiatus hernia repair + fundoplication",when:"Symptomatic giant PEH (Type II/III/IV); GERD-refractory Type I",notes:"Reduce hernia contents; resect hernia sac; primary cruroplasty; mesh reinforcement for large defects (>5 cm); Nissen or Toupet fundoplication; gastropexy (stitch stomach to anterior abdominal wall)"},
      {name:"Conversion to open",when:"Dense adhesions; complex Type IV hernia; bleeding; poor visualization",notes:"Kocher maneuver; open cruroplasty; can use biological mesh"},
      {name:"Emergency repair",when:"Acute gastric volvulus; strangulation; ischemic stomach",notes:"Emergency laparotomy; reduce volvulus; assess viability; resect if gangrenous; repair hiatus; Hartmann's equivalent if gastrectomy needed"}
    ]
  },
  technique:{
    title:"Laparoscopic Giant Paraesophageal Hernia Repair",
    prep:["Barium swallow defines anatomy","Nutritional optimization","Bougie (52–56 Fr) for cruroplasty and wrap assessment","GA; supine; 5 ports; reverse Trendelenburg"],
    steps:[
      {n:1,t:"Reduce hernia contents",d:"Gently return stomach/colon/spleen to abdomen; avoid enterotomy"},
      {n:2,t:"Excise hernia sac",d:"Complete excision reduces recurrence; separate mediastinal pleura from sac; protect vagal nerves"},
      {n:3,t:"Esophageal mobilization",d:"3–4 cm intraabdominal esophagus; preserve both vagi"},
      {n:4,t:"Cruroplasty",d:"Posterior primary sutures (2-0 Ethibond); mesh reinforcement if defect >5 cm (biologic mesh preferred)"},
      {n:5,t:"Fundoplication",d:"Nissen or Toupet; 'floppy' wrap; secure to crura with additional sutures"},
      {n:6,t:"Gastropexy",d:"Stitch fundus to anterior abdominal wall — reduces recurrence by preventing re-herniation"}
    ],
    pearls:["Complete sac excision is the most important recurrence prevention step — partial excision → 40% recurrence","Mesh cruroplasty: use biologic mesh for large defects; synthetic mesh is associated with esophageal erosion","Gastropexy: add to large hernia repairs; reduces recurrence from 30% to 10%","Giant hernias: may not need fundoplication if no evidence of GERD (manometry + pH)"]
  },
  guidelines:[{src:"SAGES Guidelines on Hiatus Hernia Repair 2022"},{src:"ESGE/ESSO Guidelines on Antireflux Surgery 2021"},{src:"ESGE Barrett's and PEH Consensus 2022"}],
  pearls:["Complete hernia sac excision reduces recurrence — most critical technical step","Mesh reinforcement for large crural defects (>5 cm) reduces recurrence but synthetic mesh may cause esophageal erosion — use biologic","Type I small hernia without symptoms: no surgery; PPI if GERD","Gastric volvulus emergency: decompression (NG tube if passes) then urgent surgical repair"],
  mistakes:["Incomplete hernia sac excision — 30–40% recurrence without sac excision","Synthetic mesh direct contact with esophagus — erosion/fistula; use biologic or position mesh laterally","Tight cruroplasty over esophagus — dysphagia; always use bougie","Not checking for Cameron erosions — iron-deficiency anemia in giant PEH"]
},
{
  id:"upper-gi-bleed", dept:"uppergı", name:"Upper GI Hemorrhage", latin:"Haemorrhagia gastrointestinalis superior", organ:"Upper GI tract",
  severity:"high", tags:["hematemesis","melena","Rockall","endoscopy","PPI","peptic ulcer","variceal"],
  hero:"Bleeding from a source proximal to the ligament of Treitz; peptic ulcer disease accounts for 35%; variceal bleeding has 20% 6-week mortality.",
  keypoints:[
    "Most common cause: peptic ulcer disease (35%); variceal (20%); Mallory-Weiss (5%); esophagitis (10%); malignancy (5%)",
    "Rockall score: pre-endoscopy predicts mortality; post-endoscopy guides need for intervention",
    "Forrest classification (endoscopic): Ia (spurting) → Ib (oozing) → IIa (visible vessel) → IIb (adherent clot) → IIc (flat pigmented spot) → III (clean base)",
    "High-risk stigmata (Ia, Ib, IIa, IIb): endoscopic hemostasis (injection ± thermal ± clips); PPI 72 h infusion",
    "Failed endoscopy: interventional radiology embolization (TAE) before surgery"
  ],
  differentials:["Lower GI bleed (hematochezia — but massive UGIB can present with PR bleeding)","Hemoptysis misidentified as hematemesis","Epistaxis swallowed","Aortoenteric fistula (previous aortic surgery + hematemesis)"],
  mnemonics:[{name:"Rockall Score",text:"Age (0-2) + Shock (0-2) + Comorbidity (0-3) + Diagnosis (0-2) + Stigmata (0-2). Pre-scope: ≤2=low risk; >5=high risk. Post-scope adds diagnosis+stigmata"}],
  overview:{
    definition:"Bleeding from the upper gastrointestinal tract (esophagus, stomach, duodenum) proximal to the ligament of Treitz.",
    epidemiology:"Incidence 100–170/100 000/year; mortality 10% overall (variceal 20%); 75–80% stop spontaneously; 25% rebleed.",
    pathophysiology:"Peptic ulcer: erosion of underlying vessel (Dieulafoy: large caliber submucosal artery) or gastric artery; posterior DU → GDA erosion. Varices: portal hypertension → submucosal variceal dilation → rupture. Mallory-Weiss: forceful vomiting → lower esophageal mucosal tear.",
    classification:[
      {label:"Forrest Ia/Ib",note:"Active spurting/oozing; 80–90% rebleed risk without treatment; endoscopic hemostasis mandatory"},
      {label:"Forrest IIa",note:"Non-bleeding visible vessel; 50% rebleed; endoscopic hemostasis"},
      {label:"Forrest IIb/IIc",note:"Adherent clot/flat pigmented spot; IIb: remove clot and treat underlying vessel; IIc: PPI, no intervention"},
      {label:"Forrest III",note:"Clean ulcer base; 5% rebleed; PPI; safe for early discharge"}
    ]
  },
  diagnosis:{
    history:["Hematemesis (bright red or coffee grounds)","Melena (tarry black stool — blood >50 mL in upper GI)","Syncope, pre-syncope (hemodynamic compromise)","Prior ulcer, H. pylori, NSAIDs, anticoagulants","Alcoholism, cirrhosis (variceal source)","Forceful vomiting before blood (Mallory-Weiss)"],
    examination:["Tachycardia, hypotension (hypovolemia)","Pallor, clammy","Signs of chronic liver disease (variceal)","Melena on DRE","Epigastric tenderness (ulcer)"],
    investigations:[
      {name:"CBC, group and save/crossmatch, coagulation, electrolytes/BUN-Cr",role:"Hemoglobin (may be normal in acute bleed); electrolytes/BUN-Cr — raised urea (absorbed blood) suggests UGIB; coagulopathy management"},
      {name:"EGD (within 24 h; within 12 h if suspected variceal)",role:"Identifies bleeding source; Forrest classification; endoscopic hemostasis; variceal band ligation"},
      {name:"Rockall score (pre- and post-EGD)",role:"Risk stratification; guides need for admission; discharge if score ≤2 pre-EGD"},
      {name:"CT angiography",role:"Active bleeding >0.5 mL/min; localizes source; guides TAE; especially if endoscopy fails"}
    ]
  },
  criteria:{
    title:"Rockall Score",
    items:[
      {k:"Age <60",v:"0; 60–79: 1; ≥80: 2"},
      {k:"Shock: no shock",v:"0; tachycardia HR>100: 1; hypotension SBP<100: 2"},
      {k:"Comorbidity: none",v:"0; any major (IHD/CCF/renal/hepatic): 2; renal/hepatic failure/metastatic cancer: 3"},
      {k:"Diagnosis: Mallory-Weiss/no lesion",v:"0; all other diagnoses: 1; malignancy: 2"},
      {k:"Stigmata: clean/pigmented spot",v:"0; clot/vessel: 2"},
      {k:"Interpretation",v:"≤2: low mortality (<5%); ≥5: high mortality (>20%); pre-score ≤1 = consider discharge"}
    ]
  },
  scoring:[{name:"Rockall Score",items:["Age + Shock + Comorbidity (pre-EGD) + Diagnosis + Stigmata (post-EGD); ≤2=low risk; ≥5=high risk"]}],
  management:{
    conservative:["IV access × 2 large bore; fluid resuscitation (saline/blood)","Target Hb ≥70 (non-variceal) or ≥80 (variceal or cardiovascular disease)","Restrictive transfusion: Hb threshold 70 g/L — reduces mortality (TRIGGER trial)","NBM before EGD; NGT aspiration useful for coffee-ground hematemesis"],
    medical:["PPI: IV bolus 80 mg then infusion 8 mg/h × 72 h post-hemostasis (reduces rebleed rate for Forrest Ia–IIb)","Variceal: terlipressin 2 mg IV q4h + ceftriaxone + IV PPI; EGD within 12 h","H. pylori eradication post-healing: reduces recurrence from 60% to <5%","Tranexamic acid: HALT-IT trial — no benefit in GIB; NOT recommended"],
    surgical:[
      {name:"EGD + endoscopic hemostasis",when:"Forrest Ia/Ib/IIa/IIb; active bleeding; high-risk stigmata",notes:"Injection (adrenaline 1:10 000) + thermal coagulation (Gold probe/hemospray) + mechanical clips; combination therapy superior; band ligation for varices"},
      {name:"Transcatheter arterial embolization (TAE)",when:"Failed endoscopy (2 attempts); active bleeding on CTA; surgical high-risk",notes:"Embolization of GDA (posterior DU), left gastric artery (gastric ulcer); success 80%; may need repeat"},
      {name:"Emergency surgery (Forrest Ia peptic ulcer)",when:"Failed endoscopy × 2 + failed TAE; hemodynamically unstable; aortoenteric fistula",notes:"Underrun bleeding vessel (posterior DU → GDA); Nissen/Graham patch; partial gastrectomy if malignancy/large ulcer; high mortality in shocked elderly"}
    ]
  },
  technique:{
    title:"Emergency EGD for Bleeding Peptic Ulcer",
    prep:["Resuscitation; correct coagulopathy (FFP, platelets)","IV erythromycin 250 mg 20 min before EGD (prokinetic — clears stomach of blood)","Airway protection: consider intubation if massive hematemesis","Therapeutic scope with large working channel"],
    steps:[
      {n:1,t:"Identify source",d:"Systematic retroflexion stomach; duodenum to D2; identify Forrest classification"},
      {n:2,t:"Adrenaline injection",d:"1:10 000 adrenaline; inject 4 quadrants around ulcer (2 mL each); temporary hemostasis; NOT sufficient alone"},
      {n:3,t:"Thermal coagulation",d:"Gold probe or bipolar coagulation; direct contact with vessel; 10 W coag × 2–3 applications"},
      {n:4,t:"Hemostatic clip",d:"Resolution clip or TTSC over visible vessel; most durable mechanical hemostasis"},
      {n:5,t:"Confirm hemostasis",d:"Remove instruments; confirm no active bleeding; 'clean base' post-treatment"},
      {n:6,t:"Post-procedure",d:"IV PPI 8 mg/h infusion × 72 h; admit; 2nd look EGD only if clinical rebleed"}
    ],
    pearls:["Erythromycin 250 mg IV 20 min pre-EGD improves visualization by gastric prokinesis — reduces need for second EGD","Adrenaline injection alone is insufficient — combine with thermal or mechanical hemostasis","PPI infusion 72 h: reduces rebleed rate from 20% to 7% for high-risk stigmata","Routine second-look EGD: no benefit unless clinical evidence of rebleed (Cochrane review)"]
  },
  guidelines:[{src:"BSG UGIB Guidelines 2019"},{src:"ESGE UGIB Guideline 2021"},{src:"NICE CG141: UGIB 2012 (updated 2016)"}],
  pearls:["Restrictive transfusion (threshold 70 g/L): reduces mortality vs liberal (TRIGGER trial)","Combination endoscopic therapy (injection + thermal/clip): superior to adrenaline alone","TAE before surgery if endoscopy fails — 80% success, avoids emergency laparotomy","H. pylori eradication after UGIB: mandatory testing and treatment — reduces recurrence to <5%"],
  mistakes:["Adrenaline injection alone without thermal/mechanical hemostasis — inadequate, rebleed in 15–20%","Not testing H. pylori at index EGD — misses eradication opportunity","Transfusing to Hb >10 g/L — liberal transfusion increases rebleed and mortality (TRIGGER trial)","TAE without CT angiography to localize bleeding — low success rate if active bleeding not confirmed"]
}
];
