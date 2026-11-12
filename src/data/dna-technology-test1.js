const questions = [
  {
    id: 1,
    question: "A phenotypic male with small firm testes, gynaecomastia, tall stature and infertility shows one Barr body in buccal mucosal cells. The most likely karyotype is",
    options: ["45,X", "47,XXY", "47,XYY", "46,XY"],
    answer: 1,
    explanation: "Klinefelter syndrome (47,XXY) is the commonest cause of male hypogonadism; the extra X is inactivated and seen as one Barr body. Number of Barr bodies = number of X chromosomes minus one. A 47,XYY male has no Barr body and is usually fertile."
  },
  {
    id: 2,
    question: "Short stature, webbed neck, widely spaced nipples, streak ovaries and coarctation of the aorta in a girl with no Barr body suggest",
    options: ["Klinefelter syndrome", "Triple X syndrome", "Down syndrome", "Turner syndrome"],
    answer: 3,
    explanation: "Turner syndrome (45,X) is the only viable monosomy in humans. With a single X there is no inactive X, so buccal smears are Barr-body negative. Streak gonads cause primary amenorrhoea, and coarctation of the aorta is the classic cardiac lesion."
  },
  {
    id: 3,
    question: "Rocker-bottom feet, clenched fists with overlapping index and fifth fingers, micrognathia and a prominent occiput in a newborn are characteristic of",
    options: ["Edwards syndrome", "Patau syndrome", "Cri-du-chat syndrome", "Down syndrome"],
    answer: 0,
    explanation: "Edwards syndrome is trisomy 18, the second most common autosomal trisomy at birth. Clenched hands with overlapping fingers and rocker-bottom feet are its hallmark. Most affected infants die within the first year."
  },
  {
    id: 4,
    question: "Holoprosencephaly, cleft lip and palate, microphthalmia and postaxial polydactyly together point to trisomy of which chromosome?",
    options: ["Chromosome 18", "Chromosome 21", "Chromosome 13", "Chromosome 5"],
    answer: 2,
    explanation: "Patau syndrome is trisomy 13. It is marked by midline defects such as holoprosencephaly and cleft lip/palate, plus polydactyly and eye defects. Chromosome 5 is associated with cri-du-chat, but that is a deletion (5p−), not a trisomy."
  },
  {
    id: 5,
    question: "About 95% of cases of Down syndrome arise from",
    options: ["Robertsonian translocation between chromosomes 14 and 21", "Free trisomy 21 due to meiotic non-disjunction, mostly maternal", "Post-zygotic mitotic non-disjunction causing mosaicism", "Deletion of the short arm of chromosome 21"],
    answer: 1,
    explanation: "Free trisomy 21 (47,XX/XY,+21) accounts for about 95% of cases and usually results from non-disjunction in maternal meiosis I, with risk rising with maternal age. Robertsonian translocation causes about 4% and mosaicism about 1%."
  },
  {
    id: 6,
    question: "The phenotypically normal mother of a child with Down syndrome has only 45 chromosomes. The most likely explanation is that she is",
    options: ["A mosaic for trisomy 21", "A carrier of a reciprocal translocation between chromosomes 9 and 22", "Monosomic for chromosome 21", "A balanced carrier of a Robertsonian translocation such as t(14;21)"],
    answer: 3,
    explanation: "In a balanced Robertsonian carrier the long arms of two acrocentric chromosomes (e.g. 14 and 21) are fused, giving 45 chromosomes with no net loss of genetic material. Such carriers can produce unbalanced gametes, so translocation Down syndrome can recur in a family, unlike free trisomy."
  },
  {
    id: 7,
    question: "In sickle cell anaemia, the β-globin chain carries which amino acid substitution at position 6?",
    options: ["Glutamic acid replaced by valine", "Glutamic acid replaced by lysine", "Valine replaced by glutamic acid", "Lysine replaced by glutamic acid"],
    answer: 0,
    explanation: "A single base change (GAG → GTG) in codon 6 of the HBB gene on chromosome 11 replaces glutamic acid with valine, producing HbS that polymerises when deoxygenated. Glutamic acid to lysine at the same position gives HbC, a different haemoglobinopathy."
  },
  {
    id: 8,
    question: "On haemoglobin electrophoresis or HPLC, an HbA2 level above 3.5% with microcytosis and a normal iron profile is typical of",
    options: ["Sickle cell trait", "Iron-deficiency anaemia", "β-thalassaemia trait", "α-thalassaemia silent carrier"],
    answer: 2,
    explanation: "In β-thalassaemia trait, reduced β-chain output leads to relatively more δ-chain use, so HbA2 (α2δ2) rises above about 3.5%. Iron deficiency tends to lower HbA2. α-thalassaemia carriers usually have normal or low HbA2."
  },
  {
    id: 9,
    question: "Haemophilia B (Christmas disease) results from deficiency of",
    options: ["Factor VIII", "Factor IX", "Factor XI", "von Willebrand factor"],
    answer: 1,
    explanation: "Haemophilia B is caused by mutations in the F9 gene (Xq27) and is X-linked recessive, like haemophilia A, which is factor VIII deficiency (F8, Xq28). Factor XI deficiency (haemophilia C) is autosomal, and von Willebrand disease is mostly autosomal dominant."
  },
  {
    id: 10,
    question: "The most common mutation causing cystic fibrosis in populations of European descent is",
    options: ["A CAG repeat expansion in the CFTR gene", "A point mutation at codon 6 of CFTR", "A deletion of the entire CFTR gene", "Deletion of phenylalanine at position 508 (F508del)"],
    answer: 3,
    explanation: "CF is autosomal recessive and caused by mutations in CFTR on chromosome 7q31, which encodes a chloride channel. F508del (ΔF508), a 3-bp deletion removing phenylalanine 508, makes up about 70% of CF alleles in Europeans. The protein misfolds and is degraded, and a raised sweat chloride is the classic diagnostic test."
  },
  {
    id: 11,
    question: "A 5-year-old boy uses his hands to climb up his own thighs when rising from the floor and has enlarged calves. His mother's brother died of the same condition at 19. The gene most likely affected is",
    options: ["Dystrophin on Xp21", "CFTR on 7q31", "FBN1 on 15q21", "HTT on 4p16"],
    answer: 0,
    explanation: "Gowers' sign, calf pseudohypertrophy and an affected maternal uncle point to Duchenne muscular dystrophy, an X-linked recessive disorder of the dystrophin gene (the largest human gene, at Xp21). Frame-shift deletions cause Duchenne, while in-frame deletions usually cause the milder Becker dystrophy."
  },
  {
    id: 12,
    question: "Huntington disease is caused by expansion of which trinucleotide repeat in the HTT gene?",
    options: ["CGG", "CTG", "CAG", "GAA"],
    answer: 2,
    explanation: "Huntington disease is autosomal dominant, with a CAG expansion in exon 1 of HTT on chromosome 4p16.3. The repeat codes for a polyglutamine tract, and 40 or more repeats are fully penetrant. CGG is fragile X, CTG is myotonic dystrophy and GAA is Friedreich ataxia."
  },
  {
    id: 13,
    question: "The phenomenon in which a genetic disorder appears at an earlier age and with greater severity in successive generations is called",
    options: ["Incomplete penetrance", "Anticipation", "Genomic imprinting", "Pleiotropy"],
    answer: 1,
    explanation: "Anticipation is typical of trinucleotide repeat disorders, because unstable repeats tend to expand further when passed to the next generation. In Huntington disease large expansions arise mainly on paternal transmission. In fragile X and congenital myotonic dystrophy they arise mainly on maternal transmission."
  },
  {
    id: 14,
    question: "Fragile X syndrome results from more than 200 copies of a CGG repeat in the 5′ untranslated region of the FMR1 gene. The mechanism of disease is",
    options: ["A toxic polyglutamine protein", "Loss of a splice site causing exon skipping", "Gain of function of the FMR1 protein", "Hypermethylation of the promoter that silences FMR1 transcription"],
    answer: 3,
    explanation: "A full mutation (>200 CGG repeats) leads to hypermethylation of the CpG island and promoter, so FMR1 is not transcribed and FMRP is absent. Fragile X is the most common inherited cause of intellectual disability, and expansion from a premutation (55–200 repeats) happens on maternal transmission."
  },
  {
    id: 15,
    question: "Friedreich ataxia, an autosomal recessive neurodegenerative disorder, is caused by a GAA repeat expansion located in the",
    options: ["First intron of the frataxin (FXN) gene", "3′ untranslated region of the DMPK gene", "Coding exon of the androgen receptor gene", "Promoter of the FMR1 gene"],
    answer: 0,
    explanation: "Friedreich ataxia is unusual among repeat disorders because it is autosomal recessive and the GAA expansion lies in intron 1 of FXN on chromosome 9. The expansion reduces frataxin expression. The DMPK 3′ UTR carries the CTG repeat of myotonic dystrophy type 1."
  },
  {
    id: 16,
    question: "Spinal and bulbar muscular atrophy (Kennedy disease) is an X-linked CAG repeat disorder affecting which gene?",
    options: ["Dystrophin", "Androgen receptor", "Factor VIII", "Fragile X mental retardation 1"],
    answer: 1,
    explanation: "Kennedy disease is caused by a CAG (polyglutamine) expansion in the androgen receptor gene on Xq12. Affected men show lower motor neuron degeneration along with signs of androgen insensitivity such as gynaecomastia and reduced fertility."
  },
  {
    id: 17,
    question: "Myotonic dystrophy type 1 is caused by an expanded CTG repeat in the 3′ untranslated region of the DMPK gene on chromosome 19. The severe congenital form is usually transmitted through",
    options: ["The father", "Either parent equally", "The mother", "Neither parent, as it always arises de novo"],
    answer: 2,
    explanation: "Very large CTG expansions that cause congenital myotonic dystrophy occur almost always on maternal transmission. The disease is autosomal dominant and shows anticipation. The expanded RNA sequesters splicing regulators such as MBNL1."
  },
  {
    id: 18,
    question: "A man with Leber hereditary optic neuropathy (LHON) marries a woman with no mitochondrial mutation. The risk that any of their children inherit his mitochondrial mutation is",
    options: ["Essentially zero", "25%", "50%", "100% of sons only"],
    answer: 0,
    explanation: "LHON is caused by mtDNA point mutations, most often m.11778G>A in MT-ND4. Mitochondria are inherited only through the egg, because paternal mitochondria are eliminated after fertilisation, so an affected father does not transmit the disorder to any child. An affected mother transmits the mutation to all her children."
  },
  {
    id: 19,
    question: "In mitochondrial disorders such as MELAS, members of the same family carrying the same mtDNA mutation show very different severity. This is best explained by",
    options: ["Genomic imprinting", "X-inactivation", "Uniparental disomy", "Varying proportions of mutant mtDNA (heteroplasmy) and a threshold effect"],
    answer: 3,
    explanation: "Each cell contains many mtDNA copies, and a mixture of mutant and normal copies (heteroplasmy) can segregate unequally at cell division. Symptoms appear only when the mutant load in a tissue crosses a threshold, so expression varies between relatives and between tissues."
  },
  {
    id: 20,
    question: "A trait passed from an affected father to all of his sons and to none of his daughters is most consistent with",
    options: ["X-linked dominant inheritance", "Y-linked (holandric) inheritance", "Autosomal dominant inheritance", "Mitochondrial inheritance"],
    answer: 1,
    explanation: "Genes on the male-specific region of the Y chromosome pass strictly from father to son. Hypertrichosis of the ear pinna is the textbook example, and SRY and the AZF fertility regions are also Y-linked. In X-linked dominant inheritance an affected father transmits to all daughters and no sons, the reverse pattern."
  },
  {
    id: 21,
    question: "An affected man whose wife is unaffected has a disorder that appears in all of their daughters and none of their sons. The disorder is most likely",
    options: ["X-linked recessive, like haemophilia A", "Autosomal recessive, like phenylketonuria", "X-linked dominant, like hypophosphataemic (vitamin D-resistant) rickets", "Y-linked, like an AZF deletion"],
    answer: 2,
    explanation: "A father passes his only X to every daughter and his Y to every son. A dominant X-linked allele therefore affects all his daughters and none of his sons. Hypophosphataemic rickets (PHEX gene) is the classic X-linked dominant example."
  },
  {
    id: 22,
    question: "Which pedigree feature rules out X-linked inheritance of a trait?",
    options: ["Affected individuals in every generation", "More affected males than females", "Unaffected parents having an affected child", "Male-to-male transmission"],
    answer: 3,
    explanation: "A father gives his Y, not his X, to his sons, so a trait passed from father to son cannot be X-linked. Male-to-male transmission with vertical inheritance is typical of autosomal dominant disorders such as Huntington disease and achondroplasia."
  },
  {
    id: 23,
    question: "Achondroplasia, the commonest cause of disproportionate short stature, is inherited as an autosomal dominant trait and is caused by a gain-of-function mutation in",
    options: ["FGFR3", "FBN1", "COL1A1", "NF1"],
    answer: 0,
    explanation: "Almost all cases of achondroplasia carry the G380R mutation in FGFR3, and about 80% are new mutations linked to advanced paternal age. FBN1 is mutated in Marfan syndrome, COL1A1 in osteogenesis imperfecta and NF1 in neurofibromatosis type 1."
  },
  {
    id: 24,
    question: "Both parents are carriers of an autosomal recessive disorder. What is the probability that their phenotypically normal child is a carrier?",
    options: ["1/4", "1/2", "2/3", "3/4"],
    answer: 2,
    explanation: "Aa × Aa gives AA, Aa and aa in a 1:2:1 ratio. Once the child is known to be unaffected, aa is excluded, leaving AA and Aa in a 1:2 ratio. The carrier probability is therefore 2/3, a common pedigree-counselling calculation."
  },
  {
    id: 25,
    question: "A woman who carries haemophilia A marries a normal man. What proportion of their sons are expected to be affected?",
    options: ["None", "One half", "One quarter", "All"],
    answer: 1,
    explanation: "Each son receives one of his mother's two X chromosomes, so half get the mutant X and are affected. Half of the daughters will be carriers and none affected, because each also receives a normal X from the father."
  },
  {
    id: 26,
    question: "A man with haemophilia A marries a woman who is not a carrier. Which outcome is expected among their children?",
    options: ["All daughters are obligate carriers and all sons are unaffected", "Half the sons are affected and half the daughters are carriers", "All sons are affected and all daughters are normal", "All children are carriers regardless of sex"],
    answer: 0,
    explanation: "The father passes his only X, which carries the mutant F8 allele, to every daughter, so all daughters are obligate carriers. Sons receive his Y and their mother's normal X, so none are affected."
  },
  {
    id: 27,
    question: "An autosomal dominant disorder has 80% penetrance. A heterozygous affected parent has a child with an unaffected partner. The probability that the child will show the disorder is",
    options: ["0.80", "0.50", "0.20", "0.40"],
    answer: 3,
    explanation: "The child has a 1/2 chance of inheriting the mutant allele and, if it does, an 0.8 chance of expressing it: 0.5 × 0.8 = 0.4. Penetrance is the proportion of carriers who show the phenotype at all, while expressivity describes how severely it is shown."
  },
  {
    id: 28,
    question: "Cystic fibrosis affects 1 in 2,500 newborns in a population. Assuming Hardy-Weinberg equilibrium, the approximate carrier frequency is",
    options: ["1 in 50", "1 in 100", "1 in 25", "1 in 2,500"],
    answer: 2,
    explanation: "q² = 1/2500, so q = 1/50 and p ≈ 1. The carrier frequency 2pq ≈ 2 × 1/50 = 1/25. For rare recessive disorders, carriers greatly outnumber affected individuals."
  },
  {
    id: 29,
    question: "The children of a first-cousin marriage have an inbreeding coefficient (F) of",
    options: ["1/4", "1/8", "1/32", "1/16"],
    answer: 3,
    explanation: "First cousins share about 1/8 of their genes by descent (coefficient of relationship), and their child has a 1/16 probability of being homozygous by descent at any locus (F = 1/16). This raises the risk of autosomal recessive disorders, which is why consanguinity is noted in pedigrees."
  },
  {
    id: 30,
    question: "In a standard human pedigree chart, a double horizontal line joining a male and a female indicates",
    options: ["A consanguineous mating", "Divorce or separation", "Monozygotic twins", "An adopted child"],
    answer: 0,
    explanation: "A double line between partners marks a consanguineous union, such as first cousins. Squares are males and circles are females, filled symbols are affected, a half-filled symbol is a heterozygous carrier and an arrow marks the proband. Twins are drawn as diagonal lines from one point."
  },
  {
    id: 31,
    question: "In a pedigree, affected individuals appear only among siblings of one generation, both sexes are equally affected, their parents are normal and are first cousins. The most likely mode of inheritance is",
    options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"],
    answer: 1,
    explanation: "A horizontal pattern (affected sibs, unaffected parents), equal sex ratio and parental consanguinity are the classic signs of autosomal recessive inheritance. Consanguinity raises the chance that both parents carry the same rare allele from a common ancestor."
  },
  {
    id: 32,
    question: "A tall pea plant of unknown genotype is crossed with a dwarf (tt) plant to find out whether the tall plant is TT or Tt. This is called a",
    options: ["Back cross to the dominant parent", "Reciprocal cross", "Test cross", "Dihybrid cross"],
    answer: 2,
    explanation: "A test cross mates an individual of dominant phenotype with a homozygous recessive. If the dominant parent is heterozygous, the progeny segregate tall:dwarf in a 1:1 ratio; if homozygous, all progeny are tall. A monohybrid F2 gives 3:1 and a dihybrid F2 gives 9:3:3:1."
  },
  {
    id: 33,
    question: "A child of blood group AB has one parent of group A and one of group B. The simultaneous expression of both A and B antigens on the child's red cells is an example of",
    options: ["Incomplete dominance", "Epistasis", "Codominance", "Pseudodominance"],
    answer: 2,
    explanation: "IA and IB are codominant: both alleles are fully expressed in the heterozygote, so both antigens are present. The ABO system also shows multiple allelism (IA, IB, i). In incomplete dominance the heterozygote has an intermediate phenotype, such as pink flowers in Mirabilis."
  },
  {
    id: 34,
    question: "Prader-Willi syndrome and Angelman syndrome can both result from the same 15q11–q13 deletion. The syndrome produced depends on",
    options: ["The size of the deletion", "Which parent the deleted chromosome came from", "The sex of the affected child", "Whether the deletion is mosaic"],
    answer: 1,
    explanation: "This region is subject to genomic imprinting. A deletion on the paternal chromosome 15 causes Prader-Willi syndrome, while a deletion on the maternal chromosome 15 causes Angelman syndrome. Maternal or paternal uniparental disomy for chromosome 15 gives the same respective results."
  },
  {
    id: 35,
    question: "A high-pitched cat-like cry in infancy, microcephaly and intellectual disability are associated with",
    options: ["Deletion of the short arm of chromosome 5", "Trisomy 13", "Deletion of the long arm of chromosome 15", "Trisomy 18"],
    answer: 0,
    explanation: "Cri-du-chat syndrome is caused by a partial deletion of 5p (46,XX/XY,5p−). The characteristic cry comes from laryngeal abnormalities and usually fades with age. It is a structural deletion syndrome, not an aneuploidy."
  },
  {
    id: 36,
    question: "How many Barr bodies would be seen in somatic cells of a woman with the karyotype 48,XXXX?",
    options: ["One", "Two", "Four", "Three"],
    answer: 3,
    explanation: "Under the Lyon hypothesis, all X chromosomes except one are inactivated and condensed as Barr bodies (sex chromatin). The number of Barr bodies is therefore the number of X chromosomes minus one: 4 − 1 = 3."
  },
  {
    id: 37,
    question: "The 47,XYY karyotype attracted forensic attention after 1965 studies in a high-security hospital. Current understanding is that XYY males are",
    options: ["Invariably violent and infertile", "Usually tall and fertile, with no proven direct causal link to violent crime", "Phenotypically female with streak gonads", "Barr-body positive with gynaecomastia"],
    answer: 1,
    explanation: "Jacobs and colleagues (1965) reported an excess of XYY men among institutionalised patients, which led to the discredited idea of a 'criminal chromosome'. Most XYY men are tall, fertile and live ordinary lives. Any modest association with conviction is now attributed to factors such as lower IQ and learning difficulties, not innate violence."
  },
  {
    id: 38,
    question: "Phenylketonuria is an autosomal recessive disorder caused by deficiency of",
    options: ["Phenylalanine hydroxylase", "Tyrosinase", "Homogentisate 1,2-dioxygenase", "Fumarylacetoacetate hydrolase"],
    answer: 0,
    explanation: "Deficiency of phenylalanine hydroxylase (PAH gene, chromosome 12) blocks the conversion of phenylalanine to tyrosine. Untreated, it causes intellectual disability. Newborn screening began with the Guthrie bacterial inhibition test, and a low-phenylalanine diet prevents damage. Homogentisate dioxygenase deficiency causes alkaptonuria."
  },
  {
    id: 39,
    question: "Archibald Garrod's 1902 study of a disorder in which urine darkens on standing was one of the first applications of Mendelian recessive inheritance to a human trait, and led him to the concept of 'inborn errors of metabolism'. The disorder is",
    options: ["Phenylketonuria", "Albinism", "Alkaptonuria", "Galactosaemia"],
    answer: 2,
    explanation: "In alkaptonuria, deficiency of homogentisate 1,2-dioxygenase lets homogentisic acid accumulate. It oxidises to a dark pigment in urine and connective tissue (ochronosis). Garrod noticed its recessive pattern and high rate of parental consanguinity, and he introduced the phrase 'inborn errors of metabolism' in his 1908 Croonian Lectures."
  },
  {
    id: 40,
    question: "A man develops acute haemolysis after taking primaquine; his maternal grandfather had a similar episode after eating fava beans. The most likely inherited defect is",
    options: ["Hereditary spherocytosis", "Sickle cell trait", "Pyruvate kinase deficiency", "Glucose-6-phosphate dehydrogenase deficiency"],
    answer: 3,
    explanation: "G6PD deficiency is X-linked recessive, which fits transmission from a maternal grandfather to a grandson through a carrier mother. Red cells cannot regenerate enough NADPH to withstand oxidant stress from drugs such as primaquine, from fava beans or from infection, so they haemolyse."
  },
  {
    id: 41,
    question: "The persistence of the sickle cell allele at high frequency in malaria-endemic regions is explained by",
    options: ["A high spontaneous mutation rate at the HBB locus", "Heterozygote advantage (balanced polymorphism) against Plasmodium falciparum", "Genetic drift alone in small isolated populations", "Meiotic drive favouring the HbS allele"],
    answer: 1,
    explanation: "HbAS heterozygotes are relatively protected against severe falciparum malaria, while HbSS homozygotes suffer sickle cell disease. Selection for heterozygotes balances selection against homozygotes and keeps the allele at a stable, high frequency. This is the classic human example of balanced polymorphism."
  },
  {
    id: 42,
    question: "The National Sickle Cell Anaemia Elimination Mission, which aims to eliminate sickle cell disease as a public health problem by 2047, was launched on 1 July 2023 from",
    options: ["Bastar, Chhattisgarh", "Shahdol, Madhya Pradesh", "Nandurbar, Maharashtra", "Mayurbhanj, Odisha"],
    answer: 1,
    explanation: "The Prime Minister launched the mission at Shahdol in Madhya Pradesh, a state with a large tribal population and high prevalence of the HbS allele. The mission focuses on screening people up to 40 years of age in affected tribal areas, genetic counselling and care for those affected."
  },
  {
    id: 43,
    question: "Carl Correns's experiments on leaf variegation in Mirabilis jalapa, which showed that the offspring's phenotype depends entirely on the female parent, demonstrated",
    options: ["Maternal effect", "Sex-linked inheritance", "Cytoplasmic (plastid) inheritance", "Genomic imprinting"],
    answer: 2,
    explanation: "Correns (1909) found that seeds from flowers on green, white or variegated branches produced progeny resembling the maternal branch, whatever the pollen source. Plastids are passed through the egg cytoplasm, the plant equivalent of maternal mitochondrial inheritance in humans."
  },
  {
    id: 44,
    question: "Which of these disorders shows sex-influenced rather than sex-linked inheritance?",
    options: ["Red-green colour blindness", "Male-pattern (androgenetic) baldness", "Haemophilia A", "Duchenne muscular dystrophy"],
    answer: 1,
    explanation: "Sex-influenced traits are controlled by autosomal genes whose expression differs between the sexes, often because of hormones. Pattern baldness behaves as dominant in males and recessive in females. Colour blindness, haemophilia A and DMD are X-linked recessive."
  },
  {
    id: 45,
    question: "DNA analysis of the exhumed remains of the Romanov family identified the 'royal disease' descended from Queen Victoria as",
    options: ["Haemophilia B", "Haemophilia A", "von Willebrand disease", "Factor XI deficiency"],
    answer: 0,
    explanation: "In 2009 Rogaev and colleagues sequenced DNA from the Romanov remains and found a splice-site mutation in F9, identifying the disease as haemophilia B. The finding shows how forensic identification of historical remains can also settle questions in medical genetics."
  },
  {
    id: 46,
    question: "A person carries both a normal cell line (46,XX) and a trisomic cell line (47,XX,+21) because of non-disjunction after fertilisation. This condition is called",
    options: ["Chimerism", "Polyploidy", "Mosaicism", "Translocation"],
    answer: 2,
    explanation: "Mosaicism is the presence of two or more genetically different cell lines from a single zygote, usually due to post-zygotic mitotic error. Mosaic Down syndrome is often milder. Chimerism is two cell lines from different zygotes, such as fused twin embryos, which can produce two DNA profiles in one person."
  },
  {
    id: 47,
    question: "An X-linked recessive disorder affects 1 in 10,000 males in a population. The expected frequency of affected females is approximately",
    options: ["1 in 10,000", "1 in 20,000", "1 in 1,000,000", "1 in 100,000,000"],
    answer: 3,
    explanation: "For X-linked recessive traits, the male frequency equals the allele frequency q, here 1/10,000. Females must be homozygous, so their frequency is q² = (1/10,000)² = 1 in 100,000,000. This is why X-linked recessive disorders are seen far more often in males."
  },
  {
    id: 48,
    question: "The polyglutamine (polyQ) group of disorders, including Huntington disease and spinocerebellar ataxias, are all caused by expansion of",
    options: ["CTG repeats in 3′ untranslated regions", "CGG repeats in 5′ untranslated regions", "GAA repeats in introns", "CAG repeats within coding exons"],
    answer: 3,
    explanation: "CAG codes for glutamine, so an expanded CAG tract within a coding exon produces a protein with an abnormally long polyglutamine stretch that misfolds and aggregates in neurons. Non-coding expansions (CGG, CTG, GAA) cause disease through other mechanisms, such as gene silencing or toxic RNA."
  },
  {
    id: 49,
    question: "Brushfield spots on the iris, upslanting palpebral fissures, epicanthic folds and a single transverse palmar (simian) crease are features of",
    options: ["Down syndrome", "Turner syndrome", "Klinefelter syndrome", "Edwards syndrome"],
    answer: 0,
    explanation: "These are classic dysmorphic signs of trisomy 21, along with hypotonia, a flat facial profile, a sandal gap and congenital heart disease (especially atrioventricular septal defects). Dermatoglyphic features such as the single palmar crease and a distal axial triradius have historically been used in forensic and clinical screening."
  },
  {
    id: 50,
    question: "Marfan syndrome, with tall stature, arachnodactyly, lens dislocation and aortic root dilatation, is inherited as an autosomal dominant disorder of the gene encoding",
    options: ["Collagen type III", "Fibrillin-1", "Elastin", "Dystrophin"],
    answer: 1,
    explanation: "Marfan syndrome is caused by mutations in FBN1 on chromosome 15q21, which encodes fibrillin-1, a component of elastic microfibrils. One gene affecting many systems is an example of pleiotropy. Aortic dissection is a recognised cause of sudden death seen at autopsy."
  }
];

export default questions;
