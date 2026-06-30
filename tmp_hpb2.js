// HPB diseases — batch 2 of 3 (cholangiocarcinoma, icc, pseudocyst, portal-hypertension, liver-abscess, gallbladder-cancer, liver-metastases)
window._TMP_HPB2 = [
{
  id:"cholangiocarcinoma", dept:"hpb", name:"Extrahepatic Cholangiocarcinoma", latin:"Cholangiocarcinoma extrahepaticum", organ:"Bile duct",
  severity:"high", tags:["bile duct","Klatskin","jaundice","Bismuth","PSC","resection"],
  hero:"Malignant tumor of the extrahepatic bile ducts; perihilar (Klatskin) tumors account for 60–70% and are the most surgically challenging.",
  keypoints:[
    "Classified by location: intrahepatic (ICC), perihilar/Klatskin (60–70%), distal (20–30%)",
    "Risk factors: PSC, choledochal cyst, Caroli disease, hepatolithiasis, liver flukes (Clonorchis, Opisthorchis)",
    "Bismuth-Corlette classification for perihilar: guides resectability and extent of resection",
    "Only 20–30% resectable; 5-year survival after R0 resection = 20–40%",
    "Periductal infiltrating growth pattern → difficult margins; biliary brush cytology sensitivity only 30–40%"
  ],
  differentials:["Primary sclerosing cholangitis (benign stricture)","IgG4-related sclerosing cholangitis","HCC (central variant)","Gallbladder cancer","Metastatic adenocarcinoma to hilum"],
  mnemonics:[{name:"Bismuth-Corlette Types",text:"I=CBD below confluence; II=reaches confluence; IIIa=right duct; IIIb=left duct; IV=both hepatic ducts (unresectable)"}],
  overview:{
    definition:"Adenocarcinoma arising from the epithelium of the bile ducts, classified as intrahepatic, perihilar, or distal.",
    epidemiology:"Incidence 1–2/100 000; rising due to increasing NAFLD and hepatolithiasis; PSC patients have 10–15% lifetime risk.",
    pathophysiology:"Chronic biliary epithelial inflammation → dysplasia → adenocarcinoma. IDH1/2, FGFR2 fusions (ICC), KRAS mutations common. Perineural and lymphovascular invasion responsible for high R1 rate.",
    classification:[
      {label:"Bismuth I",note:"Involves CBD below hepatic duct confluence; does not involve confluence"},
      {label:"Bismuth II",note:"Involves hepatic duct confluence but spares right and left hepatic ducts"},
      {label:"Bismuth IIIa",note:"Involves confluence and extends into right hepatic duct"},
      {label:"Bismuth IIIb",note:"Involves confluence and extends into left hepatic duct"},
      {label:"Bismuth IV",note:"Involves both right and left hepatic ducts; generally unresectable"}
    ]
  },
  diagnosis:{
    history:["Progressive painless jaundice","Pruritus, dark urine, pale stools","Weight loss, anorexia","Known PSC or choledochal cyst","Fatigue"],
    examination:["Jaundice","Hepatomegaly","Cachexia (advanced)","No palpable gallbladder (unlike pancreatic head cancer — collapsed by high obstruction)"],
    investigations:[
      {name:"LFTs",role:"Obstructive pattern; elevated bilirubin, ALP, GGT"},
      {name:"CA 19-9, CEA",role:"CA 19-9 >100 U/mL suggests malignancy; CEA less sensitive; used in PSC surveillance"},
      {name:"IgG4",role:"Exclude IgG4-sclerosing cholangitis (responds to steroids)"},
      {name:"MRCP",role:"Delineate biliary anatomy; stricture morphology; ductal extent of tumor — essential for planning"},
      {name:"CT chest/abdomen/pelvis (pancreatic protocol)",role:"Staging: lymph nodes, hepatic artery, portal vein involvement, metastases"},
      {name:"PET-CT",role:"Detect occult M1 disease; nodal staging"},
      {name:"ERCP with brush cytology / FISH",role:"Cytology sensitivity 30–40%; FISH improves to 50–60%; mainly for biliary decompression + tissue diagnosis"},
      {name:"Percutaneous biopsy",role:"Only if no surgical plan; risk of tract seeding"}
    ]
  },
  criteria:{
    title:"Resectability Assessment",
    items:[
      {k:"Resectable",v:"No distant metastases; adequate FLR; portal vein uninvolved or reconstructable; no bilateral hepatic artery involvement"},
      {k:"Unresectable factors",v:"Bilateral hepatic duct involvement to 2nd-order branches; encasement of main PV/HA; contralateral lobar atrophy with bilateral involvement; M1 disease"},
      {k:"FLR requirement",v:"≥40% in cirrhotic or cholestatic liver; portal vein embolization if borderline"},
      {k:"Staging laparoscopy",v:"10–15% have peritoneal disease not detected on CT — consider before major hepatectomy"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Biliary decompression pre-operatively: PTC preferred for perihilar (access each lobe independently) or ERCP; reduce bilirubin <50 μmol/L before surgery","PERT and nutritional support"],
    medical:["Unresectable/metastatic: gemcitabine + cisplatin (first-line; ABC-02 trial — OS 11.7 vs 8.1 months)","Second-line: FOLFOX (ABC-06 trial)","FGFR2 fusion (ICC): pemigatinib, infigratinib, futibatinib","IDH1 mutation: ivosidenib","MSI-H: pembrolizumab","Locoregional: TARE (Y-90), TACE, ablation for ICC"],
    surgical:[
      {name:"Perihilar resection (Bismuth I–IIIa/b)",when:"Bismuth I–IIIb, resectable, adequate FLR, no distant metastases",notes:"Major hepatectomy (right/left hepatectomy + caudate lobe resection mandatory) + biliary reconstruction (hepaticojejunostomy); R0 margin critical"},
      {name:"Liver transplantation for perihilar CCA",when:"Highly selected: unresectable perihilar CCA <3 cm without nodal/metastatic disease; after neoadjuvant CRT (Mayo protocol)",notes:"5-year survival 53% in selected patients; requires specialised program"},
      {name:"Distal CBD resection (pancreaticoduodenectomy)",when:"Distal cholangiocarcinoma",notes:"Whipple procedure; 5-year survival 27–37% after R0"},
      {name:"Palliation",when:"Unresectable disease; biliary obstruction",notes:"SEMS via ERCP or PTC; photodynamic therapy improves survival over stenting alone; CRT for local control"}
    ]
  },
  technique:{
    title:"Perihilar Cholangiocarcinoma Resection",
    prep:["MRCP delineates biliary anatomy","CT/PET staging excludes distant disease","PTC for biliary decompression — decompress future remnant liver first","Portal vein embolization if FLR <40%"],
    steps:[
      {n:1,t:"Staging laparoscopy",d:"Assess for peritoneal disease and N2 nodes"},
      {n:2,t:"Hilar dissection",d:"Identify, skeletonise and divide bile duct at adequate margin; send frozen section on both cut ends"},
      {n:3,t:"Caudate lobe resection",d:"Mandatory — caudate bile ducts drain directly into hepatic duct confluence"},
      {n:4,t:"Major hepatectomy",d:"Right or left hepatectomy based on Bismuth type and tumor side; preserve adequate FLR"},
      {n:5,t:"Portal vein reconstruction",d:"If PV involved: tangential resection + patch or segmental resection + end-to-end anastomosis"},
      {n:6,t:"Biliary reconstruction",d:"Hepaticojejunostomy to multiple bile duct orifices on cut liver surface; Roux-en-Y; no drains into lumen"}
    ],
    pearls:["Caudate resection is mandatory — the Achilles heel of perihilar resection; omission causes R1","PTC pre-op: drain future remnant liver, NOT the tumor side, to promote hypertrophy","Frozen section margins: if R1, extend resection — even 1 mm free margin improves survival","Portal vein embolization allows safe major hepatectomy when FLR is inadequate"]
  },
  guidelines:[{src:"ESMO Clinical Practice Guidelines: Biliary Tract Cancer 2022"},{src:"NCCN Hepatobiliary Cancers 2023"},{src:"IHPBA Consensus on Perihilar CCA 2019"}],
  pearls:["Caudate resection is mandatory for all perihilar resections — ducts draining caudate are the most common site of R1","Gemcitabine + cisplatin: standard first-line for advanced biliary tract cancers (ABC-02)","FGFR2 fusions in ICC: targetable with pemigatinib (10–16% of ICCs)","Liver transplantation for perihilar CCA: 5-year survival 53% in Mayo protocol — better than resection for unresectable <3 cm"],
  mistakes:["Omitting caudate resection — almost guarantees R1","Not pre-operatively decompressing the future liver remnant — post-op liver failure","Proceeding without diagnostic laparoscopy in borderline resectable — 15% have occult peritoneal disease","Biliary stenting of both sides simultaneously for Bismuth IV — worsens sepsis; drain each side separately"]
},
{
  id:"icc", dept:"hpb", name:"Intrahepatic Cholangiocarcinoma", latin:"Cholangiocarcinoma intrahepaticum", organ:"Liver",
  severity:"high", tags:["liver","bile duct","ICC","FGFR2","IDH1","resection"],
  hero:"Primary hepatic malignancy arising from intrahepatic bile duct epithelium; the second most common primary liver cancer after HCC.",
  keypoints:[
    "Incidence rising worldwide; associated with cirrhosis, HBV, HCV, PSC, biliary cysts, hepatolithiasis",
    "Three growth patterns: mass-forming (most common), periductal infiltrating, intraductal",
    "FGFR2 fusion (15%), IDH1 mutation (15%), KRAS, TP53 — targetable mutations guide systemic therapy",
    "Resection is the only potentially curative treatment; 5-year survival 20–35% after R0",
    "CA 19-9 + CEA combined improves diagnostic accuracy; AFP typically normal"
  ],
  differentials:["HCC","Hepatic metastases (colorectal, breast)","Perihilar cholangiocarcinoma","Hepatic abscess (early ring-enhancing)","Hepatic lymphoma"],
  mnemonics:[{name:"ICC vs HCC differentiation",text:"ICC: normal AFP, elevated CA19-9, no arterial blush + washout, periductal infiltrating, bile duct dilation. HCC: elevated AFP, arterial hyperenhancement + washout, cirrhotic background"}],
  overview:{
    definition:"Adenocarcinoma arising from the intrahepatic biliary epithelium, proximal to the second-order bile ducts.",
    epidemiology:"Incidence 0.3–3.3/100 000; rising due to metabolic syndrome and viral hepatitis. Male = female. Peak age 60–70 years.",
    pathophysiology:"Bile duct epithelial injury → reactive cholangiocytes → oncogenic transformation via FGFR2, IDH1/2, KRAS, TP53, BAP1 mutations. Perineural invasion common → poor margins. Lymphovascular invasion → early nodal spread.",
    classification:[
      {label:"Mass-forming (MF)",note:"Most common (60%); well-defined mass; often peripheral; satellite lesions; better resectability"},
      {label:"Periductal infiltrating (PI)",note:"Grows along portal tracts; difficult margins; causes ductal dilation; poor prognosis"},
      {label:"Intraductal (ID)",note:"Grows into bile duct lumen; may present as cholestasis; best prognosis"},
      {label:"Mixed MF+PI",note:"Both components; most aggressive"}
    ]
  },
  diagnosis:{
    history:["Often asymptomatic until advanced — detected incidentally or with symptoms of advanced disease","RUQ pain (mass-forming)","Jaundice only if perihilar extension or bilateral ductal involvement","Weight loss, fatigue","Known PSC, HBV, HCV, biliary cysts"],
    examination:["Hepatomegaly, palpable mass (large tumor)","Jaundice (late or perihilar extension)","Cachexia (advanced)"],
    investigations:[
      {name:"AFP",role:"Usually normal (differentiates from HCC); mildly elevated in some ICC"},
      {name:"CA 19-9, CEA",role:"CA 19-9 >100 elevated in 60%; combined sensitivity 80%"},
      {name:"CECT liver (multiphasic)",role:"Peripheral rim enhancement arterially; progressive fill-in; satellite lesions; ductal dilation"},
      {name:"MRI liver with hepatobiliary contrast",role:"Better characterization; bile duct involvement; satellite lesions; FLR assessment"},
      {name:"PET-CT",role:"Nodal staging, peritoneal disease, M1 detection"},
      {name:"EUS/ERCP",role:"If ductal involvement; biliary decompression; biopsy"},
      {name:"Biopsy (EUS or percutaneous)",role:"For unresectable disease requiring systemic therapy; tissue for molecular profiling (FGFR2, IDH1, MSI, TMB)"}
    ]
  },
  criteria:{
    title:"Resectability Assessment for ICC",
    items:[
      {k:"Resectable",v:"R0 achievable; adequate FLR (≥20–25% healthy, ≥40% diseased); no extrahepatic disease"},
      {k:"Contraindications",v:"Bilateral multifocal disease; main PV or bilateral hepatic artery involvement; extrahepatic disease; FLR inadequate"},
      {k:"LN assessment",v:"Regional LN (hepatoduodenal) not absolute contraindication; distant LN (celiac, para-aortic) = M1"},
      {k:"Portal vein embolization",v:"If FLR <25–40%; wait 4–6 weeks"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Biliary decompression if jaundiced","Nutritional support"],
    medical:["Advanced/metastatic: gemcitabine + cisplatin ± durvalumab (TOPAZ-1: improved OS — now standard of care)","FGFR2 fusion: pemigatinib, infigratinib, futibatinib","IDH1 mutation: ivosidenib (ClarIDHy trial: improved PFS)","MSI-H: pembrolizumab","Adjuvant: capecitabine (BILCAP) — 12 months post-resection; OS benefit in PP analysis"],
    surgical:[
      {name:"Major hepatectomy",when:"Resectable mass-forming ICC; adequate FLR",notes:"Anatomical resection preferred; R0 margin (even 1 mm); lymphadenectomy of hepatoduodenal ligament (≥6 nodes)"},
      {name:"Extended hepatectomy",when:"Tumor involving both lobes or perihilar extension",notes:"High morbidity; requires PVE; specialist center"},
      {name:"Locoregional therapy",when:"Unresectable; or bridge to resection/transplant",notes:"TARE (Y-90), TACE, ablation (RFA/MWA); hepatic arterial infusion (HAI) chemotherapy at specialist centers; SBRT"}
    ]
  },
  technique:{
    title:"Major Hepatectomy for ICC with Lymphadenectomy",
    prep:["MRI defines margins and bile duct involvement","PET-CT excludes extrahepatic disease","CT volumetry ± portal vein embolization if FLR insufficient","Molecular profiling of biopsy for actionable mutations"],
    steps:[
      {n:1,t:"Staging laparoscopy",d:"Peritoneal/nodal assessment; avoid futile laparotomy"},
      {n:2,t:"Hilar lymphadenectomy",d:"Dissect hepatoduodenal ligament; remove all nodes between portal triad structures; ≥6 nodes for adequate staging"},
      {n:3,t:"Intraoperative US",d:"Confirm margins to satellite lesions; identify major vessels"},
      {n:4,t:"Parenchymal transection",d:"CUSA/harmonic; maintain CVP <5; Pringle if needed (limit in cirrhosis)"},
      {n:5,t:"Bile duct management",d:"If bile duct involved: divide and reconstruct (hepaticojejunostomy); frozen section bile duct margin"},
      {n:6,t:"Hemostasis and drain",d:"Argon beam or bipolar to raw liver surface; closed drain"}
    ],
    pearls:["Lymphadenectomy is prognostic and potentially therapeutic — N1 does not preclude resection in absence of distant disease","R0 margin (even 1 mm) significantly improves survival over R1","Satellite lesions are NOT an absolute contraindication if R0 achievable"]
  },
  guidelines:[{src:"ESMO Biliary Tract Cancer Guidelines 2022"},{src:"NCCN Hepatobiliary 2023"},{src:"ILCA Consensus on ICC 2022"}],
  pearls:["Gemcitabine + cisplatin + durvalumab: new standard first-line for advanced biliary tract cancers (TOPAZ-1)","FGFR2 fusions in ~15% ICC — test all advanced ICC for actionable mutations","Adjuvant capecitabine for 6–8 cycles post-resection (BILCAP)","Lymph node metastases found in 30–50% of resected ICC — mandatory lymphadenectomy for staging"],
  mistakes:["Not performing lymphadenectomy — understages disease, misses N1 patients","Proceeding to resection without molecular profiling for advanced disease","Overlooking satellite lesions on imaging — leads to incomplete resection","Not using PVE when FLR is borderline — post-hepatectomy liver failure"]
},
{
  id:"pancreatic-pseudocyst", dept:"hpb", name:"Pancreatic Pseudocyst", latin:"Pseudocysta pancreatica", organ:"Pancreas",
  severity:"medium", tags:["pancreas","pseudocyst","ERCP","EUS","drainage","cystgastrostomy"],
  hero:"Encapsulated fluid collection arising after acute pancreatitis or pancreatic duct disruption, lacking an epithelial lining.",
  keypoints:[
    "Revised Atlanta 2012: pseudocysts are post-AP fluid collections with a well-defined wall, after 4 weeks; WON (walled-off necrosis) contains necrotic debris",
    "Most resolve spontaneously within 6 weeks; intervention only if symptomatic (pain, obstruction) or expanding",
    "CT demonstrates fluid-only content (HU <20); WON has mixed density — critical distinction as WON requires different management",
    "Endoscopic cystogastrostomy (EUS-guided) is first-line; LAMS (lumen-apposing metal stent) enables direct debridement",
    "Always exclude cystic neoplasm (IPMN, MCN, SCN) with CEA from cyst fluid and cytology"
  ],
  differentials:["Walled-off necrosis (WON)","Mucinous cystic neoplasm (MCN)","IPMN","Serous cystadenoma","Cystic neuroendocrine tumor"],
  mnemonics:[{name:"Pseudocyst vs WON",text:"Pseudocyst = pure fluid; WON = fluid + necrotic debris. WON: mixed density CT, history of necrotizing AP. Treatment differs: pseudocyst → simple drainage; WON → necrosectomy via LAMS"}],
  overview:{
    definition:"Collection of pancreatic fluid enclosed by a non-epithelialised wall of fibrous/granulation tissue, arising from ductal disruption.",
    epidemiology:"Develops in 10–20% of acute pancreatitis episodes; majority resolve within 6 weeks. Also occurs in chronic pancreatitis (duct obstruction).",
    pathophysiology:"Duct disruption → pancreatic enzyme-rich fluid leaks → inflammatory reaction → fibrous wall formation over 4–6 weeks. No epithelial lining (distinguishes from true cyst). High amylase content.",
    classification:[
      {label:"Post-acute peripancreatic fluid collection (APFC)",note:"<4 weeks; no wall; resolves in 30–50%"},
      {label:"Pseudocyst",note:"≥4 weeks; well-defined, non-enhancing wall; homogeneous fluid; no solid debris"},
      {label:"Acute necrotic collection (ANC)",note:"<4 weeks; heterogeneous; contains necrotic debris"},
      {label:"Walled-off necrosis (WON)",note:"≥4 weeks; heterogeneous content; solid debris; requires necrosectomy"}
    ]
  },
  diagnosis:{
    history:["Epigastric pain, nausea following episode of acute/chronic pancreatitis","Persistent pain/symptoms after AP (>4 weeks)","Early satiety, vomiting (gastric outlet compression)","Jaundice (biliary compression)","Growing abdominal mass"],
    examination:["Epigastric mass (large pseudocysts)","Tenderness","Jaundice if biliary compression"],
    investigations:[
      {name:"CT abdomen (contrast)",role:"Defines collection: location, size, wall, content density; assess for WON (HU >20 = debris); relation to stomach/vessels"},
      {name:"MRI/MRCP",role:"Best for characterizing content; identifies debris; communication with duct; cystic neoplasm features"},
      {name:"EUS",role:"Pre-drainage assessment; visualizes vessel proximity; allows FNA; cyst fluid analysis"},
      {name:"Cyst fluid analysis (via EUS-FNA)",role:"Amylase >250 U/L = pseudocyst/IPMN; CEA >192 ng/mL suggests mucinous neoplasm; cytology for malignant cells"},
      {name:"Serum amylase/lipase",role:"Elevated in active leakage; not diagnostic alone"}
    ]
  },
  criteria:{
    title:"Intervention Criteria for Pseudocyst",
    items:[
      {k:"Symptomatic",v:"Pain, gastric outlet/biliary obstruction, early satiety — drain"},
      {k:"Expanding",v:"Growing on serial imaging after 6 weeks — drain"},
      {k:"Infected",v:"Gas on CT, fever, positive culture — urgent drainage"},
      {k:"Hemorrhage",v:"Pseudoaneurysm — interventional radiology embolization first; then drain/surgery"},
      {k:"Asymptomatic stable",v:"Observe; most resolve within 6 weeks; serial US at 6-week intervals"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NBM/enteral nutrition if acute flare","Analgesia, antiemetics","Serial imaging (US/CT) at 6-week intervals if asymptomatic","No role for octreotide or somatostatin routinely"],
    medical:["Antibiotics only if infected (fever, gas on CT, positive cultures): piperacillin-tazobactam","Proton pump inhibitor"],
    surgical:[
      {name:"EUS-guided cystogastrostomy / cystoenterostomy",when:"Pseudocyst adherent to stomach or duodenum; ≥6 cm; symptomatic",notes:"EUS identifies wall, vessels; LAMS (Hot AXIOS) placed under EUS guidance; superior to surgical drainage; avoids general anesthesia"},
      {name:"ERCP + transpapillary drainage",when:"Pseudocyst communicates with main duct; duct disruption identified on MRCP/ERCP",notes:"Stent bridges the ductal disruption; pseudocyst resolves by internal decompression"},
      {name:"Percutaneous drainage",when:"Not adjacent to stomach; infected pseudocyst; poor surgical candidate",notes:"US or CT-guided; 12–16 Fr catheter; external drain; high recurrence (50%) vs internal drainage"},
      {name:"Surgical cystogastrostomy/cystojejunostomy",when:"Failed endoscopic drainage; no gastric/duodenal proximity; associated duct stricture requiring bypass",notes:"Open or laparoscopic; dependent drainage; low recurrence (<10%); chronic pancreatitis cases benefit from concomitant Puestow"}
    ]
  },
  technique:{
    title:"EUS-Guided Cystogastrostomy with LAMS",
    prep:["CT/MRI confirms adherence to stomach, no vessels in path","EUS confirms <1 cm wall-to-wall distance","Prophylactic antibiotics","Fluoroscopy available"],
    steps:[
      {n:1,t:"EUS puncture",d:"Linear array EUS; identify collection; Doppler confirms no vessels; puncture with 19-gauge needle"},
      {n:2,t:"Guidewire placement",d:"Advance guidewire into cavity; confirm position fluoroscopically"},
      {n:3,t:"Tract dilation",d:"Diathermy catheter (cautery-enhanced LAMS delivery system — Hot AXIOS); create tract"},
      {n:4,t:"LAMS deployment",d:"Deploy distal flange inside cyst first; retract to oppose wall; deploy proximal flange in stomach lumen"},
      {n:5,t:"Confirm drainage",d:"Flush cavity; endoscope through LAMS into cavity to assess content (debris → necrosectomy)"},
      {n:6,t:"LAMS removal",d:"After 4–6 weeks; confirm resolution on CT before removal; if WON: direct debridement through LAMS first"}
    ],
    pearls:["LAMS allows access for direct endoscopic necrosectomy if content is necrotic (WON)","Remove LAMS at 4 weeks — prolonged placement → bleeding erosion into gastric wall","Pseudocyst recurrence after LAMS removal: usually due to persistent ductal disruption — consider ERCP stent","Aspirate cyst fluid during EUS: amylase and CEA to exclude cystic neoplasm before drainage"]
  },
  guidelines:[{src:"ACG Clinical Guideline: Acute Pancreatitis 2013"},{src:"IAP/APA Evidence-Based Guidelines 2013"},{src:"ASGE Guideline: EUS-guided Drainage 2018"}],
  pearls:["Pseudocyst ≠ WON — CT density distinguishes; management is fundamentally different","EUS-guided LAMS is now preferred over surgical drainage for most cases (fewer complications, equivalent outcomes)","Wait ≥4 weeks before draining — premature drainage of APFC has high recurrence (wall not formed)","Always exclude cystic neoplasm before drainage — CEA, cytology, morphology (septa, solid components)"],
  mistakes:["Draining before 4 weeks — no wall, high recurrence","Not distinguishing pseudocyst from WON — WON requires necrosectomy, not simple drainage","Draining mucinous cystic neoplasm as pseudocyst — seeding/malignancy risk","Percutaneous drainage for pseudocyst adherent to stomach — when endoscopic drainage is safer and more effective"]
},
{
  id:"portal-hypertension", dept:"hpb", name:"Portal Hypertension", latin:"Hypertensio portalis", organ:"Portal vein/Liver",
  severity:"high", tags:["cirrhosis","varices","ascites","TIPS","HVPG","splenomegaly"],
  hero:"Elevated portal venous pressure (HVPG >5 mmHg) arising from increased resistance and/or flow, leading to varices, ascites, and hepatic encephalopathy.",
  keypoints:[
    "HVPG >10 mmHg = clinically significant PHT (risk of varices); >12 mmHg = variceal bleeding threshold",
    "Most common cause: cirrhosis (sinusoidal); less common: extrahepatic portal vein thrombosis (pre-sinusoidal), Budd-Chiari (post-sinusoidal)",
    "Variceal bleeding: 6-week mortality 20%; propranolol/carvedilol + endoscopic band ligation (EBL) prevent first bleed",
    "Acute variceal hemorrhage: ABC, terlipressin, EBL ± TIPS (within 72 h for Child-Pugh B/C)",
    "TIPS reduces portal pressure effectively; encephalopathy risk 20–30%; consider PTFE-covered stents (lower re-stenosis)"
  ],
  differentials:["Acute upper GI bleeding (peptic ulcer vs variceal)","Splenic vein thrombosis (isolated gastric varices)","Congestive heart failure (cardiac cirrhosis)","Schistosomiasis (pre-sinusoidal)","Hepatic vein thrombosis (Budd-Chiari)"],
  mnemonics:[{name:"PHT Complications: ACHES",text:"Ascites, Coagulopathy, Hepatorenal syndrome, Encephalopathy, Splenomegaly/hypersplenism + variceal bleeding"}],
  overview:{
    definition:"Pathological elevation of portal venous pressure, defined as HVPG >5 mmHg; clinically significant when HVPG >10 mmHg.",
    epidemiology:"Cirrhosis is responsible for >90% of PHT cases in Western countries; 50% of cirrhotics develop varices; 30% bleed from varices.",
    pathophysiology:"Increased intrahepatic resistance (fibrosis, regenerative nodules) + hyperdynamic circulation (splanchnic vasodilation via NO) → elevated portal pressure → portosystemic collateral formation (varices, splenomegaly, ascites).",
    classification:[
      {label:"Pre-sinusoidal",note:"Portal vein thrombosis, schistosomiasis, primary biliary cholangitis (early)"},
      {label:"Sinusoidal",note:"Cirrhosis (any cause) — most common"},
      {label:"Post-sinusoidal",note:"Budd-Chiari syndrome, hepatic veno-occlusive disease, right heart failure"}
    ]
  },
  diagnosis:{
    history:["Known cirrhosis or chronic liver disease","Hematemesis or melena (variceal bleeding)","Abdominal distension (ascites)","Confusion (hepatic encephalopathy)","Alcohol use, viral hepatitis, autoimmune disease"],
    examination:["Splenomegaly","Ascites — shifting dullness, fluid thrill","Caput medusae","Spider naevi, palmar erythema","Jaundice, gynecomastia","Hepatic encephalopathy: asterixis, confusion"],
    investigations:[
      {name:"HVPG measurement",role:"Gold standard: hepatic vein wedge pressure minus free pressure; >10 = CSPH; >12 = variceal bleeding risk"},
      {name:"EGD",role:"Diagnose and classify varices (Baveno grading); diagnose portal hypertensive gastropathy"},
      {name:"US ± Doppler",role:"Liver size/texture; spleen size; portal vein flow; reversal of flow; ascites"},
      {name:"CT/MRI",role:"Varices; portal vein thrombosis; collaterals; hepatocellular carcinoma"},
      {name:"FibroScan (transient elastography)",role:"Liver stiffness correlates with HVPG; >20 kPa = significant portal hypertension"},
      {name:"LFTs, CBC, coagulation",role:"Thrombocytopenia (splenomegaly); prolonged PT; low albumin; elevated bilirubin"},
      {name:"Diagnostic ascitic tap",role:"SBP screening: neutrophils >250/mm³; protein, LDH, glucose; albumin (SAAG >11 g/L = PHT)"}
    ]
  },
  criteria:{
    title:"Baveno VII Criteria (2022)",
    items:[
      {k:"Compensated advanced CLD",v:"Liver stiffness ≥10 kPa (viral) or ≥15 kPa (alcohol); or varices present"},
      {k:"CSPH (clinically significant PHT)",v:"HVPG ≥10 mmHg; or LSM ≥25 kPa; or platelet <150 + LSM ≥20–25 kPa"},
      {k:"No varices needing treatment",v:"LSM <20 kPa + platelet >150 → can avoid EGD screening"},
      {k:"Pre-primary prophylaxis",v:"NSBB when HVPG ≥10 mmHg reduces progression to varices"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Salt restriction (<5.2 g/day) for ascites","Diuretics: spironolactone 100–400 mg + furosemide 40–160 mg (100:40 ratio)","Avoid NSAIDs, nephrotoxic drugs","Spontaneous bacterial peritonitis (SBP) prophylaxis: norfloxacin 400 mg OD if ascites protein <15 g/L or prior SBP","Hepatic encephalopathy: lactulose + rifaximin","Abstinence from alcohol; treat underlying liver disease (antivirals, immunosuppression)"],
    medical:["Primary prophylaxis of variceal bleeding: propranolol or carvedilol (NSBB); or EBL","Acute variceal hemorrhage: terlipressin 2 mg IV q4h × 5 days; octreotide alternative","Antibiotics (ceftriaxone 1 g/day × 7 days) routinely in acute variceal bleed — reduces bacterial translocation, SBP, mortality","Vasopressin analogues: terlipressin reduces portal pressure and controls acute bleeding in 85%"],
    surgical:[
      {name:"Endoscopic band ligation (EBL)",when:"Primary or secondary prevention of variceal bleeding; acute bleeding (first-line after pharmacotherapy)",notes:"Repeat EBL every 2–4 weeks until varices obliterated; then 6-monthly surveillance EGD"},
      {name:"TIPS (transjugular intrahepatic portosystemic shunt)",when:"Acute variceal bleed refractory to EBL + pharmacotherapy; Child-Pugh B/C (score <14) within 72 h (early TIPS); refractory ascites; secondary prevention after 2nd bleed",notes:"PTFE-covered stents (Viatorr) preferred — lower stenosis; monitor for encephalopathy; avoid in Heart failure, severe hepatic encephalopathy, biliary obstruction"},
      {name:"Devascularization (Sugiura) / surgical shunts",when:"Failed TIPS/EBL; TIPS anatomically impossible; extrahepatic PVT",notes:"Selective shunts (distal splenorenal — Warren): maintains portal perfusion, lower encephalopathy; rarely performed in era of TIPS"},
      {name:"Liver transplantation",when:"End-stage liver disease with PHT complications (MELD >15); HCC within Milan criteria",notes:"Definitive — addresses both PHT and underlying liver disease; bridge with TIPS or EBL"}
    ]
  },
  technique:{
    title:"Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    prep:["CT: portal vein patency; hepatic vein anatomy","EGD within 12 h of acute bleed to confirm variceal source","Coagulation support: FFP, platelets; do NOT delay TIPS for correction in acute setting","GA or conscious sedation + fluoroscopy"],
    steps:[
      {n:1,t:"Jugular access",d:"Right IJV puncture; 10 Fr sheath; advance to right hepatic vein under fluoroscopy"},
      {n:2,t:"Portal vein puncture",d:"TIPS needle (Rösch-Uchida set) through hepatic vein into portal vein parenchymally; CO2 or US guidance"},
      {n:3,t:"Tract dilation",d:"Balloon dilatation of parenchymal tract to 8–10 mm"},
      {n:4,t:"Stent placement",d:"Deploy PTFE-covered stent (Viatorr) bridging hepatic vein to portal vein"},
      {n:5,t:"Shunt assessment",d:"Confirm HVPG reduction to <12 mmHg (or by 20%); portosystemic gradient <12; varicography"},
      {n:6,t:"Variceal embolization",d:"If variceal bleeding: coil embolization of gastric/esophageal varices concurrent with TIPS"}
    ],
    pearls:["Early TIPS (within 72 h) in Child-Pugh B (score ≥8) or C (score <14) reduces treatment failure and 1-year mortality (BAVENO VII)","Post-TIPS encephalopathy: manage with lactulose + rifaximin; shunt reduction if severe","TIPS contraindications: severe HE, cardiac failure, polycystic liver, biliary obstruction","Monitor shunt patency: Doppler at 3 months, then annually"]
  },
  guidelines:[{src:"Baveno VII Consensus 2022"},{src:"EASL Guidelines for Decompensated Cirrhosis 2018"},{src:"AASLD Portal Hypertension Guidance 2023"}],
  pearls:["Ceftriaxone in acute variceal bleed reduces 6-week mortality by 30% — mandatory alongside vasoactive drugs","Early TIPS (<72 h) in Child-Pugh B/C: reduces 6-week mortality from 33% to 14% (Garcia-Pagan RCT)","PTFE-covered stents have 90% patency at 2 years vs 50% for bare metal stents","Baveno VI/VII: patients with LSM <20 kPa + platelets >150k can avoid EGD screening — reduces unnecessary procedures"],
  mistakes:["Delaying antibiotics in acute variceal bleed — SBP occurs in 40% within 48 h without prophylaxis","Using bare metal TIPS stents — inferior patency to PTFE-covered","TIPS in Child-Pugh C (score ≥14) or MELD >18 without transplant planning — poor liver reserve, high mortality","Over-diuresis in ascites leading to hepatorenal syndrome — titrate diuretics carefully"]
},
{
  id:"liver-abscess", dept:"hpb", name:"Liver Abscess", latin:"Abscessus hepatis", organ:"Liver",
  severity:"medium", tags:["liver","abscess","pyogenic","amebic","drainage","E. coli","Klebsiella"],
  hero:"Localized collection of pus within the hepatic parenchyma; pyogenic (bacterial) in 80% of cases in Western countries; amebic in developing world.",
  keypoints:[
    "Pyogenic most common cause: biliary (40%), cryptogenic (20%), portal spread (15%); Klebsiella pneumoniae in Asia (associated with diabetes, gas-forming)",
    "Amebic: Entameba histolytica; single large abscess (right lobe); anchovy paste aspirate; serology diagnostic; metronidazole cures 95%",
    "CT: ring-enhancing hypodense lesion with cluster sign (multiple coalescing abscesses) characteristic of pyogenic",
    "Treatment: IV antibiotics + percutaneous drainage (>3–5 cm); open drainage rarely needed",
    "Mortality of untreated pyogenic: 100%; with treatment: 5–10%"
  ],
  differentials:["HCC (necrotic)","Hepatic metastasis (necrotic)","Hydatid cyst","Biloma","Hepatic hematoma"],
  mnemonics:[{name:"Liver Abscess Causes",text:"Pyogenic: Biliary, Portal (appendicitis, diverticulitis), Direct, Hematogenous, Cryptogenic. Amebic: Entameba — single, right lobe, anchovy paste"}],
  overview:{
    definition:"Localized suppurative infection within the liver parenchyma, resulting in pus-filled cavity.",
    epidemiology:"Incidence 1.5–3.6/100 000; male predominance; peak age 50–60 years. Klebsiella pneumoniae accounts for 50–79% in Asia; E. coli, Streptococcus, anaerobes in West.",
    pathophysiology:"Pyogenic: biliary bacteria ascend via biliary tree (commonest route); portal spread from appendicitis/diverticulitis/IBD; direct extension; hematogenous seeding. Amebic: E. histolytica trophozoites travel via portal vein from gut; proteolytic enzymes liquefy hepatocytes.",
    classification:[
      {label:"Pyogenic",note:"Bacterial; often polymicrobial; associated with biliary disease, diabetes, malignancy"},
      {label:"Amebic",note:"Entameba histolytica; single right lobe abscess; travel or endemic exposure"},
      {label:"Fungal",note:"Immunocompromised; Candida, Aspergillus; multiple microabscesses"},
      {label:"Parasitic",note:"Hydatid (Echinococcus) — cystic; treat with PAIR ± surgery"}
    ]
  },
  diagnosis:{
    history:["Fever, rigors, sweating","RUQ pain","Nausea, anorexia, weight loss","Recent biliary procedure, abdominal sepsis, dental procedure","Travel to endemic area (amebic)","Diabetes mellitus (Klebsiella)"],
    examination:["Fever (>38°C in 90%)","RUQ tenderness, hepatomegaly","Pleural effusion (right side — diaphragmatic irritation)","Jaundice (biliary source)"],
    investigations:[
      {name:"CBC, CRP, ESR",role:"Markedly elevated WBC and CRP; anemia; elevated ESR"},
      {name:"LFTs",role:"ALP elevated >90%; bilirubin elevated if biliary cause; ALT mildly elevated"},
      {name:"Blood cultures",role:"Positive in 50%; take before antibiotics; Klebsiella bacteremia: check eyes (endophthalmitis)"},
      {name:"US abdomen",role:"First-line: hypoechoic lesion ± septa; guides aspiration; identifies biliary cause"},
      {name:"CT abdomen (contrast)",role:"Ring-enhancing lesion; cluster sign; identifies source (biliary, appendix); staging for HCC"},
      {name:"Amebic serology (ELISA)",role:"Sensitivity 92%; positive in amebic abscess; does not distinguish active from past infection in endemic areas"},
      {name:"Aspiration (diagnostic/therapeutic)",role:"Pus: send MC&S, AFB; anchovy paste (amebic); clear fluid (hydatid — caution — anaphylaxis)"}
    ]
  },
  criteria:{
    title:"Indications for Percutaneous Drainage",
    items:[
      {k:"Indication",v:"Abscess ≥3–5 cm; failed to respond to antibiotics at 48–72 h; imminent rupture; diagnosis in doubt"},
      {k:"Method",v:"US or CT-guided; 8–14 Fr pigtail catheter; aspirate to dryness or leave drain if recollecting"},
      {k:"Open surgery",v:"Failed percutaneous; multiple abscesses; ruptured abscess with peritonitis; concurrent biliary pathology requiring operation"},
      {k:"Amebic abscess",v:"Metronidazole alone effective in 95%; drain only if rupture risk, no response at 72 h, or diagnostic uncertainty"}
    ]
  },
  scoring:[],
  management:{
    conservative:["NBM initially; IV fluids","Analgesia","Physiotherapy for pleural effusion"],
    medical:["Pyogenic: IV antibiotics — piperacillin-tazobactam + metronidazole; switch to oral after clinical improvement (ciprofloxacin + metronidazole); total 4–6 weeks","Amebic: metronidazole 750 mg TID × 10 days → luminal agent (paromomycin or diloxanide) to eradicate gut cysts","Fungal: IV antifungal (micafungin or amphotericin B) in immunocompromised"],
    surgical:[
      {name:"Percutaneous needle aspiration (PNA)",when:"Amebic >5 cm or risk of rupture; diagnostic samples from pyogenic",notes:"Single or repeated aspirations; no drain — suitable for amebic and small pyogenic"},
      {name:"Percutaneous catheter drainage (PCD)",when:"Pyogenic ≥5 cm; failed antibiotic therapy; recollecting after aspiration",notes:"8–14 Fr pigtail; daily irrigation; remove when output <10 mL/day and CT shows resolution"},
      {name:"Open/laparoscopic drainage",when:"Failed PCD; ruptured abscess; multiple abscesses; concurrent surgical cause (appendicitis, diverticulitis)",notes:"Wide drainage; concurrent cholecystectomy or biliary procedure as indicated"}
    ]
  },
  technique:{
    title:"Percutaneous Catheter Drainage of Liver Abscess",
    prep:["CT confirms location and safe access route","Coagulation correction (INR <1.5, platelets >50)","IV antibiotics started before procedure","LA ± conscious sedation; sterile preparation"],
    steps:[
      {n:1,t:"Image guidance",d:"US or CT; plan path avoiding pleura, gallbladder, bowel, major vessels; transabdominal or transhepatic approach"},
      {n:2,t:"Needle puncture",d:"18-gauge needle under real-time imaging; aspirate pus to confirm location; send MC&S"},
      {n:3,t:"Guidewire placement",d:"Seldinger technique; advance 0.035\" guidewire through needle into cavity"},
      {n:4,t:"Tract dilation",d:"Serial fascial dilators (8–12 Fr)"},
      {n:5,t:"Catheter placement",d:"8–12 Fr locking pigtail catheter; position within abscess; lock"},
      {n:6,t:"Post-procedure",d:"Irrigate with saline daily; monitor output; CT when output <10 mL/day to confirm resolution before removal"}
    ],
    pearls:["Klebsiella liver abscess: check fundoscopy — metastatic endophthalmitis in 3–4%; treat with intravitreal antibiotics","If gas within abscess on CT: more aggressive (higher mortality) — drain urgently","Drain when thick walls formed: do not drain immediately after IV antibiotics started — allow 48–72 h if small","Always send aspirate for AFB in immunocompromised or if TB risk"]
  },
  guidelines:[{src:"WJG Guidelines: Management of Liver Abscess 2022"},{src:"AASLD Amebic Liver Abscess 2006 (updated)"},{src:"British Infection Association: PLA Guidelines 2020"}],
  pearls:["Metronidazole cures 95% of amebic abscesses — drain only if large (>10 cm), left lobe (rupture into pericardium), or no response","Klebsiella pneumoniae liver abscess: associated with diabetes; spread to eye (endophthalmitis) and CNS (meningitis) — screen for these","CT cluster sign (multiple coalescing small abscesses) = pyogenic — warrants aggressive drainage and biliary workup","Always look for and treat the underlying source (biliary stones, colonic pathology)"],
  mistakes:["Not treating the underlying source — recurrence inevitable","Missing metastatic Klebsiella complications (eye, brain) in Asian patients","Aspirating a hydatid cyst as a liver abscess — anaphylaxis risk; CT morphology crucial","Treating amebic abscess with drainage alone without metronidazole — metronidazole is the definitive treatment"]
},
{
  id:"gallbladder-cancer", dept:"hpb", name:"Gallbladder Cancer", latin:"Carcinoma vesicae felleae", organ:"Gallbladder",
  severity:"high", tags:["gallbladder","porcelain","gallstones","T-stage","extended cholecystectomy","Mirizzi"],
  hero:"Rare but aggressive biliary malignancy with poor prognosis; most are incidentally discovered after cholecystectomy for presumed benign disease.",
  keypoints:[
    "Most common biliary malignancy; F:M = 3:1; associated with gallstones (90%), porcelain gallbladder, anomalous pancreatobiliary junction",
    "AJCC T-stage determines surgical approach: T1a (mucosa only) — cholecystectomy sufficient; T1b (muscle) — controversial; T2+ — extended cholecystectomy with hepatic resection of segments IVb/V",
    "Incidental GBC after cholecystectomy: re-excision based on T-stage; do NOT remove drain/port sites routinely (no evidence)",
    "Curative resection possible in only 10–30%; 5-year survival after R0 extended cholecystectomy = 30–40% for T2",
    "Systemic therapy: gemcitabine + cisplatin ± durvalumab for advanced/metastatic disease"
  ],
  differentials:["Acute cholecystitis (wall thickening)","Adenomyomatosis","Gallbladder polyp (benign)","Metastasis to gallbladder (melanoma, RCC)","Xanthogranulomatous cholecystitis"],
  mnemonics:[{name:"GBC T-Stage Surgery",text:"T1a=Cholecystectomy only; T1b=Cholecystectomy (extended controversial); T2=Seg IVb/V resection + LN; T3=+bile duct resection; T4=Unresectable"}],
  overview:{
    definition:"Malignancy arising from the gallbladder epithelium, predominantly adenocarcinoma (90%).",
    epidemiology:"Rare in West (1–2/100 000) but common in Chile, India, Japan, and Andes (10–15/100 000). F:M = 3:1; peak age 70 years.",
    pathophysiology:"Chronic mucosal injury from gallstones → metaplasia → dysplasia → carcinoma. Anomalous pancreatobiliary junction (APBJ) — reflux of pancreatic juice → mucosa injury → adenocarcinoma even without stones.",
    classification:[
      {label:"T1a",note:"Invades lamina propria (mucosa)"},
      {label:"T1b",note:"Invades muscular layer"},
      {label:"T2a",note:"Invades perimuscular connective tissue (peritoneal side)"},
      {label:"T2b",note:"Invades perimuscular connective tissue (hepatic side)"},
      {label:"T3",note:"Perforates serosa or directly invades liver and/or one adjacent organ"},
      {label:"T4",note:"Invades main portal vein or hepatic artery or ≥2 extrahepatic organs"}
    ]
  },
  diagnosis:{
    history:["Often asymptomatic — incidental finding at cholecystectomy (50%)","RUQ pain, weight loss, jaundice (advanced)","Prior history of gallstones or cholecystitis","Palpable RUQ mass (advanced)"],
    examination:["RUQ mass or tenderness","Jaundice (biliary involvement)","Courvoisier's sign (uncommon — CBD obstruction)","Cachexia (advanced)"],
    investigations:[
      {name:"US abdomen",role:"Gallbladder wall thickening (>3 mm, asymmetric, irregular); intraluminal mass; polyp >10 mm"},
      {name:"CECT chest/abdomen/pelvis",role:"Staging: hepatic invasion, vascular involvement, lymph nodes, distant metastases"},
      {name:"MRI/MRCP",role:"Biliary involvement; hepatic extent; liver metastases"},
      {name:"CA 19-9, CEA",role:"Elevated in 60–80%; not diagnostic; useful for monitoring"},
      {name:"PET-CT",role:"Nodal staging; M1 detection"},
      {name:"ERCP",role:"Biliary decompression if jaundiced; brush cytology; assess CBD involvement"},
      {name:"Staging laparoscopy",role:"Peritoneal disease in 10–20% — consider before major resection"}
    ]
  },
  criteria:{
    title:"AJCC T-Stage to Surgical Approach",
    items:[
      {k:"T1a",v:"Simple cholecystectomy; R0 from outside lumen — no re-excision needed"},
      {k:"T1b",v:"Simple cholecystectomy may be adequate; extended cholecystectomy for selected patients — no definitive evidence"},
      {k:"T2 (peritoneal side — T2a)",v:"Extended cholecystectomy: Seg IVb/V resection + hepatoduodenal lymphadenectomy ≥6 nodes"},
      {k:"T2 (hepatic side — T2b)",v:"Extended cholecystectomy: wider hepatic margin (Seg IVb/V/VIII); hilar lymphadenectomy"},
      {k:"T3",v:"Extended resection ± CBD resection + hepaticojejunostomy"},
      {k:"T4 / M1",v:"Unresectable; palliative"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Biliary decompression (PTC/ERCP stent) if jaundiced before surgery"],
    medical:["Advanced/metastatic: gemcitabine + cisplatin (first-line); ± durvalumab (TOPAZ-1 includes GBC)","Adjuvant: capecitabine 8 cycles (BILCAP); or gemcitabine-based regimens","Targeted: FGFR2 (less common in GBC), HER2 amplification (10%): trastuzumab + chemotherapy"],
    surgical:[
      {name:"Simple cholecystectomy",when:"T1a; open or laparoscopic; not through breach of gallbladder",notes:"Port site excision only if visible contamination at index surgery — no routine port site excision"},
      {name:"Extended cholecystectomy + hepatic resection",when:"T2–T3; Seg IVb/V en bloc; hepatoduodenal lymphadenectomy",notes:"Frozen section CBD margin if involved; bile duct resection for T3 with invasion"},
      {name:"Re-excision after incidental GBC",when:"T1b–T2 found after laparoscopic cholecystectomy",notes:"T1b: evidence for re-excision is weak; T2: re-excision improves survival; R0 at re-excision is key"},
      {name:"Palliation",when:"Unresectable; jaundice + duodenal obstruction",notes:"SEMS via ERCP or PTC; gastrojejunostomy for GOO; best supportive care"}
    ]
  },
  technique:{
    title:"Extended Cholecystectomy for T2 GBC",
    prep:["CT/MRI confirms T-stage, no vascular involvement, adequate FLR","PET-CT excludes distant disease","Staging laparoscopy if borderline resectable","Biliary decompression if bilirubin elevated"],
    steps:[
      {n:1,t:"Staging laparoscopy",d:"Exclude peritoneal implants, port site disease"},
      {n:2,t:"Hepatoduodenal lymphadenectomy",d:"Clear all nodes in hepatoduodenal ligament, hepatic artery, and celiac axis; ≥6 nodes; frozen section on suspicious nodes"},
      {n:3,t:"CBD assessment",d:"Frozen section on CBD if induration or T3; if positive → bile duct resection + hepaticojejunostomy"},
      {n:4,t:"Hepatic resection",d:"Seg IVb/V resection en bloc with specimen; 1–2 cm hepatic margin; CUSA + harmonic; intraoperative US marks deep margin"},
      {n:5,t:"Specimen retrieval",d:"En bloc: gallbladder + hepatic resection + lymph nodes — do not spill bile"},
      {n:6,t:"Closure",d:"Hemostasis; drain placement; close in layers"}
    ],
    pearls:["Cholecystectomy perforation with bile spillage increases recurrence risk — convert to open if perforation suspected","Peritoneal side T2 (T2a): resect Seg IVb/V; hepatic side T2 (T2b): wider resection essential — higher R1 risk","Cystic duct positive margin: excise entire CBD + hepaticojejunostomy","Port site resection only if visible implants — routine resection does not improve survival"]
  },
  guidelines:[{src:"NCCN Hepatobiliary Cancer 2023"},{src:"SSAT Guidelines on GBC 2022"},{src:"IHPBA Consensus on GBC 2015"}],
  pearls:["Staging laparoscopy before open resection — peritoneal disease in 10–20% avoids unnecessary laparotomy","T1a cholecystectomy alone is curative — 5-year survival >95%","T2 re-excision after incidental GBC significantly improves survival (5-year 30–40% vs 15% without)","HER2 amplification in 10% of GBC — test for targeted therapy eligibility"],
  mistakes:["Not re-excising T2 incidental GBC — marked survival benefit from extended resection","Routine port site resection — no evidence; unnecessary morbidity","Bile spillage during laparoscopic cholecystectomy — if suspected GBC, convert to open","Not obtaining adequate lymph node harvest (≥6) — understages disease"]
},
{
  id:"liver-metastases", dept:"hpb", name:"Colorectal Liver Metastases", latin:"Metastases hepatis colorectales", organ:"Liver",
  severity:"high", tags:["liver","CRC","metastases","FOLFOX","resection","RFA","conversion"],
  hero:"The liver is the most common site of colorectal cancer metastasis; resection offers the only chance of cure with 5-year survival of 30–50%.",
  keypoints:[
    "25% of CRC patients have synchronous liver metastases; 50% develop metachronous within 3 years",
    "10–20% are resectable at presentation; neoadjuvant chemotherapy can convert 10–20% of initially unresectable to resectable",
    "Clinical Risk Score (CRS) predicts recurrence after resection: node-positive primary, DFS <12 months, >1 metastasis, size >5 cm, CEA >200",
    "Simultaneous vs staged resection: bowel-first, liver-first, or simultaneous — multidisciplinary decision",
    "Ablation (RFA/MWA) for lesions <3 cm in non-resectable segments or as adjunct to resection"
  ],
  differentials:["HCC","Hepatic hemangioma","FNH","Hepatic adenoma","Other metastases (breast, neuroendocrine, pancreas)"],
  mnemonics:[{name:"Fong Clinical Risk Score",text:"Node-positive primary, DFS <12 months, >1 liver lesion, largest >5 cm, CEA >200 ng/mL — 1 point each; 0–2 = low risk; 3–5 = high risk"}],
  overview:{
    definition:"Metastatic deposits within the liver arising from colorectal adenocarcinoma via hematogenous portal spread.",
    epidemiology:"CRC: 3rd commonest cancer globally; liver is site of metastases in 70% of advanced CRC. Resection possible in 15–20%.",
    pathophysiology:"Portal venous dissemination → hepatic arterial supply of established metastases → characteristic rim enhancement on CECT. KRAS/NRAS mutation: predicts poor response to anti-EGFR; RAS wild-type: responds to cetuximab/panitumumab.",
    classification:[
      {label:"Resectable",note:"R0 achievable; adequate FLR (≥20–30%); no extrahepatic disease, or limited resectable extrahepatic disease"},
      {label:"Initially unresectable — convertible",note:"Technically unresectable due to size/location/FLR; may become resectable after downsizing chemotherapy"},
      {label:"Unresectable",note:"Too many lesions; insufficient FLR; major vessel involvement; unresectable extrahepatic disease"}
    ]
  },
  diagnosis:{
    history:["Known colorectal cancer (synchronous or previous resection)","RUQ pain, fatigue (advanced)","Unintentional weight loss","Follow-up CEA rise"],
    examination:["Hepatomegaly, palpable masses (advanced)","Jaundice (late — biliary compression)","Cachexia"],
    investigations:[
      {name:"CEA",role:"Serial monitoring; rising CEA post-colectomy triggers imaging; correlates with tumor burden"},
      {name:"CECT chest/abdomen/pelvis",role:"Standard staging; rim enhancement on portal phase; assess number, size, location, vascular proximity"},
      {name:"MRI liver (hepatobiliary contrast — Eovist/Primovist)",role:"More sensitive for small lesions <1 cm; characterizes indeterminate lesions; biliary anatomy"},
      {name:"PET-CT",role:"Detect occult extrahepatic disease (nodal, peritoneal) before major hepatectomy"},
      {name:"Mutational analysis (KRAS/NRAS/BRAF/MSI)",role:"Guides systemic therapy selection; KRAS/NRAS wild-type: cetuximab eligible"},
      {name:"Biopsy",role:"Only if diagnosis uncertain; not routinely needed if known CRC + typical imaging"}
    ]
  },
  criteria:{
    title:"Resectability Criteria for CRLM",
    items:[
      {k:"Resectable",v:"All liver disease removable with R0 margins; FLR ≥20% healthy or ≥30–40% in chemotherapy-damaged liver; no unresectable extrahepatic disease"},
      {k:"Contraindications",v:"Peritoneal carcinomatosis (unless limited and resectable); unresectable extrahepatic nodal disease"},
      {k:"FLR augmentation",v:"Portal vein embolization (PVE); ALPPS (two-stage); ablation of contralateral lesions"},
      {k:"Simultaneous vs staged",v:"Simultaneous safe for minor hepatectomy + colectomy; major hepatectomy → staged; liver-first for unresectable primary"}
    ]
  },
  scoring:[
    {name:"Fong Clinical Risk Score",items:["Node-positive primary tumor","Disease-free interval <12 months",">1 hepatic tumor","Largest hepatic tumor >5 cm","CEA >200 ng/mL","Score 0–2: favorable (5-yr OS 50%); Score 3–5: poor (5-yr OS 20%)"]}
  ],
  management:{
    conservative:["CEA monitoring post-resection every 3 months × 3 years, then 6-monthly","CT restaging every 3–6 months post-operatively"],
    medical:["Neoadjuvant: FOLFOX or FOLFIRI ± bevacizumab (RAS mut) or cetuximab (RAS/RAF WT, left-sided) — 3 months preoperatively","Adjuvant: 3–6 months FOLFOX post-resection (debated — EORTC 40983 shows DFS benefit, not OS)","Hepatic arterial infusion (HAI) + systemic: specialist centers — floxuridine via HAI; improves conversion rate and DFS","Unresectable: FOLFOX/FOLFIRI ± biological; maintenance capecitabine"],
    surgical:[
      {name:"Hepatic resection (synchronous vs metachronous)",when:"Resectable CRLM; adequate FLR; no unresectable extrahepatic disease",notes:"Anatomical or non-anatomical resection; R0 margin ≥1 mm; parenchymal-sparing approach if multiple lesions"},
      {name:"Two-stage hepatectomy",when:"Bilateral metastases requiring clearance with insufficient FLR after single stage",notes:"Stage 1: clear one lobe + PVE; Stage 2: resect remaining lobe after hypertrophy (4–6 weeks)"},
      {name:"ALPPS (Associating Liver Partition and Portal vein ligation for Staged hepatectomy)",when:"Inadequate FLR; insufficient hypertrophy after PVE; need rapid FLR growth",notes:"High morbidity (15–25%); rapid hypertrophy in 7–14 days; use only when PVE fails to give adequate FLR"},
      {name:"Ablation (RFA/MWA)",when:"Lesions ≤3 cm in non-resectable locations; combined with resection for additional lesions; non-surgical candidate",notes:"Percutaneous, laparoscopic, or intraoperative; inferior to resection for primary approach but useful adjunct"},
      {name:"Stereotactic body radiotherapy (SBRT)",when:"Unresectable/non-ablatable; <3 lesions; ≤6 cm; adequate liver reserve",notes:"BED >100 Gy associated with better local control; increasing evidence in liver-limited disease"}
    ]
  },
  technique:{
    title:"Parenchymal-Sparing Hepatic Resection for CRLM",
    prep:["MRI liver to identify all lesions (CT misses 10–20% <1 cm)","PET-CT excludes extrahepatic disease","CT volumetry; PVE if FLR <30%","IOUS (intraoperative US) mandatory — identifies additional lesions not seen pre-op in 15%"],
    steps:[
      {n:1,t:"Staging laparoscopy ± IOUS",d:"Exclude peritoneal disease; confirm pre-op imaging; identify lesions"},
      {n:2,t:"Intraoperative US (IOUS)",d:"Systematic survey of all 8 segments; characterize all lesions; plan resection margins; identify vascular proximity"},
      {n:3,t:"Parenchymal transection",d:"Non-anatomical resection if possible — spares parenchyma; CUSA + harmonic; R0 ≥1 mm"},
      {n:4,t:"Pringle maneuver",d:"If bleeding; ≤30 min continuous; protect remnant — intermittent if cirrhosis"},
      {n:5,t:"Ablation of additional lesions",d:"For lesions in unfavorable positions: RFA/MWA intraoperatively under IOUS guidance"},
      {n:6,t:"Hemostasis, bile leak check",d:"Argon beam; cholangiography if duct proximity; drain if biliary injury risk"}
    ],
    pearls:["IOUS is mandatory — identifies additional lesions in 15% and changes surgical plan in 30%","R0 margin ≥1 mm = equivalent to wider margins (Pawlik 2005) — sacrifice less parenchyma","Parenchymal-sparing preserves FLR for repeat resection (recurrence in 50–70% of patients)","PVE: embolize the lobe to be resected → FLR hypertrophies 30–50% in 4–6 weeks"]
  },
  guidelines:[{src:"ESMO CRLM Guidelines 2016 (updated 2023)"},{src:"EORTC 40983 Trial (perioperative FOLFOX)"},{src:"IHPBA/SSAT/SSO Consensus on CRLM 2006 (updated 2012)"}],
  pearls:["Repeat hepatectomy for recurrent CRLM: 5-year survival 25–30% — same as primary resection (parenchymal-sparing facilitates this)","Bevacizumab: stop 4–6 weeks before surgery (anastomotic healing risk)","Cetuximab (RAS/BRAF WT, left-sided primary): higher response rate + conversion to resectability","ALPPS: rapid FLR growth but higher mortality (8–10%) vs PVE — use selectively"],
  mistakes:["Not performing IOUS — misses 15% of lesions","Excessive resection destroying FLR when parenchymal-sparing possible","Continuing bevacizumab too close to surgery — poor wound healing","Not re-staging after neoadjuvant chemotherapy — complete radiological response in 5–10% (still resect original sites)"]
}
];
