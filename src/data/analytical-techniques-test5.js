const questions = [
  {
    id: 1,
    question: "In GC-MS, electron ionisation (EI) is normally carried out with electrons of energy",
    options: ["7 eV", "70 eV", "700 eV", "7 keV"],
    answer: 1,
    explanation: "70 eV is the standard because ionisation efficiency is near its maximum there and fragmentation patterns are highly reproducible between instruments. This reproducibility is what allows searchable EI libraries such as NIST and Wiley to work."
  },
  {
    id: 2,
    question: "Electron ionisation is described as a 'hard' ionisation technique because it",
    options: ["Requires a solid sample", "Uses a high-pressure reagent gas", "Produces only protonated molecules", "Imparts excess energy that causes extensive, characteristic fragmentation, so the molecular ion may be weak or absent"],
    answer: 3,
    explanation: "A 70 eV electron gives the molecule far more energy than is needed to ionise it (about 10 eV), so the radical cation M⁺• breaks into many fragments. This gives a structural fingerprint, but some compounds show little or no molecular ion."
  },
  {
    id: 3,
    question: "The ion first formed when an organic molecule M is ionised by electron impact is",
    options: ["A radical cation, M⁺•", "A protonated molecule, [M+H]⁺", "A deprotonated molecule, [M−H]⁻", "A sodium adduct, [M+Na]⁺"],
    answer: 0,
    explanation: "The incoming electron knocks out one electron from the molecule (M + e⁻ → M⁺• + 2e⁻), leaving an odd-electron radical cation. Protonated molecules and adducts are typical of soft techniques such as CI and ESI."
  },
  {
    id: 4,
    question: "In chemical ionisation (CI), a reagent gas such as methane, isobutane or ammonia is introduced into the source. The analyte is ionised mainly by",
    options: ["Direct impact of 70 eV electrons", "Absorption of laser energy by a matrix", "Gas-phase ion-molecule reactions, usually proton transfer, producing [M+H]⁺ with little fragmentation", "Evaporation of charged droplets"],
    answer: 2,
    explanation: "Electrons ionise the excess reagent gas, which forms reactive ions such as CH₅⁺. These transfer a proton to the analyte. Because little energy is transferred, CI gives a strong quasi-molecular ion and is used to confirm molecular weight when the EI molecular ion is weak."
  },
  {
    id: 5,
    question: "An EI spectrum of an unknown drug shows no clear molecular ion. The most appropriate next step to establish its molecular mass is to",
    options: ["Re-run the sample using chemical ionisation", "Increase the electron energy to 150 eV", "Use a longer GC column", "Lower the ion source temperature to ambient"],
    answer: 0,
    explanation: "CI is softer and usually gives an intense [M+H]⁺ ion from which the molecular mass is obtained. Increasing the electron energy would cause even more fragmentation."
  },
  {
    id: 6,
    question: "In electrospray ionisation (ESI), ions are produced by",
    options: ["Bombarding gaseous molecules with electrons", "Burning the sample in an argon plasma", "Irradiating a crystalline matrix with a UV laser", "Spraying the liquid through a high-voltage capillary to form charged droplets that shrink by evaporation until gas-phase ions are released"],
    answer: 3,
    explanation: "A high voltage on the capillary forms a Taylor cone and a fine spray of charged droplets. Solvent evaporation and Coulomb fission release ions such as [M+H]⁺ or [M−H]⁻. ESI is soft and works directly with LC eluent."
  },
  {
    id: 7,
    question: "A key feature of ESI that allows intact proteins of 50 kDa or more to be measured on analysers with a limited m/z range is that it",
    options: ["Produces only singly charged ions", "Fragments proteins into small peptides", "Requires derivatisation", "Produces multiply charged ions, so m/z values fall within the analyser's range"],
    answer: 3,
    explanation: "Proteins pick up many protons, giving a series of ions [M+nH]ⁿ⁺ at m/z = (M + n)/n. Deconvolution of this charge-state envelope gives the molecular mass. John Fenn shared the 2002 Nobel Prize in Chemistry for ESI."
  },
  {
    id: 8,
    question: "In MALDI, the role of the matrix (such as α-cyano-4-hydroxycinnamic acid or sinapinic acid) is to",
    options: ["Absorb the laser energy and transfer charge to the co-crystallised analyte, enabling soft desorption and ionisation", "Separate the analytes chromatographically", "Act as the collision gas", "Remove salts from the sample"],
    answer: 0,
    explanation: "The analyte is mixed with an excess of UV-absorbing matrix and dried. Laser pulses (for example, a 337 nm nitrogen laser) vaporise the matrix, carrying intact analyte molecules into the gas phase, mostly as singly charged [M+H]⁺ ions."
  },
  {
    id: 9,
    question: "MALDI is most commonly coupled with a time-of-flight analyser because",
    options: ["MALDI produces a continuous ion beam", "TOF requires multiply charged ions", "MALDI produces ions in discrete pulses, which suit the pulsed timing of TOF, and TOF has a practically unlimited m/z range", "TOF cannot be used with any other ion source"],
    answer: 2,
    explanation: "Each laser shot creates a packet of ions with a defined start time, which is exactly what TOF needs. Since MALDI gives mainly singly charged ions of large molecules, TOF's very high m/z range is also an advantage."
  },
  {
    id: 10,
    question: "Atmospheric pressure chemical ionisation (APCI) differs from ESI in that it",
    options: ["Uses a laser to ionise a matrix", "Vaporises the LC eluent in a heated nebuliser and ionises analytes by gas-phase reactions initiated by a corona discharge, suiting less polar, thermally stable small molecules", "Works only under high vacuum", "Is mainly used for intact proteins"],
    answer: 1,
    explanation: "APCI is a gas-phase process, essentially CI at atmospheric pressure. It ionises moderately polar and non-polar compounds that respond poorly in ESI, but it is unsuitable for large or thermally labile molecules."
  },
  {
    id: 11,
    question: "A quadrupole mass analyser separates ions by",
    options: ["Measuring their flight time over a fixed distance", "Trapping them in orbit around a central spindle electrode", "Applying combined DC and radiofrequency voltages to four parallel rods, so that only ions of a selected m/z have stable trajectories", "Bending them in a fixed magnetic field only"],
    answer: 2,
    explanation: "For a given DC/RF setting, only ions of one m/z pass through the rods; others collide with the rods. Scanning the voltages transmits each m/z in turn. Quadrupoles are compact and robust, and are the workhorse of GC-MS and triple-quadrupole LC-MS/MS."
  },
  {
    id: 12,
    question: "In selected ion monitoring (SIM) mode on a GC-quadrupole MS, the instrument",
    options: ["Records the full spectrum from m/z 40 to 550", "Measures exact masses to four decimal places", "Performs MS/MS fragmentation", "Monitors only a few characteristic ions of the target compound, increasing sensitivity"],
    answer: 3,
    explanation: "Because the quadrupole dwells longer on a few chosen ions instead of scanning the whole range, the signal-to-noise ratio and detection limits improve by up to about 10–100 times. The trade-off is that full-spectrum information is lost."
  },
  {
    id: 13,
    question: "In a time-of-flight analyser, all ions are accelerated through the same potential. Ions of higher m/z reach the detector later because",
    options: ["They receive more kinetic energy", "They are deflected by a magnetic field", "They undergo more collisions", "With equal kinetic energy, heavier ions travel more slowly, the flight time being proportional to √(m/z)"],
    answer: 3,
    explanation: "Kinetic energy zV = ½mv², so v ∝ √(z/m) and the flight time t ∝ √(m/z). Measuring arrival time over a fixed flight path therefore gives the m/z."
  },
  {
    id: 14,
    question: "In a TOF analyser, an ion of m/z 100 takes 10 µs to reach the detector. Under the same conditions, an ion of m/z 400 will take",
    options: ["20 µs", "40 µs", "14 µs", "160 µs"],
    answer: 0,
    explanation: "Flight time is proportional to √(m/z). The m/z ratio is 400/100 = 4, and √4 = 2, so the time is 2 × 10 µs = 20 µs."
  },
  {
    id: 15,
    question: "A reflectron improves the resolution of a TOF mass analyser by",
    options: ["Accelerating all ions to higher energy", "Using an ion mirror so that faster ions of the same m/z travel a longer path, correcting for spread in initial kinetic energy", "Fragmenting ions before detection", "Trapping ions for several seconds"],
    answer: 1,
    explanation: "Ions of the same m/z with slightly more energy penetrate deeper into the reflectron's retarding field and take a longer path, so they arrive at the detector together with slower ions. This narrows the peaks and improves resolution."
  },
  {
    id: 16,
    question: "Which mass analyser stores ions in a three-dimensional or linear radiofrequency field and can isolate and fragment them repeatedly to perform MSⁿ experiments in the same device?",
    options: ["Single quadrupole", "Linear TOF", "Ion trap", "Magnetic sector"],
    answer: 2,
    explanation: "An ion trap can isolate a precursor, fragment it, isolate a product ion and fragment it again (MS³, MS⁴ and so on) sequentially in time within one device. This is useful for elucidating the structure of unknown metabolites."
  },
  {
    id: 17,
    question: "In an Orbitrap mass analyser, the m/z of an ion is determined from",
    options: ["The frequency of its axial oscillation around a central spindle electrode, recorded as an image current and converted by Fourier transform", "Its flight time down a drift tube", "The DC/RF voltage at which it passes through four rods", "The radius of its path in a magnetic field"],
    answer: 0,
    explanation: "Ions orbit the spindle and oscillate along its axis with a frequency proportional to √(z/m). The image current from all ions is recorded and Fourier-transformed into a mass spectrum, giving very high resolution (often above 100,000) and mass accuracy below 5 ppm."
  },
  {
    id: 18,
    question: "To just resolve two ions at m/z 500.00 and 500.05, the minimum mass resolving power (R = m/Δm) required is",
    options: ["1,000", "5,000", "100,000", "10,000"],
    answer: 3,
    explanation: "R = m/Δm = 500 / 0.05 = 10,000. Unit-resolution quadrupoles (R about 1000 at m/z 500) cannot separate such ions, but high-resolution TOF and Orbitrap analysers can."
  },
  {
    id: 19,
    question: "The theoretical m/z of protonated cocaine [M+H]⁺ (C₁₇H₂₂NO₄⁺) is 304.1543. A high-resolution instrument measures 304.1550. The mass error is approximately",
    options: ["0.7 ppm", "23 ppm", "2.3 ppm", "0.23 ppm"],
    answer: 2,
    explanation: "Error (ppm) = (304.1550 − 304.1543) / 304.1543 × 10⁶ = 0.0007 / 304.1543 × 10⁶ ≈ 2.3 ppm. An error within about 5 ppm supports the proposed elemental formula but does not by itself identify the isomer."
  },
  {
    id: 20,
    question: "In multiple reaction monitoring (MRM) on a triple-quadrupole LC-MS/MS, the sequence of events is",
    options: ["Q1 scans all ions, q2 is empty and Q3 detects all fragments", "Q1 selects the precursor ion, q2 fragments it by collision with an inert gas, and Q3 selects a specific product ion", "Q1 fragments the ions and Q3 accelerates them", "Q1 and Q3 both scan the full range simultaneously"],
    answer: 1,
    explanation: "Each MRM transition, from precursor m/z to product m/z, is highly specific and filters out chemical noise, giving excellent sensitivity for quantitation. Forensic confirmation usually requires at least two transitions with an acceptable ion ratio, together with retention time."
  },
  {
    id: 21,
    question: "In tandem mass spectrometry, the process in which selected ions are accelerated into a neutral gas such as argon or nitrogen and break apart is called",
    options: ["Collision-induced dissociation", "Electron capture", "Charge-remote ionisation", "Matrix-assisted desorption"],
    answer: 0,
    explanation: "Collision-induced (collisionally activated) dissociation converts kinetic energy into internal energy, breaking the ion into product ions characteristic of its structure. The collision energy is optimised for each compound."
  },
  {
    id: 22,
    question: "A toxicologist wants to find every compound in an extract that loses the same neutral fragment (for example, 176 Da from a glucuronide) on fragmentation. The appropriate triple-quadrupole scan mode is",
    options: ["Product ion scan", "Precursor ion scan", "Neutral loss scan", "Selected ion monitoring"],
    answer: 2,
    explanation: "In a neutral loss scan, Q1 and Q3 are scanned together with a fixed mass offset. Only ions that lose exactly that neutral mass in the collision cell are detected. A loss of 176 Da reveals glucuronide conjugates."
  },
  {
    id: 23,
    question: "In a product ion scan,",
    options: ["Q1 scans and Q3 is fixed on one fragment", "Both quadrupoles are fixed", "No collision gas is used", "A single precursor is selected in Q1, fragmented in q2, and Q3 scans to record all of its product ions"],
    answer: 3,
    explanation: "The product ion spectrum shows the fragmentation of a chosen precursor and is used to identify structures and to choose MRM transitions. Fixing Q3 on a fragment while Q1 scans is a precursor ion scan."
  },
  {
    id: 24,
    question: "In an LC-MS/MS confirmation, a sample peak matches the reference standard's retention time, but the ratio of its two MRM transitions differs by 60% from that of the standard. The analyst should",
    options: ["Report the drug as confirmed because the retention time matches", "Not report it as confirmed, because the ion ratio is outside acceptance criteria and an interference may be present", "Average the two transitions and report", "Ignore the second transition"],
    answer: 1,
    explanation: "Identification criteria require retention time, the presence of the transitions and an ion ratio within set tolerances (often ±20–30% of the reference). A large deviation suggests a co-eluting interference, so identity is not established."
  },
  {
    id: 25,
    question: "MALDI-TOF MS identifies bacteria and fungi in clinical and forensic microbiology mainly by",
    options: ["Sequencing their 16S rRNA genes", "Detecting volatile metabolites", "Measuring their DNA melting temperature", "Comparing the spectral fingerprint of abundant proteins, largely ribosomal proteins of about 2–20 kDa, with a reference database"],
    answer: 3,
    explanation: "A colony is smeared on the target and overlaid with matrix. The resulting peak pattern, dominated by conserved ribosomal proteins, is matched against libraries (for example, Biotyper or VITEK MS), often identifying the organism to species level within minutes."
  },
  {
    id: 26,
    question: "In peptide mass fingerprinting, a protein is identified by",
    options: ["Digesting it with trypsin and matching the measured masses of the resulting peptides with theoretical digests of database proteins", "Measuring only its intact mass", "Staining it with Coomassie", "Determining its isoelectric point"],
    answer: 0,
    explanation: "Trypsin cleaves after lysine and arginine, giving a predictable set of peptides for each sequence. A MALDI-TOF list of peptide masses is compared with in-silico digests in protein databases, and the best-scoring match identifies the protein."
  },
  {
    id: 27,
    question: "Which forensic laboratory application is a direct use of MALDI-TOF mass spectrometry?",
    options: ["Measuring blood lead concentration", "Determining ¹³C/¹²C ratios in hair", "Rapid identification of bacterial species in a suspected bioterror or food-poisoning sample", "Measuring blood alcohol by headspace analysis"],
    answer: 2,
    explanation: "MALDI-TOF protein profiling identifies cultured organisms within minutes and is now standard in microbiology laboratories. Blood lead is measured by AAS or ICP-MS, isotope ratios by IRMS, and alcohol by headspace GC-FID."
  },
  {
    id: 28,
    question: "Peptide markers detected by mass spectrometry are increasingly used in forensic serology because, unlike many immunological tests, they can",
    options: ["Work only on fresh samples", "Provide species and body-fluid specific protein identification from a single analysis, with sequence-level specificity", "Give the donor's STR profile", "Replace DNA quantitation"],
    answer: 1,
    explanation: "Proteotypic peptides from proteins such as haemoglobin, semenogelin, statherin and uromodulin can identify blood, semen, saliva and urine, and the species of origin, in one LC-MS/MS run. They do not provide genotype information, which still needs DNA analysis."
  },
  {
    id: 29,
    question: "GC-MS is regarded as the gold standard for identifying drugs and poisons in forensic toxicology chiefly because it combines",
    options: ["High throughput with low cost only", "Immunological specificity with high sensitivity", "Elemental analysis with isotope ratios", "Chromatographic separation with a mass spectrum that acts as a molecular fingerprint for library comparison"],
    answer: 3,
    explanation: "The GC provides retention time and separates the analyte from the matrix, while the EI mass spectrum gives structural information that can be matched against reference libraries. Courts accept this combination as confirmatory evidence."
  },
  {
    id: 30,
    question: "Which analytical technique is the method of choice for determining blood alcohol concentration in a forensic laboratory?",
    options: ["Headspace gas chromatography with FID, using an internal standard such as n-propanol", "Atomic absorption spectroscopy", "Immunoassay", "UV spectroscopy at 260 nm"],
    answer: 0,
    explanation: "Headspace GC separates ethanol from methanol, acetone and other volatiles and avoids injecting blood proteins onto the column. An internal standard corrects for injection variability. Two columns of different polarity or GC-MS confirmation increase reliability."
  },
  {
    id: 31,
    question: "A suspected volatile poisoning case requires analysis of a blood sample for petroleum hydrocarbons without any solvent extraction. The most suitable sample introduction technique for GC-MS is",
    options: ["Derivatisation with BSTFA", "Protein precipitation with acetonitrile", "Headspace or solid-phase microextraction (SPME) sampling of the vapour above the heated sample", "Acid hydrolysis followed by liquid-liquid extraction"],
    answer: 2,
    explanation: "Volatiles partition into the vapour above the warmed, sealed sample and can be sampled directly or concentrated on an SPME fibre. This avoids solvent interference and keeps non-volatile matrix out of the instrument. SPME is also used for fire-debris analysis."
  },
  {
    id: 32,
    question: "In fire debris analysis, GC-MS is used to classify ignitable liquids by",
    options: ["Measuring the flash point of the debris", "Comparing the total ion chromatogram and extracted ion profiles of alkanes, aromatics and cycloalkanes with reference patterns such as those of ASTM E1618", "Measuring the ash content", "Determining the elemental composition"],
    answer: 1,
    explanation: "Petrol, kerosene and diesel each give a characteristic distribution of compound classes. Extracted ion profiling highlights target compound groups even against a background of pyrolysis products from carpets and plastics."
  },
  {
    id: 33,
    question: "LC-MS/MS is preferred over GC-MS for many modern forensic toxicology analyses because it can analyse",
    options: ["Only permanent gases", "Elements rather than molecules", "Polar, thermally labile and non-volatile drugs, metabolites and conjugates without derivatisation", "Only compounds with a molecular weight above 10 kDa"],
    answer: 2,
    explanation: "GC requires volatile, thermally stable analytes, so polar metabolites and glucuronide conjugates must be derivatised or hydrolysed. LC-MS/MS with ESI handles them directly, with very high sensitivity for small sample volumes."
  },
  {
    id: 34,
    question: "In quantitative LC-MS/MS, the ideal internal standard for a drug is",
    options: ["A structurally unrelated compound of similar molecular weight", "A stable isotope-labelled analogue of the drug, such as the deuterated or ¹³C-labelled form", "The drug's major metabolite", "No internal standard, with external calibration only"],
    answer: 1,
    explanation: "A labelled analogue co-elutes with the analyte and experiences the same extraction losses and ion-suppression effects, but is distinguished by mass. This corrects the result better than any structural analogue, and is why such standards are used in confirmatory work."
  },
  {
    id: 35,
    question: "Matrix effects in LC-MS/MS of biological samples usually appear as",
    options: ["A shift in retention time only", "Loss of chromatographic resolution", "Suppression or enhancement of analyte ionisation by co-eluting matrix components, which changes the signal", "Formation of new covalent derivatives of the analyte"],
    answer: 2,
    explanation: "Co-eluting phospholipids, salts and proteins compete in the ESI droplet, most often suppressing the analyte signal. Matrix effects are assessed by post-column infusion or by comparing spiked matrix with neat solution, and are compensated by isotope-labelled internal standards and better clean-up."
  },
  {
    id: 36,
    question: "A urine sample is screened for benzodiazepines by immunoassay and is positive, but LC-MS/MS of the untreated urine finds almost nothing. The most likely explanation is that",
    options: ["Most benzodiazepines are excreted as glucuronide conjugates, which must be hydrolysed before analysis", "The immunoassay result was necessarily a false positive", "LC-MS/MS cannot detect benzodiazepines", "The urine was too dilute for both methods"],
    answer: 0,
    explanation: "Some immunoassays respond to conjugated metabolites, whereas an LC-MS/MS method set up for the free (unconjugated) drugs misses them. Enzymatic hydrolysis with β-glucuronidase (or acid hydrolysis) releases the free drug, after which it is detected."
  },
  {
    id: 37,
    question: "In ICP-MS, the function of the inductively coupled argon plasma is to",
    options: ["Separate ions by mass", "Desolvate, atomise and ionise the sample at about 6000–10,000 K, producing mainly singly charged positive ions of the elements present", "Generate X-rays characteristic of each element", "Provide a soft ionisation that keeps molecules intact"],
    answer: 1,
    explanation: "The plasma is hot enough to break all chemical bonds and ionise most elements with high efficiency. The resulting elemental ions are extracted into the mass analyser, usually a quadrupole, giving multi-element analysis at part-per-trillion levels."
  },
  {
    id: 38,
    question: "Compared with flame atomic absorption spectroscopy, the main advantages of ICP-MS for analysing metals in biological samples are",
    options: ["Lower cost and simpler instrumentation", "Freedom from any spectral interference", "The ability to identify organic molecules", "Rapid simultaneous multi-element determination, much lower detection limits and the ability to measure isotope ratios"],
    answer: 3,
    explanation: "ICP-MS scans the mass range quickly, so many elements are measured in one run at part-per-trillion levels, and individual isotopes can be measured. It does suffer polyatomic and isobaric interferences, which are handled by collision or reaction cells and by high-resolution instruments."
  },
  {
    id: 39,
    question: "In a suspected chronic metallic poisoning case, segmental analysis of a hair strand for arsenic, mercury and lead is best performed by",
    options: ["GC-MS after derivatisation", "Laser ablation ICP-MS or ICP-MS after microwave digestion of hair segments", "MALDI-TOF MS", "Fluorescence spectroscopy"],
    answer: 1,
    explanation: "ICP-MS measures the metals at trace levels in milligram amounts of hair, and laser ablation sampling gives spatial resolution along the strand. Because hair grows about 1 cm per month, segment concentrations give an approximate timeline of exposure."
  },
  {
    id: 40,
    question: "In glass fragment comparison, ICP-MS is used to compare the concentrations of trace elements such as rubidium, strontium, zirconium and lanthanum because",
    options: ["These elements determine the colour of glass only", "Refractive index measurement is impossible on small fragments", "Trace element profiles vary between manufacturing batches, so they discriminate far better than refractive index alone", "They indicate the age of the glass in years"],
    answer: 2,
    explanation: "Modern float glass has very uniform refractive index, so RI alone has limited discriminating power. Laser ablation ICP-MS measures trace elements left from raw materials and batch variation, greatly improving the strength of a comparison."
  },
  {
    id: 41,
    question: "Isotope ratio mass spectrometry (IRMS) differs from conventional organic mass spectrometry in that it measures",
    options: ["Small variations in the relative abundance of stable isotopes such as ¹³C/¹²C and ¹⁵N/¹⁴N with very high precision", "The exact masses of unknown molecules", "Radioactive decay rates", "Fragmentation patterns for library matching"],
    answer: 0,
    explanation: "The sample is converted to simple gases such as CO₂ and N₂, and the isotopologue ion beams are measured simultaneously in Faraday cups. IRMS gives no structural information; it reports isotopic composition relative to international standards."
  },
  {
    id: 42,
    question: "In IRMS, isotopic composition is usually reported in delta notation (δ‰) relative to an international standard. For carbon, that standard is",
    options: ["Standard mean ocean water", "Atmospheric nitrogen", "Vienna Pee Dee Belemnite (VPDB)", "Canyon Diablo troilite"],
    answer: 2,
    explanation: "δ¹³C values are expressed relative to VPDB, SMOW is used for hydrogen and oxygen, AIR for nitrogen and CDT for sulphur. Results are reported in parts per thousand (per mil)."
  },
  {
    id: 43,
    question: "A forensic application of stable isotope ratio analysis of human hair or bone is to",
    options: ["Obtain a DNA profile from the keratin", "Determine the exact age of the individual in years", "Infer the geographical region and dietary history of an unidentified person, helping to narrow the search", "Measure the time since death precisely"],
    answer: 2,
    explanation: "δ²H and δ¹⁸O largely reflect local drinking water, while δ¹³C and δ¹⁵N reflect diet, such as the proportion of C4 plants (maize) and animal protein. These values provide investigative intelligence on probable region of residence, not an identification."
  },
  {
    id: 44,
    question: "IRMS has also been applied to drug intelligence, for example to",
    options: ["Determine the purity of a tablet", "Detect cutting agents such as caffeine", "Determine the mass of the consignment", "Link seizures by batch and distinguish plant-derived from synthetically produced drugs through their isotopic signature"],
    answer: 3,
    explanation: "Precursors and growing conditions leave characteristic δ¹³C and δ¹⁵N values, so cocaine from different regions, or synthetic versus biosynthetic compounds, can be distinguished. Purity and adulterants are determined by chromatographic methods instead."
  },
  {
    id: 45,
    question: "In the EI mass spectrum of an unknown compound, the molecular ion at m/z 150 is accompanied by a peak at m/z 152 of nearly equal intensity. This pattern indicates the presence of",
    options: ["One bromine atom", "One chlorine atom", "One nitrogen atom", "Two oxygen atoms"],
    answer: 0,
    explanation: "Bromine has two isotopes, ⁷⁹Br and ⁸¹Br, of almost equal abundance, giving M and M+2 peaks of about 1:1. Chlorine (³⁵Cl and ³⁷Cl) gives M and M+2 in about a 3:1 ratio, so the isotope pattern reveals which halogen is present."
  },
  {
    id: 46,
    question: "A mass spectrum shows an odd-numbered molecular ion at m/z 179 with the elemental composition containing carbon, hydrogen, oxygen and nitrogen. Applying the nitrogen rule, the molecule contains",
    options: ["No nitrogen", "An even number of nitrogen atoms", "An odd number of nitrogen atoms", "Exactly four nitrogen atoms"],
    answer: 2,
    explanation: "The nitrogen rule states that an organic molecule made of C, H, O, N, S and halogens has an odd nominal molecular mass only if it contains an odd number of nitrogen atoms. This quick check helps when interpreting unknown spectra."
  },
  {
    id: 47,
    question: "In an EI mass spectrum, the base peak is",
    options: ["The peak of lowest m/z in the spectrum", "The most intense peak, which is assigned a relative intensity of 100%", "Always the molecular ion", "The peak due to the carrier gas"],
    answer: 1,
    explanation: "All other peaks are expressed as a percentage of the base peak, which often corresponds to the most stable fragment, such as m/z 82 for cocaine or m/z 91 (tropylium) for many alkylbenzenes. It is not necessarily the molecular ion."
  },
  {
    id: 48,
    question: "When a library search of an unknown GC-MS peak returns a high match score, the analyst should still",
    options: ["Report the library hit as a confirmed identification immediately", "Convert the spectrum to a CI spectrum", "Repeat only the library search with a different library", "Verify the identity by comparing retention time and mass spectrum with an authentic reference standard analysed on the same system"],
    answer: 3,
    explanation: "Library matching is a strong lead, but isomers and closely related homologues can give very similar EI spectra, and the retention time is not part of most libraries. Confirmation against an in-house standard run under the same conditions is required for court."
  },
  {
    id: 49,
    question: "Before a library search of a GC-MS peak from a biological extract, background subtraction of the spectrum is performed in order to",
    options: ["Increase the molecular ion abundance artificially", "Remove ions arising from the column, solvent and co-eluting matrix so that the spectrum represents the analyte", "Change the retention time", "Convert relative intensities into absolute concentrations"],
    answer: 1,
    explanation: "Background from stationary-phase decomposition, air and solvent contributes extraneous ions that degrade the match score and can mislead interpretation. Subtracting a spectrum taken just before or after the peak gives a cleaner analyte spectrum."
  },
  {
    id: 50,
    question: "Newly emerging synthetic cannabinoids are often missed by targeted MRM methods. The most suitable approach for detecting such unknown new psychoactive substances in a case sample is",
    options: ["Immunoassay screening alone", "Non-targeted screening by high-resolution accurate-mass LC-MS (QTOF or Orbitrap) with accurate-mass databases and retrospective data analysis", "Headspace GC-FID", "Atomic absorption spectroscopy"],
    answer: 1,
    explanation: "High-resolution full-scan acquisition records everything in the sample, so accurate masses can be searched against databases, and the data can be reinterrogated later when a new substance is reported. Targeted MRM only finds compounds whose transitions were programmed in advance."
  }
];

export default questions;
