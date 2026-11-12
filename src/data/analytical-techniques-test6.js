const questions = [
  {
    id: 1,
    question: "In forensic body-fluid identification, messenger RNA markers are preferred over protein-based tests mainly because",
    options: ["mRNA is more stable than DNA in dried stains", "mRNA is present only in blood", "mRNA analysis also yields the donor's STR profile", "mRNA can be co-extracted with DNA from the same stain and gives tissue-specific expression patterns, allowing several fluids to be tested at once"],
    answer: 3,
    explanation: "Cell types differ in which genes they express, so a multiplex reverse-transcription PCR panel can distinguish blood, saliva, semen, vaginal secretion and menstrual blood. Co-extraction means the limited sample is not wasted, though the profile still comes from the DNA fraction."
  },
  {
    id: 2,
    question: "Which messenger RNA marker is most widely used as an indicator of peripheral blood in forensic body-fluid identification?",
    options: ["Statherin (STATH)", "Protamine 2 (PRM2)", "Haemoglobin beta (HBB) and ALAS2", "Mucin 4 (MUC4)"],
    answer: 2,
    explanation: "HBB and ALAS2 are expressed in erythroid cells and are standard blood markers. STATH and HTN3 indicate saliva, PRM1/PRM2 and SEMG1 indicate semen, and MUC4 and CYP2B7P1 are used for vaginal secretion."
  },
  {
    id: 3,
    question: "A stain is thought to be menstrual blood rather than circulating blood. The mRNA marker most useful for this distinction is",
    options: ["Matrix metalloproteinases such as MMP7 and MMP11", "ALAS2", "KRT4", "SEMG1"],
    answer: 0,
    explanation: "Matrix metalloproteinase transcripts are strongly expressed in the shedding endometrium, so they indicate menstrual rather than peripheral blood. ALAS2 is present in both, since menstrual blood also contains erythrocytes."
  },
  {
    id: 4,
    question: "MicroRNAs are attractive markers for degraded forensic samples because they",
    options: ["Are present only in nucleated cells", "Are long transcripts that resist nucleases", "Are short, about 18–25 nucleotides, and are relatively resistant to degradation, with tissue-specific expression profiles", "Are translated into tissue-specific proteins"],
    answer: 2,
    explanation: "Their very short length and association with protein complexes make miRNAs more robust than mRNA in aged or environmentally exposed stains. Candidate markers such as miR-451a for blood and miR-205 for saliva are being evaluated, but standardisation and normalisation remain challenges."
  },
  {
    id: 5,
    question: "Forensic age estimation from DNA methylation works because the methylation level at certain CpG sites",
    options: ["Is identical in all tissues and all individuals", "Changes in a predictable, progressive way with chronological age", "Is determined solely by the donor's sex", "Changes only after death"],
    answer: 1,
    explanation: "Age-associated CpG sites in genes such as ELOVL2, FHL2, KLF14, TRIM59 and ASPA gain or lose methylation steadily through life. Regression models built on blood or saliva typically predict chronological age with a mean absolute deviation of about 3–5 years."
  },
  {
    id: 6,
    question: "A limitation that must be considered when using a DNA methylation age-prediction model on a crime-scene stain is that",
    options: ["The model is tissue-specific, so a model built on blood cannot be applied directly to saliva or semen", "Methylation cannot be measured from dried stains at all", "Methylation analysis destroys the STR profile", "Methylation markers reveal the donor's identity directly"],
    answer: 0,
    explanation: "Methylation patterns differ between tissues, so the body fluid must first be identified and a matching model applied. Prediction error also tends to increase in elderly donors and in individuals with certain diseases."
  },
  {
    id: 7,
    question: "Methylation-based analysis is also used in forensic genetics to distinguish",
    options: ["Blood of different ABO groups", "Paternal from maternal alleles at STR loci", "Male and female DNA", "Monozygotic twins, who are genetically identical but may differ in epigenetic patterns"],
    answer: 3,
    explanation: "Identical twins cannot be separated by STR typing, but epigenetic differences accumulate with age and differing environments, so differential methylation offers a possible route. The approach is still research-level and must be used with great caution."
  },
  {
    id: 8,
    question: "Bisulphite treatment of DNA, used in methylation analysis, converts",
    options: ["Methylated cytosine to thymine", "Unmethylated cytosine to uracil, while 5-methylcytosine is unchanged", "Guanine to adenine", "All cytosines to uracil"],
    answer: 1,
    explanation: "After bisulphite conversion, unmethylated cytosines read as thymine in sequencing while methylated cytosines still read as cytosine. The methylation state is therefore converted into a sequence difference that can be read by pyrosequencing, SNaPshot or massively parallel sequencing."
  },
  {
    id: 9,
    question: "Prostate-specific antigen (p30) detected in a stain is used in forensic serology as a marker of",
    options: ["Saliva", "Semen, including that of azoospermic or vasectomised men", "Urine", "Vaginal secretion"],
    answer: 1,
    explanation: "PSA is secreted by the prostate, so it is present in seminal fluid even when spermatozoa are absent. It is detected by immunochromatographic cards or ELISA. Very low levels occur in female urine and breast fluid, so PSA is treated as highly indicative rather than absolutely specific."
  },
  {
    id: 10,
    question: "Which protein marker is the basis of the rapid immunochromatographic test used to indicate saliva at a crime scene?",
    options: ["Semenogelin", "Uromodulin", "Salivary alpha-amylase", "Haptoglobin"],
    answer: 2,
    explanation: "Alpha-amylase is present at high concentration in saliva, and the Phadebas and immunological card tests target it. Amylase also occurs in pancreatic secretion, breast milk and some vaginal fluid, so the test is presumptive."
  },
  {
    id: 11,
    question: "Opioids such as morphine and heroin produce respiratory depression, pinpoint pupils and coma by acting mainly as agonists at",
    options: ["GABA-A receptors", "Nicotinic acetylcholine receptors", "NMDA receptors", "Mu opioid receptors"],
    answer: 3,
    explanation: "Mu receptor activation in the brainstem reduces the response to carbon dioxide, causing hypoventilation. The classic triad is pinpoint pupils, depressed respiration and coma, and naloxone, a competitive mu antagonist, reverses it."
  },
  {
    id: 12,
    question: "In a urine sample, which analyte proves specifically that heroin, rather than medicinal morphine or codeine, has been used?",
    options: ["Morphine-3-glucuronide", "Normorphine", "6-Monoacetylmorphine (6-MAM)", "Codeine"],
    answer: 2,
    explanation: "Heroin (diacetylmorphine) is hydrolysed to 6-MAM and then to morphine. 6-MAM has no other source, so its presence is specific for heroin, but its half-life is short, so it is usually detectable in urine for only a few hours, generally less than a day."
  },
  {
    id: 13,
    question: "The urinary metabolite targeted in immunoassay and confirmatory testing for cannabis use is",
    options: ["Δ⁹-Tetrahydrocannabinol", "11-Nor-9-carboxy-Δ⁹-THC (THC-COOH)", "Cannabidiol", "11-Hydroxy-THC"],
    answer: 1,
    explanation: "THC itself is rapidly cleared from blood into tissues, and the inactive carboxy metabolite, mostly as its glucuronide, is excreted in urine for days to weeks in chronic users. Finding THC-COOH shows past use, not current impairment."
  },
  {
    id: 14,
    question: "The urinary metabolite used to confirm cocaine use is",
    options: ["Benzoylecgonine", "Ecgonine methyl ester only", "Cocaethylene only", "Norcocaine only"],
    answer: 0,
    explanation: "Benzoylecgonine is the major, relatively stable hydrolysis product of cocaine and is detectable in urine for 2–4 days after use. Cocaethylene forms only when cocaine and ethanol are taken together, so it indicates concurrent alcohol use."
  },
  {
    id: 15,
    question: "An immunoassay screen for amphetamines is positive in a patient taking a nasal decongestant, but confirmatory GC-MS finds no amphetamine or methamphetamine. The most likely explanation is",
    options: ["A laboratory mix-up of samples", "Dilution of the urine", "Degradation of amphetamine during storage", "Cross-reactivity of the antibody with structurally similar sympathomimetic amines such as pseudoephedrine"],
    answer: 3,
    explanation: "Amphetamine immunoassays are notorious for cross-reacting with ephedrine, pseudoephedrine, phenylephrine, selegiline metabolites and some antidepressants. This is exactly why every presumptive positive must be confirmed by a chromatographic-mass spectrometric method."
  },
  {
    id: 16,
    question: "Which statement about benzodiazepine detection in urine is correct?",
    options: ["All benzodiazepines are excreted unchanged", "Immunoassays detect all benzodiazepines equally well", "Many are excreted as glucuronides and some, such as clonazepam and lorazepam, are poorly detected by common immunoassays", "Benzodiazepines cannot be detected in urine at all"],
    answer: 2,
    explanation: "Most benzodiazepine immunoassays are calibrated against oxazepam and respond poorly to the low-dose, highly metabolised drugs. Hydrolysis with β-glucuronidase followed by LC-MS/MS is needed for reliable detection, which matters in drug-facilitated crime cases."
  },
  {
    id: 17,
    question: "Barbiturates produce central nervous system depression mainly by",
    options: ["Blocking dopamine reuptake", "Enhancing GABA-A receptor-mediated chloride conductance, prolonging channel opening", "Blocking sodium channels in the heart", "Antagonising mu opioid receptors"],
    answer: 1,
    explanation: "Barbiturates bind the GABA-A receptor and increase the duration of chloride channel opening, and at high doses open the channel directly. This direct action explains their low therapeutic index compared with benzodiazepines, which only increase the frequency of channel opening."
  },
  {
    id: 18,
    question: "At autopsy, bullous skin lesions ('barbiturate blisters') over pressure areas, along with gastric tablet residue, suggest poisoning by",
    options: ["Barbiturates and other deeply sedating drugs", "Cannabis", "Cocaine", "Organophosphates"],
    answer: 0,
    explanation: "Prolonged immobility and pressure in deep coma produce tense bullae over dependent areas. Although classically described with barbiturates, similar lesions occur with other drugs causing prolonged coma, including carbon monoxide poisoning."
  },
  {
    id: 19,
    question: "Under the Narcotic Drugs and Psychotropic Substances Act, 1985, the punishment for an offence depends primarily on",
    options: ["The age of the accused", "The state in which the offence occurred", "Whether the drug is natural or synthetic", "The quantity involved, classified as small, more than small but less than commercial, or commercial"],
    answer: 3,
    explanation: "The quantity-based graded structure was introduced by the 2001 amendment. Small quantities attract lesser punishment, while commercial quantities attract rigorous imprisonment of not less than ten years and the bail restrictions of section 37."
  },
  {
    id: 20,
    question: "Under the NDPS Act, 1985, the term 'manufactured drug' and the schedule of small and commercial quantities for each substance are notified by",
    options: ["The State Government concerned", "The Central Government by notification in the Official Gazette", "The Supreme Court", "The Narcotics Control Bureau alone"],
    answer: 1,
    explanation: "Section 2 empowers the Central Government to notify substances and quantities, and a Gazette notification lists small and commercial quantities for each drug. The NCB is the coordinating enforcement agency created under section 4(3), not the notifying authority."
  },
  {
    id: 21,
    question: "Section 27 of the NDPS Act, 1985 deals with",
    options: ["Punishment for consumption of any narcotic drug or psychotropic substance", "Death penalty for repeat offenders", "Immunity for addicts volunteering for treatment", "Power to issue search warrants"],
    answer: 0,
    explanation: "Section 27 punishes consumption, with a heavier penalty for drugs such as heroin and cocaine than for others. Section 31 provides enhanced punishment after a previous conviction, section 31A provides the death penalty for certain repeat offences, and section 64A provides immunity for addicts who volunteer for treatment."
  },
  {
    id: 22,
    question: "In NDPS casework, section 52A prescribes the procedure for",
    options: ["Appointing public prosecutors", "Granting bail in commercial quantity cases", "Disposal of seized narcotic drugs, including drawing representative samples before a magistrate and certifying an inventory", "Appeal against conviction"],
    answer: 2,
    explanation: "Because bulk seizures cannot be stored indefinitely, section 52A allows early disposal after a magistrate certifies the inventory, photographs and representative samples. Courts have repeatedly held that failure to follow this procedure can seriously weaken the prosecution case."
  },
  {
    id: 23,
    question: "For estimating blood alcohol concentration in a living person suspected of driving under the influence, the preferred preservative and anticoagulant in the blood collection vial are",
    options: ["Sodium fluoride with potassium oxalate", "EDTA alone", "Heparin alone", "Formalin"],
    answer: 0,
    explanation: "Sodium fluoride inhibits microbial fermentation and enzymatic change, which can otherwise generate or destroy ethanol, and oxalate prevents clotting. The skin should be cleaned with a non-alcoholic antiseptic such as aqueous povidone-iodine."
  },
  {
    id: 24,
    question: "Vitreous humour is a valuable postmortem toxicology sample mainly because it is",
    options: ["Richest in drug concentration of all fluids", "Easier to collect than blood in all cases", "The only fluid in which alcohol is produced after death", "Anatomically isolated and relatively resistant to putrefaction and postmortem redistribution"],
    answer: 3,
    explanation: "The eye is a closed compartment, so vitreous resists bacterial contamination and diffusion from the gut. Vitreous alcohol correlates well with antemortem blood alcohol, and vitreous is also used for electrolytes, glucose and drug screening."
  },
  {
    id: 25,
    question: "A decomposed body yields a blood alcohol concentration of 60 mg/dL. Which additional finding would best support the view that this alcohol was produced after death rather than consumed?",
    options: ["Presence of alcohol in the urine at a similar level", "Alcohol detected in the gastric contents", "Presence of n-propanol and other short-chain alcohols with little or no alcohol in the vitreous humour and urine", "A positive test for carboxyhaemoglobin"],
    answer: 2,
    explanation: "Microbial fermentation generates a range of volatiles, including n-propanol, n-butanol and acetaldehyde, which are not produced in significant amounts by drinking. Urine and vitreous are relatively protected sites, so the absence of alcohol there while blood is positive points to postmortem production."
  },
  {
    id: 26,
    question: "In the Widmark equation A = c × W × r, the factor r represents",
    options: ["The rate of alcohol elimination per hour", "The volume of distribution factor for alcohol, about 0.68 in men and 0.55 in women", "The density of the alcoholic beverage", "The ratio of breath to blood alcohol"],
    answer: 1,
    explanation: "r relates body weight to the volume in which alcohol distributes, that is, the body water. Women have proportionally less body water, so r is lower, which is why the same intake gives a higher blood concentration for the same body weight."
  },
  {
    id: 27,
    question: "A man weighing 70 kg has a blood alcohol concentration of 100 mg/100 mL. Taking r = 0.68, the approximate amount of alcohol in his body (A = c × W × r) is",
    options: ["about 48 g", "about 103 g", "about 4.8 g", "about 476 g"],
    answer: 0,
    explanation: "A = 1.0 g/L × 70 kg × 0.68 = 47.6 g, that is, about 48 g of absolute alcohol. Note that 100 mg/100 mL equals 1.0 g/L, so the units must be converted before substituting."
  },
  {
    id: 28,
    question: "A woman weighing 55 kg (r = 0.55) is found to have a blood alcohol concentration of 80 mg/100 mL two hours after she stopped drinking. Taking the elimination rate as 15 mg/100 mL per hour, her blood alcohol concentration at the time she stopped drinking was about",
    options: ["50 mg/100 mL", "95 mg/100 mL", "110 mg/100 mL", "160 mg/100 mL"],
    answer: 2,
    explanation: "Back-calculation adds the alcohol eliminated: 80 + (2 × 15) = 110 mg/100 mL. Such retrograde extrapolation assumes absorption was complete and elimination was linear, so it should be reported with its assumptions stated."
  },
  {
    id: 29,
    question: "In an adult who is past the absorption phase, blood alcohol is eliminated at an approximately constant rate of about 15–20 mg/100 mL per hour. This is because alcohol metabolism by alcohol dehydrogenase",
    options: ["Follows first-order kinetics", "Is saturated at ordinary drinking concentrations, so it follows zero-order kinetics", "Occurs mainly in the kidney", "Depends on the volume of distribution"],
    answer: 1,
    explanation: "The enzyme and its NAD⁺ cofactor are saturated even at low blood concentrations, so a fixed amount of alcohol is removed per unit time regardless of concentration. This is why the blood alcohol curve falls as a straight line."
  },
  {
    id: 30,
    question: "Breath alcohol analysers report blood alcohol concentration using an assumed blood-to-breath ratio of about",
    options: ["21:1", "2100:1", "210:1", "100:1"],
    answer: 1,
    explanation: "The widely adopted ratio is 2100:1, meaning that 2100 mL of deep lung air contains about as much alcohol as 1 mL of blood. Because the true ratio varies between individuals and with breath temperature, an evidential breath result may be confirmed by blood analysis."
  },
  {
    id: 31,
    question: "Infrared breath alcohol analysers measure ethanol by absorption near 3.4 µm (C–H stretch) but can be affected by other substances. Fuel-cell analysers are less liable to such interference because they",
    options: ["Measure the colour change of potassium dichromate", "Detect acetone specifically", "Measure the thermal conductivity of breath", "Electrochemically oxidise ethanol at a platinum electrode, generating a current proportional to the ethanol present"],
    answer: 3,
    explanation: "The fuel cell oxidises ethanol to acetaldehyde and acetic acid, producing electrons and hence a current. It responds poorly to acetone, which can be raised in diabetic ketoacidosis and may affect simple infrared or dichromate devices."
  },
  {
    id: 32,
    question: "Under section 185 of the Motor Vehicles Act, 1988, driving is an offence if the blood alcohol concentration exceeds",
    options: ["20 mg per 100 mL of blood", "30 mg per 100 mL of blood", "50 mg per 100 mL of blood", "80 mg per 100 mL of blood"],
    answer: 1,
    explanation: "The Indian statutory limit is 30 mg per 100 mL of blood, or the corresponding breath level, which is lower than the 80 mg limit used in several other countries. The section also covers driving under the influence of any drug that renders a person incapable of control."
  },
  {
    id: 33,
    question: "Hair is a valuable matrix for drug testing because it provides",
    options: ["Evidence of use within the previous few hours", "A long detection window of months, with segmental analysis giving a retrospective history of use", "A measure of current impairment", "Only qualitative evidence of alcohol intake"],
    answer: 1,
    explanation: "Drugs are incorporated as the hair grows, mainly from blood supplying the follicle, and head hair grows about 1 cm per month. Segmental analysis can therefore indicate the pattern of use over months, but it says nothing about impairment at a given moment."
  },
  {
    id: 34,
    question: "A major interpretive problem when a drug is detected in hair is",
    options: ["The possibility of external contamination from drug-containing dust, smoke or handling, rather than ingestion", "That hair cannot be analysed by LC-MS/MS", "That hair contains no keratin", "That drugs are never incorporated into hair"],
    answer: 0,
    explanation: "Decontamination washes, analysis of the wash solutions and detection of metabolites formed only in the body, such as THC-COOH for cannabis or norcocaine and cocaethylene for cocaine, are used to address this. Hair colour and cosmetic treatment also affect incorporation."
  },
  {
    id: 35,
    question: "Ethyl glucuronide and ethyl sulphate measured in hair or urine are used as markers of",
    options: ["Current alcohol impairment", "Chronic cannabis use", "Alcohol consumption, as minor non-oxidative ethanol metabolites that persist after ethanol itself has been cleared", "Postmortem fermentation only"],
    answer: 2,
    explanation: "Only a small fraction of ethanol is conjugated, but EtG and EtS remain detectable in urine for up to about 80 hours and in hair for months. They are therefore used in abstinence monitoring, while fatty acid ethyl esters in hair are a complementary marker."
  },
  {
    id: 36,
    question: "Oral fluid (saliva) is increasingly used for roadside drug testing because it",
    options: ["Reflects long-term drug use over months", "Contains higher drug concentrations than blood for all drugs", "Requires no confirmation of positive results", "Can be collected non-invasively under observation and mainly reflects recent use, correlating better with blood concentrations than urine"],
    answer: 3,
    explanation: "Collection is easy to observe, which reduces adulteration and substitution, and the drug present is largely the parent compound, so results relate more closely to recent use. Presumptive devices must still be confirmed by LC-MS/MS."
  },
  {
    id: 37,
    question: "Which matrix is most appropriate when the question is whether a person has used a drug at any time during the past two to three days, and the sample must be collected non-invasively?",
    options: ["Urine", "Vitreous humour", "Bone marrow", "Nail clippings"],
    answer: 0,
    explanation: "Urine contains drugs and their metabolites at relatively high concentrations for one to several days, which is why it is the standard screening matrix. Nails and hair give longer windows, and vitreous humour and bone marrow are postmortem samples."
  },
  {
    id: 38,
    question: "In a decomposed body with no usable blood, which samples are most suitable for toxicological analysis?",
    options: ["Oral fluid and sweat", "Skeletal muscle, bone marrow, liver and hair", "Pericardial fluid only", "Only stomach contents"],
    answer: 1,
    explanation: "Deep skeletal muscle, bone marrow, liver and hair survive decomposition and can yield interpretable results, whereas blood may be absent or heavily altered. Interpretation must consider that tissue concentrations do not directly equate to blood levels."
  },
  {
    id: 39,
    question: "Postmortem redistribution of drugs refers to",
    options: ["Loss of all drugs from the body after death", "Dilution of blood by embalming fluid only", "Conversion of drugs into their metabolites after death", "The movement of drugs after death from organs such as the lungs, liver and myocardium into nearby blood, so that central blood concentrations may rise"],
    answer: 3,
    explanation: "Basic, lipophilic drugs with a large volume of distribution, such as tricyclic antidepressants and digoxin, are most affected. For this reason, femoral (peripheral) blood collected after clamping is preferred to heart blood, and the site must be stated in the report."
  },
  {
    id: 40,
    question: "In a drug-testing laboratory, immunoassay is used for screening rather than confirmation because it is",
    options: ["Highly specific but insensitive", "Rapid, inexpensive and able to test many samples for drug classes, but liable to cross-reactivity and therefore only presumptive", "Able to identify the exact drug and its concentration definitively", "Unaffected by structurally related compounds"],
    answer: 1,
    explanation: "Immunoassays use antibodies raised against a representative member of a drug class, so they detect the class but cannot distinguish members and may cross-react with unrelated compounds. Every presumptive positive therefore needs confirmation by an independent technique of higher specificity."
  },
  {
    id: 41,
    question: "The confirmatory technique used after a positive immunoassay screen must differ in principle from the screen. The accepted confirmatory methods are",
    options: ["A repeat immunoassay using a different antibody", "Thin-layer chromatography alone", "GC-MS or LC-MS/MS", "UV spectrophotometry"],
    answer: 2,
    explanation: "Mass spectrometry coupled with chromatography identifies the specific compound from its retention time and mass spectrum or MRM transitions, which is accepted as confirmatory in court. Repeating an immunological method would not add independent specificity."
  },
  {
    id: 42,
    question: "In workplace and forensic urine drug testing, a 'cut-off' concentration is used so that",
    options: ["Results below an agreed administrative threshold are reported as negative, reducing disputes over trace levels and passive exposure", "The laboratory need not calibrate its instruments", "All drug classes are reported at the same concentration", "Only the parent drug is measured"],
    answer: 0,
    explanation: "Cut-offs are administrative, not analytical, limits, set above the method's detection limit; for example, a common screening cut-off for cannabinoids is 50 ng/mL with a 15 ng/mL confirmation cut-off for THC-COOH. They standardise reporting across laboratories."
  },
  {
    id: 43,
    question: "A urine sample submitted for drug testing has a creatinine concentration of 12 mg/dL and a specific gravity of 1.0015. These findings indicate that the sample is",
    options: ["Adulterated with an oxidising agent", "Contaminated with blood", "Normal and acceptable", "Dilute, consistent with excessive fluid intake or deliberate dilution, so the result must be interpreted with caution"],
    answer: 3,
    explanation: "A creatinine below about 20 mg/dL with specific gravity below about 1.003 meets the usual criteria for a dilute specimen. Because dilution can mask drug use, such samples are flagged and recollection is usually requested; nitrite or chromate detection indicates adulteration instead."
  },
  {
    id: 44,
    question: "Flunitrazepam, used in drug-facilitated sexual assault, is difficult to detect because",
    options: ["It is not excreted in urine at all", "It is active at very low doses and is extensively metabolised, so sensitive LC-MS/MS targeting 7-aminoflunitrazepam is required", "It cannot be measured by any instrument", "It gives a strong positive on all benzodiazepine immunoassays"],
    answer: 1,
    explanation: "Doses of 1–2 mg give very low urine concentrations, and common benzodiazepine immunoassays respond poorly to it. The main urinary metabolite 7-aminoflunitrazepam persists longer than the parent drug and is the preferred target analyte."
  },
  {
    id: 45,
    question: "Gamma-hydroxybutyrate (GHB) encountered in drug-facilitated crime presents a particular analytical challenge because",
    options: ["It is detectable in urine for several weeks", "It is detectable only in hair", "It cannot be measured by GC-MS", "It is eliminated within hours, so the detection window in blood and urine is very short, and because it is also present endogenously an interpretive cut-off must be applied"],
    answer: 3,
    explanation: "GHB has a half-life of under an hour, so it is usually detectable for only a few hours in blood and for about half a day in urine. Because it also occurs naturally at low levels, laboratories apply a cut-off before inferring exogenous intake; commonly cited values are about 10 mg/L in urine and 5 mg/L in antemortem blood, though these vary between laboratories. Samples must be collected early, preserved with fluoride and refrigerated, because GHB can rise in stored blood, especially postmortem samples."
  },
  {
    id: 46,
    question: "In a suspected case of drug-facilitated sexual assault where the victim reports the incident 36 hours later, the most appropriate samples to collect for toxicology are",
    options: ["Blood only", "Hair only, collected immediately", "Urine, with blood if within the window, and a hair sample collected about 4–5 weeks later for segmental analysis", "Oral fluid only"],
    answer: 2,
    explanation: "Many sedative drugs will have left the blood by 36 hours but may still be in urine, so the largest possible urine volume is collected. A hair sample taken several weeks later allows segmental analysis of the growth corresponding to the incident, since the drug needs time to grow out of the scalp."
  },
  {
    id: 47,
    question: "A victim reports being sedated after a drink. The toxicology screen is negative for all drugs but the blood alcohol concentration is high. The correct interpretation is that",
    options: ["Alcohol is itself the most common agent in drug-facilitated crime, and a negative drug screen does not exclude a rapidly eliminated drug if sampling was delayed", "The complaint must be false", "The screen must have been performed incorrectly", "Only hair analysis can ever detect such drugs"],
    answer: 0,
    explanation: "Surveys consistently show alcohol, alone or with other drugs, as the commonest agent in these cases. Delayed reporting, low doses and rapid elimination all cause true negatives, so the toxicology result must be interpreted alongside the clinical and circumstantial findings."
  },
  {
    id: 48,
    question: "In forensic toxicology, the preferred approach to confirming an analyte's identity in a biological sample requires",
    options: ["A single chromatographic retention time match", "A positive colour test plus an immunoassay", "Retention time agreement with a reference standard plus mass spectral or MRM transition data meeting defined criteria", "Measurement of the melting point"],
    answer: 2,
    explanation: "Identification criteria combine chromatographic retention, usually within ±2% or ±0.1 min of the standard, with at least two MRM transitions and an acceptable ion ratio, or a matching full-scan mass spectrum. Relying on retention time alone is not defensible."
  },
  {
    id: 49,
    question: "For a quantitative toxicology result to be defensible in court, the laboratory must demonstrate validation parameters including",
    options: ["Only the limit of detection", "Only the analyst's experience", "Only the instrument's make and model", "Selectivity, calibration linearity, limits of detection and quantitation, accuracy, precision, recovery, matrix effects and stability"],
    answer: 3,
    explanation: "Method validation under ISO/IEC 17025 and forensic toxicology guidelines requires documented performance across these parameters, with quality controls and calibrators run alongside every batch. Chain of custody and reagent traceability must also be recorded."
  },
  {
    id: 50,
    question: "A blood sample from a road accident driver is received in a tube containing EDTA only, having been collected two weeks earlier and stored at room temperature. The laboratory finds a blood alcohol concentration of 45 mg/100 mL. The analyst should report that",
    options: ["The driver was definitely over the legal limit at the time of the accident", "Ethanol is stable indefinitely in any container", "The result should be doubled to correct for storage loss", "The result is unreliable for interpretation because the absence of fluoride preservative and unrefrigerated storage permit microbial production or loss of ethanol"],
    answer: 3,
    explanation: "Without sodium fluoride, Candida and other organisms can ferment glucose to ethanol, and ethanol can also be lost by oxidation or evaporation. Correct preservative, refrigeration and prompt analysis are preconditions for an interpretable result, and the report must state these limitations."
  }
];

export default questions;
