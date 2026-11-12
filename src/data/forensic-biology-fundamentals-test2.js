const questions = [
  {
    id: 1,
    question: "In R.H. Whittaker's five-kingdom classification (1969), bacteria and cyanobacteria are placed in the kingdom",
    options: ["Monera", "Protista", "Fungi", "Plantae"],
    answer: 0,
    explanation: "Whittaker grouped all prokaryotes, including bacteria and cyanobacteria, in Monera. Protista holds unicellular eukaryotes such as protozoa and diatoms. Fungi were given their own kingdom because they are heterotrophic absorbers with chitinous walls."
  },
  {
    id: 2,
    question: "The correct sequence of reagents in Gram staining is",
    options: ["Safranin → Gram's iodine → alcohol → crystal violet", "Crystal violet → alcohol → Gram's iodine → safranin", "Carbol fuchsin → acid-alcohol → methylene blue → iodine", "Crystal violet → Gram's iodine → alcohol or acetone → safranin"],
    answer: 3,
    explanation: "The primary stain crystal violet is followed by iodine as mordant, then a decolouriser, and finally safranin as counterstain. Gram-positive cells stay violet and Gram-negative cells take up the red safranin. Carbol fuchsin with acid-alcohol and methylene blue is the Ziehl-Neelsen acid-fast stain."
  },
  {
    id: 3,
    question: "In the Gram stain, Gram's iodine acts as a",
    options: ["Decolourising agent", "Mordant", "Counterstain", "Primary stain"],
    answer: 1,
    explanation: "Iodine combines with crystal violet to form a large insoluble complex that is harder to wash out. This mordant step is what allows the thick wall of Gram-positive bacteria to hold the dye. Heat fixing is done earlier, and safranin is the counterstain."
  },
  {
    id: 4,
    question: "Gram-positive bacteria retain the crystal violet–iodine complex during decolourisation mainly because they have",
    options: ["An outer membrane rich in lipopolysaccharide", "Mycolic acid in the cell wall", "A polysaccharide capsule outside the wall", "A thick peptidoglycan wall that alcohol dehydrates"],
    answer: 3,
    explanation: "Alcohol dehydrates and shrinks the thick peptidoglycan mesh, trapping the dye complex. Gram-negative bacteria have a thin peptidoglycan layer and a lipid-rich outer membrane that alcohol disrupts, so the dye escapes. Mycolic acid is the basis of acid-fastness."
  },
  {
    id: 5,
    question: "A smear of a known Gram-positive coccus appears pink after staining. The most likely technical error is",
    options: ["Excessive decolourisation with alcohol", "Omitting the safranin counterstain", "Using too thick a smear", "Using freshly prepared crystal violet"],
    answer: 0,
    explanation: "Leaving the decolouriser on too long can strip the dye complex even from Gram-positive cells, which then take up safranin and look Gram-negative. Old cultures with damaged walls can do the same. Omitting safranin would make Gram-negative cells almost colourless, not turn Gram-positive cells pink."
  },
  {
    id: 6,
    question: "The lipopolysaccharide (endotoxin) of Gram-negative bacteria is located in the",
    options: ["Outer membrane", "Cytoplasm", "Inner plasma membrane", "Nucleoid"],
    answer: 0,
    explanation: "Gram-negative bacteria have an outer membrane outside a thin peptidoglycan layer, and its outer leaflet contains LPS. Lipid A of LPS is responsible for fever and septic shock. Gram-positive bacteria have no outer membrane but carry teichoic acids in their thick wall."
  },
  {
    id: 7,
    question: "Mycobacterium tuberculosis is not easily stained by the Gram method and is demonstrated by the Ziehl-Neelsen stain because its cell wall contains",
    options: ["Teichoic acids", "Mycolic acids", "Chitin", "Lipopolysaccharide"],
    answer: 1,
    explanation: "Waxy mycolic acids make the wall resist ordinary stains, but once stained with hot carbol fuchsin it resists decolourisation with acid-alcohol. Acid-fast bacilli appear red on a blue background. Teichoic acids occur in Gram-positive walls and chitin in fungal walls."
  },
  {
    id: 8,
    question: "The 2001 'Amerithrax' letter attacks in the USA, a landmark in microbial forensics, involved spores of",
    options: ["Clostridium botulinum", "Yersinia pestis", "Bacillus anthracis", "Francisella tularensis"],
    answer: 2,
    explanation: "Letters containing Bacillus anthracis spores were mailed to media offices and senators, killing five people. Genomic analysis traced the spores to a particular laboratory flask (RMR-1029). Endospores of Bacillus and Clostridium are highly resistant to heat, drying and disinfectants."
  },
  {
    id: 9,
    question: "Highly resistant, dormant endospores that survive boiling, drying and many disinfectants are formed by which pair of bacterial genera?",
    options: ["Escherichia and Salmonella", "Staphylococcus and Streptococcus", "Mycobacterium and Treponema", "Bacillus and Clostridium"],
    answer: 3,
    explanation: "Bacillus (aerobic) and Clostridium (anaerobic) are Gram-positive rods that form endospores containing dipicolinic acid and calcium, with very little water. Spores can remain viable for decades in soil. Sterilisation by autoclaving at 121°C is designed to kill them."
  },
  {
    id: 10,
    question: "Gram-positive cocci arranged in grape-like clusters on microscopy are characteristic of",
    options: ["Staphylococcus", "Streptococcus", "Neisseria", "Escherichia"],
    answer: 0,
    explanation: "Staphylococci divide in several planes and form irregular clusters. Streptococci divide in one plane and form chains, and Neisseria are Gram-negative diplococci. Escherichia coli is a Gram-negative rod."
  },
  {
    id: 11,
    question: "In a bacterial growth curve, cells divide at a constant, maximal rate during the",
    options: ["Lag phase", "Stationary phase", "Logarithmic phase", "Decline phase"],
    answer: 2,
    explanation: "In the log phase the population doubles every generation time and growth is fastest. In the lag phase cells adapt and make enzymes without dividing much. In the stationary phase division equals death as nutrients run out, and in the decline phase deaths exceed new cells."
  },
  {
    id: 12,
    question: "A culture begins with 100 bacterial cells that have a generation time of 20 minutes. Assuming exponential growth, how many cells will be present after 2 hours?",
    options: ["6400", "1200", "3200", "12800"],
    answer: 0,
    explanation: "Two hours contain 120 ÷ 20 = 6 generations. N = N₀ × 2ⁿ = 100 × 2⁶ = 100 × 64 = 6400 cells. Linear thinking (100 × 12) is a common mistake."
  },
  {
    id: 13,
    question: "A bacterial population grows from 1 × 10² to 1.6 × 10³ cells in 80 minutes of exponential growth. The generation time is",
    options: ["10 minutes", "20 minutes", "40 minutes", "16 minutes"],
    answer: 1,
    explanation: "The population increased 16-fold, which is 2⁴, so 4 generations occurred. Generation time = 80 ÷ 4 = 20 minutes. The number of generations is found from n = log(N/N₀) ÷ log 2."
  },
  {
    id: 14,
    question: "Most bacteria pathogenic to humans, with an optimum growth temperature near 37°C, are classified as",
    options: ["Mesophiles", "Psychrophiles", "Thermophiles", "Hyperthermophiles"],
    answer: 0,
    explanation: "Mesophiles grow best between about 20°C and 45°C, which includes body temperature. Psychrophiles prefer cold (below about 15°C) and thermophiles prefer roughly 45–80°C. Refrigeration of biological exhibits slows the growth of most mesophilic contaminants."
  },
  {
    id: 15,
    question: "Which statement about viruses is correct?",
    options: ["They contain both DNA and RNA along with their own ribosomes", "They reproduce by binary fission outside host cells", "They have a peptidoglycan cell wall like bacteria", "They have DNA or RNA in a protein coat and multiply only in living cells"],
    answer: 3,
    explanation: "A virus particle (virion) has one kind of nucleic acid in a protein coat, sometimes with a lipid envelope. It lacks ribosomes and energy-producing machinery, so it is an obligate intracellular parasite. It is not affected by antibiotics that target bacterial walls or ribosomes."
  },
  {
    id: 16,
    question: "HIV is classed as a retrovirus because it",
    options: ["Copies its RNA genome into DNA by reverse transcriptase", "Has a double-stranded DNA genome without RNA", "Replicates only inside bacterial cells", "Lacks a protein capsid around its genome"],
    answer: 0,
    explanation: "Retroviruses carry reverse transcriptase, which copies their RNA genome into DNA that is then integrated into the host chromosome by integrase. This reverses the usual DNA → RNA flow of information. Reverse transcriptase is also used in the laboratory to make cDNA, for example in RT-PCR."
  },
  {
    id: 17,
    question: "Viruses that infect and replicate within bacteria, such as T4 in Escherichia coli, are called",
    options: ["Viroids", "Prions", "Mycoplasmas", "Bacteriophages"],
    answer: 3,
    explanation: "Bacteriophages ('bacteria eaters') inject their nucleic acid into bacteria and may lyse them. Viroids are naked infectious RNA molecules of plants, and prions are infectious proteins without nucleic acid. Mycoplasmas are wall-less bacteria, not viruses."
  },
  {
    id: 18,
    question: "The infectious agent of Creutzfeldt-Jakob disease and 'mad cow disease', which contains no nucleic acid, is a",
    options: ["Viroid", "Bacteriophage", "Prion", "Rickettsia"],
    answer: 2,
    explanation: "Prions are misfolded forms of a normal host protein (PrP) that convert normal PrP into the abnormal form. They resist ordinary sterilisation, including standard autoclaving and formalin. Viroids, by contrast, are small circular RNA molecules."
  },
  {
    id: 19,
    question: "The cell wall of true fungi is made mainly of",
    options: ["Peptidoglycan", "Chitin", "Cellulose", "Silica"],
    answer: 1,
    explanation: "Fungal walls contain chitin (a polymer of N-acetylglucosamine) and glucans, and fungal membranes contain ergosterol instead of cholesterol. Peptidoglycan is the bacterial wall polymer, cellulose is found in plants, and silica forms diatom frustules."
  },
  {
    id: 20,
    question: "Saccharomyces cerevisiae, a unicellular fungus used in baking and brewing, usually reproduces asexually by",
    options: ["Binary fission", "Conidia formed on hyphae", "Fragmentation of mycelium", "Budding"],
    answer: 3,
    explanation: "Yeast cells form a small outgrowth (bud) that receives a nucleus and separates as a new cell. Fission yeast (Schizosaccharomyces) divides by fission instead. Moulds such as Aspergillus and Penicillium spread by conidia on hyphae."
  },
  {
    id: 21,
    question: "The malaria parasite Plasmodium, which has no locomotory organelles in its adult stage, belongs to which group of protozoa?",
    options: ["Sarcodina", "Mastigophora (flagellates)", "Sporozoa (Apicomplexa)", "Ciliophora (ciliates)"],
    answer: 2,
    explanation: "Sporozoans are all parasitic, lack cilia, flagella or pseudopodia in the adult, and form spores in their life cycle. Plasmodium is transmitted by female Anopheles mosquitoes. Sarcodina move by pseudopodia, flagellates by flagella and ciliates by cilia."
  },
  {
    id: 22,
    question: "Entamoeba histolytica, the cause of amoebic dysentery, moves and feeds by means of",
    options: ["Flagella", "Cilia", "Pseudopodia", "Apical complex"],
    answer: 2,
    explanation: "Entamoeba belongs to Sarcodina (amoeboid protozoa) and extends temporary cytoplasmic projections called pseudopodia. It is spread through faecally contaminated food and water. Its cysts in stool are the usual diagnostic stage."
  },
  {
    id: 23,
    question: "Kala-azar (visceral leishmaniasis), still reported from parts of Bihar, is caused by a flagellate protozoan transmitted by the sandfly. The parasite is",
    options: ["Trypanosoma gambiense", "Leishmania donovani", "Giardia lamblia", "Plasmodium vivax"],
    answer: 1,
    explanation: "Leishmania donovani belongs to the flagellates (Mastigophora) and is carried by Phlebotomus sandflies. Trypanosoma gambiense causes African sleeping sickness through the tsetse fly. Giardia causes diarrhoea and Plasmodium causes malaria."
  },
  {
    id: 24,
    question: "The only ciliate protozoan known to cause disease in humans is",
    options: ["Balantidium coli", "Paramecium caudatum", "Trichomonas vaginalis", "Toxoplasma gondii"],
    answer: 0,
    explanation: "Balantidium coli, carried by pigs, can cause dysentery in humans. Paramecium is a free-living ciliate. Trichomonas is a flagellate and Toxoplasma is a sporozoan."
  },
  {
    id: 25,
    question: "The adult human skeleton has 206 bones. How many of these form the axial skeleton?",
    options: ["126", "80", "64", "106"],
    answer: 1,
    explanation: "The axial skeleton includes skull (22), ear ossicles (6), hyoid (1), vertebral column (26), sternum (1) and ribs (24), totalling 80. The remaining 126 bones form the appendicular skeleton of the limbs and girdles. Ossicles are sometimes counted with the skull, but the total stays 80."
  },
  {
    id: 26,
    question: "How many bones make up one upper limb, including the pectoral girdle?",
    options: ["30", "32", "31", "34"],
    answer: 1,
    explanation: "Clavicle 1 + scapula 1 + humerus 1 + radius 1 + ulna 1 + carpals 8 + metacarpals 5 + phalanges 14 = 32. Each lower limb, including the hip bone, has 31 bones. Together 2 × 32 + 2 × 31 = 126 appendicular bones."
  },
  {
    id: 27,
    question: "The smallest bone in the human body, one of the middle-ear ossicles, is the",
    options: ["Stapes", "Incus", "Malleus", "Pisiform"],
    answer: 0,
    explanation: "The stirrup-shaped stapes, about 3 mm long, transmits vibrations from the incus to the oval window of the inner ear. The malleus and incus are the other two ossicles, and the pisiform is a small carpal bone. The femur is the longest and strongest bone."
  },
  {
    id: 28,
    question: "A newborn has about 270–300 separate bony elements, while an adult has 206. This is chiefly because",
    options: ["Some bones are resorbed and disappear completely", "Many separate bones and ossification centres fuse during growth", "The newborn's cartilage is counted as bone", "Adults lose bones through wear and tear"],
    answer: 1,
    explanation: "During growth, elements fuse: for example, the five sacral vertebrae form one sacrum, and the ilium, ischium and pubis form one hip bone. Epiphyses also unite with diaphyses. The timing of these fusions is the basis of skeletal age estimation."
  },
  {
    id: 29,
    question: "In the adult, the sacrum and coccyx are formed by fusion of how many vertebrae respectively?",
    options: ["4 and 5", "5 and 2", "3 and 4", "5 and 4"],
    answer: 3,
    explanation: "Five sacral vertebrae fuse into the sacrum and usually four coccygeal vertebrae form the coccyx. So the 33 vertebrae of a child become 26 bones in an adult (7 cervical, 12 thoracic, 5 lumbar, 1 sacrum, 1 coccyx). The number of coccygeal segments can vary from three to five."
  },
  {
    id: 30,
    question: "The three bones that unite at the acetabulum through a Y-shaped cartilage to form the hip bone are",
    options: ["Ilium, sacrum and femur", "Ischium, pubis and coccyx", "Ilium, ischium and pubis", "Pubis, femur and sacrum"],
    answer: 2,
    explanation: "The ilium, ischium and pubis meet at the acetabulum, the socket for the head of the femur. The triradiate cartilage between them fuses in the mid-teens, which is used in age estimation. The sacrum joins the ilium at the sacroiliac joint but is not part of the hip bone."
  },
  {
    id: 31,
    question: "In compact bone, the canals that run transversely and connect neighbouring Haversian canals with each other and with the periosteum are",
    options: ["Canaliculi", "Lacunae", "Medullary canals", "Volkmann's canals"],
    answer: 3,
    explanation: "Each osteon (Haversian system) has a central Haversian canal with concentric lamellae. Volkmann's canals run at right angles and carry vessels between osteons. Lacunae hold osteocytes, and canaliculi are fine channels linking lacunae."
  },
  {
    id: 32,
    question: "Large multinucleated cells derived from monocytes that resorb bone matrix are",
    options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Chondrocytes"],
    answer: 2,
    explanation: "Osteoclasts sit in resorption pits (Howship's lacunae) and secrete acid and enzymes that dissolve bone. Osteoblasts lay down new matrix and become osteocytes once trapped in lacunae. Chondrocytes are cartilage cells."
  },
  {
    id: 33,
    question: "The main inorganic mineral of bone, which makes up about two-thirds of its dry weight, is",
    options: ["Calcium carbonate", "Calcium oxalate", "Hydroxyapatite", "Magnesium phosphate"],
    answer: 2,
    explanation: "Bone mineral is crystalline hydroxyapatite, Ca₁₀(PO₄)₆(OH)₂, laid on a collagen type I framework. The mineral gives hardness and the collagen gives flexibility. Because hydroxyapatite survives burning and burial, bone persists long after soft tissues are gone."
  },
  {
    id: 34,
    question: "A thin ground section of a long-bone fragment shows mainly plexiform (laminar) bone, with layers of bone and vascular networks in a brick-like pattern. The fragment is most likely",
    options: ["Human adult", "Non-human, for example bovine", "Human infant", "Human, elderly individual"],
    answer: 1,
    explanation: "Plexiform bone is typical of fast-growing large mammals such as cattle and is not normally seen in adult human compact bone. Human cortical bone is dominated by scattered secondary osteons (Haversian bone). Histology is especially useful when fragments are too small for gross identification."
  },
  {
    id: 35,
    question: "Powdered bone from a small charred fragment is extracted and reacts with anti-human serum to form a precipitin band. This test is used to establish",
    options: ["That the bone is of human origin", "The sex of the individual", "The age at death", "The stature of the individual"],
    answer: 0,
    explanation: "The precipitin test detects species-specific proteins by an antigen–antibody reaction, so a reaction with anti-human serum indicates human origin. Sex, age and stature need morphological, radiological or DNA methods. Heavily burnt bone may give a negative result because proteins are denatured."
  },
  {
    id: 36,
    question: "According to Krogman, the single part of the skeleton that allows sex to be determined most accurately in adults is the",
    options: ["Skull", "Femur", "Sternum", "Pelvis"],
    answer: 3,
    explanation: "Krogman reported about 95% accuracy from the pelvis alone, about 90–92% from the skull, about 98% from pelvis plus skull, and about 100% from the whole skeleton. The pelvis is the most reliable because it is adapted for childbirth in females. Sexing is reliable only after puberty."
  },
  {
    id: 37,
    question: "An adult pelvis shows a subpubic angle of about 100°, a wide and shallow greater sciatic notch and a well-marked preauricular sulcus. The pelvis is most likely",
    options: ["Male", "Female", "Of a child, so sex cannot be assessed", "Indeterminate, because the features conflict"],
    answer: 1,
    explanation: "All three features are female traits linked to the wider birth canal. A male pelvis has a narrow, V-shaped subpubic angle (about 70°) and a narrow, deep sciatic notch. The preauricular sulcus is a groove in front of the sacroiliac joint that is usually prominent in females."
  },
  {
    id: 38,
    question: "The length of the pubis of an adult pelvis is 84 mm and the length of the ischium is 80 mm. The ischiopubic index and the sex it indicates are",
    options: ["95, male", "105, male", "75, female", "105, female"],
    answer: 3,
    explanation: "Ischiopubic index = (pubic length ÷ ischial length) × 100 = (84 ÷ 80) × 100 = 105. Washburn's ranges are about 73–94 in males and 91–115 in females, so a value above about 95 indicates a female. The longer pubis widens the pelvic inlet in females."
  },
  {
    id: 39,
    question: "Which skull feature suggests a female rather than a male?",
    options: ["Prominent supraorbital ridges and glabella", "Large, prominent mastoid processes", "Square chin with everted angles of the mandible", "Sharp upper margins of the orbits"],
    answer: 3,
    explanation: "Female skulls are generally smaller and smoother, with sharp supraorbital margins, prominent frontal and parietal eminences and small mastoids. Males have heavy brow ridges, rounded orbital margins, large mastoids and a square chin. The skull is the next best indicator of sex after the pelvis."
  },
  {
    id: 40,
    question: "The anterior fontanelle of the skull normally closes by about",
    options: ["18 months to 2 years", "2 to 3 months", "6 months", "5 years"],
    answer: 0,
    explanation: "The diamond-shaped anterior fontanelle closes at about 18–24 months, while the posterior fontanelle closes in the first two to three months. Fontanelle status helps estimate age in infants. A widely open anterior fontanelle after two years suggests disease such as rickets or hydrocephalus."
  },
  {
    id: 41,
    question: "In the body of a newborn, the presence of an ossification centre in the lower end of the femur indicates that the foetus",
    options: ["Was less than 28 weeks old", "Had lived for at least a week after birth", "Was full-term, at about 36–40 weeks of gestation", "Was stillborn"],
    answer: 2,
    explanation: "The centre for the distal femoral epiphysis appears in the last month of intrauterine life, so its presence suggests a mature, full-term foetus. This is important in infanticide cases to assess viability. It does not by itself show live birth, which needs other evidence such as the hydrostatic test."
  },
  {
    id: 42,
    question: "Which epiphysis is the last in the body to fuse, usually in the early or mid-twenties?",
    options: ["Sternal end of the clavicle", "Head of the femur", "Lower end of the radius", "Crest of the ilium"],
    answer: 0,
    explanation: "The sternal end of the clavicle is the last epiphysis to unite, at about 22–25 years. Its fusion status helps to decide whether a young adult is past the early twenties. The head of the femur fuses by about 17–18 years and the iliac crest by about 20 years."
  },
  {
    id: 43,
    question: "Compared with males of the same population, the appearance and fusion of ossification centres in females generally occurs",
    options: ["About one to two years later", "About one to two years earlier", "At exactly the same age", "Earlier in the upper limb but later in the lower limb"],
    answer: 1,
    explanation: "Females mature skeletally earlier, so fusion ages are usually one to two years lower than in males. Ages must therefore be interpreted separately for each sex. Population, nutrition and climate also affect the timing, which is why Indian reference data are preferred for Indian cases."
  },
  {
    id: 44,
    question: "The ten-phase scheme of age estimation from changes in the face of the pubic symphysis was proposed by",
    options: ["Gösta Gustafson", "Suchey and Brooks", "Trotter and Gleser", "T. Wingate Todd"],
    answer: 3,
    explanation: "Todd (1920) described ten phases of the symphyseal face, from a rugged billowed surface in youth to an eroded rim in old age, covering about 18 to 50+ years. Suchey and Brooks later simplified it to six phases. Gustafson's method uses teeth and Trotter–Gleser equations estimate stature."
  },
  {
    id: 45,
    question: "Which statement about age estimation from cranial suture closure is correct?",
    options: ["Sutures close in a strict order at fixed ages, so the method is very accurate", "Endocranial closure begins earlier than ectocranial, and the method is unreliable", "Ectocranial closure always begins before endocranial closure", "Cranial sutures never begin to close before 60 years of age"],
    answer: 1,
    explanation: "Endocranial closure usually starts earlier than ectocranial closure, commonly from the late twenties in the sagittal suture. Variation between individuals is large, so suture closure gives only a broad age range. It is used when better indicators such as the pubic symphysis are unavailable."
  },
  {
    id: 46,
    question: "Using the Trotter and Gleser equation for white males, Stature (cm) = 2.38 × femur length (cm) + 61.41, what is the estimated stature for a femur of 45 cm?",
    options: ["About 168.5 cm", "About 107.1 cm", "About 172.4 cm", "About 160.2 cm"],
    answer: 0,
    explanation: "2.38 × 45 = 107.1 cm, and 107.1 + 61.41 = 168.51 cm. The equation carries a standard error of about ±3.3 cm. Trotter and Gleser derived their equations from American skeletal collections, including World War II and Korean War dead."
  },
  {
    id: 47,
    question: "Taking the femur to be about 27% of living stature, what is the approximate stature of a person whose femur measures 43.2 cm?",
    options: ["117 cm", "150 cm", "160 cm", "171 cm"],
    answer: 2,
    explanation: "Stature ≈ femur length ÷ 0.27 = 43.2 ÷ 0.27 = 160 cm. Such rough proportion rules are useful in the field but are less accurate than population-specific regression equations. Lower-limb bones give better stature estimates than upper-limb bones."
  },
  {
    id: 48,
    question: "Pan's formula for estimating stature from long bones was derived from measurements on",
    options: ["American World War II dead", "French cadavers studied by Manouvrier", "Indian (Hindu) subjects", "British skeletons studied by Karl Pearson"],
    answer: 2,
    explanation: "N. Pan (1924) worked out the proportion of long bones to stature in Hindus, so it is often quoted for Indian cases. Trotter and Gleser used American war dead and the Terry collection, while Pearson used Rollet's French data. Formulae work best on the population from which they were derived."
  },
  {
    id: 49,
    question: "Only the two upper limbs of a dismembered body are recovered. The arm span measured from the tip of one middle finger to the other across the chest is useful because it",
    options: ["Is about half of the stature", "Is approximately equal to the stature", "Is about one-quarter of the stature", "Bears no fixed relation to stature"],
    answer: 1,
    explanation: "In adults, arm span is roughly equal to height. Other rough rules are that the distance from vertex to symphysis pubis is about half the stature. Such estimates need to be confirmed with long-bone regression formulae when possible."
  },
  {
    id: 50,
    question: "A centrally placed foramen magnum under the skull, so that the skull balances on the vertebral column, distinguishes a human skull from that of most quadruped animals. This feature reflects",
    options: ["Larger teeth in humans", "A longer snout", "Upright bipedal posture", "Absence of cranial sutures"],
    answer: 2,
    explanation: "In humans the foramen magnum lies forward and faces downward, which suits an upright head on a vertical spine. In quadrupeds it lies at the back of the skull and faces backward. Humans also have a large braincase relative to the face, which helps separate human from animal skulls."
  }
];

export default questions;
