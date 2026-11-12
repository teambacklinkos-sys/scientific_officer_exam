const questions = [
  {
    id: 1,
    question: "In organic (phenol-chloroform) extraction, after centrifugation the DNA is recovered from the",
    options: ["Lower organic phase", "White protein interface", "Upper aqueous phase", "Pellet at the bottom of the tube"],
    answer: 2,
    explanation: "Phenol-chloroform is denser than water and forms the lower organic phase, which holds lipids and denatured proteins. Proteins also collect at the interface. The hydrophilic DNA stays in the upper aqueous phase, which is transferred to a fresh tube and then precipitated with ethanol or concentrated by filtration."
  },
  {
    id: 2,
    question: "Isoamyl alcohol is added to the chloroform in a phenol:chloroform:isoamyl alcohol (25:24:1) mixture mainly to",
    options: ["Reduce foaming and help separate the phases", "Precipitate the DNA", "Inactivate proteinase K", "Chelate magnesium ions"],
    answer: 0,
    explanation: "Isoamyl alcohol acts as an anti-foaming agent and helps keep a sharp boundary between the aqueous and organic phases. Chloroform increases the density of the organic phase and removes residual phenol. DNA is later precipitated with ethanol or isopropanol in the presence of salt."
  },
  {
    id: 3,
    question: "In the lysis buffer used before organic extraction, the main role of proteinase K is to",
    options: ["Cut DNA at specific recognition sites", "Neutralise the negative charge on DNA", "Bind DNA to a silica surface", "Digest histones and nucleases to release and protect DNA"],
    answer: 3,
    explanation: "Proteinase K is a broad-specificity serine protease that stays active in SDS and EDTA, usually at about 56°C. It digests nuclear proteins (histones) and DNases, freeing DNA and protecting it from degradation. SDS lyses membranes and denatures proteins, and EDTA chelates Mg²⁺ needed by DNases."
  },
  {
    id: 4,
    question: "Why is DNA stored in TE buffer (Tris-EDTA) rather than in water for long-term storage?",
    options: ["EDTA increases the absorbance of DNA at 260 nm", "EDTA chelates Mg²⁺, inhibiting nucleases, while Tris keeps the pH stable", "Tris denatures DNA into single strands for easier PCR", "EDTA acts as a primer-binding enhancer"],
    answer: 1,
    explanation: "Most nucleases need divalent cations such as Mg²⁺. EDTA chelates them and so protects DNA, while Tris buffers the pH near 8 to prevent acid depurination. Low-EDTA TE (e.g. 0.1 mM) is often used for forensic extracts because too much EDTA can chelate the Mg²⁺ PCR needs."
  },
  {
    id: 5,
    question: "During ethanol precipitation of DNA, sodium acetate is added because the sodium ions",
    options: ["Neutralise the negatively charged phosphate backbone so DNA can aggregate", "Digest residual proteins", "Remove RNA from the sample", "Denature double-stranded DNA"],
    answer: 0,
    explanation: "Monovalent cations shield the phosphate charges, and ethanol lowers the dielectric constant so DNA comes out of solution. The pellet is washed with 70% ethanol to remove salt and then redissolved. Glycogen or linear acrylamide can be added as a carrier when DNA amounts are very small."
  },
  {
    id: 6,
    question: "A key limitation of phenol-chloroform extraction for forensic casework is that it",
    options: ["Produces only single-stranded DNA", "Cannot remove proteins", "Uses toxic reagents and several tube transfers that increase contamination risk", "Cannot be used on blood stains"],
    answer: 2,
    explanation: "Organic extraction gives high-molecular-weight double-stranded DNA of good purity, suitable even for RFLP. However, it is slow, uses hazardous phenol and chloroform, and needs several tube-to-tube transfers. Each transfer risks sample loss or cross-contamination, and the method is hard to automate."
  },
  {
    id: 7,
    question: "Chelex-100, widely used for rapid forensic DNA extraction, is",
    options: ["A silica gel that binds DNA in chaotropic salt", "A paramagnetic bead coated with streptavidin", "An anionic detergent that lyses cell membranes", "A styrene-divinylbenzene resin with iminodiacetate groups that chelates polyvalent metal ions"],
    answer: 3,
    explanation: "Chelex-100 is a chelating ion-exchange resin. During boiling it binds Mg²⁺ and other metal ions that would otherwise let nucleases degrade DNA at high temperature. Walsh and colleagues introduced it for forensic PCR in 1991."
  },
  {
    id: 8,
    question: "DNA extracted by the Chelex-100 boiling method is generally unsuitable for RFLP analysis because it",
    options: ["Is single-stranded after boiling", "Contains too much proteinase K", "Is bound irreversibly to the resin", "Has been cut by restriction enzymes in the resin"],
    answer: 0,
    explanation: "Boiling at 100°C in an alkaline Chelex suspension denatures DNA into single strands. RFLP needs double-stranded, high-molecular-weight DNA for restriction digestion and Southern hybridisation. PCR is unaffected, because the first denaturation step separates the strands anyway."
  },
  {
    id: 9,
    question: "In silica-based DNA extraction, DNA binds to the silica membrane or beads under which conditions?",
    options: ["Low salt and high pH", "High concentration of chaotropic salt such as guanidinium thiocyanate", "Presence of DTT and SDS", "High concentration of EDTA"],
    answer: 1,
    explanation: "Chaotropic salts disrupt water structure and hydrogen bonding, dehydrating DNA so that it adsorbs to silica. Contaminants are washed away with ethanol-based buffers. DNA is then eluted in low-salt buffer or water at a slightly alkaline pH, which rehydrates it."
  },
  {
    id: 10,
    question: "Kits such as DNA IQ and PrepFiler are suited to automated extraction on robotic platforms mainly because they",
    options: ["Use phenol-chloroform in sealed tubes", "Rely on boiling with Chelex resin", "Use silica-coated paramagnetic beads that are moved with a magnet instead of being centrifuged", "Extract only mitochondrial DNA"],
    answer: 2,
    explanation: "Paramagnetic particles bind DNA in chaotropic conditions and are held by a magnet while washes are removed, so no centrifugation or organic phase separation is needed. This allows high-throughput, reproducible extraction with fewer manual tube transfers and less contamination risk."
  },
  {
    id: 11,
    question: "FTA cards, used to collect reference blood and buccal samples, protect DNA at room temperature because the paper is impregnated with",
    options: ["Proteinase K and DTT", "Formamide and LIZ size standard", "Taq polymerase and dNTPs", "Chemicals that lyse cells, denature proteins and inhibit nucleases and microbial growth"],
    answer: 3,
    explanation: "FTA paper, developed by Leigh Burgoyne at Flinders University, contains a weak base, a chelating agent, an anionic detergent and a uric acid/free radical trap. These lyse cells, denature proteins and protect the DNA trapped in the fibres. Washed punches can be added directly to PCR, and cards can be stored for years at room temperature."
  },
  {
    id: 12,
    question: "In differential extraction of a vaginal swab, the first incubation with SDS and proteinase K but without DTT is intended to",
    options: ["Lyse epithelial cells while leaving sperm heads intact", "Lyse sperm cells while leaving epithelial cells intact", "Lyse both cell types completely", "Remove PCR inhibitors only"],
    answer: 0,
    explanation: "Sperm nuclear membranes are rich in disulfide-cross-linked proteins (protamines), so they resist lysis by SDS and proteinase K alone. The first step releases female epithelial DNA, the non-sperm fraction. Intact sperm are pelleted, washed and then lysed in a second step that includes DTT."
  },
  {
    id: 13,
    question: "Dithiothreitol (DTT) is added in the second step of differential extraction because it",
    options: ["Chelates calcium in the sperm tail", "Reduces disulfide bonds in sperm nuclear proteins, allowing the sperm head to lyse", "Precipitates the female DNA", "Binds DNA to silica"],
    answer: 1,
    explanation: "DTT is a reducing agent that breaks the S–S bonds holding the compact protamine-rich sperm chromatin together. With proteinase K and SDS, this frees the male DNA. Differential extraction was described by Gill, Jeffreys and Werrett in 1985."
  },
  {
    id: 14,
    question: "After differential extraction, the sperm fraction of a sexual assault swab shows a mixture with a strong female profile. The most likely cause is",
    options: ["The suspect is a chimera", "Laser capture of the wrong cells", "Carry-over of epithelial DNA because the sperm pellet was not washed well enough", "Degradation of the male DNA by DTT"],
    answer: 2,
    explanation: "Incomplete separation, such as too few washes of the sperm pellet or a very high epithelial-to-sperm ratio, lets female DNA carry over into the sperm fraction. Extra pellet washes, nuclease treatment of the first fraction, or isolating sperm by laser capture microdissection reduce this carry-over."
  },
  {
    id: 15,
    question: "Before DNA is extracted from bone, powdered bone is incubated in 0.5 M EDTA (pH 8). The purpose of this step is to",
    options: ["Digest collagen fibres", "Inhibit Taq polymerase", "Remove bacterial DNA selectively", "Chelate calcium and dissolve the hydroxyapatite matrix (demineralisation)"],
    answer: 3,
    explanation: "DNA in bone is held within the calcium phosphate (hydroxyapatite) matrix. EDTA chelates Ca²⁺ and demineralises the bone, releasing the DNA for proteinase K digestion and purification. Total demineralisation protocols greatly improve yield from old or burnt skeletal remains."
  },
  {
    id: 16,
    question: "Before bone fragments are powdered for DNA extraction, the outer surface is usually sanded, washed with bleach and exposed to UV light. This is done mainly to",
    options: ["Remove surface contamination by modern DNA", "Increase the mineral content", "Convert mtDNA into nuclear DNA", "Activate endogenous nucleases"],
    answer: 0,
    explanation: "The bone surface collects DNA from handlers, soil microbes and other remains. Removing it and treating with bleach or UV destroys this exogenous DNA, so the extract mainly contains the individual's own DNA. The sample is then ground, often in a liquid-nitrogen freezer mill, before demineralisation."
  },
  {
    id: 17,
    question: "Teeth are often preferred for DNA extraction from decomposed or burnt remains because",
    options: ["They contain no mitochondrial DNA", "Enamel and dentine protect the DNA in the pulp and cementum from the environment", "They need no grinding or demineralisation", "Enamel itself is rich in nucleated cells"],
    answer: 1,
    explanation: "The hard mineralised enamel and dentine shield the pulp cavity and its cells from heat, moisture and microbes, so DNA often survives longer than in soft tissue. Molars are commonly chosen. Like bone, teeth still need cleaning, powdering and demineralisation."
  },
  {
    id: 18,
    question: "A hair pulled forcibly from a victim's scalp during a struggle is more likely than a naturally shed hair to give a full nuclear STR profile because it",
    options: ["Is in the telogen phase with a club-shaped root", "Has more melanin in the shaft", "Is usually in the anagen phase with root sheath cells attached", "Contains more mitochondrial DNA in the medulla"],
    answer: 2,
    explanation: "Actively growing (anagen) hairs that are pulled out carry nucleated follicular and sheath tissue at the root, a good source of nuclear DNA. Shed telogen hairs have a keratinised club root with little or no nuclear DNA, so they are usually analysed for mtDNA."
  },
  {
    id: 19,
    question: "The hair shaft is a poor source of nuclear DNA because",
    options: ["It contains only RNA", "It is made entirely of collagen", "Melanin destroys nuclear DNA as it is formed", "Nuclei are broken down during keratinisation as the hair cells mature"],
    answer: 3,
    explanation: "As cortical cells move up from the bulb and keratinise, their nuclei break down and nuclear DNA becomes fragmented and scarce. Mitochondrial DNA, present in many copies, survives better, so shafts are typed for mtDNA. Melanin co-extracts from hair and inhibits PCR, but it does not destroy the DNA."
  },
  {
    id: 20,
    question: "'Touch DNA' recovered from the handle of a knife is best described as",
    options: ["Low-template DNA from skin cells and sweat deposited by contact", "DNA derived only from fingerprint ridges", "DNA from blood smeared on the handle", "Mitochondrial DNA left by sweat glands"],
    answer: 0,
    explanation: "Touch or trace DNA comes from shed keratinocytes, cell-free DNA in sweat and secretions moved by the hands. Amounts are usually a few picograms to nanograms. The quantity varies with the person's 'shedder' status, the surface and contact time, and DNA can also arrive by secondary transfer."
  },
  {
    id: 21,
    question: "The double-swab technique for collecting saliva or touch DNA from skin and surfaces involves",
    options: ["Swabbing twice with dry swabs and discarding the first", "A first swab moistened with sterile water followed by a second dry swab over the same area", "Two wet swabs soaked in proteinase K", "Swabbing with a cotton swab and then tape-lifting the same area"],
    answer: 1,
    explanation: "Sweet and colleagues (1997) described the method: a moist swab rehydrates and loosens dried cells, and a dry swab then picks up the remaining moisture and cells. Both are combined for extraction. It gives higher recovery than a single swab."
  },
  {
    id: 22,
    question: "Blood is a difficult sample for PCR unless properly purified, mainly because haem (haematin)",
    options: ["Cuts DNA into small fragments", "Fluoresces at the same wavelength as STR dyes", "Inhibits Taq polymerase activity", "Converts DNA into RNA"],
    answer: 2,
    explanation: "Haematin from haemoglobin binds to and inhibits DNA polymerase, giving weak or failed amplification. Good purification (organic, silica or bead-based), adding bovine serum albumin (BSA) to PCR, diluting the extract or using inhibitor-tolerant kits helps overcome it."
  },
  {
    id: 23,
    question: "A bloodstain on blue denim jeans gives a good DNA yield by UV spectrophotometry but the extract fails to amplify. The most likely inhibitor is",
    options: ["Humic acid", "Collagen", "Urea", "Indigo dye"],
    answer: 3,
    explanation: "Indigo, the dye in denim, co-extracts with DNA and strongly inhibits PCR. Silica or magnetic-bead purification, dilution or BSA can help. Humic acid inhibits soil samples, collagen and calcium inhibit bone extracts, and urea inhibits urine samples."
  },
  {
    id: 24,
    question: "DNA extracts from blood-stained soil are brown and amplify poorly. The co-extracted inhibitor responsible is most likely",
    options: ["Humic substances", "Melanin", "Haemoglobin-derived bilirubin", "Tannic acid from leather"],
    answer: 0,
    explanation: "Humic and fulvic acids from decaying organic matter in soil are classic PCR inhibitors that colour extracts brown. They chelate metal ions and interact with the polymerase and the DNA template. Silica or bead clean-up, dilution and BSA are standard remedies."
  },
  {
    id: 25,
    question: "Which inhibitor is most typically co-extracted with DNA from hair samples?",
    options: ["Indigo", "Melanin", "Humic acid", "Heparin"],
    answer: 1,
    explanation: "Melanin, the pigment of hair and skin, binds to DNA polymerase and inhibits PCR, especially in dark hair. Hair extracts are therefore purified carefully or diluted. Heparin is an anticoagulant inhibitor in blood tubes, not hair."
  },
  {
    id: 26,
    question: "Which of these is NOT a recognised strategy for overcoming PCR inhibition in a forensic DNA extract?",
    options: ["Adding bovine serum albumin (BSA) to the PCR", "Re-purifying the extract with silica columns or beads", "Adding excess EDTA to the PCR mix", "Diluting the extract before amplification"],
    answer: 2,
    explanation: "Extra EDTA chelates the Mg²⁺ that Taq polymerase needs, so it worsens inhibition. BSA binds many inhibitors, further purification removes them, and dilution lowers their concentration below the inhibitory level, though it also lowers the DNA concentration."
  },
  {
    id: 27,
    question: "An absorbance reading of 1.0 at 260 nm (1 cm path length) corresponds to a double-stranded DNA concentration of approximately",
    options: ["33 µg/mL", "40 µg/mL", "20 µg/mL", "50 µg/mL"],
    answer: 3,
    explanation: "By Beer-Lambert, absorbance is proportional to concentration. The conversion factors are 50 µg/mL per A260 unit for dsDNA, 40 µg/mL for RNA and about 33 µg/mL for single-stranded DNA. DNA absorbs at 260 nm because of its purine and pyrimidine bases."
  },
  {
    id: 28,
    question: "A DNA extract diluted 1 in 20 gives an A260 of 0.15. What is the concentration of double-stranded DNA in the original extract?",
    options: ["7.5 µg/mL", "150 µg/mL", "300 µg/mL", "15 µg/mL"],
    answer: 1,
    explanation: "Concentration = A260 × 50 µg/mL × dilution factor = 0.15 × 50 × 20 = 150 µg/mL. Always multiply by the dilution factor to get back to the original concentration."
  },
  {
    id: 29,
    question: "An A260/A280 ratio of about 1.8 indicates a reasonably pure DNA sample. A ratio of 1.4 most likely indicates contamination with",
    options: ["Protein or phenol", "RNA", "Excess salt only", "Single-stranded DNA"],
    answer: 0,
    explanation: "Proteins absorb at 280 nm (aromatic amino acids) and phenol absorbs near 270–275 nm, so both lower the A260/A280 ratio. Pure RNA gives a ratio near 2.0, so RNA contamination raises the ratio. The A260/A230 ratio (ideally about 2.0–2.2) reveals carry-over of chaotropic salts and carbohydrates."
  },
  {
    id: 30,
    question: "A silica-column extract shows a good A260/A280 ratio but an A260/A230 ratio of 0.6. The most likely contaminant is",
    options: ["RNA", "Proteinase K", "Residual guanidinium salt from the binding buffer", "Human serum albumin"],
    answer: 2,
    explanation: "Guanidinium salts, EDTA and carbohydrates absorb strongly around 230 nm, lowering the A260/A230 ratio below the ideal of about 2.0. Incomplete washing of silica columns is the usual cause, and the carried-over chaotrope can inhibit PCR."
  },
  {
    id: 31,
    question: "UV spectrophotometry is not suitable for quantifying most forensic casework extracts because it",
    options: ["Cannot detect double-stranded DNA", "Is too sensitive and saturates easily", "Destroys the sample completely", "Cannot distinguish human DNA from bacterial or other non-human DNA and lacks sensitivity at picogram levels"],
    answer: 3,
    explanation: "A260 measures all nucleic acids, including bacterial, fungal and RNA, and is reliable only above about 1–2 µg/mL. Casework samples often contain far less DNA, much of it microbial. Forensic quality standards require human-specific quantification, which is why qPCR is now standard."
  },
  {
    id: 32,
    question: "Fluorometric methods such as PicoGreen or Qubit assays quantify DNA by",
    options: ["Measuring absorbance at 280 nm", "Using a dye that fluoresces strongly when bound to double-stranded DNA", "Hybridising a probe to the D17Z1 alpha-satellite", "Counting amplification cycles to a threshold"],
    answer: 1,
    explanation: "Intercalating or minor-groove dyes such as PicoGreen show a large rise in fluorescence when bound to dsDNA, giving sensitivity in the low ng/mL range and little interference from free nucleotides. Like UV methods, however, they are not human-specific."
  },
  {
    id: 33,
    question: "The older slot-blot (QuantiBlot) method of forensic DNA quantification achieved human specificity by hybridising the sample with a probe for",
    options: ["The D17Z1 alpha-satellite repeat on chromosome 17", "The hTERT gene", "Mitochondrial 16S rRNA", "The SRY gene"],
    answer: 0,
    explanation: "Slot-blot quantification immobilised DNA on a membrane and probed it for D17Z1, a primate-specific alpha-satellite repeat. Signal intensity was compared with standards. It was human (higher-primate) specific and sensitive to about 150 pg, but has been replaced by real-time PCR."
  },
  {
    id: 34,
    question: "The Quantifiler Human DNA Quantification Kit estimates human DNA concentration by real-time PCR of which target?",
    options: ["The amelogenin gene", "The SRY gene", "The human telomerase reverse transcriptase (hTERT) gene", "The D17Z1 alpha-satellite"],
    answer: 2,
    explanation: "Quantifiler Human amplifies a short region of the single-copy hTERT gene, detected with a FAM-labelled TaqMan probe, plus an internal positive control (IPC) to detect inhibition. Quantifiler Y targets SRY for male DNA, and Quantifiler Duo targets RPPH1 and SRY together."
  },
  {
    id: 35,
    question: "In a Quantifiler run, a casework sample shows no human DNA signal and the internal positive control (IPC) is also undetected. The correct interpretation is",
    options: ["The sample definitely contains no human DNA", "The sample contains only male DNA", "The DNA is highly degraded but uninhibited", "PCR inhibitors are likely present, so the absence of human DNA cannot be concluded"],
    answer: 3,
    explanation: "The IPC is a synthetic template added to every well. A failed or delayed IPC means something in the extract is suppressing amplification, so a negative human result is unreliable. The extract should be diluted or re-purified and quantified again."
  },
  {
    id: 36,
    question: "Quantifiler Trio reports a small autosomal target at 0.60 ng/µL and a large autosomal target at 0.06 ng/µL. The degradation index (DI) is",
    options: ["0.1, showing no degradation", "10, suggesting significant degradation", "0.54, showing inhibition", "1, showing intact DNA"],
    answer: 1,
    explanation: "DI = small autosomal quantity ÷ large autosomal quantity = 0.60 ÷ 0.06 = 10. Degraded DNA amplifies the short target (about 80 bp) much better than the long one (about 214 bp), so DI rises above 1. A high DI warns that larger STR loci may drop out and suggests mini-STR or SNP approaches."
  },
  {
    id: 37,
    question: "Quantification of a vaginal swab extract using a kit with autosomal and Y targets shows total human DNA of 2 ng/µL but male DNA of only 0.002 ng/µL. The most useful next step is",
    options: ["Y-STR typing of the extract", "Report that no male DNA is present", "Autosomal STR typing with maximum DNA input", "Mitochondrial DNA sequencing"],
    answer: 0,
    explanation: "A female-to-male ratio of about 1000:1 means autosomal STR typing would show only the female profile, with the male alleles masked. Y-STR kits amplify only male DNA, so they can recover the male haplotype from such mixtures. Ratios like this are a key reason quantification kits include a Y target."
  },
  {
    id: 38,
    question: "A diploid human cell contains about 6.6 pg of DNA. Roughly how many diploid cells correspond to 1 ng of genomic DNA?",
    options: ["About 15", "About 1,500", "About 150", "About 6,600"],
    answer: 2,
    explanation: "1 ng = 1000 pg, and 1000 ÷ 6.6 ≈ 152 diploid cells, or about 300 haploid copies of each locus. By the same arithmetic 100 pg is only about 15 cells, which is why sub-100 pg samples show stochastic effects."
  },
  {
    id: 39,
    question: "Accurate DNA quantification before STR amplification matters mainly because",
    options: ["It identifies the body fluid of origin", "It reveals the sex of every contributor in a mixture", "It replaces the need for an allelic ladder", "Too much template causes off-scale peaks and artefacts, while too little causes allele drop-out and imbalance"],
    answer: 3,
    explanation: "STR kits work best within a narrow input range (typically about 0.5–1 ng). Overloading saturates the detector, producing flat-topped peaks, pull-up and extra stutter. Underloading leads to stochastic effects such as drop-out and heterozygote imbalance."
  },
  {
    id: 40,
    question: "A 1.2 mm punch from an FTA card bearing a reference blood sample is usually",
    options: ["Washed with FTA purification reagent and TE, dried and placed directly into the PCR tube", "Subjected to phenol-chloroform extraction", "Boiled in Chelex for 30 minutes to remove the paper", "Digested with DTT to release DNA from sperm"],
    answer: 0,
    explanation: "DNA is bound in the cellulose matrix of FTA paper, so washing removes haem and other inhibitors while the DNA stays on the punch. The washed punch is added directly to the amplification. This is why FTA cards suit high-throughput databasing of reference samples."
  },
  {
    id: 41,
    question: "Wet bloodstained clothing should be air-dried and packaged in paper rather than sealed in plastic because",
    options: ["Paper absorbs DNA and concentrates it", "Moisture trapped in plastic promotes bacterial and fungal growth that degrades DNA", "Plastic releases phenol that destroys DNA", "Paper prevents cross-transfer of all trace evidence"],
    answer: 1,
    explanation: "Trapped moisture lets bacteria and fungi grow and lets endogenous nucleases act, quickly degrading DNA. Air-drying and breathable packaging (paper bags or envelopes) preserve the sample. Dried extracts and stains are best stored cold (−20°C), avoiding repeated freeze-thaw cycles."
  },
  {
    id: 42,
    question: "Why does a Chelex extract of a buccal swab give good results in PCR even though the resin does not purify DNA as thoroughly as organic extraction?",
    options: ["Chelex selectively amplifies human DNA", "Chelex converts PCR inhibitors into primers", "Chelex adds magnesium to the PCR", "Chelex removes metal ions that catalyse DNA breakdown, and PCR needs only a small amount of single-stranded template"],
    answer: 3,
    explanation: "By binding Mg²⁺, Chelex prevents nuclease and metal-catalysed DNA breakdown during boiling, and the resin is spun down before an aliquot is taken. PCR amplifies even small amounts of single-stranded template. Carry-over of resin beads into the PCR should be avoided because they would chelate the Mg²⁺ the PCR needs."
  },
  {
    id: 43,
    question: "Centrifugal filter devices such as Microcon or Amicon units are often used after organic extraction to",
    options: ["Lyse sperm cells", "Concentrate the DNA and remove salts and small inhibitors", "Measure the A260/A280 ratio", "Separate mitochondrial from nuclear DNA"],
    answer: 1,
    explanation: "These ultrafiltration devices keep DNA above a molecular-weight cut-off on the membrane while water, salts and small molecules pass through. Washing with TE or water and then recovering in a small volume concentrates and desalts the extract."
  },
  {
    id: 44,
    question: "Laser capture microdissection is sometimes used in sexual assault casework as an alternative to differential extraction because it",
    options: ["Allows individual sperm cells to be picked out under the microscope, avoiding epithelial DNA", "Amplifies Y chromosomes selectively", "Removes indigo and other dyes from swabs", "Converts sperm DNA into double-stranded form"],
    answer: 0,
    explanation: "With laser capture microdissection, an analyst identifies stained sperm heads on a slide and lifts them out with a laser. This gives a male fraction largely free of female DNA. It is labour-intensive but useful when epithelial cells vastly outnumber sperm."
  },
  {
    id: 45,
    question: "Which statement about touch DNA samples is correct?",
    options: ["They nearly always give high-quality single-source profiles", "They contain only mitochondrial DNA", "They are often low-template mixtures, and DNA may arrive by secondary (indirect) transfer", "They cannot be collected with swabs or tape"],
    answer: 2,
    explanation: "Touch samples often carry DNA from several people, often in low amounts, and DNA can be transferred indirectly, for example by a handshake followed by touching an object. Finding DNA therefore does not by itself show how or when it was deposited, an important point in court."
  },
  {
    id: 46,
    question: "An extract has an A260 of 0.40 and an A280 of 0.20. Which statement is correct?",
    options: ["The ratio is 0.5, indicating heavy protein contamination", "The ratio is 2.0, which may indicate RNA in the preparation", "The ratio is 1.8, indicating pure DNA", "The ratio is 2.0, indicating phenol contamination"],
    answer: 1,
    explanation: "A260/A280 = 0.40 ÷ 0.20 = 2.0. Pure dsDNA gives about 1.8, while RNA gives about 2.0, so a ratio near 2.0 suggests RNA is present, which can be removed with RNase. Protein and phenol lower the ratio rather than raising it."
  },
  {
    id: 47,
    question: "Which method of DNA quantification is both human-specific and able to indicate the presence of PCR inhibitors and degradation in a single test?",
    options: ["UV spectrophotometry at 260 nm", "PicoGreen fluorometry", "Agarose yield gel with ethidium bromide", "Multi-target real-time PCR quantification such as Quantifiler Trio"],
    answer: 3,
    explanation: "Multi-target qPCR kits amplify human-specific autosomal targets of two sizes, a male Y target and an internal positive control. In one reaction they give quantity, male:female ratio, a degradation index and an inhibition flag. Yield gels and UV and fluorescence methods are not human-specific."
  },
  {
    id: 48,
    question: "Proteinase K digestion during forensic DNA extraction is typically performed at",
    options: ["4°C", "37°C", "56°C", "95°C"],
    answer: 2,
    explanation: "Proteinase K works best at about 50–60°C (commonly 56°C) and stays active in SDS and EDTA. The higher temperature also helps unfold substrate proteins. Heating to about 95°C afterwards inactivates the enzyme, which would otherwise digest the Taq polymerase in PCR."
  },
  {
    id: 49,
    question: "For identifying victims of a mass disaster years after burial, which skeletal sample is generally most likely to yield usable DNA?",
    options: ["Dense cortical bone from the femur shaft or the petrous part of the temporal bone", "Spongy bone of the vertebral bodies", "Ribs exposed at the surface", "Cartilage from the nose"],
    answer: 0,
    explanation: "Dense, compact bone protects DNA from microbial and environmental degradation. The femoral mid-shaft and the very dense petrous bone (inner ear region), along with intact teeth, are preferred. Porous cancellous bone and exposed fragments degrade faster and pick up more contamination."
  },
  {
    id: 50,
    question: "Which pair of samples would be expected to give the highest DNA yield per sample?",
    options: ["A shed telogen hair and a fingerprint lift", "A liquid blood sample and a buccal swab", "A hair shaft and a cigarette ash sample", "A single sperm cell and a touch swab from a doorknob"],
    answer: 1,
    explanation: "Whole blood (from nucleated white cells) and buccal swabs (epithelial cells) give microgram-level DNA yields, which is why they are used as reference samples. Telogen hairs, hair shafts, fingerprints and touch swabs give picogram to low-nanogram amounts or only mtDNA."
  }
];

export default questions;
