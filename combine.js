#!/usr/bin/env node
// combine.js — merge all tmp_*.js files into a new data.jsx
'use strict';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const DIR = '/Users/mospst/Desktop/Sandbox AI/surgery';

// ── ID/dept fixes ──────────────────────────────────────────────────────────
const ID_FIXES = {
  'colorectal-cancer': { id:'crc',                    dept:'colorectal' },
  'uc':                { id:'uc-surgical',             dept:'colorectal' },
  'crohn':             { id:'crohn-surgical',          dept:'colorectal' },
  'pilonidal-sinus':   { id:'pilonidal',               dept:'colorectal' },
  'familial-adenomatous-polyposis': { id:'fap',        dept:'colorectal' },
  'lynch-syndrome':    { id:'lynch',                   dept:'colorectal' },
  'bowel-obstruction': { id:'small-bowel-obstruction', dept:'uppergi' },
  'peptic-ulcer':      { id:'pud',                     dept:'uppergi' },
  'gastric-cancer':    { id:'gastric-ca',              dept:'uppergi' },
  'upper-gi-bleed':    { id:'ugib',                    dept:'uppergi' },
};
const SKIP_IDS = new Set(['rectal-cancer','ischaemic-colitis','ogilvie','gerd']);
const DEPT_FIXES = { 'soft-tissue':'softtissue', 'upper-gi':'uppergi', 'uppergı':'uppergi' };
// The UI (severity badge CSS + "High severity" filter) only understands three
// tiers: low / moderate / high. Some source entries use a richer vocabulary that
// has no matching CSS class, so those badges render unstyled and "critical"
// diseases fall out of the High filter. Normalize the outliers onto the 3-tier
// scale here so display and filtering stay consistent.
const SEVERITY_FIX = { minor:'low', medium:'moderate', major:'moderate', critical:'high' };

// ── Universal file loader ─────────────────────────────────────────────────
function loadDiseaseArray(fpath) {
  let raw = fs.readFileSync(fpath, 'utf8');

  // ① Files with module.exports — wrap in CommonJS shim
  if (/module\.exports\s*=/.test(raw)) {
    const ctx = { module: { exports: {} }, exports: {} };
    ctx.exports = ctx.module.exports;
    vm.runInNewContext(raw, ctx);
    const exp = ctx.module.exports;
    const arr = Object.values(exp).find(v => Array.isArray(v));
    if (arr) return arr;
  }

  // ② window._TMP_XXX = [...] pattern
  if (/window\._TMP_/.test(raw)) {
    const ctx = { window: {} };
    vm.runInNewContext(raw, ctx);
    const arr = Object.values(ctx.window).find(v => Array.isArray(v));
    if (arr) return arr;
  }

  // ③ const XXXX = [...] without module.exports — rewrite to global assignment
  const constMatch = raw.match(/^(const|let|var)\s+(\w+)\s*=/m);
  if (constMatch) {
    const patched = raw.replace(/^(const|let|var)\s+\w+\s*=/m, '__out.arr =');
    const ctx = { __out: {} };
    vm.runInNewContext(patched, ctx);
    if (Array.isArray(ctx.__out.arr)) return ctx.__out.arr;
  }

  // ④ Raw array entries (no wrapper) — wrap in array brackets
  const ctx = { __out: {} };
  const patched = `__out.arr = [\n${raw}\n];`;
  vm.runInNewContext(patched, ctx);
  if (Array.isArray(ctx.__out.arr)) return ctx.__out.arr;

  throw new Error(`Cannot extract array from ${fpath}`);
}

// ── Normalize classification items to {label, note} objects ──────────────
// Some tmp files store classification as plain strings like:
//   "Infrarenal — ≥85% of cases; standard EVAR"
//   "Primary ACS: direct abdominal pathology"
// views.jsx expects {label, note} objects — this converts them at build time.
function normalizeClassification(arr) {
  if (!Array.isArray(arr)) return arr;
  return arr.map(item => {
    if (item === null || typeof item !== 'string') return item; // already an object
    // Try em/en dash with surrounding spaces first (e.g. "Label — note")
    const dashMatch = item.match(/^(.+?)\s[—–]\s(.+)$/s);
    if (dashMatch) return { label: dashMatch[1].trim(), note: dashMatch[2].trim() };
    // Try ": " separator where the label part is short (≤50 chars, no nested colon)
    const colonIdx = item.indexOf(': ');
    if (colonIdx > 0 && colonIdx <= 50 && !item.substring(0, colonIdx).includes(':')) {
      return { label: item.substring(0, colonIdx).trim(), note: item.substring(colonIdx + 2).trim() };
    }
    // Fallback: whole string becomes the label
    return { label: item.trim(), note: '' };
  });
}

// ── Tmp files in order (later overwrites earlier on same ID) ──────────────
const TMP_FILES = [
  'tmp_aaa.js',          // AAA flagship — must be first so vascular can override if needed
  'tmp_vascular.js',
  'tmp_hpb.js', 'tmp_hpb2.js', 'tmp_hpb3.js',
  'tmp_colorectal1.js', 'tmp_colorectal2.js',
  'tmp_uppergı.js',
  'tmp_uppergi2.js',
  'tmp_endocrine.js', 'tmp_endocrine2.js',
  'tmp_trauma1.js', 'tmp_trauma2.js',
  'tmp_transplant.js',
  'tmp_thoracic.js',
  'tmp_hernia.js',
  'tmp_softtissue.js',
  // newer files last — win on duplicate ID
  'tmp_colorectal3.js',
  'tmp_uppergi3.js',
  'tmp_hernia2.js',
  'tmp_atls.js',
  'tmp_tms.js',      // TeachMeSurgery reference additions (10 new entries)
  'tmp_mis.js',      // Minimally Invasive Surgery department (8 principles topics)
];

// ── Hardcoded ID order (all 187 diseases in display sequence) ─────────────
const ID_ORDER = [
  // VASCULAR (16)
  'aaa','cli','carotid','dvt','taa','aortic-dissection','pad','mesenteric-isch',
  'varicose-veins','renal-artery-stenosis','popliteal-aneurysm','carotid-body-tumour',
  'thoracic-outlet','visceral-aneurysm','vascular-trauma','lymphoedema',
  // HPB & SPLEEN (23)
  'ap','biliary-colic','cholecystitis','cholangitis','hcc','choledocholithiasis','pancreatic-cancer',
  'chronic-pancreatitis','cholangiocarcinoma','icc','pancreatic-pseudocyst',
  'portal-hypertension','liver-abscess','gallbladder-cancer','liver-metastases',
  'hepatic-adenoma','hydatid-cyst','ipmn','pan-net','itp','hereditary-spherocytosis',
  'splenic-abscess','psc',
  // COLORECTAL (24)
  'appendicitis','diverticulitis','crc','rectal-prolapse','haemorrhoids','anal-fistula',
  'anal-fissure','perianal-abscess','pilonidal','sigmoid-volvulus','caecal-volvulus',
  'large-bowel-obstruction','uc-surgical','crohn-surgical','anal-cancer',
  'intestinal-fistula','carcinoid-appendix','mucocele-appendix','fap','lynch',
  'bowel-perforation','pseudo-obstruction','angiodysplasia','small-bowel-tumours',
  // UPPER GI & SMALL BOWEL (25)
  'pud','gastric-ca','ugib','oesophageal-cancer','hiatus-hernia','achalasia',
  'boerhaave','bariatric','gastric-volvulus','small-bowel-obstruction','gist',
  'barretts','zenker','caustic-oesoph','meckel','small-bowel-net','short-bowel',
  'radiation-enteritis',
  'gord','acute-abdomen','dysphagia','gastric-outlet-obstruction','melena','rectal-bleeding',
  // BREAST & ENDOCRINE (17)
  'breast-ca','dcis','phyllodes','thyroid-ca','graves','mng','phpt','shpt',
  'phaeochromocytoma','conns','cushings-adrenal','adrenocortical-ca',
  'adrenal-incidentaloma','insulinoma','men1','men2','breast-abscess',
  // TRAUMA & ACUTE CARE (19)
  'atls-primary-survey','atls-haemorrhagic-shock','atls-spinal-trauma','atls-airway',
  'trauma-laparotomy','acs','necrotising-fasciitis','splenic-trauma','liver-trauma',
  'bowel-trauma','diaphragm-rupture','pelvic-fracture','wound-dehiscence',
  'penetrating-abdominal','chest-trauma','burns','compartment-limb','renal-trauma',
  'traumatic-brain',
  // TRANSPLANT (7)
  'renal-tx','liver-tx','pancreas-tx','small-bowel-tx','living-donor-hepatectomy',
  // THORACIC (13)
  'lung-cancer','pneumothorax','empyema','mesothelioma','thymoma',
  'oesophageal-perforation','haemothorax','lung-abscess','mediastinal-mass',
  'chest-wall-tumour','pectus','lung-carcinoid','congenital-diaphragmatic-hernia',
  // HERNIA & ABDOMINAL WALL (10)
  'inguinal-hernia','femoral-hernia','umbilical-hernia','incisional-hernia',
  'epigastric-hernia','strangulated-hernia','parastomal-hernia','spigelian-hernia',
  'obturator-hernia','retroperitoneal-sarcoma',
  // SKIN & SOFT TISSUE (9)
  'melanoma','bcc','scc-skin','hidradenitis','liposarcoma','leiomyosarcoma',
  'desmoid','merkel-cell','kaposi',
  // MINIMALLY INVASIVE SURGERY (8)
  'mis-principles','lap-access','mis-energy','mis-complications','robotic-surgery',
  'diagnostic-laparoscopy','conversion-to-open','therapeutic-endoscopy',
];

// ── Load all diseases ─────────────────────────────────────────────────────
const diseaseMap = {};
let totalLoaded = 0;

for (const fname of TMP_FILES) {
  const fpath = path.join(DIR, fname);
  if (!fs.existsSync(fpath)) { console.warn(`WARN: ${fname} not found`); continue; }

  let arr;
  try { arr = loadDiseaseArray(fpath); }
  catch (e) { console.error(`ERROR loading ${fname}: ${e.message}`); continue; }

  let loaded = 0;
  for (const d of arr) {
    if (!d || typeof d !== 'object' || !d.id) continue;
    let { id } = d;

    if (ID_FIXES[id])           { d.id = ID_FIXES[id].id; d.dept = ID_FIXES[id].dept; id = d.id; }
    if (SKIP_IDS.has(id))       { continue; }
    if (d.dept && DEPT_FIXES[d.dept]) { d.dept = DEPT_FIXES[d.dept]; }
    if (d.severity && SEVERITY_FIX[d.severity]) { d.severity = SEVERITY_FIX[d.severity]; }

    // Normalize classification strings → {label, note} objects
    if (d.overview && d.overview.classification) {
      d.overview.classification = normalizeClassification(d.overview.classification);
    }

    diseaseMap[id] = d;
    loaded++;
  }
  console.log(`  ${fname}: ${loaded}`);
  totalLoaded += loaded;
}
console.log(`\nTotal in map: ${Object.keys(diseaseMap).length} (loaded ${totalLoaded})`);

