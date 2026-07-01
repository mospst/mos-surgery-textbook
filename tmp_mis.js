// tmp_mis.js — Minimally Invasive Surgery (MIS) department
// Principles topics (A) + cross-references to existing lap procedures (B).
// `related` arrays point to disease IDs that already exist in other departments;
// views.jsx renders them as clickable "Related procedures & diseases" chips.
const MIS_DISEASES = [
{
  id: "mis-principles", dept: "mis",
  name: "Principles of Laparoscopy & Pneumoperitoneum",
  latin: "Chirurgia minime invasiva",
  organ: "Peritoneal cavity & cardiorespiratory system",
  severity: "moderate",
  tags: ["laparoscopy","pneumoperitoneum","CO2","physiology","MIS"],
  hero: "Surgery performed through small ports under CO₂ pneumoperitoneum, trading wound size for the systemic physiology of a gas-filled, raised-pressure abdomen.",
  flagship: true,
  keypoints: [
    "CO₂ is the insufflation gas of choice — non-combustible, highly soluble (low embolism risk), and rapidly buffered/exhaled",
    "Standard working pressure is 12–15 mmHg; ≤8 mmHg ('low-pressure') reduces cardiopulmonary stress and post-op shoulder-tip pain",
    "Raised intra-abdominal pressure reduces venous return (↓preload) and splints the diaphragm (↑airway pressures, ↓FRC)",
    "Absorbed CO₂ causes hypercarbia and respiratory acidosis — the anesthetist compensates by increasing minute ventilation",
    "Benefits over open: less pain, smaller wounds, fewer wound/respiratory complications, faster recovery, lower incisional-hernia rate",
    "Reverse-Trendelenburg + pneumoperitoneum together raise venous-stasis risk — mechanical VTE prophylaxis matters"
  ],
  differentials: [
    "Open surgery — chosen when adhesions, instability, or anatomy make MIS unsafe",
    "Hybrid / laparoscopic-assisted — pneumoperitoneum plus a small extraction incision",
    "Robotic-assisted laparoscopy — same physiology, different platform"
  ],
  mnemonics: [
    { name: "Why CO₂", text: "Soluble, non-combustible, cheap, rapidly cleared — the safest insufflation gas" },
    { name: "Pressure effects", text: "↑IAP → ↓venous return, ↑afterload, ↑airway pressure, ↓renal/splanchnic flow, ↓FRC" }
  ],
  overview: {
    definition: "Minimally invasive surgery (MIS) accesses the peritoneal (or thoracic) cavity through small incisions using a camera (laparoscope) and long instruments, working within a space created by insufflating CO₂ to a set pressure (pneumoperitoneum).",
    epidemiology: "Laparoscopic cholecystectomy (first performed 1985–87) drove worldwide adoption; the majority of elective general-surgical abdominal operations in the UK now begin laparoscopically.",
    pathophysiology: "CO₂ at 12–15 mmHg mechanically compresses the IVC (↓venous return, ↓cardiac output at higher pressures) and splints the diaphragm (↑peak airway pressure, ↓functional residual capacity, ↑atelectasis risk). Peritoneal CO₂ is absorbed into blood → hypercarbia and respiratory acidosis, requiring increased minute ventilation. Vagally-mediated bradycardia can occur on rapid insufflation (peritoneal stretch). Splanchnic and renal perfusion fall with rising intra-abdominal pressure, usually transiently.",
    classification: [
      {label:"Conventional multiport laparoscopy", note:"3–5 ports; the standard general-surgical approach"},
      {label:"Single-incision (SILS)",            note:"All instruments through one umbilical platform; better cosmesis, harder triangulation"},
      {label:"Laparoscopic-assisted / hybrid",     note:"Mobilization done laparoscopically; resection/anastomosis through a small incision"},
      {label:"Robotic-assisted",                   note:"Wristed instruments + 3D vision on a console; same CO₂ physiology"},
      {label:"Gasless / low-pressure",             note:"Abdominal-wall lift or ≤8 mmHg for frail cardiorespiratory patients"}
    ]
  },
  criteria: {
    title: "Typical insufflation parameters & limits",
    items: [
      { k: "Insufflation gas", v: "Carbon dioxide (CO₂)" },
      { k: "Standard working pressure", v: "12–15 mmHg" },
      { k: "Low-pressure technique", v: "7–8 mmHg (frail / cardiorespiratory disease)" },
      { k: "Flow rate (initial)", v: "Low (1 L/min) until correct placement confirmed" },
      { k: "End-tidal CO₂ target", v: "Maintained near-normal by ↑ minute ventilation" },
      { k: "Relative caution", v: "Severe cardiac failure, raised ICP, untreated hypovolemia" }
    ]
  },
  management: {
    conservative: [
      "Patient selection: assess cardiorespiratory reserve before committing to pneumoperitoneum",
      "Optimize before long head-down/head-up cases (fluid status, anesthetic plan)",
      "Mechanical + pharmacological VTE prophylaxis for stasis from raised IAP and positioning"
    ],
    medical: [
      "Anesthetist increases minute ventilation to clear absorbed CO₂",
      "Treat insufflation bradycardia by desufflating and giving an antimuscarinic if needed"
    ],
    surgical: [
      { name: "Low-pressure pneumoperitoneum", when: "Frail / cardiorespiratory patients", notes: "Reduces hemodynamic and ventilatory impact; may need deeper neuromuscular block for working space" },
      { name: "Conversion to open", when: "Unsafe anatomy, instability, failure to progress", notes: "A sound surgical decision, not a complication" }
    ]
  },
  technique: {
    title: "Establishing and Maintaining Safe Pneumoperitoneum",
    prep: [
      "Assess cardiorespiratory reserve; plan a low-pressure technique for frail patients",
      "Decompress the stomach (NG) and bladder (catheter) before entry to reduce injury risk",
      "Set the insufflator: CO2, low initial flow (~1 L/min), pressure limit 12–15 mmHg (7–8 mmHg if frail)"
    ],
    steps: [
      { n: 1, t: "Gain access", d: "Enter the peritoneum (open/Hasson or Veress — see access techniques) and connect the CO2 line" },
      { n: 2, t: "Confirm correct placement", d: "Start at low flow; a low opening pressure (<8–10 mmHg) with even, symmetrical distension confirms intraperitoneal placement before increasing flow" },
      { n: 3, t: "Insufflate to working pressure", d: "Raise the flow to reach 12–15 mmHg; watch for insufflation bradycardia (peritoneal stretch) — pause or desufflate and give an antimuscarinic if it occurs" },
      { n: 4, t: "Communicate physiology with anesthesia", d: "Absorbed CO2 causes hypercarbia — the anesthetist increases minute ventilation; watch airway pressures and saturations in steep Trendelenburg" },
      { n: 5, t: "Titrate during the case", d: "Use the lowest pressure that gives adequate working space; deep neuromuscular block can create space without raising pressure; mechanical VTE prophylaxis for positioning-related stasis" },
      { n: 6, t: "Desufflate at the end", d: "Actively expel CO2 through the ports before closure to reduce referred shoulder-tip pain; close fascia at all ≥10 mm port sites" }
    ],
    pearls: [
      "Never raise the flow before confirming intraperitoneal placement — high-flow extraperitoneal or intravascular insufflation is dangerous",
      "Most cardiopulmonary changes of pneumoperitoneum reverse promptly on desufflation",
      "Expel residual CO2 at the end — it is the cause of post-laparoscopy shoulder-tip pain"
    ]
  },
  guidelines: [
    { src: "SAGES — Guidelines for diagnostic, energy & minimally invasive surgery" },
    { src: "AUGIS / ALSGBI — Fundamentals of laparoscopic surgery (UK)" }
  ],
  pearls: [
    "Shoulder-tip pain after laparoscopy is referred diaphragmatic irritation from residual CO₂ — expel gas at the end of the case",
    "Most cardiopulmonary changes reverse promptly on desufflation",
    "Deep neuromuscular blockade can buy working space without raising pressure"
  ],
  mistakes: [
    "Insufflating at high flow before confirming intraperitoneal placement (risk of gas embolism / extraperitoneal insufflation)",
    "Ignoring rising airway pressures and falling saturations during steep Trendelenburg",
    "Treating conversion to open as a 'failure' rather than good judgement"
  ],
  related: [
    { id: "cholecystitis",  note: "Laparoscopic cholecystectomy — the index MIS operation" },
    { id: "appendicitis",   note: "Laparoscopic appendectomy — the commonest emergency MIS case" },
    { id: "inguinal-hernia",note: "Laparoscopic inguinal hernia repair (TAPP / TEP)" }
  ]
},
{
  id: "lap-access", dept: "mis",
  name: "Laparoscopic Access Techniques",
  organ: "Abdominal wall & peritoneum",
  severity: "moderate",
  tags: ["access","Veress","Hasson","optical-trocar","entry","MIS"],
  hero: "Establishing pneumoperitoneum and the first port safely — the moment of highest risk for major vascular and visceral injury in laparoscopy.",
  keypoints: [
    "Open (Hasson) entry is the default safe technique — direct vision through a mini-laparotomy at the umbilicus",
    "Veress-needle (closed) entry is faster but blind; confirm placement before insufflating",
    "Most catastrophic injuries (aorta, IVC, iliac vessels, bowel) occur at primary entry, not during the case",
    "Use the umbilicus as the standard first-port site; consider Palmer's point (LUQ, mid-clavicular, below costal margin) if midline adhesions or previous surgery",
    "All secondary ports must be inserted under direct laparoscopic vision",
    "Close fascia at any port site ≥10 mm to prevent port-site (trocar) hernia"
  ],
  differentials: [
    "Open Hasson cut-down — direct vision, preferred after previous surgery",
    "Veress-needle closed entry — fast, blind, surgeon-dependent",
    "Optical (visual) trocar — entry watched layer-by-layer through the scope",
    "Palmer's point entry — left upper quadrant when midline access is hostile"
  ],
  overview: {
    definition: "The set of techniques used to create pneumoperitoneum and place the first (and subsequent) trocars into the abdomen, balancing speed against the risk of vascular and visceral injury.",
    pathophysiology: "The under-distended abdomen places the great vessels (aorta bifurcates ~L4, just below the umbilicus in thin patients) and bowel close to a blindly advanced needle or trocar. Adhesions from previous surgery tether bowel to the anterior abdominal wall, raising entry-injury risk and prompting an alternative site.",
    classification: [
      {label:"Open (Hasson) technique", note:"Mini-incision to fascia under vision, blunt port, purse-string; lowest visceral-injury rate in adhesions"},
      {label:"Veress needle (closed)",   note:"Spring-loaded needle for insufflation then blind first trocar; quick but blind"},
      {label:"Optical trocar",           note:"Bladeless port advanced while watching each abdominal-wall layer through the laparoscope"},
      {label:"Palmer's point",           note:"LUQ entry (after NG decompression) when midline adhesions/masses preclude umbilical access"}
    ]
  },
  criteria: {
    title: "Confirming safe Veress placement before insufflation",
    items: [
      { k: "Aspiration test", v: "No blood, bowel content or urine aspirated" },
      { k: "Saline drop test", v: "Saline in the hub falls freely with abdominal-wall lift" },
      { k: "Opening pressure", v: "Low (<8–10 mmHg) — high pressure suggests preperitoneal/omental placement" },
      { k: "Symmetrical distension", v: "Even tympanic distension, loss of liver dullness" },
      { k: "Gas flow", v: "Free flow at low initial rate before increasing" }
    ]
  },
  technique: {
    title: "Open (Hasson) umbilical entry",
    prep: [
      "GA, NG/orogastric tube and urinary catheter to decompress stomach and bladder",
      "Confirm site; infiltrate local anesthetic; supine, surgeon's positioning per case",
      "Check insufflator, light source, camera white-balance and instruments before incision"
    ],
    steps: [
      { n: 1, t: "Vertical sub-/trans-umbilical incision", d: "Small incision through skin into the umbilical cicatrix where fascia is closest to skin." },
      { n: 2, t: "Expose linea alba", d: "Retract with small Langenbeck retractors; clear fat to fascia." },
      { n: 3, t: "Open fascia under vision", d: "Place stay/anchor sutures either side, incise fascia, then open peritoneum sharply between clips." },
      { n: 4, t: "Confirm intraperitoneal entry", d: "Finger or blunt instrument confirms free peritoneal cavity; sweep for adhesions." },
      { n: 5, t: "Insert blunt (Hasson) port", d: "Railroad the blunt port in; secure with stay sutures to seal around it." },
      { n: 6, t: "Insufflate", d: "Begin CO₂ at low flow to 12–15 mmHg; confirm even distension." },
      { n: 7, t: "Place secondary ports under vision", d: "Site ports for triangulation; insert each while watching the tip enter the cavity." }
    ],
    pearls: [
      "Hold off high-flow insufflation until intraperitoneal placement is certain",
      "In the very thin patient, angle the first trocar toward the pelvis away from the aortic bifurcation",
      "If unexpected blood appears on entry, keep the port in situ to tamponade and convert immediately"
    ]
  },
  guidelines: [
    { src: "RCOG/BSGE — Preventing entry-related laparoscopic injuries (principles widely applied in general surgery)" },
    { src: "SAGES — Guidelines for laparoscopic entry and trocar placement" }
  ],
  pearls: [
    "Closing the fascia of 10 mm+ ports prevents Richter's-type port-site hernia",
    "Previous midline surgery → favor open entry or Palmer's point",
    "Decompress stomach (NG) before LUQ entry to avoid gastric injury"
  ],
  mistakes: [
    "Blindly forcing a trocar in a scarred abdomen instead of switching to open or Palmer's point",
    "Insufflating at high pressure into the preperitoneal space (surgical emphysema, poor working space)",
    "Leaving a 10–12 mm port fascia un-closed → bowel-containing port-site hernia"
  ],
  related: [
    { id: "cholecystitis",     note: "Standard 4-port access for laparoscopic cholecystectomy" },
    { id: "appendicitis",      note: "3-port access for laparoscopic appendectomy" },
    { id: "trauma-laparotomy", note: "Why a hostile/scarred abdomen may mandate open entry" }
  ]
},
{
  id: "mis-energy", dept: "mis",
  name: "Energy Devices in Minimally Invasive Surgery",
  organ: "Operative tissue planes",
  severity: "moderate",
  tags: ["diathermy","monopolar","bipolar","ultrasonic","energy","MIS"],
  hero: "Electrosurgical and ultrasonic devices that cut and seal in the confined laparoscopic field — powerful, but the leading cause of avoidable thermal injury.",
  keypoints: [
    "Monopolar diathermy: current flows from instrument tip through the patient to a return electrode pad — versatile but the highest stray-energy risk",
    "Bipolar diathermy: current passes only between the two limbs of the instrument — safer near vital structures, no patient return pad",
    "Advanced bipolar (vessel-sealing) reliably seals vessels up to ~7 mm with low thermal spread",
    "Ultrasonic (harmonic) devices cut and coagulate by mechanical vibration at lower temperatures — minimal smoke, slower hemostasis of large vessels",
    "Insulation failure, direct coupling and capacitive coupling cause off-screen burns — keep the active tip in view",
    "Lateral thermal spread (a few mm) threatens the bile duct, ureter, bowel and nerves nearby"
  ],
  differentials: [
    "Monopolar diathermy — cheap, versatile, highest stray-energy risk",
    "Bipolar diathermy — focal, safe near nerves/duct",
    "Advanced bipolar vessel sealer — seals up to ~7 mm vessels",
    "Ultrasonic (harmonic) — low-temperature cut + coagulation, little smoke",
    "Clips / staplers — mechanical control of named vessels and bowel"
  ],
  overview: {
    definition: "Devices that deliver electrical or ultrasonic energy to divide tissue and achieve hemostasis through laparoscopic instruments, where the surgeon cannot palpate or directly buttress bleeding.",
    pathophysiology: "Monopolar current completes a circuit through the patient to a dispersive pad; high current density at the small tip cuts/coagulates, but energy can divert via insulation defects (insulation failure), to a touching metal instrument (direct coupling), or induced across intact insulation (capacitive coupling) — burning tissue outside the camera's view. Ultrasonic devices convert ~55 kHz mechanical vibration into frictional heat (lower peak temperatures, less collateral spread), while advanced bipolar systems sense tissue impedance to form a collagen-elastin seal.",
    classification: [
      {label:"Monopolar", note:"Tip-to-return-pad circuit; cut & coag; stray-energy risk (insulation failure, coupling)"},
      {label:"Bipolar",   note:"Current limited between jaws; minimal stray energy; ideal near RLN, ureter, bile duct"},
      {label:"Advanced bipolar (vessel seal)", note:"Feedback-controlled seal of vessels up to ~7 mm; low lateral spread"},
      {label:"Ultrasonic / harmonic", note:"Vibration-based cut + coagulation at lower temperature; minimal plume; slower on big vessels"},
      {label:"Mechanical (clips, staplers)", note:"Energy-free control of named vessels, ducts and bowel"}
    ]
  },
  criteria: {
    title: "Mechanisms of stray-energy injury (monopolar)",
    items: [
      { k: "Insulation failure", v: "Defect in shaft coating lets current escape onto tissue out of view" },
      { k: "Direct coupling", v: "Active tip touches another metal instrument, energising it" },
      { k: "Capacitive coupling", v: "Energy induced across intact insulation into a nearby conductor" },
      { k: "Lateral thermal spread", v: "Heat conducts a few mm beyond the tip to adjacent structures" },
      { k: "Mitigation", v: "Active-electrode monitoring, low-voltage 'cut', short bursts, tip always in view" }
    ]
  },
  guidelines: [
    { src: "SAGES — Fundamental Use of Surgical Energy (FUSE) curriculum" },
    { src: "ALSGBI — Safe use of energy devices in laparoscopic surgery" }
  ],
  pearls: [
    "Keep the active electrode in the camera view before activating — most burns happen off-screen",
    "Choose bipolar/ultrasonic near the bile duct, ureter and recurrent laryngeal nerve to limit spread",
    "Use the lowest effective power setting and short activations"
  ],
  mistakes: [
    "Activating monopolar with the tip out of view → unseen bowel burn presenting as delayed perforation",
    "Using monopolar on a structure within thermal-spread distance of the bile duct or ureter",
    "Assuming an ultrasonic device has fully sealed a large named artery without a clip"
  ],
  related: [
    { id: "cholecystitis", note: "Hook-diathermy dissection of Calot's triangle — thermal bile-duct injury risk" },
    { id: "thyroid-ca",    note: "Energy control near the recurrent laryngeal nerve" },
    { id: "crc",           note: "Vessel-sealing of the mesenteric pedicle in laparoscopic colectomy" }
  ]
},
{
  id: "mis-complications", dept: "mis",
  name: "Complications of Minimally Invasive Surgery",
  organ: "Abdominal wall, port sites & cavity",
  severity: "high",
  tags: ["port-site-hernia","gas-embolism","trocar-injury","complications","MIS"],
  hero: "The distinct hazards of access, insufflation and energy use in MIS — from the trivial (surgical emphysema) to the fatal (CO₂ embolism, missed bowel injury).",
  keypoints: [
    "Access injuries (great vessels, bowel) are rare but the leading cause of laparoscopy-related death — most occur at first entry",
    "CO₂ gas embolism: sudden hypotension, hypoxia, ↓end-tidal CO₂ and a 'mill-wheel' murmur — stop insufflation, desufflate, left-lateral head-down (Durant's), 100% O₂",
    "Port-site hernia: bowel through an unclosed ≥10 mm fascial defect — close fascia of large ports to prevent it",
    "Missed thermal bowel injury presents late (post-op day 3–7) with peritonitis and disproportionate pain — low threshold for CT/relook",
    "Surgical (subcutaneous) emphysema and capnothorax follow extraperitoneal CO₂ tracking — usually self-limiting",
    "Shoulder-tip pain and post-op nausea relate to residual CO₂ and peritoneal stretch"
  ],
  differentials: [
    "Port-site bleeding (epigastric vessels) vs intra-abdominal bleeding",
    "Surgical emphysema vs capnothorax vs gas embolism",
    "Early post-op peritonitis: thermal bowel injury vs anastomotic leak vs missed enterotomy",
    "Port-site hernia vs seroma vs wound infection"
  ],
  overview: {
    definition: "Adverse events specific to the minimally invasive approach: those of access (vascular/visceral injury, port-site bleeding/hernia), of pneumoperitoneum (gas embolism, surgical emphysema, capnothorax, cardiorespiratory compromise), and of energy use (thermal injury).",
    epidemiology: "Major vascular/visceral entry injuries occur in well under 1% of cases but carry high mortality; port-site hernia complicates roughly 0.5–3% of cases and rises with larger ports and extraction sites.",
    pathophysiology: "Blind or forced entry lacerates the aorta, iliac vessels or bowel. CO₂ entering an open vein (e.g. during insufflation into a vessel) forms an airlock in the right heart → outflow obstruction. Extraperitoneal CO₂ tracks through tissue planes producing subcutaneous emphysema or pneumothorax. Energy devices cause coagulative necrosis that declares itself days later as the burn perforates.",
    classification: [
      {label:"Access injury", note:"Major vessel or bowel injury, usually at primary entry; convert and repair"},
      {label:"Insufflation: gas embolism", note:"CO₂ into the venous system; cardiovascular collapse; Durant's maneuver + 100% O₂"},
      {label:"Insufflation: emphysema/capnothorax", note:"Extraperitoneal CO₂ tracking; usually self-limiting; exclude tension pneumothorax"},
      {label:"Port-site complications", note:"Bleeding (inferior epigastric), hernia (unclosed fascia), metastasis (oncological cases)"},
      {label:"Energy/thermal injury", note:"Delayed bowel or duct injury from stray energy or lateral spread"}
    ]
  },
  criteria: {
    title: "Recognizing CO₂ gas embolism",
    items: [
      { k: "Sudden ↓ end-tidal CO₂", v: "Capnography drop is an early, sensitive sign" },
      { k: "Cardiovascular collapse", v: "Hypotension, arrhythmia, raised CVP" },
      { k: "Auscultation", v: "Classic 'mill-wheel' machinery murmur" },
      { k: "Hypoxia", v: "Falling SpO₂ despite ventilation" },
      { k: "Immediate management", v: "Stop CO₂, desufflate, left-lateral head-down (Durant's), 100% O₂, aspirate via CVC" }
    ]
  },
  management: {
    conservative: [
      "Surgical emphysema / capnothorax without tension: observe, support ventilation, CO₂ resorbs",
      "Shoulder-tip pain: simple analgesia; expel residual gas at end of case",
      "Small port-site bleed: direct pressure, suture ligation of the port site"
    ],
    medical: [
      "Gas embolism: 100% oxygen, fluid resuscitation, ACLS as needed, aspirate gas from central line",
      "Suspected sepsis from missed injury: resuscitate, broad-spectrum antibiotics, urgent imaging"
    ],
    surgical: [
      { name: "Convert + repair access injury", when: "Major vascular/visceral injury at entry", notes: "Immediate laparotomy; vascular control; call for help" },
      { name: "Relook laparoscopy/laparotomy", when: "Delayed peritonitis / suspected thermal bowel injury", notes: "Do not wait — thermal injuries declare late and progress" },
      { name: "Port-site hernia repair", when: "Symptomatic or obstructed port-site hernia", notes: "Prevent by closing fascia of ≥10 mm ports at index operation" }
    ]
  },
  guidelines: [
    { src: "SAGES — Prevention and management of laparoscopic complications" },
    { src: "ALSGBI — Complications of laparoscopic surgery (UK)" }
  ],
  pearls: [
    "Disproportionate pain and tachycardia on day 3–5 after laparoscopy is a thermal bowel injury until proven otherwise",
    "Durant's maneuver (left lateral, head down) traps a CO₂ airlock away from the RV outflow tract",
    "Always close the fascia of 10 mm+ port and extraction sites"
  ],
  mistakes: [
    "Attributing early post-op peritonitis to 'wind' and discharging the patient",
    "Failing to inspect the port site for bleeding on removal under vision",
    "Not closing the fascia of an extraction-site or 12 mm port"
  ],
  related: [
    { id: "incisional-hernia", note: "Port-site hernia is a form of incisional hernia at a trocar site" },
    { id: "inguinal-hernia",   note: "Mesh and fascial-closure principles to prevent port-site hernia" },
    { id: "cholecystitis",     note: "Bile-duct and bleeding complications of laparoscopic cholecystectomy" }
  ]
},
{
  id: "robotic-surgery", dept: "mis",
  name: "Robotic-Assisted Surgery",
  organ: "Multiple (platform-based)",
  severity: "moderate",
  tags: ["robotic","da-Vinci","wristed","console","MIS"],
  hero: "Master–slave telemanipulation that adds wristed instruments, 3D vision and tremor filtration to laparoscopy — at the cost of tactile feedback, time and money.",
  keypoints: [
    "The surgeon operates from a console; the patient-side cart holds wristed instruments and a 3D endoscope (master–slave, not autonomous)",
    "Advantages: 3D stereoscopic vision, EndoWrist articulation, tremor filtration, motion scaling, ergonomics — best in confined fields (pelvis, mediastinum)",
    "Disadvantages: loss of haptic (tactile) feedback, higher cost, longer set-up/docking, table-position fixed once docked",
    "Pneumoperitoneum physiology is identical to laparoscopy — same cardiorespiratory considerations",
    "Strong general-surgical uses: rectal cancer (TME in the narrow pelvis), complex hernia, bariatric, HPB and foregut work",
    "Emergency undocking drill is essential — the cart must come off the patient fast if they deteriorate"
  ],
  differentials: [
    "Conventional laparoscopy — cheaper, faster set-up, retains some haptics, 2D vision",
    "Open surgery — full haptics, no docking, larger wound",
    "Robotic-assisted — 3D + wristed instruments, no haptics, costly"
  ],
  overview: {
    definition: "A minimally invasive platform in which the surgeon controls wristed instruments and a 3D endoscope remotely from a console (master–slave telemanipulation). The robot does not act autonomously.",
    epidemiology: "Adoption has grown rapidly in colorectal (especially rectal), bariatric, foregut, HPB and hernia surgery; uptake is limited by capital and per-case cost.",
    pathophysiology: "Identical CO₂ pneumoperitoneum physiology to laparoscopy. The added value is mechanical: 7-degree-of-freedom wristed instruments restore intracorporeal dexterity (suturing, dissection in the pelvis), stereoscopic optics restore depth, and software filters tremor and scales motion. The principal trade-off is the loss of force feedback, so the surgeon judges tension visually.",
    classification: [
      {label:"Multiport robotic", note:"Several robotic arms docked to separate ports; the standard configuration"},
      {label:"Single-port robotic", note:"All instruments through one multichannel port; improved cosmesis"},
      {label:"Console ergonomics", note:"Seated, immersive 3D view; reduces surgeon fatigue/musculoskeletal strain"}
    ]
  },
  criteria: {
    title: "Robotic vs conventional laparoscopy — trade-offs",
    items: [
      { k: "Vision", v: "Robotic: true 3D stereoscopic; Lap: 2D (or 3D scope)" },
      { k: "Dexterity", v: "Robotic: wristed 7-DOF; Lap: rigid 4-DOF instruments" },
      { k: "Haptics", v: "Robotic: absent (visual cues only); Lap: limited but present" },
      { k: "Set-up", v: "Robotic: docking time; table fixed once docked" },
      { k: "Cost", v: "Robotic: high capital + consumables" },
      { k: "Best fit", v: "Confined fields needing fine suturing (pelvis, mediastinum)" }
    ]
  },
  technique: {
    title: "Robotic Case Set-up: Docking and Console Operation",
    prep: [
      "Confirm the case suits the robot (a confined field needing fine suturing — pelvis, foregut, HPB); brief the whole team, including the emergency-undocking drill",
      "Standard CO2 pneumoperitoneum physiology applies — same cardiorespiratory considerations as laparoscopy",
      "Position and secure the patient for the whole case — the table cannot be moved once the cart is docked"
    ],
    steps: [
      { n: 1, t: "Port placement", d: "Place robotic ports with adequate spacing (usually ≥8 cm apart) oriented toward the target anatomy; add an assistant port" },
      { n: 2, t: "Position the patient-side cart", d: "Bring the cart in along the planned boom line and dock the arms to the ports without collisions" },
      { n: 3, t: "Dock and insert instruments", d: "Attach the arms; introduce the 3D endoscope and wristed instruments under vision; confirm every instrument tip is seen before moving" },
      { n: 4, t: "Move to the console", d: "The surgeon sits at the console with immersive 3D vision; confirm clutching, camera control and instrument association" },
      { n: 5, t: "Operate", d: "Use wristed articulation, tremor filtration and motion scaling; because there is NO haptic feedback, judge tissue tension by visual cues to avoid suture pull-through" },
      { n: 6, t: "Undock safely / emergency drill", d: "At the end (or if the patient deteriorates) withdraw instruments under vision and undock the arms rapidly; be ready to convert to laparoscopy or open" }
    ],
    pearls: [
      "Rehearse emergency undocking with the team — a deteriorating patient needs the cart off fast",
      "No force feedback: set knots by visual tension cues, not feel",
      "Space the ports well — poorly placed ports cause external arm collisions"
    ]
  },
  guidelines: [
    { src: "SAGES / MIRA — Robotic surgery consensus and credentialing" },
    { src: "NICE / specialty bodies — Robotic platforms in colorectal & bariatric surgery" }
  ],
  pearls: [
    "Because haptics are absent, judge tissue tension by visual cues to avoid suture pull-through",
    "Rehearse the emergency-undocking drill with the whole theater team",
    "Robotics shines where laparoscopy is hardest — suturing deep in the pelvis"
  ],
  mistakes: [
    "Pulling sutures too tight because there is no force feedback",
    "Slow, unpracticed undocking when a patient deteriorates",
    "Choosing the robot for a case where it adds cost and time without clinical benefit"
  ],
  related: [
    { id: "crc",              note: "Robotic TME for rectal cancer in the narrow pelvis" },
    { id: "inguinal-hernia",  note: "Robotic TAPP / complex abdominal-wall reconstruction" },
    { id: "pancreatic-cancer",note: "Robotic pancreatic and HPB resections in selected centers" }
  ]
},
{
  id: "diagnostic-laparoscopy", dept: "mis",
  name: "Diagnostic Laparoscopy",
  organ: "Peritoneal cavity",
  severity: "moderate",
  tags: ["diagnostic","staging","acute-abdomen","laparoscopy","MIS"],
  hero: "Looking directly inside the abdomen to diagnose, stage or decide on resectability — and often to treat in the same sitting.",
  keypoints: [
    "Three core roles: investigate the acute/undiagnosed abdomen, stage intra-abdominal malignancy, and assess chronic pelvic/abdominal pain",
    "Cancer staging laparoscopy detects peritoneal and small surface metastases that CT/PET miss — sparing patients a non-therapeutic laparotomy",
    "In the stable acute abdomen it can confirm a diagnosis (e.g. appendicitis, ischemia) and convert to a therapeutic procedure",
    "Particularly useful in women of reproductive age, where it distinguishes appendicitis from gynecological pathology",
    "Peritoneal washings/biopsy can be taken at the same time for cytology and histology",
    "Not for the hemodynamically unstable patient — that is a laparotomy"
  ],
  differentials: [
    "CT abdomen/pelvis — first-line cross-sectional imaging",
    "Diagnostic laparoscopy — direct vision + biopsy + potential treatment",
    "Laparotomy — unstable patient or when open access is required",
    "Interval imaging / observation — selected stable, improving patients"
  ],
  overview: {
    definition: "A minimally invasive operation to directly inspect the peritoneal cavity for diagnosis, staging, or decision-making, with the option to take biopsies/washings or proceed to definitive treatment.",
    pathophysiology: "Standard CO₂ pneumoperitoneum gives a panoramic, magnified view of peritoneal surfaces, liver and pelvis. Surface deposits a few millimeters across — below the resolution of CT — become visible, refining oncological decisions and avoiding open exploration that would not change management.",
    classification: [
      {label:"Emergency diagnostic laparoscopy", note:"Stable acute/undiagnosed abdomen; confirm diagnosis and treat if able"},
      {label:"Staging laparoscopy", note:"Gastric, pancreatic, esophageal & ovarian cancer; detect occult peritoneal/liver metastases"},
      {label:"Elective for chronic pain", note:"Assess chronic pelvic/abdominal pain, adhesions, endometriosis"},
      {label:"Second-look laparoscopy", note:"Re-assess bowel viability after ischemia or borderline resection"}
    ]
  },
  criteria: {
    title: "Common indications",
    items: [
      { k: "Acute abdomen (stable)", v: "Equivocal RIF pain, ?appendicitis vs gynae, suspected ischemia" },
      { k: "Cancer staging", v: "Gastric, pancreatic, esophageal, hepatobiliary, ovarian" },
      { k: "Trauma (selected)", v: "Stable penetrating injury to exclude peritoneal breach / diaphragm injury" },
      { k: "Chronic pain", v: "Adhesions, endometriosis, chronic pelvic pain" },
      { k: "Contraindication", v: "Hemodynamic instability → laparotomy" }
    ]
  },
  technique: {
    title: "Diagnostic laparoscopy — systematic survey",
    prep: [
      "GA; decompress stomach (NG) and bladder (catheter)",
      "Supine ± lithotomy for pelvic access; ability to tilt the table",
      "Consent for proceeding to therapeutic procedure or conversion"
    ],
    steps: [
      { n: 1, t: "Establish pneumoperitoneum", d: "Open/Veress entry; place camera port at umbilicus." },
      { n: 2, t: "Initial panoramic look", d: "Inspect entry site for injury; survey four quadrants before adding ports." },
      { n: 3, t: "Place working ports", d: "Under vision, sited to reach the area of interest." },
      { n: 4, t: "Systematic inspection", d: "Liver and peritoneal surfaces, diaphragm, stomach, small/large bowel run, pelvis and adnexa." },
      { n: 5, t: "Sampling", d: "Peritoneal washings for cytology; biopsy suspicious deposits." },
      { n: 6, t: "Decide", d: "Treat (e.g. appendectomy), stage, or convert as indicated." }
    ],
    pearls: [
      "Run the whole small bowel from DJ flexure to cecum so nothing is missed",
      "Take washings before manipulation in cancer staging",
      "Tilt the table to let bowel fall away from the area of interest rather than retracting hard"
    ]
  },
  guidelines: [
    { src: "SAGES — Diagnostic laparoscopy guideline" },
    { src: "AUGIS — Staging laparoscopy for upper-GI cancer" }
  ],
  pearls: [
    "Staging laparoscopy can save a patient with occult peritoneal disease from a futile laparotomy",
    "In young women, it reliably separates appendicitis from ovarian/tubal pathology",
    "If you can see it, you can usually biopsy it — get tissue"
  ],
  mistakes: [
    "Performing diagnostic laparoscopy on an unstable patient instead of a laparotomy",
    "Failing to run the entire bowel and missing a second pathology",
    "Forgetting washings/cytology in a cancer-staging case"
  ],
  related: [
    { id: "acute-abdomen",  note: "Diagnostic laparoscopy in the equivocal acute abdomen" },
    { id: "appendicitis",   note: "Confirm and treat appendicitis at the same sitting" },
    { id: "gastric-ca",     note: "Staging laparoscopy detects occult peritoneal metastases" },
    { id: "trauma-laparotomy", note: "When direct vision is not enough — proceed to laparotomy" }
  ]
},
{
  id: "conversion-to-open", dept: "mis",
  name: "Conversion to Open Surgery",
  organ: "Operative decision-making",
  severity: "moderate",
  tags: ["conversion","safety","decision-making","laparoscopy","MIS"],
  hero: "Switching from a laparoscopic to an open operation — a sign of sound judgement, not failure, and a deliberate step toward patient safety.",
  keypoints: [
    "Conversion is a decision for safety or progress, NOT a complication or an admission of defeat",
    "Reactive conversion responds to a problem (bleeding, injury, instability); strategic conversion anticipates difficulty before harm occurs — strategic is safer",
    "Common triggers: failure to progress, dense adhesions, unclear anatomy, uncontrolled bleeding, suspected/confirmed injury, equipment failure",
    "Higher conversion rates with obesity, prior surgery, severe inflammation, malignancy and emergency presentation",
    "Counsel and consent every laparoscopic patient for possible conversion beforehand",
    "Converting early and electively beats converting late under duress"
  ],
  differentials: [
    "Persevere laparoscopically — only if safe and progressing",
    "Strategic conversion — pre-emptive, controlled, before harm",
    "Reactive (emergency) conversion — forced by bleeding/injury/instability",
    "Abort and stage — damage control, return when optimized"
  ],
  overview: {
    definition: "The intra-operative decision to abandon the laparoscopic approach and complete the operation through an open incision, made when MIS is unsafe or not progressing.",
    pathophysiology: "Adhesions, distorted or unclear anatomy (e.g. a fibrotic Calot's triangle), bleeding that cannot be controlled laparoscopically, or patient physiology that cannot tolerate pneumoperitoneum all reduce the safety margin. Open access restores tactile feedback and direct vascular control, trading a larger wound for control of the situation.",
    classification: [
      {label:"Strategic (pre-emptive)", note:"Surgeon converts because difficulty is foreseen, before any injury — associated with better outcomes"},
      {label:"Reactive (forced)", note:"Conversion driven by an event — hemorrhage, visceral injury, instability"},
      {label:"Anatomical", note:"Adhesions, obscure anatomy, large/fixed tumor preventing safe laparoscopic completion"},
      {label:"Physiological", note:"Patient cannot tolerate pneumoperitoneum or steep positioning"}
    ]
  },
  criteria: {
    title: "Triggers that should prompt conversion",
    items: [
      { k: "Failure to progress", v: "No advance after a reasonable, defined period" },
      { k: "Unclear anatomy", v: "Critical view / key structures cannot be safely identified" },
      { k: "Hemorrhage", v: "Bleeding not controllable laparoscopically" },
      { k: "Visceral injury", v: "Bowel/duct/vascular injury needing open repair" },
      { k: "Physiology", v: "Cardiorespiratory intolerance of pneumoperitoneum" },
      { k: "Equipment failure", v: "Insufflator/camera/energy device failure mid-case" }
    ]
  },
  guidelines: [
    { src: "SAGES — When and how to convert; the 'critical view of safety' philosophy" },
    { src: "AUGIS — Difficult laparoscopic cholecystectomy & subtotal/bail-out strategies" }
  ],
  pearls: [
    "If the critical view of safety cannot be achieved, convert or perform a subtotal cholecystectomy — do not 'have a go'",
    "Document the reason for conversion clearly; it is good practice, not a black mark",
    "A planned conversion in a controlled patient is far safer than a forced one after injury"
  ],
  mistakes: [
    "Persisting laparoscopically out of pride until an injury forces conversion",
    "Failing to consent the patient for possible conversion pre-operatively",
    "Viewing conversion as a personal or technical failure rather than good judgement"
  ],
  related: [
    { id: "cholecystitis", note: "Difficult cholecystectomy: critical view, subtotal, or convert" },
    { id: "crc",           note: "Conversion in laparoscopic colectomy for bulky/fixed tumors" },
    { id: "diverticulitis",note: "Hostile pelvis in complicated diverticular disease" }
  ]
},
{
  id: "therapeutic-endoscopy", dept: "mis",
  name: "Therapeutic Endoscopy (Principles)",
  organ: "Gastrointestinal tract lumen",
  severity: "moderate",
  tags: ["endoscopy","EMR","ESD","stenting","hemostasis","MIS"],
  hero: "Treating disease through the natural lumen with a flexible scope — the least invasive end of the MIS spectrum, from controlling a bleed to resecting early cancer.",
  keypoints: [
    "Endoscopic hemostasis for GI bleeding combines therapies: injection (adrenaline), thermal/contact (heater probe, coagulation) and mechanical (clips, bands) — adrenaline alone is never enough",
    "Polypectomy and EMR (endoscopic mucosal resection) remove mucosal/submucosal lesions; ESD (endoscopic submucosal dissection) takes larger lesions en-bloc",
    "Self-expanding metal stents relieve malignant obstruction (esophagus, gastric outlet, colon) and can bridge colonic-cancer obstruction to elective surgery",
    "Variceal bleeding: band ligation (esophageal) and the choices around gastric varices sit alongside pharmacological and radiological options",
    "Key risks: perforation, bleeding, and (for ERCP) post-ERCP pancreatitis",
    "Endoscopy is often the first therapeutic step before, instead of, or after surgery — know its limits"
  ],
  differentials: [
    "Endoscopic therapy — luminal, no incision, repeatable",
    "Interventional radiology — embolization/stenting via the vascular or percutaneous route",
    "Laparoscopic / open surgery — when endoscopy fails or disease is transmural",
    "Conservative / pharmacological management — selected stable patients"
  ],
  overview: {
    definition: "The use of a flexible endoscope to deliver treatment within the GI lumen: hemostasis, resection of early neoplasia, dilatation/stenting of strictures, and biliary intervention (ERCP).",
    pathophysiology: "Working through the natural orifice avoids any body-wall incision, minimizing physiological insult and allowing repeat sessions. Submucosal injection lifts a lesion away from the muscularis to allow safe snare resection (EMR) or dissection (ESD); self-expanding stents exert radial force to re-canalise a malignant stricture. The trade-off is a confined two-dimensional working field, limited to mucosa/submucosa, with perforation and bleeding as principal hazards.",
    classification: [
      {label:"Hemostasis", note:"Injection + thermal + mechanical for non-variceal bleeding; banding for varices"},
      {label:"Resection", note:"Polypectomy, EMR (piecemeal/en-bloc), ESD for en-bloc removal of larger early lesions"},
      {label:"Luminal patency", note:"Balloon dilatation; self-expanding metal stents for malignant obstruction"},
      {label:"Biliary / pancreatic (ERCP)", note:"Sphincterotomy, stone extraction, stenting; risk of post-ERCP pancreatitis"},
      {label:"Enteral access", note:"PEG/PEJ for feeding"}
    ]
  },
  criteria: {
    title: "Selected therapeutic-endoscopy applications & risks",
    items: [
      { k: "Non-variceal UGIB", v: "Dual therapy (e.g. adrenaline + clip/thermal); never adrenaline alone" },
      { k: "Variceal bleeding", v: "Esophageal band ligation; gastric varices per local protocol" },
      { k: "Early GI neoplasia", v: "EMR / ESD for mucosal (and selected submucosal) lesions" },
      { k: "Malignant obstruction", v: "SEMS for esophageal, gastric-outlet and colonic obstruction" },
      { k: "Obstructing colon cancer", v: "Stent as a bridge to elective surgery in selected patients" },
      { k: "Main risks", v: "Perforation, bleeding, post-ERCP pancreatitis" }
    ]
  },
  technique: {
    title: "Endoscopic Hemostasis for GI Bleeding (Principles)",
    prep: [
      "Resuscitate and correct coagulopathy first; secure the airway for a massive upper-GI or variceal bleed",
      "Pre-treat: IV PPI (suspected ulcer) or terlipressin + prophylactic antibiotics (suspected varices)",
      "Have injection, thermal and mechanical tools all available before starting"
    ],
    steps: [
      { n: 1, t: "Locate and clean", d: "Systematic endoscopy; wash clots and debris to expose the bleeding point; grade an ulcer (Forrest) or identify varices" },
      { n: 2, t: "Injection (first modality)", d: "Submucosal adrenaline (1:10,000) around a bleeding ulcer slows flow and improves the view — but never rely on it alone" },
      { n: 3, t: "Add a definitive modality", d: "Combine with mechanical (through-the-scope or over-the-scope clips) or thermal (heater probe/coagulation) for durable hemostasis" },
      { n: 4, t: "Variceal bleeding", d: "Esophageal varices: band-ligate each column; gastric varices: cyanoacrylate injection per protocol" },
      { n: 5, t: "Confirm and document", d: "Confirm bleeding has stopped; record the lesion and therapy for the next team" },
      { n: 6, t: "Plan escalation", d: "Rebleed → one repeat endoscopy, then IR embolization or surgery; TIPSS for uncontrolled variceal bleeding" }
    ],
    pearls: [
      "Two modalities beat one — adrenaline injection plus a clip or thermal method for a high-risk ulcer",
      "Consent specifically for perforation and bleeding (and post-ERCP pancreatitis for biliary work)",
      "Know the limit: endoscopic resection reaches mucosa/submucosa only — deeper disease needs surgery"
    ]
  },
  guidelines: [
    { src: "BSG — British Society of Gastroenterology therapeutic-endoscopy guidelines" },
    { src: "ESGE — European Society of Gastrointestinal Endoscopy (EMR/ESD, hemostasis, stenting)" }
  ],
  pearls: [
    "For a bleeding peptic ulcer, combine two modalities — adrenaline injection plus a mechanical or thermal method",
    "A colonic stent can convert an emergency obstructed cancer into an elective, optimized resection",
    "Consent specifically for perforation and bleeding; for ERCP, for post-ERCP pancreatitis"
  ],
  mistakes: [
    "Relying on adrenaline injection alone for a high-risk bleeding ulcer (high rebleed rate)",
    "Over-insufflating a near-obstructed colon and causing perforation",
    "Forgetting that endoscopic resection is limited to mucosa/submucosa — deeper invasion needs surgery"
  ],
  related: [
    { id: "ugib",                       note: "Endoscopic hemostasis for upper-GI bleeding" },
    { id: "crc",                        note: "Colonic stenting as a bridge to surgery in obstruction" },
    { id: "gastric-outlet-obstruction", note: "Enteral SEMS for malignant gastric-outlet obstruction" },
    { id: "barretts",                   note: "EMR/ESD and ablation for Barrett's dysplasia / early cancer" }
  ]
},
{
  id: "peg", dept: "mis",
  name: "Percutaneous Endoscopic Gastrostomy (PEG)",
  latin: "Gastrostomia endoscopica percutanea",
  organ: "Stomach (anterior wall) — abdominal wall interface",
  severity: "moderate",
  tags: ["endoscopy","enteral access","feeding","PEG","nutrition","MIS"],
  hero: "Endoscopically guided placement of a feeding tube through the abdominal wall into the stomach — the standard route for enteral nutrition when swallowing is unsafe but the gut still works.",
  keypoints: [
    "Indication is a functioning gut plus anticipated enteral feeding beyond ~4 weeks — a nasogastric tube covers shorter needs",
    "Transillumination of the abdominal wall AND a clear finger-indentation seen endoscopically are the two safety signs that must both be present before puncture ('safe tract')",
    "Three techniques: Pull (Ponsky–Gauderer, commonest), Push (Sachs–Vine, over a guidewire), and Introducer/Direct (Russell, with gastropexy) — the tube is pulled/pushed through the mouth in the first two, placed directly through the wall in the third",
    "Push and Introducer methods avoid dragging the tube past an obstructing pharyngeal/oesophageal tumour, reducing the theoretical risk of tumour seeding at the stoma",
    "Give a single dose of IV prophylactic antibiotic (e.g. co-amoxiclav / cephalosporin) before the procedure — it reduces peristomal wound infection, the commonest complication",
    "Buried bumper syndrome and colocutaneous fistula are the feared delayed complications; the tract takes ~2–4 weeks to mature before a dislodged tube can be safely replaced blindly",
    "Ethical/consent nuance: in advanced dementia PEG feeding does not improve survival or reduce aspiration — decision needs an MDT and clear goals of care"
  ],
  differentials: [
    "Nasogastric (NG) tube — non-surgical, for short-term (<4 weeks) feeding",
    "Nasojejunal (NJ) tube — post-pyloric feeding when gastric feeding not tolerated / high aspiration risk",
    "PEG with jejunal extension (PEG-J) or direct PEJ — post-pyloric feeding via a gastrostomy",
    "Radiologically inserted gastrostomy (RIG) — image-guided, when endoscopy impossible (e.g. tight pharyngeal tumour, inability to transilluminate)",
    "Surgical (open/laparoscopic) gastrostomy — when percutaneous and radiological routes fail or during another laparotomy",
    "Total parenteral nutrition (TPN) — reserved for a non-functioning or inaccessible gut"
  ],
  overview: {
    definition: "Placement of a feeding tube directly into the stomach through the anterior abdominal wall under endoscopic guidance, providing durable enteral access for nutrition, hydration and medication in patients who cannot maintain adequate oral intake but have a functioning gastrointestinal tract.",
    epidemiology: "One of the commonest therapeutic endoscopic procedures; leading indications are neurological dysphagia (stroke, motor neurone disease, advanced Parkinson's) and head-and-neck or oesophageal cancer requiring prolonged nutritional support during treatment.",
    pathophysiology: "A functioning stomach and small bowel are apposed to the abdominal wall; endoscopic insufflation pushes the anterior gastric wall against the peritoneum, and transillumination plus finger indentation confirm no interposed viscus (colon, liver, small bowel). A trocar punctures the apposed walls; the tube is secured by an internal bumper/balloon and an external flange, and a fibrous tract forms over 2–4 weeks that seals the stomach to the abdominal wall.",
    classification: [
      {label:"Pull (Ponsky–Gauderer)", note:"Commonest; a guidewire is snared endoscopically and brought out through the mouth, and the tube is pulled down the oesophagus and out through the abdominal wall"},
      {label:"Push (Sachs–Vine)", note:"A stiff tube is pushed over an endoscopically placed guidewire from mouth to stomach and out through the wall; useful where a bulky tube shouldn't be dragged retrograde through the pharynx/oesophagus"},
      {label:"Introducer / Direct (Russell)", note:"Tube introduced directly through the abdominal wall using a peel-away sheath after gastropexy (T-fasteners); no oral passage of the tube — preferred with obstructing pharyngo-oesophageal tumours to avoid stomal seeding"},
      {label:"PEG-J / direct PEJ", note:"Jejunal extension through a PEG (or direct percutaneous endoscopic jejunostomy) for post-pyloric feeding in gastroparesis or high aspiration risk"}
    ]
  },
  criteria: {
    title: "Indications, Contraindications & Timing",
    items: [
      { k: "Core indication", v: "Functioning gut + anticipated enteral feeding > ~4 weeks (dysphagia from stroke/MND, head-and-neck or oesophageal cancer, severe facial trauma)" },
      { k: "Absolute contraindications", v: "Inability to appose gastric to abdominal wall (no transillumination), uncorrectable coagulopathy, active peritonitis, gastric outlet obstruction, expected survival < weeks with no benefit" },
      { k: "Relative contraindications", v: "Ascites, previous upper-GI/gastric surgery, morbid obesity, hepatomegaly, gastric varices, peritoneal dialysis, ventriculoperitoneal shunt" },
      { k: "Antibiotic prophylaxis", v: "Single IV dose (co-amoxiclav or cephalosporin) 30 min pre-procedure — reduces peristomal infection" },
      { k: "First feed timing", v: "Water/feed can usually start ~4 hours post-procedure (early feeding is safe per RCT evidence)" },
      { k: "Tract maturation", v: "≈ 2–4 weeks; a tube dislodged before this should NOT be blindly reinserted — risk of intraperitoneal misplacement (get contrast check / endoscopy)" },
      { k: "Dementia caveat", v: "No survival or aspiration benefit in advanced dementia — an MDT / goals-of-care decision, not a default" }
    ]
  },
  technique: {
    title: "Pull-Type PEG (Ponsky–Gauderer) — with Push variant note",
    prep: [
      "Consent covering bleeding, perforation, peristomal infection, buried bumper and colonic injury; confirm fasting and stop/adjust anticoagulation",
      "Single dose IV antibiotic prophylaxis; check platelets/clotting",
      "Position supine; sedation and pharyngeal anaesthesia; two operators (endoscopist + abdominal operator)"
    ],
    steps: [
      { n: 1, t: "Diagnostic endoscopy", d: "Pass the scope, exclude obstruction/malignancy contraindicating placement, and insufflate to appose the anterior gastric wall to the abdominal wall" },
      { n: 2, t: "Identify the safe tract", d: "Darken the room: confirm 1:1 transillumination of the abdominal wall AND clear endoscopic finger-indentation at the chosen site (usually left upper quadrant) — both must be present" },
      { n: 3, t: "Puncture & guidewire", d: "Infiltrate local anaesthetic, make a small skin incision, and pass the trocar/cannula into the insufflated stomach; thread a guidewire, snare it endoscopically and withdraw it out through the mouth" },
      { n: 4, t: "Pull the tube (or Push)", d: "Pull: attach the PEG tube to the oral end of the wire and pull it down the oesophagus and out through the abdominal wall until the internal bumper seats against the mucosa. Push variant: railroad a stiff tapered tube over the wire from mouth to stoma instead of pulling" },
      { n: 5, t: "Confirm & secure", d: "Re-scope to confirm the internal bumper lies loosely against the mucosa (not too tight — avoids buried bumper); fit the external flange leaving a few mm of play; record the cm marking at the skin" },
      { n: 6, t: "Document & feed", d: "Record technique, tube size and skin marking; start water/feed at ~4 h; daily stoma care and rotate/advance the tube once the tract matures to prevent buried bumper" }
    ],
    pearls: [
      "No transillumination or no finger-indentation = abort and consider RIG — never puncture blind",
      "Leave the external bumper slightly loose (a few mm): over-tight approximation is the direct cause of buried bumper syndrome",
      "For an obstructing pharyngo-oesophageal tumour, choose the Introducer (Russell) or Push method to avoid dragging the tube — and the tumour — across the stoma"
    ]
  },
  guidelines: [
    { src: "BSG — British Society of Gastroenterology: percutaneous endoscopic gastrostomy / enteral feeding" },
    { src: "ESGE / ESPEN — endoscopic and clinical-nutrition guidelines on PEG placement and care" },
    { src: "NICE CG32 — Nutrition support in adults" }
  ],
  pearls: [
    "Both safety signs — transillumination and finger-indentation — must be present before puncture; if either is absent, switch to a radiologically inserted gastrostomy (RIG)",
    "Early feeding (~4 h) is supported by RCT evidence; you do not need to wait 24 hours",
    "Rotate and re-seat the tube regularly once the tract is mature to prevent the internal bumper eroding into the wall (buried bumper)"
  ],
  mistakes: [
    "Puncturing without confirming transillumination AND finger-indentation — the mechanism of colonic/small-bowel injury and colocutaneous fistula",
    "Fixing the external bumper too tightly, causing pressure necrosis and buried bumper syndrome",
    "Blindly reinserting a tube dislodged within the first 2–4 weeks before the tract has matured — risks feeding into the peritoneum",
    "Offering PEG as a default in advanced dementia despite no survival or aspiration benefit"
  ],
  related: [
    { id: "therapeutic-endoscopy",       note: "PEG is the enteral-access application of therapeutic endoscopy" },
    { id: "dysphagia",                   note: "Neurological dysphagia is the leading indication for long-term PEG feeding" },
    { id: "oesophageal-cancer",          note: "Nutritional support during treatment; use Push/Introducer to avoid stomal seeding" },
    { id: "gastric-outlet-obstruction",  note: "A contraindication to gastric feeding — consider post-pyloric PEG-J instead" }
  ]
}
];

if (typeof module !== 'undefined') module.exports = { MIS_DISEASES };
