const questions = [
  {
    id: 1,
    question: "The three layers of a hair shaft, from the outside inwards, are:",
    options: ["Cuticle, cortex, medulla", "Medulla, cortex, cuticle", "Cortex, cuticle, medulla", "Cuticle, medulla, cortex"],
    answer: 0,
    explanation: "The cuticle is the outer layer of overlapping keratinised scales, the cortex is the main body of the shaft with pigment granules, and the medulla is the central core of cells and air spaces. Each layer has features useful in comparing hairs. The medulla may be absent in fine human hairs."
  },
  {
    id: 2,
    question: "In a human hair, pigment granules are found mainly in the:",
    options: ["Cuticle", "Cortex", "Medulla", "Root sheath only"],
    answer: 1,
    explanation: "Melanin granules made by follicle melanocytes are laid down in the cortex. Their colour, size, density and distribution are key comparison features. The cuticle is translucent, and the medulla has cells and air spaces rather than most of the pigment."
  },
  {
    id: 3,
    question: "Human head hair has which cuticular scale pattern?",
    options: ["Coronal", "Spinous (petal)", "Imbricate (flattened and overlapping)", "Diamond petal"],
    answer: 2,
    explanation: "Human hair has imbricate scales: flat, overlapping and with smooth or slightly wavy edges, like roof tiles. Coronal and spinous patterns are seen in various animals. Imbricate scales are also found in some animals, so the scale pattern is used with other features."
  },
  {
    id: 4,
    question: "Crown-like (coronal) cuticular scales that encircle the hair shaft are characteristic of hair from:",
    options: ["Humans", "Horses", "Cattle", "Rodents and bats"],
    answer: 3,
    explanation: "Coronal scales look like stacked crowns or cups around the shaft and are typical of very fine hairs, such as those of rodents and bats. They are not seen in human hair. Horse and cattle hairs usually show imbricate scales."
  },
  {
    id: 5,
    question: "Spinous (petal-like) cuticular scales that project from the hair shaft are characteristic of hair from:",
    options: ["Humans", "Cats, mink and seals", "Cattle", "Horses"],
    answer: 1,
    explanation: "Spinous scales are triangular and stand out from the shaft, giving a petal-like appearance. They are found in cats, mink and seals. They are never seen in human hair, which makes them useful for excluding human origin."
  },
  {
    id: 6,
    question: "The medullary index of a hair is defined as:",
    options: ["Diameter of the medulla ÷ diameter of the whole hair shaft", "Length of the medulla ÷ length of the hair", "Number of cuticular scales per unit length", "Thickness of the cuticle ÷ thickness of the cortex"],
    answer: 0,
    explanation: "The medullary index compares the width of the medulla with the width of the whole hair, both measured at the same point. In human hair it is usually less than about one-third. In most animals it is about one-half or more."
  },
  {
    id: 7,
    question: "A hair has a medulla 20 µm wide and a shaft diameter of 80 µm. Its medullary index and likely origin are:",
    options: ["4.0, consistent with animal hair", "0.25, consistent with animal hair", "0.25, consistent with human hair", "0.60, consistent with human hair"],
    answer: 2,
    explanation: "Medullary index = 20 ÷ 80 = 0.25, which is below one-third and consistent with human hair. Dividing the shaft diameter by the medulla width gives the wrong value of 4.0. Animal hairs usually have an index of 0.5 or more."
  },
  {
    id: 8,
    question: "In human head hair, the medulla is most commonly:",
    options: ["Continuous and very wide, filling most of the shaft", "Lattice-like", "Ladder-like", "Absent, fragmented or interrupted"],
    answer: 3,
    explanation: "Human head hairs usually have no medulla or a fragmented or interrupted one. A continuous, wide medulla is typical of most animal hairs. Some coarse human hairs, such as beard hairs, and hairs of East Asian people may have a continuous medulla."
  },
  {
    id: 9,
    question: "A lattice-type medulla is characteristic of hair from:",
    options: ["Humans", "Deer", "Cats", "Horses"],
    answer: 1,
    explanation: "Hairs of deer and other members of the family Cervidae have a lattice medulla that fills almost the whole shaft. Human hair never shows a lattice medulla. Many other animals have continuous or ladder-like medullae."
  },
  {
    id: 10,
    question: "Compared with animal hair, pigment in human hair is usually:",
    options: ["Evenly distributed, or slightly denser towards the cuticle", "Concentrated densely around the medulla", "Arranged in sharp, repeated colour bands along the shaft", "Absent from the cortex"],
    answer: 0,
    explanation: "Human hair pigment is fairly evenly spread across the cortex, sometimes denser near the outside. In many animals, pigment is concentrated towards the medulla and may form distinct bands (agouti banding). These differences help to tell human from animal hair."
  },
  {
    id: 11,
    question: "About 85–90% of scalp hairs at any given time are in the:",
    options: ["Telogen phase", "Catagen phase", "Anagen phase", "Exogen phase"],
    answer: 2,
    explanation: "The anagen (growth) phase lasts about 2–6 years for scalp hair, so most hairs are in it at any time. Catagen is a short transition of a few weeks affecting about 1–2% of hairs. About 10–15% are in the resting telogen phase, which lasts a few months before the hair is shed."
  },
  {
    id: 12,
    question: "A hair found at a scene has a club-shaped, unpigmented root with no attached tissue. This hair:",
    options: ["Was forcibly pulled out during the anagen phase", "Was naturally shed in the telogen phase and is unlikely to yield a nuclear DNA profile", "Is in the catagen phase and was growing actively", "Must belong to an animal"],
    answer: 1,
    explanation: "Telogen hairs have a club-shaped, keratinised root with little or no cellular tissue, and they fall out naturally. They usually give little nuclear DNA, so mitochondrial DNA analysis of the shaft is often used. Anagen roots are pigmented and elongated, often with a root sheath."
  },
  {
    id: 13,
    question: "A hair pulled from a victim's hand after a struggle has an elongated, pigmented root with attached follicular tissue. This suggests that the hair:",
    options: ["Was forcibly removed in the anagen phase and is suitable for nuclear DNA typing", "Was naturally shed in the telogen phase", "Was cut with a blade", "Has been burnt"],
    answer: 0,
    explanation: "Actively growing anagen hairs are firmly anchored and come out only with force, often bringing the root sheath with them. The sheath cells are nucleated, so nuclear STR profiling is usually possible. This also supports the claim of a struggle."
  },
  {
    id: 14,
    question: "A suspect's dyed head hair shows 1.5 cm of undyed regrowth next to the scalp. At an average growth rate of about 1 cm per month, the hair was last dyed about:",
    options: ["2 weeks ago", "6 weeks ago", "4 months ago", "1 year ago"],
    answer: 1,
    explanation: "1.5 cm ÷ 1 cm per month = 1.5 months, or about 6 weeks. Scalp hair grows at roughly 0.3–0.4 mm a day, which is close to 1 cm per month. The same principle is used for segmental hair analysis for drugs."
  },
  {
    id: 15,
    question: "A hair is coarse and circular in cross-section, with a continuous medulla and dense, evenly distributed pigment. It is most consistent with hair of:",
    options: ["African origin", "European origin", "An infant", "East Asian origin"],
    answer: 3,
    explanation: "Hair of East Asian (Mongoloid) origin is typically straight, coarse and round in cross-section, often with a continuous medulla and dense pigment. African hair is flattened, tightly curled and has dense, clumped pigment. European hair is oval in cross-section with fine to medium, evenly spread pigment."
  },
  {
    id: 16,
    question: "Cuticular scale patterns of a hair are often studied by making a cast of the hair surface in:",
    options: ["Agar", "Clear nail varnish or polyvinyl acetate", "Paraffin wax", "Glycerine"],
    answer: 1,
    explanation: "The hair is pressed into a thin layer of clear nail varnish or polyvinyl acetate and removed once it sets. The impression of the scales can then be seen clearly under the microscope. The method is simple, cheap and non-destructive to the hair."
  },
  {
    id: 17,
    question: "Microscopic hair comparison cannot link a hair to one individual. To strengthen an association, a rootless hair shaft is best examined by:",
    options: ["Mitochondrial DNA sequencing", "Nuclear STR typing", "ABO grouping", "The precipitin test"],
    answer: 0,
    explanation: "Hair shafts contain keratinised cells with little nuclear DNA, but mitochondrial DNA survives in many copies. Reviews in the USA found errors in microscopic hair comparison testimony, so microscopy is now followed by mtDNA analysis where possible. Nuclear STRs need a root with tissue."
  },
  {
    id: 18,
    question: "'Touch DNA' samples often yield little DNA because the outermost skin layer, the stratum corneum, consists mainly of:",
    options: ["Living nucleated basal cells", "Melanocytes", "Anucleate, keratinised dead cells (corneocytes)", "Sebaceous gland cells"],
    answer: 2,
    explanation: "Keratinocytes lose their nuclei as they move up to form the stratum corneum, so the shed flakes contain little DNA. Touch DNA is thought to come from residual DNA fragments, sweat, sebum and transferred material. This explains why yields vary so much."
  },
  {
    id: 19,
    question: "Buccal epithelial cells collected on a swab for reference DNA are:",
    options: ["Large, flat, nucleated, non-keratinised squamous cells", "Small anucleate cells", "Columnar ciliated cells", "Spindle-shaped smooth muscle cells"],
    answer: 0,
    explanation: "The inner cheek is lined by non-keratinised stratified squamous epithelium. Its surface cells are large, flat and polygonal with a central nucleus, and they are shed constantly. Buccal swabs are therefore a simple, painless source of reference DNA."
  },
  {
    id: 20,
    question: "Vaginal epithelial cells can be distinguished from many other squamous cells because they are rich in glycogen and stain dark brown with:",
    options: ["Christmas tree stain", "Lugol's iodine", "Haematoxylin alone", "Ziehl–Neelsen stain"],
    answer: 1,
    explanation: "Under oestrogen, the superficial cells of the vaginal epithelium store glycogen, which turns dark brown with iodine in Lugol's solution. Periodic acid–Schiff (PAS) staining also shows glycogen. Christmas tree stain is used to show spermatozoa."
  },
  {
    id: 21,
    question: "A penile swab from a suspect in a sexual assault case contains many glycogen-rich squamous cells that stain dark brown with Lugol's iodine. This finding:",
    options: ["Proves the presence of semen", "Shows that only the suspect's own skin cells are present", "Indicates the presence of blood", "Suggests contact with vaginal fluid, although some buccal and other cells can stain similarly"],
    answer: 3,
    explanation: "Many strongly glycogenated squamous cells point to vaginal epithelium and support contact with the victim. The test is not fully specific, because some buccal and urethral cells can contain glycogen. DNA profiling of the cells is used to establish whose they are."
  },
  {
    id: 22,
    question: "A person's DNA is found on a knife handle he never touched, carried there from a towel he had used. This is an example of:",
    options: ["Primary (direct) transfer", "Contamination by the analyst", "Secondary (indirect) transfer", "Somatic mutation"],
    answer: 2,
    explanation: "In secondary transfer, DNA moves from a person to an intermediate object or person and then to the item examined. It shows that the presence of DNA does not prove direct contact. Activity-level evaluation has to consider such transfer routes."
  },
  {
    id: 23,
    question: "Individuals who consistently leave much more DNA than others on items they touch are described as:",
    options: ["Good shedders", "Secretors", "Chimeras", "Carriers"],
    answer: 0,
    explanation: "Shedder status describes how much DNA a person deposits by touch, and it varies widely between people and over time. Hand washing, skin condition and activity affect it. Secretor status is a different idea, referring to ABH antigens in body fluids."
  },
  {
    id: 24,
    question: "On oily (sebaceous) skin sites such as the forehead and upper back, the dominant bacterium is:",
    options: ["Streptococcus mutans", "Lactobacillus crispatus", "Cutibacterium (Propionibacterium) acnes", "Bacteroides fragilis"],
    answer: 2,
    explanation: "Cutibacterium acnes is a lipid-loving anaerobe that thrives in sebaceous follicles and dominates oily skin sites. Moist sites such as the armpit favour Corynebacterium and Staphylococcus, and dry sites have more mixed communities. Lactobacillus crispatus is a vaginal organism and Streptococcus mutans an oral one."
  },
  {
    id: 25,
    question: "A stain contains a high proportion of Lactobacillus crispatus and Lactobacillus iners DNA. This points to the presence of:",
    options: ["Vaginal fluid", "Saliva", "Semen", "Faeces"],
    answer: 0,
    explanation: "The healthy vaginal microbiome is dominated by Lactobacillus species such as L. crispatus, L. iners, L. gasseri and L. jensenii. Detecting them by PCR or sequencing is being studied as a way to identify vaginal fluid. Other body fluids have quite different dominant bacteria."
  },
  {
    id: 26,
    question: "Detection of Streptococcus salivarius and Streptococcus mutans DNA in a stain supports the presence of:",
    options: ["Vaginal fluid", "Urine", "Blood", "Saliva"],
    answer: 3,
    explanation: "Oral streptococci such as S. salivarius and S. mutans are abundant in saliva and on the teeth and tongue. Their DNA in a stain, for example on a bite mark, supports saliva. Such markers add to amylase tests, which are not fully specific."
  },
  {
    id: 27,
    question: "Which bacteria serve as markers of faecal material in a stain?",
    options: ["Lactobacillus crispatus", "Enterococcus faecalis and Bacteroides species", "Cutibacterium acnes", "Streptococcus salivarius"],
    answer: 1,
    explanation: "Bacteroides species are the dominant anaerobes of the human colon, and Enterococcus faecalis is a classical faecal indicator. PCR assays for these organisms help identify faecal stains. The other organisms listed belong to vaginal, skin and oral communities."
  },
  {
    id: 28,
    question: "Bacterial communities on skin or in body fluids are usually profiled by sequencing the bacterial:",
    options: ["18S rRNA gene", "Cytochrome b gene", "16S rRNA gene", "Amelogenin gene"],
    answer: 2,
    explanation: "The 16S rRNA gene is found in all bacteria and has conserved regions for primers and variable regions that tell taxa apart. Sequencing it shows which bacteria are present and in what proportions. The 18S gene is used for eukaryotes, cytochrome b for animal species and amelogenin for human sex typing."
  },
  {
    id: 29,
    question: "Fierer and colleagues (2010) showed that bacteria left on computer keyboards and mice could be matched to the people who used them. This suggests that:",
    options: ["Skin bacterial communities are personal enough to serve as trace evidence", "Skin bacteria are identical in all people", "Bacteria destroy all human DNA on keyboards", "Keyboards are sterile surfaces"],
    answer: 0,
    explanation: "Each person's skin carries a distinctive mix of bacteria, which is transferred to objects they touch and persists for some time. The study matched the bacteria on objects more closely to their owners than to others. Skin microbiome profiling is being studied as a supplement to touch DNA."
  },
  {
    id: 30,
    question: "Under India's Universal Immunisation Programme, BCG vaccine is given intradermally at birth over the:",
    options: ["Right thigh", "Buttock", "Forearm", "Left upper arm"],
    answer: 3,
    explanation: "BCG is given intradermally over the left deltoid region, and it usually leaves a small depressed scar. In identifying unknown bodies, such scars are noted as identifying features. The thigh is used for other infant injections such as pentavalent vaccine."
  },
  {
    id: 31,
    question: "A person's serum is positive for anti-HBs but negative for anti-HBc and HBsAg. This pattern indicates:",
    options: ["Past natural infection with recovery", "Immunity due to hepatitis B vaccination", "Current acute infection", "Chronic carrier state"],
    answer: 1,
    explanation: "Hepatitis B vaccine contains only surface antigen, so vaccinated people make anti-HBs but not anti-HBc. Natural infection produces anti-HBc as well, which persists after recovery. Knowing this helps to interpret serology in exposure cases, such as needle-stick injuries among investigators."
  },
  {
    id: 32,
    question: "The enzyme multiplied immunoassay technique (EMIT), widely used for screening urine for drugs of abuse, is a:",
    options: ["Heterogeneous sandwich ELISA", "Radioimmunoassay", "Western blot", "Homogeneous immunoassay that needs no separation of bound and free label"],
    answer: 3,
    explanation: "In EMIT, the drug is labelled with an enzyme whose activity is reduced when an antibody binds it. Free drug in the urine competes for the antibody, leaving more enzyme active, so activity rises with drug concentration. No washing or separation step is needed, which suits automated analysers."
  },
  {
    id: 33,
    question: "In a suspected snakebite death, an ELISA using species-specific antivenom antibodies on tissue from the bite site helps to:",
    options: ["Determine the time of death", "Identify the victim's blood group", "Identify the species of snake responsible", "Detect alcohol in the tissue"],
    answer: 2,
    explanation: "Antibodies raised against the venom of each species can detect and distinguish venom antigens in bite-site tissue, blood or urine. This confirms envenomation and indicates the species. It is useful when the snake was not seen and the cause of death is disputed."
  },
  {
    id: 34,
    question: "In a lateral flow immunochromatographic strip, the coloured, labelled antibody is held in dried form in the:",
    options: ["Absorbent (wick) pad", "Conjugate pad", "Backing card", "Control line"],
    answer: 1,
    explanation: "When the sample wets the conjugate pad, the labelled antibody dissolves and binds any target antigen. The mixture moves along the nitrocellulose membrane to the test and control lines. The absorbent pad at the far end draws the liquid along and holds it."
  },
  {
    id: 35,
    question: "The red-purple colour of the lines in most lateral flow kits comes from:",
    options: ["Colloidal gold nanoparticles", "Horseradish peroxidase acting on TMB", "Fluorescein", "Radioactive iodine"],
    answer: 0,
    explanation: "Antibodies are conjugated to colloidal gold particles, which look red-purple when concentrated at a line. No substrate or development step is needed, so results are read in minutes. Coloured latex beads are sometimes used instead."
  },
  {
    id: 36,
    question: "In a sandwich-format lateral flow kit, only the control line appears after the stated reading time. The result is:",
    options: ["Positive", "Invalid", "Weak positive", "Negative"],
    answer: 3,
    explanation: "In sandwich format, a test line forms only when antigen links the labelled antibody to the capture antibody. A visible control line shows that the strip ran properly. So a control line without a test line means the target was not detected at or above the detection limit."
  },
  {
    id: 37,
    question: "A lateral flow test shows a test line but no control line. The correct interpretation is:",
    options: ["Positive", "Negative", "Invalid, and the test must be repeated", "Weak positive"],
    answer: 2,
    explanation: "The control line confirms that the sample flowed across the membrane and that the reagents worked. Without it the result cannot be trusted, whatever appears at the test line. The test is repeated with a new device."
  },
  {
    id: 38,
    question: "In a competitive lateral flow drug-screening cassette, a urine sample produces only the control line, with no test line. The result is:",
    options: ["Negative", "Positive for the drug", "Invalid", "Equivocal"],
    answer: 1,
    explanation: "In competitive format, the test line carries drug–protein conjugate. Labelled antibody binds there only if no free drug in the sample has already occupied it. Drug in the urine therefore stops the test line from forming, so no test line with a valid control means positive."
  },
  {
    id: 39,
    question: "RSID-Blood, a lateral flow kit for confirming human blood, detects:",
    options: ["Glycophorin A", "Human haemoglobin", "Peroxidase activity", "Human serum albumin"],
    answer: 0,
    explanation: "RSID-Blood uses two monoclonal antibodies against human glycophorin A, a red cell membrane protein. Because it targets a red cell membrane protein rather than haemoglobin, it is a useful complement to haemoglobin-based kits. HemaTrace is the kit that detects human haemoglobin."
  },
  {
    id: 40,
    question: "RSID-Semen detects which seminal protein?",
    options: ["Prostate-specific antigen", "Acid phosphatase", "Semenogelin", "Spermine"],
    answer: 2,
    explanation: "RSID-Semen uses antibodies against semenogelin, the main protein of the seminal coagulum, secreted by the seminal vesicles. It is present at very high levels in semen, including that of vasectomised men. PSA-based kits such as ABAcard p30 target prostate-specific antigen instead."
  },
  {
    id: 41,
    question: "RSID-Saliva detects:",
    options: ["Statherin", "Human salivary α-amylase", "Thiocyanate", "Lysozyme"],
    answer: 1,
    explanation: "RSID-Saliva uses monoclonal antibodies against human salivary α-amylase. It is more specific for saliva than activity tests such as starch–iodine, which also respond to pancreatic and bacterial amylases. Statherin is a newer saliva marker that this kit does not target."
  },
  {
    id: 42,
    question: "An undiluted semen extract gives a very faint test line on a PSA lateral flow kit, but a 1:100 dilution of the same extract gives a strong test line. This is due to:",
    options: ["Cross-reactivity with another protein", "Degradation of PSA in the extract", "An expired kit", "The high-dose hook effect"],
    answer: 3,
    explanation: "Semen contains very high levels of PSA, which can saturate the kit's antibodies and weaken the test line. Diluting the extract brings the antigen into the working range, so the line appears strongly. Kit protocols for semen therefore often specify dilution or testing at more than one dilution."
  },
  {
    id: 43,
    question: "The high-dose hook effect in a one-step sandwich immunoassay occurs because:",
    options: ["Excess antigen saturates the labelled antibody and the capture antibody separately, so few sandwiches form at the test line", "Too little antigen is present in the sample", "The control line uses up all the conjugate", "The antigen is a hapten"],
    answer: 0,
    explanation: "With a huge excess of antigen, free antigen occupies the capture antibodies at the test line while other antigen molecules carry the labelled antibody past them. Few labelled sandwiches are captured, so the signal falls and can give a false negative. Two-step assays with a wash between steps are less affected."
  },
  {
    id: 44,
    question: "A new blood identification kit is tested on 200 known blood samples and gives 190 positive results. Its sensitivity is:",
    options: ["90%", "95%", "97.5%", "100%"],
    answer: 1,
    explanation: "Sensitivity = true positives ÷ (true positives + false negatives) = 190 ÷ 200 = 95%. It is the ability of a test to detect the target when it is present. The 10 missed samples are false negatives."
  },
  {
    id: 45,
    question: "A blood identification kit is tested on 100 known non-blood samples and gives 4 positive results. Its specificity is:",
    options: ["4%", "92%", "99.6%", "96%"],
    answer: 3,
    explanation: "Specificity = true negatives ÷ (true negatives + false positives) = 96 ÷ 100 = 96%. It is the ability of a test to give a negative result when the target is absent. The 4 positives are false positives, perhaps due to cross-reacting material."
  },
  {
    id: 46,
    question: "In a validation study, a kit gave 45 true positive and 5 false positive results. Its positive predictive value is:",
    options: ["90%", "10%", "45%", "95%"],
    answer: 0,
    explanation: "Positive predictive value = true positives ÷ all positives = 45 ÷ (45 + 5) = 90%. It tells how likely a positive result is to be correct. Unlike sensitivity and specificity, PPV depends on how common the target is in the samples tested."
  },
  {
    id: 47,
    question: "The limit of detection (LOD) of a diagnostic kit is:",
    options: ["The largest amount of target that can be measured accurately", "The proportion of false positive results", "The smallest amount of target that can be reliably detected", "The shelf life of the kit"],
    answer: 2,
    explanation: "LOD is the lowest quantity or concentration of the target that the kit detects reliably, found by testing dilution series of known samples. It defines analytical sensitivity. Results below the LOD are reported as not detected rather than absent."
  },
  {
    id: 48,
    question: "During internal validation of a human-blood kit, an FSL tests it on blood from dogs, cattle, goats and primates. This step assesses:",
    options: ["Sensitivity", "Specificity and cross-reactivity", "Reproducibility", "Reagent stability"],
    answer: 1,
    explanation: "Testing non-target materials shows whether the kit gives false positives with other species or substances. This defines its specificity and any known cross-reactions, such as with higher primates. Sensitivity is assessed with dilution series of the target."
  },
  {
    id: 49,
    question: "In India, forensic science laboratories are accredited by NABL for testing competence, including the use of validated methods, under the standard:",
    options: ["ISO 9001", "ISO 14001", "ISO/IEC 17025", "ISO 15189"],
    answer: 2,
    explanation: "ISO/IEC 17025 sets out the general requirements for the competence of testing and calibration laboratories, including method validation, quality control and traceability. NABL accredits FSLs against it. ISO 15189 applies to medical laboratories and ISO 9001 to general quality management."
  },
  {
    id: 50,
    question: "A screening kit that rarely gives false negative results is said to have high:",
    options: ["Specificity", "Precision", "Reproducibility", "Sensitivity"],
    answer: 3,
    explanation: "A highly sensitive test detects almost all true positives, so false negatives are rare. This is the main requirement for a screening test, so that no evidence is missed. High specificity means few false positives, which is the main requirement for confirmatory tests."
  }
];

export default questions;