// ── Patch guideline URLs ───────────────────────────────────────────────────
const GUIDELINE_URLS = {
  'NICE NG156': 'https://www.nice.org.uk/guidance/ng156',
  'NICE NG197': 'https://www.nice.org.uk/guidance/ng197',
  'NICE NG135': 'https://www.nice.org.uk/guidance/ng135',
  'NICE NG134': 'https://www.nice.org.uk/guidance/ng134',
  'NICE NG151': 'https://www.nice.org.uk/guidance/ng151',
  'NICE NG101': 'https://www.nice.org.uk/guidance/ng101',
  'NICE NG129': 'https://www.nice.org.uk/guidance/ng129',
  'NICE NG31':  'https://www.nice.org.uk/guidance/ng31',
  'NICE NG14':  'https://www.nice.org.uk/guidance/ng14',
  'NICE NG83':  'https://www.nice.org.uk/guidance/ng83',
  'NICE NG189': 'https://www.nice.org.uk/guidance/ng189',
  'NICE NG193': 'https://www.nice.org.uk/guidance/ng193',
  'NICE NG12':  'https://www.nice.org.uk/guidance/ng12',
  'NICE NG35':  'https://www.nice.org.uk/guidance/ng35',
  'NICE NG241': 'https://www.nice.org.uk/guidance/ng241',
  'NICE NG28':  'https://www.nice.org.uk/guidance/ng28',
  'NICE NG198': 'https://www.nice.org.uk/guidance/ng198',
  'ESVS 2024':  'https://www.esvs.org/guidelines/',
  'ESVS 2023':  'https://www.esvs.org/guidelines/',
  'ESVS 2022':  'https://www.esvs.org/guidelines/',
  'SVS 2018':   'https://www.jvascsurg.org/article/S0741-5214(17)32319-X/fulltext',
  'KDIGO':      'https://kdigo.org/guidelines/',
  'EASL':       'https://easl.eu/clinical-practice-guidelines/',
  'ESMO':       'https://www.esmo.org/guidelines',
  'ESCP':       'https://www.escp.eu.com/guidelines',
  'WSES':       'https://wjes.biomedcentral.com/',
  'BSGE':       'https://www.bsge.org.uk/guidelines/',
  'BTS':        'https://www.brit-thoracic.org.uk/quality-improvement/guidelines/',
  'ENETS':      'https://www.enets.org/guidelines.html',
  'SIGN':       'https://www.sign.ac.uk/our-guidelines/',
  'ACS ATLS':   'https://www.facs.org/quality-programs/trauma/atls/',
  'ISTH':       'https://www.isth.org/page/guidelines',
  'ERA-EDTA':   'https://www.era-online.org/en/guidelines/',
};
for (const d of Object.values(diseaseMap)) {
  if (!Array.isArray(d.guidelines)) continue;
  d.guidelines = d.guidelines.map(g => {
    if (g.url) return g;
    for (const [pat, url] of Object.entries(GUIDELINE_URLS)) {
      if (g.src && g.src.includes(pat)) return { ...g, url };
    }
    return g;
  });
}

// ── Patch operation video resources ───────────────────────────────────────
// These links intentionally point to trusted searchable libraries rather than
// random individual videos. Surgical videos move, disappear, and vary widely
// in quality; curated sources are safer for exam prep and theater preparation.
// Google site-scoped search: robust fallback when a library's own search
// either bot-blocks (e.g. SAGES returns 403) or has no stable query URL.
// It always lands the user on relevant results instead of a bare homepage.
const gsite = (domain, q) =>
  'https://www.google.com/search?q=' + encodeURIComponent(`${q} site:${domain}`);

const VIDEO_SOURCES = {
  websurg: {
    title: 'Search operation videos on WebSurg / IRCAD',
    source: 'WebSurg / IRCAD',
    urlFor: (q) => gsite('websurg.com', q),
    tags: ['video', 'free-registration', 'MIS', 'laparoscopic', 'robotic']
  },
  sages: {
    title: 'Search operation videos on SAGES TV',
    source: 'SAGES TV',
    urlFor: (q) => gsite('sages.org', q),
    tags: ['video', 'free', 'SAGES', 'MIS', 'endoscopy']
  },
  tvasurg: {
    title: 'Search animation-enhanced videos on TVASurg',
    source: 'Toronto Video Atlas of Surgery',
    urlFor: (q) => gsite('tvasurg.ca', q),
    tags: ['video', 'open-access', 'animation', 'anatomy']
  },
  ais: {
    title: 'Search advanced colorectal/MIS videos on AIS Channel',
    source: 'AIS Channel',
    urlFor: (q) => gsite('aischannel.com', q),
    tags: ['video', 'free-account', 'expert', 'MIS', 'colorectal']
  },
  jomi: {
    title: 'Search peer-reviewed operative videos on JOMI',
    source: 'JOMI',
    urlFor: (q) => 'https://jomi.com/search?q=' + encodeURIComponent(q),
    tags: ['video', 'peer-reviewed', 'incision-to-closure', 'mixed-access']
  },
  webop: {
    title: 'Search step-by-step operative technique on webop',
    source: 'webop',
    urlFor: (q) => gsite('webop.com', q),
    tags: ['video', 'stepwise', 'operative-technique', 'mixed-access']
  }
};

const VIDEO_BY_DEPT = {
  hpb: ['websurg', 'tvasurg', 'sages'],
  colorectal: ['sages', 'ais', 'websurg'],
  uppergi: ['sages', 'websurg', 'tvasurg'],
  endocrine: ['jomi', 'tvasurg', 'webop'],
  trauma: ['jomi', 'sages'],
  transplant: ['tvasurg', 'jomi', 'websurg'],
  thoracic: ['jomi', 'websurg', 'sages'],
  hernia: ['sages', 'websurg', 'webop'],
  vascular: ['jomi', 'websurg'],
  softtissue: ['jomi', 'webop']
};

const VIDEO_BY_ID = {
  appendicitis: ['sages', 'websurg'],
  'biliary-colic': ['sages', 'websurg'],
  cholecystitis: ['sages', 'websurg', 'tvasurg'],
  choledocholithiasis: ['sages', 'websurg'],
  'pancreatic-cancer': ['tvasurg', 'jomi', 'websurg'],
  'liver-metastases': ['tvasurg', 'jomi', 'websurg'],
  hcc: ['tvasurg', 'jomi'],
  'gastric-ca': ['websurg', 'jomi'],
  'oesophageal-cancer': ['websurg', 'jomi', 'tvasurg'],
  bariatric: ['sages', 'websurg'],
  achalasia: ['sages', 'websurg'],
  crc: ['sages', 'ais', 'websurg'],
  'anal-cancer': ['ais', 'sages'],
  'rectal-prolapse': ['sages', 'webop'],
  'inguinal-hernia': ['sages', 'websurg', 'webop'],
  'femoral-hernia': ['webop', 'jomi'],
  'incisional-hernia': ['sages', 'websurg', 'webop'],
  'parastomal-hernia': ['sages', 'webop'],
  'breast-ca': ['jomi', 'tvasurg'],
  'thyroid-ca': ['jomi', 'webop'],
  graves: ['jomi', 'webop'],
  phpt: ['jomi', 'webop'],
  phaeochromocytoma: ['websurg', 'jomi'],
  aaa: ['jomi', 'websurg'],
  'varicose-veins': ['webop', 'jomi'],
  'trauma-laparotomy': ['jomi', 'sages'],
  burns: ['jomi'],
  'compartment-limb': ['jomi'],
  'renal-tx': ['tvasurg', 'jomi'],
  'liver-tx': ['tvasurg', 'jomi'],
  'living-donor-hepatectomy': ['tvasurg', 'jomi'],
  'lung-cancer': ['jomi', 'websurg'],
  pneumothorax: ['jomi', 'sages'],
  melanoma: ['jomi', 'webop'],
  hidradenitis: ['jomi', 'webop']
};

const VIDEO_QUERY_BY_ID = {
  aaa: 'open AAA repair OR EVAR',
  appendicitis: 'laparoscopic appendectomy',
  'biliary-colic': 'elective laparoscopic cholecystectomy day case',
  cholecystitis: 'laparoscopic cholecystectomy critical view of safety',
  choledocholithiasis: 'ERCP common bile duct stone laparoscopic CBD exploration',
  'pancreatic-cancer': 'Whipple pancreaticoduodenectomy',
  'liver-metastases': 'liver resection colorectal liver metastases Pringle maneuver',
  hcc: 'hepatectomy HCC liver resection',
  'gastric-ca': 'gastrectomy D2 lymphadenectomy',
  'oesophageal-cancer': 'Ivor Lewis esophagectomy',
  achalasia: 'Heller myotomy POEM',
  bariatric: 'sleeve gastrectomy Roux-en-Y gastric bypass',
  crc: 'right hemicolectomy sigmoid colectomy TME',
  'anal-cancer': 'abdominoperineal resection anal cancer',
  'inguinal-hernia': 'Lichtenstein TEP TAPP inguinal hernia repair',
  'incisional-hernia': 'Rives-Stoppa TAR incisional hernia repair',
  'breast-ca': 'lumpectomy mastectomy sentinel lymph node biopsy',
  'thyroid-ca': 'total thyroidectomy recurrent laryngeal nerve',
  phpt: 'focused parathyroidectomy',
  'trauma-laparotomy': 'damage control laparotomy',
  'renal-tx': 'kidney transplant iliac fossa implantation',
  'liver-tx': 'orthotopic liver transplantation piggyback',
  'living-donor-hepatectomy': 'living donor right hepatectomy',
  'lung-cancer': 'VATS lobectomy',
  pneumothorax: 'VATS bullectomy pleurodesis',
  melanoma: 'wide local excision sentinel lymph node biopsy melanoma'
};

for (const d of Object.values(diseaseMap)) {
  const sourceKeys = new Set([...(VIDEO_BY_DEPT[d.dept] || []), ...(VIDEO_BY_ID[d.id] || [])]);
  if (!sourceKeys.size) continue;
  const query = VIDEO_QUERY_BY_ID[d.id] || d.technique?.title || d.name;
  const generated = [...sourceKeys].map(key => {
    const source = VIDEO_SOURCES[key];
    if (!source) return null;
    return {
      title: source.title,
      source: source.source,
      url: source.urlFor(query),
      tags: source.tags,
      query
    };
  }).filter(Boolean);
  const existing = Array.isArray(d.videoResources) ? d.videoResources : [];
  const seen = new Set();
  d.videoResources = [...existing, ...generated].filter(v => {
    const sig = `${v.source}|${v.url}|${v.query || ''}`;
    if (seen.has(sig)) return false;
    seen.add(sig);
    return true;
  });
}

