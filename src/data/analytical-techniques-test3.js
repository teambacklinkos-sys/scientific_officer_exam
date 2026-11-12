const questions = [
  {
    id: 1,
    question: "A sample is spun at 3000 rpm in a rotor with a radius of 10 cm. Using RCF = 1.118 × 10⁻⁵ × r (cm) × (rpm)², the relative centrifugal force is approximately",
    options: ["100 × g", "1000 × g", "3000 × g", "10,000 × g"],
    answer: 1,
    explanation: "RCF = 1.118 × 10⁻⁵ × 10 × (3000)² = 1.118 × 10⁻⁵ × 10 × 9 × 10⁶ ≈ 1006 × g, i.e. about 1000 × g. RCF depends on the radius as well as the speed, which is why protocols should quote × g rather than rpm."
  },
  {
    id: 2,
    question: "A protocol written for one centrifuge specifies 5000 rpm. It is to be repeated on a centrifuge with a different rotor radius. The correct way to reproduce the conditions is to",
    options: ["Use 5000 rpm, since rpm is independent of the rotor", "Halve the speed if the rotor is larger", "Use the same run time and ignore speed", "Calculate the rpm that gives the same RCF (× g) for the new rotor radius"],
    answer: 3,
    explanation: "The force on particles depends on both rpm and radius (RCF ∝ r × rpm²). The same rpm in a rotor of different radius gives a different force, so the setting must be converted to give an equal RCF."
  },
  {
    id: 3,
    question: "If the speed of a centrifuge is doubled while the rotor radius stays the same, the relative centrifugal force becomes",
    options: ["Twice as great", "Unchanged", "Four times as great", "Half as great"],
    answer: 2,
    explanation: "RCF is proportional to the square of the angular velocity (rpm²). Doubling the rpm therefore multiplies the RCF by 2² = 4."
  },
  {
    id: 4,
    question: "The sedimentation coefficient of a particle is expressed in Svedberg units, where 1 S equals",
    options: ["10⁻¹³ second", "10⁻⁹ second", "10⁻⁶ second", "10⁻³ second"],
    answer: 0,
    explanation: "The sedimentation coefficient is the sedimentation velocity per unit of centrifugal acceleration (s = v/ω²r), and it has units of time; 1 Svedberg = 10⁻¹³ s. It depends on the mass, shape and density of the particle."
  },
  {
    id: 5,
    question: "The bacterial 70S ribosome is made of a 50S and a 30S subunit. The values do not add up to 80S because",
    options: ["Svedberg values depend on both mass and shape, so they are not additive", "Some RNA is lost during centrifugation", "The subunits are measured at different temperatures", "S values are logarithmic units of molecular weight"],
    answer: 0,
    explanation: "Sedimentation rate depends on the mass, density and frictional coefficient (shape) of the particle. When subunits combine, the mass increases but the surface area does not increase in proportion, so the S value of the whole is less than the sum."
  },
  {
    id: 6,
    question: "In differential centrifugation of a liver homogenate, which fraction pellets first, at the lowest centrifugal force (about 600–1000 × g)?",
    options: ["Microsomes", "Mitochondria", "Ribosomes", "Nuclei and unbroken cells"],
    answer: 3,
    explanation: "Differential centrifugation separates particles by size and density using successively higher forces. Nuclei pellet at about 600–1000 × g, mitochondria and lysosomes at about 10,000–20,000 × g, and microsomes at about 100,000 × g, leaving the cytosol in the supernatant."
  },
  {
    id: 7,
    question: "After differential centrifugation, the supernatant remaining after a 100,000 × g spin for one hour contains mainly",
    options: ["Mitochondria", "Nuclei", "The soluble cytosol", "Lysosomes"],
    answer: 2,
    explanation: "At 100,000 × g, the microsomal fraction (fragments of the endoplasmic reticulum, with ribosomes) pellets. What remains in the supernatant is the soluble cytosolic fraction containing soluble enzymes and proteins."
  },
  {
    id: 8,
    question: "In isopycnic (equilibrium density-gradient) centrifugation, for example in caesium chloride, particles separate on the basis of their",
    options: ["Size and shape only", "Buoyant density", "Electrical charge", "Affinity for a ligand"],
    answer: 1,
    explanation: "Each particle migrates until it reaches the position where the gradient density equals its own buoyant density, and then stops regardless of run time. Meselson and Stahl used CsCl gradients to separate ¹⁵N- and ¹⁴N-labelled DNA, proving semi-conservative replication."
  },
  {
    id: 9,
    question: "In rate-zonal centrifugation on a shallow sucrose gradient, the run must be stopped before the particles reach the bottom because",
    options: ["Separation is based on sedimentation rate (size and shape), and all particles would eventually pellet", "Sucrose crystallises at high speed", "Particles band at their buoyant density and then reverse direction", "The gradient collapses after a fixed time"],
    answer: 0,
    explanation: "The density of a rate-zonal gradient is lower than that of the particles, so they keep moving and separate only by their different speeds. Isopycnic separation, by contrast, reaches equilibrium."
  },
  {
    id: 10,
    question: "Preparative ultracentrifuges, which reach speeds of up to about 100,000 rpm, have the rotor chamber refrigerated and kept under vacuum mainly to",
    options: ["Increase the radius of rotation", "Allow optical measurement of sedimentation", "Prevent heating from air friction and allow very high speeds", "Remove dissolved gases from the sample"],
    answer: 2,
    explanation: "At ultracentrifuge speeds, air friction would heat the rotor and samples and resist rotation. Evacuating the chamber and refrigerating it keeps the samples cold and lets the rotor reach forces of several hundred thousand × g."
  },
  {
    id: 11,
    question: "The analytical ultracentrifuge, with an optical system to follow sedimentation of macromolecules during the run, was developed by",
    options: ["Archer Martin", "Theodor Svedberg", "Mikhail Tsvet", "Arne Tiselius"],
    answer: 1,
    explanation: "Theodor Svedberg developed the analytical ultracentrifuge and received the 1926 Nobel Prize in Chemistry; the Svedberg unit is named after him. Tiselius pioneered electrophoresis, and Tsvet and Martin are associated with chromatography."
  },
  {
    id: 12,
    question: "Chromatography was first described in 1903 by the Russian botanist Mikhail Tsvet, who separated",
    options: ["Amino acids on filter paper", "Plant pigments on a column of calcium carbonate", "Proteins by electrophoresis", "Volatile oils by gas chromatography"],
    answer: 1,
    explanation: "Tsvet separated chlorophylls and carotenoids from leaf extracts on a chalk column, giving coloured bands, hence the name 'colour writing'. Martin and Synge later developed partition chromatography and won the 1952 Nobel Prize."
  },
  {
    id: 13,
    question: "On a TLC plate, a drug spot travels 3.6 cm while the solvent front travels 9.0 cm from the origin. The Rf value is",
    options: ["0.40", "2.50", "0.36", "5.40"],
    answer: 0,
    explanation: "Rf = distance moved by the solute ÷ distance moved by the solvent front = 3.6 / 9.0 = 0.40. Rf is always between 0 and 1, and it depends on the stationary phase, solvent, temperature and chamber saturation."
  },
  {
    id: 14,
    question: "A reference standard has an Rf of 0.65 in a solvent system. If the solvent front travels 8.0 cm, the standard spot will be found at",
    options: ["4.8 cm", "12.3 cm", "5.2 cm", "6.5 cm"],
    answer: 2,
    explanation: "Distance of the spot = Rf × solvent front distance = 0.65 × 8.0 = 5.2 cm. Because Rf varies between runs, questioned samples and standards should be run side by side on the same plate."
  },
  {
    id: 15,
    question: "Adsorption chromatography separates components mainly on the basis of",
    options: ["Differences in molecular size", "Differences in their distribution between two immiscible liquid phases", "Specific biological interactions with an immobilised ligand", "Differences in how strongly they adsorb to the surface of a solid stationary phase"],
    answer: 3,
    explanation: "In adsorption chromatography (for example, on silica gel or alumina), solutes compete with the mobile phase for active sites on the solid surface. More strongly adsorbed, usually more polar, compounds move more slowly. Distribution between two liquid phases describes partition chromatography."
  },
  {
    id: 16,
    question: "In paper chromatography, the stationary phase is essentially",
    options: ["The cellulose fibres acting as an adsorbent", "Water held by the cellulose fibres of the paper", "The organic solvent", "Silica gel coated on the paper"],
    answer: 1,
    explanation: "Paper chromatography is mainly a partition technique. Water bound to the hydrophilic cellulose is the stationary phase, and solutes partition between it and the moving organic solvent."
  },
  {
    id: 17,
    question: "After paper chromatography of a protein hydrolysate, the paper is sprayed with ninhydrin and heated. Most amino acids appear purple, but one appears yellow. That amino acid is most likely",
    options: ["Glycine", "Lysine", "Tryptophan", "Proline"],
    answer: 3,
    explanation: "Ninhydrin reacts with primary amino groups to form Ruhemann's purple. Proline (and hydroxyproline) has a secondary amine in its ring and gives a yellow product. Ninhydrin is also widely used to develop latent fingerprints on paper."
  },
  {
    id: 18,
    question: "Silica gel TLC plates marked 'F254' allow non-coloured compounds to be detected because",
    options: ["The compounds fluoresce at 254 nm", "The plate contains a fluorescent indicator, and UV-absorbing compounds appear as dark spots under 254 nm light", "254 is the particle size in micrometres", "The binder reacts with alkaloids to give orange spots"],
    answer: 1,
    explanation: "The fluorescent indicator (such as zinc silicate) glows green under short-wave UV. Compounds that absorb at 254 nm quench this fluorescence and show up as dark spots, which is a non-destructive first visualisation step."
  },
  {
    id: 19,
    question: "In TLC screening for drugs and poisons in viscera extracts, spraying with Dragendorff's reagent (potassium bismuth iodide) gives orange-red spots with",
    options: ["Alkaloids and other nitrogenous bases", "Sugars", "Fatty acids", "Phenols only"],
    answer: 0,
    explanation: "Dragendorff's reagent forms orange ion-pair complexes with tertiary amines and quaternary ammonium compounds, so it is a general locating reagent for alkaloids such as strychnine, atropine and morphine. Ferric chloride is used for phenols and iodine vapour as a general reagent."
  },
  {
    id: 20,
    question: "High-performance TLC (HPTLC) gives better resolution and quantitation than conventional TLC mainly because it uses",
    options: ["Thicker layers and larger silica particles", "Paper instead of glass plates", "A liquid stationary phase", "Smaller, more uniform particles in thinner layers, automated sample application and densitometric scanning"],
    answer: 3,
    explanation: "HPTLC plates use particles of about 5–6 µm (compared with 10–12 µm in TLC), giving sharper, more compact spots. Instrumental spotting and densitometric scanning make the method reproducible and quantitative, and it is accepted for drug and ink analysis."
  },
  {
    id: 21,
    question: "To strengthen a tentative identification by TLC, an analyst mixes the questioned extract with the suspected reference standard and spots the mixture. A single compact spot is seen. This approach is called",
    options: ["Co-chromatography (spiking)", "Two-dimensional TLC", "Reverse-phase TLC", "Preparative TLC"],
    answer: 0,
    explanation: "If the unknown and the standard are the same compound, they move together as one spot. Two different compounds would usually separate or give an elongated spot. Even so, matching Rf is presumptive and needs confirmation by a technique such as GC-MS."
  },
  {
    id: 22,
    question: "On a silica gel TLC plate developed with a non-polar solvent, which of the following will have the LOWEST Rf value?",
    options: ["A non-polar hydrocarbon", "A moderately polar ester", "A highly polar compound with several hydroxyl groups", "A halogenated hydrocarbon"],
    answer: 2,
    explanation: "Silica is polar, so polar molecules with hydroxyl groups are adsorbed strongly and move least, giving low Rf values. Non-polar compounds stay in the mobile phase and travel close to the solvent front."
  },
  {
    id: 23,
    question: "In column chromatography on silica gel, components that are held strongly can be eluted more quickly by",
    options: ["Gradually increasing the polarity of the eluting solvent", "Reducing the polarity of the eluting solvent", "Increasing the column length", "Packing the column with larger particles"],
    answer: 0,
    explanation: "A more polar eluent competes better for the adsorption sites on silica and displaces the strongly bound polar solutes. Stepwise or gradient increases in polarity are used to elute components one after another."
  },
  {
    id: 24,
    question: "A chromatographic peak has a retention time of 5.0 min and a baseline width of 0.25 min. Using N = 16 (tR/w)², the number of theoretical plates is",
    options: ["320", "1600", "64,000", "6400"],
    answer: 3,
    explanation: "N = 16 × (5.0/0.25)² = 16 × 20² = 16 × 400 = 6400 plates. A higher plate number means narrower peaks and a more efficient column."
  },
  {
    id: 25,
    question: "Two adjacent peaks elute at 6.0 and 6.8 min, each with a baseline width of 0.4 min. Using Rs = 2(t₂ − t₁)/(w₁ + w₂), their resolution is",
    options: ["1.0", "0.5", "2.0", "4.0"],
    answer: 2,
    explanation: "Rs = 2 × (6.8 − 6.0) / (0.4 + 0.4) = 1.6 / 0.8 = 2.0. A resolution of 1.5 or more is generally taken as baseline separation."
  },
  {
    id: 26,
    question: "In the van Deemter equation (H = A + B/u + C·u), which describes how column efficiency varies with mobile-phase velocity u, the B term represents",
    options: ["Eddy diffusion through multiple flow paths", "Resistance to mass transfer", "Longitudinal (axial) diffusion of the solute", "Detector dead volume"],
    answer: 2,
    explanation: "The B/u term is longitudinal diffusion, which matters most at low flow rates. The A term is eddy diffusion from multiple paths through the packing, and the C·u term is mass-transfer resistance, which dominates at high flow. The optimum velocity is where H is lowest."
  },
  {
    id: 27,
    question: "DEAE-cellulose is an ion-exchange matrix that is",
    options: ["A cation exchanger carrying negatively charged carboxymethyl groups", "An anion exchanger carrying positively charged diethylaminoethyl groups", "A gel-filtration medium of cross-linked dextran", "An affinity matrix carrying protein A"],
    answer: 1,
    explanation: "Diethylaminoethyl (DEAE) groups are protonated and positively charged at working pH, so they bind negatively charged molecules such as DNA or acidic proteins. CM (carboxymethyl) cellulose is the corresponding cation exchanger."
  },
  {
    id: 28,
    question: "A protein with an isoelectric point (pI) of 5.0 is loaded onto an anion-exchange column in a buffer at pH 8.0. The protein will",
    options: ["Bind to the column, because it carries a net negative charge", "Pass straight through, because it carries a net positive charge", "Bind only if the salt concentration is high", "Precipitate at the top of the column"],
    answer: 0,
    explanation: "Above its pI, a protein carries a net negative charge and binds a positively charged anion exchanger. It is then eluted by increasing the salt concentration, which competes for the binding sites, or by lowering the pH."
  },
  {
    id: 29,
    question: "Proteins bound to an ion-exchange column are most commonly eluted by",
    options: ["Raising the temperature", "Adding a detergent", "Applying a gradient of increasing salt (ionic strength)", "Increasing the flow rate"],
    answer: 2,
    explanation: "Salt ions such as Cl⁻ or Na⁺ compete with the bound proteins for the charged groups. Weakly bound proteins elute at low salt and strongly bound ones at higher salt, which gives the separation."
  },
  {
    id: 30,
    question: "In gel filtration (size-exclusion) chromatography on a cross-linked dextran gel such as Sephadex, which molecules elute FIRST?",
    options: ["The smallest molecules, because they move fastest", "The most highly charged molecules", "The most hydrophobic molecules", "The largest molecules, because they are excluded from the gel pores"],
    answer: 3,
    explanation: "Large molecules cannot enter the pores of the beads and travel only through the space between them, so they elute at the void volume. Small molecules enter the pores, take a longer path and elute later."
  },
  {
    id: 31,
    question: "Gel filtration can be used to estimate the molecular weight of a native protein because, within the fractionation range, the elution volume is approximately linearly related to",
    options: ["The logarithm of molecular weight", "The isoelectric point", "The square of molecular weight", "The number of disulphide bonds"],
    answer: 0,
    explanation: "A calibration plot of elution volume (or Kav) against log molecular weight for standard proteins is roughly linear, so an unknown can be read off. The estimate assumes a globular shape, since elongated molecules elute earlier than expected."
  },
  {
    id: 32,
    question: "A common laboratory use of a short gel filtration column such as a Sephadex G-25 spin column is to",
    options: ["Separate DNA fragments differing by one base", "Remove salts and small molecules (desalting or buffer exchange) from a protein or DNA sample", "Bind His-tagged proteins", "Separate enantiomers"],
    answer: 1,
    explanation: "G-25 excludes macromolecules but lets small ions and molecules enter its pores, so the protein or DNA emerges quickly while salts are retarded. It is used to clean up labelling reactions and to exchange buffers."
  },
  {
    id: 33,
    question: "Affinity chromatography differs from other chromatographic methods because it separates molecules based on",
    options: ["Their molecular size", "Their net charge", "A specific, reversible biological interaction with a ligand immobilised on the matrix", "Their volatility"],
    answer: 2,
    explanation: "A ligand such as an antibody, substrate analogue, lectin or metal ion is attached to the beads. Only molecules that bind specifically are retained, which can give very high purification in a single step."
  },
  {
    id: 34,
    question: "A recombinant protein with a polyhistidine (His₆) tag is purified on a Ni-NTA column. The bound protein is usually eluted with",
    options: ["Imidazole", "Reduced glutathione", "Maltose", "Biotin"],
    answer: 0,
    explanation: "Imidazole resembles the side chain of histidine and competes for the nickel ions, releasing the tagged protein. Glutathione elutes GST-tagged proteins and maltose elutes MBP-tagged proteins."
  },
  {
    id: 35,
    question: "Immobilised Protein A or Protein G is used in affinity chromatography to purify",
    options: ["Nucleic acids", "Immunoglobulin G antibodies, via their Fc region", "Glycoproteins via their sugar residues", "Steroid hormones"],
    answer: 1,
    explanation: "Protein A (from Staphylococcus aureus) and Protein G (from streptococci) bind the Fc portion of IgG with high affinity. The antibody is eluted at low pH. Lectin columns are used for glycoproteins."
  },
  {
    id: 36,
    question: "Which of the following statements about the mobile phase in gas chromatography is correct?",
    options: ["It is an inert carrier gas such as helium, nitrogen or hydrogen that does not interact with the analytes", "It is a polar liquid pumped at high pressure", "It is a gas that reacts with analytes to make them volatile", "It must be oxygen, to support detection"],
    answer: 0,
    explanation: "In GC, the carrier gas only transports the vaporised sample through the column; separation depends on interaction with the stationary phase and on volatility. Helium is common, and hydrogen gives faster analysis."
  },
  {
    id: 37,
    question: "Compared with packed columns, wall-coated open tubular (capillary) GC columns",
    options: ["Have far fewer theoretical plates", "Can hold much larger samples without overloading", "Have the stationary phase as a thin film on the inner wall, giving much higher efficiency and resolution", "Cannot be used with temperature programming"],
    answer: 2,
    explanation: "Fused-silica capillary columns (typically 15–60 m long and 0.1–0.53 mm internal diameter) have a thin film of stationary phase on the wall. A 30 m column typically gives over 100,000 theoretical plates, far more than a packed column, and capillary columns are standard in forensic drug and toxicology work."
  },
  {
    id: 38,
    question: "The flame ionisation detector (FID) used in gas chromatography",
    options: ["Uses a radioactive ⁶³Ni source to capture electrons", "Responds strongly to most organic compounds with C–H bonds but gives little or no response to water, CO₂ and nitrogen", "Is selective for nitrogen and phosphorus", "Measures changes in thermal conductivity only"],
    answer: 1,
    explanation: "Organic compounds burnt in a hydrogen-air flame produce ions, and the resulting current is proportional to the number of carbon atoms. Because water and permanent gases give almost no signal, the FID is well suited to aqueous samples. It destroys the sample."
  },
  {
    id: 39,
    question: "The electron capture detector (ECD) is particularly sensitive to",
    options: ["Saturated hydrocarbons", "Halogenated compounds such as organochlorine pesticides", "Simple alcohols", "Carbon dioxide"],
    answer: 1,
    explanation: "A ⁶³Ni β-source creates a standing current of electrons. Electronegative molecules (halogens, nitro groups) capture electrons and reduce the current, so organochlorine pesticides such as DDT and endosulfan are detected at very low levels."
  },
  {
    id: 40,
    question: "A toxicologist wants a GC detector that responds selectively to an organophosphate pesticide and to nitrogen-containing alkaloids while ignoring most other matrix compounds. The best choice is the",
    options: ["Thermal conductivity detector", "Flame ionisation detector", "Electron capture detector", "Nitrogen-phosphorus (thermionic) detector"],
    answer: 3,
    explanation: "The NPD uses a heated alkali-metal (rubidium or caesium) bead that selectively ionises compounds containing nitrogen or phosphorus. It is widely used for basic drugs and OP pesticides in biological extracts."
  },
  {
    id: 41,
    question: "Before GC analysis, polar drugs and metabolites containing –OH, –NH and –COOH groups are often treated with reagents such as BSTFA to form trimethylsilyl derivatives. The main purpose is to",
    options: ["Make them coloured for visual detection", "Increase their volatility and thermal stability and improve peak shape", "Increase their molecular polarity", "Convert them to ions for electrophoresis"],
    answer: 1,
    explanation: "Derivatisation replaces active hydrogens with non-polar groups, reducing hydrogen bonding. This makes the compounds more volatile and less likely to adsorb or decompose in the column, giving sharp, symmetrical peaks."
  },
  {
    id: 42,
    question: "Temperature programming in gas chromatography means",
    options: ["Raising the column oven temperature gradually during the run so that both volatile and less volatile components elute as sharp peaks in reasonable time", "Keeping the oven at the maximum temperature throughout", "Cooling the detector to improve sensitivity", "Heating the carrier gas cylinder"],
    answer: 0,
    explanation: "At a low starting temperature the volatile components separate well. As the temperature rises, high-boiling components elute sooner and as narrower peaks. It is the GC equivalent of gradient elution in HPLC."
  },
  {
    id: 43,
    question: "In gas chromatography, the Kovats retention index is preferred over raw retention time for comparing results between laboratories because it",
    options: ["Is independent of the stationary phase", "Gives the molecular weight directly", "Expresses retention relative to a series of n-alkanes, reducing the effect of column length, flow and temperature differences", "Eliminates the need for reference standards entirely"],
    answer: 2,
    explanation: "The retention index places a compound's retention between those of bracketing n-alkanes (for example, n-pentadecane has an index of 1500 by definition, and a compound eluting midway between C15 and C16 has an index of about 1550). It is reproducible between instruments using the same type of stationary phase, but it still depends on that phase."
  },
  {
    id: 44,
    question: "In reverse-phase HPLC on a C18 (octadecylsilane) column with a water-methanol mobile phase,",
    options: ["The stationary phase is polar and the most polar compounds elute last", "The stationary phase is non-polar and the most polar compounds elute first", "Separation is by molecular size only", "The mobile phase must be pure hexane"],
    answer: 1,
    explanation: "C18 chains make the stationary phase hydrophobic. Polar analytes prefer the polar mobile phase and elute early, while hydrophobic analytes are retained longer. Most forensic drug analyses use reverse-phase HPLC."
  },
  {
    id: 45,
    question: "In reverse-phase HPLC, increasing the proportion of acetonitrile in the mobile phase will generally",
    options: ["Increase the retention time of hydrophobic analytes", "Have no effect on retention", "Convert the separation to normal-phase", "Decrease retention times, because the mobile phase becomes a stronger eluent"],
    answer: 3,
    explanation: "In reverse phase, the organic modifier is the strong solvent. More acetonitrile or methanol makes the mobile phase less polar, so analytes partition into it more readily and elute faster. Gradient elution raises the organic content during the run."
  },
  {
    id: 46,
    question: "Normal-phase HPLC uses",
    options: ["A polar stationary phase such as silica with a non-polar mobile phase such as hexane, so non-polar compounds elute first", "A C18 stationary phase with an aqueous mobile phase", "An ion-exchange resin with a salt gradient", "A porous polymer that separates by size"],
    answer: 0,
    explanation: "Normal phase is the opposite of reverse phase: polar compounds are retained on the polar silica, and less polar ones elute first. It is useful for isomers and for compounds poorly soluble in water."
  },
  {
    id: 47,
    question: "A diode array (photodiode array) detector is preferred over a fixed-wavelength UV detector in forensic HPLC because it",
    options: ["Detects compounds that do not absorb UV", "Records the full UV-visible spectrum of each peak, aiding identification and peak-purity assessment", "Is the only detector compatible with gradient elution", "Measures the mass of each compound"],
    answer: 1,
    explanation: "The DAD acquires absorbance across a wavelength range simultaneously. The spectrum of each peak can be compared with library spectra and checked across the peak for co-eluting impurities. It still detects only UV-absorbing compounds."
  },
  {
    id: 48,
    question: "Which HPLC detector is a universal detector but is unsuitable for gradient elution because its baseline drifts when the mobile-phase composition changes?",
    options: ["Fluorescence detector", "UV-visible detector", "Refractive index detector", "Electrochemical detector"],
    answer: 2,
    explanation: "The RI detector responds to any analyte that changes the refractive index of the eluent, so it can detect sugars and other non-UV-absorbing compounds. It is relatively insensitive and very sensitive to temperature and solvent composition, so it is used only isocratically."
  },
  {
    id: 49,
    question: "For trace analysis of a naturally fluorescent drug such as LSD in a complex extract, a fluorescence detector is often chosen over UV because it",
    options: ["Responds to all organic compounds equally", "Is more sensitive and selective, since few matrix compounds fluoresce at the chosen excitation and emission wavelengths", "Does not require a light source", "Works only with normal-phase columns"],
    answer: 1,
    explanation: "Fluorescence detection measures emitted light against a dark background, so it can be 10–1000 times more sensitive than UV absorbance. Selecting specific excitation and emission wavelengths also screens out non-fluorescent interferences."
  },
  {
    id: 50,
    question: "A short cartridge packed with the same stationary phase as the analytical column is placed before an HPLC column. Its purpose is to",
    options: ["Increase the number of theoretical plates substantially", "Act as the detector cell", "Mix the gradient solvents", "Trap particulates and strongly retained matrix components, protecting the analytical column"],
    answer: 3,
    explanation: "A guard column catches particles and irreversibly adsorbed material from dirty samples such as biological extracts, extending the life of the expensive analytical column. It is replaced regularly."
  }
];

export default questions;
