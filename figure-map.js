// figure-map.js — single source of truth mapping diseaseId → [figureId, ...].
// Consumed by combine.js, which attaches `figures:[]` to each matching disease
// so DetailView renders the inline SVG diagrams from window.SK_FIGURES.
// Figure ids are defined in figures.jsx and the per-department figures-*.jsx files.
'use strict';

module.exports = {
  // ── COLORECTAL ──────────────────────────────────────────────────────────
  'colorectal-polyp': ['paris-classification', 'kudo-pit-pattern', 'jnet-classification', 'bowel-wall-layers', 'haggitt-levels'],
  'diverticulitis': ['hinchey-classification'],
  'bowel-perforation': ['hinchey-classification'],
  'haemorrhoids': ['goligher-grade'],
  'anal-fistula': ['parks-anal-fistula'],
  'perianal-abscess': ['parks-anal-fistula'],
  'crc': ['haggitt-levels'],
  'anal-cancer': ['anal-canal-zones'],
  'anal-fissure': ['anal-canal-zones'],
  'sigmoid-volvulus': ['volvulus-schematic'],
  'caecal-volvulus': ['volvulus-schematic'],
  'large-bowel-obstruction': ['volvulus-schematic'],

  // ── VASCULAR ────────────────────────────────────────────────────────────
  'aaa': ['vasc-aaa-size-ladder'],
  'taa': ['vasc-aortic-dissection-stanford-debakey'],
  'aortic-dissection': ['vasc-aortic-dissection-stanford-debakey'],
  'carotid': ['vasc-nascet-carotid-stenosis'],
  'pad': ['vasc-rutherford-pad-stages'],
  'cli': ['vasc-rutherford-pad-stages'],
  'mesenteric-isch': ['vasc-mesenteric-isch-anatomy'],

  // ── HPB & SPLEEN ────────────────────────────────────────────────────────
  'cholangiocarcinoma': ['hpb-bismuth-corlette'],
  'icc': ['hpb-couinaud-segments'],
  'hcc': ['hpb-couinaud-segments'],
  'liver-metastases': ['hpb-couinaud-segments'],
  'hepatic-adenoma': ['hpb-couinaud-segments'],
  'ap': ['hpb-atlanta-collections', 'hpb-biliary-anatomy-stone'],
  'pancreatic-pseudocyst': ['hpb-atlanta-collections'],
  'cholecystitis': ['hpb-tokyo-severity', 'hpb-strasberg-bdi'],
  'cholangitis': ['hpb-tokyo-severity', 'hpb-biliary-anatomy-stone'],
  'choledocholithiasis': ['hpb-biliary-anatomy-stone'],
  'biliary-colic': ['hpb-biliary-anatomy-stone'],
  'psc': ['hpb-bismuth-corlette', 'hpb-biliary-anatomy-stone'],

  // ── UPPER GI ────────────────────────────────────────────────────────────
  'hiatus-hernia': ['ugi-hiatus-hernia-types'],
  'gord': ['ugi-los-angeles-grade', 'ugi-hiatus-hernia-types'],
  'ugib': ['ugi-forrest-classification'],
  'pud': ['ugi-forrest-classification'],
  'melena': ['ugi-forrest-classification'],
  'achalasia': ['ugi-achalasia-chicago'],
  'dysphagia': ['ugi-achalasia-chicago', 'ugi-zenker-anatomy'],
  'zenker': ['ugi-zenker-anatomy'],
  'bariatric': ['ugi-bariatric-anatomy'],
  'barretts': ['ugi-los-angeles-grade'],

  // ── BREAST & ENDOCRINE ──────────────────────────────────────────────────
  'breast-ca': ['breast-axillary-levels'],
  'dcis': ['breast-axillary-levels'],
  'nipple-sparing-mastectomy': ['breast-axillary-levels'],
  'phyllodes': ['breast-axillary-levels'],
  'breast-abscess': ['breast-axillary-levels'],
  'thyroid-ca': ['bethesda-thyroid'],
  'mivat': ['bethesda-thyroid'],
  'graves': ['bethesda-thyroid'],
  'mng': ['bethesda-thyroid'],
  'phpt': ['parathyroid-anatomy'],
  'shpt': ['parathyroid-anatomy'],
  'adrenal-incidentaloma': ['adrenal-incidentaloma-workup'],
  'cushings-adrenal': ['adrenal-incidentaloma-workup'],
  'conns': ['adrenal-incidentaloma-workup'],
  'phaeochromocytoma': ['adrenal-incidentaloma-workup', 'men-syndromes-map'],
  'adrenocortical-ca': ['adrenal-incidentaloma-workup'],
  'men1': ['men-syndromes-map', 'parathyroid-anatomy'],
  'men2': ['men-syndromes-map'],
  'insulinoma': ['men-syndromes-map'],

  // ── TRAUMA & ACUTE CARE ─────────────────────────────────────────────────
  'atls-haemorrhagic-shock': ['trauma-haemorrhagic-shock-classes'],
  'atls-primary-survey': ['trauma-haemorrhagic-shock-classes'],
  'splenic-trauma': ['trauma-aast-spleen'],
  'liver-trauma': ['trauma-aast-liver'],
  'burns': ['trauma-burns-rule-of-nines'],
  'chest-trauma': ['trauma-triangle-of-safety'],

  // ── TRANSPLANT ──────────────────────────────────────────────────────────
  'renal-tx': ['tx-renal-anatomy', 'tx-rejection-timeline'],
  'liver-tx': ['tx-liver-caval-technique', 'tx-rejection-timeline'],
  'pancreas-tx': ['tx-rejection-timeline'],
  'small-bowel-tx': ['tx-rejection-timeline'],
  'living-donor-hepatectomy': ['tx-couinaud-segments', 'tx-liver-caval-technique'],

  // ── THORACIC ────────────────────────────────────────────────────────────
  'mediastinal-mass': ['tho-mediastinal-compartments'],
  'thymoma': ['tho-masaoka-koga-thymoma', 'tho-mediastinal-compartments'],
  'pneumothorax': ['tho-pneumothorax-types', 'tho-triangle-of-safety'],
  'haemothorax': ['tho-triangle-of-safety'],
  'empyema': ['tho-triangle-of-safety'],
  'lung-cancer': ['tho-lung-cancer-nodal'],
  'lung-carcinoid': ['tho-lung-cancer-nodal'],
  'congenital-diaphragmatic-hernia': ['tho-cdh-locations'],

  // ── HERNIA & ABDOMINAL WALL ─────────────────────────────────────────────
  'inguinal-hernia': ['hernia-fruchaud-orifice', 'hernia-hesselbach-triangle', 'hernia-nyhus-classification', 'hernia-abdominal-wall-layers'],
  'femoral-hernia': ['hernia-fruchaud-orifice', 'hernia-femoral-canal-anatomy'],
  'umbilical-hernia': ['hernia-abdominal-wall-layers'],
  'incisional-hernia': ['hernia-abdominal-wall-layers'],
  'epigastric-hernia': ['hernia-abdominal-wall-layers'],
  'strangulated-hernia': ['hernia-femoral-canal-anatomy', 'hernia-hesselbach-triangle'],
  'parastomal-hernia': ['hernia-abdominal-wall-layers'],
  'spigelian-hernia': ['hernia-abdominal-wall-layers'],
  'obturator-hernia': ['hernia-femoral-canal-anatomy'],

  // ── SKIN & SOFT TISSUE ──────────────────────────────────────────────────
  'melanoma': ['skin-melanoma-breslow-margins', 'skin-clark-breslow-anatomy', 'skin-abcde-melanoma'],
  'bcc': ['skin-bcc-scc-origin'],
  'scc-skin': ['skin-bcc-scc-origin'],
  'hidradenitis': ['skin-hurley-staging'],

  // ── MINIMALLY INVASIVE SURGERY ──────────────────────────────────────────
  'mis-principles': ['mis-port-placement', 'mis-energy-devices'],
  'lap-access': ['mis-access-techniques', 'mis-port-placement'],
  'mis-energy': ['mis-energy-devices'],
  'mis-complications': ['mis-calot-cvs', 'mis-access-techniques'],
  'robotic-surgery': ['mis-port-placement'],
  'diagnostic-laparoscopy': ['mis-port-placement', 'mis-access-techniques'],
  'conversion-to-open': ['mis-access-techniques'],
  'lap-inguinal-hernia': ['mis-tep-vs-tapp'],
};