// ── Patch anatomy and image reference resources ──────────────────────────
// These are source links, not copied images. That keeps the app lightweight
// and avoids embedding copyrighted atlas/testbook figures without permission.
const imageSearchUrl = (base, query) => base + encodeURIComponent(query);
const IMAGE_SOURCES = {
  commons: {
    title: 'Search open anatomy/media images',
    source: 'Wikimedia Commons',
    urlFor: (q) => imageSearchUrl('https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=', q),
    tags: ['image', 'open-license', 'anatomy', 'photo', 'diagram']
  },
  radiopaedia: {
    title: 'Search radiology cases and anatomy',
    source: 'Radiopaedia',
    urlFor: (q) => imageSearchUrl('https://radiopaedia.org/search?q=', q),
    tags: ['image', 'radiology', 'CT', 'MRI', 'ultrasound']
  },
  teachmeanatomy: {
    title: 'Search anatomy explanations and diagrams',
    source: 'TeachMeAnatomy',
    urlFor: (q) => imageSearchUrl('https://teachmeanatomy.info/?s=', q),
    tags: ['anatomy', 'diagram', 'surface-anatomy', 'regional']
  },
  nci: {
    title: 'Search public-domain cancer illustrations',
    source: 'NCI Visuals Online',
    urlFor: (q) => gsite('visualsonline.cancer.gov', q),
    tags: ['image', 'public-domain', 'cancer', 'illustration']
  },
  dermnet: {
    title: 'Search clinical dermatology photographs',
    source: 'DermNet',
    urlFor: (q) => imageSearchUrl('https://dermnetnz.org/search?q=', q),
    tags: ['photo', 'dermatology', 'skin', 'clinical']
  },
  webpath: {
    title: 'Search gross and histopathology image atlas',
    source: 'University of Utah WebPath',
    urlFor: (q) => gsite('webpath.med.utah.edu', q),
    tags: ['image', 'gross-pathology', 'histology', 'teaching']
  },
  gastrointestinalatlas: {
    title: 'Search GI endoscopy image/video atlas',
    source: 'Gastrointestinal Atlas',
    urlFor: (q) => gsite('gastrointestinalatlas.com', q),
    tags: ['image', 'endoscopy', 'upper-GI', 'colonoscopy']
  },
  imaios: {
    title: 'Search cross-sectional anatomy atlas',
    source: 'IMAIOS e-Anatomy',
    urlFor: (q) => gsite('imaios.com', q),
    tags: ['anatomy', 'cross-sectional', 'CT', 'MRI', 'mixed-access']
  }
};

const IMAGE_BY_DEPT = {
  vascular: ['radiopaedia', 'commons', 'teachmeanatomy', 'imaios'],
  hpb: ['radiopaedia', 'commons', 'nci', 'webpath'],
  colorectal: ['gastrointestinalatlas', 'radiopaedia', 'commons', 'webpath'],
  uppergi: ['gastrointestinalatlas', 'radiopaedia', 'commons', 'webpath'],
  endocrine: ['teachmeanatomy', 'commons', 'nci', 'webpath'],
  trauma: ['radiopaedia', 'commons', 'imaios'],
  transplant: ['radiopaedia', 'commons', 'imaios'],
  thoracic: ['radiopaedia', 'commons', 'teachmeanatomy', 'imaios'],
  hernia: ['commons', 'teachmeanatomy', 'radiopaedia'],
  softtissue: ['dermnet', 'commons', 'webpath', 'nci']
};

const IMAGE_BY_ID = {
  melanoma: ['dermnet', 'commons', 'webpath'],
  bcc: ['dermnet', 'commons', 'webpath'],
  'scc-skin': ['dermnet', 'commons', 'webpath'],
  hidradenitis: ['dermnet', 'commons'],
  'merkel-cell': ['dermnet', 'nci', 'webpath'],
  kaposi: ['dermnet', 'nci', 'webpath'],
  'breast-ca': ['nci', 'commons', 'webpath'],
  dcis: ['nci', 'webpath'],
  'thyroid-ca': ['nci', 'teachmeanatomy', 'webpath'],
  phpt: ['teachmeanatomy', 'commons'],
  'renal-tx': ['radiopaedia', 'commons', 'imaios'],
  'liver-tx': ['radiopaedia', 'commons', 'imaios'],
  'upper-gi-bleed': ['gastrointestinalatlas', 'radiopaedia'],
  ugib: ['gastrointestinalatlas', 'radiopaedia'],
  barretts: ['gastrointestinalatlas', 'webpath'],
  'rectal-bleeding': ['gastrointestinalatlas', 'radiopaedia'],
  'anal-cancer': ['dermnet', 'gastrointestinalatlas', 'nci'],
  aaa: ['radiopaedia', 'commons', 'imaios'],
  carotid: ['teachmeanatomy', 'commons', 'radiopaedia'],
  'inguinal-hernia': ['teachmeanatomy', 'commons', 'radiopaedia'],
  'femoral-hernia': ['teachmeanatomy', 'commons', 'radiopaedia']
};

// Image-atlas search engines (Radiopaedia, TeachMeAnatomy, Wikimedia, DermNet)
// do strict AND-matching: every extra word shrinks the result set, and a long
// descriptive phrase returns ZERO hits. So these must be SHORT — the canonical
// disease/structure term the site actually has an article or media page for.
const IMAGE_QUERY_BY_ID = {
  aaa: 'abdominal aortic aneurysm',
  carotid: 'carotid artery stenosis',
  dvt: 'deep vein thrombosis',
  'varicose-veins': 'varicose veins',
  cli: 'critical limb ischemia',
  pad: 'peripheral arterial disease',
  'aortic-dissection': 'aortic dissection',
  'mesenteric-isch': 'mesenteric ischemia',
  'popliteal-aneurysm': 'popliteal artery aneurysm',
  'thoracic-outlet': 'thoracic outlet syndrome',
  'visceral-aneurysm': 'splenic artery aneurysm',
  'biliary-colic': 'gallstones',
  cholecystitis: 'cholecystitis',
  cholangitis: 'cholangitis',
  choledocholithiasis: 'choledocholithiasis',
  'pancreatic-cancer': 'pancreatic cancer',
  hcc: 'hepatocellular carcinoma',
  'liver-metastases': 'liver metastases',
  appendicitis: 'appendicitis',
  crc: 'colorectal cancer',
  'anal-fistula': 'anal fistula',
  'perianal-abscess': 'perianal abscess',
  pud: 'peptic ulcer',
  ugib: 'upper gastrointestinal bleeding',
  'gastric-ca': 'gastric cancer',
  barretts: 'Barrett esophagus',
  'oesophageal-cancer': 'esophageal cancer',
  'breast-ca': 'breast cancer',
  dcis: 'ductal carcinoma in situ',
  'thyroid-ca': 'thyroid cancer',
  phpt: 'parathyroid adenoma',
  men1: 'multiple endocrine neoplasia',
  'trauma-laparotomy': 'abdominal trauma',
  'splenic-trauma': 'splenic injury',
  'liver-trauma': 'liver injury',
  'renal-trauma': 'renal injury',
  'renal-tx': 'kidney transplant',
  'liver-tx': 'liver transplant',
  'lung-cancer': 'lung cancer',
  pneumothorax: 'pneumothorax',
  empyema: 'empyema',
  'inguinal-hernia': 'inguinal hernia',
  'femoral-hernia': 'femoral hernia',
  melanoma: 'melanoma',
  bcc: 'basal cell carcinoma',
  'scc-skin': 'squamous cell carcinoma',
  hidradenitis: 'hidradenitis suppurativa',
  liposarcoma: 'liposarcoma',
  'merkel-cell': 'Merkel cell carcinoma',
  kaposi: 'Kaposi sarcoma',
  'hydatid-cyst': 'hydatid cyst liver',
  'bowel-trauma': 'bowel injury',
  'wound-dehiscence': 'wound dehiscence'
};

