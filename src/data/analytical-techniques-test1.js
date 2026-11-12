const questions = [
  {
    id: 1,
    question: "The principle \"All substances are poisons; there is none which is not a poison. The right dose differentiates a poison from a remedy\" is attributed to",
    options: ["Mathieu Orfila", "Robert Christison", "Paracelsus", "Alfred Swaine Taylor"],
    answer: 2,
    explanation: "Paracelsus (16th century) stated that the dose makes the poison, which is the foundation of the dose-response concept. Orfila is regarded as the father of modern toxicology, but the dose principle is Paracelsus's."
  },
  {
    id: 2,
    question: "Who is regarded as the father of modern toxicology for his systematic treatise on poisons, Traité des poisons, and his expert evidence on arsenic in the Lafarge trial?",
    options: ["Edmond Locard", "Mathieu Orfila", "James Marsh", "Hans Gross"],
    answer: 1,
    explanation: "Mathieu Orfila published 'Traité des poisons' in the 1810s and established toxicology as a scientific discipline; he gave arsenic evidence in the Lafarge trial of 1840. James Marsh devised the Marsh test for arsenic, while Locard and Gross are pioneers of criminalistics."
  },
  {
    id: 3,
    question: "In acute toxicity testing, the term LD50 refers to",
    options: ["The lowest dose that causes death in any animal of the group", "The dose producing a toxic but non-lethal effect in 50% of animals", "The highest dose at which no adverse effect is observed", "The dose that kills 50% of the test population within a specified period"],
    answer: 3,
    explanation: "LD50 (median lethal dose) is the statistically derived dose expected to kill half of the exposed test animals within a stated time, usually expressed in mg/kg body weight. The highest dose with no adverse effect is the NOAEL, and the dose causing toxicity in 50% is the TD50."
  },
  {
    id: 4,
    question: "A compound has an LD50 of 400 mg/kg and an ED50 of 20 mg/kg in mice. Its therapeutic index is",
    options: ["0.05", "20", "380", "8000"],
    answer: 1,
    explanation: "Therapeutic index = LD50 / ED50 = 400 / 20 = 20. A larger therapeutic index indicates a wider margin between the effective and the lethal dose."
  },
  {
    id: 5,
    question: "When the cumulative percentage of animals responding in a quantal toxicity test is plotted against the logarithm of the dose, the curve obtained is usually",
    options: ["Linear and passing through the origin", "Hyperbolic", "Sigmoid (S-shaped)", "U-shaped"],
    answer: 2,
    explanation: "A log-dose versus cumulative-response plot gives a sigmoid curve because individual sensitivities are approximately log-normally distributed. Converting the percentage response to probits turns this curve into a straight line, from which the LD50 is read."
  },
  {
    id: 6,
    question: "A low dose of a toxicant produces a stimulatory or beneficial effect while higher doses are inhibitory or toxic. This biphasic dose-response is called",
    options: ["Tolerance", "Hormesis", "Potentiation", "Idiosyncrasy"],
    answer: 1,
    explanation: "Hormesis describes a biphasic (often U- or inverted U-shaped) dose-response in which low doses stimulate and high doses inhibit. Idiosyncrasy is a genetically determined abnormal reactivity, and tolerance is reduced response after repeated exposure."
  },
  {
    id: 7,
    question: "Two toxicants produce the same maximal effect, but toxicant X produces it at a much lower dose than toxicant Y. This means X has",
    options: ["Greater efficacy than Y", "A higher LD50 than Y", "A steeper dose-response slope than Y", "Greater potency than Y"],
    answer: 3,
    explanation: "Potency refers to the dose needed to produce an effect and is shown by the position of the curve along the dose axis. Efficacy is the maximal effect attainable; since both reach the same maximum, their efficacy is equal and X is simply more potent."
  },
  {
    id: 8,
    question: "A 500 mg dose of a drug given intravenously produces an initial plasma concentration of 10 mg/L. Its apparent volume of distribution is",
    options: ["50 L", "5 L", "5000 L", "500 L"],
    answer: 0,
    explanation: "Vd = Dose / Plasma concentration = 500 mg / 10 mg/L = 50 L. A large Vd indicates extensive tissue distribution, which also means haemodialysis removes little of the compound."
  },
  {
    id: 9,
    question: "The plasma concentration of a poison falls from 80 mg/L to 10 mg/L in 12 hours, following first-order kinetics. Its elimination half-life is",
    options: ["3 hours", "6 hours", "4 hours", "8 hours"],
    answer: 2,
    explanation: "80 → 40 → 20 → 10 mg/L is three half-lives. Three half-lives in 12 hours gives a half-life of 4 hours. In first-order kinetics the half-life is constant regardless of concentration."
  },
  {
    id: 10,
    question: "Which statement correctly describes zero-order elimination kinetics?",
    options: ["A constant fraction of the drug is eliminated per unit time", "The half-life remains constant at all concentrations", "The elimination rate is directly proportional to plasma concentration", "A constant amount of the drug is eliminated per unit time, regardless of concentration"],
    answer: 3,
    explanation: "In zero-order kinetics the elimination pathway is saturated, so a fixed amount is removed per unit time and the half-life lengthens as concentration rises. Phenytoin and high-dose salicylates show this behaviour; the other options describe first-order kinetics."
  },
  {
    id: 11,
    question: "Alkalinisation of urine with sodium bicarbonate enhances the renal excretion of salicylates mainly because",
    options: ["The weak acid becomes ionised in alkaline tubular fluid and is poorly reabsorbed", "It increases the glomerular filtration rate", "It inhibits hepatic metabolism of salicylate", "It increases plasma protein binding of salicylate"],
    answer: 0,
    explanation: "This is ion trapping: a weak acid is mostly ionised at alkaline pH, and the ionised form cannot diffuse back across the tubular epithelium, so it is excreted. Weak bases are, conversely, trapped in acidic urine."
  },
  {
    id: 12,
    question: "Cytochrome P450 monooxygenases, which carry out most phase I oxidations of xenobiotics, are located mainly in the",
    options: ["Mitochondrial matrix of hepatocytes", "Lysosomes of Kupffer cells", "Smooth endoplasmic reticulum of hepatocytes", "Nucleus of hepatocytes"],
    answer: 2,
    explanation: "CYP450 enzymes are membrane-bound proteins of the smooth endoplasmic reticulum and are recovered in the 'microsomal' fraction on centrifugation. The liver is the main site, though the intestine, lungs and kidneys also contain them."
  },
  {
    id: 13,
    question: "Which of the following is a phase II (conjugation) reaction of xenobiotic metabolism?",
    options: ["Glucuronidation", "Aromatic hydroxylation", "N-dealkylation", "Ester hydrolysis"],
    answer: 0,
    explanation: "Phase II reactions attach an endogenous group to the molecule; glucuronidation by UDP-glucuronosyltransferase is the most common. Hydroxylation, dealkylation and hydrolysis are phase I (functionalisation) reactions that expose or add a reactive group."
  },
  {
    id: 14,
    question: "Parathion is a weak inhibitor of acetylcholinesterase in vitro but becomes highly toxic in the body because it is converted by cytochrome P450 to",
    options: ["Malaoxon", "Paraoxon", "p-Nitrophenol", "Diethyl phosphate"],
    answer: 1,
    explanation: "Oxidative desulphuration replaces P=S with P=O, converting parathion to paraoxon, a potent cholinesterase inhibitor; this is bioactivation (lethal synthesis). p-Nitrophenol is a detoxification product excreted in urine and is used as a biomarker of exposure, while malaoxon comes from malathion."
  },
  {
    id: 15,
    question: "In paracetamol overdose, hepatocellular necrosis results from accumulation of the reactive metabolite NAPQI once hepatic stores of which substance are depleted?",
    options: ["Glucuronic acid", "Glutathione", "Inorganic sulphate", "Cytochrome P450"],
    answer: 1,
    explanation: "NAPQI is normally detoxified by conjugation with glutathione. When glutathione falls below about 30% of normal, NAPQI binds liver proteins and causes centrilobular necrosis. N-acetylcysteine is the antidote because it replenishes glutathione."
  },
  {
    id: 16,
    question: "In the conventional classification of poisons used in Indian medical jurisprudence, arsenic is classified as a",
    options: ["Corrosive", "Neurotic poison", "Metallic irritant", "Asphyxiant"],
    answer: 2,
    explanation: "Arsenic, mercury, lead and copper are inorganic metallic irritants. Corrosives are strong acids and alkalis, and asphyxiants include gases such as carbon monoxide and hydrogen sulphide."
  },
  {
    id: 17,
    question: "Strychnine, obtained from Strychnos nux-vomica seeds, is classified as which type of neurotic poison?",
    options: ["Cerebral", "Spinal", "Peripheral", "Cardiac"],
    answer: 1,
    explanation: "Strychnine is a spinal poison. It antagonises glycine at inhibitory synapses in the spinal cord, causing violent convulsions with opisthotonus while consciousness is preserved. Curare and conium are peripheral neurotics."
  },
  {
    id: 18,
    question: "Which of the following acts as a mechanical irritant poison?",
    options: ["Croton seeds", "Calotropis latex", "Yellow phosphorus", "Powdered glass"],
    answer: 3,
    explanation: "Powdered glass causes injury purely by physical damage to the gut mucosa and is the classic mechanical irritant. Croton and calotropis are vegetable irritants, and yellow phosphorus is an inorganic non-metallic irritant."
  },
  {
    id: 19,
    question: "A man who ingested a household disinfectant has white, hardened oral mucosa and passes urine that turns greenish-black on standing. The poison is most likely",
    options: ["Carbolic acid (phenol)", "Sulphuric acid", "Oxalic acid", "Sodium hydroxide"],
    answer: 0,
    explanation: "Phenol coagulates proteins, producing white, leathery mucosa. Its metabolites hydroquinone and pyrocatechol oxidise in urine to produce the greenish-black colour called carboluria. Sulphuric acid chars the mucosa black, and oxalic acid causes hypocalcaemia with oxalate crystals in urine."
  },
  {
    id: 20,
    question: "Which of the following plant poisons is classified as a cardiac poison?",
    options: ["Datura", "Nux vomica", "Yellow oleander", "Abrus precatorius"],
    answer: 2,
    explanation: "Oleanders (Nerium and Cascabela/Thevetia) contain cardiac glycosides, which places them with digitalis, aconite and tobacco among the cardiac poisons. Datura is a deliriant (cerebral), nux vomica is a spinal poison, and Abrus is a vegetable irritant."
  },
  {
    id: 21,
    question: "In the Marsh test for arsenic, the sample is treated with zinc and dilute sulphuric acid and the gas evolved is heated to deposit a metallic mirror. The gas is",
    options: ["Phosphine (PH3)", "Arsine (AsH3)", "Hydrogen sulphide (H2S)", "Hydrogen cyanide (HCN)"],
    answer: 1,
    explanation: "Nascent hydrogen reduces arsenic compounds to arsine gas, which decomposes on heating to leave a black-brown arsenic mirror that dissolves in sodium hypochlorite (an antimony mirror does not). In the Reinsch test, arsenic is instead deposited on copper foil."
  },
  {
    id: 22,
    question: "Chronic arsenic poisoning from contaminated groundwater, as reported from West Bengal, is characterised by",
    options: ["Raindrop pigmentation of the skin and hyperkeratosis of the palms and soles", "A bluish line on the gums and wrist drop", "Erethism with fine tremor and gingivitis", "Total scalp alopecia within three weeks"],
    answer: 0,
    explanation: "Chronic arsenicosis produces 'raindrop' hyperpigmentation and depigmentation, palmar and plantar keratoses, Mees' lines and an increased risk of skin cancer. A gum line with wrist drop suggests lead, erethism suggests mercury, and rapid alopecia suggests thallium."
  },
  {
    id: 23,
    question: "Minamata disease, which caused severe neurological damage and congenital defects in Japan, was due to consumption of fish contaminated with",
    options: ["Cadmium", "Inorganic lead", "Methylmercury", "Arsenic trioxide"],
    answer: 2,
    explanation: "Industrial mercury discharged into Minamata Bay was methylated and bioaccumulated in fish. Methylmercury is lipid-soluble, crosses the blood-brain barrier and placenta, and causes ataxia, constricted visual fields and cerebral palsy-like illness. Cadmium caused itai-itai disease."
  },
  {
    id: 24,
    question: "Lead inhibits which enzymes of haem synthesis, leading to raised urinary δ-aminolaevulinic acid and raised erythrocyte zinc protoporphyrin?",
    options: ["ALA synthase and uroporphyrinogen decarboxylase", "ALA dehydratase and ferrochelatase", "Porphobilinogen deaminase and ALA synthase", "Coproporphyrinogen oxidase and haem oxygenase"],
    answer: 1,
    explanation: "Lead binds sulphydryl groups and inhibits ALA dehydratase (so ALA accumulates) and ferrochelatase (so zinc is inserted in place of iron, raising zinc protoporphyrin). Together with basophilic stippling, these are laboratory markers of lead exposure."
  },
  {
    id: 25,
    question: "In chronic lead poisoning, the bluish-black line along the gum margins, caused by deposition of lead sulphide, is called",
    options: ["Mees' lines", "Beau's lines", "Muehrcke's lines", "Burton's line"],
    answer: 3,
    explanation: "Burton's (Burtonian) line forms when lead reacts with hydrogen sulphide produced by bacteria in dental plaque, depositing lead sulphide. Mees' lines (arsenic, thallium) and Beau's lines are changes in the nails, not the gums."
  },
  {
    id: 26,
    question: "A patient with severe, painful peripheral neuropathy develops total scalp alopecia two to three weeks after suspected ingestion of a rodenticide. The specific antidote is",
    options: ["Dimercaprol", "Calcium disodium EDTA", "Prussian blue (potassium ferric hexacyanoferrate)", "Pralidoxime"],
    answer: 2,
    explanation: "Thallium poisoning causes painful ascending neuropathy followed by alopecia and Mees' lines. Oral Prussian blue exchanges potassium for thallium in the gut, interrupting its enterohepatic circulation and increasing faecal excretion."
  },
  {
    id: 27,
    question: "Organophosphate insecticides produce toxicity by",
    options: ["Blocking muscarinic acetylcholine receptors", "Inhibiting the release of acetylcholine", "Reversibly carbamylating acetylcholinesterase", "Phosphorylating the serine hydroxyl at the active site of acetylcholinesterase"],
    answer: 3,
    explanation: "Organophosphates phosphorylate the active-site serine of acetylcholinesterase. Acetylcholine then accumulates at muscarinic, nicotinic and CNS synapses. Reversible carbamylation is the mechanism of carbamates."
  },
  {
    id: 28,
    question: "A farmer brought in after consuming an insecticide has pinpoint pupils, profuse salivation, bronchorrhoea, bradycardia and muscle fasciculations. Which laboratory test best supports the diagnosis?",
    options: ["Red cell (true) acetylcholinesterase activity", "Serum amylase", "Carboxyhaemoglobin level", "Blood lead level"],
    answer: 0,
    explanation: "The picture is a cholinergic crisis from organophosphate or carbamate poisoning. Depressed red cell acetylcholinesterase activity reflects inhibition at nerve synapses. Plasma butyrylcholinesterase is also depressed but is less specific."
  },
  {
    id: 29,
    question: "Pralidoxime must be given early in organophosphate poisoning because",
    options: ["It antagonises acetylcholine at muscarinic receptors", "It chelates the organophosphate in plasma", "Once the phosphorylated enzyme undergoes 'ageing', it can no longer be reactivated", "It accelerates hepatic synthesis of new cholinesterase"],
    answer: 2,
    explanation: "Oximes reactivate the enzyme by removing the phosphoryl group. After ageing, the loss of an alkyl group leaves a stable enzyme-phosphate bond that oximes cannot break. Atropine, not pralidoxime, is the muscarinic antagonist."
  },
  {
    id: 30,
    question: "Compared with organophosphates, carbamate insecticides such as carbaryl and propoxur",
    options: ["Inhibit acetylcholinesterase reversibly, so the enzyme recovers spontaneously within hours", "Cause irreversible ageing of acetylcholinesterase", "Do not inhibit acetylcholinesterase at all", "Commonly cause delayed polyneuropathy weeks later"],
    answer: 0,
    explanation: "The carbamylated enzyme hydrolyses spontaneously, so carbamate toxicity is shorter and the enzyme does not age. Management relies mainly on atropine, and delayed neuropathy is characteristic of certain organophosphates, not carbamates."
  },
  {
    id: 31,
    question: "A patient recovering from an organophosphate cholinergic crisis develops weakness of neck flexors, proximal limb muscles and cranial nerves, with respiratory difficulty, 24–96 hours after ingestion. This is",
    options: ["Organophosphate-induced delayed polyneuropathy", "Intermediate syndrome", "Guillain-Barré syndrome", "Atropine toxicity"],
    answer: 1,
    explanation: "The intermediate syndrome appears 1–4 days after poisoning and involves proximal, neck-flexor, cranial and respiratory muscles; it may need ventilation. Delayed polyneuropathy appears 2–3 weeks later and affects distal limbs through inhibition of neuropathy target esterase."
  },
  {
    id: 32,
    question: "Cyanide causes histotoxic hypoxia by binding to the ferric iron of",
    options: ["NADH dehydrogenase (complex I)", "Succinate dehydrogenase (complex II)", "Cytochrome c oxidase (complex IV)", "ATP synthase (complex V)"],
    answer: 2,
    explanation: "Cyanide binds the Fe3+ of cytochrome a3 in cytochrome c oxidase, blocking the final transfer of electrons to oxygen. Cells cannot use oxygen, so venous blood stays oxygenated and lactic acidosis develops."
  },
  {
    id: 33,
    question: "In the treatment of cyanide poisoning, sodium thiosulphate acts by",
    options: ["Donating sulphur to rhodanese, which converts cyanide to less toxic thiocyanate", "Forming methaemoglobin that binds cyanide", "Combining with cyanide to form cyanocobalamin", "Reducing cytochrome oxidase back to its active ferrous state"],
    answer: 0,
    explanation: "Rhodanese (thiosulphate sulphurtransferase) uses the sulphur from thiosulphate to convert cyanide into thiocyanate, which is excreted in urine. Nitrites act by producing methaemoglobin, and hydroxocobalamin forms cyanocobalamin."
  },
  {
    id: 34,
    question: "At autopsy, a body shows bright pink postmortem lividity, a smell of bitter almonds on opening the stomach, and a reddened, eroded gastric mucosa. The most likely poison is",
    options: ["Carbon monoxide", "Potassium cyanide", "Aluminium phosphide", "Arsenic"],
    answer: 1,
    explanation: "Cyanide gives bright red or pink lividity because venous blood remains oxygenated. Its salts are alkaline, which erodes the gastric mucosa, and many (not all) people can smell the bitter-almond odour. Carbon monoxide gives cherry-red lividity but no gastric corrosion or almond smell."
  },
  {
    id: 35,
    question: "Besides reducing the oxygen-carrying capacity of blood, carboxyhaemoglobin worsens tissue hypoxia because it",
    options: ["Shifts the oxygen dissociation curve to the right", "Oxidises haem iron to the ferric state", "Shifts the oxygen dissociation curve to the left, hindering oxygen release to tissues", "Increases red cell 2,3-bisphosphoglycerate"],
    answer: 2,
    explanation: "Carbon monoxide binds haemoglobin about 200–250 times more avidly than oxygen. Bound CO also raises the oxygen affinity of the remaining haem sites, so the curve shifts left and tissues get less oxygen. Oxidation of haem iron describes methaemoglobin, not carboxyhaemoglobin."
  },
  {
    id: 36,
    question: "A carbon monoxide victim has a carboxyhaemoglobin level of 48% on arrival. On 100% oxygen by mask, the half-life of COHb is about 80 minutes. The expected COHb after 160 minutes is approximately",
    options: ["6%", "36%", "24%", "12%"],
    answer: 3,
    explanation: "160 minutes is two half-lives: 48% → 24% → 12%. The COHb half-life is about 4–5 hours on room air, about 80–90 minutes on 100% oxygen and about 20–30 minutes with hyperbaric oxygen."
  },
  {
    id: 37,
    question: "Bilateral necrosis of the globus pallidus is a characteristic neuropathological finding in persons who survive for some time after poisoning by",
    options: ["Carbon monoxide", "Arsenic", "Strychnine", "Datura"],
    answer: 0,
    explanation: "The globus pallidus is very sensitive to hypoxia and to the direct cellular effects of CO, so symmetrical pallidal necrosis is typical of delayed CO deaths. Survivors may also develop delayed neuropsychiatric sequelae."
  },
  {
    id: 38,
    question: "When a reducing agent such as sodium dithionite is added to normal blood, the two absorption bands of oxyhaemoglobin merge into a single broad band. In a suspect sample, the two bands persist unchanged. This indicates the presence of",
    options: ["Methaemoglobin", "Reduced haemoglobin", "Sulphaemoglobin", "Carboxyhaemoglobin"],
    answer: 3,
    explanation: "Carboxyhaemoglobin shows two bands (about 572 and 535 nm), close to those of oxyhaemoglobin, but because CO is not displaced by the reducing agent, the bands do not merge into the single band of reduced haemoglobin. This forms the basis of the spectroscopic screen for CO."
  },
  {
    id: 39,
    question: "Aluminium phosphide, sold as 3 g tablets for fumigating stored grain, is toxic because on contact with moisture or gastric acid it releases",
    options: ["Phosphine", "Arsine", "Hydrogen cyanide", "Phosgene"],
    answer: 0,
    explanation: "AlP + 3H2O → Al(OH)3 + PH3. Phosphine inhibits cytochrome c oxidase and causes free-radical injury, leading to refractory shock and arrhythmias. It has a garlic or decaying-fish odour, and there is no specific antidote."
  },
  {
    id: 40,
    question: "A simple bedside test for aluminium phosphide ingestion exposes paper impregnated with silver nitrate to the patient's gastric aspirate or breath. A positive result is",
    options: ["Yellow colour", "Pink colour", "Blackening of the paper", "Blue colour"],
    answer: 2,
    explanation: "Phosphine reduces silver nitrate to black metallic silver (silver phosphide), so the paper turns black. Hydrogen sulphide can also blacken it, so the result is presumptive and should be confirmed in the laboratory."
  },
  {
    id: 41,
    question: "The bedside 20-minute whole blood clotting test (20WBCT) in a snakebite victim is used mainly to detect envenomation by",
    options: ["Common krait", "Indian cobra", "Russell's viper", "King cobra"],
    answer: 2,
    explanation: "Viper venoms contain procoagulant enzymes that cause consumption coagulopathy, so blood left undisturbed in a clean glass tube fails to clot in 20 minutes. Elapid (cobra, krait) venoms are mainly neurotoxic and do not usually affect clotting."
  },
  {
    id: 42,
    question: "Indian polyvalent anti-snake venom is raised against the venoms of the 'Big Four' snakes. Which of the following is NOT one of them?",
    options: ["Hump-nosed pit viper", "Common krait", "Saw-scaled viper", "Russell's viper"],
    answer: 0,
    explanation: "The Big Four are the spectacled (Indian) cobra, common krait, Russell's viper and saw-scaled viper. The hump-nosed pit viper also causes significant envenomation in South India, but current polyvalent ASV does not neutralise its venom."
  },
  {
    id: 43,
    question: "A truck driver is found robbed and delirious after accepting food from strangers. He has dilated pupils, hot dry flushed skin, tachycardia and incoherent speech, and seeds resembling chilli seeds are found in the leftover food. The poison and its specific antidote are",
    options: ["Opium; naloxone", "Datura; physostigmine", "Oleander; digoxin-specific Fab", "Aconite; atropine"],
    answer: 1,
    explanation: "Datura seeds contain atropine, hyoscyamine and hyoscine, which produce an anticholinergic syndrome ('dry as a bone, red as a beet, blind as a bat, mad as a hatter'); road poisoners use them to rob travellers. Physostigmine is a tertiary-amine anticholinesterase that crosses the blood-brain barrier and reverses both central and peripheral effects."
  },
  {
    id: 44,
    question: "The cardiac glycoside chiefly responsible for the toxicity of yellow oleander (Cascabela thevetia, syn. Thevetia peruviana) seeds is",
    options: ["Oleandrin", "Thevetin", "Aconitine", "Abrin"],
    answer: 1,
    explanation: "Yellow oleander contains thevetins A and B, which inhibit myocardial Na+/K+-ATPase like digoxin and cause bradyarrhythmias, heart block and hyperkalaemia. Oleandrin is the principal glycoside of white or pink oleander (Nerium oleander), and abrin is the toxalbumin of Abrus precatorius."
  },
  {
    id: 45,
    question: "Aconitine, the alkaloid of Aconitum ferox (mitha zahar), causes tingling and numbness of the mouth followed by ventricular arrhythmias because it",
    options: ["Inhibits Na+/K+-ATPase", "Inhibits acetylcholinesterase", "Blocks L-type calcium channels", "Keeps voltage-gated sodium channels persistently open"],
    answer: 3,
    explanation: "Aconitine binds voltage-gated sodium channels and keeps them open, causing persistent depolarisation of nerves and myocardium. The result is paraesthesia, then ventricular tachyarrhythmias. There is no specific antidote; Na+/K+-ATPase inhibition is the mechanism of the oleander glycosides."
  },
  {
    id: 46,
    question: "Rectified spirit should NOT be used to preserve viscera when poisoning by which of the following is suspected?",
    options: ["Arsenic", "Kerosene", "Strychnine", "Yellow oleander"],
    answer: 1,
    explanation: "Rectified spirit interferes with the detection of volatile organic poisons and alcohols. For suspected kerosene, alcohol, phenol, formalin, paraldehyde, acetic acid or phosphorus, viscera are preserved in saturated sodium chloride solution instead."
  },
  {
    id: 47,
    question: "For routine toxicological analysis in a suspected poisoning death in India, the quantity of liver usually sent to the forensic science laboratory is about",
    options: ["50 g", "100 g", "500 g", "1.5 kg (the entire liver)"],
    answer: 2,
    explanation: "Standard practice is to send about 500 g of liver, half of each kidney, the stomach with its contents and about 30 cm of small intestine with its contents, each in separate sealed jars with preservative. A sample of the preservative is sent as a control."
  },
  {
    id: 48,
    question: "In a suspected case of chronic arsenic poisoning, which samples are especially useful in addition to the routine viscera?",
    options: ["Vitreous humour and cerebrospinal fluid", "Bile and gastric lavage only", "Synovial fluid", "Hair, nails and bone"],
    answer: 3,
    explanation: "Arsenic binds the sulphydryl groups of keratin, so it persists in hair and nails for months, and it also deposits in bone. Segmental hair analysis can show the timeline of repeated exposure."
  },
  {
    id: 49,
    question: "Activated charcoal does NOT effectively adsorb which of the following?",
    options: ["Paracetamol", "Yellow oleander glycosides", "Carbamazepine", "Iron salts and lithium"],
    answer: 3,
    explanation: "Charcoal binds poorly to small, highly ionised or inorganic substances, including iron, lithium, other metals, strong acids and alkalis, and alcohols. Paracetamol, carbamazepine and cardiac glycosides such as yellow oleander are well adsorbed; multiple-dose charcoal is used for carbamazepine, and has been tried in yellow oleander poisoning with mixed trial results."
  },
  {
    id: 50,
    question: "Fomepizole is used as an antidote in methanol poisoning because it",
    options: ["Binds formic acid in the blood", "Inhibits alcohol dehydrogenase, preventing formation of formaldehyde and formic acid", "Enhances renal excretion of unchanged methanol", "Acts as a sulphur donor for detoxification"],
    answer: 1,
    explanation: "Methanol is harmful mainly through its metabolites: alcohol dehydrogenase converts it to formaldehyde and then formic acid, which causes acidosis and optic nerve damage. Fomepizole (or ethanol, which competes for the enzyme) blocks this lethal synthesis, while haemodialysis removes methanol and formate."
  }
];

export default questions;
