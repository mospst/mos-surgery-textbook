// Colorectal diseases — batch 1 of 2
window._TMP_COLORECTAL1 = [
{
  id:"colorectal-cancer", dept:"colorectal", name:"Colon Cancer", latin:"Carcinoma coli", organ:"Colon",
  severity:"high", tags:["colon","adenocarcinoma","TNM","right hemicolectomy","FOLFOX","Lynch","FAP"],
  hero:"Adenocarcinoma of the colon arising from adenomatous polyps; third most common cancer worldwide with 5-year survival 65% overall but >90% for stage I.",
  keypoints:[
    "Adenoma-carcinoma sequence: tubular → tubulovillous → villous → adenocarcinoma over 10–15 years",
    "TNM staging guides treatment: T1–T2 N0 = surgery alone; T3–T4 or N+ = adjuvant chemotherapy",
    "Right-sided: iron-deficiency anemia, mucoid stools; left-sided: change in bowel habit, rectal bleeding, obstruction",
    "FOLFOX adjuvant chemotherapy: 3-year DFS benefit in stage III (MOSAIC trial); not proven in stage II without high-risk features",
    "MSI testing mandatory in all CRC: guides prognosis, identifies Lynch syndrome, and predicts immunotherapy response"
  ],
  differentials:["Diverticular disease (stricturing)","Inflammatory bowel disease (colitis)","Ischemic colitis","Appendix abscess/mass","Metastatic disease to colon"],
  mnemonics:[{name:"Duke's vs TNM",text:"Duke's A=T1-2N0 (90%); B=T3-4N0 (70%); C=any N1-2 (35%); D=M1 (5%). TNM now standard: Stage I=T1-2N0, II=T3-4N0, III=N+, IV=M1"}],
  overview:{
    definition:"Malignant epithelial tumor of the colon, >90% adenocarcinoma, arising via chromosomal instability (CIN) or microsatellite instability (MSI) pathways.",
    epidemiology:"3rd commonest cancer; 4th commonest cancer death. 40 000 new cases/year UK. Male > female. Peak age 60–70 years. Risk factors: age, family history, IBD, smoking, obesity, red/processed meat, alcohol.",
    pathophysiology:"CIN pathway (85%): APC → KRAS → SMAD4 → TP53. MSI/MMR-deficient pathway (15%): MLH1 hypermethylation (sporadic) or germline MMR mutation (Lynch). Villous polyps have higher malignancy risk (40%) than tubular (5%).",
    classification:[
      {label:"TNM/AJCC 8th — Stage I (Dukes A)",note:"T1–T2 N0 M0; 5-year survival >90%"},
      {label:"TNM/AJCC 8th — Stage II (Dukes B)",note:"T3–T4 N0 M0; 5-year survival 70–85%"},
      {label:"TNM/AJCC 8th — Stage III (Dukes C)",note:"Any T, N1–N2, M0; 5-year survival 40–60%; adjuvant chemotherapy indicated"},
      {label:"TNM/AJCC 8th — Stage IV (Dukes D)",note:"Any T, any N, M1; 5-year survival 5–15% overall; resectable liver mets 30–50%"}
    ]
  },
  diagnosis:{
    history:["Right colon: iron-deficiency anemia, fatigue, mucoid/dark stools, vague RIF pain","Left colon: change in bowel habit, rectal bleeding, pencil stools, tenesmus","Obstruction: absolute constipation, distension (left>right)","Perforation: peritonitis, sepsis","Family history of CRC, Lynch syndrome, FAP"],
    examination:["Palpable abdominal mass (right or left colon)","Cachexia, pallor","Hepatomegaly (M1)","Peritonism (perforation)","Digital rectal exam for left-sided lesions"],
    investigations:[
      {name:"Colonoscopy + biopsy",role:"Gold standard; full colonic visualization; tissue diagnosis; synchronous polyps or cancers (5%)"},
      {name:"CT colonography",role:"Alternative if colonoscopy incomplete or refused; detects polyps >6 mm"},
      {name:"CECT chest/abdomen/pelvis",role:"TNM staging: lymph nodes, hepatic/pulmonary metastases, local invasion"},
      {name:"MRI liver",role:"If CT liver equivocal or CRLM suspected; better characterization"},
      {name:"CEA",role:"Baseline for monitoring; CEA >200 ng/mL suggests liver metastases"},
      {name:"CBC",role:"Iron-deficiency anemia (right-sided)"},
      {name:"MSI/MMR testing (IHC or PCR)",role:"All CRC: guides prognosis; MSI-H/dMMR predicts poor response to 5-FU alone but excellent response to immunotherapy; Lynch screening"},
      {name:"KRAS/NRAS/BRAF mutation",role:"Metastatic CRC: determines anti-EGFR eligibility; BRAF V600E = poor prognosis"}
    ]
  },
  criteria:{
    title:"High-Risk Stage II Features (consider adjuvant chemo)",
    items:[
      {k:"T4 tumor",v:"Peritoneal involvement or invasion of adjacent structures"},
      {k:"Emergency presentation",v:"Obstruction or perforation"},
      {k:"<12 lymph nodes examined",v:"Inadequate staging"},
      {k:"Lymphovascular invasion",v:"Perineural invasion"},
      {k:"Poorly differentiated",v:"G3/G4 histology"},
      {k:"MSS/pMMR",v:"MSI-L/MSS: higher risk (MSI-H stage II has good prognosis without chemo)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Nutritional support, iron supplementation","Bowel preparation for elective cases","Enhanced recovery after surgery (ERAS) protocol"],
    medical:["Stage III adjuvant: FOLFOX × 6 months (MOSAIC trial: 5-year DFS 73% vs 67%)","Stage II high-risk: capecitabine or FOLFOX after MDT discussion","Metastatic CRC (RAS WT, left-sided): FOLFOX/FOLFIRI + cetuximab","Metastatic CRC (RAS mutant): FOLFOX/FOLFIRI + bevacizumab","MSI-H metastatic: pembrolizumab first-line (KEYNOTE-177)","BRAF V600E: encorafenib + cetuximab (second-line; BEACON)"],
    surgical:[
      {name:"Right hemicolectomy",when:"Cecum, ascending colon, hepatic flexure tumors",notes:"Resect terminal ileum, right colon to mid-transverse colon; ileocolic + right colic + right branch of middle colic vessels; D3 lymphadenectomy; laparoscopic preferred"},
      {name:"Transverse colectomy / extended right hemicolectomy",when:"Transverse colon tumors",notes:"Extended right avoids two anastomoses; midcolic vessels at root"},
      {name:"Left hemicolectomy / sigmoid colectomy",when:"Descending colon, splenic flexure, sigmoid tumors",notes:"Inferior mesenteric artery at root or preserving left colic; colorectal anastomosis; defunctioning stoma if high risk"},
      {name:"Hartmann's procedure",when:"Perforated or obstructed left colon in emergency; frail patient",notes:"End colostomy; close rectal stump; reversal rate 50–60%; high-risk reversal"},
      {name:"Emergency subtotal colectomy",when:"Obstructed left colon with cecal dilation >10 cm; synchronous right colon lesion; IBD emergency",notes:"Total colonic resection + end ileostomy; protects dilated cecum from blowout"}
    ]
  },
  technique:{
    title:"Laparoscopic Right Hemicolectomy",
    prep:["CT staging confirms resectability","Bowel prep not required (ERAS)","LMWH + TED stockings; prophylactic antibiotics","Supine or Lloyd-Davies position"],
    steps:[
      {n:1,t:"Medial to lateral dissection",d:"Identify ileocolic pedicle medially; lift peritoneum off retroperitoneum; 'holy plane' between mesocolon and Toldt's fascia"},
      {n:2,t:"High ligation of ileocolic vessels",d:"Clip and divide at root (D3 lymphadenectomy); identify and protect duodenum and right ureter"},
      {n:3,t:"Mobilization",d:"Complete medial to lateral dissection; mobilize hepatic flexure (take gastrocolic omentum)"},
      {n:4,t:"Division of terminal ileum and colon",d:"Staple/divide ileum 5–10 cm proximal to ileocecal valve; transverse colon at margin"},
      {n:5,t:"Extraction and anastomosis",d:"Pfannenstiel or midline extraction; extracorporeal or intracorporeal ileocolic anastomosis (side-to-side); check mesenteric defect closure"},
      {n:6,t:"ERAS protocol",d:"No NGT; early oral fluids; mobilize day 1; remove urinary catheter day 1"}
    ],
    pearls:["D3 lymphadenectomy: ligate vessels at root — associated with lower recurrence in Asian trials","Right ureter at risk medially during ICA dissection — identify before clipping","Hepatic flexure: divide gastrocolic omentum lateral to right gastroepiploic vessels","Anastomotic leak: 3–4% for right hemicolectomy — inspect and test integrity before closure"]
  },
  guidelines:[{src:"NICE CG131: Colorectal Cancer 2011 (updated 2023)"},{src:"ESMO Colorectal Cancer Guidelines 2023"},{src:"NCCN Colon Cancer 2023"}],
  pearls:["12 lymph nodes minimum for adequate staging — fewer = possible understaging","MSI-H stage III: FOLFOX benefit still exists; MSI-H stage II: excellent prognosis without adjuvant chemo","Laparoscopic colectomy: equivalent oncological outcomes to open (CLASSIC trial); faster recovery","CEA: normalize post-resection; rising CEA = recurrence — triggers CT surveillance"],
  mistakes:["Not testing MSI/MMR on all CRC — misses Lynch syndrome and immunotherapy indication","Adding adjuvant chemotherapy to MSI-H stage II — no benefit, potential harm","Not performing colonoscopy of the whole colon — synchronous cancers in 5%","Emergency Hartmann's without stoma plan — reversal rate only 50–60%; counsel patients"]
},
{
  id:"rectal-cancer", dept:"colorectal", name:"Rectal Cancer", latin:"Carcinoma recti", organ:"Rectum",
  severity:"high", tags:["rectum","TME","neoadjuvant","CRT","APER","anterior resection","MRI"],
  hero:"Adenocarcinoma of the rectum requiring high-quality MRI staging and multidisciplinary planning; total mesorectal excision (TME) is the surgical gold standard.",
  keypoints:[
    "Pelvic MRI is mandatory for staging: T-stage, CRM (≤1 mm = threatened), N-stage, EMVI (extramural vascular invasion)",
    "Neoadjuvant long-course CRT (45 Gy + capecitabine) or short-course RT for T3–T4 or CRM-threatened tumors",
    "TME: sharp dissection along mesorectal fascial plane; circumferential resection margin ≥1 mm; reduces local recurrence from 25% to <10%",
    "Permanent colostomy (APER) required if tumor <1 cm from sphincter or invasion of external sphincter/levator ani",
    "Watch-and-wait (organ preservation) after cCR to chemoradiotherapy: emerging evidence in selected patients"
  ],
  differentials:["Anal canal carcinoma (squamous cell — different treatment)","Villous adenoma (benign but high dysplasia risk)","GIST (submucosal)","Rectal endometriosis (women)","Lymphoma"],
  mnemonics:[{name:"TME Planes",text:"Mesorectal fascia (visceral) is separated from parietal fascia by the 'holy plane' — sharp dissection preserves autonomic nerves (hypogastric, inferior hypogastric plexus = erectile/bladder function)"}],
  overview:{
    definition:"Adenocarcinoma arising within the rectum (within 15 cm of anal verge on rigid sigmoidoscopy), requiring specific staging and multimodal treatment distinct from colon cancer.",
    epidemiology:"30% of all CRC; 15 000 new cases/year UK. Lower rectal tumors have worse local recurrence rates without optimal surgical technique. Male > female.",
    pathophysiology:"Same adenoma-carcinoma sequence as colon cancer. KRAS, APC, TP53 mutations. Local invasion into perirectal fat → threatened CRM → local recurrence if CRM <1 mm. Lymphatic spread to mesorectal nodes, then lateral pelvic nodes (Japanese classification). Vascular invasion → liver metastases.",
    classification:[
      {label:"Upper rectum (10–15 cm)",note:"Treated similar to sigmoid; partial mesorectal excision adequate; no APER"},
      {label:"Mid rectum (5–10 cm)",note:"Total TME to 5 cm below tumor; anterior resection ± defunctioning ileostomy"},
      {label:"Low rectum (<5 cm)",note:"Complete TME; ultra-low anterior resection with colo-anal anastomosis or APER if sphincter involved"},
      {label:"Very low / anal verge",note:"APER almost always required; perineal reconstruction for deep excision defect"}
    ]
  },
  diagnosis:{
    history:["Rectal bleeding, tenesmus, mucus PR, incomplete evacuation","Change in bowel habit (constipation or looser)","Pelvic pain (advanced — lateral invasion)","Urinary symptoms (bladder invasion)","Vaginal discharge/fistula (women)"],
    examination:["Digital rectal examination: height from anal verge, mobility, sphincter tone, proximity to sphincter complex","Rigid sigmoidoscopy: distance from anal verge, tumor circumference","Abdomen: liver, nodes"],
    investigations:[
      {name:"Pelvic MRI (high-resolution)",role:"Gold standard for local staging: T-stage, CRM, EMVI, mesorectal node morphology, sphincter involvement — dictates treatment"},
      {name:"CECT chest/abdomen/pelvis",role:"M-stage: liver, lung, peritoneal metastases; nodal staging"},
      {name:"Colonoscopy + biopsy",role:"Tissue diagnosis; assess tumor; synchronous colonic lesions"},
      {name:"Rigid sigmoidoscopy",role:"Accurate height measurement from anal verge — CT and flexible scope overestimate"},
      {name:"EUS (endorectal ultrasound)",role:"T-staging for early (T1–T2) tumors amenable to local excision; less accurate for advanced disease"},
      {name:"MSI/MMR, KRAS/NRAS/BRAF",role:"Guides systemic therapy; Lynch screening"},
      {name:"CEA, CBC, LFTs",role:"Baseline; CEA correlates with recurrence"}
    ]
  },
  criteria:{
    title:"Neoadjuvant Treatment Indications (MRI-Based)",
    items:[
      {k:"Short-course RT (25 Gy/5#)",v:"T3 mid/upper rectum; clear CRM; operable; no downstaging needed"},
      {k:"Long-course CRT (45 Gy + capecitabine)",v:"T3 low rectum; CRM threatened (≤1 mm); T4; N2 disease; or desired downstaging for sphincter preservation"},
      {k:"Interval to surgery",v:"Short-course RT: 7–10 days (immediate) or 8–12 weeks (delayed — more downsizing)"},
      {k:"Watch-and-wait",v:"Clinical complete response after CRT: no residual tumor on MRI/endoscopy; selected centers; strict surveillance protocol (MRI 8-weekly for 1 year)"},
      {k:"Total neoadjuvant therapy (TNT)",v:"FOLFOX × 4 cycles + CRT or SCRT + FOLFOX × 6 cycles; higher pCR; used in cT4 or high-risk T3"}
    ]
  },
  scoring:[],
  management:{
    conservative:["ERAS protocol","Neoadjuvant RT/CRT to reduce tumor bulk and local recurrence","Pelvic floor physiotherapy post-low anterior resection"],
    medical:["Adjuvant: FOLFOX/capecitabine for high-risk stage II or stage III","Metastatic: same as colon cancer systemic options","TNT (total neoadjuvant therapy): growing evidence for RAPIDO and PRODIGE-23 trials"],
    surgical:[
      {name:"Anterior resection (AR/LAR/ULAR)",when:"Mid–upper rectal tumors; distal margin ≥1 cm below tumor; sphincter preservable",notes:"Complete TME; defunctioning ileostomy for low anastomoses (<5 cm from AV); reversal at 3 months if no adjuvant chemotherapy needed; anastomotic leak 10–15% for very low"},
      {name:"Abdominoperineal excision (APER)",when:"Tumor <1 cm from dentate line; involvement of external sphincter or levator ani; poor sphincter function pre-op",notes:"Combined abdominal + perineal approach; extralevator APER reduces CRM positivity; permanent end colostomy; perineal reconstruction if large defect (myocutaneous flap)"},
      {name:"Hartmann's procedure",when:"Emergency rectal cancer with obstruction; palliative; frail patients",notes:"End colostomy + closed rectal stump; palliative resection avoids pelvic complications"},
      {name:"Local excision (TEMS/TAMIS)",when:"T1 tumors without adverse features (LVI, G3, SM3 invasion); TEM/TAMIS technique",notes:"Transanal endoscopic microsurgery; full thickness excision ± defect closure; no lymphadenectomy; salvage radical surgery if upstaged on histology"},
      {name:"Pelvic exenteration",when:"T4b invasion of bladder, uterus, prostate; recurrent rectal cancer; R0 intent",notes:"Total (anterior + posterior), anterior (bladder/uterus), posterior (sacrum); high morbidity; specialist center"}
    ]
  },
  technique:{
    title:"Total Mesorectal Excision (TME)",
    prep:["Bowel prep optional; bladder catheter; epidural or spinal","Supine Lloyd-Davies; ensure adequate perineal access","Discuss colostomy vs stoma with stoma therapist pre-op"],
    steps:[
      {n:1,t:"IMA ligation",d:"Identify and divide IMA at root (preserving left colic in some — 'high tie' vs 'low tie'); D3 lymphadenectomy"},
      {n:2,t:"Splenic flexure mobilization",d:"For tension-free low anastomosis — essential in low anterior resection"},
      {n:3,t:"TME dissection",d:"Sharp dissection on the posterior mesorectal plane (avascular 'holy plane'); preserve hypogastric nerves and inferior hypogastric plexus bilaterally"},
      {n:4,t:"Anterior plane",d:"Enter rectovaginal septum (women) or Denonvilliers' fascia (men); protect seminal vesicles, prostate"},
      {n:5,t:"Distal division",d:"Full-thickness rectal wall division ≥1 cm below tumor; staple division; washout rectal stump with betadine"},
      {n:6,t:"Colorectal anastomosis",d:"Circular stapler (29–33 mm); two intact staple 'doughnuts'; air-leak test; defunctioning ileostomy for low anastomosis"}
    ],
    pearls:["Mesorectal integrity is the single most important determinant of local recurrence — never disrupt mesorectal fascia","Hypogastric nerves (autonomic function): posterior lateral to IMA origin — protect during ligation","Air test: insufflate rectum with saline filling pelvis — bubbles = leak; repair or defunction","Anastomotic leak: <1 cm from AV = 10–20%; ≥1 cm defunction reduces clinical leak consequences"]
  },
  guidelines:[{src:"NICE CG131: Colorectal Cancer (updated 2023)"},{src:"ESMO Rectal Cancer Guidelines 2022"},{src:"NCCN Rectal Cancer 2023"}],
  pearls:["High-quality pelvic MRI is as important as surgical technique — plan CRM pre-operatively","Watch-and-wait: strict protocol; 30% recurrence by 2 years (mostly endoluminal — salvageable)","APER local recurrence: 25% with standard APER vs 10% with extralevator APER — sphincter involvement mandates levator resection","Defunctioning ileostomy: significantly reduces clinical anastomotic leak consequences in low AR"],
  mistakes:["Not measuring from anal verge with rigid sigmoidoscope — flexible scope overestimates height","Incomplete TME — most common cause of local recurrence (>25% vs <10% with complete TME)","Not treating threatened CRM pre-operatively — local recurrence from R1 margin","Missing EMVI on staging MRI — associated with systemic recurrence; intensifies systemic treatment"]
},
{
  id:"diverticulitis", dept:"colorectal", name:"Diverticulitis", latin:"Diverticulitis coli", organ:"Colon",
  severity:"medium", tags:["sigmoid","diverticula","Hinchey","Hartmann","abscess","peritonitis"],
  hero:"Inflammation or infection of colonic diverticula, ranging from uncomplicated (80%) to complicated (abscess, perforation, fistula, obstruction).",
  keypoints:[
    "Diverticulosis in 60% over 60 years; acute diverticulitis in 10–25% of those with diverticula",
    "Hinchey classification guides management: I (pericolic abscess), II (pelvic/distant abscess), III (purulent peritonitis), IV (fecal peritonitis)",
    "Uncomplicated: oral or IV antibiotics ± outpatient management; CT recommended to confirm diagnosis",
    "Hinchey III: laparoscopic peritoneal lavage vs Hartmann's — SCANDIV/LADIES trials show lavage inferior",
    "Elective sigmoid colectomy: discuss after second episode or complicated diverticulitis; not mandatory after first uncomplicated"
  ],
  differentials:["Colorectal cancer (sigmoid — must exclude at follow-up colonoscopy)","IBD","Ischemic colitis","Appendicitis (right-sided diverticulitis mimics appendicitis)","Ovarian pathology (women)"],
  mnemonics:[{name:"Hinchey Classification",text:"I=Pericolic abscess; II=Pelvic/distant abscess; III=Purulent peritonitis (no fecal contamination); IV=Fecal peritonitis — III/IV require emergency surgery or lavage"}],
  overview:{
    definition:"Inflammation of one or more diverticula of the colon, most commonly sigmoid; classified as uncomplicated or complicated.",
    epidemiology:"Diverticulosis: 5% at age 40, 60% at age 60. Diverticulitis: 10–25% lifetime risk with diverticulosis. Left colon (sigmoid) in Western populations; right colon in Asians.",
    pathophysiology:"Mucosal herniation through muscular wall at sites of nutrient artery penetration (false diverticula). Increased intraluminal pressure + low-fiber diet. Obstructed neck → bacterial overgrowth → microperformation → pericolic inflammation → abscess → free perforation.",
    classification:[
      {label:"Modified Hinchey 0 / Ia",note:"Stages the original Hinchey omits — 0 = mild clinical diverticulitis; Ia = confined pericolic inflammation/phlegmon, no abscess"},
      {label:"Hinchey I (Ib)",note:"Pericolic or mesenteric abscess"},
      {label:"Hinchey II",note:"Pelvic or retroperitoneal abscess (communicates via tract)"},
      {label:"Hinchey III",note:"Generalized purulent peritonitis — microscopic perforation, no fecal content"},
      {label:"Hinchey IV",note:"Generalized fecal peritonitis — free perforation with fecal content"},
      {label:"WSES CT classification",note:"Maps CT findings to uncomplicated vs complicated (stage 1a–4) to guide non-operative vs operative care"}
    ]
  },
  diagnosis:{
    history:["LIF pain (sigmoid) — RIF if right-sided or redundant sigmoid","Fever, nausea","Change in bowel habit","PR bleeding (uncommon — bleeding is usually from uncomplicated diverticulosis)","Previous episodes"],
    examination:["LIF tenderness, guarding, rigidity","Fever >37.5°C","Palpable mass (abscess)","Peritonism (Hinchey III/IV)"],
    investigations:[
      {name:"CT abdomen/pelvis (IV contrast)",role:"Gold standard: pericolic fat stranding, abscess, free air (perforation), fistula; Hinchey classification; exclude cancer"},
      {name:"CBC, CRP",role:"WBC elevated; CRP >150 suggests complicated disease"},
      {name:"Blood cultures",role:"If sepsis/Hinchey III/IV"},
      {name:"Urinalysis",role:"Sterile pyuria suggests adjacent colovesical fistula"},
      {name:"Colonoscopy",role:"6–8 weeks after resolution — mandatory to exclude underlying colorectal cancer"}
    ]
  },
  criteria:{
    title:"Hinchey Classification and Management",
    items:[
      {k:"Uncomplicated (no abscess, no free air)",v:"Oral antibiotics (co-amoxiclav or ciprofloxacin + metronidazole) 7–10 days; outpatient if tolerating oral"},
      {k:"Hinchey I (<4 cm abscess)",v:"IV antibiotics; may resolve; CT-guided drainage if >4 cm or no improvement at 48–72 h"},
      {k:"Hinchey II (pelvic abscess)",v:"CT-guided percutaneous drainage + IV antibiotics; operative if inaccessible"},
      {k:"Hinchey III",v:"Emergency sigmoid colectomy (Hartmann's or primary anastomosis ± defunctioning ileostomy); laparoscopic lavage: inferior outcomes (SCANDIV/LADIES)"},
      {k:"Hinchey IV",v:"Emergency Hartmann's procedure; mortality 30–40%; ICU post-op"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Clear fluids, bowel rest","Analgesia; no NSAIDs (mask perforation, worsen renal function)","Serial examination","Colonoscopy at 6–8 weeks after resolution"],
    medical:["Uncomplicated: ciprofloxacin 500 mg BD + metronidazole 400 mg TDS × 7 days; or co-amoxiclav","Complicated: IV piperacillin-tazobactam; meropenem if severe sepsis","Mesalazine: some evidence reduces recurrence; not standard"],
    surgical:[
      {name:"CT-guided percutaneous drainage",when:"Hinchey I–II abscess >4 cm; accessible; not technically difficult",notes:"8–12 Fr catheter; daily irrigation; remove when output minimal; bridge to elective surgery"},
      {name:"Laparoscopic sigmoid colectomy (elective)",when:"After second uncomplicated episode; after one complicated episode; persistent symptoms; immunocompromised; young patients (<40)",notes:"Resect entire sigmoid to rectum (at peritoneal reflection); colorectal anastomosis; no defunctioning unless anastomosis at risk"},
      {name:"Hartmann's procedure",when:"Hinchey III/IV (emergency); frail patients; inability to perform primary anastomosis safely",notes:"End colostomy + closed rectal stump; 50–60% never reversed; reversal high-risk"},
      {name:"Emergency sigmoid colectomy with primary anastomosis",when:"Hinchey III; fit patient; experienced surgeon; minimal contamination; RICA trial",notes:"± defunctioning ileostomy; reduces permanent stoma rate; requires experienced colorectal surgeon on-call"}
    ]
  },
  technique:{
    title:"Laparoscopic Elective Sigmoid Colectomy",
    prep:["CT confirms extent of diverticular disease","Colonoscopy excludes cancer","ERAS; stoma marking if anastomosis at risk"],
    steps:[
      {n:1,t:"IMA ligation",d:"Medial to lateral; high tie; D2–D3 lymphadenectomy; protect left ureter"},
      {n:2,t:"Medial dissection",d:"Identify and protect left ureter (crosses common iliac artery at bifurcation)"},
      {n:3,t:"Lateral mobilization",d:"Divide line of Toldt; mobilize descending colon and splenic flexure for tension-free anastomosis"},
      {n:4,t:"Distal division",d:"At rectosigmoid junction (within peritoneal reflection — healthy non-diverticular bowel); 29 mm stapler"},
      {n:5,t:"Proximal division",d:"Healthy proximal descending colon — no diverticula; check mesenteric tension"},
      {n:6,t:"Circular stapled anastomosis",d:"End-to-end or end-to-side; air test; wrap omentum around anastomosis"}
    ],
    pearls:["Ureter identification is mandatory — most commonly injured in sigmoid colectomy (0.3–0.5%)","Distal margin: divide at rectosigmoid junction — residual sigmoid leads to recurrence","Mesenteric tension: divide splenic flexure to ensure tension-free anastomosis","Left ureter: trace from its crossing of the common iliac artery before dividing IMA"]
  },
  guidelines:[{src:"ASCRS Practice Parameters: Diverticulitis 2022"},{src:"ESCP Diverticular Disease Guidelines 2020"},{src:"NICE CG163 Diverticular Disease 2019"}],
  pearls:["Hinchey III: Hartmann's is still standard — lavage trials (SCANDIV, LADIES) showed inferiority","Elective resection: not mandatory after first uncomplicated episode — decision after 2nd or complicated","Ureter identification: the most important step in sigmoid colectomy — 0.3–0.5% injury rate","Colonoscopy 6–8 weeks post-attack: mandatory to exclude cancer (CT cannot reliably differentiate)"],
  mistakes:["Colonoscopy during acute attack — perforation risk; delay 6–8 weeks","Laparoscopic lavage for Hinchey III — inferior to resection (SCANDIV/LADIES)","Not identifying left ureter — commonest laparoscopic sigmoid injury","Hartmann's without reversal plan — 50% permanent stoma; counsel beforehand"]
},
{
  id:"uc", dept:"colorectal", name:"Ulcerative Colitis", latin:"Colitis ulcerosa", organ:"Colon",
  severity:"medium", tags:["IBD","colitis","pancolitis","toxic megacolon","colectomy","infliximab","mesalazine"],
  hero:"Chronic relapsing mucosal inflammation of the colon, always involving the rectum and extending proximally in a continuous pattern; cure achievable with colectomy.",
  keypoints:[
    "Confined to mucosa; always involves rectum; extends proximally continuous — distinguishes from Crohn's",
    "Severity assessed by Truelove & Witts: mild/moderate/severe — severe requires hospitalization and IV therapy",
    "Acute severe UC (ASUC): IV hydrocortisone → rescue therapy (ciclosporin or infliximab) → colectomy if failed at 72 h",
    "CRC risk: pancolitis × 10 after 10 years; annual colonoscopy with chromoendoscopy after 8–10 years disease",
    "Three-stage colectomy (subtotal colectomy → IPAA → ileostomy closure) is standard surgical approach"
  ],
  differentials:["Crohn's colitis (skip lesions, rectal sparing, transmural)","Infectious colitis (Campylobacter, C. diff, CMV)","Ischemic colitis","Microscopic colitis (normal endoscopy)","Radiation proctitis"],
  mnemonics:[{name:"Truelove & Witts Severe Criteria",text:"Bloody stool >6/day + ONE of: HR>90, temp>37.8, Hb<10.5, ESR>30, CRP>30 = SEVERE → Admit for IV hydrocortisone"}],
  overview:{
    definition:"Chronic relapsing-remitting mucosal inflammatory bowel disease affecting the rectum and colon in a continuous pattern.",
    epidemiology:"Incidence 10–20/100 000/year in West; prevalence 240/100 000. Peak age 15–30 years (second peak 60–70). Slightly F>M. HLA-DRB1 associations.",
    pathophysiology:"Dysregulated mucosal immune response to commensal bacteria in genetically susceptible individuals → TH2/TH17-mediated mucosal inflammation → crypt abscesses → mucosal ulceration. Limited to mucosa and submucosa. Disrupted epithelial barrier (goblet cell depletion).",
    classification:[
      {label:"Montreal E1 — Proctitis",note:"Confined to rectum; 30–50% of UC; good prognosis; topical therapy effective"},
      {label:"Montreal E2 — Left-sided colitis (distal UC)",note:"Extends to splenic flexure; 30%"},
      {label:"Montreal E3 — Pancolitis (extensive)",note:"Extends beyond splenic flexure; 20%; highest CRC risk and surgical rates"}
    ]
  },
  diagnosis:{
    history:["Bloody diarrhea (key symptom)","Mucus PR","Urgency, tenesmus (rectal involvement)","Abdominal cramps","Extraintestinal manifestations: primary sclerosing cholangitis, pyoderma gangrenosum, uveitis, ankylosing spondylitis"],
    examination:["Abdominal tenderness, distension (toxic megacolon)","Tachycardia, fever (severe)","Rectal examination: blood and mucus on glove","Extraintestinal features: erythema nodosum, aphthous ulcers, uveitis"],
    investigations:[
      {name:"Stool cultures, C. diff toxin, CMV PCR",role:"Exclude infective cause; CMV colitis can mimic/complicate UC"},
      {name:"CBC, CRP, ESR, albumin",role:"Truelove & Witts severity assessment; albumin <30 = severe; falling Hb"},
      {name:"AXR (erect)",role:"Acute severe: mucosal edema ('thumbprinting'); free air (perforation); colonic diameter ≥6 cm (toxic megacolon definition)"},
      {name:"Flexible sigmoidoscopy + biopsy",role:"Confirms diagnosis; histology (crypt distortion, cryptitis, goblet cell depletion); avoid full colonoscopy in acute severe"},
      {name:"CT abdomen (if toxic megacolon suspected)",role:"Colonic dilation; perforation; pancolitis extent"},
      {name:"Fecal calprotectin",role:"Elevated in active IBD; monitoring treatment response"},
      {name:"Serology: pANCA (UC), ASCA (Crohn's)",role:"Supportive; not diagnostic"}
    ]
  },
  criteria:{
    title:"Truelove & Witts Severity Index",
    items:[
      {k:"Mild",v:"<4 bloody stools/day; no systemic upset; normal ESR"},
      {k:"Moderate",v:"4–6 stools/day; minimal systemic features"},
      {k:"Severe",v:">6 stools/day + systemic features: temp >37.8°C, HR >90, Hb <10.5, ESR >30, CRP >30"},
      {k:"Fulminant",v:">10 stools/day; continuous bleeding; toxicity; transfusion requirement; colonic dilation on AXR"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Remission induction: mesalazine (5-ASA) for proctitis/left-sided; topical + oral","Maintenance: mesalazine long-term; azathioprine for steroid-dependent/refractory","Nutritional support; iron supplementation; folate"],
    medical:["Acute severe UC (ASUC): IV hydrocortisone 100 mg QDS; bowel rest; VTE prophylaxis","Rescue therapy (failure at 72 h — Oxford criteria >8 stools/day or 3–8 + CRP >45): infliximab 5 mg/kg OR IV ciclosporin 2–4 mg/kg/day","Biological therapy (moderate-severe): infliximab, vedolizumab, ustekinumab, tofacitinib (JAK inhibitor)","CRC surveillance: colonoscopy with chromoendoscopy 8–10 years after symptom onset; annually thereafter for pancolitis"],
    surgical:[
      {name:"Emergency subtotal colectomy",when:"ASUC failing medical therapy at 72–96 h; toxic megacolon; perforation; massive hemorrhage",notes:"Hartmann's or Brooke ileostomy (close distal resection, leave rectal stump); allows completion resection + IPAA later; avoids IPAA in unwell/steroid-dependent patient"},
      {name:"Proctocolectomy + IPAA (ileo-pouch anal anastomosis)",when:"Elective surgery for failed/side-effect-ridden medical therapy; dysplasia/cancer; PSC + pancolitis",notes:"3-stage: subtotal → proctectomy + J-pouch + covering ileostomy → ileostomy closure. J-pouch: 4–6 stools/day; failure (pouchitis) in 10–15%"},
      {name:"Proctocolectomy + Brooke ileostomy",when:"Low rectal cancer; poor sphincter function; elderly; failed IPAA; patient preference",notes:"Permanent end ileostomy; no bowel function limitation; lower reoperation rate than IPAA"}
    ]
  },
  technique:{
    title:"Stage 1: Emergency Subtotal Colectomy",
    prep:["Resuscitation; IV hydrocortisone until decision made","Mark stoma site pre-op","GA; supine","Broad-spectrum antibiotics"],
    steps:[
      {n:1,t:"Incision",d:"Midline laparotomy; assess bowel viability and distension"},
      {n:2,t:"Mobilization",d:"Medial to lateral; avoid contamination; beware fragile inflamed bowel"},
      {n:3,t:"Proximal division",d:"Divide terminal ileum 5 cm above ileocecal valve"},
      {n:4,t:"Colonic resection",d:"Mobilize entire colon; preserve rectosigmoid; divide at rectosigmoid junction"},
      {n:5,t:"Rectal stump",d:"Hartmann's (close rectosigmoid stump) or mucous fistula; leave in situ for IPAA later"},
      {n:6,t:"Brooke ileostomy",d:"Right iliac fossa end ileostomy; evert (spout) 2 cm above skin; mature immediately"}
    ],
    pearls:["Leave adequate rectal stump for subsequent IPAA — do not resect rectum acutely","Staple closure of rectal stump with drain alongside prevents stump blowout","Avoid corticosteroid-suppressed patient for IPAA — wait minimum 3 months post-steroids","IPAA failure rate 10–15%: pouchitis, pouch-vaginal fistula, anastomotic stricture"]
  },
  guidelines:[{src:"ECCO Consensus Guidelines on UC 2022"},{src:"NICE NG130: UC 2019"},{src:"BSG UC Inflammatory Bowel Disease Guidelines 2019"}],
  pearls:["ASUC: if Oxford criteria met at 72 h (>8 stools or 3–8 + CRP >45) — rescue therapy or colectomy; do not delay","Infliximab and ciclosporin as rescue are equivalent (CONSTRUCT trial) — use center preference","IPAA: functional results excellent; 4–6 bowel movements/day; pouchitis responds to metronidazole/ciprofloxacin","PSC + UC = pancolitis annual colonoscopy from diagnosis (not 8–10 year delay)"],
  mistakes:["Performing IPAA in acute emergency setting — prohibitive complication rates; do subtotal colectomy first","Continuing steroids for >7–10 days without reassessment — delays definitive surgery","Not screening for CMV in steroid-refractory UC — CMV colitis responds to ganciclovir","Not planning 3-stage surgery — 2-stage in high-risk patients increases anastomotic leak and pouch failure"]
},
{
  id:"crohn", dept:"colorectal", name:"Crohn's Disease", latin:"Morbus Crohn", organ:"GI tract",
  severity:"medium", tags:["IBD","Crohn","skip lesions","fistula","stricture","biologic","resection","perianal"],
  hero:"Transmural granulomatous inflammation that can affect any segment of the GI tract from mouth to anus, with a relapsing course and high surgical morbidity.",
  keypoints:[
    "Transmural inflammation → skip lesions, string sign on imaging, rose-thorn ulcers; can affect any part of GI tract",
    "Montreal classification: L1 (terminal ileum), L2 (colon), L3 (ileocolonic), L4 (upper GI); B1 (inflammatory), B2 (stricturing), B3 (penetrating)",
    "Perianal disease in 30%: fistula-in-ano, abscess, skin tags, anal stenosis — examine under anesthesia + MRI pelvis",
    "Surgery is NOT curative — recurrence near anastomosis in 50% at 5 years; methotrexate or biologic maintenance post-resection",
    "Strictureplasty: bowel-preserving alternative to resection for multiple short strictures — preserves length"
  ],
  differentials:["Ulcerative colitis (mucosa only, rectum involved, continuous)","Intestinal tuberculosis (granulomas, endemic area, AFB)","NSAID enteropathy","Intestinal lymphoma","Yersinia ileitis (acute)"],
  mnemonics:[{name:"Montreal L/B Classification",text:"L1=ileum, L2=colon, L3=ileocolon, L4=upper GI. B1=inflammatory (non-stricturing, non-penetrating), B2=stricturing, B3=penetrating (fistula/abscess). Add p=perianal"}],
  overview:{
    definition:"Chronic transmural granulomatous inflammatory disease that may affect any part of the gastrointestinal tract, characterized by skip lesions and extraintestinal manifestations.",
    epidemiology:"Incidence 5–10/100 000/year in West; prevalence 150/100 000. Peak onset 15–35 years. F=M. NOD2/CARD15 mutations in 15–20%.",
    pathophysiology:"Dysregulated TH1/TH17-mediated transmural immune response to enteric bacteria. Transmural inflammation → fibrosis (stricture) → fistulation (penetrating). Granulomas in 40–60% (non-caseating). Skip lesions: segments of normal bowel between inflamed areas.",
    classification:[
      {label:"Montreal L1 (Ileocecal)",note:"Most common (40%); terminal ileitis ± cecal involvement"},
      {label:"Montreal L2 (Colonic)",note:"Crohn's colitis — differentiate from UC"},
      {label:"Montreal L3 (Ileocolonic)",note:"Both ileum and colon; high surgical rate"},
      {label:"Montreal B1/B2/B3",note:"Inflammatory / Stricturing / Penetrating — dictates treatment approach"}
    ]
  },
  diagnosis:{
    history:["RIF pain (terminal ileitis — mimics appendicitis)","Diarrhea (non-bloody in small bowel; bloody in colonic Crohn's)","Weight loss, malnutrition","Perianal symptoms: pain, discharge, fistula, abscess","Extraintestinal: arthritis, uveitis, erythema nodosum, pyoderma gangrenosum","Mouth ulcers, anal skin tags"],
    examination:["RIF tenderness or mass (phlegmon/abscess)","Perianal examination: skin tags, fistula openings, induration, anal stenosis","Abdominal distension (obstruction from stricture)","Cachexia","Fistula openings (enterocutaneous, enterovesical, rectovaginal)"],
    investigations:[
      {name:"MRI small bowel (MRE/MRI enterography)",role:"Gold standard for small bowel Crohn's: transmural inflammation, strictures, fistulas, abscesses; disease activity; avoids radiation"},
      {name:"CTE (CT enterography)",role:"Alternative to MRE; faster; equivalent for stricture detection; more radiation"},
      {name:"MRI pelvis",role:"Perianal disease: fistula classification, abscess location, sphincter involvement — guides surgical planning"},
      {name:"Colonoscopy + biopsy",role:"Terminal ileum + colon; skip lesions, cobblestoning, aphthous ulcers, deep linear ulcers; biopsy for granulomas"},
      {name:"Upper GI endoscopy",role:"If upper GI symptoms (nausea, dysphagia); L4 Crohn's"},
      {name:"Fecal calprotectin, CRP",role:"Active inflammation marker; monitoring; not specific"},
      {name:"Nutritional assessment: B12, folate, albumin, zinc",role:"Terminal ileum B12 malabsorption; assess nutritional status"},
      {name:"ASCA serology",role:"Positive in 60–70% Crohn's; supporting diagnosis"}
    ]
  },
  criteria:{
    title:"Surgical Indications in Crohn's Disease",
    items:[
      {k:"Obstruction (B2)",v:"Symptomatic stricture not responding to dilation; long strictures; multiple short strictures → strictureplasty"},
      {k:"Perforation/abscess (B3)",v:"Percutaneous drainage first; elective resection after 6–8 weeks"},
      {k:"Fistula (B3)",v:"Enterocutaneous, enteroenteric, rectovaginal — medical therapy first; surgical if refractory"},
      {k:"Failure of medical therapy",v:"Refractory disease despite biologic optimization; intolerance to immunosuppression"},
      {k:"Malignancy",v:"CRC in Crohn's colitis; dysplasia at endoscopy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Nutritional therapy: exclusive enteral nutrition (EEN) for active Crohn's — steroid equivalent efficacy in pediatric; adjunct in adults","ERAS protocols for surgery","Optimize nutrition pre-operatively (albumin, B12, zinc)"],
    medical:["Induction: prednisolone; budesonide (small bowel/right colon L1/L3); biologic + immunomodulator","Maintenance: azathioprine/6-MP; methotrexate","Biologics: infliximab, adalimumab (anti-TNF); vedolizumab (gut-selective); ustekinumab (IL-12/23)","Perianal fistula: seton suture + infliximab; combined approach; avoid radical surgery in active luminal disease","Post-op recurrence prevention: thiopurine or biologic; endoscopy at 6 months (Rutgeerts score)"],
    surgical:[
      {name:"Ileocecal resection",when:"Terminal ileal Crohn's with obstruction, fistula, or failed medical therapy",notes:"Resect macroscopically involved bowel only (no wide margins — same recurrence); stapled side-to-side anastomosis (SIDESTEP trial: lower recurrence than end-to-end); laparoscopic preferred"},
      {name:"Strictureplasty (Heineke-Mikulicz / Finney)",when:"Multiple short strictures; short bowel risk; previous extensive resections; B2 behavior",notes:"Heineke-Mikulicz for <10 cm; Finney for 10–25 cm; Michelassi (side-to-side isoperistaltic) for >25 cm; does not increase cancer risk"},
      {name:"Segmental colectomy / subtotal colectomy",when:"Crohn's colitis; colonic stricture; fistula from colon",notes:"Subtotal if diffuse; segmental for localized disease; IPAA controversial in colonic Crohn's — pouch failure 30–50%"},
      {name:"EUA + seton placement",when:"Perianal abscess; complex fistula — acute phase",notes:"Drain abscess; loose seton to control fistula; allows luminal disease treatment; definitive repair (LIFT/plug/flap) only when disease quiescent"},
      {name:"Defunctioning ileostomy",when:"Severe perianal/rectal disease; complex fistula; buy time for biologic therapy; rectal stricture",notes:"Rarely curative alone; plan for restoration of continuity if rectal disease resolves"}
    ]
  },
  technique:{
    title:"Heineke-Mikulicz Strictureplasty",
    prep:["MRE confirms stricture length and number","Nutritional optimization pre-op","Mark all strictures on table with IOUS/palpation"],
    steps:[
      {n:1,t:"Identify all strictures",d:"Run entire small bowel; mark each stricture; decide which to strictureplasty vs resect"},
      {n:2,t:"Longitudinal enterotomy",d:"Full-thickness incision across stricture extending 2 cm into normal bowel each end"},
      {n:3,t:"Close transversely",d:"Vicryl 2-0 interrupted or running suture; Heineke-Mikulicz converts longitudinal to transverse closure — widens lumen"},
      {n:4,t:"Biopsy all strictures",d:"Send biopsy from stricture site — exclude small bowel adenocarcinoma (rare but association with Crohn's)"},
      {n:5,t:"Check for leak",d:"Air test or indigo carmine; inspect closure"}
    ],
    pearls:["Resect diseased bowel only — wide margins do not reduce recurrence (NCCN, ECCO)","Side-to-side stapled anastomosis reduces anastomotic recurrence vs end-to-end (SIDESTEP trial)","Postoperative endoscopy at 6 months: Rutgeerts score i0/i1 = low recurrence risk; i2–i4 = restart/intensify biologics","Perianal: never do definitive fistula repair in setting of active luminal disease"]
  },
  guidelines:[{src:"ECCO Consensus Guidelines on Crohn's Disease 2022"},{src:"NICE NG129: Crohn's Disease 2019"},{src:"AGA Guidelines on Biologic Therapy in IBD 2020"}],
  pearls:["Surgery is not curative in Crohn's — post-operative biologic/thiopurine reduces recurrence","Strictureplasty: safe even with multiple sites; equivalent recurrence to resection; avoids short bowel","Side-to-side stapled anastomosis: lower recurrence vs end-to-end (SIDESTEP trial — 9% vs 18% at 1 year)","Perianal fistula: infliximab + seton drainage — combined approach has 70% fistula closure rate"],
  mistakes:["Wide resection margins in Crohn's — does not reduce recurrence, wastes bowel","IPAA for Crohn's colitis — 30–50% pouch failure; absolute contraindication for colonic Crohn's with rectal disease","Definitive perianal repair in active luminal disease — high failure rate; treat luminal disease first","Not doing post-op endoscopy at 6 months — misses early anastomotic recurrence (Rutgeerts score)"]
},
{
  id:"appendicitis", dept:"colorectal", name:"Acute Appendicitis", latin:"Appendicitis acuta", organ:"Appendix",
  severity:"medium", tags:["appendix","Alvarado","McBurney","laparoscopic","perforation","abscess"],
  hero:"Acute inflammation of the vermiform appendix; the most common abdominal surgical emergency; lifetime risk 8% in men, 7% in women.",
  keypoints:[
    "Alvarado score: ≥7 = high probability (operate); 4–6 = equivocal (consider CT); ≤3 = low probability",
    "CT abdomen/pelvis: 94% sensitivity, 95% specificity; US first in women of reproductive age and children (avoid radiation)",
    "Laparoscopic appendectomy: preferred in most centers; superior in obese, women of reproductive age, diagnostic uncertainty",
    "Non-operative management (antibiotics): RCT evidence for uncomplicated appendicitis; 30% failure rate at 1 year",
    "Perforated appendicitis with abscess: initial drainage ± antibiotics → interval appendectomy at 6–8 weeks (controversial)"
  ],
  differentials:["Mesenteric adenitis (young, viral prodrome)","Terminal ileitis (Crohn's, Yersinia)","Ovarian torsion/cyst/PID (women)","Right ureteric colic","Psoas abscess","Cecal carcinoma"],
  mnemonics:[{name:"Alvarado (MANTRELS)",text:"Migration of pain to RIF, Anorexia, Nausea/Vomiting, Tenderness in RIF, Rebound, Elevated temp, Leukocytosis, Shift to left — max 10 points; ≥7=high, 4-6=equivocal, ≤3=low"}],
  overview:{
    definition:"Acute inflammatory process of the appendix most commonly initiated by appendiceal lumen obstruction (fecolith, lymphoid hyperplasia).",
    epidemiology:"Lifetime risk 8.6% men, 6.7% women. Peak incidence 10–19 years. 30 000 appendectomies/year UK.",
    pathophysiology:"Lumen obstruction → increased intraluminal pressure → vascular compromise → bacterial overgrowth → transmural inflammation → perforation if untreated (36–48 h). Bacteroides, E. coli, Peptostreptococcus most common.",
    classification:[
      {label:"Uncomplicated (grade 1–2)",note:"Inflamed without perforation; Alvarado ≥7 or CT confirmed; laparoscopic appendectomy"},
      {label:"Complicated — perforation with generalized peritonitis (grade 3)",note:"Free air, generalized contamination; urgent appendectomy + washout"},
      {label:"Complicated — appendix mass/abscess (grade 4)",note:"Palpable mass or CT phlegmon/abscess; initial non-operative; interval appendectomy"}
    ]
  },
  diagnosis:{
    history:["Central abdominal pain migrating to RIF over 12–24 h","Anorexia (key — nearly universal)","Nausea and vomiting","Low-grade fever","Diarrhea (pelvic appendix) or dysuria (retrocecal)"],
    examination:["McBurney's point tenderness (2/3 from umbilicus to ASIS)","Rovsing's sign: RIF pain on palpation of LIF","Guarding, rigidity (peritonitis)","Psoas sign (retrocecal): RIF pain on right leg extension","Obturator sign: RIF pain on internal rotation of flexed right hip"],
    investigations:[
      {name:"CBC",role:"WBC 11–16 in 70–80%; >18 suggests perforation or alternative diagnosis"},
      {name:"CRP",role:"Elevated; >50 suggests perforation/abscess"},
      {name:"urine hCG",role:"Mandatory in women of reproductive age — exclude ectopic pregnancy"},
      {name:"Urinalysis",role:"Sterile pyuria possible; exclude UTI"},
      {name:"US abdomen",role:"First-line in children/pregnant/reproductive-age women: diameter >6 mm, non-compressible, periappendiceal fat stranding; poor sensitivity in perforation"},
      {name:"CT abdomen/pelvis (IV ± PO contrast)",role:"Sensitivity 94%, specificity 95%; best for adults with equivocal diagnosis or to exclude complications"},
      {name:"MRI abdomen",role:"Pregnant women (avoids radiation): sensitivity 90%"}
    ]
  },
  criteria:{
    title:"Alvarado Scoring System (MANTRELS)",
    items:[
      {k:"Migration of pain to RIF",v:"1 point"},
      {k:"Anorexia",v:"1 point"},
      {k:"Nausea/vomiting",v:"1 point"},
      {k:"RIF tenderness",v:"2 points"},
      {k:"Rebound tenderness",v:"1 point"},
      {k:"Elevated temperature >37.3°C",v:"1 point"},
      {k:"Leukocytosis >10",v:"2 points"},
      {k:"Score interpretation",v:"≤3: appendicitis unlikely; 4–6: equivocal → CT; ≥7: appendicitis likely → operate"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NBM; IV fluids; analgesia (morphine does NOT mask signs — RCT evidence)","Antibiotics if non-operative management chosen (Alvarado 4–6): co-amoxiclav or piperacillin-tazobactam","APPAC trial: antibiotics successful in 63% at 5 years; 37% require appendectomy eventually","Appendix mass/abscess: IV antibiotics + CT-guided drainage if accessible → interval appendectomy"],
    medical:["Prophylactic antibiotics for appendectomy: single dose cefuroxime + metronidazole (reduces wound infection)","IV antibiotics: if perforation — piperacillin-tazobactam × 5 days"],
    surgical:[
      {name:"Laparoscopic appendectomy",when:"Confirmed or high-probability appendicitis; preferred in women of reproductive age, obese, diagnostic uncertainty",notes:"3-port technique; identify appendix; ligate base with Endoloop or stapler; wash out if perforated; remove in retrieval bag"},
      {name:"Open appendectomy (Lanz/McBurney incision)",when:"Resources/expertise unavailable; previous surgery; complicated anatomy; perforation with dense adhesions",notes:"Lanz: transverse RIF incision over McBurney's point; split-muscle approach; locate appendix by following taenia coli to base"},
      {name:"Interval appendectomy",when:"After appendix mass/abscess resolved (6–8 weeks); colonoscopy recommended first to exclude cecal tumor",notes:"Increasingly abandoned as evidence suggests 70% have no further episodes; colonoscopy to exclude cecal cancer"}
    ]
  },
  technique:{
    title:"Laparoscopic Appendectomy",
    prep:["GA; catheter; supine with slight left tilt","Prophylactic antibiotics 30 min before","3 ports: 10–12 mm umbilical (camera), 5 mm suprapubic, 5 mm LIF"],
    steps:[
      {n:1,t:"Peritoneal assessment",d:"Survey abdomen; locate appendix; identify terminal ileum to confirm orientation; check for Meckel's diverticulum"},
      {n:2,t:"Mesoappendix division",d:"Harmonic or bipolar; divide from tip to base; identify appendiceal artery (branch of ileocolic)"},
      {n:3,t:"Base ligation",d:"Two Endoloops or endostapler (more secure for thick/perforated base); ensure ligation 5 mm above cecum"},
      {n:4,t:"Division",d:"Divide appendix between loops/staple lines; do not bury stump (no benefit; increases complication)"},
      {n:5,t:"Retrieval",d:"Retrieval bag; extract without contamination; irrigate if pus"},
      {n:6,t:"Washout",d:"Thorough saline irrigation of RIF and pelvis; drain only if significant contamination"}
    ],
    pearls:["Analgesia (morphine) does NOT mask signs of appendicitis — give early and withhold nothing on this basis","Normal-looking appendix at laparoscopy: inspect terminal ileum for Meckel's, Crohn's, mesenteric adenitis; consider removing appendix (histology may show acute inflammation)","Stump appendicitis: missed appendix base — ensure ligation at base, not mid-appendix","Stump inversion: no benefit over ligation alone"]
  },
  guidelines:[{src:"WSES Jerusalem Guidelines for Acute Appendicitis 2020"},{src:"NICE CG164 Appendicitis 2021"},{src:"APPAC Trial: Salminen et al., JAMA 2015"}],
  pearls:["Analgesia early — does not mask signs; withholding opioids is cruel and outdated practice","Non-operative management (APPAC): 63% success at 5 years; counsel patients about 37% failure rate","Laparoscopic is preferred in women of reproductive age — diagnostic value + better visualization for pelvic pathology","Interval appendectomy after mass: colonoscopy first to exclude cecal cancer; not mandatory if low risk"],
  mistakes:["Withholding analgesia — outdated; IV opioids do not mask clinical signs (Cochrane review)","Not doing beta-hCG in women — ectopic pregnancy is life-threatening and easily missed","Burying the appendix stump — increases complication rate; no benefit","Removing 'normal-looking' appendix and missing Meckel's or terminal ileitis — inspect whole bowel"]
},
{
  id:"haemorrhoids", dept:"colorectal", name:"Hemorrhoids", latin:"Haemorrhoidae", organ:"Anus",
  severity:"low", tags:["haemorrhoids","piles","bleeding","prolapse","hemorrhoidectomy","banding","RBL"],
  hero:"Symptomatic enlarged vascular cushions of the anal canal; most common anorectal condition presenting with painless bright red rectal bleeding.",
  keypoints:[
    "Internal hemorrhoids arise above dentate line (no somatic sensation); external below (painful if thrombosed)",
    "Goligher classification: I (bleed, no prolapse) → II (prolapse, spontaneous reduction) → III (prolapse, manual reduction) → IV (irreducible)",
    "First-line: rubber band ligation (RBL) — 70–90% effective for Grades I–III; avoids surgery",
    "Hemorrhoidectomy (Milligan-Morgan or Ferguson): grade III–IV or failed RBL; risk of incontinence, stricture, bleeding",
    "Thrombosed external hemorrhoid: excision within 72 h gives immediate relief; after 72 h conservative management"
  ],
  differentials:["Rectal cancer (MUST exclude in >40 or persistent symptoms)","Anal fissure (pain is cardinal feature)","Anorectal abscess/fistula","Rectal prolapse","Colorectal polyp"],
  mnemonics:[{name:"Goligher Grades I–IV",text:"I=Bleed only; II=Prolapse+spontaneous reduce; III=Prolapse+manual reduce; IV=Irreducible permanent prolapse. Grade I-II=Conservative/RBL; III=RBL or surgery; IV=Surgery"}],
  overview:{
    definition:"Symptomatic engorgement or prolapse of the fibrovascular cushions in the anal canal, causing bleeding, prolapse, discomfort, or soiling.",
    epidemiology:"Prevalence 4–36% of population; peak age 45–65; equal sex distribution. Associated with straining, constipation, low-fiber diet, pregnancy.",
    pathophysiology:"Sliding downward of anal cushions (rich vascular sinusoids in right anterior, right posterior, left lateral positions). Engorgement + degeneration of the Treitz muscle (suspensory ligament) → prolapse. Internal: above dentate line → columnar epithelium → painless bleeding. External: below dentate line → squamous epithelium → painful if thrombosed.",
    classification:[
      {label:"Goligher Grade I",note:"Bleed but do not prolapse"},
      {label:"Goligher Grade II",note:"Prolapse on defecation but reduce spontaneously"},
      {label:"Goligher Grade III",note:"Prolapse requiring manual reduction"},
      {label:"Goligher Grade IV",note:"Permanently prolapsed, irreducible; risk of strangulation"}
    ]
  },
  diagnosis:{
    history:["Painless bright red rectal bleeding (on paper, in pan, coating stool — not mixed)","Prolapse: lump after defecation","Pruritus ani, soiling, mucus discharge","Pain only if thrombosed, strangulated, or anal fissure coexists","Always: change in bowel habit, weight loss, dark blood → must exclude cancer"],
    examination:["Perianal inspection: external skin tags, prolapsed hemorrhoids","Proctoscopy: grade and position of internal hemorrhoids","Digital rectal examination: exclude rectal mass, assess sphincter tone","Rigid sigmoidoscopy: exclude rectal pathology"],
    investigations:[
      {name:"Proctoscopy",role:"Confirms grade; location (3, 7, 11 o'clock); guides treatment planning"},
      {name:"Colonoscopy/flexible sigmoidoscopy",role:"Mandatory if: age >40, change in bowel habit, family history CRC, iron-deficiency anemia — exclude rectal/colonic cancer"},
      {name:"CBC",role:"Iron-deficiency anemia from chronic bleeding"}
    ]
  },
  criteria:{
    title:"Treatment by Goligher Grade",
    items:[
      {k:"Grade I",v:"Dietary fiber, stool softeners; banding"},
      {k:"Grade II",v:"RBL ×1–3 sessions; sclerotherapy (office-based)"},
      {k:"Grade III",v:"RBL (2–3 sessions); stapled hemorrhoidopexy; hemorrhoidectomy"},
      {k:"Grade IV",v:"Hemorrhoidectomy; stapled hemorrhoidopexy less durable"},
      {k:"Thrombosed external hemorrhoid",v:"<72 h: excision under LA for immediate relief; >72 h: sitz baths, topical anesthetic, analgesia"}
    ]
  },
  scoring:[],
  management:{
    conservative:["High-fiber diet (25–30 g/day); adequate hydration","Stool softeners (lactulose, ispaghula)","Avoid straining; regular exercise","Sitz baths for comfort","Topical creams: symptomatic relief only (no curative effect)"],
    medical:["Flavonoids (diosmin + hesperidin): reduce bleeding episodes; not widely used in UK"],
    surgical:[
      {name:"Rubber band ligation (RBL)",when:"Grades I–III; first-line procedural treatment; most cost-effective",notes:"Band placed 1 cm above dentate line; avoid placement at or below dentate line (pain); 70–90% success; repeat for multiple quadrants"},
      {name:"Sclerotherapy",when:"Grade I–II; bleeding; anticoagulated patients (no banding)",notes:"5% phenol in almond oil; 3–5 mL per quadrant above dentate line; multiple sessions; lower efficacy than RBL"},
      {name:"Stapled hemorrhoidopexy (PPH)",when:"Grade III prolapsed hemorrhoids; circumferential prolapse",notes:"Circular stapler reposition mucosa + hemorrhoidal tissue; recurrence rate higher than open hemorrhoidectomy; risk of rectal stenosis/PPPH"},
      {name:"Milligan-Morgan hemorrhoidectomy",when:"Grade III–IV; failed RBL; large grade III; thrombosed grade IV",notes:"3-quadrant excision; leave skin bridges; wounds left open; heal in 4–6 weeks; most effective long-term but most painful"},
      {name:"Ferguson closed hemorrhoidectomy",when:"Grade III–IV; surgeon preference",notes:"Wound closed with absorbable suture; equivalent outcomes to Milligan-Morgan; lower wound care burden"},
      {name:"Hemorrhoidal artery ligation (HAL/HALO)",when:"Grade II–III; minimally invasive option",notes:"Doppler-guided ligation of feeding arteries; ± mucopexy (RAR); equivalent short-term outcomes; higher recurrence at 5 years"}
    ]
  },
  technique:{
    title:"Milligan-Morgan Hemorrhoidectomy",
    prep:["Lithotomy or left lateral; spinal or GA","Bowel prep (enema); prophylactic antibiotics","Mark skin bridges pre-op: preserve at least 3 skin bridges between excisions"],
    steps:[
      {n:1,t:"Proctoscopy",d:"Identify hemorrhoids at 3, 7, 11 o'clock positions; confirm skin bridges"},
      {n:2,t:"Transfixion suture",d:"2-0 Vicryl figure-of-8 suture through vascular pedicle at anorectal junction; ligate"},
      {n:3,t:"Excision",d:"V-shaped excision including external skin component to mucocutaneous junction; preserve skin bridges (≥2 cm)"},
      {n:4,t:"Open wound",d:"Do NOT close; hemostasis with bipolar; inspect for adequate skin bridge"},
      {n:5,t:"Repeat for other quadrants",d:"Leave minimum 3 skin bridges of adequate width to prevent stenosis"},
      {n:6,t:"Post-op",d:"Metronidazole + anesthetic suppositories; sitz baths; lactulose; complete healing in 4–6 weeks"}
    ],
    pearls:["Post-hemorrhoidectomy pain: worst at first defecation — ensure adequate analgesia (GTN ointment reduces internal sphincter spasm; 2% lidocaine gel)","Skin bridge preservation: at least 3 adequate bridges — prevents anal stenosis (most serious complication)","Urinary retention: common post-op (20%); adequate analgesia; warm bath; catheter if fails","Secondary hemorrhage (day 7–10): 1–2%; readmit; examine EUA if needed"]
  },
  guidelines:[{src:"ASCRS Practice Parameters for Hemorrhoids 2021"},{src:"ACPGBI Position Statement on Hemorrhoids 2019"},{src:"ESCP Hemorrhoidal Disease Guidelines 2020"}],
  pearls:["RBL is first-line procedural treatment for Grades I–III — 70–90% success; repeat at 4–6 week intervals","Always exclude colorectal cancer before attributing bleeding to hemorrhoids in patients >40","GTN 0.2% ointment post-hemorrhoidectomy: reduces internal sphincter spasm and pain — significantly improves recovery","Thrombosed external hemorrhoid: excision <72 h = immediate relief; after 72 h = conservative (pain is reducing)"],
  mistakes:["Attributing rectal bleeding to hemorrhoids without colonoscopy in >40 years — missed cancer","RBL below dentate line — causes severe pain; must be above dentate line","Not preserving skin bridges in hemorrhoidectomy — anal stenosis (serious long-term complication)","Not warning patients about post-hemorrhoidectomy pain — adequate analgesic plan essential"]
},
{
  id:"anal-fissure", dept:"colorectal", name:"Anal Fissure", latin:"Fissura ani", organ:"Anus",
  severity:"low", tags:["anus","fissure","GTN","botox","lateral sphincterotomy","posterior midline"],
  hero:"Linear tear in the squamous epithelium of the lower anal canal, causing severe pain during and after defecation and bright red bleeding.",
  keypoints:[
    "90% posterior midline; 10% anterior midline; lateral position suggests secondary cause (Crohn's, HIV, TB, syphilis)",
    "Pathophysiology: posterior midline is relatively ischemic → trauma → internal sphincter hypertonia → perpetuates ischemia → chronicity",
    "Acute (<6 weeks): high-fiber diet + GTN 0.2–0.4% topical (first-line); chronic (>6 weeks): GTN + diltiazem + botulinum toxin",
    "Lateral internal sphincterotomy (LIS): 95% cure; risk of incontinence 5–10% (flatus/minor soiling)",
    "GTN causes headache in 20–40%; limit adherence — diltiazem as alternative"
  ],
  differentials:["Hemorrhoids (painless bleeding, no pain on defecation)","Anorectal abscess (continuous throbbing pain)","Anal cancer (irregular, non-midline, not healing)","Crohn's perianal disease (lateral, multiple, indurated)","Sexually transmitted infection (HSV, syphilis)"],
  mnemonics:[{name:"Fissure Treatment Ladder",text:"Fiber + GTN (1st) → Diltiazem (2nd) → Botulinum toxin (3rd) → Lateral Internal Sphincterotomy (4th — most effective; risk of incontinence)"}],
  overview:{
    definition:"A painful longitudinal tear in the squamous epithelium of the anal canal, typically in the posterior midline, associated with hypertonia of the internal sphincter.",
    epidemiology:"Affects all ages; peak 20–40 years; equal sex distribution; anterior fissures more common in women (related to posterior perineal body).",
    pathophysiology:"Hard stool / trauma → posterior midline tear → exposed internal sphincter → reflex hypertonia → reduced anodermal blood flow (inferior rectal artery in posterior commissure) → ischemia → failure to heal → chronicity. Sentinel pile (external skin tag) and hypertrophied anal papilla develop.",
    classification:[
      {label:"Acute",note:"<6 weeks; edges fresh; no sentinel pile; responds well to conservative treatment"},
      {label:"Chronic",note:">6 weeks; raised fibrous edges; sentinel pile; exposed sphincter fibers; requires procedural or surgical intervention"}
    ]
  },
  diagnosis:{
    history:["Severe pain during and after defecation ('passing glass')","Bright red blood on paper or coating stool","Fear of defecation → constipation → vicious cycle","Pain lasts minutes to hours post-defecation","Pruritus ani, mucus discharge (chronic)"],
    examination:["Gentle parting of buttocks reveals posterior midline fissure (usually)","Sentinel skin tag externally (chronic)","Hypertrophied anal papilla internally (chronic)","DRE: painful; do not force; spasm of internal sphincter","Lateral position fissure → secondary cause: Crohn's, HIV, TB, cancer"],
    investigations:[
      {name:"Clinical diagnosis",role:"Usually clinical; no investigation required for typical posterior midline fissure"},
      {name:"Anorectal manometry",role:"Elevated resting anal pressure confirms internal sphincter hypertonia; guides sphincterotomy extent"},
      {name:"Endoscopy",role:"If lateral fissure or suspected secondary cause; colonoscopy if IBD suspected"}
    ]
  },
  criteria:{
    title:"Chronic Fissure vs Acute Fissure",
    items:[
      {k:"Acute (<6 weeks)",v:"Fresh edges; treat with fiber + GTN 0.2% TDS for 8 weeks; 50% heal"},
      {k:"Chronic (>6 weeks)",v:"Raised fibrous edges; sentinel pile; try diltiazem 2% topically; botulinum toxin if GTN fails"},
      {k:"Failed medical therapy",v:"Lateral internal sphincterotomy — 95% cure; risk of fecal incontinence 5–10%"},
      {k:"Secondary fissure",v:"Lateral position; treat underlying cause; avoid sphincterotomy if sphincter already compromised (IBD, HIV)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["High-fiber diet; adequate hydration; stool softeners","Sitz baths: warm water × 10–20 min after defecation","Topical anesthetic (5% lidocaine) before defecation"],
    medical:["GTN 0.2–0.4% ointment BD: reduces internal sphincter pressure; headache in 20–40%; 50% heal acute fissures","Diltiazem 2% cream BD: equivalent efficacy to GTN; fewer headaches — preferred if GTN intolerance","Nifedipine cream: calcium channel blocker; alternative","Botulinum toxin injection: 20–30 units into internal sphincter (each side); 70–80% heal; risk of temporary incontinence 10–15%"],
    surgical:[
      {name:"Lateral internal sphincterotomy (LIS)",when:"Failed medical therapy; chronic fissure",notes:"Open or closed technique; divide lower 1/3 of internal sphincter laterally (not posteriorly — posterior sphincterotomy causes keyhole deformity); 90–95% cure; continence risk 5–10%"},
      {name:"Fissurectomy ± advancement flap",when:"Chronic fissure; compromised sphincter (Crohn's, previous surgery, obstetric injury); avoid sphincterotomy",notes:"Excise fissure; V-Y or rotational advancement flap to fill defect; avoids any sphincter division"}
    ]
  },
  technique:{
    title:"Lateral Internal Sphincterotomy (Closed Technique)",
    prep:["Left lateral or lithotomy; LA with adrenaline; or GA","Confirm fissure position and sphincter hypertonia on manometry/clinical exam"],
    steps:[
      {n:1,t:"Identify internal sphincter",d:"Index finger in anal canal; palpate intersphincteric groove laterally at 3 or 9 o'clock"},
      {n:2,t:"Biopsy fissure margin",d:"Send to histology — exclude Crohn's/malignancy"},
      {n:3,t:"Stab incision",d:"No. 11 blade through intersphincteric groove laterally"},
      {n:4,t:"Sphincterotomy",d:"Blade turned horizontal; divide lower third of internal sphincter from intersphincteric groove to dentate line; avoid external sphincter"},
      {n:5,t:"Confirm division",d:"Finger feels laxity at divided site; check hemostasis"},
      {n:6,t:"Dress and close",d:"Small incision; pressure dressing; GTN or diltiazem post-op; fiber supplements"}
    ],
    pearls:["Lateral (not posterior) sphincterotomy — posterior causes keyhole deformity and chronic soiling","Divide only lower 1/3 of internal sphincter — more causes incontinence","Open technique (better visualization) vs closed (less scarring) — equivalent outcomes","Keyhole deformity: failure to close properly due to posterior sphincterotomy — avoid entirely"]
  },
  guidelines:[{src:"ASCRS Practice Parameters for Anal Fissure 2017"},{src:"ACPGBI Position Statement: Anal Fissure 2021"},{src:"ESCP Anal Fissure Guidelines 2020"}],
  pearls:["GTN 0.2%: first-line medical; 50% heal acute fissures; limit dose for headache; apply with gloved finger to prevent systemic absorption","Diltiazem 2%: equivalent to GTN without headache — preferred if GTN side effects","Botulinum toxin: 70–80% healing; temporary incontinence risk 10–15% at 3 months — usually reversible","LIS: 95% cure but permanent incontinence risk — counsel carefully; avoid in compromised sphincter"],
  mistakes:["Posterior sphincterotomy — keyhole deformity; always lateral","Performing LIS in Crohn's or obstetric injury — incontinence risk too high; use advancement flap","Over-dividing internal sphincter — direct cause of fecal incontinence","GTN applied without gloves — headache from systemic absorption"]
},
{
  id:"anal-fistula", dept:"colorectal", name:"Anal Fistula", latin:"Fistula ani", organ:"Anus",
  severity:"low", tags:["anus","fistula","Parks","LIFT","seton","flap","Crohn","cryptoglandular"],
  hero:"Abnormal communication between the anal canal (usually at the dentate line) and the perianal skin, arising from cryptoglandular infection in 90% of cases.",
  keypoints:[
    "Parks classification: intersphincteric (45%), transsphincteric (30%), suprasphincteric (20%), extrasphincteric (5%)",
    "Cryptoglandular infection: abscess at anal gland → track through sphincters → fistula",
    "MRI pelvis is gold standard for complex fistula: delineates sphincter involvement, horseshoe extensions, secondary tracts",
    "Treatment guided by sphincter involvement: low fistula → fistulotomy safe; high (>30% external sphincter) → sphincter-preserving techniques",
    "LIFT (ligation of intersphincteric fistula tract): 70–80% success; no sphincter division; suitable for transsphincteric fistulas"
  ],
  differentials:["Crohn's perianal fistula (multiple, complex, indurated edges, rectal Crohn's)","Hidradenitis suppurativa (skin glands, multiple superficial tracts, no dentate line connection)","Pilonidal sinus (midline, hair pits)","Presacral tumor (rare)","Bartholin's gland abscess (women)"],
  mnemonics:[{name:"Parks Classification",text:"Intersphincteric (between internal + external, 45%); Transsphincteric (through external sphincter, 30%); Suprasphincteric (above puborectalis, 20%); Extrasphincteric (outside both sphincters, 5%)"}],
  overview:{
    definition:"Abnormal granulation-tissue-lined tract connecting the internal opening (usually at dentate line) to the external opening on perianal skin.",
    epidemiology:"Incidence 9/100 000/year; M:F = 2:1; peak age 30–40 years. 90% cryptoglandular; 10% secondary (Crohn's, TB, HIV, trauma, radiation, cancer).",
    pathophysiology:"Infection of anal gland (at dentate line, 4–8 glands at 3, 6, 9, 12 o'clock) → abscess → track along plane of least resistance through sphincters → fistula formation. Goodsall's rule: posterior external openings track to posterior midline internal opening; anterior openings track straight to nearest dentate line crypt.",
    classification:[
      {label:"Intersphincteric",note:"Traverses internal sphincter only; low; fistulotomy safe in most"},
      {label:"Transsphincteric",note:"Traverses both sphincters; high vs low based on extent of external sphincter traversed"},
      {label:"Suprasphincteric",note:"Above puborectalis; rare; complex; LIFT or flap"},
      {label:"Extrasphincteric",note:"Outside sphincters; very rare; secondary cause; full sphincter preservation required"}
    ]
  },
  diagnosis:{
    history:["Previous perianal abscess (50%)","Persistent perianal discharge (pus, blood)","Pain (if abscess re-forming)","Pruritus ani, recurrent infections","Crohn's, IBD, TB history (secondary fistula)"],
    examination:["External opening: pink, granulating tissue; may be multiple","Goodsall's rule: predict internal opening location","Digital rectal examination: palpable cord, indurated tract; internal opening at dentate line","Proctoscopy: internal opening as a papule or depression at dentate line"],
    investigations:[
      {name:"MRI pelvis (endoanal or external coil)",role:"Gold standard for complex fistulas: delineates sphincter involvement, horseshoe extensions, secondary tracts, relationship to puborectalis; Spencer and Parks plane grading"},
      {name:"Endoanal ultrasound (EAUS)",role:"Dynamic assessment; 3D EAUS with hydrogen peroxide enhancement; good for intersphincteric; limited for high fistulas"},
      {name:"EUA (examination under anesthesia)",role:"Allows Lockhart-Mummery probe to identify internal opening; treat at same sitting"},
      {name:"Fistulography",role:"Rarely used; replaced by MRI"},
      {name:"Colonoscopy",role:"If Crohn's suspected; rectal Crohn's changes management significantly"}
    ]
  },
  criteria:{
    title:"Treatment Selection by Parks Type",
    items:[
      {k:"Intersphincteric low",v:"Fistulotomy: lay open entire tract; excellent healing; continence preserved"},
      {k:"Low transsphincteric (<30% EAS)",v:"Fistulotomy: lay open; minor incontinence risk; acceptable"},
      {k:"High transsphincteric (>30% EAS)",v:"Seton (draining) + staged approach; LIFT; advancement flap; VAAFT; avoid fistulotomy"},
      {k:"Suprasphincteric / extrasphincteric",v:"Sphincter preservation mandatory; seton long-term; flap; LIFT; fibrin glue; plug"},
      {k:"Crohn's fistula",v:"Medical (infliximab + seton); avoid radical surgery in active luminal disease"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Sitz baths; hygiene","Seton suture (loose/draining): controls sepsis; allows fibrosis; staged approach"],
    medical:["Crohn's: infliximab ± seton (combined approach — 70% closure)","Antibiotics for acute sepsis: co-amoxiclav or metronidazole","Anal fistula plug / fibrin glue: 40–50% success; no sphincter at risk; repeatable"],
    surgical:[
      {name:"Fistulotomy (lay-open)",when:"Intersphincteric; low transsphincteric (<30% external sphincter); superficial",notes:"Most effective; 90–95% cure; continence risk minimal for low fistulas; marsupialise edges; send for histology"},
      {name:"LIFT (Ligation of Intersphincteric Fistula Tract)",when:"Transsphincteric (high); avoids sphincter division; 70–80% success",notes:"Identify intersphincteric plane; ligate and divide fistula tract at internal sphincter level; curettage; no sphincter at risk"},
      {name:"Advancement mucosal flap",when:"High transsphincteric; suprasphincteric; failed previous procedures",notes:"Raise full-thickness rectal mucosal flap; advance over closed internal opening; suture; 60–80% success; Crohn's: high failure"},
      {name:"VAAFT (video-assisted anal fistula treatment)",when:"Complex fistula; failed previous procedures; operator-dependent",notes:"Fistuloscope illuminates tract from external opening; endoscopic ablation of tract; internal opening closed; 70% short-term success"},
      {name:"Cutting seton",when:"Staged tightening over months; rarely used now",notes:"Risk of incontinence; replaced by staged seton + LIFT/flap"},
      {name:"Draining seton",when:"Complex fistula; Crohn's; temporizing; allows anti-TNF therapy",notes:"Loose non-cutting seton maintains drainage; reduces sepsis; definitive repair planned later"}
    ]
  },
  technique:{
    title:"LIFT Procedure",
    prep:["MRI confirms transsphincteric tract","EUA confirms internal opening and external opening","Identify intersphincteric groove"],
    steps:[
      {n:1,t:"Intersphincteric incision",d:"Curvilinear incision over intersphincteric groove; enter intersphincteric plane"},
      {n:2,t:"Tract identification",d:"Pass fistula probe from external opening; identify tract in intersphincteric space"},
      {n:3,t:"Ligation of internal component",d:"Suture-ligate internal sphincter side of tract (Vicryl 2-0)"},
      {n:4,t:"Division and curettage",d:"Divide tract; curette external tract to promote fibrosis"},
      {n:5,t:"Ligation of external component",d:"Suture-ligate external sphincter side; ensure no sphincter divided"},
      {n:6,t:"Wound closure",d:"Close intersphincteric wound; pack external opening; drain for granulation"}
    ],
    pearls:["MRI is mandatory for complex fistulas — underestimating sphincter involvement is the commonest error","No single procedure is universally superior for high fistulas — staged approach gives best continence preservation","Goodsall's rule: anterior opening → radial tract; posterior opening → curved to posterior midline","Crohn's fistula: do NOT do fistulotomy; seton + infliximab is the standard approach"]
  },
  guidelines:[{src:"ASCRS Practice Parameters: Anal Abscess and Fistula 2022"},{src:"ACPGBI Position Statement on Anal Fistula 2021"},{src:"ESCP Perianal Crohn's Disease Consensus 2022"}],
  pearls:["LIFT: no sphincter division, 70–80% success for transsphincteric fistulas — growing first-line recommendation","Advancement flap: most durable sphincter-preserving option for high fistulas but requires skill","Crohn's fistula: anti-TNF + seton; radical surgery contraindicated in active luminal disease","MRI before any re-do fistula surgery — residual tracts/extensions not visible clinically"],
  mistakes:["Fistulotomy for high transsphincteric fistula — incontinence (major or minor) in 30–50%","Operating on Crohn's fistula without treating luminal disease — high failure and complication rate","Not identifying internal opening — fistulotomy of wrong tract → persistent fistula","Cutting seton applied immediately — staged approach always preferable in any high fistula"]
},
{
  id:"pilonidal-sinus", dept:"colorectal", name:"Pilonidal Sinus", latin:"Sinus pilonidalis", organ:"Sacrococcyx",
  severity:"low", tags:["pilonidal","natal cleft","abscess","wide local excision","Karydakis","Limberg"],
  hero:"Chronic cutaneous condition of the natal cleft involving hair-containing sinuses and abscess formation; affects young adults; high recurrence after simple excision.",
  keypoints:[
    "Acquired, not congenital: hair penetrates skin via suction effect in natal cleft; more common in hirsute, obese young men",
    "Acute presentation: abscess (incise and drain); chronic: sinus with recurrent discharge",
    "Wide local excision with open wound healing: high recurrence (15–20%) vs off-midline closure procedures (Karydakis/Limberg: <5%)",
    "Karydakis flap and Limberg rhomboid flap: off-midline techniques — gold standard for chronic disease",
    "Fibrin glue + hair removal: emerging evidence for minimally invasive management of simple chronic sinuses"
  ],
  differentials:["Perianal fistula/Crohn's (dental/enteric tract; internal opening; Crohn's)","Hidradenitis suppurativa (axillae/groins, multiple lesions, skin glands)","Osteomyelitis of sacrum (bone destruction on CT)","Dermoid cyst (midline, present from birth)","Anal fissure (pain on defecation)"],
  mnemonics:[{name:"Off-Midline = Low Recurrence",text:"Midline excision/open = 15–20% recurrence; Off-midline (Karydakis or Limberg flap) = 1–5% recurrence. Always reconstruct off-midline for chronic disease"}],
  overview:{
    definition:"Acquired condition of the sacrococcygeal area characterized by natal cleft sinuses containing hair, prone to infection and abscess formation.",
    epidemiology:"Incidence 26/100 000/year; M:F = 3:1; peak age 15–30 years; rare after age 40. Risk factors: hirsutism, obesity, deep natal cleft, sedentary occupation ('Jeep disease').",
    pathophysiology:"Loose hairs in natal cleft are driven into skin pores by suction created by buttock movement → foreign body reaction → sinus formation → secondary infection → abscess. Hair found inside sinus confirms acquired nature.",
    classification:[
      {label:"Acute abscess",note:"Tender, fluctuant swelling in natal cleft; no chronic sinus"},
      {label:"Chronic sinus",note:"Pits in natal cleft; intermittent discharge; off-midline openings; recurrence after drainage"},
      {label:"Complex/recurrent",note:"Multiple tracts; previous failed surgery; consider flap repair"}
    ]
  },
  diagnosis:{
    history:["Pain and swelling in natal cleft (acute)","Recurrent discharge from midline or off-midline pits (chronic)","History of previous incision and drainage","Young, overweight, hirsute male","Occupation requiring prolonged sitting"],
    examination:["Natal cleft: midline pits, protruding hairs, granulation tissue","Fluctuant tender swelling (abscess)","Off-midline opening (chronic — lateral secondary opening)","No internal rectal opening (distinguishes from fistula-in-ano)"],
    investigations:[
      {name:"Clinical diagnosis",role:"Usually clinical; imaging rarely needed"},
      {name:"MRI pelvis",role:"Complex or recurrent disease; delineate extent of tracts"},
      {name:"Probe/proctoscopy",role:"Confirm no connection to anal canal (fistula exclusion)"}
    ]
  },
  criteria:{
    title:"Treatment by Stage",
    items:[
      {k:"Acute abscess",v:"Incision and drainage (off-midline) under LA; no attempt to excise tracts acutely; hygiene; hair removal"},
      {k:"Simple chronic sinus",v:"Fibrin glue + regular hair removal (laser/depilatory); pit-picking; minimally invasive"},
      {k:"Chronic symptomatic sinus",v:"Off-midline flap repair (Karydakis or Limberg) — gold standard"},
      {k:"Recurrent disease",v:"Off-midline reconstruction; excision of all tracts + flap"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Meticulous hair removal: shaving or laser depilation reduces recurrence and aids healing","Hygiene: daily cleaning; avoid sweat accumulation","Fibrin glue injection into tract with curettage: 60–80% success for simple sinuses"],
    medical:["Antibiotics for cellulitis; not for established abscess (drain)"],
    surgical:[
      {name:"Incision and drainage",when:"Acute abscess only; off-midline incision; no primary excision",notes:"Allows healing; definitive excision planned electively after acute settles; do not close primarily"},
      {name:"Pit-picking (minimal excision)",when:"Simple chronic disease with few pits; Lord-Millar technique",notes:"Excise pits under LA; curettage of tract; no flap; rapid return to work; 80% success in selected patients"},
      {name:"Karydakis flap",when:"Chronic pilonidal disease; recurrent disease; gold standard",notes:"Eccentric elliptical excision of disease; bevelled skin edge on one side; advancement flap to close off-midline; <5% recurrence"},
      {name:"Limberg rhomboid flap",when:"Wide/complex disease; recurrent disease after Karydakis failure",notes:"Rhomboid-shaped excision; transposition flap from lateral gluteal tissue; off-midline scar; excellent results; <3% recurrence"},
      {name:"Wide local excision + open healing",when:"Where flap closure not feasible; complex wound bed",notes:"High recurrence (15–20%); slow healing (6–10 weeks); increased nursing burden; use only when flap not possible"}
    ]
  },
  technique:{
    title:"Karydakis Flap for Chronic Pilonidal Sinus",
    prep:["Prone jack-knife position","Mark natal cleft and disease extent","Shave area; prep and drape","GA or spinal"],
    steps:[
      {n:1,t:"Eccentric elliptical excision",d:"Ellipse placed eccentric to midline, encompassing all pits and sinuses; extend to fascia; bevelled lateral edge"},
      {n:2,t:"Flap mobilization",d:"Undermine medial edge to achieve sufficient advancement; bevelled design allows flap to sit off-midline"},
      {n:3,t:"Wound closure",d:"Vicryl sutures to obliterate dead space; skin closed off-midline — key to low recurrence"},
      {n:4,t:"Drain",d:"Suction drain × 48–72 h; reduces seroma formation"},
      {n:5,t:"Post-op care",d:"Bed rest 24–48 h; wound check at 1 week; hair removal continued post-op"}
    ],
    pearls:["Off-midline closure is the single most important factor in reducing recurrence — midline suture line in deep natal cleft is prone to breakdown","Avoid primary closure of acute abscess — high wound dehiscence","Post-op hair removal reduces recurrence from 15% to <5%","Karydakis vs Limberg: equivalent low recurrence; choose based on disease extent and surgeon experience"]
  },
  guidelines:[{src:"ASCRS Practice Parameters: Pilonidal Disease 2019"},{src:"ACPGBI Position Statement: Pilonidal Sinus 2020"},{src:"ESCP Pilonidal Disease Guidelines 2019"}],
  pearls:["Karydakis or Limberg flap: <5% recurrence vs 15–20% with midline closure or open healing","Hair removal (laser or regular shaving): essential adjunct — reduces recurrence significantly","Pit-picking: excellent for selected simple cases — rapid recovery, 80% success","Acute abscess: drain only; plan definitive flap repair electively"],
  mistakes:["Primary closure of acute abscess in natal cleft — high wound breakdown rate","Midline closure of chronic pilonidal disease — major risk factor for recurrence","Wide local excision without off-midline reconstruction — 15–20% recurrence vs <5% with flap","Neglecting post-operative hair removal — recurrence rate returns to untreated levels"]
},
{
  id:"colorectal-polyp", dept:"colorectal", name:"Colorectal Polyp", latin:"Polypus coli et recti", organ:"Colon",
  severity:"moderate", tags:["polyp","adenoma","Paris","Kudo","JNET","polypectomy","EMR","ESD","screening"],
  hero:"A mucosal protrusion into the bowel lumen. Most colorectal cancers arise from adenomatous polyps over 10–15 years, so endoscopic detection and complete removal is the cornerstone of cancer prevention.",
  keypoints:[
    "Adenoma–carcinoma sequence: most cancers arise from adenomas; complete polypectomy interrupts it",
    "Morphology matters: use the Paris classification — depressed (0–IIc) and excavated (0–III) lesions carry the highest risk of submucosal invasion",
    "Optical diagnosis (Kudo pit pattern, JNET/NICE on NBI) predicts histology and guides resect-vs-refer in real time",
    "Malignant polyp depth: Haggitt level (pedunculated) and Kikuchi Sm1/2/3 (sessile) stratify lymph-node risk",
    "Serrated pathway: sessile serrated lesions (right colon, flat, mucus cap) are easily missed and cause interval cancers"
  ],
  differentials:["Adenoma (tubular/tubulovillous/villous)","Sessile serrated lesion / hyperplastic polyp","Inflammatory / pseudopolyp","Hamartomatous polyp (juvenile, Peutz–Jeghers)","Submucosal lesion (lipoma, GIST, carcinoid)","Invasive adenocarcinoma"],
  overview:{
    definition:"A polyp is any circumscribed elevation of the mucosa above the surrounding surface. Neoplastic polyps (adenomas, sessile serrated lesions) carry malignant potential; non-neoplastic polyps (hyperplastic, inflammatory, hamartomatous) generally do not, with exceptions.",
    epidemiology:"Adenomas are found in 25–30% of average-risk adults over 50 at screening colonoscopy. Prevalence rises with age. ~5% of adenomas progress to cancer if left in situ. Advanced adenoma = ≥10 mm, villous component, or high-grade dysplasia.",
    pathophysiology:"Conventional pathway (APC → KRAS → TP53) produces tubular→villous adenomas. Serrated pathway (BRAF, CpG-island methylation, MLH1 silencing) produces sessile serrated lesions and ~15–20% of cancers. Villous histology and larger size carry higher dysplasia/malignancy risk. Invasion beyond the muscularis mucosae into the submucosa defines a malignant polyp with metastatic potential.",
    classification:[
      {label:"Paris 0–Ip / 0–Is",note:"Protruded — pedunculated (stalked) or sessile (broad-based)"},
      {label:"Paris 0–IIa / IIb / IIc",note:"Superficial — slightly elevated (<2.5 mm) / flat / slightly depressed"},
      {label:"Paris 0–III",note:"Excavated / ulcerated — highest submucosal-invasion risk"},
      {label:"Kudo pit pattern I–V",note:"I–II non-neoplastic; III–IV adenomatous; V invasive cancer"},
      {label:"JNET / NICE (NBI)",note:"Vessel + surface pattern; Type 2B → en-bloc ESD, Type 3 → surgery"},
      {label:"Haggitt 0–4",note:"Depth of invasion in a pedunculated malignant polyp (level 4 = high risk)"},
      {label:"Kikuchi Sm1/2/3",note:"Submucosal thirds for sessile lesions; the 1000 µm depth is a separate quantitative cut-off"}
    ]
  },
  criteria:{
    title:"Features favouring endoscopic vs surgical management",
    items:[
      {k:"Favourable (endoscopic)",v:"Well/moderately differentiated · no lymphovascular invasion · Haggitt 1–3 or Sm1 · negative margin (>1 mm) · Kudo III–IV / JNET 2A"},
      {k:"Unfavourable (consider surgery)",v:"Poor differentiation · lymphovascular invasion · tumour budding · Haggitt 4 or Sm2–3 · positive/≤1 mm margin · Kudo V / JNET 2B–3"},
      {k:"Advanced adenoma",v:"≥10 mm, villous component, or high-grade dysplasia — shortens surveillance interval"}
    ]
  },
  technique:{
    title:"Polypectomy & resection techniques",
    prep:["Adequate bowel prep (Boston Bowel Prep Scale ≥6, each segment ≥2)","High-definition scope ± chromoendoscopy / NBI for optical diagnosis","Assess morphology (Paris), surface (Kudo) and vessels (JNET) BEFORE resection","Tattoo the site (except caecum/rectum) for lesions that may need surgery or surveillance"],
    steps:[
      {n:1,t:"Diminutive (≤5 mm)",d:"Cold snare polypectomy — lower delayed-bleeding risk than hot snare; avoid cold biopsy forceps for anything resectable by snare"},
      {n:2,t:"Small sessile (6–9 mm)",d:"Cold snare polypectomy with a rim of normal mucosa"},
      {n:3,t:"Large sessile / flat (≥10–20 mm)",d:"Endoscopic mucosal resection (EMR): submucosal lift then snare; piecemeal if needed"},
      {n:4,t:"≥20 mm / suspected superficial cancer",d:"En-bloc ESD or referral to an expert centre for accurate depth staging"},
      {n:5,t:"Pedunculated",d:"Hot snare across the stalk; consider prophylactic clip/loop for thick stalks (>10 mm head)"},
      {n:6,t:"Retrieve & orient",d:"Recover every specimen; pin/orient malignant polyps so the pathologist can measure the deep margin"}
    ],
    pearls:["Lift sign: a non-lifting lesion suggests deep submucosal invasion or fibrosis — do not attempt piecemeal snare","Mark piecemeal EMR sites for early (3–6 month) site check — residual/recurrent tissue is common","Cold snare has become the default for ≤9 mm lesions — safer bleeding profile"]
  },
  guidelines:[{src:"ESGE Colorectal Polypectomy & EMR Guideline 2017 (update 2024)"},{src:"US Multi-Society Task Force Post-Polypectomy Surveillance 2020"},{src:"ESGE Advanced Imaging (optical diagnosis) Guideline 2019"},{src:"NICE Colorectal Cancer NG151"}],
  pearls:["The right colon hides flat and serrated lesions — slow, careful withdrawal (≥6 min) and good prep are what actually prevent interval cancers","A malignant polyp completely removed with favourable features may need no further surgery — depth, margin, differentiation and lymphovascular invasion decide","Photo-document the lesion and its optical diagnosis before you resect it"],
  mistakes:["Piecemeal snaring a lesion that looked deeply invasive (non-lifting) — compromises staging and cure","Using cold biopsy forceps to 'remove' a polyp that should have been snared — leaves residual adenoma","Failing to tattoo a large right-sided lesion — impossible to relocate at surgery or follow-up","Ignoring a flat right-colon mucus cap (sessile serrated lesion) — a classic interval-cancer precursor"],
  related:[{id:"crc",note:"End of the adenoma–carcinoma sequence"},{id:"fap",note:"Hundreds–thousands of adenomas; near-100% cancer risk"},{id:"lynch",note:"Accelerated adenoma–carcinoma progression; MMR deficiency"}]
}
];