// Build a short image-search query when no curated one exists. Atlas search
// engines do strict AND-matching, so a long descriptive phrase returns zero
// hits. The disease name alone is the most reliable term these reference sites
// actually index — strip the bracketed abbreviation (e.g. "(GERD)") and any
// slash/dash that joins two compound names into one over-specific phrase.
const cleanImageQuery = (d) =>
  (d.name || '')
    .replace(/\s*\([^)]*\)/g, '')
    .replace(/[\/—–]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

for (const d of Object.values(diseaseMap)) {
  const sourceKeys = new Set([...(IMAGE_BY_DEPT[d.dept] || []), ...(IMAGE_BY_ID[d.id] || [])]);
  if (!sourceKeys.size) continue;
  const query = IMAGE_QUERY_BY_ID[d.id] || cleanImageQuery(d);
  const generated = [...sourceKeys].map(key => {
    const source = IMAGE_SOURCES[key];
    if (!source) return null;
    return {
      title: source.title,
      source: source.source,
      url: source.urlFor(query),
      tags: source.tags,
      query
    };
  }).filter(Boolean);
  const existing = Array.isArray(d.anatomyResources) ? d.anatomyResources : [];
  const seen = new Set();
  d.anatomyResources = [...existing, ...generated].filter(v => {
    const sig = `${v.source}|${v.url}|${v.query || ''}`;
    if (seen.has(sig)) return false;
    seen.add(sig);
    return true;
  });
}

// ── Departments to exclude entirely ──────────────────────────────────────
const EXCLUDE_DEPTS = new Set(['cardiac','paediatric','urology','gynaecology']);

// ── Read data.jsx for DEPARTMENTS, SCORING, QUIZ_BANK, and stubs ──────────
const origContent = fs.readFileSync(path.join(DIR, 'data.jsx'), 'utf8');

const scoringMatch  = origContent.match(/(const SCORING = \{[\s\S]*?\};)/);

const SCORING_BLOCK = scoringMatch ? scoringMatch[1] : '// SCORING missing';

// ── Load extra quiz questions from tmp_quiz*.js ───────────────────────────
const QUIZ_FILES = ['tmp_quiz.js'];
const extraQuiz = [];
for (const qf of QUIZ_FILES) {
  const qpath = path.join(DIR, qf);
  if (!fs.existsSync(qpath)) { console.warn(`WARN: ${qf} not found`); continue; }
  try {
    const qarr = loadDiseaseArray(qpath);
    extraQuiz.push(...qarr.filter(q => q && q.id));
    console.log(`  ${qf} (quiz): ${qarr.length} questions`);
  } catch(e) { console.error(`Quiz load error ${qf}: ${e.message}`); }
}

let baseQuiz = [];
try {
  const ctx = { window: {} };
  vm.runInNewContext(origContent, ctx);
  baseQuiz = ctx.window.SK_DATA?.QUIZ_BANK || [];
} catch (e) {
  console.warn(`WARN: Could not evaluate existing QUIZ_BANK: ${e.message}`);
}
const quizById = new Map();
for (const q of [...baseQuiz, ...extraQuiz]) {
  if (!q || !q.id) continue;
  // Later entries win so tmp_quiz.js can intentionally correct a question.
  quizById.set(q.id, q);
}
// Drop orphaned quiz questions whose `disease` no longer exists in the display
// list (e.g. questions left behind when excluded urology/pediatric/gynecology
// diseases were removed). Questions with no `disease` field (general questions)
// are always kept. This auto-prunes any future orphan without manual edits.
const VALID_IDS = new Set(ID_ORDER);
const preFilter = quizById.size;
const mergedQuiz = [...quizById.values()].filter(q => !q.disease || VALID_IDS.has(q.disease));
const droppedQuiz = preFilter - mergedQuiz.length;
if (droppedQuiz > 0) console.log(`Orphaned quiz questions dropped: ${droppedQuiz}`);
const QUIZ_BANK_BLOCK = 'const QUIZ_BANK = [\n'
  + mergedQuiz.map(q => '  ' + JSON.stringify(q)).join(',\n')
  + '\n];\n// end QUIZ_BANK';

// Build DEPARTMENTS block with excluded depts removed
const DEPARTMENTS_BLOCK = `const DEPARTMENTS = [
  { id:"vascular",   name:"Vascular",               glyph:"◐", subtitle:"Arterial & Venous Surgery" },
  { id:"hpb",        name:"HPB",                    glyph:"◍", subtitle:"Hepato-Pancreato-Biliary & Spleen" },
  { id:"colorectal", name:"Colorectal",              glyph:"◑" },
  { id:"uppergi",    name:"Upper GI & Small Bowel",  glyph:"◓" },
  { id:"endocrine",  name:"Breast & Endocrine",      glyph:"◒" },
  { id:"trauma",     name:"Trauma & Acute Care",     glyph:"◉" },
  { id:"transplant", name:"Transplant",              glyph:"◎" },
  { id:"thoracic",   name:"Thoracic",                glyph:"◌" },
  { id:"hernia",     name:"Hernia & Abdominal Wall", glyph:"◈" },
  { id:"softtissue", name:"Skin & Soft Tissue",      glyph:"◫" },
  { id:"mis",        name:"Minimally Invasive Surgery", glyph:"◔", subtitle:"Laparoscopy, Robotics & Endoscopy" },
];`;

// ── Extract stubs from data.jsx (fallback for IDs not in any tmp file) ────
const diseasesSection = origContent.match(/const DISEASES = \[([\s\S]*?)\];\s*\/\/ end DISEASES/);
const stubMap = {};
if (diseasesSection) {
  const rawDiseases = diseasesSection[1];
  // Parse stubs by brace depth; regex handles both id:"xxx" and id: "xxx" formats
  let depth = 0, entryStart = -1, currentId = null;
  for (let i = 0; i < rawDiseases.length; i++) {
    const ch = rawDiseases[i];
    if (ch === '{') {
      if (depth === 0) {
        entryStart = i;
        const peek = rawDiseases.slice(i, i + 600);
        const m = peek.match(/\bid\s*:\s*"([^"]+)"/);
        currentId = m ? m[1] : null;
      }
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && entryStart >= 0 && currentId) {
        stubMap[currentId] = rawDiseases.slice(entryStart, i + 1);
        entryStart = -1; currentId = null;
      }
    }
  }
  console.log(`Parsed stubs: ${Object.keys(stubMap).length}`);
} else {
  console.warn('WARN: Cannot find DISEASES section in data.jsx — no stubs available');
}

// ── Serialize a disease object to JS ──────────────────────────────────────
function jsStr(s) {
  return '"' + String(s).replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'') + '"';
}

function jsVal(v, depth) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (typeof v === 'string') return jsStr(v);
  const pad  = '  '.repeat(depth + 1);
  const pad0 = '  '.repeat(depth);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    const items = v.map(x => jsVal(x, depth + 1));
    const allPrim = v.every(x => typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean');
    const inline  = items.join(', ');
    if (allPrim && inline.length < 100) return '[' + inline + ']';
    return '[\n' + items.map(x => pad + x).join(',\n') + '\n' + pad0 + ']';
  }
  if (typeof v === 'object') {
    const entries = Object.entries(v).filter(([,val]) => val !== undefined);
    if (entries.length === 0) return '{}';
    const lines = entries.map(([k,val]) => {
      const key = /^[a-zA-Z_$][\w$]*$/.test(k) ? k : jsStr(k);
      return pad + key + ': ' + jsVal(val, depth + 1);
    });
    return '{\n' + lines.join(',\n') + '\n' + pad0 + '}';
  }
  return JSON.stringify(v);
}

function serializeDisease(d) {
  const entries = Object.entries(d).filter(([,v]) => v !== undefined);
  const lines = entries.map(([k,v]) => {
    const key = /^[a-zA-Z_$][\w$]*$/.test(k) ? k : jsStr(k);
    return '    ' + key + ': ' + jsVal(v, 2);
  });
  return '  {\n' + lines.join(',\n') + '\n  }';
}

// ── Section comments ───────────────────────────────────────────────────────
const SECTION_COMMENTS = {
  'aaa':              '  // ══════════════════════ VASCULAR ══════════════════════',
  'ap':               '  // ══════════════════════ HPB & SPLEEN ══════════════════════',
  'appendicitis':     '  // ══════════════════════ COLORECTAL ══════════════════════',
  'pud':              '  // ══════════════════════ UPPER GI & SMALL BOWEL ══════════════════════',
  'breast-ca':        '  // ══════════════════════ BREAST & ENDOCRINE ══════════════════════',
  'atls-primary-survey':'  // ══════════════════════ TRAUMA & ACUTE CARE ══════════════════════',
  'renal-tx':         '  // ══════════════════════ TRANSPLANT ══════════════════════',
  'lung-cancer':      '  // ══════════════════════ THORACIC ══════════════════════',
  'inguinal-hernia':  '  // ══════════════════════ HERNIA & ABDOMINAL WALL ══════════════════════',
  'melanoma':         '  // ══════════════════════ SKIN & SOFT TISSUE ══════════════════════',
  'mis-principles':   '  // ══════════════════════ MINIMALLY INVASIVE SURGERY ══════════════════════',
};

// ── Auto-generate reverse "Related" links from MIS topics ─────────────────
// tmp_mis.js is the single source of truth: each MIS topic lists the existing
// procedures it relates to (forward links). Here we walk those forward links and
// add the mirror image on the target disease, so e.g. Cholecystitis gains a
// "see Principles of Laparoscopy" card pointing back into the MIS department.
// Re-using the forward note keeps the relationship description identical in both
// directions, and the dedup check makes this idempotent across rebuilds.
let reverseLinks = 0;
for (const src of Object.values(diseaseMap)) {
  if (src.dept !== 'mis' || !Array.isArray(src.related)) continue;
  for (const r of src.related) {
    const target = diseaseMap[r.id];
    if (!target || target.dept === 'mis') continue; // only mirror onto non-MIS diseases
    if (!Array.isArray(target.related)) target.related = [];
    if (target.related.some(x => x && x.id === src.id)) continue; // already linked
    target.related.push({ id: src.id, note: r.note });
    reverseLinks++;
  }
}
console.log(`Reverse MIS links injected: ${reverseLinks}`);

