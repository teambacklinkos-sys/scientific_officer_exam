const questions = [
  {
    id: 1,
    question: "Which of the following primary nucleotide sequence databases is maintained by the National Center for Biotechnology Information (NCBI), USA?",
    options: ["EMBL Nucleotide Sequence Database", "DNA Data Bank of Japan", "GenBank", "Protein Data Bank"],
    answer: 2,
    explanation: "GenBank is the nucleotide sequence database of NCBI, a division of the US National Library of Medicine (NIH). EMBL (now the European Nucleotide Archive) is run by EMBL-EBI in the UK and DDBJ by Japan's National Institute of Genetics. The PDB is a structure database, not an NCBI sequence archive."
  },
  {
    id: 2,
    question: "The International Nucleotide Sequence Database Collaboration (INSDC), whose members exchange newly submitted sequence data daily, consists of:",
    options: ["GenBank, ENA (EMBL-EBI) and DDBJ", "GenBank, UniProt and PDB", "Swiss-Prot, TrEMBL and PIR", "DDBJ, Ensembl and KEGG"],
    answer: 0,
    explanation: "The INSDC is formed by GenBank (USA), the European Nucleotide Archive at EMBL-EBI (UK) and DDBJ (Japan). They synchronise data daily, so a sequence submitted to any one becomes available in all three. UniProt and PDB are protein sequence and structure resources respectively."
  },
  {
    id: 3,
    question: "The DNA Data Bank of Japan (DDBJ) is operated from:",
    options: ["European Bioinformatics Institute, Hinxton, UK", "National Center for Biotechnology Information, Bethesda, USA", "Swiss Institute of Bioinformatics, Geneva", "National Institute of Genetics, Mishima, Japan"],
    answer: 3,
    explanation: "DDBJ is run by the National Institute of Genetics at Mishima, Japan, and is the Asian partner of the INSDC. EMBL-EBI at Hinxton hosts the European archive and NCBI at Bethesda hosts GenBank. The Swiss Institute of Bioinformatics is a partner in UniProt."
  },
  {
    id: 4,
    question: "The Protein Data Bank (PDB), established in 1971 at Brookhaven National Laboratory, is an archive of:",
    options: ["Annotated nucleotide sequences submitted by individual laboratories", "Allele frequencies of STR loci in world populations", "Curated metabolic pathway maps", "Experimentally determined three-dimensional structures of proteins and nucleic acids"],
    answer: 3,
    explanation: "The PDB stores atomic coordinates of macromolecular structures solved mainly by X-ray crystallography, NMR and cryo-electron microscopy. It is now managed by the worldwide PDB (wwPDB) partners such as RCSB PDB. Nucleotide sequences go to GenBank/ENA/DDBJ, and pathway maps are found in resources such as KEGG."
  },
  {
    id: 5,
    question: "Within the UniProt Knowledgebase (UniProtKB), the section containing manually annotated and reviewed protein entries is:",
    options: ["TrEMBL", "Swiss-Prot", "UniParc", "UniRef"],
    answer: 1,
    explanation: "UniProtKB/Swiss-Prot contains expert-curated, reviewed entries, while UniProtKB/TrEMBL holds computationally annotated, unreviewed entries. UniParc is a non-redundant sequence archive and UniRef provides clustered sequence sets. UniProt is run by EMBL-EBI, SIB and PIR."
  },
  {
    id: 6,
    question: "A sequence file has a single description line beginning with the symbol \">\" followed by lines of nucleotide or amino-acid letters. This file is in which format?",
    options: ["GenBank flat file", "FASTA", "FASTQ", "PDB coordinate file"],
    answer: 1,
    explanation: "FASTA format starts each record with a \">\" header line followed by the raw sequence, and it is the standard input for BLAST and Clustal. FASTQ records begin with \"@\" and carry per-base quality scores from sequencers. GenBank flat files have LOCUS, DEFINITION and FEATURES fields."
  },
  {
    id: 7,
    question: "An FSL obtains a cytochrome b DNA sequence from a seized meat sample suspected to be from a protected species. Which bioinformatic search is most appropriate for identifying the species?",
    options: ["blastn search against the NCBI nucleotide collection", "blastp search against UniProtKB/Swiss-Prot", "Search of the Protein Data Bank", "Search of STRBase"],
    answer: 0,
    explanation: "A nucleotide query compared against a nucleotide database calls for blastn, and the closest matches to reference cytochrome b sequences indicate the species. blastp compares protein queries with protein databases. STRBase holds human STR marker information and cannot identify animal species."
  },
  {
    id: 8,
    question: "BLAST (Basic Local Alignment Search Tool) finds similar sequences in a database by:",
    options: ["Global alignment by exhaustive Needleman-Wunsch dynamic programming", "Progressive multiple alignment guided by a tree", "Heuristic local alignment seeded by short word matches", "Rigid-body superposition of three-dimensional structures"],
    answer: 2,
    explanation: "BLAST (Altschul et al., 1990) first finds short exact or high-scoring word hits and then extends them into local alignments. This heuristic is far faster than exhaustive dynamic programming, though it does not guarantee the optimal alignment. Progressive multiple alignment is the approach used by Clustal."
  },
  {
    id: 9,
    question: "Which BLAST program compares a nucleotide query, translated in all six reading frames, against a protein database?",
    options: ["blastn", "blastp", "tblastn", "blastx"],
    answer: 3,
    explanation: "blastx translates the nucleotide query in six frames and searches a protein database. tblastn does the reverse: it searches a protein query against a nucleotide database translated in six frames. blastn is nucleotide versus nucleotide and blastp is protein versus protein."
  },
  {
    id: 10,
    question: "In a BLAST output, the E-value of a hit represents:",
    options: ["The percentage of identical residues in the alignment", "The number of alignments with an equal or better score expected by chance in a database of that size", "The probability that the two sequences share a common ancestor", "The length of the aligned region in base pairs"],
    answer: 1,
    explanation: "The E (expect) value is the number of hits with at least that score expected purely by chance, given the query length and database size. The closer it is to zero, the more significant the match. Percentage identity and alignment length are reported separately."
  },
  {
    id: 11,
    question: "A BLAST search with a questioned mtDNA sequence returns hit X with an E-value of 1e-50 and hit Y with an E-value of 2.0. Which interpretation is correct?",
    options: ["Hit X is far more significant, because almost no chance matches of that score are expected", "Hit Y is more significant, because a larger E-value indicates a stronger match", "Both hits are equally significant if their alignment lengths are equal", "Hit Y is more significant, because it has more chance matches supporting it"],
    answer: 0,
    explanation: "A lower E-value means fewer matches of that quality are expected by chance, so 1e-50 shows a highly significant, almost certainly homologous match. An E-value of 2.0 means two such hits are expected by chance alone, so hit Y is not significant. E-values from the same search can be compared directly."
  },
  {
    id: 12,
    question: "The Needleman-Wunsch algorithm (1970) is used for:",
    options: ["Local alignment of the best-matching sub-regions of two sequences", "Heuristic searching of large sequence databases", "Optimal global alignment of two sequences over their entire length", "Construction of a phylogenetic tree by parsimony"],
    answer: 2,
    explanation: "Needleman-Wunsch uses dynamic programming to find the optimal global alignment, aligning two sequences from end to end. It suits sequences of similar length that are related throughout. Optimal local alignment is done by Smith-Waterman, and fast heuristic database searching by BLAST or FASTA."
  },
  {
    id: 13,
    question: "Which algorithm uses dynamic programming to guarantee the optimal local alignment between two sequences?",
    options: ["Needleman-Wunsch", "UPGMA", "Smith-Waterman", "Neighbour-joining"],
    answer: 2,
    explanation: "The Smith-Waterman algorithm (1981) modifies dynamic programming so that scores cannot fall below zero, which yields the best-scoring local region. It is more sensitive but slower than BLAST. UPGMA and neighbour-joining are methods for building trees, not alignment algorithms."
  },
  {
    id: 14,
    question: "The FASTA sequence-similarity search program, which preceded BLAST, was developed by:",
    options: ["David Lipman and William Pearson", "Saul Needleman and Christian Wunsch", "Temple Smith and Michael Waterman", "Des Higgins and Paul Sharp"],
    answer: 0,
    explanation: "Lipman and Pearson developed FASTP (1985) and FASTA (1988), which find word (k-tuple) matches and then extend them. The FASTA file format takes its name from this program. Higgins and Sharp wrote the first Clustal program in 1988, and the other pairs gave their names to dynamic-programming algorithms."
  },
  {
    id: 15,
    question: "A pairwise alignment of two mtDNA hypervariable region I sequences spans 340 aligned positions, of which 323 are identical. The percentage identity is approximately:",
    options: ["90%", "95%", "97%", "85%"],
    answer: 1,
    explanation: "Percentage identity = identical positions ÷ aligned positions × 100 = 323 ÷ 340 × 100 = 95%. Identity is always calculated over the aligned length, so the way gaps are counted can change the value. Seventeen positions differ here."
  },
  {
    id: 16,
    question: "ClustalW constructs a multiple sequence alignment by:",
    options: ["Aligning all sequences simultaneously by exhaustive multidimensional dynamic programming", "Searching each sequence against GenBank with BLAST", "Superimposing predicted three-dimensional structures", "Progressive alignment following a guide tree built from pairwise distances"],
    answer: 3,
    explanation: "ClustalW first aligns all pairs of sequences, builds a guide tree (by neighbour-joining) from the distances, and then aligns sequences progressively from the most similar to the most divergent. Exhaustive simultaneous alignment of many sequences is too costly to compute. Clustal Omega is the current version for large datasets."
  },
  {
    id: 17,
    question: "BLOSUM62, the default substitution matrix for protein BLAST, was derived from:",
    options: ["Ungapped blocks of conserved protein regions, clustering sequences more than 62% identical", "Extrapolation from closely related proteins at one accepted point mutation per 100 residues", "Transition/transversion ratios observed in mitochondrial DNA", "Structural superposition of 62 protein families"],
    answer: 0,
    explanation: "Henikoff and Henikoff (1992) derived BLOSUM matrices from conserved blocks in the BLOCKS database, clustering sequences above a set identity (62% for BLOSUM62). Higher BLOSUM numbers suit closely related sequences. The second option describes Dayhoff's PAM matrices."
  },
  {
    id: 18,
    question: "Familial searching of a forensic DNA database raises a particular privacy concern because:",
    options: ["It requires sequencing coding regions of the genome", "It reveals the full medical history of the offender", "It can be performed only with mitochondrial DNA", "It brings relatives of database members under suspicion even though they have never been profiled"],
    answer: 3,
    explanation: "Familial searching looks for partial matches that suggest a close relative of a database member is the source, so people never sampled become suspects through their relatives. Critics also point out that it widens existing demographic imbalances in databases. It uses ordinary STR (often with Y-STR) profiles, not coding DNA."
  },
  {
    id: 19,
    question: "After public concern over the Golden State Killer investigation, the genealogy database GEDmatch changed its policy in 2019 so that:",
    options: ["All its profiles were transferred to CODIS", "Users' profiles are available for law-enforcement matching only if the users opt in", "Only STR profiles can be uploaded", "Law-enforcement uploads were banned in all circumstances"],
    answer: 1,
    explanation: "In 2019 GEDmatch made law-enforcement matching opt-in, so profiles are hidden from police searches unless users actively agree. The change responded to criticism that users had not consented to their data being used in criminal investigations. GEDmatch holds SNP-based genealogy data, not CODIS STR profiles."
  },
  {
    id: 20,
    question: "In phylogenetic analysis, an outgroup is included in order to:",
    options: ["Increase the bootstrap values of all clades", "Represent the direct ancestor of all the ingroup taxa", "Root the tree and so establish the direction of evolutionary change", "Measure the mutation rate along each branch"],
    answer: 2,
    explanation: "An outgroup is a taxon known to have diverged before the ingroup taxa split, so attaching it places the root of the tree. Rooting shows which character states are ancestral and which are derived. The outgroup is a relative, not the ancestor itself."
  },
  {
    id: 21,
    question: "Which tree-building method assumes a constant molecular clock and produces an ultrametric tree?",
    options: ["Neighbour-joining", "UPGMA", "Maximum parsimony", "Maximum likelihood"],
    answer: 1,
    explanation: "UPGMA (Unweighted Pair Group Method with Arithmetic mean) clusters the closest pairs on the assumption that all lineages evolve at the same rate. This places all tips at an equal distance from the root (ultrametric). Neighbour-joining does not need a molecular clock and so allows unequal branch lengths."
  },
  {
    id: 22,
    question: "A node in a phylogenetic tree carries a bootstrap value of 98. This means that:",
    options: ["The clade appeared in 98% of trees built from resampled datasets", "The taxa in the clade are 98% identical in sequence", "There is a 98% probability that the tree is correctly rooted", "The branch leading to the node represents 98 substitutions"],
    answer: 0,
    explanation: "Bootstrapping resamples alignment columns with replacement many times and rebuilds the tree each time. The bootstrap value is the percentage of replicates in which a clade appears, so 98 shows strong support. It measures how robust the result is, not sequence identity or branch length."
  },
  {
    id: 23,
    question: "How many distinct unrooted bifurcating trees are possible for five taxa?",
    options: ["3", "105", "945", "15"],
    answer: 3,
    explanation: "The number of unrooted trees for n taxa is (2n − 5)!!, which for n = 5 is 5 × 3 × 1 = 15. The number of rooted trees is (2n − 3)!! = 7 × 5 × 3 × 1 = 105. This rapid growth is why heuristic tree searches are needed for large datasets."
  },
  {
    id: 24,
    question: "The maximum parsimony method selects the phylogenetic tree that:",
    options: ["Has the highest likelihood under a specified substitution model", "Joins taxa in order of smallest pairwise distance", "Requires the fewest evolutionary changes to explain the observed data", "Has the highest posterior probability"],
    answer: 2,
    explanation: "Maximum parsimony is a character-based method that prefers the tree needing the minimum number of character-state changes. Maximum likelihood and Bayesian methods rely on explicit substitution models. Distance methods such as UPGMA and neighbour-joining work from a pairwise distance matrix."
  },
  {
    id: 25,
    question: "Forensic phylogenetics is best known for its use in:",
    options: ["Establishing the source and direction of HIV transmission in criminal cases", "Estimating time since death from bacterial succession", "Matching crime-scene STR profiles against convicted-offender profiles", "Estimating the sex of skeletal remains"],
    answer: 0,
    explanation: "Phylogenetic analysis of viral sequences from the victim, the accused and local controls can show whether the infections are closely linked. It was admitted as evidence in State v. Schmidt (Louisiana, 1998), where a physician was convicted of deliberately infecting his former partner with HIV. Such analysis shows that infections are related, which supports but does not by itself prove direct transmission."
  },
  {
    id: 26,
    question: "Two aligned DNA sequences differ at 10 of 100 sites (p = 0.10). Using the Jukes-Cantor correction d = −(3/4) ln(1 − 4p/3), the corrected evolutionary distance is approximately:",
    options: ["0.090", "0.107", "0.100", "0.143"],
    answer: 1,
    explanation: "1 − 4(0.10)/3 = 0.8667, and ln(0.8667) ≈ −0.143, so d = 0.75 × 0.143 ≈ 0.107. The corrected distance is larger than the observed p because some sites have mutated more than once. Forgetting the 3/4 factor gives the wrong value of 0.143."
  },
  {
    id: 27,
    question: "CODIS (Combined DNA Index System), the US forensic DNA database system, is administered by:",
    options: ["National Institute of Standards and Technology", "Department of Homeland Security", "Interpol", "Federal Bureau of Investigation"],
    answer: 3,
    explanation: "CODIS is run by the FBI; it began as a pilot in 1990, and the National DNA Index System was set up in 1998 under the DNA Identification Act of 1994. NIST supplies standards and resources such as STRBase but does not run CODIS. Interpol runs its own DNA Gateway."
  },
  {
    id: 28,
    question: "The three hierarchical levels at which DNA profiles are held and searched in CODIS are:",
    options: ["Local, regional and federal", "Arrestee, offender and forensic", "Local (LDIS), State (SDIS) and National (NDIS)", "City, county and national"],
    answer: 2,
    explanation: "Laboratories upload profiles at the Local DNA Index System (LDIS), and these flow to the State (SDIS) and National (NDIS) levels. Each level has its own rules on which profiles may be stored. Arrestee, offender and forensic are indices (categories of profile), not levels."
  },
  {
    id: 29,
    question: "With effect from 1 January 2017, the number of CODIS core STR loci was expanded to:",
    options: ["20", "13", "16", "24"],
    answer: 0,
    explanation: "The FBI added seven loci (D1S1656, D2S441, D2S1338, D10S1248, D12S391, D19S433 and D22S1045) to the original 13, giving 20 core loci. The expansion improved discrimination and compatibility with European databases. Amelogenin is typed alongside them but is not counted among the 20."
  },
  {
    id: 30,
    question: "A DNA profile developed from semen on a vaginal swab in an unsolved rape case would be uploaded to which CODIS index?",
    options: ["Convicted Offender Index", "Arrestee Index", "Unidentified Human Remains Index", "Forensic Index"],
    answer: 3,
    explanation: "The Forensic Index holds profiles from crime-scene evidence whose source is unknown. Searching it against the Offender and Arrestee indices produces offender hits, and searching it against other forensic profiles links cases. The Unidentified Human Remains Index is for identifying the dead."
  },
  {
    id: 31,
    question: "The world's first national DNA database, launched in April 1995, was:",
    options: ["CODIS of the USA", "The National DNA Database of the UK (England and Wales)", "The Interpol DNA Gateway", "The Dutch national DNA database"],
    answer: 1,
    explanation: "The UK National DNA Database (NDNAD), run with the Forensic Science Service, began in April 1995. It first used SGM and then SGM Plus profiles, and from 2014 DNA-17 profiles. CODIS NDIS became operational in 1998 and the Interpol DNA Gateway in 2002."
  },
  {
    id: 32,
    question: "In S and Marper v United Kingdom (2008), the European Court of Human Rights held that:",
    options: ["The UK must create a universal DNA database of all citizens", "Familial searching is prohibited throughout Europe", "Blanket, indefinite retention of DNA profiles and samples of persons not convicted violated the right to private life", "DNA evidence alone is insufficient for a criminal conviction"],
    answer: 2,
    explanation: "The Grand Chamber unanimously found that indefinitely retaining fingerprints, samples and profiles of people who were arrested but not convicted breached Article 8 of the ECHR. The UK responded with the Protection of Freedoms Act 2012, which limited retention for unconvicted persons. The case is a landmark on proportionality in DNA databanking."
  },
  {
    id: 33,
    question: "A distinctive feature of the Interpol DNA Gateway is that:",
    options: ["It stores names and photographs of suspects alongside their profiles", "Profiles are submitted without nominal (personal identifying) data and member countries retain ownership of them", "It accepts only Y-STR haplotypes", "Access is restricted to European Union member states"],
    answer: 1,
    explanation: "The Interpol DNA Gateway, set up in 2002, holds profiles in a standard format with no names or other personal identifiers attached. A match is reported to the countries involved, which then exchange information through their own channels. It is open to all Interpol member countries."
  },
  {
    id: 34,
    question: "STRBase, an online resource on STR markers, variant alleles, commercial kits and population data for forensic DNA typing, is maintained by:",
    options: ["NIST (USA)", "FBI Laboratory", "Yale University", "Charité University Medicine, Berlin"],
    answer: 0,
    explanation: "STRBase was launched in 1997 by John Butler and Dennis Reeder at the US National Institute of Standards and Technology. It catalogues STR loci, observed variant and off-ladder alleles, kit details and reference literature. Yale developed ALFRED and Charité hosts YHRD."
  },
  {
    id: 35,
    question: "ALFRED, the ALlele FREquency Database of polymorphisms in diverse human populations, was developed at:",
    options: ["NIST, Gaithersburg", "Innsbruck Medical University", "Yale University", "Lawrence Livermore National Laboratory"],
    answer: 2,
    explanation: "ALFRED was developed in Kenneth Kidd's laboratory at Yale University to compile allele frequencies for many markers across worldwide populations. It is useful for population genetics and ancestry-informative markers. EMPOP is based at Innsbruck."
  },
  {
    id: 36,
    question: "A laboratory obtains a male Y-STR haplotype from a mixed sexual-assault sample and needs its frequency in a reference population. The appropriate database is:",
    options: ["EMPOP", "ALFRED", "STRBase", "YHRD"],
    answer: 3,
    explanation: "YHRD (Y-Chromosome STR Haplotype Reference Database), curated from Charité Berlin, gives haplotype frequencies for Y-STR profiles across global populations. Y-STR haplotypes are inherited as a block, so frequencies are counted from the database rather than calculated with the product rule. EMPOP is the equivalent resource for mtDNA."
  },
  {
    id: 37,
    question: "EMPOP is a quality-controlled forensic population database of:",
    options: ["Autosomal STR genotypes", "Y-STR haplotypes", "X-STR haplotypes", "Mitochondrial DNA haplotypes"],
    answer: 3,
    explanation: "EMPOP (EDNAP Mitochondrial DNA Population Database), run from the Institute of Legal Medicine, Innsbruck, holds checked mtDNA control-region and mitogenome haplotypes. Its quality control screens out phantom mutations and errors before data are accepted. Laboratories use it to estimate how rare an mtDNA haplotype is."
  },
  {
    id: 38,
    question: "The Prüm framework of the European Union (Council Decision 2008/615/JHA) allows member states to:",
    options: ["Automatically search one another's national DNA, fingerprint and vehicle-registration databases on a hit/no-hit basis", "Store all their DNA profiles in a single central European database run by Europol", "Exchange the full medical records of convicted offenders", "Pool their population allele-frequency data into EMPOP"],
    answer: 0,
    explanation: "Under Prüm, each state keeps its own national database but gives other member states automated hit/no-hit access to it. Personal details are exchanged only after a match, through mutual legal assistance or police channels. The framework grew out of the Prüm Convention signed by seven states in 2005."
  },
  {
    id: 39,
    question: "A national database holds 5 million unrelated profiles. If a crime-stain profile has a random match probability of 1 in 10 billion, the expected number of adventitious (chance) matches when it is searched against the database is about:",
    options: ["0.05", "0.0005", "0.005", "5"],
    answer: 1,
    explanation: "Expected chance matches = database size × RMP = 5 × 10^6 × 10^-10 = 5 × 10^-4 = 0.0005. Expected adventitious hits grow in proportion to database size. This is why database hits are confirmed by re-analysing a fresh reference sample."
  },
  {
    id: 40,
    question: "The DNA Technology (Use and Application) Regulation Bill, 2019 proposed the establishment of:",
    options: ["A National Forensic Sciences University campus in every state", "A DNA Profiling Commission under the Ministry of Home Affairs", "A National DNA Data Bank, Regional DNA Data Banks and a DNA Regulatory Board", "A mandatory DNA database of all citizens linked to Aadhaar"],
    answer: 2,
    explanation: "The Bill provided for a National DNA Data Bank, Regional DNA Data Banks and a DNA Regulatory Board to accredit laboratories and oversee use of DNA data. The data banks were to hold indices such as crime scene, suspects or undertrials, offenders, missing persons and unknown deceased persons. It did not propose a database of the whole population."
  },
  {
    id: 41,
    question: "What finally happened to India's DNA Technology (Use and Application) Regulation Bill, 2019?",
    options: ["It was withdrawn from the Lok Sabha in 2023", "It was enacted as an Act in 2021", "It was struck down by the Supreme Court in 2020", "It was merged into the Bharatiya Sakshya Adhiniyam, 2023"],
    answer: 0,
    explanation: "The Bill was introduced in July 2019, examined by the Parliamentary Standing Committee on Science and Technology (report 2021), and withdrawn in July 2023. Privacy and data-protection concerns were central to the committee's scrutiny. India therefore still has no statute specifically governing forensic DNA databanking."
  },
  {
    id: 42,
    question: "Under the DNA Technology (Use and Application) Regulation Bill, 2019, the DNA Regulatory Board was to be chaired by the:",
    options: ["Director General, NCRB", "Union Home Secretary", "Director, CFSL Kolkata", "Secretary, Department of Biotechnology"],
    answer: 3,
    explanation: "The Bill made the Secretary of the Department of Biotechnology (Ministry of Science and Technology) the ex officio chairperson of the DNA Regulatory Board. The Board was to accredit DNA laboratories and advise on privacy safeguards. This reflects the scientific, rather than policing, focus intended for DNA regulation."
  },
  {
    id: 43,
    question: "Under the 2019 DNA Bill, written consent of an arrested person was NOT required for taking bodily substances if the offence was punishable with death or with imprisonment exceeding:",
    options: ["Three years", "Seven years", "Ten years", "Fourteen years"],
    answer: 1,
    explanation: "For offences punishable with imprisonment of up to seven years, written consent was required. For offences punishable with death or more than seven years, samples could be taken without consent. Where consent was refused, a magistrate could order sampling if satisfied it was necessary."
  },
  {
    id: 44,
    question: "STRmix, a probabilistic genotyping software widely used to interpret DNA mixtures, was developed by:",
    options: ["Cybergenetics, Pittsburgh", "NIST and the FBI jointly", "ESR (New Zealand) and Forensic Science SA (Australia)", "Promega Corporation"],
    answer: 2,
    explanation: "STRmix was developed by New Zealand's Institute of Environmental Science and Research (ESR) with Forensic Science South Australia. It uses Markov chain Monte Carlo methods to weigh possible genotype combinations and report a likelihood ratio. TrueAllele is the Cybergenetics product."
  },
  {
    id: 45,
    question: "TrueAllele Casework, a probabilistic genotyping system that has been tested in courts, is a product of:",
    options: ["ESR, New Zealand", "Cybergenetics, USA", "Thermo Fisher Scientific", "The Norwegian Institute of Public Health"],
    answer: 1,
    explanation: "TrueAllele was developed by Mark Perlin's company Cybergenetics, based in Pittsburgh. Like STRmix, it is a fully continuous model that infers contributor genotypes and expresses the result as a likelihood ratio. EuroForMix is a free, open-source alternative developed in Norway."
  },
  {
    id: 46,
    question: "Fully continuous probabilistic genotyping models such as STRmix and TrueAllele differ from semi-continuous models mainly because they:",
    options: ["Use peak height information when calculating likelihoods", "Ignore the possibility of allele drop-out", "Consider only the presence or absence of alleles", "Can be applied only to single-source profiles"],
    answer: 0,
    explanation: "Continuous models use peak heights (with models for stutter, degradation and mixture proportion) to weight genotype combinations. Semi-continuous (discrete) models such as LRmix use only allele presence or absence, with drop-out and drop-in probabilities. Both types allow drop-out and are designed for mixtures."
  },
  {
    id: 47,
    question: "A single-source crime-stain profile matches the suspect, and the profile's frequency in the relevant population is 1 in 2 × 10^9. If the probability of the evidence under the prosecution hypothesis is 1, the likelihood ratio is:",
    options: ["5 × 10^-10", "1 × 10^9", "4 × 10^18", "2 × 10^9"],
    answer: 3,
    explanation: "LR = P(E|Hp) ÷ P(E|Hd) = 1 ÷ (1/(2 × 10^9)) = 2 × 10^9. For a simple single-source match the LR is the reciprocal of the random match probability. The value 5 × 10^-10 is the RMP itself, not the LR."
  },
  {
    id: 48,
    question: "Investigative genetic genealogy (IGG), which identified the Golden State Killer in 2018, relied mainly on:",
    options: ["Dense genome-wide SNP data uploaded to a public genealogy database", "CODIS core STR profiles searched in NDIS", "Mitochondrial DNA control-region sequences in EMPOP", "Y-STR haplotypes in YHRD"],
    answer: 0,
    explanation: "Investigators generated a profile of hundreds of thousands of SNPs from crime-scene DNA, uploaded it to GEDmatch, found distant relatives and built family trees, which led to Joseph James DeAngelo. Shared DNA segments can reveal cousins several generations apart, which STR databases cannot do. A suspect identified this way is then confirmed by conventional STR comparison."
  },
  {
    id: 49,
    question: "In an IGG search, the unknown sample shares about 3,450 centimorgans of DNA with a database user, half-identical along the entire length of every autosome. The most likely relationship is:",
    options: ["First cousins", "Half-siblings", "Parent and child", "Second cousins"],
    answer: 2,
    explanation: "A parent and child share one complete copy of each autosome, about 3,400–3,700 cM, always as half-identical segments. Half-siblings share about 1,700 cM, first cousins about 850 cM and second cousins about 230 cM. Full siblings share about 2,600 cM on average and, unlike parent and child, also have fully identical segments."
  },
  {
    id: 50,
    question: "Which judgment of the Supreme Court of India recognised privacy as a fundamental right, a key reference point in debates on DNA databanking?",
    options: ["Selvi v State of Karnataka (2010)", "Justice K.S. Puttaswamy (Retd.) v Union of India (2017)", "Maneka Gandhi v Union of India (1978)", "Kharak Singh v State of Uttar Pradesh (1962)"],
    answer: 1,
    explanation: "A nine-judge bench in Puttaswamy (2017) held privacy to be a fundamental right under Article 21, with state intrusion required to meet tests of legality, necessity and proportionality. These tests apply to collecting and retaining DNA profiles. Selvi (2010) dealt with compulsory narco-analysis, polygraph and brain-mapping tests."
  }
];

export default questions;
