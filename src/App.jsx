import { useState } from 'react'
import TestDetail from './TestDetail'
import TestScreen from './TestScreen'
import ResultScreen from './ResultScreen'
import { EXAM } from './config'
import dnaTechnologyTest1 from './data/dna-technology-test1'
import dnaTechnologyTest2 from './data/dna-technology-test2'
import dnaTechnologyTest3 from './data/dna-technology-test3'
import dnaTechnologyTest4 from './data/dna-technology-test4'
import dnaTechnologyTest5 from './data/dna-technology-test5'
import dnaTechnologyTest6 from './data/dna-technology-test6'
import forensicSerologyTest1 from './data/forensic-serology-test1'
import forensicSerologyTest2 from './data/forensic-serology-test2'
import forensicSerologyTest3 from './data/forensic-serology-test3'
import forensicSerologyTest4 from './data/forensic-serology-test4'
import forensicSerologyTest5 from './data/forensic-serology-test5'
import forensicBiologyFundamentalsTest1 from './data/forensic-biology-fundamentals-test1'
import forensicBiologyFundamentalsTest2 from './data/forensic-biology-fundamentals-test2'
import forensicBiologyFundamentalsTest3 from './data/forensic-biology-fundamentals-test3'
import forensicBiologyFundamentalsTest4 from './data/forensic-biology-fundamentals-test4'
import forensicBiologyFundamentalsTest5 from './data/forensic-biology-fundamentals-test5'
import forensicBiologyFundamentalsTest6 from './data/forensic-biology-fundamentals-test6'
import analyticalTechniquesTest1 from './data/analytical-techniques-test1'
import analyticalTechniquesTest2 from './data/analytical-techniques-test2'
import analyticalTechniquesTest3 from './data/analytical-techniques-test3'
import analyticalTechniquesTest4 from './data/analytical-techniques-test4'
import analyticalTechniquesTest5 from './data/analytical-techniques-test5'
import analyticalTechniquesTest6 from './data/analytical-techniques-test6'
import fslOrganisationDatabasesTest1 from './data/fsl-organisation-databases-test1'
import fslOrganisationDatabasesTest2 from './data/fsl-organisation-databases-test2'
import fslOrganisationDatabasesTest4 from './data/fsl-organisation-databases-test4'
import fslOrganisationDatabasesTest5 from './data/fsl-organisation-databases-test5'
import mpHistoryTest1 from './data/mp-history-test1'
import mpHistoryTest2 from './data/mp-history-test2'
import mpHistoryTest3 from './data/mp-history-test3'
import mpHistoryTest4 from './data/mp-history-test4'
import mpGeographyTest1 from './data/mp-geography-test1'
import mpGeographyTest2 from './data/mp-geography-test2'
import mpGeographyTest3 from './data/mp-geography-test3'
import mpGeographyTest4 from './data/mp-geography-test4'
import mpPolityEconomyTest1 from './data/mp-polity-economy-test1'
import mpPolityEconomyTest2 from './data/mp-polity-economy-test2'
import mpPolityEconomyTest3 from './data/mp-polity-economy-test3'
import mpPolityEconomyTest4 from './data/mp-polity-economy-test4'
import mpPolityEconomyTest5 from './data/mp-polity-economy-test5'
import mpTribesCultureTest1 from './data/mp-tribes-culture-test1'
import mpTribesCultureTest2 from './data/mp-tribes-culture-test2'
import mpTribesCultureTest3 from './data/mp-tribes-culture-test3'
import mpTribesCultureTest4 from './data/mp-tribes-culture-test4'
import currentAffairsIctTest1 from './data/current-affairs-ict-test1'
import currentAffairsIctTest2 from './data/current-affairs-ict-test2'
import currentAffairsIctTest3 from './data/current-affairs-ict-test3'
import currentAffairsIctTest4 from './data/current-affairs-ict-test4'
import mockTest1 from './data/mock-test-1'
import mockTest2 from './data/mock-test-2'
import mockTest3 from './data/mock-test-3'
import mockTest4 from './data/mock-test-4'
import mockTest5 from './data/mock-test-5'
import mockTest6 from './data/mock-test-6'
import mockTest7 from './data/mock-test-7'
import mockTest8 from './data/mock-test-8'
import mockTest9 from './data/mock-test-9'
import mockTest10 from './data/mock-test-10'
import './App.css'

