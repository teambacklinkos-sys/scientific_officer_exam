const questions = [
  {
    id: 1,
    question: "The primary structure of a protein is defined by:",
    options: ["Hydrogen bonds between backbone C=O and N–H groups", "The association of several polypeptide subunits", "The linear sequence of amino acids joined by peptide bonds", "Disulfide bridges between distant cysteine residues"],
    answer: 2,
    explanation: "Primary structure is the order of amino acids in the polypeptide chain, linked by covalent peptide bonds, and it is encoded by the gene. All higher levels of structure follow from it. Backbone hydrogen bonding gives secondary structure, and subunit association gives quaternary structure."
  },
  {
    id: 2,
    question: "Secondary-structure elements such as the α-helix and the β-pleated sheet are stabilised mainly by:",
    options: ["Hydrogen bonds between backbone carbonyl and amide groups", "Disulfide bonds", "Hydrophobic interactions among side chains", "Ionic bonds between charged side chains"],
    answer: 0,
    explanation: "In an α-helix the C=O of residue n hydrogen-bonds to the N–H of residue n + 4, and β-sheets are held by hydrogen bonds between neighbouring strands. Side-chain interactions such as ionic bonds, hydrophobic packing and disulfides mainly stabilise tertiary structure. Linus Pauling and Robert Corey proposed both structures in 1951."
  },
  {
    id: 3,
    question: "An α-helix has 3.6 amino-acid residues per turn. An α-helical segment of 36 residues therefore contains approximately how many turns?",
    options: ["12", "10", "6", "18"],
    answer: 1,
    explanation: "Turns = 36 ÷ 3.6 = 10. Each residue rises about 0.15 nm, so the pitch is 3.6 × 0.15 = 0.54 nm per turn and the segment is about 5.4 nm long. These dimensions are standard textbook values."
  },
  {
    id: 4,
    question: "Adult human haemoglobin (HbA) illustrates quaternary protein structure because it:",
    options: ["Contains a haem prosthetic group", "Is rich in α-helical segments", "Is folded into a compact globular shape", "Consists of four polypeptide subunits (α2β2) held together by non-covalent interactions"],
    answer: 3,
    explanation: "Quaternary structure is the arrangement of two or more polypeptide subunits, and HbA has two α-globin and two β-globin chains. Interactions between subunits underlie cooperative oxygen binding. Helical content is secondary structure, globular folding is tertiary, and the haem group is a prosthetic group."
  },
  {
    id: 5,
    question: "The term \"proteome\", meaning the complete set of proteins expressed by a genome, was coined in 1994–95 by:",
    options: ["Patrick O'Farrell", "John Fenn", "Frederick Sanger", "Marc Wilkins"],
    answer: 3,
    explanation: "Marc Wilkins, then a doctoral student at Macquarie University, Australia, introduced the term proteome (PROTEins expressed by a genOME). O'Farrell developed high-resolution 2D gel electrophoresis in 1975. John Fenn shared the 2002 Nobel Prize for electrospray ionisation of biomolecules."
  },
  {
    id: 6,
    question: "Which statement correctly contrasts the proteome with the genome?",
    options: ["The proteome varies with cell type, time and condition, whereas the genome is largely constant", "The genome changes with physiological state, whereas the proteome is static", "The proteome contains fewer distinct molecular species than there are genes", "The proteome is identical in every cell of an individual"],
    answer: 0,
    explanation: "Nearly all nucleated cells of a person carry the same genome, but the proteins expressed differ between tissues, developmental stages and conditions. This is why protein markers can tell body fluids apart while DNA cannot. The proteome is also more complex than the gene count suggests."
  },
  {
    id: 7,
    question: "The human genome has about 20,000 protein-coding genes, yet the number of distinct protein forms (proteoforms) is far larger. This is mainly due to:",
    options: ["Translation of intron sequences", "Degeneracy of the genetic code", "Alternative splicing and post-translational modifications", "Expression of mitochondrial genes"],
    answer: 2,
    explanation: "One gene can give several mRNA isoforms by alternative splicing, and each protein can be phosphorylated, glycosylated, cleaved and so on. Together these produce a very large number of proteoforms. Codon degeneracy affects how amino acids are encoded but does not create new protein forms."
  },
  {
    id: 8,
    question: "In two-dimensional polyacrylamide gel electrophoresis (2D-PAGE), proteins are separated:",
    options: ["First by SDS-PAGE according to mass, then by isoelectric focusing according to pI", "First by isoelectric focusing according to pI, then by SDS-PAGE according to molecular mass", "In both dimensions by molecular mass, using different gel concentrations", "First by native PAGE, then by capillary electrophoresis"],
    answer: 1,
    explanation: "The first dimension is isoelectric focusing, usually on an immobilised pH gradient (IPG) strip, which separates proteins by isoelectric point. The strip is then equilibrated in SDS and placed on an SDS-PAGE gel, which separates by molecular mass. SDS is applied second because it would mask the proteins' native charges."
  },
  {
    id: 9,
    question: "High-resolution two-dimensional gel electrophoresis of proteins was introduced in 1975 by:",
    options: ["Patrick O'Farrell", "Marc Wilkins", "Ulrich Laemmli", "Arne Tiselius"],
    answer: 0,
    explanation: "Patrick O'Farrell (and independently Joachim Klose) described 2D electrophoresis combining isoelectric focusing with SDS-PAGE in 1975, resolving more than a thousand proteins. Laemmli's 1970 discontinuous SDS-PAGE system is used for the second dimension. Tiselius pioneered moving-boundary electrophoresis."
  },
  {
    id: 10,
    question: "In 2D difference gel electrophoresis (2D-DIGE), the protein samples to be compared are pre-labelled with:",
    options: ["Coomassie Brilliant Blue", "Silver nitrate", "Radioactive 35S-methionine", "Spectrally distinct cyanine dyes such as Cy2, Cy3 and Cy5"],
    answer: 3,
    explanation: "In DIGE, samples are covalently labelled with different CyDyes, mixed and run on the same gel, then imaged at each dye's wavelength. Running them together removes gel-to-gel variation and allows accurate quantitative comparison. Coomassie and silver are stains applied after electrophoresis."
  },
  {
    id: 11,
    question: "On a 2D gel, a row of spots has the same apparent molecular mass but lies at slightly different horizontal (pI) positions. The most likely explanation is:",
    options: ["They are unrelated proteins of widely different mass", "They are charge variants of one protein, such as different phosphorylation states", "One spot is a covalent dimer of the other", "They result from uneven SDS staining"],
    answer: 1,
    explanation: "A horizontal \"train\" of spots usually shows isoforms of one protein that differ in charge, for example through phosphorylation or deamidation, which changes the pI but barely changes the mass. A dimer would run at about twice the mass. This sensitivity to modifications is a strength of 2D-PAGE."
  },
  {
    id: 12,
    question: "Trypsin, the protease routinely used in peptide mass fingerprinting, cleaves peptide bonds on the C-terminal side of:",
    options: ["Aromatic residues (Phe, Tyr, Trp)", "Aspartate and glutamate", "Lysine and arginine, except when followed by proline", "Methionine"],
    answer: 2,
    explanation: "Trypsin cleaves after the basic residues Lys and Arg, but not when the next residue is proline. Its predictable cleavage and the C-terminal basic residue, which aids ionisation, make tryptic peptides ideal for MS. Chymotrypsin cleaves after aromatic residues, and cyanogen bromide cleaves after methionine."
  },
  {
    id: 13,
    question: "Peptide mass fingerprinting (PMF) identifies a protein by:",
    options: ["Sequencing it from the N-terminus by Edman degradation", "Comparing its pI with that of a reference spot on a 2D gel", "Matching the measured masses of its proteolytic peptides with theoretical digests of database sequences", "Measuring its absorbance at 280 nm"],
    answer: 2,
    explanation: "In PMF the protein is digested (usually with trypsin), the peptide masses are measured by MALDI-TOF MS, and the resulting mass list is compared with in-silico digests of database proteins using software such as Mascot. The protein whose predicted peptides best match the measured masses is reported. PMF works best for purified proteins, such as single 2D gel spots."
  },
  {
    id: 14,
    question: "A protein contains 9 lysine and 6 arginine residues; none is followed by proline and none is the C-terminal residue. Complete tryptic digestion will yield how many peptides?",
    options: ["15", "16", "30", "14"],
    answer: 1,
    explanation: "There are 9 + 6 = 15 cleavage sites, and cutting a linear chain at 15 internal sites gives 15 + 1 = 16 peptides. In practice missed cleavages can produce some longer peptides. Search software therefore usually allows one or two missed cleavages."
  },
  {
    id: 15,
    question: "In bottom-up (shotgun) proteomics:",
    options: ["Proteins are digested into peptides, which are separated and analysed by LC-MS/MS", "Intact proteins are introduced into the mass spectrometer and fragmented there", "Proteins are identified only from their spot positions on 2D gels", "Proteins are sequenced from the N-terminus by Edman degradation"],
    answer: 0,
    explanation: "Bottom-up proteomics digests a protein mixture enzymatically and identifies the peptides by tandem MS, then infers which proteins were present. It is the most widely used approach, including for forensic body-fluid and hair proteomics. Analysing and fragmenting intact proteins is the top-down approach."
  },
  {
    id: 16,
    question: "The main advantage of top-down proteomics over bottom-up proteomics is that it:",
    options: ["Does not require a mass spectrometer", "Works best for very large protein complexes above 500 kDa", "Needs no prior separation of the sample", "Preserves information on intact proteoforms, including combinations of modifications on the same molecule"],
    answer: 3,
    explanation: "Because whole proteins are measured, top-down MS shows which modifications occur together on a single molecule, which is lost once proteins are cut into peptides. It needs high-resolution instruments such as Orbitrap or FT-ICR. Sensitivity falls for very large proteins, so it works best below about 50 kDa."
  },
  {
    id: 17,
    question: "In MALDI-TOF mass spectrometry of peptides, a commonly used matrix is:",
    options: ["α-cyano-4-hydroxycinnamic acid (CHCA)", "Trifluoroacetic acid", "Sodium dodecyl sulphate", "Acetonitrile"],
    answer: 0,
    explanation: "CHCA is the standard matrix for peptides, sinapinic acid is preferred for intact proteins, and 2,5-dihydroxybenzoic acid (DHB) is used for glycans and some peptides. The matrix absorbs laser energy and transfers protons to the analyte. Acetonitrile and TFA are only components of the solvent used to dissolve the matrix, and SDS suppresses ionisation."
  },
  {
    id: 18,
    question: "Compared with electrospray ionisation (ESI), matrix-assisted laser desorption/ionisation (MALDI) typically produces:",
    options: ["Mainly multiply charged ions", "Only negative ions", "Predominantly singly charged ions", "Neutral fragments only"],
    answer: 2,
    explanation: "MALDI mostly gives [M+H]+ ions, so spectra are simple and suit time-of-flight analysers and peptide mass fingerprinting. ESI produces a series of multiply charged ions and is easily coupled online to liquid chromatography (LC-MS/MS). Both can work in positive or negative mode."
  },
  {
    id: 19,
    question: "In a linear time-of-flight analyser, a singly charged peptide of m/z 1,000 reaches the detector in 20 µs. Under identical conditions, an ion of m/z 4,000 will arrive in about:",
    options: ["20 µs", "80 µs", "10 µs", "40 µs"],
    answer: 3,
    explanation: "All ions receive the same kinetic energy (zeV = ½mv²), so flight time is proportional to √(m/z). Multiplying m/z by 4 doubles the flight time, giving 2 × 20 = 40 µs. Assuming time is directly proportional to mass would wrongly give 80 µs."
  },
  {
    id: 20,
    question: "A protein of molecular mass 15,000 Da carrying 15 extra protons is observed by electrospray ionisation at an m/z of approximately:",
    options: ["15,015", "1,001", "7,500", "225,000"],
    answer: 1,
    explanation: "m/z = (M + zH) ÷ z = (15,000 + 15 × 1.007) ÷ 15 ≈ 1,001. Multiple charging brings large proteins into the m/z range of ordinary analysers, and the molecular mass is recovered by deconvoluting the charge-state series. A value of 15,015 ignores division by the charge."
  },
  {
    id: 21,
    question: "In collision-induced dissociation (CID) of peptides during LC-MS/MS, cleavage of the peptide bonds produces mainly:",
    options: ["a and x ions", "b and y ions", "c and z ions", "Only immonium ions"],
    answer: 1,
    explanation: "CID breaks the amide (peptide) bonds and gives N-terminal b ions and C-terminal y ions. The mass differences between consecutive ions in a series reveal the amino-acid sequence. Electron-transfer dissociation (ETD) instead gives c and z ions and keeps labile modifications intact."
  },
  {
    id: 22,
    question: "Software such as Mascot and SEQUEST is used in proteomics to:",
    options: ["Control the HPLC gradient", "Calibrate the time-of-flight analyser", "Image stained 2D gels", "Match MS/MS spectra or peptide masses to sequences in protein databases"],
    answer: 3,
    explanation: "Database search engines compare experimental spectra with theoretical spectra of peptides from protein sequence databases such as UniProt and score the matches. False discovery rates are commonly controlled with target-decoy searching. This is how proteins in forensic samples are identified."
  },
  {
    id: 23,
    question: "Semenogelin, the target of immunochromatographic semen tests such as RSID-Semen, is secreted mainly by the:",
    options: ["Bulbourethral glands", "Prostate gland", "Seminal vesicles", "Sertoli cells of the testis"],
    answer: 2,
    explanation: "Semenogelins I and II are the main proteins of seminal vesicle fluid and form the semen coagulum after ejaculation. Because they do not depend on spermatozoa, they help detect semen from azoospermic men. PSA, by contrast, comes from the prostate."
  },
  {
    id: 24,
    question: "Prostate-specific antigen (PSA, p30) is useful for identifying semen from a vasectomised man because it:",
    options: ["Is secreted by the prostate, so its presence does not depend on sperm", "Is present only in the semen of vasectomised men", "Is produced by spermatozoa", "Forms yellow crystals with picric acid"],
    answer: 0,
    explanation: "PSA is a kallikrein-related serine protease (KLK3) of about 30 kDa made by the prostate, so it is present in seminal fluid with or without spermatozoa. It is detected by tests such as ABAcard p30. Low levels occur in some other fluids, so cut-offs matter. Crystals with picric acid form in the Barberio test for spermine."
  },
  {
    id: 25,
    question: "Liquefaction of the semen coagulum within minutes of ejaculation results from:",
    options: ["Proteolytic cleavage of semenogelins by PSA", "Hydrolysis of phosphorylcholine by acid phosphatase", "Metabolism of fructose by spermatozoa", "Breakdown of spermine by salivary amylase"],
    answer: 0,
    explanation: "Semenogelins from the seminal vesicles form a gel, which PSA from the prostate then cleaves into smaller fragments, liquefying the semen and freeing the sperm. The two markers therefore act on each other. Fructose is the sperm's energy source and has no role in liquefaction."
  },
  {
    id: 26,
    question: "Immunochromatographic tests such as Hexagon OBTI and ABAcard HemaTrace confirm human blood by:",
    options: ["Detecting the peroxidase-like activity of haem", "Detecting human haemoglobin with specific antibodies", "Detecting porphyrin fluorescence", "Forming haemochromogen crystals"],
    answer: 1,
    explanation: "These lateral-flow tests use monoclonal and polyclonal antibodies against human haemoglobin, so they show both that blood is present and that it is human. Higher primate blood (and ferret blood for HemaTrace) can also react. Very high haemoglobin levels can cause a false negative through the high-dose hook effect."
  },
  {
    id: 27,
    question: "Which protein is regarded as a highly specific marker for saliva in mass-spectrometry-based body-fluid identification?",
    options: ["Haemoglobin β-chain", "Uromodulin", "Semenogelin", "Statherin"],
    answer: 3,
    explanation: "Statherin and histatins are small proteins secreted by the salivary glands and are rarely found in other body fluids. Salivary α-amylase, the traditional marker, is less specific because amylase also occurs in pancreatic secretions, breast milk and other fluids. Uromodulin marks urine and semenogelin marks semen."
  },
  {
    id: 28,
    question: "Uromodulin (Tamm-Horsfall protein), a protein marker for urine stains, is produced by the:",
    options: ["Glomerular podocytes", "Transitional epithelium of the bladder", "Cells of the thick ascending limb of the loop of Henle", "Hepatocytes"],
    answer: 2,
    explanation: "Uromodulin is synthesised by the epithelial cells of the thick ascending limb of the loop of Henle and is the most abundant protein in normal urine. Its kidney-specific origin makes it a good target for confirming urine. Traditional urine tests detect urea or creatinine, which are less specific."
  },
  {
    id: 29,
    question: "A stain on a pillowcase gives a weak starch-iodine (amylase) reaction. LC-MS/MS of an extract detects statherin and histatin-1 but no semenogelin, haemoglobin or uromodulin. The stain is most likely:",
    options: ["Urine", "Saliva", "Semen", "Blood"],
    answer: 1,
    explanation: "Statherin and histatins are saliva-specific proteins, and their presence alongside amylase activity points to saliva. Absence of semenogelin, haemoglobin and uromodulin argues against semen, blood and urine. Using several specific markers together is the main strength of proteomic body-fluid identification."
  },
  {
    id: 30,
    question: "A key advantage of LC-MS/MS-based body-fluid identification over conventional presumptive tests is that it:",
    options: ["Can identify several body fluids at once from one extract using multiple specific protein markers", "Is cheaper and quicker to perform at the crime scene", "Shows the morphology of spermatozoa", "Requires no sample preparation"],
    answer: 0,
    explanation: "Targeted or untargeted MS can test one small extract for markers of blood, semen, saliva, urine and other fluids together. This saves sample and suits mixed stains. It needs laboratory instruments and digestion steps, so it is not a field test."
  },
  {
    id: 31,
    question: "A vaginal swab tests positive for semenogelin and for PSA, but no spermatozoa are found on microscopy. The most reasonable conclusion is:",
    options: ["The donor of the fluid must be female", "The swab contains only vaginal secretion", "The results are contradictory and the swab must be contaminated", "Semen from an azoospermic or vasectomised male may be present"],
    answer: 3,
    explanation: "Semenogelin and PSA come from the seminal vesicles and prostate, so they remain in semen when sperm are absent, as in azoospermia or after vasectomy. Two positive seminal-fluid markers strongly indicate semen. Y-STR typing may still yield a male profile from non-sperm cells."
  },
  {
    id: 32,
    question: "The hair shaft is composed predominantly of:",
    options: ["Type I collagen", "Elastin", "Keratins and keratin-associated proteins", "Fibrinogen"],
    answer: 2,
    explanation: "Hair consists mainly of hard α-keratins (type I acidic and type II basic) embedded in a matrix of keratin-associated proteins (KAPs) rich in cysteine. Extensive disulfide cross-linking makes these proteins very stable. Collagen type I is the main protein of bone, not hair."
  },
  {
    id: 33,
    question: "Genetically variant peptides (GVPs) detected in hair-shaft proteins reflect:",
    options: ["Post-mortem degradation products of keratin", "Hair dyes covalently bound to keratin", "Non-synonymous SNPs in the genes encoding those proteins", "Synonymous mutations in intronic DNA"],
    answer: 2,
    explanation: "A missense (non-synonymous) SNP changes one amino acid, and the variant peptide containing it can be detected by LC-MS/MS. The pattern of GVPs therefore lets the person's SNP genotype at those positions be inferred. Synonymous and intronic changes do not alter the protein, so they cannot be seen by proteomics."
  },
  {
    id: 34,
    question: "Proteomic GVP analysis is particularly valuable for a shed (telogen) hair shaft found without its root because:",
    options: ["Hair shafts contain abundant nuclear DNA", "Hair proteins break down faster than DNA", "It produces a complete autosomal STR profile", "Nuclear DNA in the shaft is scarce and degraded, while keratin proteins are abundant and stable"],
    answer: 3,
    explanation: "Shed hairs usually lack the root sheath cells that supply nuclear DNA, so STR typing often fails, leaving only mtDNA analysis. Hair proteins survive well and carry individual genetic information as GVPs. GVP profiles give a random match probability and ancestry information, but they are not STR profiles."
  },
  {
    id: 35,
    question: "The use of genetically variant peptides in hair to distinguish individuals was demonstrated in 2016 by a research team at:",
    options: ["Lawrence Livermore National Laboratory, USA", "The FBI Laboratory, Quantico", "The National Institute of Standards and Technology", "The Forensic Science Service, UK"],
    answer: 0,
    explanation: "Glendon Parker and colleagues at Lawrence Livermore National Laboratory published the GVP approach in 2016. They showed that hair-shaft peptides could identify individuals and indicate biogeographic ancestry. The UK Forensic Science Service had closed in 2012."
  },
  {
    id: 36,
    question: "Besides individualisation, a GVP profile obtained from a hair shaft can be used to:",
    options: ["Estimate the time since death directly", "Estimate biogeographic ancestry using population frequencies of the underlying SNP alleles", "Determine the ABO blood group", "Generate a profile for upload to CODIS"],
    answer: 1,
    explanation: "Because each GVP corresponds to a known SNP allele, population allele frequencies can be used to calculate random match probabilities and infer likely ancestry. GVP profiles are not STR genotypes and cannot be searched against CODIS. Blood grouping and PMI estimation need other methods."
  },
  {
    id: 37,
    question: "The most abundant protein in the organic matrix of bone, exploited for species identification of bone fragments by mass spectrometry, is:",
    options: ["Osteocalcin", "Type I collagen", "Keratin", "Serum albumin"],
    answer: 1,
    explanation: "Type I collagen makes up roughly 90% of bone's organic matrix and survives well over long periods. Small differences between species in its peptide sequences allow species identification by MS. Osteocalcin is the most abundant non-collagenous bone protein."
  },
  {
    id: 38,
    question: "ZooMS (Zooarchaeology by Mass Spectrometry) identifies the species of a bone fragment by:",
    options: ["Amplifying and sequencing the cytochrome b gene", "Measuring bone mineral density", "MALDI-TOF peptide mass fingerprinting of collagen tryptic digests using species-specific marker peptides", "Radiocarbon dating of the collagen"],
    answer: 2,
    explanation: "ZooMS, introduced by Buckley and colleagues in 2009, digests extracted collagen with trypsin and compares the MALDI-TOF peptide masses with known species-specific collagen markers. It is cheap, fast and works on fragments too small or degraded for DNA. It is used in archaeology, wildlife forensics and human-versus-animal screening."
  },
  {
    id: 39,
    question: "Proteomic approaches to estimating the post-mortem interval (PMI) from skeletal remains are based on:",
    options: ["Time-dependent loss or chemical modification (e.g. deamidation) of particular bone proteins", "The degree of mitochondrial DNA heteroplasmy", "The growth rate of fly larvae feeding on the bone", "An increase in bone collagen content after death"],
    answer: 0,
    explanation: "After death some bone proteins are gradually lost or chemically modified, so their abundance and modification levels change with time since death. Research studies relate these changes to PMI, although burial conditions strongly affect the rates. Collagen content falls after death, it does not rise."
  },
  {
    id: 40,
    question: "Deamidation, a non-enzymatic modification monitored as an indicator of protein age and degradation in bone and teeth, converts:",
    options: ["Serine to alanine", "Proline to hydroxyproline", "Lysine to arginine", "Asparagine and glutamine to aspartate and glutamate"],
    answer: 3,
    explanation: "Deamidation removes the side-chain amide group of Asn and Gln, producing Asp and Glu (a mass increase of about 0.984 Da). The rate rises with time, temperature and moisture, so it reflects how far a protein has degraded. Hydroxylation of proline is an enzymatic modification made during collagen synthesis."
  },
  {
    id: 41,
    question: "A highly degraded bone fragment several decades old yields no amplifiable DNA. To find out whether it is human or animal, the most suitable protein-based approach is:",
    options: ["Benzidine test on a bone extract", "Kastle-Meyer test on the marrow cavity", "Microscopic examination of cuticle scale patterns", "Mass-spectrometric analysis of collagen peptides"],
    answer: 3,
    explanation: "Collagen survives far longer than DNA, and species-specific collagen peptides measured by MALDI-TOF or LC-MS/MS can tell human from animal bone. Benzidine and Kastle-Meyer are presumptive blood tests and say nothing about species. Cuticle scale patterns are a feature of hair, not bone."
  },
  {
    id: 42,
    question: "Proteomic sex estimation from tooth enamel relies on detecting peptides of:",
    options: ["Type I collagen α1 chain", "AMELY, the Y-chromosome-encoded isoform of amelogenin", "Enamelin", "Hair keratin K31"],
    answer: 1,
    explanation: "Amelogenin is encoded by AMELX on the X chromosome and AMELY on the Y, and the two isoforms differ at several amino acids. Detecting AMELY-specific peptides by LC-MS/MS shows the individual was male. Enamelin and collagen are not sex-linked."
  },
  {
    id: 43,
    question: "In enamel proteomics of an archaeological tooth, AMELX peptides are detected but no AMELY-specific peptides. The most appropriate interpretation is:",
    options: ["Probably female, but absence of AMELY peptides is not conclusive because they may be below the detection limit", "Definitely male", "Definitely female beyond any doubt", "The tooth is not human"],
    answer: 0,
    explanation: "AMELY is expressed at much lower levels than AMELX, so in a male sample it can fall below detection. Its absence therefore supports a female attribution but does not prove it, whereas its presence positively indicates a male. Reports should state this asymmetry."
  },
  {
    id: 44,
    question: "Enamel peptides are well suited to sex estimation in ancient or burnt remains mainly because:",
    options: ["Enamel contains abundant nuclear DNA", "Amelogenin is synthesised throughout life", "Mature enamel is highly mineralised and protects the residual peptides from degradation and contamination", "Amelogenin is the main protein of dentine"],
    answer: 2,
    explanation: "Most of the enamel matrix proteins are removed as enamel matures, but residual amelogenin peptides stay trapped within hydroxyapatite crystals, which shields them from degradation and modern contamination. This is why enamel peptides can survive in very old remains. Amelogenin is made only while teeth form, and the main protein of dentine is collagen."
  },
  {
    id: 45,
    question: "Protein extraction from tooth enamel for sex estimation is usually minimally destructive because it uses:",
    options: ["Brief acid etching of a small area of the enamel surface", "Grinding of the whole tooth to powder", "Drilling of the root canal", "Boiling of the jaw bone"],
    answer: 0,
    explanation: "A few seconds of acid etching dissolves a thin surface layer of enamel and releases enough amelogenin peptides for LC-MS/MS, leaving the tooth largely intact. This makes the method acceptable for valuable archaeological and forensic specimens. Grinding or drilling would destroy morphological evidence."
  },
  {
    id: 46,
    question: "The usual order of stages in the proteomic biomarker development pipeline is:",
    options: ["Validation → discovery → verification", "Verification → validation → discovery", "Discovery → validation → verification", "Discovery → verification → validation"],
    answer: 3,
    explanation: "Discovery uses untargeted proteomics on a few samples to find candidates, verification uses targeted MS (such as MRM) on larger sets to narrow them down, and validation tests the survivors in large independent cohorts, often by immunoassay. Most candidates drop out before validation. Only validated biomarkers move into clinical or forensic use."
  },
  {
    id: 47,
    question: "Targeted verification of candidate protein biomarkers across many samples is typically carried out by:",
    options: ["2D-PAGE with silver staining", "Selected or multiple reaction monitoring (SRM/MRM) on a triple-quadrupole mass spectrometer", "Top-down FT-ICR analysis of single proteins", "Edman sequencing"],
    answer: 1,
    explanation: "In SRM/MRM the first quadrupole selects a chosen peptide precursor and the third monitors specific fragment ions, giving sensitive, reproducible quantification of dozens of peptides per run. Stable-isotope-labelled peptides serve as internal standards. The same approach is used in forensic MS assays for body-fluid markers."
  },
  {
    id: 48,
    question: "Before plasma biomarker discovery, high-abundance proteins such as albumin are usually depleted because:",
    options: ["They are absent from diseased individuals", "They enzymatically degrade low-abundance proteins", "A few proteins make up most of the plasma protein mass and mask low-abundance candidates", "They cannot be digested by trypsin"],
    answer: 2,
    explanation: "Albumin alone is about half of plasma protein, and with immunoglobulins and a few others it dominates the signal. Plasma protein concentrations span roughly 10 to 12 orders of magnitude. Immunoaffinity depletion removes these proteins so that low-abundance candidates can be detected."
  },
  {
    id: 49,
    question: "In forensic pathology, which protein biomarker is measured in post-mortem blood or pericardial fluid to support a diagnosis of myocardial damage in sudden death?",
    options: ["Prostate-specific antigen", "Cardiac troponin (cTnI or cTnT)", "Semenogelin", "Uromodulin"],
    answer: 1,
    explanation: "Cardiac troponins I and T are released from damaged heart muscle and are standard markers of myocardial infarction. In autopsy practice, raised troponin in post-mortem samples supports cardiac damage when early infarcts are not yet visible on histology. Results must be read with caution because of post-mortem changes and resuscitation effects."
  },
  {
    id: 50,
    question: "Rapid MALDI-TOF identification of bacteria, used in clinical laboratories and in screening suspected biothreat samples, works by matching the spectrum of:",
    options: ["Abundant, mainly ribosomal, proteins against a reference spectral library", "Fatty acid methyl esters", "Cell-wall polysaccharides", "Bacterial DNA restriction fragments"],
    answer: 0,
    explanation: "Whole cells are spotted with matrix and the resulting protein fingerprint, dominated by ribosomal proteins of about 2–20 kDa, is compared with library spectra (e.g. MALDI Biotyper, VITEK MS). Identification takes minutes once a colony is available. Fatty acid methyl ester profiling is an older, gas-chromatography-based method."
  }
];

export default questions;
