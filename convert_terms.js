// convert_terms.js — British → American medical-English conversion.
// Case-preserving stem rules. PROTECTS quoted values of id / diseaseId / latin
// (and the { id: "..." } entries inside `related` arrays) so internal disease
// IDs and Latin binomials stay byte-for-byte unchanged.
//
// Usage: node convert_terms.js file1.js file2.js ...
//
// Idempotent: American output contains none of the British stems, so running
// the script twice is a no-op on already-converted text.

const fs = require('fs');

// ---- case preservation -----------------------------------------------------
// Given the British text that was matched and the American stem, produce an
// American stem whose capitalisation mirrors the British match.
function casePreserve(matched, american) {
  if (matched === matched.toUpperCase() && matched !== matched.toLowerCase()) {
    return american.toUpperCase();            // ALL CAPS  -> ALL CAPS
  }
  if (matched[0] === matched[0].toUpperCase() && matched[0] !== matched[0].toLowerCase()) {
    return american[0].toUpperCase() + american.slice(1); // Title -> Title
  }
  return american;                            // lower -> lower
}

// ---- rule sets -------------------------------------------------------------
// Stems matched case-insensitively as substrings; only the stem is replaced,
// the remainder of the word (suffix) is preserved automatically.
const STEM_RULES = [
  // ae / oe medical spellings
  ['oesophag', 'esophag'],
  ['oestr',    'estr'],
  ['oedem',    'edem'],          // oedema, oedematous, lymphoedema(text)
  ['aem',      'em'],            // haem-, anaem-, ischaem-, leukaem-, -aemia, septicaem-
  ['coeliac',  'celiac'],
  ['paed',     'ped'],
  ['gynaec',   'gynec'],
  ['anaesth',  'anesth'],
  ['aetiolog', 'etiolog'],
  ['faec',     'fec'],
  ['caec',     'cec'],
  ['amoeb',    'ameb'],
  ['foet',     'fet'],
  ['pnoea',    'pnea'],          // dyspnoea, apnoea, tachypnoea
  ['rhoea',    'rhea'],          // diarrhoea, gonorrhoea
  ['melaen',   'melen'],         // melaena, melaenic
  ['leucocyt', 'leukocyt'],      // leucocyte, leucocytosis
  ['leucopen', 'leukopen'],      // leucopenia
  ['mould',    'mold'],          // mould, moulded, moulding
  ['orthopaed','orthoped'],
  ['appendicectom','appendectom'],  // appendicectomy -> appendectomy (procedure name)
  // -our -> -or  (explicit, never blanket)
  ['tumour',    'tumor'],
  ['colour',    'color'],
  ['behaviour', 'behavior'],
  ['favour',    'favor'],
  ['vapour',    'vapor'],
  ['odour',     'odor'],
  ['labour',    'labor'],
  ['honour',    'honor'],
  ['humour',    'humor'],
  // -re -> -er  (explicit)
  ['centre',   'center'],
  ['fibre',    'fiber'],
  ['litre',    'liter'],
  ['metre',    'meter'],         // centimetre, millimetre
  ['calibre',  'caliber'],
  ['theatre',  'theater'],
  // -ce / -se
  ['defence',  'defense'],
  ['offence',  'offense'],
  ['licence',  'license'],
  // misc
  ['sulph',     'sulf'],         // sulphate, sulphonylurea
  ['orientated','oriented'],
  ['speciality','specialty'],
  ['whilst',    'while'],
  ['grey',      'gray'],
];

