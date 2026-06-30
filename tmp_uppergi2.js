// Upper GI remaining diseases (correct IDs matching data.jsx)
window._TMP_UPPERGI2 = [
{
  id:"boerhaave", dept:"uppergi", name:"Oesophageal Perforation (Boerhaave)", latin:"Perforatio oesophagi spontanea", organ:"Oesophagus",
  severity:"high", tags:["oesophagus","perforation","Mackler","mediastinitis","Gastrografin","thoracotomy"],
  hero:"Spontaneous full-thickness oesophageal rupture from sudden rise in intraluminal pressure; Mackler triad; mortality 30–40% — the 'great masquerader' of chest pain.",
  keypoints:[
    "Mackler triad: vomiting → chest pain → subcutaneous emphysema — present in only 30%; diagnosis often delayed",
    "Iatrogenic perforation (OGD, intubation) is more common overall (75%); Boerhaave = spontaneous (25%)",
    "CT with oral water-soluble contrast: gold standard — extraluminal air/fluid, mediastinal widening, contrast extravasation",
    "Management by time and contamination: <24 h + contained → primary repair; >24 h or mediastinitis → drainage ± oesophageal stent or diversion",
    "Pittsburgh severity score: guides operative vs non-operative management"
  ],
  differentials:["Acute MI (posterior — chest pain, ECG changes)","Aortic dissection","Pneumomediastinum (Hamman's sign)","Perforated peptic ulcer","Spontaneous pneumothorax"],
  mnemonics:[{name:"Mackler Triad",text:"Vomiting → chest/upper abdominal pain → subcutaneous emphysema (Hamman crunch) = Boerhaave syndrome until proven otherwise"}],
  overview:{
    definition:"Full-thickness perforation of the oesophagus, most commonly spontaneous (Boerhaave) or iatrogenic, leading to mediastinitis and empyema.",
    epidemiology:"Rare: 3/1 000 000/year; mortality 30–40% (rises to >50% if diagnosis delayed >24 h). Boerhaave: 90% at lower third (posterior-lateral left). Iatrogenic: upper oesophagus and pharynx most common sites.",
    pathophysiology:"Sudden rise in intraluminal pressure (vomiting, straining, instrumentation) → pressure exceeds wall tensile strength → longitudinal tear through all layers. Left posterior-lateral at lower third — weakest area. Air and oesophageal contents contaminate mediastinum → bacterial mediastinitis → septic shock.",
    classification:[
      {label:"Boerhaave (spontaneous)",note:"Forceful vomiting (90%); left posterior-lateral lower third; most severe"},
      {label:"Iatrogenic",note:"OGD, TEE, intubation, nasogastric insertion; upper oesophagus, hypopharynx; earlier diagnosis"},
      {label:"Traumatic",note:"Penetrating neck/chest injury; foreign body impaction"},
      {label:"Tumour-related",note:"Oesophageal cancer, Barrett's, radiation"}
    ]
  },
  diagnosis:{
    history:["Episode of forceful vomiting (Boerhaave) or recent instrumentation","Sudden severe chest/epigastric pain","Dysphagia, odynophagia","Respiratory distress","Fever (delayed presentation)"],
    examination:["Hamman's sign: crunching mediastinal sound with heartbeat (subcutaneous emphysema)","Subcutaneous emphysema (neck, chest)","Decreased air entry (left — empyema)","Tachycardia, fever (mediastinitis — delayed)","Respiratory distress"],
    investigations:[
      {name:"CXR",role:"Pneumomediastinum; pleural effusion (left); hydropneumothorax; surgical emphysema; widened mediastinum"},
      {name:"CT chest/abdomen (with oral Gastrografin)",role:"Gold standard: extraluminal air ± contrast leak; mediastinal fluid; pleural effusion; extent of contamination"},
      {name:"Gastrografin swallow (if CT unavailable)",role:"Water-soluble contrast; active leak confirmed; avoid barium (mediastinitis from barium)"},
      {name:"Flexible OGD",role:"Identifies location and size of perforation; only after CT; careful; do not over-insufflate"}
    ]
  },
  criteria:{
    title:"Pittsburgh Severity Score",
    items:[
      {k:"Age ≥75",v:"1 point"},
      {k:"Tachycardia ≥100",v:"1 point"},
      {k:"Leukocytosis ≥10",v:"1 point"},
      {k:"Pleural effusion",v:"1 point"},
      {k:"Fever ≥38°C",v:"1 point"},
      {k:"Score ≤2 (within 24 h + contained)",v:"Non-operative management possible (antibiotics + NG drainage ± stent)"},
      {k:"Score ≥3 or >24 h or free leak",v:"Operative management (thoracotomy/laparotomy + repair/drainage)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NBM; IV broad-spectrum antibiotics (piperacillin-tazobactam + fluconazole)","NG tube decompression","IV PPI","Chest drain for effusion/empyema","Nutritional support: jejunostomy or TPN"],
    medical:["Antibiotics: cover gram-positive, gram-negative, anaerobes, fungi","SEMS (self-expanding metal stent): for contained leaks; <24 h iatrogenic; bridge to healing; remove at 6–8 weeks"],
    surgical:[
      {name:"Primary repair (within 24 h)",when:"Early (<24 h); healthy oesophageal tissue; no mediastinitis",notes:"Thoracotomy (left for lower third); debride; two-layer repair; buttress with pleura/intercostal muscle/fundus; drain; ± fundoplication"},
      {name:"Wide drainage + oesophageal exclusion",when:">24 h; severe mediastinitis; friable tissue; unable to repair primarily",notes:"Drain mediastinum and pleura; cervical oesophagostomy (diversion); feeding jejunostomy; delayed reconstruction 3–6 months"},
      {name:"T-tube repair",when:"Large perforation with friable edges; creates controlled oesophagocutaneous fistula",notes:"Place T-tube through perforation; creates controlled fistula that closes over 6–8 weeks"},
      {name:"Oesophagectomy",when:"Underlying oesophageal cancer; chronic stricture; severely damaged oesophagus",notes:"Transhiatal or Ivor Lewis; gastric or colonic conduit"}
    ]
  },
  technique:{
    title:"Primary Repair of Boerhaave Perforation",
    prep:["IV antibiotics immediately","CT confirms left lower third perforation","Left posterolateral thoracotomy position","GA; double-lumen ETT for lung isolation"],
    steps:[
      {n:1,t:"Left posterolateral thoracotomy (6th/7th ICS)",d:"Decompress haemothorax/empyema; peel fibrinous exudate"},
      {n:2,t:"Expose oesophageal perforation",d:"Incise mediastinal pleura; expose perforation; extend longitudinal muscle tear to expose full mucosal defect"},
      {n:3,t:"Debride and freshen edges",d:"Remove necrotic tissue; healthy bleeding edges; trim mucosa to viable"},
      {n:4,t:"Mucosal closure",d:"4-0 Vicryl interrupted; close mucosa first; ensure no gaps"},
      {n:5,t:"Muscle layer closure",d:"3-0 Vicryl; close longitudinal muscle over mucosal repair"},
      {n:6,t:"Buttress",d:"Wrap with adjacent pleura, intercostal muscle, or mobilised gastric fundus; reinforces repair"}
    ],
    pearls:["Always extend the muscle incision to expose the full extent of mucosal tear — muscle tear is always shorter than mucosal tear","Buttress repair reduces leak rate from 20% to 5%","Delayed presentation (>24 h): drain, stent, jejunostomy — repair likely to fail","Hamman's sign is pathognomonic — if present with vomiting history, CT immediately even if CXR normal"]
  },
  guidelines:[{src:"ESGE/ESSO Position Statement on Oesophageal Perforation 2019"},{src:"WSES Oesophageal Emergency Guidelines 2019"},{src:"BSG Upper GI Emergency Guideline 2021"}],
  pearls:["Delay in diagnosis increases mortality: <24 h mortality 10%; >24 h mortality 40–50%","CT with water-soluble contrast: do NOT use barium — mediastinitis","Contained iatrogenic perforation (<24 h, small): endoscopic stent + antibiotics — avoids thoracotomy","Primary repair + buttress: best outcome when feasible within 24 h"],
  mistakes:["Using barium for swallow study — causes severe mediastinitis if extravasation occurs","Missing the diagnosis: chest pain post-vomiting is Boerhaave until proven otherwise","Primary repair of oesophageal perforation >48 h without adequate debridement — anastomotic failure","Not providing nutritional support (jejunostomy/TPN) — oesophageal rest essential for healing"]
},
{
  id:"bariatric", dept:"uppergi", name:"Bariatric Surgery", latin:"Chirurgia bariatrica", organ:"Stomach/small bowel",
  severity:"medium", tags:["obesity","gastric bypass","sleeve gastrectomy","Roux-en-Y","anastomotic leak","dumping"],
  hero:"Surgical treatment of morbid obesity; Roux-en-Y gastric bypass (RYGB) and sleeve gastrectomy (SG) are most performed procedures; diabetes remission in 70–80%.",
  keypoints:[
    "Eligibility: BMI ≥40 (or ≥35 with obesity-related comorbidity); failed conservative management; specialist centre",
    "Sleeve gastrectomy: simpler; no anastomosis; T2DM remission 60%; 20% weight regain at 5 years; GORD worsens",
    "RYGB: superior metabolic outcomes; T2DM remission 80%; nutrient malabsorption risk; complexity higher",
    "Anastomotic leak: most serious early complication (1–5%); CT with oral contrast + clinical signs; re-operation or drainage + stent",
    "Dumping syndrome: early (high-carb meal → rapid gastric emptying → osmotic distress); late (reactive hypoglycaemia 1–3 h post-meal)"
  ],
  differentials:["Morbid obesity medical management (GLP-1 agonists: semaglutide, liraglutide — growing evidence)","Intragastric balloon (short-term; non-surgical)","Endoscopic sleeve gastroplasty","Adjustable gastric banding (now rarely performed — high complication/revision rate)"],
  mnemonics:[{name:"RYGB vs Sleeve",text:"RYGB: Restrictive + Malabsorptive; superior metabolic; dumping risk; nutrient deficiencies; Sleeve: Restrictive only; simpler; GORD worse; less nutrition risk; weight regain more common"}],
  overview:{
    definition:"Surgical procedures that restrict stomach capacity and/or reduce nutrient absorption to achieve sustained weight loss and metabolic improvement in patients with severe obesity.",
    epidemiology:"10 million procedures performed globally; SG accounts for 55% worldwide; RYGB 30%. UK: 7000/year; most are laparoscopic.",
    pathophysiology:"Restriction (sleeve/band/pouch): reduces caloric intake capacity. Malabsorption (RYGB/BPD): reduces nutrient absorption surface. Hormonal: ghrelin reduction (sleeve); GLP-1 and PYY increase (RYGB) → satiety, insulin sensitisation → T2DM remission.",
    classification:[
      {label:"Sleeve gastrectomy (SG)",note:"75–80% stomach removed along greater curvature; 60–80 mL remnant; restrictive only; 60% EWL"},
      {label:"Roux-en-Y gastric bypass (RYGB)",note:"Small gastric pouch (20 mL) + 150 cm Roux limb bypassing duodenum/proximal jejunum; restrictive + metabolic; 70–80% EWL"},
      {label:"Adjustable gastric band",note:"Now rarely used; high revision rate; reversible"},
      {label:"Biliopancreatic diversion + duodenal switch (BPD-DS)",note:"Most effective for extreme obesity (BMI >60); highest malabsorption; high complication rate"}
    ]
  },
  diagnosis:{
    history:["BMI ≥40 or ≥35 + T2DM/HTN/OSA/NAFLD","Failed conservative measures (diet, exercise, orlistat) for ≥6 months","No active psychiatric disorder or substance misuse","Pre-op assessment: nutritional status, vitamin levels, GORD, sleep study"],
    examination:["BMI, neck circumference (OSA risk)","GORD symptoms (sleeve may worsen)","Comorbidity assessment"],
    investigations:[
      {name:"OGD",role:"Pre-op: exclude peptic ulcer, H. pylori, Barrett's — H. pylori eradication reduces marginal ulcer risk"},
      {name:"Sleep study",role:"OSA in 60% of obese patients — CPAP pre-op improves post-op respiratory outcomes"},
      {name:"Echo/ECG",role:"Cardiac assessment; obese patients at higher perioperative cardiac risk"},
      {name:"Nutritional panel",role:"Vitamin D, B12, folate, iron, zinc, selenium — correct deficiencies pre-operatively; continue supplementation post-op indefinitely"},
      {name:"GLP-1 agonists pre-op",role:"Semaglutide/liraglutide: reduce liver size (fatty liver) → easier laparoscopic access; use for 4–6 weeks pre-op"}
    ]
  },
  criteria:{
    title:"NICE Criteria for Bariatric Surgery",
    items:[
      {k:"BMI ≥40",v:"No additional comorbidity required; psychological suitability required"},
      {k:"BMI 35–39.9 + comorbidity",v:"T2DM, HTN, OSA, non-alcoholic fatty liver disease, dyslipidaemia, GORD"},
      {k:"BMI 30–34.9",v:"Recent-onset T2DM (<10 years); NICE and SIGN recommend surgery consideration"},
      {k:"Pre-operative requirements",v:"Supervised weight management ≥6 months; no active substance misuse or uncontrolled psychiatric disease"},
      {k:"Post-op follow-up",v:"Lifelong nutritional supplementation + annual blood tests + psychology support"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Very low calorie diet (VLCD) + multivitamins for 2 weeks pre-op (shrinks liver)","Physiotherapy, smoking cessation","Post-op: stage 1 (liquids) → stage 2 (purée) → stage 3 (soft) → stage 4 (normal) over 8 weeks"],
    medical:["GLP-1 agonists (semaglutide 2.4 mg SC weekly): 15% weight loss without surgery — growing non-surgical option","Post-op supplementation: vitamin D 3000 IU, B12 1000 μg, iron, calcium, multivitamin indefinitely","Dumping: low-carbohydrate diet, small frequent meals, acarbose (late dumping)"],
    surgical:[
      {name:"Laparoscopic sleeve gastrectomy",when:"First-line for most patients; simpler; no anastomosis; BMI ≥35",notes:"Bougie 36–40 Fr; resect 75–80% greater curvature; staple 6 cm from pylorus; oversew staple line; leak test; GORD worsens — consider RYGB if pre-existing GORD"},
      {name:"Laparoscopic Roux-en-Y gastric bypass",when:"BMI ≥40; T2DM; GORD; failed sleeve; superior metabolic outcomes desired",notes:"Create 20 mL gastric pouch; 150 cm Roux limb; 50 cm biliopancreatic limb; antegastric antecolic; methylene blue leak test; close Petersen's and mesenteric defects"},
      {name:"Revision surgery",when:"Weight regain (30% at 5 years after SG); band slippage; GORD after sleeve",notes:"Sleeve to RYGB conversion; band removal + SG/RYGB; high complication rate; specialist centre only"}
    ]
  },
  technique:{
    title:"Laparoscopic Roux-en-Y Gastric Bypass",
    prep:["Pre-op VLCD/GLP-1; liver shrinkage","H. pylori eradication if positive","Supine; split legs; 5 ports; 30° scope","Anti-thrombosis: LMWH 6 h post-op; TED stockings; early mobilisation"],
    steps:[
      {n:1,t:"Gastric pouch creation",d:"Divide lesser omentum; enter retrogastric space; 4–5 firings of 60 mm stapler; create 20 mL pouch; ensure no fundus left"},
      {n:2,t:"Roux limb measurement",d:"Identify ligament of Treitz; measure 50 cm biliopancreatic (BP) limb; 150 cm Roux limb"},
      {n:3,t:"Jejunojejunostomy",d:"Side-to-side anastomosis of Roux and BP limbs; stapler; close enterotomy; 45 mm stapler"},
      {n:4,t:"Gastrojejunostomy",d:"Pass Roux limb antegastric antecolic to pouch; 21 mm circular stapler or linear stapler anastomosis; blue dye leak test"},
      {n:5,t:"Close mesenteric defects",d:"Close Petersen's space (between Roux mesentery and transverse mesocolon) + jejunojejunostomy mesenteric defect — prevents internal hernia"},
      {n:6,t:"Drain",d:"Drain near gastrojejunostomy; check for bile/blood"}
    ],
    pearls:["Internal hernia (Petersen's space): late complication (5%); closure reduces incidence; presents with intermittent colicky pain years post-op","Marginal ulcer: H. pylori + NSAID use + smoking + pouch ischemia → prevent with PPI","Anastomotic leak: amylase-rich drain fluid + CRP >150 on day 3 → CT with contrast → drainage/stent/re-op","Dumping: educate all RYGB patients; low-carbohydrate, high-protein diet; avoid liquid carbs with meals"]
  },
  guidelines:[{src:"NICE TA672: Bariatric Surgery 2022"},{src:"IFSO Global Statement 2022"},{src:"BOMSS (British Obesity and Metabolic Surgery Society) Guidelines 2020"}],
  pearls:["T2DM remission: RYGB 80% vs SG 60% — RYGB preferred for T2DM patients","Internal hernia post-RYGB: can occur years later; close all mesenteric defects at index operation","Lifelong supplementation mandatory: vitamin D, B12, iron, calcium — failure causes serious nutritional deficiencies","GORD after sleeve gastrectomy: 25% develop or worsen — consider RYGB if pre-existing GORD"],
  mistakes:["Not closing mesenteric defects (Petersen's) in RYGB — internal hernia in 3–5%","Not correcting pre-operative nutritional deficiencies — worsened post-op","Sleeve gastrectomy in patient with severe GORD — worsens reflux significantly","Not prescribing post-operative lifelong vitamin supplements — nutritional complications"]
},
{
  id:"gist", dept:"uppergi", name:"Gastrointestinal Stromal Tumour", latin:"Tumor stromalis gastrointestinalis", organ:"Stomach/Small bowel",
  severity:"medium", tags:["GIST","KIT","imatinib","resection","CD117","spindle cell"],
  hero:"Mesenchymal tumour arising from interstitial cells of Cajal; 60–70% in stomach; KIT (CD117) mutation defines majority; imatinib (TKI) is transformative treatment.",
  keypoints:[
    "KIT (CD117) mutation in 85%; PDGFRA mutation in 10%; KIT/PDGFRA wild-type (5%) — molecular testing mandatory",
    "Size + mitotic index determines malignant risk: NIH consensus and modified Fletcher criteria",
    "Laparoscopic resection if feasible; R0 margins; no lymphadenectomy (GISTs rarely spread to lymph nodes)",
    "Imatinib mesylate (Gleevec): first-line for unresectable/metastatic; adjuvant 3 years for high-risk resected GISTs",
    "PDGFRA D842V mutation: primary imatinib resistance; avapritinib is targeted treatment"
  ],
  differentials:["Gastric leiomyoma (SMA+, CD117–)","Gastric cancer (epithelial, EGD biopsy positive)","Schwannoma (S100+)","Inflammatory fibroid polyp","Gastric lipoma (fat on CT)"],
  mnemonics:[{name:"GIST Risk Classification (modified NIH)",text:"Size + Mitotic rate per 50 HPF + Location: Gastric<small bowel<colon<rectum (lower site = higher risk for same size/mitoses)"}],
  overview:{
    definition:"Soft-tissue sarcoma arising from KIT-expressing interstitial cells of Cajal (pacemaker cells of the gut); the most common mesenchymal tumour of the GI tract.",
    epidemiology:"Incidence 1–2/100 000/year. Stomach 60%; small bowel 30%; rectum/colon 5%; oesophagus 5%. Median age 60 years; equal sex distribution.",
    pathophysiology:"KIT (CD117) or PDGFRA gain-of-function mutation → constitutive tyrosine kinase activation → uncontrolled cell proliferation. KIT: exon 11 (most common, best TKI response), exon 9 (needs higher imatinib dose), exon 13, 17. PDGFRA D842V: imatinib-resistant (avapritinib).",
    classification:[
      {label:"Modified NIH — Very low risk",note:"<2 cm, <5 mitoses/50 HPF — gastric location; watch-and-wait possible for <2 cm"},
      {label:"Modified NIH — Low risk",note:"2–5 cm, <5 mitoses/50 HPF — resect"},
      {label:"Modified NIH — Intermediate risk",note:"<5 cm, 6–10 mitoses/50 HPF; or 5–10 cm, <5 mitoses — resect + consider adjuvant"},
      {label:"Modified NIH — High risk",note:">5 cm, >5 mitoses; or any size with >10 mitoses; tumour rupture — adjuvant imatinib 3 years"},
      {label:"AFIP / Miettinen criteria",note:"Alternative prognostic scheme combining size, mitotic count AND site (gastric GISTs behave better than small-bowel of equal size) to predict progression risk"}
    ]
  },
  diagnosis:{
    history:["Incidental finding on CT/US (40% asymptomatic)","GI bleeding (melaena, haematemesis — intraluminal ulceration)","Abdominal mass, discomfort","Obstruction (small bowel GIST)","Weight loss (large tumour)"],
    examination:["Abdominal mass (palpable if large)","Anaemia (chronic blood loss)"],
    investigations:[
      {name:"CT chest/abdomen/pelvis (oral + IV contrast)",role:"Characterise lesion (exophytic, submucosal, heterogeneous with necrosis); staging (liver, peritoneal metastases); blush with contrast"},
      {name:"MRI abdomen",role:"Rectal GIST: assess sphincter/mesorectal involvement; soft-tissue detail"},
      {name:"EUS + FNA",role:"Submucosal lesion characterisation; tissue for CD117/CD34/DOG1 IHC + molecular analysis (KIT/PDGFRA mutation)"},
      {name:"OGD/flexible sigmoidoscopy",role:"Identify lesion; biopsy if ulcerated; submucosal location — regular biopsy often non-diagnostic"},
      {name:"PET-CT",role:"Response assessment after imatinib (FDG-avid); staging; early response marker"},
      {name:"KIT/PDGFRA mutation analysis",role:"Mandatory: guides treatment (imatinib dose, secondary TKI); exon 11 — best prognosis/response"}
    ]
  },
  criteria:{
    title:"Modified NIH Risk Classification",
    items:[
      {k:"Very low risk",v:"<2 cm + <5 mitoses/50 HPF — all sites"},
      {k:"Low risk",v:"2–5 cm + <5 mitoses/50 HPF — gastric"},
      {k:"Intermediate risk",v:"<5 cm + 6–10 mitoses; or 5–10 cm + <5 mitoses — gastric (non-gastric = high risk)"},
      {k:"High risk",v:">10 cm any mitoses; >5 cm + >5 mitoses; any size + >10 mitoses; any tumour rupture"},
      {k:"Adjuvant imatinib",v:"High-risk resected GIST: 3 years (vs 1 year: PERSIST-5 trial — OS benefit)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["EUS surveillance for incidental gastric GIST <2 cm; 6–12 monthly","No biopsy if high suspicion on CT (bleeding risk; rupture risk)"],
    medical:["Imatinib 400 mg/day: KIT exon 11 and most mutations; KIT exon 9: 800 mg/day","PDGFRA D842V mutation: avapritinib 300 mg/day (NAVIGATOR trial: 89% ORR)","Sunitinib: second-line (imatinib resistance/intolerance)","Regorafenib: third-line","Neoadjuvant imatinib: 6–12 months for initially unresectable GIST → downsizing → resection","Adjuvant: high-risk GIST: 3 years imatinib (PERSIST-5: significant OS improvement)"],
    surgical:[
      {name:"Laparoscopic wedge resection",when:"Gastric GIST ≤5 cm; favourable location; R0 achievable laparoscopically",notes:"No lymphadenectomy required; R0 margin; avoid tumour rupture (peritoneal seeding); retrieve in bag"},
      {name:"Open resection",when:"Large GIST (>5 cm); complex location; adhesion to adjacent organs; small bowel GIST",notes:"R0 margins; en bloc resection of adherent organs if needed; no formal lymphadenectomy; handle gently to avoid rupture"},
      {name:"Cytoreductive surgery",when:"Unresectable GIST responding to imatinib after 6–12 months neoadjuvant",notes:"Goal R0 if achievable; debulking alone not beneficial; MDT decision"}
    ]
  },
  technique:{
    title:"Laparoscopic Gastric Wedge Resection for GIST",
    prep:["CT confirms gastric location, size, vascular proximity","EUS/endoscopy marks lesion; marks with ink if intragastric approach planned","GA; supine; 4 ports; 30° scope"],
    steps:[
      {n:1,t:"Localise tumour",d:"Simultaneous OGD; transilluminate to locate; palpate laparoscopically or use laparoscopic US"},
      {n:2,t:"Wedge resection",d:"60 mm endostapler multiple firings; R0 1–2 cm margin; avoid sphincter or cardia injury"},
      {n:3,t:"Retrieve",d:"Retrieval bag; do NOT rupture (peritoneal seeding → high recurrence)"},
      {n:4,t:"Test staple line",d:"Insufflate air via NG tube with saline in abdomen — no bubbles"},
      {n:5,t:"Close and send specimen",d:"Send fresh for IHC (CD117, CD34, DOG1) and molecular analysis"}
    ],
    pearls:["Never rupture the tumour — spillage causes peritoneal seeding equivalent to R1/R2 resection","KIT mutation testing guides adjuvant therapy and predicts outcomes","Adjuvant imatinib 3 years (not 1 year): PERSIST-5 trial — significant OS improvement for high-risk","Response to imatinib on PET: within 24 h — metabolic response precedes size change by weeks; early assessment"]
  },
  guidelines:[{src:"ESMO/EURACAN GIST Clinical Practice Guidelines 2022"},{src:"NCCN GIST 2023"},{src:"PERSIST-5 Trial: Raut et al., Lancet Oncol 2018"}],
  pearls:["Tumour rupture = high-risk regardless of size/mitoses — treat as high-risk; adjuvant imatinib 3 years","KIT exon 9 mutation: needs 800 mg imatinib (double standard dose)","PDGFRA D842V: avapritinib-specific; imatinib ineffective","Liver metastases from GIST: respond to imatinib even if large — surgical resection only after maximal medical response"],
  mistakes:["No molecular testing before starting imatinib — misses PDGFRA D842V (imatinib-resistant)","Lymphadenectomy for GIST — not indicated; GISTs metastasise haematogenously, not lymphatically","Only 1 year adjuvant imatinib for high-risk GIST — 3 years superior (PERSIST-5)","Tumour rupture intraoperatively — equal to peritoneal M1; use retrieval bag; gentle handling"]
},
{
  id:"barretts", dept:"uppergi", name:"Barrett's Oesophagus", latin:"Oesophagus Barrett", organ:"Oesophagus",
  severity:"medium", tags:["Barrett","oesophagus","adenocarcinoma","RFA","EMR","surveillance","intestinal metaplasia"],
  hero:"Columnar metaplasia of the lower oesophagus in response to chronic acid reflux; intestinal metaplasia is the precursor to oesophageal adenocarcinoma (0.2–0.5%/year).",
  keypoints:[
    "Definition: ≥1 cm columnar-lined oesophagus with intestinal metaplasia confirmed on biopsy",
    "GORD → columnar metaplasia (incomplete IM = goblet cells) → LGD → HGD → T1a intramucosal carcinoma → T1b submucosal invasive",
    "OAC risk: no dysplasia 0.1–0.3%/year; LGD 0.5–1%/year; HGD 5–6%/year",
    "RFA (radiofrequency ablation): eradicates IM in >80% of cases; flat Barrett's; after EMR of visible lesion",
    "ESGE 2017/BSG: confirm on TWO separate endoscopies by experienced endoscopist before any ablation"
  ],
  differentials:["Columnar-lined oesophagus without intestinal metaplasia (not Barrett's — no cancer risk)","Sliding hiatus hernia (normal GEJ position when reduced)","Reflux oesophagitis (erythematous mucosa — must biopsy)","Oesophageal adenocarcinoma (mass lesion within Barrett's)","Gastric cardiac mucosa"],
  mnemonics:[{name:"Barrett's Surveillance Steps",text:"1. Confirm IM histologically. 2. Identify visible lesions → EMR first. 3. Flat Barrett's + dysplasia → RFA ablation. 4. Post-ablation surveillance indefinitely. STOP if patient unfit for intervention"}],
  overview:{
    definition:"Metaplastic replacement of the normal stratified squamous oesophageal epithelium by columnar epithelium containing goblet cells (intestinal metaplasia), as a consequence of chronic gastro-oesophageal reflux.",
    epidemiology:"Prevalence 1–2% general population; 10–15% of GORD patients. M:F = 3:1. White males, older age, central obesity, smoking. Annual OAC risk: 0.2–0.5%.",
    pathophysiology:"Chronic acid + bile reflux → squamous epithelial injury → incomplete repair by columnar metaplasia (derived from gastric stem cells or sub-mucosal glands). CDX2 transcription factor drives intestinal differentiation. Progression: IM → LGD (SOX2 loss) → HGD (TP53 mutation) → intramucosal carcinoma → submucosal invasion.",
    classification:[
      {label:"Prague C&M criteria",note:"Standardised endoscopic report: C = circumferential extent (cm), M = maximal extent (cm) of columnar-lined oesophagus above the GEJ"},
      {label:"Short segment Barrett's (<3 cm)",note:"Prague M1–<3 cm above GEJ; lower OAC risk; less intensive surveillance"},
      {label:"Long segment Barrett's (≥3 cm)",note:"Prague M≥3 cm; more extensive columnar metaplasia; higher OAC risk; more intensive surveillance"},
      {label:"Ultra-short segment Barrett's (<1 cm)",note:"Not classified as Barrett's per BSG 2013; does not warrant surveillance"}
    ]
  },
  diagnosis:{
    history:["Chronic heartburn, regurgitation (>5 years)","Male, overweight, >50 years","Alarm symptoms: dysphagia, weight loss, anaemia (concerning for OAC)"],
    examination:["Usually normal","Obese; signs of GORD"],
    investigations:[
      {name:"OGD + 4-quadrant biopsies",role:"Prague classification (circumferential C and maximal M extent); 4-quadrant every 2 cm + targeted biopsies of any visible lesions (Seattle protocol)"},
      {name:"Pathology review by expert",role:"LGD and HGD: second opinion by expert GI pathologist; inter-observer variability"},
      {name:"Chromoendoscopy (NBI/FICE)",role:"Narrow-band imaging highlights dysplastic areas; guides targeted biopsies; surface pattern analysis"},
      {name:"EUS",role:"T-staging before EMR for visible lesions; distinguishes T1a (intramucosal) from T1b (submucosal)"},
      {name:"MRI/CT staging",role:"T1b+ disease: staging before treatment planning (lymph node, M staging)"}
    ]
  },
  criteria:{
    title:"BSG/ESGE Surveillance Intervals",
    items:[
      {k:"No dysplasia, short segment (<3 cm)",v:"OGD every 3–5 years (2022 BSG: consider stopping in low-risk patients >75)"},
      {k:"No dysplasia, long segment (≥3 cm)",v:"OGD every 2–3 years"},
      {k:"Low-grade dysplasia confirmed",v:"Expert pathologist; RFA or intensive surveillance 6-monthly × 1 year, then annually"},
      {k:"High-grade dysplasia",v:"EMR of visible lesion; RFA of flat HGD; no surgery unless failure/T1b"},
      {k:"T1a intramucosal cancer",v:"EMR ± RFA; curative if R0, no LVI, no SM involvement"},
      {k:"T1b submucosal cancer",v:"Surgery (oesophagectomy) or definitive CRT; EMR + RFA alone insufficient"}
    ]
  },
  scoring:[],
  management:{
    conservative:["PPI: reduces progression to LGD/HGD (AspECT trial: combined high-dose PPI + aspirin reduces OAC)","Aspirin 300 mg/day: AspECT trial benefit in combination with PPI","Lifestyle: weight loss, elevate head of bed, stop smoking"],
    medical:["PPI (omeprazole 40 mg BD or esomeprazole 40 mg OD) for all Barrett's patients indefinitely"],
    surgical:[
      {name:"Endoscopic mucosal resection (EMR)",when:"Visible lesion in Barrett's (nodule, irregular mucosa); any grade; T1a confirmed on resection specimen",notes:"Cap or ligation technique; full-thickness resection; mandatory before RFA to exclude T1b (submucosal) invasion and LVI"},
      {name:"Radiofrequency ablation (RFA — Halo)",when:"Flat LGD; flat HGD (after EMR of any visible lesion); residual IM post-EMR",notes:"Halo360 balloon (circumferential) → Halo90 focal; multiple sessions (2–4); 80% CE-IM; follow up OGD 3-monthly × 1 year, then annually"},
      {name:"Endoscopic submucosal dissection (ESD)",when:"Large flat visible lesion >2 cm; difficult EMR; T1b confirmed pathologically after EMR",notes:"En bloc resection; allows complete staging; technically demanding; expert centres"},
      {name:"Oesophagectomy",when:"T1b (SM2/3) on EMR pathology; HGD/T1a failing endoscopic therapy; T1b + LVI",notes:"Ivor Lewis preferred; only if endotherapy fails or stage requires; high morbidity"}
    ]
  },
  technique:{
    title:"Radiofrequency Ablation (HALO360) for Barrett's",
    prep:["All visible lesions treated with EMR first (histology to confirm T1a, no LVI)","Sizing balloon catheter (measures oesophageal diameter)","Conscious sedation or GA","Fluoroscopy optional"],
    steps:[
      {n:1,t:"Sizing catheter",d:"Pass sizing catheter; identify diameter; select appropriate Halo360 balloon (22–31 mm)"},
      {n:2,t:"Position catheter",d:"Place at proximal extent of Barrett's; check with endoscope"},
      {n:3,t:"Ablation",d:"Deliver 12 J/cm² energy; repeat × 2 passes per session; 1 cm overlap"},
      {n:4,t:"Debride coagulum",d:"Wipe ablated tissue with gauze cap; expose raw epithelium; optional second ablation"},
      {n:5,t:"Focal ablation",d:"Halo90 or RFA90 paddle for residual islands; targeted ablation"},
      {n:6,t:"Post-procedure",d:"PPI 40 mg BD × 4 weeks; return for endoscopy + ablation at 3 months until clearance"}
    ],
    pearls:["CE-IM rate 80% after 2–4 sessions; persistent islands require focal ablation (Halo90)","Post-RFA surveillance indefinitely — IM can recur in 20% at 5 years","EMR before RFA for any visible lesion — RFA of unrecognised cancer is inadequate treatment","T1b disease on EMR histology: refer for surgery — RFA alone inadequate"]
  },
  guidelines:[{src:"BSG Barrett's Oesophagus Guidelines 2013 (updated 2022)"},{src:"ESGE Barrett's Guideline 2017 (updated 2022)"},{src:"AspECT Trial: Jankowski et al., Lancet 2018"}],
  pearls:["AspECT: high-dose PPI + aspirin combination most effective for reducing OAC risk in Barrett's","RFA: 80% CE-IM after complete treatment — superior to surveillance alone for LGD/HGD","EMR for visible lesion first: critical to exclude T1b before planning RFA","CE-IM is NOT cure — lifelong surveillance required; 20% recurrence of IM"],
  mistakes:["RFA of visible lesion without EMR first — misses T1b cancer staging","Stopping PPI after ablation — acid reflux promotes recurrence of IM","Not biopsying suspicious areas in Barrett's — flat T1a cancer can be invisible","Not confirming LGD by expert pathologist — over-treatment if not truly LGD"]
},
{
  id:"zenker", dept:"uppergi", name:"Zenker's Diverticulum", latin:"Diverticulum Zenker", organ:"Oesophagus",
  severity:"low", tags:["pharynx","Killian dehiscence","diverticulum","dysphagia","regurgitation","stapler","endoscopic"],
  hero:"Pharyngeal pulsion diverticulum arising at Killian's dehiscence (between cricopharyngeus and inferior pharyngeal constrictor); causes dysphagia and regurgitation of undigested food.",
  keypoints:[
    "Pulsion diverticulum at Killian's triangle: between thyropharyngeus and cricopharyngeus — posterior midline weak spot",
    "Dysphagia + regurgitation of undigested food (hours after eating) + halitosis = classic triad",
    "Barium swallow: gold standard diagnosis; defines sac size; do NOT scope aggressively (perforation risk)",
    "Endoscopic stapler myotomy (Dohlman): first-line; divides cricopharyngeal bar between sac and oesophagus; <1 h; 90% success",
    "External approach (Zenker diverticulectomy + cricopharyngeal myotomy): larger sacs; failed endoscopic; better durability"
  ],
  differentials:["Oesophageal stricture (dysphagia to solids progressively)","Achalasia (dysphagia liquids + solids)","Oesophageal cancer","Epiphrenic diverticulum (lower oesophagus)","Globus pharyngeus (functional)"],
  mnemonics:[{name:"Killian's Dehiscence",text:"Posterior midline weak spot between thyropharyngeus (oblique fibres) and cricopharyngeus (horizontal fibres). Increased pharyngeal pressure → pulsion diverticulum through this dehiscence"}],
  overview:{
    definition:"Pharyngeal pulsion diverticulum herniating through Killian's dehiscence, posterior to the cricopharyngeus muscle, forming a sac in the posterior hypopharynx.",
    epidemiology:"Prevalence 0.01–0.1%; predominantly men >60 years; accounts for most symptomatic oesophageal diverticula.",
    pathophysiology:"Cricopharyngeal dysmotility (incomplete relaxation or hypertonia) → increased pharyngeal pressure → mucosa herniates through Killian's dehiscence → sac develops over years. Sac fills with food → regurgitation → aspiration pneumonia if unrecognised.",
    classification:[
      {label:"Small (<2 cm)",note:"May be asymptomatic; difficult to treat endoscopically — short common wall"},
      {label:"Medium (2–4 cm)",note:"Symptomatic; suitable for endoscopic stapler procedure"},
      {label:"Large (>4 cm)",note:"Prominent dysphagia; aspiration risk; endoscopic or open surgery"}
    ]
  },
  diagnosis:{
    history:["Dysphagia (solids > liquids — gradual)","Regurgitation of undigested food (hours later, no acid taste)","Halitosis (stasis)","Gurgling sound when swallowing","Aspiration cough, aspiration pneumonia","Elderly male"],
    examination:["Borborygmi neck (gurgling on palpation)","Soft compressible neck mass (filled sac)","Weight loss, malnutrition (large sac)"],
    investigations:[
      {name:"Barium swallow",role:"Gold standard: posterior midline sac; sac size; oesophageal axis; cricopharyngeal bar; functional assessment"},
      {name:"OGD",role:"Done with care; sac visible; assess cricopharyngeal bar; exclude concurrent malignancy; risk of scope entering sac and perforating"},
      {name:"HRM (oesophageal manometry)",role:"Cricopharyngeal dysmotility if symptoms atypical; before surgical planning"}
    ]
  },
  criteria:{
    title:"Indications and Approach Selection",
    items:[
      {k:"Symptomatic with any size",v:"Treat if fit — aspiration risk without treatment"},
      {k:"Endoscopic stapler (Dohlman)",v:"Sac ≥2 cm (adequate common wall for stapler); good mouth opening; no cervical spine immobility"},
      {k:"Open approach",v:"Sac <2 cm; failed endoscopic; recurrence; complex anatomy; cervical spine disease"},
      {k:"Cricopharyngeal myotomy alone",v:"Small sacs; can suture-close small sac or leave and perform only myotomy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Head positioning after meals; eat slowly; small portions","Avoid large boluses"],
    medical:["No pharmacological treatment"],
    surgical:[
      {name:"Endoscopic stapler myotomy (Dohlman/FESS)",when:"Sac ≥2 cm; preferred first-line; excellent results",notes:"Rigid diverticuloscope; divide common wall between sac and oesophagus using endoscopic stapler; no sac excision; day case; quick recovery; 90% relief"},
      {name:"Flexible endoscopic myotomy (SEM/DEM)",when:"Good visualisation; growing evidence; avoids rigid scope positioning",notes:"Flexible scope with needle knife; divide septum; coagulation; clips on mucosa; comparable to rigid"},
      {name:"External transcervical diverticulectomy + cricopharyngeal myotomy",when:"Large sac >5 cm; failed endoscopic; recurrence; small sac <2 cm (inadequate common wall)",notes:"Left neck incision; identify and excise sac; formal cricopharyngeal myotomy; drain; highest durability; risk of recurrent laryngeal nerve injury"}
    ]
  },
  technique:{
    title:"Endoscopic Stapler Myotomy (Dohlman Procedure)",
    prep:["GA; patient supine; hyperextended neck","Barium swallow reviewed","Diverticuloscope (Weerda or Storz) positioned"],
    steps:[
      {n:1,t:"Diverticuloscope placement",d:"Two-lipped diverticuloscope; anterior lip in oesophagus, posterior lip in sac; expose common wall (cricopharyngeal bar)"},
      {n:2,t:"Endostapler placement",d:"EndoGIA 45 mm endoscopic stapler (2.5 mm vascular cartridge) positioned across common wall"},
      {n:3,t:"Fire stapler",d:"Staple and divide common wall in one firing; may need 1–2 firings; expose bottom of sac"},
      {n:4,t:"Inspect",d:"Confirm adequate myotomy; no perforation; haemostasis; small bleeder → bipolar"},
      {n:5,t:"Post-procedure",d:"Soft diet from day 1; contrast swallow day 1 confirms no leak; discharge day 1–2"}
    ],
    pearls:["Adequate mouth opening required — rigid diverticuloscope needs >3.5 cm interincisal distance","Common wall must be ≥2 cm for safe stapler placement — small sacs: open approach","Flexible scope alternative: growing evidence, avoids need for rigid scope; needle knife myotomy","Recurrence: 10% at 5 years; re-do endoscopic procedure feasible"]
  },
  guidelines:[{src:"ESGE Clinical Guideline on Zenker's Diverticulum 2021"},{src:"SAGES Position Statement on Hypopharyngeal Diverticulum 2019"},{src:"BSG Upper GI Guideline 2022"}],
  pearls:["Endoscopic stapler myotomy: 90% symptom relief; day case; growing first-line recommendation","External approach: more durable; longer recovery; RLN injury risk 2–5%","Aspiration risk: untreated Zenker's causes aspiration pneumonia — treat all symptomatic patients","Small diverticula (<2 cm): difficult endoscopic approach; open transcervical approach preferred"],
  mistakes:["Aggressive OGD in unknown Zenker's — scope enters sac and causes posterior pharyngeal perforation","External approach without cricopharyngeal myotomy — 30% recurrence without myotomy","Endoscopic myotomy of inadequate common wall — stapler fails to fire safely; perforation risk","Diagnosing with CT alone — barium swallow is gold standard; CT can miss small sacs"]
},
{
  id:"meckel", dept:"uppergi", name:"Meckel's Diverticulum", latin:"Diverticulum Meckeli", organ:"Small bowel",
  severity:"medium", tags:["ileum","Meckel","rule of 2s","heterotopic gastric","bleeding","99mTc","diverticulectomy"],
  hero:"The most common congenital GI malformation; remnant of the vitello-intestinal duct; complications occur in 2–4% (bleeding, obstruction, inflammation).",
  keypoints:[
    "Rule of 2s: 2% population, 2 feet from ileocaecal valve, 2 inches long, 2:1 male:female, 2 types of ectopic tissue (gastric most common), 2 years most common age for complications",
    "Complications: GI bleeding (45%), intestinal obstruction (35%), acute Meckel's diverticulitis (20%)",
    "Bleeding: painless, episodic rectal bleeding in children; heterotopic gastric mucosa secretes acid → ulceration of adjacent ileal mucosa",
    "99mTc-pertechnetate scan: detects heterotopic gastric mucosa; sensitivity 85% in children; less sensitive in adults",
    "Incidental Meckel's in adults: controversial — resect only if narrow neck, symptomatic history, or at low operative risk"
  ],
  differentials:["Appendicitis (right iliac fossa pain/tenderness — differentiated by Meckel's scan or laparoscopy)","Intussusception (Meckel's as lead point)","Lower GI bleeding (juvenile polyp, IBD)","Duplication cyst","Intestinal volvulus"],
  mnemonics:[{name:"Rule of 2s",text:"2% incidence; 2 feet from IC valve; 2 inches long; 2:1 M:F; 2 types of ectopic tissue (gastric, pancreatic); complications usually before age 2"}],
  overview:{
    definition:"True diverticulum arising from the antimesenteric border of the terminal ileum, representing a persistent remnant of the omphalomesenteric (vitello-intestinal) duct.",
    epidemiology:"Prevalence 2% of population; M:F = 2:1; symptomatic in only 2–4% lifetime. Most complications in first 2 years of life (bleeding) and children/young adults (obstruction, diverticulitis).",
    pathophysiology:"Omphalomesenteric duct normally obliterates by week 7 → failure → Meckel's diverticulum. Heterotopic gastric mucosa (50% of symptomatic): produces HCl → peptic ulceration of adjacent ileum → painless haematochezia. Fibrous band (obliterated remnant) → internal hernia/volvulus.",
    classification:[
      {label:"Complicated Meckel's",note:"Bleeding; obstruction; diverticulitis; perforation; intussusception (diverticulum as lead point)"},
      {label:"Incidental Meckel's",note:"Found at laparoscopy/laparotomy; asymptomatic; selective resection (narrow neck, abnormal features, male <40)"}
    ]
  },
  diagnosis:{
    history:["Painless rectal bleeding: bright red or brick-red (children — most common presentation)","Intermittent rectal bleeding (adults — episodic; often misdiagnosed)","RIF pain mimicking appendicitis (Meckel's diverticulitis)","Small bowel obstruction (volvulus around fibrous band)","Intussusception (lead point — rare)"],
    examination:["Periumbilical or RIF tenderness (diverticulitis)","Signs of bowel obstruction","Peritonism (perforation)","Pallor (chronic blood loss)"],
    investigations:[
      {name:"99mTc-pertechnetate scan (Meckel's scan)",role:"Detects heterotopic gastric mucosa; sensitivity 85% in children; 60% adults; false-negative if gastric tissue absent (bleeding without gastric mucosa)"},
      {name:"CT abdomen/pelvis",role:"Obstruction; diverticulitis; perforation; incidental finding; does not reliably identify Meckel's unless complicated"},
      {name:"Capsule endoscopy",role:"Adults with obscure GI bleeding — Meckel's missed by scan; identifies mucosal lesion; cannot treat"},
      {name:"Angiography / CT angiography",role:"Active bleeding (>0.5 mL/min): localises site; guides embolisation (temporising) or surgical exploration"},
      {name:"Laparoscopy",role:"Most definitive diagnostic tool; allows direct inspection of terminal ileum 2 feet from IC valve"}
    ]
  },
  criteria:{
    title:"Indications for Resection",
    items:[
      {k:"Symptomatic Meckel's",v:"Always resect — bleeding, obstruction, diverticulitis, perforation"},
      {k:"Incidental Meckel's — resect if",v:"Male <40; narrow neck (<2 cm diameter relative to length); palpable ectopic tissue; previous unexplained GI bleeding"},
      {k:"Incidental Meckel's — observe if",v:"Female; older patient; wide neck; no palpable tissue; high surgical risk"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Observation for asymptomatic wide-neck Meckel's in adults","Blood transfusion for haemorrhage","Nutritional support"],
    medical:["No pharmacological treatment"],
    surgical:[
      {name:"Laparoscopic diverticulectomy",when:"Narrow-neck symptomatic Meckel's; at base of diverticulum without involving ileum",notes:"Identify diverticulum at 60 cm from IC valve; staple base; ensure no ectopic tissue at base — check frozen section if uncertain"},
      {name:"Small bowel resection + anastomosis",when:"Wide-base diverticulum; ectopic tissue extends into ileum; diverticulitis with necrosis; perforation; obstruction with volvulus",notes:"En bloc resection of diverticulum + 5–10 cm ileum; primary anastomosis usually safe; laparoscopic or open"},
      {name:"Fibrous band division",when:"Internal hernia or volvulus caused by persistent omphalomesenteric band",notes:"Divide band; reduce hernia; assess bowel viability; resect non-viable bowel"}
    ]
  },
  technique:{
    title:"Laparoscopic Meckel's Diverticulectomy",
    prep:["GA; supine; 3 ports: umbilical camera + 2 working","Identify terminal ileum; run bowel 60 cm from IC valve"],
    steps:[
      {n:1,t:"Identify Meckel's",d:"Anti-mesenteric border; 60 cm from IC valve; endoscope assists identification"},
      {n:2,t:"Assess base width",d:"Narrow neck (<2 cm): diverticulectomy safe. Wide or ectopic tissue at base: segmental resection"},
      {n:3,t:"Diverticulectomy",d:"60 mm endostapler across base at ileal wall; fire perpendicular to avoid stenosis"},
      {n:4,t:"Check lumen",d:"No stenosis at staple line; endoscopic check optional"},
      {n:5,t:"Send specimen",d:"Fresh to pathology; confirm ectopic gastric tissue presence (explains bleeding in >50%)"}
    ],
    pearls:["Rule of 2s helps recall anatomy — 2 feet from IC valve, anti-mesenteric border","Negative 99mTc scan does not exclude Meckel's — 15–40% false negative; laparoscopy is definitive","Diverticulectomy vs resection: base width determines approach — never leave ectopic gastric tissue behind","Incidental Meckel's in adults: resect in young males with narrow neck; not routinely in elderly/high risk"]
  },
  guidelines:[{src:"APSA Guidelines on Meckel's Diverticulum 2010 (updated)"},{src:"SAGES Guideline on Meckel's 2019"},{src:"Pediatric Surgery Natl Guidelines 2020"}],
  pearls:["Meckel's scan: 85% sensitivity in children for bleeding; false-negative if no gastric mucosa (1/3 of cases)","Laparoscopy is both diagnostic and therapeutic — most reliable approach for suspected Meckel's","Bleeding from Meckel's: ulceration of ileum ADJACENT to heterotopic gastric tissue — resect the junction, not just the diverticulum","Incidental resection in young males: reduces lifetime risk of complication; not recommended in elderly (risk > benefit)"],
  mistakes:["Diverticulectomy leaving ectopic tissue at base — recurrent bleeding","Negative Meckel's scan = no further workup in child with rectal bleeding — capsule endoscopy or laparoscopy needed","Not running the bowel at appendicectomy — Meckel's can mimic appendicitis; always inspect to 2 feet from IC valve","Wide-base diverticulectomy causing ileal stenosis — resect with anastomosis instead"]
},
{
  id:"caustic-oesoph", dept:"uppergi", name:"Caustic Oesophageal Injury", latin:"Laesio oesophagi caustica", organ:"Oesophagus",
  severity:"high", tags:["caustic","alkali","acid","stricture","oesophagus","endoscopy","dilation","oesophagectomy"],
  hero:"Corrosive injury to oesophagus and stomach from ingestion of alkali or acid; causes can range from mild mucosal erythema to full-thickness necrosis requiring emergency resection.",
  keypoints:[
    "Alkali (lye, drain cleaners): liquefactive necrosis — deeper penetration; stomach less affected (neutral pH)",
    "Acid (battery acid): coagulative necrosis — stomach severely affected; oesophagus relatively protected by mucus",
    "Zargar endoscopic classification (grades 0–3b) guides management and predicts stricture formation",
    "Emergency OGD within 12–24 h: only gentle endoscopy to grade injury; do NOT pass beyond injury in Grade 3b",
    "Late stricture (4–6 weeks post-injury): balloon dilation + steroid injection; oesophagectomy with colon/gastric conduit for refractory stricture"
  ],
  differentials:["Oesophageal foreign body","Spontaneous oesophageal perforation","Pill-induced oesophagitis","Oesophageal cancer (late stricture — always biopsy)","Radiation oesophagitis"],
  mnemonics:[{name:"Zargar Classification",text:"Grade 0=Normal; 1=Mucosal erythema; 2a=Fragile superficial erosions; 2b=Deep ulcers + exudate; 3a=Focal necrosis; 3b=Extensive necrosis = EMERGENCY RESECTION"}],
  overview:{
    definition:"Chemical burn injury to the oesophagus (and stomach) caused by ingestion of corrosive substances, with outcome ranging from mucosal irritation to transmural necrosis.",
    epidemiology:"Accidental ingestion in children; suicidal in adults. Severe injuries: 15% of caustic ingestions. Stricture: in 50% of Grade 2b/3 injuries.",
    pathophysiology:"Alkali: saponification of fats + protein denaturation → liquefactive necrosis → deep penetration. Acid: coagulative necrosis → eschar → relative barrier to penetration. Oesophagus: worst with alkali. Stomach: worst with acid (pyloric antrum). Neutrophil infiltration → collagen deposition → stricture (4–6 weeks).",
    classification:[
      {label:"Grade 0",note:"Normal mucosa"},
      {label:"Grade 1",note:"Erythema, oedema — no stricture risk; observe and discharge"},
      {label:"Grade 2a",note:"Superficial erosions, fragile mucosa — low stricture risk"},
      {label:"Grade 2b",note:"Deep ulcers, exudate, haemorrhage — 70–80% develop stricture"},
      {label:"Grade 3a",note:"Small areas of necrosis (brownish/greyish) — 90% develop stricture; partial resection may be needed"},
      {label:"Grade 3b",note:"Extensive transmural necrosis — emergency resection; high mortality (35%)"}
    ]
  },
  diagnosis:{
    history:["History of corrosive substance ingestion","Oral pain, odynophagia, drooling","Chest/abdominal pain (transmural injury)","Stridor (laryngeal/tracheal involvement)","Dysphagia (late stricture)","Deliberate ingestion history"],
    examination:["Oral burns, whitish coating, necrosis","Respiratory distress (laryngeal oedema)","Peritonism (gastric perforation)","Shock (transmural necrosis)"],
    investigations:[
      {name:"Chest/abdominal X-ray",role:"Free air (perforation); mediastinal widening (oesophageal injury); subcutaneous emphysema"},
      {name:"CT chest/abdomen (acute)",role:"Transmural injury (Grade 3b): full-thickness oedema/air/necrosis; guides surgical planning; free air"},
      {name:"Flexible OGD (within 12–24 h)",role:"Gold standard for grading; Zargar classification; gentle — stop at injury; do NOT progress through 3b injury (perforation risk)"},
      {name:"Barium/Gastrografin swallow",role:"Late presentation: stricture characterisation; do not use acutely if perforation suspected"}
    ]
  },
  criteria:{
    title:"Management by Zargar Grade",
    items:[
      {k:"Grade 0–1",v:"No treatment required; oral fluids; discharge; no stricture expected"},
      {k:"Grade 2a",v:"IV fluids; PPI; antibiotics × 3 days; soft diet; low stricture risk"},
      {k:"Grade 2b",v:"IV fluids; PPI; antibiotics; steroids (prednisolone 1 mg/kg/day × 3 weeks — reduces stricture formation); balloon dilation if stricture develops"},
      {k:"Grade 3a",v:"Intensive care; IV antibiotics; PPI; early repeat OGD; serial CT; surgical consultation"},
      {k:"Grade 3b",v:"Emergency laparotomy/thoracotomy; oesophagogastrectomy; cervical oesophagostomy; jejunostomy; delayed reconstruction (colon/gastric conduit 6–12 months)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NPO; IV fluids","PPI (reduces acid injury)","Broad-spectrum antibiotics (aspiration prophylaxis)","Nasogastric tube (if Grade 2b+): allow controlled feeding"],
    medical:["Steroids (prednisolone) for Grade 2b: reduces stricture formation (studies mixed; most centres use for Grade 2b)","NOT recommended for Grade 3a/3b (increases infection risk)","Late stricture: regular balloon dilation (4–6 weeks post-injury); intralesional steroid injection at dilation"],
    surgical:[
      {name:"Emergency oesophagogastrectomy",when:"Grade 3b; transmural necrosis; perforation; haemodynamic instability",notes:"Laparotomy + right thoracotomy; remove all necrotic tissue; cervical oesophagostomy (spit fistula); feeding jejunostomy; reconstruction with colon interposition 6–12 months later"},
      {name:"Oesophageal reconstruction",when:"Refractory stricture not amenable to dilation; multiple failed dilations; Grade 2b/3a long stricture",notes:"Colon interposition (preferred for caustic — long segment); substernal or posterior mediastinal route; or gastric pull-up if stomach unaffected"},
      {name:"Oesophageal balloon dilation",when:"Grade 2b/3a stricture at 4–6 weeks",notes:"Fluoroscopic guidance; hydrostatic balloon; start 12 mm, step up to 18 mm over serial sessions; 70% long-term success; repeat every 3–6 weeks as needed; steroid injection reduces re-stenosis"}
    ]
  },
  technique:{
    title:"Acute OGD for Caustic Injury Assessment",
    prep:["Resuscitation; airway assessment (laryngeal involvement)","Laryngoscopy if stridor present","IV PPI + broad-spectrum antibiotics before OGD","Gentle sedation; have surgical team on standby for Grade 3b"],
    steps:[
      {n:1,t:"Oral assessment",d:"Grade oral injury; check for laryngeal involvement"},
      {n:2,t:"Gentle oesophageal passage",d:"Pass scope slowly; grade injury; document extent"},
      {n:3,t:"Stop at Grade 3b",d:"Do not advance past circumferential necrosis — perforation risk"},
      {n:4,t:"Assess stomach",d:"If Grade <3b: assess gastric injury; pyloric damage"},
      {n:5,t:"Document and grade",d:"Zargar grade; inform surgical team if Grade 3a/3b; plan CT if Grade 3"}
    ],
    pearls:["Never force OGD past grade 3b injury — perforation risk","CT before OGD if haemodynamic instability or suspected perforation","Late oesophageal cancer: caustic stricture increases squamous cell carcinoma risk 40-fold; annual surveillance after 15–20 years","Colon interposition: preferred for long-segment caustic stricture — stomach may also be damaged"]
  },
  guidelines:[{src:"ESGE Caustic Ingestion Guideline 2019"},{src:"WSES Caustic Ingestion Guidelines 2020"},{src:"British Thoracic Society: Corrosive Ingestion 2017"}],
  pearls:["Grade 2b: steroids reduce stricture formation — most evidence for prednisolone 1 mg/kg/day × 3 weeks","Grade 3b: emergency surgery within hours; delayed resection → necrosis spreads and mediastinitis worsens mortality","Late stricture cancer surveillance: 40× increased SCC risk after caustic stricture — annual OGD from 15 years post-injury","Colon interposition: preferred over gastric pull-up if stomach damaged (acid ingestion)"],
  mistakes:["Advancing OGD through grade 3b necrosis — perforation with lethal mediastinitis","Steroids in Grade 3a/3b — increases infection risk without reducing stricture in transmural injuries","Delayed resection of transmural necrosis — waiting worsens mediastinitis and mortality","Not warning about late cancer risk from caustic stricture — 40× increased squamous cell carcinoma"]
},
{
  id:"small-bowel-net", dept:"uppergi", name:"Small Bowel Neuroendocrine Tumour", latin:"Tumor neuroendocrinus intestini tenuis", organ:"Small bowel",
  severity:"medium", tags:["carcinoid","NET","serotonin","carcinoid syndrome","mesenteric fibrosis","SSA","PRRT"],
  hero:"Well-differentiated neuroendocrine tumour of the small bowel (terminal ileum most common); carcinoid syndrome occurs with liver metastases; mesenteric fibrosis causes bowel ischaemia.",
  keypoints:[
    "Terminal ileum accounts for 45% of all GI-NETs; often small (<2 cm) but multifocal in 30%",
    "Carcinoid syndrome: flushing, diarrhoea, bronchospasm, tricuspid valve disease — only when liver metastases bypass hepatic serotonin metabolism",
    "Mesenteric fibrosis: desmoplastic reaction around mesenteric nodes → vascular encasement → short bowel from ischaemia",
    "Chromogranin A + 24-h urinary 5-HIAA: diagnostic; Ga-68 DOTATATE PET-CT: gold standard staging",
    "Surgery (R0 resection ± mesenteric node clearance) is key even for metastatic disease — mesenteric fibrosis complication prevention"
  ],
  differentials:["Crohn's disease (terminal ileitis)","Lymphoma (ileal)","Adenocarcinoma of small bowel (rare)","Meckel's diverticulum","Mesenteric ischaemia"],
  mnemonics:[{name:"Carcinoid Syndrome Criteria",text:"Flushing + Diarrhoea + Wheezing + Right-sided heart disease = Carcinoid syndrome. ONLY with liver metastases (hepatic metabolism bypassed). 5-HIAA >30 mg/24h confirms serotonin excess"}],
  overview:{
    definition:"Well-differentiated neuroendocrine tumour arising from enterochromaffin (Kulchitsky) cells of the small bowel, predominantly the terminal ileum.",
    epidemiology:"Incidence 2–3/100 000/year; rising with cross-sectional imaging. 50% have metastases at diagnosis. 5-year survival: localised 93%, nodal 89%, distant 60%.",
    pathophysiology:"Enterochromaffin cells secrete serotonin (5-HT) → vasoactive → diarrhoea, flushing. Hepatic metabolism normally neutralises serotonin — liver metastases bypass this → carcinoid syndrome. Desmoplastic reaction around mesenteric deposits → fibrosis → vascular/lymphatic encasement → mesenteric ischaemia.",
    classification:[
      {label:"WHO G1 (Ki-67 <3%)",note:"Low-grade; 5-year survival >90%; respond to SSAs"},
      {label:"WHO G2 (Ki-67 3–20%)",note:"Intermediate; multimodality treatment"},
      {label:"WHO G3 (Ki-67 >20%, well-differentiated)",note:"Variable; different from NEC"}
    ]
  },
  diagnosis:{
    history:["Flushing (triggered by alcohol, certain foods, stress) — hot sensation over face/chest","Watery diarrhoea (serotonin-mediated intestinal hypermotility)","Abdominal cramping","Wheezing (bronchoconstriction)","RHF symptoms (tricuspid regurgitation from serotonin cardiomyopathy)","Incidental finding on CT; acute presentation with bowel obstruction/ischaemia"],
    examination:["Flushing (often cutaneous demarcation)","Wheeze","Right-sided heart murmur (tricuspid — ECHO for carcinoid heart disease)","Abdominal mass (hepatomegaly from liver metastases)"],
    investigations:[
      {name:"24-h urinary 5-HIAA",role:"Serotonin metabolite; >30 mg/day confirms carcinoid syndrome; avoid high-serotonin foods (banana, tomato, avocado) for 48 h before"},
      {name:"Plasma chromogranin A (CgA)",role:"Elevated in all NETs; correlates with tumour burden; monitors treatment response"},
      {name:"Ga-68 DOTATATE PET-CT",role:"Gold standard staging: somatostatin receptor scintigraphy; detects primary, nodal, liver, bone metastases; guides PRRT eligibility"},
      {name:"CT abdomen/pelvis (triple phase)",role:"Primary tumour often small and missed; mesenteric mass (mesenteric fibrosis = tethered mesentery); liver metastases (arterially enhancing)"},
      {name:"Echocardiogram",role:"Carcinoid heart disease: tricuspid and pulmonary valve thickening/regurgitation; surgery before cardiac valve repair"},
      {name:"EGD + colonoscopy",role:"Exclude multiple NETs; rectal/duodenal NETs visible endoscopically; ileal NETs often not seen"}
    ]
  },
  criteria:{
    title:"Treatment Approach",
    items:[
      {k:"Localised G1/G2",v:"Curative surgical resection with regional lymphadenectomy"},
      {k:"Metastatic G1/G2 (liver mets)",v:"Surgical debulking of primary + liver ± ablation; SSAs (lanreotide/octreotide); PRRT if DOTATATE positive"},
      {k:"Carcinoid syndrome control",v:"SSAs (octreotide LAR 20–30 mg IM monthly); telotristat (tryptophan hydroxylase inhibitor) for refractory diarrhoea"},
      {k:"Carcinoid heart disease",v:"Cardiological review; valve replacement before or at time of surgery; cover with octreotide perioperatively (carcinoid crisis)"},
      {k:"Carcinoid crisis",v:"IV octreotide 100–500 μg bolus; triggered by anaesthesia/surgery; prevent by pre-op subcutaneous octreotide depot"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Dietary triggers avoidance (alcohol, fermented foods, catecholamine-containing foods)","Pre-op octreotide depot (lanreotide or octreotide LAR) to prevent carcinoid crisis during anaesthesia"],
    medical:["Somatostatin analogues: octreotide LAR 20–30 mg IM monthly or lanreotide 60–120 mg deep SC; controls symptoms 70–85%; PROMID trial: disease stabilisation in midgut NET","Telotristat ethyl: inhibits serotonin synthesis; approved for refractory carcinoid diarrhoea","Everolimus/sunitinib: progressive midgut NET (RADIANT-2 trial)","PRRT (Lu-177 DOTATATE): NETTER-1 trial — 79% PFS improvement for progressive G1/G2 midgut NET"],
    surgical:[
      {name:"Ileal resection + mesenteric lymphadenectomy",when:"Resectable localised or even metastatic primary tumour (mesenteric fibrosis prevention)",notes:"Wide ileal resection; lymph node dissection (even if involved); important to prevent mesenteric fibrosis and future bowel ischaemia; multifocal primaries (30%)"},
      {name:"Liver debulking / ablation",when:"Hepatic metastases (>70% debulking threshold improves symptoms and may improve survival)",notes:"Combine with primary resection; RFA/MWA for small lesions; hepatic arterial embolisation/TARE for multiple bilateral lesions"},
      {name:"Emergency right hemicolectomy",when:"Acute bowel obstruction/ischaemia from mesenteric fibrosis",notes:"Urgent resection; mesenteric fibrosis may make complete resection difficult; assess bowel viability carefully"}
    ]
  },
  technique:{
    title:"Ileal NET Resection with Mesenteric Lymphadenectomy",
    prep:["Ga-68 DOTATATE PET confirms staging","Cardiological review (carcinoid heart)","Pre-op SSA depot to prevent carcinoid crisis","Octreotide infusion 500 μg/h on pump during surgery"],
    steps:[
      {n:1,t:"Explore entire small bowel",d:"30% are multifocal — run entire ileum; 60 cm from IC valve; identify all primary tumours"},
      {n:2,t:"Assess mesenteric root",d:"Mesenteric nodal disease/fibrosis; plan resection extent; may require extended mesenteric dissection"},
      {n:3,t:"Wide ileal resection",d:"En bloc resection of primary + 5–10 cm margins; palpable lymph nodes in mesentery included"},
      {n:4,t:"Mesenteric lymph node dissection",d:"Dissect along superior mesenteric vessels; remove all accessible nodes even if technically difficult"},
      {n:5,t:"Assess residual bowel viability",d:"Mesenteric fibrosis may compromise blood supply; ensure adequate bowel vascularity"},
      {n:6,t:"Anastomosis",d:"Primary ileocolic anastomosis; protect blood supply"}
    ],
    pearls:["Carcinoid crisis: sudden severe flushing, hypotension, bronchospasm during anaesthesia — IV octreotide 500 μg immediately","Multifocal primaries: 30% — run entire ileum at operation","Mesenteric lymph node dissection: even palliative dissection prevents mesenteric fibrosis and ischaemia","PRRT: Lu-177 DOTATATE — 79% PFS improvement in NETTER-1 trial; requires DOTATATE PET positive scan"]
  },
  guidelines:[{src:"ENETS Consensus Guidelines 2016 (updated 2022)"},{src:"NCCN Neuroendocrine 2023"},{src:"NETTER-1 Trial: Strosberg et al., NEJM 2017"}],
  pearls:["Carcinoid crisis: always pre-treat with SSA depot before surgery or procedure","Mesenteric fibrosis: second major cause of morbidity; resect primary even if metastatic to prevent this","PRRT (NETTER-1): 79% PFS improvement for progressive midgut NET on SSA — most effective systemic treatment","Carcinoid heart disease: echocardiogram mandatory; tricuspid regurgitation from serotonin cardiomyopathy"],
  mistakes:["Not covering with octreotide infusion perioperatively — carcinoid crisis on induction","Not running entire small bowel — missing multifocal primaries (30%)","Not checking echocardiogram before surgery — undiagnosed carcinoid heart disease increases operative risk","Starting systemic therapy without DOTATATE PET — PRRT only effective if DOTATATE receptor positive"]
},
{
  id:"short-bowel", dept:"uppergi", name:"Short Bowel Syndrome", latin:"Syndroma intestini brevi", organ:"Small bowel",
  severity:"high", tags:["short bowel","ileostomy","TPN","teduglutide","Crohn","adaptation","resection"],
  hero:"Malabsorption syndrome resulting from loss of functional intestinal length; TPN dependence; teduglutide (GLP-2 analogue) can achieve enteral autonomy in selected patients.",
  keypoints:[
    "Short bowel syndrome (SBS): <200 cm small bowel in adults after resection or functional loss (SBS requiring TPN: <100 cm with end jejunostomy, <50 cm with intact colon)",
    "Three phases: hypersecretion (first 2 months), adaptation (1–2 years), maintenance (stable)",
    "Adaptation: mucosal hyperplasia, villous elongation — maximised by enteral nutrition (luminal stimulation)",
    "Teduglutide (GLP-2 analogue): reduces TPN requirements by 4–7 days/week; FDA/NICE approved",
    "Intestinal transplantation: reserved for TPN-failure (catheter sepsis, liver failure, thrombosis); 5-year survival 60–65%"
  ],
  differentials:["Chronic radiation enteritis (functional SBS)","Crohn's disease (strictures mimicking SBS)","Motility disorder (pseudo-obstruction)","Lymphangiectasia","Whipple's disease"],
  mnemonics:[{name:"TPN Dependence Thresholds",text:"End jejunostomy: <100 cm remaining small bowel → likely TPN dependent. Intact ileocaecal valve + colon: <50 cm tolerates enteral. Colon adaptation is key: absorbs fluid, ferments carbs to SCFA"}],
  overview:{
    definition:"Malabsorption of macronutrients, micronutrients, and fluid/electrolytes due to loss of functional intestinal surface area following surgical resection or disease.",
    epidemiology:"Prevalence 3–4/million in UK; Crohn's disease (most common cause — 35%); mesenteric ischaemia; volvulus; radiation; atresia. Home TPN patients: 3000–4000 in UK.",
    pathophysiology:"Loss of absorptive surface → malabsorption → diarrhoea, dehydration, malnutrition. Intact colon = crucial adaptation (absorbs fluid, bacterial fermentation of carbohydrate → SCFA → colonocyte nutrition). Massive gastric acid hypersecretion (first 6 months) — treat with PPI. Bacterial overgrowth → D-lactic acidosis in jejunocolonic anastomosis.",
    classification:[
      {label:"Type 1 (end jejunostomy)",note:"High output; no colon; greatest fluid/electrolyte loss; most TPN dependent"},
      {label:"Type 2 (jejunocolonic anastomosis)",note:"Some colon; better fluid absorption; more tolerant of enteral; D-lactic acidosis risk"},
      {label:"Type 3 (jejunoileal anastomosis)",note:"Intact colon and ileocaecal valve; best adaptation potential; may achieve enteral autonomy"}
    ]
  },
  diagnosis:{
    history:["History of bowel resection (Crohn's, mesenteric ischaemia, volvulus, trauma, radiation)","High stoma output (>2 L/day)","Malnutrition, weight loss","Electrolyte disturbances (sodium, magnesium depletion)","TPN dependence","Recurrent sepsis (CVAD infections)"],
    examination:["Malnutrition, cachexia","Peripheral oedema (hypoalbuminaemia)","Stoma (high-output)","Micronutrient deficiencies: B12, fat-soluble vitamins, zinc"],
    investigations:[
      {name:"Remaining bowel length measurement",role:"Intraoperative measurement; CT small bowel imaging (virtual enteroscopy); functional assessment"},
      {name:"24-h stool/ileostomy output",role:">2 L/day = high output requiring oral rehydration salts; guides fluid management"},
      {name:"Nutritional panel",role:"Albumin, pre-albumin, B12, fat-soluble vitamins (A, D, E, K), zinc, selenium, magnesium, phosphate"},
      {name:"Serum citrulline",role:"Marker of enterocyte mass; <20 μmol/L = SBS; predicts TPN dependence"},
      {name:"CT small bowel",role:"Remaining bowel anatomy; strictures; fistulas; assessment for surgical lengthening procedures"}
    ]
  },
  criteria:{
    title:"Management Thresholds",
    items:[
      {k:"TPN likely if",v:"End jejunostomy <100 cm; jejunocolonic <50 cm; jejunoileal without colon <100 cm"},
      {k:"Enteral autonomy possible if",v:"Adequate colon; residual >100 cm; jejunoileal anastomosis; adapted bowel"},
      {k:"Teduglutide indication",v:"TPN-dependent SBS; ≥1 year stable; no active Crohn's; no malignancy within 5 years"},
      {k:"Intestinal transplant",v:"TPN-dependent + catheter sepsis/thrombosis; TPN liver failure (PNAC); failure of teduglutide; very short bowel (<50 cm)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Oral rehydration solutions (low-sodium WHO ORS ineffective — use glucose-saline solutions)","High-sodium diet; sodium supplementation","Proton pump inhibitors (reduce gastric hypersecretion — especially in first 6 months)","Anti-motility agents: loperamide 4–16 mg/day; codeine phosphate (jejunostomy type 1)"],
    medical:["Teduglutide (Revestive/Gattex) 0.05 mg/kg/day SC: GLP-2 analogue → mucosal hyperplasia → increased absorption; reduces TPN requirements 4–7 days/week (STEPS trial); polyp surveillance required","B12 injection monthly (lost with >60 cm terminal ileum resection)","Fat-soluble vitamin supplementation; trace elements","Home TPN: Intralipid-based; cyclical 12–14 h/night; CVAD care"],
    surgical:[
      {name:"STEP (serial transverse enteroplasty)",when:"Dilated small bowel (>4 cm) with adequate length; improves motility; lengthens bowel functional surface",notes:"Serial firing of endostapler perpendicular to bowel axis; converts wide dilated bowel to tapering tube; 50% achieve enteral autonomy post-procedure"},
      {name:"Bianchi (LILT — longitudinal intestinal lengthening and tailoring)",when:"Dilated bowel without mesentery involvement; less commonly performed now vs STEP",notes:"Split bowel along mesentery; create two limbs; reconnect end-to-end; lengthens and tailors"},
      {name:"Intestinal transplantation",when:"Life-threatening TPN complications; PNAC; recurrent catheter sepsis; thrombosis of all central veins",notes:"Isolated small bowel; or combined liver-intestine transplant (if PNAC liver failure); tacrolimus-based immunosuppression; high rejection rate; 5-year survival 60–65%"}
    ]
  },
  technique:{
    title:"STEP Procedure for Short Bowel Syndrome",
    prep:["CT/MRI documents dilated bowel segment","Length must be adequate (>150 cm remaining + dilation >4 cm)","Nutritional optimisation before surgery"],
    steps:[
      {n:1,t:"Identify dilated segment",d:"Measure dilated small bowel; mark mesenteric border and anti-mesenteric border"},
      {n:2,t:"Alternating staplers",d:"GIA 75/80 mm vascular stapler; fire perpendicular to bowel axis alternating from each side; leave 2–2.5 cm central lumen"},
      {n:3,t:"Stagger firings",d:"Each staple fire 2–3 cm from adjacent; creates zigzag pattern; reduces stenosis risk"},
      {n:4,t:"Test patency",d:"Pass catheter through lumen; adequate lumen check; anastomosis may be needed if multiple strictures"},
      {n:5,t:"Post-STEP",d:"Serial measurements of remaining bowel; enteral feeds progressively; TPN weaning"}
    ],
    pearls:["Teduglutide: oncology surveillance required — promotes villous growth; polyp screening by OGD and colonoscopy before and during treatment","PNAC (parenteral nutrition-associated cholestasis): fatty liver → cirrhosis from long-term TPN; fish oil-based lipids (Omegaven) reduce incidence","Citrulline <20 μmol/L: predicts TPN dependence; citrulline >30 post-adaptation: likely enteral autonomy","STEP results: 50% achieve enteral autonomy, especially with jejunocolonic anatomy"]
  },
  guidelines:[{src:"ESPEN Guidelines on Short Bowel Syndrome 2023"},{src:"NICE TA449: Teduglutide for SBS 2019"},{src:"IPSAC Standards for Intestinal Rehabilitation 2020"}],
  pearls:["Teduglutide (GLP-2 analogue): STEPS trial — reduces TPN by 4–7 days/week; 62% achieve ≥20% TPN reduction","Oral rehydration: World Health Organization low-sodium ORS NOT suitable for high-output stoma — use glucose-saline 100 mmol sodium solution","Serum citrulline: best functional marker of enterocyte mass; use to monitor adaptation progress","STEP procedure: 50% enteral autonomy; particularly effective in dilated bowel (>4 cm)"],
  mistakes:["WHO ORS (low sodium) in high-output jejunostomy — worsens sodium depletion; use high-sodium ORS","Long-term lipid-only TPN causing PNAC — use fish oil-based lipids (Omegaven) to prevent cholestasis","Not starting teduglutide until multiple TPN complications — early use reduces TPN dependence","Not monitoring for polyps on teduglutide — GLP-2 promotes mucosal growth; colonoscopy at baseline and year 1"]
},
{
  id:"radiation-enteritis", dept:"uppergi", name:"Radiation Enteritis", latin:"Enteritis post-radiationes", organ:"Small bowel",
  severity:"medium", tags:["radiation","small bowel","stricture","fistula","pelvic","chronic","resection"],
  hero:"Intestinal injury from ionising radiation, acute (during therapy) or chronic (months to years post-RT); affects small bowel and rectum most commonly in pelvic RT.",
  keypoints:[
    "Acute radiation enteritis (during RT): self-limiting; managed conservatively (anti-diarrhoeal, elemental diet)",
    "Chronic radiation enteritis (3 months to years post-RT): progressive obliterative endarteritis → mucosal ischaemia → stricture, fistula, bleeding",
    "Terminal ileum and rectum most affected by pelvic RT (prostate, cervical, rectal cancer RT)",
    "Surgery high risk: radiation-damaged tissue has poor healing; fistulas and anastomotic leaks common",
    "Avoid operating if possible; enteral nutrition; HBO therapy; diversion stoma as first step"
  ],
  differentials:["Crohn's disease (chronic inflammation, similar stricture/fistula pattern)","Recurrent malignancy (must biopsy stricture/fistula)","IBD (UC/Crohn's — distinguish by history)","Ischaemic enteritis/colitis","Infective enterocolitis"],
  mnemonics:[{name:"Radiation Enteritis Management Ladder",text:"Conservative → Nutritional support → HBO → Endoscopic dilation (stricture) → Diversion stoma → Resection as last resort (all with awareness of anastomotic leak risk from radiation-damaged tissue)"}],
  overview:{
    definition:"Inflammatory and fibrovascular injury to the intestine caused by ionising radiation, occurring acutely during treatment or chronically months to years after completion.",
    epidemiology:"2–15% of pelvic RT patients develop significant chronic radiation enteritis. RT: cervical cancer (30–40 Gy), prostate cancer (IMRT), rectal cancer (45 Gy). Risk factors: prior abdominal surgery, adhesions, low BMI, hypertension, diabetes.",
    pathophysiology:"Acute: direct mucosal crypt cell death → mucosal inflammation → diarrhoea (self-limiting 2–4 weeks). Chronic: obliterative endarteritis (endothelial proliferation + subintimal fibrosis) → progressive mucosal ischaemia → atrophy, fibrosis → stricture, fistula (enterovaginal, enterorectal, enterovesical), bleeding, abscess.",
    classification:[
      {label:"Acute radiation enteritis",note:"During or within 3 months of RT; mucosal inflammation; self-limiting; conservative management"},
      {label:"Chronic radiation enteritis",note:"≥3 months post-RT; progressive; obliterative endarteritis; stricture, fistula, bleeding; may need surgery"}
    ]
  },
  diagnosis:{
    history:["History of pelvic/abdominal RT (prostate, cervical, rectal, bladder cancer)","Diarrhoea, malabsorption","Rectal bleeding, tenesmus, rectal stricture (radiation proctitis)","Features of obstruction (chronic stricture)","Fistula: rectovaginal (stool PR/vagina), vesicointestinal (pneumaturia, faecuria)","Malnutrition, weight loss"],
    examination:["Abdominal tenderness; mass (abscess)","Fistula orifice (vagina, anterior abdominal wall)","Rectal examination: radiation proctitis, stricture, fistula"],
    investigations:[
      {name:"CT abdomen/pelvis",role:"Stricture, fistula, abscess, bowel wall thickening; distinguish from recurrence; free air"},
      {name:"MRI pelvis",role:"Fistula characterisation (rectovaginal, enterovaginal, vesicointestinal); soft tissue detail"},
      {name:"Colonoscopy/sigmoidoscopy",role:"Radiation proctitis (telangiectasia, mucosal pallor, friable); stricture; biopsy to exclude recurrent malignancy"},
      {name:"Biopsy of stricture/fistula",role:"Mandatory — 15–30% of 'radiation strictures' are actually recurrent malignancy"},
      {name:"Nutritional assessment",role:"Albumin, vitamins, B12, trace elements — often severely malnourished"}
    ]
  },
  criteria:{
    title:"LENT-SOMA Grade (Late Effects Normal Tissue)",
    items:[
      {k:"Grade 1",v:"Mild symptoms; no medication required"},
      {k:"Grade 2",v:"Moderate symptoms; controlled with medications (loperamide, sucralfate enemas)"},
      {k:"Grade 3",v:"Severe symptoms; need for surgical intervention; impaired daily activities"},
      {k:"Grade 4",v:"Life-threatening; perforation, fistula, obstruction; emergency surgery; TPN dependence"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Elemental or semi-elemental diet; TPN if severely malnourished","Anti-diarrhoeal agents: loperamide, codeine phosphate","Sucralfate enemas (radiation proctitis): reduces bleeding and inflammation","Mesalazine enemas/suppositories: adjunct for proctitis"],
    medical:["Hyperbaric oxygen therapy (HBO): 20–40 sessions at 2.5 atm; promotes angiogenesis in ischaemic tissue; reduces bleeding and fistula formation","Pentoxifylline + vitamin E: improves microvascular perfusion; evidence in radiation fibrosis"],
    surgical:[
      {name:"Defunctioning loop ileostomy",when:"Rectovaginal/enterocutaneous fistula; protecting healing anastomosis; severe radiation proctitis not responding to medical treatment; first-line surgical step",notes:"Avoids high-risk resection acutely; allows nutritional optimisation; fistula may heal with diversion alone (20%)"},
      {name:"Bypass (enteroenteric)",when:"Radiation stricture causing obstruction; bowel not amenable to resection; avoids high-risk anastomosis in radiation field",notes:"Bypass loop proximal to stricture; side-to-side or end-to-side; anastomosis outside radiation field; lower leak risk than resection"},
      {name:"Resection + anastomosis",when:"Resection unavoidable (malignancy, fistula, abscess, failed bypass); anastomosis outside radiation field",notes:"Ensure all anastomoses are outside radiation field; use healthy non-irradiated bowel; defunctioning ileostomy protective; omentum wrapping reduces leak"}
    ]
  },
  technique:{
    title:"Defunctioning Loop Ileostomy for Radiation Complications",
    prep:["Nutritional optimisation (TPN if necessary)","Stoma therapist marking for RIF position","GA; supine; laparoscopic or open"],
    steps:[
      {n:1,t:"Identify loop of terminal ileum",d:"25–30 cm from IC valve; adequate mobility; mesentery not under tension"},
      {n:2,t:"RIF stoma site",d:"Through rectus abdominis; 2–3 cm skin incision; fascia cruciate incision; adequate width for loop"},
      {n:3,t:"Loop creation",d:"Stoma rod or bridge under mesentery; secure to skin; do not twist"},
      {n:4,t:"Mature ileostomy",d:"Evert efferent limb (spout 3–4 cm); everted loop ileostomy; secure full-thickness sutures"},
      {n:5,t:"Reversal planning",d:"MRI/contrast enema to confirm fistula healing; reversal at 3–6 months if resolved"}
    ],
    pearls:["Anastomosis outside radiation field: key principle — if ANY anastomosis is in the radiation field, cover with diversion stoma","HBO therapy: 30 sessions × 90 min reduce bleeding in radiation proctitis by 60%","Always biopsy stricture: 15–30% are recurrent malignancy — change management entirely","Radiation enteritis surgery: 20–30% anastomotic leak if operated in radiation field — highest leak rate of any GI anastomosis"]
  },
  guidelines:[{src:"ESPEN Guidelines on Radiation Enteritis 2017"},{src:"NICE: Late Radiation Effects (NHS England) 2020"},{src:"ACPGBI Radiation Proctitis Position Statement 2021"}],
  pearls:["HBO: 30 sessions — most effective treatment for chronic radiation proctitis bleeding (60% response)","Always biopsy radiation stricture — recurrent cancer in 15–30%","Anastomosis in radiation field: 20–30% leak rate; always divert or bypass to healthy bowel","Defunctioning stoma: first surgical step for rectovaginal fistula; allows optimisation and may achieve healing without formal repair"],
  mistakes:["Anastomosis in radiation-damaged bowel — near-universal leak risk; always use non-irradiated bowel","Not biopsying radiation stricture — missing recurrent malignancy","Operating without nutritional optimisation — radiation enteritis patients are severely malnourished; TPN pre-op mandatory","Resection when bypass is safer — bypass outside the radiation field is lower risk and equally effective for obstruction"]
}
];
