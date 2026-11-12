const questions = [
  {
    id: 1,
    question: "The random match probability (RMP) of a DNA profile is",
    options: ["The probability that a randomly chosen unrelated person from a population would have that profile", "The probability that the suspect is guilty", "The probability that the laboratory made an error", "The proportion of the database that has been searched"],
    answer: 0,
    explanation: "RMP is the expected frequency of the profile in a reference population, calculated from allele frequencies. It is a statement about the profile, not about guilt. Treating it as the probability that the defendant is innocent is the prosecutor's fallacy."
  },
  {
    id: 2,
    question: "Under Hardy-Weinberg equilibrium, the expected frequency of a heterozygote with alleles of frequency p and q is",
    options: ["p squared", "pq", "2pq", "p plus q"],
    answer: 2,
    explanation: "Random mating gives genotype frequencies p² for one homozygote, q² for the other and 2pq for the heterozygote, the factor 2 arising because either allele may come from either parent. Homozygote frequencies in forensic work are often adjusted to p² + p(1 − p)θ to allow for population substructure."
  },
  {
    id: 3,
    question: "At a locus, alleles 14 and 16 have frequencies of 0.20 and 0.10 respectively. The expected frequency of the heterozygous genotype 14,16 is",
    options: ["0.02", "0.30", "0.04", "0.10"],
    answer: 2,
    explanation: "The heterozygote frequency is 2pq = 2 × 0.20 × 0.10 = 0.04. Forgetting the factor of 2 gives 0.02, a common error, and adding the frequencies gives 0.30. The factor of 2 arises because either allele may be inherited from either parent."
  },
  {
    id: 4,
    question: "A homozygous genotype at a locus where the allele frequency is 0.05 has an expected frequency, ignoring substructure, of",
    options: ["0.05", "0.10", "0.0025", "0.025"],
    answer: 2,
    explanation: "The homozygote frequency is p² = 0.05 × 0.05 = 0.0025. Because small p² values can understate the true frequency when a population is subdivided, forensic practice often uses the NRC II correction p² + p(1 − p)θ with θ of about 0.01 to 0.03."
  },
  {
    id: 5,
    question: "The product rule may be used to multiply single-locus genotype frequencies together only if the loci are",
    options: ["On the same chromosome", "Typed in the same multiplex", "All tetranucleotide repeats", "In linkage equilibrium, so that they are statistically independent"],
    answer: 3,
    explanation: "Independence lets probabilities be multiplied. Forensic STR loci are chosen on different chromosomes or far apart, and linkage equilibrium is tested in population studies. mtDNA and Y-STR markers are completely linked, so the product rule cannot be applied to them."
  },
  {
    id: 6,
    question: "A profile has single-locus genotype frequencies of 0.1, 0.01 and 0.001 at three independent loci. The RMP for the three-locus profile is",
    options: ["1 in 1,000", "1 in 1,000,000", "1 in 111", "1 in 100,000"],
    answer: 1,
    explanation: "By the product rule, 0.1 × 0.01 × 0.001 = 10⁻⁶, or 1 in a million. Multiplying frequencies across many independent loci is why a 20-locus STR profile can give match probabilities in the range of 1 in 10¹⁸ or rarer."
  },
  {
    id: 7,
    question: "The theta (θ) or co-ancestry correction recommended by the second National Research Council report is applied to",
    options: ["Allow for population substructure, which makes homozygotes more common than p² predicts", "Correct for laboratory error rates", "Adjust for the number of profiles in the database", "Account for mutation at STR loci"],
    answer: 0,
    explanation: "Real populations are subdivided, so people share ancestry more than random mating assumes. The correction raises homozygote frequencies, giving a conservative (larger) RMP. Values of about 0.01 for large populations and 0.03 for small isolated groups are usual."
  },
  {
    id: 8,
    question: "A likelihood ratio in DNA evidence compares",
    options: ["The number of matching loci with the number of non-matching loci", "The frequency of the profile in two different populations", "The probability of guilt with the probability of innocence", "The probability of the evidence given the prosecution proposition with its probability given the defence proposition"],
    answer: 3,
    explanation: "LR = P(E | Hp) ÷ P(E | Hd). It measures how much more probable the observations are under one proposition than the other, and so how much the evidence should move belief. Converting it into a probability of guilt requires prior odds, which are for the court, not the scientist."
  },
  {
    id: 9,
    question: "For a single-source crime stain matching a suspect, where the propositions are that the suspect left the stain or that an unrelated person did, the likelihood ratio equals",
    options: ["The square of the profile frequency", "Twice the profile frequency", "The reciprocal of the random match probability", "The random match probability itself"],
    answer: 2,
    explanation: "If the suspect is the source, the probability of observing the matching profile is 1. If an unrelated person is the source, it is the RMP. The LR is therefore 1/RMP, so an RMP of 1 in 10⁹ corresponds to an LR of 10⁹."
  },
  {
    id: 10,
    question: "Which statement in court is an example of the prosecutor's fallacy?",
    options: ["The probability that a random unrelated person would match this profile is one in a billion", "The likelihood ratio for this comparison is one billion", "The evidence is one billion times more probable if the accused is the source", "The probability that the accused is innocent is one in a billion"],
    answer: 3,
    explanation: "The prosecutor's fallacy transposes the conditional, treating the probability of the evidence given innocence as the probability of innocence given the evidence. The match probability says nothing about guilt without considering all the other evidence and the number of possible alternative sources."
  },
  {
    id: 11,
    question: "The defence argument that a one-in-a-million match probability is unimportant because a city of ten million contains about ten matching people is known as",
    options: ["The defence attorney's fallacy", "The prosecutor's fallacy", "The source attribution error", "The Bayesian error"],
    answer: 0,
    explanation: "This argument ignores that most of those people had no opportunity to leave the stain and that other evidence narrows the pool. Both fallacies arise from treating the DNA statistic in isolation; the correct framework weighs the LR against the other evidence through prior odds."
  },
  {
    id: 12,
    question: "A trio paternity test gives a paternity index of 1,000. Assuming a prior probability of 0.5, the probability of paternity is approximately",
    options: ["50.0%", "90.0%", "99.0%", "99.9%"],
    answer: 3,
    explanation: "With equal priors, W = PI ÷ (PI + 1) = 1000 ÷ 1001 = 0.999, or 99.9%. The 0.5 prior is a convention (Essen-Möller) and is not derived from the DNA. A PI of 100 gives about 99% and a PI of 10,000 about 99.99%."
  },
  {
    id: 13,
    question: "At one locus the child is 12,15, the mother is 12,18 and the alleged father is 15,16. The obligate paternal allele is",
    options: ["Allele 12", "Allele 15", "Allele 16", "Allele 18"],
    answer: 1,
    explanation: "The child's 12 can come from the mother, so the remaining allele 15 must have come from the biological father. The alleged father carries 15, so he is not excluded at this locus. The paternity index at the locus is then calculated from the chance he transmits 15 against the frequency of 15 in the population."
  },
  {
    id: 14,
    question: "In the same case, the alleged father is heterozygous 15,16 and the frequency of allele 15 in the population is 0.10. The paternity index at this locus is",
    options: ["0.5", "5", "10", "20"],
    answer: 1,
    explanation: "PI = X ÷ Y, where X is the chance the alleged father passes the obligate allele (0.5 for a heterozygote) and Y is the chance a random man passes it (the allele frequency, 0.10). PI = 0.5 ÷ 0.10 = 5. A man homozygous for the obligate allele would give X = 1 and PI = 10."
  },
  {
    id: 15,
    question: "The combined paternity index (CPI) for a case is obtained by",
    options: ["Adding the single-locus paternity indices", "Dividing the sum of indices by the number of loci", "Taking the highest single-locus paternity index", "Multiplying the single-locus paternity indices across independent loci"],
    answer: 3,
    explanation: "Because the loci are independent, their indices multiply, so a few informative loci quickly give very large values. Most laboratories report a CPI and the corresponding probability of paternity, requiring a CPI above a threshold such as 10,000 before reporting inclusion."
  },
  {
    id: 16,
    question: "Single-locus paternity indices of 2, 4 and 5 at three independent loci give a combined paternity index of",
    options: ["11", "40", "20", "3.67"],
    answer: 1,
    explanation: "CPI = 2 × 4 × 5 = 40. With equal priors this corresponds to a probability of paternity of 40/41, about 97.6%, which would be too low to report as an inclusion, so more loci would be typed."
  },
  {
    id: 17,
    question: "A trio shows an exclusion at only one of 21 STR loci, where the child's obligate paternal allele is one repeat different from the alleged father's allele. The best interpretation is",
    options: ["Definite exclusion of paternity", "A possible single-step STR mutation, which should be assessed with a mutation rate in the calculation", "Laboratory contamination", "The mother is not the biological mother"],
    answer: 1,
    explanation: "STR loci mutate at about 1 in 1,000 meioses, usually by gain or loss of a single repeat, often in the paternal line. A single-step mismatch at one locus out of many is therefore treated as a probable mutation, with a mutation term in the PI. Guidelines therefore require inconsistencies at two or more loci before reporting an exclusion, and many laboratories prefer three."
  },
  {
    id: 18,
    question: "A 'motherless' paternity case refers to one in which",
    options: ["The mother's sample is unavailable, so her contribution cannot be subtracted", "The child is deceased", "The alleged father is deceased", "Only mitochondrial DNA is available"],
    answer: 0,
    explanation: "Without the mother's profile, either of the child's alleles might be the paternal one, so the calculation must consider both possibilities. This lowers the paternity index, and more loci are generally needed to reach a reportable conclusion."
  },
  {
    id: 19,
    question: "Section 112 of the Indian Evidence Act, now re-enacted as Section 116 of the Bharatiya Sakshya Adhiniyam 2023, concerns",
    options: ["Admissibility of expert DNA opinion", "Collection of DNA samples from arrested persons", "Chain of custody for biological evidence", "The presumption of legitimacy of a child born during a valid marriage"],
    answer: 3,
    explanation: "The provision presumes that a child born during a valid marriage, or within 280 days of its dissolution while the mother remains unmarried, is legitimate, rebuttable only by proof of non-access. Courts have held that DNA evidence must be weighed against this presumption, and tests are not ordered as a matter of course."
  },
  {
    id: 20,
    question: "In Indian law, the power most commonly used by courts to direct a person to undergo a DNA test in a civil paternity dispute is derived from",
    options: ["Section 53A of the old Code of Criminal Procedure", "Section 45 of the Indian Evidence Act only", "The court's power to order discovery and inspection together with its inherent powers, exercised on the standard of eminent need", "The NDPS Act"],
    answer: 2,
    explanation: "In Goutam Kundu v State of West Bengal (1993) and later cases such as Bhabani Prasad Jena (2010), the Supreme Court held that DNA tests cannot be ordered routinely; there must be a strong prima facie case and eminent need, balanced against privacy and the presumption of legitimacy. Section 53A of the old CrPC, re-enacted in the BNSS 2023, deals instead with the medical examination of a person accused of rape."
  },
  {
    id: 21,
    question: "Which statement about full siblings is correct in kinship analysis?",
    options: ["They share, on average, 50% of their autosomal alleles by descent and may share 0, 1 or 2 alleles at any locus", "They always share at least one allele at every locus", "They share exactly 25% of their genome", "They share no alleles unless they are monozygotic twins"],
    answer: 0,
    explanation: "Full siblings have an expected coefficient of relatedness of 0.5 (kinship coefficient 0.25), with identity-by-descent probabilities of 1/4, 1/2 and 1/4 for sharing 0, 1 and 2 alleles. Because of that variation, a sibship LR from standard STRs is far weaker than a parentage LR, and extra loci or SNP panels are often needed."
  },
  {
    id: 22,
    question: "The expected proportion of autosomal genome shared by descent between a grandparent and grandchild, an uncle and nephew, or half-siblings is",
    options: ["50%", "25%", "12.5%", "6.25%"],
    answer: 1,
    explanation: "All three are second-degree relationships sharing about 25%. Because they share the same expected proportion, autosomal STRs alone often cannot tell them apart, so lineage markers (Y-STR, mtDNA) or dense SNP data are used to distinguish them."
  },
  {
    id: 23,
    question: "To identify unidentified skeletal remains thought to be a missing man whose parents are both alive, the most informative approach is",
    options: ["mtDNA sequencing alone", "Y-STR typing alone", "Autosomal STR typing of the remains compared with both parents as a reverse parentage (parentage trio) analysis", "Amelogenin typing"],
    answer: 2,
    explanation: "With both parents available, each of the deceased's alleles should be traceable to one parent, giving a strong parentage likelihood ratio. mtDNA would only confirm the maternal lineage and Y-STR the paternal lineage, each shared by many relatives, so both are less specific than a reverse parentage analysis."
  },
  {
    id: 24,
    question: "In disaster victim identification, DNA is used alongside which other primary identifiers recognised by Interpol?",
    options: ["Tattoos and scars", "Personal effects and clothing", "Fingerprints and forensic odontology", "Witness statements and photographs"],
    answer: 2,
    explanation: "Interpol recognises fingerprints, dental records and DNA as primary identifiers, because each can be matched objectively to antemortem records. Personal effects, tattoos, scars, medical implants and visual recognition are secondary identifiers that support but do not alone establish identity."
  },
  {
    id: 25,
    question: "Which phase of an Interpol DVI operation involves collecting antemortem data such as family reference samples and dental records?",
    options: ["Phase 1, the scene", "Phase 2, the postmortem examination", "Phase 3, the antemortem information phase", "Phase 4, reconciliation"],
    answer: 2,
    explanation: "The four DVI phases are scene, postmortem, antemortem and reconciliation. Family reference samples, dental and medical records and fingerprints are gathered in phase 3. In phase 4 postmortem and antemortem data are compared and identifications confirmed by a board."
  },
  {
    id: 26,
    question: "In a mass fatality with highly fragmented remains, 'reassociation' of body parts by DNA refers to",
    options: ["Matching family reference samples to victims", "Assigning remains to a nationality", "Distinguishing victims from perpetrators", "Determining that separate remains come from the same individual"],
    answer: 3,
    explanation: "DNA typing of each fragment lets parts with the same profile be reassociated as one person, avoiding duplicate counts and the return of mixed remains. It is a major reason DNA is central to DVI after events such as aircraft crashes, bombings and the 2004 Indian Ocean tsunami."
  },
  {
    id: 27,
    question: "When direct reference samples are unavailable in a mass disaster, identifications are made by",
    options: ["Kinship analysis against family reference samples, typically parents, children or siblings", "Y-STR typing of the remains alone", "Comparing the remains with a convicted-offender database", "Sex determination by amelogenin"],
    answer: 0,
    explanation: "Kinship matching compares the victim's profile with relatives using pedigree likelihood ratios. First-degree relatives (parents, children) are most informative, siblings less so. Software such as DNA-VIEW, Familias or M-FISys handles large-scale kinship matching."
  },
  {
    id: 28,
    question: "In large DVI operations, a threshold likelihood ratio much higher than usual is often required for identification because",
    options: ["Family reference samples are inherently unreliable", "The large number of comparisons makes coincidental high LRs more likely", "Likelihood ratios cannot be calculated from degraded DNA", "Only exclusions are permitted"],
    answer: 1,
    explanation: "Searching thousands of victim profiles against thousands of relatives produces millions of pairwise comparisons, so some unrelated pairs will score well by chance. Raising the reporting threshold, requiring supporting non-DNA evidence and checking pedigrees guard against false identifications."
  },
  {
    id: 29,
    question: "Where kinship analysis is used, the prior odds in a disaster victim identification can reasonably be set using",
    options: ["Allele frequencies in the general population", "The random match probability", "The number of DNA samples typed in the laboratory", "The number of missing persons in the closed population of the disaster"],
    answer: 3,
    explanation: "In a closed-population disaster, such as a passenger list, the number of candidate victims gives a defensible prior, for example 1 in N. Combining those prior odds with the kinship likelihood ratio gives posterior odds of identity. In an open population the prior is much harder to justify."
  },
  {
    id: 30,
    question: "Under India's DNA Technology (Use and Application) Regulation Bill, which was introduced in 2019 and later withdrawn in 2023, the proposed indices of the national DNA data bank included a",
    options: ["Crime scene index, suspects' or undertrials' index, offenders' index, missing persons' index and unknown deceased persons' index", "Only an offenders' index", "A universal index of all citizens", "A civil paternity index for all births"],
    answer: 0,
    explanation: "The Bill proposed National and Regional DNA Data Banks holding those five indices, overseen by a DNA Regulatory Board. It was withdrawn in the Lok Sabha on 24 July 2023, the government stating that its ground was largely covered by the Criminal Procedure (Identification) Act 2022, while the parliamentary standing committee had pressed for stronger privacy and consent safeguards. India therefore has no dedicated DNA databank statute, and casework proceeds under general evidence and procedural law."
  },
  {
    id: 31,
    question: "A 'cold hit' in DNA database practice means",
    options: ["A match between a crime-scene profile and a profile already held in the database, generating an investigative lead", "A profile that fails to amplify", "A match between two crime scenes only", "A profile excluded because of contamination"],
    answer: 0,
    explanation: "Database searching can link an unsolved case to a known individual, or link two scenes to each other, when there is no prior suspect. Because the match arises from a search of many profiles, the statistical interpretation differs from a confirmatory comparison, and the lead is followed by typing a fresh reference sample."
  },
  {
    id: 32,
    question: "A familial DNA search is used when",
    options: ["A crime-scene profile matches a database profile exactly", "A near-match in the database suggests a close relative of the offender may be in it", "The victim's family is being identified", "Only mitochondrial DNA is available"],
    answer: 1,
    explanation: "Partial matching at many loci can indicate a parent, child or sibling of the true source, giving an investigative lead to the family. The approach raises privacy and ethical concerns and is prohibited or tightly controlled in many jurisdictions."
  },
  {
    id: 33,
    question: "In a two-person mixture where the victim's profile is assumed and the suspect's alleles are also present, the statistic most appropriate for reporting is",
    options: ["Random match probability of the suspect's profile", "The degradation index", "The paternity index", "A likelihood ratio comparing propositions about who contributed the mixture"],
    answer: 3,
    explanation: "Mixtures are evaluated by comparing the probability of the observed peaks under propositions such as 'victim and suspect' against 'victim and one unknown'. Probabilistic genotyping software uses peak heights, stutter and drop-out models to compute this LR. A plain RMP ignores the mixed nature of the evidence."
  },
  {
    id: 34,
    question: "The combined probability of inclusion (CPI or RMNE) approach to mixtures",
    options: ["Uses peak heights to deconvolve contributors", "Calculates the proportion of the population that could not be excluded as possible contributors", "Requires the number of contributors to be known exactly", "Gives the same value as a likelihood ratio"],
    answer: 1,
    explanation: "RMNE (random man not excluded) adds the frequencies of all genotypes made up of the observed alleles, reporting the proportion of people who could be contributors. It does not need assumptions about contributor numbers but wastes information and performs badly where drop-out is possible, so LR methods are now preferred."
  },
  {
    id: 35,
    question: "Probabilistic genotyping systems such as STRmix and TrueAllele improve mixture interpretation mainly because they",
    options: ["Remove all artefacts from the data", "Give certainty about the number of contributors", "Eliminate the need for a reference population", "Model peak heights, stutter, drop-out and drop-in to weigh alternative genotype combinations"],
    answer: 3,
    explanation: "These systems use continuous models of the signal, considering many possible genotype sets and mixture proportions, and produce a likelihood ratio with its uncertainty. They handle low-template and complex mixtures better than binary thresholds, but they require validation and careful specification of propositions."
  },
  {
    id: 36,
    question: "Microbial forensics can be defined as the discipline that",
    options: ["Identifies the species of insects on a corpse", "Uses DNA analysis to identify the human source of a bloodstain", "Analyses microbial agents and their origins to attribute a biological crime or attack", "Diagnoses infections in living patients for treatment"],
    answer: 2,
    explanation: "Microbial forensics applies genomic characterisation of pathogens and toxins, along with evidence handling, to investigate biocrime and bioterrorism. Attribution requires both laboratory characterisation and traditional investigation, since strains can be shared widely."
  },
  {
    id: 37,
    question: "The 2001 US anthrax letter attacks were investigated using genomic comparison of Bacillus anthracis isolates, and the strain used was identified as",
    options: ["Sterne", "Ames", "Vollum", "Pasteur"],
    answer: 1,
    explanation: "Whole-genome sequencing of the letter material and of laboratory stocks traced the material to the Ames strain and to a specific flask, pioneering the use of microbial genomics in attribution. Sterne is a vaccine strain lacking the capsule plasmid pXO2."
  },
  {
    id: 38,
    question: "Which pair correctly matches a Category A bioterrorism agent with its disease?",
    options: ["Yersinia pestis and plague", "Francisella tularensis and brucellosis", "Variola virus and chickenpox", "Clostridium botulinum and tetanus"],
    answer: 0,
    explanation: "CDC Category A agents include Bacillus anthracis (anthrax), Yersinia pestis (plague), Variola virus (smallpox), Francisella tularensis (tularaemia), Clostridium botulinum toxin (botulism) and the viral haemorrhagic fevers. Tetanus is caused by Clostridium tetani, and chickenpox by varicella-zoster virus."
  },
  {
    id: 39,
    question: "Which molecular method is most suitable for rapid presumptive detection of Bacillus anthracis in a suspicious powder at a field laboratory?",
    options: ["Sanger sequencing of the 16S rRNA gene", "Real-time PCR targeting the pagA and capB genes on the virulence plasmids", "SSCP of genomic DNA", "RFLP with HaeIII digestion"],
    answer: 1,
    explanation: "Real-time PCR for chromosomal and plasmid-borne virulence markers (pagA on pXO1, capB on pXO2) is fast, sensitive and specific, and works in a closed tube. Culture and whole-genome sequencing follow for confirmation and strain attribution. RFLP and SSCP are far too slow and insensitive for triage."
  },
  {
    id: 40,
    question: "Multilocus variable number tandem repeat analysis (MLVA) of bacterial isolates is conceptually similar to which human forensic technique?",
    options: ["STR typing", "mtDNA sequencing", "Amelogenin sex typing", "Presumptive blood testing"],
    answer: 0,
    explanation: "MLVA types several variable tandem repeat loci in a bacterial genome by PCR and size separation, exactly as STR typing does for humans. It allows strains to be distinguished and outbreaks traced. Whole-genome SNP typing now gives even finer resolution."
  },
  {
    id: 41,
    question: "In a suspected case of criminal transmission of HIV, phylogenetic analysis of viral sequences from the complainant and the accused can",
    options: ["Prove beyond doubt that the accused infected the complainant", "Replace the need for clinical and epidemiological evidence", "Determine the date of transmission exactly", "Show whether the viruses are closely related, which is consistent with but does not prove direct transmission"],
    answer: 3,
    explanation: "Closely related sequences support a transmission link and can exclude it if they are distant, but they cannot establish direction or rule out an unsampled intermediate source. Courts are advised to treat such evidence as corroborative, interpreted with local control sequences from the same population."
  },
  {
    id: 42,
    question: "Molecular autopsy, performed when a young person dies suddenly with a negative conventional autopsy, most often looks for",
    options: ["STR profiles of family members", "mtDNA haplogroups", "Variants in genes causing cardiac channelopathies and cardiomyopathies", "Bacterial 16S rRNA sequences"],
    answer: 2,
    explanation: "Sudden unexplained death in the young is often caused by inherited arrhythmia syndromes such as long QT (KCNQ1, KCNH2, SCN5A) or cardiomyopathies. Sequencing panels on postmortem blood or tissue can give a cause of death and, importantly, allow screening of surviving relatives."
  },
  {
    id: 43,
    question: "Why should blood for a molecular autopsy be collected in EDTA rather than in a heparin tube?",
    options: ["EDTA is required for serology", "Heparin lyses white blood cells", "EDTA preserves the DNA and heparin inhibits PCR", "Heparin dilutes the sample"],
    answer: 2,
    explanation: "Heparin is a potent inhibitor of DNA polymerase and is difficult to remove, so heparinised samples often fail to amplify. EDTA chelates calcium to prevent clotting and also protects DNA by inhibiting nucleases, which is why EDTA tubes are standard for DNA work."
  },
  {
    id: 44,
    question: "In an outbreak investigation of suspected deliberate food contamination, the strongest molecular evidence linking patient isolates to a culture seized from a suspect would be",
    options: ["Identical colony morphology on agar", "Matching antibiotic sensitivity patterns", "Identical biochemical profiles", "Whole-genome sequencing showing the isolates differ by very few SNPs"],
    answer: 3,
    explanation: "Phenotypic tests cannot distinguish strains at the resolution needed for attribution. Whole-genome SNP analysis can show that isolates are nearly identical, consistent with a common source, and the number of differences can be interpreted against known mutation rates. The 1996 Texas Shigella dysenteriae laboratory-source outbreak was investigated along these lines."
  },
  {
    id: 45,
    question: "Chain of custody documentation for a biological exhibit is important primarily because it",
    options: ["Records every transfer and storage condition, establishing the integrity and identity of the exhibit in court", "Determines the random match probability", "Replaces the need for negative controls", "Allows the laboratory to omit quantification"],
    answer: 0,
    explanation: "An unbroken record of who held the exhibit, when and under what conditions prevents challenges of tampering, switching or degradation. Along with sealed packaging, unique identifiers and laboratory quality systems, it underpins the admissibility and weight of the DNA evidence."
  },
  {
    id: 46,
    question: "A suspect's profile matches the crime-scene profile, and the suspect's identical twin brother is also a possible source. The DNA likelihood ratio for distinguishing them using standard STRs is",
    options: ["Essentially 1, giving no discrimination", "The reciprocal of the random match probability", "Twice the random match probability", "Dependent on the number of loci typed"],
    answer: 0,
    explanation: "Monozygotic twins share essentially the same nuclear genome, so standard STR typing cannot separate them and the LR is about 1. Discrimination requires other evidence, differences in DNA methylation, deep sequencing for rare somatic differences, or fingerprints, which differ even in identical twins."
  },
  {
    id: 47,
    question: "A Y-STR haplotype found in a crime stain has been observed 3 times in a YHRD database of 5,000 men from the relevant population. The estimated haplotype frequency is approximately",
    options: ["1 in 5,000", "1 in 1,667", "1 in 15,000", "3 in 100"],
    answer: 1,
    explanation: "The counting estimate is 3/5000 = 0.0006, about 1 in 1,667, usually reported with an upper confidence limit. Y-STR haplotypes cannot be multiplied across loci because the markers are completely linked, so database counting is the standard approach."
  },
  {
    id: 48,
    question: "A match probability is reported as 1 in 10 billion for a population of 1.4 billion. The appropriate way to express this in court is",
    options: ["Nobody else in the country can have this profile", "The accused is the source with a probability of 10 billion to one", "The profile would be expected in about one in ten billion unrelated individuals, so it is rare in the relevant population", "Fourteen people in the country share this profile"],
    answer: 2,
    explanation: "The statistic describes the expected rarity of the profile among unrelated people and should be stated as such, with the limits of the reference data acknowledged. Claiming uniqueness or restating it as a probability of being the source goes beyond what the calculation supports."
  },
  {
    id: 49,
    question: "In a kinship test to establish whether an unidentified young man is the son of a couple, the laboratory reports a likelihood ratio of 100,000. This means",
    options: ["The probability of parentage is 100,000 to one", "The observations are 100,000 times more probable if he is their biological son than if he is an unrelated person", "He shares 100,000 alleles with the couple", "The random match probability is 100,000"],
    answer: 1,
    explanation: "A likelihood ratio compares the probability of the DNA observations under two stated propositions. Converting it into a probability of relationship requires prior odds, and the propositions must be stated, since the alternative 'an unrelated man' gives a very different LR from 'a nephew'."
  },
  {
    id: 50,
    question: "In the Indian context, DNA profiling evidence is tendered in court as the opinion of an expert, which is governed by",
    options: ["Section 45 of the Indian Evidence Act, now Section 39 of the Bharatiya Sakshya Adhiniyam 2023", "Section 27 of the Bharatiya Nyaya Sanhita 2023", "The NDPS Act 1985", "Section 41 of the BNSS 2023"],
    answer: 0,
    explanation: "Expert opinion on science, art or identity was admissible under Section 45 of the Indian Evidence Act 1872, re-enacted as Section 39 of the Bharatiya Sakshya Adhiniyam 2023, which came into force on 1 July 2024 along with the BNS and BNSS. The court still weighs such opinion against the rest of the evidence and the quality of the laboratory work."
  }
];

export default questions;
