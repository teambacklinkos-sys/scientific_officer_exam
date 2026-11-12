const questions = [
  {
    id: 1,
    question: "The outer wall (exine) of pollen grains, which allows them to survive for very long periods in soil and on clothing, is made of",
    options: ["Cellulose", "Sporopollenin", "Lignin", "Pectin"],
    answer: 1,
    explanation: "Sporopollenin is one of the most chemically resistant natural polymers, standing up to strong acids, alkalis and decay. This is why pollen persists on clothes, shoes and in soil for a long time. The inner wall (intine) is made of cellulose and pectin and is easily destroyed."
  },
  {
    id: 2,
    question: "The standard laboratory preparation of pollen, which uses a hot 9:1 mixture of acetic anhydride and concentrated sulphuric acid to remove cellulose and cell contents while leaving the exine intact, is called",
    options: ["Gram staining", "Acid digestion with nitric acid", "Differential extraction", "Acetolysis (Erdtman's method)"],
    answer: 3,
    explanation: "Erdtman's acetolysis clears the grain so the exine sculpture and apertures can be seen clearly under the microscope. It works because sporopollenin resists the reagent while cellulose does not. Nitric acid digestion is used to recover diatoms."
  },
  {
    id: 3,
    question: "Mud on a suspect's shoes contains abundant pollen of an insect-pollinated shrub that grows only around the scene of a murder. The value of this finding is that insect-pollinated (entomophilous) plants",
    options: ["Shed huge amounts of pollen carried far by wind", "Have pollen without exine, so it decays quickly", "Shed little pollen, which travels only a short distance from the plant", "Release their pollen only at night"],
    answer: 2,
    explanation: "Wind-pollinated (anemophilous) plants such as grasses and pines release vast amounts of pollen that travel far, so they indicate only a broad region. Insect-pollinated plants produce small amounts of sticky pollen that stays near the plant. A rare insect-pollinated type therefore gives a strong link to a specific place."
  },
  {
    id: 4,
    question: "Pollen grains with three long furrow-like apertures (tricolpate pollen) are characteristic of",
    options: ["Eudicots", "Monocots", "Gymnosperms such as pines", "Ferns"],
    answer: 0,
    explanation: "Tricolpate pollen and its derivatives define the eudicot group of flowering plants. Monocots and early angiosperms have mainly a single furrow (monosulcate). Pines have pollen with two air sacs, and ferns produce spores, not pollen."
  },
  {
    id: 5,
    question: "In forensic palynology, linking a suspect's clothing to a scene usually relies on comparing",
    options: ["A single grain of a common grass pollen", "The pollen assemblage and its proportions", "The colour of the soil on both items", "The DNA of the pollen and of the suspect"],
    answer: 1,
    explanation: "Each place has its own pollen profile reflecting the local mix of plants. Matching the assemblage, especially rare types, gives stronger evidence than a single common grain. Common wind-blown types are found almost everywhere and carry little weight."
  },
  {
    id: 6,
    question: "The nasal passages of a body recovered from a shallow grave contain pollen of a plant that flowers only in February and March in that region. This finding is most useful to indicate",
    options: ["The cause of death", "The age of the deceased", "The season of death or burial", "The sex of the deceased"],
    answer: 2,
    explanation: "Pollen in the nasal cavity was inhaled or deposited while the person was alive or soon after death, so it reflects the plants flowering at that time. Flowering calendars of local plants can then narrow down the season. Pollen gives no information about cause of death, age or sex."
  },
  {
    id: 7,
    question: "Spores differ from pollen grains mainly because spores",
    options: ["Carry male gametes that fertilise an ovule", "Are produced only by flowering plants", "Can grow into a new organism without fertilisation", "Lack any resistant outer wall"],
    answer: 2,
    explanation: "Spores of fungi, mosses and ferns germinate to give a new individual without fertilisation. Pollen grains are the male gametophytes of seed plants and must reach a stigma or ovule to fertilise. Many spores also have resistant walls and are used in forensic work like pollen."
  },
  {
    id: 8,
    question: "To estimate pollen concentration, 10,000 exotic Lycopodium spores are added to a soil sample. During counting, 200 Lycopodium spores and 400 native pollen grains are recorded. The estimated number of native pollen grains in the sample is",
    options: ["5,000", "4,000", "2,000,000", "20,000"],
    answer: 3,
    explanation: "Pollen in sample = (pollen counted ÷ marker counted) × markers added = (400 ÷ 200) × 10,000 = 20,000. The marker method corrects for losses during processing. Lycopodium is used because its spores are distinctive and unlikely to be present naturally."
  },
  {
    id: 9,
    question: "The cell wall (frustule) of diatoms, which resists acid digestion and decay, is made of",
    options: ["Calcium carbonate", "Silica", "Chitin", "Cellulose"],
    answer: 1,
    explanation: "Diatoms are unicellular algae with a two-part silica shell (frustule) bearing species-specific patterns. Silica survives strong acids and putrefaction, which is what makes the diatom test possible. Calcium carbonate shells belong to foraminifera and coccolithophores."
  },
  {
    id: 10,
    question: "The diatom test for antemortem drowning is based on the principle that",
    options: ["Diatoms are produced inside the body after death in water", "Diatoms in inhaled water reach distant organs only via a beating heart", "Diatoms enter the stomach only after death", "Diatoms dissolve blood clots in the lungs"],
    answer: 1,
    explanation: "When a living person inhales water, the diatoms enter the pulmonary circulation and are carried to the brain, kidneys, liver and bone marrow. A body thrown into water after death has no circulation, so diatoms may enter the lungs passively but not reach distant organs. Finding diatoms in closed organs therefore supports drowning while alive."
  },
  {
    id: 11,
    question: "For the diatom test, which sample is preferred because it lies in a closed cavity that is least likely to be contaminated?",
    options: ["Bone marrow of the femur", "Lung tissue", "Stomach contents", "Skin of the hands"],
    answer: 0,
    explanation: "Marrow from an intact long bone such as the femur is sealed from the water and from laboratory contamination. Lungs and stomach can receive diatoms passively after death, so they are less conclusive. A control sample of the water from the scene must also be examined."
  },
  {
    id: 12,
    question: "In the laboratory, diatoms are recovered from tissue samples by digesting the tissue with",
    options: ["Proteinase K", "Sodium chloride solution", "Concentrated nitric acid", "Ethanol"],
    answer: 2,
    explanation: "Strong acid digestion (classically concentrated nitric acid, often with heat) destroys organic tissue completely while silica frustules survive. The residue is centrifuged, washed and examined under the microscope. Because no tissue is left, care must be taken to use diatom-free reagents and glassware."
  },
  {
    id: 13,
    question: "A highly decomposed body is recovered from a river. Diatoms of the same species found in a water sample from that river are present in the femoral bone marrow. The most reasonable conclusion is that",
    options: ["The person was alive when entering the water, supporting antemortem drowning", "The body was dumped in the river after death", "Decomposition produced the diatoms", "No conclusion can be drawn because diatoms are always present in marrow"],
    answer: 0,
    explanation: "Diatoms reach marrow only through a working circulation, and the species match links them to the river. The diatom test is valuable in decomposed bodies because frustules survive when other drowning signs are lost. Experts still interpret it together with autopsy and circumstantial findings."
  },
  {
    id: 14,
    question: "A body is found in a bathtub filled with clean tap water and the diatom test on bone marrow is negative. The best interpretation is that",
    options: ["A negative result does not exclude drowning", "Drowning is ruled out completely", "The person must have died of poisoning", "The body was certainly moved after death"],
    answer: 0,
    explanation: "Tap water and swimming pool water usually contain very few diatoms, and in some drowning deaths little water is inhaled. So the absence of diatoms cannot rule out drowning. Comparing with a sample of the water at the scene helps interpret any result."
  },
  {
    id: 15,
    question: "The science of dating events and environmental change using annual growth rings in wood was founded in the early twentieth century by",
    options: ["Gunnar Erdtman", "Arthur Koehler", "A.E. Douglass", "Jean-Pierre Mégnin"],
    answer: 2,
    explanation: "Andrew Ellicott Douglass, an American astronomer, linked tree ring widths with climate and developed cross-dating. Erdtman worked on pollen morphology and Koehler applied wood anatomy in the Lindbergh case. Mégnin described waves of insects on corpses."
  },
  {
    id: 16,
    question: "In a growth ring of a temperate tree, the light-coloured band of large, thin-walled cells formed at the start of the growing season is called",
    options: ["Latewood (summerwood)", "Earlywood (springwood)", "Heartwood", "Bark"],
    answer: 1,
    explanation: "Earlywood forms in spring when growth is fast, with wide cells and thin walls. Latewood forms later in the season with narrow, thick-walled cells that look darker. One earlywood band plus one latewood band make up an annual ring."
  },
  {
    id: 17,
    question: "Matching the pattern of wide and narrow rings in a wooden sample with a dated master chronology from the same region, to assign each ring to a calendar year, is called",
    options: ["Acetolysis", "Radiocarbon calibration", "Seriation", "Cross-dating"],
    answer: 3,
    explanation: "Because ring widths vary with yearly climate, trees in the same region share a ring-width pattern. Cross-dating lines up an unknown sample against a master chronology, which also detects missing or false rings. It can date the felling of timber used in a structure or object."
  },
  {
    id: 18,
    question: "In the 1932 Lindbergh baby kidnapping case, the wood of a home-made ladder was traced to a lumber yard and to a floorboard in the suspect's attic by the wood scientist",
    options: ["Edmond Locard", "Hans Gross", "Calvin Goddard", "Arthur Koehler"],
    answer: 3,
    explanation: "Arthur Koehler of the US Forest Products Laboratory studied grain, ring patterns and plane marks on the ladder rails. His testimony helped convict Bruno Hauptmann in 1935 and is a landmark in forensic botany. Goddard is known for firearms identification."
  },
  {
    id: 19,
    question: "A tree root that has grown through the rib cage of a buried skeleton shows seven annual growth rings. This indicates that the body has been buried for",
    options: ["Exactly seven months", "At least seven years", "Less than one year", "At most seven years"],
    answer: 1,
    explanation: "The root could only grow through the ribs after the soft tissues decayed, so its age sets a minimum time since burial. Seven rings mean at least seven growing seasons. The body may have been there longer, because the root may have arrived some time after burial."
  },
  {
    id: 20,
    question: "Recognisable plant cells from vegetables are found in the stomach of a deceased person at autopsy. They remain identifiable after partial digestion mainly because",
    options: ["Human digestive enzymes cannot digest cellulose cell walls", "Plant cells contain no protein", "Stomach acid preserves all food completely", "Plant cells are coated with silica"],
    answer: 0,
    explanation: "Humans lack cellulase, so plant cell walls survive digestion and retain their shapes. Botanists can identify the plant tissues and match them with the last meal described by witnesses. This can help reconstruct the victim's last hours."
  },
  {
    id: 21,
    question: "The growth rings seen in a cross-section of a tree trunk are formed by the yearly activity of the vascular cambium producing",
    options: ["Secondary phloem", "Secondary xylem", "Cork", "Pith"],
    answer: 1,
    explanation: "Each season the vascular cambium adds a new layer of secondary xylem (wood) inside it, and these layers appear as rings. Secondary phloem is added outside the cambium and is crushed over time, so it does not form lasting rings. Wood anatomy can also identify the species of a wooden exhibit."
  },
  {
    id: 22,
    question: "A cross-section of wood from a broken club shows only tracheids arranged in neat radial rows, with no vessels (pores). The wood most likely comes from",
    options: ["A hardwood such as teak or sal", "A softwood such as pine or deodar", "A monocot such as bamboo", "A palm such as coconut"],
    answer: 1,
    explanation: "Softwoods of gymnosperms conduct water through tracheids alone and lack vessels, so they appear non-porous. Hardwoods of dicot trees such as teak and sal contain vessels that appear as pores. Monocots like bamboo and palms have scattered vascular bundles and no annual growth rings of this kind."
  },
  {
    id: 23,
    question: "The earliest recorded use of insects to solve a crime, in which flies gathered on the one sickle carrying invisible traces of blood, is described in a thirteenth-century Chinese text by",
    options: ["Jean-Pierre Mégnin, in 'La faune des cadavres'", "Francesco Redi, in his experiments on spontaneous generation", "Sung Tz'u, in 'Hsi Yuan Lu' (The Washing Away of Wrongs)", "Bergeret d'Arbois, in a report on a mummified infant"],
    answer: 2,
    explanation: "Sung Tz'u's manual of 1247 describes a death investigator asking villagers to lay down their sickles. Blowflies were drawn to the one with blood residues and the owner confessed. Mégnin, Redi and Bergeret worked centuries later in Europe."
  },
  {
    id: 24,
    question: "Jean-Pierre Mégnin's book 'La faune des cadavres' (1894) is important in forensic entomology because it described",
    options: ["The life cycle of the malaria parasite", "Eight successive waves of insects on a corpse", "The use of diatoms to diagnose drowning", "The structure and anatomy of pollen grains"],
    answer: 1,
    explanation: "Mégnin proposed that different groups of insects arrive in a predictable order as a corpse changes. His eight waves for exposed bodies laid the basis for succession-based PMI estimation. Modern work shows that succession varies with region, season and habitat."
  },
  {
    id: 25,
    question: "In most regions, the first insects to arrive and lay eggs on a fresh corpse, often within minutes to hours of death, are",
    options: ["Dermestid beetles (Dermestidae)", "Cheese skippers (Piophilidae)", "Clothes moths (Tineidae)", "Blowflies (Calliphoridae)"],
    answer: 3,
    explanation: "Blowflies are attracted by the odour of fresh decomposition and lay eggs in natural orifices and wounds. Dermestid beetles and clothes moths feed on dry skin and hair in late stages, and cheese skippers arrive later during fermentation. The first wave is the most useful for estimating a minimum PMI."
  },
  {
    id: 26,
    question: "Flesh flies (Sarcophagidae) differ from most blowflies in their mode of reproduction because they",
    options: ["Deposit first-instar larvae instead of eggs", "Lay their eggs only in standing water", "Reproduce without mating (parthenogenesis)", "Pass through no larval stage at all"],
    answer: 0,
    explanation: "Female flesh flies retain eggs internally until they hatch and then deposit first-instar larvae on the body. This skips the egg stage, which must be taken into account when calculating PMI from larval development. Blowflies are usually oviparous."
  },
  {
    id: 27,
    question: "The correct sequence of stages in the life cycle of a blowfly is",
    options: ["Egg → nymph (several instars) → adult", "Egg → pupa → larva (three instars) → adult", "Larva → egg → pupa → adult", "Egg → larva (three instars) → pupa → adult"],
    answer: 3,
    explanation: "Flies are holometabolous, undergoing complete metamorphosis. The third-instar larva stops feeding, wanders away from the body (post-feeding or prepupal stage) and forms a hard brown puparium from its last larval skin. Insects such as cockroaches show incomplete metamorphosis with nymphs."
  },
  {
    id: 28,
    question: "A maggot collected from a corpse shows three slits in each posterior spiracle. It is in the",
    options: ["First larval instar", "Second larval instar", "Third larval instar", "Pupal stage"],
    answer: 2,
    explanation: "In calliphorid larvae the number of slits in the posterior spiracles increases with each moult: one slit in the first instar, two in the second and three in the third. This is a quick way to determine the stage of development. The stage, with species and temperature, is used to estimate the age of the larva."
  },
  {
    id: 29,
    question: "Empty puparia of a blowfly species are found beneath a body. The most valid conclusion is that",
    options: ["At least one full generation has completed development", "Death occurred within the last 24 hours", "The body was moved from another place", "Insects could not reach the body at all"],
    answer: 0,
    explanation: "An empty puparium means an adult has already emerged, so egg laying must have happened at least one full development period earlier. Under given temperatures, that period can be calculated from development data. The actual PMI may be longer because colonisation may have been delayed or several generations passed."
  },
  {
    id: 30,
    question: "A blowfly species needs 250 accumulated degree days (ADD) above a base temperature of 10°C to complete development from egg to adult. If the mean daily temperature at the scene is constant at 30°C, how many days will development take?",
    options: ["8.3 days", "25 days", "10 days", "12.5 days"],
    answer: 3,
    explanation: "Degree days gained per day = mean temperature − base temperature = 30 − 10 = 20. Days needed = 250 ÷ 20 = 12.5 days. Using the mean temperature without subtracting the base (250 ÷ 30 = 8.3) is a common error."
  },
  {
    id: 31,
    question: "A larval stage requires 2400 accumulated degree hours (ADH) above a developmental threshold of 10°C. If the temperature stays constant at 22°C, how long will this stage take?",
    options: ["109 hours", "240 hours", "100 hours", "200 hours"],
    answer: 3,
    explanation: "ADH per hour = 22 − 10 = 12. Time = 2400 ÷ 12 = 200 hours, which is about 8.3 days. ADH and ADD express the same idea: development needs a fixed amount of thermal energy above the threshold."
  },
  {
    id: 32,
    question: "Mean daily temperatures over four days at a scene were 20°C, 24°C, 26°C and 30°C. With a base temperature of 10°C, the accumulated degree days over this period are",
    options: ["60", "100", "40", "25"],
    answer: 0,
    explanation: "Daily degree days are 10, 14, 16 and 20 (each mean minus 10). Their sum is 10 + 14 + 16 + 20 = 60 ADD. Summing raw temperatures (100) ignores the base threshold below which no development occurs."
  },
  {
    id: 33,
    question: "Estimates of time since death from the age of the oldest blowfly larvae on a body are usually described as a minimum PMI because",
    options: ["Larvae always hatch before death occurs", "Insects arrive only after skeletonisation", "Colonisation may be delayed after death", "Larvae develop at the same rate at all temperatures"],
    answer: 2,
    explanation: "The insect clock starts when eggs are laid, not at death. Delays caused by darkness, rain, cold, wrapping or burial can separate the two. So the entomological estimate gives the shortest time the person has been dead."
  },
  {
    id: 34,
    question: "A victim is known to have been killed outdoors at about 11 p.m. Blowflies are generally inactive in darkness. When the entomologist calculates the age of the oldest eggs and larvae, the most likely time of first egg laying is",
    options: ["Shortly after daybreak the next morning", "Within minutes of death at 11 p.m.", "Exactly at midnight", "Only after one week"],
    answer: 0,
    explanation: "Most blowflies fly and lay eggs during daylight and in warm conditions, so a body left at night usually stays uncolonised until morning. The insect-based estimate will then fall several hours short of the true PMI. Nocturnal egg laying has been recorded but is uncommon."
  },
  {
    id: 35,
    question: "A body was found wrapped in thick plastic sheeting in a closed room. Compared with an exposed outdoor body, the insect-based estimate of minimum PMI is likely to",
    options: ["Overestimate the true time since death, because insects arrive earlier indoors", "Be exactly equal to the true PMI", "Be impossible to use because no insects colonise indoor bodies", "Underestimate the true time since death, because colonisation was delayed"],
    answer: 3,
    explanation: "Wrapping and closed rooms keep flies away for some time, so egg laying begins later than death. The larval age then covers only part of the post-mortem period. Investigators must consider access conditions before reporting the PMI."
  },
  {
    id: 36,
    question: "Hide beetles (Dermestidae) feeding on a body usually indicate",
    options: ["A late, dry stage of decomposition", "A fresh body dead for less than an hour", "A body that was submerged in water", "Antemortem infestation of open wounds"],
    answer: 0,
    explanation: "Dermestid larvae eat dried skin, cartilage and hair after the moist tissues have gone. Museums even use them to clean skeletons. Their presence points to a long PMI, usually weeks to months depending on climate."
  },
  {
    id: 37,
    question: "The 'cheese skipper', whose larvae appear on a corpse during the stage of butyric fermentation of fats, belongs to the family",
    options: ["Calliphoridae", "Sarcophagidae", "Muscidae", "Piophilidae"],
    answer: 3,
    explanation: "Piophila casei larvae can leap by bending and releasing their bodies, hence the name 'skipper'. They arrive after the early blowfly wave, when fats are fermenting and proteins are broken down. Their arrival is part of the later waves described by Mégnin."
  },
  {
    id: 38,
    question: "Small flies that can reach buried bodies and even sealed coffins, and are therefore called 'coffin flies', belong to the family",
    options: ["Calliphoridae", "Sarcophagidae", "Phoridae", "Piophilidae"],
    answer: 2,
    explanation: "Phorid flies such as Conicera tibialis can burrow through soil to reach buried remains and breed for several generations without surfacing. Their presence on exhumed bodies indicates burial for some time. Blowflies seldom reach bodies buried more than a few centimetres deep."
  },
  {
    id: 39,
    question: "Rove beetles (Staphylinidae) and clown beetles (Histeridae) found on a body mainly act as",
    options: ["Primary consumers of fresh tissue", "Predators that feed on fly eggs and larvae", "Pollinators", "Parasites of humans"],
    answer: 1,
    explanation: "These beetles arrive soon after the flies to hunt maggots and eggs, not to eat the corpse. They form a predator group in the necrophagous community. Their predation can reduce larval numbers and must be remembered when interpreting maggot counts."
  },
  {
    id: 40,
    question: "A large mass of feeding maggots on a body has a temperature well above the ambient air temperature. When calculating accumulated degree days for these larvae, this means that",
    options: ["Maggot mass heat has no effect on development", "Larvae develop more slowly within a mass", "Ambient temperatures alone may overestimate the PMI", "The heat of the mass kills all the larvae"],
    answer: 2,
    explanation: "Metabolic heat and friction in a maggot mass can raise its temperature by 10°C or more. Larvae in the mass develop faster than ambient temperature would predict, so ignoring this heat makes them seem older than they are. Mass temperature should be recorded at the scene."
  },
  {
    id: 41,
    question: "The recommended way to preserve some of the blowfly larvae collected from a body for later measurement is to",
    options: ["Kill them in hot water, then store in 70–80% ethanol", "Place them alive directly in 10% formalin", "Freeze them alive in a closed polythene bag", "Dry them completely in the sun"],
    answer: 0,
    explanation: "Blanching in hot water fixes larvae in an extended position so that their length truly reflects their age, and ethanol then preserves them. Putting live larvae into alcohol or formalin makes them shrink or blacken. Some live larvae should also be kept and reared to adults to confirm the species."
  },
  {
    id: 42,
    question: "Entomotoxicology is the",
    options: ["Use of carrion insects to detect drugs and toxins in a corpse", "Study of poisonous insects that kill humans", "Use of insecticides to clean crime scenes", "Study of insect bites on living victims"],
    answer: 0,
    explanation: "When blood, urine or tissues are no longer available, larvae, puparia and cast skins can still contain drugs taken in from the body. Drugs can also change development rates, affecting PMI estimates. Methods such as GC-MS and immunoassays are used on insect samples."
  },
  {
    id: 43,
    question: "Larvae feeding on the body of a person who died after a cocaine overdose developed faster than expected for the temperature. If this effect is ignored, the estimated PMI will be",
    options: ["Too short, because the larvae appear younger than they are", "Unaffected", "Impossible to calculate", "Too long, because the larvae appear older than they are"],
    answer: 3,
    explanation: "Cocaine has been shown to speed up the growth of some sarcophagid larvae. Faster-growing larvae reach a given size sooner, so they seem to have been feeding longer. Toxicology of larvae helps the entomologist correct for such effects."
  },
  {
    id: 44,
    question: "Live maggots are found in the bedsores of an elderly bedridden woman at home. This condition, which may indicate neglect, is called",
    options: ["Mummification", "Adipocere", "Myiasis", "Entomotoxicology"],
    answer: 2,
    explanation: "Myiasis is infestation of living tissue by fly larvae. In the elderly, infants or disabled persons, it can be evidence of neglect. If such a person later dies, larvae of antemortem origin can make the PMI seem longer than it is."
  },
  {
    id: 45,
    question: "The common metallic green blowfly, Lucilia sericata, also used in maggot therapy for wounds, belongs to the family",
    options: ["Sarcophagidae", "Calliphoridae", "Muscidae", "Phoridae"],
    answer: 1,
    explanation: "Lucilia sericata (green bottle fly) is a typical calliphorid and an early coloniser of corpses in many regions. Its larvae feed mainly on necrotic tissue, which is why they are used to clean wounds. Calliphora vicina is the bluebottle of the same family."
  },
  {
    id: 46,
    question: "In Indian studies of carrion and human corpses, which blowfly genus, including the Oriental latrine fly, is among the most frequently recorded early colonisers?",
    options: ["Piophila", "Dermestes", "Conicera", "Chrysomya"],
    answer: 3,
    explanation: "Species such as Chrysomya megacephala and Chrysomya rufifacies dominate the early fly fauna of tropical and subtropical India. Chrysomya rufifacies larvae can even prey on other maggots. Piophila, Dermestes and Conicera belong to later-arriving or specialised groups."
  },
  {
    id: 47,
    question: "Isomegalen diagrams, used to estimate the age of blowfly larvae, relate",
    options: ["Larval colour, humidity and weight", "Larval length, temperature and larval age", "Spiracle slit number and soil type", "Pupal size and the body weight of the deceased"],
    answer: 1,
    explanation: "An isomegalen diagram plots lines of equal larval length against temperature and time for a given species. Knowing the length of the larvae and the temperature, one reads off their age. Isomorphen diagrams do the same using developmental stage instead of length."
  },
  {
    id: 48,
    question: "The first use of insects to estimate post-mortem interval in a legal case in Europe, involving the mummified body of an infant found behind a mantelpiece, was by",
    options: ["Sung Tz'u (1247)", "Bergeret d'Arbois (1855)", "Arthur Koehler (1935)", "Paul Kirk (1953)"],
    answer: 1,
    explanation: "In 1855 the French physician Bergeret used insect development on a mummified infant to suggest the death had occurred years earlier. This shifted suspicion from the current occupants of the house to earlier tenants. His reasoning had errors by modern standards but is regarded as the first forensic PMI estimate from insects in Europe."
  },
  {
    id: 49,
    question: "On a body dead for about a day, heavy egg masses are found on the palms and forearms, while the eyes, nose and mouth have only a few eggs. The most likely explanation is that",
    options: ["Flies always lay eggs first on the hands", "The body has been dead for many months", "Wounds on the hands and forearms attracted flies first", "Eggs on the hands were laid before death"],
    answer: 2,
    explanation: "Blowflies usually lay eggs first in natural orifices, but fresh wounds with exposed blood are even more attractive. Unusual egg-laying sites may thus reveal injuries that are hard to see in a decomposing body. The pathologist should examine these sites closely for cuts or defence wounds."
  },
  {
    id: 50,
    question: "Insects of a species that occurs only in forest areas are found developing on a body discovered in a city flat. This finding most strongly suggests that",
    options: ["The body was first exposed elsewhere and then moved", "The person died of natural causes", "Death occurred within the last hour", "The flat was sprayed with insecticide"],
    answer: 0,
    explanation: "Insect species have characteristic habitats and geographic ranges. If the fauna on a body does not belong to the place where it was found, the body was probably exposed elsewhere first. Such evidence can direct investigators to the primary crime scene."
  }
];

export default questions;
