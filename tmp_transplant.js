// TRANSPLANT — General Surgery relevant: liver-tx, pancreas-tx, small-bowel-tx, living-donor-hepatectomy, renal-tx
// (heart-tx and lung-tx skipped — not general surgery)
const TRANSPLANT_DISEASES = [
{
  id: "liver-tx",
  dept: "transplant",
  name: "Liver Transplantation",
  latin: "Transplantatio hepatis",
  organ: "Liver",
  severity: "high",
  tags: ["transplant","liver","surgery","immunosuppression"],
  hero: "Only curative treatment for end-stage liver disease and acute liver failure. Five-year survival >75%. MELD score guides allocation. Technical complications (hepatic artery thrombosis, biliary stricture) are major causes of graft loss.",
  keypoints: [
    "Indications: ESLD (MELD ≥15), acute liver failure, HCC within Milan criteria, metabolic liver disease",
    "MELD score (creatinine, bilirubin, INR) used for organ allocation — higher MELD = higher priority",
    "Orthotopic liver transplant (OLT): recipient hepatectomy + donor liver implantation (IVC, portal vein, hepatic artery, bile duct)",
    "HAT (hepatic artery thrombosis): most feared early complication — retransplantation often required",
    "Immunosuppression: tacrolimus + mycophenolate ± prednisolone; lifelong"
  ],
  differentials: ["HCC outside Milan criteria (listing criteria not met)","Portal hypertension managed medically","Biliary reconstruction complication","DDLT vs LDLT decision"],
  mnemonics: [
    {name:"MELD score", text:"MELD = 9.57×ln(Cr) + 3.78×ln(Bili) + 11.20×ln(INR) + 6.43; >15 = consider listing; >25 = active waitlist"},
    {name:"Milan criteria (HCC listing)", text:"Single ≤5cm OR up to 3 nodules each ≤3cm; no macrovascular invasion; no extrahepatic spread"}
  ],
  overview: {
    definition: "Surgical replacement of a diseased native liver with a donor liver (deceased donor whole organ or living donor right lobe), restoring normal hepatic synthetic and metabolic function.",
    epidemiology: "~1000 liver transplants/year in UK. 5-year survival >75%. Most common indications: alcohol-related liver disease (ALD), NASH/NAFLD cirrhosis, PSC, autoimmune hepatitis, HCC, Wilson's, cryptogenic.",
    pathophysiology: "ESLD: hepatocellular failure (synthetic dysfunction — coagulopathy, hypoalbuminaemia) + portal hypertension (varices, ascites, HRS, HE). Transplant reverses all hepatocellular failure manifestations; portal hypertension resolves with normal flow through new graft.",
    classification: [
      "Deceased donor liver transplant (DDLT): whole organ; DBD (donation after brain death) vs DCD (donation after circulatory death)",
      "Living donor liver transplant (LDLT): right lobe (segments V–VIII) for adults; left lobe for paediatric recipients",
      "Split liver transplant: one deceased donor liver split for 2 recipients (right lobe adult; left lobe child)",
      "Auxiliary transplant: partial liver transplant alongside native liver (rare — for metabolic disease)"
    ]
  },
  diagnosis: {
    history: [
      "Decompensated cirrhosis: recurrent ascites, hepatic encephalopathy, spontaneous bacterial peritonitis, variceal bleeding",
      "Acute liver failure: paracetamol overdose, fulminant viral hepatitis, Wilson's (acute), Budd-Chiari",
      "HCC within Milan criteria — MELD exception points",
      "Primary sclerosing cholangitis (PSC): recurrent cholangitis, dominant stricture",
      "Alcohol-associated: minimum 6-month abstinence + psychiatric clearance",
      "NASH: increasing indication with obesity epidemic"
    ],
    examination: [
      "Hepatomegaly or small cirrhotic liver",
      "Splenomegaly, ascites, peripheral oedema, jaundice, palmar erythema, spider naevi",
      "Encephalopathy grading (West Haven I–IV)",
      "Muscle wasting (sarcopenia — independently predicts post-transplant outcome)"
    ],
    investigations: [
      {name:"MELD score", role:"Cr + Bili + INR — allocation and waitlist priority; MELD-Na adds sodium"},
      {name:"Child-Pugh score", role:"Older prognostic tool; A/B/C; used with MELD for assessment"},
      {name:"CT abdomen (triphasic) + chest", role:"Liver parenchyma, portal vein patency, hepatic vasculature, spleen size, HCC detection and staging"},
      {name:"Liver biopsy (occasionally)", role:"Uncertain aetiology; assess fibrosis; donor liver quality assessment"},
      {name:"Cardiac assessment: ECHO + stress testing", role:"All transplant candidates; cardiac disease common in ESLD"},
      {name:"Pulmonary assessment: PFTs, V/Q if low SpO₂", role:"Hepatopulmonary syndrome (HPS): low SpO₂, intrapulmonary shunting; portopulmonary hypertension (PoPH): contraindication if mPAP >50"},
      {name:"AFP + tumour staging for HCC", role:"Milan criteria assessment; AFP >1000 predicts poor outcomes"},
      {name:"Crossmatch/HLA, blood group", role:"Compatibility testing"}
    ]
  },
  criteria: {
    title: "King's College Criteria (Acute Liver Failure — Transplant Listing)",
    items: [
      {k:"Paracetamol ALF", v:"pH <7.3 OR (INR >6.5 + Cr >300 + Grade 3–4 encephalopathy)"},
      {k:"Non-paracetamol ALF", v:"INR >6.5 OR any 3 of: unfavourable aetiology (non-A/B/drug/unknown) + age <10 or >40 + seronegative hepatitis + drug reaction + jaundice >7 days before encephalopathy + Bili >300 + INR >3.5"},
      {k:"MELD ≥15", v:"Listing threshold for elective transplant (ESLD)"},
      {k:"Milan criteria (HCC)", v:"Single ≤5cm OR ≤3 nodules each ≤3cm; no vascular invasion; no extrahepatic disease"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "MELD <15: optimise medical management; treat complications (ascites, HRS, SBP, varices, HE)",
      "Bridge to transplant for HCC: TACE, ablation (RFA/MWA), SIRT",
      "Nutritional optimisation: high-protein, high-calorie; BCAA supplements; avoid protein restriction in HE",
      "Alcohol: mandatory abstinence (minimum 6 months); addiction support"
    ],
    medical: [
      "Immunosuppression induction: methylprednisolone IV at reperfusion; basiliximab (IL-2R antagonist) for high-risk",
      "Maintenance immunosuppression: tacrolimus (target trough 8–12ng/mL initially) + mycophenolate mofetil ± prednisolone taper",
      "Prophylaxis: CMV (valganciclovir), PCP (co-trimoxazole), antifungal (fluconazole); lifelong",
      "Rejection treatment: high-dose IV methylprednisolone pulse × 3 days; anti-thymocyte globulin for steroid-resistant"
    ],
    surgical: [
      {name:"Recipient hepatectomy", when:"Part of OLT procedure; technically most difficult phase in cirrhotic patients (coagulopathy, varices, adhesions)", notes:"Control of hepatic veins, IVC, portal vein; hepatic artery division; bile duct division; total hepatectomy; piggyback vs conventional caval replacement"},
      {name:"Graft implantation — piggyback technique", when:"Preferred: recipient retrohepatic IVC preserved (piggyback); donor IVC anastomosed end-to-side or side-to-side to recipient IVC", notes:"Reduces vena cava clamping time; better haemodynamic stability; caval anastomosis + portal vein + hepatic artery + bile duct"},
      {name:"Biliary reconstruction", when:"Part of OLT; standard: duct-to-duct (choledochocholedochostomy) over T-tube or with duct-to-duct primary closure", notes:"Roux-en-Y hepaticojejunostomy if duct size mismatch, diseased native duct (PSC), or paediatric"},
      {name:"Living donor right hepatectomy", when:"LDLT for adult recipient — see living-donor-hepatectomy entry", notes:"Right lobe (>40% estimated liver remnant for donor safety)"}
    ]
  },
  technique: {
    title: "Key Anastomoses in Orthotopic Liver Transplantation",
    prep: [
      "Cold ischaemia time: minimise (<12h DBD; <6h DCD)",
      "Back-table preparation: donor liver perfused, vessels prepared",
      "Venovenous bypass (optional in piggyback): decompresses portal and systemic circulation during anhepatic phase"
    ],
    steps: [
      {n:1, t:"Recipient hepatectomy", d:"Divide all ligaments; control hepatic veins at IVC; control portal vein, hepatic artery; divide bile duct; complete hepatectomy"},
      {n:2, t:"Caval anastomosis (piggyback)", d:"Side-clamp on recipient IVC; anastomose donor IVC ostia (hepatic veins) to recipient IVC side-to-side; 3-0 Prolene running suture"},
      {n:3, t:"Portal vein anastomosis", d:"End-to-end portal vein anastomosis; 5-0 Prolene; growth factor built in (loose suture loop)"},
      {n:4, t:"Reperfusion", d:"Remove IVC clamp then portal vein clamp; reperfusion — post-reperfusion syndrome (bradycardia, ↓BP) treated with atropine, calcium, vasopressors"},
      {n:5, t:"Hepatic artery anastomosis", d:"Loupe magnification or operating microscope; end-to-end anastomosis or variant anatomy patch; 6-0 Prolene; Doppler flow check immediately after"},
      {n:6, t:"Biliary anastomosis", d:"Duct-to-duct over T-tube or without; 5-0 PDS interrupted sutures; leak test with saline"}
    ],
    pearls: [
      "Hepatic artery thrombosis (HAT): check Doppler intraop AND daily for first 7 days post-op; early HAT = retransplantation",
      "Primary non-function (PNF): graft never functions post-reperfusion; requires urgent retransplantation",
      "Reperfusion syndrome: vasodilation from cold, acidic, hyperkalaemic graft blood; calcium + bicarbonate given before reperfusion"
    ]
  },
  guidelines: [
    {src:"NHS Blood and Transplant: Liver transplantation selection criteria and recipient registration policy"},
    {src:"EASL Clinical Practice Guidelines: Liver transplantation 2016"},
    {src:"AASLD/ILTS: Liver transplantation guidelines"},
    {src:"NICE: Organ donation and transplantation"}
  ],
  pearls: [
    "MELD score determines waitlist priority — calculate and track all ESLD patients",
    "Hepatic artery thrombosis: most common vascular complication (2–5%); early = surgical revision/retransplant; late = biliary ischaemia/stricture",
    "Post-transplant lymphoproliferative disorder (PTLD): EBV-associated; reduce immunosuppression + rituximab"
  ],
  mistakes: [
    "Not checking intraoperative hepatic artery Doppler after anastomosis — early HAT missed",
    "Alcohol relapse assessment inadequate — multidisciplinary psychosocial assessment mandatory",
    "Delaying listing for HCC within Milan criteria — downstaging treatments buy time but early listing better"
  ]
},
{
  id: "renal-tx",
  dept: "transplant",
  name: "Renal Transplantation",
  latin: "Transplantatio renis",
  organ: "Kidney",
  severity: "high",
  tags: ["transplant","kidney","renal","immunosuppression"],
  hero: "Definitive treatment for end-stage renal disease. Extraperitoneal iliac fossa placement. Urological and vascular complications are the main early post-operative issues.",
  keypoints: [
    "Transplant kidney placed extraperitoneally in iliac fossa: renal vein to external iliac vein, renal artery to external iliac artery",
    "Ureter anastomosed to bladder (ureteroneocystostomy — Lich-Gregoir technique)",
    "Delayed graft function (DGF): oliguria/anuria post-op; ATN from ischaemia; Doppler to exclude thrombosis",
    "Rejection: hyperacute (minutes, ABO mismatch), acute (days-months, T-cell mediated), chronic (months-years, antibody-mediated)",
    "CMV disease: common post-transplant infection; prophylaxis with valganciclovir"
  ],
  differentials: ["Delayed graft function (ATN)","Acute rejection","Vascular thrombosis (renal artery/vein)","Urinary leak","Lymphocele","Ureteric obstruction"],
  mnemonics: [
    {name:"Rejection types", text:"HAC: Hyperacute (minutes, ABO-incompatible) → Acute (days-weeks, T-cell) → Chronic (months-years, antibody-mediated CMR)"}
  ],
  overview: {
    definition: "Surgical implantation of a deceased or living donor kidney into a recipient's iliac fossa, restoring renal function in end-stage renal disease.",
    epidemiology: "3,500 kidney transplants/year UK. Most common solid organ transplant. 5-year graft survival: LDKT 85%; DDKT 75%. Living donor (LDKT) preferred (better survival, shorter wait).",
    pathophysiology: "ESRD: inability to excrete waste products + fluid overload + electrolyte disturbance + anaemia (EPO deficiency) + bone disease. Transplant restores all functions. Technical complications (thrombosis, leak) can lose graft.",
    classification: [
      "Deceased donor kidney transplant (DDKT): DBD or DCD",
      "Living donor kidney transplant (LDKT): related or unrelated",
      "ABO-incompatible (ABOi): pre-treatment with plasma exchange/rituximab to remove anti-ABO antibodies",
      "HLA-sensitised recipients: complement-dependent cytotoxicity (CDC) crossmatch negative required"
    ]
  },
  diagnosis: {
    history: [
      "ESRD on dialysis (haemodialysis or peritoneal dialysis)",
      "Duration on waitlist; creatinine trajectory",
      "Previous transplants (sensitisation)",
      "Comorbidities: diabetes (DM as cause of ESRD affects outcome), cardiovascular disease",
      "Urine output (anuria vs oliguric — affects post-transplant assessment)"
    ],
    examination: [
      "Fluid status: oedema, hypertension",
      "Previous surgical scars (previous transplants, AV fistula)",
      "Iliac fossa: identify planned transplant site"
    ],
    investigations: [
      {name:"Renal function: GFR, creatinine, urea", role:"Baseline; GFR <10mL/min = transplant listing threshold in most centres"},
      {name:"Blood group (ABO) + HLA typing", role:"Compatibility matching; DSA (donor-specific antibodies) assessment for sensitised patients"},
      {name:"Cardiac assessment: ECHO, stress test", role:"High CVD risk in ESRD; screen before transplant listing"},
      {name:"Transplant Doppler USS post-op", role:"Assess renal artery and vein flow daily for first 7 days; early thrombosis = surgical emergency"},
      {name:"Renal biopsy (post-transplant)", role:"If DGF prolonged >7 days or rising creatinine: confirms rejection vs ATN vs drug toxicity"}
    ]
  },
  criteria: {
    title: "Banff Rejection Criteria",
    items: [
      {k:"Hyperacute rejection", v:"Minutes; ABO mismatch; graft thrombosis; nephrectomy"},
      {k:"Acute T-cell mediated rejection (TCMR)", v:"Days-weeks; lymphocytic tubulitis (Banff IA/IB/IIA/IIB/III); treat with high-dose steroids ± ATG"},
      {k:"Antibody-mediated rejection (ABMR)", v:"Microvascular inflammation + DSA; treat with IVIG + plasma exchange + rituximab"},
      {k:"Chronic ABMR", v:"Months-years; interstitial fibrosis + tubular atrophy (IFTA); progressive graft loss"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "DGF (ATN): dialysis support until graft recovers function; serial Dopplers to exclude vascular cause",
      "Cardiovascular risk reduction: statin, antihypertensive (avoid ACEi/ARB early post-transplant — GFR dependent)",
      "BK virus monitoring: regular urine and plasma PCR; reduce immunosuppression if BK viraemia"
    ],
    medical: [
      "Induction immunosuppression: basiliximab (IL-2R antagonist, standard) or anti-thymocyte globulin (ATG, high-risk sensitised)",
      "Maintenance: tacrolimus (FK506) + mycophenolate mofetil (MMF) + prednisolone (triple therapy); withdraw prednisolone at 3 months if stable",
      "Prophylaxis: valganciclovir (CMV), co-trimoxazole (PCP/UTI), antifungal × 3 months",
      "Acute rejection treatment: methylprednisolone 500mg IV × 3 days; ATG for steroid-resistant TCMR"
    ],
    surgical: [
      {name:"Renal transplant implantation", when:"ESRD + donor available + recipient prepared", notes:"Extraperitoneal right iliac fossa (preferred — iliac vessels more accessible); renal vein end-to-side to external iliac vein (5-0 Prolene); renal artery end-to-side to external iliac artery (6-0 Prolene); ureteroneocystostomy (Lich-Gregoir) over JJ stent"},
      {name:"Urinary leak repair", when:"Urine leak post-transplant (perinephric fluid collection, rising creatinine, wound wetness); diagnose with nuclear medicine renogram or CT urogram", notes:"Most leak from uretero-vesical junction; surgical re-implantation or uretero-ureterostomy to native ureter; early diagnosis essential"},
      {name:"Renal artery/vein thrombosis", when:"Anuria post-transplant + absent flow on Doppler = surgical emergency", notes:"Immediate surgical re-exploration and thrombectomy; success rate low if >6h warm ischaemia; graft loss common; urgent re-transplantation listing"},
      {name:"Lymphocele drainage", when:"Pelvic lymphocele post-transplant: compressing ureter (obstructive uropathy) or vasculature", notes:"Internal marsupialization (laparoscopic fenestration into peritoneal cavity) = definitive; percutaneous drainage + sclerotherapy as bridge"}
    ]
  },
  technique: {
    title: "Ureteroneocystostomy (Lich-Gregoir Extravesical Technique)",
    prep: [
      "Bladder filled to 200mL with saline to identify and distend it",
      "JJ ureteric stent (4.7Fr × 20cm) placed in transplant ureter before anastomosis"
    ],
    steps: [
      {n:1, t:"Detrusor incision", d:"2–3cm incision through detrusor muscle only (extravesical); do not enter bladder mucosa; create trough"},
      {n:2, t:"Mucosal incision", d:"Small (<1cm) mucosal opening at distal end of trough; visualise bladder lumen"},
      {n:3, t:"Ureteric anastomosis", d:"Spatulate distal transplant ureter; end-to-end or end-to-side anastomosis to bladder mucosa; 4-0 Monocryl interrupted sutures"},
      {n:4, t:"Detrusor closure", d:"Close detrusor muscle over ureter with interrupted 3-0 Vicryl; creates antireflux tunnel (ureter tunnelled under detrusor)"},
      {n:5, t:"JJ stent check", d:"Confirm JJ stent passes from renal pelvis to bladder; cystoscopy at 6 weeks to remove stent"}
    ],
    pearls: [
      "Ureteric blood supply is from lower pole renal artery branches — preserve periureteric tissue during procurement and implantation",
      "JJ stent: reduces urinary leak rate; remove at 6 weeks (cystoscopy) — do not leave long-term",
      "Native nephrectomy: NOT routine; only for recurrent UTI, uncontrolled HTN from native kidneys, or malignancy"
    ]
  },
  guidelines: [
    {src:"NICE NG197: Renal transplant — assessment and listing"},
    {src:"KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients 2009"},
    {src:"ERA-EDTA guidelines: Immunosuppression in kidney transplantation"}
  ],
  pearls: [
    "Anuria post-transplant: Doppler first — exclude thrombosis before assuming ATN",
    "CMV disease most common serious infection post-transplant: prophylaxis duration and surveillance protocol critical",
    "Living donor transplant: significantly better outcomes vs deceased donor — encourage eligible family members"
  ],
  mistakes: [
    "Delaying Doppler in anuria post-transplant — arterial/venous thrombosis is an emergency; 6h window for salvage",
    "Not removing JJ stent at 6 weeks — encrustation and ureteric obstruction",
    "Perinephric haematoma post-transplant: small = observe; enlarging = urgent surgical exploration"
  ]
},
{
  id: "pancreas-tx",
  dept: "transplant",
  name: "Pancreas Transplantation",
  latin: "Transplantatio pancreatis",
  organ: "Pancreas",
  severity: "high",
  tags: ["transplant","pancreas","diabetes","insulin"],
  hero: "Achieves insulin independence in Type 1 diabetes. Usually combined with kidney transplant (SPK). Graft thrombosis is the leading early cause of graft loss. Enteric drainage preferred over bladder drainage.",
  keypoints: [
    "Indications: Type 1 DM with ESRD (SPK — simultaneous pancreas-kidney), or Type 1 DM alone (PAK — pancreas after kidney, PTA — pancreas transplant alone)",
    "SPK has best outcomes (80% 5-year insulin independence); immunological advantage",
    "Graft thrombosis: most common early complication (5–10%); graft loss; prophylactic anticoagulation post-op",
    "Enteric drainage (duodeno-jejunostomy): standard; avoids bladder complications",
    "Rejection monitoring: in SPK — monitor creatinine as surrogate; in PTA — amylase and glucose (less sensitive)"
  ],
  differentials: ["DM Type 1 managed with insulin pump","Islet cell transplantation (less invasive alternative)","Combined kidney transplant for Type 2 DM with ESRD"],
  mnemonics: [
    {name:"SPK vs PAK vs PTA", text:"SPK: Simultaneous Pancreas + Kidney (best outcomes, ESRD + T1DM); PAK: Pancreas After Kidney; PTA: Pancreas Transplant Alone (T1DM, normal renal function but hypoglycaemic unawareness)"}
  ],
  overview: {
    definition: "Transplantation of the deceased donor pancreas (with donor duodenal segment) to restore endogenous insulin production and achieve euglycaemia in Type 1 diabetes mellitus.",
    epidemiology: "~200 pancreas transplants/year UK. SPK accounts for 80%; PAK 15%; PTA 5%. 5-year graft survival: SPK 80% pancreas, 90% kidney; PAK 60%; PTA 55%.",
    pathophysiology: "T1DM: autoimmune destruction of β-cells → absolute insulin deficiency → chronic hyperglycaemia → microvascular complications (retinopathy, neuropathy, nephropathy). Transplant restores euglycaemia and arrests progression of complications.",
    classification: [
      "SPK: simultaneous pancreas-kidney (Type 1 DM + ESRD)",
      "PAK: pancreas after kidney (prior kidney transplant)",
      "PTA: pancreas transplant alone (severe hypoglycaemic unawareness)"
    ]
  },
  diagnosis: {
    history: [
      "Type 1 diabetes mellitus (C-peptide negative or absent)",
      "ESRD or CKD stage 4–5 (for SPK)",
      "Hypoglycaemic unawareness (for PTA) — recurrent severe episodes",
      "Brittle diabetes with unstable control despite optimal insulin therapy",
      "Frequent hospitalisations for DKA or hypoglycaemia"
    ],
    examination: [
      "Complications of DM: retinopathy, neuropathy (peripheral, autonomic), nephropathy",
      "Cardiovascular: coronary artery disease (mandatory cardiac screening)",
      "Peripheral vascular disease (affects surgical planning)"
    ],
    investigations: [
      {name:"C-peptide", role:"Should be absent/very low to confirm T1DM (not T2DM); T2DM candidates controversial"},
      {name:"Cardiac assessment (ECG, ECHO, nuclear stress test)", role:"High CVD risk in DM; mandatory pre-listing"},
      {name:"HbA1c + glucose diary", role:"Control assessment; brittle DM evidence"},
      {name:"Renal function (for SPK)", role:"GFR assessment; listing criteria for SPK (usually GFR <20mL/min)"},
      {name:"Post-transplant: blood glucose, amylase, lipase", role:"Monitor graft function; hyperglycaemia = rejection or thrombosis"},
      {name:"Post-transplant Doppler", role:"Daily for 7 days: pancreatic arterial and venous flow; thrombosis detection"}
    ]
  },
  criteria: {
    title: "Pancreas Transplant Indication Summary",
    items: [
      {k:"SPK", v:"Type 1 DM + ESRD (GFR <20mL/min or on dialysis)"},
      {k:"PAK", v:"Type 1 DM + previous functioning kidney transplant"},
      {k:"PTA", v:"Type 1 DM + GFR >60mL/min + hypoglycaemic unawareness or severe instability"},
      {k:"Contraindications", v:"Age >55, significant CAD unrevascularised, BMI >30, Type 2 DM (relative), active infection, non-compliance"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Pre-transplant: optimise metabolic control, treat complications, cardiac risk reduction",
      "Post-transplant: monitor glucose hourly for 24h; insulin infusion to target glucose 4–7mmol/L during first 24h (graft needs rest)",
      "Post-transplant thromboprophylaxis: heparin infusion + aspirin (graft thrombosis risk reduction)"
    ],
    medical: [
      "Immunosuppression: tacrolimus + MMF + prednisolone (+ anti-thymocyte globulin induction)",
      "Anticoagulation post-op: heparin infusion 3–5 days then aspirin lifelong (graft venous thrombosis prevention)",
      "CMV, PCP prophylaxis (same as renal transplant)"
    ],
    surgical: [
      {name:"SPK transplantation", when:"T1DM + ESRD; deceased donor", notes:"Pancreas to right iliac fossa (or intraperitoneal), kidney to left iliac fossa (or same side); iliac vessel anastomoses; duodenojejunostomy for exocrine drainage; portal vs systemic venous drainage"},
      {name:"Enteric-drained pancreas transplant (preferred)", when:"Standard exocrine drainage: donor duodenum-to-recipient jejunum (side-to-side or end-to-side duodenojejunostomy)", notes:"Physiological; avoids bladder complications (urethritis, recurrent UTI, dehydration) of older bladder drainage technique"},
      {name:"Bladder-drained pancreas transplant", when:"Selected cases; allows urinary amylase monitoring for rejection (still used in some centres for PTA)", notes:"Duodenovesicostomy; complications: urethritis, UTIs, haematuria, dehydration from bicarbonate loss in urine"},
      {name:"Re-exploration for graft thrombosis", when:"Anuria + rising glucose + absent Doppler flow — urgent surgical re-exploration within hours", notes:"Thrombectomy rarely successful; usually pancreatectomy required; urgent re-listing for deceased donor"}
    ]
  },
  technique: {
    title: "Pancreas Transplant — Portal-Enteric Drainage",
    prep: [
      "Deceased donor: systemic heparinisation → flush with cold preservation solution → back-table preparation of pancreas with Y-graft for arterial reconstruction",
      "Recipient: supine; midline laparotomy"
    ],
    steps: [
      {n:1, t:"Arterial reconstruction (back table)", d:"Donor Y-graft (external iliac bifurcation) anastomosed to donor splenic artery + superior mesenteric artery to reconstitute single arterial inflow"},
      {n:2, t:"Venous drainage (portal)", d:"Portal venous drainage: donor portal vein anastomosed to recipient superior mesenteric vein (SMV) — physiological insulin delivery to liver; OR systemic drainage: donor portal vein to external iliac vein"},
      {n:3, t:"Arterial anastomosis", d:"Y-graft to recipient common or external iliac artery; 6-0 Prolene"},
      {n:4, t:"Reperfusion", d:"Remove venous then arterial clamps; Doppler confirms arterial and venous flow"},
      {n:5, t:"Exocrine drainage", d:"Enteric-drained: side-to-side duodenojejunostomy between donor duodenal segment and recipient jejunum (2-layer closure)"},
      {n:6, t:"Kidney implant (SPK)", d:"Left iliac fossa; standard renal transplant technique"}
    ],
    pearls: [
      "Portal drainage is physiologically superior (insulin reaches liver first) but technically more complex",
      "Graft pancreatitis post-reperfusion: amylase/lipase rise; conservative management; usually resolves",
      "Donor BMI >30 and older age: higher technical complication rates; donor selection important"
    ]
  },
  guidelines: [
    {src:"International Pancreas Transplant Registry (IPTR): Annual reports"},
    {src:"NICE NG17: Pancreas transplantation for people with T1DM"},
    {src:"IPITA: International Pancreas and Islet Transplant Association guidelines"}
  ],
  pearls: [
    "SPK offers dual immunological benefit — kidney rejection can be monitored as a surrogate for pancreas rejection",
    "Islet transplantation: alternative to whole organ for T1DM without ESRD; Edmonton protocol; less invasive but lower long-term insulin independence rate",
    "Hypoglycaemic unawareness alone (normal renal function): PTA justified — can be life-saving for brittle T1DM"
  ],
  mistakes: [
    "Missing early graft thrombosis — daily Dopplers mandatory for first 7 days",
    "Not anticoagulating post-transplant — graft thrombosis rate without prophylaxis ~10%",
    "Bladder drainage without warning patient of long-term urological complications (dehydration, UTI, urethritis)"
  ]
},
{
  id: "small-bowel-tx",
  dept: "transplant",
  name: "Small Bowel Transplantation",
  latin: "Transplantatio intestini tenuis",
  organ: "Small bowel",
  severity: "high",
  tags: ["transplant","intestine","short-bowel","nutrition"],
  hero: "Last resort for irreversible intestinal failure. High rejection and graft loss rates. Patient and graft survival improving with modern immunosuppression. Reserved for patients with life-threatening complications of parenteral nutrition.",
  keypoints: [
    "Indication: irreversible intestinal failure with life-threatening PN complications (liver failure, recurrent sepsis, thrombosis of central veins)",
    "Types: isolated SBT, liver + SBT (composite), or multivisceral (stomach + liver + pancreas + bowel)",
    "Rejection: very common (50% acute rejection in first year) — bowel is most immunogenic organ",
    "Graft-versus-host disease (GvHD): donor lymphoid tissue in Peyer's patches attacks recipient",
    "Tacrolimus-based immunosuppression; serial endoscopic biopsies to monitor rejection"
  ],
  differentials: ["Short bowel syndrome managed on long-term PN","Intestinal rehabilitation (GLP-2 analogues — teduglutide)","Intestinal reconstruction surgery"],
  mnemonics: [
    {name:"Intestinal failure indications for SBT", text:"CLABSI + TPN cholestasis + Thrombosis (inaccessible central venous access) = life-threatening PN complications → SBT listing"}
  ],
  overview: {
    definition: "Transplantation of a deceased donor small intestine to restore enteral autonomy in patients with permanent intestinal failure dependent on parenteral nutrition.",
    epidemiology: "Rarest abdominal transplant. ~30–50/year in specialist centres UK/globally. 5-year patient survival: 50–60%. Most common indication: short bowel syndrome from mesenteric ischaemia, trauma, Crohn's, volvulus.",
    pathophysiology: "Intestinal failure: insufficient absorptive capacity for hydration and nutrition → parenteral nutrition dependency. Long-term PN complications: liver disease (cholestasis → cirrhosis), CLABSI, venous thrombosis → SBT indication.",
    classification: [
      "Isolated small bowel transplant: intestinal failure with normal liver function",
      "Liver-small bowel transplant (composite): intestinal failure + PN-related liver disease",
      "Multivisceral transplant: includes stomach, liver, pancreas, bowel (most complex)"
    ]
  },
  diagnosis: {
    history: [
      "Irreversible intestinal failure (short bowel, pseudo-obstruction, radiation enteritis, extensive Crohn's)",
      "PN dependency confirmed for >12 months",
      "Life-threatening PN complications: PN-associated liver disease (cholestasis), recurrent CLABSI, loss of central venous access",
      "Failed intestinal rehabilitation (teduglutide/citrulline supplementation)"
    ],
    examination: [
      "Nutritional status: wasting, sarcopenia",
      "Signs of PN liver disease: jaundice, hepatomegaly",
      "Stoma assessment; remnant bowel length",
      "Central venous access sites"
    ],
    investigations: [
      {name:"LFTs + biopsy", role:"Assess PN-related liver disease — progressive cholestasis/fibrosis = composite liver-bowel transplant needed"},
      {name:"CT angiogram of mesenteric vessels", role:"Superior mesenteric artery and vein — graft vascular planning"},
      {name:"Central venous access mapping", role:"Assess remaining access sites for perioperative central venous access"},
      {name:"Endoscopy post-transplant", role:"Regular protocol biopsies (every 2 weeks initially) — only way to reliably diagnose rejection early"}
    ]
  },
  criteria: {
    title: "Intestinal Failure Listing Criteria",
    items: [
      {k:"Recurrent CLABSI", v:"≥2 life-threatening central line infections per year"},
      {k:"PN-related liver disease", v:"Progressive liver fibrosis/cirrhosis (PNALD) → composite liver-bowel"},
      {k:"Venous thrombosis", v:"Loss of central venous access (≥2 sites occluded)"},
      {k:"High-output ostomy", v:"Fluid and electrolyte imbalance unmanageable with PN"},
      {k:"Quality of life", v:"Some centres list for intractable complications even without life-threatening events"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Maximise intestinal rehabilitation: teduglutide (GLP-2 analogue) increases villi absorption; avoid SBT if rehabilitation achievable",
      "Intestinal lengthening procedures (STEP/Bianchi): surgical alternative for dilated dysmotile bowel",
      "Optimise PN regimen and central line care to delay need for SBT"
    ],
    medical: [
      "High-dose tacrolimus-based immunosuppression: higher target troughs than other transplants",
      "Sirolimus: added for chronic rejection management",
      "Anti-rejection induction: anti-thymocyte globulin; alemtuzumab (Campath)",
      "CMV, EBV, PCP prophylaxis (high infection risk)"
    ],
    surgical: [
      {name:"Isolated small bowel transplantation", when:"Intestinal failure + normal liver + PN complications meeting listing criteria", notes:"Deceased donor small bowel (100–150cm); SMA to recipient aorta; SMV to recipient SMV or IVC; proximal jejunojejunostomy; distal chimney ileostomy (for endoscopic access) or ileocolostomy"},
      {name:"Composite liver-SBT", when:"Intestinal failure + PN-related liver disease (cholestasis/fibrosis)", notes:"En-bloc liver + bowel from same donor; caval, portal vein, arterial anastomoses; most complex abdominal transplant"},
      {name:"Multivisceral transplant", when:"Extensive foregut disease; portomesenteric thrombosis making isolated bowel implant impossible; combined hepatic and intestinal failure", notes:"Includes stomach, duodenum, pancreas, liver, bowel; total mesenteric replacement"}
    ]
  },
  technique: {
    title: "Isolated Small Bowel Transplant — Key Steps",
    prep: [
      "Back-table preparation: trim donor SMA and SMV with vascular patches",
      "Recipient: midline laparotomy; assess for portomesenteric thrombosis"
    ],
    steps: [
      {n:1, t:"SMA anastomosis", d:"Donor SMA (with aortic Carrel patch) to recipient infrarenal aorta; 5-0 Prolene end-to-side"},
      {n:2, t:"SMV anastomosis", d:"Donor SMV to recipient portal vein or SMV; end-to-side; 5-0 Prolene"},
      {n:3, t:"Reperfusion", d:"Release venous then arterial clamp; assess bowel viability (peristalsis, colour, Doppler flow)"},
      {n:4, t:"Proximal enteric anastomosis", d:"Donor proximal jejunum to recipient remaining native jejunum or duodenum; end-to-end or end-to-side"},
      {n:5, t:"Distal chimney ileostomy", d:"Bring donor distal ileum out as loop ileostomy (allows endoscopic access for rejection monitoring via stoma)"},
      {n:6, t:"Abdominal closure", d:"Large bowel oedema expected; planned staged closure with TAC often needed; biopsy loop stoma biweekly"}
    ],
    pearls: [
      "Bowel is the most immunogenic transplanted organ — rejection rates up to 50% in first year",
      "Chimney ileostomy: essential for endoscopic surveillance biopsies without formal endoscopy; biopsy protocol starts immediately",
      "CMR (chronic rejection): chronic rejection leads to motility disorder and graft enteropathy — retransplant or long-term PN"
    ]
  },
  guidelines: [
    {src:"INTESTINE (International Small Intestinal Transplant Association) guidelines"},
    {src:"BAPEN/ESPEN: Intestinal failure and small bowel transplantation guidelines"},
    {src:"NICE: Intestinal transplantation"}
  ],
  pearls: [
    "SBT should be offered early before PN-related liver failure develops — composite transplant has worse outcomes than isolated SBT",
    "Teduglutide (GLP-2 analogue): reduces PN requirements; may avoid need for transplant in some patients",
    "Graft vs host disease: unique risk in SBT — donor Peyer's patch lymphocytes; manifestations: skin rash, diarrhoea, cytopenias"
  ],
  mistakes: [
    "Late referral to SBT centre after PN liver failure already established — composite transplant much more complex",
    "Insufficient immunosuppression monitoring — bowel rejection can be rapid and catastrophic",
    "Closing abdomen under tension when bowel oedematous post-reperfusion — ACS risk"
  ]
},
{
  id: "living-donor-hepatectomy",
  dept: "transplant",
  name: "Living Donor Hepatectomy",
  latin: "Hepatectomia donatoris viventis",
  organ: "Liver",
  severity: "high",
  tags: ["transplant","liver","living-donor","hepatectomy"],
  hero: "Right hepatectomy for living donor liver transplant (LDLT). Donor safety is paramount — no harm to a healthy volunteer. Remnant liver volume must be ≥30% of total functional liver volume (≥40% for steatotic liver).",
  keypoints: [
    "Right hepatectomy (segments V–VIII + right hepatic vein) most common for adult-to-adult LDLT",
    "Donor safety: minimum future liver remnant (FLR) >30% (or >40% if steatosis >10%)",
    "Donor mortality risk: ~0.1–0.5% for right hepatectomy; must be fully disclosed",
    "Volumetric CT: measure total liver volume and right lobe volume pre-operatively",
    "Middle hepatic vein: include or exclude is critical — compromised outflow → graft congestion → failure"
  ],
  differentials: ["Deceased donor liver (DDLT) as alternative","Left lobe donation for paediatric recipient","Extended right lobe (with segment IV)"],
  mnemonics: [
    {name:"FLR calculation", text:"FLR% = (Total liver volume – Right lobe volume) / Total liver volume × 100; must be ≥30% for donor safety"}
  ],
  overview: {
    definition: "Surgical removal of the right lobe of the liver from a healthy living donor for transplantation into an adult recipient with end-stage liver disease, in the context of donor organ shortage.",
    epidemiology: "40–50 living donor liver transplants/year UK; 5,000+ globally/year (South Korea, Japan where DDLT is scarce). Donor mortality 0.1–0.5% for right hepatectomy; 0.01–0.1% for left lobe.",
    pathophysiology: "The liver's unique regenerative capacity allows safe resection of up to 70% of parenchyma — remnant liver hypertrophies to near-normal volume within 4–8 weeks. Donor FLR must be sufficient to maintain hepatic function during the regeneration period.",
    classification: [
      "Right hepatectomy (adult-to-adult): segments V–VIII; 50–65% of liver volume",
      "Left lateral sectionectomy (adult-to-child paediatric LDLT): segments II–III; 15–20%",
      "Left hepatectomy (segments II–IV): for small recipients or when right lobe too large"
    ]
  },
  diagnosis: {
    history: [
      "Donor evaluation: healthy volunteer; ABO compatibility; psychological assessment; motivational assessment (no coercion)",
      "Medical history: no chronic liver disease, no significant comorbidities, no obesity (BMI <30)",
      "Social: non-smoker, low alcohol, no IV drug use"
    ],
    examination: [
      "BMI assessment (obesity = steatosis risk)",
      "Abdominal examination",
      "Complete physical examination to exclude comorbidity"
    ],
    investigations: [
      {name:"CT liver volumetry (triphasic)", role:"Measure total liver volume and right lobe volume; calculate FLR; identify variant vascular anatomy"},
      {name:"MRCP", role:"Biliary anatomy — critical for planning bile duct division and reconstruction; variant bile duct anatomy common"},
      {name:"CT angiogram", role:"Hepatic artery variants (30% have variant hepatic arterial anatomy — Michels classification); right hepatic vein drainage"},
      {name:"Liver biopsy", role:"If steatosis suspected (BMI >28, raised LFTs, ultrasound echogenicity); steatosis >30% = contraindication"},
      {name:"Full metabolic workup, hepatitis serology, viral screen", role:"Exclude occult liver disease in donor"},
      {name:"Psychological evaluation", role:"Independent assessment; no coercion; full understanding of risks"}
    ]
  },
  criteria: {
    title: "Donor Selection Criteria",
    items: [
      {k:"Age", v:"18–55 years (some centres up to 60)"},
      {k:"ABO compatibility", v:"ABO-compatible (ABO-identical preferred); ABOi LDLT possible with desensitisation"},
      {k:"BMI", v:"<28 (>30 = contraindicated; steatosis risk)"},
      {k:"FLR", v:"≥30% for normal liver; ≥40% for steatosis 10–30%; steatosis >30% = contraindication"},
      {k:"Liver histology", v:"Steatosis <30%; no fibrosis; normal hepatic architecture"},
      {k:"Psychological fitness", v:"Independent assessment; no financial coercion; full informed consent"}
    ]
  },
  scoring: [],
  management: {
    conservative: [
      "Pre-donation: weight loss if BMI borderline; alcohol cessation",
      "Portal vein embolisation (PVE): if FLR borderline — embolise right portal vein → induce left lobe hypertrophy; reassess in 4–6 weeks",
      "Post-donation: routine monitoring; liver function recovers to near-normal within 4–8 weeks"
    ],
    medical: [
      "Perioperative: standard surgical care; VTE prophylaxis; analgesia",
      "Post-donation: monitor LFTs, PT, glucose daily for 5–7 days; discharge when safe"
    ],
    surgical: [
      {name:"Living donor right hepatectomy (segments V–VIII)", when:"Right lobe provides sufficient graft-to-recipient weight ratio (GRWR ≥0.8%) and donor FLR ≥30%", notes:"Parenchymal transection along Cantlie's line (right intersectoral plane); use CUSA/harmonic; control of right hepatic artery, right portal vein, right hepatic vein; meticulous bile duct transaction at level to allow reconstruction"},
      {name:"Middle hepatic vein management", when:"Right lobe graft without MHV (standard) vs with MHV (extended right lobe)", notes:"Without MHV: may cause congestion of anterior segment (V, VIII) → venous outflow reconstruction on back-table; with MHV: donor at higher risk from smaller FLR"},
      {name:"Biliary anatomy variation management", when:"30% donors have variant right bile duct anatomy (Michels/Nakamura classification)", notes:"MRCP pre-op essential; intraoperative cholangiogram at time of division; multiple ducts may require multiple biliary anastomoses in recipient"}
    ]
  },
  technique: {
    title: "Living Donor Right Hepatectomy — Operative Steps",
    prep: [
      "Confirm CT volumetry, MRCP, angiogram reviewed",
      "Intraoperative ultrasound: verify anatomy before dividing",
      "Aim: zero transfusion rate (CVP 5mmHg during parenchymal transection to reduce blood loss)"
    ],
    steps: [
      {n:1, t:"Cholecystectomy", d:"Perform first; use for orientation to Calot's triangle; clip and divide cystic duct and artery"},
      {n:2, t:"Intraoperative cholangiogram", d:"Inject via cystic duct; delineate right duct anatomy and point of safe division (confirm MRCP findings)"},
      {n:3, t:"Hilar dissection", d:"Identify and dissect right hepatic artery (RHA) and right portal vein (RPV) without dividing; tag with vessel loops"},
      {n:4, t:"Parenchymal transection", d:"CUSA/harmonic along Cantlie's line; low CVP (CVP 0–5); ligate/clip all transected vessels and bile ducts; hepatic veins controlled last"},
      {n:5, t:"Right hepatic vein control", d:"Isolate right hepatic vein at IVC; encircle with vessel loop; divide at IVC with vascular stapler or clamp and oversew after full mobilisation"},
      {n:6, t:"Bile duct division", d:"Identify and divide right hepatic duct(s); clips on donor side; plan reconstruction for recipient"},
      {n:7, t:"Graft retrieval", d:"After complete mobilisation: divide RHA, RPV, RHV, bile duct simultaneously; flush immediately with cold preservation solution"},
      {n:8, t:"Donor remnant haemostasis", d:"Oversew all transection surface bleeding; inspect for bile leak; close biliary stump on donor with 4-0 PDS; drain near transection surface"}
    ],
    pearls: [
      "Donor safety first: if intraoperatively FLR appears inadequate or bleeding significant → abort, close donor safely; recipient receives deceased donor or remains on waitlist",
      "Low CVP technique: reduces hepatic venous bleeding during parenchymal transection; anaesthetic team must collaborate",
      "Biliary complications: most common donor complication (2–5%); bile leak from transection surface — drain essential"
    ]
  },
  guidelines: [
    {src:"ILTS: Ethical guidelines for living donor liver transplantation"},
    {src:"AASLD/EASL: Living donor liver transplantation guidelines"},
    {src:"NHS Blood and Transplant: Living donor criteria"}
  ],
  pearls: [
    "Donor mortality is real: 0.1–0.5% for right hepatectomy; must be fully disclosed in independent evaluation",
    "FLR <30%: consider portal vein embolisation (PVE) to induce hypertrophy before donation",
    "Most common donor complication: biliary leak or stricture (5–10%); most managed endoscopically"
  ],
  mistakes: [
    "Proceeding with right hepatectomy when FLR is borderline — catastrophic donor liver failure post-donation",
    "Not performing intraoperative cholangiogram — variant bile duct anatomy leads to donor duct injury",
    "Inadequate psychological assessment of donor — coerced donation leads to post-donation regret and psychological harm"
  ]
}
];
