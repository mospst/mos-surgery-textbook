// tmp_abdwall.js — Abdominal-wall / retroperitoneal / mesenteric subtopics (Schwartz 11e Ch35)
// IDs: rectus-sheath-hematoma, diastasis-recti, retroperitoneal-fibrosis, mesenteric-cyst, dfsp
// dfsp carries dept "soft-tissue" (Skin & Soft Tissue); the rest are dept "hernia" (Abdominal Wall)

const ABDWALL_DISEASES = [
{
  id: "rectus-sheath-hematoma",
  dept: "hernia",
  name: "Rectus Sheath Hematoma",
  latin: "Haematoma vaginae musculi recti abdominis",
  organ: "Abdominal wall",
  severity: "moderate",
  tags: ["abdominal-wall","hematoma","anticoagulation","acute-abdomen"],
  hero: "Bleeding into the rectus sheath from a torn epigastric vessel or muscle — a classic mimic of the acute abdomen. Anticoagulation is the leading risk factor. CT with contrast is diagnostic; most settle with conservative care, embolization for ongoing bleeding.",
  keypoints: [
    "Disruption of an inferior (or superior) epigastric artery/vein branch, or a tear within the rectus muscle itself",
    "Below the arcuate line there is NO posterior rectus sheath — a hematoma here is unconfined, can cross the midline, track into the pelvis/prevesical space, and cause hemodynamic instability",
    "Fothergill's sign: a palpable abdominal-wall mass that stays fixed and does not cross the midline, and remains palpable when the rectus is tensed (a head-lift) — distinguishes it from an intra-abdominal mass",
    "Carnett's sign positive: tenderness persists or worsens on tensing the abdominal wall (intra-abdominal causes usually ease)",
    "Anticoagulation is the dominant risk factor; others = paroxysmal coughing, straining, trauma, pregnancy, abdominal LMWH injections, recent surgery/trocar injury, old age",
    "CT with IV contrast is the gold standard — confirms the hematoma and shows active extravasation (contrast blush) that predicts the need for intervention",
    "Management is dictated by hemodynamic stability: most are self-limiting; embolization for ongoing bleeding; surgery is a last resort"
  ],
  differentials: [
    "Acute appendicitis / diverticulitis (intra-abdominal acute abdomen)",
    "Incarcerated ventral or Spigelian hernia",
    "Abdominal wall / desmoid tumor",
    "Ovarian or other pelvic mass (if low and large)",
    "Intra-abdominal abscess",
    "Aortic / iliac aneurysm rupture (if unstable)"
  ],
  mnemonics: [
    { name: "Fothergill's sign", text: "Mass that stays palpable on head-lift (rectus tensed) and does NOT cross the midline = within the abdominal wall, not intraperitoneal" },
    { name: "Arcuate line trap", text: "Below the arcuate line = no posterior sheath = UNCONFINED bleed = can be big, cross midline, and drop the pressure" }
  ],
  overview: {
    definition: "An accumulation of blood within the rectus abdominis sheath, arising from rupture of an epigastric vessel or of the muscle itself, usually presenting as acute abdominal-wall pain and a tender mass.",
    epidemiology: "Uncommon; incidence rising with widespread anticoagulation. F:M roughly 2–3:1 (thinner abdominal-wall musculature). More frequent in older, anticoagulated patients. Often follows a bout of coughing or straining.",
    pathophysiology: "Shearing or direct injury tears an epigastric artery/vein or the muscle. The inferior epigastric vessels are tethered at the arcuate line, so bleeds below it are common and unconfined by any posterior sheath, allowing extension across the midline and into the prevesical (retropubic) space. Above the arcuate line the intact posterior sheath tamponades the bleed, keeping it self-limiting.",
    classification: [
      "Berná CT type I — intramuscular, unilateral, no dissection along fascial planes; hemodynamically stable; managed conservatively",
      "Berná CT type II — blood between the muscle and the transversalis fascia, may cross the midline; usually stable but observe",
      "Berná CT type III — blood dissects below the arcuate line into the prevesical space and/or peritoneum, with a hemoglobin drop; most likely to need transfusion, embolization, or surgery"
    ]
  },
  diagnosis: {
    history: [
      "Sudden unilateral abdominal-wall pain, often after coughing, sneezing, or straining",
      "Anticoagulant or antiplatelet use (ask specifically), or recent abdominal-wall injection",
      "Recent abdominal surgery or laparoscopic port placement",
      "Pregnancy or recent delivery",
      "Progressive lower abdominal swelling and, if large, lightheadedness (blood loss)"
    ],
    examination: [
      "Tender, firm, non-mobile mass within the abdominal wall",
      "Fothergill's sign positive (mass persists on head-lift, does not cross midline)",
      "Carnett's sign positive (tenderness persists/increases on abdominal-wall tensing)",
      "Cullen's sign (periumbilical bruising) or flank/lower-abdominal ecchymosis if extensive",
      "Signs of hypovolemia (tachycardia, hypotension) with a large below-arcuate-line bleed"
    ],
    investigations: [
      { name: "CT abdomen/pelvis with IV contrast", role: "Gold standard: confirms location and size, shows the arcuate-line relationship, and detects active contrast extravasation predicting need for embolization/surgery" },
      { name: "Abdominal ultrasound", role: "Quick bedside confirmation of an abdominal-wall (not intraperitoneal) collection; less sensitive for active bleeding and for below-arcuate-line extension" },
      { name: "FBC + serial hemoglobin", role: "Baseline and trend; a falling Hb signals ongoing bleeding (Berná type III)" },
      { name: "Coagulation screen (PT/INR, APTT), fibrinogen", role: "Quantify and guide reversal of anticoagulation" },
      { name: "Group & save / crossmatch", role: "Prepare for transfusion in large or unstable bleeds" }
    ]
  },
  criteria: {
    title: "Management by Hemodynamic Status (Berná type)",
    items: [
      { k: "Stable, type I–II", v: "Conservative: rest, analgesia, hold/reverse anticoagulation, serial Hb" },
      { k: "Stable but expanding / type III", v: "Admit; correct coagulopathy; low threshold for angiography" },
      { k: "Ongoing bleeding despite correction", v: "Transcatheter arterial embolization (first-line intervention)" },
      { k: "Unstable / failed embolization / compartment syndrome", v: "Surgery — evacuation and ligation of the bleeding vessel" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "First-line for most: bed rest, analgesia, ice, and treatment of the precipitant (cough suppression, avoid straining)",
      "Hold anticoagulation and reverse it when the bleed is significant — vitamin K/PCC for warfarin, protamine for heparin, idarucizumab/andexanet for DOACs as appropriate",
      "Transfuse red cells and correct coagulopathy to targets; serial hemoglobin and observation",
      "Resume anticoagulation only after a careful risk–benefit review once bleeding has stopped"
    ],
    medical: [
      "Reverse the specific anticoagulant; treat pain; manage the underlying cause of coughing/straining",
      "Tranexamic acid may be considered as an adjunct in ongoing bleeding (not a substitute for reversal or embolization)"
    ],
    surgical: [
      { name: "Transcatheter arterial embolization (TAE)", when: "Ongoing bleeding or active extravasation on CT despite correction of coagulopathy; hemodynamically stable or transiently responsive", notes: "Angiographic embolization of the inferior (or superior) epigastric artery; minimally invasive, avoids opening a large tamponading hematoma; preferred over surgery" },
      { name: "Surgical evacuation and vessel ligation", when: "Hemodynamic instability not controlled by resuscitation/embolization, failed embolization, or abdominal compartment syndrome from a massive hematoma", notes: "Evacuate clot, identify and ligate the bleeding epigastric vessel, secure hemostasis; opening the sheath releases tamponade so ensure vascular control; drain and close" }
    ]
  },
  technique: {
    title: "Angiographic Embolization of the Epigastric Artery",
    prep: [
      "Confirm active extravasation on CT and mark the bleeding side",
      "Correct coagulopathy as far as possible before/around the procedure",
      "Common femoral arterial access; systemic monitoring"
    ],
    steps: [
      { n: 1, t: "Access & selective catheterization", d: "Femoral puncture; selectively catheterize the external iliac then the inferior epigastric artery on the affected side" },
      { n: 2, t: "Identify the bleeding point", d: "Angiographic run to localize contrast extravasation from the epigastric branch" },
      { n: 3, t: "Embolize", d: "Deploy coils or gelfoam/particles proximal and distal to the bleeding point ('sandwich') to prevent back-filling from collaterals" },
      { n: 4, t: "Confirm hemostasis", d: "Completion angiogram to confirm no residual extravasation; remove sheath and achieve access-site hemostasis" }
    ],
    pearls: [
      "Do not rush to laparotomy for a stable rectus sheath hematoma — opening the sheath releases the tamponade and can worsen bleeding",
      "Below-arcuate-line (type III) bleeds are the dangerous ones — they are unconfined and can hide a large blood loss",
      "Always look for and correct the anticoagulant; recurrence is common if the precipitant is not addressed"
    ]
  },
  guidelines: [
    { src: "Berná CT classification of rectus sheath hematoma" },
    { src: "WSES (World Society of Emergency Surgery) — abdominal wall emergencies" }
  ],
  pearls: [
    "Think of it in any anticoagulated patient with sudden abdominal-wall pain and a tender non-mobile mass — it is frequently mistaken for an acute abdomen",
    "Carnett's and Fothergill's signs at the bedside point to an abdominal-wall rather than intraperitoneal source and can spare an unnecessary laparotomy",
    "Contrast extravasation on CT is the single best predictor that conservative management will fail"
  ],
  mistakes: [
    "Proceeding to laparotomy for a stable hematoma — releases tamponade and adds morbidity",
    "Failing to reverse or even recognize the patient's anticoagulation",
    "Missing a large below-arcuate-line bleed because ultrasound underestimated it — use contrast CT when unstable or Hb is falling"
  ]
},

{
  id: "diastasis-recti",
  dept: "hernia",
  name: "Rectus Diastasis (Diastasis Recti)",
  latin: "Diastasis recti abdominis",
  organ: "Abdominal wall",
  severity: "moderate",
  tags: ["abdominal-wall","diastasis","postpartum","not-a-hernia"],
  hero: "Widening of the linea alba with separation of the rectus muscles but an INTACT linea alba — there is no fascial defect, so it is NOT a hernia and cannot incarcerate or strangulate. First-line treatment is conservative; plication is reserved for functional or cosmetic indications.",
  keypoints: [
    "Separation of the two rectus muscles with a stretched but intact linea alba — an inter-recti distance (IRD) >2 cm above the umbilicus is generally considered abnormal",
    "NOT a true hernia: there is no fascial defect and no peritoneal sac, so there is NO risk of incarceration or strangulation",
    "Produces a midline fusiform (spindle-shaped) ridge that bulges on Valsalva or a sit-up",
    "Key distinction from an epigastric/umbilical hernia — a hernia has a discrete palpable fascial defect/ring; diastasis has none",
    "Very common in pregnancy (up to two-thirds by the third trimester), obesity, and multiparity",
    "First-line is conservative (physiotherapy, core rehabilitation, weight loss); most postpartum cases improve within 6–12 months",
    "Surgical plication only for genuine functional impairment or cosmetic indication — it has a meaningful recurrence rate and introduces a small incisional-hernia risk"
  ],
  differentials: [
    "Epigastric hernia (has a true fascial defect — can incarcerate)",
    "Umbilical / paraumbilical hernia",
    "Ventral incisional hernia",
    "Abdominal-wall lipoma or desmoid",
    "Intra-abdominal mass producing a bulge"
  ],
  mnemonics: [
    { name: "Not a hernia", text: "No ring, no sac, no strangulation — a stretched linea alba, not a hole in it" },
    { name: "Fusiform vs focal", text: "Diastasis = long midline FUSIFORM ridge; hernia = FOCAL defect with a palpable edge" }
  ],
  overview: {
    definition: "An abnormal separation of the rectus abdominis muscles caused by thinning and widening of the linea alba, without any fascial defect. Historically called divarication of the recti.",
    epidemiology: "Extremely common. Physiological in infancy (usually resolves). In adults it is associated with pregnancy (up to ~66% in the third trimester, ~30–40% persisting postpartum), obesity, multiparity, advanced age, and repetitive raised intra-abdominal pressure. Often coexists with umbilical or epigastric hernia.",
    pathophysiology: "Sustained raised intra-abdominal pressure and hormonal connective-tissue laxity (relaxin, estrogen in pregnancy) stretch and thin the linea alba, widening the gap between the medial borders of the recti. The linea alba remains continuous — there is no defect through which viscera can herniate.",
    classification: [
      "By location — supraumbilical (most common), umbilical, or infraumbilical",
      "By inter-recti distance — mild (2–3 cm), moderate (3–5 cm), severe (>5 cm)",
      "Isolated diastasis vs diastasis with a concurrent true midline hernia (changes management)"
    ]
  },
  diagnosis: {
    history: [
      "Midline abdominal bulge, often after pregnancy or weight gain",
      "Cosmetic concern ('pooch' that worsens on sitting up)",
      "Core weakness, low back pain, occasionally functional/postural complaints",
      "No episodes of painful irreducible lump (which would suggest a true hernia)"
    ],
    examination: [
      "Ask the supine patient to perform a head-lift/sit-up: a fusiform midline ridge appears between the recti",
      "Palpate and measure the inter-recti distance with the fingers at, above, and below the umbilicus",
      "Crucially, feel for a discrete fascial defect/ring — its absence supports diastasis over hernia",
      "Assess for a coexisting umbilical or epigastric hernia (a focal reducible lump with an edge)"
    ],
    investigations: [
      { name: "Clinical examination", role: "Usually sufficient for diagnosis; measure IRD on head-lift" },
      { name: "Abdominal ultrasound (dynamic)", role: "Objectively measures IRD and, importantly, confirms an intact linea alba / excludes a fascial defect when a hernia is suspected" },
      { name: "CT abdominal wall", role: "Reserved for surgical planning or when a concurrent complex ventral hernia must be characterized" }
    ]
  },
  criteria: {
    title: "When to Consider Surgical Repair",
    items: [
      { k: "Asymptomatic diastasis", v: "No surgical indication — reassure; conservative measures" },
      { k: "Failed conservative therapy + functional impairment", v: "Consider plication after 6–12 months of physiotherapy" },
      { k: "Diastasis WITH a true hernia", v: "Repair the hernia; plicate the diastasis at the same time" },
      { k: "Cosmetic-only request", v: "Elective plication/abdominoplasty after full counselling on recurrence and risk" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "First-line for essentially all isolated diastasis: structured physiotherapy and deep core / transversus abdominis strengthening",
      "Weight optimization and avoidance of provocative straining/incorrect abdominal exercises",
      "Reassurance — there is no strangulation risk; most postpartum cases improve by 6–12 months",
      "Allow at least 6–12 months postpartum before considering surgery"
    ],
    medical: [
      "No pharmacological therapy; address contributing factors (weight, chronic cough, constipation)"
    ],
    surgical: [
      { name: "Rectus plication (open)", when: "Functional impairment or cosmetic indication after failed conservative therapy; commonly combined with abdominoplasty", notes: "Reapproximation of the medial rectus borders by plication of the anterior sheath/linea alba, often in two layers; ± mesh reinforcement in wider or recurrent cases" },
      { name: "Endoscopic / robotic-assisted repair (e.g. subcutaneous or preperitoneal plication)", when: "Selected patients preferring a minimally invasive approach, especially with a concurrent small midline hernia", notes: "Endoscopic-assisted linea alba reconstruction (e.g. REPA-type technique) with plication ± reinforcing mesh; less soft-tissue dissection than open" },
      { name: "Concurrent hernia repair + plication", when: "Diastasis with a coexisting umbilical or epigastric hernia", notes: "Formal repair of the true defect (suture or mesh) plus plication of the diastasis reduces recurrence of the hernia by addressing the weak midline" }
    ]
  },
  technique: {
    title: "Anterior Rectus Sheath Plication",
    prep: [
      "Confirm and mark the extent of the diastasis and any true defect on head-lift",
      "Counsel on recurrence risk and the small incisional-hernia risk introduced by repair",
      "Supine positioning; general or regional anesthesia"
    ],
    steps: [
      { n: 1, t: "Access", d: "Infraumbilical or abdominoplasty incision; raise the flap to expose the anterior rectus sheath and the full length of the diastasis" },
      { n: 2, t: "Define the edges", d: "Identify the medial borders of both recti and any coexisting fascial defect" },
      { n: 3, t: "Plicate", d: "Continuous or interrupted plication of the anterior sheath/linea alba to reapproximate the recti, typically in two layers for durability" },
      { n: 4, t: "Reinforce (selective)", d: "Onlay or preperitoneal mesh in wide (>3–5 cm) or recurrent cases to lower recurrence" },
      { n: 5, t: "Close", d: "Redrape and close the flap over a drain if a large dead space; compression garment postoperatively" }
    ],
    pearls: [
      "Confirm there is no true fascial defect before labelling a bulge 'just diastasis' — a missed epigastric hernia can strangulate",
      "Operate for a reason (function or cosmesis), not for the radiological finding alone",
      "Plication under tension recurs — reinforce wide separations and optimize weight first"
    ]
  },
  guidelines: [
    { src: "European Hernia Society (EHS) — classification of rectus diastasis" },
    { src: "International Endohernia Society (IEHS) — guidelines on abdominal wall / diastasis" }
  ],
  pearls: [
    "The single most important teaching point: diastasis is not a hernia — there is no defect and no strangulation risk, so asymptomatic cases need only reassurance",
    "Always examine for a concurrent true hernia, which is common and does need repair",
    "Postpartum diastasis largely improves on its own — defer any surgery for at least 6–12 months"
  ],
  mistakes: [
    "Operating on an asymptomatic diastasis with no functional or cosmetic indication",
    "Mislabelling an epigastric hernia as diastasis and missing a defect that can incarcerate",
    "Plicating under tension without addressing obesity or chronically raised intra-abdominal pressure — predictable recurrence"
  ]
},

{
  id: "retroperitoneal-fibrosis",
  dept: "hernia",
  name: "Retroperitoneal Fibrosis (Ormond Disease)",
  latin: "Fibrosis retroperitonealis",
  organ: "Retroperitoneum",
  severity: "high",
  tags: ["retroperitoneum","IgG4","ureteric-obstruction","inflammatory"],
  hero: "A fibro-inflammatory rind around the infrarenal aorta that traps the ureters and IVC. Two-thirds are idiopathic (often IgG4-related / chronic periaortitis); the rest are secondary. Relieve ureteric obstruction first, then treat the inflammation with steroids — and always exclude an underlying malignancy.",
  keypoints: [
    "Proliferation of fibro-inflammatory tissue that classically encases the infrarenal aorta, IVC, and ureters",
    "~2/3 are idiopathic — now often regarded as chronic periaortitis, a large proportion within the IgG4-related disease spectrum",
    "Secondary causes: malignancy (lymphoma, sarcoma, metastatic desmoplastic reaction), drugs (ergot/methysergide, dopamine agonists, beta-blockers), radiotherapy, infection, prior surgery/hemorrhage",
    "Ureters are drawn MEDIALLY and obstructed — hydronephrosis and renal failure are the main dangers; lateral ureteric deviation suggests a different pathology",
    "Insidious dull back/flank/abdominal pain with raised inflammatory markers (ESR/CRP)",
    "Relieve obstruction first (stent or nephrostomy); corticosteroids are the mainstay for idiopathic disease",
    "Biopsy atypical or asymmetric disease to exclude malignancy before committing to immunosuppression"
  ],
  differentials: [
    "Retroperitoneal lymphoma or sarcoma",
    "Metastatic desmoplastic disease (e.g. carcinoid, breast, colon)",
    "Abdominal aortic aneurysm (inflammatory AAA overlaps)",
    "Erdheim-Chester disease",
    "Retroperitoneal abscess / psoas collection",
    "Primary ureteric stricture"
  ],
  mnemonics: [
    { name: "Medial pull", text: "RPF pulls ureters MEDIALLY and obstructs them; LATERAL deviation points away from RPF (think tumor/nodes)" },
    { name: "Relieve then suppress", text: "Decompress the kidney FIRST (stent/nephrostomy), THEN steroids — and biopsy if it looks atypical" }
  ],
  overview: {
    definition: "A chronic inflammatory and fibrotic process in the retroperitoneum that encases and constricts retroperitoneal structures, most importantly the ureters, aorta, and inferior vena cava.",
    epidemiology: "Rare (roughly 1 per 200,000–500,000 per year). Male predominance ~2–3:1. Typical onset 40–60 years. A substantial fraction of idiopathic cases fall within IgG4-related disease.",
    pathophysiology: "In idiopathic disease, an exaggerated inflammatory response — frequently to antigens in the atherosclerotic aortic wall ('chronic periaortitis') — drives a fibrotic plaque, in many cases with the histology of IgG4-related disease (storiform fibrosis, obliterative phlebitis, IgG4-rich plasma-cell infiltrate). Secondary disease reflects a desmoplastic reaction to tumor, drug, radiation, or infection. The advancing fibrosis entraps and obstructs the ureters and compresses venous structures.",
    classification: [
      "Idiopathic (Ormond disease) — ~2/3; includes IgG4-related chronic periaortitis",
      "Secondary — malignancy-associated, drug-induced, post-radiation, post-infective, post-surgical/hemorrhagic",
      "By extent — periaortic/peri-iliac limited disease vs extensive disease with bilateral ureteric involvement"
    ]
  },
  diagnosis: {
    history: [
      "Insidious poorly localized dull back, flank, or lower abdominal pain",
      "Constitutional symptoms: malaise, weight loss, low-grade fever",
      "Symptoms of renal impairment / oliguria when ureters are obstructed",
      "Lower-limb swelling or DVT (IVC/iliac vein compression); claudication or a scrotal varicocele",
      "Drug history (ergot derivatives, dopaminergics), prior malignancy, or radiotherapy"
    ],
    examination: [
      "Often unremarkable; possible abdominal/flank tenderness",
      "Signs of venous obstruction — leg edema, distended superficial veins, varicocele",
      "Hypertension; features of uremia if advanced",
      "Palpable mass is uncommon"
    ],
    investigations: [
      { name: "CT abdomen/pelvis with contrast", role: "Shows a periaortic/peri-iliac soft-tissue rind, typically anterolateral to the aorta and sparing the posterior wall, with medial deviation and obstruction of the ureters" },
      { name: "MRI retroperitoneum", role: "Characterizes the plaque and disease activity; helpful for follow-up and when contrast CT is contraindicated" },
      { name: "ESR / CRP", role: "Usually elevated; useful for gauging activity and monitoring response" },
      { name: "Renal function + ultrasound", role: "Detect and quantify hydronephrosis and renal impairment from ureteric obstruction" },
      { name: "Serum IgG4 and subclasses", role: "Supports IgG4-related disease when raised (not diagnostic alone)" },
      { name: "CT/US-guided biopsy", role: "Indicated for atypical, asymmetric, or mass-like disease to exclude lymphoma, sarcoma, or metastatic malignancy before immunosuppression" }
    ]
  },
  criteria: {
    title: "Features Favoring Idiopathic vs Secondary/Malignant RPF",
    items: [
      { k: "Idiopathic", v: "Symmetric periaortic rind, infrarenal, medial ureteric pull, raised IgG4, steroid-responsive" },
      { k: "Malignant/secondary suspected", v: "Asymmetric or lobulated mass, bony destruction, atypical location, lateral ureteric displacement, poor steroid response" },
      { k: "Mandatory action if atypical", v: "Biopsy before long-term immunosuppression" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Stop any causative drug (ergot derivatives, dopamine agonists, beta-blockers where implicated)",
      "Monitor renal function and inflammatory markers; serial imaging to track the plaque"
    ],
    medical: [
      "Corticosteroids are the mainstay for idiopathic disease — induce remission and shrink the plaque, then taper",
      "Steroid-sparing agents (tamoxifen, mycophenolate mofetil, methotrexate, azathioprine) for relapse or steroid intolerance",
      "Rituximab for IgG4-related disease, particularly relapsing or refractory cases",
      "Treat the underlying cause in secondary disease (e.g. chemotherapy for lymphoma)"
    ],
    surgical: [
      { name: "Ureteric stenting or percutaneous nephrostomy", when: "Ureteric obstruction with hydronephrosis or renal impairment — the immediate priority", notes: "Relieves obstruction and preserves renal function while medical therapy takes effect; stents may need periodic change" },
      { name: "Ureterolysis", when: "Refractory or severe obstruction not controlled medically/by stents, or when tissue diagnosis is required", notes: "Free the ureters from the fibrotic plaque and either lateralize them intraperitoneally or wrap them in omentum to prevent re-encasement; take biopsies to exclude malignancy" },
      { name: "Open/laparoscopic biopsy", when: "Diagnostic uncertainty or suspicion of malignancy where image-guided biopsy is inadequate", notes: "Obtain generous tissue for histology and IgG4 staining" }
    ]
  },
  technique: {
    title: "Ureterolysis with Omental Wrap",
    prep: [
      "Confirm the site and extent of ureteric encasement on cross-sectional imaging",
      "Pre-operative ureteric stents to aid intraoperative identification",
      "Consent for possible bowel mobilization and omental harvest"
    ],
    steps: [
      { n: 1, t: "Exposure", d: "Transperitoneal approach; mobilize the colon to expose the retroperitoneum and the encased ureters" },
      { n: 2, t: "Free the ureter", d: "Carefully dissect each ureter out of the fibrotic plaque along its length, preserving its blood supply" },
      { n: 3, t: "Biopsy", d: "Take representative biopsies of the plaque for histology and IgG4 staining" },
      { n: 4, t: "Prevent re-encasement", d: "Lateralize the ureters intraperitoneally or wrap them in a pedicled omental flap" },
      { n: 5, t: "Close", d: "Ensure hemostasis; leave stents in situ per urology; close" }
    ],
    pearls: [
      "Decompress the obstructed kidney before anything else — renal salvage is time-critical",
      "Never assume idiopathic disease in atypical cases — biopsy to exclude lymphoma or sarcoma",
      "Wrapping the freed ureters in omentum reduces re-encasement after ureterolysis"
    ]
  },
  guidelines: [
    { src: "ACR/EULAR classification criteria for IgG4-related disease" },
    { src: "British Society for Rheumatology — IgG4-related disease management" }
  ],
  pearls: [
    "Medial deviation of the ureters on CT is the classic clue; lateral deviation should make you doubt the diagnosis and look for tumor",
    "A meaningful proportion of idiopathic RPF is IgG4-related and responds well to steroids ± rituximab",
    "The plaque characteristically spares the posterior aortic wall, helping distinguish it from lymphoma which tends to lift the aorta off the spine"
  ],
  mistakes: [
    "Starting long-term immunosuppression without excluding an underlying malignancy",
    "Delaying decompression of an obstructed, failing kidney",
    "Forgetting to stop a causative drug such as an ergot derivative or dopamine agonist"
  ]
},

{
  id: "mesenteric-cyst",
  dept: "hernia",
  name: "Mesenteric Cyst",
  latin: "Cystis mesenterica",
  organ: "Mesentery",
  severity: "moderate",
  tags: ["mesentery","cyst","lymphangioma","rare"],
  hero: "A rare cystic mass within the mesentery, most often lymphatic in origin. Frequently found incidentally, but can cause pain, obstruction, volvulus, or hemorrhage. Complete surgical enucleation is curative; aspiration and marsupialization recur.",
  keypoints: [
    "Rare intra-abdominal cystic lesion arising within the mesentery — most commonly in the small-bowel mesentery",
    "Origins (de Perrot classification): lymphatic (lymphangioma), mesothelial (simple mesothelial cyst), enteric (duplication cyst), urogenital, dermoid, or non-pancreatic pseudocyst",
    "Often asymptomatic and found incidentally; when symptomatic, a mobile abdominal mass is characteristic",
    "Tillaux sign: the mass moves freely side-to-side (perpendicular to the mesenteric root) but is restricted along the axis of the mesentery",
    "Complications: bowel obstruction, volvulus, torsion, rupture, intracystic hemorrhage, or infection",
    "Complete surgical excision (enucleation) is the treatment of choice and is usually curative",
    "Enteric cysts sharing a wall or blood supply with the bowel often need a segmental bowel resection"
  ],
  differentials: [
    "Ovarian cyst (in women — often the main differential for a mobile cystic pelvic/abdominal mass)",
    "Enteric duplication cyst",
    "Pancreatic pseudocyst",
    "Cystic lymphangioma elsewhere",
    "Hydatid cyst",
    "Cystic mesothelioma / peritoneal inclusion cyst",
    "Ascites (loculated)"
  ],
  mnemonics: [
    { name: "Tillaux sign", text: "Mesenteric-root masses swing side-to-side but not up-and-down — mobile perpendicular to the mesentery" },
    { name: "Excise, don't drain", text: "Enucleate completely; aspiration/marsupialization = recurrence" }
  ],
  overview: {
    definition: "A benign cystic mass located within the layers of the mesentery, containing serous, chylous, or hemorrhagic fluid, classified by the tissue of origin.",
    epidemiology: "Very rare, reported in roughly 1 in 100,000–250,000 hospital admissions. Occurs at any age, with lymphatic (lymphangioma) types more common in children and mesothelial types in adults. The small-bowel (especially ileal) mesentery is the commonest site.",
    pathophysiology: "Most arise from ectopic or obstructed lymphatic tissue that fails to communicate with the normal lymphatic system, producing a slowly enlarging chyle- or serous-filled cyst. Enteric (duplication) cysts share the muscular wall and blood supply of the adjacent bowel. Growth can stretch, kink, or twist the mesentery, causing obstruction, volvulus, or torsion; thin-walled cysts may rupture or bleed.",
    classification: [
      "Lymphatic origin — simple lymphatic cyst and lymphangioma (thin-walled, chyle-filled)",
      "Mesothelial origin — simple mesothelial cyst and benign/malignant mesothelioma",
      "Enteric origin — enteric cyst and enteric duplication cyst (share bowel wall/vasculature)",
      "Urogenital origin, mature cystic teratoma (dermoid), and non-pancreatic pseudocyst"
    ]
  },
  diagnosis: {
    history: [
      "Often none — discovered incidentally on imaging or at laparotomy",
      "Vague abdominal pain, fullness, or a slowly enlarging swelling",
      "Acute presentation with obstruction, torsion/volvulus, or peritonitis from rupture",
      "In children, abdominal distension or a palpable mass"
    ],
    examination: [
      "Smooth, mobile, non-tender abdominal mass",
      "Tillaux sign — free mobility side-to-side, limited in the plane of the mesentery",
      "Signs of bowel obstruction or peritonism if complicated",
      "Fluctuant/ballotable large cyst"
    ],
    investigations: [
      { name: "Abdominal ultrasound", role: "First-line: confirms a thin-walled anechoic cystic lesion; assesses septa and internal debris" },
      { name: "CT abdomen/pelvis with contrast", role: "Defines size, site, relation to bowel and mesenteric vessels, and complications; helps predict need for bowel resection" },
      { name: "MRI", role: "Problem-solving for cyst characterization and surgical planning, especially in children" },
      { name: "Diagnostic laparoscopy", role: "Confirms the diagnosis and often allows definitive excision in the same setting" }
    ]
  },
  criteria: {
    title: "Operative Decision Points",
    items: [
      { k: "Simple lymphatic/mesothelial cyst", v: "Enucleation, preserving bowel where possible" },
      { k: "Cyst sharing bowel wall / blood supply (enteric)", v: "Segmental bowel resection with the cyst" },
      { k: "Complicated (torsion, rupture, hemorrhage, obstruction)", v: "Urgent operation" },
      { k: "Incidental small asymptomatic cyst", v: "Excision preferred; surveillance only if excision is high-risk" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Observation is reasonable only for a small, clearly benign, asymptomatic incidental cyst when excision carries undue risk",
      "Aspiration alone is discouraged — high recurrence and does not exclude malignancy"
    ],
    medical: [
      "No effective medical therapy; sclerotherapy has been used for unresectable lymphatic malformations in selected pediatric cases"
    ],
    surgical: [
      { name: "Complete enucleation", when: "Simple lymphatic or mesothelial cyst not intimately involving bowel", notes: "Shell the cyst out of the mesenteric leaves, preserving the bowel and its blood supply; laparoscopic or open; curative when complete" },
      { name: "Segmental bowel resection with the cyst", when: "Enteric/duplication cyst, or a cyst that shares a wall or the vascular supply of the adjacent bowel", notes: "Resect the involved bowel en bloc with the cyst and perform a primary anastomosis; avoids devascularizing the bowel by attempting enucleation" },
      { name: "Marsupialization (avoid)", when: "Only a fallback when a deep-rooted cyst cannot be fully excised", notes: "Associated with a high recurrence rate; not recommended as a primary strategy" }
    ]
  },
  technique: {
    title: "Laparoscopic Enucleation of a Mesenteric Cyst",
    prep: [
      "Cross-sectional imaging to define the cyst's relation to mesenteric vessels and bowel",
      "Consent for possible bowel resection and anastomosis",
      "Bowel preparation if resection is anticipated"
    ],
    steps: [
      { n: 1, t: "Exposure", d: "Laparoscopic ports; identify the cyst within the mesenteric leaves and inspect its relation to bowel and vessels" },
      { n: 2, t: "Assess resectability", d: "Decide enucleation vs segmental resection based on shared wall/blood supply" },
      { n: 3, t: "Dissect the plane", d: "Open the peritoneal leaf and develop the plane around the cyst, controlling small feeding vessels; avoid rupture and spillage" },
      { n: 4, t: "Remove intact", d: "Deliver the cyst in a retrieval bag; if enteric, resect the involved bowel segment and anastomose" },
      { n: 5, t: "Check", d: "Confirm bowel viability and hemostasis; close the mesenteric defect" }
    ],
    pearls: [
      "Define the cyst's relationship to the mesenteric vessels before dividing anything — enucleation must not devascularize the bowel",
      "Enteric/duplication cysts share the bowel's blood supply — plan a segmental resection rather than a risky shell-out",
      "Send the cyst for histology to exclude cystic mesothelioma or a malignant lymphangioma"
    ]
  },
  guidelines: [
    { src: "de Perrot classification of mesenteric and omental cysts" }
  ],
  pearls: [
    "A freely mobile, non-tender cystic abdominal mass with side-to-side (Tillaux) mobility is the classic bedside picture",
    "Complete excision is curative and is preferred over aspiration or marsupialization, which recur",
    "Always consider a segmental bowel resection when the cyst is enteric or shares the bowel's vasculature"
  ],
  mistakes: [
    "Aspirating or marsupializing rather than excising — high recurrence and misses malignancy",
    "Attempting enucleation of an enteric cyst and devascularizing the adjacent bowel",
    "Not considering torsion/volvulus in a child presenting with an acute abdomen and a mesenteric cyst"
  ]
}
]; // end ABDWALL_DISEASES

if (typeof module !== 'undefined') module.exports = { ABDWALL_DISEASES };
