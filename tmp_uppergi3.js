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
    "Acute gastric volvulus: 20% mortality without rapid intervention; ischaemia and gastric necrosis risk",
    "Elective repair: gastropexy ± repair of paraesophageal hernia reduces recurrence; Nissen fundoplication if reflux present"
  ],
  differentials: [
    "Perforated peptic ulcer (peritonism, free gas)",
    "Acute pancreatitis (serum amylase/lipase elevated)",
    "Oesophageal rupture/Boerhaave's syndrome (pneumomediastinum on CXR)",
    "High small bowel obstruction",
    "Inferior MI (ECG changes)",
    "Diaphragmatic hernia with visceral incarceration"
  ],
  mnemonics: [
    { name: "Borchardt's triad", text: "3 Rs: Retching (unproductive), Right upper abdominal pain, Resistance to NGT passage — cannot pass tube because cardia is obstructed" },
    { name: "Organoaxial vs Mesenteroaxial", text: "OrganoAxial = long Axis (cardia to pylorus); Meso = short axis (along mesogastrium) — 'OA = long, MA = short'" }
  ],
  overview: {
    definition: "Abnormal rotation of the stomach by more than 180° around its axis, causing obstruction and potential ischaemia. Classified by axis of rotation: organoaxial (most common) and mesenteroaxial. May be acute (emergency) or chronic (intermittent symptoms).",
    epidemiology: "Rare: ~1/100,000/year. Bimodal: infants (associated with congenital diaphragmatic hernia) and adults >50 years (associated with paraesophageal hernia, lax gastric ligaments). M = F. Acute gastric volvulus: 20% mortality without treatment. 60% associated with paraesophageal hernia.",
    pathophysiology: "Normally, the stomach is anchored by gastrocolic, gastrohepatic, gastrophrenic, and gastrosplenic ligaments. Laxity or disruption of these ligaments (paraesophageal hernia, eventration of diaphragm, post-splenectomy) allows abnormal rotation. Organoaxial: greater curve rotates anteriorly and superiorly → cardia twists → gastric inlet obstruction. Complete obstruction → gastric distension → venous congestion → mucosal ischaemia → full-thickness necrosis within hours.",
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
      "Haemodynamic instability: tachycardia, hypotension → advanced ischaemia",
      "CXR: gas-filled loop in chest (if intrathoracic — paraesophageal hernia); double air-fluid level in chest or upper abdomen"
    ],
    investigations: [
      { name: "CXR", role: "Double air-fluid level in chest/epigastrium; intrathoracic gas shadow; absent gastric bubble in left hemidiaphragm; confirms diagnosis in 80%" },
      { name: "CT abdomen/chest with IV contrast", role: "Defines rotation axis, degree, associated hiatus hernia, gastric ischaemia (absent wall enhancement); guides operative planning" },
      { name: "Gastrografin swallow", role: "If CXR/CT equivocal — identifies obstruction level, confirms volvulus; water-soluble only (not barium — aspiration risk)" },
      { name: "Endoscopy (OGD)", role: "Diagnostic and potentially therapeutic (deflation/decompression); may be impossible due to rotation; risk of perforation in ischaemic stomach — use carefully" },
      { name: "ABG, lactate, FBC, amylase", role: "Metabolic acidosis + raised lactate = gastric ischaemia; amylase to exclude pancreatitis" }
    ]
  },
  criteria: {
    title: "Gastric Volvulus — Acute vs Chronic Management",
    items: [
      { k: "Acute with Borchardt's triad", v: "Emergency: attempted NGT decompression → endoscopic deflation → emergency surgery" },
      { k: "Gastric ischaemia/necrosis", v: "Emergency laparotomy: detorsion + partial/total gastrectomy if non-viable; gastropexy" },
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
      "IV broad-spectrum antibiotics: before surgery if ischaemia suspected",
      "Proton pump inhibitor infusion: post-operative"
    ],
    surgical: [
      { name: "Endoscopic decompression", when: "Acute gastric volvulus, NGT failed, no ischaemia/necrosis, patient stable", notes: "OGD: advance endoscope past obstruction; insufflate and deflate; place NGT under direct vision. Temporary measure — definitive repair required within 48–72 hours." },
      { name: "Emergency laparotomy", when: "Failed endoscopic decompression, peritonism, haemodynamic instability, ischaemia on CT", notes: "Detorse stomach. Assess viability: pink/viable → gastropexy; purple/non-viable → gastric resection (partial or total) with oesophagojejunostomy. Repair diaphragmatic defect/paraesophageal hernia simultaneously if stable." },
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
      { n: 2, t: "Oesophageal mobilisation", d: "Mobilise at least 3 cm of intraabdominal oesophagus. Identify both vagal trunks. Create retro-oesophageal window." },
      { n: 3, t: "Crural repair", d: "Approximate left and right crura with non-absorbable sutures (0-Ethibond, posterior to oesophagus). Mesh reinforcement for large hiatus (>5 cm) — biologic mesh preferred (lower erosion risk)." },
      { n: 4, t: "Gastropexy", d: "Anterior gastropexy: suture anterior gastric wall to anterior abdominal wall (3–4 sutures of 0-Prolene). This prevents re-herniation and re-volvulus." },
      { n: 5, t: "Fundoplication (if reflux)", d: "Nissen (360°) or Toupet (270°) fundoplication if symptomatic GORD or documented acid reflux. Not mandatory for paraesophageal hernia repair alone." }
    ],
    pearls: [
      "Borchardt's triad is pathognomonic — do not delay definitive treatment attempting repeated NGT insertion",
      "If NGT cannot be passed, attempt endoscopic deflation as temporising measure; definitive repair within 24–48 hours",
      "Emergency surgery: detorse first, then assess viability — necrotic fundus/body = partial gastrectomy; necrotic entire stomach = total gastrectomy (high mortality)",
      "Gastropexy alone without hernia repair: 70% recurrence; repair the hernia AND perform gastropexy"
    ]
  },
  guidelines: [
    { src: "SAGES Guidelines: Surgical Treatment of Gastroesophageal Reflux Disease 2021" },
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
    "Attempting forceful NGT insertion in gastric volvulus — risk of oesophageal/gastric perforation; use gentle technique",
    "Treating acute gastric volvulus conservatively after endoscopic deflation without definitive surgery — 70% recurrence without hernia repair + gastropexy",
    "Delaying surgery for peritonism or haemodynamic instability — gastric necrosis is time-critical",
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
  hero: "60% due to adhesions from previous surgery; non-operative management (NGT, IV fluids) succeeds in 60–70%; operate for complete obstruction, failure to resolve at 48–72h, or signs of strangulation.",
  keypoints: [
    "Most common cause: adhesions (60%); second: hernia (external) (15%); third: malignancy (10%)",
    "Water-soluble contrast follow-through (Gastrografin): diagnostic AND therapeutic in adhesional SBO (reduces need for surgery by 74% if contrast reaches colon at 24 hours — NELA data)",
    "Strangulation signs: fever, tachycardia, peritonism, raised lactate, localised tenderness — mandates urgent surgery",
    "Non-operative management (NGT, IVF): 60–70% of adhesional SBO resolves within 48–72 hours",
    "Closed-loop obstruction: two-point obstruction — highest risk of ischaemia; urgent surgery; may not respond to NGT decompression",
    "CT with IV contrast: standard — identifies cause, closed loop, transition point, ischaemia (absent mural enhancement)"
  ],
  differentials: [
    "Large bowel obstruction (peripheral gas on AXR; obstruction at different anatomical level)",
    "Paralytic ileus (diffuse dilation, no transition point on CT — post-operative, metabolic)",
    "Gastric volvulus (upper GI; Borchardt's triad)",
    "Mesenteric ischaemia (pain out of proportion; post-prandial; atrial fibrillation)",
    "Intussusception (children: sausage-shaped mass; in adults: look for lead point — cancer, Meckel's)",
    "Gallstone ileus (SBO with ectopic gallstone on CT — Rigler's triad)"
  ],
  mnemonics: [
    { name: "SBO causes", text: "AHIMSA: Adhesions (60%), Hernia (15%), Intra-abdominal Malignancy (10%), Surgery-related (anastomotic stricture), Acute Crohn's, Appendix pathology" },
    { name: "Strangulation signs — think LIFT", text: "Lactate elevated, Isolated loop (closed), Fever/tachycardia, Tenderness localised — any one = surgery; do not wait 72 hours" }
  ],
  overview: {
    definition: "Mechanical obstruction of the small bowel preventing the normal passage of intestinal content. The obstruction may be intraluminal, intramural, or extrinsic (most common — adhesions). Strangulation refers to compromise of the blood supply, leading to bowel ischaemia.",
    epidemiology: "Common surgical emergency: ~350,000 admissions/year in USA. Adhesions (post-surgical) are the most common cause (60%). External hernias account for 15% (inguinal, femoral, umbilical — if missed clinically). Malignancy (primary or metastatic) 10%. IBD (Crohn's stricture) 5%. Gallstone ileus 1–3% (elderly, gallstone history). Intussusception: children more common; in adults always suspect a lead-point tumour.",
    pathophysiology: "Obstruction → proximal bowel gas/fluid accumulation → distension → increased intraluminal pressure → venous congestion → mucosal ischaemia. Bacterial overgrowth in stagnant bowel. Closed-loop obstruction (two-point fixation): most dangerous — pressure rises rapidly with no pressure-relief pathway → early mucosal ischaemia → full-thickness necrosis → perforation. Strangulation: venous occlusion first (torsion around adhesion band) → arterial occlusion → infarction.",
    classification: [
      "Partial obstruction — some gas/fluid passes distal to obstruction",
      "Complete obstruction — no gas/fluid distal to obstruction",
      "Closed-loop obstruction — obstruction at two points (e.g., hernia, twisting around adhesion band) — highest risk",
      "Strangulated — ischaemic bowel at obstruction site"
    ]
  },
  diagnosis: {
    history: [
      "Colicky abdominal pain: central, periumbilical, intermittent (peristaltic waves against obstruction)",
      "Vomiting: bilious (proximal obstruction) or faeculent (distal obstruction or prolonged)",
      "Absolute constipation — distinguish from ileus (may still pass flatus in incomplete obstruction)",
      "Abdominal distension — minimal in proximal obstruction; maximal in distal",
      "Previous abdominal surgery (adhesions — most common cause)",
      "Known hernia (incarceration — second most common cause; examine hernia orifices)"
    ],
    examination: [
      "Abdominal distension — generally; less prominent in proximal SBO",
      "High-pitched tinkling bowel sounds (mechanical obstruction) or silent (strangulation/ileus)",
      "Central tenderness — non-specific; peritonism (localised guarding/rigidity) = strangulation until proven otherwise",
      "ALL hernia orifices examined: inguinal, femoral (EASY TO MISS), umbilical, incisional — incarcerated hernia is the second most common cause",
      "Fever, tachycardia: strangulation signs; do not wait for classic peritonism",
      "PR: rectal examination — empty rectum in complete obstruction; impacted stool in pseudo-obstruction"
    ],
    investigations: [
      { name: "AXR", role: "Central dilated loops with valvulae conniventes (mucosal folds); paucity of gas distally; look for ectopic gallstone (gallstone ileus)" },
      { name: "CT abdomen/pelvis with IV contrast", role: "Standard investigation: transition point, cause (adhesion band, hernia, mass), closed-loop anatomy (C or U-shaped loop), ischaemia (absent mural enhancement, fat stranding), free fluid/gas (perforation)" },
      { name: "Water-soluble contrast follow-through (Gastrografin)", role: "After initial CT: if contrast reaches colon at 24 hours → 97% chance of resolving without surgery; therapeutic (reduces mucosal oedema); prognostic. AVOID in risk of aspiration or complete SBO with peritonism." },
      { name: "Serum lactate + ABG", role: "Raised lactate (>2 mmol/L) = ischaemia concern; metabolic acidosis = advanced ischaemia; dictates urgency" },
      { name: "FBC, U&E, CRP, amylase", role: "WBC raised in strangulation; electrolyte depletion from vomiting; amylase to exclude pancreatitis" }
    ]
  },
  criteria: {
    title: "SBO — Non-Operative vs Operative Decision",
    items: [
      { k: "Non-operative (NGT + IVF)", v: "Partial obstruction, adhesional SBO (no strangulation signs), first episode — trial 48–72 h" },
      { k: "Gastrografin challenge", v: "Adhesional complete SBO: water-soluble contrast at 12–24h; contrast to colon = non-op success likely (97%)" },
      { k: "Operate urgently", v: "Strangulation signs (fever, tachycardia, peritonism, raised lactate), closed-loop on CT, non-resolving at 72h, incarcerated hernia" },
      { k: "Immediate surgery", v: "Peritonitis, perforation (free gas/fluid), haemodynamically unstable" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "NGT decompression: high-volume aspiration; reduces vomiting, gastric distension, and aspiration risk",
      "IV fluid resuscitation: crystalloid; replace ongoing NG losses (0.9% NaCl + KCl); correct hypokalaemia",
      "NBM (nil by mouth): until resolution confirmed",
      "Serial examination every 4–6 hours: detect clinical deterioration early",
      "Gastrografin challenge: oral/NGT 100 mL Gastrografin at 12–24h; AXR at 24h; contrast to colon = 97% resolution rate without surgery"
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
      { name: "Bowel resection", when: "Non-viable strangulated segment confirmed (purple/black, no peristalsis, no pulsation in mesentery)", notes: "Resect with viable margins. Primary anastomosis in stable patient with healthy bowel ends. Damage control: Hartmann's/end stoma + delayed anastomosis if peritonitis or haemodynamic instability." }
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
      { n: 2, t: "Initial exploration", d: "Identify site of obstruction: transition from dilated to collapsed bowel. Identify cause: adhesion band, internal hernia, tumour. Check all hernia orifices." },
      { n: 3, t: "Adhesiolysis", d: "Divide adhesion bands with sharp scissors (not diathermy — thermal spread damages bowel serosa). Divide bands at point of obstruction first, then decompress bowel by running proximally." },
      { n: 4, t: "Assess viability", d: "Viable: pink/red, peristalsis present, mesenteric pulsation present. Doubtful: release for 5 minutes wrapped in warm moist swabs — reassess. Non-viable: blue/black, no peristalsis, no pulsation, bowel sloughing." },
      { n: 5, t: "Resect non-viable bowel", d: "Resect with 5 cm healthy margins. Primary anastomosis (stapled or hand-sewn) if patient stable and bowel healthy. End stoma if contamination, unstable, or poor bowel ends." },
      { n: 6, t: "Decompress distended bowel", d: "If massive proximal distension: milk contents into stomach (aspirated by anaesthetist via NGT) or enterotomy decompression before closure." },
      { n: 7, t: "Closure", d: "Mass closure (loop PDS, Jenkins rule: SWR ≥4:1). Wound VAC if contaminated." }
    ],
    pearls: [
      "Never withhold analgesia for fear of masking signs — serial clinical examination every 4–6 hours is more reliable; pain control is essential",
      "Examine ALL hernia orifices — missed incarcerated femoral hernia is a classic teaching case in SBO; femoral hernia is small and often overlooked",
      "Gastrografin has therapeutic effect: reduces mucosal oedema and stimulates peristalsis — use it routinely in adhesional SBO not settling at 24 hours",
      "Laparoscopic entry at prior midline laparotomy: use open (Hasson) technique or Palmer's point (left subcostal) to avoid bowel injury at previous scar",
      "Closed-loop obstruction on CT: do not delay for Gastrografin trial — operate promptly"
    ]
  },
  guidelines: [
    { src: "WSACS/EAST Guidelines: Management of SBO 2013 (updated practice 2018)" },
    { src: "ACPGBI/NICE Emergency Laparotomy Pathway Quality Improvement Care (ELP-QIC) 2021" },
    { src: "ESCP/EHS Guidelines: Adhesive SBO 2013 (Bologna guidelines)" },
    { src: "Cochrane Review: Water-soluble contrast for adhesional SBO — Abbas et al. 2007" }
  ],
  pearls: [
    "Gastrografin follow-through: if contrast reaches colon at 24 hours → 97% resolution without surgery; both diagnostic and therapeutic",
    "Examine all hernia orifices in every patient with SBO — incarcerated femoral hernia is the classic missed diagnosis",
    "Strangulation does not require all classic signs — fever + tachycardia + raised lactate alone = operate; do not wait 72 hours",
    "Closed-loop obstruction on CT = surgical emergency — Gastrografin trial not appropriate; risk of rapid progression to infarction"
  ],
  mistakes: [
    "Missing incarcerated hernia as the cause — examine inguinal, femoral, umbilical, and incisional orifices before attributing to adhesions",
    "Waiting 72 hours in a patient with strangulation signs — strangulation is a time-critical emergency; operate when signs appear",
    "Not using Gastrografin in adhesional SBO — reduces surgical rate by 74% and is both diagnostic and therapeutic",
    "Sharp dissection with diathermy during adhesiolysis — thermal spread damages bowel serosa; use scissors and controlled sharp dissection"
  ]
}

]; // end UPPERGI3_DISEASES

if (typeof module !== 'undefined') module.exports = { UPPERGI3_DISEASES };