// ── Timing / "golden period" injection ────────────────────────────────────
// Centralised map of surgical timing windows, injected as a top-level `timing`
// field so each disease page can surface a scannable "when to operate" band at
// the top of Management. Kept here (not in the tmp files) so the whole set is
// maintainable in one place, mirroring VIDEO_BY_ID / IMAGE_QUERY_BY_ID above.
// Shape: { window: "<headline decision/window>", detail: "<one-line why/caveat>" }.
// American spelling to match the rest of the content.
const TIMING_BY_ID = {
  // VASCULAR
  aaa: { window: "Ruptured AAA → immediate repair (door-to-intervention <90 min); elective repair at ≥5.5 cm (men) / ≥5.0 cm (women) or growth >1 cm/yr", detail: "If unstable, do not delay for imaging — permissive hypotension (SBP ~70–90) straight to theatre/EVAR. Below-threshold aneurysms are surveilled, not operated." },
  'aortic-dissection': { window: "Type A (ascending) = surgical emergency within hours; uncomplicated Type B = medical, intervene only for malperfusion/rupture", detail: "Type A mortality rises ~1–2% per hour untreated. Type B: strict impulse control (SBP <120, HR <60); TEVAR for complications." },
  'mesenteric-isch': { window: "Acute mesenteric ischemia — revascularize within ~6 h ('golden window') before transmural infarction", detail: "Each hour of delay increases bowel loss and mortality (up to 60–80%). Fast-track CT angiogram; do not wait for lactate to rise." },
  cli: { window: "Acute limb ischemia (Rutherford IIb) — revascularize within 6 h; irreversible (III, paralyzed/insensate) → primary amputation. Chronic CLTI → revascularize within ~2 weeks of tissue loss", detail: "6-h skeletal-muscle tolerance to warm ischemia. Delay risks reperfusion injury, compartment syndrome, and limb loss." },
  carotid: { window: "Symptomatic carotid stenosis (50–99%) — carotid endarterectomy within 2 weeks of the index TIA/stroke", detail: "Recurrent-stroke risk is highest in the first 14 days, so early surgery gives the greatest benefit. Beyond 12 weeks the benefit falls sharply." },
  dvt: { window: "Phlegmasia cerulea dolens → urgent thrombolysis/thrombectomy within hours to save the limb; iliofemoral DVT → consider catheter-directed thrombolysis within 14 days", detail: "Anticoagulate immediately on diagnosis. Threatened venous gangrene is a limb emergency." },
  'vascular-trauma': { window: "Hard signs → theatre immediately; limb tolerates ~6 h ischemia — restore flow (temporary shunt if needed) before definitive repair", detail: "Damage-control shunt buys time for orthopedic fixation. Warm ischemia >6 h → high fasciotomy/amputation rate." },

  // HPB
  'biliary-colic': { window: "Symptomatic gallstones — elective laparoscopic cholecystectomy, ideally same admission or within 6 weeks of presentation", detail: "Prompt surgery pre-empts progression to cholecystitis, pancreatitis, or CBD stones. Asymptomatic stones are not an indication." },
  cholecystitis: { window: "Early laparoscopic cholecystectomy within 72 h of symptom onset (acceptable up to 7–10 days)", detail: "Early beats interval surgery — shorter stay, fewer complications, no recurrence interval. After ~10 days dense adhesions raise conversion risk; a 6-week interval is the alternative." },
  cholangitis: { window: "Biliary decompression (ERCP): Grade III urgent <12 h, Grade II <24–48 h, Grade I within 72 h", detail: "Resuscitate first, but never delay drainage in a septic (Reynolds' pentad) patient. Interval cholecystectomy after recovery." },
  ap: { window: "Gallstone pancreatitis → cholecystectomy same admission after mild attack settles; infected necrosis → delay necrosectomy ≥4 weeks for wall-off", detail: "Same-admission cholecystectomy cuts recurrence from ~30% to <5%. Necrosectomy before 4 weeks carries high mortality — use the step-up approach." },
  choledocholithiasis: { window: "CBD stone with cholangitis/obstruction → ERCP within 24–72 h; then cholecystectomy same admission", detail: "Clear the duct before or during cholecystectomy. Urgency is driven by sepsis/obstruction, not the stone alone." },

  // COLORECTAL
  appendicitis: { window: "Appendicectomy is urgent but not immediate — an in-hospital delay of up to 12–24 h with antibiotics is safe; perforation risk rises thereafter", detail: "Start antibiotics at diagnosis. Complicated/perforated with a walled-off abscess → drainage + interval appendicectomy." },
  diverticulitis: { window: "Hinchey III/IV (purulent/feculent peritonitis) → emergency surgery; uncomplicated → antibiotics, elective resection only for recurrent/complicated disease", detail: "Do not rush elective resection after a single episode. Emergency Hartmann's for generalized peritonitis or failed source control." },
  'sigmoid-volvulus': { window: "Endoscopic detorsion first-line within hours if no ischemia; then semi-elective sigmoidectomy the same admission", detail: "Gangrene/peritonitis → emergency laparotomy, no endoscopy. Detorsion alone recurs in ~60% — resect during the same admission." },
  'caecal-volvulus': { window: "Caecal volvulus → surgery (right hemicolectomy or caecopexy) usually needed; endoscopic reduction rarely succeeds", detail: "Higher ischemia risk than sigmoid — do not delay for repeated endoscopic attempts." },
  'large-bowel-obstruction': { window: "Caecum >10–12 cm, peritonism, or closed-loop physiology → emergency decompression within hours", detail: "A competent ileocaecal valve makes a closed loop that risks caecal perforation. Malignant LBO → resection or stent as a bridge." },
  'bowel-perforation': { window: "Perforation with peritonitis → source control within ~6 h (Surviving Sepsis) — resuscitate and operate in parallel", detail: "Every hour of delayed source control in septic shock increases mortality. Damage-control laparotomy if unstable." },

  // UPPER GI & SMALL BOWEL
  pud: { window: "Perforated peptic ulcer → surgery within 24 h (ideally <12 h); each hour of delay raises mortality", detail: "Resuscitate, IV PPI, antibiotics, then omental (Graham) patch. Non-operative management only for highly selected sealed perforations." },
  ugib: { window: "Endoscopy within 24 h of resuscitation; unstable or suspected variceal bleed → within 12 h", detail: "Resuscitate first (restrictive transfusion, Hb ~70). Risk-stratify (Glasgow-Blatchford/Rockall). Variceal bleed: terlipressin + antibiotics + band ligation." },
  boerhaave: { window: "Esophageal perforation — primary repair within 24 h ('golden 24 hours') for the best outcome", detail: "After 24 h tissues are friable → repair over a T-tube, stent, or diversion. Delay sharply increases mediastinitis and mortality." },
  'small-bowel-obstruction': { window: "Non-operative trial up to 48–72 h if no strangulation; strangulation or closed-loop → emergency surgery", detail: "Fever, tachycardia, peritonism, rising lactate, or CT wall changes abort the trial — operate now." },
  'gastric-volvulus': { window: "Acute gastric volvulus (Borchardt's triad) → emergency decompression/surgery within hours — strangulation risk", detail: "Attempt NG decompression, then operate. Ischemia/necrosis of the stomach is a surgical emergency." },
  'gastric-outlet-obstruction': { window: "Decompress and correct fluids/electrolytes first; definitive surgery/stenting once the metabolic alkalosis is corrected", detail: "Benign GOO: optimize then operate. Malignant GOO: stent or bypass depending on prognosis — timing is need-driven, not emergent." },
  'acute-abdomen': { window: "Peritonitis or hemodynamic instability → source control within ~6 h; stable equivocal cases → active observation with serial review", detail: "Resuscitate in parallel with diagnosis. Do not let imaging delay theatre in a patient with generalized peritonitis." },

  // TRAUMA & ACUTE CARE
  'atls-primary-survey': { window: "The 'golden hour' — complete resuscitation and definitive-care decisions within the first 60 min of injury", detail: "Systematic ABCDE; treat life-threats as you find them. Transfer to definitive care without delay for non-essential imaging." },
  'trauma-laparotomy': { window: "Damage-control laparotomy in <60–90 min for the unstable patient — abbreviated surgery before the lethal triad sets in", detail: "Control hemorrhage and contamination, pack, temporary closure; resuscitate in ICU; definitive repair at 24–48 h once warm and non-coagulopathic." },
  'necrotising-fasciitis': { window: "Surgical debridement within hours of diagnosis — every hour of delay increases mortality", detail: "Do not wait for imaging or for antibiotics to 'work'. Broad-spectrum antibiotics + emergency wide excision; planned relook at 24 h." },
  'compartment-limb': { window: "Fasciotomy within 6 h of onset; irreversible muscle/nerve damage by ~6–8 h", detail: "Clinical diagnosis (pain out of proportion, pain on passive stretch) — do not wait for pulselessness, which is a late sign. ΔP <30 mmHg confirms." },
  acs: { window: "Sustained intra-abdominal pressure >20 mmHg with new organ dysfunction → decompressive laparotomy without delay", detail: "Try medical measures first (sedation, drainage, neuromuscular blockade); decompress when they fail — do not wait for anuria or respiratory collapse." },
  'splenic-trauma': { window: "Hemodynamically unstable → immediate splenectomy; stable high-grade with contrast blush → angioembolization with close non-operative monitoring", detail: "Instability, not CT grade, drives the decision. Non-operative failure usually declares within 24 h." },
  burns: { window: "Fluid resuscitation (Parkland) timed from the moment of injury, not arrival; circumferential full-thickness burns → escharotomy within hours", detail: "Mistimed fluids under-resuscitate and cause shock. Escharotomy relieves limb/chest compartment compromise. Refer major burns early." },
  'pelvic-fracture': { window: "Unstable pelvic fracture → binder immediately, then angioembolization or preperitoneal packing within the first hour", detail: "Mechanical stabilization buys time. Activate massive transfusion and coordinate early hemorrhage control." },
  'traumatic-brain': { window: "Extradural/subdural with mass effect → evacuation within ~1–4 h; prevent secondary insult (hypoxia/hypotension) from the outset", detail: "'Talk and deteriorate' = extradural until proven otherwise. Maintain cerebral perfusion pressure and treat raised ICP — the injured brain does not tolerate delay." },

  // THORACIC
  'oesophageal-perforation': { window: "Primary repair within 24 h of perforation ('golden period'); later → stent, drainage, or diversion", detail: "Contained cervical perforations may be managed non-operatively. Thoracic/abdominal perforation with sepsis → operate; mediastinitis mortality climbs with delay." },
  empyema: { window: "Stage II/III empyema → drainage / VATS decortication early (within days), before an organized peel forms", detail: "Chest drain ± intrapleural fibrinolytics for stage II; the organizing stage needs decortication. Delay traps the lung." },
  pneumothorax: { window: "Tension pneumothorax → immediate needle/finger decompression, no imaging; simple PTX → drain by size and symptoms", detail: "Tension is a clinical diagnosis and cannot wait for a chest X-ray. Definitive chest drain after decompression." },

  // HERNIA
  'strangulated-hernia': { window: "Strangulation (irreducible + tender + systemic signs) → emergency surgery within hours to salvage bowel", detail: "Do not forcibly reduce a strangulated hernia — you may reduce dead bowel. Obstruction without strangulation is urgent, not immediate." },
  'obturator-hernia': { window: "Often presents late as small-bowel obstruction in thin elderly women — operate promptly once diagnosed; high strangulation rate", detail: "Frequently found on CT (or at laparotomy for obstruction). Delay carries a high bowel-resection and mortality rate." },

  // SKIN & SOFT TISSUE
  melanoma: { window: "Wide local excision within 4–6 weeks of the diagnostic biopsy; sentinel node biopsy at the same time for ≥T1b", detail: "Prompt but not emergent. Margins are set by Breslow thickness. SLNB must be done at or before WLE, as WLE disrupts lymphatic drainage." },

  // ONCOLOGIC RESECTIONS — neoadjuvant sequencing / defined intervals
  crc: { window: "Elective resection within ~31 days of the decision to treat; obstructing/perforated → emergency. Rectal cancer: surgery ~8–12 weeks after neoadjuvant chemoradiation", detail: "Restage after neoadjuvant therapy before operating. A complete clinical response on the rectum may be watched ('watch-and-wait', reassessed to ~26 weeks) rather than resected." },
  'oesophageal-cancer': { window: "Esophagectomy ~4–8 weeks after neoadjuvant chemoradiation (CROSS regimen)", detail: "The interval lets acute radiation inflammation settle while avoiding fibrosis. Restaging PET/CT before surgery to exclude interval metastases." },
  'gastric-ca': { window: "Gastrectomy after neoadjuvant chemotherapy (perioperative FLOT), typically 4–6 weeks after the last cycle", detail: "Perioperative chemo improves survival over surgery alone. Emergency surgery only for perforation or uncontrollable bleeding." },
  'pancreatic-cancer': { window: "Resectable → surgery promptly (Whipple); borderline/locally advanced → neoadjuvant FOLFIRINOX then restage at ~2–4 months", detail: "Neoadjuvant therapy treats micrometastatic disease and improves R0 rates in borderline tumors. Reassess resectability on restaging imaging before committing to surgery." },
  'breast-ca': { window: "Surgery within ~4–6 weeks of diagnosis; if neoadjuvant chemotherapy, operate ~3–6 weeks after the last cycle", detail: "Neoadjuvant therapy downstages large/node-positive or HER2+/triple-negative tumors and enables breast conservation. Sequence radiotherapy after surgery." },
  hcc: { window: "Resection/ablation promptly once staged; transplant candidates within Milan criteria are listed, with bridging/downstaging therapy while waiting", detail: "Decisions follow the BCLC algorithm and liver function (Child–Pugh). Bridging (TACE/ablation) limits waitlist dropout from tumor progression." },
  'lung-cancer': { window: "Resection within ~4–8 weeks of diagnosis for early-stage disease; neoadjuvant chemo-immunotherapy then surgery for selected stage II–III", detail: "Timely surgery matters — prolonged delay allows upstaging. Confirm mediastinal staging (EBUS) before resection." },
  'liver-metastases': { window: "Colorectal liver metastases → resection after ~4–6 cycles of chemotherapy (or upfront if clearly resectable); portal vein embolization first if the future liver remnant is too small", detail: "Avoid over-treating with chemo (steatohepatitis, disappearing metastases). Synchronous disease: liver-first, bowel-first, or simultaneous depending on the dominant tumor." },

  // TRANSPLANT — cold-ischemia windows (graft viability clock)
  'renal-tx': { window: "Kidney cold-ischemia time ideally <18–24 h (DBD); keep DCD grafts shorter", detail: "Each additional hour of cold ischemia raises delayed graft function. Machine perfusion extends the safe window versus static cold storage." },
  'liver-tx': { window: "Liver cold-ischemia time ideally <8 h (tolerable up to ~12 h)", detail: "Prolonged cold ischemia raises primary non-function and ischemic cholangiopathy, especially in DCD grafts. Normothermic machine perfusion is extending the limit." },
  'pancreas-tx': { window: "Pancreas cold-ischemia time ideally <12 h", detail: "The pancreas is highly sensitive to ischemia; prolonged CIT increases graft thrombosis and pancreatitis. Prioritize short cold times when accepting the organ." },
  'small-bowel-tx': { window: "Intestinal cold-ischemia time kept short — ideally <6–9 h", detail: "The intestine is the most ischemia-sensitive abdominal graft; the mucosa deteriorates quickly, so short cold times and rapid revascularization are essential." },
};
let timingInjected = 0;
for (const [id, t] of Object.entries(TIMING_BY_ID)) {
  if (diseaseMap[id]) { diseaseMap[id].timing = t; timingInjected++; }
  else console.warn(`WARN: TIMING_BY_ID has no matching disease "${id}"`);
}
console.log(`Timing / golden-period blocks injected: ${timingInjected}`);

