
  {id:"cli",dept:"vascular",name:"Chronic Limb-Threatening Ischaemia",organ:"Lower limb arteries",severity:"high",
  tags:["CLTI","WIfI","bypass","amputation","revascularisation"],
  hero:"Rest pain >2 weeks, tissue loss, or gangrene attributable to proven peripheral arterial insufficiency.",
  keypoints:["ABI <0.4 or toe pressure <30 mmHg defines critical ischaemia","WIfI score stratifies 1-year amputation risk — drives urgency","~25% major amputation rate and ~25% mortality at 1 year without treatment","Revascularise first, then wound care — ischaemia prevents healing","GSV is the gold-standard conduit for below-knee bypass"],
  differentials:["Acute limb ischaemia","Diabetic neuropathic ulcer","Venous ulceration","Vasculitis","Blue toe syndrome","Osteomyelitis"],
  mnemonics:[{name:"WIfI",text:"W = Wound grade (0–3)\ni = Ischaemia (ABI / toe pressure)\nfI = foot Infection (grade 0–3)\nCombined stage 1–4 predicts amputation risk"}],
  overview:{
    definition:"CLTI is the end-stage of peripheral arterial disease defined by ischaemic rest pain >2 weeks, non-healing ulceration, or gangrene with proven arterial insufficiency.",
    epidemiology:"Incidence 500–1000/million/year. Most are elderly with cardiovascular comorbidities. Diabetics have 10-fold higher risk of foot complications. 5-year mortality ~50% — driven by MI and stroke.",
    pathophysiology:"Progressive atherosclerosis reduces perfusion below tissue viability. Below ABI 0.4, tissue oxygen falls below healing threshold. Diabetic microvascular disease compounds macrovascular occlusion. Infection accelerates tissue necrosis.",
    classification:[{label:"Rutherford 4",note:"Ischaemic rest pain"},{label:"Rutherford 5",note:"Minor tissue loss — non-healing ulcer or focal gangrene"},{label:"Rutherford 6",note:"Major tissue loss — beyond forefoot salvage"},{label:"WIfI Stage 1–4",note:"Stage 3–4 = >50% 1-year amputation risk without revascularisation"}]
  },
  diagnosis:{
    history:["Rest pain: burning at night, relieved by dependency","Non-healing wound/ulcer after minor trauma","Diabetes, smoking, hypertension, hyperlipidaemia","Previous vascular interventions"],
    examination:["ABI <0.4; toe pressure <30 mmHg","Buerger's test: pallor on elevation, dependent rubor >10 sec","Assess wound: size, depth, bone exposure, infection signs","Pulse assessment: femoral, popliteal, dorsalis pedis, tibial posterior"],
    investigations:[{name:"Ankle-brachial index",role:"Screening; may be falsely high in diabetics (calcified vessels)"},{name:"Toe-brachial index / TcPO₂",role:"Reliable in diabetics; <0.3/30 mmHg = critical"},{name:"Duplex ultrasound",role:"First-line arterial mapping"},{name:"CT angiogram",role:"Gold standard for revascularisation planning — aorta to foot"},{name:"MRA",role:"Alternative if contrast contraindicated"}]
  },
  criteria:{title:"SVS/ESVS CLTI definition 2019",items:[{k:"Rest pain",v:"Ischaemic rest pain >2 weeks requiring analgesia + ABI <0.4"},{k:"Tissue loss",v:"Non-healing ulcer or gangrene with proven arterial insufficiency"},{k:"ABI threshold",v:"<0.4 non-diabetic; use toe-brachial index <0.3 in diabetics"},{k:"TcPO₂",v:"<30 mmHg predicts failure to heal"},{k:"WIfI stage 3–4",v:">50% 1-year amputation risk — prioritise urgent revascularisation"}]},
  scoring:["wifi","rutherford"],
  management:{
    conservative:["Smoking cessation — single most effective risk reduction","Wound care: debridement, off-loading, dressings","Nutritional optimisation","Pain management: opioids for rest pain"],
    medical:["Dual antiplatelet (aspirin + clopidogrel)","High-intensity statin (atorvastatin 80 mg)","Optimal BP control (<130/80)","Iloprost (IV prostanoid) — bridge in no-option limbs"],
    surgical:[{name:"Endovascular revascularisation",when:"First-line where anatomy permits — especially tibial disease in diabetic foot",notes:"Balloon angioplasty ± stent; drug-coated balloons improve patency"},{name:"Open bypass (femoro-popliteal/tibial)",when:"GLASS C/D anatomy, long occlusions, failed endovascular",notes:"Reversed or in-situ GSV preferred; prosthetic acceptable above knee only"},{name:"Major amputation (BKA/AKA)",when:"Unsalvageable limb, overwhelming sepsis, failed revascularisation",notes:"Below-knee preferred for rehabilitation; optimise stump healing"}]
  },
  technique:{
    title:"Femoro-popliteal bypass with reversed great saphenous vein",
    prep:["GA or spinal; arterial line","Duplex vein mapping pre-op to confirm GSV calibre ≥3 mm","Full leg + groin + contralateral thigh prepped (vein harvest)","Intra-op completion angiogram setup"],
    steps:[{n:1,t:"Groin incision",d:"Vertical groin incision; expose CFA, SFA origin, and profunda bifurcation."},{n:2,t:"GSV harvest",d:"Medial incision over GSV from groin to knee/lower leg. Handle gently — ligate tributaries, avoid skeletonisation."},{n:3,t:"Distal target exposure",d:"Medial below-knee incision for BK popliteal; divide deep fascia between gastrocnemius heads."},{n:4,t:"Tunnel creation",d:"Anatomical subfascial tunnel from groin to distal target using tunnelling device."},{n:5,t:"Heparinise",d:"70–100 U/kg IV; ACT >250 sec before clamping."},{n:6,t:"Proximal anastomosis",d:"End-to-side to CFA/SFA with 5-0 Prolene; flush graft before distal anastomosis."},{n:7,t:"Distal anastomosis",d:"End-to-side to popliteal/tibial vessel with 6-0 Prolene; precise spatulation to avoid stenosis."},{n:8,t:"Flow check",d:"Intra-operative duplex or completion angiogram — correct any technical errors immediately."},{n:9,t:"Protamine + closure",d:"Reverse heparin; close wound in layers; drain if needed."}],
    pearls:["Never use prosthetic conduit below knee when GSV is available","Completion angiogram mandatory — technical errors cause early failure","Avoid tension: knee flexion kinks BK anastomosis"]
  },
  guidelines:[{src:"SVS/ESVS 2019",url:"Global Vascular Guidelines on CLTI — Eur J Vasc Endovasc Surg 58"},{src:"NICE NG19",url:"Peripheral arterial disease: diagnosis and management"}],
  pearls:["Revascularise before wound care — ischaemia must be corrected first","Diabetic ABI may be falsely normal — always check toe pressure","WIfI stage 3–4 needs revascularisation within days not weeks"],
  mistakes:["Delaying revascularisation to 'optimise medically' — tissue death continues","Prosthetic graft below knee — universally poor patency","Missing osteomyelitis — MRI is mandatory if bone is exposed","Not performing completion angiogram — early technical failures are preventable"]},

  {id:"carotid",dept:"vascular",name:"Carotid Stenosis",latin:"Stenosis arteriae carotidis internae",organ:"Internal carotid artery",severity:"moderate",
  tags:["TIA","stroke","CEA","CAS","NASCET"],
  hero:"Atherosclerotic narrowing of the carotid bifurcation — the most common surgically treatable cause of ischaemic stroke.",
  keypoints:["Symptomatic ≥50% stenosis: CEA reduces 5-year stroke risk by ~50% (NASCET)","CEA most beneficial within 2 weeks of TIA/minor stroke","Asymptomatic ≥70% stenosis: CEA beneficial only if surgical risk <3%","NASCET method measures stenosis — distal ICA as denominator","Contralateral ICA occlusion increases operative stroke risk"],
  differentials:["Cardioembolic stroke (AF)","Intracranial atherosclerosis","Vertebrobasilar TIA","Lacunar infarct","Migraine with aura","Todd's paresis"],
  mnemonics:[{name:"NASCET criteria",text:"Symptomatic 50–99%: CEA beneficial\nAsymptomatic 60–99%: CEA may benefit low-risk patients\nMeasure: (1 – stenosis/normal distal ICA) × 100%"}],
  overview:{
    definition:"Atherosclerotic narrowing of the carotid bifurcation and proximal ICA causing plaque rupture, thromboembolism, and ischaemic stroke or TIA.",
    epidemiology:"Prevalence of >50% stenosis: ~5% in men >65 yrs. Accounts for 15–20% of all ischaemic strokes. Risk factors: hypertension, smoking, diabetes, dyslipidaemia.",
    pathophysiology:"Atherosclerotic plaque at carotid bifurcation undergoes rupture or erosion, releasing emboli into the cerebral circulation. Flow-limiting stenosis causes haemodynamic TIA. Low-flow states precipitate borderzone infarcts.",
    classification:[{label:"Symptomatic",note:"TIA, amaurosis fugax, or minor stroke within 6 months"},{label:"Asymptomatic",note:"Incidental finding; lower absolute stroke risk than symptomatic"},{label:"NASCET <50%",note:"Medical management only"},{label:"NASCET 50–69%",note:"Moderate benefit from CEA in symptomatic patients"},{label:"NASCET 70–99%",note:"Greatest benefit from CEA — 5-year ARR ~16%"}]
  },
  diagnosis:{
    history:["Amaurosis fugax (monocular blindness — 'curtain' effect)","Contralateral hemispheric TIA: arm/face weakness, dysphasia","Time from event to presentation — urgency window","Cardiovascular risk factors and medications"],
    examination:["Carotid bruit (sensitivity poor; may be absent in tight stenosis)","Neurological examination — deficits determine territory","BP both arms — subclavian steal if >15 mmHg difference","Full cardiovascular examination: AF, valvular disease"],
    investigations:[{name:"Duplex US carotids",role:"First-line; PSV >230 cm/s = >70% stenosis"},{name:"CT angiogram neck/head",role:"Pre-operative planning; assesses plaque morphology and arch"},{name:"MRA",role:"Alternative to CTA; avoids radiation"},{name:"CT/MRI brain",role:"Identifies infarct, excludes haemorrhage"},{name:"ECG + 24h Holter",role:"Excludes AF as cardioembolic source"},{name:"Fasting glucose, lipids",role:"Risk factor assessment"}]
  },
  criteria:{title:"CEA indications (NASCET/ECST/AHA)",items:[{k:"Symptomatic ≥70%",v:"CEA strongly recommended within 2 weeks of TIA/minor stroke (NNT=6)"},{k:"Symptomatic 50–69%",v:"CEA beneficial in men; marginal benefit in women"},{k:"Symptomatic <50%",v:"Medical management only"},{k:"Asymptomatic ≥60–70%",v:"CEA beneficial if perioperative stroke/death risk <3% and life expectancy >5 years"},{k:"Timing",v:"Symptomatic CEA within 14 days of index event — greatest absolute risk reduction"}]},
  scoring:["nascet"],
  management:{
    conservative:["Antiplatelet therapy: aspirin 75–300 mg or clopidogrel 75 mg","High-intensity statin (atorvastatin 80 mg)","BP control <130/80 mmHg","Lifestyle modification; smoking cessation"],
    medical:["Dual antiplatelet (aspirin + clopidogrel) for 30 days post-TIA then single agent","Anticoagulation if concurrent AF"],
    surgical:[{name:"Carotid endarterectomy (CEA)",when:"Symptomatic ≥50%, asymptomatic ≥60–70% with low surgical risk",notes:"Gold standard; local/GA acceptable; eversion or patch closure; shunt if contralateral occlusion"},{name:"Carotid artery stenting (CAS)",when:"High-risk surgical anatomy (hostile neck, restenosis, post-radiation), patient preference",notes:"Higher peri-procedural stroke risk than CEA in symptomatic patients; equivalent long-term outcomes"}]
  },
  technique:{
    title:"Carotid endarterectomy (conventional with patch angioplasty)",
    prep:["GA or locoregional (deep cervical block) — surgeon preference","Arterial line, ECG; TCD or stump pressure monitoring for shunt decision","Supine, head extended and rotated 45° away; sandbag under shoulders","Pre-op antiplatelet continued up to surgery"],
    steps:[{n:1,t:"Incision",d:"Along anterior border SCM; develop plane medial to IJV."},{n:2,t:"Common carotid control",d:"Encircle CCA below bifurcation with silastic sling."},{n:3,t:"ICA/ECA control",d:"Identify and control ICA and ECA; watch for hypoglossal and vagus nerves."},{n:4,t:"Systemic heparinisation",d:"70 U/kg IV; ACT >250 sec."},{n:5,t:"Clamp and arteriotomy",d:"CCA → ICA → ECA clamps; longitudinal arteriotomy across bifurcation."},{n:6,t:"Shunt if needed",d:"Insert if stump pressure <50 mmHg, EEG change, or contralateral occlusion."},{n:7,t:"Endarterectomy",d:"Develop plane in outer media; feather distal endpoint; tack with 6-0 Prolene if needed."},{n:8,t:"Patch closure",d:"Dacron or bovine pericardium patch; continuous 6-0 Prolene; de-air before final closure."}],
    pearls:["Tack down distal ICA endpoint — intimal flap causes acute occlusion","De-air meticulously before releasing clamps","Avoid retraction on hypoglossal nerve — causes tongue deviation"]
  },
  guidelines:[{src:"NICE NG68 2019",url:"Stroke and TIA: diagnosis and initial management"},{src:"ESC/ESVS 2023",url:"Management of carotid artery disease"}],
  pearls:["Operate within 14 days of TIA — greatest risk reduction window","Patch closure reduces restenosis compared to primary closure","Local anaesthesia allows awake neurological monitoring"],
  mistakes:["Delaying CEA beyond 2 weeks in symptomatic stenosis","Primary closure without patch — increases restenosis risk","Missing tandem intracranial lesion pre-operatively","Failing to check and treat contralateral carotid and cardiac sources"]},

  {id:"dvt",dept:"vascular",name:"Deep Vein Thrombosis",organ:"Deep veins, lower limb",severity:"moderate",
  tags:["VTE","anticoagulation","PE","Wells score","iliofemoral"],
  hero:"Thrombus in the deep venous system — risk of pulmonary embolism and long-term post-thrombotic syndrome.",
  keypoints:["Wells score stratifies pre-test probability; D-dimer rules out if low probability","Proximal DVT (above knee) carries higher PE risk than distal","Iliofemoral DVT warrants consideration of catheter-directed thrombolysis (CDT)","LMWH or DOAC (rivaroxaban/apixaban) are first-line treatments","3 months minimum anticoagulation for provoked DVT; extended for unprovoked"],
  differentials:["Ruptured Baker's cyst","Cellulitis","Superficial thrombophlebitis","Muscle haematoma","Lymphoedema","Venous insufficiency"],
  mnemonics:[{name:"Wells DVT score",text:"Active cancer +1, Paralysis/immobilisation +1, Bedridden >3d/major surgery <12wk +1, Calf tenderness +1, Entire leg swollen +1, Calf swelling >3cm +1, Pitting oedema +1, Collateral superficials +1, Previous DVT +1, Alternative diagnosis -2\n≥2 = high probability"}],
  overview:{
    definition:"Thrombus formation in the deep venous system, most commonly the lower limb. Classified as distal (below knee) or proximal (popliteal and above).",
    epidemiology:"Incidence 1–2/1000/year. Annual recurrence rate 5–10%. Risk factors: Virchow's triad — stasis (immobility, surgery), hypercoagulability (cancer, thrombophilia), endothelial injury.",
    pathophysiology:"Platelet-fibrin thrombus forms at valve cusps where stasis occurs. Propagation proximally increases PE risk. Inflammatory response causes valvular destruction → post-thrombotic syndrome (PTS) in 20–50%.",
    classification:[{label:"Distal (calf) DVT",note:"Below popliteal; lower PE risk; anticoagulate if high-risk features"},{label:"Proximal DVT",note:"Popliteal and above; higher PE risk — anticoagulate all"},{label:"Iliofemoral DVT",note:"Highest morbidity; consider CDT to prevent PTS"},{label:"Provoked",note:"Identifiable trigger (surgery, immobility, pregnancy)"},{label:"Unprovoked",note:"No clear trigger — screen for malignancy and thrombophilia"}]
  },
  diagnosis:{
    history:["Unilateral leg swelling, pain, warmth, erythema","Recent surgery, immobility, long-haul travel, pregnancy","Personal/family history of VTE","Active malignancy, contraceptive pill use"],
    examination:["Calf/thigh swelling and tenderness","Homan's sign (unreliable — do not use alone)","Assess for signs of PE: tachycardia, hypoxia","Skin discolouration — phlegmasia alba/cerulea dolens in severe cases"],
    investigations:[{name:"Duplex US",role:"Gold standard; sensitivity >95% for proximal DVT; operator-dependent for distal"},{name:"D-dimer",role:"High sensitivity, low specificity; rules out VTE if Wells low probability"},{name:"CT venography",role:"Iliac/caval thrombus where duplex limited"},{name:"CT pulmonary angiogram",role:"If signs/symptoms of PE"},{name:"Thrombophilia screen",role:"Unprovoked DVT <50 yrs — 6 weeks after completing anticoagulation"},{name:"Age-appropriate cancer screen",role:"Unprovoked DVT >40 yrs"}]
  },
  criteria:{title:"Wells DVT score",items:[{k:"Low (0–1)",v:"D-dimer to exclude; if positive, duplex US"},{k:"Moderate (2–4)",v:"Duplex US regardless of D-dimer"},{k:"High (>4)",v:"Duplex US immediately; treat empirically if delay"},{k:"Proximal confirmed",v:"Anticoagulate; DOAC first-line (rivaroxaban day 1)"},{k:"Distal confirmed",v:"Anticoagulate if high-risk features (cancer, unprovoked, extensive)"}]},
  scoring:["wells-dvt"],
  management:{
    conservative:["Compression stockings (Grade II) — reduce PTS risk by ~50%","Early ambulation encouraged — does not increase PE risk","Elevation of affected limb"],
    medical:["DOAC: rivaroxaban 15 mg BD × 3 weeks then 20 mg OD (preferred)","LMWH: dalteparin/enoxaparin if DOAC unsuitable","Duration: provoked 3 months; unprovoked 3–6 months minimum; cancer — indefinite","LMWH preferred in active malignancy"],
    surgical:[{name:"Catheter-directed thrombolysis (CDT)",when:"Extensive iliofemoral DVT <14 days, low bleeding risk, good functional status",notes:"tPA via multi-sidehole catheter; reduces PTS severity"},{name:"Mechanical thrombectomy",when:"Phlegmasia cerulea dolens threatening limb viability",notes:"Rheolytic or aspiration devices; combine with CDT"},{name:"IVC filter",when:"Contraindication to anticoagulation with ongoing PE risk; recurrent PE on anticoagulation",notes:"Retrievable filter preferred; remove once anticoagulation possible"}]
  },
  technique:{
    title:"Catheter-directed thrombolysis — iliofemoral DVT",
    prep:["Admit to high-dependency unit","Consent including haemorrhage risk ~2–3% major bleeding","Access via ipsilateral popliteal vein under US guidance","Baseline coagulation, FBC, fibrinogen"],
    steps:[{n:1,t:"Venographic mapping",d:"Inject contrast to delineate thrombus extent."},{n:2,t:"Multi-sidehole catheter placement",d:"Position catheter within thrombus under fluoroscopy."},{n:3,t:"tPA infusion",d:"tPA 0.5–1 mg/hr; UFH 500 U/hr through sheath."},{n:4,t:"Serial fibrinogen checks",d:"Check every 6h; stop if fibrinogen <1 g/L."},{n:5,t:"Venography at 24h",d:"Reassess thrombus burden; reposition catheter as needed."},{n:6,t:"Treat underlying stenosis",d:"Balloon angioplasty ± stent for May-Thurner or iliac stenosis."}],
    pearls:["Address underlying iliac vein compression (May-Thurner) — treat with stent","Monitor fibrinogen q6h — stop if <1 g/L","Ipsilateral popliteal access allows whole-clot contact"]
  },
  guidelines:[{src:"NICE NG158 2020",url:"Venous thromboembolic diseases: diagnosis, management and thrombophilia testing"},{src:"ESC 2019",url:"Acute pulmonary embolism guidelines"}],
  pearls:["DOAC is now first-line — same efficacy, less bleeding than warfarin","Iliofemoral DVT: consider CDT within 14 days to reduce PTS","Unprovoked DVT: always screen for occult malignancy"],
  mistakes:["Stopping anticoagulation at 3 months for unprovoked DVT without reassessment","Not treating distal DVT in cancer patients — high propagation risk","Using warfarin in active cancer — LMWH or DOAC has superior efficacy"]},

  {id:"taa",dept:"vascular",name:"Thoracic Aortic Aneurysm",organ:"Thoracic aorta",severity:"high",
  tags:["TAA","TEVAR","Marfan","open","aortic root"],
  hero:"Dilation of the thoracic aorta ≥4.5 cm with risk of rupture, dissection, or aorto-enteric fistula.",
  keypoints:["Elective repair threshold: ascending ≥5.5 cm (≥5.0 cm Marfan/BAV); descending ≥6.0 cm (TEVAR) or ≥6.5 cm (open)","10-year rupture risk: 43% for thoracic vs 65% for abdominal at equivalent diameter","TEVAR mortality 2–5% vs open 10–15% for descending TAA","Spinal cord ischaemia risk 3–7% with TEVAR — CSF drainage reduces risk","Bicuspid aortic valve and Marfan syndrome require lower repair thresholds"],
  differentials:["Aortic dissection","Mediastinal tumour","Aortic pseudoaneurysm","Aortic coarctation","Penetrating aortic ulcer"],
  mnemonics:[{name:"Repair thresholds",text:"Ascending: ≥5.5 cm (or 5.0 Marfan/BAV)\nArch: ≥5.5–6.0 cm\nDescending: ≥6.0 cm TEVAR, ≥6.5 open\nExpansion >0.5 cm/yr = repair regardless of size"}],
  overview:{
    definition:"True aneurysm of the thoracic aorta involving all three layers; defined as diameter ≥1.5× expected (≥4.5 cm for ascending, ≥3.5 cm for descending).",
    epidemiology:"Incidence 6–10/100,000/year. M>F 2:1. Mean age 59 years. Associated with hypertension (60%), atherosclerosis, Marfan, Loeys-Dietz, bicuspid AV. 5-year survival untreated if >6 cm: ~10%.",
    pathophysiology:"Medial degeneration (cystic medial necrosis) leads to elastin fragmentation and smooth muscle loss. Genetic disorders (FBN1, TGFBR1/2 mutations) accelerate this. Atherosclerosis drives descending TAA. Wall stress follows Laplace's law.",
    classification:[{label:"Type I (DeBakey)",note:"Ascending + arch + descending"},{label:"Type II (DeBakey)",note:"Ascending and arch only"},{label:"Type III (DeBakey)",note:"Descending only — below left subclavian"},{label:"Crawford I–IV",note:"Extent classification for thoracoabdominal aneurysms"}]
  },
  diagnosis:{
    history:["Often asymptomatic — incidental on chest imaging","Chest/back pain suggests expansion or impending rupture","Hoarseness (recurrent laryngeal nerve compression)","Dysphagia, stridor (tracheal/oesophageal compression)","Family history of aortic disease"],
    examination:["Wide pulse pressure (aortic regurgitation from root dilation)","Diastolic murmur at right sternal edge (AR)","Pulsatile mass (rarely palpable in thoracic aorta)","Stigmata of Marfan: tall, span>height, arachnodactyly, high arched palate"],
    investigations:[{name:"CT angiogram chest/abdomen",role:"Gold standard — diameter, extent, anatomy for planning"},{name:"Echocardiography (TTE/TOE)",role:"Aortic root, valve, and cardiac function assessment"},{name:"MRI/MRA",role:"Surveillance of Marfan/connective tissue disorders"},{name:"Genetic testing",role:"FBN1, TGFBR1/2 if Marfan/Loeys-Dietz suspected"},{name:"CXR",role:"Widened mediastinum may suggest TAA or dissection"}]
  },
  criteria:{title:"Repair thresholds (AHA/ACC/EACTS 2022)",items:[{k:"Ascending ≥5.5 cm",v:"Elective surgical repair"},{k:"Ascending ≥5.0 cm",v:"Marfan syndrome, bicuspid AV, family history of dissection"},{k:"Descending ≥6.0 cm",v:"TEVAR recommended"},{k:"Descending ≥5.5 cm",v:"TEVAR in Marfan/connective tissue disorder"},{k:"Expansion >0.5 cm/yr",v:"Repair regardless of absolute diameter"},{k:"Symptomatic",v:"Repair regardless of size"}]},
  scoring:["stanford","debakey"],
  management:{
    conservative:["BP target <120/80 (β-blocker preferred)","Surveillance CT every 6–12 months","Smoking cessation; statin therapy","Genetic counselling for heritable disorders"],
    medical:["β-blockers (atenolol/bisoprolol) — reduce expansion rate in Marfan","ARBs (losartan) in Marfan — reduce TGF-β mediated degeneration"],
    surgical:[{name:"TEVAR (thoracic endovascular aortic repair)",when:"Descending TAA ≥6 cm, suitable anatomy (≥2 cm landing zone)",notes:"Preferred for descending; 2–5% mortality; CSF drainage reduces SCI"},{name:"Open repair (ascending)",when:"Ascending TAA ≥5.5 cm; aortic root replacement if root >4.5 cm",notes:"Requires CPB; Bentall procedure if root involved"},{name:"Hybrid arch repair",when:"Complex arch or extent I–II thoracoabdominal",notes:"Debranching + TEVAR; reduces CPB complexity"}]
  },
  technique:{
    title:"TEVAR — thoracic endovascular aortic repair",
    prep:["GA or spinal; TEE monitoring","Bilateral femoral access + left brachial access for pigtail catheter","Spinal drain for CSF monitoring if >20 cm coverage or prior AAA repair","C-arm fluoroscopy; heparinise (100 U/kg)"],
    steps:[{n:1,t:"Bilateral femoral access",d:"Surgical cut-down or percutaneous; 18–22Fr sheath."},{n:2,t:"Aortogram",d:"Pigtail from left brachial; mark left subclavian and distal landing zone."},{n:3,t:"Stiff wire placement",d:"Lunderquist wire via femoral into ascending aorta."},{n:4,t:"Device deployment",d:"Advance endograft to target zone; deploy under rapid pacing (or controlled hypotension) to minimise movement."},{n:5,t:"Ballooning",d:"Gentle moulding balloon to ensure proximal seal — avoid vigorous inflation."},{n:6,t:"Completion angiogram",d:"Assess for endoleak types I, II, III; assess left subclavian patency."},{n:7,t:"Access closure",d:"Repair femoral arteries; protamine reversal."}],
    pearls:["Left subclavian coverage without revascularisation risks arm ischaemia and SCI — plan carotid-subclavian bypass if needed","CSF drain reduces Type II SCI risk from 10% to 3%","Avoid systemic hypertension post-op — risks retrograde dissection"]
  },
  guidelines:[{src:"ESC 2014 (updated 2022)",url:"Guidelines on the management of aortic diseases"},{src:"AHA/ACC 2022",url:"Thoracic aortic aneurysm and dissection guideline"}],
  pearls:["Family screening essential — first-degree relatives have 15–20% risk","TEVAR surveillance with CT at 1 month, 12 months, then annually","Arch coverage risk: stroke ~3%, SCI ~5%"],
  mistakes:["Operating on Marfan without adequate root and valve assessment","TEVAR without planning for spinal cord protection","Failing to exclude dissection (type A) before initiating anticoagulation in acute chest pain"]},

  {id:"aortic-dissection",dept:"vascular",name:"Acute Aortic Dissection",organ:"Thoracic/abdominal aorta",severity:"high",
  tags:["Stanford","DeBakey","TEVAR","emergency","intimal tear"],
  hero:"Tear in the aortic intima creating a false lumen — Stanford Type A requires emergency cardiac surgery, Type B managed medically unless complicated.",
  keypoints:["Stanford Type A (ascending involved): emergency surgery — ~1–2% mortality per hour untreated","Stanford Type B uncomplicated: medical management (β-blocker, target SBP 100–120 mmHg)","Complicated Type B (malperfusion, expansion): TEVAR","Classic presentation: tearing/ripping chest pain radiating to back; BP differential >20 mmHg","D-dimer >500 ng/mL has high sensitivity; CT angiogram is diagnostic"],
  differentials:["Acute coronary syndrome","Pulmonary embolism","AAA rupture","Oesophageal rupture","Pericarditis"],
  mnemonics:[{name:"Stanford Classification",text:"Type A = Ascending aorta involved → Surgery\nType B = descending only (Beyond left subclavian) → Medical (unless complicated)"}],
  overview:{
    definition:"Longitudinal tear in the aortic intima allowing blood to enter the media, creating a true and false lumen. Type A (ascending) is a surgical emergency with ~50% 48h mortality untreated.",
    epidemiology:"Incidence 3–4/100,000/year. Mean age 63 (Type A), 67 (Type B). M:F = 2:1. Risk factors: hypertension (75%), Marfan syndrome, bicuspid AV, cocaine, pregnancy.",
    pathophysiology:"Intimal tear (most common at aortic root) propagates proximally and distally under pulsatile pressure, creating false lumen. False lumen can compress true lumen causing malperfusion of coronary, cerebral, visceral, spinal, or limb arteries.",
    classification:[{label:"Stanford Type A",note:"Involves ascending aorta — emergency surgery regardless of distal extent"},{label:"Stanford Type B",note:"Descending only — medical management unless complicated"},{label:"DeBakey I",note:"Ascending + descending"},{label:"DeBakey II",note:"Ascending only"},{label:"DeBakey III",note:"Descending only (IIIa above diaphragm; IIIb below)"}]
  },
  diagnosis:{
    history:["Sudden onset severe chest/back/abdominal pain — 'tearing' or 'ripping' quality","Maximum pain at onset (unlike ACS which builds)","Syncope, stroke symptoms, limb ischaemia, paraplegia","History of hypertension, Marfan, or prior aortic disease"],
    examination:["BP differential between arms >20 mmHg","Pulse deficit (aortic branch occlusion)","Aortic regurgitation murmur in Type A","Neurological deficits if carotid or spinal arteries affected","Cardiac tamponade signs (Type A with haemopericardium)"],
    investigations:[{name:"CT angiogram chest/abdomen/pelvis",role:"Gold standard — defines type, extent, malperfusion"},{name:"CXR",role:"Widened mediastinum (>8 cm) in 60%; may be normal"},{name:"ECG",role:"ST changes suggest coronary malperfusion (RCA origin most common)"},{name:"TOE",role:"ICU/theatre if too unstable for CT — intimal flap, AR, effusion"},{name:"D-dimer",role:"High sensitivity for dissection when clinical probability low"}]
  },
  criteria:{title:"Stanford classification and management",items:[{k:"Type A",v:"Any involvement of ascending aorta — emergency surgery (median sternotomy, CPB, ascending/arch replacement)"},{k:"Uncomplicated Type B",v:"IV anti-impulse therapy: β-blocker target HR <60, SBP 100–120 mmHg"},{k:"Complicated Type B",v:"Malperfusion, uncontrolled pain, expansion ≥1 cm/yr, rupture — TEVAR"},{k:"Timing",v:"Type A: surgery within hours; Type B: anti-impulse therapy immediately, TEVAR if indicated"}]},
  scoring:["stanford","debakey"],
  management:{
    conservative:["Type B: strict anti-impulse therapy","Target SBP 100–120 mmHg, HR <60 bpm","IV access, monitoring in high-dependency environment","Pain control: IV opioid"],
    medical:["IV labetalol first-line (both HR and BP reduction)","IV esmolol if severe tachycardia","Sodium nitroprusside if BP refractory (after β-blockade)","Long-term: oral β-blocker, ARB; BP target <130/80"],
    surgical:[{name:"Emergency ascending aorta replacement (Type A)",when:"All Type A dissections",notes:"Median sternotomy; CPB; replace ascending ± arch; Bentall if root involved"},{name:"TEVAR (complicated Type B)",when:"Malperfusion, uncontrolled pain, expansion, rupture",notes:"Cover intimal tear; restores true lumen flow; 86% favourable aortic remodelling"},{name:"Fenestration/branch stenting",when:"Visceral/limb malperfusion without proximal intimal tear coverage",notes:"Re-equalises true/false lumen pressures; restores branch flow"}]
  },
  technique:{
    title:"Emergency ascending aorta replacement (Type A dissection)",
    prep:["Emergency call to cardiac surgery; activate perfusion team","Full monitoring: arterial line (right radial preferred), CVP, TOE","Median sternotomy preparation; CPB team on standby","Cross-match 6 units; FFP/platelets available"],
    steps:[{n:1,t:"Median sternotomy",d:"Rapid entry; careful if haemopericardium (tamponade physiology)."},{n:2,t:"Cannulation",d:"Femoral or axillary arterial cannulation (not central — dissected aorta); venous: right atrium."},{n:3,t:"CPB + hypothermia",d:"Cool to 18–28°C for circulatory arrest if arch involved."},{n:4,t:"Aortic cross-clamp + cardioplegia",d:"Antegrade or retrograde; arrest heart for anastomosis."},{n:5,t:"Ascending resection",d:"Transect at sinotubular junction proximally, above innominates distally."},{n:6,t:"Arch work if needed",d:"During circulatory arrest: hemi-arch or total arch replacement with elephant trunk if arch involved."},{n:7,t:"Graft anastomosis",d:"Proximal to sinuses (root replacement if needed); distal to arch under arrest."}],
    pearls:["Axillary cannulation preferred — avoids false lumen entry","Assess coronary ostia for dissection involvement — may need reimplantation","Protect spinal cord with CSF drain if circulatory arrest >30 min"]
  },
  guidelines:[{src:"ESC 2014/2022",url:"Guidelines on management of aortic diseases"},{src:"AHA/ACC 2022",url:"Thoracic aortic disease guideline"}],
  pearls:["Every Type A dissection is a surgical emergency — no exceptions","Anti-impulse therapy must precede all imaging in suspected Type B","Long-term surveillance CT every 6–12 months for chronic dissection"],
  mistakes:["Giving thrombolytics before excluding dissection in chest pain","Delay in activating cardiac surgery for Type A","Missing coronary malperfusion — ECG change in RCA territory","Inadequate BP control in Type B leading to expansion"]},

  {id:"pad",dept:"vascular",name:"Peripheral Arterial Disease",latin:"Arteriosclerosis obliterans",organ:"Lower limb arteries",severity:"moderate",
  tags:["claudication","ABI","angioplasty","Fontaine","Rutherford","atherosclerosis"],
  hero:"Atherosclerotic occlusive disease of lower limb arteries causing intermittent claudication; ABI <0.9 confirms diagnosis.",
  keypoints:["ABI 0.5–0.9 = claudication; <0.4 = CLTI","5-year risk of limb loss in claudicants: ~2%; cardiovascular mortality 20–30%","Exercise therapy is first-line for claudication — equal to angioplasty at 2 years","Ankle pressure <50 mmHg or ABI <0.3 indicates critical ischaemia","Cilostazol reduces claudication distance by ~50%"],
  differentials:["Spinal stenosis (neurogenic claudication)","Venous claudication","Hip arthritis","Popliteal artery entrapment","Chronic exertional compartment syndrome","Musculoskeletal pain"],
  mnemonics:[{name:"Fontaine Classification",text:"I = Asymptomatic\nIIa = Claudication >200m\nIIb = Claudication <200m\nIII = Rest pain\nIV = Tissue loss (ulcer/gangrene)"}],
  overview:{
    definition:"Atherosclerotic occlusive disease of the peripheral arteries causing ischaemia-related symptoms ranging from intermittent claudication to critical limb-threatening ischaemia.",
    epidemiology:"Prevalence 3–10% in adults >55 yrs; rises to 15–20% in >70 yrs. M>F. Strong association with smoking, diabetes, hypertension, and dyslipidaemia. Ankle-brachial index <0.9 is diagnostic.",
    pathophysiology:"Atherosclerotic plaque causes progressive arterial narrowing. During exercise, increased metabolic demand cannot be met — muscle ischaemia produces lactic acid and causes cramping. At rest, perfusion sufficient to prevent symptoms.",
    classification:[{label:"Fontaine I",note:"Asymptomatic — ABI <0.9"},{label:"Fontaine IIa",note:"Claudication beyond 200 metres"},{label:"Fontaine IIb",note:"Claudication within 200 metres"},{label:"Fontaine III",note:"Rest pain — same as Rutherford 4"},{label:"Fontaine IV",note:"Tissue loss — ulcer or gangrene"}]
  },
  diagnosis:{
    history:["Cramping calf/thigh/buttock pain on walking, relieved by rest within minutes","Claudication distance — how far before onset","Risk factors: smoking, diabetes, hypertension, hyperlipidaemia, family history","Impotence (Leriche syndrome: aortoiliac occlusion + impotence + wasting)"],
    examination:["ABI <0.9 confirms diagnosis; 0.5–0.9 = claudication","Absent/reduced pulses; coolness; skin changes","Bruit over femoral/aortoiliac region","Capillary refill time >2 seconds"],
    investigations:[{name:"Ankle-brachial index",role:"Diagnostic; <0.9 = PAD; exercise ABI if resting normal"},{name:"Duplex US",role:"Identifies stenosis site and severity"},{name:"CT angiogram",role:"Pre-intervention planning — aorta to foot"},{name:"Treadmill exercise test",role:"Standardises claudication distance; confirms arterial cause"},{name:"Fasting lipids, glucose, HbA1c",role:"Risk factor assessment"}]
  },
  criteria:{title:"ABI interpretation",items:[{k:">1.0",v:"Normal"},{k:"0.9–1.0",v:"Borderline"},{k:"0.5–0.9",v:"Claudication"},{k:"0.4–0.5",v:"Severe claudication / early CLTI"},{k:"<0.4",v:"Critical limb-threatening ischaemia"},{k:">1.3",v:"Non-compressible (calcified) — use toe pressure"}]},
  scoring:["rutherford","fontaine"],
  management:{
    conservative:["Supervised exercise therapy (SET): 30 min 3×/week — most effective for claudication","Smoking cessation","Structured walking programme"],
    medical:["Antiplatelet: aspirin 75 mg or clopidogrel 75 mg","High-intensity statin (atorvastatin 80 mg)","BP control <130/80; ACEi preferred","Cilostazol 100 mg BD — improves walking distance ~50% (phosphodiesterase III inhibitor)"],
    surgical:[{name:"Endovascular (PTA ± stent)",when:"Lifestyle-limiting claudication failing exercise therapy; suitable anatomy (TASC A/B lesions)",notes:"Aortoiliac: excellent results with stenting; femoropopliteal: drug-coated balloon improves patency"},{name:"Bypass surgery",when:"TASC C/D lesions, failed endovascular, young fit patients",notes:"Aorto-bifemoral for aortoiliac occlusive disease; femoro-popliteal for SFA disease"},{name:"Endarterectomy",when:"Common femoral artery bifurcation disease",notes:"CFA endarterectomy ± profundaplasty — durable result"}]
  },
  technique:{
    title:"Aorto-bifemoral bypass for aortoiliac occlusive disease",
    prep:["GA + epidural; arterial line, large bore IV","Supine; abdomen and bilateral groins prepped","Cross-match 4 units; cell salvage","Pre-op IV antibiotics"],
    steps:[{n:1,t:"Bilateral groin exposure",d:"Vertical groin incisions; expose CFA, profunda, SFA. Control with slings."},{n:2,t:"Midline laparotomy",d:"Xiphoid to pubis; identify aortic neck below renal arteries."},{n:3,t:"Retroperitoneal tunnel",d:"Blunt dissection posterior to inguinal ligament bilaterally for graft limbs."},{n:4,t:"Proximal anastomosis",d:"Transperitoneal or retroperitoneal approach; end-to-end or end-to-side aortic anastomosis. 2-0 Prolene."},{n:5,t:"Graft tunnelling",d:"Pass bifurcated Dacron limbs through retroperitoneal tunnels to groins."},{n:6,t:"Distal anastomoses",d:"End-to-side to CFA bilaterally with 4-0 Prolene."},{n:7,t:"Restore flow",d:"Sequential declamping; check femoral pulses and Doppler signals."},{n:8,t:"Close retroperitoneum",d:"Cover graft with retroperitoneum to prevent aortoenteric fistula; close abdomen."}],
    pearls:["Preserve hypogastric arteries where possible — prevents buttock claudication and impotence","Re-implant IMA if poor back-bleeding or marginal colonic perfusion","Cover graft completely with retroperitoneum or omentum"]
  },
  guidelines:[{src:"NICE NG19 2020",url:"Peripheral arterial disease: diagnosis and management"},{src:"ESC 2017",url:"Guidelines on peripheral arterial diseases"}],
  pearls:["Exercise therapy and statins reduce cardiovascular events — more important than revascularisation for claudicants","Treat the patient not the ABI — revascularise only if lifestyle significantly impaired","CFA endarterectomy is underused — excellent durable result"],
  mistakes:["Revascularising mild claudicants without adequate trial of exercise therapy","Angioplasty of femoropopliteal disease without drug-coated balloon — worse patency","Neglecting best medical therapy pre-intervention"]},

  {id:"mesenteric-isch",dept:"vascular",name:"Acute Mesenteric Ischaemia",organ:"Superior mesenteric artery",severity:"high",
  tags:["SMA","embolus","thrombosis","bowel ischaemia","peritonitis"],
  hero:"Sudden reduction in mesenteric blood flow causing bowel infarction — mortality 60–80% without rapid diagnosis and intervention.",
  keypoints:["'Pain out of proportion to examination' — classical early presentation","Embolus (50%) most common cause: AF source; occurs at SMA origin","CT angiogram is essential — shows occlusion level and bowel viability","Early revascularisation (within 6h) before bowel necrosis critical","Damage control: revascularise, reassess 12–24h, second-look laparotomy"],
  differentials:["Peritonitis (perforated viscus)","Pancreatitis","Aortic dissection","Bowel obstruction","Ischaemic colitis","Severe gastroenteritis"],
  mnemonics:[{name:"Causes of AMI — 4 types",text:"1. Arterial embolus (50%) — usually AF\n2. Arterial thrombosis (25%) — atherosclerosis\n3. Non-occlusive (20%) — low-flow state\n4. Venous thrombosis (5%) — hypercoagulable"}],
  overview:{
    definition:"Acute interruption of mesenteric blood flow causing intestinal ischaemia and infarction. The superior mesenteric artery supplies the entire small bowel and right colon. Mortality 60–80% once bowel necrosis established.",
    epidemiology:"Incidence 1–2/100,000/year. Rising due to ageing population. Most are >60 yrs with cardiovascular comorbidities. Embolic AMI most common cause (50%), classically from AF or recent MI.",
    pathophysiology:"Intestinal mucosa is most sensitive to ischaemia (tolerance: 2–4h). Reperfusion injury worsens bowel viability after revascularisation. Translocation of bacteria through ischaemic gut wall causes sepsis even before full-thickness necrosis.",
    classification:[{label:"Arterial embolus",note:"Sudden onset; AF source; embolus lodges at SMA origin or at jejunal branches"},{label:"Arterial thrombosis",note:"Acute-on-chronic; atherosclerotic SMA; post-prandial pain prodrome ('intestinal angina')"},{label:"Non-occlusive (NOMI)",note:"Splanchnic vasoconstriction — shock, post-cardiac surgery, vasopressors"},{label:"Mesenteric venous thrombosis",note:"Subacute; hypercoagulable state; anticoagulation treatment"}]
  },
  diagnosis:{
    history:["Sudden severe periumbilical pain — disproportionate to signs early","Nausea, vomiting, diarrhoea (early — gut emptying)","Previous AF, recent MI, or atherosclerotic disease","Bloody stools late sign — indicates bowel necrosis"],
    examination:["Early: soft abdomen despite severe pain — 'pain out of proportion'","Late: peritonism, guarding, rigidity — indicates transmural necrosis","Tachycardia, hypotension — early resuscitation required","Raised lactate and metabolic acidosis — ominous sign"],
    investigations:[{name:"CT angiogram abdomen/pelvis",role:"Gold standard — shows occlusion, bowel wall thickening, pneumatosis, portal gas"},{name:"Lactate",role:"Elevated in ischaemia; normal does not exclude early disease"},{name:"FBC/CRP/amylase",role:"Marked leucocytosis; amylase mildly elevated"},{name:"ABG",role:"Metabolic acidosis indicates infarction"},{name:"ECG",role:"Identify AF as embolic source"}]
  },
  criteria:{title:"Diagnosis and urgency thresholds",items:[{k:"Suspected AMI",v:"CT angiogram immediately — no delays for other investigations"},{k:"Peritonism present",v:"Immediate laparotomy — no time for intervention"},{k:"Pneumatosis intestinalis",v:"Transmural bowel infarction — laparotomy required"},{k:"Revascularisation window",v:"<6h from onset for viable bowel salvage"},{k:"Second-look laparotomy",v:"12–24h after revascularisation to reassess bowel viability"}]},
  scoring:[],
  management:{
    conservative:["Aggressive IV fluid resuscitation","Analgesia; NGT decompression","Broad-spectrum antibiotics (gram-negative + anaerobic cover)","Anticoagulate with UFH once diagnosis confirmed"],
    medical:["UFH infusion — prevents propagation","Broad-spectrum antibiotics (piperacillin-tazobactam + metronidazole)","Vasodilators (papaverine) for NOMI via SMA catheter"],
    surgical:[{name:"Embolectomy (open/endovascular)",when:"Embolic SMA occlusion without peritonism",notes:"Transverse arteriotomy; Fogarty balloon catheter; assess bowel at laparotomy"},{name:"Bypass or endarterectomy",when:"Thrombotic SMA occlusion",notes:"Antegrade aorto-SMA bypass preferred; endarterectomy for ostial disease"},{name:"Laparotomy ± bowel resection",when:"Peritonism or bowel infarction confirmed",notes:"Resect non-viable bowel; leave anastomosis to second-look (damage control); close temporary"},{name:"EVAR/TEVAR/endovascular SMA stenting",when:"Before bowel necrosis in suitable anatomy",notes:"Increasingly used first-line; lower morbidity than open"}]
  },
  technique:{
    title:"Open mesenteric embolectomy + bowel assessment",
    prep:["GA; rapid sequence induction; arterial line","Broad-spectrum IV antibiotics","Midline laparotomy prep; bowel clamps available","Vascular surgery + GI surgery teams"],
    steps:[{n:1,t:"Midline laparotomy",d:"Rapid entry; assess bowel viability — note colour, peristalsis, mesenteric pulse."},{n:2,t:"SMA exposure",d:"Retract transverse colon superiorly; expose root of mesentery; identify SMA at base."},{n:3,t:"Control SMA",d:"Proximal and distal control with silastic loops."},{n:4,t:"Arteriotomy + embolectomy",d:"Transverse arteriotomy; Fogarty catheter proximally and distally until back-bleeding and forward flow established."},{n:5,t:"Arteriotomy closure",d:"Primary closure or vein patch."},{n:6,t:"Bowel assessment",d:"Assess viability: pink colour, peristalsis, Doppler pulse. Observe 15 min after revascularisation."},{n:7,t:"Resect non-viable bowel",d:"Leave ends stapled; do not anastomose at this operation."},{n:8,t:"Temporary closure",d:"Bogota bag or wound VAC; return in 24–48h for second-look."}],
    pearls:["Do not anastomose bowel at damage control laparotomy — bowel is still oedematous and ischaemic","Demarcation of viable bowel only clear after 15 min reperfusion","If any doubt about viability — return to theatre"]
  },
  guidelines:[{src:"ESVS 2017",url:"Management of mesenteric ischaemia"},{src:"ESGAR 2021",url:"CT diagnosis of acute mesenteric ischaemia"}],
  pearls:["Pain out of proportion to abdominal signs = AMI until proven otherwise","Early CT angiogram saves lives — do not delay","After embolectomy, anticoagulate to prevent re-thrombosis"],
  mistakes:["Attributing acute severe abdominal pain to 'gastroenteritis' without CT","Attempting primary anastomosis at damage control laparotomy","Not performing second-look laparotomy after revascularisation"]},

  {id:"varicose-veins",dept:"vascular",name:"Varicose Veins",latin:"Varices venae saphenae",organ:"Superficial veins, lower limb",severity:"low",
  tags:["GSV","EVLA","foam sclerotherapy","CEAP","superficial venous incompetence"],
  hero:"Tortuous dilated superficial veins due to valvular incompetence; most commonly great saphenous vein (GSV) territory.",
  keypoints:["CEAP classification: C2 = varicose veins; C4 = skin changes; C6 = active ulcer","Saphenofemoral junction (SFJ) reflux underlies 80% of primary varicose veins","EVLA and RFA have lower complication rates than open surgery (NICE recommended)","Venous ulcers (C6) require compression therapy and treatment of underlying incompetence","Recurrence rate post-EVLA ~5–15% at 5 years"],
  differentials:["Deep vein insufficiency","Lymphoedema","Telangiectasia","Superficial thrombophlebitis","Klippel-Trenaunay syndrome (in young patients with extensive varices)"],
  mnemonics:[{name:"CEAP Classification",text:"C0 = no visible disease\nC1 = telangiectasia\nC2 = varicose veins\nC3 = oedema\nC4 = skin changes (eczema, lipodermatosclerosis)\nC5 = healed ulcer\nC6 = active ulcer"}],
  overview:{
    definition:"Tortuous, dilated, palpable subcutaneous veins >3mm diameter in the standing position, caused by incompetent valves in the superficial venous system.",
    epidemiology:"Prevalence 25–30% women, 15% men. Increases with age, pregnancy, prolonged standing, and positive family history. Estimated 1–2% of adults have venous ulceration (C6).",
    pathophysiology:"Primary valvular incompetence at SFJ or small saphenous junction allows reflux, causing hydrostatic pressure to increase in superficial veins. Venous hypertension leads to skin changes, lipodermatosclerosis, and ulceration over time.",
    classification:[{label:"CEAP C0–C1",note:"No/minor visible disease — telangiectasia/reticular veins (CEAP clinical class)"},{label:"CEAP C2",note:"Symptomatic varicose veins — aching, heaviness, itching"},{label:"CEAP C3–C4",note:"Oedema, skin changes — lipodermatosclerosis, haemosiderin deposition"},{label:"CEAP C5–C6",note:"Healed or active venous ulceration — requires treatment"}]
  },
  diagnosis:{
    history:["Aching, heaviness, itch, leg cramps — worse at end of day and in heat","Visible prominent veins; cosmetic concern","Previous DVT, phlebitis, pregnancy","Family history"],
    examination:["Trendelenburg test (tourniquet) to identify reflux level","CEAP clinical classification","Skin changes: eczema, lipodermatosclerosis, haemosiderin","Active ulcer — typically medial gaiter area"],
    investigations:[{name:"Duplex US",role:"Mandatory pre-treatment; maps SFJ, SSJ, perforators; confirms reflux >0.5 sec"},{name:"ABPI",role:"Before compression in patients with skin changes/ulcers — exclude arterial disease"},{name:"CT venography / MRI",role:"Recurrent varicose veins or suspected pelvic origin"}]
  },
  criteria:{title:"NICE indications for treatment (NG168)",items:[{k:"C2 symptomatic",v:"Offer endovenous treatment (EVLA, RFA, or foam sclerotherapy)"},{k:"C4–C6",v:"Offer treatment as priority to heal/prevent ulceration"},{k:"First-line",v:"EVLA or RFA preferred over surgery or foam sclerotherapy"},{k:"Foam sclerotherapy",v:"If EVLA/RFA unsuitable (short vein, tortuous anatomy)"},{k:"Open surgery",v:"Reserved for failed endovenous / complex anatomy"}]},
  scoring:["ceap"],
  management:{
    conservative:["Class II graduated compression stockings (23–32 mmHg)","Leg elevation; regular walking","Skin moisturiser and emollients for eczema","Wound care for venous ulcers: 4-layer compression bandaging (Charing Cross)"],
    medical:["Pentoxifylline for venous ulcers if compression alone insufficient"],
    surgical:[{name:"EVLA (endovenous laser ablation)",when:"SFJ reflux with GSV >6 mm, tortuosity not excessive",notes:"NICE first-line; 95% closure at 1 year; lower wound complication rate than surgery"},{name:"RFA (radiofrequency ablation)",when:"As for EVLA",notes:"Equivalent efficacy to EVLA; less peri-operative pain"},{name:"Foam sclerotherapy",when:"GSV <6mm, recurrent varices, perforator incompetence",notes:"Higher recurrence than EVLA; risk of visual disturbance and DVT"},{name:"Open surgery (SAPHENA phlebectomy)",when:"Failed endovenous, allergy to sclerosant, complex anatomy",notes:"SFJ flush ligation + vein stripping + stab avulsions"}]
  },
  technique:{
    title:"Endovenous laser ablation (EVLA) of great saphenous vein",
    prep:["Day-case procedure; no GA required (tumescent local anaesthesia)","Pre-op duplex US marking of GSV course","Supine; leg prepped; sterile technique","Laser unit (810–1470 nm) calibrated"],
    steps:[{n:1,t:"Ultrasound-guided access",d:"19G needle or microintroducer into GSV at knee level."},{n:2,t:"Wire and sheath placement",d:"0.035 wire; 5Fr sheath introduced; advance to SFJ under US."},{n:3,t:"Laser fibre insertion",d:"Advance fibre to 1.5–2 cm below SFJ."},{n:4,t:"Tumescent anaesthesia",d:"Inject tumescent solution (dilute LA + adrenaline) perivenous along GSV length under US — compresses vein and protects skin."},{n:5,t:"Fibre pullback and ablation",d:"Activate laser; withdraw fibre at 1 mm/sec maintaining 70–100 J/cm energy."},{n:6,t:"Phlebectomies",d:"Stab avulsions of residual varicosities through 2mm incisions."},{n:7,t:"Compression",d:"Apply class II compression stocking; mobilise immediately."}],
    pearls:["Maintain fibre ≥1.5 cm from SFJ to prevent DVT","Tumescent compression is crucial — prevents skin burns","Compression stocking for 2 weeks post-procedure"]
  },
  guidelines:[{src:"NICE NG168 2020",url:"Varicose veins: diagnosis and management"},{src:"ESVS 2022",url:"Clinical practice guidelines on chronic venous disease"}],
  pearls:["EVLA/RFA preferred — equivalent efficacy to surgery with faster recovery","Duplex US pre-procedure is mandatory — maps GSV anatomy","Treat underlying venous disease before wound care in venous ulcers"],
  mistakes:["Treating varicose veins without duplex to identify reflux source","Compression therapy without checking ABPI — may worsen arterial disease","Not treating deep venous incompetence — superficial treatment will fail"]},

  {id:"renal-artery-stenosis",dept:"vascular",name:"Renal Artery Stenosis",organ:"Renal artery",severity:"moderate",
  tags:["renovascular","hypertension","FMD","atherosclerosis","stenting","ACEi"],
  hero:"Narrowing of the renal artery causing renovascular hypertension and ischaemic nephropathy; commonest causes are atherosclerosis and fibromuscular dysplasia.",
  keypoints:["Atherosclerotic RAS accounts for 90% — usually ostial; young women (FMD) = 10%","Flash pulmonary oedema with bilateral RAS is a surgical emergency","ACEi/ARB can precipitate acute kidney injury in bilateral RAS — monitor creatinine carefully","ASTRAL and CORAL trials: stenting adds no benefit over medical therapy in most cases","FMD in young women: renal artery angioplasty (no stent) — excellent results"],
  differentials:["Essential hypertension","Primary hyperaldosteronism (Conn's)","Phaeochromocytoma","Renal parenchymal disease","Coarctation of the aorta"],
  mnemonics:[{name:"Clues to renovascular hypertension",text:"Young woman + hypertension = FMD\nResistant HTN + rising creatinine on ACEi = bilateral RAS\nFlash pulmonary oedema = bilateral RAS\nAbdominal bruit + severe HTN = RAS"}],
  overview:{
    definition:"Narrowing of one or both renal arteries causing haemodynamically significant reduction in renal perfusion, leading to renin-angiotensin activation, hypertension, and progressive ischaemic nephropathy.",
    epidemiology:"Prevalence 1–5% in hypertensive adults; higher in elderly with widespread atherosclerosis. FMD: young women aged 15–50, 5–10% bilateral. Atherosclerotic RAS progresses to occlusion in ~10–15% at 5 years.",
    pathophysiology:"Stenosis >60% reduces perfusion pressure, activating renin-angiotensin-aldosterone axis → angiotensin II causes systemic vasoconstriction and sodium retention. Chronically, reduced perfusion leads to nephron loss and ischaemic nephropathy.",
    classification:[{label:"Atherosclerotic",note:"Ostial (within 1 cm of aorta); bilateral in 30%; progressive"},{label:"Fibromuscular dysplasia (FMD)",note:"String of beads (medial fibroplasia); young women; non-progressive"},{label:"Other",note:"Takayasu arteritis, neurofibromatosis, post-radiation, dissection"}]
  },
  diagnosis:{
    history:["Hypertension onset <30 yrs or >55 yrs","Resistant hypertension (>3 drugs)","Worsening renal function on ACEi/ARB","Flash pulmonary oedema","Abdominal bruit"],
    examination:["Epigastric/flank bruit","High BP in both arms","Signs of hypertensive end-organ damage"],
    investigations:[{name:"Duplex US renal arteries",role:"First-line; PSV >200 cm/s or RAR >3.5 suggests significant stenosis"},{name:"CT/MRA angiogram",role:"Pre-procedure planning; avoids contrast in CKD with MRA"},{name:"Captopril renography",role:"Functional test — asymmetric uptake; largely replaced by imaging"},{name:"Renal US",role:"Assess kidney size; asymmetry (>1.5 cm difference suggests ischaemic atrophy)"},{name:"Serum renin/aldosterone",role:"Elevated PRA supports renovascular aetiology"}]
  },
  criteria:{title:"Indications for intervention",items:[{k:"FMD",v:"Percutaneous transluminal angioplasty (no stent) — BP cure rate ~40%, improvement ~50%"},{k:"Atherosclerotic — unilateral",v:"Medical management unless refractory hypertension or declining renal function"},{k:"Atherosclerotic — bilateral or solitary kidney",v:"Consider stenting if flash pulmonary oedema or rapidly declining renal function"},{k:"ASTRAL/CORAL trials",v:"No benefit of stenting over medical therapy for most atherosclerotic RAS"},{k:"Medical therapy",v:"ACEi or ARB + antihypertensives; check creatinine at 2 weeks"}]},
  scoring:[],
  management:{
    conservative:["Optimise BP: ACEi or ARB (monitor creatinine and K⁺)","Antiplatelet and statin therapy","Smoking cessation"],
    medical:["ACEi/ARB first-line (cautiously in bilateral RAS)","Statin + aspirin","Loop diuretic if fluid overload"],
    surgical:[{name:"Percutaneous renal artery stenting",when:"Bilateral atherosclerotic RAS with flash pulmonary oedema or rapidly declining renal function",notes:"Balloon-expandable stent for ostial lesions; patency ~75% at 5 years"},{name:"FMD angioplasty",when:"Young women with FMD and refractory hypertension",notes:"Plain balloon angioplasty — no stent; excellent BP response; minimal restenosis"},{name:"Open bypass (aorto-renal)",when:"Failed endovascular, complex anatomy, concomitant aortic surgery",notes:"Hepatorenal or splenorenal bypass in complex cases; high durability"}]
  },
  technique:{
    title:"Renal artery stenting (atherosclerotic ostial RAS)",
    prep:["Day-case or overnight; arterial access consent","Adequate IV hydration pre/post procedure; monitor creatinine","Femoral or brachial access","Pre-procedure: aspirin + clopidogrel ×5 days"],
    steps:[{n:1,t:"Femoral access",d:"Right common femoral artery; 6Fr sheath."},{n:2,t:"Renal angiogram",d:"Visceral flush from aorta to map renal arteries; selective catheterisation."},{n:3,t:"Wire crossing",d:"0.014 coronary wire across stenosis into renal parenchyma."},{n:4,t:"Pre-dilation",d:"Small balloon pre-dilation if severe stenosis."},{n:5,t:"Stent deployment",d:"Balloon-expandable stent slightly protrudes into aorta (1–2 mm) for ostial lesion coverage."},{n:6,t:"Post-dilation",d:"High-pressure balloon inside stent to full apposition."},{n:7,t:"Completion angiogram",d:"Confirm <30% residual stenosis and renal perfusion."}],
    pearls:["Ostial lesions need stent protruding slightly into aorta — do not place entirely in renal artery","Embolic protection device consider for high-risk cases","Monitor renal function at 24h and 2 weeks"]
  },
  guidelines:[{src:"ESC 2017",url:"Peripheral arterial diseases guidelines — renal chapter"},{src:"ACC/AHA 2013",url:"Management of atherosclerotic vascular disease"}],
  pearls:["FMD in young women responds excellently to angioplasty alone — cure rates ~40%","Check creatinine before and 2 weeks after starting ACEi in suspected RAS","Flash pulmonary oedema with bilateral RAS — urgent stenting indicated"],
  mistakes:["Starting ACEi without monitoring renal function in bilateral RAS","Stenting atherosclerotic RAS without confirmed clinical indication (ASTRAL/CORAL evidence)","Missing FMD in young hypertensive women"]},

  {id:"popliteal-aneurysm",dept:"vascular",name:"Popliteal Artery Aneurysm",organ:"Popliteal artery",severity:"moderate",
  tags:["aneurysm","thromboembolism","bypass","bilateral","tibial occlusion"],
  hero:"Most common peripheral artery aneurysm — >50% bilateral; thromboembolic complications cause acute limb ischaemia in 30–40% if untreated.",
  keypoints:["Defined as popliteal artery diameter >2 cm (or >1.5× normal adjacent segment)",">50% are bilateral — always image contralateral limb",">50% associated with AAA — abdominal US mandatory","Thrombosis or embolism causes acute limb ischaemia in 20–40% at 5 years","Elective repair with bypass graft for aneurysms >2 cm or with intraluminal thrombus"],
  differentials:["Baker's cyst","DVT","Soft tissue tumour","Haematoma","Lymph node enlargement"],
  mnemonics:[{name:"Rule of 50s",text:"50% bilateral popliteal aneurysms\n50% associated with AAA\n50% present with complications (thrombosis/embolism) if untreated"}],
  overview:{
    definition:"True dilation of the popliteal artery to >2 cm. Most common peripheral aneurysm (70% of all peripheral aneurysms). Complication of thrombosis, embolisation, or compression is the main danger.",
    epidemiology:"Prevalence 1% in men >65 yrs. M:F >30:1. Bilateral in >50%. Associated with AAA in 40–50%. Associated with other peripheral aneurysms (femoral, iliac).",
    pathophysiology:"Atherosclerotic medial degeneration causes localised dilation at the popliteal fossa. Turbulence promotes intraluminal thrombus formation — emboli to tibial vessels cause progressive runoff occlusion, reducing options for bypass.",
    classification:[{label:"<2 cm without thrombus",note:"Conservative — annual US surveillance"},{label:"≥2 cm or intraluminal thrombus",note:"Elective repair — bypass + aneurysm exclusion"},{label:"Acute thrombosis",note:"Emergency thrombolysis or bypass; run-off often poor"},{label:"Associated AAA",note:"Repair AAA first if both >threshold"}]
  },
  diagnosis:{
    history:["Pulsatile popliteal mass (30–40% palpable)","Acute leg ischaemia: pain, pallor, pulselessness (thrombosis)","Blue toe syndrome (embolisation to tibial vessels)","Compression symptoms: calf pain, DVT-like symptoms"],
    examination:["Palpable pulsatile mass in popliteal fossa","Peripheral pulses — tibial vessels may be reduced from prior embolisation","Contralateral popliteal fossa — bilateral in >50%","Abdominal aorta — associated AAA"],
    investigations:[{name:"Duplex US",role:"Diagnosis; measures diameter; detects intraluminal thrombus"},{name:"CT angiogram",role:"Pre-operative planning; assesses inflow, outflow, distal vessels"},{name:"Abdominal US",role:"Mandatory — associated AAA in 40–50%"},{name:"Venous duplex",role:"Rule out DVT and assess GSV for bypass conduit"}]
  },
  criteria:{title:"Indications for repair",items:[{k:"Diameter ≥2 cm",v:"Elective repair — bypass + ligation"},{k:"Intraluminal thrombus",v:"Repair regardless of size"},{k:"Symptomatic (ischaemia/embolism)",v:"Urgent repair"},{k:"Acute thrombosis",v:"Emergency — thrombolysis first if viable limb then bypass"}]},
  scoring:[],
  management:{
    conservative:["Antiplatelet therapy","Surveillance US every 12 months for <2 cm without thrombus","Smoking cessation"],
    medical:["Anticoagulation (LMWH bridge to warfarin/DOAC) in acute thrombosis while planning intervention"],
    surgical:[{name:"Open bypass + aneurysm exclusion",when:"Elective or symptomatic popliteal aneurysm ≥2 cm",notes:"Medial or posterior approach; GSV bypass above-to-below knee popliteal with ligation of aneurysm"},{name:"Endovascular stent-graft",when:"Selected cases — suitable anatomy, no flexion crossing stent",notes:"Lower early morbidity; higher re-intervention rate; avoid in young active patients"},{name:"Catheter-directed thrombolysis",when:"Acute thrombosis with viable limb and intact run-off",notes:"Dissolves tibial thrombus to improve outflow before bypass"}]
  },
  technique:{
    title:"Medial approach popliteal aneurysm bypass and exclusion",
    prep:["GA; supine with knee slightly flexed","Duplex vein mapping: confirm GSV suitability","Ipsilateral leg + groin prepped","Intra-operative completion angiogram available"],
    steps:[{n:1,t:"Above-knee popliteal exposure",d:"Medial thigh incision above knee; expose AK popliteal in adductor canal."},{n:2,t:"Below-knee popliteal exposure",d:"Medial lower leg incision; expose BK popliteal between gastrocnemius heads."},{n:3,t:"GSV harvest",d:"Harvest reversed or in-situ GSV from thigh/calf."},{n:4,t:"Heparinise",d:"70 U/kg IV; ACT >250 sec."},{n:5,t:"Proximal anastomosis",d:"End-to-side to AK popliteal with 5-0 Prolene."},{n:6,t:"Distal anastomosis",d:"End-to-side to BK popliteal with 6-0 Prolene."},{n:7,t:"Aneurysm exclusion",d:"Ligate aneurysm proximally and distally — do not excise (risk of peroneal nerve injury)."},{n:8,t:"Completion imaging",d:"Duplex or angiogram to confirm graft patency and excluded aneurysm."}],
    pearls:["Ligate not excise the aneurysm — avoids peroneal nerve injury","Image contralateral limb and abdomen — bilateral in >50%, associated AAA","Confirm tibial outflow pre-operatively — poor run-off is the main risk factor for bypass failure"]
  },
  guidelines:[{src:"ESVS 2019",url:"Management of popliteal artery aneurysms"},{src:"SVS 2021",url:"Peripheral aneurysms guideline"}],
  pearls:["Bilateral aneurysms and AAA association — always image fully","Thrombosis with poor tibial run-off = difficult salvage — repair before symptoms develop","Stent-graft in popliteal fossa has high fracture/failure rate — avoid in active patients"],
  mistakes:["Failing to image contralateral limb and aorta","Stent-grafting across the knee joint — high fracture rate","Not anticoagulating while planning intervention for acute thrombosis"]},

  {id:"carotid-body-tumour",dept:"vascular",name:"Carotid Body Tumour",latin:"Paraganglioma carotidis",organ:"Carotid bifurcation",severity:"low",
  tags:["paraganglioma","Shamblin","pulsatile mass","succinate dehydrogenase","neuroendocrine"],
  hero:"Rare paraganglioma arising from chemoreceptor tissue at the carotid bifurcation; splays the ICA and ECA; Shamblin classification guides surgical risk.",
  keypoints:["10% malignant, 10% bilateral, 10% familial (SDHx mutations — screen all)","Shamblin III (encases carotid arteries) has highest surgical risk — cranial nerve injury 20–30%","Pre-operative embolisation reduces intra-operative blood loss for large tumours","CT/MR angiogram shows pathognomonic 'lyre sign' (splaying of ICA/ECA)","Hereditary CBT: SDHB mutation associated with malignancy"],
  differentials:["Cervical lymphadenopathy","Carotid artery aneurysm","Branchial cyst","Salivary gland tumour","Lymphoma","Metastatic lymph node"],
  mnemonics:[{name:"Shamblin Classification",text:"I = Small, easily dissected from carotid\nII = Adherent to carotid, partially encompasses\nIII = Completely encases carotid arteries (highest risk)"}],
  overview:{
    definition:"Paraganglioma arising from the carotid body (chemoreceptor cells at carotid bifurcation). Usually benign but locally invasive. Malignancy defined by lymph node or distant metastasis (not histology alone).",
    epidemiology:"Rare: 0.01–0.02% of all tumours. Peak 40–50 yrs. 10% bilateral (higher in hereditary). Familial in 10–50% — associated with SDH mutations. Higher incidence at altitude (chronic hypoxic stimulation).",
    pathophysiology:"Derived from neural crest cells of the autonomic nervous system. Sustained hypoxia (e.g., altitude) and SDH mutations impair mitochondrial respiration, triggering HIF-1α pathway activation and tumour growth. Most are non-functional (secretory in <5%).",
    classification:[{label:"Shamblin I",note:"Small, easily mobilised; minimal carotid attachment"},{label:"Shamblin II",note:"Partially encases carotid; moderate risk"},{label:"Shamblin III",note:"Completely encases ICA and ECA; highest cranial nerve risk"}]
  },
  diagnosis:{
    history:["Slow-growing pulsatile neck mass at angle of mandible","Usually asymptomatic; occasional bruit","Dysphagia, hoarseness (cranial nerve involvement in large tumours)","Family history; high-altitude residence"],
    examination:["Pulsatile mass at carotid bifurcation, moves horizontally but not vertically","Non-tender; Fontaine sign — mobile side-to-side not up/down","Cranial nerve exam: IX, X, XI, XII","Bilateral neck examination"],
    investigations:[{name:"CT angiogram",role:"Lyre sign (ICA/ECA splaying); characterises vascularity and extent"},{name:"MRI neck",role:"Soft tissue extent; relationship to cranial nerves"},{name:"24h urine catecholamines/metanephrines",role:"Exclude secretory tumour before surgery (<5% functional)"},{name:"SDHB/C/D genetic testing",role:"All patients — especially bilateral or young onset"},{name:"MIBG scintigraphy",role:"Multiple paraganglioma screening; distant disease"}]
  },
  criteria:{title:"Surgical indication and staging",items:[{k:"All Shamblin I–II",v:"Surgical excision — low risk, good cure rate"},{k:"Shamblin III",v:"Surgery in experienced centre; consider pre-op embolisation"},{k:"Malignant CBT",v:"Surgery + radiotherapy; MIBG therapy for inoperable/metastatic"},{k:"Hereditary (SDHx)",v:"Surveillance vs surgery depending on growth rate and symptoms"},{k:"Pre-op embolisation",v:"Reduces blood loss for Shamblin II–III; perform 24–48h before surgery"}]},
  scoring:[],
  management:{
    conservative:["Active surveillance for small slow-growing tumours in elderly"],
    medical:["MIBG therapy or sunitinib for metastatic/unresectable malignant CBT"],
    surgical:[{name:"Surgical excision",when:"All resectable CBT — first-line treatment",notes:"Sub-adventitial dissection; vascular surgery backup for Shamblin III; perioperative nerve monitoring"},{name:"Pre-operative embolisation",when:"Large (>4 cm) or Shamblin III tumours",notes:"Reduces intra-operative bleeding; perform 24–48h before resection"}]
  },
  technique:{
    title:"Carotid body tumour excision (sub-adventitial dissection)",
    prep:["GA; arterial line; patient positioned as for CEA","Pre-op embolisation if Shamblin II–III","Consent for cranial nerve injury risk and vascular reconstruction","Vascular surgery backup team for Shamblin III"],
    steps:[{n:1,t:"Incision and exposure",d:"Along anterior SCM; expose carotid bifurcation."},{n:2,t:"Control ICA, ECA, CCA",d:"Encircle all three vessels; heparinise if cross-clamp planned."},{n:3,t:"Sub-adventitial plane",d:"Dissect in the sub-adventitial layer between tumour and vessel wall — the 'white line' of Gordon-Taylor."},{n:4,t:"Sequential feeding vessels",d:"Identify and ligate tumour feeding vessels from ECA systematically."},{n:5,t:"ICA liberation",d:"Dissect ICA free last — highest risk of injury."},{n:6,t:"Cranial nerve preservation",d:"Identify and preserve IX, X, XII throughout."}],
    pearls:["Gordon-Taylor plane: sub-adventitial is bloodless — stay in this layer","Shamblin III: have ICA patch repair ready","Cranial nerve monitoring electrode placement pre-incision"]
  },
  guidelines:[{src:"ESVS 2021",url:"Carotid body tumour — review and guidelines"},{src:"ESE/ENSAT 2014",url:"Hereditary phaeochromocytoma and paraganglioma"}],
  pearls:["Always check urinary catecholamines before operation — avoid adrenergic crisis","Screen all patients for SDH mutations — family implications","Shamblin III in specialist centre only"],
  mistakes:["Operating without excluding secretory tumour — hypertensive crisis on table","Not performing vascular reconstruction in Shamblin III when ICA damaged","Missing bilateral disease and associated paragangliomas"]},

  {id:"thoracic-outlet",dept:"vascular",name:"Thoracic Outlet Syndrome",organ:"Subclavian vessels / brachial plexus",severity:"moderate",
  tags:["TOS","neurogenic","vascular","first rib resection","cervical rib"],
  hero:"Compression of neurovascular structures at the thoracic outlet — neurogenic TOS accounts for 95% of cases; vascular TOS is rare but more urgent.",
  keypoints:["Neurogenic TOS (95%): brachial plexus (C8/T1) compression — arm pain/weakness/paraesthesia","Arterial TOS (1–5%): subclavian artery compression — aneurysm, thromboembolism","Venous TOS (Paget-Schroetter): effort thrombosis — subclavian vein","First rib resection ± cervical rib is definitive treatment for all types","Adson's test, Roos test (EAST) help confirm — EMG/nerve conduction confirm neurogenic"],
  differentials:["Cervical radiculopathy (C8/T1)","Carpal tunnel syndrome","Shoulder impingement","Brachial neuritis (Parsonage-Turner)","Raynaud's phenomenon","Subclavian steal"],
  mnemonics:[{name:"TOS Types — 3Ns",text:"Neurogenic (95%) = brachial plexus compression\nNeural-vascular overlap\nNon-neurogenic (vascular) = arterial (1%) or venous (4%) compression"}],
  overview:{
    definition:"Compression of the brachial plexus, subclavian artery, or subclavian vein in the thoracic outlet — the space between the clavicle, first rib, and scalene muscles.",
    epidemiology:"Neurogenic TOS: young women (F:M = 3:1); often with repetitive overhead activity or neck injury. Arterial TOS: cervical rib present in 70%. Venous TOS: young athletic males.",
    pathophysiology:"Three potential compression sites: scalene triangle (between anterior and middle scaleni and first rib), costoclavicular space, and subcoracoid space. Cervical rib or fibrous band creates additional compression. Repeated overhead movements stretch brachial plexus.",
    classification:[{label:"Neurogenic TOS",note:"C8/T1 compression — arm pain, hand weakness, hypothenar wasting"},{label:"Arterial TOS",note:"Subclavian artery stenosis/aneurysm → thromboembolism to hand"},{label:"Venous TOS (Paget-Schroetter)",note:"Effort thrombosis — subclavian vein; CDT + first rib resection"}]
  },
  diagnosis:{
    history:["Neurogenic: arm/hand pain, paraesthesia, weakness in C8/T1 distribution (little finger, medial forearm)","Arterial: cold hand, digital ischaemia, blue/white fingers","Venous: effort-related arm swelling, cyanosis, prominent superficial veins"],
    examination:["Adson's test: arm abduction + external rotation + head to affected side — diminished radial pulse","Roos/EAST test: arms elevated 90° external rotation × 3 min — reproduces symptoms","Neurological examination: hypothenar wasting, grip weakness","Cervical rib palpable in 10%"],
    investigations:[{name:"CXR/cervical spine X-ray",role:"Identify cervical rib or elongated C7 transverse process"},{name:"CT/MR angiogram",role:"Arterial TOS — subclavian aneurysm, stenosis, distal emboli"},{name:"Venous duplex / venography",role:"Venous TOS — subclavian vein thrombosis"},{name:"EMG/nerve conduction",role:"Neurogenic TOS — reduced MABC sensory amplitude confirms C8/T1 compression"},{name:"Dynamic US",role:"Compression of subclavian artery with arm manoeuvres"}]
  },
  criteria:{title:"Indications for surgery",items:[{k:"Neurogenic TOS",v:"Failed conservative treatment >3 months (physio, postural correction) + EMG-confirmed"},{k:"Arterial TOS",v:"Subclavian artery involvement (aneurysm, stenosis) — surgery regardless"},{k:"Venous TOS",v:"CDT within 2 weeks then first rib resection within 4–8 weeks"},{k:"Cervical rib",v:"Often resected at same time as first rib; treat the compression, not just the rib"}]},
  scoring:[],
  management:{
    conservative:["Physiotherapy: scalene and pectoral stretching, postural correction","Activity modification: avoid overhead repetitive work","NSAIDs for pain control","6 months of conservative management for neurogenic TOS"],
    medical:["Anticoagulation for venous TOS (Paget-Schroetter)","CDT for acute subclavian vein thrombosis"],
    surgical:[{name:"Transaxillary first rib resection",when:"Failure of conservative treatment; all vascular TOS",notes:"Most common approach; excellent access to first rib; decompresses all three spaces"},{name:"Supraclavicular approach",when:"Arterial TOS with subclavian aneurysm; better vascular reconstruction access",notes:"Divides anterior scalene; resects cervical rib and first rib; arterial reconstruction"},{name:"Infraclavicular approach",when:"Vascular reconstruction of subclavian artery",notes:"Used combined with supraclavicular for complex arterial cases"}]
  },
  technique:{
    title:"Transaxillary first rib resection",
    prep:["GA; lateral decubitus position","Arm extended overhead by assistant or mechanical holder","Mark brachial plexus territory — protect throughout","Pulse oximetry on hand — monitor for vascular compromise"],
    steps:[{n:1,t:"Transaxillary incision",d:"Transverse incision 3 cm below axillary hairline between pectoralis and latissimus dorsi."},{n:2,t:"Develop plane to first rib",d:"Blunt dissection over chest wall to first rib; protect intercostobrachial nerve."},{n:3,t:"Anterior scalene division",d:"Divide anterior scalene at first rib insertion — exposes subclavian artery."},{n:4,t:"Middle scalene division",d:"Divide at posterior first rib — decompress brachial plexus."},{n:5,t:"First rib division",d:"Divide anteriorly close to sternum and posteriorly to transverse process; extract rib fragment."},{n:6,t:"Cervical rib resection",d:"If present, resect cervical rib at same time."},{n:7,t:"Haemostasis and closure",d:"Ensure no apical pleural injury; drain if pneumothorax; close in layers."}],
    pearls:["Mark T1 nerve root — passes under first rib; at risk during posterior rib division","CXR post-op — detect pneumothorax","Physiotherapy starts within 24h post-op"]
  },
  guidelines:[{src:"SVS/STS 2016",url:"Thoracic outlet syndrome guidelines"},{src:"ESVS 2021",url:"Venous thoracic outlet syndrome and Paget-Schroetter"}],
  pearls:["Neurogenic TOS diagnosis is clinical — EMG confirms but normal EMG doesn't exclude","Paget-Schroetter (effort thrombosis): CDT + first rib resection — early intervention prevents PTS","Arterial TOS: always associated with cervical rib or bony anomaly"],
  mistakes:["Operating on neurogenic TOS without adequate trial of physiotherapy","Missing arterial TOS by not imaging in young patient with digital ischaemia","Not checking for pneumothorax post-transaxillary approach"]},

  {id:"visceral-aneurysm",dept:"vascular",name:"Splanchnic Artery Aneurysm",organ:"Splenic/hepatic/SMA artery",severity:"moderate",
  tags:["splenic artery","SAA","rupture","endovascular","hepatic artery aneurysm"],
  hero:"Most involve the splenic artery (60%); rupture risk highest in pregnancy; endovascular treatment is first-line for most.",
  keypoints:["Splenic artery aneurysm (SAA) accounts for 60% of all visceral aneurysms","Rupture risk: <1%/year overall; higher if >2 cm, pregnant, portal hypertension","'Double rupture' sign in SAA rupture — haemoperitoneum after initial contained retroperitoneal bleed","Hepatic artery aneurysm (HAA): 20%; mycotic/traumatic aetiology common; treat all if >2 cm","Endovascular exclusion (coil embolisation or covered stent) is first-line"],
  differentials:["Pancreatic pseudocyst","Celiac axis occlusion","Abdominal aortic aneurysm","Hepatic cyst","Metastatic lesion"],
  mnemonics:[{name:"SAA causes — 4Ps",text:"Portal hypertension\nPancreatitis (peripancreatic weakening)\nPregnancy (hormonal remodelling)\nPseudoaneurysm (post-trauma/endoscopy)"}],
  overview:{
    definition:"Aneurysmal dilation of the visceral arteries. Most common: splenic (60%), hepatic (20%), SMA (6%), coeliac (4%), other (10%).",
    epidemiology:"Incidence 0.1–0.2% at autopsy. SAA: F:M = 4:1; peak 40–60 yrs. Associated with portal hypertension, pancreatitis, pregnancy. Hepatic: often pseudoaneurysm post-trauma or intervention.",
    pathophysiology:"True aneurysms: medial degeneration, portal hypertension-related splenic hyperflow, hormonal changes (pregnancy) weaken arterial wall. Pseudoaneurysms: post-traumatic or iatrogenic (post-cholecystectomy, post-pancreatitis).",
    classification:[{label:"Splenic (SAA)",note:"60%; often calcified ('signet ring') on AXR; treat if >2 cm or symptomatic"},{label:"Hepatic (HAA)",note:"20%; right HA most common; mycotic/traumatic/iatrogenic common"},{label:"SMA aneurysm",note:"6%; usually at SMA origin; mycotic (infective endocarditis) most common"},{label:"Pseudoaneurysm",note:"Post-trauma/pancreatitis; any visceral artery; treat all regardless of size"}]
  },
  diagnosis:{
    history:["Often asymptomatic — incidental on imaging","Epigastric/left upper quadrant pain (symptomatic)","Rapid-onset haemoperitoneum (rupture)","History of pancreatitis, portal hypertension, prior trauma or intervention"],
    examination:["Pulsatile epigastric mass (rare)","Haemodynamic collapse if ruptured","Bruit on auscultation"],
    investigations:[{name:"CT angiogram",role:"Gold standard — size, anatomy, relations; identifies psedoaneurysms"},{name:"Duplex US",role:"Screening; less useful for SMA/coeliac"},{name:"Angiography",role:"Diagnostic and therapeutic in same setting"}]
  },
  criteria:{title:"Treatment thresholds",items:[{k:"SAA ≥2 cm",v:"Treat — endovascular preferred"},{k:"SAA in pregnancy/childbearing age",v:"Treat regardless of size"},{k:"HAA any size",v:"All should be treated"},{k:"SMA aneurysm",v:"Treat all; mycotic = IV antibiotics + early repair"},{k:"Pseudoaneurysm",v:"Treat all regardless of size — high rupture risk"}]},
  scoring:[],
  management:{
    conservative:["Surveillance for SAA <2 cm in non-pregnant postmenopausal women"],
    medical:["IV antibiotics for mycotic aneurysms (pre/post intervention)"],
    surgical:[{name:"Endovascular coil embolisation",when:"SAA >2 cm; distal SAA; pseudoaneurysm",notes:"First-line for SAA; splenic infarction in ~5%; preserve if possible"},{name:"Covered stent / endograft",when:"Hepatic artery, SMA aneurysm where visceral flow must be preserved",notes:"Preserves branch blood flow"},{name:"Open ligation/resection",when:"Failed endovascular; ruptured in haemodynamically unstable patient",notes:"SAA: splenectomy + aneurysm ligation; HAA: ligation if dual blood supply (hepatic artery/portal vein)"}]
  },
  technique:{
    title:"Endovascular coil embolisation — splenic artery aneurysm",
    prep:["Arterial access right femoral","Selective visceral catheterisation set available","Coils: loose-filling + packing coils available","Splenectomy backup planned"],
    steps:[{n:1,t:"Coeliac axis catheterisation",d:"Cobra or SOS catheter; selective coeliac angiogram; identify SAA and distal splenic artery."},{n:2,t:"Microcatheter advancement",d:"Coaxial microcatheter across aneurysm into distal splenic artery."},{n:3,t:"Distal occlusion",d:"Deploy coils distal to aneurysm — prevents back-filling via short gastric collaterals."},{n:4,t:"Aneurysm packing",d:"Pack aneurysm sac with coils."},{n:5,t:"Proximal occlusion",d:"Coils placed proximal to aneurysm — complete exclusion."},{n:6,t:"Post-embolisation angiogram",d:"Confirm aneurysm exclusion and splenic perfusion."}],
    pearls:["Distal embolisation before proximal — prevents back-filling from short gastrics","Check splenic perfusion — splenic infarction is common but usually well tolerated","Monitor for post-embolisation syndrome: fever, pain — usually self-limiting"]
  },
  guidelines:[{src:"ESVS/SVM 2022",url:"Splanchnic artery aneurysms guidelines"},{src:"SVS 2020",url:"Visceral artery aneurysm consensus"}],
  pearls:["All SAAs in women of childbearing age should be treated before pregnancy","Post-pancreatitis pseudoaneurysm: high rupture risk — treat urgently","Mycotic SMA aneurysm: treat concurrent infective endocarditis aggressively"],
  mistakes:["Surveilling hepatic artery aneurysm — all should be treated","Missing SAA in pregnancy — catastrophic rupture risk","Not treating pseudoaneurysms of any size"]},

  {id:"vascular-trauma",dept:"vascular",name:"Vascular Trauma",organ:"Major vessels",severity:"high",
  tags:["haemorrhage","damage control","shunting","REBOA","zone III","haemostatic resuscitation"],
  hero:"Injury to major vessels requiring haemorrhage control — temporary vascular shunting bridges to definitive repair; REBOA enables resuscitation in non-compressible haemorrhage.",
  keypoints:["Hard signs of vascular injury: pulsatile haemorrhage, expanding haematoma, absent distal pulse, bruit/thrill","Damage control: tourniquet → shunt → ICU stabilisation → definitive repair","REBOA (Resuscitative Endovascular Balloon Occlusion of Aorta): Zone I for abdominal, Zone III for pelvic haemorrhage","Fasciotomy mandatory after limb ischaemia >4–6h or limb swelling on reperfusion","Endovascular approaches increasingly used for zone I–III truncal injuries"],
  differentials:["Pseudoaneurysm (delayed presentation)","Arteriovenous fistula (post-penetrating trauma)","Haematoma without active bleeding","Compartment syndrome without arterial injury"],
  mnemonics:[{name:"Hard vs Soft signs of vascular injury",text:"HARD: Haemorrhage, Absent pulse, Rapidly expanding haematoma, Distal ischaemia\nSOFT: Small haematoma, Bruit, Wound near vessel, History of haemorrhage, Nerve deficit"}],
  overview:{
    definition:"Traumatic injury to major arteries or veins requiring vascular surgical intervention to control haemorrhage and restore perfusion. May be blunt (deceleration, crush) or penetrating (stabbing, gunshot).",
    epidemiology:"Vascular injury in 1–3% of trauma admissions. Extremity vessels most common (femoral, popliteal). Truncal vascular injury (aortic, iliac, mesenteric) carries highest mortality.",
    pathophysiology:"Penetrating trauma causes direct laceration or transection. Blunt trauma causes intimal tears, dissection, or avulsion. Ischaemia below injury threshold at 6h for skeletal muscle; 4h for nerve; reperfusion injury paradoxically worsens tissue damage.",
    classification:[{label:"Zone I",note:"Subclavian artery to diaphragm — truncal injury"},{label:"Zone II",note:"Extremity vessels — most amenable to compression/tourniquet"},{label:"Zone III",note:"Junctional (groin, axilla, neck) — non-compressible"},{label:"REBOA zones",note:"Zone I: descending thoracic (abdominal haemorrhage); Zone III: above bifurcation (pelvic haemorrhage)"}]
  },
  diagnosis:{
    history:["Mechanism: penetrating vs blunt; speed, angle, weapon type","Pain, paralysis, paraesthesia, pallor, poikilothermia, pulselessness — 6Ps of ischaemia","Loss of consciousness, haemodynamic compromise","Time of injury — ischaemia clock starts from injury"],
    examination:["Haemodynamic status: BP, HR, GCS","Hard signs: absent pulse, expanding haematoma, bruit, active haemorrhage","Ankle-brachial index <0.9 relative to contralateral → image","Neurological examination of affected limb"],
    investigations:[{name:"Doppler US",role:"Rapid bedside assessment; ABI <0.9 = injury likely"},{name:"CT angiogram",role:"Stable patients — gold standard for truncal and junctional injuries"},{name:"Formal angiography",role:"Therapeutic suite — diagnostic + intervention"},{name:"FAST/eFAST",role:"Haemoperitoneum/pericardial effusion in trauma bay"}]
  },
  criteria:{title:"Indications for exploration",items:[{k:"Hard signs",v:"Immediate operative exploration — no delay for imaging"},{k:"Haemodynamic instability",v:"Damage control surgery — tourniquet/REBOA/shunt"},{k:"Ankle-brachial index <0.9",v:"Further imaging or exploration required"},{k:"Expanding haematoma",v:"Operative exploration — risk of imminent rupture"},{k:"Popliteal artery injury",v:"Fasciotomy mandatory — high compartment syndrome risk"}]},
  scoring:[],
  management:{
    conservative:["Direct pressure for external haemorrhage","Tourniquet application for distal extremity — TCCC protocol","Permissive hypotension (SBP 80–90) until haemorrhage controlled"],
    medical:["Haemostatic resuscitation: 1:1:1 RBC:FFP:platelets","TXA within 3 hours of injury (CRASH-2 trial)","Damage control resuscitation — avoid crystalloid"],
    surgical:[{name:"Tourniquet/wound packing",when:"Extremity or junctional compressible haemorrhage",notes:"Junctional Emergency Treatment devices for groin/axilla"},{name:"REBOA",when:"Non-compressible torso haemorrhage (abdominal/pelvic) in extremis",notes:"Zone I: abdominal haemorrhage; Zone III: pelvic fracture haemorrhage"},{name:"Damage control surgery + temporary shunt",when:"Haemodynamically unstable vascular injury",notes:"Control haemorrhage, shunt artery, pack abdomen — definitive repair at 48–72h when stable"},{name:"Definitive repair",when:"Stable patient or after damage control stabilisation",notes:"Primary repair or interposition graft; fasciotomy when reperfusion time >4–6h"}]
  },
  technique:{
    title:"Damage control vascular surgery — temporary intraluminal shunt",
    prep:["Immediate operative theatre","Activate massive transfusion protocol","Have shunts (Pruitt-Inahara or Argyle) available — any size tube can serve as shunt","Antibiotic prophylaxis"],
    steps:[{n:1,t:"Proximal and distal control",d:"Finger pressure, clamps, or tourniquet — achieve haemostasis."},{n:2,t:"Vessel preparation",d:"Minimal dissection; identify vessel ends."},{n:3,t:"Thrombectomy",d:"Fogarty catheter proximally and distally — remove clot."},{n:4,t:"Shunt insertion",d:"Insert shunt into both vessel ends; secure with vessel loops or ties."},{n:5,t:"Confirm flow",d:"Doppler signal distal to shunt confirms patency."},{n:6,t:"Fasciotomy",d:"Four-compartment fasciotomy if ischaemia >4h or significant swelling."},{n:7,t:"Pack and close",d:"Pack wound; temporary abdomen closure (Bogota bag) or closure of extremity wound over shunt."}],
    pearls:["Shunt can stay in for 24–48h — return for definitive repair when physiologically stable","Fasciotomy should be performed liberally — missed compartment syndrome has catastrophic consequences","TXA within 3h of injury saves lives — give early"]
  },
  guidelines:[{src:"EAST PRESTO 2018",url:"Peripheral vascular injury management guidelines"},{src:"NICE MAJOR TRAUMA 2016",url:"Major trauma: assessment and initial management"}],
  pearls:["Damage control is life over limb — definitive repair can wait, exsanguination cannot","Fasciotomy is mandatory not optional after reperfusion of ischaemic limb >6h","REBOA requires training — misdeployment can worsen outcomes"],
  mistakes:["Attempting primary anastomosis in haemodynamically unstable patient — damage control first","Failing to perform fasciotomy after prolonged ischaemia","Missing posterior tibial or peroneal artery injury in popliteal trauma"]},

  {id:"lymphoedema",dept:"vascular",name:"Lymphoedema — Surgical",organ:"Lymphatic system",severity:"low",
  tags:["LVA","VLNT","Charles procedure","primary","secondary","lipoedema"],
  hero:"Chronic tissue swelling from lymphatic insufficiency — surgical options include LVA and vascularised lymph node transfer for functional restoration.",
  keypoints:["Secondary lymphoedema most common worldwide: filariasis; in UK/USA: post-breast cancer surgery/radiotherapy","International Society of Lymphology (ISL) staging: 0–III","Conservative treatment (CDT) is first-line — surgery reserved for failure or advanced disease","LVA (lymphaticovenous anastomosis) effective for early-moderate disease (ISL I–II)","Charles procedure (radical excision) reserved for massive irreversible stage III"],
  differentials:["Venous insufficiency oedema","Lipoedema (bilateral fat distribution, no pitting)","Cardiac/renal/hepatic oedema","Deep vein thrombosis","Filariasis","Dependency oedema"],
  mnemonics:[{name:"ISL Lymphoedema Staging",text:"0 = Subclinical (no swelling, lymphatic damage present)\nI = Pitting oedema, reduces with elevation\nII = No longer reduces with elevation; non-pitting\nIII = Lymphostatic elephantiasis — skin changes, papillomatosis"}],
  overview:{
    definition:"Accumulation of protein-rich interstitial fluid due to impaired lymphatic drainage, causing chronic progressive tissue swelling, fibrosis, and recurrent infections.",
    epidemiology:"Primary: congenital or hereditary (Milroy's, Meige's), onset in adolescence, F>M. Secondary: most common worldwide — post-cancer treatment (breast, melanoma, prostate), parasitic (filariasis), trauma. 40% of breast cancer patients develop arm lymphoedema.",
    pathophysiology:"Lymphatic vessel insufficiency leads to accumulation of macromolecular fluid and protein in interstitium. Chronic inflammation causes fibrosis, fat deposition, and skin changes. Adipose hypertrophy replaces lymphatic spaces in late disease.",
    classification:[{label:"Primary",note:"Praecox (<35 yrs), tarda (>35), congenital; usually lower limb"},{label:"Secondary",note:"Post-cancer treatment, infection, trauma, radiation"},{label:"ISL Stage I",note:"Pitting oedema, reversible with elevation"},{label:"ISL Stage II",note:"Non-pitting, does not reduce; fibrofatty changes"},{label:"ISL Stage III",note:"Elephantiasis — massive, irreversible; skin complications"}]
  },
  diagnosis:{
    history:["Progressive unilateral/bilateral limb swelling","Previous cancer treatment (surgery, radiotherapy, lymph node dissection)","Recurrent cellulitis (sentinel symptom — lymphatic compromise)","Heaviness, tightness, reduced mobility"],
    examination:["Positive Stemmer's sign (cannot tent skin at base of second toe)","Non-pitting oedema in late stages","Skin changes: hyperkeratosis, papillomatosis, fibrosis","Limb circumference measurements"],
    investigations:[{name:"Lymphoscintigraphy",role:"Functional assessment of lymphatic transport"},{name:"ICG lymphography",role:"Real-time dynamic lymphatic imaging — surgical planning for LVA"},{name:"MRI/CT lymphangiography",role:"Anatomical assessment of lymph nodes and vessels"},{name:"Duplex US",role:"Exclude venous cause; assess deep veins pre-LVA"}]
  },
  criteria:{title:"Surgical indications",items:[{k:"ISL I–II + poor CDT response",v:"LVA (lymphaticovenous anastomosis)"},{k:"ISL II–III",v:"VLNT (vascularised lymph node transfer)"},{k:"ISL III + massive limb",v:"Debulking (modified Charles procedure) + reconstruction"},{k:"Liposuction",v:"ISL II with fatty component; must continue CDT post-procedure"}]},
  scoring:[],
  management:{
    conservative:["Complete decongestive therapy (CDT): manual lymphatic drainage + compression bandaging","Graduated compression garments (maintained lifelong)","Skin care and prompt treatment of cellulitis","Exercise and weight management"],
    medical:["Antibiotics for cellulitis (flucloxacillin or amoxicillin)","Benzopyrones: mixed evidence; used in tropical lymphoedema"],
    surgical:[{name:"Lymphaticovenous anastomosis (LVA)",when:"Early-moderate lymphoedema (ISL I–IIa) not responding to CDT",notes:"Supermicrosurgery: anastomose lymphatic channels to small veins; reduces infections and heaviness"},{name:"Vascularised lymph node transfer (VLNT)",when:"Moderate-severe lymphoedema; failed LVA; radiation-damaged lymphatics",notes:"Transfers inguinal/axillary/submental nodes to affected limb; flap-based; may restore lymphatic flow"},{name:"Liposuction debulking",when:"Stage II with significant fat hypertrophy",notes:"Removes excess fat; must wear compression garments permanently post-op"},{name:"Charles procedure",when:"Stage III — massive lymphoedema with severe skin changes",notes:"Radical excision of all subcutaneous tissue + skin; skin grafting; palliative in advanced cases"}]
  },
  technique:{
    title:"Lymphaticovenous anastomosis (LVA) — supermicrosurgery",
    prep:["ICG lymphography to map functional lymphatic vessels","Supine; operating microscope (25× magnification)","Surgical loupe + supermicrosurgical instruments","Local anaesthesia + sedation; day-case"],
    steps:[{n:1,t:"ICG-guided incision",d:"Small (2 cm) transverse incisions at ICG-identified sites; multiple incision technique."},{n:2,t:"Lymphatic vessel identification",d:"Identify lymphatic channels under magnification — thin-walled; colourless before ICG."},{n:3,t:"Venule identification",d:"Identify adjacent venule of similar diameter for anastomosis."},{n:4,t:"End-to-end anastomosis",d:"8–0 to 11–0 nylon sutures under operating microscope; 4–6 sutures per anastomosis."},{n:5,t:"Patency check",d:"Inject ICG to confirm flow into venous system."},{n:6,t:"Wound closure and compression",d:"Close incisions; apply compression garment immediately."}],
    pearls:["ICG lymphography is essential for LVA planning — guides incision placement","Multiple anastomoses at different levels improve outcomes","Compression garments must be worn permanently post-op — LVA does not replace CDT"],
  },
  guidelines:[{src:"ISL 2020",url:"International Society of Lymphology consensus document on diagnosis and treatment"},{src:"NICE 2019",url:"Lymphoedema: British Lymphology Society guidelines"}],
  pearls:["Early intervention preserves functional lymphatics — better LVA outcomes","Cellulitis is a sentinel complication — treat immediately and prevent with prophylactic antibiotics","Compression garments are lifelong — even after surgical success"],
  mistakes:["Offering surgery before adequate trial of CDT","Performing LVA without ICG lymphography — poor vessel identification","Expecting LVA to cure lymphoedema — it reduces symptoms; compression continues"]},
