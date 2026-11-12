const questions = [
  {
    id: 1,
    question: "Autolysis after death is:",
    options: ["Self-digestion of cells by their own enzymes, without bacterial involvement", "Breakdown of tissues by gut bacteria", "Conversion of body fat into a waxy substance", "Drying of tissues in hot air"],
    answer: 0,
    explanation: "After death, cells lose oxygen, pH falls and lysosomal and other intracellular enzymes digest the cell from within. Autolysis is a sterile chemical process. Putrefaction is the later bacterial breakdown, adipocere is altered fat and mummification is drying."
  },
  {
    id: 2,
    question: "Which organs show autolysis earliest after death because they are rich in digestive enzymes?",
    options: ["Uterus and prostate", "Bones and teeth", "Pancreas and gastric mucosa", "Tendons and ligaments"],
    answer: 2,
    explanation: "The pancreas and the stomach lining contain large amounts of digestive enzymes, so they autolyse quickly; the adrenal medulla is another early site. Post-mortem softening of the stomach wall (gastromalacia) is an example. The uterus and prostate are among the last organs to decompose."
  },
  {
    id: 3,
    question: "The principal organism responsible for putrefaction of a dead body is:",
    options: ["Mycobacterium tuberculosis", "Clostridium perfringens (C. welchii)", "Staphylococcus aureus", "Lactobacillus acidophilus"],
    answer: 1,
    explanation: "Putrefaction is driven mainly by gut bacteria that spread through the body after death, and Clostridium perfringens is the most important. Its enzymes, including lecithinase, break down tissues and produce gas. Coliforms, other anaerobes and soil organisms also contribute."
  },
  {
    id: 4,
    question: "In Indian conditions, the first external sign of putrefaction is usually:",
    options: ["Greenish discolouration of the skin over the right iliac fossa", "Marbling of the limbs", "Skin slippage on the hands", "Adipocere on the cheeks"],
    answer: 0,
    explanation: "Green discolouration first appears over the caecum in the right iliac fossa, where the bowel is gas- and bacteria-rich and lies close to the skin. In Indian summer it appears in about 12–18 hours, and later in cold climates. Marbling and skin slippage follow later."
  },
  {
    id: 5,
    question: "The greenish discolouration of skin in early putrefaction is due to:",
    options: ["Bile pigments leaking from the liver", "Carboxyhaemoglobin", "Methaemoglobin formed from nitrites", "Sulphhaemoglobin formed when hydrogen sulphide combines with haemoglobin"],
    answer: 3,
    explanation: "Bacteria produce hydrogen sulphide, which reacts with haemoglobin released from lysed red cells to form green sulphhaemoglobin (sulphmethaemoglobin). It first shows over the caecum and then spreads. Carboxyhaemoglobin gives cherry-red lividity, not green skin."
  },
  {
    id: 6,
    question: "Marbling of the skin during putrefaction is caused by:",
    options: ["Crystallisation of fat beneath the skin", "Growth of moulds on the skin", "Haemolysis in superficial veins, with haemoglobin derivatives staining the vessel walls and nearby tissue", "Insect feeding along the veins"],
    answer: 2,
    explanation: "Red cells in superficial veins break down, and haemoglobin and its sulphur compounds stain the vein walls and nearby tissue. This shows the veins as a branching greenish-brown or purple network, usually on the shoulders, thighs and trunk. It appears roughly 36–48 hours after death in warm weather."
  },
  {
    id: 7,
    question: "Which organs are among the last to putrefy, so that they can help in determining sex in a badly decomposed body?",
    options: ["Brain and stomach", "Non-gravid uterus and prostate", "Liver and spleen", "Intestines and pancreas"],
    answer: 1,
    explanation: "The non-gravid uterus and the prostate are dense, fibromuscular organs that resist putrefaction longer than any other soft tissue. Their presence can establish sex when external features are lost. The stomach, intestines and brain of adults decompose early."
  },
  {
    id: 8,
    question: "During the bloat stage of decomposition, the body swells mainly because of:",
    options: ["Accumulation of gases such as hydrogen sulphide, methane, carbon dioxide and ammonia produced by bacteria", "Fluid retention by the kidneys", "Adipocere formation", "Rigor mortis"],
    answer: 0,
    explanation: "Anaerobic bacteria in the gut ferment tissues and release gases that distend the abdomen, face, scrotum and other soft parts. The pressure can push out fluid and blood-stained froth from the mouth and nose, and can raise the tongue and eyes. These features can mislead an inexperienced examiner."
  },
  {
    id: 9,
    question: "The commonly described stages of decomposition, in order, are:",
    options: ["Bloat → fresh → dry → active decay → advanced decay", "Fresh → active decay → bloat → skeletal → advanced decay", "Dry → bloat → fresh → active decay → skeletal", "Fresh → bloat → active decay → advanced decay → dry or skeletal"],
    answer: 3,
    explanation: "A body passes through fresh, bloat, active decay, advanced decay and dry or skeletal stages. The active decay stage is marked by loss of mass as tissues liquefy and insects feed. The rate of passage depends on temperature, moisture, insects and burial."
  },
  {
    id: 10,
    question: "According to Casper's dictum, the degree of decomposition seen after 1 week in air is reached in a body buried in earth after about:",
    options: ["1 week", "2 weeks", "4 weeks", "8 weeks"],
    answer: 3,
    explanation: "Casper's dictum gives relative rates of air : water : earth = 1 : 2 : 8. One week in air equals about two weeks in water and eight weeks buried in soil. Burial slows decay because of lower temperature, less oxygen and fewer insects."
  },
  {
    id: 11,
    question: "As a rough rule, the rate of chemical and bacterial decomposition approximately doubles for every rise in temperature of:",
    options: ["10 °C", "1 °C", "25 °C", "50 °C"],
    answer: 0,
    explanation: "Like most biochemical reactions, decomposition has a Q10 of about 2, so its rate roughly doubles for every 10 °C rise within the biological range. This is why bodies decompose much faster in Indian summers than in winter. Very high temperatures can instead dry the body and favour mummification."
  },
  {
    id: 12,
    question: "A particular decomposition stage is reached after about 300 accumulated degree-days (base 0 °C). If the mean daily temperature at the scene was 25 °C, the stage would be reached in about:",
    options: ["7.5 days", "12 days", "25 days", "75 days"],
    answer: 1,
    explanation: "Each day at a mean of 25 °C adds 25 degree-days, so 300 ÷ 25 = 12 days. Accumulated degree-days combine time and temperature into one measure of thermal energy available for decay. The same idea is used for insect development in entomology."
  },
  {
    id: 13,
    question: "Adipocere is formed by:",
    options: ["Dehydration of tissues in dry heat", "Calcification of soft tissues", "Hydrolysis and hydrogenation of body fat into saturated and hydroxy fatty acids", "Bacterial digestion of muscle proteins"],
    answer: 2,
    explanation: "Neutral fat is hydrolysed into fatty acids, and unsaturated ones such as oleic acid are hydrogenated into saturated ones such as palmitic, stearic and hydroxystearic acids. The result is a greyish-white, waxy, rancid-smelling substance called grave wax. It forms first in fat-rich areas such as cheeks, breasts and buttocks."
  },
  {
    id: 14,
    question: "Adipocere formation is favoured by:",
    options: ["Warm, moist and airless conditions such as burial in damp soil or submersion in water", "Hot, dry desert air", "Freezing", "Strong sunlight"],
    answer: 0,
    explanation: "Adipocere needs moisture, warmth and an anaerobic setting where bacteria such as Clostridium can act on fat. Bodies in water, wet graves or sealed spaces are typical. Hot, dry air instead produces mummification."
  },
  {
    id: 15,
    question: "The bacterial enzyme that helps adipocere formation by acting on body fats is:",
    options: ["Urease of Proteus", "Coagulase of Staphylococcus", "Amylase of Bacillus", "Lecithinase of Clostridium perfringens"],
    answer: 3,
    explanation: "Lecithinase (phospholipase C, the alpha toxin) of Clostridium perfringens breaks down lecithin and other lipids and aids the hydrolysis and hydrogenation of fat. This is why adipocere forms where clostridia can grow. Urease, coagulase and amylase do not act on body fat."
  },
  {
    id: 16,
    question: "The main medico-legal value of adipocere is that it:",
    options: ["Proves that the death was due to poisoning", "Preserves body features and injuries, helping identification and determination of the cause of death", "Shows that death occurred within the last 24 hours", "Destroys all DNA in the body"],
    answer: 1,
    explanation: "Once formed, adipocere is firm and resists further decay, so facial features and wounds such as stab or ligature marks may be preserved for months or years. It also shows that the body lay in moist conditions for weeks. It does not by itself indicate the cause of death."
  },
  {
    id: 17,
    question: "Mummification of a dead body occurs when:",
    options: ["The body lies in damp, airless soil", "Body fat is converted into wax", "The body dries out in hot, dry air with free ventilation, which stops bacterial growth", "The body is frozen"],
    answer: 2,
    explanation: "Rapid loss of water in hot, dry, airy conditions, such as desert sand in Rajasthan or a closed hot room, stops bacterial growth. The skin becomes dry, leathery and brown and sticks to the bones. Features and some injuries may be preserved, helping identification."
  },
  {
    id: 18,
    question: "The rectal temperature of a body is 89.4 °F. Using the rule of thumb that a body cools by about 1.5 °F per hour from a normal temperature of 98.4 °F, the approximate time since death is:",
    options: ["4 hours", "6 hours", "9 hours", "13 hours"],
    answer: 1,
    explanation: "Time since death ≈ (98.4 − 89.4) ÷ 1.5 = 9 ÷ 1.5 = 6 hours. The value of 9 hours comes from forgetting to divide by the cooling rate. This rule is crude, because cooling depends on ambient temperature, body build, clothing and the initial plateau."
  },
  {
    id: 19,
    question: "The best site for recording body temperature to estimate time since death is the:",
    options: ["Axilla", "Mouth", "Skin of the forehead", "Rectum, or another deep core site such as the liver"],
    answer: 3,
    explanation: "Core temperature is needed, and the rectum, using a long chemical thermometer inserted about 8–10 cm, is the standard site. The liver or brain can also be used. Skin, mouth and axilla cool quickly and unevenly, so they are unreliable."
  },
  {
    id: 20,
    question: "The Henssge nomogram for estimating time since death uses rectal temperature together with:",
    options: ["Vitreous potassium and the stage of rigor", "Degree of lividity and pupil size", "Ambient temperature and body weight, with corrective factors for clothing and air movement", "Stomach contents"],
    answer: 2,
    explanation: "Henssge's nomogram applies a double-exponential cooling model. It uses rectal temperature, ambient temperature and body weight, with a corrective factor for clothing, covers, wind and wetness. It gives a time window with 95% confidence limits rather than a single figure."
  },
  {
    id: 21,
    question: "Post-mortem lividity becomes fixed in about:",
    options: ["6–8 hours", "30 minutes", "3 days", "2 weeks"],
    answer: 0,
    explanation: "Lividity starts to appear within an hour or two of death. In the first few hours it shifts if the body is moved, but by about 6–8 hours blood leaks into the tissues and haemolyses, and the pattern becomes fixed. A fixed pattern that does not match the body's position shows that the body was moved."
  },
  {
    id: 22,
    question: "Cherry-red post-mortem lividity suggests poisoning by:",
    options: ["Phosphorus", "Carbon monoxide", "Arsenic", "Opium"],
    answer: 1,
    explanation: "Carbon monoxide binds haemoglobin to form bright cherry-red carboxyhaemoglobin, which colours the lividity. Cyanide and refrigeration can give a bright pink lividity, and nitrites give a chocolate-brown colour from methaemoglobin. Opium and most other poisons cause ordinary bluish-purple lividity."
  },
  {
    id: 23,
    question: "A body found lying on its back has fixed lividity on the front of the chest and abdomen. This indicates that:",
    options: ["The body lay face down for several hours after death and was later turned over", "The death was due to drowning", "The death was due to carbon monoxide poisoning", "The death occurred less than an hour earlier"],
    answer: 0,
    explanation: "Lividity forms in the lowest parts of the body under gravity. Fixed lividity on the front means the body lay prone long enough for it to fix, about 6–8 hours, and was moved later. Lividity cannot appear on the front while the body lies on its back."
  },
  {
    id: 24,
    question: "On incising a reddish-purple area of skin at autopsy, the blood is found within the vessels and washes away easily, with no infiltration of tissue. This indicates:",
    options: ["An ante-mortem bruise", "A contusion with swelling", "Post-mortem lividity", "A burn"],
    answer: 2,
    explanation: "In lividity, blood stays inside dilated vessels and can be washed off the cut surface. In a bruise, blood has escaped into the tissues during life, infiltrates them and cannot be washed away. A bruise may also be swollen and is not limited to dependent parts."
  },
  {
    id: 25,
    question: "Rigor mortis is caused by:",
    options: ["Coagulation of muscle proteins by heat", "Depletion of ATP, so that actin and myosin remain locked in a rigid complex", "Muscle contraction caused by nerve impulses after death", "Accumulation of putrefactive gases in the muscles"],
    answer: 1,
    explanation: "In life, ATP is needed to detach myosin heads from actin. After death ATP is used up and cannot be replaced, so actomyosin cross-bridges stay locked and the muscles stiffen. Rigor passes off when the muscle proteins are broken down by autolysis and putrefaction."
  },
  {
    id: 26,
    question: "According to Nysten's rule, rigor mortis:",
    options: ["Appears first in the eyelids and face, spreads downwards to the limbs, and passes off in the same order", "Appears first in the lower limbs and spreads upwards", "Appears in all muscles at the same time", "Passes off in the reverse order of its onset"],
    answer: 0,
    explanation: "Rigor is first seen externally in the small muscles of the eyelids, then the face, jaw and neck, and moves down to the trunk, arms and legs. It passes off in the same sequence, so the small muscles relax first. Internally the myocardium is affected even earlier."
  },
  {
    id: 27,
    question: "The first muscle in the body to develop rigor mortis is the:",
    options: ["Orbicularis oculi", "Gastrocnemius", "Diaphragm", "Myocardium"],
    answer: 3,
    explanation: "The heart muscle stiffens within about an hour of death, before any externally visible rigor. Among the skeletal muscles, the eyelid muscles (orbicularis oculi) show it first. Contracted heart muscle in rigor should not be mistaken for hypertrophy."
  },
  {
    id: 28,
    question: "How does a cold environment affect rigor mortis?",
    options: ["It speeds up both onset and passing off", "It prevents rigor completely", "It delays onset and prolongs its duration", "It has no effect on rigor"],
    answer: 2,
    explanation: "Low temperature slows the chemical reactions that use up ATP and the later protein breakdown, so rigor appears later and lasts longer. Heat speeds up both onset and resolution. In Indian summers, rigor may pass off within a day."
  },
  {
    id: 29,
    question: "A drowned man is found tightly clutching weeds in his hand, the grip having set at the moment of death with no initial relaxation. This is:",
    options: ["Heat stiffening", "Cadaveric spasm (instantaneous rigor)", "Cold stiffening", "Ordinary rigor mortis"],
    answer: 1,
    explanation: "Cadaveric spasm is stiffening of a group of muscles at the moment of death, without primary flaccidity, usually during intense activity or emotion. It records the last act of life, such as gripping weeds while drowning or a weapon in suicide. It cannot be produced after death, which gives it medico-legal value."
  },
  {
    id: 30,
    question: "The pugilistic (boxer's) attitude of a body recovered from a fire is due to:",
    options: ["Heat coagulation of muscle proteins, with the bulkier flexors contracting more than the extensors", "Cadaveric spasm", "Ordinary rigor mortis", "Defensive struggling before death"],
    answer: 0,
    explanation: "Heat denatures and shortens muscle proteins, and the stronger flexor groups pull the limbs into a flexed, boxer-like posture. It happens whether the person was alive or dead when burned, so it is not a sign of life at the time of the fire. Ordinary rigor cannot develop in heat-coagulated muscle."
  },
  {
    id: 31,
    question: "Tache noire, a post-mortem change in the eyes, refers to:",
    options: ["Clouding of the lens", "Retinal haemorrhages", "Bleeding beneath the conjunctiva", "Brownish-black triangular discolouration of the sclera caused by drying when the eyelids stay open"],
    answer: 3,
    explanation: "If the eyelids remain open after death, the exposed sclera on either side of the cornea dries and turns brownish-black in triangular patches. This appears within a few hours. It is a drying artefact and should not be mistaken for injury."
  },
  {
    id: 32,
    question: "Which electrolyte in vitreous humour rises steadily after death and is used to estimate the post-mortem interval?",
    options: ["Sodium", "Potassium", "Chloride", "Calcium"],
    answer: 1,
    explanation: "Potassium leaks from the cells lining the vitreous after death, and its concentration rises roughly linearly with time. The vitreous is isolated and slow to putrefy, which makes it a useful sample. Sodium and chloride stay relatively stable or fall."
  },
  {
    id: 33,
    question: "Using Sturner's formula, PMI (hours) = 7.14 × [K⁺] − 39.1, a vitreous potassium concentration of 8.4 mmol/L gives a PMI of about:",
    options: ["8 hours", "39 hours", "60 hours", "21 hours"],
    answer: 3,
    explanation: "PMI = 7.14 × 8.4 − 39.1 = 60.0 − 39.1 ≈ 21 hours. The value 60 is obtained by forgetting to subtract the constant. Such formulas carry wide error ranges and are used along with other findings."
  },
  {
    id: 34,
    question: "Depurination, a major type of hydrolytic damage in degrading DNA, is the:",
    options: ["Removal of phosphate groups from the backbone", "Methylation of cytosine", "Loss of adenine or guanine by cleavage of the N-glycosidic bond, leaving an abasic site", "Joining of adjacent thymines"],
    answer: 2,
    explanation: "Water attacks the N-glycosidic bond that links a purine to its deoxyribose, and the base is lost. The abasic (AP) site that remains is unstable, and the backbone breaks there, so DNA becomes fragmented. Acidic conditions and heat speed up depurination."
  },
  {
    id: 35,
    question: "In ancient and highly degraded DNA, the characteristic C→T miscoding seen on sequencing is mainly due to:",
    options: ["Oxidation of guanine", "Hydrolytic deamination of cytosine to uracil", "UV-induced thymine dimers", "Depurination of adenine"],
    answer: 1,
    explanation: "Loss of the amino group turns cytosine into uracil, which polymerases read as thymine, so C→T (and G→A on the other strand) changes appear. The changes are most common near fragment ends, where DNA is single-stranded. Deamination of 5-methylcytosine gives thymine directly."
  },
  {
    id: 36,
    question: "Reactive oxygen species most commonly damage DNA by forming:",
    options: ["Cyclobutane pyrimidine dimers", "Uracil from cytosine", "Abasic sites from thymine", "8-oxo-7,8-dihydroguanine (8-oxoG)"],
    answer: 3,
    explanation: "Guanine has the lowest oxidation potential of the bases, and hydroxyl radicals and other ROS convert it to 8-oxoguanine. 8-oxoG can pair with adenine and cause G→T changes, and it can block polymerases. Pyrimidine dimers are caused by UV light, not oxidation."
  },
  {
    id: 37,
    question: "Exposure of a stain to ultraviolet light, for example strong sunlight, damages DNA mainly by forming:",
    options: ["8-oxoguanine", "Formaldehyde-induced cross-links to proteins", "Cyclobutane pyrimidine dimers between adjacent pyrimidines", "Methylated cytosines"],
    answer: 2,
    explanation: "UV (particularly UV-C and UV-B) joins neighbouring pyrimidines, mostly thymines, into cyclobutane dimers and 6-4 photoproducts. These block DNA polymerase, so affected templates fail to amplify. This is why UV is used to decontaminate work surfaces in DNA laboratories."
  },
  {
    id: 38,
    question: "EDTA protects DNA in blood samples and extraction buffers because it:",
    options: ["Chelates the Mg²⁺ and Ca²⁺ ions that nucleases need", "Denatures all proteins in the sample", "Raises the pH to about 12", "Binds DNA and shields it from UV light"],
    answer: 0,
    explanation: "DNases need divalent metal ions such as Mg²⁺ and Ca²⁺ as cofactors. EDTA binds these ions tightly, so the nucleases cannot cut DNA. This is why purple-top EDTA tubes are used for reference blood samples and why TE buffer contains EDTA."
  },
  {
    id: 39,
    question: "During apoptosis, caspase-activated DNase cuts DNA between nucleosomes. On an agarose gel the fragments appear as:",
    options: ["A single high-molecular-weight band", "A ladder of multiples of about 180–200 bp", "A smear confined to below 20 bp", "Circular plasmid bands"],
    answer: 1,
    explanation: "DNA wrapped round nucleosomes is protected, while the linker DNA between them is cut. This gives fragments that are multiples of about 180–200 bp, seen as a 'DNA ladder'. Necrosis and putrefaction, by contrast, give a random smear."
  },
  {
    id: 40,
    question: "When degraded DNA is amplified with a standard STR kit, the profile typically shows:",
    options: ["Progressively lower peaks or drop-out at the larger loci, a 'ski-slope' profile", "Higher peaks at the larger loci", "Extra alleles at every locus", "Equal peak heights at all loci"],
    answer: 0,
    explanation: "Fragmented DNA has fewer intact templates long enough to span the larger amplicons, so peak heights fall as amplicon size increases. Large loci may drop out completely, giving a partial profile. Mini-STR kits with shorter amplicons help recover these loci."
  },
  {
    id: 41,
    question: "A quantification kit gives 2.0 ng/µL for a short autosomal target and 0.2 ng/µL for a long autosomal target in the same extract. The degradation index (short target ÷ long target) is:",
    options: ["0.1", "1.8", "10", "2.2"],
    answer: 2,
    explanation: "Degradation index = 2.0 ÷ 0.2 = 10. In intact DNA both targets give similar results and the index is close to 1. Higher values show that long fragments are scarce, which warns that larger STR loci may drop out."
  },
  {
    id: 42,
    question: "Mitochondrial DNA is often analysed in severely degraded remains because:",
    options: ["It is more discriminating than nuclear STRs", "It is inherited from both parents", "It is much longer than nuclear DNA", "It is present in hundreds to thousands of copies per cell, and its circular form resists exonuclease attack"],
    answer: 3,
    explanation: "Each cell has many mitochondria, each with several copies of mtDNA, so some intact copies often survive when nuclear DNA is lost. Its circular form has no free ends for exonucleases. Its drawback is lower discrimination, since it is maternally inherited and shared by maternal relatives."
  },
  {
    id: 43,
    question: "In a skeletonised body that has been exposed for a long time, the best source of DNA is usually:",
    options: ["Remaining dried skin", "Dense bone such as the femoral shaft, or teeth", "Remaining muscle tissue", "Hair shafts without roots"],
    answer: 1,
    explanation: "Dense cortical bone, the petrous part of the temporal bone and teeth protect DNA within their mineral (hydroxyapatite) matrix. Teeth are also shielded by enamel. Rootless hair shafts contain little or no nuclear DNA and are used only for mtDNA."
  },
  {
    id: 44,
    question: "RNA degrades far faster than DNA mainly because:",
    options: ["The 2′-hydroxyl group of ribose makes its backbone prone to hydrolysis, and RNases are very stable and widespread", "RNA is double-stranded", "RNA contains thymine", "RNA is protected by histones"],
    answer: 0,
    explanation: "The 2′-OH group can attack the neighbouring phosphodiester bond, so the RNA chain breaks easily, especially in alkali. RNases are abundant on skin and in the environment and are hard to inactivate. DNA lacks the 2′-OH and is much more stable."
  },
  {
    id: 45,
    question: "Estimating the age of a bloodstain from its RNA relies on the fact that:",
    options: ["RNA remains completely unchanged for years", "RNA levels increase after the stain dries", "Different RNA species, such as mRNA and rRNA, degrade at different rates, so their ratio changes with time", "Only RNA from white cells is present in blood"],
    answer: 2,
    explanation: "Researchers have measured ratios such as β-actin mRNA to 18S rRNA in stains of known age and found that they change in a time-dependent way. Comparing a questioned stain against such curves gives an estimate of its age. Temperature and humidity strongly affect the result, so the method is still being developed."
  },
  {
    id: 46,
    question: "The RNA Integrity Number (RIN), produced by microcapillary electrophoresis of an RNA sample, is a scale from:",
    options: ["0 to 100 per cent", "1 to 4", "−1 to +1", "1 (fully degraded) to 10 (intact)"],
    answer: 3,
    explanation: "Software such as the Agilent Bioanalyzer's assigns a RIN from 1 (highly degraded) to 10 (intact). It is based on the whole electrophoretic trace, including the 28S and 18S rRNA peaks. Post-mortem and stain samples often have low RIN values."
  },
  {
    id: 47,
    question: "As a bloodstain ages, its colour changes from bright red to dark brown mainly because:",
    options: ["Haemoglobin is converted into bilirubin", "Oxyhaemoglobin is oxidised to methaemoglobin and then to hemichrome", "Iron is lost from the haem group", "Red cells take up more oxygen"],
    answer: 1,
    explanation: "Outside the body, oxyhaemoglobin oxidises to methaemoglobin and then denatures to hemichrome, which are brown. These changes shift the absorption spectrum, including the Soret band, which is the basis of spectroscopic methods for estimating stain age. Bilirubin forms in living tissue, as in a healing bruise."
  },
  {
    id: 48,
    question: "Western blot analysis of the time-dependent breakdown of skeletal muscle proteins such as desmin and troponin T is being developed to estimate:",
    options: ["The cause of death", "The blood group", "The post-mortem interval", "The age of the deceased"],
    answer: 2,
    explanation: "After death, muscle proteins are cleaved by proteases such as calpains in a fairly predictable sequence. The appearance or loss of particular fragments on Western blots gives an estimate of time since death. Temperature has to be allowed for, as with other PMI methods."
  },
  {
    id: 49,
    question: "Storing a moist biological stain in a sealed plastic bag at room temperature degrades its DNA mainly because:",
    options: ["Plastic absorbs DNA from the stain", "Plastic gives off ultraviolet light", "The stain dries too quickly", "Trapped moisture lets bacteria and fungi grow and release nucleases"],
    answer: 3,
    explanation: "A moist, warm, sealed environment encourages microbial growth, and microbes release nucleases and other enzymes that break down DNA and proteins. Wet items should be air-dried at room temperature and packed in paper. Dry, cool storage greatly slows degradation."
  },
  {
    id: 50,
    question: "Which of the following is a late post-mortem change?",
    options: ["Algor mortis", "Primary flaccidity", "Adipocere formation", "Livor mortis"],
    answer: 2,
    explanation: "Late changes include putrefaction, adipocere formation and mummification. Early changes include algor mortis, livor mortis and rigor mortis, and primary flaccidity occurs right after death. Late changes help to estimate PMI over weeks or months."
  }
];

export default questions;