// ── Build DISEASES array ───────────────────────────────────────────────────
const parts = [];
for (const id of ID_ORDER) {
  if (SECTION_COMMENTS[id]) parts.push('\n' + SECTION_COMMENTS[id]);
  if (diseaseMap[id]) {
    parts.push(serializeDisease(diseaseMap[id]));
  } else if (stubMap[id]) {
    parts.push('  ' + stubMap[id]);
  } else {
    console.warn(`WARN: no content for "${id}"`);
  }
}

const DISEASES_BLOCK = 'const DISEASES = [\n' + parts.join(',\n\n') + '\n\n]; // end DISEASES';

// ── Build PROCEDURES and IMAGE_QUIZ_BANK from the disease data ────────────
const finalDiseases = ID_ORDER.map(id => diseaseMap[id]).filter(Boolean);

function slugify(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);
}

function firstSentence(s, fallback = '') {
  const text = String(s || '').trim();
  if (!text) return fallback;
  const m = text.match(/^(.{1,220}?[.!?])\s/);
  return m ? m[1] : text.slice(0, 220);
}

function pickOptions(disease, pool, seed) {
  const sameDept = pool.filter(d => d.dept === disease.dept && d.id !== disease.id);
  const other = pool.filter(d => d.dept !== disease.dept && d.id !== disease.id);
  const ranked = [...sameDept, ...other]
    .map((d, idx) => {
      const x = Math.sin((idx + 1) * 917 + seed * 53) * 10000;
      return { d, score: x - Math.floor(x) };
    })
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map(x => x.d.name);
  const answerText = disease.name;
  const insertAt = seed % 4;
  const options = ranked.slice(0, 3);
  options.splice(insertAt, 0, answerText);
  return { options, answer: options.indexOf(answerText) };
}

function buildSafetyChecklist(d, surgical, techniqueTitle) {
  const opName = techniqueTitle || surgical[0]?.name || `operation for ${d.name}`;
  const prep = Array.isArray(d.technique?.prep) ? d.technique.prep.slice(0, 4) : [];
  const anatomy = [
    ...(Array.isArray(d.keypoints) ? d.keypoints.slice(0, 3) : []),
    ...(Array.isArray(d.differentials) ? [`Confirm this is not: ${d.differentials.slice(0, 3).join(', ')}`] : [])
  ].filter(Boolean).slice(0, 4);
  const pitfalls = Array.isArray(d.mistakes) ? d.mistakes.slice(0, 4) : [];
  const pearls = [
    ...(Array.isArray(d.technique?.pearls) ? d.technique.pearls.slice(0, 3) : []),
    ...(Array.isArray(d.pearls) ? d.pearls.slice(0, 2) : [])
  ].filter(Boolean).slice(0, 4);

  return [
    {
      phase: 'Pre-op brief',
      items: [
        `Confirm patient, procedure (${opName}), side/site, consent, allergies, and indication.`,
        'Review imaging, staging, anatomy variants, and the planned incision/port strategy before anesthesia.',
        'Confirm antibiotics, VTE prophylaxis, blood availability, positioning, warming, and required special equipment.',
        ...(prep.length ? prep : ['Discuss expected difficulty, senior help threshold, and conversion/bailout plan.'])
      ].slice(0, 6)
    },
    {
      phase: 'Anatomy danger zones',
      items: anatomy.length ? anatomy : [
        'Identify the named vascular, ductal, nerve, and adjacent-organ structures before clipping, dividing, stapling, or ligating.',
        'Maintain exposure and orientation; stop if anatomy is unclear.'
      ]
    },
    {
      phase: 'Intra-op safety pause',
      items: [
        'Confirm exposure, proximal/distal control where relevant, and hemostasis before irreversible steps.',
        'Use a timeout before division of any duct, vessel, bowel, ureter, nerve-adjacent tissue, or major attachment.',
        'Check specimen orientation, margins, counts, drains, and hemostasis before closure.',
        ...(pearls.length ? pearls : ['Escalate early rather than late when progress is unsafe.'])
      ].slice(0, 7)
    },
    {
      phase: 'Bailout / stop points',
      items: pitfalls.length ? pitfalls : [
        'Convert, call senior help, drain, stage, or temporize if bleeding, unclear anatomy, sepsis, or physiology makes definitive surgery unsafe.',
        'Avoid pressing on with a textbook operation when the patient needs damage control or source control only.'
      ]
    },
    {
      phase: 'Post-op watch',
      items: [
        'Handover operation performed, key findings, complications, drains/tubes, antibiotics, VTE plan, diet, analgesia, and escalation criteria.',
        `Actively monitor for bleeding, sepsis, leak, ischemia, organ injury, and disease-specific complications after ${d.name}.`,
        'Document follow-up plan, pathology/imaging review, and when to restart anticoagulants or disease-specific medications.'
      ]
    }
  ];
}

const PROCEDURES = finalDiseases
  .filter(d => d.technique?.title || (Array.isArray(d.management?.surgical) && d.management.surgical.length > 0))
  .map(d => {
    const surgical = Array.isArray(d.management?.surgical) ? d.management.surgical : [];
    const primary = surgical[0] || {};
    const techniqueTitle = d.technique?.title || primary.name || `Surgical approach to ${d.name}`;
    return {
      id: `proc-${d.id}`,
      diseaseId: d.id,
      dept: d.dept,
      name: techniqueTitle,
      disease: d.name,
      organ: d.organ,
      severity: d.severity,
      summary: firstSentence(d.hero, `Procedure-oriented revision for ${d.name}.`),
      indications: surgical.slice(0, 4).map(s => ({
        name: s.name,
        when: s.when,
        notes: s.notes
      })),
      anatomyFocus: [
        ...(Array.isArray(d.keypoints) ? d.keypoints.slice(0, 2) : []),
        ...(Array.isArray(d.differentials) ? [`Differentiate from: ${d.differentials.slice(0, 4).join(', ')}`] : [])
      ].filter(Boolean).slice(0, 4),
      prep: Array.isArray(d.technique?.prep) ? d.technique.prep : [],
      steps: Array.isArray(d.technique?.steps) ? d.technique.steps : [],
      pearls: [
        ...(Array.isArray(d.technique?.pearls) ? d.technique.pearls : []),
        ...(Array.isArray(d.pearls) ? d.pearls.slice(0, 3) : [])
      ].slice(0, 6),
      pitfalls: Array.isArray(d.mistakes) ? d.mistakes.slice(0, 5) : [],
      safetyChecklist: buildSafetyChecklist(d, surgical, techniqueTitle),
      imageResources: Array.isArray(d.anatomyResources) ? d.anatomyResources.slice(0, 4) : [],
      videoResources: Array.isArray(d.videoResources) ? d.videoResources.slice(0, 4) : [],
      tags: [...new Set([...(d.tags || []), 'procedure', 'operative-steps'].filter(Boolean))].slice(0, 8)
    };
  });

const IMAGE_QUIZ_BANK = finalDiseases
  .filter(d => Array.isArray(d.anatomyResources) && d.anatomyResources.length > 0)
  .map((d, idx) => {
    const resource = d.anatomyResources[0];
    const opt = pickOptions(d, finalDiseases, idx + 1);
    return {
      id: `img-${d.id}`,
      dept: d.dept,
      disease: d.id,
      diseaseName: d.name,
      source: resource.source,
      url: resource.url,
      query: resource.query,
      tags: resource.tags || [],
      prompt: `Open the image reference set, then identify the condition or operative anatomy most consistent with ${d.organ || d.name}.`,
      stem: `Image recognition: which condition or surgical problem is this reference set intended to help identify?`,
      options: opt.options,
      answer: opt.answer,
      explanation: firstSentence(d.hero, `Review the linked images and anatomy for ${d.name}.`),
      anatomyFocus: Array.isArray(d.keypoints) ? d.keypoints.slice(0, 3) : []
    };
  });

