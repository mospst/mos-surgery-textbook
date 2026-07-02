// tmp_colorectal3.js — Missing Colorectal diseases (7 diseases)
// IDs: perianal-abscess, cecal-volvulus, large-bowel-obstruction, anal-cancer,
//       intestinal-fistula, carcinoid-appendix, mucocele-appendix

const COLORECTAL3_DISEASES = [

{
  id: "perianal-abscess",
  dept: "colorectal",
  name: "Perianal Abscess & Fistula-in-Ano",
  latin: "Abscessus perianaalis et Fistula in ano",
  organ: "Anorectum",
  severity: "moderate",
  tags: ["colorectal","perianal","fistula","abscess","Parks"],
  hero: "Abscess: urgent incision and drainage; fistula: Parks classification guides management — lay-open for intersphincteric/low transsphincteric; seton for high transsphincteric/suprasphincteric.",
  keypoints: [
    "Cryptoglandular origin (90%): anal crypt → intersphincteric space → abscess tract",
    "Parks classification: intersphincteric (45%), transsphincteric (30%), suprasphincteric (20%), extrasphincteric (5%)",
    "Goodsall's rule: posterior external openings → curved tract to posterior midline; anterior openings → straight tract to nearest crypt",
    "High fistula (through significant external sphincter): seton drainage first to prevent fecal incontinence",
    "VAAFT/LIFT/fibrin glue/plug: sphincter-sparing options for complex fistula — avoid division of sphincter muscle",
    "Always exclude Crohn's in complex/atypical perianal fistula — colonoscopy mandatory"
  ],
  differentials: [
    "Pilonidal abscess (midline natal cleft)",
    "Hidradenitis suppurativa perianal",
    "Crohn's perianal disease",
    "Bartholin's gland abscess",
    "Infected sebaceous cyst",
    "Anal fistula from rectal carcinoma",
    "Actinomycosis"
  ],
  mnemonics: [
    { name: "Parks classification memory", text: "I-T-S-E: Intersphincteric → Trans-sphincteric → Suprasphincteric → Extrasphincteric — from most to least common, from safest to most complex" },
    { name: "Goodsall's rule", text: "Posterior holes go to the back, Anterior holes go straight ahead — 'Posterior Posterior, Anterior Anterior'" }
  ],
  overview: {
    definition: "Perianal abscess is an acute purulent collection in the perianal/ischiorectal space arising from infected anal glands (cryptoglandular theory). Fistula-in-ano is the chronic sequela: an abnormal communication between the anoderm (external opening) and anal canal/rectum (internal opening). ~30–50% of abscesses develop a subsequent fistula.",
    epidemiology: "Common: incidence ~2/10,000/year. M:F = 4:1. Peak age 30–50 years. Risk: diabetes, immunosuppression, Crohn's disease, previous anorectal surgery, constipation, diarrhea. Crohn's-associated fistulae in 30% of Crohn's patients.",
    pathophysiology: "Blocked anal glands at dentate line → bacterial proliferation → abscess formation in intersphincteric space → tracks to perianal skin (perianal abscess), ischiorectal fossa (ischiorectal abscess), supralevator space, or intersphincteric only. Unresolved abscess → epithelialisation of tract → fistula. Tract position relative to external sphincter defines Parks classification and continence risk.",
    classification: [
      "Intersphincteric fistula (45%) — tracks between internal and external sphincters to perianal skin; safest to lay open",
      "Low transsphincteric (30%) — traverses lower third of external sphincter; lay-open usually safe",
      "High transsphincteric — traverses upper third of external sphincter; seton required",
      "Suprasphincteric (20%) — passes above puborectalis; high risk; seton/LIFT",
      "Extrasphincteric (5%) — external sphincter completely bypassed; usually iatrogenic or Crohn's"
    ]
  },
  diagnosis: {
    history: [
      "Severe perianal pain, swelling, throbbing — abscess",
      "Intermittent perianal discharge (feculent or purulent), pain on defecation — fistula",
      "Previous perianal abscess drainage (fistula develops in ~50%)",
      "Known Crohn's disease",
      "Fever, systemic sepsis (particularly in diabetics/immunosuppressed — Fournier's gangrene risk)",
      "Pelvic/abdominal pain and high fever — supralevator abscess"
    ],
    examination: [
      "Fluctuant, tender, erythematous perianal swelling (abscess)",
      "External fistula opening(s) on perianal skin — look carefully at natal cleft and perianal region",
      "Probe tract gently with blunt probe under GA to identify internal opening",
      "DRE: identify internal opening, assess sphincter tone (baseline for continence assessment), palpate for induration",
      "Goodsall's rule application: external opening position predicts internal opening location",
      "Proctoscopy: identify internal opening at dentate line; purulent discharge on probing",
      "Assess for Crohn's features: skin tags, multiple external openings, complex branching tracts"
    ],
    investigations: [
      { name: "Clinical diagnosis (abscess)", role: "Examination usually sufficient; do not delay incision and drainage for imaging if obvious" },
      { name: "Endoanal ultrasound (EAUS)", role: "Complex fistula: delineates tract, identifies secondary extensions, assesses internal/external sphincter integrity — baseline continence anatomy" },
      { name: "MRI pelvis (3 Tesla)", role: "Gold standard for complex fistula mapping: suprasphincteric, horseshoe tracts, Crohn's — 85–90% concordance with surgical findings" },
      { name: "Examination under anesthetic (EUA)", role: "Definitive diagnostic and therapeutic: gentle probing, hydrogen peroxide injection to locate internal opening, direct lay-open/seton placement" },
      { name: "Colonoscopy/ileoscopy", role: "All complex/atypical/recurrent fistulae — exclude Crohn's disease" },
      { name: "Blood cultures", role: "Systemically unwell patient — septic workup" }
    ]
  },
  criteria: {
    title: "Parks Classification and Management",
    items: [
      { k: "Intersphincteric", v: "Internal sphincter only — lay open (fistulotomy); continence risk low" },
      { k: "Low transsphincteric", v: "Lower 1/3 external sphincter — lay open safe if <30% EAS involved" },
      { k: "High transsphincteric", v: "Upper 2/3 EAS — seton drainage; then LIFT/plug/advancement flap" },
      { k: "Suprasphincteric", v: "Above puborectalis — seton; highly specialised management" },
      { k: "Extrasphincteric", v: "Entire external sphincter bypassed — treat causative pathology (Crohn's, iatrogenic)" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Antibiotics do NOT treat perianal abscess — drainage is mandatory; antibiotics only adjunct for cellulitis, sepsis, immunosuppressed, or diabetics",
      "Stool softeners and high-fiber diet post-operatively",
      "Sitz baths for wound care and comfort"
    ],
    medical: [
      "Crohn's-associated fistula: infliximab (ACCENT II trial) or adalimumab — combined biological + surgical management with seton; biological achieves fistula healing in 50%",
      "Metronidazole 400 mg TDS: adjuvant for Crohn's fistulae and acute perianal sepsis",
      "Ciprofloxacin + metronidazole: diabetic or immunosuppressed patient with abscess ± perianal cellulitis"
    ],
    surgical: [
      { name: "Incision and drainage (I&D)", when: "Perianal/ischiorectal abscess — urgent", notes: "Cruciate incision close to anal verge (shortens subsequent fistula tract). Deroofing and cavity washout. No primary fistulotomy at time of drainage (exception: clinically obvious simple intersphincteric fistula identified by experienced surgeon under GA)" },
      { name: "Lay-open fistulotomy", when: "Intersphincteric and low transsphincteric fistula involving <30% of external sphincter", notes: "Under GA/spinal. Probe from external opening through internal opening. Lay open tract. Marsupialization edges. Heal by secondary intention over 4–8 weeks. Recurrence rate <5%." },
      { name: "Seton insertion", when: "High transsphincteric or suprasphincteric fistula", notes: "Insert nylon/silastic seton through tract. Loose seton: allows drainage, induces fibrosis, does not divide sphincter — remove at 2nd stage after definitive sphincter-sparing procedure. Cutting seton: sequential tightening — now largely abandoned (continence risk)" },
      { name: "LIFT (ligation of intersphincteric fistula tract)", when: "Transsphincteric fistula after seton drainage", notes: "Identify tract in intersphincteric space; ligate and divide at internal sphincter; core out tract toward external opening. Success rate 60–80%. Sphincter-preserving. No defect in external sphincter." },
      { name: "Advancement flap (endorectal or anodermal)", when: "Complex transsphincteric fistula — close internal opening", notes: "Mobilize rectal mucosa/anodermal flap; oversew internal opening; advance flap to cover. Success rate 60–75%. Requires no active sepsis. Can repeat if first fails." },
      { name: "VAAFT (video-assisted anal fistula treatment)", when: "Complex fistula with multiple secondary tracts", notes: "Fistuloscope: identifies, inspects, and coagulates secondary tracts under direct vision; internal opening closed with stapler or suture. Success 70–80% for selected cases." }
    ]
  },
  technique: {
    title: "Examination Under Anesthetic (EUA) for Fistula-in-Ano",
    prep: [
      "Patient in lithotomy position",
      "Proctoscope, Hill-Ferguson retractor available",
      "Probes: Lockhart-Mummery fistula probe (malleable), Anel lacrimal probe",
      "Hydrogen peroxide 3% solution in syringe for tract identification"
    ],
    steps: [
      { n: 1, t: "Initial assessment", d: "Gentle DRE and examination. Identify all external openings. Apply Goodsall's rule to predict internal opening location." },
      { n: 2, t: "Proctoscopy", d: "Insert proctoscope to dentate line level. Look for internal opening at dentate (10 o'clock position if posterior external opening by Goodsall). Purulent discharge from crypt on probe pressure." },
      { n: 3, t: "Probe fistula", d: "Gently pass malleable fistula probe from external opening — follow without force. Confirm internal opening with probe tip visible in anal canal. Never force — false passages worsen the fistula." },
      { n: 4, t: "H2O2 injection", d: "If probe cannot negotiate: inject H2O2 from external opening with 21G needle — bubbles emerge from internal opening. Identifies internal opening reliably." },
      { n: 5, t: "Assess sphincter involvement", d: "With probe in situ, palpate probe through perianal skin — assess depth below dentate line and relationship to external sphincter. Decide: lay-open vs seton." },
      { n: 6, t: "Lay-open or seton", d: "Simple low fistula: divide tissue over probe from external to internal opening. Marsupialization edges. High fistula: pass seton through tract, tie loosely. Document position accurately." }
    ],
    pearls: [
      "Never force a probe — create false passages that make the situation worse; use H2O2 if the probe will not pass",
      "Lay-open is the safest treatment for intersphincteric fistula — recurrence rate <5%, virtually no incontinence risk",
      "Anterior fistula in women: extra caution — anterior sphincter shorter and weaker; fistulotomy can cause incontinence; prefer sphincter-sparing technique",
      "Crohn's fistula: seton for drainage only, do not attempt definitive repair until Crohn's medically controlled",
      "Horseshoe fistula: circumferential posterior/anterior extension through ischiorectal fossae — counter-incisions required; complex; refer to colorectal specialist"
    ]
  },
  guidelines: [
    { src: "ACPGBI/ASCRS Position Statement: Fistula-in-Ano 2018" },
    { src: "ASCRS Clinical Practice Guidelines: Diseases of the anorectum 2022" },
    { src: "ECCO Guidelines: Crohn's perianal disease 2021" },
    { src: "ACCENT II: Sands et al. NEJM 2004 — infliximab for Crohn's fistulae" }
  ],
  pearls: [
    "30–50% of perianal abscesses develop a subsequent fistula — warn patients at drainage and arrange follow-up",
    "EUA is the gold standard for fistula evaluation and treatment — clinical assessment and MRI are complementary, not replacements",
    "Anterior fistula in women: highest incontinence risk with fistulotomy — sphincter-sparing technique required",
    "Complex/recurrent/multiple fistulae in a young patient → always exclude Crohn's disease"
  ],
  mistakes: [
    "Prescribing antibiotics alone for acute perianal abscess — drainage is the treatment; antibiotics are only adjunct",
    "Lay-open of high transsphincteric fistula without seton — continence-threatening sphincter division",
    "Forcing the fistula probe — false passages and bleeding; use H2O2 or MRI if probe fails",
    "Not examining for Crohn's features — missing Crohn's diagnosis leads to inappropriate and failed fistula surgery"
  ]
},

{
  id: "caecal-volvulus",
  dept: "colorectal",
  name: "Cecal Volvulus",
  latin: "Volvulus caeci",
  organ: "Cecum/Right colon",
  severity: "critical",
  tags: ["colorectal","obstruction","volvulus","emergency"],
  hero: "Emergency right hemicolectomy is definitive treatment; endoscopic decompression high failure rate (40%) and recurrence; viable cecum → right hemicolectomy; ischemic → resection without anastomosis.",
  keypoints: [
    "Cecal volvulus accounts for 40% of all colonic volvulus; sigmoid volvulus is 60%",
    "Occurs due to failure of cecal fixation (mobile cecum in 11% of population)",
    "Coffee bean sign on AXR: displaced to LUQ; CT confirms (whirl sign of mesentery)",
    "Unlike sigmoid volvulus, endoscopic decompression rarely successful (high failure/recurrence)",
    "Treatment: emergency right hemicolectomy — resection ± ileocolic anastomosis (if viable bowel, no peritonitis)",
    "Cecostomy/detorsion alone: unacceptably high recurrence rate — not recommended"
  ],
  differentials: [
    "Sigmoid volvulus (sigmoid in pelvis; AXR: bent inner tube sign pointing LUQ)",
    "Small bowel obstruction",
    "Ogilvie's syndrome (pseudo-obstruction — no closed loop, cecum mobile)",
    "Right colon carcinoma causing obstruction",
    "Intussusception (children: lead point)",
    "Acute appendicitis"
  ],
  mnemonics: [
    { name: "Cecal vs Sigmoid Volvulus X-ray", text: "Cecal = Coffee bean in Left Upper (flips up and across); Sigmoid = Bent inner tube in Right Upper — 'Cecum goes Left, Sigmoid stays Right'" },
    { name: "Cecal volvulus treatment", text: "Right Hemi Always — endoscopy fails 40%, recurs 75%; only right hemicolectomy reliably cures" }
  ],
  overview: {
    definition: "Axial twisting of the cecum and terminal ileum around their mesenteric axis, causing closed-loop obstruction of the right colon. Accounts for ~40% of colonic volvulus. Associated with a congenitally mobile cecum (failure of right colonic peritoneal fixation).",
    epidemiology: "11% of population have mobile cecum; ~3/100,000/year develop volvulus. Younger than sigmoid volvulus (30–60 years). Risk: previous abdominal surgery (adhesions alter rotation mechanics), pregnancy, high-fiber diet, distal obstruction (tumor), colonoscopy.",
    pathophysiology: "Mobile cecum rotates clockwise around ileocolic vascular pedicle → closed loop obstruction → cecal distension → venous congestion → mucosal ischemia → full-thickness necrosis and perforation (within 24–48 hours if untreated). Gas cannot escape proximally or distally → rapid distension.",
    classification: [
      "Type I (axial rotation) — cecum twists on its long axis; most common; AXR: oblique displacement to LUQ",
      "Type II (bascule fold) — cecum folds anteriorly without complete rotation; comma-shaped cecum on AXR",
      "Cecal volvulus with normal fixation — rare; usually post-operative"
    ]
  },
  diagnosis: {
    history: [
      "Acute onset colicky central/right lower abdominal pain",
      "Absolute constipation (no flatus or stool) — closed loop obstruction",
      "Vomiting: bilious early, feculent if prolonged obstruction",
      "Rapid progression — may perforate within 24–48 hours",
      "Previous abdominal surgery",
      "Pregnancy (third trimester risk)"
    ],
    examination: [
      "Abdominal distension — often asymmetric, left-sided bulge (displaced cecum)",
      "Tympanitic percussion, high-pitched bowel sounds early; silent abdomen = impending perforation",
      "Peritonism (guarding, rigidity) suggests perforation or ischemia",
      "Massive cecal distension palpable LUQ — the 'wandering cecum' sign",
      "Signs of shock: tachycardia, hypotension, fever (ischemia/perforation)"
    ],
    investigations: [
      { name: "AXR", role: "Dilated gas-filled loop displaced to LUQ/left abdomen; coffee bean appearance; absence of haustral folds; paucity of gas in right lower quadrant (cecum displaced)" },
      { name: "CT abdomen/pelvis with IV contrast", role: "Confirmatory: whirl sign of mesoappendix/ileocolic mesentery; cecal displacement; assess bowel wall enhancement (ischemia = absent enhancement); exclude alternative diagnosis" },
      { name: "CBC, electrolytes/BUN-Cr, lactate, CRP", role: "Leukocytosis and raised lactate suggest ischemia; guides resuscitation" },
      { name: "Colonoscopy/flexible sigmoidoscopy", role: "Limited role for cecal volvulus (unlike sigmoid) — rarely decompresses successfully; high failure rate" }
    ]
  },
  criteria: {
    title: "Cecal Volvulus — Management Decision Points",
    items: [
      { k: "Viable cecum, no peritonitis", v: "Emergency right hemicolectomy with primary ileocolic anastomosis (preferred)" },
      { k: "Ischemic cecum, no peritonitis", v: "Right hemicolectomy, primary anastomosis if patient stable and not shocked" },
      { k: "Perforation/peritonitis/hemodynamically unstable", v: "Right hemicolectomy, end ileostomy, Hartmann's-type procedure — no anastomosis" },
      { k: "Elderly frail patient, first episode, viable cecum", v: "Detorsion + cecopexy acceptable but 10–15% recurrence rate" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Nasogastric tube decompression: initial resuscitation only — not definitive treatment",
      "IV fluid resuscitation and correction of electrolytes",
      "Endoscopic decompression: rarely successful for cecal volvulus (unlike sigmoid volvulus); failure rate 40–60%; use only as bridging measure if patient unfit for urgent surgery"
    ],
    medical: [
      "Broad-spectrum antibiotics (co-amoxiclav or cefuroxime + metronidazole): before surgery for contamination risk, established ischemia",
      "IV resuscitation: crystalloid; correct hypokalemia before anastomosis"
    ],
    surgical: [
      { name: "Emergency right hemicolectomy", when: "All cases of cecal volvulus — primary treatment", notes: "Right hemicolectomy with ileocolic anastomosis if bowel viable and patient stable. Divides ileocolic pedicle, right colic artery, right branch of middle colic. Anastomosis: stapled side-to-side functional end-to-end preferred. If ischemia/peritonitis: end ileostomy and mucous fistula (defunctioned right colon stump)." },
      { name: "Detorsion + cecopexy", when: "Elderly frail with first episode — unfit for formal right hemicolectomy", notes: "Detorse cecum, fix to lateral abdominal wall with multiple absorbable sutures or Dacron strip. Recurrence rate 10–15%. Not recommended as routine treatment due to recurrence risk." },
      { name: "Laparoscopic approach", when: "Viable cecum, no severe distension, experienced laparoscopic surgeon", notes: "Laparoscopic right hemicolectomy feasible for cecal volvulus in centers with expertise; conversion rate higher than elective due to distension" }
    ]
  },
  technique: {
    title: "Emergency Right Hemicolectomy for Cecal Volvulus",
    prep: [
      "GA, NG tube decompression of stomach",
      "IV antibiotics at induction",
      "Urinary catheter, warming blanket",
      "Position: supine; able to be converted to steep Trendelenburg if needed"
    ],
    steps: [
      { n: 1, t: "Midline laparotomy", d: "Open abdomen. Confirm diagnosis. Assess cecal viability: pink = viable; purple/black = ischemia; green/gray = necrosis; crepitus = perforation." },
      { n: 2, t: "Detorse if distended", d: "Gently detorse cecum to reduce distension and improve exposure. Decompress via colotomy if massive distension prevents safe handling." },
      { n: 3, t: "Mobilize right colon", d: "Incise right lateral peritoneal reflection (white line of Toldt). Mobilize cecum, ascending colon, and hepatic flexure medially. Identify and protect right ureter and duodenum." },
      { n: 4, t: "Vascular pedicle division", d: "Divide ileocolic artery and vein at origin from SMA/SMV. Divide right colic artery (if present) and right branch of middle colic. High tie for oncological clearance (not mandatory for volvulus but standard right hemicolectomy practice)." },
      { n: 5, t: "Bowel division", d: "Divide terminal ileum 15–20 cm proximal to ileocecal valve (healthy bowel). Divide transverse colon at hepatic flexure. Deliver specimen." },
      { n: 6, t: "Anastomosis", d: "If bowel viable and patient stable: functional end-to-end ileocolic anastomosis with linear stapler. If ischemia/peritonitis: end ileostomy, oversew transverse colon or mucous fistula." },
      { n: 7, t: "Closure", d: "Irrigate peritoneal cavity if contamination. Mass closure of abdomen." }
    ],
    pearls: [
      "Always decompress the distended cecum before attempting mobilization if >12 cm diameter — reduces handling injury risk and improves exposure",
      "Identify right ureter crossing iliac vessels before dividing vascular pedicles",
      "Viable cecum + stable patient = primary anastomosis is safe (no different from elective right hemicolectomy)",
      "Do not attempt detorsion without proceeding to right hemicolectomy in a fit patient — recurrence too high"
    ]
  },
  guidelines: [
    { src: "ASCRS Clinical Practice Guidelines: Colonic Volvulus 2017" },
    { src: "ACPGBI Guidelines: Large Bowel Obstruction 2018" },
    { src: "ESCP Emergency Colorectal Surgery Guidelines 2021" }
  ],
  pearls: [
    "Cecal volvulus is a surgical emergency — perforation occurs within 24–48 hours; do not delay for prolonged endoscopic attempts",
    "Right hemicolectomy is definitive treatment — detorsion alone or cecopexy has 10–15% recurrence",
    "Unlike sigmoid volvulus, endoscopic decompression of cecal volvulus is unreliable — surgery is primary management",
    "Mobile cecum is present in 11% of population — surgical fixation at elective right hemicolectomy prevents de novo cecal volvulus"
  ],
  mistakes: [
    "Repeated endoscopic decompression attempts for cecal volvulus — delays surgery, increases ischemia risk",
    "Detorsion and cecopexy as routine treatment for fit patients — right hemicolectomy is the standard",
    "Missing the ureteric injury during emergency right hemicolectomy — identify ureter before vascular pedicle ligation",
    "Not decompressing massively distended cecum before mobilization — handling injury causes perforation"
  ]
},

{
  id: "large-bowel-obstruction",
  dept: "colorectal",
  name: "Large Bowel Obstruction",
  latin: "Ileus mechanicus coli",
  organ: "Colon",
  severity: "critical",
  tags: ["colorectal","obstruction","emergency","stent","hartmann"],
  hero: "Most common cause is colorectal cancer (60%); CT confirms; colonic stent as bridge to surgery for left-sided cancer; emergency Hartmann's or on-table lavage for perforated/unfit patients.",
  keypoints: [
    "60% CRC, 15% diverticular stricture, 10% volvulus, 5% extrinsic compression",
    "CT (with water-soluble contrast enema if needed) is diagnostic and identifies transition point",
    "Acute Ogilvie's syndrome (pseudo-obstruction): no mechanical obstruction — dilated cecum on CT; treat with neostigmine or colonoscopic decompression",
    "Left-sided colonic cancer: SEMS as bridge to elective surgery (CREST trial: equivalent oncological outcomes); or emergency Hartmann's if perforated/peritonitis",
    "Ileocecal valve competent vs incompetent: competent valve = closed loop obstruction → cecal perforation risk when diameter >12 cm",
    "Hartmann's procedure: sigmoid resection + end colostomy — definitive emergency option; reversal in 50% of patients"
  ],
  differentials: [
    "Pseudo-obstruction (Ogilvie's syndrome) — no mechanical obstruction on CT",
    "Sigmoid volvulus",
    "Cecal volvulus",
    "Paralytic ileus (post-operative, metabolic)",
    "Small bowel obstruction (multiple dilated loops, no colonic dilation)",
    "Toxic megacolon (IBD — transverse colon >6 cm)"
  ],
  mnemonics: [
    { name: "LBO causes mnemonic", text: "CDVEF: Cancer (60%), Diverticular (15%), Volvulus (10%), Extrinsic/External compression (5%), Fecal impaction (5%)" },
    { name: "Cecal perforation risk", text: "12 cm rule: cecal diameter >12 cm or rapid progression = imminent perforation risk — act urgently" }
  ],
  overview: {
    definition: "Mechanical obstruction of the large bowel resulting in failure of passage of intestinal contents. Causes: intrinsic (colorectal cancer, diverticular stricture, volvulus) or extrinsic (adhesion, hernia, pelvic mass). Distinguished from pseudo-obstruction by CT.",
    epidemiology: "Common surgical emergency. CRC most common cause (60%). Incidence: ~25/100,000/year. M:F = 1:1 for cancer-related. Elderly patients (mean 70 years). Diverticular stricture second most common cause. Volvulus: cecal and sigmoid combined account for ~25%.",
    pathophysiology: "Obstruction → proximal bowel distension with gas and fluid → increased intraluminal pressure → mucosal ischemia. Competent ileocecal valve: closed-loop obstruction — cecal distension maximal and perforation risk highest when diameter >12 cm. Incompetent valve: back-fill of small bowel reduces cecal pressure but worsens overall ileus. Strangulation: rare in colonic obstruction compared to SBO.",
    classification: [
      "Simple obstruction — no vascular compromise",
      "Strangulated obstruction — vascular compromise; rare in colon except volvulus",
      "Closed-loop obstruction — competent ileocecal valve; most dangerous",
      "Complete vs incomplete obstruction"
    ]
  },
  diagnosis: {
    history: [
      "Absolute constipation (no flatus or stool) — cardinal symptom; distinguishes from ileus",
      "Abdominal distension, colicky pain",
      "Vomiting: late feature (cecal content reflux — feculent)",
      "Change in bowel habit: increasing constipation, ribbon stools, PR bleeding (CRC)",
      "Diverticular disease history (stricture)",
      "Weight loss, iron deficiency anemia (CRC)",
      "Previous abdominal surgery, hernia (extrinsic compression)"
    ],
    examination: [
      "Abdominal distension — maximal in cecum and ascending colon (right-sided);",
      "Tympanitic percussion throughout",
      "Hyperactive bowel sounds (mechanical) or silent (ischemia/perforation)",
      "Peritonism → perforation or ischemia (surgical emergency)",
      "DRE: impacted stool, rectal mass, blood on glove",
      "Inguinal/femoral hernia orifices: herniated colon causing obstruction"
    ],
    investigations: [
      { name: "AXR", role: "Peripheral distribution of gas; haustral folds visible; contrast with small bowel (central, valvulae conniventes). May show volvulus. Cecal diameter >12 cm = urgent surgery." },
      { name: "CT abdomen/pelvis with IV ± rectal contrast", role: "Gold standard: identifies transition point, tumor, perforation (free gas/fluid), ischemia; determines whether stent feasible (tumor accessibility, anatomy)" },
      { name: "Water-soluble contrast enema", role: "If CT equivocal for mechanical vs pseudo-obstruction — therapeutic in pseudo-obstruction (stimulates peristalsis)" },
      { name: "CBC, electrolytes/BUN-Cr, LFTs, CRP, lactate, coagulation", role: "Metabolic assessment, sepsis workup; lactate >2 = ischemia until proven otherwise" },
      { name: "CT chest", role: "Pre-operative staging if CRC — pulmonary metastases affect prognosis and surgical planning" }
    ]
  },
  criteria: {
    title: "Emergency LBO — Management Decision Framework",
    items: [
      { k: "Perforation/peritonitis", v: "Emergency laparotomy: Hartmann's procedure or segmental resection ± primary anastomosis based on contamination and patient stability" },
      { k: "Left colon CRC, no perforation, fit patient", v: "SEMS (bridge to surgery) → elective laparoscopic resection in 4–8 weeks" },
      { k: "Left colon CRC, no perforation, metastatic/palliative", v: "SEMS as definitive palliative decompression" },
      { k: "Right colon CRC obstruction", v: "Emergency right hemicolectomy ± primary anastomosis" },
      { k: "Cecal diameter >12 cm, no immediate perforation", v: "Urgent surgery within hours — emergency colectomy" },
      { k: "Sigmoid volvulus", v: "Endoscopic decompression first; elective sigmoid resection" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NBM, IV fluids, NG tube decompression",
      "Neostigmine 2.5 mg IV over 3 minutes: for pseudo-obstruction (Ogilvie's) — ECG monitoring; 90% response rate",
      "Colonoscopic decompression: pseudo-obstruction unresponsive to neostigmine",
      "Gastrografin enema: diagnostic and therapeutic for pseudo-obstruction"
    ],
    medical: [
      "IV antibiotics (cefuroxime + metronidazole): all patients going to emergency surgery",
      "Thromboprophylaxis: LMWH post-operatively (high VTE risk)",
      "Correction of electrolytes: hypokalemia worsens ileus"
    ],
    surgical: [
      { name: "Self-expanding metal stent (SEMS)", when: "Left-sided colonic CRC obstruction — fit patient for elective surgery OR palliative decompression for metastatic disease", notes: "Endoscopic placement under fluoroscopic guidance; technical success 90–95%; clinical success 85%. Bridge to elective laparoscopic resection in 4–8 weeks after bowel preparation. CREST trial: equivalent 3-year OS vs emergency surgery. Risk: perforation 1–4% (worse prognosis), migration 10%." },
      { name: "Emergency Hartmann's procedure", when: "Left colon obstruction with perforation, peritonitis, or failed stent; hemodynamically unstable", notes: "Sigmoid/left colon resection, end colostomy, oversew rectal stump (or mucous fistula). Definitive and safe. Reversal possible in 50%." },
      { name: "Emergency resection with primary anastomosis ± on-table lavage", when: "Selected patients — viable bowel, no peritonitis, fit, experienced surgeon", notes: "On-table lavage: irrigate proximal colon with warm saline via cecostomy; then anastomose. Increasing evidence that primary anastomosis without on-table lavage is safe in selected patients (ACPGBI Emergency Laparotomy)." },
      { name: "Emergency right hemicolectomy", when: "Right colon/transverse colon CRC causing obstruction", notes: "Primary ileocolic anastomosis safe in most cases if bowel viable. Extended right hemicolectomy if splenic flexure involved." },
      { name: "Subtotal colectomy", when: "Synchronous right and left colon CRC; total colonic obstruction; ischemic colon", notes: "Removes entire colon; ileorectal anastomosis or end ileostomy. Avoids anastomotic leak from unprepared bowel." }
    ]
  },
  technique: {
    title: "Hartmann's Procedure for Left-Sided LBO",
    prep: [
      "GA; NG tube; urinary catheter; IV antibiotics at induction",
      "Lloyd-Davies or supine position; lithotomy if rectal stump closure needed from below",
      "Mark stoma site (left iliac fossa) pre-operatively if patient awake"
    ],
    steps: [
      { n: 1, t: "Midline laparotomy", d: "Explore — confirm obstruction site, assess viability, peritoneal contamination, liver for metastases." },
      { n: 2, t: "Mobilize left colon", d: "Incise left peritoneal reflection; mobilize sigmoid and descending colon. Identify left ureter (medially retracted; stent helps)." },
      { n: 3, t: "Divide vascular pedicles", d: "Divide inferior mesenteric artery and vein (high tie for cancer; flush ligation for non-cancer). Preserve hypogastric nerve plexus." },
      { n: 4, t: "Divide bowel", d: "Proximal: divide sigmoid/descending colon at proximal healthy bowel — linear stapler or clamp. Distal: divide at rectosigmoid junction or proximal rectum — linear stapler, usually below peritoneal reflection." },
      { n: 5, t: "End colostomy", d: "Bring proximal limb through previously marked trephine in left iliac fossa. Mature as end colostomy (Brooke stoma — evert over rod)." },
      { n: 6, t: "Rectal stump", d: "Oversew or staple rectal stump. Optional: clip/mark with non-absorbable suture to facilitate future reversal identification." },
      { n: 7, t: "Closure", d: "Irrigate abdomen if contamination. Mass closure. Wound vacuum dressing if contaminated." }
    ],
    pearls: [
      "Mark the stoma site pre-operatively with the patient sitting/standing — belt line and skin folds change position under GA",
      "Identify the left ureter before dividing IMA — ureteric injury is the most common major complication",
      "Clip the rectal stump with a non-absorbable marker clip — aids identification at Hartmann's reversal, which can be technically difficult",
      "Hartmann's reversal: 50% are never reversed (patient comorbidity); plan reversal at 3–6 months minimum"
    ]
  },
  guidelines: [
    { src: "CREST trial: Sloothaak et al. BJS 2014 — SEMS vs emergency surgery for CRC LBO" },
    { src: "ACPGBI/ESCP Emergency Colorectal Surgery Guidelines 2021" },
    { src: "ASCRS Clinical Practice Guidelines: Large Bowel Obstruction 2021" },
    { src: "ESGE/ESSO/ESCP Guidelines: SEMS for malignant colonic obstruction 2020" }
  ],
  pearls: [
    "SEMS is the first-line treatment for left-sided colonic CRC causing obstruction in fit patients — allows laparoscopic elective surgery after bowel preparation",
    "Cecal diameter >12 cm = perforation imminent — this is a surgical emergency; do not delay for more investigations",
    "Ogilvie's syndrome (pseudo-obstruction) must be excluded before SEMS — CT is essential; neostigmine and colonoscopic decompression treat pseudo-obstruction",
    "Hartmann's reversal: only 50% of Hartmann's colostomies are eventually reversed — counsel patients appropriately at initial consent"
  ],
  mistakes: [
    "Treating pseudo-obstruction as mechanical obstruction — CT differentiates; neostigmine not surgery is primary treatment for Ogilvie's",
    "SEMS for perforated LBO — contraindicated; emergency surgery mandatory",
    "SEMS for proximal/right colon obstruction — technically difficult and rarely feasible; emergency right hemicolectomy",
    "Not identifying ureter during Hartmann's — most significant preventable complication"
  ]
},

{
  id: "anal-cancer",
  dept: "colorectal",
  name: "Anal Canal Cancer",
  latin: "Carcinoma canalis analis",
  organ: "Anal canal",
  severity: "critical",
  tags: ["colorectal","anal","HPV","chemoradiotherapy","oncology"],
  hero: "Squamous cell carcinoma; primary treatment is chemoradiotherapy (Nigro protocol — 5-FU + mitomycin C + RT); surgery (APR) reserved for persistent/recurrent disease after CRT.",
  keypoints: [
    "90% squamous cell carcinoma; HPV-16/18 in >80% of cases",
    "Primary treatment: concurrent chemoradiotherapy (CRT) — Nigro protocol (5-FU + mitomycin C + 50–54 Gy RT)",
    "ACT II trial: CRT achieves complete response in 70–80%; colostomy-free survival superior to surgery",
    "APR (abdominoperineal resection) reserved for: residual disease post-CRT, local recurrence, or T4 invasion into surrounding structures at diagnosis",
    "HIV-positive patients have 30× increased risk; HPV vaccination reduces incidence",
    "Do NOT biopsy an anal canal mass without examination under anesthetic and staging — delays treatment and unnecessary if diagnosis likely on clinical grounds"
  ],
  differentials: [
    "Rectal adenocarcinoma extending to anal canal (different treatment — surgery not CRT)",
    "Perianal skin SCC (perianal margin SCC — treated like skin SCC, not anal canal CRT protocol)",
    "Anal melanoma (rare, aggressive — surgery primary treatment)",
    "GIST extending to anal region",
    "Condylomata acuminata (HPV warts — benign but precancerous)",
    "Anal fistula with associated carcinoma (rare but well-described)"
  ],
  mnemonics: [
    { name: "Nigro Protocol", text: "5-FU + Mitomycin C + 50 Gy RT — 'Five Mito Fifty' — the CRT regimen that cures anal cancer without surgery" },
    { name: "Anal cancer risk factors", text: "HAIR: HIV/Immunosuppression, Anal receptive intercourse, HPV (16/18), Receptive sex workers — all increase risk 10–30×" }
  ],
  overview: {
    definition: "Malignant neoplasm arising from the anal canal (from dentate line to anal verge). Predominantly squamous cell carcinoma (90%). Distinguished from perianal margin SCC (below anal verge) which is treated differently. Rare: adenocarcinoma (from anal glands), melanoma, GIST.",
    epidemiology: "Rare: ~1,500 cases/year UK; ~8,000/year USA. Incidence rising (HPV association). F:M = 3:2 overall; M:F = 1:2 in HIV+ men who have sex with men (MSM). HPV-16: >80% of anal SCC. Risk: HIV (30× risk), MSM, immunosuppression (transplant), smoking, multiple sexual partners, cervical/vulval/vaginal HPV-associated neoplasia.",
    pathophysiology: "HPV-16/18 infection of anal transition zone epithelium → E6 (p53 inactivation) and E7 (Rb inactivation) oncoproteins → progression: normal epithelium → AIN I → AIN II → AIN III (high-grade squamous intraepithelial lesion, HSIL) → invasive SCC. Immune surveillance suppression (HIV, transplant) accelerates progression from AIN to SCC.",
    classification: [
      "Squamous cell carcinoma (90%) — basaloid, large cell keratinising, large cell non-keratinising",
      "Adenocarcinoma (5%) — from anal glands or upward extension from rectal adenocarcinoma",
      "Melanoma (<1%) — most aggressive; poor prognosis; wide local excision primary treatment",
      "GIST, lymphoma, neuroendocrine — rare"
    ]
  },
  diagnosis: {
    history: [
      "Rectal bleeding, anal pain, perianal mass",
      "Change in bowel habit, sensation of incomplete evacuation",
      "Anal discharge or incontinence",
      "Pruritus ani (early stage or AIN)",
      "HIV status, sexual history, number of partners, STI history",
      "Previous CIN, VIN, VAIN (associated HPV-related disease)",
      "Inguinal lymphadenopathy (regional metastasis)"
    ],
    examination: [
      "Inspection: perianal/anal mass, ulceration, skin changes",
      "DRE: indurated, ulcerated mass in anal canal; assess sphincter involvement; assess mobility",
      "EUA under GA: biopsy mass; assess extent; note relationship to dentate line and sphincter complex",
      "Inguinal lymph nodes: palpable inguinal nodes — FNA; elective inguinal RT if clinically suspicious",
      "Proctoscopy: extent of proximal extension into rectum"
    ],
    investigations: [
      { name: "Biopsy (EUA)", role: "Histological confirmation — SCC; HPV p16 IHC; assess depth; baseline sphincter assessment" },
      { name: "MRI pelvis (3 Tesla)", role: "T staging: tumor extent, sphincter involvement, pelvic node involvement (essential for RT planning)" },
      { name: "CT chest/abdomen/pelvis", role: "Distant staging — liver, lung, inguinal and iliac nodal assessment" },
      { name: "FDG-PET-CT", role: "Most sensitive for nodal and distant staging; inguinal node involvement detected in 25% that CT misses; guides RT field planning" },
      { name: "HIV test", role: "All anal canal SCC patients — HIV changes immune reconstitution and CRT management" },
      { name: "HPV status (p16 IHC)", role: "p16+ confirms HPV association; p16-negative anal SCC has different biology and worse prognosis" }
    ]
  },
  criteria: {
    title: "AJCC 8th Edition Anal Canal SCC — T Stage",
    items: [
      { k: "T1", v: "≤2 cm" },
      { k: "T2", v: ">2 cm but ≤5 cm" },
      { k: "T3", v: ">5 cm" },
      { k: "T4", v: "Any size; invasion of adjacent organs (vagina, urethra, bladder)" },
      { k: "N1", v: "Inguinal, mesorectal, internal iliac, or obturator lymph nodes" },
      { k: "M1", v: "Distant metastasis (liver, lung, distant nodes)" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "AIN (anal intraepithelial neoplasia): surveillance with high-resolution anoscopy (HRA) ± ablation (laser, electrocautery, topical 5-FU/imiquimod) for HSIL — prevent progression to invasive SCC in HIV+ patients",
      "HPV vaccination (Gardasil-9): prophylactic; not therapeutic; reduces incident AIN and SCC in unvaccinated"
    ],
    medical: [
      "Nigro protocol (standard CRT): 5-FU 1000 mg/m²/day CI days 1–4 and 29–32 + Mitomycin C 12 mg/m² bolus days 1 and 29 + External beam RT 50–54 Gy to anal canal and regional nodes in 25–28 fractions (concurrent)",
      "ACT II trial (UK standard): CRT + mitomycin C — 3-year progression-free survival 74%; no benefit from maintenance chemotherapy",
      "HIV+ patients: same CRT regimen; optimize ART first; more toxicity but similar response rates",
      "Second-line/metastatic: carboplatin + paclitaxel (SWOG-S1512: pembrolizumab under investigation); cisplatin + 5-FU"
    ],
    surgical: [
      { name: "Abdominoperineal resection (APR)", when: "Residual disease at 26 weeks post-CRT, local recurrence, or T4 involvement of adjacent organs at diagnosis precluding CRT cure", notes: "Permanent end colostomy. Wide perineal excision — include entire anal sphincter complex. Posterior vaginal wall excision if involved. Reconstruction: flap (gracilis, gluteal) for large perineal defect. 5-year salvage rate after APR for recurrence: ~40%." },
      { name: "Wide local excision", when: "Very small T1 well-differentiated SCC of anal margin (perianal skin, NOT anal canal) — different entity; skin SCC protocol", notes: "1 cm margins; sphincter-preserving for perianal margin SCC only" },
      { name: "Inguinal lymph node dissection", when: "Persistent/recurrent inguinal node disease after CRT with no distant metastasis", notes: "After adequate RT dose to inguinal region; therapeutic dissection for residual/recurrent inguinal nodes" }
    ]
  },
  technique: {
    title: "Examination Under Anesthetic (EUA) and Biopsy for Anal Canal Mass",
    prep: [
      "GA or spinal; lithotomy position",
      "Bowel preparation not required for EUA/biopsy"
    ],
    steps: [
      { n: 1, t: "EUA", d: "Systematic examination: inspect perianal region, anal verge. DRE under anesthesia — assess tumor fixity, size, sphincter involvement. Proctoscopy: extent of proximal spread." },
      { n: 2, t: "Biopsy", d: "Multiple punch biopsies of tumor and ulcer edge (avoid central necrotic tissue). Minimum 3–4 biopsies. Handle with care — send in formalin. Request: H&E, p16 IHC, and if rectal proximity: CEA, CK7/CK20 to exclude adenocarcinoma." },
      { n: 3, t: "Document findings", d: "Record: tumor size, location relative to dentate line, sphincter involvement (assess preservation of function), palpable nodes." },
      { n: 4, t: "Tattoo if small lesion", d: "For T1 lesions: India ink tattoo marks for radiation field planning." }
    ],
    pearls: [
      "Never perform APR as primary treatment for anal SCC — CRT first; APR is salvage procedure (ACT I and II trials changed practice in 1980–2000)",
      "Assess response to CRT at 26 weeks — not 6–8 weeks; late complete response is common and surgery should not be rushed",
      "Inguinal nodes: PET-CT detects 25% additional involved inguinal nodes not seen on CT — include in RT field if involved",
      "HIV+ patients should be on ART before starting CRT — immune reconstitution improves CRT tolerability and outcomes"
    ]
  },
  guidelines: [
    { src: "ACT II trial: James et al. Lancet Oncol 2013 — CRT for anal SCC" },
    { src: "NICE NG151: Anal Cancer 2021" },
    { src: "ESMO Clinical Practice Guidelines: Anal Cancer 2021" },
    { src: "NCCN Guidelines: Anal Carcinoma 2023" }
  ],
  pearls: [
    "Anal canal SCC is cured by chemoradiotherapy in 70–80% — surgery is NOT first-line treatment",
    "Response assessment at 26 weeks post-CRT (not 6 weeks) — late complete response is common; avoid premature APR",
    "HIV+ patients have 30× risk of anal SCC — screen with HRA in HIV+ MSM",
    "p16 IHC: positive = HPV-driven (better prognosis); p16 negative anal SCC has worse outcomes with CRT"
  ],
  mistakes: [
    "APR as first-line treatment for anal canal SCC — CRT is standard; surgery only for residual/recurrent disease",
    "Response assessment at 6 weeks post-CRT (too early) — late responders continue to respond until 26 weeks; premature APR denies patients durable cure",
    "Treating perianal margin SCC the same as anal canal SCC — perianal margin SCC is treated like skin SCC (wide excision ± RT); different from anal canal CRT protocol",
    "Missing HIV diagnosis — affects management, radiation tolerance, and immune reconstitution"
  ]
},

{
  id: "intestinal-fistula",
  dept: "colorectal",
  name: "Intestinal Fistula",
  latin: "Fistula intestinalis",
  organ: "Small/Large bowel",
  severity: "critical",
  tags: ["colorectal","fistula","nutrition","TPN","FRIENDS"],
  hero: "Optimize nutrition (TPN if high-output), treat sepsis, and allow 4–6 weeks for spontaneous closure; 50% close spontaneously; surgery for those that do not — SNAP protocol.",
  keypoints: [
    "90% are iatrogenic (post-operative); 10% spontaneous (Crohn's, cancer, radiation, diverticulitis)",
    "SNAP protocol: Sepsis control → Nutrition optimization → Anatomy definition → Procedure (definitive surgery)",
    "High-output fistula: >500 mL/24h — TPN + octreotide; fluid/electrolyte replacement critical",
    "Factors preventing closure: FRIENDS — Foreign body, Radiation, Infection/Inflammation, Epithelialisation, Neoplasm, Distal obstruction, Short tract (<2 cm)",
    "Spontaneous closure: 40–50% within 4–6 weeks if FRIENDS obstacles absent; low-output ECF has higher closure rate",
    "Surgery: resection of fistula-bearing segment with primary anastomosis after nutritional optimization and sepsis control"
  ],
  differentials: [
    "Wound infection with fistula (enterocutaneous vs wound sinus)",
    "Crohn's enterocutaneous fistula",
    "Radiation enteritis fistula",
    "Anastomotic leak (ECF after colorectal surgery)",
    "Diverticular fistula (colovesical, colovaginal)",
    "Malignant fistula (from recurrent tumor)"
  ],
  mnemonics: [
    { name: "FRIENDS — prevents spontaneous closure", text: "Foreign body, Radiation damage, Infection/Inflammation, Epithelialisation, Neoplasm, Distal obstruction, Short tract (<2 cm) — all need addressing before waiting for spontaneous closure" },
    { name: "SNAP Protocol", text: "Sepsis → Nutrition → Anatomy → Procedure — the systematic approach to ECF management" }
  ],
  overview: {
    definition: "Abnormal communication between the intestinal lumen and another epithelial-lined surface: enterocutaneous (ECF: bowel to skin), enteroenteric (bowel to bowel), enterovesical (bowel to bladder), enterovaginal, or enterothoracic. Most clinically significant is ECF.",
    epidemiology: "85–90% iatrogenic: post-operative anastomotic leak or inadvertent bowel injury. 10–15% spontaneous: Crohn's disease (most common), cancer, radiation enteritis, diverticulitis, tuberculosis, actinomycosis. High-output ECF: 40–50% mortality historically; now <10% with modern nutritional support.",
    pathophysiology: "Anastomotic leak → intra-abdominal sepsis → controlled drainage → track from bowel to skin. Sepsis impairs wound healing and delays spontaneous closure. Malnutrition (protein calorie) → impaired fibroplasia → fistula persistence. Distal obstruction → perpetuates high-output fistula. Radiation → obliterative endarteritis → poor tissue healing.",
    classification: [
      "By output: Low-output <200 mL/24h; moderate 200–500 mL/24h; high-output >500 mL/24h",
      "By anatomical location: ECF (enterocutaneous), enteroenteric, enterovaginal, enterovesical, enterothoracic",
      "By etiology: Iatrogenic (post-operative), spontaneous (Crohn's, radiation, cancer)"
    ]
  },
  diagnosis: {
    history: [
      "Intestinal content (bilious, feculent, or clear) draining from wound/drain site or skin after abdominal surgery",
      "Previous abdominal surgery — especially bowel resection and anastomosis",
      "Known Crohn's disease, radiation, or cancer",
      "Colovesical fistula: pneumaturia (air in urine), fecaluria, recurrent UTIs",
      "Enterovaginal: passage of bowel content per vaginum, recurrent vaginal infections",
      "Malnutrition, dehydration in high-output fistula"
    ],
    examination: [
      "Skin opening draining intestinal content — confirm fistula tract (not wound sinus)",
      "Assess fistula output volume per 24 hours — critical for management classification",
      "Surrounding skin: excoriation, maceration (enzymatic damage from small bowel content)",
      "Signs of sepsis: fever, leukocytosis, abdominal tenderness — undrained sepsis is the most dangerous feature",
      "Nutritional assessment: BMI, muscle mass, albumin, hand-grip strength",
      "Examine for Crohn's features, recurrent tumor"
    ],
    investigations: [
      { name: "Fistulogram (contrast injection through external opening)", role: "Delineates tract, identifies internal opening, bowel anatomy, distal obstruction" },
      { name: "CT abdomen/pelvis with oral ± IV contrast", role: "Identifies undrained sepsis (abscess), fistula anatomy, associated pathology (cancer recurrence, bowel obstruction)" },
      { name: "Small bowel follow-through / CT enterography", role: "Crohn's-associated fistula: extent of bowel disease, strictures, other fistulae" },
      { name: "Serum albumin, pre-albumin, CRP", role: "Nutritional status and inflammation — albumin <25 g/L = severe malnutrition; target >35 g/L before surgery" },
      { name: "24-hour fistula output measurement", role: "Classify output; guides fluid/electrolyte replacement and decision on TPN vs enteral nutrition" }
    ]
  },
  criteria: {
    title: "FRIENDS Factors Preventing Spontaneous Closure",
    items: [
      { k: "Foreign body", v: "Mesh, suture, prosthetic — must be removed for closure" },
      { k: "Radiation", v: "Radiation-damaged bowel will not heal spontaneously — must resect irradiated segment" },
      { k: "Infection/Inflammation", v: "Undrained sepsis perpetuates fistula — source control first" },
      { k: "Epithelialisation", v: "Mature tract lined by squamous epithelium — spontaneous closure prevented; must excise" },
      { k: "Neoplasm", v: "Malignancy prevents healing — treat cancer first or palliate" },
      { k: "Distal obstruction", v: "High-pressure proximal bowel perpetuates output — relieve obstruction" },
      { k: "Short tract (<2 cm)", v: "Insufficient length for spontaneous closure; requires surgical repair" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Wound/stoma care: stoma appliance to collect output, protect surrounding skin (stomahesive, zinc oxide)",
      "SNAP step 1 — Sepsis control: CT-guided drainage of abscess; broad-spectrum antibiotics; fistula drainage",
      "SNAP step 2 — Nutrition: High-output ECF: nil by mouth + TPN (avoids stimulation of fistula output); low-output: enteral nutrition may be feasible; target albumin >30 g/L before surgery",
      "Octreotide 100–200 mcg SC TDS: reduces pancreatic, biliary, and intestinal secretions → reduces fistula output by 30–40%; use in high-output ECF; accelerates but does not increase rate of spontaneous closure",
      "Skin protection: barrier creams, stoma appliances, negative pressure wound therapy (NPWT) to manage high-output wound"
    ],
    medical: [
      "TPN: standard for high-output ECF (>500 mL/24h) — parenteral route avoids enteral stimulation of fistula",
      "Proton pump inhibitor: reduces gastric acid and intestinal secretion volume",
      "Antibiotics: target undrained sepsis; Crohn's-associated: metronidazole ± ciprofloxacin; biologics (infliximab) for Crohn's ECF"
    ],
    surgical: [
      { name: "Source control", when: "Undrained abscess associated with fistula — ALWAYS first", notes: "CT-guided percutaneous drainage; endoscopic drainage (anastomotic leak); laparotomy only if non-amenable to percutaneous approach. Never operate on a fistula with undrained sepsis." },
      { name: "Definitive fistula surgery", when: "Fistula persisting >6–8 weeks despite optimization; FRIENDS obstacle identified; patient nutritionally optimized (albumin >30 g/L)", notes: "Resection of fistula-bearing segment (not simple closure — recurrence >50%); primary anastomosis after bowel preparation and nutritional optimization; protect anastomosis with defunctioning stoma in complex cases." },
      { name: "Defunctioning stoma", when: "Temporary diversion to allow fistula healing; enterovaginal or complex enteroenteric fistula", notes: "Reduce fistula output by diverting intestinal content; allows wound healing; reversal after fistula closure confirmed on imaging" },
      { name: "Vacuum-assisted closure (VAC)", when: "Open abdomen with fistula ('difficult abdomen')", notes: "Modified VAC with fistula isolation; controls output, promotes granulation; bridge to definitive surgery at 6–12 months when adhesions soften ('stone abdomen' → 'silk abdomen')" }
    ]
  },
  technique: {
    title: "Definitive ECF Surgery — Fistula Resection and Anastomosis",
    prep: [
      "Nutritional optimization: albumin >30 g/L; TPN for minimum 2–4 weeks pre-op if malnourished",
      "CT fistulogram within 4 weeks of surgery to confirm anatomy",
      "Bowel preparation if colonic involvement",
      "Operate 3–6 months after last laparotomy (dense adhesions at 6 weeks; 'silk abdomen' at 6 months)"
    ],
    steps: [
      { n: 1, t: "Safe access", d: "Previous midline laparotomy: incise well above previous scar where adhesions are minimal; enter peritoneum under direct vision. Manage dense adhesions by sharp dissection — scissors, not blunt finger dissection." },
      { n: 2, t: "Fistula identification", d: "Follow fistula tract to internal bowel opening. Define fistula-bearing segment of bowel. Identify surrounding anatomy." },
      { n: 3, t: "Segment resection", d: "Resect segment bearing fistula with adequate margins. Simple closure of fistula site has >50% recurrence — always resect. Send specimen for histology (exclude Crohn's, malignancy)." },
      { n: 4, t: "Anastomosis", d: "Primary anastomosis in well-prepared, nutritionally-optimized patient. Stapled or hand-sewn. Consider defunctioning stoma if contamination, tension, or high risk." },
      { n: 5, t: "Abdominal wall", d: "Excise fistula tract and surrounding skin/scarred fascia. Reconstruct abdominal wall — component separation if large defect; biological mesh for contaminated field." }
    ],
    pearls: [
      "Never operate on a fistula with undrained sepsis — source control first; this is the most important principle",
      "Wait 3–6 months from last laparotomy — operating in dense adhesions at 6–12 weeks leads to enterotomy and new fistulae",
      "Simple closure of the fistula opening is not sufficient — resect the fistula-bearing segment; repair alone has >50% recurrence",
      "Nutritional optimization is not optional — albumin <25 g/L = anastomotic leak risk unacceptably high; postpone surgery"
    ]
  },
  guidelines: [
    { src: "ESPEN Guidelines: Clinical nutrition in acute intestinal failure 2021" },
    { src: "ACPGBI/BAPEN: Management of intestinal failure and ECF 2018" },
    { src: "Berry SM et al: ACS Surgery: Principles and Practice — Intestinal Fistula 2020" }
  ],
  pearls: [
    "SNAP is the framework: Sepsis control → Nutrition → Anatomy → Procedure — follow the sequence",
    "40–50% of ECF close spontaneously if FRIENDS obstacles are absent — give adequate time (6–8 weeks)",
    "TPN is not optional for high-output ECF — reduces fistula output and allows nutritional optimization before surgery",
    "Radiation fistula will NOT close spontaneously — irradiated bowel must be resected"
  ],
  mistakes: [
    "Operating on an ECF before sepsis is controlled — highest cause of operative failure and mortality",
    "Simple closure of the fistula opening — resection is required; simple closure recurs in >50%",
    "Operating before nutritional optimization — albumin <25 g/L predicts anastomotic failure",
    "Not accounting for the time from last laparotomy — surgery at 6–12 weeks is in the 'stone abdomen' phase; wait for 'silk abdomen' at 6 months"
  ]
},

{
  id: "carcinoid-appendix",
  dept: "colorectal",
  name: "Appendiceal Carcinoid (Well-Differentiated NET)",
  latin: "Tumor carcinoides appendicis",
  organ: "Appendix",
  severity: "moderate",
  tags: ["colorectal","appendix","NET","carcinoid"],
  hero: "Most common appendiceal tumor and most common GI NET; >95% are cured by simple appendectomy if ≤2 cm; right hemicolectomy for >2 cm or positive margins.",
  keypoints: [
    "Most commonly found incidentally at appendectomy — located at tip in 75%",
    "Size is the most important prognostic factor: <1 cm = 0% metastasis; 1–2 cm = 1–2%; >2 cm = 30% metastasis",
    "Simple appendectomy curative for ≤2 cm tumor with clear margins (R0)",
    "Right hemicolectomy: for >2 cm, positive resection margin (R1), lymphovascular invasion, mesoappendiceal invasion >3 mm, goblet cell carcinoid (mixed histology)",
    "Carcinoid syndrome rare for appendiceal NET — requires hepatic metastases to cause syndrome (bypasses hepatic inactivation)",
    "Chromogranin A: tumor marker for follow-up; 24h urinary 5-HIAA if syndrome suspected"
  ],
  differentials: [
    "Mucocele of appendix (mucin-filled, benign vs LAMN/HAMN/appendiceal mucinous adenocarcinoma)",
    "Appendiceal adenocarcinoma (colonic-type or mucinous — worse prognosis)",
    "Goblet cell carcinoid/adenocarcinoid (mixed goblet cell + carcinoid — more aggressive)",
    "Appendiceal lymphoma",
    "Metastatic carcinoma involving appendix"
  ],
  mnemonics: [
    { name: "Appendiceal NET size rule", text: "Less than One = Done (appendectomy only); One to Two = Watch what you do (appendectomy ± review); Over Two = Hemi for you (right hemicolectomy)" },
    { name: "Right hemicolectomy indications for appendiceal NET", text: "Big MARGIN: >2 cm, Mesoappendiceal invasion >3mm, R1 margins, Goblet cell histology, Incomplete N staging, Nodal disease" }
  ],
  overview: {
    definition: "Well-differentiated neuroendocrine tumor (NET G1 or G2) arising from enterochromaffin cells of the appendiceal mucosa. Formerly called 'carcinoid tumor'. The most common primary appendiceal neoplasm and the most common site of GI NETs.",
    epidemiology: "Incidental finding in 0.3–0.9% of appendectomies. Peak age 40–50 years. F:M = 1.5:1. >70% are benign (G1), <1 cm. Carcinoid syndrome occurs only with hepatic metastases (bypasses hepatic inactivation of serotonin) — rare for appendiceal primary.",
    pathophysiology: "Arises from Kulchitsky (enterochromaffin) cells in appendiceal mucosa. Low mitotic rate (Ki67 <2% in G1). Serotonin (5-HT), substance P, chromogranin A secretion. Hepatic metastases → 5-HT and vasoactive peptides reach systemic circulation without first-pass hepatic inactivation → carcinoid syndrome: flushing, diarrhea, bronchospasm, right heart valvulopathy.",
    classification: [
      "G1 NET (carcinoid): Ki67 <2%, <2 mitoses/10 HPF — most appendiceal NETs",
      "G2 NET: Ki67 3–20%, 2–20 mitoses/10 HPF — less common",
      "G3 NET / NEC: Ki67 >20% — rare; aggressive",
      "Goblet cell adenocarcinoid (GCA): mixed neuroendocrine + goblet cell adenocarcinoma features — more aggressive; right hemicolectomy always required"
    ]
  },
  diagnosis: {
    history: [
      "Most cases: incidental finding at appendectomy performed for acute appendicitis or other indication",
      "Rarely: right iliac fossa mass, obstructive appendicitis",
      "Carcinoid syndrome (if hepatic metastases): episodic flushing, secretory diarrhea, bronchospasm, right-sided cardiac valvulopathy (tricuspid regurgitation)",
      "Weight loss, cachexia in advanced disease"
    ],
    examination: [
      "Usually normal — incidental finding post-appendectomy",
      "Carcinoid syndrome: facial flushing, telangiectasia, right heart valvulopathy (TR murmur)",
      "Hepatomegaly if hepatic metastases",
      "Palpable RIF mass (large tumor — rare)"
    ],
    investigations: [
      { name: "Histology (post-appendectomy)", role: "Confirms diagnosis; measures tumor size (critical decision point), Ki67, margins, lymphovascular invasion, mesoappendiceal depth" },
      { name: "Chromogranin A (CgA)", role: "Serum tumor marker; elevated if tumor burden significant; baseline for surveillance after right hemicolectomy; note: PPI falsely elevates CgA" },
      { name: "24-hour urinary 5-HIAA", role: "Carcinoid syndrome assessment; elevated if hepatic metastases and active serotonin secretion" },
      { name: "CT abdomen/pelvis (contrast)", role: "For tumors >1 cm at histology: staging — hepatic metastases, nodal disease, peritoneal disease" },
      { name: "68Ga-DOTATATE PET-CT", role: "Most sensitive for metastatic NET; all tumors >2 cm or with symptoms; positive somatostatin receptor status guides PRRT therapy" },
      { name: "Echocardiogram", role: "Carcinoid heart disease (Hedinger syndrome) assessment — TR, pulmonary stenosis; right heart valvulopathy from circulating 5-HT" }
    ]
  },
  criteria: {
    title: "Appendiceal NET — Surgical Management by Size",
    items: [
      { k: "<1 cm", v: "Simple appendectomy curative — no further imaging or surgery required; 0% metastasis risk" },
      { k: "1–2 cm, clear margins, no LVI", v: "Simple appendectomy likely sufficient; CT staging; discuss at NET MDT; right hemicolectomy in young/fit patients to exclude nodal disease (1–2% risk)" },
      { k: ">2 cm OR R1 margin OR LVI OR mesoappendiceal >3 mm OR goblet cell", v: "Right hemicolectomy" },
      { k: "Goblet cell adenocarcinoid (any size)", v: "Right hemicolectomy always — aggressive biology" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Somatostatin analogues (octreotide LAR, lanreotide): anti-proliferative for metastatic G1–G2 NET; PROMID and CLARINET trials show PFS benefit; carcinoid syndrome control; baseline 68Ga-DOTATATE positive tumor required"
    ],
    medical: [
      "Octreotide LAR 30 mg q4w (or lanreotide): first-line for metastatic appendiceal NET; PROMID trial: doubles median time to progression vs placebo for midgut NETs",
      "PRRT (Peptide receptor radionuclide therapy) — 177Lu-DOTATATE (Lutathera): second-line for progressive somatostatin receptor-positive G1–G2 NET; NETTER-1 trial: PFS benefit vs high-dose octreotide",
      "Everolimus (mTOR inhibitor): RADIANT-3 — PFS benefit for progressive advanced pancreatic NET; less evidence for appendiceal",
      "Systemic chemotherapy: G3 NEC — cisplatin + etoposide or temozolomide ± capecitabine for G2 NET"
    ],
    surgical: [
      { name: "Simple appendectomy", when: "Tumor ≤2 cm, R0 margins, no high-risk features", notes: "Standard appendectomy — laparoscopic preferred. Ensure mesoappendix fully excised with appendix. Adequate base resection at cecum." },
      { name: "Right hemicolectomy", when: ">2 cm tumor; positive margins; LVI; mesoappendiceal invasion >3 mm; goblet cell histology; nodal involvement on staging", notes: "Formal right hemicolectomy with D3 lymphadenectomy along ileocolic and right colic pedicles. Laparoscopic approach preferred for elective resection." },
      { name: "Liver resection / ablation", when: "Resectable hepatic metastases with controlled primary disease", notes: "Liver debulking (>90% tumor reduction) improves carcinoid syndrome even if non-curative; resection for limited hepatic metastases; radiofrequency ablation for small lesions" }
    ]
  },
  technique: {
    title: "Laparoscopic Appendectomy for Appendiceal NET",
    prep: [
      "No special preparation for incidental finding — standard appendectomy",
      "If pre-operative NET suspected: staging CT/68Ga-DOTATATE first"
    ],
    steps: [
      { n: 1, t: "Standard laparoscopic appendectomy", d: "3-port technique. Identify appendix. Skeletonise mesoappendix close to appendix to avoid compromise of ileocolic vessel." },
      { n: 2, t: "Mesoappendix division", d: "Divide mesoappendix with LigaSure or endoscopic clips. For suspected NET: ensure full mesoappendix included with specimen." },
      { n: 3, t: "Appendix base", d: "Apply endoscopic loop (Endoloop) or stapler at base. Ensure clean margin from cecum." },
      { n: 4, t: "Specimen retrieval and histology", d: "ALL appendectomy specimens must be sent for histology — do not discard. Request specific reporting of: tumor size, Ki67, margins (base and mesoappendix), LVI, depth of mesoappendiceal invasion." }
    ],
    pearls: [
      "Always send appendix for histology — NET discovered only on histological examination",
      "The base margin is the most important — if tumor is at appendiceal base, R1 resection requires right hemicolectomy",
      "Goblet cell carcinoid (adenocarcinoid): aggressive; right hemicolectomy always required regardless of size",
      "For tumors 1–2 cm: discuss at NET MDT — right hemicolectomy in young patients to ensure complete nodal staging"
    ]
  },
  guidelines: [
    { src: "ENETS Consensus Guidelines: Appendiceal NETs 2016 (Pape et al.)" },
    { src: "ESMO-ENETS Guidelines: Digestive NETs 2020" },
    { src: "NCCN Guidelines: Neuroendocrine Tumors 2023" },
    { src: "NETTER-1: Strosberg et al. NEJM 2017 — PRRT (177Lu-DOTATATE)" }
  ],
  pearls: [
    "All appendectomy specimens must be sent for histology — NET is found incidentally and changes management",
    "Size determines management: <1 cm = appendectomy curative; >2 cm = right hemicolectomy required",
    "Carcinoid syndrome = hepatic metastases (5-HT bypasses liver) — 24h urinary 5-HIAA and echocardiogram",
    "Goblet cell adenocarcinoid is a different entity — always right hemicolectomy regardless of size"
  ],
  mistakes: [
    "Discarding the appendix specimen — histology mandatory for all appendectomies",
    "Not performing right hemicolectomy for >2 cm tumor — 30% nodal metastasis risk",
    "Diagnosing carcinoid syndrome without confirmed hepatic metastases — syndrome only occurs when 5-HT bypasses liver",
    "Treating goblet cell adenocarcinoid as standard carcinoid — it is more aggressive and always requires right hemicolectomy"
  ]
},

{
  id: "mucocele-appendix",
  dept: "colorectal",
  name: "Mucocele of the Appendix",
  latin: "Mucocele appendicis",
  organ: "Appendix",
  severity: "major",
  tags: ["colorectal","appendix","mucinous","LAMN","PMP"],
  hero: "Spectrum from benign retention cyst to LAMN/HAMN/appendiceal mucinous adenocarcinoma; ruptured LAMN seeds peritoneum with mucin causing pseudomyxoma peritonei (PMP); intact removal mandatory.",
  keypoints: [
    "Mucocele is a descriptive term — histological classification determines prognosis and management: Simple retention cyst → LAMN (low-grade) → HAMN (high-grade) → appendiceal mucinous adenocarcinoma",
    "LAMN: most common; low malignant potential; risk of PMP if perforated — treat with intact appendectomy",
    "PMP (pseudomyxoma peritonei): rupture of LAMN/HAMN seeding mucin-producing cells → peritoneal dissemination; treatment: cytoreductive surgery (CRS) + HIPEC",
    "Right hemicolectomy: HAMN, mucinous adenocarcinoma, involved margins, tumor >2 cm, positive lymph nodes",
    "NEVER puncture or aspirate a cystic appendiceal lesion laparoscopically — risk of peritoneal seeding (spillage of mucin = PMP risk)",
    "Preoperative CT: smooth wall (LAMN) vs irregular/enhancing wall (HAMN/adenocarcinoma)"
  ],
  differentials: [
    "Appendiceal NET (carcinoid) — solid, tip of appendix",
    "Ovarian mucinous cystadenoma/cystadenocarcinoma — female patient; ovarian origin on imaging",
    "Meckel's diverticulum cystic change",
    "Appendiceal abscess (acute inflammation)",
    "Mesenteric cyst",
    "Right-sided colonic cancer"
  ],
  mnemonics: [
    { name: "Mucocele spectrum", text: "Simple → LAMN → HAMN → Adenocarcinoma: 'Simple Low High Adeno' — malignant potential increases across the spectrum" },
    { name: "PMP rule", text: "Do NOT Puncture or Pop the appendiceal cyst — ruptured LAMN seeds the peritoneum with mucin; intact removal mandatory every time" }
  ],
  overview: {
    definition: "Dilatation of the appendiceal lumen by accumulated mucin, classified histologically: (1) simple mucosal hyperplasia/retention cyst — benign, no malignant potential; (2) LAMN (low-grade appendiceal mucinous neoplasm) — push-type invasion, risk of peritoneal dissemination if ruptured; (3) HAMN (high-grade appendiceal mucinous neoplasm) — higher grade, destructive invasion; (4) appendiceal mucinous adenocarcinoma — invasive.",
    epidemiology: "Rare: 0.2–0.3% of appendectomies. LAMN: most common histological subtype (80%). Female predominance (F:M 4:1 for LAMN). PMP: 1–2 per million/year — most cases arise from appendiceal LAMN. Association with synchronous colonic or ovarian mucinous tumors (EMAST/microsatellite instability).",
    pathophysiology: "LAMN: mucin-secreting epithelium (low-grade) pushes beyond appendix wall without destructive invasion. Risk: if acellular mucin breaches the appendiceal wall → 'acellular pseudomyxoma' (low PMP risk) vs cellular mucin (LAMN cells breach wall) → 'epithelial pseudomyxoma' (high PMP risk if disseminated). PMP: peritoneal surfaces covered in mucin-producing cells → gelatinous ascites, omental cake, bowel obstruction.",
    classification: [
      "Simple mucosal hyperplasia/retention cyst — benign; no malignant potential",
      "LAMN (low-grade appendiceal mucinous neoplasm) — push-type invasion; peritoneal dissemination risk if ruptured; no nodal metastasis",
      "HAMN (high-grade appendiceal mucinous neoplasm) — destructive invasion; nodal/distant metastasis possible",
      "Mucinous appendiceal adenocarcinoma — frank invasive adenocarcinoma; highest malignant potential"
    ]
  },
  diagnosis: {
    history: [
      "Most cases are incidental — found on CT for another indication or at appendectomy",
      "Right iliac fossa mass, intermittent dull RIF pain",
      "Increasing abdominal girth (PMP: gelatinous ascites)",
      "Features of appendicitis (superimposed infection)",
      "Female patient: ovarian mass workup leading to CT (differential mucinous ovarian cystadenoma)",
      "Previous appendectomy with mucocele found incidentally"
    ],
    examination: [
      "Smooth, non-tender RIF mass",
      "PMP: jelly-belly abdomen — shifting dullness, omental cake palpable, scalloped liver margin",
      "Signs of bowel obstruction (advanced PMP)"
    ],
    investigations: [
      { name: "CT abdomen/pelvis with IV contrast", role: "Dilated appendix with homogeneous low-attenuation content; calcified rim suggests LAMN; irregular wall / enhancement = HAMN/adenocarcinoma. Assess for peritoneal dissemination (scalloping of liver margin, omental cake)" },
      { name: "MRI abdomen/pelvis", role: "Better characterizes wall irregularity, mural nodules (high-risk features), and extent of peritoneal disease" },
      { name: "Ultrasound", role: "Initial investigation for RIF mass — identifies cystic appendiceal lesion; poorly characterizes wall features" },
      { name: "Tumor markers (CEA, CA125, CA19-9)", role: "Elevated in LAMN, HAMN, adenocarcinoma and PMP; baseline for surveillance and treatment monitoring" },
      { name: "Colonoscopy", role: "Exclude synchronous colonic mucinous adenoma or carcinoma (association with LAMN)" }
    ]
  },
  criteria: {
    title: "Appendiceal Mucocele — Surgical Management by Histology",
    items: [
      { k: "Simple retention cyst / hyperplasia", v: "Appendectomy curative — no further action" },
      { k: "LAMN, intact removal, R0 margins", v: "Appendectomy curative; annual surveillance CT × 5 years" },
      { k: "LAMN, ruptured or R1 margins", v: "Right hemicolectomy; staging laparoscopy for peritoneal dissemination; PMP protocol if cells identified" },
      { k: "HAMN or mucinous adenocarcinoma", v: "Right hemicolectomy with D3 lymphadenectomy; CT staging for metastatic disease; oncology MDT" },
      { k: "PMP", v: "CRS (cytoreductive surgery) + HIPEC at specialist PMP center (Basingstoke, Christie, Hammersmith)" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Annual CT surveillance × 5 years after LAMN appendectomy with intact removal — monitor for peritoneal recurrence",
      "PMP pre-operative optimization: nutritional support, bowel preparation before CRS/HIPEC"
    ],
    medical: [
      "Systemic chemotherapy for PMP: FOLFOX or FOLFIRI ± bevacizumab — palliative or as bridge to CRS/HIPEC for unresectable disease",
      "Heated intraperitoneal chemotherapy (HIPEC): as part of CRS/HIPEC — mitomycin C or oxaliplatin intrahepatic administration; targets residual peritoneal disease after cytoreduction"
    ],
    surgical: [
      { name: "Intact appendectomy", when: "LAMN/mucocele — primary treatment", notes: "NEVER aspirate or puncture cyst laparoscopically; if laparoscopic approach: use endobag for specimen extraction to prevent spillage; if inadvertent perforation occurs: convert, thoroughly wash peritoneum, collect all mucin — inform pathologist of spillage" },
      { name: "Right hemicolectomy", when: "HAMN, mucinous adenocarcinoma, positive margins, LAMN with perforation, tumor >2 cm", notes: "Formal right hemicolectomy with ileocolic and right colic nodal dissection. Staging laparoscopy at time of hemicolectomy to exclude peritoneal disease." },
      { name: "CRS + HIPEC", when: "PMP — peritoneal dissemination of mucinous tumor", notes: "Cytoreductive surgery: peritonectomy (right/left parietal, pelvic, diaphragmatic, hepatogastric ligament), omentectomy, splenectomy, bilateral adnexectomy, colectomy as needed. Completeness of cytoreduction (CC-0/CC-1) is the most important prognostic factor. HIPEC (40–42°C, 90 min): mitomycin C or oxaliplatin. Specialist centers only (30-day mortality 1–5% in expert hands)." }
    ]
  },
  technique: {
    title: "Laparoscopic Appendectomy for Mucocele — Safe Technique",
    prep: [
      "Bowel preparation if right hemicolectomy possible (large/suspicious mucocele)",
      "Endobag (specimen bag) prepared before starting laparoscopy",
      "Consent for conversion to open and right hemicolectomy if necessary"
    ],
    steps: [
      { n: 1, t: "Initial laparoscopic assessment", d: "Insert 10 mm umbilical port. Inspect peritoneal cavity first — look for mucin deposits, peritoneal nodules (sign of previous rupture = PMP). Document findings." },
      { n: 2, t: "Mobilize appendix carefully", d: "Gentle handling — do NOT grasp mucocele directly. Grasp mesoappendix or appendiceal tip distal to mucocele to avoid perforation." },
      { n: 3, t: "Divide mesoappendix", d: "LigaSure or clips. Ensure adequate hemostasis." },
      { n: 4, t: "Appendiceal base staple", d: "Endoscopic linear stapler across appendiceal base (wider application than Endoloop — reduces mucin leakage risk). Staple well onto cecal base." },
      { n: 5, t: "Endobag extraction", d: "CRITICAL: Place entire specimen in endobag before extraction. Enlarge umbilical port/incision to extract bag intact. If any mucin spillage detected: copious washout; inform pathologist; consider CT surveillance protocol and potential CRS/HIPEC referral." },
      { n: 6, t: "Histology request", d: "Urgent histology; request specifically: LAMN vs HAMN vs adenocarcinoma classification, margins (base), acellular vs cellular mucin on serosa." }
    ],
    pearls: [
      "The endobag is not optional for mucocele removal — mucin spillage from LAMN causes PMP in a proportion of patients",
      "Inspect the peritoneum at the start of laparoscopy — mucin deposits from previous silent rupture indicates PMP has already occurred; do not proceed without expert PMP MDT input",
      "Scalloped liver margin on preoperative CT = PMP already disseminated — refer to PMP specialist center before surgery",
      "Synchronous right hemicolectomy is NOT always required for LAMN — right hemicolectomy is for HAMN/adenocarcinoma, positive margins, or perforation"
    ]
  },
  guidelines: [
    { src: "PSOGI (Peritoneal Surface Oncology Group International) Consensus: LAMN/HAMN Classification 2016" },
    { src: "ESMO Consensus: Peritoneal Mesothelioma and PMP 2020" },
    { src: "ACPGBI Position Statement: Pseudomyxoma Peritonei 2020" },
    { src: "Sugarbaker PH: CRS + HIPEC technique and outcomes, Annals Surg Oncol 2016" }
  ],
  pearls: [
    "Mucocele is NOT a single diagnosis — LAMN, HAMN, and adenocarcinoma behave differently and require different treatment",
    "Ruptured LAMN causes PMP — intact removal with endobag is the critical surgical principle",
    "PMP is treatable with CRS + HIPEC — 10-year survival 70% for LAMN-derived PMP at specialist centers; refer early",
    "Scalloped liver edge on CT = PMP until proven otherwise — do not proceed with laparoscopic appendectomy without specialist input"
  ],
  mistakes: [
    "Aspirating or puncturing the mucocele laparoscopically to 'make it fit through the port' — this seeds the peritoneum",
    "Not using an endobag for specimen extraction — mucin contamination of port site can seed PMP",
    "Not inspecting the peritoneum at laparoscopy — PMP may already be present; would change management",
    "Treating HAMN/adenocarcinoma with simple appendectomy — right hemicolectomy mandatory for these subtypes"
  ]
},
{
  id: "crs-hipec", dept: "colorectal",
  name: "Cytoreductive Surgery & HIPEC",
  latin: "Chirurgia cytoreductiva cum chemotherapia intraperitoneali hyperthermica",
  organ: "Peritoneum (peritoneal surface)",
  severity: "high",
  tags: ["peritoneal malignancy","HIPEC","cytoreduction","pseudomyxoma","oncology"],
  hero: "For peritoneal surface malignancy: aggressive removal of all visible tumour (cytoreduction) followed by heated chemotherapy washed through the abdomen — turning a once-palliative diagnosis into a potentially curative one in selected patients.",
  keypoints: [
    "Two-part treatment: cytoreductive surgery (CRS) to remove all macroscopic disease, then HIPEC (Hyperthermic IntraPEritoneal Chemotherapy) to treat residual microscopic disease",
    "Only worthwhile if a COMPLETE cytoreduction is achievable — outcome is driven by the completeness-of-cytoreduction (CC) score (CC-0/CC-1 = no or ≤2.5 mm residual)",
    "Best-evidenced indications: pseudomyxoma peritonei (appendiceal mucinous), peritoneal mesothelioma, and selected colorectal or ovarian peritoneal metastases",
    "The peritoneal carcinomatosis index (PCI, 0–39) quantifies disease burden across 13 abdominopelvic regions and helps select who benefits",
    "Heat (~41–43 °C) is synergistic with chemotherapy (commonly mitomycin-C or oxaliplatin) and improves tissue penetration; intraperitoneal delivery gives high local dose with low systemic toxicity",
    "A major undertaking — long operation, multi-visceral resections and peritonectomies, significant morbidity — so careful patient selection and an expert centre are essential"
  ],
  differentials: [
    "Systemic chemotherapy alone — standard for widespread/unresectable peritoneal metastases",
    "Palliative surgery (e.g. stoma, bypass) — for obstruction without curative intent",
    "PIPAC (pressurised intraperitoneal aerosol chemotherapy) — palliative/repeatable option for unresectable peritoneal disease",
    "Debulking without HIPEC — for low-grade disease where the heated wash adds little",
    "Best supportive care — when performance status or disease burden precludes CRS"
  ],
  overview: {
    definition: "A combined-modality treatment for peritoneal surface malignancy: cytoreductive surgery removes all visible tumour by peritonectomy and multi-visceral resection, and hyperthermic intraperitoneal chemotherapy then perfuses the abdomen with heated cytotoxic solution to eradicate residual microscopic disease.",
    epidemiology: "Applied to peritoneal metastases from appendiceal (pseudomyxoma peritonei), colorectal, ovarian and gastric primaries and to primary peritoneal mesothelioma; performed at specialist peritoneal-malignancy centres.",
    pathophysiology: "Peritoneal spread seeds the serosal surfaces, where systemic chemotherapy penetrates poorly (the peritoneal–plasma barrier). Removing all macroscopic disease leaves only microscopic tumour, which intraperitoneal chemotherapy — delivered at high local concentration and potentiated by hyperthermia (enhanced drug penetration, direct cytotoxicity and impaired repair) — can then target with limited systemic exposure.",
    classification: [
      {label:"PCI (Peritoneal Carcinomatosis Index)", note:"Tumour burden scored 0–39 across 13 regions; higher PCI predicts worse outcome and may contraindicate CRS"},
      {label:"CC score (Completeness of Cytoreduction)", note:"CC-0 (no visible residual) / CC-1 (≤2.5 mm) = complete; CC-2/CC-3 = incomplete, minimal survival benefit"},
      {label:"HIPEC delivery", note:"Open ('coliseum') or closed technique; heated perfusate ~41–43 °C for ~30–90 min; drug per tumour type"},
      {label:"Common agents", note:"Mitomycin-C (appendiceal/colorectal), oxaliplatin (colorectal), cisplatin (mesothelioma/ovarian)"}
    ]
  },
  criteria: {
    title: "Patient Selection & Peri-operative Principles",
    items: [
      { k: "Ideal candidate", v: "Good performance status, limited PCI, disease amenable to complete (CC-0/1) cytoreduction, no extra-abdominal metastases" },
      { k: "Best-evidence indications", v: "Pseudomyxoma peritonei, peritoneal mesothelioma, selected colorectal/ovarian peritoneal metastases" },
      { k: "PCI limits", v: "High PCI (varies by tumour; e.g. colorectal typically >20) predicts poor benefit — relative contraindication" },
      { k: "Prognostic driver", v: "Completeness of cytoreduction (CC-0/1) is the single strongest predictor of survival" },
      { k: "HIPEC agent/temp", v: "Mitomycin-C or oxaliplatin (colorectal/appendiceal); perfusate ~41–43 °C, ~30–90 min" },
      { k: "Morbidity", v: "High (anastomotic leak, fistula, haematological, prolonged ileus) — expert-centre, MDT-selected patients" },
      { k: "Not indicated", v: "Extra-abdominal disease, unresectable retroperitoneal/root-of-mesentery involvement, poor performance status" }
    ]
  },
  technique: {
    title: "Cytoreductive Surgery + HIPEC",
    prep: [
      "MDT selection; staging CT/MRI ± diagnostic laparoscopy to estimate PCI and resectability",
      "Optimise nutrition; counsel on major morbidity and possible multi-visceral/stoma resections",
      "Cross-match, critical-care bed, and HIPEC perfusion circuit ready"
    ],
    steps: [
      { n: 1, t: "Explore & score PCI", d: "Full laparotomy; assess all 13 regions and assign the peritoneal carcinomatosis index; confirm complete cytoreduction is achievable" },
      { n: 2, t: "Peritonectomy", d: "Systematic Sugarbaker peritonectomy procedures — strip involved parietal peritoneum from diaphragm, pelvis and gutters" },
      { n: 3, t: "Visceral resection", d: "Resect involved viscera (omentectomy, colectomy, splenectomy, etc.) to remove all macroscopic tumour" },
      { n: 4, t: "Confirm cytoreduction", d: "Verify CC-0/CC-1 status — HIPEC is only worthwhile if residual disease is ≤2.5 mm" },
      { n: 5, t: "Deliver HIPEC", d: "Circulate heated chemotherapy (~41–43 °C) through the abdomen for the drug-specific time (open coliseum or closed technique), agitating to distribute" },
      { n: 6, t: "Reconstruct", d: "Perform anastomoses/stomas after HIPEC (to avoid chemo exposure of fresh suture lines); drain; critical-care recovery" }
    ],
    pearls: [
      "HIPEC only helps after a complete (CC-0/1) cytoreduction — an incomplete debulk gains little",
      "Estimate the PCI and resectability up front (imaging ± diagnostic laparoscopy) to avoid an open-and-close laparotomy",
      "Fashion bowel anastomoses AFTER the heated perfusion to limit chemotherapy exposure of fresh suture lines"
    ]
  },
  guidelines: [
    { src: "PSOGI — Peritoneal Surface Oncology Group International consensus" },
    { src: "ASPSM / ESMO — cytoreductive surgery and HIPEC recommendations" }
  ],
  pearls: [
    "Completeness of cytoreduction (CC score) is the dominant prognostic factor — aim for CC-0",
    "Pseudomyxoma peritonei is the classic best-responder to CRS + HIPEC",
    "Intraperitoneal + hyperthermic delivery gives a high local dose with low systemic toxicity"
  ],
  mistakes: [
    "Offering HIPEC after an incomplete cytoreduction (CC-2/3) — little survival benefit",
    "Poor selection: high PCI or extra-abdominal disease → morbidity without cure",
    "Constructing anastomoses before HIPEC, exposing fresh suture lines to chemotherapy"
  ],
  related: [
    { id: "mucocele-appendix",  note: "Appendiceal mucinous neoplasm — source of pseudomyxoma peritonei treated by CRS+HIPEC" },
    { id: "carcinoid-appendix", note: "Appendiceal tumour spectrum and peritoneal spread" },
    { id: "crc",                note: "Selected colorectal peritoneal metastases are an indication for CRS+HIPEC" },
    { id: "diagnostic-laparoscopy", note: "Used to estimate PCI and resectability before committing to CRS" }
  ]
}

]; // end COLORECTAL3_DISEASES

if (typeof module !== 'undefined') module.exports = { COLORECTAL3_DISEASES };
