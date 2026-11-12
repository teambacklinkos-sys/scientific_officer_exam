# MPPSC Scientific Officer (Biology) 2026 — MCQ Test App Plan

Built the same way as `resa` (teambacklinkos-sys/resa) and `icmr-mcq` (icmr-mcq.vercel.app).

## 1. Exam facts (from MPPSC notification dated 08-05-2026)

| Section | Questions | Marks |
|---|---|---|
| Section A: General Studies (Madhya Pradesh-focused) | 50 | 150 |
| Section B: Biology (Forensic Biology) | 100 | 300 |
| **Written total** | **150** | **450** |
| Interview | – | 50 |

- One sitting, 3 hours, offline OMR, 4 options, one correct answer
- **Marking: +3 for a correct answer, −1 for a wrong one, 0 if left blank** (score = 3R − W)
- 40% needed in **each** section separately (30% for SC/ST/OBC/EWS/PH), so 60/150 in GS and 120/300 in Biology
- Paper is in Hindi and English; the Hindi version counts when the two differ
- Merit is the sum of both sections

**Key point:** Section B is *forensic* biology (DNA profiling, serology, FSL work, toxicology). It is not general biology. Questions should be pitched at what a Scientific Officer in an FSL does.

## 2. App: same as RESA/ICMR, with three small changes

Copy `resa` as it is: Vite + React 19, vanilla CSS, `App.jsx` holding the test list with screens list → detail → test → result, `TestDetail` / `TestScreen` / `ResultScreen`, `public/notes.html`, `NOTES.md`, and data files `src/data/<topic>-test<n>.js` that each export `{ id, question, options[4], answer (0-3), explanation }`.

Changes:
1. **Branding:** logo "MPPSC", subtitle "Scientific Officer (Biology) 2026", page title, favicon.
2. **Marking moves into one config.** It is now +3 / −1, where the old builds hard-coded +1 / −1/3. The same constant drives the detail-page cards, instructions, score, "out of" total and the correct/wrong breakdown.
3. **Section-wise result for full mocks only.** Each mock entry declares `sections: [{ name: 'General Studies', from: 1, to: 50 }, { name: 'Biology', from: 51, to: 150 }]`. The result screen then shows each section's score with a pass/fail check against the 40% cut-off. Topic tests are unchanged.

Timer: keep the existing count-up timer. The detail page gets a "suggested time" line: 60 min for 50 questions, 180 min for a mock. That matches the real pace of 1.2 min per question.

## 3. Test inventory (50 MCQs per topic test, 150 per mock)

### Section B: Biology (28 tests, 1,400 MCQs). Priority order: Unit II → III → I → IV → V

**Forensic Molecular Biology & DNA (Unit II): 6 tests**
1. Human genetics & hereditary disorders (Mendelian, X-linked, chromosomal syndromes, pedigrees)
2. DNA isolation (organic, Chelex, silica, differential extraction for sexual-assault samples), purification, quantification
3. PCR & variants: multiplex, real-time, qPCR, ARMS, inhibitors, controls
4. DNA sequencing (Sanger, NGS/MPS), mtDNA analysis (HV1/HV2, heteroplasmy), cytoplasmic inheritance
5. STR analysis (CODIS core loci, allelic ladder, stutter, mixtures, Y-STR), SNP, SSCP, DGGE
6. Kinship/paternity statistics (PI, CPI, LR, RMP) and molecular diagnosis of pathogens in forensic cases

**Forensic Serology & Immunotechnology (Unit III): 5 tests**
1. ABO, Rh, Bombay phenotype, secretor status, antigen-antibody reactions, absorption-elution, Lattes crust test
2. ELISA, immunodiffusion (Ouchterlony), immuno-electrophoresis, precipitin test, species identification
3. Body-fluid detection: presumptive vs confirmatory tests (Kastle-Meyer, luminol, TMB, Takayama, Teichmann, AP, PSA/p30, Florence, Barberio, amylase), hair and epidermal-cell microscopy, microflora
4. Cellular degradation of tissues and organs (autolysis, putrefaction, DNA/RNA degradation)
5. Forensic use of vaccines and antibodies, diagnostic kits (lateral flow, RSID)

