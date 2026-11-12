const questions = [
  {
    id: 1,
    question: "Short tandem repeats (STRs) used in forensic DNA typing typically have repeat units of",
    options: ["2–6 base pairs, with tetranucleotide repeats preferred", "10–100 base pairs", "Single base pairs only", "More than 1,000 base pairs"],
    answer: 0,
    explanation: "STRs (microsatellites) have core repeats of 2–6 bp, and most forensic loci are tetranucleotides such as [AGAT]n. VNTRs (minisatellites), used in early RFLP fingerprinting, have repeat units of about 10–100 bp. Tetranucleotides give less stutter than dinucleotides and are easy to amplify from small templates."
  },
  {
    id: 2,
    question: "Tetranucleotide STRs are preferred to dinucleotide STRs in forensic multiplexes mainly because they",
    options: ["Have higher mutation rates", "Produce much less stutter, so minor contributors are easier to interpret", "Are always located in coding exons", "Cannot be amplified by PCR"],
    answer: 1,
    explanation: "Slippage during PCR produces stutter peaks one repeat shorter than the true allele. Dinucleotide loci stutter heavily and the artefacts are only 2 bp from the parent peak, which confuses mixture interpretation. Tetranucleotide stutter is usually below 10–15%."
  },
  {
    id: 3,
    question: "In the STR locus name D8S1179, the number 8 indicates",
    options: ["The number of repeats in the most common allele", "The repeat unit length", "The chromosome on which the locus lies", "The year it was discovered"],
    answer: 2,
    explanation: "In this nomenclature, D stands for DNA, the next number is the chromosome (8), S means a single-copy sequence and the final number (1179) is the order in which the marker was registered on that chromosome. Loci within genes are named after the gene instead, such as TH01 and vWA."
  },
  {
    id: 4,
    question: "The STR locus TH01 is located in intron 1 of the gene for",
    options: ["Thyroid peroxidase", "Thymidine kinase", "Thrombin", "Tyrosine hydroxylase"],
    answer: 3,
    explanation: "TH01 lies in the first intron of the human tyrosine hydroxylase gene on chromosome 11p15.5. TPOX is in the thyroid peroxidase gene (chromosome 2), CSF1PO in the c-fms proto-oncogene (chromosome 5), FGA in the fibrinogen alpha chain gene (chromosome 4) and vWA in the von Willebrand factor gene (chromosome 12)."
  },
  {
    id: 5,
    question: "Under ISFG recommendations, the TH01 allele designated '9.3' contains",
    options: ["Nine complete repeats plus a partial repeat of three bases", "Nine repeats and three point mutations", "9.3 repeats of a trinucleotide", "A three-base deletion in repeat nine"],
    answer: 0,
    explanation: "STR alleles are named by the number of complete repeat units. A partial repeat is added after a decimal point as the number of extra bases. TH01 9.3 has nine full AATG repeats and one incomplete ATG unit, and is common in European populations."
  },
  {
    id: 6,
    question: "Which of these is NOT one of the 20 CODIS core STR loci in use since 1 January 2017?",
    options: ["D1S1656", "D12S391", "Penta E", "D2S441"],
    answer: 2,
    explanation: "In 2017 the FBI added seven loci (D1S1656, D2S441, D2S1338, D10S1248, D12S391, D19S433 and D22S1045) to the original 13 CODIS core loci. Penta E and Penta D are pentanucleotide loci in Promega PowerPlex kits but are not CODIS core loci."
  },
  {
    id: 7,
    question: "Which locus was among the original 13 CODIS core STR loci adopted by the FBI in 1997–98?",
    options: ["D21S11", "D2S1338", "D19S433", "SE33"],
    answer: 0,
    explanation: "The original 13 were CSF1PO, FGA, TH01, TPOX, vWA, D3S1358, D5S818, D7S820, D8S1179, D13S317, D16S539, D18S51 and D21S11. D2S1338 and D19S433 joined in the 2017 expansion. SE33 is a highly polymorphic locus used in Germany but is not a CODIS core locus."
  },
  {
    id: 8,
    question: "The amelogenin sex test used in STR kits can tell X from Y because",
    options: ["AMELY is a tetranucleotide STR and AMELX is not", "The AMELX amplicon is 6 bp shorter than the AMELY amplicon owing to a deletion in intron 1", "AMELX is mitochondrial and AMELY is nuclear", "Only males have amelogenin genes"],
    answer: 1,
    explanation: "Amelogenin, a tooth enamel protein gene, has copies on Xp22 (AMELX) and Yp11.2 (AMELY). One primer pair amplifies both, and the X product is 6 bp shorter (for example about 106 and 112 bp, depending on the kit). Females show X only, males X and Y."
  },
  {
    id: 9,
    question: "A known male gives an STR profile showing only the X peak at amelogenin, but Y-STRs amplify normally. The most likely explanation is",
    options: ["Sample switching with a female", "Klinefelter syndrome", "Allelic ladder failure", "A deletion of the AMELY region on Yp, reported at notable frequency in Indian males"],
    answer: 3,
    explanation: "Interstitial deletions of Yp11.2 removing AMELY make a male appear female at amelogenin. Thangaraj and colleagues reported such deletions in Indian populations at a higher rate than in Europeans. Confirmation with Y-STRs or Y markers such as DYS391 or SRY avoids mis-sexing."
  },
  {
    id: 10,
    question: "In STR genotyping, the allelic ladder is used to",
    options: ["Identify the body fluid of origin", "Correct for spectral overlap between dyes", "Measure DNA concentration", "Assign allele designations by comparing sample peaks with common alleles run under the same conditions"],
    answer: 3,
    explanation: "An allelic ladder contains the common alleles of each locus. Sample fragment sizes are compared with the ladder peaks, and a peak within a set window (typically ±0.5 bp) of a ladder allele gets that designation. Peaks outside all windows are called 'off-ladder' and may be microvariants."
  },
  {
    id: 11,
    question: "The internal lane size standard (e.g. GeneScan LIZ) added to every sample in capillary electrophoresis serves to",
    options: ["Provide genotype calls directly", "Act as a positive control for amplification", "Detect PCR inhibitors", "Calibrate fragment sizes within each injection, correcting for run-to-run variation in mobility"],
    answer: 3,
    explanation: "The size standard is a set of fragments of known length labelled with a separate dye. It is co-injected with each sample so software can build a sizing curve for that capillary and run. Sizes are then compared with the allelic ladder for allele calling."
  },
  {
    id: 12,
    question: "In an STR electropherogram, the x-axis and y-axis represent respectively",
    options: ["Time in minutes and DNA concentration", "Fragment size in base pairs and fluorescence signal in relative fluorescence units", "Number of repeats and allele frequency", "Dye colour and peak area"],
    answer: 1,
    explanation: "After sizing against the internal standard, peaks are plotted by fragment size (bp) on the x-axis and signal intensity in RFU on the y-axis. Each dye channel is shown in its own panel, with allele labels from comparison with the allelic ladder."
  },
  {
    id: 13,
    question: "A laboratory sets an analytical threshold of 50 RFU and a stochastic threshold of 200 RFU. At one locus a single allele peak of 140 RFU is seen. The correct interpretation is",
    options: ["The donor is definitely homozygous", "The peak is noise and should be ignored", "The locus shows a mixture", "The peak is a real allele, but a sister allele may have dropped out, so homozygosity cannot be assumed"],
    answer: 3,
    explanation: "The 140 RFU peak is above the analytical threshold, so it is a true allele. It is below the stochastic threshold, the level above which a heterozygous partner is not expected to drop out, so the genotype could be heterozygous with a missing allele. Interpretation and statistics must allow for possible drop-out."
  },
  {
    id: 14,
    question: "Stutter peaks in STR profiles are usually found one repeat unit shorter than the true allele and are caused by",
    options: ["Slipped-strand mispairing of the polymerase during PCR", "Spectral overlap between dyes", "Air bubbles in the capillary", "Incomplete addition of adenine"],
    answer: 0,
    explanation: "During extension, the template and nascent strand can transiently mispair by one repeat, so the copy loses a repeat (n−1, 'back' stutter) or occasionally gains one (n+1, forward stutter). Stutter rises with allele length and with the uniformity of the repeat. Analysts use locus-specific stutter filters."
  },
  {
    id: 15,
    question: "A true allele peak is 2,000 RFU. A peak one repeat shorter is 160 RFU, and the laboratory's stutter filter for this locus is 12%. The smaller peak is best interpreted as",
    options: ["A minor contributor allele, since it exceeds 10%", "A pull-up peak", "Stutter, since it is 8% of the parent peak and within the filter", "A drop-in allele"],
    answer: 2,
    explanation: "160 ÷ 2000 = 0.08, or 8%, below the 12% filter, so it is consistent with n−1 stutter. In a suspected mixture, however, a minor contributor's allele in a stutter position cannot be ruled out, which is why probabilistic genotyping models stutter explicitly."
  },
  {
    id: 16,
    question: "A peak appears in the green channel at exactly the same size as a very tall, off-scale peak in the blue channel. This artefact is",
    options: ["Stutter", "Pull-up (bleed-through) from spectral overlap", "A dye blob", "A microvariant allele"],
    answer: 1,
    explanation: "Fluorescent dyes have overlapping emission spectra. Software corrects for this using a spectral calibration (matrix), but very strong signals, or a poor calibration, let some signal 'pull up' into neighbouring channels at the same position. Re-injecting with less DNA or recalibrating removes it."
  },
  {
    id: 17,
    question: "Broad, low peaks appearing at a consistent position in samples, including negative controls, and not matching any allele, are most likely",
    options: ["Heteroplasmy", "Tri-allelic patterns", "n+1 stutter", "Dye blobs from unincorporated or free fluorescent dye"],
    answer: 3,
    explanation: "Free dye that has come off primers migrates as broad 'blobs' at characteristic positions for each dye. They are wider and more rounded than true alleles. Spikes, by contrast, are very sharp peaks in all colours at once, caused by air bubbles, crystals or voltage surges."
  },
  {
    id: 18,
    question: "A very sharp peak appears at the same position in all dye channels of a sample. The most likely cause is",
    options: ["A shared allele among contributors", "Pull-up from the size standard", "A spike caused by an air bubble, particle or voltage surge in the capillary", "A heterozygous allele"],
    answer: 2,
    explanation: "Spikes register in every colour at once because they are not caused by a dye-labelled fragment. They are usually narrower than real peaks and do not reproduce on re-injection. Re-injection is the usual way to confirm."
  },
  {
    id: 19,
    question: "'Allele drop-in' in low-template DNA analysis refers to",
    options: ["Loss of one allele of a heterozygote", "Stutter peaks that exceed the filter", "Peaks from the allelic ladder appearing in samples", "Sporadic appearance of one or two extra alleles from fragmented contaminating DNA"],
    answer: 3,
    explanation: "Drop-in is low-level, non-reproducible contamination, often single alleles from fragments of DNA in the environment or reagents. It differs from gross contamination, which gives a full extra profile. Probabilistic interpretation and replicate analysis account for it."
  },
  {
    id: 20,
    question: "Heterozygote balance (peak height ratio) at a locus with peaks of 400 RFU and 800 RFU is",
    options: ["200%", "50%", "40%", "80%"],
    answer: 1,
    explanation: "Peak height ratio = smaller peak ÷ larger peak × 100 = 400 ÷ 800 × 100 = 50%. Good-quality single-source samples usually show ratios above about 60%. Lower ratios suggest low template, degradation, a mixture or a primer-binding-site mutation."
  },
  {
    id: 21,
    question: "In a DNA profile, the largest number of alleles observed at any locus is five. The minimum number of contributors is",
    options: ["Two", "Five", "Three", "Four"],
    answer: 2,
    explanation: "Each person contributes at most two alleles per autosomal locus, so five alleles need at least ⌈5/2⌉ = 3 people. This 'maximum allele count' method gives a minimum, and allele sharing means the true number may be higher."
  },
  {
    id: 22,
    question: "A single-source reference blood sample shows three alleles at TPOX but no more than two at every other locus. The most likely explanation is",
    options: ["A tri-allelic pattern from a chromosomal duplication at that locus", "A mixture of two people", "Contamination with the allelic ladder", "Stutter at all loci"],
    answer: 0,
    explanation: "A mixture would normally show extra alleles at several loci. Tri-allelic patterns at one locus arise from a duplicated chromosomal segment or somatic mutation, and are documented at TPOX, D18S51, vWA and other loci. They should be reported as observed and checked by re-amplification."
  },
  {
    id: 23,
    question: "In a two-person mixture, one contributor's alleles are consistently about four times the height of the other's at every locus. This pattern allows",
    options: ["Exclusion of both contributors", "Proof that the profile is single-source", "Determination of the body fluid", "Separation of the profile into major and minor contributor genotypes"],
    answer: 3,
    explanation: "When the mixture ratio is clearly unbalanced and fairly constant across loci, the taller peaks can often be assigned to a major contributor and the lower ones to a minor contributor. Probabilistic genotyping software such as STRmix or TrueAllele uses peak heights in this way, even for complex mixtures."
  },
  {
    id: 24,
    question: "Y-STR typing has particular value in intimate-sample casework because it",
    options: ["Amplifies only male DNA, so a male haplotype can be read even when female DNA is in large excess", "Gives a unique profile for every man, including brothers", "Requires no amplification step", "Identifies which body fluid is present"],
    answer: 0,
    explanation: "Y-STR primers target the male-specific region of the Y chromosome and do not amplify female DNA, so the male component is not masked at high female-to-male ratios. The trade-off is that the Y is non-recombining, so all males in a paternal line share the haplotype."
  },
  {
    id: 25,
    question: "A key limitation of Y-STR evidence is that",
    options: ["It cannot be obtained from semen", "All patrilineal male relatives share the same haplotype, so individualisation is impossible", "It needs at least 100 ng of DNA", "Y-STR loci are not polymorphic"],
    answer: 1,
    explanation: "Because the male-specific region does not recombine, a father, his sons, brothers and paternal uncles normally carry an identical haplotype apart from occasional mutation. A Y-STR match therefore identifies a paternal lineage, not a person. Frequencies are estimated by counting in databases such as YHRD."
  },
  {
    id: 26,
    question: "The Y-STR locus DYS385 characteristically gives two peaks in a single male because it is",
    options: ["A duplicated (multi-copy) locus with a and b copies", "Located in the pseudoautosomal region", "Always heterozygous like an autosomal locus", "Prone to pull-up"],
    answer: 0,
    explanation: "DYS385a/b exists as two copies amplified by one primer pair, so two alleles are normally reported, written as the lower value first. DYS389I/II and the multi-copy DYS464 behave similarly. Elsewhere, two peaks at a single-copy Y locus would suggest a mixture of two males."
  },
  {
    id: 27,
    question: "The Y-chromosome haplotype reference database used to estimate Y-STR haplotype frequencies is",
    options: ["EMPOP", "CODIS", "YHRD", "NDNAD"],
    answer: 2,
    explanation: "YHRD, based in Berlin, holds Y-STR haplotypes from populations worldwide and reports observed counts and confidence intervals. EMPOP is the equivalent for mtDNA, CODIS is the US STR database system and NDNAD is the UK national DNA database."
  },
  {
    id: 28,
    question: "X-STR markers are particularly useful for which kinship question?",
    options: ["Distinguishing two brothers from each other", "Deficiency paternity cases involving a daughter, such as testing an alleged paternal grandmother against the girl", "Determining whether a stain is of male origin", "Confirming a maternal lineage over many generations"],
    answer: 1,
    explanation: "A father transmits his single X to every daughter unchanged apart from recombination, so a girl's paternal X must match her father's X. X-STRs can therefore link a girl to paternal female relatives when the father is unavailable. They are less informative for father-son pairs, who share no X."
  },
  {
    id: 29,
    question: "Mini-STRs were developed for degraded samples because they",
    options: ["Use pentanucleotide repeats only", "Place primers closer to the repeat region, giving amplicons of about 50–150 bp", "Amplify the entire chromosome arm", "Need no allelic ladder"],
    answer: 1,
    explanation: "Degraded DNA is fragmented, so fewer intact templates span long amplicons. Moving the primers inward shortens the product and improves recovery of the larger loci. The MiniFiler kit and the NC01/NC02 'new CODIS' mini-STR loci (e.g. D10S1248, D22S1045) came out of this work."
  },
  {
    id: 30,
    question: "An STR profile from charred bone shows good peaks at loci under 200 bp but nothing above 300 bp. The pattern indicates",
    options: ["A mixture of three contributors", "Pull-up across all channels", "Degraded DNA, in which long amplicons fail first", "Saturation of the detector"],
    answer: 2,
    explanation: "Fragmentation by heat, moisture, microbes or UV cuts the template, so long targets lose intact templates first. The resulting 'ski-slope' profile may be improved with mini-STRs, more template, or SNP or mtDNA approaches. The degradation index from quantification gives the same warning before amplification."
  },
  {
    id: 31,
    question: "An allele is sized 1.8 bp larger than ladder allele 15 at a locus with a 4-bp repeat and is reproducible. It should be designated",
    options: ["Allele 16", "Allele 15.1", "Allele 15.2", "Allele 17"],
    answer: 2,
    explanation: "A reproducible off-ladder peak between consecutive alleles is a microvariant, named by the complete repeats plus the number of extra bases. Two extra bases beyond allele 15 makes 15.2. Such variants should be confirmed by re-injection and ideally by sequencing."
  },
  {
    id: 32,
    question: "A reference sample typed with two different STR kits shows allele 18 only at one locus with the first kit, but 18,21 with the second. The most likely cause is",
    options: ["A primer-binding-site mutation causing allele drop-out in the first kit", "Stutter in the second kit", "A tri-allelic pattern", "Contamination of the second kit"],
    answer: 0,
    explanation: "A point mutation under a primer can stop one allele amplifying, giving a false homozygote. Kits with different primer positions for the same locus then disagree. Such discordances are documented between commercial kits and matter for database matching."
  },
  {
    id: 33,
    question: "Identity-informative SNPs are attractive for very degraded samples mainly because",
    options: ["They are more polymorphic than STRs locus for locus", "They can be typed in amplicons shorter than 100 bp", "They show no population substructure", "They need no reference database"],
    answer: 1,
    explanation: "A SNP needs only enough sequence to cover a single base, so very short amplicons suffice. Each SNP is biallelic and so far less informative than an STR, so about 50 or more must be typed to approach STR discrimination. SNPs are also poor for mixture detection."
  },
  {
    id: 34,
    question: "Ancestry-informative markers (AIMs) differ from identity SNPs in that they are chosen for",
    options: ["Low heterozygosity within every population", "Very high mutation rates", "Location within coding exons only", "Large frequency differences between population groups"],
    answer: 3,
    explanation: "AIMs have widely different allele frequencies between continental groups, so a panel can estimate biogeographic ancestry. Identity SNPs are chosen for the opposite property, similar frequencies everywhere, so that match probabilities are stable across populations."
  },
  {
    id: 35,
    question: "The HIrisPlex-S system predicts which characteristics from DNA?",
    options: ["Eye, hair and skin colour", "Stature and body mass", "Age at death and sex", "Geographic ancestry only"],
    answer: 0,
    explanation: "HIrisPlex-S uses phenotype-informative SNPs in genes such as HERC2/OCA2, MC1R and SLC24A5 to predict eye, hair and skin pigmentation. This is forensic DNA phenotyping, used for investigative leads rather than identification, and its predictions are probabilistic, not certain."
  },
  {
    id: 36,
    question: "Single-strand conformation polymorphism (SSCP) analysis detects sequence variation because",
    options: ["Mutations alter the fluorescence of the DNA", "Restriction enzymes cut mutant DNA only", "Mutant DNA has a different molecular weight", "Single-stranded DNA fragments of the same length fold into different shapes and so migrate differently in a non-denaturing gel"],
    answer: 3,
    explanation: "Orita and colleagues (1989) showed that heat-denatured PCR products adopt sequence-dependent secondary structures. In a native polyacrylamide gel, a conformer carrying even a single base change moves at a different rate. The method screens for unknown mutations but does not say what the change is."
  },
  {
    id: 37,
    question: "Which factor most strongly limits the sensitivity of SSCP?",
    options: ["It needs radioactive labels", "It requires single-base sequencing after every run", "It cannot be combined with PCR", "It works best for fragments under about 200–300 bp, and some changes do not alter conformation"],
    answer: 3,
    explanation: "Detection rates are high for short fragments and fall as length increases, so long targets are split into pieces. A few substitutions leave the folded shape essentially unchanged and are missed. Results also depend on gel temperature, cross-linking and buffer, so conditions must be controlled carefully."
  },
  {
    id: 38,
    question: "In denaturing gradient gel electrophoresis (DGGE), fragments are separated according to",
    options: ["Their total length only", "Their net electrical charge", "The point in a gradient of denaturant at which they partially melt, which depends on sequence", "Their affinity for a specific probe"],
    answer: 2,
    explanation: "A gel contains an increasing gradient of urea and formamide. As a fragment migrates it reaches a position where its lowest-melting domain opens into a branched structure, and migration almost stops. A single base change shifts that melting point, separating variants of identical length."
  },
  {
    id: 39,
    question: "A GC-rich 'GC clamp' of about 40 bases is added to one primer in DGGE in order to",
    options: ["Raise the amplification efficiency", "Keep one end of the fragment double-stranded so it does not melt completely and run off the gel", "Label the product for detection", "Create a restriction site for digestion"],
    answer: 1,
    explanation: "Without a clamp, a fragment can melt into fully separated single strands, which migrate unpredictably and lose resolution. The high-melting GC tail stays paired, holding the partially melted molecule together as a branched form whose mobility reflects the melting of the rest."
  },
  {
    id: 40,
    question: "TGGE differs from DGGE in that the gradient applied across the gel is one of",
    options: ["Temperature rather than chemical denaturant", "pH rather than urea", "Voltage rather than urea", "Acrylamide concentration rather than urea"],
    answer: 0,
    explanation: "Temperature gradient gel electrophoresis uses a linear temperature gradient to melt fragments, with urea at a constant concentration. The physical principle is the same as DGGE, and temperature gradients are easier to control reproducibly than chemical ones."
  },
  {
    id: 41,
    question: "Heteroduplex analysis detects heterozygosity because a heteroduplex formed between a normal and a mutant strand",
    options: ["Cannot be amplified by PCR", "Is cut by Taq polymerase", "Contains a mismatch bubble that slows its migration in a gel relative to homoduplexes", "Fluoresces at a different wavelength"],
    answer: 2,
    explanation: "When a heterozygote's PCR products are denatured and reannealed, mismatched heteroduplexes form alongside the two homoduplexes. The mismatch distorts the helix and retards migration, giving extra bands. The technique is often used with SSCP or DGGE to raise detection rates."
  },
  {
    id: 42,
    question: "Alec Jeffreys's 1984 discovery that launched DNA fingerprinting was based on hybridisation probes that detected",
    options: ["Tetranucleotide STRs", "Mitochondrial HV1 sequences", "Single nucleotide polymorphisms", "Minisatellite (VNTR) core-sequence repeats at many loci at once"],
    answer: 3,
    explanation: "Jeffreys found that minisatellites share a short core sequence, so a probe against it revealed many hypervariable loci in one Southern blot. The resulting bar-code like pattern was individual-specific, which is why he coined the term 'DNA fingerprint'. This multi-locus probe method was later replaced by single-locus probes and then by PCR-based STRs."
  },
  {
    id: 43,
    question: "The first criminal case solved using DNA evidence, the 1983 and 1986 murders of two schoolgirls in the Narborough area of Leicestershire, led to the conviction of Colin Pitchfork in 1988 and is notable because DNA",
    options: ["First exonerated an innocent suspect, Richard Buckland, before identifying the offender", "Was used without any reference samples", "Identified the victims rather than the offender", "Was typed by Y-STR analysis"],
    answer: 0,
    explanation: "Jeffreys's testing cleared Buckland, who had confessed to one murder, and a mass screening of local men eventually identified Pitchfork. The case shows DNA evidence both excluding and including suspects, and it established the exclusionary value of the technique."
  },
  {
    id: 44,
    question: "RFLP analysis of VNTRs has been replaced by PCR-based STR typing in forensic work mainly because RFLP",
    options: ["Could not discriminate between individuals", "Needed several micrograms of undegraded high-molecular-weight DNA and took weeks", "Required a Y-chromosome reference database", "Could not be used on blood"],
    answer: 1,
    explanation: "Restriction digestion and Southern hybridisation needed large amounts of intact DNA, which crime-scene samples rarely give, and results took weeks. Band sizes were continuous, so matching used measurement windows and binning rather than discrete alleles. STR typing works on nanogram or picogram amounts, is faster, gives discrete alleles and is easy to database."
  },
  {
    id: 45,
    question: "In the Southern blotting procedure used for RFLP typing, DNA fragments separated in an agarose gel are",
    options: ["Stained with silver and photographed", "Transferred to a nylon or nitrocellulose membrane and hybridised with a labelled probe", "Digested a second time with the same enzyme", "Sequenced directly in the gel"],
    answer: 1,
    explanation: "After digestion and electrophoresis, the DNA is denatured and blotted onto a membrane, fixed, then hybridised to a radiolabelled or chemiluminescent probe and visualised by autoradiography. Southern blotting transfers DNA, northern blotting RNA and western blotting proteins."
  },
  {
    id: 46,
    question: "Which enzyme was commonly used to digest genomic DNA in forensic VNTR RFLP analysis?",
    options: ["HaeIII", "Taq polymerase", "Proteinase K", "Terminal transferase"],
    answer: 0,
    explanation: "HaeIII, a frequent-cutter recognising GG^CC, was the standard restriction enzyme in forensic RFLP, with HinfI also used. Cutting outside the repeat region leaves whole VNTR arrays intact, so fragment length reflects repeat number. Proteinase K and polymerases are not restriction enzymes."
  },
  {
    id: 47,
    question: "SSCP and DGGE rely on different physical principles, but they share which feature?",
    options: ["They determine the exact identity of the sequence change", "They require capillary electrophoresis", "They are mutation-screening methods that need confirmatory sequencing", "They can only be used on mitochondrial DNA"],
    answer: 2,
    explanation: "SSCP and DGGE show that a fragment differs from the reference, through altered mobility, but not what the change is. Bands of interest are therefore excised or re-amplified and sequenced. Both were widely used before direct sequencing became cheap."
  },
  {
    id: 48,
    question: "In STR analysis, the practice of comparing a sample peak with the allelic ladder within a window of about ±0.5 bp exists because",
    options: ["Capillary electrophoresis cannot resolve fragments of different length", "Alleles differ by only 0.5 bp", "Sizing is precise but not perfectly accurate, so small run-to-run shifts must be tolerated", "Stutter peaks fall exactly 0.5 bp away"],
    answer: 2,
    explanation: "Measured sizes vary slightly between injections because of mobility differences from sequence composition, temperature and polymer condition. Precision within a run is high (typically under 0.15 bp), so a narrow window accommodates the drift while still flagging genuine microvariants as off-ladder."
  },
  {
    id: 49,
    question: "A pentanucleotide STR such as Penta D or Penta E is attractive in a multiplex because",
    options: ["Longer repeat units reduce stutter further, aiding mixture interpretation", "They are located on the Y chromosome", "They have only two alleles each", "They cannot be amplified from degraded DNA"],
    answer: 0,
    explanation: "Slippage is less frequent with longer repeat units, so pentanucleotide loci show very little stutter and extra peaks are easier to attribute to a second contributor. Penta E (chromosome 15) and Penta D (chromosome 21) are not CODIS core loci, so they add independent information to Promega PowerPlex kits."
  },
  {
    id: 50,
    question: "Which observation in a single-source profile should be reported as an artefact rather than an allele?",
    options: ["An off-ladder peak reproducible on two injections", "A peak at the −A position one base below the main peak after a short final extension", "Three alleles seen at two separate loci", "An allele shared with the allelic ladder"],
    answer: 1,
    explanation: "Incomplete non-templated adenylation leaves a minus-A shoulder one base below the true (+A) peak, and it is removed by extending the final 60°C hold. Reproducible off-ladder peaks are genuine microvariants, and extra alleles at several loci point to a mixture, not an artefact."
  }
];

export default questions;