const mockSections = [
  { name: 'Section A: General Studies', from: 1, to: 50 },
  { name: 'Section B: Biology', from: 51, to: 150 },
]

const tests = [
  { id: 1, title: "DNA Technology - Test 1 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "DNA Technology", data: dnaTechnologyTest1, description: "Mendelian/autosomal/X-linked/Y-linked inheritance, pedigree analysis, chromosomal syndromes, single-gene disorders, trinucleotide repeat disorders, mitochondrial disorders" },
  { id: 2, title: "DNA Technology - Test 2 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "DNA Technology", data: dnaTechnologyTest2, description: "organic phenol-chloroform, Chelex-100, silica/magnetic-bead, FTA cards, differential extraction of sperm/epithelial fractions, bone & tooth demineralisation" },
  { id: 3, title: "DNA Technology - Test 3 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "DNA Technology", data: dnaTechnologyTest3, description: "PCR principle & cycle steps, Taq polymerase, primers & Tm, Mg2+, controls, contamination prevention" },
  { id: 4, title: "DNA Technology - Test 4 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "DNA Technology", data: dnaTechnologyTest4, description: "Sanger dideoxy sequencing, capillary electrophoresis, pyrosequencing, NGS/massively parallel sequencing, mtDNA structure, HV1/HV2/HV3 control region" },
  { id: 5, title: "DNA Technology - Test 5 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "DNA Technology", data: dnaTechnologyTest5, description: "STR structure & nomenclature, CODIS 20 core loci, Amelogenin, allelic ladder, electropherogram interpretation, stutter" },
  { id: 6, title: "DNA Technology - Test 6 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "DNA Technology", data: dnaTechnologyTest6, description: "random match probability, product rule, Hardy-Weinberg in forensic databases, paternity index, combined paternity index, probability of paternity" },
  { id: 7, title: "Forensic Serology - Test 1 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Serology", data: forensicSerologyTest1, description: "ABO system & genetics, H antigen, Bombay phenotype, secretor/non-secretor, Rh system, MN and other systems" },
  { id: 8, title: "Forensic Serology - Test 2 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Serology", data: forensicSerologyTest2, description: "ELISA types, immunodiffusion, immunoelectrophoresis, counter-current electrophoresis, rocket electrophoresis, precipitin test & species identification of blood" },
  { id: 9, title: "Forensic Serology - Test 3 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Serology", data: forensicSerologyTest3, description: "presumptive vs confirmatory tests; blood, semen, saliva, urine, vaginal fluid, faeces" },
  { id: 10, title: "Forensic Serology - Test 4 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Serology", data: forensicSerologyTest4, description: "autolysis, putrefaction, decomposition stages, adipocere, mummification, post-mortem changes" },
  { id: 11, title: "Forensic Serology - Test 5 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Serology", data: forensicSerologyTest5, description: "hair structure, human vs animal hair, medullary index, scale patterns, hair growth phases & root morphology, epidermal/buccal/vaginal epithelial cells" },
  { id: 12, title: "Forensic Biology Fundamentals - Test 1 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Biology Fundamentals", data: forensicBiologyFundamentalsTest1, description: "scope and branches of forensic science, principles, ethics and expert testimony, significance in crime investigation, prokaryotic vs eukaryotic cells, cell organelles & their functions" },
  { id: 13, title: "Forensic Biology Fundamentals - Test 2 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Biology Fundamentals", data: forensicBiologyFundamentalsTest2, description: "bacteria, viruses, fungi, protozoa classification, Gram staining, microbial growth" },
  { id: 14, title: "Forensic Biology Fundamentals - Test 3 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Biology Fundamentals", data: forensicBiologyFundamentalsTest3, description: "skin layers and dermatoglyphics basics, epithelial cell types, spermatozoa structure and lifespan, leukocyte types and nuclear morphology, nails as evidence, hair identification basics" },
  { id: 15, title: "Forensic Biology Fundamentals - Test 4 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Biology Fundamentals", data: forensicBiologyFundamentalsTest4, description: "forensic palynology, pollen morphology & exine, spores, diatoms in drowning, dendrochronology principles, forensic botany" },
  { id: 16, title: "Forensic Biology Fundamentals - Test 5 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Biology Fundamentals", data: forensicBiologyFundamentalsTest5, description: "types of biological evidence, bloodstain pattern basics, forensic odontology, decomposition stages, microbes/fungi/insects in decomposition, thanatomicrobiome" },
  { id: 17, title: "Forensic Biology Fundamentals - Test 6 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Forensic Biology Fundamentals", data: forensicBiologyFundamentalsTest6, description: "chromosome structure, karyotyping, numerical and structural variations, genetic markers, mitochondria structure & genome, enzymes" },
  { id: 18, title: "Analytical Techniques - Test 1 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Analytical Techniques", data: analyticalTechniquesTest1, description: "dose-response, LD50, toxicokinetics, phase I & II metabolism, classification of poisons, metallic poisons" },
  { id: 19, title: "Analytical Techniques - Test 2 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Analytical Techniques", data: analyticalTechniquesTest2, description: "light microscopy, bright-field, dark-field, phase contrast, polarized light microscopy, fluorescence microscopy" },
  { id: 20, title: "Analytical Techniques - Test 3 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Analytical Techniques", data: analyticalTechniquesTest3, description: "RCF vs RPM, sedimentation coefficient, differential and density-gradient centrifugation, ultracentrifugation, chromatography principles, paper chromatography" },
  { id: 21, title: "Analytical Techniques - Test 4 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Analytical Techniques", data: analyticalTechniquesTest4, description: "agarose vs polyacrylamide, SDS-PAGE, native PAGE, isoelectric focusing, 2D electrophoresis, capillary electrophoresis" },
  { id: 22, title: "Analytical Techniques - Test 5 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Analytical Techniques", data: analyticalTechniquesTest5, description: "ionisation methods, mass analysers, tandem MS, MALDI-TOF for microbial & protein identification, GC-MS for drugs/poisons/volatiles, LC-MS/MS for non-volatile drugs and metabolites" },
  { id: 23, title: "Analytical Techniques - Test 6 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "Analytical Techniques", data: analyticalTechniquesTest6, description: "biomarkers in body fluids and tissues, drugs of abuse, NDPS Act basics, sample matrices, screening vs confirmation, drug metabolites" },
  { id: 24, title: "FSL Organisation & Databases - Test 1 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "FSL Organisation & Databases", data: fslOrganisationDatabasesTest1, description: "DFSS, CFSLs, state FSLs & regional FSLs, MP FSL Sagar & RFSLs, NCRB, LNJN NICFS Delhi" },
  { id: 25, title: "FSL Organisation & Databases - Test 2 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "FSL Organisation & Databases", data: fslOrganisationDatabasesTest2, description: "crime-scene management, documentation, chain of custody, packaging, drying of wet stains, swabbing techniques" },
  { id: 27, title: "FSL Organisation & Databases - Test 3 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "FSL Organisation & Databases", data: fslOrganisationDatabasesTest4, description: "biological databases, sequence alignment, phylogenetic trees, forensic DNA databases, India DNA Technology Regulation Bill 2019, probabilistic genotyping software" },
  { id: 28, title: "FSL Organisation & Databases - Test 4 - 50 MCQs", questions: 50, group: "Section B \u2014 Biology", category: "FSL Organisation & Databases", data: fslOrganisationDatabasesTest5, description: "protein structure levels, proteome vs genome, 2D-PAGE, protein identification by peptide mass fingerprinting, bottom-up vs top-down proteomics, MALDI-TOF & LC-MS/MS proteomics" },
  { id: 29, title: "MP History - Test 1 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP History", data: mpHistoryTest1, description: "prehistoric period, protohistoric/Chalcolithic, historic period" },
  { id: 30, title: "MP History - Test 2 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP History", data: mpHistoryTest2, description: "Pratiharas, Paramaras of Malwa, Chandelas of Jejakabhukti & Khajuraho, Kalachuris of Tripuri, Kachchhapaghatas, Tomars of Gwalior" },
  { id: 31, title: "MP History - Test 3 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP History", data: mpHistoryTest3, description: "British expansion, Anglo-Maratha wars, Pindaris, Central India Agency, princely states, revolt of 1857 in MP" },
  { id: 32, title: "MP History - Test 4 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP History", data: mpHistoryTest4, description: "Congress sessions & leaders, Jhanda Satyagraha Jabalpur 1923, Non-cooperation & Civil Disobedience in MP, Jungle Satyagraha, Charan Paduka massacre, Quit India in MP" },
  { id: 33, title: "MP Geography - Test 1 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Geography", data: mpGeographyTest1, description: "latitude/longitude, area & rank, bordering states, Tropic of Cancer, physiographic divisions, highest peaks" },
  { id: 34, title: "MP Geography - Test 2 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Geography", data: mpGeographyTest2, description: "seasons, temperature & rainfall distribution, climatic regions, soils, soil erosion & ravines, forest cover & rank" },
  { id: 35, title: "MP Geography - Test 3 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Geography", data: mpGeographyTest3, description: "agro-climatic zones, major crops, Soya State, GI-tagged products, organic farming, sources of irrigation" },
  { id: 36, title: "MP Geography - Test 4 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Geography", data: mpGeographyTest4, description: "thermal power plants, hydro power, solar, wind energy, minerals, Census 2011 population" },
  { id: 37, title: "MP Polity & Economy - Test 1 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Polity & Economy", data: mpPolityEconomyTest1, description: "Governor, Chief Minister & Council of Ministers, Vidhan Sabha, High Court of MP, Advocate General, Lokayukta of MP" },
  { id: 38, title: "MP Polity & Economy - Test 2 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Polity & Economy", data: mpPolityEconomyTest2, description: "Collector & district administration, tehsil, SDM, urban local bodies, 73rd & 74th Amendments, MP Panchayat Raj Avam Gram Swaraj Adhiniyam 1993" },
  { id: 39, title: "MP Polity & Economy - Test 3 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Polity & Economy", data: mpPolityEconomyTest3, description: "State Election Commission, State Information Commission, State Commissions for SC, ST, Backward Classes and Women, MPPSC" },
  { id: 40, title: "MP Polity & Economy - Test 4 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Polity & Economy", data: mpPolityEconomyTest4, description: "GSDP & per-capita income trends, sectoral composition, state budget, major schemes for farmers, agricultural growth, Krishi Karman awards" },
  { id: 41, title: "MP Polity & Economy - Test 5 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Polity & Economy", data: mpPolityEconomyTest5, description: "industrial corridors & areas, MPIDC, Invest MP / Global Investors Summit, MSME policy, infrastructure, education & health indicators" },
  { id: 42, title: "MP Tribes & Culture - Test 1 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Tribes & Culture", data: mpTribesCultureTest1, description: "ST population of MP, Fifth Schedule areas, Articles 15, 16, 46, 244" },
  { id: 43, title: "MP Tribes & Culture - Test 2 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Tribes & Culture", data: mpTribesCultureTest2, description: "Bhil, Gond, Baiga, Korku, Sahariya, Bhariya" },
  { id: 44, title: "MP Tribes & Culture - Test 3 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Tribes & Culture", data: mpTribesCultureTest3, description: "traditions, special arts, dances, festivals, languages & dialects, tribal literature & oral epics" },
  { id: 45, title: "MP Tribes & Culture - Test 4 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "MP Tribes & Culture", data: mpTribesCultureTest4, description: "Tantya Bhil, Bhima Nayak, Khajya Naik, Raja Shankar Shah & Kunwar Raghunath Shah, Badal Bhoi, Rani Durgavati legacy" },
  { id: 46, title: "Current Affairs & ICT - Test 1 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "Current Affairs & ICT", data: currentAffairsIctTest1, description: "summits, appointments, awards, sports, science & space missions, reports & indices" },
  { id: 47, title: "Current Affairs & ICT - Test 2 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "Current Affairs & ICT", data: currentAffairsIctTest2, description: "Ladli Behna, Ladli Laxmi, CM schemes, recent MP initiatives & awards, prominent personalities of MP, important places" },
  { id: 48, title: "Current Affairs & ICT - Test 3 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "Current Affairs & ICT", data: currentAffairsIctTest3, description: "computer generations, hardware, memory units, OS, networking, internet & cyber security" },
  { id: 49, title: "Current Affairs & ICT - Test 4 - 50 MCQs", questions: 50, group: "Section A \u2014 General Studies", category: "Current Affairs & ICT", data: currentAffairsIctTest4, description: "AI basics & types, supervised/unsupervised/reinforcement learning, neural networks & deep learning, generative AI & LLMs, cloud service models & deployment models, big data & data science basics" },
  { id: 50, title: "Mock Test 1 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest1, sections: mockSections, description: "Full-length mock: core concepts across all 10 units \u2014 FSL basics, DNA extraction to STR typing, ABO/Rh serology, presumptive tests, microscopy & chromatography basics; MP history, geography, polity, tribes, ICT" },
  { id: 51, title: "Mock Test 2 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest2, sections: mockSections, description: "Full-length mock: case-based casework \u2014 sexual-assault, homicide & hit-and-run evidence, differential extraction, mixture interpretation, body-fluid confirmation, chain of custody; MP freedom movement, rivers, Panchayati Raj" },
  { id: 52, title: "Mock Test 3 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest3, sections: mockSections, description: "Full-length mock: numericals & data interpretation \u2014 RMP, PI/CPI, LR, Hardy-Weinberg, RCF, Rf, Beer-Lambert, Ct values, degree-days PMI, Widmark; MP Census & economy figures" },
  { id: 53, title: "Mock Test 4 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest4, sections: mockSections, description: "Full-length mock: toxicology & instrumentation heavy \u2014 poisons, drugs of abuse, GC-MS, LC-MS, MALDI-TOF, HPLC, spectroscopy, electrophoresis; MP minerals, energy, industry" },
  { id: 54, title: "Mock Test 5 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest5, sections: mockSections, description: "Full-length mock: identification of human remains \u2014 skeleton, odontology, mtDNA, mini-STRs, kinship & DVI, decomposition, entomology; MP medieval dynasties, forests & national parks" },
  { id: 55, title: "Mock Test 6 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest6, sections: mockSections, description: "Full-length mock: serology & biological evidence \u2014 blood groups, Bombay phenotype, precipitin, ELISA, immunodiffusion, hair & fibre microscopy, lateral-flow kits; MP constitutional bodies & key Acts" },
  { id: 56, title: "Mock Test 7 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest7, sections: mockSections, description: "Full-length mock: legal, quality & organisational framework \u2014 DFSS/CFSL/SFSL, NCRB, NICFS, NFSU, BNSS/BSA 2023, NABL/ISO 17025, sample preservation; MP tribal provisions, PVTGs & welfare schemes" },
  { id: 57, title: "Mock Test 8 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest8, sections: mockSections, description: "Full-length mock: modern techniques \u2014 NGS/MPS, SNP panels, CRISPR diagnostics, proteomics, bioinformatics & forensic DNA databases, probabilistic genotyping; ICT, e-governance, AI/ML/IoT" },
  { id: 58, title: "Mock Test 9 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest9, sections: mockSections, description: "Full-length mock: PSC-pattern mixed difficulty \u2014 matching-type, statement-based (which of the following is/are correct) and assertion-reason questions across all units; MP art, culture & folk literature" },
  { id: 59, title: "Mock Test 10 - 150 MCQs", questions: 150, group: "Full Mock Tests", category: "Full Mock Tests", data: mockTest10, sections: mockSections, description: "Full-length mock: final revision high-yield facts \u2014 most-asked forensic facts, firsts & landmark cases (Jeffreys, Pitchfork, Rajiv Gandhi case DNA), MP firsts, records & current affairs Nov 2025 \u2013 Nov 2026" },
]

const categories = [...new Set(tests.map(t => t.category))]
const groups = [...new Set(tests.map(t => t.group))]

function App() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [screen, setScreen] = useState('list')
  const [testAnswers, setTestAnswers] = useState(null)
  const [timeTaken, setTimeTaken] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  function selectTest(test) {
    setSelectedTest(test)
    setScreen('detail')
  }

  function startTest() {
    setScreen('test')
  }

  function finishTest(answers, elapsed) {
    setTestAnswers(answers)
    setTimeTaken(elapsed)
    setScreen('result')
  }

  function backToList() {
    setSelectedTest(null)
    setTestAnswers(null)
    setScreen('list')
  }

  function backToDetail() {
    setTestAnswers(null)
    setScreen('detail')
  }

  if (screen === 'result' && selectedTest) {
    return (
      <ResultScreen
        questions={selectedTest.data}
        answers={testAnswers}
        testTitle={selectedTest.title}
        timeTaken={timeTaken}
        sections={selectedTest.sections}
        onBack={backToList}
      />
    )
  }

  if (screen === 'test' && selectedTest) {
    return (
      <TestScreen
        questions={selectedTest.data}
        testTitle={selectedTest.title}
        onFinish={finishTest}
        onQuit={backToDetail}
      />
    )
  }

  if (screen === 'detail' && selectedTest) {
    return (
      <TestDetail
        test={selectedTest}
        onBack={backToList}
        onStart={startTest}
      />
    )
  }

  const filteredTests = tests.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">{EXAM.logo}</div>
        <h1>MPPSC MCQ Tests</h1>
        <p className="subtitle">{EXAM.name} — Practice Tests</p>
      </header>

      <div className="home-body">
        <aside className="sidebar">
          {groups.map((group) => (
            <div key={group} className="sidebar-group">
              <div className="sidebar-title">{group}</div>
              {categories.filter(cat => tests.find(t => t.category === cat).group === group).map((cat) => (
                <button
                  key={cat}
                  className={`sidebar-tab ${activeCategory === cat ? 'sidebar-tab-active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          ))}
        </aside>

        <main className="main-content">
          <h2 className="main-content-title">{activeCategory}</h2>
          <p className="main-content-subtitle">{filteredTests.length} tests available</p>
          <section className="test-list">
            {filteredTests.map((test) => (
              <button
                key={test.id}
                className="test-card"
                onClick={() => selectTest(test)}
              >
                <div className="test-card-left">
                  <h2 className="test-card-title">{test.title}</h2>
                  <p className="test-card-desc">{test.description}</p>
                  <p className="test-card-meta">{test.questions} Questions &middot; +{EXAM.marksCorrect} / -{EXAM.marksWrong} Marking</p>
                </div>
                <span className="test-card-arrow">&rarr;</span>
              </button>
            ))}
          </section>
        </main>
      </div>

      <footer className="footer">
        <a href="/notes.html" className="notes-link">Preparation Notes &amp; Strategy</a>
        <span>MPPSC Scientific Officer (Biology) MCQ Tests</span>
      </footer>
    </div>
  )
}

export default App