const ALGORITHMS = [
  {
    id: 'acute-abdomen',
    title: 'Acute Abdomen',
    scope: 'Emergency general surgery',
    presentation: 'Severe abdominal pain, peritonism, sepsis, obstruction, bleeding, or diagnostic uncertainty.',
    urgency: 'time-critical',
    tags: ['acute abdomen', 'peritonitis', 'CT', 'laparotomy', 'source control'],
    redFlags: ['Shock or rising lactate', 'Generalized peritonitis', 'Free air or portal venous gas', 'Pain out of proportion', 'Immunosuppressed or elderly with subtle signs'],
    steps: [
      { n: 1, t: 'Resuscitate first', d: 'Assess ABCDE, IV access, bloods, VBG/ABG lactate, analgesia, antiemetic, catheter if sick, broad-spectrum antibiotics if sepsis/peritonitis.', actions: ['Do not delay resuscitation for imaging in a crashing patient', 'Call senior surgeon and anesthesia early'] },
      { n: 2, t: 'Decide unstable vs stable', d: 'Unstable with peritonitis or hemorrhage goes to urgent theater/resuscitation-led source control. Stable patients get focused imaging.', actions: ['FAST/bedside ultrasound if unstable', 'CT abdomen/pelvis with IV contrast if stable'] },
      { n: 3, t: 'Rule out lethal mimics', d: 'Think ruptured AAA, mesenteric ischemia, ectopic pregnancy, MI, DKA, pancreatitis, perforated viscus.', actions: ['ECG/troponin if epigastric pain or risk', 'Pregnancy test when relevant', 'CTA if vascular concern'] },
      { n: 4, t: 'Source-control decision', d: 'Operate or drain when sepsis/peritonitis, perforation, ischemia, strangulation, uncontrolled bleeding, or failed non-operative care.', actions: ['Choose laparoscopy vs laparotomy based on physiology and diagnosis', 'Damage-control if acidotic, cold, coagulopathic, or unstable'] },
      { n: 5, t: 'Post-op reassessment', d: 'Recheck lactate, urine output, pain, drain output, antibiotics, VTE plan, nutrition, and whether re-look is needed.', actions: ['Document escalation triggers', 'Plan re-imaging if no improvement'] }
    ],
    linkedDiseaseIds: ['acute-abdomen','appendicitis','diverticulitis','pud','mesenteric-isch','aaa','bowel-perforation']
  },
  {
    id: 'sepsis-peritonitis',
    title: 'Sepsis & Peritonitis',
    scope: 'Emergency source control',
    presentation: 'Septic surgical patient with suspected intra-abdominal, soft tissue, biliary, or anastomotic source.',
    urgency: 'time-critical',
    tags: ['sepsis', 'source control', 'antibiotics', 'lactate', 'damage control'],
    redFlags: ['Hypotension after fluid challenge', 'Lactate not clearing', 'Necrotizing infection', 'Diffuse peritonitis', 'Organ failure'],
    steps: [
      { n: 1, t: 'Recognize sepsis', d: 'Look for infection plus organ dysfunction: hypotension, hypoxia, AKI, altered mentation, thrombocytopenia, high lactate.', actions: ['Blood cultures before antibiotics if this does not delay care', 'Start broad-spectrum antibiotics early'] },
      { n: 2, t: 'Resuscitate and monitor', d: 'Oxygen, IV access, fluids/blood as appropriate, catheter, serial lactate, urine output, vasopressor/ICU if shock persists.', actions: ['Avoid endless crystalloid', 'Use blood products when bleeding or coagulopathy dominates'] },
      { n: 3, t: 'Find the source', d: 'CT with contrast when stable; bedside exam/imaging when unstable. Common sources: perforation, abscess, cholangitis, necrotizing fasciitis, leak.', actions: ['Do not let imaging delay theater for obvious peritonitis or necrotizing infection'] },
      { n: 4, t: 'Control the source', d: 'Drain pus, remove dead tissue, repair/resect perforation, decompress obstruction, drain biliary sepsis, or perform damage-control surgery.', actions: ['Percutaneous drainage if stable and suitable', 'Theater if source cannot be controlled radiologically'] },
      { n: 5, t: 'Reassess response', d: 'Failure to improve means missed source, inadequate drainage, resistant organism, leak/ischemia, or need for re-look.', actions: ['Repeat exam and imaging', 'Escalate early'] }
    ],
    linkedDiseaseIds: ['bowel-perforation','diverticulitis','cholangitis','necrotising-fasciitis','intestinal-fistula','acs']
  },
  {
    id: 'bowel-obstruction',
    title: 'Bowel Obstruction',
    scope: 'Small and large bowel',
    presentation: 'Colicky abdominal pain, vomiting, distension, obstipation, or radiological bowel dilatation.',
    urgency: 'urgent',
    tags: ['SBO', 'LBO', 'strangulation', 'CT', 'Gastrografin'],
    redFlags: ['Continuous severe pain', 'Fever/tachycardia/leukocytosis', 'Peritonism', 'Closed-loop obstruction', 'Pneumatosis or portal venous gas'],
    steps: [
      { n: 1, t: 'Initial stabilization', d: 'NPO, NG tube if vomiting/distended, IV fluids, electrolyte correction, analgesia, catheter if sick.', actions: ['Check lactate and renal function', 'Early senior review'] },
      { n: 2, t: 'Define SBO vs LBO', d: 'CT abdomen/pelvis with IV contrast identifies transition point, cause, closed-loop, ischemia, perforation, or malignancy.', actions: ['Avoid oral contrast if high-grade obstruction or aspiration risk'] },
      { n: 3, t: 'Non-operative SBO pathway', d: 'Adhesive SBO without ischemia/peritonitis can receive observation and water-soluble contrast challenge.', actions: ['If contrast reaches colon by 24 h, resolution likely', 'Failure or deterioration means surgery'] },
      { n: 4, t: 'Large bowel decision', d: 'Assess cecal diameter, perforation risk, tumor vs volvulus, and whether stent, endoscopic detorsion, resection, or diversion is safest.', actions: ['Sigmoid volvulus: endoscopic decompression if no peritonitis', 'Right-sided/closed-loop or perforation: urgent surgery'] },
      { n: 5, t: 'Operate safely', d: 'Plan incision/laparoscopy, adhesiolysis, bowel viability, resection/anastomosis vs stoma based on physiology and contamination.', actions: ['Warm questionable bowel and reassess', 'Do not force an anastomosis in unstable septic patient'] }
    ],
    linkedDiseaseIds: ['small-bowel-obstruction','large-bowel-obstruction','sigmoid-volvulus','caecal-volvulus','crc','strangulated-hernia']
  },
  {
    id: 'gi-bleeding',
    title: 'GI Bleeding',
    scope: 'Upper, lower, and obscure GI bleeding',
    presentation: 'Hematemesis, melena, hematochezia, shock, anemia, or occult/recurrent bleeding.',
    urgency: 'time-critical when unstable',
    tags: ['UGIB', 'LGIB', 'endoscopy', 'CTA', 'transfusion'],
    redFlags: ['Shock or syncope', 'Ongoing hematemesis', 'Massive hematochezia', 'Anticoagulated patient', 'Cirrhosis/varices'],
    steps: [
      { n: 1, t: 'Resuscitate and risk stratify', d: 'ABCDE, two large-bore IVs, group/crossmatch, CBC/coag/electrolytes/BUN-Cr/LFT, correct coagulopathy when appropriate.', actions: ['Restrictive transfusion unless exsanguinating or cardiac disease', 'Activate massive hemorrhage protocol if unstable'] },
      { n: 2, t: 'Localize likely source', d: 'Hematemesis/melena suggests upper GI; brisk upper GI bleeding can present as hematochezia.', actions: ['NG tube is selective, not mandatory', 'Always consider varices in liver disease'] },
      { n: 3, t: 'Endoscopy first for most UGIB', d: 'PPI for suspected peptic ulcer; terlipressin/antibiotics if variceal; urgent endoscopy after resuscitation.', actions: ['Airway protection if massive bleed or encephalopathy', 'Escalate to IR/surgery if endoscopic control fails'] },
      { n: 4, t: 'CTA for active severe LGIB', d: 'Unstable or ongoing lower GI bleeding benefits from CTA to guide embolization or surgery.', actions: ['Colonoscopy after purge when stable', 'Do not operate without localization unless life-saving'] },
      { n: 5, t: 'Prevent rebleeding', d: 'Treat cause, manage anticoagulation, eradicate H pylori, band varices, arrange surveillance when indicated.', actions: ['Document rebleed plan and escalation threshold'] }
    ],
    linkedDiseaseIds: ['ugib','melena','rectal-bleeding','pud','portal-hypertension','angiodysplasia']
  },
  {
    id: 'obstructive-jaundice',
    title: 'Obstructive Jaundice',
    scope: 'HPB pathway',
    presentation: 'Jaundice, dark urine, pale stool, pruritus, abnormal cholestatic LFTs, duct dilatation, or cholangitis.',
    urgency: 'urgent if septic',
    tags: ['jaundice', 'MRCP', 'ERCP', 'CBD stone', 'pancreatic cancer', 'cholangitis'],
    redFlags: ['Fever/rigors/hypotension/confusion', 'Rising bilirubin with sepsis', 'Courvoisier sign', 'Weight loss', 'Coagulopathy'],
    steps: [
      { n: 1, t: 'Separate cholangitis from painless jaundice', d: 'Cholangitis is sepsis plus biliary obstruction and needs antibiotics plus urgent biliary drainage.', actions: ['Do not wait for full workup if septic', 'ERCP drainage is usually first-line'] },
      { n: 2, t: 'Confirm obstructive pattern', d: 'LFTs, coagulation, ultrasound for duct dilatation/gallstones, then MRCP/CT pancreas protocol depending on suspicion.', actions: ['Correct vitamin K/coagulopathy if needed', 'Check tumor markers only after imaging context'] },
      { n: 3, t: 'Stone pathway', d: 'CBD stone: ERCP clearance or laparoscopic CBD exploration, then cholecystectomy to prevent recurrence.', actions: ['Cholecystectomy after ERCP when fit', 'Early ERCP if cholangitis'] },
      { n: 4, t: 'Malignant pathway', d: 'Pancreatic head, cholangiocarcinoma, gallbladder cancer or metastatic nodes require staging CT, MDT, and resectability decision.', actions: ['Avoid unnecessary pre-op stent if early surgery possible', 'Drain if cholangitis, severe jaundice delaying therapy, or neoadjuvant treatment planned'] },
      { n: 5, t: 'Definitive treatment', d: 'Stone clearance/cholecystectomy, Whipple/hepatectomy/biliary resection, or palliation with stent/bypass depending on disease and fitness.', actions: ['Discuss in HPB MDT'] }
    ],
    linkedDiseaseIds: ['cholangitis','choledocholithiasis','pancreatic-cancer','cholangiocarcinoma','gallbladder-cancer','psc']
  },
  {
    id: 'hernia-emergency',
    title: 'Hernia Emergency',
    scope: 'Abdominal wall and groin',
    presentation: 'Painful irreducible hernia, bowel obstruction, skin changes, systemic toxicity, or suspected strangulation.',
    urgency: 'time-critical if strangulated',
    tags: ['hernia', 'strangulation', 'obstruction', 'groin lump', 'mesh'],
    redFlags: ['Tender irreducible lump', 'Skin erythema or necrosis', 'Obstruction symptoms', 'Peritonitis', 'Sepsis or high lactate'],
    steps: [
      { n: 1, t: 'Assess viability risk', d: 'Pain, tenderness, systemic toxicity, obstruction and skin changes suggest strangulation rather than simple incarceration.', actions: ['Analgesia and resuscitation', 'Do not repeatedly force reduction'] },
      { n: 2, t: 'Attempt reduction only when safe', d: 'Gentle taxis may be appropriate for early, non-toxic, non-peritonitic incarceration with no skin change.', actions: ['Observe after successful taxis', 'No taxis if strangulation suspected'] },
      { n: 3, t: 'Image selectively', d: 'CT helps unclear anatomy, obesity, obstruction, obturator/spigelian hernia, or uncertain diagnosis; do not delay theater in obvious strangulation.', actions: ['Check lactate and inflammatory markers'] },
      { n: 4, t: 'Operate and assess bowel', d: 'Open or laparoscopic approach depends on site and physiology. Inspect bowel after reduction; resect if non-viable.', actions: ['Warm borderline bowel and reassess', 'Avoid mesh in gross contamination unless specialist decision'] },
      { n: 5, t: 'Prevent recurrence safely', d: 'Use mesh when clean field and viable bowel; tissue repair or delayed reconstruction if contaminated/unstable.', actions: ['Document bowel viability and repair choice'] }
    ],
    linkedDiseaseIds: ['inguinal-hernia','femoral-hernia','strangulated-hernia','obturator-hernia','spigelian-hernia','incisional-hernia']
  },
  {
    id: 'breast-lump',
    title: 'Breast Lump',
    scope: 'Breast clinic',
    presentation: 'Palpable breast lump, nipple change, axillary node, pain, discharge, or screen-detected lesion.',
    urgency: 'urgent cancer pathway if suspicious',
    tags: ['triple assessment', 'mammography', 'ultrasound', 'core biopsy', 'MDT'],
    redFlags: ['Hard irregular fixed mass', 'Skin tethering or peau d orange', 'Bloody unilateral nipple discharge', 'Palpable axillary node', 'Inflammatory breast signs not resolving'],
    steps: [
      { n: 1, t: 'Triple assessment', d: 'Clinical examination, imaging, and tissue diagnosis. All three must be concordant before reassurance.', actions: ['Mammography usually >40', 'Ultrasound for younger patients, dense breast, targeted lump/axilla'] },
      { n: 2, t: 'Biopsy correctly', d: 'Core biopsy for solid lesions; FNA mainly for cysts or selected nodes. Clip lesion if neoadjuvant therapy likely.', actions: ['Biopsy suspicious axillary nodes'] },
      { n: 3, t: 'Classify benign vs malignant', d: 'Fibroadenoma/cyst/abscess vs DCIS/invasive cancer/phyllodes. Discordant triple assessment needs repeat biopsy or excision.', actions: ['Do not reassure a suspicious clinical lump with benign imaging alone'] },
      { n: 4, t: 'Stage and plan treatment', d: 'ER/PR/HER2, grade, nodal status, tumor size, patient preference, genetics, and fitness guide surgery/systemic therapy.', actions: ['MDT discussion', 'Consider neoadjuvant therapy for selected HER2+/triple-negative/node-positive disease'] },
      { n: 5, t: 'Surgical pathway', d: 'Breast conservation plus radiotherapy or mastectomy; sentinel node biopsy or axillary treatment based on nodal status.', actions: ['Oncoplastic planning when margins/cosmesis matter'] }
    ],
    linkedDiseaseIds: ['breast-ca','dcis','phyllodes','breast-abscess']
  },
  {
    id: 'thyroid-nodule',
    title: 'Thyroid Nodule',
    scope: 'Endocrine surgery clinic',
    presentation: 'Palpable thyroid nodule, incidental ultrasound/CT nodule, compressive symptoms, lymph node, or hyperthyroid nodule.',
    urgency: 'urgent if airway, aggressive cancer, or sepsis',
    tags: ['thyroid', 'ultrasound', 'FNA', 'Bethesda', 'RLN'],
    redFlags: ['Rapid growth', 'Hoarseness', 'Stridor/dysphagia', 'Hard fixed nodule', 'Suspicious cervical nodes'],
    steps: [
      { n: 1, t: 'Check thyroid function first', d: 'TSH guides pathway. Hyperfunctioning nodules are rarely malignant and need radionuclide scan rather than immediate FNA.', actions: ['Check calcium if surgery likely', 'Assess voice/RLN symptoms'] },
      { n: 2, t: 'Risk-stratify ultrasound', d: 'Composition, echogenicity, margins, calcification, taller-than-wide shape, extrathyroidal extension and nodes guide FNA.', actions: ['Map central/lateral neck nodes'] },
      { n: 3, t: 'FNA and Bethesda', d: 'Benign surveillance, non-diagnostic repeat, indeterminate molecular/diagnostic lobectomy, suspicious/malignant surgical planning.', actions: ['Repeat inadequate sample under ultrasound guidance'] },
      { n: 4, t: 'Plan operation', d: 'Lobectomy vs total thyroidectomy plus nodal surgery depends on cancer risk, size, bilateral disease, nodes, radiation history and patient factors.', actions: ['Discuss RLN, hypocalcemia, lifelong thyroxine, scar'] },
      { n: 5, t: 'Post-op pathway', d: 'Calcium monitoring, histology risk stratification, radioiodine/endocrinology follow-up where indicated.', actions: ['Voice assessment if hoarse'] }
    ],
    linkedDiseaseIds: ['thyroid-ca','mng','graves','men2','phpt']
  },
  {
    id: 'colorectal-cancer-pathway',
    title: 'Colorectal Cancer Pathway',
    scope: 'Colorectal MDT',
    presentation: 'CRC symptoms, positive FIT/screening, iron deficiency anemia, obstruction, perforation, or metastatic disease.',
    urgency: 'urgent if obstructed, perforated, or bleeding',
    tags: ['CRC', 'colonoscopy', 'CT', 'MRI rectum', 'MDT', 'TME'],
    redFlags: ['Large bowel obstruction', 'Perforation', 'Ongoing bleeding/anemia', 'Weight loss', 'Synchronous liver lesions'],
    steps: [
      { n: 1, t: 'Confirm diagnosis', d: 'Colonoscopy with biopsy, tattoo distal lesion when appropriate, complete colonic assessment for synchronous lesions.', actions: ['CT colonography if incomplete colonoscopy'] },
      { n: 2, t: 'Stage properly', d: 'CT chest/abdomen/pelvis for all; MRI pelvis for rectal cancer; CEA baseline; assess liver lesions carefully.', actions: ['Do not plan rectal surgery without pelvic MRI'] },
      { n: 3, t: 'Emergency presentation', d: 'Obstruction/perforation may need stent, defunctioning stoma, Hartmann, resection, or damage-control depending on site and physiology.', actions: ['Avoid primary anastomosis in unstable septic patient'] },
      { n: 4, t: 'MDT treatment sequence', d: 'Colon: surgery then adjuvant as indicated. Rectum: neoadjuvant therapy if threatened CRM/locally advanced; TME surgery.', actions: ['Discuss CRM, EMVI, nodes, sphincter preservation'] },
      { n: 5, t: 'Surveillance and recurrence', d: 'Histology, margins, nodes, molecular markers, adjuvant therapy, colonoscopy and CEA/CT follow-up.', actions: ['Refer genetics if young, Lynch/FAP features, or strong family history'] }
    ],
    linkedDiseaseIds: ['crc','large-bowel-obstruction','liver-metastases','fap','lynch','anal-cancer']
  },
  {
    id: 'atls-primary-survey-algorithm',
    title: 'ATLS 11 Primary Survey',
    scope: 'Trauma bay',
    presentation: 'Major trauma, unstable injured patient, polytrauma, penetrating injury, or high-energy mechanism.',
    urgency: 'immediate',
    tags: ['ATLS 11', 'X-ABCDE', 'hemorrhage', 'airway', 'shock'],
    redFlags: ['Exsanguinating hemorrhage', 'Airway obstruction', 'Tension pneumothorax', 'Pelvic hemorrhage', 'GCS deterioration'],
    steps: [
      { n: 1, t: 'X: Exsanguinating hemorrhage', d: 'Control catastrophic external bleeding before airway when present.', actions: ['Direct pressure, tourniquet, hemostatic dressing, pelvic binder'] },
      { n: 2, t: 'A: Airway with spine protection', d: 'Assess patency, protect cervical spine, prepare RSI or surgical airway if needed.', actions: ['Call anesthesia early', 'Do not miss maxillofacial/neck injury'] },
      { n: 3, t: 'B: Breathing', d: 'Treat immediately lethal chest injuries clinically.', actions: ['Needle/finger decompression for tension pneumothorax', 'Chest drain for hemothorax/pneumothorax'] },
      { n: 4, t: 'C: Circulation', d: 'Control hemorrhage, activate MTP, give TXA if within 3 h, identify chest/abdomen/pelvis/long bone bleeding.', actions: ['FAST/eFAST', 'Pelvic binder', 'Theater/IR/REBOA decision'] },
      { n: 5, t: 'D/E and re-evaluate', d: 'GCS/pupils/glucose, expose fully, prevent hypothermia, repeat primary survey after each intervention.', actions: ['CT only when stable enough', 'Document response to resuscitation'] }
    ],
    linkedDiseaseIds: ['atls-primary-survey','atls-haemorrhagic-shock','atls-airway','pelvic-fracture','chest-trauma','trauma-laparotomy']
  }
];

