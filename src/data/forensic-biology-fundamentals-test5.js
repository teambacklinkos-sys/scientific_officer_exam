const questions = [
  {
    id: 1,
    question: "A room in which a murder is suspected has been washed and repainted. Which reagent is most suitable for spraying over large areas in darkness to reveal traces of blood that cannot be seen?",
    options: ["Luminol", "Phenolphthalin (Kastle-Meyer reagent)", "Benzidine", "Pyridine and glucose (Takayama reagent)"],
    answer: 0,
    explanation: "Luminol is oxidised in the presence of haem and an oxidant to give a blue chemiluminescent glow, which can be seen and photographed in darkness. It is very sensitive and can be sprayed over walls and floors. Kastle-Meyer is applied to swabs or samples rather than sprayed, and benzidine is now avoided because it is carcinogenic."
  },
  {
    id: 2,
    question: "In the Teichmann test for blood, a stain heated with glacial acetic acid and a halide (sodium chloride) gives",
    options: ["Pink feathery crystals of haemochromogen", "Yellow needle-shaped crystals of spermine picrate", "Brown rhombic crystals of haemin", "Dark brown crystals of choline periodide"],
    answer: 2,
    explanation: "Heating converts haem into haematin, which combines with chloride to form haemin (ferriprotoporphyrin chloride) crystals, brown and rhombic in shape. Haemochromogen crystals belong to the Takayama test. Spermine picrate (Barberio) and choline periodide (Florence) crystals are tests for semen."
  },
  {
    id: 3,
    question: "The Takayama microcrystal test for blood uses pyridine, glucose and sodium hydroxide and produces",
    options: ["Pink feathery haemochromogen crystals", "Brown rhombic haemin crystals", "Blue chemiluminescence in darkness", "A blue-green colour with tetramethylbenzidine"],
    answer: 0,
    explanation: "In alkaline conditions, glucose reduces haem iron and pyridine combines with it to give pink pyridine haemochromogen crystals. The test works on fairly old stains and is considered confirmatory for blood. It does not indicate whether the blood is human."
  },
  {
    id: 4,
    question: "After a stain is confirmed as blood, the test used to find out whether it is of human or animal origin is the",
    options: ["Takayama test", "Luminol test", "Acid phosphatase test", "Precipitin test"],
    answer: 3,
    explanation: "The precipitin test, introduced by Uhlenhuth in 1901, uses an antiserum against human proteins that forms a visible precipitate with human blood extract. It can be done as a ring test, by gel diffusion or by crossover electrophoresis. Takayama and luminol show only that blood is present."
  },
  {
    id: 5,
    question: "The presumptive test for seminal stains that detects the very high level of a prostatic enzyme, using α-naphthyl phosphate and a diazo dye such as Fast Blue B to give a purple colour, is the",
    options: ["Acid phosphatase test", "Florence test", "Barberio test", "Starch–iodine test"],
    answer: 0,
    explanation: "Seminal fluid contains far more acid phosphatase than other body fluids, because the prostate secretes it. The enzyme releases α-naphthol, which couples with the dye to form a purple colour within seconds. Vaginal fluid gives weaker and slower reactions, so timing matters."
  },
  {
    id: 6,
    question: "In the Florence test for seminal stains, the reagent of iodine and potassium iodide reacts with choline to form",
    options: ["Yellow needle crystals of spermine picrate", "Brown rhombic crystals of haemin", "Pink feathery crystals of haemochromogen", "Dark brown crystals of choline periodide"],
    answer: 3,
    explanation: "Choline is present in high amounts in semen, and with iodine it forms brown periodide crystals. Choline also occurs in other tissues, so a positive result is only presumptive. A negative result does not rule out semen."
  },
  {
    id: 7,
    question: "In the Barberio test for semen, picric acid reacts with spermine to form",
    options: ["Yellow needle-shaped crystals of spermine picrate", "Brown crystals of choline periodide", "Pink crystals of haemochromogen", "A purple azo dye"],
    answer: 0,
    explanation: "Spermine, a polyamine abundant in seminal fluid, forms yellow spermine picrate crystals with picric acid. Like the Florence test, it is a crystal test that is presumptive only. Both have largely been replaced by AP screening followed by sperm search or PSA testing."
  },
  {
    id: 8,
    question: "A stain on a victim's petticoat gives a strong, rapid acid phosphatase reaction, but no spermatozoa are found even after careful searching of extracts. The best next step to confirm that the stain is semen is to test for",
    options: ["Haemoglobin by the Takayama test", "Prostate-specific antigen (p30)", "Salivary α-amylase", "Urea and creatinine"],
    answer: 1,
    explanation: "Men who are azoospermic or have had a vasectomy produce seminal fluid without sperm. PSA (p30), made by the prostate, is present in semen whether or not sperm are present, and immunochromatographic kits detect it easily. Semenogelin tests can also be used."
  },
  {
    id: 9,
    question: "When an alternate light source in the ultraviolet to blue range is used on clothing, dried semen stains typically appear",
    options: ["Deep black and non-fluorescent", "Bright bluish-white fluorescent", "Bright red", "Exactly like the background fabric"],
    answer: 1,
    explanation: "Semen contains fluorescent compounds such as flavins and choline conjugates, so dried stains glow bluish-white under UV or blue light. This helps locate stains before chemical testing. Many other substances, such as some detergents, also fluoresce, so fluorescence is only a search tool."
  },
  {
    id: 10,
    question: "The presumptive identification of a saliva stain is based on detecting",
    options: ["Acid phosphatase activity", "Haem peroxidase-like activity", "Creatinine", "α-Amylase activity"],
    answer: 3,
    explanation: "Saliva contains high levels of α-amylase, which digests starch. In the starch–iodine test the blue colour fails to develop where amylase has acted, and the Phadebas method releases a blue dye from a starch substrate. Pancreatic amylase in faeces and other fluids can give weak reactions."
  },
  {
    id: 11,
    question: "Cigarette butts recovered at a scene are sent for DNA profiling. The biological material on them that provides the DNA is mainly",
    options: ["Spermatozoa", "Red blood cells", "Buccal epithelial cells", "Hair shafts"],
    answer: 2,
    explanation: "Saliva itself has few cells of its own, but it carries buccal epithelial cells shed from the inside of the cheek. These cells stick to the filter tip and give good DNA profiles. Envelopes, stamps, bottles and cups can be examined in the same way."
  },
  {
    id: 12,
    question: "In the Jaffe test, used to support the identification of a urine stain, creatinine in the extract reacts with alkaline picrate to give",
    options: ["A deep blue colour", "A purple colour", "A green fluorescence", "An orange-red colour"],
    answer: 3,
    explanation: "Creatinine forms an orange-red complex with picric acid in alkaline conditions. High creatinine and urea levels are characteristic of urine. Because these compounds also occur at lower levels in sweat and other fluids, the tests are presumptive."
  },
  {
    id: 13,
    question: "Presumptive identification of faecal stains is based on detecting",
    options: ["α-Amylase", "Urobilin", "Acid phosphatase", "Prostate-specific antigen"],
    answer: 1,
    explanation: "Bacterial breakdown of bilirubin in the gut produces urobilinogen and urobilin. With zinc salts urobilin gives a characteristic green fluorescence under UV light (Schlesinger's test). Microscopic examination for undigested food, such as plant cells and muscle fibres, also helps."
  },
  {
    id: 14,
    question: "Menstrual blood differs from ordinary venous blood in that it",
    options: ["Contains endometrial cells and fibrinolysed blood", "Contains spermatozoa and seminal fluid", "Contains no haemoglobin at all", "Shows no peroxidase-like activity"],
    answer: 0,
    explanation: "Menstrual discharge contains blood mixed with endometrial tissue, mucus and vaginal epithelial cells, and its fibrin has been broken down by fibrinolysis. Markers such as MMP-11 mRNA are used to identify it. It gives normal positive tests for haem, so presumptive blood tests cannot distinguish it."
  },
  {
    id: 15,
    question: "Besides glycogen-rich epithelial cells, which bacteria, the dominant normal flora of the adult vagina, support the identification of a stain as vaginal fluid?",
    options: ["Mycobacterium species", "Bacillus anthracis", "Lactobacillus species", "Vibrio cholerae"],
    answer: 2,
    explanation: "Lactobacilli convert glycogen from shed epithelial cells into lactic acid, keeping vaginal pH around 4–4.5. Their DNA or mRNA, together with markers such as MUC4, is used in body-fluid identification panels. Lactobacilli also occur in the mouth and gut, so they are supportive rather than conclusive."
  },
  {
    id: 16,
    question: "For DNA identification of a body that is completely skeletonised and has been exposed for years, which of the following usually gives the best DNA yield?",
    options: ["Ribs exposed on the surface", "Petrous temporal bone or intact molars", "Thin fragments of the skull vault", "Finger bones lying on the surface"],
    answer: 1,
    explanation: "The dense petrous bone and teeth protected by enamel shield DNA from water, microbes and temperature changes. They often give the highest yields of endogenous DNA from old remains. Femur shafts are also commonly used, while thin, porous or exposed bones degrade fastest."
  },
  {
    id: 17,
    question: "A blood-soaked shirt is recovered wet from the scene of a stabbing. Before packing it for the laboratory, it should be",
    options: ["Packed at once in an airtight plastic bag", "Washed gently to remove dirt and soil", "Air-dried in shade, then packed in paper", "Dried quickly in sunlight or with a hot dryer"],
    answer: 2,
    explanation: "Moist biological material in plastic grows bacteria and moulds, which destroy DNA and antigens. Air-drying and packing in breathable paper prevent this. Heat and sunlight (UV) also damage DNA, so they should be avoided."
  },
  {
    id: 18,
    question: "A liquid blood reference sample is to be collected from a suspect for DNA profiling. It should be drawn into a tube containing",
    options: ["EDTA (lavender top)", "Sodium fluoride and potassium oxalate (grey top)", "No additive at all", "Formalin"],
    answer: 0,
    explanation: "EDTA prevents clotting and chelates the magnesium ions that DNA-degrading nucleases need. Fluoride tubes are used for blood alcohol samples to stop glycolysis and microbial fermentation. Formalin damages DNA and is never used for DNA samples."
  },
  {
    id: 19,
    question: "A blood drop strikes a smooth floor and leaves an elliptical stain 6 mm wide and 12 mm long. The angle of impact is",
    options: ["60°", "30°", "45°", "90°"],
    answer: 1,
    explanation: "Angle of impact = sin⁻¹(width ÷ length) = sin⁻¹(6 ÷ 12) = sin⁻¹(0.5) = 30°. A circular stain (width = length) means the drop hit at 90°. The more elongated the stain, the more acute the angle."
  },
  {
    id: 20,
    question: "In an elongated bloodstain produced by a drop moving at an angle, the direction of travel of the drop is shown by",
    options: ["The wide rounded end, which points in the direction of travel", "The colour of the stain", "The number of satellite stains only", "The narrow 'tail' end, which points in the direction the drop was travelling"],
    answer: 3,
    explanation: "As the drop hits at an angle, blood is pushed forward, forming a tail or scallops on the far side. So the tail points the way the drop was moving. This helps trace stains back towards their source."
  },
  {
    id: 21,
    question: "In bloodstain pattern analysis, the area of convergence is found by projecting the long axes of several impact stains on a surface. It represents",
    options: ["The exact height of the blood source above the floor", "The source's position projected onto that surface", "The point where the attacker was standing", "The time at which the blood was shed"],
    answer: 1,
    explanation: "Lines drawn through the long axes of spatter stains meet in an area of convergence on the surface. Adding the angles of impact (by stringing or trigonometry) gives the three-dimensional area of origin, including height. These help determine the position of the victim when the blows were struck."
  },
  {
    id: 22,
    question: "On a ceiling above a beaten victim, an analyst finds three separate linear cast-off trails from a bloodied weapon. The minimum number of blows struck is",
    options: ["Three", "Four", "Two", "Six"],
    answer: 1,
    explanation: "The first blow puts blood on the weapon but produces no cast-off, because the weapon was clean when swung back. Each later backswing can throw off a trail, so three trails imply at least 3 + 1 = 4 blows. Not every swing leaves a trail, so the true number may be higher."
  },
  {
    id: 23,
    question: "Small bloodstains near a victim's face contain tiny air bubbles (vacuoles) and look diluted, around a pattern resembling fine spatter. These are most likely",
    options: ["Cast-off stains from a weapon", "Arterial spurt stains", "Expirated blood from the mouth or nose", "Transfer stains from a shoe"],
    answer: 2,
    explanation: "Blood mixed with air from the lungs or airways is expelled by breathing or coughing, giving bubble rings and a diluted appearance from saliva or mucus. Expirated patterns can look like high-velocity spatter, so the bubbles are an important clue. They indicate that the victim was breathing with blood in the airway."
  },
  {
    id: 24,
    question: "At a crime scene, a wall heavily covered with spatter shows a clean area with a sharp outline, in which no blood is present. This pattern is called a",
    options: ["Swipe pattern", "Pool", "Cast-off pattern", "Void pattern"],
    answer: 3,
    explanation: "A void is an absence of stains in an otherwise continuous pattern, caused by an object or person that blocked the blood. Finding the object whose shape matches the void can show where it, or the person, was during the bloodshed. If the object is missing, the scene may have been altered."
  },
  {
    id: 25,
    question: "A bloodstained hand brushes against a clean white wall, leaving a smeared stain. This is best described as a",
    options: ["Wipe", "Drip pattern", "Void", "Swipe"],
    answer: 3,
    explanation: "A swipe is the transfer of blood from a bloodied object onto a clean surface by a sliding motion. A wipe is formed when an object moves through an existing wet bloodstain and alters it. The distinction tells the analyst whether the blood was already on the surface."
  },
  {
    id: 26,
    question: "Two blood drops fall vertically from the same height, one on smooth glass and one on rough concrete. Compared with the drop on glass, the stain on concrete is likely to show",
    options: ["A perfectly smooth circular edge", "Irregular, spiny edges and satellite stains", "An elongated tail", "No stain at all"],
    answer: 1,
    explanation: "Surface texture strongly affects stain shape. Rough, porous surfaces break up the drop rim and produce spines and satellites, while smooth hard surfaces give round stains with smooth edges. So stain size and edge features should be compared only on similar surfaces."
  },
  {
    id: 27,
    question: "The dental formula of the permanent dentition in an adult human, for one half of one jaw, is",
    options: ["Incisors 2, canine 1, premolars 0, molars 2", "Incisors 2, canine 1, premolars 2, molars 3", "Incisors 2, canine 1, premolars 3, molars 3", "Incisors 3, canine 1, premolars 2, molars 2"],
    answer: 1,
    explanation: "I2 C1 PM2 M3 in each quadrant gives 8 teeth × 4 quadrants = 32 permanent teeth. The deciduous formula is I2 C1 M2, with no premolars, giving 20 teeth. Third molars may be absent or unerupted in many adults."
  },
  {
    id: 28,
    question: "In the FDI two-digit tooth notation, tooth 36 refers to the",
    options: ["Upper right first permanent molar", "Lower right canine", "Lower left first permanent molar", "Upper left second premolar"],
    answer: 2,
    explanation: "The first digit gives the quadrant: 1 upper right, 2 upper left, 3 lower left, 4 lower right for permanent teeth. The second digit counts from the midline, so 6 is the first molar. Hence 36 is the lower left first molar."
  },
  {
    id: 29,
    question: "In the FDI system, which notation refers to the upper right second deciduous molar?",
    options: ["15", "65", "55", "17"],
    answer: 2,
    explanation: "Deciduous quadrants are numbered 5 (upper right), 6 (upper left), 7 (lower left) and 8 (lower right). The deciduous teeth in each quadrant are numbered 1 to 5 from the midline, with 5 being the second molar. So the upper right second deciduous molar is 55."
  },
  {
    id: 30,
    question: "The first permanent tooth to erupt in the mouth, at about 6 years of age, is usually the",
    options: ["Central incisor", "First molar", "Canine", "First premolar"],
    answer: 1,
    explanation: "The first permanent molars erupt behind the deciduous second molars at about 6 years, often just before or with the lower central incisors. Because they do not replace any milk tooth, they are sometimes mistaken for deciduous teeth. Second molars erupt at about 12 years and third molars at about 17–25 years."
  },
  {
    id: 31,
    question: "The skull of a child shows all 20 deciduous teeth in place and four erupted first permanent molars, with no other permanent teeth erupted. The most likely age is",
    options: ["About 2–3 years", "About 10–11 years", "About 14–15 years", "About 6–7 years"],
    answer: 3,
    explanation: "All deciduous teeth have erupted by about 2½–3 years, and the first permanent molars erupt at about 6 years. Permanent incisors begin replacing the deciduous incisors soon after, at 6–8 years. So a full deciduous set plus four first molars, with nothing else, fits about 6–7 years."
  },
  {
    id: 32,
    question: "Of the six age-related changes in teeth used in Gustafson's method, which is considered the most reliable for estimating age?",
    options: ["Attrition", "Periodontosis", "Root resorption", "Transparency of the root"],
    answer: 3,
    explanation: "Gustafson (1950) scored attrition, periodontosis, secondary dentine, cementum apposition, root resorption and root transparency on ground sections. Root transparency, caused by mineral filling of dentinal tubules from the apex upwards, correlates best with age and is little affected by disease or diet. It is also central to Lamendin's method."
  },
  {
    id: 33,
    question: "Using Gustafson's regression, Age = 11.43 + 4.56 X, where X is the total score of the six criteria, what age is estimated for a tooth with a total score of 8?",
    options: ["About 36 years", "About 57 years", "About 48 years", "About 41 years"],
    answer: 2,
    explanation: "4.56 × 8 = 36.48, and 11.43 + 36.48 = 47.91, about 48 years. Gustafson's method needs extracted teeth and ground sections, and its reported error is several years. Later workers have revised the scoring and formula."
  },
  {
    id: 34,
    question: "When photographing a bite mark on a victim's skin, the L-shaped reference scale recommended to allow correction for size and distortion is the",
    options: ["ABFO No. 2 scale", "Henry classification card", "Munsell soil colour chart", "Snellen chart"],
    answer: 0,
    explanation: "The American Board of Forensic Odontology No. 2 scale has circles, linear rulers and grey bars to correct for angle, size and colour. Photographs are taken with the scale in the same plane as the bite mark. The Munsell chart is used for soil colour and Snellen for vision testing."
  },
  {
    id: 35,
    question: "Before a bite mark on a victim's shoulder is cleaned for photography and impressions, it should first be",
    options: ["Washed with soap and water", "Treated with luminol spray", "Lifted with adhesive tape for fibres", "Double-swabbed (moist, then dry) for saliva"],
    answer: 3,
    explanation: "The biter leaves saliva containing buccal cells on the skin, and the double-swab technique (moist swab followed by dry swab) recovers it efficiently. DNA from the saliva can identify the biter far more reliably than bite mark pattern comparison. Cleaning before swabbing would destroy this evidence."
  },
  {
    id: 36,
    question: "In deciding whether a young person is above or below 18 years from dental evidence, the most useful tooth to assess radiologically is the",
    options: ["Third molar", "Central incisor", "First premolar", "Canine"],
    answer: 0,
    explanation: "All other permanent teeth complete development by about 14–16 years, but the third molar continues developing through the late teens and early twenties. Its stage of root formation (for example using Demirjian's stages) gives the best dental evidence around the age of 18. Its development is variable, so results are given as probabilities."
  },
  {
    id: 37,
    question: "Under the Interpol Disaster Victim Identification guidelines, the primary identifiers that can establish identity on their own are",
    options: ["Fingerprints, DNA and dental comparison", "Clothing, jewellery and tattoos", "Photographs, height and hair colour", "Personal effects and visual recognition by relatives"],
    answer: 0,
    explanation: "Friction ridge analysis, DNA and forensic odontology are scientifically reliable and are called primary identifiers. Tattoos, medical scars, jewellery and clothing are secondary identifiers that support identification. Visual recognition is unreliable in mass disasters because of injuries and decomposition."
  },
  {
    id: 38,
    question: "The commonly used sequence of decomposition stages for a body exposed on land is",
    options: ["Bloat → fresh → dry → active decay → advanced decay", "Fresh → active decay → bloat → dry remains → advanced decay", "Fresh → bloat → active decay → advanced decay → dry (skeletal) remains", "Dry remains → advanced decay → active decay → bloat → fresh"],
    answer: 2,
    explanation: "In the fresh stage, autolysis begins with little visible change. Gases from bacteria cause bloating; tissues then break down and liquefy in active decay, followed by advanced decay and finally dry or skeletal remains. The rate of progress depends strongly on temperature, moisture and insect access."
  },
  {
    id: 39,
    question: "Autolysis, the earliest process of decomposition, is best defined as",
    options: ["Breakdown of tissues by intestinal bacteria", "Conversion of body fat into a waxy substance", "Self-digestion of cells by their own enzymes", "Drying of the tissues in hot, dry air"],
    answer: 2,
    explanation: "After death, cells lose oxygen, pH falls and lysosomal and other enzymes digest the cell from inside. Organs rich in enzymes, such as the pancreas and gastric mucosa, autolyse early. Putrefaction by bacteria follows and soon dominates."
  },
  {
    id: 40,
    question: "In the Indian climate, the first external sign of putrefaction in a body is usually",
    options: ["Green discolouration over the right iliac fossa", "Marbling of superficial veins over the body", "Skin slippage over the hands and feet", "Liquefaction of the eyeballs"],
    answer: 0,
    explanation: "Bacteria in the caecum, which lies close to the abdominal wall in the right iliac fossa, produce hydrogen sulphide, which forms green sulphhaemoglobin. In Indian summers this may appear within about 12–18 hours. Marbling and skin slippage follow later."
  },
  {
    id: 41,
    question: "The bacterium chiefly responsible for putrefaction, producing gas and the lecithinase that helps in adipocere formation, is",
    options: ["Staphylococcus aureus", "Mycobacterium tuberculosis", "Streptococcus pyogenes", "Clostridium perfringens"],
    answer: 3,
    explanation: "Clostridium perfringens (Clostridium welchii) is an anaerobic gas-forming gut bacterium that spreads through the body after death. Its lecithinase breaks down lecithin and its enzymes help hydrolyse fats. It is a major cause of bloating and the gas crepitus felt in putrefied tissues."
  },
  {
    id: 42,
    question: "According to Casper's dictum, a body that shows a certain degree of decomposition after one week exposed in air would reach the same degree after being buried in earth for about",
    options: ["Two weeks", "Four weeks", "One week", "Eight weeks"],
    answer: 3,
    explanation: "Casper's dictum gives the ratio of decomposition rates in air : water : earth as 1 : 2 : 8. So one week in air equals about two weeks in water and eight weeks in earth. Burial slows decay because of lower temperature, less oxygen and limited insect access."
  },
  {
    id: 43,
    question: "A body recovered from a damp, warm, airless environment such as a waterlogged grave shows a greasy, whitish, waxy change in the subcutaneous fat. This change is",
    options: ["Adipocere formation", "Mummification", "Rigor mortis", "Livor mortis"],
    answer: 0,
    explanation: "Adipocere forms when body fats are hydrolysed and hydrogenated into insoluble fatty acids and soaps under moist, anaerobic conditions, aided by bacterial enzymes. It preserves body shape and injuries for long periods. Mummification, by contrast, needs dry, hot conditions with air flow."
  },
  {
    id: 44,
    question: "The term 'thanatomicrobiome' refers to",
    options: ["Microbes in internal organs and cavities after death", "Bacteria living on the skin of healthy people", "Fungi growing on gravestones and coffins", "Viruses that cause sudden death"],
    answer: 0,
    explanation: "The word, from 'thanatos' (death), was introduced for microbes colonising internal organs, blood and cavities after death. Gut anaerobes such as Clostridium increasingly dominate as time passes. Predictable changes in these communities are being studied for PMI estimation."
  },
  {
    id: 45,
    question: "The 'necrobiome' of a decomposing body is best described as",
    options: ["Only the insects found on a corpse", "All organisms associated with decomposing remains", "Only the bacteria inside the gut", "The plants growing on a grave"],
    answer: 1,
    explanation: "The necrobiome concept groups together all the microbes and animals that live on or use decomposing remains, and their interactions. It includes the epinecrotic community on the body surface and the thanatomicrobiome inside. Studying it links entomology, microbiology and soil science in PMI work."
  },
  {
    id: 46,
    question: "Researchers sample skin and soil microbes from decomposing bodies at intervals and find that bacterial community composition changes in a regular, repeatable sequence. This approach is being developed as a",
    options: ["Method to identify the cause of death", "Test to determine blood group", "'Microbial clock' to estimate post-mortem interval", "Way to estimate stature"],
    answer: 2,
    explanation: "Because microbial succession during decomposition is fairly consistent under similar conditions, models built from sequencing data can predict time since death. The microbial clock may be useful when insects are absent, such as in winter or indoors. It is still a research tool rather than a routine method."
  },
  {
    id: 47,
    question: "Certain fungi fruit on soil suddenly enriched with nitrogen, for example after the decomposition of buried remains, and have been used to help locate clandestine graves. They are known as",
    options: ["Mycorrhizal fungi of healthy trees", "Rust fungi", "Ammonia fungi (post-putrefaction fungi)", "Yeasts"],
    answer: 2,
    explanation: "Decomposing bodies release ammonia and other nitrogen compounds into the soil, and some fungi respond by fruiting in that patch. Their appearance in an unusual spot can draw attention to a burial site. They form part of the fungal component of the necrobiome."
  },
  {
    id: 48,
    question: "The patch of soil around and beneath a decomposing body, enriched with nutrients and showing dead and then lush vegetation, is called a",
    options: ["Pollen profile", "Cadaver decomposition island", "Area of convergence", "Void pattern"],
    answer: 1,
    explanation: "Fluids released during decomposition first kill the vegetation and then fertilise the soil, raising nitrogen, phosphorus and microbial activity. This cadaver decomposition island can be detected long after the body is removed. Soil and plant changes may help locate a former deposition site."
  },
  {
    id: 49,
    question: "The swelling of a body in the bloat stage of decomposition is caused mainly by",
    options: ["Absorption of water through the skin", "Gases produced by anaerobic bacteria", "Rigor mortis of the abdominal muscles", "Clotting of blood within the vessels"],
    answer: 1,
    explanation: "Anaerobic gut bacteria ferment tissues and fill the abdomen and soft tissues with gas. Bloating can push out the tongue and eyes and can force purge fluid from the mouth and nose, which should not be mistaken for antemortem bleeding. Hydrogen sulphide also produces green discolouration."
  },
  {
    id: 50,
    question: "During the active decay stage of an exposed body in summer, the rapid loss of soft tissue mass is mainly due to",
    options: ["Feeding by large masses of fly larvae", "Evaporation of water alone", "Feeding by dermestid beetles", "Mummification"],
    answer: 0,
    explanation: "Maggot masses, together with bacteria, consume most soft tissues in active decay, often within days in warm weather. Dermestid beetles arrive later to feed on dry remains. Excluding insects slows decomposition dramatically, which shows how large their role is."
  }
];

export default questions;