// Stems that require a suffix lookahead (to avoid false positives such as
// "analysis", "exercise"). Replace the stem, keep the suffix.
const SUFFIX_RULES = [
  // -ise -> -ize  (safelisted stems only)
  ['organis',      'organiz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['characteris',  'characteriz',  '(?=e|es|er|ers|ed|ing|ation)'],
  ['normalis',     'normaliz',     '(?=e|es|er|ers|ed|ing|ation)'],
  ['stabilis',     'stabiliz',     '(?=e|es|er|ers|ed|ing|ation)'],
  ['mobilis',      'mobiliz',      '(?=e|es|er|ers|ed|ing|ation)'],   // also (im)mobilis
  ['optimis',      'optimiz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['minimis',      'minimiz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['maximis',      'maximiz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['localis',      'localiz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['generalis',    'generaliz',    '(?=e|es|er|ers|ed|ing|ation)'],
  ['utilis',       'utiliz',       '(?=e|es|er|ers|ed|ing|ation)'],
  ['visualis',     'visualiz',     '(?=e|es|er|ers|ed|ing|ation)'],
  ['recognis',     'recogniz',     '(?=e|es|er|ers|ed|ing|ation)'],
  ['hospitalis',   'hospitaliz',   '(?=e|es|er|ers|ed|ing|ation)'],
  ['catheteris',   'catheteriz',   '(?=e|es|er|ers|ed|ing|ation)'],
  ['colonis',      'coloniz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['immunis',      'immuniz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['sterilis',     'steriliz',     '(?=e|es|er|ers|ed|ing|ation)'],
  ['embolis',      'emboliz',      '(?=e|es|er|ers|ed|ing|ation)'],   // (angio/de)embolisation
  ['necrotis',     'necrotiz',     '(?=e|es|er|ers|ed|ing|ation)'],   // necrotising
  ['vascularis',   'vasculariz',   '(?=e|es|er|ers|ed|ing|ation)'],   // (re/de)vascularisation
  ['pressuris',    'pressuriz',    '(?=e|es|er|ers|ed|ing|ation)'],
  ['virilis',      'viriliz',      '(?=e|es|er|ers|ed|ing|ation)'],
  ['temporis',     'temporiz',     '(?=e|es|er|ers|ed|ing|ation)'],
  ['lateralis',    'lateraliz',    '(?=e|es|er|ers|ed|ing|ation)'],
  ['ionis',        'ioniz',        '(?=e|es|er|ers|ed|ing|ation)'],
  ['practis',      'practic',      '(?=e|es|ed|ing)'],          // practise -> practice
  // -lyse / -yse -> -lyze / -yze  (exclude "es"/"is" plural-noun forms)
  ['analys',       'analyz',       '(?=e|ed|ing)'],
  ['paralys',      'paralyz',      '(?=e|ed|ing|is|es)'],       // paralysis ok to keep? keep British->amer same; safe
  ['dialys',       'dialyz',       '(?=e|ed|ing)'],
  ['catalys',      'catalyz',      '(?=e|ed|ing)'],
  ['electrolys',   'electrolyz',   '(?=e|ed|ing)'],
  ['haemolys',     'hemolyz',      '(?=e|ed|ing)'],             // (aem rule also covers stem text)
];

// Inflection-sensitive whole-word rules (the American form drops/keeps a vowel
// the bare-stem rule would otherwise corrupt). Matched case-insensitively,
// capitalisation mirrored via casePreserve on the whole word.
const WORD_RULES = [
  [/\bprogramme(s?)\b/gi,        (m, s) => 'program' + s],
  [/\bcentre(s?)\b/gi,           (m, s) => 'center' + s],
  [/\bcentred\b/gi,              () => 'centered'],
  [/\bcentring\b/gi,             () => 'centering'],
  [/\bmanoeuvre(s?)\b/gi,        (m, s) => 'maneuver' + s],
  [/\bmanoeuvred\b/gi,           () => 'maneuvered'],
  [/\bmanoeuvring\b/gi,          () => 'maneuvering'],
];

// Whole-token, case-SENSITIVE abbreviation swaps.
const ABBREV_RULES = [
  [/\bOGD\b/g,   'EGD'],
  [/\bGORD\b/g,  'GERD'],
  [/\bFBC\b/g,   'CBC'],
  [/\bU&Es\b/g,  'electrolytes/BUN-Cr'],
  [/\bU&E\b/g,   'electrolytes/BUN-Cr'],
  [/\bWCC\b/g,   'WBC'],
];

// ---- protection ------------------------------------------------------------
// Mask, in priority order, segments that must survive byte-for-byte:
//   1. full URLs (domain + British search-query strings sent to Radiopaedia)
//   2. quoted values of structural / search keys
//      - id / diseaseId / latin : internal IDs & Latin binomials
//      - url / href / query / source : resource-link plumbing (the image-atlas
//        queries are deliberately British to match Radiopaedia's content, and
//        were tuned for strict AND-matching — see project memory)
//   3. the brand word "Radiopaedia" wherever it appears as prose/label
const PROTECT_PATTERNS = [
  /\bhttps?:\/\/[^\s"'`<>]+/g,
  /\b(id|diseaseId|latin|url|href|query|source)\s*:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
  /Radiopaedia/gi,
  // combine.js safety: bare disease/department IDs live in array & Set literals.
  /const (ID_ORDER|TMP_FILES)\s*=\s*\[[\s\S]*?\];/g,
  /new Set\(\[[^\]]*\]\)/g,
  // Any quoted kebab-case token is an ID/slug/tag, never user-facing prose —
  // protects bare IDs in linkedDiseaseIds / related / SKIP_IDS arrays.
  /(['"])[a-z0-9]+(?:-[a-z0-9]+)+\1/g,
  // Single-word British disease IDs (no hyphen) that contain convertible stems;
  // protect them as quoted tokens wherever referenced.
  /(['"])(haemorrhoids|lymphoedema|haemothorax|phaeochromocytoma|boerhaave)\1/g,
];

function convert(text) {
  // 1. mask protected segments
  const vault = [];
  let masked = text;
  for (const re of PROTECT_PATTERNS) {
    masked = masked.replace(re, (m) => {
      const token = `\u0000P${vault.length}\u0000`;
      vault.push(m);
      return token;
    });
  }

  let out = masked;
  const counts = {};

  // 2. abbreviations (case-sensitive)
  for (const [re, rep] of ABBREV_RULES) {
    out = out.replace(re, (m) => { counts[rep] = (counts[rep]||0)+1; return rep; });
  }

  // 2b. inflection-sensitive whole-word rules
  for (const [re, fn] of WORD_RULES) {
    out = out.replace(re, (...args) => {
      const m = args[0];
      const amer = fn(...args);
      counts[amer.toLowerCase()] = (counts[amer.toLowerCase()]||0)+1;
      return casePreserve(m, amer);
    });
  }

  // 3. suffix-guarded stems (run before bare stems so e.g. haemolyse handled)
  for (const [brit, amer, look] of SUFFIX_RULES) {
    const re = new RegExp(brit + look, 'gi');
    out = out.replace(re, (m) => { counts[amer]=(counts[amer]||0)+1; return casePreserve(m, amer); });
  }

  // 4. bare stems
  for (const [brit, amer] of STEM_RULES) {
    const re = new RegExp(brit, 'gi');
    out = out.replace(re, (m) => { counts[amer]=(counts[amer]||0)+1; return casePreserve(m, amer); });
  }

  // 5. restore protected segments (loop: patterns can nest, e.g. a URL inside
  //    a url:"..." value, so one pass may leave inner tokens behind)
  let prev;
  do {
    prev = out;
    out = out.replace(/\u0000P(\d+)\u0000/g, (_, i) => vault[Number(i)]);
  } while (out !== prev);

  return { out, counts };
}

// ---- driver ----------------------------------------------------------------
const files = process.argv.slice(2);
if (!files.length) { console.error('No files given'); process.exit(1); }

const grand = {};
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const { out, counts } = convert(src);
  if (out !== src) {
    fs.writeFileSync(f, out);
    const total = Object.values(counts).reduce((a,b)=>a+b,0);
    console.log(`${f}: ${total} replacements`);
    for (const k in counts) grand[k] = (grand[k]||0) + counts[k];
  } else {
    console.log(`${f}: no change`);
  }
}
console.log('\n=== grand totals by target ===');
for (const k of Object.keys(grand).sort()) console.log(`  ${k}: ${grand[k]}`);