const PROCEDURES_BLOCK = 'const PROCEDURES = [\n'
  + PROCEDURES.map(p => '  ' + jsVal(p, 1)).join(',\n')
  + '\n];';

const IMAGE_QUIZ_BLOCK = 'const IMAGE_QUIZ_BANK = [\n'
  + IMAGE_QUIZ_BANK.map(q => '  ' + jsVal(q, 1)).join(',\n')
  + '\n];';

const ALGORITHMS_BLOCK = 'const ALGORITHMS = [\n'
  + ALGORITHMS.map(a => '  ' + jsVal(a, 1)).join(',\n')
  + '\n];';

// ── Write new data.jsx ─────────────────────────────────────────────────────
const out = [
  '// data.jsx — Surgical Knowledge — auto-generated by combine.js',
  '// Schwartz\'s Principles of Surgery, 11th ed. + ESMO/NICE/ESCP/ESVS/ENETS guidelines',
  '',
  DEPARTMENTS_BLOCK,
  '',
  DISEASES_BLOCK,
  '',
  '// ─── PROCEDURE MODE ───',
  PROCEDURES_BLOCK,
  '',
  '// ─── IMAGE QUIZ MODE ───',
  IMAGE_QUIZ_BLOCK,
  '',
  '// ─── DECISION ALGORITHMS ───',
  ALGORITHMS_BLOCK,
  '',
  '// ─── SCORING SYSTEMS ───',
  SCORING_BLOCK,
  '',
  '// ─── QUIZ BANK ───',
  QUIZ_BANK_BLOCK,
  '',
  '// Expose all data on window so the React component blocks can read it.',
  '// Each <script type="text/babel"> block runs in its own scope, so the',
  '// top-level consts above are NOT visible to later blocks — they all read',
  '// window.SK_DATA, so this assignment is required or the app crashes on render.',
  'window.SK_DATA = { DEPARTMENTS, DISEASES, PROCEDURES, IMAGE_QUIZ_BANK, ALGORITHMS, SCORING, QUIZ_BANK };',
  '',
].join('\n');

const outPath = path.join(DIR, 'data.jsx');
fs.writeFileSync(outPath, out, 'utf8');
const sizeMB = (fs.statSync(outPath).size / 1e6).toFixed(2);
console.log(`\nWrote data.jsx  ${sizeMB} MB`);

const covered = ID_ORDER.filter(id => diseaseMap[id]).length;
const stub    = ID_ORDER.filter(id => !diseaseMap[id] && stubMap[id]).length;
const missing = ID_ORDER.filter(id => !diseaseMap[id] && !stubMap[id]).length;
console.log(`Coverage: ${covered} full, ${stub} stubs, ${missing} missing`);
console.log(`Generated: ${PROCEDURES.length} procedures, ${IMAGE_QUIZ_BANK.length} image quiz cards, ${ALGORITHMS.length} algorithms`);
if (missing > 0) {
  console.log('Missing:', ID_ORDER.filter(id => !diseaseMap[id] && !stubMap[id]));
}
