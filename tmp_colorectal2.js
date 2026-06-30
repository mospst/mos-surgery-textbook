// Colorectal diseases — batch 2 of 2
window._TMP_COLORECTAL2 = [
{
  id:"bowel-obstruction", dept:"colorectal", name:"Small Bowel Obstruction", latin:"Obstructio intestini tenuis", organ:"Small bowel",
  severity:"high", tags:["SBO","adhesions","hernia","strangulation","NG tube","laparotomy"],
  hero:"Mechanical obstruction of the small intestine; adhesions account for 75% of cases; strangulation (10%) is a surgical emergency with 30% mortality if delayed.",
  keypoints:[
    "Adhesions (75%), hernias (10%), neoplasm (5%), Crohn's — most common causes",
    "Strangulation signs: fever, tachycardia, leukocytosis >18, peritonism, CRP >150, elevated lactate — urgent surgery",
    "CT abdomen/pelvis (IV contrast): sensitivity 93% for complete SBO; identifies transition point, cause, and strangulation",
    "Non-operative management (drip-and-suck): successful in 70% of partial SBO within 48 h; water-soluble contrast challenge (Gastrografin) accelerates resolution and predicts need for surgery",
    "Complete/closed-loop/strangulation: urgent laparotomy/laparoscopy"
  ],
  differentials:["Large bowel obstruction (caecal dilation, peripheral colonic air)","Paralytic ileus (generalised, no mechanical point)","Mesenteric ischaemia (pain out of proportion)","Pseudo-obstruction (Ogilvie)","Volvulus"],
  mnemonics:[{name:"Strangulation Signs",text:"Fever + Tachycardia + Peritonism + WBC>18 + Elevated lactate = Strangulation → URGENT surgery. Any ONE feature should prompt emergency operation"}],
  overview:{
    definition:"Mechanical interruption of the passage of intestinal contents due to an extrinsic or intrinsic lesion of the small bowel.",
    epidemiology:"SBO accounts for 20% of surgical admissions; 300 000 operations/year in USA. Post-operative adhesions in 75%; responsible for 5% of all surgical readmissions.",
    pathophysiology:"Obstruction → bowel dilation proximal to block → fluid/gas accumulation → increased intraluminal pressure → venous occlusion → mucosal ischaemia → bacterial translocation → perforation. Closed-loop obstruction (two points of obstruction): most rapid progression to strangulation.",
    classification:[
      {label:"Partial SBO",note:"Some gas/fluid passes obstruction; responds to non-operative management in 70%"},
      {label:"Complete SBO",note:"No gas/fluid passage; requires operative management if no resolution in 48 h"},
      {label:"Closed-loop obstruction",note:"Two points of obstruction (volvulus, internal hernia); strangulation risk very high; urgent surgery"},
      {label:"Strangulated SBO",note:"Vascular compromise; surgical emergency; mortality 30% if delayed >6 h"}
    ]
  },
  diagnosis:{
    history:["Colicky abdominal pain (peri-umbilical/diffuse)","Vomiting (bilious — proximal; faeculent — distal)","Abdominal distension","Absolute constipation (complete) vs reduced flatus (partial)","Previous surgery, hernia, known Crohn's","Risk factors for internal hernia: previous gastric bypass"],
    examination:["Distension, visible peristalsis","Tinkling high-pitched bowel sounds (early) → silent (late)","Tenderness: generalised mild (partial) vs localised peritonism (strangulation)","Examine all hernial orifices: inguinal, femoral, umbilical, incisional","DRE: empty rectum in complete obstruction"],
    investigations:[
      {name:"AXR (erect and supine)",role:"Dilated small bowel loops (>3 cm); central position (colon peripheral); valvulae conniventes cross full width; air-fluid levels on erect; free air (perforation)"},
      {name:"CT abdomen/pelvis (IV oral contrast)",role:"Gold standard: transition point (site of obstruction); cause (adhesion, hernia, mass, volvulus); strangulation signs (mesenteric fat stranding, bowel wall thickening, free fluid)"},
      {name:"FBC, CRP, U&E, lactate",role:"WBC >18 + CRP >150 + elevated lactate = strangulation; hyponatraemia, hypokalaemia from vomiting"},
      {name:"Water-soluble contrast challenge (Gastrografin/Omnipaque)",role:"96% sensitivity for predicting non-operative resolution; if contrast reaches caecum within 24 h → 95% resolve non-operatively"}
    ]
  },
  criteria:{
    title:"Bologna Guidelines: Operative vs Non-Operative",
    items:[
      {k:"Immediate surgery",v:"Strangulation (any sign); complete SBO not resolving; closed-loop obstruction; peritonitis; ischaemia on CT"},
      {k:"Non-operative (drip-and-suck)",v:"Partial SBO; virgin abdomen less likely to succeed; adhesional SBO; no peritonism; no strangulation"},
      {k:"Gastrografin challenge",v:"Water-soluble contrast via NGT; if contrast in caecum at 24 h = non-operative success (avoids laparotomy in 25%); if not → proceed to surgery"},
      {k:"Time limit",v:"72 h maximum for non-operative trial; longer increases strangulation risk"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV fluid resuscitation (normal saline or Hartmann's — correct electrolytes)","NGT decompression (Ryle's tube)","Nil by mouth","Urinary catheter; strict fluid balance","Serial examination every 4–6 h","Electrolyte correction (K+ losses from NG drainage)"],
    medical:["Anti-emetics; analgesia","VTE prophylaxis (LMWH if not operating imminently)","Gastrografin 100 mL via NGT if complete SBO at 48 h — diagnostic and therapeutic"],
    surgical:[
      {name:"Laparoscopic adhesiolysis",when:"Complete SBO failing non-operative management; early post-op SBO; first laparotomy; experienced laparoscopic surgeon",notes:"Identification and division of obstructing band; bowel viability assessment; conversion if dense adhesions; lower post-op adhesion formation than open"},
      {name:"Open laparotomy + adhesiolysis",when:"Failed laparoscopic; dense adhesions; multiple previous operations; strangulation requiring bowel resection",notes:"Midline incision; run entire bowel; resect non-viable bowel; primary anastomosis vs stoma based on contamination/bowel condition"},
      {name:"Bowel resection + anastomosis",when:"Strangulated non-viable bowel; Meckel's diverticulitis; mass obstruction",notes:"Resect compromised segment; assess reperfusion after adhesiolysis (warm packs × 5 min); anastomosis or stoma"},
      {name:"Hernia repair ± bowel resection",when:"Incarcerated/strangulated hernia causing SBO",notes:"Reduce hernia; assess viability; mesh repair only if no contamination; delayed mesh for contaminated field"}
    ]
  },
  technique:{
    title:"Laparotomy for SBO with Strangulation",
    prep:["Resuscitation: IV fluids, NG decompression, correct electrolytes","Antibiotics: piperacillin-tazobactam","GA; urinary catheter; epidural"],
    steps:[
      {n:1,t:"Midline laparotomy",d:"Extend incision if previous scars; careful sharp entry to avoid enterotomy"},
      {n:2,t:"Decompression",d:"Milk bowel contents proximally; nasogastric decompression; reduces bowel dilation for handling"},
      {n:3,t:"Identify transition point",d:"Follow dilated bowel to collapsed bowel; identify obstructing adhesion, band, or mass"},
      {n:4,t:"Adhesiolysis",d:"Sharp scissors; avoid diathermy near bowel; divide ALL adhesions systematically; run entire bowel"},
      {n:5,t:"Bowel viability assessment",d:"Warm packs for 5 min; assess colour, peristalsis, mesenteric Doppler; resect if non-viable"},
      {n:6,t:"Anastomosis or stoma",d:"Primary anastomosis if well-perfused, no contamination, fit patient; Hartmann's or loop ileostomy if high risk"}
    ],
    pearls:["Enterotomy during adhesiolysis: repair immediately; note location for later assessment","Viability: pink, peristalsis, bleeding from cut edge = viable; doppler pulse present","30-min rule: wait 30 min after adhesiolysis before deciding on resection of borderline bowel","Never leave non-viable bowel — 30% mortality if perforation occurs within 48 h"]
  },
  guidelines:[{src:"Bologna World Society of Emergency Surgery Guidelines 2017"},{src:"WSES SBO Adhesive Guidelines 2023"},{src:"EAST Practice Management Guidelines SBO 2013"}],
  pearls:["Gastrografin challenge: if contrast reaches caecum at 24 h = 95% will resolve without surgery","Strangulation: cannot be reliably excluded clinically or radiologically — any suspicion → operate","Laparoscopic adhesiolysis: superior outcomes if feasible — lower adhesion reform rates","NGT decompression: reduces distension and vomiting but does not treat obstruction — serial examination mandatory"],
  mistakes:["Delayed surgery for strangulation — mortality doubles for every 6-hour delay","Non-operative management of closed-loop obstruction — always surgical emergency","Overzealous NG drainage depletion without electrolyte replacement — hypokalaemia, metabolic alkalosis","Intra-operative enterotomy unrecognised — always inspect entire bowel before closure"]
},
{
  id:"sigmoid-volvulus", dept:"colorectal", name:"Sigmoid Volvulus", latin:"Volvulus sigmoidei", organ:"Colon",
  severity:"high", tags:["sigmoid","volvulus","coffee bean","endoscopy","decompression","sigmoid colectomy"],
  hero:"Axial rotation of the sigmoid colon on its mesentery causing closed-loop obstruction; commonest in elderly, institutionalised, or high-fibre diet populations.",
  keypoints:[
    "Accounts for 5% of LBO in West; 50% in Africa/Asia; predisposed by redundant sigmoid on narrow mesentery",
    "Coffee bean sign on AXR: massively distended sigmoid pointing to RUQ",
    "Endoscopic decompression (rigid or flexible sigmoidoscopy): 70–80% successful; recurrence 50% without surgery",
    "Elective sigmoid colectomy after endoscopic decompression: prevents recurrence (50% within 2 years without surgery)",
    "Gangrenous/perforated volvulus: emergency Hartmann's; mortality 20–50%"
  ],
  differentials:["Large bowel obstruction from other causes (cancer, diverticulitis)","Caecal volvulus (right-sided; coffee bean sign right lower quadrant)","Pseudo-obstruction (Ogilvie)","Ileus"],
  mnemonics:[{name:"Sigmoid vs Caecal Volvulus AXR",text:"Sigmoid: coffee bean pointing to RUQ; inverted U-shape. Caecal: coffee bean in mid-abdomen or LUQ; right colon dilated, left collapsed — treatment differs!"}],
  overview:{
    definition:"Axial rotation of the sigmoid colon (≥180°) around its mesenteric axis, producing a closed-loop obstruction.",
    epidemiology:"5% of LBO in UK; 50–80% in developing countries (East Africa, Iran, India — high-fibre diet, long redundant sigmoid). Typical patient: elderly male, constipated, institutionalised.",
    pathophysiology:"Redundant sigmoid loop on long narrow mesentery → rotation → closed-loop obstruction → progressive distension → venous obstruction → mucosal ischaemia → perforation. Caecum dilates if ileocaecal valve incompetent.",
    classification:[
      {label:"Viable sigmoid volvulus",note:"No peritonism; viable bowel; endoscopic decompression feasible"},
      {label:"Gangrenous sigmoid volvulus",note:"Peritonitis; fever; tachycardia; emergency resection; Hartmann's"}
    ]
  },
  diagnosis:{
    history:["Absolute constipation","Gross abdominal distension (asymmetric)","Colicky then constant pain","Elderly with chronic constipation; bed-bound; psychiatric illness; Chagas disease"],
    examination:["Massively distended abdomen","Tympanitic percussion","Peritonism suggests gangrene","Haemodynamic instability (gangrene/perforation)"],
    investigations:[
      {name:"AXR",role:"Coffee bean sign: massively dilated sigmoid loop, ahaustral walls, apex pointing to RUQ; lines converging at left pelvis; can occupy entire abdomen"},
      {name:"CT abdomen/pelvis",role:"Confirms diagnosis; 'whirl sign' of mesentery; bird-beak at site of twist; bowel wall ischaemia; identifies gangrene (no wall enhancement)"},
      {name:"FBC, lactate, CRP",role:"Elevated WBC + lactate + CRP = impending gangrene → bypass endoscopy; emergency surgery"}
    ]
  },
  criteria:{
    title:"Management Algorithm",
    items:[
      {k:"Viable (no peritonism)",v:"Endoscopic decompression (rigid or flexible sigmoidoscopy); pass flatus tube; decompress; admit for elective sigmoid colectomy"},
      {k:"Failed endoscopy / recurrent",v:"Elective sigmoid colectomy; laparoscopic preferred; ≤72 h after decompression"},
      {k:"Gangrenous (peritonism, fever, ischaemia on CT)",v:"Emergency Hartmann's procedure; mortality 20–50%"},
      {k:"Third recurrence without surgery",v:"Consider elective sigmoid colectomy regardless of fitness"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV fluids; NG decompression","NPO; electrolyte correction","Plan elective surgery after decompression"],
    medical:["Antibiotics: piperacillin-tazobactam if gangrene suspected"],
    surgical:[
      {name:"Endoscopic decompression",when:"Viable sigmoid volvulus (first-line)",notes:"Rigid or flexible sigmoidoscopy; gentle passage of scope into twisted lumen; voluminous gas release; pass flatus tube and tape in situ; bridge to elective surgery"},
      {name:"Elective laparoscopic sigmoid colectomy",when:"After successful decompression; within 72 h (or same admission); prevent 50% recurrence",notes:"Resect sigmoid to rectosigmoid junction; colorectal anastomosis; identify left ureter"},
      {name:"Hartmann's procedure",when:"Gangrenous sigmoid volvulus; emergency; perforation",notes:"Emergency midline laparotomy; resect necrotic sigmoid; end colostomy; closed rectal stump; plan reversal when fit"}
    ]
  },
  technique:{
    title:"Rigid Sigmoidoscopy for Sigmoid Volvulus",
    prep:["Left lateral or knee-chest position","No bowel prep (patient is obstructed)","Rigid sigmoidoscope 25 cm; warm water-soluble lubricant"],
    steps:[
      {n:1,t:"Insert sigmoidoscope",d:"Gentle insertion to 15 cm; identify obstructed lumen (mucosa spiralling)"},
      {n:2,t:"Negotiate twist",d:"Gentle rotation + advancement; enter twisted lumen; large volume gas release = success; confirm pink viable mucosa"},
      {n:3,t:"Flatus tube placement",d:"Pass 36–40 Fr flatus tube through scope into decompressed sigmoid; tape to buttocks; leave for 24–48 h"},
      {n:4,t:"Post-decompression",d:"Confirm viable mucosa; any ischaemia = immediate surgical review"},
      {n:5,t:"Plan sigmoid colectomy",d:"Elective surgery within same admission to prevent recurrence"}
    ],
    pearls:["Dusky/necrotic mucosa on sigmoidoscopy = gangrene → stop; emergency Hartmann's","Coffee bean sign helps anticipate scope direction — loop usually opens anteriorly","After decompression: always plan interval sigmoid colectomy — 50% recurrence without it","Caecal volvulus: endoscopic decompression rarely works — right hemicolectomy is treatment"]
  },
  guidelines:[{src:"ASCRS Practice Parameters: Volvulus 2019"},{src:"WSES LBO Guidelines 2020"},{src:"ACPGBI Guidance 2022"}],
  pearls:["Endoscopic decompression: 70–80% successful; must be followed by elective colectomy","Recurrence without surgery: 50% within 2 years — same admission surgery avoids this","Gangrene: do not attempt endoscopy — Hartmann's immediately","Sigmoid colectomy post-decompression: low risk, high reward — prevents emergency Hartmann's"],
  mistakes:["Not performing elective colectomy after decompression — 50% recur","Attempting endoscopy for gangrenous volvulus — delays surgery, worsens outcome","Confusing sigmoid with caecal volvulus — different treatment algorithms","Not placing flatus tube after decompression — volvulus can re-twist immediately"]
},
{
  id:"rectal-prolapse", dept:"colorectal", name:"Rectal Prolapse", latin:"Prolapsus recti", organ:"Rectum",
  severity:"low", tags:["rectum","prolapse","full-thickness","Altemeier","Delorme","Frykman-Goldberg","incontinence"],
  hero:"Full-thickness protrusion of the rectum through the anal sphincter; associated with faecal incontinence and pelvic floor dysfunction; surgical repair is definitive.",
  keypoints:[
    "Full-thickness (all layers of rectal wall) vs mucosal prolapse (only mucosa — treatment differs)",
    "80% of patients are elderly women; associated with multiparous state, constipation, pelvic floor dysfunction",
    "Incontinence in 50–75% pre-operatively; continence improves after prolapse repair in many but not all",
    "Abdominal rectopexy (Frykman-Goldberg/resection rectopexy) preferred in fit patients — lower recurrence than perineal",
    "Perineal approach (Delorme/Altemeier) for elderly/unfit patients — higher recurrence but avoids laparotomy"
  ],
  differentials:["Mucosal prolapse (radial folds vs concentric folds in full thickness)","Haemorrhoidal prolapse (separated piles vs circumferential tube of bowel)","Rectal polyp/tumour prolapsing","Internal intussusception (ODS without external prolapse)"],
  mnemonics:[{name:"Full Thickness vs Mucosal",text:"Full thickness: concentric rings of mucosa visible around central lumen; sulcus palpable; bowel wall palpable between fingers. Mucosal only: radial folds; no sulcus; thin prolapse"}],
  overview:{
    definition:"Full-thickness protrusion of the rectum through the anal canal, representing a sliding hernia of the rectum through the pelvic floor.",
    epidemiology:"Prevalence 1–3/100 000; predominantly affects elderly women (F:M = 6:1); <40 years: male predominance (associated with psychiatric disease/constipation).",
    pathophysiology:"Redundant sigmoid colon, deep Douglas' pouch, weak pelvic floor, lax lateral rectal ligaments → progressive intussusception of rectum → full-thickness prolapse. Chronic prolapse → sphincter stretch → incontinence (pudendal nerve neuropathy).",
    classification:[
      {label:"Clinical Grade I",note:"Internal intussusception (ODS — obstructive defaecation syndrome); no external prolapse"},
      {label:"Clinical Grade II",note:"Prolapse to but not through anal sphincter"},
      {label:"Clinical Grade III",note:"External prolapse reducible"},
      {label:"Clinical Grade IV",note:"Irreducible prolapse; risk of strangulation"},
      {label:"Oxford Rectal Prolapse Grade (proctography)",note:"Radiological I–V scale on defaecating proctography: I–II recto-rectal intussusception, III–IV recto-anal intussusception, V overt external prolapse"}
    ]
  },
  diagnosis:{
    history:["Lump protruding from anus (worse with straining, coughing)","Faecal incontinence (soiling, urgency — stretched sphincters)","Mucus and blood PR","Constipation, ODS (obstructive defaecation syndrome)","Multiparous elderly woman"],
    examination:["Ask patient to strain on commode — confirms prolapse","Concentric mucosal rings (full thickness) vs radial folds (mucosal)","Palpate sulcus between prolapse and external sphincter","Assess sphincter tone (lax = incontinence)","Exclude rectal tumour with DRE/proctoscopy"],
    investigations:[
      {name:"Defaecating proctography (dynamic MRI or fluoroscopy)",role:"Quantifies prolapse; identifies internal intussusception; enterocele; rectocoele; helps plan surgical approach"},
      {name:"Anorectal physiology",role:"Pre-operative baseline; sphincter squeeze pressure; pudendal nerve latency — guides prognosis for incontinence recovery"},
      {name:"Colonoscopy",role:"Exclude synchronous colonic pathology; especially if blood PR"},
      {name:"CT chest/abdomen/pelvis",role:"Only if malignancy suspected (associated rectal cancer uncommon)"}
    ]
  },
  criteria:{
    title:"Operative Approach Selection",
    items:[
      {k:"Fit patient (abdominal approach preferred)",v:"Frykman-Goldberg (resection rectopexy) or ventral mesh rectopexy (laparoscopic/robotic); lower recurrence (5–10%)"},
      {k:"Unfit/elderly patient (perineal approach)",v:"Delorme's (mucosal sleeve resection) or Altemeier's (perineal rectosigmoidectomy); higher recurrence (15–30%) but avoids laparotomy"},
      {k:"Constipation-predominant",v:"Resection rectopexy (Frykman-Goldberg) preferred — sigmoid resection addresses constipation"},
      {k:"Incontinence-predominant",v:"Ventral mesh rectopexy (preserves anterior ligaments) — better incontinence outcomes"}
    ]
  },
  scoring:[],
  management:{
    conservative:["High-fibre diet; stool softeners; avoid straining","Pelvic floor physiotherapy (limited benefit for full-thickness prolapse)","Manual reduction for reducible prolapse (temporary)","Biofeedback for ODS"],
    medical:["Stool softeners; bowel routine; enemas"],
    surgical:[
      {name:"Laparoscopic ventral mesh rectopexy (D'Hoore)",when:"Full-thickness prolapse in fit patient; preferred for young women (preserves continence better); incontinence-predominant",notes:"Dissect anterior rectum only; synthetic mesh sutured to anterior rectal wall; fix to sacral promontory; preserves lateral ligaments (continence/autonomic); recurrence <5%"},
      {name:"Resection rectopexy (Frykman-Goldberg)",when:"Full-thickness prolapse + sigmoid redundancy + constipation; fit patient",notes:"Laparoscopic sigmoid resection + posterior rectopexy; sutures to presacral fascia; excellent recurrence <10%; risks anastomotic leak"},
      {name:"Delorme's procedure",when:"Elderly/unfit; smaller prolapse (<6 cm); perineal approach",notes:"Mucosal sleeve resection; plication of muscle layer; mucosal re-anastomosis; recurrence 15–25%; avoids laparotomy"},
      {name:"Altemeier's procedure (perineal rectosigmoidectomy)",when:"Large full-thickness prolapse; elderly; irreducible; strangulated",notes:"Full-thickness resection of prolapsed bowel via perineal approach; coloanal anastomosis; ± levatorplasty; recurrence 30%; strangulated prolapse"}
    ]
  },
  technique:{
    title:"Altemeier's Perineal Rectosigmoidectomy",
    prep:["Lithotomy position","Bowel prep; epidural or spinal; GA if compromised sphincter","Reduce prolapse if possible; examine under anaesthesia"],
    steps:[
      {n:1,t:"Circumferential incision",d:"1 cm proximal to dentate line through all bowel wall layers"},
      {n:2,t:"Open Douglas pouch",d:"Anterior dissection enters peritoneal cavity between rectum and vagina/bladder"},
      {n:3,t:"Sigmoid mobilisation",d:"Pull bowel through perineum; divide mesentery with sutures/harmonic as far as possible"},
      {n:4,t:"Bowel division",d:"Divide at highest possible level; coloanal anastomosis using 3-0 Vicryl full-thickness interrupted sutures"},
      {n:5,t:"Levatorplasty",d:"Optional: plicate levator ani anteriorly; improves continence outcomes"},
      {n:6,t:"Post-op care",d:"Diet on day 1; sitz baths; watch for bleeding, anastomotic leak"}
    ],
    pearls:["Levatorplasty improves continence outcomes post-Altemeier — add routinely","Ventral mesh rectopexy has lowest recurrence and best functional outcomes in fit patients","Irreducible strangulated prolapse: reduce gently with sugar (osmotic) to reduce oedema before surgery","Post-op incontinence: 50% improve after any repair; physiotherapy and biofeedback post-operatively"]
  },
  guidelines:[{src:"ASCRS Practice Parameters: Rectal Prolapse 2017"},{src:"ACPGBI Position Statement: Rectal Prolapse 2021"},{src:"ESCP Rectal Prolapse Consensus 2020"}],
  pearls:["Ventral mesh rectopexy: best continence outcomes + lowest recurrence in fit patients","Resection rectopexy: add sigmoid resection if patient constipated — avoids worsening constipation post-rectopexy alone","Altemeier's + levatorplasty: improves incontinence outcomes; use in elderly/unfit","50% of incontinent patients improve after prolapse repair — counsel about realistic expectations"],
  mistakes:["Treating as mucosal prolapse (haemorrhoidectomy) when full-thickness prolapse — recurrence guaranteed","Rectopexy alone in constipated patient — worsens constipation; add sigmoid resection","Omitting levatorplasty in Altemeier's — misses opportunity to improve sphincter function","Missing strangulated prolapse — irreducibility + purple/black mucosa = emergency surgery"]
},
{
  id:"familial-adenomatous-polyposis", dept:"colorectal", name:"Familial Adenomatous Polyposis", latin:"Polyposis adenomatosa familiaris", organ:"Colon",
  severity:"high", tags:["FAP","APC","polyps","colectomy","desmoid","Gardner","CHRPE","prophylactic"],
  hero:"Autosomal dominant syndrome caused by APC gene mutation; >100 colonic adenomas; 100% risk of colorectal cancer by age 40 without prophylactic colectomy.",
  keypoints:[
    "APC (adenomatous polyposis coli) gene mutation on chromosome 5q21; autosomal dominant; 25% de novo",
    "Classic FAP: >100 adenomatous polyps; carpeting of colon by 2nd decade; 100% CRC by age 40",
    "Attenuated FAP: <100 polyps; right-colon predominant; later onset; 80% CRC risk",
    "Prophylactic surgery recommended by age 25: total colectomy + IPAA or IRA (ileorectal anastomosis)",
    "Extracolonic: duodenal adenomas (60% — spigelman stage guides ampullectomy/Whipple), desmoid tumours, CHRPE, osteomas (Gardner syndrome), thyroid cancer, medulloblastoma (Turcot)"
  ],
  differentials:["Lynch syndrome (HNPCC — few polyps, MMR mutation)","MUTYH-associated polyposis (MAP — autosomal recessive, <100 polyps)","Hyperplastic polyposis/serrated polyposis syndrome","Juvenile polyposis","Cowden syndrome"],
  mnemonics:[{name:"Gardner Syndrome",text:"FAP + Desmoid tumours + Osteomas (jaw/skull) + Epidermoid cysts + CHRPE (congenital hypertrophy of retinal pigment epithelium) = Gardner syndrome (same APC gene, more extracolonic)"}],
  overview:{
    definition:"Autosomal dominant syndrome characterised by hundreds to thousands of colorectal adenomatous polyps due to germline APC gene mutation, with virtually 100% CRC risk without surgery.",
    epidemiology:"Prevalence 1:10 000; accounts for <1% of all CRC; de novo mutations in 25%.",
    pathophysiology:"Germline APC mutation → loss of tumour suppressor function (Wnt pathway) → unregulated crypt cell proliferation → hundreds of adenomas throughout colon and rectum → adenoma-carcinoma sequence (earlier than sporadic — 10–15 years). Codon location on APC correlates with phenotype severity.",
    classification:[
      {label:"Classic FAP",note:">100 colonic polyps; CRC risk 100% by 40 years; CHRPE common"},
      {label:"Attenuated FAP",note:"<100 polyps; right colon predominant; later onset (40s); 80% CRC lifetime risk; APC mutation codon 1–163 or >1863"},
      {label:"Gardner syndrome",note:"Classic FAP + desmoids + osteomas + epidermoid cysts"},
      {label:"Turcot syndrome",note:"FAP + medulloblastoma or Lynch + glioblastoma"}
    ]
  },
  diagnosis:{
    history:["Family history of FAP or CRC at young age","Known APC mutation (genetic testing)","Rectal bleeding, mucous diarrhoea (once polyposis established)","Jaw swelling (osteoma), skin cysts (Gardner)","Eye examination by ophthalmologist (CHRPE)"],
    examination:["Osteomas: jaw, skull, long bones","Epidermoid cysts","Soft-tissue tumours (desmoids)","CHRPE: eye exam — congenital hypertrophy of RPE bilateral"],
    investigations:[
      {name:"Genetic testing (APC mutation analysis)",role:"Confirmatory in index case; predictive testing in first-degree relatives from age 12–14; identifies attenuated FAP"},
      {name:"Flexible sigmoidoscopy / colonoscopy",role:"From age 12–14 in APC+ family members: confirms polyposis burden; biopsy; annual until surgery"},
      {name:"OGD (upper GI endoscopy)",role:"Duodenal adenomas in 60–90%; Spigelman stage I–IV; ampullary adenomas — risk of ampullary/pancreatic cancer"},
      {name:"CT abdomen",role:"Desmoid tumours (mesentery); evaluate if intraabdominal surgery planned"},
      {name:"Thyroid US",role:"Papillary thyroid cancer screening"},
      {name:"AXR/skeletal survey",role:"Osteomas (jaw, skull, long bones)"}
    ]
  },
  criteria:{
    title:"Spigelman Classification (Duodenal Adenomas)",
    items:[
      {k:"Stage I (1–3 pts)",v:"Surveillance OGD every 5 years"},
      {k:"Stage II (4–6 pts)",v:"Surveillance OGD every 3 years"},
      {k:"Stage III (7–9 pts)",v:"OGD every 1–2 years; endoscopic polypectomy"},
      {k:"Stage IV (10–12 pts)",v:"Surgery: pancreas-preserving duodenectomy or Whipple if malignancy risk; 36% cancer risk at 10 years"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Surveillance colonoscopy from age 12–14 in APC+ individuals","Chemoprevention: sulindac/celecoxib (COX-2 inhibitor) — reduces polyp burden; does not eliminate cancer risk","Annual thyroid US from age 15–25"],
    medical:["Sulindac 150–400 mg BD: reduces polyp number; not curative; used for rectal stump surveillance after IRA","Celecoxib (COX-2 inhibitor): approved for adjunct to surveillance; does not replace colectomy"],
    surgical:[
      {name:"Total proctocolectomy + IPAA (ileo-pouch anal anastomosis)",when:"Classic FAP; dense rectal polyposis; rectal cancer present; preferred in young fit patients",notes:"Removes all colorectal mucosa; no cancer risk from colon/rectum; pouchitis and functional consequences; J-pouch"},
      {name:"Total colectomy + ileorectal anastomosis (IRA)",when:"Attenuated FAP; rectal polyposis manageable (<20 polyps); patient choice; spares rectal function",notes:"Regular rectal surveillance (every 6–12 months) mandatory; 5–10% lifetime rectal cancer risk; consider completion proctectomy if polyp burden increases"},
      {name:"Desmoid tumour management",when:"Symptomatic or enlarging desmoids (usually post-operative)",notes:"Sulindac + tamoxifen first-line; tyrosine kinase inhibitors (imatinib, sorafenib) for progressive; surgery: high recurrence and morbidity (mesenteric involvement); chemo (doxorubicin) for aggressive"},
      {name:"Duodenal/ampullary surgery",when:"Spigelman IV; high-grade dysplasia; malignancy",notes:"Pancreas-preserving duodenectomy for benign/LGD; Whipple if invasive cancer; transduodenal local excision for ampullary adenoma"}
    ]
  },
  technique:{
    title:"Prophylactic Proctocolectomy + IPAA for FAP",
    prep:["Genetic confirmation; MDT discussion","Stoma therapist marking","Bowel prep; spinal/epidural + GA","Young fit patient — laparoscopic preferred"],
    steps:[
      {n:1,t:"Total colectomy",d:"Medial to lateral; close mesenteric vessels; preserve ureters; remove entire colon"},
      {n:2,t:"Proctectomy (TME)",d:"Enter mesorectal plane; preserve autonomic nerves (hypogastric and inferior hypogastric plexus)"},
      {n:3,t:"J-pouch construction",d:"30 cm loop of terminal ileum; form J; 6–8 cm limbs; stapled SSIA; check pouch length reaches anal canal without tension"},
      {n:4,t:"Mucosectomy ± double-staple",d:"Mucosectomy (hand-sewn): remove all rectal mucosa to dentate; or double-stapled technique (leaves 1–2 cm cuff — some adenoma risk)"},
      {n:5,t:"Pouch-anal anastomosis",d:"Circular stapler or hand-sewn to dentate line; defunctioning loop ileostomy"},
      {n:6,t:"Close ileostomy",d:"6–12 weeks later after confirming pouch integrity (contrast enema)"}
    ],
    pearls:["FAP IPAA: double-stapled technique leaves rectal cuff — risk of cuff adenomas; mucosectomy removes all risk but higher incontinence","Desmoids: avoid operating on mesentery if possible — triggers desmoid formation or worsening","IRA: simpler and better function; requires lifelong rectal surveillance; conversion to proctectomy if polyp burden increases","Genetic testing at age 12–14: pre-symptomatic identification saves lives"]
  },
  guidelines:[{src:"NCCN FAP Guidelines 2023"},{src:"BSG FAP/HNPCC Surveillance Guidelines 2022"},{src:"ACPGBI Polyposis Registry Guidelines 2021"}],
  pearls:["Prophylactic surgery by age 25: 100% CRC risk without surgery by age 40","IRA vs IPAA: IRA — better function, requires surveillance; IPAA — eliminates rectal risk","Desmoids: sulindac + tamoxifen first-line; surgery worsens them (triggers growth)","Spigelman IV duodenal disease: 36% 10-year cancer risk — consider duodenectomy/Whipple"],
  mistakes:["Surveillance colonoscopy without genetic confirmation of mutation type — IRA may be appropriate for AFAP","Performing IRA for dense rectal polyposis (>20 polyps) — high residual cancer risk","Operating on desmoid tumours without medical treatment first — surgery triggers growth","Not enrolling family in polyposis registry — first-degree relatives need screening from age 12"]
},
{
  id:"lynch-syndrome", dept:"colorectal", name:"Lynch Syndrome (HNPCC)", latin:"Syndroma Lynch", organ:"Colon",
  severity:"high", tags:["Lynch","HNPCC","MMR","MSI","Amsterdam","colonoscopy","prophylactic"],
  hero:"Autosomal dominant cancer predisposition syndrome due to germline MMR gene mutations; most common hereditary CRC syndrome; accounts for 3–5% of all colorectal cancers.",
  keypoints:[
    "MMR (mismatch repair) gene mutations: MLH1, MSH2 (most common), MSH6, PMS2; causes MSI-H tumours",
    "Amsterdam II criteria: screening tool; not all Lynch is Amsterdam-positive — use NICE 2020 revised Bethesda criteria for testing",
    "CRC risk: 40–80% lifetime; right colon predominant; multiple synchronous/metachronous CRCs",
    "Extracolonic: endometrial (40–60%), ovarian (10%), urinary tract, gastric, biliary, small bowel, brain (Turcot)",
    "Annual colonoscopy from age 25 (or 5 years before earliest family CRC); prophylactic hysterectomy + BSO in women after childbearing"
  ],
  differentials:["FAP (hundreds of polyps; APC mutation)","Sporadic MSI-H CRC (MLH1 hypermethylation — somatic; BRAF V600E positive)","MUTYH-associated polyposis (few polyps; autosomal recessive)","Familial CRC type X (Amsterdam criteria, normal MMR)"],
  mnemonics:[{name:"Amsterdam II Criteria",text:"3 relatives with Lynch-associated cancer (CRC, endometrial, small bowel, urinary tract); spanning 2 generations; 1 is first-degree relative of the other two; 1 diagnosed <50 years; FAP excluded"}],
  overview:{
    definition:"Autosomal dominant hereditary cancer syndrome caused by germline MMR gene mutations leading to microsatellite instability and predisposition to multiple cancers.",
    epidemiology:"Prevalence 1:300; accounts for 3–5% of all CRC; most common hereditary CRC syndrome. MLH1 and MSH2 mutations most common (>90%).",
    pathophysiology:"Germline MMR mutation → loss of one allele; second-hit somatic mutation → MMR-deficiency → failure to repair replication errors at microsatellite repeats → MSI-H → accelerated adenoma-carcinoma sequence (3–5 years vs 10–15 in sporadic). Right colon predominant (MLH1/MSH2).",
    classification:[
      {label:"Classic Lynch (Amsterdam criteria)",note:"3-2-1-50 rule; multiple CRC family members"},
      {label:"Lynch-like syndrome",note:"MSI-H tumour; no germline MMR mutation found; somatic MMR biallelic mutation"},
      {label:"Sporadic MSI-H CRC",note:"MLH1 promoter hypermethylation (somatic) + BRAF V600E — not Lynch; no family risk"}
    ]
  },
  diagnosis:{
    history:["Family history of CRC (especially right-sided, age <50), endometrial, ovarian cancers","Personal history of multiple CRCs, endometrial cancer, or urinary tract cancer","CRC at young age (<50)","Multiple Lynch-associated tumours in one individual"],
    examination:["No specific signs","Sebaceous adenomas/keratoacanthomas: Muir-Torre variant (MSH2/MSH6)"],
    investigations:[
      {name:"Universal tumour MSI/MMR testing (IHC)",role:"All CRC <70 years (NICE 2020); IHC staining: MLH1, MSH2, MSH6, PMS2; absent staining = MMR-deficient; directs germline gene to test"},
      {name:"BRAF V600E mutation + MLH1 methylation",role:"MLH1-absent tumour + BRAF V600E + MLH1 methylation = sporadic (not Lynch); MLH1 absent without BRAF/methylation = likely Lynch"},
      {name:"Germline MMR gene testing",role:"Blood or saliva; identifies specific gene mutation; enables cascade testing of relatives"},
      {name:"Colonoscopy",role:"From age 25 (or 5 years before earliest family CRC); annually; right-colon predominance"},
      {name:"Endometrial biopsy / transvaginal US",role:"Annual from age 35 in women; symptoms of abnormal bleeding"},
      {name:"Urine cytology",role:"Annual from age 35 (MSH2 mutations — urinary tract tumour risk)"}
    ]
  },
  criteria:{
    title:"Amsterdam II Criteria (Screening — Not Diagnostic)",
    items:[
      {k:"Three or more relatives with Lynch-associated tumour",v:"CRC, endometrial, small bowel, ureter, renal pelvis cancer"},
      {k:"Spanning two or more generations",v:"At least one affected individual is first-degree relative of the other two"},
      {k:"One diagnosis before age 50",v:"Early onset"},
      {k:"FAP excluded",v:"No polyposis in CRC cases"},
      {k:"Tumours verified histologically",v:"Pathological confirmation required"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Annual colonoscopy from age 25–30 (or 5 years before earliest family CRC)","Aspirin 600 mg/day: CaPP2 trial — reduces Lynch CRC incidence at 4 years (NNT 10 for 10-year period)","Endometrial and ovarian surveillance in women from age 35"],
    medical:["Aspirin: CaPP2 trial evidence for CRC prevention in Lynch syndrome","Chemoprevention with NSAID/aspirin reduces polyp and cancer risk"],
    surgical:[
      {name:"Extended right hemicolectomy or subtotal colectomy",when:"CRC in Lynch syndrome (right-sided predominance); synchronous/high metachronous risk; young patient",notes:"Subtotal colectomy reduces metachronous CRC risk from 30% to <5%; ileorectal anastomosis; annual rectal surveillance"},
      {name:"Prophylactic hysterectomy + bilateral salpingo-oophorectomy (BSO)",when:"Post-childbearing; after thorough counselling; MLH1/MSH2 mutations (highest endometrial risk)",notes:"Endometrial cancer in 40–60% Lynch women by age 70; BSO also eliminates ovarian risk (10%); menopause management needed"},
      {name:"Standard segmental colectomy",when:"Older patient (>60); patient choice; less concern about metachronous risk",notes:"Annual colonoscopy post-resection; 3% per year metachronous CRC risk in remaining colon"}
    ]
  },
  technique:{
    title:"Subtotal Colectomy + IRA for Lynch CRC",
    prep:["MSI testing confirms Lynch; germline testing identifies gene","Genetic counselling for family members","Stoma counselling (even if IRA planned — may need ileostomy)"],
    steps:[
      {n:1,t:"Medial to lateral mobilisation",d:"Both colons; take IMA and right colic vessels at root; preserve ureters bilaterally"},
      {n:2,t:"Mobilise both flexures",d:"Hepatic and splenic; ensure tension-free anastomosis"},
      {n:3,t:"Terminal ileum division",d:"Divide 5 cm from ileocaecal valve"},
      {n:4,t:"Rectal division",d:"At rectosigmoid junction; preserve mesorectum"},
      {n:5,t:"Anastomosis",d:"Ileorectostomy: circular stapler or hand-sewn; check tension; test with air insufflation"},
      {n:6,t:"Post-op surveillance",d:"Annual flexible sigmoidoscopy/colonoscopy of rectum; endometrial surveillance in women"}
    ],
    pearls:["Aspirin 600 mg: CaPP2 trial — 37% reduction in Lynch CRC at 4 years; recommend to all Lynch patients","MSI testing should be universal in CRC <70 years — NICE 2020 recommendation","Metachronous CRC: 3%/year after standard colectomy — subtotal colectomy reduces this to <1%","Prophylactic hysterectomy: discuss with all women with Lynch after childbearing completed"]
  },
  guidelines:[{src:"NICE DG27: Lynch Syndrome Testing 2017"},{src:"ESMO Lynch Syndrome Guidelines 2021"},{src:"CaPP2 Trial: Burn et al., Lancet 2011"}],
  pearls:["Universal MSI/MMR testing in all CRC: identifies 3–5% Lynch syndrome + guides immunotherapy for MSI-H tumours","Aspirin 600 mg/day: CaPP2 trial — significant CRC risk reduction in Lynch syndrome","Pembrolizumab: first-line for MSI-H metastatic CRC (KEYNOTE-177)","Prophylactic hysterectomy + BSO: consider in all Lynch women after childbearing"],
  mistakes:["Not testing all CRC for MSI/MMR — misses Lynch diagnosis and immunotherapy opportunity","Annual colonoscopy intervals in confirmed Lynch — if missed even one year, accelerated adenoma-carcinoma sequence","Standard segmental colectomy without annual surveillance in young Lynch patient — 30% metachronous CRC risk","Confirming Lynch on clinical criteria alone — always confirm germline mutation to enable family cascade testing"]
},
{
  id:"ischaemic-colitis", dept:"colorectal", name:"Ischaemic Colitis", latin:"Colitis ischaemia", organ:"Colon",
  severity:"high", tags:["colon","ischaemia","watershed","splenic flexure","haematochezia","sigmoid","AAA repair"],
  hero:"Transient or permanent reduction of colonic blood flow causing mucosal ischaemia; affects watershed zones (splenic flexure, rectosigmoid); most common intestinal ischaemia.",
  keypoints:[
    "Most common intestinal ischaemia (75%); mainly elderly; non-occlusive in 85%; occlusive (IMA thrombosis/embolism) in 15%",
    "Watershed zones: splenic flexure (Griffiths point) and rectosigmoid junction (Sudeck's point) — most vulnerable",
    "Classic triad: sudden left-sided abdominal pain + rectal bleeding + CT/endoscopy confirmation",
    "Post-aortic surgery: IMA ligated → left colon ischaemia in 1–3% of elective AAA repair; 10–30% of ruptured AAA repair",
    "Treatment: usually conservative (bowel rest, IV fluids, antibiotics); surgery for transmural necrosis/perforation"
  ],
  differentials:["IBD (Crohn's, UC)","Infectious colitis (Campylobacter, C. diff, CMV)","Colorectal cancer","Diverticulitis","Radiation colitis"],
  mnemonics:[{name:"Watershed Zones",text:"Griffiths Point = splenic flexure (SMA-IMA boundary); Sudeck's Point = rectosigmoid junction (IMA-internal iliac boundary). Both vulnerable to hypoperfusion. Rectum is protected by multiple blood supplies"}],
  overview:{
    definition:"Reduction in colonic blood supply resulting in mucosal and potentially transmural ischaemia, ranging from transient to gangrenous.",
    epidemiology:"Incidence 7–8/100 000; predominantly age >60 years; F>M slightly. Complicates 1–2% of aortic operations.",
    pathophysiology:"Non-occlusive (85%): systemic hypotension, heart failure, hypovolaemia → splanchnic vasoconstriction → reduced colonic flow. Occlusive: IMA embolism/thrombosis, AAA repair (IMA ligation). Watershed zones vulnerable (poor collaterals).",
    classification:[
      {label:"Transient non-gangrenous",note:"80%; mucosal/submucosal ischaemia; resolves within 2–3 weeks with conservative treatment"},
      {label:"Chronic ischaemic stricture",note:"Delayed fibrosis; obstructive symptoms weeks later; needs resection"},
      {label:"Fulminant/gangrenous",note:"20%; transmural; perforation; peritonitis; emergency colectomy; mortality 60–80%"}
    ]
  },
  diagnosis:{
    history:["Sudden onset crampy left-sided abdominal pain","Rectal bleeding or bloody diarrhoea (within 24 h of pain — differentiates from diverticulitis)","Recent AAA repair, cardiac catheterisation, dialysis","Elderly with AF (embolic), atherosclerosis, hypotension","Medications: NSAIDs, digoxin, vasoconstrictors"],
    examination:["Left-sided abdominal tenderness (mild to severe depending on severity)","Peritonism = transmural necrosis — emergency","Tachycardia, hypotension (haemorrhagic or septic shock)"],
    investigations:[
      {name:"CT abdomen/pelvis (IV contrast)",role:"Colonic wall thickening, pericolonic fat stranding, portal venous gas (severe); pneumatosis coli; watershed zone distribution; free air (perforation)"},
      {name:"Flexible sigmoidoscopy",role:"Confirms mucosal ischaemia: pale, oedematous, haemorrhagic mucosa with sharp transition; do not insufflate excessively; do not go beyond transition"},
      {name:"FBC, CRP, lactate",role:"WBC >18 + lactate >2 + peritonism = full-thickness necrosis → emergency surgery"},
      {name:"AXR",role:"Thumbprinting (mucosal oedema); free air (perforation)"},
      {name:"Colonoscopy",role:"After clinical resolution: assess stricture formation; exclude malignancy at watershed"}
    ]
  },
  criteria:{
    title:"Operative vs Non-Operative Management",
    items:[
      {k:"Non-operative (80%)",v:"No peritonism; transient ischaemia; IV fluids, bowel rest, antibiotics; clinical improvement within 48–72 h"},
      {k:"Emergency surgery",v:"Peritonism; transmural necrosis; perforation; bloody diarrhoea persisting >48 h with clinical deterioration; gangrenous bowel"},
      {k:"Elective surgery",v:"Post-ischaemic stricture causing obstruction; recurrent ischaemic colitis"},
      {k:"Post-AAA ischaemia",v:"Flexible sigmoidoscopy within 24 h of AAA repair if any suspicion; colectomy if C3 grade (transmural)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV fluid resuscitation; NBM","IV antibiotics: piperacillin-tazobactam (translocation of gut bacteria)","Correct precipitating cause: optimise cardiac output, treat hypotension","Serial abdominal examination every 4–6 h","Colonoscopy/sigmoidoscopy at 6–8 weeks post-episode to exclude stricture/cancer"],
    medical:["Anticoagulation if cardiac embolic source (AF, recent MI)","Vasopressors avoided where possible (worsen ischaemia)"],
    surgical:[
      {name:"Emergency Hartmann's / subtotal colectomy",when:"Transmural necrosis; perforation; peritonitis; gangrenous bowel",notes:"Remove entire ischaemic colon; end colostomy; high mortality (60–80%); avoid primary anastomosis in contaminated/ischaemic field"},
      {name:"Elective segmental colectomy",when:"Post-ischaemic stricture; recurrent ischaemia in defined segment",notes:"Wait ≥6 weeks for complete mucosal healing; resect stricture; primary anastomosis"},
      {name:"Post-AAA colectomy",when:"Grade C ischaemia (transmural) on post-operative sigmoidoscopy",notes:"Early operation reduces mortality; if grade B (submucosal) — conservative; if grade C — immediate colectomy"}
    ]
  },
  technique:{
    title:"Emergency Colectomy for Ischaemic Colitis",
    prep:["Rapid resuscitation: IV fluids, vasopressors only if essential (avoid — worsen ischaemia)","Broad-spectrum antibiotics","GA; urinary catheter; NG tube"],
    steps:[
      {n:1,t:"Midline laparotomy",d:"Assess extent of ischaemia; examine entire bowel including small bowel (if concurrent mesenteric ischaemia)"},
      {n:2,t:"Assess viability",d:"Peristalsis, colour, mesenteric pulse; do not resect viable bowel; resect all frankly gangrenous segments"},
      {n:3,t:"Subtotal vs segmental",d:"Subtotal if diffuse ischaemia; left hemicolectomy if localised; ensure resection margins are viable (pink, bleeding)"},
      {n:4,t:"Hartmann's",d:"End colostomy; close rectal or sigmoid stump; do not perform primary anastomosis in contaminated/ischaemic setting"},
      {n:5,t:"Second-look laparotomy",d:"Plan at 24–48 h if bowel viability uncertain; reassess margins"}
    ],
    pearls:["Second-look laparotomy: essential if viability uncertain; do not close definitively if unsure","Never primary anastomosis in contaminated field with ischaemic bowel — anastomotic leak in ischaemic tissue = >50%","Rectal preservation: IMA watershed; internal iliac supply protects rectum — rarely ischaemic","Post-AAA: flexible sigmoidoscopy within 24 h; grade C = emergency colectomy"]
  },
  guidelines:[{src:"WSES Ischaemic Colitis Consensus 2020"},{src:"ACG Clinical Guideline on Mesenteric Ischaemia 2015 (colonic)"},{src:"ESVS Guidelines on Mesenteric Vascular Disease 2017"}],
  pearls:["Most ischaemic colitis is non-occlusive and resolves with conservative management (80%)","Post-AAA ischaemia: routine sigmoidoscopy within 24 h post-op is best practice in high-risk patients","Watershed zones (splenic flexure, rectosigmoid): most common sites; normal proximal and distal to ischaemic segment","Peritonism = transmural necrosis; do not delay for further investigations — emergency colectomy"],
  mistakes:["Performing primary anastomosis in gangrenous/contaminated field — anastomotic leak is near-universal","Delaying second-look laparotomy when viability uncertain — progression to perforation","Assuming all post-operative diarrhoea/rectal bleeding is non-ischaemic — sigmoidoscopy within 24 h post major vascular surgery","Not doing post-resolution colonoscopy — strictures develop in 20%"]
},
{
  id:"ogilvie", dept:"colorectal", name:"Ogilvie Syndrome", latin:"Pseudo-obstructio coli acuta", organ:"Colon",
  severity:"medium", tags:["colon","pseudo-obstruction","neostigmine","colonoscopy","caecum","Ogilvie"],
  hero:"Acute colonic pseudo-obstruction without mechanical cause; massive colonic dilation (especially caecum); risk of caecal perforation >12 cm diameter.",
  keypoints:[
    "Acute colonic pseudo-obstruction: massive colonic dilation in absence of mechanical obstruction; caecum most affected",
    "Associated with: post-operative state, spinal injury, electrolyte disturbance, medications (opioids, anticholinergics)",
    "Caecal diameter >12 cm carries perforation risk; >10 cm with rapid progression = concerning",
    "Neostigmine 2 mg IV: first-line pharmacological treatment; 80–90% response; must have cardiac monitoring",
    "Colonoscopic decompression: if neostigmine fails or contraindicated; successful in 80%; recurrence 20%"
  ],
  differentials:["Mechanical LBO (cancer, volvulus — CT distinguishes)","Toxic megacolon (UC/CD — fever, bloody diarrhoea, mucosal changes)","Sigmoid volvulus (coffee bean, AXR)","Paralytic ileus (small + large bowel, generalised)"],
  mnemonics:[{name:"Ogilvie = No Mechanical Obstruction",text:"Clinical: massive dilation; CT: air throughout colon to rectum (no transition point); neostigmine 2 mg IV first-line pharmacological treatment; colonoscopy if fails"}],
  overview:{
    definition:"Acute colonic pseudo-obstruction: acute massive dilation of the colon without an identifiable mechanical obstructing lesion.",
    epidemiology:"Hospitalised patients; post-operative (orthopaedic, cardiac, obstetric surgery most common); also burns, trauma, neurological disease. Caecal perforation occurs in 1–3% of cases.",
    pathophysiology:"Imbalance of autonomic innervation to colon: increased sympathetic/decreased parasympathetic tone → colonic hypomotility → progressive dilation. Caecum most susceptible (largest diameter, greatest wall tension per Laplace's law).",
    classification:[
      {label:"Early/mild",note:"Caecal diameter <10 cm; no peritonism; conservative management appropriate"},
      {label:"Progressive",note:"Caecal diameter 10–12 cm; failed conservative; neostigmine or colonoscopy"},
      {label:"Advanced/imminent perforation",note:"Caecal diameter >12 cm; peritonism; emergency decompression or surgery"}
    ]
  },
  diagnosis:{
    history:["Post-operative (orthopaedic, cardiac, obstetric)","Massive abdominal distension","Absolute constipation","Nausea, vomiting","Associated conditions: spinal cord injury, electrolyte disturbance, opioid use","No previous bowel obstruction symptoms"],
    examination:["Gross abdominal distension (tympanitic)","No peritonism in early disease","Peritonism if caecal perforation imminent/occurred"],
    investigations:[
      {name:"AXR",role:"Massively dilated colon including caecum; gas throughout colon including rectum (no mechanical cutoff); caecal diameter measurement"},
      {name:"CT abdomen/pelvis",role:"Confirms no mechanical obstruction; gas throughout colon to rectum; identifies free air (perforation)"},
      {name:"FBC, electrolytes, Mg, Ca, PO4",role:"Correct hypokalaemia, hypomagnesaemia, hypocalcaemia (all worsen colonic dysmotility)"},
      {name:"Exclude C. diff, CMV",role:"If history of antibiotics or immunosuppression — toxic megacolon excluded"}
    ]
  },
  criteria:{
    title:"Treatment Algorithm",
    items:[
      {k:"Caecum <10 cm",v:"Conservative: correct electrolytes; avoid opioids; ambulate; rectal tube; review medications"},
      {k:"Caecum >10 cm or failed conservative at 48–72 h",v:"Neostigmine 2 mg IV slow push (cardiac monitoring for bradycardia)"},
      {k:"Failed neostigmine (or contraindicated)",v:"Colonoscopic decompression (decompression + placement of tube)"},
      {k:"Caecum >12 cm + peritonism / perforation",v:"Emergency caecostomy or right hemicolectomy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Bowel rest; nasogastric tube","Correct electrolytes: K+, Mg, Ca, PO4","Avoid opioids; anti-cholinergics","Ambulate; rectal tube; prone positioning","Treat precipitating condition"],
    medical:["Neostigmine 2 mg IV: slow push over 3–5 min; cardiac monitor (30 min); atropine available; 80–90% response within 30 min; repeat once if needed","Pyridostigmine oral: alternative for prevention of recurrence; less evidence","Metoclopramide/erythromycin: limited evidence for pseudo-obstruction"],
    surgical:[
      {name:"Colonoscopic decompression",when:"Caecal diameter >12 cm; failed neostigmine; neostigmine contraindicated (recent MI, asthma, bradycardia)",notes:"Advance to right colon; aspirate gas; place decompression tube; success 80%; recurrence 20%; sedation carefully"},
      {name:"Percutaneous caecostomy",when:"High surgical risk; failed colonoscopy; bridging to surgery",notes:"CT-guided; tube drain; avoids general anaesthesia; effective decompression"},
      {name:"Surgical caecostomy / right hemicolectomy",when:"Caecal perforation; failed all else; ischaemic caecum",notes:"Caecostomy tube (temporary decompression); right hemicolectomy for gangrenous caecum; high morbidity in critically ill patients"}
    ]
  },
  technique:{
    title:"Neostigmine Administration for Ogilvie's",
    prep:["Exclude mechanical obstruction (CT)","Cardiac monitoring established; atropine 600 μg available bedside","Check: no bronchospasm, no active MI, HR >60"],
    steps:[
      {n:1,t:"Administer neostigmine",d:"2 mg IV over 3–5 minutes (slow push)"},
      {n:2,t:"Monitor ECG",d:"Bradycardia in 10%; hypotension; atropine if HR <50 or symptomatic"},
      {n:3,t:"Response",d:"Passage of gas/stool within 30 min in 80–90%; repeat AXR to confirm decompression"},
      {n:4,t:"If no response",d:"Second dose of 2 mg may be given after 3 hours; if still no response → colonoscopic decompression"},
      {n:5,t:"Prevention of recurrence",d:"Oral pyridostigmine; early ambulation; correct precipitating factors; advance diet cautiously"}
    ],
    pearls:["Neostigmine is the key pharmacological treatment — 80–90% success; do not delay if caecum >10 cm","Atropine MUST be available before giving neostigmine — bradyarrhythmia risk","Caecal perforation risk: diameter >12 cm and/or duration >6 days — expedite decompression","Colonoscopic decompression: avoid over-insufflation; aspiration of gas is the goal"]
  },
  guidelines:[{src:"ACG Clinical Guideline: Acute Colonic Pseudo-Obstruction 2020"},{src:"WSES Acute Colitis and Pseudo-Obstruction Guidelines 2021"},{src:"ASCRS Ogilvie Syndrome Practice Parameters 2020"}],
  pearls:["Neostigmine: 80–90% response rate; must have cardiac monitoring and atropine available","Caecal diameter >12 cm: emergency decompression — do not continue conservative management","Correct electrolytes before neostigmine — hypokalaemia and hypomagnesaemia impair response","Avoid opioids and anticholinergics — exacerbate pseudo-obstruction"],
  mistakes:["Continuing conservative management when caecal diameter >12 cm — perforation risk","Neostigmine without cardiac monitoring — bradyarrhythmia can be fatal","Performing colonoscopy for Ogilvie's with vigorous insufflation — worsens distension","Not correcting electrolytes before pharmacological treatment — poor response"]
}
];
