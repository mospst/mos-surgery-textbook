// HPB diseases — batch 2 of 3 (cholangiocarcinoma, icc, pseudocyst, portal-hypertension, liver-abscess, gallbladder-cancer, liver-metastases)
window._TMP_HPB2 = [
{
  id:"cholangiocarcinoma", dept:"hpb", name:"Extrahepatic Cholangiocarcinoma", latin:"Cholangiocarcinoma extrahepaticum", organ:"Bile duct",
  severity:"high", tags:["bile duct","Klatskin","jaundice","Bismuth","PSC","resection"],
  hero:"Malignant tumor of the extrahepatic bile ducts; perihilar (Klatskin) tumors account for 50–60% and are the most surgically challenging.",
  keypoints:[
    "Classified by location: perihilar/Klatskin (~50% of all CCA, 50–60% of extrahepatic), distal (20–30%)",
    "Risk factors: PSC, choledochal cyst, Caroli disease, hepatolithiasis, liver flukes (Clonorchis, Opisthorchis); most Western cases sporadic with no identifiable risk factor",
    "Bismuth-Corlette classification for perihilar: guides resectability and extent of resection",
    "Only 20–30% resectable; 5-year survival after hilar R0 resection 11–44% (postoperative mortality 4–17%)",
    "Periductal infiltrating growth pattern → difficult margins; biliary brush cytology sensitivity only 30–40%"
  ],
  differentials:["Primary sclerosing cholangitis (benign stricture)","IgG4-related sclerosing cholangitis","HCC (central variant)","Gallbladder cancer","Metastatic adenocarcinoma to hilum"],
  mnemonics:[{name:"Bismuth-Corlette Types",text:"I=CBD below confluence; II=reaches confluence; IIIa=right duct; IIIb=left duct; IV=both hepatic ducts (unresectable)"}],
  overview:{
    definition:"Adenocarcinoma arising from the epithelium of the bile ducts, classified as intrahepatic, perihilar, or distal.",
    epidemiology:"EHC ~3% of all digestive cancers; ~2500 US EHC cases/yr; incidence rose ~20% (1973→2012, 1.6→2.3/100 000). Even sex distribution; ~20% diagnosed before age 60, largest rise in 18–44 yr olds. Rising incidence linked to NAFLD, obesity, dyslipidaemia, hypertension, T2DM (RR ~1.6). PSC is a recognized risk factor; most Western cases sporadic with no identifiable risk factor.",
    pathophysiology:"Chronic biliary epithelial inflammation → dysplasia → adenocarcinoma; perineural and lymphovascular invasion drive high R1 rate. Adenocarcinoma >75% of EHC; three morphologic subtypes — sclerosing, nodular, papillary (papillary up to 25%, better prognosis than nodular-sclerosing). Precursors: biliary intraepithelial neoplasia (BilIN), intraductal papillary neoplasm of bile duct (IPNB), intraductal tubulopapillary neoplasm, mucinous cystic neoplasm. Molecular: hilar KRAS ~55%, TP53 ~40%; EHC-specific PRKACA/PRKACB fusions, ELF3/ERBB2/ARID1B mutations; HER2 amplification ~20%; dMMR/MSI up to 5% (immunotherapy candidate); ALK/TP53 = worse prognosis. IHC: MUC5AC, MUC6, S100P, SMAD4 loss, BAP1. FGFR2 fusions/IDH mutations concentrated in intrahepatic, rare in EHC.",
    classification:[
      {label:"Bismuth I",note:"Involves CBD below hepatic duct confluence; does not involve confluence"},
      {label:"Bismuth II",note:"Involves hepatic duct confluence but spares right and left hepatic ducts"},
      {label:"Bismuth IIIa",note:"Involves confluence and extends into right hepatic duct"},
      {label:"Bismuth IIIb",note:"Involves confluence and extends into left hepatic duct"},
      {label:"Bismuth IV",note:"Involves both right and left hepatic ducts; generally unresectable"},
      {label:"MSKCC (Blumgart) preop T-stage",note:"Resectability-oriented (Bismuth = ductal extent only). T1: tumor at confluence ± unilateral 2nd-order radicle. T2: T1 + ipsilateral PV involvement and/or ipsilateral lobar atrophy. T3: bilateral 2nd-order radicles, or unilateral radicle + contralateral PV, or unilateral radicle + contralateral atrophy, or main/bilateral PV"},
      {label:"AJCC 8th ed perihilar T-stage",note:"Pathologic/prognostic. T1 confined to duct wall; T2a into periductal adipose, T2b into hepatic parenchyma; T3 unilateral PV/HA branch; T4 main PV or bilateral branches, or common hepatic artery, or unilateral 2nd-order radicle with contralateral vessel. N1 = 1–3 nodes, N2 = ≥4 nodes"}
    ]
  },
  diagnosis:{
    history:["Progressive painless jaundice (~90% of hilar tumors); early/unilateral obstruction may show only isolated ALP rise with near-normal bilirubin","Papillary hilar tumors: intermittent jaundice (friable fragments / ball-valve effect)","Pruritus, dark urine, pale stools","Weight loss, anorexia","Known PSC or choledochal cyst","Fatigue","Cholangitis rare at presentation without prior instrumentation (uninstrumented tree is sterile)"],
    examination:["Jaundice","Hepatomegaly","Cachexia (advanced)","No palpable gallbladder (unlike pancreatic head cancer — collapsed by high obstruction)"],
    investigations:[
      {name:"LFTs",role:"Obstructive pattern; elevated bilirubin, ALP, GGT; bilirubin >10 mg/dL favors malignant obstruction (choledocholithiasis usually 2–4)"},
      {name:"CA 19-9, CEA",role:"CA 19-9 >100 U/mL suggests malignancy but often elevated by jaundice itself (interpret with bilirubin); CEA less sensitive; used in PSC surveillance"},
      {name:"IgG4",role:"Exclude IgG4-sclerosing cholangitis (responds to steroids)"},
      {name:"MRCP",role:"Delineate biliary anatomy; stricture morphology; ductal extent — essential for planning; has replaced direct cholangiography for staging (ERCP/PTC reserved for therapeutic drainage + tissue)"},
      {name:"Duplex/Doppler US",role:"Accurate for portal vein involvement (MSKCC: 93% detection, 99% specificity, 97% PPV); adjunct for equivocal vascular involvement"},
      {name:"CT chest/abdomen/pelvis (pancreatic protocol)",role:"Staging: lymph nodes, hepatic artery, portal vein involvement, metastases; image before biliary decompression (stents/catheters induce inflammation that degrades staging)"},
      {name:"PET-CT",role:"Limited role; primary tumor sens 91.7%/spec 51.3%, nodal 88%/69%, distant mets 85%/90%; problem-solver for equivocal findings, not routine"},
      {name:"ERCP with brush cytology / FISH",role:"Cytology sensitivity 30–40%; FISH improves to 50–60%; ERCP/PTC tissue sens/spec ~70–75%; tissue diagnosis NOT required before resection when suspicion high; mainly for biliary decompression"},
      {name:"Percutaneous biopsy",role:"Only if no surgical plan; risk of tract seeding"}
    ]
  },
  criteria:{
    title:"Resectability Assessment",
    items:[
      {k:"Four axes (Blumgart)",v:"Assess: (1) extent of biliary involvement, (2) lobar atrophy, (3) vascular involvement, (4) metastatic disease"},
      {k:"Resectable",v:"No distant metastases; adequate FLR; portal vein uninvolved or reconstructable; no bilateral hepatic artery involvement. Ipsilateral atrophy + ipsilateral duct/PV involvement is resectable"},
      {k:"Unresectable factors",v:"Bilateral 2nd-order radicle involvement; unreconstructible main PV encasement/occlusion; ipsilateral atrophy with contralateral duct/vessel involvement; nodes outside hepatoduodenal ligament; M1; cirrhosis with portal hypertension / medically unfit. Right hepatic artery involvement in left-sided tumors precludes resection or needs reconstruction"},
      {k:"FLR requirement",v:"Graded PVE indication: FLR <25% normal, <30% post-chemotherapy, <40% cirrhotic/dysfunctional liver; PVE preferred when FLR expected <40% in cholestatic hilar disease"},
      {k:"Nodal caveat",v:"Enlarged regional nodes on imaging often reactive (esp. post-instrumentation) — not sensitive/specific; do not alone contraindicate exploration"},
      {k:"Staging laparoscopy",v:"Spares nontherapeutic laparotomy in ~25–27% of radiographically resectable hilar CCA (up to 36% in T2/T3); up to 50% found unresectable at exploration overall"}
    ]
  },
  scoring:[],
  management:{
    conservative:["Selective FLR-directed biliary drainage: drain only the future liver remnant, not the resected side; PTC or ERCP","Immediate decompression for cholangitis, jaundice needing chemo, hyperbilirubinaemia malnutrition, hepatic insufficiency, and before PVE","FLR-dependent benefit: helps when FLR small (<30–50%); with large FLR (>50%) drainage adds morbidity/mortality without benefit","Internal drainage preferred over external (preserves gut barrier, limits bile/salt loss)","PTBD vs EBD both acceptable (Dutch RCT stopped early); MSKCC prefer PTBD for precise FLR targeting; ~half of EBD patients cross over to PTBD","Palliative endobiliary drainage: start with plastic stents, convert to metal (SEM) after confirming adequate palliation","PERT and nutritional support"],
    medical:["Unresectable/metastatic: gemcitabine + cisplatin (first-line; ABC-02 trial — median OS 11.7 vs 8.2 months)","Second-line: FOLFOX (ABC-06 trial); no standard regimen otherwise (insufficient evidence per systematic review)","Adjuvant capecitabine × 6 months = standard after bile-duct cancer resection (BILCAP: per-protocol OS HR 0.75, RFS HR 0.70; ITT non-significant)","Negative adjuvant trials: GEMOX (PRODIGE-12/ACCORD-18), gemcitabine (BCAT), mitomycin-C/5-FU (Takada)","SWOG S0809: adjuvant gem+cape then chemoRT — single-arm, 2-yr OS 65%; consider for margin-positive disease","Adjuvant radiation not routine after R0; may benefit R1/positive-margin","Molecular testing recommended; FGFR2/IDH targetable mutations rare in EHC (ICC-predominant): pemigatinib/infigratinib/futibatinib (FGFR2), ivosidenib (IDH1)","MSI-H: pembrolizumab","Locoregional: TARE (Y-90), TACE, ablation for ICC","Ongoing trials: ACTICCA-1, ASCOT, TRANSPHIL"],
    surgical:[
      {name:"Perihilar resection (Bismuth I–IIIa/b)",when:"Bismuth I–IIIb, resectable, adequate FLR, no distant metastases",notes:"Major hepatectomy + en bloc bile duct excision ± caudate lobectomy + hepaticojejunostomy; transect proximal duct as high as feasible; R0 margin critical"},
      {name:"Caudate lobectomy",when:"Central/left-duct tumors, or suspected caudate duct extension",notes:"Routine for central/left tumors (caudate ducts drain mainly into left hepatic duct); selective otherwise — not always mandatory"},
      {name:"Segmental bile-duct resection alone",when:"Rare; no hepatectomy",notes:"Must include entire supraduodenal duct, gallbladder, cystic duct, extrahepatic ducts + portal lymphadenectomy; worse survival — no bile-duct-only R0 patient was a 5-yr survivor at MSKCC"},
      {name:"Portal vein resection/reconstruction",when:"Selected patients with segmental PV involvement",notes:"Segmental resection + reconstruction if tumor-free, vascularized, drainable remnant remains; unreconstructible main PV = contraindication"},
      {name:"Central limited resection (IVb+V or IV+I)",when:"Narrow applicability",notes:"Inappropriate with lobar atrophy or main PV branch involvement"},
      {name:"Distal CBD resection (pancreaticoduodenectomy)",when:"Distal cholangiocarcinoma",notes:"Whipple procedure; 5-year survival 27–37% after R0; more resectable than pancreatic cancer; node status key independent survival predictor (positive nodes 1.63× death risk)"},
      {name:"Liver transplantation for perihilar CCA",when:"Highly selected unresectable/PSC hilar CCA; Mayo protocol after neoadjuvant chemoradiation",notes:"Strict selection (mass at stricture / endoluminal biopsy / CA19-9 >100; excludes >3 cm, node/metastatic, prior resection or transperitoneal biopsy); ~1/3 drop out; Rosen/Mayo 75% 5-yr OS; US consortium transplant vs resection 64% vs 18%. Resect when R0 feasible"},
      {name:"Segment III bypass",when:"Unresectable hilar CCA found at operation",notes:"Durable operative palliation; jaundice relief ~70%, 1-yr patency ~80%, less tumor occlusion than SEM"},
      {name:"Palliation",when:"Unresectable disease; biliary obstruction",notes:"Only 25–30% of functional parenchyma needs drainage to relieve jaundice; do NOT drain an atrophic/tumor-replaced lobe; SEM median patency ~6 mo vs plastic ~1.4–3 mo (SEM for confirmed mets, surgical bypass if survival >6 mo); photodynamic therapy improves survival over stenting alone. ALPPS abandoned for biliary tumors (90-day mortality 27–48%)"}
    ]
  },
  technique:{
    title:"Perihilar Cholangiocarcinoma Resection",
    prep:["MRCP delineates biliary anatomy","CT/PET staging excludes distant disease","PTC for biliary decompression — decompress future remnant liver first","Portal vein embolization: FLR <25% normal, <30% post-chemo, <40% cirrhotic; kinetic growth rate (KGR) >2.66%/week predicts no post-op liver insufficiency; PVE morbidity 2–2.5%, mortality 0.1%, FLR gain 8–38%"],
    steps:[
      {n:1,t:"Staging laparoscopy",d:"Assess for peritoneal disease and N2 nodes"},
      {n:2,t:"Hilar dissection",d:"Identify, skeletonise and divide bile duct at adequate margin; send frozen section on both cut ends"},
      {n:3,t:"Caudate lobe resection",d:"Routine for central/left-duct tumors (caudate ducts drain mainly into left hepatic duct); selective for suspected caudate extension — not universally mandatory"},
      {n:4,t:"Major hepatectomy",d:"Right or left hepatectomy based on Bismuth type and tumor side; preserve adequate FLR; keep CVP <5 mmHg during transection to limit hepatic venous bleeding"},
      {n:5,t:"Portal vein reconstruction",d:"If PV involved: tangential resection + patch or segmental resection + end-to-end anastomosis"},
      {n:6,t:"Biliary reconstruction",d:"Hepaticojejunostomy to multiple bile duct orifices on cut liver surface; Roux-en-Y; no drains into lumen"}
    ],
    pearls:["Caudate resection is routine for central/left-duct tumors, selective otherwise — caudate ducts drain mainly into the left hepatic duct","PTC pre-op: drain future remnant liver, NOT the tumor side, to promote hypertrophy","Frozen section margins: ~10% of proximal duct margins misinterpreted on frozen section; wide margin DSS 56 mo vs narrow 38 mo vs positive 32 mo (R1 ≈ locally advanced unresectable)","Portal vein embolization allows safe major hepatectomy when FLR is inadequate"]
  },
  guidelines:[{src:"ESMO Clinical Practice Guidelines: Biliary Tract Cancer 2022"},{src:"NCCN Hepatobiliary Cancers 2023"},{src:"IHPBA Consensus on Perihilar CCA 2019"},{src:"Bismuth-Corlette classification of hilar biliary strictures (Types I–IV)"},{src:"MSKCC preoperative T-staging (Jarnagin/Blumgart)"},{src:"AJCC Cancer Staging Manual, 8th ed (2017) — perihilar bile duct T/N/M"},{src:"Mayo Clinic neoadjuvant chemoradiation + liver transplant protocol for hilar CCA"},{src:"BILCAP trial — adjuvant capecitabine after biliary tract cancer resection"},{src:"ABC-02 trial — gemcitabine + cisplatin first-line for advanced biliary tract cancer"},{src:"Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed (2017)"}],
  pearls:["Caudate resection is routine for central/left-duct tumors, selective otherwise — caudate ducts drain mainly into the left hepatic duct","Gemcitabine + cisplatin: standard first-line for advanced biliary tract cancers (ABC-02)","FGFR2 fusions and IDH mutations are ICC-predominant and rare in extrahepatic CCA","Liver transplantation for unresectable/PSC hilar CCA (Mayo protocol): 75% 5-yr OS in strictly selected patients; resect when R0 feasible","MSKCC preoperative T-stage adds resectability/vascular/atrophy detail that Bismuth-Corlette lacks"],
  mistakes:["Teaching caudate resection as always mandatory — it is selective (routine for central/left-duct tumors)","Not pre-operatively decompressing the future liver remnant — post-op liver failure","Draining the resected side rather than selectively the future liver remnant","Proceeding without diagnostic laparoscopy in borderline resectable — up to 25–27% have occult unresectable disease","Biliary stenting of both sides simultaneously for Bismuth IV — worsens sepsis; drain each side separately","Quoting Mayo transplant 5-yr survival as 53% — the Rosen/Mayo figure is 75%","Using FGFR2/IDH targeted agents for extrahepatic CCA — these are ICC-predominant"]
},
{
  id:"icc", dept:"hpb", name:"Intrahepatic Cholangiocarcinoma", latin:"Cholangiocarcinoma intrahepaticum", organ:"Liver",
  severity:"high", tags:["liver","bile duct","ICC","FGFR2","IDH1","resection"],
  hero:"Primary hepatic malignancy arising from intrahepatic bile duct epithelium; the second most common primary liver cancer after HCC.",
  keypoints:[
    "~10% of primary hepatic malignancies and ~20% of all cholangiocarcinomas (~3% of all GI cancers); incidence rising ~5%/yr over two decades, most marked in males",
    "Associated with cirrhosis, HBV, HCV, PSC, biliary cysts, hepatolithiasis, liver flukes; >90% of Western cases have no identifiable risk factor",
    "Four growth patterns (LCSGJ): mass-forming 65%, mixed 25%, periductal infiltrating 6%, intraductal 4%",
    "FGFR2 fusion (15%), IDH1 mutation (15%), KRAS, TP53 — targetable mutations guide systemic therapy",
    "Resection is the only potentially curative treatment; ~40% 5-year survival after R0 (cure in 30–40% of liver-only disease)",
    "CA 19-9 + CEA combined improves diagnostic accuracy; AFP typically normal"
  ],
  differentials:["HCC","Hepatic metastases (colorectal, breast)","Perihilar cholangiocarcinoma","Hepatic abscess (early ring-enhancing)","Hepatic lymphoma"],
  mnemonics:[{name:"ICC vs HCC differentiation",text:"ICC: normal AFP, elevated CA19-9, no arterial blush + washout, periductal infiltrating, bile duct dilation. HCC: elevated AFP, arterial hyperenhancement + washout, cirrhotic background"}],
  overview:{
    definition:"Adenocarcinoma arising from the intrahepatic biliary epithelium, proximal to the second-order bile ducts.",
    epidemiology:"Incidence rising ~5%/yr over two decades, most marked in males (more common in males). Sporadic tumours present in 7th–8th decade; PSC / untreated choledochal-cyst patients present far earlier at 30–50 yr. Highest incidence Chile, Bolivia, South Korea, NE Thailand (up to 85/100 000, 89% of primary liver cancers there).",
    pathophysiology:"Bile duct epithelial injury → reactive cholangiocytes → oncogenic transformation. Risk factors: PSC (cumulative CCA risk 1.5%/yr, prevalence 8–40%; +IBD raises 20-yr risk to 31% vs 2%); liver flukes (Opisthorchis viverrini, Clonorchis sinensis — commonest SE-Asian); hepatolithiasis/recurrent pyogenic cholangitis (up to 10% develop IHCC, latency 3–8 yr); congenital biliary cystic disease (untreated choledochal cyst/Caroli 10–20% risk if unresected by age 20; pancreaticobiliary maljunction 7%); cirrhosis (10.7% vs 0.7%; 1% of explanted cirrhotic livers harbour occult IHCC; HCV 10-yr risk 3.5%, RR 2.55; HBV RR 1.8, tends mass-forming/better prognosis); NASH (up to 20%); Thorotrast (300× risk, latency 16–45 yr), asbestos, vinyl chloride, nitrosamines, isoniazid. Precursors: BilIN, IPNB, ITNB. Two molecular classes: inflammatory (~38%, STAT3/IL-6) vs proliferative (~62%, worse — TP53, KRAS, BRAF, FGFR2, IDH1/2, PTPN3). Cell of origin: mucin-producing large-duct cholangiocytes → periductal/mass-forming mucinous; non-mucin/progenitor cells → peripheral mass (cholangiolocellular). IHC: CK7 + CK19 positive; N-cadherin increased vs extrahepatic; albumin mRNA ISH distinguishes IHCC from perihilar CCA/metastatic adenocarcinoma. Perineural and lymphovascular invasion → poor margins, early nodal spread.",
    classification:[
      {label:"Mass-forming (MF)",note:"Most common (65%); well-defined peripheral mass; satellite lesions; better resectability and 5-yr survival than PI"},
      {label:"Mixed MF+PI",note:"25%; both components; aggressive"},
      {label:"Periductal infiltrating (PI)",note:"6%; grows along portal tracts; difficult margins; causes ductal dilation; poor prognosis"},
      {label:"Intraductal (ID)",note:"4%; grows into bile duct lumen; may present as cholestasis; best prognosis (nodal metastases rare in this type)"},
      {label:"AJCC 8th ed ICC T-stage",note:"ICC-specific (differs from HCC and 7th ed). T1a solitary ≤5 cm / T1b solitary >5 cm, no vascular invasion; T2 solitary with vascular invasion OR multiple; T3 perforates visceral peritoneum; T4 direct invasion of extrahepatic structures (periductal invasion removed vs 7th ed)"}
    ]
  },
  diagnosis:{
    history:["Often asymptomatic until advanced — detected incidentally or with symptoms of advanced disease","RUQ pain (mass-forming)","Jaundice only if perihilar extension or bilateral ductal involvement","Weight loss, fatigue","Known PSC, HBV, HCV, biliary cysts"],
    examination:["Hepatomegaly, palpable mass (large tumor)","Jaundice (late or perihilar extension)","Cachexia (advanced)"],
    investigations:[
      {name:"AFP",role:"Usually normal (differentiates from HCC); mildly elevated in some ICC"},
      {name:"CA 19-9, CEA",role:"CA 19-9 sensitivity 72%/specificity 84%; CEA sensitivity 42–85%/specificity 70–89%; multi-marker panel (CEA + CA19-9 + CK19-fragment + MMP-7) reaches sens 92%/spec 96%"},
      {name:"ALP / GGT",role:"Serum rise may be the only presenting abnormality prompting imaging"},
      {name:"CEUS",role:"Distinguishes IHCC from HCC by peripheral (rim) arterial enhancement (vs HCC arterial hyperenhancement + washout)"},
      {name:"Triple-phase CT",role:"Single most effective staging test: hypodense infiltrative margins with progressive delayed (3–6 min) enhancement (fibrous stroma); detects lobar atrophy, vascular involvement, nodal/peritoneal/lung mets, volumetry"},
      {name:"MRI liver with hepatobiliary contrast",role:"T1-hypointense/T2-mild-hyperintense mass with delayed contrast pooling (6–8 min); MRCP defines biliary anatomy; capsular retraction and satellite lesions characteristic; FLR assessment"},
      {name:"PET-CT",role:"Best for MF tumours ≥1 cm; nodal sens 42%/spec 80%, distant-met sens 56%/spec 88%; false-positives with biliary inflammation, false-negatives with mucinous tumours"},
      {name:"EUS/ERCP",role:"If ductal involvement; biliary decompression; biopsy"},
      {name:"Staging laparoscopy",role:"Exclude peritoneal/nodal/abdominal-wall disease"},
      {name:"Biopsy (EUS or percutaneous)",role:"Avoided in resectable disease (small seeding risk); reserved for unresectable disease (>half at presentation); tissue for molecular profiling (FGFR2, IDH1, MSI, TMB)"}
    ]
  },
  criteria:{
    title:"Resectability Assessment for ICC",
    items:[
      {k:"Resectable",v:"R0 achievable; adequate FLR (≥20–25% healthy, ≥40% diseased); up to 80% of hepatic volume resectable with good function, 60% with compromised function; no extrahepatic disease"},
      {k:"Irresectable",v:"Solitary locally advanced tumour with bilateral inflow or outflow involvement; multiple intrahepatic tumours; distant metastases"},
      {k:"Multifocality",v:"Markedly worsens survival: median 15 mo (multiple) vs 38 mo (solitary)"},
      {k:"LN assessment",v:"Regional LN (hepatoduodenal) not absolute contraindication; distant LN (celiac, para-aortic) = M1"},
      {k:"Portal vein embolization",v:"If FLR <25–40%; wait 4–6 weeks"}
    ]
  },
  scoring:[
    {name:"MEGNA prognostic score",items:["Multifocality","Extrahepatic tumor extension","high tumor Grade","Nodal positivity","Age >60 yr","1 point each (range 0–5); post-resection survival stratifier (Raoof/Schnitzbauer) — stratifies 1/3/5-yr survival"]}
  ],
  management:{
    conservative:["Biliary decompression if jaundiced","Nutritional support","Best supportive care (>half unresectable): capsular-pain control, ascites management, nutrition, psychological support"],
    medical:["Advanced/metastatic first-line: gemcitabine + cisplatin ± durvalumab (TOPAZ-1: improved OS — now standard of care); GEMOX and gem/capecitabine reasonable alternatives; median OS ~12 mo","Second-line: no established regimen; fluoropyrimidine doublets ~3.4% response, OS ~7 mo","FGFR2 fusion: pemigatinib (ORR 35.5%), infigratinib, futibatinib","IDH1 mutation: ivosidenib (ClarIDHy trial: improved PFS; 12-mo PFS 21%)","BRAF: dabrafenib + trametinib (42% response); MET (tivantinib), PD-1 (pembrolizumab, nivolumab) investigational","MSI-H: pembrolizumab","Adjuvant: capecitabine (BILCAP / ASCO 2019) — 6 months post-resection; OS benefit in PP analysis","Regional therapy: TACE (cisplatin/doxorubicin/mitomycin) vs DEB-TACE median OS 13.4 vs 10.5 mo; HAI (FUDR ± systemic gem/ox) response ~46%, 2-yr OS 53%, can downstage (contraindicated in cirrhosis); Y-90 radioembolization median OS 15–22 mo, up to 5% downstaged","EBRT/SBRT: radiosensitive; local control 78–94%, grade 3–4 toxicity ~11%; useful in poor-performance-status patients"],
    surgical:[
      {name:"Major hepatectomy",when:"Resectable mass-forming ICC; adequate FLR",notes:"Anatomical resection preferred; R0 margin (even 1 mm); lymphadenectomy of hepatoduodenal ligament (AJCC 8th ≥6 nodes; only ~25% of specimens achieve this). Left-sided tumours spread to cardia/lesser-curve nodes, right-sided to hepatoduodenal ligament"},
      {name:"Extended hepatectomy",when:"Tumor involving both lobes or perihilar extension",notes:"High morbidity; requires PVE; specialist center"},
      {name:"Ablation (RFA/MWA)",when:"Small tumors, or solitary liver-only recurrence",notes:"5–10 mm margin; only ~5% of IHCC treated by ablation alone; incomplete-ablation 21%, major-complication 8%, 5-yr survival ~24%; for solitary recurrence efficacy ≈ repeat resection but complication 4% vs 47%"},
      {name:"Liver transplant",when:"Very early IHCC (≤2 cm) incidentally found on explant — emerging selective indication only",notes:"Contraindicated in most centres; ≤2 cm incidental had 65% 5-yr survival vs 45% advanced"},
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
    pearls:["Lymphadenectomy is prognostic and potentially therapeutic — N1 does not preclude resection in absence of distant disease; ESMO recommends routine hepaticoduodenal lymphadenectomy, EASL 'strongly considered', NCCN 'reasonable'","Preoperative nodal predictors (Yoh): elevated CA 19-9 + hilar invasion + short-axis node >10 mm predict N1 (false-neg 2.3%)","R0 margin (even 1 mm) significantly improves survival over R1","Satellite lesions are NOT an absolute contraindication if R0 achievable"]
  },
  guidelines:[{src:"ESMO Biliary Tract Cancer Guidelines 2022"},{src:"NCCN Hepatobiliary 2023"},{src:"ILCA Consensus on ICC 2022"},{src:"AJCC Cancer Staging Manual, 8th ed — intrahepatic bile duct (IHCC) staging (≥6-node lymphadenectomy)"},{src:"BILCAP trial (2019) — adjuvant capecitabine after biliary tract cancer resection"},{src:"ASCO Clinical Practice Guideline 2019 — adjuvant capecitabine 6 months post-resection"},{src:"ABC-02 (Valle et al.) — gemcitabine + cisplatin first-line for advanced biliary tract cancer"},{src:"ESMO Biliary Tract Cancer Guidelines — routine hepatoduodenal lymphadenectomy"},{src:"Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed (2017)"}],
  pearls:["Gemcitabine + cisplatin + durvalumab: new standard first-line for advanced biliary tract cancers (TOPAZ-1)","FGFR2 fusions in ~15% ICC — test all advanced ICC for actionable mutations","Adjuvant capecitabine for 6 months post-resection (BILCAP / ASCO 2019)","Nodal disease in 30–40% of presenting patients (intra-abdominal nodal mets up to 75% at presentation) — mandatory lymphadenectomy for staging","Growth-pattern frequencies (LCSGJ): MF 65%, mixed 25%, PI 6%, intraductal 4%"],
  mistakes:["Not performing lymphadenectomy — understages disease, misses N1 patients","Quoting adjuvant capecitabine as 6–8 cycles / 12 months — the standard is 6 months (BILCAP/ASCO)","Proceeding to resection without molecular profiling for advanced disease","Overlooking satellite lesions on imaging — leads to incomplete resection","Not using PVE when FLR is borderline — post-hepatectomy liver failure"]
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
  hero:"The liver is the most common site of colorectal cancer metastasis; resection offers the only chance of cure with 5-year survival approaching 58–60%.",
  keypoints:[
    "15–25% of CRC patients present with synchronous liver metastases; an additional 20–30% develop metachronous mets",
    "10–20% are resectable at presentation; conversion chemotherapy downsizes ~12.5% of initially unresectable to resectable (Adam 2004; 5-yr OS 33% in converted group)",
    "Clinical Risk Score (CRS) predicts recurrence after resection: node-positive primary, DFS <12 months, >1 metastasis, size >5 cm, CEA >200",
    "Simultaneous vs staged resection: bowel-first, liver-first, or simultaneous — multidisciplinary decision",
    "Ablation (RFA/MWA) for lesions <3 cm in non-resectable segments or as adjunct to resection",
    "Median survival of untreated synchronous CRLM only 5–10 months; recurrence up to 66% (liver in ~60%, liver-only up to 40%), overall cure rate ~20%",
    "Preoperative chemo generally limited to ≤6 cycles (max radiologic response by 2–4 months; ≥12 cycles → severe sinusoidal injury)"
  ],
  differentials:["HCC","Hepatic hemangioma","FNH","Hepatic adenoma","Other metastases (breast, neuroendocrine, pancreas)"],
  mnemonics:[{name:"Fong Clinical Risk Score",text:"Node-positive primary, DFS <12 months, >1 liver lesion, largest >5 cm, CEA >200 ng/mL — 1 point each; 0–2 = low risk; 3–5 = high risk"}],
  overview:{
    definition:"Metastatic deposits within the liver arising from colorectal adenocarcinoma via hematogenous portal spread.",
    epidemiology:"CRC: 3rd commonest cancer globally; liver is site of metastases in 70% of advanced CRC. Resection possible in 15–20%.",
    pathophysiology:"Portal venous dissemination → hepatic arterial supply of established metastases → characteristic rim enhancement on CECT. KRAS/NRAS mutation: predicts poor response to anti-EGFR; RAS wild-type: responds to cetuximab/panitumumab (left-sided only). Chemotherapy-associated hepatotoxicity: oxaliplatin → sinusoidal injury ('blue liver'), can progress to nodular regenerative hyperplasia + portal hypertension (splenomegaly/thrombocytopenia surrogates); irinotecan → steatohepatitis ('yellow liver'), linked to higher post-resection mortality (14.7% vs 1.6%). FOLFOXIRI highest response but high hepatotoxicity (sinusoidal dilation ~100%, steatosis ~76% in resected specimens).",
    classification:[
      {label:"Resectable",note:"R0 achievable; adequate FLR (>20% normal / >30% chemo / >40% cirrhosis); no extrahepatic disease, or limited resectable extrahepatic disease. Number (≥4) and size (>5 cm) are no longer contraindications — historical only"},
      {label:"Initially unresectable — convertible",note:"Technically unresectable due to size/location/FLR; may become resectable after downsizing chemotherapy"},
      {label:"Unresectable",note:"Too many lesions; insufficient FLR; major vessel involvement; unresectable extrahepatic disease"}
    ]
  },
  diagnosis:{
    history:["Known colorectal cancer (synchronous or previous resection)","RUQ pain, fatigue (advanced)","Unintentional weight loss","Follow-up CEA rise"],
    examination:["Hepatomegaly, palpable masses (advanced)","Jaundice (late — biliary compression)","Cachexia"],
    investigations:[
      {name:"CEA",role:"Serial monitoring; rising CEA post-colectomy triggers imaging; correlates with tumor burden"},
      {name:"CECT chest/abdomen/pelvis",role:"Standard staging; quadruple-phase (pre/arterial/portal/delayed), slice ≤5 mm; portal venous phase most sensitive for hypovascular CRLM; 3D reconstruction for FLR volumetry"},
      {name:"MRI liver (hepatobiliary contrast — Eovist/Primovist)",role:"More sensitive for small lesions <1 cm; characterizes indeterminate lesions; biliary anatomy"},
      {name:"PET-CT",role:"RCT showed no impact on surgical planning/outcomes in metachronous resectable CRLM; reserve for ruling out extrahepatic disease in high-risk/borderline; poor sensitivity <1 cm and during chemo"},
      {name:"Mutational analysis (KRAS/NRAS/BRAF/MSI)",role:"Guides systemic therapy selection; KRAS/NRAS wild-type: cetuximab eligible"},
      {name:"Disappearing liver metastases (DLMs)",role:"Occur in 5–24% after chemo; complete pathologic response uncommon → resect all metastases seen on pre-chemo imaging; consider fiducial marker placement before chemo for at-risk lesions"},
      {name:"Biopsy",role:"Only if diagnosis uncertain; not routinely needed if known CRC + typical imaging"}
    ]
  },
  criteria:{
    title:"Resectability Criteria for CRLM",
    items:[
      {k:"Technical resectability",v:"Margin-negative resection while preserving adequate biliary drainage + vascular inflow/outflow, sparing ≥2 contiguous segments with adequate FLR"},
      {k:"FLR three-tier",v:">20% normal liver, >30% after extensive chemotherapy, >40% with cirrhosis"},
      {k:"Number/size",v:"≥4 lesions and >5 cm are NO LONGER contraindications (historical only)"},
      {k:"Nonpulmonary extrahepatic disease",v:"No longer absolute contraindication; highly selected resection possible — lung best (5-yr OS 32–50%), portal nodes/limited peritoneal intermediate (24–42%), retroperitoneal nodes/multi-site poor (7–14%)"},
      {k:"Contraindications",v:"Peritoneal carcinomatosis (unless limited and resectable); unresectable extrahepatic nodal disease"},
      {k:"FLR augmentation",v:"Portal vein embolization (PVE); ALPPS (two-stage); ablation of contralateral lesions"},
      {k:"Simultaneous vs staged",v:"Simultaneous safe for minor hepatectomy + colectomy; high-risk colorectal + major hepatectomy → mortality 5%, major morbidity 55% → stage; liver-first for asymptomatic primary driven by mets"}
    ]
  },
  scoring:[
    {name:"Fong Clinical Risk Score (MSKCC 1999)",items:["Node-positive primary tumor","Disease-free interval <12 months",">1 hepatic tumor","Largest hepatic tumor >5 cm","CEA >200 ng/mL","n=1001; Score 0–2 (low): 5-yr OS 60%; Score 3–5 (high): 5-yr OS 14%"]},
    {name:"Newer 3-factor score",items:["RAS mutation","CLM >5 cm","Node-positive primary","Stratifies OS/RFS in 608 patients; modernizes Fong CRS by adding molecular data"]}
  ],
  management:{
    conservative:["Recurrence risk peaks ~1 yr post-resection, declines yr 1–4, stable after 4 yr; most recurrences within 2 yr","RAS-stratified surveillance: after 2 disease-free yrs, RAS mutation is the sole remaining recurrence risk factor → tailor imaging frequency by RAS status","Typical regimen: H&P + CEA + CT C/A/P every 3–4 mo × 2 yr, then 6-monthly for yrs 2–5, annual thereafter"],
    medical:["First-line: FOLFOX or FOLFIRI (equivalent, choose by toxicity); FOLFOX + bevacizumab commonly first-line (bevacizumab also protects against oxaliplatin sinusoidal injury + improves pathologic response)","FOLFOXIRI (triplet): higher response, PFS, OS and conversion vs doublets, at cost of neuropathy/neutropenia/hepatotoxicity","Adjuvant: 3–6 months FOLFOX post-resection (debated — EORTC/EPOC: perioperative FOLFOX improved PFS 20.9 vs 12.5 mo, P=.035, no OS difference)","New EPOC: adding cetuximab to perioperative chemo in KRAS-WT resectable CRLM was detrimental to survival — do NOT add anti-EGFR perioperatively in resectable disease","Anti-EGFR only benefits LEFT-sided RAS-WT primaries; right-sided RAS-WT do NOT benefit (bevacizumab efficacy unaffected by side)","BRAF V600E: monotherapy BRAF inhibition ineffective (EGFR reactivation); BEACON regimen = encorafenib + binimetinib + cetuximab improves OS","Conversion (bevacizumab): BECOME RCT — FOLFOX+bevacizumab in RAS-mutant unresectable CRLM raised R0 resection 22.3% vs 5.8%","HAI-FUDR: adjuvant 5-FU+HAI-FUDR improved 2-yr OS (86% vs 72%) and hepatic RFS (90% vs 60%); HAI + systemic in unresectable gave 73% response / 52% conversion; biliary toxicity mitigated by dexamethasone + avoiding systemic bevacizumab","Unresectable: FOLFOX/FOLFIRI ± biological; maintenance capecitabine"],
    surgical:[
      {name:"Hepatic resection (synchronous vs metachronous)",when:"Resectable CRLM; adequate FLR; no unresectable extrahepatic disease",notes:"Anatomical or non-anatomical resection; R0 margin ≥1 mm; parenchymal-sparing approach if multiple lesions. Low CVP anaesthesia + possible portal pedicle clamping → cardiopulmonary workup mandatory"},
      {name:"Liver-first (reverse) approach",when:"Asymptomatic primary whose prognosis is driven by mets",notes:"Systemic therapy → hepatectomy → primary resection; contraindicated if primary obstructing (can't pass pediatric colonoscope) or perforated"},
      {name:"Two-stage hepatectomy (TSH)",when:"Bilateral metastases requiring clearance with insufficient FLR after single stage",notes:"Stage 1 clears FLR ± inter-stage PVE (~8-wk interval); ~11% dropout (mostly progression); completers 5-yr OS up to 51%"},
      {name:"ALPPS (Associating Liver Partition and Portal vein ligation for Staged hepatectomy)",when:"Inadequate FLR; insufficient hypertrophy after PVE; need rapid FLR growth",notes:"Two-stage completion in 1–2 weeks; initial series had alarmingly high morbidity/mortality and intrahepatic recurrence up to 60%; modern LIGRO-era data show major morbidity/90-day mortality/R0 not significantly different vs portal-vein-occlusion TSH"},
      {name:"Liver venous deprivation",when:"Very small FLR needing hypertrophy",notes:"Combined hepatic vein + portal vein embolization; newer, superior hypertrophy/kinetic growth vs PVE alone"},
      {name:"Ablation (RFA/MWA)",when:"Lesions ≤3 cm in non-resectable locations; combined with resection for additional lesions; non-surgical candidate",notes:"Percutaneous, laparoscopic, or intraoperative; CLOCC RCT (chemo + ablation vs chemo alone, unresectable liver-only): 5-yr OS 43.1% vs 30.3%; but for resectable disease higher local recurrence (37% vs 11% resection)"},
      {name:"Completion ablation",when:"Resect all but 1–2 small lesions",notes:"Percutaneous CT-guided ablation of remainder — lower complications/local progression than intraoperative ablation"},
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
      {n:6,t:"Hemostasis, bile leak check",d:"Interrogate bile-duct closure on transection surface (reduces bile leak/deep-space infection, obviates prophylactic drains); topical hemostatics do NOT reduce bleeding/leak"}
    ],
    pearls:["IOUS is mandatory — identifies additional lesions in 15% and changes surgical plan in 30%","Margin: 1 mm to ≥1 cm does not affect recurrence/survival (historical 1 cm obsolete); positive margin is a surrogate of aggressive biology, not a mechanistic cause — goal is microscopically negative margin","Parenchymal-sparing preserves FLR for repeat resection (recurrence up to 66% of patients)","PVE: embolize the lobe to be resected → FLR hypertrophies over ~8-wk TSH inter-stage interval; ALPPS achieves two-stage completion in 1–2 weeks","Minimally invasive minor hepatectomy (OSLO-COMET, LapOpHuva RCTs): lower complications + shorter LOS vs open"]
  },
  guidelines:[{src:"ESMO CRLM Guidelines 2016 (updated 2023)"},{src:"EORTC 40983 (EPOC) — perioperative FOLFOX for resectable CLM (PFS 20.9 vs 12.5 mo)"},{src:"IHPBA/SSAT/SSO Consensus on CRLM 2006 (updated 2012)"},{src:"Fong Clinical Risk Score (MSKCC, 1999) — 5-factor CRS"},{src:"New EPOC (Primrose 2014) — cetuximab detrimental in perioperative resectable KRAS-WT CLM"},{src:"BECOME trial (2020) — bevacizumab + FOLFOX conversion in RAS-mutant CLM"},{src:"CELIM / OLIVIA trials — cetuximab / bevacizumab conversion therapy"},{src:"BEACON trial — encorafenib + binimetinib + cetuximab for BRAF V600E mCRC"},{src:"CLOCC (EORTC 40004) — ablation + chemo vs chemo alone, unresectable liver-only CLM"},{src:"LIGRO trial — ALPPS vs portal-vein-occlusion TSH"},{src:"OSLO-COMET / LapOpHuva — minimally invasive vs open liver resection"},{src:"SECA / SECA-II (Oslo) — liver transplantation for unresectable CLM (investigational)"},{src:"Kemeny 1999 (NEJM) — adjuvant HAI-FUDR after CLM resection"},{src:"Blumgart's Surgery of the Liver, Biliary Tract and Pancreas, 7th ed (2017)"}],
  pearls:["Repeat hepatectomy for recurrence: survival similar to first resection, operative mortality ~0%; adverse factors = recurrence <6 mo, RAS mutation, positive margin","Bevacizumab: stop ~5 weeks before surgery (operate too soon after chemo and complications ~2× higher at ≤4 wk vs 5–8 wk)","Anti-EGFR (cetuximab) benefits only left-sided RAS/BRAF-WT primaries; no benefit right-sided","RAS mutation: lower 3-yr OS (52% vs 81% WT); predicts lung recurrence; independent adverse factor","BRAF mutation (8–12% of metastatic CRC, ~2% of resected CLM): aggressive, OS 40 vs 81 mo; right-sided association; non-V600E paradoxically better prognosis","SMAD4 mutation (~13%): worse 3-yr OS (62% vs 82%). Co-mutations dominate: RAS+TP53 → 5-yr OS 20.6% vs 60%; RAS+TP53+SMAD4 triple worst; TP53 alone not prognostic; MSI-H <2% of resected CLM","Pathologic response to preop chemo is an independent survival predictor: complete/major/minor → 5-yr OS 75%/56%/33%; morphologic CT response (bevacizumab) correlates better than RECIST","Liver transplant for unresectable CLM investigational: SECA/SECA-II 5-yr OS 60%/83% with strict criteria (Oslo); limited by organ shortage","ALPPS: rapid FLR growth (1–2 wk) but high early-series mortality — improved with technical modification; use selectively"],
  mistakes:["Adding cetuximab to perioperative chemo in resectable KRAS-WT CLM (New EPOC harm)","Using anti-EGFR for right-sided primaries (no benefit)","Prolonging preop chemo >6 cycles / >4 months (hepatotoxicity, no added benefit)","Operating too soon after chemo (≤4 wk doubles complications; wait ~5 wk)","Placing prophylactic drains / relying on topical hemostatics instead of interrogating bile-duct closure","Not performing IOUS — misses 15% of lesions","Excessive resection destroying FLR when parenchymal-sparing possible","Not re-staging after neoadjuvant chemotherapy — resect all pre-chemo sites (disappearing mets rarely complete pathologic response)"]
}
];
