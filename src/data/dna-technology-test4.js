const questions = [
  {
    id: 1,
    question: "Sanger's chain-termination method of DNA sequencing works because dideoxynucleotides (ddNTPs)",
    options: ["Lack a 3′-hydroxyl group, so no further nucleotide can be added after one is incorporated", "Lack a 5′-phosphate, so they cannot be incorporated", "Cleave the DNA backbone at specific bases", "Bind permanently to the DNA polymerase"],
    answer: 0,
    explanation: "A ddNTP has a hydrogen in place of the 3′-OH needed to form the next phosphodiester bond. When the polymerase adds one, the chain stops at that base, producing fragments that end at every position. Sanger described the method in 1977 and won his second Nobel Prize in 1980."
  },
  {
    id: 2,
    question: "The method of DNA sequencing that uses base-specific chemical cleavage of end-labelled DNA, published in 1977, is associated with",
    options: ["Sanger and Coulson", "Maxam and Gilbert", "Ronaghi and Nyrén", "Mullis and Faloona"],
    answer: 1,
    explanation: "The Maxam-Gilbert method used chemicals such as dimethyl sulfate and hydrazine to cleave radiolabelled DNA at particular bases. It was superseded by Sanger's enzymatic chain termination, which was safer and easier to automate. Ronaghi and Nyrén developed pyrosequencing."
  },
  {
    id: 3,
    question: "In modern dye-terminator cycle sequencing, all four reactions can be run in a single tube and a single capillary because",
    options: ["The primers are labelled with four different radioisotopes", "Only one ddNTP is used per run", "Each of the four ddNTPs carries a different fluorescent dye", "The template is cut into four pieces before sequencing"],
    answer: 2,
    explanation: "In dye-terminator chemistry such as BigDye, each terminator (ddA, ddC, ddG, ddT) carries a spectrally distinct dye. The base at which each fragment ends is identified by colour as fragments pass the laser detector. Older methods used four separate lanes with radiolabels."
  },
  {
    id: 4,
    question: "Cycle sequencing differs from PCR in that it",
    options: ["Uses no DNA polymerase", "Requires RNA template", "Is carried out at a constant temperature", "Uses a single primer, so product accumulates linearly rather than exponentially"],
    answer: 3,
    explanation: "Cycle sequencing uses repeated denaturation, annealing and extension, but with only one primer. Each cycle produces one more set of terminated fragments from the same template strands, so product increases linearly. Thermostable polymerase allows many cycles from little template."
  },
  {
    id: 5,
    question: "Before cycle sequencing, PCR products are often treated with ExoSAP-IT. This treatment",
    options: ["Removes leftover primers and dNTPs with exonuclease I and shrimp alkaline phosphatase", "Adds fluorescent labels to the products", "Converts double-stranded DNA into RNA", "Removes heteroplasmic positions"],
    answer: 0,
    explanation: "Exonuclease I degrades single-stranded primers and shrimp alkaline phosphatase dephosphorylates unused dNTPs, so neither interferes with the sequencing reaction. After sequencing, unincorporated dye terminators are removed separately, for example by BigDye XTerminator or column clean-up."
  },
  {
    id: 6,
    question: "In capillary electrophoresis instruments used for sequencing and STR analysis, the sample is introduced into the capillary by",
    options: ["Hydrodynamic pressure only", "Electrokinetic injection, using a brief voltage to draw DNA into the capillary", "Gravity flow through an agarose plug", "Vacuum aspiration"],
    answer: 1,
    explanation: "Electrokinetic injection applies a short voltage so negatively charged DNA migrates into the capillary end. It favours smaller fragments and is reduced by salt in the sample, which competes with DNA. That is why products are desalted and resuspended in deionised formamide."
  },
  {
    id: 7,
    question: "Samples for capillary electrophoresis are heated in highly deionised formamide and snap-cooled before loading in order to",
    options: ["Digest proteins", "Add a fluorescent label", "Keep the DNA denatured as single strands for size-based separation", "Remove the internal size standard"],
    answer: 2,
    explanation: "Formamide lowers the melting temperature of DNA and keeps strands apart after heat denaturation. Single strands then migrate strictly by length through the polymer (e.g. POP-4 or POP-7), giving single-base resolution. Ionic impurities in degraded formamide reduce injection efficiency."
  },
  {
    id: 8,
    question: "Pyrosequencing detects incorporation of a nucleotide by measuring",
    options: ["The change in pH as protons are released", "Fluorescence from a cleaved reversible terminator", "Changes in electrical current through a nanopore", "Light produced when released pyrophosphate is converted to ATP and used by luciferase"],
    answer: 3,
    explanation: "Each incorporation releases pyrophosphate (PPi). ATP sulfurylase converts PPi to ATP, and luciferase uses the ATP to oxidise luciferin, emitting light proportional to the number of bases incorporated. Apyrase then degrades excess nucleotide before the next one is added."
  },
  {
    id: 9,
    question: "In pyrosequencing, dATP is replaced by deoxyadenosine α-thio triphosphate (dATPαS) because",
    options: ["Natural dATP is a substrate for luciferase and would give false light signals", "dATP cannot be incorporated by DNA polymerase", "dATPαS terminates chain extension", "dATPαS is fluorescent"],
    answer: 0,
    explanation: "Luciferase can use dATP directly, so it would emit light without any incorporation. dATPαS is used efficiently by DNA polymerase but not by luciferase. This keeps light signals specific to true incorporation events."
  },
  {
    id: 10,
    question: "A known weakness of pyrosequencing and Ion Torrent sequencing is",
    options: ["Very short sequencing time", "Inability to sequence GC-rich regions at all", "Errors in counting the length of homopolymer runs such as AAAAAA", "Use of radioactive reagents"],
    answer: 2,
    explanation: "Both methods flow one nucleotide at a time and infer the number of identical bases incorporated from signal size. Signal does not rise exactly in proportion for long homopolymers, causing insertion and deletion errors. This is relevant to mtDNA poly-C stretches."
  },
  {
    id: 11,
    question: "Ion Torrent (ion semiconductor) sequencing detects nucleotide incorporation by sensing",
    options: ["Light from luciferase", "Hydrogen ions released during incorporation, which change the pH in each microwell", "Fluorescent dyes cleaved from terminators", "Radioactive phosphorus emission"],
    answer: 1,
    explanation: "When a nucleotide is incorporated, a proton (H⁺) is released. A semiconductor sensor beneath each well detects the resulting pH change. No optics or labelled nucleotides are needed, and templates are prepared by emulsion PCR on beads."
  },
  {
    id: 12,
    question: "Illumina sequencing generates clusters of identical template molecules on a flow cell by",
    options: ["Emulsion PCR on beads", "Rolling-circle amplification in solution", "Cloning in bacterial vectors", "Bridge amplification on surface-bound oligonucleotides"],
    answer: 3,
    explanation: "Adapter-ligated fragments bind to complementary oligonucleotides on the flow cell and amplify by bridging to neighbouring oligos, forming dense clonal clusters. Sequencing by synthesis then uses fluorescent reversible terminators, imaged one base per cycle."
  },
  {
    id: 13,
    question: "In Illumina sequencing-by-synthesis, only one base is added per cycle because the nucleotides",
    options: ["Carry a removable 3′ blocking group along with a cleavable fluorescent dye", "Are dideoxynucleotides that permanently terminate synthesis", "Are added one type at a time and washed away", "Are detected by proton release"],
    answer: 0,
    explanation: "Reversible terminators carry a 3′ block, so incorporation pauses after one base. The cluster is imaged to read the dye colour, then the dye and block are removed chemically so the next cycle can proceed. Unlike Sanger ddNTPs, the termination is reversible."
  },
  {
    id: 14,
    question: "The term 'massively parallel sequencing' (MPS), preferred by forensic bodies for next-generation sequencing, refers to",
    options: ["Sequencing one sample many times in sequence", "Sequencing by capillary electrophoresis in 96 capillaries", "Simultaneously sequencing millions of DNA fragments in one run", "Sequencing both strands of a single molecule at once"],
    answer: 2,
    explanation: "MPS platforms read millions of clonally amplified or single molecules at once. With sample barcodes (indexes), many samples and many markers (STRs, SNPs, mtDNA) can be sequenced in one run, which a 96-capillary Sanger instrument cannot match."
  },
  {
    id: 15,
    question: "The ForenSeq DNA Signature Prep Kit, which co-analyses autosomal, X and Y STRs with identity, ancestry and phenotype SNPs, is run on which platform?",
    options: ["Ion S5", "ABI 3500 Genetic Analyzer", "PacBio Sequel", "MiSeq FGx"],
    answer: 3,
    explanation: "ForenSeq was developed by Illumina (later Verogen) for the MiSeq FGx Forensic Genomics System. It sequences STRs and identity SNPs in one primer mix, and adds ancestry and phenotype (eye and hair colour) SNPs in another. The ABI 3500 is a capillary electrophoresis instrument."
  },
  {
    id: 16,
    question: "Sequencing STR loci by MPS can increase discrimination compared with capillary electrophoresis because it",
    options: ["Detects isoalleles, which are alleles of the same length that differ in internal sequence", "Detects alleles that are too large for capillary electrophoresis", "Eliminates the need for PCR", "Converts STRs into SNPs"],
    answer: 0,
    explanation: "CE separates alleles only by length, so two alleles of '13 repeats' look identical even if one carries a variant repeat motif or a flanking SNP. MPS reads the actual sequence and can split such same-length alleles. This raises the power of loci such as D3S1358, D21S11 and D12S391."
  },
  {
    id: 17,
    question: "Oxford Nanopore sequencing identifies bases by",
    options: ["Measuring light emitted by luciferase", "Measuring changes in ionic current as a DNA strand passes through a protein pore", "Detecting pH changes in microwells", "Reading fluorescent reversible terminators"],
    answer: 1,
    explanation: "A motor protein feeds single-stranded DNA through a nanopore set in a membrane. Each group of bases in the pore disrupts the ionic current in a characteristic way. It is a single-molecule, long-read method that needs no amplification and gives real-time output."
  },
  {
    id: 18,
    question: "The human mitochondrial genome is",
    options: ["A linear molecule of about 3 billion base pairs", "A circular double-stranded molecule of 16,569 base pairs", "A circular single-stranded RNA of 16,569 nucleotides", "A linear double-stranded molecule of 1,122 base pairs"],
    answer: 1,
    explanation: "Human mtDNA is a closed circular dsDNA of 16,569 bp encoding 37 genes: 13 polypeptides of the respiratory chain, 22 tRNAs and 2 rRNAs. The two strands are called heavy (guanine-rich) and light. About 1,122 bp form the non-coding control region."
  },
  {
    id: 19,
    question: "How many protein-coding genes does human mitochondrial DNA contain?",
    options: ["37", "22", "13", "2"],
    answer: 2,
    explanation: "Of the 37 mitochondrial genes, 13 encode subunits of oxidative phosphorylation complexes I, III, IV and V. The other 24 are RNA genes: 22 tRNAs and 2 rRNAs (12S and 16S). All other mitochondrial proteins are encoded in the nucleus."
  },
  {
    id: 20,
    question: "The mtDNA control region is also called the D-loop because",
    options: ["It forms a triple-stranded displacement loop where a short nascent H-strand (7S DNA) displaces the parent strand", "It contains the gene for D-amino acid oxidase", "It is deleted in most cells", "It is the region that binds dideoxynucleotides"],
    answer: 0,
    explanation: "In much of the mtDNA population a short newly made heavy-strand fragment (7S DNA) stays paired in this region, displacing the parental H-strand into a loop. The region contains the H-strand origin of replication and the main promoters. It does not code for protein, so it tolerates more mutations."
  },
  {
    id: 21,
    question: "The first hypervariable segment (HV1) of the mtDNA control region corresponds approximately to positions",
    options: ["73–340", "438–574", "16024–16365", "3307–4262"],
    answer: 2,
    explanation: "HV1 spans about 16024–16365 and HV2 about 73–340, with HV3 at about 438–574. These segments have the highest mutation density in the genome and are the regions traditionally sequenced in forensic mtDNA analysis. 3307–4262 is the ND1 coding gene."
  },
  {
    id: 22,
    question: "Forensic mtDNA analysis targets the control region rather than coding genes mainly because the control region",
    options: ["Is present only in maternal relatives", "Is the only part of mtDNA that can be amplified", "Is inherited from the father", "Accumulates mutations faster and so varies most between unrelated individuals"],
    answer: 3,
    explanation: "Because it codes no protein, the control region is under weaker selection, and its substitution rate is several times that of coding regions. Most of the variation between people lies in HV1 and HV2, so sequencing a few hundred bases gives useful discrimination. Whole-mitogenome sequencing by MPS now extends this."
  },
  {
    id: 23,
    question: "Mitochondrial DNA sequences in forensic reports are described as differences from the revised Cambridge Reference Sequence (rCRS), which was",
    options: ["The first human nuclear genome assembly", "A corrected re-sequencing (1999) of the original Anderson 1981 mtDNA sequence, keeping the original numbering", "The consensus sequence of all African haplogroups", "A sequence derived from Neanderthal remains"],
    answer: 1,
    explanation: "Anderson and colleagues published the first human mtDNA sequence in 1981. Andrews and colleagues (1999) corrected its errors to give the rCRS. To keep the original numbering, the deleted position 3107 is retained as a placeholder ('N'), and profiles list only positions that differ from rCRS."
  },
  {
    id: 24,
    question: "In mtDNA nomenclature relative to rCRS, the notation '315.1C' means",
    options: ["An insertion of a cytosine after position 315", "A deletion of the cytosine at position 315", "A substitution of C by T at position 315", "A heteroplasmic C/T at position 315"],
    answer: 0,
    explanation: "Insertions are written as the preceding rCRS position followed by '.1', '.2' and so on and the inserted base. 315.1C, an extra C in the HV2 poly-C tract, is found in most people. Deletions are written with 'del' or '−' (e.g. 249del), and substitutions as position plus new base (e.g. 16519C)."
  },
  {
    id: 25,
    question: "In a Sanger sequence, a position shows overlapping C and T peaks of roughly equal height. Using IUPAC ambiguity codes, this position is recorded as",
    options: ["R", "Y", "K", "S"],
    answer: 1,
    explanation: "Y (pyrimidine) means C or T, and R (purine) means A or G. K means G/T, S means G/C, W means A/T and M means A/C. Mixed peaks at one site in a single-source sample indicate point heteroplasmy."
  },
  {
    id: 26,
    question: "Heteroplasmy in mtDNA refers to",
    options: ["Different mtDNA sequences in maternal relatives", "Mitochondrial DNA inserted into the nuclear genome", "Recombination between maternal and paternal mtDNA", "The presence of more than one mtDNA type within one individual, tissue or cell"],
    answer: 3,
    explanation: "Heteroplasmy may be point heteroplasmy (two bases at one site) or length heteroplasmy (different numbers of bases in a homopolymer tract such as the HV2 C-stretch at 303–315). Its levels can differ between tissues and even between hairs of the same person. A shared heteroplasmy can strengthen an identification."
  },
  {
    id: 27,
    question: "Length heteroplasmy in HV1 is commonly seen when a T→C transition at position 16189 interrupts the sequence between positions 16184 and 16193. This happens because",
    options: ["The change creates a stop codon", "The change destroys a restriction site", "An uninterrupted run of cytosines forms, which causes polymerase slippage during replication", "It converts the control region into coding sequence"],
    answer: 2,
    explanation: "16189C joins the flanking C runs into a long homopolymeric C-tract. The polymerase slips on such tracts, producing molecules of varying length in the same individual. In Sanger traces this gives 'out-of-phase' unreadable sequence downstream, so the region is often read from both directions."
  },
  {
    id: 28,
    question: "The identification of Tsar Nicholas II's remains was complicated and finally strengthened by a heteroplasmic C/T at mtDNA position 16169, which was also found in",
    options: ["His brother, Grand Duke Georgij Romanov", "Prince Philip, Duke of Edinburgh", "His daughter Anastasia", "Anna Anderson"],
    answer: 0,
    explanation: "Gill and colleagues (1994) found the heteroplasmy in the Tsar's bones. Exhumation of his brother Georgij in 1994 showed the same C/T heteroplasmy, confirming the shared maternal lineage (Ivanov et al., 1996). Prince Philip was the maternal-line reference for the Tsarina and her children, not for the Tsar."
  },
  {
    id: 29,
    question: "Mitochondrial DNA testing showed that Anna Anderson, who claimed to be Grand Duchess Anastasia, was not a Romanov. Her mtDNA instead matched",
    options: ["Prince Philip", "A maternal-line relative of the Polish factory worker Franziska Schanzkowska", "Tsarina Alexandra", "Grand Duke Georgij Romanov"],
    answer: 1,
    explanation: "Tissue from a 1979 surgery on Anna Anderson was sequenced in 1994. It differed from the Romanov maternal line (represented by Prince Philip) but matched Karl Maucher, a great-nephew of Franziska Schanzkowska through the maternal line. This is a classic case of mtDNA excluding an identity claim."
  },
  {
    id: 30,
    question: "Human mtDNA is inherited only from the mother because",
    options: ["Sperm contain no mitochondria", "Paternal mtDNA recombines with maternal mtDNA and is lost", "Sperm mitochondria that enter the egg are tagged and destroyed early in development, and the egg contains far more mtDNA copies", "Mitochondria are made fresh in the embryo from nuclear genes"],
    answer: 2,
    explanation: "The sperm midpiece does carry mitochondria into the oocyte, but they are marked (e.g. by ubiquitination) and eliminated, and the oocyte contains hundreds of thousands of mtDNA copies against a few hundred from sperm. mtDNA therefore passes unchanged along the maternal line, barring mutation, and does not recombine."
  },
  {
    id: 31,
    question: "Skeletal remains are believed to be those of a missing man whose mother has died. Which living relative could provide a direct mtDNA reference sample?",
    options: ["His father", "His paternal uncle", "His own son", "His sister's son"],
    answer: 3,
    explanation: "The sister carries their mother's mtDNA and passes it to all her children, so her son has the same maternal lineage as the missing man. The man's father and paternal uncle belong to a different maternal lineage, and the man's own son carries his wife's mtDNA."
  },
  {
    id: 32,
    question: "Which of these individuals would be expected to share the same mtDNA control-region sequence as a woman, barring mutation?",
    options: ["Her maternal grandmother", "Her husband", "Her son's children", "Her paternal grandmother"],
    answer: 0,
    explanation: "mtDNA passes from a mother to all her children, but only daughters pass it on. The woman therefore shares mtDNA with her mother, her maternal grandmother, her siblings and her daughters' children. Her son's children carry their own mother's mtDNA."
  },
  {
    id: 33,
    question: "A shed hair with no root sheath is recovered at a burglary scene. The most appropriate DNA analysis is",
    options: ["Autosomal STR typing with standard cycling", "Mitochondrial DNA sequencing of the hair shaft", "Y-STR typing of the root", "RFLP analysis with single-locus probes"],
    answer: 1,
    explanation: "Telogen hairs and hair shafts contain little nuclear DNA but keep many mtDNA copies protected by the keratin matrix. mtDNA sequencing of HV1/HV2, or of the whole mitogenome by MPS, is the established approach. RFLP would need micrograms of high-quality DNA."
  },
  {
    id: 34,
    question: "Mitochondrial DNA is the marker of choice for highly degraded or ancient remains mainly because",
    options: ["It has a lower mutation rate than nuclear DNA", "It is longer than nuclear chromosomes", "Each cell contains hundreds to thousands of copies, so some survive when nuclear DNA is destroyed", "It is never contaminated by modern DNA"],
    answer: 2,
    explanation: "High copy number, together with a small circular genome inside a double-membraned organelle, makes mtDNA more likely to survive in old bone, teeth and hair. Contamination is still a major concern, especially for ancient DNA, which needs strict clean-room and authentication practice."
  },
  {
    id: 35,
    question: "Ancient DNA sequences commonly show an excess of C→T substitutions near the ends of molecules. This is caused by",
    options: ["Deamination of cytosine to uracil in single-stranded overhangs after death", "Heteroplasmy inherited from the mother", "Methylation of guanine", "Errors made by luciferase during sequencing"],
    answer: 0,
    explanation: "Over time, cytosines (especially in single-stranded fragment ends) lose their amino group and become uracil, which the polymerase reads as T. This damage pattern helps prove that sequences are genuinely ancient and not modern contamination. Treating extracts with uracil-DNA glycosylase can remove it."
  },
  {
    id: 36,
    question: "In 1997, Krings, Pääbo and colleagues used mtDNA sequencing on the Feldhofer specimen to show that",
    options: ["Ötzi the Iceman had African ancestry", "The Neanderthal mtDNA sequence lay outside the range of modern human variation", "Tsar Nicholas II was heteroplasmic", "The Romanov children were all present in the grave"],
    answer: 1,
    explanation: "Control-region sequences from the Neanderthal type specimen differed markedly from all modern humans. This suggested Neanderthals contributed little or no mtDNA to living humans, and it was a landmark in ancient DNA research."
  },
  {
    id: 37,
    question: "The skeletons at a high-altitude glacial lake in Uttarakhand, popularly called 'Skeleton Lake', whose genome-wide ancient DNA study (2019) revealed groups of different ancestry including an eastern Mediterranean group, are found at",
    options: ["Hemkund", "Satopanth Tal", "Dodital", "Roopkund"],
    answer: 3,
    explanation: "Roopkund Lake in Chamoli district holds hundreds of human skeletons. A 2019 Nature Communications study (Harney et al.) found genetically distinct groups who died in separate events centuries apart, including individuals with eastern Mediterranean ancestry. It shows ancient DNA techniques applied to Indian remains."
  },
  {
    id: 38,
    question: "Major mtDNA haplogroups M and N, found across Asia, Europe and the Americas, are both derived from African haplogroup",
    options: ["H", "U", "L3", "R"],
    answer: 2,
    explanation: "The deep African L lineages (L0–L6) root the mtDNA tree. L3 gave rise to macrohaplogroups M and N during the dispersal out of Africa, and N in turn gave rise to R, from which H and U derive. India has a high frequency of M lineages."
  },
  {
    id: 39,
    question: "PhyloTree, widely used in forensic mtDNA analysis, is",
    options: ["A software package for STR peak calling", "An updated phylogeny of global human mtDNA haplogroups and their defining mutations", "A database of Y-STR haplotypes", "A nuclear SNP ancestry panel"],
    answer: 1,
    explanation: "PhyloTree (van Oven and Kayser, 2009) maps the mutations defining each mtDNA haplogroup. Laboratories use it to assign haplogroups and to check sequences for phylogenetically unlikely combinations that suggest errors or contamination."
  },
  {
    id: 40,
    question: "EMPOP, the mtDNA population database widely used by forensic laboratories, is",
    options: ["A quality-controlled forensic mtDNA database hosted at the Institute of Legal Medicine, Innsbruck", "The FBI's database of convicted-offender STR profiles", "A Y-chromosome haplotype reference database", "An Indian national DNA databank for missing persons"],
    answer: 0,
    explanation: "EMPOP (EDNAP mtDNA Population Database), led by Walther Parson, accepts only sequences that pass phylogenetic and technical quality checks. Laboratories use it to estimate how often a haplotype occurs in relevant populations. YHRD is the equivalent for Y-STR haplotypes."
  },
  {
    id: 41,
    question: "The frequency of an mtDNA haplotype is estimated by the counting method rather than by multiplying frequencies at individual variable sites because",
    options: ["mtDNA sites are always in Hardy-Weinberg equilibrium", "Each site in mtDNA is inherited from a different parent", "mtDNA has too few variable sites to count", "mtDNA is inherited as a single non-recombining unit, so its sites are not independent"],
    answer: 3,
    explanation: "Without recombination, all mtDNA variants are completely linked and travel together as one haplotype. The product rule therefore cannot be used. Instead, the number of times the whole haplotype appears in a database is counted, usually with a confidence interval."
  },
  {
    id: 42,
    question: "An mtDNA haplotype from a crime scene has never been observed in a database of 3,000 sequences. Using the approximate 'rule of three', the 95% upper confidence bound on its frequency is about",
    options: ["1 in 3,000", "1 in 9,000", "1 in 1,000", "Zero"],
    answer: 2,
    explanation: "When a haplotype is seen 0 times in N samples, the 95% upper bound is 1 − 0.05^(1/N), which is about 3/N. Here that gives 3/3000 = 0.001, or 1 in 1,000. Reporting zero would be wrong, because absence from a finite database does not mean absence from the population."
  },
  {
    id: 43,
    question: "Under SWGDAM guidelines, when an evidence and a reference mtDNA sequence differ at two or more unambiguous positions with no shared heteroplasmy, the conclusion is",
    options: ["Exclusion", "Inconclusive", "Cannot exclude", "Identity established"],
    answer: 0,
    explanation: "Two or more clear differences mean the samples come from different maternal lineages, which is an exclusion. A single difference is usually reported as inconclusive, because mutation or heteroplasmy could explain it. Identical sequences mean the reference donor and all maternal relatives cannot be excluded."
  },
  {
    id: 44,
    question: "Nuclear mitochondrial DNA segments (NUMTs) can complicate forensic mtDNA analysis because they",
    options: ["Are inherited only from the father", "Destroy mtDNA during extraction", "Are copies of mtDNA sequence in the nuclear genome that may be co-amplified and mimic heteroplasmy", "Prevent PCR of the control region"],
    answer: 2,
    explanation: "Over evolution, pieces of mtDNA have been inserted into nuclear chromosomes. Primers may also amplify these pseudogenes, adding minor sequences that look like heteroplasmy or mixtures. The high copy number of genuine mtDNA usually keeps NUMT signals low."
  },
  {
    id: 45,
    question: "Which statement about the evidential value of an mtDNA match is correct?",
    options: ["It is as discriminating as a full 20-locus STR profile", "It proves identity to the exclusion of all others", "It is useless because all humans share the same mtDNA", "It cannot distinguish between maternal relatives, so it is less discriminating than autosomal STRs"],
    answer: 3,
    explanation: "Everyone in a maternal lineage shares the same mtDNA, and some haplotypes are common in a population. A match therefore shows only that the person or a maternal relative could be the source. Its strength depends on the haplotype's frequency in a database such as EMPOP."
  },
  {
    id: 46,
    question: "Cytoplasmic male sterility in maize, used in producing hybrid seed, is an example of",
    options: ["Nuclear X-linked inheritance", "Maternal inheritance of a mitochondrial genome trait", "Genomic imprinting in plants", "Codominant nuclear inheritance"],
    answer: 1,
    explanation: "Cytoplasmic male sterility arises from rearranged mitochondrial genes that cause pollen to fail. It is passed through the egg cytoplasm, so all progeny of a sterile female line are male-sterile unless nuclear 'restorer' genes are present. Breeders use it to avoid hand emasculation."
  },
  {
    id: 47,
    question: "Dextral or sinistral shell coiling in the snail Limnaea depends on the genotype of the mother, not of the offspring. This is an example of",
    options: ["Maternal effect, controlled by the mother's nuclear genes", "Cytoplasmic inheritance through mitochondria", "Plastid inheritance", "Sex-linked inheritance"],
    answer: 0,
    explanation: "The coiling gene is nuclear, but the mother's genotype sets the direction of early cleavage through products she deposits in the egg. Offspring show the phenotype of their mother's genotype, one generation behind their own. Cytoplasmic inheritance, by contrast, depends on genes located in organelles."
  },
  {
    id: 48,
    question: "The 'petite' mutants of baker's yeast studied by Boris Ephrussi, which form small colonies because of defective respiration, demonstrated",
    options: ["Y-linked inheritance in fungi", "Codominance of nuclear alleles", "Extranuclear (mitochondrial) inheritance", "Anticipation in fungal genomes"],
    answer: 2,
    explanation: "Vegetative (cytoplasmic) petites carry deleted or absent mtDNA. Crossed with wild type, they do not segregate in a Mendelian way because mitochondria do not follow nuclear meiotic rules. They were classic early evidence for genes outside the nucleus."
  },
  {
    id: 49,
    question: "In a capillary electrophoresis sequencing trace, the first (earliest-detected) peaks correspond to",
    options: ["The longest fragments, farthest from the primer", "The 3′ end of the template strand", "Fragments containing no ddNTP", "The shortest fragments, terminated nearest the sequencing primer"],
    answer: 3,
    explanation: "Smaller fragments move faster through the sieving polymer and reach the detector first. Reading peaks in order of arrival therefore gives the newly synthesised strand from 5′ (next to the primer) to 3′. Read lengths of about 700–1000 bases are typical for Sanger sequencing."
  },
  {
    id: 50,
    question: "Sample barcodes (index sequences) added during MPS library preparation allow a laboratory to",
    options: ["Pool many samples in one sequencing run and assign each read back to its sample", "Avoid PCR completely", "Increase the length of each sequence read", "Detect heteroplasmy without sequencing"],
    answer: 0,
    explanation: "Each sample's library gets a unique short index sequence ligated or amplified onto its fragments. After sequencing, software sorts (demultiplexes) reads by index. This is how forensic MPS kits process dozens of samples per run economically."
  }
];

export default questions;
