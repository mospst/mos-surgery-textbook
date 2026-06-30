// HERNIA DEPARTMENT — IDs: inguinal-hernia, femoral-hernia, umbilical-hernia, incisional-hernia, epigastric-hernia, strangulated-hernia, parastomal-hernia, spigelian-hernia, obturator-hernia, retroperitoneal-sarcoma
const HERNIA_DISEASES = [
{
  id: "inguinal-hernia",
  dept: "hernia",
  name: "Inguinal Hernia",
  latin: "Hernia inguinalis",
  organ: "Groin",
  severity: "low",
  tags: ["hernia","groin","common","laparoscopic"],
  hero: "Most common hernia. Indirect (lateral to inferior epigastric vessels, congenital) vs direct (medial, acquired weakness). Lichtenstein tension-free mesh repair (open) or TEP/TAPP (laparoscopic) are gold standard.",
  keypoints: [
    "Indirect: lateral to inferior epigastric vessels; through deep inguinal ring; congenital patent processus vaginalis",
    "Direct: medial to inferior epigastric vessels; Hesselbach's triangle; acquired fascial weakness",
    "Lichtenstein: open tension-free polypropylene mesh; recurrence <1%; standard for unilateral",
    "TEP/TAPP: laparoscopic; bilateral or recurrent inguinal hernias; same recurrence as Lichtenstein",
    "Strangulated inguinal hernia: emergency surgery; bowel viability assessment mandatory"
  ],
  differentials: ["Femoral hernia","Lipoma of cord","Inguinal lymphadenopathy","Undescended testis","Varicocele","Hydrocele","Femoral aneurysm","Psoas abscess"],
  mnemonics: [
    {name:"Hesselbach's triangle", text:"Lateral: inferior epigastric vessels; Medial: lateral edge of rectus; Inferior: inguinal ligament = direct hernia site"},
    {name:"TAPP vs TEP", text:"TAPP: Trans-Abdominal Pre-Peritoneal (enter abdo, then preperitoneal); TEP: Totally Extra-Peritoneal (never enter abdo)"}
  ],
  overview: {
    definition: "Protrusion of peritoneum ± abdominal contents through a defect in the posterior inguinal wall, either medial (direct) or lateral (indirect) to the inferior epigastric vessels.",
    epidemiology: "75% of all hernias. M:F = 9:1. Lifetime risk: 27% males; 3% females. Indirect most common in young males; direct more common with age. Right > left (right testis descends later).",
    pathophysiology: "Indirect: failure of obliteration of processus vaginalis → persistent connection from peritoneal cavity to scrotum. Direct: weakness/attenuation of posterior inguinal wall (transversalis fascia) from chronic raised IAP, collagen disorder, or ageing.",
    classification: [
      "Indirect inguinal hernia: lateral to inferior epigastric vessels",
      "Direct inguinal hernia: medial to IEV (Hesselbach's triangle)",
      "Combined (pantaloon): both direct and indirect components",
      "Complete: extends into scrotum",
      "Incomplete: within inguinal canal only",
      "EHS Classification: P (primary), R (recurrent); U (unilateral), B (bilateral); I/II/III by size",
      "Nyhus Classification — Type I: indirect, normal ring; Type II: indirect, dilated ring, intact floor; Type IIIa: direct; Type IIIb: indirect with floor defect (incl. pantaloon/large); Type IV: recurrent (a–d)"
    ]
  },
  diagnosis: {
    history: [
      "Groin swelling — may be intermittent, worse on standing/straining/coughing",
      "Aching discomfort, especially at end of day or after exercise",
      "Reducible (disappears when lying) vs irreducible (obstructed/strangulated)",
      "Risk factors: chronic cough, constipation, heavy lifting, prostatism, obesity",
      "Sudden irreducibility + pain ± vomiting = obstructed/strangulated"
    ],
    examination: [
      "Inspect with patient standing: groin swelling; cough impulse",
      "Palpate: confirm site, consistency, reducibility",
      "Indirect: finger through external ring — impulse felt at fingertip",
      "Direct: impulse felt against side of finger at external ring",
      "Scrotal extension; transillumination (hydrocele = transilluminates; hernia = does not)",
      "Auscultate if irreducible (bowel sounds in hernia sac)"
    ],
    investigations: [
      {name:"Clinical diagnosis", role:"Sufficient for typical presentation; no imaging required for straightforward reducible inguinal hernia"},
      {name:"Ultrasound groin", role:"Equivocal examination; occult hernia; distinguishes hernia from lipoma/lymph node/femoral aneurysm"},
      {name:"CT abdomen/pelvis", role:"Complex hernias; suspected bilateral; recurrent after previous repair; occult hernia in obese patient"},
      {name:"MRI (sports hernia)", role:"Groin pain without palpable hernia — exclude inguinal disruption, sportsman's groin, osteitis pubis"}
    ]
  },
  criteria: {
    title: "Indications for Surgery",
    items: [
      {k:"Symptomatic hernia", v:"Standard indication — any symptomatic inguinal hernia"},
      {k:"Irreducible/obstructed", v:"Semi-urgent or urgent surgery"},
      {k:"Strangulated", v:"Emergency surgery"},
      {k:"Asymptomatic", v:"Watchful waiting acceptable for minimally symptomatic (EHS guidelines); 20% become symptomatic requiring surgery within 5 years"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Watchful waiting for minimally symptomatic hernia in elderly/frail patients (Fitzgibbons trial: safe in the short term)",
      "Truss: palliate in poor surgical candidates; not curative"
    ],
    medical: [],
    surgical: [
      {name:"Lichtenstein tension-free mesh repair (open)", when:"Standard; unilateral inguinal hernia; local, spinal, or GA", notes:"Sutured polypropylene mesh over posterior inguinal wall; ilioinguinal nerve preservation; medial suture to pubic tubercle; external oblique closure; day-case"},
      {name:"TEP (Totally Extra-Peritoneal laparoscopic repair)", when:"Bilateral inguinal hernias; recurrent hernia after anterior repair; patient preference; reduces chronic groin pain risk", notes:"Balloon dissection creates preperitoneal space; 3 ports; large mesh (15×10cm) covers entire myopectineal orifice; no mesh fixation needed (staples increase neuralgia risk); no peritoneal entry"},
      {name:"TAPP (Trans-Abdominal Pre-Peritoneal)", when:"Same as TEP; also occult contralateral hernia assessment; surgeon preference", notes:"3 ports; enter peritoneum; create peritoneal flap; place preperitoneal mesh; close peritoneum over mesh"},
      {name:"Shouldice repair (tissue repair)", when:"Mesh contraindicated (infection); patient declines mesh; trained Shouldice surgeon", notes:"4-layer posterior wall repair with continuous prolene; recurrence 1–2% in specialist hands; higher in general surgeons"},
      {name:"Emergency repair (strangulated)", when:"Strangulated hernia — irreducible + systemic compromise", notes:"Open approach preferred; assess bowel viability at sac opening; resect non-viable bowel; mesh in contaminated field controversial (biological mesh or primary repair)"}
    ]
  },
  technique: {
    title: "Lichtenstein Inguinal Hernia Repair",
    prep: [
      "Supine; shave groin; GA or spinal or local (infiltration block)",
      "Oblique incision 1cm above and parallel to inguinal ligament, from pubic tubercle to ASIS midpoint"
    ],
    steps: [
      {n:1, t:"Approach", d:"Incise skin; divide Scarpa's fascia; open external oblique aponeurosis along fibres from external ring outward"},
      {n:2, t:"Identify cord structures", d:"Retract spermatic cord on rubber sling; identify and preserve ilioinguinal nerve (on anterior cord surface)"},
      {n:3, t:"Hernia sac", d:"Indirect: find sac at anteromedial cord; open sac; reduce contents; ligate and transect sac at deep ring; Direct: reduce and invert"},
      {n:4, t:"Mesh placement", d:"Polypropylene mesh (6×11cm); cut keyhole for cord; place over posterior inguinal wall (covering deep ring) with medial overlap on pubic tubercle"},
      {n:5, t:"Mesh fixation", d:"3-0 Prolene: suture medial end to pubic tubercle; running suture along inguinal ligament inferiorly; interrupted sutures superiorly to internal oblique (avoid ilioinguinal and iliohypogastric nerves)"},
      {n:6, t:"Tailoring keyhole", d:"Wrap mesh tails around cord (spermatic cord through keyhole); ensure deep ring reformed; tails sutured together"},
      {n:7, t:"Closure", d:"Close external oblique aponeurosis; Scarpa's fascia; subcuticular closure"}
    ],
    pearls: [
      "Pubic tubercle suture is the anchor — most important stitch; if missed, medial recurrence common",
      "Ilioinguinal and iliohypogastric nerve identification prevents post-op groin neuralgia",
      "Mesh must cover entire myopectineal orifice (not just defect) to prevent recurrence"
    ]
  },
  guidelines: [
    {src:"EHS (European Hernia Society) Guidelines 2018: Management of inguinal hernia in adult patients"},
    {src:"HerniaSurge Group 2018: International guidelines for inguinal hernia"},
    {src:"NICE: Laparoscopic surgery for inguinal hernia repair TA83"}
  ],
  pearls: [
    "Laparoscopic (TEP/TAPP) preferred for bilateral and recurrent — avoids previously scarred tissue plane",
    "Chronic groin pain after hernia repair (inguinodynia): most common long-term complication; mesh fixation and nerve injury risk",
    "Perioperative: avoid constipation and coughing post-op — straining increases recurrence risk in early healing period"
  ],
  mistakes: [
    "Not identifying ilioinguinal nerve — dividing it causes anaesthesia; trapping it causes chronic neuralgia",
    "Medial mesh not anchored to pubic tubercle — medial recurrence",
    "Tight keyhole strangling cord structures — testicular atrophy from ischaemic orchitis"
  ]
},
{
  id: "femoral-hernia",
  dept: "hernia",
  name: "Femoral Hernia",
  latin: "Hernia femoralis",
  organ: "Femoral canal",
  severity: "moderate",
  tags: ["hernia","groin","female","strangulation"],
  hero: "High risk of strangulation — all femoral hernias should be repaired promptly. F:M = 4:1. Passes through femoral canal medial to femoral vein. Easy to miss clinically.",
  keypoints: [
    "Boundaries of femoral canal: anterior (inguinal ligament), medial (lacunar ligament), lateral (femoral vein), posterior (pectineal ligament/Cooper's ligament)",
    "F:M = 4:1 but actually more common in men overall (fewer hernias in women but higher proportion are femoral)",
    "Strangulation risk: 22% at 3 months — highest of all abdominal hernias; always repair promptly",
    "Approaches: low (crural), high (McEvedy via inguinal), or preperitoneal (laparoscopic TEP/TAPP)",
    "Repair: plug mesh into femoral canal or Cooper's ligament repair (Lotheissen-McVay)"
  ],
  differentials: ["Inguinal hernia (direct/indirect)","Saphenous varix","Femoral aneurysm","Inguinal lymphadenopathy","Psoas abscess","Lipoma"],
  mnemonics: [
    {name:"Femoral canal NAVEL", text:"Lateral to medial: Nerve (femoral) + Artery (femoral) + Vein (femoral) + Empty space + Lymphatics = NAVEL; hernia enters Empty space"},
    {name:"High strangulation risk", text:"Femoral ring is narrow + rigid (inguinal ligament + lacunar ligament + Cooper's) = no room to expand = early strangulation"}
  ],
  overview: {
    definition: "Protrusion of peritoneum ± abdominal contents through the femoral ring into the femoral canal, below and lateral to the pubic tubercle, medial to the femoral vein.",
    epidemiology: "3% of all groin hernias. F:M = 4:1 in adults. Uncommon in children. Strangulation rate 22% within 3 months of diagnosis — highest of any abdominal hernia. 40% of femoral hernia admissions are strangulated.",
    pathophysiology: "Femoral ring is a fixed narrow opening with rigid walls (inguinal ligament anteriorly, Cooper's ligament posteriorly, femoral vein laterally, lacunar ligament medially). Contents cannot expand → strangulation from relatively minor intra-abdominal pressure increase.",
    classification: [
      "Reducible femoral hernia",
      "Irreducible (obstructed) femoral hernia",
      "Strangulated femoral hernia",
      "Richter's hernia: partial circumference of bowel wall herniated (no complete obstruction initially — partial strangulation can occur silently)"
    ]
  },
  diagnosis: {
    history: [
      "Groin/upper thigh swelling, below and lateral to pubic tubercle",
      "May be asymptomatic and small — easily missed",
      "Acute presentation: irreducible swelling + severe pain + nausea/vomiting = strangulation",
      "Richter's: partial bowel strangulation without SBO symptoms — may present with localised pain and swelling only"
    ],
    examination: [
      "Inspect: swelling below inguinal ligament, medial to femoral pulse",
      "Palpate: below and lateral to pubic tubercle (inguinal hernia is above and medial to pubic tubercle)",
      "Irreducibility, tenderness, erythema = strangulation",
      "In obese patients: often not palpable — high clinical suspicion from symptoms"
    ],
    investigations: [
      {name:"Ultrasound groin", role:"Confirms femoral hernia; distinguishes from inguinal/lymph node/femoral aneurysm; identifies contents"},
      {name:"CT abdomen/pelvis", role:"Strangulated femoral hernia: confirms diagnosis; assesses bowel viability; excludes other causes of SBO"},
      {name:"Clinical diagnosis", role:"Classic presentation: below inguinal ligament + irreducible = femoral hernia until proven otherwise"}
    ]
  },
  criteria: {
    title: "Femoral Canal Anatomy (Boundaries)",
    items: [
      {k:"Anterior", v:"Inguinal ligament"},
      {k:"Medial", v:"Lacunar (Gimbernat's) ligament — most dangerous: divide to reduce strangulated hernia"},
      {k:"Lateral", v:"Femoral vein"},
      {k:"Posterior", v:"Pectineal (Cooper's) ligament"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NO conservative management — all femoral hernias require prompt surgical repair due to high strangulation risk"
    ],
    medical: [],
    surgical: [
      {name:"Low (crural/Lockwood) approach", when:"Elective, small reducible femoral hernia", notes:"Incision directly over hernia; sac dissected from femoral canal; sac ligated; canal repaired with sutures to approximate Cooper's ligament to inguinal ligament; plug mesh into canal"},
      {name:"High (McEvedy) approach", when:"Strangulated femoral hernia — allows bowel resection through same incision if needed", notes:"Vertical incision above inguinal ligament; opens external oblique; retracts to expose preperitoneal space; reduces hernia from above; inguinal canal not opened; bowel assessment via preperitoneal space or separate laparotomy extension"},
      {name:"Inguinal (Lotheissen) approach", when:"Can be combined with inguinal hernia repair; poor choice for strangulated (limited bowel access)", notes:"Open inguinal canal; approach from above; divide inguinal ligament to access femoral canal; Cooper's ligament repair (McVay)"},
      {name:"Laparoscopic TEP/TAPP", when:"Elective femoral hernia; bilateral groin hernias; recurrent femoral hernia after open repair", notes:"Large preperitoneal mesh covers femoral ring + inguinal region; very low recurrence; preferred in fit patients"},
      {name:"Bowel resection (strangulated)", when:"Non-viable bowel at hernia reduction", notes:"Via McEvedy approach or extending to full laparotomy; resect and anastomose; mesh in contaminated field — use biological mesh or primary repair"}
    ]
  },
  technique: {
    title: "McEvedy Approach for Strangulated Femoral Hernia",
    prep: [
      "GA; supine; prep abdomen and groin (may need laparotomy extension)",
      "Mark vertical incision medial to ASIS, 5cm above inguinal ligament"
    ],
    steps: [
      {n:1, t:"Vertical incision", d:"5–6cm vertical incision; divide skin and fat; open anterior rectus sheath"},
      {n:2, t:"Retract rectus", d:"Retract rectus medially; enter preperitoneal space (extraperitoneal); push peritoneum superiorly"},
      {n:3, t:"Identify hernia sac", d:"Identify sac from above through femoral ring; gentle upward traction on sac"},
      {n:4, t:"Divide lacunar ligament if needed", d:"If hernia will not reduce: divide medial wall of femoral ring (lacunar ligament) medially (not laterally — femoral vein is lateral)"},
      {n:5, t:"Assess bowel", d:"Open sac; assess bowel viability (colour, Doppler, peristalsis); if questionable — warm towels × 5 min then reassess"},
      {n:6, t:"Bowel decision", d:"Viable: reduce into abdomen; Non-viable: resect via this incision or separate laparotomy"},
      {n:7, t:"Repair femoral canal", d:"Approximate Cooper's ligament to inguinal ligament with 1 or 2 non-absorbable sutures to obliterate femoral ring; or plug mesh"},
      {n:8, t:"Closure", d:"Close anterior rectus sheath; skin closure"}
    ],
    pearls: [
      "Lacunar ligament division: always medially — femoral vein is directly lateral and easily damaged",
      "Abnormal obturator artery (corona mortis variant): found in 15–30% — crosses medial aspect of femoral ring; risk of catastrophic haemorrhage",
      "Non-viable bowel appearing viable: Richter's — partial strangulation can recover; full-thickness non-viable = resect"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2018: Management of femoral hernia"},
    {src:"HerniaSurge Group 2018: Femoral hernia section"},
    {src:"RCGS: Elective and emergency femoral hernia repair"}
  ],
  pearls: [
    "Femoral hernia is below and lateral to pubic tubercle; inguinal hernia is above and medial — key clinical distinction",
    "All femoral hernias should be repaired promptly — 22% strangulation risk at 3 months",
    "Richter's hernia: partial bowel strangulation — can present with systemic sepsis without SBO symptoms"
  ],
  mistakes: [
    "Confusing femoral hernia with inguinal hernia — different approach required; inguinal repair misses femoral canal",
    "Dividing femoral vein (lateral) when trying to divide lacunar ligament — catastrophic haemorrhage",
    "Discharging strangulated femoral hernia for elective repair — this is an emergency"
  ]
},
{
  id: "umbilical-hernia",
  dept: "hernia",
  name: "Umbilical Hernia",
  latin: "Hernia umbilicalis",
  organ: "Umbilicus",
  severity: "low",
  tags: ["hernia","umbilicus","mesh","common"],
  hero: "Common in adults, especially obese or multiparous women. Small defects (<1cm) can strangulate fat/omentum. Mesh repair reduces recurrence for defects >1cm.",
  keypoints: [
    "True umbilical hernia: through umbilical ring (in adults, often previously closed then re-opened); vs paraumbilical hernia (through linea alba immediately adjacent to umbilicus)",
    "Primary repair (Mayo repair) for <1cm; mesh repair (open or laparoscopic) for ≥1cm",
    "Cirrhotic patients with ascites: high recurrence, high complication rate — treat ascites first",
    "Strangulation risk increases with small defects (narrow neck) — all symptomatic umbilical hernias should be repaired",
    "In children <5: watchful waiting — 95% close spontaneously"
  ],
  differentials: ["Epigastric hernia","Paraumbilical lipoma","Umbilical endometrioma (Sister Mary Joseph nodule — metastatic)","Diastasis recti","Patent urachus"],
  mnemonics: [
    {name:"Sister Mary Joseph nodule", text:"Hard umbilical nodule in patient with weight loss = metastatic intra-abdominal cancer (stomach, colorectal, pancreatic) until proven otherwise — biopsy"}
  ],
  overview: {
    definition: "Protrusion of peritoneum ± abdominal contents through the umbilical ring (true umbilical hernia) or immediately adjacent linea alba (paraumbilical hernia).",
    epidemiology: "Adult umbilical hernias: 175,000 repairs/year in USA. Predominantly women (multiparous), obese patients, cirrhotics (ascites). Incarceration rate: 3–5% at 5 years. Children: 10–20% of neonates; 95% close by 5 years.",
    pathophysiology: "Fascial weakness at umbilical ring from congenital ring incompleteness, pregnancy-related fascial stretching, increased IAP (obesity, ascites), or collagen disorders. Small defects with large sacs: high incarceration risk.",
    classification: [
      "Small: <1cm defect",
      "Medium: 1–3cm defect",
      "Large: >3cm defect",
      "Paraumbilical: lateral to umbilical ring, through adjacent linea alba"
    ]
  },
  diagnosis: {
    history: [
      "Visible or palpable umbilical swelling, worse with standing or straining",
      "Discomfort or pain — especially when hernia is tense",
      "Acute: sudden severe umbilical pain (incarcerated/strangulated omentum or bowel)",
      "Cirrhosis with ascites: recurrent reducible umbilical swelling (ascites-filled sac)"
    ],
    examination: [
      "Reducible swelling at or adjacent to umbilicus with cough impulse",
      "Define defect size with finger palpation",
      "Assess for incarceration or strangulation (tenderness, irreducibility, erythema)",
      "Assess for diastasis recti (wide midline gap without fascial defect)"
    ],
    investigations: [
      {name:"Clinical diagnosis", role:"Sufficient for typical presentation"},
      {name:"Ultrasound abdomen", role:"Equivocal; assess contents; exclude solid nodule (Sister Mary Joseph); assess diastasis recti"},
      {name:"CT abdomen", role:"Large umbilical hernias; cirrhotic patients; suspect malignancy; incarcerated/strangulated"}
    ]
  },
  criteria: {
    title: "Repair Approach by Defect Size (EHS)",
    items: [
      {k:"<1cm defect", v:"Primary suture repair (Mayo: overlapping fascial layers) OR suture closure"},
      {k:"1–3cm defect", v:"Mesh repair: open IPOM (intraperitoneal onlay mesh) or retromuscular sublay"},
      {k:">3cm defect", v:"Laparoscopic IPOM or open component separation + mesh"},
      {k:"Cirrhotics", v:"Treat ascites first; emergency repair for leaking/ruptured; elective repair after TIPS/diuretic optimisation"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Children <5 years: watchful waiting — 95% spontaneous closure",
      "Asymptomatic adults in high-risk (cirrhosis, frailty): conservative if not incarcerated",
      "Treat underlying ascites (diuretics, TIPS, transplant listing) before elective repair in cirrhotics"
    ],
    medical: [],
    surgical: [
      {name:"Primary suture repair (Mayo)", when:"Defects <1cm in children/young adults; reducible", notes:"Elliptical incision; reduce sac; excise sac; overlapping fascial layers with 1 Nylon/PDS (pants-over-vest technique); umbilicoplasty for cosmesis"},
      {name:"Open mesh repair (IPOM or retromuscular sublay)", when:"Defects ≥1cm in adults; cirrhotic or high recurrence risk", notes:"Polypropylene IPOM: mesh placed intraperitoneally with at least 3cm overlap all sides; tack/suture fixation; recurrence <5%; alternatively retromuscular placement (Rives-Stoppa plane)"},
      {name:"Laparoscopic IPOM", when:"Large umbilical hernias (>3cm); recurrent hernia; obese patients", notes:"3 ports; composite mesh (absorbable visceral surface) placed intraperitoneally; tacker + transfascial suture fixation; avoid excessive tension"},
      {name:"Emergency repair (incarcerated/strangulated)", when:"Strangulation: immediate surgery; incarceration: urgent repair", notes:"Open approach; reduce contents; assess bowel viability; mesh in contaminated field: controversial — use biological mesh or primary repair + delayed mesh"}
    ]
  },
  technique: {
    title: "Open Umbilical Hernia Repair with Sublay Mesh",
    prep: ["GA; supine; prep umbilical area"],
    steps: [
      {n:1, t:"Incision", d:"Infra- or circumumbilical semi-lunar incision; dissect to linea alba"},
      {n:2, t:"Sac dissection", d:"Circumferentially free hernia sac; open sac; reduce contents; assess viability"},
      {n:3, t:"Fascial clearance", d:"Clear 3–5cm of posterior rectus sheath/linea alba in all directions around defect"},
      {n:4, t:"Retromuscular space (sublay)", d:"Enter retromuscular plane (posterior rectus sheath layer) by splitting linea alba; create space 3–5cm in all directions"},
      {n:5, t:"Mesh placement", d:"Place polypropylene mesh in retromuscular space (sublay); no contact with viscera; overlap ≥3–5cm; suture at 4 corners"},
      {n:6, t:"Closure", d:"Close posterior fascia/linea alba over mesh with PDS; umbilicoplasty; skin closure; drain if large dead space"}
    ],
    pearls: [
      "Sublay (retromuscular) mesh placement: lower seroma rate, lower infection rate, lower recurrence than IPOM; becoming preferred technique",
      "Umbilicoplasty: preserve umbilical navel if possible for cosmesis; reconstruct if excised",
      "Cirrhotic umbilical hernia repair: rupture/leak of ascites is a life-threatening emergency; repair under emergency conditions with simultaneous ascitic drainage"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2015: Management of umbilical and epigastric hernias"},
    {src:"HerniaSurge 2018: Umbilical hernia section"},
    {src:"NICE: Laparoscopic repair of incisional hernia (applicable to large umbilical)"}
  ],
  pearls: [
    "Hard umbilical nodule ≠ hernia; biopsy if no cough impulse, hard, irregular — Sister Mary Joseph nodule",
    "Cirrhotics with umbilical hernia: plan repair AFTER ascites control; 30% recurrence if ascites not controlled",
    "Children: reassure parents; 95% close by 5 years; repair after age 5 if persists"
  ],
  mistakes: [
    "Primary repair for large umbilical hernias — high recurrence rate without mesh (>30%)",
    "Repairing umbilical hernia in uncontrolled cirrhotic ascites — wound leak and recurrence nearly certain",
    "Missing Sister Mary Joseph nodule — hard fixed umbilical 'hernia' may be metastatic cancer"
  ]
},
{
  id: "incisional-hernia",
  dept: "hernia",
  name: "Incisional Hernia",
  latin: "Hernia incisionalis",
  organ: "Abdominal wall",
  severity: "moderate",
  tags: ["hernia","abdominal-wall","mesh","laparoscopic"],
  hero: "Develops in 10–15% of all laparotomies. Risk factors: obesity, wound infection, poor closure. Large defects require component separation + mesh. Recurrence rate high without mesh.",
  keypoints: [
    "Occurs in 10–15% of laparotomies; higher with midline closure, obesity, wound infection",
    "Mesh repair: significantly lower recurrence than primary suture (10% vs 30–40%)",
    "Open retromuscular (Rives-Stoppa): gold standard for medium-large incisional hernias",
    "Component separation (anterior or posterior): for large defects requiring fascial mobilisation",
    "Laparoscopic IPOM: good for moderate size; higher recurrence than open retromuscular for large defects"
  ],
  differentials: ["Incisional hernia vs diastasis recti (no fascial defect in diastasis)","Seroma","Haematoma","Eventration","Suture granuloma"],
  mnemonics: [
    {name:"EHS Classification W1-4 + L (location)", text:"W1: <4cm; W2: 4–10cm; W3: >10cm; W4: loss of domain (>20% abdominal cavity in hernia sac)"}
  ],
  overview: {
    definition: "Any abdominal wall gap or defect, with or without a bulge, in the area of a postoperative scar, detectable on clinical examination or imaging.",
    epidemiology: "10–15% of all laparotomies. Higher risk: midline incisions (vs transverse), BMI >30, wound infection, diabetes, steroids, reoperation, emergency surgery. Presents 1–5 years post-surgery in most cases.",
    pathophysiology: "Failed fascial healing: wound infection, suture pull-through, inadequate suture (fine suture, absorbable suture, too-close bites), raised IAP. Initial fascial gap → progressive enlargement from ongoing tension forces.",
    classification: [
      "EHS Classification: Width (W1:<4cm; W2:4–10cm; W3:>10cm; W4:loss of domain) × Location (M1–5, L1–4)",
      "Primary vs recurrent",
      "Reducible vs incarcerated vs strangulated"
    ]
  },
  diagnosis: {
    history: [
      "Bulge at previous surgical scar — worse on standing/straining",
      "Pain or discomfort at scar",
      "Previous abdominal surgery (especially midline laparotomy)",
      "Risk factors: obesity, wound infection, steroids",
      "Acute: sudden irreducible painful bulge at scar = incarcerated/strangulated"
    ],
    examination: [
      "Visible and/or palpable bulge at surgical scar with cough impulse",
      "Palpate defect edge; estimate size",
      "Assess reducibility",
      "Valsalva manoeuvre reveals smaller defects",
      "Diastasis recti: midline bulge but no fascial defect (diffuse linea alba widening)"
    ],
    investigations: [
      {name:"CT abdomen wall (with Valsalva)", role:"Gold standard; delineates defect size, number, location; hernia sac contents; diastasis recti; muscle atrophy; loss of domain assessment"},
      {name:"Ultrasound abdominal wall", role:"Dynamic — assess during Valsalva; good for smaller defects; operator-dependent"},
      {name:"Clinical diagnosis alone", role:"Sufficient for straightforward cases; imaging before complex or recurrent repairs"}
    ]
  },
  criteria: {
    title: "Surgical Approach by Defect Size",
    items: [
      {k:"W1 <4cm", v:"Laparoscopic IPOM or open sublay mesh"},
      {k:"W2 4–10cm", v:"Open retromuscular (Rives-Stoppa) or laparoscopic IPOM"},
      {k:"W3 >10cm", v:"Open retromuscular + component separation (anterior or posterior); staged approach if obesity/contamination"},
      {k:"W4 loss of domain", v:"Multidisciplinary: weight loss; botulinum toxin to paralysis flanks; staged repair with component separation + biologic mesh; progressive pneumoperitoneum"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Abdominal support binder: symptomatic relief in elderly/frail; not curative",
      "Weight loss: reduce BMI to <35 before elective repair — dramatically reduces recurrence",
      "Smoking cessation: ≥4 weeks pre-op",
      "Botulinum toxin injection to lateral abdominal wall: relaxes muscles, allows gradual fascial edge mobilisation — used pre-op for large hernias"
    ],
    medical: [],
    surgical: [
      {name:"Open retromuscular (Rives-Stoppa) repair", when:"Standard for W2–W3 incisional hernias; gold standard for medium-large defects", notes:"Dissect retromuscular plane (posterior rectus sheath/transversalis fascia plane); extend 5–8cm beyond hernia edges; large polypropylene mesh placed in sublay position; close posterior fascia; close anterior fascia; drain"},
      {name:"Laparoscopic IPOM repair", when:"W1–W2; obese patients (avoids large open wounds); recurrent hernias", notes:"Composite mesh (absorbable visceral surface + polypropylene); overlap ≥5cm all sides; transfascial sutures + tacker fixation; reduce hernia contents first"},
      {name:"Component separation — anterior (Ramirez)", when:"Large defect requiring fascial mobilisation; W3+; intact rectus muscles", notes:"Release external oblique aponeurosis 2–3cm lateral to linea semilunaris; advances medial fascia 5–8cm each side; preserves neurovascular supply to rectus (perforating vessels) — minimise lateral skin undermining"},
      {name:"Posterior component separation (TARs — transversus abdominis release)", when:"Preferred over anterior CST; avoids large skin flaps; better mesh placement", notes:"From retromuscular plane: incise posterior rectus sheath lateral to linea semilunaris; release transversus abdominis; creates large retromuscular/preperitoneal space for mesh placement"},
      {name:"Biological mesh", when:"Contaminated field (stoma, bowel repair, infected mesh removal)", notes:"Slowly resorbed; higher recurrence than synthetic; appropriate in infected/contaminated settings"}
    ]
  },
  technique: {
    title: "Transversus Abdominis Release (TAR) — Posterior Component Separation",
    prep: [
      "Prehabilitation: weight loss, smoking cessation, botulinum if large hernia",
      "Mark hernia boundaries on skin; CT review in theatre",
      "GA; supine; prep entire abdomen"
    ],
    steps: [
      {n:1, t:"Midline incision", d:"Reopen previous scar; excise old scar tissue; enter peritoneum"},
      {n:2, t:"Hernia sac reduction", d:"Reduce hernia contents; assess bowel; excise excess sac"},
      {n:3, t:"Retromuscular plane dissection", d:"Enter retromuscular space (posterior rectus sheath surface); dissect laterally to linea semilunaris bilaterally"},
      {n:4, t:"TAR incision", d:"Incise posterior rectus sheath 1–2cm medial to linea semilunaris (releasing TAP); enter posterior preperitoneal/retroperitoneal space; release TAR bilaterally"},
      {n:5, t:"Large mesh placement", d:"Place large (30×30cm+) polypropylene mesh in retromuscular/preperitoneal space; overlap all defect edges by ≥5cm; fix with sutures at corners"},
      {n:6, t:"Posterior fascial closure", d:"Close posterior rectus sheath/peritoneum over mesh with running PDS (separates mesh from viscera)"},
      {n:7, t:"Anterior fascial closure", d:"Approximate anterior fascial edges (linea alba reconstruction) with running loop PDS; no tension if components separated adequately"},
      {n:8, t:"Drain and closure", d:"Closed suction drains bilateral retromuscular spaces; skin closure; abdominal binder post-op"}
    ],
    pearls: [
      "TAR provides 5–8cm additional fascial advancement per side WITHOUT compromising neurovascular supply",
      "Mesh overlap ≥5cm on all sides: most important technical factor for recurrence prevention",
      "Progressive pneumoperitoneum: 6–8 weeks pre-op in loss of domain — reduces visceral volume and stretches abdominal wall"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2014: Management of incisional hernia"},
    {src:"HerniaSurge 2018: Incisional hernia section"},
    {src:"IEHS: Update on component separation techniques"}
  ],
  pearls: [
    "Recurrence without mesh: 30–40%; with mesh: <10%; mesh is non-negotiable for incisional hernia repair",
    "CT pre-op for all incisional hernias >4cm: assess loss of domain, muscle atrophy, diastasis recti, multiple defects",
    "Loss of domain: bowel/fat >20% abdominal cavity in sac; general/bariatric approach multidisciplinary + staged"
  ],
  mistakes: [
    "Primary suture repair of large incisional hernia — 40% recurrence; always use mesh",
    "IPOM for large hernia without component separation — cannot close fascia = mesh directly under skin = fistula risk",
    "Inadequate mesh overlap — <3cm overlap leads to recurrence at mesh edge"
  ]
},
{
  id: "strangulated-hernia",
  dept: "hernia",
  name: "Strangulated Hernia",
  latin: "Hernia incarcerata/strangulata",
  organ: "Any hernia site",
  severity: "high",
  tags: ["hernia","emergency","strangulation","bowel"],
  hero: "Surgical emergency. Compromised blood supply to hernial contents. Bowel viability must be assessed at operation. Mortality 5–10x higher than elective hernia repair.",
  keypoints: [
    "Incarceration: irreducible but no vascular compromise; Strangulation: vascular compromise → ischaemia",
    "Clinical: painful, irreducible hernia + systemic signs of ischaemia (fever, leukocytosis, peritonism)",
    "Do NOT attempt forceful manual reduction of strangulated hernia (taxis) — risk of reducing non-viable bowel",
    "Assess bowel viability at surgery: viable = repair hernia; non-viable = resect bowel + DCS or primary anastomosis",
    "Femoral and obturator hernias have highest strangulation rate; inguinal lower"
  ],
  differentials: ["Incarcerated hernia (no vascular compromise)","Acutely painful inguinal lymphadenopathy","Haematoma in hernia sac","Torsion of appendix epiploica"],
  mnemonics: [
    {name:"Strangulation signs", text:"PINS: Pain (sudden severe) + Irreducible + Not transmitting cough impulse + Systemic signs (fever, vomiting) = strangulation until proven otherwise"}
  ],
  overview: {
    definition: "Hernia in which the blood supply to the herniated contents is compromised, leading to ischaemia, necrosis, and perforation if untreated.",
    epidemiology: "5% of inguinal hernia patients present as emergency; 20–40% of femoral hernias; 10–15% of umbilical hernias. Mortality: elective hernia repair <0.1%; strangulated hernia repair 5–10% (higher with bowel resection).",
    pathophysiology: "Narrow hernia neck compresses venous outflow → venous congestion → arterial compromise → bowel ischaemia → necrosis → perforation → peritonitis. Femoral hernias: rigid bony/ligamentous walls → rapid vascular compromise. Richter's: partial-circumference bowel — no full SBO but strangulation occurs.",
    classification: [
      "Strangulated inguinal hernia (most common absolute number)",
      "Strangulated femoral hernia (highest per-hernia incidence)",
      "Strangulated umbilical hernia (omentum most common content)",
      "Strangulated obturator hernia (elderly females)",
      "Richter's hernia: partial circumference strangulation — no full obstruction initially"
    ]
  },
  diagnosis: {
    history: [
      "Sudden increase in pain over known hernia",
      "Previously reducible hernia now irreducible",
      "Nausea, vomiting (SBO if bowel strangulated)",
      "Fever, increasing pain (ischaemia progressing)",
      "Absence of bowel sounds from hernia if previously audible"
    ],
    examination: [
      "Irreducible tender hernia — does NOT reduce on lying down",
      "Tense, erythematous overlying skin (late sign)",
      "No cough impulse transmitted",
      "Systemic: fever, tachycardia, hypotension (peritonism from perforation)",
      "Bowel obstruction: abdominal distension, high-pitched bowel sounds, vomiting"
    ],
    investigations: [
      {name:"Clinical diagnosis", role:"Classic presentation sufficient to proceed to emergency surgery"},
      {name:"CT abdomen/pelvis", role:"Stable patients: confirms strangulation; shows bowel wall thickening, lack of contrast enhancement (ischaemia), free fluid, pneumoperitoneum; also assesses other hernias"},
      {name:"FBC, U&E, LFTs, CRP, lactate", role:"Leukocytosis, elevated CRP, lactate (ischaemia) — guides urgency; pre-op baseline"},
      {name:"Erect CXR", role:"Pneumoperitoneum if perforated"}
    ]
  },
  criteria: {
    title: "Bowel Viability Assessment Intraoperatively",
    items: [
      {k:"Viable (keep)", v:"Pink/red colour; actively peristalts; palpable mesenteric pulse; bleeding from cut edge"},
      {k:"Warm compress test", v:"If questionable — warm saline-soaked swabs × 5 minutes; reassess"},
      {k:"Doppler assessment", v:"Mesenteric Doppler — arterial flow present = viable"},
      {k:"Non-viable (resect)", v:"Black, green, or grey; no peristalsis; no pulsation; no bleeding from cut edge"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "IV fluids and electrolyte correction",
      "IV antibiotics (broad-spectrum covering bowel organisms)",
      "NG tube (if SBO)",
      "Catheter (urine output monitoring)",
      "Analgesia"
    ],
    medical: [
      "Resuscitate and optimise before theatre — but do NOT delay unduly",
      "Bowel obstruction without signs of strangulation: controlled conservative approach acceptable short-term while monitoring",
      "Signs of strangulation: emergency surgery without delay"
    ],
    surgical: [
      {name:"Emergency hernia repair", when:"All strangulated hernias — no delay", notes:"Open approach preferred; approach tailored to hernia type; McEvedy for femoral; standard inguinal for inguinal; midline laparotomy if bowel resection anticipated"},
      {name:"Bowel resection + primary anastomosis", when:"Non-viable bowel with no peritonitis; clean field; physiologically stable", notes:"Resect non-viable segment; primary anastomosis; mesh repair of hernia (risk in contaminated field — use biological mesh)"},
      {name:"Damage control: stoma formation", when:"Peritonitis, perforation, unstable patient, gross contamination", notes:"Hartmann's or stoma; defer hernia repair or use biological mesh; staged approach"},
      {name:"Taxis (attempted gentle manual reduction)", when:"RELATIVE CONTRAINDICATION — only in early mild irreducibility without signs of strangulation; under sedation", notes:"Rarely appropriate; risk of reducing non-viable bowel en-masse without recognition; if reduction successful: monitor for peritonitis; must have surgical backup"}
    ]
  },
  technique: {
    title: "Intraoperative Management of Strangulated Bowel",
    prep: [
      "GA; full resuscitation commenced; broad-spectrum antibiotics given",
      "Position and incision based on hernia location"
    ],
    steps: [
      {n:1, t:"Hernia exposure", d:"Expose hernia sac; DO NOT reduce contents blindly — open sac to assess contents FIRST"},
      {n:2, t:"Sac opening", d:"Open sac carefully; strangulated bowel visible; do not reduce until fully assessed"},
      {n:3, t:"Narrow neck release", d:"Identify narrow hernia neck; incise to allow gentle delivery of bowel into wound for assessment; in femoral hernia: divide lacunar ligament medially"},
      {n:4, t:"Bowel assessment", d:"Inspect colour, peristalsis, Doppler; warm moist towels × 5 min if questionable"},
      {n:5, t:"Decision", d:"Viable → reduce into abdomen; Non-viable → resect via separate incision or laparotomy"},
      {n:6, t:"Hernia repair", d:"After bowel decision: repair hernia defect; mesh if clean field (polypropylene); biological mesh if contaminated; suture repair if heavily contaminated"},
      {n:7, t:"Drain", d:"Drain in sac/bed if contaminated; skin closure or leave open if grossly infected"}
    ],
    pearls: [
      "Bowel colour at reduction can improve: strangulated bowel may look ischaemic but improve with 5-minute warm compress",
      "When in doubt, resect: a segment of bowel is cheaper than anastomotic failure",
      "Richter's hernia: the knuckle of bowel may return into sac before it can be assessed — verify with laparoscopy or laparotomy extension"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2018: Emergency abdominal wall hernia"},
    {src:"WSES 2019: Emergency management of abdominal wall hernias"},
    {src:"EAST: Emergency hernia repair guidelines"}
  ],
  pearls: [
    "Strangulated hernia mortality: 5–10%; increases dramatically with bowel resection (15–20%) and perforation (>30%)",
    "Early surgery: the 6-hour window for bowel viability — after 6h ischaemia, bowel recovery unlikely",
    "Post-reduction monitoring: if taxis performed (cautiously), patient MUST be admitted and monitored for peritonitis"
  ],
  mistakes: [
    "Forceful taxis on strangulated hernia — can reduce gangrenous bowel into abdomen, causing delayed peritonitis",
    "Repairing hernia defect before assessing bowel viability — delays recognition of non-viable content",
    "Delaying emergency surgery to 'optimise' patient — strangulation progresses to perforation"
  ]
},
{
  id: "parastomal-hernia",
  dept: "hernia",
  name: "Parastomal Hernia",
  latin: "Hernia parastomica",
  organ: "Stoma site",
  severity: "moderate",
  tags: ["hernia","stoma","colostomy","ileostomy"],
  hero: "Hernia alongside a stoma, developing in 30–50% of colostomies. Most managed conservatively with stoma support garments. Surgery indicated for complications, pain, or stoma dysfunction.",
  keypoints: [
    "Occurs in 30–50% of colostomies; 5–15% of ileostomies within 5 years",
    "Risk factors: obesity, midline stoma (vs paramedian), large aperture, COPD",
    "Classification: Para-stomal (bowel alongside stoma), intrastomal (bowel herniated into stoma lumen), stomal prolapse often coexists",
    "Asymptomatic small PSH: conservative — support garments, weight loss",
    "Surgical options: local repair (high recurrence), stoma relocation, keyhole mesh repair (Sugarbaker or sandwich technique)"
  ],
  differentials: ["Peristomal abscess","Stoma prolapse","Stomal oedema/varices","Peristomal pyoderma gangrenosum"],
  mnemonics: [
    {name:"PSH repair options", text:"LOCAL (local fascial repair — high recurrence) vs RELOCATE (move stoma — creates new defect risk) vs MESH (Sugarbaker — best results)"}
  ],
  overview: {
    definition: "Incisional hernia adjacent to a stoma, where intra-abdominal contents herniate through the fascial defect alongside the stoma bowel.",
    epidemiology: "Colostomy PSH: 30–50% at 5 years; ileostomy PSH: 5–15%. Urostomy PSH: ~15%. Risk factors: obesity (BMI >30), large fascial opening, COPD, corticosteroids.",
    pathophysiology: "Stoma formation creates an abdominal wall defect — inevitable site of weakness. Mesh prophylaxis at formation reduces PSH incidence by 60–80%.",
    classification: [
      "Type I: intrastomal (small bowel or colon enters stoma lumen alongside stoma)",
      "Type II: subcutaneous (herniated content in subcutaneous plane)",
      "Type III: interstitial (between fascial layers)",
      "Type IV: interparietal (through previous stoma defect)"
    ]
  },
  diagnosis: {
    history: [
      "Progressive bulge around stoma — worse on standing",
      "Difficulty applying stoma appliance (leaks, skin irritation)",
      "Pain or discomfort around stoma",
      "Stoma dysfunction: difficulty with output, obstruction episodes",
      "Strangulation: acute severe pain, irreducible PSH, SBO symptoms"
    ],
    examination: [
      "Visible peristomal bulge — worse standing, Valsalva",
      "Palpate defect — fingers around stoma when patient coughs",
      "Irreducibility and tenderness suggest incarceration/strangulation",
      "Stoma viability assessment"
    ],
    investigations: [
      {name:"CT abdomen/pelvis", role:"Defines defect size; identifies hernia contents; rules out intra-abdominal pathology; guides surgical planning"},
      {name:"Clinical diagnosis", role:"Sufficient for straightforward presentations; CT for surgical planning in complex/large PSH"}
    ]
  },
  criteria: {
    title: "Surgical Indications for PSH Repair",
    items: [
      {k:"Strangulation/obstruction", v:"Emergency repair"},
      {k:"Intractable pain", v:"Elective repair"},
      {k:"Stoma appliance failure", v:"Refractory inability to maintain seal"},
      {k:"Large symptomatic PSH", v:"Quality of life impact"},
      {k:"Asymptomatic small PSH", v:"Conservative management (stoma belt/support garment)"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Stoma support garments / hernia belts: symptomatic control in non-operative candidates",
      "Weight loss: reduces symptoms and surgical risk",
      "Stoma nurse specialist: appliance optimisation, skin care, hernia belt fitting"
    ],
    medical: [],
    surgical: [
      {name:"Local fascial repair (primary suture)", when:"Small defect; contaminated field; poor candidate for mesh", notes:"High recurrence rate (50–70%); only when mesh is contraindicated; suture fascial defect around stoma"},
      {name:"Stoma relocation", when:"Small PSH + indications for stoma revision; other complications at stoma site", notes:"Creates new fascial defect — new PSH risk; 20–30% recurrence at new site; prophylactic mesh at new site recommended"},
      {name:"Mesh repair (Sugarbaker technique)", when:"Elective repair of symptomatic PSH; best evidence for recurrence reduction", notes:"Laparoscopic or open; large composite mesh placed intraperitoneally; bowel loops lateral through lateral slit in mesh; mesh overlaps fascial defect by ≥5cm; recurrence 20–30%"},
      {name:"Keyhole + Sugarbaker (sandwich technique)", when:"Large complex PSH; combines keyhole mesh + Sugarbaker IPOM", notes:"Best recurrence rates in small series; technically demanding"},
      {name:"Prophylactic mesh at stoma formation", when:"Increasingly recommended at elective colostomy formation (end colostomy)", notes:"Polypropylene or biological mesh placed around stoma at initial formation; reduces PSH by 60–80%; not universally adopted"}
    ]
  },
  technique: {
    title: "Laparoscopic Sugarbaker PSH Repair",
    prep: [
      "Empty stoma: low-residue diet pre-op; bowel prep",
      "Supine; stoma draped separately (contaminated)",
      "3–4 port access away from stoma site"
    ],
    steps: [
      {n:1, t:"Adhesiolysis", d:"Carefully lyse adhesions around stoma bowel and hernia sac; reduce hernia contents back into abdomen"},
      {n:2, t:"Measure defect", d:"Measure hernia defect at fascia level with laparoscopic ruler; mesh must exceed defect by ≥5cm on all sides"},
      {n:3, t:"Mesh preparation", d:"Cut composite mesh (non-adhesive visceral surface + polypropylene outer): slit from edge to centre hole (keyhole for stoma bowel passage)"},
      {n:4, t:"Sugarbaker placement", d:"Place mesh flat over hernia defect with stoma bowel exiting laterally through mesh slit (not through central hole) — Sugarbaker configuration reduces recurrence vs keyhole alone"},
      {n:5, t:"Mesh fixation", d:"Transfascial sutures at 4 corners + tacker fixation; ensure mesh is flat and wide overlap"},
      {n:6, t:"Check stoma function", d:"Confirm stoma bowel not kinked or compressed by mesh"}
    ],
    pearls: [
      "Sugarbaker (lateral slit) vs keyhole (central hole): Sugarbaker has lower recurrence — the loop of bowel compresses the slit closed on exertion",
      "Contamination from stoma: mark stoma wound as contaminated; use composite mesh with anti-adhesive layer on visceral surface",
      "PSH + stoma prolapse: combined repair at same operation — relocation or local repair + anti-prolapse procedure"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2018: Parastomal hernia"},
    {src:"ASCRS: Clinical practice guidelines for stoma complications"},
    {src:"Cochrane review: Mesh vs non-mesh repair of parastomal hernia"}
  ],
  pearls: [
    "Prophylactic mesh at stoma formation: reduces PSH 60–80%; evidence from multiple RCTs — consider for all permanent stomas",
    "PSH recurrence rate even with best mesh repair: 20–30%; counsel patients appropriately",
    "Stoma nurse referral pre-op: essential for site marking, patient education, and post-op appliance management"
  ],
  mistakes: [
    "Primary fascial repair without mesh — 50–70% recurrence",
    "Not using prophylactic mesh at stoma formation — high PSH rate preventable",
    "Keyhole mesh without Sugarbaker modification — higher recurrence than Sugarbaker lateral slit"
  ]
},
{
  id: "spigelian-hernia",
  dept: "hernia",
  name: "Spigelian Hernia",
  latin: "Hernia Spiegheli",
  organ: "Lateral abdominal wall",
  severity: "moderate",
  tags: ["hernia","rare","lateral","inter-muscular"],
  hero: "Rare hernia through the semilunar line (Spigel's fascia) at the lateral edge of the rectus sheath. Often occult — between muscle layers. High strangulation risk. CT confirms diagnosis.",
  keypoints: [
    "Herniates through semilunar line (Spigel's fascia) at junction of rectus abdominis and transversus abdominis aponeurosis",
    "Zone between umbilicus and anterior superior iliac spine: semicircular line of Douglas (no posterior rectus sheath) = weak zone",
    "Often inter-muscular (between external oblique and internal oblique) — not visible externally despite large size",
    "High strangulation rate (20%) due to narrow fascial defect",
    "Laparoscopic TEP or TAPP for repair; open sublay mesh also effective"
  ],
  differentials: ["Lateral incisional hernia","Rectus sheath haematoma","Myofascial pain","Desmoid tumour","Lipoma of abdominal wall"],
  mnemonics: [
    {name:"Spigelian location", text:"JUNCTION of rectus + transversus aponeurosis = semilunar line; BETWEEN umbilicus and ASIS = highest risk zone (below arcuate line)"}
  ],
  overview: {
    definition: "Hernia through the semilunar line (Spigel's fascia), the aponeurotic band at the lateral edge of the rectus abdominis, typically in the spigelian hernia zone below the umbilicus.",
    epidemiology: "Rare: <2% of all abdominal hernias. Age 40–70 yrs. Bilateral in 10%. Higher in obesity, multiparity, COPD, rapid weight loss.",
    pathophysiology: "Semilunar line: junction of transversus abdominis aponeurosis and internal oblique aponeurosis. Below arcuate line (no posterior rectus sheath): weakest point. Hernia passes between internal oblique and external oblique → stays subcutaneous beneath external oblique → often impalpable despite large size.",
    classification: [
      "Type I: small defect (<2cm) — high strangulation risk",
      "Type II: defect 2–4cm",
      "Type III: large defect (>4cm) — unusual for Spigelian",
      "Subcutaneous vs inter-muscular (impalpable)"
    ]
  },
  diagnosis: {
    history: [
      "Lateral abdominal pain or discomfort — typically lower lateral abdomen",
      "May be no visible swelling (inter-muscular variety)",
      "Intermittent pain worse with exertion",
      "Acute: sudden severe lateral abdominal pain = strangulation",
      "Obesity: may mask swelling entirely"
    ],
    examination: [
      "Lateral abdominal wall tenderness at semilunar line",
      "Palpable swelling (only if subcutaneous) — not transmitting cough impulse if trapped between oblique layers",
      "Valsalva may reveal occult swelling",
      "Often normal examination — diagnosis made on imaging"
    ],
    investigations: [
      {name:"CT abdomen/pelvis", role:"Diagnostic — identifies defect in semilunar line; hernia contents (fat, bowel); guides surgical planning; sensitivity >95%"},
      {name:"Ultrasound abdominal wall", role:"Dynamic assessment; good for small spigelian hernias in thin patients; less reliable in obese"},
      {name:"MRI abdominal wall", role:"Excellent soft tissue definition; useful for complex cases"}
    ]
  },
  criteria: {
    title: "Surgical Indication",
    items: [
      {k:"All Spigelian hernias", v:"Surgical repair recommended — high strangulation risk (20%)"},
      {k:"Asymptomatic discovered on imaging", v:"Repair still recommended given high risk of complication"},
      {k:"Strangulation", v:"Emergency repair"}
    ]
  },
  scoring: [],
  management: {
    conservative: [],
    medical: [],
    surgical: [
      {name:"Laparoscopic TEP or TAPP", when:"Standard; equivalent to inguinal hernia technique; preperitoneal mesh covers semilunar line defect", notes:"Large mesh (15×10cm or greater) placed in preperitoneal space covers entire myopectineal orifice including spigelian defect; same technique as inguinal TEP"},
      {name:"Open repair with sublay mesh", when:"Large spigelian hernia; surgeon preference; failed laparoscopic", notes:"Incision over defect; dissect through external oblique to find hernia sac; reduce contents; repair with mesh in sublay position (behind internal oblique)"},
      {name:"Open primary suture repair", when:"Small (<1cm) defect; contaminated field; poor mesh candidate", notes:"Suture closure of fascial defect; high recurrence expected for larger defects"}
    ]
  },
  technique: {
    title: "Open Sublay Repair of Spigelian Hernia",
    prep: ["Mark defect on skin using CT guidance or palpation", "GA; supine; prep abdominal wall"],
    steps: [
      {n:1, t:"Incision", d:"Transverse or vertical incision over defect; divide external oblique aponeurosis"},
      {n:2, t:"Hernia sac", d:"Identify sac between internal oblique and external oblique; reduce sac contents; ligate/excise excess sac"},
      {n:3, t:"Defect measurement", d:"Measure fascial defect in transversus/internal oblique layer"},
      {n:4, t:"Sublay mesh", d:"Develop space beneath internal oblique; place polypropylene mesh with ≥3cm overlap all sides; suture to fascia"},
      {n:5, t:"Fascial closure", d:"Suture close internal oblique over mesh; close external oblique; skin closure"}
    ],
    pearls: [
      "CT-guided incision planning: essential as hernia may be completely impalpable",
      "Confirm bowel viability at sac opening — high strangulation rate means bowel compromise possible",
      "Bilateral Spigelian hernias in 10%: examine and image contralateral side"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2018: Rare hernias — Spigelian section"},
    {src:"Spangen et al.: Spigelian hernia original description and management"}
  ],
  pearls: [
    "Spigelian hernia: pain out of proportion to visible swelling — think spigelian when lateral abdominal pain + normal examination",
    "CT is mandatory — this hernia is invisible on clinical examination alone in many cases",
    "High strangulation rate justifies repair even in asymptomatic patients"
  ],
  mistakes: [
    "Dismissing lateral abdominal pain as musculoskeletal without CT",
    "Missing contralateral Spigelian hernia — bilateral in 10%",
    "Primary repair without mesh for defects >1cm — high recurrence"
  ]
},
{
  id: "obturator-hernia",
  dept: "hernia",
  name: "Obturator Hernia",
  latin: "Hernia obturatoria",
  organ: "Obturator foramen",
  severity: "high",
  tags: ["hernia","rare","elderly","strangulation"],
  hero: "Rare hernia through obturator foramen. Classic: elderly thin multiparous woman with medial thigh pain. High strangulation rate. Howship-Romberg sign (medial thigh pain on internal rotation of hip) is pathognomonic.",
  keypoints: [
    "Elderly thin women: 6:1 F:M ratio; multiparous; lost the fat pad obturating foramen",
    "Howship-Romberg sign: medial thigh/knee pain reproduced by hip internal rotation or extension — obturator nerve compression by hernia",
    "Most present with SBO — hernia often not palpable",
    "CT diagnosis: demonstrates bowel in obturator canal medial to obturator externus",
    "High strangulation rate (30–40%); high mortality (13–40%) from delayed diagnosis in frail elderly"
  ],
  differentials: ["Inguinal hernia","Femoral hernia","Hip joint pathology","Obturator nerve entrapment","Pelvic abscess","Psoas abscess"],
  mnemonics: [
    {name:"Obturator hernia classic patient", text:"TOPS: Thin + Old + Multiparous + Strangulated (classic presentation)"},
    {name:"Howship-Romberg sign", text:"Hip internal rotation or extension → medial thigh/knee pain = obturator nerve compression = obturator hernia"}
  ],
  overview: {
    definition: "Protrusion of peritoneum ± abdominal contents through the obturator canal (within the obturator foramen, beneath the obturator membrane, lateral to the obturator nerve and vessels).",
    epidemiology: "Rare: <1% of all hernias. F:M = 6:1. Mean age 70–80 yrs. Emaciated, multiparous women. High mortality: 13–40% from delayed diagnosis and bowel gangrene in frail patients.",
    pathophysiology: "Obturator canal normally plugged by fat pad and obturator nerve. In emaciated elderly patients, loss of perivascular fat → canal opened → peritoneal sac protrudes → herniates into thigh medially. Narrow rigid canal → rapid strangulation.",
    classification: [
      "Reducible (rare — most present as emergencies)",
      "Irreducible",
      "Strangulated (most common presentation)",
      "Richter's variant (partial bowel wall)"
    ]
  },
  diagnosis: {
    history: [
      "Elderly thin woman with intermittent medial thigh pain (Howship-Romberg sign)",
      "Previous similar episodes",
      "Acute SBO presentation: vomiting, distension, absolute constipation (small bowel in obturator canal)",
      "Thigh/groin swelling very rare and difficult to palpate (deep hernia)"
    ],
    examination: [
      "Howship-Romberg sign: passive internal rotation or extension of hip reproduces medial thigh/knee pain",
      "Signs of SBO: abdominal distension, high-pitched bowel sounds, vomiting",
      "Medial thigh palpation: occasional deep tenderness but usually no palpable mass",
      "Rectal examination: rare — feel mass in lateral wall of pelvis"
    ],
    investigations: [
      {name:"CT abdomen/pelvis", role:"Diagnostic — bowel loop in obturator canal between pectineus and obturator externus; sensitivity >90%; demonstrates strangulation signs"},
      {name:"AXR", role:"SBO features if bowel incarcerated; non-specific"},
      {name:"Howship-Romberg test", role:"Clinical — positive in 50% of obturator hernias; specific when positive"}
    ]
  },
  criteria: {
    title: "Surgical Approach Options",
    items: [
      {k:"Extraperitoneal (preperitoneal)", v:"Pfannenstiel/lower midline; access obturator canal from above; good for bilateral; allows bowel assessment"},
      {k:"Transabdominal (midline laparotomy)", v:"Best for strangulated with SBO; allows full bowel assessment and resection"},
      {k:"Laparoscopic (TEP/TAPP)", v:"Elective; covers obturator canal with preperitoneal mesh"},
      {k:"Thigh (medial) approach", v:"Rarely used; limited access; poor for bowel resection"}
    ]
  },
  scoring: [],
  management: {
    conservative: [],
    medical: [
      "IV fluids, NG tube (SBO), antibiotics",
      "Resuscitate frail elderly patient before theatre"
    ],
    surgical: [
      {name:"Midline laparotomy", when:"Standard for strangulated obturator hernia — allows bowel assessment and resection", notes:"Reduce hernia by gentle traction from above (laparotomy); assess bowel viability; resect if non-viable; close obturator defect with suture or mesh via laparotomy"},
      {name:"Laparoscopic TAPP/TEP (elective)", when:"Elective — bilateral obturator canal coverage with mesh; low recurrence", notes:"Same as inguinal TEP — large preperitoneal mesh covers obturator foramen; particularly useful for bilateral obturator hernias"},
      {name:"Preperitoneal approach", when:"Selective elective cases; bilateral obturator hernias via lower midline or Pfannenstiel", notes:"Access preperitoneal space; reduce hernia; mesh placed over obturator canal"}
    ]
  },
  technique: {
    title: "Transabdominal Repair of Strangulated Obturator Hernia",
    prep: [
      "GA; supine; bowel prep not possible in emergency; IV antibiotics at induction",
      "Midline laparotomy"
    ],
    steps: [
      {n:1, t:"Laparotomy and SBO", d:"Open abdomen; identify distended small bowel; trace to point of obstruction"},
      {n:2, t:"Identify obturator hernia", d:"Follow herniated loop to obturator canal at lateral pelvic wall; small bowel enters obturator foramen"},
      {n:3, t:"Reduction", d:"Gentle traction from above; if stuck — extend obturator opening medially (obturator membrane, not vessels)"},
      {n:4, t:"Bowel viability", d:"Assess herniated loop; warm compress 5 min if questionable; resect if non-viable"},
      {n:5, t:"Hernia repair", d:"Suture obturator canal closed or plug with mesh; bilaterally inspect opposite side (bilateral obturator hernia in 10–15%)"},
      {n:6, t:"Bowel continuity", d:"Primary anastomosis if clean field and stable; Hartmann's/stoma if contaminated/unstable"}
    ],
    pearls: [
      "Bilateral obturator hernias in 10–15%: inspect contralateral obturator canal at every operation",
      "Obturator nerve and vessels: run superior to hernia in canal; protect when expanding canal medially",
      "Post-op Howship-Romberg relief: confirms successful reduction of obturator nerve compression"
    ]
  },
  guidelines: [
    {src:"EHS Guidelines 2018: Rare hernias — Obturator section"},
    {src:"WSES: Rare abdominal hernias"},
    {src:"Losanoff & Richman: Obturator hernia review"}
  ],
  pearls: [
    "Elderly thin woman + SBO with no previous surgery + medial thigh pain = obturator hernia until CT proves otherwise",
    "Howship-Romberg sign present in only 50% — do not rely on it to exclude the diagnosis",
    "High mortality in this demographic: early CT diagnosis + prompt surgery critical"
  ],
  mistakes: [
    "Attributing medial thigh pain to hip arthritis in elderly woman with SBO — missing obturator hernia",
    "Delayed surgery in frail patient — strangulation progresses rapidly in narrow obturator canal",
    "Not inspecting contralateral obturator canal — bilateral in 10–15%"
  ]
},
{
  id: "retroperitoneal-sarcoma",
  dept: "hernia",
  name: "Retroperitoneal Sarcoma",
  latin: "Sarcoma retroperitoneale",
  organ: "Retroperitoneum",
  severity: "high",
  tags: ["oncology","soft-tissue","retroperitoneum","rare"],
  hero: "Most common retroperitoneal sarcoma is liposarcoma (50%) followed by leiomyosarcoma. Complete resection (R0/R1) is the only curative treatment. Radiotherapy is primary adjuvant. Specialist multidisciplinary centre mandatory.",
  keypoints: [
    "Liposarcoma (50%) and leiomyosarcoma (25%) are the two most common histotypes",
    "Often large at presentation — retroperitoneal space is 'silent' and accommodates growth",
    "Complete surgical resection is the only potentially curative treatment",
    "Obtain tissue diagnosis (CT-guided biopsy) BEFORE surgery — histology changes management",
    "Specialist sarcoma centre treatment essential — referral mandatory for suspected retroperitoneal mass"
  ],
  differentials: ["Adrenal tumour","Lymphoma","Renal cell carcinoma","Desmoid tumour","Lymph node mass (metastatic)","Primary muscle tumour"],
  mnemonics: [
    {name:"Retroperitoneal sarcoma histotypes", text:"LILO: Liposarcoma (50%) + Leiomyosarcoma (25%) + Others (MFH/UPS, synovial, MPNST, solitary fibrous) = LILO rule of common types"}
  ],
  overview: {
    definition: "Malignant mesenchymal tumour arising from retroperitoneal soft tissue or organs, most commonly well-differentiated/dedifferentiated liposarcoma and leiomyosarcoma.",
    epidemiology: "Rare: 0.3/100,000/year. Retroperitoneal sarcomas: 15% of all soft tissue sarcomas. Peak age 50–60 yrs. Liposarcoma most common (50%); leiomyosarcoma (25%). 5-year survival: 30–50% depending on histotype.",
    pathophysiology: "Liposarcoma: MDM2/CDK4 amplification (well-differentiated/dedifferentiated); TP53 loss. Leiomyosarcoma: smooth muscle origin (IVC, retroperitoneal veins). Local recurrence main pattern of failure; haematogenous metastases (lung) in high-grade.",
    classification: [
      "Histotype classification: liposarcoma (WD/DD), leiomyosarcoma, MFH/UPS, MPNST, others",
      "Grade: G1 (low-grade), G2/G3 (high-grade) using FNCLCC grading",
      "AJCC/FNCLCC: Stage I–IV based on grade, size (T1 <5cm, T2 >5cm), and metastasis"
    ]
  },
  diagnosis: {
    history: [
      "Vague abdominal/back discomfort or fullness — often very late presentation (retroperitoneal space accommodates large tumours)",
      "Mass effect: abdominal distension, early satiety (gastric displacement), lower limb oedema (IVC or iliac vein compression), ureteric obstruction",
      "Leg pain or neurological symptoms (lumbar plexus involvement)",
      "Incidental finding on imaging for another indication",
      "B symptoms (fever, weight loss, night sweats) — suggest high-grade or lymphoma"
    ],
    examination: [
      "Palpable abdominal or flank mass — often non-tender",
      "Fixed, firm, irregular",
      "Lower extremity oedema (IVC/iliac vein obstruction)",
      "Bilateral renal angle fullness"
    ],
    investigations: [
      {name:"CT abdomen/pelvis (triphasic)", role:"First-line; characterises mass; fat density in liposarcoma; relationship to retroperitoneal organs; vascular involvement (IVC, aorta, iliac vessels)"},
      {name:"MRI abdomen/pelvis", role:"Better soft tissue characterisation; vascular map; involvement of major vessels, spine, psoas"},
      {name:"CT chest", role:"Pulmonary metastases assessment (especially leiomyosarcoma, high-grade)"},
      {name:"CT-guided core needle biopsy", role:"Mandatory for diagnosis before surgery; histotype determines grading, systemic therapy, and resectability approach"},
      {name:"PET-FDG", role:"High-grade tumours; staging; monitoring response to pre-operative therapy"},
      {name:"MDT review at specialist sarcoma centre", role:"Mandatory before any treatment planning"}
    ]
  },
  criteria: {
    title: "Resectability Assessment",
    items: [
      {k:"Resectable", v:"Complete (R0/R1) resection feasible; no distant metastases; major vessel reconstruction possible"},
      {k:"Borderline resectable", v:"Major vessel involvement (aorta, IVC) requiring reconstruction; multi-visceral resection needed"},
      {k:"Unresectable", v:"Extensive bilateral tumour involvement, distant metastases, unresectable vessel encasement"},
      {k:"Histotype-specific", v:"WD liposarcoma: low-grade, resect liberally; LMS: aggressive systemic behaviour, need CT chest staging"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "MDT specialist centre review: essential — improves outcomes",
      "Surveillance post-resection: CT chest/abdomen/pelvis every 3–6 months × 2 years then annually"
    ],
    medical: [
      "Neoadjuvant radiotherapy (external beam 50 Gy): reduces local recurrence — EORTC 62092 (STRASS trial): benefit in liposarcoma histotype; discuss at MDT",
      "Chemotherapy: doxorubicin + ifosfamide for high-grade/metastatic; response rates 30–50%",
      "Pazopanib: second-line for non-adipocytic high-grade STS"
    ],
    surgical: [
      {name:"Complete surgical resection (en-bloc)", when:"Potentially curative intent; no distant metastases; achievable R0/R1 margins", notes:"En-bloc resection of tumour + adjacent involved organs; ipsilateral kidney, colon, adrenal, spleen resected as needed (multi-visceral); preserve IVC if < 50% circumference — reconstruct if >50%; recurrence-free survival correlates with completeness of resection"},
      {name:"IVC resection and reconstruction", when:"Leiomyosarcoma of IVC or RPS with IVC involvement; IVC diameter >50% involvement", notes:"Infrarenal IVC: ligate (well tolerated); suprarenal: reconstruction with PTFE graft; cardiopulmonary bypass if suprarenal"},
      {name:"Extended multi-visceral resection", when:"Large retroperitoneal liposarcoma with organ involvement", notes:"Right colectomy/left colectomy, nephrectomy, adrenalectomy, splenectomy combined; higher morbidity but not prohibitive in specialist centres"},
      {name:"Palliative resection/debulking", when:"Low-grade well-differentiated liposarcoma with recurrent disease; no curative potential but reduces tumour burden", notes:"Debulking of WD liposarcoma may improve symptoms and survival despite incomplete resection"}
    ]
  },
  technique: {
    title: "En-bloc Resection of Retroperitoneal Sarcoma",
    prep: [
      "Pre-operative CT review: delineate vascular anatomy, organ involvement",
      "Pre-op ureteric stenting (ipsilateral) if ureteric involvement anticipated",
      "Bowel prep if colorectal resection planned",
      "Sarcoma specialist team; vascular surgery on standby if IVC involvement"
    ],
    steps: [
      {n:1, t:"Incision", d:"Midline laparotomy or bilateral subcostal; full exposure of retroperitoneum"},
      {n:2, t:"Mobilise colon", d:"Medial visceral rotation (Cattel-Braasch right side or Mattox left side manoeuvre); expose retroperitoneum fully"},
      {n:3, t:"Vascular assessment", d:"Identify aorta, IVC, iliac vessels; establish proximal and distal vascular control before dissection"},
      {n:4, t:"En-bloc resection", d:"Resect tumour with macroscopic margin; take all adjacent organs adherent to tumour (kidney, colon, adrenal, psoas if involved); no finger fracture or piecemeal resection"},
      {n:5, t:"Vascular reconstruction if needed", d:"IVC: ligate infrarenal if <50% circumference involvement; PTFE or femoral vein graft for suprarenal or large defects"},
      {n:6, t:"Ureteric continuity", d:"If ureter resected: ipsilateral ureteroneocystostomy or ileal conduit depending on extent"},
      {n:7, t:"Haemostasis and drain", d:"Meticulous retroperitoneal haemostasis; drain(s) to retroperitoneal space"}
    ],
    pearls: [
      "Compartmental resection: WD/DD liposarcoma — resect any macroscopically involved organ en-bloc; 'compartment surgery' principle",
      "Psoas muscle: tumour on psoas = resect involved portion; complete psoas resection causes significant functional deficit",
      "Local recurrence rate: WD liposarcoma 50% at 5 years despite R0 resection — surveillance imaging every 6 months"
    ]
  },
  guidelines: [
    {src:"ESMO/EURACAN Clinical Practice Guideline 2021: Soft tissue sarcomas"},
    {src:"TARPSWG (Trans-Atlantic RPS Working Group): Management of RPS"},
    {src:"NICE NG12: Suspected cancer — soft tissue sarcoma referral criteria"}
  ],
  pearls: [
    "Do not biopsy retroperitoneal mass before CT characterisation — liposarcoma has characteristic fat density; biopsy may be avoidable",
    "WD liposarcoma is technically unresectable in many cases but recurs as DD (dedifferentiated) — aggressive re-resection at recurrence still indicated",
    "All suspected retroperitoneal sarcomas must be referred to specialist sarcoma MDT — generalist resection associated with significantly higher recurrence and lower survival"
  ],
  mistakes: [
    "Operating on retroperitoneal mass without MDT review and histological diagnosis — wrong surgery for wrong diagnosis",
    "Piecemeal resection of sarcoma — seeds tumour cells; positive microscopic margins universally",
    "Not involving vascular surgery pre-operatively when IVC involvement on imaging"
  ]
}
];
