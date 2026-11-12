const questions = [
  {
    id: 1,
    question: "The principle often summarised as 'every contact leaves a trace' was formulated by",
    options: ["Hans Gross", "Edmond Locard", "Alphonse Bertillon", "Paul L. Kirk"],
    answer: 1,
    explanation: "Edmond Locard, who set up one of the first police laboratories at Lyon in 1910, stated that when two objects come into contact there is a mutual exchange of material. This exchange principle is the basis of trace evidence work. Bertillon devised anthropometry and Kirk wrote on physical evidence as a 'silent witness'."
  },
  {
    id: 2,
    question: "Fibres from a burglar's woollen sweater are found on a broken window frame, and glass fragments from the same window are recovered from the turn-ups of his trousers. This two-way transfer best illustrates",
    options: ["Locard's principle of exchange", "The principle of progressive change", "The principle of comparison", "The law of probability"],
    answer: 0,
    explanation: "Material passed from the suspect to the scene (fibres) and from the scene to the suspect (glass). Such mutual transfer on contact is exactly what Locard's exchange principle predicts. Progressive change concerns alteration of things with time, and comparison concerns like-with-like examination."
  },
  {
    id: 3,
    question: "The statement that 'every object, natural or man-made, has a uniqueness that is not duplicated in any other object' expresses the",
    options: ["Principle of individuality", "Principle of exchange", "Principle of analysis", "Law of fact"],
    answer: 0,
    explanation: "The principle of individuality holds that no two objects are exactly alike, even if they belong to the same class. It is why fingerprints, tool marks and physical fits can point to a single source. The principle of analysis concerns sample quality, and the law of fact says facts do not lie."
  },
  {
    id: 4,
    question: "A document examiner asked to examine a disputed Hindi signature insists on admitted specimen signatures written in Hindi, in a similar style and from about the same period. This insistence follows from the",
    options: ["Principle of exchange", "Principle of comparison", "Principle of individuality", "Law of probability"],
    answer: 1,
    explanation: "The principle of comparison states that only like can be compared with like. A questioned item must be compared with standards of the same kind and condition, so a Hindi signature needs Hindi specimens. Individuality explains why a match is meaningful, but comparison governs how the examination is set up."
  },
  {
    id: 5,
    question: "Footwear seized from a suspect eight months after a crime no longer matches the wear features seen in the crime-scene shoeprint, although the tread design is the same. This is best explained by the",
    options: ["Principle of progressive change", "Principle of exchange", "Principle of comparison", "Principle of analysis"],
    answer: 0,
    explanation: "The principle of progressive change states that everything changes with the passage of time. Continued wear adds and removes accidental characteristics on a shoe sole, so late seizure can lose individualising detail. It is a reason why evidence should be collected promptly."
  },
  {
    id: 6,
    question: "A stain is found to be of blood group A (frequency 0.25 in the population) and from a secretor (frequency 0.80). If the two traits are independent, what fraction of the population shares both characteristics?",
    options: ["0.55", "0.20", "1.05", "0.31"],
    answer: 1,
    explanation: "Under the law of probability, the frequencies of independent characteristics are multiplied (product rule): 0.25 × 0.80 = 0.20. So 1 in 5 persons would share both traits. Adding frequencies (1.05) is wrong, because a probability cannot exceed 1."
  },
  {
    id: 7,
    question: "Who is regarded as the father of criminalistics and wrote the handbook for examining magistrates, 'Handbuch für Untersuchungsrichter' (1893)?",
    options: ["Edmond Locard", "Mathieu Orfila", "Francis Galton", "Hans Gross"],
    answer: 3,
    explanation: "Hans Gross, an Austrian magistrate, described how sciences such as microscopy, chemistry and botany could be applied to criminal investigation. He coined the term 'criminalistics'. Orfila is the father of toxicology and Galton classified fingerprints."
  },
  {
    id: 8,
    question: "The first systematic method of identifying criminals by a set of body measurements (anthropometry), used before fingerprints replaced it, was devised by",
    options: ["Edward Henry", "William Herschel", "Alphonse Bertillon", "Juan Vucetich"],
    answer: 2,
    explanation: "Alphonse Bertillon introduced anthropometry ('Bertillonage') in the Paris police in the 1880s. It was abandoned after cases such as Will West showed that measurements could coincide. Henry, Herschel and Vucetich are all associated with fingerprint identification."
  },
  {
    id: 9,
    question: "The phrase describing physical evidence as a 'silent witness' that does not forget, is not confused and cannot perjure itself is associated with",
    options: ["Sir Arthur Conan Doyle", "Calvin Goddard", "Albert S. Osborn", "Paul L. Kirk"],
    answer: 3,
    explanation: "Paul L. Kirk, in 'Crime Investigation' (1953), wrote that whatever a criminal touches or leaves will serve as a silent witness against him. Only human failure to find, study or understand it can reduce its value. Goddard is linked with firearms identification and Osborn with questioned documents."
  },
  {
    id: 10,
    question: "A bloodstain was swabbed with a contaminated cotton swab at the scene and later gave a mixed DNA profile. The principle that 'the analysis can be no better than the sample analysed' is called the",
    options: ["Principle of individuality", "Law of fact", "Principle of exchange", "Principle of analysis"],
    answer: 3,
    explanation: "The principle of analysis stresses that the result depends on the quality of the sample collected and preserved. Contamination, degradation or poor packaging at the scene cannot be corrected in the laboratory. This is why proper collection and sterile materials are essential."
  },
  {
    id: 11,
    question: "Mathieu Orfila, whose treatise on poisons appeared in 1813–14, is regarded as the father of which branch of forensic science?",
    options: ["Forensic toxicology", "Forensic serology", "Forensic anthropology", "Questioned document examination"],
    answer: 0,
    explanation: "Orfila, a Spanish-born physician working in Paris, wrote the first systematic work on detecting poisons and gave expert evidence on arsenic. He is called the father of toxicology. Serology owes more to Landsteiner and Uhlenhuth."
  },
  {
    id: 12,
    question: "The examination of diatoms, pollen grains, seeds and plant fragments recovered from a crime scene falls within",
    options: ["Forensic botany", "Forensic odontology", "Forensic anthropology", "Forensic serology"],
    answer: 0,
    explanation: "Forensic botany applies plant science, including palynology, diatom analysis and plant anatomy, to legal questions. Such material can link a person or object to a place or indicate season. Odontology deals with teeth, anthropology with skeletal remains and serology with body fluids."
  },
  {
    id: 13,
    question: "Which of the following is NOT normally examined in the Biology/Serology division of a forensic science laboratory?",
    options: ["Seminal stains on undergarments", "Bloodstains on a weapon", "Gunshot residue on hand swabs", "Saliva on a cigarette butt"],
    answer: 2,
    explanation: "Gunshot residue (lead, barium, antimony particles) is analysed in the ballistics or chemistry divisions by SEM-EDX or AAS. The Biology/Serology division handles body fluids such as blood, semen and saliva, along with hair and other biological traces. Knowing the scope of each division matters for forwarding exhibits correctly."
  },
  {
    id: 14,
    question: "A forensic scientist examining exhibits sent by the prosecution finds a result that supports the defence version. The ethically correct course is to",
    options: ["Omit the finding as it was not specifically asked for", "Mention it only orally to the investigating officer", "Report the finding fully and objectively, because the expert's duty is to the court", "Report it only if the defence counsel asks during cross-examination"],
    answer: 2,
    explanation: "An expert witness is an officer of justice, not an advocate for the side that sent the exhibits. Suppressing or selectively reporting results is unethical and can cause a miscarriage of justice. All relevant findings, favourable or not, must appear in the written report."
  },
  {
    id: 15,
    question: "During cross-examination, a serologist is asked to give an opinion on the trajectory of a bullet through a window. The most appropriate response is to",
    options: ["Decline, stating that the question lies outside her field of expertise", "Give a best guess based on general reading", "Answer, since any FSL scientist is an expert in all divisions", "Refer to a colleague's unpublished notes and answer"],
    answer: 0,
    explanation: "Experts must testify only within the field in which they are qualified by skill, training and experience. Straying outside it damages credibility and may mislead the court. Ballistic trajectory is a matter for a firearms expert."
  },
  {
    id: 16,
    question: "Under the Bharatiya Sakshya Adhiniyam, 2023, the opinions of experts on science, art, handwriting or finger impressions are relevant under",
    options: ["Section 39", "Section 45", "Section 63", "Section 329"],
    answer: 0,
    explanation: "Section 39 of the BSA, 2023 corresponds to Section 45 of the old Indian Evidence Act, 1872 and makes expert opinion relevant. Section 63 of the BSA deals with admissibility of electronic records (old Section 65B). Section 329 belongs to the BNSS, not the BSA."
  },
  {
    id: 17,
    question: "Which provision of the Bharatiya Nagarik Suraksha Sanhita, 2023 allows the report of certain Government scientific experts, such as an FSL Director, to be used as evidence without necessarily examining the expert in court?",
    options: ["Section 176", "Section 329", "Section 194", "Section 39"],
    answer: 1,
    explanation: "Section 329 of the BNSS replaces Section 293 of the CrPC, 1973. The court may still summon the expert if it thinks fit. Section 194 BNSS covers the police inquest (old Section 174 CrPC), and Section 39 is in the BSA."
  },
  {
    id: 18,
    question: "Under Section 176(3) of the BNSS, 2023, a forensic expert must visit the crime scene to collect forensic evidence for offences punishable with imprisonment of at least",
    options: ["Three years", "Ten years", "Seven years", "Life imprisonment"],
    answer: 2,
    explanation: "Section 176(3) BNSS requires the officer in charge to have a forensic expert visit the scene for offences punishable with seven years or more, with the process video-graphed. The duty applies from a date that each State Government notifies, within five years, so it did not start automatically on 1 July 2024. This greatly increases the role of FSLs in crime investigation."
  },
  {
    id: 19,
    question: "The 'general acceptance in the relevant scientific community' test for admitting scientific evidence originated in",
    options: ["Frye v. United States (1923)", "Daubert v. Merrell Dow Pharmaceuticals (1993)", "Kumho Tire Co. v. Carmichael (1999)", "Miranda v. Arizona (1966)"],
    answer: 0,
    explanation: "The Frye case, about a systolic blood pressure deception test, set the general acceptance standard. Daubert (1993) replaced it in US federal courts with a judge-led test of reliability. Kumho extended Daubert to technical, non-scientific experts, and Miranda is about rights of an arrested person."
  },
  {
    id: 20,
    question: "Which of the following is NOT one of the Daubert criteria for judging the reliability of a scientific technique?",
    options: ["Whether the technique can be and has been tested", "The known or potential error rate", "Whether it has been peer-reviewed and published", "The number of convictions previously secured using the technique"],
    answer: 3,
    explanation: "Daubert asks about testability, peer review and publication, known error rate, existence of standards, and general acceptance. The number of convictions obtained says nothing about scientific validity. Courts look at the method, not the outcomes it has produced."
  },
  {
    id: 21,
    question: "The main purpose of maintaining a chain of custody for an exhibit is to",
    options: ["Record the monetary value of each exhibit seized", "Let the investigating officer keep exhibits at home", "Show that the exhibit in court is the one collected, unaltered", "Fix the order in which the laboratory examines exhibits"],
    answer: 2,
    explanation: "The chain of custody documents every person who handled the exhibit, with dates, times and purpose. Any unexplained gap lets the defence argue contamination or substitution. A broken chain can make otherwise strong evidence worthless."
  },
  {
    id: 22,
    question: "Which of the following is an individual characteristic rather than a class characteristic?",
    options: ["The ABO blood group of a dried bloodstain", "The polymer type of a recovered fibre", "The tread design of a shoe sole", "A physical fit between two torn pieces of cloth"],
    answer: 3,
    explanation: "A physical fit along an irregular torn or broken edge can be associated with one source to the exclusion of all others. ABO group, polymer type and tread design are shared by many persons or objects and only place the item in a group. Class evidence narrows the field but does not individualise."
  },
  {
    id: 23,
    question: "In forensic practice, the term 'corpus delicti' refers to",
    options: ["Only the dead body of the victim in a murder", "The list of exhibits forwarded to the laboratory", "The final opinion report of the forensic expert", "The essential facts proving that a crime was committed"],
    answer: 3,
    explanation: "Corpus delicti literally means 'body of the crime'. It is the set of facts showing that an offence actually took place, such as the fact of death and that it was caused by a criminal act. It is not limited to a corpse."
  },
  {
    id: 24,
    question: "The State Forensic Science Laboratory of Madhya Pradesh, which supervises the Regional FSLs of the state, is located at",
    options: ["Bhopal", "Indore", "Sagar", "Jabalpur"],
    answer: 2,
    explanation: "MP's State FSL functions at Sagar under the MP Police. Regional FSLs work in other cities, such as Bhopal, Indore and Gwalior, and are not the headquarters laboratory. A Scientific Officer recruited through MPPSC may be posted to the State or a Regional FSL."
  },
  {
    id: 25,
    question: "The National Forensic Sciences University, declared an Institution of National Importance under an Act of 2020, has its headquarters at",
    options: ["Gandhinagar", "New Delhi", "Hyderabad", "Chandigarh"],
    answer: 0,
    explanation: "NFSU was created by the National Forensic Sciences University Act, 2020, building on the Gujarat Forensic Sciences University at Gandhinagar. The LNJN National Institute of Criminology and Forensic Science (NICFS) at Delhi became one of its campuses. Hyderabad and Chandigarh host CFSLs."
  },
  {
    id: 26,
    question: "Cell theory, stating that all living things are made of cells, was put forward by Schleiden and Schwann. Who added the idea 'omnis cellula e cellula' (all cells arise from pre-existing cells)?",
    options: ["Robert Hooke", "Rudolf Virchow", "Robert Brown", "Antonie van Leeuwenhoek"],
    answer: 1,
    explanation: "Rudolf Virchow (1855) proposed that new cells arise only from division of existing cells, completing the cell theory. Hooke coined the word 'cell' from cork sections, and Robert Brown described the nucleus. Leeuwenhoek first saw living bacteria and protozoa."
  },
  {
    id: 27,
    question: "Ribosomes of prokaryotic cells are of which type?",
    options: ["80S, made of 60S and 40S subunits", "70S, made of 60S and 40S subunits", "80S, made of 50S and 30S subunits", "70S, made of 50S and 30S subunits"],
    answer: 3,
    explanation: "Prokaryotes have 70S ribosomes with 50S and 30S subunits. Eukaryotic cytoplasmic ribosomes are 80S (60S + 40S). Svedberg units are not additive because sedimentation depends on shape as well as mass."
  },
  {
    id: 28,
    question: "Which structure is present in both prokaryotic and eukaryotic cells?",
    options: ["Nuclear envelope", "Mitochondria", "Ribosomes", "Endoplasmic reticulum"],
    answer: 2,
    explanation: "All cells need ribosomes for protein synthesis, so both cell types have them, although of different sizes. Prokaryotes lack a nuclear envelope and membrane-bound organelles such as mitochondria and ER. This is the basic difference between the two cell types."
  },
  {
    id: 29,
    question: "In a bacterial cell, the region of cytoplasm that contains the single circular chromosome, without any surrounding membrane, is called the",
    options: ["Nucleolus", "Nucleoid", "Mesosome", "Episome"],
    answer: 1,
    explanation: "The nucleoid is an irregular region where the bacterial chromosome lies, with no nuclear envelope. The nucleolus is a eukaryotic structure inside the nucleus. Mesosomes are infoldings of the plasma membrane, and an episome is a plasmid that can integrate into the chromosome."
  },
  {
    id: 30,
    question: "Small, circular, self-replicating DNA molecules in bacteria that exist apart from the chromosome and often carry antibiotic-resistance genes are",
    options: ["Plasmids", "Nucleosomes", "Centromeres", "Telomeres"],
    answer: 0,
    explanation: "Plasmids replicate independently of the bacterial chromosome and can be transferred between bacteria, spreading traits such as drug resistance. They are widely used as cloning vectors. Nucleosomes, centromeres and telomeres are features of eukaryotic chromosomes."
  },
  {
    id: 31,
    question: "Self-digestion of tissues shortly after death (autolysis) is mainly due to the release of hydrolytic enzymes from which organelle?",
    options: ["Lysosomes", "Peroxisomes", "Golgi apparatus", "Ribosomes"],
    answer: 0,
    explanation: "Lysosomes contain acid hydrolases that work best near pH 5. After death, falling pH and loss of membrane integrity release these enzymes into the cell, causing autolysis without bacterial action. For this reason lysosomes are called 'suicidal bags'."
  },
  {
    id: 32,
    question: "Liver cells of a person who has taken barbiturates for a long time show marked proliferation of an organelle involved in drug detoxification. The organelle is",
    options: ["Rough endoplasmic reticulum", "Lysosome", "Nucleolus", "Smooth endoplasmic reticulum"],
    answer: 3,
    explanation: "Smooth ER in hepatocytes carries cytochrome P450 enzymes that metabolise drugs and toxins, and it enlarges under repeated exposure (enzyme induction). It also synthesises lipids and steroids. Rough ER, studded with ribosomes, makes secretory and membrane proteins."
  },
  {
    id: 33,
    question: "The acrosome at the tip of the spermatozoon head, containing enzymes that help penetrate the ovum, is derived from the",
    options: ["Mitochondria", "Centriole", "Nucleus", "Golgi apparatus"],
    answer: 3,
    explanation: "During spermiogenesis, Golgi vesicles fuse to form the acrosomal cap filled with hydrolytic enzymes. This reflects the Golgi's general role in modifying, packaging and dispatching proteins in vesicles. Mitochondria form the sheath of the middle piece, and the distal centriole gives rise to the axial filament of the tail."
  },
  {
    id: 34,
    question: "The enzyme catalase, which breaks down hydrogen peroxide and causes the foaming of H2O2 on a bloodstain, is concentrated in which organelle?",
    options: ["Lysosome", "Peroxisome", "Golgi apparatus", "Nucleus"],
    answer: 1,
    explanation: "Peroxisomes contain oxidases that produce H2O2 and catalase that breaks it down into water and oxygen. Red cells also contain abundant catalase, which is why fresh blood foams with H2O2. The foaming is not specific for blood, since many tissues have catalase."
  },
  {
    id: 35,
    question: "The microtubules of a centriole are arranged as",
    options: ["Nine peripheral doublets with two central singlets", "Nine peripheral triplets with no central microtubules", "Nine peripheral doublets with no central microtubules", "Nine peripheral triplets with two central singlets"],
    answer: 1,
    explanation: "A centriole has a cartwheel of nine triplet microtubules and no central pair (9 + 0 pattern). Cilia and flagella, including the sperm tail, have an axoneme with nine doublets around two central singlets (9 + 2). Centrioles organise the spindle in animal cells."
  },
  {
    id: 36,
    question: "Synthesis of ribosomal RNA and assembly of ribosomal subunits take place in the",
    options: ["Smooth endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Nucleolus"],
    answer: 3,
    explanation: "The nucleolus is a dense, non-membrane-bound region of the nucleus formed around nucleolar organiser regions, where rRNA genes are transcribed. Ribosomal subunits are assembled there and exported to the cytoplasm. Cells that make a lot of protein have large nucleoli."
  },
  {
    id: 37,
    question: "The fluid mosaic model of the plasma membrane, in which proteins float in a fluid lipid bilayer, was proposed by",
    options: ["Danielli and Davson", "Singer and Nicolson", "Watson and Crick", "Robertson and Gorter"],
    answer: 1,
    explanation: "S.J. Singer and G.L. Nicolson proposed the fluid mosaic model in 1972. Integral proteins span the bilayer and peripheral proteins sit on its surfaces, all able to move laterally. The earlier Danielli–Davson model was a protein-lipid-protein sandwich, and Robertson described the unit membrane."
  },
  {
    id: 38,
    question: "The main role of cholesterol in animal cell membranes is to",
    options: ["Act as a carrier for glucose transport", "Buffer membrane fluidity across temperatures", "Form channels for passage of sodium ions", "Serve as the receptor for peptide hormones"],
    answer: 1,
    explanation: "Cholesterol sits between phospholipids and acts as a fluidity buffer. At high temperature it restrains movement of fatty acid chains, and at low temperature it prevents tight packing. Plant membranes contain other sterols and bacteria usually lack sterols."
  },
  {
    id: 39,
    question: "For each molecule of ATP hydrolysed, the Na⁺/K⁺-ATPase pump of the plasma membrane moves",
    options: ["2 Na⁺ out of the cell and 3 K⁺ into the cell", "3 Na⁺ into the cell and 2 K⁺ out of the cell", "3 Na⁺ out of the cell and 2 K⁺ into the cell", "1 Na⁺ out of the cell and 1 K⁺ into the cell"],
    answer: 2,
    explanation: "The pump exports three sodium ions and imports two potassium ions per ATP. This is primary active transport against concentration gradients and it creates a net outward positive charge, so the pump is electrogenic. It maintains the resting membrane potential and cell volume."
  },
  {
    id: 40,
    question: "A blood smear is accidentally prepared after diluting the sample with distilled water instead of normal saline. The red cells are most likely to",
    options: ["Shrink and become crenated", "Swell and burst by osmotic entry of water", "Remain unchanged in shape and size", "Clump together by agglutination"],
    answer: 1,
    explanation: "Distilled water is hypotonic to red cell cytoplasm, so water moves in by osmosis until the cells lyse (haemolysis). A hypertonic solution would crenate them. This is why isotonic saline (0.9% NaCl) is used to suspend cells for microscopy and serology."
  },
  {
    id: 41,
    question: "Glucose entry into red cells through the GLUT1 carrier, down its concentration gradient and without using ATP, is an example of",
    options: ["Facilitated diffusion", "Primary active transport", "Simple diffusion through the lipid bilayer", "Endocytosis"],
    answer: 0,
    explanation: "Facilitated diffusion uses a specific carrier or channel protein but no metabolic energy, and moves solute only down its gradient. It shows saturation and specificity, unlike simple diffusion. Active transport moves solutes against the gradient and needs ATP."
  },
  {
    id: 42,
    question: "In the eukaryotic cell cycle, replication of nuclear DNA takes place during the",
    options: ["G1 phase", "G2 phase", "S phase", "M phase"],
    answer: 2,
    explanation: "Interphase consists of G1 (growth), S (synthesis of DNA) and G2 (preparation for division). DNA content doubles from 2C to 4C during S phase, while the chromosome number stays the same. Mitosis then separates the replicated chromatids."
  },
  {
    id: 43,
    question: "Mature neurons and cardiac muscle cells, which have permanently stopped dividing, are said to be in which phase?",
    options: ["G2 phase", "S phase", "G0 phase", "Prophase"],
    answer: 2,
    explanation: "Cells that exit the cycle from G1 enter a quiescent G0 state, where they stay metabolically active but do not divide. Some cells, such as liver cells, can re-enter the cycle when stimulated, while neurons usually cannot. G0 is not a stage of mitosis."
  },
  {
    id: 44,
    question: "A human somatic cell contains 6.4 pg of nuclear DNA in G1 phase. What will its DNA content be in G2 phase?",
    options: ["6.4 pg", "12.8 pg", "3.2 pg", "25.6 pg"],
    answer: 1,
    explanation: "DNA is replicated in S phase, so a G2 cell has twice the G1 amount: 2 × 6.4 = 12.8 pg (4C). After mitosis each daughter cell returns to 6.4 pg (2C). A haploid gamete would carry about 3.2 pg (1C)."
  },
  {
    id: 45,
    question: "In a root-tip squash, 36 of 720 cells counted are in some stage of mitosis. The mitotic index is",
    options: ["2%", "20%", "5%", "0.5%"],
    answer: 2,
    explanation: "Mitotic index = (cells in mitosis ÷ total cells counted) × 100 = (36 ÷ 720) × 100 = 5%. It is a measure of how actively a tissue is proliferating. Tissues with fast turnover show higher mitotic indices."
  },
  {
    id: 46,
    question: "During which stage of mitosis do the centromeres split and sister chromatids move to opposite poles?",
    options: ["Metaphase", "Prophase", "Telophase", "Anaphase"],
    answer: 3,
    explanation: "At anaphase the cohesin holding sister chromatids together is cleaved and the chromatids are pulled to opposite poles by the spindle. At metaphase they lie at the equatorial plate, and at telophase nuclear envelopes re-form. Prophase is marked by chromatin condensation."
  },
  {
    id: 47,
    question: "Cytokinesis in a dividing animal cell takes place mainly by",
    options: ["A cell plate formed from Golgi vesicles", "Budding off of a small daughter cell", "A cleavage furrow formed by an actin–myosin ring", "Fragmentation of the nucleus into pieces"],
    answer: 2,
    explanation: "Animal cells divide their cytoplasm by a contractile ring of actin and myosin that constricts the cell from outside inwards. Plant cells, with rigid walls, instead build a cell plate from the centre outwards using Golgi-derived vesicles. Budding is seen in yeast."
  },
  {
    id: 48,
    question: "The tumour suppressor protein p53, called the 'guardian of the genome', acts mainly by",
    options: ["Speeding up DNA replication in S phase", "Joining sister chromatids at metaphase", "Re-forming the nuclear envelope at telophase", "Arresting the cycle at G1/S after DNA damage"],
    answer: 3,
    explanation: "p53 senses DNA damage and induces p21, which stops cyclin-dependent kinases so the cell pauses in G1 for repair. If damage is too severe, p53 triggers apoptosis. Loss of p53 function is found in many human cancers."
  },
  {
    id: 49,
    question: "A single cell undergoes five successive rounds of mitosis, with all daughter cells dividing each time. How many cells are produced?",
    options: ["10", "32", "25", "64"],
    answer: 1,
    explanation: "Each mitotic round doubles the number of cells, so after n rounds there are 2ⁿ cells. Here 2⁵ = 32. Six rounds would give 64."
  },
  {
    id: 50,
    question: "Crossing over between non-sister chromatids of homologous chromosomes takes place during which stage of meiosis?",
    options: ["Pachytene of prophase I", "Leptotene of prophase I", "Metaphase II", "Anaphase I"],
    answer: 0,
    explanation: "Homologues pair (synapsis) at zygotene, and crossing over occurs at pachytene with the help of recombination nodules. Chiasmata, the visible result, appear at diplotene. Crossing over produces new allele combinations, which is why siblings differ genetically."
  }
];

export default questions;
