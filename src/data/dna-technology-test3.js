const questions = [
  {
    id: 1,
    question: "The polymerase chain reaction was devised in 1983 by",
    options: ["Frederick Sanger", "Alec Jeffreys", "Kary Mullis", "Edwin Southern"],
    answer: 2,
    explanation: "Kary Mullis developed PCR at Cetus Corporation in 1983 and shared the 1993 Nobel Prize in Chemistry. Sanger developed dideoxy sequencing, Jeffreys developed DNA fingerprinting and Southern developed the Southern blot."
  },
  {
    id: 2,
    question: "The correct order of steps in each PCR cycle is",
    options: ["Annealing → denaturation → extension", "Denaturation → annealing → extension", "Extension → annealing → denaturation", "Denaturation → extension → annealing"],
    answer: 1,
    explanation: "Each cycle starts with denaturation (about 94–96°C) to separate the strands. Primers then anneal to their complementary sequences (typically about 50–65°C), and the polymerase extends them at about 72°C. Repeating the cycle doubles the target each time."
  },
  {
    id: 3,
    question: "The extension step of PCR using Taq polymerase is normally carried out at about",
    options: ["37°C", "55°C", "94°C", "72°C"],
    answer: 3,
    explanation: "Taq polymerase is most active at about 72–75°C, adding roughly 1000 nucleotides per minute. 94°C is used to denature, and the annealing temperature is chosen according to the primers' melting temperature."
  },
  {
    id: 4,
    question: "Taq polymerase is obtained from Thermus aquaticus, a bacterium first isolated from",
    options: ["Hot springs in Yellowstone National Park", "Deep-sea hydrothermal vents", "Antarctic ice cores", "Salt lakes of the Dead Sea"],
    answer: 0,
    explanation: "Thomas Brock and Hudson Freeze described T. aquaticus from Yellowstone hot springs in 1969. Its polymerase survives repeated heating to 95°C, so it need not be replenished each cycle, which made automated PCR practical."
  },
  {
    id: 5,
    question: "Which property of Taq polymerase makes it unable to correct misincorporated bases?",
    options: ["It lacks 5′→3′ polymerase activity", "It lacks 5′→3′ exonuclease activity", "It lacks 3′→5′ exonuclease (proofreading) activity", "It requires RNA primers"],
    answer: 2,
    explanation: "Taq has 5′→3′ polymerase and 5′→3′ exonuclease activity but no 3′→5′ proofreading exonuclease, giving an error rate of roughly 1 in 10⁴–10⁵ bases. Proofreading enzymes such as Pfu are more accurate. The lack of proofreading is also what makes allele-specific (ARMS) PCR possible."
  },
  {
    id: 6,
    question: "Taq polymerase often adds an extra non-templated nucleotide to the 3′ end of PCR products. That nucleotide is usually",
    options: ["Adenine", "Thymine", "Cytosine", "Guanine"],
    answer: 0,
    explanation: "Taq tends to add a single adenine to the 3′ end (non-template addition or adenylation). Incomplete addition produces split '−A/+A' peaks one base apart. STR kits therefore end with a long final extension at about 60°C to drive products to the fully adenylated (+A) form."
  },
  {
    id: 7,
    question: "AmpliTaq Gold, used in forensic STR kits, needs an initial incubation at about 95°C for 10–11 minutes because it",
    options: ["Has to be denatured before it can bind primers", "Is a chemically modified hot-start enzyme that becomes active only after heating", "Must first remove uracil from contaminating DNA", "Must copy RNA into cDNA"],
    answer: 1,
    explanation: "AmpliTaq Gold is chemically blocked and is activated by a prolonged high-temperature step. Because it is inactive while reactions are set up at room temperature, it cannot extend primers that bind non-specifically or to each other. This hot-start feature reduces mispriming and primer-dimers."
  },
  {
    id: 8,
    question: "Using the Wallace rule, Tm = 2(A+T) + 4(G+C), what is the approximate melting temperature of a 20-nucleotide primer containing 9 G/C and 11 A/T bases?",
    options: ["58°C", "62°C", "52°C", "80°C"],
    answer: 0,
    explanation: "Tm = 2 × 11 + 4 × 9 = 22 + 36 = 58°C. The annealing temperature is usually set a few degrees below the Tm of the primer pair. G/C pairs add more because they have three hydrogen bonds against two for A/T."
  },
  {
    id: 9,
    question: "Which feature is generally recommended in PCR primer design?",
    options: ["Strong complementarity between the forward and reverse primers", "A length of 5–8 nucleotides", "A GC content of about 40–60% with no long self-complementary stretches", "Several consecutive G or C bases at the very 3′ end"],
    answer: 2,
    explanation: "Good primers are about 18–25 nucleotides long with 40–60% GC and matched Tm values. They should not be complementary to each other or to themselves, which causes primer-dimers and hairpins. A single G or C 'clamp' at the 3′ end helps, but a run of several can cause mispriming."
  },
  {
    id: 10,
    question: "Magnesium ions are essential in a PCR mix because they",
    options: ["Serve as a cofactor for DNA polymerase activity", "Denature the template DNA", "Prevent primer annealing", "Inhibit non-specific nucleases"],
    answer: 0,
    explanation: "Mg²⁺ is required for polymerase catalysis and stabilises primer-template binding, typically at 1.5–2.5 mM. Too little gives low yield. Too much stabilises mismatched primers, giving non-specific products. EDTA or other chelating inhibitors can starve the reaction of Mg²⁺."
  },
  {
    id: 11,
    question: "Starting with 100 copies of a target sequence, how many copies would be present after 10 cycles of PCR at 100% efficiency?",
    options: ["1,000", "2,000", "10,240", "102,400"],
    answer: 3,
    explanation: "At 100% efficiency the target doubles every cycle: N = N₀ × 2ⁿ = 100 × 2¹⁰ = 100 × 1024 = 102,400. In practice efficiency is a little below 100%, and amplification eventually plateaus."
  },
  {
    id: 12,
    question: "After 30 cycles of ideal PCR, a single starting double-stranded target would be amplified approximately",
    options: ["Ten thousand-fold", "One billion-fold", "Thirty-fold", "One million-fold"],
    answer: 1,
    explanation: "2³⁰ ≈ 1.07 × 10⁹, about a billion copies. This exponential amplification is why PCR can type DNA from a few cells, and also why tiny amounts of contamination or carried-over product can be detected."
  },
  {
    id: 13,
    question: "PCR products of exactly the length defined by the two primers (the 'short product') first appear at the end of which cycle?",
    options: ["Cycle 1", "Cycle 2", "Cycle 3", "Cycle 5"],
    answer: 2,
    explanation: "In cycles 1 and 2 the newly made strands are longer than the target because one end is undefined. Double-stranded products bounded by both primers first appear at the end of cycle 3. After that they increase exponentially and soon outnumber all other products."
  },
  {
    id: 14,
    question: "After many cycles the PCR reaches a plateau and product no longer accumulates exponentially. Which is NOT a cause of the plateau?",
    options: ["Depletion of primers and dNTPs", "Gradual loss of polymerase activity", "Re-annealing of abundant product strands competing with primer binding", "Using up of the original genomic template molecules"],
    answer: 3,
    explanation: "The plateau results from running out of reagents, loss of enzyme activity, build-up of pyrophosphate and inhibitors, and product strands re-annealing to each other instead of to primers. The original template is never consumed: it is copied each cycle and remains available, so its 'depletion' cannot cause the plateau."
  },
  {
    id: 15,
    question: "In forensic PCR, a positive control containing a known DNA standard (such as 9947A or 2800M) is amplified to",
    options: ["Detect contamination of PCR reagents", "Show that the reagents, thermal cycler and detection system produce the expected genotype", "Quantify the DNA in each sample", "Act as the allelic ladder for genotyping"],
    answer: 1,
    explanation: "The positive control has a known profile. If it amplifies correctly, the PCR worked, so a failure in a sample is likely due to the sample (low template or inhibition). Contamination is monitored by negative controls, and allele calls rely on the allelic ladder."
  },
  {
    id: 16,
    question: "An extraction reagent blank shows a partial STR profile while the amplification negative control (no template) is clean. Contamination most likely occurred",
    options: ["During capillary electrophoresis", "In the PCR master mix", "During the extraction step", "In the allelic ladder"],
    answer: 2,
    explanation: "The reagent blank contains all the extraction reagents but no sample and goes through the whole process. The amplification negative tests only the PCR reagents. A contaminated reagent blank alongside a clean amplification negative points to the extraction reagents, consumables or handling."
  },
  {
    id: 17,
    question: "Which measure best prevents contamination of new samples by amplified DNA from earlier reactions?",
    options: ["Using a higher annealing temperature", "Adding more Mg²⁺ to the reaction", "Increasing the number of PCR cycles", "Separating pre-PCR and post-PCR work areas with a one-way workflow"],
    answer: 3,
    explanation: "PCR product carry-over is the most serious contamination risk because amplicons are present at billions of copies. Labs physically separate extraction and set-up from amplification and analysis, with dedicated equipment and coats and staff moving only from clean to dirty areas. Filter tips, UV treatment and bleach cleaning add protection."
  },
  {
    id: 18,
    question: "The dUTP/uracil-N-glycosylase (UNG) system controls PCR carry-over contamination by",
    options: ["Destroying uracil-containing products of earlier PCRs before the new reaction starts", "Making Taq polymerase heat stable", "Preventing primer-dimer formation", "Removing human DNA from reagents"],
    answer: 0,
    explanation: "If dTTP is replaced by dUTP, all amplicons contain uracil. Before each new PCR, UNG removes uracil bases from any contaminating amplicons, which then break at the abasic sites during heating. Natural template DNA contains thymine and is unaffected."
  },
  {
    id: 19,
    question: "A laboratory keeps a staff elimination database of the DNA profiles of its analysts, police scene officers and cleaners mainly to",
    options: ["Calculate the random match probability", "Identify contamination of evidence by personnel", "Provide a positive control for every run", "Satisfy the requirement for an allelic ladder"],
    answer: 1,
    explanation: "Highly sensitive PCR can detect DNA shed by those handling evidence. An elimination database lets unexpected profiles be checked quickly against staff, so contamination is recognised and not mistaken for an unknown suspect."
  },
  {
    id: 20,
    question: "Multiplex PCR is best defined as",
    options: ["Repeating the same PCR many times on one sample", "Two successive rounds of PCR with nested primers", "Simultaneous amplification of several target loci in one tube with several primer pairs", "PCR performed with several different polymerases"],
    answer: 2,
    explanation: "Multiplexing amplifies many loci at once, which saves sample, time and cost. All the primers must work under one set of conditions, have similar Tm values and not interact. Commercial STR kits co-amplify 16–24 or more loci in one reaction."
  },
  {
    id: 21,
    question: "In a fluorescent STR multiplex, two loci whose amplicons fall in the same size range can still be distinguished because",
    options: ["Their primers are labelled with different fluorescent dyes", "They are amplified in separate tubes", "One is detected by UV absorbance", "Their products are digested with different restriction enzymes"],
    answer: 0,
    explanation: "Multiplex design combines size separation with spectral separation. Loci that overlap in size are labelled with different dyes (e.g. 6-FAM, VIC, NED, PET), and a separate dye (e.g. LIZ) is reserved for the internal size standard. The detector separates the colours."
  },
  {
    id: 22,
    question: "A major practical challenge in designing a large multiplex PCR is",
    options: ["Taq cannot amplify more than one locus at a time", "Primers can interact with each other and compete for reagents, unbalancing amplification", "Only dinucleotide repeats can be multiplexed", "Each locus needs a different cycling programme"],
    answer: 1,
    explanation: "With dozens of primers in one tube, primer-dimers, mispriming and competition for dNTPs, Mg²⁺ and enzyme can make some loci amplify much better than others. Primer concentrations and buffer are carefully optimised to balance peak heights across loci."
  },
  {
    id: 23,
    question: "The first PCR-based DNA typing system widely used in forensic casework, in the early 1990s, analysed",
    options: ["The CODIS 13 STR loci", "Mitochondrial HV1 by pyrosequencing", "Y-chromosome SNPs by microarray", "HLA-DQα (DQA1) by reverse dot blot"],
    answer: 3,
    explanation: "Cetus/Roche's AmpliType HLA-DQα kit amplified the DQA1 gene and detected alleles by reverse dot-blot hybridisation with allele-specific probes. It was later combined with the Polymarker loci. STR multiplexes replaced these systems later in the 1990s."
  },
  {
    id: 24,
    question: "In real-time (quantitative) PCR, the threshold cycle (Ct) is",
    options: ["The cycle at which fluorescence first rises above a set threshold, and it is inversely related to the log of starting template quantity", "The last cycle of the PCR programme", "The cycle at which the reaction reaches its plateau", "The number of cycles needed to denature all template"],
    answer: 0,
    explanation: "Fluorescence is measured every cycle. The more template present at the start, the sooner the signal crosses the threshold, giving a lower Ct. Quantification uses the exponential phase, where the relation between Ct and log quantity is linear, not the plateau."
  },
  {
    id: 25,
    question: "Sample X has a Ct of 24 and sample Y a Ct of 27 in the same qPCR assay running at about 100% efficiency. Compared with sample Y, sample X contains roughly",
    options: ["One-eighth as much template", "Three times as much template", "Eight times as much template", "The same amount of template"],
    answer: 2,
    explanation: "At 100% efficiency each cycle doubles the product, so a difference of 3 cycles means 2³ = 8-fold. The lower Ct (sample X) has more template. A difference of about 3.3 cycles corresponds to a 10-fold difference."
  },
  {
    id: 26,
    question: "SYBR Green I is used as a detection chemistry in real-time PCR. A major limitation of SYBR Green is that it",
    options: ["Needs a separate probe for each target", "Is degraded by Taq's 5′ exonuclease", "Binds only single-stranded DNA", "Binds any double-stranded DNA, so primer-dimers and non-specific products also give signal"],
    answer: 3,
    explanation: "SYBR Green fluoresces strongly when bound in the minor groove of any dsDNA. It is cheap and needs no probe, but it cannot tell specific from non-specific products. A melt (dissociation) curve after the run checks that a single product with the expected Tm was formed."
  },
  {
    id: 27,
    question: "In a TaqMan (5′ nuclease) real-time PCR assay, fluorescence increases because",
    options: ["The probe intercalates between DNA bases", "Taq's 5′→3′ exonuclease cleaves the hybridised probe, separating the reporter dye from the quencher", "The quencher fluoresces once bound to DNA", "The primers are labelled and emit light on annealing"],
    answer: 1,
    explanation: "A TaqMan probe carries a 5′ reporter (e.g. FAM) and a 3′ quencher, and while intact the quencher absorbs the reporter's energy (FRET). As Taq extends the primer it degrades the bound probe, freeing the reporter, so fluorescence rises in proportion to the amount of specific product. Forensic quantification kits use this chemistry."
  },
  {
    id: 28,
    question: "A qPCR standard curve has a slope of −3.32. The amplification efficiency is approximately",
    options: ["100%", "90%", "50%", "33%"],
    answer: 0,
    explanation: "Efficiency E = 10^(−1/slope) − 1 = 10^(1/3.32) − 1 ≈ 2 − 1 = 1, i.e. 100%. Slopes between about −3.1 and −3.6 (90–110% efficiency) are generally acceptable. A slope of about −3.6 indicates efficiency near 90%."
  },
  {
    id: 29,
    question: "A qPCR standard curve follows Ct = −3.3 log₁₀(Q) + 28, where Q is DNA concentration in ng/µL. A sample with a Ct of 31.3 has a concentration of about",
    options: ["10 ng/µL", "1 ng/µL", "0.01 ng/µL", "0.1 ng/µL"],
    answer: 3,
    explanation: "31.3 = −3.3 log Q + 28, so −3.3 log Q = 3.3 and log Q = −1, giving Q = 0.1 ng/µL. A higher Ct than the intercept means less than 1 ng/µL of template."
  },
  {
    id: 30,
    question: "The correlation coefficient (R²) of a qPCR standard curve is checked because it shows",
    options: ["The amount of PCR inhibition in each sample", "The melting temperature of the product", "How closely the standards fit a straight line, indicating the precision of the dilution series", "The sex of the DNA donor"],
    answer: 2,
    explanation: "An R² close to 1 (typically ≥ 0.98–0.99) means the standards lie on a straight line of Ct against log quantity, so unknowns can be read off reliably. Poor R² suggests pipetting errors or degraded standards. Inhibition is judged from the internal positive control."
  },
  {
    id: 31,
    question: "'RT-PCR' in molecular biology properly refers to",
    options: ["Room-temperature PCR", "Reverse transcription of RNA into cDNA followed by PCR", "Rapid thermal PCR", "Restriction-tagged PCR"],
    answer: 1,
    explanation: "Reverse transcriptase, an RNA-dependent DNA polymerase from retroviruses such as MMLV or AMV, first copies RNA into cDNA, which is then amplified. It is used to detect RNA viruses and mRNA. 'qPCR' is the preferred abbreviation for real-time PCR to avoid confusion."
  },
  {
    id: 32,
    question: "Forensic body-fluid identification by RT-PCR relies on detecting tissue-specific mRNA. Which marker pairing is correct?",
    options: ["Protamine (PRM1/PRM2) mRNA for semen", "Statherin (STATH) mRNA for blood", "Haemoglobin beta (HBB) mRNA for saliva", "Mucin 4 (MUC4) mRNA for semen"],
    answer: 0,
    explanation: "Protamine and transglutaminase-4/KLK3 transcripts indicate semen. HBB and ALAS2 indicate blood, STATH and HTN3 indicate saliva, and MUC4 indicates vaginal secretion. mRNA profiling can identify several body fluids in one test, alongside DNA from the same stain."
  },
  {
    id: 33,
    question: "In an RT-PCR assay, a 'no-RT' control (all reagents except reverse transcriptase) is included to",
    options: ["Check that the primers anneal", "Calibrate the size standard", "Measure RNA concentration", "Detect amplification from contaminating genomic DNA"],
    answer: 3,
    explanation: "Without reverse transcriptase no cDNA can form, so any product in the no-RT control must come from DNA template. Designing primers that span exon-exon junctions and treating samples with DNase are further safeguards."
  },
  {
    id: 34,
    question: "The ARMS (amplification refractory mutation system) technique distinguishes two alleles because",
    options: ["Taq polymerase extends a primer efficiently only when its 3′-terminal base matches the template", "Each allele is cut by a different restriction enzyme", "Probes bind only to single-stranded DNA", "The alleles differ in length by one repeat unit"],
    answer: 0,
    explanation: "In allele-specific PCR the primer's 3′ end sits on the variant base. A mismatch at the 3′ terminus is extended very poorly because Taq cannot proofread, so a product appears only from the matching allele. An extra deliberate mismatch near the 3′ end often sharpens the discrimination."
  },
  {
    id: 35,
    question: "To genotype a known point mutation by ARMS, a laboratory runs two parallel reactions with a common reverse primer and either a normal-specific or a mutant-specific forward primer. A product appears in both reactions. The individual is",
    options: ["Homozygous normal", "Homozygous mutant", "Heterozygous", "Untypable"],
    answer: 2,
    explanation: "A product with the normal-specific primer shows a normal allele, and a product with the mutant-specific primer shows a mutant allele. Both together mean heterozygosity. An internal control amplicon is usually included to show that a missing band is a true negative and not a PCR failure."
  },
  {
    id: 36,
    question: "Nested PCR improves sensitivity and specificity by",
    options: ["Using a single primer at very high concentration", "Amplifying RNA directly without cDNA", "Running two PCRs simultaneously in one tube with different dyes", "A second round of PCR using primers that bind inside the first-round product"],
    answer: 3,
    explanation: "The first-round product is used as template for a second PCR with inner (nested) primers. Non-specific products from round one are unlikely to contain both inner primer sites, so specificity rises, and the extra cycles raise sensitivity. Opening tubes between rounds, however, greatly increases contamination risk."
  },
  {
    id: 37,
    question: "The main drawback of nested PCR in a forensic laboratory is",
    options: ["Reduced sensitivity", "A high risk of contamination when first-round products are transferred to a second tube", "An inability to amplify human DNA", "The need for radioactive labels"],
    answer: 1,
    explanation: "Moving highly concentrated first-round amplicons into a new reaction creates aerosols and carry-over risk. Single-tube designs and strict separation of areas reduce this, but nested PCR is used cautiously in casework."
  },
  {
    id: 38,
    question: "Low copy number (LCN) DNA typing, as developed by the UK Forensic Science Service, increased sensitivity mainly by",
    options: ["Raising the number of PCR cycles from about 28 to 34", "Using radioactive primers", "Replacing Taq with a proofreading polymerase", "Using phenol-chloroform instead of Chelex extraction"],
    answer: 0,
    explanation: "LCN amplified templates below about 100–200 pg using about 34 cycles instead of the standard 28. Gill and colleagues (2000) required replicate amplifications and reported only alleles seen in at least two replicates (a consensus profile), because the extra cycles worsen stochastic effects."
  },
  {
    id: 39,
    question: "Why are replicate amplifications and consensus profiles recommended for low-template DNA?",
    options: ["To increase the DNA concentration of the extract", "Because Taq polymerase is inactive below 100 pg", "Because random sampling of few template molecules causes allele drop-out and drop-in that vary between replicates", "To remove stutter peaks completely"],
    answer: 2,
    explanation: "With only a few template copies, which alleles are sampled into the PCR is a matter of chance, and sporadic contaminant alleles can appear. Alleles that recur across independent replicates are more reliable, so a consensus profile reduces both false exclusions and false inclusions."
  },
  {
    id: 40,
    question: "The reliability of low copy number DNA evidence was strongly criticised by the judge in the 2007 trial arising from which incident?",
    options: ["The Lockerbie bombing", "The Omagh bombing", "The Enderby murders", "The 7/7 London bombings"],
    answer: 1,
    explanation: "In R v Hoey (2007), Justice Weir criticised the validation and interpretation of LCN DNA evidence in the Omagh bombing case, and LCN was briefly suspended in the UK. A later review (Caddy, 2008) found it robust if properly interpreted. The Enderby murders led to the first conviction using DNA fingerprinting."
  },
  {
    id: 41,
    question: "Bovine serum albumin (BSA) is added to some PCR mixes for forensic samples because it",
    options: ["Supplies extra magnesium", "Acts as a proofreading enzyme", "Prevents adenylation of products", "Binds inhibitors such as haematin, melanin and humic acid and stabilises the polymerase"],
    answer: 3,
    explanation: "BSA acts as a competitive target for many inhibitors and protects the polymerase, improving amplification of difficult samples. It does not replace good purification, but it is a simple additive in inhibitor-tolerant STR kits and qPCR."
  },
  {
    id: 42,
    question: "A partially inhibited sample typically shows which pattern in an STR electropherogram?",
    options: ["Uniformly high peaks at all loci", "Extra alleles at every locus", "Peaks that decline with increasing amplicon size, with larger loci weak or absent", "Peaks only in the size-standard channel"],
    answer: 2,
    explanation: "Inhibition, like degradation, often hits longer amplicons hardest, giving a downward 'ski-slope'. The quantification IPC helps tell them apart: a delayed or failed IPC suggests inhibition, while a high degradation index suggests fragmented DNA."
  },
  {
    id: 43,
    question: "Setting the annealing temperature much lower than the primers' Tm is most likely to cause",
    options: ["Non-specific amplification of unintended products", "Complete failure of the polymerase", "Denaturation of the primers", "Loss of magnesium from the buffer"],
    answer: 0,
    explanation: "At low annealing temperatures primers tolerate mismatches and bind to partly complementary sites, giving extra bands. An annealing temperature well above Tm stops primers binding at all and gives little or no product. Optimisation finds the highest temperature that still gives good yield."
  },
  {
    id: 44,
    question: "In a standard PCR, the two primers are designed so that they",
    options: ["Bind to the same strand, side by side", "Bind to opposite strands with their 3′ ends pointing towards each other across the target", "Bind to opposite strands with their 5′ ends facing each other", "Bind to RNA rather than DNA"],
    answer: 1,
    explanation: "The forward primer anneals to one strand and the reverse primer to the complementary strand, flanking the target. DNA polymerase extends only from a 3′-OH, so both primers extend inwards across the target. Each new strand then carries a binding site for the other primer, giving exponential amplification."
  },
  {
    id: 45,
    question: "Which component of a PCR provides the building blocks of the new DNA strands?",
    options: ["Primers", "Magnesium chloride", "Potassium chloride", "Deoxynucleoside triphosphates (dATP, dCTP, dGTP, dTTP)"],
    answer: 3,
    explanation: "dNTPs are incorporated by the polymerase, and cleavage of their pyrophosphate drives the reaction. They are usually present at about 200 µM each in equal amounts. Primers supply the 3′-OH starting point, while MgCl₂ and KCl provide cofactor and ionic strength."
  },
  {
    id: 46,
    question: "In real-time PCR, the threshold for calculating Ct should be set within the",
    options: ["Baseline phase, before amplification begins", "Plateau phase, where fluorescence is maximal", "Exponential phase, where product doubles reliably each cycle", "Melt curve region after cycling"],
    answer: 2,
    explanation: "During the exponential phase all reagents are in excess and efficiency is constant, so Ct relates directly to starting quantity. In the plateau phase, reactions with different starting amounts can end at similar fluorescence, which is why end-point PCR quantifies poorly."
  },
  {
    id: 47,
    question: "A forensic laboratory finds that its negative amplification control shows a peak at the amelogenin X position only. The correct response is to",
    options: ["Ignore it, as amelogenin peaks are always background", "Treat the batch as potentially contaminated, investigate and re-amplify according to the laboratory protocol", "Report the samples normally and note the peak", "Subtract the peak height from every sample"],
    answer: 1,
    explanation: "Any reproducible allele in a negative control means DNA entered the PCR reagents or set-up. Quality standards require that the run be assessed and the samples usually re-amplified, with the source investigated, for example against the staff elimination database."
  },
  {
    id: 48,
    question: "In touchdown PCR, the annealing temperature is",
    options: ["Started above the primers' Tm and lowered stepwise over the early cycles, so the first products formed are the most specific", "Kept constant at 37°C throughout the run", "Raised stepwise each cycle until it equals the denaturation temperature", "Omitted, with primers annealing during the extension step only"],
    answer: 0,
    explanation: "Touchdown PCR begins with an annealing temperature a few degrees above the expected Tm and lowers it by about 1°C per cycle. Only perfectly matched primer-template pairs form early, and these specific products then outcompete off-target products in later cycles at the lower temperature. It reduces non-specific bands without lengthy optimisation."
  },
  {
    id: 49,
    question: "Real-time PCR with SYBR Green produced a single Ct, but the melt curve shows two peaks, one at 78°C and one at 86°C. The most likely interpretation is",
    options: ["Two copies of the target gene in the genome", "Inhibition of the polymerase", "A degraded template", "A specific product plus a non-specific product or primer-dimer"],
    answer: 3,
    explanation: "Each dsDNA product melts at a Tm set by its length and GC content. A single specific product gives one sharp melt peak. A second peak, often lower in temperature from short primer-dimers, means part of the signal comes from unintended products, so quantification would be inflated."
  },
  {
    id: 50,
    question: "A key advantage of real-time PCR over end-point (conventional) PCR with gel detection for DNA quantification is that it",
    options: ["Requires no primers", "Measures product during the exponential phase in a closed tube, giving accurate quantification with less contamination risk", "Uses radioactive labels for higher sensitivity", "Gives longer amplicons"],
    answer: 1,
    explanation: "Real-time instruments read fluorescence through the sealed tube every cycle, so tubes need not be opened after amplification. This reduces amplicon contamination and allows quantification across a wide dynamic range. End-point gels measure the plateau and are only semi-quantitative."
  }
];

export default questions;
