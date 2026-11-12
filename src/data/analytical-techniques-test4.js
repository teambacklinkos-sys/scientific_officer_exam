const questions = [
  {
    id: 1,
    question: "In agarose gel electrophoresis at neutral pH, DNA fragments migrate towards the anode because",
    options: ["DNA is positively charged owing to its bases", "The phosphate groups of the sugar-phosphate backbone carry a negative charge", "Ethidium bromide gives DNA a negative charge", "Electroosmotic flow carries DNA towards the anode"],
    answer: 1,
    explanation: "Each nucleotide carries a negatively charged phosphate, so DNA has an almost constant charge-to-mass ratio. In a gel, fragments therefore separate by size, not charge, with smaller fragments moving faster through the pores."
  },
  {
    id: 2,
    question: "Polyacrylamide gels rather than agarose gels are used when it is necessary to",
    options: ["Separate intact chromosomes of yeast", "Separate DNA fragments of 10–20 kb", "Resolve small DNA fragments that differ in length by a single nucleotide", "Separate DNA without any matrix"],
    answer: 2,
    explanation: "Polyacrylamide has smaller, more uniform pores than agarose and can resolve single-base differences in short fragments, which is why it was used for sequencing and older STR typing. Agarose is used for larger fragments, roughly 0.1 to 25 kb."
  },
  {
    id: 3,
    question: "Increasing the agarose concentration of a gel from 0.7% to 2% will",
    options: ["Improve separation of small fragments but reduce resolution of large fragments", "Improve separation of very large fragments", "Make all fragments migrate faster", "Have no effect on separation"],
    answer: 0,
    explanation: "Higher agarose concentration gives smaller pores, which slows all fragments and spreads apart small ones (for example, 100–2000 bp in 2% agarose). Low-percentage gels (0.5–0.8%) are used for large fragments of several kilobases."
  },
  {
    id: 4,
    question: "In casting a polyacrylamide gel, ammonium persulphate (APS) and TEMED are added in order to",
    options: ["Stain the proteins after the run", "Denature proteins", "Buffer the gel at pH 8.8", "Generate free radicals and catalyse polymerisation of acrylamide and bis-acrylamide"],
    answer: 3,
    explanation: "APS produces sulphate free radicals and TEMED accelerates radical formation. Together they start polymerisation of acrylamide into chains, which bis-acrylamide cross-links to form the gel. Oxygen inhibits the reaction, so solutions are sometimes degassed."
  },
  {
    id: 5,
    question: "In SDS-PAGE, proteins separate almost entirely according to molecular mass because SDS",
    options: ["Binds proteins in proportion to their mass, giving a uniform negative charge-to-mass ratio and denaturing them into rod-like chains", "Cross-links the polypeptides", "Neutralises all charges on the protein", "Cleaves proteins into equal-sized peptides"],
    answer: 0,
    explanation: "SDS binds at about 1.4 g per gram of protein, masking the intrinsic charge and unfolding the protein. All SDS-protein complexes then have a similar charge density and shape, so mobility depends mainly on size."
  },
  {
    id: 6,
    question: "β-Mercaptoethanol or dithiothreitol is added to protein samples before SDS-PAGE in order to",
    options: ["Prevent proteolysis", "Increase the negative charge of the protein", "Reduce disulphide bonds so that subunits separate as individual polypeptide chains", "Make proteins fluorescent"],
    answer: 2,
    explanation: "Reducing agents break S–S bonds within and between chains. An antibody, for example, then runs as heavy chains (about 50 kDa) and light chains (about 25 kDa) instead of as a single 150 kDa molecule."
  },
  {
    id: 7,
    question: "In the discontinuous (Laemmli) SDS-PAGE system, the upper stacking gel has a low acrylamide concentration and a pH of about 6.8. Its function is to",
    options: ["Separate proteins by isoelectric point", "Concentrate all the proteins into a very thin band before they enter the resolving gel", "Remove SDS from proteins", "Separate proteins by molecular mass"],
    answer: 1,
    explanation: "At pH 6.8, glycinate ions from the running buffer move slowly while chloride moves fast. The proteins are squeezed into a sharp zone between them. On entering the pH 8.8 resolving gel, glycine speeds up, and the proteins are then separated by size."
  },
  {
    id: 8,
    question: "To estimate the molecular mass of an unknown protein by SDS-PAGE, the analyst plots, for a set of marker proteins,",
    options: ["Molecular mass against the square of distance migrated", "Relative mobility against isoelectric point", "Log of molecular mass against relative mobility (Rf), which is approximately linear", "Band intensity against molecular mass"],
    answer: 2,
    explanation: "Over the useful range of the gel, log(Mr) falls approximately linearly with relative mobility. The unknown's Rf is measured and its molecular mass is read from the standard curve."
  },
  {
    id: 9,
    question: "An analyst wants to separate isoenzymes of lactate dehydrogenase and then locate them in the gel by their enzyme activity. The most suitable method is",
    options: ["Native (non-denaturing) PAGE followed by activity staining", "SDS-PAGE with β-mercaptoethanol", "Denaturing urea-PAGE", "Southern blotting"],
    answer: 0,
    explanation: "Native PAGE leaves out SDS and reducing agents, so proteins keep their folded structure, subunit association and activity. Isoenzymes then separate by charge, size and shape, and can be visualised by substrate-linked colour reactions (zymograms). Older forensic blood-group enzyme typing such as PGM used this approach."
  },
  {
    id: 10,
    question: "In native PAGE, the mobility of a protein depends on",
    options: ["Its molecular mass only", "Its net charge, size and shape together", "Its isoelectric point only", "Its amino acid sequence length only"],
    answer: 1,
    explanation: "Without SDS, each protein keeps its own charge and conformation, so mobility reflects the charge-to-size ratio and the shape. This means native PAGE cannot be used directly to estimate molecular mass."
  },
  {
    id: 11,
    question: "In isoelectric focusing, a protein stops migrating when it reaches",
    options: ["The end of the gel", "The point where the gel pore size equals its size", "The region of highest buffer conductivity", "The position in the pH gradient equal to its isoelectric point, where its net charge is zero"],
    answer: 3,
    explanation: "A stable pH gradient is formed by carrier ampholytes or by an immobilised pH gradient strip. A protein moves until the local pH equals its pI, where it has no net charge. Diffusion away from this point is countered by the field, so it focuses into a sharp band."
  },
  {
    id: 12,
    question: "Isoelectric focusing can resolve two protein variants that differ by a single charged amino acid because it separates proteins on the basis of",
    options: ["Molecular mass", "Shape", "Hydrophobicity", "Isoelectric point"],
    answer: 3,
    explanation: "A single charge substitution shifts the pI slightly. With a narrow pH-range gradient, IEF can separate proteins whose pI values differ by about 0.01 pH unit, as used for haemoglobin variants and protein polymorphisms."
  },
  {
    id: 13,
    question: "In two-dimensional gel electrophoresis, introduced by O'Farrell in 1975, proteins are separated",
    options: ["First by molecular mass and then by size again", "First by isoelectric focusing and then, at right angles, by SDS-PAGE", "First by native PAGE and then by agarose electrophoresis", "First by affinity and then by charge"],
    answer: 1,
    explanation: "The first dimension separates by pI and the second by molecular mass. These two independent properties spread thousands of proteins as spots over the gel, which is the basis of classical proteomics."
  },
  {
    id: 14,
    question: "After 2D electrophoresis, a protein spot of interest is typically identified by",
    options: ["Excising the spot, digesting it with trypsin and analysing the peptides by mass spectrometry", "Measuring its UV absorbance at 260 nm", "Southern hybridisation", "Measuring its refractive index"],
    answer: 0,
    explanation: "In-gel tryptic digestion followed by MALDI-TOF peptide mass fingerprinting or LC-MS/MS identifies the protein by database searching. A260 measures nucleic acids, not proteins."
  },
  {
    id: 15,
    question: "In an uncoated fused-silica capillary, electroosmotic flow towards the cathode arises because",
    options: ["Ionised silanol groups on the capillary wall attract a layer of cations that drags the bulk solution when voltage is applied", "The polymer sieving matrix is positively charged", "DNA molecules push the buffer towards the cathode", "Heat generated in the capillary causes convection"],
    answer: 0,
    explanation: "Above about pH 3, Si–OH groups ionise to Si–O⁻. The mobile layer of hydrated cations at the wall moves towards the cathode, pulling the solution with a flat flow profile. For DNA analysis, EOF is suppressed with coated capillaries or polymers."
  },
  {
    id: 16,
    question: "In capillary electrophoresis instruments used for forensic STR typing, the fluorescently labelled amplicons are detected by",
    options: ["UV absorbance at 260 nm", "Conductivity measurement", "Laser-induced fluorescence through a detection window, with signals separated by dye colour", "Silver staining of the capillary"],
    answer: 2,
    explanation: "A laser excites the dye-labelled fragments as they pass the window. A spectrograph and CCD camera separate the emission colours, so several dye channels and an internal size standard are read in one run."
  },
  {
    id: 17,
    question: "In capillary electrophoresis of STR amplicons, the sample is introduced into the capillary by electrokinetic injection. A consequence of this is that",
    options: ["All ions enter in exact proportion to their concentration", "High salt in the sample reduces the amount of DNA injected, because small ions compete for entry", "The volume injected is always exactly 1 µL", "No voltage is needed for injection"],
    answer: 1,
    explanation: "Electrokinetic injection applies a short voltage, so injection depends on ion mobility and concentration. Chloride and other small ions in the sample compete with DNA, which is why amplicons are diluted in deionised formamide with low salt."
  },
  {
    id: 18,
    question: "Before loading on a genetic analyser, STR amplicons are mixed with highly deionised formamide and heated at about 95 °C, then snap-cooled. The purpose is to",
    options: ["Digest primer-dimers", "Stain the DNA", "Remove the fluorescent dyes", "Denature the DNA into single strands that migrate according to length"],
    answer: 3,
    explanation: "Forensic CE is performed under denaturing conditions so that each fragment runs as a single strand whose mobility depends on length, not secondary structure. Formamide keeps the strands apart and allows single-base resolution."
  },
  {
    id: 19,
    question: "Pulsed-field gel electrophoresis (PFGE) is used to separate",
    options: ["DNA fragments shorter than 100 bp", "Very large DNA molecules, from about 50 kb up to several megabases, such as whole bacterial genome digests", "Proteins by isoelectric point", "RNA by secondary structure"],
    answer: 1,
    explanation: "In a constant field, molecules above about 30–50 kb all move at roughly the same rate. PFGE periodically changes the field direction, so large molecules must reorient; larger molecules take longer to do so and are separated. It was long the reference method for bacterial outbreak typing."
  },
  {
    id: 20,
    question: "Pulsed-field gel electrophoresis was first described in 1984 by",
    options: ["Southern", "Sanger and Coulson", "Schwartz and Cantor", "O'Farrell"],
    answer: 2,
    explanation: "David Schwartz and Charles Cantor introduced PFGE to separate yeast chromosomes. Variants include CHEF (contour-clamped homogeneous electric field) systems used in microbial typing networks such as PulseNet."
  },
  {
    id: 21,
    question: "Ethidium bromide makes DNA bands visible on a UV transilluminator because it",
    options: ["Binds the DNA phosphate backbone and absorbs visible light", "Covalently labels guanine residues", "Precipitates DNA in the gel", "Intercalates between stacked base pairs and fluoresces orange under UV with greatly increased intensity"],
    answer: 3,
    explanation: "Ethidium inserts between base pairs, and its fluorescence (emission about 590 nm) increases many-fold when bound. Because it intercalates, it is a potential mutagen, so it must be handled with gloves and disposed of safely."
  },
  {
    id: 22,
    question: "SYBR Green and SYBR Safe are increasingly used instead of ethidium bromide for DNA gels because they",
    options: ["Are more sensitive and less mutagenic, and some can be viewed with blue light", "Stain proteins as well as DNA", "Do not require any light source for visualisation", "Permanently fix DNA in the gel"],
    answer: 0,
    explanation: "SYBR dyes bind DNA with a very large fluorescence increase, giving greater sensitivity than ethidium. SYBR Safe was developed to be less mutagenic, and blue-light viewing avoids UV damage to DNA and to the user."
  },
  {
    id: 23,
    question: "Coomassie Brilliant Blue staining of polyacrylamide protein gels works by",
    options: ["Intercalating into nucleic acids", "Non-covalent binding of the dye to proteins, mainly through basic and aromatic amino acid residues", "Reducing silver ions on the protein surface", "Fluorescing under UV light"],
    answer: 1,
    explanation: "Coomassie binds arginine, lysine, histidine and aromatic residues through ionic and hydrophobic interactions, giving blue bands. It detects roughly 30–100 ng of protein per band and is compatible with later mass spectrometry."
  },
  {
    id: 24,
    question: "Compared with Coomassie Brilliant Blue, silver staining of protein gels is",
    options: ["Less sensitive", "Specific for glycoproteins only", "About 50–100 times more sensitive, detecting about 1 ng of protein per band", "Used only for DNA"],
    answer: 2,
    explanation: "Silver ions bind proteins and are reduced to metallic silver, producing dark bands with nanogram sensitivity. Silver staining was also used for older polyacrylamide STR gels, but it gives a narrower linear range than Coomassie for quantitation."
  },
  {
    id: 25,
    question: "A solution of a drug with a molar absorptivity (ε) of 15,000 L mol⁻¹ cm⁻¹ gives an absorbance of 0.45 in a 1 cm cuvette. Its concentration is",
    options: ["3.0 × 10^-5 mol/L", "3.0 × 10^-3 mol/L", "6.75 × 10^3 mol/L", "3.3 × 10^4 mol/L"],
    answer: 0,
    explanation: "From Beer-Lambert, A = εcl, so c = A/(εl) = 0.45 / (15,000 × 1) = 3.0 × 10⁻⁵ mol/L. Beer's law holds best for dilute solutions; at high concentrations the plot curves."
  },
  {
    id: 26,
    question: "A DNA extract diluted 1:10 gives an A₂₆₀ of 0.25. Taking 1 A₂₆₀ unit = 50 µg/mL for double-stranded DNA, the concentration of the undiluted extract is",
    options: ["12.5 µg/mL", "1250 µg/mL", "500 µg/mL", "125 µg/mL"],
    answer: 3,
    explanation: "Concentration = A₂₆₀ × 50 µg/mL × dilution factor = 0.25 × 50 × 10 = 125 µg/mL. For forensic STR work, human-specific qPCR is preferred, because A₂₆₀ also measures non-human DNA and RNA."
  },
  {
    id: 27,
    question: "A DNA preparation has an A₂₆₀/A₂₈₀ ratio of 1.4. This most likely indicates",
    options: ["Pure double-stranded DNA", "Contamination with protein or phenol", "Contamination with RNA", "Completely degraded DNA"],
    answer: 1,
    explanation: "Pure DNA gives a ratio of about 1.8 and pure RNA about 2.0. Proteins absorb at 280 nm because of their aromatic amino acids, and phenol absorbs near 270–275 nm, so contamination lowers the ratio."
  },
  {
    id: 28,
    question: "A sample transmits 10% of the incident light at its wavelength of maximum absorption. Its absorbance is",
    options: ["0.1", "2.0", "1.0", "10"],
    answer: 2,
    explanation: "A = −log₁₀ T = −log₁₀(0.10) = 1.0. Similarly, 1% transmittance gives A = 2. Absorbance, not transmittance, is linear with concentration."
  },
  {
    id: 29,
    question: "In UV-visible spectroscopy, absorption of light by an organic molecule is due to",
    options: ["Electronic transitions, for example π → π* and n → π*, in chromophores", "Vibrations of bonds", "Nuclear spin transitions", "Inelastic scattering of photons"],
    answer: 0,
    explanation: "UV and visible photons have enough energy to promote electrons from bonding or non-bonding orbitals to anti-bonding orbitals. Conjugated systems and aromatic rings act as chromophores, which is why many drugs show characteristic UV spectra. Bond vibrations are the basis of IR spectroscopy."
  },
  {
    id: 30,
    question: "Infrared absorption by a molecular vibration occurs only if the vibration",
    options: ["Changes the polarisability of the molecule", "Is symmetric in a centrosymmetric molecule", "Involves a nucleus with non-zero spin", "Produces a change in the dipole moment of the molecule"],
    answer: 3,
    explanation: "IR activity requires a change in dipole moment, so polar bonds such as C=O and O–H absorb strongly. Raman activity requires a change in polarisability, which is why the two techniques are complementary."
  },
  {
    id: 31,
    question: "An unknown white powder shows a strong, sharp IR absorption band near 1700 cm⁻¹. This band most likely indicates",
    options: ["A carbonyl (C=O) group", "An O–H group", "A C≡N group", "An aromatic C–H stretch"],
    answer: 0,
    explanation: "C=O stretching gives an intense band at about 1650–1750 cm⁻¹. O–H shows a broad band at about 3200–3600 cm⁻¹, C≡N at about 2250 cm⁻¹, and aromatic C–H just above 3000 cm⁻¹."
  },
  {
    id: 32,
    question: "In IR spectra, the region from about 1500 to 400 cm⁻¹ is called the fingerprint region because",
    options: ["It shows only O–H and N–H stretches", "It contains complex bending and skeletal vibrations whose pattern is unique to each compound", "It contains only C–H stretching vibrations common to all organic compounds", "No compound absorbs in this region"],
    answer: 1,
    explanation: "The functional-group region above 1500 cm⁻¹ identifies groups such as C=O and O–H. The fingerprint region contains many overlapping vibrations specific to the whole molecule, so two different compounds rarely give identical patterns there."
  },
  {
    id: 33,
    question: "Unlike a dispersive IR spectrometer, an FTIR spectrometer",
    options: ["Uses a prism to disperse light", "Measures only one wavelength at a time", "Uses a Michelson interferometer to record all wavelengths at once and converts the interferogram into a spectrum by Fourier transformation", "Works only in the visible region"],
    answer: 2,
    explanation: "FTIR records an interferogram containing all frequencies at once. Fourier transformation converts it into a spectrum, giving higher speed, better signal-to-noise and accurate wavenumbers. These are major advantages for microscopic forensic samples."
  },
  {
    id: 34,
    question: "Attenuated total reflectance (ATR) accessories are popular for FTIR analysis of forensic samples such as paints, fibres and drug powders because they",
    options: ["Require the sample to be dissolved in water", "Need little or no sample preparation, as the IR beam penetrates only a few micrometres into a sample pressed against a crystal", "Convert IR spectra into mass spectra", "Work only for gases"],
    answer: 1,
    explanation: "In ATR, the beam is totally internally reflected in a high-index crystal (diamond, ZnSe or germanium), and the evanescent wave probes the surface of the sample in contact. This avoids making KBr pellets and largely preserves the sample."
  },
  {
    id: 35,
    question: "An IR absorption band occurs at a wavelength of 5.0 µm. Its position in wavenumbers is",
    options: ["200 cm⁻¹", "500 cm⁻¹", "20,000 cm⁻¹", "2000 cm⁻¹"],
    answer: 3,
    explanation: "Wavenumber (cm⁻¹) = 10⁴ / wavelength (µm) = 10,000 / 5.0 = 2000 cm⁻¹. The mid-IR region used for identification is about 4000–400 cm⁻¹ (2.5–25 µm)."
  },
  {
    id: 36,
    question: "In a spectrofluorimeter, the emitted fluorescence is usually measured at 90° to the excitation beam in order to",
    options: ["Increase the excitation intensity", "Minimise detection of transmitted and scattered excitation light", "Measure absorbance simultaneously", "Prevent photobleaching"],
    answer: 1,
    explanation: "Fluorescence is emitted in all directions, whereas the excitation beam travels straight through. Right-angle geometry keeps the detector out of the direct beam, so the weak emission is measured against a dark background."
  },
  {
    id: 37,
    question: "Fluorescence spectroscopy is generally far more sensitive than UV-visible absorption spectroscopy because",
    options: ["Fluorescence is measured against a nearly zero background, rather than as a small difference between two large light intensities", "All molecules fluoresce", "It uses longer path lengths", "It does not depend on concentration"],
    answer: 0,
    explanation: "Absorbance requires detecting a small decrease in a bright beam, whereas fluorescence measures emitted photons directly against darkness. Concentrations down to the nanomolar or picomolar range can therefore be measured, but only for fluorescent analytes."
  },
  {
    id: 38,
    question: "A decrease in fluorescence intensity of a fluorophore caused by collisions with other molecules, such as dissolved oxygen or halide ions, is called",
    options: ["Photobleaching", "Phosphorescence", "Stokes shift", "Quenching"],
    answer: 3,
    explanation: "Quenching is any process that lowers fluorescence intensity without destroying the fluorophore, for example collisional quenching by O₂, iodide or heavy atoms. It is reversible, whereas photobleaching permanently destroys the fluorophore."
  },
  {
    id: 39,
    question: "In atomic absorption spectroscopy, the hollow cathode lamp is used because",
    options: ["It provides white light for all elements", "It emits the sharp characteristic lines of the element being determined, which only that element's ground-state atoms absorb", "It atomises the sample", "It ionises atoms for mass analysis"],
    answer: 1,
    explanation: "The lamp's cathode is made of the analyte element, so it emits that element's own resonance lines. Free atoms of the same element in the flame or furnace absorb these lines in proportion to their concentration, which gives AAS high specificity. A separate lamp is generally needed for each element."
  },
  {
    id: 40,
    question: "In atomic absorption spectroscopy, the species that absorb the radiation are",
    options: ["Free ground-state atoms produced by atomising the sample", "Molecular ions", "Excited-state atoms that emit light", "Electrons in the flame"],
    answer: 0,
    explanation: "The flame or graphite furnace breaks compounds into free atoms, most of which remain in the ground state. These absorb at their resonance wavelengths. Emission by excited atoms is the basis of atomic emission spectroscopy, not AAS."
  },
  {
    id: 41,
    question: "For determining very low levels of lead in a small blood sample, graphite furnace (electrothermal) AAS is preferred to flame AAS because it",
    options: ["Uses no light source", "Can determine all elements simultaneously", "Retains the whole atomised sample in the light path for longer, giving much lower detection limits from microlitre volumes", "Does not require calibration"],
    answer: 2,
    explanation: "In flame AAS, most of the aspirated sample goes to waste and atoms pass through the beam quickly. A graphite tube atomises the entire 10–50 µL sample and holds the atom cloud in the beam, improving sensitivity by roughly 100–1000 times."
  },
  {
    id: 42,
    question: "For the determination of arsenic by AAS in viscera digests, the element is often first converted to its volatile hydride (arsine) using sodium borohydride. The main advantage is",
    options: ["It converts arsenic into a fluorescent compound", "It removes the need for a hollow cathode lamp", "It allows arsenic to be measured by IR", "It separates arsenic from the sample matrix and concentrates it, improving sensitivity"],
    answer: 3,
    explanation: "Hydride generation moves arsenic (and also selenium, antimony and bismuth) out of the matrix as a gas into a heated quartz cell. This greatly reduces interference and lowers detection limits. Mercury is measured similarly by cold-vapour AAS."
  },
  {
    id: 43,
    question: "Raman spectroscopy is based on",
    options: ["Absorption of infrared radiation", "Inelastic scattering of monochromatic laser light, in which scattered photons gain or lose energy equal to molecular vibrational energies", "Emission of light from excited atoms in a flame", "Absorption of radiofrequency energy by nuclei"],
    answer: 1,
    explanation: "Most scattered light is elastic (Rayleigh scattering), but a tiny fraction is shifted in energy by molecular vibrations. Stokes lines (lower energy) are stronger than anti-Stokes lines at room temperature, and the pattern of Raman shifts gives a vibrational fingerprint."
  },
  {
    id: 44,
    question: "An advantage of Raman over IR spectroscopy for examining suspected drugs is that",
    options: ["Raman can often analyse samples through glass vials or plastic bags, and water gives only a weak signal", "Raman is unaffected by sample fluorescence", "Raman requires a change in dipole moment", "Raman needs KBr pellets"],
    answer: 0,
    explanation: "Glass and water are weak Raman scatterers, so samples can be measured in containers and in aqueous solution, which suits handheld field identification. Fluorescence of the sample is a major interference, reduced by using 785 or 1064 nm lasers."
  },
  {
    id: 45,
    question: "Surface-enhanced Raman spectroscopy (SERS) achieves enormous signal enhancement by",
    options: ["Using a hollow cathode lamp", "Cooling the sample with liquid nitrogen", "Adsorbing the analyte onto roughened silver or gold nanostructures", "Measuring at 90° to the beam"],
    answer: 2,
    explanation: "Localised surface plasmons on nanostructured silver or gold strongly amplify the electromagnetic field near the surface, raising Raman signals by up to 10⁶–10⁸ times. This allows trace detection of dyes, drugs and explosives."
  },
  {
    id: 46,
    question: "A vibration of a centrosymmetric molecule such as CO₂ that is Raman-active is IR-inactive, and vice versa. This is known as",
    options: ["The Franck-Condon principle", "The Stokes rule", "The rule of mutual exclusion", "The n + 1 rule"],
    answer: 2,
    explanation: "For molecules with a centre of symmetry, symmetric vibrations change polarisability (Raman-active) but not the dipole moment (IR-inactive), and antisymmetric vibrations show the reverse. The symmetric stretch of CO₂ is therefore seen only in the Raman spectrum."
  },
  {
    id: 47,
    question: "Which of the following nuclei is NOT observable by NMR spectroscopy because its nuclear spin is zero?",
    options: ["Hydrogen-1", "Carbon-13", "Phosphorus-31", "Carbon-12"],
    answer: 3,
    explanation: "NMR requires a nucleus with non-zero spin quantum number. ¹²C and ¹⁶O have even numbers of protons and neutrons and therefore zero spin. ¹³C makes up only about 1.1% of natural carbon, which is why ¹³C NMR is much less sensitive than ¹H NMR."
  },
  {
    id: 48,
    question: "In ¹H NMR spectroscopy, chemical shifts are reported in ppm relative to the reference compound",
    options: ["Tetramethylsilane (TMS)", "Deuterated chloroform", "Benzene", "Water"],
    answer: 0,
    explanation: "TMS has 12 equivalent, highly shielded protons that give one sharp signal, defined as δ = 0 ppm. Expressing shifts in ppm makes them independent of the spectrometer's field strength. Deuterated solvents such as CDCl₃ are used so that solvent protons do not swamp the spectrum."
  },
  {
    id: 49,
    question: "In the ¹H NMR spectrum of bromoethane (CH₃CH₂Br), applying the n + 1 rule, the signal for the CH₃ protons appears as a",
    options: ["Singlet", "Doublet", "Triplet", "Quartet"],
    answer: 2,
    explanation: "The CH₃ protons have two neighbouring CH₂ protons, so they split into 2 + 1 = 3 lines (a triplet). The CH₂ protons have three neighbours and appear as a quartet, which is the classic ethyl-group pattern."
  },
  {
    id: 50,
    question: "NMR is valued in forensic drug analysis mainly because it",
    options: ["Detects drugs at picogram levels in blood", "Gives detailed structural information, distinguishing positional isomers of new psychoactive substances non-destructively", "Requires no magnet", "Is cheaper and faster than colour tests"],
    answer: 1,
    explanation: "Chemical shifts, coupling patterns and integrals reveal the exact connectivity of a molecule, so NMR can tell apart regioisomers (for example, of synthetic cathinones) that give near-identical mass spectra. Its sensitivity is low, so it is used on seized material rather than trace biological samples."
  }
];

export default questions;
