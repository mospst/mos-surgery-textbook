// tmp_trauma3.js — Trauma subtopics (Schwartz 11e Ch7)
// IDs: blunt-cerebrovascular-injury, penetrating-neck-injury, reboa, extremity-vascular-trauma, pancreaticoduodenal-trauma
// All dept "trauma" (Trauma & Acute Care)

const TRAUMA3_DISEASES = [
{
  id: "blunt-cerebrovascular-injury",
  dept: "trauma",
  name: "Blunt Cerebrovascular Injury (BCVI)",
  latin: "Laesio cerebrovascularis contusa",
  organ: "Carotid / vertebral artery",
  severity: "high",
  tags: ["trauma","vascular","stroke","neck","BCVI"],
  hero: "Blunt injury to the carotid or vertebral arteries that is clinically silent until it throws an embolic stroke. Screen the at-risk patient with CT angiography, grade with the Denver scale, and start antithrombotics early — this is the intervention that prevents stroke.",
  keypoints: [
    "Injury to the carotid and/or vertebral arteries from a blunt mechanism (hyperextension/rotation, direct blow, seatbelt, hanging)",
    "Often asymptomatic initially — a symptom-free interval precedes embolic stroke, which is why screening matters",
    "Denver grading I–V: I = wall irregularity/<25% narrowing; II = intraluminal thrombus/flap or ≥25% stenosis; III = pseudoaneurysm; IV = occlusion; V = transection with active extravasation",
    "CT angiography of the neck is the standard screening test; digital subtraction angiography remains the gold standard",
    "Antithrombotic therapy (heparin or antiplatelet) is the key stroke-preventing treatment for grades I–IV",
    "Endovascular stenting is selective (some grade II–III/pseudoaneurysms); grade V usually needs emergent endovascular or surgical control",
    "Screen using expanded Denver criteria — many injuries occur in patients with no external neck signs"
  ],
  differentials: [
    "Primary traumatic brain injury (concurrent and common)",
    "Ischemic stroke from another embolic source",
    "Cervical spine injury with cord involvement",
    "Carotid dissection from another cause",
    "Intracranial hemorrhage"
  ],
  mnemonics: [
    { name: "Denver grade I–V", text: "I irregularity → II thrombus/flap or ≥25% stenosis → III pseudoaneurysm → IV occlusion → V transection/extravasation" },
    { name: "Screen the risk factors", text: "LeFort II/III, mandible fx, basilar/occipital-condyle fx, C-spine fx/subluxation, GCS<6, near-hanging, seatbelt neck sign" }
  ],
  overview: {
    definition: "Traumatic injury to the extracranial carotid or vertebral arteries caused by blunt force, ranging from intimal irregularity to complete transection, with a propensity to cause thromboembolic stroke.",
    epidemiology: "Found in roughly 1–2% of blunt trauma patients, higher with severe mechanisms. Stroke risk rises with injury grade and is greatest in the first hours to days. Increasingly detected as screening protocols have broadened.",
    pathophysiology: "Sudden hyperextension, rotation, or direct compression stretches or tears the arterial wall. An intimal tear exposes thrombogenic subendothelium, forming platelet-rich thrombus that can embolize distally and cause ischemic stroke; progressive dissection can produce pseudoaneurysm or occlusion. Vertebral injuries are frequently associated with cervical-spine fractures involving the transverse foramina.",
    classification: [
      "Denver grade I — luminal irregularity or dissection with <25% narrowing",
      "Denver grade II — intraluminal thrombus/raised intimal flap or ≥25% stenosis",
      "Denver grade III — pseudoaneurysm",
      "Denver grade IV — complete occlusion",
      "Denver grade V — transection with active extravasation (often fatal / arteriovenous fistula)"
    ]
  },
  diagnosis: {
    history: [
      "High-energy mechanism: motor-vehicle crash, hanging/strangulation, direct cervical blow",
      "Presence of expanded Denver screening risk factors (see mnemonic)",
      "Neurological symptoms incongruent with head CT findings",
      "Seatbelt sign or soft-tissue injury of the neck"
    ],
    examination: [
      "Cervical bruit or expanding neck hematoma",
      "Focal neurological deficit or transient ischemic symptoms",
      "Horner syndrome (carotid injury)",
      "Neurological deficit not explained by the brain CT should trigger screening"
    ],
    investigations: [
      { name: "CT angiography (neck)", role: "Standard screening and grading test in stable patients; multidetector CTA detects most injuries and assigns the Denver grade" },
      { name: "Digital subtraction angiography (DSA)", role: "Gold standard; used when CTA is equivocal and for endovascular treatment planning/delivery" },
      { name: "MRI / MRA", role: "Adjunct for detecting associated brain infarction and for follow-up of injuries" },
      { name: "Duplex ultrasound", role: "Limited role — cannot reliably assess the skull-base and vertebral segments; not a primary screen" }
    ]
  },
  criteria: {
    title: "Grade-Directed Management",
    items: [
      { k: "Grade I–II", v: "Antithrombotics (heparin or antiplatelet); repeat imaging to assess healing/progression" },
      { k: "Grade III (pseudoaneurysm)", v: "Antithrombotics; endovascular stent for enlarging or accessible lesions" },
      { k: "Grade IV (occlusion)", v: "Antithrombotics; usually managed medically" },
      { k: "Grade V (transection/extravasation)", v: "Emergent endovascular occlusion/stent or surgery" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Serial neurological observation and repeat vascular imaging (typically at ~7–10 days) to document healing or progression",
      "Multidisciplinary decision-making balancing antithrombotic benefit against bleeding risk from concomitant injuries"
    ],
    medical: [
      "Antithrombotic therapy is the mainstay for grades I–IV and reduces stroke: systemic heparin (target aPTT ~40–50 s, no bolus) or antiplatelet therapy (aspirin, or clopidogrel)",
      "Choice and timing individualized against bleeding risk from associated injuries (TBI, solid-organ injury); antiplatelet often preferred when hemorrhage risk is a concern",
      "Continue for approximately 3–6 months, guided by follow-up imaging"
    ],
    surgical: [
      { name: "Endovascular stenting / coiling", when: "Selected grade II–III lesions (enlarging pseudoaneurysm, flow-limiting flap) and grade V for hemorrhage control", notes: "Covered stent or coil embolization for surgically inaccessible (skull-base/distal) lesions; dual antiplatelet cover with stents" },
      { name: "Open surgical repair / ligation", when: "Accessible (zone II) grade V injury with active hemorrhage or when endovascular options are unavailable", notes: "Direct repair, interposition graft, or ligation for uncontrollable hemorrhage; often a last resort given anatomic access" }
    ]
  },
  technique: {
    title: "CTA Screening and Antithrombotic Initiation",
    prep: [
      "Apply expanded Denver screening criteria to every eligible blunt trauma patient",
      "Ensure the patient is stable enough for contrast CTA",
      "Review concomitant injuries that affect antithrombotic safety"
    ],
    steps: [
      { n: 1, t: "Screen", d: "Identify at-risk patients by mechanism and injury pattern; obtain CT angiography of the neck" },
      { n: 2, t: "Grade", d: "Assign the Denver grade from the CTA (or DSA if equivocal)" },
      { n: 3, t: "Weigh bleeding risk", d: "Assess TBI, solid-organ, and other hemorrhagic injuries before starting antithrombotics" },
      { n: 4, t: "Treat", d: "Start heparin or antiplatelet therapy; consult neuro-interventional for grade III/V or progression" },
      { n: 5, t: "Re-image", d: "Repeat vascular imaging at ~7–10 days to guide duration and detect progression" }
    ],
    pearls: [
      "The whole point of screening is to treat before the stroke — start antithrombotics as soon as bleeding risk allows",
      "A neurological deficit that does not match the head CT should prompt immediate BCVI screening",
      "Vertebral injuries travel with transverse-foramen cervical fractures — look for both"
    ]
  },
  guidelines: [
    { src: "EAST Practice Management Guidelines — Blunt Cerebrovascular Injury" },
    { src: "Western Trauma Association — BCVI algorithm" },
    { src: "Denver Health — BCVI screening and grading protocol" }
  ],
  pearls: [
    "BCVI is a silent diagnosis — expanded screening criteria exist because external signs are often absent",
    "Even simple aspirin substantially reduces stroke risk once BCVI is identified",
    "Grade does not always progress linearly; repeat imaging changes management in a meaningful minority"
  ],
  mistakes: [
    "Not screening at-risk mechanisms because the neck looks normal",
    "Withholding all antithrombotics indefinitely for fear of bleeding when the stroke risk is higher",
    "Missing a vertebral artery injury associated with a cervical-spine fracture"
  ]
},

{
  id: "penetrating-neck-injury",
  dept: "trauma",
  name: "Penetrating Neck Injury",
  latin: "Vulnus penetrans colli",
  organ: "Neck",
  severity: "high",
  tags: ["trauma","neck","vascular","aerodigestive","zones"],
  hero: "A wound that breaches the platysma threatens the airway, great vessels, and aerodigestive tract in a compact space. Hard signs mandate the operating room; stable patients are worked up by CT angiography-directed selective management. Airway first, and never blindly probe the wound.",
  keypoints: [
    "Only wounds that penetrate the platysma are 'true' penetrating neck injuries requiring full evaluation",
    "Zones — I: below the cricoid to the clavicles (thoracic outlet, great vessels; highest mortality); II: cricoid to angle of mandible (most common, surgically accessible); III: above the angle of the mandible (skull base; difficult access)",
    "Modern management is driven by hemodynamic status and hard/soft signs, not by zone alone",
    "Hard signs (→ operating room): expanding/pulsatile hematoma, severe active bleeding, shock, absent pulse/bruit/thrill, air bubbling through the wound, massive hemoptysis/hematemesis, airway compromise",
    "Stable patients without hard signs: CT angiography of the neck directs selective management, with adjuncts for the aerodigestive tract",
    "Secure the airway early — an expanding hematoma can obliterate the airway fast",
    "Do NOT blindly probe the wound or remove an impaling object outside the operating room"
  ],
  differentials: [
    "Isolated vascular injury (carotid, vertebral, jugular)",
    "Laryngotracheal (airway) injury",
    "Pharyngoesophageal injury",
    "Combined aerodigestive and vascular injury",
    "Superficial wound not breaching platysma (needs no deep work-up)"
  ],
  mnemonics: [
    { name: "Neck zones", text: "Zone I below cricoid (thoracic outlet), Zone II cricoid–mandible angle (accessible), Zone III above mandible angle (skull base)" },
    { name: "Hard signs → OR", text: "Bleeding, expanding hematoma, bruit/thrill, pulse deficit, air through wound, airway compromise = theatre, not scanner" }
  ],
  overview: {
    definition: "A penetrating wound of the neck that violates the platysma, with potential injury to the vascular, aerodigestive, and neurological structures densely packed within the cervical region.",
    epidemiology: "Commonly from stab and gunshot wounds. Zone II is the most frequently injured. Overall mortality is driven by exsanguinating vascular injury and by missed esophageal injuries that present late with mediastinitis.",
    pathophysiology: "The neck concentrates the carotid and vertebral arteries, jugular veins, larynx and trachea, pharynx and esophagus, and spinal cord within a small volume. Penetrating trauma may injure any combination; vascular injury threatens immediate exsanguination or airway-compressing hematoma, while an occult esophageal perforation seeds the mediastinum and causes delayed, highly lethal sepsis.",
    classification: [
      "By zone — I (thoracic outlet), II (mid-neck, accessible), III (high neck/skull base)",
      "By structure injured — vascular, aerodigestive (airway or esophageal), neurological, combined",
      "By presentation — hard signs (immediate surgery) vs soft signs/asymptomatic (selective work-up)"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism (stab vs gunshot), trajectory, blood loss at scene",
      "Voice change, hemoptysis, hematemesis, dysphagia, odynophagia (aerodigestive injury)",
      "Neurological symptoms (limb weakness, stroke features)",
      "Time since injury (relevant to occult esophageal injury)"
    ],
    examination: [
      "Confirm platysma violation (do not blindly probe deeper)",
      "Hard signs: expanding/pulsatile hematoma, active bleeding, bruit/thrill, pulse deficit, air through the wound, stridor",
      "Soft signs: minor/stopped bleeding, non-expanding hematoma, subcutaneous emphysema, dysphonia, dysphagia",
      "Airway assessment and full neurological examination"
    ],
    investigations: [
      { name: "CT angiography (neck)", role: "First-line in stable patients: screens the vessels and trajectory and directs whether further aerodigestive evaluation or intervention is needed" },
      { name: "Flexible/rigid esophagoscopy + water-soluble contrast study", role: "Combined evaluation to exclude an esophageal injury, which is easily missed and lethal if delayed" },
      { name: "Laryngotracheal bronchoscopy", role: "Assess for laryngeal/tracheal injury when airway symptoms or CTA findings suggest it" },
      { name: "Digital subtraction angiography", role: "For definitive vascular assessment and endovascular treatment, especially zone I/III injuries" }
    ]
  },
  criteria: {
    title: "Disposition by Signs and Zone",
    items: [
      { k: "Any hard sign", v: "Immediate neck exploration / operative or endovascular control" },
      { k: "Stable, soft signs, Zone II", v: "CTA-directed selective work-up (± esophageal and airway evaluation)" },
      { k: "Stable, Zone I or III", v: "CTA favored; endovascular options for difficult-access vascular injury" },
      { k: "No platysma violation", v: "Local wound care; no deep exploration needed" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Superficial wounds not breaching platysma: clean and close; observe",
      "Selective non-operative management of stable, CTA-negative patients with serial examination"
    ],
    medical: [
      "Resuscitation, tranexamic acid per major-hemorrhage protocol, and broad-spectrum antibiotics if aerodigestive injury is suspected",
      "Early airway control (intubation, or surgical airway if the airway is distorted by hematoma)"
    ],
    surgical: [
      { name: "Neck exploration (Zone II)", when: "Hard signs or confirmed injury in the accessible mid-neck", notes: "Incision along the anterior border of sternocleidomastoid; obtain proximal and distal vascular control; repair vascular and aerodigestive injuries; drain esophageal repairs" },
      { name: "Endovascular vascular control", when: "Zone I or III vascular injury where surgical access is difficult", notes: "Stent graft or embolization for great-vessel (thoracic outlet) or high internal carotid/vertebral injuries" },
      { name: "Esophageal repair and drainage", when: "Confirmed pharyngoesophageal injury", notes: "Primary two-layer repair with a muscle flap buttress where possible and wide drainage; missed injury causes lethal mediastinitis" }
    ]
  },
  technique: {
    title: "Airway-First Approach to the Penetrating Neck Wound",
    prep: [
      "Assess and secure the airway before anything else; prepare for a surgical airway",
      "Two large-bore IVs, crossmatch, activate major-hemorrhage protocol if bleeding",
      "Do not remove an impaling object outside theatre"
    ],
    steps: [
      { n: 1, t: "Airway", d: "Early intubation for any airway threat or expanding hematoma; surgical airway if anatomy is distorted" },
      { n: 2, t: "Control bleeding", d: "Direct pressure; avoid blind clamping in the wound; escort hard-sign patients directly to theatre" },
      { n: 3, t: "Decide pathway", d: "Hard signs → operating room; stable → CT angiography-directed selective work-up" },
      { n: 4, t: "Evaluate aerodigestive tract", d: "In stable patients, combine esophagoscopy/contrast study and laryngotracheal endoscopy as indicated" },
      { n: 5, t: "Definitive care", d: "Operative or endovascular repair of identified injuries; drain esophageal repairs" }
    ],
    pearls: [
      "The airway can be lost quickly to an expanding hematoma — intubate early rather than late",
      "Never probe the wound or pull an impaled object in the emergency department — do it with vascular control in theatre",
      "Hunt for esophageal injury; a missed perforation presents days later with mediastinitis and high mortality"
    ]
  },
  guidelines: [
    { src: "EAST Practice Management Guidelines — Penetrating Neck Injury" },
    { src: "Western Trauma Association — penetrating neck trauma algorithm" }
  ],
  pearls: [
    "Hemodynamic status and hard/soft signs, not zone alone, now drive management — but zones still guide operative access and the use of endovascular tools",
    "CT angiography has made selective non-operative management the norm for stable patients",
    "Two structures kill here: the great vessels (immediately) and the esophagus (late) — evaluate both"
  ],
  mistakes: [
    "Delaying airway control until the hematoma has distorted the anatomy",
    "Blindly probing the wound or removing an impaling object outside theatre",
    "Failing to exclude an esophageal injury and discharging a patient who returns with mediastinitis"
  ]
},

{
  id: "reboa",
  dept: "trauma",
  name: "REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta)",
  latin: "Occlusio aortae endovascularis resuscitativa",
  organ: "Aorta",
  severity: "critical",
  tags: ["trauma","hemorrhage","endovascular","resuscitation","REBOA"],
  hero: "A femoral-access balloon that temporarily occludes the aorta to buy time in non-compressible torso hemorrhage — controlling bleeding below the balloon and boosting perfusion above it. It is a bridge to definitive hemostasis, not a treatment, and the clock on distal ischemia starts the moment it inflates.",
  keypoints: [
    "Temporary aortic occlusion via a common-femoral catheter to control non-compressible torso hemorrhage and augment central (cerebral/coronary) perfusion",
    "A bridge to definitive hemostasis (laparotomy, pelvic packing/angioembolization, thoracotomy) — never the definitive treatment",
    "Zone I = descending thoracic aorta (left subclavian to celiac) for abdominal hemorrhage; Zone III = infrarenal aorta (lowest renal artery to the bifurcation) for pelvic/junctional hemorrhage",
    "Zone II (paravisceral) is a no-occlusion zone",
    "Modern low-profile systems use a 7 Fr sheath and often do not require a guidewire",
    "Occlusion time is limited by distal ischemia — Zone I tolerance is short (aim well under 30–60 minutes); partial or intermittent REBOA mitigates ischemia-reperfusion",
    "Contraindicated when the hemorrhage source is thoracic (e.g. aortic injury) or pericardial tamponade"
  ],
  differentials: [
    "Resuscitative thoracotomy with aortic cross-clamp (alternative for the in-extremis patient, esp. thoracic source)",
    "Preperitoneal pelvic packing (for pelvic hemorrhage)",
    "Angioembolization (for arterial pelvic bleeding)",
    "Damage-control laparotomy (definitive abdominal control)"
  ],
  mnemonics: [
    { name: "Zones I and III", text: "Zone I (supraceliac, thoracic aorta) = ABDOMEN; Zone III (infrarenal) = PELVIS; Zone II = leave alone" },
    { name: "Bridge, not destination", text: "REBOA buys minutes — have the definitive hemostasis plan ready before you inflate" }
  ],
  overview: {
    definition: "An endovascular resuscitation technique in which a compliant balloon, introduced through the common femoral artery, is positioned in and inflated within the aorta to temporarily occlude flow, controlling distal hemorrhage and supporting proximal perfusion.",
    epidemiology: "Used in selected trauma and non-trauma (e.g. postpartum, ruptured aneurysm) hemorrhage. Applied to patients in profound hemorrhagic shock or peri-arrest from below-diaphragm bleeding; outcomes depend heavily on rapid progression to definitive hemostasis.",
    pathophysiology: "Balloon inflation halts aortic flow distal to the occlusion, reducing hemorrhage from below-diaphragm sources, while raising afterload and diverting flow to the heart and brain. The cost is ischemia of everything distal to the balloon; the longer and more proximal the occlusion, the greater the ischemia-reperfusion burden (lactate, acidosis, distal organ and limb injury) on deflation.",
    classification: [
      "Zone I — descending thoracic aorta (left subclavian to celiac axis): for major intra-abdominal hemorrhage",
      "Zone II — paravisceral (celiac to lowest renal artery): a no-occlusion zone",
      "Zone III — infrarenal aorta (lowest renal artery to bifurcation): for pelvic and junctional hemorrhage",
      "Complete vs partial/intermittent REBOA — partial techniques allow some distal flow to limit ischemia"
    ]
  },
  diagnosis: {
    history: [
      "Blunt or penetrating torso trauma with hemorrhagic shock",
      "Suspected non-compressible below-diaphragm hemorrhage (abdomen or pelvis)",
      "Traumatic arrest with signs of life in whom aortic occlusion may be temporizing",
      "Non-traumatic catastrophic hemorrhage (e.g. ruptured aneurysm, obstetric)"
    ],
    examination: [
      "Profound hypotension with a suspected abdominal/pelvic source",
      "Positive FAST or an unstable pelvic fracture pointing below the diaphragm",
      "Assess femoral pulses/access; exclude a thoracic hemorrhage source before Zone I use",
      "Continuous hemodynamic and, ideally, proximal arterial pressure monitoring"
    ],
    investigations: [
      { name: "FAST / eFAST", role: "Rapidly identifies intraperitoneal or pericardial fluid and helps localize the hemorrhage source and suitability for REBOA" },
      { name: "Pelvic radiograph", role: "Identifies the unstable pelvic fracture that may benefit from Zone III occlusion" },
      { name: "Arterial blood gas / lactate", role: "Tracks the ischemia-reperfusion burden and guides occlusion time" },
      { name: "Fluoroscopy or external landmark measurement", role: "Confirms/estimates balloon position in the target zone during placement" }
    ]
  },
  criteria: {
    title: "Zone Selection and Occlusion Discipline",
    items: [
      { k: "Abdominal hemorrhage", v: "Zone I (supraceliac); shortest tolerable occlusion time" },
      { k: "Pelvic / junctional hemorrhage", v: "Zone III (infrarenal); better ischemic tolerance" },
      { k: "Thoracic / pericardial source", v: "REBOA contraindicated — thoracotomy instead" },
      { k: "Minimize ischemia", v: "Use partial/intermittent REBOA; document inflation time; deflate as soon as hemostasis achieved" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Not applicable — REBOA is itself a resuscitative intervention; the 'conservative' alternative is standard resuscitation while proceeding to definitive control"
    ],
    medical: [
      "Concurrent damage-control resuscitation: balanced transfusion (1:1:1), tranexamic acid, and correction of the lethal triad",
      "Monitor and mitigate ischemia-reperfusion after deflation (acidosis, hyperkalemia, distal ischemia)"
    ],
    surgical: [
      { name: "Common femoral arterial access + balloon placement", when: "Hemorrhagic shock from a below-diaphragm source as a bridge to definitive control", notes: "7 Fr sheath in the common femoral artery; advance the balloon to the target zone by external measurement or fluoroscopy; inflate to resistance / loss of the contralateral femoral pulse; record inflation time" },
      { name: "Definitive hemostasis", when: "Immediately after occlusion", notes: "Proceed without delay to laparotomy, preperitoneal pelvic packing, angioembolization, or thoracotomy as the source dictates; deflate the balloon in a controlled, staged manner as hemostasis is achieved" },
      { name: "Access-site management", when: "After REBOA", notes: "Remove the sheath with surgical or device closure; assess the limb for access-site complications and distal ischemia" }
    ]
  },
  technique: {
    title: "REBOA Placement",
    prep: [
      "Confirm a below-diaphragm hemorrhage source and exclude a thoracic source (especially for Zone I)",
      "Prepare the low-profile kit; note the target zone and estimate insertion depth by external landmarks",
      "Have the definitive hemostasis plan and team ready before inflation"
    ],
    steps: [
      { n: 1, t: "Femoral access", d: "Cannulate the common femoral artery (palpation, ultrasound, or cutdown) and place the 7 Fr sheath" },
      { n: 2, t: "Advance the balloon", d: "Pass the balloon catheter to the target zone (Zone I to the descending thoracic aorta; Zone III to the infrarenal aorta), using external measurement or fluoroscopy" },
      { n: 3, t: "Inflate", d: "Inflate until resistance and loss of the contralateral femoral pulse / a rise in proximal pressure; note the exact time of inflation" },
      { n: 4, t: "Bridge to hemostasis", d: "Move immediately to definitive control; consider partial/intermittent inflation to limit distal ischemia" },
      { n: 5, t: "Deflate & manage access", d: "Deflate in a staged manner once hemostasis is secured; manage acidosis/hyperkalemia and the femoral access site and limb" }
    ],
    pearls: [
      "Inflation starts an ischemia clock — the team should already know how definitive hemostasis will be achieved",
      "Zone I buys the most pressure but the least time; escalate to definitive control fast or use partial REBOA",
      "Never use REBOA for a thoracic hemorrhage source — it will not control it and worsens the physiology"
    ]
  },
  guidelines: [
    { src: "Joint Royal College of Surgeons / trauma-network REBOA position statements" },
    { src: "Western Trauma Association — REBOA in hemorrhagic shock" }
  ],
  pearls: [
    "REBOA is a temporizing bridge that trades distal ischemia for central perfusion — its value is entirely in what happens next",
    "Zone III is more forgiving of longer occlusion than Zone I",
    "Partial/intermittent REBOA is increasingly favored to reduce the ischemia-reperfusion penalty"
  ],
  mistakes: [
    "Treating REBOA as definitive care rather than a bridge to hemostasis",
    "Prolonged Zone I occlusion causing severe ischemia-reperfusion injury",
    "Deploying it for a thoracic/pericardial source where thoracotomy is required"
  ]
},

{
  id: "extremity-vascular-trauma",
  dept: "trauma",
  name: "Extremity Vascular Trauma",
  latin: "Laesio vasorum extremitatis",
  organ: "Extremity vessels",
  severity: "high",
  tags: ["trauma","vascular","limb","ischemia","fasciotomy"],
  hero: "Arterial injury of a limb is a race against warm ischemia. Hard signs go straight to the operating room; soft signs are triaged by the injured-extremity index and CT angiography. In combined injuries, a temporary shunt restores flow while the skeleton is fixed — and fasciotomy should be liberal after prolonged ischemia.",
  keypoints: [
    "Penetrating trauma and fracture/dislocation patterns (knee dislocation → popliteal; supracondylar humerus → brachial) are the classic mechanisms",
    "Hard signs (→ operating room / on-table angiogram): pulsatile bleeding, expanding or pulsatile hematoma, bruit/thrill, absent distal pulse, and distal ischemia (the 6 Ps)",
    "Soft signs: history of significant hemorrhage, non-expanding hematoma, proximity wound, or a nerve deficit — evaluate with the injured-extremity index (IEI/ABI)",
    "An injured-extremity index (ABI) <0.9 warrants CT angiography",
    "Skeletal muscle tolerates roughly 6 hours of warm ischemia — revascularization is time-critical",
    "In combined orthopedic-vascular injury, place a temporary intravascular shunt to restore flow, then fix the skeleton, then perform definitive vascular repair",
    "Fasciotomy should be liberal after prolonged ischemia or combined arterial and venous injury"
  ],
  differentials: [
    "Arterial spasm (diagnosis of exclusion — do not attribute a cold pulseless limb to spasm)",
    "Compartment syndrome",
    "Nerve injury without vascular injury",
    "Deep vein thrombosis (in the swollen limb)",
    "Pre-existing peripheral arterial disease"
  ],
  mnemonics: [
    { name: "6 Ps of ischemia", text: "Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Perishingly cold (Poikilothermia)" },
    { name: "Shunt–Fix–Repair", text: "Combined injury order: temporary SHUNT → skeletal FIXATION → definitive vascular REPAIR → fasciotomy" }
  ],
  overview: {
    definition: "Traumatic injury to the arteries and/or veins of an upper or lower limb, from penetrating wounds, blunt force, or fracture-dislocations, threatening limb viability through hemorrhage and ischemia.",
    epidemiology: "Common in penetrating trauma and in high-energy fractures/dislocations. The popliteal artery (knee dislocation) and the brachial artery (supracondylar fracture) are classically at risk. Outcome depends on ischemic time and on associated skeletal, nerve, and soft-tissue injury.",
    pathophysiology: "Vessel wall disruption produces hemorrhage, thrombosis, intimal flap, pseudoaneurysm, or arteriovenous fistula. Interruption of arterial inflow causes progressive ischemia of muscle and nerve; after several hours, reperfusion drives compartment swelling and systemic ischemia-reperfusion injury. Collateral flow can maintain a palpable pulse despite a significant proximal injury, so a normal pulse does not exclude injury.",
    classification: [
      "By vessel — arterial, venous, or combined",
      "By lesion — laceration/transection, intimal flap/dissection, thrombosis, pseudoaneurysm, arteriovenous fistula",
      "By context — isolated vascular vs combined orthopedic-vascular ('mangled') extremity",
      "By presentation — hard signs (operative) vs soft signs (selective work-up)"
    ]
  },
  diagnosis: {
    history: [
      "Mechanism: penetrating wound, fracture/dislocation, crush, or blast",
      "Bleeding at the scene, use of a tourniquet, and time since injury (ischemic clock)",
      "Symptoms of ischemia (pain, numbness, weakness) or a cold limb",
      "Prior peripheral arterial disease or vascular surgery"
    ],
    examination: [
      "Assess for hard signs: active pulsatile bleeding, expanding/pulsatile hematoma, bruit/thrill, absent distal pulses, distal ischemia",
      "Compare pulses with the contralateral limb; measure the injured-extremity index (ABI)",
      "Full neurological examination of the limb (nerve injury commonly accompanies vascular injury)",
      "Assess compartments for tension and the skeleton for fracture/dislocation"
    ],
    investigations: [
      { name: "Injured-extremity index / ABI", role: "Bedside triage of soft-sign limbs; a ratio <0.9 indicates possible arterial injury and prompts imaging" },
      { name: "CT angiography of the limb", role: "First-line imaging for stable patients with soft signs or an abnormal ABI; localizes and characterizes the injury" },
      { name: "On-table / digital subtraction angiography", role: "For hard-sign limbs going to theatre and for endovascular options in selected proximal injuries" },
      { name: "Duplex ultrasound", role: "Adjunct for pseudoaneurysm, AV fistula, and follow-up when CTA is not ideal" }
    ]
  },
  criteria: {
    title: "Triage of the Injured Limb",
    items: [
      { k: "Hard signs", v: "Immediate operating room / on-table angiogram — do not delay for imaging" },
      { k: "Soft signs, ABI ≥0.9", v: "Observation with serial examination" },
      { k: "Soft signs, ABI <0.9", v: "CT angiography" },
      { k: "Combined ortho-vascular / prolonged ischemia", v: "Temporary shunt, then fixation and repair; liberal fasciotomy" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Serial observation for soft-sign limbs with a normal ABI and no imaging evidence of injury",
      "Selected minimal intimal injuries may be managed non-operatively with surveillance and antiplatelet therapy"
    ],
    medical: [
      "Hemorrhage control first: direct pressure and a tourniquet for uncontrolled bleeding",
      "Systemic or regional heparinization intraoperatively as bleeding risk allows; resuscitation and correction of coagulopathy"
    ],
    surgical: [
      { name: "Temporary intravascular shunt", when: "Combined orthopedic-vascular injury or damage-control setting", notes: "Restores distal perfusion quickly while the fracture is stabilized and the patient resuscitated, before definitive repair" },
      { name: "Definitive vascular repair", when: "Once inflow is restored and the skeleton stabilized", notes: "Primary repair for small clean injuries; reversed saphenous vein interposition graft preferred over prosthetic in contaminated fields; ligation for non-essential vessels" },
      { name: "Four-compartment fasciotomy", when: "Prolonged ischemia, combined arterial and venous injury, or established/impending compartment syndrome", notes: "Liberal, prophylactic fasciotomy after revascularization prevents reperfusion compartment syndrome and limb loss" }
    ]
  },
  technique: {
    title: "Combined Ortho-Vascular Injury: Shunt–Fix–Repair",
    prep: [
      "Control hemorrhage (pressure/tourniquet) and resuscitate",
      "Confirm the injury and plan vascular conduit (harvest contralateral saphenous vein)",
      "Coordinate orthopedic and vascular teams"
    ],
    steps: [
      { n: 1, t: "Expose & control", d: "Obtain proximal and distal control of the injured vessel; assess the extent of injury" },
      { n: 2, t: "Shunt", d: "Place a temporary intravascular shunt to restore distal flow immediately in combined or damage-control injuries" },
      { n: 3, t: "Skeletal fixation", d: "Allow orthopedics to stabilize the fracture/dislocation to a fixed length before definitive vascular work" },
      { n: 4, t: "Definitive repair", d: "Remove the shunt; perform primary repair or reversed vein interposition graft; confirm distal flow with Doppler/angiography" },
      { n: 5, t: "Fasciotomy", d: "Perform liberal four-compartment fasciotomy after prolonged ischemia or combined arteriovenous injury" }
    ],
    pearls: [
      "A palpable distal pulse does not exclude arterial injury — collaterals can mask a significant lesion; use the ABI",
      "Shunt first in combined injuries so the limb is perfused while the fracture is fixed",
      "When in doubt after prolonged ischemia, do the fasciotomy — a missed compartment syndrome costs the limb"
    ]
  },
  guidelines: [
    { src: "Western Trauma Association — evaluation and management of extremity vascular trauma" },
    { src: "EAST Practice Management Guidelines — penetrating extremity arterial trauma" }
  ],
  pearls: [
    "Hard signs mean the operating room, not the CT scanner",
    "The injured-extremity index (ABI <0.9) is the workhorse triage tool for soft-sign limbs",
    "Warm ischemia beyond ~6 hours markedly worsens limb salvage — revascularize early and shunt when repair must wait"
  ],
  mistakes: [
    "Blaming a cold, pulseless limb on 'spasm' and delaying angiography or exploration",
    "Definitively repairing a vessel before skeletal stabilization, then having the repair disrupted during fixation",
    "Omitting fasciotomy after prolonged ischemia and losing the limb to reperfusion compartment syndrome"
  ]
},

{
  id: "pancreaticoduodenal-trauma",
  dept: "trauma",
  name: "Pancreatic & Duodenal Trauma",
  latin: "Laesio pancreatis et duodeni",
  organ: "Pancreas / Duodenum",
  severity: "critical",
  tags: ["trauma","pancreas","duodenum","retroperitoneal","AAST"],
  hero: "High-energy epigastric trauma crushes the pancreas and duodenum against the spine. These retroperitoneal injuries are easily missed early and lethal when delayed. The single decision that drives everything is whether the main pancreatic duct is injured.",
  keypoints: [
    "Usually from high-energy blunt epigastric trauma (handlebar, steering wheel) compressing the organs against the vertebral column, or from penetrating trauma",
    "Retroperitoneal and often occult early — a normal initial CT and normal amylase do NOT exclude injury",
    "Main pancreatic duct integrity is the pivotal management question",
    "AAST pancreas grade hinges on duct involvement and location relative to the superior mesenteric vein (SMV): distal (grade III) vs proximal/head (grade IV) transection with duct injury; grade V = massive head disruption",
    "Distal duct injury → distal pancreatectomy; proximal duct/head injury → drainage, with pancreaticoduodenectomy reserved for massive combined destruction",
    "Duodenal injuries: primary repair for most; pyloric exclusion for higher-grade or combined pancreaticoduodenal injury",
    "Wide drainage is almost always part of the operation; a missed injury presents late with sepsis, fistula, or an abscess"
  ],
  differentials: [
    "Isolated pancreatic injury vs combined pancreaticoduodenal injury",
    "Other high-energy intra-abdominal injury (liver, spleen, mesentery)",
    "Duodenal hematoma (may cause obstruction without perforation)",
    "Traumatic pancreatitis without duct injury",
    "Retroperitoneal hematoma from vascular injury"
  ],
  mnemonics: [
    { name: "Duct = decision", text: "Main pancreatic duct intact → drain; duct injured distal to SMV → distal pancreatectomy; duct/head injury → drainage ± exclusion, Whipple only in extremis" },
    { name: "Occult & lethal", text: "Retroperitoneal, subtle on early CT, normal early amylase — high suspicion prevents a lethal delayed diagnosis" }
  ],
  overview: {
    definition: "Traumatic injury to the pancreas and/or duodenum, ranging from contusion and hematoma to ductal transection and combined pancreaticoduodenal destruction, notable for its retroperitoneal location and high morbidity.",
    epidemiology: "Relatively uncommon but high-risk. Combined pancreaticoduodenal injuries carry substantial mortality, driven by associated vascular injury and by the consequences of missed or delayed diagnosis (fistula, sepsis).",
    pathophysiology: "A focal anterior force compresses the pancreas and duodenum against the spine, fracturing the gland (often at the neck, over the SMV) and rupturing the retroperitoneal duodenum. Leakage of activated pancreatic enzymes and duodenal content into the retroperitoneum causes autodigestion, phlegmon, and sepsis. Because the leak is retroperitoneal, early signs are subtle and diagnosis is frequently delayed.",
    classification: [
      "AAST pancreas — I: contusion/superficial laceration, no duct injury; II: major laceration, no duct injury; III: distal transection or parenchymal injury WITH duct injury; IV: proximal (right of SMV) transection/injury involving the ampulla; V: massive disruption of the pancreatic head",
      "AAST duodenum — hematoma; laceration <50% or ≥50% of circumference; involvement of the ampulla/distal common bile duct; devascularization",
      "Isolated pancreatic, isolated duodenal, or combined pancreaticoduodenal injury"
    ]
  },
  diagnosis: {
    history: [
      "High-energy blunt epigastric impact (handlebar in children, steering wheel/seatbelt in adults) or penetrating epigastric wound",
      "Epigastric pain out of proportion or progressive over hours",
      "Delayed presentation with fever, ileus, or sepsis suggests a missed injury"
    ],
    examination: [
      "Epigastric tenderness, sometimes with a seatbelt sign",
      "Signs may be deceptively mild early because the injury is retroperitoneal",
      "Progressive peritonitis, ileus, or systemic sepsis if diagnosis is delayed",
      "Associated injuries (liver, spleen, major vessels) are common"
    ],
    investigations: [
      { name: "CT abdomen with IV contrast", role: "Primary imaging; look for peripancreatic fluid, fat stranding, gland fracture, and retroperitoneal/duodenal air or contrast — early signs can be subtle" },
      { name: "Serum amylase / lipase", role: "Non-specific and insensitive early; a rising or persistently elevated level over time raises suspicion of pancreatic injury" },
      { name: "MRCP or ERCP", role: "Defines main pancreatic duct integrity — the key determinant of management; ERCP can also allow ductal stenting in selected injuries" },
      { name: "Upper GI water-soluble contrast study", role: "Detects a duodenal leak when perforation is suspected but not confirmed on CT" },
      { name: "Operative exploration (Kocher maneuver)", role: "Full mobilization and inspection of the pancreas and duodenum at laparotomy when imaging is equivocal but suspicion is high" }
    ]
  },
  criteria: {
    title: "Grade-Directed Operative Strategy",
    items: [
      { k: "Duct intact (grade I–II)", v: "Debridement and wide external drainage" },
      { k: "Distal duct injury (grade III)", v: "Distal pancreatectomy ± splenectomy" },
      { k: "Proximal duct / head (grade IV)", v: "Drainage; pyloric exclusion if combined duodenal injury" },
      { k: "Massive head-duodenal destruction (grade V)", v: "Pancreaticoduodenectomy (Whipple) — only in extremis" }
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Low-grade pancreatic injury without duct disruption and duodenal hematoma without perforation can often be managed non-operatively",
      "Duodenal hematoma: nasogastric decompression and nutritional support; most resolve over 1–2 weeks",
      "ERCP-guided pancreatic duct stenting is an option for selected main-duct injuries"
    ],
    medical: [
      "Resuscitation, broad-spectrum antibiotics, and nutritional support (consider distal enteral feeding via jejunostomy)",
      "Octreotide is sometimes used adjunctively for pancreatic fistula, though evidence is limited"
    ],
    surgical: [
      { name: "Wide drainage ± debridement", when: "Low-grade pancreatic injury without main-duct involvement (grade I–II)", notes: "Debride devitalized tissue and place closed-suction drains; the mainstay for duct-intact injuries" },
      { name: "Distal pancreatectomy", when: "Main-duct injury distal (left) of the SMV (grade III)", notes: "Resect the distal gland with or without splenectomy; staple/oversew the pancreatic stump and drain" },
      { name: "Duodenal repair ± pyloric exclusion", when: "Duodenal laceration; higher-grade or combined pancreaticoduodenal injury", notes: "Primary two-layer repair for most; add pyloric exclusion with a gastrojejunostomy (± duodenal decompression) to divert and protect a tenuous repair" },
      { name: "Pancreaticoduodenectomy (Whipple)", when: "Massive, unreconstructable destruction of the pancreatic head, ampulla, and duodenum (grade V)", notes: "Reserved for the extreme injury; usually staged with damage-control principles given the physiological insult" }
    ]
  },
  technique: {
    title: "Operative Assessment of the Pancreas and Duodenum",
    prep: [
      "Damage-control mindset; correct the lethal triad in parallel",
      "Broad exposure with a generous Kocher maneuver and entry into the lesser sac",
      "Have drains, stapler, and feeding-access options available"
    ],
    steps: [
      { n: 1, t: "Expose", d: "Kocherize the duodenum and open the lesser sac to inspect the entire pancreas and both duodenal walls" },
      { n: 2, t: "Assess the duct", d: "Determine main-duct integrity and the injury's location relative to the SMV — the key decision point" },
      { n: 3, t: "Manage the pancreas", d: "Drain (duct intact) or distal pancreatectomy (distal duct injury); drainage ± exclusion for proximal/head injury" },
      { n: 4, t: "Manage the duodenum", d: "Primary repair; add pyloric exclusion and gastrojejunostomy for higher-grade or combined injury" },
      { n: 5, t: "Drain & feed", d: "Place wide closed-suction drains and consider a feeding jejunostomy; plan re-look in damage-control cases" }
    ],
    pearls: [
      "The whole operation turns on one question — is the main pancreatic duct injured, and is it right or left of the SMV?",
      "Kocherize widely and open the lesser sac; retroperitoneal injuries hide until you look",
      "When the repair is tenuous, divert — pyloric exclusion protects a duodenal repair"
    ]
  },
  guidelines: [
    { src: "AAST Organ Injury Scale — pancreas and duodenum" },
    { src: "WSES (World Society of Emergency Surgery) — duodeno-pancreatic and extrahepatic biliary tree trauma" },
    { src: "EAST Practice Management Guidelines — pancreatic trauma" }
  ],
  pearls: [
    "A normal early CT and a normal amylase do not exclude a pancreatic or duodenal injury — re-image and keep suspicion high",
    "Duct status and its relation to the SMV determine resection versus drainage",
    "Delayed diagnosis is what kills — the retroperitoneal leak smoulders before it declares itself"
  ],
  mistakes: [
    "Missing a retroperitoneal duodenal rupture and discharging a patient who returns septic",
    "Operating without defining main-duct integrity and under- or over-treating the pancreas",
    "Inadequate drainage of a pancreatic injury, allowing an uncontrolled fistula and abscess"
  ]
}
]; // end TRAUMA3_DISEASES

if (typeof module !== 'undefined') module.exports = { TRAUMA3_DISEASES };
