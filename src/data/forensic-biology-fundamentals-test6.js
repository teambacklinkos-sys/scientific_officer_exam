const questions = [
  {
    id: 1,
    question: "The primary constriction of a metaphase chromosome, where sister chromatids are held together and the kinetochore assembles for spindle attachment, is the",
    options: ["Telomere", "Secondary constriction", "Satellite", "Centromere"],
    answer: 3,
    explanation: "The centromere contains repetitive alpha-satellite DNA in humans and is the site where kinetochore proteins bind spindle microtubules. Its position divides the chromosome into short (p) and long (q) arms. Telomeres are at the ends, and secondary constrictions are often nucleolar organiser regions."
  },
  {
    id: 2,
    question: "Human telomeres consist of many tandem copies of which repeat sequence, maintained in germ cells by the enzyme telomerase?",
    options: ["GATA", "CAG", "TTTTAAA", "TTAGGG"],
    answer: 3,
    explanation: "Telomeres are thousands of TTAGGG repeats that cap chromosome ends and protect them from degradation and fusion. Ordinary DNA polymerase cannot fully replicate the ends, so telomeres shorten with each division in somatic cells. Telomerase, a reverse transcriptase with its own RNA template, adds repeats in germ and stem cells."
  },
  {
    id: 3,
    question: "Which group of human chromosomes is acrocentric and carries satellites and nucleolar organiser regions (rRNA genes) on the short arms?",
    options: ["Chromosomes 1, 2 and 3", "Chromosomes 16, 17 and 18", "Chromosomes 13, 14, 15, 21 and 22", "Chromosomes 19, 20 and X"],
    answer: 2,
    explanation: "The D group (13–15) and G group (21, 22) chromosomes are acrocentric, with very short p arms ending in satellites joined by stalks that contain rRNA genes. Their p arms are similar, which allows Robertsonian translocations between them. Chromosomes 1 and 3 are metacentric."
  },
  {
    id: 4,
    question: "In G-banding, chromosomes are treated with trypsin and stained with Giemsa. The dark G-bands generally represent regions that are",
    options: ["GC-rich, gene-rich and early-replicating", "Made only of centromeric heterochromatin", "AT-rich, gene-poor and late-replicating", "Telomeric repeats"],
    answer: 2,
    explanation: "Dark G-bands are AT-rich, relatively poor in genes and replicate late in S phase. Light bands are GC-rich and gene-dense. R-banding gives the reverse pattern, and C-banding specifically stains constitutive heterochromatin near centromeres."
  },
  {
    id: 5,
    question: "In cytogenetic notation, the band '17q21' refers to",
    options: ["Long arm of chromosome 17, region 2, band 1", "Short arm of chromosome 17, region 2, band 1", "Chromosome 21, at band 17 of the long arm", "Long arm of chromosome 17, band 21 of region 1"],
    answer: 0,
    explanation: "Under ISCN rules the chromosome number comes first, then the arm (p short, q long), then region and band, read outward from the centromere. So 17q21 is chromosome 17, long arm, region 2, band 1, and it is read 'seventeen q two one'. The BRCA1 gene lies in this region."
  },
  {
    id: 6,
    question: "Colchicine is added to cell cultures before preparing a karyotype in order to",
    options: ["Stimulate lymphocytes to divide", "Swell the cells to spread chromosomes", "Fix the chromosomes on the slide", "Arrest dividing cells at metaphase"],
    answer: 3,
    explanation: "Colchicine (or its analogue colcemid) binds tubulin and prevents spindle microtubules from forming, so cells accumulate at metaphase, when chromosomes are most condensed. Lymphocytes are stimulated by phytohaemagglutinin, cells are swollen with hypotonic KCl and fixed in methanol–acetic acid. Each step is needed for a good spread."
  },
  {
    id: 7,
    question: "For routine karyotyping from peripheral blood, T-lymphocytes are stimulated to divide in culture by adding",
    options: ["Colchicine", "Trypsin", "Proteinase K", "Phytohaemagglutinin (PHA)"],
    answer: 3,
    explanation: "Circulating lymphocytes are normally resting in G0. PHA, a plant lectin, is a mitogen that drives them into the cell cycle, and the cultures are harvested after about 72 hours. Colchicine is added only near the end to collect metaphases."
  },
  {
    id: 8,
    question: "In the Denver classification of human chromosomes, group G comprises",
    options: ["Chromosomes 19 and 20", "Chromosomes 13, 14 and 15", "Chromosomes 21, 22 and Y", "Chromosomes 6–12 and X"],
    answer: 2,
    explanation: "Chromosomes are arranged in seven groups, A to G, by size and centromere position. Group G contains the smallest acrocentric chromosomes, 21 and 22, and the Y chromosome. Group F is 19–20, group D is 13–15 and group C is 6–12 with X."
  },
  {
    id: 9,
    question: "A karyotype is written as 47,XY,+21. This indicates",
    options: ["A female with 47 chromosomes and an extra X", "A male with a deletion of chromosome 21", "A male with 47 chromosomes and an extra chromosome 21", "A male with a translocation between chromosomes 21 and Y"],
    answer: 2,
    explanation: "The notation gives total chromosome number, then sex chromosomes, then any abnormality; '+21' means trisomy 21. This is the commonest karyotype in Down syndrome. A deletion would be written with 'del' and a translocation with 't'."
  },
  {
    id: 10,
    question: "The commonest mechanism producing aneuploidy such as trisomy or monosomy is",
    options: ["Crossing over at pachytene", "Point mutation in a single gene", "Lengthening of telomeres", "Meiotic non-disjunction"],
    answer: 3,
    explanation: "If homologous chromosomes fail to separate in meiosis I, or sister chromatids fail in meiosis II, gametes receive an extra or missing chromosome. Fertilisation then gives a trisomic or monosomic zygote. The risk of maternal meiotic non-disjunction rises with maternal age."
  },
  {
    id: 11,
    question: "A triploid human foetus, as may be found in some cases of partial hydatidiform mole, has how many chromosomes in each cell?",
    options: ["47", "69", "92", "45"],
    answer: 1,
    explanation: "Triploidy means three complete sets: 3 × 23 = 69 chromosomes. It usually results from two sperm fertilising one egg (dispermy) or from a diploid gamete. Tetraploidy would give 92, while 47 and 45 are aneuploid counts."
  },
  {
    id: 12,
    question: "Which of the following is a polyploid rather than an aneuploid condition?",
    options: ["Trisomy (2n + 1)", "Monosomy (2n − 1)", "Tetraploidy (4n)", "Nullisomy (2n − 2)"],
    answer: 2,
    explanation: "Polyploidy is a change in the number of complete chromosome sets, such as 3n or 4n. Aneuploidy is the gain or loss of individual chromosomes, as in trisomy, monosomy and nullisomy. Polyploidy is common in plants but is almost always lethal in humans."
  },
  {
    id: 13,
    question: "A newborn with a karyotype of 47,XX,+18 would be expected to have",
    options: ["Edwards syndrome", "Patau syndrome", "Down syndrome", "Turner syndrome"],
    answer: 0,
    explanation: "Trisomy 18 causes Edwards syndrome, with severe growth delay and heart defects, and most affected infants die within the first year. Trisomy 13 causes Patau syndrome and trisomy 21 causes Down syndrome. Turner syndrome is monosomy X (45,X)."
  },
  {
    id: 14,
    question: "Loss of part of the short arm of chromosome 5, written 46,XX,del(5p), is an example of which structural chromosomal change?",
    options: ["Duplication", "Inversion", "Deletion", "Reciprocal translocation"],
    answer: 2,
    explanation: "A deletion is loss of a chromosome segment, here from 5p, which causes cri-du-chat syndrome. A duplication repeats a segment, an inversion reverses one, and a translocation moves segments between chromosomes. Deletions reduce gene dosage and are often harmful even when small."
  },
  {
    id: 15,
    question: "The Philadelphia chromosome, found in most cases of chronic myeloid leukaemia, results from",
    options: ["A deletion of chromosome 13", "A Robertsonian translocation of chromosomes 14 and 21", "Trisomy of chromosome 8", "A reciprocal translocation between chromosomes 9 and 22, t(9;22)"],
    answer: 3,
    explanation: "The exchange between 9q34 and 22q11 creates a shortened chromosome 22 and the BCR-ABL1 fusion gene. Its product is a constantly active tyrosine kinase that drives the leukaemia. Imatinib was designed to block this kinase."
  },
  {
    id: 16,
    question: "A Robertsonian translocation is a fusion of",
    options: ["Two acrocentric chromosomes at their centromeres", "The short arms of two metacentric chromosomes", "A chromosome with itself to form a ring", "Two X chromosomes joined end to end"],
    answer: 0,
    explanation: "In a Robertsonian translocation, two acrocentric chromosomes (such as 14 and 21) join, and their tiny short arms are lost. A carrier is usually healthy with 45 chromosomes but is at risk of unbalanced offspring, such as translocation Down syndrome. Ring chromosomes form when both ends of a chromosome are lost and the ends join."
  },
  {
    id: 17,
    question: "An inversion in which the inverted segment includes the centromere is called a",
    options: ["Paracentric inversion", "Pericentric inversion", "Isochromosome", "Reciprocal translocation"],
    answer: 1,
    explanation: "A pericentric inversion has breaks on both arms, so it can change the position of the centromere and the banding pattern. In a paracentric inversion both breaks lie on the same arm and the centromere is outside the inverted segment. Inversions do not change the amount of DNA but can cause unbalanced gametes after crossing over."
  },
  {
    id: 18,
    question: "Duplication of a chromosome segment can arise when homologous chromosomes misalign and exchange unequal lengths of DNA. This process is called",
    options: ["Non-disjunction", "Reverse transcription", "Unequal crossing over", "Telomere capping"],
    answer: 2,
    explanation: "If repeated sequences pair out of register during meiosis, crossing over gives one chromatid with a duplication and the other with a deletion. Unequal crossing over explains changes in gene copy number such as those in the red–green colour vision genes. Non-disjunction changes whole chromosome numbers instead."
  },
  {
    id: 19,
    question: "Before DNA profiling, conventional genetic markers in forensic serology included blood groups and polymorphic red cell enzymes. Their main limitation compared with STR profiling is that they",
    options: ["Have too few common types to individualise", "Are not inherited in a Mendelian way", "Cannot be detected in blood at all", "Change throughout a person's lifetime"],
    answer: 0,
    explanation: "Systems such as ABO, PGM and EAP have only a few common types, so many people share each type and the combined power of discrimination is limited. They also degrade quickly in dried stains. STR multiplexes give random match probabilities often smaller than one in a billion."
  },
  {
    id: 20,
    question: "By starch gel electrophoresis, phosphoglucomutase (PGM1) shows three common phenotypes. When typed by isoelectric focusing, the number of common phenotypes increases to ten because",
    options: ["Isoelectric focusing detects the Y chromosome", "Each classical allele splits into two sub-alleles", "PGM becomes denatured during focusing", "Focusing separates by molecular weight only"],
    answer: 1,
    explanation: "Classical PGM1 alleles 1 and 2 give phenotypes 1, 2-1 and 2. Isoelectric focusing separates each allele into + and − forms (1+, 1−, 2+, 2−), and four alleles give 4 × 5 ÷ 2 = 10 genotypes. This greatly increased the discriminating power of PGM in stain analysis."
  },
  {
    id: 21,
    question: "Erythrocyte acid phosphatase (EAP, ACP1) has three common codominant alleles, A, B and C. How many genotypes (phenotypes) are possible with these alleles?",
    options: ["3", "9", "4", "6"],
    answer: 3,
    explanation: "For n codominant alleles, the number of genotypes is n(n + 1) ÷ 2. With 3 alleles, 3 × 4 ÷ 2 = 6 (AA, BB, CC, BA, CA, CB). Because the alleles are codominant, each genotype gives a distinct electrophoretic phenotype."
  },
  {
    id: 22,
    question: "In a population in Hardy–Weinberg equilibrium, the frequencies of two codominant alleles of an enzyme marker are 0.6 and 0.4. The expected frequency of heterozygotes is",
    options: ["0.24", "0.36", "0.16", "0.48"],
    answer: 3,
    explanation: "Heterozygote frequency = 2pq = 2 × 0.6 × 0.4 = 0.48. The homozygote frequencies are p² = 0.36 and q² = 0.16, and all three add up to 1. Forgetting the factor 2 gives the wrong answer 0.24."
  },
  {
    id: 23,
    question: "In RFLP-based DNA profiling, the separated DNA fragments are transferred from the gel to a nylon membrane and detected with a labelled probe. This transfer technique is called",
    options: ["Northern blotting", "Southern blotting", "Western blotting", "Eastern blotting"],
    answer: 1,
    explanation: "Edwin Southern described DNA transfer to membranes in 1975. Northern blotting transfers RNA and Western blotting transfers proteins. RFLP–Southern blotting needed relatively large amounts of good-quality DNA and took weeks, which is why PCR-based STR methods replaced it."
  },
  {
    id: 24,
    question: "In RFLP typing of VNTR loci, as practised by the FBI in the early 1990s, genomic DNA was first cut with the restriction enzyme",
    options: ["Taq polymerase", "DNA ligase", "Reverse transcriptase", "HaeIII"],
    answer: 3,
    explanation: "HaeIII recognises the four-base sequence GGCC and cuts frequently, leaving the VNTR region within fragments whose length depends on the number of repeats. Fragment lengths were then compared between samples. Taq polymerase, ligase and reverse transcriptase are not restriction enzymes."
  },
  {
    id: 25,
    question: "Which statement correctly distinguishes VNTRs (minisatellites) from STRs (microsatellites)?",
    options: ["VNTRs have repeat units of 2–6 bp, while STRs have repeat units of 10–100 bp", "VNTRs have repeat units of about 10–100 bp, while STRs have repeat units of 2–6 bp", "Both have identical repeat sizes but VNTRs are found only in mtDNA", "STRs are protein markers and VNTRs are RNA markers"],
    answer: 1,
    explanation: "Minisatellite (VNTR) loci have longer repeat units and alleles several kilobases long, so they need RFLP analysis. STR loci have short repeat units and alleles of about 100–500 bp, ideal for multiplex PCR. Forensic STR kits mostly use tetranucleotide repeats because they give less stutter."
  },
  {
    id: 26,
    question: "In an STR profile from a bloodstain, the amelogenin locus shows only a 106 bp peak and no 112 bp peak. The usual interpretation is that the sample came from",
    options: ["A female (or rarely an AMELY-deleted male)", "A normal male with X and Y", "A mixture from two different males", "An animal source such as a dog"],
    answer: 0,
    explanation: "In common kits the X-chromosome amelogenin gene (AMELX) gives a 106 bp product and the Y-gene (AMELY) a 112 bp product, because of a 6 bp deletion in AMELX. One peak at 106 bp normally indicates a female. Rare males have Y-chromosome deletions that remove AMELY, which Y-STR testing can reveal."
  },
  {
    id: 27,
    question: "Compared with STRs, single nucleotide polymorphisms (SNPs) are particularly useful for highly degraded DNA because",
    options: ["Each SNP has dozens of alleles", "They are found only in mitochondrial DNA", "They need only very short amplicons", "They need no PCR amplification at all"],
    answer: 2,
    explanation: "A SNP is a single base difference, so the PCR product can be very short and still survive in fragmented DNA. Most SNPs are biallelic, so many more loci (often 50 or more) are needed to match the discriminating power of a standard STR panel. SNPs are also used for ancestry and physical trait prediction."
  },
  {
    id: 28,
    question: "A DNA profile has genotype frequencies of 0.1, 0.05 and 0.2 at three independent loci. Using the product rule, the random match probability for the three-locus profile is",
    options: ["1 in 35", "1 in 1000", "1 in 100", "1 in 10,000"],
    answer: 1,
    explanation: "For independent loci, the frequencies are multiplied: 0.1 × 0.05 × 0.2 = 0.001, which is 1 in 1000. Adding them (0.35) would be wrong. With 20 or more loci, the product becomes extremely small."
  },
  {
    id: 29,
    question: "DNA fingerprinting was developed in India in 1988, and the scientist regarded as the father of DNA fingerprinting in India worked at",
    options: ["BARC, Mumbai", "CCMB, Hyderabad", "NCL, Pune", "IISc, Bengaluru"],
    answer: 1,
    explanation: "Dr Lalji Singh and colleagues at CCMB developed a DNA fingerprinting probe based on Bkm-derived sequences and applied it to forensic and paternity cases. This led to the setting up of the Centre for DNA Fingerprinting and Diagnostics (CDFD), Hyderabad."
  },
  {
    id: 30,
    question: "The human mitochondrial genome, as given by the revised Cambridge Reference Sequence, is a circular molecule of",
    options: ["16,569 base pairs", "3.2 billion base pairs", "1,122 base pairs", "48,502 base pairs"],
    answer: 0,
    explanation: "Anderson and colleagues sequenced human mtDNA in 1981 (the Cambridge Reference Sequence), and Andrews revised it in 1999. The 16,569 bp molecule is tiny compared with the 3.2 billion bp nuclear genome. 48,502 bp is the genome of bacteriophage lambda."
  },
  {
    id: 31,
    question: "The human mitochondrial genome contains 37 genes. These code for",
    options: ["37 polypeptides only", "2 polypeptides, 13 tRNAs and 22 rRNAs", "13 polypeptides, 22 tRNAs and 2 rRNAs", "22 polypeptides, 13 tRNAs and 2 rRNAs"],
    answer: 2,
    explanation: "All 13 mtDNA-encoded proteins are subunits of the oxidative phosphorylation complexes. The 22 tRNAs and 2 rRNAs are used to translate them inside the mitochondrion. Most mitochondrial proteins are encoded by nuclear genes and imported."
  },
  {
    id: 32,
    question: "Forensic mtDNA sequencing traditionally targets the hypervariable regions HV1 and HV2, which lie in the",
    options: ["Cytochrome oxidase I gene", "16S rRNA gene", "Non-coding control region (D-loop)", "ATP synthase gene"],
    answer: 2,
    explanation: "The control region of about 1.1 kb contains the origin of heavy-strand replication and promoters but codes for no protein, so it accumulates variation fastest. HV1 (about 16024–16365) and HV2 (about 73–340) are the most variable parts. Coding genes such as cytochrome b and COI are used for species identification instead."
  },
  {
    id: 33,
    question: "The skeletal remains of a man missing for 20 years are to be identified by mtDNA analysis. Which living relative can provide a suitable reference sample?",
    options: ["His mother's sister's son", "His father's brother", "His own son", "His father's sister's daughter"],
    answer: 0,
    explanation: "mtDNA passes only from mother to children without recombination. The son of his mother's sister shares the same maternal line (through the man's maternal grandmother), so he carries the same mtDNA. The man's father's relatives and his own son do not share his mtDNA."
  },
  {
    id: 34,
    question: "The presence of more than one mtDNA sequence within the same individual, for example at one position in a hair, is called",
    options: ["Heteroplasmy", "Homoplasmy", "Heterozygosity", "Polyploidy"],
    answer: 0,
    explanation: "Because each cell carries hundreds to thousands of mtDNA copies, a new mutation can coexist with the original sequence. Heteroplasmy may differ between tissues and even between hairs of the same person. Interpretation guidelines prevent a single heteroplasmic difference from being treated as an exclusion."
  },
  {
    id: 35,
    question: "The ATP synthase complex that makes ATP by oxidative phosphorylation is located in the",
    options: ["Outer mitochondrial membrane", "Mitochondrial matrix as a free enzyme", "Intermembrane space only", "Inner mitochondrial membrane"],
    answer: 3,
    explanation: "The electron transport chain pumps protons into the intermembrane space, and the protons flow back through ATP synthase in the inner membrane, driving ATP production. Folding into cristae increases the surface area of the inner membrane. The outer membrane is freely permeable to small molecules through porins."
  },
  {
    id: 36,
    question: "mtDNA analysis is often successful on old bones and on hair shafts without roots, where nuclear DNA typing fails, mainly because",
    options: ["Each cell contains hundreds to thousands of copies of mtDNA", "mtDNA is linear and longer than nuclear DNA", "mtDNA does not need PCR", "mtDNA is identical in all humans"],
    answer: 0,
    explanation: "The high copy number means some intact mtDNA usually survives even when nuclear DNA is too degraded. The circular molecule in its protected organelle also resists degradation. Its drawback is lower discriminating power, because all maternal relatives share the same sequence."
  },
  {
    id: 37,
    question: "An enzyme follows Michaelis–Menten kinetics. If the substrate concentration is four times the Km, the reaction velocity will be what fraction of Vmax?",
    options: ["0.25 Vmax", "0.8 Vmax", "0.5 Vmax", "4 Vmax"],
    answer: 1,
    explanation: "v = Vmax[S] ÷ (Km + [S]) = Vmax × 4Km ÷ (Km + 4Km) = 4/5 Vmax = 0.8 Vmax. When [S] = Km, v = 0.5 Vmax, which is the definition of Km. Velocity can never exceed Vmax."
  },
  {
    id: 38,
    question: "In competitive enzyme inhibition, compared with the uninhibited reaction,",
    options: ["Km stays the same and Vmax decreases", "Km increases and Vmax stays the same", "Both Km and Vmax decrease", "Km decreases and Vmax increases"],
    answer: 1,
    explanation: "A competitive inhibitor resembles the substrate and competes for the active site, so more substrate is needed to reach half Vmax (apparent Km rises). At very high substrate concentrations the inhibitor is outcompeted, so Vmax is unchanged. Non-competitive inhibition lowers Vmax without changing Km."
  },
  {
    id: 39,
    question: "Acid phosphatase, used for presumptive identification of semen, belongs to which class of enzymes in the IUBMB (EC) classification?",
    options: ["Oxidoreductases (EC 1)", "Transferases (EC 2)", "Ligases (EC 6)", "Hydrolases (EC 3)"],
    answer: 3,
    explanation: "Acid phosphatase (EC 3.1.3.2) hydrolyses phosphate monoesters, using water to break the bond. Other hydrolases include proteases, lipases, amylase and restriction endonucleases. Oxidoreductases catalyse redox reactions, and ligases join molecules using ATP."
  },
  {
    id: 40,
    question: "Phosphoglucomutase (PGM), a classical forensic isoenzyme marker, converts glucose-1-phosphate to glucose-6-phosphate. In the EC classification it is placed among the",
    options: ["Isomerases (EC 5)", "Hydrolases (EC 3)", "Lyases (EC 4)", "Ligases (EC 6)"],
    answer: 0,
    explanation: "PGM (EC 5.4.2.2) moves a phosphate group from one position to another within the same molecule, so it is an intramolecular transferase (mutase) under the isomerases. It does not use water to split a bond, so it is not a hydrolase. It was widely typed in bloodstains and semen before DNA methods."
  },
  {
    id: 41,
    question: "Adenylate kinase (AK), another red cell enzyme marker used in forensic serology, catalyses the reaction ATP + AMP ⇌ 2 ADP. It belongs to the",
    options: ["Hydrolases", "Transferases", "Isomerases", "Oxidoreductases"],
    answer: 1,
    explanation: "Adenylate kinase transfers a phosphate group from ATP to AMP, so it is a phosphotransferase (EC 2.7.4.3). Kinases in general are transferases. The AK1 polymorphism shows common phenotypes AK 1 and AK 2-1, with AK 2 being rare."
  },
  {
    id: 42,
    question: "Isoenzymes (isozymes) are best defined as",
    options: ["Enzymes that catalyse different reactions on the same substrate", "Forms of an enzyme that catalyse the same reaction but differ in structure", "Inactive precursors of enzymes (zymogens)", "Enzymes made only of RNA (ribozymes)"],
    answer: 1,
    explanation: "Isoenzymes arise from different genes or alleles, or from different combinations of subunits. Their differences in amino acid sequence and charge allow separation by electrophoresis, which is how PGM, EAP and AK were typed. Lactate dehydrogenase, with five tetrameric isoenzymes, is a classic example."
  },
  {
    id: 43,
    question: "In a Lineweaver–Burk (double reciprocal) plot of 1/v against 1/[S], the intercept on the y-axis equals",
    options: ["1/Vmax", "−1/Km", "Km/Vmax", "Vmax/Km"],
    answer: 0,
    explanation: "The equation 1/v = (Km/Vmax)(1/[S]) + 1/Vmax is a straight line with slope Km/Vmax and y-intercept 1/Vmax. The x-intercept is −1/Km. The plot makes it easy to tell competitive from non-competitive inhibition by which intercept changes."
  },
  {
    id: 44,
    question: "A double-stranded DNA sample contains 20% adenine. According to Chargaff's rules, what is its guanine content?",
    options: ["30%", "20%", "40%", "60%"],
    answer: 0,
    explanation: "In double-stranded DNA, A = T and G = C. If A = 20%, then T = 20%, so G + C = 60% and G = 30%. These rules do not apply to single-stranded DNA or RNA."
  },
  {
    id: 45,
    question: "In the B-form of DNA described by Watson and Crick, the double helix is",
    options: ["Left-handed, about 12 bp per turn, pitch 4.5 nm", "Right-handed, 3.6 residues per turn, pitch 0.54 nm", "Right-handed, about 10 bp per turn, pitch 3.4 nm", "Triple-stranded, 10 bp per turn, pitch 3.4 nm"],
    answer: 2,
    explanation: "B-DNA is right-handed with a diameter of about 2 nm, a rise of 0.34 nm per base pair and about 10 (10.5 in solution) base pairs per turn. Z-DNA is left-handed with about 12 bp per turn. B-DNA is the main form in cells and in hydrated samples."
  },
  {
    id: 46,
    question: "How many hydrogen bonds hold together a 10 bp double-stranded DNA segment that contains 4 G–C pairs and 6 A–T pairs?",
    options: ["20", "24", "30", "26"],
    answer: 1,
    explanation: "Each G–C pair has three hydrogen bonds and each A–T pair has two. So 4 × 3 + 6 × 2 = 12 + 12 = 24. GC-rich DNA therefore has a higher melting temperature, which matters in designing PCR primers."
  },
  {
    id: 47,
    question: "RNA is far less stable than DNA in biological stains, mainly because",
    options: ["RNA contains thymine instead of uracil", "RNA is always double-stranded", "RNA has no phosphate groups", "The 2′-OH of ribose favours backbone hydrolysis"],
    answer: 3,
    explanation: "The 2′-OH can attack the neighbouring phosphodiester bond, especially in alkaline conditions, so RNA breaks easily. RNases are present on skin and in the environment and are hard to inactivate. Despite this, some mRNA markers survive long enough in dried stains for body-fluid identification."
  },
  {
    id: 48,
    question: "Agarose gel electrophoresis of DNA from cells undergoing apoptosis typically shows a 'ladder' of fragments in multiples of about 180–200 bp. This is because",
    options: ["DNA is broken randomly into fragments of every size", "Telomeres are lost one by one", "Nucleases cut DNA between nucleosomes", "Mitochondrial DNA is released into the nucleus"],
    answer: 2,
    explanation: "In apoptosis, a caspase-activated nuclease cuts DNA between nucleosomes, and each nucleosome with its linker protects about 180–200 bp. This gives a regular ladder. Necrosis and post-mortem degradation produce random fragments that appear as a smear."
  },
  {
    id: 49,
    question: "Which feature distinguishes necrosis from apoptosis?",
    options: ["Necrosis involves cell shrinkage and formation of apoptotic bodies", "Necrosis involves cell swelling, membrane rupture and inflammation", "Necrosis is an energy-dependent, programmed process", "Necrosis never affects groups of cells"],
    answer: 1,
    explanation: "Necrotic cells swell, their membranes burst and their contents provoke inflammation, usually affecting many cells together. Apoptosis is programmed, needs energy and shrinks single cells into membrane-bound apoptotic bodies that are removed without inflammation. Recognising these patterns helps pathologists judge whether injury occurred before death."
  },
  {
    id: 50,
    question: "DNA extracted from a body that has been lying in a warm, humid place for weeks gives only partial STR profiles, with the larger loci missing. Which approach is most likely to recover more information?",
    options: ["Using mini-STR kits with shorter amplicons", "Increasing the size of the PCR products", "Using RFLP analysis", "Storing the extract at room temperature for longer"],
    answer: 0,
    explanation: "Post-mortem nucleases, microbes, hydrolysis (depurination) and oxidation break DNA into short fragments, so loci with long amplicons fail first, giving a 'ski-slope' profile. Mini-STRs move primers closer to the repeat to make short products. RFLP needs long, intact DNA and would perform even worse."
  }
];

export default questions;
