// tmp_uppergi3.js — Missing Upper GI diseases (2 diseases)
// IDs: gastric-volvulus, small-bowel-obstruction

const UPPERGI3_DISEASES = [

{
  id: "gastric-volvulus",
  dept: "upper-gi",
  name: "Gastric Volvulus",
  latin: "Volvulus ventriculi",
  organ: "Stomach",
  severity: "critical",
  tags: ["upper-gi","stomach","volvulus","emergency","paraesophageal"],
  hero: "Life-threatening gastric rotation; Borchardt's triad (retching, epigastric pain, inability to pass NGT); emergency decompression ± surgery; underlying paraesophageal hernia must be repaired.",
  keypoints: [
    "Borchardt's triad: severe epigastric pain + unproductive retching + inability to pass NGT — pathognomonic for gastric volvulus",
    "Organoaxial rotation (60%): stomach rotates around long axis (cardia to pylorus); most common; associated with paraesophageal hernia",
    "Mesenteroaxial rotation (30%): rotates around short axis (lesser to greater curvature)",
    "Emergency: nasogastric tube decompression as initial step; if fails → endoscopic deflation; if fails → emergency surgery",
    "Acute gastric volvulus: 20% mortality without rapid intervention; ischemia and gastric necrosis risk",
    "Elective repair: gastropexy ± repair of paraesophageal hernia reduces recurrence; Nissen fundoplication if reflux present"
  ],
  differentials: [
    "Perforated peptic ulcer (peritonism, free gas)",
    "Acute pancreatitis (serum amylase/lipase elevated)",
    "Esophageal rupture/Boerhaave's syndrome (pneumomediastinum on CXR)",
    "High small bowel obstruction",
    "Inferior MI (ECG changes)",
    "Diaphragmatic hernia with visceral incarceration"
  ],
  mnemonics: [
    { name: "Borchardt's triad", text: "3 Rs: Retching (unproductive), Right upper abdominal pain, Resistance to NGT passage — cannot pass tube because cardia is obstructed" },
    { name: "Organoaxial vs Mesenteroaxial", text: "OrganoAxial = long Axis (cardia to pylorus); Meso = short axis (along mesogastrium) — 'OA = long, MA = short'" }
  ],
  overview: {
    definition: "Abnormal rotation of the stomach by more than 180° around its axis, causing obstruction and potential ischemia. Classified by axis of rotation: organoaxial (most common) and mesenteroaxial. May be acute (emergency) or chronic (intermittent symptoms).",
    epidemiology: "Rare: ~1/100,000/year. Bimodal: infants (associated with congenital diaphragmatic hernia) and adults >50 years (associated with paraesophageal hernia, lax gastric ligaments). M = F. Acute gastric volvulus: 20% mortality without treatment. 60% associated with paraesophageal hernia.",
    pathophysiology: "Normally, the stomach is anchored by gastrocolic, gastrohepatic, gastrophrenic, and gastrosplenic ligaments. Laxity or disruption of these ligaments (paraesophageal hernia, eventration of diaphragm, post-splenectomy) allows abnormal rotation. Organoaxial: greater curve rotates anteriorly and superiorly → cardia twists → gastric inlet obstruction. Complete obstruction → gastric distension → venous congestion → mucosal ischemia → full-thickness necrosis within hours.",
    classification: [
      "Organoaxial volvulus (60%) — rotation around long axis; cardia and pylorus fixed; antrum flips superiorly; associated with paraesophageal hernia",
      "Mesenteroaxial volvulus (30%) — rotation around short axis; antrum flips anteriorly over cardia; intermittent; may reduce spontaneously",
      "Combined (10%) — rotation around both axes"
    ]
  },
  diagnosis: {
    history: [
      "Sudden severe epigastric/chest pain — acute onset",
      "Unproductive retching — characteristic of gastric outlet obstruction (no vomiting as food cannot reach duodenum)",
      "NGT cannot be advanced past 30 cm — cannot enter stomach (obstructed cardia)",
      "History of paraesophageal hernia or hiatus hernia",
      "Previous Nissen fundoplication (slippage)",
      "Chronic intermittent bloating, early satiety, postprandial pain (chronic/mesenteroaxial)"
    ],
    examination: [
      "Distended upper abdomen — tympanitic; epigastric fullness",
      "Borchardt's triad: pain + unproductive retching + inability to pass NGT",
      "Peritonism (guarding, rigidity) → gastric necrosis; if absent initially, may develop rapidly",
      "Hemodynamic instability: tachycardia, hypotension → advanced ischemia",
      "CXR: gas-filled loop in chest (if intrathoracic — paraesophageal hernia); double air-fluid level in chest or upper abdomen"
    ],
    investigations: [
      { name: "CXR", role: "Double air-fluid level in chest/epigastrium; intrathoracic gas shadow; absent gastric bubble in left hemidiaphragm; confirms diagnosis in 80%" },
      { name: "CT abdomen/chest with IV contrast", role: "Defines rotation axis, degree, associated hiatus hernia, gastric ischemia (absent wall enhancement); guides operative planning" },
      { name: "Gastrografin swallow", role: "If CXR/CT equivocal — identifies obstruction level, confirms volvulus; water-soluble only (not barium — aspiration risk)" },
      { name: "Endoscopy (EGD)", role: "Diagnostic and potentially therapeutic (deflation/decompression); may be impossible due to rotation; risk of perforation in ischemic stomach — use carefully" },
      { name: "ABG, lactate, CBC, amylase", role: "Metabolic acidosis + raised lactate = gastric ischemia; amylase to exclude pancreatitis" }
    ]
  },
  criteria: {
    title: "Gastric Volvulus — Acute vs Chronic Management",
    items: [
      { k: "Acute with Borchardt's triad", v: "Emergency: attempted NGT decompression → endoscopic deflation → emergency surgery" },
      { k: "Gastric ischemia/necrosis", v: "Emergency laparotomy: detorsion + partial/total gastrectomy if non-viable; gastropexy" },
      { k: "Successful endoscopic deflation", v: "Elective laparoscopic repair of underlying hernia + gastropexy within days" },
      { k: "Chronic/recurrent intermittent volvulus", v: "Elective laparoscopic repair of associated paraesophageal hernia + gastropexy; fundoplication if reflux" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NGT decompression: first attempt (requires passing beyond cardia — may succeed in partial volvulus)"
    ],
    medical: [
      "IV resuscitation: aggressive fluid replacement; correct metabolic acidosis",
      "IV broad-spectrum antibiotics: before surgery if ischemia suspected",
      "Proton pump inhibitor infusion: post-operative"
    ],
    surgical: [
      { name: "Endoscopic decompression", when: "Acute gastric volvulus, NGT failed, no ischemia/necrosis, patient stable", notes: "EGD: advance endoscope past obstruction; insufflate and deflate; place NGT under direct vision. Temporary measure — definitive repair required within 48–72 hours." },
      { name: "Emergency laparotomy", when: "Failed endoscopic decompression, peritonism, hemodynamic instability, ischemia on CT", notes: "Detorse stomach. Assess viability: pink/viable → gastropexy; purple/non-viable → gastric resection (partial or total) with esophagojejunostomy. Repair diaphragmatic defect/paraesophageal hernia simultaneously if stable." },
      { name: "Laparoscopic repair (elective)", when: "After successful acute decompression, or chronic/recurrent volvulus", notes: "Laparoscopic reduction of paraesophageal hernia, crural repair, mesh cruroplasty, anterior gastropexy (attach anterior stomach to anterior abdominal wall) ± Nissen/partial fundoplication. Reduces recurrence from 70% to <10%." }
    ]
  },
  technique: {
    title: "Laparoscopic Repair of Paraesophageal Hernia + Gastropexy",
    prep: [
      "Anti-reflux position: reverse Trendelenburg, surgeon between legs",
      "5-port technique: optical port supraumbilical; working ports in upper quadrants; liver retractor",
      "Pre-operative CT/barium swallow to define anatomy"
    ],
    steps: [
      { n: 1, t: "Hernia sac reduction", d: "Enter lesser sac. Identify and reduce herniated stomach/greater omentum from chest. Excise hernia sac from mediastinum (reduces recurrence)." },
      { n: 2, t: "Esophageal mobilization", d: "Mobilize at least 3 cm of intraabdominal esophagus. Identify both vagal trunks. Create retro-esophageal window." },
      { n: 3, t: "Crural repair", d: "Approximate left and right crura with non-absorbable sutures (0-Ethibond, posterior to esophagus). Mesh reinforcement for large hiatus (>5 cm) — biologic mesh preferred (lower erosion risk)." },
      { n: 4, t: "Gastropexy", d: "Anterior gastropexy: suture anterior gastric wall to anterior abdominal wall (3–4 sutures of 0-Prolene). This prevents re-herniation and re-volvulus." },
      { n: 5, t: "Fundoplication (if reflux)", d: "Nissen (360°) or Toupet (270°) fundoplication if symptomatic GERD or documented acid reflux. Not mandatory for paraesophageal hernia repair alone." }
    ],
    pearls: [
      "Borchardt's triad is pathognomonic — do not delay definitive treatment attempting repeated NGT insertion",
      "If NGT cannot be passed, attempt endoscopic deflation as temporizing measure; definitive repair within 24–48 hours",
      "Emergency surgery: detorse first, then assess viability — necrotic fundus/body = partial gastrectomy; necrotic entire stomach = total gastrectomy (high mortality)",
      "Gastropexy alone without hernia repair: 70% recurrence; repair the hernia AND perform gastropexy"
    ]
  },
  guidelines: [
    { src: "SAGES Guidelines: Surgical Treatment of Gastresophageal Reflux Disease 2021" },
    { src: "EHS/EAES Guidelines: Hiatus hernia and paraesophageal hernia 2020" },
    { src: "NICE IPG188: Laparoscopic repair of paraesophageal hiatus hernia 2006" }
  ],
  pearls: [
    "Borchardt's triad: pathognomonic — act immediately; acute gastric volvulus kills within hours if untreated",
    "Organoaxial volvulus associated with paraesophageal hernia — repair the hernia at same surgery to prevent recurrence",
    "NGT failure = diagnostic clue for gastric volvulus; inability to advance NGT past 30 cm strongly suggests cardia obstruction",
    "After successful endoscopic deflation: do not discharge — schedule definitive laparoscopic repair within 48 hours"
  ],
  mistakes: [
    "Attempting forceful NGT insertion in gastric volvulus — risk of esophageal/gastric perforation; use gentle technique",
    "Treating acute gastric volvulus conservatively after endoscopic deflation without definitive surgery — 70% recurrence without hernia repair + gastropexy",
    "Delaying surgery for peritonism or hemodynamic instability — gastric necrosis is time-critical",
    "Not assessing viability at laparotomy before closing — non-viable stomach must be resected"
  ]
},

{
  id: "small-bowel-obstruction",
  dept: "upper-gi",
  name: "Small Bowel Obstruction",
  latin: "Ileus mechanicus intestini tenuis",
  organ: "Small bowel",
  severity: "critical",
  tags: ["upper-gi","small-bowel","obstruction","adhesions","laparotomy"],
  hero: "~75% due to adhesions from previous surgery; non-operative management (NGT, IV fluids) succeeds in 65–81% of partial SBO; operate for complete obstruction, failure to resolve at 48–72h, or signs of strangulation.",
  keypoints: [
    "Most common cause: adhesions (~75%); second: hernia (external) (15%); third: malignancy (10%)",
    "Water-soluble contrast follow-through (Gastrografin): diagnostic AND therapeutic in adhesional SBO — contrast reaching colon predicts non-operative resolution (sensitivity ~92%, specificity ~93%) and reduces need for surgery (OR ~0.44)",
    "Strangulation signs: fever, tachycardia, peritonism, raised lactate, localized tenderness — mandates urgent surgery",
    "Non-operative management (NGT, IVF): 65–81% of partial adhesional SBO resolves; of these, only 5–15% not improved by 48h",
    "Closed-loop obstruction: two-point obstruction — highest risk of ischemia; urgent surgery; may not respond to NGT decompression; CT shows U/C-shaped loop with radial mesenteric-vessel convergence to a torsion point",
    "CT with IV contrast: standard — identifies cause, closed loop, transition point, ischemia (absent mural enhancement)"
  ],
  differentials: [
    "Large bowel obstruction (peripheral gas on AXR; obstruction at different anatomical level)",
    "Paralytic ileus (diffuse dilation, no transition point on CT — post-operative, metabolic)",
    "Gastric volvulus (upper GI; Borchardt's triad)",
    "Mesenteric ischemia (pain out of proportion; post-prandial; atrial fibrillation)",
    "Intussusception (children: sausage-shaped mass; in adults: look for lead point — cancer, Meckel's)",
    "Gallstone ileus (SBO with ectopic gallstone on CT — Rigler's triad)",
    "SMA syndrome (compression of 3rd part of duodenum; young asthenic patients, recent weight loss)",
    "Malrotation / midgut volvulus (in adults without prior surgery — rare but consider)"
  ],
  mnemonics: [
    { name: "SBO causes", text: "AHIMSA: Adhesions (~75%), Hernia (15%), Intra-abdominal Malignancy (10%), Surgery-related (anastomotic stricture), Acute Crohn's, Appendix pathology" },
    { name: "Strangulation signs — think LIFT", text: "Lactate elevated, Isolated loop (closed), Fever/tachycardia, Tenderness localized — any one = surgery; do not wait 72 hours" }
  ],
  overview: {
    definition: "Mechanical obstruction of the small bowel preventing the normal passage of intestinal content. The obstruction may be intraluminal, intramural, or extrinsic (most common — adhesions). Strangulation refers to compromise of the blood supply, leading to bowel ischemia.",
    epidemiology: "Common surgical emergency: ~350,000 admissions/year in USA. Adhesiolysis + small-bowel resection are 2 of the 7 procedures making up 80% of US emergency general surgery. Adhesions (post-surgical) are the most common cause (~75%). External hernias account for 15% (inguinal, femoral, umbilical — if missed clinically). Malignancy (primary or metastatic) 10%. IBD (Crohn's stricture) 5%. Gallstone ileus 1–3% (elderly, gallstone history). Intussusception: children more common; in adults always suspect a lead-point tumor. Recurrence after surgical adhesiolysis ~5.5%/1y, 11.3%/3y, 13.5%/5y (reoperation 3.7/4.8/5.8%); <20% of conservatively-managed cases readmit over 5y.",
    pathophysiology: "Obstruction → proximal bowel gas/fluid accumulation → distension → increased intraluminal pressure → venous congestion → mucosal ischemia. Bacterial overgrowth in stagnant bowel, with documented bacterial translocation to regional nodes (significance unclear). Closed-loop obstruction (two-point fixation): most dangerous — pressure rises rapidly with no pressure-relief pathway → early mucosal ischemia → full-thickness necrosis → perforation. Strangulation: venous occlusion first (torsion around adhesion band) → arterial occlusion → infarction.",
    classification: [
      "Partial obstruction — some gas/fluid passes distal to obstruction",
      "Complete obstruction — no gas/fluid distal to obstruction",
      "Closed-loop obstruction — obstruction at two points (e.g., hernia, twisting around adhesion band) — highest risk",
      "Strangulated — ischemic bowel at obstruction site"
    ]
  },
  diagnosis: {
    history: [
      "Colicky abdominal pain: central, periumbilical, intermittent (peristaltic waves against obstruction)",
      "Vomiting: bilious (proximal obstruction) or feculent (distal obstruction or prolonged)",
      "Absolute constipation — distinguish from ileus (may still pass flatus in incomplete obstruction)",
      "Abdominal distension — minimal in proximal obstruction; maximal in distal",
      "Previous abdominal surgery (adhesions — most common cause)",
      "Known hernia (incarceration — second most common cause; examine hernia orifices)"
    ],
    examination: [
      "Abdominal distension — generally; less prominent in proximal SBO",
      "High-pitched tinkling bowel sounds (mechanical obstruction) or silent (strangulation/ileus)",
      "Central tenderness — non-specific; peritonism (localized guarding/rigidity) = strangulation until proven otherwise",
      "ALL hernia orifices examined: inguinal, femoral (EASY TO MISS), umbilical, incisional — incarcerated hernia is the second most common cause",
      "Fever, tachycardia: strangulation signs; do not wait for classic peritonism",
      "PR: rectal examination — empty rectum in complete obstruction; impacted stool in pseudo-obstruction"
    ],
    investigations: [
      { name: "AXR", role: "Central dilated loops >3 cm diameter with valvulae conniventes (mucosal folds); paucity of gas distally; look for ectopic gallstone (gallstone ileus). Sensitivity 70–80%." },
      { name: "CT abdomen/pelvis with IV contrast", role: "Standard investigation (sensitivity 80–90%, specificity 70–90%): transition point, cause (adhesion band, hernia, mass), closed-loop anatomy (C or U-shaped loop, radial mesenteric-vessel convergence), ischemia (absent mural enhancement, fat stranding), small-bowel-feces sign, free fluid/gas (perforation). Note: low sensitivity (<50%) for low-grade/partial SBO." },
      { name: "Enteroclysis / CT enteroclysis", role: "For subtle low-grade/partial SBO or suspected mural tumor: double-contrast enteroclysis is superior for the transition zone where standard CT is insensitive." },
      { name: "Water-soluble contrast follow-through (Gastrografin)", role: "After initial CT: contrast reaching colon predicts non-operative resolution (sensitivity ~92%, specificity ~93%) and reduces need for surgery (OR ~0.44); also therapeutic (reduces mucosal edema). AVOID in risk of aspiration or complete SBO with peritonism." },
      { name: "Serum lactate + ABG", role: "Raised lactate (>2 mmol/L) = ischemia concern; metabolic acidosis = advanced ischemia; dictates urgency" },
      { name: "CBC, electrolytes/BUN-Cr, CRP, amylase", role: "WBC raised in strangulation; electrolyte depletion from vomiting; amylase to exclude pancreatitis" }
    ]
  },
  criteria: {
    title: "SBO — Non-Operative vs Operative Decision",
    items: [
      { k: "Non-operative (NGT + IVF)", v: "Partial obstruction, adhesional SBO (no strangulation signs), first episode — trial 48–72 h" },
      { k: "Gastrografin challenge", v: "Adhesional SBO: 100 mL water-soluble contrast via NG, KUB at ~8h (repeat at 24h); contrast reaching colon predicts non-op success (sensitivity ~92%, specificity ~93%)" },
      { k: "Operate urgently", v: "Strangulation signs (fever, tachycardia, peritonism, raised lactate), closed-loop on CT, non-resolving at 72h, incarcerated hernia" },
      { k: "Immediate surgery", v: "Peritonitis, perforation (free gas/fluid), hemodynamically unstable" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NGT decompression: high-volume aspiration; reduces vomiting, gastric distension, and aspiration risk",
      "IV fluid resuscitation: crystalloid; replace ongoing NG losses (0.9% NaCl + KCl); correct hypokalemia",
      "NBM (nil by mouth): until resolution confirmed",
      "Serial examination every 4–6 hours: detect clinical deterioration early",
      "Gastrografin challenge: 100 mL water-soluble contrast via NG; abdominal X-ray (KUB) at ~8h, repeat at 24h; contrast reaching colon predicts resolution without surgery (sensitivity ~92%, specificity ~93%); surgery within 72h if not resolved"
    ],
    medical: [
      "Anti-emetics: ondansetron or cyclizine IV",
      "Analgesia: opioids provide relief; do NOT withhold analgesia for fear of masking signs — regular reassessment",
      "IV antibiotics: if strangulation suspected before surgery (cefuroxime + metronidazole)"
    ],
    surgical: [
      { name: "Laparotomy (open)", when: "Strangulation, peritonitis, perforation, failed non-operative management at 72 h, incarcerated hernia", notes: "Midline laparotomy. Identify transition point. Divide adhesion band (adhesiolysis with sharp dissection — scissor not diathermy to avoid thermal injury to bowel). Assess viability of strangulated segment. Resect non-viable bowel with primary anastomosis (if bowel viable and patient stable) or end stoma (peritonitis, unstable patient)." },
      { name: "Laparoscopic adhesiolysis", when: "Single adhesion band on CT, first adhesional SBO episode, no prior extensive surgery, patient stable", notes: "Laparoscopic approach reduces length of stay and post-op adhesions. Conversion rate 20–30% for complex adhesions. Enter abdomen carefully — adhesion to anterior wall at previous incision site (cut-down technique or port site remote from previous laparotomy)." },
      { name: "Hernia repair + bowel assessment", when: "Incarcerated external hernia (inguinal, femoral, umbilical)", notes: "Repair hernia; reduce and assess bowel viability. Non-viable bowel: resect and anastomose; protect anastomosis in contaminated field with defunctioning stoma. Strangulated femoral hernia: divide lacunar ligament medially (femoral vein is lateral — lacunar ligament division medial is safe)" },
      { name: "Bowel resection", when: "Non-viable strangulated segment confirmed (purple/black, no peristalsis, no pulsation in mesentery)", notes: "Resect with viable margins. Primary anastomosis in stable patient with healthy bowel ends. Damage control: Hartmann's/end stoma + delayed anastomosis if peritonitis or hemodynamic instability. Fluorescein/Doppler no better than clinical judgment for viability. If large-length viability uncertain, plan second-look laparotomy at 24–48h rather than over-resect." },
      { name: "Early postoperative SBO", when: "<30 days from prior surgery (esp. pelvic/colorectal) — usually partial", notes: "Favor extended non-operative management (2–3 weeks including TPN) as most resolve; reoperation early is technically hazardous (dense inflammatory adhesions)." },
      { name: "Malignant SBO (palliative)", when: "Known malignancy with SBO — note 25–33% actually have benign adhesions", notes: "Palliative resection or bypass; venting gastrostomy if unresectable/diffuse disease. Long nasoenteric tubes NOT favored (higher complications, no efficacy benefit over standard NG)." }
    ]
  },
  technique: {
    title: "Emergency Laparotomy for Adhesional SBO with Strangulation",
    prep: [
      "IV antibiotics at induction (cefuroxime + metronidazole)",
      "NG tube left in situ",
      "Urinary catheter; warming blanket; VTE prophylaxis"
    ],
    steps: [
      { n: 1, t: "Midline laparotomy", d: "Full-length midline incision. Careful entry if previous laparotomy — enter peritoneum away from previous scar or use cut-down technique at fascial level to avoid bowel injury." },
      { n: 2, t: "Initial exploration", d: "Identify site of obstruction: transition from dilated to collapsed bowel. Identify cause: adhesion band, internal hernia, tumor. Check all hernia orifices." },
      { n: 3, t: "Adhesiolysis", d: "Divide adhesion bands with sharp scissors (not diathermy — thermal spread damages bowel serosa). Divide bands at point of obstruction first, then decompress bowel by running proximally." },
      { n: 4, t: "Assess viability", d: "Viable: pink/red, peristalsis present, mesenteric pulsation present. Doubtful: release for 5 minutes wrapped in warm moist swabs — reassess. Non-viable: blue/black, no peristalsis, no pulsation, bowel sloughing." },
      { n: 5, t: "Resect non-viable bowel", d: "Resect with 5 cm healthy margins. Primary anastomosis (stapled or hand-sewn) if patient stable and bowel healthy. End stoma if contamination, unstable, or poor bowel ends." },
      { n: 6, t: "Decompress distended bowel", d: "If massive proximal distension: milk contents into stomach (aspirated by anesthetist via NGT) or enterotomy decompression before closure." },
      { n: 7, t: "Closure", d: "Mass closure (loop PDS, Jenkins rule: SWR ≥4:1). Wound VAC if contaminated." }
    ],
    pearls: [
      "Never withhold analgesia for fear of masking signs — serial clinical examination every 4–6 hours is more reliable; pain control is essential",
      "Examine ALL hernia orifices — missed incarcerated femoral hernia is a classic teaching case in SBO; femoral hernia is small and often overlooked",
      "Gastrografin has therapeutic effect: reduces mucosal edema and stimulates peristalsis — use it routinely in adhesional SBO not settling; check KUB at ~8h for contrast reaching colon",
      "Laparoscopic entry at prior midline laparotomy: use open (Hasson) technique or Palmer's point (left subcostal) to avoid bowel injury at previous scar",
      "Laparoscopic adhesiolysis (selected cases): LOS ~4 vs 10 days open, conversion 17–33%, bowel-injury risk not increased vs open",
      "Closed-loop obstruction on CT: do not delay for Gastrografin trial — operate promptly (U/C-shaped loop, radial mesenteric-vessel convergence to a torsion point = strangulation risk)"
    ]
  },
  guidelines: [
    { src: "WSACS/EAST Guidelines: Management of SBO 2013 (updated practice 2018)" },
    { src: "ACPGBI/NICE Emergency Laparotomy Pathway Quality Improvement Care (ELP-QIC) 2021" },
    { src: "ESCP/EHS Guidelines: Adhesive SBO 2013 (Bologna guidelines)" },
    { src: "Ceresoli et al. meta-analysis 2016: Water-soluble contrast for adhesive SBO (diagnostic + therapeutic role)" }
  ],
  pearls: [
    "Gastrografin follow-through: contrast reaching colon predicts resolution without surgery (sensitivity ~92%, specificity ~93%) and reduces surgery (OR ~0.44); both diagnostic and therapeutic; check KUB at ~8h",
    "Examine all hernia orifices in every patient with SBO — incarcerated femoral hernia is the classic missed diagnosis",
    "Strangulation does not require all classic signs — fever + tachycardia + raised lactate alone = operate; do not wait 72 hours",
    "Closed-loop obstruction on CT = surgical emergency (U/C-shaped loop, radial mesenteric-vessel convergence, small-bowel-feces sign) — Gastrografin trial not appropriate; risk of rapid progression to infarction",
    "Perioperative mortality is <5% in non-strangulating SBO but rises sharply once bowel is compromised — early recognition of strangulation is what saves lives",
    "Adhesion prevention: laparoscopy over open surgery where feasible (open carries ~4× the 5-year SBO risk); hyaluronan/Seprafilm reduces adhesion formation but SBO-reduction is unproven; do NOT wrap an anastomosis with barrier film (increases leak)"
  ],
  mistakes: [
    "Missing incarcerated hernia as the cause — examine inguinal, femoral, umbilical, and incisional orifices before attributing to adhesions",
    "Waiting 72 hours in a patient with strangulation signs — strangulation is a time-critical emergency; operate when signs appear",
    "Not using Gastrografin in adhesional SBO — reduces the need for surgery (OR ~0.44) and is both diagnostic and therapeutic",
    "Sharp dissection with diathermy during adhesiolysis — thermal spread damages bowel serosa; use scissors and controlled sharp dissection"
  ]
}

]; // end UPPERGI3_DISEASES

if (typeof module !== 'undefined') module.exports = { UPPERGI3_DISEASES };
