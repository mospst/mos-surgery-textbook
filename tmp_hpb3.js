// HPB diseases — batch 3 of 3 (hepatic-adenoma, hydatid-cyst, ipmn, pan-net, itp, hereditary-spherocytosis, splenic-abscess, psc)
window._TMP_HPB3 = [
{
  id:"hepatic-adenoma", dept:"hpb", name:"Hepatic Adenoma", latin:"Adenoma hepatis", organ:"Liver",
  severity:"medium", tags:["liver","adenoma","OCP","glycogen storage","bleeding","resection"],
  hero:"Benign hepatocellular tumor strongly associated with oral contraceptive pill use; risk of hemorrhage and rare malignant transformation.",
  keypoints:[
    "OCP use (×30 risk), anabolic steroids, glycogen storage disease type Ia/III, and MODY3 are major risk factors",
    "Four molecular subtypes: HNF1α-inactivated (35–40%, steatotic, low malignancy risk); β-catenin-activated (10–15%, HIGH malignancy risk); inflammatory (45–55%, dilated sinusoids, can bleed); unclassified",
    "Complication rate: hemorrhage 25% (risk increases with size >5 cm); malignant transformation 4–8% (β-catenin subtype)",
    "Management guided by size, sex, subtype: >5 cm or male → resect; <5 cm in female → OCP cessation and observation",
    "MRI with hepatobiliary contrast is superior for characterization and subtype differentiation"
  ],
  differentials:["FNH (focal nodular hyperplasia)","HCC","Hepatic hemangioma","Hepatic metastasis","Regenerative nodule in cirrhosis"],
  mnemonics:[{name:"Adenoma Subtypes — Risk",text:"HNF1α: Steatotic, low risk; Inflammatory: bleeds (telangiectatic); β-catenin: Malignant risk HIGH — resect regardless of size in males and ≥5 cm in females"}],
  overview:{
    definition:"Benign monoclonal proliferation of hepatocytes without bile ducts or portal tracts, occurring predominantly in women of reproductive age.",
    epidemiology:"Incidence 3–4/100 000 in women taking OCP; male adenomas rare but higher malignancy risk. 10× increased risk with OCP use >2 years.",
    pathophysiology:"Estrogen stimulation → hepatocyte proliferation → clonal expansion → absent portal tracts (no normal architecture). β-catenin activating mutations → unregulated cell cycle → malignant transformation. HNF1α mutations → steatosis (impaired lipid transport).",
    classification:[
      {label:"HNF1α-inactivated (H-HCA)",note:"35–40%; diffuse steatosis; LFABP absent on IHC; very low malignancy risk; multinodular adenomatosis in >10 nodules"},
      {label:"Inflammatory (I-HCA)",note:"45–55%; serum amyloid A and CRP positive on IHC; dilated sinusoids; high bleeding risk; associated with OCP, alcohol, obesity"},
      {label:"β-catenin-activated (b-HCA)",note:"10–15%; cytoplasmic/nuclear β-catenin; high malignancy risk; men > women; associated with anabolic steroids, GSD"},
      {label:"Unclassified",note:"5–10%; normal IHC; intermediate behavior"}
    ]
  },
  diagnosis:{
    history:["Female 20–45 years, long-term OCP user (>2 years)","Acute RUQ pain (hemorrhage)","Incidental finding on US/CT","Male with anabolic steroid use or glycogen storage disease","Hemodynamic instability if hemoperitoneum (ruptured adenoma)"],
    examination:["RUQ tenderness or mass","Hemoperitoneum: peritonism, hypotension, tachycardia","Often normal if incidental"],
    investigations:[
      {name:"US abdomen",role:"Well-defined heterogeneous lesion; hyperechoic if steatotic (HNF1α); useful first-line; poor subtype differentiation"},
      {name:"MRI liver (hepatobiliary contrast — gadoxetate)",role:"Best characterization: HNF1α: homogeneous fat signal; I-HCA: strong arterial enhancement; β-catenin: heterogeneous; gadoxetate shows no uptake (no bile ducts) — distinguishes from FNH"},
      {name:"CECT",role:"Arterial enhancement; hemorrhage (dense blood); rapid washout less prominent than HCC"},
      {name:"AFP",role:"Normal in adenoma; elevated suggests HCC transformation"},
      {name:"Biopsy",role:"Molecular subtyping when subtype influences management (β-catenin IHC); risk of hemorrhage — use carefully"}
    ]
  },
  criteria:{
    title:"Management Thresholds",
    items:[
      {k:"Female, OCP user, <5 cm",v:"Stop OCP; repeat MRI at 6 months → if regressing: observe; if stable/growing: resect"},
      {k:"Female, OCP stopped, >5 cm or not regressing",v:"Resect"},
      {k:"Male, any size",v:"Resect — higher malignancy risk"},
      {k:"β-catenin subtype",v:"Resect regardless of size or sex"},
      {k:"Ruptured/hemorrhaging",v:"Embolization + stabilize → delayed resection; urgent resection if unstable"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Stop OCP or anabolic steroids — >50% regress","Weight loss in obese patients","MRI surveillance at 6 months: reassess size","Avoid pregnancy in large unresected adenomas (estrogen → growth → rupture risk)"],
    medical:["No pharmacological treatment of proven benefit"],
    surgical:[
      {name:"Hepatic resection",when:"Male; ≥5 cm; β-catenin subtype; failure to regress after OCP cessation; any size with hemorrhage",notes:"Laparoscopic or open; parenchymal-sparing; R0 to normal parenchyma — no lymphadenectomy needed"},
      {name:"Transcatheter arterial embolization (TAE)",when:"Acute hemorrhage with hemodynamic instability; bridge to elective resection",notes:"Arrest bleeding; definitive resection 4–6 weeks later when patient stable and anatomy clear"},
      {name:"Liver transplantation",when:"Multiple adenomas >10 (adenomatosis) not amenable to resection; glycogen storage disease with massive adenomatosis",notes:"Rare; used when parenchymal-sparing resection not possible"}
    ]
  },
  technique:{
    title:"Laparoscopic Hepatic Resection for Adenoma",
    prep:["MRI characterizes lesion and proximity to major vessels","Preoperative embolization if large (>10 cm) to reduce intraoperative bleeding","GA; supine or lateral decubitus; Pringle loop ready"],
    steps:[
      {n:1,t:"IOUS",d:"Confirm margins; identify major vessels and bile ducts; plan resection"},
      {n:2,t:"Parenchymal marking",d:"Mark 1 cm margins under IOUS guidance; bipolar or electrocautery"},
      {n:3,t:"Transection",d:"Harmonic scalpel or CUSA; progressive hemostasis; Pringle if bleeding"},
      {n:4,t:"Specimen extraction",d:"Retrieval bag; extend port if needed"},
      {n:5,t:"Hemostasis",d:"Argon beam; fibrin sealants; drain if biliary ooze suspected"}
    ],
    pearls:["Rupture risk is highest with lesions >5 cm, superficial, and during pregnancy — resect before pregnancy","FNH vs adenoma: gadoxetate-enhanced MRI — FNH shows hepatobiliary uptake (bright on HBP phase); adenoma does not","Multifocal adenomatosis (>10): genomic testing (HNF1α mutation); glycogen storage disease workup"]
  },
  guidelines:[{src:"EASL Clinical Practice Guidelines on Benign Liver Tumors 2016"},{src:"IHPBA Consensus on Hepatocellular Adenoma 2011"},{src:"ESGAR/EFISDS Liver Imaging Guidelines 2021"}],
  pearls:["OCP cessation leads to regression in >50% — mandatory first step before surgery in small asymptomatic adenomas","β-catenin-activated adenoma: highest malignancy risk — resect regardless of size","Gadoxetate MRI: adenoma dark on hepatobiliary phase (no uptake), FNH bright — most reliable differentiation","Hemorrhage: stabilize with TAE, resect electively 4–6 weeks later"],
  mistakes:["Not stopping OCP before deciding to resect a <5 cm adenoma in women","Not subtyping — β-catenin changes management","Operating on acutely ruptured adenoma without prior embolization — hemorrhage risk","Confusing with FNH — FNH does not require resection"]
},
{
  id:"hydatid-cyst", dept:"hpb", name:"Hydatid Cyst of the Liver", latin:"Echinococcosis hepatis", organ:"Liver",
  severity:"medium", tags:["liver","hydatid","Echinococcus","PAIR","albendazole","anaphylaxis"],
  hero:"Cystic infection of the liver caused by Echinococcus granulosus larval stage; endemic in pastoral areas; spillage causes anaphylaxis and secondary hydatidosis.",
  keypoints:[
    "Echinococcus granulosus (cystic — commonest) vs E. multilocularis (alveolar — aggressive, infiltrative, poor prognosis)",
    "WHO-IWGE classification: CE1–CE5 based on cyst viability and maturity guides treatment approach",
    "PAIR (puncture, aspiration, injection, re-aspiration) with pre-procedural albendazole for CE1/CE3a; surgery for CE2/CE3b/large CE1",
    "Never aspirate without antiparasitic cover — anaphylaxis and secondary seeding",
    "Eosinophilia + calcified cyst + travel/endemic exposure = classic triad"
  ],
  differentials:["Simple hepatic cyst","Pyogenic liver abscess","Amebic abscess","Biliary cystadenoma/cystadenocarcinoma","Hepatic metastasis (cystic)"],
  mnemonics:[{name:"PAIR = Treat, not operate",text:"Puncture, Aspiration, Injection (hypertonic saline/ethanol), Re-aspiration — with albendazole cover. Surgery for complicated/large/failed PAIR"}],
  overview:{
    definition:"Hepatic infection by the larval stage of Echinococcus granulosus (cystic echinococcosis) or E. multilocularis (alveolar echinococcosis).",
    epidemiology:"Endemic: Mediterranean, Middle East, Central Asia, East Africa, South America, Australasia. Dog-sheep lifecycle. Incidence 1–200/100 000 in endemic areas.",
    pathophysiology:"Humans are accidental intermediate hosts. Ingested eggs → hexacanth embryo → portal vein → liver (70%) or lung (20%) → hydatid cyst (pericyst = host tissue; germinal layer; protoscolices → brood capsules → hydatid sand). Anaphylaxis if cyst fluid spills.",
    classification:[
      {label:"CE1",note:"Active: unilocular, anechoic with double-line sign (US); viable"},
      {label:"CE2",note:"Active: multiseptate (honeycomb); multiple daughter cysts"},
      {label:"CE3a",note:"Transitional: detached membrane (water lily sign)"},
      {label:"CE3b",note:"Transitional: daughter cysts in solid matrix"},
      {label:"CE4",note:"Inactive: heterogeneous; no daughter cysts; degenerate matrix"},
      {label:"CE5",note:"Inactive: calcified; dead; no treatment needed"}
    ]
  },
  diagnosis:{
    history:["Travel to or residence in endemic country","Exposure to sheep/cattle/dogs","RUQ discomfort or mass","Urticaria, allergic reactions (cyst leak)","Jaundice (biliary communication)"],
    examination:["Hepatomegaly, palpable mass","Jaundice (if biliary communication)","Occasionally anaphylactic signs (acute leak)"],
    investigations:[
      {name:"US abdomen",role:"Gold standard: double-line sign (CE1), daughter cysts (CE2), water lily sign (CE3a), calcification (CE5); guides PAIR"},
      {name:"CT abdomen",role:"Better delineation of number, location, biliary communication, complications; CE5 calcification"},
      {name:"MRI",role:"Superior for biliary communication; daughter cysts; type characterization"},
      {name:"Echinococcus serology (ELISA, IHA)",role:"Sensitivity 80–90% for cystic; lower for alveolar; used for diagnosis + follow-up after treatment"},
      {name:"Eosinophil count",role:"Elevated (>500/μL) in 40%"},
      {name:"LFTs",role:"Elevated ALP/bilirubin if biliary communication or biliary cystobiliary fistula"}
    ]
  },
  criteria:{
    title:"WHO-IWGE Treatment Guidelines by CE Stage",
    items:[
      {k:"CE1, CE3a",v:"PAIR + albendazole 400 mg BD (start 4 days before, continue 1 month after)"},
      {k:"CE2, CE3b (complex/multiseptate)",v:"Surgical treatment preferred; or MoCAS (modified catheterization)"},
      {k:"CE4, CE5",v:"Watch and wait — inactive/dead cysts; albendazole only if CE4 transitional"},
      {k:"Complicated CE",v:"Biliary communication, rupture, infection → surgical drainage/resection"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Watch and wait: CE4/CE5 (inactive calcified) — no treatment unless complications","Eosinophilia screening; serology monitoring"],
    medical:["Albendazole 400 mg BD (take with fatty meal for absorption): primary for small CE1, adjunct to PAIR/surgery, and post-procedure prophylaxis","Mebendazole: alternative; poor absorption","Praziquantel 40 mg/kg/week × 2 weeks added to albendazole pre-PAIR reduces viability of protoscolices"],
    surgical:[
      {name:"PAIR (percutaneous aspiration injection re-aspiration)",when:"CE1/CE3a; >5 cm; accessible; no biliary communication on MRI",notes:"US-guided; 20% hypertonic saline or 95% ethanol injected for 15 min; pre- and post-albendazole; avoid if CE2 (risk of incomplete treatment)"},
      {name:"Conservative surgery (pericystectomy / deroofing + omentoplasty)",when:"CE2/CE3b; failed PAIR; biliary communication; large/complicated cysts",notes:"Open or laparoscopic; protect operative field with hypertonic-soaked gauze (anaphylaxis/seeding prevention); deroofing; obliterate cavity; biliary fistula repair"},
      {name:"Radical surgery (total pericystectomy / hepatic resection)",when:"CE2/CE3b in accessible location; hepatic tissue thin around cyst; recurrent disease",notes:"Complete removal of pericyst + germinal layer; eliminates recurrence but higher morbidity than conservative surgery"},
      {name:"Liver transplantation",when:"E. multilocularis with liver failure or unresectable hepatic involvement",notes:"Long-term antiparasitic (albendazole) indefinitely post-transplant to prevent recurrence"}
    ]
  },
  technique:{
    title:"Conservative Surgical Cystectomy",
    prep:["Albendazole × 4 days pre-op minimum","Antihistamine and hydrocortisone available for anaphylaxis","Prepare hypertonic saline-soaked packs","GA; supine; wide exposure"],
    steps:[
      {n:1,t:"Pack operative field",d:"Place hypertonic saline-soaked packs around cyst to prevent spillage"},
      {n:2,t:"Puncture and aspirate",d:"Trocar puncture of cyst; aspirate hydatid fluid (pale, clear, 'water') → send for analysis; preserve specimen"},
      {n:3,t:"Inject scolicidal agent",d:"Inject 15–20% hypertonic saline or 95% ethanol into cavity; wait 15 min"},
      {n:4,t:"Re-aspirate",d:"Aspirate all fluid; remove germinal layer and daughter cysts"},
      {n:5,t:"Cavity management",d:"External drainage; omentoplasty to obliterate dead space; capitonnage (marsupialisation); or partial pericystectomy"},
      {n:6,t:"Biliary communication",d:"Probe biliary fistula; close with absorbable suture; T-tube if large communication; ERCP post-op if biliary obstruction"}
    ],
    pearls:["Never aspirate a liver cyst without anaphylaxis cover if hydatid possible on imaging — always check history and serology first","Hypertonic saline packs around field are mandatory before puncture","Anaphylaxis during surgery: IV adrenaline 0.01 mg/kg, hydrocortisone, fluid resuscitation","E. multilocularis: treat like malignancy — R0 resection + lifelong albendazole"]
  },
  guidelines:[{src:"WHO-IWGE Classification and Treatment Guidelines 2003 (updated)"},{src:"EASL Clinical Practice Guidelines on Echinococcosis 2010"},{src:"British Infection Association: Hydatid Disease 2014"}],
  pearls:["CE5 = calcified dead cyst — no treatment; monitor only","Albendazole reduces viable protoscolices before PAIR — mandatory adjunct","Biliary communication occurs in 10–25% — MRCP pre-op; ERCP if post-op leak","Alveolar echinococcosis (E. multilocularis): treat like HCC — radical resection + lifelong albendazole"],
  mistakes:["Aspirating without antiparasitic cover or anaphylaxis equipment","Not checking for biliary communication before PAIR — scolicidal agent causes biliary sclerosis if injected into bile duct","Omitting post-operative albendazole course — reduces recurrence risk by 50%","Treating CE4/CE5 calcified cysts — they are inactive and need no treatment"]
},
{
  id:"ipmn", dept:"hpb", name:"Intraductal Papillary Mucinous Neoplasm", latin:"Neoplasma mucinosum papillare intraductale", organ:"Pancreas",
  severity:"medium", tags:["pancreas","IPMN","mucin","Fukuoka","Sendai","cystic neoplasm","Whipple"],
  hero:"Mucin-producing pancreatic cystic neoplasm with malignant potential, classified by ductal involvement (main duct vs branch duct) and grades of dysplasia.",
  keypoints:[
    "Main duct IPMN (MD-IPMN): dilation of MPD >5 mm; high malignancy rate (45–65%) — resect all if fit",
    "Branch duct IPMN (BD-IPMN): cyst communicating with side branches; lower malignancy rate (18–25%)",
    "Fukuoka 2017 guidelines: worrisome features vs high-risk stigmata determine urgency of surgery",
    "High-risk stigmata: obstructive jaundice, enhancing mural nodule ≥5 mm, MPD ≥10 mm — operate",
    "Mixed-type IPMN: both main and branch duct involvement — treat as MD-IPMN"
  ],
  differentials:["Mucinous cystic neoplasm (MCN — no ductal communication, women, body/tail)","Serous cystadenoma (honeycomb, CEA low, no dysplasia)","Pancreatic pseudocyst (amylase high, trauma/pancreatitis history)","Solid pseudopapillary tumor (young women)","Pancreatic ductal adenocarcinoma"],
  mnemonics:[{name:"High-Risk Stigmata = Operate",text:"Jaundice + head cyst; Enhancing nodule ≥5mm; MPD ≥10mm; Positive cytology → DO NOT WAIT → Whipple or distal pancreatectomy"}],
  overview:{
    definition:"Intraductal neoplasm of the pancreas producing mucin, arising from the main pancreatic duct or its branches, with a spectrum from low-grade dysplasia to invasive carcinoma.",
    epidemiology:"Incidentally found in 2–3% of abdominal CT; prevalence rises with age; M=F. 10–20% of resected pancreatic cysts. Associated with concurrent PDAC in 7–9%.",
    pathophysiology:"Somatic mutations in KRAS, GNAS (main duct type), CDKN2A, TP53 (progression to high-grade/invasive). Mucin overproduction dilates ducts. Main duct dilation indicates higher grade neoplasia or invasive cancer.",
    classification:[
      {label:"Main duct IPMN (MD-IPMN)",note:"Segmental or diffuse dilation of MPD >5 mm; no other cause; 45–65% have HGD or invasive cancer"},
      {label:"Branch duct IPMN (BD-IPMN)",note:"Cyst in communication with side branches; MPD <5 mm; 18–25% malignancy rate"},
      {label:"Mixed-type IPMN",note:"Both main duct dilation and branch duct cysts; treat as MD-IPMN"}
    ]
  },
  diagnosis:{
    history:["Incidental cystic pancreatic lesion on CT/MRI","Recurrent acute pancreatitis (mucin plugging)","New-onset diabetes or change in glycemic control","Weight loss, steatorrhea (advanced)","Family history of pancreatic cancer"],
    examination:["Usually normal; epigastric tenderness if pancreatitis","Jaundice (high-risk feature)"],
    investigations:[
      {name:"MRCP/MRI pancreas",role:"Gold standard: characterize duct communication, ductal dilation, mural nodules, septa; preferred over CT for soft tissue detail"},
      {name:"EUS",role:"Mural nodule characterization; FNA for cyst fluid (CEA >192 ng/mL = mucinous; cytology for malignant cells); Doppler for nodule vascularity"},
      {name:"CT pancreas (dual phase)",role:"Staging if surgery planned; invasion, vascular involvement, metastases"},
      {name:"Cyst fluid analysis",role:"CEA >192 = mucinous (IPMN or MCN); amylase >250 = communicates with duct; KRAS/GNAS mutation in fluid confirms IPMN"},
      {name:"CA 19-9",role:"Elevated in 30–40% malignant IPMN; used in monitoring"},
      {name:"Endoscopy (papilla)",role:"Fish-mouth papilla (mucin extruding from papilla) = pathognomonic for MD-IPMN"}
    ]
  },
  criteria:{
    title:"Fukuoka Consensus 2017 — Decision Framework",
    items:[
      {k:"High-risk stigmata → Resect",v:"Obstructive jaundice with cyst in head; enhancing solid component (≥5 mm) or mural nodule; MPD ≥10 mm"},
      {k:"Worrisome features → EUS → Consider surgery",v:"Cyst ≥3 cm; enhancing mural nodule <5 mm; thickened/enhancing walls; MPD 5–9 mm; abrupt MPD change + distal atrophy; lymphadenopathy; elevated CA 19-9; rapid cyst growth (>5 mm/2 years)"},
      {k:"No features — Surveillance",v:"BD-IPMN <1.5 cm: MRI at 2–3 years; 1.5–2.5 cm: MRI yearly × 2, then 2-yearly; >2.5 cm: 6-monthly × 1 year, yearly thereafter"},
      {k:"MD-IPMN",v:"Resect all fit patients with MPD >5 mm and no comorbidity precluding surgery"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Surveillance MRI/MRCP for BD-IPMN without high-risk or worrisome features","CA 19-9 monitoring annually","Discontinue surveillance if patient is not fit for surgery"],
    medical:["No pharmacological treatment; smoking cessation reduces pancreatic cancer risk"],
    surgical:[
      {name:"Pancreaticoduodenectomy (Whipple)",when:"MD-IPMN or invasive IPMN in pancreatic head; resectable",notes:"Total pancreatectomy if frozen section of transected duct shows HGD/invasive at margin"},
      {name:"Distal pancreatectomy ± splenectomy",when:"BD-IPMN or MD-IPMN in body/tail",notes:"Laparoscopic preferred for body/tail; check margin frozen section"},
      {name:"Total pancreatectomy",when:"Diffuse main duct IPMN; multifocal high-grade disease; positive margins throughout",notes:"IDDM obligate; islet autotransplantation at specialist centers; serious QOL implications"},
      {name:"Middle pancreatectomy",when:"Small BD-IPMN in neck; preserves both head and tail",notes:"High fistula rate (10–30%); reserve for small lesions with functional concerns"}
    ]
  },
  technique:{
    title:"Intraoperative Frozen Section for IPMN",
    prep:["Review MRI duct anatomy","EUS confirms no invasive component before resection","Plan extent of resection — total pancreatectomy if needed"],
    steps:[
      {n:1,t:"Initial resection",d:"Whipple or distal pancreatectomy as per lesion location"},
      {n:2,t:"Frozen section of transected duct",d:"Send pancreatic neck margin for frozen section; assess for HGD or invasive carcinoma"},
      {n:3,t:"If HGD/positive margin",d:"Extend resection proximally or distally; repeat frozen section"},
      {n:4,t:"Total pancreatectomy",d:"If margins persistently positive or diffuse MPD involvement; spleen preservation if oncologically safe"},
      {n:5,t:"Reconstruction",d:"Standard Whipple reconstruction; or end of pancreas oversewn + hepaticojejunostomy if total pancreatectomy"}
    ],
    pearls:["Low-grade dysplasia at frozen section is acceptable — extending resection for LGD not warranted","HGD or invasive cancer at margin → extend resection","Multifocal BD-IPMN: most do not need total pancreatectomy — surveil remnant after resection","Post-resection surveillance: MRI at 6 months, then annually — 5% develop recurrence in remnant"]
  },
  guidelines:[{src:"Fukuoka Consensus Guidelines 2017"},{src:"European Evidence-Based Guidelines on Pancreatic Cystic Neoplasms 2018"},{src:"IAP Sendai Guidelines 2006 (superseded by Fukuoka)"}],
  pearls:["Fish-mouth papilla (mucin extruding) = pathognomonic for MD-IPMN — proceed to surgery","BD-IPMN: most do not need surgery — surveillance with MRI; worrisome features trigger EUS","MD-IPMN: resect all fit patients — 45–65% have HGD or invasive cancer at resection","Synchronous PDAC: IPMN patients have 7–9× increased risk of concurrent or future PDAC — full pancreatic imaging mandatory"],
  mistakes:["Not surveilling resected IPMN — remnant recurrence in 5%","Total pancreatectomy for LGD at margin — over-resection; poor QOL","Missing fish-mouth papilla on EGD — pathognomonic for MD-IPMN","Treating serous cystadenoma as IPMN — serous lesions rarely need resection"]
},
{
  id:"pan-net", dept:"hpb", name:"Pancreatic Neuroendocrine Tumor", latin:"Tumor neuroendocrinus pancreaticus", organ:"Pancreas",
  severity:"medium", tags:["pancreas","NET","insulinoma","gastrinoma","MEN1","somatostatin","Whipple"],
  hero:"Heterogeneous group of neoplasms arising from pancreatic islet cells; range from benign insulinoma to aggressive non-functional tumors with liver metastases.",
  keypoints:[
    "Functional (40%): insulinoma (most common), gastrinoma, glucagonoma, VIPoma, somatostatinoma — defined by hormone excess syndrome",
    "Non-functional (60%): larger at presentation, usually incidental; no hormone syndrome",
    "WHO 2022 grade based on Ki-67 and mitotic count: G1 (<3%, <2/10HPF), G2 (3–20%, 2–20), G3 (>20%, >20) / NEC (poorly differentiated)",
    "Insulinoma: 90% benign, solitary, resectable; Whipple's triad for diagnosis",
    "MEN1 (multiple endocrine neoplasia type 1): 80–100% develop pNET — surveillance mandatory"
  ],
  differentials:["Pancreatic ductal adenocarcinoma","Acinar cell carcinoma","Solid pseudopapillary tumor","Metastatic small cell carcinoma","Duodenal carcinoid"],
  mnemonics:[{name:"Whipple's Triad (Insulinoma)",text:"Symptoms of hypoglycemia with fasting; Blood glucose <2.2 mmol/L at time of symptoms; Relief with glucose administration"}],
  overview:{
    definition:"Epithelial neoplasms arising from the pluripotent neuroendocrine cells of the pancreas (islets of Langerhans and ductal cells), capable of hormone secretion.",
    epidemiology:"Incidence 1–4/100 000/year; increasing with cross-sectional imaging. F=M. 10% associated with MEN1, VHL, tuberous sclerosis, NF1.",
    pathophysiology:"Somatic mutations in MEN1, DAXX/ATRX, mTOR pathway; chromosomal instability in higher-grade tumors. Functional tumors secrete hormones causing clinical syndromes. Liver is the dominant site of metastasis.",
    classification:[
      {label:"WHO G1 (well-differentiated)",note:"Ki-67 <3%; mitoses <2/10HPF; low malignant potential; 5-year survival >90% localized"},
      {label:"WHO G2 (well-differentiated)",note:"Ki-67 3–20%; mitoses 2–20/10HPF; intermediate"},
      {label:"WHO G3 NET (well-differentiated)",note:"Ki-67 >20%; well-differentiated morphology; variable biology"},
      {label:"NEC G3 (poorly differentiated)",note:"Ki-67 >20%; small or large cell; aggressive; treat like SCLC/LCNEC"}
    ]
  },
  diagnosis:{
    history:[
      "Insulinoma: Whipple's triad — hypoglycemia symptoms (tremor, confusion, sweating) relieved by glucose; typically fasting or exercise-induced",
      "Gastrinoma (Zollinger-Ellison): severe refractory peptic ulcers, diarrhea, esophagitis; often associated with MEN1",
      "Glucagonoma: 4Ds — Dermatitis (necrolytic migratory erythema), Diabetes, DVT, Depression",
      "VIPoma (Verner-Morrison): watery diarrhea, hypokalemia, achlorhydria (WDHA syndrome)",
      "Non-functional: weight loss, abdominal mass, jaundice, incidental"
    ],
    examination:["Hypoglycemia signs (insulinoma)","Necrolytic migratory erythema (glucagonoma)","Hepatomegaly with metastases"],
    investigations:[
      {name:"Fasting test (72-hour supervised)",role:"Insulinoma: hypoglycemia with inappropriately elevated insulin + C-peptide; artificial insulin: C-peptide low, sulfonylurea screen negative"},
      {name:"Fasting gastrin + secretin stimulation",role:"Gastrinoma: fasting gastrin >1000 pg/mL or rise >200 pg/mL with secretin"},
      {name:"Chromogranin A (CgA)",role:"Pan-marker for neuroendocrine tumors; elevated in 70–80%; correlates with tumor burden"},
      {name:"24-hour urinary 5-HIAA",role:"Carcinoid/serotonin-secreting; not specific for pNET"},
      {name:"MRI pancreas + liver",role:"Best sensitivity for small tumors; gadolinium + diffusion; liver metastases"},
      {name:"CT (pancreatic protocol)",role:"Hypervascular tumors; arterial phase enhancement; liver metastases"},
      {name:"Ga-68 DOTATATE PET-CT",role:"Somatostatin receptor scintigraphy — excellent for G1/G2 NETs; staging; identifies metastases; guides PRRT eligibility"},
      {name:"EUS ± FNA",role:"Best for small pancreatic primaries <1 cm; biopsy for Ki-67 grading"},
      {name:"MEN1 genetic testing",role:"If family history, multicenter, or parathyroid/pituitary involvement"}
    ]
  },
  criteria:{
    title:"Surgical Eligibility and Functional Syndrome Criteria",
    items:[
      {k:"Whipple's Triad",v:"Hypoglycemia + symptoms + relief with glucose — confirms insulinoma"},
      {k:"Localized resectable G1/G2",v:"Resect with R0 intent"},
      {k:"Insulinoma <2 cm in body/tail",v:"Laparoscopic distal pancreatectomy or enucleation"},
      {k:"Gastrinoma",v:"Resect if localized; PPI covers hypersecretion; all resectable gastrinomas should undergo surgery"},
      {k:"Non-functional pNET <2 cm",v:"Controversial: can observe G1 lesions <1.5–2 cm without worrisome features (ENETS)"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Non-functional G1 <2 cm: active surveillance with MRI/EUS every 6 months — if stable ×2 years, annual thereafter","MEN1: surveillance for functional syndrome and growth","Nutritional support"],
    medical:["Functional syndromes: octreotide LAR or lanreotide (somatostatin analogues) — control hormonal symptoms and slow progression","mTOR inhibitors: everolimus (progression after SSA or for non-functional)","Sunitinib: VEGFR inhibitor — functional and non-functional advanced pNET","PRRT (peptide receptor radionuclide therapy — Lu-177 DOTATATE): for somatostatin receptor-positive; NETTER-1 trial: significant PFS improvement","Streptozocin-based chemotherapy: G3 well-differentiated pNET; or for aggressive G2","Cisplatin + etoposide: NEC (poorly differentiated) — as for SCLC"],
    surgical:[
      {name:"Enucleation",when:"Insulinoma <2–3 cm; >3 mm from MPD; benign behavior expected",notes:"Intraoperative US guides location; low morbidity; IOUS mandatory to confirm duct distance"},
      {name:"Distal pancreatectomy ± splenectomy",when:"Body/tail tumor >2 cm or not amenable to enucleation; laparoscopic preferred",notes:"Spleen-preserving if not oncologically indicated"},
      {name:"Pancreaticoduodenectomy",when:"Head tumor >2 cm; ductal involvement; G2–G3; lymph node metastases",notes:"Standard Whipple or PPPD"},
      {name:"Cytoreductive surgery / liver metastasectomy",when:"Well-differentiated G1/G2 with resectable liver metastases; hepatic debulking (>70% tumor removal) improves survival",notes:"Combine with ablation (RFA) for smaller metastases"},
      {name:"PRRT (Lu-177 DOTATATE)",when:"Unresectable/metastatic, somatostatin receptor positive (DOTATATE PET positive)",notes:"Lu-177 DOTATATE — 4 cycles; NETTER-1: 79% PFS improvement; nephrotoxicity monitoring required"}
    ]
  },
  technique:{
    title:"Laparoscopic Distal Pancreatectomy for pNET",
    prep:["IOUS probe available","Octreotide infusion in theater for insulinoma (prevents rebound hypoglycemia)","Blood glucose monitoring every 15 min intraoperatively (insulinoma)"],
    steps:[
      {n:1,t:"Port placement",d:"4 ports: 12 mm umbilical, 5 mm left lateral, 5 mm left upper quadrant, 5 mm right flank"},
      {n:2,t:"IOUS",d:"Confirm tumor; check relationship to MPD and splenic vessels"},
      {n:3,t:"Lesser sac entry",d:"Divide gastrocolic omentum; expose pancreatic body/tail"},
      {n:4,t:"Dissection",d:"Harmonic scalpel; mobilize pancreas from retroperitoneum; identify and control splenic artery and vein if splenectomy planned"},
      {n:5,t:"Transection",d:"Endostapler (blue or purple load) through pancreatic neck; ensure ≥2 cm margin from tumor"},
      {n:6,t:"Retrieve specimen",d:"Bag; extract through umbilical port; blood glucose check confirms insulinoma removed (glucose rises)"}
    ],
    pearls:["Intraoperative blood glucose rise after tumor removal = confirms insulinoma — glucose should rise within 5 min of resection","IOUS is mandatory — palpation alone misses small tumors","Spleen preservation reduces long-term immune complications — use if oncologically safe","Post-op: monitor for pancreatic fistula; drain amylase day 3"]
  },
  guidelines:[{src:"ENETS Consensus Guidelines 2016/2022"},{src:"NCCN Neuroendocrine Tumors 2023"},{src:"ESMO Gastroenteropancreatic NET Guidelines 2020"}],
  pearls:["Insulinoma: 90% benign, solitary, <2 cm — enucleation or laparoscopic distal pancreatectomy is curative","Ga-68 DOTATATE PET: superior sensitivity to OctreoScan; mandatory for G1/G2 staging","PRRT (Lu-177 DOTATATE): 79% PFS improvement in metastatic G1/G2 pNET (NETTER-1 trial)","MEN1: all pNETs ≥2 cm should be resected; functional tumors regardless of size"],
  mistakes:["Not grading with Ki-67 — changes management and prognosis completely","Not localizing insulinoma intraoperatively with IOUS — missing small lesion","Using NEC chemotherapy (cisplatin/etoposide) for well-differentiated G3 pNET — wrong regimen","Not screening for MEN1 in young patients with multifocal pNET"]
},
{
  id:"itp", dept:"hpb", name:"Immune Thrombocytopenic Purpura", latin:"Purpura thrombocytopenica immunologica", organ:"Spleen",
  severity:"medium", tags:["spleen","ITP","platelets","splenectomy","rituximab","steroids"],
  hero:"Autoimmune disorder where IgG autoantibodies against platelet surface antigens (GPIIb/IIIa) lead to accelerated platelet destruction and impaired production.",
  keypoints:[
    "Diagnosis of exclusion: thrombocytopenia (<100×10⁹/L) without other cause after excluding secondary causes",
    "First-line: corticosteroids (prednisolone 1 mg/kg/day) or IVIg for rapid platelet rise (surgery, bleeding)",
    "Splenectomy: 60–80% durable complete response; indicated after failed medical therapy ≥12 months",
    "Pre-splenectomy vaccination mandatory (meningococcal, pneumococcal, Hib) ≥2 weeks before",
    "TPO receptor agonists (eltrombopag, romiplostim): second-line; avoid splenectomy in partial responders"
  ],
  differentials:["Drug-induced thrombocytopenia (heparin-HIT, quinine, sulfonamides)","Thrombotic thrombocytopenic purpura (TTP)","Bone marrow failure","HIV-related thrombocytopenia","Systemic lupus erythematosus","Hypersplenism"],
  mnemonics:[{name:"ITP Treatment Ladder",text:"Steroids → IVIg (if acute/surgery) → Rituximab → TPO-RA (eltrombopag/romiplostim) → Splenectomy → Fostamatinib"}],
  overview:{
    definition:"Immune-mediated thrombocytopenia (<100×10⁹/L) due to autoantibody-mediated platelet destruction and impaired thrombopoiesis, without identifiable secondary cause.",
    epidemiology:"Incidence 5–10/100 000/year; bimodal distribution: children (acute, post-viral, self-limiting) and adults (chronic). F:M = 2:1 in adults.",
    pathophysiology:"IgG autoantibodies target GPIIb/IIIa and GPIb/IX on platelets → Fcγ receptor-mediated destruction by splenic macrophages → thrombocytopenia. Autoantibodies also inhibit megakaryocyte differentiation. Spleen is primary site of antibody production and platelet destruction.",
    classification:[
      {label:"Newly diagnosed",note:"<3 months from diagnosis"},
      {label:"Persistent",note:"3–12 months from diagnosis"},
      {label:"Chronic",note:">12 months; majority of adults"},
      {label:"Severe",note:"Significant bleeding requiring treatment escalation regardless of duration"}
    ]
  },
  diagnosis:{
    history:["Easy bruising, petechiae, purpura","Gum bleeding, epistaxis, menorrhagia","Platelet count typically <30 for bleeding symptoms","Recent viral illness (children)","Drug history (heparin, quinine, sulfonamides)","Exclude: HIV, HCV, H. pylori, SLE"],
    examination:["Petechiae (legs), purpura, ecchymoses","Mucosal bleeding: gum, oral, vaginal","Splenomegaly is rare — suggests secondary cause","No lymphadenopathy (vs lymphoma)"],
    investigations:[
      {name:"CBC with film",role:"Isolated thrombocytopenia; normal WBC and Hb (unless hemorrhage); large platelets; exclude pseudothrombocytopenia"},
      {name:"Peripheral blood film",role:"Excludes TTP (schistocytes), hypersplenism, leukemia"},
      {name:"Direct antiglobulin test (DAT)",role:"Exclude Evans syndrome (ITP + autoimmune hemolytic anemia)"},
      {name:"HIV, HCV, H. pylori serology",role:"Secondary causes — treat underlying infection first"},
      {name:"Bone marrow biopsy",role:"If atypical features (lymphadenopathy, older age, poor treatment response) — exclude myelodysplasia"},
      {name:"Antinuclear antibody, anti-dsDNA",role:"Exclude SLE-associated thrombocytopenia"},
      {name:"Antiplatelet antibodies",role:"Sensitivity 49–66%; not required for diagnosis but supports if positive"}
    ]
  },
  criteria:{
    title:"Treatment Thresholds",
    items:[
      {k:"Observation (no treatment)",v:"Platelets ≥30×10⁹/L; no bleeding symptoms; stable"},
      {k:"Treat",v:"Platelets <30 + minor bleeding; or <50 + significant bleeding; or <80 pre-surgery"},
      {k:"Urgent (IVIg + transfusion)",v:"ICH; life-threatening bleeding; emergency surgery with platelets <50"},
      {k:"Splenectomy indication",v:"Chronic ITP >12 months; failed steroids, IVIg, rituximab; platelet <30 or symptomatic"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Avoid NSAIDs and antiplatelet agents","Platelet transfusion only for emergency bleeding or pre-operative (short-lived — destroyed rapidly)","H. pylori eradication if positive — may improve platelet count"],
    medical:["Prednisolone 1–1.5 mg/kg/day × 4 weeks, then taper; 70–80% initial response; not durable in 70%","IVIg 1 g/kg/day × 1–2 days: rapid response for acute bleeding or pre-operative; transient","Anti-D immunoglobulin (Rh-positive, non-splenectomised): alternative to IVIg","Rituximab (anti-CD20) 375 mg/m² × 4 doses: 40–60% response; durable in 20%","Eltrombopag (oral TPO-RA) 25–75 mg/day or romiplostim 1–10 μg/kg/week SC: 80% response; requires ongoing treatment","Fostamatinib (spleen tyrosine kinase inhibitor): third-line"],
    surgical:[
      {name:"Laparoscopic splenectomy",when:"Chronic ITP >12 months; failed ≥2 lines of therapy; platelets <30 or symptomatic; patient fit for surgery",notes:"Durable complete response 60–80%; search for accessory spleen intraoperatively (15% of patients) — missed accessory spleen causes relapse"},
      {name:"Accessory splenectomy",when:"Relapse after splenectomy; accessory spleen confirmed on nuclear medicine scan or CT",notes:"Often laparoscopic; restore durable remission in 50–80% if relapsed due to accessory spleen"}
    ]
  },
  technique:{
    title:"Laparoscopic Splenectomy for ITP",
    prep:["Vaccinations ≥2 weeks pre-op: pneumococcal, meningococcal ACWY, Hib (if not given)","Target platelets ≥50 before surgery: IVIg ± steroids","Blood type and screen; cross-match 2 units"],
    steps:[
      {n:1,t:"Patient positioning",d:"Right lateral decubitus (French lateral) or supine; 4 ports: 10 mm umbilical camera, 12 mm left lateral (stapler), 2× 5 mm"},
      {n:2,t:"Accessory spleen search",d:"Systematic inspection of gastrosplenic, splenorenal, greater omentum, mesentery — accessory spleen in 15%"},
      {n:3,t:"Short gastric vessels",d:"Divide with harmonic; free upper pole of spleen from stomach"},
      {n:4,t:"Hilar dissection",d:"Identify splenic artery (posterior to vein); individually clip and divide artery first (reduces bleeding, allows autotransfusion), then vein"},
      {n:5,t:"Posterior dissection",d:"Divide splenorenal and phrenosplenic ligaments; free spleen completely"},
      {n:6,t:"Retrieval",d:"Place in retrieval bag; morcellate; extract through 12 mm port enlarged if needed; avoid splenosis"}
    ],
    pearls:["Always vaccinate ≥2 weeks before splenectomy — overwhelming post-splenectomy infection (OPSI) is fatal","Accessory spleen: must search systematically — found in 15%; relapse if missed","Divide splenic artery first — reduces splenic size, facilitates dissection, autotransfusion from spleen","Post-splenectomy: lifelong penicillin V prophylaxis + prompt antibiotic treatment for febrile illness"]
  },
  guidelines:[{src:"ITP International Working Group Consensus 2019"},{src:"ASH Guidelines on ITP 2019"},{src:"BSH Guidelines on ITP 2003 (updated 2015)"}],
  pearls:["Splenectomy is the most durable treatment — 60–80% complete response at 5 years","TPO receptor agonists (eltrombopag/romiplostim): high response rate but require ongoing treatment indefinitely","Accessory spleen in 15%: must identify intraoperatively — missed accessory spleen causes relapse","Post-splenectomy: vaccinate + educate about OPSI (overwhelming pneumococcal/meningococcal sepsis)"],
  mistakes:["Not vaccinating before splenectomy — OPSI carries 50% mortality","Missing accessory spleen — commonest cause of relapse after splenectomy","Using platelet transfusion without concurrent IVIg/steroids in acute ITP — platelets destroyed rapidly","Splenectomy without trial of rituximab or TPO-RA in appropriate patients — less invasive options first"]
},
{
  id:"hereditary-spherocytosis", dept:"hpb", name:"Hereditary Spherocytosis", latin:"Spherocytosis hereditaria", organ:"Spleen",
  severity:"low", tags:["spleen","spherocytosis","hemolysis","anemia","jaundice","splenectomy"],
  hero:"Autosomal dominant hemolytic anemia due to spectrin/ankyrin deficiency causing spherical RBCs that are trapped and destroyed by the spleen.",
  keypoints:[
    "Most common inherited hemolytic anemia in Northern European populations (1:2000)",
    "Triad: anemia + jaundice (unconjugated hyperbilirubinemia) + splenomegaly",
    "Diagnosis: family history + MCHC >36 g/dL + spherocytes on film + direct Coombs negative + EMA (eosin-5'-maleimide) flow cytometry",
    "Pigment (calcium bilirubinate) gallstones develop in 50% — cholecystectomy concurrent with splenectomy if present",
    "Splenectomy curative — delay until age ≥6 years to reduce OPSI risk; partial splenectomy for young children"
  ],
  differentials:["Autoimmune hemolytic anemia (AIHA — direct Coombs positive)","G6PD deficiency (episodic, X-linked, precipitated by triggers)","Sickle cell disease","ABO incompatibility (neonatal)","Microangiopathic hemolytic anemia (TTP/HUS)"],
  mnemonics:[{name:"HS Triad",text:"Anemia + Jaundice (unconjugated) + Splenomegaly — plus positive family history, spherocytes on film, negative Coombs = Hereditary Spherocytosis"}],
  overview:{
    definition:"Inherited membrane defect causing spherocytic erythrocytes susceptible to splenic sequestration and hemolysis.",
    epidemiology:"Prevalence 1:2000 in Northern Europeans; M=F. 75% autosomal dominant; 25% de novo or autosomal recessive.",
    pathophysiology:"Mutations in spectrin (SPTA1, SPTB), ankyrin (ANK1), band 3 (SLC4A1), protein 4.2 → loss of RBC membrane surface area relative to volume → spherocytes → rigid, osmotically fragile → trapped in splenic sinusoids → hemolysis.",
    classification:[
      {label:"Mild HS",note:"Compensated hemolysis; Hb >11 g/dL; reticulocytes <6%; minimal splenomegaly"},
      {label:"Moderate HS",note:"Hb 8–11 g/dL; reticulocytes 6–10%; splenomegaly"},
      {label:"Severe HS",note:"Hb <8 g/dL; reticulocytes >10%; transfusion dependent; spectrin deficiency"},
      {label:"Aplastic crisis",note:"Triggered by parvovirus B19 → temporary cessation of erythropoiesis → severe anemia; resolves in 7–10 days"}
    ]
  },
  diagnosis:{
    history:["Family history (75% autosomal dominant)","Neonatal jaundice requiring phototherapy","Recurrent anemia, fatigue, jaundice","Episodic worsening (aplastic crisis with parvovirus B19, hemolytic crisis)","Gallstone complications"],
    examination:["Pallor, jaundice (scleral icterus)","Splenomegaly (always present with hemolysis)","Pigment gallstones (50% by age 30)","Leg ulcers (rare)"],
    investigations:[
      {name:"CBC",role:"Normocytic or microcytic anemia; MCHC >36 g/dL (elevated due to spherocyte dehydration) — key diagnostic clue"},
      {name:"Peripheral blood film",role:"Spherocytes (round, no central pallor); polychromasia (reticulocytosis)"},
      {name:"Reticulocyte count",role:"Elevated (compensatory); reticulocyte Hb reduced in iron deficiency complicating HS"},
      {name:"Direct Coombs test (DAT)",role:"Negative — distinguishes from AIHA"},
      {name:"Serum bilirubin (unconjugated), LDH, haptoglobin",role:"Elevated unconjugated bilirubin + LDH; low haptoglobin — hemolysis markers"},
      {name:"EMA (eosin-5'-maleimide) binding test",role:"Flow cytometry; reduced EMA binding = spectrin/band 3 deficiency; sensitivity 92%, specificity 99%; gold standard"},
      {name:"Osmotic fragility test",role:"Spherocytes lyse at higher NaCl concentration; largely replaced by EMA test"},
      {name:"US abdomen",role:"Splenomegaly; gallstones"}
    ]
  },
  criteria:{
    title:"Indication for Splenectomy",
    items:[
      {k:"Moderate/severe HS",v:"Hb <10 g/dL; transfusion dependent; delay until age ≥6 (preferably >12) to reduce OPSI"},
      {k:"Mild HS + gallstones",v:"Cholecystectomy + splenectomy simultaneously"},
      {k:"Concurrent cholecystectomy",v:"If gallstones present at time of splenectomy — add cholecystectomy"},
      {k:"Partial splenectomy",v:"Children <6 years who are transfusion-dependent; preserves splenic immune function"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Folic acid 1–5 mg/day — replaces folate consumed by compensatory erythropoiesis","Monitoring: CBC 6-monthly; bilirubin; US for gallstones","Parvovirus aplastic crisis: supportive; transfusion if severe anemia; self-limiting in 7–10 days"],
    medical:["No pharmacological treatment that corrects the underlying defect","Iron chelation only if transfusion-related iron overload","Blood transfusion: aplastic crisis; severe hemolytic crisis"],
    surgical:[
      {name:"Laparoscopic splenectomy",when:"Moderate-severe HS (Hb <10); transfusion-dependent; delay until age ≥6; concurrent cholecystectomy if gallstones",notes:"Vaccination mandatory ≥2 weeks before; search for accessory spleen; post-op penicillin prophylaxis for life"},
      {name:"Partial splenectomy",when:"Children <6 years who are transfusion-dependent to preserve immune function; near-total splenectomy leaving 15–20% functional remnant",notes:"Partial remission; may recur — formal splenectomy later if needed"},
      {name:"Laparoscopic cholecystectomy (concurrent)",when:"Gallstones present at time of splenectomy evaluation",notes:"Simultaneous lap splenectomy + lap chole; no additional major morbidity"}
    ]
  },
  technique:{
    title:"Laparoscopic Splenectomy for Hemolytic Anemia",
    prep:["Pre-op vaccination: pneumococcal, meningococcal, Hib","Cross-match 2 units pRBC","Target Hb >8 g/dL pre-op with transfusion if needed","Avoid operating during aplastic crisis"],
    steps:[
      {n:1,t:"Position",d:"Right lateral decubitus; 4 ports; harmonic scalpel"},
      {n:2,t:"Accessory spleen search",d:"Inspect gastrosplenic ligament, tail of pancreas, greater omentum — remove all accessory spleens"},
      {n:3,t:"Splenic hilum",d:"Dissect; individually ligate splenic artery first → splenic decompression; then vein"},
      {n:4,t:"Ligament division",d:"Gastrosplenic, splenorenal, phrenosplenic, splenocolic ligaments; harmonic scalpel"},
      {n:5,t:"Bag and morcellate",d:"Retrieval bag; morcellate through 12 mm port extension"},
      {n:6,t:"Concurrent cholecystectomy",d:"If gallstones: repositioning or same ports for cholecystectomy with Critical View of Safety"}
    ],
    pearls:["Accessory spleen in 20% of HS patients — must remove all or hemolysis continues","Post-splenectomy reticulocyte count normalizes within days — confirms successful removal","Aplastic crisis: do NOT operate acutely — supportive care; operate electively after recovery","After splenectomy: spherocytes persist on film (membrane defect unchanged) but no hemolysis — Hb normalizes"]
  },
  guidelines:[{src:"British Society for Hematology HS Guidelines 2011"},{src:"Gallagher PG et al. — HS Review NEJM 2004"},{src:"Bianchi P et al. — EMA Test Hematologica 2005"}],
  pearls:["MCHC >36 g/dL + negative Coombs + spherocytes = HS until proven otherwise","EMA flow cytometry: gold standard with 92% sensitivity — largely replaced osmotic fragility test","Concurrent cholecystectomy at splenectomy prevents future biliary complications in 50% who have gallstones","Aplastic crisis: parvovirus B19 — check IgM; transfuse if Hb <6; observe in hospital; self-limiting"],
  mistakes:["Diagnosing AIHA (treating with steroids) when Coombs is negative and family history positive","Not vaccinating before splenectomy in HS","Splenectomy in children <5 years — OPSI risk too high; partial splenectomy or delay","Failing to do concurrent cholecystectomy for asymptomatic gallstones at time of splenectomy — separate future operation needed"]
},
{
  id:"splenic-abscess", dept:"hpb", name:"Splenic Abscess", latin:"Abscessus lienis", organ:"Spleen",
  severity:"high", tags:["spleen","abscess","fever","drainage","splenectomy","endocarditis"],
  hero:"Rare but potentially fatal suppurative collection within the spleen; most arise from hematogenous seeding in the context of endocarditis, bacteremia, or immunosuppression.",
  keypoints:[
    "Rare: <0.7% of all intra-abdominal abscesses; high mortality if untreated (80%); with treatment 14–27%",
    "Most common causes: hematogenous seeding (infective endocarditis, bacteremia), contiguous spread, immunocompromised host",
    "Classic triad: fever + LUQ pain + splenomegaly — present in <50%",
    "CT diagnosis: hypodense splenic lesion ± gas ± ring enhancement; echocardiography to exclude endocarditis",
    "Treatment: IV antibiotics + splenectomy (traditional) or CT-guided percutaneous drainage (single, accessible lesions)"
  ],
  differentials:["Splenic infarct","Splenic hematoma","Hydatid cyst of spleen","Splenic lymphoma","Pancreatic pseudocyst extending to spleen"],
  mnemonics:[{name:"Splenic Abscess Etiology",text:"Hematogenous (endocarditis, typhoid, IV drug use) + Direct spread (pancreatitis, gastric perforation) + Immunocompromised (Candida, Aspergillus) + Trauma"}],
  overview:{
    definition:"Suppurative infection within the splenic parenchyma, forming a pus-filled cavity.",
    epidemiology:"Incidence <0.7/1000 hospital admissions; male predominance. Most common organisms: Streptococcus/Staphylococcus (hematogenous), gram-negative organisms (contiguous), Candida (immunocompromised).",
    pathophysiology:"Hematogenous seeding via splenic artery → bacterial colonization of splenic parenchyma → abscess formation. Pre-existing splenic pathology (infarct, trauma, hematoma) predisposes. Fungal abscesses in neutropenic patients: multiple microabscesses.",
    classification:[
      {label:"Hematogenous",note:"Most common (55–70%): infective endocarditis, bacteremia, IV drug use, typhoid"},
      {label:"Contiguous",note:"Pancreatitis, perforated gastric ulcer, diverticulitis, subphrenic abscess"},
      {label:"Immunocompromised",note:"HIV, malignancy, post-transplant — fungal (Candida, Aspergillus), multiple microabscesses"},
      {label:"Traumatic",note:"Hematoma superinfection; splenic infarct seeding"}
    ]
  },
  diagnosis:{
    history:["Fever, rigors, sweating","LUQ or left shoulder tip pain (diaphragmatic irritation)","Recent infective endocarditis, bacteremia, IV drug use, typhoid","Immunosuppression: steroids, malignancy, HIV, transplant","Blunt abdominal trauma"],
    examination:["Fever (>38°C in 90%)","LUQ tenderness, splenomegaly","Left pleural effusion (diaphragmatic irritation)","Signs of endocarditis: splinter hemorrhages, murmur, Osler's nodes"],
    investigations:[
      {name:"CBC, CRP",role:"Leukocytosis, elevated CRP; anemia if chronic"},
      {name:"Blood cultures",role:"Positive in 50–75%; take multiple sets; guide definitive antibiotic therapy; identify source"},
      {name:"US abdomen",role:"First-line: hypoechoic splenic lesion; poor sensitivity for small lesions and gas; guides FNA"},
      {name:"CT abdomen (contrast)",role:"Gold standard: hypodense lesion ± ring enhancement ± gas (gas = more severe); staging; guides drainage"},
      {name:"Echocardiography (TTE/TOE)",role:"Exclude infective endocarditis as source — mandatory in hematogenous abscess"},
      {name:"Blood cultures × 3",role:"Before antibiotics; Strep/Staph most common; Candida in immunocompromised"}
    ]
  },
  criteria:{
    title:"Treatment Selection",
    items:[
      {k:"Percutaneous drainage",v:"Single accessible abscess; not Candida/multiloculated; patient stable; US/CT guidance"},
      {k:"Splenectomy",v:"Multiple abscesses; failed percutaneous drainage; thick-walled; ruptured; Candida (multiloculated microabscesses); hemodynamically unstable"},
      {k:"IV antibiotics alone",v:"Microabscesses (<1 cm), fungal microabscesses with antifungal treatment — drainage not feasible"},
      {k:"Duration",v:"IV antibiotics 4–6 weeks; transition to oral after clinical improvement + drainage"}
    ]
  },
  scoring:[],
  management:{
    conservative:["IV fluids, NBM","Monitor urine output, temperature"],
    medical:["IV antibiotics: piperacillin-tazobactam + vancomycin initially; refine by cultures","Fungal: IV antifungal (micafungin or amphotericin B for severe; fluconazole for sensitive Candida)","Duration: minimum 4–6 weeks; IV until drainage resolved, then oral"],
    surgical:[
      {name:"CT-guided percutaneous drainage",when:"Single accessible abscess; patient stable; no fungal microabscesses",notes:"8–12 Fr pigtail; irrigate daily; remove when output <10 mL; failure rate 10–20% for thick-walled or multiloculated"},
      {name:"Laparoscopic or open splenectomy",when:"Multiple/multiloculated; failed drainage; Candida microabscesses; ruptured abscess; hemodynamically unstable",notes:"Open preferred for hemodynamically unstable; laparoscopic for stable patients; vaccination required post-op"},
      {name:"Partial splenectomy",when:"Single abscess in child; desire to preserve splenic function; technically feasible",notes:"Rarely performed; high recurrence if not fully drained"}
    ]
  },
  technique:{
    title:"Laparoscopic Splenectomy for Splenic Abscess",
    prep:["CT confirms anatomy and vascular supply","IV antibiotics started pre-operatively","Cross-match 2–4 units (inflamed spleen can bleed)","Right lateral decubitus position"],
    steps:[
      {n:1,t:"Port placement",d:"Right lateral decubitus; 4 ports; 30° laparoscope"},
      {n:2,t:"Careful mobilization",d:"Inflamed spleen may have adhesions to diaphragm and colon; careful harmonic dissection"},
      {n:3,t:"Hilar control",d:"Divide splenic artery first; then vein; use 12 mm endostapler for hilum if inflamed"},
      {n:4,t:"Specimen retrieval",d:"Large retrieval bag; avoid spillage of pus; if bag fails → convert to open"},
      {n:5,t:"Abdominal washout",d:"Thorough irrigation; drain in left subphrenic space"},
      {n:6,t:"Conversion to open",d:"If bleeding, dense adhesions, ruptured abscess"}
    ],
    pearls:["Dense adhesions in acute splenic abscess — be prepared for conversion to open","Splenic hilum may be inflamed/fragile — endostapler safer than individual vessel ligation","Post-splenectomy OPSI: mandatory lifelong penicillin + vaccination","Echocardiography to identify endocarditis — cardiac surgery may be needed concurrently or sequentially"]
  },
  guidelines:[{src:"WJG Guidelines: Intra-Abdominal Abscess 2022"},{src:"IDSA: Diagnosis and Management of Infections in Immunocompromised Host 2016"},{src:"BSH: Post-Splenectomy Guidelines 2011"}],
  pearls:["Echocardiography (TOE) mandatory in splenic abscess — infective endocarditis in 20%","Gas within abscess on CT = more severe; urgent drainage or splenectomy","IV drug users: polymicrobial; Candida in neutropenic patients — adjust antibiotics accordingly","Post-splenectomy: vaccinate before surgery if elective; post-op if emergency; lifelong penicillin V"],
  mistakes:["Not looking for endocarditis source — undertreated endocarditis causes recurrence","Percutaneous drainage for Candida microabscesses — not effective; antifungals + splenectomy needed","Neglecting vaccination and antibiotic prophylaxis post-splenectomy","Opening abscess without splenic isolation — pus contamination causes peritonitis"]
},
{
  id:"psc", dept:"hpb", name:"Primary Sclerosing Cholangitis", latin:"Cholangitis sclerosans primaria", organ:"Bile duct",
  severity:"high", tags:["bile duct","PSC","IBD","cholangiocarcinoma","ERCP","transplant","MRCP"],
  hero:"Progressive fibro-inflammatory cholangiopathy affecting intra- and extrahepatic bile ducts, associated with IBD, and carrying a 10–15% lifetime risk of cholangiocarcinoma.",
  keypoints:[
    "75–90% of PSC patients have concurrent IBD (ulcerative colitis in 75%, Crohn's in 10–25%)",
    "Diagnosis: MRCP showing multifocal stricturing and dilation ('beads on a string'); ERCP no longer first-line for diagnosis",
    "No effective medical treatment to slow progression — ursodeoxycholic acid not beneficial (ACE trial); liver transplant is only cure",
    "Cholangiocarcinoma risk 10–15% lifetime; annual MRCP + CA 19-9 for surveillance; ERCP + brush cytology + FISH when stricture changes",
    "Small duct PSC (normal ERCP/MRCP): better prognosis; lower cholangiocarcinoma risk"
  ],
  differentials:["Secondary sclerosing cholangitis (ischemia, stones, post-surgical)","IgG4-related sclerosing cholangitis (responds to steroids — critical to exclude)","Primary biliary cholangitis (PBC — AMA positive, female, small duct)","Cholangiocarcinoma (develops within PSC)","Autoimmune hepatitis overlap syndrome"],
  mnemonics:[{name:"PSC Associations",text:"PSC + IBD (UC 75%) + Cholangiocarcinoma (10–15% lifetime) + Colon cancer risk elevated + Gallbladder cancer risk + Hepatocellular carcinoma (end-stage cirrhosis)"}],
  overview:{
    definition:"Chronic immune-mediated cholangiopathy causing progressive concentric fibrosis and obliteration of intra- and extrahepatic bile ducts, leading to biliary cirrhosis and liver failure.",
    epidemiology:"Incidence 0.9–1.3/100 000; M:F = 2:1; peak onset 30–40 years. HLA-B8, DR3 associated. 70–90% have concurrent IBD.",
    pathophysiology:"Aberrant T-cell homing to bile duct epithelium → chronic inflammation → periductal concentric ('onion-skin') fibrosis → stricture formation → biliary obstruction → secondary biliary cirrhosis. Gut microbiome dysbiosis (due to IBD) → bacterial translocation → activation of hepatic immune response.",
    classification:[
      {label:"Large duct PSC",note:"Involves intra- and/or extrahepatic bile ducts visible on MRCP; most common (90%)"},
      {label:"Small duct PSC",note:"Normal MRCP; liver biopsy shows periductal fibrosis; better prognosis; 20% progress to large duct PSC"},
      {label:"PSC-IBD overlap",note:"75% UC; pancolitis with rectal sparing; higher colon cancer risk than UC alone"}
    ]
  },
  diagnosis:{
    history:["Often asymptomatic at diagnosis — elevated ALP on routine bloods","Pruritus, fatigue, RUQ discomfort","Jaundice, fever (cholangitis episodes)","Known IBD — especially pancolitis","Unintentional weight loss (advanced; exclude cholangiocarcinoma)"],
    examination:["Jaundice","Hepatomegaly; splenomegaly (cirrhosis/portal hypertension)","Signs of chronic liver disease (advanced)","Scratch marks (pruritus)"],
    investigations:[
      {name:"LFTs",role:"Cholestatic pattern: elevated ALP/GGT predominantly; mild transaminases; bilirubin elevated with strictures"},
      {name:"IgG4",role:"Exclude IgG4-SC: IgG4 >2× ULN suggests IgG4 disease — treat with steroids; critical distinction"},
      {name:"p-ANCA",role:"Positive in 60–80% of PSC — supportive but non-specific"},
      {name:"AMA",role:"Negative in PSC; positive in PBC — differentiates"},
      {name:"MRCP",role:"Non-invasive gold standard: multifocal intra- and extrahepatic strictures + upstream dilation ('beads on a string'); 80% sensitivity"},
      {name:"ERCP",role:"Only for therapeutic intervention (dominant stricture dilation, brushings, stenting); not for diagnosis"},
      {name:"Liver biopsy",role:"Not diagnostic for large duct PSC; required for small duct PSC; fibrous obliterative cholangitis (onion-skin); staging"},
      {name:"CA 19-9 + CEA (annual)",role:"Rising CA 19-9 or new dominant stricture → ERCP + brush cytology + FISH for CCA surveillance"},
      {name:"Colonoscopy",role:"Every 1–2 years in PSC-IBD (pancolitis): high dysplasia/CRC risk; chromoendoscopy"}
    ]
  },
  criteria:{
    title:"Diagnostic Criteria and Surveillance",
    items:[
      {k:"Diagnosis",v:"Cholestatic LFTs + MRCP showing multifocal biliary stricturing + exclusion of secondary causes and IgG4-SC"},
      {k:"Dominant stricture",v:"Hepatic duct <1.5 mm or CBD <1 mm; in 50% at 10 years; ERCP + balloon dilation + brushings + FISH"},
      {k:"Cholangiocarcinoma surveillance",v:"Annual MRCP + CA 19-9; ERCP + brush cytology + FISH if dominant stricture changes or CA 19-9 rises"},
      {k:"Colorectal surveillance",v:"Colonoscopy at diagnosis of PSC; if pancolitis: annual; if no IBD or proctitis: 5-yearly"},
      {k:"Liver transplant referral",v:"MELD >10–12; recurrent cholangitis; uncontrolled pruritus; decompensated cirrhosis; PSC-CCA meeting transplant criteria"}
    ]
  },
  scoring:[],
  management:{
    conservative:["No proven disease-modifying therapy","Ursodeoxycholic acid: NOT recommended (ACE trial: high-dose 28–30 mg/kg → increased complications including death and transplant listing)","Pruritus: cholestyramine (first-line), rifampicin, naltrexone, MARS/plasmapheresis (refractory)","Fatigue: no specific treatment; exclude hypothyroidism, anemia","Fat-soluble vitamin supplementation (A, D, E, K)","IBD management: mesalazine, biologics — does not affect PSC progression"],
    medical:["Dominant stricture: ERCP balloon dilation (preferred over stenting — lower cholangitis risk)","Cholangitis: IV antibiotics + ERCP for decompression","Prophylactic antibiotics not routinely recommended unless recurrent cholangitis (ciprofloxacin 500 mg BD)","Investigational: vancomycin (pediatric PSC; some adult studies)"],
    surgical:[
      {name:"Liver transplantation",when:"MELD ≥12; recurrent cholangitis; intractable pruritus; decompensated cirrhosis; unresectable perihilar CCA meeting Mayo protocol criteria",notes:"5-year survival 85–90%; 15–20% PSC recurrence post-transplant; IBD may flare post-transplant; continue colonoscopy surveillance"},
      {name:"ERCP + balloon dilation",when:"Dominant stricture causing jaundice, cholangitis, rising bilirubin",notes:"Dilation preferred over stenting (lower infection risk); repeat every 3–6 months; brushings and FISH on all dominant strictures"},
      {name:"Perihilar cholangiocarcinoma resection",when:"Resectable CCA within PSC (see cholangiocarcinoma entry)",notes:"Resection only in absence of cirrhosis; transplant preferred if cirrhotic + CCA meeting Mayo protocol"},
      {name:"Proctocolectomy",when:"Colorectal cancer or refractory dysplasia in PSC-IBD",notes:"Higher rectal/ileal pouch complications in PSC-IBD — discuss with colorectal surgeon; IPAA outcomes inferior to non-PSC UC"}
    ]
  },
  technique:{
    title:"ERCP with Dominant Stricture Dilation in PSC",
    prep:["MRCP first to plan approach","IV antibiotics before ERCP (piperacillin-tazobactam) — mandatory in PSC","ERCP under fluoroscopy; brush cytology and FISH on all dominant strictures"],
    steps:[
      {n:1,t:"Cholangiogram",d:"Selective cannulation; inject gently (avoid over-filling in cholangitis); identify dominant stricture"},
      {n:2,t:"Brush cytology",d:"Pass brush catheter through stricture × 10 strokes; send cytology + FISH"},
      {n:3,t:"Guidewire passage",d:"Advance 0.035\" guidewire across stricture"},
      {n:4,t:"Balloon dilation",d:"6–8 mm balloon; dilate to 30–60 seconds; check result with cholangiogram"},
      {n:5,t:"Stenting (if dilation insufficient)",d:"Short-term 7–10 Fr plastic stent × 3 months; remove and reassess; avoid long-term stenting (biofilm, cholangitis)"},
      {n:6,t:"Post-procedure",d:"IV antibiotics for 3–5 days; LFTs at 24–48 h; repeat MRI in 3 months"}
    ],
    pearls:["IgG4-SC mimics PSC on MRCP — always check IgG4 level; steroid response is diagnostic and therapeutic","Dominant stricture in PSC: must take brushings + FISH — CCA detection sensitivity 50–60% combined","Rising CA 19-9 in PSC without dominant stricture on MRCP: still requires ERCP and brushings","Post-transplant PSC recurrence in 15–20%: same cholangitic stricture pattern on MRCP"]
  },
  guidelines:[{src:"EASL Clinical Practice Guidelines on PSC 2022"},{src:"AASLD Practice Guidance on PSC 2020"},{src:"ACG Clinical Guideline on PSC 2017"}],
  pearls:["Ursodeoxycholic acid >20 mg/kg/day: AVOID — associated with worse outcomes (ACE trial)","IgG4-SC: responds dramatically to prednisolone 40 mg/day → diagnostic and therapeutic","Annual colonoscopy in PSC-UC — 5–10× higher CRC risk than UC alone","Liver transplantation: 5-year survival 85–90% — best treatment for advanced PSC"],
  mistakes:["Using high-dose UDCA (>20 mg/kg/day) — increases mortality (ACE trial)","Not measuring IgG4 — missing IgG4-SC which responds to steroids","ERCP for diagnosis when MRCP suffices — ERCP carries 3–5% pancreatitis risk","Failing to surveil for cholangiocarcinoma annually — PSC-CCA has 10–15% lifetime incidence and is the most common cause of PSC-related death"]
}
];