**Fundamentals of Forensic Biology (Unit I): 6 tests**
1. Scope, principles (Locard, individuality, exchange), ethics, significance; prokaryotic vs eukaryotic cells
2. Microbial diversity; human skeletal system (age, sex and stature from bones)
3. Skin, epithelial cells, spermatozoa, leukocytes, nails, hair and fibres
4. Pollen and spores (palynology), dendrochronology, forensic entomology, blowfly life cycle, post-mortem interval (PMI)
5. Biological evidence: blood, semen, saliva, tissue, bone, teeth, urine, faeces, vaginal secretions; the microbes, fungi and insects that decompose a body
6. Chromosome structure and numerical variation, abnormalities, genetic markers, mitochondria, enzymes, DNA/RNA

**Forensic & Analytical Techniques (Unit IV): 6 tests**
1. Toxicology principles, metabolites, chemical poisons
2. Microscopy: light, polarized, fluorescence, confocal (plus comparison and SEM basics)
3. Centrifugation and chromatography (TLC, HPLC, GC)
4. Gel electrophoresis and spectroscopy (UV-Vis, IR, fluorescence, AAS)
5. Mass spectrometry: MALDI-TOF, LC-MS, GC-MS
6. Biomarkers in body fluids and tissues; detecting drugs in biological samples

**FSL Organisation, Evidence & Databases (Unit V): 5 tests**
1. FSL structure in India (CFSL, SFSL, RFSL, DFSS, MP FSL Sagar), NCRB, LNJN NICFS; forensic provisions in BNSS/BSA 2023
2. Collecting and preserving biological samples, packaging, chain of custody
3. CRISPR-Cas and genome editing in forensic research
4. Bioinformatics and forensic genomic databases (CODIS, NDNAD, EMPOP, STRBase, GenBank/BLAST)
5. Proteomics and diagnostic proteomics in investigations

### Section A: General Studies (21 tests, 1,050 MCQs)
- **MP History: 4 tests** (prehistoric/protohistoric/ancient, medieval, modern, freedom movement + tribal history)
- **MP Geography: 4 tests** (location/rivers/mountains, climate/soils/forests, agriculture/irrigation, energy/minerals/population/transport)
- **MP Polity & Economy: 5 tests** (constitutional bodies, administration/Panchayati Raj, state commissions + the 4 named Acts, economy overview/agriculture, industry/SDG/MPI)
- **MP Tribes, Heritage & Folk Culture: 4 tests** (spread + constitutional provisions, major tribes/PVTGs/schemes, arts/festivals/dialects, tribal freedom fighters/museums + folk literature)
- **Current Affairs & ICT: 4 tests** (international/national, MP schemes/personalities/places, computers/ICT/e-governance, AI/ML/cloud/data science/IoT)

### Full Mock Tests: 10 tests (1,500 MCQs)
- 150 MCQs each: Q1–50 GS, Q51–150 Biology, in the same unit mix as the topic tests
- Section-wise score and 40% qualifying check on the result screen

**Total: 59 tests, about 3,950 MCQs.**

## 4. How each test file gets written
- Each test gets a fixed list of subtopics, so no two tests overlap
- Answer positions are spread roughly evenly across A/B/C/D, and every question has a 2–4 line explanation
- The mix is about 60% concept, 25% application or case ("a stain on cloth tests KM-positive but…"), and 15% numerical (RMP/LR, PMI, Rf, centrifugation g-force)
- A second agent checks every answer, and anything disputed gets fixed or dropped
- A `scripts/validate.js` check confirms per file: 50 (or 150) questions, ids in sequence, 4 options, answer between 0 and 3, explanation present, answer spread. It also flags repeated questions across files.

## 5. Build phases
| Phase | Work | Output |
|---|---|---|
| 0 | Scaffold from resa, rebrand, +3/−1 config, section-wise mock result, notes.html, NOTES.md | Working app with 1 sample test |
| 1 | Section B Units II + III (DNA, serology) | 11 tests |
| 2 | Section B Units I, IV, V | 17 tests |
| 3 | Section A GS (static first, current affairs last) | 21 tests |
| 4 | 10 full mocks | 10 tests |
| 5 | Validation run, build, GitHub push, Vercel deploy | Live URL |

Each phase is committed separately, so the app can be deployed after Phase 1 and used while the rest is built.

## 6. Decisions (confirmed)
1. **Marking:** +3 / −1, the exam's real scheme
2. **Language:** English only
3. **GitHub org:** `teambacklinkos-sys`, repo `mppsc-so-mcq`, deployed on Vercel
4. **Current-affairs window:** past year (November 2025 – November 2026)
